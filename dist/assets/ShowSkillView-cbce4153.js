import{u as F,a as V}from"./TagsStore-21a3ad2c.js";import{_ as b,i as w,o as n,c as d,d as s,a as f,w as p,l as k,F as C,k as L,t as g,y as x,j as m,b as h,T as I,p as y,f as S,g as A,n as M,h as D,e as B,z as U,m as j}from"./main-e5508237.js";import{u as P}from"./UserSkillsStore-f7414838.js";import{_ as z}from"./recurso-69-12793b41.js";import{_ as H}from"./institute-collins-2-184bdfcb.js";const N={setup(){},data(){return{skillId:this.$route.params.id,posts:[],users:[],votes:[],user:{},showModal:!1,resourceId:null,showFlaggingModal:!1,flagPost:"",showActionBtns:!1,currentClickId:"",showThankModal:!1}},computed:{orderedAndNamedPosts(){for(let e=0;e<this.posts.length;e++)for(let i=0;i<this.users.length;i++)this.posts[e].user_id==this.users[i].id&&(this.posts[e].studentName=this.users[i].first_name+" "+this.users[i].last_name,this.posts[e].userAvatar=this.users[i].avatar);var t=this.posts.sort(({voteCount:e},{voteCount:i})=>i-e);for(let e=0;e<t.length;e++)this.posts[e].index=e;return t}},created(){this.getUserId(),this.getUsers(),this.getPosts(this.skillId)},methods:{getUserId(){fetch("/get-session-details").then(function(t){return t.json()}).then(t=>this.user=t)},getPosts(t){fetch("/skills/"+t+"/resources").then(function(e){return e.json()}).then(e=>this.posts=e).then(()=>{for(let e=0;e<this.posts.length;e++)this.getPostVote(e,this.posts[e].id)})},getPostVote(t,e){fetch("/user-votes/"+e).then(i=>i.json()).then(i=>this.votes=i).then(()=>{this.posts[t].userUpVote=!1,this.posts[t].userDownVote=!1;var i=0;for(let l=0;l<this.votes.length;l++)i=i+this.votes[l].vote,this.votes[l].user_id==this.user.userId&&(this.votes[l].vote==1?(this.posts[t].userUpVote=!0,this.posts[t].userDownVote=!1):this.votes[l].vote==-1?(this.posts[t].userUpVote=!1,this.posts[t].userDownVote=!0):(this.posts[t].userUpVote=!1,this.posts[t].userDownVote=!1));this.posts[t].voteCount=i})},getUsers(){fetch("/users/list").then(function(t){return t.json()}).then(t=>this.users=t)},voteUp(t,e,i){i?fetch("/user-votes/"+this.user.userId+"/"+e+"/edit/cancel",{method:"PUT",headers:{"Content-Type":"content/type"},body:{}}).then(l=>this.getPostVote(t,e)):fetch("/user-votes/"+this.user.userId+"/"+e+"/edit/up",{method:"PUT",headers:{"Content-Type":"content/type"},body:{}}).then(l=>this.getPostVote(t,e))},voteDown(t,e,i){i?fetch("/user-votes/"+this.user.userId+"/"+e+"/edit/cancel",{method:"PUT",headers:{"Content-Type":"content/type"},body:{}}).then(l=>this.getPostVote(t,e)):fetch("/user-votes/"+this.user.userId+"/"+e+"/edit/down",{method:"PUT",headers:{"Content-Type":"content/type"},body:{}}).then(l=>this.getPostVote(t,e))},deletePost(t){this.showModal=!1,fetch("/resources/delete/"+t,{method:"DELETE"});var e;for(let i=0;i<this.posts.length;i++)this.posts[i].id==t&&(e=i);e>-1&&this.posts.splice(e,1)},showWarningModal(t){this.resourceId=t,this.showModal=!0},closeWarningModal(){this.showModal=!1},flagSource(t){const e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content_type:"resource",content_id:t,user_id:this.user.userId})};var i="/content-flags/add";fetch(i,e).then(()=>{this.showThankModal=!0,this.showFlaggingModal=!1})},handleOpenFlagModal(t){this.flagPost=t,this.showFlaggingModal=!0,this.showActionBtns=!1},handleClickActionBtns(t){this.showActionBtns=!this.showActionBtns,this.currentClickId=t}}},a=t=>(y("data-v-5c7ca446"),t=t(),S(),t),Z={class:"container-fluid"},E={class:"d-flex flex-column flex-md-row justify-content-between"},O=a(()=>s("div",{class:"d-flex align-items-md-baseline align-items-start gap-2"},[s("h2",null,"Best Places To Learn This"),s("img",{src:z,class:""})],-1)),q={class:"mx-auto mx-md-0 mt-3 mt-lg-0"},W=a(()=>s("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"white"})],-1)),R={id:"posts-big-container"},Y={class:"row forum-container mt-4"},J={class:"d-flex align-items-center justify-content-between mb-2"},K={class:""},G={class:"col post-user-row"},Q={id:"user-avatar"},X=["src"],ss={class:"user-name-div"},ts={id:"user-name-text"},es={class:"col-12"},os={class:""},is=["innerHTML"],ls={class:"d-flex align-items-center justify-content-end mt-3"},ns={class:"first-post-row"},ds={class:"d-flex flex-row justify-content-end gap-1"},cs=["onClick"],rs=a(()=>s("svg",{width:"34",height:"27",viewBox:"0 0 34 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"vote-icon upvote-icon"},[s("path",{d:"M6.7047 8.4637H2.53277C2.20492 8.45845 1.87926 8.51793 1.57443 8.63872C1.2696 8.75952 0.991586 8.93926 0.756319 9.16765C0.521052 9.39604 0.333148 9.66859 0.203367 9.96971C0.0735865 10.2708 0.00447827 10.5946 0 10.9224L0 23.8771C0.00413046 24.2051 0.0730026 24.529 0.202662 24.8303C0.332321 25.1315 0.520214 25.4042 0.755552 25.6327C0.99089 25.8612 1.26904 26.0409 1.57402 26.1616C1.87901 26.2822 2.20483 26.3415 2.53277 26.3359H6.7285C7.2442 26.3324 7.7378 26.126 8.10246 25.7613C8.46712 25.3967 8.67352 24.9031 8.67699 24.3874V10.4228C8.6763 9.90523 8.47113 9.40893 8.10617 9.04198C7.7412 8.67504 7.24602 8.46719 6.7285 8.4637H6.7047Z",fill:"#73DED0"}),s("path",{d:"M30.9566 7.96678H22.1818L22.6551 2.45972C22.6905 2.05887 22.6162 1.65593 22.4402 1.29406C22.2641 0.932193 21.993 0.625033 21.6557 0.405482C21.1721 0.0908513 20.5948 -0.047297 20.0211 0.0143545C19.4475 0.0760059 18.9127 0.333681 18.5069 0.74389L11.5643 7.97736C10.9772 8.57753 10.6463 9.38239 10.6416 10.222V24.7629C10.6446 24.9661 10.7044 25.1644 10.8142 25.3354C10.9239 25.5064 11.0794 25.6433 11.2629 25.7305C12.4565 26.3203 13.7703 26.6261 15.1017 26.6242H30.3671C30.89 26.6414 31.3994 26.456 31.789 26.1068C32.1787 25.7576 32.4184 25.2714 32.4583 24.7497L33.0479 9.98401C33.0902 8.88154 32.1411 7.96678 30.9566 7.96678Z",fill:"#73DED0"})],-1)),hs=[rs],as=["onClick"],_s=a(()=>s("svg",{width:"34",height:"27",viewBox:"0 0 34 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"vote-icon"},[s("path",{d:"M26.6742 18.1613L30.8461 18.1613C31.174 18.1665 31.4996 18.1071 31.8045 17.9863C32.1093 17.8655 32.3873 17.6857 32.6226 17.4574C32.8579 17.229 33.0458 16.9564 33.1755 16.6553C33.3053 16.3542 33.3744 16.0304 33.3789 15.7026L33.3789 2.74788C33.3748 2.41992 33.3059 2.096 33.1762 1.79473C33.0466 1.49346 32.8587 1.22076 32.6234 0.9923C32.388 0.76384 32.1099 0.584116 31.8049 0.463449C31.4999 0.342781 31.1741 0.283544 30.8461 0.289142L26.6504 0.289142C26.1347 0.292604 25.6411 0.499002 25.2764 0.863666C24.9118 1.22833 24.7054 1.72193 24.7019 2.23763L24.7019 16.2022C24.7026 16.7198 24.9078 17.2161 25.2727 17.583C25.6377 17.95 26.1329 18.1578 26.6504 18.1613L26.6742 18.1613Z",fill:"#FC6E68"}),s("path",{d:"M2.42226 18.6582L11.1971 18.6582L10.7238 24.1653C10.6884 24.5661 10.7627 24.9691 10.9387 25.3309C11.1148 25.6928 11.3859 26 11.7232 26.2195C12.2068 26.5341 12.7842 26.6723 13.3578 26.6106C13.9314 26.549 14.4663 26.2913 14.872 25.8811L21.8146 18.6476C22.4017 18.0475 22.7326 17.2426 22.7373 16.403L22.7373 1.86209C22.7343 1.6589 22.6745 1.4606 22.5648 1.2896C22.455 1.1186 22.2995 0.981731 22.116 0.894453C20.9224 0.304703 19.6086 -0.00113133 18.2772 0.000842658L3.01183 0.000841324C2.48889 -0.0163535 1.9795 0.168989 1.58988 0.518219C1.20026 0.867447 0.960491 1.3536 0.920578 1.8753L0.331006 16.641C0.288705 17.7435 1.23783 18.6582 2.42226 18.6582Z",fill:"#FC6E68"})],-1)),us=[_s],vs={class:"position-relative"},ps=["onClick"],gs=a(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"grey",class:"more-icon"},[s("path",{d:"M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"})],-1)),fs=[gs],ks={key:0,class:"action-btns-div"},ms=a(()=>s("svg",{width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M0.75558 19.3181C0.77635 19.5132 0.87137 19.6928 1.02096 19.8198C1.17055 19.9468 1.36325 20.0114 1.55915 20.0002L5.27701 19.8288L0.398438 15.6145L0.75558 19.3181Z",fill:"#857D99"}),s("path",{d:"M11.8467 2.24484L0.801758 15.0315L5.6802 19.2454L16.7251 6.45877L11.8467 2.24484Z",fill:"#857D99"}),s("path",{d:"M18.2555 3.11796L14.934 0.260817C14.832 0.172259 14.7134 0.104756 14.5852 0.0621907C14.4569 0.0196256 14.3215 0.00283902 14.1868 0.0127967C14.052 0.0227543 13.9205 0.0592596 13.7999 0.120212C13.6793 0.181165 13.572 0.265362 13.484 0.36796L12.4805 1.50725L17.359 5.71439L18.3519 4.56082C18.5289 4.35602 18.6181 4.08969 18.6 3.81958C18.582 3.54948 18.4582 3.29738 18.2555 3.11796Z",fill:"#857D99"})],-1)),ws=["onClick"],Cs=a(()=>s("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M0.312625 14.5205L4.83312 9.99999L0.312625 5.49218C0.111396 5.29025 -0.00159545 5.0168 -0.00159545 4.73172C-0.00159545 4.44665 0.111396 4.17319 0.312625 3.97126L3.96282 0.312625C4.16474 0.111396 4.4382 -0.00159545 4.72327 -0.00159545C5.00835 -0.00159545 5.2818 0.111396 5.48373 0.312625L9.99999 4.83312L14.5205 0.312625C14.6204 0.21056 14.7397 0.12947 14.8714 0.0741101C15.003 0.0187502 15.1444 -0.00976563 15.2873 -0.00976562C15.4301 -0.00976563 15.5715 0.0187502 15.7032 0.0741101C15.8349 0.12947 15.9541 0.21056 16.0541 0.312625L19.6874 3.96282C19.8886 4.16474 20.0016 4.4382 20.0016 4.72327C20.0016 5.00835 19.8886 5.2818 19.6874 5.48373L15.1669 9.99999L19.6874 14.5205C19.8883 14.7217 20.0012 14.9944 20.0012 15.2788C20.0012 15.5632 19.8883 15.836 19.6874 16.0372L16.0541 19.6874C15.8529 19.8883 15.5801 20.0012 15.2957 20.0012C15.0113 20.0012 14.7386 19.8883 14.5374 19.6874L9.99999 15.1669L5.49218 19.6874C5.29025 19.8886 5.0168 20.0016 4.73172 20.0016C4.44665 20.0016 4.17319 19.8886 3.97126 19.6874L0.312625 16.0541C0.21056 15.9541 0.12947 15.8349 0.0741101 15.7032C0.0187502 15.5715 -0.00976563 15.4301 -0.00976562 15.2873C-0.00976563 15.1444 0.0187502 15.003 0.0741101 14.8714C0.12947 14.7397 0.21056 14.6204 0.312625 14.5205Z",fill:"#857D99"})],-1)),bs=[Cs],ys=["onClick"],Ss={class:"d-flex flex-row-reverse"},Ls={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",style:{opacity:"0.5"},height:"20",width:"20"},xs=a(()=>s("path",{fill:"#8f7bd6",d:"M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"},null,-1)),Ms=[xs],Ts={key:0},$s={id:"myModal",class:"modal"},Fs={class:"modal-content"},Vs=a(()=>s("p",null,"Are you sure you want to delete the source?",-1)),Is={style:{display:"flex",gap:"10px"}},As={key:1},Ds={id:"myModal",class:"modal"},Bs={class:"modal-content"},Us=a(()=>s("p",null," Would you like to flag this as unhelpful or incorrect for admin review ",-1)),js={class:"d-flex justify-content-lg-between justify-content-md-end justify-content-between gap-2"},Ps=a(()=>s("span",{class:"d-none d-md-block"}," No ",-1)),zs=a(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"white",class:"d-md-none"},[s("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"})],-1)),Hs=[Ps,zs],Ns=a(()=>s("span",{class:"d-none d-md-block"}," Yes ",-1)),Zs=a(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"white",class:"d-md-none"},[s("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})],-1)),Es=[Ns,Zs],Os={key:2},qs={id:"myModal",class:"modal"},Ws={class:"modal-content"},Rs=a(()=>s("div",{class:"d-flex gap-4 text-center"},[s("p",null," Thank you for flagging this source. We will take a look as soon as possible! ")],-1)),Ys={class:"d-flex justify-content-center"},Js=a(()=>s("div",null,"OK",-1)),Ks=[Js];function Gs(t,e,i,l,o,_){const v=w("router-link");return n(),d("div",Z,[s("div",E,[O,s("div",q,[f(v,{to:"/resources/add/"+o.skillId,class:"btn green-btn",role:"button"},{default:p(()=>[k("Add source   "),W]),_:1},8,["to"])])]),s("div",R,[(n(!0),d(C,null,L(_.orderedAndNamedPosts,c=>(n(),d("div",Y,[s("div",J,[s("div",K,[s("div",G,[s("div",Q,[s("img",{src:c.userAvatar,class:"user-avatar-img",alt:"user avatar"},null,8,X)]),s("div",ss,[s("span",ts,g(c.studentName),1)])])])]),s("div",es,[s("div",os,[s("div",{class:"forum-post",innerHTML:c.content},null,8,is)])]),s("div",ls,[s("div",ns,[s("div",ds,[s("div",{onClick:u=>_.voteUp(c.index,c.id,c.userUpVote),"b-tooltip.hover":"",title:"I Like This "},hs,8,cs),s("span",{"b-on-hover":"",title:"number of vote this resource receive",id:"vote-count",class:x({"text-danger":c.voteCount<0,"text-primary":c.voteCount>0})},g(c.voteCount),3),s("div",{"b-tooltip.hover":"",title:"I Dislike This ",onClick:u=>_.voteDown(c.index,c.id,c.userDownVote)},us,8,as),s("div",vs,[s("div",{class:"toggle-actions-bnt",onClick:u=>_.handleClickActionBtns(c.id),"b-tooltip.hover":"",title:"More Actions For This Source"},fs,8,ps),f(I,{name:"dropdown"},{default:p(()=>[o.showActionBtns&&c.id==o.currentClickId?(n(),d("div",ks,[c.user_id==o.user.userId||o.user.role=="admin"||o.user.role=="editor"?(n(),m(v,{key:0,to:"/resources/edit/"+c.id,class:"btn dropdown-btn",role:"button","b-tooltip.hover":"",title:"Edit This Source"},{default:p(()=>[ms]),_:2},1032,["to"])):h("",!0),c.user_id==o.user.userId||o.user.role=="admin"?(n(),d("button",{key:1,"b-tooltip.hover":"",title:"Delete This Source",type:"button",class:"btn dropdown-btn",onClick:u=>_.showWarningModal(c.id)},bs,8,ws)):h("",!0),s("button",{"b-tooltip.hover":"",title:"Flag This Source For Review",type:"button",class:"btn dropdown-btn",onClick:u=>_.handleOpenFlagModal(c.id)},[s("div",Ss,[(n(),d("svg",Ls,Ms))])],8,ys)])):h("",!0)]),_:2},1024)])])])])]))),256))]),o.showModal?(n(),d("div",Ts,[s("div",$s,[s("div",Fs,[Vs,s("div",Is,[s("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=c=>_.deletePost(this.resourceId))}," Yes "),s("button",{type:"button",class:"btn btn-dark",onClick:e[1]||(e[1]=c=>o.showModal=!1)}," No ")])])])])):h("",!0),o.showFlaggingModal?(n(),d("div",As,[s("div",Ds,[s("div",Bs,[Us,s("div",js,[s("button",{type:"button",class:"btn red-btn w-lg-25",onClick:e[2]||(e[2]=c=>o.showFlaggingModal=!1)},Hs),s("button",{type:"button",class:"btn green-btn w-lg-25",onClick:e[3]||(e[3]=c=>_.flagSource(o.flagPost))},Es)])])])])):h("",!0),o.showThankModal?(n(),d("div",Os,[s("div",qs,[s("div",Ws,[Rs,s("div",Ys,[s("button",{type:"button",class:"btn green-btn w-25",onClick:e[4]||(e[4]=c=>o.showThankModal=!1)},Ks)])])])])):h("",!0)])}const Qs=b(N,[["render",Gs],["__scopeId","data-v-5c7ca446"]]);const Xs={setup(){const t=F(),e=V(),i=A(),l=M(),o=D(),_=P();return t.tagsList.length==0&&t.getTagsList(),{tagsStore:t,skillTagsStore:e,userDetailsStore:i,skillsStore:l,skillTreeStore:o,userSkillsStore:_}},data(){return{skillId:this.$route.params.id,skill:{},userSkills:[],isMastered:!1,isUnlocked:!1,filters:[],showModal:!1,showThankModal:!1,ancestor:this.$route.params.id,accessibleSkills:[],showAncestorLink:!1}},components:{Forum:Qs},async created(){await this.getSkill(),await this.getUserSkills(),this.isUnlocked||this.nearestAccessibleAncestor(this.skill)},methods:{async getSkill(){const t=await fetch("/skills/show/"+this.skillId);this.skill=await t.json(),this.getSkillFilters();const e=document.getElementsByTagName("svg");e.length>0&&(e[0].style.height="50px")},async getSkillFilters(){this.skillTagsStore.skillTagsList.length==0&&await this.skillTagsStore.getSkillTagsList();for(let t=0;t<this.skillTagsStore.skillTagsList.length;t++)this.skillTagsStore.skillTagsList[t].skill_id==this.skillId&&this.filters.push(this.skillTagsStore.skillTagsList[t].tag_id)},async getUserSkills(){const e=await(await fetch("/user-skills/filtered-unnested-list/"+this.userDetailsStore.userId)).json();this.userSkills=e;for(let i=0;i<this.userSkills.length;i++)this.userSkills[i].id==this.skillId&&(this.userSkills[i].is_mastered==1&&(this.isMastered=!0),this.userSkills[i].is_accessible==1&&(this.isUnlocked=!0)),this.userSkills[i].is_accessible==1&&this.userSkills[i].type!="domain"&&this.accessibleSkills.push(this.userSkills[i])},async MakeMastered(){await this.userSkillsStore.MakeMastered(this.userDetailsStore.userId,this.skillId),this.getUserSkills()},flagSkill(){const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content_type:"skill",content_id:this.skill.id,user_id:this.userDetailsStore.userId})};var e="/content-flags/add";fetch(e,t).then(()=>{this.showModal=!1,this.showThankModal=!0})},nearestAccessibleAncestor(t){if(this.accessibleSkills.find(l=>l==t.id)){this.ancestor=t.id,this.showAncestorLink=!0;return}let i=[];if(t.type=="super")for(let l=0;l<this.accessibleSkills.length;l++)this.accessibleSkills[l].type=="sub"&&this.accessibleSkills[l].parent==t.id&&i.push(this.accessibleSkills[l]);if(i.length>0){this.ancestor=i[0].id,this.showAncestorLink=!0;return}fetch("/skills/show/"+t.parent).then(function(l){return l.json()}).then(l=>this.nearestAccessibleAncestor(l))}},watch:{async $route(t,e){this.skillId=t.params.id,await this.getSkill(),await this.getUserSkills()}}},r=t=>(y("data-v-28ef206d"),t=t(),S(),t),st={class:"container mt-3"},tt={key:0,class:"row mt-3"},et={class:"d-flex flex-row-reverse align-items-end mb-2 mb-md-0"},ot={key:1,class:"d-flex flex-row-reverse center-header pt-2"},it=r(()=>s("span",null,"Edit",-1)),lt=r(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"20",fill:"white",class:"mb-1 ms-1 btn-icon"},[s("path",{d:"M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"})],-1)),nt={class:"d-flex flex-column gap-2"},dt={id:"skill-image"},ct=["src"],rt={class:"d-flex flex-column"},ht={class:"skill-name"},at={key:0,class:"row pe-4 ps-4 ps-md-0 skill-description"},_t={key:2},ut=r(()=>s("div",{class:"row"},[s("div",{class:"col col-md-8 p-4 p-md-0"},[s("hr",{id:"hr-parent",class:"border border-2 opacity-100"})])],-1)),vt={class:"mt-3 d-flex flex-column"},pt=r(()=>s("div",{class:"h1-tile"},"Level",-1)),gt={key:0},ft={key:1},kt={key:2},mt={key:3},wt={key:4},Ct={class:"mt-3 d-flex flex-column"},bt=r(()=>s("div",{class:"h1-tile"},"Mastery Requirements",-1)),yt={class:"mastery-requirements"},St=["innerHTML"],Lt={class:"row mt-3 me-1"},xt={class:"d-flex flex-row-reverse"},Mt=r(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",class:"flag-icon"},[s("path",{fill:"#8f7bd6",d:"M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"})],-1)),Tt=[Mt],$t={key:3},Ft=r(()=>s("div",{class:"row"},[s("div",{class:"col col-md-8 p-4 p-md-0"},[s("hr",{id:"hr-parent",class:"border border-2 opacity-100"})])],-1)),Vt={class:"row mt-3"},It=r(()=>s("div",{class:"h1-tile"},"Filter",-1)),At={class:"control control-checkbox"},Dt={class:"my-auto mx-2 me-4"},Bt=["value"],Ut=r(()=>s("div",{class:"control_indicator"},null,-1)),jt={key:4},Pt=r(()=>s("div",{class:"row"},[s("div",{class:"col col-md-8 p-4 p-md-0"},[s("hr",{id:"hr-parent",class:"border border-2 opacity-100"})])],-1)),zt={class:"row mt-3"},Ht=r(()=>s("div",{class:"h1-tile"},"Assessment",-1)),Nt={class:"col ms-1"},Zt=r(()=>s("svg",{width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M0.75558 19.3181C0.77635 19.5132 0.87137 19.6928 1.02096 19.8198C1.17055 19.9468 1.36325 20.0114 1.55915 20.0002L5.27701 19.8288L0.398438 15.6145L0.75558 19.3181Z",fill:"#FFFFFF"}),s("path",{d:"M11.8467 2.24484L0.801758 15.0315L5.6802 19.2454L16.7251 6.45877L11.8467 2.24484Z",fill:"#FFFFFF"}),s("path",{d:"M18.2555 3.11796L14.934 0.260817C14.832 0.172259 14.7134 0.104756 14.5852 0.0621907C14.4569 0.0196256 14.3215 0.00283902 14.1868 0.0127967C14.052 0.0227543 13.9205 0.0592596 13.7999 0.120212C13.6793 0.181165 13.572 0.265362 13.484 0.36796L12.4805 1.50725L17.359 5.71439L18.3519 4.56082C18.5289 4.35602 18.6181 4.08969 18.6 3.81958C18.582 3.54948 18.4582 3.29738 18.2555 3.11796Z",fill:"#FFFFFF"})],-1)),Et={key:1},Ot={key:0},qt=r(()=>s("div",{id:"resource-hr"},[s("hr",{class:"border border-1 opacity-100"})],-1)),Wt={class:"row mt-3 mb-3"},Rt=r(()=>s("p",null," ",-1)),Yt={key:0},Jt={id:"myModal",class:"modal"},Kt={class:"modal-content"},Gt=r(()=>s("div",{class:"d-flex gap-4"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"grey",width:"45",height:"45"},[s("path",{d:"M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"})]),s("p",null," Would you like to flag this as unhelpful or incorrect for admin review? ")],-1)),Qt={class:"d-flex justify-content-lg-between justify-content-md-end justify-content-between gap-2"},Xt=r(()=>s("span",{class:"d-none d-md-block"}," No ",-1)),se=r(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"white",class:"d-md-none"},[s("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"})],-1)),te=[Xt,se],ee=r(()=>s("span",{class:"d-none d-md-block"}," Yes ",-1)),oe=r(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"white",class:"d-md-none"},[s("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})],-1)),ie=[ee,oe],le={key:1},ne={id:"myModal",class:"modal"},de={class:"modal-content"},ce=r(()=>s("div",{class:"d-flex gap-4 text-center"},[s("p",null," Thank you for flagging this skill. We will take a look as soon as possible !! ")],-1)),re={class:"d-flex justify-content-center"},he=r(()=>s("span",null," OK ",-1)),ae=[he];function _e(t,e,i,l,o,_){const v=w("router-link"),c=w("Forum");return n(),d(C,null,[s("div",st,[s("div",{id:"skill-info-container",class:x({domain:o.skill.type=="domain"})},[l.userDetailsStore.role=="student"?(n(),d("div",tt,[s("div",et,[!o.isUnlocked&&!o.isMastered&&o.showAncestorLink?(n(),m(v,{key:0,to:"/skills/"+o.ancestor,class:"btn purple-btn text-capitalize"},{default:p(()=>[k(" go to nearest unlockable skill ")]),_:1},8,["to"])):h("",!0),o.isUnlocked&&!o.isMastered?(n(),m(v,{key:1,class:"btn purple-btn",to:o.skillId+"/assessment"},{default:p(()=>[k("Take Assessment")]),_:1},8,["to"])):h("",!0)])])):h("",!0),l.userDetailsStore.role=="admin"||l.userDetailsStore.role=="editor"?(n(),d("div",ot,[f(v,{to:"/skills/edit/"+o.skillId,class:"btn green-btn"},{default:p(()=>[it,lt]),_:1},8,["to"])])):h("",!0),s("div",nt,[s("div",dt,[s("img",{src:o.skill.icon_image?o.skill.icon_image:"/images/skill-avatar/recurso.png",class:"skill-icon"},null,8,ct)]),s("div",rt,[s("div",ht,g(o.skill.name),1),l.userDetailsStore.role=="admin"?(n(),d("div",at,[s("p",null,g(o.skill.description),1)])):h("",!0)])]),o.skill.type!="domain"?(n(),d("div",_t,[ut,s("div",vt,[pt,o.skill.level=="grade_school"?(n(),d("span",gt,"Grade School")):o.skill.level=="middle_school"?(n(),d("span",ft,"Middle School")):o.skill.level=="high_school"?(n(),d("span",kt,"High School")):o.skill.level=="college"?(n(),d("span",mt,"College")):o.skill.level=="phd"?(n(),d("span",wt,"PHD")):h("",!0)]),s("div",Ct,[bt,s("div",yt,[s("div",{innerHTML:o.skill.mastery_requirements},null,8,St)])]),s("div",Lt,[s("div",xt,[s("div",{onClick:e[0]||(e[0]=u=>o.showModal=!0),type:"button",class:"me-1","b-tooltip.hover":"",title:"Report this skill to the admin if it has errors"},Tt)])])])):h("",!0),l.userDetailsStore.role=="admin"?(n(),d("div",$t,[Ft,s("div",Vt,[It,(n(!0),d(C,null,L(l.tagsStore.tagsList,u=>(n(),d("label",At,[s("span",Dt,g(u.name),1),B(s("input",{type:"checkbox",value:u.id,"onUpdate:modelValue":e[1]||(e[1]=$=>o.filters=$),disabled:""},null,8,Bt),[[U,o.filters]]),Ut]))),256))])])):h("",!0),l.userDetailsStore.role=="admin"&&o.skill.type!="domain"?(n(),d("div",jt,[Pt,s("div",zt,[Ht,s("div",Nt,[o.skill.type!="super"?(n(),m(v,{key:0,class:"btn purple-btn mt-3 me-3",to:o.skillId+"/question-bank"},{default:p(()=>[k("Question Bank   "),Zt]),_:1},8,["to"])):(n(),d("span",Et,"This assessment will draw questions from its cluster nodes' question banks."))])])])):h("",!0)],2),o.skill.type!="domain"?(n(),d("div",Ot,[qt,s("div",Wt,[f(c)])])):h("",!0),Rt]),o.showModal?(n(),d("div",Yt,[s("div",Jt,[s("div",Kt,[Gt,s("div",Qt,[s("button",{type:"button",class:"btn red-btn modal-btn",onClick:e[2]||(e[2]=u=>o.showModal=!1)},te),s("button",{type:"button",class:"btn green-btn modal-btn",onClick:e[3]||(e[3]=(...u)=>_.flagSkill&&_.flagSkill(...u))},ie)])])])])):h("",!0),o.showThankModal?(n(),d("div",le,[s("div",ne,[s("div",de,[ce,s("div",re,[s("button",{type:"button",class:"btn green-btn w-25",onClick:e[4]||(e[4]=u=>o.showThankModal=!1)},ae)])])])])):h("",!0)],64)}const ue=b(Xs,[["render",_e],["__scopeId","data-v-28ef206d"]]);const ve={setup(){const t=M(),e=j();return{skillsStore:t,userDetailsStore:e}},data(){return{skillId:this.$route.params.id,bannerImage:null}},async mounted(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList();for(let t=0;t<this.skillsStore.skillsList.length;t++)this.skillId==this.skillsStore.skillsList[t].id&&(this.bannerImage=this.skillsStore.skillsList[t].banner_image)},components:{ShowSkill:ue}},T=t=>(y("data-v-e9db0a02"),t=t(),S(),t),pe={class:"position-relative d-flex"},ge={class:"container show-skill-ctnr"},fe={key:0,id:"btn-row"},ke=T(()=>s("button",{id:"assessment-btn",class:"top-btn d-none d-md-block"}," Take Assessment ",-1)),me=T(()=>s("button",{class:"top-btn"},"Schedule Assessment",-1)),we=[ke,me],Ce={id:"banner"},be=["src"],ye={key:0,src:H,class:"img-fluid"};function Se(t,e,i,l,o,_){const v=w("ShowSkill");return n(),d("div",pe,[s("div",ge,[l.userDetailsStore.role=="student"?(n(),d("div",fe,we)):h("",!0),f(v)]),s("div",Ce,[s("img",{src:o.bannerImage,class:"img-fluid"},null,8,be),o.bannerImage?h("",!0):(n(),d("img",ye))])])}const Fe=b(ve,[["render",Se],["__scopeId","data-v-e9db0a02"]]);export{Fe as default};
