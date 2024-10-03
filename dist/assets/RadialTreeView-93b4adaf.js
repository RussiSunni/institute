import{_ as F,a as V,u as U,r as j,o as p,c as f,b,w as C,v as E,d as o,e as z,n as O,F as S,p as q,f as Z,i as T,j as M,k as I,l as G,m as R,S as W,q as D}from"./main-892dbe71.js";import{S as X,z as Y,s as y,t as N,h as L,a as J,b as A,c as K,i as $}from"./zoom-a9378366.js";const Q={setup(){const t=V(),e=U();return{userDetailsStore:t,skillTreeStore:e}},data(){return{width:6e3,height:null,radius:0,radiusMultiplier:96,skill:{id:null,children:[],isMastered:null,isUnlocked:null,container:null,name:null,description:null,tagIDs:[],sprite:null,type:null,subskills:[]},tree:{},root:{},context:{},hiddenCanvasContext:{},scaleMultiplier:.8,startDragOffset:{x:0,y:0},mouseDown:!1,nodes:[],nextCol:1,colToNode:{},isSkillInfoPanelShown:!1,scale:1,panX:0,panY:0,d3Zoom:null,data:{},isLoading:!0,xPos:0,yPos:0,showAnimation:!1,showSkillPanel:!1,userAvatarImg:null,currentZoom:1,resultNode:null}},components:{SkillPanel:X},async mounted(){this.skillTreeStore.userSkillsSubSkillsSeparate.length==0&&await this.skillTreeStore.getUserSkillsSubSkillsSeparate(),this.width=window.innerWidth,this.height=window.innerHeight,this.radius=Math.min(this.width,this.height)/2-30,this.skill={name:"SKILLS",sprite:null,children:this.skillTreeStore.userSkillsSubSkillsSeparate},this.userAvatarImg=new Image,this.userAvatarImg.src=this.userDetailsStore.avatar,this.userAvatarImg.onload=()=>{this.getAlgorithm(),this.d3Zoom=Y().scaleExtent([.05,8]).on("zoom",({transform:t})=>{this.currentZoom=t.k,this.zoomed(t)}),y(this.context.canvas).call(this.d3Zoom),this.defaultPosition()},canvas.addEventListener("click",async t=>{this.nodes;var e=t.layerX,a=t.layerY;this.xPos=e,this.yPos=a,this.showAnimation=!0,setTimeout(()=>{this.showAnimation=!1},500);var r=this.hiddenCanvasContext,l=r.getImageData(e,a,1,1).data,s="rgb("+l[0]+","+l[1]+","+l[2]+")",h=this.colToNode[s];if(h){h.renderCol=h.__pickColor,this.skill.name=h.data.skill_name,this.skill.id=h.data.id,this.skill.type=h.data.type,this.skill.subskills=h.data.subskills;const i=await(await fetch("/skills/mastery-requirements-and-url/"+this.skill.id)).json();this.skill.masteryRequirements=i.mastery_requirements,this.skill.url=i.url,this.showSkillPanel=!0}}),this.isLoading=!1},methods:{getAlgorithm(){var t=[];t=JSON.parse(JSON.stringify(this.skill.children)),this.data={skill_name:"",children:t};const e=N().size([2*Math.PI,this.radius*this.radiusMultiplier]).separation((l,s)=>(l.parent==s.parent?1:2)/l.depth);this.root=e(L(this.data).sort((l,s)=>J(l.data.name,s.data.name)));var a=document.getElementById("canvas");a.width=this.width,a.height=this.height,this.context=a.getContext("2d"),this.context.fillStyle="#1e293b",this.context.fillRect(0,0,this.width,this.height);let r=document.getElementById("hidden-canvas");this.hiddenCanvasContext=r.getContext("2d",{willReadFrequently:!0}),r.style.display="none",this.context.translate(this.width/2,this.height/2),this.hiddenCanvasContext.translate(this.width/2,this.height/2),this.drawTree()},drawTree(){this.nodes=this.root.descendants();const t=this.root.links();this.context.beginPath();for(const e of t)this.drawLink(e);this.context.beginPath();for(const e of this.nodes)e.renderCol?this.context.fillStyle=e.renderCol:this.context.fillStyle="RGBA(105, 105, 105, 0.8)",e.__pickColor===void 0&&(e.__pickColor=this.genColor(),this.colToNode[e.__pickColor]=e),this.hiddenCanvasContext.fillStyle=e.__pickColor,this.drawNode(e);this.context.fillStyle="transparent",this.context.save(),this.context.beginPath(),this.context.moveTo(0,0),this.context.arc(0,0,20,0,2*Math.PI),this.context.stroke(),this.context.clip(),this.context.drawImage(this.userAvatarImg,-20,-20,40,40),this.context.restore()},rotateNode(t,e,a,r,l){var s=Math.PI/180*l,h=Math.cos(s),n=Math.sin(s),i=h*(a-t)+n*(r-e)+t,d=h*(r-e)-n*(a-t)+e;return[i,d]},drawNode(t){var k;let e=this.context,a=this.hiddenCanvasContext,r=Math.cos(t.x)*t.y,l=Math.sin(t.x)*t.y,s=h(0,0,r,l,90);function h(c,u,g,_,x){var v=Math.PI/180*x,m=Math.cos(v),P=Math.sin(v),B=m*(g-c)+P*(_-u)+c,H=m*(_-u)-P*(g-c)+u;return[B,H]}let n;t.data.type=="domain"?n="black":t.data.level=="grade_school"?n="#40E0D0":t.data.level=="middle_school"?n="#33A133":t.data.level=="high_school"?n="#FFD700":t.data.level=="college"?n="#FFA500":t.data.level=="phd"&&(n="#FF0000");let i;t.depth==1?i=20:i=10,t.data.type!=="domain"&&(e.beginPath(),e.moveTo(s[0],s[1]),e.arc(s[0],s[1],i,0,2*Math.PI),e.fillStyle=n,e.fill());function d(c,u,g,_){var x=_-u,v=g-c,m=Math.atan2(x,v);return m}var d=d(0,0,s[0],s[1]);if(this.scale>.6){e.save(),e.translate(s[0],s[1]),e.rotate(d);let c=0,u=0;2*Math.PI/3>Math.abs(d)>=Math.PI/3?(u=s[0]>0?15:-15,c=0):(c=s[0]>0?15:-15,u=0);let g=t.data.skill_name;t.data.skill_name===((k=this.resultNode)==null?void 0:k.data.skill_name)&&(g="▶ "+g+" ◀"),s[0]<0?(e.textAlign=t.data.level!=="domain"?"end":"start",e.rotate(Math.PI)):e.textAlign=t.data.level!=="domain"?"start":"end",e.strokeStyle="#1e293b",e.lineWidth=4,e.strokeText(t.data.skill_name,c,u),e.fillStyle=this.textFillColor(t.data.skill_name,t.data.level),e.fillText(g,c,u),e.restore()}if(a.beginPath(),a.moveTo(s[0],s[1]),a.arc(s[0],s[1],i,0,2*Math.PI),a.fill(),t.data.type=="super")for(let c=0;c<t.data.subskills.length;c++){let x=360/t.data.subskills.length*c*Math.PI/180,v=20*Math.cos(x),m=20*Math.sin(x);e.beginPath(),e.moveTo(s[0],s[1]),e.arc(s[0]+v,s[1]+m,5,0,2*Math.PI),e.fillStyle=n,e.fill(),a.beginPath(),a.moveTo(s[0],s[1]),a.arc(s[0]+v,s[1]+m,5,0,2*Math.PI),a.fill()}},textFillColor(t,e){var a;return t===((a=this.resultNode)==null?void 0:a.data.skill_name)?"#FFAE00":e==="domain"?"#FFF":"#afb9c9"},drawLink(t){const e=A().angle(r=>r.x).radius(r=>r.y).context(this.context);let a="#71717a";t.target.data.is_mastered==1?(this.context.lineWidth=4+parseInt(3*(1/this.currentZoom)),a="#ffffff"):this.context.lineWidth=parseInt(3*(1/this.currentZoom)),this.context.beginPath(),e(t),this.context.strokeStyle=a,this.context.stroke()},genColor(){var t=[];this.nextCol<16777215&&(t.push(this.nextCol&255),t.push((this.nextCol&65280)>>8),t.push((this.nextCol&16711680)>>16),this.nextCol+=100);var e="rgb("+t.join(",")+")";return e},zoomed(t){this.scale=t.k,this.context.save(),this.hiddenCanvasContext.save(),this.context.fillStyle="#1e293b",this.context.fillRect(this.width/2*-1,this.height/2*-1,this.width,this.height),this.hiddenCanvasContext.clearRect(this.width/2*-1,this.height/2*-1,this.width,this.height),this.context.translate(t.x-this.width/2,t.y-this.height/2),this.context.scale(t.k,t.k),this.hiddenCanvasContext.translate(t.x-this.width/2,t.y-this.height/2),this.hiddenCanvasContext.scale(t.k,t.k),this.drawTree(),this.context.fill(),this.context.restore(),this.hiddenCanvasContext.fill(),this.hiddenCanvasContext.restore()},async printPDF(){await this.getPrintAlgorithm();var t=document.getElementById("radialTree"),e=y(t),a=e.node(),r=new XMLSerializer,l=r.serializeToString(a),s={svg:l,treeType:"radial"},h=JSON.stringify(s),n=new XMLHttpRequest;n.responseType="arraybuffer",n.open("POST","/skilltree/print-pdf",!0),n.setRequestHeader("Content-type","application/json;charset=UTF-8"),n.setRequestHeader("Accept","application/json, text/plain, */*"),n.send(h),n.onload=function(){if(this.readyState==4&&this.status==200){let d=new Blob([n.response],{type:"application/pdf"});const k=window.URL.createObjectURL(d);var i=document.createElement("a");document.body.appendChild(i),i.style="display: none",i.href=k,i.download="My-Skill-Tree.pdf",i.click(),window.URL.revokeObjectURL(k)}}},async getPrintAlgorithm(){await this.skillTreeStore.getUserSkills();const t={name:"SKILLS",sprite:null,children:this.skillTreeStore.userSkills};var e=[];e=JSON.parse(JSON.stringify(t.children));function a(l){for(var s=l.length;s--;){if(l[s].type=="super"&&l[s].position!="end"){var h=[],n=[];for(let d=0;d<l[s].children.length;d++)l[s].children[d].type=="sub"?h.push(l[s].children[d]):n.push(l[s].children[d]);var i={skill_name:l[s].skill_name,type:"super",position:"end",children:h};l[s].children=[],l[s].children.push(i);for(let d=0;d<n.length;d++)l[s].children.push(n[d])}typeof l[s]<"u"&&l[s].children&&Array.isArray(l[s].children)&&l[s].children.length>0&&a(l[s].children)}}a(e);const r={skill_name:"My skills",children:e};await this.createSVGTree(r)},async createSVGTree(t){const r=13200.000000000002,l=24e3*.59,h=N().size([2*Math.PI,this.radius*50]).separation((i,d)=>(i.parent==d.parent?1:2)/i.depth)(L(t));let n=K("svg").attr("id","radialTree").attr("width",24e3).attr("height",24e3).attr("viewBox",[-r,-l,24e3,24e3]).attr("style","max-width: 100%; height: auto; font: 10px sans-serif;");n.append("g").attr("fill","none").attr("stroke-opacity",1).selectAll().data(h.links()).join("path").attr("d",A().angle(i=>i.x).radius(i=>i.y)).attr("stroke",function(i){return"#000"}).attr("stroke-width",function(i){return i.target.data.is_mastered==1?4:1.5}).style("stroke-dasharray",function(i){if(i.source.data.type=="super"&&i.target.data.position=="end"||i.target.data.type=="sub")return 5}),n.append("g").selectAll().data(h.descendants()).join("circle").attr("transform",i=>`rotate(${i.x*180/Math.PI-90}) translate(${i.y},0)`).attr("fill","#000").attr("r",2.5),n.append("g").attr("stroke-linejoin","round").attr("stroke-width",1).selectAll().data(h.descendants()).join("text").attr("transform",i=>`rotate(${i.x*180/Math.PI-90}) translate(${i.y},0) rotate(${i.x>=Math.PI?180:0})`).attr("dy","0.31em").attr("x",i=>i.x<Math.PI==!i.children?6:-6).attr("text-anchor",i=>i.x<Math.PI==!i.children?"start":"end").style("font-weight",function(i){return i.data.type=="super"?"700":"400"}).style("font-style",function(i){if(i.data.type=="sub")return"italic"}).style("paint-order",function(i){return"stroke"}).clone(!0).lower().style("stroke-width",function(i){return"1px"}).text(function(i){return i.data.position=="end"?"":i.data.skill_name}),document.querySelector("#SVGskilltree").append(n.node())},defaultPosition(){y(this.context.canvas).transition().duration(300).call(this.d3Zoom.transform,$.translate(this.width/2,this.height/2).scale(.08))},findNodeWithName(t){let e=[];return this.root.each(function(a){t.length<3?a.data.skill_name.toLowerCase().substring(0,t.length)===t&&e.push(a):a.data.skill_name.toLowerCase().includes(t)&&e.push(a)}),e},goToLocation(t){this.resultNode=t;let e=Math.cos(t.x)*t.y,a=Math.sin(t.x)*t.y,r=this.rotateNode(0,0,e,a,90);const l=-r[0]*this.scale+window.innerWidth/(2*this.scale)*this.scale,s=-r[1]*this.scale+window.innerHeight/(2*this.scale)*this.scale;y(this.context.canvas).transition().duration(2e3).call(this.d3Zoom.transform,$.translate(l,s).scale(this.scale))}}},w=t=>(q("data-v-c12f4be2"),t=t(),Z(),t),tt={key:0,class:"loading-animation d-flex justify-content-center align-items-center py-4"},et=w(()=>o("span",{class:"loader"},null,-1)),st=[et],it={id:"wrapper"},lt=w(()=>o("canvas",{id:"canvas",width:"1500",height:"1500"},null,-1)),at=w(()=>o("canvas",{id:"hidden-canvas",width:"1500",height:"1500"},null,-1)),nt=w(()=>o("div",{id:"SVGskilltree"},null,-1)),ot=w(()=>o("div",{id:"sidepanel-backdrop"},null,-1));function rt(t,e,a,r,l,s){const h=j("SkillPanel");return p(),f(S,null,[l.isLoading==!0?(p(),f("div",tt,st)):b("",!0),C(o("div",it,[z(h,{skill:l.skill,showSkillPanel:l.showSkillPanel},null,8,["skill","showSkillPanel"]),l.showAnimation?(p(),f("div",{key:0,style:O({top:`${l.yPos}px`,left:`${l.xPos}px`}),class:"click-animation"},null,4)):b("",!0),lt,at,nt,ot],512),[[E,l.isLoading==!1]])],64)}const ht=F(Q,[["render",rt],["__scopeId","data-v-c12f4be2"]]);const dt={setup(){},data(){return{searchText:"",lastChooseResult:""}},components:{RadialTree:ht},methods:{handleChooseResult(t){this.searchText=t.data.skill_name,this.lastChooseResult=t.data.skill_name,this.$refs.childComponent.goToLocation(t)}},computed:{findNodeResults(){return this.lastChooseResult===this.searchText?[]:this.searchText.length>0?(this.$refs.childComponent.showSkillPanel=!1,this.$refs.childComponent.findNodeWithName(this.searchText.toLocaleLowerCase()).map(a=>{const r=new RegExp(`(${this.searchText})`,"gi"),l=a.data.skill_name.replace(r,'<span class="hightLight">$1</span>');return{...a,highlightedResult:l}})):[]}},watch:{searchText:{handler(t){t===""&&(this.$refs.childComponent.showSkillPanel=!1,this.$refs.childComponent.defaultPosition())}}}},ct={id:"legend",class:"collapsible-tree-legend container-fluid p-2 position-relative"},ut={class:"position-absolute legend-div"},pt={class:"mobile-legend"},ft={class:"legend row"},gt=D('<div class="col-8"><div class="col"><span class="grade-school"></span>Grade school </div><div class="col"><span class="middle-school"></span> Middle school </div><div class="col"><span class="high-school"></span> High school </div><div class="col"><span class="college"></span> College </div><div class="col"><span class="phd"></span> PHD</div></div>',1),vt={class:"col-4 d-flex flex-column align-items-end"},mt={class:"search-mobile-row"},xt={class:"d-flex align-items-center p-1"},kt=o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"15",height:"15",fill:"#5f6368",class:"me-2"},[o("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"})],-1),_t={class:"position-relative"},wt={key:0,class:"search-results"},yt=["onClick","innerHTML"],St={class:"tablet-and-up-legend"},bt={class:"legend row"},Ct=D('<div class="col d-flex align-items-center"><span class="grade-school"></span>Grade school </div><div class="col d-flex align-items-center"><span class="middle-school"></span> Middle school </div><div class="col d-flex align-items-center"><span class="high-school"></span> High school </div><div class="col d-flex align-items-center"><span class="college"></span> College </div><div class="col d-flex align-items-center"><span class="phd"></span> PHD </div>',5),Pt={class:"col-12 col-lg-4 d-flex justify-content-end align-items-center gap-2 mt-0 mt-md-2 mt-lg-0"},Tt={class:"d-flex align-items-center p-1"},Mt=o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"15",height:"15",fill:"#5f6368",class:"me-2"},[o("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"})],-1),It={class:"position-relative"},Rt={key:0,class:"search-results"},Nt=["onClick","innerHTML"],Lt=o("div",{id:"thin-purple-banner"},null,-1),At=o("span",null,"Loading...",-1);function $t(t,e,a,r,l,s){const h=j("RadialTree");return p(),f(S,null,[o("div",ct,[o("div",ut,[o("div",pt,[o("div",ft,[gt,o("div",vt,[o("button",{id:"print-btn",class:"btn btn-info",onClick:e[0]||(e[0]=n=>t.$refs.childComponent.printPDF())}," Print "),o("button",{id:"reset-btn",class:"btn btn-primary",onClick:e[1]||(e[1]=n=>t.resetPos())}," Reset ")])]),o("div",mt,[o("div",{class:T(["search-bar mt-2 ms-2 pe-3",s.findNodeResults.length>0&&"have-results"])},[o("div",xt,[kt,C(o("input",{id:"skill-tree-search-text",type:"text",class:"skill-tree-input",placeholder:"Skill Name","onUpdate:modelValue":e[2]||(e[2]=n=>l.searchText=n)},null,512),[[M,l.searchText]])]),o("div",_t,[s.findNodeResults.length?(p(),f("div",wt,[(p(!0),f(S,null,I(s.findNodeResults,n=>(p(),f("button",{onClick:i=>s.handleChooseResult(n),class:"result-row",innerHTML:n.highlightedResult},null,8,yt))),256))])):b("",!0)])],2)])]),o("div",St,[o("div",bt,[Ct,o("div",Pt,[o("div",{class:T(["search-bar w-100",s.findNodeResults.length>0&&"have-results"])},[o("div",Tt,[Mt,C(o("input",{id:"skill-tree-search-text",type:"text",class:"skill-tree-input",placeholder:"Skill Name","onUpdate:modelValue":e[3]||(e[3]=n=>l.searchText=n)},null,512),[[M,l.searchText]])]),o("div",It,[s.findNodeResults.length?(p(),f("div",Rt,[(p(!0),f(S,null,I(s.findNodeResults,n=>(p(),f("button",{onClick:i=>s.handleChooseResult(n),class:"result-row",innerHTML:n.highlightedResult},null,8,Nt))),256))])):b("",!0)])],2),o("button",{id:"print-btn",class:"btn btn-info me-3",onClick:e[4]||(e[4]=n=>t.$refs.childComponent.printPDF())}," Print ")])])])])]),Lt,(p(),G(W,null,{default:R(()=>[z(h,{ref:"childComponent"},null,512)]),fallback:R(()=>[At]),_:1}))],64)}const zt=F(dt,[["render",$t]]);export{zt as default};
