import{_ as w}from"./edit-mastery-skill-banner-9e7c0291.js";import{u as S}from"./SkillsStore-49f0ef28.js";import{_ as x,e as L,o as r,c as a,a as e,w as c,v as u,d as h,K as I,i as m,t as _,F as g,r as v,Q as D,R as k,h as b,g as T,p as P,b as R,I as C}from"./main-a228213a.js";import{_ as V}from"./recurso-69-12793b41.js";const H={setup(){return{skillsStore:S()}},data(){return{skillId:this.$route.params.id,skills:[],skill:{name:"",parent:"",description:"",icon_image:"",banner_image:"",mastery_requirements:"",tags:[],type:null,level:null,filter_1:null},filterChecked:!1,iconImage:"",bannerImage:"",superSkills:[],levels:[{id:"grade_school",name:"Grade school"},{id:"middle_school",name:"Middle school"},{id:"high_school",name:"High school"},{id:"college",name:"College"},{id:"phd",name:"PhD"}],showDropDown:!1,showLevel:"",parentInput:{inputText:"",suggestSkills:[]},clusterParentInput:{inputText:"",suggestSuperSkills:[]},validate:{violated:!1,name:!1,description:!1,orphan:!1,superValidate:!1,noChild:!1}}},async mounted(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList(),this.getParentSkills()},methods:{getParentSkills(){for(let l=0;l<this.skillsStore.skillsList.length;l++)this.skillsStore.skillsList[l].id!=this.skillId&&(this.skillsStore.skillsList[l].type=="super"&&this.superSkills.push(this.skillsStore.skillsList[l]),this.skillsStore.skillsList[l].type!="sub"&&this.skills.push(this.skillsStore.skillsList[l]));this.getSkill()},getSkill(){fetch("/skills/show/"+this.skillId).then(function(l){return l.json()}).then(l=>{this.skill=l}).then(()=>{this.iconImage=this.skill.icon_image,this.bannerImage=this.skill.banner_image,$("#summernote").summernote("code",this.skill.mastery_requirements),$("#description-summernote").summernote("code",this.skill.description);const l=this.levels.find(d=>d.id===this.skill.level);this.showLevel=l.name;const s=this.skills.find(d=>d.id===this.skill.parent);this.parentInput.inputText=s.name})},onFileChange(l,s){var d=l.target.files||l.dataTransfer.files;d.length&&this.createImage(d[0],s)},createImage(l,s){new Image;var d=new FileReader,p=this;d.onload=t=>{p.image=t.target.result,s=="icon"?(this.iconImage=t.target.result,this.skill.icon_image=this.iconImage):(this.bannerImage=t.target.result,this.skill.banner_image=this.bannerImage)},d.readAsDataURL(l)},openImage(l){document.getElementById(l).click()},deleteImage(l){switch(l){case"icon":this.iconImage="";break;default:this.bannerImage="";break}},Submit(){if(this.skill.type!="super"){var l=!1;for(let o=0;o<this.skillsStore.skillsList.length;o++)this.skillsStore.skillsList[o].type=="sub"&&this.skillsStore.skillsList[o].parent==this.skillId&&(l=!0);l&&(this.validate.superValidate=!0,this.validate.violated=!0,alert("Please delete outer cluster nodes belonging to the skill, before changing its type."))}if(this.skill.type=="domain")this.skill.level="domain";else if(this.skill.type=="sub"){this.skill.parent==0&&(this.validate.orphan=!0,this.validate.violated=!0,alert("cluster nodes must have a parent"));for(let o=0;o<this.skillsStore.skillsList.length;o++)this.skill.parent==this.skillsStore.skillsList[o].id&&(this.skill.filter_1=this.skillsStore.skillsList[o].filter_1,this.skill.level=this.skillsStore.skillsList[o].level),this.skillsStore.skillsList[o].parent==this.skillId&&(this.validate.noChild=!0,this.validate.violated=!0,alert("please delete this node's child skills, before changing it to a cluster child skill"))}var s=$("#summernote").summernote("code");const d=$("#description-summernote").summernote("code");if((this.skill.name===""||this.skill.name===null)&&(this.validate.name=!0,this.validate.violated=!0,alert("please enter a skill name")),this.validate.violated)return;const p={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.skill.name,parent:this.skill.parent,description:d,icon_image:this.skill.icon_image,banner_image:this.skill.banner_image,mastery_requirements:s,type:this.skill.type,level:this.skill.level,filter_1:this.skill.filter_1})};var t="/skills/"+this.skillId+"/edit";fetch(t,p).then(()=>{this.skillsStore.getNestedSkillsList()}).then(()=>{this.$router.push("/skills")})},handleChooseSkillLevel(l){this.showDropDown=!1,this.showLevel=l.name,this.skill.level=l.id},getReferenceSkill(){this.parentInput.inputText.length<2?this.parentInput.suggestSkills=[]:this.parentInput.suggestSkills=this.skills.filter(l=>l.name.toLowerCase().includes(this.parentInput.inputText.toLowerCase()))},handleChooseSuggestSkill(l){this.parentInput.suggestSkills=[],this.skill.parent=l.id,this.parentInput.inputText=l.name},getSuperSkillSuggestion(){this.clusterParentInput.inputText.length<2?this.clusterParentInput.suggestSuperSkills=[]:this.clusterParentInput.suggestSuperSkills=this.superSkills.filter(l=>l.name.toLowerCase().includes(this.clusterParentInput.inputText.toLowerCase()))},handleChooseSuperSkill(l){this.clusterParentInput.suggestSuperSkills=[],this.skill.parent=l.id,this.clusterParentInput.inputText=l.name}}},n=l=>(P("data-v-d5021b81"),l=l(),R(),l),M={class:"container mt-4 pb-5 px-3 px-md-0"},U=n(()=>e("div",{class:"row mt-5"},[e("div",{class:"col-12 col-md-10 col-lg-5 d-flex align-items-baseline gap-3 mt-3"},[e("h1",{id:"page-tile"},"Edit Skill"),e("img",{src:V,id:"header-icon"})])],-1)),F={class:"row mt-5"},B={class:"col-12 col-md-8 col-lg-5 mt-2"},q={class:"mb-3"},z=n(()=>e("label",{for:"name",class:"form-label"},"Name",-1)),N={key:0,class:"form-validate"},E={class:"row"},j={key:0},Z={class:"col col-md-8 col-lg-5 mt-2"},O=n(()=>e("label",{class:"form-label"},"Level",-1)),A={class:"d-flex flex-column position-relative"},G=n(()=>e("span",null,[e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z",fill:"#344054"})])],-1)),J={key:0,class:"custom-dropdown-base"},K=["onClick"],Q={class:"row"},W={class:"col col-md-8 col-lg-5 mt-2"},X={key:0},Y=n(()=>e("label",{class:"form-label"},"Filter",-1)),ee={class:"col"},se={class:"control control-checkbox"},te=n(()=>e("span",{class:"my-auto mx-2 me-4"},"Contrary to strict Christian doctrine",-1)),le=n(()=>e("div",{class:"control_indicator"},null,-1)),ie={class:"row"},oe={class:"col-12 col-md-8 col-lg-5 mt-2"},ne=n(()=>e("label",{class:"form-label"},"Node Type",-1)),re={class:"row p-0 m-0"},ae={class:"form-check col-6 col-md-5 my-2"},de={class:"control control-checkbox"},ce=n(()=>e("span",{class:"my-auto mx-2 me-4"},"Regular",-1)),he=n(()=>e("div",{class:"control_indicator"},null,-1)),ue={class:"form-check col-6 col-md-5 my-2"},pe={class:"control control-checkbox"},me=n(()=>e("span",{class:"my-auto mx-2 me-4"},"Pass-through",-1)),_e=n(()=>e("div",{class:"control_indicator"},null,-1)),ke={class:"form-check col-6 col-md-5 my-2"},ge={class:"control control-checkbox"},ve=n(()=>e("span",{class:"my-auto mx-2 me-4"},"Cluster node center",-1)),fe=n(()=>e("div",{class:"control_indicator"},null,-1)),be={class:"form-check col-6 col-md-5 my-2"},Ce={class:"control control-checkbox"},ye=n(()=>e("span",{class:"my-auto mx-2 me-4"},"Cluster node outer",-1)),we=n(()=>e("div",{class:"control_indicator"},null,-1)),Se={key:0,class:"form-validate"},xe={key:1,class:"form-validate"},Le={class:"row"},Ie={class:"col-12 col-md-8 col-lg-5 mt-2"},De={key:0,class:"mb-3"},Te=n(()=>e("label",{class:"form-label"},"Parent",-1)),Pe={class:"row mt-3"},Re={class:"col position-relative"},Ve={key:0,id:"suggest-skills",class:"flex flex-column position-absolute"},He=["onClick"],Me={key:1,class:"mb-3"},Ue=n(()=>e("label",{class:"form-label"},"Cluster node center",-1)),Fe={class:"row mt-3"},Be={class:"col position-relative"},qe={key:0,id:"suggest-skills",class:"flex flex-column position-absolute"},ze=["onClick"],Ne={class:"row"},Ee={class:"col-8 col-md-3 col-lg-2 mt-2"},je={class:"mb-3 row d-flex justify-content-center justify-content-md-start w-100"},Ze=n(()=>e("label",{for:"image",class:"form-label"},"Icon",-1)),Oe={key:0},Ae={class:"default-no-img"},Ge=C('<svg width="33" height="33" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d5021b81><circle cx="26.5" cy="26.5" r="26.5" fill="#D9D9D9" data-v-d5021b81></circle><g clip-path="url(#clip0_372_11959)" data-v-d5021b81><path d="M19.7439 45.0784L19.7439 33.2515L7.93354 33.268C7.40615 33.2671 6.90063 33.0572 6.52771 32.6843C6.15479 32.3114 5.94488 31.8059 5.94396 31.2785L5.93291 21.7174C5.93382 21.1901 6.14373 20.6845 6.51665 20.3116C6.88957 19.9387 7.3951 19.7288 7.92249 19.7279L19.7439 19.7334L19.7439 7.90646C19.7411 7.64223 19.7911 7.38009 19.8909 7.13543C19.9907 6.89076 20.1384 6.66849 20.3252 6.48164C20.5121 6.29479 20.7344 6.14713 20.979 6.0473C21.2237 5.94747 21.4858 5.8975 21.75 5.9003L31.2779 5.92241C31.8053 5.92332 32.3108 6.13322 32.6838 6.50615C33.0567 6.87907 33.2666 7.38459 33.2675 7.91198L33.262 19.7334L45.0889 19.7334C45.615 19.7337 46.1195 19.9428 46.4915 20.3148C46.8635 20.6869 47.0726 21.1913 47.073 21.7174L47.0951 31.2453C47.0948 31.7714 46.8856 32.2759 46.5136 32.6479C46.1416 33.0199 45.6371 33.229 45.111 33.2294L33.262 33.2515L33.2786 45.0618C33.2776 45.5892 33.0677 46.0947 32.6948 46.4677C32.3219 46.8406 31.8164 47.0505 31.289 47.0514L21.7501 47.0846C21.4858 47.0874 21.2237 47.0374 20.979 46.9376C20.7344 46.8377 20.5121 46.6901 20.3252 46.5032C20.1384 46.3164 19.9907 46.0941 19.8909 45.8494C19.7911 45.6048 19.7411 45.3426 19.7439 45.0784Z" fill="white" data-v-d5021b81></path></g><defs data-v-d5021b81><clipPath id="clip0_372_11959" data-v-d5021b81><rect width="37" height="37" fill="white" transform="translate(8 8)" data-v-d5021b81></rect></clipPath></defs></svg>',1),Je=[Ge],Ke=n(()=>e("p",{style:{"font-size":"14px"}},[e("em",null,"Maximum file size 15mb")],-1)),Qe={key:1},We=["src"],Xe=n(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",height:"20",fill:"white"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),Ye={class:"col-12 col-lg-10 mt-2"},$e={class:"mb-3 row"},es=n(()=>e("label",{for:"image",class:"form-label"},"Banner",-1)),ss={key:0},ts={class:"default-no-img"},ls=C('<svg width="33" height="33" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d5021b81><circle cx="26.5" cy="26.5" r="26.5" fill="#D9D9D9" data-v-d5021b81></circle><g clip-path="url(#clip0_372_11959)" data-v-d5021b81><path d="M19.7439 45.0784L19.7439 33.2515L7.93354 33.268C7.40615 33.2671 6.90063 33.0572 6.52771 32.6843C6.15479 32.3114 5.94488 31.8059 5.94396 31.2785L5.93291 21.7174C5.93382 21.1901 6.14373 20.6845 6.51665 20.3116C6.88957 19.9387 7.3951 19.7288 7.92249 19.7279L19.7439 19.7334L19.7439 7.90646C19.7411 7.64223 19.7911 7.38009 19.8909 7.13543C19.9907 6.89076 20.1384 6.66849 20.3252 6.48164C20.5121 6.29479 20.7344 6.14713 20.979 6.0473C21.2237 5.94747 21.4858 5.8975 21.75 5.9003L31.2779 5.92241C31.8053 5.92332 32.3108 6.13322 32.6838 6.50615C33.0567 6.87907 33.2666 7.38459 33.2675 7.91198L33.262 19.7334L45.0889 19.7334C45.615 19.7337 46.1195 19.9428 46.4915 20.3148C46.8635 20.6869 47.0726 21.1913 47.073 21.7174L47.0951 31.2453C47.0948 31.7714 46.8856 32.2759 46.5136 32.6479C46.1416 33.0199 45.6371 33.229 45.111 33.2294L33.262 33.2515L33.2786 45.0618C33.2776 45.5892 33.0677 46.0947 32.6948 46.4677C32.3219 46.8406 31.8164 47.0505 31.289 47.0514L21.7501 47.0846C21.4858 47.0874 21.2237 47.0374 20.979 46.9376C20.7344 46.8377 20.5121 46.6901 20.3252 46.5032C20.1384 46.3164 19.9907 46.0941 19.8909 45.8494C19.7911 45.6048 19.7411 45.3426 19.7439 45.0784Z" fill="white" data-v-d5021b81></path></g><defs data-v-d5021b81><clipPath id="clip0_372_11959" data-v-d5021b81><rect width="37" height="37" fill="white" transform="translate(8 8)" data-v-d5021b81></rect></clipPath></defs></svg>',1),is=[ls],os=n(()=>e("p",{style:{"font-size":"14px"}},[e("em",null,"Maximum file size 15mb")],-1)),ns={key:1},rs=["src"],as=n(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",height:"20",fill:"white"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),ds={class:"row"},cs={class:"col"},hs={class:"mb-3"},us=n(()=>e("label",{for:"description",class:"form-label"},"Description",-1)),ps={key:0,class:"form-validate"},ms={class:"mb-3"},_s=n(()=>e("label",{for:"mastery_requirements",class:"form-label"},"Mastery Requirements",-1)),ks={class:"row"},gs={class:"col"},vs={class:"d-flex justify-content-end gap-4"};function fs(l,s,d,p,t,o){const y=L("router-link");return r(),a("div",M,[U,e("div",F,[e("div",B,[e("div",q,[z,c(e("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>t.skill.name=i),class:"form-control",type:"text",placeholder:"name"},null,512),[[u,t.skill.name]]),t.validate.name&&(t.skill.name==""||t.skill.name==null)?(r(),a("div",N," please enter a skill name ")):h("",!0)])])]),e("div",E,[t.skill.type!="domain"&&t.skill.type!="sub"?(r(),a("div",j,[e("div",Z,[O,e("div",A,[e("div",{class:I([t.showDropDown?"custom-select-button-focus ":"custom-select-button "]),onClick:s[1]||(s[1]=i=>t.showDropDown=!t.showDropDown)},[m(_(t.showLevel)+" ",1),G],2),t.showDropDown?(r(),a("div",J,[(r(!0),a(g,null,v(t.levels,i=>(r(),a("div",{class:"custom-dropdown-option",onClick:f=>o.handleChooseSkillLevel(i)},_(i.name),9,K))),256))])):h("",!0)])])])):h("",!0)]),e("div",Q,[e("div",W,[t.skill.type!="sub"?(r(),a("div",X,[Y,e("div",ee,[e("label",se,[te,c(e("input",{type:"checkbox",name:"nodeType",id:"regularSkillRadio",value:"regular","onUpdate:modelValue":s[2]||(s[2]=i=>t.skill.filter_1=i)},null,512),[[D,t.skill.filter_1]]),le])])])):h("",!0)])]),e("div",ie,[e("div",oe,[ne,e("div",re,[e("div",ae,[e("label",de,[ce,c(e("input",{type:"radio",name:"nodeType",id:"regularSkillRadio",value:"regular","onUpdate:modelValue":s[3]||(s[3]=i=>t.skill.type=i)},null,512),[[k,t.skill.type]]),he])]),e("div",ue,[e("label",pe,[me,c(e("input",{type:"radio",name:"nodeType",id:"domainSkillRadio",value:"domain","onUpdate:modelValue":s[4]||(s[4]=i=>t.skill.type=i)},null,512),[[k,t.skill.type]]),_e])]),e("div",ke,[e("label",ge,[ve,c(e("input",{type:"radio",name:"nodeType",id:"superSkillRadio",value:"super","onUpdate:modelValue":s[5]||(s[5]=i=>t.skill.type=i)},null,512),[[k,t.skill.type]]),fe])]),e("div",be,[e("label",Ce,[ye,c(e("input",{type:"radio",name:"nodeType",id:"regularSkillRadio",value:"sub","onUpdate:modelValue":s[6]||(s[6]=i=>t.skill.type=i)},null,512),[[k,t.skill.type]]),we])])]),t.validate.orphan&&this.skill.type=="sub"&&this.skill.parent==0?(r(),a("div",Se," please choose a parent for this skill ")):h("",!0),t.validate.noChild&&this.skill.type=="sub"?(r(),a("div",xe," please delete this node's child skills, before changing it to a cluster child skill ")):h("",!0)])]),e("div",Le,[e("div",Ie,[t.skill.type!="sub"?(r(),a("div",De,[Te,e("div",Pe,[e("div",Re,[c(e("input",{id:"skill-input","onUpdate:modelValue":s[7]||(s[7]=i=>t.parentInput.inputText=i),onInput:s[8]||(s[8]=(...i)=>o.getReferenceSkill&&o.getReferenceSkill(...i)),placeholder:"type skill name"},null,544),[[u,t.parentInput.inputText]]),t.parentInput.suggestSkills.length>0?(r(),a("div",Ve,[(r(!0),a(g,null,v(t.parentInput.suggestSkills,i=>(r(),a("div",{class:"suggest-option",onClick:f=>o.handleChooseSuggestSkill(i)},_(i.name),9,He))),256))])):h("",!0)])])])):(r(),a("div",Me,[Ue,e("div",Fe,[e("div",Be,[c(e("input",{id:"skill-input","onUpdate:modelValue":s[9]||(s[9]=i=>t.clusterParentInput.inputText=i),onInput:s[10]||(s[10]=(...i)=>o.getSuperSkillSuggestion&&o.getSuperSkillSuggestion(...i)),placeholder:"type skill name"},null,544),[[u,t.clusterParentInput.inputText]]),t.clusterParentInput.suggestSuperSkills.length>0?(r(),a("div",qe,[(r(!0),a(g,null,v(t.clusterParentInput.suggestSuperSkills,i=>(r(),a("div",{class:"suggest-option",onClick:f=>o.handleChooseSuggestSkill(i)},_(i.name),9,ze))),256))])):h("",!0)])])]))])]),e("div",Ne,[e("div",Ee,[e("div",je,[Ze,t.iconImage?(r(),a("div",Qe,[e("p",null,[e("img",{src:t.iconImage,height:"158",width:"158",style:{"background-color":"lightgrey"}},null,8,We)]),e("p",null,[e("button",{class:"btn red-btn",onClick:s[13]||(s[13]=i=>o.deleteImage("icon"))},[m(" Remove    "),Xe])])])):(r(),a("div",Oe,[e("input",{class:"form-control d-none",type:"file",accept:"image/*",onChange:s[11]||(s[11]=i=>o.onFileChange(i,"icon")),id:"iconFileChoose"},null,32),e("div",Ae,[e("div",{class:"plus-svg",onClick:s[12]||(s[12]=i=>o.openImage("iconFileChoose"))},Je)]),Ke]))])]),e("div",Ye,[e("div",$e,[es,t.bannerImage?(r(),a("div",ns,[e("p",null,[e("img",{src:t.bannerImage,height:"158",width:"1175",style:{"background-color":"lightgrey"}},null,8,rs)]),e("p",null,[e("button",{class:"btn red-btn",onClick:s[16]||(s[16]=i=>o.deleteImage("banner"))},[m(" Remove    "),as])])])):(r(),a("div",ss,[e("input",{class:"form-control d-none",type:"file",accept:"image/*",onChange:s[14]||(s[14]=i=>o.onFileChange(i,"banner")),id:"bannerFileChoose"},null,32),e("div",ts,[e("div",{class:"plus-svg",onClick:s[15]||(s[15]=i=>o.openImage("bannerFileChoose"))},is)]),os]))])])]),e("div",ds,[e("div",cs,[e("div",hs,[us,c(e("textarea",{"onUpdate:modelValue":s[17]||(s[17]=i=>t.skill.description=i),class:"form-control",id:"description-summernote",rows:"3"},null,512),[[u,t.skill.description]])]),e("div",null,[t.validate.description?(r(),a("div",ps," please enter description for skill ")):h("",!0)])])]),e("div",ms,[_s,c(e("textarea",{class:"form-control","onUpdate:modelValue":s[18]||(s[18]=i=>t.skill.mastery_requirements=i),id:"summernote",rows:"3"},null,512),[[u,t.skill.mastery_requirements]])]),e("div",ks,[e("div",gs,[e("div",vs,[b(y,{class:"btn red-btn",to:"/skills"},{default:T(()=>[m(" Cancel ")]),_:1}),e("button",{class:"btn purple-btn",onClick:s[19]||(s[19]=i=>o.Submit())}," Submit ")])])])])}const bs=x(H,[["render",fs],["__scopeId","data-v-d5021b81"]]),Cs=e("div",{id:"banner"},[e("img",{src:w,class:"image-fluid"})],-1),Ls={__name:"EditSkillView",setup(l){return(s,d)=>(r(),a(g,null,[Cs,b(bs)],64))}};export{Ls as default};
