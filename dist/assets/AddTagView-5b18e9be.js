import{_ as l,H as c,o as r,c as d,a as s,w as m,v as u,f as g}from"./main-afafc8c6.js";import{u as _}from"./TagsStore-34ebd5cd.js";import"./SkillsStore-2e2ebda1.js";const p={setup(){const t=_();return t.getTagsList(),{tagsStore:t}},data(){return{tag:{}}},methods:{ValidateTag(){if(this.tag.name==""||this.tag.name==null){alert("Please give the tag a name.");return}else for(let t=0;t<this.tagsStore.tagsList.length;t++)if(this.tagsStore.tagsList[t].name==this.tag.name){alert("Tag already exists.");return}this.Submit()},Submit(){const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.tag.name})};var e="/tags/add";fetch(e,t).then(function(a){c.push({name:"tags"})})}}},h={class:"container mt-3"},f=s("h1",null,"Add Tag",-1),T={class:"row"},b={class:"col-sm-4"},v={class:"mb-3"},S=s("label",{for:"name",class:"form-label"},"Name",-1);function x(t,e,a,y,n,i){return r(),d("div",h,[f,s("div",T,[s("div",b,[s("div",v,[S,m(s("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>n.tag.name=o),type:"text",class:"form-control"},null,512),[[u,n.tag.name]])]),s("button",{class:"btn btn-dark",onClick:e[1]||(e[1]=o=>i.ValidateTag())},"Submit")])])])}const k=l(p,[["render",x]]),A={__name:"AddTagView",setup(t){return(e,a)=>(r(),g(k))}};export{A as default};
