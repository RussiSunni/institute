import{u as x}from"./SkillsStore-e7eac71b.js";import{u as T}from"./SkillTreeStore-37def5c5.js";import{_ as y,r as u,o as s,c as n,b as t,k as d,t as F,z as _,B as b,D as A,a as g,f as w,F as k,i as L,e as S,p as E,d as D,u as B,l as M}from"./main-7e6d3cb8.js";const V="/images/skill-emoticons/spoken-language-mastered.png",N="/images/skill-emoticons/spoken-language-unlocked.png",H="/images/skill-emoticons/written-language-mastered.png",U="/images/skill-emoticons/written-language-unlocked.png",P="/images/skill-emoticons/mathematics-mastered.png",p="/images/skill-emoticons/mathematics-unlocked.png",j="/images/skill-emoticons/science-mastered.png",z="/images/skill-emoticons/science-unlocked.png",R="/images/skill-emoticons/history-mastered.png",Z="/images/skill-emoticons/history-unlocked.png",q="/images/skill-emoticons/life-mastered.png",I="/images/skill-emoticons/life-unlocked.png";const G={setup(){return{skillsStore:x()}},data(){return{showChildren:!1,showSubskills:!1,showModal:!1,childrenNotSubskills:[],subSkills:[]}},props:["id","children","name","firstAncestor","isUnlocked","isMastered","type","level","depth","role","DeleteSkill"],computed:{indent(){var l=0;return screen.width<=480?this.depth==1?l=25:l=20:l=50,this.type!="sub"?{transform:`translate(${this.depth*l-35.2}px)`}:{transform:`translate(${(this.depth-1)*l-35.2}px)`}}},async created(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList();for(let l=0;l<this.children.length;l++)this.children[l].type=="sub"?this.subSkills.push(this.children[l]):this.childrenNotSubskills.push(this.children[l])},methods:{toggleChildren(){this.showChildren=!this.showChildren},toggleSubSkills(){this.showSubskills=!this.showSubskills},ShowMobileButtonsModal(){this.showModal=!0},HideMobileButtonsModal(){this.showModal=!1}}},v=l=>(E("data-v-b1487c96"),l=l(),D(),l),J={key:0},K={key:0,src:V},O={key:1,src:N},Q={key:2,src:N,class:"locked-skill-styling"},W={key:3,src:H},X={key:4,src:U},Y={key:5,src:U,class:"locked-skill-styling"},$={key:6,src:P},e1={key:7,src:p},t1={key:8,src:p,class:"locked-skill-styling"},s1={key:9,src:j},l1={key:10,src:z},i1={key:11,src:z,class:"locked-skill-styling"},n1={key:12,src:R},o1={key:13,src:Z},d1={key:14,src:Z,class:"locked-skill-styling"},r1={key:15,src:q},c1={key:16,src:I},h1={key:17,src:I,class:"locked-skill-styling"},a1={style:{"text-align":"left"}},C1={id:"buttons",class:"d-flex"},u1=v(()=>t("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"#9C7EEC"})],-1)),k1=[u1],m1=v(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",height:"25",width:"30",viewBox:"0 0 576 512"},[t("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z",fill:"#9C7EEC"})],-1)),_1=[m1],g1=v(()=>t("svg",{width:" 25",height:"9",viewBox:"0 0 25 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("circle",{cx:"3.09803",cy:"3.09803",r:"3.09803",transform:"matrix(0.653216 -0.757172 -0.757172 -0.653216 5.19141 8.73889)",fill:"#FFFFFF"}),t("circle",{cx:"3.09803",cy:"3.09803",r:"3.09803",transform:"matrix(0.653216 -0.757172 -0.757172 -0.653216 12.8223 8.73889)",fill:"#FFFFFF"}),t("circle",{cx:"3.09803",cy:"3.09803",r:"3.09803",transform:"matrix(0.653216 -0.757172 -0.757172 -0.653216 20.4531 8.73889)",fill:"#FFFFFF"})],-1)),f1=[g1],w1={class:"modal-content d-flex"},S1=v(()=>t("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"#9C7EEC"})],-1)),L1=[S1],v1=v(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",height:"25",width:"30",viewBox:"0 0 576 512"},[t("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z",fill:"#9C7EEC"})],-1));function b1(l,o,e,f,h,r){const a=u("router-link"),C=u("SkillsListChildStudent",!0);return s(),n(k,null,[t("button",{style:A(r.indent),class:b([{domains:e.type=="domain",locked:e.isUnlocked!=1,unlocked:e.isUnlocked==1,mastered:e.isMastered==1,"sub-skill-button":e.type=="sub","grade-school-level":e.level=="grade_school","middle-school-level":e.level=="middle_school","high-school-level":e.level=="high_school","college-level":e.level=="college","phd-level":e.level=="phd"},"skill-button d-flex justify-content-between"]),onClick:o[3]||(o[3]=(...i)=>r.toggleChildren&&r.toggleChildren(...i))},[e.depth>1?(s(),n("div",J,[e.firstAncestor==1&&e.isMastered==1?(s(),n("img",K)):e.firstAncestor==1&&e.isUnlocked==1?(s(),n("img",O)):e.firstAncestor==1?(s(),n("img",Q)):d("",!0),e.firstAncestor==2&&e.isMastered==1?(s(),n("img",W)):e.firstAncestor==2&&e.isUnlocked==1?(s(),n("img",X)):e.firstAncestor==2?(s(),n("img",Y)):d("",!0),e.firstAncestor==3&&e.isMastered==1?(s(),n("img",$)):e.firstAncestor==3&&e.isUnlocked==1?(s(),n("img",e1)):e.firstAncestor==3?(s(),n("img",t1)):d("",!0),e.firstAncestor==4&&e.isMastered==1?(s(),n("img",s1)):e.firstAncestor==4&&e.isUnlocked==1?(s(),n("img",l1)):e.firstAncestor==4?(s(),n("img",i1)):d("",!0),e.firstAncestor==5&&e.isMastered==1?(s(),n("img",n1)):e.firstAncestor==5&&e.isUnlocked==1?(s(),n("img",o1)):e.firstAncestor==5?(s(),n("img",d1)):d("",!0),e.firstAncestor==6&&e.isMastered==1?(s(),n("img",r1)):e.firstAncestor==6&&e.isUnlocked==1?(s(),n("img",c1)):e.firstAncestor==6?(s(),n("img",h1)):d("",!0)])):d("",!0),t("span",a1,F(e.name),1),t("div",C1,[e.type=="super"?(s(),n("button",{key:0,type:"button",onClick:o[0]||(o[0]=_((...i)=>r.toggleSubSkills&&r.toggleSubSkills(...i),["stop"])),class:"btn me-2 ci-btn"},k1)):d("",!0),e.isUnlocked==1?(s(),n("button",{key:1,onClick:o[1]||(o[1]=_(i=>l.$router.push("/skills/"+e.id),["stop"])),class:"btn me-2 ci-btn"},_1)):d("",!0)]),t("button",{class:b(["d-none btn",{"top-level-skills-mobile-buttons":e.depth==1,"mobile-buttons":e.depth>1}]),onClick:o[2]||(o[2]=_(i=>r.ShowMobileButtonsModal(),["stop"]))},f1,2)],6),h.showModal?(s(),n("div",{key:0,id:"button-modal",class:"modal",onClick:o[5]||(o[5]=i=>r.HideMobileButtonsModal())},[t("div",w1,[e.type=="sub"?(s(),n("button",{key:0,type:"button",onClick:o[4]||(o[4]=_((...i)=>r.toggleSubSkills&&r.toggleSubSkills(...i),["stop"])),class:"btn me-2 ci-btn"},L1)):d("",!0),g(a,{to:"/skills/"+e.id,class:"btn me-2",role:"button"},{default:w(()=>[v1]),_:1},8,["to"])])])):d("",!0),h.showSubskills?(s(!0),n(k,{key:1},L(h.subSkills,i=>(s(),S(C,{id:i.id,children:i.children,firstAncestor:e.firstAncestor,isUnlocked:i.is_accessible,isMastered:i.is_mastered,type:i.type,level:i.level,name:i.skill_name,role:e.role,DeleteSkill:e.DeleteSkill,depth:e.depth+1},null,8,["id","children","firstAncestor","isUnlocked","isMastered","type","level","name","role","DeleteSkill","depth"]))),256)):d("",!0),h.showChildren?(s(!0),n(k,{key:2},L(h.childrenNotSubskills,i=>(s(),S(C,{id:i.id,children:i.children,firstAncestor:e.firstAncestor,isUnlocked:i.is_accessible,isMastered:i.is_mastered,type:i.type,level:i.level,name:i.skill_name,role:e.role,DeleteSkill:e.DeleteSkill,depth:e.depth+1},null,8,["id","children","firstAncestor","isUnlocked","isMastered","type","level","name","role","DeleteSkill","depth"]))),256)):d("",!0)],64)}const y1=y(G,[["render",b1],["__scopeId","data-v-b1487c96"]]);const x1={setup(){return{skillsStore:x()}},data(){return{showChildren:null,showSubskills:null,showModal:!1,childrenNotSubskills:[],subSkills:[]}},props:["id","children","name","firstAncestor","type","level","depth","role","DeleteSkill"],computed:{indent(){var l=0;return screen.width<=480?this.depth==1?l=25:l=20:l=50,this.type!="sub"?{transform:`translate(${this.depth*l-35.2}px)`}:{transform:`translate(${(this.depth-1)*l-35.2}px)`}}},async created(){await this.skillsStore.getNestedSkillsList(),await this.skillsStore.getSkillsList();for(let l=0;l<this.children.length;l++)this.children[l].type=="sub"?this.subSkills.push(this.children[l]):this.childrenNotSubskills.push(this.children[l])},mounted(){localStorage.getItem(this.id+"children")=="true"?this.showChildren=!0:this.showChildren=!1,localStorage.getItem(this.id+"sub")=="true"?this.showSubskills=!0:this.showSubskills=!1},methods:{toggleChildren(){this.showChildren==!1?(localStorage.setItem(this.id+"children",!0),this.showChildren=!0):(localStorage.setItem(this.id+"children",!1),this.showChildren=!1)},toggleSubSkills(){this.showSubskills==!1?(localStorage.setItem(this.id+"sub",!0),this.showSubskills=!0):(localStorage.setItem(this.id+"sub",!1),this.showSubskills=!1)},ShowMobileButtonsModal(){this.showModal=!0},HideMobileButtonsModal(){this.showModal=!1}}},m=l=>(E("data-v-d2de8e91"),l=l(),D(),l),M1={style:{"text-align":"left"}},F1={id:"buttons",class:"d-flex"},A1=m(()=>t("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"#9C7EEC"})],-1)),E1=[A1],D1=m(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",height:"25",width:"30",viewBox:"0 0 576 512"},[t("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z",fill:"#9C7EEC"})],-1)),B1=m(()=>t("svg",{width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M0.75558 19.3181C0.77635 19.5132 0.87137 19.6928 1.02096 19.8198C1.17055 19.9468 1.36325 20.0114 1.55915 20.0002L5.27701 19.8288L0.398438 15.6145L0.75558 19.3181Z",fill:"#9C7EEC"}),t("path",{d:"M11.8467 2.24484L0.801758 15.0315L5.6802 19.2454L16.7251 6.45877L11.8467 2.24484Z",fill:"#9C7EEC"}),t("path",{d:"M18.2555 3.11796L14.934 0.260817C14.832 0.172259 14.7134 0.104756 14.5852 0.0621907C14.4569 0.0196256 14.3215 0.00283902 14.1868 0.0127967C14.052 0.0227543 13.9205 0.0592596 13.7999 0.120212C13.6793 0.181165 13.572 0.265362 13.484 0.36796L12.4805 1.50725L17.359 5.71439L18.3519 4.56082C18.5289 4.35602 18.6181 4.08969 18.6 3.81958C18.582 3.54948 18.4582 3.29738 18.2555 3.11796Z",fill:"#9C7EEC"})],-1)),N1=m(()=>t("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M0.312625 14.5205L4.83312 9.99999L0.312625 5.49218C0.111396 5.29025 -0.00159545 5.0168 -0.00159545 4.73172C-0.00159545 4.44665 0.111396 4.17319 0.312625 3.97126L3.96282 0.312625C4.16474 0.111396 4.4382 -0.00159545 4.72327 -0.00159545C5.00835 -0.00159545 5.2818 0.111396 5.48373 0.312625L9.99999 4.83312L14.5205 0.312625C14.6204 0.21056 14.7397 0.12947 14.8714 0.0741101C15.003 0.0187502 15.1444 -0.00976563 15.2873 -0.00976562C15.4301 -0.00976563 15.5715 0.0187502 15.7032 0.0741101C15.8349 0.12947 15.9541 0.21056 16.0541 0.312625L19.6874 3.96282C19.8886 4.16474 20.0016 4.4382 20.0016 4.72327C20.0016 5.00835 19.8886 5.2818 19.6874 5.48373L15.1669 9.99999L19.6874 14.5205C19.8883 14.7217 20.0012 14.9944 20.0012 15.2788C20.0012 15.5632 19.8883 15.836 19.6874 16.0372L16.0541 19.6874C15.8529 19.8883 15.5801 20.0012 15.2957 20.0012C15.0113 20.0012 14.7386 19.8883 14.5374 19.6874L9.99999 15.1669L5.49218 19.6874C5.29025 19.8886 5.0168 20.0016 4.73172 20.0016C4.44665 20.0016 4.17319 19.8886 3.97126 19.6874L0.312625 16.0541C0.21056 15.9541 0.12947 15.8349 0.0741101 15.7032C0.0187502 15.5715 -0.00976563 15.4301 -0.00976562 15.2873C-0.00976563 15.1444 0.0187502 15.003 0.0741101 14.8714C0.12947 14.7397 0.21056 14.6204 0.312625 14.5205Z",fill:"#9C7EEC"})],-1)),U1=[N1],p1=m(()=>t("svg",{width:" 25",height:"9",viewBox:"0 0 25 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("circle",{cx:"3.09803",cy:"3.09803",r:"3.09803",transform:"matrix(0.653216 -0.757172 -0.757172 -0.653216 5.19141 8.73889)",fill:"#FFFFFF"}),t("circle",{cx:"3.09803",cy:"3.09803",r:"3.09803",transform:"matrix(0.653216 -0.757172 -0.757172 -0.653216 12.8223 8.73889)",fill:"#FFFFFF"}),t("circle",{cx:"3.09803",cy:"3.09803",r:"3.09803",transform:"matrix(0.653216 -0.757172 -0.757172 -0.653216 20.4531 8.73889)",fill:"#FFFFFF"})],-1)),z1=[p1],Z1={class:"modal-content d-flex"},I1=m(()=>t("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"#9C7EEC"})],-1)),T1=[I1],V1=m(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",height:"25",width:"30",viewBox:"0 0 576 512"},[t("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z",fill:"#9C7EEC"})],-1)),H1=m(()=>t("svg",{width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M0.75558 19.3181C0.77635 19.5132 0.87137 19.6928 1.02096 19.8198C1.17055 19.9468 1.36325 20.0114 1.55915 20.0002L5.27701 19.8288L0.398438 15.6145L0.75558 19.3181Z",fill:"#9C7EEC"}),t("path",{d:"M11.8467 2.24484L0.801758 15.0315L5.6802 19.2454L16.7251 6.45877L11.8467 2.24484Z",fill:"#9C7EEC"}),t("path",{d:"M18.2555 3.11796L14.934 0.260817C14.832 0.172259 14.7134 0.104756 14.5852 0.0621907C14.4569 0.0196256 14.3215 0.00283902 14.1868 0.0127967C14.052 0.0227543 13.9205 0.0592596 13.7999 0.120212C13.6793 0.181165 13.572 0.265362 13.484 0.36796L12.4805 1.50725L17.359 5.71439L18.3519 4.56082C18.5289 4.35602 18.6181 4.08969 18.6 3.81958C18.582 3.54948 18.4582 3.29738 18.2555 3.11796Z",fill:"#9C7EEC"})],-1)),P1=m(()=>t("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M0.312625 14.5205L4.83312 9.99999L0.312625 5.49218C0.111396 5.29025 -0.00159545 5.0168 -0.00159545 4.73172C-0.00159545 4.44665 0.111396 4.17319 0.312625 3.97126L3.96282 0.312625C4.16474 0.111396 4.4382 -0.00159545 4.72327 -0.00159545C5.00835 -0.00159545 5.2818 0.111396 5.48373 0.312625L9.99999 4.83312L14.5205 0.312625C14.6204 0.21056 14.7397 0.12947 14.8714 0.0741101C15.003 0.0187502 15.1444 -0.00976563 15.2873 -0.00976562C15.4301 -0.00976563 15.5715 0.0187502 15.7032 0.0741101C15.8349 0.12947 15.9541 0.21056 16.0541 0.312625L19.6874 3.96282C19.8886 4.16474 20.0016 4.4382 20.0016 4.72327C20.0016 5.00835 19.8886 5.2818 19.6874 5.48373L15.1669 9.99999L19.6874 14.5205C19.8883 14.7217 20.0012 14.9944 20.0012 15.2788C20.0012 15.5632 19.8883 15.836 19.6874 16.0372L16.0541 19.6874C15.8529 19.8883 15.5801 20.0012 15.2957 20.0012C15.0113 20.0012 14.7386 19.8883 14.5374 19.6874L9.99999 15.1669L5.49218 19.6874C5.29025 19.8886 5.0168 20.0016 4.73172 20.0016C4.44665 20.0016 4.17319 19.8886 3.97126 19.6874L0.312625 16.0541C0.21056 15.9541 0.12947 15.8349 0.0741101 15.7032C0.0187502 15.5715 -0.00976563 15.4301 -0.00976562 15.2873C-0.00976563 15.1444 0.0187502 15.003 0.0741101 14.8714C0.12947 14.7397 0.21056 14.6204 0.312625 14.5205Z",fill:"#9C7EEC"})],-1)),j1=[P1];function R1(l,o,e,f,h,r){const a=u("RouterLink"),C=u("router-link"),i=u("SkillsListChildNonStudent",!0);return s(),n(k,null,[t("button",{style:A(r.indent),class:b([{domains:e.type=="domain","sub-skill-button":e.type=="sub","grade-school-level":e.level=="grade_school","middle-school-level":e.level=="middle_school","high-school-level":e.level=="high_school","college-level":e.level=="college","phd-level":e.level=="phd"},"skill-button d-flex justify-content-between"]),onClick:o[3]||(o[3]=(...c)=>r.toggleChildren&&r.toggleChildren(...c))},[t("span",M1,F(e.name),1),t("div",F1,[e.type=="super"?(s(),n("button",{key:0,type:"button",onClick:o[0]||(o[0]=_((...c)=>r.toggleSubSkills&&r.toggleSubSkills(...c),["stop"])),class:"btn me-2 ci-btn"},E1)):d("",!0),g(a,{to:"/skills/"+e.id,role:"button",class:"btn me-2 ci-btn"},{default:w(()=>[D1]),_:1},8,["to"]),e.role=="admin"?(s(),S(a,{key:1,to:"/skills/edit/"+e.id,class:"btn me-2 ci-btn"},{default:w(()=>[B1]),_:1},8,["to"])):d("",!0),e.role=="admin"?(s(),n("button",{key:2,type:"button",onClick:o[1]||(o[1]=_(c=>e.DeleteSkill(e.id),["stop"])),class:"btn delete-btn me-2 ci-btn"},U1)):d("",!0)]),t("button",{class:b(["d-none btn",{"top-level-skills-mobile-buttons":e.depth==1,"mobile-buttons":e.depth>1}]),onClick:o[2]||(o[2]=_(c=>r.ShowMobileButtonsModal(),["stop"]))},z1,2)],6),h.showModal?(s(),n("div",{key:0,id:"button-modal",class:"modal",onClick:o[6]||(o[6]=c=>r.HideMobileButtonsModal())},[t("div",Z1,[e.type=="super"?(s(),n("button",{key:0,type:"button",onClick:o[4]||(o[4]=_((...c)=>r.toggleSubSkills&&r.toggleSubSkills(...c),["stop"])),class:"btn me-2 ci-btn"},T1)):d("",!0),g(C,{to:"/skills/"+e.id,class:"btn me-2",role:"button"},{default:w(()=>[V1]),_:1},8,["to"]),e.role=="admin"?(s(),S(C,{key:1,to:"/skills/edit/"+e.id,class:"btn me-2",role:"button"},{default:w(()=>[H1]),_:1},8,["to"])):d("",!0),e.role=="admin"?(s(),n("button",{key:2,type:"button",onClick:o[5]||(o[5]=(...c)=>e.DeleteSkill(e.id).stop&&e.DeleteSkill(e.id).stop(...c)),class:"btn me-2"},j1)):d("",!0)])])):d("",!0),h.showSubskills?(s(!0),n(k,{key:1},L(h.subSkills,c=>(s(),S(i,{id:c.id,children:c.children,firstAncestor:e.firstAncestor,type:c.type,level:c.level,name:c.name,role:e.role,DeleteSkill:e.DeleteSkill,depth:e.depth+1},null,8,["id","children","firstAncestor","type","level","name","role","DeleteSkill","depth"]))),256)):d("",!0),h.showChildren?(s(!0),n(k,{key:2},L(h.childrenNotSubskills,c=>(s(),S(i,{id:c.id,children:c.children,firstAncestor:e.firstAncestor,type:c.type,level:c.level,name:c.name,role:e.role,DeleteSkill:e.DeleteSkill,depth:e.depth+1},null,8,["id","children","firstAncestor","type","level","name","role","DeleteSkill","depth"]))),256)):d("",!0)],64)}const q1=y(x1,[["render",R1],["__scopeId","data-v-d2de8e91"]]),G1={setup(){const l=x(),o=B(),e=T();return{skillsStore:l,userDetailsStore:o,skillTreeStore:e}},data(){return{userSkills:[]}},async created(){this.userDetailsStore.role=="student"?(this.skillTreeStore.userSkills.length==0&&await this.skillTreeStore.getUserSkills(),this.userSkills=this.skillTreeStore.userSkills):this.skillsStore.skillsList.length==0&&await this.skillsStore.getNestedSkillsList()},computed:{},methods:{async DeleteSkill(l){await this.skillsStore.deleteSkill(l),await this.skillsStore.getNestedSkillsList()}},components:{SkillsListChildStudent:y1,SkillsListChildNonStudent:q1}},J1={class:"container mt-3",style:{overflow:"auto"}};function K1(l,o,e,f,h,r){const a=u("SkillsListChildStudent"),C=u("SkillsListChildNonStudent");return s(),n("div",J1,[this.userDetailsStore.role=="student"?(s(!0),n(k,{key:0},L(h.userSkills,i=>(s(),n("div",null,[g(a,{id:i.id,children:i.children,depth:1,name:i.skill_name,firstAncestor:i.first_ancestor,isUnlocked:i.is_accessible,isMastered:i.is_mastered,type:i.type,level:i.level,role:f.userDetailsStore.role},null,8,["id","children","name","firstAncestor","isUnlocked","isMastered","type","level","role"])]))),256)):(s(!0),n(k,{key:1},L(f.skillsStore.nestedSkillsList,i=>(s(),n("div",null,[g(C,{id:i.id,children:i.children,depth:1,name:i.name,firstAncestor:i.first_ancestor,type:i.type,level:i.level,role:f.userDetailsStore.role,DeleteSkill:r.DeleteSkill},null,8,["id","children","name","firstAncestor","type","level","role","DeleteSkill"])]))),256))])}const O1=y(G1,[["render",K1]]),Q1="/images/banners/skills-banner.png";const W1={setup(){return{userDetailsStore:B()}},data(){return{}},components:{SkillsListParent:O1}},X1=t("div",{id:"banner"},[t("img",{src:Q1,class:"img-fluid"})],-1),Y1={key:0,class:"topnav",id:"skill-nav"},$1=t("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"white"})],-1);function e0(l,o,e,f,h,r){const a=u("router-link"),C=u("SkillsListParent");return s(),n(k,null,[X1,f.userDetailsStore.role=="admin"?(s(),n("div",Y1,[g(a,{class:"btn purple-btn",to:"/skills/add"},{default:w(()=>[M("Add  "),$1]),_:1}),g(a,{class:"btn purple-btn",to:"/tags"},{default:w(()=>[M("Skill Tags")]),_:1})])):d("",!0),g(C)],64)}const i0=y(W1,[["render",e0]]);export{i0 as default};
