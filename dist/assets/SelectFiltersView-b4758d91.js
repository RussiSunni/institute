import{u}from"./TagsStore-8cae508c.js";import{_ as d,r as g,o,c as r,F as f,s as p,b as i,d as _,i as m,w as S,D as b,t as v,x as k}from"./main-79843910.js";const L={setup(){return{tagsStore:u()}},data(){return{filters:[]}},async created(){this.tagsStore.tagsList.length==0&&await this.tagsStore.getTagsList();for(let t=0;t<this.tagsStore.tagsList.length;t++)this.tagsStore.tagsList[t].is_active=="active"&&this.filters.push(this.tagsStore.tagsList[t].id)},methods:{Submit(){for(let e=0;e<this.tagsStore.tagsList.length;e++)this.filters.includes(this.tagsStore.tagsList[e].id)?this.tagsStore.tagsList[e].is_active="active":this.tagsStore.tagsList[e].is_active="inactive";const t={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({tags:this.tagsStore.tagsList})};var s="/tags/select";fetch(s,t).then(()=>{this.$router.push("/profile-settings")})}}},x={class:"container mb-3"},y=i("h1",null,"Select Filters",-1),C={class:"form-check"},w=["value"],D={class:"form-check-label",for:"flexCheckDefault"},T={class:"d-flex justify-content-between mb-3 mt-4"};function V(t,s,e,F,n,l){const c=g("router-link");return o(),r("div",x,[y,(o(!0),r(f,null,p(this.tagsStore.tagsList,a=>(o(),r("div",null,[i("div",C,[S(i("input",{class:"form-check-input",type:"checkbox",value:a.id,id:"flexCheckDefault","onUpdate:modelValue":s[0]||(s[0]=h=>n.filters=h)},null,8,w),[[b,n.filters]]),i("label",D,v(a.name),1)])]))),256)),i("div",T,[_(c,{class:"btn btn-dark",to:"/profile-settings"},{default:m(()=>[k(" Cancel ")]),_:1}),i("button",{onClick:s[1]||(s[1]=a=>l.Submit()),type:"submit",class:"btn btn-dark"}," Submit ")])])}const $=d(L,[["render",V]]);export{$ as default};
