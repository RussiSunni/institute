import{_ as m,o as l,c as a,d as e,w as i,L as d,j as r,b as u,F as f}from"./main-674e8d78.js";import{_}from"./general-banner-1c13aca4.js";import{_ as p}from"./recurso-69-12793b41.js";const h={data(){return{skillId:this.$route.params.skillId,question:{name:"",question:""},validate:{violated:!1,name:!1,question:!1},answerType:"text"}},methods:{Submit(){if(this.validate.violated=!1,(this.question.name===""||this.question.name===null)&&(this.validate.name=!0,this.validate.violated=!0),(this.question.question===""||this.question.name===null)&&(this.validate.question=!0,this.validate.violated=!0),this.validate.violated)return;const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.question.name,question:this.question.question,skill_id:this.skillId,answer_type:this.answerType})};var s="/questions/essay-questions/add";fetch(s,n).then(()=>{alert("Question added")}).then(()=>{this.$router.go(-1)})}}},v=e("div",{id:"banner"},[e("img",{src:_,class:"image-fluid"})],-1),q={class:"container mt-5 pb-3"},b=e("div",{class:"row"},[e("div",{class:"col-10 d-flex align-items-end"},[e("h2",{id:"header-tile"},"Add Question"),e("img",{src:p,id:"header-icon"})])],-1),y={class:"main-content-container container-fluid p-4"},k={class:"row"},w={id:"form-container",class:"col-lg-6 p-4"},x=e("label",{for:"last_name",class:"form-label"},"Answer type",-1),g={class:"form-check"},T=e("label",{class:"form-check-label",for:"flexRadioDefault1"}," Text ",-1),V={class:"form-check mb-3"},Q=e("label",{class:"form-check-label",for:"flexRadioDefault2"}," Image ",-1),C={class:"mb-3"},D=e("label",{for:"first_name",class:"form-label"},"Question Name",-1),R={key:0,class:"form-validate"},S={class:"mb-3"},A=e("label",{for:"last_name",class:"form-label"},"Question",-1),I={key:0,class:"form-validate"},N={class:"d-flex justify-content-end gap-4"};function U(n,s,j,B,t,c){return l(),a(f,null,[v,e("div",q,[b,e("div",y,[e("div",k,[e("div",w,[x,e("div",g,[i(e("input",{class:"form-check-input",type:"radio",id:"flexRadioDefault1",value:"text","onUpdate:modelValue":s[0]||(s[0]=o=>t.answerType=o),checked:""},null,512),[[d,t.answerType]]),T]),e("div",V,[i(e("input",{class:"form-check-input",type:"radio",id:"flexRadioDefault2",value:"image","onUpdate:modelValue":s[1]||(s[1]=o=>t.answerType=o)},null,512),[[d,t.answerType]]),Q]),e("div",C,[D,i(e("input",{"onUpdate:modelValue":s[2]||(s[2]=o=>t.question.name=o),type:"text",class:"form-control"},null,512),[[r,t.question.name]]),t.validate.name&&(t.question.name===""||t.question.name===null)?(l(),a("div",R," please enter a name for question ! ")):u("",!0)]),e("div",S,[A,i(e("textarea",{"onUpdate:modelValue":s[3]||(s[3]=o=>t.question.question=o),rows:"5",class:"form-control"},`\r
                        `,512),[[r,t.question.question]]),t.validate.question&&(t.question.question===""||t.question.question===null)?(l(),a("div",I," please enter question’s content ! ")):u("",!0)]),e("div",N,[e("a",{class:"btn red-btn",onClick:s[4]||(s[4]=o=>n.$router.go(-1))},"Cancel"),e("button",{class:"btn purple-btn",onClick:s[5]||(s[5]=o=>c.Submit())}," Submit ")])])])])])],64)}const M=m(h,[["render",U]]);export{M as default};
