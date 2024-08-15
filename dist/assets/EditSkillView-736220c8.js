import{_ as S,l as L,f as x,J as I,r as D,o,c as n,b as e,w as u,q as p,a as d,A as f,x as _,t as m,F as k,s as v,D as T,I as w,d as b,i as H,p as M,e as V,j as C,K as P}from"./main-db8069f7.js";import{u as z,a as B}from"./TagsStore-52562be3.js";import{_ as R}from"./recurso-69-12793b41.js";const F={setup(){const l=L(),s=x(),h=z();h.tagsList.length==0&&h.getTagsList();const a=B(),t=I();return{skillsStore:s,tagsStore:h,skillTagsStore:a,router:t,userDetailsStore:l}},data(){return{skillId:this.$route.params.id,skills:[],skill:{id:"",name:"",parent:"",description:"",icon_image:"",banner_image:"",mastery_requirements:"",tags:[],type:null,level:null,order:null},filterChecked:!1,iconImage:"",bannerImage:"",superSkills:[],levels:[{id:"grade_school",name:"Grade school"},{id:"middle_school",name:"Middle school"},{id:"high_school",name:"High school"},{id:"college",name:"College"},{id:"phd",name:"PhD"}],showLevelDropDown:!1,showOrderDropDown:!1,showLevel:"",parentInput:{inputText:"",suggestSkills:[]},clusterParentInput:{inputText:"",suggestSuperSkills:[]},validate:{violated:!1,name:!1,description:!1,orphan:!1,superValidate:!1,noChild:!1},filters:[],deleteButtonHover:!1,showModal:!1,step1Confirm:!1,skillNameConfirm:"",step2Confirm:!1,orderArray:Array.from({length:20},(l,s)=>s+1),comment:""}},async mounted(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList(),this.getParentSkills()},methods:{getParentSkills(){for(let l=0;l<this.skillsStore.skillsList.length;l++)this.skillsStore.skillsList[l].id!=this.skillId&&(this.skillsStore.skillsList[l].type=="super"&&this.superSkills.push(this.skillsStore.skillsList[l]),this.skillsStore.skillsList[l].type!="sub"&&this.skills.push(this.skillsStore.skillsList[l]));this.getSkill()},getSkill(){fetch("/skills/show/"+this.skillId).then(function(l){return l.json()}).then(l=>{this.skill=l}).then(()=>{if(this.iconImage=this.skill.icon_image,this.bannerImage=this.skill.banner_image,$("#summernote").summernote("code",this.skill.mastery_requirements),this.skill.level!="domain"){const l=this.levels.find(s=>s.id===this.skill.level);this.showLevel=l.name}if(this.skill.parent!=0){const l=this.skills.find(s=>s.id===this.skill.parent);this.parentInput.inputText=l.name,this.clusterParentInput.inputText=l.name}this.getSkillFilters()})},async getSkillFilters(){this.skillTagsStore.skillTagsList.length==0&&await this.skillTagsStore.getSkillTagsList();for(let l=0;l<this.skillTagsStore.skillTagsList.length;l++)this.skillTagsStore.skillTagsList[l].skill_id==this.skillId&&this.filters.push(this.skillTagsStore.skillTagsList[l].tag_id)},async DeleteSkill(l){!this.step1Confirm||!this.step2Confirm||(await this.skillsStore.deleteSkill(l),this.router.push("/skills"))},onFileChange(l,s){var h=l.target.files||l.dataTransfer.files;h.length&&this.createImage(h[0],s)},createImage(l,s){new Image;var h=new FileReader,a=this;h.onload=t=>{a.image=t.target.result,s=="icon"?(this.iconImage=t.target.result,this.skill.icon_image=this.iconImage):(this.bannerImage=t.target.result,this.skill.banner_image=this.bannerImage)},h.readAsDataURL(l)},openImage(l){document.getElementById(l).click()},deleteImage(l){switch(l){case"icon":this.iconImage="";break;default:this.bannerImage="";break}},SubmitFilters(){fetch("/skill-tags/remove/"+this.skillId,{method:"DELETE"}).then(()=>{var l="/skill-tags/add/"+this.skillId;fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filters:this.filters})})})},Submit(){if(this.skill.type!="super"){var l=!1;for(let a=0;a<this.skillsStore.skillsList.length;a++)this.skillsStore.skillsList[a].type=="sub"&&this.skillsStore.skillsList[a].parent==this.skillId&&(l=!0);l&&(this.validate.superValidate=!0,this.validate.violated=!0,alert("Please delete outer cluster nodes belonging to the skill, before changing its type."))}if(this.skill.type=="domain")this.skill.level="domain";else if(this.skill.type=="sub"){this.skill.parent==0&&(this.validate.orphan=!0,this.validate.violated=!0,alert("cluster nodes must have a parent"));for(let a=0;a<this.skillsStore.skillsList.length;a++)this.skill.parent==this.skillsStore.skillsList[a].id&&(this.skill.level=this.skillsStore.skillsList[a].level),this.skillsStore.skillsList[a].parent==this.skillId&&(this.validate.noChild=!0,this.validate.violated=!0,alert("please delete this node's child skills, before changing it to a cluster child skill"))}if(this.skill.type!="domain"&&(this.skill.mastery_requirements=$("#summernote").summernote("code")),(this.skill.name===""||this.skill.name===null)&&(this.validate.name=!0,this.validate.violated=!0,alert("please enter a skill name")),this.validate.violated)return;const s={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.skill.name,parent:this.skill.parent,description:this.skill.description,icon_image:this.iconImage,banner_image:this.bannerImage,mastery_requirements:this.skill.mastery_requirements,type:this.skill.type,level:this.skill.level,order:this.skill.order,version_number:this.skill.version_number,comment:this.comment})};var h="/skills/"+this.skillId+"/edit";fetch(h,s).then(()=>{this.skillsStore.getNestedSkillsList(),this.SubmitFilters()}).then(()=>{this.$router.push(`/skills/${this.skillId}`)})},SubmitForReview(){this.skill.mastery_requirements=$("#summernote").summernote("code");const l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:this.userDetailsStore.userId,icon_image:this.iconImage,banner_image:this.bannerImage,mastery_requirements:this.skill.mastery_requirements,comment:this.comment})};var s="/skills/"+this.skillId+"/edit-for-review";fetch(s,l).then(()=>{alert(`This edit is being submitted for review.
We do this to prevent misinformation and sloppy wording from being added. If you would like to become an editor and help with this, please reach out.`),this.$router.back()})},handleChooseSkillLevel(l){this.showLevelDropDown=!1,this.showLevel=l.name,this.skill.level=l.id},handleChooseSkillOrder(l){this.showOrderDropDown=!1,this.skill.order=l},getReferenceSkill(){this.parentInput.inputText.length<2?this.parentInput.suggestSkills=[]:this.parentInput.suggestSkills=this.skills.filter(l=>l.name.toLowerCase().includes(this.parentInput.inputText.toLowerCase()))},handleChooseSuggestSkill(l){this.skill.parent=l.id,this.skill.type!="sub"?(this.parentInput.suggestSkills=[],this.parentInput.inputText=l.name):(this.clusterParentInput.suggestSuperSkills=[],this.clusterParentInput.inputText=l.name)},getSuperSkillSuggestion(){this.clusterParentInput.inputText.length<2?this.clusterParentInput.suggestSuperSkills=[]:this.clusterParentInput.suggestSuperSkills=this.superSkills.filter(l=>l.name.toLowerCase().includes(this.clusterParentInput.inputText.toLowerCase()))},handleChooseSuperSkill(l){this.clusterParentInput.suggestSuperSkills=[],this.skill.parent=l.id,this.clusterParentInput.inputText=l.name},handleCancelDeleteSkill(){this.showModal=!1,this.step1Confirm=!1,this.step2Confirm=!1,this.skillNameConfirm=""},handleConfirmInputChange(){this.skillNameConfirm==this.skill.name?this.step2Confirm=!0:this.step2Confirm=!1}}},r=l=>(M("data-v-38dfc9f5"),l=l(),V(),l),N={class:"container mt-4 pb-5 px-3 px-md-0"},O=r(()=>e("div",{class:"row mt-5"},[e("div",{class:"col-12 col-md-10 col-lg-5 d-flex align-items-baseline gap-3 mt-3"},[e("h1",{id:"page-tile"},"Edit Skill"),e("img",{src:R,id:"header-icon"})])],-1)),q={key:0},U={class:"row mt-5"},j={class:"col-12 col-md-8 col-lg-5 mt-2"},E={class:"mb-3"},A=r(()=>e("label",{for:"name",class:"form-label"},"Name",-1)),J={key:0,class:"form-validate"},Z={class:"row"},G={key:0},K={class:"col col-md-8 col-lg-5 mt-2"},W=r(()=>e("label",{class:"form-label"},"Level",-1)),Y={class:"d-flex flex-column position-relative"},Q=r(()=>e("span",null,[e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z",fill:"#344054"})])],-1)),X={key:0,class:"custom-dropdown-base"},ee=["onClick"],se={key:0,class:"row"},te={class:"col col-md-8 col-lg-5 mt-2"},le={key:0},ie=r(()=>e("label",{class:"form-label"},"Filters",-1)),oe={class:"col"},ne={class:"control control-checkbox"},re={class:"my-auto mx-2 me-4"},ae=["value"],de=r(()=>e("div",{class:"control_indicator"},null,-1)),ce={class:"row"},he={class:"col-12 col-md-8 col-lg-5 mt-2"},ue=r(()=>e("label",{class:"form-label"},"Node Type",-1)),me={class:"row p-0 m-0"},pe={class:"form-check col-6 col-md-5 my-2"},ke={class:"control control-checkbox"},_e=r(()=>e("span",{class:"my-auto mx-2 me-4"},"Regular",-1)),ge=r(()=>e("div",{class:"control_indicator"},null,-1)),fe={class:"form-check col-6 col-md-5 my-2"},ve={class:"control control-checkbox"},we=r(()=>e("span",{class:"my-auto mx-2 me-4"},"Category",-1)),be=r(()=>e("div",{class:"control_indicator"},null,-1)),Ce={class:"form-check col-6 col-md-5 my-2"},ye={class:"control control-checkbox"},Se=r(()=>e("span",{class:"my-auto mx-2 me-4"},"Cluster node center",-1)),Le=r(()=>e("div",{class:"control_indicator"},null,-1)),xe={class:"form-check col-6 col-md-5 my-2"},Ie={class:"control control-checkbox"},De=r(()=>e("span",{class:"my-auto mx-2 me-4"},"Cluster node outer",-1)),Te=r(()=>e("div",{class:"control_indicator"},null,-1)),He={key:0,class:"form-validate"},Me={key:1,class:"form-validate"},Ve={class:"row"},Pe={class:"col-12 col-md-8 col-lg-5 mt-2"},ze={key:0,class:"mb-3"},Be=r(()=>e("label",{class:"form-label"},"Parent",-1)),Re={class:"row mt-3"},Fe={class:"col position-relative"},Ne={key:0,id:"suggest-skills",class:"flex flex-column position-absolute"},Oe=["onClick"],qe={key:1,class:"mb-3"},Ue=r(()=>e("label",{class:"form-label"},"Cluster node center",-1)),je={class:"row mt-3"},Ee={class:"col position-relative"},Ae={key:0,id:"suggest-skills",class:"flex flex-column position-absolute"},Je=["onClick"],Ze={class:"row"},Ge={class:"col-8 col-md-3 col-lg-2 mt-2"},Ke={class:"mb-3 row d-flex justify-content-center justify-content-md-start w-100"},We=r(()=>e("label",{for:"image",class:"form-label"},"Icon",-1)),Ye={key:0},Qe={class:"default-no-img"},Xe=C('<svg width="33" height="33" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-38dfc9f5><circle cx="26.5" cy="26.5" r="26.5" fill="#D9D9D9" data-v-38dfc9f5></circle><g clip-path="url(#clip0_372_11959)" data-v-38dfc9f5><path d="M19.7439 45.0784L19.7439 33.2515L7.93354 33.268C7.40615 33.2671 6.90063 33.0572 6.52771 32.6843C6.15479 32.3114 5.94488 31.8059 5.94396 31.2785L5.93291 21.7174C5.93382 21.1901 6.14373 20.6845 6.51665 20.3116C6.88957 19.9387 7.3951 19.7288 7.92249 19.7279L19.7439 19.7334L19.7439 7.90646C19.7411 7.64223 19.7911 7.38009 19.8909 7.13543C19.9907 6.89076 20.1384 6.66849 20.3252 6.48164C20.5121 6.29479 20.7344 6.14713 20.979 6.0473C21.2237 5.94747 21.4858 5.8975 21.75 5.9003L31.2779 5.92241C31.8053 5.92332 32.3108 6.13322 32.6838 6.50615C33.0567 6.87907 33.2666 7.38459 33.2675 7.91198L33.262 19.7334L45.0889 19.7334C45.615 19.7337 46.1195 19.9428 46.4915 20.3148C46.8635 20.6869 47.0726 21.1913 47.073 21.7174L47.0951 31.2453C47.0948 31.7714 46.8856 32.2759 46.5136 32.6479C46.1416 33.0199 45.6371 33.229 45.111 33.2294L33.262 33.2515L33.2786 45.0618C33.2776 45.5892 33.0677 46.0947 32.6948 46.4677C32.3219 46.8406 31.8164 47.0505 31.289 47.0514L21.7501 47.0846C21.4858 47.0874 21.2237 47.0374 20.979 46.9376C20.7344 46.8377 20.5121 46.6901 20.3252 46.5032C20.1384 46.3164 19.9907 46.0941 19.8909 45.8494C19.7911 45.6048 19.7411 45.3426 19.7439 45.0784Z" fill="white" data-v-38dfc9f5></path></g><defs data-v-38dfc9f5><clipPath id="clip0_372_11959" data-v-38dfc9f5><rect width="37" height="37" fill="white" transform="translate(8 8)" data-v-38dfc9f5></rect></clipPath></defs></svg>',1),$e=[Xe],es=r(()=>e("p",{style:{"font-size":"14px"}},[e("em",null,"Maximum file size 15mb")],-1)),ss={key:1},ts=["src"],ls=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",height:"20",fill:"white"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),is={class:"col-12 col-lg-10 mt-2"},os={class:"mb-3 row"},ns=r(()=>e("label",{for:"image",class:"form-label"},"Banner",-1)),rs={key:0},as={class:"default-no-img"},ds=C('<svg width="33" height="33" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-38dfc9f5><circle cx="26.5" cy="26.5" r="26.5" fill="#D9D9D9" data-v-38dfc9f5></circle><g clip-path="url(#clip0_372_11959)" data-v-38dfc9f5><path d="M19.7439 45.0784L19.7439 33.2515L7.93354 33.268C7.40615 33.2671 6.90063 33.0572 6.52771 32.6843C6.15479 32.3114 5.94488 31.8059 5.94396 31.2785L5.93291 21.7174C5.93382 21.1901 6.14373 20.6845 6.51665 20.3116C6.88957 19.9387 7.3951 19.7288 7.92249 19.7279L19.7439 19.7334L19.7439 7.90646C19.7411 7.64223 19.7911 7.38009 19.8909 7.13543C19.9907 6.89076 20.1384 6.66849 20.3252 6.48164C20.5121 6.29479 20.7344 6.14713 20.979 6.0473C21.2237 5.94747 21.4858 5.8975 21.75 5.9003L31.2779 5.92241C31.8053 5.92332 32.3108 6.13322 32.6838 6.50615C33.0567 6.87907 33.2666 7.38459 33.2675 7.91198L33.262 19.7334L45.0889 19.7334C45.615 19.7337 46.1195 19.9428 46.4915 20.3148C46.8635 20.6869 47.0726 21.1913 47.073 21.7174L47.0951 31.2453C47.0948 31.7714 46.8856 32.2759 46.5136 32.6479C46.1416 33.0199 45.6371 33.229 45.111 33.2294L33.262 33.2515L33.2786 45.0618C33.2776 45.5892 33.0677 46.0947 32.6948 46.4677C32.3219 46.8406 31.8164 47.0505 31.289 47.0514L21.7501 47.0846C21.4858 47.0874 21.2237 47.0374 20.979 46.9376C20.7344 46.8377 20.5121 46.6901 20.3252 46.5032C20.1384 46.3164 19.9907 46.0941 19.8909 45.8494C19.7911 45.6048 19.7411 45.3426 19.7439 45.0784Z" fill="white" data-v-38dfc9f5></path></g><defs data-v-38dfc9f5><clipPath id="clip0_372_11959" data-v-38dfc9f5><rect width="37" height="37" fill="white" transform="translate(8 8)" data-v-38dfc9f5></rect></clipPath></defs></svg>',1),cs=[ds],hs=r(()=>e("p",{style:{"font-size":"14px"}},[e("em",null,"Maximum file size 15mb")],-1)),us={key:1},ms=["src"],ps=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",height:"20",fill:"white"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),ks={key:1,class:"row"},_s={class:"col"},gs={class:"mb-3"},fs=r(()=>e("label",{for:"description",class:"form-label"},"Description",-1)),vs={key:0,class:"form-validate"},ws={key:2,class:"mb-3"},bs=r(()=>e("div",{class:"d-flex justify-content-between"},[e("label",{for:"mastery_requirements",class:"form-label"},"Mastery Requirements")],-1)),Cs={key:3,class:"row"},ys={class:"col col-md-8 col-lg-5 mt-2"},Ss=r(()=>e("label",{class:"form-label"},[_("Order "),e("span",{style:{"font-weight":"400"}},"(optional: 0 is default)")],-1)),Ls={class:"d-flex flex-column position-relative"},xs=r(()=>e("span",null,[e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z",fill:"#344054"})])],-1)),Is={key:0,class:"custom-dropdown-base"},Ds=["onClick"],Ts={class:"row"},Hs={class:"col"},Ms={class:"mb-3"},Vs=r(()=>e("label",{for:"description",class:"form-label"},"Comment",-1)),Ps={class:"row"},zs={class:"d-flex justify-content-between"},Bs={key:0,class:"d-flex flex-column"},Rs={id:"danger-label-div"},Fs=r(()=>e("span",{class:"d-none d-md-block"}," skill ",-1)),Ns=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",height:"20",fill:"white",class:"ms-1"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),Os={class:"d-flex justify-content-end gap-md-4 gap-1 align-items-end"},qs=r(()=>e("div",{class:"d-none d-md-block"},"Cancel",-1)),Us=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"white",class:"d-md-none exit-icon"},[e("path",{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"})],-1)),js=r(()=>e("div",{class:"d-none d-md-block"},"Submit",-1)),Es=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"white",height:"20",width:"20",class:"d-md-none"},[e("path",{d:"M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"})],-1)),As=[js,Es],Js=r(()=>e("div",{class:"d-none d-md-block"},"Submit for review",-1)),Zs=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"white",height:"20",width:"20",class:"d-md-none"},[e("path",{d:"M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"})],-1)),Gs=[Js,Zs],Ks={key:0,id:"myModal",class:"modal"},Ws={class:"modal-content d-flex flex-column"},Ys={class:"mb-4"},Qs={key:0,id:"warning-section",class:"d-flex align-items-center"},Xs=r(()=>e("div",{class:"me-3"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"15",height:"15",fill:"#eed888"},[e("path",{d:"M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"})])],-1)),$s=r(()=>e("div",null," This action will delete this skill and all its nested skills, and is not reversible. ",-1)),et=[Xs,$s],st={key:1},tt={for:"name",class:"conform-label"},lt={class:"mt-3 d-flex justify-content-between"};function it(l,s,h,a,t,c){const y=D("router-link");return o(),n(k,null,[e("div",N,[O,a.userDetailsStore.role=="admin"||a.userDetailsStore.role=="editor"?(o(),n("div",q,[e("div",U,[e("div",j,[e("div",E,[A,u(e("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>t.skill.name=i),class:"form-control",type:"text",placeholder:"name"},null,512),[[p,t.skill.name]]),t.validate.name&&(t.skill.name==""||t.skill.name==null)?(o(),n("div",J," please enter a skill name ")):d("",!0)])])]),e("div",Z,[t.skill.type!="domain"&&t.skill.type!="sub"?(o(),n("div",G,[e("div",K,[W,e("div",Y,[e("div",{class:f([t.showLevelDropDown?"custom-select-button-focus ":"custom-select-button "]),onClick:s[1]||(s[1]=i=>t.showLevelDropDown=!t.showLevelDropDown)},[_(m(t.showLevel)+" ",1),Q],2),t.showLevelDropDown?(o(),n("div",X,[(o(!0),n(k,null,v(t.levels,i=>(o(),n("div",{class:"custom-dropdown-option",onClick:g=>c.handleChooseSkillLevel(i)},m(i.name),9,ee))),256))])):d("",!0)])])])):d("",!0)]),a.userDetailsStore.role=="admin"?(o(),n("div",se,[e("div",te,[t.skill.type!="sub"?(o(),n("div",le,[ie,e("div",oe,[(o(!0),n(k,null,v(a.tagsStore.tagsList,i=>(o(),n("label",ne,[e("span",re,m(i.name),1),u(e("input",{type:"checkbox",value:i.id,"onUpdate:modelValue":s[2]||(s[2]=g=>t.filters=g)},null,8,ae),[[T,t.filters]]),de]))),256))])])):d("",!0)])])):d("",!0),e("div",ce,[e("div",he,[ue,e("div",me,[e("div",pe,[e("label",ke,[_e,u(e("input",{type:"radio",name:"nodeType",id:"regularSkillRadio",value:"regular","onUpdate:modelValue":s[3]||(s[3]=i=>t.skill.type=i)},null,512),[[w,t.skill.type]]),ge])]),e("div",fe,[e("label",ve,[we,u(e("input",{type:"radio",name:"nodeType",id:"domainSkillRadio",value:"domain","onUpdate:modelValue":s[4]||(s[4]=i=>t.skill.type=i)},null,512),[[w,t.skill.type]]),be])]),e("div",Ce,[e("label",ye,[Se,u(e("input",{type:"radio",name:"nodeType",id:"superSkillRadio",value:"super","onUpdate:modelValue":s[5]||(s[5]=i=>t.skill.type=i)},null,512),[[w,t.skill.type]]),Le])]),e("div",xe,[e("label",Ie,[De,u(e("input",{type:"radio",name:"nodeType",id:"regularSkillRadio",value:"sub","onUpdate:modelValue":s[6]||(s[6]=i=>t.skill.type=i)},null,512),[[w,t.skill.type]]),Te])])]),t.validate.orphan&&this.skill.type=="sub"&&this.skill.parent==0?(o(),n("div",He," please choose a parent for this skill ")):d("",!0),t.validate.noChild&&this.skill.type=="sub"?(o(),n("div",Me," please delete this node's child skills, before changing it to a cluster child skill ")):d("",!0)])]),e("div",Ve,[e("div",Pe,[t.skill.type!="sub"?(o(),n("div",ze,[Be,e("div",Re,[e("div",Fe,[u(e("input",{id:"skill-input","onUpdate:modelValue":s[7]||(s[7]=i=>t.parentInput.inputText=i),onInput:s[8]||(s[8]=(...i)=>c.getReferenceSkill&&c.getReferenceSkill(...i)),placeholder:"type skill name"},null,544),[[p,t.parentInput.inputText]]),t.parentInput.suggestSkills.length>0?(o(),n("div",Ne,[(o(!0),n(k,null,v(t.parentInput.suggestSkills,i=>(o(),n("div",{class:"suggest-option",onClick:g=>c.handleChooseSuggestSkill(i)},m(i.name),9,Oe))),256))])):d("",!0)])])])):(o(),n("div",qe,[Ue,e("div",je,[e("div",Ee,[u(e("input",{id:"skill-input","onUpdate:modelValue":s[9]||(s[9]=i=>t.clusterParentInput.inputText=i),onInput:s[10]||(s[10]=(...i)=>c.getSuperSkillSuggestion&&c.getSuperSkillSuggestion(...i)),placeholder:"type skill name"},null,544),[[p,t.clusterParentInput.inputText]]),t.clusterParentInput.suggestSuperSkills.length>0?(o(),n("div",Ae,[(o(!0),n(k,null,v(t.clusterParentInput.suggestSuperSkills,i=>(o(),n("div",{class:"suggest-option",onClick:g=>c.handleChooseSuggestSkill(i)},m(i.name),9,Je))),256))])):d("",!0)])])]))])])])):d("",!0),e("div",Ze,[e("div",Ge,[e("div",Ke,[We,t.iconImage?(o(),n("div",ss,[e("p",null,[e("img",{src:t.iconImage,height:"158",width:"158",style:{"background-color":"lightgrey"}},null,8,ts)]),e("p",null,[e("button",{class:"btn red-btn",onClick:s[13]||(s[13]=i=>c.deleteImage("icon"))},[_(" Remove    "),ls])])])):(o(),n("div",Ye,[e("input",{class:"form-control d-none",type:"file",accept:"image/*",onChange:s[11]||(s[11]=i=>c.onFileChange(i,"icon")),id:"iconFileChoose"},null,32),e("div",Qe,[e("div",{class:"plus-svg",onClick:s[12]||(s[12]=i=>c.openImage("iconFileChoose"))},$e)]),es]))])]),e("div",is,[e("div",os,[ns,t.bannerImage?(o(),n("div",us,[e("p",null,[e("img",{src:t.bannerImage,height:"158",width:"1175",style:{"background-color":"lightgrey"},class:"banner-image rounded"},null,8,ms)]),e("p",null,[e("button",{class:"btn red-btn",onClick:s[16]||(s[16]=i=>c.deleteImage("banner"))},[_(" Remove    "),ps])])])):(o(),n("div",rs,[e("input",{class:"form-control d-none",type:"file",accept:"image/*",onChange:s[14]||(s[14]=i=>c.onFileChange(i,"banner")),id:"bannerFileChoose"},null,32),e("div",as,[e("div",{class:"plus-svg",onClick:s[15]||(s[15]=i=>c.openImage("bannerFileChoose"))},cs)]),hs]))])])]),a.userDetailsStore.role=="admin"?(o(),n("div",ks,[e("div",_s,[e("div",gs,[fs,u(e("textarea",{"onUpdate:modelValue":s[17]||(s[17]=i=>t.skill.description=i),class:"form-control",rows:"2"},null,512),[[p,t.skill.description]])]),e("div",null,[t.validate.description?(o(),n("div",vs," please enter description for skill ")):d("",!0)])])])):d("",!0),t.skill.type!="domain"?(o(),n("div",ws,[bs,u(e("textarea",{class:"form-control","onUpdate:modelValue":s[18]||(s[18]=i=>t.skill.mastery_requirements=i),id:"summernote",rows:"3"},null,512),[[p,t.skill.mastery_requirements]])])):d("",!0),a.userDetailsStore.role=="admin"?(o(),n("div",Cs,[e("div",ys,[Ss,e("div",Ls,[e("div",{class:f([t.showOrderDropDown?"custom-select-button-focus ":"custom-select-button "]),onClick:s[19]||(s[19]=i=>t.showOrderDropDown=!t.showOrderDropDown)},[_(m(t.skill.order)+" ",1),xs],2),t.showOrderDropDown?(o(),n("div",Is,[(o(!0),n(k,null,v(t.orderArray,i=>(o(),n("div",{class:"custom-dropdown-option",onClick:g=>c.handleChooseSkillOrder(i)},m(i),9,Ds))),256))])):d("",!0)])])])):d("",!0),e("div",Ts,[e("div",Hs,[e("div",Ms,[Vs,u(e("textarea",{"onUpdate:modelValue":s[20]||(s[20]=i=>t.comment=i),class:"form-control",rows:"2"},null,512),[[p,t.comment]])]),t.comment.length>255?(o(),n("div",{key:0,class:f([l.shake?"click-shake form-validate":"form-validate initial-shake"])}," Your comment has too many words !! ",2)):d("",!0)])]),e("div",Ps,[e("div",zs,[a.userDetailsStore.role=="admin"?(o(),n("div",Bs,[e("div",Rs,[t.deleteButtonHover?(o(),n("div",{key:0,id:"danger-label",class:f({shake:t.deleteButtonHover})}," Danger !!! ",2)):d("",!0)]),e("div",null,[e("button",{class:"btn red-btn",onMouseover:s[21]||(s[21]=i=>t.deleteButtonHover=!0),onMouseleave:s[22]||(s[22]=i=>t.deleteButtonHover=!1),onClick:s[23]||(s[23]=i=>t.showModal=!0)},[_(" Delete "),Fs,Ns],32)])])):d("",!0),e("div",Os,[b(y,{class:"btn red-btn",to:"/skills"},{default:H(()=>[qs,Us]),_:1}),a.userDetailsStore.role=="admin"||a.userDetailsStore.role=="editor"?(o(),n("button",{key:0,class:"btn purple-btn",onClick:s[24]||(s[24]=i=>c.Submit())},As)):a.userDetailsStore.role=="instructor"||a.userDetailsStore.role=="student"?(o(),n("button",{key:1,class:"btn purple-btn",onClick:s[25]||(s[25]=i=>c.SubmitForReview())},Gs)):d("",!0)])])])]),t.showModal?(o(),n("div",Ks,[e("div",Ws,[e("div",Ys,'Delete "'+m(t.skill.name)+'"',1),t.step1Confirm?d("",!0):(o(),n("div",Qs,et)),t.step1Confirm?(o(),n("div",st,[e("label",tt,'Enter "'+m(t.skill.name)+'" in the box below to confirm',1),u(e("input",{"onUpdate:modelValue":s[26]||(s[26]=i=>t.skillNameConfirm=i),class:"form-control",type:"text",placeholder:"name",onInput:s[27]||(s[27]=(...i)=>c.handleConfirmInputChange&&c.handleConfirmInputChange(...i))},null,544),[[p,t.skillNameConfirm]])])):d("",!0),e("div",lt,[e("button",{class:"btn green-btn",onClick:s[28]||(s[28]=(...i)=>c.handleCancelDeleteSkill&&c.handleCancelDeleteSkill(...i))}," Cancel "),t.step1Confirm?d("",!0):(o(),n("button",{key:0,class:"btn red-btn",onClick:s[29]||(s[29]=i=>t.step1Confirm=!0)}," I still want to delete this skill ")),t.step1Confirm?(o(),n("button",{key:1,class:f([t.step2Confirm?"btn red-btn":"btn button-inactive"]),onClick:s[30]||(s[30]=i=>c.DeleteSkill(t.skill.id))}," Delete skill ",2)):d("",!0)])])])):d("",!0)],64)}const ot=S(F,[["render",it],["__scopeId","data-v-38dfc9f5"]]),nt=e("div",{id:"banner"},[e("img",{src:P,class:"image-fluid"})],-1),ct={__name:"EditSkillView",setup(l){return(s,h)=>(o(),n(k,null,[nt,b(ot)],64))}};export{ct as default};
