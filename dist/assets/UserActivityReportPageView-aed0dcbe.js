import{_ as g,q as b,i as w,o as i,c as l,d as t,F as y,l as x,t as r,A as p,m as u,a as d,w as m,b as f,n as I,T as v}from"./main-cfda230a.js";import{u as C,a as Q,b as D}from"./EssayQuestionsStore-16c8e84d.js";const N={props:["userId","deleteFlag"],setup(){const s=b(),n=C(),a=Q(),_=D();return{skillsStore:s,resourcesStore:n,mcQuestionsStore:a,essayQuestionsStore:_}},data(){return{contentFlags:[],rows:[]}},components:{},async created(){},async mounted(){await this.getContentFlagLogs(),this.contentFlags.forEach(s=>{const n=JSON.parse(s.content_obj),a=new Date(s.create_date),_=a.toLocaleString("en-gb",{weekday:"long",year:"numeric",month:"long",day:"numeric",timeZone:"UTC"}),c={date:a.toLocaleTimeString()+` (${_})`,action:s.action,questionName:n.question,skillName:n.name};switch(s.flag_type){case"mc_question":c.type="mc_question",c.questionId=n.question_id,c.skillId=n.skill_id;break;case"resource":c.type="resource",c.skillId=n.skill_id;break;case"skill":c.type="skill",c.skillId=n.skill_id;break}this.rows.push(c)})},methods:{async getContentFlagLogs(){const s=await fetch(`/user-actions/${this.userId}/flag`);this.contentFlags=await s.json()},actionColor(s){switch(s){case"create":return"create-action";case"update":return"update-action";default:return"delete-action"}}}},U={key:0,class:"container-md main-container"},M={class:"d-flex flex-column gap-3"},R={class:"d-flex"},T={class:"d-flex w-fit me-1"},$={key:0,class:"d-flex flex-wrap ml-1"},j={key:1,class:"d-flex flex-wrap ml-1"},A={key:2,class:"d-flex flex-wrap ml-1"},L={key:1,class:"shake"};function q(s,n,a,_,e,c){const h=w("router-link");return e.rows.length?(i(),l("div",U,[t("div",M,[(i(!0),l(y,null,x(e.rows,o=>(i(),l("div",R,[t("div",T,r(o.date)+" -",1),o.type==="skill"?(i(),l("div",$,[t("span",{class:p(c.actionColor(o.action))},r(o.action),3),u("  flag on skill:  "),d(h,{class:"skill-link",target:"_blank",to:`/skills/${o.skillId}`},{default:m(()=>[u(r(o.skillName),1)]),_:2},1032,["to"])])):f("",!0),o.type==="resource"?(i(),l("div",j,[t("span",{class:p(c.actionColor(o.action))},r(o.action),3),u("  flag on resource of skill:  "),d(h,{class:"skill-link",target:"_blank",to:`/skills/${o.skillId}`},{default:m(()=>[u(r(o.skillName),1)]),_:2},1032,["to"])])):f("",!0),o.type==="mc_question"?(i(),l("div",A,[t("span",{class:p(c.actionColor(o.action))},r(o.action),3),u("  flag on mc_question: "),d(h,{class:"question-link",target:"_blank",to:`/skills/${o.skillId}/question-bank`},{default:m(()=>[u(r(o.questionName),1)]),_:2},1032,["to"]),u(" on skill:  "),d(h,{class:"skill-link",target:"_blank",to:`/skills/${o.skillId}`},{default:m(()=>[u(r(o.skillName),1)]),_:2},1032,["to"])])):f("",!0)]))),256))])])):(i(),l("div",L,"The user has no action on flags"))}const O=g(N,[["render",q]]),B={props:["userId","deleteResource"],data(){return{resourcesData:[],rows:[]}},components:{},async created(){await this.getResourceLogs(),this.resourcesData.forEach(s=>{const n=JSON.parse(s.content_obj),a=new Date(s.create_date),_=a.toLocaleString("en-gb",{weekday:"long",year:"numeric",month:"long",day:"numeric",timeZone:"UTC"}),e=a.toLocaleTimeString();this.rows.push({skillName:n.skill_name,resourceId:s.content_id,skillId:n.skill_id,action:s.action,date:_,time:e})})},methods:{async getResourceLogs(){const s=await fetch(`/user-actions/${this.userId}/resource`);this.resourcesData=await s.json()},actionColor(s){switch(s){case"create":return"create-action";case"update":return"update-action";default:return"delete-action"}}}},E={key:0,class:"container-md main-container"},V={class:"d-flex flex-column"},F={key:1,class:"shake"};function z(s,n,a,_,e,c){const h=w("router-link");return e.rows.length?(i(),l("div",E,[t("div",V,[(i(!0),l(y,null,x(e.rows,o=>(i(),l("div",null,[u(r(o.time)+" ("+r(o.date)+") - ",1),t("span",{class:p(c.actionColor(o.action))},r(o.action),3),u(" resource for skill: "),d(h,{class:"skill-link",target:"_blank",to:`/skills/${o.skillId}`},{default:m(()=>[u(r(o.skillName),1)]),_:2},1032,["to"])]))),256))])])):(i(),l("div",F,"The user has no action on resource"))}const H=g(B,[["render",z]]),J={props:["userId","deleteMcQuestion"],data(){return{questionsData:[],rows:[]}},components:{},async created(){await this.getMcQuestionsLog(),this.questionsData.forEach(s=>{const n=JSON.parse(s.content_obj),a=new Date(s.create_date),_=a.toLocaleString("en-gb",{weekday:"long",year:"numeric",month:"long",day:"numeric",timeZone:"UTC"}),e=a.toLocaleTimeString();this.rows.push({skillName:n.skill_name,resourceId:s.content_id,skillId:n.skill_id,action:s.action,date:_,time:e})})},methods:{async getMcQuestionsLog(){const s=await fetch(`/user-actions/${this.userId}/mc_question`);this.questionsData=await s.json()},actionColor(s){switch(s){case"create":return"create-action";case"update":return"update-action";default:return"delete-action"}}}},P={key:0,class:"container-md main-container"},Z={class:"d-flex flex-column"},G={key:1,class:"shake"};function K(s,n,a,_,e,c){const h=w("router-link");return e.rows.length>0?(i(),l("div",P,[t("div",Z,[(i(!0),l(y,null,x(e.rows,o=>(i(),l("div",null,[u(r(o.time)+" ("+r(o.date)+") - ",1),t("span",{class:p(c.actionColor(o.action))},r(o.action),3),u(" mc_question for skill: "),d(h,{class:"skill-link",target:"_blank",to:`/skills/${o.skillId}`},{default:m(()=>[u(r(o.skillName),1)]),_:2},1032,["to"])]))),256))])])):(i(),l("div",G," The user has no action on multiple-choice questions "))}const W=g(J,[["render",K]]);const X={setup(){return{usersStore:I()}},data(){return{user:{id:this.$route.params.id,firstName:null,lastName:null,username:null,role:null,avatar:null},showFlags:!1,showSources:!1,showQuestions:!1,showSkills:!1,mcQuestions:[],resources:[],flags:[],skillEdits:[],deleteFlag:!1,deleteResource:!1,deleteMcQuestion:!1}},components:{UserFlagActions:O,UserResourceActions:H,UserMcQuestionActions:W},async created(){await this.getUserDetails()},methods:{async getUserDetails(){this.usersStore.users.length<1&&await this.usersStore.getUsers();for(let s=0;s<this.usersStore.users.length;s++)this.usersStore.users[s].id==this.user.id&&(this.user.firstName=this.usersStore.users[s].first_name,this.user.lastName=this.usersStore.users[s].last_name,this.user.username=this.usersStore.users[s].username,this.user.role=this.usersStore.users[s].role,this.user.avatar=this.usersStore.users[s].avatar)}}},Y={class:"container"},ss=t("div",{class:"mt-4 mb-4"},[t("h1",null,"User Activity Report")],-1),es={class:"row"},ts={class:"d-flex flex-column flex-md-row gap-3"},os=["src"],ns={class:"d-flex flex-column"},is={id:"user-name"},ls={id:"role"},rs={class:"d-flex flex-column"},cs={class:"d-flex flex-row justify-content-between"},as=["title"],us=t("span",null," Flags ",-1),ds=t("path",{d:"M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"},null,-1),_s=[ds],hs={key:0},ms=t("hr",{class:"mt-5 mb-3"},null,-1),ps={class:"d-flex flex-column"},ws={class:"d-flex flex-row justify-content-between"},fs=["title"],ks=t("span",null," Resources ",-1),gs=t("path",{d:"M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"},null,-1),vs=[gs],ys={key:0},xs=t("hr",{class:"mt-5 mb-3"},null,-1),Ss={class:"d-flex flex-column"},bs={class:"d-flex flex-row justify-content-between"},Is=["title"],Cs=t("span",null," MC Questions ",-1),Qs=t("path",{d:"M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"},null,-1),Ds=[Qs],Ns={key:0},Us=t("hr",{class:"mt-5 mb-3"},null,-1);function Ms(s,n,a,_,e,c){const h=w("UserFlagActions"),o=w("UserResourceActions"),S=w("UserMcQuestionActions");return i(),l("div",Y,[ss,t("div",es,[t("div",ts,[t("img",{id:"activity-report-user-avatar",src:e.user.avatar},null,8,os),t("div",ns,[t("div",is,r(e.user.username),1),t("div",ls,r(e.user.role),1)])])]),t("div",null,[t("div",rs,[t("div",cs,[t("div",{class:"log-type",onClick:n[0]||(n[0]=k=>e.showFlags=!e.showFlags),"b-on-hover":"",title:e.showFlags?"collapse":"expand"},[us,(i(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"22",height:"22",fill:"#667085",class:p([e.showFlags?"arrow-point-down mb-2":"arrow-point-up "])},_s,2))],8,as)]),d(v,{name:"dropdown"},{default:m(()=>[e.showFlags?(i(),l("div",hs,[d(h,{ref:"contentFlagsPerUser",userId:e.user.id,deleteFlag:e.deleteFlag,onCloseFlagDiv:n[1]||(n[1]=k=>e.showFlags=!1)},null,8,["userId","deleteFlag"])])):f("",!0)]),_:1})]),ms,t("div",ps,[t("div",ws,[t("div",{class:"log-type",onClick:n[2]||(n[2]=k=>e.showSources=!e.showSources),"b-on-hover":"",title:e.showSources?"collapse":"expand"},[ks,(i(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"22",height:"22",fill:"#667085",class:p([e.showSources?"arrow-point-down mb-2":"arrow-point-up "])},vs,2))],8,fs)]),d(v,{name:"dropdown"},{default:m(()=>[e.showSources?(i(),l("div",ys,[d(o,{userId:e.user.id,deleteResource:e.deleteResource,onCloseResourceDiv:n[3]||(n[3]=k=>e.showSources=!1)},null,8,["userId","deleteResource"])])):f("",!0)]),_:1})]),xs,t("div",Ss,[t("div",bs,[t("div",{class:"log-type",onClick:n[4]||(n[4]=k=>e.showQuestions=!e.showQuestions),"b-on-hover":"",title:e.showQuestions?"collapse":"expand"},[Cs,(i(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"22",height:"22",fill:"#667085",class:p([e.showQuestions?"arrow-point-down mb-2":"arrow-point-up"])},Ds,2))],8,Is)]),d(v,{name:"dropdown"},{default:m(()=>[e.showQuestions?(i(),l("div",Ns,[d(S,{userId:e.user.id,deleteMcQuestion:e.deleteMcQuestion,onCloseMcQuestionDiv:n[5]||(n[5]=k=>e.showQuestions=!1)},null,8,["userId","deleteMcQuestion"])])):f("",!0)]),_:1})]),Us])])}const $s=g(X,[["render",Ms]]);export{$s as default};
