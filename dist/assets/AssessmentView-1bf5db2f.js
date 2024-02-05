import{_ as k,u as q,q as _,o,c as r,b as i,t as c,F as f,i as p,w as d,j as y,s as g,k as a,r as Q,a as S}from"./main-23cc1a36.js";import{u as b}from"./UserSkillsStore-4416c834.js";import{u as v}from"./SettingsStore-21004a7e.js";import{u as w}from"./SkillsStore-a8e09dfc.js";import"./SkillTreeStore-b07d0afa.js";const A={setup(){const s=q(),e=b(),u=v();return{userDetailsStore:s,userSkillsStore:e,settingsStore:u}},data(){return{skillId:this.$route.params.id,mcQuestions:[],essayQuestions:[],questions:[],question:{},questionNumber:0,score:0,assessmentId:null,numMCQuestions:0,numEssayQuestions:0,totalNumOfQuestions:0,isAllQuestionsAnswered:!1}},async created(){this.settingsStore.quizMaxQuestions==null&&await this.settingsStore.getSettings(),await this.fetchMCQuestions(),await this.fetchEssayQuestions()},methods:{fetchMCQuestions(){fetch("/questions/"+this.skillId+"/multiple-choice").then(function(s){return s.json()}).then(s=>this.mcQuestions=s).then(()=>{for(let e=0;e<this.mcQuestions.length;e++)this.mcQuestions[e].userAnswer=null,this.mcQuestions[e].questionType="mc";for(let e=0;e<this.mcQuestions.length;e++){var s=[];s.push({option:this.mcQuestions[e].correct_answer,index:1}),s.push({option:this.mcQuestions[e].incorrect_answer_1,index:2}),s.push({option:this.mcQuestions[e].incorrect_answer_2,index:3}),s.push({option:this.mcQuestions[e].incorrect_answer_3,index:4}),s.push({option:this.mcQuestions[e].incorrect_answer_4,index:5}),s=s.sort((u,h)=>.5-Math.random()),this.mcQuestions[e].answerOptions=s}})},fetchEssayQuestions(){fetch("/questions/"+this.skillId+"/essay").then(function(s){return s.json()}).then(s=>this.essayQuestions=s).then(()=>{for(let s=0;s<this.essayQuestions.length;s++)this.essayQuestions[s].userAnswer=null,this.essayQuestions[s].questionType="essay"}).then(()=>{this.questions=this.essayQuestions.concat(this.mcQuestions),this.questions=this.questions.sort((s,e)=>.5-Math.random()),this.questions.length>this.settingsStore.quizMaxQuestions&&(this.questions.length=this.settingsStore.quizMaxQuestions),this.question=this.questions[0],this.totalNumOfQuestions=this.questions.length})},Next(){this.questionNumber++,this.question=this.questions[this.questionNumber]},Previous(){this.questionNumber--,this.question=this.questions[this.questionNumber]},Submit(){for(let e=0;e<this.questions.length;e++)this.questions[e].questionType=="mc"?(this.numMCQuestions++,this.questions[e].userAnswer==1&&this.score++):this.numEssayQuestions++;if(this.essayQuestions.length==0)this.score/this.numMCQuestions*100>=90?(this.MakeMastered(this.skillId),alert("Well done! You have now mastered this skill.")):alert("You failed");else{alert("There is at least one question that needs to be marked manually. Please check whether you passed later.");const e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({totalScore:this.totalNumOfQuestions,currentScore:this.score,numUnmarkedQuestions:this.numEssayQuestions})};var s="/assessments/"+this.userDetailsStore.userId+"/"+this.skillId;fetch(s,e).then(function(u){return u.json()}).then(u=>{this.assessmentId=u.id,fetch("/unmarked-answers/delete/"+this.assessmentId,{method:"DELETE"}).then(()=>{for(let t=0;t<this.questions.length;t++)if(this.questions[t].questionType=="essay"){const l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({answer:this.questions[t].userAnswer,questionId:this.questions[t].id})};var h="/unmarked-answers/add/"+this.assessmentId;fetch(h,l).then(function(n){_.push({name:"post-login"})})}})})}this.$router.push("/skills/"+this.skillId)},async MakeMastered(s){await this.userSkillsStore.MakeMastered(this.userDetailsStore.userId,s)},UserAnswer(){for(let s=0;s<this.questions.length;s++)if(this.questions[s].userAnswer==null){this.isAllQuestionsAnswered=!1;return}else this.isAllQuestionsAnswered=!0},TestPass(){this.MakeMastered(this.skillId)}}},I={key:0,class:"container mt-3 mb-3"},N={class:"row mt-3"},x={key:0},M={class:"form-check"},T=["value"],C={class:"form-check-label"},$={key:1},L={class:"form-group"},E={class:"mt-3 d-flex justify-content-end"},P={key:1};function U(s,e,u,h,t,l){return this.questions.length>0?(o(),r("div",I,[i("div",N,[i("h3",null," Question "+c(this.questionNumber+1)+": "+c(t.question.question),1),this.question.questionType=="mc"?(o(),r("div",x,[(o(!0),r(f,null,p(this.question.answerOptions,(n,Y)=>(o(),r("div",M,[d(i("input",{onInput:e[0]||(e[0]=m=>l.UserAnswer()),class:"form-check-input",type:"radio",value:n.index,"onUpdate:modelValue":e[1]||(e[1]=m=>t.questions[this.questionNumber].userAnswer=m)},null,40,T),[[y,t.questions[this.questionNumber].userAnswer]]),i("label",C,c(n.option),1)]))),256))])):this.question.questionType=="essay"?(o(),r("div",$,[i("div",L,[d(i("textarea",{onInput:e[2]||(e[2]=n=>l.UserAnswer()),class:"form-control","onUpdate:modelValue":e[3]||(e[3]=n=>t.questions[this.questionNumber].userAnswer=n),rows:"3"},null,544),[[g,t.questions[this.questionNumber].userAnswer]])])])):a("",!0)]),i("div",E,[this.questionNumber>0?(o(),r("button",{key:0,onClick:e[4]||(e[4]=n=>l.Previous()),class:"btn green-btn me-2"}," Previous ")):a("",!0),this.questionNumber!=t.questions.length-1?(o(),r("button",{key:1,onClick:e[5]||(e[5]=n=>l.Next()),class:"btn green-btn"}," Next ")):a("",!0),this.questionNumber==t.questions.length-1?(o(),r("button",{key:2,onClick:e[6]||(e[6]=n=>l.Submit()),class:"btn green-btn"}," Submit ")):a("",!0)])])):(o(),r("div",P," There is no quiz for this skill yet. Please check again soon. "))}const j=k(A,[["render",U],["__scopeId","data-v-0f650abe"]]),D={setup(){return{skillsStore:w()}},data(){return{skillId:this.$route.params.id,skill:{name:null,image:null,firstAncestorId:null,levelInHierarchy:null}}},async mounted(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList();for(let s=0;s<this.skillsStore.skillsList.length;s++)this.skillId==this.skillsStore.skillsList[s].id&&(this.skill.name=this.skillsStore.skillsList[s].name,this.skill.image=this.skillsStore.skillsList[s].image,this.skill.firstAncestorId=this.skillsStore.skillsList[s].first_ancestor,this.skill.levelInHierarchy=this.skillsStore.skillsList[s].hierarchy_level)},components:{Assessment:j}},V={id:"banner"},z=["src"],B={class:"container mt-3"},H={class:"d-flex"},O=["src"],F={class:"ms-3"};function J(s,e,u,h,t,l){const n=Q("Assessment");return o(),r(f,null,[i("div",V,[i("img",{src:"/images/banners/skills/"+this.skill.firstAncestorId+"/"+this.skill.levelInHierarchy+".png",class:"img-fluid"},null,8,z)]),i("div",B,[i("div",H,[i("img",{src:this.skill.image},null,8,O),i("h1",F,c(this.skill.name)+" Quiz",1)]),S(n)])],64)}const Z=k(D,[["render",J]]);export{Z as default};
