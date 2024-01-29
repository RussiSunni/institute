import{_ as C,r as _,o as n,c as o,F as c,i as b,b as s,t as m,a,f as p,l as d,k as f,w as y,K as Q}from"./main-04b61ce6.js";import{u as g}from"./SkillsStore-00e47be2.js";const v={props:["isMultipleChoice","isEssay"],setup(){},data(){return{skillId:this.$route.params.id,mcQuestions:[],essayQuestions:[]}},computed:{},created(){this.getMCQuestions(),this.getEssayQuestions()},methods:{getMCQuestions(){fetch("/skills/"+this.skillId+"/mc-questions/list").then(function(e){return e.json()}).then(e=>{this.mcQuestions=e})},getEssayQuestions(){fetch("/skills/"+this.skillId+"/essay-questions/list").then(function(e){return e.json()}).then(e=>{this.essayQuestions=e})},async deleteMCQuestion(e){const t=fetch("/questions/mc/"+e,{method:"DELETE"});t.error?console.log(t.error):this.getMCQuestions()},async deleteEssayQuestion(e){const t=fetch("/questions/essay/"+e,{method:"DELETE"});t.error?console.log(t.error):this.getEssayQuestions()}}},M=s("h2",null,"Multiple Choice",-1),x={key:0,class:"skilltree-table table-bordered"},L=["onClick"],S=s("h2",null,"Essay",-1),B={key:1,class:"skilltree-table table-bordered"},V=["onClick"];function $(e,t,h,E,l,k){const r=_("router-link");return n(),o(c,null,[M,h.isMultipleChoice?(n(),o("table",x,[(n(!0),o(c,null,b(l.mcQuestions,i=>(n(),o("tr",null,[s("td",null,m(i.name),1),s("td",null,[a(r,{to:"/mc-questions/edit/"+i.id,class:"btn btn-dark me-2 ci-btn",role:"button"},{default:p(()=>[d("Edit")]),_:2},1032,["to"])]),s("td",null,[s("button",{type:"button",onClick:u=>k.deleteMCQuestion(i.id),class:"btn btn-danger delete-btn me-2 ci-btn"},"Delete",8,L)])]))),256))])):f("",!0),S,h.isEssay?(n(),o("table",B,[(n(!0),o(c,null,b(l.essayQuestions,i=>(n(),o("tr",null,[s("td",null,m(i.name),1),s("td",null,[a(r,{to:"/essay-questions/edit/"+i.id,class:"btn btn-dark me-2 ci-btn",role:"button"},{default:p(()=>[d("Edit")]),_:2},1032,["to"])]),s("td",null,[s("button",{type:"button",onClick:u=>k.deleteEssayQuestion(i.id),class:"btn btn-danger delete-btn me-2 ci-btn"},"Delete",8,V)])]))),256))])):f("",!0)],64)}const w=C(v,[["render",$]]);const N={setup(){return{skillsStore:g()}},data(){return{skillId:this.$route.params.id,skillName:null,isMultipleChoice:!0,isEssay:!0}},async created(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList();for(let e=0;e<this.skillsStore.skillsList.length;e++)this.skillId==this.skillsStore.skillsList[e].id&&(this.skillName=this.skillsStore.skillsList[e].name)},components:{QuestionsBankQuestionList:w}},D={class:"topnav d-flex"},I={class:"d-flex"},j={class:"form-check"},q=s("label",{class:"form-check-label"}," Multiple choice ",-1),T={class:"form-check"},F=s("label",{class:"form-check-label"}," Essay ",-1),U={class:"d-flex justify-content-between"};function A(e,t,h,E,l,k){const r=_("router-link"),i=_("QuestionsBankQuestionList");return n(),o(c,null,[s("h1",null,m(l.skillName)+" Question Bank",1),s("div",D,[s("div",I,[s("div",j,[y(s("input",{class:"form-check-input",type:"checkbox",value:"true","onUpdate:modelValue":t[0]||(t[0]=u=>l.isMultipleChoice=u)},null,512),[[Q,l.isMultipleChoice]]),q]),d("      "),s("div",T,[y(s("input",{class:"form-check-input",type:"checkbox",value:"true","onUpdate:modelValue":t[1]||(t[1]=u=>l.isEssay=u)},null,512),[[Q,l.isEssay]]),F])]),a(r,{class:"purple-btn btn",to:"/skills/"+l.skillId+"/question-bank/add"},{default:p(()=>[d("Add Questions")]),_:1},8,["to"])]),a(i,{isMultipleChoice:l.isMultipleChoice,isEssay:l.isEssay},null,8,["isMultipleChoice","isEssay"]),s("div",U,[s("a",{class:"btn btn-dark",onClick:t[2]||(t[2]=u=>e.$router.go(-1))},"Cancel")])],64)}const G=C(N,[["render",A]]);export{G as default};
