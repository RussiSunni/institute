import{_ as E,u as z,P as R,S as t,G as D,T as A,r as F,o as w,c as $,a as I,w as U,v as V,b as v,C as M,p as j,d as H,e as K,f as L,g as W,F as J}from"./main-70aa1041.js";import{u as O}from"./SkillTreeStore-d010e807.js";import{u as q,S as Z,t as Q,h as X}from"./transform-fdb520b0.js";import{S as Y,h as G}from"./fontfaceobserver.standalone-bc8c541c.js";const ee={setup(){const s=z(),a=O(),f=q();return{userDetailsStore:s,skillTreeStore:a,skillTagsStore:f}},data(){return{stageContents:[],isSkillInfoPanelShown:!1,regularLockedUnmasteredNodeSprite:null,radius:0,width:null,height:null,radiusMultiplier:256,firstLevelNodeSize:500,secondLevelNodeSize:100,regularNodeSize:50,subSkillRadius:50,skill:{id:null,children:[],isMastered:null,isUnlocked:null,container:null,name:null,description:null,tagIDs:[],sprite:null},isRecentered:!1}},components:{SkillTreeFilter:Z,SkillPanel:Y},async mounted(){document.getElementById("reset-button").addEventListener("click",()=>{this.resetTree()}),this.skillTreeStore.userSkills.length==0&&await this.skillTreeStore.getUserSkills(),this.width=window.innerWidth,this.height=window.innerHeight,this.radius=Math.min(this.width,this.height)/2,document.querySelector("#skilltree").appendChild(this.$pixiApp.view);const s=new G({screenWidth:this.width,screenHeight:this.height,worldWidth:this.width,worldHeight:this.height,events:this.$pixiApp.renderer.events});this.$pixiApp.stage.addChild(s),s.center=new R(0,0),s.drag().pinch().wheel().decelerate().clampZoom({minScale:.001,maxScale:10});const a=t.from("center-node.png");this.skill={name:"SKILLS",sprite:a,children:this.skillTreeStore.userSkills},this.getAlgorithm()},methods:{getAlgorithm(){var s=[];s=JSON.parse(JSON.stringify(this.skill.children));function a(e){for(var h=e.length;h--;)e[h].type=="sub"&&e.splice(h,1),typeof e[h]<"u"&&e[h].children&&Array.isArray(e[h].children)&&e[h].children.length>0&&a(e[h].children)}a(s);var f={name:null,children:s};const k=Q().size([2*Math.PI,this.radius*this.radiusMultiplier]).separation((e,h)=>(e.parent==h.parent,1/e.depth))(X(f));var i=[];function o(e,h){for(let l=0;l<e.length;l++)e[l].type!="sub"&&i.push(e[l]),o(e[l].children)}o(s);let g=k.descendants().sort((e,h)=>e.data.id-h.data.id);for(let e=0;e<i.length;e++)for(let h=0;h<g.length;h++)i[e].id==g[h].data.id&&(i[e].x=g[h].x,i[e].y=g[h].y);for(var d=0;d<i.length;d++)if(i[d].children=[],i[d].parent!=null&&i[d].parent!=0){var r=i[d].parent;for(let e=0;e<i.length;e++)i[e].id==r&&i[e].children.push(i[d])}let n=[];for(var d=0;d<i.length;d++)(i[d].parent==null||i[d].parent==0)&&n.push(i[d]);this.skill.children=n,this.drawChart(k)},drawChart(s){for(let d=0;d<s.links().length;d++){console.log(s.links()[d].target.data.is_mastered);const r=new D;s.links()[d].target.data.is_mastered=="1"?r.lineStyle(8,16777215,1):r.lineStyle(2,16777215,1);var a=Math.cos(s.links()[d].source.x)*s.links()[d].source.y,f=Math.sin(s.links()[d].source.x)*s.links()[d].source.y;r.moveTo(a,f);var u=Math.cos(s.links()[d].target.x)*s.links()[d].target.y,k=Math.sin(s.links()[d].target.x)*s.links()[d].target.y;r.lineTo(u,k),this.$pixiApp.stage.children[0].addChild(r),this.stageContents.push(r)}const i=this.skill.sprite;i.x=s.x,i.y=s.y,i.anchor.set(.5),this.isRecentered==!1?i.scale.set(.5):i.scale.set(1),this.$pixiApp.stage.children[0].addChild(i),this.stageContents.push(i);let o=new A(this.skill.name,{fontFamily:"Poppins900",fontSize:200,fill:0,align:"center"});o.anchor.set(.5),o.x=s.x,o.y=s.y,o.scale.x=.2,o.scale.y=.2,this.$pixiApp.stage.children[0].addChild(o),this.stageContents.push(o);function g(d,r,n){r++;for(let[h,l]of d.entries()){let m=new M;m.x=Math.cos(l.x)*l.y,m.y=Math.sin(l.x)*l.y;var e=new t;l.level=="grade_school"?l.is_mastered?e=t.from("images/skill-tree-nodes/grade-school-mastered.png"):l.is_accessible?e=t.from("images/skill-tree-nodes/grade-school-unlocked.png"):e=t.from("images/skill-tree-nodes/grade-school-locked.png"):l.level=="middle_school"?l.is_mastered?e=t.from("images/skill-tree-nodes/middle-school-mastered.png"):l.is_accessible?e=t.from("images/skill-tree-nodes/middle-school-unlocked.png"):e=t.from("images/skill-tree-nodes/middle-school-locked.png"):l.level=="high_school"?l.is_mastered?e=t.from("images/skill-tree-nodes/high-school-mastered.png"):l.is_accessible?e=t.from("images/skill-tree-nodes/middle-school-unlocked.png"):e=t.from("images/skill-tree-nodes/middle-school-locked.png"):l.level=="college"?l.is_mastered?e=t.from("images/skill-tree-nodes/college-mastered.png"):l.is_accessible?e=t.from("images/skill-tree-nodes/middle-school-unlocked.png"):e=t.from("images/skill-tree-nodes/middle-school-locked.png"):l.level=="phd"?l.is_mastered?e=t.from("images/skill-tree-nodes/phd-mastered.png"):l.is_accessible?e=t.from("images/skill-tree-nodes/middle-school-unlocked.png"):e=t.from("images/skill-tree-nodes/middle-school-locked.png"):l.level=="domain"&&(e=t.from("images/skill-tree-nodes/domain.png"));let b=0,x=0;for(let c=0;c<l.children.length;c++)l.children[c].type!="sub"?b++:x++;r==1?(e.width=n.firstLevelNodeSize,e.height=n.firstLevelNodeSize):r==2?(e.width=n.secondLevelNodeSize,e.height=n.secondLevelNodeSize):(e.width=n.regularNodeSize,e.height=n.regularNodeSize),e.anchor.set(.5),m.addChild(e);let S;r==1?S=300:r==2?S=100:S=50;const T=l.skill_name.split(" ");for(let c=0;c<T.length;c++)T[c].length>9&&(r==1?S=250:r==2?S=90:S=40);l.skill_name=l.skill_name.replace(/(.*?\s)/g,`$1
`);let _=new A(l.skill_name.toUpperCase(),{fontFamily:"Poppins900",fontSize:S,fill:16777215,align:"center"});_.anchor.set(.5),_.scale.x=.2,_.scale.y=.2,m.addChild(_),e.eventMode="static",_.eventMode="static",e.cursor="pointer",_.cursor="pointer",_.on("pointerdown",c=>{var p={id:l.id,children:l.children,isMastered:l.is_mastered,isUnlocked:l.is_accessible,container:m,name:l.skill_name,description:l.description,tagIDs:[],sprite:e};if(n.skill=p,!n.isSkillInfoPanelShown){let y=function(){n.recenterTree()};n.skill=p,n.showInfoPanel(),document.getElementById("recenterTree").addEventListener("click",y)}}),e.on("pointerdown",c=>{var p={id:l.id,children:l.children,isMastered:l.is_mastered,isUnlocked:l.is_accessible,container:m,name:l.skill_name,description:l.description,tagIDs:[],sprite:e};if(n.skill=p,!n.isSkillInfoPanelShown){let y=function(){n.recenterTree()};n.skill=p,n.showInfoPanel(),document.getElementById("recenterTree").addEventListener("click",y)}}),n.$pixiApp.stage.children[0].addChild(m),n.stageContents.push(m);for(let c=0;c<l.children.length;c++)if(l.children[c].type=="sub"){let p=new M,y=360/x,B=c-b,P=y*B*Math.PI/180,C,N;C=n.subSkillRadius*Math.cos(P),N=n.subSkillRadius*Math.sin(P),p.x=C,p.y=N;var e=new t;l.level=="grade_school"?l.is_mastered?e=t.from("images/skill-tree-nodes/grade-school-small-mastered.png"):l.is_accessible?e=t.from("images/skill-tree-nodes/grade-school-small-unlocked.png"):e=t.from("images/skill-tree-nodes/grade-school-small-locked.png"):l.level=="middle_school"?l.is_mastered?e=t.from("images/skill-tree-nodes/middle-school-small-mastered.png"):l.is_accessible?e=t.from("images/skill-tree-nodes/middle-school-small-unlocked.png"):e=t.from("images/skill-tree-nodes/middle-school-small-locked.png"):l.level=="high_school"?l.is_mastered?e=t.from("images/skill-tree-nodes/high-school-small-mastered.png"):l.is_accessible?e=t.from("images/skill-tree-nodes/high-school-small-unlocked.png"):e=t.from("images/skill-tree-nodes/high-school-small-locked.png"):l.level=="college"?l.is_mastered?e=t.from("images/skill-tree-nodes/college-smal-mastered.png"):l.is_accessible?e=t.from("images/skill-tree-nodes/college-small-unlocked.png"):e=t.from("images/skill-tree-nodes/college-small-locked.png"):l.level=="phd"&&(l.is_mastered?e=t.from("images/skill-tree-nodes/phd-small-mastered.png"):l.is_accessible?e=t.from("images/skill-tree-nodes/phd-small-unlocked.png"):e=t.from("images/skill-tree-nodes/phd-small-locked.png")),e.width=15,e.height=15,e.anchor.set(.5),p.addChild(e),m.addChild(p)}l.children&&Array.isArray(l.children)&&l.children.length>0&&g(l.children,r,n)}}g(this.skill.children,0,this)},recenterTree(){this.isRecentered=!0,this.radiusMultiplier=1;for(let s=0;s<this.stageContents.length;s++)this.stageContents[s].destroy();this.hideInfoPanel(),this.getAlgorithm()},resetTree(){this.isRecentered=!1,this.radiusMultiplier=4,this.$pixiApp.stage.children[0].removeChildren();const s=t.from("center-node.png");this.skill={name:"SKILLS",sprite:s,children:this.skillTreeStore.userSkills},this.getAlgorithm()},showInfoPanel(){this.isSkillInfoPanelShown||(screen.width>800?document.getElementById("skillInfoPanel").style.width="474px":document.getElementById("skillInfoPanel").style.height="474px",document.getElementById("sidepanel-backdrop").style.display="block",this.isSkillInfoPanelShown=!0,document.getElementById("skillDescription"),document.getElementById("skillLink"))},hideInfoPanel(){this.isSkillInfoPanelShown&&(screen.width>800?document.getElementById("skillInfoPanel").style.width="0px":document.getElementById("skillInfoPanel").style.height="0px",document.getElementById("sidepanel-backdrop").style.display="none",this.isSkillInfoPanelShown=!1)},async filterSkills(s){var a=[];function f(r,n){for(let e=0;e<r.length;e++)a.push(r[e]),f(r[e].children)}f(this.skill.children);var u=0;for(let r=0;r<a.length;r++){let n=a[r];k(n,n.parent,s),a[r].parent=u}function k(r,n,e,h){for(let l=0;l<a.length;l++)if(a[l].id==n){let m=a[l];m.level==e?(u=m.parent,k(r,u,e)):u=m.id}}let i=[];for(var o=0;o<a.length;o++)a[o].level!=s&&i.push(a[o]);for(var o=0;o<i.length;o++)if(i[o].children=[],i[o].parent!=null&&i[o].parent!=0){var g=i[o].parent;for(let n=0;n<i.length;n++)i[n].id==g&&i[n].children.push(i[o])}let d=[];for(var o=0;o<i.length;o++)(i[o].parent==null||i[o].parent==0)&&d.push(i[o]);this.skill.children=d;for(let r=0;r<this.stageContents.length;r++)this.stageContents[r].destroy();this.applyFilter()},applyFilter(){this.$pixiApp.stage.children[0].removeChildren();const s=t.from("center-node.png");this.skill={name:"SKILLS",sprite:s,children:this.skill.children},this.getAlgorithm()}}},le=s=>(j("data-v-de578964"),s=s(),H(),s),se={class:"flex-container skill-tree-container"},ie={id:"reset-button",class:"btn btn-info"},te={id:"wrapper"},ne={id:"skilltree"},re=le(()=>v("div",{id:"sidepanel-backdrop"},null,-1));function oe(s,a,f,u,k,i){const o=F("SkillTreeFilter"),g=F("SkillPanel");return w(),$("div",se,[I(o,{id:"filter"}),U(v("button",ie,"Reset",512),[[V,k.isRecentered]]),v("div",te,[v("div",ne,[I(g,{skill:k.skill},null,8,["skill"])]),re])])}const de=E(ee,[["render",oe],["__scopeId","data-v-de578964"]]);const ae=v("div",{id:"purple-banner"},null,-1),he=v("span",null,"Loading...",-1),pe={__name:"SkillTreeView",setup(s){return(a,f)=>(w(),$(J,null,[ae,(w(),K(W,null,{default:L(()=>[I(de)]),fallback:L(()=>[he]),_:1}))],64))}};export{pe as default};
