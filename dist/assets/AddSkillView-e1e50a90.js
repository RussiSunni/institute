import{_ as E}from"./general-banner-1c13aca4.js";import{o as r,l as b,H as g,e as c,I as p,w as f,v as L,F as w,k as S,t as v,J as k,b as m,T as B,m as T,s as y,_ as H,g as N,r as F,c as u,d as s,G as R,K as D,j as C,i as G,L as V,p as K,f as z,q as x}from"./main-29c46ad7.js";import{_ as U}from"./recurso-69-12793b41.js";function O(e){return e===0?!1:Array.isArray(e)&&e.length===0?!0:!e}function j(e){return(...t)=>!e(...t)}function q(e,t){return e===void 0&&(e="undefined"),e===null&&(e="null"),e===!1&&(e="false"),e.toString().toLowerCase().indexOf(t.trim())!==-1}function M(e,t,n,d){return t?e.filter(i=>q(d(i,n),t)).sort((i,a)=>d(i,n).length-d(a,n).length):e}function J(e){return e.filter(t=>!t.$isLabel)}function I(e,t){return n=>n.reduce((d,i)=>i[e]&&i[e].length?(d.push({$groupLabel:i[t],$isLabel:!0}),d.concat(i[e])):d,[])}function Z(e,t,n,d,i){return a=>a.map(o=>{if(!o[n])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];const l=M(o[n],e,t,i);return l.length?{[d]:o[d],[n]:l}:[]})}const P=(...e)=>t=>e.reduce((n,d)=>d(n),t);var Q={data(){return{search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default(e,t){return O(e)?"":t?e[t]:e}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default(){return[]}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1},preventAutofocus:{type:Boolean,default:!1}},mounted(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0])},computed:{internalValue(){return this.modelValue||this.modelValue===0?Array.isArray(this.modelValue)?this.modelValue:[this.modelValue]:[]},filteredOptions(){const e=this.search||"",t=e.toLowerCase().trim();let n=this.options.concat();return this.internalSearch?n=this.groupValues?this.filterAndFlat(n,t,this.label):M(n,t,this.label,this.customLabel):n=this.groupValues?I(this.groupValues,this.groupLabel)(n):n,n=this.hideSelected?n.filter(j(this.isSelected)):n,this.taggable&&t.length&&!this.isExistingOption(t)&&(this.tagPosition==="bottom"?n.push({isTag:!0,label:e}):n.unshift({isTag:!0,label:e})),n.slice(0,this.optionsLimit)},valueKeys(){return this.trackBy?this.internalValue.map(e=>e[this.trackBy]):this.internalValue},optionKeys(){return(this.groupValues?this.flatAndStrip(this.options):this.options).map(t=>this.customLabel(t,this.label).toString().toLowerCase())},currentOptionLabel(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:{handler(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("update:modelValue",this.multiple?[]:null))},deep:!0},search(){this.$emit("search-change",this.search)}},emits:["open","search-change","close","select","update:modelValue","remove","tag"],methods:{getValue(){return this.multiple?this.internalValue:this.internalValue.length===0?null:this.internalValue[0]},filterAndFlat(e,t,n){return P(Z(t,n,this.groupValues,this.groupLabel,this.customLabel),I(this.groupValues,this.groupLabel))(e)},flatAndStrip(e){return P(I(this.groupValues,this.groupLabel),J)(e)},updateSearch(e){this.search=e},isExistingOption(e){return this.options?this.optionKeys.indexOf(e)>-1:!1},isSelected(e){const t=this.trackBy?e[this.trackBy]:e;return this.valueKeys.indexOf(t)>-1},isOptionDisabled(e){return!!e.$isDisabled},getOptionLabel(e){if(O(e))return"";if(e.isTag)return e.label;if(e.$isLabel)return e.$groupLabel;const t=this.customLabel(e,this.label);return O(t)?"":t},select(e,t){if(e.$isLabel&&this.groupSelect){this.selectGroup(e);return}if(!(this.blockKeys.indexOf(t)!==-1||this.disabled||e.$isDisabled||e.$isLabel)&&!(this.max&&this.multiple&&this.internalValue.length===this.max)&&!(t==="Tab"&&!this.pointerDirty)){if(e.isTag)this.$emit("tag",e.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(e)){t!=="Tab"&&this.removeElement(e);return}this.multiple?this.$emit("update:modelValue",this.internalValue.concat([e])):this.$emit("update:modelValue",e),this.$emit("select",e,this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},selectGroup(e){const t=this.options.find(n=>n[this.groupLabel]===e.$groupLabel);if(t){if(this.wholeGroupSelected(t)){this.$emit("remove",t[this.groupValues],this.id);const n=this.internalValue.filter(d=>t[this.groupValues].indexOf(d)===-1);this.$emit("update:modelValue",n)}else{let n=t[this.groupValues].filter(d=>!(this.isOptionDisabled(d)||this.isSelected(d)));this.max&&n.splice(this.max-this.internalValue.length),this.$emit("select",n,this.id),this.$emit("update:modelValue",this.internalValue.concat(n))}this.closeOnSelect&&this.deactivate()}},wholeGroupSelected(e){return e[this.groupValues].every(t=>this.isSelected(t)||this.isOptionDisabled(t))},wholeGroupDisabled(e){return e[this.groupValues].every(this.isOptionDisabled)},removeElement(e,t=!0){if(this.disabled||e.$isDisabled)return;if(!this.allowEmpty&&this.internalValue.length<=1){this.deactivate();return}const n=typeof e=="object"?this.valueKeys.indexOf(e[this.trackBy]):this.valueKeys.indexOf(e);if(this.multiple){const d=this.internalValue.slice(0,n).concat(this.internalValue.slice(n+1));this.$emit("update:modelValue",d)}else this.$emit("update:modelValue",null);this.$emit("remove",e,this.id),this.closeOnSelect&&t&&this.deactivate()},removeLastElement(){this.blockKeys.indexOf("Delete")===-1&&this.search.length===0&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate(){this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&this.pointer===0&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.preventAutofocus||this.$nextTick(()=>this.$refs.search&&this.$refs.search.focus())):this.preventAutofocus||typeof this.$el<"u"&&this.$el.focus(),this.$emit("open",this.id))},deactivate(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search!==null&&typeof this.$refs.search<"u"&&this.$refs.search.blur():typeof this.$el<"u"&&this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle(){this.isOpen?this.deactivate():this.activate()},adjustPosition(){if(typeof window>"u")return;const e=this.$el.getBoundingClientRect().top,t=window.innerHeight-this.$el.getBoundingClientRect().bottom;t>this.maxHeight||t>e||this.openDirection==="below"||this.openDirection==="bottom"?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(t-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(e-40,this.maxHeight))}}},W={data(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition(){return this.pointer*this.optionHeight},visibleElements(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions(){this.pointerAdjust()},isOpen(){this.pointerDirty=!1},pointer(){this.$refs.search&&this.$refs.search.setAttribute("aria-activedescendant",this.id+"-"+this.pointer.toString())}},methods:{optionHighlight(e,t){return{"multiselect__option--highlight":e===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(t)}},groupHighlight(e,t){if(!this.groupSelect)return["multiselect__option--disabled",{"multiselect__option--group":t.$isLabel}];const n=this.options.find(d=>d[this.groupLabel]===t.$groupLabel);return n&&!this.wholeGroupDisabled(n)?["multiselect__option--group",{"multiselect__option--highlight":e===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(n)}]:"multiselect__option--disabled"},addPointerElement({key:e}="Enter"){this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],e),this.pointerReset()},pointerForward(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0},pointerBackward(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0},pointerReset(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()},pointerSet(e){this.pointer=e,this.pointerDirty=!0}}},A={name:"vue-multiselect",mixins:[Q,W],compatConfig:{MODE:3,ATTR_ENUMERATED_COERCION:!1},props:{name:{type:String,default:""},modelValue:{type:null,default(){return[]}},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:e=>`and ${e} more`},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{hasOptionGroup(){return this.groupValues&&this.groupLabel&&this.groupSelect},isSingleLabelVisible(){return(this.singleValue||this.singleValue===0)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible(){return!this.internalValue.length&&(!this.searchable||!this.isOpen)},visibleValues(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue(){return this.internalValue[0]},deselectLabelText(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText(){return this.showLabels?this.selectLabel:""},selectGroupLabelText(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText(){return this.showLabels?this.selectedLabel:""},inputStyle(){return this.searchable||this.multiple&&this.modelValue&&this.modelValue.length?this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}:""},contentStyle(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove(){return this.openDirection==="above"||this.openDirection==="top"?!0:this.openDirection==="below"||this.openDirection==="bottom"?!1:this.preferredOpenDirection==="above"},showSearchInput(){return this.searchable&&(this.hasSingleSelectedSlot&&(this.visibleSingleValue||this.visibleSingleValue===0)?this.isOpen:!0)}}};const X={ref:"tags",class:"multiselect__tags"},Y={class:"multiselect__tags-wrap"},ee={class:"multiselect__spinner"},te={key:0},se={class:"multiselect__option"},ie={class:"multiselect__option"},le=y("No elements found. Consider changing the search query."),ne={class:"multiselect__option"},oe=y("List is empty.");function re(e,t,n,d,i,a){return r(),b("div",{tabindex:e.searchable?-1:n.tabindex,class:[{"multiselect--active":e.isOpen,"multiselect--disabled":n.disabled,"multiselect--above":a.isAbove,"multiselect--has-options-group":a.hasOptionGroup},"multiselect"],onFocus:t[14]||(t[14]=o=>e.activate()),onBlur:t[15]||(t[15]=o=>e.searchable?!1:e.deactivate()),onKeydown:[t[16]||(t[16]=k(p(o=>e.pointerForward(),["self","prevent"]),["down"])),t[17]||(t[17]=k(p(o=>e.pointerBackward(),["self","prevent"]),["up"]))],onKeypress:t[18]||(t[18]=k(p(o=>e.addPointerElement(o),["stop","self"]),["enter","tab"])),onKeyup:t[19]||(t[19]=k(o=>e.deactivate(),["esc"])),role:"combobox","aria-owns":"listbox-"+e.id},[g(e.$slots,"caret",{toggle:e.toggle},()=>[c("div",{onMousedown:t[1]||(t[1]=p(o=>e.toggle(),["prevent","stop"])),class:"multiselect__select"},null,32)]),g(e.$slots,"clear",{search:e.search}),c("div",X,[g(e.$slots,"selection",{search:e.search,remove:e.removeElement,values:a.visibleValues,isOpen:e.isOpen},()=>[f(c("div",Y,[(r(!0),b(w,null,S(a.visibleValues,(o,l)=>g(e.$slots,"tag",{option:o,search:e.search,remove:e.removeElement},()=>[(r(),b("span",{class:"multiselect__tag",key:l},[c("span",{textContent:v(e.getOptionLabel(o))},null,8,["textContent"]),c("i",{tabindex:"1",onKeypress:k(p(_=>e.removeElement(o),["prevent"]),["enter"]),onMousedown:p(_=>e.removeElement(o),["prevent"]),class:"multiselect__tag-icon"},null,40,["onKeypress","onMousedown"])]))])),256))],512),[[L,a.visibleValues.length>0]]),e.internalValue&&e.internalValue.length>n.limit?g(e.$slots,"limit",{key:0},()=>[c("strong",{class:"multiselect__strong",textContent:v(n.limitText(e.internalValue.length-n.limit))},null,8,["textContent"])]):m("v-if",!0)]),c(B,{name:"multiselect__loading"},{default:T(()=>[g(e.$slots,"loading",{},()=>[f(c("div",ee,null,512),[[L,n.loading]])])]),_:3}),e.searchable?(r(),b("input",{key:0,ref:"search",name:n.name,id:e.id,type:"text",autocomplete:"off",spellcheck:!1,placeholder:e.placeholder,style:a.inputStyle,value:e.search,disabled:n.disabled,tabindex:n.tabindex,onInput:t[2]||(t[2]=o=>e.updateSearch(o.target.value)),onFocus:t[3]||(t[3]=p(o=>e.activate(),["prevent"])),onBlur:t[4]||(t[4]=p(o=>e.deactivate(),["prevent"])),onKeyup:t[5]||(t[5]=k(o=>e.deactivate(),["esc"])),onKeydown:[t[6]||(t[6]=k(p(o=>e.pointerForward(),["prevent"]),["down"])),t[7]||(t[7]=k(p(o=>e.pointerBackward(),["prevent"]),["up"])),t[9]||(t[9]=k(p(o=>e.removeLastElement(),["stop"]),["delete"]))],onKeypress:t[8]||(t[8]=k(p(o=>e.addPointerElement(o),["prevent","stop","self"]),["enter"])),class:"multiselect__input","aria-controls":"listbox-"+e.id},null,44,["name","id","placeholder","value","disabled","tabindex","aria-controls"])):m("v-if",!0),a.isSingleLabelVisible?(r(),b("span",{key:1,class:"multiselect__single",onMousedown:t[10]||(t[10]=p((...o)=>e.toggle&&e.toggle(...o),["prevent"]))},[g(e.$slots,"singleLabel",{option:a.singleValue},()=>[y(v(e.currentOptionLabel),1)])],32)):m("v-if",!0),a.isPlaceholderVisible?(r(),b("span",{key:2,class:"multiselect__placeholder",onMousedown:t[11]||(t[11]=p((...o)=>e.toggle&&e.toggle(...o),["prevent"]))},[g(e.$slots,"placeholder",{},()=>[y(v(e.placeholder),1)])],32)):m("v-if",!0)],512),c(B,{name:"multiselect"},{default:T(()=>[f(c("div",{class:"multiselect__content-wrapper",onFocus:t[12]||(t[12]=(...o)=>e.activate&&e.activate(...o)),tabindex:"-1",onMousedown:t[13]||(t[13]=p(()=>{},["prevent"])),style:{maxHeight:e.optimizedHeight+"px"},ref:"list"},[c("ul",{class:"multiselect__content",style:a.contentStyle,role:"listbox",id:"listbox-"+e.id},[g(e.$slots,"beforeList"),e.multiple&&e.max===e.internalValue.length?(r(),b("li",te,[c("span",se,[g(e.$slots,"maxElements",{},()=>[y("Maximum of "+v(e.max)+" options selected. First remove a selected option to select another.",1)])])])):m("v-if",!0),!e.max||e.internalValue.length<e.max?(r(!0),b(w,{key:1},S(e.filteredOptions,(o,l)=>(r(),b("li",{class:"multiselect__element",key:l,id:e.id+"-"+l,role:o&&(o.$isLabel||o.$isDisabled)?null:"option"},[o&&(o.$isLabel||o.$isDisabled)?m("v-if",!0):(r(),b("span",{key:0,class:[e.optionHighlight(l,o),"multiselect__option"],onClick:p(_=>e.select(o),["stop"]),onMouseenter:p(_=>e.pointerSet(l),["self"]),"data-select":o&&o.isTag?e.tagPlaceholder:a.selectLabelText,"data-selected":a.selectedLabelText,"data-deselect":a.deselectLabelText},[g(e.$slots,"option",{option:o,search:e.search,index:l},()=>[c("span",null,v(e.getOptionLabel(o)),1)])],42,["onClick","onMouseenter","data-select","data-selected","data-deselect"])),o&&(o.$isLabel||o.$isDisabled)?(r(),b("span",{key:1,"data-select":e.groupSelect&&a.selectGroupLabelText,"data-deselect":e.groupSelect&&a.deselectGroupLabelText,class:[e.groupHighlight(l,o),"multiselect__option"],onMouseenter:p(_=>e.groupSelect&&e.pointerSet(l),["self"]),onMousedown:p(_=>e.selectGroup(o),["prevent"])},[g(e.$slots,"option",{option:o,search:e.search,index:l},()=>[c("span",null,v(e.getOptionLabel(o)),1)])],42,["data-select","data-deselect","onMouseenter","onMousedown"])):m("v-if",!0)],8,["id","role"]))),128)):m("v-if",!0),f(c("li",null,[c("span",ie,[g(e.$slots,"noResult",{search:e.search},()=>[le])])],512),[[L,n.showNoResults&&e.filteredOptions.length===0&&e.search&&!n.loading]]),f(c("li",null,[c("span",ne,[g(e.$slots,"noOptions",{},()=>[oe])])],512),[[L,n.showNoOptions&&(e.options.length===0||a.hasOptionGroup===!0&&e.filteredOptions.length===0)&&!e.search&&!n.loading]]),g(e.$slots,"afterList")],12,["id"])],36),[[L,e.isOpen]])]),_:3})],42,["tabindex","aria-owns"])}A.render=re;const ae={setup(){return{skillsStore:N()}},components:{VueMultiselect:A},data(){return{skill:{name:"",parent:0,description:"",icon:"",icon_image:"",banner_image:"",mastery_requirements:"",type:"regular",level:"grade_school"},iconImage:"",bannerImage:"",skills:[],superSkills:[],levels:[{id:"grade_school",name:"Grade school"},{id:"middle_school",name:"Middle school"},{id:"high_school",name:"High school"},{id:"college",name:"College"},{id:"phd",name:"PhD"}],filters:[],parentInput:{inputText:"",suggestSkills:[]},clusterParentInput:{inputText:"",suggestSuperSkills:[]},showDropDown:!1,showLevel:"Grade School",validate:{violated:!1,name:!1,description:!1,orphan:!1},isAnotherInstanceOfExistingSkill:!1,skillToBeCopied:null,parentOfNewInstance:null}},computed:{skillsThatCanBeCopied(){return this.skillsStore.skillsList.filter(function(t){return t.type!=="domain"&&t.type!=="super"})}},async created(){this.skillsStore.skillsList.length==0&&await this.skillsStore.getSkillsList(),this.skills.length==0&&await this.getParentSkills()},async mounted(){$("#summernote").summernote({disableDragAndDrop:!0,placeholder:"",tabsize:2,height:120,toolbar:[["style",["style"]],["font",["bold","underline","clear"]],["color",["color"]],["para",["ul","ol","paragraph"]],["table",["table"]],["insert",["link"]],["view",["fullscreen","codeview","help"]]],maximumImageFileSize:2048*1024,callbacks:{onImageUploadError:function(e){alert("Max image size is 2MB.")}}}),$(".note-editor .note-editable").css("background-color","#ffffff")},methods:{async getParentSkills(){for(let e=0;e<this.skillsStore.skillsList.length;e++)this.skillsStore.skillsList[e].type=="super"&&this.superSkills.push(this.skillsStore.skillsList[e]),this.skillsStore.skillsList[e].id!=this.skillId&&this.skillsStore.skillsList[e].type!="sub"&&this.skills.push(this.skillsStore.skillsList[e])},onFileChange(e,t){var n=e.target.files||e.dataTransfer.files;n.length&&this.createImage(n[0],t)},createImage(e,t){new Image;var n=new FileReader,d=this;n.onload=i=>{d.image=i.target.result,t=="icon"?(this.iconImage=i.target.result,this.skill.icon_image=this.iconImage):(this.bannerImage=i.target.result,this.skill.banner_image=this.bannerImage)},n.readAsDataURL(e)},deleteImage(e){switch(e){case"icon":this.iconImage="";break;default:this.bannerImage="";break}},async Submit(){if(this.skill.type=="sub"&&this.skill.parent==0&&(alert("cluster nodes must have a parent"),this.validate.orphan=!0,this.validate.violated=!0),(this.skill.name===""||this.skill.name===null)&&(alert("please enter a skill name"),this.validate.name=!0,this.validate.description=!0),this.skill.type=="domain")this.skill.level="domain";else if(this.skill.type=="sub")for(let t=0;t<this.skillsStore.skillsList.length;t++)this.skill.parent==this.skillsStore.skillsList[t].id&&(this.skill.level=this.skillsStore.skillsList[t].level);var e="/skills/add";this.skill.mastery_requirements=$("#summernote").summernote("code"),!this.validate.violated&&await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.skill.name,parent:this.skill.parent,description:this.skill.description,icon_image:this.skill.icon_image,banner_image:this.skill.banner_image,mastery_requirements:this.skill.mastery_requirements,type:this.skill.type,level:this.skill.level,filters:this.filters})}).then(function(t){return t.json()}).then(t=>{if(t.result=="skill already exists"){alert(t.result);return}else(t.result=="skill was deleted, but has now been undeleted. Please find it and edit it."||t.result=="skill added")&&alert(t.result)}).then(()=>{this.skillsStore.getNestedSkillsList()}).then(()=>{this.$router.push("/skills")})},async CreateNewInstance(){var e="/skills/add/new-instance";await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({skillToBeCopied:this.skillToBeCopied,parentOfNewInstance:this.parentOfNewInstance})}).then(()=>{this.skillsStore.getNestedSkillsList()}).then(()=>{this.$router.push("/skills")})},getReferenceSkill(){this.parentInput.inputText.length<2?this.parentInput.suggestSkills=[]:this.parentInput.suggestSkills=this.skills.filter(e=>e.name.toLowerCase().includes(this.parentInput.inputText.toLowerCase()))},handleChooseSuggestSkill(e){this.parentInput.suggestSkills=[],this.skill.parent=e.id,this.parentInput.inputText=e.name},getSuperSkillSuggestion(){this.clusterParentInput.inputText.length<2?this.clusterParentInput.suggestSuperSkills=[]:this.clusterParentInput.suggestSuperSkills=this.superSkills.filter(e=>e.name.toLowerCase().includes(this.clusterParentInput.inputText.toLowerCase()))},handleChooseSuperSkill(e){this.clusterParentInput.suggestSuperSkills=[],this.skill.parent=e.id,this.clusterParentInput.inputText=e.name},handleChooseSkillLevel(e){this.showLevel=e.name,this.skill.level=e.id,this.showDropDown=!1},openImage(e){document.getElementById(e).click()}}},h=e=>(K("data-v-8bc9efff"),e=e(),z(),e),ue={class:"container mt-4 pb-5 px-3 px-md-0"},he=h(()=>s("div",{class:"row mt-5"},[s("div",{class:"col-12 col-md-10 col-lg-5 d-flex align-items-baseline justify-content-center justify-content-md-start gap-3 mt-3"},[s("h1",{id:"page-tile"},"Add Skill"),s("img",{src:U,id:"header-icon"})])],-1)),de={class:"row"},ce={class:"col-12 col-md-8 col-lg-5 mt-2"},pe={class:"row p-0 m-0"},me={class:"form-check my-2"},fe={class:"control control-checkbox"},ge=h(()=>s("span",{class:"my-auto mx-2 me-2"},"Is this an existing skill that needs to appear again in the tree?",-1)),ve=h(()=>s("div",{class:"control_indicator"},null,-1)),be={key:0,class:"mb-3"},ke={class:"row mt-3"},ye=h(()=>s("label",{class:"form-label"},"Original Skill",-1)),_e=["value"],we={class:"row mt-3"},Se=h(()=>s("label",{class:"form-label"},"Parent",-1)),Le=["value"],Ce={key:0},Ve={class:"row mt-2"},Oe={class:"col-12 col-md-8 col-lg-5 mt-2"},Ie={class:"mb-3"},Te=h(()=>s("label",{for:"name",class:"form-label"},"Name",-1)),Be={key:0,class:"form-validate"},De={class:"row"},Pe={class:"col-12 col-md-8 col-lg-5 mt-2"},xe={key:0,class:"mb-3"},Me=h(()=>s("label",{class:"form-label"},"Parent",-1)),Ae={class:"row mt-3"},Ee={class:"col position-relative"},He={key:0,id:"suggest-skills",class:"flex flex-column position-absolute"},Ne=["onClick"],$e={key:0,class:"form-validate"},Fe={key:1,class:"mb-3"},Re=h(()=>s("label",{class:"form-label"},"Cluster node center",-1)),Ge={class:"row mt-3"},Ke={class:"col position-relative"},ze={key:0,id:"suggest-skills",class:"flex flex-column position-absolute"},Ue=["onClick"],je={class:"row"},qe={key:0},Je={class:"col col-md-8 col-lg-5 mt-2"},Ze=h(()=>s("label",{class:"form-label"},"Level",-1)),Qe={class:"d-flex flex-column position-relative"},We=h(()=>s("span",null,[s("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z",fill:"#344054"})])],-1)),Xe={key:0,class:"custom-dropdown-base"},Ye=["onClick"],et={class:"row"},tt={class:"col-12 col-md-8 col-lg-5 mt-2"},st=h(()=>s("label",{class:"form-label"},"Node Type",-1)),it={class:"row p-0 m-0"},lt={class:"form-check col-6 col-md-5 my-2"},nt={class:"control control-checkbox"},ot=h(()=>s("span",{class:"my-auto mx-2 me-4"},"Regular",-1)),rt=h(()=>s("div",{class:"control_indicator"},null,-1)),at={class:"form-check col-6 col-md-5 my-2"},ut={class:"control control-checkbox"},ht=h(()=>s("span",{class:"my-auto mx-2 me-4"},"Category",-1)),dt=h(()=>s("div",{class:"control_indicator"},null,-1)),ct={class:"form-check col-6 col-md-5 my-2"},pt={class:"control control-checkbox"},mt=h(()=>s("span",{class:"my-auto mx-2 me-4"},"Cluster node center",-1)),ft=h(()=>s("div",{class:"control_indicator"},null,-1)),gt={class:"form-check col-6 col-md-5 my-2"},vt={class:"control control-checkbox"},bt=h(()=>s("span",{class:"my-auto mx-2 me-4"},"Cluster node outer",-1)),kt=h(()=>s("div",{class:"control_indicator"},null,-1)),yt={key:0,class:"form-validate"},_t={class:"row"},wt={class:"col-6 col-md-3 col-lg-2 mt-2"},St={class:"mb-3 row d-flex justify-content-center justify-content-md-start"},Lt=h(()=>s("label",{for:"image",class:"form-label"},"Icon",-1)),Ct={key:0},Vt={class:"default-no-img"},Ot=x('<svg width="33" height="33" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8bc9efff><circle cx="26.5" cy="26.5" r="26.5" fill="#D9D9D9" data-v-8bc9efff></circle><g clip-path="url(#clip0_372_11959)" data-v-8bc9efff><path d="M19.7439 45.0784L19.7439 33.2515L7.93354 33.268C7.40615 33.2671 6.90063 33.0572 6.52771 32.6843C6.15479 32.3114 5.94488 31.8059 5.94396 31.2785L5.93291 21.7174C5.93382 21.1901 6.14373 20.6845 6.51665 20.3116C6.88957 19.9387 7.3951 19.7288 7.92249 19.7279L19.7439 19.7334L19.7439 7.90646C19.7411 7.64223 19.7911 7.38009 19.8909 7.13543C19.9907 6.89076 20.1384 6.66849 20.3252 6.48164C20.5121 6.29479 20.7344 6.14713 20.979 6.0473C21.2237 5.94747 21.4858 5.8975 21.75 5.9003L31.2779 5.92241C31.8053 5.92332 32.3108 6.13322 32.6838 6.50615C33.0567 6.87907 33.2666 7.38459 33.2675 7.91198L33.262 19.7334L45.0889 19.7334C45.615 19.7337 46.1195 19.9428 46.4915 20.3148C46.8635 20.6869 47.0726 21.1913 47.073 21.7174L47.0951 31.2453C47.0948 31.7714 46.8856 32.2759 46.5136 32.6479C46.1416 33.0199 45.6371 33.229 45.111 33.2294L33.262 33.2515L33.2786 45.0618C33.2776 45.5892 33.0677 46.0947 32.6948 46.4677C32.3219 46.8406 31.8164 47.0505 31.289 47.0514L21.7501 47.0846C21.4858 47.0874 21.2237 47.0374 20.979 46.9376C20.7344 46.8377 20.5121 46.6901 20.3252 46.5032C20.1384 46.3164 19.9907 46.0941 19.8909 45.8494C19.7911 45.6048 19.7411 45.3426 19.7439 45.0784Z" fill="white" data-v-8bc9efff></path></g><defs data-v-8bc9efff><clipPath id="clip0_372_11959" data-v-8bc9efff><rect width="37" height="37" fill="white" transform="translate(8 8)" data-v-8bc9efff></rect></clipPath></defs></svg>',1),It=[Ot],Tt=h(()=>s("p",{style:{"font-size":"14px"}},[s("em",null,"Maximum file size 15mb")],-1)),Bt={key:1},Dt=["src"],Pt=h(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",height:"20",fill:"white"},[s("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),xt={class:"col-12 col-lg-10 mt-2"},Mt={class:"mb-3 row"},At=h(()=>s("label",{for:"image",class:"form-label"},"Banner",-1)),Et={key:0},Ht={class:"default-no-img"},Nt=x('<svg width="33" height="33" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8bc9efff><circle cx="26.5" cy="26.5" r="26.5" fill="#D9D9D9" data-v-8bc9efff></circle><g clip-path="url(#clip0_372_11959)" data-v-8bc9efff><path d="M19.7439 45.0784L19.7439 33.2515L7.93354 33.268C7.40615 33.2671 6.90063 33.0572 6.52771 32.6843C6.15479 32.3114 5.94488 31.8059 5.94396 31.2785L5.93291 21.7174C5.93382 21.1901 6.14373 20.6845 6.51665 20.3116C6.88957 19.9387 7.3951 19.7288 7.92249 19.7279L19.7439 19.7334L19.7439 7.90646C19.7411 7.64223 19.7911 7.38009 19.8909 7.13543C19.9907 6.89076 20.1384 6.66849 20.3252 6.48164C20.5121 6.29479 20.7344 6.14713 20.979 6.0473C21.2237 5.94747 21.4858 5.8975 21.75 5.9003L31.2779 5.92241C31.8053 5.92332 32.3108 6.13322 32.6838 6.50615C33.0567 6.87907 33.2666 7.38459 33.2675 7.91198L33.262 19.7334L45.0889 19.7334C45.615 19.7337 46.1195 19.9428 46.4915 20.3148C46.8635 20.6869 47.0726 21.1913 47.073 21.7174L47.0951 31.2453C47.0948 31.7714 46.8856 32.2759 46.5136 32.6479C46.1416 33.0199 45.6371 33.229 45.111 33.2294L33.262 33.2515L33.2786 45.0618C33.2776 45.5892 33.0677 46.0947 32.6948 46.4677C32.3219 46.8406 31.8164 47.0505 31.289 47.0514L21.7501 47.0846C21.4858 47.0874 21.2237 47.0374 20.979 46.9376C20.7344 46.8377 20.5121 46.6901 20.3252 46.5032C20.1384 46.3164 19.9907 46.0941 19.8909 45.8494C19.7911 45.6048 19.7411 45.3426 19.7439 45.0784Z" fill="white" data-v-8bc9efff></path></g><defs data-v-8bc9efff><clipPath id="clip0_372_11959" data-v-8bc9efff><rect width="37" height="37" fill="white" transform="translate(8 8)" data-v-8bc9efff></rect></clipPath></defs></svg>',1),$t=[Nt],Ft=h(()=>s("p",{style:{"font-size":"14px"}},[s("em",null,"Maximum file size 15mb")],-1)),Rt={key:1},Gt=["src"],Kt=h(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"20",height:"20",fill:"white"},[s("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),zt={class:"row"},Ut={class:"col"},jt={class:"mb-3"},qt=h(()=>s("label",{for:"description",class:"form-label"},"Description",-1)),Jt={key:0,class:"form-validate"},Zt={class:"row"},Qt={class:"col"},Wt={class:"mb-3"},Xt=h(()=>s("label",{for:"mastery_requirements",class:"form-label"},"Mastery Requirements",-1)),Yt={class:"row"},es={class:"col"},ts={class:"d-flex justify-content-end gap-4"};function ss(e,t,n,d,i,a){const o=F("router-link");return r(),u("div",ue,[he,s("div",de,[s("div",ce,[s("div",pe,[s("div",me,[s("label",fe,[ge,f(s("input",{type:"checkbox",value:"true","onUpdate:modelValue":t[0]||(t[0]=l=>i.isAnotherInstanceOfExistingSkill=l)},null,512),[[R,i.isAnotherInstanceOfExistingSkill]]),ve])])]),i.isAnotherInstanceOfExistingSkill?(r(),u("div",be,[s("div",ke,[ye,f(s("select",{"onUpdate:modelValue":t[1]||(t[1]=l=>i.skillToBeCopied=l)},[(r(!0),u(w,null,S(a.skillsThatCanBeCopied,l=>(r(),u("option",{value:l},v(l.name),9,_e))),256))],512),[[D,i.skillToBeCopied]])]),s("div",we,[Se,f(s("select",{"onUpdate:modelValue":t[2]||(t[2]=l=>i.parentOfNewInstance=l)},[(r(!0),u(w,null,S(i.skills,l=>(r(),u("option",{value:l},v(l.name),9,Le))),256))],512),[[D,i.parentOfNewInstance]])])])):m("",!0)])]),i.isAnotherInstanceOfExistingSkill?m("",!0):(r(),u("div",Ce,[s("div",Ve,[s("div",Oe,[s("div",Ie,[Te,f(s("input",{"onUpdate:modelValue":t[3]||(t[3]=l=>i.skill.name=l),class:"form-control",type:"text",placeholder:"name"},null,512),[[C,i.skill.name]]),i.validate.name&&(i.skill.name==""||i.skill.name==null)?(r(),u("div",Be," please enter a skill name ")):m("",!0)])])]),s("div",De,[s("div",Pe,[i.skill.type!="sub"?(r(),u("div",xe,[Me,s("div",Ae,[s("div",Ee,[f(s("input",{id:"skill-input","onUpdate:modelValue":t[4]||(t[4]=l=>i.parentInput.inputText=l),onInput:t[5]||(t[5]=(...l)=>a.getReferenceSkill&&a.getReferenceSkill(...l)),placeholder:"type skill name"},null,544),[[C,i.parentInput.inputText]]),i.parentInput.suggestSkills.length>0?(r(),u("div",He,[(r(!0),u(w,null,S(i.parentInput.suggestSkills,l=>(r(),u("div",{class:"suggest-option",onClick:_=>a.handleChooseSuggestSkill(l)},v(l.name),9,Ne))),256))])):m("",!0)])]),i.validate.orphan&&(i.skill.parent==""||i.skill.parent==null)?(r(),u("div",$e," cluster nodes must have a parent ")):m("",!0)])):(r(),u("div",Fe,[Re,s("div",Ge,[s("div",Ke,[f(s("input",{id:"skill-input","onUpdate:modelValue":t[6]||(t[6]=l=>i.clusterParentInput.inputText=l),onInput:t[7]||(t[7]=(...l)=>a.getSuperSkillSuggestion&&a.getSuperSkillSuggestion(...l)),placeholder:"type skill name"},null,544),[[C,i.clusterParentInput.inputText]]),i.clusterParentInput.suggestSuperSkills.length>0?(r(),u("div",ze,[(r(!0),u(w,null,S(i.clusterParentInput.suggestSuperSkills,l=>(r(),u("div",{class:"suggest-option",onClick:_=>a.handleChooseSuggestSkill(l)},v(l.name),9,Ue))),256))])):m("",!0)])])]))])]),s("div",je,[i.skill.type!="domain"&&i.skill.type!="sub"?(r(),u("div",qe,[s("div",Je,[Ze,s("div",Qe,[s("div",{class:G([i.showDropDown?"custom-select-button-focus ":"custom-select-button "]),onClick:t[8]||(t[8]=l=>i.showDropDown=!i.showDropDown)},[y(v(i.showLevel)+" ",1),We],2),i.showDropDown?(r(),u("div",Xe,[(r(!0),u(w,null,S(i.levels,l=>(r(),u("div",{class:"custom-dropdown-option",onClick:_=>a.handleChooseSkillLevel(l)},v(l.name),9,Ye))),256))])):m("",!0)])])])):m("",!0)]),s("div",et,[s("div",tt,[st,s("div",it,[s("div",lt,[s("label",nt,[ot,f(s("input",{type:"radio",name:"nodeType",id:"regularSkillRadio",value:"regular","onUpdate:modelValue":t[9]||(t[9]=l=>i.skill.type=l)},null,512),[[V,i.skill.type]]),rt])]),s("div",at,[s("label",ut,[ht,f(s("input",{type:"radio",name:"nodeType",id:"domainSkillRadio",value:"domain","onUpdate:modelValue":t[10]||(t[10]=l=>i.skill.type=l)},null,512),[[V,i.skill.type]]),dt])]),s("div",ct,[s("label",pt,[mt,f(s("input",{type:"radio",name:"nodeType",id:"superSkillRadio",value:"super","onUpdate:modelValue":t[11]||(t[11]=l=>i.skill.type=l)},null,512),[[V,i.skill.type]]),ft])]),s("div",gt,[s("label",vt,[bt,f(s("input",{type:"radio",name:"nodeType",id:"regularSkillRadio",value:"sub","onUpdate:modelValue":t[12]||(t[12]=l=>i.skill.type=l)},null,512),[[V,i.skill.type]]),kt])])])]),i.validate.orphan&&this.skill.type=="sub"&&this.skill.parent==0?(r(),u("div",yt," please choose a parent for this skill ")):m("",!0)]),s("div",_t,[s("div",wt,[s("div",St,[Lt,i.iconImage?(r(),u("div",Bt,[s("p",null,[s("img",{src:i.iconImage,height:"158",width:"158",style:{"background-color":"lightgrey"}},null,8,Dt)]),s("p",null,[s("button",{class:"btn red-btn",onClick:t[15]||(t[15]=l=>a.deleteImage("icon"))},[y(" Remove    "),Pt])])])):(r(),u("div",Ct,[s("input",{class:"form-control d-none",type:"file",accept:"image/*",onChange:t[13]||(t[13]=l=>a.onFileChange(l,"icon")),id:"iconFileChoose"},null,32),s("div",Vt,[s("div",{class:"plus-svg",onClick:t[14]||(t[14]=l=>a.openImage("iconFileChoose"))},It)]),Tt]))])]),s("div",xt,[s("div",Mt,[At,i.bannerImage?(r(),u("div",Rt,[s("p",null,[s("img",{src:i.bannerImage,height:"158",width:"1175",style:{"background-color":"lightgrey"}},null,8,Gt)]),s("p",null,[s("button",{class:"btn red-btn",onClick:t[18]||(t[18]=l=>a.deleteImage("banner"))},[y(" Remove    "),Kt])])])):(r(),u("div",Et,[s("input",{class:"form-control d-none",type:"file",accept:"image/*",onChange:t[16]||(t[16]=l=>a.onFileChange(l,"banner")),id:"bannerFileChoose"},null,32),s("div",Ht,[s("div",{class:"plus-svg",onClick:t[17]||(t[17]=l=>a.openImage("bannerFileChoose"))},$t)]),Ft]))])])]),s("div",zt,[s("div",Ut,[s("div",jt,[qt,f(s("textarea",{"onUpdate:modelValue":t[19]||(t[19]=l=>i.skill.description=l),class:"form-control",placeholder:"description",rows:"2"},null,512),[[C,i.skill.description]])]),s("div",null,[i.validate.description?(r(),u("div",Jt," please enter description for skill ")):m("",!0)])])]),s("div",Zt,[s("div",Qt,[s("div",Wt,[Xt,f(s("textarea",{"onUpdate:modelValue":t[20]||(t[20]=l=>i.skill.mastery_requirements=l),class:"form-control",id:"summernote",rows:"3"},null,512),[[C,i.skill.mastery_requirements]])])])])])),s("div",Yt,[s("div",es,[s("div",ts,[c(o,{class:"btn red-btn",to:"/skills"},{default:T(()=>[y(" Cancel ")]),_:1}),i.isAnotherInstanceOfExistingSkill?(r(),u("button",{key:1,class:"btn purple-btn",onClick:t[22]||(t[22]=l=>a.CreateNewInstance())}," Create New Instance ")):(r(),u("button",{key:0,class:"btn purple-btn",onClick:t[21]||(t[21]=l=>a.Submit())}," Submit "))])])])])}const is=H(ae,[["render",ss],["__scopeId","data-v-8bc9efff"]]);const ls=s("div",{id:"banner"},[s("img",{src:E,class:"image-fluid"})],-1),as={__name:"AddSkillView",setup(e){return(t,n)=>(r(),u(w,null,[ls,c(is)],64))}};export{as as default};
