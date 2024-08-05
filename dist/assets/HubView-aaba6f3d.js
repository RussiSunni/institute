import{_ as m,r as _,o as n,c as o,b as e,F as S,n as w,d as h,g as p,q as b,t as c,a as $,p as C,e as y,j as g,w as f,m as k,i as M,s as Q,f as v}from"./main-574588f4.js";import{u as A}from"./AssessmentsStore-4b65a2e1.js";import{u as D}from"./InstructorStudentsStore-7d2736e8.js";import{u as q}from"./StudentMCQuestionsStore-6630b430.js";import{_ as P}from"./general-banner-1c13aca4.js";const T={data(){return{userSkills:[],noSkills:!0}},props:["userId"],async created(){const s=await fetch("/user-skills/unnested-list/"+this.userId);this.userSkills=await s.json()},computed:{availableSkills(){const s=[];for(let t=0;t<this.userSkills.length;t++)this.userSkills[t].is_accessible==1&this.userSkills[t].is_mastered!=1&this.userSkills[t].type!="domain"&&s.push({name:this.userSkills[t].name,id:this.userSkills[t].id});return s.length>0&&(this.noSkills=!1),s}},methods:{}},L=s=>(C("data-v-b569c594"),s=s(),y(),s),B=L(()=>e("div",{class:"table-responsive"},null,-1)),O=L(()=>e("div",{id:"tile"},"Available Skills",-1)),R={id:"skill-list"},F={key:0,id:"no-skill-cell"};function H(s,t,u,l,i,a){const r=_("router-link");return n(),o(S,null,[B,O,e("div",R,[(n(!0),o(S,null,w(a.availableSkills,d=>(n(),o("div",null,[h(r,{class:"skill-link",to:`/skills/${d.id}`,target:"_blank"},{default:p(()=>[b(c(d.name),1)]),_:2},1032,["to"])]))),256)),i.noSkills?(n(),o("div",F)):$("",!0)])],64)}const J=m(T,[["render",H],["__scopeId","data-v-b569c594"]]);const E={data(){return{visitedSkills:[],noSkills:!0}},props:["userId"],async created(){const s=await fetch("/skills/last-visited/");this.visitedSkills=await s.json(),this.visitedSkills.length>0&&(this.noSkills=!1)}},N=s=>(C("data-v-9631d77b"),s=s(),y(),s),z=N(()=>e("div",{class:"table-responsive"},null,-1)),G=N(()=>e("div",{id:"tile"},"Last visited Skills",-1)),K={id:"skill-list"},W={key:0,id:"no-skill-cell"};function X(s,t,u,l,i,a){const r=_("router-link");return n(),o(S,null,[z,G,e("div",K,[(n(!0),o(S,null,w(i.visitedSkills,d=>(n(),o("div",null,[h(r,{class:"skill-link",to:`/skills/${d.id}`,target:"_blank"},{default:p(()=>[b(c(d.name),1)]),_:2},1032,["to"])]))),256)),i.noSkills?(n(),o("div",W)):$("",!0)])],64)}const Y=m(E,[["render",X],["__scopeId","data-v-9631d77b"]]);const Z={setup(){const s=g();return s.getUserDetails(),{userDetailsStore:s}},data(){return{notifications:[]}},computed:{},async created(){await this.getNotifications()},methods:{getNotifications(){fetch("/notifications/list").then(function(s){return s.json()}).then(s=>this.notifications=s)},SaveChange(){const s={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({notification1:this.notifications.notification_1,notification2:this.notifications.notification_2})};var t="/notifications/edit";fetch(t,s)}}},ss=s=>(C("data-v-1b87a8b3"),s=s(),y(),s),ts={class:"table table-bordered"},es=ss(()=>e("thead",null,[e("tr",null,[e("th",{scope:"col"},"Notifications")])],-1)),ns={key:0},is={key:1},os={key:0},rs={key:1};function ls(s,t,u,l,i,a){return n(),o("table",ts,[es,e("tbody",null,[e("tr",null,[l.userDetailsStore.role!="admin"?(n(),o("td",ns,c(i.notifications.notification_1),1)):(n(),o("td",is,[f(e("textarea",{onChange:t[0]||(t[0]=r=>a.SaveChange()),"onUpdate:modelValue":t[1]||(t[1]=r=>i.notifications.notification_1=r),class:"form-control",rows:"3"},null,544),[[k,i.notifications.notification_1]])]))]),e("tr",null,[l.userDetailsStore.role!="admin"?(n(),o("td",os,c(i.notifications.notification_2),1)):(n(),o("td",rs,[f(e("textarea",{onChange:t[2]||(t[2]=r=>a.SaveChange()),"onUpdate:modelValue":t[3]||(t[3]=r=>i.notifications.notification_2=r),class:"form-control",rows:"3"},null,544),[[k,i.notifications.notification_2]])]))])])])}const ds=m(Z,[["render",ls],["__scopeId","data-v-1b87a8b3"]]);const us={setup(){const s=g();return s.getUserDetails(),{userDetailsStore:s}},data(){return{news:[]}},computed:{},async created(){await this.getNews()},methods:{getNews(){fetch("/news/list").then(function(s){return s.json()}).then(s=>this.news=s)},SaveChange(){const s={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({news1:this.news.news_1,news2:this.news.news_2,news3:this.news.news_3,news4:this.news.news_4})};var t="/news/edit";fetch(t,s)}}},as=s=>(C("data-v-3fd6bf6b"),s=s(),y(),s),cs={class:""},_s={class:"table table-bordered"},hs=as(()=>e("thead",null,[e("tr",null,[e("th",null,"News")])],-1)),Ss={class:"row border"},ms={id:"first-cell",class:"col-lg-3 border col-md-6 news-cell"},fs={key:0},ks={class:"col-lg-3 col-md-6 border news-cell"},ps={key:0},gs={class:"col-lg-3 col-md-6 border news-cell"},vs={key:0},ws={id:"last-cell",class:"col-lg-3 border col-md-6 news-cell"},bs={key:0};function Cs(s,t,u,l,i,a){return n(),o("div",cs,[e("table",_s,[hs,e("tbody",null,[e("tr",null,[e("div",Ss,[e("div",ms,[l.userDetailsStore.role!="admin"?(n(),o("p",fs,c(i.news.news_1),1)):f((n(),o("textarea",{key:1,onChange:t[0]||(t[0]=r=>a.SaveChange()),"onUpdate:modelValue":t[1]||(t[1]=r=>i.news.news_1=r),class:"form-control",rows:"3"},null,544)),[[k,i.news.news_1]])]),e("div",ks,[l.userDetailsStore.role!="admin"?(n(),o("p",ps,c(i.news.news_2),1)):f((n(),o("textarea",{key:1,onChange:t[2]||(t[2]=r=>a.SaveChange()),"onUpdate:modelValue":t[3]||(t[3]=r=>i.news.news_2=r),class:"form-control",rows:"3"},null,544)),[[k,i.news.news_2]])]),e("div",gs,[l.userDetailsStore.role!="admin"?(n(),o("p",vs,c(i.news.news_3),1)):f((n(),o("textarea",{key:1,onChange:t[4]||(t[4]=r=>a.SaveChange()),"onUpdate:modelValue":t[5]||(t[5]=r=>i.news.news_3=r),class:"form-control",rows:"3"},null,544)),[[k,i.news.news_3]])]),e("div",ws,[l.userDetailsStore.role!="admin"?(n(),o("p",bs,c(i.news.news_4),1)):f((n(),o("textarea",{key:1,onChange:t[6]||(t[6]=r=>a.SaveChange()),"onUpdate:modelValue":t[7]||(t[7]=r=>i.news.news_4=r),class:"form-control",rows:"3"},null,544)),[[k,i.news.news_4]])])])])])])])}const ys=m(us,[["render",Cs],["__scopeId","data-v-3fd6bf6b"]]);const $s={setup(){const s=A(),t=M(),u=Q(),l=g(),i=D();return{usersStore:t,skillsStore:u,assessmentsStore:s,userDetailsStore:l,instructorStudentsStore:i}},data(){return{assessments:[],studentIds:[]}},async created(){await this.assessmentsStore.getAssessments(),this.instructorStudentsStore.instructorStudentsList.length==0&&await this.instructorStudentsStore.getInstructorStudentsList();for(let s=0;s<this.instructorStudentsStore.instructorStudentsList.length;s++)this.userDetailsStore.userId==this.instructorStudentsStore.instructorStudentsList[s].instructor_id&&this.studentIds.push(this.instructorStudentsStore.instructorStudentsList[s].student_id);for(let s=0;s<this.assessmentsStore.assessments.length;s++)for(let t=0;t<this.studentIds.length;t++)this.assessmentsStore.assessments[s].student_id==this.studentIds[t]&&this.assessments.push(this.assessmentsStore.assessments[s]);for(let s=0;s<this.assessments.length;s++){let t=new Date(this.assessments[s].date).toDateString();this.assessments[s].date=t}this.usersStore.users.length==0&&await this.usersStore.getUsers();for(let s=0;s<this.assessments.length;s++)for(let t=0;t<this.usersStore.users.length;t++)this.assessments[s].student_id==this.usersStore.users[t].id&&(this.assessments[s].studentUsername=this.usersStore.users[t].username);this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList();for(let s=0;s<this.assessments.length;s++)for(let t=0;t<this.skillsStore.skillsList.length;t++)this.assessments[s].skill_id==this.skillsStore.skillsList[t].id&&(this.assessments[s].skillName=this.skillsStore.skillsList[t].name)},computed:{},methods:{}},Ms={class:"container-fluid"},Qs=e("div",{id:"question-header"},[e("div",{id:"assessment-tile"},"Assessments")],-1),Ds={id:"list-body"},Ls={class:"assessment"},Ns={id:"student-name"},Is={id:"skill-name"},xs={id:"date"};function Us(s,t,u,l,i,a){const r=_("RouterLink");return n(),o("div",Ms,[Qs,e("div",Ds,[(n(!0),o(S,null,w(this.assessments,d=>(n(),o("div",Ls,[h(r,{class:"assessment-link",to:"/mark-assessment/"+d.id},{default:p(()=>[e("span",Ns,c(d.studentUsername)+", ",1),e("span",Is,c(d.skillName)+", ",1),e("span",xs,c(d.date),1)]),_:2},1032,["to"])]))),256))])])}const Vs=m($s,[["render",Us]]);const js={setup(){const s=q(),t=D(),u=M(),l=Q(),i=g();return{studentMCQuestionsStore:s,instructorStudentsStore:t,usersStore:u,skillsStore:l,userDetailsStore:i}},data(){return{questions:[]}},async created(){await this.studentMCQuestionsStore.getStudentMCQuestions(),this.usersStore.users.length==0&&await this.usersStore.getUsers();for(let s=0;s<this.studentMCQuestionsStore.studentMCQuestions.length;s++)for(let t=0;t<this.usersStore.users.length;t++)this.studentMCQuestionsStore.studentMCQuestions[s].student_id==this.usersStore.users[t].id&&(this.studentMCQuestionsStore.studentMCQuestions[s].studentName=this.usersStore.users[t].username);for(let s=0;s<this.studentMCQuestionsStore.studentMCQuestions.length;s++)typeof this.studentMCQuestionsStore.studentMCQuestions[s].studentName>"u"&&(this.studentMCQuestionsStore.studentMCQuestions[s].studentName="Deleted student");this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList();for(let s=0;s<this.studentMCQuestionsStore.studentMCQuestions.length;s++)for(let t=0;t<this.skillsStore.skillsList.length;t++)this.studentMCQuestionsStore.studentMCQuestions[s].skill_id==this.skillsStore.skillsList[t].id&&(this.studentMCQuestionsStore.studentMCQuestions[s].skillName=this.skillsStore.skillsList[t].name);if(this.userDetailsStore.role=="instructor"){this.instructorStudentsStore.instructorStudentsList.length==0&&await this.instructorStudentsStore.getInstructorStudentsList();let s=[];for(let t=0;t<this.instructorStudentsStore.instructorStudentsList.length;t++)this.$parent.userDetailsStore.userId==this.instructorStudentsStore.instructorStudentsList[t].instructor_id&&s.push(this.instructorStudentsStore.instructorStudentsList[t].student_id);for(let t=0;t<this.studentMCQuestionsStore.studentMCQuestions.length;t++)for(let u=0;u<s.length;u++)this.studentMCQuestionsStore.studentMCQuestions[t].student_id==s[u]&&this.questions.push(this.studentMCQuestionsStore.studentMCQuestions[t])}else this.questions=this.studentMCQuestionsStore.studentMCQuestions},computed:{},methods:{}},As={class:"container-fluid"},qs=e("div",{id:"question-header"},[e("div",{id:"assessment-tile"},"Student Questions")],-1),Ps={id:"list-body"},Ts={class:"assessment"};function Bs(s,t,u,l,i,a){const r=_("RouterLink");return n(),o("div",As,[qs,e("div",Ps,[(n(!0),o(S,null,w(this.questions,d=>(n(),o("div",Ts,[h(r,{to:"/check-student-question/"+d.id,class:"assessment-link"},{default:p(()=>[b(c(d.studentName)+", "+c(d.skillName),1)]),_:2},1032,["to"])]))),256))])])}const Os=m(js,[["render",Bs]]),Rs="/images/post-login.png";const Fs={setup(){const s=g();return s.getUserDetails(),{userDetailsStore:s}},data(){return{}},components:{News:ys,Notifications:ds,StudentProgress:J,MarkAssessment:Vs,CheckStudentQuestions:Os,LastVisitedSkills:Y},computed:{name(){return this.userDetailsStore.firstName+" "+this.userDetailsStore.lastName}},methods:{}},Hs=e("div",{id:"banner"},[e("img",{src:P,class:""})],-1),Js={class:"container post-login-container min-vh-100"},Es={class:"row text-center text-md-start"},zs={id:"user-name"},Gs={class:"row content-row"},Ks={class:"col-lg-4 col-md-5 mb-4 pb-4 column mx-0"},Ws=["src"],Xs={class:"col-lg-4 col-md-7 mb-4 pb-4"},Ys={key:2},Zs={class:"col-lg-4 col-md-7 mb-4 pb-4"},st={class:"col-lg-3 col-md-5 mb-4 pb-4 column"},tt=e("div",{class:"col-lg-9 col-md-6 mb-4 pb-4 column d-none d-lg-block"},[e("img",{src:Rs,class:"img-fluid"})],-1),et={id:"news-row",class:"row"};function nt(s,t,u,l,i,a){const r=_("StudentProgress"),d=_("MarkAssessment"),I=_("router-link"),x=_("LastVisitedSkills"),U=_("CheckStudentQuestions"),V=_("Notifications"),j=_("News");return n(),o(S,null,[Hs,e("div",Js,[e("div",Es,[e("h1",zs,c(a.name),1)]),e("div",Gs,[e("div",Ks,[e("img",{id:"profile-img",src:l.userDetailsStore.avatar,class:"img-fluid rounded"},null,8,Ws)]),e("div",Xs,[l.userDetailsStore.role=="student"?(n(),v(r,{key:0,userId:l.userDetailsStore.userId},null,8,["userId"])):l.userDetailsStore.role=="instructor"?(n(),v(d,{key:1})):(n(),o("div",Ys,[h(I,{to:"/content-edits"},{default:p(()=>[b("Approve edits")]),_:1})]))]),e("div",Zs,[l.userDetailsStore.role=="student"?(n(),v(x,{key:0,userId:l.userDetailsStore.userId},null,8,["userId"])):l.userDetailsStore.role=="instructor"||l.userDetailsStore.role=="admin"?(n(),v(U,{key:1})):$("",!0)]),e("div",st,[h(V)]),tt]),e("div",et,[h(j)])])],64)}const ut=m(Fs,[["render",nt]]);export{ut as default};
