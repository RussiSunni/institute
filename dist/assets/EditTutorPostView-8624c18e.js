import{_ as i,o as u,c as d,b as s,w as c,m as a}from"./main-574588f4.js";const l={data(){return{tutorPostId:this.$route.params.tutorPostId,tutorPost:{}}},created(){this.getTutorPost()},methods:{getTutorPost(){fetch("/tutor-posts/show/"+this.tutorPostId).then(function(o){return o.json()}).then(o=>this.tutorPost=o)},Submit(){const o={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({description:this.tutorPost.description})};var t="/tutor-posts/edit/"+this.tutorPostId;fetch(t,o).then(()=>{this.$router.back()})}}},p={class:"container mt-3"},_=s("h2",null,"Edit Tutor Post",-1),h={class:"row"},m={class:"mb-3"},P={class:"mb-3 d-flex justify-content-end gap-4"};function b(o,t,f,v,r,n){return u(),d("div",p,[_,s("div",h,[s("div",m,[c(s("textarea",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.tutorPost.description=e),rows:"3",class:"form-control"},`\r
                `,512),[[a,r.tutorPost.description]])]),s("div",P,[s("a",{class:"btn red-btn",onClick:t[1]||(t[1]=e=>o.$router.go(-1))}," Cancel "),s("button",{onClick:t[2]||(t[2]=e=>n.Submit()),class:"btn purple-btn"},"Submit")])])])}const w=i(l,[["render",b]]);export{w as default};
