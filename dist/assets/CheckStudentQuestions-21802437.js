import{u as p}from"./StudentMCQuestionsStore-652b9834.js";import{u as C}from"./InstructorStudentsStore-5d19aeb1.js";import{_ as l,r as c,o as h,c as S,d,i as a,b as i,t as Q,p as f,e as k,k as M,f as v,l as b}from"./main-9918444d.js";import{D,_ as m}from"./loading-ef01bf18.js";import{_ as L}from"./general-banner-1c13aca4.js";const x={setup(){return{}},data(){return{headers:[{text:"Student",value:"studentName"},{text:"Question",value:"question"},{text:"Skill",value:"skillName"},{text:"Date",value:"date"}],mobileHeaders:[{text:"User",value:"userName"},{text:"Skill Name",value:"name"},{text:"Comment",value:"comment"}]}},components:{Vue3EasyDataTable:D},props:["studentQuestion"],async mounted(){},methods:{goToComparePage(t){this.$router.push(`/check-student-question/${t.id}`)},formatDate(t){var e=t.replace("T"," ");e=e.replace("Z"," ");let s=e.split(/[- :]/);var o=new Date(Date.UTC(s[0],s[1]-1,s[2],s[3],s[4],s[5])),n={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};return o=o.toLocaleDateString("en-US",n),o}}},_=t=>(f("data-v-d3d61f47"),t=t(),k(),t),y={class:"mt-3 pt-4 table-div h-100"},w=_(()=>i("img",{src:m,alt:"loading data"},null,-1)),N=_(()=>i("img",{src:m,alt:"loading data"},null,-1));function T(t,e,s,o,n,u){const r=c("Vue3EasyDataTable");return h(),S("div",y,[d(r,{headers:n.headers,items:s.studentQuestion,alternating:"",loading:s.studentQuestion.length<=0,"table-class-name":"customize-table","buttons-pagination":"","theme-color":"#a48be6",onClickRow:u.goToComparePage,class:"d-none d-md-block"},{loading:a(()=>[w]),"item-date":a(({create_date:g})=>[i("div",null,Q(u.formatDate(g)),1)]),_:1},8,["headers","items","loading","onClickRow"]),d(r,{headers:n.mobileHeaders,items:s.studentQuestion,alternating:"",loading:s.studentQuestion.length<=0,"table-class-name":"customize-table","buttons-pagination":"","theme-color":"#a48be6",onClickRow:u.goToComparePage,class:"d-md-none d-block"},{loading:a(()=>[N]),_:1},8,["headers","items","loading","onClickRow"])])}const I=l(x,[["render",T],["__scopeId","data-v-d3d61f47"]]);const $={setup(){const t=p(),e=C(),s=M(),o=v(),n=b();return{studentMCQuestionsStore:t,instructorStudentsStore:e,usersStore:s,skillsStore:o,userDetailsStore:n}},data(){return{questions:[]}},components:{StudentQuestionList:I},async created(){await this.studentMCQuestionsStore.getStudentMCQuestions(),this.usersStore.users.length==0&&await this.usersStore.getUsers();for(let t=0;t<this.studentMCQuestionsStore.studentMCQuestions.length;t++)for(let e=0;e<this.usersStore.users.length;e++)this.studentMCQuestionsStore.studentMCQuestions[t].student_id==this.usersStore.users[e].id&&(this.studentMCQuestionsStore.studentMCQuestions[t].studentName=this.usersStore.users[e].username);for(let t=0;t<this.studentMCQuestionsStore.studentMCQuestions.length;t++)typeof this.studentMCQuestionsStore.studentMCQuestions[t].studentName>"u"&&(this.studentMCQuestionsStore.studentMCQuestions[t].studentName="Deleted student");this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList();for(let t=0;t<this.studentMCQuestionsStore.studentMCQuestions.length;t++)for(let e=0;e<this.skillsStore.skillsList.length;e++)this.studentMCQuestionsStore.studentMCQuestions[t].skill_id==this.skillsStore.skillsList[e].id&&(this.studentMCQuestionsStore.studentMCQuestions[t].skillName=this.skillsStore.skillsList[e].name);if(this.userDetailsStore.role=="instructor"){this.instructorStudentsStore.instructorStudentsList.length==0&&await this.instructorStudentsStore.getInstructorStudentsList();let t=[];for(let e=0;e<this.instructorStudentsStore.instructorStudentsList.length;e++)this.$parent.userDetailsStore.userId==this.instructorStudentsStore.instructorStudentsList[e].instructor_id&&t.push(this.instructorStudentsStore.instructorStudentsList[e].student_id);for(let e=0;e<this.studentMCQuestionsStore.studentMCQuestions.length;e++)for(let s=0;s<t.length;s++)this.studentMCQuestionsStore.studentMCQuestions[e].student_id==t[s]&&this.questions.push(this.studentMCQuestionsStore.studentMCQuestions[e])}else this.questions=this.studentMCQuestionsStore.studentMCQuestions,this.$parent.studentQuestionCount=this.questions.length},computed:{},methods:{}},q=i("div",{id:"banner"},[i("img",{src:L,class:"img-fluid"})],-1),U=i("div",{class:"ps-3 mt-2 page-tile"},"User Edit Content List",-1),E={class:"container-fluid"};function V(t,e,s,o,n,u){const r=c("StudentQuestionList");return h(),S("div",null,[q,U,i("div",E,[d(r,{studentQuestion:n.questions},null,8,["studentQuestion"])])])}const H=l($,[["render",V]]);export{H as C};
