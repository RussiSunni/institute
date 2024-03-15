import{_ as L,u as z,j as $,S as B,k as a,l as k,m as y,C as S,T as _,n as w,A as R,B as A,G as j,s as q,q as U,x as E,e as C,o as m,c as x,a as c,h as b,F as M,p as O,b as V,f as F,g as v,y as J}from"./main-7ca062e3.js";const D={setup(){const e=z(),l=$();return{userDetailsStore:e,skillTreeStore:l}},data(){return{width:null,height:null,skill:{id:null,children:[],isMastered:null,isUnlocked:null,name:null},tree:{},root:{},isSkillInfoPanelShown:!1,dx:null,dy:null,data:{},radius:0,radiusMultiplier:256,firstLevelNodeSize:400,secondLevelNodeSize:100,regularNodeSize:50,subSkillRadius:50,sprite:{domainNode:null}}},components:{SkillPanel:B},created(){this.$pixiApp.start(),this.$radialTreeContainer.visible=!0,this.$tidyTreeContainer.visible=!1,this.$pixiApp.renderer.background.color=1442350},async mounted(){this.skillTreeStore.userSkillsSubSkillsSeparate.length==0&&await this.skillTreeStore.getUserSkillsSubSkillsSeparate(),this.sprite.domainNode=a.from("images/skill-tree-nodes/domain.png"),this.$radialTreeContainer.children.length==0&&(this.width=window.innerWidth,this.height=window.innerHeight,this.radius=Math.min(this.width,this.height)/2-30,this.skill={name:"SKILLS",sprite:null,children:this.skillTreeStore.userSkillsSubSkillsSeparate},this.getAlgorithm()),document.querySelector("#skilltree").appendChild(this.$pixiApp.view)},methods:{handelNodeSprite(e,l,s){e.anchor.set(.5),l.depth==1?(e.width=this.firstLevelNodeSize,e.height=this.firstLevelNodeSize):l.depth==2?(e.width=this.secondLevelNodeSize,e.height=this.secondLevelNodeSize):(e.width=this.regularNodeSize,e.height=this.regularNodeSize),s.addChild(e),e.eventMode="static",e.cursor="pointer",e.on("pointerdown",d=>{var r={id:l.data.id,isMastered:l.data.is_mastered,isUnlocked:l.data.is_accessible,name:l.data.skill_name,masteryRequirements:l.data.mastery_requirements,type:l.data.type};this.skill=r,this.isSkillInfoPanelShown||this.showInfoPanel()})},getAlgorithm(){var e=[];e=JSON.parse(JSON.stringify(this.skill.children)),this.data={skill_name:"My skills",children:e};const l=k().size([2*Math.PI,this.radius*this.radiusMultiplier]).separation((s,d)=>(s.parent==d.parent?1:2)/s.depth);this.root=l(y(this.data)),this.drawTree()},drawTree(){const e=a.from("center-node.png");e.x=this.root.x,e.y=this.root.y,e.anchor.set(.5),this.$radialTreeContainer.addChild(e);const l=this.root.descendants(),s=this.root.links();for(const d of s)this.drawLink(d);for(const d of l)this.drawNode(d)},drawNode(e){let l=new S;l.x=Math.cos(e.x)*e.y,l.y=Math.sin(e.x)*e.y,this.$radialTreeContainer.addChild(l);var s=new a;if(e.data.level=="grade_school"?e.data.is_mastered?s=a.from("images/skill-tree-nodes/grade-school-mastered.png"):e.data.is_accessible?s=a.from("images/skill-tree-nodes/grade-school-unlocked.png"):s=a.from("images/skill-tree-nodes/grade-school-locked.png"):e.data.level=="middle_school"?e.data.is_mastered?s=a.from("images/skill-tree-nodes/middle-school-mastered.png"):e.data.is_accessible?s=a.from("images/skill-tree-nodes/middle-school-unlocked.png"):s=a.from("images/skill-tree-nodes/middle-school-locked.png"):e.data.level=="high_school"?e.data.is_mastered?s=a.from("images/skill-tree-nodes/high-school-mastered.png"):e.data.is_accessible?s=a.from("images/skill-tree-nodes/middle-school-unlocked.png"):s=a.from("images/skill-tree-nodes/middle-school-locked.png"):e.data.level=="college"?e.data.is_mastered?s=a.from("images/skill-tree-nodes/college-mastered.png"):e.data.is_accessible?s=a.from("images/skill-tree-nodes/middle-school-unlocked.png"):s=a.from("images/skill-tree-nodes/middle-school-locked.png"):e.data.level=="phd"?e.data.is_mastered?s=a.from("images/skill-tree-nodes/phd-mastered.png"):e.data.is_accessible?s=a.from("images/skill-tree-nodes/middle-school-unlocked.png"):s=a.from("images/skill-tree-nodes/middle-school-locked.png"):e.data.level=="domain"&&(s=a.from("images/skill-tree-nodes/domain.png")),s.anchor.set(.5),e.depth==1?(s.width=this.firstLevelNodeSize,s.height=this.firstLevelNodeSize):e.depth==2?(s.width=this.secondLevelNodeSize,s.height=this.secondLevelNodeSize):(s.width=this.regularNodeSize,s.height=this.regularNodeSize),l.addChild(s),s.eventMode="static",s.cursor="pointer",s.on("pointerdown",t=>{var o={id:e.data.id,isMastered:e.data.is_mastered,isUnlocked:e.data.is_accessible,name:e.data.skill_name,masteryRequirements:e.data.mastery_requirements,type:e.data.type};this.skill=o,this.isSkillInfoPanelShown||this.showInfoPanel()}),e.data.subskills)for(let t=0;t<e.data.subskills.length;t++){let o=new S,f=360/e.data.subskills.length*t,g=f*Math.PI/180,I=this.subSkillRadius*Math.cos(g),P=this.subSkillRadius*Math.sin(g);o.x=I,o.y=P;var s=new a;e.data.level=="grade_school"?e.data.is_mastered?s=a.from("images/skill-tree-nodes/grade-school-small-mastered.png"):e.data.is_accessible?s=a.from("images/skill-tree-nodes/grade-school-small-unlocked.png"):s=a.from("images/skill-tree-nodes/grade-school-small-locked.png"):e.data.level=="middle_school"?e.data.is_mastered?s=a.from("images/skill-tree-nodes/middle-school-small-mastered.png"):e.data.is_accessible?s=a.from("images/skill-tree-nodes/middle-school-small-unlocked.png"):s=a.from("images/skill-tree-nodes/middle-school-small-locked.png"):e.data.level=="high_school"?e.data.is_mastered?s=a.from("images/skill-tree-nodes/high-school-small-mastered.png"):e.data.is_accessible?s=a.from("images/skill-tree-nodes/high-school-small-unlocked.png"):s=a.from("images/skill-tree-nodes/high-school-small-locked.png"):e.data.level=="college"?e.data.is_mastered?s=a.from("images/skill-tree-nodes/college-smal-mastered.png"):e.data.is_accessible?s=a.from("images/skill-tree-nodes/college-small-unlocked.png"):s=a.from("images/skill-tree-nodes/college-small-locked.png"):e.data.level=="phd"&&(e.data.is_mastered?s=a.from("images/skill-tree-nodes/phd-small-mastered.png"):e.data.is_accessible?s=a.from("images/skill-tree-nodes/phd-small-unlocked.png"):s=a.from("images/skill-tree-nodes/phd-small-locked.png")),s.width=15,s.height=15,s.anchor.set(.5),s.eventMode="static",s.cursor="pointer",s.on("pointerdown",ee=>{var N={id:e.data.subskills[t].id,isMastered:e.data.subskills[t].is_mastered,isUnlocked:e.data.subskills[t].is_accessible,name:e.data.subskills[t].skill_name,masteryRequirements:e.data.subskills[t].mastery_requirements,type:e.data.subskills[t].type};this.skill=N,this.isSkillInfoPanelShown||this.showInfoPanel()}),o.addChild(s);const T=new _({fontFamily:"Poppins900",fontSize:"10",fill:"white",align:"center",strokeThickness:2,stroke:"black"}),u=new w(e.data.subskills[t].skill_name,T);u.angle=f,o.addChild(u),l.addChild(o)}let d,r;e.depth==0?(d=200,r="#000000"):e.depth==1?(d=100,r="#ffffff"):(d=90,r="#ffffff");const n=new _({fontFamily:"Poppins900",fontSize:d,fill:r,align:"center",strokeThickness:6,stroke:"black"});if(e.depth==0){const t=new w(e.data.skill_name,n);t.anchor.set(.5,.5),t.scale.set(.5,.5),l.addChild(t);return}R.load("/font/Poppins Bold White.xml").then(()=>{const t=new A(e.data.skill_name,{fontName:"Poppins-White-Bold",fontSize:90,align:"right"});e.depth==0||e.depth==1?t.anchor.set(.5,.5):e.depth==2?(t.angle=e.x*180/Math.PI-90,l.x>0?(t.angle=t.angle+90,e.children?(t.anchor.set(1,.5),t.x=t.x-80*Math.cos(t.rotation),t.y=t.y-80*Math.sin(t.rotation)):(t.anchor.set(0,.5),t.x=t.x+80*Math.cos(t.rotation),t.y=t.y+80*Math.sin(t.rotation))):(t.anchor.set(0,.5),t.angle=t.angle-90,e.children?(t.x=t.x+80*Math.cos(t.rotation),t.y=t.y+80*Math.sin(t.rotation)):(t.anchor.set(1,.5),t.x=t.x-80*Math.cos(t.rotation),t.y=t.y-80*Math.sin(t.rotation)))):e.depth>2&&(t.angle=e.x*180/Math.PI-90,l.x>0?(t.angle=t.angle+90,e.children?(t.anchor.set(1,.5),t.x=t.x-50*Math.cos(t.rotation),t.y=t.y-50*Math.sin(t.rotation)):(t.anchor.set(0,.5),t.x=t.x+50*Math.cos(t.rotation),t.y=t.y+50*Math.sin(t.rotation))):(t.anchor.set(0,.5),t.angle=t.angle-90,e.children?(t.x=t.x+50*Math.cos(t.rotation),t.y=t.y+50*Math.sin(t.rotation)):(t.anchor.set(1,.5),t.x=t.x-50*Math.cos(t.rotation),t.y=t.y-50*Math.sin(t.rotation)))),t.scale.set(.5,.5),l.addChild(t)})},drawLink(e){const l=new j;e.target.data.is_mastered=="1"?l.lineStyle(16,16777215,1):l.lineStyle(2,16777215,1);var s=Math.cos(e.source.x)*e.source.y,d=Math.sin(e.source.x)*e.source.y;l.moveTo(s,d);var r=Math.cos(e.target.x)*e.target.y,n=Math.sin(e.target.x)*e.target.y;l.lineTo(r,n),this.$radialTreeContainer.addChild(l)},showInfoPanel(){this.isSkillInfoPanelShown||(this.isSkillInfoPanelShown=!0,screen.width>800?document.getElementById("skillInfoPanel").style.width="474px":document.getElementById("skillInfoPanel").style.height="474px",this.skill.isMastered=="1"?document.getElementById("mastery-checkbox").checked=!0:document.getElementById("mastery-checkbox").checked=!1)},hideInfoPanel(){this.isSkillInfoPanelShown&&(screen.width>800?document.getElementById("skillInfoPanel").style.width="0px":document.getElementById("skillInfoPanel").style.height="0px",document.getElementById("sidepanel-backdrop").style.display="none",this.isSkillInfoPanelShown=!1)},async printPDF(){await this.getPrintAlgorithm();var e=document.getElementById("radialTree"),l=q(e),s=l.node(),d=new XMLSerializer,r=d.serializeToString(s),n={svg:r,treeType:"radial"},t=JSON.stringify(n),o=new XMLHttpRequest;o.responseType="arraybuffer",o.open("POST","/skilltree/print-pdf",!0),o.setRequestHeader("Content-type","application/json;charset=UTF-8"),o.setRequestHeader("Accept","application/json, text/plain, */*"),o.send(t),o.onload=function(){if(this.readyState==4&&this.status==200){let h=new Blob([o.response],{type:"application/pdf"});const f=window.URL.createObjectURL(h);var i=document.createElement("a");document.body.appendChild(i),i.style="display: none",i.href=f,i.download="My-Skill-Tree.pdf",i.click(),window.URL.revokeObjectURL(f)}}},async getPrintAlgorithm(){await this.skillTreeStore.getUserSkills();const e={name:"SKILLS",sprite:null,children:this.skillTreeStore.userSkills};var l=[];l=JSON.parse(JSON.stringify(e.children));function s(r){for(var n=r.length;n--;){if(r[n].type=="super"&&r[n].position!="end"){var t=[],o=[];for(let h=0;h<r[n].children.length;h++)r[n].children[h].type=="sub"?t.push(r[n].children[h]):o.push(r[n].children[h]);var i={skill_name:r[n].skill_name,type:"super",position:"end",children:t};r[n].children=[],r[n].children.push(i);for(let h=0;h<o.length;h++)r[n].children.push(o[h])}typeof r[n]<"u"&&r[n].children&&Array.isArray(r[n].children)&&r[n].children.length>0&&s(r[n].children)}}s(l);const d={skill_name:"My skills",children:l};await this.createSVGTree(d)},async createSVGTree(e){const d=13200.000000000002,r=24e3*.59,t=k().size([2*Math.PI,this.radius*50]).separation((i,h)=>(i.parent==h.parent?1:2)/i.depth)(y(e));let o=U("svg").attr("id","radialTree").attr("width",24e3).attr("height",24e3).attr("viewBox",[-d,-r,24e3,24e3]).attr("style","max-width: 100%; height: auto; font: 10px sans-serif;");o.append("g").attr("fill","none").attr("stroke-opacity",1).selectAll().data(t.links()).join("path").attr("d",E().angle(i=>i.x).radius(i=>i.y)).attr("stroke",function(i){return"#000"}).attr("stroke-width",function(i){return i.target.data.is_mastered==1?4:1.5}).style("stroke-dasharray",function(i){if(i.source.data.type=="super"&&i.target.data.position=="end"||i.target.data.type=="sub")return 5}),o.append("g").selectAll().data(t.descendants()).join("circle").attr("transform",i=>`rotate(${i.x*180/Math.PI-90}) translate(${i.y},0)`).attr("fill","#000").attr("r",2.5),o.append("g").attr("stroke-linejoin","round").attr("stroke-width",1).selectAll().data(t.descendants()).join("text").attr("transform",i=>`rotate(${i.x*180/Math.PI-90}) translate(${i.y},0) rotate(${i.x>=Math.PI?180:0})`).attr("dy","0.31em").attr("x",i=>i.x<Math.PI==!i.children?6:-6).attr("text-anchor",i=>i.x<Math.PI==!i.children?"start":"end").style("font-weight",function(i){return i.data.type=="super"?"700":"400"}).style("font-style",function(i){if(i.data.type=="sub")return"italic"}).style("paint-order",function(i){return"stroke"}).clone(!0).lower().style("stroke-width",function(i){return"1px"}).text(function(i){return i.data.position=="end"?"":i.data.skill_name}),document.querySelector("#SVGskilltree").append(o.node())}}},p=e=>(O("data-v-36f4981a"),e=e(),V(),e),H={id:"wrapper"},W=p(()=>c("div",{id:"skilltree"},null,-1)),X=p(()=>c("div",{id:"SVGskilltree"},null,-1)),K=p(()=>c("div",{id:"sidepanel-backdrop"},null,-1));function Y(e,l,s,d,r,n){const t=C("SkillPanel");return m(),x(M,null,[c("button",{id:"print-btn",class:"btn btn-info",onClick:l[0]||(l[0]=o=>n.printPDF())}," Print "),c("div",H,[b(t,{skill:r.skill},null,8,["skill"]),W,X,K])],64)}const Q=L(D,[["render",Y],["__scopeId","data-v-36f4981a"]]);const Z=c("div",{id:"purple-banner"},null,-1),G=c("span",null,"Loading...",-1),se={__name:"RadialTreeView",setup(e){return(l,s)=>(m(),x(M,null,[Z,(m(),F(J,null,{default:v(()=>[b(Q)]),fallback:v(()=>[G]),_:1}))],64))}};export{se as default};
