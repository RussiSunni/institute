import{_ as m,o as n,c as a,a as e,w as l,v as d,d as r,F as c}from"./main-14e33771.js";import{_}from"./general-banner-1c13aca4.js";import{_ as v}from"./recurso-69-12793b41.js";const f={data(){return{skillId:this.$route.params.skillId,question:{name:"",question:""},validate:{violated:!1,name:!1,question:!1}}},methods:{Submit(){if(this.validate.violated=!1,(this.question.name===""||this.question.name===null)&&(this.validate.name=!0,this.validate.violated=!0),(this.question.question===""||this.question.name===null)&&(this.validate.question=!0,this.validate.violated=!0),this.validate.violated)return;const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.question.name,question:this.question.question,skill_id:this.skillId})};var t="/questions/essay-questions/add";fetch(t,o).then(()=>{alert("Question added")}).then(()=>{this.$router.go(-1)})}}},h=e("div",{id:"banner"},[e("img",{src:_,class:"image-fluid"})],-1),q={class:"container mt-5 pb-3"},p=e("div",{class:"row"},[e("div",{class:"col-10 d-flex align-items-end"},[e("h2",{id:"header-tile"},"Add Question"),e("img",{src:v,id:"header-icon"})])],-1),b={class:"main-content-container container-fluid p-4"},y={class:"row"},g={id:"form-container",class:"col-lg-6 p-4"},k={class:"mb-3"},x=e("label",{for:"first_name",class:"form-label"},"Question Name",-1),w={key:0,class:"form-validate"},Q={class:"mb-3"},V=e("label",{for:"last_name",class:"form-label"},"Question",-1),C={key:0,class:"form-validate"},S={class:"d-flex justify-content-end gap-4"};function N(o,t,A,B,s,u){return n(),a(c,null,[h,e("div",q,[p,e("div",b,[e("div",y,[e("div",g,[e("div",k,[x,l(e("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>s.question.name=i),type:"text",class:"form-control"},null,512),[[d,s.question.name]]),s.validate.name&&(s.question.name===""||s.question.name===null)?(n(),a("div",w," please enter a name for question ! ")):r("",!0)]),e("div",Q,[V,l(e("textarea",{"onUpdate:modelValue":t[1]||(t[1]=i=>s.question.question=i),rows:"5",class:"form-control"},`\r
                        `,512),[[d,s.question.question]]),s.validate.question&&(s.question.question===""||s.question.question===null)?(n(),a("div",C," please enter question’s content ! ")):r("",!0)]),e("div",S,[e("a",{class:"btn red-btn",onClick:t[2]||(t[2]=i=>o.$router.go(-1))},"Cancel"),e("button",{class:"btn purple-btn",onClick:t[3]||(t[3]=i=>u.Submit())}," Submit ")])])])])])],64)}const T=m(f,[["render",N]]);export{T as default};
