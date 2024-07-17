import{_ as k,j as D,i as S,r as u,o as a,c as r,b as e,w as m,m as v,a as d,z as L,d as p,t as f,B as _,q as g,F as w,n as V,g as z,p as I,e as M,h as C,J as H}from"./main-64046556.js";import{f as P,h as B}from"./theme.compact-23f5808a.js";import{C as F}from"./CheckPasswordComplexity-f99c0bdd.js";const U={setup(){const i=D(),s=S();return s.getInstructors(),{...i},{userDetailsStore:i,userStore:s}},data(){return{id:this.userDetailsStore.userId,userName:this.userDetailsStore.userName,avatar:this.userDetailsStore.avatar,email:this.userDetailsStore.email,password:this.userDetailsStore.password,image:this.userDetailsStore.avatar,firstName:this.userDetailsStore.firstName,lastName:this.userDetailsStore.lastName,instructorID:this.userDetailsStore.instructor.id||"",instructorName:this.userDetailsStore.instructorUsername,validate:{firstName:!1,lastName:!1,email:!1,emailFormat:!1,password:!1,notSquareImg:!1,notCropped:!1,passwordComplex:!1},passwordVisible:!1,showCropModal:!1,cropCanvas:"",cropResult:{coordinates:null,image:null},lastZoomValue:0,zoomValue:0,showDropDown:!1,haveInstructor:!1,showWarnModal:!1}},components:{Cropper:P,Preview:B,CheckPasswordComplexity:F},computed:{},created(){this.instructorName&&(this.haveInstructor=!0)},methods:{ValidateForm(){this.firstName==""||this.firstName==null?this.validate.firstName=!0:this.lastName==""||this.lastName==null?this.validate.lastName=!0:this.userName==""||this.userName==null?this.validate.username=!0:this.email==""||this.email==null?this.validate.email=!0:this.validate.passwordComplex&&this.HandleClickSubmit()},ValidateEmail(){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)?this.validate.emailFormat=!1:this.validate.emailFormat=!0},Submit(){const i={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:this.firstName,lastName:this.lastName,username:this.userName,email:this.email,avatar:this.avatar,password:this.password,instructorID:this.instructorID})};var s="/users/profile/"+this.id+"/edit";fetch(s,i).then(()=>{if(this.userDetailsStore.role=="student"&&this.instructorID!=""){const h={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({instructor_id:this.instructorID})};var c="/users/"+this.userDetailsStore.userId+"/edit/instructor";fetch(c,h).then(()=>{this.userDetailsStore.getUserDetails(),this.$router.push("/profile-settings")})}else this.userDetailsStore.getUserDetails(),this.$router.push("/profile-settings")})},HandleClickSubmit(){this.instructorName&&!this.haveInstructor?this.showWarnModal=!0:this.Submit()},onFileChange(i){var s=i.target.files||i.dataTransfer.files;s.length&&(this.image="",this.avatar=this.image,this.createImage(s[0]))},createImage(i){var s=new Image,c=new FileReader,h=this;c.onload=t=>{h.image=t.target.result,this.image=t.target.result,s.src=t.target.result,this.avatar=this.image},s.onload=()=>{s.width/s.height!==1?(this.validate.notSquareImg=!0,this.showCropModal=!0):this.validate.notSquareImg=!1},c.readAsDataURL(i)},removeImage:function(i){this.image="",this.avatar=this.image},openImage(){document.getElementById("image-input").click()},cropImageChange({coordinates:i,canvas:s,image:c}){this.cropResult={coordinates:i,image:c},this.cropCanvas=s.toDataURL()},handleCancelCrop(){this.validate.notSquareImg?(this.validate.notCropped=!0,setTimeout(()=>{this.validate.notCropped=!1},2e3)):this.showCropModal=!1},handleCropImage(){var i=new Image;i.src=this.cropCanvas,this.avatar=this.cropCanvas,this.image=this.cropCanvas,this.showCropModal=!1,this.validate.notSquareImg=!1,this.validate.notCropped=!1},handlePhoneCropper(){if(window.innerWidth<940){const{visibleArea:i,image:s}=this.$refs.cropper.getResult(),c=s.height/s.width;this.zoomValue=c>1?i.height/s.height:i.width/s.width,this.lastZoomValue=this.zoomValue,c<1&&this.$refs.cropper.zoom(this.zoomValue)}},cropperZoomIn(){this.$refs.cropper.visibleArea.height>30&&this.$refs.cropper.zoom(2)},cropperZoomOut(){this.$refs.cropper.visibleArea.height<3e3&&this.$refs.cropper.zoom(.5)}}},l=i=>(I("data-v-b6ad74ef"),i=i(),M(),i),R={class:"container mt-3"},Z=l(()=>e("h1",{id:"page-tile",class:"my-3 ms-0 ms-md-3 ms-lg-0 mt-5"}," Edit Profile ",-1)),q={class:"row mt-4"},E={class:"col-12 col-lg-5"},j={class:"row mx-0 px-md-0 mb-4 mb-lg-0"},T={class:"d-flex justify-content-center justify-content-md-start ps-lg-0"},A={class:"position-relative",style:{width:"fit-content"}},O=C('<svg class="" width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b6ad74ef><circle cx="26.5" cy="26.5" r="26.5" fill="#D9D9D9" data-v-b6ad74ef></circle><g clip-path="url(#clip0_372_11959)" data-v-b6ad74ef><path d="M19.7439 45.0784L19.7439 33.2515L7.93354 33.268C7.40615 33.2671 6.90063 33.0572 6.52771 32.6843C6.15479 32.3114 5.94488 31.8059 5.94396 31.2785L5.93291 21.7174C5.93382 21.1901 6.14373 20.6845 6.51665 20.3116C6.88957 19.9387 7.3951 19.7288 7.92249 19.7279L19.7439 19.7334L19.7439 7.90646C19.7411 7.64223 19.7911 7.38009 19.8909 7.13543C19.9907 6.89076 20.1384 6.66849 20.3252 6.48164C20.5121 6.29479 20.7344 6.14713 20.979 6.0473C21.2237 5.94747 21.4858 5.8975 21.75 5.9003L31.2779 5.92241C31.8053 5.92332 32.3108 6.13322 32.6838 6.50615C33.0567 6.87907 33.2666 7.38459 33.2675 7.91198L33.262 19.7334L45.0889 19.7334C45.615 19.7337 46.1195 19.9428 46.4915 20.3148C46.8635 20.6869 47.0726 21.1913 47.073 21.7174L47.0951 31.2453C47.0948 31.7714 46.8856 32.2759 46.5136 32.6479C46.1416 33.0199 45.6371 33.229 45.111 33.2294L33.262 33.2515L33.2786 45.0618C33.2776 45.5892 33.0677 46.0947 32.6948 46.4677C32.3219 46.8406 31.8164 47.0505 31.289 47.0514L21.7501 47.0846C21.4858 47.0874 21.2237 47.0374 20.979 46.9376C20.7344 46.8377 20.5121 46.6901 20.3252 46.5032C20.1384 46.3164 19.9907 46.0941 19.8909 45.8494C19.7911 45.6048 19.7411 45.3426 19.7439 45.0784Z" fill="white" data-v-b6ad74ef></path></g><defs data-v-b6ad74ef><clipPath id="clip0_372_11959" data-v-b6ad74ef><rect width="37" height="37" fill="white" transform="translate(8 8)" data-v-b6ad74ef></rect></clipPath></defs></svg>',1),W=[O],J=C('<svg class="" width="43" height="43" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b6ad74ef><circle cx="26.5" cy="26.5" r="26.5" fill="#D9D9D9" data-v-b6ad74ef></circle><g clip-path="url(#clip0_372_11959)" data-v-b6ad74ef><path d="M19.7439 45.0784L19.7439 33.2515L7.93354 33.268C7.40615 33.2671 6.90063 33.0572 6.52771 32.6843C6.15479 32.3114 5.94488 31.8059 5.94396 31.2785L5.93291 21.7174C5.93382 21.1901 6.14373 20.6845 6.51665 20.3116C6.88957 19.9387 7.3951 19.7288 7.92249 19.7279L19.7439 19.7334L19.7439 7.90646C19.7411 7.64223 19.7911 7.38009 19.8909 7.13543C19.9907 6.89076 20.1384 6.66849 20.3252 6.48164C20.5121 6.29479 20.7344 6.14713 20.979 6.0473C21.2237 5.94747 21.4858 5.8975 21.75 5.9003L31.2779 5.92241C31.8053 5.92332 32.3108 6.13322 32.6838 6.50615C33.0567 6.87907 33.2666 7.38459 33.2675 7.91198L33.262 19.7334L45.0889 19.7334C45.615 19.7337 46.1195 19.9428 46.4915 20.3148C46.8635 20.6869 47.0726 21.1913 47.073 21.7174L47.0951 31.2453C47.0948 31.7714 46.8856 32.2759 46.5136 32.6479C46.1416 33.0199 45.6371 33.229 45.111 33.2294L33.262 33.2515L33.2786 45.0618C33.2776 45.5892 33.0677 46.0947 32.6948 46.4677C32.3219 46.8406 31.8164 47.0505 31.289 47.0514L21.7501 47.0846C21.4858 47.0874 21.2237 47.0374 20.979 46.9376C20.7344 46.8377 20.5121 46.6901 20.3252 46.5032C20.1384 46.3164 19.9907 46.0941 19.8909 45.8494C19.7911 45.6048 19.7411 45.3426 19.7439 45.0784Z" fill="white" data-v-b6ad74ef></path></g><defs data-v-b6ad74ef><clipPath id="clip0_372_11959" data-v-b6ad74ef><rect width="37" height="37" fill="white" transform="translate(8 8)" data-v-b6ad74ef></rect></clipPath></defs></svg>',1),Y=[J],G=l(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"35",height:"35",fill:"white"},[e("path",{d:"M128 32c0-17.7-14.3-32-32-32S64 14.3 64 32V64H32C14.3 64 0 78.3 0 96s14.3 32 32 32H64V384c0 35.3 28.7 64 64 64H352V384H128V32zM384 480c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H448l0-256c0-35.3-28.7-64-64-64L160 64v64l224 0 0 352z"})],-1)),K=[G],Q=l(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"28",height:"28",fill:"white"},[e("path",{d:"M128 32c0-17.7-14.3-32-32-32S64 14.3 64 32V64H32C14.3 64 0 78.3 0 96s14.3 32 32 32H64V384c0 35.3 28.7 64 64 64H352V384H128V32zM384 480c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H448l0-256c0-35.3-28.7-64-64-64L160 64v64l224 0 0 352z"})],-1)),X=[Q],$=["src"],ee=["src"],se={class:"col-12 px-4 px-md-0 col-lg-4 px-0 px-md-4 px-lg-0"},te={class:"d-flex gap-4"},oe={class:"mb-3"},ie=l(()=>e("label",{for:"name",class:"form-label"},"First Name",-1)),le={key:0,class:"form-validate"},ae={class:"mb-3"},re=l(()=>e("label",{for:"name",class:"form-label"},"Last Name",-1)),ne={key:0,class:"form-validate"},ce={class:"mb-3"},de=l(()=>e("label",{class:"form-label"},"Username",-1)),he={key:0,class:"form-validate"},me={class:"mb-3"},pe=l(()=>e("label",{class:"form-label"},"Email",-1)),ue={key:0,class:"form-validate"},ve={key:1,class:"form-validate"},fe={class:"mb-3"},ge=l(()=>e("label",{class:"form-label"},"Password",-1)),we={class:"password-div"},_e=["type"],Ce=["title"],be=l(()=>e("path",{d:"M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"},null,-1)),xe=[be],ye=l(()=>e("path",{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z"},null,-1)),Ne=[ye],ke={key:0,class:"form-validate"},De={key:0,class:"mb-3"},Se=l(()=>e("label",{class:"form-label"},"Instructor",-1)),Le={key:0,class:"custom-select-button"},Ve={key:1,class:"d-flex flex-column"},ze=l(()=>e("span",null,[e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z",fill:"#344054"})])],-1)),Ie={key:0,class:"custom-dropdown-base"},Me=["onClick"],He={class:"d-flex justify-content-between mb-3 mt-5"},Pe={class:"mb-3 row"},Be={class:"d-none"},Fe=l(()=>e("p",{style:{"font-size":"14px"}},[e("em",null,"Maximum file size 15mb")],-1)),Ue={key:0},Re={id:"myModal",class:"modal"},Ze={class:"modal-content d-flex flex-column"},qe={id:"crop-component",ref:"cropComponent"},Ee={id:"crop-result"},je=l(()=>e("div",{class:"form-label"},"Result:",-1)),Te={id:"zoom-range"},Ae=l(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"gray"},[e("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM136 184c-13.3 0-24 10.7-24 24s10.7 24 24 24H280c13.3 0 24-10.7 24-24s-10.7-24-24-24H136z"})],-1)),Oe=[Ae],We=l(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",fill:"gray"},[e("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24V232h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"})],-1)),Je=[We],Ye={class:"d-flex flex-row justify-content-center mt-2"},Ge={class:"d-flex flex-row justify-content-between justify-content-lg-end gap-2 mt-5 pb-2 pb-lg-0"},Ke=l(()=>e("span",{class:"d-none d-lg-block"}," Cancel   ",-1)),Qe=l(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"white",width:"16",height:"16"},[e("path",{d:"M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"})],-1)),Xe=[Ke,Qe],$e=l(()=>e("span",{class:"d-none d-lg-block"}," Crop   ",-1)),es=l(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"white",width:"16",height:"16"},[e("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"})],-1)),ss=[$e,es],ts={key:1},os={id:"myModal",class:"modal"},is={class:"warn-content d-flex flex-column"},ls={class:"d-flex flex-row"},as=l(()=>e("div",{class:"me-3"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"35",height:"35",fill:"#eed888"},[e("path",{d:"M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"})])],-1)),rs={id:"instructor-name-text"},ns={class:"d-flex flex-row-reverse gap-2"};function cs(i,s,c,h,t,n){const b=u("CheckPasswordComplexity"),x=u("router-link"),y=u("cropper"),N=u("preview");return a(),r(w,null,[e("div",R,[Z,e("div",q,[e("div",E,[e("div",j,[e("div",T,[e("div",A,[e("div",{id:"plus-svg",onClick:s[0]||(s[0]=o=>n.openImage()),class:"d-none d-lg-block","b-tooltip.hover":"",title:"add another image"},W),e("div",{id:"plus-svg",onClick:s[1]||(s[1]=o=>n.openImage()),class:"d-lg-none","b-tooltip.hover":"",title:"add another image"},Y),e("div",{id:"crop-icon","b-tooltip.hover":"",title:"crop image",class:"d-none d-lg-block",onClick:s[2]||(s[2]=o=>t.showCropModal=!0)},K),e("div",{id:"crop-icon","b-tooltip.hover":"",title:"crop image",class:"d-lg-none",onClick:s[3]||(s[3]=o=>t.showCropModal=!0)},X),e("img",{id:"img-background",src:t.avatar,height:"428",width:"428",style:{"background-color":"lightgrey"},class:"d-none d-lg-block"},null,8,$),e("img",{id:"img-background",src:t.avatar,height:"240",width:"240",style:{"background-color":"lightgrey"},class:"d-lg-none"},null,8,ee)])])])]),e("div",se,[e("div",te,[e("div",oe,[ie,m(e("input",{id:"name","onUpdate:modelValue":s[4]||(s[4]=o=>t.firstName=o),type:"text",class:"form-control"},null,512),[[v,t.firstName]]),t.validate.firstName&&(t.firstName==""||t.firstName==null)?(a(),r("div",le," please enter a first name ! ")):d("",!0)]),e("div",ae,[re,m(e("input",{id:"name","onUpdate:modelValue":s[5]||(s[5]=o=>t.lastName=o),type:"text",class:"form-control"},null,512),[[v,t.lastName]]),t.validate.lastName&&(t.lastName==""||t.lastName==null)?(a(),r("div",ne," please enter a last name ! ")):d("",!0)])]),e("div",ce,[de,m(e("input",{"onUpdate:modelValue":s[6]||(s[6]=o=>t.userName=o),type:"text",class:"form-control"},null,512),[[v,t.userName]]),t.validate.userName&&(t.userName==""||t.userName==null)?(a(),r("div",he," please enter a user name ! ")):d("",!0)]),e("div",me,[pe,m(e("input",{"onUpdate:modelValue":s[7]||(s[7]=o=>t.email=o),type:"email",class:"form-control",onBlur:s[8]||(s[8]=(...o)=>n.ValidateEmail&&n.ValidateEmail(...o))},null,544),[[v,t.email]]),t.validate.email&&(t.email==""||t.email==null)?(a(),r("div",ue," please enter an email ! ")):d("",!0),t.validate.emailFormat?(a(),r("div",ve," please enter a valid email ! ")):d("",!0)]),e("div",fe,[ge,e("div",we,[m(e("input",{"onUpdate:modelValue":s[9]||(s[9]=o=>t.password=o),type:t.passwordVisible?"text":"password",placeholder:"Password",class:"form-control",required:""},null,8,_e),[[L,t.password]]),e("div",{class:"eye-icon","b-tooltip.hover":"",title:t.passwordVisible?"hide password":"show password"},[t.passwordVisible?(a(),r("svg",{key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",width:"20",height:"20",fill:"gray",onClick:s[10]||(s[10]=o=>t.passwordVisible=!1)},xe)):(a(),r("svg",{key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",width:"20",height:"20",fill:"gray",onClick:s[11]||(s[11]=o=>t.passwordVisible=!0)},Ne))],8,Ce)]),t.validate.password&&(t.password==""||t.password==null)?(a(),r("div",ke," please enter a password! ")):d("",!0),p(b,{formData:{username:t.userName,password:t.password,firstName:t.firstName,lastName:t.lastName}},null,8,["formData"])]),h.userDetailsStore.role=="student"?(a(),r("div",De,[Se,t.haveInstructor?(a(),r("div",Le,f(t.instructorName),1)):(a(),r("div",Ve,[e("div",{class:_([t.showDropDown?"custom-select-button-focus":"custom-select-button"]),onClick:s[12]||(s[12]=o=>t.showDropDown=!t.showDropDown)},[g(f(t.instructorName?t.instructorName:"Please choose an instructor")+" ",1),ze],2),t.showDropDown?(a(),r("div",Ie,[(a(!0),r(w,null,V(h.userStore.instructors,o=>(a(),r("div",{class:"custom-dropdown-option",onClick:ms=>{t.instructorID=o.id,t.instructorName=o.username,t.showDropDown=!1}},f(o.username),9,Me))),256))])):d("",!0)]))])):d("",!0),e("div",He,[p(x,{class:"btn red-btn",to:"/profile-settings"},{default:z(()=>[g(" Cancel ")]),_:1}),e("button",{class:"btn purple-btn",onClick:s[13]||(s[13]=o=>n.ValidateForm())}," Submit ")])])]),e("div",Pe,[e("div",Be,[e("input",{id:"image-input",class:"form-control",type:"file",accept:"image/*",onChange:s[14]||(s[14]=(...o)=>n.onFileChange&&n.onFileChange(...o))},null,32),Fe])])]),t.showCropModal?(a(),r("div",Ue,[e("div",Re,[e("div",Ze,[e("div",qe,[p(y,{src:t.image,onChange:n.cropImageChange,onReady:n.handlePhoneCropper,"stencil-props":{movable:!0,resizable:!0,aspectRatio:1},"image-restriction":"stencil",class:"cropper",ref:"cropper",debounce:!1},null,8,["src","onChange","onReady"]),e("div",Ee,[je,p(N,{width:120,height:120,image:t.cropResult.image,coordinates:t.cropResult.coordinates},null,8,["image","coordinates"])])],512),e("div",Te,[e("span",{class:"mt-1 me-1 zoom-icon",onClick:s[15]||(s[15]=(...o)=>n.cropperZoomOut&&n.cropperZoomOut(...o))},Oe),e("span",{class:"mt-1 ms-1 zoom-icon",onClick:s[16]||(s[16]=(...o)=>n.cropperZoomIn&&n.cropperZoomIn(...o))},Je)]),e("div",Ye,[t.validate.notCropped?(a(),r("div",{key:0,id:"warning-line",class:_({shake:t.validate.notCropped})}," Please crop your image to square aspect ratio ",2)):d("",!0)]),e("div",Ge,[e("button",{class:"btn red-btn",onClick:s[17]||(s[17]=(...o)=>n.handleCancelCrop&&n.handleCancelCrop(...o))},Xe),e("button",{class:"btn green-btn",onClick:s[18]||(s[18]=(...o)=>n.handleCropImage&&n.handleCropImage(...o))},ss)])])])])):d("",!0),t.showWarnModal?(a(),r("div",ts,[e("div",os,[e("div",is,[e("div",ls,[as,e("div",null,[g(" You can only choose your instructor once. Are you sure you want   "),e("span",rs,f(t.instructorName),1),g("   to be your instructor. ")])]),e("div",ns,[e("div",{type:"button",class:"btn green-btn",onClick:s[19]||(s[19]=o=>n.Submit())}," Yes "),e("div",{class:"btn red-btn",onClick:s[20]||(s[20]=o=>t.showWarnModal=!1)}," No ")])])])])):d("",!0)],64)}const ds=k(U,[["render",cs],["__scopeId","data-v-b6ad74ef"]]),hs=e("div",{id:"banner"},[e("img",{src:H,class:"image-fluid"})],-1),fs={__name:"EditProfileView",setup(i){return(s,c)=>(a(),r(w,null,[hs,p(ds)],64))}};export{fs as default};
