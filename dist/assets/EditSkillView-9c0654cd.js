import{_ as x,l as I,f as L,L as T,r as P,o,c as n,b as e,w as u,s as m,a,C as f,y as v,t as p,F as k,x as g,G as w,K as S,d as b,i as D,p as M,e as H,j as C,M as V}from"./main-d8374350.js";import{u as z,a as B}from"./TagsStore-a812f237.js";import{_ as R}from"./recurso-69-12793b41.js";const U={setup(){const l=I(),s=L(),h=z();h.tagsList.length==0&&h.getTagsList();const c=B(),t=T();return{skillsStore:s,tagsStore:h,skillTagsStore:c,router:t,userDetailsStore:l}},data(){return{skillId:this.$route.params.id,skills:[],skill:{id:"",name:"",parent:"",description:"",icon_image:"",banner_image:"",mastery_requirements:"",tags:[],type:null,level:null,order:null,optional_parent_2:"",optional_parent_3:""},filterChecked:!1,iconImage:"",bannerImage:"",superSkills:[],levels:[{id:"grade_school",name:"Grade school"},{id:"middle_school",name:"Middle school"},{id:"high_school",name:"High school"},{id:"college",name:"College"},{id:"phd",name:"PhD"}],showLevelDropDown:!1,showOrderDropDown:!1,showLevel:"",parentInput:{inputText:"",suggestSkills:[]},clusterParentInput:{inputText:"",suggestSuperSkills:[]},clusterSecondParentInput:{inputText:"",suggestSuperSkills:[]},clusterThirdParentInput:{inputText:"",suggestSuperSkills:[]},validate:{violated:!1,name:!1,description:!1,orphan:!1,superValidate:!1,noChild:!1},filters:[],deleteButtonHover:!1,showModal:!1,step1Confirm:!1,skillNameConfirm:"",step2Confirm:!1,orderArray:Array.from({length:20},(l,s)=>s+1),comment:"",isTwoParents:!1,isThreeParents:!1,optional_parent_2:null,optional_parent_3:null}},async mounted(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList(),this.getParentSkills()},methods:{getParentSkills(){for(let l=0;l<this.skillsStore.skillsList.length;l++)this.skillsStore.skillsList[l].id!=this.skillId&&(this.skillsStore.skillsList[l].type=="super"&&this.superSkills.push(this.skillsStore.skillsList[l]),this.skillsStore.skillsList[l].type!="sub"&&this.skills.push(this.skillsStore.skillsList[l]));this.skills.unshift({name:"None",id:0}),this.getSkill()},getSkill(){fetch("/skills/show/"+this.skillId).then(function(l){return l.json()}).then(l=>{this.skill=l}).then(()=>{if(this.iconImage=this.skill.icon_image,this.bannerImage=this.skill.banner_image,$("#summernote").summernote("code",this.skill.mastery_requirements),this.skill.level!="domain"){const l=this.levels.find(s=>s.id===this.skill.level);this.showLevel=l.name}if(this.skill.parent!=0){const l=this.skills.find(s=>s.id===this.skill.parent);this.parentInput.inputText=l.name,this.clusterParentInput.inputText=l.name}if(this.skill.optional_parent_2!=null){this.isTwoParents=!0;const l=this.skills.find(s=>s.id===this.skill.optional_parent_2);this.clusterSecondParentInput.inputText=l.name}if(this.skill.optional_parent_3!=null){this.isThreeParents=!0;const l=this.skills.find(s=>s.id===this.skill.optional_parent_3);this.clusterThirdParentInput.inputText=l.name}this.getSkillFilters()})},async getSkillFilters(){this.skillTagsStore.skillTagsList.length==0&&await this.skillTagsStore.getSkillTagsList();for(let l=0;l<this.skillTagsStore.skillTagsList.length;l++)this.skillTagsStore.skillTagsList[l].skill_id==this.skillId&&this.filters.push(this.skillTagsStore.skillTagsList[l].tag_id)},async DeleteSkill(l){!this.step1Confirm||!this.step2Confirm||(await this.skillsStore.deleteSkill(l),this.router.push("/skills"))},onFileChange(l,s){var h=l.target.files||l.dataTransfer.files;h.length&&this.createImage(h[0],s)},createImage(l,s){new Image;var h=new FileReader,c=this;h.onload=t=>{c.image=t.target.result,s=="icon"?(this.iconImage=t.target.result,this.skill.icon_image=this.iconImage):(this.bannerImage=t.target.result,this.skill.banner_image=this.bannerImage)},h.readAsDataURL(l)},openImage(l){document.getElementById(l).click()},deleteImage(l){switch(l){case"icon":this.iconImage="";break;default:this.bannerImage="";break}},SubmitFilters(){fetch("/skill-tags/remove/"+this.skillId,{method:"DELETE"}).then(()=>{var l="/skill-tags/add/"+this.skillId;fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filters:this.filters})})})},Submit(){if(this.isTwoParents==!1&&(this.skill.optional_parent_2=null,this.skill.optional_parent_3=null),this.isThreeParents==!1&&(this.skill.optional_parent_3=null),(this.skill.parent==this.skill.optional_parent_2||this.skill.parent==this.skill.optional_parent_3||this.skill.optional_parent_3==this.skill.optional_parent_2)&&this.skill.optional_parent_3!=null){alert("The same skill cannot be a parent more than once.");return}if(this.skill.type!="super"){var l=!1;for(let c=0;c<this.skillsStore.skillsList.length;c++)this.skillsStore.skillsList[c].type=="sub"&&this.skillsStore.skillsList[c].parent==this.skillId&&(l=!0);l&&(this.validate.superValidate=!0,this.validate.violated=!0,alert("Please delete outer cluster nodes belonging to the skill, before changing its type."))}if(this.skill.type=="domain")this.skill.level="domain";else if(this.skill.type=="sub"){this.skill.parent==0&&(this.validate.orphan=!0,this.validate.violated=!0,alert("cluster nodes must have a parent"));for(let c=0;c<this.skillsStore.skillsList.length;c++)this.skill.parent==this.skillsStore.skillsList[c].id&&(this.skill.level=this.skillsStore.skillsList[c].level),this.skillsStore.skillsList[c].parent==this.skillId&&(this.validate.noChild=!0,this.validate.violated=!0,alert("please delete this node's child skills, before changing it to a cluster child skill"))}if(this.skill.type!="domain"&&(this.skill.mastery_requirements=$("#summernote").summernote("code")),(this.skill.name===""||this.skill.name===null)&&(this.validate.name=!0,this.validate.violated=!0,alert("please enter a skill name")),this.validate.violated)return;const s={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.skill.name,parent:this.skill.parent,description:this.skill.description,icon_image:this.iconImage,banner_image:this.bannerImage,mastery_requirements:this.skill.mastery_requirements,type:this.skill.type,level:this.skill.level,order:this.skill.order,version_number:this.skill.version_number,comment:this.comment,optional_parent_2:this.skill.optional_parent_2,optional_parent_3:this.skill.optional_parent_3})};var h="/skills/"+this.skillId+"/edit";fetch(h,s).then(()=>{this.skillsStore.getNestedSkillsList(),this.SubmitFilters()}).then(()=>{this.skill.type=="domain"?this.router.push("/skills"):this.$router.push(`/skills/${this.skillId}`)})},SubmitForReview(){this.skill.mastery_requirements=$("#summernote").summernote("code");const l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:this.userDetailsStore.userId,icon_image:this.iconImage,banner_image:this.bannerImage,mastery_requirements:this.skill.mastery_requirements,comment:this.comment})};var s="/skills/"+this.skillId+"/edit-for-review";fetch(s,l).then(()=>{alert(`This edit is being submitted for review.
We do this to prevent misinformation and sloppy wording from being added. If you would like to become an editor and help with this, please reach out.`),this.$router.back()})},handleChooseSkillLevel(l){this.showLevelDropDown=!1,this.showLevel=l.name,this.skill.level=l.id},handleChooseSkillOrder(l){this.showOrderDropDown=!1,this.skill.order=l},getReferenceSkill(){this.parentInput.inputText.length<2?this.parentInput.suggestSkills=[]:this.parentInput.suggestSkills=this.skills.filter(l=>l.name.toLowerCase().includes(this.parentInput.inputText.toLowerCase()))},handleChooseSuggestSkill(l){this.skill.parent=l.id,this.skill.type!="sub"?(this.parentInput.suggestSkills=[],this.parentInput.inputText=l.name):(this.clusterParentInput.suggestSuperSkills=[],this.clusterParentInput.inputText=l.name)},handleChooseSecondSuggestSkill(l){this.skill.optional_parent_2=l.id,this.clusterSecondParentInput.inputText=l.name,this.clusterSecondParentInput.suggestSuperSkills=[]},handleChooseThirdSuggestSkill(l){this.skill.optional_parent_3=l.id,this.clusterThirdParentInput.inputText=l.name,this.clusterThirdParentInput.suggestSuperSkills=[]},getSuperSkillSuggestion(){this.clusterParentInput.inputText.length<2?this.clusterParentInput.suggestSuperSkills=[]:this.clusterParentInput.suggestSuperSkills=this.superSkills.filter(l=>l.name.toLowerCase().includes(this.clusterParentInput.inputText.toLowerCase()))},getSecondSuperSkillSuggestion(){this.clusterSecondParentInput.inputText.length<2?this.clusterSecondParentInput.suggestSuperSkills=[]:this.clusterSecondParentInput.suggestSuperSkills=this.skills.filter(l=>l.name.toLowerCase().includes(this.clusterSecondParentInput.inputText.toLowerCase()))},getThirdSuperSkillSuggestion(){this.clusterThirdParentInput.inputText.length<2?this.clusterThirdParentInput.suggestSuperSkills=[]:this.clusterThirdParentInput.suggestSuperSkills=this.skills.filter(l=>l.name.toLowerCase().includes(this.clusterThirdParentInput.inputText.toLowerCase()))},handleChooseSuperSkill(l){this.clusterParentInput.suggestSuperSkills=[],this.skill.parent=l.id,this.clusterParentInput.inputText=l.name},handleCancelDeleteSkill(){this.showModal=!1,this.step1Confirm=!1,this.step2Confirm=!1,this.skillNameConfirm=""},handleConfirmInputChange(){this.skillNameConfirm==this.skill.name?this.step2Confirm=!0:this.step2Confirm=!1}}},r=l=>(M("data-v-2d9da86d"),l=l(),H(),l),F={class:"container mt-4 pb-5 px-3 px-md-0"},N=r(()=>e("div",{class:"row mt-5"},[e("div",{class:"col-12 col-md-10 col-lg-5 d-flex align-items-baseline gap-3 mt-3"},[e("h1",{id:"page-tile"},"Edit Skill"),e("img",{src:R,id:"header-icon"})])],-1)),O={key:0},q={class:"row mt-5"},j={class:"col-12 col-md-8 col-lg-5 mt-2"},E={class:"mb-3"},A=r(()=>e("label",{for:"name",class:"form-label"},"Name",-1)),Z={key:0,class:"form-validate"},J={class:"row"},G={key:0},K={class:"col col-md-8 col-lg-5 mt-2"},W=r(()=>e("label",{class:"form-label"},"Level",-1)),Y={class:"d-flex flex-column position-relative"},Q=r(()=>e("span",null,[e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z",fill:"#344054"})])],-1)),X={key:0,class:"custom-dropdown-base"},ee=["onClick"],se={key:0,class:"row"},te={class:"col col-md-8 col-lg-5 mt-2"},le={key:0},ie=r(()=>e("label",{class:"form-label"},"Filters",-1)),oe={class:"col"},ne={class:"control control-checkbox"},re={class:"my-auto mx-2 me-4"},ae=["value"],de=r(()=>e("div",{class:"control_indicator"},null,-1)),ce={class:"row"},ue={class:"col-12 col-md-8 col-lg-5 mt-2"},he=r(()=>e("label",{class:"form-label"},"Node Type",-1)),pe={class:"row p-0 m-0"},me={class:"form-check col-6 col-md-5 my-2"},ke={class:"control control-checkbox"},_e=r(()=>e("span",{class:"my-auto mx-2 me-4"},"Regular",-1)),ge=r(()=>e("div",{class:"control_indicator"},null,-1)),ve={class:"form-check col-6 col-md-5 my-2"},fe={class:"control control-checkbox"},Se=r(()=>e("span",{class:"my-auto mx-2 me-4"},"Category",-1)),we=r(()=>e("div",{class:"control_indicator"},null,-1)),be={class:"form-check col-6 col-md-5 my-2"},Ce={class:"control control-checkbox"},ye=r(()=>e("span",{class:"my-auto mx-2 me-4"},"Cluster node center",-1)),xe=r(()=>e("div",{class:"control_indicator"},null,-1)),Ie={class:"form-check col-6 col-md-5 my-2"},Le={class:"control control-checkbox"},Te=r(()=>e("span",{class:"my-auto mx-2 me-4"},"Cluster node outer",-1)),Pe=r(()=>e("div",{class:"control_indicator"},null,-1)),De={key:0,class:"form-validate"},Me={key:1,class:"form-validate"},He={class:"row"},Ve={class:"col-12 col-md-8 col-lg-5 mt-2"},ze={key:0,class:"mb-3"},Be=r(()=>e("label",{class:"form-label"},"Parent",-1)),Re={class:"row mt-3"},Ue={class:"col position-relative"},Fe={key:0,id:"suggest-skills",class:"flex flex-column position-absolute"},Ne=["onClick"],Oe={key:1,class:"mb-3"},qe=r(()=>e("label",{class:"form-label"},"Cluster node center",-1)),je={class:"row mt-3"},Ee={class:"col position-relative"},Ae={key:0,id:"suggest-skills",class:"flex flex-column position-absolute"},Ze=["onClick"],Je={class:"form-check col-6 col-md-5 my-2"},Ge={class:"control control-checkbox"},Ke=r(()=>e("span",{class:"my-auto mx-2 me-4"},"Does this skill need to appear 2 places? ",-1)),We=r(()=>e("div",{class:"control_indicator"},null,-1)),Ye={key:1},Qe={class:"col col-md-8 col-lg-5 mt-2"},Xe=r(()=>e("label",{class:"form-label"},"Second Parent",-1)),$e={class:"row mt-3"},es={class:"col position-relative"},ss={key:0,id:"suggest-skills",class:"flex flex-column position-absolute"},ts=["onClick"],ls={class:"form-check col-6 col-md-5 my-2"},is={class:"control control-checkbox"},os=r(()=>e("span",{class:"my-auto mx-2 me-4"},"Does this skill need to appear 3 places? ",-1)),ns=r(()=>e("div",{class:"control_indicator"},null,-1)),rs={key:0},as={class:"col col-md-8 col-lg-5 mt-2"},ds=r(()=>e("label",{class:"form-label"},"Third Parent",-1)),cs={class:"row mt-3"},us={class:"col position-relative"},hs={key:0,id:"suggest-skills",class:"flex flex-column position-absolute"},ps=["onClick"],ms={class:"row"},ks={class:"col-8 col-md-3 col-lg-2 mt-2"},_s={class:"mb-3 row d-flex justify-content-center justify-content-md-start w-100"},gs=r(()=>e("label",{for:"image",class:"form-label"},"Icon",-1)),vs={key:0},fs={class:"default-no-img"},Ss=C('<svg width="33" height="33" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2d9da86d><circle cx="26.5" cy="26.5" r="26.5" fill="#D9D9D9" data-v-2d9da86d></circle><g clip-path="url(#clip0_372_11959)" data-v-2d9da86d><path d="M19.7439 45.0784L19.7439 33.2515L7.93354 33.268C7.40615 33.2671 6.90063 33.0572 6.52771 32.6843C6.15479 32.3114 5.94488 31.8059 5.94396 31.2785L5.93291 21.7174C5.93382 21.1901 6.14373 20.6845 6.51665 20.3116C6.88957 19.9387 7.3951 19.7288 7.92249 19.7279L19.7439 19.7334L19.7439 7.90646C19.7411 7.64223 19.7911 7.38009 19.8909 7.13543C19.9907 6.89076 20.1384 6.66849 20.3252 6.48164C20.5121 6.29479 20.7344 6.14713 20.979 6.0473C21.2237 5.94747 21.4858 5.8975 21.75 5.9003L31.2779 5.92241C31.8053 5.92332 32.3108 6.13322 32.6838 6.50615C33.0567 6.87907 33.2666 7.38459 33.2675 7.91198L33.262 19.7334L45.0889 19.7334C45.615 19.7337 46.1195 19.9428 46.4915 20.3148C46.8635 20.6869 47.0726 21.1913 47.073 21.7174L47.0951 31.2453C47.0948 31.7714 46.8856 32.2759 46.5136 32.6479C46.1416 33.0199 45.6371 33.229 45.111 33.2294L33.262 33.2515L33.2786 45.0618C33.2776 45.5892 33.0677 46.0947 32.6948 46.4677C32.3219 46.8406 31.8164 47.0505 31.289 47.0514L21.7501 47.0846C21.4858 47.0874 21.2237 47.0374 20.979 46.9376C20.7344 46.8377 20.5121 46.6901 20.3252 46.5032C20.1384 46.3164 19.9907 46.0941 19.8909 45.8494C19.7911 45.6048 19.7411 45.3426 19.7439 45.0784Z" fill="white" data-v-2d9da86d></path></g><defs data-v-2d9da86d><clipPath id="clip0_372_11959" data-v-2d9da86d><rect width="37" height="37" fill="white" transform="translate(8 8)" data-v-2d9da86d></rect></clipPath></defs></svg>',1),ws=[Ss],bs=r(()=>e("p",{style:{"font-size":"14px"}},[e("em",null,"Maximum file size 15mb")],-1)),Cs={key:1},ys=["src"],xs=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",height:"20",fill:"white"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),Is={class:"col-12 col-lg-10 mt-2"},Ls={class:"mb-3 row"},Ts=r(()=>e("label",{for:"image",class:"form-label"},"Banner",-1)),Ps={key:0},Ds={class:"default-no-img"},Ms=C('<svg width="33" height="33" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2d9da86d><circle cx="26.5" cy="26.5" r="26.5" fill="#D9D9D9" data-v-2d9da86d></circle><g clip-path="url(#clip0_372_11959)" data-v-2d9da86d><path d="M19.7439 45.0784L19.7439 33.2515L7.93354 33.268C7.40615 33.2671 6.90063 33.0572 6.52771 32.6843C6.15479 32.3114 5.94488 31.8059 5.94396 31.2785L5.93291 21.7174C5.93382 21.1901 6.14373 20.6845 6.51665 20.3116C6.88957 19.9387 7.3951 19.7288 7.92249 19.7279L19.7439 19.7334L19.7439 7.90646C19.7411 7.64223 19.7911 7.38009 19.8909 7.13543C19.9907 6.89076 20.1384 6.66849 20.3252 6.48164C20.5121 6.29479 20.7344 6.14713 20.979 6.0473C21.2237 5.94747 21.4858 5.8975 21.75 5.9003L31.2779 5.92241C31.8053 5.92332 32.3108 6.13322 32.6838 6.50615C33.0567 6.87907 33.2666 7.38459 33.2675 7.91198L33.262 19.7334L45.0889 19.7334C45.615 19.7337 46.1195 19.9428 46.4915 20.3148C46.8635 20.6869 47.0726 21.1913 47.073 21.7174L47.0951 31.2453C47.0948 31.7714 46.8856 32.2759 46.5136 32.6479C46.1416 33.0199 45.6371 33.229 45.111 33.2294L33.262 33.2515L33.2786 45.0618C33.2776 45.5892 33.0677 46.0947 32.6948 46.4677C32.3219 46.8406 31.8164 47.0505 31.289 47.0514L21.7501 47.0846C21.4858 47.0874 21.2237 47.0374 20.979 46.9376C20.7344 46.8377 20.5121 46.6901 20.3252 46.5032C20.1384 46.3164 19.9907 46.0941 19.8909 45.8494C19.7911 45.6048 19.7411 45.3426 19.7439 45.0784Z" fill="white" data-v-2d9da86d></path></g><defs data-v-2d9da86d><clipPath id="clip0_372_11959" data-v-2d9da86d><rect width="37" height="37" fill="white" transform="translate(8 8)" data-v-2d9da86d></rect></clipPath></defs></svg>',1),Hs=[Ms],Vs=r(()=>e("p",{style:{"font-size":"14px"}},[e("em",null,"Maximum file size 15mb")],-1)),zs={key:1},Bs=["src"],Rs=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",height:"20",fill:"white"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),Us={key:1,class:"row"},Fs={class:"col"},Ns={class:"mb-3"},Os=r(()=>e("label",{for:"description",class:"form-label"},"Description",-1)),qs={key:0,class:"form-validate"},js={key:2,class:"mb-3"},Es=r(()=>e("div",{class:"d-flex justify-content-between"},[e("label",{for:"mastery_requirements",class:"form-label"},"Mastery Requirements")],-1)),As={key:3,class:"row"},Zs={class:"col col-md-8 col-lg-5 mt-2"},Js=r(()=>e("label",{class:"form-label"},[v("Order "),e("span",{style:{"font-weight":"400"}},"(optional: 0 is default)")],-1)),Gs={class:"d-flex flex-column position-relative"},Ks=r(()=>e("span",null,[e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z",fill:"#344054"})])],-1)),Ws={key:0,class:"custom-dropdown-base"},Ys=["onClick"],Qs={class:"row"},Xs={class:"col"},$s={class:"mb-3"},et=r(()=>e("label",{for:"description",class:"form-label"},"Comment",-1)),st={class:"row"},tt={class:"d-flex justify-content-between"},lt={key:0,class:"d-flex flex-column"},it={id:"danger-label-div"},ot=r(()=>e("span",{class:"d-none d-md-block"}," skill ",-1)),nt=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",height:"20",fill:"white",class:"ms-1"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),rt={class:"d-flex justify-content-end gap-md-4 gap-1 align-items-end"},at=r(()=>e("div",{class:"d-none d-md-block"},"Cancel",-1)),dt=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"white",class:"d-md-none exit-icon"},[e("path",{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"})],-1)),ct=r(()=>e("div",{class:"d-none d-md-block"},"Submit",-1)),ut=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"white",height:"20",width:"20",class:"d-md-none"},[e("path",{d:"M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"})],-1)),ht=[ct,ut],pt=r(()=>e("div",{class:"d-none d-md-block"},"Submit for review",-1)),mt=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"white",height:"20",width:"20",class:"d-md-none"},[e("path",{d:"M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"})],-1)),kt=[pt,mt],_t={key:0,id:"myModal",class:"modal"},gt={class:"modal-content d-flex flex-column"},vt={class:"mb-4"},ft={key:0,id:"warning-section",class:"d-flex align-items-center"},St=r(()=>e("div",{class:"me-3"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"15",height:"15",fill:"#eed888"},[e("path",{d:"M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"})])],-1)),wt=r(()=>e("div",null," This action will delete this skill and all its nested skills, and is not reversible. ",-1)),bt=[St,wt],Ct={key:1},yt={for:"name",class:"conform-label"},xt={class:"mt-3 d-flex justify-content-between"};function It(l,s,h,c,t,d){const y=P("router-link");return o(),n(k,null,[e("div",F,[N,c.userDetailsStore.role=="admin"||c.userDetailsStore.role=="editor"?(o(),n("div",O,[e("div",q,[e("div",j,[e("div",E,[A,u(e("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>t.skill.name=i),class:"form-control",type:"text",placeholder:"name"},null,512),[[m,t.skill.name]]),t.validate.name&&(t.skill.name==""||t.skill.name==null)?(o(),n("div",Z," please enter a skill name ")):a("",!0)])])]),e("div",J,[t.skill.type!="domain"&&t.skill.type!="sub"?(o(),n("div",G,[e("div",K,[W,e("div",Y,[e("div",{class:f([t.showLevelDropDown?"custom-select-button-focus ":"custom-select-button "]),onClick:s[1]||(s[1]=i=>t.showLevelDropDown=!t.showLevelDropDown)},[v(p(t.showLevel)+" ",1),Q],2),t.showLevelDropDown?(o(),n("div",X,[(o(!0),n(k,null,g(t.levels,i=>(o(),n("div",{class:"custom-dropdown-option",onClick:_=>d.handleChooseSkillLevel(i)},p(i.name),9,ee))),256))])):a("",!0)])])])):a("",!0)]),c.userDetailsStore.role=="admin"?(o(),n("div",se,[e("div",te,[t.skill.type!="sub"?(o(),n("div",le,[ie,e("div",oe,[(o(!0),n(k,null,g(c.tagsStore.tagsList,i=>(o(),n("label",ne,[e("span",re,p(i.name),1),u(e("input",{type:"checkbox",value:i.id,"onUpdate:modelValue":s[2]||(s[2]=_=>t.filters=_)},null,8,ae),[[w,t.filters]]),de]))),256))])])):a("",!0)])])):a("",!0),e("div",ce,[e("div",ue,[he,e("div",pe,[e("div",me,[e("label",ke,[_e,u(e("input",{type:"radio",name:"nodeType",id:"regularSkillRadio",value:"regular","onUpdate:modelValue":s[3]||(s[3]=i=>t.skill.type=i)},null,512),[[S,t.skill.type]]),ge])]),e("div",ve,[e("label",fe,[Se,u(e("input",{type:"radio",name:"nodeType",id:"domainSkillRadio",value:"domain","onUpdate:modelValue":s[4]||(s[4]=i=>t.skill.type=i)},null,512),[[S,t.skill.type]]),we])]),e("div",be,[e("label",Ce,[ye,u(e("input",{type:"radio",name:"nodeType",id:"superSkillRadio",value:"super","onUpdate:modelValue":s[5]||(s[5]=i=>t.skill.type=i)},null,512),[[S,t.skill.type]]),xe])]),e("div",Ie,[e("label",Le,[Te,u(e("input",{type:"radio",name:"nodeType",id:"regularSkillRadio",value:"sub","onUpdate:modelValue":s[6]||(s[6]=i=>t.skill.type=i)},null,512),[[S,t.skill.type]]),Pe])])]),t.validate.orphan&&this.skill.type=="sub"&&this.skill.parent==0?(o(),n("div",De," please choose a parent for this skill ")):a("",!0),t.validate.noChild&&this.skill.type=="sub"?(o(),n("div",Me," please delete this node's child skills, before changing it to a cluster child skill ")):a("",!0)])]),e("div",He,[e("div",Ve,[t.skill.type!="sub"?(o(),n("div",ze,[Be,e("div",Re,[e("div",Ue,[u(e("input",{id:"skill-input","onUpdate:modelValue":s[7]||(s[7]=i=>t.parentInput.inputText=i),onInput:s[8]||(s[8]=(...i)=>d.getReferenceSkill&&d.getReferenceSkill(...i)),placeholder:"type skill name"},null,544),[[m,t.parentInput.inputText]]),t.parentInput.suggestSkills.length>0?(o(),n("div",Fe,[(o(!0),n(k,null,g(t.parentInput.suggestSkills,i=>(o(),n("div",{class:"suggest-option",onClick:_=>d.handleChooseSuggestSkill(i)},p(i.name),9,Ne))),256))])):a("",!0)])])])):(o(),n("div",Oe,[qe,e("div",je,[e("div",Ee,[u(e("input",{id:"skill-input","onUpdate:modelValue":s[9]||(s[9]=i=>t.clusterParentInput.inputText=i),onInput:s[10]||(s[10]=(...i)=>d.getSuperSkillSuggestion&&d.getSuperSkillSuggestion(...i)),placeholder:"type skill name"},null,544),[[m,t.clusterParentInput.inputText]]),t.clusterParentInput.suggestSuperSkills.length>0?(o(),n("div",Ae,[(o(!0),n(k,null,g(t.clusterParentInput.suggestSuperSkills,i=>(o(),n("div",{class:"suggest-option",onClick:_=>d.handleChooseSuggestSkill(i)},p(i.name),9,Ze))),256))])):a("",!0)])])]))])]),e("div",Je,[e("label",Ge,[Ke,u(e("input",{type:"checkbox",value:"true","onUpdate:modelValue":s[11]||(s[11]=i=>t.isTwoParents=i)},null,512),[[w,t.isTwoParents]]),We])]),t.isTwoParents?(o(),n("div",Ye,[e("div",Qe,[Xe,e("div",$e,[e("div",es,[u(e("input",{id:"skill-input","onUpdate:modelValue":s[12]||(s[12]=i=>t.clusterSecondParentInput.inputText=i),onInput:s[13]||(s[13]=(...i)=>d.getSecondSuperSkillSuggestion&&d.getSecondSuperSkillSuggestion(...i)),placeholder:"type skill name"},null,544),[[m,t.clusterSecondParentInput.inputText]]),t.clusterSecondParentInput.suggestSuperSkills.length>0?(o(),n("div",ss,[(o(!0),n(k,null,g(t.clusterSecondParentInput.suggestSuperSkills,i=>(o(),n("div",{class:"suggest-option",onClick:_=>d.handleChooseSecondSuggestSkill(i)},p(i.name),9,ts))),256))])):a("",!0)])])]),e("div",ls,[e("label",is,[os,u(e("input",{type:"checkbox",value:"true","onUpdate:modelValue":s[14]||(s[14]=i=>t.isThreeParents=i)},null,512),[[w,t.isThreeParents]]),ns])]),t.isThreeParents?(o(),n("div",rs,[e("div",as,[ds,e("div",cs,[e("div",us,[u(e("input",{id:"skill-input","onUpdate:modelValue":s[15]||(s[15]=i=>t.clusterThirdParentInput.inputText=i),onInput:s[16]||(s[16]=(...i)=>d.getThirdSuperSkillSuggestion&&d.getThirdSuperSkillSuggestion(...i)),placeholder:"type skill name"},null,544),[[m,t.clusterThirdParentInput.inputText]]),t.clusterThirdParentInput.suggestSuperSkills.length>0?(o(),n("div",hs,[(o(!0),n(k,null,g(t.clusterThirdParentInput.suggestSuperSkills,i=>(o(),n("div",{class:"suggest-option",onClick:_=>d.handleChooseThirdSuggestSkill(i)},p(i.name),9,ps))),256))])):a("",!0)])])])])):a("",!0)])):a("",!0)])):a("",!0),e("div",ms,[e("div",ks,[e("div",_s,[gs,t.iconImage?(o(),n("div",Cs,[e("p",null,[e("img",{src:t.iconImage,height:"158",width:"158",style:{"background-color":"lightgrey"}},null,8,ys)]),e("p",null,[e("button",{class:"btn red-btn",onClick:s[19]||(s[19]=i=>d.deleteImage("icon"))},[v(" Remove    "),xs])])])):(o(),n("div",vs,[e("input",{class:"form-control d-none",type:"file",accept:"image/*",onChange:s[17]||(s[17]=i=>d.onFileChange(i,"icon")),id:"iconFileChoose"},null,32),e("div",fs,[e("div",{class:"plus-svg",onClick:s[18]||(s[18]=i=>d.openImage("iconFileChoose"))},ws)]),bs]))])]),e("div",Is,[e("div",Ls,[Ts,t.bannerImage?(o(),n("div",zs,[e("p",null,[e("img",{src:t.bannerImage,height:"158",width:"1175",style:{"background-color":"lightgrey"},class:"banner-image rounded"},null,8,Bs)]),e("p",null,[e("button",{class:"btn red-btn",onClick:s[22]||(s[22]=i=>d.deleteImage("banner"))},[v(" Remove    "),Rs])])])):(o(),n("div",Ps,[e("input",{class:"form-control d-none",type:"file",accept:"image/*",onChange:s[20]||(s[20]=i=>d.onFileChange(i,"banner")),id:"bannerFileChoose"},null,32),e("div",Ds,[e("div",{class:"plus-svg",onClick:s[21]||(s[21]=i=>d.openImage("bannerFileChoose"))},Hs)]),Vs]))])])]),c.userDetailsStore.role=="admin"?(o(),n("div",Us,[e("div",Fs,[e("div",Ns,[Os,u(e("textarea",{"onUpdate:modelValue":s[23]||(s[23]=i=>t.skill.description=i),class:"form-control",rows:"2"},null,512),[[m,t.skill.description]])]),e("div",null,[t.validate.description?(o(),n("div",qs," please enter description for skill ")):a("",!0)])])])):a("",!0),t.skill.type!="domain"?(o(),n("div",js,[Es,u(e("textarea",{class:"form-control","onUpdate:modelValue":s[24]||(s[24]=i=>t.skill.mastery_requirements=i),id:"summernote",rows:"3"},null,512),[[m,t.skill.mastery_requirements]])])):a("",!0),c.userDetailsStore.role=="admin"?(o(),n("div",As,[e("div",Zs,[Js,e("div",Gs,[e("div",{class:f([t.showOrderDropDown?"custom-select-button-focus ":"custom-select-button "]),onClick:s[25]||(s[25]=i=>t.showOrderDropDown=!t.showOrderDropDown)},[v(p(t.skill.order)+" ",1),Ks],2),t.showOrderDropDown?(o(),n("div",Ws,[(o(!0),n(k,null,g(t.orderArray,i=>(o(),n("div",{class:"custom-dropdown-option",onClick:_=>d.handleChooseSkillOrder(i)},p(i),9,Ys))),256))])):a("",!0)])])])):a("",!0),e("div",Qs,[e("div",Xs,[e("div",$s,[et,u(e("textarea",{"onUpdate:modelValue":s[26]||(s[26]=i=>t.comment=i),class:"form-control",rows:"2"},null,512),[[m,t.comment]])]),t.comment.length>255?(o(),n("div",{key:0,class:f([l.shake?"click-shake form-validate":"form-validate initial-shake"])}," Your comment has too many words !! ",2)):a("",!0)])]),e("div",st,[e("div",tt,[c.userDetailsStore.role=="admin"?(o(),n("div",lt,[e("div",it,[t.deleteButtonHover?(o(),n("div",{key:0,id:"danger-label",class:f({shake:t.deleteButtonHover})}," Danger !!! ",2)):a("",!0)]),e("div",null,[e("button",{class:"btn red-btn",onMouseover:s[27]||(s[27]=i=>t.deleteButtonHover=!0),onMouseleave:s[28]||(s[28]=i=>t.deleteButtonHover=!1),onClick:s[29]||(s[29]=i=>t.showModal=!0)},[v(" Delete "),ot,nt],32)])])):a("",!0),e("div",rt,[b(y,{class:"btn red-btn",to:"/skills"},{default:D(()=>[at,dt]),_:1}),c.userDetailsStore.role=="admin"||c.userDetailsStore.role=="editor"?(o(),n("button",{key:0,class:"btn purple-btn",onClick:s[30]||(s[30]=i=>d.Submit())},ht)):c.userDetailsStore.role=="instructor"||c.userDetailsStore.role=="student"?(o(),n("button",{key:1,class:"btn purple-btn",onClick:s[31]||(s[31]=i=>d.SubmitForReview())},kt)):a("",!0)])])])]),t.showModal?(o(),n("div",_t,[e("div",gt,[e("div",vt,'Delete "'+p(t.skill.name)+'"',1),t.step1Confirm?a("",!0):(o(),n("div",ft,bt)),t.step1Confirm?(o(),n("div",Ct,[e("label",yt,'Enter "'+p(t.skill.name)+'" in the box below to confirm',1),u(e("input",{"onUpdate:modelValue":s[32]||(s[32]=i=>t.skillNameConfirm=i),class:"form-control",type:"text",placeholder:"name",onInput:s[33]||(s[33]=(...i)=>d.handleConfirmInputChange&&d.handleConfirmInputChange(...i))},null,544),[[m,t.skillNameConfirm]])])):a("",!0),e("div",xt,[e("button",{class:"btn green-btn",onClick:s[34]||(s[34]=(...i)=>d.handleCancelDeleteSkill&&d.handleCancelDeleteSkill(...i))}," Cancel "),t.step1Confirm?a("",!0):(o(),n("button",{key:0,class:"btn red-btn",onClick:s[35]||(s[35]=i=>t.step1Confirm=!0)}," I still want to delete this skill ")),t.step1Confirm?(o(),n("button",{key:1,class:f([t.step2Confirm?"btn red-btn":"btn button-inactive"]),onClick:s[36]||(s[36]=i=>d.DeleteSkill(t.skill.id))}," Delete skill ",2)):a("",!0)])])])):a("",!0)],64)}const Lt=x(U,[["render",It],["__scopeId","data-v-2d9da86d"]]),Tt=e("div",{id:"banner"},[e("img",{src:V,class:"image-fluid"})],-1),Ht={__name:"EditSkillView",setup(l){return(s,h)=>(o(),n(k,null,[Tt,b(Lt)],64))}};export{Ht as default};
