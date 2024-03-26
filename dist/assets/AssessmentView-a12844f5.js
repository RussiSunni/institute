import{_ as k,u as g,q as f,o as n,c as o,b as t,t as d,F as m,h as b,i as _,B as S,v as w,g as h,p,a as v,r as Q,e as M}from"./main-87ec4636.js";import{u as x}from"./UserSkillsStore-f9fff66a.js";import{u as I}from"./SettingsStore-73995c5d.js";import"./transform-9f729428.js";const A={setup(){const e=g(),s=x(),i=I(),a=f();return{userDetailsStore:e,userSkillsStore:s,settingsStore:i,skillsStore:a}},data(){return{skillId:this.$route.params.id,skill:{},mcQuestions:[],essayQuestions:[],questions:[],question:{},questionNumber:0,score:0,assessmentId:null,numMCQuestions:0,numEssayQuestions:0,totalNumOfQuestions:0,isAllQuestionsAnswered:!1,passModal:!1,failedModal:!1,waitForMarkModal:!1}},async created(){this.settingsStore.quizMaxQuestions==null&&await this.settingsStore.getSettings();let e;for(let s=0;s<this.skillsStore.skillsList.length;s++)this.skillsStore.skillsList[s].id==this.skillId&&(e=this.skillsStore.skillsList[s].type,this.skill=this.skillsStore.skillsList[s]);if(e!="super")await this.fetchMCQuestions(this.skillId),await this.fetchEssayQuestions(this.skillId);else{let s=[];for(let i=0;i<this.skillsStore.skillsList.length;i++)this.skillsStore.skillsList[i].parent==this.skillId&&this.skillsStore.skillsList[i].type=="sub"&&s.push(this.skillsStore.skillsList[i]);for(let i=0;i<s.length;i++)await this.fetchMCQuestions(s[i].id),await this.fetchEssayQuestions(s[i].id)}},methods:{fetchMCQuestions(e){fetch("/questions/"+e+"/multiple-choice").then(function(s){return s.json()}).then(s=>{this.mcQuestions=this.mcQuestions.concat(s)}).then(()=>{for(let i=0;i<this.mcQuestions.length;i++)this.mcQuestions[i].userAnswer=null,this.mcQuestions[i].questionType="mc";for(let i=0;i<this.mcQuestions.length;i++){var s=[];s.push({option:this.mcQuestions[i].correct_answer,index:1}),s.push({option:this.mcQuestions[i].incorrect_answer_1,index:2}),s.push({option:this.mcQuestions[i].incorrect_answer_2,index:3}),s.push({option:this.mcQuestions[i].incorrect_answer_3,index:4}),s.push({option:this.mcQuestions[i].incorrect_answer_4,index:5}),s=s.sort((a,r)=>.5-Math.random()),this.mcQuestions[i].answerOptions=s}})},fetchEssayQuestions(e){fetch("/questions/"+e+"/essay").then(function(s){return s.json()}).then(s=>{this.essayQuestions=this.essayQuestions.concat(s)}).then(()=>{for(let s=0;s<this.essayQuestions.length;s++)this.essayQuestions[s].userAnswer=null,this.essayQuestions[s].questionType="essay"}).then(()=>{this.questions=this.essayQuestions.concat(this.mcQuestions),this.questions=this.questions.sort((s,i)=>.5-Math.random()),this.questions.length>this.settingsStore.quizMaxQuestions&&(this.questions.length=this.settingsStore.quizMaxQuestions),this.question=this.questions[0],this.totalNumOfQuestions=this.questions.length})},Next(){this.questionNumber++,this.question=this.questions[this.questionNumber]},Previous(){this.questionNumber--,this.question=this.questions[this.questionNumber]},Submit(){for(let s=0;s<this.questions.length;s++)this.questions[s].questionType=="mc"?(this.numMCQuestions++,this.questions[s].userAnswer==1&&this.score++):this.numEssayQuestions++;if(this.numEssayQuestions===0)this.score/this.numMCQuestions*100>=90?(this.MakeMastered(this.skill),this.passModal=!0):this.failedModal=!0;else{const s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({totalScore:this.totalNumOfQuestions,currentScore:this.score,numUnmarkedQuestions:this.numEssayQuestions})};var e="/assessments/"+this.userDetailsStore.userId+"/"+this.skillId;const i=()=>{this.waitForMarkModal=!0};fetch(e,s).then(function(a){return a.json()}).then(a=>{this.assessmentId=a.id,fetch("/unmarked-answers/delete/"+this.assessmentId,{method:"DELETE"}).then(()=>{for(let u=0;u<this.questions.length;u++)if(this.questions[u].questionType=="essay"){const l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({answer:this.questions[u].userAnswer,questionId:this.questions[u].id})};var r="/unmarked-answers/add/"+this.assessmentId;fetch(r,l).then(function(y){i()})}})})}},async MakeMastered(e){await this.userSkillsStore.MakeMastered(this.userDetailsStore.userId,e)},UserAnswer(){for(let e=0;e<this.questions.length;e++)if(this.questions[e].userAnswer==null){this.isAllQuestionsAnswered=!1;return}else this.isAllQuestionsAnswered=!0},TestPass(){this.MakeMastered(this.skillId)}}},c=e=>(p("data-v-3177f3d7"),e=e(),v(),e),N={key:0,class:"container mt-5 mb-3 p-3 pt-2",id:"question-container"},L={class:"row"},T={class:"col d-flex my-2 gap-2 align-items-lg-center"},$={id:"question-number-div"},C={id:"question-content"},z={key:0},E={class:"form-check my-3"},V={class:"control control-checkbox"},P={class:"my-auto mx-2 me-4"},D=["value"],U=c(()=>t("div",{class:"control_indicator"},null,-1)),j={key:1},B={class:"form-group"},F={class:"mt-3 d-flex justify-content-end"},O={key:1,id:"question-content"},H={key:2},J={id:"myModal",class:"modal"},K={class:"modal-content"},Y=c(()=>t("div",{class:"d-flex align-content-center"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"50",height:"50",fill:"green"},[t("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"})]),t("div",{class:"my-auto ms-2"}," Well done! You have now mastered this skill. ")],-1)),G={class:"d-flex flex-row-reverse"},R={key:3},W={id:"myModal",class:"modal"},X={class:"modal-content"},Z=c(()=>t("div",{class:"d-flex align-content-center"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"red",width:"50",height:"50"},[t("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"})]),t("div",{class:"my-auto ms-2"}," You Failed This Time, Try Again Later ! ")],-1)),ss={class:"d-flex flex-row-reverse"},ts={key:4},es={id:"myModal",class:"modal"},is={class:"modal-content"},ns=c(()=>t("p",null," There is at least one question that needs to be marked manually. Please check whether you passed later. ",-1)),os={class:"d-flex flex-row-reverse"};function ls(e,s,i,a,r,u){return n(),o(m,null,[this.questions.length>0?(n(),o("div",N,[t("div",L,[t("div",T,[t("div",$,d(this.questionNumber+1),1),t("div",C,d(r.question.question),1)]),this.question.questionType=="mc"?(n(),o("div",z,[(n(!0),o(m,null,b(this.question.answerOptions,(l,y)=>(n(),o("div",E,[t("label",V,[t("span",P,d(l.option),1),_(t("input",{type:"radio",name:"nodeType",value:l.index,"onUpdate:modelValue":s[0]||(s[0]=q=>r.questions[this.questionNumber].userAnswer=q)},null,8,D),[[S,r.questions[this.questionNumber].userAnswer]]),U])]))),256))])):this.question.questionType=="essay"?(n(),o("div",j,[t("div",B,[_(t("textarea",{onInput:s[1]||(s[1]=l=>u.UserAnswer()),class:"form-control","onUpdate:modelValue":s[2]||(s[2]=l=>r.questions[this.questionNumber].userAnswer=l),rows:"3"},null,544),[[w,r.questions[this.questionNumber].userAnswer]])])])):h("",!0)]),t("div",F,[this.questionNumber>0?(n(),o("button",{key:0,onClick:s[3]||(s[3]=l=>u.Previous()),class:"btn red-btn me-2"}," Previous ")):h("",!0),this.questionNumber!=r.questions.length-1?(n(),o("button",{key:1,onClick:s[4]||(s[4]=l=>u.Next()),class:"btn green-btn"}," Next ")):h("",!0),this.questionNumber==r.questions.length-1?(n(),o("button",{key:2,onClick:s[5]||(s[5]=l=>u.Submit()),class:"btn green-btn"}," Submit ")):h("",!0)])])):(n(),o("div",O," There is no quiz for this skill yet. Please check again soon. ")),r.passModal?(n(),o("div",H,[t("div",J,[t("div",K,[Y,t("div",G,[t("button",{type:"button",class:"btn green-btn",onClick:s[6]||(s[6]=l=>this.$router.push("/skills/"+this.skillId))}," Great! ")])])])])):h("",!0),r.failedModal?(n(),o("div",R,[t("div",W,[t("div",X,[Z,t("div",ss,[t("button",{type:"button",class:"btn red-btn",onClick:s[7]||(s[7]=l=>this.$router.push("/skills/"+this.skillId))}," OK ")])])])])):h("",!0),r.waitForMarkModal?(n(),o("div",ts,[t("div",es,[t("div",is,[ns,t("div",os,[t("button",{type:"button",class:"btn green-btn",onClick:s[8]||(s[8]=l=>this.$router.push("/"))}," OK ")])])])])):h("",!0)],64)}const rs=k(A,[["render",ls],["__scopeId","data-v-3177f3d7"]]),us="/images/skill-avatar/recurso.png";const as={setup(){return{skillsStore:f()}},data(){return{skillId:this.$route.params.id,skill:{name:null,image:null,firstAncestorId:null,levelInHierarchy:null}}},async mounted(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList();for(let e=0;e<this.skillsStore.skillsList.length;e++)this.skillId==this.skillsStore.skillsList[e].id&&(this.skill.name=this.skillsStore.skillsList[e].name,this.skill.image=this.skillsStore.skillsList[e].image,this.skill.firstAncestorId=this.skillsStore.skillsList[e].first_ancestor,this.skill.levelInHierarchy=this.skillsStore.skillsList[e].hierarchy_level)},components:{Assessment:rs}},hs=e=>(p("data-v-7e21eeff"),e=e(),v(),e),ds={id:"banner"},cs=["src"],ms={class:"container mt-3"},_s={class:"d-flex"},ks=["src"],fs={key:1,src:us,alt:"default skill icon"},ps={class:"ms-3"},vs=hs(()=>t("div",{class:"mt-4 mb-4"},[t("hr",{class:"border border-2 opacity-100 w-75",id:"assessment-horizontal-line"})],-1));function ys(e,s,i,a,r,u){const l=Q("Assessment");return n(),o(m,null,[t("div",ds,[t("img",{src:"/images/banners/skills-banner.png",class:"img-fluid"},null,8,cs)]),t("div",ms,[t("div",_s,[this.skill.image?(n(),o("img",{key:0,src:this.skill.image},null,8,ks)):(n(),o("img",fs)),t("h1",ps,d(this.skill.name)+" Quiz",1)]),vs,M(l)])],64)}const ws=k(as,[["render",ys],["__scopeId","data-v-7e21eeff"]]);export{ws as default};
