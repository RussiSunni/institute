import{_ as k,u as p,E as q,o as l,c as r,a as i,t as c,F as f,r as y,w as m,R as g,v as S,d as a,e as Q,h as b}from"./main-a228213a.js";import{u as v}from"./UserSkillsStore-cbb6175e.js";import{u as w}from"./SettingsStore-a9ca55b9.js";import{u as _}from"./SkillsStore-49f0ef28.js";import{_ as I}from"./institute-collins-2-184bdfcb.js";const A={setup(){const e=p(),s=v(),t=w(),h=_();return{userDetailsStore:e,userSkillsStore:s,settingsStore:t,skillsStore:h}},data(){return{skillId:this.$route.params.id,mcQuestions:[],essayQuestions:[],questions:[],question:{},questionNumber:0,score:0,assessmentId:null,numMCQuestions:0,numEssayQuestions:0,totalNumOfQuestions:0,isAllQuestionsAnswered:!1}},async created(){this.settingsStore.quizMaxQuestions==null&&await this.settingsStore.getSettings();let e;for(let s=0;s<this.skillsStore.skillsList.length;s++)this.skillsStore.skillsList[s].id==this.skillId&&(e=this.skillsStore.skillsList[s].type);if(e!="super")await this.fetchMCQuestions(this.skillId),await this.fetchEssayQuestions(this.skillId);else{let s=[];for(let t=0;t<this.skillsStore.skillsList.length;t++)this.skillsStore.skillsList[t].parent==this.skillId&&this.skillsStore.skillsList[t].type=="sub"&&s.push(this.skillsStore.skillsList[t]);for(let t=0;t<s.length;t++)await this.fetchMCQuestions(s[t].id),await this.fetchEssayQuestions(s[t].id)}},methods:{fetchMCQuestions(e){fetch("/questions/"+e+"/multiple-choice").then(function(s){return s.json()}).then(s=>{this.mcQuestions=this.mcQuestions.concat(s)}).then(()=>{for(let t=0;t<this.mcQuestions.length;t++)this.mcQuestions[t].userAnswer=null,this.mcQuestions[t].questionType="mc";for(let t=0;t<this.mcQuestions.length;t++){var s=[];s.push({option:this.mcQuestions[t].correct_answer,index:1}),s.push({option:this.mcQuestions[t].incorrect_answer_1,index:2}),s.push({option:this.mcQuestions[t].incorrect_answer_2,index:3}),s.push({option:this.mcQuestions[t].incorrect_answer_3,index:4}),s.push({option:this.mcQuestions[t].incorrect_answer_4,index:5}),s=s.sort((h,n)=>.5-Math.random()),this.mcQuestions[t].answerOptions=s}})},fetchEssayQuestions(e){fetch("/questions/"+e+"/essay").then(function(s){return s.json()}).then(s=>{this.essayQuestions=this.essayQuestions.concat(s)}).then(()=>{for(let s=0;s<this.essayQuestions.length;s++)this.essayQuestions[s].userAnswer=null,this.essayQuestions[s].questionType="essay"}).then(()=>{this.questions=this.essayQuestions.concat(this.mcQuestions),this.questions=this.questions.sort((s,t)=>.5-Math.random()),this.questions.length>this.settingsStore.quizMaxQuestions&&(this.questions.length=this.settingsStore.quizMaxQuestions),this.question=this.questions[0],this.totalNumOfQuestions=this.questions.length})},Next(){this.questionNumber++,this.question=this.questions[this.questionNumber]},Previous(){this.questionNumber--,this.question=this.questions[this.questionNumber]},Submit(){for(let s=0;s<this.questions.length;s++)this.questions[s].questionType=="mc"?(this.numMCQuestions++,this.questions[s].userAnswer==1&&this.score++):this.numEssayQuestions++;if(this.essayQuestions.length==0)this.score/this.numMCQuestions*100>=90?(this.MakeMastered(this.skillId),alert("Well done! You have now mastered this skill.")):alert("You failed");else{alert("There is at least one question that needs to be marked manually. Please check whether you passed later.");const s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({totalScore:this.totalNumOfQuestions,currentScore:this.score,numUnmarkedQuestions:this.numEssayQuestions})};var e="/assessments/"+this.userDetailsStore.userId+"/"+this.skillId;fetch(e,s).then(function(t){return t.json()}).then(t=>{this.assessmentId=t.id,fetch("/unmarked-answers/delete/"+this.assessmentId,{method:"DELETE"}).then(()=>{for(let n=0;n<this.questions.length;n++)if(this.questions[n].questionType=="essay"){const u={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({answer:this.questions[n].userAnswer,questionId:this.questions[n].id})};var h="/unmarked-answers/add/"+this.assessmentId;fetch(h,u).then(function(o){q.push({name:"post-login"})})}})})}this.$router.push("/skills/"+this.skillId)},async MakeMastered(e){await this.userSkillsStore.MakeMastered(this.userDetailsStore.userId,e)},UserAnswer(){for(let e=0;e<this.questions.length;e++)if(this.questions[e].userAnswer==null){this.isAllQuestionsAnswered=!1;return}else this.isAllQuestionsAnswered=!0},TestPass(){this.MakeMastered(this.skillId)}}},N={key:0,class:"container mt-3 mb-3"},x={class:"row mt-3"},M={key:0},L={class:"form-check"},T=["value"],$={class:"form-check-label"},C={key:1},E={class:"form-group"},P={class:"mt-3 d-flex justify-content-end"},U={key:1};function D(e,s,t,h,n,u){return this.questions.length>0?(l(),r("div",N,[i("div",x,[i("h3",null," Question "+c(this.questionNumber+1)+": "+c(n.question.question),1),this.question.questionType=="mc"?(l(),r("div",M,[(l(!0),r(f,null,y(this.question.answerOptions,(o,X)=>(l(),r("div",L,[m(i("input",{onInput:s[0]||(s[0]=d=>u.UserAnswer()),class:"form-check-input",type:"radio",value:o.index,"onUpdate:modelValue":s[1]||(s[1]=d=>n.questions[this.questionNumber].userAnswer=d)},null,40,T),[[g,n.questions[this.questionNumber].userAnswer]]),i("label",$,c(o.option),1)]))),256))])):this.question.questionType=="essay"?(l(),r("div",C,[i("div",E,[m(i("textarea",{onInput:s[2]||(s[2]=o=>u.UserAnswer()),class:"form-control","onUpdate:modelValue":s[3]||(s[3]=o=>n.questions[this.questionNumber].userAnswer=o),rows:"3"},null,544),[[S,n.questions[this.questionNumber].userAnswer]])])])):a("",!0)]),i("div",P,[this.questionNumber>0?(l(),r("button",{key:0,onClick:s[4]||(s[4]=o=>u.Previous()),class:"btn green-btn me-2"}," Previous ")):a("",!0),this.questionNumber!=n.questions.length-1?(l(),r("button",{key:1,onClick:s[5]||(s[5]=o=>u.Next()),class:"btn green-btn"}," Next ")):a("",!0),this.questionNumber==n.questions.length-1?(l(),r("button",{key:2,onClick:s[6]||(s[6]=o=>u.Submit()),class:"btn green-btn"}," Submit ")):a("",!0)])])):(l(),r("div",U," There is no quiz for this skill yet. Please check again soon. "))}const j=k(A,[["render",D],["__scopeId","data-v-80dba6ee"]]),z="/images/skill-avatar/recurso.png",V={setup(){return{skillsStore:_()}},data(){return{skillId:this.$route.params.id,skill:{name:null,image:null,firstAncestorId:null,levelInHierarchy:null}}},async mounted(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList();for(let e=0;e<this.skillsStore.skillsList.length;e++)this.skillId==this.skillsStore.skillsList[e].id&&(this.skill.name=this.skillsStore.skillsList[e].name,this.skill.image=this.skillsStore.skillsList[e].image,this.skill.firstAncestorId=this.skillsStore.skillsList[e].first_ancestor,this.skill.levelInHierarchy=this.skillsStore.skillsList[e].hierarchy_level,console.log(this.skillsStore.skillsList[e]))},components:{Assessment:j}},B={id:"banner"},H=i("img",{src:I,alt:"static banner",class:"img-fluid"},null,-1),O=["src"],F={class:"container mt-3"},J={class:"d-flex"},R={key:0,src:z,alt:"skill avatar"},Y=["src"],W={class:"ms-3"},G=i("div",{class:"horizontal-line"},[i("br"),i("hr",{class:"border border-2 opacity-100",style:{"border-color":"#aea3ce"}})],-1);function K(e,s,t,h,n,u){const o=Q("Assessment");return l(),r(f,null,[i("div",B,[H,i("img",{src:"/images/banners/skills/"+this.skill.firstAncestorId+"/"+this.skill.levelInHierarchy+".png",class:"img-fluid"},null,8,O)]),i("div",F,[i("div",J,[this.skill.image?a("",!0):(l(),r("img",R)),i("img",{src:this.skill.image},null,8,Y),i("h1",W,c(this.skill.name)+" Quiz",1)]),G,b(o)])],64)}const ns=k(V,[["render",K]]);export{ns as default};
