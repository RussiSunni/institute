import{u as i}from"./TagsStore-8cae508c.js";import{_ as p,r as u,o as s,c as o,b as t,d as h,i as C,x as g,F as c,s as L,t as f,p as m,e as v,h as b}from"./main-79843910.js";const w={setup(){const e=i();return e.getTagsList(),{tagsStore:e}},data(){return{}},computed:{},methods:{}},a=e=>(m("data-v-3f44df14"),e=e(),v(),e),x={class:"topnav"},k=a(()=>t("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M6.34811 20.0423L6.34811 13.6494L-0.0358702 13.6583C-0.320945 13.6579 -0.594203 13.5444 -0.795782 13.3428C-0.997361 13.1412 -1.11082 12.868 -1.11132 12.5829L-1.11729 7.41477C-1.1168 7.1297 -1.00334 6.85644 -0.801757 6.65486C-0.600179 6.45328 -0.326921 6.33982 -0.0418461 6.33933L6.3481 6.34231L6.3481 -0.0506238C6.34659 -0.193451 6.3736 -0.335145 6.42756 -0.467396C6.48152 -0.599646 6.56134 -0.719794 6.66234 -0.820794C6.76334 -0.921794 6.88349 -1.00161 7.01574 -1.05557C7.14799 -1.10953 7.28969 -1.13655 7.43251 -1.13503L12.5827 -1.12308C12.8678 -1.12259 13.141 -1.00913 13.3426 -0.807549C13.5442 -0.60597 13.6577 -0.332713 13.6582 -0.047637L13.6552 6.34231L20.0481 6.34231C20.3325 6.34248 20.6052 6.45552 20.8063 6.65661C21.0074 6.8577 21.1204 7.13039 21.1206 7.41477L21.1325 12.565C21.1324 12.8494 21.0193 13.122 20.8182 13.3231C20.6171 13.5242 20.3444 13.6373 20.0601 13.6374L13.6552 13.6494L13.6641 20.0334C13.6636 20.3184 13.5502 20.5917 13.3486 20.7933C13.147 20.9948 12.8738 21.1083 12.5887 21.1088L7.43252 21.1267C7.28969 21.1282 7.148 21.1012 7.01575 21.0473C6.88349 20.9933 6.76335 20.9135 6.66235 20.8125C6.56135 20.7115 6.48153 20.5913 6.42757 20.4591C6.37361 20.3268 6.34659 20.1851 6.34811 20.0423Z",fill:"white"})],-1)),S={class:"container mt-3"},T=a(()=>t("h1",null,"Filters List",-1)),B={class:"table_div"},y={class:"skilltree-table table-bordered"},I=a(()=>t("tr",null,[t("th",null,"name"),t("th")],-1)),V=["onClick"];function $(e,l,_,n,N,D){const d=u("router-link");return s(),o(c,null,[t("div",x,[h(d,{class:"btn purple-btn",to:"/tags/add"},{default:C(()=>[g("Add  "),k]),_:1})]),t("div",S,[T,t("div",B,[t("table",y,[I,(s(!0),o(c,null,L(n.tagsStore.tagsList,r=>(s(),o("tr",null,[t("td",null,f(r.name),1),t("td",null,[t("button",{type:"button",onClick:A=>n.tagsStore.tagCheck(r.id),class:"btn btn-danger delete-btn"}," Delete ",8,V)])]))),256))])])])],64)}const F=p(w,[["render",$],["__scopeId","data-v-3f44df14"]]),Z={__name:"TagsView",setup(e){return(l,_)=>(s(),b(F))}};export{Z as default};
