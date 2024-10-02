import{_ as u,a as _,g as v,x as k,o as a,c as d,d as s,t as h,b as m,w,j as p,F as f,p as g,f as b}from"./main-c0fbedf2.js";import{_ as y}from"./institute-collins-2-184bdfcb.js";const S={setup(){const l=_(),t=v(),c=k();return{userDetailsStore:l,skillsStore:t,usersStore:c}},data(){return{skillUrl:this.$route.params.skillUrl,versionNumber:this.$route.params.versionNumber,skillRevision:{},currentVersionNumber:null,revertComment:"",isCurrentVersion:!1,showConfirmModal:!1,showCommentModal:!1,skill:{}}},async mounted(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList(),this.usersStore.users.length==0&&await this.usersStore.getUsers(),await this.getSkill()},methods:{async getSkill(){const l=await fetch("/skills/url/"+this.skillUrl);this.skill=await l.json(),this.currentVersionNumber=this.skill.version_number,await this.getSkillVersion()},async getSkillVersion(){let l="/skill-history/"+this.skill.id+"/"+this.versionNumber;const t=await fetch(l);this.skillRevision=await t.json(),this.skillRevision.version_number==this.currentVersionNumber&&(this.isCurrentVersion=!0);for(let e=0;e<this.skillsStore.skillsList.length;e++)this.skillsStore.skillsList[e].id==this.skillRevision.parent&&(this.skillRevision.parentName=this.skillsStore.skillsList[e].name);for(let e=0;e<this.usersStore.users.length;e++)this.usersStore.users[e].id==this.skillRevision.user_id&&(this.skillRevision.userName=this.usersStore.users[e].username);var c=this.skillRevision.edited_date.replace("T"," ");c=c.replace("Z"," ");let r=c.split(/[- :]/);var i=new Date(Date.UTC(r[0],r[1]-1,r[2],r[3],r[4],r[5])),n={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};this.skillRevision.date=i.toLocaleDateString("en-US",n)},confirmRevert(){this.showConfirmModal=!0},closeModal(){this.showConfirmModal=!1,this.showCommentModal=!1},openCommentModal(){this.closeModal(),this.showCommentModal=!0},revert(){const l={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({comment:this.revertComment})};var t="/skill-history/"+this.skill.id+"/revert-to/"+this.versionNumber;fetch(t,l).then(()=>{this.$router.push("/skills/"+this.skill.url)})}}},o=l=>(g("data-v-0f0dc681"),l=l(),b(),l),x={class:"position-relative d-flex"},M={class:"container show-skill-ctnr"},C={class:"container mt-3"},R={id:"skill-info-container"},V={class:"d-flex flex-column gap-2"},N={id:"skill-image"},z=["src"],L={class:"d-flex flex-column"},D={class:"skill-name"},j={class:"alert alert-warning d-flex",role:"alert"},U=o(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20"},[s("path",{d:"M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"})],-1)),B={key:0,class:"ms-2"},T={key:1,class:"ms-2"},A={key:0,class:"row pe-4 ps-4 ps-md-0 skill-description"},q=o(()=>s("div",{class:"row"},[s("div",{class:"col col-md-8 p-4 p-md-0"},[s("hr",{id:"hr-parent",class:"border border-2 opacity-100"})])],-1)),I={class:"mt-3 d-flex flex-column"},H=o(()=>s("div",{class:"h1-title"},"Mastery Requirements",-1)),F={class:"mastery-requirements"},O=["innerHTML"],P=o(()=>s("p",null," ",-1)),E=o(()=>s("div",{id:"banner"},[s("img",{src:y,class:"img-fluid"})],-1)),J={key:0,class:"modal"},Y={class:"modal-content asking-modal"},Z=o(()=>s("div",{class:"d-flex gap-4"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"grey",width:"45",height:"45"},[s("path",{d:"M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"})]),s("p",null," Are you sure you want to revert the skill to this version? ")],-1)),G={class:"d-flex justify-content-lg-between justify-content-md-end justify-content-between gap-2"},K=o(()=>s("span",{class:"d-none d-md-block"}," No ",-1)),Q=o(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"white",class:"d-md-none"},[s("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"})],-1)),W=[K,Q],X=o(()=>s("span",{class:"d-none d-md-block"}," Yes ",-1)),$=o(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"white",class:"d-md-none"},[s("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})],-1)),ss=[X,$],es={key:1,id:"myModal",class:"modal"},ts={class:"modal-content"},is={class:"d-flex flex-column"},os=o(()=>s("div",{class:"pb-3"},"Please add a comment to explain.",-1)),ls={class:"d-flex justify-content-lg-between justify-content-md-end justify-content-between gap-2 mt-2"},ns=o(()=>s("span",{class:"d-none d-md-block"}," Cancel ",-1)),rs=o(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"white",class:"d-md-none"},[s("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"})],-1)),as=[ns,rs],ds=o(()=>s("span",{class:"d-none d-md-block"}," Submit ",-1)),cs=o(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"white",class:"d-md-none"},[s("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})],-1)),hs=[ds,cs];function ms(l,t,c,r,i,n){return a(),d(f,null,[s("div",x,[s("div",M,[s("div",C,[s("div",R,[s("div",V,[s("div",N,[s("img",{src:i.skillRevision.icon_image?i.skillRevision.icon_image:"/images/skill-avatar/recurso.png",class:"skill-icon"},null,8,z)]),s("div",L,[s("div",D,h(i.skillRevision.name),1),s("div",j,[U,i.isCurrentVersion?(a(),d("span",T," This is the current revision of this page, as edited by "+h(i.skillRevision.userName)+", at "+h(i.skillRevision.date)+". ",1)):(a(),d("span",B," This is an old revision of this page, as edited by "+h(i.skillRevision.userName)+", at "+h(i.skillRevision.date)+". ",1))]),r.userDetailsStore.role=="admin"?(a(),d("div",A,[s("p",null,h(i.skillRevision.description),1)])):m("",!0)])]),s("div",null,[q,s("div",I,[H,s("div",F,[s("div",{innerHTML:i.skillRevision.mastery_requirements},null,8,O)])])])]),!i.isCurrentVersion&&(r.userDetailsStore.role=="admin"||r.userDetailsStore.role=="editor")?(a(),d("button",{key:0,class:"btn purple-btn mt-2",onClick:t[0]||(t[0]=e=>n.confirmRevert())}," Revert to this version ")):m("",!0),P])]),E]),i.showConfirmModal?(a(),d("div",J,[s("div",Y,[Z,s("div",G,[s("button",{type:"button",class:"btn red-btn modal-btn",onClick:t[1]||(t[1]=(...e)=>n.closeModal&&n.closeModal(...e))},W),s("button",{type:"button",class:"btn green-btn modal-btn",onClick:t[2]||(t[2]=(...e)=>n.openCommentModal&&n.openCommentModal(...e))},ss)])])])):m("",!0),i.showCommentModal?(a(),d("div",es,[s("div",ts,[s("div",is,[os,w(s("textarea",{class:"revert-comment",rows:"5",cols:"33",autofocus:"","onUpdate:modelValue":t[3]||(t[3]=e=>i.revertComment=e)},`\r
                `,512),[[p,i.revertComment]])]),s("div",ls,[s("button",{type:"button",class:"btn red-btn modal-btn",onClick:t[4]||(t[4]=(...e)=>n.closeModal&&n.closeModal(...e))},as),s("button",{type:"button",class:"btn green-btn modal-btn",onClick:t[5]||(t[5]=(...e)=>n.revert&&n.revert(...e))},hs)])])])):m("",!0)],64)}const vs=u(S,[["render",ms],["__scopeId","data-v-0f0dc681"]]);export{vs as default};
