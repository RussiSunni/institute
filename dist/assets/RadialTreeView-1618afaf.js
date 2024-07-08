import{_ as R,i as B,u as N,r as j,o as v,c as S,a as u,b as A,w as E,v as $,d as M,F as T,p as z,e as O,f as D,g as w,S as F}from"./main-3d2aae05.js";import{S as U,z as V,s as m,t as P,h as b,a as q,b as I,c as G,i as W}from"./zoom-db45392c.js";const X={setup(){const t=B(),e=N();return{userDetailsStore:t,skillTreeStore:e}},data(){return{width:6e3,height:null,radius:0,radiusMultiplier:96,skill:{id:null,children:[],isMastered:null,isUnlocked:null,container:null,name:null,description:null,tagIDs:[],sprite:null,type:null,subskills:[]},tree:{},root:{},context:{},hiddenCanvasContext:{},scaleMultiplier:.8,startDragOffset:{x:0,y:0},mouseDown:!1,nodes:[],nextCol:1,colToNode:{},isSkillInfoPanelShown:!1,scale:1,panX:0,panY:0,d3Zoom:null,data:{},isLoading:!0}},components:{SkillPanel:U},async mounted(){this.skillTreeStore.userSkillsSubSkillsSeparate.length==0&&await this.skillTreeStore.getUserSkillsSubSkillsSeparate(),this.width=window.innerWidth,this.height=window.innerHeight,this.radius=Math.min(this.width,this.height)/2-30,this.skill={name:"SKILLS",sprite:null,children:this.skillTreeStore.userSkillsSubSkillsSeparate},this.getAlgorithm(),this.d3Zoom=V().scaleExtent([.05,8]).on("zoom",({transform:t})=>this.zoomed(t)),m(this.context.canvas).call(this.d3Zoom),this.defaultPosition(),canvas.addEventListener("click",async t=>{this.nodes;var e=t.layerX,n=t.layerY,h=this.hiddenCanvasContext,a=h.getImageData(e,n,1,1).data,i="rgb("+a[0]+","+a[1]+","+a[2]+")",o=this.colToNode[i];if(o){o.renderCol=o.__pickColor,this.skill.name=o.data.skill_name,this.skill.id=o.data.id,this.skill.type=o.data.type,this.skill.subskills=o.data.subskills;const s=await(await fetch("/skills/mastery-requirements/"+this.skill.id)).json();this.skill.masteryRequirements=s,this.showInfoPanel()}}),this.isLoading=!1},methods:{getAlgorithm(){var t=[];t=JSON.parse(JSON.stringify(this.skill.children)),this.data={skill_name:"",children:t};const e=P().size([2*Math.PI,this.radius*this.radiusMultiplier]).separation((a,i)=>(a.parent==i.parent?1:2)/a.depth);this.root=e(b(this.data).sort((a,i)=>q(a.data.name,i.data.name)));var n=document.getElementById("canvas");n.width=this.width,n.height=this.height,this.context=n.getContext("2d"),this.context.fillStyle="#1e293b",this.context.fillRect(0,0,this.width,this.height);let h=document.getElementById("hidden-canvas");this.hiddenCanvasContext=h.getContext("2d",{willReadFrequently:!0}),h.style.display="none",this.context.translate(this.width/2,this.height/2),this.hiddenCanvasContext.translate(this.width/2,this.height/2),this.drawTree()},drawTree(){this.nodes=this.root.descendants();const t=this.root.links();this.context.beginPath();for(const e of t)this.drawLink(e);this.context.beginPath();for(const e of this.nodes)e.renderCol?this.context.fillStyle=e.renderCol:this.context.fillStyle="RGBA(105, 105, 105, 0.8)",e.__pickColor===void 0&&(e.__pickColor=this.genColor(),this.colToNode[e.__pickColor]=e),this.hiddenCanvasContext.fillStyle=e.__pickColor,this.drawNode(e);this.context.beginPath(),this.context.moveTo(0,0),this.context.arc(0,0,20,0,2*Math.PI),this.context.fillStyle="lightgreen",this.context.fill(),this.context.fillStyle="LawnGreen",this.context.strokeStyle="black",this.context.lineWidth=5,this.context.beginPath(),this.context.arc(0,0,50,0,2*Math.PI),this.context.fill(),this.context.stroke(),this.context.closePath(),this.context.fillStyle="cyan",this.context.beginPath(),this.context.arc(-12.5,-16.5,7.5,0,2*Math.PI),this.context.fill(),this.context.stroke(),this.context.closePath(),this.context.beginPath(),this.context.arc(12.5,-16.5,7.5,0,2*Math.PI),this.context.fill(),this.context.stroke(),this.context.closePath(),this.context.fillStyle="LawnGreen",this.context.strokeStyle="black",this.context.lineWidth=5,this.context.beginPath(),this.context.arc(0,0,37.5,0,-1*Math.PI),this.context.stroke(),this.context.closePath()},drawNode(t){let e=this.context,n=this.hiddenCanvasContext,h=Math.cos(t.x)*t.y,a=Math.sin(t.x)*t.y,i=o(0,0,h,a,90);function o(d,c,g,k,x){var f=Math.PI/180*x,p=Math.cos(f),_=Math.sin(f),C=p*(g-d)+_*(k-c)+d,L=p*(k-c)-_*(g-d)+c;return[C,L]}let l;t.data.type=="domain"?l="orange":t.data.level=="grade_school"?l="#36c1af":t.data.level=="middle_school"?l="#6eb3f5":t.data.level=="high_school"?l="#3983dd":t.data.level=="college"?l="#baa9e1":t.data.level=="phd"&&(l="#9c7eec");let s;t.depth==1?s=20:s=10,t.data.type!=="domain"&&(e.beginPath(),e.moveTo(i[0],i[1]),e.arc(i[0],i[1],s,0,2*Math.PI),e.fillStyle=l,e.fill());function r(d,c,g,k){var x=k-c,f=g-d,p=Math.atan2(x,f);return p}var r=r(0,0,i[0],i[1]);if(this.scale>.6){e.save(),e.translate(i[0],i[1]),e.rotate(r);let d=0,c=0;2*Math.PI/3>Math.abs(r)>=Math.PI/3?(c=i[0]>0?15:-15,d=0):(d=i[0]>0?15:-15,c=0),i[0]<0?(e.textAlign=t.data.level!=="domain"?"end":"start",e.rotate(Math.PI)):e.textAlign=t.data.level!=="domain"?"start":"end",e.strokeStyle="#1e293b",e.lineWidth=4,e.strokeText(t.data.skill_name,d,c),e.fillStyle=t.data.level!=="domain"?"#FFF":"#afb9c9",e.fillText(t.data.skill_name,d,c),e.restore()}if(n.beginPath(),n.moveTo(i[0],i[1]),n.arc(i[0],i[1],s,0,2*Math.PI),n.fill(),t.data.type=="super")for(let d=0;d<t.data.subskills.length;d++){let x=360/t.data.subskills.length*d*Math.PI/180,f=20*Math.cos(x),p=20*Math.sin(x);e.beginPath(),e.moveTo(i[0],i[1]),e.arc(i[0]+f,i[1]+p,5,0,2*Math.PI),e.fillStyle=l,e.fill(),n.beginPath(),n.moveTo(i[0],i[1]),n.arc(i[0]+f,i[1]+p,5,0,2*Math.PI),n.fill()}},drawLink(t){const e=I().angle(h=>h.x).radius(h=>h.y).context(this.context);let n="#71717a";t.target.data.is_mastered==1?(this.context.lineWidth=4,n="#ffffff"):this.context.lineWidth=1,this.context.beginPath(),e(t),this.context.strokeStyle=n,this.context.stroke()},genColor(){var t=[];this.nextCol<16777215&&(t.push(this.nextCol&255),t.push((this.nextCol&65280)>>8),t.push((this.nextCol&16711680)>>16),this.nextCol+=100);var e="rgb("+t.join(",")+")";return e},zoomed(t){this.context.save(),this.hiddenCanvasContext.save(),this.context.fillStyle="#1e293b",this.context.fillRect(this.width/2*-1,this.height/2*-1,this.width,this.height),this.hiddenCanvasContext.clearRect(this.width/2*-1,this.height/2*-1,this.width,this.height),this.context.translate(t.x,t.y),this.context.scale(t.k,t.k),this.hiddenCanvasContext.translate(t.x,t.y),this.hiddenCanvasContext.scale(t.k,t.k),this.drawTree(),this.context.fill(),this.context.restore(),this.hiddenCanvasContext.fill(),this.hiddenCanvasContext.restore()},showInfoPanel(){this.isSkillInfoPanelShown||(this.isSkillInfoPanelShown=!0,screen.width>800?document.getElementById("skillInfoPanel").style.width="474px":document.getElementById("skillInfoPanel").style.height="474px")},hideInfoPanel(){this.isSkillInfoPanelShown&&(screen.width>800?document.getElementById("skillInfoPanel").style.width="0px":document.getElementById("skillInfoPanel").style.height="0px",document.getElementById("sidepanel-backdrop").style.display="none",this.isSkillInfoPanelShown=!1)},async printPDF(){await this.getPrintAlgorithm();var t=document.getElementById("radialTree"),e=m(t),n=e.node(),h=new XMLSerializer,a=h.serializeToString(n),i={svg:a,treeType:"radial"},o=JSON.stringify(i),l=new XMLHttpRequest;l.responseType="arraybuffer",l.open("POST","/skilltree/print-pdf",!0),l.setRequestHeader("Content-type","application/json;charset=UTF-8"),l.setRequestHeader("Accept","application/json, text/plain, */*"),l.send(o),l.onload=function(){if(this.readyState==4&&this.status==200){let r=new Blob([l.response],{type:"application/pdf"});const d=window.URL.createObjectURL(r);var s=document.createElement("a");document.body.appendChild(s),s.style="display: none",s.href=d,s.download="My-Skill-Tree.pdf",s.click(),window.URL.revokeObjectURL(d)}}},async getPrintAlgorithm(){await this.skillTreeStore.getUserSkills();const t={name:"SKILLS",sprite:null,children:this.skillTreeStore.userSkills};var e=[];e=JSON.parse(JSON.stringify(t.children));function n(a){for(var i=a.length;i--;){if(a[i].type=="super"&&a[i].position!="end"){var o=[],l=[];for(let r=0;r<a[i].children.length;r++)a[i].children[r].type=="sub"?o.push(a[i].children[r]):l.push(a[i].children[r]);var s={skill_name:a[i].skill_name,type:"super",position:"end",children:o};a[i].children=[],a[i].children.push(s);for(let r=0;r<l.length;r++)a[i].children.push(l[r])}typeof a[i]<"u"&&a[i].children&&Array.isArray(a[i].children)&&a[i].children.length>0&&n(a[i].children)}}n(e);const h={skill_name:"My skills",children:e};await this.createSVGTree(h)},async createSVGTree(t){const h=13200.000000000002,a=24e3*.59,o=P().size([2*Math.PI,this.radius*50]).separation((s,r)=>(s.parent==r.parent?1:2)/s.depth)(b(t));let l=G("svg").attr("id","radialTree").attr("width",24e3).attr("height",24e3).attr("viewBox",[-h,-a,24e3,24e3]).attr("style","max-width: 100%; height: auto; font: 10px sans-serif;");l.append("g").attr("fill","none").attr("stroke-opacity",1).selectAll().data(o.links()).join("path").attr("d",I().angle(s=>s.x).radius(s=>s.y)).attr("stroke",function(s){return"#000"}).attr("stroke-width",function(s){return s.target.data.is_mastered==1?4:1.5}).style("stroke-dasharray",function(s){if(s.source.data.type=="super"&&s.target.data.position=="end"||s.target.data.type=="sub")return 5}),l.append("g").selectAll().data(o.descendants()).join("circle").attr("transform",s=>`rotate(${s.x*180/Math.PI-90}) translate(${s.y},0)`).attr("fill","#000").attr("r",2.5),l.append("g").attr("stroke-linejoin","round").attr("stroke-width",1).selectAll().data(o.descendants()).join("text").attr("transform",s=>`rotate(${s.x*180/Math.PI-90}) translate(${s.y},0) rotate(${s.x>=Math.PI?180:0})`).attr("dy","0.31em").attr("x",s=>s.x<Math.PI==!s.children?6:-6).attr("text-anchor",s=>s.x<Math.PI==!s.children?"start":"end").style("font-weight",function(s){return s.data.type=="super"?"700":"400"}).style("font-style",function(s){if(s.data.type=="sub")return"italic"}).style("paint-order",function(s){return"stroke"}).clone(!0).lower().style("stroke-width",function(s){return"1px"}).text(function(s){return s.data.position=="end"?"":s.data.skill_name}),document.querySelector("#SVGskilltree").append(l.node())},defaultPosition(){m(this.context.canvas).transition().duration(300).call(this.d3Zoom.transform,W.translate(0,0).scale(.08))}}},y=t=>(z("data-v-d6bf4f66"),t=t(),O(),t),J={key:0,class:"loading-animation d-flex justify-content-center align-items-center py-4"},H=y(()=>u("span",{class:"loader"},null,-1)),Y=[H],Z={id:"wrapper"},K=y(()=>u("canvas",{id:"canvas",width:"1500",height:"1500"},null,-1)),Q=y(()=>u("canvas",{id:"hidden-canvas",width:"1500",height:"1500"},null,-1)),tt=y(()=>u("div",{id:"SVGskilltree"},null,-1)),et=y(()=>u("div",{id:"sidepanel-backdrop"},null,-1));function it(t,e,n,h,a,i){const o=j("SkillPanel");return v(),S(T,null,[u("button",{id:"print-btn",class:"btn btn-info",onClick:e[0]||(e[0]=l=>i.printPDF())}," Print "),a.isLoading==!0?(v(),S("div",J,Y)):A("",!0),E(u("div",Z,[M(o,{skill:a.skill},null,8,["skill"]),K,Q,tt,et],512),[[$,a.isLoading==!1]])],64)}const st=R(X,[["render",it],["__scopeId","data-v-d6bf4f66"]]);const at=u("div",{id:"thin-purple-banner"},null,-1),lt=u("span",null,"Loading...",-1),rt={__name:"RadialTreeView",setup(t){return(e,n)=>(v(),S(T,null,[at,(v(),D(F,null,{default:w(()=>[M(st)]),fallback:w(()=>[lt]),_:1}))],64))}};export{rt as default};
