import{_ as c,z as p,s as w,o as a,c as o,d as t,e as d,v as m,b as n,x as h,m as _}from"./main-28c7216d.js";const f={setup(){return{sessionDetailsStore:p()}},data(){return{newEditor:{username:null,firstName:null,lastName:null,email:null,password:null},validate:{firstName:!1,lastName:!1,username:!1,email:!1,emailFormat:!1,password:!1}}},async created(){},mounted(){let l=document.createElement("script");l.setAttribute("src","https://accounts.google.com/gsi/client"),l.setAttribute("defer",""),document.head.appendChild(l)},methods:{ValidateForm(){this.newEditor.username==""||this.newEditor.username==null?this.validate.username=!0:this.newEditor.firstName==""||this.newEditor.firstName==null?this.validate.firstName=!0:this.newEditor.lastName==""||this.newEditor.lastName==null?this.validate.lastName=!0:this.newEditor.email==""||this.newEditor.email==null?this.validate.email=!0:this.newEditor.password==""||this.newEditor.password==null?this.validate.password=!0:this.Submit()},ValidateEmail(){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.newEditor.email)?this.validate.emailFormat=!1:this.validate.emailFormat=!0},Submit(){const l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.newEditor.username,first_name:this.newEditor.firstName,last_name:this.newEditor.lastName,email:this.newEditor.email,password:this.newEditor.password})};var s="/users/new-editor/add";fetch(s,l).then(function(r){return r.json()}).then(r=>{r.account=="authorized"?(alert("Account created."),w.push({name:"hub"})):(r.account=="username already taken"||r.account=="email already taken")&&alert(r.account)})}}},v={class:"signup-page"},E={class:"form-signin"},g=t("div",{class:"text-center"},[t("img",{class:"mb-4",src:h,alt:"",width:"72",height:"72"})],-1),N=t("h1",{class:"h3 mb-3 font-weight-normal"},"Editor Sign up",-1),y={class:"mt-3"},b={class:"mb-3 text-start"},x={key:0,class:"form-validate"},k={class:"mb-3 text-start"},V={key:0,class:"form-validate"},S={class:"mb-3 text-start"},q={key:0,class:"form-validate"},U={class:"mb-3 text-start"},F={key:0,class:"form-validate"},A={key:1,class:"form-validate"},j={class:"mb-3 text-start"},B={key:0,class:"form-validate"},C={key:0,id:"g_id_onload","data-client_id":"13191319610-qectaoi146ce1pm4v95jtgctsbtmqb3t.apps.googleusercontent.com","data-context":"signup","data-ux_mode":"popup","data-login_uri":"https://parrhesia.io/google-editor-signup-attempt","data-auto_prompt":"false"},D={key:1,id:"g_id_onload","data-client_id":"13191319610-qectaoi146ce1pm4v95jtgctsbtmqb3t.apps.googleusercontent.com","data-context":"signup","data-ux_mode":"popup","data-login_uri":"http://localhost:3000/google-editor-signup-attempt","data-auto_prompt":"false"},T=t("div",{class:"g_id_signin","data-type":"standard","data-shape":"rectangular","data-theme":"outline","data-text":"signup_with","data-size":"large","data-logo_alignment":"left","data-width":"330"},null,-1),z=t("div",{class:"mt-3 signup text-center"},[_(" Have an account? "),t("a",{href:"/login",class:"links"},"Login")],-1);function O(l,s,r,P,e,u){return a(),o("div",v,[t("div",E,[g,N,t("div",y,[t("div",b,[d(t("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>e.newEditor.username=i),type:"text",placeholder:"Username",class:"form-control",required:""},null,512),[[m,e.newEditor.username]]),e.validate.username&&(e.newEditor.username==""||e.newEditor.username==null)?(a(),o("div",x," please enter a username! ")):n("",!0)]),t("div",k,[d(t("input",{"onUpdate:modelValue":s[1]||(s[1]=i=>e.newEditor.firstName=i),type:"text",placeholder:"First name",class:"form-control",required:""},null,512),[[m,e.newEditor.firstName]]),e.validate.firstName&&(e.newEditor.firstName==""||e.newEditor.firstName==null)?(a(),o("div",V," please your first name! ")):n("",!0)]),t("div",S,[d(t("input",{"onUpdate:modelValue":s[2]||(s[2]=i=>e.newEditor.lastName=i),type:"text",placeholder:"Last name",class:"form-control",required:""},null,512),[[m,e.newEditor.lastName]]),e.validate.lastName&&(e.newEditor.lastName==""||e.newEditor.lastName==null)?(a(),o("div",q," please your last name! ")):n("",!0)]),t("div",U,[d(t("input",{"onUpdate:modelValue":s[3]||(s[3]=i=>e.newEditor.email=i),type:"email",placeholder:"Email",class:"form-control",onBlur:s[4]||(s[4]=(...i)=>u.ValidateEmail&&u.ValidateEmail(...i)),required:""},null,544),[[m,e.newEditor.email]]),e.validate.email&&(e.newEditor.email==""||e.newEditor.email==null)?(a(),o("div",F," please enter an email address! ")):n("",!0),e.validate.emailFormat?(a(),o("div",A," please enter a valid email address! ")):n("",!0)]),t("div",j,[d(t("input",{"onUpdate:modelValue":s[5]||(s[5]=i=>e.newEditor.password=i),type:"password",placeholder:"Password",class:"form-control",required:""},null,512),[[m,e.newEditor.password]]),e.validate.password&&(e.newEditor.password==""||e.newEditor.password==null)?(a(),o("div",B," please enter a password! ")):n("",!0)]),t("button",{class:"btn btn-dark mb-2",onClick:s[6]||(s[6]=i=>u.ValidateForm())}," Sign up "),l.isProduction==!0?(a(),o("div",C)):(a(),o("div",D)),T,z])])])}const H=c(f,[["render",O]]);export{H as default};
