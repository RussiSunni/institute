import{_ as B,g as L,h as N,i as $,o as v,c as I,d,a as M,F as T,p as j,f as A,j as E,w as _,S as z}from"./main-00fa35ba.js";import{S as O,s as m,z as U,t as w,h as P,a as D,b,c as F}from"./zoom-2a7d04c5.js";const G={setup(){const t=L(),e=N();return{userDetailsStore:t,skillTreeStore:e}},data(){return{width:6e3,height:null,radius:0,radiusMultiplier:96,skill:{id:null,children:[],isMastered:null,isUnlocked:null,container:null,name:null,description:null,tagIDs:[],sprite:null,type:null,subskills:[]},tree:{},root:{},context:{},hiddenCanvasContext:{},scaleMultiplier:.8,startDragOffset:{x:0,y:0},mouseDown:!1,nodes:[],nextCol:1,colToNode:{},isSkillInfoPanelShown:!1,scale:1,panX:0,panY:0,data:{}}},components:{SkillPanel:O},async mounted(){this.skillTreeStore.userSkillsSubSkillsSeparate.length==0&&await this.skillTreeStore.getUserSkillsSubSkillsSeparate(),this.width=window.innerWidth,this.height=window.innerHeight,this.radius=Math.min(this.width,this.height)/2-30,this.skill={name:"SKILLS",sprite:null,children:this.skillTreeStore.userSkillsSubSkillsSeparate},this.getAlgorithm(),m(this.context.canvas).call(U().scaleExtent([.05,8]).on("zoom",({transform:t})=>this.zoomed(t))),canvas.addEventListener("click",t=>{this.nodes;var e=t.layerX,a=t.layerY,r=this.hiddenCanvasContext,l=r.getImageData(e,a,1,1).data,i="rgb("+l[0]+","+l[1]+","+l[2]+")",o=this.colToNode[i];o&&(o.renderCol=o.__pickColor,this.skill.name=o.data.skill_name,this.skill.id=o.data.id,this.skill.type=o.data.type,this.skill.masteryRequirements=o.data.mastery_requirements,this.skill.subskills=o.data.subskills,this.showInfoPanel())})},methods:{getAlgorithm(){var t=[];t=JSON.parse(JSON.stringify(this.skill.children)),this.data={skill_name:"",children:t};const e=w().size([2*Math.PI,this.radius*this.radiusMultiplier]).separation((l,i)=>(l.parent==i.parent?1:2)/l.depth);this.root=e(P(this.data).sort((l,i)=>D(l.data.name,i.data.name)));var a=document.getElementById("canvas");a.width=this.width,a.height=this.height,this.context=a.getContext("2d"),this.context.fillStyle="#1e293b",this.context.fillRect(0,0,this.width,this.height);let r=document.getElementById("hidden-canvas");this.hiddenCanvasContext=r.getContext("2d"),r.style.display="none",this.context.translate(this.width/2,this.height/2),this.hiddenCanvasContext.translate(this.width/2,this.height/2),this.drawTree()},drawTree(){this.nodes=this.root.descendants();const t=this.root.links();this.context.beginPath();for(const e of t)this.drawLink(e);this.context.beginPath();for(const e of this.nodes)e.renderCol?this.context.fillStyle=e.renderCol:this.context.fillStyle="RGBA(105, 105, 105, 0.8)",e.__pickColor===void 0&&(e.__pickColor=this.genColor(),this.colToNode[e.__pickColor]=e),this.hiddenCanvasContext.fillStyle=e.__pickColor,this.drawNode(e);this.context.beginPath(),this.context.moveTo(0,0),this.context.arc(0,0,20,0,2*Math.PI),this.context.fillStyle="lightgreen",this.context.fill(),this.context.fillStyle="LawnGreen",this.context.strokeStyle="black",this.context.lineWidth=5,this.context.beginPath(),this.context.arc(0,0,50,0,2*Math.PI),this.context.fill(),this.context.stroke(),this.context.closePath(),this.context.fillStyle="cyan",this.context.beginPath(),this.context.arc(-12.5,-16.5,7.5,0,2*Math.PI),this.context.fill(),this.context.stroke(),this.context.closePath(),this.context.beginPath(),this.context.arc(12.5,-16.5,7.5,0,2*Math.PI),this.context.fill(),this.context.stroke(),this.context.closePath(),this.context.fillStyle="LawnGreen",this.context.strokeStyle="black",this.context.lineWidth=5,this.context.beginPath(),this.context.arc(0,0,37.5,0,-1*Math.PI),this.context.stroke(),this.context.closePath()},drawNode(t){let e=this.context,a=this.hiddenCanvasContext,r=Math.cos(t.x)*t.y,l=Math.sin(t.x)*t.y,i=o(0,0,r,l,90);function o(c,p,k,g,x){var u=Math.PI/180*x,f=Math.cos(u),S=Math.sin(u),C=f*(k-c)+S*(g-p)+c,R=f*(g-p)-S*(k-c)+p;return[C,R]}let n;t.data.type=="domain"?n="orange":t.data.level=="grade_school"?n="#36c1af":t.data.level=="middle_school"?n="#6eb3f5":t.data.level=="high_school"?n="#3983dd":t.data.level=="college"?n="#baa9e1":t.data.level=="phd"&&(n="#9c7eec");let s;t.depth==1?s=20:s=10,e.beginPath(),e.moveTo(i[0],i[1]),e.arc(i[0],i[1],s,0,2*Math.PI),e.fillStyle=n,e.fill();function h(c,p,k,g){var x=g-p,u=k-c,f=Math.atan2(x,u);return f}var h=h(0,0,i[0],i[1]);if(this.scale>.6&&(e.save(),e.translate(i[0],i[1]),e.rotate(h),i[0]<0?(e.textAlign="end",e.rotate(Math.PI)):e.textAlign="start",e.strokeStyle="#1e293b",e.lineWidth=4,e.strokeText(t.data.skill_name,0,0),e.fillStyle="#FFF",e.fillText(t.data.skill_name,0,0),e.restore()),a.beginPath(),a.moveTo(i[0],i[1]),a.arc(i[0],i[1],s,0,2*Math.PI),a.fill(),t.data.type=="super")for(let c=0;c<t.data.subskills.length;c++){let x=360/t.data.subskills.length*c*Math.PI/180,u=20*Math.cos(x),f=20*Math.sin(x);e.beginPath(),e.moveTo(i[0],i[1]),e.arc(i[0]+u,i[1]+f,5,0,2*Math.PI),e.fillStyle=n,e.fill(),a.beginPath(),a.moveTo(i[0],i[1]),a.arc(i[0]+u,i[1]+f,5,0,2*Math.PI),a.fill()}},drawLink(t){const e=b().angle(r=>r.x).radius(r=>r.y).context(this.context);let a="#71717a";t.target.data.is_mastered==1?(this.context.lineWidth=4,a="#ffffff"):this.context.lineWidth=1,this.context.beginPath(),e(t),this.context.strokeStyle=a,this.context.stroke()},genColor(){var t=[];this.nextCol<16777215&&(t.push(this.nextCol&255),t.push((this.nextCol&65280)>>8),t.push((this.nextCol&16711680)>>16),this.nextCol+=100);var e="rgb("+t.join(",")+")";return e},zoomed(t){this.context.save(),this.hiddenCanvasContext.save(),this.context.fillStyle="#1e293b",this.context.fillRect(this.width/2*-1,this.height/2*-1,this.width,this.height),this.hiddenCanvasContext.clearRect(this.width/2*-1,this.height/2*-1,this.width,this.height),this.context.translate(t.x,t.y),this.context.scale(t.k,t.k),this.hiddenCanvasContext.translate(t.x,t.y),this.hiddenCanvasContext.scale(t.k,t.k),this.drawTree(),this.context.fill(),this.context.restore(),this.hiddenCanvasContext.fill(),this.hiddenCanvasContext.restore()},showInfoPanel(){this.isSkillInfoPanelShown||(this.isSkillInfoPanelShown=!0,screen.width>800?document.getElementById("skillInfoPanel").style.width="474px":document.getElementById("skillInfoPanel").style.height="474px")},hideInfoPanel(){this.isSkillInfoPanelShown&&(screen.width>800?document.getElementById("skillInfoPanel").style.width="0px":document.getElementById("skillInfoPanel").style.height="0px",document.getElementById("sidepanel-backdrop").style.display="none",this.isSkillInfoPanelShown=!1)},async printPDF(){await this.getPrintAlgorithm();var t=document.getElementById("radialTree"),e=m(t),a=e.node(),r=new XMLSerializer,l=r.serializeToString(a),i={svg:l,treeType:"radial"},o=JSON.stringify(i),n=new XMLHttpRequest;n.responseType="arraybuffer",n.open("POST","/skilltree/print-pdf",!0),n.setRequestHeader("Content-type","application/json;charset=UTF-8"),n.setRequestHeader("Accept","application/json, text/plain, */*"),n.send(o),n.onload=function(){if(this.readyState==4&&this.status==200){let h=new Blob([n.response],{type:"application/pdf"});const c=window.URL.createObjectURL(h);var s=document.createElement("a");document.body.appendChild(s),s.style="display: none",s.href=c,s.download="My-Skill-Tree.pdf",s.click(),window.URL.revokeObjectURL(c)}}},async getPrintAlgorithm(){await this.skillTreeStore.getUserSkills();const t={name:"SKILLS",sprite:null,children:this.skillTreeStore.userSkills};var e=[];e=JSON.parse(JSON.stringify(t.children));function a(l){for(var i=l.length;i--;){if(l[i].type=="super"&&l[i].position!="end"){var o=[],n=[];for(let h=0;h<l[i].children.length;h++)l[i].children[h].type=="sub"?o.push(l[i].children[h]):n.push(l[i].children[h]);var s={skill_name:l[i].skill_name,type:"super",position:"end",children:o};l[i].children=[],l[i].children.push(s);for(let h=0;h<n.length;h++)l[i].children.push(n[h])}typeof l[i]<"u"&&l[i].children&&Array.isArray(l[i].children)&&l[i].children.length>0&&a(l[i].children)}}a(e);const r={skill_name:"My skills",children:e};await this.createSVGTree(r)},async createSVGTree(t){const r=13200.000000000002,l=24e3*.59,o=w().size([2*Math.PI,this.radius*50]).separation((s,h)=>(s.parent==h.parent?1:2)/s.depth)(P(t));let n=F("svg").attr("id","radialTree").attr("width",24e3).attr("height",24e3).attr("viewBox",[-r,-l,24e3,24e3]).attr("style","max-width: 100%; height: auto; font: 10px sans-serif;");n.append("g").attr("fill","none").attr("stroke-opacity",1).selectAll().data(o.links()).join("path").attr("d",b().angle(s=>s.x).radius(s=>s.y)).attr("stroke",function(s){return"#000"}).attr("stroke-width",function(s){return s.target.data.is_mastered==1?4:1.5}).style("stroke-dasharray",function(s){if(s.source.data.type=="super"&&s.target.data.position=="end"||s.target.data.type=="sub")return 5}),n.append("g").selectAll().data(o.descendants()).join("circle").attr("transform",s=>`rotate(${s.x*180/Math.PI-90}) translate(${s.y},0)`).attr("fill","#000").attr("r",2.5),n.append("g").attr("stroke-linejoin","round").attr("stroke-width",1).selectAll().data(o.descendants()).join("text").attr("transform",s=>`rotate(${s.x*180/Math.PI-90}) translate(${s.y},0) rotate(${s.x>=Math.PI?180:0})`).attr("dy","0.31em").attr("x",s=>s.x<Math.PI==!s.children?6:-6).attr("text-anchor",s=>s.x<Math.PI==!s.children?"start":"end").style("font-weight",function(s){return s.data.type=="super"?"700":"400"}).style("font-style",function(s){if(s.data.type=="sub")return"italic"}).style("paint-order",function(s){return"stroke"}).clone(!0).lower().style("stroke-width",function(s){return"1px"}).text(function(s){return s.data.position=="end"?"":s.data.skill_name}),document.querySelector("#SVGskilltree").append(n.node())}}},y=t=>(j("data-v-009cc755"),t=t(),A(),t),V={id:"wrapper"},W=y(()=>d("canvas",{id:"canvas",width:"1500",height:"1500"},null,-1)),q=y(()=>d("canvas",{id:"hidden-canvas",width:"1500",height:"1500"},null,-1)),J=y(()=>d("div",{id:"SVGskilltree"},null,-1)),X=y(()=>d("div",{id:"sidepanel-backdrop"},null,-1));function H(t,e,a,r,l,i){const o=$("SkillPanel");return v(),I(T,null,[d("button",{id:"print-btn",class:"btn btn-info",onClick:e[0]||(e[0]=n=>i.printPDF())}," Print "),d("div",V,[M(o,{skill:l.skill},null,8,["skill"]),W,q,J,X])],64)}const Y=B(G,[["render",H],["__scopeId","data-v-009cc755"]]);const K=d("div",{id:"thin-purple-banner"},null,-1),Q=d("span",null,"Loading...",-1),et={__name:"RadialTreeView",setup(t){return(e,a)=>(v(),I(T,null,[K,(v(),E(z,null,{default:_(()=>[M(Y)]),fallback:_(()=>[Q]),_:1}))],64))}};export{et as default};
