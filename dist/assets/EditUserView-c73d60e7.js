import{_ as C}from"./edit-mastery-skill-banner-9e7c0291.js";import{u as b}from"./UsersStore-f98107ec.js";import{u as L}from"./InstructorStudentsStore-c9ae2786.js";import{_ as S,r as I,o as i,c as n,b as s,l as _,t as p,w as c,s as h,k as a,B as f,F as v,i as y,a as w,f as D,p as x,d as k}from"./main-f195e9a3.js";import{_ as U}from"./recurso-69-12793b41.js";const V={setup(){const r=b(),t=L();return{usersStore:r,instructorStudentsStore:t}},data(){return{userId:this.$route.params.id,user:{},image:"",instructors:[],instructorId:0,instructorName:"",showRoleDropDown:!1,showInstructorDropDown:!1,validate:{first_name:!1,last_name:!1,email:!1,emailFormat:!1,password:!1}}},async mounted(){if(this.usersStore.users.length<1&&await this.usersStore.getUsers(),this.instructorStudentsStore.instructorStudentsList.length==0&&await this.instructorStudentsStore.getInstructorStudentsList(),this.getInstructors(),this.instructorId!==0){const r=this.instructors.find(t=>t.id===this.instructorId);this.instructorName=r.username}},methods:{getUser(){fetch("/users/show/"+this.userId).then(function(r){return r.json()}).then(r=>this.user=r).then(()=>{this.image=this.user.avatar})},async getInstructors(){for(let r=0;r<this.usersStore.users.length;r++)this.usersStore.users[r].role=="instructor"&&this.instructors.push(this.usersStore.users[r]);for(let r=0;r<this.instructorStudentsStore.instructorStudentsList.length;r++)this.instructorStudentsStore.instructorStudentsList[r].student_id==this.userId&&(this.instructorId=this.instructorStudentsStore.instructorStudentsList[r].instructor_id);this.getUser()},ValidateForm(){this.user.first_name==""||this.user.first_name==null?this.validate.first_name=!0:this.user.last_name==""||this.user.last_name==null?this.validate.last_name=!0:this.user.username==""||this.user.username==null?this.validate.username=!0:this.user.email==""||this.user.email==null?this.validate.email=!0:this.Submit()},ValidateEmail(){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email)?this.validate.emailFormat=!1:this.validate.emailFormat=!0},Submit(){const r={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstname:this.user.first_name,lastname:this.user.last_name,username:this.user.username,email:this.user.email,avatar:this.user.avatar,role:this.user.role,password:this.user.password})};var t="/users/"+this.userId+"/edit";fetch(t,r).then(()=>{if(this.user.role=="student"){const m={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({instructor_id:this.instructorId})};var d="/users/"+this.userId+"/edit/instructor";fetch(d,m)}}).then(()=>{this.usersStore.getUsers(),this.$router.push("/users")})},onFileChange(r){var t=r.target.files||r.dataTransfer.files;t.length&&this.createImage(t[0])},createImage(r){new Image;var t=new FileReader,d=this;t.onload=m=>{d.image=m.target.result,this.image=m.target.result,this.user.avatar=this.image},t.readAsDataURL(r)},removeImage:function(r){this.image="",this.user.avatar=this.image}}},l=r=>(x("data-v-92a5d976"),r=r(),k(),r),F={class:"container mt-3 pb-5"},R=l(()=>s("div",{class:"row"},[s("div",{class:"col-10 d-flex align-items-end"},[s("h2",{id:"header-tile"},"Edit User"),s("img",{src:U,id:"header-icon"})])],-1)),N={class:"container-fluid main-content-container p-4 mt-5"},B={class:"row"},E={class:"col-lg-4 mt-3"},T={class:"mb-3 row"},M=l(()=>s("label",{class:"form-label"},"Avatar",-1)),j={key:0},O=l(()=>s("label",{class:"btn green-btn",for:"choose-avatar"},[_("Add   "),s("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"white"})])],-1)),Z=l(()=>s("p",{style:{"font-size":"14px"}},[s("em",null,"Maximum file size 15mb")],-1)),z={key:1},A=["src"],P=l(()=>s("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M0.312625 14.5205L4.83312 9.99999L0.312625 5.49218C0.111396 5.29025 -0.00159545 5.0168 -0.00159545 4.73172C-0.00159545 4.44665 0.111396 4.17319 0.312625 3.97126L3.96282 0.312625C4.16474 0.111396 4.4382 -0.00159545 4.72327 -0.00159545C5.00835 -0.00159545 5.2818 0.111396 5.48373 0.312625L9.99999 4.83312L14.5205 0.312625C14.6204 0.21056 14.7397 0.12947 14.8714 0.0741101C15.003 0.0187502 15.1444 -0.00976563 15.2873 -0.00976562C15.4301 -0.00976563 15.5715 0.0187502 15.7032 0.0741101C15.8349 0.12947 15.9541 0.21056 16.0541 0.312625L19.6874 3.96282C19.8886 4.16474 20.0016 4.4382 20.0016 4.72327C20.0016 5.00835 19.8886 5.2818 19.6874 5.48373L15.1669 9.99999L19.6874 14.5205C19.8883 14.7217 20.0012 14.9944 20.0012 15.2788C20.0012 15.5632 19.8883 15.836 19.6874 16.0372L16.0541 19.6874C15.8529 19.8883 15.5801 20.0012 15.2957 20.0012C15.0113 20.0012 14.7386 19.8883 14.5374 19.6874L9.99999 15.1669L5.49218 19.6874C5.29025 19.8886 5.0168 20.0016 4.73172 20.0016C4.44665 20.0016 4.17319 19.8886 3.97126 19.6874L0.312625 16.0541C0.21056 15.9541 0.12947 15.8349 0.0741101 15.7032C0.0187502 15.5715 -0.00976563 15.4301 -0.00976562 15.2873C-0.00976563 15.1444 0.0187502 15.003 0.0741101 14.8714C0.12947 14.7397 0.21056 14.6204 0.312625 14.5205Z",fill:"white"})],-1)),q={class:"col-lg-4 mt-3"},H={class:"mb-3"},J={for:"firstname",class:"form-label"},G={key:0,class:"form-validate"},K={class:"mb-3"},Q=l(()=>s("label",{for:"lastname",class:"form-label"},"Last name",-1)),W={key:0,class:"form-validate"},X={class:"mb-3"},Y=l(()=>s("label",{class:"form-label"},"Username",-1)),$={key:0,class:"form-validate"},ss={class:"mb-3"},es=l(()=>s("label",{class:"form-label"},"Email address",-1)),ts={key:0,class:"form-validate"},rs={key:1,class:"form-validate"},os={class:"mb-3"},is=l(()=>s("label",{class:"form-label"},"Role",-1)),ns={class:"d-flex flex-column"},ls=l(()=>s("span",null,[s("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z",fill:"#344054"})])],-1)),as={key:0,class:"custom-dropdown-base"},us={key:0,class:"mb-3"},ds=l(()=>s("label",{class:"form-label"},"Instructor",-1)),ms={class:"d-flex flex-column"},cs=l(()=>s("span",null,[s("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z",fill:"#344054"})])],-1)),hs={key:0,class:"custom-dropdown-base"},_s=["onClick"],ps={class:"mb-3"},fs=l(()=>s("label",{class:"form-label"},"Password",-1)),vs={key:0,class:"form-validate"},ws={class:"d-flex justify-content-end gap-4"};function gs(r,t,d,m,e,u){const g=I("router-link");return i(),n("div",F,[R,s("div",N,[s("div",B,[s("div",E,[s("div",T,[M,e.image?(i(),n("div",z,[s("p",null,[s("img",{src:e.image,height:"300",style:{"background-color":"lightgrey"}},null,8,A)]),s("p",null,[s("button",{class:"btn red-btn",onClick:t[1]||(t[1]=(...o)=>u.removeImage&&u.removeImage(...o))},[_(" Remove Image   "),P])])])):(i(),n("div",j,[s("input",{id:"choose-avatar",type:"file",accept:"image/*",onChange:t[0]||(t[0]=(...o)=>u.onFileChange&&u.onFileChange(...o)),hidden:""},null,32),O,Z]))])]),s("div",q,[s("div",H,[s("label",J,"First name "+p(r.firstName),1),c(s("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>e.user.first_name=o),type:"text",class:"form-control"},null,512),[[h,e.user.first_name]]),e.validate.first_name&&(e.user.first_name==""||e.user.first_name==null)?(i(),n("div",G," please enter a first name ! ")):a("",!0)]),s("div",K,[Q,c(s("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>e.user.last_name=o),type:"text",class:"form-control"},null,512),[[h,e.user.last_name]]),e.validate.last_name&&(e.user.last_name==""||e.user.last_name==null)?(i(),n("div",W," please enter a last name ! ")):a("",!0)]),s("div",X,[Y,c(s("input",{"onUpdate:modelValue":t[4]||(t[4]=o=>e.user.username=o),type:"text",class:"form-control"},null,512),[[h,e.user.username]]),e.validate.username&&(e.user.username==""||e.user.username==null)?(i(),n("div",$," please enter a user name ! ")):a("",!0)]),s("div",ss,[es,c(s("input",{"onUpdate:modelValue":t[5]||(t[5]=o=>e.user.email=o),type:"email",class:"form-control",onBlur:t[6]||(t[6]=(...o)=>u.ValidateEmail&&u.ValidateEmail(...o))},null,544),[[h,e.user.email]]),e.validate.email&&(e.user.email==""||e.user.email==null)?(i(),n("div",ts," please enter an email ! ")):a("",!0),e.validate.emailFormat?(i(),n("div",rs," please enter a valid email ! ")):a("",!0)]),s("div",os,[is,s("div",ns,[s("div",{class:f([e.showRoleDropDown?"custom-select-button-focus":"custom-select-button"]),onClick:t[7]||(t[7]=o=>e.showRoleDropDown=!e.showRoleDropDown)},[_(p(e.user.role)+" ",1),ls],2),e.showRoleDropDown?(i(),n("div",as,[s("div",{class:"custom-dropdown-option",onClick:t[8]||(t[8]=o=>{e.user.role="student",e.showRoleDropDown=!1})}," student "),s("div",{class:"custom-dropdown-option",onClick:t[9]||(t[9]=o=>{e.user.role="instructor",e.showRoleDropDown=!1})}," instructor "),s("div",{class:"custom-dropdown-option",onClick:t[10]||(t[10]=o=>{e.user.role="admin",e.showRoleDropDown=!1})}," admin ")])):a("",!0)])]),e.user.role=="student"?(i(),n("div",us,[ds,s("div",ms,[s("div",{class:f([e.showInstructorDropDown?"custom-select-button-focus":"custom-select-button"]),onClick:t[11]||(t[11]=o=>e.showInstructorDropDown=!e.showInstructorDropDown)},[_(p(e.instructorName)+" ",1),cs],2),e.showInstructorDropDown?(i(),n("div",hs,[(i(!0),n(v,null,y(e.instructors,o=>(i(),n("div",{class:"custom-dropdown-option",onClick:Ls=>{e.instructorId=o.id,e.instructorName=o.username,e.showInstructorDropDown=!1}},p(o.username),9,_s))),256))])):a("",!0)])])):a("",!0),s("div",ps,[fs,c(s("input",{"onUpdate:modelValue":t[12]||(t[12]=o=>e.user.password=o),type:"text",class:"form-control"},null,512),[[h,e.user.password]]),e.validate.password&&(e.user.password==""||e.user.password==null)?(i(),n("div",vs," please enter a password ! ")):a("",!0)]),s("div",ws,[w(g,{class:"btn red-btn",to:"/users"},{default:D(()=>[_(" Cancel ")]),_:1}),s("button",{class:"btn purple-btn",onClick:t[13]||(t[13]=o=>u.ValidateForm())}," Submit ")])])])])])}const Cs=S(V,[["render",gs],["__scopeId","data-v-92a5d976"]]),bs=s("div",{id:"banner"},[s("img",{src:C,class:"image-fluid"})],-1),ks={__name:"EditUserView",setup(r){return(t,d)=>(i(),n(v,null,[bs,w(Cs)],64))}};export{ks as default};
