import{_ as k,u as x,S as w,r as b,o as m,c as y,b as g,a as v,p as T,d as R,e as M,f as _,g as I,F as z}from"./main-f195e9a3.js";import{u as P}from"./SkillTreeStore-6c23fa41.js";import{u as j,S as L}from"./SkillTreeFilter-2cd1e75a.js";import{S as $}from"./fontfaceobserver.standalone-7718841d.js";import"./transform-9f729428.js";import{l as A,z as N,s as B}from"./zoom-d4b7039c.js";import{h as U}from"./index-0536990b.js";import{c as O}from"./create-94a19cff.js";function F(t,r){return t.parent===r.parent?1:2}function q(t){return t.reduce(D,0)/t.length}function D(t,r){return t+r.x}function E(t){return 1+t.reduce(V,0)}function V(t,r){return Math.max(t,r.y)}function X(t){for(var r;r=t.children;)t=r[0];return t}function H(t){for(var r;r=t.children;)t=r[r.length-1];return t}function J(){var t=F,r=1,l=1,u=!1;function s(i){var d,c=0;i.eachAfter(function(n){var f=n.children;f?(n.x=q(f),n.y=E(f)):(n.x=d?c+=t(n,d):0,n.y=0,d=n)});var o=X(i),p=H(i),e=o.x-t(o,p)/2,a=p.x+t(p,o)/2;return i.eachAfter(u?function(n){n.x=(n.x-i.x)*r,n.y=(i.y-n.y)*l}:function(n){n.x=(n.x-e)/(a-e)*r,n.y=(1-(i.y?n.y/i.y:1))*l})}return s.separation=function(i){return arguments.length?(t=i,s):t},s.size=function(i){return arguments.length?(u=!1,r=+i[0],l=+i[1],s):u?null:[r,l]},s.nodeSize=function(i){return arguments.length?(u=!0,r=+i[0],l=+i[1],s):u?[r,l]:null},s}const Y={setup(){const t=x(),r=P(),l=j();return{userDetailsStore:t,skillTreeStore:r,skillTagsStore:l}},data(){return{stageContents:[],isSkillInfoPanelShown:!1,width:null,height:null,radiusMultiplier:1,firstLevelNodeSize:100,regularNodeSize:50,subSkillRadius:50,skill:{id:null,children:[],isMastered:null,isUnlocked:null,container:null,name:null,description:null,tagIDs:[],sprite:null},isRecentered:!1}},components:{SkillTreeFilter:L,SkillPanel:$},async mounted(){this.skillTreeStore.userSkills.length==0&&await this.skillTreeStore.getUserSkills(),this.width=2e4,this.height=2e4,this.radius=Math.min(this.width,this.height)/2;const t=w.from("center-node.png");this.skill={name:"SKILLS",sprite:t,children:this.skillTreeStore.userSkills},this.getAlgorithm()},methods:{getAlgorithm(){var t=[];t=JSON.parse(JSON.stringify(this.skill.children));function r(e){for(var a=e.length;a--;){if(e[a].type=="super"&&e[a].position!="end"){var n=[],f=[];for(let h=0;h<e[a].children.length;h++)e[a].children[h].type=="sub"?n.push(e[a].children[h]):f.push(e[a].children[h]);var S={skill_name:e[a].skill_name,type:"super",position:"end",children:n};e[a].children=[],e[a].children.push(S);for(let h=0;h<f.length;h++)e[a].children.push(f[h])}typeof e[a]<"u"&&e[a].children&&Array.isArray(e[a].children)&&e[a].children.length>0&&r(e[a].children)}}r(t);var l={name:null,children:t};const s=J().size([2*Math.PI,this.radius*this.radiusMultiplier]).separation((e,a)=>(e.parent==a.parent,1/e.depth))(U(l)),i=this.width*.5,d=this.height*.52,c=O("svg").attr("id","radialTree").attr("width",this.width).attr("height",this.height).attr("viewBox",[-i,-d,this.width,this.height]).attr("style","width: 100%; height: auto; font: 10px sans-serif;"),o=c.append("g");o.append("g").attr("fill","none").attr("stroke","#000").attr("stroke-opacity",1).selectAll().data(s.links()).join("path").attr("d",A().angle(e=>e.x).radius(e=>e.y)).attr("stroke-width",function(e){return e.target.data.is_mastered==1?8:2}).style("stroke-dasharray",function(e){if(e.source.data.type=="super"&&e.target.data.position=="end"||e.target.data.type=="sub")return 5}),o.append("g").selectAll().data(s.descendants()).join("circle").attr("transform",e=>`rotate(${e.x*180/Math.PI-90}) translate(${e.y},0)`).attr("fill",function(e){if(e.depth==0)return"lightgreen";if(e.data.type=="domain")return"orange";if(e.data.level=="grade_school")return"yellow";if(e.data.level=="middle_school")return"lightblue";if(e.data.level=="high_school")return"green";if(e.data.level=="college")return"red";if(e.data.level=="phd")return"purple"}).attr("r",function(e){return e.depth==0?50:e.data.type=="domain"?20:5}),o.append("g").attr("stroke-linejoin","round").attr("stroke-width",3).selectAll().data(s.descendants()).join("text").attr("transform",e=>`rotate(${e.x*180/Math.PI-90}) translate(${e.y},0) rotate(${e.x>=Math.PI?180:0})`).attr("dy","0.31em").attr("x",e=>e.x<Math.PI==!e.children?6:-6).attr("text-anchor",e=>e.x<Math.PI==!e.children?"start":"end").attr("paint-order","stroke").attr("stroke","white").attr("fill","currentColor").style("font-weight",function(e){return e.data.type=="super"?"700":"400"}).style("font-style",function(e){if(e.data.type=="sub")return"italic"}).text(function(e){return e.data.position=="end"?"":e.data.skill_name}),c.call(N().extent([[0,0],[this.width,this.height]]).scaleExtent([1e-4,20]).on("zoom",p));function p({transform:e}){o.attr("transform",e)}document.querySelector("#skilltree").append(c.node())},printPDF(){var t=document.getElementById("radialTree"),r=B(t),l=r.node(),u=new XMLSerializer,s=u.serializeToString(l),i={svg:s,treeType:"radial"},d=JSON.stringify(i),c=new XMLHttpRequest;c.responseType="arraybuffer",c.open("POST","/skilltree/print-pdf",!0),c.setRequestHeader("Content-type","application/json;charset=UTF-8"),c.setRequestHeader("Accept","application/json, text/plain, */*"),c.send(d),c.onload=function(){if(this.readyState==4&&this.status==200){let p=new Blob([c.response],{type:"application/pdf"});const e=window.URL.createObjectURL(p);var o=document.createElement("a");document.body.appendChild(o),o.style="display: none",o.href=e,o.download="My-Skill-Tree.pdf",o.click(),window.URL.revokeObjectURL(e)}}}}},K=t=>(T("data-v-efbdbe7d"),t=t(),R(),t),W={class:"flex-container skill-tree-container"},G={id:"wrapper"},Q={id:"skilltree"},Z=K(()=>g("div",{id:"sidepanel-backdrop"},null,-1));function C(t,r,l,u,s,i){const d=b("SkillPanel");return m(),y("div",W,[g("div",G,[g("div",Q,[v(d,{skill:s.skill},null,8,["skill"])]),Z])])}const ee=k(Y,[["render",C],["__scopeId","data-v-efbdbe7d"]]);const te=g("div",{id:"purple-banner"},null,-1),re=g("span",null,"Loading...",-1),de={__name:"RadialClusterTreeView",setup(t){return(r,l)=>(m(),y(z,null,[te,(m(),M(I,null,{default:_(()=>[v(ee)]),fallback:_(()=>[re]),_:1}))],64))}};export{de as default};
