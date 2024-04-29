import{_ as S,g as D,I as O,n as P,i as u,o as r,c as d,d as e,a as g,w as y,l as f,e as h,v as p,p as v,f as w,t as C,F as q,k as I,y as V,j as L,b}from"./main-2f4b73b3.js";import{u as N}from"./SettingsStore-15b4d26b.js";import{u as M}from"./TagsStore-d3bd4d01.js";import{_ as T}from"./general-banner-1c13aca4.js";const U={setup(){const t=D();t.getUserDetails();const s=O();return{userDetailsStore:t,sessionDetailsStore:s}},data(){return{}},computed:{name(){return this.userDetailsStore.firstName+" "+this.userDetailsStore.lastName}},methods:{LogOut(){this.sessionDetailsStore.isLoggedIn=!1;const t={method:"POST",headers:{"Content-Type":"application/json"}};var s="/logout";fetch(s,t).then(function(a){P.push({name:"login"})})}}},_=t=>(v("data-v-b21f75d5"),t=t(),w(),t),B={class:"container pb-4"},Q=_(()=>e("h1",{id:"page-tile",class:"my-3 ms-0 ms-md-3 ms-lg-0 mt-2 mt-md-4"}," My Profile ",-1)),G={class:"row mt-0 mt-md-4"},j={class:"col-12 col-lg-5"},z={class:"row mx-0 px-md-0"},Z={class:"d-flex align-items-center align-items-md-start ps-lg-0"},R=["src"],E=["src"],J={class:"row my-3 mx-0"},W={class:"col-12 col-5 d-flex gap-3 flex-row justify-content-center justify-content-md-start ps-lg-0"},H=_(()=>e("svg",{width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M0.75558 19.3181C0.77635 19.5132 0.87137 19.6928 1.02096 19.8198C1.17055 19.9468 1.36325 20.0114 1.55915 20.0002L5.27701 19.8288L0.398438 15.6145L0.75558 19.3181Z",fill:"white"}),e("path",{d:"M11.8467 2.24484L0.801758 15.0315L5.6802 19.2454L16.7251 6.45877L11.8467 2.24484Z",fill:"white"}),e("path",{d:"M18.2555 3.11796L14.934 0.260817C14.832 0.172259 14.7134 0.104756 14.5852 0.0621907C14.4569 0.0196256 14.3215 0.00283902 14.1868 0.0127967C14.052 0.0227543 13.9205 0.0592596 13.7999 0.120212C13.6793 0.181165 13.572 0.265362 13.484 0.36796L12.4805 1.50725L17.359 5.71439L18.3519 4.56082C18.5289 4.35602 18.6181 4.08969 18.6 3.81958C18.582 3.54948 18.4582 3.29738 18.2555 3.11796Z",fill:"white"})],-1)),K={class:""},X=_(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"22",height:"22",fill:"white"},[e("path",{d:"M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"})],-1)),Y={key:1,href:"/login",class:"btn purple-btn",role:"button"},ee={class:"col-12 px-4 px-md-0 col-lg-4 px-0 px-md-4 px-lg-0"},te={class:"mb-3"},se=_(()=>e("label",{for:"name",class:"form-label"},"Name",-1)),oe={class:"mb-3"},ne=_(()=>e("label",{class:"form-label"},"Username",-1)),ie={class:"mb-3"},le=_(()=>e("label",{class:"form-label"},"Email",-1)),re={class:"mb-3"},ae=_(()=>e("label",{class:"form-label"},"Role",-1));function ce(t,s,a,o,n,i){const l=u("router-link");return r(),d("div",B,[Q,e("div",G,[e("div",j,[e("div",z,[e("div",Z,[e("img",{id:"img-background",src:o.userDetailsStore.avatar,height:"270",style:{"background-color":"lightgrey"},class:"d-none d-lg-block"},null,8,R),e("img",{id:"img-background",src:o.userDetailsStore.avatar,height:"120",style:{"background-color":"lightgrey"},class:"d-lg-none"},null,8,E)])]),e("div",J,[e("div",W,[g(l,{class:"purple-btn btn",to:"/profile/edit",role:"button"},{default:y(()=>[f("Edit Profile   "),H]),_:1}),e("div",K,[o.sessionDetailsStore.isLoggedIn==!0?(r(),d("a",{key:0,onClick:s[0]||(s[0]=c=>i.LogOut()),class:"btn red-btn",role:"button"},[f(" Log out   "),X])):(r(),d("a",Y,"Log in"))])])])]),e("div",ee,[e("div",te,[se,h(e("input",{id:"name","onUpdate:modelValue":s[1]||(s[1]=c=>i.name=c),type:"text",class:"form-control",readonly:""},null,512),[[p,i.name]])]),e("div",oe,[ne,h(e("input",{"onUpdate:modelValue":s[2]||(s[2]=c=>o.userDetailsStore.userName=c),type:"text",class:"form-control",readonly:""},null,512),[[p,o.userDetailsStore.userName]])]),e("div",ie,[le,h(e("input",{"onUpdate:modelValue":s[3]||(s[3]=c=>o.userDetailsStore.email=c),type:"email",class:"form-control",readonly:""},null,512),[[p,o.userDetailsStore.email]])]),e("div",re,[ae,h(e("input",{"onUpdate:modelValue":s[4]||(s[4]=c=>o.userDetailsStore.role=c),type:"text",class:"form-control",readonly:""},null,512),[[p,o.userDetailsStore.role]])])])])])}const de=S(U,[["render",ce],["__scopeId","data-v-b21f75d5"]]);const ue={setup(){const t=N();t.getSettings();const s=M();return s.tagsList.length==0&&s.getTagsList(),{settingsStore:t,tagsStore:s}},data(){return{filters:[]}},async created(){this.tagsStore.tagsList.length==0&&await this.tagsStore.getTagsList();for(let t=0;t<this.tagsStore.tagsList.length;t++)this.tagsStore.tagsList[t].is_active=="active"&&this.filters.push(this.tagsStore.tagsList[t].id)}},m=t=>(v("data-v-4b45d89b"),t=t(),w(),t),_e={class:"container mt-3 pb-3 px-3 px-lg-0"},he=m(()=>e("hr",null,null,-1)),me=m(()=>e("h1",null,"Settings",-1)),pe={class:"mt-4"},ge=m(()=>e("svg",{width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M0.75558 19.3181C0.77635 19.5132 0.87137 19.6928 1.02096 19.8198C1.17055 19.9468 1.36325 20.0114 1.55915 20.0002L5.27701 19.8288L0.398438 15.6145L0.75558 19.3181Z",fill:"white"}),e("path",{d:"M11.8467 2.24484L0.801758 15.0315L5.6802 19.2454L16.7251 6.45877L11.8467 2.24484Z",fill:"white"}),e("path",{d:"M18.2555 3.11796L14.934 0.260817C14.832 0.172259 14.7134 0.104756 14.5852 0.0621907C14.4569 0.0196256 14.3215 0.00283902 14.1868 0.0127967C14.052 0.0227543 13.9205 0.0592596 13.7999 0.120212C13.6793 0.181165 13.572 0.265362 13.484 0.36796L12.4805 1.50725L17.359 5.71439L18.3519 4.56082C18.5289 4.35602 18.6181 4.08969 18.6 3.81958C18.582 3.54948 18.4582 3.29738 18.2555 3.11796Z",fill:"white"})],-1)),fe={class:"mt-5"},Se=m(()=>e("hr",null,null,-1)),be=m(()=>e("h1",null,"Filters",-1)),ye={class:"col"},ve={class:"control control-checkbox"},we={class:"my-auto mx-2 me-4"},xe=["value"],ke=m(()=>e("div",{class:"control_indicator"},null,-1)),Ce={class:"mt-4"};function Le(t,s,a,o,n,i){const l=u("router-link");return r(),d("div",_e,[e("section",null,[he,me,e("p",null," time for student skills to degrade (in days): "+C(o.settingsStore.skillDegradationDays),1),e("p",null," max number of questions per quiz: "+C(o.settingsStore.quizMaxQuestions),1),e("p",pe,[g(l,{to:"/settings/edit",class:"btn green-btn",role:"button"},{default:y(()=>[f(" Edit  "),ge]),_:1})])]),e("section",fe,[Se,be,e("div",ye,[(r(!0),d(q,null,I(o.tagsStore.tagsList,c=>(r(),d("label",ve,[e("span",we,C(c.name),1),h(e("input",{type:"checkbox",value:c.id,"onUpdate:modelValue":s[0]||(s[0]=k=>n.filters=k),disabled:""},null,8,xe),[[V,n.filters]]),ke]))),256))]),e("p",Ce,[g(l,{to:"/tags/select",class:"btn green-btn",role:"button"},{default:y(()=>[f(" Select Filters ")]),_:1})])])])}const $e=S(ue,[["render",Le],["__scopeId","data-v-4b45d89b"]]);const De={data(){return{questionCSVFile:"",filesArray:[],questionsArray:[],counter1:0,counter2:0,incorrectlyFormattedQuestions:!1}},methods:{OnFileChange(t){var s=t.target.files||t.dataTransfer.files;if(s.length)for(let a=0;a<s.length;a++)this.ReadFile(s[a])},ReadFile(t){var s=new FileReader;s.onload=a=>{var o=a.target.result,n=o.split(/\r?\n|\r|\n/g);for(let i=n.length-1;i>=0;i--)(n[i]==""||n[i]==" ")&&n.splice(i,1);for(let i=n.length-1;i>=0;i--)n[i].split("|").length!=9&&(this.incorrectlyFormattedQuestions=!0,n.splice(i,1));for(let i=n.length-1;i>=0;i--)(isNaN(n[i].split("|")[0])||isNaN(parseFloat(n[i].split("|")[0])))&&(this.incorrectlyFormattedQuestions=!0,n.splice(i,1));for(let i=0;i<n.length;i++)this.questionsArray.push(n[i].split("|"))},s.readAsText(t)},Submit(){if(this.incorrectlyFormattedQuestions&&!confirm("Incorrectly formatted question were found. Only "+this.questionsArray.length+" questions will be uploaded. Continue?"))return;const t=[];for(let o=0;o<this.questionsArray.length;o++){const n={};n.skillId=this.questionsArray[o][0],n.name=this.questionsArray[o][1],n.question=this.questionsArray[o][2],n.correct_answer=this.questionsArray[o][3],n.incorrect_answer_1=this.questionsArray[o][4],n.incorrect_answer_2=this.questionsArray[o][5],n.incorrect_answer_3=this.questionsArray[o][6],n.incorrect_answer_4=this.questionsArray[o][7],n.explanation=this.questionsArray[o][8],t.push(n)}const s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questionArray:t})};var a="/questions/mc-questions/bulk-add";fetch(a,s).then(()=>{alert("Questions uploaded."),this.questionCSVFile="",this.filesArray=[],this.questionsArray=[]})}}},$=t=>(v("data-v-cdf3ed81"),t=t(),w(),t),qe={class:"container mt-3 pb-5 px-3 px-lg-0"},Ae=$(()=>e("hr",null,null,-1)),Fe=$(()=>e("h1",null,"Add MC Questions in Bulk",-1)),Oe={class:"row"},Pe={class:"col-sm-4"},Ie={key:0},Ve=$(()=>e("p",{style:{"font-size":"14px"}},[e("em",null,"Maximum file size 15mb")],-1)),Ne={key:1};function Me(t,s,a,o,n,i){return r(),d("div",qe,[Ae,Fe,e("div",Oe,[e("div",Pe,[n.questionCSVFile?(r(),d("div",Ne,[e("p",null,[e("button",{class:"btn btn-warning",onClick:s[1]||(s[1]=(...l)=>t.removeImage&&t.removeImage(...l))}," Remove file ")])])):(r(),d("div",Ie,[e("input",{class:"form-control",type:"file",accept:".csv,.txt",onChange:s[0]||(s[0]=(...l)=>i.OnFileChange&&i.OnFileChange(...l)),multiple:""},null,32),Ve])),e("button",{class:"btn green-btn",onClick:s[2]||(s[2]=l=>i.Submit())},"Submit")])])])}const Te=S(De,[["render",Me],["__scopeId","data-v-cdf3ed81"]]);const Ue={data(){return{numOfSourcesPerSkill:3}},methods:{async GenerateSources(){alert("Sources will now be generated for all skills. This will take some time.");var t="/resources/generate-sources";await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({numSources:this.numOfSourcesPerSkill})})}}},x=t=>(v("data-v-e26bd4b8"),t=t(),w(),t),Be={class:"container mt-3 pb-5 px-3 px-lg-0"},Qe=x(()=>e("hr",null,null,-1)),Ge=x(()=>e("h1",null,"Auto Generate Sources",-1)),je={class:"row"},ze={class:"col"},Ze=x(()=>e("label",{for:"numSourcesPerSkill",class:"form-label"},"Number of sources per skill to generate (max 10):",-1)),Re=x(()=>e("p",{style:{"font-size":"14px"}},[e("em",null,"Warning, this can cost a lot each time.")],-1));function Ee(t,s,a,o,n,i){return r(),d("div",Be,[Qe,Ge,e("div",je,[e("div",ze,[Ze,h(e("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>n.numOfSourcesPerSkill=l),type:"number",id:"numSourcesPerSkill",min:"1",max:"10",step:"1",class:"form-control","aria-describedby":"numSourcesPerSkill",onkeypress:"return event.charCode >= 48 && event.charCode <= 57"},null,512),[[p,n.numOfSourcesPerSkill]]),e("button",{class:"btn green-btn mt-3",onClick:s[1]||(s[1]=(...l)=>i.GenerateSources&&i.GenerateSources(...l))}," Generate Sources "),Re])])])}const Je=S(Ue,[["render",Ee],["__scopeId","data-v-e26bd4b8"]]);const We={setup(){return{userDetailsStore:D()}},data(){return{}},components:{ProfileDetails:de,Settings:$e,BulkQuestionsUpload:Te,AutoGenerateSources:Je}},He=e("div",{id:"banner"},[e("img",{src:T,class:"w-100 h-auto"})],-1),Ke={key:1,class:"container mt-1 px-3 px-lg-0 mb-5"},Xe=e("hr",null,null,-1),Ye=e("h1",null,"Content Flags",-1);function et(t,s,a,o,n,i){const l=u("ProfileDetails"),c=u("Settings"),k=u("router-link"),A=u("BulkQuestionsUpload"),F=u("AutoGenerateSources");return r(),d(q,null,[He,g(l),o.userDetailsStore.role=="admin"?(r(),L(c,{key:0})):b("",!0),o.userDetailsStore.role=="admin"?(r(),d("section",Ke,[Xe,Ye,g(k,{class:"btn green-btn mt-3",to:"/content-flags"},{default:y(()=>[f("Go to page")]),_:1})])):b("",!0),o.userDetailsStore.role=="admin"?(r(),L(A,{key:2})):b("",!0),o.userDetailsStore.role=="admin"?(r(),L(F,{key:3})):b("",!0)],64)}const it=S(We,[["render",et]]);export{it as default};
