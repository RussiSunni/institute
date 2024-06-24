import{_ as L,n as y,g as k,o as r,c as n,F as w,l as $,d as s,b as u,A as U,t as v,p as D,f as I,i as b,k as p,w as C,m as h,e as _,v as m,a as S}from"./main-2dbbd5b9.js";import{u as M}from"./InstructorStudentsStore-939b54c0.js";const V={setup(){const e=y(),t=k();return e.users.length<1&&e.getUsers(),{usersStore:e,userDetailsStore:t}},data(){return{currentUserId:null}},async created(){},methods:{changeUserId(e){this.currentUserId=e.id,this.$emit("changeUserId",e)}}},g=e=>(D("data-v-0f29731f"),e=e(),I(),e),Z={class:"container mt-4"},B={class:"d-flex"},R=["src"],j=["onClick"],A=g(()=>s("hr",{class:"border border-1 opacity-100 w-75 d-none d-md-block"},null,-1)),E=g(()=>s("hr",{class:"border border-1 opacity-100 w-100 d-block d-md-none"},null,-1)),H={class:"d-flex"},T=["src"],F=["onClick"],Y=g(()=>s("hr",{class:"border border-1 opacity-100 w-75 d-none d-md-block"},null,-1)),z=g(()=>s("hr",{class:"border border-1 opacity-100 w-100 d-block d-md-none"},null,-1));function O(e,t,d,l,a,f){return r(),n("div",Z,[l.userDetailsStore.role=="admin"?(r(!0),n(w,{key:0},$(l.usersStore.users,o=>(r(),n("div",null,[s("div",B,[o.avatar!=null?(r(),n("img",{key:0,class:"user-avatars",src:o.avatar},null,8,R)):u("",!0),s("button",{class:U(o.id==a.currentUserId?"isCurrentlyChoose":"user-buttons"),onClick:i=>f.changeUserId(o)},v(o.first_name)+" "+v(o.last_name),11,j)]),A,E]))),256)):l.userDetailsStore.role=="instructor"?(r(!0),n(w,{key:1},$(e.$parent.students,o=>(r(),n("div",null,[s("div",H,[o.avatar!=null?(r(),n("img",{key:0,class:"user-avatars",src:o.avatar},null,8,T)):u("",!0),s("button",{class:U(o.id==a.currentUserId?"isCurrentlyChoose":"user-buttons"),onClick:i=>f.changeUserId(o)},v(o.first_name)+" "+v(o.last_name),11,F)]),Y,z]))),256)):u("",!0)])}const P=L(V,[["render",O],["__scopeId","data-v-0f29731f"]]);const q={props:["userId","userRole"],setup(e){const t=y(),d=k();return t.users.length<1&&t.getUsers(),{usersStore:t,userDetailsStore:d}},data(){return{showModal:!1}},computed:{},methods:{}},c=e=>(D("data-v-b5b374ca"),e=e(),I(),e),G={id:"user-information",class:"container mt-4"},J=c(()=>s("div",{id:"close-popup-btn"},[s("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M0.312625 14.5205L4.83312 9.99999L0.312625 5.49218C0.111396 5.29025 -0.00159545 5.0168 -0.00159545 4.73172C-0.00159545 4.44665 0.111396 4.17319 0.312625 3.97126L3.96282 0.312625C4.16474 0.111396 4.4382 -0.00159545 4.72327 -0.00159545C5.00835 -0.00159545 5.2818 0.111396 5.48373 0.312625L9.99999 4.83312L14.5205 0.312625C14.6204 0.21056 14.7397 0.12947 14.8714 0.0741101C15.003 0.0187502 15.1444 -0.00976563 15.2873 -0.00976562C15.4301 -0.00976563 15.5715 0.0187502 15.7032 0.0741101C15.8349 0.12947 15.9541 0.21056 16.0541 0.312625L19.6874 3.96282C19.8886 4.16474 20.0016 4.4382 20.0016 4.72327C20.0016 5.00835 19.8886 5.2818 19.6874 5.48373L15.1669 9.99999L19.6874 14.5205C19.8883 14.7217 20.0012 14.9944 20.0012 15.2788C20.0012 15.5632 19.8883 15.836 19.6874 16.0372L16.0541 19.6874C15.8529 19.8883 15.5801 20.0012 15.2957 20.0012C15.0113 20.0012 14.7386 19.8883 14.5374 19.6874L9.99999 15.1669L5.49218 19.6874C5.29025 19.8886 5.0168 20.0016 4.73172 20.0016C4.44665 20.0016 4.17319 19.8886 3.97126 19.6874L0.312625 16.0541C0.21056 15.9541 0.12947 15.8349 0.0741101 15.7032C0.0187502 15.5715 -0.00976563 15.4301 -0.00976562 15.2873C-0.00976563 15.1444 0.0187502 15.003 0.0741101 14.8714C0.12947 14.7397 0.21056 14.6204 0.312625 14.5205Z",fill:"white"})])],-1)),K=[J],Q={class:"row"},W={class:"col-12 col-md-5 col-lg-4 d-flex flex-column"},X=["src"],s1={id:"user-function-btns-row",class:"d-flex justify-content-center mt-3"},t1=c(()=>s("svg",{width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M0.75558 19.3181C0.77635 19.5132 0.87137 19.6928 1.02096 19.8198C1.17055 19.9468 1.36325 20.0114 1.55915 20.0002L5.27701 19.8288L0.398438 15.6145L0.75558 19.3181Z",fill:"white"}),s("path",{d:"M11.8467 2.24484L0.801758 15.0315L5.6802 19.2454L16.7251 6.45877L11.8467 2.24484Z",fill:"white"}),s("path",{d:"M18.2555 3.11796L14.934 0.260817C14.832 0.172259 14.7134 0.104756 14.5852 0.0621907C14.4569 0.0196256 14.3215 0.00283902 14.1868 0.0127967C14.052 0.0227543 13.9205 0.0592596 13.7999 0.120212C13.6793 0.181165 13.572 0.265362 13.484 0.36796L12.4805 1.50725L17.359 5.71439L18.3519 4.56082C18.5289 4.35602 18.6181 4.08969 18.6 3.81958C18.582 3.54948 18.4582 3.29738 18.2555 3.11796Z",fill:"white"})],-1)),e1={key:1},r1=c(()=>s("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M0.312625 14.5205L4.83312 9.99999L0.312625 5.49218C0.111396 5.29025 -0.00159545 5.0168 -0.00159545 4.73172C-0.00159545 4.44665 0.111396 4.17319 0.312625 3.97126L3.96282 0.312625C4.16474 0.111396 4.4382 -0.00159545 4.72327 -0.00159545C5.00835 -0.00159545 5.2818 0.111396 5.48373 0.312625L9.99999 4.83312L14.5205 0.312625C14.6204 0.21056 14.7397 0.12947 14.8714 0.0741101C15.003 0.0187502 15.1444 -0.00976563 15.2873 -0.00976562C15.4301 -0.00976563 15.5715 0.0187502 15.7032 0.0741101C15.8349 0.12947 15.9541 0.21056 16.0541 0.312625L19.6874 3.96282C19.8886 4.16474 20.0016 4.4382 20.0016 4.72327C20.0016 5.00835 19.8886 5.2818 19.6874 5.48373L15.1669 9.99999L19.6874 14.5205C19.8883 14.7217 20.0012 14.9944 20.0012 15.2788C20.0012 15.5632 19.8883 15.836 19.6874 16.0372L16.0541 19.6874C15.8529 19.8883 15.5801 20.0012 15.2957 20.0012C15.0113 20.0012 14.7386 19.8883 14.5374 19.6874L9.99999 15.1669L5.49218 19.6874C5.29025 19.8886 5.0168 20.0016 4.73172 20.0016C4.44665 20.0016 4.17319 19.8886 3.97126 19.6874L0.312625 16.0541C0.21056 15.9541 0.12947 15.8349 0.0741101 15.7032C0.0187502 15.5715 -0.00976563 15.4301 -0.00976562 15.2873C-0.00976563 15.1444 0.0187502 15.003 0.0741101 14.8714C0.12947 14.7397 0.21056 14.6204 0.312625 14.5205Z",fill:"white"})],-1)),o1=c(()=>s("svg",{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M10.5 0C8.52219 0 6.58879 0.58649 4.9443 1.6853C3.29981 2.78412 2.01809 4.3459 1.26121 6.17317C0.504333 8.00043 0.306299 10.0111 0.692152 11.9509C1.078 13.8907 2.03041 15.6725 3.42894 17.0711C4.82746 18.4696 6.60929 19.422 8.5491 19.8079C10.4889 20.1937 12.4996 19.9957 14.3268 19.2388C16.1541 18.4819 17.7159 17.2002 18.8147 15.5557C19.9135 13.9112 20.5 11.9778 20.5 10C20.5 7.34784 19.4464 4.8043 17.5711 2.92893C15.6957 1.05357 13.1522 0 10.5 0ZM11.0217 6.10609C11.0636 6.08664 11.1089 6.07571 11.155 6.07394C11.2011 6.07217 11.2471 6.07959 11.2903 6.09578C11.3336 6.11196 11.3731 6.13659 11.4067 6.16821C11.4403 6.19984 11.4673 6.23784 11.4861 6.28C11.4861 6.29913 11.66 6.62783 11.9574 6.62783C12.2548 6.62783 12.4791 6.26261 12.4791 6.25739C12.5232 6.17529 12.598 6.11405 12.6872 6.08714C12.7764 6.06023 12.8727 6.06986 12.9548 6.11391C13.0369 6.15796 13.0981 6.23282 13.125 6.32202C13.1519 6.41123 13.1423 6.50746 13.0983 6.58957C12.9522 6.86435 12.547 7.33044 11.9522 7.33044C11.7142 7.32013 11.4839 7.24329 11.2875 7.10863C11.091 6.97397 10.9363 6.78691 10.8409 6.5687C10.8217 6.52683 10.8111 6.48158 10.8096 6.43558C10.8081 6.38958 10.8157 6.34373 10.8321 6.3007C10.8484 6.25767 10.8731 6.21832 10.9048 6.18491C10.9365 6.1515 10.9744 6.12471 11.0165 6.10609H11.0217ZM8.07392 6.10609C8.11568 6.08691 8.16082 6.07619 8.20675 6.07456C8.25267 6.07294 8.29847 6.08042 8.34148 6.09659C8.3845 6.11276 8.42388 6.1373 8.45736 6.16878C8.49084 6.20026 8.51774 6.23806 8.53653 6.28C8.54696 6.29913 8.71044 6.62783 9.00783 6.62783C9.30522 6.62783 9.52957 6.26261 9.52957 6.25739C9.57362 6.17529 9.64848 6.11405 9.73768 6.08714C9.82688 6.06023 9.92312 6.06986 10.0052 6.11391C10.0873 6.15796 10.1486 6.23282 10.1755 6.32202C10.2024 6.41123 10.1927 6.50746 10.1487 6.58957C10.0026 6.86435 9.59566 7.33044 9.00087 7.33044C8.76298 7.31993 8.53278 7.24301 8.33637 7.10837C8.13995 6.97374 7.98517 6.78679 7.88957 6.5687C7.87055 6.52662 7.8601 6.48117 7.85883 6.43501C7.85756 6.38885 7.86549 6.34291 7.88217 6.29984C7.89884 6.25678 7.92392 6.21747 7.95595 6.18421C7.98797 6.15094 8.0263 6.12438 8.0687 6.10609H8.07392ZM14.6635 6.64C14.5922 6.74783 12.9244 9.28 10.3157 9.28H10.253C7.58696 9.23652 6.36783 6.70609 6.3174 6.59826C6.27773 6.51385 6.27322 6.41714 6.30485 6.32941C6.33649 6.24168 6.40168 6.1701 6.48609 6.13043C6.5705 6.09077 6.66721 6.08626 6.75494 6.11789C6.84268 6.14953 6.91425 6.21472 6.95392 6.29913C6.96435 6.32174 8.04261 8.54087 10.2583 8.57739H10.3104C12.5435 8.57739 14.053 6.28174 14.0652 6.26087C14.0903 6.22204 14.1229 6.18855 14.1609 6.16229C14.199 6.13603 14.2419 6.11753 14.2871 6.10784C14.3323 6.09815 14.379 6.09747 14.4245 6.10582C14.47 6.11417 14.5134 6.1314 14.5522 6.15652C14.591 6.18164 14.6245 6.21417 14.6508 6.25224C14.677 6.2903 14.6955 6.33317 14.7052 6.37839C14.7149 6.42361 14.7156 6.47029 14.7072 6.51578C14.6989 6.56126 14.6816 6.60465 14.6565 6.64348L14.6635 6.64Z",fill:"white"})],-1)),i1={class:"d-flex justify-content-center mt-2"},n1={id:"user-form-info",class:"col-12 col-md-6"},l1={class:"mb-3"},a1=c(()=>s("label",{class:"form-label"},"First name",-1)),u1={class:"mb-3"},d1=c(()=>s("label",{class:"form-label"},"Last name",-1)),c1={class:"mb-3"},h1=c(()=>s("label",{class:"form-label"},"Username",-1)),_1={class:"mb-3"},m1=c(()=>s("label",{class:"form-label"},"Email",-1)),C1={key:0,class:"mb-3"},f1=c(()=>s("label",{class:"form-label"},"Role",-1)),p1={key:1,class:"mb-3"},v1=c(()=>s("label",{class:"form-label"},"Instructor",-1)),S1={key:0},b1={id:"myModal",class:"modal"},w1={class:"modal-content"},g1=c(()=>s("p",null,"Are you sure you want to delete this user?",-1)),L1={style:{display:"flex",gap:"10px"}};function y1(e,t,d,l,a,f){const o=b("router-link");return r(),n(w,null,[s("div",G,[s("div",{class:"flex-row-reverse d-flex d-md-none align-items-end mb-2",onClick:t[0]||(t[0]=i=>this.$parent.showDetails=!1)},K),s("div",Q,[s("div",W,[s("img",{id:"user-avatar",src:this.$parent.user.avatar},null,8,X),s("div",s1,[l.userDetailsStore.role=="admin"?(r(),p(o,{key:0,to:"/users/edit/"+this.$parent.user.id,class:"btn purple-btn"},{default:C(()=>[h(" Edit  "),t1]),_:1},8,["to"])):u("",!0),l.userDetailsStore.role=="admin"?(r(),n("span",e1,"  ")):u("",!0),l.userDetailsStore.role=="admin"?(r(),n("button",{key:2,class:"btn red-btn",onClick:t[1]||(t[1]=i=>a.showModal=!0)},[h(" Delete  "),r1])):u("",!0)]),d.userRole=="student"?(r(),p(o,{key:0,to:this.$parent.user.id+"/skill-tree",class:"btn green-btn mx-auto mt-3"},{default:C(()=>[h(" Skill tree "),o1]),_:1},8,["to"])):u("",!0),d.userRole=="student"?(r(),p(o,{key:1,to:"/student/"+this.$parent.user.id+"/skills",class:"btn green-btn mx-auto mt-3"},{default:C(()=>[h(" Skill list ")]),_:1},8,["to"])):u("",!0),s("div",i1,[l.userDetailsStore.role=="admin"?(r(),p(o,{key:0,target:"_blank",to:"/users/activity-report/"+this.$parent.user.id,class:"btn purple-btn"},{default:C(()=>[h(" Activity Report ")]),_:1},8,["to"])):u("",!0)])]),s("div",n1,[s("div",l1,[a1,_(s("input",{class:"form-control user-input-information",type:"text","onUpdate:modelValue":t[2]||(t[2]=i=>this.$parent.user.firstName=i),disabled:""},null,512),[[m,this.$parent.user.firstName]])]),s("div",u1,[d1,_(s("input",{class:"form-control user-input-information",type:"text","onUpdate:modelValue":t[3]||(t[3]=i=>this.$parent.user.lastName=i),disabled:""},null,512),[[m,this.$parent.user.lastName]])]),s("div",c1,[h1,_(s("input",{class:"form-control user-input-information",type:"text","onUpdate:modelValue":t[4]||(t[4]=i=>this.$parent.user.username=i),disabled:""},null,512),[[m,this.$parent.user.username]])]),s("div",_1,[m1,_(s("input",{class:"form-control user-input-information",type:"text","onUpdate:modelValue":t[5]||(t[5]=i=>this.$parent.user.email=i),disabled:""},null,512),[[m,this.$parent.user.email]])]),l.userDetailsStore.role=="admin"?(r(),n("div",C1,[f1,_(s("input",{class:"form-control user-input-information",type:"text","onUpdate:modelValue":t[6]||(t[6]=i=>this.$parent.user.role=i),disabled:""},null,512),[[m,this.$parent.user.role]])])):u("",!0),this.$parent.user.role=="student"&&l.userDetailsStore.role=="admin"?(r(),n("div",p1,[v1,_(s("input",{class:"form-control user-input-information",type:"text","onUpdate:modelValue":t[7]||(t[7]=i=>this.$parent.instructor=i),disabled:""},null,512),[[m,this.$parent.instructor]])])):u("",!0)])])]),a.showModal?(r(),n("div",S1,[s("div",b1,[s("div",w1,[g1,s("div",L1,[s("button",{type:"button",class:"btn btn-danger",onClick:t[8]||(t[8]=i=>{l.usersStore.deleteUser(d.userId),a.showModal=!1,this.$parent.showDetails=!1,this.$parent.changeUserToDefault()})}," Yes "),s("button",{type:"button",class:"btn btn-dark",onClick:t[9]||(t[9]=i=>a.showModal=!1)}," No ")])])])])):u("",!0)],64)}const k1=L(q,[["render",y1],["__scopeId","data-v-b5b374ca"]]),x1="/images/banners/students-banner.png";const $1={setup(){const e=y(),t=M(),d=k();return{usersStore:e,instructorStudentsStore:t,userDetailsStore:d}},data(){return{user:{id:null,firstName:null,lastName:null,username:null,avatar:null,role:null},instructor:null,showDetails:!1,students:[],showUserInfo:!0}},components:{UsersList:P,UserDetails:k1},async created(){this.usersStore.users.length<1&&await this.usersStore.getUsers(),await this.instructorStudentsStore.getInstructorStudentsList(),this.userDetailsStore.role=="admin"?(this.user.id=this.usersStore.users[0].id,this.user.firstName=this.usersStore.users[0].first_name,this.user.lastName=this.usersStore.users[0].last_name,this.user.username=this.usersStore.users[0].username,this.user.email=this.usersStore.users[0].email,this.user.avatar=this.usersStore.users[0].avatar,this.user.role=this.usersStore.users[0].role):this.userDetailsStore.role=="instructor"&&(await this.getStudents(),this.user.id=this.students[0].id,this.user.firstName=this.students[0].first_name,this.user.lastName=this.students[0].last_name,this.user.username=this.students[0].username,this.user.email=this.students[0].email,this.user.avatar=this.students[0].avatar)},methods:{changeUserToDefault(){this.user.id=this.usersStore.users[0].id,this.user.firstName=this.usersStore.users[0].first_name,this.user.lastName=this.usersStore.users[0].last_name,this.user.username=this.usersStore.users[0].username,this.user.email=this.usersStore.users[0].email,this.user.avatar=this.usersStore.users[0].avatar,this.user.role=this.usersStore.users[0].role},changeUserId(e){this.user.id=e.id,this.user.firstName=e.first_name,this.user.lastName=e.last_name,this.user.username=e.username,this.user.email=e.email,this.user.avatar=e.avatar,this.user.role=e.role,this.showDetails=!0,this.user.role=="student"&&this.getInstructor()},turnOffDetailsPopup(){},getInstructor(){var e;for(let t=0;t<this.instructorStudentsStore.instructorStudentsList.length;t++)this.instructorStudentsStore.instructorStudentsList[t].student_id==this.user.id&&(e=this.instructorStudentsStore.instructorStudentsList[t].instructor_id);for(let t=0;t<this.usersStore.users.length;t++)this.usersStore.users[t].id==e&&(this.instructor=this.usersStore.users[t].username)},async getStudents(){var e=[];for(let t=0;t<this.instructorStudentsStore.instructorStudentsList.length;t++)this.instructorStudentsStore.instructorStudentsList[t].instructor_id==this.userDetailsStore.userId&&e.push(this.instructorStudentsStore.instructorStudentsList[t].student_id);for(let t=0;t<this.usersStore.users.length;t++)for(let d=0;d<e.length;d++)this.usersStore.users[t].id==e[d]&&this.students.push(this.usersStore.users[t])}}},U1=s("div",{id:"banner"},[s("img",{src:x1,class:"w-100 img-fluid"})],-1),D1={key:0,id:"first-content-row",class:"d-flex justify-content-between"},I1=s("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"white"})],-1),N1={id:"user-container",class:"container-fluid"},M1={class:"row position-relative"},V1={class:"col-lg-4 col-md-5"},Z1={class:"col-md-7 d-none d-md-block"},B1={class:"row user-form-data-row"},R1={key:1},j1=s("h1",{class:"text-muted py-5"},"You have no students",-1),A1=[j1],E1={key:0,class:"col-md-7 d-block d-md-none",id:"user-detail-section"},H1={class:"row"};function T1(e,t,d,l,a,f){const o=b("router-link"),i=b("UsersList"),x=b("UserDetails");return r(),n(w,null,[U1,l.userDetailsStore.role=="admin"?(r(),n("div",D1,[S(o,{class:"btn purple-btn",to:"/users/add"},{default:C(()=>[h("Add  "),I1]),_:1}),S(o,{class:"btn purple-btn",to:"/user-skills/edit/"+a.user.id},{default:C(()=>[h("Edit Skill Mastery ")]),_:1},8,["to"])])):u("",!0),s("div",N1,[s("div",M1,[s("div",V1,[S(i,{onChangeUserId:t[0]||(t[0]=N=>f.changeUserId(N))})]),s("div",Z1,[s("div",B1,[l.userDetailsStore.role=="admin"||l.userDetailsStore.role=="instructor"&&a.students.length>0?(r(),p(x,{key:0,userId:a.user.id,userRole:a.user.role},null,8,["userId","userRole"])):(r(),n("div",R1,A1))])]),a.showDetails?(r(),n("div",E1,[s("div",H1,[S(x,{userId:a.user.id,userRole:a.user.role},null,8,["userId","userRole"])])])):u("",!0)])])],64)}const z1=L($1,[["render",T1]]);export{z1 as default};
