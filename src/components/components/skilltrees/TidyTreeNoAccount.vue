<script>
// Import the stores.
import { useSkillsStore } from '../../../stores/SkillsStore';

// Nested components.
import SkillPanel from './../SkillPanel.vue';
import SliderControl from './SliderControl.vue';
import JoystickControl from './JoystickControl.vue';

// Algorithm.
import * as d3 from 'd3';

export default {
    setup() {
        const skillsStore = useSkillsStore();
        return {
            skillsStore
        };
    },
    data() {
        return {
            width: 6000,
            height: null,
            skill: {
                id: null,
                children: [],
                isMastered: null,
                isUnlocked: null,
                container: null,
                name: null,
                url: null,
                description: null,
                tagIDs: [],
                sprite: null,
                type: null
            },
            tree: {},
            root: {},
            context: {},
            hiddenCanvasContext: {},
            r: 1.5,
            nodes: [],
            nextCol: 1,
            colToNode: {},
            isSkillInfoPanelShown: false,
            scale: 0.3,
            panX: 0,
            panY: 0,
            // Printing
            data: {},
            // We store the d3 zoom call so the slider can call it
            d3Zoom: null,
            // For the loading animation.
            isLoading: true,
            xPos: 0,
            yPos: 0,
            showAnimation: false,
            showSkillPanel: false,
            resultNode: null
        };
    },
    components: {
        SkillPanel,
        SkillPanel,
        SliderControl,
        JoystickControl
    },
    async mounted() {
        if (this.skillsStore.filteredNestedSkillsList.length == 0) {
            await this.skillsStore.getFilteredNestedSkillsList();
        }

        // Specify the chart’s dimensions.
        this.height = window.innerHeight;

        this.skill = {
            name: 'SKILLS',
            sprite: null,
            children: this.skillsStore.filteredNestedSkillsList
        };

        this.getAlgorithm();

        // Set up the Hidden Canvas for Interactivity.
        let hiddenCanvas = document.getElementById('hidden-canvas');
        this.hiddenCanvasContext = hiddenCanvas.getContext('2d', {
            willReadFrequently: true
        });
        hiddenCanvas.style.display = 'none';

        // Listen for clicks on the main canvas
        canvas.addEventListener('click', async (e) => {
            // We actually only need to draw the hidden canvas when
            // there is an interaction. This sketch can draw it on
            // each loop, but that is only for demonstration.

            var data = this.nodes;
            //Figure out where the mouse click occurred.
            var mouseX = e.layerX;
            var mouseY = e.layerY;
            this.xPos = mouseX;
            this.yPos = mouseY;

            this.showAnimation = true;
            // Hide animation after 0.5 seconds (adjust as needed)
            setTimeout(() => {
                this.showAnimation = false;
            }, 500);
            // Get the corresponding pixel color on the hidden canvas
            // and look up the node in our map.
            var ctx = this.hiddenCanvasContext;

            // This will return that pixel's color
            var col = ctx.getImageData(mouseX, mouseY, 1, 1).data;

            //Our map uses these rgb strings as keys to nodes.
            var colString = 'rgb(' + col[0] + ',' + col[1] + ',' + col[2] + ')';
            var node = this.colToNode[colString];

            if (node && node.data.id) {
                // We clicked on something, lets set the color of the node
                // we also have access to the data associated with it, which in
                // this case is just its original index in the data array.
                node.renderCol = node.__pickColor;

                //Update the display with some data
                this.skill.name = node.data.name;
                this.skill.id = node.data.id;
                this.skill.type = node.data.type;

                // Get the mastery requirements data separately.
                // Because this is so much data, we do not send it with the rest of the skill tree,
                // or it will slow the load down too much.
                const result = await fetch(
                    '/skills/mastery-requirements-and-url/' + this.skill.id
                );
                const result2 = await result.json();
                this.skill.masteryRequirements = result2.mastery_requirements;
                this.skill.url = result2.url;
                this.showSkillPanel = true;
            }
        });

        // Zoom and pan with mouse
        // We have to construct the d3 zoom function and assign the zoom event,

        this.d3Zoom = d3
            .zoom()
            .scaleExtent([0.1, 5])
            .on('zoom', ({ transform }) => {
                this.drawTree(transform);
                // update slider percent ( Handle by us not d3 but will invoke when the d3 zoom event is call )
                this.$refs.sliderControl.changeGradientBG();
            });

        // Bind the above object to canvas so it can zoom the tree
        d3.select(this.context.canvas).call(this.d3Zoom);

        // Set initial zoom value.
        this.resetPos();

        // For the loading animation.
        this.isLoading = false;
    },
    methods: {
        getAlgorithm() {
            var skillsWithSubSkillsMoved = [];
            skillsWithSubSkillsMoved = JSON.parse(
                JSON.stringify(this.skill.children)
            );

            // Duplicate super skill node, and make second one a child of the first.
            // Put all the subskills of the node in the second version.
            // This is an attempt to show the subskills using only D3.
            // Other options, such as having them circle around the super skill,
            // like the D3 and Pixi version, were too complex.
            function moveSubSkills(parentChildren) {
                var i = parentChildren.length;
                while (i--) {
                    // If the skill is a super skill, and not an "end" super skill.
                    if (
                        parentChildren[i].type == 'super' &&
                        parentChildren[i].position != 'end'
                    ) {
                        // Separate the child nodes.
                        var subSkills = [];
                        var regularChildSkills = [];
                        for (
                            let j = 0;
                            j < parentChildren[i].children.length;
                            j++
                        ) {
                            if (parentChildren[i].children[j].type == 'sub') {
                                subSkills.push(parentChildren[i].children[j]);
                            } else {
                                regularChildSkills.push(
                                    parentChildren[i].children[j]
                                );
                            }
                        }

                        // Create a new child node, with the subskills in it.
                        var superSkillEndNode = {
                            name: parentChildren[i].name,
                            type: 'super',
                            position: 'end',
                            children: subSkills
                        };

                        // Empty the child nodes.
                        parentChildren[i].children = [];
                        // Add the new node.
                        parentChildren[i].children.push(superSkillEndNode);
                        // Add the other child nodes, excluding subskills.
                        for (let j = 0; j < regularChildSkills.length; j++) {
                            parentChildren[i].children.push(
                                regularChildSkills[j]
                            );
                        }
                    }

                    if (typeof parentChildren[i] !== 'undefined') {
                        /*
                         * Run the above function again recursively.
                         */
                        if (
                            parentChildren[i].children &&
                            Array.isArray(parentChildren[i].children) &&
                            parentChildren[i].children.length > 0
                        )
                            moveSubSkills(parentChildren[i].children);
                    }
                }
            }

            moveSubSkills(skillsWithSubSkillsMoved);

            this.data = {
                skill_name: 'My skills',
                children: skillsWithSubSkillsMoved
            };

            // Compute the tree height; this approach will allow the height of the
            // SVG to scale according to the breadth (width) of the tree layout.
            this.root = d3.hierarchy(this.data);
            const dx = 24;
            const dy = this.width / (this.root.height + 1);

            // Create a tree layout.
            this.tree = d3.tree().nodeSize([dx, dy]);

            // Sort the tree and apply the layout.
            this.root.sort((a, b) => d3.ascending(a.data.name, b.data.name));
            this.tree(this.root);

            // Compute the extent of the tree. Note that x and y are swapped here
            // because in the tree layout, x is the breadth, but when displayed, the
            // tree extends right rather than down.
            let x0 = Infinity;
            let x1 = -x0;
            this.root.each((d) => {
                if (d.x > x1) x1 = d.x;
                if (d.x < x0) x0 = d.x;
            });

            var canvas = document.getElementById('canvas');
            canvas.width = this.width;
            canvas.height = this.height;
            this.context = canvas.getContext('2d');
            let hiddenCanvas = document.getElementById('hidden-canvas');
            this.hiddenCanvasContext = hiddenCanvas.getContext('2d');

            this.drawTree(d3.zoomIdentity);
        },
        drawTree(transform) {
            this.nodes = this.root.descendants();

            // Zoom and pan.
            this.context.save();
            this.hiddenCanvasContext.save();
            // Clear canvases.
            this.context.clearRect(
                0,
                0,
                this.context.canvas.width,
                this.context.canvas.height
            );
            this.hiddenCanvasContext.clearRect(
                0,
                0,
                this.hiddenCanvasContext.canvas.width,
                this.hiddenCanvasContext.canvas.height
            );
            this.context.translate(transform.x, transform.y);
            this.hiddenCanvasContext.translate(transform.x, transform.y);
            this.context.scale(transform.k, transform.k);
            this.hiddenCanvasContext.scale(transform.k, transform.k);

            // For node labels to appear at correct zoom level.
            this.scale = transform.k;
            this.panX = transform.x;
            this.panY = transform.y;

            // Draw links.
            const links = this.root.links();
            this.context.beginPath();
            for (const link of links) {
                this.drawLink(link);
            }

            // Draw nodes.
            this.context.beginPath();
            for (const node of this.nodes) {
                if (node.renderCol) {
                    // Render clicked nodes in the color of their corresponding node
                    // on the hidden canvas.
                    this.context.fillStyle = node.renderCol;
                } else {
                    this.context.fillStyle = 'RGBA(105, 105, 105, 0.8)';
                }

                //
                //  If we are rendering to the hidden canvas each element
                // should get its own color.
                //

                if (node.__pickColor === undefined) {
                    // If we have never drawn the node to the hidden canvas get a new
                    // color for it and put it in the dictionary. genColor returns a new color
                    // every time it is called.
                    node.__pickColor = this.genColor();
                    this.colToNode[node.__pickColor] = node;
                }
                // On the hidden canvas each rectangle gets a unique color.
                this.hiddenCanvasContext.fillStyle = node.__pickColor;
                // Draw the actual shape
                this.drawNode(node);
            }

            this.context.restore();
            this.hiddenCanvasContext.restore();
        },
        drawNode(node) {
            let ctx1 = this.context;
            let ctx2 = this.hiddenCanvasContext;
            // A flag to determine if this node was searched by user
            const isSearched =
                node.data.name === this.resultNode?.data.skill_name;

            // Visible context.
            // If not a domain, make node a circle.
            // console.log(node.data.is_mastered);
            if (node.data.type != 'domain') {
                ctx1.beginPath();
                ctx1.arc(node.y, node.x, 10, 0, 2 * Math.PI);
                // get the color associate with skill level
                const skillColor = node.data.level
                    ? this.hexColor(node.data.level)
                    : '#000';

                // Node outline.
                ctx1.lineWidth = 2;
                ctx1.fillStyle = '#FFF';
                ctx1.fill();
                ctx1.strokeStyle = skillColor;
                ctx1.stroke();
            }

            // Text.
            if (this.scale > 0.6) {
                // we move the skill name to the left and change the color if it a domain node
                // using the non domain as if condition will save us some compute time as none domain node is more common
                if (node.data.type != 'domain') {
                    ctx1.beginPath();
                    ctx1.strokeStyle = '#FFF';
                    ctx1.lineWidth = 4;
                    // Hight light the text if user search for it
                    ctx1.fillStyle = isSearched ? '#ff0000' : '#000';
                    ctx1.font = isSearched ? 'bold' : 'normal';
                    ctx1.font = 'normal';
                    ctx1.direction = 'ltr';
                    //  also added a triangle to the end of skill name
                    const showName = isSearched
                        ? `${node.data.name} ◀`
                        : node.data.name;
                    ctx1.strokeText(showName, node.y + 15, node.x + 2);
                    ctx1.fillText(showName, node.y + 15, node.x + 2);
                } else {
                    ctx1.beginPath();
                    ctx1.strokeStyle = '#FFF';
                    ctx1.lineWidth = 4;
                    ctx1.fillStyle = isSearched ? '#ff0000' : '#849cab';
                    ctx1.direction = 'rtl';
                    const showName = isSearched
                        ? `${node.data.name} ▶`
                        : node.data.name;
                    ctx1.strokeText(showName, node.y - 5, node.x + 2);
                    ctx1.fillText(showName, node.y - 5, node.x + 2);
                }
            }

            // Hidden context.
            if (node.data.type != 'domain') {
                ctx2.beginPath();
                ctx2.moveTo(node.y, node.x);
                ctx2.arc(node.y, node.x, 10, 0, 2 * Math.PI);
                ctx2.fill();
            } else {
                ctx2.beginPath();
                ctx2.moveTo(node.y, node.x - 10);
                // top left edge.
                ctx2.lineTo(node.y - 20 / 2, node.x - 10 + 20 / 2);
                // bottom left edge.
                ctx2.lineTo(node.y, node.x - 10 + 20);
                // bottom right edge.
                ctx2.lineTo(node.y + 20 / 2, node.x - 10 + 20 / 2);
                // closing the path automatically creates the top right edge.
                ctx2.closePath();
                ctx2.lineWidth = 2;
                ctx2.fill();
                ctx2.stroke();
            }
        },
        drawLink(link) {
            const linkGenerator = d3
                .linkHorizontal()
                .x((d) => d.y)
                .y((d) => d.x)
                .context(this.context);

            this.context.lineWidth = 1;

            if (
                (link.source.data.type == 'super' &&
                    link.target.data.position == 'end') ||
                link.target.data.type == 'sub'
            ) {
                this.context.setLineDash([5, 3]);
            } else {
                this.context.setLineDash([]);
            }

            this.context.beginPath();
            linkGenerator(link);
            this.context.strokeStyle = '#000';
            this.context.stroke();
        },
        genColor() {
            var ret = [];
            // via http://stackoverflow.com/a/15804183
            if (this.nextCol < 16777215) {
                ret.push(this.nextCol & 0xff); // R
                ret.push((this.nextCol & 0xff00) >> 8); // G
                ret.push((this.nextCol & 0xff0000) >> 16); // B

                this.nextCol += 100; // This is exagerated for this example and would ordinarily be 1.
            }
            var col = 'rgb(' + ret.join(',') + ')';
            return col;
        },

        async printPDF() {
            // Build the SVG tree.
            await this.createSVGTree();

            // Select the element from the DOM.
            var svg = document.getElementById('linearTree');
            // Then select with D3
            var d3Svg = d3.select(svg);
            // Then select the SVG code with D3
            var d3SvgNode = d3Svg.node();

            // Make it a string, to send to server.
            var s = new XMLSerializer();
            var str = s.serializeToString(d3SvgNode);

            // Create a JSON object.
            var dataObject = { svg: str, treeType: 'linear' };
            var data = JSON.stringify(dataObject);

            // POST request.
            var xhttp = new XMLHttpRequest();
            xhttp.responseType = 'arraybuffer';
            xhttp.open('POST', '/skilltree/print-pdf', true);
            xhttp.setRequestHeader(
                'Content-type',
                'application/json;charset=UTF-8'
            );
            xhttp.setRequestHeader(
                'Accept',
                'application/json, text/plain, */*'
            );
            xhttp.send(data);

            // To download the file client side.
            xhttp.onload = function () {
                if (this.readyState == 4 && this.status == 200) {
                    // Typical action to be performed when the document is ready:
                    let pdfBlob = new Blob([xhttp.response], {
                        type: 'application/pdf'
                    });
                    const url = window.URL.createObjectURL(pdfBlob);

                    // To download and name the file.
                    var a = document.createElement('a');
                    document.body.appendChild(a);
                    a.style = 'display: none';
                    a.href = url;
                    a.download = 'Skill-Tree.pdf';
                    a.click();
                    window.URL.revokeObjectURL(url);
                }
            };
        },
        createSVGTree() {
            // Redo D3 algorithm.
            const root = d3.hierarchy(this.data);
            // Different node size for the PDF, as doesnt need to be clickable.
            const dx = 15;
            const dy = this.width / (root.height + 1);
            // Create a tree layout.
            const tree = d3.tree().nodeSize([dx, dy]);
            // Sort the tree and apply the layout.
            tree(root);

            // Compute the extent of the tree. Note that x and y are swapped here
            // because in the tree layout, x is the breadth, but when displayed, the
            // tree extends right rather than down.
            let x0 = Infinity;
            let x1 = -x0;
            root.each((d) => {
                if (d.x > x1) x1 = d.x;
                if (d.x < x0) x0 = d.x;
            });

            // Compute the adjusted height of the tree.
            const height = x1 - x0 + dx * 2;

            let svg = d3
                .create('svg')
                // Add ID for the printing to PDF.
                .attr('id', 'linearTree')
                .attr('width', this.width)
                .attr('height', height)
                .attr('viewBox', [-dy / 3, x0 - dx, this.width, height])
                .attr(
                    'style',
                    'max-width: 100%; height: auto; font: 10px sans-serif;'
                );

            const g = svg.append('g');

            // Links or connecting lines.
            g.append('g')
                .attr('fill', 'none')
                .attr('stroke-opacity', 1)
                .selectAll()
                .data(root.links())
                .join('path')
                .attr(
                    'd',
                    d3
                        .linkHorizontal()
                        .x((d) => d.y)
                        .y((d) => d.x)
                )
                .attr('stroke', function (d) {
                    return '#000';
                })
                .attr('stroke-width', function (d) {
                    return 1.5;
                })
                .style('stroke-dasharray', function (d) {
                    // If the node is a sub node.
                    if (
                        (d.source.data.type == 'super' &&
                            d.target.data.position == 'end') ||
                        d.target.data.type == 'sub'
                    ) {
                        return 5;
                    }
                });

            const node = g
                .append('g')
                .attr('stroke-linejoin', 'round')
                .attr('stroke-width', 3)
                .selectAll()
                .data(root.descendants())
                .join('g')
                .attr('transform', (d) => `translate(${d.y},${d.x})`);

            node.append('circle')
                .attr('fill', (d) => (d.children ? '#555' : '#000'))
                .attr('r', 2.5);

            // Labels.
            node.append('text')
                .style('font-weight', function (d) {
                    // If the node is a super node.
                    if (d.data.type == 'super') {
                        return '700';
                    } else return '400';
                })
                .style('font-style', function (d) {
                    // If the node is a sub node.
                    if (d.data.type == 'sub') {
                        return 'italic';
                    }
                })
                .attr('dy', '0.31em')
                .attr('x', (d) => (d.children ? -6 : 6))
                .attr('text-anchor', (d) => (d.children ? 'end' : 'start'))
                .text(function (d) {
                    // If the node is a super node end node.
                    if (d.data.position == 'end') {
                        return '';
                    } else return d.data.skill_name;
                })
                .clone(true)
                .lower()
                .attr('stroke', function (d) {
                    return 'white';
                });

            // Append the SVG element.
            document.querySelector('#SVGskilltree').append(svg.node());
        },
        resetPos() {
            d3.select(this.context.canvas)
                .transition()
                .duration(700)
                .call(
                    this.d3Zoom.transform,
                    d3.zoomIdentity.translate(0, 0).scale(0.3)
                );
            this.$refs.sliderControl.showScaleLabel();
        },
        // programmatic d3 zoom
        zoomInD3(scale, panX, panY) {
            d3.select(this.context.canvas).call(
                this.d3Zoom.transform,
                d3.zoomIdentity.translate(panX, panY).scale(scale)
            );
            this.$refs.sliderControl.showScaleLabel();
        },
        // Pan with arrow keys and joystick.
        panInD3() {
            d3.select(this.context.canvas).call(
                this.d3Zoom.transform,
                d3.zoomIdentity
                    .translate(this.panX, this.panY)
                    .scale(this.scale)
            );
        },
        // Return the hex code for each skill base on it education grade ( eg: primary school, high school ...)
        hexColor(skillLevel) {
            switch (skillLevel) {
                case 'college':
                    return '#FFA500';
                case 'grade_school':
                    return '#40E0D0';
                case 'high_school':
                    return '#FFD700';
                case 'middle_school':
                    return '#33A133';
                case 'phd':
                    return '#FF0000';
                default:
                    break;
            }
        },
        // We using a darker color for node border when it is mastered
        hexBorderColor(skillLevel) {
            switch (skillLevel) {
                case 'college':
                    return '#CC8400';
                case 'grade_school':
                    return '#33B3A6';
                case 'high_school':
                    return '#CCAC00';
                case 'middle_school':
                    return '#006400';
                case 'phd':
                    return '#CC0000';
                default:
                    break;
            }
        },
        // zoom and pan to a node
        goToLocation(node) {
            const skillTreeHeight = this.$refs.wrapper.clientHeight;
            const skillTreeWidth = this.$refs.wrapper.clientWidth;
            const centerYOffset = skillTreeWidth > 480 ? 2.5 : 2.8;
            const centerXOffset = 2;
            this.resultNode = node;
            const fixedScale = skillTreeWidth > 480 ? 1.75 : 1.2;
            const translateX =
                -node.y * fixedScale + skillTreeWidth / centerXOffset;
            const translateY =
                -node.x * fixedScale + skillTreeHeight / centerYOffset;

            d3.select(this.context.canvas)
                .transition()
                .duration(2000)
                .call(
                    this.d3Zoom.transform,
                    d3.zoomIdentity
                        .translate(translateX, translateY)
                        .scale(fixedScale)
                );
        },
        // Find node with name include
        findNodeWithName(searchString) {
            let results = [];
            // D3
            //let breakLoop = false;
            this.root.each(function (node) {
                if (searchString.length < 2) {
                    if (
                        node.data?.name
                            ?.toLowerCase()
                            .substring(0, searchString.length) === searchString
                    ) {
                        const reformatData = {
                            ...node.data,
                            skill_name: node.data.name
                        };
                        results.push({ ...node, data: reformatData });
                    }
                } else {
                    if (node.data?.name?.toLowerCase().includes(searchString)) {
                        const reformatData = {
                            ...node.data,
                            skill_name: node.data.name
                        };
                        results.push({ ...node, data: reformatData });
                    }
                }
            });
            return results;
        }
        // async showSkillPanelComponent(node) {
        //     // We clicked on something, lets set the color of the node
        //     // we also have access to the data associated with it, which in
        //     // this case is just its original index in the data array.
        //     node.renderCol = node.__pickColor;

        //     //Update the display with some data
        //     this.skill.name = node.data.skill_name;
        //     this.skill.id = node.data.id;
        //     this.skill.type = node.data.type;

        //     // Get the mastery requirements data separately.
        //     // Because this is so much data, we do not send it with the rest of the skill tree,
        //     // or it will slow the load down too much.
        //     const result = await fetch(
        //         '/skills/mastery-requirements/' + this.skill.id
        //     );
        //     const masteryRequirements = await result.json();
        //     this.skill.masteryRequirements = masteryRequirements;
        //     // *** Preserve in case client want clamp instead of scroll
        //     this.showSkillPanel = true;
        // }
    }
};
</script>

