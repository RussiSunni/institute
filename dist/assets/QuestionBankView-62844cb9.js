import{_ as L,a as M,g as x,r as f,o as i,c as n,d as s,F as g,k as b,t as h,e as w,m as k,b as r,p as V,f as Q,l as z,s as C,w as y,G as v}from"./main-6c2c7175.js";import{_ as E}from"./general-banner-1c13aca4.js";const S={props:["isMultipleChoice","isEssay","isImage","skill"],setup(){const t=M(),e=x();return{userDetailsStore:t,skillsStore:e}},data(){return{skillUrl:this.$route.params.skillUrl,mcQuestions:[],essayQuestions:[],imageQuestions:[],showMCModal:!1,showEssayModal:!1,showImageModal:!1,questionID:null}},computed:{},async created(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList(),this.getMCQuestions(),this.getEssayQuestions(),this.getImageQuestions()},methods:{getMCQuestions(){fetch("/skills/"+this.skill.id+"/mc-questions/list").then(function(t){return t.json()}).then(t=>{this.mcQuestions=t})},getEssayQuestions(){fetch("/skills/"+this.skill.id+"/essay-questions/list").then(function(t){return t.json()}).then(t=>{this.essayQuestions=t})},getImageQuestions(){fetch("/skills/"+this.skill.id+"/image-questions/list").then(function(t){return t.json()}).then(t=>{this.imageQuestions=t})},async deleteMCQuestion(t){const e=fetch("/questions/mc/"+t,{method:"DELETE"});e.error?console.log(e.error):this.getMCQuestions()},async deleteEssayQuestion(t){const e=fetch("/questions/essay/"+t,{method:"DELETE"});e.error?console.log(e.error):this.getEssayQuestions()},async deleteImageQuestion(t){const e=fetch("/questions/image/"+t,{method:"DELETE"});e.error?console.log(e.error):this.getImageQuestions()}}},c=t=>(V("data-v-f9ab2bf4"),t=t(),Q(),t),I={class:"container-fluid"},D={class:"row"},H={id:"multiple-choice-column",class:"col-12 col-md-10 col-lg-6 ps-0 pe-0 pe-lg-4"},B=c(()=>s("h2",{class:"question-type"},"Multiple Choice",-1)),q={key:0,class:"skilltree-table table-bordered"},U={class:"question-data-cell"},j=c(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"15",height:"15",fill:"white"},[s("path",{d:"M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"})],-1)),N={key:0},T=["onClick","title"],A=c(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"15",height:"15",fill:"white"},[s("path",{d:"M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"})],-1)),R=[A],Y={class:"col-12 col-md-10 col-lg-6 ps-0 pe-0 ps-lg-4 mt-4 mt-lg-0"},F=c(()=>s("h2",{class:"question-type"},"Essay",-1)),$={key:0,class:"skilltree-table table-bordered"},G={class:"question-data-cell"},Z=c(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"15",height:"15",fill:"white"},[s("path",{d:"M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"})],-1)),J={key:0},K=["onClick","title"],O=c(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"15",height:"15",fill:"white"},[s("path",{d:"M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"})],-1)),P=[O],W={class:"row"},X={class:"col-12 col-md-10 col-lg-6 ps-0 pe-0 pe-lg-4"},s1=c(()=>s("h2",{class:"question-type"},"Image",-1)),t1={key:0,class:"skilltree-table table-bordered"},e1={class:"question-data-cell"},o1=c(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"15",height:"15",fill:"white"},[s("path",{d:"M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"})],-1)),l1={key:0},i1=["onClick","title"],n1=c(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"15",height:"15",fill:"white"},[s("path",{d:"M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"})],-1)),c1=[n1],d1={key:0},a1={id:"myModal",class:"modal"},r1={class:"modal-content"},u1=c(()=>s("p",null,"Are you sure you want to delete this question ?",-1)),h1={style:{display:"flex",gap:"10px","justify-content":"end"}},_1={key:1},m1={id:"myModal",class:"modal"},p1={class:"modal-content"},g1=c(()=>s("p",null,"Are you sure you want to delete this question ?",-1)),w1={style:{display:"flex",gap:"10px","justify-content":"end"}},k1={key:2},b1={id:"myModal",class:"modal"},y1={class:"modal-content"},v1=c(()=>s("p",null,"Are you sure you want to delete this question ?",-1)),f1={style:{display:"flex",gap:"10px","justify-content":"end"}};function C1(t,e,m,d,o,p){const _=f("router-link");return i(),n("div",I,[s("div",D,[s("div",H,[B,m.isMultipleChoice?(i(),n("table",q,[(i(!0),n(g,null,b(o.mcQuestions,l=>(i(),n("tr",null,[s("td",null,h(l.name),1),s("td",U,h(l.question),1),s("td",null,[w(_,{to:"/mc-questions/edit/"+l.id,class:"btn purple-btn p-2",role:"button",title:"Edit "+l.name},{default:k(()=>[j]),_:2},1032,["to","title"])]),d.userDetailsStore.role=="admin"||d.userDetailsStore.role=="editor"?(i(),n("td",N,[s("button",{type:"button",onClick:a=>{o.questionID=l.id,o.showMCModal=!0},class:"btn btn red-btn p-2",title:"Delete "+l.name},R,8,T)])):r("",!0)]))),256))])):r("",!0)]),s("div",Y,[F,m.isEssay?(i(),n("table",$,[(i(!0),n(g,null,b(o.essayQuestions,l=>(i(),n("tr",null,[s("td",null,h(l.name),1),s("td",G,h(l.question),1),s("td",null,[w(_,{to:"/essay-questions/edit/"+l.id,class:"btn purple-btn p-2",role:"button",title:"Edit "+l.name},{default:k(()=>[Z]),_:2},1032,["to","title"])]),d.userDetailsStore.role=="admin"||d.userDetailsStore.role=="editor"?(i(),n("td",J,[s("button",{type:"button",onClick:a=>{o.questionID=l.id,o.showEssayModal=!0},class:"btn red-btn p-2",title:"Delete "+l.name},P,8,K)])):r("",!0)]))),256))])):r("",!0)])]),s("div",W,[s("div",X,[s1,m.isImage?(i(),n("table",t1,[(i(!0),n(g,null,b(o.imageQuestions,l=>(i(),n("tr",null,[s("td",null,h(l.name),1),s("td",e1,h(l.question),1),s("td",null,[w(_,{to:"/image-questions/edit/"+l.id,class:"btn purple-btn p-2",role:"button",title:"Edit "+l.name},{default:k(()=>[o1]),_:2},1032,["to","title"])]),d.userDetailsStore.role=="admin"||d.userDetailsStore.role=="editor"?(i(),n("td",l1,[s("button",{type:"button",onClick:a=>{o.questionID=l.id,o.showImageModal=!0},class:"btn red-btn p-2",title:"Delete "+l.name},c1,8,i1)])):r("",!0)]))),256))])):r("",!0)])]),o.showMCModal?(i(),n("div",d1,[s("div",a1,[s("div",r1,[u1,s("div",h1,[s("button",{type:"button",class:"btn red-btn",onClick:e[0]||(e[0]=l=>{o.showMCModal=!1,p.deleteMCQuestion(o.questionID)})}," Yes "),s("button",{type:"button",class:"btn green-btn",onClick:e[1]||(e[1]=l=>o.showMCModal=!1)}," No ")])])])])):r("",!0),o.showEssayModal?(i(),n("div",_1,[s("div",m1,[s("div",p1,[g1,s("div",w1,[s("button",{type:"button",class:"btn red-btn",onClick:e[2]||(e[2]=l=>{o.showEssayModal=!1,p.deleteEssayQuestion(o.questionID)})}," Yes "),s("button",{type:"button",class:"btn green-btn",onClick:e[3]||(e[3]=l=>o.showEssayModal=!1)}," No ")])])])])):r("",!0),o.showImageModal?(i(),n("div",k1,[s("div",b1,[s("div",y1,[v1,s("div",f1,[s("button",{type:"button",class:"btn red-btn",onClick:e[4]||(e[4]=l=>{o.showImageModal=!1,p.deleteImageQuestion(o.questionID)})}," Yes "),s("button",{type:"button",class:"btn green-btn",onClick:e[5]||(e[5]=l=>o.showImageModal=!1)}," No ")])])])])):r("",!0)])}const L1=L(S,[["render",C1],["__scopeId","data-v-f9ab2bf4"]]);const M1={setup(){const t=x(),e=M();return{skillsStore:t,userDetailsStore:e}},data(){return{skillUrl:this.$route.params.skillUrl,isMultipleChoice:!0,isEssay:!0,isImage:!0,skill:{}}},async created(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList();for(let t=0;t<this.skillsStore.skillsList.length;t++)this.skillUrl==this.skillsStore.skillsList[t].url&&(this.skill=this.skillsStore.skillsList[t])},components:{QuestionsBankQuestionList:L1}},u=t=>(V("data-v-5caa650b"),t=t(),Q(),t),x1=u(()=>s("div",{id:"banner",class:"overflow-hidden"},[s("img",{src:E,class:"image-fluid"})],-1)),V1={class:"row px-2 px-lg-2",id:"purple-banner"},Q1={class:"col d-flex justify-content-between"},z1=u(()=>s("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"white"})],-1)),E1={key:1},S1={class:"d-flex justify-content-between"},I1=u(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",width:"20",height:"20",fill:"white"},[s("path",{d:"M208 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM123.7 200.5c1-.4 1.9-.8 2.9-1.2l-16.9 63.5c-5.6 21.1-.1 43.6 14.7 59.7l70.7 77.1 22 88.1c4.3 17.1 21.7 27.6 38.8 23.3s27.6-21.7 23.3-38.8l-23-92.1c-1.9-7.8-5.8-14.9-11.2-20.8l-49.5-54 19.3-65.5 9.6 23c4.4 10.6 12.5 19.3 22.8 24.5l26.7 13.3c15.8 7.9 35 1.5 42.9-14.3s1.5-35-14.3-42.9L281 232.7l-15.3-36.8C248.5 154.8 208.3 128 163.7 128c-22.8 0-45.3 4.8-66.1 14l-8 3.5c-32.9 14.6-58.1 42.4-69.4 76.5l-2.6 7.8c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2l2.6-7.8c5.7-17.1 18.3-30.9 34.7-38.2l8-3.5zm-30 135.1L68.7 398 9.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L116.3 441c4.6-4.6 8.2-10.1 10.6-16.1l14.5-36.2-40.7-44.4c-2.5-2.7-4.8-5.6-7-8.6zM550.6 153.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L530.7 224H384c-17.7 0-32 14.3-32 32s14.3 32 32 32H530.7l-25.4 25.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l80-80c12.5-12.5 12.5-32.8 0-45.3l-80-80z"})],-1)),D1={class:"container mt-5"},H1={class:"row mt-3"},B1={class:"col"},q1={class:"row mt-5 pt-3 pb-3"},U1={class:"col-4"},j1={class:"control control-checkbox"},N1=u(()=>s("span",{class:"my-auto mx-2 me-4"},"Multiple Choice",-1)),T1=u(()=>s("div",{class:"control_indicator"},null,-1)),A1={class:"col-4 ps-0 ps-lg-4"},R1={class:"control control-checkbox"},Y1=u(()=>s("span",{class:"my-auto mx-2"},"Essay",-1)),F1=u(()=>s("div",{class:"control_indicator"},null,-1)),$1={class:"col-4 ps-0 ps-lg-4"},G1={class:"control control-checkbox"},Z1=u(()=>s("span",{class:"my-auto mx-2"},"Image",-1)),J1=u(()=>s("div",{class:"control_indicator"},null,-1)),K1={class:"row mt-4"},O1={class:"col"};function P1(t,e,m,d,o,p){const _=f("router-link"),l=f("QuestionsBankQuestionList");return i(),n(g,null,[x1,s("div",V1,[s("div",Q1,[d.userDetailsStore.role=="admin"||d.userDetailsStore.role=="editor"?(i(),z(_,{key:0,class:"purple-btn btn",to:"/skills/"+o.skill.id+"/question-bank/add"},{default:k(()=>[C(" Add    "),z1]),_:1},8,["to"])):(i(),n("div",E1)),s("div",S1,[s("a",{class:"btn red-btn",onClick:e[0]||(e[0]=a=>t.$router.go(-1))},[C("Exit   "),I1])])])]),s("div",D1,[s("div",H1,[s("div",B1,[s("h1",null,h(o.skill.name)+" Question Bank",1)])]),s("div",q1,[s("div",U1,[s("label",j1,[N1,y(s("input",{type:"checkbox",name:"nodeType",id:"regularSkillRadio",value:"regular","onUpdate:modelValue":e[1]||(e[1]=a=>o.isMultipleChoice=a)},null,512),[[v,o.isMultipleChoice]]),T1])]),s("div",A1,[s("label",R1,[Y1,y(s("input",{type:"checkbox",name:"nodeType",id:"superSkillRadio",value:"super","onUpdate:modelValue":e[2]||(e[2]=a=>o.isEssay=a)},null,512),[[v,o.isEssay]]),F1])]),s("div",$1,[s("label",G1,[Z1,y(s("input",{type:"checkbox",name:"nodeType",id:"superRadio",value:"super","onUpdate:modelValue":e[3]||(e[3]=a=>o.isImage=a)},null,512),[[v,o.isImage]]),J1])])]),s("div",K1,[s("div",O1,[w(l,{isMultipleChoice:o.isMultipleChoice,isEssay:o.isEssay,isImage:o.isImage,skill:o.skill},null,8,["isMultipleChoice","isEssay","isImage","skill"])])])])],64)}const ss=L(M1,[["render",P1],["__scopeId","data-v-5caa650b"]]);export{ss as default};
