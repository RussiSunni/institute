import{d as O,_ as R,o as v,c as b,F as U,r as J,a as S,w as H,v as q,t as Z,b as Q,p as V,e as j,u as G,P as ee,S as c,G as te,T as N,f as L,g as M,h as ie,C as E,i as se,j as D,k as le}from"./main-70505081.js";import{u as ne}from"./SkillTreeStore-e8a14e3f.js";import{S as re,h as ae}from"./fontfaceobserver.standalone-c6bcbd8c.js";const oe=O("skillTags",{state:()=>({skillTagsList:[]}),actions:{async getSkillTagsList(){const t=await(await fetch("/skill-tags/list")).json();this.skillTagsList=t}}});const de={setup(){},data(){return{levels:[{id:"grade_school",name:"Grade school"},{id:"middle_school",name:"Middle school"},{id:"high_school",name:"High school"},{id:"college",name:"College"},{id:"phd",name:"PhD"}],checkedFilters:[],isFilterApplied:!1}},async created(){},async mounted(){},methods:{applyFilter:function(e){this.isFilterApplied=!0,this.$parent.filterSkills(e)}}},W=e=>(V("data-v-b4ceaabf"),e=e(),j(),e),he={id:"filters"},ce=W(()=>S("h1",{id:"filterMainHeader",class:"mb-2"},"My Skill Tree",-1)),fe={key:0},ue=W(()=>S("p",{class:"mb-2"},"Choose which level to filter out",-1)),pe={class:"form-check"},me=["value","onChange"],ge={class:"form-check-label",for:"flexCheckDefault"};function ke(e,t,s,o,d,a){return v(),b("div",he,[ce,d.isFilterApplied==!1?(v(),b("div",fe,[ue,(v(!0),b(U,null,J(d.levels,n=>(v(),b("div",null,[S("div",pe,[H(S("input",{class:"form-check-input",type:"radio",value:n.id,id:"flexCheckDefault","onUpdate:modelValue":t[0]||(t[0]=m=>d.checkedFilters=m),onChange:m=>a.applyFilter(n.id)},null,40,me),[[q,d.checkedFilters]]),S("label",ge,Z(n.name),1)])]))),256))])):Q("",!0)])}const _e=R(de,[["render",ke],["__scopeId","data-v-b4ceaabf"]]);function ye(e){var t=0,s=e.children,o=s&&s.length;if(!o)t=1;else for(;--o>=0;)t+=s[o].value;e.value=t}function Se(){return this.eachAfter(ye)}function we(e,t){let s=-1;for(const o of this)e.call(t,o,++s,this);return this}function xe(e,t){for(var s=this,o=[s],d,a,n=-1;s=o.pop();)if(e.call(t,s,++n,this),d=s.children)for(a=d.length-1;a>=0;--a)o.push(d[a]);return this}function ve(e,t){for(var s=this,o=[s],d=[],a,n,m,g=-1;s=o.pop();)if(d.push(s),a=s.children)for(n=0,m=a.length;n<m;++n)o.push(a[n]);for(;s=d.pop();)e.call(t,s,++g,this);return this}function be(e,t){let s=-1;for(const o of this)if(e.call(t,o,++s,this))return o}function Ie(e){return this.eachAfter(function(t){for(var s=+e(t.data)||0,o=t.children,d=o&&o.length;--d>=0;)s+=o[d].value;t.value=s})}function Ae(e){return this.eachBefore(function(t){t.children&&t.children.sort(e)})}function Te(e){for(var t=this,s=Ce(t,e),o=[t];t!==s;)t=t.parent,o.push(t);for(var d=o.length;e!==s;)o.splice(d,0,e),e=e.parent;return o}function Ce(e,t){if(e===t)return e;var s=e.ancestors(),o=t.ancestors(),d=null;for(e=s.pop(),t=o.pop();e===t;)d=e,e=s.pop(),t=o.pop();return d}function Pe(){for(var e=this,t=[e];e=e.parent;)t.push(e);return t}function $e(){return Array.from(this)}function Be(){var e=[];return this.eachBefore(function(t){t.children||e.push(t)}),e}function Me(){var e=this,t=[];return e.each(function(s){s!==e&&t.push({source:s.parent,target:s})}),t}function*Fe(){var e=this,t,s=[e],o,d,a;do for(t=s.reverse(),s=[];e=t.pop();)if(yield e,o=e.children)for(d=0,a=o.length;d<a;++d)s.push(o[d]);while(s.length)}function F(e,t){e instanceof Map?(e=[void 0,e],t===void 0&&(t=Le)):t===void 0&&(t=Ne);for(var s=new C(e),o,d=[s],a,n,m,g;o=d.pop();)if((n=t(o.data))&&(g=(n=Array.from(n)).length))for(o.children=n,m=g-1;m>=0;--m)d.push(a=n[m]=new C(n[m])),a.parent=o,a.depth=o.depth+1;return s.eachBefore(De)}function ze(){return F(this).eachBefore(Ee)}function Ne(e){return e.children}function Le(e){return Array.isArray(e)?e[1]:null}function Ee(e){e.data.value!==void 0&&(e.value=e.data.value),e.data=e.data.data}function De(e){var t=0;do e.height=t;while((e=e.parent)&&e.height<++t)}function C(e){this.data=e,this.depth=this.height=0,this.parent=null}C.prototype=F.prototype={constructor:C,count:Se,each:we,eachAfter:ve,eachBefore:xe,find:be,sum:Ie,sort:Ae,path:Te,ancestors:Pe,descendants:$e,leaves:Be,links:Me,copy:ze,[Symbol.iterator]:Fe};function Re(e,t){return e.parent===t.parent?1:2}function $(e){var t=e.children;return t?t[0]:e.t}function B(e){var t=e.children;return t?t[t.length-1]:e.t}function Ue(e,t,s){var o=s/(t.i-e.i);t.c-=o,t.s+=s,e.c+=o,t.z+=s,t.m+=s}function He(e){for(var t=0,s=0,o=e.children,d=o.length,a;--d>=0;)a=o[d],a.z+=t,a.m+=t,t+=a.s+(s+=a.c)}function Ve(e,t,s){return e.a.parent===t.parent?e.a:s}function P(e,t){this._=e,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=t}P.prototype=Object.create(C.prototype);function je(e){for(var t=new P(e,0),s,o=[t],d,a,n,m;s=o.pop();)if(a=s._.children)for(s.children=new Array(m=a.length),n=m-1;n>=0;--n)o.push(d=s.children[n]=new P(a[n],n)),d.parent=s;return(t.parent=new P(null,0)).children=[t],t}function We(){var e=Re,t=1,s=1,o=null;function d(l){var h=je(l);if(h.eachAfter(a),h.parent.m=-h.z,h.eachBefore(n),o)l.eachBefore(g);else{var r=l,u=l,i=l;l.eachBefore(function(k){k.x<r.x&&(r=k),k.x>u.x&&(u=k),k.depth>i.depth&&(i=k)});var f=r===u?1:e(r,u)/2,_=f-r.x,x=t/(u.x+f+_),y=s/(i.depth||1);l.eachBefore(function(k){k.x=(k.x+_)*x,k.y=k.depth*y})}return l}function a(l){var h=l.children,r=l.parent.children,u=l.i?r[l.i-1]:null;if(h){He(l);var i=(h[0].z+h[h.length-1].z)/2;u?(l.z=u.z+e(l._,u._),l.m=l.z-i):l.z=i}else u&&(l.z=u.z+e(l._,u._));l.parent.A=m(l,u,l.parent.A||r[0])}function n(l){l._.x=l.z+l.parent.m,l.m+=l.parent.m}function m(l,h,r){if(h){for(var u=l,i=l,f=h,_=u.parent.children[0],x=u.m,y=i.m,k=f.m,I=_.m,p;f=B(f),u=$(u),f&&u;)_=$(_),i=B(i),i.a=l,p=f.z+k-u.z-x+e(f._,u._),p>0&&(Ue(Ve(f,l,r),l,p),x+=p,y+=p),k+=f.m,x+=u.m,I+=_.m,y+=i.m;f&&!B(i)&&(i.t=f,i.m+=k-y),u&&!$(_)&&(_.t=u,_.m+=x-I,r=l)}return r}function g(l){l.x*=t,l.y=l.depth*s}return d.separation=function(l){return arguments.length?(e=l,d):e},d.size=function(l){return arguments.length?(o=!1,t=+l[0],s=+l[1],d):o?null:[t,s]},d.nodeSize=function(l){return arguments.length?(o=!0,t=+l[0],s=+l[1],d):o?[t,s]:null},d}function T(e,t,s){this.k=e,this.x=t,this.y=s}T.prototype={constructor:T,scale:function(e){return e===1?this:new T(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new T(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};T.prototype;const Xe={setup(){const e=G(),t=ne(),s=oe();return{userDetailsStore:e,skillTreeStore:t,skillTagsStore:s}},data(){return{stageContents:[],isSkillInfoPanelShown:!1,regularLockedUnmasteredNodeSprite:null,radius:0,width:null,height:null,radiusMultiplier:8,skill:{id:null,children:[],isMastered:null,isUnlocked:null,container:null,name:null,description:null,tagIDs:[],sprite:null},isRecentered:!1}},components:{SkillTreeFilter:_e,SkillPanel:re},async mounted(){document.getElementById("reset-button").addEventListener("click",()=>{this.resetTree()}),this.skillTreeStore.userSkills.length==0&&await this.skillTreeStore.getUserSkills(),this.width=window.innerWidth,this.height=window.innerHeight,this.radius=Math.min(this.width,this.height)/2,document.querySelector("#skilltree").appendChild(this.$pixiApp.view);const e=new ae({screenWidth:this.width,screenHeight:this.height,worldWidth:this.width,worldHeight:this.height,events:this.$pixiApp.renderer.events});this.$pixiApp.stage.addChild(e),e.center=new ee(0,0),e.drag().pinch().wheel().decelerate().clampZoom({minScale:.2,maxScale:5});const t=c.from("center-node.png");this.skill={name:"SKILLS",sprite:t,children:this.skillTreeStore.userSkills},this.getAlgorithm()},methods:{getAlgorithm(){var e=[];e=JSON.parse(JSON.stringify(this.skill.children));function t(a){for(var n=a.length;n--;)a[n].type=="sub"&&a.splice(n,1),typeof a[n]<"u"&&a[n].children&&Array.isArray(a[n].children)&&a[n].children.length>0&&t(a[n].children)}t(e);var s={name:null,children:e};const d=We().size([2*Math.PI,this.radius*this.radiusMultiplier]).separation((a,n)=>(a.parent==n.parent?1:2)/a.depth)(F(s));this.drawChart(d)},drawChart(e){for(let g=0;g<e.links().length;g++){const l=new te;l.lineStyle(2,16777215,1);var t=Math.cos(e.links()[g].source.x)*e.links()[g].source.y,s=Math.sin(e.links()[g].source.x)*e.links()[g].source.y;l.moveTo(t,s);var o=Math.cos(e.links()[g].target.x)*e.links()[g].target.y,d=Math.sin(e.links()[g].target.x)*e.links()[g].target.y;l.lineTo(o,d),this.$pixiApp.stage.children[0].addChild(l),this.stageContents.push(l)}const a=this.skill.sprite;a.x=e.x,a.y=e.y,a.anchor.set(.5),this.isRecentered==!1?a.scale.set(.1):a.scale.set(.25),this.$pixiApp.stage.children[0].addChild(a),this.stageContents.push(a);let n=new N(this.skill.name,{fontFamily:"Poppins900",fontSize:40,fill:0,align:"center"});n.anchor.set(.5),n.x=e.x,n.y=e.y,n.scale.x=.2,n.scale.y=.2,this.$pixiApp.stage.children[0].addChild(n),this.stageContents.push(n);function m(g,l,h){l++;for(let[u,i]of g.entries()){for(let p=0;p<e.descendants().length;p++)e.descendants()[p].data.id==i.id&&(i.x=e.descendants()[p].x,i.y=e.descendants()[p].y);let f=new E;f.x=Math.cos(i.x)*i.y,f.y=Math.sin(i.x)*i.y;var r=new c;i.level=="grade_school"?i.is_mastered?r=c.from("images/skill-tree-nodes/grade-school-mastered.png"):i.is_accessible?r=c.from("images/skill-tree-nodes/grade-school-unlocked.png"):r=c.from("images/skill-tree-nodes/grade-school-locked.png"):i.level=="middle_school"?i.is_mastered?r=c.from("images/skill-tree-nodes/middle-school-mastered.png"):i.is_accessible?r=c.from("images/skill-tree-nodes/middle-school-unlocked.png"):r=c.from("images/skill-tree-nodes/middle-school-locked.png"):i.level=="high_school"?i.is_mastered?r=c.from("images/skill-tree-nodes/high-school-mastered.png"):i.is_accessible?r=c.from("images/skill-tree-nodes/middle-school-unlocked.png"):r=c.from("images/skill-tree-nodes/middle-school-locked.png"):i.level=="college"?i.is_mastered?r=c.from("images/skill-tree-nodes/college-mastered.png"):i.is_accessible?r=c.from("images/skill-tree-nodes/middle-school-unlocked.png"):r=c.from("images/skill-tree-nodes/middle-school-locked.png"):i.level=="phd"?i.is_mastered?r=c.from("images/skill-tree-nodes/phd-mastered.png"):i.is_accessible?r=c.from("images/skill-tree-nodes/middle-school-unlocked.png"):r=c.from("images/skill-tree-nodes/middle-school-locked.png"):i.level=="domain"&&(r=c.from("images/skill-tree-nodes/domain.png")),r.width=30,r.height=30,r.anchor.set(.5),f.addChild(r);let _=40;const x=i.skill_name.split(" ");for(let p=0;p<x.length;p++)x[p].length>9&&(_=30);i.skill_name=i.skill_name.replace(/(.*?\s)/g,`$1
`);let y=new N(i.skill_name.toUpperCase(),{fontFamily:"Poppins900",fontSize:_,fill:16777215,align:"center"});y.anchor.set(.5),y.scale.x=.1,y.scale.y=.1,f.addChild(y),r.eventMode="static",y.eventMode="static",r.cursor="pointer",y.cursor="pointer",y.on("pointerdown",p=>{var w={id:i.id,children:i.children,isMastered:i.is_mastered,isUnlocked:i.is_accessible,container:f,name:i.skill_name,description:i.description,tagIDs:[],sprite:r};if(h.skill=w,!h.isSkillInfoPanelShown){let A=function(){h.recenterTree()};h.skill=w,h.showInfoPanel(),document.getElementById("recenterTree").addEventListener("click",A)}}),r.on("pointerdown",p=>{var w={id:i.id,children:i.children,isMastered:i.is_mastered,isUnlocked:i.is_accessible,container:f,name:i.skill_name,description:i.description,tagIDs:[],sprite:r};if(h.skill=w,!h.isSkillInfoPanelShown){let A=function(){h.recenterTree()};h.skill=w,h.showInfoPanel(),document.getElementById("recenterTree").addEventListener("click",A)}}),h.$pixiApp.stage.children[0].addChild(f),h.stageContents.push(f);let k=0,I=0;for(let p=0;p<i.children.length;p++)i.children[p].type!="sub"?k++:I++;for(let p=0;p<i.children.length;p++)if(i.children[p].type=="sub"){let w=new E,A=360/I,X=p-k,z=A*X*Math.PI/180,Y=25*Math.cos(z),K=25*Math.sin(z);w.x=Y,w.y=K;var r=new c;i.level=="grade_school"?i.is_mastered?r=c.from("images/skill-tree-nodes/grade-school-small-mastered.png"):i.is_accessible?r=c.from("images/skill-tree-nodes/grade-school-small-unlocked.png"):r=c.from("images/skill-tree-nodes/grade-school-small-locked.png"):i.level=="middle_school"?i.is_mastered?r=c.from("images/skill-tree-nodes/middle-school-small-mastered.png"):i.is_accessible?r=c.from("images/skill-tree-nodes/middle-school-small-unlocked.png"):r=c.from("images/skill-tree-nodes/middle-school-small-locked.png"):i.level=="high_school"?i.is_mastered?r=c.from("images/skill-tree-nodes/high-school-small-mastered.png"):i.is_accessible?r=c.from("images/skill-tree-nodes/high-school-small-unlocked.png"):r=c.from("images/skill-tree-nodes/high-school-small-locked.png"):i.level=="college"?i.is_mastered?r=c.from("images/skill-tree-nodes/college-smal-mastered.png"):i.is_accessible?r=c.from("images/skill-tree-nodes/college-small-unlocked.png"):r=c.from("images/skill-tree-nodes/college-small-locked.png"):i.level=="phd"&&(i.is_mastered?r=c.from("images/skill-tree-nodes/phd-small-mastered.png"):i.is_accessible?r=c.from("images/skill-tree-nodes/phd-small-unlocked.png"):r=c.from("images/skill-tree-nodes/phd-small-locked.png")),r.width=10,r.height=10,r.anchor.set(.5),w.addChild(r),f.addChild(w)}i.children&&Array.isArray(i.children)&&i.children.length>0&&m(i.children,l,h)}}m(this.skill.children,0,this)},recenterTree(){this.isRecentered=!0,this.radiusMultiplier=1;for(let e=0;e<this.stageContents.length;e++)this.stageContents[e].destroy();this.hideInfoPanel(),this.getAlgorithm()},resetTree(){this.isRecentered=!1,this.radiusMultiplier=4,this.$pixiApp.stage.children[0].removeChildren();const e=c.from("center-node.png");this.skill={name:"SKILLS",sprite:e,children:this.skillTreeStore.userSkills},this.getAlgorithm()},showInfoPanel(){this.isSkillInfoPanelShown||(screen.width>800?document.getElementById("skillInfoPanel").style.width="474px":document.getElementById("skillInfoPanel").style.height="474px",document.getElementById("sidepanel-backdrop").style.display="block",this.isSkillInfoPanelShown=!0,document.getElementById("skillDescription"),document.getElementById("skillLink"))},hideInfoPanel(){this.isSkillInfoPanelShown&&(screen.width>800?document.getElementById("skillInfoPanel").style.width="0px":document.getElementById("skillInfoPanel").style.height="0px",document.getElementById("sidepanel-backdrop").style.display="none",this.isSkillInfoPanelShown=!1)},async filterSkills(e){var t=[];function s(l,h){for(let r=0;r<l.length;r++)t.push(l[r]),s(l[r].children)}s(this.skill.children);var o=0;for(let l=0;l<t.length;l++){let h=t[l];d(h,h.parent,e),t[l].parent=o}function d(l,h,r,u){for(let i=0;i<t.length;i++)if(t[i].id==h){let f=t[i];f.level==r?(o=f.parent,d(l,o,r)):o=f.id}}let a=[];for(var n=0;n<t.length;n++)t[n].level!=e&&a.push(t[n]);for(var n=0;n<a.length;n++)if(a[n].children=[],a[n].parent!=null&&a[n].parent!=0){var m=a[n].parent;for(let h=0;h<a.length;h++)a[h].id==m&&a[h].children.push(a[n])}let g=[];for(var n=0;n<a.length;n++)(a[n].parent==null||a[n].parent==0)&&g.push(a[n]);this.skill.children=g;for(let l=0;l<this.stageContents.length;l++)this.stageContents[l].destroy();this.applyFilter()},applyFilter(){this.$pixiApp.stage.children[0].removeChildren();const e=c.from("center-node.png");this.skill={name:"SKILLS",sprite:e,children:this.skill.children},this.getAlgorithm()}}},Ye=e=>(V("data-v-0a38a163"),e=e(),j(),e),Ke={class:"flex-container skill-tree-container"},Oe={id:"reset-button",class:"btn btn-info"},Je={id:"wrapper"},qe={id:"skilltree"},Ze=Ye(()=>S("div",{id:"sidepanel-backdrop"},null,-1));function Qe(e,t,s,o,d,a){const n=L("SkillTreeFilter"),m=L("SkillPanel");return v(),b("div",Ke,[M(n,{id:"filter"}),H(S("button",Oe,"Reset",512),[[ie,d.isRecentered]]),S("div",Je,[S("div",qe,[M(m,{skill:d.skill},null,8,["skill"])]),Ze])])}const Ge=R(Xe,[["render",Qe],["__scopeId","data-v-0a38a163"]]);const et=S("div",{id:"purple-banner"},null,-1),tt=S("span",null,"Loading...",-1),rt={__name:"SkillTreeView",setup(e){return(t,s)=>(v(),b(U,null,[et,(v(),se(le,null,{default:D(()=>[M(Ge)]),fallback:D(()=>[tt]),_:1}))],64))}};export{rt as default};
