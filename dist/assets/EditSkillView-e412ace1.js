import{_ as y,m as x,E as L,i as I,o as n,c as r,d as e,e as u,v as p,b as c,x as C,l as _,t as m,F as k,k as v,y as T,D as f,a as w,w as D,p as H,f as M,s as b,G as V}from"./main-b38228ea.js";import{u as P,a as z}from"./TagsStore-563f06b1.js";import{_ as B}from"./recurso-69-12793b41.js";const R={setup(){const l=x(),s=P();s.tagsList.length==0&&s.getTagsList();const h=z(),d=L();return{skillsStore:l,tagsStore:s,skillTagsStore:h,router:d}},data(){return{skillId:this.$route.params.id,skills:[],skill:{id:"",name:"",parent:"",description:"",icon_image:"",banner_image:"",mastery_requirements:"",tags:[],type:null,level:null},filterChecked:!1,iconImage:"",bannerImage:"",superSkills:[],levels:[{id:"grade_school",name:"Grade school"},{id:"middle_school",name:"Middle school"},{id:"high_school",name:"High school"},{id:"college",name:"College"},{id:"phd",name:"PhD"}],showDropDown:!1,showLevel:"",parentInput:{inputText:"",suggestSkills:[]},clusterParentInput:{inputText:"",suggestSuperSkills:[]},validate:{violated:!1,name:!1,description:!1,orphan:!1,superValidate:!1,noChild:!1},filters:[],deleteButtonHover:!1,showModal:!1,step1Confirm:!1,skillNameConfirm:"",step2Confirm:!1}},async mounted(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList(),this.getParentSkills()},methods:{getParentSkills(){for(let l=0;l<this.skillsStore.skillsList.length;l++)this.skillsStore.skillsList[l].id!=this.skillId&&(this.skillsStore.skillsList[l].type=="super"&&this.superSkills.push(this.skillsStore.skillsList[l]),this.skillsStore.skillsList[l].type!="sub"&&this.skills.push(this.skillsStore.skillsList[l]));this.getSkill()},getSkill(){fetch("/skills/show/"+this.skillId).then(function(l){return l.json()}).then(l=>{this.skill=l}).then(()=>{if(this.iconImage=this.skill.icon_image,this.bannerImage=this.skill.banner_image,$("#summernote").summernote("code",this.skill.mastery_requirements),this.skill.level!="domain"){const l=this.levels.find(s=>s.id===this.skill.level);this.showLevel=l.name}if(this.skill.parent!=0){const l=this.skills.find(s=>s.id===this.skill.parent);this.parentInput.inputText=l.name}this.getSkillFilters()})},async getSkillFilters(){this.skillTagsStore.skillTagsList.length==0&&await this.skillTagsStore.getSkillTagsList();for(let l=0;l<this.skillTagsStore.skillTagsList.length;l++)this.skillTagsStore.skillTagsList[l].skill_id==this.skillId&&this.filters.push(this.skillTagsStore.skillTagsList[l].tag_id)},async DeleteSkill(l){!this.step1Confirm||!this.step2Confirm||(await this.skillsStore.deleteSkill(l),this.router.push("/skills"))},onFileChange(l,s){var h=l.target.files||l.dataTransfer.files;h.length&&this.createImage(h[0],s)},createImage(l,s){new Image;var h=new FileReader,d=this;h.onload=t=>{d.image=t.target.result,s=="icon"?(this.iconImage=t.target.result,this.skill.icon_image=this.iconImage):(this.bannerImage=t.target.result,this.skill.banner_image=this.bannerImage)},h.readAsDataURL(l)},openImage(l){document.getElementById(l).click()},deleteImage(l){switch(l){case"icon":this.iconImage="";break;default:this.bannerImage="";break}},SubmitFilters(){fetch("/skill-tags/remove/"+this.skillId,{method:"DELETE"}).then(()=>{var l="/skill-tags/add/"+this.skillId;fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filters:this.filters})})})},Submit(){if(this.skill.type!="super"){var l=!1;for(let d=0;d<this.skillsStore.skillsList.length;d++)this.skillsStore.skillsList[d].type=="sub"&&this.skillsStore.skillsList[d].parent==this.skillId&&(l=!0);l&&(this.validate.superValidate=!0,this.validate.violated=!0,alert("Please delete outer cluster nodes belonging to the skill, before changing its type."))}if(this.skill.type=="domain")this.skill.level="domain";else if(this.skill.type=="sub"){this.skill.parent==0&&(this.validate.orphan=!0,this.validate.violated=!0,alert("cluster nodes must have a parent"));for(let d=0;d<this.skillsStore.skillsList.length;d++)this.skill.parent==this.skillsStore.skillsList[d].id&&(this.skill.level=this.skillsStore.skillsList[d].level),this.skillsStore.skillsList[d].parent==this.skillId&&(this.validate.noChild=!0,this.validate.violated=!0,alert("please delete this node's child skills, before changing it to a cluster child skill"))}if(this.skill.type!="domain"&&(this.skill.mastery_requirements=$("#summernote").summernote("code")),(this.skill.name===""||this.skill.name===null)&&(this.validate.name=!0,this.validate.violated=!0,alert("please enter a skill name")),this.validate.violated)return;const s={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.skill.name,parent:this.skill.parent,description:this.skill.description,icon_image:this.skill.icon_image,banner_image:this.skill.banner_image,mastery_requirements:this.skill.mastery_requirements,type:this.skill.type,level:this.skill.level})};var h="/skills/"+this.skillId+"/edit";fetch(h,s).then(()=>{this.skillsStore.getNestedSkillsList(),this.SubmitFilters()}).then(()=>{this.$router.push("/skills")})},handleChooseSkillLevel(l){this.showDropDown=!1,this.showLevel=l.name,this.skill.level=l.id},getReferenceSkill(){this.parentInput.inputText.length<2?this.parentInput.suggestSkills=[]:this.parentInput.suggestSkills=this.skills.filter(l=>l.name.toLowerCase().includes(this.parentInput.inputText.toLowerCase()))},handleChooseSuggestSkill(l){this.parentInput.suggestSkills=[],this.skill.parent=l.id,this.parentInput.inputText=l.name},getSuperSkillSuggestion(){this.clusterParentInput.inputText.length<2?this.clusterParentInput.suggestSuperSkills=[]:this.clusterParentInput.suggestSuperSkills=this.superSkills.filter(l=>l.name.toLowerCase().includes(this.clusterParentInput.inputText.toLowerCase()))},handleChooseSuperSkill(l){this.clusterParentInput.suggestSuperSkills=[],this.skill.parent=l.id,this.clusterParentInput.inputText=l.name},handleCancelDeleteSkill(){this.showModal=!1,this.step1Confirm=!1,this.step2Confirm=!1,this.skillNameConfirm=""},handleConfirmInputChange(){this.skillNameConfirm==this.skill.name?this.step2Confirm=!0:this.step2Confirm=!1}}},o=l=>(H("data-v-1d658f4e"),l=l(),M(),l),F={class:"container mt-4 pb-5 px-3 px-md-0"},N=o(()=>e("div",{class:"row mt-5"},[e("div",{class:"col-12 col-md-10 col-lg-5 d-flex align-items-baseline gap-3 mt-3"},[e("h1",{id:"page-tile"},"Edit Skill"),e("img",{src:B,id:"header-icon"})])],-1)),U={class:"row mt-5"},E={class:"col-12 col-md-8 col-lg-5 mt-2"},q={class:"mb-3"},j=o(()=>e("label",{for:"name",class:"form-label"},"Name",-1)),O={key:0,class:"form-validate"},Z={class:"row"},G={key:0},J={class:"col col-md-8 col-lg-5 mt-2"},A=o(()=>e("label",{class:"form-label"},"Level",-1)),K={class:"d-flex flex-column position-relative"},Q=o(()=>e("span",null,[e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z",fill:"#344054"})])],-1)),W={key:0,class:"custom-dropdown-base"},X=["onClick"],Y={class:"row"},ee={class:"col col-md-8 col-lg-5 mt-2"},se={key:0},te=o(()=>e("label",{class:"form-label"},"Filters",-1)),le={class:"col"},ie={class:"control control-checkbox"},oe={class:"my-auto mx-2 me-4"},ne=["value"],re=o(()=>e("div",{class:"control_indicator"},null,-1)),ae={class:"row"},de={class:"col-12 col-md-8 col-lg-5 mt-2"},ce=o(()=>e("label",{class:"form-label"},"Node Type",-1)),he={class:"row p-0 m-0"},ue={class:"form-check col-6 col-md-5 my-2"},me={class:"control control-checkbox"},pe=o(()=>e("span",{class:"my-auto mx-2 me-4"},"Regular",-1)),ke=o(()=>e("div",{class:"control_indicator"},null,-1)),ge={class:"form-check col-6 col-md-5 my-2"},_e={class:"control control-checkbox"},ve=o(()=>e("span",{class:"my-auto mx-2 me-4"},"Pass-through",-1)),fe=o(()=>e("div",{class:"control_indicator"},null,-1)),Ce={class:"form-check col-6 col-md-5 my-2"},we={class:"control control-checkbox"},be=o(()=>e("span",{class:"my-auto mx-2 me-4"},"Cluster node center",-1)),Se=o(()=>e("div",{class:"control_indicator"},null,-1)),ye={class:"form-check col-6 col-md-5 my-2"},xe={class:"control control-checkbox"},Le=o(()=>e("span",{class:"my-auto mx-2 me-4"},"Cluster node outer",-1)),Ie=o(()=>e("div",{class:"control_indicator"},null,-1)),Te={key:0,class:"form-validate"},De={key:1,class:"form-validate"},He={class:"row"},Me={class:"col-12 col-md-8 col-lg-5 mt-2"},Ve={key:0,class:"mb-3"},Pe=o(()=>e("label",{class:"form-label"},"Parent",-1)),ze={class:"row mt-3"},Be={class:"col position-relative"},Re={key:0,id:"suggest-skills",class:"flex flex-column position-absolute"},Fe=["onClick"],Ne={key:1,class:"mb-3"},Ue=o(()=>e("label",{class:"form-label"},"Cluster node center",-1)),Ee={class:"row mt-3"},qe={class:"col position-relative"},je={key:0,id:"suggest-skills",class:"flex flex-column position-absolute"},Oe=["onClick"],Ze={class:"row"},Ge={class:"col-8 col-md-3 col-lg-2 mt-2"},Je={class:"mb-3 row d-flex justify-content-center justify-content-md-start w-100"},Ae=o(()=>e("label",{for:"image",class:"form-label"},"Icon",-1)),Ke={key:0},Qe={class:"default-no-img"},We=b('<svg width="33" height="33" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-1d658f4e><circle cx="26.5" cy="26.5" r="26.5" fill="#D9D9D9" data-v-1d658f4e></circle><g clip-path="url(#clip0_372_11959)" data-v-1d658f4e><path d="M19.7439 45.0784L19.7439 33.2515L7.93354 33.268C7.40615 33.2671 6.90063 33.0572 6.52771 32.6843C6.15479 32.3114 5.94488 31.8059 5.94396 31.2785L5.93291 21.7174C5.93382 21.1901 6.14373 20.6845 6.51665 20.3116C6.88957 19.9387 7.3951 19.7288 7.92249 19.7279L19.7439 19.7334L19.7439 7.90646C19.7411 7.64223 19.7911 7.38009 19.8909 7.13543C19.9907 6.89076 20.1384 6.66849 20.3252 6.48164C20.5121 6.29479 20.7344 6.14713 20.979 6.0473C21.2237 5.94747 21.4858 5.8975 21.75 5.9003L31.2779 5.92241C31.8053 5.92332 32.3108 6.13322 32.6838 6.50615C33.0567 6.87907 33.2666 7.38459 33.2675 7.91198L33.262 19.7334L45.0889 19.7334C45.615 19.7337 46.1195 19.9428 46.4915 20.3148C46.8635 20.6869 47.0726 21.1913 47.073 21.7174L47.0951 31.2453C47.0948 31.7714 46.8856 32.2759 46.5136 32.6479C46.1416 33.0199 45.6371 33.229 45.111 33.2294L33.262 33.2515L33.2786 45.0618C33.2776 45.5892 33.0677 46.0947 32.6948 46.4677C32.3219 46.8406 31.8164 47.0505 31.289 47.0514L21.7501 47.0846C21.4858 47.0874 21.2237 47.0374 20.979 46.9376C20.7344 46.8377 20.5121 46.6901 20.3252 46.5032C20.1384 46.3164 19.9907 46.0941 19.8909 45.8494C19.7911 45.6048 19.7411 45.3426 19.7439 45.0784Z" fill="white" data-v-1d658f4e></path></g><defs data-v-1d658f4e><clipPath id="clip0_372_11959" data-v-1d658f4e><rect width="37" height="37" fill="white" transform="translate(8 8)" data-v-1d658f4e></rect></clipPath></defs></svg>',1),Xe=[We],Ye=o(()=>e("p",{style:{"font-size":"14px"}},[e("em",null,"Maximum file size 15mb")],-1)),$e={key:1},es=["src"],ss=o(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",height:"20",fill:"white"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),ts={class:"col-12 col-lg-10 mt-2"},ls={class:"mb-3 row"},is=o(()=>e("label",{for:"image",class:"form-label"},"Banner",-1)),os={key:0},ns={class:"default-no-img"},rs=b('<svg width="33" height="33" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-1d658f4e><circle cx="26.5" cy="26.5" r="26.5" fill="#D9D9D9" data-v-1d658f4e></circle><g clip-path="url(#clip0_372_11959)" data-v-1d658f4e><path d="M19.7439 45.0784L19.7439 33.2515L7.93354 33.268C7.40615 33.2671 6.90063 33.0572 6.52771 32.6843C6.15479 32.3114 5.94488 31.8059 5.94396 31.2785L5.93291 21.7174C5.93382 21.1901 6.14373 20.6845 6.51665 20.3116C6.88957 19.9387 7.3951 19.7288 7.92249 19.7279L19.7439 19.7334L19.7439 7.90646C19.7411 7.64223 19.7911 7.38009 19.8909 7.13543C19.9907 6.89076 20.1384 6.66849 20.3252 6.48164C20.5121 6.29479 20.7344 6.14713 20.979 6.0473C21.2237 5.94747 21.4858 5.8975 21.75 5.9003L31.2779 5.92241C31.8053 5.92332 32.3108 6.13322 32.6838 6.50615C33.0567 6.87907 33.2666 7.38459 33.2675 7.91198L33.262 19.7334L45.0889 19.7334C45.615 19.7337 46.1195 19.9428 46.4915 20.3148C46.8635 20.6869 47.0726 21.1913 47.073 21.7174L47.0951 31.2453C47.0948 31.7714 46.8856 32.2759 46.5136 32.6479C46.1416 33.0199 45.6371 33.229 45.111 33.2294L33.262 33.2515L33.2786 45.0618C33.2776 45.5892 33.0677 46.0947 32.6948 46.4677C32.3219 46.8406 31.8164 47.0505 31.289 47.0514L21.7501 47.0846C21.4858 47.0874 21.2237 47.0374 20.979 46.9376C20.7344 46.8377 20.5121 46.6901 20.3252 46.5032C20.1384 46.3164 19.9907 46.0941 19.8909 45.8494C19.7911 45.6048 19.7411 45.3426 19.7439 45.0784Z" fill="white" data-v-1d658f4e></path></g><defs data-v-1d658f4e><clipPath id="clip0_372_11959" data-v-1d658f4e><rect width="37" height="37" fill="white" transform="translate(8 8)" data-v-1d658f4e></rect></clipPath></defs></svg>',1),as=[rs],ds=o(()=>e("p",{style:{"font-size":"14px"}},[e("em",null,"Maximum file size 15mb")],-1)),cs={key:1},hs=["src"],us=o(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",height:"20",fill:"white"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),ms={class:"row"},ps={class:"col"},ks={class:"mb-3"},gs=o(()=>e("label",{for:"description",class:"form-label"},"Description",-1)),_s={key:0,class:"form-validate"},vs={key:0,class:"mb-3"},fs=o(()=>e("label",{for:"mastery_requirements",class:"form-label"},"Mastery Requirements",-1)),Cs={class:"row"},ws={class:"d-flex justify-content-between"},bs={class:"d-flex flex-column"},Ss={id:"danger-label-div"},ys=o(()=>e("span",{class:"d-none d-md-block"}," skill ",-1)),xs=o(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",height:"20",fill:"white",class:"ms-1"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),Ls={class:"d-flex justify-content-end gap-md-4 gap-1 align-items-end"},Is=o(()=>e("div",{class:"d-none d-md-block"},"Cancel",-1)),Ts=o(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"white",class:"d-md-none exit-icon"},[e("path",{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"})],-1)),Ds=o(()=>e("div",{class:"d-none d-md-block"},"Submit",-1)),Hs=o(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"white",height:"20",width:"20",class:"d-md-none"},[e("path",{d:"M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"})],-1)),Ms=[Ds,Hs],Vs={key:0,id:"myModal",class:"modal"},Ps={class:"modal-content d-flex flex-column"},zs={class:"mb-4"},Bs={key:0,id:"warning-section",class:"d-flex align-items-center"},Rs=o(()=>e("div",{class:"me-3"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"15",height:"15",fill:"#eed888"},[e("path",{d:"M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"})])],-1)),Fs=o(()=>e("div",null," This action will delete this skill and all its nested skills, and is not reversible. ",-1)),Ns=[Rs,Fs],Us={key:1},Es={for:"name",class:"conform-label"},qs={class:"mt-3 d-flex justify-content-between"};function js(l,s,h,d,t,a){const S=I("router-link");return n(),r(k,null,[e("div",F,[N,e("div",U,[e("div",E,[e("div",q,[j,u(e("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>t.skill.name=i),class:"form-control",type:"text",placeholder:"name"},null,512),[[p,t.skill.name]]),t.validate.name&&(t.skill.name==""||t.skill.name==null)?(n(),r("div",O," please enter a skill name ")):c("",!0)])])]),e("div",Z,[t.skill.type!="domain"&&t.skill.type!="sub"?(n(),r("div",G,[e("div",J,[A,e("div",K,[e("div",{class:C([t.showDropDown?"custom-select-button-focus ":"custom-select-button "]),onClick:s[1]||(s[1]=i=>t.showDropDown=!t.showDropDown)},[_(m(t.showLevel)+" ",1),Q],2),t.showDropDown?(n(),r("div",W,[(n(!0),r(k,null,v(t.levels,i=>(n(),r("div",{class:"custom-dropdown-option",onClick:g=>a.handleChooseSkillLevel(i)},m(i.name),9,X))),256))])):c("",!0)])])])):c("",!0)]),e("div",Y,[e("div",ee,[t.skill.type!="sub"?(n(),r("div",se,[te,e("div",le,[(n(!0),r(k,null,v(d.tagsStore.tagsList,i=>(n(),r("label",ie,[e("span",oe,m(i.name),1),u(e("input",{type:"checkbox",value:i.id,"onUpdate:modelValue":s[2]||(s[2]=g=>t.filters=g)},null,8,ne),[[T,t.filters]]),re]))),256))])])):c("",!0)])]),e("div",ae,[e("div",de,[ce,e("div",he,[e("div",ue,[e("label",me,[pe,u(e("input",{type:"radio",name:"nodeType",id:"regularSkillRadio",value:"regular","onUpdate:modelValue":s[3]||(s[3]=i=>t.skill.type=i)},null,512),[[f,t.skill.type]]),ke])]),e("div",ge,[e("label",_e,[ve,u(e("input",{type:"radio",name:"nodeType",id:"domainSkillRadio",value:"domain","onUpdate:modelValue":s[4]||(s[4]=i=>t.skill.type=i)},null,512),[[f,t.skill.type]]),fe])]),e("div",Ce,[e("label",we,[be,u(e("input",{type:"radio",name:"nodeType",id:"superSkillRadio",value:"super","onUpdate:modelValue":s[5]||(s[5]=i=>t.skill.type=i)},null,512),[[f,t.skill.type]]),Se])]),e("div",ye,[e("label",xe,[Le,u(e("input",{type:"radio",name:"nodeType",id:"regularSkillRadio",value:"sub","onUpdate:modelValue":s[6]||(s[6]=i=>t.skill.type=i)},null,512),[[f,t.skill.type]]),Ie])])]),t.validate.orphan&&this.skill.type=="sub"&&this.skill.parent==0?(n(),r("div",Te," please choose a parent for this skill ")):c("",!0),t.validate.noChild&&this.skill.type=="sub"?(n(),r("div",De," please delete this node's child skills, before changing it to a cluster child skill ")):c("",!0)])]),e("div",He,[e("div",Me,[t.skill.type!="sub"?(n(),r("div",Ve,[Pe,e("div",ze,[e("div",Be,[u(e("input",{id:"skill-input","onUpdate:modelValue":s[7]||(s[7]=i=>t.parentInput.inputText=i),onInput:s[8]||(s[8]=(...i)=>a.getReferenceSkill&&a.getReferenceSkill(...i)),placeholder:"type skill name"},null,544),[[p,t.parentInput.inputText]]),t.parentInput.suggestSkills.length>0?(n(),r("div",Re,[(n(!0),r(k,null,v(t.parentInput.suggestSkills,i=>(n(),r("div",{class:"suggest-option",onClick:g=>a.handleChooseSuggestSkill(i)},m(i.name),9,Fe))),256))])):c("",!0)])])])):(n(),r("div",Ne,[Ue,e("div",Ee,[e("div",qe,[u(e("input",{id:"skill-input","onUpdate:modelValue":s[9]||(s[9]=i=>t.clusterParentInput.inputText=i),onInput:s[10]||(s[10]=(...i)=>a.getSuperSkillSuggestion&&a.getSuperSkillSuggestion(...i)),placeholder:"type skill name"},null,544),[[p,t.clusterParentInput.inputText]]),t.clusterParentInput.suggestSuperSkills.length>0?(n(),r("div",je,[(n(!0),r(k,null,v(t.clusterParentInput.suggestSuperSkills,i=>(n(),r("div",{class:"suggest-option",onClick:g=>a.handleChooseSuggestSkill(i)},m(i.name),9,Oe))),256))])):c("",!0)])])]))])]),e("div",Ze,[e("div",Ge,[e("div",Je,[Ae,t.iconImage?(n(),r("div",$e,[e("p",null,[e("img",{src:t.iconImage,height:"158",width:"158",style:{"background-color":"lightgrey"}},null,8,es)]),e("p",null,[e("button",{class:"btn red-btn",onClick:s[13]||(s[13]=i=>a.deleteImage("icon"))},[_(" Remove    "),ss])])])):(n(),r("div",Ke,[e("input",{class:"form-control d-none",type:"file",accept:"image/*",onChange:s[11]||(s[11]=i=>a.onFileChange(i,"icon")),id:"iconFileChoose"},null,32),e("div",Qe,[e("div",{class:"plus-svg",onClick:s[12]||(s[12]=i=>a.openImage("iconFileChoose"))},Xe)]),Ye]))])]),e("div",ts,[e("div",ls,[is,t.bannerImage?(n(),r("div",cs,[e("p",null,[e("img",{src:t.bannerImage,height:"158",width:"1175",style:{"background-color":"lightgrey"}},null,8,hs)]),e("p",null,[e("button",{class:"btn red-btn",onClick:s[16]||(s[16]=i=>a.deleteImage("banner"))},[_(" Remove    "),us])])])):(n(),r("div",os,[e("input",{class:"form-control d-none",type:"file",accept:"image/*",onChange:s[14]||(s[14]=i=>a.onFileChange(i,"banner")),id:"bannerFileChoose"},null,32),e("div",ns,[e("div",{class:"plus-svg",onClick:s[15]||(s[15]=i=>a.openImage("bannerFileChoose"))},as)]),ds]))])])]),e("div",ms,[e("div",ps,[e("div",ks,[gs,u(e("textarea",{"onUpdate:modelValue":s[17]||(s[17]=i=>t.skill.description=i),class:"form-control",rows:"2"},null,512),[[p,t.skill.description]])]),e("div",null,[t.validate.description?(n(),r("div",_s," please enter description for skill ")):c("",!0)])])]),t.skill.type!="domain"?(n(),r("div",vs,[fs,u(e("textarea",{class:"form-control","onUpdate:modelValue":s[18]||(s[18]=i=>t.skill.mastery_requirements=i),id:"summernote",rows:"3"},null,512),[[p,t.skill.mastery_requirements]])])):c("",!0),e("div",Cs,[e("div",ws,[e("div",bs,[e("div",Ss,[t.deleteButtonHover?(n(),r("div",{key:0,id:"danger-label",class:C({shake:t.deleteButtonHover})}," Danger !!! ",2)):c("",!0)]),e("div",null,[e("button",{class:"btn red-btn",onMouseover:s[19]||(s[19]=i=>t.deleteButtonHover=!0),onMouseleave:s[20]||(s[20]=i=>t.deleteButtonHover=!1),onClick:s[21]||(s[21]=i=>t.showModal=!0)},[_(" Delete "),ys,xs],32)])]),e("div",Ls,[w(S,{class:"btn red-btn",to:"/skills"},{default:D(()=>[Is,Ts]),_:1}),e("button",{class:"btn purple-btn",onClick:s[22]||(s[22]=i=>a.Submit())},Ms)])])])]),t.showModal?(n(),r("div",Vs,[e("div",Ps,[e("div",zs,'Delete "'+m(t.skill.name)+'"',1),t.step1Confirm?c("",!0):(n(),r("div",Bs,Ns)),t.step1Confirm?(n(),r("div",Us,[e("label",Es,'Enter "'+m(t.skill.name)+'" in the box below to confirm',1),u(e("input",{"onUpdate:modelValue":s[23]||(s[23]=i=>t.skillNameConfirm=i),class:"form-control",type:"text",placeholder:"name",onInput:s[24]||(s[24]=(...i)=>a.handleConfirmInputChange&&a.handleConfirmInputChange(...i))},null,544),[[p,t.skillNameConfirm]])])):c("",!0),e("div",qs,[e("button",{class:"btn green-btn",onClick:s[25]||(s[25]=(...i)=>a.handleCancelDeleteSkill&&a.handleCancelDeleteSkill(...i))}," Cancel "),t.step1Confirm?c("",!0):(n(),r("button",{key:0,class:"btn red-btn",onClick:s[26]||(s[26]=i=>t.step1Confirm=!0)}," I still want to delete this skill ")),t.step1Confirm?(n(),r("button",{key:1,class:C([t.step2Confirm?"btn red-btn":"btn button-inactive"]),onClick:s[27]||(s[27]=i=>a.DeleteSkill(t.skill.id))}," Delete skill ",2)):c("",!0)])])])):c("",!0)],64)}const Os=y(R,[["render",js],["__scopeId","data-v-1d658f4e"]]),Zs=e("div",{id:"banner"},[e("img",{src:V,class:"image-fluid"})],-1),Ks={__name:"EditSkillView",setup(l){return(s,h)=>(n(),r(k,null,[Zs,w(Os)],64))}};export{Ks as default};
