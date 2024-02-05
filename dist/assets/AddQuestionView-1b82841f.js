import{_ as C,r as p,o as a,c as d,b as s,a as c,f as m,l as v,p as f,d as y,F as g}from"./main-1d0d88d5.js";const b={data(){return{skillId:this.$route.params.id,questionCSVFile:"",questionsArray:[]}},async created(){},mounted:function(){},methods:{OnFileChange(t){var e=t.target.files||t.dataTransfer.files;e.length&&this.ReadFile(e[0])},ReadFile(t){var e=new FileReader;e.onload=r=>{var i=r.target.result,n=i.split(/\r?\n|\r|\n/g);for(let o=0;o<n.length;o++)this.questionsArray[o]=n[o].split("|")},e.readAsText(t)},Submit(){const t=[];for(let i=0;i<this.questionsArray.length;i++){const n={};n.name=this.questionsArray[i][0],n.question=this.questionsArray[i][1],n.answer_1=this.questionsArray[i][2],n.answer_2=this.questionsArray[i][3],n.answer_3=this.questionsArray[i][4],n.answer_4=this.questionsArray[i][5],n.answer_5=this.questionsArray[i][6],n.correct_answer=this.questionsArray[i][7],n.explanation=this.questionsArray[i][8],t.push(n)}const e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questionArray:t})};var r="/skills/"+this.skillId+"/mc-questions/add";fetch(r,e).then(()=>{this.$router.push("/skills/"+this.skillId+"/question-bank")})}}},u=t=>(f("data-v-b3d9a222"),t=t(),y(),t),q={class:"container mt-3"},w=u(()=>s("h1",null,"Add Multiple Choice Question",-1)),k={class:"row"},A=u(()=>s("h2",null,"Upload CSV",-1)),S={class:"col-sm-4"},L={key:0},$=u(()=>s("p",{style:{"font-size":"14px"}},[s("em",null,"Maximum file size 15mb")],-1)),F={key:1},I={class:"row"},x=u(()=>s("h2",null,"or",-1)),O={class:"col-sm-4"},V=u(()=>s("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"white"})],-1));function M(t,e,r,i,n,o){const h=p("router-link");return a(),d("div",q,[w,s("div",k,[A,s("div",S,[n.questionCSVFile?(a(),d("div",F,[s("p",null,[s("button",{class:"btn btn-warning",onClick:e[1]||(e[1]=(...l)=>t.removeImage&&t.removeImage(...l))}," Remove file ")])])):(a(),d("div",L,[s("input",{class:"form-control",type:"file",accept:".csv",id:"csvFile",onChange:e[0]||(e[0]=(...l)=>o.OnFileChange&&o.OnFileChange(...l))},null,32),$])),s("button",{class:"btn green-btn",onClick:e[2]||(e[2]=l=>o.Submit())},"Submit")])]),s("div",I,[x,s("div",O,[c(h,{class:"btn green-btn",to:"/mc-questions/"+n.skillId+"/add"},{default:m(()=>[v("Enter Manually   "),V]),_:1},8,["to"])])])])}const T=C(b,[["render",M],["__scopeId","data-v-b3d9a222"]]);const R={data(){return{skillId:this.$route.params.id,questionCSVFile:"",questionsArray:[]}},async created(){},mounted:function(){},methods:{OnFileChange(t){var e=t.target.files||t.dataTransfer.files;e.length&&this.ReadFile(e[0])},ReadFile(t){var e=new FileReader;e.onload=r=>{var i=r.target.result,n=i.split(/\r?\n|\r|\n/g);for(let o=0;o<n.length;o++)this.questionsArray[o]=n[o].split("|")},e.readAsText(t)},Submit(){const t=[];for(let i=0;i<this.questionsArray.length;i++){const n={};n.name=this.questionsArray[i][0],n.question=this.questionsArray[i][1],t.push(n)}const e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questionArray:t})};var r="/skills/"+this.skillId+"/essay-questions/add";fetch(r,e).then(()=>{this.$router.push("/skills/"+this.skillId+"/question-bank")})}}},_=t=>(f("data-v-fae00029"),t=t(),y(),t),Q={class:"container mt-3"},E=_(()=>s("h1",null,"Add Essay Question",-1)),j={class:"row"},B={class:"col-sm-4"},N={key:0},z=_(()=>s("p",{style:{"font-size":"14px"}},[s("em",null,"Maximum file size 15mb")],-1)),J={key:1},P={class:"row"},Z=_(()=>s("h2",null,"or",-1)),U={class:"col-sm-4"},D=_(()=>s("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"white"})],-1));function G(t,e,r,i,n,o){const h=p("router-link");return a(),d("div",Q,[E,s("div",j,[s("div",B,[n.questionCSVFile?(a(),d("div",J,[s("p",null,[s("button",{class:"btn btn-warning",onClick:e[1]||(e[1]=(...l)=>t.removeImage&&t.removeImage(...l))}," Remove file ")])])):(a(),d("div",N,[s("input",{class:"form-control",type:"file",accept:".csv",id:"csvFile",onChange:e[0]||(e[0]=(...l)=>o.OnFileChange&&o.OnFileChange(...l))},null,32),z])),s("button",{class:"btn btn-dark",onClick:e[2]||(e[2]=l=>o.Submit())},"Submit")])]),s("div",P,[Z,s("div",U,[c(h,{class:"btn green-btn",to:"/essay-questions/"+n.skillId+"/add"},{default:m(()=>[v("Enter Manually   "),D]),_:1},8,["to"])])])])}const H=C(R,[["render",G],["__scopeId","data-v-fae00029"]]),K=s("p",null," ",-1),W={class:"d-flex justify-content-between"},Y={__name:"AddQuestionView",setup(t){return(e,r)=>(a(),d(g,null,[c(T),K,c(H),s("div",W,[s("a",{class:"btn btn-dark",onClick:r[0]||(r[0]=i=>e.$router.go(-1))},"Cancel")])],64))}};export{Y as default};
