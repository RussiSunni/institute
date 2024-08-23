import{_ as m,o as r,c as l,b as e,a as h,y as g,w as c,s as d,t as u,r as p,h as E,F as k}from"./main-c01a666d.js";import{_ as b}from"./general-banner-1c13aca4.js";const v={setup(){},data(){return{skillId:this.$route.params.contentId,userId:this.$route.params.userId,skill:{},skillEdit:{},comment:"",isEditMode:!1,changeIcon:!1,changeBanner:!1,changeMasteryText:!1}},async created(){await this.getSkillEdit(),await this.getSkill(),this.skill.banner_image!==this.skillEdit.banner_image&&(this.changeBanner=!0),this.skill.icon_image!==this.skillEdit.icon_image&&(this.changeIcon=!0),$("#summernote").summernote("code",this.skillEdit.mastery_requirements),$("#summernote").next().find(".note-editable").attr("contenteditable",!1)},methods:{async getSkillEdit(){await fetch("/skills/submitted-for-review/"+this.skillId+"/"+this.userId).then(function(t){return t.json()}).then(t=>{this.skillEdit=t,console.log(this.skillEdit),this.comment=t.comment})},async getSkill(){await fetch("/skills/show/"+this.skillId).then(function(t){return t.json()}).then(t=>{this.skill=t})},dismissEdit(){if(confirm("Delete this edit?")){const t=fetch("/skills/submitted-for-review/"+this.skillId+"/"+this.userId,{method:"DELETE"});t.error&&console.log(t.error),this.$router.back()}},dismissIcon(){confirm("Revert the icon?")&&(this.skillEdit.icon_image=this.skill.icon_image)},dismissBanner(){confirm("Revert the banner?")&&(this.skillEdit.banner_image=this.skill.banner_image)},edit(){$("#summernote").next().find(".note-editable").attr("contenteditable",!0),this.isEditMode=!0},saveEdit(){this.skillEdit.mastery_requirements=$("#summernote").summernote("code");const t={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({mastery_requirements:this.skillEdit.mastery_requirements,icon_image:this.skillEdit.icon_image,banner_image:this.skillEdit.banner_image,comment:this.comment,edit:this.isEditMode})};var i="/skills/"+this.skillEdit.skill_id+"/edit-for-review/save";fetch(i,t).then(()=>{this.$router.back()});const n=fetch("/skills/submitted-for-review/"+this.skillId+"/"+this.userId,{method:"DELETE"});n.error&&console.log(n.error)}}},Q={class:"container mt-4 mb-4"},C=e("h1",{class:"page-title"},"Comparison",-1),x=e("hr",null,null,-1),I={key:0,class:"d-flex flex-column"},q=e("h4",null,"Banner",-1),M={class:"old-container banner-container"},T=e("div",{class:"container-tile"},"Original",-1),H=["src"],B=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",fill:"#ac90e8",height:"70",width:"70",class:"mx-auto mt-1"},[e("path",{d:"M2 334.5c-3.8 8.8-2 19 4.6 26l136 144c4.5 4.8 10.8 7.5 17.4 7.5s12.9-2.7 17.4-7.5l136-144c6.6-7 8.4-17.2 4.6-26s-12.5-14.5-22-14.5l-72 0 0-288c0-17.7-14.3-32-32-32L128 0C110.3 0 96 14.3 96 32l0 288-72 0c-9.6 0-18.2 5.7-22 14.5z"})],-1),L={class:"new-container banner-container"},S=e("div",{class:"container-tile"},"Changed",-1),V=["src"],U={class:"row"},A={class:"col-sm"},D=e("h2",null,"Change",-1),N=e("h5",null,"Icon",-1),O={class:""},j=["src"],R={key:1},z={class:"mt-2"},J=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",height:"20",fill:"white"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1),P=e("h5",{class:"mt-3"},"Banner",-1),F=["src"],G={key:1},K={class:"mt-2"},W=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",height:"20",fill:"white"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1),X=e("h5",{class:"mt-3"},"Mastery Requirements",-1),Y=e("h3",{class:"mt-3"},"Comment",-1),Z={class:"col-sm"},ee=e("h2",null,"Original",-1),te=e("h5",null,"Icon",-1),se={class:""},ie=["src"],ne={key:1},oe=e("h5",{class:"mt-3"},"Banner",-1),re=["src"],le={key:1},ce=e("h5",{class:"mt-3"},"Mastery Requirements",-1),de=["innerHTML"];function ue(t,i,n,_,s,a){return r(),l("div",Q,[C,x,s.changeBanner?(r(),l("div",I,[q,e("div",M,[T,e("img",{src:s.skill.banner_image,class:"banner-image"},null,8,H)]),B,e("div",L,[S,e("img",{src:s.skill.banner_image,class:"banner-image"},null,8,V)])])):h("",!0),e("div",U,[e("div",A,[D,N,e("div",O,[s.skillEdit.icon_image?(r(),l("img",{key:0,src:s.skillEdit.icon_image,class:"icon-image border border-dark rounded"},null,8,j)):(r(),l("p",R,"No icon")),e("p",z,[e("button",{class:"btn red-btn",onClick:i[0]||(i[0]=o=>a.dismissIcon())},[g(" Remove    "),J])])]),P,e("div",null,[s.skillEdit.banner_image?(r(),l("img",{key:0,src:s.skillEdit.banner_image,class:"banner-image border border-dark rounded"},null,8,F)):(r(),l("p",G,"No banner")),e("p",K,[e("button",{class:"btn red-btn",onClick:i[1]||(i[1]=o=>a.dismissBanner())},[g(" Remove    "),W])])]),X,c(e("textarea",{class:"form-control","onUpdate:modelValue":i[2]||(i[2]=o=>s.skillEdit.mastery_requirements=o),id:"summernote",rows:"3"},null,512),[[d,s.skillEdit.mastery_requirements]]),Y,e("p",null,u(s.comment),1)]),e("div",Z,[ee,te,e("div",se,[s.skill.icon_image?(r(),l("img",{key:0,src:s.skill.icon_image,class:"border border-dark rounded icon-image"},null,8,ie)):(r(),l("p",ne,"No icon"))]),oe,e("div",null,[s.skill.banner_image?(r(),l("img",{key:0,src:s.skill.banner_image,class:"border border-dark rounded banner-image"},null,8,re)):(r(),l("p",le,"No banner"))]),ce,e("div",{innerHTML:s.skill.mastery_requirements},null,8,de)])])])}const ae=m(v,[["render",ue]]);const he={setup(){},data(){return{mcQuestionId:this.$route.params.contentId,userId:this.$route.params.userId,mcQuestion:{},mcQuestionEdit:{},comment:"",isEditMode:!1}},async created(){await this.getMCQuestionEdit(),await this.getMCQuestion();const t=document.getElementsByTagName("textarea");for(let n=0;n<t.length;n++)t[n].setAttribute("style","height:"+t[n].scrollHeight+"px;overflow-y:hidden;"),t[n].addEventListener("input",i,!1);function i(){this.style.height="auto",this.style.height=this.scrollHeight+"px"}},methods:{async getMCQuestionEdit(){await fetch("/questions/mc/submitted-for-review/"+this.mcQuestionId+"/"+this.userId).then(function(t){return t.json()}).then(t=>{console.log(t),this.comment=t.comment,this.mcQuestionEdit=t})},async getMCQuestion(){await fetch("/questions/mc/show/"+this.mcQuestionId).then(function(t){return t.json()}).then(t=>{console.log(t),this.mcQuestion=t})},dismissEdit(){if(confirm("Delete this edit?")){const t=fetch("/questions/mc/submitted-for-review/"+this.mcQuestionId+"/"+this.userId,{method:"DELETE"});t.error&&console.log(t.error),this.$router.back()}},edit(){this.isEditMode=!0},saveEdit(){const t={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.mcQuestionEdit.name,question:this.mcQuestionEdit.question,correct_answer:this.mcQuestionEdit.correct_answer,incorrect_answer_1:this.mcQuestionEdit.incorrect_answer_1,incorrect_answer_2:this.mcQuestionEdit.incorrect_answer_2,incorrect_answer_3:this.mcQuestionEdit.incorrect_answer_3,incorrect_answer_4:this.mcQuestionEdit.incorrect_answer_4,correct_answer:this.mcQuestionEdit.correct_answer,explanation:this.mcQuestionEdit.explanation,edit:this.isEditMode})};var i="/questions/mc/"+this.mcQuestionEdit.mc_question_id+"/approve-edits";fetch(i,t).then(()=>{this.$router.back()});const n=fetch("/questions/mc/submitted-for-review/"+this.mcQuestionId+"/"+this.userId,{method:"DELETE"});n.error&&console.log(n.error)}}},me={class:"container mt-4 mb-4"},_e=e("h1",{class:"page-title"},"Comparison",-1),pe={class:"row"},Ee={class:"col"},ye=e("h2",null,"Change",-1),ge=e("h5",null,"Question",-1),fe=["readonly"],we=e("h5",null,"Correct Answer",-1),ke=["readonly"],be=e("h5",null,"Correct Incorrect Answer 1",-1),ve=["readonly"],Qe=e("h5",null,"Correct Incorrect Answer 2",-1),Ce=["readonly"],xe=e("h5",null,"Correct Incorrect Answer 3",-1),Ie=["readonly"],qe=e("h5",null,"Correct Incorrect Answer 4",-1),Me=["readonly"],$e=e("h5",null,"Explanation",-1),Te=["readonly"],He=e("h3",null,"Comment",-1),Be=["readonly"],Le={class:"col"},Se=e("h2",null,"Original",-1),Ve=e("h5",null,"Question",-1),Ue=e("h5",null,"Correct Answer",-1),Ae=e("h5",null,"Correct Incorrect Answer 1",-1),De=e("h5",null,"Correct Incorrect Answer 2",-1),Ne=e("h5",null,"Correct Incorrect Answer 3",-1),Oe=e("h5",null,"Correct Incorrect Answer 4",-1),je=e("h5",null,"Explanation",-1);function Re(t,i,n,_,s,a){return r(),l("div",me,[_e,e("div",pe,[e("div",Ee,[ye,ge,c(e("textarea",{class:"form-control mb-2",type:"text","onUpdate:modelValue":i[0]||(i[0]=o=>s.mcQuestionEdit.question=o),readonly:!s.isEditMode},null,8,fe),[[d,s.mcQuestionEdit.question]]),we,c(e("textarea",{class:"form-control mb-2",type:"text","onUpdate:modelValue":i[1]||(i[1]=o=>s.mcQuestionEdit.correct_answer=o),readonly:!s.isEditMode},null,8,ke),[[d,s.mcQuestionEdit.correct_answer]]),be,c(e("textarea",{class:"form-control mb-2",type:"text","onUpdate:modelValue":i[2]||(i[2]=o=>s.mcQuestionEdit.incorrect_answer_1=o),readonly:!s.isEditMode},null,8,ve),[[d,s.mcQuestionEdit.incorrect_answer_1]]),Qe,c(e("textarea",{class:"form-control mb-2",type:"text","onUpdate:modelValue":i[3]||(i[3]=o=>s.mcQuestionEdit.incorrect_answer_2=o),readonly:!s.isEditMode},null,8,Ce),[[d,s.mcQuestionEdit.incorrect_answer_2]]),xe,c(e("textarea",{class:"form-control mb-2",type:"text","onUpdate:modelValue":i[4]||(i[4]=o=>s.mcQuestionEdit.incorrect_answer_3=o),readonly:!s.isEditMode},null,8,Ie),[[d,s.mcQuestionEdit.incorrect_answer_3]]),qe,c(e("textarea",{class:"form-control mb-2",type:"text","onUpdate:modelValue":i[5]||(i[5]=o=>s.mcQuestionEdit.incorrect_answer_4=o),readonly:!s.isEditMode},null,8,Me),[[d,s.mcQuestionEdit.incorrect_answer_4]]),$e,c(e("textarea",{class:"form-control mb-2",type:"text","onUpdate:modelValue":i[6]||(i[6]=o=>s.mcQuestionEdit.explanation=o),readonly:!s.isEditMode},null,8,Te),[[d,s.mcQuestionEdit.explanation]]),He,c(e("textarea",{class:"form-control mb-2",type:"text","onUpdate:modelValue":i[7]||(i[7]=o=>s.mcQuestionEdit.comment=o),readonly:!s.isEditMode},null,8,Be),[[d,s.mcQuestionEdit.comment]])]),e("div",Le,[Se,Ve,e("p",null,u(s.mcQuestion.question),1),Ue,e("p",null,u(s.mcQuestion.correct_answer),1),Ae,e("p",null,u(s.mcQuestion.incorrect_answer_1),1),De,e("p",null,u(s.mcQuestion.incorrect_answer_2),1),Ne,e("p",null,u(s.mcQuestion.incorrect_answer_3),1),Oe,e("p",null,u(s.mcQuestion.incorrect_answer_4),1),je,e("p",null,u(s.mcQuestion.explanation),1)])])])}const ze=m(he,[["render",Re]]);const Je={setup(){},data(){return{essayQuestionId:this.$route.params.contentId,userId:this.$route.params.userId,essayQuestion:{},essayQuestionEdit:{},comment:"",isEditMode:!1}},async created(){await this.getEssayQuestionEdit(),await this.getEssayQuestion();const t=document.getElementsByTagName("textarea");for(let n=0;n<t.length;n++)t[n].setAttribute("style","height:"+t[n].scrollHeight+"px;overflow-y:hidden;"),t[n].addEventListener("input",i,!1);function i(){this.style.height="auto",this.style.height=this.scrollHeight+"px"}},methods:{async getEssayQuestionEdit(){await fetch("/questions/essay/submitted-for-review/"+this.essayQuestionId+"/"+this.userId).then(function(t){return t.json()}).then(t=>{console.log(t),this.essayQuestionEdit=t,this.comment=t.comment})},async getEssayQuestion(){await fetch("/questions/essay/show/"+this.essayQuestionId).then(function(t){return t.json()}).then(t=>{console.log(t),this.essayQuestion=t})},dismissEdit(){if(confirm("Delete this edit?")){const t=fetch("/questions/essay/submitted-for-review/"+this.essayQuestionId+"/"+this.userId,{method:"DELETE"});t.error&&console.log(t.error),this.$router.back()}},editMode(){this.isEditMode=!0},saveEdit(){const t={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.essayQuestionEdit.name,question:this.essayQuestionEdit.question,edit:this.isEditMode})};var i="/questions/essay/"+this.essayQuestionEdit.essay_question_id+"/approve-edits";fetch(i,t).then(()=>{this.$router.back()});const n=fetch("/questions/essay/submitted-for-review/"+this.essayQuestionEdit.essay_question_id+"/"+this.userId,{method:"DELETE"});n.error&&console.log(n.error)}}},Pe={class:"container mt-4 mb-4"},Fe=e("h1",{class:"page-title"},"Comparison",-1),Ge={class:"row"},Ke={class:"col"},We=e("h2",null,"Change",-1),Xe=e("h5",null,"Question",-1),Ye=["readonly"],Ze=e("h3",null,"Comment",-1),et={class:"col"},tt=e("h2",null,"Original",-1),st=e("h5",null,"Question",-1);function it(t,i,n,_,s,a){return r(),l("div",Pe,[Fe,e("div",Ge,[e("div",Ke,[We,Xe,c(e("textarea",{readonly:!s.isEditMode,id:"content",class:"form-control","onUpdate:modelValue":i[0]||(i[0]=o=>s.essayQuestionEdit.question=o)},`\r
                `,8,Ye),[[d,s.essayQuestionEdit.question]]),Ze,e("p",null,u(s.comment),1)]),e("div",et,[tt,st,e("p",null,u(s.essayQuestion.question),1)])])])}const nt=m(Je,[["render",it]]);const ot={setup(){},data(){return{type:null}},components:{SkillEditComparison:ae,MCQuestionEditComparison:ze,EssayQuestionEditComparison:nt},async created(){this.type=this.$route.query.type},methods:{}},rt=e("div",{id:"banner"},[e("img",{src:b,class:"img-fluid"})],-1),lt={class:"container-fluid"},ct={class:"d-flex justify-content-end gap-3"},dt=e("p",null," ",-1);function ut(t,i,n,_,s,a){const o=p("SkillEditComparison"),f=p("MCQuestionEditComparison"),w=p("EssayQuestionEditComparison");return r(),l(k,null,[rt,e("div",lt,[s.type=="skill"?(r(),E(o,{key:0,ref:"child"},null,512)):h("",!0),s.type=="mcquestion"?(r(),E(f,{key:1,ref:"child"},null,512)):h("",!0),s.type=="essayquestion"?(r(),E(w,{key:2,ref:"child"},null,512)):h("",!0),e("div",ct,[e("button",{class:"btn red-btn",onClick:i[0]||(i[0]=y=>t.$refs.child.dismissEdit())}," Dismiss Edit "),e("button",{class:"btn purple-btn",onClick:i[1]||(i[1]=y=>t.$refs.child.edit())}," Edit "),e("button",{class:"btn green-btn",onClick:i[2]||(i[2]=y=>t.$refs.child.saveEdit())}," Save Edit ")]),dt])],64)}const mt=m(ot,[["render",ut]]);export{mt as default};
