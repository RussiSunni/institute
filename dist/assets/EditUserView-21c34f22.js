import{_ as x,i as w,o as n,c as l,d as s,m as d,t as _,e as h,v as p,b as u,x as g,F as v,k as S,a as f,w as I,p as y,f as L,E as D}from"./main-44dd4d9e.js";import{u as k}from"./UsersStore-647f31e9.js";import{u as V}from"./InstructorStudentsStore-6a6ffa83.js";import{f as U}from"./style-1a7a2847.js";import{_ as M}from"./recurso-69-12793b41.js";const R={setup(){const o=k(),t=V();return{usersStore:o,instructorStudentsStore:t}},data(){return{userId:this.$route.params.id,user:{},image:"",instructors:[],instructorId:0,instructorName:"",showRoleDropDown:!1,showInstructorDropDown:!1,validate:{first_name:!1,last_name:!1,email:!1,emailFormat:!1,password:!1},showCropModal:!1,cropCanvas:""}},components:{Cropper:U},async mounted(){if(this.usersStore.users.length<1&&await this.usersStore.getUsers(),this.instructorStudentsStore.instructorStudentsList.length==0&&await this.instructorStudentsStore.getInstructorStudentsList(),this.getInstructors(),this.instructorId!==0){const o=this.instructors.find(t=>t.id===this.instructorId);this.instructorName=o.username}},methods:{getUser(){fetch("/users/show/"+this.userId).then(function(o){return o.json()}).then(o=>this.user=o).then(()=>{this.image=this.user.avatar})},async getInstructors(){for(let o=0;o<this.usersStore.users.length;o++)this.usersStore.users[o].role=="instructor"&&this.instructors.push(this.usersStore.users[o]);for(let o=0;o<this.instructorStudentsStore.instructorStudentsList.length;o++)this.instructorStudentsStore.instructorStudentsList[o].student_id==this.userId&&(this.instructorId=this.instructorStudentsStore.instructorStudentsList[o].instructor_id);this.getUser()},ValidateForm(){this.user.first_name==""||this.user.first_name==null?this.validate.first_name=!0:this.user.last_name==""||this.user.last_name==null?this.validate.last_name=!0:this.user.username==""||this.user.username==null?this.validate.username=!0:this.user.email==""||this.user.email==null?this.validate.email=!0:this.Submit()},ValidateEmail(){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email)?this.validate.emailFormat=!1:this.validate.emailFormat=!0},Submit(){const o={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstname:this.user.first_name,lastname:this.user.last_name,username:this.user.username,email:this.user.email,avatar:this.user.avatar,role:this.user.role,password:this.user.password})};var t="/users/"+this.userId+"/edit";fetch(t,o).then(()=>{if(this.user.role=="student"){const m={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({instructor_id:this.instructorId})};var c="/users/"+this.userId+"/edit/instructor";fetch(c,m)}}).then(()=>{this.usersStore.getUsers(),this.$router.push("/users")})},onFileChange(o){var t=o.target.files||o.dataTransfer.files;t.length&&this.createImage(t[0])},createImage(o){new Image;var t=new FileReader,c=this;t.onload=m=>{c.image=m.target.result,this.image=m.target.result,this.user.avatar=this.image},t.readAsDataURL(o)},removeImage:function(o){this.image="",this.user.avatar=this.image},cropImageChange({coordinates:o,canvas:t}){this.cropCanvas=t.toDataURL()},handleCropImage(){this.user.avatar=this.cropCanvas,this.image=this.cropCanvas,this.showCropModal=!1}}},i=o=>(y("data-v-14b1d02e"),o=o(),L(),o),z={class:"container mt-3 pb-5"},F=i(()=>s("div",{class:"row"},[s("div",{class:"col-10 d-flex align-items-end"},[s("h2",{id:"header-tile"},"Edit User"),s("img",{src:M,id:"header-icon"})])],-1)),H={class:"container-fluid main-content-container p-4 mt-5"},B={class:"row"},N={class:"col-lg-4 mt-3"},E={class:"mb-3 row"},T=i(()=>s("label",{class:"form-label"},"Avatar",-1)),j={key:0},A=i(()=>s("label",{class:"btn green-btn",for:"choose-avatar"},[d("Add   "),s("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"white"})])],-1)),O=i(()=>s("p",{style:{"font-size":"14px"}},[s("em",null,"Maximum file size 15mb")],-1)),P={key:1},Z=["src"],q={class:"d-flex flex-row gap-2"},J=i(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"white",width:"16",height:"16"},[s("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),G=i(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"white"},[s("path",{d:"M448 109.3l54.6-54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L402.7 64 160 64v64l178.7 0L128 338.7V32c0-17.7-14.3-32-32-32S64 14.3 64 32V64H32C14.3 64 0 78.3 0 96s14.3 32 32 32H64V384c0 35.3 28.7 64 64 64H352V384H173.3L384 173.3 384 480c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H448l0-274.7z"})],-1)),K={class:"col-lg-4 mt-3"},Q={class:"mb-3"},W={for:"firstname",class:"form-label"},X={key:0,class:"form-validate"},Y={class:"mb-3"},$=i(()=>s("label",{for:"lastname",class:"form-label"},"Last name",-1)),ss={key:0,class:"form-validate"},es={class:"mb-3"},ts=i(()=>s("label",{class:"form-label"},"Username",-1)),os={key:0,class:"form-validate"},rs={class:"mb-3"},is=i(()=>s("label",{class:"form-label"},"Email address",-1)),ns={key:0,class:"form-validate"},ls={key:1,class:"form-validate"},as={class:"mb-3"},us=i(()=>s("label",{class:"form-label"},"Role",-1)),ds={class:"d-flex flex-column"},cs=i(()=>s("span",null,[s("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z",fill:"#344054"})])],-1)),ms={key:0,class:"custom-dropdown-base"},hs={key:0,class:"mb-3"},ps=i(()=>s("label",{class:"form-label"},"Instructor",-1)),_s={class:"d-flex flex-column"},vs=i(()=>s("span",null,[s("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z",fill:"#344054"})])],-1)),fs={key:0,class:"custom-dropdown-base"},ws=["onClick"],gs={class:"mb-3"},Cs=i(()=>s("label",{class:"form-label"},"Password",-1)),bs={key:0,class:"form-validate"},xs={class:"d-flex justify-content-end gap-4"},Ss={key:0},Is={id:"myModal",class:"modal"},ys={class:"modal-content d-flex flex-column"},Ls={id:"crop-component"},Ds={id:"crop-result"},ks=i(()=>s("div",{class:"form-label"},"Result:",-1)),Vs=["src"],Us={class:"d-flex flex-row-reverse gap-2 mt-5"},Ms=i(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"white",width:"16",height:"16"},[s("path",{d:"M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"})],-1)),Rs=i(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"white",width:"16",height:"16"},[s("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"})],-1));function zs(o,t,c,m,e,a){const C=w("router-link"),b=w("cropper");return n(),l(v,null,[s("div",z,[F,s("div",H,[s("div",B,[s("div",N,[s("div",E,[T,e.image?(n(),l("div",P,[s("p",null,[s("img",{src:e.image,height:"300",width:"300",style:{"background-color":"lightgrey"}},null,8,Z)]),s("div",q,[s("button",{class:"btn red-btn",onClick:t[1]||(t[1]=(...r)=>a.removeImage&&a.removeImage(...r))},[d(" Remove   "),J]),s("button",{class:"btn green-btn",onClick:t[2]||(t[2]=r=>e.showCropModal=!0)},[d(" Crop   "),G])])])):(n(),l("div",j,[s("input",{id:"choose-avatar",type:"file",accept:"image/*",onChange:t[0]||(t[0]=(...r)=>a.onFileChange&&a.onFileChange(...r)),hidden:""},null,32),A,O]))])]),s("div",K,[s("div",Q,[s("label",W,"First name "+_(o.firstName),1),h(s("input",{"onUpdate:modelValue":t[3]||(t[3]=r=>e.user.first_name=r),type:"text",class:"form-control"},null,512),[[p,e.user.first_name]]),e.validate.first_name&&(e.user.first_name==""||e.user.first_name==null)?(n(),l("div",X," please enter a first name ! ")):u("",!0)]),s("div",Y,[$,h(s("input",{"onUpdate:modelValue":t[4]||(t[4]=r=>e.user.last_name=r),type:"text",class:"form-control"},null,512),[[p,e.user.last_name]]),e.validate.last_name&&(e.user.last_name==""||e.user.last_name==null)?(n(),l("div",ss," please enter a last name ! ")):u("",!0)]),s("div",es,[ts,h(s("input",{"onUpdate:modelValue":t[5]||(t[5]=r=>e.user.username=r),type:"text",class:"form-control"},null,512),[[p,e.user.username]]),e.validate.username&&(e.user.username==""||e.user.username==null)?(n(),l("div",os," please enter a user name ! ")):u("",!0)]),s("div",rs,[is,h(s("input",{"onUpdate:modelValue":t[6]||(t[6]=r=>e.user.email=r),type:"email",class:"form-control",onBlur:t[7]||(t[7]=(...r)=>a.ValidateEmail&&a.ValidateEmail(...r))},null,544),[[p,e.user.email]]),e.validate.email&&(e.user.email==""||e.user.email==null)?(n(),l("div",ns," please enter an email ! ")):u("",!0),e.validate.emailFormat?(n(),l("div",ls," please enter a valid email ! ")):u("",!0)]),s("div",as,[us,s("div",ds,[s("div",{class:g([e.showRoleDropDown?"custom-select-button-focus":"custom-select-button"]),onClick:t[8]||(t[8]=r=>e.showRoleDropDown=!e.showRoleDropDown)},[d(_(e.user.role)+" ",1),cs],2),e.showRoleDropDown?(n(),l("div",ms,[s("div",{class:"custom-dropdown-option",onClick:t[9]||(t[9]=r=>{e.user.role="student",e.showRoleDropDown=!1})}," student "),s("div",{class:"custom-dropdown-option",onClick:t[10]||(t[10]=r=>{e.user.role="instructor",e.showRoleDropDown=!1})}," instructor "),s("div",{class:"custom-dropdown-option",onClick:t[11]||(t[11]=r=>{e.user.role="admin",e.showRoleDropDown=!1})}," admin ")])):u("",!0)])]),e.user.role=="student"?(n(),l("div",hs,[ps,s("div",_s,[s("div",{class:g([e.showInstructorDropDown?"custom-select-button-focus":"custom-select-button"]),onClick:t[12]||(t[12]=r=>e.showInstructorDropDown=!e.showInstructorDropDown)},[d(_(e.instructorName)+" ",1),vs],2),e.showInstructorDropDown?(n(),l("div",fs,[(n(!0),l(v,null,S(e.instructors,r=>(n(),l("div",{class:"custom-dropdown-option",onClick:Bs=>{e.instructorId=r.id,e.instructorName=r.username,e.showInstructorDropDown=!1}},_(r.username),9,ws))),256))])):u("",!0)])])):u("",!0),s("div",gs,[Cs,h(s("input",{"onUpdate:modelValue":t[13]||(t[13]=r=>e.user.password=r),type:"text",class:"form-control"},null,512),[[p,e.user.password]]),e.validate.password&&(e.user.password==""||e.user.password==null)?(n(),l("div",bs," please enter a password ! ")):u("",!0)]),s("div",xs,[f(C,{class:"btn red-btn",to:"/users"},{default:I(()=>[d(" Cancel ")]),_:1}),s("button",{class:"btn purple-btn",onClick:t[14]||(t[14]=r=>a.ValidateForm())}," Submit ")])])])])]),e.showCropModal?(n(),l("div",Ss,[s("div",Is,[s("div",ys,[s("div",Ls,[f(b,{src:e.image,onChange:a.cropImageChange,"stencil-props":{handlers:{},movable:!1,resizable:!1,aspectRatio:1},"resize-image":{adjustStencil:!1},"image-restriction":"stencil",class:"cropper"},null,8,["src","onChange"]),s("div",Ds,[ks,s("img",{src:e.cropCanvas,alt:"preview Image",width:"100",height:"100"},null,8,Vs)])]),s("div",Us,[s("button",{class:"btn red-btn",onClick:t[15]||(t[15]=r=>e.showCropModal=!1)},[d(" Cancel   "),Ms]),s("button",{class:"btn green-btn",onClick:t[16]||(t[16]=(...r)=>a.handleCropImage&&a.handleCropImage(...r))},[d(" Crop   "),Rs])])])])])):u("",!0)],64)}const Fs=x(R,[["render",zs],["__scopeId","data-v-14b1d02e"]]),Hs=s("div",{id:"banner"},[s("img",{src:D,class:"image-fluid"})],-1),Os={__name:"EditUserView",setup(o){return(t,c)=>(n(),l(v,null,[Hs,f(Fs)],64))}};export{Os as default};
