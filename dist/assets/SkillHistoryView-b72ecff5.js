import{_,k,r as v,o,c as a,b as u,t as n,F as m,x as p,d as w,i as R,y as d,w as y,v as f}from"./main-d8374350.js";const S={setup(){return{usersStore:k()}},data(){return{skillId:this.$route.params.id,skill:{},skillRevisions:[],currentVersionNumber:null}},async created(){this.usersStore.users.length<1&&await this.usersStore.getUsers(),await this.getSkill()},async mounted(){},methods:{async getSkill(){const t=await fetch("/skills/show/"+this.skillId);this.skill=await t.json(),this.currentVersionNumber=this.skill.version_number,await this.getRevisions()},async getRevisions(){const t=await fetch("/skill-history/"+this.skillId+"/list");this.skillRevisions=await t.json();for(let s=0;s<this.skillRevisions.length;s++){var r=this.skillRevisions[s].edited_date.replace("T"," ");r=r.replace("Z"," ");let e=r.split(/[- :]/);var c=new Date(Date.UTC(e[0],e[1]-1,e[2],e[3],e[4],e[5])),h={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};this.skillRevisions[s].edited_date=c.toLocaleDateString("en-US",h);let l=this.usersStore.users.find(i=>i.id===this.skillRevisions[s].user_id);this.skillRevisions[s].username=l.username,this.skillRevisions[s].isCurrentRevision=!1,this.skillRevisions[s].version_number==this.currentVersionNumber&&(this.skillRevisions[s].isCurrentRevision=!0)}}}},g={class:"container"};function b(t,r,c,h,s,e){const l=v("router-link");return o(),a("div",g,[u("h1",null,n(s.skill.name)+": Revision history",1),u("ul",null,[(o(!0),a(m,null,p(s.skillRevisions,i=>(o(),a("li",null,[w(l,{to:"/skills/"+s.skillId+"/revision/"+i.version_number},{default:R(()=>[d(n(i.edited_date),1)]),_:2},1032,["to"]),d(", "+n(i.username)+", "+n(i.comment),1),y(u("span",null,", (current revision)",512),[[f,i.isCurrentRevision]])]))),256))])])}const x=_(S,[["render",b],["__scopeId","data-v-ec9b4a93"]]);export{x as default};
