import{O as _,_ as g,x as f,g as S,E as y,r as A,o as l,c as d,d as a,s as k,t as u,b as h,e as p,m as b,F as I,p as v,f as N}from"./main-c0fbedf2.js";import{u as w}from"./AssessmentsStore-1482ac41.js";import{_ as q}from"./general-banner-1c13aca4.js";const M=_("unmarkedAnswers",{state:()=>({unmarkedEssayAnswers:[],unmarkedImageAnswers:[]}),actions:{async getUnmarkedEssayAnswers(){const s=await(await fetch("/unmarked-answers/essay/list")).json(),o=await(await fetch("/questions/essay/list")).json();for(let t=0;t<s.length;t++)for(let n=0;n<o.length;n++)s[t].question_id==o[n].id&&(s[t].question=o[n].question);const r=await(await fetch("/assessments/list")).json();for(let t=0;t<s.length;t++)for(let n=0;n<r.length;n++)s[t].assessment_id==r[n].id&&(s[t].studentId=r[n].student_id,s[t].skillId=r[n].skill_id);return this.unmarkedEssayAnswers=s,this.$state},async getUnmarkedImageAnswers(){const s=await(await fetch("/unmarked-answers/image/list")).json(),o=await(await fetch("/questions/image/list")).json();for(let t=0;t<s.length;t++)for(let n=0;n<o.length;n++)s[t].question_id==o[n].id&&(s[t].question=o[n].question);const r=await(await fetch("/assessments/list")).json();for(let t=0;t<s.length;t++)for(let n=0;n<r.length;n++)s[t].assessment_id==r[n].id&&(s[t].studentId=r[n].student_id,s[t].skillId=r[n].skill_id);return this.unmarkedImageAnswers=s,this.$state},async deleteUnmarkedEssayAnswer(e){const s=await fetch("/unmarked-answers/essay/"+e.id,{method:"DELETE"});console.log("deleteUnmarkedEssayAnswer");const o=await(await fetch("/unmarked-answers/essay/list/"+e.assessment_id)).json(),r=await(await fetch("/unmarked-answers/image/list/"+e.assessment_id)).json();let t=o+r;console.log(t),t==0&&w().deleteAssessment(e.assessment_id),s.error&&console.log(s.error),this.getUnmarkedEssayAnswers()},async deleteUnmarkedImageAnswer(e){const s=await fetch("/unmarked-answers/image/"+e.id,{method:"DELETE"});console.log("deleteUnmarkedImageAnswer");const o=await(await fetch("/unmarked-answers/essay/list/"+e.assessment_id)).json(),r=await(await fetch("/unmarked-answers/image/list/"+e.assessment_id)).json();let t=o+r;console.log(t),t==0&&w().deleteAssessment(e.assessment_id),s.error&&console.log(s.error),this.getUnmarkedImageAnswers()}}});const U={setup(){const e=M(),s=w(),i=f(),o=S(),m=y();return{unmarkedAnswersStore:e,usersStore:i,skillsStore:o,assessmentsStore:s,userSkillsStore:m}},data(){return{assessmentId:this.$route.params.id,questionNumber:0,answers:[],assessment:{},skill:{},studentName:"",skillName:"",showModal:!1,modalMessage:"",isFailed:!1}},async created(){this.unmarkedAnswersStore.unmarkedEssayAnswers.length==0&&await this.unmarkedAnswersStore.getUnmarkedEssayAnswers(),this.unmarkedAnswersStore.unmarkedImageAnswers.length==0&&await this.unmarkedAnswersStore.getUnmarkedImageAnswers(),this.assessmentsStore.assessments.length==0&&await this.assessmentsStore.getAssessments();for(let e=0;e<this.unmarkedAnswersStore.unmarkedEssayAnswers.length;e++)if(this.unmarkedAnswersStore.unmarkedEssayAnswers[e].assessment_id==this.assessmentId){let s=this.unmarkedAnswersStore.unmarkedEssayAnswers[e];s.type="essay",this.answers.push(s)}for(let e=0;e<this.unmarkedAnswersStore.unmarkedImageAnswers.length;e++)if(this.unmarkedAnswersStore.unmarkedImageAnswers[e].assessment_id==this.assessmentId){let s=this.unmarkedAnswersStore.unmarkedImageAnswers[e];s.type="image",this.answers.push(s)}for(let e=0;e<this.assessmentsStore.assessments.length;e++)this.assessmentsStore.assessments[e].id==this.assessmentId&&(this.assessment=this.assessmentsStore.assessments[e]);this.usersStore.users.length==0&&await this.usersStore.getUsers();for(let e=0;e<this.answers.length;e++)for(let s=0;s<this.usersStore.users.length;s++)this.answers[e].studentId==this.usersStore.users[s].id&&(this.answers[e].studentUsername=this.usersStore.users[s].username,this.studentName=this.usersStore.users[s].username);this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList();for(let e=0;e<this.answers.length;e++)for(let s=0;s<this.skillsStore.skillsList.length;s++)this.answers[e].skillId==this.skillsStore.skillsList[s].id&&(this.answers[e].skillName=this.skillsStore.skillsList[s].name,this.skill=this.skillsStore.skillsList[s],this.skillName=this.skillsStore.skillsList[s].name)},computed:{},methods:{Next(){this.questionNumber++},Previous(){this.questionNumber--},dateFormat(){return new Date(this.assessment.date).toLocaleDateString("default",{weekday:"short",year:"numeric",month:"short",day:"numeric"})},async MarkCorrect(e){var s="/assessments/"+e.assessment_id+"/increase-grade";await fetch(s,{method:"PUT",headers:{"Content-Type":"content/type"},body:{}}),await this.assessmentsStore.getAssessments();for(let i=0;i<this.assessmentsStore.assessments.length;i++)this.assessmentsStore.assessments[i].id==e.assessment_id&&(this.assessment=this.assessmentsStore.assessments[i],this.assessmentsStore.assessments[i].num_unmarked_questions_remaining==0&&(this.assessmentsStore.assessments[i].current_score/this.assessmentsStore.assessments[i].total_score*100>=90?(this.MakeMastered(this.assessmentsStore.assessments[i].student_id,this.skill),this.modalMessage="Student passed",this.showModal=!0,this.isFailed=!1):(this.modalMessage="Student failed",this.showModal=!0,this.isFailed=!0)));e.type=="essay"?this.unmarkedAnswersStore.deleteUnmarkedEssayAnswer(e):this.unmarkedAnswersStore.deleteUnmarkedImageAnswer(e),this.answers.splice(this.questionNumber,1),this.assessment.date=this.dateFormat()},async MarkIncorrect(e){var s="/assessments/"+e.assessment_id+"/decrease-grade";fetch(s,{method:"PUT",headers:{"Content-Type":"content/type"},body:{}}),await this.assessmentsStore.getAssessments();for(let i=0;i<this.assessmentsStore.assessments.length;i++)this.assessmentsStore.assessments[i].id==e.assessment_id&&this.assessmentsStore.assessments[i].num_unmarked_questions_remaining==0&&this.assessmentsStore.assessments[i].current_score/this.assessmentsStore.assessments[i].total_score*100<90&&(this.modalMessage="Student failed",this.isFailed=!0,this.showModal=!0);e.type=="essay"?this.unmarkedAnswersStore.deleteUnmarkedEssayAnswer(e):this.unmarkedAnswersStore.deleteUnmarkedImageAnswer(e),this.answers.splice(this.questionNumber,1),this.assessment.date=this.dateFormat()},async MakeMastered(e,s){await this.userSkillsStore.MakeMastered(e,s)}}},c=e=>(v("data-v-a5feaa24"),e=e(),N(),e),E=c(()=>a("div",{id:"banner"},[a("img",{src:q,class:"img-fluid"})],-1)),j={class:"container mt-3 pb-4"},x=c(()=>a("div",{id:"page-tile"},"Unmarked Questions",-1)),C={id:"assessment-info"},L={id:"date"},T={key:0},F={id:"question-bg"},O={class:"d-flex w-100 flex-row justify-content-end"},V=c(()=>a("span",{"b-tooltip.hover":"",title:"The student needs to get at least 90% to pass",id:"score-text",class:"me-2"}," score: ",-1)),D={"b-tooltip.hover":"",title:"current score",id:"current-score"},P={title:"total score",id:"total-score"},$={id:"question",class:"mb-3"},B=["innerHTML"],H={key:1,id:"image-answer",class:"mb-3"},Q=["src"],K=["src"],z=["src"],G=["src"],J=["src"],R={key:1,class:"d-flex flex-column"},W=c(()=>a("p",null,"No unmarked questions currently",-1)),X={key:0},Y={key:1},Z={key:2,class:"d-flex mt-3 mb-2"},ss={class:"d-flex w-100 justify-content-lg-center gap-2"},es={key:0,class:"d-flex justify-content-end"},ts={key:0},ns={id:"myModal",class:"modal"},as={class:"modal-content"},is={class:"modal-message"},rs={style:{display:"flex",gap:"10px"}};function os(e,s,i,o,m,r){const t=A("router-link");return l(),d(I,null,[E,a("div",j,[x,a("div",C,[k(u(this.studentName)+" : "+u(this.skillName)+" ",1),a("span",L,u(this.assessment.date),1)]),this.answers.length>0?(l(),d("div",T,[a("div",F,[a("div",O,[V,a("span",D,u(this.assessment.current_score)+" / ",1),a("span",P,u(this.assessment.total_score),1)]),a("div",$,u(this.answers[this.questionNumber].question),1),this.answers[this.questionNumber].type=="essay"?(l(),d("div",{key:0,id:"essay-answer",class:"mb-3",innerHTML:this.answers[this.questionNumber].answer},null,8,B)):(l(),d("div",H,[a("img",{src:this.answers[this.questionNumber].answer_1},null,8,Q),a("img",{src:this.answers[this.questionNumber].answer_2},null,8,K),a("img",{src:this.answers[this.questionNumber].answer_3},null,8,z),a("img",{src:this.answers[this.questionNumber].answer_4},null,8,G),a("img",{src:this.answers[this.questionNumber].answer_5},null,8,J)]))])])):(l(),d("div",R,[W,m.isFailed?(l(),d("p",X,"Student has failed")):(l(),d("p",Y,"Student has passed and mastered this skill"))])),this.answers.length>0?(l(),d("div",Z,[a("div",ss,[a("button",{onClick:s[0]||(s[0]=n=>r.MarkCorrect(this.answers[this.questionNumber])),class:"btn green-btn"}," Mark Correct "),a("button",{onClick:s[1]||(s[1]=n=>r.MarkIncorrect(this.answers[this.questionNumber])),class:"btn red-btn"}," Mark Incorrect ")]),this.answers.length>0?(l(),d("div",es,[this.questionNumber>0?(l(),d("button",{key:0,onClick:s[2]||(s[2]=n=>r.Previous()),class:"btn green-btn me-2"}," Previous ")):h("",!0),this.questionNumber!=this.answers.length-1?(l(),d("button",{key:1,onClick:s[3]||(s[3]=n=>r.Next()),class:"btn green-btn"}," Next ")):h("",!0)])):h("",!0)])):h("",!0)]),m.showModal?(l(),d("div",ts,[a("div",ns,[a("div",as,[a("p",is,u(m.modalMessage),1),a("div",rs,[p(t,{class:"btn green-btn",to:"/"},{default:b(()=>[k("To Hub")]),_:1}),a("button",{class:"btn purple-btn",onClick:s[4]||(s[4]=n=>m.showModal=!1)}," OK ")])])])])):h("",!0)],64)}const us=g(U,[["render",os],["__scopeId","data-v-a5feaa24"]]);export{us as default};
