import{o,j as m,y as d,f as h,T as D,g as A,w as c,z as k,q as u,A as f,n as y,h as S,t as b,F as V,r as w,_,c as g,a as l,l as O,B as L,C as E}from"./main-2af66977.js";import{u as F}from"./SkillsStore-612b13f5.js";function B(e){return e===0?!1:Array.isArray(e)&&e.length===0?!0:!e}function R(e){return(...t)=>!e(...t)}function H(e,t){return e===void 0&&(e="undefined"),e===null&&(e="null"),e===!1&&(e="false"),e.toString().toLowerCase().indexOf(t.trim())!==-1}function P(e,t,s,n){return t?e.filter(r=>H(n(r,s),t)).sort((r,a)=>n(r,s).length-n(a,s).length):e}function G(e){return e.filter(t=>!t.$isLabel)}function T(e,t){return s=>s.reduce((n,r)=>r[e]&&r[e].length?(n.push({$groupLabel:r[t],$isLabel:!0}),n.concat(r[e])):n,[])}function N(e,t,s,n,r){return a=>a.map(i=>{if(!i[s])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];const p=P(i[s],e,t,r);return p.length?{[n]:i[n],[s]:p}:[]})}const M=(...e)=>t=>e.reduce((s,n)=>n(s),t);var K={data(){return{search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default(e,t){return B(e)?"":t?e[t]:e}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default(){return[]}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1},preventAutofocus:{type:Boolean,default:!1}},mounted(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0])},computed:{internalValue(){return this.modelValue||this.modelValue===0?Array.isArray(this.modelValue)?this.modelValue:[this.modelValue]:[]},filteredOptions(){const e=this.search||"",t=e.toLowerCase().trim();let s=this.options.concat();return this.internalSearch?s=this.groupValues?this.filterAndFlat(s,t,this.label):P(s,t,this.label,this.customLabel):s=this.groupValues?T(this.groupValues,this.groupLabel)(s):s,s=this.hideSelected?s.filter(R(this.isSelected)):s,this.taggable&&t.length&&!this.isExistingOption(t)&&(this.tagPosition==="bottom"?s.push({isTag:!0,label:e}):s.unshift({isTag:!0,label:e})),s.slice(0,this.optionsLimit)},valueKeys(){return this.trackBy?this.internalValue.map(e=>e[this.trackBy]):this.internalValue},optionKeys(){return(this.groupValues?this.flatAndStrip(this.options):this.options).map(t=>this.customLabel(t,this.label).toString().toLowerCase())},currentOptionLabel(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:{handler(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("update:modelValue",this.multiple?[]:null))},deep:!0},search(){this.$emit("search-change",this.search)}},emits:["open","search-change","close","select","update:modelValue","remove","tag"],methods:{getValue(){return this.multiple?this.internalValue:this.internalValue.length===0?null:this.internalValue[0]},filterAndFlat(e,t,s){return M(N(t,s,this.groupValues,this.groupLabel,this.customLabel),T(this.groupValues,this.groupLabel))(e)},flatAndStrip(e){return M(T(this.groupValues,this.groupLabel),G)(e)},updateSearch(e){this.search=e},isExistingOption(e){return this.options?this.optionKeys.indexOf(e)>-1:!1},isSelected(e){const t=this.trackBy?e[this.trackBy]:e;return this.valueKeys.indexOf(t)>-1},isOptionDisabled(e){return!!e.$isDisabled},getOptionLabel(e){if(B(e))return"";if(e.isTag)return e.label;if(e.$isLabel)return e.$groupLabel;const t=this.customLabel(e,this.label);return B(t)?"":t},select(e,t){if(e.$isLabel&&this.groupSelect){this.selectGroup(e);return}if(!(this.blockKeys.indexOf(t)!==-1||this.disabled||e.$isDisabled||e.$isLabel)&&!(this.max&&this.multiple&&this.internalValue.length===this.max)&&!(t==="Tab"&&!this.pointerDirty)){if(e.isTag)this.$emit("tag",e.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(e)){t!=="Tab"&&this.removeElement(e);return}this.multiple?this.$emit("update:modelValue",this.internalValue.concat([e])):this.$emit("update:modelValue",e),this.$emit("select",e,this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},selectGroup(e){const t=this.options.find(s=>s[this.groupLabel]===e.$groupLabel);if(t){if(this.wholeGroupSelected(t)){this.$emit("remove",t[this.groupValues],this.id);const s=this.internalValue.filter(n=>t[this.groupValues].indexOf(n)===-1);this.$emit("update:modelValue",s)}else{let s=t[this.groupValues].filter(n=>!(this.isOptionDisabled(n)||this.isSelected(n)));this.max&&s.splice(this.max-this.internalValue.length),this.$emit("select",s,this.id),this.$emit("update:modelValue",this.internalValue.concat(s))}this.closeOnSelect&&this.deactivate()}},wholeGroupSelected(e){return e[this.groupValues].every(t=>this.isSelected(t)||this.isOptionDisabled(t))},wholeGroupDisabled(e){return e[this.groupValues].every(this.isOptionDisabled)},removeElement(e,t=!0){if(this.disabled||e.$isDisabled)return;if(!this.allowEmpty&&this.internalValue.length<=1){this.deactivate();return}const s=typeof e=="object"?this.valueKeys.indexOf(e[this.trackBy]):this.valueKeys.indexOf(e);if(this.multiple){const n=this.internalValue.slice(0,s).concat(this.internalValue.slice(s+1));this.$emit("update:modelValue",n)}else this.$emit("update:modelValue",null);this.$emit("remove",e,this.id),this.closeOnSelect&&t&&this.deactivate()},removeLastElement(){this.blockKeys.indexOf("Delete")===-1&&this.search.length===0&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate(){this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&this.pointer===0&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.preventAutofocus||this.$nextTick(()=>this.$refs.search&&this.$refs.search.focus())):this.preventAutofocus||typeof this.$el<"u"&&this.$el.focus(),this.$emit("open",this.id))},deactivate(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search!==null&&typeof this.$refs.search<"u"&&this.$refs.search.blur():typeof this.$el<"u"&&this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle(){this.isOpen?this.deactivate():this.activate()},adjustPosition(){if(typeof window>"u")return;const e=this.$el.getBoundingClientRect().top,t=window.innerHeight-this.$el.getBoundingClientRect().bottom;t>this.maxHeight||t>e||this.openDirection==="below"||this.openDirection==="bottom"?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(t-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(e-40,this.maxHeight))}}},q={data(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition(){return this.pointer*this.optionHeight},visibleElements(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions(){this.pointerAdjust()},isOpen(){this.pointerDirty=!1},pointer(){this.$refs.search&&this.$refs.search.setAttribute("aria-activedescendant",this.id+"-"+this.pointer.toString())}},methods:{optionHighlight(e,t){return{"multiselect__option--highlight":e===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(t)}},groupHighlight(e,t){if(!this.groupSelect)return["multiselect__option--disabled",{"multiselect__option--group":t.$isLabel}];const s=this.options.find(n=>n[this.groupLabel]===t.$groupLabel);return s&&!this.wholeGroupDisabled(s)?["multiselect__option--group",{"multiselect__option--highlight":e===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(s)}]:"multiselect__option--disabled"},addPointerElement({key:e}="Enter"){this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],e),this.pointerReset()},pointerForward(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0},pointerBackward(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0},pointerReset(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()},pointerSet(e){this.pointer=e,this.pointerDirty=!0}}},C={name:"vue-multiselect",mixins:[K,q],compatConfig:{MODE:3,ATTR_ENUMERATED_COERCION:!1},props:{name:{type:String,default:""},modelValue:{type:null,default(){return[]}},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:e=>`and ${e} more`},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{hasOptionGroup(){return this.groupValues&&this.groupLabel&&this.groupSelect},isSingleLabelVisible(){return(this.singleValue||this.singleValue===0)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible(){return!this.internalValue.length&&(!this.searchable||!this.isOpen)},visibleValues(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue(){return this.internalValue[0]},deselectLabelText(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText(){return this.showLabels?this.selectLabel:""},selectGroupLabelText(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText(){return this.showLabels?this.selectedLabel:""},inputStyle(){return this.searchable||this.multiple&&this.modelValue&&this.modelValue.length?this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}:""},contentStyle(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove(){return this.openDirection==="above"||this.openDirection==="top"?!0:this.openDirection==="below"||this.openDirection==="bottom"?!1:this.preferredOpenDirection==="above"},showSearchInput(){return this.searchable&&(this.hasSingleSelectedSlot&&(this.visibleSingleValue||this.visibleSingleValue===0)?this.isOpen:!0)}}};const z={ref:"tags",class:"multiselect__tags"},I={class:"multiselect__tags-wrap"},U={class:"multiselect__spinner"},j={key:0},J={class:"multiselect__option"},Q={class:"multiselect__option"},W=S("No elements found. Consider changing the search query."),X={class:"multiselect__option"},Y=S("List is empty.");function Z(e,t,s,n,r,a){return o(),m("div",{tabindex:e.searchable?-1:s.tabindex,class:[{"multiselect--active":e.isOpen,"multiselect--disabled":s.disabled,"multiselect--above":a.isAbove,"multiselect--has-options-group":a.hasOptionGroup},"multiselect"],onFocus:t[14]||(t[14]=i=>e.activate()),onBlur:t[15]||(t[15]=i=>e.searchable?!1:e.deactivate()),onKeydown:[t[16]||(t[16]=f(u(i=>e.pointerForward(),["self","prevent"]),["down"])),t[17]||(t[17]=f(u(i=>e.pointerBackward(),["self","prevent"]),["up"]))],onKeypress:t[18]||(t[18]=f(u(i=>e.addPointerElement(i),["stop","self"]),["enter","tab"])),onKeyup:t[19]||(t[19]=f(i=>e.deactivate(),["esc"])),role:"combobox","aria-owns":"listbox-"+e.id},[d(e.$slots,"caret",{toggle:e.toggle},()=>[h("div",{onMousedown:t[1]||(t[1]=u(i=>e.toggle(),["prevent","stop"])),class:"multiselect__select"},null,32)]),d(e.$slots,"clear",{search:e.search}),h("div",z,[d(e.$slots,"selection",{search:e.search,remove:e.removeElement,values:a.visibleValues,isOpen:e.isOpen},()=>[c(h("div",I,[(o(!0),m(V,null,w(a.visibleValues,(i,p)=>d(e.$slots,"tag",{option:i,search:e.search,remove:e.removeElement},()=>[(o(),m("span",{class:"multiselect__tag",key:p},[h("span",{textContent:b(e.getOptionLabel(i))},null,8,["textContent"]),h("i",{tabindex:"1",onKeypress:f(u(v=>e.removeElement(i),["prevent"]),["enter"]),onMousedown:u(v=>e.removeElement(i),["prevent"]),class:"multiselect__tag-icon"},null,40,["onKeypress","onMousedown"])]))])),256))],512),[[k,a.visibleValues.length>0]]),e.internalValue&&e.internalValue.length>s.limit?d(e.$slots,"limit",{key:0},()=>[h("strong",{class:"multiselect__strong",textContent:b(s.limitText(e.internalValue.length-s.limit))},null,8,["textContent"])]):y("v-if",!0)]),h(D,{name:"multiselect__loading"},{default:A(()=>[d(e.$slots,"loading",{},()=>[c(h("div",U,null,512),[[k,s.loading]])])]),_:3}),e.searchable?(o(),m("input",{key:0,ref:"search",name:s.name,id:e.id,type:"text",autocomplete:"off",spellcheck:!1,placeholder:e.placeholder,style:a.inputStyle,value:e.search,disabled:s.disabled,tabindex:s.tabindex,onInput:t[2]||(t[2]=i=>e.updateSearch(i.target.value)),onFocus:t[3]||(t[3]=u(i=>e.activate(),["prevent"])),onBlur:t[4]||(t[4]=u(i=>e.deactivate(),["prevent"])),onKeyup:t[5]||(t[5]=f(i=>e.deactivate(),["esc"])),onKeydown:[t[6]||(t[6]=f(u(i=>e.pointerForward(),["prevent"]),["down"])),t[7]||(t[7]=f(u(i=>e.pointerBackward(),["prevent"]),["up"])),t[9]||(t[9]=f(u(i=>e.removeLastElement(),["stop"]),["delete"]))],onKeypress:t[8]||(t[8]=f(u(i=>e.addPointerElement(i),["prevent","stop","self"]),["enter"])),class:"multiselect__input","aria-controls":"listbox-"+e.id},null,44,["name","id","placeholder","value","disabled","tabindex","aria-controls"])):y("v-if",!0),a.isSingleLabelVisible?(o(),m("span",{key:1,class:"multiselect__single",onMousedown:t[10]||(t[10]=u((...i)=>e.toggle&&e.toggle(...i),["prevent"]))},[d(e.$slots,"singleLabel",{option:a.singleValue},()=>[S(b(e.currentOptionLabel),1)])],32)):y("v-if",!0),a.isPlaceholderVisible?(o(),m("span",{key:2,class:"multiselect__placeholder",onMousedown:t[11]||(t[11]=u((...i)=>e.toggle&&e.toggle(...i),["prevent"]))},[d(e.$slots,"placeholder",{},()=>[S(b(e.placeholder),1)])],32)):y("v-if",!0)],512),h(D,{name:"multiselect"},{default:A(()=>[c(h("div",{class:"multiselect__content-wrapper",onFocus:t[12]||(t[12]=(...i)=>e.activate&&e.activate(...i)),tabindex:"-1",onMousedown:t[13]||(t[13]=u(()=>{},["prevent"])),style:{maxHeight:e.optimizedHeight+"px"},ref:"list"},[h("ul",{class:"multiselect__content",style:a.contentStyle,role:"listbox",id:"listbox-"+e.id},[d(e.$slots,"beforeList"),e.multiple&&e.max===e.internalValue.length?(o(),m("li",j,[h("span",J,[d(e.$slots,"maxElements",{},()=>[S("Maximum of "+b(e.max)+" options selected. First remove a selected option to select another.",1)])])])):y("v-if",!0),!e.max||e.internalValue.length<e.max?(o(!0),m(V,{key:1},w(e.filteredOptions,(i,p)=>(o(),m("li",{class:"multiselect__element",key:p,id:e.id+"-"+p,role:i&&(i.$isLabel||i.$isDisabled)?null:"option"},[i&&(i.$isLabel||i.$isDisabled)?y("v-if",!0):(o(),m("span",{key:0,class:[e.optionHighlight(p,i),"multiselect__option"],onClick:u(v=>e.select(i),["stop"]),onMouseenter:u(v=>e.pointerSet(p),["self"]),"data-select":i&&i.isTag?e.tagPlaceholder:a.selectLabelText,"data-selected":a.selectedLabelText,"data-deselect":a.deselectLabelText},[d(e.$slots,"option",{option:i,search:e.search,index:p},()=>[h("span",null,b(e.getOptionLabel(i)),1)])],42,["onClick","onMouseenter","data-select","data-selected","data-deselect"])),i&&(i.$isLabel||i.$isDisabled)?(o(),m("span",{key:1,"data-select":e.groupSelect&&a.selectGroupLabelText,"data-deselect":e.groupSelect&&a.deselectGroupLabelText,class:[e.groupHighlight(p,i),"multiselect__option"],onMouseenter:u(v=>e.groupSelect&&e.pointerSet(p),["self"]),onMousedown:u(v=>e.selectGroup(i),["prevent"])},[d(e.$slots,"option",{option:i,search:e.search,index:p},()=>[h("span",null,b(e.getOptionLabel(i)),1)])],42,["data-select","data-deselect","onMouseenter","onMousedown"])):y("v-if",!0)],8,["id","role"]))),128)):y("v-if",!0),c(h("li",null,[h("span",Q,[d(e.$slots,"noResult",{search:e.search},()=>[W])])],512),[[k,s.showNoResults&&e.filteredOptions.length===0&&e.search&&!s.loading]]),c(h("li",null,[h("span",X,[d(e.$slots,"noOptions",{},()=>[Y])])],512),[[k,s.showNoOptions&&(e.options.length===0||a.hasOptionGroup===!0&&e.filteredOptions.length===0)&&!e.search&&!s.loading]]),d(e.$slots,"afterList")],12,["id"])],36),[[k,e.isOpen]])]),_:3})],42,["tabindex","aria-owns"])}C.render=Z;const x={setup(){return{skillsStore:F()}},components:{VueMultiselect:C},data(){return{skill:{name:"",parent:0,description:"",icon:"",image:"",image_attribution:"",mastery_requirements:"",first_ancestor:null,hierarchy_level:null,other_skill_requirements:[],type:"regular"},image:"",skills:[],isSubSkill:!1}},async created(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList(),this.skills.length==0&&await this.getParentSkills()},async mounted(){$("#summernote").summernote({placeholder:"",tabsize:2,height:120,toolbar:[["para",["ul","ol","paragraph"]]]})},methods:{getParentSkills(){this.skills=this.skillsStore.skillsList},onFileChange(e){var t=e.target.files||e.dataTransfer.files;t.length&&this.createImage(t[0])},createImage(e){new Image;var t=new FileReader,s=this;t.onload=n=>{s.image=n.target.result,this.image=n.target.result,this.skill.image=this.image},t.readAsDataURL(e)},removeImage:function(e){this.image="",this.skill.image=this.image},Submit(){var e="/skills/add";this.skill.mastery_requirements=$("#summernote").summernote("code");for(let t=0;t<this.skills.length;t++)this.skills[t].id==this.skill.parent&&(this.skill.first_ancestor=this.skills[t].first_ancestor,this.skill.hierarchy_level=this.skills[t].hierarchy_level+1);fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.skill.name,parent:this.skill.parent,description:this.skill.description,image:this.skill.image,image_attribution:this.skill.image_attribution,mastery_requirements:this.skill.mastery_requirements,first_ancestor:this.skill.first_ancestor,hierarchy_level:this.skill.hierarchy_level,type:this.skill.type})}).then(()=>{this.$router.push("/skills")})}}},ee={class:"container mt-3"},te=l("h1",null,"Add Skill",-1),ie={class:"row"},se={class:"col-sm-4"},le={class:"mb-3"},re=l("label",{for:"name",class:"form-label"},"Name",-1),ne=l("label",{class:"form-label"},"Node Type",-1),ae={class:"container row mb-3"},oe={class:"form-check col-4"},ue=l("label",{class:"form-check-label",for:"regularSkillRadio"}," Regular ",-1),he={class:"form-check col-4"},de=l("label",{class:"form-check-label",for:"superSkillRadio"}," Super ",-1),pe={class:"form-check col-4"},ce=l("label",{class:"form-check-label",for:"subSkillRadio"}," Sub ",-1),me={key:0,class:"mb-3"},fe=l("label",{class:"form-label"},"Parent",-1),ge=["value"],be={key:1,class:"mb-3"},ye=l("label",{class:"form-label"},"Main skill",-1),ve=["value"],ke={class:"mb-3"},Se=l("label",{for:"description",class:"form-label"},"Description",-1),Ve={class:"mb-3 row"},we=l("label",{for:"image",class:"form-label"},"Image",-1),Oe={key:0},Le=l("p",{style:{"font-size":"14px"}},[l("em",null,"Maximum file size 15mb")],-1),$e={key:1},Be=["src"],Te={class:"mb-3"},De=l("label",{for:"mastery_requirements",class:"form-label"},"Mastery Requirements",-1);function Ae(e,t,s,n,r,a){return o(),g("div",ee,[te,l("div",ie,[l("div",se,[l("div",le,[re,c(l("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>r.skill.name=i),class:"form-control",type:"text",placeholder:"name"},null,512),[[O,r.skill.name]])]),ne,l("div",ae,[l("div",oe,[c(l("input",{class:"form-check-input",type:"radio",name:"nodeType",id:"regularSkillRadio",value:"regular","onUpdate:modelValue":t[1]||(t[1]=i=>r.skill.type=i)},null,512),[[L,r.skill.type]]),ue]),l("div",he,[c(l("input",{class:"form-check-input",type:"radio",name:"nodeType",id:"superSkillRadio",value:"super","onUpdate:modelValue":t[2]||(t[2]=i=>r.skill.type=i)},null,512),[[L,r.skill.type]]),de]),l("div",pe,[c(l("input",{class:"form-check-input",type:"radio",name:"nodeType",id:"subSkillRadio",value:"sub","onUpdate:modelValue":t[3]||(t[3]=i=>r.skill.type=i)},null,512),[[L,r.skill.type]]),ce])]),r.skill.type!="sub"?(o(),g("div",me,[fe,c(l("select",{class:"form-select","onUpdate:modelValue":t[4]||(t[4]=i=>r.skill.parent=i)},[(o(!0),g(V,null,w(r.skills,i=>(o(),g("option",{value:i.id},b(i.name),9,ge))),256))],512),[[E,r.skill.parent]])])):(o(),g("div",be,[ye,c(l("select",{class:"form-select","onUpdate:modelValue":t[5]||(t[5]=i=>r.skill.parent=i)},[(o(!0),g(V,null,w(r.skills,i=>(o(),g("option",{value:i.id},b(i.name),9,ve))),256))],512),[[E,r.skill.parent]])])),l("div",ke,[Se,c(l("textarea",{"onUpdate:modelValue":t[6]||(t[6]=i=>r.skill.description=i),class:"form-control",placeholder:"description",rows:"3"},null,512),[[O,r.skill.description]])]),l("div",Ve,[we,r.image?(o(),g("div",$e,[l("p",null,[l("img",{src:r.image,height:"200",style:{"background-color":"lightgrey"}},null,8,Be)]),l("p",null,[l("button",{class:"btn btn-warning",onClick:t[8]||(t[8]=(...i)=>a.removeImage&&a.removeImage(...i))},"Remove image")])])):(o(),g("div",Oe,[l("input",{class:"form-control",type:"file",accept:"image/*",onChange:t[7]||(t[7]=(...i)=>a.onFileChange&&a.onFileChange(...i))},null,32),Le]))]),l("div",Te,[De,c(l("textarea",{"onUpdate:modelValue":t[9]||(t[9]=i=>r.skill.mastery_requirements=i),class:"form-control",id:"summernote",rows:"3"},null,512),[[O,r.skill.mastery_requirements]])]),l("button",{class:"btn btn-dark",onClick:t[10]||(t[10]=i=>a.Submit())},"Submit")])])])}const Ee=_(x,[["render",Ae]]),Ce={__name:"AddSkillView",setup(e){return(t,s)=>(o(),m(Ee))}};export{Ce as default};
