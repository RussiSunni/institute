import{_ as C}from"./edit-mastery-skill-banner-9e7c0291.js";import{u as w}from"./SkillsStore-3e96e654.js";import{u as L}from"./TagsStore-5803c33c.js";import{u as x}from"./SkillTagsStore-71fc70f4.js";import{_ as I,e as T,o,c as n,a as s,w as c,v as m,d as h,L as D,i as k,t as p,F as g,r as v,N as P,U as f,h as b,g as V,p as R,b as F,J as S}from"./main-f2534bd2.js";import{_ as H}from"./recurso-69-12793b41.js";const M={setup(){const t=w(),e=L();e.tagsList.length==0&&e.getTagsList();const d=x();return{skillsStore:t,tagsStore:e,skillTagsStore:d}},data(){return{skillId:this.$route.params.id,skills:[],skill:{name:"",parent:"",description:"",icon_image:"",banner_image:"",mastery_requirements:"",tags:[],type:null,level:null},filterChecked:!1,iconImage:"",bannerImage:"",superSkills:[],levels:[{id:"grade_school",name:"Grade school"},{id:"middle_school",name:"Middle school"},{id:"high_school",name:"High school"},{id:"college",name:"College"},{id:"phd",name:"PhD"}],showDropDown:!1,showLevel:"",parentInput:{inputText:"",suggestSkills:[]},clusterParentInput:{inputText:"",suggestSuperSkills:[]},validate:{violated:!1,name:!1,description:!1,orphan:!1,superValidate:!1,noChild:!1},filters:[]}},async mounted(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList(),this.getParentSkills()},methods:{getParentSkills(){for(let t=0;t<this.skillsStore.skillsList.length;t++)this.skillsStore.skillsList[t].id!=this.skillId&&(this.skillsStore.skillsList[t].type=="super"&&this.superSkills.push(this.skillsStore.skillsList[t]),this.skillsStore.skillsList[t].type!="sub"&&this.skills.push(this.skillsStore.skillsList[t]));this.getSkill()},getSkill(){fetch("/skills/show/"+this.skillId).then(function(t){return t.json()}).then(t=>{this.skill=t}).then(()=>{this.iconImage=this.skill.icon_image,this.bannerImage=this.skill.banner_image,$("#summernote").summernote("code",this.skill.mastery_requirements),$("#description-summernote").summernote("code",this.skill.description);const t=this.levels.find(d=>d.id===this.skill.level);this.showLevel=t.name;const e=this.skills.find(d=>d.id===this.skill.parent);this.parentInput.inputText=e.name,this.getSkillFilters()})},async getSkillFilters(){this.skillTagsStore.skillTagsList.length==0&&await this.skillTagsStore.getSkillTagsList();for(let t=0;t<this.skillTagsStore.skillTagsList.length;t++)this.skillTagsStore.skillTagsList[t].skill_id==this.skillId&&this.filters.push(this.skillTagsStore.skillTagsList[t].tag_id)},onFileChange(t,e){var d=t.target.files||t.dataTransfer.files;d.length&&this.createImage(d[0],e)},createImage(t,e){new Image;var d=new FileReader,u=this;d.onload=l=>{u.image=l.target.result,e=="icon"?(this.iconImage=l.target.result,this.skill.icon_image=this.iconImage):(this.bannerImage=l.target.result,this.skill.banner_image=this.bannerImage)},d.readAsDataURL(t)},openImage(t){document.getElementById(t).click()},deleteImage(t){switch(t){case"icon":this.iconImage="";break;default:this.bannerImage="";break}},SubmitFilters(){const t=fetch("/skill-tags/remove/"+this.skillId,{method:"DELETE"});t.error&&console.log(t.error);var e="/skill-tags/add/"+this.skillId;fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filters:this.filters})})},Submit(){if(this.skill.type!="super"){var t=!1;for(let r=0;r<this.skillsStore.skillsList.length;r++)this.skillsStore.skillsList[r].type=="sub"&&this.skillsStore.skillsList[r].parent==this.skillId&&(t=!0);t&&(this.validate.superValidate=!0,this.validate.violated=!0,alert("Please delete outer cluster nodes belonging to the skill, before changing its type."))}if(this.skill.type=="domain")this.skill.level="domain";else if(this.skill.type=="sub"){this.skill.parent==0&&(this.validate.orphan=!0,this.validate.violated=!0,alert("cluster nodes must have a parent"));for(let r=0;r<this.skillsStore.skillsList.length;r++)this.skill.parent==this.skillsStore.skillsList[r].id&&(this.skill.level=this.skillsStore.skillsList[r].level),this.skillsStore.skillsList[r].parent==this.skillId&&(this.validate.noChild=!0,this.validate.violated=!0,alert("please delete this node's child skills, before changing it to a cluster child skill"))}var e=$("#summernote").summernote("code");const d=$("#description-summernote").summernote("code");if((this.skill.name===""||this.skill.name===null)&&(this.validate.name=!0,this.validate.violated=!0,alert("please enter a skill name")),this.validate.violated)return;const u={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.skill.name,parent:this.skill.parent,description:d,icon_image:this.skill.icon_image,banner_image:this.skill.banner_image,mastery_requirements:e,type:this.skill.type,level:this.skill.level})};var l="/skills/"+this.skillId+"/edit";fetch(l,u).then(()=>{this.skillsStore.getNestedSkillsList(),this.SubmitFilters()}).then(()=>{this.$router.push("/skills")})},handleChooseSkillLevel(t){this.showDropDown=!1,this.showLevel=t.name,this.skill.level=t.id},getReferenceSkill(){this.parentInput.inputText.length<2?this.parentInput.suggestSkills=[]:this.parentInput.suggestSkills=this.skills.filter(t=>t.name.toLowerCase().includes(this.parentInput.inputText.toLowerCase()))},handleChooseSuggestSkill(t){this.parentInput.suggestSkills=[],this.skill.parent=t.id,this.parentInput.inputText=t.name},getSuperSkillSuggestion(){this.clusterParentInput.inputText.length<2?this.clusterParentInput.suggestSuperSkills=[]:this.clusterParentInput.suggestSuperSkills=this.superSkills.filter(t=>t.name.toLowerCase().includes(this.clusterParentInput.inputText.toLowerCase()))},handleChooseSuperSkill(t){this.clusterParentInput.suggestSuperSkills=[],this.skill.parent=t.id,this.clusterParentInput.inputText=t.name}}},a=t=>(R("data-v-946d69b4"),t=t(),F(),t),U={class:"container mt-4 pb-5 px-3 px-md-0"},N=a(()=>s("div",{class:"row mt-5"},[s("div",{class:"col-12 col-md-10 col-lg-5 d-flex align-items-baseline gap-3 mt-3"},[s("h1",{id:"page-tile"},"Edit Skill"),s("img",{src:H,id:"header-icon"})])],-1)),B={class:"row mt-5"},q={class:"col-12 col-md-8 col-lg-5 mt-2"},z={class:"mb-3"},E=a(()=>s("label",{for:"name",class:"form-label"},"Name",-1)),j={key:0,class:"form-validate"},O={class:"row"},J={key:0},Z={class:"col col-md-8 col-lg-5 mt-2"},A=a(()=>s("label",{class:"form-label"},"Level",-1)),G={class:"d-flex flex-column position-relative"},K=a(()=>s("span",null,[s("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z",fill:"#344054"})])],-1)),Q={key:0,class:"custom-dropdown-base"},W=["onClick"],X={class:"row"},Y={class:"col col-md-8 col-lg-5 mt-2"},ss={key:0},es=a(()=>s("label",{class:"form-label"},"Filters",-1)),ts={class:"col"},ls={class:"control control-checkbox"},is={class:"my-auto mx-2 me-4"},os=["value"],ns=a(()=>s("div",{class:"control_indicator"},null,-1)),rs={class:"row"},as={class:"col-12 col-md-8 col-lg-5 mt-2"},ds=a(()=>s("label",{class:"form-label"},"Node Type",-1)),cs={class:"row p-0 m-0"},hs={class:"form-check col-6 col-md-5 my-2"},us={class:"control control-checkbox"},ms=a(()=>s("span",{class:"my-auto mx-2 me-4"},"Regular",-1)),ps=a(()=>s("div",{class:"control_indicator"},null,-1)),gs={class:"form-check col-6 col-md-5 my-2"},_s={class:"control control-checkbox"},ks=a(()=>s("span",{class:"my-auto mx-2 me-4"},"Pass-through",-1)),vs=a(()=>s("div",{class:"control_indicator"},null,-1)),fs={class:"form-check col-6 col-md-5 my-2"},bs={class:"control control-checkbox"},Ss=a(()=>s("span",{class:"my-auto mx-2 me-4"},"Cluster node center",-1)),ys=a(()=>s("div",{class:"control_indicator"},null,-1)),Cs={class:"form-check col-6 col-md-5 my-2"},ws={class:"control control-checkbox"},Ls=a(()=>s("span",{class:"my-auto mx-2 me-4"},"Cluster node outer",-1)),xs=a(()=>s("div",{class:"control_indicator"},null,-1)),Is={key:0,class:"form-validate"},Ts={key:1,class:"form-validate"},Ds={class:"row"},Ps={class:"col-12 col-md-8 col-lg-5 mt-2"},Vs={key:0,class:"mb-3"},Rs=a(()=>s("label",{class:"form-label"},"Parent",-1)),Fs={class:"row mt-3"},Hs={class:"col position-relative"},Ms={key:0,id:"suggest-skills",class:"flex flex-column position-absolute"},Us=["onClick"],Ns={key:1,class:"mb-3"},Bs=a(()=>s("label",{class:"form-label"},"Cluster node center",-1)),qs={class:"row mt-3"},zs={class:"col position-relative"},Es={key:0,id:"suggest-skills",class:"flex flex-column position-absolute"},js=["onClick"],Os={class:"row"},Js={class:"col-8 col-md-3 col-lg-2 mt-2"},Zs={class:"mb-3 row d-flex justify-content-center justify-content-md-start w-100"},As=a(()=>s("label",{for:"image",class:"form-label"},"Icon",-1)),Gs={key:0},Ks={class:"default-no-img"},Qs=S('<svg width="33" height="33" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-946d69b4><circle cx="26.5" cy="26.5" r="26.5" fill="#D9D9D9" data-v-946d69b4></circle><g clip-path="url(#clip0_372_11959)" data-v-946d69b4><path d="M19.7439 45.0784L19.7439 33.2515L7.93354 33.268C7.40615 33.2671 6.90063 33.0572 6.52771 32.6843C6.15479 32.3114 5.94488 31.8059 5.94396 31.2785L5.93291 21.7174C5.93382 21.1901 6.14373 20.6845 6.51665 20.3116C6.88957 19.9387 7.3951 19.7288 7.92249 19.7279L19.7439 19.7334L19.7439 7.90646C19.7411 7.64223 19.7911 7.38009 19.8909 7.13543C19.9907 6.89076 20.1384 6.66849 20.3252 6.48164C20.5121 6.29479 20.7344 6.14713 20.979 6.0473C21.2237 5.94747 21.4858 5.8975 21.75 5.9003L31.2779 5.92241C31.8053 5.92332 32.3108 6.13322 32.6838 6.50615C33.0567 6.87907 33.2666 7.38459 33.2675 7.91198L33.262 19.7334L45.0889 19.7334C45.615 19.7337 46.1195 19.9428 46.4915 20.3148C46.8635 20.6869 47.0726 21.1913 47.073 21.7174L47.0951 31.2453C47.0948 31.7714 46.8856 32.2759 46.5136 32.6479C46.1416 33.0199 45.6371 33.229 45.111 33.2294L33.262 33.2515L33.2786 45.0618C33.2776 45.5892 33.0677 46.0947 32.6948 46.4677C32.3219 46.8406 31.8164 47.0505 31.289 47.0514L21.7501 47.0846C21.4858 47.0874 21.2237 47.0374 20.979 46.9376C20.7344 46.8377 20.5121 46.6901 20.3252 46.5032C20.1384 46.3164 19.9907 46.0941 19.8909 45.8494C19.7911 45.6048 19.7411 45.3426 19.7439 45.0784Z" fill="white" data-v-946d69b4></path></g><defs data-v-946d69b4><clipPath id="clip0_372_11959" data-v-946d69b4><rect width="37" height="37" fill="white" transform="translate(8 8)" data-v-946d69b4></rect></clipPath></defs></svg>',1),Ws=[Qs],Xs=a(()=>s("p",{style:{"font-size":"14px"}},[s("em",null,"Maximum file size 15mb")],-1)),Ys={key:1},$s=["src"],se=a(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",height:"20",fill:"white"},[s("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),ee={class:"col-12 col-lg-10 mt-2"},te={class:"mb-3 row"},le=a(()=>s("label",{for:"image",class:"form-label"},"Banner",-1)),ie={key:0},oe={class:"default-no-img"},ne=S('<svg width="33" height="33" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-946d69b4><circle cx="26.5" cy="26.5" r="26.5" fill="#D9D9D9" data-v-946d69b4></circle><g clip-path="url(#clip0_372_11959)" data-v-946d69b4><path d="M19.7439 45.0784L19.7439 33.2515L7.93354 33.268C7.40615 33.2671 6.90063 33.0572 6.52771 32.6843C6.15479 32.3114 5.94488 31.8059 5.94396 31.2785L5.93291 21.7174C5.93382 21.1901 6.14373 20.6845 6.51665 20.3116C6.88957 19.9387 7.3951 19.7288 7.92249 19.7279L19.7439 19.7334L19.7439 7.90646C19.7411 7.64223 19.7911 7.38009 19.8909 7.13543C19.9907 6.89076 20.1384 6.66849 20.3252 6.48164C20.5121 6.29479 20.7344 6.14713 20.979 6.0473C21.2237 5.94747 21.4858 5.8975 21.75 5.9003L31.2779 5.92241C31.8053 5.92332 32.3108 6.13322 32.6838 6.50615C33.0567 6.87907 33.2666 7.38459 33.2675 7.91198L33.262 19.7334L45.0889 19.7334C45.615 19.7337 46.1195 19.9428 46.4915 20.3148C46.8635 20.6869 47.0726 21.1913 47.073 21.7174L47.0951 31.2453C47.0948 31.7714 46.8856 32.2759 46.5136 32.6479C46.1416 33.0199 45.6371 33.229 45.111 33.2294L33.262 33.2515L33.2786 45.0618C33.2776 45.5892 33.0677 46.0947 32.6948 46.4677C32.3219 46.8406 31.8164 47.0505 31.289 47.0514L21.7501 47.0846C21.4858 47.0874 21.2237 47.0374 20.979 46.9376C20.7344 46.8377 20.5121 46.6901 20.3252 46.5032C20.1384 46.3164 19.9907 46.0941 19.8909 45.8494C19.7911 45.6048 19.7411 45.3426 19.7439 45.0784Z" fill="white" data-v-946d69b4></path></g><defs data-v-946d69b4><clipPath id="clip0_372_11959" data-v-946d69b4><rect width="37" height="37" fill="white" transform="translate(8 8)" data-v-946d69b4></rect></clipPath></defs></svg>',1),re=[ne],ae=a(()=>s("p",{style:{"font-size":"14px"}},[s("em",null,"Maximum file size 15mb")],-1)),de={key:1},ce=["src"],he=a(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",height:"20",fill:"white"},[s("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),ue={class:"row"},me={class:"col"},pe={class:"mb-3"},ge=a(()=>s("label",{for:"description",class:"form-label"},"Description",-1)),_e={key:0,class:"form-validate"},ke={key:0,class:"mb-3"},ve=a(()=>s("label",{for:"mastery_requirements",class:"form-label"},"Mastery Requirements",-1)),fe={class:"row"},be={class:"col"},Se={class:"d-flex justify-content-end gap-4"};function ye(t,e,d,u,l,r){const y=T("router-link");return o(),n("div",U,[N,s("div",B,[s("div",q,[s("div",z,[E,c(s("input",{"onUpdate:modelValue":e[0]||(e[0]=i=>l.skill.name=i),class:"form-control",type:"text",placeholder:"name"},null,512),[[m,l.skill.name]]),l.validate.name&&(l.skill.name==""||l.skill.name==null)?(o(),n("div",j," please enter a skill name ")):h("",!0)])])]),s("div",O,[l.skill.type!="domain"&&l.skill.type!="sub"?(o(),n("div",J,[s("div",Z,[A,s("div",G,[s("div",{class:D([l.showDropDown?"custom-select-button-focus ":"custom-select-button "]),onClick:e[1]||(e[1]=i=>l.showDropDown=!l.showDropDown)},[k(p(l.showLevel)+" ",1),K],2),l.showDropDown?(o(),n("div",Q,[(o(!0),n(g,null,v(l.levels,i=>(o(),n("div",{class:"custom-dropdown-option",onClick:_=>r.handleChooseSkillLevel(i)},p(i.name),9,W))),256))])):h("",!0)])])])):h("",!0)]),s("div",X,[s("div",Y,[l.skill.type!="sub"?(o(),n("div",ss,[es,s("div",ts,[(o(!0),n(g,null,v(u.tagsStore.tagsList,i=>(o(),n("label",ls,[s("span",is,p(i.name),1),c(s("input",{type:"checkbox",value:i.id,"onUpdate:modelValue":e[2]||(e[2]=_=>l.filters=_)},null,8,os),[[P,l.filters]]),ns]))),256))])])):h("",!0)])]),s("div",rs,[s("div",as,[ds,s("div",cs,[s("div",hs,[s("label",us,[ms,c(s("input",{type:"radio",name:"nodeType",id:"regularSkillRadio",value:"regular","onUpdate:modelValue":e[3]||(e[3]=i=>l.skill.type=i)},null,512),[[f,l.skill.type]]),ps])]),s("div",gs,[s("label",_s,[ks,c(s("input",{type:"radio",name:"nodeType",id:"domainSkillRadio",value:"domain","onUpdate:modelValue":e[4]||(e[4]=i=>l.skill.type=i)},null,512),[[f,l.skill.type]]),vs])]),s("div",fs,[s("label",bs,[Ss,c(s("input",{type:"radio",name:"nodeType",id:"superSkillRadio",value:"super","onUpdate:modelValue":e[5]||(e[5]=i=>l.skill.type=i)},null,512),[[f,l.skill.type]]),ys])]),s("div",Cs,[s("label",ws,[Ls,c(s("input",{type:"radio",name:"nodeType",id:"regularSkillRadio",value:"sub","onUpdate:modelValue":e[6]||(e[6]=i=>l.skill.type=i)},null,512),[[f,l.skill.type]]),xs])])]),l.validate.orphan&&this.skill.type=="sub"&&this.skill.parent==0?(o(),n("div",Is," please choose a parent for this skill ")):h("",!0),l.validate.noChild&&this.skill.type=="sub"?(o(),n("div",Ts," please delete this node's child skills, before changing it to a cluster child skill ")):h("",!0)])]),s("div",Ds,[s("div",Ps,[l.skill.type!="sub"?(o(),n("div",Vs,[Rs,s("div",Fs,[s("div",Hs,[c(s("input",{id:"skill-input","onUpdate:modelValue":e[7]||(e[7]=i=>l.parentInput.inputText=i),onInput:e[8]||(e[8]=(...i)=>r.getReferenceSkill&&r.getReferenceSkill(...i)),placeholder:"type skill name"},null,544),[[m,l.parentInput.inputText]]),l.parentInput.suggestSkills.length>0?(o(),n("div",Ms,[(o(!0),n(g,null,v(l.parentInput.suggestSkills,i=>(o(),n("div",{class:"suggest-option",onClick:_=>r.handleChooseSuggestSkill(i)},p(i.name),9,Us))),256))])):h("",!0)])])])):(o(),n("div",Ns,[Bs,s("div",qs,[s("div",zs,[c(s("input",{id:"skill-input","onUpdate:modelValue":e[9]||(e[9]=i=>l.clusterParentInput.inputText=i),onInput:e[10]||(e[10]=(...i)=>r.getSuperSkillSuggestion&&r.getSuperSkillSuggestion(...i)),placeholder:"type skill name"},null,544),[[m,l.clusterParentInput.inputText]]),l.clusterParentInput.suggestSuperSkills.length>0?(o(),n("div",Es,[(o(!0),n(g,null,v(l.clusterParentInput.suggestSuperSkills,i=>(o(),n("div",{class:"suggest-option",onClick:_=>r.handleChooseSuggestSkill(i)},p(i.name),9,js))),256))])):h("",!0)])])]))])]),s("div",Os,[s("div",Js,[s("div",Zs,[As,l.iconImage?(o(),n("div",Ys,[s("p",null,[s("img",{src:l.iconImage,height:"158",width:"158",style:{"background-color":"lightgrey"}},null,8,$s)]),s("p",null,[s("button",{class:"btn red-btn",onClick:e[13]||(e[13]=i=>r.deleteImage("icon"))},[k(" Remove    "),se])])])):(o(),n("div",Gs,[s("input",{class:"form-control d-none",type:"file",accept:"image/*",onChange:e[11]||(e[11]=i=>r.onFileChange(i,"icon")),id:"iconFileChoose"},null,32),s("div",Ks,[s("div",{class:"plus-svg",onClick:e[12]||(e[12]=i=>r.openImage("iconFileChoose"))},Ws)]),Xs]))])]),s("div",ee,[s("div",te,[le,l.bannerImage?(o(),n("div",de,[s("p",null,[s("img",{src:l.bannerImage,height:"158",width:"1175",style:{"background-color":"lightgrey"}},null,8,ce)]),s("p",null,[s("button",{class:"btn red-btn",onClick:e[16]||(e[16]=i=>r.deleteImage("banner"))},[k(" Remove    "),he])])])):(o(),n("div",ie,[s("input",{class:"form-control d-none",type:"file",accept:"image/*",onChange:e[14]||(e[14]=i=>r.onFileChange(i,"banner")),id:"bannerFileChoose"},null,32),s("div",oe,[s("div",{class:"plus-svg",onClick:e[15]||(e[15]=i=>r.openImage("bannerFileChoose"))},re)]),ae]))])])]),s("div",ue,[s("div",me,[s("div",pe,[ge,c(s("textarea",{"onUpdate:modelValue":e[17]||(e[17]=i=>l.skill.description=i),class:"form-control",id:"description-summernote",rows:"3"},null,512),[[m,l.skill.description]])]),s("div",null,[l.validate.description?(o(),n("div",_e," please enter description for skill ")):h("",!0)])])]),l.skill.type!="domain"?(o(),n("div",ke,[ve,c(s("textarea",{class:"form-control","onUpdate:modelValue":e[18]||(e[18]=i=>l.skill.mastery_requirements=i),id:"summernote",rows:"3"},null,512),[[m,l.skill.mastery_requirements]])])):h("",!0),s("div",fe,[s("div",be,[s("div",Se,[b(y,{class:"btn red-btn",to:"/skills"},{default:V(()=>[k(" Cancel ")]),_:1}),s("button",{class:"btn purple-btn",onClick:e[19]||(e[19]=i=>r.Submit())}," Submit ")])])])])}const Ce=I(M,[["render",ye],["__scopeId","data-v-946d69b4"]]),we=s("div",{id:"banner"},[s("img",{src:C,class:"image-fluid"})],-1),Ve={__name:"EditSkillView",setup(t){return(e,d)=>(o(),n(g,null,[we,b(Ce)],64))}};export{Ve as default};
