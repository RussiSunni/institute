import{_ as p,g as w,z as h,r as _,o,c as a,b as t,w as c,s as m,a as r,B as g,d as v,A as f,y as E}from"./main-998effa5.js";import{C}from"./CheckPasswordComplexity-9e8f71ec.js";const y={setup(){return{sessionDetailsStore:w()}},components:{CheckPasswordComplexity:C},data(){return{newEditor:{username:null,email:null,password:null},validate:{username:!1,email:!1,emailFormat:!1,password:!1,passwordComplex:!1},passwordVisible:!1,isProduction:!0}},async created(){},mounted(){let n=document.createElement("script");n.setAttribute("src","https://accounts.google.com/gsi/client"),n.setAttribute("defer",""),document.head.appendChild(n)},methods:{ValidateForm(){this.newEditor.username==""||this.newEditor.username==null?this.validate.username=!0:this.newEditor.email==""||this.newEditor.email==null?this.validate.email=!0:this.newEditor.password==""||this.newEditor.password==null?this.validate.password=!0:this.validate.passwordComplex&&this.Submit()},ValidateEmail(){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.newEditor.email)?this.validate.emailFormat=!1:this.validate.emailFormat=!0},Submit(){const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.newEditor.username,first_name:"",last_name:"",email:this.newEditor.email,password:this.newEditor.password})};var s="/users/new-editor/add";fetch(s,n).then(function(l){return l.json()}).then(l=>{l.account=="authorized"?(alert("Account created."),h.push({name:"hub"})):(l.account=="username already taken"||l.account=="email already taken")&&alert(l.account)})}}},b={class:"signup-page"},x={class:"form-signin"},k=t("div",{class:"text-center"},[t("img",{class:"mb-4",src:f,alt:"",width:"72",height:"72"})],-1),V=t("h1",{class:"h3 mb-3 font-weight-normal"},"Editor Sign up",-1),S={class:"mt-3"},z={class:"mb-3 text-start"},q={key:0,class:"form-validate"},B={class:"mb-3 text-start"},D={key:0,class:"form-validate"},M={key:1,class:"form-validate"},P={class:"mb-3 text-start"},A={class:"password-div"},F=["type"],U=["title"],L=t("path",{d:"M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"},null,-1),N=[L],j=t("path",{d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z"},null,-1),T=[j],O={key:0,class:"form-validate"},H={key:0,id:"g_id_onload","data-client_id":"13191319610-qectaoi146ce1pm4v95jtgctsbtmqb3t.apps.googleusercontent.com","data-context":"signup","data-ux_mode":"popup","data-login_uri":"https://parrhesia.io/google-editor-signup-attempt","data-auto_prompt":"false"},J={key:1,id:"g_id_onload","data-client_id":"13191319610-qectaoi146ce1pm4v95jtgctsbtmqb3t.apps.googleusercontent.com","data-context":"signup","data-ux_mode":"popup","data-login_uri":"http://localhost:3000/google-editor-signup-attempt","data-auto_prompt":"false"},G=t("div",{class:"g_id_signin","data-type":"standard","data-shape":"rectangular","data-theme":"outline","data-text":"signup_with","data-size":"large","data-logo_alignment":"left","data-width":"330"},null,-1),I=t("div",{class:"mt-3 signup text-center"},[E(" Have an account? "),t("a",{href:"/login",class:"links"},"Login")],-1);function K(n,s,l,Q,e,d){const u=_("CheckPasswordComplexity");return o(),a("div",b,[t("div",x,[k,V,t("div",S,[t("div",z,[c(t("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>e.newEditor.username=i),type:"text",placeholder:"Username",class:"form-control",required:""},null,512),[[m,e.newEditor.username]]),e.validate.username&&(e.newEditor.username==""||e.newEditor.username==null)?(o(),a("div",q," please enter a username! ")):r("",!0)]),t("div",B,[c(t("input",{"onUpdate:modelValue":s[1]||(s[1]=i=>e.newEditor.email=i),type:"email",placeholder:"Email",class:"form-control",onBlur:s[2]||(s[2]=(...i)=>d.ValidateEmail&&d.ValidateEmail(...i)),required:""},null,544),[[m,e.newEditor.email]]),e.validate.email&&(e.newEditor.email==""||e.newEditor.email==null)?(o(),a("div",D," please enter an email address! ")):r("",!0),e.validate.emailFormat?(o(),a("div",M," please enter a valid email address! ")):r("",!0)]),t("div",P,[t("div",A,[c(t("input",{id:"password-input","onUpdate:modelValue":s[3]||(s[3]=i=>e.newEditor.password=i),type:e.passwordVisible?"text":"password",placeholder:"Password",class:"form-control",required:""},null,8,F),[[g,e.newEditor.password]]),t("div",{class:"eye-icon","b-tooltip.hover":"",title:e.passwordVisible?"hide password":"show password"},[e.passwordVisible?(o(),a("svg",{key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",width:"20",height:"20",fill:"gray",onClick:s[4]||(s[4]=i=>e.passwordVisible=!1)},N)):(o(),a("svg",{key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",width:"20",height:"20",fill:"gray",onClick:s[5]||(s[5]=i=>e.passwordVisible=!0)},T))],8,U)]),e.validate.password&&(e.newEditor.password==""||e.newEditor.password==null)?(o(),a("div",O," please enter a password! ")):r("",!0),v(u,{formData:e.newEditor},null,8,["formData"])]),t("button",{class:"btn btn-dark mb-2",onClick:s[6]||(s[6]=i=>d.ValidateForm())}," Sign up "),e.isProduction==!0?(o(),a("div",H)):(o(),a("div",J)),G,I])])])}const X=p(y,[["render",K]]);export{X as default};
