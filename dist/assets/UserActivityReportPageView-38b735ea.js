import{_ as S,f as M,r as f,o as l,c as n,b as e,F as v,y as C,m as c,t as a,C as m,a as u,h as b,i as h,d as w,k as N,T as $}from"./main-b424bb32.js";import{u as I,a as D,b as W}from"./EssayQuestionsStore-b182dac2.js";const Q={props:["userId"],setup(){const i=M(),o=I(),r=D(),k=W();return{skillsStore:i,resourcesStore:o,mcQuestionsStore:r,essayQuestionsStore:k}},data(){return{contentFlags:[],rows:[],currentChooseSkill:"",showActionWarnModal:!1,showSkillWarnModal:!1}},components:{},async created(){},async mounted(){await this.getContentFlagLogs(),this.contentFlags.forEach(i=>{const o=JSON.parse(i.content_obj),r=new Date(i.create_date),k=r.toLocaleString("en-gb",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),d={date:r.toLocaleTimeString()+` (${k})`,action:i.action,question:o.question,questionName:o.question_name,skillName:o.name,id:i.id,skill_deleted:o.skill_deleted};switch(i.flag_type){case"mc_question":d.type="mc_question",d.questionId=o.question_id,d.skillId=o.skill_id;break;case"resource":d.type="resource",d.skillId=o.skill_id;break;case"skill":d.type="skill",d.skillId=o.skill_id;break;case"essay_question":d.type="essay_question",d.skillId=o.skill_id;break;case"image_question":d.type="image_question",d.questionId=o.question_id,d.skillId=o.skill_id;break;default:d.type="delete";break}this.rows.push(d)})},methods:{async getContentFlagLogs(){const i=await fetch(`/user-actions/${this.userId}/flag`);this.contentFlags=await i.json()},actionColor(i){switch(i){case"create":return"create-action";case"update":return"update-action";default:return"delete-action"}},handleNoneLinkClick(i,o){i==="delete"?this.showActionWarnModal=!0:(this.showSkillWarnModal=!0,this.currentChooseSkill=o)}}},j={key:0,class:"container-md main-container"},A={class:"d-flex flex-column gap-3"},L={key:0},U={key:0},q=["onClick"],O={key:1},T=["onClick"],R={key:2},B=["onClick"],K={key:3},E=["onClick"],z={key:4},V=["onClick"],H={key:5},J={key:1,class:"shake"},P={key:2},G={id:"myModal",class:"modal"},X={class:"modal-content skill-modal"},Y={class:"mb-4"},Z={class:"modal-label"},F={class:"skill-modal-text"},ss={class:"d-flex justify-content-center"},es=e("div",null,"OK",-1),ts=[es],os={key:3},ls={id:"myModal",class:"modal"},is={class:"modal-content skill-modal"},ns={class:"mb-4"},as={class:"modal-label"},cs={class:"skill-modal-text"},ds={class:"d-flex justify-content-center"},rs=e("div",null,"OK",-1),us=[rs],_s={key:4},hs={id:"myModal",class:"modal"},ks={class:"modal-content"},ms=e("div",{class:"d-flex gap-4 justify-content-center mb-4"},[e("div",{class:"modal-label"},"this flag is deleted !!")],-1),ws={class:"d-flex justify-content-center"},ps=e("div",null,"OK",-1),fs=[ps];function vs(i,o,r,k,t,d){const _=f("router-link");return l(),n(v,null,[t.rows.length?(l(),n("div",j,[e("div",A,[(l(!0),n(v,null,C(t.rows,s=>(l(),n("div",null,[c(a(s.date)+" ",1),s.type==="skill"?(l(),n("span",L,[e("span",{class:m(d.actionColor(s.action))}," - "+a(s.action),3),s.action=="delete"?(l(),n("span",U," flag with id: "+a(s.id),1)):u("",!0),c(" flag on skill: "),s.action==="delete"||s.skill_deleted===1?(l(),n("span",{key:1,class:"skill-link",onClick:p=>d.handleNoneLinkClick(s.action,s.skillName)},a(s.skillName),9,q)):(l(),b(_,{key:2,class:"skill-link",target:"_blank",to:`/skills/${s.skillId}`},{default:h(()=>[c(a(s.skillName),1)]),_:2},1032,["to"]))])):u("",!0),s.type==="resource"?(l(),n("span",O,[e("span",{class:m(d.actionColor(s.action))}," - "+a(s.action),3),c(" flag on resource of skill: "),s.action==="delete"||s.skill_deleted===1?(l(),n("span",{key:0,class:"skill-link",onClick:p=>d.handleNoneLinkClick(s.action,s.skillName)},a(s.skillName),9,T)):(l(),b(_,{key:1,class:"skill-link",target:"_blank",to:`/skills/${s.skillId}`},{default:h(()=>[c(a(s.skillName),1)]),_:2},1032,["to"]))])):u("",!0),s.type==="mc_question"?(l(),n("span",R,[e("span",{class:m(d.actionColor(s.action))}," - "+a(s.action),3),c(" flag on mc_question "+a('"'+s.questionName+'"')+": ",1),w(_,{class:"question-link",target:"_blank",to:`/skills/${s.skillId}/question-bank`},{default:h(()=>[c(a(s.question),1)]),_:2},1032,["to"]),c(" on skill: "),s.action==="delete"||s.skill_deleted===1?(l(),n("span",{key:0,class:"skill-link",onClick:p=>d.handleNoneLinkClick(s.action,s.skillName)},a(s.skillName),9,B)):(l(),b(_,{key:1,class:"skill-link",target:"_blank",to:`/skills/${s.skillId}`},{default:h(()=>[c(a(s.skillName),1)]),_:2},1032,["to"]))])):u("",!0),s.type==="essay_question"?(l(),n("span",K,[e("span",{class:m(d.actionColor(s.action))}," - "+a(s.action),3),c(" flag on essay question "+a('"'+s.questionName+'"')+": ",1),w(_,{class:"question-link",target:"_blank",to:`/skills/${s.skillId}/question-bank`},{default:h(()=>[c(a(s.question),1)]),_:2},1032,["to"]),c(" on skill: "),s.action==="delete"||s.skill_deleted===1?(l(),n("span",{key:0,class:"skill-link",onClick:p=>d.handleNoneLinkClick(s.action,s.skillName)},a(s.skillName),9,E)):(l(),b(_,{key:1,class:"skill-link",target:"_blank",to:`/skills/${s.skillId}`},{default:h(()=>[c(a(s.skillName),1)]),_:2},1032,["to"]))])):u("",!0),s.type==="image_question"?(l(),n("span",z,[e("span",{class:m(d.actionColor(s.action))}," - "+a(s.action),3),c(" flag on image question "+a('"'+s.questionName+'"')+": ",1),w(_,{class:"question-link",target:"_blank",to:`/skills/${s.skillId}/question-bank`},{default:h(()=>[c(a(s.question),1)]),_:2},1032,["to"]),c(" on skill: "),s.action==="delete"||s.skill_deleted===1?(l(),n("span",{key:0,class:"skill-link",onClick:p=>d.handleNoneLinkClick(s.action,s.skillName)},a(s.skillName),9,V)):(l(),b(_,{key:1,class:"skill-link",target:"_blank",to:`/skills/${s.skillId}`},{default:h(()=>[c(a(s.skillName),1)]),_:2},1032,["to"]))])):u("",!0),s.type==="delete"?(l(),n("span",H,[e("span",{class:m(d.actionColor(s.action))}," - "+a(s.action),3),c(" flag with id "+a(s.id),1)])):u("",!0)]))),256))])])):(l(),n("div",J,"The user has no action on flags")),t.showSkillWarnModal?(l(),n("div",P,[e("div",G,[e("div",X,[e("div",Y,[e("div",Z,[c(" Skill "),e("span",F,a(t.currentChooseSkill),1),c(" is deleted !! ")])]),e("div",ss,[e("button",{type:"button",class:"btn green-btn w-fit",onClick:o[0]||(o[0]=s=>t.showSkillWarnModal=!1)},ts)])])])])):u("",!0),t.showSkillWarnModal?(l(),n("div",os,[e("div",ls,[e("div",is,[e("div",ns,[e("div",as,[c(" Skill "),e("span",cs,a(t.currentChooseSkill),1),c(" is deleted !! ")])]),e("div",ds,[e("button",{type:"button",class:"btn green-btn w-fit",onClick:o[1]||(o[1]=s=>t.showSkillWarnModal=!1)},us)])])])])):u("",!0),t.showActionWarnModal?(l(),n("div",_s,[e("div",hs,[e("div",ks,[ms,e("div",ws,[e("button",{type:"button",class:"btn green-btn w-fit",onClick:o[2]||(o[2]=s=>t.showActionWarnModal=!1)},fs)])])])])):u("",!0)],64)}const ys=S(Q,[["render",vs]]),bs={props:["userId"],data(){return{resourcesData:[],rows:[],showWarnModal:!1,currentChooseSkill:"",showActionWarnModal:!1,showSkillWarnModal:!1}},components:{},async created(){await this.getResourceLogs(),this.resourcesData.forEach(i=>{const o=JSON.parse(i.content_obj),r=new Date(i.create_date),k=r.toLocaleString("en-gb",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),t=r.toLocaleTimeString();this.rows.push({skillName:o.skill_name,resourceId:i.content_id,skillId:o.skill_id,action:i.action,date:k,time:t,id:i.id,skillDeleted:o.skill_deleted,resourceDeleted:o.resource_deleted})})},methods:{async getResourceLogs(){const i=await fetch(`/user-actions/${this.userId}/resource`);this.resourcesData=await i.json()},actionColor(i){switch(i){case"create":return"create-action";case"update":return"update-action";default:return"delete-action"}},handleNoneLinkClick(i,o,r){i==="delete"?this.showActionWarnModal=!0:r?this.showActionWarnModal=!0:(this.showSkillWarnModal=!0,this.currentChooseSkill=o)}}},Ss={key:0,class:"container-md main-container"},$s={class:"d-flex flex-column"},Cs=e("span",null," source in forum of skill: ",-1),gs=["onClick"],xs={key:1,class:"shake"},Ms={key:2},Ns={id:"myModal",class:"modal"},Is={class:"modal-content skill-modal"},Ds={class:"modal-label"},Ws={class:"skill-modal-text"},Qs={class:"d-flex justify-content-center"},js=e("div",null,"OK",-1),As=[js],Ls={key:3},Us={id:"myModal",class:"modal"},qs={class:"modal-content"},Os=e("div",{class:"d-flex gap-4 justify-content-center mb-4"},[e("div",{class:"modal-label"},"Resource is deleted !!")],-1),Ts={class:"d-flex justify-content-center"},Rs=e("div",null,"OK",-1),Bs=[Rs];function Ks(i,o,r,k,t,d){const _=f("router-link");return l(),n(v,null,[t.rows.length?(l(),n("div",Ss,[e("div",$s,[(l(!0),n(v,null,C(t.rows,s=>(l(),n("div",null,[c(a(s.time)+" ("+a(s.date)+") - ",1),e("span",{class:m(d.actionColor(s.action))},a(s.action),3),Cs,s.action==="delete"||s.skillDeleted===1||s.resourceDeleted===1?(l(),n("span",{key:0,class:"skill-link",onClick:p=>d.handleNoneLinkClick(s.action,s.skillName,s.resourceDeleted)},a(s.skillName),9,gs)):(l(),b(_,{key:1,class:"skill-link",target:"_blank",to:`/skills/${s.skillId}`},{default:h(()=>[c(a(s.skillName),1)]),_:2},1032,["to"]))]))),256))])])):(l(),n("div",xs,"The user has no action on resource")),t.showSkillWarnModal?(l(),n("div",Ms,[e("div",Ns,[e("div",Is,[e("div",Ds,[c(" Skill "),e("span",Ws,a(t.currentChooseSkill),1),c(" is deleted !! ")]),e("div",Qs,[e("button",{type:"button",class:"btn green-btn w-fit",onClick:o[0]||(o[0]=s=>t.showSkillWarnModal=!1)},As)])])])])):u("",!0),t.showActionWarnModal?(l(),n("div",Ls,[e("div",Us,[e("div",qs,[Os,e("div",Ts,[e("button",{type:"button",class:"btn green-btn w-fit",onClick:o[1]||(o[1]=s=>t.showActionWarnModal=!1)},Bs)])])])])):u("",!0)],64)}const Es=S(bs,[["render",Ks]]),zs={props:["userId"],data(){return{questionsData:[],rows:[],showSkillWarnModal:!1,showActionWarnModal:!1,currentChooseSkill:""}},components:{},async created(){await this.getMcQuestionsLog(),this.questionsData.forEach(i=>{const o=JSON.parse(i.content_obj),r=new Date(i.create_date),k=r.toLocaleString("en-gb",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),t=r.toLocaleTimeString();this.rows.push({question_name:o.question_name,skillName:o.skill_name,resourceId:i.content_id,skillId:o.skill_id,action:i.action,date:k,time:t,id:i.id,studentName:o.student_name,studentId:o.student_id,type:i.content_type,skillDeleted:o.skill_deleted,questionDeleted:o.question_deleted})})},methods:{async getMcQuestionsLog(){const i=await fetch(`/user-actions/${this.userId}/question`);this.questionsData=await i.json()},handleNoneLinkClick(i,o,r){i==="delete"||r?this.showActionWarnModal=!0:(this.showSkillWarnModal=!0,this.currentChooseSkill=o)},actionColor(i){switch(i){case"create":return"create-action";case"update":return"update-action";case"bulk-create":return"bulk-create-action";default:return"delete-action"}}}},Vs={key:0,class:"container-md main-container"},Hs={class:"d-flex flex-column"},Js={key:0},Ps={key:1},Gs=["onClick"],Xs={key:1,class:"shake"},Ys={key:2},Zs={id:"myModal",class:"modal"},Fs={class:"modal-content skill-modal"},se={class:"mb-4"},ee={class:"modal-label"},te={class:"skill-modal-text"},oe={class:"d-flex justify-content-center"},le=e("div",null,"OK",-1),ie=[le],ne={key:3},ae={id:"myModal",class:"modal"},ce={class:"modal-content"},de=e("div",{class:"d-flex gap-4 justify-content-center mb-4"},[e("div",{class:"modal-label"},"Question is deleted !!")],-1),re={class:"d-flex justify-content-center"},ue=e("div",null,"OK",-1),_e=[ue];function he(i,o,r,k,t,d){const _=f("router-link");return l(),n(v,null,[t.rows.length>0?(l(),n("div",Vs,[e("div",Hs,[(l(!0),n(v,null,C(t.rows,s=>(l(),n("div",null,[c(a(s.time)+" ("+a(s.date)+") ",1),e("span",{class:m(d.actionColor(s.action))}," - "+a(s.action),3),s.type==="mc_question"?(l(),n("span",Js,a(' "'+s.question_name+'"')+" in question bank of skill: ",1)):u("",!0),s.type==="essay_question"?(l(),n("span",Ps," essay question "+a(' "'+s.question_name+'"')+" in question bank of skill: ",1)):u("",!0),s.action==="delete"||s.skillDeleted===1||s.questionDeleted===1?(l(),n("span",{key:2,class:"skill-link",onClick:p=>d.handleNoneLinkClick(s.action,s.skillName,s.questionDeleted)},a(s.skillName),9,Gs)):(l(),b(_,{key:3,class:"skill-link",target:"_blank",to:`/skills/${s.skillId}`},{default:h(()=>[c(a(s.skillName),1)]),_:2},1032,["to"]))]))),256))])])):(l(),n("div",Xs," The user has no action on multiple-choice questions ")),t.showSkillWarnModal?(l(),n("div",Ys,[e("div",Zs,[e("div",Fs,[e("div",se,[e("div",ee,[c(" Skill "),e("span",te,a(t.currentChooseSkill),1),c(" is deleted !! ")])]),e("div",oe,[e("button",{type:"button",class:"btn green-btn w-fit",onClick:o[0]||(o[0]=s=>t.showSkillWarnModal=!1)},ie)])])])])):u("",!0),t.showActionWarnModal?(l(),n("div",ne,[e("div",ae,[e("div",ce,[de,e("div",re,[e("button",{type:"button",class:"btn green-btn w-fit",onClick:o[1]||(o[1]=s=>t.showActionWarnModal=!1)},_e)])])])])):u("",!0)],64)}const ke=S(zs,[["render",he]]),me={props:["userId"],data(){return{skillsData:[],rows:[],showWarnModal:!1,currentChooseSkill:""}},components:{},async created(){await this.getSkillLogs(),this.skillsData.forEach(i=>{const o=JSON.parse(i.content_obj),r=new Date(i.create_date),k=r.toLocaleString("en-gb",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),t=r.toLocaleTimeString();this.rows.push({skillName:o.skill_name,resourceId:i.content_id,skillId:o.skill_id,action:i.action,date:k,time:t,id:i.id,is_deleted:o.is_deleted})})},methods:{async getSkillLogs(){const i=await fetch(`/user-actions/${this.userId}/skill`);this.skillsData=await i.json()},actionColor(i){switch(i){case"create":return"create-action";case"update":return"update-action";default:return"delete-action"}}}},we={key:0,class:"container-md main-container"},pe={class:"d-flex flex-column"},fe=e("span",null," skill: ",-1),ve=["onClick"],ye={key:1,class:"shake"},be={key:2},Se={id:"myModal",class:"modal"},$e={class:"modal-content skill-modal"},Ce={class:"modal-label"},ge={class:"skill-modal-text"},xe={class:"d-flex justify-content-center"},Me=e("div",null,"OK",-1),Ne=[Me];function Ie(i,o,r,k,t,d){const _=f("router-link");return l(),n(v,null,[t.rows.length?(l(),n("div",we,[e("div",pe,[(l(!0),n(v,null,C(t.rows,s=>(l(),n("div",null,[c(a(s.time)+" ("+a(s.date)+") - ",1),e("span",{class:m(d.actionColor(s.action))},a(s.action),3),fe,s.action==="delete"||s.is_deleted===1?(l(),n("span",{key:0,class:"skill-link",onClick:p=>{t.showWarnModal=!0,t.currentChooseSkill=s.skillName}},a(s.skillName),9,ve)):(l(),b(_,{key:1,class:"skill-link",target:"_blank",to:`/skills/${s.skillId}`},{default:h(()=>[c(a(s.skillName),1)]),_:2},1032,["to"]))]))),256))])])):(l(),n("div",ye,"The user has no recorded actions on skills")),t.showWarnModal?(l(),n("div",be,[e("div",Se,[e("div",$e,[e("div",Ce,[c(" Skill "),e("span",ge,a(t.currentChooseSkill),1),c(" is deleted !! ")]),e("div",xe,[e("button",{type:"button",class:"btn green-btn w-fit",onClick:o[0]||(o[0]=s=>t.showWarnModal=!1)},Ne)])])])])):u("",!0)],64)}const De=S(me,[["render",Ie]]),We={props:["userId","deleteMcQuestion"],data(){return{questionsData:[],rows:[],showWarnModal:!1}},components:{},async created(){await this.getMcQuestionsLog(),this.questionsData.forEach(i=>{const o=JSON.parse(i.content_obj),r=new Date(i.create_date),k=r.toLocaleString("en-gb",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),t=r.toLocaleTimeString();this.rows.push({skillName:o.skill_name,resourceId:i.content_id,skillId:o.skill_id,action:i.action,date:k,time:t,id:i.id,studentName:o.student_name,studentId:o.student_id,skill_deleted:o.skill_deleted})})},methods:{async getMcQuestionsLog(){const i=await fetch(`/user-actions/${this.userId}/student_mc_question`);this.questionsData=await i.json()},actionColor(i){switch(i){case"create":return"create-action";case"update":return"update-action";default:return"delete-action"}}}},Qe={key:0,class:"container-md main-container"},je={class:"d-flex flex-column"},Ae={key:0},Le={key:1},Ue={key:2},qe={key:1,class:"shake"},Oe={key:2},Te={id:"myModal",class:"modal"},Re={class:"modal-content"},Be=e("div",{class:"d-flex gap-4 justify-content-center mb-4"},[e("div",{class:"modal-label"},"This skill is deleted !!")],-1),Ke={class:"d-flex justify-content-center"},Ee=e("div",null,"OK",-1),ze=[Ee];function Ve(i,o,r,k,t,d){const _=f("router-link");return l(),n(v,null,[t.rows.length>0?(l(),n("div",Qe,[e("div",je,[(l(!0),n(v,null,C(t.rows,s=>(l(),n("div",null,[c(a(s.time)+" ("+a(s.date)+") ",1),e("span",{class:m(d.actionColor(s.action))}," - "+a(s.action),3),s.action==="delete"?(l(),n("span",Ae," student mc_question with id "+a(s.id),1)):s.action==="create"?(l(),n("span",Le," student mc_question for skill: ")):(l(),n("span",Ue,[c(" mc question of student "),w(_,{class:"user-link",target:"_blank",to:"/users"},{default:h(()=>[c(a(s.studentName),1)]),_:2},1024),c(" on skill: ")])),s.action==="delete"||s.skill_deleted===1?(l(),n("span",{key:3,class:"skill-link",onClick:o[0]||(o[0]=p=>t.showWarnModal=!0)},a(s.skillName),1)):(l(),b(_,{key:4,class:"skill-link",target:"_blank",to:`/skills/${s.skillId}`},{default:h(()=>[c(a(s.skillName),1)]),_:2},1032,["to"]))]))),256))])])):(l(),n("div",qe," The user has no recorded actions on multiple-choice questions ")),t.showWarnModal?(l(),n("div",Oe,[e("div",Te,[e("div",Re,[Be,e("div",Ke,[e("button",{type:"button",class:"btn green-btn w-25",onClick:o[1]||(o[1]=s=>t.showWarnModal=!1)},ze)])])])])):u("",!0)],64)}const He=S(We,[["render",Ve]]);const Je={setup(){return{usersStore:N()}},data(){return{user:{id:this.$route.params.id,firstName:null,lastName:null,username:null,role:null,avatar:null},showFlags:!1,showSources:!1,showMcQuestions:!1,showStudentMcQuestions:!1,showSkills:!1,mcQuestions:[],resources:[],flags:[],skillEdits:[]}},components:{UserFlagActions:ys,UserResourceActions:Es,UserQuestionActions:ke,UserStudentMcQuestionActions:He,UserSkillActions:De},async created(){await this.getUserDetails()},methods:{async getUserDetails(){this.usersStore.users.length<1&&await this.usersStore.getUsers();for(let i=0;i<this.usersStore.users.length;i++)this.usersStore.users[i].id==this.user.id&&(this.user.firstName=this.usersStore.users[i].first_name,this.user.lastName=this.usersStore.users[i].last_name,this.user.username=this.usersStore.users[i].username,this.user.role=this.usersStore.users[i].role,this.user.avatar=this.usersStore.users[i].avatar)}}},Pe={class:"container"},Ge=e("div",{class:"mt-4 mb-4"},[e("div",{class:"page-title"},"User Activity Report")],-1),Xe={class:"row"},Ye={class:"d-flex flex-column flex-md-row gap-3"},Ze=["src"],Fe={class:"d-flex flex-column"},st={id:"user-name"},et={id:"role"},tt={class:"d-flex flex-column"},ot={class:"d-flex flex-row justify-content-between"},lt=["title"],it=e("span",null," Flags ",-1),nt=e("path",{d:"M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"},null,-1),at=[nt],ct={key:0},dt=e("hr",{class:"mt-5 mb-3"},null,-1),rt={class:"d-flex flex-column"},ut={class:"d-flex flex-row justify-content-between"},_t=["title"],ht=e("span",null,"Questions ",-1),kt=e("path",{d:"M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"},null,-1),mt=[kt],wt={key:0},pt={key:0,class:"mt-5 mb-3"},ft={class:"d-flex flex-column"},vt={class:"d-flex flex-row justify-content-between"},yt=["title"],bt=e("span",null,"Student MC Questions ",-1),St=e("path",{d:"M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"},null,-1),$t=[St],Ct={key:0},gt=e("hr",{class:"mt-5 mb-3"},null,-1),xt={class:"d-flex flex-column"},Mt={class:"d-flex flex-row justify-content-between"},Nt=["title"],It=e("span",null," Sources ",-1),Dt=e("path",{d:"M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"},null,-1),Wt=[Dt],Qt={key:0},jt=e("hr",{class:"mt-5 mb-3"},null,-1),At={class:"d-flex flex-column"},Lt={class:"d-flex flex-row justify-content-between"},Ut=["title"],qt=e("span",null," Skills ",-1),Ot=e("path",{d:"M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"},null,-1),Tt=[Ot],Rt={key:0},Bt=e("hr",{class:"mt-5 mb-3"},null,-1);function Kt(i,o,r,k,t,d){const _=f("UserFlagActions"),s=f("UserQuestionActions"),p=f("UserStudentMcQuestionActions"),g=f("UserResourceActions"),x=f("UserSkillActions");return l(),n("div",Pe,[Ge,e("div",Xe,[e("div",Ye,[e("img",{id:"activity-report-user-avatar",src:t.user.avatar},null,8,Ze),e("div",Fe,[e("div",st,a(t.user.username),1),e("div",et,a(t.user.role),1)])])]),e("div",null,[e("div",tt,[e("div",ot,[e("div",{class:"log-type",onClick:o[0]||(o[0]=y=>t.showFlags=!t.showFlags),"b-on-hover":"",title:t.showFlags?"collapse":"expand"},[it,(l(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"22",height:"22",fill:"#667085",class:m([t.showFlags?"arrow-point-down mb-2":"arrow-point-up "])},at,2))],8,lt)]),w($,{name:"dropdown"},{default:h(()=>[t.showFlags?(l(),n("div",ct,[w(_,{ref:"contentFlagsPerUser",userId:t.user.id,onCloseFlagDiv:o[1]||(o[1]=y=>t.showFlags=!1)},null,8,["userId"])])):u("",!0)]),_:1})]),dt,e("div",rt,[e("div",ut,[e("div",{class:"log-type",onClick:o[2]||(o[2]=y=>t.showMcQuestions=!t.showMcQuestions),"b-on-hover":"",title:t.showMcQuestions?"collapse":"expand"},[ht,(l(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"22",height:"22",fill:"#667085",class:m([t.showMcQuestions?"arrow-point-down mb-2":"arrow-point-up"])},mt,2))],8,_t)]),w($,{name:"dropdown"},{default:h(()=>[t.showMcQuestions?(l(),n("div",wt,[w(s,{userId:t.user.id,onCloseMcQuestionDiv:o[3]||(o[3]=y=>t.showMcQuestions=!1)},null,8,["userId"])])):u("",!0)]),_:1})]),t.user.role==="admin"?(l(),n("hr",pt)):u("",!0),e("div",ft,[e("div",vt,[e("div",{class:"log-type",onClick:o[4]||(o[4]=y=>t.showStudentMcQuestions=!t.showStudentMcQuestions),"b-on-hover":"",title:t.showStudentMcQuestions?"collapse":"expand"},[bt,(l(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"22",height:"22",fill:"#667085",class:m([t.showStudentMcQuestions?"arrow-point-down mb-2":"arrow-point-up"])},$t,2))],8,yt)]),w($,{name:"dropdown"},{default:h(()=>[t.showStudentMcQuestions?(l(),n("div",Ct,[w(p,{userId:t.user.id,onCloseMcQuestionDiv:o[5]||(o[5]=y=>t.showStudentMcQuestions=!1)},null,8,["userId"])])):u("",!0)]),_:1})]),gt,e("div",xt,[e("div",Mt,[e("div",{class:"log-type",onClick:o[6]||(o[6]=y=>t.showSources=!t.showSources),"b-on-hover":"",title:t.showSources?"collapse":"expand"},[It,(l(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"22",height:"22",fill:"#667085",class:m([t.showSources?"arrow-point-down mb-2":"arrow-point-up "])},Wt,2))],8,Nt)]),w($,{name:"dropdown"},{default:h(()=>[t.showSources?(l(),n("div",Qt,[w(g,{userId:t.user.id,onCloseResourceDiv:o[7]||(o[7]=y=>t.showSources=!1)},null,8,["userId"])])):u("",!0)]),_:1})]),jt,e("div",At,[e("div",Lt,[e("div",{class:"log-type",onClick:o[8]||(o[8]=y=>t.showSkills=!t.showSkills),"b-on-hover":"",title:t.showSkills?"collapse":"expand"},[qt,(l(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"22",height:"22",fill:"#667085",class:m([t.showSkills?"arrow-point-down mb-2":"arrow-point-up "])},Tt,2))],8,Ut)]),w($,{name:"dropdown"},{default:h(()=>[t.showSkills?(l(),n("div",Rt,[w(x,{userId:t.user.id,onCloseResourceDiv:o[9]||(o[9]=y=>t.showSkills=!1)},null,8,["userId"])])):u("",!0)]),_:1})]),Bt])])}const Vt=S(Je,[["render",Kt]]);export{Vt as default};
