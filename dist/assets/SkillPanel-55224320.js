import{_ as h,r as k,o as n,c as o,b as e,t as f,h as i,f as m,w as p,k as u,p as C,g as v}from"./main-0144cae7.js";const y="/images/char-with-sign.svg";const g={setup(){},data(){return{}},props:["skill"],computed:{},methods:{hideInfoPanel(){this.$parent.isSkillInfoPanelShown&&(screen.width>800?document.getElementById("skillInfoPanel").style.width="0px":document.getElementById("skillInfoPanel").style.height="0px",document.getElementById("sidepanel-backdrop").style.display="none",this.$parent.isSkillInfoPanelShown=!1)}}},l=s=>(C("data-v-6b7f2efc"),s=s(),v(),s),w={id:"skillInfoPanel",class:"skillInfoPanel"},I={class:"closeButtonContainer"},L={id:"skillInfoPanelContainer"},b=l(()=>e("div",{class:"form-check"},[e("input",{id:"mastery-checkbox",class:"form-check-input",type:"checkbox",value:"skill?.isMastered",style:{"pointer-events":"none"}}),e("label",{class:"form-check-label",style:{color:"#9c7eec","pointer-events":"none"}}," Attained ")],-1)),x={key:0,class:"mt-4"},S=l(()=>e("h2",null,"Mastery Requirements",-1)),P=["innerHTML"],B={key:1},M=l(()=>e("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"white"})],-1)),E=l(()=>e("img",{src:y},null,-1));function N(s,a,t,T,V,q){var c,d,r;const _=k("router-link");return n(),o("div",w,[e("div",I,[e("a",{href:"javascript:void(0)",class:"closebtn",onClick:a[0]||(a[0]=H=>this.hideInfoPanel())},"×")]),e("div",L,[e("h1",null,f((c=t.skill)==null?void 0:c.name),1),b,((d=t.skill)==null?void 0:d.type)!="domain"?(n(),o("div",x,[S,e("div",{class:"truncate-overflow",innerHTML:(r=t.skill)==null?void 0:r.masteryRequirements},null,8,P)])):i("",!0),t.skill.type!="domain"?(n(),o("hr",B)):i("",!0),t.skill.type!="domain"?(n(),m(_,{key:2,class:"btn green-btn",target:"_blank",id:"skillLink",to:"/skills/"+t.skill.id},{default:p(()=>[u("See More  "),M]),_:1},8,["to"])):i("",!0),E])])}const j=h(g,[["render",N],["__scopeId","data-v-6b7f2efc"]]);export{j as S};
