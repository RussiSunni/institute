import{_ as C,r as k,o as p,l as w,m,c as _,d as o,t as I,b as x,s as F,T as j,p as $,f as B,u as M,w as R,v as z,e as v,F as N,x as V,a as U,S as q}from"./main-be2cdfd0.js";import{S as A,z as E,s as f,h as T,t as L,a as G,i as y,l as P,c as O}from"./zoom-9a9da70b.js";import{S as W,J as H}from"./JoystickControl-2361f295.js";const J={setup(){},props:["skill","showSkillPanel"],data(){return{}},mounted(){},computed:{},methods:{hideInfoPanel(){this.$parent.showSkillPanel=!1}}},b=t=>($("data-v-62b30510"),t=t(),B(),t),X={key:0,class:"skill-panel-container"},Z={class:"skill-info-panel-top"},Y={class:"closeButtonContainer"},K=b(()=>o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",fill:"#888",width:"20",height:"20"},[o("path",{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"})],-1)),Q=[K],tt={class:"skill-name"},et=["innerHTML"],st={class:"skill-info-panel-bottom"},it={key:0},nt=b(()=>o("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"white"})],-1)),at={key:2,class:"mt-4"},lt=b(()=>o("p",null," This is a larger subject holding a series of more specific skills; click through to the skills within it to master each one! ",-1)),ot=[lt];function rt(t,e,s,h,r,d){const c=k("router-link");return p(),w(j,{name:"skillPanel"},{default:m(()=>{var l,n;return[s.showSkillPanel?(p(),_("div",X,[o("div",Z,[o("div",Y,[o("button",{class:"closebtn",onClick:e[0]||(e[0]=(...a)=>d.hideInfoPanel&&d.hideInfoPanel(...a)),"b-on-hover":"",title:"Close Panel "},Q)]),o("h1",tt,I((l=s.skill)==null?void 0:l.name),1),o("div",{class:"skill-mastery-requirement",innerHTML:s.skill.masteryRequirements},null,8,et)]),o("div",st,[s.skill.type!="domain"?(p(),_("hr",it)):x("",!0),s.skill.type!="domain"?(p(),w(c,{key:1,class:"btn green-btn ms-auto me-2",target:"_blank",id:"skillLink",to:"/skills/"+s.skill.id,"b-on-hover":"",title:"To Skill Details Page"},{default:m(()=>[F("See More  "),nt]),_:1},8,["to"])):x("",!0),((n=s.skill)==null?void 0:n.type)=="domain"?(p(),_("div",at,ot)):x("",!0)])])):x("",!0)]}),_:1})}const dt=C(J,[["render",rt],["__scopeId","data-v-62b30510"]]);const ct={setup(){return{skillTreeStore:M()}},data(){return{width:6e3,height:null,skill:{id:null,children:[],isMastered:null,isUnlocked:null,container:null,name:null,description:null,tagIDs:[],sprite:null,type:null},tree:{},root:{},context:{},hiddenCanvasContext:{},r:1.5,nodes:[],nextCol:1,colToNode:{},isSkillInfoPanelShown:!1,scale:.3,panX:0,panY:0,data:{},d3Zoom:null,isLoading:!0,showSkillPanel:!1}},props:["studentId"],components:{SkillPanel:A,NewSkillPanel:dt,SliderControl:W,JoystickControl:H},async mounted(){await this.skillTreeStore.getStudentSkills(this.studentId),this.height=window.innerHeight,this.skill={name:"SKILLS",sprite:null,children:this.skillTreeStore.studentSkills},this.getAlgorithm();let t=document.getElementById("hidden-canvas");this.hiddenCanvasContext=t.getContext("2d"),t.style.display="none",canvas.addEventListener("click",e=>{this.nodes;var s=e.layerX,h=e.layerY,r=this.hiddenCanvasContext,d=r.getImageData(s,h,1,1).data,c="rgb("+d[0]+","+d[1]+","+d[2]+")",l=this.colToNode[c];l&&(l.renderCol=l.__pickColor,this.skill.name=l.data.skill_name,this.skill.id=l.data.id,this.skill.type=l.data.type,this.skill.masteryRequirements=l.data.mastery_requirements,this.showSkillPanel=!0)}),this.d3Zoom=E().scaleExtent([.1,5]).on("zoom",({transform:e})=>{this.drawTree(e),this.$refs.sliderControl.changeGradientBG()}),f(this.context.canvas).call(this.d3Zoom),this.resetPos(),this.isLoading=!1},methods:{getAlgorithm(){var t=[];t=JSON.parse(JSON.stringify(this.skill.children));function e(n){for(var a=n.length;a--;){if(n[a].type=="super"&&n[a].position!="end"){var i=[],S=[];for(let u=0;u<n[a].children.length;u++)n[a].children[u].type=="sub"?i.push(n[a].children[u]):S.push(n[a].children[u]);var D={skill_name:n[a].skill_name,type:"super",position:"end",children:i};n[a].children=[],n[a].children.push(D);for(let u=0;u<S.length;u++)n[a].children.push(S[u])}typeof n[a]<"u"&&n[a].children&&Array.isArray(n[a].children)&&n[a].children.length>0&&e(n[a].children)}}e(t),this.data={skill_name:"My skills",children:t},this.root=T(this.data);const s=24,h=this.width/(this.root.height+1);this.tree=L().nodeSize([s,h]),this.root.sort((n,a)=>G(n.data.name,a.data.name)),this.tree(this.root);let r=1/0,d=-r;this.root.each(n=>{n.x>d&&(d=n.x),n.x<r&&(r=n.x)});var c=document.getElementById("canvas");c.width=this.width,c.height=this.height,this.context=c.getContext("2d");let l=document.getElementById("hidden-canvas");this.hiddenCanvasContext=l.getContext("2d"),this.drawTree(y)},drawTree(t){this.nodes=this.root.descendants(),this.context.save(),this.hiddenCanvasContext.save(),this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height),this.hiddenCanvasContext.clearRect(0,0,this.hiddenCanvasContext.canvas.width,this.hiddenCanvasContext.canvas.height),this.context.translate(t.x,t.y),this.hiddenCanvasContext.translate(t.x,t.y),this.context.scale(t.k,t.k),this.hiddenCanvasContext.scale(t.k,t.k),this.scale=t.k,this.panX=t.x,this.panY=t.y;const e=this.root.links();this.context.beginPath();for(const s of e)this.drawLink(s);this.context.beginPath();for(const s of this.nodes)s.renderCol?this.context.fillStyle=s.renderCol:this.context.fillStyle="RGBA(105, 105, 105, 0.8)",s.__pickColor===void 0&&(s.__pickColor=this.genColor(),this.colToNode[s.__pickColor]=s),this.hiddenCanvasContext.fillStyle=s.__pickColor,this.drawNode(s);this.context.restore(),this.hiddenCanvasContext.restore()},drawNode(t){let e=this.context,s=this.hiddenCanvasContext;if(t.data.type!="domain"){e.beginPath(),e.arc(t.y,t.x,10,0,2*Math.PI);const h=t.data.level?this.hexColor(t.data.level):"#000";if(t.data.is_mastered==1){e.fillStyle=h,e.fill();const r=this.hexBorderColor(t.data.level);e.lineWidth=2,e.strokeStyle=r,e.stroke()}else e.lineWidth=2,e.fillStyle="#FFF",e.fill(),e.strokeStyle=h,e.stroke()}this.scale>.6&&(t.data.type!="domain"?(e.beginPath(),e.strokeStyle="#FFF",e.lineWidth=4,e.fillStyle="#000",e.font="normal",e.direction="ltr",e.strokeText(t.data.skill_name,t.y+15,t.x+2),e.fillText(t.data.skill_name,t.y+15,t.x+2)):(e.beginPath(),e.strokeStyle="#FFF",e.lineWidth=4,e.fillStyle="#849cab",e.direction="rtl",e.strokeText(t.data.skill_name,t.y-5,t.x+2),e.fillText(t.data.skill_name,t.y-5,t.x+2))),t.data.type!="domain"?(s.beginPath(),s.moveTo(t.y,t.x),s.arc(t.y,t.x,10,0,2*Math.PI),s.fill()):(s.beginPath(),s.moveTo(t.y,t.x-10),s.lineTo(t.y-20/2,t.x-10+20/2),s.lineTo(t.y,t.x-10+20),s.lineTo(t.y+20/2,t.x-10+20/2),s.closePath(),s.lineWidth=2,s.fill(),s.stroke())},drawLink(t){const e=P().x(s=>s.y).y(s=>s.x).context(this.context);t.target.data.is_mastered==1?this.context.lineWidth=4:this.context.lineWidth=1,t.source.data.type=="super"&&t.target.data.position=="end"||t.target.data.type=="sub"?this.context.setLineDash([5,3]):this.context.setLineDash([]),this.context.beginPath(),e(t),this.context.strokeStyle="#000",this.context.stroke()},genColor(){var t=[];this.nextCol<16777215&&(t.push(this.nextCol&255),t.push((this.nextCol&65280)>>8),t.push((this.nextCol&16711680)>>16),this.nextCol+=100);var e="rgb("+t.join(",")+")";return e},async printPDF(){await this.createSVGTree();var t=document.getElementById("linearTree"),e=f(t),s=e.node(),h=new XMLSerializer,r=h.serializeToString(s),d={svg:r,treeType:"linear"},c=JSON.stringify(d),l=new XMLHttpRequest;l.responseType="arraybuffer",l.open("POST","/skilltree/print-pdf",!0),l.setRequestHeader("Content-type","application/json;charset=UTF-8"),l.setRequestHeader("Accept","application/json, text/plain, */*"),l.send(c),l.onload=function(){if(this.readyState==4&&this.status==200){let a=new Blob([l.response],{type:"application/pdf"});const i=window.URL.createObjectURL(a);var n=document.createElement("a");document.body.appendChild(n),n.style="display: none",n.href=i,n.download="My-Skill-Tree.pdf",n.click(),window.URL.revokeObjectURL(i)}}},createSVGTree(){const t=T(this.data),e=15,s=this.width/(t.height+1);L().nodeSize([e,s])(t);let r=1/0,d=-r;t.each(i=>{i.x>d&&(d=i.x),i.x<r&&(r=i.x)});const c=d-r+e*2;let l=O("svg").attr("id","linearTree").attr("width",this.width).attr("height",c).attr("viewBox",[-s/3,r-e,this.width,c]).attr("style","max-width: 100%; height: auto; font: 10px sans-serif;");const n=l.append("g");n.append("g").attr("fill","none").attr("stroke-opacity",1).selectAll().data(t.links()).join("path").attr("d",P().x(i=>i.y).y(i=>i.x)).attr("stroke",function(i){return"#000"}).attr("stroke-width",function(i){return i.target.data.is_mastered==1?8:1.5}).style("stroke-dasharray",function(i){if(i.source.data.type=="super"&&i.target.data.position=="end"||i.target.data.type=="sub")return 5});const a=n.append("g").attr("stroke-linejoin","round").attr("stroke-width",3).selectAll().data(t.descendants()).join("g").attr("transform",i=>`translate(${i.y},${i.x})`);a.append("circle").attr("fill",i=>i.children?"#555":"#000").attr("r",2.5),a.append("text").style("font-weight",function(i){return i.data.type=="super"?"700":"400"}).style("font-style",function(i){if(i.data.type=="sub")return"italic"}).attr("dy","0.31em").attr("x",i=>i.children?-6:6).attr("text-anchor",i=>i.children?"end":"start").text(function(i){return i.data.position=="end"?"":i.data.skill_name}).clone(!0).lower().attr("stroke",function(i){return"white"}),document.querySelector("#SVGskilltree").append(l.node())},resetPos(){f(this.context.canvas).transition().duration(700).call(this.d3Zoom.transform,y.translate(0,0).scale(.3)),this.$refs.sliderControl.showScaleLabel()},zoomInD3(t,e,s){f(this.context.canvas).call(this.d3Zoom.transform,y.translate(e,s).scale(t)),this.$refs.sliderControl.showScaleLabel()},panInD3(){f(this.context.canvas).call(this.d3Zoom.transform,y.translate(this.panX,this.panY).scale(this.scale))},hexColor(t){switch(t){case"college":return"#ab94e3";case"grade_school":return"#36bbaa";case"high_school":return"#3983dd";case"middle_school":return"#97c8f7";case"phd":return"#a48be5"}},hexBorderColor(t){switch(t){case"college":return"#8271ab";case"grade_school":return"#2a9184";case"high_school":return"#2d67ad";case"middle_school":return"#769dc2";case"phd":return"#826eb5"}}}},g=t=>($("data-v-68f55ab7"),t=t(),B(),t),ht={key:0,class:"loading-animation d-flex justify-content-center align-items-center py-4"},ut=g(()=>o("span",{class:"loader"},null,-1)),pt=[ut],_t={id:"wrapper"},ft={id:"canvas",width:"1500",height:"1500",ref:"canvas",tabindex:"1"},xt=g(()=>o("canvas",{id:"hidden-canvas",width:"1500",height:"1500"},null,-1)),kt=g(()=>o("div",{id:"SVGskilltree"},null,-1)),yt=g(()=>o("div",{id:"sidepanel-backdrop"},null,-1));function vt(t,e,s,h,r,d){const c=k("SkillPanel"),l=k("JoystickControl"),n=k("SliderControl");return p(),_(N,null,[o("button",{id:"print-btn",class:"btn btn-info",onClick:e[0]||(e[0]=a=>d.printPDF())}," Print "),o("button",{id:"reset-btn",class:"btn btn-primary",onClick:e[1]||(e[1]=a=>d.resetPos())}," Reset "),r.isLoading==!0?(p(),_("div",ht,pt)):x("",!0),R(o("div",_t,[v(c,{skill:r.skill,showSkillPanel:r.showSkillPanel},null,8,["skill","showSkillPanel"]),o("canvas",ft,null,512),xt,kt,v(l),v(n,{ref:"sliderControl"},null,512),yt],512),[[z,r.isLoading==!1]])],64)}const mt=C(ct,[["render",vt],["__scopeId","data-v-68f55ab7"]]);const gt={setup(){const t=V(),e=U();return{usersStore:t,userDetailsStore:e}},data(){return{studentName:""}},async created(){this.userDetailsStore.role=="instructor"||this.userDetailsStore.role=="admin"?this.instructorId=this.userDetailsStore.userId:(alert("Only admin or instructors can access this page."),this.$router.push("/")),this.usersStore.users.length==0&&await this.usersStore.getUsers();for(let t=0;t<this.usersStore.users.length;t++)this.usersStore.users[t].id==this.$route.params.studentId&&(this.studentName=this.usersStore.users[t].username)},components:{StudentTidyTree:mt}},St={id:"thin-purple-banner"},wt={class:"container"},Ct={class:"row"},bt=o("span",null,"Loading...",-1);function Tt(t,e,s,h,r,d){const c=k("StudentTidyTree");return p(),_(N,null,[o("div",St,[o("div",wt,[o("div",Ct,[o("h1",null,I(r.studentName),1)])])]),(p(),w(q,null,{default:m(()=>[v(c,{studentId:t.$route.params.studentId},null,8,["studentId"])]),fallback:m(()=>[bt]),_:1}))],64)}const $t=C(gt,[["render",Tt]]);export{$t as default};
