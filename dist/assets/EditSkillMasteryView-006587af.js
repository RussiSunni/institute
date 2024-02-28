import{u as k}from"./UsersStore-c71c1a72.js";import{u as p}from"./SkillsStore-49f0ef28.js";import{u as S}from"./UserSkillsStore-cbb6175e.js";import{_ as f,o as c,c as d,a as s,w as r,v as u,F as h,r as g,d as m,Q as _,t as v,p as x,b}from"./main-a228213a.js";import{_ as y}from"./edit-mastery-skill-banner-9e7c0291.js";import{_ as w}from"./recurso-69-12793b41.js";const M={setup(){const l=k(),e=p(),a=S();return{usersStore:l,skillsStore:e,userSkillsStore:a}},data(){return{user:{id:null,username:null,avatar:null},inputText:"",suggestSkills:[],selectedSkillId:null,checkUnlock:!1,checkMastered:!1,showModal:!1}},async created(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList(),this.usersStore.users.length<1&&await this.usersStore.getUsers();const l=this.$route.params.id;this.usersStore.users.forEach(e=>{e.id==l&&(this.user.id=e.id,this.user.username=e.username,this.user.avatar=e.avatar)}),await this.userSkillsStore.getUnnestedList(this.user.id)},methods:{getReferenceSkill(){this.inputText.length<2?this.suggestSkills=[]:this.suggestSkills=this.skillsStore.skillsList.filter(l=>l.name.toLowerCase().includes(this.inputText.toLowerCase()))},handleChooseSuggestSkill(l){this.inputText=l.name,this.selectedSkillId=l.id,this.suggestSkills=[],this.checkMastered=!1,this.checkUnlock=!1;const e=this.userSkillsStore.unnestedList.find(a=>a.id==l.id);e&&(e.is_accessible==="1"&&(this.checkUnlock=!0),e.is_mastered==="1"&&(this.checkMastered=!0))},async handleSubmitForm(){this.checkUnlock&&await this.userSkillsStore.MakeAccessible(this.user.id,this.selectedSkillId),this.checkMastered&&await this.userSkillsStore.MakeMastered(this.user.id,this.selectedSkillId),this.showModal=!0,await this.userSkillsStore.getUnnestedList(this.user.id),this.inputText="",this.checkMastered=!1,this.checkUnlock=!1}}},o=l=>(x("data-v-a5d1e3a8"),l=l(),b(),l),U=o(()=>s("div",{id:"banner"},[s("img",{src:y,class:"image-fluid"})],-1)),C={id:"main-container",class:"container"},I=o(()=>s("div",{class:"row"},[s("div",{class:"col-10 d-flex align-items-end"},[s("h2",{id:"header-tile"},"Edit Skill Mastery"),s("img",{src:w,id:"header-icon"})])],-1)),T={id:"edit-skill-mastery",class:"container-fluid mt-5 p-3 p-xl-5 pt-5"},L={class:"row"},V={class:"col-12 col-md-4 col-xl-2 d-flex align-content-center"},E=["src"],F={class:"col-12 col-md-6 col-xl-3 mt-5 mt-xl-0"},R={class:"mb-3",id:"student-form-name"},B=o(()=>s("label",{class:"form-label"},"Student Name:",-1)),D={class:"row mt-3 mt-md-4 mt-xl-5"},N={class:"col col-md-10 col-xl-5 mb-3 mt-md-3 mt-xl-5 position-relative"},A={key:0,id:"suggest-skills",class:"flex flex-column position-absolute"},j=["onClick"],H={class:"row mt-2"},O={class:"col col-md-10 col-xl-5 row pe-0"},Q={class:"col"},Y={class:"control control-checkbox"},q=o(()=>s("span",{class:"my-auto mx-2 me-4"},"Unlocked",-1)),z=o(()=>s("div",{class:"control_indicator"},null,-1)),G={class:"col"},J={class:"control control-checkbox"},K=o(()=>s("span",{class:"my-auto mx-2"},"Mastered",-1)),P=o(()=>s("div",{class:"control_indicator"},null,-1)),W={class:"col pe-0"},X=o(()=>s("p",null," ",-1)),Z=o(()=>s("hr",{class:"mt-3 mb-5 d-none d-md-block"},null,-1)),$={key:0},ss={id:"myModal",class:"modal"},es={class:"modal-content"},ts=o(()=>s("p",null,"Yours Change Has Been Applied",-1)),ls={style:{display:"flex","justify-content":"centers"}};function is(l,e,a,os,i,n){return c(),d(h,null,[U,s("div",C,[I,s("div",T,[s("div",L,[s("div",V,[s("img",{class:"avatar",src:this.user.avatar},null,8,E)]),s("div",F,[s("div",R,[B,r(s("input",{class:"form-control",type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>this.user.username=t),disabled:""},null,512),[[u,this.user.username]])])])]),s("div",D,[s("div",N,[r(s("input",{id:"skill-input","onUpdate:modelValue":e[1]||(e[1]=t=>i.inputText=t),onInput:e[2]||(e[2]=(...t)=>n.getReferenceSkill&&n.getReferenceSkill(...t)),placeholder:"type skill name"},null,544),[[u,i.inputText]]),i.suggestSkills.length>0?(c(),d("div",A,[(c(!0),d(h,null,g(i.suggestSkills,t=>(c(),d("div",{class:"suggest-option",onClick:ns=>n.handleChooseSuggestSkill(t)},v(t.name),9,j))),256))])):m("",!0)])]),s("div",H,[s("div",O,[s("div",Q,[s("label",Y,[q,r(s("input",{type:"checkbox",name:"nodeType",id:"regularSkillRadio",value:"regular","onUpdate:modelValue":e[3]||(e[3]=t=>i.checkUnlock=t)},null,512),[[_,i.checkUnlock]]),z])]),s("div",G,[s("label",J,[K,r(s("input",{type:"checkbox",name:"nodeType",id:"superSkillRadio",value:"super","onUpdate:modelValue":e[4]||(e[4]=t=>i.checkMastered=t)},null,512),[[_,i.checkMastered]]),P])]),s("div",W,[s("button",{id:"submit-btn",class:"btn purple-btn",onClick:e[5]||(e[5]=(...t)=>n.handleSubmitForm&&n.handleSubmitForm(...t))}," Submit ")])])]),X]),Z]),i.showModal?(c(),d("div",$,[s("div",ss,[s("div",es,[ts,s("div",ls,[s("button",{type:"button",class:"btn btn-success mx-auto",onClick:e[6]||(e[6]=t=>i.showModal=!1)}," Okay ")])])])])):m("",!0)],64)}const ms=f(M,[["render",is],["__scopeId","data-v-a5d1e3a8"]]);export{ms as default};
