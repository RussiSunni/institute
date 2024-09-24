import{_ as u,o as n,c as l,b as s,a as i,w,i as p,h as c,q as _,d as m,l as g,F as h,j as f,t as v,T as b}from"./main-bece9244.js";const k={props:["contentType","contentId","userId"],data(){return{showWarnModal:!0,showReasonPopup:!1,showThankModal:!1,reason:"",shake:!1,showDropDown:!1,templates:["Grammar or spelling error: ","Inappropriate content: ","Incorrect or misleading: ","Content used to attack another user: ","Spam, adverts or low quality content: "]}},mounted(){},computed:{},methods:{closeModal(){this.$parent.showFlaggingModal=!1,this.showReasonPopup=!1,this.showThankModal=!1,this.showWarnModal=!1},handleSubmitReason(){this.reason.length>255?(this.shake=!0,setTimeout(()=>{this.shake=!1},200)):this.flagSkill()},flagSkill(){const d={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content_type:this.contentType,content_id:this.contentId,user_id:this.userId,reason:this.reason})};var o="/content-flags/add";fetch(o,d).then(r=>{this.showReasonPopup=!1,this.showThankModal=!0})}}},y={key:0,id:"myModal",class:"modal"},M={class:"modal-content asking-modal"},x=s("div",{class:"d-flex gap-4"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"grey",width:"45",height:"45"},[s("path",{d:"M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"})]),s("p",null," Would you like to flag this as unhelpful or incorrect for admin review? ")],-1),C={class:"d-flex justify-content-lg-between justify-content-md-end justify-content-between gap-2"},D=s("span",{class:"d-none d-md-block"}," No ",-1),T=s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"white",class:"d-md-none"},[s("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"})],-1),z=[D,T],S=s("span",{class:"d-none d-md-block"}," Yes ",-1),j=s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"white",class:"d-md-none"},[s("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})],-1),B=[S,j],R={key:1},L={id:"myModal",class:"modal"},P={class:"modal-content reason-popup"},V={class:"d-flex flex-column"},F=s("div",null,"Please tell us why you want to flag this skill,",-1),I=s("div",{class:"reason-suggestion"}," including where the issue happens, ",-1),N=s("div",{class:"reason-suggestion"},"in less than 40 words",-1),W={key:1,class:"d-flex flex-column custom-select-div"},O=s("span",null,[s("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z",fill:"#344054"})])],-1),A={key:0,class:"custom-dropdown-base"},q=["onClick"],H={class:"d-flex justify-content-lg-between justify-content-md-end justify-content-between gap-2 mt-2"},Y=s("span",{class:"d-none d-md-block"}," Cancel ",-1),E=s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"white",class:"d-md-none"},[s("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"})],-1),G=[Y,E],J=s("span",{class:"d-none d-md-block"}," Submit ",-1),K=s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"white",class:"d-md-none"},[s("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})],-1),U=[J,K],Z={key:2},Q={id:"myModal",class:"modal"},X={class:"modal-content"},$=s("div",{class:"d-flex gap-4 text-center"},[s("p",null," Thank you for flagging this skill. We will take a look as soon as possible !! ")],-1),ss={class:"d-flex justify-content-center"},os=s("span",null," OK ",-1),ts=[os];function es(d,o,r,ns,t,a){return n(),l(h,null,[t.showWarnModal?(n(),l("div",y,[s("div",M,[x,s("div",C,[s("button",{type:"button",class:"btn red-btn modal-btn",onClick:o[0]||(o[0]=(...e)=>a.closeModal&&a.closeModal(...e))},z),s("button",{type:"button",class:"btn green-btn modal-btn",onClick:o[1]||(o[1]=e=>{t.showReasonPopup=!0,t.showWarnModal=!1})},B)])])])):i("",!0),t.showReasonPopup?(n(),l("div",R,[s("div",L,[s("div",P,[s("div",V,[F,I,N,w(s("textarea",{id:"reason",name:"reason",rows:"5",cols:"33",autofocus:"","onUpdate:modelValue":o[2]||(o[2]=e=>t.reason=e)},`\r
                    `,512),[[p,t.reason]])]),t.reason.length>255?(n(),l("div",{key:0,class:c([t.shake?"click-shake form-validate":"form-validate initial-shake"])}," Your reason has too many words !! ",2)):(n(),l("div",W,[s("div",{class:c([t.showDropDown?"custom-select-button-focus":"custom-select-button"]),onClick:o[3]||(o[3]=e=>t.showDropDown=!t.showDropDown)},[_(" Or choose a reason below "),O],2),m(b,{name:"dropdown"},{default:g(()=>[t.showDropDown?(n(),l("div",A,[(n(!0),l(h,null,f(t.templates,e=>(n(),l("div",{class:"custom-dropdown-option",onClick:ls=>{t.reason=e,t.showDropDown=!1}},v(e),9,q))),256))])):i("",!0)]),_:1})])),s("div",H,[s("button",{type:"button",class:"btn red-btn modal-btn",onClick:o[4]||(o[4]=(...e)=>a.closeModal&&a.closeModal(...e))},G),s("button",{type:"button",class:"btn green-btn modal-btn",onClick:o[5]||(o[5]=(...e)=>a.handleSubmitReason&&a.handleSubmitReason(...e))},U)])])])])):i("",!0),t.showThankModal?(n(),l("div",Z,[s("div",Q,[s("div",X,[$,s("div",ss,[s("button",{type:"button",class:"btn green-btn w-25",onClick:o[6]||(o[6]=(...e)=>a.closeModal&&a.closeModal(...e))},ts)])])])])):i("",!0)],64)}const is=u(k,[["render",es]]);export{is as F};
