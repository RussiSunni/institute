import{_ as g,o as r,c as i,b as h,a as t,d as l,g as c,T as n,B as a,n as p,K as _,t as w}from"./main-e2bbc89f.js";const m={props:["formData"],data(){return{strength:"",strengthScore:0,showCriteria:!1,criteriaFlag:{passwordLength:!1,noNumber:!1,noSpecialChar:!1,unique:!1,haveUpperCase:!1,noAlphabet:!1,predictable:!1},hoverTile:"special characters: (~!@#$%^&*_-+=`|(){}[]:;\"''<>,.?/)"}},mounted(){},destroyed(){},methods:{checkStrength(s){let o=0;return/\d/.test(s)?(o++,this.criteriaFlag.noNumber=!1):this.criteriaFlag.noNumber=!0,/[a-z]/.test(s)?(o++,this.criteriaFlag.noAlphabet=!1):this.criteriaFlag.noAlphabet=!0,/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(s)?(o++,this.criteriaFlag.noSpecialChar=!1):this.criteriaFlag.noSpecialChar=!0,/[A-Z]/.test(s)?(o++,this.criteriaFlag.noUpperCase=!1):this.criteriaFlag.noUpperCase=!0,s.length<7?(this.criteriaFlag.passwordLength=!0,o=0):this.criteriaFlag.passwordLength=!1,(s.toLowerCase().includes(this.formData.firstName)||s.toLowerCase().includes(this.formData.lastName)||s.toLowerCase().includes(this.formData.username)||s.toLowerCase().includes(this.formData.email))&&(this.criteriaFlag.predictable=!0,o=0),o}},watch:{formData:{handler(s,o){if(s.password)if(s.password.length>0){this.showCriteria=!0;const d=this.checkStrength(s.password);switch(this.strengthScore=d,d){case 0:this.strength="very weak";case 1:this.strength="weak";break;case 2:this.strength="moderate";break;case 3:this.strength="strong";break;case 4:this.strength="very strong";break;default:this.strength="very strong";break}d>=4?this.$parent.validate.passwordComplex=!0:this.$parent.validate.passwordComplex=!1,s.password.toLowerCase().includes(s.username)||s.password.toLowerCase().includes(s.firstName)||s.password.toLowerCase().includes(s.lastName)||s.password.toLowerCase().includes(s.email)?(this.criteriaFlag.predictable=!0,this.strengthScore=0,this.strength="weak",this.$parent.validate.passwordComplex=!1):this.criteriaFlag.predictable=!1}else this.showCriteria=!1;else this.showCriteria=!1},deep:!0}}},f={class:"d-flex flex-column"},u={key:0,class:"form-validate"},v={key:1,class:"form-validate"},x={key:2,class:"d-flex flex-column ms-2 mt-2"},C={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"15",height:"15",fill:"green",class:"me-1"},k=t("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"},null,-1),z=[k],b={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"15",height:"15",fill:"red",class:"me-1"},S=t("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"},null,-1),y=[S],F=t("span",null," At least 8 characters long ",-1),A={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"15",height:"15",fill:"green",class:"me-1"},M=t("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"},null,-1),L=[M],B={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"15",height:"15",fill:"red",class:"me-1"},N=t("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"},null,-1),D=[N],T=t("span",null," At least 1 uppercase character ",-1),U={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"15",height:"15",fill:"green",class:"me-1"},P=t("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"},null,-1),Y=[P],q={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"15",height:"15",fill:"red",class:"me-1"},E=t("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"},null,-1),K=[E],Z=t("span",null," At least 1 number ",-1),j={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"15",height:"15",fill:"green",class:"me-1"},G=t("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"},null,-1),H=[G],I={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"15",height:"15",fill:"red",class:"me-1"},J=t("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"},null,-1),O=[J],Q=t("span",null," At least 1 alphabetical character ",-1),R={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"15",height:"15",fill:"green",class:"me-1"},W=t("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"},null,-1),X=[W],V={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"15",height:"15",fill:"red",class:"me-1"},$=t("path",{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"},null,-1),ee=[$],te=["title"],se={class:"tile"},re={class:"row ps-2 pe-2 mt-2"},ie={class:"col ps-1 pe-1"},oe={class:"col ps-1 pe-1"},ae={class:"col ps-1 pe-1"},le={class:"col ps-1 pe-1"};function ce(s,o,d,ne,e,he){return r(),i("div",f,[e.strengthScore<3&&e.showCriteria?(r(),i("div",u," Your password is not strong enough ")):h("",!0),e.criteriaFlag.predictable?(r(),i("div",v," Your password mustn‘t contain your name, user-name or email. Please do not use predictable password ")):h("",!0),e.showCriteria?(r(),i("div",x,[t("div",{class:a([e.criteriaFlag.passwordLength?"not-meet-criteria":"meet-criteria","d-flex flex-row align-items-center"])},[l(n,{name:"fade"},{default:c(()=>[e.criteriaFlag.passwordLength?(r(),i("svg",b,y)):(r(),i("svg",C,z))]),_:1}),F],2),t("div",{class:a([e.criteriaFlag.noUpperCase?"not-meet-criteria":"meet-criteria","d-flex flex-row align-items-center"])},[l(n,{name:"fade"},{default:c(()=>[e.criteriaFlag.noUpperCase?(r(),i("svg",B,D)):(r(),i("svg",A,L))]),_:1}),T],2),t("div",{class:a([e.criteriaFlag.noNumber?"not-meet-criteria":"meet-criteria","d-flex flex-row align-items-center"])},[l(n,{name:"fade"},{default:c(()=>[e.criteriaFlag.noNumber?(r(),i("svg",q,K)):(r(),i("svg",U,Y))]),_:1}),Z],2),t("div",{class:a([e.criteriaFlag.noAlphabet?"not-meet-criteria":"meet-criteria","d-flex flex-row align-items-center"])},[l(n,{name:"fade"},{default:c(()=>[e.criteriaFlag.noAlphabet?(r(),i("svg",I,O)):(r(),i("svg",j,H))]),_:1}),Q],2),t("div",{class:a([e.criteriaFlag.noSpecialChar?"not-meet-criteria":"meet-criteria","d-flex flex-row align-items-center"])},[l(n,{name:"fade"},{default:c(()=>[e.criteriaFlag.noSpecialChar?(r(),i("svg",V,ee)):(r(),i("svg",R,X))]),_:1}),t("span",{class:"special-character-hover","b-tooltip.hover":"",title:e.hoverTile}," At least 1 special character (*) ",8,te)],2),t("div",se,[p(" Password strength: "),t("span",{style:_({color:e.strengthScore>1?e.strengthScore>2?"green":"rgb(228, 206, 10)":"red"})},w(e.strength),5)]),t("div",re,[t("div",ie,[t("div",{class:a([e.strengthScore>1?e.strengthScore>2?"strong-power":"moderate-power":"weak-power","power-meter"])},null,2)]),t("div",oe,[l(n,{name:"strength-bar"},{default:c(()=>[e.strengthScore>1?(r(),i("div",{key:0,class:a([e.strengthScore>1?e.strengthScore>2?"strong-power":"moderate-power":"weak-power","power-meter"])},null,2)):h("",!0)]),_:1})]),t("div",ae,[l(n,{name:"strength-bar"},{default:c(()=>[e.strengthScore>2?(r(),i("div",{key:0,class:a([e.strengthScore>1?e.strengthScore>2?"strong-power":"moderate-power":"weak-power","power-meter"])},null,2)):h("",!0)]),_:1})]),t("div",le,[l(n,{name:"strength-bar"},{default:c(()=>[e.strengthScore>3?(r(),i("div",{key:0,class:a([e.strengthScore>1?e.strengthScore>2?"strong-power":"moderate-power":"weak-power","power-meter"])},null,2)):h("",!0)]),_:1})])])])):h("",!0)])}const ge=g(m,[["render",ce]]);export{ge as C};
