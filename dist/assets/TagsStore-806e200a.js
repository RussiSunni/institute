import{j as e}from"./main-a228213a.js";const o=e("tags",{state:()=>({tagsList:[]}),actions:{async getTagsList(){const t=await(await fetch("/tags/list")).json();this.tagsList=t},async deleteTag(s){console.log(s);const t=fetch("/tags/"+s,{method:"DELETE"});t.error&&console.log(t.error),this.getTagsList()}}});export{o as u};
