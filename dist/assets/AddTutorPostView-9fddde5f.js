import{_ as r,x as l,r as d,o as c,c as m,b as e,a as u,d as _,g as h,F as p,q as b}from"./main-3c057fc7.js";const f={data(){return{skillId:this.$route.params.skillId,description:null}},setup(){},mounted:function(){let t=window.innerHeight-document.getElementById("banner").clientHeight-document.getElementById("header-tile").clientHeight-50;window.innerWidth<481?t=t-310:window.innerWidth>=481&&window.innerWidth<1024?t=t-300:t=t-450,$("#summernote").summernote({placeholder:"",height:t,tabsize:2,toolbar:[["style",["style"]],["font",["bold","underline","clear"]],["color",["color"]],["para",["ul","ol","paragraph"]],["view",["fullscreen","codeview","help"]]],maximumImageFileSize:2048*1024,callbacks:{onImageUploadError:function(s){alert("Max image size is 2MB.")}}})},methods:{async Submit(){var t="/tutor-posts/add/"+this.skillId,s=$("#summernote").summernote("code");const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({description:s})};await fetch(t,n).then(()=>{l.back()})}}},g={id:"banner"},v=["src"],w={class:"container mt-3 pb-3"},x=e("div",{class:"row"},[e("div",{class:"col-10 d-flex align-items-end"},[e("h2",{id:"header-tile"},"Offer to Tutor")])],-1),y={class:"main-content-container container-fluid p-2"},k={class:"row"},I={class:"col"},B={class:"mb-3"},C=e("label",{for:"first_name",class:"form-label"},"Describe your tutoring style and experience with the subject",-1),S=e("div",{class:"mb-3 mt-3 text-area-div"},[e("textarea",{id:"summernote",name:"editordata"})],-1),T={class:"d-flex justify-content-end gap-4"};function V(t,s,n,N,o,i){const a=d("router-link");return c(),m(p,null,[e("div",g,[e("img",{src:"/images/banners/students-banner.png",class:"img-fluid"},null,8,v)]),e("div",w,[x,e("div",y,[e("div",k,[e("div",I,[e("div",B,[C,S,u("",!0)]),e("div",T,[_(a,{class:"btn red-btn",to:"/skills/"+o.skillId},{default:h(()=>[b(" Cancel ")]),_:1},8,["to"]),e("button",{class:"btn purple-btn",onClick:s[0]||(s[0]=E=>i.Submit())}," Submit ")])])])])])],64)}const O=r(f,[["render",V]]);export{O as default};
