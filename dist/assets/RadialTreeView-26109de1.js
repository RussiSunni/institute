import{_ as M,j as L,u as j,r as C,o as y,c as _,a as N,w as E,v as A,b as r,d as T,F as $,p as z,e as D,f as H,g as w,S as V,h as F}from"./main-76634de4.js";import{S as G,z as O,s as m,t as b,h as P,a as U,b as I,c as q,i as W}from"./zoom-1ee056a0.js";const X={setup(){const t=L(),e=j();return{userDetailsStore:t,skillTreeStore:e}},data(){return{width:6e3,height:null,radius:0,radiusMultiplier:96,skill:{id:null,children:[],isMastered:null,isUnlocked:null,container:null,name:null,description:null,tagIDs:[],sprite:null,type:null,subskills:[]},tree:{},root:{},context:{},hiddenCanvasContext:{},scaleMultiplier:.8,startDragOffset:{x:0,y:0},mouseDown:!1,nodes:[],nextCol:1,colToNode:{},isSkillInfoPanelShown:!1,scale:1,panX:0,panY:0,d3Zoom:null,data:{},isLoading:!0}},components:{SkillPanel:G},async mounted(){this.skillTreeStore.userSkillsSubSkillsSeparate.length==0&&await this.skillTreeStore.getUserSkillsSubSkillsSeparate(),this.width=window.innerWidth,this.height=window.innerHeight,this.radius=Math.min(this.width,this.height)/2-30,this.skill={name:"SKILLS",sprite:null,children:this.skillTreeStore.userSkillsSubSkillsSeparate},this.getAlgorithm(),this.d3Zoom=O().scaleExtent([.05,8]).on("zoom",({transform:t})=>this.zoomed(t)),m(this.context.canvas).call(this.d3Zoom),this.defaultPosition(),canvas.addEventListener("click",async t=>{this.nodes;var e=t.layerX,a=t.layerY,d=this.hiddenCanvasContext,l=d.getImageData(e,a,1,1).data,s="rgb("+l[0]+","+l[1]+","+l[2]+")",o=this.colToNode[s];if(o){o.renderCol=o.__pickColor,this.skill.name=o.data.skill_name,this.skill.id=o.data.id,this.skill.type=o.data.type,this.skill.subskills=o.data.subskills;const i=await(await fetch("/skills/mastery-requirements/"+this.skill.id)).json();this.skill.masteryRequirements=i,this.showInfoPanel()}}),this.isLoading=!1},methods:{getAlgorithm(){var t=[];t=JSON.parse(JSON.stringify(this.skill.children)),this.data={skill_name:"",children:t};const e=b().size([2*Math.PI,this.radius*this.radiusMultiplier]).separation((l,s)=>(l.parent==s.parent?1:2)/l.depth);this.root=e(P(this.data).sort((l,s)=>U(l.data.name,s.data.name)));var a=document.getElementById("canvas");a.width=this.width,a.height=this.height,this.context=a.getContext("2d"),this.context.fillStyle="#1e293b",this.context.fillRect(0,0,this.width,this.height);let d=document.getElementById("hidden-canvas");this.hiddenCanvasContext=d.getContext("2d",{willReadFrequently:!0}),d.style.display="none",this.context.translate(this.width/2,this.height/2),this.hiddenCanvasContext.translate(this.width/2,this.height/2),this.drawTree()},drawTree(){this.nodes=this.root.descendants();const t=this.root.links();this.context.beginPath();for(const e of t)this.drawLink(e);this.context.beginPath();for(const e of this.nodes)e.renderCol?this.context.fillStyle=e.renderCol:this.context.fillStyle="RGBA(105, 105, 105, 0.8)",e.__pickColor===void 0&&(e.__pickColor=this.genColor(),this.colToNode[e.__pickColor]=e),this.hiddenCanvasContext.fillStyle=e.__pickColor,this.drawNode(e);this.context.beginPath(),this.context.moveTo(0,0),this.context.arc(0,0,20,0,2*Math.PI),this.context.fillStyle="lightgreen",this.context.fill(),this.context.fillStyle="LawnGreen",this.context.strokeStyle="black",this.context.lineWidth=5,this.context.beginPath(),this.context.arc(0,0,50,0,2*Math.PI),this.context.fill(),this.context.stroke(),this.context.closePath(),this.context.fillStyle="cyan",this.context.beginPath(),this.context.arc(-12.5,-16.5,7.5,0,2*Math.PI),this.context.fill(),this.context.stroke(),this.context.closePath(),this.context.beginPath(),this.context.arc(12.5,-16.5,7.5,0,2*Math.PI),this.context.fill(),this.context.stroke(),this.context.closePath(),this.context.fillStyle="LawnGreen",this.context.strokeStyle="black",this.context.lineWidth=5,this.context.beginPath(),this.context.arc(0,0,37.5,0,-1*Math.PI),this.context.stroke(),this.context.closePath()},drawNode(t){let e=this.context,a=this.hiddenCanvasContext,d=Math.cos(t.x)*t.y,l=Math.sin(t.x)*t.y,s=o(0,0,d,l,90);function o(c,p,v,x,g){var u=Math.PI/180*g,f=Math.cos(u),S=Math.sin(u),R=f*(v-c)+S*(x-p)+c,B=f*(x-p)-S*(v-c)+p;return[R,B]}let n;t.data.type=="domain"?n="orange":t.data.level=="grade_school"?n="#00FF00":t.data.level=="middle_school"?n="#FFFF00":t.data.level=="high_school"?n="#FFA500":t.data.level=="college"?n="#FF4500":t.data.level=="phd"&&(n="#FF0000");let i;t.depth==1?i=20:i=10,t.data.type!=="domain"&&(e.beginPath(),e.moveTo(s[0],s[1]),e.arc(s[0],s[1],i,0,2*Math.PI),e.fillStyle=n,e.fill());function h(c,p,v,x){var g=x-p,u=v-c,f=Math.atan2(g,u);return f}var h=h(0,0,s[0],s[1]);if(this.scale>.6){e.save(),e.translate(s[0],s[1]),e.rotate(h);let c=0,p=0;2*Math.PI/3>Math.abs(h)>=Math.PI/3?(p=s[0]>0?15:-15,c=0):(c=s[0]>0?15:-15,p=0),s[0]<0?(e.textAlign=t.data.level!=="domain"?"end":"start",e.rotate(Math.PI)):e.textAlign=t.data.level!=="domain"?"start":"end",e.strokeStyle="#1e293b",e.lineWidth=4,e.strokeText(t.data.skill_name,c,p),e.fillStyle=t.data.level!=="domain"?"#FFF":"#afb9c9",e.fillText(t.data.skill_name,c,p),e.restore()}if(a.beginPath(),a.moveTo(s[0],s[1]),a.arc(s[0],s[1],i,0,2*Math.PI),a.fill(),t.data.type=="super")for(let c=0;c<t.data.subskills.length;c++){let g=360/t.data.subskills.length*c*Math.PI/180,u=20*Math.cos(g),f=20*Math.sin(g);e.beginPath(),e.moveTo(s[0],s[1]),e.arc(s[0]+u,s[1]+f,5,0,2*Math.PI),e.fillStyle=n,e.fill(),a.beginPath(),a.moveTo(s[0],s[1]),a.arc(s[0]+u,s[1]+f,5,0,2*Math.PI),a.fill()}},drawLink(t){const e=I().angle(d=>d.x).radius(d=>d.y).context(this.context);let a="#71717a";t.target.data.is_mastered==1?(this.context.lineWidth=4,a="#ffffff"):this.context.lineWidth=1,this.context.beginPath(),e(t),this.context.strokeStyle=a,this.context.stroke()},genColor(){var t=[];this.nextCol<16777215&&(t.push(this.nextCol&255),t.push((this.nextCol&65280)>>8),t.push((this.nextCol&16711680)>>16),this.nextCol+=100);var e="rgb("+t.join(",")+")";return e},zoomed(t){this.context.save(),this.hiddenCanvasContext.save(),this.context.fillStyle="#1e293b",this.context.fillRect(this.width/2*-1,this.height/2*-1,this.width,this.height),this.hiddenCanvasContext.clearRect(this.width/2*-1,this.height/2*-1,this.width,this.height),this.context.translate(t.x,t.y),this.context.scale(t.k,t.k),this.hiddenCanvasContext.translate(t.x,t.y),this.hiddenCanvasContext.scale(t.k,t.k),this.drawTree(),this.context.fill(),this.context.restore(),this.hiddenCanvasContext.fill(),this.hiddenCanvasContext.restore()},showInfoPanel(){this.isSkillInfoPanelShown||(this.isSkillInfoPanelShown=!0,screen.width>800?document.getElementById("skillInfoPanel").style.width="474px":document.getElementById("skillInfoPanel").style.height="474px")},hideInfoPanel(){this.isSkillInfoPanelShown&&(screen.width>800?document.getElementById("skillInfoPanel").style.width="0px":document.getElementById("skillInfoPanel").style.height="0px",document.getElementById("sidepanel-backdrop").style.display="none",this.isSkillInfoPanelShown=!1)},async printPDF(){await this.getPrintAlgorithm();var t=document.getElementById("radialTree"),e=m(t),a=e.node(),d=new XMLSerializer,l=d.serializeToString(a),s={svg:l,treeType:"radial"},o=JSON.stringify(s),n=new XMLHttpRequest;n.responseType="arraybuffer",n.open("POST","/skilltree/print-pdf",!0),n.setRequestHeader("Content-type","application/json;charset=UTF-8"),n.setRequestHeader("Accept","application/json, text/plain, */*"),n.send(o),n.onload=function(){if(this.readyState==4&&this.status==200){let h=new Blob([n.response],{type:"application/pdf"});const c=window.URL.createObjectURL(h);var i=document.createElement("a");document.body.appendChild(i),i.style="display: none",i.href=c,i.download="My-Skill-Tree.pdf",i.click(),window.URL.revokeObjectURL(c)}}},async getPrintAlgorithm(){await this.skillTreeStore.getUserSkills();const t={name:"SKILLS",sprite:null,children:this.skillTreeStore.userSkills};var e=[];e=JSON.parse(JSON.stringify(t.children));function a(l){for(var s=l.length;s--;){if(l[s].type=="super"&&l[s].position!="end"){var o=[],n=[];for(let h=0;h<l[s].children.length;h++)l[s].children[h].type=="sub"?o.push(l[s].children[h]):n.push(l[s].children[h]);var i={skill_name:l[s].skill_name,type:"super",position:"end",children:o};l[s].children=[],l[s].children.push(i);for(let h=0;h<n.length;h++)l[s].children.push(n[h])}typeof l[s]<"u"&&l[s].children&&Array.isArray(l[s].children)&&l[s].children.length>0&&a(l[s].children)}}a(e);const d={skill_name:"My skills",children:e};await this.createSVGTree(d)},async createSVGTree(t){const d=13200.000000000002,l=24e3*.59,o=b().size([2*Math.PI,this.radius*50]).separation((i,h)=>(i.parent==h.parent?1:2)/i.depth)(P(t));let n=q("svg").attr("id","radialTree").attr("width",24e3).attr("height",24e3).attr("viewBox",[-d,-l,24e3,24e3]).attr("style","max-width: 100%; height: auto; font: 10px sans-serif;");n.append("g").attr("fill","none").attr("stroke-opacity",1).selectAll().data(o.links()).join("path").attr("d",I().angle(i=>i.x).radius(i=>i.y)).attr("stroke",function(i){return"#000"}).attr("stroke-width",function(i){return i.target.data.is_mastered==1?4:1.5}).style("stroke-dasharray",function(i){if(i.source.data.type=="super"&&i.target.data.position=="end"||i.target.data.type=="sub")return 5}),n.append("g").selectAll().data(o.descendants()).join("circle").attr("transform",i=>`rotate(${i.x*180/Math.PI-90}) translate(${i.y},0)`).attr("fill","#000").attr("r",2.5),n.append("g").attr("stroke-linejoin","round").attr("stroke-width",1).selectAll().data(o.descendants()).join("text").attr("transform",i=>`rotate(${i.x*180/Math.PI-90}) translate(${i.y},0) rotate(${i.x>=Math.PI?180:0})`).attr("dy","0.31em").attr("x",i=>i.x<Math.PI==!i.children?6:-6).attr("text-anchor",i=>i.x<Math.PI==!i.children?"start":"end").style("font-weight",function(i){return i.data.type=="super"?"700":"400"}).style("font-style",function(i){if(i.data.type=="sub")return"italic"}).style("paint-order",function(i){return"stroke"}).clone(!0).lower().style("stroke-width",function(i){return"1px"}).text(function(i){return i.data.position=="end"?"":i.data.skill_name}),document.querySelector("#SVGskilltree").append(n.node())},defaultPosition(){m(this.context.canvas).transition().duration(300).call(this.d3Zoom.transform,W.translate(0,0).scale(.08))}}},k=t=>(z("data-v-d1154f9e"),t=t(),D(),t),J={key:0,class:"loading-animation d-flex justify-content-center align-items-center py-4"},Y=k(()=>r("span",{class:"loader"},null,-1)),Z=[Y],K={id:"wrapper"},Q=k(()=>r("canvas",{id:"canvas",width:"1500",height:"1500"},null,-1)),tt=k(()=>r("canvas",{id:"hidden-canvas",width:"1500",height:"1500"},null,-1)),et=k(()=>r("div",{id:"SVGskilltree"},null,-1)),st=k(()=>r("div",{id:"sidepanel-backdrop"},null,-1));function it(t,e,a,d,l,s){const o=C("SkillPanel");return y(),_($,null,[l.isLoading==!0?(y(),_("div",J,Z)):N("",!0),E(r("div",K,[T(o,{skill:l.skill},null,8,["skill"]),Q,tt,et,st],512),[[A,l.isLoading==!1]])],64)}const lt=M(X,[["render",it],["__scopeId","data-v-d1154f9e"]]);const nt={setup(){},data(){return{}},components:{RadialTree:lt},methods:{ToggleInfobar(){document.getElementById("legend").style.display=="block"?document.getElementById("legend").style.display="none":document.getElementById("legend").style.display="block"}}},at={id:"legend",class:"collapsible-tree-legend container-fluid p-2"},ot={class:"mobile-legend"},rt={class:"legend row"},dt=F('<div class="col-8"><div class="col"><span class="grade-school"></span>Grade school </div><div class="col"><span class="middle-school"></span> Middle school </div><div class="col"><span class="high-school"></span> High school </div><div class="col"><span class="college"></span> College</div><div class="col"><span class="phd"></span> PHD</div></div>',1),ht={class:"col-4 d-flex flex-column align-items-end"},ct={class:"tablet-and-up-legend"},pt={class:"legend row"},ut=F('<div class="col"><span class="grade-school"></span>Grade school </div><div class="col"><span class="middle-school"></span> Middle school </div><div class="col"><span class="high-school"></span> High school </div><div class="col"><span class="college"></span> College</div><div class="col"><span class="phd"></span> PHD</div>',5),ft={class:"col d-flex justify-content-end"},gt={id:"thin-purple-banner"},vt=r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 192 512",height:"12",width:"12"},[r("path",{d:"M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z",fill:"black"})],-1),xt=[vt],kt=r("span",null,"Loading...",-1);function yt(t,e,a,d,l,s){const o=C("RadialTree");return y(),_($,null,[r("div",at,[r("div",ot,[r("div",rt,[dt,r("div",ht,[r("button",{id:"print-btn",class:"btn btn-info",onClick:e[0]||(e[0]=n=>t.$refs.childComponent.printPDF())}," Print "),r("button",{id:"reset-btn",class:"btn btn-primary",onClick:e[1]||(e[1]=n=>t.resetPos())}," Reset ")])])]),r("div",ct,[r("div",pt,[ut,r("div",ft,[r("button",{id:"print-btn",class:"btn btn-info me-3",onClick:e[2]||(e[2]=n=>t.$refs.childComponent.printPDF())}," Print ")])])])]),r("div",gt,[r("button",{id:"info-button",class:"sidebar-btn btn",onClick:e[3]||(e[3]=n=>s.ToggleInfobar())},xt)]),(y(),H(V,null,{default:w(()=>[T(o,{ref:"childComponent"},null,512)]),fallback:w(()=>[kt]),_:1}))],64)}const St=M(nt,[["render",yt]]);export{St as default};
