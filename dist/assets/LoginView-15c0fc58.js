import{_ as d,B as u,o as c,c as m,a as e,w as l,v as i,D as p,E as _,i as h,f as g}from"./main-541fbbc7.js";const f={data(){return{username:null,password:null}},mounted(){let t=document.createElement("script");t.setAttribute("src","https://accounts.google.com/gsi/client"),t.setAttribute("defer",""),document.head.appendChild(t),this.GetGoogleLoginResult()},computed:{},methods:{Submit(){const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.username,password:this.password})};var s="/login-attempt";fetch(s,t).then(function(o){return o.json()}).then(function(o){o.account=="authorized"?u.push({name:"tidy-tree"}):o.account=="wrong-password"?alert("wrong password"):alert("no account")})},GetGoogleLoginResult(){fetch("/google-login-result").then(function(t){return t.json()}).then(t=>{t.account=="no account"&&alert("No account found.")})}}},b={class:"login-page"},v={class:"form-signin"},w=e("div",{class:"text-center"},[e("img",{class:"mb-4",src:p,alt:"",width:"72",height:"72"})],-1),x=e("h1",{class:"h3 mb-3 font-weight-normal"},"Student log in",-1),k={class:"mt-3"},y=e("label",{class:"mb-4 welcome-message"},"Welcome back! Please enter your details.",-1),S={class:"mb-3 text-start"},V=e("label",{class:"form-label"},"Username",-1),q={class:"mb-3 text-start"},B=e("label",{class:"form-label"},"Password",-1),C=_('<div class="d-flex password-extras"><div class="form-check"><input class="form-check-input" type="checkbox" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> Remember for 30 days </label></div><div style="color:rgba(164, 139, 229, 1);"><a href="#" class="links">Forgot password</a></div></div>',1),D=e("div",{id:"g_id_onload","data-client_id":"13191319610-qectaoi146ce1pm4v95jtgctsbtmqb3t.apps.googleusercontent.com","data-context":"signin","data-ux_mode":"popup","data-login_uri":"/google-login-attempt","data-auto_prompt":"false"},null,-1),L=e("div",{class:"g_id_signin","data-type":"standard","data-shape":"rectangular","data-theme":"outline","data-text":"signin_with","data-size":"large","data-logo_alignment":"left","data-width":"330"},null,-1),N=e("div",{class:"mt-4 signup text-center"},[h(" Don’t have an account? "),e("a",{href:"#",class:"links"},"Sign up")],-1);function j(t,s,o,P,a,r){return c(),m("div",b,[e("div",v,[w,x,e("div",k,[y,e("div",S,[V,l(e("input",{"onUpdate:modelValue":s[0]||(s[0]=n=>a.username=n),type:"text",placeholder:"Username",class:"form-control",required:""},null,512),[[i,a.username]])]),e("div",q,[B,l(e("input",{"onUpdate:modelValue":s[1]||(s[1]=n=>a.password=n),type:"password",placeholder:"Password",class:"form-control",required:""},null,512),[[i,a.password]])]),C,e("button",{class:"btn btn-dark mb-2",onClick:s[2]||(s[2]=n=>r.Submit())}," Sign in "),D,L,N])])])}const G=d(f,[["render",j]]),U={__name:"LoginView",setup(t){return(s,o)=>(c(),g(G))}};export{U as default};
