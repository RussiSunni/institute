import{_ as m,o,c as l,d as e,e as d,v as u,b as r,F as h,p as f,f as p,I as v,k as q}from"./main-cfda230a.js";import{_ as b}from"./recurso-69-12793b41.js";const y={data(){return{questionId:this.$route.params.id,question:{},validate:{validated:!1,name:!1,question:!1}}},created(){this.getQuestion()},methods:{getQuestion(){fetch("/questions/essay/show/"+this.questionId).then(function(t){return t.json()}).then(t=>this.question=t)},Submit(){if(this.validate.validated=!1,(this.question.name===""||this.question.name===null)&&(this.validate.name=!0,this.validate.validated=!0),(this.question.question===""||this.question.question===null)&&(this.validate.question=!0,this.validate.validated=!0),this.validate.validated)return;const t={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.question.name,question:this.question.question})};var i="/questions/essay/"+this.questionId+"/edit";fetch(i,t).then(()=>{this.$router.back()})}}},a=t=>(f("data-v-05853ff4"),t=t(),p(),t),g=a(()=>e("div",{id:"banner"},[e("img",{src:v,class:"image-fluid"})],-1)),x={class:"container mt-3"},k=a(()=>e("div",{class:"row"},[e("div",{class:"col-10 d-flex align-items-end"},[e("h2",{id:"header-tile"},"Edit Question"),e("img",{src:b,id:"header-icon"})])],-1)),E={class:"main-content-container container-fluid mt-4"},I={class:"row p-0"},w={id:"form-container",class:"col-lg-7 p-4"},Q={class:"mb-3"},S=a(()=>e("label",{class:"form-label"},"Name",-1)),V={key:0,class:"form-validate"},B={class:"mb-3"},N=a(()=>e("label",{class:"form-label"},"Question",-1)),j={key:0,class:"form-validate"},C={class:"mb-3 d-flex justify-content-end"};function T(t,i,c,F,s,_){return o(),l(h,null,[g,e("div",x,[k,e("div",E,[e("div",I,[e("div",w,[e("div",Q,[S,d(e("input",{"onUpdate:modelValue":i[0]||(i[0]=n=>s.question.name=n),type:"text",class:"form-control"},null,512),[[u,s.question.name]]),s.validate.name&&(s.question.name===""||s.question.name===null)?(o(),l("div",V," please enter a question name ! ")):r("",!0)]),e("div",B,[N,d(e("textarea",{"onUpdate:modelValue":i[1]||(i[1]=n=>s.question.question=n),rows:"3",class:"form-control"},`\r
                        `,512),[[u,s.question.question]]),s.validate.question&&(s.question.question===""||s.question.question===null)?(o(),l("div",j," please enter question contend ! ")):r("",!0)]),e("div",C,[e("button",{onClick:i[2]||(i[2]=n=>_.Submit()),class:"btn purple-btn"}," Submit ")])])])])])],64)}const U=m(y,[["render",T],["__scopeId","data-v-05853ff4"]]),J={__name:"EditEssayQuestionView",setup(t){return(i,c)=>(o(),q(U))}};export{J as default};
