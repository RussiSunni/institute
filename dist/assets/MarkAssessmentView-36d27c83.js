import{O as k,_ as w,D as _,o as l,c as u,b as n,t as m,h}from"./main-0144cae7.js";import{u as c}from"./AssessmentsStore-a8989151.js";import{u as S}from"./UsersStore-69689ced.js";import{u as f}from"./UserSkillsStore-ad235371.js";const g=k("unmarkedAnswers",{state:()=>({unmarkedAnswers:[]}),actions:{async getUnmarkedAnswers(){const s=await(await fetch("/unmarked-answers/list")).json(),o=await(await fetch("/questions/essay/list")).json();for(let r=0;r<s.length;r++)for(let i=0;i<o.length;i++)s[r].question_id==o[i].id&&(s[r].question=o[i].question);const a=await(await fetch("/assessments/list")).json();for(let r=0;r<s.length;r++)for(let i=0;i<a.length;i++)s[r].assessment_id==a[i].id&&(s[r].studentId=a[i].student_id,s[r].skillId=a[i].skill_id);return this.unmarkedAnswers=s,this.$state},async deleteUnmarkedAnswer(e){const s=await fetch("/unmarked-answers/"+e.id,{method:"DELETE"});await(await fetch("/unmarked-answers/list/"+e.assessment_id)).json()==0&&c().deleteAssessment(e.assessment_id),s.error&&console.log(s.error),this.getUnmarkedAnswers()}}});const A={setup(){const e=g(),s=c(),t=S(),o=_(),d=f();return{unmarkedAnswersStore:e,usersStore:t,skillsStore:o,assessmentsStore:s,userSkillsStore:d}},data(){return{assessmentId:this.$route.params.id,questionNumber:0,answers:[],assessment:{}}},async created(){this.unmarkedAnswersStore.unmarkedAnswers.length==0&&await this.unmarkedAnswersStore.getUnmarkedAnswers(),this.assessmentsStore.assessments.length==0&&await this.assessmentsStore.getAssessments();for(let e=0;e<this.unmarkedAnswersStore.unmarkedAnswers.length;e++)this.unmarkedAnswersStore.unmarkedAnswers[e].assessment_id==this.assessmentId&&this.answers.push(this.unmarkedAnswersStore.unmarkedAnswers[e]);this.usersStore.users.length==0&&await this.usersStore.getUsers();for(let e=0;e<this.answers.length;e++)for(let s=0;s<this.usersStore.users.length;s++)this.answers[e].studentId==this.usersStore.users[s].id&&(this.answers[e].studentUsername=this.usersStore.users[s].username);this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList();for(let e=0;e<this.answers.length;e++)for(let s=0;s<this.skillsStore.skillsList.length;s++)this.answers[e].skillId==this.skillsStore.skillsList[s].id&&(this.answers[e].skillName=this.skillsStore.skillsList[s].name)},computed:{},methods:{Next(){this.questionNumber++},Previous(){this.questionNumber--},async MarkCorrect(e){var s="/assessments/"+e.assessment_id+"/increase-grade";await fetch(s,{method:"PUT",headers:{"Content-Type":"content/type"},body:{}}),await this.assessmentsStore.getAssessments();for(let t=0;t<this.assessmentsStore.assessments.length;t++)this.assessmentsStore.assessments[t].id==e.assessment_id&&this.assessmentsStore.assessments[t].num_unmarked_questions_remaining==0&&this.assessmentsStore.assessments[t].current_score/this.assessmentsStore.assessments[t].total_score*100>=90&&(this.MakeMastered(this.assessmentsStore.assessments[t].student_id,this.assessmentsStore.assessments[t].skill_id),alert("Student passed"));this.unmarkedAnswersStore.deleteUnmarkedAnswer(e),this.answers.splice(this.questionNumber,1)},async MarkIncorrect(e){var s="/assessments/"+e.assessment_id+"/decrease-grade";fetch(s,{method:"PUT",headers:{"Content-Type":"content/type"},body:{}}),await this.assessmentsStore.getAssessments();for(let t=0;t<this.assessmentsStore.assessments.length;t++)this.assessmentsStore.assessments[t].id==e.assessment_id&&this.assessmentsStore.assessments[t].num_unmarked_questions_remaining==0&&this.assessmentsStore.assessments[t].current_score/this.assessmentsStore.assessments[t].total_score*100<90&&alert("Student failed");this.unmarkedAnswersStore.deleteUnmarkedAnswer(e),this.answers.splice(this.questionNumber,1)},async MakeMastered(e,s){await this.userSkillsStore.MakeMastered(e,s)}}},b={class:"container mt-3"},p=n("h1",null,"Unmarked Essay Questions",-1),y={key:0},q=n("h4",null,"Assessment Total Grade (todo)",-1),N=n("h4",null,"Student Current Grade (todo)",-1),v=n("h2",null,"Student",-1),U=n("h2",null,"Skill",-1),M=n("h2",null,"Question",-1),C={class:"mb-3"},I=n("h2",null,"Answer",-1),j={class:"mb-3"},x={key:1},L={key:2,class:"d-flex mt-3 mb-2 justify-content-between"},T={class:"d-flex"},$={key:0,class:"d-flex justify-content-end"};function E(e,s,t,o,d,a){return l(),u("div",b,[p,this.answers.length>0?(l(),u("div",y,[q,n("p",null,m(this.assessment.total_score),1),N,n("p",null,m(this.assessment.current_score),1),v,n("p",null,m(this.answers[this.questionNumber].studentUsername),1),U,n("p",null,[n("p",null,m(this.answers[this.questionNumber].skillName),1)]),M,n("div",C,m(this.answers[this.questionNumber].question),1),I,n("div",j,m(this.answers[this.questionNumber].answer),1)])):(l(),u("p",x,"No unmarked questions currently")),this.answers.length>0?(l(),u("div",L,[n("div",T,[n("button",{onClick:s[0]||(s[0]=r=>a.MarkCorrect(this.answers[this.questionNumber])),class:"btn green-btn"},"Mark Correct"),n("button",{onClick:s[1]||(s[1]=r=>a.MarkIncorrect(this.answers[this.questionNumber])),class:"btn red-btn"},"Mark Incorrect")]),this.answers.length>0?(l(),u("div",$,[this.questionNumber>0?(l(),u("button",{key:0,onClick:s[2]||(s[2]=r=>a.Previous()),class:"btn green-btn me-2"},"Previous")):h("",!0),this.questionNumber!=this.answers.length-1?(l(),u("button",{key:1,onClick:s[3]||(s[3]=r=>a.Next()),class:"btn green-btn"},"Next")):h("",!0)])):h("",!0)])):h("",!0)])}const O=w(A,[["render",E]]);export{O as default};
