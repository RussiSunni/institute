import{_ as P,u as z,r as x,o as u,c as g,a as m,w as F,v as B,b as h,d as k,F as L,p as D,e as N,f as O,g as V,h as I,i as $,S as W,j}from"./main-f2c71a79.js";import{S as A,z as R,s as y,h as _,t as S,a as E,i as f,l as w,c as G}from"./zoom-51135b13.js";import{S as M,J as q}from"./JoystickControl-028ef2aa.js";const X={setup(){return{skillTreeStore:z()}},data(){return{width:6e3,height:null,skill:{id:null,children:[],isMastered:null,isUnlocked:null,container:null,name:null,description:null,tagIDs:[],sprite:null,type:null},tree:{},root:{},context:{},hiddenCanvasContext:{},r:1.5,nodes:[],nextCol:1,colToNode:{},isSkillInfoPanelShown:!1,scale:.3,panX:0,panY:0,data:{},d3Zoom:null,isLoading:!0}},components:{SkillPanel:A,SliderControl:M,JoystickControl:q},async mounted(){this.skillTreeStore.userSkills.length==0&&await this.skillTreeStore.getUserSkills(),this.height=window.innerHeight,this.skill={name:"SKILLS",sprite:null,children:this.skillTreeStore.userSkills},this.getAlgorithm();let t=document.getElementById("hidden-canvas");this.hiddenCanvasContext=t.getContext("2d",{willReadFrequently:!0}),t.style.display="none",canvas.addEventListener("click",async e=>{this.nodes;var s=e.layerX,c=e.layerY,a=this.hiddenCanvasContext,r=a.getImageData(s,c,1,1).data,d="rgb("+r[0]+","+r[1]+","+r[2]+")",o=this.colToNode[d];if(o&&o.data.id){o.renderCol=o.__pickColor,this.skill.name=o.data.skill_name,this.skill.id=o.data.id,this.skill.type=o.data.type;const l=await(await fetch("/skills/mastery-requirements/"+this.skill.id)).json();this.skill.masteryRequirements=l,this.showInfoPanel()}}),this.d3Zoom=R().scaleExtent([.1,5]).on("zoom",({transform:e})=>{this.drawTree(e),this.$refs.sliderControl.changeGradientBG()}),y(this.context.canvas).call(this.d3Zoom),this.resetPos(),this.isLoading=!1},methods:{getAlgorithm(){var t=[];t=JSON.parse(JSON.stringify(this.skill.children));function e(n){for(var l=n.length;l--;){if(n[l].type=="super"&&n[l].position!="end"){var i=[],v=[];for(let p=0;p<n[l].children.length;p++)n[l].children[p].type=="sub"?i.push(n[l].children[p]):v.push(n[l].children[p]);var T={skill_name:n[l].skill_name,type:"super",position:"end",children:i};n[l].children=[],n[l].children.push(T);for(let p=0;p<v.length;p++)n[l].children.push(v[p])}typeof n[l]<"u"&&n[l].children&&Array.isArray(n[l].children)&&n[l].children.length>0&&e(n[l].children)}}e(t),this.data={skill_name:"My skills",children:t},this.root=_(this.data);const s=24,c=this.width/(this.root.height+1);this.tree=S().nodeSize([s,c]),this.root.sort((n,l)=>E(n.data.name,l.data.name)),this.tree(this.root);let a=1/0,r=-a;this.root.each(n=>{n.x>r&&(r=n.x),n.x<a&&(a=n.x)});var d=document.getElementById("canvas");d.width=this.width,d.height=this.height,this.context=d.getContext("2d");let o=document.getElementById("hidden-canvas");this.hiddenCanvasContext=o.getContext("2d"),this.drawTree(f)},drawTree(t){this.nodes=this.root.descendants(),this.context.save(),this.hiddenCanvasContext.save(),this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height),this.hiddenCanvasContext.clearRect(0,0,this.hiddenCanvasContext.canvas.width,this.hiddenCanvasContext.canvas.height),this.context.translate(t.x,t.y),this.hiddenCanvasContext.translate(t.x,t.y),this.context.scale(t.k,t.k),this.hiddenCanvasContext.scale(t.k,t.k),this.scale=t.k,this.panX=t.x,this.panY=t.y;const e=this.root.links();this.context.beginPath();for(const s of e)this.drawLink(s);this.context.beginPath();for(const s of this.nodes)s.renderCol?this.context.fillStyle=s.renderCol:this.context.fillStyle="RGBA(105, 105, 105, 0.8)",s.__pickColor===void 0&&(s.__pickColor=this.genColor(),this.colToNode[s.__pickColor]=s),this.hiddenCanvasContext.fillStyle=s.__pickColor,this.drawNode(s);this.context.restore(),this.hiddenCanvasContext.restore()},drawNode(t){let e=this.context,s=this.hiddenCanvasContext;if(t.data.type!="domain"){e.beginPath(),e.arc(t.y,t.x,10,0,2*Math.PI);const c=t.data.level?this.hexColor(t.data.level):"#000";if(t.data.is_mastered==1){e.fillStyle=c,e.fill();const a=this.hexBorderColor(t.data.level);e.lineWidth=2,e.strokeStyle=a,e.stroke()}else e.lineWidth=2,e.fillStyle="#FFF",e.fill(),e.strokeStyle=c,e.stroke()}this.scale>.6&&(t.data.type!="domain"?(e.beginPath(),e.strokeStyle="#FFF",e.lineWidth=4,e.fillStyle="#000",e.font="normal",e.direction="ltr",e.strokeText(t.data.skill_name,t.y+15,t.x+2),e.fillText(t.data.skill_name,t.y+15,t.x+2)):(e.beginPath(),e.strokeStyle="#FFF",e.lineWidth=4,e.fillStyle="#849cab",e.direction="rtl",e.strokeText(t.data.skill_name,t.y-5,t.x+2),e.fillText(t.data.skill_name,t.y-5,t.x+2))),t.data.type!="domain"?(s.beginPath(),s.moveTo(t.y,t.x),s.arc(t.y,t.x,10,0,2*Math.PI),s.fill()):(s.beginPath(),s.moveTo(t.y,t.x-10),s.lineTo(t.y-20/2,t.x-10+20/2),s.lineTo(t.y,t.x-10+20),s.lineTo(t.y+20/2,t.x-10+20/2),s.closePath(),s.lineWidth=2,s.fill(),s.stroke())},drawLink(t){const e=w().x(s=>s.y).y(s=>s.x).context(this.context);t.target.data.is_mastered==1?this.context.lineWidth=4:this.context.lineWidth=1,t.source.data.type=="super"&&t.target.data.position=="end"||t.target.data.type=="sub"?this.context.setLineDash([5,3]):this.context.setLineDash([]),this.context.beginPath(),e(t),this.context.strokeStyle="#000",this.context.stroke()},genColor(){var t=[];this.nextCol<16777215&&(t.push(this.nextCol&255),t.push((this.nextCol&65280)>>8),t.push((this.nextCol&16711680)>>16),this.nextCol+=100);var e="rgb("+t.join(",")+")";return e},showInfoPanel(){this.isSkillInfoPanelShown||(this.isSkillInfoPanelShown=!0,screen.width>800?document.getElementById("skillInfoPanel").style.width="474px":document.getElementById("skillInfoPanel").style.height="474px")},hideInfoPanel(){this.isSkillInfoPanelShown&&(screen.width>800?document.getElementById("skillInfoPanel").style.width="0px":document.getElementById("skillInfoPanel").style.height="0px",document.getElementById("sidepanel-backdrop").style.display="none",this.isSkillInfoPanelShown=!1)},async printPDF(){await this.createSVGTree();var t=document.getElementById("linearTree"),e=y(t),s=e.node(),c=new XMLSerializer,a=c.serializeToString(s),r={svg:a,treeType:"linear"},d=JSON.stringify(r),o=new XMLHttpRequest;o.responseType="arraybuffer",o.open("POST","/skilltree/print-pdf",!0),o.setRequestHeader("Content-type","application/json;charset=UTF-8"),o.setRequestHeader("Accept","application/json, text/plain, */*"),o.send(d),o.onload=function(){if(this.readyState==4&&this.status==200){let l=new Blob([o.response],{type:"application/pdf"});const i=window.URL.createObjectURL(l);var n=document.createElement("a");document.body.appendChild(n),n.style="display: none",n.href=i,n.download="My-Skill-Tree.pdf",n.click(),window.URL.revokeObjectURL(i)}}},createSVGTree(){const t=_(this.data),e=15,s=this.width/(t.height+1);S().nodeSize([e,s])(t);let a=1/0,r=-a;t.each(i=>{i.x>r&&(r=i.x),i.x<a&&(a=i.x)});const d=r-a+e*2;let o=G("svg").attr("id","linearTree").attr("width",this.width).attr("height",d).attr("viewBox",[-s/3,a-e,this.width,d]).attr("style","max-width: 100%; height: auto; font: 10px sans-serif;");const n=o.append("g");n.append("g").attr("fill","none").attr("stroke-opacity",1).selectAll().data(t.links()).join("path").attr("d",w().x(i=>i.y).y(i=>i.x)).attr("stroke",function(i){return"#000"}).attr("stroke-width",function(i){return i.target.data.is_mastered==1?8:1.5}).style("stroke-dasharray",function(i){if(i.source.data.type=="super"&&i.target.data.position=="end"||i.target.data.type=="sub")return 5});const l=n.append("g").attr("stroke-linejoin","round").attr("stroke-width",3).selectAll().data(t.descendants()).join("g").attr("transform",i=>`translate(${i.y},${i.x})`);l.append("circle").attr("fill",i=>i.children?"#555":"#000").attr("r",2.5),l.append("text").style("font-weight",function(i){return i.data.type=="super"?"700":"400"}).style("font-style",function(i){if(i.data.type=="sub")return"italic"}).attr("dy","0.31em").attr("x",i=>i.children?-6:6).attr("text-anchor",i=>i.children?"end":"start").text(function(i){return i.data.position=="end"?"":i.data.skill_name}).clone(!0).lower().attr("stroke",function(i){return"white"}),document.querySelector("#SVGskilltree").append(o.node())},resetPos(){y(this.context.canvas).transition().duration(700).call(this.d3Zoom.transform,f.translate(0,0).scale(.3)),this.$refs.sliderControl.showScaleLabel()},zoomInD3(t,e,s){y(this.context.canvas).call(this.d3Zoom.transform,f.translate(e,s).scale(t)),this.$refs.sliderControl.showScaleLabel()},panInD3(){y(this.context.canvas).call(this.d3Zoom.transform,f.translate(this.panX,this.panY).scale(this.scale))},hexColor(t){switch(t){case"college":return"#FFA500";case"grade_school":return"#40E0D0";case"high_school":return"#FFD700";case"middle_school":return"#33A133";case"phd":return"#FF0000"}},hexBorderColor(t){switch(t){case"college":return"#CC8400";case"grade_school":return"#33B3A6";case"high_school":return"#CCAC00";case"middle_school":return"#006400";case"phd":return"#CC0000"}}}},C=t=>(D("data-v-7c4ca12c"),t=t(),N(),t),H={key:0,class:"loading-animation d-flex justify-content-center align-items-center py-4"},U=C(()=>h("span",{class:"loader"},null,-1)),J=[U],Z={id:"wrapper"},Y={id:"canvas",width:"1500",height:"1500",ref:"canvas",tabindex:"1"},K=C(()=>h("canvas",{id:"hidden-canvas",width:"1500",height:"1500"},null,-1)),Q=C(()=>h("div",{id:"SVGskilltree"},null,-1)),tt=C(()=>h("div",{id:"sidepanel-backdrop"},null,-1));function et(t,e,s,c,a,r){const d=x("SkillPanel"),o=x("SliderControl"),n=x("JoystickControl");return u(),g(L,null,[a.isLoading==!0?(u(),g("div",H,J)):m("",!0),F(h("div",Z,[k(d,{skill:a.skill},null,8,["skill"]),h("canvas",Y,null,512),K,Q,k(o,{ref:"sliderControl"},null,512),tt,k(n)],512),[[B,a.isLoading==!1]])],64)}const st=P(X,[["render",et],["__scopeId","data-v-7c4ca12c"]]);const it={setup(){return{skillsStore:O()}},data(){return{width:6e3,height:null,skill:{id:null,children:[],isMastered:null,isUnlocked:null,container:null,name:null,description:null,tagIDs:[],sprite:null,type:null},tree:{},root:{},context:{},hiddenCanvasContext:{},r:1.5,nodes:[],nextCol:1,colToNode:{},isSkillInfoPanelShown:!1,scale:.3,panX:0,panY:0,data:{},d3Zoom:null,isLoading:!0}},components:{SkillPanel:A,SliderControl:M,JoystickControl:q},async mounted(){this.skillsStore.filteredNestedSkillsList.length==0&&await this.skillsStore.getFilteredNestedSkillsList(),this.height=window.innerHeight,this.skill={name:"SKILLS",sprite:null,children:this.skillsStore.filteredNestedSkillsList},this.getAlgorithm();let t=document.getElementById("hidden-canvas");this.hiddenCanvasContext=t.getContext("2d",{willReadFrequently:!0}),t.style.display="none",canvas.addEventListener("click",async e=>{this.nodes;var s=e.layerX,c=e.layerY,a=this.hiddenCanvasContext,r=a.getImageData(s,c,1,1).data,d="rgb("+r[0]+","+r[1]+","+r[2]+")",o=this.colToNode[d];if(o&&o.data.id){o.renderCol=o.__pickColor,this.skill.name=o.data.name,this.skill.id=o.data.id,this.skill.type=o.data.type;const l=await(await fetch("/skills/mastery-requirements/"+this.skill.id)).json();this.skill.masteryRequirements=l,this.showInfoPanel()}}),this.d3Zoom=R().scaleExtent([.1,5]).on("zoom",({transform:e})=>{this.drawTree(e),this.$refs.sliderControl.changeGradientBG()}),y(this.context.canvas).call(this.d3Zoom),this.resetPos(),this.isLoading=!1},methods:{getAlgorithm(){var t=[];t=JSON.parse(JSON.stringify(this.skill.children));function e(n){for(var l=n.length;l--;){if(n[l].type=="super"&&n[l].position!="end"){var i=[],v=[];for(let p=0;p<n[l].children.length;p++)n[l].children[p].type=="sub"?i.push(n[l].children[p]):v.push(n[l].children[p]);var T={name:n[l].name,type:"super",position:"end",children:i};n[l].children=[],n[l].children.push(T);for(let p=0;p<v.length;p++)n[l].children.push(v[p])}typeof n[l]<"u"&&n[l].children&&Array.isArray(n[l].children)&&n[l].children.length>0&&e(n[l].children)}}e(t),this.data={skill_name:"My skills",children:t},this.root=_(this.data);const s=24,c=this.width/(this.root.height+1);this.tree=S().nodeSize([s,c]),this.root.sort((n,l)=>E(n.data.name,l.data.name)),this.tree(this.root);let a=1/0,r=-a;this.root.each(n=>{n.x>r&&(r=n.x),n.x<a&&(a=n.x)});var d=document.getElementById("canvas");d.width=this.width,d.height=this.height,this.context=d.getContext("2d");let o=document.getElementById("hidden-canvas");this.hiddenCanvasContext=o.getContext("2d"),this.drawTree(f)},drawTree(t){this.nodes=this.root.descendants(),this.context.save(),this.hiddenCanvasContext.save(),this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height),this.hiddenCanvasContext.clearRect(0,0,this.hiddenCanvasContext.canvas.width,this.hiddenCanvasContext.canvas.height),this.context.translate(t.x,t.y),this.hiddenCanvasContext.translate(t.x,t.y),this.context.scale(t.k,t.k),this.hiddenCanvasContext.scale(t.k,t.k),this.scale=t.k,this.panX=t.x,this.panY=t.y;const e=this.root.links();this.context.beginPath();for(const s of e)this.drawLink(s);this.context.beginPath();for(const s of this.nodes)s.renderCol?this.context.fillStyle=s.renderCol:this.context.fillStyle="RGBA(105, 105, 105, 0.8)",s.__pickColor===void 0&&(s.__pickColor=this.genColor(),this.colToNode[s.__pickColor]=s),this.hiddenCanvasContext.fillStyle=s.__pickColor,this.drawNode(s);this.context.restore(),this.hiddenCanvasContext.restore()},drawNode(t){let e=this.context,s=this.hiddenCanvasContext;if(t.data.type!="domain"){e.beginPath(),e.arc(t.y,t.x,10,0,2*Math.PI);const c=t.data.level?this.hexColor(t.data.level):"#000";e.lineWidth=2,e.fillStyle="#FFF",e.fill(),e.strokeStyle=c,e.stroke()}this.scale>.6&&(t.data.type!="domain"?(e.beginPath(),e.strokeStyle="#FFF",e.lineWidth=4,e.fillStyle="#000",e.font="normal",e.direction="ltr",e.strokeText(t.data.name,t.y+15,t.x+2),e.fillText(t.data.name,t.y+15,t.x+2)):(e.beginPath(),e.strokeStyle="#FFF",e.lineWidth=4,e.fillStyle="#849cab",e.direction="rtl",e.strokeText(t.data.name,t.y-5,t.x+2),e.fillText(t.data.name,t.y-5,t.x+2))),t.data.type!="domain"?(s.beginPath(),s.moveTo(t.y,t.x),s.arc(t.y,t.x,10,0,2*Math.PI),s.fill()):(s.beginPath(),s.moveTo(t.y,t.x-10),s.lineTo(t.y-20/2,t.x-10+20/2),s.lineTo(t.y,t.x-10+20),s.lineTo(t.y+20/2,t.x-10+20/2),s.closePath(),s.lineWidth=2,s.fill(),s.stroke())},drawLink(t){const e=w().x(s=>s.y).y(s=>s.x).context(this.context);this.context.lineWidth=1,t.source.data.type=="super"&&t.target.data.position=="end"||t.target.data.type=="sub"?this.context.setLineDash([5,3]):this.context.setLineDash([]),this.context.beginPath(),e(t),this.context.strokeStyle="#000",this.context.stroke()},genColor(){var t=[];this.nextCol<16777215&&(t.push(this.nextCol&255),t.push((this.nextCol&65280)>>8),t.push((this.nextCol&16711680)>>16),this.nextCol+=100);var e="rgb("+t.join(",")+")";return e},showInfoPanel(){this.isSkillInfoPanelShown||(this.isSkillInfoPanelShown=!0,screen.width>800?document.getElementById("skillInfoPanel").style.width="474px":document.getElementById("skillInfoPanel").style.height="474px")},hideInfoPanel(){this.isSkillInfoPanelShown&&(screen.width>800?document.getElementById("skillInfoPanel").style.width="0px":document.getElementById("skillInfoPanel").style.height="0px",document.getElementById("sidepanel-backdrop").style.display="none",this.isSkillInfoPanelShown=!1)},async printPDF(){await this.createSVGTree();var t=document.getElementById("linearTree"),e=y(t),s=e.node(),c=new XMLSerializer,a=c.serializeToString(s),r={svg:a,treeType:"linear"},d=JSON.stringify(r),o=new XMLHttpRequest;o.responseType="arraybuffer",o.open("POST","/skilltree/print-pdf",!0),o.setRequestHeader("Content-type","application/json;charset=UTF-8"),o.setRequestHeader("Accept","application/json, text/plain, */*"),o.send(d),o.onload=function(){if(this.readyState==4&&this.status==200){let l=new Blob([o.response],{type:"application/pdf"});const i=window.URL.createObjectURL(l);var n=document.createElement("a");document.body.appendChild(n),n.style="display: none",n.href=i,n.download="Skill-Tree.pdf",n.click(),window.URL.revokeObjectURL(i)}}},createSVGTree(){const t=_(this.data),e=15,s=this.width/(t.height+1);S().nodeSize([e,s])(t);let a=1/0,r=-a;t.each(i=>{i.x>r&&(r=i.x),i.x<a&&(a=i.x)});const d=r-a+e*2;let o=G("svg").attr("id","linearTree").attr("width",this.width).attr("height",d).attr("viewBox",[-s/3,a-e,this.width,d]).attr("style","max-width: 100%; height: auto; font: 10px sans-serif;");const n=o.append("g");n.append("g").attr("fill","none").attr("stroke-opacity",1).selectAll().data(t.links()).join("path").attr("d",w().x(i=>i.y).y(i=>i.x)).attr("stroke",function(i){return"#000"}).attr("stroke-width",function(i){return 1.5}).style("stroke-dasharray",function(i){if(i.source.data.type=="super"&&i.target.data.position=="end"||i.target.data.type=="sub")return 5});const l=n.append("g").attr("stroke-linejoin","round").attr("stroke-width",3).selectAll().data(t.descendants()).join("g").attr("transform",i=>`translate(${i.y},${i.x})`);l.append("circle").attr("fill",i=>i.children?"#555":"#000").attr("r",2.5),l.append("text").style("font-weight",function(i){return i.data.type=="super"?"700":"400"}).style("font-style",function(i){if(i.data.type=="sub")return"italic"}).attr("dy","0.31em").attr("x",i=>i.children?-6:6).attr("text-anchor",i=>i.children?"end":"start").text(function(i){return i.data.position=="end"?"":i.data.skill_name}).clone(!0).lower().attr("stroke",function(i){return"white"}),document.querySelector("#SVGskilltree").append(o.node())},resetPos(){y(this.context.canvas).transition().duration(700).call(this.d3Zoom.transform,f.translate(0,0).scale(.3)),this.$refs.sliderControl.showScaleLabel()},zoomInD3(t,e,s){y(this.context.canvas).call(this.d3Zoom.transform,f.translate(e,s).scale(t)),this.$refs.sliderControl.showScaleLabel()},panInD3(){y(this.context.canvas).call(this.d3Zoom.transform,f.translate(this.panX,this.panY).scale(this.scale))},hexColor(t){switch(t){case"college":return"#FFA500";case"grade_school":return"#40E0D0";case"high_school":return"#FFD700";case"middle_school":return"#33A133";case"phd":return"#FF0000"}},hexBorderColor(t){switch(t){case"college":return"#CC8400";case"grade_school":return"#33B3A6";case"high_school":return"#CCAC00";case"middle_school":return"#006400";case"phd":return"#CC0000"}}}},b=t=>(D("data-v-32dcebd7"),t=t(),N(),t),nt={key:0,class:"loading-animation d-flex justify-content-center align-items-center py-4"},lt=b(()=>h("span",{class:"loader"},null,-1)),ot=[lt],at={id:"wrapper"},rt={id:"canvas",width:"1500",height:"1500",ref:"canvas",tabindex:"1"},dt=b(()=>h("canvas",{id:"hidden-canvas",width:"1500",height:"1500"},null,-1)),ct=b(()=>h("div",{id:"SVGskilltree"},null,-1)),ht=b(()=>h("div",{id:"sidepanel-backdrop"},null,-1));function pt(t,e,s,c,a,r){const d=x("SkillPanel"),o=x("SliderControl"),n=x("JoystickControl");return u(),g(L,null,[a.isLoading==!0?(u(),g("div",nt,ot)):m("",!0),F(h("div",at,[k(d,{skill:a.skill},null,8,["skill"]),h("canvas",rt,null,512),dt,ct,k(o,{ref:"sliderControl"},null,512),ht,k(n)],512),[[B,a.isLoading==!1]])],64)}const ut=P(it,[["render",pt],["__scopeId","data-v-32dcebd7"]]);const yt={setup(){return{sessionDetailsStore:V()}},data(){return{}},created(){},components:{TidyTree:st,TidyTreeNoAccount:ut},methods:{}},ft={id:"legend",class:"collapsible-tree-legend container-fluid p-2"},xt={id:"mobile-legend"},vt={class:"legend row"},gt=j('<div class="col-8"><div class="col"><span class="grade-school"></span>Grade school </div><div class="col"><span class="middle-school"></span> Middle school </div><div class="col"><span class="high-school"></span> High school </div><div class="col"><span class="college"></span> College</div><div class="col"><span class="phd"></span> PHD</div></div>',1),kt={class:"col-4 d-flex flex-column align-items-end"},mt={id:"tablet-and-up-legend"},_t={class:"legend row"},St=j('<div class="col"><span class="grade-school"></span>Grade school </div><div class="col"><span class="middle-school"></span> Middle school </div><div class="col"><span class="high-school"></span> High school </div><div class="col"><span class="college"></span> College</div><div class="col"><span class="phd"></span> PHD</div>',5),wt={class:"col d-flex justify-content-end"},Ct=h("span",null,"Loading...",-1);function bt(t,e,s,c,a,r){const d=x("TidyTree"),o=x("TidyTreeNoAccount");return u(),g(L,null,[h("div",ft,[h("div",xt,[h("div",vt,[gt,h("div",kt,[c.sessionDetailsStore.isLoggedIn?(u(),g("button",{key:0,id:"print-btn",class:"btn btn-info",onClick:e[0]||(e[0]=n=>t.$refs.childComponent.printPDF())}," Print ")):m("",!0),h("button",{id:"reset-btn",class:"btn btn-primary",onClick:e[1]||(e[1]=n=>t.resetPos())}," Reset ")])])]),h("div",mt,[h("div",_t,[St,h("div",wt,[c.sessionDetailsStore.isLoggedIn?(u(),g("button",{key:0,id:"print-btn",class:"btn btn-info me-3",onClick:e[2]||(e[2]=n=>t.$refs.childComponent.printPDF())}," Print ")):m("",!0),h("button",{id:"reset-btn",class:"btn btn-primary",onClick:e[3]||(e[3]=n=>t.resetPos())}," Reset ")])])])]),(u(),I(W,null,{default:$(()=>[c.sessionDetailsStore.isLoggedIn?(u(),I(d,{key:0,ref:"childComponent"},null,512)):(u(),I(o,{key:1,ref:"childComponent"},null,512))]),fallback:$(()=>[Ct]),_:1}))],64)}const Lt=P(yt,[["render",bt]]);export{Lt as default};
