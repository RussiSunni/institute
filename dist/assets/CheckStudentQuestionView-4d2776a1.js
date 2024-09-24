import{_ as p,s as b,f,x as S,B as c,o as _,c as h,b as s,t as m,w as r,i as l,a as w,p as q,e as k}from"./main-bece9244.js";import{u as v}from"./StudentMCQuestionsStore-9118cba9.js";import{_ as M}from"./general-banner-1c13aca4.js";const Q={setup(){const t=v(),e=b(),a=f(),d=S();return{studentMCQuestionsStore:t,usersStore:e,skillsStore:a,userDetailsStore:d}},data(){return{studentQuestionId:this.$route.params.id,question:{name:"",question:"",correct_answer:"",incorrect_answer_1:"",incorrect_answer_2:"",incorrect_answer_3:"",incorrect_answer_4:"",question:"",explanation:"",skill_id:""},isEditMode:!1,studentName:null,skillName:null}},async created(){await this.studentMCQuestionsStore.getStudentMCQuestions();for(let t=0;t<this.studentMCQuestionsStore.studentMCQuestions.length;t++)this.studentMCQuestionsStore.studentMCQuestions[t].id==this.studentQuestionId&&(this.question=this.studentMCQuestionsStore.studentMCQuestions[t]);await this.usersStore.getUsers();for(let t=0;t<this.usersStore.users.length;t++)this.question.student_id==this.usersStore.users[t].id&&(this.studentName=this.usersStore.users[t].username);this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList();for(let t=0;t<this.skillsStore.skillsList.length;t++)this.question.skill_id==this.skillsStore.skillsList[t].id&&(this.skillName=this.skillsStore.skillsList[t].name)},methods:{deleteStudentQuestion(){confirm("Delete this question?")&&(this.studentMCQuestionsStore.deleteStudentMCQuestion(this.studentQuestionId),c.push({name:"hub"}))},saveToQuestionBank(){const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"User: "+this.question.student_id,question:this.question.question,correct_answer:this.question.correct_answer,incorrect_answer_1:this.question.incorrect_answer_1,incorrect_answer_2:this.question.incorrect_answer_2,incorrect_answer_3:this.question.incorrect_answer_3,incorrect_answer_4:this.question.incorrect_answer_4,explanation:this.question.explanation,skill_id:this.question.skill_id})};var e="/questions/mc-questions/add";fetch(e,t).then(()=>{this.studentMCQuestionsStore.deleteStudentMCQuestion(this.studentQuestionId),c.push({name:"hub"})})},editMode(){this.isEditMode=!0}}},n=t=>(q("data-v-6d6008f8"),t=t(),k(),t),C={id:"banner"},x=n(()=>s("img",{src:M,class:"img-fluid"},null,-1)),g={class:"container mt-3 pb-3"},y={class:"row"},E={class:"col-10"},U={id:"header-tile"},V={id:"header-tile"},N={class:"main-content-container container-fluid mt-4"},D={class:"row p-0"},I={id:"form-container",class:"col p-4"},B={class:"mb-3"},L=n(()=>s("label",{for:"last_name",class:"form-label"},"Question",-1)),T=["disabled"],W={class:"mb-3"},O=n(()=>s("label",{class:"form-label"},"Correct answer",-1)),j=["disabled"],J={class:"mb-3"},P=n(()=>s("label",{class:"form-label"},"Wrong answer 1",-1)),z=["disabled"],A={class:"mb-3"},F=n(()=>s("label",{class:"form-label"},"Wrong answer 2",-1)),G=["disabled"],H={class:"mb-3"},K=n(()=>s("label",{class:"form-label"},"Wrong answer 3",-1)),R=["disabled"],X={class:"mb-3"},Y=n(()=>s("label",{class:"form-label"},"Wrong answer 4",-1)),Z=["disabled"],$={class:"mb-3"},ss=n(()=>s("label",{class:"form-label"},"Explanation",-1)),es=["disabled"],ts={key:0,class:"d-flex justify-content-end gap-4"};function os(t,e,a,d,o,u){return _(),h("div",C,[x,s("div",g,[s("div",y,[s("div",E,[s("h2",U,"Student: "+m(o.studentName),1),s("h2",V,"Skill: "+m(o.skillName),1)])]),s("div",N,[s("div",D,[s("div",I,[s("div",B,[L,r(s("textarea",{disabled:!o.isEditMode,"onUpdate:modelValue":e[0]||(e[0]=i=>o.question.question=i),rows:"1",class:"form-control"},`\r
                            `,8,T),[[l,o.question.question]])]),s("div",W,[O,r(s("input",{disabled:!o.isEditMode,"onUpdate:modelValue":e[1]||(e[1]=i=>o.question.correct_answer=i),type:"text",class:"form-control"},null,8,j),[[l,o.question.correct_answer]])]),s("div",J,[P,r(s("input",{disabled:!o.isEditMode,"onUpdate:modelValue":e[2]||(e[2]=i=>o.question.incorrect_answer_1=i),type:"text",class:"form-control"},null,8,z),[[l,o.question.incorrect_answer_1]])]),s("div",A,[F,r(s("input",{disabled:!o.isEditMode,"onUpdate:modelValue":e[3]||(e[3]=i=>o.question.incorrect_answer_2=i),type:"text",class:"form-control"},null,8,G),[[l,o.question.incorrect_answer_2]])]),s("div",H,[K,r(s("input",{disabled:!o.isEditMode,"onUpdate:modelValue":e[4]||(e[4]=i=>o.question.incorrect_answer_3=i),type:"text",class:"form-control"},null,8,R),[[l,o.question.incorrect_answer_3]])]),s("div",X,[Y,r(s("input",{disabled:!o.isEditMode,"onUpdate:modelValue":e[5]||(e[5]=i=>o.question.incorrect_answer_4=i),type:"text",class:"form-control"},null,8,Z),[[l,o.question.incorrect_answer_4]])]),s("div",$,[ss,r(s("textarea",{disabled:!o.isEditMode,"onUpdate:modelValue":e[6]||(e[6]=i=>o.question.explanation=i),class:"form-control",rows:"3"},null,8,es),[[l,o.question.explanation]])]),d.userDetailsStore.role=="admin"||d.userDetailsStore.role=="editor"?(_(),h("div",ts,[s("a",{class:"btn red-btn",onClick:e[7]||(e[7]=i=>u.editMode())},"Edit"),s("a",{class:"btn red-btn",onClick:e[8]||(e[8]=i=>u.deleteStudentQuestion())},"Delete"),s("button",{class:"btn purple-btn",onClick:e[9]||(e[9]=i=>u.saveToQuestionBank())}," Save ")])):w("",!0)])])])])])}const ls=p(Q,[["render",os],["__scopeId","data-v-6d6008f8"]]);export{ls as default};
