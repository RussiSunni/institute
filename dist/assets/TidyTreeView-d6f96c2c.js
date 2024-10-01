import{_ as F,u as q,a as E,r as m,o as f,c as y,b as g,w as I,v as D,d,e as _,n as R,F as C,p as j,f as B,g as H,h as O,i as U,j as V,k as Y,l as N,m as A,S as Z,q as M,t as J}from"./main-6137d7a6.js";import{S as T,z as W,s as x,h as w,t as S,a as $,i as v,l as b,c as z}from"./zoom-c5030ade.js";import{S as X,J as G}from"./JoystickControl-3a007ece.js";const K={setup(){const t=q(),e=E();return{skillTreeStore:t,userDetailsStore:e}},data(){return{width:6e3,height:null,skill:{id:null,children:[],isMastered:null,isUnlocked:null,container:null,name:null,url:null,description:null,tagIDs:[],sprite:null,type:null,hasChildren:!1},tree:{},root:{},context:{},hiddenCanvasContext:{},r:1.5,nodes:[],nextCol:1,colToNode:{},isSkillInfoPanelShown:!1,scale:.3,panX:0,panY:0,data:{},d3Zoom:null,isLoading:!0,xPos:0,yPos:0,showAnimation:!1,showSkillPanel:!1,resultNode:null,clickMode:"showPanel"}},components:{SkillPanel:T,SliderControl:X,JoystickControl:G,SkillPanel:T},async mounted(){this.skillTreeStore.userSkills.length==0&&await this.skillTreeStore.getUserSkills(),this.height=window.innerHeight,this.skill={name:"SKILLS",sprite:null,children:this.skillTreeStore.userSkills},this.getAlgorithm();let t=document.getElementById("hidden-canvas");this.hiddenCanvasContext=t.getContext("2d",{willReadFrequently:!0}),t.style.display="none",canvas.addEventListener("click",async e=>{var s=e.layerX,h=e.layerY;this.xPos=s,this.yPos=h,this.showAnimation=!0,setTimeout(()=>{this.showAnimation=!1},500);var a=this.hiddenCanvasContext,r=a.getImageData(s,h,1,1).data,c="rgb("+r[0]+","+r[1]+","+r[2]+")",n=this.colToNode[c];if(n&&n.data.id){n.renderCol=n.__pickColor,this.skill.name=n.data.skill_name,this.skill.id=n.data.id,this.skill.type=n.data.type,this.skill.show_children=n.data.show_children,this.skill.hasChildren=!1,(n.data.children.length>0||this.skill.show_children&&this.skill.show_children==0)&&(this.skill.hasChildren=!0),this.skill.x=n.x,this.skill.y=n.y;const o=await(await fetch("/skills/mastery-requirements-and-url/"+this.skill.id)).json();this.skill.masteryRequirements=o.mastery_requirements,this.skill.url=o.url,this.showSkillPanel=!0}}),this.d3Zoom=W().scaleExtent([.1,5]).on("zoom",({transform:e})=>{this.debugScale=e.k,this.transformX=e.x,this.transformY=e.y,this.drawTree(e),this.$refs.sliderControl.changeGradientBG()}),x(this.context.canvas).call(this.d3Zoom),this.resetPos(),this.isLoading=!1},methods:{getAlgorithm(){var t=[];t=JSON.parse(JSON.stringify(this.skill.children));function e(i){for(var o=i.length;o--;){if(i[o].type=="super"&&i[o].position!="end"){if(i[o].show_children&&i[o].show_children==0)return;var l=[],k=[];for(let u=0;u<i[o].children.length;u++)i[o].children[u].type=="sub"?l.push(i[o].children[u]):k.push(i[o].children[u]);var p={skill_name:i[o].skill_name,type:"super",position:"end",children:l};i[o].children=[],i[o].children.push(p);for(let u=0;u<k.length;u++)i[o].children.push(k[u])}typeof i[o]<"u"&&i[o].children&&Array.isArray(i[o].children)&&i[o].children.length>0&&e(i[o].children)}}e(t),this.data={skill_name:"My skills",children:t},this.root=w(this.data);const s=24,h=this.width/(this.root.height+1);this.tree=S().nodeSize([s,h]),this.root.sort((i,o)=>$(i.data.name,o.data.name)),this.tree(this.root);let a=1/0,r=-a;this.root.each(i=>{i.x>r&&(r=i.x),i.x<a&&(a=i.x)});var c=document.getElementById("canvas");c.width=this.width,c.height=this.height,this.context=c.getContext("2d");let n=document.getElementById("hidden-canvas");this.hiddenCanvasContext=n.getContext("2d"),this.drawTree(v)},drawTree(t){this.nodes=this.root.descendants(),this.context.save(),this.hiddenCanvasContext.save(),this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height),this.hiddenCanvasContext.clearRect(0,0,this.hiddenCanvasContext.canvas.width,this.hiddenCanvasContext.canvas.height),this.context.translate(t.x,t.y),this.hiddenCanvasContext.translate(t.x,t.y),this.context.scale(t.k,t.k),this.hiddenCanvasContext.scale(t.k,t.k),this.scale=t.k,this.panX=t.x,this.panY=t.y;const e=this.root.links();this.context.beginPath();for(const s of e)this.drawLink(s);this.context.beginPath();for(const s of this.nodes)s.renderCol?this.context.fillStyle=s.renderCol:this.context.fillStyle="RGBA(105, 105, 105, 0.8)",s.__pickColor===void 0&&(s.__pickColor=this.genColor(),this.colToNode[s.__pickColor]=s),this.hiddenCanvasContext.fillStyle=s.__pickColor,this.drawNode(s);this.context.restore(),this.hiddenCanvasContext.restore()},drawNode(t){var a;this.context.setLineDash([]);let e=this.context,s=this.hiddenCanvasContext;const h=t.data.skill_name===((a=this.resultNode)==null?void 0:a.data.skill_name);if(t.data.type!="domain"){let r=10;t.data.show_children&&t.data.show_children==0&&(r=20),e.beginPath(),e.arc(t.y,t.x,r,0,2*Math.PI);const c=t.data.level?this.hexColor(t.data.level):"#000";if(t.data.is_mastered==1){e.fillStyle=c,e.fill();const n=this.hexBorderColor(t.data.level);e.lineWidth=2,e.strokeStyle=n,e.stroke()}else e.lineWidth=2,e.fillStyle="#FFF",e.fill(),e.strokeStyle=c,e.stroke()}if(t.data.show_children&&t.data.show_children==0&&(e.lineWidth=2,e.strokeStyle="black",e.beginPath(),e.moveTo(t.y-10,t.x),e.lineTo(t.y+10,t.x),e.stroke(),e.beginPath(),e.moveTo(t.y,t.x-10),e.lineTo(t.y,t.x+10),e.stroke()),this.scale>.6)if(t.data.type!="domain"){e.beginPath(),e.strokeStyle="#FFF",e.lineWidth=4,e.fillStyle=h?"#ff0000":"#000",e.font=h?"bold":"normal",e.direction="ltr";const r=h?`${t.data.skill_name} ◀`:t.data.skill_name;e.strokeText(r,t.y+15,t.x+2),e.fillText(r,t.y+15,t.x+2)}else{e.beginPath(),e.strokeStyle="#FFF",e.lineWidth=4,e.fillStyle=h?"#ff0000":"#849cab",e.direction="rtl";const r=h?`${t.data.skill_name} ▶`:t.data.skill_name;e.strokeText(r,t.y-5,t.x+2),e.fillText(r,t.y-5,t.x+2)}t.data.type!="domain"?(s.beginPath(),s.moveTo(t.y,t.x),s.arc(t.y,t.x,10,0,2*Math.PI),s.fill()):(s.beginPath(),s.moveTo(t.y,t.x-10),s.lineTo(t.y-20/2,t.x-10+20/2),s.lineTo(t.y,t.x-10+20),s.lineTo(t.y+20/2,t.x-10+20/2),s.closePath(),s.lineWidth=2,s.fill(),s.stroke())},drawLink(t){const e=b().x(s=>s.y).y(s=>s.x).context(this.context);t.target.data.is_mastered==1?this.context.lineWidth=4:this.context.lineWidth=1,t.source.data.type=="super"&&t.target.data.position=="end"||t.target.data.type=="sub"?this.context.setLineDash([5,3]):this.context.setLineDash([]),this.context.beginPath(),e(t),this.context.strokeStyle="#000",this.context.stroke()},genColor(){var t=[];this.nextCol<16777215&&(t.push(this.nextCol&255),t.push((this.nextCol&65280)>>8),t.push((this.nextCol&16711680)>>16),this.nextCol+=100);var e="rgb("+t.join(",")+")";return e},async printPDF(){await this.createSVGTree();var t=document.getElementById("linearTree"),e=x(t),s=e.node(),h=new XMLSerializer,a=h.serializeToString(s),r={svg:a,treeType:"linear"},c=JSON.stringify(r),n=new XMLHttpRequest;n.responseType="arraybuffer",n.open("POST","/skilltree/print-pdf",!0),n.setRequestHeader("Content-type","application/json;charset=UTF-8"),n.setRequestHeader("Accept","application/json, text/plain, */*"),n.send(c),n.onload=function(){if(this.readyState==4&&this.status==200){let o=new Blob([n.response],{type:"application/pdf"});const l=window.URL.createObjectURL(o);var i=document.createElement("a");document.body.appendChild(i),i.style="display: none",i.href=l,i.download="My-Skill-Tree.pdf",i.click(),window.URL.revokeObjectURL(l)}}},createSVGTree(){const t=w(this.data),e=15,s=this.width/(t.height+1);S().nodeSize([e,s])(t);let a=1/0,r=-a;t.each(l=>{l.x>r&&(r=l.x),l.x<a&&(a=l.x)});const c=r-a+e*2;let n=z("svg").attr("id","linearTree").attr("width",this.width).attr("height",c).attr("viewBox",[-s/3,a-e,this.width,c]).attr("style","max-width: 100%; height: auto; font: 10px sans-serif;");const i=n.append("g");i.append("g").attr("fill","none").attr("stroke-opacity",1).selectAll().data(t.links()).join("path").attr("d",b().x(l=>l.y).y(l=>l.x)).attr("stroke",function(l){return"#000"}).attr("stroke-width",function(l){return l.target.data.is_mastered==1?8:1.5}).style("stroke-dasharray",function(l){if(l.source.data.type=="super"&&l.target.data.position=="end"||l.target.data.type=="sub")return 5});const o=i.append("g").attr("stroke-linejoin","round").attr("stroke-width",3).selectAll().data(t.descendants()).join("g").attr("transform",l=>`translate(${l.y},${l.x})`);o.append("circle").attr("fill",l=>l.children?"#555":"#000").attr("r",2.5),o.append("text").style("font-weight",function(l){return l.data.type=="super"?"700":"400"}).style("font-style",function(l){if(l.data.type=="sub")return"italic"}).attr("dy","0.31em").attr("x",l=>l.children?-6:6).attr("text-anchor",l=>l.children?"end":"start").text(function(l){return l.data.position=="end"?"":l.data.skill_name}).clone(!0).lower().attr("stroke",function(l){return"white"}),document.querySelector("#SVGskilltree").append(n.node())},resetPos(){x(this.context.canvas).transition().duration(1700).call(this.d3Zoom.transform,v.translate(0,0).scale(.3)),this.$refs.sliderControl.showScaleLabel()},zoomInD3(t,e,s){x(this.context.canvas).call(this.d3Zoom.transform,v.translate(e,s).scale(t)),this.$refs.sliderControl.showScaleLabel()},goToLocation(t){this.resultNode=t;const e=-t.y*this.scale+window.innerWidth/(2*this.scale)*this.scale,s=-t.x*this.scale+window.innerHeight/(2*this.scale)*this.scale;x(this.context.canvas).transition().duration(2e3).call(this.d3Zoom.transform,v.translate(e,s).scale(this.scale))},panInD3(){x(this.context.canvas).call(this.d3Zoom.transform,v.translate(this.panX,this.panY).scale(this.scale))},hexColor(t){switch(t){case"college":return"#FFA500";case"grade_school":return"#40E0D0";case"high_school":return"#FFD700";case"middle_school":return"#33A133";case"phd":return"#FF0000"}},hexBorderColor(t){switch(t){case"college":return"#CC8400";case"grade_school":return"#33B3A6";case"high_school":return"#CCAC00";case"middle_school":return"#006400";case"phd":return"#CC0000"}},findNodeWithName(t){let e=[];return this.root.each(function(s){t.length<2?s.data.skill_name.toLowerCase().substring(0,t.length)===t&&e.push(s):s.data.skill_name.toLowerCase().includes(t)&&e.push(s)}),e},toggleHideChildren(t){var e="/user-skills/hide-children/"+this.userDetailsStore.userId+"/"+t.id;fetch(e),this.reloadTree(t)},toggleShowChildren(t){var e="/user-skills/show-children/"+this.userDetailsStore.userId+"/"+t.id;fetch(e),this.reloadTree(t)},async reloadTree(t){this.showSkillPanel=!1,await this.skillTreeStore.getUserSkills(),this.skill={name:"SKILLS",sprite:null,children:this.skillTreeStore.userSkills};var e=[];e=JSON.parse(JSON.stringify(this.skill.children));function s(n){for(var i=n.length;i--;){if(n[i].type=="super"&&n[i].position!="end"){if(n[i].show_children&&n[i].show_children==0)return;var o=[],l=[];for(let p=0;p<n[i].children.length;p++)n[i].children[p].type=="sub"?o.push(n[i].children[p]):l.push(n[i].children[p]);var k={skill_name:n[i].skill_name,type:"super",position:"end",children:o};n[i].children=[],n[i].children.push(k);for(let p=0;p<l.length;p++)n[i].children.push(l[p])}typeof n[i]<"u"&&n[i].children&&Array.isArray(n[i].children)&&n[i].children.length>0&&s(n[i].children)}}s(e),this.data={skill_name:"My skills",children:e},this.root=w(this.data);const h=24,a=this.width/(this.root.height+1);this.tree=S().nodeSize([h,a]),this.root.sort((n,i)=>$(n.data.name,i.data.name)),this.tree(this.root),this.zoomInD3(this.scale,this.panX,this.panY);const r=-t.y*this.scale+window.innerWidth/(2*this.scale)*this.scale,c=-t.x*this.scale+window.innerHeight/(2*this.scale)*this.scale;x(this.context.canvas).transition().duration(1e3).call(this.d3Zoom.transform,v.translate(r,c).scale(this.scale))}}},P=t=>(j("data-v-b5550bf3"),t=t(),B(),t),Q={key:0,class:"loading-animation d-flex justify-content-center align-items-center py-4"},tt=P(()=>d("span",{class:"loader"},null,-1)),et=[tt],st={id:"wrapper"},it={id:"canvas",width:"1500",height:"1500",ref:"canvas",tabindex:"1"},lt=P(()=>d("canvas",{id:"hidden-canvas",width:"1500",height:"1500"},null,-1)),nt=P(()=>d("div",{id:"SVGskilltree"},null,-1)),at=P(()=>d("div",{id:"sidepanel-backdrop"},null,-1));function ot(t,e,s,h,a,r){const c=m("SkillPanel"),n=m("SliderControl"),i=m("JoystickControl");return f(),y(C,null,[a.isLoading==!0?(f(),y("div",Q,et)):g("",!0),I(d("div",st,[_(c,{skill:a.skill,showSkillPanel:a.showSkillPanel},null,8,["skill","showSkillPanel"]),a.showAnimation?(f(),y("div",{key:0,style:R({top:`${a.yPos}px`,left:`${a.xPos}px`}),class:"click-animation"},null,4)):g("",!0),d("canvas",it,null,512),lt,nt,_(n,{ref:"sliderControl"},null,512),at,_(i)],512),[[D,a.isLoading==!1]])],64)}const rt=F(K,[["render",ot],["__scopeId","data-v-b5550bf3"]]);const ht={setup(){return{skillsStore:H()}},data(){return{width:6e3,height:null,skill:{id:null,children:[],isMastered:null,isUnlocked:null,container:null,name:null,url:null,description:null,tagIDs:[],sprite:null,type:null},tree:{},root:{},context:{},hiddenCanvasContext:{},r:1.5,nodes:[],nextCol:1,colToNode:{},isSkillInfoPanelShown:!1,scale:.3,panX:0,panY:0,data:{},d3Zoom:null,isLoading:!0,xPos:0,yPos:0,showAnimation:!1,showSkillPanel:!1,resultNode:null}},components:{SkillPanel:T,SkillPanel:T,SliderControl:X,JoystickControl:G},async mounted(){this.skillsStore.filteredNestedSkillsList.length==0&&await this.skillsStore.getFilteredNestedSkillsList(),this.height=window.innerHeight,this.skill={name:"SKILLS",sprite:null,children:this.skillsStore.filteredNestedSkillsList},this.getAlgorithm();let t=document.getElementById("hidden-canvas");this.hiddenCanvasContext=t.getContext("2d",{willReadFrequently:!0}),t.style.display="none",canvas.addEventListener("click",async e=>{this.nodes;var s=e.layerX,h=e.layerY;this.xPos=s,this.yPos=h,this.showAnimation=!0,setTimeout(()=>{this.showAnimation=!1},500);var a=this.hiddenCanvasContext,r=a.getImageData(s,h,1,1).data,c="rgb("+r[0]+","+r[1]+","+r[2]+")",n=this.colToNode[c];if(n&&n.data.id){n.renderCol=n.__pickColor,this.skill.name=n.data.name,this.skill.id=n.data.id,this.skill.type=n.data.type;const o=await(await fetch("/skills/mastery-requirements-and-url/"+this.skill.id)).json();this.skill.masteryRequirements=o.mastery_requirements,this.skill.url=o.url,this.showSkillPanel=!0}}),this.d3Zoom=W().scaleExtent([.1,5]).on("zoom",({transform:e})=>{this.drawTree(e),this.$refs.sliderControl.changeGradientBG()}),x(this.context.canvas).call(this.d3Zoom),this.resetPos(),this.isLoading=!1},methods:{getAlgorithm(){var t=[];t=JSON.parse(JSON.stringify(this.skill.children));function e(i){for(var o=i.length;o--;){if(i[o].type=="super"&&i[o].position!="end"){var l=[],k=[];for(let u=0;u<i[o].children.length;u++)i[o].children[u].type=="sub"?l.push(i[o].children[u]):k.push(i[o].children[u]);var p={name:i[o].name,type:"super",position:"end",children:l};i[o].children=[],i[o].children.push(p);for(let u=0;u<k.length;u++)i[o].children.push(k[u])}typeof i[o]<"u"&&i[o].children&&Array.isArray(i[o].children)&&i[o].children.length>0&&e(i[o].children)}}e(t),this.data={skill_name:"My skills",children:t},this.root=w(this.data);const s=24,h=this.width/(this.root.height+1);this.tree=S().nodeSize([s,h]),this.root.sort((i,o)=>$(i.data.name,o.data.name)),this.tree(this.root);let a=1/0,r=-a;this.root.each(i=>{i.x>r&&(r=i.x),i.x<a&&(a=i.x)});var c=document.getElementById("canvas");c.width=this.width,c.height=this.height,this.context=c.getContext("2d");let n=document.getElementById("hidden-canvas");this.hiddenCanvasContext=n.getContext("2d"),this.drawTree(v)},drawTree(t){this.nodes=this.root.descendants(),this.context.save(),this.hiddenCanvasContext.save(),this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height),this.hiddenCanvasContext.clearRect(0,0,this.hiddenCanvasContext.canvas.width,this.hiddenCanvasContext.canvas.height),this.context.translate(t.x,t.y),this.hiddenCanvasContext.translate(t.x,t.y),this.context.scale(t.k,t.k),this.hiddenCanvasContext.scale(t.k,t.k),this.scale=t.k,this.panX=t.x,this.panY=t.y;const e=this.root.links();this.context.beginPath();for(const s of e)this.drawLink(s);this.context.beginPath();for(const s of this.nodes)s.renderCol?this.context.fillStyle=s.renderCol:this.context.fillStyle="RGBA(105, 105, 105, 0.8)",s.__pickColor===void 0&&(s.__pickColor=this.genColor(),this.colToNode[s.__pickColor]=s),this.hiddenCanvasContext.fillStyle=s.__pickColor,this.drawNode(s);this.context.restore(),this.hiddenCanvasContext.restore()},drawNode(t){var a;let e=this.context,s=this.hiddenCanvasContext;const h=t.data.name===((a=this.resultNode)==null?void 0:a.data.skill_name);if(t.data.type!="domain"){e.beginPath(),e.arc(t.y,t.x,10,0,2*Math.PI);const r=t.data.level?this.hexColor(t.data.level):"#000";e.lineWidth=2,e.fillStyle="#FFF",e.fill(),e.strokeStyle=r,e.stroke()}if(this.scale>.6)if(t.data.type!="domain"){e.beginPath(),e.strokeStyle="#FFF",e.lineWidth=4,e.fillStyle=h?"#ff0000":"#000",e.font=h?"bold":"normal",e.font="normal",e.direction="ltr";const r=h?`${t.data.name} ◀`:t.data.name;e.strokeText(r,t.y+15,t.x+2),e.fillText(r,t.y+15,t.x+2)}else{e.beginPath(),e.strokeStyle="#FFF",e.lineWidth=4,e.fillStyle=h?"#ff0000":"#849cab",e.direction="rtl";const r=h?`${t.data.name} ▶`:t.data.name;e.strokeText(r,t.y-5,t.x+2),e.fillText(r,t.y-5,t.x+2)}t.data.type!="domain"?(s.beginPath(),s.moveTo(t.y,t.x),s.arc(t.y,t.x,10,0,2*Math.PI),s.fill()):(s.beginPath(),s.moveTo(t.y,t.x-10),s.lineTo(t.y-20/2,t.x-10+20/2),s.lineTo(t.y,t.x-10+20),s.lineTo(t.y+20/2,t.x-10+20/2),s.closePath(),s.lineWidth=2,s.fill(),s.stroke())},drawLink(t){const e=b().x(s=>s.y).y(s=>s.x).context(this.context);this.context.lineWidth=1,t.source.data.type=="super"&&t.target.data.position=="end"||t.target.data.type=="sub"?this.context.setLineDash([5,3]):this.context.setLineDash([]),this.context.beginPath(),e(t),this.context.strokeStyle="#000",this.context.stroke()},genColor(){var t=[];this.nextCol<16777215&&(t.push(this.nextCol&255),t.push((this.nextCol&65280)>>8),t.push((this.nextCol&16711680)>>16),this.nextCol+=100);var e="rgb("+t.join(",")+")";return e},async printPDF(){await this.createSVGTree();var t=document.getElementById("linearTree"),e=x(t),s=e.node(),h=new XMLSerializer,a=h.serializeToString(s),r={svg:a,treeType:"linear"},c=JSON.stringify(r),n=new XMLHttpRequest;n.responseType="arraybuffer",n.open("POST","/skilltree/print-pdf",!0),n.setRequestHeader("Content-type","application/json;charset=UTF-8"),n.setRequestHeader("Accept","application/json, text/plain, */*"),n.send(c),n.onload=function(){if(this.readyState==4&&this.status==200){let o=new Blob([n.response],{type:"application/pdf"});const l=window.URL.createObjectURL(o);var i=document.createElement("a");document.body.appendChild(i),i.style="display: none",i.href=l,i.download="Skill-Tree.pdf",i.click(),window.URL.revokeObjectURL(l)}}},createSVGTree(){const t=w(this.data),e=15,s=this.width/(t.height+1);S().nodeSize([e,s])(t);let a=1/0,r=-a;t.each(l=>{l.x>r&&(r=l.x),l.x<a&&(a=l.x)});const c=r-a+e*2;let n=z("svg").attr("id","linearTree").attr("width",this.width).attr("height",c).attr("viewBox",[-s/3,a-e,this.width,c]).attr("style","max-width: 100%; height: auto; font: 10px sans-serif;");const i=n.append("g");i.append("g").attr("fill","none").attr("stroke-opacity",1).selectAll().data(t.links()).join("path").attr("d",b().x(l=>l.y).y(l=>l.x)).attr("stroke",function(l){return"#000"}).attr("stroke-width",function(l){return 1.5}).style("stroke-dasharray",function(l){if(l.source.data.type=="super"&&l.target.data.position=="end"||l.target.data.type=="sub")return 5});const o=i.append("g").attr("stroke-linejoin","round").attr("stroke-width",3).selectAll().data(t.descendants()).join("g").attr("transform",l=>`translate(${l.y},${l.x})`);o.append("circle").attr("fill",l=>l.children?"#555":"#000").attr("r",2.5),o.append("text").style("font-weight",function(l){return l.data.type=="super"?"700":"400"}).style("font-style",function(l){if(l.data.type=="sub")return"italic"}).attr("dy","0.31em").attr("x",l=>l.children?-6:6).attr("text-anchor",l=>l.children?"end":"start").text(function(l){return l.data.position=="end"?"":l.data.skill_name}).clone(!0).lower().attr("stroke",function(l){return"white"}),document.querySelector("#SVGskilltree").append(n.node())},resetPos(){x(this.context.canvas).transition().duration(700).call(this.d3Zoom.transform,v.translate(0,0).scale(.3)),this.$refs.sliderControl.showScaleLabel()},zoomInD3(t,e,s){x(this.context.canvas).call(this.d3Zoom.transform,v.translate(e,s).scale(t)),this.$refs.sliderControl.showScaleLabel()},panInD3(){x(this.context.canvas).call(this.d3Zoom.transform,v.translate(this.panX,this.panY).scale(this.scale))},hexColor(t){switch(t){case"college":return"#FFA500";case"grade_school":return"#40E0D0";case"high_school":return"#FFD700";case"middle_school":return"#33A133";case"phd":return"#FF0000"}},hexBorderColor(t){switch(t){case"college":return"#CC8400";case"grade_school":return"#33B3A6";case"high_school":return"#CCAC00";case"middle_school":return"#006400";case"phd":return"#CC0000"}},goToLocation(t){this.resultNode=t;const e=-t.y*this.scale+window.innerWidth/(2*this.scale)*this.scale,s=-t.x*this.scale+window.innerHeight/(2*this.scale)*this.scale;x(this.context.canvas).transition().duration(2e3).call(this.d3Zoom.transform,v.translate(e,s).scale(this.scale))},findNodeWithName(t){let e=[];return this.root.each(function(s){var h,a,r,c;if(t.length<2){if(((a=(h=s.data)==null?void 0:h.name)==null?void 0:a.toLowerCase().substring(0,t.length))===t){const n={...s.data,skill_name:s.data.name};e.push({...s,data:n})}}else if((c=(r=s.data)==null?void 0:r.name)!=null&&c.toLowerCase().includes(t)){const n={...s.data,skill_name:s.data.name};e.push({...s,data:n})}}),e}}},L=t=>(j("data-v-f51e72e2"),t=t(),B(),t),ct={key:0,class:"loading-animation d-flex justify-content-center align-items-center py-4"},dt=L(()=>d("span",{class:"loader"},null,-1)),ut=[dt],ft={id:"wrapper"},pt={id:"canvas",width:"1500",height:"1500",ref:"canvas",tabindex:"1"},xt=L(()=>d("canvas",{id:"hidden-canvas",width:"1500",height:"1500"},null,-1)),yt=L(()=>d("div",{id:"SVGskilltree"},null,-1)),vt=L(()=>d("div",{id:"sidepanel-backdrop"},null,-1));function kt(t,e,s,h,a,r){const c=m("SkillPanel"),n=m("SliderControl"),i=m("JoystickControl");return f(),y(C,null,[a.isLoading==!0?(f(),y("div",ct,ut)):g("",!0),I(d("div",ft,[_(c,{skill:a.skill,showSkillPanel:a.showSkillPanel},null,8,["skill","showSkillPanel"]),a.showAnimation?(f(),y("div",{key:0,style:R({top:`${a.yPos}px`,left:`${a.xPos}px`}),class:"click-animation"},null,4)):g("",!0),d("canvas",pt,null,512),xt,yt,_(n,{ref:"sliderControl"},null,512),vt,_(i)],512),[[D,a.isLoading==!1]])],64)}const mt=F(ht,[["render",kt],["__scopeId","data-v-f51e72e2"]]);const gt={setup(){return{sessionDetailsStore:O()}},data(){return{searchText:"",lastChooseResult:"",showResult:!1}},created(){},components:{TidyTree:rt,TidyTreeNoAccount:mt},methods:{resetPos(){this.$refs.childComponent.resetPos()},handleChooseResult(t){this.searchText=t.data.skill_name,this.lastChooseResult=t.data.skill_name,this.$refs.childComponent.goToLocation(t),this.$refs.childComponent.showSkillPanelComponent(t)}},computed:{findNodeResults(){return this.lastChooseResult===this.searchText?[]:(this.$refs.childComponent.showSkillPanel=!1,this.$refs.childComponent.findNodeWithName(this.searchText.toLocaleLowerCase()))}},watch:{searchText:{handler(t){t===""&&(this.$refs.childComponent.showSkillPanel=!1,this.$refs.childComponent.resetPos())}}}},_t={id:"legend",class:"collapsible-tree-legend container-fluid p-2 position-relative"},wt={class:"position-absolute legend-div"},St={id:"mobile-legend"},Ct={class:"legend row"},Tt=M('<div class="col-8"><div class="col"><span class="grade-school"></span>Grade school </div><div class="col"><span class="middle-school"></span> Middle school </div><div class="col"><span class="high-school"></span> High school </div><div class="col"><span class="college"></span> College </div><div class="col"><span class="phd"></span> PHD</div></div>',1),bt={class:"col-4 d-flex flex-column align-items-end"},Pt={id:"tablet-and-up-legend"},Lt={class:"legend row"},Nt=M('<div class="col"><span class="grade-school"></span>Grade school </div><div class="col"><span class="middle-school"></span> Middle school </div><div class="col"><span class="high-school"></span> High school </div><div class="col"><span class="college"></span> College</div><div class="col"><span class="phd"></span> PHD</div>',5),$t={class:"col d-flex justify-content-end align-items-center gap-2"},Ft={class:"d-flex align-items-center p-1"},It=d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"15",height:"15",fill:"#5f6368",class:"me-2"},[d("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"})],-1),At={class:"position-relative"},Dt={key:0,class:"search-results"},Rt=["onClick"],jt=d("span",null,"Loading...",-1);function Bt(t,e,s,h,a,r){const c=m("TidyTree"),n=m("TidyTreeNoAccount");return f(),y(C,null,[d("div",_t,[d("div",wt,[d("div",St,[d("div",Ct,[Tt,d("div",bt,[h.sessionDetailsStore.isLoggedIn?(f(),y("button",{key:0,id:"print-btn",class:"btn btn-info",onClick:e[0]||(e[0]=i=>t.$refs.childComponent.printPDF())}," Print ")):g("",!0),d("button",{id:"reset-btn",class:"btn btn-primary",onClick:e[1]||(e[1]=i=>r.resetPos())}," Reset ")])])]),d("div",Pt,[d("div",Lt,[Nt,d("div",$t,[d("div",{class:U(["search-bar",a.searchText.length>0&&"have-results"])},[d("div",Ft,[It,I(d("input",{id:"skill-tree-search-text",type:"text",class:"skill-tree-input",placeholder:"Skill Name","onUpdate:modelValue":e[2]||(e[2]=i=>a.searchText=i)},null,512),[[V,a.searchText]])]),d("div",At,[a.searchText.length?(f(),y("div",Dt,[(f(!0),y(C,null,Y(r.findNodeResults,i=>(f(),y("div",{onClick:o=>r.handleChooseResult(i),class:"result-row"},J(i.data.skill_name),9,Rt))),256))])):g("",!0)])],2),h.sessionDetailsStore.isLoggedIn?(f(),y("button",{key:0,id:"print-btn",class:"btn btn-info me-3",onClick:e[3]||(e[3]=i=>t.$refs.childComponent.printPDF())}," Print ")):g("",!0),d("button",{id:"reset-btn",class:"btn btn-primary",onClick:e[4]||(e[4]=i=>r.resetPos())}," Reset ")])])])])]),(f(),N(Z,null,{default:A(()=>[h.sessionDetailsStore.isLoggedIn?(f(),N(c,{key:0,ref:"childComponent"},null,512)):(f(),N(n,{key:1,ref:"childComponent"},null,512))]),fallback:A(()=>[jt]),_:1}))],64)}const Xt=F(gt,[["render",Bt]]);export{Xt as default};
