import{L as a}from"./main-574588f4.js";const l=a("userSkills",{state:()=>({unnestedList:[]}),actions:{async getUnnestedList(s){const e=await fetch("/user-skills/unnested-list/"+s);this.unnestedList=await e.json()},async MakeMastered(s,e){const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({skill:e})};let i="/user-skills/make-mastered/"+s;await fetch(i,t)},async MakeAccessible(s,e){var t="/user-skills/accessible/"+s+"/"+e;fetch(t),await this.getUnnestedList(s)}}});export{l as u};
