import{_ as m,r as g,o as l,c as _,b as s,w as o,s as n,K as r,d as b,i as k,y as S,h as f}from"./main-d8374350.js";import{u as p}from"./SettingsStore-fe956a36.js";const y={setup(){return{settingsStore:p()}},data(){return{}},async created(){(this.settingsStore.skillDegradationDays==null||this.settingsStore.quizMaxQuestions==null)&&await this.settingsStore.getSettings()},methods:{Submit(){const a={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({skill_degradation_days:this.settingsStore.skillDegradationDays,quiz_max_questions:this.settingsStore.quizMaxQuestions,is_manual_essay_marking:this.settingsStore.isManualEssayMarking,pass_mark:this.settingsStore.passMark})};var t="/settings/edit";fetch(t,a).then(()=>{this.$router.push("/profile-settings")})}}},h={class:"container mt-3"},M=s("h1",null,"Edit Settings",-1),x={class:"mb-3"},v=s("label",{for:"daysForSkillToDegrade",class:"form-label"},"Days For Skills To Degrade:",-1),D={class:"mb-3"},q=s("label",{for:"daysForSkillToDegrade",class:"form-label"},"Max Number of Questions Per Quiz:",-1),z={class:"mb-3"},Q=s("label",{for:"daysForSkillToDegrade",class:"form-label"},"Pass mark:",-1),T={class:"mb-3"},E=s("label",{class:"form-label"},"Grading method for written questions:",-1),V={class:"form-check"},w=s("label",{class:"form-check-label"}," Automatic (AI) ",-1),F={class:"form-check"},U=s("label",{class:"form-check-label"}," Manual (instructor) ",-1),C={class:"d-flex justify-content-between mb-3"};function N(a,t,d,e,P,u){const c=g("router-link");return l(),_("div",h,[M,s("div",x,[v,o(s("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>e.settingsStore.skillDegradationDays=i),type:"number",id:"daysForSkillToDegrade",min:"1",max:"3650",class:"form-control","aria-describedby":"daysForSkillToDegrade"},null,512),[[n,e.settingsStore.skillDegradationDays]])]),s("div",D,[q,o(s("input",{"onUpdate:modelValue":t[1]||(t[1]=i=>e.settingsStore.quizMaxQuestions=i),type:"number",id:"quizMaxQuestions",min:"1",max:"200",class:"form-control","aria-describedby":"quizMaxQuestions"},null,512),[[n,e.settingsStore.quizMaxQuestions]])]),s("div",z,[Q,o(s("input",{"onUpdate:modelValue":t[2]||(t[2]=i=>e.settingsStore.passMark=i),type:"number",id:"quizMaxQuestions",min:"50",max:"100",class:"form-control","aria-describedby":"quizMaxQuestions"},null,512),[[n,e.settingsStore.passMark]])]),s("div",T,[E,s("div",V,[o(s("input",{class:"form-check-input",type:"radio",value:"0","onUpdate:modelValue":t[3]||(t[3]=i=>e.settingsStore.isManualEssayMarking=i)},null,512),[[r,e.settingsStore.isManualEssayMarking]]),w]),s("div",F,[o(s("input",{class:"form-check-input",type:"radio",value:"1","onUpdate:modelValue":t[4]||(t[4]=i=>e.settingsStore.isManualEssayMarking=i)},null,512),[[r,e.settingsStore.isManualEssayMarking]]),U])]),s("div",C,[b(c,{class:"btn btn-dark",to:"/profile-settings"},{default:k(()=>[S(" Cancel ")]),_:1}),s("button",{onClick:t[5]||(t[5]=i=>u.Submit()),type:"submit",class:"btn btn-dark"}," Submit ")])])}const B=m(y,[["render",N]]),O={__name:"EditSettingsView",setup(a){return(t,d)=>(l(),f(B))}};export{O as default};
