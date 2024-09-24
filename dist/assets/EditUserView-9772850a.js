import{_ as I,s as x,r as _,o as l,c as a,b as e,q as d,t as v,w as h,i as m,a as u,h as w,F as g,j as y,d as f,l as L,p as k,e as D,N as z}from"./main-bece9244.js";import{u as V}from"./InstructorStudentsStore-49748be3.js";import{f as M,h as R}from"./theme.compact-ee0283dd.js";import{_ as H}from"./recurso-69-12793b41.js";const U={setup(){const o=x(),t=V();return{usersStore:o,instructorStudentsStore:t}},data(){return{userId:this.$route.params.id,user:{},image:"",instructors:[],instructorId:0,instructorName:"",showRoleDropDown:!1,showInstructorDropDown:!1,validate:{first_name:!1,last_name:!1,email:!1,emailFormat:!1,password:!1,notSquareImg:!1,notCropped:!1},showCropModal:!1,cropCanvas:"",cropResult:{coordinates:null,image:null},lastZoomValue:0,zoomValue:0}},components:{Cropper:M,Preview:R},async mounted(){if(this.usersStore.users.length<1&&await this.usersStore.getUsers(),this.instructorStudentsStore.instructorStudentsList.length==0&&await this.instructorStudentsStore.getInstructorStudentsList(),this.getInstructors(),this.instructorId!==0){const o=this.instructors.find(t=>t.id===this.instructorId);this.instructorName=o.username}},methods:{getUser(){fetch("/users/show/"+this.userId).then(function(o){return o.json()}).then(o=>this.user=o).then(()=>{this.image=this.user.avatar})},async getInstructors(){for(let o=0;o<this.usersStore.users.length;o++)this.usersStore.users[o].role=="instructor"&&this.instructors.push(this.usersStore.users[o]);for(let o=0;o<this.instructorStudentsStore.instructorStudentsList.length;o++)this.instructorStudentsStore.instructorStudentsList[o].student_id==this.userId&&(this.instructorId=this.instructorStudentsStore.instructorStudentsList[o].instructor_id);this.getUser()},ValidateForm(){this.user.first_name==""||this.user.first_name==null?this.validate.first_name=!0:this.user.last_name==""||this.user.last_name==null?this.validate.last_name=!0:this.user.username==""||this.user.username==null?this.validate.username=!0:this.user.email==""||this.user.email==null?this.validate.email=!0:this.Submit()},ValidateEmail(){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email)?this.validate.emailFormat=!1:this.validate.emailFormat=!0},Submit(){const o={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstname:this.user.first_name,lastname:this.user.last_name,username:this.user.username,email:this.user.email,avatar:this.user.avatar,role:this.user.role,password:this.user.password})};var t="/users/"+this.userId+"/edit";fetch(t,o).then(()=>{if(this.user.role=="student"){const p={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({instructor_id:this.instructorId})};var c="/users/"+this.userId+"/edit/instructor";fetch(c,p)}}).then(()=>{this.usersStore.getUsers(),this.$router.push("/users")})},onFileChange(o){var t=o.target.files||o.dataTransfer.files;t.length&&this.createImage(t[0])},createImage(o){var t=new Image,c=new FileReader,p=this;c.onload=s=>{p.image=s.target.result,this.image=s.target.result,t.src=s.target.result,this.user.avatar=this.image},t.onload=()=>{t.width/t.height!==1?(this.validate.notSquareImg=!0,this.showCropModal=!0):this.validate.notSquareImg=!1},c.readAsDataURL(o)},removeImage:function(o){this.image="",this.user.avatar=this.image},cropImageChange({coordinates:o,canvas:t,image:c}){this.cropResult={coordinates:o,image:c},this.cropCanvas=t.toDataURL()},handleCropImage(){var o=new Image;o.src=this.cropCanvas,this.user.avatar=this.cropCanvas,this.image=this.cropCanvas,this.showCropModal=!1,this.validate.notSquareImg=!1,this.validate.notCropped=!1},handleCancelCrop(){this.validate.notSquareImg?(this.validate.notCropped=!0,setTimeout(()=>{this.validate.notCropped=!1},2e3)):this.showCropModal=!1},stencilSize({boundaries:o}){return{width:Math.min(o.height,o.width)-48,height:Math.min(o.height,o.width)-48}},handlePhoneCropper(){if(window.innerWidth<940){const{visibleArea:o,image:t}=this.$refs.cropper.getResult();this.zoomValue=o.height/t.height,this.lastZoomValue=this.zoomValue,this.$refs.cropper.zoom(this.zoomValue)}},cropperZoomIn(){this.$refs.cropper.visibleArea.height>30&&this.$refs.cropper.zoom(2)},cropperZoomOut(){this.$refs.cropper.visibleArea.height<3e3&&this.$refs.cropper.zoom(.5)}}},i=o=>(k("data-v-5028233f"),o=o(),D(),o),F={class:"container mt-3 pb-5"},B=i(()=>e("div",{class:"row"},[e("div",{class:"col-10 d-flex align-items-end"},[e("h2",{id:"header-tile"},"Edit User"),e("img",{src:H,id:"header-icon"})])],-1)),N={class:"container-fluid main-content-container p-4 mt-5"},Z={class:"row"},q={class:"col-lg-4 mt-3"},E={class:"mb-3 row"},j=i(()=>e("label",{class:"form-label"},"Avatar",-1)),A={key:0},T=i(()=>e("label",{class:"btn green-btn",for:"choose-avatar"},[d("Add   "),e("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"white"})])],-1)),O=i(()=>e("p",{style:{"font-size":"14px"}},[e("em",null,"Maximum file size 15mb")],-1)),P={key:1},J=["src"],W={class:"d-flex flex-row gap-2"},G=i(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"white",width:"16",height:"16"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),K=i(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"white"},[e("path",{d:"M448 109.3l54.6-54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L402.7 64 160 64v64l178.7 0L128 338.7V32c0-17.7-14.3-32-32-32S64 14.3 64 32V64H32C14.3 64 0 78.3 0 96s14.3 32 32 32H64V384c0 35.3 28.7 64 64 64H352V384H173.3L384 173.3 384 480c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H448l0-274.7z"})],-1)),Q={class:"col-lg-4 mt-3"},X={class:"mb-3"},Y={for:"firstname",class:"form-label"},$={key:0,class:"form-validate"},ee={class:"mb-3"},se=i(()=>e("label",{for:"lastname",class:"form-label"},"Last name",-1)),te={key:0,class:"form-validate"},oe={class:"mb-3"},re=i(()=>e("label",{class:"form-label"},"Username",-1)),ie={key:0,class:"form-validate"},ne={class:"mb-3"},le=i(()=>e("label",{class:"form-label"},"Email address",-1)),ae={key:0,class:"form-validate"},ue={key:1,class:"form-validate"},ce={class:"mb-3"},de=i(()=>e("label",{class:"form-label"},"Role",-1)),he={class:"d-flex flex-column"},me=i(()=>e("span",null,[e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z",fill:"#344054"})])],-1)),pe={key:0,class:"custom-dropdown-base"},ve={key:0,class:"mb-3"},fe=i(()=>e("label",{class:"form-label"},"Instructor",-1)),_e={class:"d-flex flex-column"},we=i(()=>e("span",null,[e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z",fill:"#344054"})])],-1)),ge={key:0,class:"custom-dropdown-base"},Ce=["onClick"],be={class:"mb-3"},Se=i(()=>e("label",{class:"form-label"},"Password",-1)),Ie={key:0,class:"form-validate"},xe={class:"d-flex justify-content-end gap-4"},ye={key:0},Le={id:"myModal",class:"modal"},ke={class:"modal-content d-flex flex-column"},De={id:"crop-component",ref:"cropComponent"},ze={id:"crop-result"},Ve=i(()=>e("div",{class:"form-label"},"Result:",-1)),Me={id:"zoom-range"},Re=i(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"gray"},[e("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM136 184c-13.3 0-24 10.7-24 24s10.7 24 24 24H280c13.3 0 24-10.7 24-24s-10.7-24-24-24H136z"})],-1)),He=[Re],Ue=i(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"gray"},[e("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24V232h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"})],-1)),Fe=[Ue],Be={class:"d-flex flex-row justify-content-center mt-2"},Ne={class:"d-flex flex-row justify-content-between justify-content-lg-end gap-2 mt-5 pb-2 pb-lg-0"},Ze=i(()=>e("span",{class:"d-none d-lg-block"}," Cancel   ",-1)),qe=i(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"white",width:"16",height:"16"},[e("path",{d:"M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"})],-1)),Ee=[Ze,qe],je=i(()=>e("span",{class:"d-none d-lg-block"}," Crop   ",-1)),Ae=i(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"white",width:"16",height:"16"},[e("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"})],-1)),Te=[je,Ae];function Oe(o,t,c,p,s,n){const C=_("router-link"),b=_("cropper"),S=_("preview");return l(),a(g,null,[e("div",F,[B,e("div",N,[e("div",Z,[e("div",q,[e("div",E,[j,s.image?(l(),a("div",P,[e("p",null,[e("img",{src:s.image,height:"300",width:"300",style:{"background-color":"lightgrey"}},null,8,J)]),e("div",W,[e("button",{class:"btn red-btn",onClick:t[1]||(t[1]=(...r)=>n.removeImage&&n.removeImage(...r))},[d(" Remove   "),G]),e("button",{class:"btn green-btn",onClick:t[2]||(t[2]=r=>s.showCropModal=!0)},[d(" Crop   "),K])])])):(l(),a("div",A,[e("input",{id:"choose-avatar",type:"file",accept:"image/*",onChange:t[0]||(t[0]=(...r)=>n.onFileChange&&n.onFileChange(...r)),hidden:""},null,32),T,O]))])]),e("div",Q,[e("div",X,[e("label",Y,"First name "+v(o.firstName),1),h(e("input",{"onUpdate:modelValue":t[3]||(t[3]=r=>s.user.first_name=r),type:"text",class:"form-control"},null,512),[[m,s.user.first_name]]),s.validate.first_name&&(s.user.first_name==""||s.user.first_name==null)?(l(),a("div",$," please enter a first name ! ")):u("",!0)]),e("div",ee,[se,h(e("input",{"onUpdate:modelValue":t[4]||(t[4]=r=>s.user.last_name=r),type:"text",class:"form-control"},null,512),[[m,s.user.last_name]]),s.validate.last_name&&(s.user.last_name==""||s.user.last_name==null)?(l(),a("div",te," please enter a last name ! ")):u("",!0)]),e("div",oe,[re,h(e("input",{"onUpdate:modelValue":t[5]||(t[5]=r=>s.user.username=r),type:"text",class:"form-control"},null,512),[[m,s.user.username]]),s.validate.username&&(s.user.username==""||s.user.username==null)?(l(),a("div",ie," please enter a user name ! ")):u("",!0)]),e("div",ne,[le,h(e("input",{"onUpdate:modelValue":t[6]||(t[6]=r=>s.user.email=r),type:"email",class:"form-control",onBlur:t[7]||(t[7]=(...r)=>n.ValidateEmail&&n.ValidateEmail(...r))},null,544),[[m,s.user.email]]),s.validate.email&&(s.user.email==""||s.user.email==null)?(l(),a("div",ae," please enter an email ! ")):u("",!0),s.validate.emailFormat?(l(),a("div",ue," please enter a valid email ! ")):u("",!0)]),e("div",ce,[de,e("div",he,[e("div",{class:w([s.showRoleDropDown?"custom-select-button-focus":"custom-select-button"]),onClick:t[8]||(t[8]=r=>s.showRoleDropDown=!s.showRoleDropDown)},[d(v(s.user.role)+" ",1),me],2),s.showRoleDropDown?(l(),a("div",pe,[e("div",{class:"custom-dropdown-option",onClick:t[9]||(t[9]=r=>{s.user.role="student",s.showRoleDropDown=!1})}," student "),e("div",{class:"custom-dropdown-option",onClick:t[10]||(t[10]=r=>{s.user.role="instructor",s.showRoleDropDown=!1})}," instructor "),e("div",{class:"custom-dropdown-option",onClick:t[11]||(t[11]=r=>{s.user.role="editor",s.showRoleDropDown=!1})}," editor "),e("div",{class:"custom-dropdown-option",onClick:t[12]||(t[12]=r=>{s.user.role="admin",s.showRoleDropDown=!1})}," admin ")])):u("",!0)])]),s.user.role=="student"?(l(),a("div",ve,[fe,e("div",_e,[e("div",{class:w([s.showInstructorDropDown?"custom-select-button-focus":"custom-select-button"]),onClick:t[13]||(t[13]=r=>s.showInstructorDropDown=!s.showInstructorDropDown)},[d(v(s.instructorName)+" ",1),we],2),s.showInstructorDropDown?(l(),a("div",ge,[(l(!0),a(g,null,y(s.instructors,r=>(l(),a("div",{class:"custom-dropdown-option",onClick:We=>{s.instructorId=r.id,s.instructorName=r.username,s.showInstructorDropDown=!1}},v(r.username),9,Ce))),256))])):u("",!0)])])):u("",!0),e("div",be,[Se,h(e("input",{"onUpdate:modelValue":t[14]||(t[14]=r=>s.user.password=r),type:"text",class:"form-control"},null,512),[[m,s.user.password]]),s.validate.password&&(s.user.password==""||s.user.password==null)?(l(),a("div",Ie," please enter a password ! ")):u("",!0)]),e("div",xe,[f(C,{class:"btn red-btn",to:"/users"},{default:L(()=>[d(" Cancel ")]),_:1}),e("button",{class:"btn purple-btn",onClick:t[15]||(t[15]=r=>n.ValidateForm())}," Submit ")])])])])]),s.showCropModal?(l(),a("div",ye,[e("div",Le,[e("div",ke,[e("div",De,[f(b,{src:s.image,onChange:n.cropImageChange,onReady:n.handlePhoneCropper,"stencil-props":{movable:!0,resizable:!0,aspectRatio:1},"image-restriction":"stencil",class:"cropper",ref:"cropper",debounce:!1},null,8,["src","onChange","onReady"]),e("div",ze,[Ve,f(S,{width:120,height:120,image:s.cropResult.image,coordinates:s.cropResult.coordinates},null,8,["image","coordinates"])])],512),e("div",Me,[e("span",{class:"mt-1 me-1 zoom-icon",onClick:t[16]||(t[16]=(...r)=>n.cropperZoomOut&&n.cropperZoomOut(...r))},He),e("span",{class:"mt-1 ms-1 zoom-icon",onClick:t[17]||(t[17]=(...r)=>n.cropperZoomIn&&n.cropperZoomIn(...r))},Fe)]),e("div",Be,[s.validate.notCropped?(l(),a("div",{key:0,id:"warning-line",class:w({shake:s.validate.notCropped})}," Please crop your image to square aspect ratio ",2)):u("",!0)]),e("div",Ne,[e("button",{class:"btn red-btn",onClick:t[18]||(t[18]=(...r)=>n.handleCancelCrop&&n.handleCancelCrop(...r))},Ee),e("button",{class:"btn green-btn",onClick:t[19]||(t[19]=(...r)=>n.handleCropImage&&n.handleCropImage(...r))},Te)])])])])):u("",!0)],64)}const Pe=I(U,[["render",Oe],["__scopeId","data-v-5028233f"]]),Je=e("div",{id:"banner"},[e("img",{src:z,class:"image-fluid"})],-1),Ye={__name:"EditUserView",setup(o){return(t,c)=>(l(),a(g,null,[Je,f(Pe)],64))}};export{Ye as default};
