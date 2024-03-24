import{_ as F}from"./institute-collins-2-184bdfcb.js";import{_ as b,r as k,o as i,c as n,b as s,C as H,j as _,F as u,h as g,g as h,t as r,e as y,w as x,p as V,a as M}from"./main-ba19b6e3.js";const z={data(){return{skillId:this.$route.params.id,questionCSVFile:"",questionsArray:[],isDragging:!1,files:[],duplicates:[],missingFields:[],showModal:!1,modalClick:!1}},async created(){},mounted:function(){},methods:{OnFileChange(o){var l=o.target.files||o.dataTransfer.files;l.length},ReadFile(o){var l=new FileReader;l.onload=async a=>{var d=a.target.result,t=d.split(/\r?\n|\r|\n/g);for(let c=t.length-1;c>=0;c--)if(t[c]=="")t.splice(c,1);else{const v=t[c].split("|");if(v.length!=8){const e=c+1,f=v.length-8>0?"more":"less",w=Math.abs(8-v.length),C={fileName:o.name,line:e,missingType:f,numberOfMissingField:w};this.missingFields.push(C)}else this.questionsArray.push(v)}},l.readAsText(o)},async Submit(){const o=[];if((this.missingFields.length||this.duplicates.length)&&!this.modalClick){this.showModal=!0;return}for(let d=0;d<this.questionsArray.length;d++){const t={};t.name=this.questionsArray[d][0],t.question=this.questionsArray[d][1],t.correct_answer=this.questionsArray[d][2],t.incorrect_answer_1=this.questionsArray[d][3],t.incorrect_answer_2=this.questionsArray[d][4],t.incorrect_answer_3=this.questionsArray[d][5],t.incorrect_answer_4=this.questionsArray[d][6],t.explanation=this.questionsArray[d][7],o.push(t)}const l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questionArray:o})};var a="/skills/"+this.skillId+"/mc-questions/add";fetch(a,l).then(()=>{this.$router.push("/skills/"+this.skillId+"/question-bank")})},onChange(){const o=[];o.push(...this.$refs.file.files),this.files.push(...this.$refs.file.files);const l=this.files.map(a=>a.name);this.duplicates=l.filter((a,d)=>l.indexOf(a)!==d),!this.duplicates.length&&o.forEach(a=>{this.ReadFile(a)})},dragover(o){o.preventDefault(),this.isDragging=!0},dragleave(){this.isDragging=!1},drop(o){o.preventDefault(),this.$refs.file.files=o.dataTransfer.files,this.onChange(),this.isDragging=!1},remove(o,l){this.files.splice(o,1),this.duplicates=[],this.missingFields=[],this.questionsArray=[],this.files.forEach(a=>this.ReadFile(a))}}},m=o=>(V("data-v-ec742535"),o=o(),M(),o),L={class:"container mt-3"},S=m(()=>s("h1",null,"Add Multiple Choice Question",-1)),q={class:"row mt-5"},A={for:"fileInput",class:"file-label"},O={key:0},D={key:1},T=m(()=>s("span",{id:"click-here-label"},"click here",-1)),I={key:0,class:"preview-container mt-4 row gap-2 d-none d-lg-flex"},B={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"green",width:"60",height:"60"},N=m(()=>s("path",{d:"M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V304H176c-35.3 0-64 28.7-64 64V512H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM200 352h16c22.1 0 40 17.9 40 40v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-4.4-3.6-8-8-8H200c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-8c0-8.8 7.2-16 16-16s16 7.2 16 16v8c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V392c0-22.1 17.9-40 40-40zm133.1 0H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H333.1c-7.2 0-13.1 5.9-13.1 13.1c0 5.2 3 9.9 7.8 12l37.4 16.6c16.3 7.2 26.8 23.4 26.8 41.2c0 24.9-20.2 45.1-45.1 45.1H304c-8.8 0-16-7.2-16-16s7.2-16 16-16h42.9c7.2 0 13.1-5.9 13.1-13.1c0-5.2-3-9.9-7.8-12l-37.4-16.6c-16.3-7.2-26.8-23.4-26.8-41.2c0-24.9 20.2-45.1 45.1-45.1zm98.9 0c8.8 0 16 7.2 16 16v31.6c0 23 5.5 45.6 16 66c10.5-20.3 16-42.9 16-66V368c0-8.8 7.2-16 16-16s16 7.2 16 16v31.6c0 34.7-10.3 68.7-29.6 97.6l-5.1 7.7c-3 4.5-8 7.1-13.3 7.1s-10.3-2.7-13.3-7.1l-5.1-7.7c-19.3-28.9-29.6-62.9-29.6-97.6V368c0-8.8 7.2-16 16-16z"},null,-1)),R=[N],j={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"60",height:"60",fill:"grey"},$=m(()=>s("path",{d:"M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"},null,-1)),P=[$],E={class:""},Q=["onClick"],Y=m(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"white",width:"16",height:"16"},[s("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),J=[Y],X={key:0,class:"validate-line mt-3"},Z={key:1,class:"validate-line mt-3"},G={key:1,class:"preview-container mt-4 row gap-2 d-lg-none"},K={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"green",width:"60",height:"60"},U=m(()=>s("path",{d:"M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V304H176c-35.3 0-64 28.7-64 64V512H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM200 352h16c22.1 0 40 17.9 40 40v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-4.4-3.6-8-8-8H200c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-8c0-8.8 7.2-16 16-16s16 7.2 16 16v8c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V392c0-22.1 17.9-40 40-40zm133.1 0H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H333.1c-7.2 0-13.1 5.9-13.1 13.1c0 5.2 3 9.9 7.8 12l37.4 16.6c16.3 7.2 26.8 23.4 26.8 41.2c0 24.9-20.2 45.1-45.1 45.1H304c-8.8 0-16-7.2-16-16s7.2-16 16-16h42.9c7.2 0 13.1-5.9 13.1-13.1c0-5.2-3-9.9-7.8-12l-37.4-16.6c-16.3-7.2-26.8-23.4-26.8-41.2c0-24.9 20.2-45.1 45.1-45.1zm98.9 0c8.8 0 16 7.2 16 16v31.6c0 23 5.5 45.6 16 66c10.5-20.3 16-42.9 16-66V368c0-8.8 7.2-16 16-16s16 7.2 16 16v31.6c0 34.7-10.3 68.7-29.6 97.6l-5.1 7.7c-3 4.5-8 7.1-13.3 7.1s-10.3-2.7-13.3-7.1l-5.1-7.7c-19.3-28.9-29.6-62.9-29.6-97.6V368c0-8.8 7.2-16 16-16z"},null,-1)),W=[U],ee={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"60",height:"60",fill:"grey"},se=m(()=>s("path",{d:"M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"},null,-1)),te=[se],ie={class:""},ne=["onClick"],le=m(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"white",width:"12",height:"12"},[s("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),oe=[le],ce={key:0,class:"validate-line mt-3"},re={class:"mt-3"},ae={class:"row mt-4"},de={class:"col-sm-4"},he=m(()=>s("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"white"})],-1)),ue={key:0},_e={id:"myModal",class:"modal"},ge={class:"modal-content"},ve={key:0,class:"mb-3"},me=m(()=>s("span",{class:"text-warning"},"If you still wish to submit them, the lines below will not be created: ",-1)),pe={key:1},fe={class:"mt-4",style:{display:"flex",gap:"10px","justify-content":"end"}};function ye(o,l,a,d,t,c){const v=k("router-link");return i(),n(u,null,[s("div",L,[S,s("div",q,[s("div",{class:"dropzone-container mx-lg-3 my-2",onDragover:l[1]||(l[1]=(...e)=>c.dragover&&c.dragover(...e)),onDragleave:l[2]||(l[2]=(...e)=>c.dragleave&&c.dragleave(...e)),onDrop:l[3]||(l[3]=(...e)=>c.drop&&c.drop(...e)),style:H(t.isDragging&&"border-color: #8f7bd6;")},[s("input",{type:"file",multiple:"",name:"file",id:"fileInput",class:"hidden-input",onChange:l[0]||(l[0]=(...e)=>c.onChange&&c.onChange(...e)),ref:"file",accept:".csv, .txt"},null,544),s("label",A,[t.isDragging?(i(),n("div",O,"Release to drop files here.")):(i(),n("div",D,[_(" Drop files here or "),T,_(" to upload CSV and TXT file. ")]))]),t.files.length?(i(),n("div",I,[(i(!0),n(u,null,g(t.files,e=>(i(),n("div",{key:e.name,class:"preview-card col-3 d-flex justify-content-between"},[s("div",null,[e.type=="text/csv"?(i(),n("svg",B,R)):h("",!0),e.type=="text/plain"?(i(),n("svg",j,P)):h("",!0),s("p",E,r(e.name)+" ("+r(Math.round(e.size/1e3)+"kb")+") ",1)]),s("div",null,[s("button",{class:"ms-2 btn btn-danger",onClick:f=>c.remove(t.files.indexOf(e),e.name),title:"Remove file"},J,8,Q)])]))),128)),t.duplicates.length?(i(),n("div",X,[_(" You have add duplicate csv files. Please remove the duplicate file for "),(i(!0),n(u,null,g(t.duplicates,e=>(i(),n("span",{key:e},r(e)+",   ",1))),128))])):h("",!0),t.missingFields.length?(i(),n("div",Z,[_(" Please check your CSVs files: "),(i(!0),n(u,null,g(t.missingFields,e=>(i(),n("div",{key:e}," File: "+r(e.fileName)+" at Line "+r(e.line)+" have "+r(e.numberOfMissingField)+" "+r(e.missingType)+" field than default.   ",1))),128))])):h("",!0)])):h("",!0),t.files.length?(i(),n("div",G,[(i(!0),n(u,null,g(t.files,e=>(i(),n("div",{key:e.name,class:"preview-card col-10 d-flex justify-content-between"},[s("div",null,[e.type=="text/csv"?(i(),n("svg",K,W)):h("",!0),e.type=="text/plain"?(i(),n("svg",ee,te)):h("",!0),s("p",ie,r(e.name)+" ("+r(Math.round(e.size/1e3)+"kb")+") ",1)]),s("div",null,[s("button",{class:"btn btn-danger",onClick:f=>c.remove(t.files.indexOf(e),e.name),title:"Remove file"},oe,8,ne)])]))),128)),t.missingFields.length?(i(),n("div",ce,[_(" Please check your CSVs files: "),(i(!0),n(u,null,g(t.missingFields,e=>(i(),n("div",{key:e}," File: "+r(e.fileName)+" at Line "+r(e.line)+" have "+r(e.numberOfMissingField)+" "+r(e.missingType)+" field than default.   ",1))),128))])):h("",!0)])):h("",!0)],36)]),s("div",re,[s("div",{class:"btn purple-btn",onClick:l[4]||(l[4]=e=>c.Submit())},"Submit")]),s("div",ae,[s("div",de,[y(v,{class:"btn green-btn",to:"/mc-questions/"+t.skillId+"/add"},{default:x(()=>[_("Enter Manually   "),he]),_:1},8,["to"])])])]),t.showModal?(i(),n("div",ue,[s("div",_e,[s("div",ge,[t.missingFields.length?(i(),n("p",ve,[_(" Your files contain questions with incorrect formatting. "),me])):h("",!0),(i(!0),n(u,null,g(t.missingFields,e=>(i(),n("div",{class:"modal-warning-line mb-3",key:e}," File: "+r(e.fileName)+" at Line "+r(e.line)+" have "+r(e.numberOfMissingField)+" "+r(e.missingType)+" field than default. ",1))),128)),t.duplicates.length?(i(),n("p",pe," Please remove any duplicate files that are submitted below: ")):h("",!0),(i(!0),n(u,null,g(t.duplicates,e=>(i(),n("div",{class:"modal-warning-line mb-3",key:e}," File: "+r(e)+". ",1))),128)),s("div",fe,[s("button",{type:"button",class:"btn green-btn",onClick:l[5]||(l[5]=e=>{t.modalClick=!0,c.Submit()})}," Still Submit "),s("button",{type:"button",class:"btn red-btn",onClick:l[6]||(l[6]=e=>t.showModal=!1)}," Cancel ")])])])])):h("",!0)],64)}const we=b(z,[["render",ye],["__scopeId","data-v-ec742535"]]);const Ce={data(){return{skillId:this.$route.params.id,questionCSVFile:"",questionsArray:[],isDragging:!1,files_essay:[],duplicates:[],missingFields:[],showModal:!1,clickModal:!1}},async created(){},mounted:function(){},methods:{OnFileChange(o){var l=o.target.files||o.dataTransfer.files;l.length&&this.ReadFile(l[0])},ReadFile(o){var l=new FileReader;l.onload=a=>{var d=a.target.result,t=d.split(/\r?\n|\r|\n/g);for(let c=t.length-1;c>=0;c--){t[c]===""&&t.splice(c,1);let v;if(t[c]!==void 0)v=t[c].split("|");else break;if(v.length!=2){const e=c+1,f=v.length-2>0?"more":"less",w=Math.abs(2-v.length),C={fileName:o.name,line:e,missingType:f,numberOfMissingField:w};this.missingFields.push(C)}else this.questionsArray.push(v)}},l.readAsText(o)},async Submit(){const o=[];if((this.missingFields.length||this.duplicates.length)&&!this.clickModal){this.showModal=!0;return}for(let d=0;d<this.questionsArray.length;d++){const t={};t.name=this.questionsArray[d][0],t.question=this.questionsArray[d][1],o.push(t)}const l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questionArray:o})};var a="/skills/"+this.skillId+"/essay-questions/add";fetch(a,l).then(()=>{this.$router.push("/skills/"+this.skillId+"/question-bank")})},onChange(){const o=[];o.push(...this.$refs.file_essay.files),this.files_essay.push(...this.$refs.file_essay.files);const l=this.files_essay.map(a=>a.name);this.duplicates=l.filter((a,d)=>l.indexOf(a)!==d),!this.duplicates.length&&o.forEach(a=>{this.ReadFile(a)})},dragover(o){o.preventDefault(),this.isDragging=!0},dragleave(){this.isDragging=!1},drop(o){o.preventDefault(),this.$refs.file_essay.files=o.dataTransfer.files,this.onChange(),this.isDragging=!1},remove(o,l){this.files_essay.splice(o,1),this.duplicates=[],this.missingFields=[],this.questionsArray=[],this.files_essay.forEach(a=>this.ReadFile(a))}}},p=o=>(V("data-v-0e0aafa6"),o=o(),M(),o),be={class:"container mt-3"},ke=p(()=>s("h1",null,"Add Essay Question",-1)),He={class:"row mt-5"},xe={for:"fileInput_essay",class:"file-label"},Ve={key:0},Me={key:1},Fe=p(()=>s("span",{id:"click-here-label"},"click here",-1)),ze={key:0,class:"preview-container mt-4 row gap-2 d-none d-lg-flex"},Le={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"green",width:"60",height:"60"},Se=p(()=>s("path",{d:"M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V304H176c-35.3 0-64 28.7-64 64V512H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM200 352h16c22.1 0 40 17.9 40 40v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-4.4-3.6-8-8-8H200c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-8c0-8.8 7.2-16 16-16s16 7.2 16 16v8c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V392c0-22.1 17.9-40 40-40zm133.1 0H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H333.1c-7.2 0-13.1 5.9-13.1 13.1c0 5.2 3 9.9 7.8 12l37.4 16.6c16.3 7.2 26.8 23.4 26.8 41.2c0 24.9-20.2 45.1-45.1 45.1H304c-8.8 0-16-7.2-16-16s7.2-16 16-16h42.9c7.2 0 13.1-5.9 13.1-13.1c0-5.2-3-9.9-7.8-12l-37.4-16.6c-16.3-7.2-26.8-23.4-26.8-41.2c0-24.9 20.2-45.1 45.1-45.1zm98.9 0c8.8 0 16 7.2 16 16v31.6c0 23 5.5 45.6 16 66c10.5-20.3 16-42.9 16-66V368c0-8.8 7.2-16 16-16s16 7.2 16 16v31.6c0 34.7-10.3 68.7-29.6 97.6l-5.1 7.7c-3 4.5-8 7.1-13.3 7.1s-10.3-2.7-13.3-7.1l-5.1-7.7c-19.3-28.9-29.6-62.9-29.6-97.6V368c0-8.8 7.2-16 16-16z"},null,-1)),qe=[Se],Ae={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"60",height:"60",fill:"grey"},Oe=p(()=>s("path",{d:"M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"},null,-1)),De=[Oe],Te={class:"input-file-name"},Ie=["onClick"],Be=p(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"white",width:"16",height:"16"},[s("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),Ne=[Be],Re={key:0,class:"validate-line mt-3"},je={key:1,class:"validate-line mt-3"},$e={key:1,class:"preview-container mt-4 row gap-2 d-lg-none"},Pe={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"green",width:"60",height:"60"},Ee=p(()=>s("path",{d:"M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V304H176c-35.3 0-64 28.7-64 64V512H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM200 352h16c22.1 0 40 17.9 40 40v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-4.4-3.6-8-8-8H200c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-8c0-8.8 7.2-16 16-16s16 7.2 16 16v8c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V392c0-22.1 17.9-40 40-40zm133.1 0H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H333.1c-7.2 0-13.1 5.9-13.1 13.1c0 5.2 3 9.9 7.8 12l37.4 16.6c16.3 7.2 26.8 23.4 26.8 41.2c0 24.9-20.2 45.1-45.1 45.1H304c-8.8 0-16-7.2-16-16s7.2-16 16-16h42.9c7.2 0 13.1-5.9 13.1-13.1c0-5.2-3-9.9-7.8-12l-37.4-16.6c-16.3-7.2-26.8-23.4-26.8-41.2c0-24.9 20.2-45.1 45.1-45.1zm98.9 0c8.8 0 16 7.2 16 16v31.6c0 23 5.5 45.6 16 66c10.5-20.3 16-42.9 16-66V368c0-8.8 7.2-16 16-16s16 7.2 16 16v31.6c0 34.7-10.3 68.7-29.6 97.6l-5.1 7.7c-3 4.5-8 7.1-13.3 7.1s-10.3-2.7-13.3-7.1l-5.1-7.7c-19.3-28.9-29.6-62.9-29.6-97.6V368c0-8.8 7.2-16 16-16z"},null,-1)),Qe=[Ee],Ye={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"60",height:"60",fill:"grey"},Je=p(()=>s("path",{d:"M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"},null,-1)),Xe=[Je],Ze={class:"input-file-name"},Ge=["onClick"],Ke=p(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"white",width:"12",height:"12"},[s("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),Ue=[Ke],We={key:0,class:"validate-line mt-3"},e1={key:1,class:"validate-line mt-3"},s1={class:"row mt-3"},t1={class:"col"},i1={class:"row mt-4"},n1={class:"col-sm-4"},l1=p(()=>s("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"white"})],-1)),o1={key:0},c1={id:"myModal",class:"modal"},r1={class:"modal-content"},a1={key:0,class:"mb-3"},d1=p(()=>s("span",{class:"text-warning"},"If you still wish to submit them, the lines below will not be created: ",-1)),h1={key:1},u1={class:"mt-4",style:{display:"flex",gap:"10px","justify-content":"end"}};function _1(o,l,a,d,t,c){const v=k("router-link");return i(),n(u,null,[s("div",be,[ke,s("div",He,[s("div",{class:"dropzone-container",onDragover:l[1]||(l[1]=(...e)=>c.dragover&&c.dragover(...e)),onDragleave:l[2]||(l[2]=(...e)=>c.dragleave&&c.dragleave(...e)),onDrop:l[3]||(l[3]=(...e)=>c.drop&&c.drop(...e)),style:H(t.isDragging&&"border-color: #8f7bd6;")},[s("input",{type:"file",multiple:"",name:"file_essay",id:"fileInput_essay",class:"hidden-input",onChange:l[0]||(l[0]=(...e)=>c.onChange&&c.onChange(...e)),ref:"file_essay",accept:".csv,.txt"},null,544),s("label",xe,[t.isDragging?(i(),n("div",Ve,"Release to drop files here.")):(i(),n("div",Me,[_(" Drop files here or "),Fe,_(" to upload CSV and TXT file. ")]))]),t.files_essay.length?(i(),n("div",ze,[(i(!0),n(u,null,g(t.files_essay,e=>(i(),n("div",{key:e.name,class:"preview-card col-3 d-flex justify-content-between"},[s("div",null,[e.type=="text/csv"?(i(),n("svg",Le,qe)):h("",!0),e.type=="text/plain"?(i(),n("svg",Ae,De)):h("",!0),s("p",Te,r(e.name)+" ("+r(Math.round(e.size/1e3)+"kb")+") ",1)]),s("div",null,[s("button",{class:"ms-2 btn btn-danger",onClick:f=>c.remove(t.files_essay.indexOf(e),e.name),title:"Remove file"},Ne,8,Ie)])]))),128)),t.duplicates.length?(i(),n("div",Re,[_(" You have add duplicate csv files. Please remove the duplicate file for "),(i(!0),n(u,null,g(t.duplicates,e=>(i(),n("span",{key:e.name},r(e)+",   ",1))),128))])):h("",!0),t.missingFields.length?(i(),n("div",je,[_(" Please check your CSVs files: "),(i(!0),n(u,null,g(t.missingFields,e=>(i(),n("div",{key:e}," File: "+r(e.fileName)+" at Line "+r(e.line)+" have "+r(e.numberOfMissingField)+" "+r(e.missingType)+" field than default.   ",1))),128))])):h("",!0)])):h("",!0),t.files_essay.length?(i(),n("div",$e,[(i(!0),n(u,null,g(t.files_essay,e=>(i(),n("div",{key:e.name,class:"preview-card col-10 d-flex justify-content-between"},[s("div",null,[e.type=="text/csv"?(i(),n("svg",Pe,Qe)):h("",!0),e.type=="text/plain"?(i(),n("svg",Ye,Xe)):h("",!0),s("p",Ze,r(e.name)+" ("+r(Math.round(e.size/1e3)+"kb")+") ",1)]),s("div",null,[s("button",{class:"ms-2 btn btn-danger",onClick:f=>c.remove(t.files_essay.indexOf(e),e.name),title:"Remove file"},Ue,8,Ge)])]))),128)),t.duplicates.length?(i(),n("div",We,[_(" You have add duplicate csv files. Please remove the duplicate file for "),(i(!0),n(u,null,g(t.duplicates,e=>(i(),n("span",{key:e.name},r(e)+",   ",1))),128))])):h("",!0),t.missingFields.length?(i(),n("div",e1,[_(" Please check your CSVs files: "),(i(!0),n(u,null,g(t.missingFields,e=>(i(),n("div",{key:e}," File: "+r(e.fileName)+" at Line "+r(e.line)+" have "+r(e.numberOfMissingField)+" "+r(e.missingType)+" field than default.   ",1))),128))])):h("",!0)])):h("",!0)],36)]),s("div",s1,[s("div",t1,[s("div",{class:"btn purple-btn",onClick:l[4]||(l[4]=(...e)=>c.Submit&&c.Submit(...e))},"Submit")])]),s("div",i1,[s("div",n1,[y(v,{class:"btn green-btn",to:"/essay-questions/"+t.skillId+"/add"},{default:x(()=>[_("Enter Manually   "),l1]),_:1},8,["to"])])])]),t.showModal?(i(),n("div",o1,[s("div",c1,[s("div",r1,[t.missingFields.length?(i(),n("p",a1,[_(" Your files contain questions with incorrect formatting. "),d1])):h("",!0),(i(!0),n(u,null,g(t.missingFields,e=>(i(),n("div",{class:"modal-warning-line mb-3",key:e}," File: "+r(e.fileName)+" at Line "+r(e.line)+" have "+r(e.numberOfMissingField)+" "+r(e.missingType)+" field than default. ",1))),128)),t.duplicates.length?(i(),n("p",h1," Please remove any duplicate files that are submitted below: ")):h("",!0),(i(!0),n(u,null,g(t.duplicates,e=>(i(),n("div",{class:"modal-warning-line mb-3",key:e}," File: "+r(e)+". ",1))),128)),s("div",u1,[s("button",{type:"button",class:"btn green-btn",onClick:l[5]||(l[5]=e=>{t.clickModal=!0,c.Submit()})}," Still Submit "),s("button",{type:"button",class:"btn red-btn",onClick:l[6]||(l[6]=e=>t.showModal=!1)}," Cancel ")])])])])):h("",!0)],64)}const g1=b(Ce,[["render",_1],["__scopeId","data-v-0e0aafa6"]]);const v1=s("div",{id:"banner"},[s("img",{src:F,class:"image-fluid"})],-1),m1={class:"container-fluid"},p1=s("br",{class:"mt-3"},null,-1),f1=s("div",{class:"container mt-3"},[s("hr",{id:"divide-line",class:"border border-1 opacity-75"})],-1),y1=s("br",null,null,-1),w1={class:"container mt-3 pb-3 pe-0"},C1={class:"d-flex flex-row-reverse pe-0 me-lg-0 me-2"},H1={__name:"AddQuestionView",setup(o){return(l,a)=>(i(),n(u,null,[v1,s("div",m1,[y(we),p1,f1,y1,y(g1),s("div",w1,[s("div",C1,[s("a",{class:"btn red-btn",onClick:a[0]||(a[0]=d=>l.$router.go(-1))},"Cancel")])])])],64))}};export{H1 as default};
