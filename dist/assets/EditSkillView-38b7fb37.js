import{_ as y,g as L,m as x,E as I,i as D,o,c as n,d as e,e as u,v as k,b as a,x as f,l as _,t as m,F as p,k as v,y as T,D as w,a as C,w as H,p as M,f as V,s as b,G as P}from"./main-78170661.js";import{u as z,a as B}from"./TagsStore-230a4f0e.js";import{_ as R}from"./recurso-69-12793b41.js";const F={setup(){const t=L(),s=x(),h=z();h.tagsList.length==0&&h.getTagsList();const d=B(),l=I();return{skillsStore:s,tagsStore:h,skillTagsStore:d,router:l,userDetailsStore:t}},data(){return{skillId:this.$route.params.id,skills:[],skill:{id:"",name:"",parent:"",description:"",icon_image:"",banner_image:"",mastery_requirements:"",tags:[],type:null,level:null,order:null},filterChecked:!1,iconImage:"",bannerImage:"",superSkills:[],levels:[{id:"grade_school",name:"Grade school"},{id:"middle_school",name:"Middle school"},{id:"high_school",name:"High school"},{id:"college",name:"College"},{id:"phd",name:"PhD"}],showLevelDropDown:!1,showOrderDropDown:!1,showLevel:"",parentInput:{inputText:"",suggestSkills:[]},clusterParentInput:{inputText:"",suggestSuperSkills:[]},validate:{violated:!1,name:!1,description:!1,orphan:!1,superValidate:!1,noChild:!1},filters:[],deleteButtonHover:!1,showModal:!1,step1Confirm:!1,skillNameConfirm:"",step2Confirm:!1,orderArray:Array.from({length:20},(t,s)=>s+1)}},async mounted(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList(),this.getParentSkills()},methods:{getParentSkills(){for(let t=0;t<this.skillsStore.skillsList.length;t++)this.skillsStore.skillsList[t].id!=this.skillId&&(this.skillsStore.skillsList[t].type=="super"&&this.superSkills.push(this.skillsStore.skillsList[t]),this.skillsStore.skillsList[t].type!="sub"&&this.skills.push(this.skillsStore.skillsList[t]));this.getSkill()},getSkill(){fetch("/skills/show/"+this.skillId).then(function(t){return t.json()}).then(t=>{this.skill=t}).then(()=>{if(this.iconImage=this.skill.icon_image,this.bannerImage=this.skill.banner_image,$("#summernote").summernote("code",this.skill.mastery_requirements),this.skill.level!="domain"){const t=this.levels.find(s=>s.id===this.skill.level);this.showLevel=t.name}if(this.skill.parent!=0){const t=this.skills.find(s=>s.id===this.skill.parent);this.parentInput.inputText=t.name}this.getSkillFilters()})},async getSkillFilters(){this.skillTagsStore.skillTagsList.length==0&&await this.skillTagsStore.getSkillTagsList();for(let t=0;t<this.skillTagsStore.skillTagsList.length;t++)this.skillTagsStore.skillTagsList[t].skill_id==this.skillId&&this.filters.push(this.skillTagsStore.skillTagsList[t].tag_id)},async DeleteSkill(t){!this.step1Confirm||!this.step2Confirm||(await this.skillsStore.deleteSkill(t),this.router.push("/skills"))},onFileChange(t,s){var h=t.target.files||t.dataTransfer.files;h.length&&this.createImage(h[0],s)},createImage(t,s){new Image;var h=new FileReader,d=this;h.onload=l=>{d.image=l.target.result,s=="icon"?(this.iconImage=l.target.result,this.skill.icon_image=this.iconImage):(this.bannerImage=l.target.result,this.skill.banner_image=this.bannerImage)},h.readAsDataURL(t)},openImage(t){document.getElementById(t).click()},deleteImage(t){switch(t){case"icon":this.iconImage="";break;default:this.bannerImage="";break}},SubmitFilters(){fetch("/skill-tags/remove/"+this.skillId,{method:"DELETE"}).then(()=>{var t="/skill-tags/add/"+this.skillId;fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filters:this.filters})})})},Submit(){if(this.skill.type!="super"){var t=!1;for(let d=0;d<this.skillsStore.skillsList.length;d++)this.skillsStore.skillsList[d].type=="sub"&&this.skillsStore.skillsList[d].parent==this.skillId&&(t=!0);t&&(this.validate.superValidate=!0,this.validate.violated=!0,alert("Please delete outer cluster nodes belonging to the skill, before changing its type."))}if(this.skill.type=="domain")this.skill.level="domain";else if(this.skill.type=="sub"){this.skill.parent==0&&(this.validate.orphan=!0,this.validate.violated=!0,alert("cluster nodes must have a parent"));for(let d=0;d<this.skillsStore.skillsList.length;d++)this.skill.parent==this.skillsStore.skillsList[d].id&&(this.skill.level=this.skillsStore.skillsList[d].level),this.skillsStore.skillsList[d].parent==this.skillId&&(this.validate.noChild=!0,this.validate.violated=!0,alert("please delete this node's child skills, before changing it to a cluster child skill"))}if(this.skill.type!="domain"&&(this.skill.mastery_requirements=$("#summernote").summernote("code")),(this.skill.name===""||this.skill.name===null)&&(this.validate.name=!0,this.validate.violated=!0,alert("please enter a skill name")),this.validate.violated)return;const s={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.skill.name,parent:this.skill.parent,description:this.skill.description,icon_image:this.skill.icon_image,banner_image:this.skill.banner_image,mastery_requirements:this.skill.mastery_requirements,type:this.skill.type,level:this.skill.level,order:this.skill.order})};var h="/skills/"+this.skillId+"/edit";fetch(h,s).then(()=>{this.skillsStore.getNestedSkillsList(),this.SubmitFilters()}).then(()=>{this.$router.push("/skills")})},handleChooseSkillLevel(t){this.showLevelDropDown=!1,this.showLevel=t.name,this.skill.level=t.id},handleChooseSkillOrder(t){this.showOrderDropDown=!1,this.skill.order=t},getReferenceSkill(){this.parentInput.inputText.length<2?this.parentInput.suggestSkills=[]:this.parentInput.suggestSkills=this.skills.filter(t=>t.name.toLowerCase().includes(this.parentInput.inputText.toLowerCase()))},handleChooseSuggestSkill(t){this.parentInput.suggestSkills=[],this.skill.parent=t.id,this.parentInput.inputText=t.name},getSuperSkillSuggestion(){this.clusterParentInput.inputText.length<2?this.clusterParentInput.suggestSuperSkills=[]:this.clusterParentInput.suggestSuperSkills=this.superSkills.filter(t=>t.name.toLowerCase().includes(this.clusterParentInput.inputText.toLowerCase()))},handleChooseSuperSkill(t){this.clusterParentInput.suggestSuperSkills=[],this.skill.parent=t.id,this.clusterParentInput.inputText=t.name},handleCancelDeleteSkill(){this.showModal=!1,this.step1Confirm=!1,this.step2Confirm=!1,this.skillNameConfirm=""},handleConfirmInputChange(){this.skillNameConfirm==this.skill.name?this.step2Confirm=!0:this.step2Confirm=!1}}},r=t=>(M("data-v-3ca4ee94"),t=t(),V(),t),N={class:"container mt-4 pb-5 px-3 px-md-0"},U=r(()=>e("div",{class:"row mt-5"},[e("div",{class:"col-12 col-md-10 col-lg-5 d-flex align-items-baseline gap-3 mt-3"},[e("h1",{id:"page-tile"},"Edit Skill"),e("img",{src:R,id:"header-icon"})])],-1)),O={class:"row mt-5"},E={class:"col-12 col-md-8 col-lg-5 mt-2"},q={class:"mb-3"},j=r(()=>e("label",{for:"name",class:"form-label"},"Name",-1)),A={key:0,class:"form-validate"},Z={class:"row"},G={key:0},J={class:"col col-md-8 col-lg-5 mt-2"},K=r(()=>e("label",{class:"form-label"},"Level",-1)),Q={class:"d-flex flex-column position-relative"},W=r(()=>e("span",null,[e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z",fill:"#344054"})])],-1)),X={key:0,class:"custom-dropdown-base"},Y=["onClick"],ee={key:0,class:"row"},se={class:"col col-md-8 col-lg-5 mt-2"},le={key:0},te=r(()=>e("label",{class:"form-label"},"Filters",-1)),ie={class:"col"},oe={class:"control control-checkbox"},ne={class:"my-auto mx-2 me-4"},re=["value"],ae=r(()=>e("div",{class:"control_indicator"},null,-1)),de={class:"row"},ce={class:"col-12 col-md-8 col-lg-5 mt-2"},he=r(()=>e("label",{class:"form-label"},"Node Type",-1)),ue={class:"row p-0 m-0"},me={class:"form-check col-6 col-md-5 my-2"},pe={class:"control control-checkbox"},ke=r(()=>e("span",{class:"my-auto mx-2 me-4"},"Regular",-1)),_e=r(()=>e("div",{class:"control_indicator"},null,-1)),ge={class:"form-check col-6 col-md-5 my-2"},ve={class:"control control-checkbox"},fe=r(()=>e("span",{class:"my-auto mx-2 me-4"},"Pass-through",-1)),we=r(()=>e("div",{class:"control_indicator"},null,-1)),Ce={class:"form-check col-6 col-md-5 my-2"},be={class:"control control-checkbox"},Se=r(()=>e("span",{class:"my-auto mx-2 me-4"},"Cluster node center",-1)),ye=r(()=>e("div",{class:"control_indicator"},null,-1)),Le={class:"form-check col-6 col-md-5 my-2"},xe={class:"control control-checkbox"},Ie=r(()=>e("span",{class:"my-auto mx-2 me-4"},"Cluster node outer",-1)),De=r(()=>e("div",{class:"control_indicator"},null,-1)),Te={key:0,class:"form-validate"},He={key:1,class:"form-validate"},Me={class:"row"},Ve={class:"col-12 col-md-8 col-lg-5 mt-2"},Pe={key:0,class:"mb-3"},ze=r(()=>e("label",{class:"form-label"},"Parent",-1)),Be={class:"row mt-3"},Re={class:"col position-relative"},Fe={key:0,id:"suggest-skills",class:"flex flex-column position-absolute"},Ne=["onClick"],Ue={key:1,class:"mb-3"},Oe=r(()=>e("label",{class:"form-label"},"Cluster node center",-1)),Ee={class:"row mt-3"},qe={class:"col position-relative"},je={key:0,id:"suggest-skills",class:"flex flex-column position-absolute"},Ae=["onClick"],Ze={class:"row"},Ge={class:"col-8 col-md-3 col-lg-2 mt-2"},Je={class:"mb-3 row d-flex justify-content-center justify-content-md-start w-100"},Ke=r(()=>e("label",{for:"image",class:"form-label"},"Icon",-1)),Qe={key:0},We={class:"default-no-img"},Xe=b('<svg width="33" height="33" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3ca4ee94><circle cx="26.5" cy="26.5" r="26.5" fill="#D9D9D9" data-v-3ca4ee94></circle><g clip-path="url(#clip0_372_11959)" data-v-3ca4ee94><path d="M19.7439 45.0784L19.7439 33.2515L7.93354 33.268C7.40615 33.2671 6.90063 33.0572 6.52771 32.6843C6.15479 32.3114 5.94488 31.8059 5.94396 31.2785L5.93291 21.7174C5.93382 21.1901 6.14373 20.6845 6.51665 20.3116C6.88957 19.9387 7.3951 19.7288 7.92249 19.7279L19.7439 19.7334L19.7439 7.90646C19.7411 7.64223 19.7911 7.38009 19.8909 7.13543C19.9907 6.89076 20.1384 6.66849 20.3252 6.48164C20.5121 6.29479 20.7344 6.14713 20.979 6.0473C21.2237 5.94747 21.4858 5.8975 21.75 5.9003L31.2779 5.92241C31.8053 5.92332 32.3108 6.13322 32.6838 6.50615C33.0567 6.87907 33.2666 7.38459 33.2675 7.91198L33.262 19.7334L45.0889 19.7334C45.615 19.7337 46.1195 19.9428 46.4915 20.3148C46.8635 20.6869 47.0726 21.1913 47.073 21.7174L47.0951 31.2453C47.0948 31.7714 46.8856 32.2759 46.5136 32.6479C46.1416 33.0199 45.6371 33.229 45.111 33.2294L33.262 33.2515L33.2786 45.0618C33.2776 45.5892 33.0677 46.0947 32.6948 46.4677C32.3219 46.8406 31.8164 47.0505 31.289 47.0514L21.7501 47.0846C21.4858 47.0874 21.2237 47.0374 20.979 46.9376C20.7344 46.8377 20.5121 46.6901 20.3252 46.5032C20.1384 46.3164 19.9907 46.0941 19.8909 45.8494C19.7911 45.6048 19.7411 45.3426 19.7439 45.0784Z" fill="white" data-v-3ca4ee94></path></g><defs data-v-3ca4ee94><clipPath id="clip0_372_11959" data-v-3ca4ee94><rect width="37" height="37" fill="white" transform="translate(8 8)" data-v-3ca4ee94></rect></clipPath></defs></svg>',1),Ye=[Xe],$e=r(()=>e("p",{style:{"font-size":"14px"}},[e("em",null,"Maximum file size 15mb")],-1)),es={key:1},ss=["src"],ls=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",height:"20",fill:"white"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),ts={class:"col-12 col-lg-10 mt-2"},is={class:"mb-3 row"},os=r(()=>e("label",{for:"image",class:"form-label"},"Banner",-1)),ns={key:0},rs={class:"default-no-img"},as=b('<svg width="33" height="33" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3ca4ee94><circle cx="26.5" cy="26.5" r="26.5" fill="#D9D9D9" data-v-3ca4ee94></circle><g clip-path="url(#clip0_372_11959)" data-v-3ca4ee94><path d="M19.7439 45.0784L19.7439 33.2515L7.93354 33.268C7.40615 33.2671 6.90063 33.0572 6.52771 32.6843C6.15479 32.3114 5.94488 31.8059 5.94396 31.2785L5.93291 21.7174C5.93382 21.1901 6.14373 20.6845 6.51665 20.3116C6.88957 19.9387 7.3951 19.7288 7.92249 19.7279L19.7439 19.7334L19.7439 7.90646C19.7411 7.64223 19.7911 7.38009 19.8909 7.13543C19.9907 6.89076 20.1384 6.66849 20.3252 6.48164C20.5121 6.29479 20.7344 6.14713 20.979 6.0473C21.2237 5.94747 21.4858 5.8975 21.75 5.9003L31.2779 5.92241C31.8053 5.92332 32.3108 6.13322 32.6838 6.50615C33.0567 6.87907 33.2666 7.38459 33.2675 7.91198L33.262 19.7334L45.0889 19.7334C45.615 19.7337 46.1195 19.9428 46.4915 20.3148C46.8635 20.6869 47.0726 21.1913 47.073 21.7174L47.0951 31.2453C47.0948 31.7714 46.8856 32.2759 46.5136 32.6479C46.1416 33.0199 45.6371 33.229 45.111 33.2294L33.262 33.2515L33.2786 45.0618C33.2776 45.5892 33.0677 46.0947 32.6948 46.4677C32.3219 46.8406 31.8164 47.0505 31.289 47.0514L21.7501 47.0846C21.4858 47.0874 21.2237 47.0374 20.979 46.9376C20.7344 46.8377 20.5121 46.6901 20.3252 46.5032C20.1384 46.3164 19.9907 46.0941 19.8909 45.8494C19.7911 45.6048 19.7411 45.3426 19.7439 45.0784Z" fill="white" data-v-3ca4ee94></path></g><defs data-v-3ca4ee94><clipPath id="clip0_372_11959" data-v-3ca4ee94><rect width="37" height="37" fill="white" transform="translate(8 8)" data-v-3ca4ee94></rect></clipPath></defs></svg>',1),ds=[as],cs=r(()=>e("p",{style:{"font-size":"14px"}},[e("em",null,"Maximum file size 15mb")],-1)),hs={key:1},us=["src"],ms=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",height:"20",fill:"white"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),ps={key:1,class:"row"},ks={class:"col"},_s={class:"mb-3"},gs=r(()=>e("label",{for:"description",class:"form-label"},"Description",-1)),vs={key:0,class:"form-validate"},fs={key:2,class:"mb-3"},ws=r(()=>e("label",{for:"mastery_requirements",class:"form-label"},"Mastery Requirements",-1)),Cs={key:3,class:"row"},bs={class:"col col-md-8 col-lg-5 mt-2"},Ss=r(()=>e("label",{class:"form-label"},[_("Order "),e("span",{style:{"font-weight":"400"}},"(optional: 0 is default)")],-1)),ys={class:"d-flex flex-column position-relative"},Ls=r(()=>e("span",null,[e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z",fill:"#344054"})])],-1)),xs={key:0,class:"custom-dropdown-base"},Is=["onClick"],Ds={class:"row"},Ts={class:"d-flex justify-content-between"},Hs={key:0,class:"d-flex flex-column"},Ms={id:"danger-label-div"},Vs=r(()=>e("span",{class:"d-none d-md-block"}," skill ",-1)),Ps=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",height:"20",fill:"white",class:"ms-1"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),zs={class:"d-flex justify-content-end gap-md-4 gap-1 align-items-end"},Bs=r(()=>e("div",{class:"d-none d-md-block"},"Cancel",-1)),Rs=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"white",class:"d-md-none exit-icon"},[e("path",{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"})],-1)),Fs=r(()=>e("div",{class:"d-none d-md-block"},"Submit",-1)),Ns=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"white",height:"20",width:"20",class:"d-md-none"},[e("path",{d:"M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"})],-1)),Us=[Fs,Ns],Os={key:0,id:"myModal",class:"modal"},Es={class:"modal-content d-flex flex-column"},qs={class:"mb-4"},js={key:0,id:"warning-section",class:"d-flex align-items-center"},As=r(()=>e("div",{class:"me-3"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"15",height:"15",fill:"#eed888"},[e("path",{d:"M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"})])],-1)),Zs=r(()=>e("div",null," This action will delete this skill and all its nested skills, and is not reversible. ",-1)),Gs=[As,Zs],Js={key:1},Ks={for:"name",class:"conform-label"},Qs={class:"mt-3 d-flex justify-content-between"};function Ws(t,s,h,d,l,c){const S=D("router-link");return o(),n(p,null,[e("div",N,[U,e("div",O,[e("div",E,[e("div",q,[j,u(e("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>l.skill.name=i),class:"form-control",type:"text",placeholder:"name"},null,512),[[k,l.skill.name]]),l.validate.name&&(l.skill.name==""||l.skill.name==null)?(o(),n("div",A," please enter a skill name ")):a("",!0)])])]),e("div",Z,[l.skill.type!="domain"&&l.skill.type!="sub"?(o(),n("div",G,[e("div",J,[K,e("div",Q,[e("div",{class:f([l.showLevelDropDown?"custom-select-button-focus ":"custom-select-button "]),onClick:s[1]||(s[1]=i=>l.showLevelDropDown=!l.showLevelDropDown)},[_(m(l.showLevel)+" ",1),W],2),l.showLevelDropDown?(o(),n("div",X,[(o(!0),n(p,null,v(l.levels,i=>(o(),n("div",{class:"custom-dropdown-option",onClick:g=>c.handleChooseSkillLevel(i)},m(i.name),9,Y))),256))])):a("",!0)])])])):a("",!0)]),d.userDetailsStore.role=="admin"?(o(),n("div",ee,[e("div",se,[l.skill.type!="sub"?(o(),n("div",le,[te,e("div",ie,[(o(!0),n(p,null,v(d.tagsStore.tagsList,i=>(o(),n("label",oe,[e("span",ne,m(i.name),1),u(e("input",{type:"checkbox",value:i.id,"onUpdate:modelValue":s[2]||(s[2]=g=>l.filters=g)},null,8,re),[[T,l.filters]]),ae]))),256))])])):a("",!0)])])):a("",!0),e("div",de,[e("div",ce,[he,e("div",ue,[e("div",me,[e("label",pe,[ke,u(e("input",{type:"radio",name:"nodeType",id:"regularSkillRadio",value:"regular","onUpdate:modelValue":s[3]||(s[3]=i=>l.skill.type=i)},null,512),[[w,l.skill.type]]),_e])]),e("div",ge,[e("label",ve,[fe,u(e("input",{type:"radio",name:"nodeType",id:"domainSkillRadio",value:"domain","onUpdate:modelValue":s[4]||(s[4]=i=>l.skill.type=i)},null,512),[[w,l.skill.type]]),we])]),e("div",Ce,[e("label",be,[Se,u(e("input",{type:"radio",name:"nodeType",id:"superSkillRadio",value:"super","onUpdate:modelValue":s[5]||(s[5]=i=>l.skill.type=i)},null,512),[[w,l.skill.type]]),ye])]),e("div",Le,[e("label",xe,[Ie,u(e("input",{type:"radio",name:"nodeType",id:"regularSkillRadio",value:"sub","onUpdate:modelValue":s[6]||(s[6]=i=>l.skill.type=i)},null,512),[[w,l.skill.type]]),De])])]),l.validate.orphan&&this.skill.type=="sub"&&this.skill.parent==0?(o(),n("div",Te," please choose a parent for this skill ")):a("",!0),l.validate.noChild&&this.skill.type=="sub"?(o(),n("div",He," please delete this node's child skills, before changing it to a cluster child skill ")):a("",!0)])]),e("div",Me,[e("div",Ve,[l.skill.type!="sub"?(o(),n("div",Pe,[ze,e("div",Be,[e("div",Re,[u(e("input",{id:"skill-input","onUpdate:modelValue":s[7]||(s[7]=i=>l.parentInput.inputText=i),onInput:s[8]||(s[8]=(...i)=>c.getReferenceSkill&&c.getReferenceSkill(...i)),placeholder:"type skill name"},null,544),[[k,l.parentInput.inputText]]),l.parentInput.suggestSkills.length>0?(o(),n("div",Fe,[(o(!0),n(p,null,v(l.parentInput.suggestSkills,i=>(o(),n("div",{class:"suggest-option",onClick:g=>c.handleChooseSuggestSkill(i)},m(i.name),9,Ne))),256))])):a("",!0)])])])):(o(),n("div",Ue,[Oe,e("div",Ee,[e("div",qe,[u(e("input",{id:"skill-input","onUpdate:modelValue":s[9]||(s[9]=i=>l.clusterParentInput.inputText=i),onInput:s[10]||(s[10]=(...i)=>c.getSuperSkillSuggestion&&c.getSuperSkillSuggestion(...i)),placeholder:"type skill name"},null,544),[[k,l.clusterParentInput.inputText]]),l.clusterParentInput.suggestSuperSkills.length>0?(o(),n("div",je,[(o(!0),n(p,null,v(l.clusterParentInput.suggestSuperSkills,i=>(o(),n("div",{class:"suggest-option",onClick:g=>c.handleChooseSuggestSkill(i)},m(i.name),9,Ae))),256))])):a("",!0)])])]))])]),e("div",Ze,[e("div",Ge,[e("div",Je,[Ke,l.iconImage?(o(),n("div",es,[e("p",null,[e("img",{src:l.iconImage,height:"158",width:"158",style:{"background-color":"lightgrey"}},null,8,ss)]),e("p",null,[e("button",{class:"btn red-btn",onClick:s[13]||(s[13]=i=>c.deleteImage("icon"))},[_(" Remove    "),ls])])])):(o(),n("div",Qe,[e("input",{class:"form-control d-none",type:"file",accept:"image/*",onChange:s[11]||(s[11]=i=>c.onFileChange(i,"icon")),id:"iconFileChoose"},null,32),e("div",We,[e("div",{class:"plus-svg",onClick:s[12]||(s[12]=i=>c.openImage("iconFileChoose"))},Ye)]),$e]))])]),e("div",ts,[e("div",is,[os,l.bannerImage?(o(),n("div",hs,[e("p",null,[e("img",{src:l.bannerImage,height:"158",width:"1175",style:{"background-color":"lightgrey"}},null,8,us)]),e("p",null,[e("button",{class:"btn red-btn",onClick:s[16]||(s[16]=i=>c.deleteImage("banner"))},[_(" Remove    "),ms])])])):(o(),n("div",ns,[e("input",{class:"form-control d-none",type:"file",accept:"image/*",onChange:s[14]||(s[14]=i=>c.onFileChange(i,"banner")),id:"bannerFileChoose"},null,32),e("div",rs,[e("div",{class:"plus-svg",onClick:s[15]||(s[15]=i=>c.openImage("bannerFileChoose"))},ds)]),cs]))])])]),d.userDetailsStore.role=="admin"?(o(),n("div",ps,[e("div",ks,[e("div",_s,[gs,u(e("textarea",{"onUpdate:modelValue":s[17]||(s[17]=i=>l.skill.description=i),class:"form-control",rows:"2"},null,512),[[k,l.skill.description]])]),e("div",null,[l.validate.description?(o(),n("div",vs," please enter description for skill ")):a("",!0)])])])):a("",!0),l.skill.type!="domain"?(o(),n("div",fs,[ws,u(e("textarea",{class:"form-control","onUpdate:modelValue":s[18]||(s[18]=i=>l.skill.mastery_requirements=i),id:"summernote",rows:"3"},null,512),[[k,l.skill.mastery_requirements]])])):a("",!0),d.userDetailsStore.role=="admin"?(o(),n("div",Cs,[e("div",bs,[Ss,e("div",ys,[e("div",{class:f([l.showOrderDropDown?"custom-select-button-focus ":"custom-select-button "]),onClick:s[19]||(s[19]=i=>l.showOrderDropDown=!l.showOrderDropDown)},[_(m(l.skill.order)+" ",1),Ls],2),l.showOrderDropDown?(o(),n("div",xs,[(o(!0),n(p,null,v(l.orderArray,i=>(o(),n("div",{class:"custom-dropdown-option",onClick:g=>c.handleChooseSkillOrder(i)},m(i),9,Is))),256))])):a("",!0)])])])):a("",!0),e("div",Ds,[e("div",Ts,[d.userDetailsStore.role=="admin"?(o(),n("div",Hs,[e("div",Ms,[l.deleteButtonHover?(o(),n("div",{key:0,id:"danger-label",class:f({shake:l.deleteButtonHover})}," Danger !!! ",2)):a("",!0)]),e("div",null,[e("button",{class:"btn red-btn",onMouseover:s[20]||(s[20]=i=>l.deleteButtonHover=!0),onMouseleave:s[21]||(s[21]=i=>l.deleteButtonHover=!1),onClick:s[22]||(s[22]=i=>l.showModal=!0)},[_(" Delete "),Vs,Ps],32)])])):a("",!0),e("div",zs,[C(S,{class:"btn red-btn",to:"/skills"},{default:H(()=>[Bs,Rs]),_:1}),e("button",{class:"btn purple-btn",onClick:s[23]||(s[23]=i=>c.Submit())},Us)])])])]),l.showModal?(o(),n("div",Os,[e("div",Es,[e("div",qs,'Delete "'+m(l.skill.name)+'"',1),l.step1Confirm?a("",!0):(o(),n("div",js,Gs)),l.step1Confirm?(o(),n("div",Js,[e("label",Ks,'Enter "'+m(l.skill.name)+'" in the box below to confirm',1),u(e("input",{"onUpdate:modelValue":s[24]||(s[24]=i=>l.skillNameConfirm=i),class:"form-control",type:"text",placeholder:"name",onInput:s[25]||(s[25]=(...i)=>c.handleConfirmInputChange&&c.handleConfirmInputChange(...i))},null,544),[[k,l.skillNameConfirm]])])):a("",!0),e("div",Qs,[e("button",{class:"btn green-btn",onClick:s[26]||(s[26]=(...i)=>c.handleCancelDeleteSkill&&c.handleCancelDeleteSkill(...i))}," Cancel "),l.step1Confirm?a("",!0):(o(),n("button",{key:0,class:"btn red-btn",onClick:s[27]||(s[27]=i=>l.step1Confirm=!0)}," I still want to delete this skill ")),l.step1Confirm?(o(),n("button",{key:1,class:f([l.step2Confirm?"btn red-btn":"btn button-inactive"]),onClick:s[28]||(s[28]=i=>c.DeleteSkill(l.skill.id))}," Delete skill ",2)):a("",!0)])])])):a("",!0)],64)}const Xs=y(F,[["render",Ws],["__scopeId","data-v-3ca4ee94"]]),Ys=e("div",{id:"banner"},[e("img",{src:P,class:"image-fluid"})],-1),ll={__name:"EditSkillView",setup(t){return(s,h)=>(o(),n(p,null,[Ys,C(Xs)],64))}};export{ll as default};
