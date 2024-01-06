import{u as y}from"./SkillsStore-78a4359e.js";import{_ as S,e as C,o as n,c as r,a as e,w as a,k as u,B as k,F as p,r as _,t as f,n as g,v as L,C as h,f as I,h as w,i as b,p as x,b as R,g as V}from"./main-b6eeeb3b.js";const U={setup(){return{skillsStore:y()}},data(){return{skillId:this.$route.params.id,skills:[],skill:{name:"",parent:"",description:"",icon_image:"",banner_image:"",mastery_requirements:"",tags:[],type:null,level:null,filter_1:null},filterChecked:!1,iconImage:"",bannerImage:"",superSkills:[],levels:[{id:"grade_school",name:"Grade school"},{id:"middle_school",name:"Middle school"},{id:"high_school",name:"High school"},{id:"college",name:"College"},{id:"phd",name:"PhD"}]}},async mounted(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList(),this.getParentSkills()},methods:{getParentSkills(){for(let i=0;i<this.skillsStore.skillsList.length;i++)this.skillsStore.skillsList[i].id!=this.skillId&&(this.skillsStore.skillsList[i].type=="super"&&this.superSkills.push(this.skillsStore.skillsList[i]),this.skillsStore.skillsList[i].type!="sub"&&this.skills.push(this.skillsStore.skillsList[i]));this.getSkill()},getSkill(){fetch("/skills/show/"+this.skillId).then(function(i){return i.json()}).then(i=>this.skill=i).then(()=>{this.iconImage=this.skill.icon_image,this.bannerImage=this.skill.banner_image,$("#summernote").summernote("code",this.skill.mastery_requirements)})},onFileChange(i){var l=i.target.files||i.dataTransfer.files;l.length&&this.createImage(l[0])},createImage(i){new Image;var l=new FileReader,d=this;l.onload=m=>{d.image=m.target.result,this.image=m.target.result,this.skill.image=this.image},l.readAsDataURL(i)},removeImage:function(i){this.image="",this.skill.image=this.image},Submit(){if(this.skill.type!="super"){var i=!1;for(let s=0;s<this.skillsStore.skillsList.length;s++)this.skillsStore.skillsList[s].type=="sub"&&this.skillsStore.skillsList[s].parent==this.skillId&&(i=!0);if(i){alert("Please delete outer cluster nodes belonging to the skill, before changing its type.");return}}if(this.skill.type=="domain")this.skill.level="domain";else if(this.skill.type=="sub"){if(this.skill.parent==0){alert("cluster nodes must have a parent");return}for(let s=0;s<this.skillsStore.skillsList.length;s++)if(this.skill.parent==this.skillsStore.skillsList[s].id&&(this.skill.filter_1=this.skillsStore.skillsList[s].filter_1,this.skill.level=this.skillsStore.skillsList[s].level),this.skillsStore.skillsList[s].parent==this.skillId){alert("please delete this node's child skills, before changing it to a cluster child skill");return}}var l=$("#summernote").summernote("code");const d={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.skill.name,parent:this.skill.parent,description:this.skill.description,icon_image:this.skill.icon_image,banner_image:this.skill.banner_image,mastery_requirements:l,type:this.skill.type,level:this.skill.level,filter_1:this.skill.filter_1})};var m="/skills/"+this.skillId+"/edit";fetch(m,d).then(()=>{this.skillsStore.getNestedSkillsList()}).then(()=>{this.$router.push("/skills")})}}},o=i=>(x("data-v-b2d27dca"),i=i(),R(),i),T={class:"container mt-3"},q=o(()=>e("h1",null,"Edit Skill",-1)),F={class:"mb-3"},M=o(()=>e("label",{for:"name",class:"form-label"},"Name",-1)),D={key:0},N={class:"mb-3"},B=o(()=>e("label",{class:"form-label"},"Level",-1)),P=["value"],E={key:1},z=o(()=>e("label",{for:"tags",class:"form-label"},"Filter",-1)),j={class:"container row mb-3"},O={class:"form-check"},A=o(()=>e("label",{class:"form-check-label",for:"flexCheckDefault"}," contrary to strict Christian doctrine ",-1)),G=o(()=>e("label",{class:"form-label"},"Node Type",-1)),H={class:"container row mb-3"},J={class:"form-check col-3"},Z=o(()=>e("label",{class:"form-check-label",for:"regularSkillRadio"}," Regular ",-1)),K={class:"form-check col-3"},Q=o(()=>e("label",{class:"form-check-label",for:"passThroughRadio"}," Pass-through ",-1)),W={class:"form-check col-3"},X=o(()=>e("label",{class:"form-check-label",for:"superSkillRadio"}," Cluster node center ",-1)),Y={class:"form-check col-3"},ee=o(()=>e("label",{class:"form-check-label",for:"subSkillRadio"}," Cluster node outer ",-1)),se={key:2,class:"mb-3"},le=o(()=>e("label",{class:"form-label"},"Parent",-1)),te=o(()=>e("option",{value:"0"}," none ",-1)),ie=["value"],oe={key:3,class:"mb-3"},ne=o(()=>e("label",{class:"form-label"},"Cluster node center",-1)),re=["value"],ae={class:"mb-3"},ce=o(()=>e("label",{for:"description",class:"form-label"},"Description",-1)),de={class:"mb-3 row"},me=o(()=>e("label",{for:"image",class:"form-label"},"Icon",-1)),he={key:0},ue=o(()=>e("p",{style:{"font-size":"14px"}},[e("em",null,"Maximum file size 15mb")],-1)),ke={key:1},pe=["src"],_e={class:"mb-3 row"},fe=o(()=>e("label",{for:"image",class:"form-label"},"Banner",-1)),ge={key:0},be=o(()=>e("p",{style:{"font-size":"14px"}},[e("em",null,"Maximum file size 15mb")],-1)),ve={key:1},ye=["src"],Se={class:"mb-3"},Ce=o(()=>e("label",{for:"mastery_requirements",class:"form-label"},"Mastery Requirements",-1)),Le={class:"mb-3 mt-3"},Ie={class:"d-flex justify-content-between"},we=o(()=>e("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"white"})],-1));function xe(i,l,d,m,s,c){const v=C("router-link");return n(),r("div",T,[q,e("div",F,[M,a(e("input",{"onUpdate:modelValue":l[0]||(l[0]=t=>s.skill.name=t),type:"text",class:"form-control"},null,512),[[u,s.skill.name]])]),s.skill.type!="domain"&&s.skill.type!="sub"?(n(),r("div",D,[e("div",N,[B,a(e("select",{class:"form-select","onUpdate:modelValue":l[1]||(l[1]=t=>s.skill.level=t)},[(n(!0),r(p,null,_(s.levels,t=>(n(),r("option",{value:t.id},f(t.name),9,P))),256))],512),[[k,s.skill.level]])])])):g("",!0),s.skill.type!="sub"?(n(),r("div",E,[z,e("div",j,[e("div",O,[a(e("input",{class:"form-check-input",type:"checkbox",value:"1",id:"flexCheckDefault","onUpdate:modelValue":l[2]||(l[2]=t=>s.skill.filter_1=t),"true-value":1,"false-value":0},null,512),[[L,s.skill.filter_1]]),A])])])):g("",!0),G,e("div",H,[e("div",J,[a(e("input",{class:"form-check-input",type:"radio",name:"nodeType",id:"regularSkillRadio",value:"regular","onUpdate:modelValue":l[3]||(l[3]=t=>s.skill.type=t)},null,512),[[h,s.skill.type]]),Z]),e("div",K,[a(e("input",{class:"form-check-input",type:"radio",name:"nodeType",id:"passThroughRadio",value:"domain","onUpdate:modelValue":l[4]||(l[4]=t=>s.skill.type=t)},null,512),[[h,s.skill.type]]),Q]),e("div",W,[a(e("input",{class:"form-check-input",type:"radio",name:"nodeType",id:"superSkillRadio",value:"super","onUpdate:modelValue":l[5]||(l[5]=t=>s.skill.type=t)},null,512),[[h,s.skill.type]]),X]),e("div",Y,[a(e("input",{class:"form-check-input",type:"radio",name:"nodeType",id:"subSkillRadio",value:"sub","onUpdate:modelValue":l[6]||(l[6]=t=>s.skill.type=t)},null,512),[[h,s.skill.type]]),ee])]),s.skill.type!="sub"?(n(),r("div",se,[le,a(e("select",{class:"form-select","onUpdate:modelValue":l[7]||(l[7]=t=>s.skill.parent=t)},[te,(n(!0),r(p,null,_(s.skills,t=>(n(),r("option",{value:t.id},f(t.name),9,ie))),256))],512),[[k,s.skill.parent]])])):(n(),r("div",oe,[ne,a(e("select",{class:"form-select","onUpdate:modelValue":l[8]||(l[8]=t=>s.skill.parent=t)},[(n(!0),r(p,null,_(s.superSkills,t=>(n(),r("option",{value:t.id},f(t.name),9,re))),256))],512),[[k,s.skill.parent]])])),e("div",ae,[ce,a(e("textarea",{"onUpdate:modelValue":l[9]||(l[9]=t=>s.skill.description=t),class:"form-control",rows:"3"},null,512),[[u,s.skill.description]])]),e("div",de,[me,s.iconImage?(n(),r("div",ke,[e("p",null,[e("img",{src:s.iconImage,height:"200",style:{"background-color":"lightgrey"}},null,8,pe)]),e("p",null,[e("button",{class:"btn btn-warning",onClick:l[11]||(l[11]=(...t)=>c.removeImage&&c.removeImage(...t))},"Remove image")])])):(n(),r("div",he,[e("input",{class:"form-control",type:"file",accept:"image/*",onChange:l[10]||(l[10]=(...t)=>c.onFileChange&&c.onFileChange(...t))},null,32),ue]))]),e("div",_e,[fe,s.bannerImage?(n(),r("div",ve,[e("p",null,[e("img",{src:s.bannerImage,height:"200",style:{"background-color":"lightgrey"}},null,8,ye)]),e("p",null,[e("button",{class:"btn btn-warning",onClick:l[13]||(l[13]=(...t)=>c.removeImage&&c.removeImage(...t))},"Remove image")])])):(n(),r("div",ge,[e("input",{class:"form-control",type:"file",accept:"image/*",onChange:l[12]||(l[12]=(...t)=>c.onFileChange&&c.onFileChange(...t))},null,32),be]))]),e("div",Se,[Ce,a(e("textarea",{class:"form-control","onUpdate:modelValue":l[14]||(l[14]=t=>s.skill.mastery_requirements=t),id:"summernote",rows:"3"},null,512),[[u,s.skill.mastery_requirements]])]),e("div",Le,[e("div",Ie,[I(v,{class:"btn btn-dark",to:"/skills"},{default:w(()=>[b(" Cancel ")]),_:1}),e("button",{onClick:l[15]||(l[15]=t=>c.Submit()),class:"btn green-btn"},[b(" Submit  "),we])])])])}const Re=S(U,[["render",xe],["__scopeId","data-v-b2d27dca"]]),Te={__name:"EditSkillView",setup(i){return(l,d)=>(n(),V(Re))}};export{Te as default};
