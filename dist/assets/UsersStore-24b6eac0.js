import{d as r}from"./main-000010e3.js";const u=r("users",{state:()=>({users:[]}),actions:{async getUsers(){const s=await(await fetch("/users/list")).json();this.users=s},async deleteUser(e){this.users=this.users.filter(t=>t.id!==e);const s=fetch("/users/"+e,{method:"DELETE"});s.error&&console.log(s.error)}}});export{u};
