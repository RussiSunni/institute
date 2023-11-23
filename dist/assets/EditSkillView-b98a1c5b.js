import{u as b}from"./TagsStore-744fcfa6.js";import{u as v}from"./SkillsStore-1c7f8cf2.js";import{_ as y,o as r,c as a,a as s,w as n,l as u,B as m,C as f,F as k,r as _,t as p,v as S,h as C,p as L,b as w,j as x}from"./main-6e80d830.js";const T={setup(){const l=b(),e=v();return l.tagsList.length==0&&l.getTagsList(),{tagsStore:l,skillsStore:e}},data(){return{skillId:this.$route.params.id,skills:[],skill:{name:"",parent:"",description:"",image:"",mastery_requirements:"",tags:[],is_pass_through:0,first_ancestor:null,hierarchy_level:null,type:null},image:"",skillTags:[],superSkills:[]}},async mounted(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList(),this.getParentSkills()},methods:{getParentSkills(){this.skills=this.skillsStore.skillsList;for(let l=0;l<this.skills.length;l++)this.skills[l].type=="super"&&this.superSkills.push(this.skills[l]);this.getSkill()},getSkill(){fetch("/skills/show/"+this.skillId).then(function(l){return l.json()}).then(l=>this.skill=l).then(()=>{this.image=this.skill.image,$("#summernote").summernote("code",this.skill.mastery_requirements),this.getSkillTags()})},getSkillTags(){for(let l=0;l<this.tagsStore.tagsList.length;l++){this.skillTags.push(this.tagsStore.tagsList[l]),this.skillTags[l].isChecked=!1;for(let e=0;e<this.skill.tags.length;e++)this.skill.tags[e].tag_id==this.tagsStore.tagsList[l].id&&(this.skillTags[l].isChecked=!0)}},onFileChange(l){var e=l.target.files||l.dataTransfer.files;e.length&&this.createImage(e[0])},createImage(l){new Image;var e=new FileReader,d=this;e.onload=c=>{d.image=c.target.result,this.image=c.target.result,this.skill.image=this.image},e.readAsDataURL(l)},removeImage:function(l){this.image="",this.skill.image=this.image},Submit(){for(let c=0;c<this.skillsStore.skillsList.length;c++)this.skillsStore.skillsList[c].id==this.skill.parent&&(this.skill.first_ancestor=this.skillsStore.skillsList[c].first_ancestor,this.skill.hierarchy_level=this.skillsStore.skillsList[c].hierarchy_level+1);var l=$("#summernote").summernote("code");const e={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.skill.name,parent:this.skill.parent,description:this.skill.description,icon:this.skill.icon,image:this.skill.image,mastery_requirements:l,is_pass_through:this.skill.is_pass_through,first_ancestor:this.skill.first_ancestor,hierarchy_level:this.skill.hierarchy_level,type:this.skill.type})};var d="/skills/"+this.skillId+"/edit";fetch(d,e).then(()=>{this.$router.push("/skills")})},changeTag(l){var e;l.isChecked==!0?(e="/skill-tags/add/"+this.skillId+"/"+l.id,fetch(e,{method:"POST",body:{}})):(e="/skill-tags/remove/"+this.skillId+"/"+l.id,fetch(e,{method:"DELETE"}))}}},o=l=>(L("data-v-d86b5c5b"),l=l(),w(),l),I={class:"container mt-3"},V=o(()=>s("h1",null,"Edit Skill",-1)),R={class:"mb-3"},U=o(()=>s("label",{for:"name",class:"form-label"},"Name",-1)),q=o(()=>s("label",{class:"form-label"},"Node Type",-1)),D={class:"container row mb-3"},E={class:"form-check col-4"},M=o(()=>s("label",{class:"form-check-label",for:"regularSkillRadio"}," Regular ",-1)),B={class:"form-check col-4"},F=o(()=>s("label",{class:"form-check-label",for:"superSkillRadio"}," Super ",-1)),P={class:"form-check col-4"},N=o(()=>s("label",{class:"form-check-label",for:"subSkillRadio"}," Sub ",-1)),j={key:0,class:"mb-3"},O=o(()=>s("label",{class:"form-label"},"Parent",-1)),z=["value"],A={key:1,class:"mb-3"},J=o(()=>s("label",{class:"form-label"},"Super skill",-1)),Z=["value"],G={class:"mb-3"},H=o(()=>s("label",{for:"description",class:"form-label"},"Description",-1)),K={class:"mb-3 row"},Q=o(()=>s("label",{for:"image",class:"form-label"},"Image",-1)),W={key:0},X=o(()=>s("p",{style:{"font-size":"14px"}},[s("em",null,"Maximum file size 15mb")],-1)),Y={key:1},ss=["src"],es={class:"mb-3"},ls=o(()=>s("label",{for:"mastery_requirements",class:"form-label"},"Mastery Requirements",-1)),ts={class:"row mb-3"},is=o(()=>s("label",{for:"tags",class:"form-label"},"Tags",-1)),os={class:"form-check"},rs=["value","onUpdate:modelValue","onChange"],as={class:"form-check-label",for:"flexCheckDefault"},ns={class:"row mt-3"},cs=o(()=>s("label",{class:"form-label"},"Assessment type",-1)),hs={class:"col-md-6"},ds={class:"form-check"},ms=o(()=>s("label",{class:"form-check-label"}," Pass through node ",-1)),us={class:"mb-3 mt-3"},ks=o(()=>s("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"white"})],-1));function _s(l,e,d,c,i,h){return r(),a("div",I,[V,s("div",R,[U,n(s("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>i.skill.name=t),type:"text",class:"form-control"},null,512),[[u,i.skill.name]])]),q,s("div",D,[s("div",E,[n(s("input",{class:"form-check-input",type:"radio",name:"nodeType",id:"regularSkillRadio",value:"regular","onUpdate:modelValue":e[1]||(e[1]=t=>i.skill.type=t)},null,512),[[m,i.skill.type]]),M]),s("div",B,[n(s("input",{class:"form-check-input",type:"radio",name:"nodeType",id:"superSkillRadio",value:"super","onUpdate:modelValue":e[2]||(e[2]=t=>i.skill.type=t)},null,512),[[m,i.skill.type]]),F]),s("div",P,[n(s("input",{class:"form-check-input",type:"radio",name:"nodeType",id:"subSkillRadio",value:"sub","onUpdate:modelValue":e[3]||(e[3]=t=>i.skill.type=t)},null,512),[[m,i.skill.type]]),N])]),i.skill.type!="sub"?(r(),a("div",j,[O,n(s("select",{class:"form-select","onUpdate:modelValue":e[4]||(e[4]=t=>i.skill.parent=t)},[(r(!0),a(k,null,_(i.skills,t=>(r(),a("option",{value:t.id},p(t.name),9,z))),256))],512),[[f,i.skill.parent]])])):(r(),a("div",A,[J,n(s("select",{class:"form-select","onUpdate:modelValue":e[5]||(e[5]=t=>i.skill.parent=t)},[(r(!0),a(k,null,_(i.superSkills,t=>(r(),a("option",{value:t.id},p(t.name),9,Z))),256))],512),[[f,i.skill.parent]])])),s("div",G,[H,n(s("textarea",{"onUpdate:modelValue":e[6]||(e[6]=t=>i.skill.description=t),class:"form-control",rows:"3"},null,512),[[u,i.skill.description]])]),s("div",K,[Q,i.image?(r(),a("div",Y,[s("p",null,[s("img",{src:i.image,height:"200",style:{"background-color":"lightgrey"}},null,8,ss)]),s("p",null,[s("button",{class:"btn btn-warning",onClick:e[8]||(e[8]=(...t)=>h.removeImage&&h.removeImage(...t))},"Remove image")])])):(r(),a("div",W,[s("input",{class:"form-control",type:"file",accept:"image/*",onChange:e[7]||(e[7]=(...t)=>h.onFileChange&&h.onFileChange(...t))},null,32),X]))]),s("div",es,[ls,n(s("textarea",{class:"form-control","onUpdate:modelValue":e[9]||(e[9]=t=>i.skill.mastery_requirements=t),id:"summernote",rows:"3"},null,512),[[u,i.skill.mastery_requirements]])]),s("div",ts,[is,(r(!0),a(k,null,_(i.skillTags,t=>(r(),a("div",null,[s("div",os,[n(s("input",{class:"form-check-input",type:"checkbox",value:t.id,id:"flexCheckDefault","onUpdate:modelValue":g=>t.isChecked=g,onChange:g=>h.changeTag(t)},null,40,rs),[[S,t.isChecked]]),s("label",as,p(t.name),1)])]))),256))]),s("div",ns,[cs,s("div",hs,[s("div",ds,[n(s("input",{class:"form-check-input",type:"radio",value:"1","onUpdate:modelValue":e[10]||(e[10]=t=>i.skill.is_pass_through=t)},null,512),[[m,i.skill.is_pass_through]]),ms])])]),s("div",us,[s("button",{onClick:e[11]||(e[11]=t=>h.Submit()),class:"btn green-btn"},[C(" Submit  "),ks])])])}const ps=y(T,[["render",_s],["__scopeId","data-v-d86b5c5b"]]),vs={__name:"EditSkillView",setup(l){return(e,d)=>(r(),x(ps))}};export{vs as default};
