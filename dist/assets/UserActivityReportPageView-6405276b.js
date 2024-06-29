import{_ as g,q as Q,i as k,o as i,c as l,d as o,F as y,l as S,t as c,A as w,m as d,b as m,a as u,w as p,n as M,T as v}from"./main-529608dd.js";import{u as D,a as $,b as C}from"./EssayQuestionsStore-37fdfa22.js";const N={props:["userId","deleteFlag"],setup(){const e=Q(),n=D(),a=$(),_=C();return{skillsStore:e,resourcesStore:n,mcQuestionsStore:a,essayQuestionsStore:_}},data(){return{contentFlags:[],rows:[]}},components:{},async created(){},async mounted(){await this.getContentFlagLogs(),this.contentFlags.forEach(e=>{const n=JSON.parse(e.content_obj),a=new Date(e.create_date),_=a.toLocaleString("en-gb",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),r={date:a.toLocaleTimeString()+` (${_})`,action:e.action,questionName:n.question,skillName:n.name,id:e.id};switch(e.flag_type){case"mc_question":r.type="mc_question",r.questionId=n.question_id,r.skillId=n.skill_id;break;case"resource":r.type="resource",r.skillId=n.skill_id;break;case"skill":r.type="skill",r.skillId=n.skill_id;break;default:r.type="delete";break}this.rows.push(r)})},methods:{async getContentFlagLogs(){const e=await fetch(`/user-actions/${this.userId}/flag`);this.contentFlags=await e.json()},actionColor(e){switch(e){case"create":return"create-action";case"update":return"update-action";default:return"delete-action"}}}},U={key:0,class:"container-md main-container"},j={class:"d-flex flex-column gap-3"},L={class:"d-flex"},A={class:"d-flex w-fit me-1"},T={key:0,class:"d-flex flex-wrap ml-1"},R={key:0},O={key:1,class:"d-flex flex-wrap ml-1"},B={key:2,class:"d-flex flex-wrap ml-1"},E={key:3,class:"d-flex flex-wrap ml-1"},z={key:1,class:"shake"};function V(e,n,a,_,t,r){const h=k("router-link");return t.rows.length?(i(),l("div",U,[o("div",j,[(i(!0),l(y,null,S(t.rows,s=>(i(),l("div",L,[o("div",A,c(s.date),1),s.type==="skill"?(i(),l("div",T,[o("span",{class:w(r.actionColor(s.action))}," - "+c(s.action),3),d("   "),s.action=="delete"?(i(),l("span",R," flag with id: "+c(s.id),1)):m("",!0),d("flag on skill:  "),u(h,{class:"skill-link",target:"_blank",to:`/skills/${s.skillId}`},{default:p(()=>[d(c(s.skillName),1)]),_:2},1032,["to"])])):m("",!0),s.type==="resource"?(i(),l("div",O,[o("span",{class:w(r.actionColor(s.action))}," - "+c(s.action),3),d("  flag on resource of skill:  "),u(h,{class:"skill-link",target:"_blank",to:`/skills/${s.skillId}`},{default:p(()=>[d(c(s.skillName),1)]),_:2},1032,["to"])])):m("",!0),s.type==="mc_question"?(i(),l("div",B,[o("span",{class:w(r.actionColor(s.action))}," - "+c(s.action),3),d("  flag on mc_question: "),u(h,{class:"question-link",target:"_blank",to:`/skills/${s.skillId}/question-bank`},{default:p(()=>[d(c(s.questionName),1)]),_:2},1032,["to"]),d(" on skill:  "),u(h,{class:"skill-link",target:"_blank",to:`/skills/${s.skillId}`},{default:p(()=>[d(c(s.skillName),1)]),_:2},1032,["to"])])):m("",!0),s.type==="delete"?(i(),l("div",E,[o("span",{class:w(r.actionColor(s.action)+" me-1")}," - "+c(s.action),3),d(" flag with id "+c(s.id),1)])):m("",!0)]))),256))])])):(i(),l("div",z,"The user has no action on flags"))}const H=g(N,[["render",V]]),J={props:["userId","deleteResource"],data(){return{resourcesData:[],rows:[]}},components:{},async created(){await this.getResourceLogs(),this.resourcesData.forEach(e=>{const n=JSON.parse(e.content_obj),a=new Date(e.create_date),_=a.toLocaleString("en-gb",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),t=a.toLocaleTimeString();this.rows.push({skillName:n.skill_name,resourceId:e.content_id,skillId:n.skill_id,action:e.action,date:_,time:t,id:e.id})})},methods:{async getResourceLogs(){const e=await fetch(`/user-actions/${this.userId}/resource`);this.resourcesData=await e.json(),console.log(this.resourcesData)},actionColor(e){switch(e){case"create":return"create-action";case"update":return"update-action";default:return"delete-action"}}}},P={key:0,class:"container-md main-container"},G={class:"d-flex flex-column"},K={key:0},W={key:1},X={key:1,class:"shake"};function Y(e,n,a,_,t,r){const h=k("router-link");return t.rows.length?(i(),l("div",P,[o("div",G,[(i(!0),l(y,null,S(t.rows,s=>(i(),l("div",null,[d(c(s.time)+" ("+c(s.date)+") - ",1),o("span",{class:w(r.actionColor(s.action))},c(s.action),3),s.action==="delete"?(i(),l("span",K," a resource with id "+c(s.id),1)):(i(),l("span",W," resource for skill: ")),u(h,{class:"skill-link",target:"_blank",to:`/skills/${s.skillId}`},{default:p(()=>[d(c(s.skillName),1)]),_:2},1032,["to"])]))),256))])])):(i(),l("div",X,"The user has no action on resource"))}const Z=g(J,[["render",Y]]),F={props:["userId","deleteMcQuestion"],data(){return{questionsData:[],rows:[]}},components:{},async created(){await this.getMcQuestionsLog(),this.questionsData.forEach(e=>{e.action==="update"&&console.log(e);const n=JSON.parse(e.content_obj),a=new Date(e.create_date),_=a.toLocaleString("en-gb",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),t=a.toLocaleTimeString();this.rows.push({skillName:n.skill_name,resourceId:e.content_id,skillId:n.skill_id,action:e.action,date:_,time:t,id:e.id,studentName:n.student_name,studentId:n.student_id,type:e.content_type})})},methods:{async getMcQuestionsLog(){const e=await fetch(`/user-actions/${this.userId}/question`);this.questionsData=await e.json()},actionColor(e){switch(e){case"create":return"create-action";case"update":return"update-action";case"bulk-create":return"bulk-create-action";default:return"delete-action"}}}},q={key:0,class:"container-md main-container"},ee={class:"d-flex flex-column"},se={key:0},te={key:1},oe={key:2},ne={key:3},ie={key:1,class:"shake"};function le(e,n,a,_,t,r){const h=k("router-link");return t.rows.length>0?(i(),l("div",q,[o("div",ee,[(i(!0),l(y,null,S(t.rows,s=>(i(),l("div",null,[d(c(s.time)+" ("+c(s.date)+") ",1),o("span",{class:w(r.actionColor(s.action))}," - "+c(s.action),3),s.action==="delete"&&s.type==="mc_question"?(i(),l("span",se," mc question with id: "+c(s.id),1)):m("",!0),s.action!=="delete"&&s.type==="mc_question"?(i(),l("span",te," mc_question in skill: ")):m("",!0),s.action==="delete"&&s.type==="essay_question"?(i(),l("span",oe," essay question with id: "+c(s.id),1)):m("",!0),s.action!=="delete"&&s.type==="essay_question"?(i(),l("span",ne," essay question in skill: ")):m("",!0),u(h,{class:"skill-link",target:"_blank",to:`/skills/${s.skillId}`},{default:p(()=>[d(c(s.skillName),1)]),_:2},1032,["to"])]))),256))])])):(i(),l("div",ie," The user has no action on multiple-choice questions "))}const ce=g(F,[["render",le]]),re={props:["userId","deleteResource"],data(){return{skillsData:[],rows:[]}},components:{},async created(){await this.getSkillLogs(),this.skillsData.forEach(e=>{const n=JSON.parse(e.content_obj),a=new Date(e.create_date),_=a.toLocaleString("en-gb",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),t=a.toLocaleTimeString();this.rows.push({skillName:n.skill_name,resourceId:e.content_id,skillId:n.skill_id,action:e.action,date:_,time:t,id:e.id})})},methods:{async getSkillLogs(){const e=await fetch(`/user-actions/${this.userId}/skill`);this.skillsData=await e.json()},actionColor(e){switch(e){case"create":return"create-action";case"update":return"update-action";default:return"delete-action"}}}},ae={key:0,class:"container-md main-container"},de={class:"d-flex flex-column"},ue={key:0},_e={key:1},he={key:1,class:"shake"};function me(e,n,a,_,t,r){const h=k("router-link");return t.rows.length?(i(),l("div",ae,[o("div",de,[(i(!0),l(y,null,S(t.rows,s=>(i(),l("div",null,[d(c(s.time)+" ("+c(s.date)+") - ",1),o("span",{class:w(r.actionColor(s.action))},c(s.action),3),s.action==="delete"?(i(),l("span",ue," a skill with id "+c(s.id),1)):(i(),l("span",_e," skill: ")),u(h,{class:"skill-link",target:"_blank",to:`/skills/${s.skillId}`},{default:p(()=>[d(c(s.skillName),1)]),_:2},1032,["to"])]))),256))])])):(i(),l("div",he,"The user has no action on skill"))}const pe=g(re,[["render",me]]),we={props:["userId","deleteMcQuestion"],data(){return{questionsData:[],rows:[]}},components:{},async created(){await this.getMcQuestionsLog(),this.questionsData.forEach(e=>{e.action==="update"&&console.log(e);const n=JSON.parse(e.content_obj),a=new Date(e.create_date),_=a.toLocaleString("en-gb",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),t=a.toLocaleTimeString();this.rows.push({skillName:n.skill_name,resourceId:e.content_id,skillId:n.skill_id,action:e.action,date:_,time:t,id:e.id,studentName:n.student_name,studentId:n.student_id})})},methods:{async getMcQuestionsLog(){const e=await fetch(`/user-actions/${this.userId}/student_mc_question`);this.questionsData=await e.json()},actionColor(e){switch(e){case"create":return"create-action";case"update":return"update-action";default:return"delete-action"}}}},ke={key:0,class:"container-md main-container"},fe={class:"d-flex flex-column"},ge={key:0},ve={key:1},ye={key:2},Se={key:1,class:"shake"};function xe(e,n,a,_,t,r){const h=k("router-link");return t.rows.length>0?(i(),l("div",ke,[o("div",fe,[(i(!0),l(y,null,S(t.rows,s=>(i(),l("div",null,[d(c(s.time)+" ("+c(s.date)+") ",1),o("span",{class:w(r.actionColor(s.action))}," - "+c(s.action),3),s.action==="delete"?(i(),l("span",ge," student mc_question with id "+c(s.id),1)):s.action==="create"?(i(),l("span",ve," student mc_question for skill: ")):(i(),l("span",ye,[d(" mc question of student "),u(h,{class:"user-link",target:"_blank",to:"/users"},{default:p(()=>[d(c(s.studentName),1)]),_:2},1024),d(" on skill: ")])),u(h,{class:"skill-link",target:"_blank",to:`/skills/${s.skillId}`},{default:p(()=>[d(c(s.skillName),1)]),_:2},1032,["to"])]))),256))])])):(i(),l("div",Se," The user has no action on multiple-choice questions "))}const be=g(we,[["render",xe]]);const Ie={setup(){return{usersStore:M()}},data(){return{user:{id:this.$route.params.id,firstName:null,lastName:null,username:null,role:null,avatar:null},showFlags:!1,showSources:!1,showMcQuestions:!1,showStudentMcQuestions:!1,showSkills:!1,mcQuestions:[],resources:[],flags:[],skillEdits:[]}},components:{UserFlagActions:H,UserResourceActions:Z,UserQuestionActions:ce,UserStudentMcQuestionActions:be,UserSkillActions:pe},async created(){await this.getUserDetails()},methods:{async getUserDetails(){this.usersStore.users.length<1&&await this.usersStore.getUsers();for(let e=0;e<this.usersStore.users.length;e++)this.usersStore.users[e].id==this.user.id&&(this.user.firstName=this.usersStore.users[e].first_name,this.user.lastName=this.usersStore.users[e].last_name,this.user.username=this.usersStore.users[e].username,this.user.role=this.usersStore.users[e].role,this.user.avatar=this.usersStore.users[e].avatar)}}},Qe={class:"container"},Me=o("div",{class:"mt-4 mb-4"},[o("h1",null,"User Activity Report")],-1),De={class:"row"},$e={class:"d-flex flex-column flex-md-row gap-3"},Ce=["src"],Ne={class:"d-flex flex-column"},Ue={id:"user-name"},je={id:"role"},Le={class:"d-flex flex-column"},Ae={class:"d-flex flex-row justify-content-between"},Te=["title"],Re=o("span",null," Flags ",-1),Oe=o("path",{d:"M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"},null,-1),Be=[Oe],Ee={key:0},ze=o("hr",{class:"mt-5 mb-3"},null,-1),Ve={class:"d-flex flex-column"},He={class:"d-flex flex-row justify-content-between"},Je=["title"],Pe=o("span",null,"Questions ",-1),Ge=o("path",{d:"M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"},null,-1),Ke=[Ge],We={key:0},Xe=o("hr",{class:"mt-5 mb-3"},null,-1),Ye={class:"d-flex flex-column"},Ze={class:"d-flex flex-row justify-content-between"},Fe=["title"],qe=o("span",null,"Student MC Questions ",-1),es=o("path",{d:"M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"},null,-1),ss=[es],ts={key:0},os=o("hr",{class:"mt-5 mb-3"},null,-1),ns={class:"d-flex flex-column"},is={class:"d-flex flex-row justify-content-between"},ls=["title"],cs=o("span",null," Resources ",-1),rs=o("path",{d:"M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"},null,-1),as=[rs],ds={key:0},us=o("hr",{class:"mt-5 mb-3"},null,-1),_s={class:"d-flex flex-column"},hs={class:"d-flex flex-row justify-content-between"},ms=["title"],ps=o("span",null," Skills ",-1),ws=o("path",{d:"M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"},null,-1),ks=[ws],fs={key:0},gs=o("hr",{class:"mt-5 mb-3"},null,-1);function vs(e,n,a,_,t,r){const h=k("UserFlagActions"),s=k("UserQuestionActions"),x=k("UserStudentMcQuestionActions"),b=k("UserResourceActions"),I=k("UserSkillActions");return i(),l("div",Qe,[Me,o("div",De,[o("div",$e,[o("img",{id:"activity-report-user-avatar",src:t.user.avatar},null,8,Ce),o("div",Ne,[o("div",Ue,c(t.user.username),1),o("div",je,c(t.user.role),1)])])]),o("div",null,[o("div",Le,[o("div",Ae,[o("div",{class:"log-type",onClick:n[0]||(n[0]=f=>t.showFlags=!t.showFlags),"b-on-hover":"",title:t.showFlags?"collapse":"expand"},[Re,(i(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"22",height:"22",fill:"#667085",class:w([t.showFlags?"arrow-point-down mb-2":"arrow-point-up "])},Be,2))],8,Te)]),u(v,{name:"dropdown"},{default:p(()=>[t.showFlags?(i(),l("div",Ee,[u(h,{ref:"contentFlagsPerUser",userId:t.user.id,deleteFlag:e.deleteFlag,onCloseFlagDiv:n[1]||(n[1]=f=>t.showFlags=!1)},null,8,["userId","deleteFlag"])])):m("",!0)]),_:1})]),ze,o("div",Ve,[o("div",He,[o("div",{class:"log-type",onClick:n[2]||(n[2]=f=>t.showMcQuestions=!t.showMcQuestions),"b-on-hover":"",title:t.showMcQuestions?"collapse":"expand"},[Pe,(i(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"22",height:"22",fill:"#667085",class:w([t.showMcQuestions?"arrow-point-down mb-2":"arrow-point-up"])},Ke,2))],8,Je)]),u(v,{name:"dropdown"},{default:p(()=>[t.showMcQuestions?(i(),l("div",We,[u(s,{userId:t.user.id,deleteMcQuestion:e.deleteMcQuestion,onCloseMcQuestionDiv:n[3]||(n[3]=f=>t.showMcQuestions=!1)},null,8,["userId","deleteMcQuestion"])])):m("",!0)]),_:1})]),Xe,o("div",Ye,[o("div",Ze,[o("div",{class:"log-type",onClick:n[4]||(n[4]=f=>t.showStudentMcQuestions=!t.showStudentMcQuestions),"b-on-hover":"",title:t.showStudentMcQuestions?"collapse":"expand"},[qe,(i(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"22",height:"22",fill:"#667085",class:w([t.showStudentMcQuestions?"arrow-point-down mb-2":"arrow-point-up"])},ss,2))],8,Fe)]),u(v,{name:"dropdown"},{default:p(()=>[t.showStudentMcQuestions?(i(),l("div",ts,[u(x,{userId:t.user.id,deleteMcQuestion:e.deleteMcQuestion,onCloseMcQuestionDiv:n[5]||(n[5]=f=>t.showStudentMcQuestions=!1)},null,8,["userId","deleteMcQuestion"])])):m("",!0)]),_:1})]),os,o("div",ns,[o("div",is,[o("div",{class:"log-type",onClick:n[6]||(n[6]=f=>t.showSources=!t.showSources),"b-on-hover":"",title:t.showSources?"collapse":"expand"},[cs,(i(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"22",height:"22",fill:"#667085",class:w([t.showSources?"arrow-point-down mb-2":"arrow-point-up "])},as,2))],8,ls)]),u(v,{name:"dropdown"},{default:p(()=>[t.showSources?(i(),l("div",ds,[u(b,{userId:t.user.id,deleteResource:e.deleteResource,onCloseResourceDiv:n[7]||(n[7]=f=>t.showSources=!1)},null,8,["userId","deleteResource"])])):m("",!0)]),_:1})]),us,o("div",_s,[o("div",hs,[o("div",{class:"log-type",onClick:n[8]||(n[8]=f=>t.showSkills=!t.showSkills),"b-on-hover":"",title:t.showSkills?"collapse":"expand"},[ps,(i(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"22",height:"22",fill:"#667085",class:w([t.showSkills?"arrow-point-down mb-2":"arrow-point-up "])},ks,2))],8,ms)]),u(v,{name:"dropdown"},{default:p(()=>[t.showSkills?(i(),l("div",fs,[u(I,{userId:t.user.id,onCloseResourceDiv:n[9]||(n[9]=f=>t.showSkills=!1)},null,8,["userId"])])):m("",!0)]),_:1})]),gs])])}const xs=g(Ie,[["render",vs]]);export{xs as default};
