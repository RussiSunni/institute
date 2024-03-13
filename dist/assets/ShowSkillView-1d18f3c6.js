import{u as M}from"./TagsStore-5803c33c.js";import{u as T}from"./SkillTagsStore-71fc70f4.js";import{_ as w,e as k,o as l,c as d,a as s,h as f,g as m,i as v,F as L,r as S,L as $,t as C,f as g,d as c,p as b,b as y,u as D,j as I,w as U,N as V}from"./main-f2534bd2.js";import{u as F}from"./SkillsStore-3e96e654.js";import{u as P}from"./UserSkillsStore-bc537ad0.js";import{_ as Z}from"./recurso-69-12793b41.js";import{u as B}from"./UsersStore-4981f491.js";import{_ as j}from"./institute-collins-2-184bdfcb.js";const N={setup(){},data(){return{skillId:this.$route.params.id,posts:[],users:[],votes:[],user:{},showModal:!1,resourceId:null}},computed:{orderedAndNamedPosts(){for(let e=0;e<this.posts.length;e++)for(let o=0;o<this.users.length;o++)this.posts[e].user_id==this.users[o].id&&(this.posts[e].studentName=this.users[o].first_name+" "+this.users[o].last_name,this.posts[e].userAvatar=this.users[o].avatar);var t=this.posts.sort(({voteCount:e},{voteCount:o})=>o-e);for(let e=0;e<t.length;e++)this.posts[e].index=e;return t}},created(){this.getUserId(),this.getUsers(),this.getPosts(this.skillId)},methods:{getUserId(){fetch("/get-session-details").then(function(t){return t.json()}).then(t=>this.user=t).then(()=>{})},getPosts(t){fetch("/skills/"+t+"/resources").then(function(e){return e.json()}).then(e=>this.posts=e).then(()=>{for(let e=0;e<this.posts.length;e++)this.getPostVote(e,this.posts[e].id)})},getPostVote(t,e){fetch("/user-votes/"+e).then(o=>o.json()).then(o=>this.votes=o).then(()=>{this.posts[t].userUpVote=!1,this.posts[t].userDownVote=!1;var o=0;for(let n=0;n<this.votes.length;n++)o=o+this.votes[n].vote,this.votes[n].user_id==this.user.userId&&(this.votes[n].vote==1?(this.posts[t].userUpVote=!0,this.posts[t].userDownVote=!1):this.votes[n].vote==-1?(this.posts[t].userUpVote=!1,this.posts[t].userDownVote=!0):(this.posts[t].userUpVote=!1,this.posts[t].userDownVote=!1));this.posts[t].voteCount=o})},getUsers(){fetch("/users/list").then(function(t){return t.json()}).then(t=>this.users=t)},voteUp(t,e,o){o?fetch("/user-votes/"+this.user.userId+"/"+e+"/edit/cancel",{method:"PUT",headers:{"Content-Type":"content/type"},body:{}}).then(n=>this.getPostVote(t,e)):fetch("/user-votes/"+this.user.userId+"/"+e+"/edit/up",{method:"PUT",headers:{"Content-Type":"content/type"},body:{}}).then(n=>this.getPostVote(t,e))},voteDown(t,e,o){o?fetch("/user-votes/"+this.user.userId+"/"+e+"/edit/cancel",{method:"PUT",headers:{"Content-Type":"content/type"},body:{}}).then(n=>this.getPostVote(t,e)):fetch("/user-votes/"+this.user.userId+"/"+e+"/edit/down",{method:"PUT",headers:{"Content-Type":"content/type"},body:{}}).then(n=>this.getPostVote(t,e))},deletePost(t){this.showModal=!1,fetch("/resources/delete/"+t,{method:"DELETE"});var e;for(let o=0;o<this.posts.length;o++)this.posts[o].id==t&&(e=o);e>-1&&this.posts.splice(e,1)},showWarningModal(t){this.resourceId=t,this.showModal=!0},closeWarningModal(){this.showModal=!1}}},_=t=>(b("data-v-17acefd8"),t=t(),y(),t),A={class:"container-fluid"},E={id:"first-forum-row",class:"row justify-content-md-between mt-3"},H=_(()=>s("div",{class:"col-12 col-md-6 row"},[s("div",{id:"header-col",class:"col-6 col-lg-3"},[s("h2",null,"Resources")]),s("div",{class:"col-6 col-lg-2"},[s("img",{src:Z,class:"img-fluid"})])],-1)),q={id:"add-resource-column",class:"col-12 col-md-6 mt-3 mt-md-0"},W={class:"d-flex flex-row-reverse center-header"},R=_(()=>s("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"white"})],-1)),z={id:"posts-big-container"},Q={class:"row forum-container mt-3"},Y={class:"row"},G={class:"d-flex flex-row justify-content-end"},J=["onClick"],K=_(()=>s("svg",{width:"34",height:"27",viewBox:"0 0 34 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M6.7047 8.4637H2.53277C2.20492 8.45845 1.87926 8.51793 1.57443 8.63872C1.2696 8.75952 0.991586 8.93926 0.756319 9.16765C0.521052 9.39604 0.333148 9.66859 0.203367 9.96971C0.0735865 10.2708 0.00447827 10.5946 0 10.9224L0 23.8771C0.00413046 24.2051 0.0730026 24.529 0.202662 24.8303C0.332321 25.1315 0.520214 25.4042 0.755552 25.6327C0.99089 25.8612 1.26904 26.0409 1.57402 26.1616C1.87901 26.2822 2.20483 26.3415 2.53277 26.3359H6.7285C7.2442 26.3324 7.7378 26.126 8.10246 25.7613C8.46712 25.3967 8.67352 24.9031 8.67699 24.3874V10.4228C8.6763 9.90523 8.47113 9.40893 8.10617 9.04198C7.7412 8.67504 7.24602 8.46719 6.7285 8.4637H6.7047Z",fill:"#73DED0"}),s("path",{d:"M30.9566 7.96678H22.1818L22.6551 2.45972C22.6905 2.05887 22.6162 1.65593 22.4402 1.29406C22.2641 0.932193 21.993 0.625033 21.6557 0.405482C21.1721 0.0908513 20.5948 -0.047297 20.0211 0.0143545C19.4475 0.0760059 18.9127 0.333681 18.5069 0.74389L11.5643 7.97736C10.9772 8.57753 10.6463 9.38239 10.6416 10.222V24.7629C10.6446 24.9661 10.7044 25.1644 10.8142 25.3354C10.9239 25.5064 11.0794 25.6433 11.2629 25.7305C12.4565 26.3203 13.7703 26.6261 15.1017 26.6242H30.3671C30.89 26.6414 31.3994 26.456 31.789 26.1068C32.1787 25.7576 32.4184 25.2714 32.4583 24.7497L33.0479 9.98401C33.0902 8.88154 32.1411 7.96678 30.9566 7.96678Z",fill:"#73DED0"})],-1)),O=[K],X=["onClick"],s1=_(()=>s("svg",{width:"34",height:"27",viewBox:"0 0 34 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M26.6742 18.1613L30.8461 18.1613C31.174 18.1665 31.4996 18.1071 31.8045 17.9863C32.1093 17.8655 32.3873 17.6857 32.6226 17.4574C32.8579 17.229 33.0458 16.9564 33.1755 16.6553C33.3053 16.3542 33.3744 16.0304 33.3789 15.7026L33.3789 2.74788C33.3748 2.41992 33.3059 2.096 33.1762 1.79473C33.0466 1.49346 32.8587 1.22076 32.6234 0.9923C32.388 0.76384 32.1099 0.584116 31.8049 0.463449C31.4999 0.342781 31.1741 0.283544 30.8461 0.289142L26.6504 0.289142C26.1347 0.292604 25.6411 0.499002 25.2764 0.863666C24.9118 1.22833 24.7054 1.72193 24.7019 2.23763L24.7019 16.2022C24.7026 16.7198 24.9078 17.2161 25.2727 17.583C25.6377 17.95 26.1329 18.1578 26.6504 18.1613L26.6742 18.1613Z",fill:"#FC6E68"}),s("path",{d:"M2.42226 18.6582L11.1971 18.6582L10.7238 24.1653C10.6884 24.5661 10.7627 24.9691 10.9387 25.3309C11.1148 25.6928 11.3859 26 11.7232 26.2195C12.2068 26.5341 12.7842 26.6723 13.3578 26.6106C13.9314 26.549 14.4663 26.2913 14.872 25.8811L21.8146 18.6476C22.4017 18.0475 22.7326 17.2426 22.7373 16.403L22.7373 1.86209C22.7343 1.6589 22.6745 1.4606 22.5648 1.2896C22.455 1.1186 22.2995 0.981731 22.116 0.894453C20.9224 0.304703 19.6086 -0.00113133 18.2772 0.000842658L3.01183 0.000841324C2.48889 -0.0163535 1.9795 0.168989 1.58988 0.518219C1.20026 0.867447 0.960491 1.3536 0.920578 1.8753L0.331006 16.641C0.288705 17.7435 1.23783 18.6582 2.42226 18.6582Z",fill:"#FC6E68"})],-1)),t1=[s1],e1=_(()=>s("svg",{width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M0.75558 19.3181C0.77635 19.5132 0.87137 19.6928 1.02096 19.8198C1.17055 19.9468 1.36325 20.0114 1.55915 20.0002L5.27701 19.8288L0.398438 15.6145L0.75558 19.3181Z",fill:"#857D99"}),s("path",{d:"M11.8467 2.24484L0.801758 15.0315L5.6802 19.2454L16.7251 6.45877L11.8467 2.24484Z",fill:"#857D99"}),s("path",{d:"M18.2555 3.11796L14.934 0.260817C14.832 0.172259 14.7134 0.104756 14.5852 0.0621907C14.4569 0.0196256 14.3215 0.00283902 14.1868 0.0127967C14.052 0.0227543 13.9205 0.0592596 13.7999 0.120212C13.6793 0.181165 13.572 0.265362 13.484 0.36796L12.4805 1.50725L17.359 5.71439L18.3519 4.56082C18.5289 4.35602 18.6181 4.08969 18.6 3.81958C18.582 3.54948 18.4582 3.29738 18.2555 3.11796Z",fill:"#857D99"})],-1)),o1=["onClick"],i1=_(()=>s("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M0.312625 14.5205L4.83312 9.99999L0.312625 5.49218C0.111396 5.29025 -0.00159545 5.0168 -0.00159545 4.73172C-0.00159545 4.44665 0.111396 4.17319 0.312625 3.97126L3.96282 0.312625C4.16474 0.111396 4.4382 -0.00159545 4.72327 -0.00159545C5.00835 -0.00159545 5.2818 0.111396 5.48373 0.312625L9.99999 4.83312L14.5205 0.312625C14.6204 0.21056 14.7397 0.12947 14.8714 0.0741101C15.003 0.0187502 15.1444 -0.00976563 15.2873 -0.00976562C15.4301 -0.00976563 15.5715 0.0187502 15.7032 0.0741101C15.8349 0.12947 15.9541 0.21056 16.0541 0.312625L19.6874 3.96282C19.8886 4.16474 20.0016 4.4382 20.0016 4.72327C20.0016 5.00835 19.8886 5.2818 19.6874 5.48373L15.1669 9.99999L19.6874 14.5205C19.8883 14.7217 20.0012 14.9944 20.0012 15.2788C20.0012 15.5632 19.8883 15.836 19.6874 16.0372L16.0541 19.6874C15.8529 19.8883 15.5801 20.0012 15.2957 20.0012C15.0113 20.0012 14.7386 19.8883 14.5374 19.6874L9.99999 15.1669L5.49218 19.6874C5.29025 19.8886 5.0168 20.0016 4.73172 20.0016C4.44665 20.0016 4.17319 19.8886 3.97126 19.6874L0.312625 16.0541C0.21056 15.9541 0.12947 15.8349 0.0741101 15.7032C0.0187502 15.5715 -0.00976563 15.4301 -0.00976562 15.2873C-0.00976563 15.1444 0.0187502 15.003 0.0741101 14.8714C0.12947 14.7397 0.21056 14.6204 0.312625 14.5205Z",fill:"#857D99"})],-1)),l1=[i1],n1={class:"row"},r1={class:"col post-user-row"},d1={id:"user-avatar"},c1=["src"],h1={class:"user-name-div"},a1={id:"user-name-text"},u1=_(()=>s("hr",null,null,-1)),_1={class:"forum-post row"},p1=["innerHTML"],m1={key:0},C1={id:"myModal",class:"modal"},v1={class:"modal-content"},k1=_(()=>s("p",null,"Are you sure you want to delete the resource?",-1)),f1={style:{display:"flex",gap:"10px"}};function g1(t,e,o,n,i,a){const u=k("router-link");return l(),d("div",A,[s("div",E,[H,s("div",q,[s("div",W,[f(u,{to:"/resources/add/"+i.skillId,class:"btn green-btn",role:"button"},{default:m(()=>[v("Add resource   "),R]),_:1},8,["to"])])])]),s("div",z,[(l(!0),d(L,null,S(a.orderedAndNamedPosts,r=>(l(),d("div",Q,[s("div",Y,[s("div",G,[s("button",{onClick:p=>a.voteUp(r.index,r.id,r.userUpVote),class:"btn",type:"button"},O,8,J),s("span",{id:"vote-count",class:$({"text-danger":r.voteCount<0,"text-primary":r.voteCount>0})},C(r.voteCount),3),s("button",{onClick:p=>a.voteDown(r.index,r.id,r.userDownVote),class:"btn",type:"button"},t1,8,X),r.user_id==i.user.userId?(l(),g(u,{key:0,to:"/resources/edit/"+r.id,class:"btn",role:"button"},{default:m(()=>[e1]),_:2},1032,["to"])):c("",!0),r.user_id==i.user.userId||i.user.role=="admin"?(l(),d("button",{key:1,type:"button",class:"btn",onClick:p=>a.showWarningModal(r.id)},l1,8,o1)):c("",!0)])]),s("div",n1,[s("div",r1,[s("div",d1,[s("img",{src:r.userAvatar,class:"user-avatar-img",alt:"user avatar"},null,8,c1)]),s("div",h1,[s("span",a1,C(r.studentName)+": ",1)])]),u1]),s("div",_1,[s("div",{innerHTML:r.content},null,8,p1)])]))),256))]),i.showModal?(l(),d("div",m1,[s("div",C1,[s("div",v1,[k1,s("div",f1,[s("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=r=>a.deletePost(this.resourceId))}," Yes "),s("button",{type:"button",class:"btn btn-dark",onClick:e[1]||(e[1]=r=>i.showModal=!1)}," No ")])])])])):c("",!0)])}const w1=w(N,[["render",g1],["__scopeId","data-v-17acefd8"]]);const L1={setup(){const t=M(),e=T(),o=D(),n=F(),i=I(),a=P();return t.tagsList.length==0&&t.getTagsList(),{tagsStore:t,skillTagsStore:e,userDetailsStore:o,skillsStore:n,skillTreeStore:i,userSkillsStore:a}},data(){return{skillId:this.$route.params.id,skill:{},userSkills:[],isMastered:!1,isUnlocked:!1,filters:[]}},components:{Forum:w1},async created(){await this.getSkill(),await this.getUserSkills()},methods:{getSkill(){fetch("/skills/show/"+this.skillId).then(function(t){return t.json()}).then(t=>this.skill=t).then(()=>{this.getSkillFilters();const t=document.getElementsByTagName("svg");t.length>0&&(t[0].style.height="50px")})},async getSkillFilters(){this.skillTagsStore.skillTagsList.length==0&&await this.skillTagsStore.getSkillTagsList();for(let t=0;t<this.skillTagsStore.skillTagsList.length;t++)this.skillTagsStore.skillTagsList[t].skill_id==this.skillId&&this.filters.push(this.skillTagsStore.skillTagsList[t].tag_id)},getUserSkills(){fetch("/user-skills/unnested-list/"+this.userDetailsStore.userId).then(function(t){return t.json()}).then(t=>this.userSkills=t).then(()=>{for(let t=0;t<this.userSkills.length;t++)this.userSkills[t].id==this.skillId&&(this.userSkills[t].is_mastered==1&&(this.isMastered=!0),this.userSkills[t].is_accessible==1&&(this.isUnlocked=!0))})},async MakeMastered(){await this.userSkillsStore.MakeMastered(this.userDetailsStore.userId,this.skillId),this.getUserSkills()}}},h=t=>(b("data-v-00612b72"),t=t(),y(),t),S1={class:"container mt-3"},b1={id:"skill-info-container"},y1={key:0,class:"row mt-3"},F1={class:"d-flex btn-header flex-row-reverse center-header"},x1={key:1,class:"d-flex flex-row-reverse center-header px-2"},M1=h(()=>s("svg",{width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M0.75558 19.3181C0.77635 19.5132 0.87137 19.6928 1.02096 19.8198C1.17055 19.9468 1.36325 20.0114 1.55915 20.0002L5.27701 19.8288L0.398438 15.6145L0.75558 19.3181Z",fill:"#FFFFFF"}),s("path",{d:"M11.8467 2.24484L0.801758 15.0315L5.6802 19.2454L16.7251 6.45877L11.8467 2.24484Z",fill:"#FFFFFF"}),s("path",{d:"M18.2555 3.11796L14.934 0.260817C14.832 0.172259 14.7134 0.104756 14.5852 0.0621907C14.4569 0.0196256 14.3215 0.00283902 14.1868 0.0127967C14.052 0.0227543 13.9205 0.0592596 13.7999 0.120212C13.6793 0.181165 13.572 0.265362 13.484 0.36796L12.4805 1.50725L17.359 5.71439L18.3519 4.56082C18.5289 4.35602 18.6181 4.08969 18.6 3.81958C18.582 3.54948 18.4582 3.29738 18.2555 3.11796Z",fill:"#FFFFFF"})],-1)),T1={class:"row mt-3"},$1={class:"col col-lg-2 col-md-3"},D1=["src"],I1={class:"col-lg-10 col-md-9"},U1={class:"row"},V1={key:0,class:"row pe-4 ps-4 ps-md-0"},P1={key:2},Z1=h(()=>s("div",{class:"row"},[s("div",{class:"col col-md-8 p-4 p-md-0"},[s("hr",{id:"hr-parent",class:"border border-2 opacity-100"})])],-1)),B1={class:"row mt-3"},j1=h(()=>s("h2",null,"Mastery Requirements",-1)),N1=["innerHTML"],A1={key:3},E1=h(()=>s("div",{class:"row"},[s("div",{class:"col col-md-8 p-4 p-md-0"},[s("hr",{id:"hr-parent",class:"border border-2 opacity-100"})])],-1)),H1={class:"row mt-3"},q1=h(()=>s("h2",null,"Filter",-1)),W1={class:"control control-checkbox"},R1={class:"my-auto mx-2 me-4"},z1=["value"],Q1=h(()=>s("div",{class:"control_indicator"},null,-1)),Y1={key:4},G1=h(()=>s("div",{class:"row"},[s("div",{class:"col col-md-8 p-4 p-md-0"},[s("hr",{id:"hr-parent",class:"border border-2 opacity-100"})])],-1)),J1={class:"row mt-3"},K1=h(()=>s("h2",null,"Assessment",-1)),O1={class:"col"},X1=h(()=>s("svg",{width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M0.75558 19.3181C0.77635 19.5132 0.87137 19.6928 1.02096 19.8198C1.17055 19.9468 1.36325 20.0114 1.55915 20.0002L5.27701 19.8288L0.398438 15.6145L0.75558 19.3181Z",fill:"#FFFFFF"}),s("path",{d:"M11.8467 2.24484L0.801758 15.0315L5.6802 19.2454L16.7251 6.45877L11.8467 2.24484Z",fill:"#FFFFFF"}),s("path",{d:"M18.2555 3.11796L14.934 0.260817C14.832 0.172259 14.7134 0.104756 14.5852 0.0621907C14.4569 0.0196256 14.3215 0.00283902 14.1868 0.0127967C14.052 0.0227543 13.9205 0.0592596 13.7999 0.120212C13.6793 0.181165 13.572 0.265362 13.484 0.36796L12.4805 1.50725L17.359 5.71439L18.3519 4.56082C18.5289 4.35602 18.6181 4.08969 18.6 3.81958C18.582 3.54948 18.4582 3.29738 18.2555 3.11796Z",fill:"#FFFFFF"})],-1)),ss={key:1},ts={key:0},es=h(()=>s("div",{id:"resource-hr"},[s("hr",{class:"border border-1 opacity-100"})],-1)),os={class:"row mt-3 mb-3"},is=h(()=>s("p",null," ",-1));function ls(t,e,o,n,i,a){const u=k("router-link"),r=k("Forum");return l(),d("div",S1,[s("div",b1,[i.isUnlocked&&!i.isMastered&&n.userDetailsStore.role=="student"?(l(),d("div",y1,[s("div",F1,[i.skill.type=="domain"?(l(),d("button",{key:0,onClick:e[0]||(e[0]=p=>a.MakeMastered()),class:"btn purple-btn"}," Click to unlock child skills ")):(l(),g(u,{key:1,class:"btn purple-btn",to:i.skillId+"/assessment"},{default:m(()=>[v("Take Assessment")]),_:1},8,["to"]))])])):c("",!0),n.userDetailsStore.role=="admin"?(l(),d("div",x1,[f(u,{to:"/skills/edit/"+i.skillId,class:"btn green-btn",role:"button"},{default:m(()=>[v("Edit   "),M1]),_:1},8,["to"])])):c("",!0),s("div",T1,[s("div",$1,[s("img",{src:i.skill.icon_image?i.skill.icon_image:"/images/skill-avatar/recurso.png",class:"img-fluid"},null,8,D1)]),s("div",I1,[s("div",U1,[s("h1",null,C(i.skill.name),1)]),n.userDetailsStore.role=="admin"?(l(),d("div",V1,[s("p",null,C(i.skill.description),1)])):c("",!0)])]),i.skill.type!="domain"?(l(),d("div",P1,[Z1,s("div",B1,[j1,s("div",{innerHTML:i.skill.mastery_requirements},null,8,N1)])])):c("",!0),n.userDetailsStore.role=="admin"?(l(),d("div",A1,[E1,s("div",H1,[q1,(l(!0),d(L,null,S(n.tagsStore.tagsList,p=>(l(),d("label",W1,[s("span",R1,C(p.name),1),U(s("input",{type:"checkbox",value:p.id,"onUpdate:modelValue":e[1]||(e[1]=x=>i.filters=x),disabled:""},null,8,z1),[[V,i.filters]]),Q1]))),256))])])):c("",!0),n.userDetailsStore.role=="admin"&&i.skill.type!="domain"?(l(),d("div",Y1,[G1,s("div",J1,[K1,s("div",O1,[i.skill.type!="super"?(l(),g(u,{key:0,class:"btn purple-btn mt-3 me-3",to:i.skillId+"/question-bank"},{default:m(()=>[v("Question Bank   "),X1]),_:1},8,["to"])):(l(),d("span",ss,"This assessment will draw questions from its cluster nodes' question banks."))])])])):c("",!0)]),i.skill.type!="domain"?(l(),d("div",ts,[es,s("div",os,[f(r)])])):c("",!0),is])}const ns=w(L1,[["render",ls],["__scopeId","data-v-00612b72"]]);const rs={setup(){const t=F(),e=B();return{skillsStore:t,userDetailsStore:e}},data(){return{skillId:this.$route.params.id,bannerImage:null}},async mounted(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList();for(let t=0;t<this.skillsStore.skillsList.length;t++)this.skillId==this.skillsStore.skillsList[t].id&&(this.bannerImage=this.skillsStore.skillsList[t].banner_image)},components:{ShowSkill:ns}},ds={id:"banner"},cs=["src"],hs={key:0,src:j,class:"img-fluid"},as={class:"container"},us={key:0,id:"btn-row"},_s=s("button",{id:"assessment-btn",class:"top-btn d-none d-md-block"}," Take Assessment ",-1),ps=s("button",{class:"top-btn"},"Schedule Assessment",-1),ms=[_s,ps];function Cs(t,e,o,n,i,a){const u=k("ShowSkill");return l(),d(L,null,[s("div",ds,[s("img",{src:i.bannerImage,class:"img-fluid"},null,8,cs),i.bannerImage?c("",!0):(l(),d("img",hs))]),s("div",as,[n.userDetailsStore.role=="student"?(l(),d("div",us,ms)):c("",!0)]),f(u)],64)}const ys=w(rs,[["render",Cs]]);export{ys as default};
