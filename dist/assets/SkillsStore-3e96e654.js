import{V as k}from"./main-f2534bd2.js";const L=k("skills",{state:()=>({nestedSkillsList:[],skillsList:[]}),actions:{async getNestedSkillsList(){const l=await(await fetch("/skills/nested-list")).json();this.nestedSkillsList=l},async getSkillsList(){const l=await(await fetch("/skills/list")).json();this.skillsList=l},async deleteSkill(t){var l=window.confirm("Delete skill?");if(l){let n=function(e,s){for(let i=0;i<s.skillsList.length;i++)if(s.skillsList[i].parent==e){let r=s.skillsList[i].id;s.nestedSkillsList=s.nestedSkillsList.filter(d=>d.childId!==r);const a=fetch("/skills/"+r,{method:"DELETE"});a.error&&console.log(a.error),n(r,s)}};n(t,this),this.nestedSkillsList=this.nestedSkillsList.filter(e=>e.id!==t);const o=fetch("/skills/"+t,{method:"DELETE"});o.error&&console.log(o.error),this.getNestedSkillsList()}}}});export{L as u};
