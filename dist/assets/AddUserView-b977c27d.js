import{_ as L}from"./general-banner-1c13aca4.js";import{_ as g,m as I,n as D,i as v,o as n,c as a,d as e,b as c,l as h,e as m,v as p,y as f,t as w,F as C,k as V,a as _,w as z,p as b,f as S}from"./main-1b5dad83.js";import{u as M}from"./UsersStore-1001683e.js";import{u as R}from"./InstructorStudentsStore-676fec2a.js";import{u as U}from"./UserSkillsStore-7551980a.js";import{f as H,h as F}from"./theme.compact-b94f60f9.js";import{_ as A}from"./recurso-69-12793b41.js";const B={setup(){const o=I(),t=M(),l=R(),u=U();return{skillsStore:o,usersStore:t,instructorStudentsStore:l,userSkillsStore:u}},data(){return{user:{role:"student"},image:"",firstLevelSkills:[],newUserId:null,isValidated:!1,instructors:[],instructorId:0,instructorName:"",showDropDown:!1,showRoleDropDown:!1,validate:{first_name:!1,last_name:!1,email:!1,emailFormat:!1,password:!1,notSquareImg:!1,notCropped:!1},showCropModal:!1,cropCanvas:"",cropResult:{coordinates:null,image:null},lastZoomValue:0,zoomValue:0}},components:{Cropper:H,Preview:F},async created(){this.skillsStore.skillsList.length<1&&await this.skillsStore.getSkillsList();for(let o=0;o<this.skillsStore.skillsList.length;o++)this.skillsStore.skillsList[o].parent==0&&this.firstLevelSkills.push(this.skillsStore.skillsList[o])},async mounted(){this.usersStore.users.length<1&&await this.usersStore.getUsers(),this.getInstructors()},methods:{getInstructors(){for(let o=0;o<this.usersStore.users.length;o++)this.usersStore.users[o].role=="instructor"&&(this.instructors.push(this.usersStore.users[o]),this.instructorId===0&&(this.instructorId=this.usersStore.users[o].id,this.instructorName=this.usersStore.users[o].username))},ValidateForm(){this.user.first_name==""||this.user.first_name==null?this.validate.first_name=!0:this.user.last_name==""||this.user.last_name==null?this.validate.last_name=!0:this.user.username==""||this.user.username==null?this.validate.username=!0:this.user.email==""||this.user.email==null?this.validate.email=!0:this.Submit()},ValidateEmail(){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email)?this.validate.emailFormat=!1:this.validate.emailFormat=!0},Submit(){const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstname:this.user.first_name,lastname:this.user.last_name,username:this.user.username,email:this.user.email,avatar:this.user.avatar,password:this.user.password,role:this.user.role})};var t="/users/add";fetch(t,o).then(function(l){return l.json()}).then(l=>{l.account=="username already taken"||l.account=="email already taken"?alert(l.account):(alert("account created"),this.usersStore.getUsers(),D.push({name:"users"}),this.isValidated=!0),this.newUserId=l.id}).then(l=>{if(this.isValidated)for(let u=0;u<this.firstLevelSkills.length;u++)this.userSkillsStore.MakeMastered(this.newUserId,this.firstLevelSkills[u])}).then(l=>{if(this.user.role=="student"){const s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({instructor_id:this.instructorId,student_id:this.newUserId})};var u="/users/add/instructor";fetch(u,s)}}).then(async l=>{await this.instructorStudentsStore.getInstructorStudentsList()})},onFileChange(o){var t=o.target.files||o.dataTransfer.files;t.length&&this.createImage(t[0])},createImage(o){var t=new Image,l=new FileReader,u=this;l.onload=s=>{u.image=s.target.result,this.image=s.target.result,t.src=s.target.result,this.user.avatar=this.image},t.onload=()=>{t.width/t.height!==1?(this.validate.notSquareImg=!0,this.showCropModal=!0):this.validate.notSquareImg=!1},l.readAsDataURL(o)},removeImage:function(o){this.image="",this.user.avatar=this.image},cropImageChange({coordinates:o,canvas:t,image:l}){this.cropResult={coordinates:o,image:l},this.cropCanvas=t.toDataURL()},handleCropImage(){var o=new Image;o.src=this.cropCanvas,this.user.avatar=this.cropCanvas,this.image=this.cropCanvas,this.showCropModal=!1,this.validate.notSquareImg=!1,this.validate.notCropped=!1},handleCancelCrop(){this.validate.notSquareImg?(this.validate.notCropped=!0,setTimeout(()=>{this.validate.notCropped=!1},2e3)):(this.showCropModal=!1,this.validate.notCropped=!1)},stencilSize({boundaries:o}){return{width:Math.min(o.height,o.width)-48,height:Math.min(o.height,o.width)-48}},handlePhoneCropper(){if(window.innerWidth<940){const{visibleArea:o,image:t}=this.$refs.cropper.getResult();this.zoomValue=o.height/t.height,this.lastZoomValue=this.zoomValue,this.$refs.cropper.zoom(this.zoomValue)}},cropperZoomIn(){this.$refs.cropper.visibleArea.height>30&&this.$refs.cropper.zoom(2)},cropperZoomOut(){this.$refs.cropper.visibleArea.height<3e3&&this.$refs.cropper.zoom(.5)}}},r=o=>(b("data-v-762751c5"),o=o(),S(),o),N={class:"container mt-3 pb-3"},Z=r(()=>e("div",{class:"row"},[e("div",{class:"col-10 d-flex align-items-end"},[e("h2",{id:"header-tile"},"Add User"),e("img",{src:A,id:"header-icon"})])],-1)),q={class:"main-content-container container-fluid mt-5 p-4"},O={class:"row"},P={class:"col-lg-4"},T={class:"mb-3 row"},j=r(()=>e("label",{class:"form-label"},"Avatar",-1)),E={key:0},J=r(()=>e("label",{class:"btn green-btn",for:"choose-avatar"},[h("Add   "),e("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"white"})])],-1)),W=r(()=>e("p",{style:{"font-size":"14px"}},[e("em",null,"Maximum file size 15mb")],-1)),Y={key:1},G=["src"],K={key:0,style:{"font-size":"14px"}},Q=r(()=>e("em",{id:"warning-text"}," Your profile picture is not in 1:1 aspect ratio. Please be aware that it may not display correctly. It is recommended that you crop the image. ",-1)),X=[Q],$={class:"d-flex flex-row gap-2"},ee=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"white",width:"16",height:"16"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),se=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"white"},[e("path",{d:"M448 109.3l54.6-54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L402.7 64 160 64v64l178.7 0L128 338.7V32c0-17.7-14.3-32-32-32S64 14.3 64 32V64H32C14.3 64 0 78.3 0 96s14.3 32 32 32H64V384c0 35.3 28.7 64 64 64H352V384H173.3L384 173.3 384 480c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H448l0-274.7z"})],-1)),te={class:"col-lg-4"},oe={class:"mb-3"},ie=r(()=>e("label",{for:"first_name",class:"form-label"},"First Name",-1)),re={key:0,class:"form-validate"},le={class:"mb-3"},ne=r(()=>e("label",{for:"last_name",class:"form-label"},"Last Name",-1)),ae={key:0,class:"form-validate"},de={class:"mb-3"},ce=r(()=>e("label",{class:"form-label"},"Username",-1)),ue={key:0,class:"form-validate"},he={class:"mb-3"},me=r(()=>e("label",{class:"form-label"},"Email address",-1)),pe={key:0,class:"form-validate"},_e={key:1,class:"form-validate"},ve={class:"mb-3"},fe=r(()=>e("label",{class:"form-label"},"Role",-1)),we={class:"d-flex flex-column"},ge=r(()=>e("span",null,[e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z",fill:"#344054"})])],-1)),Ce={key:0,class:"custom-dropdown-base"},be={key:0,class:"mb-3"},Se=r(()=>e("label",{class:"form-label"},"Instructor",-1)),ke={class:"d-flex flex-column"},ye=r(()=>e("span",null,[e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z",fill:"#344054"})])],-1)),xe={key:0,class:"custom-dropdown-base"},Le=["onClick"],Ie={class:"mb-3"},De=r(()=>e("label",{class:"form-label"},"Password",-1)),Ve={key:0,class:"form-validate"},ze={class:"d-flex justify-content-end gap-4"},Me={key:0},Re={id:"myModal",class:"modal"},Ue={class:"modal-content d-flex flex-column"},He={id:"crop-component",ref:"cropComponent"},Fe={id:"crop-result"},Ae=r(()=>e("div",{class:"form-label"},"Result:",-1)),Be={id:"zoom-range"},Ne=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"gray"},[e("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM136 184c-13.3 0-24 10.7-24 24s10.7 24 24 24H280c13.3 0 24-10.7 24-24s-10.7-24-24-24H136z"})],-1)),Ze=[Ne],qe=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"gray"},[e("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24V232h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"})],-1)),Oe=[qe],Pe={class:"d-flex flex-row justify-content-center mt-2"},Te={class:"d-flex flex-row justify-content-between justify-content-lg-end gap-2 mt-5 pb-2 pb-lg-0"},je=r(()=>e("span",{class:"d-none d-lg-block"}," Cancel   ",-1)),Ee=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"white",width:"16",height:"16"},[e("path",{d:"M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"})],-1)),Je=[je,Ee],We=r(()=>e("span",{class:"d-none d-lg-block"}," Crop   ",-1)),Ye=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"white",width:"16",height:"16"},[e("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"})],-1)),Ge=[We,Ye];function Ke(o,t,l,u,s,d){const k=v("router-link"),y=v("cropper"),x=v("preview");return n(),a("div",N,[Z,e("div",q,[e("div",O,[e("div",P,[e("div",T,[j,s.image?(n(),a("div",Y,[e("p",null,[e("img",{src:s.image,height:"300",width:"300",style:{"background-color":"lightgrey"}},null,8,G)]),s.validate.notSquareImg?(n(),a("p",K,X)):c("",!0),e("div",$,[e("button",{class:"btn red-btn",onClick:t[1]||(t[1]=(...i)=>d.removeImage&&d.removeImage(...i))},[h(" Remove   "),ee]),e("button",{class:"btn green-btn",onClick:t[2]||(t[2]=i=>s.showCropModal=!0)},[h(" Crop   "),se])])])):(n(),a("div",E,[e("input",{id:"choose-avatar",type:"file",accept:"image/*",onChange:t[0]||(t[0]=(...i)=>d.onFileChange&&d.onFileChange(...i)),hidden:""},null,32),J,W]))])]),e("div",te,[e("div",oe,[ie,m(e("input",{"onUpdate:modelValue":t[3]||(t[3]=i=>s.user.first_name=i),type:"text",class:"form-control"},null,512),[[p,s.user.first_name]]),s.validate.first_name&&(s.user.first_name==""||s.user.first_name==null)?(n(),a("div",re," please enter a first name! ")):c("",!0)]),e("div",le,[ne,m(e("input",{"onUpdate:modelValue":t[4]||(t[4]=i=>s.user.last_name=i),type:"text",class:"form-control"},null,512),[[p,s.user.last_name]]),s.validate.last_name&&(s.user.last_name==""||s.user.last_name==null)?(n(),a("div",ae," please enter a last name! ")):c("",!0)]),e("div",de,[ce,m(e("input",{"onUpdate:modelValue":t[5]||(t[5]=i=>s.user.username=i),type:"text",class:"form-control"},null,512),[[p,s.user.username]]),s.validate.username&&(s.user.username==""||s.user.username==null)?(n(),a("div",ue," please enter a username! ")):c("",!0)]),e("div",he,[me,m(e("input",{"onUpdate:modelValue":t[6]||(t[6]=i=>s.user.email=i),type:"email",class:"form-control",onBlur:t[7]||(t[7]=(...i)=>d.ValidateEmail&&d.ValidateEmail(...i))},null,544),[[p,s.user.email]]),s.validate.email&&(s.user.email==""||s.user.email==null)?(n(),a("div",pe," please enter an email address! ")):c("",!0),s.validate.emailFormat?(n(),a("div",_e," please enter a valid email address! ")):c("",!0)]),e("div",ve,[fe,e("div",we,[e("div",{class:f([s.showRoleDropDown?"custom-select-button-focus":"custom-select-button"]),onClick:t[8]||(t[8]=i=>s.showRoleDropDown=!s.showRoleDropDown)},[h(w(s.user.role)+" ",1),ge],2),s.showRoleDropDown?(n(),a("div",Ce,[e("div",{class:"custom-dropdown-option",onClick:t[9]||(t[9]=i=>{s.user.role="student",s.showRoleDropDown=!1})}," student "),e("div",{class:"custom-dropdown-option",onClick:t[10]||(t[10]=i=>{s.user.role="instructor",s.showRoleDropDown=!1})}," instructor "),e("div",{class:"custom-dropdown-option",onClick:t[11]||(t[11]=i=>{s.user.role="editor",s.showRoleDropDown=!1})}," editor "),e("div",{class:"custom-dropdown-option",onClick:t[12]||(t[12]=i=>{s.user.role="admin",s.showRoleDropDown=!1})}," admin ")])):c("",!0)])]),s.user.role=="student"?(n(),a("div",be,[Se,e("div",ke,[e("div",{class:f([s.showDropDown?"custom-select-button-focus":"custom-select-button"]),onClick:t[13]||(t[13]=i=>s.showDropDown=!s.showDropDown)},[h(w(s.instructorName)+" ",1),ye],2),s.showDropDown?(n(),a("div",xe,[(n(!0),a(C,null,V(s.instructors,i=>(n(),a("div",{class:"custom-dropdown-option",onClick:ss=>{s.instructorId=i.id,s.instructorName=i.username,s.showDropDown=!1}},w(i.username),9,Le))),256))])):c("",!0)])])):c("",!0),e("div",Ie,[De,m(e("input",{"onUpdate:modelValue":t[14]||(t[14]=i=>s.user.password=i),type:"text",class:"form-control"},null,512),[[p,s.user.password]]),s.validate.password&&(s.user.password==""||s.user.password==null)?(n(),a("div",Ve," please enter a password! ")):c("",!0)]),e("div",ze,[_(k,{class:"btn red-btn",to:"/users"},{default:z(()=>[h(" Cancel ")]),_:1}),e("button",{class:"btn purple-btn",onClick:t[15]||(t[15]=i=>d.ValidateForm())}," Submit ")])])])]),s.showCropModal?(n(),a("div",Me,[e("div",Re,[e("div",Ue,[e("div",He,[_(y,{src:s.image,onChange:d.cropImageChange,onReady:d.handlePhoneCropper,"stencil-props":{movable:!0,resizable:!0,aspectRatio:1},"image-restriction":"stencil",class:"cropper",ref:"cropper",debounce:!1},null,8,["src","onChange","onReady"]),e("div",Fe,[Ae,_(x,{width:120,height:120,image:s.cropResult.image,coordinates:s.cropResult.coordinates},null,8,["image","coordinates"])])],512),e("div",Be,[e("span",{class:"mt-1 me-1 zoom-icon",onClick:t[16]||(t[16]=(...i)=>d.cropperZoomOut&&d.cropperZoomOut(...i))},Ze),e("span",{class:"mt-1 ms-1 zoom-icon",onClick:t[17]||(t[17]=(...i)=>d.cropperZoomIn&&d.cropperZoomIn(...i))},Oe)]),e("div",Pe,[s.validate.notCropped?(n(),a("div",{key:0,id:"warning-line",class:f({shake:s.validate.notCropped})}," Please crop your image to square aspect ratio ",2)):c("",!0)]),e("div",Te,[e("button",{class:"btn red-btn",onClick:t[18]||(t[18]=(...i)=>d.handleCancelCrop&&d.handleCancelCrop(...i))},Je),e("button",{class:"btn green-btn",onClick:t[19]||(t[19]=(...i)=>d.handleCropImage&&d.handleCropImage(...i))},Ge)])])])])):c("",!0)])}const Qe=g(B,[["render",Ke],["__scopeId","data-v-762751c5"]]);const Xe=o=>(b("data-v-0556eebc"),o=o(),S(),o),$e=Xe(()=>e("div",{id:"banner"},[e("img",{src:L,class:"image-fluid"})],-1)),es={__name:"AddUserView",setup(o){return(t,l)=>(n(),a(C,null,[$e,_(Qe)],64))}},ds=g(es,[["__scopeId","data-v-0556eebc"]]);export{ds as default};
