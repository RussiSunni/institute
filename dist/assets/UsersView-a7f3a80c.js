import{u as b}from"./UsersStore-69689ced.js";import{_ as w,u as N,o as l,c as a,F as g,i as U,b as s,h as C,z as k,t as v,p as L,g as $,r as f,d,w as S,k as p,f as V,j as _,v as m}from"./main-0144cae7.js";import{u as M}from"./InstructorStudentsStore-8416c0bf.js";const Z={setup(){const t=b(),e=N(),i=M();return t.users.length<1&&t.getUsers(),{usersStore:t,userDetailsStore:e,instructorStudentsStore:i}},data(){return{students:[],currentUserId:null}},async created(){this.instructorStudentsStore.instructorStudentsList.length==0&&await this.instructorStudentsStore.getInstructorStudentsList(),this.userDetailsStore.role=="instructor"&&this.getStudents()},methods:{changeUserId(t){this.currentUserId=t.id,this.$emit("changeUserId",t)},getStudents(){var t=[];for(let e=0;e<this.instructorStudentsStore.instructorStudentsList.length;e++)this.instructorStudentsStore.instructorStudentsList[e].instructor_id==this.userDetailsStore.userId&&t.push(this.instructorStudentsStore.instructorStudentsList[e].student_id);for(let e=0;e<this.usersStore.users.length;e++)for(let i=0;i<t.length;i++)this.usersStore.users[e].id==t[i]&&this.students.push(this.usersStore.users[e])}}},y=t=>(L("data-v-5bdac572"),t=t(),$(),t),B={class:"container mt-4"},R={class:"d-flex"},T=["src"],j=["onClick"],E=y(()=>s("hr",{class:"border border-1 opacity-100 w-75 d-none d-md-block"},null,-1)),H=y(()=>s("hr",{class:"border border-1 opacity-100 w-100 d-block d-md-none"},null,-1)),W={class:"d-flex"},F=["src"],O=["onClick"],P=y(()=>s("hr",{class:"border border-1 opacity-100 w-75 d-none d-md-block"},null,-1));function z(t,e,i,c,o,h){return l(),a("div",B,[c.userDetailsStore.role=="admin"?(l(!0),a(g,{key:0},U(c.usersStore.users,r=>(l(),a("div",null,[s("div",R,[r.avatar!=null?(l(),a("img",{key:0,class:"user-avatars",src:r.avatar},null,8,T)):C("",!0),s("button",{class:k(r.id==o.currentUserId?"isCurrentlyChoose":"user-buttons"),onClick:n=>h.changeUserId(r)},v(r.first_name)+" "+v(r.last_name),11,j)]),E,H]))),256)):c.userDetailsStore.role=="instructor"?(l(!0),a(g,{key:1},U(o.students,r=>(l(),a("div",null,[s("div",W,[r.avatar!=null?(l(),a("img",{key:0,class:"user-avatars",src:r.avatar},null,8,F)):C("",!0),s("button",{class:k(r.id==o.currentUserId?"isCurrentlyChoose":"user-buttons"),onClick:n=>h.changeUserId(r)},v(r.first_name)+" "+v(r.last_name),11,O)]),P]))),256)):C("",!0)])}const A=w(Z,[["render",z],["__scopeId","data-v-5bdac572"]]);const q={props:["userId","userRole"],setup(t){const e=b();return e.users.length<1&&e.getUsers(),{usersStore:e}},data(){return{showModal:!1}},computed:{},methods:{}},u=t=>(L("data-v-5cac38fe"),t=t(),$(),t),J={id:"user-information",class:"container mt-4"},Y=u(()=>s("div",{id:"close-popup-btn"},[s("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M0.312625 14.5205L4.83312 9.99999L0.312625 5.49218C0.111396 5.29025 -0.00159545 5.0168 -0.00159545 4.73172C-0.00159545 4.44665 0.111396 4.17319 0.312625 3.97126L3.96282 0.312625C4.16474 0.111396 4.4382 -0.00159545 4.72327 -0.00159545C5.00835 -0.00159545 5.2818 0.111396 5.48373 0.312625L9.99999 4.83312L14.5205 0.312625C14.6204 0.21056 14.7397 0.12947 14.8714 0.0741101C15.003 0.0187502 15.1444 -0.00976563 15.2873 -0.00976562C15.4301 -0.00976563 15.5715 0.0187502 15.7032 0.0741101C15.8349 0.12947 15.9541 0.21056 16.0541 0.312625L19.6874 3.96282C19.8886 4.16474 20.0016 4.4382 20.0016 4.72327C20.0016 5.00835 19.8886 5.2818 19.6874 5.48373L15.1669 9.99999L19.6874 14.5205C19.8883 14.7217 20.0012 14.9944 20.0012 15.2788C20.0012 15.5632 19.8883 15.836 19.6874 16.0372L16.0541 19.6874C15.8529 19.8883 15.5801 20.0012 15.2957 20.0012C15.0113 20.0012 14.7386 19.8883 14.5374 19.6874L9.99999 15.1669L5.49218 19.6874C5.29025 19.8886 5.0168 20.0016 4.73172 20.0016C4.44665 20.0016 4.17319 19.8886 3.97126 19.6874L0.312625 16.0541C0.21056 15.9541 0.12947 15.8349 0.0741101 15.7032C0.0187502 15.5715 -0.00976563 15.4301 -0.00976562 15.2873C-0.00976563 15.1444 0.0187502 15.003 0.0741101 14.8714C0.12947 14.7397 0.21056 14.6204 0.312625 14.5205Z",fill:"white"})])],-1)),G=[Y],K={class:"row"},Q={class:"col-12 col-md-5 col-lg-4 d-flex flex-column"},X=["src"],s1={id:"user-function-btns-row",class:"d-flex justify-content-center mt-3"},e1=u(()=>s("svg",{width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M0.75558 19.3181C0.77635 19.5132 0.87137 19.6928 1.02096 19.8198C1.17055 19.9468 1.36325 20.0114 1.55915 20.0002L5.27701 19.8288L0.398438 15.6145L0.75558 19.3181Z",fill:"white"}),s("path",{d:"M11.8467 2.24484L0.801758 15.0315L5.6802 19.2454L16.7251 6.45877L11.8467 2.24484Z",fill:"white"}),s("path",{d:"M18.2555 3.11796L14.934 0.260817C14.832 0.172259 14.7134 0.104756 14.5852 0.0621907C14.4569 0.0196256 14.3215 0.00283902 14.1868 0.0127967C14.052 0.0227543 13.9205 0.0592596 13.7999 0.120212C13.6793 0.181165 13.572 0.265362 13.484 0.36796L12.4805 1.50725L17.359 5.71439L18.3519 4.56082C18.5289 4.35602 18.6181 4.08969 18.6 3.81958C18.582 3.54948 18.4582 3.29738 18.2555 3.11796Z",fill:"white"})],-1)),t1=u(()=>s("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M0.312625 14.5205L4.83312 9.99999L0.312625 5.49218C0.111396 5.29025 -0.00159545 5.0168 -0.00159545 4.73172C-0.00159545 4.44665 0.111396 4.17319 0.312625 3.97126L3.96282 0.312625C4.16474 0.111396 4.4382 -0.00159545 4.72327 -0.00159545C5.00835 -0.00159545 5.2818 0.111396 5.48373 0.312625L9.99999 4.83312L14.5205 0.312625C14.6204 0.21056 14.7397 0.12947 14.8714 0.0741101C15.003 0.0187502 15.1444 -0.00976563 15.2873 -0.00976562C15.4301 -0.00976563 15.5715 0.0187502 15.7032 0.0741101C15.8349 0.12947 15.9541 0.21056 16.0541 0.312625L19.6874 3.96282C19.8886 4.16474 20.0016 4.4382 20.0016 4.72327C20.0016 5.00835 19.8886 5.2818 19.6874 5.48373L15.1669 9.99999L19.6874 14.5205C19.8883 14.7217 20.0012 14.9944 20.0012 15.2788C20.0012 15.5632 19.8883 15.836 19.6874 16.0372L16.0541 19.6874C15.8529 19.8883 15.5801 20.0012 15.2957 20.0012C15.0113 20.0012 14.7386 19.8883 14.5374 19.6874L9.99999 15.1669L5.49218 19.6874C5.29025 19.8886 5.0168 20.0016 4.73172 20.0016C4.44665 20.0016 4.17319 19.8886 3.97126 19.6874L0.312625 16.0541C0.21056 15.9541 0.12947 15.8349 0.0741101 15.7032C0.0187502 15.5715 -0.00976563 15.4301 -0.00976562 15.2873C-0.00976563 15.1444 0.0187502 15.003 0.0741101 14.8714C0.12947 14.7397 0.21056 14.6204 0.312625 14.5205Z",fill:"white"})],-1)),r1=u(()=>s("svg",{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M10.5 0C8.52219 0 6.58879 0.58649 4.9443 1.6853C3.29981 2.78412 2.01809 4.3459 1.26121 6.17317C0.504333 8.00043 0.306299 10.0111 0.692152 11.9509C1.078 13.8907 2.03041 15.6725 3.42894 17.0711C4.82746 18.4696 6.60929 19.422 8.5491 19.8079C10.4889 20.1937 12.4996 19.9957 14.3268 19.2388C16.1541 18.4819 17.7159 17.2002 18.8147 15.5557C19.9135 13.9112 20.5 11.9778 20.5 10C20.5 7.34784 19.4464 4.8043 17.5711 2.92893C15.6957 1.05357 13.1522 0 10.5 0ZM11.0217 6.10609C11.0636 6.08664 11.1089 6.07571 11.155 6.07394C11.2011 6.07217 11.2471 6.07959 11.2903 6.09578C11.3336 6.11196 11.3731 6.13659 11.4067 6.16821C11.4403 6.19984 11.4673 6.23784 11.4861 6.28C11.4861 6.29913 11.66 6.62783 11.9574 6.62783C12.2548 6.62783 12.4791 6.26261 12.4791 6.25739C12.5232 6.17529 12.598 6.11405 12.6872 6.08714C12.7764 6.06023 12.8727 6.06986 12.9548 6.11391C13.0369 6.15796 13.0981 6.23282 13.125 6.32202C13.1519 6.41123 13.1423 6.50746 13.0983 6.58957C12.9522 6.86435 12.547 7.33044 11.9522 7.33044C11.7142 7.32013 11.4839 7.24329 11.2875 7.10863C11.091 6.97397 10.9363 6.78691 10.8409 6.5687C10.8217 6.52683 10.8111 6.48158 10.8096 6.43558C10.8081 6.38958 10.8157 6.34373 10.8321 6.3007C10.8484 6.25767 10.8731 6.21832 10.9048 6.18491C10.9365 6.1515 10.9744 6.12471 11.0165 6.10609H11.0217ZM8.07392 6.10609C8.11568 6.08691 8.16082 6.07619 8.20675 6.07456C8.25267 6.07294 8.29847 6.08042 8.34148 6.09659C8.3845 6.11276 8.42388 6.1373 8.45736 6.16878C8.49084 6.20026 8.51774 6.23806 8.53653 6.28C8.54696 6.29913 8.71044 6.62783 9.00783 6.62783C9.30522 6.62783 9.52957 6.26261 9.52957 6.25739C9.57362 6.17529 9.64848 6.11405 9.73768 6.08714C9.82688 6.06023 9.92312 6.06986 10.0052 6.11391C10.0873 6.15796 10.1486 6.23282 10.1755 6.32202C10.2024 6.41123 10.1927 6.50746 10.1487 6.58957C10.0026 6.86435 9.59566 7.33044 9.00087 7.33044C8.76298 7.31993 8.53278 7.24301 8.33637 7.10837C8.13995 6.97374 7.98517 6.78679 7.88957 6.5687C7.87055 6.52662 7.8601 6.48117 7.85883 6.43501C7.85756 6.38885 7.86549 6.34291 7.88217 6.29984C7.89884 6.25678 7.92392 6.21747 7.95595 6.18421C7.98797 6.15094 8.0263 6.12438 8.0687 6.10609H8.07392ZM14.6635 6.64C14.5922 6.74783 12.9244 9.28 10.3157 9.28H10.253C7.58696 9.23652 6.36783 6.70609 6.3174 6.59826C6.27773 6.51385 6.27322 6.41714 6.30485 6.32941C6.33649 6.24168 6.40168 6.1701 6.48609 6.13043C6.5705 6.09077 6.66721 6.08626 6.75494 6.11789C6.84268 6.14953 6.91425 6.21472 6.95392 6.29913C6.96435 6.32174 8.04261 8.54087 10.2583 8.57739H10.3104C12.5435 8.57739 14.053 6.28174 14.0652 6.26087C14.0903 6.22204 14.1229 6.18855 14.1609 6.16229C14.199 6.13603 14.2419 6.11753 14.2871 6.10784C14.3323 6.09815 14.379 6.09747 14.4245 6.10582C14.47 6.11417 14.5134 6.1314 14.5522 6.15652C14.591 6.18164 14.6245 6.21417 14.6508 6.25224C14.677 6.2903 14.6955 6.33317 14.7052 6.37839C14.7149 6.42361 14.7156 6.47029 14.7072 6.51578C14.6989 6.56126 14.6816 6.60465 14.6565 6.64348L14.6635 6.64Z",fill:"white"})],-1)),o1={id:"user-form-info",class:"col-12 col-md-6"},n1={class:"mb-3"},i1=u(()=>s("label",{class:"form-label"},"First name",-1)),l1={class:"mb-3"},a1=u(()=>s("label",{class:"form-label"},"Last name",-1)),u1={class:"mb-3"},d1=u(()=>s("label",{class:"form-label"},"Username",-1)),c1={class:"mb-3"},h1=u(()=>s("label",{class:"form-label"},"Email",-1)),_1={class:"mb-3"},m1=u(()=>s("label",{class:"form-label"},"Role",-1)),C1={key:0,class:"mb-3"},p1=u(()=>s("label",{class:"form-label"},"Instructor",-1)),f1={key:0},v1={id:"myModal",class:"modal"},g1={class:"modal-content"},S1=u(()=>s("p",null,"Are you sure you want to delete this user?",-1)),b1={style:{display:"flex",gap:"10px"}};function w1(t,e,i,c,o,h){const r=f("router-link");return l(),a(g,null,[s("div",J,[s("div",{class:"flex-row-reverse d-flex d-md-none align-items-end mb-2",onClick:e[0]||(e[0]=n=>this.$parent.showDetails=!1)},G),s("div",K,[s("div",Q,[s("img",{id:"user-avatar",src:this.$parent.user.avatar},null,8,X),s("div",s1,[d(r,{to:"/users/edit/"+this.$parent.user.id,class:"btn purple-btn"},{default:S(()=>[p(" Edit  "),e1]),_:1},8,["to"]),p("   "),s("button",{class:"btn red-btn",onClick:e[1]||(e[1]=n=>o.showModal=!0)},[p(" Delete  "),t1])]),i.userRole=="student"?(l(),V(r,{key:0,to:this.$parent.user.id+"/skill-tree",class:"btn green-btn mx-auto mt-3"},{default:S(()=>[p(" Skill tree "),r1]),_:1},8,["to"])):C("",!0)]),s("div",o1,[s("div",n1,[i1,_(s("input",{class:"form-control user-input-information",type:"text","onUpdate:modelValue":e[2]||(e[2]=n=>this.$parent.user.firstName=n),disabled:""},null,512),[[m,this.$parent.user.firstName]])]),s("div",l1,[a1,_(s("input",{class:"form-control user-input-information",type:"text","onUpdate:modelValue":e[3]||(e[3]=n=>this.$parent.user.lastName=n),disabled:""},null,512),[[m,this.$parent.user.lastName]])]),s("div",u1,[d1,_(s("input",{class:"form-control user-input-information",type:"text","onUpdate:modelValue":e[4]||(e[4]=n=>this.$parent.user.username=n),disabled:""},null,512),[[m,this.$parent.user.username]])]),s("div",c1,[h1,_(s("input",{class:"form-control user-input-information",type:"text","onUpdate:modelValue":e[5]||(e[5]=n=>this.$parent.user.email=n),disabled:""},null,512),[[m,this.$parent.user.email]])]),s("div",_1,[m1,_(s("input",{class:"form-control user-input-information",type:"text","onUpdate:modelValue":e[6]||(e[6]=n=>this.$parent.user.role=n),disabled:""},null,512),[[m,this.$parent.user.role]])]),this.$parent.user.role=="student"?(l(),a("div",C1,[p1,_(s("input",{class:"form-control user-input-information",type:"text","onUpdate:modelValue":e[7]||(e[7]=n=>this.$parent.instructor=n),disabled:""},null,512),[[m,this.$parent.instructor]])])):C("",!0)])])]),o.showModal?(l(),a("div",f1,[s("div",v1,[s("div",g1,[S1,s("div",b1,[s("button",{type:"button",class:"btn btn-danger",onClick:e[8]||(e[8]=n=>{c.usersStore.deleteUser(i.userId),o.showModal=!1,this.$parent.showDetails=!1,this.$parent.changeUserToDefault()})}," Yes "),s("button",{type:"button",class:"btn btn-dark",onClick:e[9]||(e[9]=n=>o.showModal=!1)}," No ")])])])])):C("",!0)],64)}const L1=w(q,[["render",w1],["__scopeId","data-v-5cac38fe"]]);const $1={props:["userId"],setup(){const t=b();return t.users.length<1&&t.getUsers(),{usersStore:t}},data(){return{message:""}},computed:{},methods:{SendMessage(t){const e={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:this.message})};var i="/users/"+this.userId+"/edit-message";fetch(i,e).then(()=>{this.message="",alert("Message sent")})}}},y1=t=>(L("data-v-4f417756"),t=t(),$(),t),I1={id:"message-container",class:"container mt-lg-3"},x1=y1(()=>s("label",{class:"form-label"},"Personal Message",-1));function U1(t,e,i,c,o,h){return l(),a("div",I1,[x1,_(s("textarea",{"onUpdate:modelValue":e[0]||(e[0]=r=>o.message=r),class:"form-control",rows:"4",placeholder:"Type here..."},null,512),[[m,o.message]]),s("button",{class:"btn green-btn",onClick:e[1]||(e[1]=r=>h.SendMessage(i.userId))},"Send")])}const k1=w($1,[["render",U1],["__scopeId","data-v-4f417756"]]),M1="/images/banners/students-banner.png";const D1={setup(){const t=b(),e=M();return{usersStore:t,instructorStudentsStore:e}},data(){return{user:{id:null,firstName:null,lastName:null,username:null,avatar:null,role:null},instructor:null,showDetails:!1}},components:{UsersList:A,UserDetails:L1,WriteMessage:k1},async created(){this.usersStore.users.length<1&&await this.usersStore.getUsers(),this.user.id=this.usersStore.users[0].id,this.user.firstName=this.usersStore.users[0].first_name,this.user.lastName=this.usersStore.users[0].last_name,this.user.username=this.usersStore.users[0].username,this.user.email=this.usersStore.users[0].email,this.user.avatar=this.usersStore.users[0].avatar,this.user.role=this.usersStore.users[0].role,await this.instructorStudentsStore.getInstructorStudentsList()},methods:{changeUserToDefault(){this.user.id=this.usersStore.users[0].id,this.user.firstName=this.usersStore.users[0].first_name,this.user.lastName=this.usersStore.users[0].last_name,this.user.username=this.usersStore.users[0].username,this.user.email=this.usersStore.users[0].email,this.user.avatar=this.usersStore.users[0].avatar,this.user.role=this.usersStore.users[0].role},changeUserId(t){this.user.id=t.id,this.user.firstName=t.first_name,this.user.lastName=t.last_name,this.user.username=t.username,this.user.email=t.email,this.user.avatar=t.avatar,this.user.role=t.role,this.showDetails=!0,this.user.role=="student"&&this.getInstructor()},turnOffDetailsPopup(){},getInstructor(){var t;for(let e=0;e<this.instructorStudentsStore.instructorStudentsList.length;e++)this.instructorStudentsStore.instructorStudentsList[e].student_id==this.user.id&&(t=this.instructorStudentsStore.instructorStudentsList[e].instructor_id);for(let e=0;e<this.usersStore.users.length;e++)this.usersStore.users[e].id==t&&(this.instructor=this.usersStore.users[e].username)}}},N1=s("div",{id:"banner"},[s("img",{src:M1,class:"img-fluid"})],-1),V1={id:"first-content-row",class:"d-flex justify-content-between"},Z1=s("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"white"})],-1),B1={id:"user-container",class:"container-fluid"},R1={class:"row position-relative"},T1={class:"col-lg-4 col-md-5"},j1={class:"col-md-7 d-none d-md-block"},E1={class:"row user-form-data-row"},H1={class:"row user-form-data-row"},W1={key:0,class:"col-md-7 d-block d-md-none",id:"user-detail-section"},F1={class:"row"},O1={class:"row"};function P1(t,e,i,c,o,h){const r=f("router-link"),n=f("UsersList"),I=f("UserDetails"),x=f("WriteMessage");return l(),a(g,null,[N1,s("div",V1,[d(r,{class:"btn purple-btn",to:"/users/add"},{default:S(()=>[p("Add  "),Z1]),_:1}),d(r,{class:"btn purple-btn",to:"/user-skills/edit/"+o.user.id},{default:S(()=>[p("Edit Skill Mastery ")]),_:1},8,["to"])]),s("div",B1,[s("div",R1,[s("div",T1,[d(n,{onChangeUserId:e[0]||(e[0]=D=>h.changeUserId(D))})]),s("div",j1,[s("div",E1,[d(I,{userId:o.user.id,userRole:o.user.role},null,8,["userId","userRole"])]),s("div",H1,[d(x,{userId:o.user.id},null,8,["userId"])])]),o.showDetails?(l(),a("div",W1,[s("div",F1,[d(I,{userId:o.user.id,userRole:o.user.role},null,8,["userId","userRole"])]),s("div",O1,[d(x,{userId:o.user.id},null,8,["userId"])])])):C("",!0)])])],64)}const J1=w(D1,[["render",P1]]);export{J1 as default};
