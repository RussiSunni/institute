import{_ as n,o as r,c,b as t,e as i}from"./main-7e6d3cb8.js";const d={setup(){},data(){return{resourceId:this.$route.params.id}},async created(){const e=await(await fetch("/resources/show/"+this.resourceId)).json();$("#summernote").summernote({maximumImageFileSize:2048*1024,callbacks:{onImageUploadError:function(o){alert("Max image size is 2MB.")}}}).summernote("code",e.content)},methods:{Submit(){var s="/resources/edit/"+this.resourceId,e=$("#summernote").summernote("code");const o={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({editordata:e})};fetch(s,o).then(()=>{this.$router.go(-1)})}}},u={class:"container mt-3"},m=t("h1",null,"Edit Learning Resource ",-1),_={class:"row"},l=t("div",{class:"mb-3"},[t("textarea",{id:"summernote",name:"editordata"})],-1);function p(s,e,o,f,b,a){return r(),c("div",u,[m,t("div",_,[l,t("button",{class:"btn btn-dark",onClick:e[0]||(e[0]=g=>a.Submit())},"Submit")])])}const h=n(d,[["render",p]]),k={__name:"EditResourceView",setup(s){return(e,o)=>(r(),i(h))}};export{k as default};