<template>
    <!-- Loading animation -->
    <div
        v-if="isLoading == true"
        class="loading-animation d-flex justify-content-center align-items-center py-4"
    >
        <span class="loader"></span>
    </div>
    <!-- Wrapper is for the dark overlay, when the sidepanel is displayed -->
    <div v-show="isLoading == false" id="wrapper" ref="wrapper">
        <SkillPanel :skill="skill" :showSkillPanel="showSkillPanel" />
        <div
            v-if="showAnimation"
            :style="{ top: `${yPos}px`, left: `${xPos}px` }"
            class="click-animation"
        ></div>
        <canvas
            id="canvas"
            width="1500"
            height="1500"
            ref="canvas"
            tabindex="1"
        ></canvas>
        <canvas id="hidden-canvas" width="1500" height="1500"></canvas>
        <div id="SVGskilltree"></div>
        <SliderControl ref="sliderControl" />
        <div id="sidepanel-backdrop"></div>
        <JoystickControl />
    </div>
</template>

<style scoped>
.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #a48be5;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
/* End of loading animation */

/* ___________ Button Style ___________ */

.slidecontainer {
    width: 100%; /* Width of the outside container */
}

.slider {
    -webkit-appearance: none;
    width: 100%;
    height: 200px;
    border-radius: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
}

.slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
}
/* Mouse-over effects */
.slider:hover {
    opacity: 1; /* Fully shown on mouse-over */
}

#wrapper {
    width: 100%;
    /* height: calc(100% - 130px); */
    height: calc(100%);
    overflow: hidden;
    position: relative;
}

input[type='button'] {
    padding: 5px;
    width: 30px;
    margin: 0px 0px 2px 0px;
}

/* ___________ End of Button Style ___________ */

.skill-tree-container {
    /* Subtract the purple banner and the navigation bar. */
    height: calc(100% - 20px - 66px);
}

#sidepanel-backdrop {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1040;
    background-color: #000;
    opacity: 0.5;
    width: 100%;
    height: 100%;
}

#filter {
    width: 300px;
    position: absolute;
    padding-left: 1%;
    z-index: 1;
    margin-top: 10px;
}

#skilltree {
    width: 100%;
    height: 100%;
    /* This is for the positioning of the information panel. */
    position: relative;
    background-color: white;
}

.flex-container {
    display: flex;
    flex-direction: row;
}
canvas {
    cursor: pointer;
}
.click-animation {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #7a46ff; /* Color of the animation */
    border-radius: 50%;
    transform: translate(-50%, -50%); /* Center the circle on click */
    animation: clickEffect 0.7s infinite ease-out;
}

@keyframes clickEffect {
    0% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
    100% {
        transform: translate(-50%, -50%) scale(3);
        opacity: 0;
    }
}

@media (max-width: 820px) {
    .flex-container {
        flex-direction: column;
    }
    #wrapper {
        /* height: calc(100% - 130px); */
        height: calc(100%);
    }
}

@media screen and (min-width: 992px) {
    /* Loading animation */
    .loading-animation {
        min-height: 100%;
        position: fixed;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
}
</style>
