import{L as e}from"./main-574588f4.js";const o=e("student-mc-questions",{state:()=>({studentMCQuestions:[]}),actions:{async getStudentMCQuestions(){const t=await(await fetch("/questions/student-mc-questions/list")).json();this.studentMCQuestions=t},async deleteStudentMCQuestion(s){const t=fetch("/questions/student-mc-questions/"+s,{method:"DELETE"});t.error&&console.log(t.error)}}});export{o as u};
