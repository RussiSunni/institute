import{_ as S,f as C,r as p,o as l,c as i,b as s,F as f,x as $,y as a,t as c,C as m,a as u,h as b,i as k,d as w,k as N,T as g}from"./main-1f7c87ff.js";import{u as D,a as I,b as W}from"./EssayQuestionsStore-874a60ee.js";const Q={props:["userId"],setup(){const n=C(),o=D(),r=I(),_=W();return{skillsStore:n,resourcesStore:o,mcQuestionsStore:r,essayQuestionsStore:_}},data(){return{contentFlags:[],rows:[],currentChooseSkill:"",showActionWarnModal:!1,showSkillWarnModal:!1}},components:{},async created(){},async mounted(){await this.getContentFlagLogs(),this.contentFlags.forEach(n=>{const o=JSON.parse(n.content_obj),r=new Date(n.create_date),_=r.toLocaleString("en-gb",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),d={date:r.toLocaleTimeString()+` (${_})`,action:n.action,question:o.question,questionName:o.question_name,skillName:o.name,id:n.id,skill_deleted:o.skill_deleted};switch(n.flag_type){case"mc_question":d.type="mc_question",d.questionId=o.question_id,d.skillId=o.skill_id;break;case"resource":d.type="resource",d.skillId=o.skill_id;break;case"skill":d.type="skill",d.skillId=o.skill_id;break;default:d.type="delete";break}this.rows.push(d)})},methods:{async getContentFlagLogs(){const n=await fetch(`/user-actions/${this.userId}/flag`);this.contentFlags=await n.json()},actionColor(n){switch(n){case"create":return"create-action";case"update":return"update-action";default:return"delete-action"}},handleNoneLinkClick(n,o){n==="delete"?this.showActionWarnModal=!0:(this.showSkillWarnModal=!0,this.currentChooseSkill=o)}}},j={key:0,class:"container-md main-container"},A={class:"d-flex flex-column gap-3"},L={key:0},U={key:0},O=["onClick"],T={key:1},R=["onClick"],B={key:2},K=["onClick"],E={key:3},z={key:1,class:"shake"},V={key:2},H={id:"myModal",class:"modal"},J={class:"modal-content skill-modal"},q={class:"mb-4"},P={class:"modal-label"},G={class:"skill-modal-text"},X={class:"d-flex justify-content-center"},Y=s("div",null,"OK",-1),Z=[Y],F={key:3},ss={id:"myModal",class:"modal"},es={class:"modal-content skill-modal"},ts={class:"mb-4"},os={class:"modal-label"},ns={class:"skill-modal-text"},ls={class:"d-flex justify-content-center"},is=s("div",null,"OK",-1),cs=[is],as={key:4},ds={id:"myModal",class:"modal"},rs={class:"modal-content"},us=s("div",{class:"d-flex gap-4 justify-content-center mb-4"},[s("div",{class:"modal-label"},"this flag is deleted !!")],-1),_s={class:"d-flex justify-content-center"},hs=s("div",null,"OK",-1),ks=[hs];function ms(n,o,r,_,t,d){const h=p("router-link");return l(),i(f,null,[t.rows.length?(l(),i("div",j,[s("div",A,[(l(!0),i(f,null,$(t.rows,e=>(l(),i("div",null,[a(c(e.date)+" ",1),e.type==="skill"?(l(),i("span",L,[s("span",{class:m(d.actionColor(e.action))}," - "+c(e.action),3),e.action=="delete"?(l(),i("span",U," flag with id: "+c(e.id),1)):u("",!0),a(" flag on skill: "),e.action==="delete"||e.skill_deleted===1?(l(),i("span",{key:1,class:"skill-link",onClick:y=>d.handleNoneLinkClick(e.action,e.skillName)},c(e.skillName),9,O)):(l(),b(h,{key:2,class:"skill-link",target:"_blank",to:`/skills/${e.skillId}`},{default:k(()=>[a(c(e.skillName),1)]),_:2},1032,["to"]))])):u("",!0),e.type==="resource"?(l(),i("span",T,[s("span",{class:m(d.actionColor(e.action))}," - "+c(e.action),3),a(" flag on resource of skill: "),e.action==="delete"||e.skill_deleted===1?(l(),i("span",{key:0,class:"skill-link",onClick:y=>d.handleNoneLinkClick(e.action,e.skillName)},c(e.skillName),9,R)):(l(),b(h,{key:1,class:"skill-link",target:"_blank",to:`/skills/${e.skillId}`},{default:k(()=>[a(c(e.skillName),1)]),_:2},1032,["to"]))])):u("",!0),e.type==="mc_question"?(l(),i("span",B,[s("span",{class:m(d.actionColor(e.action))}," - "+c(e.action),3),a(" flag on mc_question "+c('"'+e.questionName+'"')+": ",1),w(h,{class:"question-link",target:"_blank",to:`/skills/${e.skillId}/question-bank`},{default:k(()=>[a(c(e.question),1)]),_:2},1032,["to"]),a(" on skill: "),e.action==="delete"||e.skill_deleted===1?(l(),i("span",{key:0,class:"skill-link",onClick:y=>d.handleNoneLinkClick(e.action,e.skillName)},c(e.skillName),9,K)):(l(),b(h,{key:1,class:"skill-link",target:"_blank",to:`/skills/${e.skillId}`},{default:k(()=>[a(c(e.skillName),1)]),_:2},1032,["to"]))])):u("",!0),e.type==="delete"?(l(),i("span",E,[s("span",{class:m(d.actionColor(e.action))}," - "+c(e.action),3),a(" flag with id "+c(e.id),1)])):u("",!0)]))),256))])])):(l(),i("div",z,"The user has no action on flags")),t.showSkillWarnModal?(l(),i("div",V,[s("div",H,[s("div",J,[s("div",q,[s("div",P,[a(" Skill "),s("span",G,c(t.currentChooseSkill),1),a(" is deleted !! ")])]),s("div",X,[s("button",{type:"button",class:"btn green-btn w-fit",onClick:o[0]||(o[0]=e=>t.showSkillWarnModal=!1)},Z)])])])])):u("",!0),t.showSkillWarnModal?(l(),i("div",F,[s("div",ss,[s("div",es,[s("div",ts,[s("div",os,[a(" Skill "),s("span",ns,c(t.currentChooseSkill),1),a(" is deleted !! ")])]),s("div",ls,[s("button",{type:"button",class:"btn green-btn w-fit",onClick:o[1]||(o[1]=e=>t.showSkillWarnModal=!1)},cs)])])])])):u("",!0),t.showActionWarnModal?(l(),i("div",as,[s("div",ds,[s("div",rs,[us,s("div",_s,[s("button",{type:"button",class:"btn green-btn w-fit",onClick:o[2]||(o[2]=e=>t.showActionWarnModal=!1)},ks)])])])])):u("",!0)],64)}const ws=S(Q,[["render",ms]]),ps={props:["userId"],data(){return{resourcesData:[],rows:[],showWarnModal:!1,currentChooseSkill:"",showActionWarnModal:!1,showSkillWarnModal:!1}},components:{},async created(){await this.getResourceLogs(),this.resourcesData.forEach(n=>{const o=JSON.parse(n.content_obj),r=new Date(n.create_date),_=r.toLocaleString("en-gb",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),t=r.toLocaleTimeString();this.rows.push({skillName:o.skill_name,resourceId:n.content_id,skillId:o.skill_id,action:n.action,date:_,time:t,id:n.id,skillDeleted:o.skill_deleted,resourceDeleted:o.resource_deleted})})},methods:{async getResourceLogs(){const n=await fetch(`/user-actions/${this.userId}/resource`);this.resourcesData=await n.json()},actionColor(n){switch(n){case"create":return"create-action";case"update":return"update-action";default:return"delete-action"}},handleNoneLinkClick(n,o,r){n==="delete"?this.showActionWarnModal=!0:r?this.showActionWarnModal=!0:(this.showSkillWarnModal=!0,this.currentChooseSkill=o)}}},fs={key:0,class:"container-md main-container"},vs={class:"d-flex flex-column"},ys=s("span",null," source in forum of skill: ",-1),bs=["onClick"],Ss={key:1,class:"shake"},gs={key:2},$s={id:"myModal",class:"modal"},xs={class:"modal-content skill-modal"},Ms={class:"modal-label"},Cs={class:"skill-modal-text"},Ns={class:"d-flex justify-content-center"},Ds=s("div",null,"OK",-1),Is=[Ds],Ws={key:3},Qs={id:"myModal",class:"modal"},js={class:"modal-content"},As=s("div",{class:"d-flex gap-4 justify-content-center mb-4"},[s("div",{class:"modal-label"},"Resource is deleted !!")],-1),Ls={class:"d-flex justify-content-center"},Us=s("div",null,"OK",-1),Os=[Us];function Ts(n,o,r,_,t,d){const h=p("router-link");return l(),i(f,null,[t.rows.length?(l(),i("div",fs,[s("div",vs,[(l(!0),i(f,null,$(t.rows,e=>(l(),i("div",null,[a(c(e.time)+" ("+c(e.date)+") - ",1),s("span",{class:m(d.actionColor(e.action))},c(e.action),3),ys,e.action==="delete"||e.skillDeleted===1||e.resourceDeleted===1?(l(),i("span",{key:0,class:"skill-link",onClick:y=>d.handleNoneLinkClick(e.action,e.skillName,e.resourceDeleted)},c(e.skillName),9,bs)):(l(),b(h,{key:1,class:"skill-link",target:"_blank",to:`/skills/${e.skillId}`},{default:k(()=>[a(c(e.skillName),1)]),_:2},1032,["to"]))]))),256))])])):(l(),i("div",Ss,"The user has no action on resource")),t.showSkillWarnModal?(l(),i("div",gs,[s("div",$s,[s("div",xs,[s("div",Ms,[a(" Skill "),s("span",Cs,c(t.currentChooseSkill),1),a(" is deleted !! ")]),s("div",Ns,[s("button",{type:"button",class:"btn green-btn w-fit",onClick:o[0]||(o[0]=e=>t.showSkillWarnModal=!1)},Is)])])])])):u("",!0),t.showActionWarnModal?(l(),i("div",Ws,[s("div",Qs,[s("div",js,[As,s("div",Ls,[s("button",{type:"button",class:"btn green-btn w-fit",onClick:o[1]||(o[1]=e=>t.showActionWarnModal=!1)},Os)])])])])):u("",!0)],64)}const Rs=S(ps,[["render",Ts]]),Bs={props:["userId"],data(){return{questionsData:[],rows:[],showSkillWarnModal:!1,showActionWarnModal:!1,currentChooseSkill:""}},components:{},async created(){await this.getMcQuestionsLog(),this.questionsData.forEach(n=>{const o=JSON.parse(n.content_obj),r=new Date(n.create_date),_=r.toLocaleString("en-gb",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),t=r.toLocaleTimeString();this.rows.push({question_name:o.question_name,skillName:o.skill_name,resourceId:n.content_id,skillId:o.skill_id,action:n.action,date:_,time:t,id:n.id,studentName:o.student_name,studentId:o.student_id,type:n.content_type,skillDeleted:o.skill_deleted,questionDeleted:o.question_deleted})})},methods:{async getMcQuestionsLog(){const n=await fetch(`/user-actions/${this.userId}/question`);this.questionsData=await n.json()},handleNoneLinkClick(n,o,r){n==="delete"||r?this.showActionWarnModal=!0:(this.showSkillWarnModal=!0,this.currentChooseSkill=o)},actionColor(n){switch(n){case"create":return"create-action";case"update":return"update-action";case"bulk-create":return"bulk-create-action";default:return"delete-action"}}}},Ks={key:0,class:"container-md main-container"},Es={class:"d-flex flex-column"},zs={key:0},Vs={key:1},Hs=["onClick"],Js={key:1,class:"shake"},qs={key:2},Ps={id:"myModal",class:"modal"},Gs={class:"modal-content skill-modal"},Xs={class:"mb-4"},Ys={class:"modal-label"},Zs={class:"skill-modal-text"},Fs={class:"d-flex justify-content-center"},se=s("div",null,"OK",-1),ee=[se],te={key:3},oe={id:"myModal",class:"modal"},ne={class:"modal-content"},le=s("div",{class:"d-flex gap-4 justify-content-center mb-4"},[s("div",{class:"modal-label"},"Question is deleted !!")],-1),ie={class:"d-flex justify-content-center"},ce=s("div",null,"OK",-1),ae=[ce];function de(n,o,r,_,t,d){const h=p("router-link");return l(),i(f,null,[t.rows.length>0?(l(),i("div",Ks,[s("div",Es,[(l(!0),i(f,null,$(t.rows,e=>(l(),i("div",null,[a(c(e.time)+" ("+c(e.date)+") ",1),s("span",{class:m(d.actionColor(e.action))}," - "+c(e.action),3),e.type==="mc_question"?(l(),i("span",zs,c(' "'+e.question_name+'"')+" in question bank of skill: ",1)):u("",!0),e.type==="essay_question"?(l(),i("span",Vs," essay question "+c(' "'+e.question_name+'"')+" in question bank of skill: ",1)):u("",!0),e.action==="delete"||e.skillDeleted===1||e.questionDeleted===1?(l(),i("span",{key:2,class:"skill-link",onClick:y=>d.handleNoneLinkClick(e.action,e.skillName,e.questionDeleted)},c(e.skillName),9,Hs)):(l(),b(h,{key:3,class:"skill-link",target:"_blank",to:`/skills/${e.skillId}`},{default:k(()=>[a(c(e.skillName),1)]),_:2},1032,["to"]))]))),256))])])):(l(),i("div",Js," The user has no action on multiple-choice questions ")),t.showSkillWarnModal?(l(),i("div",qs,[s("div",Ps,[s("div",Gs,[s("div",Xs,[s("div",Ys,[a(" Skill "),s("span",Zs,c(t.currentChooseSkill),1),a(" is deleted !! ")])]),s("div",Fs,[s("button",{type:"button",class:"btn green-btn w-fit",onClick:o[0]||(o[0]=e=>t.showSkillWarnModal=!1)},ee)])])])])):u("",!0),t.showActionWarnModal?(l(),i("div",te,[s("div",oe,[s("div",ne,[le,s("div",ie,[s("button",{type:"button",class:"btn green-btn w-fit",onClick:o[1]||(o[1]=e=>t.showActionWarnModal=!1)},ae)])])])])):u("",!0)],64)}const re=S(Bs,[["render",de]]),ue={props:["userId"],data(){return{skillsData:[],rows:[],showWarnModal:!1,currentChooseSkill:""}},components:{},async created(){await this.getSkillLogs(),this.skillsData.forEach(n=>{const o=JSON.parse(n.content_obj),r=new Date(n.create_date),_=r.toLocaleString("en-gb",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),t=r.toLocaleTimeString();this.rows.push({skillName:o.skill_name,resourceId:n.content_id,skillId:o.skill_id,action:n.action,date:_,time:t,id:n.id,is_deleted:o.is_deleted})})},methods:{async getSkillLogs(){const n=await fetch(`/user-actions/${this.userId}/skill`);this.skillsData=await n.json()},actionColor(n){switch(n){case"create":return"create-action";case"update":return"update-action";default:return"delete-action"}}}},_e={key:0,class:"container-md main-container"},he={class:"d-flex flex-column"},ke=s("span",null," skill: ",-1),me=["onClick"],we={key:1,class:"shake"},pe={key:2},fe={id:"myModal",class:"modal"},ve={class:"modal-content skill-modal"},ye={class:"modal-label"},be={class:"skill-modal-text"},Se={class:"d-flex justify-content-center"},ge=s("div",null,"OK",-1),$e=[ge];function xe(n,o,r,_,t,d){const h=p("router-link");return l(),i(f,null,[t.rows.length?(l(),i("div",_e,[s("div",he,[(l(!0),i(f,null,$(t.rows,e=>(l(),i("div",null,[a(c(e.time)+" ("+c(e.date)+") - ",1),s("span",{class:m(d.actionColor(e.action))},c(e.action),3),ke,e.action==="delete"||e.is_deleted===1?(l(),i("span",{key:0,class:"skill-link",onClick:y=>{t.showWarnModal=!0,t.currentChooseSkill=e.skillName}},c(e.skillName),9,me)):(l(),b(h,{key:1,class:"skill-link",target:"_blank",to:`/skills/${e.skillId}`},{default:k(()=>[a(c(e.skillName),1)]),_:2},1032,["to"]))]))),256))])])):(l(),i("div",we,"The user has no recorded actions on skills")),t.showWarnModal?(l(),i("div",pe,[s("div",fe,[s("div",ve,[s("div",ye,[a(" Skill "),s("span",be,c(t.currentChooseSkill),1),a(" is deleted !! ")]),s("div",Se,[s("button",{type:"button",class:"btn green-btn w-fit",onClick:o[0]||(o[0]=e=>t.showWarnModal=!1)},$e)])])])])):u("",!0)],64)}const Me=S(ue,[["render",xe]]),Ce={props:["userId","deleteMcQuestion"],data(){return{questionsData:[],rows:[],showWarnModal:!1}},components:{},async created(){await this.getMcQuestionsLog(),this.questionsData.forEach(n=>{const o=JSON.parse(n.content_obj),r=new Date(n.create_date),_=r.toLocaleString("en-gb",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),t=r.toLocaleTimeString();this.rows.push({skillName:o.skill_name,resourceId:n.content_id,skillId:o.skill_id,action:n.action,date:_,time:t,id:n.id,studentName:o.student_name,studentId:o.student_id,skill_deleted:o.skill_deleted})})},methods:{async getMcQuestionsLog(){const n=await fetch(`/user-actions/${this.userId}/student_mc_question`);this.questionsData=await n.json()},actionColor(n){switch(n){case"create":return"create-action";case"update":return"update-action";default:return"delete-action"}}}},Ne={key:0,class:"container-md main-container"},De={class:"d-flex flex-column"},Ie={key:0},We={key:1},Qe={key:2},je={key:1,class:"shake"},Ae={key:2},Le={id:"myModal",class:"modal"},Ue={class:"modal-content"},Oe=s("div",{class:"d-flex gap-4 justify-content-center mb-4"},[s("div",{class:"modal-label"},"This skill is deleted !!")],-1),Te={class:"d-flex justify-content-center"},Re=s("div",null,"OK",-1),Be=[Re];function Ke(n,o,r,_,t,d){const h=p("router-link");return l(),i(f,null,[t.rows.length>0?(l(),i("div",Ne,[s("div",De,[(l(!0),i(f,null,$(t.rows,e=>(l(),i("div",null,[a(c(e.time)+" ("+c(e.date)+") ",1),s("span",{class:m(d.actionColor(e.action))}," - "+c(e.action),3),e.action==="delete"?(l(),i("span",Ie," student mc_question with id "+c(e.id),1)):e.action==="create"?(l(),i("span",We," student mc_question for skill: ")):(l(),i("span",Qe,[a(" mc question of student "),w(h,{class:"user-link",target:"_blank",to:"/users"},{default:k(()=>[a(c(e.studentName),1)]),_:2},1024),a(" on skill: ")])),e.action==="delete"||e.skill_deleted===1?(l(),i("span",{key:3,class:"skill-link",onClick:o[0]||(o[0]=y=>t.showWarnModal=!0)},c(e.skillName),1)):(l(),b(h,{key:4,class:"skill-link",target:"_blank",to:`/skills/${e.skillId}`},{default:k(()=>[a(c(e.skillName),1)]),_:2},1032,["to"]))]))),256))])])):(l(),i("div",je," The user has no recorded actions on multiple-choice questions ")),t.showWarnModal?(l(),i("div",Ae,[s("div",Le,[s("div",Ue,[Oe,s("div",Te,[s("button",{type:"button",class:"btn green-btn w-25",onClick:o[1]||(o[1]=e=>t.showWarnModal=!1)},Be)])])])])):u("",!0)],64)}const Ee=S(Ce,[["render",Ke]]);const ze={setup(){return{usersStore:N()}},data(){return{user:{id:this.$route.params.id,firstName:null,lastName:null,username:null,role:null,avatar:null},showFlags:!1,showSources:!1,showMcQuestions:!1,showStudentMcQuestions:!1,showSkills:!1,mcQuestions:[],resources:[],flags:[],skillEdits:[]}},components:{UserFlagActions:ws,UserResourceActions:Rs,UserQuestionActions:re,UserStudentMcQuestionActions:Ee,UserSkillActions:Me},async created(){await this.getUserDetails()},methods:{async getUserDetails(){this.usersStore.users.length<1&&await this.usersStore.getUsers();for(let n=0;n<this.usersStore.users.length;n++)this.usersStore.users[n].id==this.user.id&&(this.user.firstName=this.usersStore.users[n].first_name,this.user.lastName=this.usersStore.users[n].last_name,this.user.username=this.usersStore.users[n].username,this.user.role=this.usersStore.users[n].role,this.user.avatar=this.usersStore.users[n].avatar)}}},Ve={class:"container"},He=s("div",{class:"mt-4 mb-4"},[s("div",{class:"page-title"},"User Activity Report")],-1),Je={class:"row"},qe={class:"d-flex flex-column flex-md-row gap-3"},Pe=["src"],Ge={class:"d-flex flex-column"},Xe={id:"user-name"},Ye={id:"role"},Ze={class:"d-flex flex-column"},Fe={class:"d-flex flex-row justify-content-between"},st=["title"],et=s("span",null," Flags ",-1),tt=s("path",{d:"M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"},null,-1),ot=[tt],nt={key:0},lt=s("hr",{class:"mt-5 mb-3"},null,-1),it={class:"d-flex flex-column"},ct={class:"d-flex flex-row justify-content-between"},at=["title"],dt=s("span",null,"Questions ",-1),rt=s("path",{d:"M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"},null,-1),ut=[rt],_t={key:0},ht={key:0,class:"mt-5 mb-3"},kt={class:"d-flex flex-column"},mt={class:"d-flex flex-row justify-content-between"},wt=["title"],pt=s("span",null,"Student MC Questions ",-1),ft=s("path",{d:"M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"},null,-1),vt=[ft],yt={key:0},bt=s("hr",{class:"mt-5 mb-3"},null,-1),St={class:"d-flex flex-column"},gt={class:"d-flex flex-row justify-content-between"},$t=["title"],xt=s("span",null," Sources ",-1),Mt=s("path",{d:"M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"},null,-1),Ct=[Mt],Nt={key:0},Dt=s("hr",{class:"mt-5 mb-3"},null,-1),It={class:"d-flex flex-column"},Wt={class:"d-flex flex-row justify-content-between"},Qt=["title"],jt=s("span",null," Skills ",-1),At=s("path",{d:"M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"},null,-1),Lt=[At],Ut={key:0},Ot=s("hr",{class:"mt-5 mb-3"},null,-1);function Tt(n,o,r,_,t,d){const h=p("UserFlagActions"),e=p("UserQuestionActions"),y=p("UserStudentMcQuestionActions"),x=p("UserResourceActions"),M=p("UserSkillActions");return l(),i("div",Ve,[He,s("div",Je,[s("div",qe,[s("img",{id:"activity-report-user-avatar",src:t.user.avatar},null,8,Pe),s("div",Ge,[s("div",Xe,c(t.user.username),1),s("div",Ye,c(t.user.role),1)])])]),s("div",null,[s("div",Ze,[s("div",Fe,[s("div",{class:"log-type",onClick:o[0]||(o[0]=v=>t.showFlags=!t.showFlags),"b-on-hover":"",title:t.showFlags?"collapse":"expand"},[et,(l(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"22",height:"22",fill:"#667085",class:m([t.showFlags?"arrow-point-down mb-2":"arrow-point-up "])},ot,2))],8,st)]),w(g,{name:"dropdown"},{default:k(()=>[t.showFlags?(l(),i("div",nt,[w(h,{ref:"contentFlagsPerUser",userId:t.user.id,onCloseFlagDiv:o[1]||(o[1]=v=>t.showFlags=!1)},null,8,["userId"])])):u("",!0)]),_:1})]),lt,s("div",it,[s("div",ct,[s("div",{class:"log-type",onClick:o[2]||(o[2]=v=>t.showMcQuestions=!t.showMcQuestions),"b-on-hover":"",title:t.showMcQuestions?"collapse":"expand"},[dt,(l(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"22",height:"22",fill:"#667085",class:m([t.showMcQuestions?"arrow-point-down mb-2":"arrow-point-up"])},ut,2))],8,at)]),w(g,{name:"dropdown"},{default:k(()=>[t.showMcQuestions?(l(),i("div",_t,[w(e,{userId:t.user.id,onCloseMcQuestionDiv:o[3]||(o[3]=v=>t.showMcQuestions=!1)},null,8,["userId"])])):u("",!0)]),_:1})]),t.user.role==="admin"?(l(),i("hr",ht)):u("",!0),s("div",kt,[s("div",mt,[s("div",{class:"log-type",onClick:o[4]||(o[4]=v=>t.showStudentMcQuestions=!t.showStudentMcQuestions),"b-on-hover":"",title:t.showStudentMcQuestions?"collapse":"expand"},[pt,(l(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"22",height:"22",fill:"#667085",class:m([t.showStudentMcQuestions?"arrow-point-down mb-2":"arrow-point-up"])},vt,2))],8,wt)]),w(g,{name:"dropdown"},{default:k(()=>[t.showStudentMcQuestions?(l(),i("div",yt,[w(y,{userId:t.user.id,onCloseMcQuestionDiv:o[5]||(o[5]=v=>t.showStudentMcQuestions=!1)},null,8,["userId"])])):u("",!0)]),_:1})]),bt,s("div",St,[s("div",gt,[s("div",{class:"log-type",onClick:o[6]||(o[6]=v=>t.showSources=!t.showSources),"b-on-hover":"",title:t.showSources?"collapse":"expand"},[xt,(l(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"22",height:"22",fill:"#667085",class:m([t.showSources?"arrow-point-down mb-2":"arrow-point-up "])},Ct,2))],8,$t)]),w(g,{name:"dropdown"},{default:k(()=>[t.showSources?(l(),i("div",Nt,[w(x,{userId:t.user.id,onCloseResourceDiv:o[7]||(o[7]=v=>t.showSources=!1)},null,8,["userId"])])):u("",!0)]),_:1})]),Dt,s("div",It,[s("div",Wt,[s("div",{class:"log-type",onClick:o[8]||(o[8]=v=>t.showSkills=!t.showSkills),"b-on-hover":"",title:t.showSkills?"collapse":"expand"},[jt,(l(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"22",height:"22",fill:"#667085",class:m([t.showSkills?"arrow-point-down mb-2":"arrow-point-up "])},Lt,2))],8,Qt)]),w(g,{name:"dropdown"},{default:k(()=>[t.showSkills?(l(),i("div",Ut,[w(M,{userId:t.user.id,onCloseResourceDiv:o[9]||(o[9]=v=>t.showSkills=!1)},null,8,["userId"])])):u("",!0)]),_:1})]),Ot])])}const Kt=S(ze,[["render",Tt]]);export{Kt as default};
