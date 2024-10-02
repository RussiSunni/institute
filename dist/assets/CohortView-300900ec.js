import{_ as b,r as v,o as n,c as r,d as o,t as m,I as y,b as u,n as M,i as p,F as a,k as _,l as w,p as x,f as S,a as F,e as C,m as L,T as j,w as z,G as B}from"./main-c0fbedf2.js";import{u as k}from"./CohortsStore-23ae16ec.js";const $={setup(){return{cohortsStore:k()}},props:["id","children","name","type","level","depth","filtered"],data(){return{cohortId:this.$route.params.cohortId,showChildren:!1,isFiltered:null}},computed:{indent(){var e=0;return screen.width<=480?this.depth==1?e=25:e=20:e=50,this.type!="sub"?{transform:`translate(${this.depth*e-35.2}px)`}:{transform:`translate(${(this.depth-1)*e-35.2}px)`}}},mounted(){console.log(this.$refs.name.offsetHeight),this.$refs.name.offsetHeight>90?this.$refs.name.classList.add("four-row-domain-name"):this.$refs.name.offsetHeight>60?this.$refs.name.classList.add("three-row-domain-name"):this.$refs.name.offsetHeight>30&&this.$refs.name.classList.add("two-row-domain-name")},methods:{toggleChildSkills(){this.showChildren=!this.showChildren},filter(){this.filtered==1?this.isFiltered=0:this.isFiltered=1;const e={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({cohortId:this.cohortId,skillId:this.id,isFiltered:this.isFiltered})};var t="/cohorts/"+this.cohortId+"/edit-filters";fetch(t,e).then(i=>{this.cohortsStore.getCohortSkillFilters(this.cohortId)})}},components:{}},f=e=>(x("data-v-b913a332"),e=e(),S(),e),D={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",height:"18",width:"18"},P=f(()=>o("path",{d:"M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z",fill:"black"},null,-1)),T=[P],U={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",height:"18",width:"18"},V=f(()=>o("path",{d:"M3.9 22.9C10.5 8.9 24.5 0 40 0L472 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L396.4 195.6C316.2 212.1 256 283 256 368c0 27.4 6.3 53.4 17.5 76.5c-1.6-.8-3.2-1.8-4.7-2.9l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 65.3C-.7 53.4-2.8 36.8 3.9 22.9zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm59.3 107.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L409.4 368l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L432 390.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368l36.7-36.7z",fill:"white"},null,-1)),H=[V],N={key:0,height:"18",width:"18",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},E=f(()=>o("path",{fill:"black",d:"M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"},null,-1)),O=[E],q={key:1,height:"18",width:"18",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},A=f(()=>o("path",{fill:"black",d:"M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"},null,-1)),J=[A];function G(e,t,i,g,l,h){const d=v("FilterChild",!0);return n(),r(a,null,[o("button",{style:M(h.indent),class:p(["filter-button d-flex justify-content-between align-items-center",{"is-filtered":i.filtered==1}]),onClick:t[2]||(t[2]=s=>h.toggleChildSkills())},[o("span",{ref:"name"},m(i.name),513),o("div",null,[o("button",{class:"btn",onClick:t[0]||(t[0]=y((...s)=>h.filter&&h.filter(...s),["stop"]))},[i.filtered!=1?(n(),r("svg",D,T)):(n(),r("svg",U,H))]),i.children.length!=0?(n(),r("button",{key:0,onClick:t[1]||(t[1]=y((...s)=>h.toggleChildSkills&&h.toggleChildSkills(...s),["stop"])),class:"btn"},[l.showChildren?(n(),r("svg",q,J)):(n(),r("svg",N,O))])):u("",!0)])],6),l.showChildren&&i.filtered==1?(n(!0),r(a,{key:0},_(i.children,s=>(n(),w(d,{id:s.id,filtered:i.filtered,children:s.children,type:s.type,level:s.level,name:s.name,depth:i.depth+1},null,8,["id","filtered","children","type","level","name","depth"]))),256)):l.showChildren&&i.filtered==0?(n(!0),r(a,{key:1},_(i.children,s=>(n(),w(d,{id:s.id,filtered:s.filtered,children:s.children,type:s.type,level:s.level,name:s.name,depth:i.depth+1},null,8,["id","filtered","children","type","level","name","depth"]))),256)):u("",!0)],64)}const K=b($,[["render",G],["__scopeId","data-v-b913a332"]]);const Q={setup(){return{cohortsStore:k()}},data(){return{cohortId:this.$route.params.cohortId}},computed:{},async created(){await this.cohortsStore.getCohortSkillFilters(this.cohortId)},methods:{},components:{FilterChild:K}};function R(e,t,i,g,l,h){const d=v("FilterChild");return n(!0),r(a,null,_(this.cohortsStore.cohortSkills,s=>(n(),w(d,{id:s.id,children:s.children,depth:1,name:s.name,type:s.type,filtered:s.filtered},null,8,["id","children","name","type","filtered"]))),256)}const W=b(Q,[["render",R],["__scopeId","data-v-b5e84cbf"]]);const X={setup(){return{userDetailsStore:F()}},data(){return{cohortId:this.$route.params.cohortId,cohort:{},students:[],unavailableStudents:[],members:[],showFilters:!1,showMembers:!1}},async created(){await this.getCohort(),await this.getMembers(),await this.getUnavailableStudents(),this.students.length==0&&await this.getStudents()},components:{FilterParent:W},computed:{},methods:{async getCohort(){fetch("/cohorts/"+this.cohortId).then(function(e){return e.json()}).then(e=>{this.cohort=e})},async getMembers(){fetch("/cohorts/"+this.cohortId+"/members").then(function(e){return e.json()}).then(e=>{this.members=e})},async getUnavailableStudents(){fetch("/cohorts/unavailable/"+this.cohortId+"/list").then(function(e){return e.json()}).then(e=>{this.unavailableStudents=e})},async getStudents(){fetch("/instructor-students/"+this.userDetailsStore.userId+"/list").then(function(e){return e.json()}).then(e=>{this.students=e;for(let t=0;t<this.students.length;t++){this.students[t].isMember=!1;for(let i=0;i<this.members.length;i++)this.students[t].id==this.members[i].id&&(this.students[t].isMember=!0)}for(let t=0;t<this.students.length;t++){this.students[t].unavailable=!1;for(let i=0;i<this.unavailableStudents.length;i++)this.students[t].id==this.unavailableStudents[i].user_id&&(this.students[t].unavailable=!0)}})},submit(){let e=0;this.updateCohortMembers(e)},async updateCohortMembers(e){const t={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({studentId:this.students[e].id,isMember:this.students[e].isMember})};var i="/cohorts/edit/"+this.cohortId;fetch(i,t).then(()=>{if(e+1<this.students.length)e++,this.updateCohortMembers(e);else{alert("Cohort updated"),this.getMembers();return}})},async deleteCohort(){if(confirm("Are you sure you want to delete this cohort?")==!0)if(this.members.length>0)alert("Please remove all members from this cohort before deleting it.");else{const t=await fetch("/cohorts/"+this.cohortId,{method:"DELETE"});t.error&&console.log(t.error),this.$router.push("/cohorts")}}}},c=e=>(x("data-v-0310c8ad"),e=e(),S(),e),Y={class:"container cohort-page"},Z={class:"d-flex justify-content-between"},ee={class:"heading"},te={class:"d-flex flex-column"},se={class:"d-flex flex-row justify-content-between"},oe=["title"],ie={class:"d-flex"},ne=c(()=>o("h2",{class:"heading h3"},"Available Students",-1)),le=c(()=>o("path",{d:"M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"},null,-1)),re=[le],he=c(()=>o("p",null,[o("em",null,"Please note that a student can only be in one cohort.")],-1)),de={key:0},ce={style:{"list-style":"none"}},ae={class:"form-check"},ue={class:"control control-checkbox"},_e=["value","onUpdate:modelValue","disabled"],fe=c(()=>o("div",{class:"control_indicator"},null,-1)),me={class:"students"},pe={class:"d-flex flex-column mt-4"},we={class:"d-flex flex-row justify-content-between"},be=["title"],ve={class:"d-flex"},ge=c(()=>o("h2",{class:"heading h3"},"Filters",-1)),ye=c(()=>o("path",{d:"M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"},null,-1)),Ce=[ye],xe={key:0};function Se(e,t,i,g,l,h){const d=v("FilterParent");return n(),r("div",Y,[o("span",Z,[o("h1",ee,m(l.cohort.name),1),o("button",{class:"btn red-btn",onClick:t[0]||(t[0]=(...s)=>h.deleteCohort&&h.deleteCohort(...s))}," Delete ")]),o("div",te,[o("div",se,[o("div",{class:"log-type",onClick:t[1]||(t[1]=s=>l.showMembers=!l.showMembers),"b-on-hover":"",title:l.showMembers?"collapse":"expand"},[o("div",ie,[ne,(n(),r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"22",height:"22",fill:"#667085",class:p([l.showMembers?"arrow-point-down mb-2":"arrow-point-up "])},re,2))]),he],8,oe)])]),l.showMembers?(n(),r("div",de,[o("ul",ce,[(n(!0),r(a,null,_(l.students,s=>(n(),r("li",null,[o("div",ae,[o("label",ue,[z(o("input",{type:"checkbox",value:s.id,"onUpdate:modelValue":I=>s.isMember=I,disabled:!!s.unavailable},null,8,_e),[[B,s.isMember]]),fe]),o("span",me,m(s.username),1)])]))),256))]),o("button",{class:"green-btn btn",onClick:t[2]||(t[2]=(...s)=>h.submit&&h.submit(...s))},"Submit")])):u("",!0),o("div",pe,[o("div",we,[o("div",{class:"log-type",onClick:t[3]||(t[3]=s=>l.showFilters=!l.showFilters),"b-on-hover":"",title:l.showFilters?"collapse":"expand"},[o("div",ve,[ge,(n(),r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"22",height:"22",fill:"#667085",class:p([l.showFilters?"arrow-point-down mb-2":"arrow-point-up "])},Ce,2))])],8,be)])]),C(j,{name:"dropdown"},{default:L(()=>[l.showFilters?(n(),r("div",xe,[C(d)])):u("",!0)]),_:1})])}const Me=b(X,[["render",Se],["__scopeId","data-v-0310c8ad"]]);export{Me as default};
