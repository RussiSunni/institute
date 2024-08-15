import{_ as M,o as n,c as o,b as e,l as L,C as N,u as E,r as y,h as A,i as Q,x as b,a as r,w,q as g,A as p,F as k,t as h,s as I,p as z,e as F,f as V,I as D,d as T}from"./main-db8069f7.js";import{u as U}from"./SettingsStore-edae484e.js";import{u as j}from"./AssessmentsStore-abce185f.js";import{F as R}from"./FlagModals-bf7ef5da.js";const B={data(){return{skillId:this.$route.params.id}},setup(){},mounted:function(){$("#summernote").summernote({placeholder:"write down your answer here",tabsize:2,height:120,toolbar:[["style",["style"]],["font",["bold","underline","clear"]],["color",["color"]],["para",["ul","ol","paragraph"]],["table",["table"]],["insert",["link","picture","video"]],["view",["fullscreen","codeview","help"]]],maximumImageFileSize:2048*1024,callbacks:{onImageUploadError:function(i){alert("Max image size is 2MB.")}}})},methods:{getAnswer(){return $("#summernote").summernote("code")},clearAnswer(){$("#summernote").summernote("code","")},setAnswer(i){$("#summernote").summernote("code",i)}}},W={class:"container mt-3"},H=e("div",{class:"row"},[e("div",{class:"mb-3"},[e("textarea",{id:"summernote",name:"answerdata"})])],-1),Y=[H];function J(i,t,l,u,s,c){return n(),o("div",W,Y)}const K=M(B,[["render",J]]);const G={setup(){const i=L(),t=N(),l=E();return{userDetailsStore:i,userSkillsStore:t,skillTreeStore:l}},data(){return{skillId:this.$route.params.id,question:{question:"",correctAnswer:"",incorrectAnswer1:"",incorrectAnswer2:"",incorrectAnswer3:"",incorrectAnswer4:"",question:"",explanation:""},validate:{validated:!1,question:!1,correctAnswer:!1,incorrectAnswer1:!1,incorrectAnswer2:!1,incorrectAnswer3:!1,incorrectAnswer4:!1,explanation:!1},studentId:null,reshake:!1,questionAddedModal:!1,questionSubmitted:!1,submittedMess:!1}},async mounted(){},methods:{Submit(){if(this.studentId=this.userDetailsStore.userId,this.validate.validated=!1,(this.question.question===""||this.question.question===null)&&(this.validate.question=!0,this.validate.validated=!0),(this.question.correctAnswer===""||this.question.correctAnswer===null)&&(this.validate.correctAnswer=!0,this.validate.validated=!0),(this.question.incorrectAnswer1===""||this.question.incorrectAnswer1===null)&&(this.validate.incorrectAnswer1=!0,this.validate.validated=!0),(this.question.incorrectAnswer2===""||this.question.incorrectAnswer2===null)&&(this.validate.incorrectAnswer2=!0,this.validate.validated=!0),(this.question.incorrectAnswer3===""||this.question.incorrectAnswer3===null)&&(this.validate.incorrectAnswer3=!0,this.validate.validated=!0),(this.question.incorrectAnswer4===""||this.question.incorrectAnswer4===null)&&(this.validate.incorrectAnswer4=!0,this.validate.validated=!0),(this.question.explanation===""||this.question.explanation===null)&&(this.validate.explanation=!0,this.validate.validated=!0),this.validate.validated){this.reshake=!0;return}const i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:this.question.question,correct_answer:this.question.correctAnswer,incorrect_answer_1:this.question.incorrectAnswer1,incorrect_answer_2:this.question.incorrectAnswer2,incorrect_answer_3:this.question.incorrectAnswer3,incorrect_answer_4:this.question.incorrectAnswer4,explanation:this.question.explanation,skill_id:this.skillId,student_id:this.studentId})};var t="/questions/student-mc-questions/add";fetch(t,i).then(()=>{this.questionAddedModal=!0,this.questionSubmitted=!0,window.scrollTo(0,0)})},showSubmittedMess(){this.submittedMess=!0,setTimeout(()=>{this.submittedMess=!1},2e3)},skipAddingQuestion(){this.questionSubmitted=!0,window.scrollTo(0,0)}}},O={class:"student-add-result pb-3 w-100"},X={class:"main-content-container container-fluid"},Z={class:"row p-0"},ss={key:1,id:"form-container",class:"col p-4"},es={key:0,class:"d-flex flex-column"},ts=e("div",{id:"congrats-tile"}," Well done, you have passed! ",-1),is=e("p",null," Would you like to add your own question on this subject? ",-1),ns=[ts,is],os={key:1,class:"d-flex flex-column shake"},ls=e("div",{id:"congrats-tile"}," Thank you for submitting your question. ",-1),rs=[ls],as={class:"mb-3"},us=e("label",{for:"last_name",class:"form-label"},"Question",-1),cs={class:"mb-3"},ds=e("label",{class:"form-label"},"Correct answer",-1),hs={class:"mb-3"},ms=e("label",{class:"form-label"},"Wrong answer 1",-1),_s={class:"mb-3"},fs=e("label",{class:"form-label"},"Wrong answer 2",-1),ps={class:"mb-3"},vs=e("label",{class:"form-label"},"Wrong answer 3",-1),ws={class:"mb-3"},ys=e("label",{class:"form-label"},"Wrong answer 4",-1),ks={class:"mb-3"},gs=e("label",{class:"form-label"},"Explanation",-1),qs={class:"d-flex justify-content-end gap-4"},bs={key:2,class:"form-validate shake"},As={key:0},xs={id:"myModal",class:"modal"},Ss={class:"modal-content"},Ms=e("div",{class:"d-flex align-content-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"50",height:"50",fill:"green"},[e("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"})]),e("div",{class:"my-auto ms-2"}," Your question have been submitted ")],-1),Ts={class:"d-flex flex-row-reverse"};function Qs(i,t,l,u,s,c){const _=y("RouterLink");return n(),o(k,null,[e("div",O,[e("div",X,[e("div",Z,[s.questionSubmitted?(n(),A(_,{key:0,class:"btn btn-light purple-btn",style:{width:"136px"},to:"/skills"},{default:Q(()=>[b(" Back to skills ")]),_:1})):r("",!0),s.questionSubmitted?r("",!0):(n(),o("div",ss,[s.questionSubmitted?r("",!0):(n(),o("div",es,ns)),s.questionSubmitted?(n(),o("div",os,rs)):r("",!0),e("div",as,[us,w(e("textarea",{"onUpdate:modelValue":t[0]||(t[0]=a=>s.question.question=a),rows:"1",class:"form-control"},`\r
                        `,512),[[g,s.question.question]]),s.validate.question&&(s.question.question===""||s.question.question===null)?(n(),o("div",{key:0,class:p(["form-validate",{shake:s.reshake}]),onAnimationend:t[1]||(t[1]=a=>s.reshake=!1)}," please enter a question content ! ",34)):r("",!0)]),e("div",cs,[ds,w(e("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>s.question.correctAnswer=a),type:"text",class:"form-control"},null,512),[[g,s.question.correctAnswer]]),s.validate.correctAnswer&&(s.question.correctAnswer===""||s.question.correctAnswer===null)?(n(),o("div",{key:0,class:p(["form-validate",{shake:s.reshake}]),onAnimationend:t[3]||(t[3]=a=>s.reshake=!1)}," please enter a correct answer ! ",34)):r("",!0)]),e("div",hs,[ms,w(e("input",{"onUpdate:modelValue":t[4]||(t[4]=a=>s.question.incorrectAnswer1=a),type:"text",class:"form-control"},null,512),[[g,s.question.incorrectAnswer1]]),s.validate.incorrectAnswer1&&(s.question.incorrectAnswer1===""||s.question.incorrectAnswer1===null)?(n(),o("div",{key:0,class:p(["form-validate",{shake:s.reshake}]),onAnimationend:t[5]||(t[5]=a=>s.reshake=!1)}," please enter incorrect answer 1 ! ",34)):r("",!0)]),e("div",_s,[fs,w(e("input",{"onUpdate:modelValue":t[6]||(t[6]=a=>s.question.incorrectAnswer2=a),type:"text",class:"form-control"},null,512),[[g,s.question.incorrectAnswer2]]),s.validate.incorrectAnswer2&&(s.question.incorrectAnswer2===""||s.question.incorrectAnswer2===null)?(n(),o("div",{key:0,class:p(["form-validate",{shake:s.reshake}]),onAnimationend:t[7]||(t[7]=a=>s.reshake=!1)}," please enter incorrect answer 2 ! ",34)):r("",!0)]),e("div",ps,[vs,w(e("input",{"onUpdate:modelValue":t[8]||(t[8]=a=>s.question.incorrectAnswer3=a),type:"text",class:"form-control"},null,512),[[g,s.question.incorrectAnswer3]]),s.validate.incorrectAnswer3&&(s.question.incorrectAnswer3===""||s.question.incorrectAnswer3===null)?(n(),o("div",{key:0,class:p(["form-validate",{shake:s.reshake}]),onAnimationend:t[9]||(t[9]=a=>s.reshake=!1)}," please enter incorrect answer 3 ! ",34)):r("",!0)]),e("div",ws,[ys,w(e("input",{"onUpdate:modelValue":t[10]||(t[10]=a=>s.question.incorrectAnswer4=a),type:"text",class:"form-control"},null,512),[[g,s.question.incorrectAnswer4]]),s.validate.incorrectAnswer4&&(s.question.incorrectAnswer4===""||s.question.incorrectAnswer4===null)?(n(),o("div",{key:0,class:p(["form-validate  ",{shake:s.reshake}]),onAnimationend:t[11]||(t[11]=a=>s.reshake=!1)}," please enter incorrect answer 4 ! ",34)):r("",!0)]),e("div",ks,[gs,w(e("textarea",{"onUpdate:modelValue":t[12]||(t[12]=a=>s.question.explanation=a),class:"form-control",rows:"3"},null,512),[[g,s.question.explanation]]),s.validate.explanation&&(s.question.explanation===""||s.question.explanation===null)?(n(),o("div",{key:0,class:p(["form-validate ",{shake:s.reshake}]),onAnimationend:t[13]||(t[13]=a=>s.reshake=!1)}," please enter a explanation ! ",34)):r("",!0)]),e("div",qs,[e("button",{class:"btn btn-light",onClick:t[14]||(t[14]=(...a)=>c.skipAddingQuestion&&c.skipAddingQuestion(...a))}," Skip "),e("button",{class:"btn purple-btn",onClick:t[15]||(t[15]=a=>s.questionSubmitted?c.showSubmittedMess():c.Submit())}," Submit ")]),s.submittedMess?(n(),o("div",bs," You already submitted a question !! ")):r("",!0)]))])])]),s.questionAddedModal?(n(),o("div",As,[e("div",xs,[e("div",Ss,[Ms,e("div",Ts,[e("button",{type:"button",class:"btn green-btn",onClick:t[16]||(t[16]=a=>s.questionAddedModal=!1)}," ok "),s.questionSubmitted?(n(),A(_,{key:0,class:"btn btn-light purple-btn mx-2",to:"/skills"},{default:Q(()=>[b(" Back to skills ")]),_:1})):r("",!0)])])])])):r("",!0)],64)}const P=M(G,[["render",Qs]]);const Is={setup(){return{userDetailsStore:L()}},components:{StudentAddMCQuestion:P,FlagModals:R},data(){return{assessmentResult:"",finishDate:"",finishTime:"",parent:"",score:0,totalScore:1,scorePercent:0,questions:[],essayQuestionsLength:0,correctIndex:[],passModal:!1,failsModal:!1,waitForMarkModal:!1,questionToFlagId:0,questionToFlagType:"",showFlaggingModal:!1}},props:["skill","isManualEssayMarking"],mounted(){switch(this.assessmentResult=this.$parent.assessmentStatus,this.assessmentResult){case"pass":this.passModal=!0;break;case"fails":this.failsModal=!0;break;case"wait for essay answers to be mark":this.waitForMarkModal=!0;break}this.finishDate=this.$parent.finishTime.toLocaleString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this.finishTime=this.$parent.finishTime.toLocaleTimeString(),this.score=this.$parent.score,this.isManualEssayMarking==1?this.totalScore=this.$parent.numMCQuestions:this.totalScore=this.$parent.questions.length,this.totalScore!==0&&(this.scorePercent=Math.floor(this.score/this.totalScore*100)),this.isManualEssayMarking==1?(this.questions=this.$parent.questions.filter(i=>i.questionType==="mc"),this.essayQuestionsLength=this.$parent.questions.length-this.questions.length):this.questions=this.$parent.questions,this.correctIndex=[1]},methods:{setQuestionForFlagging(i,t){this.questionToFlagId=i,this.questionToFlagType=t,this.showFlaggingModal=!0}}},f=i=>(z("data-v-7b6697d4"),i=i(),F(),i),Cs={class:"container mt-3 pb-3"},Ls=f(()=>e("div",{class:"page-tile"},"Assessment Result",-1)),zs={class:"d-flex flex-md-row flex-column gap-3"},Fs={class:"assessment-info"},Ns=f(()=>e("span",{class:"info-label"},"Result:",-1)),Es={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 512",fill:"red",height:"14",width:"14",class:"status-icon"},$s=f(()=>e("path",{d:"M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"},null,-1)),Vs=[$s],Rs={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"green",height:"14",width:"14",class:"mb-1"},Ps=f(()=>e("path",{d:"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"},null,-1)),Ds=[Ps],Us=f(()=>e("span",{class:"info-label"},"Finish Date: ",-1)),js={class:"info-value"},Bs={id:"finish-time"},Ws={class:"hover-cursor","b-on-hover":"",title:"you need to score above 80% to pass the assessment"},Hs=f(()=>e("span",{class:"info-label"},"Score: ",-1)),Ys={class:"info-value"},Js=f(()=>e("span",null,"*",-1)),Ks={key:0,class:"essay-warning"},Gs={class:"mc-question-result"},Os=["onClick"],Xs={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",style:{height:"22px",opacity:"0.5"}},Zs=f(()=>e("path",{fill:"#8f7bd6",d:"M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"},null,-1)),se=[Zs],ee={class:"question"},te={class:"d-flex flex-column"},ie={class:"form-check my-3"},ne={class:"control control-checkbox"},oe={key:0,class:"correct-indicate"},le={key:1,class:"user-answer-indicate"},re={key:2,class:"correct-indicate"},ae=["value","disabled"],ue={class:"control_indicator"},ce={key:0,class:"checked"},de={key:1},he=f(()=>e("span",{class:"explain-label"},"Your answer: ",-1)),me={class:"explain-text"},_e={key:2,class:"explain-answer"},fe=f(()=>e("div",{class:"explain-label"},"Explanation:",-1)),pe={class:"explain-text"},ve={key:0},we={id:"myModal",class:"modal"},ye={class:"modal-content"},ke=f(()=>e("div",{class:"d-flex align-content-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"50",height:"50",fill:"green"},[e("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"})]),e("div",{class:"my-auto ms-2"}," Well done! You passed and have now mastered the skill! ")],-1)),ge={class:"d-flex flex-row-reverse"},qe={key:1},be={id:"myModal",class:"modal"},Ae={class:"modal-content"},xe=f(()=>e("div",{class:"d-flex align-content-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"red",width:"50",height:"50"},[e("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"})]),e("div",{class:"my-auto ms-2"}," You failed this time, try again later! ")],-1)),Se={class:"d-flex flex-row-reverse"},Me={key:2},Te={id:"myModal",class:"modal"},Qe={class:"modal-content"},Ie=f(()=>e("div",null," There is at least one question that needs to be marked by your instructor. Please check whether you passed later. ",-1)),Ce={class:"d-flex flex-row-reverse"};function Le(i,t,l,u,s,c){const _=y("StudentAddMCQuestion"),a=y("FlagModals");return n(),o(k,null,[e("div",Cs,[Ls,e("div",zs,[e("div",Fs,[e("div",null,[Ns,e("span",{class:p(s.assessmentResult=="pass"?"student-pass":"student-fail")},[b(h(s.assessmentResult)+" ",1),s.assessmentResult==="failed"?(n(),o("svg",Es,Vs)):r("",!0),s.assessmentResult==="pass"?(n(),o("svg",Rs,Ds)):r("",!0)],2)]),e("div",null,[Us,e("span",js,[b(h(s.finishDate)+" ",1),e("span",Bs," at "+h(s.finishTime),1)])]),e("div",Ws,[Hs,e("span",Ys,h(s.score)+" out "+h(s.totalScore),1),b(" ( "+h(s.scorePercent)+"%) ",1),Js]),l.isManualEssayMarking==1&&s.essayQuestionsLength!=0?(n(),o("div",Ks," There are "+h(s.essayQuestionsLength)+" answers that needed to be mark by your instructor ",1)):r("",!0)]),s.assessmentResult==="pass"?(n(),A(_,{key:0})):r("",!0)]),(n(!0),o(k,null,I(s.questions,d=>(n(),o("div",Gs,[d.questionType=="mc"?(n(),o("div",{key:0,"b-tooltip.hover":"",title:"flag this question for review",onClick:m=>c.setQuestionForFlagging(d.id,"mc_question"),class:"flagging-icon",style:{height:"50px"}},[(n(),o("svg",Xs,se))],8,Os)):r("",!0),e("div",{class:p(d.userAnswer===1||d.isCorrect==!0?"correct-label":"wrong-label")},h(d.userAnswer===1||d.isCorrect==!0?"Correct !!":"Incorrect !!"),3),e("div",ee,h(d.question),1),e("div",te,[d.questionType=="mc"?(n(!0),o(k,{key:0},I(d.answerOptions,(m,v)=>(n(),o("div",ie,[e("label",ne,[e("div",{class:p(["my-auto mx-2 me-4 answer-option ",m.index==1?" correct-answer":d.userAnswer==m.index?"user-answer":" incorrect-answer"])},[b(h(m.option)+" ",1),m.index==1&&d.userAnswer!==1?(n(),o("span",oe," (correct answer)")):r("",!0),m.index!==1&&d.userAnswer==m.index?(n(),o("span",le," (your answer)")):r("",!0),m.index==1&&d.userAnswer==1?(n(),o("span",re," (you are correct !)")):r("",!0)],2),e("input",{type:"radio",name:"nodeType",value:m.index,disabled:m.index!=1},null,8,ae),e("div",ue,[m.index==1?(n(),o("div",ce)):r("",!0)])])]))),256)):(n(),o("div",de,[he,e("div",me,h(d.userAnswer),1)])),d.questionType=="mc"||d.questionType=="essay"&&d.isCorrect==!1?(n(),o("div",_e,[fe,e("div",pe,h(d.explanation),1)])):r("",!0)])]))),256))]),s.passModal?(n(),o("div",ve,[e("div",we,[e("div",ye,[ke,e("div",ge,[e("button",{type:"button",class:"btn green-btn",onClick:t[0]||(t[0]=d=>s.passModal=!1)}," Great! ")])])])])):r("",!0),s.failsModal?(n(),o("div",qe,[e("div",be,[e("div",Ae,[xe,e("div",Se,[e("button",{type:"button",class:"btn red-btn",onClick:t[1]||(t[1]=d=>s.failsModal=!1)}," OK ")])])])])):r("",!0),s.waitForMarkModal?(n(),o("div",Me,[e("div",Te,[e("div",Qe,[Ie,e("div",Ce,[e("button",{type:"button",class:"btn green-btn",onClick:t[2]||(t[2]=d=>s.waitForMarkModal=!1)}," OK ")])])])])):r("",!0),s.showFlaggingModal?(n(),A(a,{key:3,userId:u.userDetailsStore.userId,contentType:s.questionToFlagType,contentId:s.questionToFlagId},null,8,["userId","contentType","contentId"])):r("",!0)],64)}const ze=M(Is,[["render",Le],["__scopeId","data-v-7b6697d4"]]);const Fe={setup(){const i=L(),t=U(),l=V(),u=j(),s=N(),c=E();return{userDetailsStore:i,settingsStore:t,skillsStore:l,assessmentsStore:u,userSkillsStore:s,skillTreeStore:c}},data(){return{loading:!0,skillId:this.$route.params.id,skill:{},mcQuestions:[],mcQuestionsAnswer:[],essayQuestions:[],questions:[],question:{},questionNumber:0,score:0,assessmentId:null,numMCQuestions:0,numEssayQuestions:0,totalNumOfQuestions:0,isAllQuestionsAnswered:!1,waitForMarkModal:!1,oldAssessment:void 0,updatedAssessment:!1,showFlaggingModal:!1,flagContentType:"",isQuizPassed:!1,answerHoveredIndex:1/0,showResult:!1,assessmentStatus:"",haveEssayQuestion:!1,finishTime:null,needToSelectInstructor:!1,aiLoading:!1}},mounted:function(){$(".summernote").summernote({placeholder:"this is the summer note",tabsize:2,height:120,toolbar:[["style",["style"]],["font",["bold","underline","clear"]],["color",["color"]],["para",["ul","ol","paragraph"]],["table",["table"]],["insert",["link","picture","video"]],["view",["fullscreen","codeview","help"]]],maximumImageFileSize:2048*1024,callbacks:{onImageUploadError:function(i){alert("Max image size is 2MB.")}}})},async created(){this.settingsStore.quizMaxQuestions==null&&await this.settingsStore.getSettings(),await this.assessmentsStore.getAssessments();const i=this.assessmentsStore.assessments,t=await this.userDetailsStore.getUserDetails();let l;for(let u=0;u<this.skillsStore.skillsList.length;u++)this.skillsStore.skillsList[u].id==this.skillId&&(l=this.skillsStore.skillsList[u].type,this.skill=this.skillsStore.skillsList[u]);if(this.oldAssessment=i.find(u=>u.student_id===t.userId&&u.skill_id===this.skill.id),this.oldAssessment!==void 0&&(this.updatedAssessment=!0),l!="super")await this.fetchMCQuestions(this.skillId);else{let u=[];for(let s=0;s<this.skillsStore.skillsList.length;s++)this.skillsStore.skillsList[s].parent==this.skillId&&this.skillsStore.skillsList[s].type=="sub"&&u.push(this.skillsStore.skillsList[s]);for(let s=0;s<u.length;s++)await this.fetchMCQuestions(u[s].id)}},components:{EssayAnswer:K,StudentAddMCQuestion:P,AssessmentResult:ze,FlagModals:R},methods:{async fetchMCQuestions(i){fetch("/questions/"+i+"/multiple-choice").then(function(t){return t.json()}).then(t=>{this.mcQuestions=this.mcQuestions.concat(t)}).then(()=>{for(let l=0;l<this.mcQuestions.length;l++)this.mcQuestions[l].userAnswer=null,this.mcQuestions[l].questionType="mc";for(let l=0;l<this.mcQuestions.length;l++){var t=[];t.push({option:this.mcQuestions[l].correct_answer,index:1}),t.push({option:this.mcQuestions[l].incorrect_answer_1,index:2}),t.push({option:this.mcQuestions[l].incorrect_answer_2,index:3}),t.push({option:this.mcQuestions[l].incorrect_answer_3,index:4}),t.push({option:this.mcQuestions[l].incorrect_answer_4,index:5}),t=t.sort((u,s)=>.5-Math.random());for(let u=0;u<t.length;u++)t[u].option.toUpperCase()=="all of the above".toUpperCase()&&function(c,_,a){var d=c[_];c.splice(_,1),c.splice(a,0,d)}(t,u,4);this.mcQuestions[l].answerOptions=t}}).then(()=>{this.fetchEssayQuestions(i)})},async fetchEssayQuestions(i){fetch("/questions/"+i+"/essay").then(function(t){return t.json()}).then(t=>{t.length>0&&!this.userDetailsStore.instructor.id&&this.settingsStore.isManualEssayMarking==1&&(this.needToSelectInstructor=!0),this.essayQuestions=this.essayQuestions.concat(t)}).then(()=>{for(let t=0;t<this.essayQuestions.length;t++)this.essayQuestions[t].userAnswer=null,this.essayQuestions[t].questionType="essay"}).then(()=>{this.questions=this.essayQuestions.concat(this.mcQuestions),this.questions=this.questions.sort((t,l)=>.5-Math.random()),this.questions.length>this.settingsStore.quizMaxQuestions&&(this.questions.length=this.settingsStore.quizMaxQuestions),this.question=this.questions[0],this.totalNumOfQuestions=this.questions.length}).then(()=>{this.loading=!1})},Next(){if(this.questions[this.questionNumber].questionType=="essay"){const i=this.$refs.essayAnswer.getAnswer();this.questions[this.questionNumber].userAnswer=i,this.$refs.essayAnswer.clearAnswer()}this.questionNumber++,this.questions[this.questionNumber].questionType=="essay"&&this.questions[this.questionNumber].userAnswer&&this.$refs.essayAnswer.setAnswer(this.questions[this.questionNumber].userAnswer)},Previous(){if(this.questions[this.questionNumber].questionType=="essay"){const i=this.$refs.essayAnswer.getAnswer();this.questions[this.questionNumber].userAnswer=i}this.questionNumber--,this.questions[this.questionNumber].questionType=="essay"&&this.$refs.essayAnswer.setAnswer(this.questions[this.questionNumber].userAnswer)},async Submit(){var t;if(this.finishTime=new Date,this.questions[this.questionNumber].questionType=="essay"){const l=this.$refs.essayAnswer.getAnswer();this.questions[this.questionNumber].userAnswer=l}for(let l=0;l<this.questions.length;l++)this.questions[l].questionType=="mc"?(this.numMCQuestions++,this.questions[l].userAnswer==1&&this.score++):this.numEssayQuestions++;if(this.numEssayQuestions===0)this.score/this.numMCQuestions*100>=this.settingsStore.passMark?(this.MakeMastered(this.skill),this.isQuizPassed=!0,this.assessmentStatus="pass",this.showResult=!0):(this.isQuizPassed=!0,this.assessmentStatus="fails",this.showResult=!0);else if(this.settingsStore.isManualEssayMarking==1){let l="POST";this.oldAssessment!==void 0&&(l="PUT");const u={method:l,headers:{"Content-Type":"application/json"},body:JSON.stringify({totalScore:this.totalNumOfQuestions,currentScore:this.score,numUnmarkedQuestions:this.numEssayQuestions})};var i="/assessments/"+this.userDetailsStore.userId+"/"+this.skillId;const s=()=>{this.isQuizPassed=!0,this.showResult=!0,this.assessmentStatus="wait for essay answers to be mark"};fetch(i,u).then(function(c){return c.json()}).then(c=>{this.assessmentId=c.id,fetch("/unmarked-answers/delete/"+this.assessmentId,{method:"DELETE"}).then(()=>{for(let a=0;a<this.questions.length;a++)if(this.questions[a].questionType=="essay"){const d={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({answer:this.questions[a].userAnswer,questionId:this.questions[a].id})};var _="/unmarked-answers/add/"+this.assessmentId;fetch(_,d).then(function(m){s()})}})})}else{for(let l=0;l<this.questions.length;l++)if(this.questions[l].questionType=="essay"){let u=this.questions[l].question,s=/(<([^>]+)>)/gi;this.questions[l].userAnswer=(t=this.questions[l].userAnswer)==null?void 0:t.replace(s,"");let c=this.questions[l].userAnswer;await this.AIMarkEssayQuestion(u,c,l)}this.score/this.questions.length*100>=this.settingsStore.passMark?(this.MakeMastered(this.skill),this.isQuizPassed=!0,this.assessmentStatus="pass",this.showResult=!0):(this.isQuizPassed=!0,this.assessmentStatus="fails",this.showResult=!0)}},async AIMarkEssayQuestion(i,t,l){this.aiLoading=!0;const u={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:i,answer:t,level:this.skill.level})};await fetch("/questions/mark-essay-question",u).then(function(c){return c.json()}).then(c=>{c.isCorrect==!0?(this.score++,this.questions[l].isCorrect=!0):(this.questions[l].explanation=c.explanation,this.questions[l].isCorrect=!1)}).finally(()=>{this.aiLoading=!1})},UserAnswer(){for(let i=0;i<this.questions.length;i++)if(this.questions[i].userAnswer==null){this.isAllQuestionsAnswered=!1;return}else this.isAllQuestionsAnswered=!0},TestPass(){this.isQuizPassed=!0},handleClickFlagIcon(){this.questions[this.questionNumber].questionType==="mc"?this.flagContentType="mc_question":this.flagContentType="essay_question",this.showFlaggingModal=!0},async MakeMastered(i){await this.userSkillsStore.MakeMastered(this.userDetailsStore.userId,i),await this.skillTreeStore.getUserSkills()}}},x=i=>(z("data-v-13e855aa"),i=i(),F(),i),Ne={key:0},Ee={key:1,class:"loading-animation d-flex justify-content-center align-items-center py-4"},$e=x(()=>e("span",{class:"loader"},null,-1)),Ve=[$e],Re={key:2},Pe={key:0},De={id:"myModal",class:"modal"},Ue={class:"modal-content"},je=x(()=>e("div",{class:"mb-2"}," You are taking a new quiz for this skill while your old one is still waiting to be marked. Please note that your old answers will be replaced. ",-1)),Be={class:"d-flex flex-row-reverse"},We={class:"pb-2 pb-md-0"},He={key:0,class:"container mt-5 mb-3 p-3 pt-2 mb-3",id:"question-container"},Ye={class:"row"},Je={key:0},Ke={class:"col d-flex my-2 gap-2 justify-content-between flex-column flex-md-row"},Ge={class:"d-flex align-items-lg-center"},Oe={id:"question-number-div"},Xe={id:"question-content"},Ze={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",style:{height:"22px",opacity:"0.5"}},st=x(()=>e("path",{fill:"#8f7bd6",d:"M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"},null,-1)),et=[st],tt={key:0},it={class:"form-check my-3"},nt={class:"control control-checkbox"},ot=["name","value","onUpdate:modelValue"],lt=["onMouseover"],rt={class:"form-group"},at={class:"mt-3 d-flex justify-content-end"},ut={key:1,id:"question-content"},ct={key:5,class:"modal"},dt={class:"modal-content"},ht=x(()=>e("div",{class:""},[e("p",{class:"text-center"}," Please choose an instructor before taking these quizzes. ")],-1)),mt={class:"d-flex flex-column-reverse flex-md-row justify-content-center gap-2"},_t=x(()=>e("span",null,"Back",-1)),ft=x(()=>e("span",null,"Select Instructor",-1));function pt(i,t,l,u,s,c){const _=y("EssayAnswer"),a=y("AssessmentResult"),d=y("FlagModals"),m=y("RouterLink");return n(),o(k,null,[s.loading==!0?(n(),o("div",Ne,"Loading...")):r("",!0),s.aiLoading?(n(),o("div",Ee,Ve)):r("",!0),s.loading==!1&&s.isQuizPassed==!1&&!s.needToSelectInstructor&&!s.aiLoading?(n(),o("div",Re,[s.updatedAssessment?(n(),o("div",Pe,[e("div",De,[e("div",Ue,[je,e("div",Be,[e("button",{type:"button",class:"btn green-btn",onClick:t[0]||(t[0]=v=>s.updatedAssessment=!1)}," OK ")])])])])):r("",!0),e("div",We,[s.questions.length>0?(n(),o("div",He,[(n(!0),o(k,null,I(s.questions,(v,S)=>(n(),o("div",Ye,[S==s.questionNumber?(n(),o("div",Je,[e("div",Ke,[e("div",Ge,[e("div",Oe,h(S+1),1),e("div",Xe,h(v.question),1)]),e("div",{"b-tooltip.hover":"",title:"flag this question for review",onClick:t[1]||(t[1]=(...q)=>c.handleClickFlagIcon&&c.handleClickFlagIcon(...q)),class:"flagging-icon",style:{height:"50px"}},[(n(),o("svg",Ze,et))])]),v.questionType=="mc"?(n(),o("div",tt,[(n(!0),o(k,null,I(v.answerOptions,(q,Ct)=>(n(),o("div",it,[e("label",nt,[e("div",{class:p(s.answerHoveredIndex==q.index?"my-auto mx-2 me-4 answer-option checkbox-hovered":"my-auto mx-2 me-4 answer-option")},h(q.option),3),w(e("input",{type:"radio",name:S+"answer",value:q.index,"onUpdate:modelValue":C=>s.questions[S].userAnswer=C},null,8,ot),[[D,s.questions[S].userAnswer]]),e("div",{class:"control_indicator",onMouseover:C=>s.answerHoveredIndex=q.index,onMouseleave:t[2]||(t[2]=C=>s.answerHoveredIndex=1/0)},null,40,lt)])]))),256))])):r("",!0)])):r("",!0)]))),256)),e("div",{class:p(`${s.questions[s.questionNumber].questionType=="essay"?"d-block":"d-none"}`)},[e("div",rt,[T(_,{ref:"essayAnswer"},null,512)])],2),e("div",at,[s.questionNumber>0?(n(),o("button",{key:0,onClick:t[3]||(t[3]=v=>c.Previous()),class:"btn red-btn me-2"}," Previous ")):r("",!0),s.questionNumber<s.questions.length-1?(n(),o("button",{key:1,onClick:t[4]||(t[4]=v=>c.Next()),class:"btn green-btn"}," Next ")):r("",!0),s.questionNumber>=s.questions.length-1?(n(),o("button",{key:2,onClick:t[5]||(t[5]=v=>c.Submit()),class:"btn green-btn"}," Submit ")):r("",!0)])])):(n(),o("div",ut," There is no quiz for this skill yet. Please check again soon. "))])])):r("",!0),s.showResult?(n(),A(a,{key:3,skill:s.skill,isManualEssayMarking:u.settingsStore.isManualEssayMarking},null,8,["skill","isManualEssayMarking"])):r("",!0),s.showFlaggingModal?(n(),A(d,{key:4,userId:u.userDetailsStore.userId,contentId:s.questions[s.questionNumber].id,contentType:s.flagContentType},null,8,["userId","contentId","contentType"])):r("",!0),s.needToSelectInstructor?(n(),o("div",ct,[e("div",dt,[ht,e("div",mt,[T(m,{to:`/skills/${s.skillId}`,type:"button",class:"btn green-btn w-100 w-md-50"},{default:Q(()=>[_t]),_:1},8,["to"]),T(m,{to:"/profile/edit",type:"button",class:"btn green-btn w-100 w-md-50"},{default:Q(()=>[ft]),_:1})])])])):r("",!0)],64)}const vt=M(Fe,[["render",pt],["__scopeId","data-v-13e855aa"]]),wt="/images/skill-avatar/recurso.png";const yt={setup(){return{skillsStore:V()}},data(){return{skillId:this.$route.params.id,skill:{name:null,image:null,firstAncestorId:null,levelInHierarchy:null}}},async mounted(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList();for(let i=0;i<this.skillsStore.skillsList.length;i++)this.skillId==this.skillsStore.skillsList[i].id&&(this.skill.name=this.skillsStore.skillsList[i].name,this.skill.image=this.skillsStore.skillsList[i].image,this.skill.firstAncestorId=this.skillsStore.skillsList[i].first_ancestor,this.skill.levelInHierarchy=this.skillsStore.skillsList[i].hierarchy_level)},components:{Assessment:vt}},kt=i=>(z("data-v-b56feacc"),i=i(),F(),i),gt={id:"banner"},qt=["src"],bt={class:"container mt-3"},At={class:"d-flex justify-content-md-between justify-content-center"},xt={class:"d-flex flex-column flex-md-row"},St=["src"],Mt={key:1,id:"skill-icon",src:wt,alt:"default skill icon"},Tt={id:"assessment-skill-name",class:"ms-3 d-flex justify-content-end"},Qt=kt(()=>e("div",{class:"mt-4 mb-4"},[e("hr",{class:"border border-2 opacity-100 w-md-75 w-100",id:"assessment-horizontal-line"})],-1));function It(i,t,l,u,s,c){const _=y("Assessment");return n(),o(k,null,[e("div",gt,[e("img",{src:"/images/banners/skills-banner.png",class:"img-fluid"},null,8,qt)]),e("div",bt,[e("div",At,[e("div",xt,[this.skill.image?(n(),o("img",{key:0,src:this.skill.image},null,8,St)):(n(),o("img",Mt)),e("div",Tt,h(this.skill.name)+" Quiz ",1)])]),Qt,T(_)])],64)}const Et=M(yt,[["render",It],["__scopeId","data-v-b56feacc"]]);export{Et as default};
