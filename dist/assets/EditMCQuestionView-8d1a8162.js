import{_ as m,o,c as a,a as t,w as l,l as c,b as u,F as q,p as v,e as h,I as w,f as p}from"./main-7bdecc33.js";import{_ as f}from"./recurso-69-12793b41.js";const b={data(){return{questionId:this.$route.params.id,question:{},validate:{validated:!1,name:!1,question:!1,correct_answer:!1,incorrect_answer1:!1,incorrect_answer2:!1,incorrect_answer3:!1,incorrect_answer4:!1,explanation:!1}}},created(){this.getQuestion()},methods:{getQuestion(){fetch("/questions/mc/show/"+this.questionId).then(function(i){return i.json()}).then(i=>this.question=i)},Submit(){if(this.validate.validated=!1,(this.question.name===""||this.question.name===null)&&(this.validate.name=!0,this.validate.validated=!0),(this.question.question===""||this.question.question===null)&&(this.validate.question=!0,this.validate.validated=!0),(this.question.correct_answer===""||this.question.correct_answer===null)&&(this.validate.correct_answer=!0,this.validate.validated=!0),(this.question.incorrect_answer_1===""||this.question.incorrect_answer_1===null)&&(this.validate.incorrect_answer_1=!0,this.validate.validated=!0),(this.question.incorrect_answer_2===""||this.question.incorrect_answer_2===null)&&(this.validate.incorrect_answer_2=!0,this.validate.validated=!0),(this.question.incorrect_answer_3===""||this.question.incorrect_answer_3===null)&&(this.validate.incorrect_answer_3=!0,this.validate.validated=!0),(this.question.incorrect_answer_4===""||this.question.incorrect_answer_4===null)&&(this.validate.incorrect_answer_4=!0,this.validate.validated=!0),(this.question.explanation===""||this.question.explanation===null)&&(this.validate.explanation=!0,this.validate.validated=!0),this.validate.validated)return;const i={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.question.name,question:this.question.question,correct_answer:this.question.correct_answer,incorrect_answer_1:this.question.incorrect_answer_1,incorrect_answer_2:this.question.incorrect_answer_2,incorrect_answer_3:this.question.incorrect_answer_3,incorrect_answer_4:this.question.incorrect_answer_4,correct_answer:this.question.correct_answer,explanation:this.question.explanation})};var s="/questions/mc/"+this.questionId+"/edit";fetch(s,i).then(()=>{alert("Question edited successfully."),this.$router.back()})}}},r=i=>(v("data-v-0b7efbdd"),i=i(),h(),i),x=r(()=>t("div",{id:"banner"},[t("img",{src:w,class:"image-fluid"})],-1)),y={class:"container mt-3 pb-3"},g=r(()=>t("div",{class:"row"},[t("div",{class:"col-10 d-flex align-items-end"},[t("h2",{id:"header-tile"},"Edit Question"),t("img",{src:f,id:"header-icon"})])],-1)),k={class:"main-content-container container-fluid mt-4"},V={class:"row p-0"},C={id:"form-container",class:"col-lg-7 p-4"},Q={class:"mb-3"},U=r(()=>t("label",{for:"question_name",class:"form-label"},"Question Name",-1)),I={key:0,class:"form-validate"},S={class:"mb-3"},E=r(()=>t("label",{for:"last_name",class:"form-label"},"Question",-1)),B={key:0,class:"form-validate"},M={class:"mb-3"},N=r(()=>t("label",{class:"form-label"},"Correct answer",-1)),W={key:0,class:"form-validate"},j={class:"mb-3"},T=r(()=>t("label",{class:"form-label"},"Wrong answer 1",-1)),F={key:0,class:"form-validate"},O={class:"mb-3"},D=r(()=>t("label",{class:"form-label"},"Wrong answer 2",-1)),J={key:0,class:"form-validate"},P={class:"mb-3"},z=r(()=>t("label",{class:"form-label"},"Wrong answer 3",-1)),A={key:0,class:"form-validate"},G={class:"mb-3"},H=r(()=>t("label",{class:"form-label"},"Wrong answer 4",-1)),K={key:0,class:"form-validate"},L={class:"mb-3"},R=r(()=>t("label",{class:"form-label"},"Explanation",-1)),X={key:0,class:"form-validate"},Y={class:"d-flex justify-content-end gap-4"};function Z(i,s,_,ee,e,d){return o(),a(q,null,[x,t("div",y,[g,t("div",k,[t("div",V,[t("div",C,[t("div",Q,[U,l(t("input",{"onUpdate:modelValue":s[0]||(s[0]=n=>e.question.name=n),type:"text",class:"form-control",id:"question_name"},null,512),[[c,e.question.name]]),e.validate.name&&(e.question.name===""||e.question.name===null)?(o(),a("div",I," please enter a question name ! ")):u("",!0)]),t("div",S,[E,l(t("textarea",{"onUpdate:modelValue":s[1]||(s[1]=n=>e.question.question=n),rows:"2",class:"form-control"},`\r
                        `,512),[[c,e.question.question]]),e.validate.question&&(e.question.question===""||e.question.question===null)?(o(),a("div",B," please enter a question content ! ")):u("",!0)]),t("div",M,[N,l(t("input",{"onUpdate:modelValue":s[2]||(s[2]=n=>e.question.correct_answer=n),type:"text",class:"form-control"},null,512),[[c,e.question.correct_answer]]),e.validate.correct_answer&&(e.question.correct_answer===""||e.question.correct_answer===null)?(o(),a("div",W," please enter a correct answer ! ")):u("",!0)]),t("div",j,[T,l(t("input",{"onUpdate:modelValue":s[3]||(s[3]=n=>e.question.incorrect_answer_1=n),type:"text",class:"form-control"},null,512),[[c,e.question.incorrect_answer_1]]),e.validate.incorrect_answer_1&&(e.question.incorrect_answer_1===""||e.question.incorrect_answer_1===null)?(o(),a("div",F," please enter incorrect answer 1 ! ")):u("",!0)]),t("div",O,[D,l(t("input",{"onUpdate:modelValue":s[4]||(s[4]=n=>e.question.incorrect_answer_2=n),type:"text",class:"form-control"},null,512),[[c,e.question.incorrect_answer_2]]),e.validate.incorrect_answer_2&&(e.question.incorrect_answer_2===""||e.question.incorrect_answer_2===null)?(o(),a("div",J," please enter incorrect answer 2 ! ")):u("",!0)]),t("div",P,[z,l(t("input",{"onUpdate:modelValue":s[5]||(s[5]=n=>e.question.incorrect_answer_3=n),type:"text",class:"form-control"},null,512),[[c,e.question.incorrect_answer_3]]),e.validate.incorrect_answer_3&&(e.question.incorrect_answer_3===""||e.question.incorrect_answer_3===null)?(o(),a("div",A," please enter incorrect answer 3 ! ")):u("",!0)]),t("div",G,[H,l(t("input",{"onUpdate:modelValue":s[6]||(s[6]=n=>e.question.incorrect_answer_4=n),type:"text",class:"form-control"},null,512),[[c,e.question.incorrect_answer_4]]),e.validate.incorrect_answer_4&&(e.question.incorrect_answer_4===""||e.question.incorrect_answer_4===null)?(o(),a("div",K," please enter incorrect answer 4 ! ")):u("",!0)]),t("div",L,[R,l(t("textarea",{"onUpdate:modelValue":s[7]||(s[7]=n=>e.question.explanation=n),class:"form-control",rows:"3"},null,512),[[c,e.question.explanation]]),e.validate.explanation&&(e.question.explanation===""||e.question.explanation===null)?(o(),a("div",X," please enter a explanation ! ")):u("",!0)]),t("div",Y,[t("a",{class:"btn red-btn",onClick:s[8]||(s[8]=n=>i.$router.go(-1))},"Cancel"),t("button",{class:"btn purple-btn",onClick:s[9]||(s[9]=n=>d.Submit())}," Submit ")])])])])])],64)}const $=m(b,[["render",Z],["__scopeId","data-v-0b7efbdd"]]),ne={__name:"EditMCQuestionView",setup(i){return(s,_)=>(o(),p($))}};export{ne as default};
