import{M as s}from"./main-79843910.js";const e=s("instructorStudents",{state:()=>({instructorStudentsList:[]}),actions:{async getInstructorStudentsList(){const t=await(await fetch("/instructor-students/list")).json();return this.instructorStudentsList=t,this.$state}}});export{e as u};
