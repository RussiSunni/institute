import{_ as c,o as a,c as d,a as s,w as i,l as u,j as m}from"./main-000010e3.js";const _={data(){return{questionId:this.$route.params.id,question:{}}},created(){this.getQuestion()},methods:{getQuestion(){fetch("/questions/essay/show/"+this.questionId).then(function(e){return e.json()}).then(e=>this.question=e)},Submit(){const e={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.question.name,question:this.question.question})};var t="/questions/essay/"+this.questionId+"/edit";fetch(t,e).then(()=>{this.$router.back()})}}},h={class:"container mt-3"},p=s("h1",null,"Edit Question",-1),q={class:"mb-3"},b=s("label",{class:"form-label"},"Name",-1),f={class:"mb-3"},y=s("label",{class:"form-label"},"Question",-1),v={class:"mb-3"};function x(e,t,r,E,o,l){return a(),d("div",h,[p,s("div",q,[b,i(s("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>o.question.name=n),type:"text",class:"form-control"},null,512),[[u,o.question.name]])]),s("div",f,[y,i(s("input",{"onUpdate:modelValue":t[1]||(t[1]=n=>o.question.question=n),type:"text",class:"form-control"},null,512),[[u,o.question.question]])]),s("div",v,[s("button",{onClick:t[2]||(t[2]=n=>l.Submit()),class:"btn btn-dark"},"Submit")])])}const k=c(_,[["render",x]]),w={__name:"EditEssayQuestionView",setup(e){return(t,r)=>(a(),m(k))}};export{w as default};
