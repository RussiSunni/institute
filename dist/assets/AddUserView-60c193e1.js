import{_ as I}from"./general-banner-1c13aca4.js";import{_ as g,g as V,x as z,E as D,B as M,r as w,o as l,c as n,d as e,b as d,s as u,w as m,j as _,i as v,t as f,F as C,k as R,D as U,e as p,m as H,p as b,f as k}from"./main-674e8d78.js";import{C as B}from"./CheckPasswordComplexity-16cc262d.js";import{u as F}from"./InstructorStudentsStore-6f191f29.js";import{f as A,h as N}from"./theme.compact-9d3b919f.js";import{_ as P}from"./recurso-69-12793b41.js";const Z={setup(){const o=V(),t=z(),a=F(),h=D();return{skillsStore:o,usersStore:t,instructorStudentsStore:a,userSkillsStore:h}},data(){return{user:{role:"student"},image:"",firstLevelSkills:[],newUserId:null,isValidated:!1,instructors:[],instructorId:0,instructorName:"",showDropDown:!1,showRoleDropDown:!1,validate:{first_name:!1,last_name:!1,email:!1,emailFormat:!1,password:!1,notSquareImg:!1,notCropped:!1,passwordComplex:!1},passwordVisible:!1,showCropModal:!1,cropCanvas:"",cropResult:{coordinates:null,image:null},lastZoomValue:0,zoomValue:0}},components:{Cropper:A,Preview:N,CheckPasswordComplexity:B},async created(){this.skillsStore.skillsList.length<1&&await this.skillsStore.getSkillsList();for(let o=0;o<this.skillsStore.skillsList.length;o++)this.skillsStore.skillsList[o].parent==0&&this.firstLevelSkills.push(this.skillsStore.skillsList[o])},async mounted(){this.usersStore.users.length<1&&await this.usersStore.getUsers(),this.getInstructors()},methods:{getInstructors(){for(let o=0;o<this.usersStore.users.length;o++)this.usersStore.users[o].role=="instructor"&&(this.instructors.push(this.usersStore.users[o]),this.instructorId===0&&(this.instructorId=this.usersStore.users[o].id,this.instructorName=this.usersStore.users[o].username))},ValidateForm(){this.user.first_name==""||this.user.first_name==null?this.validate.first_name=!0:this.user.last_name==""||this.user.last_name==null?this.validate.last_name=!0:this.user.username==""||this.user.username==null?this.validate.username=!0:this.user.email==""||this.user.email==null?this.validate.email=!0:this.validate.passwordComplex&&this.Submit()},ValidateEmail(){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email)?this.validate.emailFormat=!1:this.validate.emailFormat=!0},Submit(){const o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstname:this.user.first_name,lastname:this.user.last_name,username:this.user.username,email:this.user.email,avatar:this.user.avatar,password:this.user.password,role:this.user.role})};var t="/users/add";fetch(t,o).then(function(a){return a.json()}).then(a=>{a.account=="username already taken"||a.account=="email already taken"?alert(a.account):(alert("account created"),this.usersStore.getUsers(),M.push({name:"users"}),this.isValidated=!0),this.newUserId=a.id}).then(a=>{if(this.isValidated)for(let h=0;h<this.firstLevelSkills.length;h++)this.userSkillsStore.MakeMastered(this.newUserId,this.firstLevelSkills[h])}).then(a=>{if(this.user.role=="student"){const s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({instructor_id:this.instructorId,student_id:this.newUserId})};var h="/users/add/instructor";fetch(h,s)}}).then(async a=>{await this.instructorStudentsStore.getInstructorStudentsList()})},onFileChange(o){var t=o.target.files||o.dataTransfer.files;t.length&&this.createImage(t[0])},createImage(o){var t=new Image,a=new FileReader,h=this;a.onload=s=>{h.image=s.target.result,this.image=s.target.result,t.src=s.target.result,this.user.avatar=this.image},t.onload=()=>{t.width/t.height!==1?(this.validate.notSquareImg=!0,this.showCropModal=!0):this.validate.notSquareImg=!1},a.readAsDataURL(o)},removeImage:function(o){this.image="",this.user.avatar=this.image},cropImageChange({coordinates:o,canvas:t,image:a}){this.cropResult={coordinates:o,image:a},this.cropCanvas=t.toDataURL()},handleCropImage(){var o=new Image;o.src=this.cropCanvas,this.user.avatar=this.cropCanvas,this.image=this.cropCanvas,this.showCropModal=!1,this.validate.notSquareImg=!1,this.validate.notCropped=!1},handleCancelCrop(){this.validate.notSquareImg?(this.validate.notCropped=!0,setTimeout(()=>{this.validate.notCropped=!1},2e3)):(this.showCropModal=!1,this.validate.notCropped=!1)},stencilSize({boundaries:o}){return{width:Math.min(o.height,o.width)-48,height:Math.min(o.height,o.width)-48}},handlePhoneCropper(){if(window.innerWidth<940){const{visibleArea:o,image:t}=this.$refs.cropper.getResult();this.zoomValue=o.height/t.height,this.lastZoomValue=this.zoomValue,this.$refs.cropper.zoom(this.zoomValue)}},cropperZoomIn(){this.$refs.cropper.visibleArea.height>30&&this.$refs.cropper.zoom(2)},cropperZoomOut(){this.$refs.cropper.visibleArea.height<3e3&&this.$refs.cropper.zoom(.5)}}},r=o=>(b("data-v-6b94cd47"),o=o(),k(),o),q={class:"container mt-3 pb-3"},O=r(()=>e("div",{class:"row"},[e("div",{class:"col-10 d-flex align-items-end"},[e("h2",{id:"header-tile"},"Add User"),e("img",{src:P,id:"header-icon"})])],-1)),j={class:"main-content-container container-fluid mt-5 p-4"},T={class:"row"},E={class:"col-lg-4"},J={class:"mb-3 row"},W=r(()=>e("label",{class:"form-label"},"Avatar",-1)),Y={key:0},G=r(()=>e("label",{class:"btn green-btn",for:"choose-avatar"},[u("Add   "),e("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"white"})])],-1)),K=r(()=>e("p",{style:{"font-size":"14px"}},[e("em",null,"Maximum file size 15mb")],-1)),Q={key:1},X=["src"],$={key:0,style:{"font-size":"14px"}},ee=r(()=>e("em",{id:"warning-text"}," Your profile picture is not in 1:1 aspect ratio. Please be aware that it may not display correctly. It is recommended that you crop the image. ",-1)),se=[ee],te={class:"d-flex flex-row gap-2"},oe=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"white",width:"16",height:"16"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),ie=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"white"},[e("path",{d:"M448 109.3l54.6-54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L402.7 64 160 64v64l178.7 0L128 338.7V32c0-17.7-14.3-32-32-32S64 14.3 64 32V64H32C14.3 64 0 78.3 0 96s14.3 32 32 32H64V384c0 35.3 28.7 64 64 64H352V384H173.3L384 173.3 384 480c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H448l0-274.7z"})],-1)),re={class:"col-lg-4"},le={class:"mb-3"},ne=r(()=>e("label",{for:"first_name",class:"form-label"},"First Name",-1)),ae={key:0,class:"form-validate"},ce={class:"mb-3"},de=r(()=>e("label",{for:"last_name",class:"form-label"},"Last Name",-1)),he={key:0,class:"form-validate"},ue={class:"mb-3"},me=r(()=>e("label",{class:"form-label"},"Username",-1)),pe={key:0,class:"form-validate"},we={class:"mb-3"},_e=r(()=>e("label",{class:"form-label"},"Email address",-1)),ve={key:0,class:"form-validate"},fe={key:1,class:"form-validate"},ge={class:"mb-3"},Ce=r(()=>e("label",{class:"form-label"},"Role",-1)),be={class:"d-flex flex-column"},ke=r(()=>e("span",null,[e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z",fill:"#344054"})])],-1)),ye={key:0,class:"custom-dropdown-base"},Se={key:0,class:"mb-3"},xe=r(()=>e("label",{class:"form-label"},"Instructor",-1)),Le={class:"d-flex flex-column"},Ie=r(()=>e("span",null,[e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z",fill:"#344054"})])],-1)),Ve={key:0,class:"custom-dropdown-base"},ze=["onClick"],De={class:"mb-3"},Me=r(()=>e("label",{class:"form-label"},"Password",-1)),Re={class:"password-div"},Ue=["type"],He=["title"],Be=r(()=>e("path",{d:"M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"},null,-1)),Fe=[Be],Ae=r(()=>e("path",{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z"},null,-1)),Ne=[Ae],Pe={key:0,class:"form-validate"},Ze={class:"d-flex justify-content-end gap-4"},qe={key:0},Oe={id:"myModal",class:"modal"},je={class:"modal-content d-flex flex-column"},Te={id:"crop-component",ref:"cropComponent"},Ee={id:"crop-result"},Je=r(()=>e("div",{class:"form-label"},"Result:",-1)),We={id:"zoom-range"},Ye=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"gray"},[e("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM136 184c-13.3 0-24 10.7-24 24s10.7 24 24 24H280c13.3 0 24-10.7 24-24s-10.7-24-24-24H136z"})],-1)),Ge=[Ye],Ke=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"gray"},[e("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24V232h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"})],-1)),Qe=[Ke],Xe={class:"d-flex flex-row justify-content-center mt-2"},$e={class:"d-flex flex-row justify-content-between justify-content-lg-end gap-2 mt-5 pb-2 pb-lg-0"},es=r(()=>e("span",{class:"d-none d-lg-block"}," Cancel   ",-1)),ss=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"white",width:"16",height:"16"},[e("path",{d:"M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"})],-1)),ts=[es,ss],os=r(()=>e("span",{class:"d-none d-lg-block"}," Crop   ",-1)),is=r(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"white",width:"16",height:"16"},[e("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"})],-1)),rs=[os,is];function ls(o,t,a,h,s,c){const y=w("CheckPasswordComplexity"),S=w("router-link"),x=w("cropper"),L=w("preview");return l(),n("div",q,[O,e("div",j,[e("div",T,[e("div",E,[e("div",J,[W,s.image?(l(),n("div",Q,[e("p",null,[e("img",{src:s.image,height:"300",width:"300",style:{"background-color":"lightgrey"}},null,8,X)]),s.validate.notSquareImg?(l(),n("p",$,se)):d("",!0),e("div",te,[e("button",{class:"btn red-btn",onClick:t[1]||(t[1]=(...i)=>c.removeImage&&c.removeImage(...i))},[u(" Remove   "),oe]),e("button",{class:"btn green-btn",onClick:t[2]||(t[2]=i=>s.showCropModal=!0)},[u(" Crop   "),ie])])])):(l(),n("div",Y,[e("input",{id:"choose-avatar",type:"file",accept:"image/*",onChange:t[0]||(t[0]=(...i)=>c.onFileChange&&c.onFileChange(...i)),hidden:""},null,32),G,K]))])]),e("div",re,[e("div",le,[ne,m(e("input",{"onUpdate:modelValue":t[3]||(t[3]=i=>s.user.first_name=i),type:"text",class:"form-control"},null,512),[[_,s.user.first_name]]),s.validate.first_name&&(s.user.first_name==""||s.user.first_name==null)?(l(),n("div",ae," please enter a first name! ")):d("",!0)]),e("div",ce,[de,m(e("input",{"onUpdate:modelValue":t[4]||(t[4]=i=>s.user.last_name=i),type:"text",class:"form-control"},null,512),[[_,s.user.last_name]]),s.validate.last_name&&(s.user.last_name==""||s.user.last_name==null)?(l(),n("div",he," please enter a last name! ")):d("",!0)]),e("div",ue,[me,m(e("input",{"onUpdate:modelValue":t[5]||(t[5]=i=>s.user.username=i),type:"text",class:"form-control"},null,512),[[_,s.user.username]]),s.validate.username&&(s.user.username==""||s.user.username==null)?(l(),n("div",pe," please enter a username! ")):d("",!0)]),e("div",we,[_e,m(e("input",{"onUpdate:modelValue":t[6]||(t[6]=i=>s.user.email=i),type:"email",class:"form-control",onBlur:t[7]||(t[7]=(...i)=>c.ValidateEmail&&c.ValidateEmail(...i))},null,544),[[_,s.user.email]]),s.validate.email&&(s.user.email==""||s.user.email==null)?(l(),n("div",ve," please enter an email address! ")):d("",!0),s.validate.emailFormat?(l(),n("div",fe," please enter a valid email address! ")):d("",!0)]),e("div",ge,[Ce,e("div",be,[e("div",{class:v([s.showRoleDropDown?"custom-select-button-focus":"custom-select-button"]),onClick:t[8]||(t[8]=i=>s.showRoleDropDown=!s.showRoleDropDown)},[u(f(s.user.role)+" ",1),ke],2),s.showRoleDropDown?(l(),n("div",ye,[e("div",{class:"custom-dropdown-option",onClick:t[9]||(t[9]=i=>{s.user.role="student",s.showRoleDropDown=!1})}," student "),e("div",{class:"custom-dropdown-option",onClick:t[10]||(t[10]=i=>{s.user.role="instructor",s.showRoleDropDown=!1})}," instructor "),e("div",{class:"custom-dropdown-option",onClick:t[11]||(t[11]=i=>{s.user.role="editor",s.showRoleDropDown=!1})}," editor "),e("div",{class:"custom-dropdown-option",onClick:t[12]||(t[12]=i=>{s.user.role="admin",s.showRoleDropDown=!1})}," admin ")])):d("",!0)])]),s.user.role=="student"?(l(),n("div",Se,[xe,e("div",Le,[e("div",{class:v([s.showDropDown?"custom-select-button-focus":"custom-select-button"]),onClick:t[13]||(t[13]=i=>s.showDropDown=!s.showDropDown)},[u(f(s.instructorName)+" ",1),Ie],2),s.showDropDown?(l(),n("div",Ve,[(l(!0),n(C,null,R(s.instructors,i=>(l(),n("div",{class:"custom-dropdown-option",onClick:hs=>{s.instructorId=i.id,s.instructorName=i.username,s.showDropDown=!1}},f(i.username),9,ze))),256))])):d("",!0)])])):d("",!0),e("div",De,[Me,e("div",Re,[m(e("input",{"onUpdate:modelValue":t[14]||(t[14]=i=>s.user.password=i),type:s.passwordVisible?"text":"password",placeholder:"Password",class:"form-control",id:"password-input",required:""},null,8,Ue),[[U,s.user.password]]),e("div",{class:"eye-icon","b-tooltip.hover":"",title:s.passwordVisible?"hide password":"show password"},[s.passwordVisible?(l(),n("svg",{key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",width:"20",height:"20",fill:"gray",onClick:t[15]||(t[15]=i=>s.passwordVisible=!1)},Fe)):(l(),n("svg",{key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",width:"20",height:"20",fill:"gray",onClick:t[16]||(t[16]=i=>s.passwordVisible=!0)},Ne))],8,He)]),s.validate.password&&(s.user.password==""||s.user.password==null)?(l(),n("div",Pe," please enter a password! ")):d("",!0),p(y,{formData:s.user},null,8,["formData"])]),e("div",Ze,[p(S,{class:"btn red-btn",to:"/users"},{default:H(()=>[u(" Cancel ")]),_:1}),e("button",{class:"btn purple-btn",onClick:t[17]||(t[17]=i=>c.ValidateForm())}," Submit ")])])])]),s.showCropModal?(l(),n("div",qe,[e("div",Oe,[e("div",je,[e("div",Te,[p(x,{src:s.image,onChange:c.cropImageChange,onReady:c.handlePhoneCropper,"stencil-props":{movable:!0,resizable:!0,aspectRatio:1},"image-restriction":"stencil",class:"cropper",ref:"cropper",debounce:!1},null,8,["src","onChange","onReady"]),e("div",Ee,[Je,p(L,{width:120,height:120,image:s.cropResult.image,coordinates:s.cropResult.coordinates},null,8,["image","coordinates"])])],512),e("div",We,[e("span",{class:"mt-1 me-1 zoom-icon",onClick:t[18]||(t[18]=(...i)=>c.cropperZoomOut&&c.cropperZoomOut(...i))},Ge),e("span",{class:"mt-1 ms-1 zoom-icon",onClick:t[19]||(t[19]=(...i)=>c.cropperZoomIn&&c.cropperZoomIn(...i))},Qe)]),e("div",Xe,[s.validate.notCropped?(l(),n("div",{key:0,id:"warning-line",class:v({shake:s.validate.notCropped})}," Please crop your image to square aspect ratio ",2)):d("",!0)]),e("div",$e,[e("button",{class:"btn red-btn",onClick:t[20]||(t[20]=(...i)=>c.handleCancelCrop&&c.handleCancelCrop(...i))},ts),e("button",{class:"btn green-btn",onClick:t[21]||(t[21]=(...i)=>c.handleCropImage&&c.handleCropImage(...i))},rs)])])])])):d("",!0)])}const ns=g(Z,[["render",ls],["__scopeId","data-v-6b94cd47"]]);const as=o=>(b("data-v-0556eebc"),o=o(),k(),o),cs=as(()=>e("div",{id:"banner"},[e("img",{src:I,class:"image-fluid"})],-1)),ds={__name:"AddUserView",setup(o){return(t,a)=>(l(),n(C,null,[cs,p(ns)],64))}},fs=g(ds,[["__scopeId","data-v-0556eebc"]]);export{fs as default};
