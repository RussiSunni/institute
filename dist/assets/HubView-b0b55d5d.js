import{_ as m,r as _,o as n,c as i,b as e,F as h,j as b,d as f,l as y,q as D,t as u,a as g,p as k,e as v,x as $,w as S,i as p,s as V,f as j,k as w}from"./main-908d19cb.js";import{u as q}from"./AssessmentsStore-24d154fd.js";import{u as A}from"./InstructorStudentsStore-6fa45216.js";import{_ as T}from"./general-banner-1c13aca4.js";const M={data(){return{userSkills:[],noSkills:!0}},props:["userId"],async created(){const s=await fetch("/user-skills/unnested-list/"+this.userId);this.userSkills=await s.json()},computed:{availableSkills(){const s=[];for(let t=0;t<this.userSkills.length;t++)this.userSkills[t].is_accessible==1&this.userSkills[t].is_mastered!=1&this.userSkills[t].type!="domain"&&(this.userSkills[t].name.replace(/ /g,"_"),s.push({name:this.userSkills[t].name,id:this.userSkills[t].id,url:this.userSkills[t].url}));return s.length>0&&(this.noSkills=!1),s}},methods:{}},I=s=>(k("data-v-c9ec6ed8"),s=s(),v(),s),Q=I(()=>e("div",{class:"table-responsive"},null,-1)),H=I(()=>e("h2",{id:"title"},"Available Skills",-1)),P={id:"skill-list"},B={key:0,id:"no-skill-cell"};function O(s,t,d,r,o,c){const l=_("router-link");return n(),i(h,null,[Q,H,e("div",P,[(n(!0),i(h,null,b(c.availableSkills,a=>(n(),i("div",null,[f(l,{class:"skill-link",to:`/skills/${a.url}`,target:"_blank"},{default:y(()=>[D(u(a.name),1)]),_:2},1032,["to"])]))),256)),o.noSkills?(n(),i("div",B)):g("",!0)])],64)}const R=m(M,[["render",O],["__scopeId","data-v-c9ec6ed8"]]);const F={data(){return{visitedSkills:[],noSkills:!0}},props:["userId"],async created(){const s=await fetch("/skills/last-visited/");this.visitedSkills=await s.json(),this.visitedSkills.length>0&&(this.noSkills=!1)},computed:{}},x=s=>(k("data-v-eb73782d"),s=s(),v(),s),J=x(()=>e("div",{class:"table-responsive"},null,-1)),E=x(()=>e("h2",{id:"title"},"Last visited Skills",-1)),Z={id:"skill-list"},z={key:0,id:"no-skill-cell"};function G(s,t,d,r,o,c){const l=_("router-link");return n(),i(h,null,[J,E,e("div",Z,[(n(!0),i(h,null,b(o.visitedSkills,a=>(n(),i("div",null,[f(l,{class:"skill-link",to:`/skills/${a.url}`,target:"_blank"},{default:y(()=>[D(u(a.name),1)]),_:2},1032,["to"])]))),256)),o.noSkills?(n(),i("div",z)):g("",!0)])],64)}const K=m(F,[["render",G],["__scopeId","data-v-eb73782d"]]);const W={setup(){const s=$();return s.getUserDetails(),{userDetailsStore:s}},data(){return{notifications:[]}},computed:{},async created(){await this.getNotifications()},methods:{getNotifications(){fetch("/notifications/list").then(function(s){return s.json()}).then(s=>this.notifications=s)},SaveChange(){const s={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({notification1:this.notifications.notification_1,notification2:this.notifications.notification_2})};var t="/notifications/edit";fetch(t,s)}}},X=s=>(k("data-v-1b87a8b3"),s=s(),v(),s),Y={class:"table table-bordered"},ss=X(()=>e("thead",null,[e("tr",null,[e("th",{scope:"col"},"Notifications")])],-1)),ts={key:0},es={key:1},ns={key:0},os={key:1};function is(s,t,d,r,o,c){return n(),i("table",Y,[ss,e("tbody",null,[e("tr",null,[r.userDetailsStore.role!="admin"?(n(),i("td",ts,u(o.notifications.notification_1),1)):(n(),i("td",es,[S(e("textarea",{onChange:t[0]||(t[0]=l=>c.SaveChange()),"onUpdate:modelValue":t[1]||(t[1]=l=>o.notifications.notification_1=l),class:"form-control",rows:"3"},null,544),[[p,o.notifications.notification_1]])]))]),e("tr",null,[r.userDetailsStore.role!="admin"?(n(),i("td",ns,u(o.notifications.notification_2),1)):(n(),i("td",os,[S(e("textarea",{onChange:t[2]||(t[2]=l=>c.SaveChange()),"onUpdate:modelValue":t[3]||(t[3]=l=>o.notifications.notification_2=l),class:"form-control",rows:"3"},null,544),[[p,o.notifications.notification_2]])]))])])])}const ls=m(W,[["render",is],["__scopeId","data-v-1b87a8b3"]]);const rs={setup(){const s=$();return s.getUserDetails(),{userDetailsStore:s}},data(){return{news:[]}},computed:{},async created(){await this.getNews()},methods:{getNews(){fetch("/news/list").then(function(s){return s.json()}).then(s=>this.news=s)},SaveChange(){const s={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({news1:this.news.news_1,news2:this.news.news_2,news3:this.news.news_3,news4:this.news.news_4})};var t="/news/edit";fetch(t,s)}}},as=s=>(k("data-v-3fd6bf6b"),s=s(),v(),s),ds={class:""},cs={class:"table table-bordered"},us=as(()=>e("thead",null,[e("tr",null,[e("th",null,"News")])],-1)),_s={class:"row border"},hs={id:"first-cell",class:"col-lg-3 border col-md-6 news-cell"},ms={key:0},Ss={class:"col-lg-3 col-md-6 border news-cell"},ps={key:0},fs={class:"col-lg-3 col-md-6 border news-cell"},ks={key:0},vs={id:"last-cell",class:"col-lg-3 border col-md-6 news-cell"},ws={key:0};function gs(s,t,d,r,o,c){return n(),i("div",ds,[e("table",cs,[us,e("tbody",null,[e("tr",null,[e("div",_s,[e("div",hs,[r.userDetailsStore.role!="admin"?(n(),i("p",ms,u(o.news.news_1),1)):S((n(),i("textarea",{key:1,onChange:t[0]||(t[0]=l=>c.SaveChange()),"onUpdate:modelValue":t[1]||(t[1]=l=>o.news.news_1=l),class:"form-control",rows:"3"},null,544)),[[p,o.news.news_1]])]),e("div",Ss,[r.userDetailsStore.role!="admin"?(n(),i("p",ps,u(o.news.news_2),1)):S((n(),i("textarea",{key:1,onChange:t[2]||(t[2]=l=>c.SaveChange()),"onUpdate:modelValue":t[3]||(t[3]=l=>o.news.news_2=l),class:"form-control",rows:"3"},null,544)),[[p,o.news.news_2]])]),e("div",fs,[r.userDetailsStore.role!="admin"?(n(),i("p",ks,u(o.news.news_3),1)):S((n(),i("textarea",{key:1,onChange:t[4]||(t[4]=l=>c.SaveChange()),"onUpdate:modelValue":t[5]||(t[5]=l=>o.news.news_3=l),class:"form-control",rows:"3"},null,544)),[[p,o.news.news_3]])]),e("div",vs,[r.userDetailsStore.role!="admin"?(n(),i("p",ws,u(o.news.news_4),1)):S((n(),i("textarea",{key:1,onChange:t[6]||(t[6]=l=>c.SaveChange()),"onUpdate:modelValue":t[7]||(t[7]=l=>o.news.news_4=l),class:"form-control",rows:"3"},null,544)),[[p,o.news.news_4]])])])])])])])}const bs=m(rs,[["render",gs],["__scopeId","data-v-3fd6bf6b"]]);const ys={setup(){const s=q(),t=V(),d=j(),r=$(),o=A();return{usersStore:t,skillsStore:d,assessmentsStore:s,userDetailsStore:r,instructorStudentsStore:o}},data(){return{assessments:[],studentIds:[]}},async created(){await this.assessmentsStore.getAssessments(),this.instructorStudentsStore.instructorStudentsList.length==0&&await this.instructorStudentsStore.getInstructorStudentsList();for(let s=0;s<this.instructorStudentsStore.instructorStudentsList.length;s++)this.userDetailsStore.userId==this.instructorStudentsStore.instructorStudentsList[s].instructor_id&&this.studentIds.push(this.instructorStudentsStore.instructorStudentsList[s].student_id);for(let s=0;s<this.assessmentsStore.assessments.length;s++)for(let t=0;t<this.studentIds.length;t++)this.assessmentsStore.assessments[s].student_id==this.studentIds[t]&&this.assessments.push(this.assessmentsStore.assessments[s]);for(let s=0;s<this.assessments.length;s++){let t=new Date(this.assessments[s].date).toDateString();this.assessments[s].date=t}this.usersStore.users.length==0&&await this.usersStore.getUsers();for(let s=0;s<this.assessments.length;s++)for(let t=0;t<this.usersStore.users.length;t++)this.assessments[s].student_id==this.usersStore.users[t].id&&(this.assessments[s].studentUsername=this.usersStore.users[t].username);this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList();for(let s=0;s<this.assessments.length;s++)for(let t=0;t<this.skillsStore.skillsList.length;t++)this.assessments[s].skill_id==this.skillsStore.skillsList[t].id&&(this.assessments[s].skillName=this.skillsStore.skillsList[t].name)},computed:{},methods:{}},$s=s=>(k("data-v-c217bc20"),s=s(),v(),s),Ds={class:"container-fluid"},Is=$s(()=>e("div",{id:"question-header"},[e("div",{id:"assessment-tile"},"Assessments")],-1)),xs={id:"list-body"},Ls={class:"assessment"},Ns={id:"student-name"},Cs={id:"skill-name"},Us={id:"date"};function Vs(s,t,d,r,o,c){const l=_("RouterLink");return n(),i("div",Ds,[Is,e("div",xs,[(n(!0),i(h,null,b(this.assessments,a=>(n(),i("div",Ls,[f(l,{class:"assessment-link",to:"/mark-assessment/"+a.id},{default:y(()=>[e("span",Ns,u(a.studentUsername)+", ",1),e("span",Cs,u(a.skillName)+", ",1),e("span",Us,u(a.date),1)]),_:2},1032,["to"])]))),256))])])}const js=m(ys,[["render",Vs],["__scopeId","data-v-c217bc20"]]);const qs={setup(){return{}},data(){return{questions:null}},components:{},async created(){await this.getStudentMCQuestions()},methods:{formatDate(s){var t=s.replace("T"," ");t=t.replace("Z"," ");let d=t.split(/[- :]/);var r=new Date(Date.UTC(d[0],d[1]-1,d[2],d[3],d[4],d[5])),o={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};return r=r.toLocaleDateString("en-US",o),r},async getStudentMCQuestions(){const t=await(await fetch("/questions/student-mc-questions/full-data-list")).json();this.questions=t}}},As=s=>(k("data-v-679c8198"),s=s(),v(),s),Ts={class:"container-fluid"},Ms=As(()=>e("div",{class:"question-header"},[e("h2",{class:"question-title"},"Student Question")],-1)),Qs={class:"list-body"},Hs={class:"question"},Ps={class:"student-name"},Bs={class:"skill-name"},Os={class:"date"};function Rs(s,t,d,r,o,c){const l=_("RouterLink");return n(),i("div",Ts,[Ms,e("div",Qs,[(n(!0),i(h,null,b(o.questions,a=>(n(),i("div",Hs,[f(l,{class:"question-link",to:`/check-student-question/${a.id}`},{default:y(()=>[e("span",Ps,u(a.student)+", ",1),e("span",Bs,u(a.skillname)+", ",1),e("span",Os,u(c.formatDate(a.create_date)),1)]),_:2},1032,["to"])]))),256))])])}const Fs=m(qs,[["render",Rs],["__scopeId","data-v-679c8198"]]),Js="/images/post-login.png";const Es={setup(){const s=$();return s.getUserDetails(),{userDetailsStore:s}},data(){return{}},components:{News:bs,Notifications:ls,StudentProgress:R,MarkAssessment:js,LastVisitedSkills:K,HubStudentQuestionList:Fs},computed:{name(){return this.userDetailsStore.firstName+" "+this.userDetailsStore.lastName}},methods:{}},Zs=e("div",{id:"banner"},[e("img",{src:T,class:""})],-1),zs={class:"container post-login-container min-vh-100"},Gs={class:"row content-row"},Ks={class:"col-lg-4 col-md-5 mb-4 pb-4 column mx-0"},Ws=["src"],Xs={class:"col-lg-4 col-md-7 mb-4 pb-4"},Ys={class:"col-lg-4 col-md-7 mb-4 pb-4"},st={class:"col-lg-3 col-md-5 mb-4 pb-4 column"},tt=e("div",{class:"col-lg-9 col-md-6 mb-4 pb-4 column d-none d-lg-block"},[e("img",{src:Js,class:"img-fluid"})],-1),et={id:"news-row",class:"row"};function nt(s,t,d,r,o,c){const l=_("StudentProgress"),a=_("MarkAssessment"),L=_("LastVisitedSkills"),N=_("HubStudentQuestionList"),C=_("Notifications"),U=_("News");return n(),i(h,null,[Zs,e("div",zs,[e("div",Gs,[e("div",Ks,[e("img",{id:"profile-img",src:r.userDetailsStore.avatar,class:"img-fluid rounded"},null,8,Ws)]),e("div",Xs,[r.userDetailsStore.role=="student"?(n(),w(l,{key:0,userId:r.userDetailsStore.userId},null,8,["userId"])):r.userDetailsStore.role=="instructor"?(n(),w(a,{key:1})):g("",!0)]),e("div",Ys,[r.userDetailsStore.role=="student"?(n(),w(L,{key:0,userId:r.userDetailsStore.userId},null,8,["userId"])):r.userDetailsStore.role=="instructor"?(n(),w(N,{key:1})):g("",!0)]),e("div",st,[f(C)]),tt]),e("div",et,[f(U)])])],64)}const at=m(Es,[["render",nt]]);export{at as default};
