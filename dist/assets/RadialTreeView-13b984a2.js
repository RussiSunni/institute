import{_ as C,l as j,u as E,r as T,o as y,c as m,a as w,w as F,v as N,b as d,d as $,n as D,F as R,p as z,e as G,h as O,i as P,S as V,j as L}from"./main-1bb9fe80.js";import{S as U,z as q,s as _,t as b,h as I,a as H,b as M,c as W,i as X}from"./zoom-ca4e2a2a.js";const J={setup(){const t=j(),e=E();return{userDetailsStore:t,skillTreeStore:e}},data(){return{width:6e3,height:null,radius:0,radiusMultiplier:96,skill:{id:null,children:[],isMastered:null,isUnlocked:null,container:null,name:null,description:null,tagIDs:[],sprite:null,type:null,subskills:[]},tree:{},root:{},context:{},hiddenCanvasContext:{},scaleMultiplier:.8,startDragOffset:{x:0,y:0},mouseDown:!1,nodes:[],nextCol:1,colToNode:{},isSkillInfoPanelShown:!1,scale:1,panX:0,panY:0,d3Zoom:null,data:{},isLoading:!0,xPos:0,yPos:0,showAnimation:!1}},components:{SkillPanel:U},async mounted(){this.skillTreeStore.userSkillsSubSkillsSeparate.length==0&&await this.skillTreeStore.getUserSkillsSubSkillsSeparate(),this.width=window.innerWidth,this.height=window.innerHeight,this.radius=Math.min(this.width,this.height)/2-30,this.skill={name:"SKILLS",sprite:null,children:this.skillTreeStore.userSkillsSubSkillsSeparate},this.getAlgorithm(),this.d3Zoom=q().scaleExtent([.05,8]).on("zoom",({transform:t})=>this.zoomed(t)),_(this.context.canvas).call(this.d3Zoom),this.defaultPosition(),canvas.addEventListener("click",async t=>{this.nodes;var e=t.layerX,a=t.layerY;this.xPos=e,this.yPos=a,this.showAnimation=!0,setTimeout(()=>{this.showAnimation=!1},500);var r=this.hiddenCanvasContext,l=r.getImageData(e,a,1,1).data,s="rgb("+l[0]+","+l[1]+","+l[2]+")",o=this.colToNode[s];if(o){o.renderCol=o.__pickColor,this.skill.name=o.data.skill_name,this.skill.id=o.data.id,this.skill.type=o.data.type,this.skill.subskills=o.data.subskills;const i=await(await fetch("/skills/mastery-requirements/"+this.skill.id)).json();this.skill.masteryRequirements=i,this.showInfoPanel()}}),this.isLoading=!1},methods:{getAlgorithm(){var t=[];t=JSON.parse(JSON.stringify(this.skill.children)),this.data={skill_name:"",children:t};const e=b().size([2*Math.PI,this.radius*this.radiusMultiplier]).separation((l,s)=>(l.parent==s.parent?1:2)/l.depth);this.root=e(I(this.data).sort((l,s)=>H(l.data.name,s.data.name)));var a=document.getElementById("canvas");a.width=this.width,a.height=this.height,this.context=a.getContext("2d"),this.context.fillStyle="#1e293b",this.context.fillRect(0,0,this.width,this.height);let r=document.getElementById("hidden-canvas");this.hiddenCanvasContext=r.getContext("2d",{willReadFrequently:!0}),r.style.display="none",this.context.translate(this.width/2,this.height/2),this.hiddenCanvasContext.translate(this.width/2,this.height/2),this.drawTree()},drawTree(){this.nodes=this.root.descendants();const t=this.root.links();this.context.beginPath();for(const e of t)this.drawLink(e);this.context.beginPath();for(const e of this.nodes)e.renderCol?this.context.fillStyle=e.renderCol:this.context.fillStyle="RGBA(105, 105, 105, 0.8)",e.__pickColor===void 0&&(e.__pickColor=this.genColor(),this.colToNode[e.__pickColor]=e),this.hiddenCanvasContext.fillStyle=e.__pickColor,this.drawNode(e);this.context.beginPath(),this.context.moveTo(0,0),this.context.arc(0,0,20,0,2*Math.PI),this.context.fillStyle="lightgreen",this.context.fill(),this.context.fillStyle="LawnGreen",this.context.strokeStyle="black",this.context.lineWidth=5,this.context.beginPath(),this.context.arc(0,0,50,0,2*Math.PI),this.context.fill(),this.context.stroke(),this.context.closePath(),this.context.fillStyle="cyan",this.context.beginPath(),this.context.arc(-12.5,-16.5,7.5,0,2*Math.PI),this.context.fill(),this.context.stroke(),this.context.closePath(),this.context.beginPath(),this.context.arc(12.5,-16.5,7.5,0,2*Math.PI),this.context.fill(),this.context.stroke(),this.context.closePath(),this.context.fillStyle="LawnGreen",this.context.strokeStyle="black",this.context.lineWidth=5,this.context.beginPath(),this.context.arc(0,0,37.5,0,-1*Math.PI),this.context.stroke(),this.context.closePath()},drawNode(t){let e=this.context,a=this.hiddenCanvasContext,r=Math.cos(t.x)*t.y,l=Math.sin(t.x)*t.y,s=o(0,0,r,l,90);function o(c,p,x,v,g){var u=Math.PI/180*g,f=Math.cos(u),S=Math.sin(u),A=f*(x-c)+S*(v-p)+c,B=f*(v-p)-S*(x-c)+p;return[A,B]}let n;t.data.type=="domain"?n="black":t.data.level=="grade_school"?n="#40E0D0":t.data.level=="middle_school"?n="#33A133":t.data.level=="high_school"?n="#FFD700":t.data.level=="college"?n="#FFA500":t.data.level=="phd"&&(n="#FF0000");let i;t.depth==1?i=20:i=10,t.data.type!=="domain"&&(e.beginPath(),e.moveTo(s[0],s[1]),e.arc(s[0],s[1],i,0,2*Math.PI),e.fillStyle=n,e.fill());function h(c,p,x,v){var g=v-p,u=x-c,f=Math.atan2(g,u);return f}var h=h(0,0,s[0],s[1]);if(this.scale>.6){e.save(),e.translate(s[0],s[1]),e.rotate(h);let c=0,p=0;2*Math.PI/3>Math.abs(h)>=Math.PI/3?(p=s[0]>0?15:-15,c=0):(c=s[0]>0?15:-15,p=0),s[0]<0?(e.textAlign=t.data.level!=="domain"?"end":"start",e.rotate(Math.PI)):e.textAlign=t.data.level!=="domain"?"start":"end",e.strokeStyle="#1e293b",e.lineWidth=4,e.strokeText(t.data.skill_name,c,p),e.fillStyle=t.data.level!=="domain"?"#FFF":"#afb9c9",e.fillText(t.data.skill_name,c,p),e.restore()}if(a.beginPath(),a.moveTo(s[0],s[1]),a.arc(s[0],s[1],i,0,2*Math.PI),a.fill(),t.data.type=="super")for(let c=0;c<t.data.subskills.length;c++){let g=360/t.data.subskills.length*c*Math.PI/180,u=20*Math.cos(g),f=20*Math.sin(g);e.beginPath(),e.moveTo(s[0],s[1]),e.arc(s[0]+u,s[1]+f,5,0,2*Math.PI),e.fillStyle=n,e.fill(),a.beginPath(),a.moveTo(s[0],s[1]),a.arc(s[0]+u,s[1]+f,5,0,2*Math.PI),a.fill()}},drawLink(t){const e=M().angle(r=>r.x).radius(r=>r.y).context(this.context);let a="#71717a";t.target.data.is_mastered==1?(this.context.lineWidth=4,a="#ffffff"):this.context.lineWidth=1,this.context.beginPath(),e(t),this.context.strokeStyle=a,this.context.stroke()},genColor(){var t=[];this.nextCol<16777215&&(t.push(this.nextCol&255),t.push((this.nextCol&65280)>>8),t.push((this.nextCol&16711680)>>16),this.nextCol+=100);var e="rgb("+t.join(",")+")";return e},zoomed(t){this.context.save(),this.hiddenCanvasContext.save(),this.context.fillStyle="#1e293b",this.context.fillRect(this.width/2*-1,this.height/2*-1,this.width,this.height),this.hiddenCanvasContext.clearRect(this.width/2*-1,this.height/2*-1,this.width,this.height),this.context.translate(t.x,t.y),this.context.scale(t.k,t.k),this.hiddenCanvasContext.translate(t.x,t.y),this.hiddenCanvasContext.scale(t.k,t.k),this.drawTree(),this.context.fill(),this.context.restore(),this.hiddenCanvasContext.fill(),this.hiddenCanvasContext.restore()},showInfoPanel(){this.isSkillInfoPanelShown||(this.isSkillInfoPanelShown=!0,screen.width>800?document.getElementById("skillInfoPanel").style.width="474px":document.getElementById("skillInfoPanel").style.height="474px")},hideInfoPanel(){this.isSkillInfoPanelShown&&(screen.width>800?document.getElementById("skillInfoPanel").style.width="0px":document.getElementById("skillInfoPanel").style.height="0px",document.getElementById("sidepanel-backdrop").style.display="none",this.isSkillInfoPanelShown=!1)},async printPDF(){await this.getPrintAlgorithm();var t=document.getElementById("radialTree"),e=_(t),a=e.node(),r=new XMLSerializer,l=r.serializeToString(a),s={svg:l,treeType:"radial"},o=JSON.stringify(s),n=new XMLHttpRequest;n.responseType="arraybuffer",n.open("POST","/skilltree/print-pdf",!0),n.setRequestHeader("Content-type","application/json;charset=UTF-8"),n.setRequestHeader("Accept","application/json, text/plain, */*"),n.send(o),n.onload=function(){if(this.readyState==4&&this.status==200){let h=new Blob([n.response],{type:"application/pdf"});const c=window.URL.createObjectURL(h);var i=document.createElement("a");document.body.appendChild(i),i.style="display: none",i.href=c,i.download="My-Skill-Tree.pdf",i.click(),window.URL.revokeObjectURL(c)}}},async getPrintAlgorithm(){await this.skillTreeStore.getUserSkills();const t={name:"SKILLS",sprite:null,children:this.skillTreeStore.userSkills};var e=[];e=JSON.parse(JSON.stringify(t.children));function a(l){for(var s=l.length;s--;){if(l[s].type=="super"&&l[s].position!="end"){var o=[],n=[];for(let h=0;h<l[s].children.length;h++)l[s].children[h].type=="sub"?o.push(l[s].children[h]):n.push(l[s].children[h]);var i={skill_name:l[s].skill_name,type:"super",position:"end",children:o};l[s].children=[],l[s].children.push(i);for(let h=0;h<n.length;h++)l[s].children.push(n[h])}typeof l[s]<"u"&&l[s].children&&Array.isArray(l[s].children)&&l[s].children.length>0&&a(l[s].children)}}a(e);const r={skill_name:"My skills",children:e};await this.createSVGTree(r)},async createSVGTree(t){const r=13200.000000000002,l=24e3*.59,o=b().size([2*Math.PI,this.radius*50]).separation((i,h)=>(i.parent==h.parent?1:2)/i.depth)(I(t));let n=W("svg").attr("id","radialTree").attr("width",24e3).attr("height",24e3).attr("viewBox",[-r,-l,24e3,24e3]).attr("style","max-width: 100%; height: auto; font: 10px sans-serif;");n.append("g").attr("fill","none").attr("stroke-opacity",1).selectAll().data(o.links()).join("path").attr("d",M().angle(i=>i.x).radius(i=>i.y)).attr("stroke",function(i){return"#000"}).attr("stroke-width",function(i){return i.target.data.is_mastered==1?4:1.5}).style("stroke-dasharray",function(i){if(i.source.data.type=="super"&&i.target.data.position=="end"||i.target.data.type=="sub")return 5}),n.append("g").selectAll().data(o.descendants()).join("circle").attr("transform",i=>`rotate(${i.x*180/Math.PI-90}) translate(${i.y},0)`).attr("fill","#000").attr("r",2.5),n.append("g").attr("stroke-linejoin","round").attr("stroke-width",1).selectAll().data(o.descendants()).join("text").attr("transform",i=>`rotate(${i.x*180/Math.PI-90}) translate(${i.y},0) rotate(${i.x>=Math.PI?180:0})`).attr("dy","0.31em").attr("x",i=>i.x<Math.PI==!i.children?6:-6).attr("text-anchor",i=>i.x<Math.PI==!i.children?"start":"end").style("font-weight",function(i){return i.data.type=="super"?"700":"400"}).style("font-style",function(i){if(i.data.type=="sub")return"italic"}).style("paint-order",function(i){return"stroke"}).clone(!0).lower().style("stroke-width",function(i){return"1px"}).text(function(i){return i.data.position=="end"?"":i.data.skill_name}),document.querySelector("#SVGskilltree").append(n.node())},defaultPosition(){_(this.context.canvas).transition().duration(300).call(this.d3Zoom.transform,X.translate(0,0).scale(.08))}}},k=t=>(z("data-v-75005843"),t=t(),G(),t),Y={key:0,class:"loading-animation d-flex justify-content-center align-items-center py-4"},Z=k(()=>d("span",{class:"loader"},null,-1)),K=[Z],Q={id:"wrapper"},tt=k(()=>d("canvas",{id:"canvas",width:"1500",height:"1500"},null,-1)),et=k(()=>d("canvas",{id:"hidden-canvas",width:"1500",height:"1500"},null,-1)),st=k(()=>d("div",{id:"SVGskilltree"},null,-1)),it=k(()=>d("div",{id:"sidepanel-backdrop"},null,-1));function lt(t,e,a,r,l,s){const o=T("SkillPanel");return y(),m(R,null,[l.isLoading==!0?(y(),m("div",Y,K)):w("",!0),F(d("div",Q,[$(o,{skill:l.skill},null,8,["skill"]),l.showAnimation?(y(),m("div",{key:0,style:D({top:`${l.yPos}px`,left:`${l.xPos}px`}),class:"click-animation"},null,4)):w("",!0),tt,et,st,it],512),[[N,l.isLoading==!1]])],64)}const nt=C(J,[["render",lt],["__scopeId","data-v-75005843"]]);const at={setup(){},data(){return{}},components:{RadialTree:nt},methods:{ToggleInfobar(){document.getElementById("legend").style.display=="none"?document.getElementById("legend").style.display="block":document.getElementById("legend").style.display="none"}}},ot={id:"legend",class:"collapsible-tree-legend container-fluid p-2"},rt={class:"mobile-legend"},ht={class:"legend row"},dt=L('<div class="col-8"><div class="col"><span class="grade-school"></span>Grade school </div><div class="col"><span class="middle-school"></span> Middle school </div><div class="col"><span class="high-school"></span> High school </div><div class="col"><span class="college"></span> College</div><div class="col"><span class="phd"></span> PHD</div></div>',1),ct={class:"col-4 d-flex flex-column align-items-end"},pt={class:"tablet-and-up-legend"},ut={class:"legend row"},ft=L('<div class="col"><span class="grade-school"></span>Grade school </div><div class="col"><span class="middle-school"></span> Middle school </div><div class="col"><span class="high-school"></span> High school </div><div class="col"><span class="college"></span> College</div><div class="col"><span class="phd"></span> PHD</div>',5),gt={class:"col d-flex justify-content-end"},xt=d("div",{id:"thin-purple-banner"},null,-1),vt=d("span",null,"Loading...",-1);function yt(t,e,a,r,l,s){const o=T("RadialTree");return y(),m(R,null,[d("div",ot,[d("div",rt,[d("div",ht,[dt,d("div",ct,[d("button",{id:"print-btn",class:"btn btn-info",onClick:e[0]||(e[0]=n=>t.$refs.childComponent.printPDF())}," Print "),d("button",{id:"reset-btn",class:"btn btn-primary",onClick:e[1]||(e[1]=n=>t.resetPos())}," Reset ")])])]),d("div",pt,[d("div",ut,[ft,d("div",gt,[d("button",{id:"print-btn",class:"btn btn-info me-3",onClick:e[2]||(e[2]=n=>t.$refs.childComponent.printPDF())}," Print ")])])])]),xt,(y(),O(V,null,{default:P(()=>[$(o,{ref:"childComponent"},null,512)]),fallback:P(()=>[vt]),_:1}))],64)}const _t=C(at,[["render",yt]]);export{_t as default};
