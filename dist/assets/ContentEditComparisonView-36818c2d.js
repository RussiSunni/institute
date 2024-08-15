import{_ as a,o as r,c as l,b as t,x as f,w as c,q as d,t as u,r as _,h as p,a as E}from"./main-db8069f7.js";const Q={setup(){},data(){return{skillId:this.$route.params.contentId,userId:this.$route.params.userId,skill:{},skillEdit:{},comment:"",isEditMode:!1}},async created(){await this.getSkillEdit(),await this.getSkill(),$("#summernote").summernote("code",this.skillEdit.mastery_requirements),$("#summernote").next().find(".note-editable").attr("contenteditable",!1)},methods:{async getSkillEdit(){await fetch("/skills/submitted-for-review/"+this.skillId+"/"+this.userId).then(function(e){return e.json()}).then(e=>{this.skillEdit=e,this.comment=e.comment})},async getSkill(){await fetch("/skills/show/"+this.skillId).then(function(e){return e.json()}).then(e=>{this.skill=e})},dismissEdit(){if(confirm("Delete this edit?")){const e=fetch("/skills/submitted-for-review/"+this.skillId+"/"+this.userId,{method:"DELETE"});e.error&&console.log(e.error),this.$router.back()}},dismissIcon(){confirm("Revert the icon?")&&(this.skillEdit.icon_image=this.skill.icon_image)},dismissBanner(){confirm("Revert the banner?")&&(this.skillEdit.banner_image=this.skill.banner_image)},edit(){$("#summernote").next().find(".note-editable").attr("contenteditable",!0),this.isEditMode=!0},saveEdit(){this.skillEdit.mastery_requirements=$("#summernote").summernote("code");const e={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({mastery_requirements:this.skillEdit.mastery_requirements,icon_image:this.skillEdit.icon_image,banner_image:this.skillEdit.banner_image,comment:this.comment,edit:this.isEditMode})};var i="/skills/"+this.skillEdit.skill_id+"/edit-for-review/save";fetch(i,e).then(()=>{this.$router.back()});const o=fetch("/skills/submitted-for-review/"+this.skillId+"/"+this.userId,{method:"DELETE"});o.error&&console.log(o.error)}}},k={class:"container mt-4 mb-4"},b=t("h1",{class:"page-title"},"Comparison",-1),v={class:"row"},C={class:"col-sm"},x=t("h2",null,"Change",-1),I=t("h5",null,"Icon",-1),q={class:""},M=["src"],H={key:1},T={class:"mt-2"},L=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",height:"20",fill:"white"},[t("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1),S=t("h5",{class:"mt-3"},"Banner",-1),V=["src"],U={key:1},A={class:"mt-2"},B=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",height:"20",fill:"white"},[t("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1),D=t("h5",{class:"mt-3"},"Mastery Requirements",-1),N=t("h3",{class:"mt-3"},"Comment",-1),O={class:"col-sm"},j=t("h2",null,"Original",-1),R=t("h5",null,"Icon",-1),z={class:""},J=["src"],P={key:1},F=t("h5",{class:"mt-3"},"Banner",-1),G=["src"],K={key:1},W=t("h5",{class:"mt-3"},"Mastery Requirements",-1),X=["innerHTML"];function Y(e,i,o,h,s,m){return r(),l("div",k,[b,t("div",v,[t("div",C,[x,I,t("div",q,[s.skillEdit.icon_image?(r(),l("img",{key:0,src:s.skillEdit.icon_image,class:"icon-image border border-dark rounded"},null,8,M)):(r(),l("p",H,"No icon")),t("p",T,[t("button",{class:"btn red-btn",onClick:i[0]||(i[0]=n=>m.dismissIcon())},[f(" Remove    "),L])])]),S,t("div",null,[s.skillEdit.banner_image?(r(),l("img",{key:0,src:s.skillEdit.banner_image,class:"banner-image border border-dark rounded"},null,8,V)):(r(),l("p",U,"No banner")),t("p",A,[t("button",{class:"btn red-btn",onClick:i[1]||(i[1]=n=>m.dismissBanner())},[f(" Remove    "),B])])]),D,c(t("textarea",{class:"form-control","onUpdate:modelValue":i[2]||(i[2]=n=>s.skillEdit.mastery_requirements=n),id:"summernote",rows:"3"},null,512),[[d,s.skillEdit.mastery_requirements]]),N,t("p",null,u(s.comment),1)]),t("div",O,[j,R,t("div",z,[s.skill.icon_image?(r(),l("img",{key:0,src:s.skill.icon_image,class:"border border-dark rounded icon-image"},null,8,J)):(r(),l("p",P,"No icon"))]),F,t("div",null,[s.skill.banner_image?(r(),l("img",{key:0,src:s.skill.banner_image,class:"border border-dark rounded banner-image"},null,8,G)):(r(),l("p",K,"No banner"))]),W,t("div",{innerHTML:s.skill.mastery_requirements},null,8,X)])])])}const Z=a(Q,[["render",Y]]);const tt={setup(){},data(){return{mcQuestionId:this.$route.params.contentId,userId:this.$route.params.userId,mcQuestion:{},mcQuestionEdit:{},comment:"",isEditMode:!1}},async created(){await this.getMCQuestionEdit(),await this.getMCQuestion();const e=document.getElementsByTagName("textarea");for(let o=0;o<e.length;o++)e[o].setAttribute("style","height:"+e[o].scrollHeight+"px;overflow-y:hidden;"),e[o].addEventListener("input",i,!1);function i(){this.style.height="auto",this.style.height=this.scrollHeight+"px"}},methods:{async getMCQuestionEdit(){await fetch("/questions/mc/submitted-for-review/"+this.mcQuestionId+"/"+this.userId).then(function(e){return e.json()}).then(e=>{console.log(e),this.comment=e.comment,this.mcQuestionEdit=e})},async getMCQuestion(){await fetch("/questions/mc/show/"+this.mcQuestionId).then(function(e){return e.json()}).then(e=>{console.log(e),this.mcQuestion=e})},dismissEdit(){if(confirm("Delete this edit?")){const e=fetch("/questions/mc/submitted-for-review/"+this.mcQuestionId+"/"+this.userId,{method:"DELETE"});e.error&&console.log(e.error),this.$router.back()}},edit(){this.isEditMode=!0},saveEdit(){const e={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.mcQuestionEdit.name,question:this.mcQuestionEdit.question,correct_answer:this.mcQuestionEdit.correct_answer,incorrect_answer_1:this.mcQuestionEdit.incorrect_answer_1,incorrect_answer_2:this.mcQuestionEdit.incorrect_answer_2,incorrect_answer_3:this.mcQuestionEdit.incorrect_answer_3,incorrect_answer_4:this.mcQuestionEdit.incorrect_answer_4,correct_answer:this.mcQuestionEdit.correct_answer,explanation:this.mcQuestionEdit.explanation,edit:this.isEditMode})};var i="/questions/mc/"+this.mcQuestionEdit.mc_question_id+"/approve-edits";fetch(i,e).then(()=>{this.$router.back()});const o=fetch("/questions/mc/submitted-for-review/"+this.mcQuestionId+"/"+this.userId,{method:"DELETE"});o.error&&console.log(o.error)}}},et={class:"container mt-4 mb-4"},st=t("h1",{class:"page-title"},"Comparison",-1),it={class:"row"},ot={class:"col"},nt=t("h2",null,"Change",-1),rt=t("h5",null,"Question",-1),lt=["readonly"],ct=t("h5",null,"Correct Answer",-1),dt=["readonly"],ut=t("h5",null,"Correct Incorrect Answer 1",-1),mt=["readonly"],at=t("h5",null,"Correct Incorrect Answer 2",-1),ht=["readonly"],_t=t("h5",null,"Correct Incorrect Answer 3",-1),pt=["readonly"],Et=t("h5",null,"Correct Incorrect Answer 4",-1),yt=["readonly"],ft=t("h5",null,"Explanation",-1),gt=["readonly"],wt=t("h3",null,"Comment",-1),Qt=["readonly"],kt={class:"col"},bt=t("h2",null,"Original",-1),vt=t("h5",null,"Question",-1),Ct=t("h5",null,"Correct Answer",-1),xt=t("h5",null,"Correct Incorrect Answer 1",-1),It=t("h5",null,"Correct Incorrect Answer 2",-1),qt=t("h5",null,"Correct Incorrect Answer 3",-1),$t=t("h5",null,"Correct Incorrect Answer 4",-1),Mt=t("h5",null,"Explanation",-1);function Ht(e,i,o,h,s,m){return r(),l("div",et,[st,t("div",it,[t("div",ot,[nt,rt,c(t("textarea",{class:"form-control mb-2",type:"text","onUpdate:modelValue":i[0]||(i[0]=n=>s.mcQuestionEdit.question=n),readonly:!s.isEditMode},null,8,lt),[[d,s.mcQuestionEdit.question]]),ct,c(t("textarea",{class:"form-control mb-2",type:"text","onUpdate:modelValue":i[1]||(i[1]=n=>s.mcQuestionEdit.correct_answer=n),readonly:!s.isEditMode},null,8,dt),[[d,s.mcQuestionEdit.correct_answer]]),ut,c(t("textarea",{class:"form-control mb-2",type:"text","onUpdate:modelValue":i[2]||(i[2]=n=>s.mcQuestionEdit.incorrect_answer_1=n),readonly:!s.isEditMode},null,8,mt),[[d,s.mcQuestionEdit.incorrect_answer_1]]),at,c(t("textarea",{class:"form-control mb-2",type:"text","onUpdate:modelValue":i[3]||(i[3]=n=>s.mcQuestionEdit.incorrect_answer_2=n),readonly:!s.isEditMode},null,8,ht),[[d,s.mcQuestionEdit.incorrect_answer_2]]),_t,c(t("textarea",{class:"form-control mb-2",type:"text","onUpdate:modelValue":i[4]||(i[4]=n=>s.mcQuestionEdit.incorrect_answer_3=n),readonly:!s.isEditMode},null,8,pt),[[d,s.mcQuestionEdit.incorrect_answer_3]]),Et,c(t("textarea",{class:"form-control mb-2",type:"text","onUpdate:modelValue":i[5]||(i[5]=n=>s.mcQuestionEdit.incorrect_answer_4=n),readonly:!s.isEditMode},null,8,yt),[[d,s.mcQuestionEdit.incorrect_answer_4]]),ft,c(t("textarea",{class:"form-control mb-2",type:"text","onUpdate:modelValue":i[6]||(i[6]=n=>s.mcQuestionEdit.explanation=n),readonly:!s.isEditMode},null,8,gt),[[d,s.mcQuestionEdit.explanation]]),wt,c(t("textarea",{class:"form-control mb-2",type:"text","onUpdate:modelValue":i[7]||(i[7]=n=>s.mcQuestionEdit.comment=n),readonly:!s.isEditMode},null,8,Qt),[[d,s.mcQuestionEdit.comment]])]),t("div",kt,[bt,vt,t("p",null,u(s.mcQuestion.question),1),Ct,t("p",null,u(s.mcQuestion.correct_answer),1),xt,t("p",null,u(s.mcQuestion.incorrect_answer_1),1),It,t("p",null,u(s.mcQuestion.incorrect_answer_2),1),qt,t("p",null,u(s.mcQuestion.incorrect_answer_3),1),$t,t("p",null,u(s.mcQuestion.incorrect_answer_4),1),Mt,t("p",null,u(s.mcQuestion.explanation),1)])])])}const Tt=a(tt,[["render",Ht]]);const Lt={setup(){},data(){return{essayQuestionId:this.$route.params.contentId,userId:this.$route.params.userId,essayQuestion:{},essayQuestionEdit:{},comment:"",isEditMode:!1}},async created(){await this.getEssayQuestionEdit(),await this.getEssayQuestion();const e=document.getElementsByTagName("textarea");for(let o=0;o<e.length;o++)e[o].setAttribute("style","height:"+e[o].scrollHeight+"px;overflow-y:hidden;"),e[o].addEventListener("input",i,!1);function i(){this.style.height="auto",this.style.height=this.scrollHeight+"px"}},methods:{async getEssayQuestionEdit(){await fetch("/questions/essay/submitted-for-review/"+this.essayQuestionId+"/"+this.userId).then(function(e){return e.json()}).then(e=>{console.log(e),this.essayQuestionEdit=e,this.comment=e.comment})},async getEssayQuestion(){await fetch("/questions/essay/show/"+this.essayQuestionId).then(function(e){return e.json()}).then(e=>{console.log(e),this.essayQuestion=e})},dismissEdit(){if(confirm("Delete this edit?")){const e=fetch("/questions/essay/submitted-for-review/"+this.essayQuestionId+"/"+this.userId,{method:"DELETE"});e.error&&console.log(e.error),this.$router.back()}},editMode(){this.isEditMode=!0},saveEdit(){const e={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.essayQuestionEdit.name,question:this.essayQuestionEdit.question,edit:this.isEditMode})};var i="/questions/essay/"+this.essayQuestionEdit.essay_question_id+"/approve-edits";fetch(i,e).then(()=>{this.$router.back()});const o=fetch("/questions/essay/submitted-for-review/"+this.essayQuestionEdit.essay_question_id+"/"+this.userId,{method:"DELETE"});o.error&&console.log(o.error)}}},St={class:"container mt-4 mb-4"},Vt=t("h1",{class:"page-title"},"Comparison",-1),Ut={class:"row"},At={class:"col"},Bt=t("h2",null,"Change",-1),Dt=t("h5",null,"Question",-1),Nt=["readonly"],Ot=t("h3",null,"Comment",-1),jt={class:"col"},Rt=t("h2",null,"Original",-1),zt=t("h5",null,"Question",-1);function Jt(e,i,o,h,s,m){return r(),l("div",St,[Vt,t("div",Ut,[t("div",At,[Bt,Dt,c(t("textarea",{readonly:!s.isEditMode,id:"content",class:"form-control","onUpdate:modelValue":i[0]||(i[0]=n=>s.essayQuestionEdit.question=n)},`\r
                `,8,Nt),[[d,s.essayQuestionEdit.question]]),Ot,t("p",null,u(s.comment),1)]),t("div",jt,[Rt,zt,t("p",null,u(s.essayQuestion.question),1)])])])}const Pt=a(Lt,[["render",Jt]]);const Ft={setup(){},data(){return{type:null}},components:{SkillEditComparison:Z,MCQuestionEditComparison:Tt,EssayQuestionEditComparison:Pt},async created(){this.type=this.$route.query.type},methods:{}},Gt={class:"container"},Kt={class:"d-flex justify-content-end gap-3"},Wt=t("p",null," ",-1);function Xt(e,i,o,h,s,m){const n=_("SkillEditComparison"),g=_("MCQuestionEditComparison"),w=_("EssayQuestionEditComparison");return r(),l("div",Gt,[s.type=="skill"?(r(),p(n,{key:0,ref:"child"},null,512)):E("",!0),s.type=="mcquestion"?(r(),p(g,{key:1,ref:"child"},null,512)):E("",!0),s.type=="essayquestion"?(r(),p(w,{key:2,ref:"child"},null,512)):E("",!0),t("div",Kt,[t("button",{class:"btn red-btn",onClick:i[0]||(i[0]=y=>e.$refs.child.dismissEdit())}," Dismiss Edit "),t("button",{class:"btn purple-btn",onClick:i[1]||(i[1]=y=>e.$refs.child.edit())}," Edit "),t("button",{class:"btn green-btn",onClick:i[2]||(i[2]=y=>e.$refs.child.saveEdit())}," Save Edit ")]),Wt])}const Zt=a(Ft,[["render",Xt]]);export{Zt as default};
