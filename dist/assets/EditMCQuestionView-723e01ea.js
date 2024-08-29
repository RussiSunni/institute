import{_ as m,l as w,o,c as a,b as t,w as c,s as u,a as l,F as q,p as v,e as p,M as f,h as b}from"./main-96e340bf.js";import{_ as g}from"./recurso-69-12793b41.js";const x={setup(){return{userDetailsStore:w()}},data(){return{questionId:this.$route.params.id,question:{},validate:{validated:!1,name:!1,question:!1,correct_answer:!1,incorrect_answer1:!1,incorrect_answer2:!1,incorrect_answer3:!1,incorrect_answer4:!1,explanation:!1,originalQuestion:{}},comment:""}},created(){this.getQuestion()},methods:{getQuestion(){fetch("/questions/mc/show/"+this.questionId).then(function(n){return n.json()}).then(n=>{this.question=n,this.originalQuestion={...n}})},Submit(){const n={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.question.name,question:this.question.question,correct_answer:this.question.correct_answer,incorrect_answer_1:this.question.incorrect_answer_1,incorrect_answer_2:this.question.incorrect_answer_2,incorrect_answer_3:this.question.incorrect_answer_3,incorrect_answer_4:this.question.incorrect_answer_4,correct_answer:this.question.correct_answer,explanation:this.question.explanation})};var s="/questions/mc/"+this.questionId+"/edit";fetch(s,n).then(()=>{alert("Question edited successfully."),this.$router.back()})},SubmitForReview(){const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:this.userDetailsStore.userId,name:this.question.name,question:this.question.question,correct_answer:this.question.correct_answer,incorrect_answer_1:this.question.incorrect_answer_1,incorrect_answer_2:this.question.incorrect_answer_2,incorrect_answer_3:this.question.incorrect_answer_3,incorrect_answer_4:this.question.incorrect_answer_4,correct_answer:this.question.correct_answer,explanation:this.question.explanation,comment:this.comment})};var s="/questions/mc/"+this.questionId+"/edit-for-review";fetch(s,n).then(()=>{alert(`This edit is being submitted for review.
We do this to prevent misinformation and sloppy wording from being added. If you would like to become an editor and help with this, please reach out.`),this.$router.back()})},ValidateForm(n){this.validate.validated=!1,(this.question.name===""||this.question.name===null)&&(this.validate.name=!0,this.validate.validated=!0),(this.question.question===""||this.question.question===null)&&(this.validate.question=!0,this.validate.validated=!0),(this.question.correct_answer===""||this.question.correct_answer===null)&&(this.validate.correct_answer=!0,this.validate.validated=!0),(this.question.incorrect_answer_1===""||this.question.incorrect_answer_1===null)&&(this.validate.incorrect_answer_1=!0,this.validate.validated=!0),(this.question.incorrect_answer_2===""||this.question.incorrect_answer_2===null)&&(this.validate.incorrect_answer_2=!0,this.validate.validated=!0),(this.question.incorrect_answer_3===""||this.question.incorrect_answer_3===null)&&(this.validate.incorrect_answer_3=!0,this.validate.validated=!0),(this.question.incorrect_answer_4===""||this.question.incorrect_answer_4===null)&&(this.validate.incorrect_answer_4=!0,this.validate.validated=!0),(this.question.explanation===""||this.question.explanation===null)&&(this.validate.explanation=!0,this.validate.validated=!0),!this.validate.validated&&(n=="submission"?this.Submit():n=="submissionForReview"&&this.SubmitForReview())},setFormUpdated(){this.formUpdated=!0}},computed:{isFormChanged(){return this.question.name!==this.originalQuestion.name||this.question.question!==this.originalQuestion.question||this.question.correct_answer!==this.originalQuestion.correct_answer||this.question.incorrect_answer_1!==this.originalQuestion.incorrect_answer_1||this.question.incorrect_answer_2!==this.originalQuestion.incorrect_answer_2||this.question.incorrect_answer_3!==this.originalQuestion.incorrect_answer_3||this.question.incorrect_answer_4!==this.originalQuestion.incorrect_answer_4||this.question.explanation!==this.originalQuestion.explanation||this.question.comment!==this.originalQuestion.comment||this.comment!=""}}},r=n=>(v("data-v-5045797b"),n=n(),p(),n),y=r(()=>t("div",{id:"banner"},[t("img",{src:f,class:"image-fluid"})],-1)),S={class:"container mt-3 pb-3"},k=r(()=>t("div",{class:"row"},[t("div",{class:"col-10 d-flex align-items-end"},[t("h2",{id:"header-tile"},"Edit Question"),t("img",{src:g,id:"header-icon"})])],-1)),Q={class:"main-content-container container-fluid mt-4"},V={class:"row p-0"},C={id:"form-container",class:"col-lg-7 p-4"},F={class:"mb-3"},U=r(()=>t("label",{for:"question_name",class:"form-label"},"Question Name",-1)),D={key:0,class:"form-validate"},I={class:"mb-3"},M=r(()=>t("label",{for:"last_name",class:"form-label"},"Question",-1)),E={key:0,class:"form-validate"},L={class:"mb-3"},O=r(()=>t("label",{class:"form-label"},"Correct answer",-1)),B={key:0,class:"form-validate"},N={class:"mb-3"},T=r(()=>t("label",{class:"form-label"},"Wrong answer 1",-1)),W={key:0,class:"form-validate"},j={class:"mb-3"},z=r(()=>t("label",{class:"form-label"},"Wrong answer 2",-1)),H={key:0,class:"form-validate"},R={class:"mb-3"},J=r(()=>t("label",{class:"form-label"},"Wrong answer 3",-1)),P={key:0,class:"form-validate"},A={class:"mb-3"},G=r(()=>t("label",{class:"form-label"},"Wrong answer 4",-1)),K={key:0,class:"form-validate"},X={class:"mb-3"},Y=r(()=>t("label",{class:"form-label"},"Explanation",-1)),Z={key:0,class:"form-validate"},$={key:0,class:"mb-3"},ee=r(()=>t("label",{class:"form-label"},"Optional: explain this edit",-1)),te={class:"d-flex justify-content-end gap-4"},se=["disabled"],ie=["disabled"],ne=r(()=>t("div",{class:"d-none d-md-block"}," Submit for review ",-1)),oe=r(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"white",height:"20",width:"20",class:"d-md-none"},[t("path",{d:"M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"})],-1)),re=[ne,oe];function ae(n,s,h,_,e,d){return o(),a(q,null,[y,t("div",S,[k,t("div",Q,[t("div",V,[t("div",C,[t("div",F,[U,c(t("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>e.question.name=i),type:"text",class:"form-control",id:"question_name"},null,512),[[u,e.question.name]]),e.validate.name&&(e.question.name===""||e.question.name===null)?(o(),a("div",D," please enter a question name ! ")):l("",!0)]),t("div",I,[M,c(t("textarea",{"onUpdate:modelValue":s[1]||(s[1]=i=>e.question.question=i),rows:"2",class:"form-control"},`\r
                        `,512),[[u,e.question.question]]),e.validate.question&&(e.question.question===""||e.question.question===null)?(o(),a("div",E," please enter a question content ! ")):l("",!0)]),t("div",L,[O,c(t("input",{"onUpdate:modelValue":s[2]||(s[2]=i=>e.question.correct_answer=i),type:"text",class:"form-control"},null,512),[[u,e.question.correct_answer]]),e.validate.correct_answer&&(e.question.correct_answer===""||e.question.correct_answer===null)?(o(),a("div",B," please enter a correct answer ! ")):l("",!0)]),t("div",N,[T,c(t("input",{"onUpdate:modelValue":s[3]||(s[3]=i=>e.question.incorrect_answer_1=i),type:"text",class:"form-control"},null,512),[[u,e.question.incorrect_answer_1]]),e.validate.incorrect_answer_1&&(e.question.incorrect_answer_1===""||e.question.incorrect_answer_1===null)?(o(),a("div",W," please enter incorrect answer 1 ! ")):l("",!0)]),t("div",j,[z,c(t("input",{"onUpdate:modelValue":s[4]||(s[4]=i=>e.question.incorrect_answer_2=i),type:"text",class:"form-control"},null,512),[[u,e.question.incorrect_answer_2]]),e.validate.incorrect_answer_2&&(e.question.incorrect_answer_2===""||e.question.incorrect_answer_2===null)?(o(),a("div",H," please enter incorrect answer 2 ! ")):l("",!0)]),t("div",R,[J,c(t("input",{"onUpdate:modelValue":s[5]||(s[5]=i=>e.question.incorrect_answer_3=i),type:"text",class:"form-control"},null,512),[[u,e.question.incorrect_answer_3]]),e.validate.incorrect_answer_3&&(e.question.incorrect_answer_3===""||e.question.incorrect_answer_3===null)?(o(),a("div",P," please enter incorrect answer 3 ! ")):l("",!0)]),t("div",A,[G,c(t("input",{"onUpdate:modelValue":s[6]||(s[6]=i=>e.question.incorrect_answer_4=i),type:"text",class:"form-control"},null,512),[[u,e.question.incorrect_answer_4]]),e.validate.incorrect_answer_4&&(e.question.incorrect_answer_4===""||e.question.incorrect_answer_4===null)?(o(),a("div",K," please enter incorrect answer 4 ! ")):l("",!0)]),t("div",X,[Y,c(t("textarea",{"onUpdate:modelValue":s[7]||(s[7]=i=>e.question.explanation=i),class:"form-control",rows:"3"},null,512),[[u,e.question.explanation]]),e.validate.explanation&&(e.question.explanation===""||e.question.explanation===null)?(o(),a("div",Z," please enter a explanation ! ")):l("",!0)]),_.userDetailsStore.role=="instructor"||_.userDetailsStore.role=="student"?(o(),a("div",$,[ee,c(t("textarea",{"onUpdate:modelValue":s[8]||(s[8]=i=>e.comment=i),class:"form-control",rows:"3"},null,512),[[u,e.comment]])])):l("",!0),t("div",te,[t("a",{class:"btn red-btn",onClick:s[9]||(s[9]=i=>n.$router.go(-1))},"Cancel"),_.userDetailsStore.role=="admin"||_.userDetailsStore.role=="editor"?(o(),a("button",{key:0,class:"btn purple-btn",onClick:s[10]||(s[10]=i=>d.ValidateForm("submission")),disabled:!d.isFormChanged}," Submit ",8,se)):_.userDetailsStore.role=="instructor"||_.userDetailsStore.role=="student"?(o(),a("button",{key:1,class:"btn purple-btn",onClick:s[11]||(s[11]=i=>d.ValidateForm("submissionForReview")),disabled:!d.isFormChanged},re,8,ie)):l("",!0)])])])])])],64)}const le=m(x,[["render",ae],["__scopeId","data-v-5045797b"]]),_e={__name:"EditMCQuestionView",setup(n){return(s,h)=>(o(),b(le))}};export{_e as default};
