import{u}from"./TagsStore-d3bd4d01.js";import{_ as d,i as g,o,c as r,F as f,k as p,d as i,a as _,w as m,e as S,y as b,t as v,l as k}from"./main-2f4b73b3.js";const L={setup(){return{tagsStore:u()}},data(){return{filters:[]}},async created(){this.tagsStore.tagsList.length==0&&await this.tagsStore.getTagsList();for(let t=0;t<this.tagsStore.tagsList.length;t++)this.tagsStore.tagsList[t].is_active=="active"&&this.filters.push(this.tagsStore.tagsList[t].id)},methods:{Submit(){for(let s=0;s<this.tagsStore.tagsList.length;s++)this.filters.includes(this.tagsStore.tagsList[s].id)?this.tagsStore.tagsList[s].is_active="active":this.tagsStore.tagsList[s].is_active="inactive";const t={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({tags:this.tagsStore.tagsList})};var e="/tags/select";fetch(e,t).then(()=>{this.$router.push("/profile-settings")})}}},x={class:"container mb-3"},y=i("h1",null,"Select Filters",-1),C={class:"form-check"},w=["value"],T={class:"form-check-label",for:"flexCheckDefault"},V={class:"d-flex justify-content-between mb-3 mt-4"};function D(t,e,s,F,n,l){const c=g("router-link");return o(),r("div",x,[y,(o(!0),r(f,null,p(this.tagsStore.tagsList,a=>(o(),r("div",null,[i("div",C,[S(i("input",{class:"form-check-input",type:"checkbox",value:a.id,id:"flexCheckDefault","onUpdate:modelValue":e[0]||(e[0]=h=>n.filters=h)},null,8,w),[[b,n.filters]]),i("label",T,v(a.name),1)])]))),256)),i("div",V,[_(c,{class:"btn btn-dark",to:"/profile-settings"},{default:m(()=>[k(" Cancel ")]),_:1}),i("button",{onClick:e[1]||(e[1]=a=>l.Submit()),type:"submit",class:"btn btn-dark"}," Submit ")])])}const $=d(L,[["render",D]]);export{$ as default};
