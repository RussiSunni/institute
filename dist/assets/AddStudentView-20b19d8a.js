import{_ as y}from"./general-banner-1c13aca4.js";import{_ as f,g as k,q as x,n as I,s as L,i as v,o as n,c as d,d as e,b as h,m as p,e as m,v as u,a as _,w as V,A as z,p as g,f as w,F as M}from"./main-66a8a419.js";import{u as H}from"./InstructorStudentsStore-3fbb0cbc.js";import{u as U}from"./UserSkillsStore-78a03507.js";import{f as A,h as F}from"./theme.compact-94163cfe.js";import{_ as R}from"./recurso-69-12793b41.js";const B={setup(){const i=k(),s=x(),r=I(),c=H(),t=U();return{userDetailsStore:i,skillsStore:s,usersStore:r,instructorStudentsStore:c,userSkillsStore:t}},data(){return{user:{role:"student"},image:"",firstLevelSkills:[],newUserId:null,isValidated:!1,instructors:[],instructorId:0,instructorName:"",showDropDown:!1,showRoleDropDown:!1,validate:{first_name:!1,last_name:!1,email:!1,emailFormat:!1,password:!1,notSquareImg:!1,notCropped:!1},showCropModal:!1,cropCanvas:"",cropResult:{coordinates:null,image:null},lastZoomValue:0,zoomValue:0}},components:{Cropper:A,Preview:F},async created(){this.userDetailsStore.role=="instructor"?this.instructorId=this.userDetailsStore.userId:(alert("Only instructors can access this page."),this.$router.push("/")),this.skillsStore.skillsList.length<1&&await this.skillsStore.getSkillsList();for(let i=0;i<this.skillsStore.skillsList.length;i++)this.skillsStore.skillsList[i].parent==0&&this.firstLevelSkills.push(this.skillsStore.skillsList[i])},async mounted(){},methods:{ValidateForm(){this.user.first_name==""||this.user.first_name==null?this.validate.first_name=!0:this.user.last_name==""||this.user.last_name==null?this.validate.last_name=!0:this.user.username==""||this.user.username==null?this.validate.username=!0:this.user.email==""||this.user.email==null?this.validate.email=!0:this.Submit()},ValidateEmail(){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email)?this.validate.emailFormat=!1:this.validate.emailFormat=!0},Submit(){const i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstname:this.user.first_name,lastname:this.user.last_name,username:this.user.username,email:this.user.email,avatar:this.user.avatar,password:this.user.password,role:this.user.role})};var s="/users/add";fetch(s,i).then(function(r){return r.json()}).then(r=>{r.account=="username already taken"||r.account=="email already taken"?alert(r.account):(alert("account created"),this.usersStore.getUsers(),L.push({name:"users"}),this.isValidated=!0),this.newUserId=r.id}).then(r=>{if(this.isValidated)for(let c=0;c<this.firstLevelSkills.length;c++)this.userSkillsStore.MakeMastered(this.newUserId,this.firstLevelSkills[c])}).then(r=>{const c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({instructor_id:this.instructorId,student_id:this.newUserId})};var t="/users/add/instructor";fetch(t,c)}).then(async r=>{await this.instructorStudentsStore.getInstructorStudentsList()})},onFileChange(i){var s=i.target.files||i.dataTransfer.files;s.length&&this.createImage(s[0])},createImage(i){var s=new Image,r=new FileReader,c=this;r.onload=t=>{c.image=t.target.result,this.image=t.target.result,s.src=t.target.result,this.user.avatar=this.image},s.onload=()=>{s.width/s.height!==1?(this.validate.notSquareImg=!0,this.showCropModal=!0):this.validate.notSquareImg=!1},r.readAsDataURL(i)},removeImage:function(i){this.image="",this.user.avatar=this.image},cropImageChange({coordinates:i,canvas:s,image:r}){this.cropResult={coordinates:i,image:r},this.cropCanvas=s.toDataURL()},handleCropImage(){var i=new Image;i.src=this.cropCanvas,this.user.avatar=this.cropCanvas,this.image=this.cropCanvas,this.showCropModal=!1,this.validate.notSquareImg=!1,this.validate.notCropped=!1},handleCancelCrop(){this.validate.notSquareImg?(this.validate.notCropped=!0,setTimeout(()=>{this.validate.notCropped=!1},2e3)):(this.showCropModal=!1,this.validate.notCropped=!1)},stencilSize({boundaries:i}){return{width:Math.min(i.height,i.width)-48,height:Math.min(i.height,i.width)-48}},handlePhoneCropper(){if(window.innerWidth<940){const{visibleArea:i,image:s}=this.$refs.cropper.getResult();this.zoomValue=i.height/s.height,this.lastZoomValue=this.zoomValue,this.$refs.cropper.zoom(this.zoomValue)}},cropperZoomIn(){this.$refs.cropper.visibleArea.height>30&&this.$refs.cropper.zoom(2)},cropperZoomOut(){this.$refs.cropper.visibleArea.height<3e3&&this.$refs.cropper.zoom(.5)}}},l=i=>(g("data-v-c63ddc8d"),i=i(),w(),i),D={class:"container mt-3 pb-3"},q=l(()=>e("div",{class:"row"},[e("div",{class:"col-10 d-flex align-items-end"},[e("h2",{id:"header-tile"},"Add Student"),e("img",{src:R,id:"header-icon"})])],-1)),O={class:"main-content-container container-fluid mt-5 p-4"},N={class:"row"},Z={class:"col-lg-4"},P={class:"mb-3 row"},T=l(()=>e("label",{class:"form-label"},"Avatar",-1)),j={key:0},E=l(()=>e("label",{class:"btn green-btn",for:"choose-avatar"},[p("Add   "),e("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"white"})])],-1)),J=l(()=>e("p",{style:{"font-size":"14px"}},[e("em",null,"Maximum file size 15mb")],-1)),W={key:1},Y=["src"],G={key:0,style:{"font-size":"14px"}},K=l(()=>e("em",{id:"warning-text"}," Your profile picture is not in 1:1 aspect ratio. Please be aware that it may not display correctly. It is recommended that you crop the image. ",-1)),Q=[K],X={class:"d-flex flex-row gap-2"},$=l(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"white",width:"16",height:"16"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),ee=l(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"white"},[e("path",{d:"M448 109.3l54.6-54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L402.7 64 160 64v64l178.7 0L128 338.7V32c0-17.7-14.3-32-32-32S64 14.3 64 32V64H32C14.3 64 0 78.3 0 96s14.3 32 32 32H64V384c0 35.3 28.7 64 64 64H352V384H173.3L384 173.3 384 480c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H448l0-274.7z"})],-1)),se={class:"col-lg-4"},te={class:"mb-3"},ie=l(()=>e("label",{for:"first_name",class:"form-label"},"First Name",-1)),oe={key:0,class:"form-validate"},re={class:"mb-3"},le=l(()=>e("label",{for:"last_name",class:"form-label"},"Last Name",-1)),ae={key:0,class:"form-validate"},ne={class:"mb-3"},de=l(()=>e("label",{class:"form-label"},"Username",-1)),ce={key:0,class:"form-validate"},he={class:"mb-3"},me=l(()=>e("label",{class:"form-label"},"Email address",-1)),ue={key:0,class:"form-validate"},pe={key:1,class:"form-validate"},_e={class:"mb-3"},ve=l(()=>e("label",{class:"form-label"},"Password",-1)),fe={key:0,class:"form-validate"},ge={class:"d-flex justify-content-end gap-4"},we={key:0},Ce={id:"myModal",class:"modal"},Se={class:"modal-content d-flex flex-column"},be={id:"crop-component",ref:"cropComponent"},ye={id:"crop-result"},ke=l(()=>e("div",{class:"form-label"},"Result:",-1)),xe={id:"zoom-range"},Ie=l(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"gray"},[e("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM136 184c-13.3 0-24 10.7-24 24s10.7 24 24 24H280c13.3 0 24-10.7 24-24s-10.7-24-24-24H136z"})],-1)),Le=[Ie],Ve=l(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"gray"},[e("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24V232h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"})],-1)),ze=[Ve],Me={class:"d-flex flex-row justify-content-center mt-2"},He={class:"d-flex flex-row justify-content-between justify-content-lg-end gap-2 mt-5 pb-2 pb-lg-0"},Ue=l(()=>e("span",{class:"d-none d-lg-block"}," Cancel   ",-1)),Ae=l(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"white",width:"16",height:"16"},[e("path",{d:"M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"})],-1)),Fe=[Ue,Ae],Re=l(()=>e("span",{class:"d-none d-lg-block"}," Crop   ",-1)),Be=l(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"white",width:"16",height:"16"},[e("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"})],-1)),De=[Re,Be];function qe(i,s,r,c,t,a){const C=v("router-link"),S=v("cropper"),b=v("preview");return n(),d("div",D,[q,e("div",O,[e("div",N,[e("div",Z,[e("div",P,[T,t.image?(n(),d("div",W,[e("p",null,[e("img",{src:t.image,height:"300",width:"300",style:{"background-color":"lightgrey"}},null,8,Y)]),t.validate.notSquareImg?(n(),d("p",G,Q)):h("",!0),e("div",X,[e("button",{class:"btn red-btn",onClick:s[1]||(s[1]=(...o)=>a.removeImage&&a.removeImage(...o))},[p(" Remove   "),$]),e("button",{class:"btn green-btn",onClick:s[2]||(s[2]=o=>t.showCropModal=!0)},[p(" Crop   "),ee])])])):(n(),d("div",j,[e("input",{id:"choose-avatar",type:"file",accept:"image/*",onChange:s[0]||(s[0]=(...o)=>a.onFileChange&&a.onFileChange(...o)),hidden:""},null,32),E,J]))])]),e("div",se,[e("div",te,[ie,m(e("input",{"onUpdate:modelValue":s[3]||(s[3]=o=>t.user.first_name=o),type:"text",class:"form-control"},null,512),[[u,t.user.first_name]]),t.validate.first_name&&(t.user.first_name==""||t.user.first_name==null)?(n(),d("div",oe," please enter a first name! ")):h("",!0)]),e("div",re,[le,m(e("input",{"onUpdate:modelValue":s[4]||(s[4]=o=>t.user.last_name=o),type:"text",class:"form-control"},null,512),[[u,t.user.last_name]]),t.validate.last_name&&(t.user.last_name==""||t.user.last_name==null)?(n(),d("div",ae," please enter a last name! ")):h("",!0)]),e("div",ne,[de,m(e("input",{"onUpdate:modelValue":s[5]||(s[5]=o=>t.user.username=o),type:"text",class:"form-control"},null,512),[[u,t.user.username]]),t.validate.username&&(t.user.username==""||t.user.username==null)?(n(),d("div",ce," please enter a username! ")):h("",!0)]),e("div",he,[me,m(e("input",{"onUpdate:modelValue":s[6]||(s[6]=o=>t.user.email=o),type:"email",class:"form-control",onBlur:s[7]||(s[7]=(...o)=>a.ValidateEmail&&a.ValidateEmail(...o))},null,544),[[u,t.user.email]]),t.validate.email&&(t.user.email==""||t.user.email==null)?(n(),d("div",ue," please enter an email address! ")):h("",!0),t.validate.emailFormat?(n(),d("div",pe," please enter a valid email address! ")):h("",!0)]),e("div",_e,[ve,m(e("input",{"onUpdate:modelValue":s[8]||(s[8]=o=>t.user.password=o),type:"text",class:"form-control"},null,512),[[u,t.user.password]]),t.validate.password&&(t.user.password==""||t.user.password==null)?(n(),d("div",fe," please enter a password! ")):h("",!0)]),e("div",ge,[_(C,{class:"btn red-btn",to:"/users"},{default:V(()=>[p(" Cancel ")]),_:1}),e("button",{class:"btn purple-btn",onClick:s[9]||(s[9]=o=>a.ValidateForm())}," Submit ")])])])]),t.showCropModal?(n(),d("div",we,[e("div",Ce,[e("div",Se,[e("div",be,[_(S,{src:t.image,onChange:a.cropImageChange,onReady:a.handlePhoneCropper,"stencil-props":{movable:!0,resizable:!0,aspectRatio:1},"image-restriction":"stencil",class:"cropper",ref:"cropper",debounce:!1},null,8,["src","onChange","onReady"]),e("div",ye,[ke,_(b,{width:120,height:120,image:t.cropResult.image,coordinates:t.cropResult.coordinates},null,8,["image","coordinates"])])],512),e("div",xe,[e("span",{class:"mt-1 me-1 zoom-icon",onClick:s[10]||(s[10]=(...o)=>a.cropperZoomOut&&a.cropperZoomOut(...o))},Le),e("span",{class:"mt-1 ms-1 zoom-icon",onClick:s[11]||(s[11]=(...o)=>a.cropperZoomIn&&a.cropperZoomIn(...o))},ze)]),e("div",Me,[t.validate.notCropped?(n(),d("div",{key:0,id:"warning-line",class:z({shake:t.validate.notCropped})}," Please crop your image to square aspect ratio ",2)):h("",!0)]),e("div",He,[e("button",{class:"btn red-btn",onClick:s[12]||(s[12]=(...o)=>a.handleCancelCrop&&a.handleCancelCrop(...o))},Fe),e("button",{class:"btn green-btn",onClick:s[13]||(s[13]=(...o)=>a.handleCropImage&&a.handleCropImage(...o))},De)])])])])):h("",!0)])}const Oe=f(B,[["render",qe],["__scopeId","data-v-c63ddc8d"]]);const Ne=i=>(g("data-v-087cd29c"),i=i(),w(),i),Ze=Ne(()=>e("div",{id:"banner"},[e("img",{src:y,class:"image-fluid"})],-1)),Pe={__name:"AddStudentView",setup(i){return(s,r)=>(n(),d(M,null,[Ze,_(Oe)],64))}},Ge=f(Pe,[["__scopeId","data-v-087cd29c"]]);export{Ge as default};
