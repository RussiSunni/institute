import{_ as v,o as u,c as r,d,i as m,b as i,y as Q,t as k,C as p,a as _,T as y,F as R,p as C,e as f,r as c,k as x,f as U,l as V}from"./main-8d0f469b.js";import{u as q}from"./StudentMCQuestionsStore-fa5672a4.js";import{u as I}from"./InstructorStudentsStore-5223ee4e.js";import{D as L,_ as g,C as P}from"./ContentFlagsView-ad846280.js";import{_ as D}from"./general-banner-1c13aca4.js";import"./EssayQuestionsStore-08122d9d.js";const B={setup(){},data(){return{showNavBar:!0,todoCount:null,contentEditCount:0,studentQuestionCount:0,contentFlagCount:0}},props:["activeContent"],methods:{changeActiveContent(t){this.$parent.activeContent=t}},async mounted(){const e=await(await fetch("/todo-count/total")).json();this.todoCount=e,this.studentQuestionCount=this.todoCount.student_question_count,this.contentFlagCount=this.todoCount.content_flag_count,this.contentEditCount=parseInt(this.todoCount.skill_edit_count)+parseInt(this.todoCount.mc_question_edit_count)+parseInt(this.todoCount.essay_question_edit_count)}},w=t=>(C("data-v-36536cb3"),t=t(),f(),t),F={key:0,class:"nav-bar-container d-flex flex-column"},z={class:"d-flex justify-content-between pe-4"},A=w(()=>i("div",{class:"todo-tile ps-2 pt-2"},"Todo List",-1)),H=w(()=>i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",heigh:"20",fill:"#8666ca"},[i("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})],-1)),j=[H],Z=w(()=>i("hr",null,null,-1)),W={class:"badge bg-danger","b-on-hover":"",title:"number of content edit that needed to approve"},J={"b-on-hover":"",title:"number of student question that needed to approve",class:"badge bg-danger"},G={class:"badge bg-danger","b-on-hover":"",title:"number of content flag that needed to check"},K=w(()=>i("div",{class:"nav-col group"},null,-1)),O=w(()=>i("div",{class:"expand-icon-div group","b-on-hover":"",title:"Expand Nav Bar"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"12",heigh:"12",fill:"#8666ca"},[i("path",{d:"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"})])],-1)),X=[K,O];function Y(t,e,s,l,n,o){return u(),r(R,null,[d(y,{name:"navbar"},{default:m(()=>[n.showNavBar?(u(),r("div",F,[i("div",z,[A,i("div",{class:"icon-div d-flex align-items-center px-3 py-2",onClick:e[0]||(e[0]=a=>n.showNavBar=!1),"b-on-hover":"",title:"Shrink Nav Bar"},j)]),Z,i("div",{class:p([s.activeContent==="editList"?"active-item":"nav-bar-item"]),onClick:e[1]||(e[1]=a=>o.changeActiveContent("editList"))},[Q(" Approve Content Edits "),i("span",W,k(n.contentEditCount),1)],2),i("div",{class:p([s.activeContent==="studentQuestionList"?"active-item":"nav-bar-item"]),onClick:e[2]||(e[2]=a=>o.changeActiveContent("studentQuestionList"))},[Q(" Approve Student Added Questions "),i("span",J,k(n.studentQuestionCount),1)],2),i("div",{class:p([s.activeContent==="flagList"?"active-item":"nav-bar-item"]),onClick:e[3]||(e[3]=a=>o.changeActiveContent("flagList"))},[Q(" Check Content Flags "),i("span",G,k(n.contentFlagCount),1)],2)])):_("",!0)]),_:1}),d(y,{name:"navbarMini"},{default:m(()=>[n.showNavBar?_("",!0):(u(),r("div",{key:0,class:"position-relative minimize-navbar",onClick:e[4]||(e[4]=a=>n.showNavBar=!0)},X))]),_:1})],64)}const tt=v(B,[["render",Y],["__scopeId","data-v-36536cb3"]]);const et={setup(){return{}},data(){return{headers:[{text:"Student",value:"studentName"},{text:"Question",value:"question"},{text:"Skill",value:"skillName"},{text:"Date",value:"date"}],mobileHeaders:[{text:"User",value:"userName"},{text:"Skill Name",value:"name"},{text:"Comment",value:"comment"}]}},components:{Vue3EasyDataTable:L},props:["studentQuestion","loadingQuestion"],async mounted(){},methods:{goToComparePage(t){this.$router.push(`/check-student-question/${t.id}`)},formatDate(t){var e=t.replace("T"," ");e=e.replace("Z"," ");let s=e.split(/[- :]/);var l=new Date(Date.UTC(s[0],s[1]-1,s[2],s[3],s[4],s[5])),n={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};return l=l.toLocaleDateString("en-US",n),l}}},N=t=>(C("data-v-ca0ae603"),t=t(),f(),t),st={class:"mt-3 table-div h-100"},nt=N(()=>i("img",{src:g,alt:"loading data"},null,-1)),it=N(()=>i("img",{src:g,alt:"loading data"},null,-1));function ot(t,e,s,l,n,o){const a=c("Vue3EasyDataTable");return u(),r("div",st,[d(a,{headers:n.headers,items:s.studentQuestion,alternating:"",loading:s.loadingQuestion,"table-class-name":"customize-table","buttons-pagination":"","theme-color":"#a48be6",onClickRow:o.goToComparePage,class:"d-none d-md-block"},{loading:m(()=>[nt]),"item-date":m(({create_date:b})=>[i("div",null,k(o.formatDate(b)),1)]),_:1},8,["headers","items","loading","onClickRow"]),d(a,{headers:n.mobileHeaders,items:s.studentQuestion,alternating:"",loading:s.loadingQuestion,"table-class-name":"customize-table","buttons-pagination":"","theme-color":"#a48be6",onClickRow:o.goToComparePage,class:"d-md-none d-block"},{loading:m(()=>[it]),_:1},8,["headers","items","loading","onClickRow"])])}const at=v(et,[["render",ot],["__scopeId","data-v-ca0ae603"]]);const lt={setup(){const t=q(),e=I(),s=x(),l=U(),n=V();return{studentMCQuestionsStore:t,instructorStudentsStore:e,usersStore:s,skillsStore:l,userDetailsStore:n}},data(){return{questions:[],loadingQuestion:!0}},components:{StudentQuestionList:at},async created(){this.loadingQuestion=!0,await this.studentMCQuestionsStore.getStudentMCQuestions(),this.usersStore.users.length==0&&await this.usersStore.getUsers();for(let t=0;t<this.studentMCQuestionsStore.studentMCQuestions.length;t++)for(let e=0;e<this.usersStore.users.length;e++)this.studentMCQuestionsStore.studentMCQuestions[t].student_id==this.usersStore.users[e].id&&(this.studentMCQuestionsStore.studentMCQuestions[t].studentName=this.usersStore.users[e].username);for(let t=0;t<this.studentMCQuestionsStore.studentMCQuestions.length;t++)typeof this.studentMCQuestionsStore.studentMCQuestions[t].studentName>"u"&&(this.studentMCQuestionsStore.studentMCQuestions[t].studentName="Deleted student");this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList();for(let t=0;t<this.studentMCQuestionsStore.studentMCQuestions.length;t++)for(let e=0;e<this.skillsStore.skillsList.length;e++)this.studentMCQuestionsStore.studentMCQuestions[t].skill_id==this.skillsStore.skillsList[e].id&&(this.studentMCQuestionsStore.studentMCQuestions[t].skillName=this.skillsStore.skillsList[e].name);this.questions=this.studentMCQuestionsStore.studentMCQuestions,this.$parent.studentQuestionCount=this.questions.length,this.loadingQuestion=!1},computed:{},methods:{}},dt=i("div",{id:"banner"},[i("img",{src:D,class:"img-fluid"})],-1),ut=i("h1",{class:"ps-3 mt-2 page-title"},"Approve Student Added Questions",-1),rt={class:"container-fluid"};function ct(t,e,s,l,n,o){const a=c("StudentQuestionList");return u(),r("div",null,[dt,ut,i("div",rt,[d(a,{studentQuestion:n.questions,loadingQuestion:n.loadingQuestion},null,8,["studentQuestion","loadingQuestion"])])])}const mt=v(lt,[["render",ct]]);const _t={setup(){return{}},data(){return{headers:[{text:"User",value:"userName"},{text:"Question Name",value:"name"},{text:"Question Content",value:"question"},{text:"Comment",value:"comment"},{text:"Date",value:"date"}],mobileHeaders:[{text:"User",value:"userName"},{text:"Comment",value:"comment"},{text:"Date",value:"date"}]}},components:{Vue3EasyDataTable:L},props:["mcQuestionList","mcQuestionEditsLoading"],async created(){},methods:{goToComparePage(t){this.$router.push(`/content-edit/${t.mc_question_id}/${t.user_id}/comparison?type=mcquestion`)}}},T=t=>(C("data-v-bddad0e2"),t=t(),f(),t),ht={class:"mt-3 pt-4 table-div"},vt=T(()=>i("img",{src:g,alt:"loading data"},null,-1)),gt=T(()=>i("img",{src:g,alt:"loading data"},null,-1));function pt(t,e,s,l,n,o){const a=c("Vue3EasyDataTable");return u(),r("div",ht,[d(a,{headers:n.headers,items:s.mcQuestionList,alternating:"",loading:s.mcQuestionEditsLoading,"table-class-name":"customize-table","buttons-pagination":"","theme-color":"#a48be6",onClickRow:o.goToComparePage,class:"d-none d-md-block"},{loading:m(()=>[vt]),_:1},8,["headers","items","loading","onClickRow"]),d(a,{headers:n.mobileHeaders,items:s.mcQuestionList,alternating:"",loading:s.mcQuestionEditsLoading,"table-class-name":"customize-table","buttons-pagination":"","theme-color":"#a48be6",onClickRow:o.goToComparePage,class:"d-md-none"},{loading:m(()=>[gt]),_:1},8,["headers","items","loading","onClickRow"])])}const Ct=v(_t,[["render",pt],["__scopeId","data-v-bddad0e2"]]);const ft={setup(){return{isLoading:!0}},data(){return{headers:[{text:"User",value:"userName"},{text:"Skill Name",value:"name"},{text:"Skill Level",value:"level"},{text:"Comment",value:"comment"},{text:"Date",value:"date"}],mobileHeaders:[{text:"User",value:"userName"},{text:"Skill Name",value:"name"},{text:"Comment",value:"comment"}]}},components:{Vue3EasyDataTable:L},props:["skillsEditList","skillEditsLoading"],async created(){},methods:{goToComparePage(t){this.$router.push(`/content-edit/${t.skill_id}/${t.user_id}/comparison?type=skill`)},formatDate(t){var e=t.replace("T"," ");e=e.replace("Z"," ");let s=e.split(/[- :]/);var l=new Date(Date.UTC(s[0],s[1]-1,s[2],s[3],s[4],s[5])),n={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};return l=l.toLocaleDateString("en-US",n),l}}},M=t=>(C("data-v-9b6adc3f"),t=t(),f(),t),bt={class:"mt-3 pt-4 table-div h-100"},kt=M(()=>i("img",{src:g,alt:"loading data"},null,-1)),wt=M(()=>i("img",{src:g,alt:"loading data"},null,-1));function Qt(t,e,s,l,n,o){const a=c("Vue3EasyDataTable");return u(),r("div",bt,[d(a,{headers:n.headers,items:s.skillsEditList,alternating:"",loading:s.skillEditsLoading,"table-class-name":"customize-table","buttons-pagination":"","theme-color":"#a48be6",onClickRow:o.goToComparePage,class:"d-none d-md-block"},{loading:m(()=>[kt]),_:1},8,["headers","items","loading","onClickRow"]),d(a,{headers:n.mobileHeaders,items:s.skillsEditList,alternating:"",loading:s.skillEditsLoading,"table-class-name":"customize-table","buttons-pagination":"","theme-color":"#a48be6",onClickRow:o.goToComparePage,class:"d-md-none d-block"},{loading:m(()=>[wt]),_:1},8,["headers","items","loading","onClickRow"])])}const Lt=v(ft,[["render",Qt],["__scopeId","data-v-9b6adc3f"]]);const St={setup(){return{}},data(){return{headers:[{text:"User",value:"userName"},{text:"Question Name",value:"name"},{text:"Question Content",value:"question"},{text:"Comment",value:"comment"},{text:"Date",value:"date"}],mobileHeaders:[{text:"User",value:"userName"},{text:"Comment",value:"comment"},{text:"Date",value:"date"}]}},components:{Vue3EasyDataTable:L},props:["writtenEditsList","essayQuestionEditsLoading"],async created(){},methods:{goToComparePage(t){this.$router.push(`/content-edit/${t.essay_question_id}/${t.user_id}/comparison?type=essayquestion`)}}},$=t=>(C("data-v-a348986d"),t=t(),f(),t),Et={class:"mt-3 pt-4 table-div"},yt=$(()=>i("img",{src:g,alt:"loading data"},null,-1)),xt=$(()=>i("img",{src:g,alt:"loading data"},null,-1));function Dt(t,e,s,l,n,o){const a=c("Vue3EasyDataTable");return u(),r("div",Et,[d(a,{headers:n.headers,items:s.writtenEditsList,alternating:"",loading:s.essayQuestionEditsLoading,"table-class-name":"customize-table","buttons-pagination":"","theme-color":"#a48be6",onClickRow:o.goToComparePage,class:"d-none d-md-block"},{loading:m(()=>[yt]),_:1},8,["headers","items","loading","onClickRow"]),d(a,{headers:n.mobileHeaders,items:s.writtenEditsList,alternating:"",loading:s.essayQuestionEditsLoading,"table-class-name":"customize-table","buttons-pagination":"","theme-color":"#a48be6",onClickRow:o.goToComparePage,class:"d-md-none d-block"},{loading:m(()=>[xt]),_:1},8,["headers","items","loading","onClickRow"])])}const Nt=v(St,[["render",Dt],["__scopeId","data-v-a348986d"]]);const Tt={setup(){return{usersStore:x()}},data(){return{skillEdits:[],mcQuestionEdits:[],essayQuestionEdits:[],activeList:"skills",showDropDown:!1,skillEditsLoading:!0,mcQuestionEditsLoading:!0,essayQuestionEditsLoading:!0}},components:{McQuestionsEditList:Ct,SkillEditsList:Lt,WrittenQuestionEditsList:Nt},async created(){this.usersStore.users.length<1&&await this.usersStore.getUsers(),await this.getSkillEditsSubmittedForReview(),await this.getMCQuestionEditsSubmittedForReview(),await this.getEssayQuestionEditsSubmittedForReview()},methods:{async getSkillEditsSubmittedForReview(){await fetch("/skills/submitted-for-review/list").then(function(t){return t.json()}).then(t=>{for(let e=0;e<t.length;e++)t[e].date=this.formatDate(t[e].date),t[e].userName=this.findUserName(t[e].user_id),this.skillEdits.push(t[e]);this.skillEditsLoading=!1})},async getMCQuestionEditsSubmittedForReview(){await fetch("/questions/mc/submitted-for-review/list").then(function(t){return t.json()}).then(t=>{for(let e=0;e<t.length;e++)t[e].date=this.formatDate(t[e].date),t[e].userName=this.findUserName(t[e].user_id),this.mcQuestionEdits.push(t[e]);this.mcQuestionEditsLoading=!1})},async getEssayQuestionEditsSubmittedForReview(){await fetch("/questions/essay/submitted-for-review/list").then(function(t){return t.json()}).then(t=>{for(let e=0;e<t.length;e++)t[e].date=this.formatDate(t[e].date),t[e].userName=this.findUserName(t[e].user_id),this.essayQuestionEdits.push(t[e]);this.essayQuestionEditsLoading=!1})},formatDate(t){var e=t.replace("T"," ");e=e.replace("Z"," ");let s=e.split(/[- :]/);var l=new Date(Date.UTC(s[0],s[1]-1,s[2],s[3],s[4],s[5])),n={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};return l=l.toLocaleDateString("en-US",n),l},findUserName(t){var e="";for(let s=0;s<this.usersStore.users.length;s++)this.usersStore.users[s].id==t&&(e=this.usersStore.users[s].username);return e},handleDropDownNavChoose(t){const e=t.replace(/([A-Z])/g," $1"),s=e.charAt(0).toUpperCase()+e.slice(1);this.activeList=s,this.showDropDown=!1}}},E=t=>(C("data-v-50ec5013"),t=t(),f(),t),Mt={class:"content-edit-page"},$t=E(()=>i("div",{id:"banner"},[i("img",{src:D,class:"img-fluid"})],-1)),Rt=E(()=>i("h1",{class:"ps-3 mt-2 page-title"},"Approve Content Edits",-1)),Ut={class:"d-none d-lg-flex desktop-nav-bar gap-4 px-3"},Vt={class:"d-flex d-lg-none flex-column mobile-nav-bar"},qt=E(()=>i("span",null,[i("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z",fill:"#344054"})])],-1)),It={key:0,class:"custom-dropdown-base"},Pt={class:"h-100"},Bt={key:0},Ft={key:1},zt={key:2};function At(t,e,s,l,n,o){const a=c("SkillEditsList"),b=c("McQuestionsEditList"),S=c("WrittenQuestionEditsList");return u(),r("div",Mt,[$t,Rt,i("div",Ut,[i("div",{class:p([n.activeList==="skills"?"active-nav":"normal-nav"]),onClick:e[0]||(e[0]=h=>n.activeList="skills")}," Skills ",2),i("div",{class:p([n.activeList==="mcQuestions"?"active-nav":"normal-nav"]),onClick:e[1]||(e[1]=h=>n.activeList="mcQuestions")}," Multiple Choice Questions ",2),i("div",{class:p([n.activeList==="writtenQuestions"?"active-nav":"normal-nav"]),onClick:e[2]||(e[2]=h=>n.activeList="writtenQuestions")}," Essay Questions ",2)]),i("div",Vt,[i("div",{class:p([n.showDropDown?"custom-select-button-focus":"custom-select-button"]),onClick:e[3]||(e[3]=h=>n.showDropDown=!n.showDropDown)},[Q(k(n.activeList)+" ",1),qt],2),n.showDropDown?(u(),r("div",It,[i("div",{class:"custom-dropdown-option",onClick:e[4]||(e[4]=h=>o.handleDropDownNavChoose("skills"))}," Skills "),i("div",{class:"custom-dropdown-option",onClick:e[5]||(e[5]=h=>o.handleDropDownNavChoose("mcQuestions"))}," Multiple Choice Questions "),i("div",{class:"custom-dropdown-option",onClick:e[6]||(e[6]=h=>o.handleDropDownNavChoose("writtenQuestions"))}," Essay Questions ")])):_("",!0)]),i("div",Pt,[n.activeList==="skills"?(u(),r("div",Bt,[d(a,{skillsEditList:n.skillEdits,skillEditsLoading:n.skillEditsLoading},null,8,["skillsEditList","skillEditsLoading"])])):_("",!0),n.activeList==="mcQuestions"?(u(),r("div",Ft,[d(b,{mcQuestionList:n.mcQuestionEdits,mcQuestionEditsLoading:n.mcQuestionEditsLoading},null,8,["mcQuestionList","mcQuestionEditsLoading"])])):_("",!0),n.activeList==="writtenQuestions"?(u(),r("div",zt,[d(S,{writtenEditsList:n.essayQuestionEdits,essayQuestionEditsLoading:n.essayQuestionEditsLoading},null,8,["writtenEditsList","essayQuestionEditsLoading"])])):_("",!0)])])}const Ht=v(Tt,[["render",At],["__scopeId","data-v-50ec5013"]]);const jt={setup(){},data(){return{activeContent:"editList"}},components:{CheckStudentQuestions:mt,ContentEditsList:Ht,PageNav:tt,ContentFlagsView:P},computed:{},async mounted(){},methods:{hideNavBar(){this.showNavBar=!1}}},Zt={class:"container-fluid h-100 p-0"},Wt={class:"h-100 d-flex"},Jt={id:"contentDiv",class:"d-flex flex-column"},Gt={key:0},Kt={key:1},Ot={key:2};function Xt(t,e,s,l,n,o){const a=c("PageNav"),b=c("ContentEditsList"),S=c("CheckStudentQuestions"),h=c("ContentFlagsView");return u(),r("div",Zt,[i("div",Wt,[d(a,{activeContent:n.activeContent},null,8,["activeContent"]),i("div",Jt,[n.activeContent==="editList"?(u(),r("div",Gt,[d(b)])):_("",!0),n.activeContent==="studentQuestionList"?(u(),r("div",Kt,[d(S)])):_("",!0),n.activeContent==="flagList"?(u(),r("div",Ot,[d(h)])):_("",!0)])])])}const oe=v(jt,[["render",Xt]]);export{oe as default};
