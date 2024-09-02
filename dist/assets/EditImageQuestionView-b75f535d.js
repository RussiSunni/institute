import{_ as c,l as h,o as a,c as l,b as e,w as u,s as m,a as d,J as _,F as q,M as v,j as f}from"./main-ff046529.js";import{_ as p}from"./recurso-69-12793b41.js";const b={setup(){return{userDetailsStore:h()}},data(){return{questionId:this.$route.params.id,question:{},validate:{validated:!1,name:!1,question:!1},comment:"",originalQuestion:{}}},created(){this.getQuestion()},methods:{getQuestion(){fetch("/questions/image/show/"+this.questionId).then(function(i){return i.json()}).then(i=>{this.question=i,this.originalQuestion={...i}})},Submit(){const i={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.question.name,question:this.question.question,num_images_required:this.question.num_images_required})};var t="/questions/image/"+this.questionId+"/edit";fetch(t,i).then(()=>{this.$router.back()})},SubmitForReview(){const i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:this.userDetailsStore.userId,name:this.question.name,question:this.question.question,num_images_required:this.question.num_images_required,comment:this.comment})};var t="/questions/image/"+this.questionId+"/edit-for-review";fetch(t,i).then(()=>{alert(`This edit is being submitted for review.
We do this to prevent misinformation and sloppy wording from being added. If you would like to become an editor and help with this, please reach out.`),this.$router.back()})},ValidateForm(i){this.validate.validated=!1,(this.question.name===""||this.question.name===null)&&(this.validate.name=!0,this.validate.validated=!0),(this.question.question===""||this.question.question===null)&&(this.validate.question=!0,this.validate.validated=!0),!this.validate.validated&&(i=="submission"?this.Submit():i=="submissionForReview"&&this.SubmitForReview())}},computed:{isFormChanged(){return this.question.name!==this.originalQuestion.name||this.question.question!==this.originalQuestion.question||this.comment!=""}}},g=e("div",{id:"banner"},[e("img",{src:v,class:"image-fluid"})],-1),w={class:"container mt-3"},S=e("div",{class:"row"},[e("div",{class:"col-10 d-flex align-items-end"},[e("h2",{id:"header-tile"},"Edit Question"),e("img",{src:p,id:"header-icon"})])],-1),y={class:"main-content-container container-fluid mt-4"},V={class:"row p-0"},k={id:"form-container",class:"col-lg-7 p-4"},x={class:"mb-3"},F=e("label",{class:"form-label"},"Name",-1),D={key:0,class:"form-validate"},C={class:"mb-3"},I=e("label",{class:"form-label"},"Question",-1),Q={key:0,class:"form-validate"},M={class:"mb-3"},N=e("label",{class:"form-label"},"Number of Images Required ",-1),L=f('<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>',5),O=[L],U={key:0,class:"mb-3"},j=e("label",{class:"form-label"},"Optional: explain this edit",-1),R={class:"mb-3 d-flex justify-content-end"},T=["disabled"],z=["disabled"],B=e("div",{class:"d-none d-md-block"}," Submit for review ",-1),E=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"white",height:"20",width:"20",class:"d-md-none"},[e("path",{d:"M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"})],-1),H=[B,E];function J(i,t,P,n,s,r){return a(),l(q,null,[g,e("div",w,[S,e("div",y,[e("div",V,[e("div",k,[e("div",x,[F,u(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.question.name=o),type:"text",class:"form-control"},null,512),[[m,s.question.name]]),s.validate.name&&(s.question.name===""||s.question.name===null)?(a(),l("div",D," please enter a question name ! ")):d("",!0)]),e("div",C,[I,u(e("textarea",{"onUpdate:modelValue":t[1]||(t[1]=o=>s.question.question=o),rows:"3",class:"form-control"},`\r
                        `,512),[[m,s.question.question]]),s.validate.question&&(s.question.question===""||s.question.question===null)?(a(),l("div",Q," please enter question content ! ")):d("",!0)]),e("div",M,[N,u(e("select",{class:"form-control","onUpdate:modelValue":t[2]||(t[2]=o=>s.question.num_images_required=o)},O,512),[[_,s.question.num_images_required]])]),n.userDetailsStore.role=="instructor"||n.userDetailsStore.role=="student"?(a(),l("div",U,[j,u(e("textarea",{"onUpdate:modelValue":t[3]||(t[3]=o=>s.comment=o),class:"form-control",rows:"3"},null,512),[[m,s.comment]])])):d("",!0),e("div",R,[n.userDetailsStore.role=="admin"||n.userDetailsStore.role=="editor"?(a(),l("button",{key:0,onClick:t[4]||(t[4]=o=>r.ValidateForm("submission")),class:"btn purple-btn",disabled:!r.isFormChanged}," Submit ",8,T)):n.userDetailsStore.role=="instructor"||n.userDetailsStore.role=="student"?(a(),l("button",{key:1,class:"btn purple-btn",onClick:t[5]||(t[5]=o=>r.ValidateForm("submissionForReview")),disabled:!r.isFormChanged},H,8,z)):d("",!0)])])])])])],64)}const G=c(b,[["render",J]]);export{G as default};
