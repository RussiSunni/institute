import{_ as a,s as c,r as l,o as d,c as u,a as t,w as p,l as _,b as m,d as f,g as h,n as b}from"./main-602d0fab.js";const v={data(){return{skillId:this.$route.params.skillId,description:null}},setup(){},mounted:function(){},methods:{async Submit(){var o="/tutors/add/"+this.skillId;const e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({description:this.description})};await fetch(o,e).then(()=>{c.back()})}}},k={class:"container mt-3 pb-3"},x=t("div",{class:"row"},[t("div",{class:"col-10 d-flex align-items-end"},[t("h2",{id:"header-tile"},"Offer to Tutor")])],-1),w={class:"main-content-container container-fluid p-4"},y={class:"row"},C={class:"col"},T={class:"mb-3"},V=t("label",{for:"first_name",class:"form-label"},"Describe your tutoring style and experience with the subject",-1),g={class:"d-flex justify-content-end gap-4"};function N(o,e,S,I,s,i){const r=l("router-link");return d(),u("div",k,[x,t("div",w,[t("div",y,[t("div",C,[t("div",T,[V,p(t("textarea",{"onUpdate:modelValue":e[0]||(e[0]=n=>s.description=n),type:"text",class:"form-control"},null,512),[[_,s.description]]),m("",!0)]),t("div",g,[f(r,{class:"btn red-btn",to:"/skills/"+s.skillId},{default:h(()=>[b(" Cancel ")]),_:1},8,["to"]),t("button",{class:"btn purple-btn",onClick:e[1]||(e[1]=n=>i.Submit())}," Submit ")])])])])])}const j=a(v,[["render",N]]);export{j as default};
