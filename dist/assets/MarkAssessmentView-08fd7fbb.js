import{d as k,_ as w,o as u,c as m,a as n,t as h,n as d}from"./main-000010e3.js";import{u as c}from"./AssessmentsStore-61902b20.js";import{u as _}from"./UsersStore-24b6eac0.js";import{u as f}from"./SkillsStore-f43ee768.js";const S=k("unmarkedAnswers",{state:()=>({unmarkedAnswers:[]}),actions:{async getUnmarkedAnswers(){const s=await(await fetch("/unmarked-answers/list")).json(),i=await(await fetch("/questions/essay/list")).json();for(let r=0;r<s.length;r++)for(let o=0;o<i.length;o++)s[r].question_id==i[o].id&&(s[r].question=i[o].question);const l=await(await fetch("/assessments/list")).json();for(let r=0;r<s.length;r++)for(let o=0;o<l.length;o++)s[r].assessment_id==l[o].id&&(s[r].studentId=l[o].student_id,s[r].skillId=l[o].skill_id);return this.unmarkedAnswers=s,this.$state},async deleteUnmarkedAnswer(e){const s=await fetch("/unmarked-answers/"+e.id,{method:"DELETE"});await(await fetch("/unmarked-answers/list/"+e.assessment_id)).json()==0&&c().deleteAssessment(e.assessment_id),s.error&&console.log(s.error),this.getUnmarkedAnswers()}}});const g={setup(){const e=S(),s=c(),t=_(),i=f();return{unmarkedAnswersStore:e,usersStore:t,skillsStore:i,assessmentsStore:s}},data(){return{assessmentId:this.$route.params.id,questionNumber:0,answers:[],assessment:{}}},async created(){this.unmarkedAnswersStore.unmarkedAnswers.length==0&&await this.unmarkedAnswersStore.getUnmarkedAnswers(),this.assessmentsStore.assessments.length==0&&await this.assessmentsStore.getAssessments();for(let e=0;e<this.unmarkedAnswersStore.unmarkedAnswers.length;e++)this.unmarkedAnswersStore.unmarkedAnswers[e].assessment_id==this.assessmentId&&this.answers.push(this.unmarkedAnswersStore.unmarkedAnswers[e]);this.usersStore.users.length==0&&await this.usersStore.getUsers();for(let e=0;e<this.answers.length;e++)for(let s=0;s<this.usersStore.users.length;s++)this.answers[e].studentId==this.usersStore.users[s].id&&(this.answers[e].studentUsername=this.usersStore.users[s].username);this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList();for(let e=0;e<this.answers.length;e++)for(let s=0;s<this.skillsStore.skillsList.length;s++)this.answers[e].skillId==this.skillsStore.skillsList[s].id&&(this.answers[e].skillName=this.skillsStore.skillsList[s].name)},computed:{},methods:{Next(){this.questionNumber++},Previous(){this.questionNumber--},async MarkCorrect(e){var s="/assessments/"+e.assessment_id+"/increase-grade";await fetch(s,{method:"PUT",headers:{"Content-Type":"content/type"},body:{}}),await this.assessmentsStore.getAssessments();for(let t=0;t<this.assessmentsStore.assessments.length;t++)this.assessmentsStore.assessments[t].id==e.assessment_id&&this.assessmentsStore.assessments[t].num_unmarked_questions_remaining==0&&this.assessmentsStore.assessments[t].current_score/this.assessmentsStore.assessments[t].total_score*100>=90&&(this.MakeMastered(this.assessmentsStore.assessments[t].student_id,this.assessmentsStore.assessments[t].skill_id),alert("Student passed"));this.unmarkedAnswersStore.deleteUnmarkedAnswer(e),this.answers.splice(this.questionNumber,1)},async MarkIncorrect(e){var s="/assessments/"+e.assessment_id+"/decrease-grade";fetch(s,{method:"PUT",headers:{"Content-Type":"content/type"},body:{}}),await this.assessmentsStore.getAssessments();for(let t=0;t<this.assessmentsStore.assessments.length;t++)this.assessmentsStore.assessments[t].id==e.assessment_id&&this.assessmentsStore.assessments[t].num_unmarked_questions_remaining==0&&this.assessmentsStore.assessments[t].current_score/this.assessmentsStore.assessments[t].total_score*100<90&&alert("Student failed");this.unmarkedAnswersStore.deleteUnmarkedAnswer(e),this.answers.splice(this.questionNumber,1)},MakeMastered(e,s){var t="/user-skills/mastered/"+e+"/"+s;fetch(t).then(()=>{const i=[];for(let a=0;a<this.skillsStore.skillsList.length;a++)this.skillsStore.skillsList[a].parent==s&&i.push(this.skillsStore.skillsList[a].id);for(let a=0;a<i.length;a++)this.MakeAccessible(e,i[a])})},MakeAccessible(e,s){var t="/user-skills/accessible/"+e+"/"+s;fetch(t)}}},A={class:"container mt-3"},b=n("h1",null,"Unmarked Essay Questions",-1),p={key:0},y=n("h4",null,"Assessment Total Grade (todo)",-1),q=n("h4",null,"Student Current Grade (todo)",-1),N=n("h2",null,"Student",-1),v=n("h2",null,"Skill",-1),U=n("h2",null,"Question",-1),M={class:"mb-3"},C=n("h2",null,"Answer",-1),j={class:"mb-3"},x={key:1},I={key:2,class:"d-flex mt-3 mb-2 justify-content-between"},L={class:"d-flex"},T={key:0,class:"d-flex justify-content-end"};function $(e,s,t,i,a,l){return u(),m("div",A,[b,this.answers.length>0?(u(),m("div",p,[y,n("p",null,h(this.assessment.total_score),1),q,n("p",null,h(this.assessment.current_score),1),N,n("p",null,h(this.answers[this.questionNumber].studentUsername),1),v,n("p",null,[n("p",null,h(this.answers[this.questionNumber].skillName),1)]),U,n("div",M,h(this.answers[this.questionNumber].question),1),C,n("div",j,h(this.answers[this.questionNumber].answer),1)])):(u(),m("p",x,"No unmarked questions currently")),this.answers.length>0?(u(),m("div",I,[n("div",L,[n("button",{onClick:s[0]||(s[0]=r=>l.MarkCorrect(this.answers[this.questionNumber])),class:"btn green-btn"},"Mark Correct"),n("button",{onClick:s[1]||(s[1]=r=>l.MarkIncorrect(this.answers[this.questionNumber])),class:"btn red-btn"},"Mark Incorrect")]),this.answers.length>0?(u(),m("div",T,[this.questionNumber>0?(u(),m("button",{key:0,onClick:s[2]||(s[2]=r=>l.Previous()),class:"btn green-btn me-2"},"Previous")):d("",!0),this.questionNumber!=this.answers.length-1?(u(),m("button",{key:1,onClick:s[3]||(s[3]=r=>l.Next()),class:"btn green-btn"},"Next")):d("",!0)])):d("",!0)])):d("",!0)])}const D=w(g,[["render",$]]);export{D as default};
