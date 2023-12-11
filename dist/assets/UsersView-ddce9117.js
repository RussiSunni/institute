import{u as C}from"./UsersStore-f32cde54.js";import{_ as b,u as N,o as i,c as a,F as L,r as I,a as t,n as g,t as S,p as $,b as w,e as f,f as m,g as v,h as p,w as _,l as h}from"./main-3bca7bbf.js";import{u as x}from"./InstructorStudentsStore-d4cab039.js";const D={setup(){const e=C(),s=N(),o=x();return e.users.length<1&&e.getUsers(),{usersStore:e,userDetailsStore:s,instructorStudentsStore:o}},data(){return{students:[]}},async created(){this.instructorStudentsStore.instructorStudentsList.length==0&&await this.instructorStudentsStore.getInstructorStudentsList(),this.userDetailsStore.role=="instructor"&&this.getStudents()},methods:{changeUserId(e){this.$emit("changeUserId",e),this.userDetailsStore.role=="instructor"&&this.getStudents()},getStudents(){var e=[];for(let s=0;s<this.instructorStudentsStore.instructorStudentsList.length;s++)this.instructorStudentsStore.instructorStudentsList[s].instructor_id==this.userDetailsStore.userId&&e.push(this.instructorStudentsStore.instructorStudentsList[s].student_id);console.log(e);for(let s=0;s<this.usersStore.users.length;s++)for(let o=0;o<e.length;o++)this.usersStore.users[s].id==e[o]&&this.students.push(this.usersStore.users[s])}}},U=e=>($("data-v-b4ce925e"),e=e(),w(),e),V={class:"container mt-3"},B={class:"d-flex"},Z=["src"],j=["onClick"],E=U(()=>t("hr",null,null,-1)),T={class:"d-flex"},W=["src"],F=["onClick"],O=U(()=>t("hr",null,null,-1));function P(e,s,o,d,l,c){return i(),a("div",V,[d.userDetailsStore.role=="admin"?(i(!0),a(L,{key:0},I(d.usersStore.users,r=>(i(),a("div",null,[t("div",B,[r.avatar!=null?(i(),a("img",{key:0,class:"user-avatars",src:r.avatar,height:"40"},null,8,Z)):g("",!0),t("button",{class:"user-buttons",onClick:n=>c.changeUserId(r)},S(r.first_name)+" "+S(r.last_name),9,j)]),E]))),256)):d.userDetailsStore.role=="instructor"?(i(!0),a(L,{key:1},I(l.students,r=>(i(),a("div",null,[t("div",T,[r.avatar!=null?(i(),a("img",{key:0,class:"user-avatars",src:r.avatar,height:"40"},null,8,W)):g("",!0),t("button",{class:"user-buttons",onClick:n=>c.changeUserId(r)},S(r.first_name)+" "+S(r.last_name),9,F)]),O]))),256)):g("",!0)])}const q=b(D,[["render",P],["__scopeId","data-v-b4ce925e"]]);const A={props:["userId"],setup(e){const s=C();return s.users.length<1&&s.getUsers(),{usersStore:s}},data(){return{}},computed:{},methods:{}},u=e=>($("data-v-adaf3f9b"),e=e(),w(),e),J={id:"user-information",class:"container mt-3"},R={class:"row"},z={class:"col-6 d-flex flex-column"},G=["src"],H={class:"d-flex justify-content-center"},K=u(()=>t("svg",{width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M0.75558 19.3181C0.77635 19.5132 0.87137 19.6928 1.02096 19.8198C1.17055 19.9468 1.36325 20.0114 1.55915 20.0002L5.27701 19.8288L0.398438 15.6145L0.75558 19.3181Z",fill:"white"}),t("path",{d:"M11.8467 2.24484L0.801758 15.0315L5.6802 19.2454L16.7251 6.45877L11.8467 2.24484Z",fill:"white"}),t("path",{d:"M18.2555 3.11796L14.934 0.260817C14.832 0.172259 14.7134 0.104756 14.5852 0.0621907C14.4569 0.0196256 14.3215 0.00283902 14.1868 0.0127967C14.052 0.0227543 13.9205 0.0592596 13.7999 0.120212C13.6793 0.181165 13.572 0.265362 13.484 0.36796L12.4805 1.50725L17.359 5.71439L18.3519 4.56082C18.5289 4.35602 18.6181 4.08969 18.6 3.81958C18.582 3.54948 18.4582 3.29738 18.2555 3.11796Z",fill:"white"})],-1)),Q=u(()=>t("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M0.312625 14.5205L4.83312 9.99999L0.312625 5.49218C0.111396 5.29025 -0.00159545 5.0168 -0.00159545 4.73172C-0.00159545 4.44665 0.111396 4.17319 0.312625 3.97126L3.96282 0.312625C4.16474 0.111396 4.4382 -0.00159545 4.72327 -0.00159545C5.00835 -0.00159545 5.2818 0.111396 5.48373 0.312625L9.99999 4.83312L14.5205 0.312625C14.6204 0.21056 14.7397 0.12947 14.8714 0.0741101C15.003 0.0187502 15.1444 -0.00976563 15.2873 -0.00976562C15.4301 -0.00976563 15.5715 0.0187502 15.7032 0.0741101C15.8349 0.12947 15.9541 0.21056 16.0541 0.312625L19.6874 3.96282C19.8886 4.16474 20.0016 4.4382 20.0016 4.72327C20.0016 5.00835 19.8886 5.2818 19.6874 5.48373L15.1669 9.99999L19.6874 14.5205C19.8883 14.7217 20.0012 14.9944 20.0012 15.2788C20.0012 15.5632 19.8883 15.836 19.6874 16.0372L16.0541 19.6874C15.8529 19.8883 15.5801 20.0012 15.2957 20.0012C15.0113 20.0012 14.7386 19.8883 14.5374 19.6874L9.99999 15.1669L5.49218 19.6874C5.29025 19.8886 5.0168 20.0016 4.73172 20.0016C4.44665 20.0016 4.17319 19.8886 3.97126 19.6874L0.312625 16.0541C0.21056 15.9541 0.12947 15.8349 0.0741101 15.7032C0.0187502 15.5715 -0.00976563 15.4301 -0.00976562 15.2873C-0.00976563 15.1444 0.0187502 15.003 0.0741101 14.8714C0.12947 14.7397 0.21056 14.6204 0.312625 14.5205Z",fill:"white"})],-1)),X={class:"col-6"},Y={class:"mb-3"},ss=u(()=>t("label",{class:"form-label"},"First name",-1)),ts={class:"mb-3"},es=u(()=>t("label",{class:"form-label"},"Last name",-1)),rs={class:"mb-3"},ns=u(()=>t("label",{class:"form-label"},"Username",-1)),os={class:"mb-3"},is=u(()=>t("label",{class:"form-label"},"Email",-1)),as={class:"mb-3"},ls=u(()=>t("label",{class:"form-label"},"Role",-1)),us={key:0,class:"mb-3"},ds=u(()=>t("label",{class:"form-label"},"Instructor",-1));function cs(e,s,o,d,l,c){const r=f("router-link");return i(),a("div",J,[t("div",R,[t("div",z,[t("img",{src:this.$parent.user.avatar},null,8,G),t("div",H,[m(r,{to:"/users/edit/"+this.$parent.user.id,class:"btn purple-btn"},{default:v(()=>[p(" Edit  "),K]),_:1},8,["to"]),p("   "),t("button",{class:"btn red-btn",onClick:s[0]||(s[0]=n=>d.usersStore.deleteUser(o.userId))},[p(" Delete  "),Q])]),m(r,{to:"/users/edit/"+this.$parent.user.id,class:"btn green-btn mx-auto"},{default:v(()=>[p(" Skill tree ")]),_:1},8,["to"])]),t("div",X,[t("div",Y,[ss,_(t("input",{class:"form-control",type:"text","onUpdate:modelValue":s[1]||(s[1]=n=>this.$parent.user.firstName=n),disabled:""},null,512),[[h,this.$parent.user.firstName]])]),t("div",ts,[es,_(t("input",{class:"form-control",type:"text","onUpdate:modelValue":s[2]||(s[2]=n=>this.$parent.user.lastName=n),disabled:""},null,512),[[h,this.$parent.user.lastName]])]),t("div",rs,[ns,_(t("input",{class:"form-control",type:"text","onUpdate:modelValue":s[3]||(s[3]=n=>this.$parent.user.username=n),disabled:""},null,512),[[h,this.$parent.user.username]])]),t("div",os,[is,_(t("input",{class:"form-control",type:"text","onUpdate:modelValue":s[4]||(s[4]=n=>this.$parent.user.email=n),disabled:""},null,512),[[h,this.$parent.user.email]])]),t("div",as,[ls,_(t("input",{class:"form-control",type:"text","onUpdate:modelValue":s[5]||(s[5]=n=>this.$parent.user.role=n),disabled:""},null,512),[[h,this.$parent.user.role]])]),this.$parent.user.role=="student"?(i(),a("div",us,[ds,_(t("input",{class:"form-control",type:"text","onUpdate:modelValue":s[6]||(s[6]=n=>this.$parent.instructor=n),disabled:""},null,512),[[h,this.$parent.instructor]])])):g("",!0)])])])}const _s=b(A,[["render",cs],["__scopeId","data-v-adaf3f9b"]]);const hs={props:["userId"],setup(){const e=C();return e.users.length<1&&e.getUsers(),{usersStore:e}},data(){return{message:""}},computed:{},methods:{SendMessage(e){const s={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:this.message})};var o="/users/"+this.userId+"/edit-message";fetch(o,s).then(()=>{this.message="",alert("Message sent")})}}},ms=e=>($("data-v-853fb666"),e=e(),w(),e),ps={class:"container mt-3"},fs=ms(()=>t("h3",null,"Personal Message",-1));function Ss(e,s,o,d,l,c){return i(),a("div",ps,[fs,_(t("textarea",{"onUpdate:modelValue":s[0]||(s[0]=r=>l.message=r),class:"form-control",rows:"3"},null,512),[[h,l.message]]),t("button",{class:"btn green-btn",onClick:s[1]||(s[1]=r=>c.SendMessage(o.userId))},"Send")])}const gs=b(hs,[["render",Ss],["__scopeId","data-v-853fb666"]]),vs="/images/banners/students-banner.png";const Cs={setup(){const e=C(),s=x();return{usersStore:e,instructorStudentsStore:s}},data(){return{user:{id:null,firstName:null,lastName:null,username:null,avatar:null},instructor:null}},components:{UsersList:q,UserDetails:_s,WriteMessage:gs},async created(){this.usersStore.users.length<1&&await this.usersStore.getUsers(),this.user.id=this.usersStore.users[0].id,this.user.firstName=this.usersStore.users[0].first_name,this.user.lastName=this.usersStore.users[0].last_name,this.user.username=this.usersStore.users[0].username,this.user.email=this.usersStore.users[0].email,this.user.avatar=this.usersStore.users[0].avatar,this.user.role=this.usersStore.users[0].role,this.instructorStudentsStore.instructorStudentsList.length==0&&await this.instructorStudentsStore.getInstructorStudentsList()},methods:{changeUserId(e){this.user.id=e.id,this.user.firstName=e.first_name,this.user.lastName=e.last_name,this.user.username=e.username,this.user.email=e.email,this.user.avatar=e.avatar,this.user.role=e.role,this.user.role=="student"&&this.getInstructor()},getInstructor(){var e;for(let s=0;s<this.instructorStudentsStore.instructorStudentsList.length;s++)this.instructorStudentsStore.instructorStudentsList[s].student_id==this.user.id&&(e=this.instructorStudentsStore.instructorStudentsList[s].instructor_id);for(let s=0;s<this.usersStore.users.length;s++)this.usersStore.users[s].id==e&&(this.instructor=this.usersStore.users[s].username)}}},bs=t("div",{id:"banner"},[t("img",{src:vs,class:"img-fluid"})],-1),Ls={class:"d-flex justify-content-between"},$s=t("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"white"})],-1),ws={class:"container-fluid"},Is={class:"row"},xs={class:"col-md-4"},Us={class:"col-md-8"},ys={class:"row"},ks={class:"row"};function Ms(e,s,o,d,l,c){const r=f("router-link"),n=f("UsersList"),y=f("UserDetails"),k=f("WriteMessage");return i(),a(L,null,[bs,t("div",Ls,[m(r,{class:"btn purple-btn",to:"/users/add"},{default:v(()=>[p("Add  "),$s]),_:1}),m(r,{class:"btn purple-btn",to:"/user-skills/edit/"+l.user.id},{default:v(()=>[p("Edit Skill Mastery ")]),_:1},8,["to"])]),t("div",ws,[t("div",Is,[t("div",xs,[m(n,{onChangeUserId:s[0]||(s[0]=M=>c.changeUserId(M))})]),t("div",Us,[t("div",ys,[m(y,{userId:l.user.id},null,8,["userId"])]),t("div",ks,[m(k,{userId:l.user.id},null,8,["userId"])])])])])],64)}const Bs=b(Cs,[["render",Ms]]);export{Bs as default};
