import{_,l as v,o as n,c as l,b as e,w as u,q as c,a as d,F as p,p as f,e as q,K as b,h as w}from"./main-7455f590.js";import{_ as y}from"./recurso-69-12793b41.js";const S={setup(){return{userDetailsStore:v()}},data(){return{questionId:this.$route.params.id,question:{},validate:{validated:!1,name:!1,question:!1},comment:""}},created(){this.getQuestion()},methods:{getQuestion(){fetch("/questions/essay/show/"+this.questionId).then(function(t){return t.json()}).then(t=>this.question=t)},Submit(){const t={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.question.name,question:this.question.question})};var s="/questions/essay/"+this.questionId+"/edit";fetch(s,t).then(()=>{this.$router.back()})},SubmitForReview(){const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:this.userDetailsStore.userId,name:this.question.name,question:this.question.question,comment:this.comment})};var s="/questions/essay/"+this.questionId+"/edit-for-review";fetch(s,t).then(()=>{alert(`This edit is being submitted for review.
We do this to prevent misinformation and sloppy wording from being added. If you would like to become an editor and help with this, please reach out.`),this.$router.back()})},ValidateForm(t){this.validate.validated=!1,(this.question.name===""||this.question.name===null)&&(this.validate.name=!0,this.validate.validated=!0),(this.question.question===""||this.question.question===null)&&(this.validate.question=!0,this.validate.validated=!0),!this.validate.validated&&(t=="submission"?this.Submit():t=="submissionForReview"&&this.SubmitForReview())}}},a=t=>(f("data-v-db4d2461"),t=t(),q(),t),g=a(()=>e("div",{id:"banner"},[e("img",{src:b,class:"image-fluid"})],-1)),k={class:"container mt-3"},x=a(()=>e("div",{class:"row"},[e("div",{class:"col-10 d-flex align-items-end"},[e("h2",{id:"header-tile"},"Edit Question"),e("img",{src:y,id:"header-icon"})])],-1)),V={class:"main-content-container container-fluid mt-4"},D={class:"row p-0"},I={id:"form-container",class:"col-lg-7 p-4"},F={class:"mb-3"},E=a(()=>e("label",{class:"form-label"},"Name",-1)),C={key:0,class:"form-validate"},Q={class:"mb-3"},L=a(()=>e("label",{class:"form-label"},"Question",-1)),O={key:0,class:"form-validate"},B={key:0,class:"mb-3"},M=a(()=>e("label",{class:"form-label"},"Optional: explain this edit",-1)),N={class:"mb-3 d-flex justify-content-end"},T=a(()=>e("div",{class:"d-none d-md-block"}," Submit for review ",-1)),U=a(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"white",height:"20",width:"20",class:"d-md-none"},[e("path",{d:"M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"})],-1)),j=[T,U];function z(t,s,h,r,i,m){return n(),l(p,null,[g,e("div",k,[x,e("div",V,[e("div",D,[e("div",I,[e("div",F,[E,u(e("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>i.question.name=o),type:"text",class:"form-control"},null,512),[[c,i.question.name]]),i.validate.name&&(i.question.name===""||i.question.name===null)?(n(),l("div",C," please enter a question name ! ")):d("",!0)]),e("div",Q,[L,u(e("textarea",{"onUpdate:modelValue":s[1]||(s[1]=o=>i.question.question=o),rows:"3",class:"form-control"},`\r
                        `,512),[[c,i.question.question]]),i.validate.question&&(i.question.question===""||i.question.question===null)?(n(),l("div",O," please enter question content ! ")):d("",!0)]),r.userDetailsStore.role=="instructor"||r.userDetailsStore.role=="student"?(n(),l("div",B,[M,u(e("textarea",{"onUpdate:modelValue":s[2]||(s[2]=o=>i.comment=o),class:"form-control",rows:"3"},null,512),[[c,i.comment]])])):d("",!0),e("div",N,[r.userDetailsStore.role=="admin"||r.userDetailsStore.role=="editor"?(n(),l("button",{key:0,onClick:s[3]||(s[3]=o=>m.ValidateForm("submission")),class:"btn purple-btn"}," Submit ")):r.userDetailsStore.role=="instructor"||r.userDetailsStore.role=="student"?(n(),l("button",{key:1,class:"btn purple-btn",onClick:s[4]||(s[4]=o=>m.ValidateForm("submissionForReview"))},j)):d("",!0)])])])])])],64)}const H=_(S,[["render",z],["__scopeId","data-v-db4d2461"]]),P={__name:"EditEssayQuestionView",setup(t){return(s,h)=>(n(),w(H))}};export{P as default};
