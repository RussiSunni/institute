import{u as h}from"./AssessmentsStore-6205f10b.js";import{u as m}from"./UsersStore-03aa775a.js";import{u as S}from"./SkillsStore-057aa5de.js";import{_ as c,u as f,e as _,o as r,c as i,F as k,r as g,a as l,f as p,g as L,h as w,t as n}from"./main-b39c1666.js";import{u as U}from"./InstructorStudentsStore-7033ae43.js";const I={setup(){const s=h(),t=m(),o=S(),a=f(),u=U();return{usersStore:t,skillsStore:o,assessmentsStore:s,userDetailsStore:a,instructorStudentsStore:u}},data(){return{assessments:[],studentIds:[]}},async created(){this.assessmentsStore.assessments.length==0&&await this.assessmentsStore.getAssessments(),this.instructorStudentsStore.instructorStudentsList.length==0&&await this.instructorStudentsStore.getInstructorStudentsList();for(let s=0;s<this.instructorStudentsStore.instructorStudentsList.length;s++)this.userDetailsStore.userId==this.instructorStudentsStore.instructorStudentsList[s].instructor_id&&this.studentIds.push(this.instructorStudentsStore.instructorStudentsList[s].student_id);for(let s=0;s<this.assessmentsStore.assessments.length;s++)for(let t=0;t<this.studentIds.length;t++)this.assessmentsStore.assessments[s].student_id==this.studentIds[t]&&this.assessments.push(this.assessmentsStore.assessments[s]);for(let s=0;s<this.assessments.length;s++){let t=new Date(this.assessments[s].date).toDateString();this.assessments[s].date=t}this.usersStore.users.length==0&&await this.usersStore.getUsers();for(let s=0;s<this.assessments.length;s++)for(let t=0;t<this.usersStore.users.length;t++)this.assessments[s].student_id==this.usersStore.users[t].id&&(this.assessments[s].studentUsername=this.usersStore.users[t].username);this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList();for(let s=0;s<this.assessments.length;s++)for(let t=0;t<this.skillsStore.skillsList.length;t++)this.assessments[s].skill_id==this.skillsStore.skillsList[t].id&&(this.assessments[s].skillName=this.skillsStore.skillsList[t].name)},computed:{},methods:{}},x={class:"container mt-3"},D=l("h1",null,"Unmarked Assessments",-1);function A(s,t,o,a,u,N){const d=_("RouterLink");return r(),i("div",x,[D,(r(!0),i(k,null,g(this.assessments,e=>(r(),i("ul",null,[l("li",null,[p(d,{to:"/mark-assessment/"+e.id},{default:L(()=>[w(n(e.studentUsername)+", "+n(e.skillName)+", "+n(e.date),1)]),_:2},1032,["to"])])]))),256))])}const B=c(I,[["render",A]]);export{B as default};
