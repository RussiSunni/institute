import{_ as d,l,o as n,c,b as t,F as u,p as m,e as _,h as p}from"./main-8d173942.js";import{_ as h}from"./general-banner-1c13aca4.js";const f={data(){return{skillId:this.$route.params.id}},setup(){return{userDetailsStore:l()}},mounted:function(){let e=window.innerHeight-document.getElementById("banner").clientHeight-document.getElementById("page-tile").clientHeight;window.innerWidth<481?e=e-310:window.innerWidth>=481&&window.innerWidth<1024?e=e-300:e=e-450,$("#summernote").summernote({placeholder:"",height:e,tabsize:2,toolbar:[["style",["style"]],["font",["bold","underline","clear"]],["color",["color"]],["para",["ul","ol","paragraph"]],["table",["table"]],["insert",["link","picture","video"]],["view",["fullscreen","codeview","help"]]],maximumImageFileSize:2048*1024,callbacks:{onImageUploadError:function(s){alert("Max image size is 2MB.")}}})},methods:{Submit(){var e="/resources/add/"+this.skillId,s=$("#summernote").summernote("code");const r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:this.userDetailsStore.userId,editordata:s})};fetch(e,r).then(function(o){return o.json()}).then(o=>{o=="blocked"&&alert("Unfortunately, that source cannot be added.")}).then(()=>{this.$router.push("/skills/"+this.skillId)})}}},i=e=>(m("data-v-844d95f0"),e=e(),_(),e),g=i(()=>t("div",{id:"banner"},[t("img",{src:h,class:"image-fluid"})],-1)),b={class:"container mt-3"},v=i(()=>t("div",{class:"page-tile",id:"page-tile"},"Add Learning Resource",-1)),w={class:"d-flex flex-column"},x=i(()=>t("div",{class:"mb-3 mt-3 text-area-div"},[t("textarea",{id:"summernote",name:"editordata"})],-1)),I={"b-on-hover":"",title:"add this resource to it associated skill",class:"d-flex flex-row-reverse"};function S(e,s,r,o,y,a){return n(),c(u,null,[g,t("div",b,[v,t("div",w,[x,t("div",I,[t("button",{class:"btn green-btn",onClick:s[0]||(s[0]=B=>a.Submit())},"Submit")])])])],64)}const k=d(f,[["render",S],["__scopeId","data-v-844d95f0"]]),E={__name:"AddResourceView",setup(e){return(s,r)=>(n(),p(k))}};export{E as default};
