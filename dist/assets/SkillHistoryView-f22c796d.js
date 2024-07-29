import{_,i as k,r as v,o as l,c as o,b as a,t as u,F as m,n as p,d as w,g as R,q as d,w as f,v as g}from"./main-60221089.js";const y={setup(){return{usersStore:k()}},data(){return{skillId:this.$route.params.id,skill:{},skillRevisions:[],currentVersionNumber:null}},async created(){await this.getSkill(),this.usersStore.users.length<1&&await this.usersStore.getUsers(),await this.getRevisions()},async mounted(){},methods:{async getSkill(){const t=await fetch("/skills/show/"+this.skillId);this.skill=await t.json(),this.currentVersionNumber=this.skill.version_number},async getRevisions(){const t=await fetch("/skill-history/"+this.skillId+"/list");this.skillRevisions=await t.json();for(let s=0;s<this.skillRevisions.length;s++){var r=this.skillRevisions[s].edited_date.replace("T"," ");r=r.replace("Z"," ");let e=r.split(/[- :]/);var c=new Date(Date.UTC(e[0],e[1]-1,e[2],e[3],e[4],e[5])),h={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};this.skillRevisions[s].edited_date=c.toLocaleDateString("en-US",h);let n=this.usersStore.users.find(i=>i.id===this.skillRevisions[s].user_id);this.skillRevisions[s].username=n.username,this.skillRevisions[s].isCurrentRevision=!1,this.skillRevisions[s].version_number==this.currentVersionNumber&&(this.skillRevisions[s].isCurrentRevision=!0)}}}},S={class:"container"};function b(t,r,c,h,s,e){const n=v("router-link");return l(),o("div",S,[a("h1",null,u(s.skill.name)+": Revision history",1),a("ul",null,[(l(!0),o(m,null,p(s.skillRevisions,i=>(l(),o("li",null,[w(n,{to:"/skills/"+s.skillId+"/revision/"+i.version_number},{default:R(()=>[d(u(i.edited_date),1)]),_:2},1032,["to"]),d(", "+u(i.username),1),f(a("span",null,", (current revision)",512),[[g,i.isCurrentRevision]])]))),256))])])}const x=_(y,[["render",b],["__scopeId","data-v-2d4cba99"]]);export{x as default};
