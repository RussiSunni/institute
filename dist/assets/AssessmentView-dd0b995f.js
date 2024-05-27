import{_ as v,o as n,c as o,d as s,g,e as m,v as _,b as u,m as b,i as y,t as p,F as q,k as S,x as M,D as Q,a as k,j as I,p as A,f as x}from"./main-e8290d59.js";import{u as C}from"./UserSkillsStore-3e6ce32f.js";import{u as T}from"./SettingsStore-fd24f301.js";import{u as z}from"./AssessmentsStore-12a7e6d1.js";const N={data(){return{skillId:this.$route.params.id}},setup(){},mounted:function(){$("#summernote").summernote({placeholder:"write down your answer here",tabsize:2,height:120,toolbar:[["style",["style"]],["font",["bold","underline","clear"]],["color",["color"]],["para",["ul","ol","paragraph"]],["table",["table"]],["insert",["link","picture","video"]],["view",["fullscreen","codeview","help"]]],maximumImageFileSize:2048*1024,callbacks:{onImageUploadError:function(i){alert("Max image size is 2MB.")}}})},methods:{getAnswer(){return $("#summernote").summernote("code")},clearAnswer(){$("#summernote").summernote("code","")},setAnswer(i){$("#summernote").summernote("code",i)}}},L={class:"container mt-3"},V=s("div",{class:"row"},[s("div",{class:"mb-3"},[s("textarea",{id:"summernote",name:"answerdata"})])],-1),P=[V];function U(i,e,r,a,t,d){return n(),o("div",L,P)}const E=v(N,[["render",U]]);const j={setup(){return{userDetailsStore:g()}},data(){return{skillId:this.$route.params.id,question:{question:"",correctAnswer:"",incorrectAnswer1:"",incorrectAnswer2:"",incorrectAnswer3:"",incorrectAnswer4:"",question:"",explanation:""},validate:{validated:!1,question:!1,correctAnswer:!1,incorrectAnswer1:!1,incorrectAnswer2:!1,incorrectAnswer3:!1,incorrectAnswer4:!1,explanation:!1},studentId:null}},methods:{Submit(){if(this.studentId=this.$parent.userDetailsStore.userId,this.validate.validated=!1,(this.question.question===""||this.question.question===null)&&(this.validate.question=!0,this.validate.validated=!0),(this.question.correctAnswer===""||this.question.correctAnswer===null)&&(this.validate.correctAnswer=!0,this.validate.validated=!0),(this.question.incorrectAnswer1===""||this.question.incorrectAnswer1===null)&&(this.validate.incorrectAnswer1=!0,this.validate.validated=!0),(this.question.incorrectAnswer2===""||this.question.incorrectAnswer2===null)&&(this.validate.incorrectAnswer2=!0,this.validate.validated=!0),(this.question.incorrectAnswer3===""||this.question.incorrectAnswer3===null)&&(this.validate.incorrectAnswer3=!0,this.validate.validated=!0),(this.question.incorrectAnswer4===""||this.question.incorrectAnswer4===null)&&(this.validate.incorrectAnswer4=!0,this.validate.validated=!0),(this.question.explanation===""||this.question.explanation===null)&&(this.validate.explanation=!0,this.validate.validated=!0),this.validate.validated)return;const i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:this.question.question,correct_answer:this.question.correctAnswer,incorrect_answer_1:this.question.incorrectAnswer1,incorrect_answer_2:this.question.incorrectAnswer2,incorrect_answer_3:this.question.incorrectAnswer3,incorrect_answer_4:this.question.incorrectAnswer4,explanation:this.question.explanation,skill_id:this.skillId,student_id:this.studentId})};var e="/questions/student-mc-questions/add";fetch(e,i).then(()=>{alert("Question added")}).then(()=>{this.$parent.MakeMastered(this.$parent.skill),this.$parent.passModal=!0})}}},D={class:"container mt-3 pb-3"},B=s("div",{class:"row"},[s("div",{class:"col-10"},[s("h4",{id:"header-tile"},"Well done, you have passed!"),s("p",null," Please create your own question on this subject before you master it. ")])],-1),F={class:"main-content-container container-fluid mt-4"},O={class:"row p-0"},W={id:"form-container",class:"col p-4"},H={class:"mb-3"},J=s("label",{for:"last_name",class:"form-label"},"Question",-1),K={key:0,class:"form-validate"},Y={class:"mb-3"},G=s("label",{class:"form-label"},"Correct answer",-1),R={key:0,class:"form-validate"},X={class:"mb-3"},Z=s("label",{class:"form-label"},"Wrong answer 1",-1),ss={key:0,class:"form-validate"},es={class:"mb-3"},ts=s("label",{class:"form-label"},"Wrong answer 2",-1),is={key:0,class:"form-validate"},ns={class:"mb-3"},os=s("label",{class:"form-label"},"Wrong answer 3",-1),ls={key:0,class:"form-validate"},rs={class:"mb-3"},as=s("label",{class:"form-label"},"Wrong answer 4",-1),us={key:0,class:"form-validate"},cs={class:"mb-3"},ds=s("label",{class:"form-label"},"Explanation",-1),hs={key:0,class:"form-validate"},ms={class:"d-flex justify-content-end gap-4"};function _s(i,e,r,a,t,d){return n(),o("div",D,[B,s("div",F,[s("div",O,[s("div",W,[s("div",H,[J,m(s("textarea",{"onUpdate:modelValue":e[0]||(e[0]=l=>t.question.question=l),rows:"1",class:"form-control"},`\r
                        `,512),[[_,t.question.question]]),t.validate.question&&(t.question.question===""||t.question.question===null)?(n(),o("div",K," please enter a question content ! ")):u("",!0)]),s("div",Y,[G,m(s("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>t.question.correctAnswer=l),type:"text",class:"form-control"},null,512),[[_,t.question.correctAnswer]]),t.validate.correctAnswer&&(t.question.correctAnswer===""||t.question.correctAnswer===null)?(n(),o("div",R," please enter a correct answer ! ")):u("",!0)]),s("div",X,[Z,m(s("input",{"onUpdate:modelValue":e[2]||(e[2]=l=>t.question.incorrectAnswer1=l),type:"text",class:"form-control"},null,512),[[_,t.question.incorrectAnswer1]]),t.validate.incorrectAnswer1&&(t.question.incorrectAnswer1===""||t.question.incorrectAnswer1===null)?(n(),o("div",ss," please enter incorrect answer 1 ! ")):u("",!0)]),s("div",es,[ts,m(s("input",{"onUpdate:modelValue":e[3]||(e[3]=l=>t.question.incorrectAnswer2=l),type:"text",class:"form-control"},null,512),[[_,t.question.incorrectAnswer2]]),t.validate.incorrectAnswer2&&(t.question.incorrectAnswer2===""||t.question.incorrectAnswer2===null)?(n(),o("div",is," please enter incorrect answer 2 ! ")):u("",!0)]),s("div",ns,[os,m(s("input",{"onUpdate:modelValue":e[4]||(e[4]=l=>t.question.incorrectAnswer3=l),type:"text",class:"form-control"},null,512),[[_,t.question.incorrectAnswer3]]),t.validate.incorrectAnswer3&&(t.question.incorrectAnswer3===""||t.question.incorrectAnswer3===null)?(n(),o("div",ls," please enter incorrect answer 3 ! ")):u("",!0)]),s("div",rs,[as,m(s("input",{"onUpdate:modelValue":e[5]||(e[5]=l=>t.question.incorrectAnswer4=l),type:"text",class:"form-control"},null,512),[[_,t.question.incorrectAnswer4]]),t.validate.incorrectAnswer4&&(t.question.incorrectAnswer4===""||t.question.incorrectAnswer4===null)?(n(),o("div",us," please enter incorrect answer 4 ! ")):u("",!0)]),s("div",cs,[ds,m(s("textarea",{"onUpdate:modelValue":e[6]||(e[6]=l=>t.question.explanation=l),class:"form-control",rows:"3"},null,512),[[_,t.question.explanation]]),t.validate.explanation&&(t.question.explanation===""||t.question.explanation===null)?(n(),o("div",hs," please enter a explanation ! ")):u("",!0)]),s("div",ms,[s("a",{class:"btn red-btn",onClick:e[7]||(e[7]=l=>i.$router.go(-1))},"Cancel"),s("button",{class:"btn purple-btn",onClick:e[8]||(e[8]=l=>d.Submit())}," Submit ")])])])])])}const fs=v(j,[["render",_s]]);const ps={setup(){const i=g(),e=C(),r=T(),a=b(),t=z();return{userDetailsStore:i,userSkillsStore:e,settingsStore:r,skillsStore:a,assessmentsStore:t}},data(){return{loading:!0,skillId:this.$route.params.id,skill:{},mcQuestions:[],essayQuestions:[],questions:[],question:{},questionNumber:0,score:0,assessmentId:null,numMCQuestions:0,numEssayQuestions:0,totalNumOfQuestions:0,isAllQuestionsAnswered:!1,passModal:!1,failedModal:!1,waitForMarkModal:!1,oldAssessment:void 0,updatedAssessment:!1,showFlaggingModal:!1,isQuizPassed:!1,showThankModal:!1,answerHoveredIndex:1/0}},mounted:function(){$(".summernote").summernote({placeholder:"this is the summer note",tabsize:2,height:120,toolbar:[["style",["style"]],["font",["bold","underline","clear"]],["color",["color"]],["para",["ul","ol","paragraph"]],["table",["table"]],["insert",["link","picture","video"]],["view",["fullscreen","codeview","help"]]],maximumImageFileSize:2048*1024,callbacks:{onImageUploadError:function(i){alert("Max image size is 2MB.")}}})},async created(){this.settingsStore.quizMaxQuestions==null&&await this.settingsStore.getSettings(),await this.assessmentsStore.getAssessments();const i=this.assessmentsStore.assessments,e=await this.userDetailsStore.getUserDetails();this.oldAssessment=i.find(a=>a.student_id===e.userId),this.oldAssessment!==void 0&&(this.updatedAssessment=!0);let r;for(let a=0;a<this.skillsStore.skillsList.length;a++)this.skillsStore.skillsList[a].id==this.skillId&&(r=this.skillsStore.skillsList[a].type,this.skill=this.skillsStore.skillsList[a]);if(r!="super")await this.fetchMCQuestions(this.skillId);else{let a=[];for(let t=0;t<this.skillsStore.skillsList.length;t++)this.skillsStore.skillsList[t].parent==this.skillId&&this.skillsStore.skillsList[t].type=="sub"&&a.push(this.skillsStore.skillsList[t]);for(let t=0;t<a.length;t++)await this.fetchMCQuestions(a[t].id)}},components:{EssayAnswer:E,StudentAddMCQuestion:fs},methods:{async fetchMCQuestions(i){fetch("/questions/"+i+"/multiple-choice").then(function(e){return e.json()}).then(e=>{this.mcQuestions=this.mcQuestions.concat(e)}).then(()=>{for(let r=0;r<this.mcQuestions.length;r++)this.mcQuestions[r].userAnswer=null,this.mcQuestions[r].questionType="mc";for(let r=0;r<this.mcQuestions.length;r++){var e=[];e.push({option:this.mcQuestions[r].correct_answer,index:1}),e.push({option:this.mcQuestions[r].incorrect_answer_1,index:2}),e.push({option:this.mcQuestions[r].incorrect_answer_2,index:3}),e.push({option:this.mcQuestions[r].incorrect_answer_3,index:4}),e.push({option:this.mcQuestions[r].incorrect_answer_4,index:5}),e=e.sort((a,t)=>.5-Math.random());for(let a=0;a<e.length;a++)e[a].option.toUpperCase()=="all of the above".toUpperCase()&&function(d,l,f){var c=d[l];d.splice(l,1),d.splice(f,0,c)}(e,a,4);this.mcQuestions[r].answerOptions=e}}).then(()=>{this.fetchEssayQuestions(i)})},async fetchEssayQuestions(i){fetch("/questions/"+i+"/essay").then(function(e){return e.json()}).then(e=>{this.essayQuestions=this.essayQuestions.concat(e)}).then(()=>{for(let e=0;e<this.essayQuestions.length;e++)this.essayQuestions[e].userAnswer=null,this.essayQuestions[e].questionType="essay"}).then(()=>{this.questions=this.essayQuestions.concat(this.mcQuestions),this.questions=this.questions.sort((e,r)=>.5-Math.random()),this.questions.length>this.settingsStore.quizMaxQuestions&&(this.questions.length=this.settingsStore.quizMaxQuestions),this.question=this.questions[0],this.totalNumOfQuestions=this.questions.length}).then(()=>{this.loading=!1})},Next(){if(this.question.questionType=="essay"){const i=this.$refs.essayAnswer.getAnswer();this.questions[this.questionNumber].userAnswer=i,this.$refs.essayAnswer.clearAnswer()}this.questionNumber++,this.question=this.questions[this.questionNumber],this.question.questionType=="essay"&&this.question.userAnswer&&this.$refs.essayAnswer.setAnswer(this.question.userAnswer)},Previous(){if(this.question.questionType=="essay"){const i=this.$refs.essayAnswer.getAnswer();this.questions[this.questionNumber].userAnswer=i}this.questionNumber--,this.question=this.questions[this.questionNumber],this.question.questionType=="essay"&&this.$refs.essayAnswer.setAnswer(this.question.userAnswer)},Submit(){if(this.question.questionType=="essay"){const e=this.$refs.essayAnswer.getAnswer();this.questions[this.questionNumber].userAnswer=e}for(let e=0;e<this.questions.length;e++)this.questions[e].questionType=="mc"?(this.numMCQuestions++,this.questions[e].userAnswer==1&&this.score++):this.numEssayQuestions++;if(this.numEssayQuestions===0)this.score/this.numMCQuestions*100>=90?this.isQuizPassed=!0:this.failedModal=!0;else{let e="POST";this.oldAssessment!==void 0&&(e="PUT");const r={method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify({totalScore:this.totalNumOfQuestions,currentScore:this.score,numUnmarkedQuestions:this.numEssayQuestions})};var i="/assessments/"+this.userDetailsStore.userId+"/"+this.skillId;const a=()=>{this.waitForMarkModal=!0};fetch(i,r).then(function(t){return t.json()}).then(t=>{this.assessmentId=t.id,fetch("/unmarked-answers/delete/"+this.assessmentId,{method:"DELETE"}).then(()=>{for(let l=0;l<this.questions.length;l++)if(this.questions[l].questionType=="essay"){const f={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({answer:this.questions[l].userAnswer,questionId:this.questions[l].id})};var d="/unmarked-answers/add/"+this.assessmentId;fetch(d,f).then(function(c){a()})}})})}},async MakeMastered(i){await this.userSkillsStore.MakeMastered(this.userDetailsStore.userId,i)},UserAnswer(){for(let i=0;i<this.questions.length;i++)if(this.questions[i].userAnswer==null){this.isAllQuestionsAnswered=!1;return}else this.isAllQuestionsAnswered=!0},TestPass(){this.isQuizPassed=!0},flagQuestion(i){const e=this.question.questionType=="mc"?"mc_question":"essay_question",r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content_type:e,content_id:i,user_id:this.userDetailsStore.userId})};var a="/content-flags/add";fetch(a,r).then(()=>{this.showThankModal=!0,this.showFlaggingModal=!1})}}},h=i=>(A("data-v-3b39a2bb"),i=i(),x(),i),vs={key:0},ws={key:1},ys={key:0},qs={id:"myModal",class:"modal"},gs={class:"modal-content"},bs=h(()=>s("div",{class:"mb-2"}," You are taking a new quiz for this skill while your old one is still waiting to be marked. Please note that your old answers will be replaced. ",-1)),ks={class:"d-flex flex-row-reverse"},As={class:"pb-2 pb-md-0"},xs={key:0,class:"container mt-5 mb-3 p-3 pt-2 mb-3",id:"question-container"},Ss={class:"row"},Ms={class:"col d-flex my-2 gap-2 justify-content-between flex-column flex-md-row"},Qs={class:"d-flex align-items-lg-center"},Is={id:"question-number-div"},Cs={id:"question-content"},$s={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",style:{height:"22px",opacity:"0.5"}},Ts=h(()=>s("path",{fill:"#8f7bd6",d:"M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"},null,-1)),zs=[Ts],Ns={key:0},Ls={class:"form-check my-3"},Vs={class:"control control-checkbox"},Ps=["value"],Us=["onMouseover"],Es={key:1},js={class:"form-group"},Ds={class:"mt-3 d-flex justify-content-end"},Bs={key:1,id:"question-content"},Fs={key:3},Os={id:"myModal",class:"modal"},Ws={class:"modal-content"},Hs=h(()=>s("div",{class:"d-flex align-content-center"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"50",height:"50",fill:"green"},[s("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"})]),s("div",{class:"my-auto ms-2"}," Well done! You have now mastered this skill. ")],-1)),Js={class:"d-flex flex-row-reverse"},Ks={key:4},Ys={id:"myModal",class:"modal"},Gs={class:"modal-content"},Rs=h(()=>s("div",{class:"d-flex align-content-center"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"red",width:"50",height:"50"},[s("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"})]),s("div",{class:"my-auto ms-2"}," You failed this time, try again later ! ")],-1)),Xs={class:"d-flex flex-row-reverse"},Zs={key:5},se={id:"myModal",class:"modal"},ee={class:"modal-content"},te=h(()=>s("div",null," There is at least one question that needs to be marked by your instructor. Please check whether you passed later. ",-1)),ie={class:"d-flex flex-row-reverse"},ne={key:6},oe={id:"myModal",class:"modal"},le={class:"modal-content-flag"},re=h(()=>s("div",{class:"d-flex gap-4"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"grey",width:"45",height:"45"},[s("path",{d:"M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"})]),s("p",null," Would you like to flag this as unhelpful or incorrect for admin review ")],-1)),ae={class:"d-flex justify-content-between gap-2"},ue=h(()=>s("span",{class:"d-none d-md-block"}," No ",-1)),ce=h(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"white",class:"d-md-none modal-icon"},[s("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"})],-1)),de=[ue,ce],he=h(()=>s("span",{class:"d-none d-md-block"}," Yes ",-1)),me=h(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"white",class:"d-md-none modal-icon"},[s("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})],-1)),_e=[he,me],fe={key:7},pe={id:"myModal",class:"modal"},ve={class:"modal-content-flag"},we=h(()=>s("div",{class:"d-flex gap-4 text-center"},[s("p",null," Thank you for flagging this question. We will take a look as soon as possible !! ")],-1)),ye={class:"d-flex justify-content-center"},qe=h(()=>s("span",null," OK ",-1)),ge=[qe];function be(i,e,r,a,t,d){const l=y("EssayAnswer"),f=y("StudentAddMCQuestion");return n(),o(q,null,[t.loading==!0?(n(),o("div",vs,"Loading...")):u("",!0),t.loading==!1&&t.isQuizPassed==!1?(n(),o("div",ws,[t.updatedAssessment?(n(),o("div",ys,[s("div",qs,[s("div",gs,[bs,s("div",ks,[s("button",{type:"button",class:"btn green-btn",onClick:e[0]||(e[0]=c=>this.updatedAssessment=!1)}," OK ")])])])])):u("",!0),s("div",As,[t.questions.length>0?(n(),o("div",xs,[s("div",Ss,[s("div",Ms,[s("div",Qs,[s("div",Is,p(this.questionNumber+1),1),s("div",Cs,p(t.question.question),1)]),s("div",{"b-tooltip.hover":"",title:"flag this question for review",onClick:e[1]||(e[1]=c=>t.showFlaggingModal=!0),class:"flagging-icon",style:{height:"50px"}},[(n(),o("svg",$s,zs))])]),this.question.questionType=="mc"?(n(),o("div",Ns,[(n(!0),o(q,null,S(this.question.answerOptions,(c,Pe)=>(n(),o("div",Ls,[s("label",Vs,[s("div",{class:M(t.answerHoveredIndex==c.index?"my-auto mx-2 me-4 answer-option checkbox-hovered":"my-auto mx-2 me-4 answer-option")},p(c.option),3),m(s("input",{type:"radio",name:"nodeType",value:c.index,"onUpdate:modelValue":e[2]||(e[2]=w=>t.questions[this.questionNumber].userAnswer=w)},null,8,Ps),[[Q,t.questions[this.questionNumber].userAnswer]]),s("div",{class:"control_indicator",onMouseover:w=>t.answerHoveredIndex=c.index,onMouseleave:e[3]||(e[3]=w=>t.answerHoveredIndex=1/0)},null,40,Us)])]))),256))])):this.question.questionType=="essay"?(n(),o("div",Es,[s("div",js,[k(l,{ref:"essayAnswer"},null,512)])])):u("",!0)]),s("div",Ds,[this.questionNumber>0?(n(),o("button",{key:0,onClick:e[4]||(e[4]=c=>d.Previous()),class:"btn red-btn me-2"}," Previous ")):u("",!0),this.questionNumber!=t.questions.length-1?(n(),o("button",{key:1,onClick:e[5]||(e[5]=c=>d.Next()),class:"btn green-btn"}," Next ")):u("",!0),this.questionNumber==t.questions.length-1?(n(),o("button",{key:2,onClick:e[6]||(e[6]=c=>d.Submit()),class:"btn green-btn"}," Submit ")):u("",!0)])])):(n(),o("div",Bs," There is no quiz for this skill yet. Please check again soon. "))])])):t.loading==!1&&t.isQuizPassed==!0?(n(),I(f,{key:2})):u("",!0),t.passModal?(n(),o("div",Fs,[s("div",Os,[s("div",Ws,[Hs,s("div",Js,[s("button",{type:"button",class:"btn green-btn",onClick:e[7]||(e[7]=c=>this.$router.push("/skills/"+this.skillId))}," Great! ")])])])])):u("",!0),t.failedModal?(n(),o("div",Ks,[s("div",Ys,[s("div",Gs,[Rs,s("div",Xs,[s("button",{type:"button",class:"btn red-btn",onClick:e[8]||(e[8]=c=>this.$router.push("/skills/"+this.skillId))}," OK ")])])])])):u("",!0),t.waitForMarkModal?(n(),o("div",Zs,[s("div",se,[s("div",ee,[te,s("div",ie,[s("button",{type:"button",class:"btn green-btn",onClick:e[9]||(e[9]=c=>this.$router.push("/"))}," OK ")])])])])):u("",!0),t.showFlaggingModal?(n(),o("div",ne,[s("div",oe,[s("div",le,[re,s("div",ae,[s("button",{type:"button",class:"btn red-btn w-md-25",onClick:e[10]||(e[10]=c=>t.showFlaggingModal=!1)},de),s("button",{type:"button",class:"btn green-btn w-md-25",onClick:e[11]||(e[11]=c=>d.flagQuestion(t.question.id))},_e)])])])])):u("",!0),t.showThankModal?(n(),o("div",fe,[s("div",pe,[s("div",ve,[we,s("div",ye,[s("button",{type:"button",class:"btn green-btn w-25",onClick:e[12]||(e[12]=c=>t.showThankModal=!1)},ge)])])])])):u("",!0)],64)}const ke=v(ps,[["render",be],["__scopeId","data-v-3b39a2bb"]]),Ae="/images/skill-avatar/recurso.png";const xe={setup(){return{skillsStore:b()}},data(){return{skillId:this.$route.params.id,skill:{name:null,image:null,firstAncestorId:null,levelInHierarchy:null}}},async mounted(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList();for(let i=0;i<this.skillsStore.skillsList.length;i++)this.skillId==this.skillsStore.skillsList[i].id&&(this.skill.name=this.skillsStore.skillsList[i].name,this.skill.image=this.skillsStore.skillsList[i].image,this.skill.firstAncestorId=this.skillsStore.skillsList[i].first_ancestor,this.skill.levelInHierarchy=this.skillsStore.skillsList[i].hierarchy_level)},components:{Assessment:ke}},Se=i=>(A("data-v-ab584065"),i=i(),x(),i),Me={id:"banner"},Qe=["src"],Ie={class:"container mt-3"},Ce={class:"d-flex justify-content-between"},$e={class:"d-flex flex-column flex-md-row"},Te=["src"],ze={key:1,id:"skill-icon",src:Ae,alt:"default skill icon"},Ne={id:"assessment-skill-name",class:"ms-3 d-flex justify-content-end"},Le=Se(()=>s("div",{class:"mt-4 mb-4"},[s("hr",{class:"border border-2 opacity-100 w-md-75 w-100",id:"assessment-horizontal-line"})],-1));function Ve(i,e,r,a,t,d){const l=y("Assessment");return n(),o(q,null,[s("div",Me,[s("img",{src:"/images/banners/skills-banner.png",class:"img-fluid"},null,8,Qe)]),s("div",Ie,[s("div",Ce,[s("div",$e,[this.skill.image?(n(),o("img",{key:0,src:this.skill.image},null,8,Te)):(n(),o("img",ze)),s("div",Ne,p(this.skill.name)+" Quiz ",1)])]),Le,k(l)])],64)}const Be=v(xe,[["render",Ve],["__scopeId","data-v-ab584065"]]);export{Be as default};
