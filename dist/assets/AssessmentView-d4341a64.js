import{_ as M,o as n,c as o,b as t,w as p,x as v,F as w,y as k,a as c,l as L,D as z,u as $,r as y,h as S,i as C,m as x,C as g,t as m,p as R,e as F,f as V,K as P,d as Q}from"./main-f22aba77.js";import{u as U}from"./SettingsStore-d376be49.js";import{u as j}from"./AssessmentsStore-62a68336.js";import{F as E}from"./FlagModals-2a38fb06.js";const B={data(){return{skillId:this.$route.params.id,essayAnswer:""}},setup(){},methods:{getAnswer(){return this.essayAnswer},clearAnswer(){this.essayAnswer=""},setAnswer(i){this.essayAnswer=i}}},O={class:"container mt-3"},W={class:"row"},Y={class:"mb-3"};function H(i,e,r,l,s,u){return n(),o("div",O,[t("div",W,[t("div",Y,[p(t("textarea",{"onUpdate:modelValue":e[0]||(e[0]=h=>s.essayAnswer=h),class:"form-control",id:"exampleFormControlTextarea1",rows:"3"},null,512),[[v,s.essayAnswer]])])])])}const J=M(B,[["render",H]]);const K={data(){return{skillId:this.$route.params.id,imageAnswer:[]}},props:["numImagesRequired"],methods:{getAnswer(){return this.imageAnswer},clearAnswer(){this.imageAnswer=[]},setAnswer(i){this.imageAnswer=i},onFileChange(i){var e=i.target.files||i.dataTransfer.files;if(e.length>0)for(var r=0;r<e.length;r++){var l=new FileReader;l.readAsDataURL(e[r])}if(e.length)for(let s=0;s<e.length;s++){if(e[s].size>7e5){alert("image is too big");return}this.createImage(e[s],s)}},createImage(i,e){var r=new Image,l=new FileReader,s=this;l.onload=u=>{s.image=u.target.result,this.imageAnswer.push(u.target.result),r.src=u.target.result},l.readAsDataURL(i)},removeImages:function(i){this.imageAnswer=[]}}},G={class:"mb-3"},X={class:"main-content-container container-fluid"},Z={class:"row"},ss={class:"col-lg-4"},es=["onUpdate:modelValue"],ts={class:"preview"},is=["src"];function ns(i,e,r,l,s,u){return n(),o("div",G,[t("div",X,[t("div",Z,[t("div",ss,[t("div",null,[(n(!0),o(w,null,k(r.numImagesRequired,(h,a)=>p((n(),o("input",{class:"form-control mb-2","onUpdate:modelValue":d=>s.imageAnswer[a]=d,placeholder:"add image link"},null,8,es)),[[v,s.imageAnswer[a]]])),256))]),(n(!0),o(w,null,k(s.imageAnswer.length,(h,a)=>(n(),o("div",ts,[t("img",{src:s.imageAnswer[a]},null,8,is)]))),256))])]),s.imageAnswer.length>0?(n(),o("button",{key:0,class:"btn red-btn mt-3",onClick:e[0]||(e[0]=(...h)=>u.removeImages&&u.removeImages(...h))}," Start again ")):c("",!0)])])}const os=M(K,[["render",ns]]);const rs={setup(){const i=L(),e=z(),r=$();return{userDetailsStore:i,userSkillsStore:e,skillTreeStore:r}},data(){return{skillId:this.$route.params.id,question:{question:"",correctAnswer:"",incorrectAnswer1:"",incorrectAnswer2:"",incorrectAnswer3:"",incorrectAnswer4:"",question:"",explanation:""},validate:{validated:!1,question:!1,correctAnswer:!1,incorrectAnswer1:!1,incorrectAnswer2:!1,incorrectAnswer3:!1,incorrectAnswer4:!1,explanation:!1},studentId:null,reshake:!1,questionAddedModal:!1,questionSubmitted:!1,submittedMess:!1}},async mounted(){},methods:{Submit(){if(this.studentId=this.userDetailsStore.userId,this.validate.validated=!1,(this.question.question===""||this.question.question===null)&&(this.validate.question=!0,this.validate.validated=!0),(this.question.correctAnswer===""||this.question.correctAnswer===null)&&(this.validate.correctAnswer=!0,this.validate.validated=!0),(this.question.incorrectAnswer1===""||this.question.incorrectAnswer1===null)&&(this.validate.incorrectAnswer1=!0,this.validate.validated=!0),(this.question.incorrectAnswer2===""||this.question.incorrectAnswer2===null)&&(this.validate.incorrectAnswer2=!0,this.validate.validated=!0),(this.question.incorrectAnswer3===""||this.question.incorrectAnswer3===null)&&(this.validate.incorrectAnswer3=!0,this.validate.validated=!0),(this.question.incorrectAnswer4===""||this.question.incorrectAnswer4===null)&&(this.validate.incorrectAnswer4=!0,this.validate.validated=!0),(this.question.explanation===""||this.question.explanation===null)&&(this.validate.explanation=!0,this.validate.validated=!0),this.validate.validated){this.reshake=!0;return}const i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:this.question.question,correct_answer:this.question.correctAnswer,incorrect_answer_1:this.question.incorrectAnswer1,incorrect_answer_2:this.question.incorrectAnswer2,incorrect_answer_3:this.question.incorrectAnswer3,incorrect_answer_4:this.question.incorrectAnswer4,explanation:this.question.explanation,skill_id:this.skillId,student_id:this.studentId})};var e="/questions/student-mc-questions/add";fetch(e,i).then(()=>{this.questionAddedModal=!0,this.questionSubmitted=!0,window.scrollTo(0,0)})},showSubmittedMess(){this.submittedMess=!0,setTimeout(()=>{this.submittedMess=!1},2e3)},skipAddingQuestion(){this.questionSubmitted=!0,window.scrollTo(0,0)}}},ls={class:"student-add-result pb-3 w-100"},as={class:"main-content-container container-fluid"},us={class:"row p-0"},cs={key:1,id:"form-container",class:"col p-4"},ds={key:0,class:"d-flex flex-column"},hs=t("div",{id:"congrats-tile"}," Well done, you have passed! ",-1),ms=t("p",null," Would you like to add your own question on this subject? ",-1),_s=[hs,ms],fs={key:1,class:"d-flex flex-column shake"},gs=t("div",{id:"congrats-tile"}," Thank you for submitting your question. ",-1),ws=[gs],ps={class:"mb-3"},vs=t("label",{for:"last_name",class:"form-label"},"Question",-1),ys={class:"mb-3"},qs=t("label",{class:"form-label"},"Correct answer",-1),ks={class:"mb-3"},bs=t("label",{class:"form-label"},"Wrong answer 1",-1),As={class:"mb-3"},xs=t("label",{class:"form-label"},"Wrong answer 2",-1),Ss={class:"mb-3"},Ms=t("label",{class:"form-label"},"Wrong answer 3",-1),Is={class:"mb-3"},Ts=t("label",{class:"form-label"},"Wrong answer 4",-1),Qs={class:"mb-3"},Cs=t("label",{class:"form-label"},"Explanation",-1),Ns={class:"d-flex justify-content-end gap-4"},Ls={key:2,class:"form-validate shake"},Rs={key:0},Fs={id:"myModal",class:"modal"},zs={class:"modal-content"},$s=t("div",{class:"d-flex align-content-center"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"50",height:"50",fill:"green"},[t("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"})]),t("div",{class:"my-auto ms-2"}," Your question have been submitted ")],-1),Vs={class:"d-flex flex-row-reverse"};function Es(i,e,r,l,s,u){const h=y("RouterLink");return n(),o(w,null,[t("div",ls,[t("div",as,[t("div",us,[s.questionSubmitted?(n(),S(h,{key:0,class:"btn btn-light purple-btn",style:{width:"136px"},to:"/skills"},{default:C(()=>[x(" Back to skills ")]),_:1})):c("",!0),s.questionSubmitted?c("",!0):(n(),o("div",cs,[s.questionSubmitted?c("",!0):(n(),o("div",ds,_s)),s.questionSubmitted?(n(),o("div",fs,ws)):c("",!0),t("div",ps,[vs,p(t("textarea",{"onUpdate:modelValue":e[0]||(e[0]=a=>s.question.question=a),rows:"1",class:"form-control"},`\r
                        `,512),[[v,s.question.question]]),s.validate.question&&(s.question.question===""||s.question.question===null)?(n(),o("div",{key:0,class:g(["form-validate",{shake:s.reshake}]),onAnimationend:e[1]||(e[1]=a=>s.reshake=!1)}," please enter a question content ! ",34)):c("",!0)]),t("div",ys,[qs,p(t("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>s.question.correctAnswer=a),type:"text",class:"form-control"},null,512),[[v,s.question.correctAnswer]]),s.validate.correctAnswer&&(s.question.correctAnswer===""||s.question.correctAnswer===null)?(n(),o("div",{key:0,class:g(["form-validate",{shake:s.reshake}]),onAnimationend:e[3]||(e[3]=a=>s.reshake=!1)}," please enter a correct answer ! ",34)):c("",!0)]),t("div",ks,[bs,p(t("input",{"onUpdate:modelValue":e[4]||(e[4]=a=>s.question.incorrectAnswer1=a),type:"text",class:"form-control"},null,512),[[v,s.question.incorrectAnswer1]]),s.validate.incorrectAnswer1&&(s.question.incorrectAnswer1===""||s.question.incorrectAnswer1===null)?(n(),o("div",{key:0,class:g(["form-validate",{shake:s.reshake}]),onAnimationend:e[5]||(e[5]=a=>s.reshake=!1)}," please enter incorrect answer 1 ! ",34)):c("",!0)]),t("div",As,[xs,p(t("input",{"onUpdate:modelValue":e[6]||(e[6]=a=>s.question.incorrectAnswer2=a),type:"text",class:"form-control"},null,512),[[v,s.question.incorrectAnswer2]]),s.validate.incorrectAnswer2&&(s.question.incorrectAnswer2===""||s.question.incorrectAnswer2===null)?(n(),o("div",{key:0,class:g(["form-validate",{shake:s.reshake}]),onAnimationend:e[7]||(e[7]=a=>s.reshake=!1)}," please enter incorrect answer 2 ! ",34)):c("",!0)]),t("div",Ss,[Ms,p(t("input",{"onUpdate:modelValue":e[8]||(e[8]=a=>s.question.incorrectAnswer3=a),type:"text",class:"form-control"},null,512),[[v,s.question.incorrectAnswer3]]),s.validate.incorrectAnswer3&&(s.question.incorrectAnswer3===""||s.question.incorrectAnswer3===null)?(n(),o("div",{key:0,class:g(["form-validate",{shake:s.reshake}]),onAnimationend:e[9]||(e[9]=a=>s.reshake=!1)}," please enter incorrect answer 3 ! ",34)):c("",!0)]),t("div",Is,[Ts,p(t("input",{"onUpdate:modelValue":e[10]||(e[10]=a=>s.question.incorrectAnswer4=a),type:"text",class:"form-control"},null,512),[[v,s.question.incorrectAnswer4]]),s.validate.incorrectAnswer4&&(s.question.incorrectAnswer4===""||s.question.incorrectAnswer4===null)?(n(),o("div",{key:0,class:g(["form-validate  ",{shake:s.reshake}]),onAnimationend:e[11]||(e[11]=a=>s.reshake=!1)}," please enter incorrect answer 4 ! ",34)):c("",!0)]),t("div",Qs,[Cs,p(t("textarea",{"onUpdate:modelValue":e[12]||(e[12]=a=>s.question.explanation=a),class:"form-control",rows:"3"},null,512),[[v,s.question.explanation]]),s.validate.explanation&&(s.question.explanation===""||s.question.explanation===null)?(n(),o("div",{key:0,class:g(["form-validate ",{shake:s.reshake}]),onAnimationend:e[13]||(e[13]=a=>s.reshake=!1)}," please enter a explanation ! ",34)):c("",!0)]),t("div",Ns,[t("button",{class:"btn btn-light",onClick:e[14]||(e[14]=(...a)=>u.skipAddingQuestion&&u.skipAddingQuestion(...a))}," Skip "),t("button",{class:"btn purple-btn",onClick:e[15]||(e[15]=a=>s.questionSubmitted?u.showSubmittedMess():u.Submit())}," Submit ")]),s.submittedMess?(n(),o("div",Ls," You already submitted a question !! ")):c("",!0)]))])])]),s.questionAddedModal?(n(),o("div",Rs,[t("div",Fs,[t("div",zs,[$s,t("div",Vs,[t("button",{type:"button",class:"btn green-btn",onClick:e[16]||(e[16]=a=>s.questionAddedModal=!1)}," ok "),s.questionSubmitted?(n(),S(h,{key:0,class:"btn btn-light purple-btn mx-2",to:"/skills"},{default:C(()=>[x(" Back to skills ")]),_:1})):c("",!0)])])])])):c("",!0)],64)}const D=M(rs,[["render",Es]]);const Ds={setup(){return{userDetailsStore:L()}},components:{StudentAddMCQuestion:D,FlagModals:E},data(){return{assessmentResult:"",finishDate:"",finishTime:"",parent:"",score:0,totalScore:1,scorePercent:0,questions:[],essayQuestionsLength:0,correctIndex:[],passModal:!1,failsModal:!1,waitForMarkModal:!1,questionToFlagId:0,questionToFlagType:"",showFlaggingModal:!1}},props:["skill","isManualEssayMarking"],mounted(){switch(this.assessmentResult=this.$parent.assessmentStatus,this.assessmentResult){case"pass":this.passModal=!0;break;case"fails":this.failsModal=!0;break;case"wait for essay answers to be mark":this.waitForMarkModal=!0;break}this.finishDate=this.$parent.finishTime.toLocaleString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this.finishTime=this.$parent.finishTime.toLocaleTimeString(),this.score=this.$parent.score,this.isManualEssayMarking==1?this.totalScore=this.$parent.numMCQuestions:this.totalScore=this.$parent.questions.length,this.totalScore!==0&&(this.scorePercent=Math.floor(this.score/this.totalScore*100)),this.isManualEssayMarking==1?(this.questions=this.$parent.questions.filter(i=>i.questionType==="mc"),this.essayQuestionsLength=this.$parent.questions.length-this.questions.length):this.questions=this.$parent.questions,this.correctIndex=[1]},methods:{setQuestionForFlagging(i,e){this.questionToFlagId=i,this.questionToFlagType=e,this.showFlaggingModal=!0}}},f=i=>(R("data-v-ee14c537"),i=i(),F(),i),Ps={class:"container mt-3 pb-3"},Us=f(()=>t("div",{class:"page-tile"},"Assessment Result",-1)),js={class:"d-flex flex-md-row flex-column gap-3"},Bs={class:"assessment-info"},Os=f(()=>t("span",{class:"info-label"},"Result:",-1)),Ws={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 512",fill:"red",height:"14",width:"14",class:"status-icon"},Ys=f(()=>t("path",{d:"M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"},null,-1)),Hs=[Ys],Js={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"green",height:"14",width:"14",class:"mb-1"},Ks=f(()=>t("path",{d:"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"},null,-1)),Gs=[Ks],Xs=f(()=>t("span",{class:"info-label"},"Finish Date: ",-1)),Zs={class:"info-value"},se={id:"finish-time"},ee={class:"hover-cursor","b-on-hover":"",title:"you need to score above 80% to pass the assessment"},te=f(()=>t("span",{class:"info-label"},"Score: ",-1)),ie={class:"info-value"},ne=f(()=>t("span",null,"*",-1)),oe={key:0,class:"essay-warning"},re={class:"mc-question-result"},le=["onClick"],ae={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",style:{height:"22px",opacity:"0.5"}},ue=f(()=>t("path",{fill:"#8f7bd6",d:"M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"},null,-1)),ce=[ue],de={class:"question"},he={class:"d-flex flex-column"},me={class:"form-check my-3"},_e={class:"control control-checkbox"},fe={key:0,class:"correct-indicate"},ge={key:1,class:"user-answer-indicate"},we={key:2,class:"correct-indicate"},pe=["value","disabled"],ve={class:"control_indicator"},ye={key:0,class:"checked"},qe={key:1},ke=f(()=>t("span",{class:"explain-label"},"Your answer:",-1)),be={class:"explain-text"},Ae={key:2},xe=f(()=>t("span",{class:"explain-label"},"Your answer:",-1)),Se=["src"],Me={key:3,class:"explain-answer"},Ie=f(()=>t("div",{class:"explain-label"},"Explanation:",-1)),Te={class:"explain-text"},Qe={key:0},Ce={id:"myModal",class:"modal"},Ne={class:"modal-content"},Le=f(()=>t("div",{class:"d-flex align-content-center"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"50",height:"50",fill:"green"},[t("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"})]),t("div",{class:"my-auto ms-2"}," Well done! You passed and have now mastered the skill! ")],-1)),Re={class:"d-flex flex-row-reverse"},Fe={key:1},ze={id:"myModal",class:"modal"},$e={class:"modal-content"},Ve=f(()=>t("div",{class:"d-flex align-content-center"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"red",width:"50",height:"50"},[t("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"})]),t("div",{class:"my-auto ms-2"}," You failed this time, try again later! ")],-1)),Ee={class:"d-flex flex-row-reverse"},De={key:2},Pe={id:"myModal",class:"modal"},Ue={class:"modal-content"},je=f(()=>t("div",null," There is at least one question that needs to be marked by your instructor. Please check whether you passed later. ",-1)),Be={class:"d-flex flex-row-reverse"};function Oe(i,e,r,l,s,u){const h=y("StudentAddMCQuestion"),a=y("FlagModals");return n(),o(w,null,[t("div",Ps,[Us,t("div",js,[t("div",Bs,[t("div",null,[Os,t("span",{class:g(s.assessmentResult=="pass"?"student-pass":"student-fail")},[x(m(s.assessmentResult)+" ",1),s.assessmentResult==="failed"?(n(),o("svg",Ws,Hs)):c("",!0),s.assessmentResult==="pass"?(n(),o("svg",Js,Gs)):c("",!0)],2)]),t("div",null,[Xs,t("span",Zs,[x(m(s.finishDate)+" ",1),t("span",se," at "+m(s.finishTime),1)])]),t("div",ee,[te,t("span",ie,m(s.score)+" out "+m(s.totalScore),1),x(" ( "+m(s.scorePercent)+"%) ",1),ne]),r.isManualEssayMarking==1&&s.essayQuestionsLength!=0?(n(),o("div",oe," There are "+m(s.essayQuestionsLength)+" answers that needed to be mark by your instructor ",1)):c("",!0)]),s.assessmentResult==="pass"?(n(),S(h,{key:0})):c("",!0)]),(n(!0),o(w,null,k(s.questions,d=>(n(),o("div",re,[d.questionType=="mc"?(n(),o("div",{key:0,"b-tooltip.hover":"",title:"flag this question for review",onClick:_=>u.setQuestionForFlagging(d.id,"mc_question"),class:"flagging-icon",style:{height:"50px"}},[(n(),o("svg",ae,ce))],8,le)):c("",!0),t("div",{class:g(d.userAnswer===1||d.isCorrect==!0?"correct-label":"wrong-label")},m(d.userAnswer===1||d.isCorrect==!0?"Correct !!":"Incorrect !!"),3),t("div",de,m(d.question),1),t("div",he,[d.questionType=="mc"?(n(!0),o(w,{key:0},k(d.answerOptions,(_,b)=>(n(),o("div",me,[t("label",_e,[t("div",{class:g(["my-auto mx-2 me-4 answer-option ",_.index==1?" correct-answer":d.userAnswer==_.index?"user-answer":" incorrect-answer"])},[x(m(_.option)+" ",1),_.index==1&&d.userAnswer!==1?(n(),o("span",fe," (correct answer)")):c("",!0),_.index!==1&&d.userAnswer==_.index?(n(),o("span",ge," (your answer)")):c("",!0),_.index==1&&d.userAnswer==1?(n(),o("span",we," (you are correct !)")):c("",!0)],2),t("input",{type:"radio",name:"nodeType",value:_.index,disabled:_.index!=1},null,8,pe),t("div",ve,[_.index==1?(n(),o("div",ye)):c("",!0)])])]))),256)):d.questionType=="essay"?(n(),o("div",qe,[ke,t("div",be,m(d.userAnswer),1)])):d.questionType=="image"?(n(),o("div",Ae,[xe,(n(!0),o(w,null,k(d.userAnswer.length,(_,b)=>(n(),o("img",{src:d.userAnswer[b],width:"80"},null,8,Se))),256))])):c("",!0),d.questionType=="mc"||d.isCorrect==!1?(n(),o("div",Me,[Ie,t("div",Te,m(d.explanation),1)])):c("",!0)])]))),256))]),s.passModal?(n(),o("div",Qe,[t("div",Ce,[t("div",Ne,[Le,t("div",Re,[t("button",{type:"button",class:"btn green-btn",onClick:e[0]||(e[0]=d=>s.passModal=!1)}," Great! ")])])])])):c("",!0),s.failsModal?(n(),o("div",Fe,[t("div",ze,[t("div",$e,[Ve,t("div",Ee,[t("button",{type:"button",class:"btn red-btn",onClick:e[1]||(e[1]=d=>s.failsModal=!1)}," OK ")])])])])):c("",!0),s.waitForMarkModal?(n(),o("div",De,[t("div",Pe,[t("div",Ue,[je,t("div",Be,[t("button",{type:"button",class:"btn green-btn",onClick:e[2]||(e[2]=d=>s.waitForMarkModal=!1)}," OK ")])])])])):c("",!0),s.showFlaggingModal?(n(),S(a,{key:3,userId:l.userDetailsStore.userId,contentType:s.questionToFlagType,contentId:s.questionToFlagId},null,8,["userId","contentType","contentId"])):c("",!0)],64)}const We=M(Ds,[["render",Oe],["__scopeId","data-v-ee14c537"]]);const Ye={setup(){const i=L(),e=U(),r=V(),l=j(),s=z(),u=$();return{userDetailsStore:i,settingsStore:e,skillsStore:r,assessmentsStore:l,userSkillsStore:s,skillTreeStore:u}},data(){return{loading:!0,skillId:this.$route.params.id,skill:{},mcQuestions:[],mcQuestionsAnswer:[],essayQuestions:[],imageQuestions:[],questions:[],question:{},questionNumber:0,score:0,assessmentId:null,numMCQuestions:0,numEssayQuestions:0,numImageQuestions:0,totalNumOfQuestions:0,isAllQuestionsAnswered:!1,waitForMarkModal:!1,oldAssessment:void 0,updatedAssessment:!1,showFlaggingModal:!1,flagContentType:"",isQuizPassed:!1,answerHoveredIndex:1/0,showResult:!1,assessmentStatus:"",haveEssayQuestion:!1,finishTime:null,needToSelectInstructor:!1,aiLoading:!1,numOfImagesRequired:1}},async created(){this.settingsStore.quizMaxQuestions==null&&await this.settingsStore.getSettings(),await this.assessmentsStore.getAssessments();const i=this.assessmentsStore.assessments,e=await this.userDetailsStore.getUserDetails();let r;for(let l=0;l<this.skillsStore.skillsList.length;l++)this.skillsStore.skillsList[l].id==this.skillId&&(r=this.skillsStore.skillsList[l].type,this.skill=this.skillsStore.skillsList[l]);if(this.oldAssessment=i.find(l=>l.student_id===e.userId&&l.skill_id===this.skill.id),this.oldAssessment!==void 0&&(this.updatedAssessment=!0),r!="super")await this.fetchMCQuestions(this.skillId);else{let l=[];for(let s=0;s<this.skillsStore.skillsList.length;s++)this.skillsStore.skillsList[s].parent==this.skillId&&this.skillsStore.skillsList[s].type=="sub"&&l.push(this.skillsStore.skillsList[s]);for(let s=0;s<l.length;s++)await this.fetchMCQuestions(l[s].id)}},components:{EssayAnswer:J,ImageAnswer:os,StudentAddMCQuestion:D,AssessmentResult:We,FlagModals:E},methods:{async fetchMCQuestions(i){fetch("/questions/"+i+"/multiple-choice").then(function(e){return e.json()}).then(e=>{this.mcQuestions=this.mcQuestions.concat(e)}).then(()=>{for(let r=0;r<this.mcQuestions.length;r++)this.mcQuestions[r].userAnswer=null,this.mcQuestions[r].questionType="mc";for(let r=0;r<this.mcQuestions.length;r++){var e=[];e.push({option:this.mcQuestions[r].correct_answer,index:1}),e.push({option:this.mcQuestions[r].incorrect_answer_1,index:2}),e.push({option:this.mcQuestions[r].incorrect_answer_2,index:3}),e.push({option:this.mcQuestions[r].incorrect_answer_3,index:4}),e.push({option:this.mcQuestions[r].incorrect_answer_4,index:5}),e=e.sort((l,s)=>.5-Math.random());for(let l=0;l<e.length;l++)e[l].option.toUpperCase()=="all of the above".toUpperCase()&&function(u,h,a){var d=u[h];u.splice(h,1),u.splice(a,0,d)}(e,l,4);this.mcQuestions[r].answerOptions=e}}).then(()=>{this.fetchEssayQuestions(i)})},async fetchEssayQuestions(i){fetch("/questions/"+i+"/essay").then(function(e){return e.json()}).then(e=>{e.length>0&&!this.userDetailsStore.instructor.id&&this.settingsStore.isManualEssayMarking==1&&(this.needToSelectInstructor=!0),this.essayQuestions=this.essayQuestions.concat(e)}).then(()=>{for(let e=0;e<this.essayQuestions.length;e++)this.essayQuestions[e].userAnswer=null,this.essayQuestions[e].questionType="essay"}).then(()=>{this.questions=this.essayQuestions.concat(this.mcQuestions)}).then(()=>{this.fetchImageQuestions(i)})},async fetchImageQuestions(i){fetch("/questions/"+i+"/image").then(function(e){return e.json()}).then(e=>{e.length>0&&!this.userDetailsStore.instructor.id&&this.settingsStore.isManualEssayMarking==1&&(this.needToSelectInstructor=!0),this.imageQuestions=this.imageQuestions.concat(e)}).then(()=>{for(let e=0;e<this.imageQuestions.length;e++)this.imageQuestions[e].userAnswer=null,this.imageQuestions[e].questionType="image"}).then(()=>{this.questions=this.imageQuestions.concat(this.questions),this.questions=this.questions.sort((e,r)=>.5-Math.random()),this.questions.length>this.settingsStore.quizMaxQuestions&&(this.questions.length=this.settingsStore.quizMaxQuestions),this.question=this.questions[0],this.question.questionType=="image"&&(this.numOfImagesRequired=this.question.num_images_required),this.totalNumOfQuestions=this.questions.length}).then(()=>{this.loading=!1})},Next(){if(this.questions[this.questionNumber].questionType=="essay"){const i=this.$refs.essayAnswer.getAnswer();this.questions[this.questionNumber].userAnswer=i,this.$refs.essayAnswer.clearAnswer()}else if(this.questions[this.questionNumber].questionType=="image"){const i=this.$refs.imageAnswer.getAnswer();this.questions[this.questionNumber].userAnswer=i,this.$refs.imageAnswer.clearAnswer()}this.questionNumber++,this.questions[this.questionNumber].questionType=="essay"?this.questions[this.questionNumber].userAnswer&&this.$refs.essayAnswer.setAnswer(this.questions[this.questionNumber].userAnswer):this.questions[this.questionNumber].questionType=="image"&&(this.questions[this.questionNumber].userAnswer&&this.$refs.imageAnswer.setAnswer(this.questions[this.questionNumber].userAnswer),this.numOfImagesRequired=this.questions[this.questionNumber].num_images_required)},Previous(){if(this.questions[this.questionNumber].questionType=="essay"){const i=this.$refs.essayAnswer.getAnswer();this.questions[this.questionNumber].userAnswer=i}else if(this.questions[this.questionNumber].questionType=="image"){const i=this.$refs.imageAnswer.getAnswer();this.questions[this.questionNumber].userAnswer=i}this.questionNumber--,this.questions[this.questionNumber].questionType=="essay"?this.$refs.essayAnswer.setAnswer(this.questions[this.questionNumber].userAnswer):this.questions[this.questionNumber].questionType=="image"&&(this.$refs.imageAnswer.setAnswer(this.questions[this.questionNumber].userAnswer),this.numOfImagesRequired=this.questions[this.questionNumber].num_images_required)},async Submit(){if(this.finishTime=new Date,this.questions[this.questionNumber].questionType=="essay"){let e;e=this.$refs.essayAnswer.getAnswer(),this.questions[this.questionNumber].userAnswer=e}else if(this.questions[this.questionNumber].questionType=="image"){let e;e=this.$refs.imageAnswer.getAnswer(),this.questions[this.questionNumber].userAnswer=e}for(let e=0;e<this.questions.length;e++)this.questions[e].questionType=="mc"?(this.numMCQuestions++,this.questions[e].userAnswer==1&&this.score++):this.questions[e].questionType=="essay"?this.numEssayQuestions++:this.numImageQuestions++;if(this.numEssayQuestions===0&&this.numImageQuestions===0)this.score/this.numMCQuestions*100>=this.settingsStore.passMark?(this.MakeMastered(this.skill),this.isQuizPassed=!0,this.assessmentStatus="pass",this.showResult=!0):(this.isQuizPassed=!0,this.assessmentStatus="fails",this.showResult=!0);else if(this.settingsStore.isManualEssayMarking==1){let e="POST";this.oldAssessment!==void 0&&(e="PUT");let r=this.numEssayQuestions+this.numImageQuestions;const l={method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify({totalScore:this.totalNumOfQuestions,currentScore:this.score,numUnmarkedQuestions:r})};var i="/assessments/"+this.userDetailsStore.userId+"/"+this.skillId;const s=()=>{this.isQuizPassed=!0,this.showResult=!0,this.assessmentStatus="please wait for answers to be marked"};fetch(i,l).then(function(u){return u.json()}).then(u=>{this.assessmentId=u.id,fetch("/unmarked-answers/delete/"+this.assessmentId,{method:"DELETE"}).then(()=>{for(let a=0;a<this.questions.length;a++)if(this.questions[a].questionType=="essay"){const d={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({answer:this.questions[a].userAnswer,questionId:this.questions[a].id})};var h="/unmarked-answers/add/essay/"+this.assessmentId;fetch(h,d).then(function(_){s()})}else if(this.questions[a].questionType=="image"){const d={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({answer:this.questions[a].userAnswer,questionId:this.questions[a].id})};var h="/unmarked-answers/add/image/"+this.assessmentId;fetch(h,d).then(function(b){s()})}})})}else{for(let e=0;e<this.questions.length;e++)if(this.questions[e].questionType=="essay"){let r=this.questions[e].question,l=this.questions[e].userAnswer;await this.AIMarkEssayQuestion(r,l,e)}else if(this.questions[e].questionType=="image"){let r=this.questions[e].question,l=this.questions[e].userAnswer;await this.AIMarkImageQuestion(r,l,e)}this.score/this.questions.length*100>=this.settingsStore.passMark?(this.MakeMastered(this.skill),this.isQuizPassed=!0,this.assessmentStatus="pass",this.showResult=!0):(this.isQuizPassed=!0,this.assessmentStatus="fails",this.showResult=!0)}},async AIMarkEssayQuestion(i,e,r){this.aiLoading=!0;const l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:i,answer:e,level:this.skill.level})};await fetch("/questions/mark-essay-question",l).then(function(u){return u.json()}).then(u=>{u.isCorrect==!0?(this.score++,this.questions[r].isCorrect=!0):(this.questions[r].explanation=u.explanation,this.questions[r].isCorrect=!1)}).finally(()=>{this.aiLoading=!1})},async AIMarkImageQuestion(i,e,r){this.aiLoading=!0;const l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:i,answer:e,level:this.skill.level})};await fetch("/questions/mark-image-question",l).then(function(u){return u.json()}).then(u=>{u.isError==!0?(this.questions[r].isCorrect=!1,this.questions[r].explanation="There was an error grading this question. The file size(s) may be too big."):u.isCorrect==!0?(this.score++,this.questions[r].isCorrect=!0):(this.questions[r].explanation=u.explanation,this.questions[r].isCorrect=!1)}).finally(()=>{this.aiLoading=!1})},UserAnswer(){for(let i=0;i<this.questions.length;i++)if(this.questions[i].userAnswer==null){this.isAllQuestionsAnswered=!1;return}else this.isAllQuestionsAnswered=!0},TestPass(){this.isQuizPassed=!0},handleClickFlagIcon(){this.questions[this.questionNumber].questionType==="mc"?this.flagContentType="mc_question":this.flagContentType="essay_question",this.showFlaggingModal=!0},async MakeMastered(i){await this.userSkillsStore.MakeMastered(this.userDetailsStore.userId,i),await this.skillTreeStore.getUserSkills()}}},I=i=>(R("data-v-efd89116"),i=i(),F(),i),He={key:0},Je={key:1,class:"loading-animation d-flex justify-content-center align-items-center py-4"},Ke=I(()=>t("span",{class:"loader"},null,-1)),Ge=[Ke],Xe={key:2},Ze={key:0},st={id:"myModal",class:"modal"},et={class:"modal-content"},tt=I(()=>t("div",{class:"mb-2"}," You are taking a new quiz for this skill while your old one is still waiting to be marked. Please note that your old answers will be replaced. ",-1)),it={class:"d-flex flex-row-reverse"},nt={class:"pb-2 pb-md-0"},ot={key:0,class:"container mt-5 mb-3 p-3 pt-2 mb-3",id:"question-container"},rt={class:"row"},lt={key:0},at={class:"col d-flex my-2 gap-2 justify-content-between flex-column flex-md-row"},ut={class:"d-flex align-items-lg-center"},ct={id:"question-number-div"},dt={id:"question-content"},ht={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",style:{height:"22px",opacity:"0.5"}},mt=I(()=>t("path",{fill:"#8f7bd6",d:"M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"},null,-1)),_t=[mt],ft={key:0},gt={class:"form-check my-3"},wt={class:"control control-checkbox"},pt=["name","value","onUpdate:modelValue"],vt=["onMouseover"],yt={class:"form-group"},qt={class:"form-group"},kt={class:"mt-3 d-flex justify-content-end"},bt={key:1,id:"question-content"},At={key:5,class:"modal"},xt={class:"modal-content"},St=I(()=>t("div",{class:""},[t("p",{class:"text-center"}," Please choose an instructor before taking these quizzes. ")],-1)),Mt={class:"d-flex flex-column-reverse flex-md-row justify-content-center gap-2"},It=I(()=>t("span",null,"Back",-1)),Tt=I(()=>t("span",null,"Select Instructor",-1));function Qt(i,e,r,l,s,u){const h=y("EssayAnswer"),a=y("ImageAnswer"),d=y("AssessmentResult"),_=y("FlagModals"),b=y("RouterLink");return n(),o(w,null,[s.loading==!0?(n(),o("div",He,"Loading...")):c("",!0),s.aiLoading?(n(),o("div",Je,Ge)):c("",!0),s.loading==!1&&s.isQuizPassed==!1&&!s.needToSelectInstructor&&!s.aiLoading?(n(),o("div",Xe,[s.updatedAssessment?(n(),o("div",Ze,[t("div",st,[t("div",et,[tt,t("div",it,[t("button",{type:"button",class:"btn green-btn",onClick:e[0]||(e[0]=q=>s.updatedAssessment=!1)}," OK ")])])])])):c("",!0),t("div",nt,[s.questions.length>0?(n(),o("div",ot,[(n(!0),o(w,null,k(s.questions,(q,T)=>(n(),o("div",rt,[T==s.questionNumber?(n(),o("div",lt,[t("div",at,[t("div",ut,[t("div",ct,m(T+1),1),t("div",dt,m(q.question),1)]),t("div",{"b-tooltip.hover":"",title:"flag this question for review",onClick:e[1]||(e[1]=(...A)=>u.handleClickFlagIcon&&u.handleClickFlagIcon(...A)),class:"flagging-icon",style:{height:"50px"}},[(n(),o("svg",ht,_t))])]),q.questionType=="mc"?(n(),o("div",ft,[(n(!0),o(w,null,k(q.answerOptions,(A,Ot)=>(n(),o("div",gt,[t("label",wt,[t("div",{class:g(s.answerHoveredIndex==A.index?"my-auto mx-2 me-4 answer-option checkbox-hovered":"my-auto mx-2 me-4 answer-option")},m(A.option),3),p(t("input",{type:"radio",name:T+"answer",value:A.index,"onUpdate:modelValue":N=>s.questions[T].userAnswer=N},null,8,pt),[[P,s.questions[T].userAnswer]]),t("div",{class:"control_indicator",onMouseover:N=>s.answerHoveredIndex=A.index,onMouseleave:e[2]||(e[2]=N=>s.answerHoveredIndex=1/0)},null,40,vt)])]))),256))])):c("",!0)])):c("",!0)]))),256)),t("div",{class:g(`${s.questions[s.questionNumber].questionType=="essay"?"d-block":"d-none"}`)},[t("div",yt,[Q(h,{ref:"essayAnswer"},null,512)])],2),t("div",{class:g(`${s.questions[s.questionNumber].questionType=="image"?"d-block":"d-none"}`)},[t("div",qt,[Q(a,{numImagesRequired:s.numOfImagesRequired,ref:"imageAnswer"},null,8,["numImagesRequired"])])],2),t("div",kt,[s.questionNumber>0?(n(),o("button",{key:0,onClick:e[3]||(e[3]=q=>u.Previous()),class:"btn red-btn me-2"}," Previous ")):c("",!0),s.questionNumber<s.questions.length-1?(n(),o("button",{key:1,onClick:e[4]||(e[4]=q=>u.Next()),class:"btn green-btn"}," Next ")):c("",!0),s.questionNumber>=s.questions.length-1?(n(),o("button",{key:2,onClick:e[5]||(e[5]=q=>u.Submit()),class:"btn green-btn"}," Submit ")):c("",!0)])])):(n(),o("div",bt," There is no quiz for this skill yet. Please check again soon. "))])])):c("",!0),s.showResult?(n(),S(d,{key:3,skill:s.skill,isManualEssayMarking:l.settingsStore.isManualEssayMarking},null,8,["skill","isManualEssayMarking"])):c("",!0),s.showFlaggingModal?(n(),S(_,{key:4,userId:l.userDetailsStore.userId,contentId:s.questions[s.questionNumber].id,contentType:s.flagContentType},null,8,["userId","contentId","contentType"])):c("",!0),s.needToSelectInstructor?(n(),o("div",At,[t("div",xt,[St,t("div",Mt,[Q(b,{to:`/skills/${s.skillId}`,type:"button",class:"btn green-btn w-100 w-md-50"},{default:C(()=>[It]),_:1},8,["to"]),Q(b,{to:"/profile/edit",type:"button",class:"btn green-btn w-100 w-md-50"},{default:C(()=>[Tt]),_:1})])])])):c("",!0)],64)}const Ct=M(Ye,[["render",Qt],["__scopeId","data-v-efd89116"]]),Nt="/images/skill-avatar/recurso.png";const Lt={setup(){return{skillsStore:V()}},data(){return{skillId:this.$route.params.id,skill:{name:null,image:null,firstAncestorId:null,levelInHierarchy:null}}},async mounted(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList();for(let i=0;i<this.skillsStore.skillsList.length;i++)this.skillId==this.skillsStore.skillsList[i].id&&(this.skill.name=this.skillsStore.skillsList[i].name,this.skill.image=this.skillsStore.skillsList[i].image,this.skill.firstAncestorId=this.skillsStore.skillsList[i].first_ancestor,this.skill.levelInHierarchy=this.skillsStore.skillsList[i].hierarchy_level)},components:{Assessment:Ct}},Rt=i=>(R("data-v-0924da32"),i=i(),F(),i),Ft={id:"banner"},zt=["src"],$t={class:"container mt-3"},Vt={class:"d-flex justify-content-md-between justify-content-center"},Et={class:"d-flex flex-column flex-md-row"},Dt=["src"],Pt={key:1,id:"skill-icon",src:Nt,alt:"default skill icon"},Ut={id:"assessment-skill-name",class:"ms-3 d-flex justify-content-end"},jt=Rt(()=>t("div",{class:"mt-4 mb-4"},[t("hr",{class:"border border-2 opacity-100 w-md-75 w-100",id:"assessment-horizontal-line"})],-1));function Bt(i,e,r,l,s,u){const h=y("Assessment");return n(),o(w,null,[t("div",Ft,[t("img",{src:"/images/banners/skills-banner.png",class:"img-fluid"},null,8,zt)]),t("div",$t,[t("div",Vt,[t("div",Et,[this.skill.image?(n(),o("img",{key:0,src:this.skill.image},null,8,Dt)):(n(),o("img",Pt)),t("div",Ut,m(this.skill.name)+" Quiz ",1)])]),jt,Q(h)])],64)}const Kt=M(Lt,[["render",Bt],["__scopeId","data-v-0924da32"]]);export{Kt as default};
