import{_ as v,i as q,z as B,s as N,r as _,o as r,c as a,a as e,d as S,g as C,n as y,w as m,l as p,p as L,e as D,t as b,F as k,m as $,B as F,f as x,b as g}from"./main-7bdecc33.js";import{u as O}from"./SettingsStore-839ec3a2.js";import{u as I}from"./TagsStore-75eabbd4.js";import{_ as P}from"./general-banner-1c13aca4.js";const M={setup(){const s=q();s.getUserDetails();const t=B();return{userDetailsStore:s,sessionDetailsStore:t}},data(){return{}},computed:{name(){return this.userDetailsStore.firstName+" "+this.userDetailsStore.lastName}},methods:{LogOut(){this.sessionDetailsStore.isLoggedIn=!1;const s={method:"POST",headers:{"Content-Type":"application/json"}};var t="/logout";fetch(t,s).then(function(u){N.push({name:"login"})})}}},h=s=>(L("data-v-13b1b833"),s=s(),D(),s),V={class:"container pb-4"},U=h(()=>e("h1",{id:"page-tile",class:"my-3 ms-0 ms-md-3 ms-lg-0 mt-2 mt-md-4"}," My Profile ",-1)),E={class:"row mt-0 mt-md-4"},Q={class:"col-12 col-lg-5"},z={class:"row mx-0 px-md-0"},j={class:"d-flex align-items-center align-items-md-start ps-lg-0"},G=["src"],W=["src"],Z={class:"row my-3 mx-0"},J={class:"col-12 col-5 d-flex gap-3 flex-row justify-content-center justify-content-md-start ps-lg-0"},H=h(()=>e("svg",{width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M0.75558 19.3181C0.77635 19.5132 0.87137 19.6928 1.02096 19.8198C1.17055 19.9468 1.36325 20.0114 1.55915 20.0002L5.27701 19.8288L0.398438 15.6145L0.75558 19.3181Z",fill:"white"}),e("path",{d:"M11.8467 2.24484L0.801758 15.0315L5.6802 19.2454L16.7251 6.45877L11.8467 2.24484Z",fill:"white"}),e("path",{d:"M18.2555 3.11796L14.934 0.260817C14.832 0.172259 14.7134 0.104756 14.5852 0.0621907C14.4569 0.0196256 14.3215 0.00283902 14.1868 0.0127967C14.052 0.0227543 13.9205 0.0592596 13.7999 0.120212C13.6793 0.181165 13.572 0.265362 13.484 0.36796L12.4805 1.50725L17.359 5.71439L18.3519 4.56082C18.5289 4.35602 18.6181 4.08969 18.6 3.81958C18.582 3.54948 18.4582 3.29738 18.2555 3.11796Z",fill:"white"})],-1)),K={class:""},X=h(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"22",height:"22",fill:"white"},[e("path",{d:"M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"})],-1)),Y={key:1,href:"/login",class:"btn purple-btn",role:"button"},ee={class:"col-12 px-4 px-md-0 col-lg-4 px-0 px-md-4 px-lg-0"},te={class:"mb-3"},se=h(()=>e("label",{for:"name",class:"form-label"},"Name",-1)),oe={class:"mb-3"},ne=h(()=>e("label",{class:"form-label"},"Username",-1)),le={class:"mb-3"},ie=h(()=>e("label",{class:"form-label"},"Email",-1)),re={key:0,class:"mb-3"},ae=h(()=>e("label",{class:"form-label"},"Role",-1)),ce={key:1,class:"mb-3"},de=h(()=>e("label",{class:"form-label"},"Instructor",-1)),ue=["value"];function me(s,t,u,l,n,o){const i=_("router-link");return r(),a("div",V,[U,e("div",E,[e("div",Q,[e("div",z,[e("div",j,[e("img",{id:"img-background",src:l.userDetailsStore.avatar,height:"270",style:{"background-color":"lightgrey"},class:"d-none d-lg-block"},null,8,G),e("img",{id:"img-background",src:l.userDetailsStore.avatar,height:"120",style:{"background-color":"lightgrey"},class:"d-lg-none"},null,8,W)])]),e("div",Z,[e("div",J,[S(i,{class:"purple-btn btn",to:"/profile/edit",role:"button"},{default:C(()=>[y("Edit Profile   "),H]),_:1}),e("div",K,[l.sessionDetailsStore.isLoggedIn==!0?(r(),a("a",{key:0,onClick:t[0]||(t[0]=d=>o.LogOut()),class:"btn red-btn",role:"button"},[y(" Log out   "),X])):(r(),a("a",Y,"Log in"))])])])]),e("div",ee,[e("div",te,[se,m(e("input",{id:"name","onUpdate:modelValue":t[1]||(t[1]=d=>o.name=d),type:"text",class:"form-control",readonly:""},null,512),[[p,o.name]])]),e("div",oe,[ne,m(e("input",{"onUpdate:modelValue":t[2]||(t[2]=d=>l.userDetailsStore.userName=d),type:"text",class:"form-control",readonly:""},null,512),[[p,l.userDetailsStore.userName]])]),e("div",le,[ie,m(e("input",{"onUpdate:modelValue":t[3]||(t[3]=d=>l.userDetailsStore.email=d),type:"email",class:"form-control",readonly:""},null,512),[[p,l.userDetailsStore.email]])]),l.userDetailsStore.role!="student"?(r(),a("div",re,[ae,m(e("input",{"onUpdate:modelValue":t[4]||(t[4]=d=>l.userDetailsStore.role=d),type:"text",class:"form-control",readonly:""},null,512),[[p,l.userDetailsStore.role]])])):(r(),a("div",ce,[de,e("input",{type:"text",class:"form-control",readonly:"",value:`${l.userDetailsStore.instructor.username||""}`},null,8,ue)]))])])])}const he=v(M,[["render",me],["__scopeId","data-v-13b1b833"]]);const _e={setup(){const s=O();s.getSettings();const t=I();return t.tagsList.length==0&&t.getTagsList(),{settingsStore:s,tagsStore:t}},data(){return{filters:[]}},async created(){this.tagsStore.tagsList.length==0&&await this.tagsStore.getTagsList();for(let s=0;s<this.tagsStore.tagsList.length;s++)this.tagsStore.tagsList[s].is_active=="active"&&this.filters.push(this.tagsStore.tagsList[s].id)}},f=s=>(L("data-v-d61ba830"),s=s(),D(),s),pe={class:"container mt-3 pb-3 px-3 px-lg-0"},fe=f(()=>e("hr",null,null,-1)),ge=f(()=>e("h1",null,"Settings",-1)),be={class:"mt-4"},Se=f(()=>e("svg",{width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M0.75558 19.3181C0.77635 19.5132 0.87137 19.6928 1.02096 19.8198C1.17055 19.9468 1.36325 20.0114 1.55915 20.0002L5.27701 19.8288L0.398438 15.6145L0.75558 19.3181Z",fill:"white"}),e("path",{d:"M11.8467 2.24484L0.801758 15.0315L5.6802 19.2454L16.7251 6.45877L11.8467 2.24484Z",fill:"white"}),e("path",{d:"M18.2555 3.11796L14.934 0.260817C14.832 0.172259 14.7134 0.104756 14.5852 0.0621907C14.4569 0.0196256 14.3215 0.00283902 14.1868 0.0127967C14.052 0.0227543 13.9205 0.0592596 13.7999 0.120212C13.6793 0.181165 13.572 0.265362 13.484 0.36796L12.4805 1.50725L17.359 5.71439L18.3519 4.56082C18.5289 4.35602 18.6181 4.08969 18.6 3.81958C18.582 3.54948 18.4582 3.29738 18.2555 3.11796Z",fill:"white"})],-1)),ye={class:"mt-5"},ve=f(()=>e("hr",null,null,-1)),Ce=f(()=>e("h1",null,"Skill Filters",-1)),ke={class:"col"},Le={class:"control control-checkbox"},De={class:"my-auto mx-2 me-4"},we=["value"],xe=f(()=>e("div",{class:"control_indicator"},null,-1)),$e={class:"mt-4"};function Re(s,t,u,l,n,o){const i=_("router-link");return r(),a("div",pe,[e("section",null,[fe,ge,e("p",null," time for student skills to degrade (in days): "+b(l.settingsStore.skillDegradationDays),1),e("p",null," max number of questions per quiz: "+b(l.settingsStore.quizMaxQuestions),1),e("p",be,[S(i,{to:"/settings/edit",class:"btn green-btn",role:"button"},{default:C(()=>[y(" Edit  "),Se]),_:1})])]),e("section",ye,[ve,Ce,e("div",ke,[(r(!0),a(k,null,$(l.tagsStore.tagsList,d=>(r(),a("label",Le,[e("span",De,b(d.name),1),m(e("input",{type:"checkbox",value:d.id,"onUpdate:modelValue":t[0]||(t[0]=w=>n.filters=w),disabled:""},null,8,we),[[F,n.filters]]),xe]))),256))]),e("p",$e,[S(i,{to:"/tags/select",class:"btn green-btn",role:"button"},{default:C(()=>[y(" Select Filters ")]),_:1})])])])}const qe=v(_e,[["render",Re],["__scopeId","data-v-d61ba830"]]);const Te={data(){return{questionCSVFile:"",filesArray:[],questionsArray:[],counter1:0,counter2:0,incorrectlyFormattedQuestions:!1}},methods:{OnFileChange(s){var t=s.target.files||s.dataTransfer.files;if(t.length)for(let u=0;u<t.length;u++)this.ReadFile(t[u])},ReadFile(s){var t=new FileReader;t.onload=u=>{var l=u.target.result,n=l.split(/\r?\n|\r|\n/g);for(let o=n.length-1;o>=0;o--)(n[o]==""||n[o]==" ")&&n.splice(o,1);for(let o=n.length-1;o>=0;o--)n[o].split("|").length!=9&&(this.incorrectlyFormattedQuestions=!0,n.splice(o,1));for(let o=n.length-1;o>=0;o--)(isNaN(n[o].split("|")[0])||isNaN(parseFloat(n[o].split("|")[0])))&&(this.incorrectlyFormattedQuestions=!0,n.splice(o,1));for(let o=0;o<n.length;o++)this.questionsArray.push(n[o].split("|"))},t.readAsText(s)},Submit(){if(this.incorrectlyFormattedQuestions&&!confirm("Incorrectly formatted question were found. Only "+this.questionsArray.length+" questions will be uploaded. Continue?"))return;const s=[];for(let l=0;l<this.questionsArray.length;l++){const n={};n.skillId=this.questionsArray[l][0],n.name=this.questionsArray[l][1],n.question=this.questionsArray[l][2],n.correct_answer=this.questionsArray[l][3],n.incorrect_answer_1=this.questionsArray[l][4],n.incorrect_answer_2=this.questionsArray[l][5],n.incorrect_answer_3=this.questionsArray[l][6],n.incorrect_answer_4=this.questionsArray[l][7],n.explanation=this.questionsArray[l][8],s.push(n)}const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questionArray:s})};var u="/questions/mc-questions/bulk-add";fetch(u,t).then(()=>{alert("Questions uploaded."),this.questionCSVFile="",this.filesArray=[],this.questionsArray=[]})}}},R=s=>(L("data-v-cdf3ed81"),s=s(),D(),s),Ae={class:"container mt-3 pb-5 px-3 px-lg-0"},Be=R(()=>e("hr",null,null,-1)),Ne=R(()=>e("h1",null,"Add MC Questions in Bulk",-1)),Fe={class:"row"},Oe={class:"col-sm-4"},Ie={key:0},Pe=R(()=>e("p",{style:{"font-size":"14px"}},[e("em",null,"Maximum file size 15mb")],-1)),Me={key:1};function Ve(s,t,u,l,n,o){return r(),a("div",Ae,[Be,Ne,e("div",Fe,[e("div",Oe,[n.questionCSVFile?(r(),a("div",Me,[e("p",null,[e("button",{class:"btn btn-warning",onClick:t[1]||(t[1]=(...i)=>s.removeImage&&s.removeImage(...i))}," Remove file ")])])):(r(),a("div",Ie,[e("input",{class:"form-control",type:"file",accept:".csv,.txt",onChange:t[0]||(t[0]=(...i)=>o.OnFileChange&&o.OnFileChange(...i)),multiple:""},null,32),Pe])),e("button",{class:"btn green-btn",onClick:t[2]||(t[2]=i=>o.Submit())},"Submit")])])])}const Ue=v(Te,[["render",Ve],["__scopeId","data-v-cdf3ed81"]]);const Ee={data(){return{numOfSourcesPerSkill:3,blockedRootDomain:null,blockedRootDomains:[],whiteListedRootDomain:null,whiteListedRootDomains:[]}},created(){this.ListBlockedRootDomains(),this.ListWhiteListedRootDomains()},methods:{async GenerateSources(){alert("Sources will now be generated for all skills. This will take some time.");var s="/resources/generate-sources";await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({numSources:this.numOfSourcesPerSkill})})},DeleteSourcesByRootDomain(){if(confirm("Are you sure?")==!0){var t="/resources/delete-domain";fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({blockedRootDomain:this.blockedRootDomain})})}},async ListBlockedRootDomains(){const t=await(await fetch("/resources/list-blocked-domains")).json();this.blockedRootDomains=t},async UnBlockRootDomain(s){const t=await fetch("/resources/unblock-domain/"+s,{method:"DELETE"});t.error&&console.log(t.error),this.ListBlockedRootDomains()},AddRootDomainToWhiteList(){var s="/resources/add-domain-to-whitelist";fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({whiteListedRootDomain:this.whiteListedRootDomain})}).then(()=>{this.ListWhiteListedRootDomains()})},async ListWhiteListedRootDomains(){const t=await(await fetch("/resources/list-whitelisted-domains")).json();this.whiteListedRootDomains=t},async RemoveFromWhiteList(s){const t=await fetch("/resources/remove-domain-from-whitelist/"+s,{method:"DELETE"});t.error&&console.log(t.error),this.ListWhiteListedRootDomains()},DeleteDuplicateSources(){const s=fetch("/resources/delete-duplicate-sources",{method:"DELETE"});s.error&&console.log(s.error)},DeleteBrokenSources(){const s=fetch("/resources/delete-broken-sources",{method:"DELETE"});s.error&&console.log(s.error)}}},c=s=>(L("data-v-4cf0cb99"),s=s(),D(),s),Qe={class:"container mt-3 pb-5 px-3 px-lg-0"},ze=c(()=>e("hr",null,null,-1)),je=c(()=>e("h1",null,"Auto Generate Sources",-1)),Ge={class:"row"},We={class:"col"},Ze=c(()=>e("label",{for:"numSourcesPerSkill",class:"form-label"},"Number of sources per skill to generate (max 10):",-1)),Je=c(()=>e("p",{style:{"font-size":"14px"},class:"mt-2"},[e("strong",null,"Notes:"),e("ul",null,[e("li",null,[e("em",null,"To be done by devs and not admins.")]),e("li",null,[e("em",null,"It can cost a lot each time.")]),e("li",null,[e("em",null,"It runs for all ~3700 relevant skills.")]),e("li",null,[e("em",null,"It crashes frequently.")])])],-1)),He=c(()=>e("h2",{class:"mt-3"},"Blacklist Domain",-1)),Ke={class:"mb-4"},Xe=c(()=>e("p",{style:{"font-size":"14px"}},[e("em",null,"This will also delete sources using these domains.")],-1)),Ye=c(()=>e("h3",null,"Blacklisted Domains:",-1)),et={class:"mb-5"},tt={class:"d-flex"},st=["onClick"],ot=c(()=>e("svg",{width:"13",height:"13",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M0.312625 14.5205L4.83312 9.99999L0.312625 5.49218C0.111396 5.29025 -0.00159545 5.0168 -0.00159545 4.73172C-0.00159545 4.44665 0.111396 4.17319 0.312625 3.97126L3.96282 0.312625C4.16474 0.111396 4.4382 -0.00159545 4.72327 -0.00159545C5.00835 -0.00159545 5.2818 0.111396 5.48373 0.312625L9.99999 4.83312L14.5205 0.312625C14.6204 0.21056 14.7397 0.12947 14.8714 0.0741101C15.003 0.0187502 15.1444 -0.00976563 15.2873 -0.00976562C15.4301 -0.00976563 15.5715 0.0187502 15.7032 0.0741101C15.8349 0.12947 15.9541 0.21056 16.0541 0.312625L19.6874 3.96282C19.8886 4.16474 20.0016 4.4382 20.0016 4.72327C20.0016 5.00835 19.8886 5.2818 19.6874 5.48373L15.1669 9.99999L19.6874 14.5205C19.8883 14.7217 20.0012 14.9944 20.0012 15.2788C20.0012 15.5632 19.8883 15.836 19.6874 16.0372L16.0541 19.6874C15.8529 19.8883 15.5801 20.0012 15.2957 20.0012C15.0113 20.0012 14.7386 19.8883 14.5374 19.6874L9.99999 15.1669L5.49218 19.6874C5.29025 19.8886 5.0168 20.0016 4.73172 20.0016C4.44665 20.0016 4.17319 19.8886 3.97126 19.6874L0.312625 16.0541C0.21056 15.9541 0.12947 15.8349 0.0741101 15.7032C0.0187502 15.5715 -0.00976563 15.4301 -0.00976562 15.2873C-0.00976563 15.1444 0.0187502 15.003 0.0741101 14.8714C0.12947 14.7397 0.21056 14.6204 0.312625 14.5205Z",fill:"white"})],-1)),nt=[ot],lt=c(()=>e("h2",null,"Whitelist Domain:",-1)),it={class:"mb-3"},rt=c(()=>e("p",{style:{"font-size":"14px"}},[e("em",null,"The AI will preference these domains.")],-1)),at=c(()=>e("h3",{class:"mt-4"},"Whitelisted Domains:",-1)),ct={class:"d-flex"},dt=["onClick"],ut=c(()=>e("svg",{width:"13",height:"13",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M0.312625 14.5205L4.83312 9.99999L0.312625 5.49218C0.111396 5.29025 -0.00159545 5.0168 -0.00159545 4.73172C-0.00159545 4.44665 0.111396 4.17319 0.312625 3.97126L3.96282 0.312625C4.16474 0.111396 4.4382 -0.00159545 4.72327 -0.00159545C5.00835 -0.00159545 5.2818 0.111396 5.48373 0.312625L9.99999 4.83312L14.5205 0.312625C14.6204 0.21056 14.7397 0.12947 14.8714 0.0741101C15.003 0.0187502 15.1444 -0.00976563 15.2873 -0.00976562C15.4301 -0.00976563 15.5715 0.0187502 15.7032 0.0741101C15.8349 0.12947 15.9541 0.21056 16.0541 0.312625L19.6874 3.96282C19.8886 4.16474 20.0016 4.4382 20.0016 4.72327C20.0016 5.00835 19.8886 5.2818 19.6874 5.48373L15.1669 9.99999L19.6874 14.5205C19.8883 14.7217 20.0012 14.9944 20.0012 15.2788C20.0012 15.5632 19.8883 15.836 19.6874 16.0372L16.0541 19.6874C15.8529 19.8883 15.5801 20.0012 15.2957 20.0012C15.0113 20.0012 14.7386 19.8883 14.5374 19.6874L9.99999 15.1669L5.49218 19.6874C5.29025 19.8886 5.0168 20.0016 4.73172 20.0016C4.44665 20.0016 4.17319 19.8886 3.97126 19.6874L0.312625 16.0541C0.21056 15.9541 0.12947 15.8349 0.0741101 15.7032C0.0187502 15.5715 -0.00976563 15.4301 -0.00976562 15.2873C-0.00976563 15.1444 0.0187502 15.003 0.0741101 14.8714C0.12947 14.7397 0.21056 14.6204 0.312625 14.5205Z",fill:"white"})],-1)),mt=[ut],ht=c(()=>e("h2",{class:"mt-5"},"Delete Duplicate Sources",-1)),_t=c(()=>e("p",{style:{"font-size":"14px"}},[e("ul",null,[e("li",null,[e("em",null,"To be done by devs and not admins.")]),e("li",null,[e("em",null,"To search for and delete duplicate urls for the same skill.")])])],-1)),pt=c(()=>e("h2",{class:"mt-5"},"Scan For and Delete Sources with Broken Links",-1)),ft=c(()=>e("div",{style:{"font-size":"14px"},class:"mt-2"},[e("strong",null,"Notes:"),e("ul",null,[e("li",null,[e("em",null,"To be done by devs and not admins.")]),e("li",null,[e("em",null,"To search for sources containing broken urls.")]),e("li",null,[e("em",null,"Need to be deleted manually.")]),e("li",null,[e("em",null,"Need to check them manually first.")])])],-1));function gt(s,t,u,l,n,o){return r(),a("div",Qe,[ze,je,e("div",Ge,[e("div",We,[Ze,m(e("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>n.numOfSourcesPerSkill=i),type:"number",id:"numSourcesPerSkill",min:"1",max:"10",step:"1",class:"form-control","aria-describedby":"numSourcesPerSkill",onkeypress:"return event.charCode >= 48 && event.charCode <= 57"},null,512),[[p,n.numOfSourcesPerSkill]]),e("button",{class:"btn green-btn mt-3",onClick:t[1]||(t[1]=(...i)=>o.GenerateSources&&o.GenerateSources(...i))}," Generate Sources "),Je])]),He,e("div",Ke,[m(e("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=i=>n.blockedRootDomain=i),class:"form-control"},null,512),[[p,n.blockedRootDomain]]),e("button",{class:"btn red-btn mt-3",onClick:t[3]||(t[3]=(...i)=>o.DeleteSourcesByRootDomain&&o.DeleteSourcesByRootDomain(...i))}," Delete & Block "),Xe]),Ye,e("ul",et,[(r(!0),a(k,null,$(n.blockedRootDomains,i=>(r(),a("li",null,[e("span",tt,[e("span",null,b(i.root_domain)+" ",1),e("button",{class:"btn red-btn red-mini-btn",onClick:d=>o.UnBlockRootDomain(i.id)},nt,8,st)])]))),256))]),lt,e("div",it,[m(e("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=i=>n.whiteListedRootDomain=i),class:"form-control"},null,512),[[p,n.whiteListedRootDomain]]),e("button",{class:"btn green-btn mt-3",onClick:t[5]||(t[5]=i=>o.AddRootDomainToWhiteList())}," Add "),rt]),at,e("ul",null,[(r(!0),a(k,null,$(n.whiteListedRootDomains,i=>(r(),a("li",null,[e("span",ct,[e("span",null,b(i.root_domain)+" ",1),e("button",{class:"btn red-btn red-mini-btn",onClick:d=>o.RemoveFromWhiteList(i.id)},mt,8,dt)])]))),256))]),ht,e("button",{class:"btn red-btn mt-3",onClick:t[6]||(t[6]=(...i)=>o.DeleteDuplicateSources&&o.DeleteDuplicateSources(...i))}," Delete "),_t,pt,e("button",{class:"btn red-btn mt-3",onClick:t[7]||(t[7]=(...i)=>o.DeleteBrokenSources&&o.DeleteBrokenSources(...i))}," Scan and Delete "),ft])}const bt=v(Ee,[["render",gt],["__scopeId","data-v-4cf0cb99"]]);const St={setup(){return{userDetailsStore:q()}},data(){return{}},components:{ProfileDetails:he,Settings:qe,BulkQuestionsUpload:Ue,AutoGenerateSources:bt},methods:{CheckMCQuestions(){console.log("test"),fetch("/questions/check-questions")}}},yt=e("div",{id:"banner"},[e("img",{src:P,class:"w-100 h-auto"})],-1),vt={key:1,class:"container mt-1 px-3 px-lg-0 mb-5"},Ct=e("hr",null,null,-1),kt=e("h1",null,"Content Flags",-1),Lt={key:3,class:"container mt-1 px-3 px-lg-0 mb-5"},Dt=e("hr",null,null,-1),wt=e("h1",null,"Check MC Questions",-1),xt=e("p",{style:{"font-size":"14px"},class:"mt-2"},[e("ul",null,[e("li",null,[e("em",null,"To be done by devs and not admins.")]),e("li",null,[e("em",null," Note that this will check ALL unchecked multiple-choice questions, and can be expensive.")])])],-1);function $t(s,t,u,l,n,o){const i=_("ProfileDetails"),d=_("Settings"),w=_("router-link"),T=_("BulkQuestionsUpload"),A=_("AutoGenerateSources");return r(),a(k,null,[yt,S(i),l.userDetailsStore.role=="admin"?(r(),x(d,{key:0})):g("",!0),l.userDetailsStore.role=="admin"||l.userDetailsStore.email=="imenedyason@gmail.com"||l.userDetailsStore.email=="oilbrushedcanvas@gmail.com"?(r(),a("section",vt,[Ct,kt,S(w,{class:"btn green-btn mt-3",to:"/content-flags"},{default:C(()=>[y("Go to page")]),_:1})])):g("",!0),l.userDetailsStore.role=="admin"?(r(),x(T,{key:2})):g("",!0),l.userDetailsStore.role=="admin"?(r(),a("section",Lt,[Dt,wt,e("button",{class:"btn green-btn mt-3",onClick:t[0]||(t[0]=Rt=>o.CheckMCQuestions())}," Check now "),xt])):g("",!0),l.userDetailsStore.role=="admin"?(r(),x(A,{key:4})):g("",!0)],64)}const Nt=v(St,[["render",$t]]);export{Nt as default};
