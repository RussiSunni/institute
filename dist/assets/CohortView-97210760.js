import{_ as p,r as w,o as n,c as l,d as o,t as m,I as g,b as a,n as M,i as f,F as u,k as b,l as y,p as x,f as S,a as k,e as C,m as L,T as E,s as j,w as z,G as B}from"./main-96168b70.js";import{u as F}from"./CohortsStore-636a1e2e.js";const D={setup(){return{cohortsStore:F()}},props:["id","children","name","type","level","depth","filtered","ancestorFiltered"],data(){return{cohortId:this.$route.params.cohortId,showChildren:!1,isFiltered:null}},computed:{indent(){var t=0;return screen.width<=480?this.depth==1?t=25:t=20:t=50,this.type!="sub"?{transform:`translate(${this.depth*t-35.2}px)`}:{transform:`translate(${(this.depth-1)*t-35.2}px)`}}},async created(){},methods:{toggleChildSkills(){this.showChildren=!this.showChildren},filter(){this.filtered==1?this.isFiltered=0:this.isFiltered=1;const t={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({cohortId:this.cohortId,skillId:this.id,isFiltered:this.isFiltered})};var e="/cohorts/"+this.cohortId+"/edit-filters";fetch(e,t).then(i=>{this.cohortsStore.getCohortSkillFilters(this.cohortId)})}},components:{}},_=t=>(x("data-v-9f9b9c85"),t=t(),S(),t),T={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",height:"18",width:"18"},V=_(()=>o("path",{d:"M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z",fill:"#9C7EEC"},null,-1)),P=[V],U={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",height:"18",width:"18"},N=_(()=>o("path",{d:"M3.9 22.9C10.5 8.9 24.5 0 40 0L472 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L396.4 195.6C316.2 212.1 256 283 256 368c0 27.4 6.3 53.4 17.5 76.5c-1.6-.8-3.2-1.8-4.7-2.9l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 65.3C-.7 53.4-2.8 36.8 3.9 22.9zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm59.3 107.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L409.4 368l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L432 390.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368l36.7-36.7z",fill:"#9C7EEC"},null,-1)),$=[N],O={key:0,height:"18",width:"18",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},q=_(()=>o("path",{fill:"#9C7EEC",d:"M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"},null,-1)),A=[q],H={key:1,height:"18",width:"18",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},J=_(()=>o("path",{fill:"#9C7EEC",d:"M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"},null,-1)),G=[J];function K(t,e,i,v,r,h){const d=w("FilterChild",!0);return n(),l(u,null,[o("button",{style:M(h.indent),class:f(["filter-button d-flex justify-content-between align-items-center",{"is-filtered":i.filtered==1||i.ancestorFiltered==1}]),onClick:e[2]||(e[2]=s=>h.toggleChildSkills())},[o("span",null,m(i.name),1),o("div",null,[o("button",{class:"btn",onClick:e[0]||(e[0]=g((...s)=>h.filter&&h.filter(...s),["stop"]))},[i.filtered!=1?(n(),l("svg",T,P)):(n(),l("svg",U,$))]),i.children.length!=0?(n(),l("button",{key:0,onClick:e[1]||(e[1]=g((...s)=>h.toggleChildSkills&&h.toggleChildSkills(...s),["stop"])),class:"btn"},[r.showChildren?(n(),l("svg",H,G)):(n(),l("svg",O,A))])):a("",!0)])],6),r.showChildren?(n(!0),l(u,{key:0},b(i.children,s=>(n(),y(d,{id:s.id,filtered:s.filtered,ancestorFiltered:i.filtered,children:s.children,type:s.type,level:s.level,name:s.name,depth:i.depth+1},null,8,["id","filtered","ancestorFiltered","children","type","level","name","depth"]))),256)):a("",!0)],64)}const Q=p(D,[["render",K],["__scopeId","data-v-9f9b9c85"]]);const R={setup(){return{cohortsStore:F()}},data(){return{cohortId:this.$route.params.cohortId}},computed:{},async created(){await this.cohortsStore.getCohortSkillFilters(this.cohortId)},methods:{},components:{FilterChild:Q}};function W(t,e,i,v,r,h){const d=w("FilterChild");return n(!0),l(u,null,b(this.cohortsStore.cohortSkills,s=>(n(),y(d,{id:s.id,children:s.children,depth:1,name:s.name,type:s.type,filtered:s.filtered},null,8,["id","children","name","type","filtered"]))),256)}const X=p(R,[["render",W],["__scopeId","data-v-b5e84cbf"]]);const Y={setup(){return{userDetailsStore:k()}},data(){return{cohortId:this.$route.params.cohortId,cohort:{},students:[],unavailableStudents:[],members:[],showFilters:!1,showMembers:!1}},async created(){await this.getCohort(),await this.getMembers(),await this.getUnavailableStudents(),this.students.length==0&&await this.getStudents()},components:{FilterParent:X},computed:{},methods:{async getCohort(){fetch("/cohorts/"+this.cohortId).then(function(t){return t.json()}).then(t=>{this.cohort=t})},async getMembers(){fetch("/cohorts/"+this.cohortId+"/members").then(function(t){return t.json()}).then(t=>{this.members=t})},async getUnavailableStudents(){fetch("/cohorts/unavailable/"+this.cohortId+"/list").then(function(t){return t.json()}).then(t=>{this.unavailableStudents=t})},async getStudents(){fetch("/instructor-students/"+this.userDetailsStore.userId+"/list").then(function(t){return t.json()}).then(t=>{this.students=t;for(let e=0;e<this.students.length;e++){this.students[e].isMember=!1;for(let i=0;i<this.members.length;i++)this.students[e].id==this.members[i].id&&(this.students[e].isMember=!0)}for(let e=0;e<this.students.length;e++){this.students[e].unavailable=!1;for(let i=0;i<this.unavailableStudents.length;i++)this.students[e].id==this.unavailableStudents[i].user_id&&(this.students[e].unavailable=!0)}})},submit(){let t=0;this.updateCohortMembers(t)},async updateCohortMembers(t){const e={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({studentId:this.students[t].id,isMember:this.students[t].isMember})};var i="/cohorts/edit/"+this.cohortId;fetch(i,e).then(()=>{if(t+1<this.students.length)t++,this.updateCohortMembers(t);else{alert("Cohort updated"),this.getMembers();return}})},async deleteCohort(){if(confirm("Are you sure you want to delete this cohort?")==!0)if(this.members.length>0)alert("Please remove all members from this cohort before deleting it.");else{const e=await fetch("/cohorts/"+this.cohortId,{method:"DELETE"});e.error&&console.log(e.error),this.$router.push("/cohorts")}}}},c=t=>(x("data-v-ae4844d6"),t=t(),S(),t),Z={class:"container cohort-page"},tt={class:"heading"},et={class:"d-flex flex-column"},st={class:"d-flex flex-row justify-content-between"},ot=["title"],it={class:"d-flex"},nt=c(()=>o("h2",{class:"heading"},"Available Students",-1)),rt=c(()=>o("path",{d:"M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"},null,-1)),lt=[rt],ht=c(()=>o("p",null,[o("em",null,"students can only be in one cohort at a time")],-1)),dt={key:0},ct=["value","onUpdate:modelValue","disabled"],at={class:"d-flex flex-column mt-4"},ut={class:"d-flex flex-row justify-content-between"},_t=["title"],mt={class:"d-flex"},ft=c(()=>o("h2",{class:"heading"},"Filters",-1)),pt=c(()=>o("path",{d:"M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"},null,-1)),wt=[pt],bt={key:0};function vt(t,e,i,v,r,h){const d=w("FilterParent");return n(),l("div",Z,[o("h1",tt,"Cohorts: "+m(r.cohort.name),1),o("div",et,[o("div",st,[o("div",{class:"log-type",onClick:e[0]||(e[0]=s=>r.showMembers=!r.showMembers),"b-on-hover":"",title:r.showMembers?"collapse":"expand"},[o("div",it,[nt,(n(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"22",height:"22",fill:"#667085",class:f([r.showMembers?"arrow-point-down mb-2":"arrow-point-up "])},lt,2))]),ht],8,ot)])]),r.showMembers?(n(),l("div",dt,[o("ul",null,[(n(!0),l(u,null,b(r.students,s=>(n(),l("li",null,[j(m(s.username)+" ",1),z(o("input",{type:"checkbox",value:s.id,"onUpdate:modelValue":I=>s.isMember=I,disabled:!!s.unavailable},null,8,ct),[[B,s.isMember]])]))),256))]),o("button",{class:"green-btn btn",onClick:e[1]||(e[1]=(...s)=>h.submit&&h.submit(...s))},"Submit")])):a("",!0),o("div",at,[o("div",ut,[o("div",{class:"log-type",onClick:e[2]||(e[2]=s=>r.showFilters=!r.showFilters),"b-on-hover":"",title:r.showFilters?"collapse":"expand"},[o("div",mt,[ft,(n(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"22",height:"22",fill:"#667085",class:f([r.showFilters?"arrow-point-down mb-2":"arrow-point-up "])},wt,2))])],8,_t)])]),C(E,{name:"dropdown"},{default:L(()=>[r.showFilters?(n(),l("div",bt,[C(d)])):a("",!0)]),_:1}),o("button",{class:"btn red-btn",onClick:e[3]||(e[3]=(...s)=>h.deleteCohort&&h.deleteCohort(...s))},"Delete")])}const yt=p(Y,[["render",vt],["__scopeId","data-v-ae4844d6"]]);export{yt as default};
