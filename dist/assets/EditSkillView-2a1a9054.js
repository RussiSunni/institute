import{_ as S}from"./edit-mastery-skill-banner-9e7c0291.js";import{_ as x,a as L,g as I,M as D,r as T,o,c as n,d as e,w as u,j as p,b as d,i as v,s as g,t as m,F as k,k as f,G as M,L as b,e as w,m as H,p as V,f as P,q as y}from"./main-d410ed8b.js";import{u as z,a as B}from"./TagsStore-9296b5ea.js";import{_ as O}from"./recurso-69-12793b41.js";const E={setup(){const l=L(),t=I(),h=z();h.tagsList.length==0&&h.getTagsList();const a=B(),s=D();return{skillsStore:t,tagsStore:h,skillTagsStore:a,router:s,userDetailsStore:l}},data(){return{skillUrl:this.$route.params.skillUrl,skills:[],skill:{id:"",name:"",parent:"",description:"",icon_image:"",banner_image:"",mastery_requirements:"",tags:[],type:null,level:null,order:null,url:""},filterChecked:!1,iconImage:"",bannerImage:"",superSkills:[],levels:[{id:"grade_school",name:"Grade school"},{id:"middle_school",name:"Middle school"},{id:"high_school",name:"High school"},{id:"college",name:"College"},{id:"phd",name:"PhD"}],showLevelDropDown:!1,showOrderDropDown:!1,showLevel:"",parentInput:{inputText:"",suggestSkills:[]},clusterParentInput:{inputText:"",suggestSuperSkills:[]},validate:{violated:!1,name:!1,description:!1,orphan:!1,superValidate:!1,noChild:!1},filters:[],deleteButtonHover:!1,showModal:!1,step1Confirm:!1,skillNameConfirm:"",step2Confirm:!1,orderArray:Array.from({length:20},(l,t)=>t+1),comment:"",isAnotherInstanceOfExistingSkill:!1,randomNum:0}},async mounted(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList(),this.getParentSkills()},methods:{getParentSkills(){for(let l=0;l<this.skillsStore.skillsList.length;l++)this.skillsStore.skillsList[l].url!=this.skillUrl&&(this.skillsStore.skillsList[l].type=="super"&&this.superSkills.push(this.skillsStore.skillsList[l]),this.skillsStore.skillsList[l].type!="sub"&&this.skills.push(this.skillsStore.skillsList[l]));this.skills.unshift({name:"None",id:0}),this.getSkill()},getSkill(){fetch("/skills/url/"+this.skillUrl).then(function(l){return l.json()}).then(l=>{this.skill=l,this.skill.is_copy_of_skill_id!=null&&(this.isAnotherInstanceOfExistingSkill=!0)}).then(()=>{if(this.randomNum=Math.random(),typeof document.getElementById("originalImage").getAttribute("src").src<"u"?this.iconImage=document.getElementById("originalImage").getAttribute("src"):this.iconImage="",this.bannerImage=this.skill.banner_image,$("#summernote").summernote({disableDragAndDrop:!0,toolbar:[["style",["style"]],["font",["bold","underline","clear"]],["fontname",["fontname"]],["color",["color"]],["para",["ul","ol","paragraph"]],["table",["table"]],["insert",["link"]],["view",["codeview","help"]]]}).summernote("code",this.skill.mastery_requirements),this.skill.level!="domain"){const l=this.levels.find(t=>t.id===this.skill.level);this.showLevel=l.name}if(this.skill.parent!=0){const l=this.skills.find(t=>t.id===this.skill.parent);this.parentInput.inputText=l.name,this.clusterParentInput.inputText=l.name}this.getSkillFilters()})},async getSkillFilters(){this.skillTagsStore.skillTagsList.length==0&&await this.skillTagsStore.getSkillTagsList();for(let l=0;l<this.skillTagsStore.skillTagsList.length;l++)this.skillTagsStore.skillTagsList[l].skill_id==this.skill.id&&this.filters.push(this.skillTagsStore.skillTagsList[l].tag_id)},async DeleteSkill(){!this.step1Confirm||!this.step2Confirm||(await this.skillsStore.deleteSkill(this.skill.id),this.router.push("/skills"))},onFileChange(l,t){var h=l.target.files||l.dataTransfer.files;h.length&&this.createImage(h[0],t)},createImage(l,t){new Image;var h=new FileReader,a=this;h.onload=s=>{a.image=s.target.result,t=="icon"?(this.iconImage=s.target.result,this.skill.icon_image=this.iconImage):(this.bannerImage=s.target.result,this.skill.banner_image=this.bannerImage)},h.readAsDataURL(l)},openImage(l){document.getElementById(l).click()},deleteImage(l){switch(l){case"icon":this.iconImage="";break;default:this.bannerImage="";break}},SubmitFilters(){fetch("/skill-tags/remove/"+this.skill.id,{method:"DELETE"}).then(()=>{var l="/skill-tags/add/"+this.skill.id;fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filters:this.filters})})})},Submit(){if(this.skill.type!="super"){var l=!1;for(let a=0;a<this.skillsStore.skillsList.length;a++)this.skillsStore.skillsList[a].type=="sub"&&this.skillsStore.skillsList[a].parent==this.skill.id&&(l=!0);l&&(this.validate.superValidate=!0,this.validate.violated=!0,alert("Please delete outer cluster nodes belonging to the skill, before changing its type."))}if(this.skill.type=="domain")this.skill.level="domain";else if(this.skill.type=="sub"){this.skill.parent==0&&(this.validate.orphan=!0,this.validate.violated=!0,alert("cluster nodes must have a parent"));for(let a=0;a<this.skillsStore.skillsList.length;a++)this.skill.parent==this.skillsStore.skillsList[a].id&&(this.skill.level=this.skillsStore.skillsList[a].level),this.skillsStore.skillsList[a].parent==this.skill.id&&(this.validate.noChild=!0,this.validate.violated=!0,alert("please delete this node's child skills, before changing it to a cluster child skill"))}if(this.skill.type!="domain"&&!this.isAnotherInstanceOfExistingSkill&&(this.skill.mastery_requirements=$("#summernote").summernote("code")),(this.skill.name===""||this.skill.name===null)&&(this.validate.name=!0,this.validate.violated=!0,alert("please enter a skill name")),this.validate.violated)return;this.skill.url=this.skill.name.replace(/\//g,"or"),this.skill.url=this.skill.url.replace(/ /g,"_");const t={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.skill.name,parent:this.skill.parent,description:this.skill.description,icon_image:this.iconImage,banner_image:this.bannerImage,mastery_requirements:this.skill.mastery_requirements,type:this.skill.type,level:this.skill.level,order:this.skill.order,version_number:this.skill.version_number,comment:this.comment,url:this.skill.url})};var h="/skills/"+this.skill.id+"/edit";fetch(h,t).then(()=>{this.skillsStore.getNestedSkillsList(),this.SubmitFilters()}).then(()=>{let a=this.$route.query.dismissFlagId;a?fetch("/content-flags/"+a,{method:"DELETE"}).finally(()=>{this.$router.back()}):this.skill.type=="domain"?this.router.push("/skills"):this.$router.push("/skills/"+this.skill.url)})},SubmitForReview(){this.skill.mastery_requirements=$("#summernote").summernote("code");const l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:this.userDetailsStore.userId,icon_image:this.iconImage,banner_image:this.bannerImage,mastery_requirements:this.skill.mastery_requirements,comment:this.comment})};var t="/skills/"+this.skill.id+"/edit-for-review";fetch(t,l).then(()=>{alert(`This edit is being submitted for review.
We do this to prevent misinformation and sloppy wording from being added. If you would like to become an editor and help with this, please reach out.`),this.$router.back()})},handleChooseSkillLevel(l){this.showLevelDropDown=!1,this.showLevel=l.name,this.skill.level=l.id},handleChooseSkillOrder(l){this.showOrderDropDown=!1,this.skill.order=l},getReferenceSkill(){this.parentInput.inputText.length<2?this.parentInput.suggestSkills=[]:this.parentInput.suggestSkills=this.skills.filter(l=>l.name.toLowerCase().includes(this.parentInput.inputText.toLowerCase()))},handleChooseSuggestSkill(l){this.skill.parent=l.id,this.skill.type!="sub"?(this.parentInput.suggestSkills=[],this.parentInput.inputText=l.name):(this.clusterParentInput.suggestSuperSkills=[],this.clusterParentInput.inputText=l.name)},getSuperSkillSuggestion(){this.clusterParentInput.inputText.length<2?this.clusterParentInput.suggestSuperSkills=[]:this.clusterParentInput.suggestSuperSkills=this.superSkills.filter(l=>l.name.toLowerCase().includes(this.clusterParentInput.inputText.toLowerCase()))},handleChooseSuperSkill(l){this.clusterParentInput.suggestSuperSkills=[],this.skill.parent=l.id,this.clusterParentInput.inputText=l.name},handleCancelDeleteSkill(){this.showModal=!1,this.step1Confirm=!1,this.step2Confirm=!1,this.skillNameConfirm=""},handleConfirmInputChange(){this.skillNameConfirm==this.skill.name?this.step2Confirm=!0:this.step2Confirm=!1}}},r=l=>(V("data-v-b8118a8e"),l=l(),P(),l),F={class:"container mt-4 pb-5 px-3 px-md-0"},N=r(()=>e("div",{class:"row mt-5"},[e("div",{class:"col-12 col-md-10 col-lg-5 d-flex align-items-baseline gap-3 mt-3"},[e("h1",{id:"page-tile"},"Edit Skill"),e("img",{src:O,id:"header-icon"})])],-1)),U={key:0},R={key:0},q={class:"row mt-5"},A={class:"col-12 col-md-8 col-lg-5 mt-2"},j={class:"mb-3"},Z=r(()=>e("label",{for:"name",class:"form-label"},"Name",-1)),J={key:0,class:"form-validate"},G={class:"row"},W={key:0},Y={class:"col col-md-8 col-lg-5 mt-2"},K=r(()=>e("label",{class:"form-label"},"Level",-1)),Q={class:"d-flex flex-column position-relative"},X=r(()=>e("span",null,[e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z",fill:"#344054"})])],-1)),ee={key:0,class:"custom-dropdown-base"},se=["onClick"],te={key:0,class:"row"},le={class:"col col-md-8 col-lg-5 mt-2"},ie={key:0},oe=r(()=>e("label",{class:"form-label"},"Filters",-1)),ne={class:"col"},re={class:"control control-checkbox"},ae={class:"my-auto mx-2 me-4"},de=["value"],ce=r(()=>e("div",{class:"control_indicator"},null,-1)),he={key:1},ue={class:"row"},me={class:"col-12 col-md-8 col-lg-5 mt-2"},pe=r(()=>e("label",{class:"form-label"},"Node Type",-1)),ke={class:"row p-0 m-0"},ge={class:"form-check col-6 col-md-5 my-2"},_e={class:"control control-checkbox"},ve=r(()=>e("span",{class:"my-auto mx-2 me-4"},"Regular",-1)),fe=r(()=>e("div",{class:"control_indicator"},null,-1)),be={key:0,class:"form-check col-6 col-md-5 my-2"},we={class:"control control-checkbox"},ye=r(()=>e("span",{class:"my-auto mx-2 me-4"},"Category",-1)),Ce=r(()=>e("div",{class:"control_indicator"},null,-1)),Se={key:1,class:"form-check col-6 col-md-5 my-2"},xe={class:"control control-checkbox"},Le=r(()=>e("span",{class:"my-auto mx-2 me-4"},"Cluster node center",-1)),Ie=r(()=>e("div",{class:"control_indicator"},null,-1)),De={key:2,class:"form-check col-6 col-md-5 my-2"},Te={class:"control control-checkbox"},Me=r(()=>e("span",{class:"my-auto mx-2 me-4"},"Cluster node outer",-1)),He=r(()=>e("div",{class:"control_indicator"},null,-1)),Ve={key:0,class:"form-validate"},Pe={key:1,class:"form-validate"},ze={class:"row"},Be={class:"col-12 col-md-8 col-lg-5 mt-2"},Oe={key:0,class:"mb-3"},Ee=r(()=>e("label",{class:"form-label"},"Parent",-1)),Fe={class:"row mt-3"},Ne={class:"col position-relative"},Ue={key:0,id:"suggest-skills",class:"flex flex-column position-absolute"},Re=["onClick"],qe={key:1,class:"mb-3"},Ae=r(()=>e("label",{class:"form-label"},"Cluster node center",-1)),je={class:"row mt-3"},Ze={class:"col position-relative"},Je={key:0,id:"suggest-skills",class:"flex flex-column position-absolute"},Ge=["onClick"],We={key:2},Ye={class:"row"},Ke={class:"col-8 col-md-3 col-lg-2 mt-2"},Qe={class:"mb-3 row d-flex justify-content-center justify-content-md-start w-100"},Xe=r(()=>e("label",{for:"image",class:"form-label"},"Icon",-1)),$e={key:0},es={class:"default-no-img"},ss=y('<svg width="33" height="33" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b8118a8e><circle cx="26.5" cy="26.5" r="26.5" fill="#D9D9D9" data-v-b8118a8e></circle><g clip-path="url(#clip0_372_11959)" data-v-b8118a8e><path d="M19.7439 45.0784L19.7439 33.2515L7.93354 33.268C7.40615 33.2671 6.90063 33.0572 6.52771 32.6843C6.15479 32.3114 5.94488 31.8059 5.94396 31.2785L5.93291 21.7174C5.93382 21.1901 6.14373 20.6845 6.51665 20.3116C6.88957 19.9387 7.3951 19.7288 7.92249 19.7279L19.7439 19.7334L19.7439 7.90646C19.7411 7.64223 19.7911 7.38009 19.8909 7.13543C19.9907 6.89076 20.1384 6.66849 20.3252 6.48164C20.5121 6.29479 20.7344 6.14713 20.979 6.0473C21.2237 5.94747 21.4858 5.8975 21.75 5.9003L31.2779 5.92241C31.8053 5.92332 32.3108 6.13322 32.6838 6.50615C33.0567 6.87907 33.2666 7.38459 33.2675 7.91198L33.262 19.7334L45.0889 19.7334C45.615 19.7337 46.1195 19.9428 46.4915 20.3148C46.8635 20.6869 47.0726 21.1913 47.073 21.7174L47.0951 31.2453C47.0948 31.7714 46.8856 32.2759 46.5136 32.6479C46.1416 33.0199 45.6371 33.229 45.111 33.2294L33.262 33.2515L33.2786 45.0618C33.2776 45.5892 33.0677 46.0947 32.6948 46.4677C32.3219 46.8406 31.8164 47.0505 31.289 47.0514L21.7501 47.0846C21.4858 47.0874 21.2237 47.0374 20.979 46.9376C20.7344 46.8377 20.5121 46.6901 20.3252 46.5032C20.1384 46.3164 19.9907 46.0941 19.8909 45.8494C19.7911 45.6048 19.7411 45.3426 19.7439 45.0784Z" fill="white" data-v-b8118a8e></path></g><defs data-v-b8118a8e><clipPath id="clip0_372_11959" data-v-b8118a8e><rect width="37" height="37" fill="white" transform="translate(8 8)" data-v-b8118a8e></rect></clipPath></defs></svg>',1),ts=[ss],ls=r(()=>e("p",{style:{"font-size":"14px"}},[e("em",null,"Maximum file size 15mb")],-1)),is={key:1},os=["src"],ns=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",height:"20",fill:"white"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),rs=["src"],as={class:"col-12 col-lg-10 mt-2"},ds={class:"mb-3 row"},cs=r(()=>e("label",{for:"image",class:"form-label"},"Banner",-1)),hs={key:0},us={class:"default-no-img"},ms=y('<svg width="33" height="33" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b8118a8e><circle cx="26.5" cy="26.5" r="26.5" fill="#D9D9D9" data-v-b8118a8e></circle><g clip-path="url(#clip0_372_11959)" data-v-b8118a8e><path d="M19.7439 45.0784L19.7439 33.2515L7.93354 33.268C7.40615 33.2671 6.90063 33.0572 6.52771 32.6843C6.15479 32.3114 5.94488 31.8059 5.94396 31.2785L5.93291 21.7174C5.93382 21.1901 6.14373 20.6845 6.51665 20.3116C6.88957 19.9387 7.3951 19.7288 7.92249 19.7279L19.7439 19.7334L19.7439 7.90646C19.7411 7.64223 19.7911 7.38009 19.8909 7.13543C19.9907 6.89076 20.1384 6.66849 20.3252 6.48164C20.5121 6.29479 20.7344 6.14713 20.979 6.0473C21.2237 5.94747 21.4858 5.8975 21.75 5.9003L31.2779 5.92241C31.8053 5.92332 32.3108 6.13322 32.6838 6.50615C33.0567 6.87907 33.2666 7.38459 33.2675 7.91198L33.262 19.7334L45.0889 19.7334C45.615 19.7337 46.1195 19.9428 46.4915 20.3148C46.8635 20.6869 47.0726 21.1913 47.073 21.7174L47.0951 31.2453C47.0948 31.7714 46.8856 32.2759 46.5136 32.6479C46.1416 33.0199 45.6371 33.229 45.111 33.2294L33.262 33.2515L33.2786 45.0618C33.2776 45.5892 33.0677 46.0947 32.6948 46.4677C32.3219 46.8406 31.8164 47.0505 31.289 47.0514L21.7501 47.0846C21.4858 47.0874 21.2237 47.0374 20.979 46.9376C20.7344 46.8377 20.5121 46.6901 20.3252 46.5032C20.1384 46.3164 19.9907 46.0941 19.8909 45.8494C19.7911 45.6048 19.7411 45.3426 19.7439 45.0784Z" fill="white" data-v-b8118a8e></path></g><defs data-v-b8118a8e><clipPath id="clip0_372_11959" data-v-b8118a8e><rect width="37" height="37" fill="white" transform="translate(8 8)" data-v-b8118a8e></rect></clipPath></defs></svg>',1),ps=[ms],ks=r(()=>e("p",{style:{"font-size":"14px"}},[e("em",null,"Maximum file size 15mb")],-1)),gs={key:1},_s=["src"],vs=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",height:"20",fill:"white"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),fs={key:0,class:"row"},bs={class:"col"},ws={class:"mb-3"},ys=r(()=>e("label",{for:"description",class:"form-label"},"Description",-1)),Cs={key:0,class:"form-validate"},Ss={key:1,class:"mb-3"},xs=r(()=>e("div",{class:"d-flex justify-content-between"},[e("label",{for:"mastery_requirements",class:"form-label"},"Mastery Requirements")],-1)),Ls={key:2,class:"row"},Is={class:"col col-md-8 col-lg-5 mt-2"},Ds=r(()=>e("label",{class:"form-label"},[g("Order "),e("span",{style:{"font-weight":"400"}},"(optional: 0 is default)")],-1)),Ts={class:"d-flex flex-column position-relative"},Ms=r(()=>e("span",null,[e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z",fill:"#344054"})])],-1)),Hs={key:0,class:"custom-dropdown-base"},Vs=["onClick"],Ps={class:"row"},zs={class:"col"},Bs={class:"mb-3"},Os=r(()=>e("label",{for:"description",class:"form-label"},"Comment",-1)),Es={key:3},Fs={class:"row"},Ns={class:"d-flex justify-content-between"},Us={key:0,class:"d-flex flex-column"},Rs={id:"danger-label-div"},qs=r(()=>e("span",{class:"d-none d-md-block"}," skill ",-1)),As=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",height:"20",fill:"white",class:"ms-1"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),js={class:"d-flex justify-content-end gap-md-4 gap-1 align-items-end"},Zs=r(()=>e("div",{class:"d-none d-md-block"},"Cancel",-1)),Js=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"white",class:"d-md-none exit-icon"},[e("path",{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"})],-1)),Gs=r(()=>e("div",{class:"d-none d-md-block"},"Submit",-1)),Ws=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"white",height:"20",width:"20",class:"d-md-none"},[e("path",{d:"M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"})],-1)),Ys=[Gs,Ws],Ks=r(()=>e("div",{class:"d-none d-md-block"},"Submit for review",-1)),Qs=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"white",height:"20",width:"20",class:"d-md-none"},[e("path",{d:"M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"})],-1)),Xs=[Ks,Qs],$s={key:0,id:"myModal",class:"modal"},et={class:"modal-content d-flex flex-column"},st={class:"mb-4"},tt={key:0,id:"warning-section",class:"d-flex align-items-center"},lt=r(()=>e("div",{class:"me-3"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"15",height:"15",fill:"#eed888"},[e("path",{d:"M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"})])],-1)),it=r(()=>e("div",null," This action will delete this skill and all its nested skills, and is not reversible. ",-1)),ot=[lt,it],nt={key:1},rt={for:"name",class:"conform-label"},at={class:"mt-3 d-flex justify-content-between"};function dt(l,t,h,a,s,c){const C=T("router-link");return o(),n(k,null,[e("div",F,[N,s.isAnotherInstanceOfExistingSkill?d("",!0):(o(),n("div",U,[a.userDetailsStore.role=="admin"||a.userDetailsStore.role=="editor"?(o(),n("div",R,[e("div",q,[e("div",A,[e("div",j,[Z,u(e("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>s.skill.name=i),class:"form-control",type:"text",placeholder:"name"},null,512),[[p,s.skill.name]]),s.validate.name&&(s.skill.name==""||s.skill.name==null)?(o(),n("div",J," please enter a skill name ")):d("",!0)])])]),e("div",G,[s.skill.type!="domain"&&s.skill.type!="sub"?(o(),n("div",W,[e("div",Y,[K,e("div",Q,[e("div",{class:v([s.showLevelDropDown?"custom-select-button-focus ":"custom-select-button "]),onClick:t[1]||(t[1]=i=>s.showLevelDropDown=!s.showLevelDropDown)},[g(m(s.showLevel)+" ",1),X],2),s.showLevelDropDown?(o(),n("div",ee,[(o(!0),n(k,null,f(s.levels,i=>(o(),n("div",{class:"custom-dropdown-option",onClick:_=>c.handleChooseSkillLevel(i)},m(i.name),9,se))),256))])):d("",!0)])])])):d("",!0)]),a.userDetailsStore.role=="admin"?(o(),n("div",te,[e("div",le,[s.skill.type!="sub"?(o(),n("div",ie,[oe,e("div",ne,[(o(!0),n(k,null,f(a.tagsStore.tagsList,i=>(o(),n("label",re,[e("span",ae,m(i.name),1),u(e("input",{type:"checkbox",value:i.id,"onUpdate:modelValue":t[2]||(t[2]=_=>s.filters=_)},null,8,de),[[M,s.filters]]),ce]))),256))])])):d("",!0)])])):d("",!0)])):d("",!0)])),a.userDetailsStore.role=="admin"||a.userDetailsStore.role=="editor"?(o(),n("div",he,[e("div",ue,[e("div",me,[pe,e("div",ke,[e("div",ge,[e("label",_e,[ve,u(e("input",{type:"radio",name:"nodeType",id:"regularSkillRadio",value:"regular","onUpdate:modelValue":t[3]||(t[3]=i=>s.skill.type=i)},null,512),[[b,s.skill.type]]),fe])]),s.isAnotherInstanceOfExistingSkill?d("",!0):(o(),n("div",be,[e("label",we,[ye,u(e("input",{type:"radio",name:"nodeType",id:"domainSkillRadio",value:"domain","onUpdate:modelValue":t[4]||(t[4]=i=>s.skill.type=i)},null,512),[[b,s.skill.type]]),Ce])])),s.isAnotherInstanceOfExistingSkill?d("",!0):(o(),n("div",Se,[e("label",xe,[Le,u(e("input",{type:"radio",name:"nodeType",id:"superSkillRadio",value:"super","onUpdate:modelValue":t[5]||(t[5]=i=>s.skill.type=i)},null,512),[[b,s.skill.type]]),Ie])])),s.skill.parent_type=="super"?(o(),n("div",De,[e("label",Te,[Me,u(e("input",{type:"radio",name:"nodeType",id:"regularSkillRadio",value:"sub","onUpdate:modelValue":t[6]||(t[6]=i=>s.skill.type=i)},null,512),[[b,s.skill.type]]),He])])):d("",!0)]),s.validate.orphan&&this.skill.type=="sub"&&this.skill.parent==0?(o(),n("div",Ve," please choose a parent for this skill ")):d("",!0),s.validate.noChild&&this.skill.type=="sub"?(o(),n("div",Pe," please delete this node's child skills, before changing it to a cluster child skill ")):d("",!0)])]),e("div",ze,[e("div",Be,[s.skill.type!="sub"?(o(),n("div",Oe,[Ee,e("div",Fe,[e("div",Ne,[u(e("input",{id:"skill-input","onUpdate:modelValue":t[7]||(t[7]=i=>s.parentInput.inputText=i),onInput:t[8]||(t[8]=(...i)=>c.getReferenceSkill&&c.getReferenceSkill(...i)),placeholder:"type skill name"},null,544),[[p,s.parentInput.inputText]]),s.parentInput.suggestSkills.length>0?(o(),n("div",Ue,[(o(!0),n(k,null,f(s.parentInput.suggestSkills,i=>(o(),n("div",{class:"suggest-option",onClick:_=>c.handleChooseSuggestSkill(i)},m(i.name),9,Re))),256))])):d("",!0)])])])):(o(),n("div",qe,[Ae,e("div",je,[e("div",Ze,[u(e("input",{id:"skill-input","onUpdate:modelValue":t[9]||(t[9]=i=>s.clusterParentInput.inputText=i),onInput:t[10]||(t[10]=(...i)=>c.getSuperSkillSuggestion&&c.getSuperSkillSuggestion(...i)),placeholder:"type skill name"},null,544),[[p,s.clusterParentInput.inputText]]),s.clusterParentInput.suggestSuperSkills.length>0?(o(),n("div",Je,[(o(!0),n(k,null,f(s.clusterParentInput.suggestSuperSkills,i=>(o(),n("div",{class:"suggest-option",onClick:_=>c.handleChooseSuggestSkill(i)},m(i.name),9,Ge))),256))])):d("",!0)])])]))])])])):d("",!0),s.isAnotherInstanceOfExistingSkill?(o(),n("div",Es," For other edits, please edit the original instance of this skill ")):(o(),n("div",We,[e("div",Ye,[e("div",Ke,[e("div",Qe,[Xe,s.iconImage?(o(),n("div",is,[e("p",null,[e("img",{src:s.iconImage,height:"158",width:"158",style:{"background-color":"lightgrey"}},null,8,os)]),e("p",null,[e("button",{class:"btn red-btn",onClick:t[13]||(t[13]=i=>c.deleteImage("icon"))},[g(" Remove    "),ns])])])):(o(),n("div",$e,[e("input",{class:"form-control d-none",type:"file",accept:"image/*",onChange:t[11]||(t[11]=i=>c.onFileChange(i,"icon")),id:"iconFileChoose"},null,32),e("div",es,[e("div",{class:"plus-svg",onClick:t[12]||(t[12]=i=>c.openImage("iconFileChoose"))},ts)]),ls])),e("img",{id:"originalImage",class:"d-none",src:"https://institute-skill-infobox-image-thumbnails.s3.amazonaws.com/"+s.skillUrl+"?"+s.randomNum},null,8,rs)])]),e("div",as,[e("div",ds,[cs,s.bannerImage?(o(),n("div",gs,[e("p",null,[e("img",{src:s.bannerImage,height:"158",width:"1175",style:{"background-color":"lightgrey"},class:"banner-image rounded"},null,8,_s)]),e("p",null,[e("button",{class:"btn red-btn",onClick:t[16]||(t[16]=i=>c.deleteImage("banner"))},[g(" Remove    "),vs])])])):(o(),n("div",hs,[e("input",{class:"form-control d-none",type:"file",accept:"image/*",onChange:t[14]||(t[14]=i=>c.onFileChange(i,"banner")),id:"bannerFileChoose"},null,32),e("div",us,[e("div",{class:"plus-svg",onClick:t[15]||(t[15]=i=>c.openImage("bannerFileChoose"))},ps)]),ks]))])])]),a.userDetailsStore.role=="admin"?(o(),n("div",fs,[e("div",bs,[e("div",ws,[ys,u(e("textarea",{"onUpdate:modelValue":t[17]||(t[17]=i=>s.skill.description=i),class:"form-control",rows:"2"},null,512),[[p,s.skill.description]])]),e("div",null,[s.validate.description?(o(),n("div",Cs," please enter description for skill ")):d("",!0)])])])):d("",!0),s.skill.type!="domain"?(o(),n("div",Ss,[xs,u(e("textarea",{class:"form-control","onUpdate:modelValue":t[18]||(t[18]=i=>s.skill.mastery_requirements=i),id:"summernote",rows:"3"},null,512),[[p,s.skill.mastery_requirements]])])):d("",!0),a.userDetailsStore.role=="admin"?(o(),n("div",Ls,[e("div",Is,[Ds,e("div",Ts,[e("div",{class:v([s.showOrderDropDown?"custom-select-button-focus ":"custom-select-button "]),onClick:t[19]||(t[19]=i=>s.showOrderDropDown=!s.showOrderDropDown)},[g(m(s.skill.order)+" ",1),Ms],2),s.showOrderDropDown?(o(),n("div",Hs,[(o(!0),n(k,null,f(s.orderArray,i=>(o(),n("div",{class:"custom-dropdown-option",onClick:_=>c.handleChooseSkillOrder(i)},m(i),9,Vs))),256))])):d("",!0)])])])):d("",!0),e("div",Ps,[e("div",zs,[e("div",Bs,[Os,u(e("textarea",{"onUpdate:modelValue":t[20]||(t[20]=i=>s.comment=i),class:"form-control",rows:"2"},null,512),[[p,s.comment]])]),s.comment.length>255?(o(),n("div",{key:0,class:v([l.shake?"click-shake form-validate":"form-validate initial-shake"])}," Your comment has too many words !! ",2)):d("",!0)])])])),e("div",Fs,[e("div",Ns,[a.userDetailsStore.role=="admin"?(o(),n("div",Us,[e("div",Rs,[s.deleteButtonHover?(o(),n("div",{key:0,id:"danger-label",class:v({shake:s.deleteButtonHover})}," Danger !!! ",2)):d("",!0)]),e("div",null,[e("button",{class:"btn red-btn",onMouseover:t[21]||(t[21]=i=>s.deleteButtonHover=!0),onMouseleave:t[22]||(t[22]=i=>s.deleteButtonHover=!1),onClick:t[23]||(t[23]=i=>s.showModal=!0)},[g(" Delete "),qs,As],32)])])):d("",!0),e("div",js,[w(C,{class:"btn red-btn",to:"/skills"},{default:H(()=>[Zs,Js]),_:1}),a.userDetailsStore.role=="admin"||a.userDetailsStore.role=="editor"?(o(),n("button",{key:0,class:"btn purple-btn",onClick:t[24]||(t[24]=i=>c.Submit())},Ys)):a.userDetailsStore.role=="instructor"||a.userDetailsStore.role=="student"?(o(),n("button",{key:1,class:"btn purple-btn",onClick:t[25]||(t[25]=i=>c.SubmitForReview())},Xs)):d("",!0)])])])]),s.showModal?(o(),n("div",$s,[e("div",et,[e("div",st,'Delete "'+m(s.skill.name)+'"',1),s.step1Confirm?d("",!0):(o(),n("div",tt,ot)),s.step1Confirm?(o(),n("div",nt,[e("label",rt,'Enter "'+m(s.skill.name)+'" in the box below to confirm',1),u(e("input",{"onUpdate:modelValue":t[26]||(t[26]=i=>s.skillNameConfirm=i),class:"form-control",type:"text",placeholder:"name",onInput:t[27]||(t[27]=(...i)=>c.handleConfirmInputChange&&c.handleConfirmInputChange(...i))},null,544),[[p,s.skillNameConfirm]])])):d("",!0),e("div",at,[e("button",{class:"btn green-btn",onClick:t[28]||(t[28]=(...i)=>c.handleCancelDeleteSkill&&c.handleCancelDeleteSkill(...i))}," Cancel "),s.step1Confirm?d("",!0):(o(),n("button",{key:0,class:"btn red-btn",onClick:t[29]||(t[29]=i=>s.step1Confirm=!0)}," I still want to delete this skill ")),s.step1Confirm?(o(),n("button",{key:1,class:v([s.step2Confirm?"btn red-btn":"btn button-inactive"]),onClick:t[30]||(t[30]=i=>c.DeleteSkill(s.skill.id))}," Delete skill ",2)):d("",!0)])])])):d("",!0)],64)}const ct=x(E,[["render",dt],["__scopeId","data-v-b8118a8e"]]),ht=e("div",{id:"banner"},[e("img",{src:S,class:"image-fluid"})],-1),gt={__name:"EditSkillView",setup(l){return(t,h)=>(o(),n(k,null,[ht,w(ct)],64))}};export{gt as default};
