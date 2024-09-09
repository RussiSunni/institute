import{_ as x,k as D,l as U,r as b,o,c as i,F as w,y as g,b as s,a as l,A as y,t as L,h as f,i as p,m as _,p as $,e as I,w as m,x as C,d as k}from"./main-14246fdc.js";import{u as M}from"./InstructorStudentsStore-25ea2a07.js";const V={setup(){const t=D(),e=U();return t.users.length<1&&t.getUsers(),{usersStore:t,userDetailsStore:e}},data(){return{currentUserId:null}},async created(){},methods:{changeUserId(t){this.currentUserId=t.id,this.$emit("changeUserId",t)}}},v=t=>($("data-v-c2173cf1"),t=t(),I(),t),R={class:"container mt-4"},Z={class:"d-flex"},B=["src"],A=["onClick"],T=v(()=>s("hr",{class:"border border-1 opacity-100 w-75 d-none d-md-block"},null,-1)),j=v(()=>s("hr",{class:"border border-1 opacity-100 w-100 d-block d-md-none"},null,-1)),H={class:"d-flex"},E=["src"],F=["onClick"],Y=v(()=>s("hr",{class:"border border-1 opacity-100 w-75 d-none d-md-block"},null,-1)),z=v(()=>s("hr",{class:"border border-1 opacity-100 w-100 d-block d-md-none"},null,-1)),q={class:"d-flex"},G=["src"],J=["onClick"],K=v(()=>s("hr",{class:"border border-1 opacity-100 w-75 d-none d-md-block"},null,-1)),O=v(()=>s("hr",{class:"border border-1 opacity-100 w-100 d-block d-md-none"},null,-1));function P(t,e,u,n,a,h){const c=b("RouterLink");return o(),i("div",R,[n.userDetailsStore.role=="admin"?(o(!0),i(w,{key:0},g(n.usersStore.users,r=>(o(),i("div",null,[s("div",Z,[r.avatar!=null?(o(),i("img",{key:0,class:"user-avatars",src:r.avatar},null,8,B)):l("",!0),s("button",{class:y(r.id==a.currentUserId?"isCurrentlyChoose":"user-buttons"),onClick:S=>h.changeUserId(r)},L(r.username),11,A)]),T,j]))),256)):n.userDetailsStore.role=="instructor"?(o(!0),i(w,{key:1},g(t.$parent.students,r=>(o(),i("div",null,[s("div",H,[r.avatar!=null?(o(),i("img",{key:0,class:"user-avatars",src:r.avatar},null,8,E)):l("",!0),s("button",{class:y(r.id==a.currentUserId?"isCurrentlyChoose":"user-buttons"),onClick:S=>h.changeUserId(r)},L(r.username),11,F)]),Y,z]))),256)):l("",!0),n.userDetailsStore.role=="instructor"?(o(),f(c,{key:2,to:"/users/add-student",class:"d-block mb-4 btn purple-btn"},{default:p(()=>[_(" Add Student ")]),_:1})):l("",!0),n.userDetailsStore.role=="editor"?(o(!0),i(w,{key:3},g(t.$parent.editors,r=>(o(),i("div",null,[s("div",q,[r.avatar!=null?(o(),i("img",{key:0,class:"user-avatars",src:r.avatar},null,8,G)):l("",!0),s("button",{class:y(r.id==a.currentUserId?"isCurrentlyChoose":"user-buttons"),onClick:S=>h.changeUserId(r)},L(r.username),11,J)]),K,O]))),256)):l("",!0)])}const Q=x(V,[["render",P],["__scopeId","data-v-c2173cf1"]]);const W={props:["userId","userRole"],setup(){const t=D(),e=U();return t.users.length<1&&t.getUsers(),{usersStore:t,userDetailsStore:e}},data(){return{showModal:!1}},methods:{}},d=t=>($("data-v-dfed9d2b"),t=t(),I(),t),X={id:"user-information",class:"container mt-4"},s1=d(()=>s("div",{id:"close-popup-btn"},[s("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M0.312625 14.5205L4.83312 9.99999L0.312625 5.49218C0.111396 5.29025 -0.00159545 5.0168 -0.00159545 4.73172C-0.00159545 4.44665 0.111396 4.17319 0.312625 3.97126L3.96282 0.312625C4.16474 0.111396 4.4382 -0.00159545 4.72327 -0.00159545C5.00835 -0.00159545 5.2818 0.111396 5.48373 0.312625L9.99999 4.83312L14.5205 0.312625C14.6204 0.21056 14.7397 0.12947 14.8714 0.0741101C15.003 0.0187502 15.1444 -0.00976563 15.2873 -0.00976562C15.4301 -0.00976563 15.5715 0.0187502 15.7032 0.0741101C15.8349 0.12947 15.9541 0.21056 16.0541 0.312625L19.6874 3.96282C19.8886 4.16474 20.0016 4.4382 20.0016 4.72327C20.0016 5.00835 19.8886 5.2818 19.6874 5.48373L15.1669 9.99999L19.6874 14.5205C19.8883 14.7217 20.0012 14.9944 20.0012 15.2788C20.0012 15.5632 19.8883 15.836 19.6874 16.0372L16.0541 19.6874C15.8529 19.8883 15.5801 20.0012 15.2957 20.0012C15.0113 20.0012 14.7386 19.8883 14.5374 19.6874L9.99999 15.1669L5.49218 19.6874C5.29025 19.8886 5.0168 20.0016 4.73172 20.0016C4.44665 20.0016 4.17319 19.8886 3.97126 19.6874L0.312625 16.0541C0.21056 15.9541 0.12947 15.8349 0.0741101 15.7032C0.0187502 15.5715 -0.00976563 15.4301 -0.00976562 15.2873C-0.00976563 15.1444 0.0187502 15.003 0.0741101 14.8714C0.12947 14.7397 0.21056 14.6204 0.312625 14.5205Z",fill:"white"})])],-1)),e1=[s1],t1={class:"row"},r1={class:"col-12 col-md-5 col-lg-4 d-flex flex-column"},o1=["src"],i1={id:"user-function-btns-row",class:"d-flex justify-content-center mt-3"},n1=d(()=>s("svg",{width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M0.75558 19.3181C0.77635 19.5132 0.87137 19.6928 1.02096 19.8198C1.17055 19.9468 1.36325 20.0114 1.55915 20.0002L5.27701 19.8288L0.398438 15.6145L0.75558 19.3181Z",fill:"white"}),s("path",{d:"M11.8467 2.24484L0.801758 15.0315L5.6802 19.2454L16.7251 6.45877L11.8467 2.24484Z",fill:"white"}),s("path",{d:"M18.2555 3.11796L14.934 0.260817C14.832 0.172259 14.7134 0.104756 14.5852 0.0621907C14.4569 0.0196256 14.3215 0.00283902 14.1868 0.0127967C14.052 0.0227543 13.9205 0.0592596 13.7999 0.120212C13.6793 0.181165 13.572 0.265362 13.484 0.36796L12.4805 1.50725L17.359 5.71439L18.3519 4.56082C18.5289 4.35602 18.6181 4.08969 18.6 3.81958C18.582 3.54948 18.4582 3.29738 18.2555 3.11796Z",fill:"white"})],-1)),l1={key:1},a1=d(()=>s("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M0.312625 14.5205L4.83312 9.99999L0.312625 5.49218C0.111396 5.29025 -0.00159545 5.0168 -0.00159545 4.73172C-0.00159545 4.44665 0.111396 4.17319 0.312625 3.97126L3.96282 0.312625C4.16474 0.111396 4.4382 -0.00159545 4.72327 -0.00159545C5.00835 -0.00159545 5.2818 0.111396 5.48373 0.312625L9.99999 4.83312L14.5205 0.312625C14.6204 0.21056 14.7397 0.12947 14.8714 0.0741101C15.003 0.0187502 15.1444 -0.00976563 15.2873 -0.00976562C15.4301 -0.00976563 15.5715 0.0187502 15.7032 0.0741101C15.8349 0.12947 15.9541 0.21056 16.0541 0.312625L19.6874 3.96282C19.8886 4.16474 20.0016 4.4382 20.0016 4.72327C20.0016 5.00835 19.8886 5.2818 19.6874 5.48373L15.1669 9.99999L19.6874 14.5205C19.8883 14.7217 20.0012 14.9944 20.0012 15.2788C20.0012 15.5632 19.8883 15.836 19.6874 16.0372L16.0541 19.6874C15.8529 19.8883 15.5801 20.0012 15.2957 20.0012C15.0113 20.0012 14.7386 19.8883 14.5374 19.6874L9.99999 15.1669L5.49218 19.6874C5.29025 19.8886 5.0168 20.0016 4.73172 20.0016C4.44665 20.0016 4.17319 19.8886 3.97126 19.6874L0.312625 16.0541C0.21056 15.9541 0.12947 15.8349 0.0741101 15.7032C0.0187502 15.5715 -0.00976563 15.4301 -0.00976562 15.2873C-0.00976563 15.1444 0.0187502 15.003 0.0741101 14.8714C0.12947 14.7397 0.21056 14.6204 0.312625 14.5205Z",fill:"white"})],-1)),u1=d(()=>s("svg",{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M10.5 0C8.52219 0 6.58879 0.58649 4.9443 1.6853C3.29981 2.78412 2.01809 4.3459 1.26121 6.17317C0.504333 8.00043 0.306299 10.0111 0.692152 11.9509C1.078 13.8907 2.03041 15.6725 3.42894 17.0711C4.82746 18.4696 6.60929 19.422 8.5491 19.8079C10.4889 20.1937 12.4996 19.9957 14.3268 19.2388C16.1541 18.4819 17.7159 17.2002 18.8147 15.5557C19.9135 13.9112 20.5 11.9778 20.5 10C20.5 7.34784 19.4464 4.8043 17.5711 2.92893C15.6957 1.05357 13.1522 0 10.5 0ZM11.0217 6.10609C11.0636 6.08664 11.1089 6.07571 11.155 6.07394C11.2011 6.07217 11.2471 6.07959 11.2903 6.09578C11.3336 6.11196 11.3731 6.13659 11.4067 6.16821C11.4403 6.19984 11.4673 6.23784 11.4861 6.28C11.4861 6.29913 11.66 6.62783 11.9574 6.62783C12.2548 6.62783 12.4791 6.26261 12.4791 6.25739C12.5232 6.17529 12.598 6.11405 12.6872 6.08714C12.7764 6.06023 12.8727 6.06986 12.9548 6.11391C13.0369 6.15796 13.0981 6.23282 13.125 6.32202C13.1519 6.41123 13.1423 6.50746 13.0983 6.58957C12.9522 6.86435 12.547 7.33044 11.9522 7.33044C11.7142 7.32013 11.4839 7.24329 11.2875 7.10863C11.091 6.97397 10.9363 6.78691 10.8409 6.5687C10.8217 6.52683 10.8111 6.48158 10.8096 6.43558C10.8081 6.38958 10.8157 6.34373 10.8321 6.3007C10.8484 6.25767 10.8731 6.21832 10.9048 6.18491C10.9365 6.1515 10.9744 6.12471 11.0165 6.10609H11.0217ZM8.07392 6.10609C8.11568 6.08691 8.16082 6.07619 8.20675 6.07456C8.25267 6.07294 8.29847 6.08042 8.34148 6.09659C8.3845 6.11276 8.42388 6.1373 8.45736 6.16878C8.49084 6.20026 8.51774 6.23806 8.53653 6.28C8.54696 6.29913 8.71044 6.62783 9.00783 6.62783C9.30522 6.62783 9.52957 6.26261 9.52957 6.25739C9.57362 6.17529 9.64848 6.11405 9.73768 6.08714C9.82688 6.06023 9.92312 6.06986 10.0052 6.11391C10.0873 6.15796 10.1486 6.23282 10.1755 6.32202C10.2024 6.41123 10.1927 6.50746 10.1487 6.58957C10.0026 6.86435 9.59566 7.33044 9.00087 7.33044C8.76298 7.31993 8.53278 7.24301 8.33637 7.10837C8.13995 6.97374 7.98517 6.78679 7.88957 6.5687C7.87055 6.52662 7.8601 6.48117 7.85883 6.43501C7.85756 6.38885 7.86549 6.34291 7.88217 6.29984C7.89884 6.25678 7.92392 6.21747 7.95595 6.18421C7.98797 6.15094 8.0263 6.12438 8.0687 6.10609H8.07392ZM14.6635 6.64C14.5922 6.74783 12.9244 9.28 10.3157 9.28H10.253C7.58696 9.23652 6.36783 6.70609 6.3174 6.59826C6.27773 6.51385 6.27322 6.41714 6.30485 6.32941C6.33649 6.24168 6.40168 6.1701 6.48609 6.13043C6.5705 6.09077 6.66721 6.08626 6.75494 6.11789C6.84268 6.14953 6.91425 6.21472 6.95392 6.29913C6.96435 6.32174 8.04261 8.54087 10.2583 8.57739H10.3104C12.5435 8.57739 14.053 6.28174 14.0652 6.26087C14.0903 6.22204 14.1229 6.18855 14.1609 6.16229C14.199 6.13603 14.2419 6.11753 14.2871 6.10784C14.3323 6.09815 14.379 6.09747 14.4245 6.10582C14.47 6.11417 14.5134 6.1314 14.5522 6.15652C14.591 6.18164 14.6245 6.21417 14.6508 6.25224C14.677 6.2903 14.6955 6.33317 14.7052 6.37839C14.7149 6.42361 14.7156 6.47029 14.7072 6.51578C14.6989 6.56126 14.6816 6.60465 14.6565 6.64348L14.6635 6.64Z",fill:"white"})],-1)),d1={class:"d-flex justify-content-center mt-2"},c1={id:"user-form-info",class:"col-12 col-md-6"},h1={class:"mb-3"},_1=d(()=>s("label",{class:"form-label"},"First name",-1)),m1={class:"mb-3"},C1=d(()=>s("label",{class:"form-label"},"Last name",-1)),f1={class:"mb-3"},p1=d(()=>s("label",{class:"form-label"},"Username",-1)),v1={class:"mb-3"},S1=d(()=>s("label",{class:"form-label"},"Email",-1)),b1={key:0,class:"mb-3"},w1=d(()=>s("label",{class:"form-label"},"Role",-1)),g1={key:1,class:"mb-3"},y1=d(()=>s("label",{class:"form-label"},"Instructor",-1)),L1={key:0},k1={id:"myModal",class:"modal"},x1={class:"modal-content"},D1=d(()=>s("p",null,"Are you sure you want to delete this user?",-1)),U1={style:{display:"flex",gap:"10px"}};function $1(t,e,u,n,a,h){const c=b("router-link");return o(),i(w,null,[s("div",X,[s("div",{class:"flex-row-reverse d-flex d-md-none align-items-end mb-2",onClick:e[0]||(e[0]=r=>this.$parent.showDetails=!1)},e1),s("div",t1,[s("div",r1,[s("img",{id:"user-avatar",src:this.$parent.user.avatar},null,8,o1),s("div",i1,[n.userDetailsStore.role=="admin"?(o(),f(c,{key:0,to:"/users/edit/"+this.$parent.user.id,class:"btn purple-btn"},{default:p(()=>[_(" Edit  "),n1]),_:1},8,["to"])):l("",!0),n.userDetailsStore.role=="admin"?(o(),i("span",l1,"  ")):l("",!0),n.userDetailsStore.role=="admin"?(o(),i("button",{key:2,class:"btn red-btn",onClick:e[1]||(e[1]=r=>a.showModal=!0)},[_(" Delete  "),a1])):l("",!0)]),u.userRole=="student"?(o(),f(c,{key:0,to:`/student/${this.$parent.user.id}/skill-tree`,class:"btn green-btn mx-auto mt-3"},{default:p(()=>[_(" Skill tree "),u1]),_:1},8,["to"])):l("",!0),u.userRole=="student"?(o(),f(c,{key:1,to:"/student/"+this.$parent.user.id+"/skills",class:"btn green-btn mx-auto mt-3"},{default:p(()=>[_(" Skill list ")]),_:1},8,["to"])):l("",!0),s("div",d1,[n.userDetailsStore.role=="admin"||n.userDetailsStore.role=="editor"?(o(),f(c,{key:0,target:"_blank",to:"/users/activity-report/"+this.$parent.user.id,class:"btn purple-btn"},{default:p(()=>[_(" Activity Report ")]),_:1},8,["to"])):l("",!0)])]),s("div",c1,[s("div",h1,[_1,m(s("input",{class:"form-control user-input-information",type:"text","onUpdate:modelValue":e[2]||(e[2]=r=>this.$parent.user.firstName=r),disabled:""},null,512),[[C,this.$parent.user.firstName]])]),s("div",m1,[C1,m(s("input",{class:"form-control user-input-information",type:"text","onUpdate:modelValue":e[3]||(e[3]=r=>this.$parent.user.lastName=r),disabled:""},null,512),[[C,this.$parent.user.lastName]])]),s("div",f1,[p1,m(s("input",{class:"form-control user-input-information",type:"text","onUpdate:modelValue":e[4]||(e[4]=r=>this.$parent.user.username=r),disabled:""},null,512),[[C,this.$parent.user.username]])]),s("div",v1,[S1,m(s("input",{class:"form-control user-input-information",type:"text","onUpdate:modelValue":e[5]||(e[5]=r=>this.$parent.user.email=r),disabled:""},null,512),[[C,this.$parent.user.email]])]),n.userDetailsStore.role=="admin"?(o(),i("div",b1,[w1,m(s("input",{class:"form-control user-input-information",type:"text","onUpdate:modelValue":e[6]||(e[6]=r=>this.$parent.user.role=r),disabled:""},null,512),[[C,this.$parent.user.role]])])):l("",!0),this.$parent.user.role=="student"&&n.userDetailsStore.role=="admin"?(o(),i("div",g1,[y1,m(s("input",{class:"form-control user-input-information",type:"text","onUpdate:modelValue":e[7]||(e[7]=r=>this.$parent.instructor=r),disabled:""},null,512),[[C,this.$parent.instructor]])])):l("",!0)])])]),a.showModal?(o(),i("div",L1,[s("div",k1,[s("div",x1,[D1,s("div",U1,[s("button",{type:"button",class:"btn btn-danger",onClick:e[8]||(e[8]=r=>{n.usersStore.deleteUser(u.userId),a.showModal=!1,this.$parent.showDetails=!1,this.$parent.changeUserToDefault()})}," Yes "),s("button",{type:"button",class:"btn btn-dark",onClick:e[9]||(e[9]=r=>a.showModal=!1)}," No ")])])])])):l("",!0)],64)}const I1=x(W,[["render",$1],["__scopeId","data-v-dfed9d2b"]]),N1="/images/banners/students-banner.png";const M1={setup(){const t=D(),e=M(),u=U();return{usersStore:t,instructorStudentsStore:e,userDetailsStore:u}},data(){return{user:{id:null,firstName:null,lastName:null,username:null,avatar:null,role:null},instructor:null,showDetails:!1,students:[],showUserInfo:!0}},components:{UsersList:Q,UserDetails:I1},async created(){this.usersStore.users.length<1&&await this.usersStore.getUsers(),await this.instructorStudentsStore.getInstructorStudentsList(),this.userDetailsStore.role=="admin"?(this.user.id=this.usersStore.users[0].id,this.user.firstName=this.usersStore.users[0].first_name,this.user.lastName=this.usersStore.users[0].last_name,this.user.username=this.usersStore.users[0].username,this.user.email=this.usersStore.users[0].email,this.user.avatar=this.usersStore.users[0].avatar,this.user.role=this.usersStore.users[0].role):this.userDetailsStore.role=="instructor"?(await this.getStudents(),this.user.id=this.students[0].id,this.user.firstName=this.students[0].first_name,this.user.lastName=this.students[0].last_name,this.user.username=this.students[0].username,this.user.email=this.students[0].email,this.user.avatar=this.students[0].avatar):this.userDetailsStore.role=="editor"&&(this.user.id=this.editors[0].id,this.user.firstName=this.editors[0].first_name,this.user.lastName=this.editors[0].last_name,this.user.username=this.editors[0].username,this.user.email=this.editors[0].email,this.user.avatar=this.editors[0].avatar)},computed:{editors(){let t=[];return t=this.usersStore.users.filter(e=>e.role=="editor"),t}},methods:{changeUserToDefault(){this.user.id=this.usersStore.users[0].id,this.user.firstName=this.usersStore.users[0].first_name,this.user.lastName=this.usersStore.users[0].last_name,this.user.username=this.usersStore.users[0].username,this.user.email=this.usersStore.users[0].email,this.user.avatar=this.usersStore.users[0].avatar,this.user.role=this.usersStore.users[0].role},changeUserId(t){this.user.id=t.id,this.user.firstName=t.first_name,this.user.lastName=t.last_name,this.user.username=t.username,this.user.email=t.email,this.user.avatar=t.avatar,this.user.role=t.role,this.showDetails=!0,this.user.role=="student"&&this.getInstructor()},getInstructor(){var t;for(let e=0;e<this.instructorStudentsStore.instructorStudentsList.length;e++)this.instructorStudentsStore.instructorStudentsList[e].student_id==this.user.id&&(t=this.instructorStudentsStore.instructorStudentsList[e].instructor_id);for(let e=0;e<this.usersStore.users.length;e++)this.usersStore.users[e].id==t&&(this.instructor=this.usersStore.users[e].username)},async getStudents(){var t=[];for(let e=0;e<this.instructorStudentsStore.instructorStudentsList.length;e++)this.instructorStudentsStore.instructorStudentsList[e].instructor_id==this.userDetailsStore.userId&&t.push(this.instructorStudentsStore.instructorStudentsList[e].student_id);for(let e=0;e<this.usersStore.users.length;e++)for(let u=0;u<t.length;u++)this.usersStore.users[e].id==t[u]&&this.students.push(this.usersStore.users[e])}}},V1=s("div",{id:"banner"},[s("img",{src:N1,class:"w-100 img-fluid"})],-1),R1={key:0,id:"first-content-row",class:"d-flex justify-content-between"},Z1=s("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"white"})],-1),B1={id:"user-container",class:"container-fluid"},A1={class:"row position-relative"},T1={class:"col-lg-4 col-md-5"},j1={class:"col-md-7 d-none d-md-block"},H1={class:"row user-form-data-row"},E1={key:1},F1={key:0,class:"text-muted py-5"},Y1={key:1,class:"text-muted py-5"},z1={key:0,class:"col-md-7 d-block d-md-none",id:"user-detail-section"},q1={class:"row"};function G1(t,e,u,n,a,h){const c=b("router-link"),r=b("UsersList"),S=b("UserDetails");return o(),i(w,null,[V1,n.userDetailsStore.role=="admin"?(o(),i("div",R1,[k(c,{class:"btn purple-btn",to:"/users/add"},{default:p(()=>[_("Add  "),Z1]),_:1})])):l("",!0),s("div",B1,[s("div",A1,[s("div",T1,[k(r,{onChangeUserId:e[0]||(e[0]=N=>h.changeUserId(N))})]),s("div",j1,[s("div",H1,[n.userDetailsStore.role=="admin"||n.userDetailsStore.role=="instructor"&&a.students.length>0||n.userDetailsStore.role=="editor"&&h.editors.length>0?(o(),f(S,{key:0,userId:a.user.id,userRole:a.user.role},null,8,["userId","userRole"])):(o(),i("div",E1,[n.userDetailsStore.role=="instructor"?(o(),i("h1",F1," You have no students ")):n.userDetailsStore.role=="editor"?(o(),i("h1",Y1," There are no other editors currently ")):l("",!0)]))])]),a.showDetails?(o(),i("div",z1,[s("div",q1,[k(S,{userId:a.user.id,userRole:a.user.role},null,8,["userId","userRole"])])])):l("",!0)])])],64)}const O1=x(M1,[["render",G1]]);export{O1 as default};
