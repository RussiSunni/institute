import{_ as f}from"./edit-mastery-skill-banner-9e7c0291.js";import{_ as g,u as C,r as w,o as l,c as o,b as e,i as d,v as c,g as m,e as p,w as N,j as b,p as x,a as y,m as v,F as L}from"./main-b907309d.js";const k={setup(){const a=C();return{...a},{userDetailsStore:a}},data(){return{id:this.userDetailsStore.userId,userName:this.userDetailsStore.userName,avatar:this.userDetailsStore.avatar,email:this.userDetailsStore.email,password:this.userDetailsStore.password,image:"",firstName:this.userDetailsStore.firstName,lastName:this.userDetailsStore.lastName,validate:{firstName:!1,lastName:!1,email:!1,emailFormat:!1,password:!1}}},computed:{},methods:{ValidateForm(){this.firstName==""||this.firstName==null?this.validate.firstName=!0:this.lastName==""||this.lastName==null?this.validate.lastName=!0:this.userName==""||this.userName==null?this.validate.username=!0:this.email==""||this.email==null?this.validate.email=!0:this.Submit()},ValidateEmail(){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)?this.validate.emailFormat=!1:this.validate.emailFormat=!0},Submit(){const a={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:this.firstName,lastName:this.lastName,username:this.userName,email:this.email,avatar:this.avatar,password:this.password})};var t="/users/profile/"+this.id+"/edit";fetch(t,a).then(()=>{this.userDetailsStore.getUserDetails(),this.$router.push("/profile-settings")})},onFileChange(a){this.image="",this.avatar=this.image;var t=a.target.files||a.dataTransfer.files;t.length&&this.createImage(t[0])},createImage(a){new Image;var t=new FileReader,u=this;t.onload=h=>{u.image=h.target.result,this.image=h.target.result,this.avatar=this.image},t.readAsDataURL(a)},removeImage:function(a){this.image="",this.avatar=this.image},openImage(){document.getElementById("image-input").click()}}},n=a=>(x("data-v-11641550"),a=a(),y(),a),D={class:"container mt-3"},S=n(()=>e("h1",{id:"page-tile",class:"my-3 ms-0 ms-md-3 ms-lg-0 mt-5"}," Edit Profile ",-1)),V={class:"row mt-4"},F={class:"col-12 col-lg-5"},I={class:"row mx-0 px-md-0"},E={class:"d-flex justify-content-center justify-content-md-start ps-lg-0"},P={class:"position-relative",style:{width:"fit-content"}},U=v('<svg class="" width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-11641550><circle cx="26.5" cy="26.5" r="26.5" fill="#D9D9D9" data-v-11641550></circle><g clip-path="url(#clip0_372_11959)" data-v-11641550><path d="M19.7439 45.0784L19.7439 33.2515L7.93354 33.268C7.40615 33.2671 6.90063 33.0572 6.52771 32.6843C6.15479 32.3114 5.94488 31.8059 5.94396 31.2785L5.93291 21.7174C5.93382 21.1901 6.14373 20.6845 6.51665 20.3116C6.88957 19.9387 7.3951 19.7288 7.92249 19.7279L19.7439 19.7334L19.7439 7.90646C19.7411 7.64223 19.7911 7.38009 19.8909 7.13543C19.9907 6.89076 20.1384 6.66849 20.3252 6.48164C20.5121 6.29479 20.7344 6.14713 20.979 6.0473C21.2237 5.94747 21.4858 5.8975 21.75 5.9003L31.2779 5.92241C31.8053 5.92332 32.3108 6.13322 32.6838 6.50615C33.0567 6.87907 33.2666 7.38459 33.2675 7.91198L33.262 19.7334L45.0889 19.7334C45.615 19.7337 46.1195 19.9428 46.4915 20.3148C46.8635 20.6869 47.0726 21.1913 47.073 21.7174L47.0951 31.2453C47.0948 31.7714 46.8856 32.2759 46.5136 32.6479C46.1416 33.0199 45.6371 33.229 45.111 33.2294L33.262 33.2515L33.2786 45.0618C33.2776 45.5892 33.0677 46.0947 32.6948 46.4677C32.3219 46.8406 31.8164 47.0505 31.289 47.0514L21.7501 47.0846C21.4858 47.0874 21.2237 47.0374 20.979 46.9376C20.7344 46.8377 20.5121 46.6901 20.3252 46.5032C20.1384 46.3164 19.9907 46.0941 19.8909 45.8494C19.7911 45.6048 19.7411 45.3426 19.7439 45.0784Z" fill="white" data-v-11641550></path></g><defs data-v-11641550><clipPath id="clip0_372_11959" data-v-11641550><rect width="37" height="37" fill="white" transform="translate(8 8)" data-v-11641550></rect></clipPath></defs></svg>',1),B=[U],j=v('<svg class="" width="43" height="43" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-11641550><circle cx="26.5" cy="26.5" r="26.5" fill="#D9D9D9" data-v-11641550></circle><g clip-path="url(#clip0_372_11959)" data-v-11641550><path d="M19.7439 45.0784L19.7439 33.2515L7.93354 33.268C7.40615 33.2671 6.90063 33.0572 6.52771 32.6843C6.15479 32.3114 5.94488 31.8059 5.94396 31.2785L5.93291 21.7174C5.93382 21.1901 6.14373 20.6845 6.51665 20.3116C6.88957 19.9387 7.3951 19.7288 7.92249 19.7279L19.7439 19.7334L19.7439 7.90646C19.7411 7.64223 19.7911 7.38009 19.8909 7.13543C19.9907 6.89076 20.1384 6.66849 20.3252 6.48164C20.5121 6.29479 20.7344 6.14713 20.979 6.0473C21.2237 5.94747 21.4858 5.8975 21.75 5.9003L31.2779 5.92241C31.8053 5.92332 32.3108 6.13322 32.6838 6.50615C33.0567 6.87907 33.2666 7.38459 33.2675 7.91198L33.262 19.7334L45.0889 19.7334C45.615 19.7337 46.1195 19.9428 46.4915 20.3148C46.8635 20.6869 47.0726 21.1913 47.073 21.7174L47.0951 31.2453C47.0948 31.7714 46.8856 32.2759 46.5136 32.6479C46.1416 33.0199 45.6371 33.229 45.111 33.2294L33.262 33.2515L33.2786 45.0618C33.2776 45.5892 33.0677 46.0947 32.6948 46.4677C32.3219 46.8406 31.8164 47.0505 31.289 47.0514L21.7501 47.0846C21.4858 47.0874 21.2237 47.0374 20.979 46.9376C20.7344 46.8377 20.5121 46.6901 20.3252 46.5032C20.1384 46.3164 19.9907 46.0941 19.8909 45.8494C19.7911 45.6048 19.7411 45.3426 19.7439 45.0784Z" fill="white" data-v-11641550></path></g><defs data-v-11641550><clipPath id="clip0_372_11959" data-v-11641550><rect width="37" height="37" fill="white" transform="translate(8 8)" data-v-11641550></rect></clipPath></defs></svg>',1),T=[j],M=["src"],z=["src"],O={class:"col-12 px-4 px-md-0 col-lg-4 px-0 px-md-4 px-lg-0"},R={class:"d-flex gap-4"},Z={class:"mb-3"},q=n(()=>e("label",{for:"name",class:"form-label"},"First Name",-1)),A={key:0,class:"form-validate"},J={class:"mb-3"},G=n(()=>e("label",{for:"name",class:"form-label"},"Last Name",-1)),H={key:0,class:"form-validate"},K={class:"mb-3"},Q=n(()=>e("label",{class:"form-label"},"Username",-1)),W={key:0,class:"form-validate"},X={class:"mb-3"},Y=n(()=>e("label",{class:"form-label"},"Email",-1)),$={key:0,class:"form-validate"},ee={key:1,class:"form-validate"},te={class:"mb-3"},se=n(()=>e("label",{class:"form-label"},"Password",-1)),ae={key:0,class:"form-validate"},ie={class:"d-flex justify-content-between mb-3 mt-5"},le={class:"mb-3 row"},oe={class:"d-none"},re=n(()=>e("p",{style:{"font-size":"14px"}},[e("em",null,"Maximum file size 15mb")],-1));function ne(a,t,u,h,s,r){const _=w("router-link");return l(),o("div",D,[S,e("div",V,[e("div",F,[e("div",I,[e("div",E,[e("div",P,[e("div",{id:"plus-svg",onClick:t[0]||(t[0]=i=>r.openImage()),class:"d-none d-lg-block"},B),e("div",{id:"plus-svg",onClick:t[1]||(t[1]=i=>r.openImage()),class:"d-lg-none"},T),e("img",{id:"img-background",src:s.avatar,height:"428",style:{"background-color":"lightgrey"},class:"d-none d-lg-block"},null,8,M),e("img",{id:"img-background",src:s.avatar,height:"240",style:{"background-color":"lightgrey"},class:"d-lg-none"},null,8,z)])])])]),e("div",O,[e("div",R,[e("div",Z,[q,d(e("input",{id:"name","onUpdate:modelValue":t[2]||(t[2]=i=>s.firstName=i),type:"text",class:"form-control"},null,512),[[c,s.firstName]]),s.validate.firstName&&(s.firstName==""||s.firstName==null)?(l(),o("div",A," please enter a first name ! ")):m("",!0)]),e("div",J,[G,d(e("input",{id:"name","onUpdate:modelValue":t[3]||(t[3]=i=>s.lastName=i),type:"text",class:"form-control"},null,512),[[c,s.lastName]]),s.validate.lastName&&(s.lastName==""||s.lastName==null)?(l(),o("div",H," please enter a last name ! ")):m("",!0)])]),e("div",K,[Q,d(e("input",{"onUpdate:modelValue":t[4]||(t[4]=i=>s.userName=i),type:"text",class:"form-control"},null,512),[[c,s.userName]]),s.validate.userName&&(s.userName==""||s.userName==null)?(l(),o("div",W," please enter a user name ! ")):m("",!0)]),e("div",X,[Y,d(e("input",{"onUpdate:modelValue":t[5]||(t[5]=i=>s.email=i),type:"email",class:"form-control",onBlur:t[6]||(t[6]=(...i)=>r.ValidateEmail&&r.ValidateEmail(...i))},null,544),[[c,s.email]]),s.validate.email&&(s.email==""||s.email==null)?(l(),o("div",$," please enter an email ! ")):m("",!0),s.validate.emailFormat?(l(),o("div",ee," please enter a valid email ! ")):m("",!0)]),e("div",te,[se,d(e("input",{"onUpdate:modelValue":t[7]||(t[7]=i=>s.password=i),type:"text",class:"form-control"},null,512),[[c,s.password]]),s.validate.password&&(s.password==""||s.password==null)?(l(),o("div",ae," please enter a password ! ")):m("",!0)]),e("div",ie,[p(_,{class:"btn red-btn",to:"/profile-settings"},{default:N(()=>[b(" Cancel ")]),_:1}),e("button",{class:"btn purple-btn",onClick:t[8]||(t[8]=i=>r.ValidateForm())}," Submit ")])])]),e("div",le,[e("div",oe,[e("input",{id:"image-input",class:"form-control",type:"file",accept:"image/*",onChange:t[9]||(t[9]=(...i)=>r.onFileChange&&r.onFileChange(...i))},null,32),re])])])}const me=g(k,[["render",ne],["__scopeId","data-v-11641550"]]),de=e("div",{id:"banner"},[e("img",{src:f,class:"image-fluid"})],-1),he={__name:"EditProfileView",setup(a){return(t,u)=>(l(),o(L,null,[de,p(me)],64))}};export{he as default};
