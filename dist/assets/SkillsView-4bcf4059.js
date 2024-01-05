import{u as v}from"./SkillsStore-e9771472.js";import{u as T}from"./SkillTreeStore-0ea981e9.js";import{_ as y,e as _,o as l,c as n,a as i,n as d,t as p,q as h,s as b,x as M,f as g,h as w,F as u,r as f,g as S,p as F,b as A,u as E,i as x}from"./main-a8bbffc0.js";const I="/images/skill-emoticons/spoken-language-mastered.png",B="/images/skill-emoticons/spoken-language-unlocked.png",V="/images/skill-emoticons/written-language-mastered.png",D="/images/skill-emoticons/written-language-unlocked.png",j="/images/skill-emoticons/mathematics-mastered.png",U="/images/skill-emoticons/mathematics-unlocked.png",H="/images/skill-emoticons/science-mastered.png",N="/images/skill-emoticons/science-unlocked.png",P="/images/skill-emoticons/history-mastered.png",z="/images/skill-emoticons/history-unlocked.png",q="/images/skill-emoticons/life-mastered.png",Z="/images/skill-emoticons/life-unlocked.png";const G={setup(){return{skillsStore:v()}},data(){return{showChildren:!1,showSubskills:!1,showModal:!1,isSuperSkill:!1,childrenNotSubskills:[],subSkills:[]}},props:["id","children","name","firstAncestor","isUnlocked","isMastered","type","depth","role","DeleteSkill"],computed:{indent(){var o=0;return screen.width<=480?this.depth==1?o=25:o=20:o=50,this.type!="sub"?{transform:`translate(${this.depth*o-35.2}px)`}:{transform:`translate(${(this.depth-1)*o-35.2}px)`}}},async created(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList();for(let s=0;s<this.skillsStore.skillsList.length;s++)if(this.skillsStore.skillsList[s].type=="sub"){var o=this.skillsStore.skillsList[s].parent;for(let t=0;t<this.skillsStore.skillsList.length;t++)this.id==o&&(this.isSuperSkill=!0)}for(let s=0;s<this.children.length;s++)this.children[s].type=="sub"?this.subSkills.push(this.children[s]):this.childrenNotSubskills.push(this.children[s])},methods:{toggleChildren(){this.showChildren=!this.showChildren},toggleSubSkills(){this.showSubskills=!this.showSubskills},ShowMobileButtonsModal(){this.showModal=!0},HideMobileButtonsModal(){this.showModal=!1}}},L=o=>(F("data-v-965fa25e"),o=o(),A(),o),J={key:0},K={key:0,src:I},O={key:1,src:B},Q={key:2,src:B,class:"locked-skill-styling"},R={key:3,src:V},W={key:4,src:D},X={key:5,src:D,class:"locked-skill-styling"},Y={key:6,src:j},$={key:7,src:U},t1={key:8,src:U,class:"locked-skill-styling"},e1={key:9,src:H},s1={key:10,src:N},i1={key:11,src:N,class:"locked-skill-styling"},l1={key:12,src:P},n1={key:13,src:z},o1={key:14,src:z,class:"locked-skill-styling"},r1={key:15,src:q},d1={key:16,src:Z},c1={key:17,src:Z,class:"locked-skill-styling"},h1={style:{"text-align":"left"}},a1={id:"buttons",class:"d-flex"},C1=L(()=>i("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"#9C7EEC"})],-1)),u1=[C1],k1=L(()=>i("svg",{xmlns:"http://www.w3.org/2000/svg",height:"25",width:"30",viewBox:"0 0 576 512"},[i("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z",fill:"#9C7EEC"})],-1)),_1=[k1],m1=L(()=>i("svg",{width:" 25",height:"9",viewBox:"0 0 25 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("circle",{cx:"3.09803",cy:"3.09803",r:"3.09803",transform:"matrix(0.653216 -0.757172 -0.757172 -0.653216 5.19141 8.73889)",fill:"#FFFFFF"}),i("circle",{cx:"3.09803",cy:"3.09803",r:"3.09803",transform:"matrix(0.653216 -0.757172 -0.757172 -0.653216 12.8223 8.73889)",fill:"#FFFFFF"}),i("circle",{cx:"3.09803",cy:"3.09803",r:"3.09803",transform:"matrix(0.653216 -0.757172 -0.757172 -0.653216 20.4531 8.73889)",fill:"#FFFFFF"})],-1)),g1=[m1],f1={class:"modal-content d-flex"},S1=L(()=>i("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"#9C7EEC"})],-1)),w1=[S1],L1=L(()=>i("svg",{xmlns:"http://www.w3.org/2000/svg",height:"25",width:"30",viewBox:"0 0 576 512"},[i("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z",fill:"#9C7EEC"})],-1));function b1(o,s,t,m,c,r){const a=_("router-link"),C=_("SkillsListChildStudent",!0);return l(),n(u,null,[i("button",{style:M(r.indent),class:b([{"top-level-skills":t.depth==1,locked:t.isUnlocked!=1,unlocked:t.isUnlocked==1,mastered:t.isMastered==1,"sub-skill-button":t.type=="sub"},"skill-button d-flex justify-content-between"]),onClick:s[3]||(s[3]=(...e)=>r.toggleChildren&&r.toggleChildren(...e))},[t.depth>1?(l(),n("div",J,[t.firstAncestor==1&&t.isMastered==1?(l(),n("img",K)):t.firstAncestor==1&&t.isUnlocked==1?(l(),n("img",O)):t.firstAncestor==1?(l(),n("img",Q)):d("",!0),t.firstAncestor==2&&t.isMastered==1?(l(),n("img",R)):t.firstAncestor==2&&t.isUnlocked==1?(l(),n("img",W)):t.firstAncestor==2?(l(),n("img",X)):d("",!0),t.firstAncestor==3&&t.isMastered==1?(l(),n("img",Y)):t.firstAncestor==3&&t.isUnlocked==1?(l(),n("img",$)):t.firstAncestor==3?(l(),n("img",t1)):d("",!0),t.firstAncestor==4&&t.isMastered==1?(l(),n("img",e1)):t.firstAncestor==4&&t.isUnlocked==1?(l(),n("img",s1)):t.firstAncestor==4?(l(),n("img",i1)):d("",!0),t.firstAncestor==5&&t.isMastered==1?(l(),n("img",l1)):t.firstAncestor==5&&t.isUnlocked==1?(l(),n("img",n1)):t.firstAncestor==5?(l(),n("img",o1)):d("",!0),t.firstAncestor==6&&t.isMastered==1?(l(),n("img",r1)):t.firstAncestor==6&&t.isUnlocked==1?(l(),n("img",d1)):t.firstAncestor==6?(l(),n("img",c1)):d("",!0)])):d("",!0),i("span",h1,p(t.name),1),i("div",a1,[c.isSuperSkill?(l(),n("button",{key:0,type:"button",onClick:s[0]||(s[0]=h((...e)=>r.toggleSubSkills&&r.toggleSubSkills(...e),["stop"])),class:"btn me-2 ci-btn"},u1)):d("",!0),t.isUnlocked==1?(l(),n("button",{key:1,onClick:s[1]||(s[1]=h(e=>o.$router.push("/skills/"+t.id),["stop"])),class:"btn me-2 ci-btn"},_1)):d("",!0)]),i("button",{class:b(["d-none btn",{"top-level-skills-mobile-buttons":t.depth==1,"mobile-buttons":t.depth>1}]),onClick:s[2]||(s[2]=h(e=>r.ShowMobileButtonsModal(),["stop"]))},g1,2)],6),c.showModal?(l(),n("div",{key:0,id:"button-modal",class:"modal",onClick:s[5]||(s[5]=e=>r.HideMobileButtonsModal())},[i("div",f1,[c.isSuperSkill?(l(),n("button",{key:0,type:"button",onClick:s[4]||(s[4]=h((...e)=>r.toggleSubSkills&&r.toggleSubSkills(...e),["stop"])),class:"btn me-2 ci-btn"},w1)):d("",!0),g(a,{to:"/skills/"+t.id,class:"btn me-2",role:"button"},{default:w(()=>[L1]),_:1},8,["to"])])])):d("",!0),c.showSubskills?(l(!0),n(u,{key:1},f(c.subSkills,e=>(l(),S(C,{id:e.id,children:e.children,firstAncestor:t.firstAncestor,isUnlocked:e.is_accessible,isMastered:e.is_mastered,type:e.type,name:e.skill_name,role:t.role,DeleteSkill:t.DeleteSkill,depth:t.depth+1},null,8,["id","children","firstAncestor","isUnlocked","isMastered","type","name","role","DeleteSkill","depth"]))),256)):d("",!0),c.showChildren?(l(!0),n(u,{key:2},f(c.childrenNotSubskills,e=>(l(),S(C,{id:e.id,children:e.children,firstAncestor:t.firstAncestor,isUnlocked:e.is_accessible,isMastered:e.is_mastered,type:e.type,name:e.skill_name,role:t.role,DeleteSkill:t.DeleteSkill,depth:t.depth+1},null,8,["id","children","firstAncestor","isUnlocked","isMastered","type","name","role","DeleteSkill","depth"]))),256)):d("",!0)],64)}const y1=y(G,[["render",b1],["__scopeId","data-v-965fa25e"]]);const v1={setup(){return{skillsStore:v()}},data(){return{showChildren:!1,showSubskills:!1,showModal:!1,isSuperSkill:!1,childrenNotSubskills:[],subSkills:[]}},props:["id","children","name","firstAncestor","type","depth","role"],computed:{indent(){var o=0;return screen.width<=480?this.depth==1?o=25:o=20:o=50,this.type!="sub"?{transform:`translate(${this.depth*o-35.2}px)`}:{transform:`translate(${(this.depth-1)*o-35.2}px)`}}},async created(){await this.skillsStore.getNestedSkillsList(),await this.skillsStore.getSkillsList();for(let s=0;s<this.skillsStore.skillsList.length;s++)if(this.skillsStore.skillsList[s].type=="sub"){var o=this.skillsStore.skillsList[s].parent;for(let t=0;t<this.skillsStore.skillsList.length;t++)this.id==o&&(this.isSuperSkill=!0)}for(let s=0;s<this.children.length;s++)this.children[s].type=="sub"?this.subSkills.push(this.children[s]):this.childrenNotSubskills.push(this.children[s])},methods:{toggleChildren(){this.showChildren=!this.showChildren},toggleSubSkills(){this.showSubskills=!this.showSubskills},ShowMobileButtonsModal(){this.showModal=!0},HideMobileButtonsModal(){this.showModal=!1},async DeleteSkill(o){await this.skillsStore.deleteSkill(o),this.$parent.$forceUpdate()}}},k=o=>(F("data-v-505a1655"),o=o(),A(),o),x1={style:{"text-align":"left"}},p1={id:"buttons",class:"d-flex"},M1=k(()=>i("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"#9C7EEC"})],-1)),F1=[M1],A1=k(()=>i("svg",{xmlns:"http://www.w3.org/2000/svg",height:"25",width:"30",viewBox:"0 0 576 512"},[i("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z",fill:"#9C7EEC"})],-1)),E1=[A1],B1=k(()=>i("svg",{width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M0.75558 19.3181C0.77635 19.5132 0.87137 19.6928 1.02096 19.8198C1.17055 19.9468 1.36325 20.0114 1.55915 20.0002L5.27701 19.8288L0.398438 15.6145L0.75558 19.3181Z",fill:"#9C7EEC"}),i("path",{d:"M11.8467 2.24484L0.801758 15.0315L5.6802 19.2454L16.7251 6.45877L11.8467 2.24484Z",fill:"#9C7EEC"}),i("path",{d:"M18.2555 3.11796L14.934 0.260817C14.832 0.172259 14.7134 0.104756 14.5852 0.0621907C14.4569 0.0196256 14.3215 0.00283902 14.1868 0.0127967C14.052 0.0227543 13.9205 0.0592596 13.7999 0.120212C13.6793 0.181165 13.572 0.265362 13.484 0.36796L12.4805 1.50725L17.359 5.71439L18.3519 4.56082C18.5289 4.35602 18.6181 4.08969 18.6 3.81958C18.582 3.54948 18.4582 3.29738 18.2555 3.11796Z",fill:"#9C7EEC"})],-1)),D1=[B1],U1=k(()=>i("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M0.312625 14.5205L4.83312 9.99999L0.312625 5.49218C0.111396 5.29025 -0.00159545 5.0168 -0.00159545 4.73172C-0.00159545 4.44665 0.111396 4.17319 0.312625 3.97126L3.96282 0.312625C4.16474 0.111396 4.4382 -0.00159545 4.72327 -0.00159545C5.00835 -0.00159545 5.2818 0.111396 5.48373 0.312625L9.99999 4.83312L14.5205 0.312625C14.6204 0.21056 14.7397 0.12947 14.8714 0.0741101C15.003 0.0187502 15.1444 -0.00976563 15.2873 -0.00976562C15.4301 -0.00976563 15.5715 0.0187502 15.7032 0.0741101C15.8349 0.12947 15.9541 0.21056 16.0541 0.312625L19.6874 3.96282C19.8886 4.16474 20.0016 4.4382 20.0016 4.72327C20.0016 5.00835 19.8886 5.2818 19.6874 5.48373L15.1669 9.99999L19.6874 14.5205C19.8883 14.7217 20.0012 14.9944 20.0012 15.2788C20.0012 15.5632 19.8883 15.836 19.6874 16.0372L16.0541 19.6874C15.8529 19.8883 15.5801 20.0012 15.2957 20.0012C15.0113 20.0012 14.7386 19.8883 14.5374 19.6874L9.99999 15.1669L5.49218 19.6874C5.29025 19.8886 5.0168 20.0016 4.73172 20.0016C4.44665 20.0016 4.17319 19.8886 3.97126 19.6874L0.312625 16.0541C0.21056 15.9541 0.12947 15.8349 0.0741101 15.7032C0.0187502 15.5715 -0.00976563 15.4301 -0.00976562 15.2873C-0.00976563 15.1444 0.0187502 15.003 0.0741101 14.8714C0.12947 14.7397 0.21056 14.6204 0.312625 14.5205Z",fill:"#9C7EEC"})],-1)),N1=[U1],z1=k(()=>i("svg",{width:" 25",height:"9",viewBox:"0 0 25 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("circle",{cx:"3.09803",cy:"3.09803",r:"3.09803",transform:"matrix(0.653216 -0.757172 -0.757172 -0.653216 5.19141 8.73889)",fill:"#FFFFFF"}),i("circle",{cx:"3.09803",cy:"3.09803",r:"3.09803",transform:"matrix(0.653216 -0.757172 -0.757172 -0.653216 12.8223 8.73889)",fill:"#FFFFFF"}),i("circle",{cx:"3.09803",cy:"3.09803",r:"3.09803",transform:"matrix(0.653216 -0.757172 -0.757172 -0.653216 20.4531 8.73889)",fill:"#FFFFFF"})],-1)),Z1=[z1],T1={class:"modal-content d-flex"},I1=k(()=>i("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"#9C7EEC"})],-1)),V1=[I1],j1=k(()=>i("svg",{xmlns:"http://www.w3.org/2000/svg",height:"25",width:"30",viewBox:"0 0 576 512"},[i("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z",fill:"#9C7EEC"})],-1)),H1=k(()=>i("svg",{width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M0.75558 19.3181C0.77635 19.5132 0.87137 19.6928 1.02096 19.8198C1.17055 19.9468 1.36325 20.0114 1.55915 20.0002L5.27701 19.8288L0.398438 15.6145L0.75558 19.3181Z",fill:"#9C7EEC"}),i("path",{d:"M11.8467 2.24484L0.801758 15.0315L5.6802 19.2454L16.7251 6.45877L11.8467 2.24484Z",fill:"#9C7EEC"}),i("path",{d:"M18.2555 3.11796L14.934 0.260817C14.832 0.172259 14.7134 0.104756 14.5852 0.0621907C14.4569 0.0196256 14.3215 0.00283902 14.1868 0.0127967C14.052 0.0227543 13.9205 0.0592596 13.7999 0.120212C13.6793 0.181165 13.572 0.265362 13.484 0.36796L12.4805 1.50725L17.359 5.71439L18.3519 4.56082C18.5289 4.35602 18.6181 4.08969 18.6 3.81958C18.582 3.54948 18.4582 3.29738 18.2555 3.11796Z",fill:"#9C7EEC"})],-1)),P1=k(()=>i("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M0.312625 14.5205L4.83312 9.99999L0.312625 5.49218C0.111396 5.29025 -0.00159545 5.0168 -0.00159545 4.73172C-0.00159545 4.44665 0.111396 4.17319 0.312625 3.97126L3.96282 0.312625C4.16474 0.111396 4.4382 -0.00159545 4.72327 -0.00159545C5.00835 -0.00159545 5.2818 0.111396 5.48373 0.312625L9.99999 4.83312L14.5205 0.312625C14.6204 0.21056 14.7397 0.12947 14.8714 0.0741101C15.003 0.0187502 15.1444 -0.00976563 15.2873 -0.00976562C15.4301 -0.00976563 15.5715 0.0187502 15.7032 0.0741101C15.8349 0.12947 15.9541 0.21056 16.0541 0.312625L19.6874 3.96282C19.8886 4.16474 20.0016 4.4382 20.0016 4.72327C20.0016 5.00835 19.8886 5.2818 19.6874 5.48373L15.1669 9.99999L19.6874 14.5205C19.8883 14.7217 20.0012 14.9944 20.0012 15.2788C20.0012 15.5632 19.8883 15.836 19.6874 16.0372L16.0541 19.6874C15.8529 19.8883 15.5801 20.0012 15.2957 20.0012C15.0113 20.0012 14.7386 19.8883 14.5374 19.6874L9.99999 15.1669L5.49218 19.6874C5.29025 19.8886 5.0168 20.0016 4.73172 20.0016C4.44665 20.0016 4.17319 19.8886 3.97126 19.6874L0.312625 16.0541C0.21056 15.9541 0.12947 15.8349 0.0741101 15.7032C0.0187502 15.5715 -0.00976563 15.4301 -0.00976562 15.2873C-0.00976563 15.1444 0.0187502 15.003 0.0741101 14.8714C0.12947 14.7397 0.21056 14.6204 0.312625 14.5205Z",fill:"#9C7EEC"})],-1)),q1=[P1];function G1(o,s,t,m,c,r){const a=_("router-link"),C=_("SkillsListChildNonStudent",!0);return l(),n(u,null,[i("button",{style:M(r.indent),class:b([{"top-level-skills":t.depth==1,"sub-skill-button":t.type=="sub"},"skill-button d-flex justify-content-between"]),onClick:s[5]||(s[5]=(...e)=>r.toggleChildren&&r.toggleChildren(...e))},[i("span",x1,p(t.name),1),i("div",p1,[c.isSuperSkill?(l(),n("button",{key:0,type:"button",onClick:s[0]||(s[0]=h((...e)=>r.toggleSubSkills&&r.toggleSubSkills(...e),["stop"])),class:"btn me-2 ci-btn"},F1)):d("",!0),i("button",{onClick:s[1]||(s[1]=h(e=>o.$router.push("/skills/"+t.id),["stop"])),class:"btn me-2 ci-btn"},E1),t.role=="admin"?(l(),n("button",{key:1,onClick:s[2]||(s[2]=h(e=>o.$router.push("/skills/edit/"+t.id),["stop"])),class:"btn me-2 ci-btn"},D1)):d("",!0),t.role=="admin"?(l(),n("button",{key:2,type:"button",onClick:s[3]||(s[3]=h(e=>r.DeleteSkill(t.id),["stop"])),class:"btn delete-btn me-2 ci-btn"},N1)):d("",!0)]),i("button",{class:b(["d-none btn",{"top-level-skills-mobile-buttons":t.depth==1,"mobile-buttons":t.depth>1}]),onClick:s[4]||(s[4]=h(e=>r.ShowMobileButtonsModal(),["stop"]))},Z1,2)],6),c.showModal?(l(),n("div",{key:0,id:"button-modal",class:"modal",onClick:s[8]||(s[8]=e=>r.HideMobileButtonsModal())},[i("div",T1,[c.isSuperSkill?(l(),n("button",{key:0,type:"button",onClick:s[6]||(s[6]=h((...e)=>r.toggleSubSkills&&r.toggleSubSkills(...e),["stop"])),class:"btn me-2 ci-btn"},V1)):d("",!0),g(a,{to:"/skills/"+t.id,class:"btn me-2",role:"button"},{default:w(()=>[j1]),_:1},8,["to"]),t.role=="admin"?(l(),S(a,{key:1,to:"/skills/edit/"+t.id,class:"btn me-2",role:"button"},{default:w(()=>[H1]),_:1},8,["to"])):d("",!0),t.role=="admin"?(l(),n("button",{key:2,type:"button",onClick:s[7]||(s[7]=(...e)=>r.DeleteSkill(t.id).stop&&r.DeleteSkill(t.id).stop(...e)),class:"btn me-2"},q1)):d("",!0)])])):d("",!0),c.showSubskills?(l(!0),n(u,{key:1},f(c.subSkills,e=>(l(),S(C,{id:e.id,children:e.children,firstAncestor:t.firstAncestor,type:e.type,name:e.name,role:t.role,depth:t.depth+1},null,8,["id","children","firstAncestor","type","name","role","depth"]))),256)):d("",!0),c.showChildren?(l(!0),n(u,{key:2},f(c.childrenNotSubskills,e=>(l(),S(C,{id:e.id,children:e.children,firstAncestor:t.firstAncestor,type:e.type,name:e.name,role:t.role,depth:t.depth+1},null,8,["id","children","firstAncestor","type","name","role","depth"]))),256)):d("",!0)],64)}const J1=y(v1,[["render",G1],["__scopeId","data-v-505a1655"]]),K1={setup(){const o=v(),s=E(),t=T();return{skillsStore:o,userDetailsStore:s,skillTreeStore:t}},data(){return{userSkills:[]}},async created(){this.userDetailsStore.role=="student"?(this.skillTreeStore.userSkills.length==0&&await this.skillTreeStore.getUserSkills(),this.userSkills=this.skillTreeStore.userSkills):this.skillsStore.skillsList.length==0&&await this.skillsStore.getNestedSkillsList()},computed:{},methods:{},components:{SkillsListChildStudent:y1,SkillsListChildNonStudent:J1}},O1={class:"container mt-3",style:{overflow:"auto"}};function Q1(o,s,t,m,c,r){const a=_("SkillsListChildStudent"),C=_("SkillsListChildNonStudent");return l(),n("div",O1,[this.userDetailsStore.role=="student"?(l(!0),n(u,{key:0},f(c.userSkills,e=>(l(),n("div",null,[g(a,{id:e.id,children:e.children,depth:1,name:e.skill_name,firstAncestor:e.first_ancestor,isUnlocked:e.is_accessible,isMastered:e.is_mastered,type:e.type,role:m.userDetailsStore.role},null,8,["id","children","name","firstAncestor","isUnlocked","isMastered","type","role"])]))),256)):(l(!0),n(u,{key:1},f(m.skillsStore.nestedSkillsList,e=>(l(),n("div",null,[g(C,{id:e.id,children:e.children,depth:1,name:e.name,firstAncestor:e.first_ancestor,type:e.type,role:m.userDetailsStore.role},null,8,["id","children","name","firstAncestor","type","role"])]))),256))])}const R1=y(K1,[["render",Q1]]),W1="/images/banners/skills-banner.png";const X1={setup(){return{userDetailsStore:E()}},data(){return{}},components:{SkillsListParent:R1}},Y1=i("div",{id:"banner"},[i("img",{src:W1,class:"img-fluid"})],-1),$1={key:0,class:"topnav",id:"skill-nav"},t0=i("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"white"})],-1);function e0(o,s,t,m,c,r){const a=_("router-link"),C=_("SkillsListParent");return l(),n(u,null,[Y1,m.userDetailsStore.role=="admin"?(l(),n("div",$1,[g(a,{class:"btn purple-btn",to:"/skills/add"},{default:w(()=>[x("Add  "),t0]),_:1}),g(a,{class:"btn purple-btn",to:"/tags"},{default:w(()=>[x("Skill Tags")]),_:1})])):d("",!0),g(C)],64)}const n0=y(X1,[["render",e0]]);export{n0 as default};
