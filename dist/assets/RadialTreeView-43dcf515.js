import{_ as $,u as L,j as z,S as R,k as y,l as _,m as i,C as S,T as x,n as w,G as B,s as q,q as E,x as U,e as j,o as m,c as b,a as h,h as M,F as T,p as A,b as G,f as V,g as v,y as F}from"./main-34276cba.js";const O={setup(){const e=L(),a=z();return{userDetailsStore:e,skillTreeStore:a}},data(){return{width:null,height:null,skill:{id:null,children:[],isMastered:null,isUnlocked:null,name:null},tree:{},root:{},isSkillInfoPanelShown:!1,dx:null,dy:null,data:{},radius:0,radiusMultiplier:256,firstLevelNodeSize:400,secondLevelNodeSize:100,regularNodeSize:50,subSkillRadius:50}},components:{SkillPanel:R},created(){this.$pixiApp.start(),this.$radialTreeContainer.visible=!0,this.$tidyTreeContainer.visible=!1,this.$pixiApp.renderer.background.color=1442350},async mounted(){this.skillTreeStore.userSkillsSubSkillsSeparate.length==0&&await this.skillTreeStore.getUserSkillsSubSkillsSeparate(),this.$radialTreeContainer.children.length==0&&(this.width=window.innerWidth,this.height=window.innerHeight,this.radius=Math.min(this.width,this.height)/2-30,this.skill={name:"SKILLS",sprite:null,children:this.skillTreeStore.userSkillsSubSkillsSeparate},this.getAlgorithm()),document.querySelector("#skilltree").appendChild(this.$pixiApp.view)},methods:{getAlgorithm(){var e=[];e=JSON.parse(JSON.stringify(this.skill.children)),this.data={skill_name:"My skills",children:e};const a=y().size([2*Math.PI,this.radius*this.radiusMultiplier]).separation((s,n)=>(s.parent==n.parent?1:2)/s.depth);this.root=a(_(this.data)),this.drawTree()},drawTree(){const e=i.from("center-node.png");e.x=this.root.x,e.y=this.root.y,e.anchor.set(.5),this.$radialTreeContainer.addChild(e);const a=this.root.descendants(),s=this.root.links();for(const n of s)this.drawLink(n);for(const n of a)this.drawNode(n)},drawNode(e){let a=new S;a.x=Math.cos(e.x)*e.y,a.y=Math.sin(e.x)*e.y,this.$radialTreeContainer.addChild(a);var s=new i;if(e.data.level=="grade_school"?e.data.is_mastered?s=i.from("images/skill-tree-nodes/grade-school-mastered.png"):e.data.is_accessible?s=i.from("images/skill-tree-nodes/grade-school-unlocked.png"):s=i.from("images/skill-tree-nodes/grade-school-locked.png"):e.data.level=="middle_school"?e.data.is_mastered?s=i.from("images/skill-tree-nodes/middle-school-mastered.png"):e.data.is_accessible?s=i.from("images/skill-tree-nodes/middle-school-unlocked.png"):s=i.from("images/skill-tree-nodes/middle-school-locked.png"):e.data.level=="high_school"?e.data.is_mastered?s=i.from("images/skill-tree-nodes/high-school-mastered.png"):e.data.is_accessible?s=i.from("images/skill-tree-nodes/middle-school-unlocked.png"):s=i.from("images/skill-tree-nodes/middle-school-locked.png"):e.data.level=="college"?e.data.is_mastered?s=i.from("images/skill-tree-nodes/college-mastered.png"):e.data.is_accessible?s=i.from("images/skill-tree-nodes/middle-school-unlocked.png"):s=i.from("images/skill-tree-nodes/middle-school-locked.png"):e.data.level=="phd"?e.data.is_mastered?s=i.from("images/skill-tree-nodes/phd-mastered.png"):e.data.is_accessible?s=i.from("images/skill-tree-nodes/middle-school-unlocked.png"):s=i.from("images/skill-tree-nodes/middle-school-locked.png"):e.data.level=="domain"&&(s=i.from("images/skill-tree-nodes/domain.png")),s.anchor.set(.5),e.depth==1?(s.width=this.firstLevelNodeSize,s.height=this.firstLevelNodeSize):e.depth==2?(s.width=this.secondLevelNodeSize,s.height=this.secondLevelNodeSize):(s.width=this.regularNodeSize,s.height=this.regularNodeSize),a.addChild(s),s.eventMode="static",s.cursor="pointer",s.on("pointerdown",r=>{var d={id:e.data.id,isMastered:e.data.is_mastered,isUnlocked:e.data.is_accessible,name:e.data.skill_name,masteryRequirements:e.data.mastery_requirements,type:e.data.type};this.skill=d,this.isSkillInfoPanelShown||this.showInfoPanel()}),e.data.subskills)for(let r=0;r<e.data.subskills.length;r++){let d=new S,g=360/e.data.subskills.length*r,k=g*Math.PI/180,I=this.subSkillRadius*Math.cos(k),P=this.subSkillRadius*Math.sin(k);d.x=I,d.y=P;var s=new i;e.data.level=="grade_school"?e.data.is_mastered?s=i.from("images/skill-tree-nodes/grade-school-small-mastered.png"):e.data.is_accessible?s=i.from("images/skill-tree-nodes/grade-school-small-unlocked.png"):s=i.from("images/skill-tree-nodes/grade-school-small-locked.png"):e.data.level=="middle_school"?e.data.is_mastered?s=i.from("images/skill-tree-nodes/middle-school-small-mastered.png"):e.data.is_accessible?s=i.from("images/skill-tree-nodes/middle-school-small-unlocked.png"):s=i.from("images/skill-tree-nodes/middle-school-small-locked.png"):e.data.level=="high_school"?e.data.is_mastered?s=i.from("images/skill-tree-nodes/high-school-small-mastered.png"):e.data.is_accessible?s=i.from("images/skill-tree-nodes/high-school-small-unlocked.png"):s=i.from("images/skill-tree-nodes/high-school-small-locked.png"):e.data.level=="college"?e.data.is_mastered?s=i.from("images/skill-tree-nodes/college-smal-mastered.png"):e.data.is_accessible?s=i.from("images/skill-tree-nodes/college-small-unlocked.png"):s=i.from("images/skill-tree-nodes/college-small-locked.png"):e.data.level=="phd"&&(e.data.is_mastered?s=i.from("images/skill-tree-nodes/phd-small-mastered.png"):e.data.is_accessible?s=i.from("images/skill-tree-nodes/phd-small-unlocked.png"):s=i.from("images/skill-tree-nodes/phd-small-locked.png")),s.width=15,s.height=15,s.anchor.set(.5),s.eventMode="static",s.cursor="pointer",s.on("pointerdown",Z=>{var N={id:e.data.subskills[r].id,isMastered:e.data.subskills[r].is_mastered,isUnlocked:e.data.subskills[r].is_accessible,name:e.data.subskills[r].skill_name,masteryRequirements:e.data.subskills[r].mastery_requirements,type:e.data.subskills[r].type};this.skill=N,this.isSkillInfoPanelShown||this.showInfoPanel()}),d.addChild(s);const C=new x({fontFamily:"Poppins900",fontSize:"10",fill:"white",align:"center",strokeThickness:2,stroke:"black"}),u=new w(e.data.subskills[r].skill_name,C);u.angle=g,d.addChild(u),a.addChild(d)}let n,o;e.depth==0?(n=200,o="#000000"):e.depth==1?(n=100,o="#ffffff"):(n=90,o="#ffffff");const c=new x({fontFamily:"Poppins900",fontSize:n,fill:o,align:"center",strokeThickness:6,stroke:"black"}),t=new w(e.data.skill_name,c);e.depth==0||e.depth==1?t.anchor.set(.5,.5):e.depth==2?(t.angle=e.x*180/Math.PI-90,a.x>0?(t.angle=t.angle+90,e.children?(t.anchor.set(1,.5),t.x=t.x-80*Math.cos(t.rotation),t.y=t.y-80*Math.sin(t.rotation)):(t.anchor.set(0,.5),t.x=t.x+80*Math.cos(t.rotation),t.y=t.y+80*Math.sin(t.rotation))):(t.anchor.set(0,.5),t.angle=t.angle-90,e.children?(t.x=t.x+80*Math.cos(t.rotation),t.y=t.y+80*Math.sin(t.rotation)):(t.anchor.set(1,.5),t.x=t.x-80*Math.cos(t.rotation),t.y=t.y-80*Math.sin(t.rotation)))):e.depth>2&&(t.angle=e.x*180/Math.PI-90,a.x>0?(t.angle=t.angle+90,e.children?(t.anchor.set(1,.5),t.x=t.x-50*Math.cos(t.rotation),t.y=t.y-50*Math.sin(t.rotation)):(t.anchor.set(0,.5),t.x=t.x+50*Math.cos(t.rotation),t.y=t.y+50*Math.sin(t.rotation))):(t.anchor.set(0,.5),t.angle=t.angle-90,e.children?(t.x=t.x+50*Math.cos(t.rotation),t.y=t.y+50*Math.sin(t.rotation)):(t.anchor.set(1,.5),t.x=t.x-50*Math.cos(t.rotation),t.y=t.y-50*Math.sin(t.rotation)))),t.scale.set(.5,.5),a.addChild(t)},drawLink(e){const a=new B;e.target.data.is_mastered=="1"?a.lineStyle(16,16777215,1):a.lineStyle(2,16777215,1);var s=Math.cos(e.source.x)*e.source.y,n=Math.sin(e.source.x)*e.source.y;a.moveTo(s,n);var o=Math.cos(e.target.x)*e.target.y,c=Math.sin(e.target.x)*e.target.y;a.lineTo(o,c),this.$radialTreeContainer.addChild(a)},showInfoPanel(){this.isSkillInfoPanelShown||(this.isSkillInfoPanelShown=!0,screen.width>800?document.getElementById("skillInfoPanel").style.width="474px":document.getElementById("skillInfoPanel").style.height="474px",this.skill.isMastered=="1"?document.getElementById("mastery-checkbox").checked=!0:document.getElementById("mastery-checkbox").checked=!1)},hideInfoPanel(){this.isSkillInfoPanelShown&&(screen.width>800?document.getElementById("skillInfoPanel").style.width="0px":document.getElementById("skillInfoPanel").style.height="0px",document.getElementById("sidepanel-backdrop").style.display="none",this.isSkillInfoPanelShown=!1)},async printPDF(){await this.createSVGTree();var e=document.getElementById("linearTree"),a=q(e),s=a.node(),n=new XMLSerializer,o=n.serializeToString(s),c={svg:o,treeType:"linear"},t=JSON.stringify(c),r=new XMLHttpRequest;r.responseType="arraybuffer",r.open("POST","/skilltree/print-pdf",!0),r.setRequestHeader("Content-type","application/json;charset=UTF-8"),r.setRequestHeader("Accept","application/json, text/plain, */*"),r.send(t),r.onload=function(){if(this.readyState==4&&this.status==200){let f=new Blob([r.response],{type:"application/pdf"});const l=window.URL.createObjectURL(f);var d=document.createElement("a");document.body.appendChild(d),d.style="display: none",d.href=l,d.download="My-Skill-Tree.pdf",d.click(),window.URL.revokeObjectURL(l)}}},createSVGTree(){const e=_(this.data),a=15,s=this.width/(e.height+1);y().nodeSize([a,s])(e);let o=1/0,c=-o;e.each(l=>{l.x>c&&(c=l.x),l.x<o&&(o=l.x)});const t=c-o+this.dx*2;let r=E("svg").attr("id","linearTree").attr("width",this.width).attr("height",t).attr("viewBox",[-s/3,o-a,this.width,t]).attr("style","max-width: 100%; height: auto; font: 10px sans-serif;");const d=r.append("g");d.append("g").attr("fill","none").attr("stroke-opacity",1).selectAll().data(e.links()).join("path").attr("d",U().x(l=>l.y).y(l=>l.x)).attr("stroke",function(l){return"#000"}).attr("stroke-width",function(l){return l.target.data.is_mastered==1?8:1.5}).style("stroke-dasharray",function(l){if(l.source.data.type=="super"&&l.target.data.position=="end"||l.target.data.type=="sub")return 5});const f=d.append("g").attr("stroke-linejoin","round").attr("stroke-width",3).selectAll().data(e.descendants()).join("g").attr("transform",l=>`translate(${l.y},${l.x})`);f.append("circle").attr("fill",l=>l.children?"#555":"#000").attr("r",2.5),f.append("text").style("font-weight",function(l){return l.data.type=="super"?"700":"400"}).style("font-style",function(l){if(l.data.type=="sub")return"italic"}).attr("dy","0.31em").attr("x",l=>l.children?-6:6).attr("text-anchor",l=>l.children?"end":"start").text(function(l){return l.data.position=="end"?"":l.data.skill_name}).clone(!0).lower().attr("stroke",function(l){return"white"}),document.querySelector("#SVGskilltree").append(r.node())}}},p=e=>(A("data-v-fa51060f"),e=e(),G(),e),H={id:"wrapper"},D=p(()=>h("div",{id:"skilltree"},null,-1)),X=p(()=>h("div",{id:"SVGskilltree"},null,-1)),J=p(()=>h("div",{id:"sidepanel-backdrop"},null,-1));function Y(e,a,s,n,o,c){const t=j("SkillPanel");return m(),b(T,null,[h("button",{id:"print-btn",class:"btn btn-info",onClick:a[0]||(a[0]=r=>c.printPDF())}," Print "),h("div",H,[M(t,{skill:o.skill},null,8,["skill"]),D,X,J])],64)}const K=$(O,[["render",Y],["__scopeId","data-v-fa51060f"]]);const W=h("div",{id:"purple-banner"},null,-1),Q=h("span",null,"Loading...",-1),te={__name:"RadialTreeView",setup(e){return(a,s)=>(m(),b(T,null,[W,(m(),V(F,null,{default:v(()=>[M(K)]),fallback:v(()=>[Q]),_:1}))],64))}};export{te as default};
