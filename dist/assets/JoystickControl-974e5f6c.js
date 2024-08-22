import{_ as H,m as Z,n as W,o as k,c as P,d as q,i as Q,t as j,a as ee,T as te,b as S,w as ie,q as ne,p as se,e as re}from"./main-9918444d.js";const D={setup(){},data(){return{oldScale:0,scalePercent:"0%",showLabel:Z(!1)}},computed:{},async mounted(){let t=document.getElementById("zoomRange");t.step="0.1",this.oldScale=this.$parent.scale;const e=this.$parent.scale/2*100;this.scalePercent=e+"%",t.addEventListener("mouseup",()=>{const i=this.oldScale/this.$parent.scale;let s=t.value>=1?this.$parent.panX:this.$parent.panX*t.value,n=t.value>=1?this.$parent.panY:this.$parent.panY*t.value;s=s*i,n=n*i,this.$parent.scale=t.value,this.oldScale=t.value,this.$parent.zoomInD3(t.value,s,n)}),t.addEventListener("touchend",()=>{const i=t.value/this.$parent.scale;let s=t.value>=1?this.$parent.panX:this.$parent.panX*t.value,n=t.value>=1?this.$parent.panY:this.$parent.panY*t.value;s=s*i,n=n*i,this.$parent.scale=t.value,this.$parent.zoomInD3(t.value,s,n)})},methods:{changeGradientBG(){const t=this.$parent.scale/2*100;this.scalePercent=t+"%"},showScaleLabel(){this.showLabel=!0,setTimeout(()=>{this.showLabel=!1},1500)}}},z=()=>{W(t=>({"3d22ce0a":t.scalePercent}))},C=D.setup;D.setup=C?(t,e)=>(z(),C(t,e)):z;const oe={id:"sliderWrapper"},ae={key:0,id:"scaleLabel"},le={class:"slideContainer"};function pe(t,e,i,s,n,r){return k(),P("div",oe,[q(te,null,{default:Q(()=>[n.showLabel?(k(),P("div",ae,j(Number.parseFloat(this.$parent.scale).toFixed(2))+"x ",1)):ee("",!0)]),_:1}),S("div",le,[ie(S("input",{type:"range",min:"0.05",max:"2","onUpdate:modelValue":e[0]||(e[0]=a=>this.$parent.scale=a),id:"zoomRange",step:"0.01",orient:"vertical",onInput:e[1]||(e[1]=a=>r.changeGradientBG())},null,544),[[ne,this.$parent.scale]])])])}const Pe=H(D,[["render",pe],["__scopeId","data-v-3893a161"]]),_=(t,e)=>{const i=e.x-t.x,s=e.y-t.y;return Math.sqrt(i*i+s*s)},de=(t,e)=>{const i=e.x-t.x,s=e.y-t.y;return he(Math.atan2(s,i))},ce=(t,e,i)=>{const s={x:0,y:0};return i=E(i),s.x=t.x-e*Math.cos(i),s.y=t.y-e*Math.sin(i),s},E=t=>t*(Math.PI/180),he=t=>t*(180/Math.PI),fe=t=>isNaN(t.buttons)?t.pressure!==0:t.buttons!==0,O=new Map,M=t=>{O.has(t)&&clearTimeout(O.get(t)),O.set(t,setTimeout(t,100))},b=(t,e,i)=>{const s=e.split(/[ ,]+/g);let n;for(let r=0;r<s.length;r+=1)n=s[r],t.addEventListener?t.addEventListener(n,i,!1):t.attachEvent&&t.attachEvent(n,i)},N=(t,e,i)=>{const s=e.split(/[ ,]+/g);let n;for(let r=0;r<s.length;r+=1)n=s[r],t.removeEventListener?t.removeEventListener(n,i):t.detachEvent&&t.detachEvent(n,i)},J=t=>(t.preventDefault(),t.type.match(/^touch/)?t.changedTouches:t),L=()=>{const t=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,e=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:t,y:e}},A=(t,e)=>{e.top||e.right||e.bottom||e.left?(t.style.top=e.top,t.style.right=e.right,t.style.bottom=e.bottom,t.style.left=e.left):(t.style.left=e.x+"px",t.style.top=e.y+"px")},X=(t,e,i)=>{const s=B(t);for(let n in s)if(s.hasOwnProperty(n))if(typeof e=="string")s[n]=e+" "+i;else{let r="";for(let a=0,o=e.length;a<o;a+=1)r+=e[a]+" "+i+", ";s[n]=r.slice(0,-2)}return s},ue=(t,e)=>{const i=B(t);for(let s in i)i.hasOwnProperty(s)&&(i[s]=e);return i},B=t=>{const e={};return e[t]="",["webkit","Moz","o"].forEach(function(s){e[s+t.charAt(0).toUpperCase()+t.slice(1)]=""}),e},T=(t,e)=>{for(let i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},ve=(t,e)=>{const i={};for(let s in t)t.hasOwnProperty(s)&&e.hasOwnProperty(s)?i[s]=e[s]:t.hasOwnProperty(s)&&(i[s]=t[s]);return i},Y=(t,e)=>{if(t.length)for(let i=0,s=t.length;i<s;i+=1)e(t[i]);else e(t)},me=(t,e,i)=>({x:Math.min(Math.max(t.x,e.x-i),e.x+i),y:Math.min(Math.max(t.y,e.y-i),e.y+i)});var ye="ontouchstart"in window,ge=!!window.PointerEvent,$e=!!window.MSPointerEvent,g={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},m,$={};ge?m=g.pointer:$e?m=g.MSPointer:ye?(m=g.touch,$=g.mouse):m=g.mouse;function u(){}u.prototype.on=function(t,e){var i=this,s=t.split(/[ ,]+/g),n;i._handlers_=i._handlers_||{};for(var r=0;r<s.length;r+=1)n=s[r],i._handlers_[n]=i._handlers_[n]||[],i._handlers_[n].push(e);return i};u.prototype.off=function(t,e){var i=this;return i._handlers_=i._handlers_||{},t===void 0?i._handlers_={}:e===void 0?i._handlers_[t]=null:i._handlers_[t]&&i._handlers_[t].indexOf(e)>=0&&i._handlers_[t].splice(i._handlers_[t].indexOf(e),1),i};u.prototype.trigger=function(t,e){var i=this,s=t.split(/[ ,]+/g),n;i._handlers_=i._handlers_||{};for(var r=0;r<s.length;r+=1)n=s[r],i._handlers_[n]&&i._handlers_[n].length&&i._handlers_[n].forEach(function(a){a.call(i,{type:n,target:i},e)})};u.prototype.config=function(t){var e=this;e.options=e.defaults||{},t&&(e.options=ve(e.options,t))};u.prototype.bindEvt=function(t,e){var i=this;return i._domHandlers_=i._domHandlers_||{},i._domHandlers_[e]=function(){typeof i["on"+e]=="function"?i["on"+e].apply(i,arguments):console.warn('[WARNING] : Missing "on'+e+'" handler.')},b(t,m[e],i._domHandlers_[e]),$[e]&&b(t,$[e],i._domHandlers_[e]),i};u.prototype.unbindEvt=function(t,e){var i=this;return i._domHandlers_=i._domHandlers_||{},N(t,m[e],i._domHandlers_[e]),$[e]&&N(t,$[e],i._domHandlers_[e]),delete i._domHandlers_[e],this};function c(t,e){return this.identifier=e.identifier,this.position=e.position,this.frontPosition=e.frontPosition,this.collection=t,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(e),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=c.id,c.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}c.prototype=new u;c.constructor=c;c.id=0;c.prototype.buildEl=function(t){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};c.prototype.stylize=function(){if(this.options.dataOnly)return this;var t=this.options.fadeTime+"ms",e=ue("borderRadius","50%"),i=X("transition","opacity",t),s={};return s.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},s.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},s.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5",transform:"translate(0px, 0px)"},T(s.el,i),this.options.shape==="circle"&&T(s.back,e),T(s.front,e),this.applyStyles(s),this};c.prototype.applyStyles=function(t){for(var e in this.ui)if(this.ui.hasOwnProperty(e))for(var i in t[e])this.ui[e].style[i]=t[e][i];return this};c.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};c.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};c.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};c.prototype.show=function(t){var e=this;return e.options.dataOnly||(clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.addToDom(),e.restCallback(),setTimeout(function(){e.ui.el.style.opacity=1},0),e.showTimeout=setTimeout(function(){e.trigger("shown",e.instance),typeof t=="function"&&t.call(this)},e.options.fadeTime)),e};c.prototype.hide=function(t){var e=this;if(e.options.dataOnly)return e;if(e.ui.el.style.opacity=e.options.restOpacity,clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.removeTimeout=setTimeout(function(){var i=e.options.mode==="dynamic"?"none":"block";e.ui.el.style.display=i,typeof t=="function"&&t.call(e),e.trigger("hidden",e.instance)},e.options.fadeTime),e.options.restJoystick){const i=e.options.restJoystick,s={};s.x=i===!0||i.x!==!1?0:e.instance.frontPosition.x,s.y=i===!0||i.y!==!1?0:e.instance.frontPosition.y,e.setPosition(t,s)}return e};c.prototype.setPosition=function(t,e){var i=this;i.frontPosition={x:e.x,y:e.y};var s=i.options.fadeTime+"ms",n={};n.front=X("transition",["transform"],s);var r={front:{}};r.front={transform:"translate("+i.frontPosition.x+"px,"+i.frontPosition.y+"px)"},i.applyStyles(n),i.applyStyles(r),i.restTimeout=setTimeout(function(){typeof t=="function"&&t.call(i),i.restCallback()},i.options.fadeTime)};c.prototype.restCallback=function(){var t=this,e={};e.front=X("transition","none",""),t.applyStyles(e),t.trigger("rested",t.instance)};c.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};c.prototype.computeDirection=function(t){var e=t.angle.radian,i=Math.PI/4,s=Math.PI/2,n,r,a;if(e>i&&e<i*3&&!t.lockX?n="up":e>-i&&e<=i&&!t.lockY?n="left":e>-i*3&&e<=-i&&!t.lockX?n="down":t.lockY||(n="right"),t.lockY||(e>-s&&e<s?r="left":r="right"),t.lockX||(e>0?a="up":a="down"),t.force>this.options.threshold){var o={},p;for(p in this.direction)this.direction.hasOwnProperty(p)&&(o[p]=this.direction[p]);var l={};this.direction={x:r,y:a,angle:n},t.direction=this.direction;for(p in o)o[p]===this.direction[p]&&(l[p]=!0);if(l.x&&l.y&&l.angle)return t;(!l.x||!l.y)&&this.trigger("plain",t),l.x||this.trigger("plain:"+r,t),l.y||this.trigger("plain:"+a,t),l.angle||this.trigger("dir dir:"+n,t)}else this.resetDirection();return t};function d(t,e){var i=this;i.nipples=[],i.idles=[],i.actives=[],i.ids=[],i.pressureIntervals={},i.manager=t,i.id=d.id,d.id+=1,i.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},i.config(e),(i.options.mode==="static"||i.options.mode==="semi")&&(i.options.multitouch=!1),i.options.multitouch||(i.options.maxNumberOfNipples=1);const s=getComputedStyle(i.options.zone.parentElement);return s&&s.display==="flex"&&(i.parentIsFlex=!0),i.updateBox(),i.prepareNipples(),i.bindings(),i.begin(),i.nipples}d.prototype=new u;d.constructor=d;d.id=0;d.prototype.prepareNipples=function(){var t=this,e=t.nipples;e.on=t.on.bind(t),e.off=t.off.bind(t),e.options=t.options,e.destroy=t.destroy.bind(t),e.ids=t.ids,e.id=t.id,e.processOnMove=t.processOnMove.bind(t),e.processOnEnd=t.processOnEnd.bind(t),e.get=function(i){if(i===void 0)return e[0];for(var s=0,n=e.length;s<n;s+=1)if(e[s].identifier===i)return e[s];return!1}};d.prototype.bindings=function(){var t=this;t.bindEvt(t.options.zone,"start"),t.options.zone.style.touchAction="none",t.options.zone.style.msTouchAction="none"};d.prototype.begin=function(){var t=this,e=t.options;if(e.mode==="static"){var i=t.createNipple(e.position,t.manager.getIdentifier());i.add(),t.idles.push(i)}};d.prototype.createNipple=function(t,e){var i=this,s=i.manager.scroll,n={},r=i.options,a={x:i.parentIsFlex?s.x:s.x+i.box.left,y:i.parentIsFlex?s.y:s.y+i.box.top};if(t.x&&t.y)n={x:t.x-a.x,y:t.y-a.y};else if(t.top||t.right||t.bottom||t.left){var o=document.createElement("DIV");o.style.display="hidden",o.style.top=t.top,o.style.right=t.right,o.style.bottom=t.bottom,o.style.left=t.left,o.style.position="absolute",r.zone.appendChild(o);var p=o.getBoundingClientRect();r.zone.removeChild(o),n=t,t={x:p.left+s.x,y:p.top+s.y}}var l=new c(i,{color:r.color,size:r.size,threshold:r.threshold,fadeTime:r.fadeTime,dataOnly:r.dataOnly,restJoystick:r.restJoystick,restOpacity:r.restOpacity,mode:r.mode,identifier:e,position:t,zone:r.zone,frontPosition:{x:0,y:0},shape:r.shape});return r.dataOnly||(A(l.ui.el,n),A(l.ui.front,l.frontPosition)),i.nipples.push(l),i.trigger("added "+l.identifier+":added",l),i.manager.trigger("added "+l.identifier+":added",l),i.bindNipple(l),l};d.prototype.updateBox=function(){var t=this;t.box=t.options.zone.getBoundingClientRect()};d.prototype.bindNipple=function(t){var e=this,i,s=function(n,r){i=n.type+" "+r.id+":"+n.type,e.trigger(i,r)};t.on("destroyed",e.onDestroyed.bind(e)),t.on("shown hidden rested dir plain",s),t.on("dir:up dir:right dir:down dir:left",s),t.on("plain:up plain:right plain:down plain:left",s)};d.prototype.pressureFn=function(t,e,i){var s=this,n=0;clearInterval(s.pressureIntervals[i]),s.pressureIntervals[i]=setInterval(function(){var r=t.force||t.pressure||t.webkitForce||0;r!==n&&(e.trigger("pressure",r),s.trigger("pressure "+e.identifier+":pressure",r),n=r)}.bind(s),100)};d.prototype.onstart=function(t){var e=this,i=e.options,s=t;t=J(t),e.updateBox();var n=function(r){e.actives.length<i.maxNumberOfNipples?e.processOnStart(r):s.type.match(/^touch/)&&(Object.keys(e.manager.ids).forEach(function(a){if(Object.values(s.touches).findIndex(function(p){return p.identifier===a})<0){var o=[t[0]];o.identifier=a,e.processOnEnd(o)}}),e.actives.length<i.maxNumberOfNipples&&e.processOnStart(r))};return Y(t,n),e.manager.bindDocument(),!1};d.prototype.processOnStart=function(t){var e=this,i=e.options,s,n=e.manager.getIdentifier(t),r=t.force||t.pressure||t.webkitForce||0,a={x:t.pageX,y:t.pageY},o=e.getOrCreate(n,a);o.identifier!==n&&e.manager.removeIdentifier(o.identifier),o.identifier=n;var p=function(f){f.trigger("start",f),e.trigger("start "+f.id+":start",f),f.show(),r>0&&e.pressureFn(t,f,f.identifier),e.processOnMove(t)};if((s=e.idles.indexOf(o))>=0&&e.idles.splice(s,1),e.actives.push(o),e.ids.push(o.identifier),i.mode!=="semi")p(o);else{var l=_(a,o.position);if(l<=i.catchDistance)p(o);else{o.destroy(),e.processOnStart(t);return}}return o};d.prototype.getOrCreate=function(t,e){var i=this,s=i.options,n;return/(semi|static)/.test(s.mode)?(n=i.idles[0],n?(i.idles.splice(0,1),n):s.mode==="semi"?i.createNipple(e,t):(console.warn("Coudln't find the needed nipple."),!1)):(n=i.createNipple(e,t),n)};d.prototype.processOnMove=function(t){var e=this,i=e.options,s=e.manager.getIdentifier(t),n=e.nipples.get(s),r=e.manager.scroll;if(!fe(t)){this.processOnEnd(t);return}if(!n){console.error("Found zombie joystick with ID "+s),e.manager.removeIdentifier(s);return}if(i.dynamicPage){var a=n.el.getBoundingClientRect();n.position={x:r.x+a.left,y:r.y+a.top}}n.identifier=s;var o=n.options.size/2,p={x:t.pageX,y:t.pageY};i.lockX&&(p.y=n.position.y),i.lockY&&(p.x=n.position.x);var l=_(p,n.position),f=de(p,n.position),R=E(f),V=l/o,U={distance:l,position:p},x,v;if(n.options.shape==="circle"?(x=Math.min(l,o),v=ce(n.position,x,f)):(v=me(p,n.position,o),x=_(v,n.position)),i.follow){if(l>o){let G=p.x-v.x,K=p.y-v.y;n.position.x+=G,n.position.y+=K,n.el.style.top=n.position.y-(e.box.top+r.y)+"px",n.el.style.left=n.position.x-(e.box.left+r.x)+"px",l=_(p,n.position)}}else p=v,l=x;var w=p.x-n.position.x,I=p.y-n.position.y;n.frontPosition={x:w,y:I},i.dataOnly||(n.ui.front.style.transform="translate("+w+"px,"+I+"px)");var y={identifier:n.identifier,position:p,force:V,pressure:t.force||t.pressure||t.webkitForce||0,distance:l,angle:{radian:R,degree:f},vector:{x:w/o,y:-I/o},raw:U,instance:n,lockX:i.lockX,lockY:i.lockY};y=n.computeDirection(y),y.angle={radian:E(180-f),degree:180-f},n.trigger("move",y),e.trigger("move "+n.id+":move",y)};d.prototype.processOnEnd=function(t){var e=this,i=e.options,s=e.manager.getIdentifier(t),n=e.nipples.get(s),r=e.manager.removeIdentifier(n.identifier);n&&(i.dataOnly||n.hide(function(){i.mode==="dynamic"&&(n.trigger("removed",n),e.trigger("removed "+n.id+":removed",n),e.manager.trigger("removed "+n.id+":removed",n),n.destroy())}),clearInterval(e.pressureIntervals[n.identifier]),n.resetDirection(),n.trigger("end",n),e.trigger("end "+n.id+":end",n),e.ids.indexOf(n.identifier)>=0&&e.ids.splice(e.ids.indexOf(n.identifier),1),e.actives.indexOf(n)>=0&&e.actives.splice(e.actives.indexOf(n),1),/(semi|static)/.test(i.mode)?e.idles.push(n):e.nipples.indexOf(n)>=0&&e.nipples.splice(e.nipples.indexOf(n),1),e.manager.unbindDocument(),/(semi|static)/.test(i.mode)&&(e.manager.ids[r.id]=r.identifier))};d.prototype.onDestroyed=function(t,e){var i=this;i.nipples.indexOf(e)>=0&&i.nipples.splice(i.nipples.indexOf(e),1),i.actives.indexOf(e)>=0&&i.actives.splice(i.actives.indexOf(e),1),i.idles.indexOf(e)>=0&&i.idles.splice(i.idles.indexOf(e),1),i.ids.indexOf(e.identifier)>=0&&i.ids.splice(i.ids.indexOf(e.identifier),1),i.manager.removeIdentifier(e.identifier),i.manager.unbindDocument()};d.prototype.destroy=function(){var t=this;t.unbindEvt(t.options.zone,"start"),t.nipples.forEach(function(i){i.destroy()});for(var e in t.pressureIntervals)t.pressureIntervals.hasOwnProperty(e)&&clearInterval(t.pressureIntervals[e]);t.trigger("destroyed",t.nipples),t.manager.unbindDocument(),t.off()};function h(t){var e=this;e.ids={},e.index=0,e.collections=[],e.scroll=L(),e.config(t),e.prepareCollections();var i=function(){var n;e.collections.forEach(function(r){r.forEach(function(a){n=a.el.getBoundingClientRect(),a.position={x:e.scroll.x+n.left,y:e.scroll.y+n.top}})})};b(window,"resize",function(){M(i)});var s=function(){e.scroll=L()};return b(window,"scroll",function(){M(s)}),e.collections}h.prototype=new u;h.constructor=h;h.prototype.prepareCollections=function(){var t=this;t.collections.create=t.create.bind(t),t.collections.on=t.on.bind(t),t.collections.off=t.off.bind(t),t.collections.destroy=t.destroy.bind(t),t.collections.get=function(e){var i;return t.collections.every(function(s){return i=s.get(e),!i}),i}};h.prototype.create=function(t){return this.createCollection(t)};h.prototype.createCollection=function(t){var e=this,i=new d(e,t);return e.bindCollection(i),e.collections.push(i),i};h.prototype.bindCollection=function(t){var e=this,i,s=function(n,r){i=n.type+" "+r.id+":"+n.type,e.trigger(i,r)};t.on("destroyed",e.onDestroyed.bind(e)),t.on("shown hidden rested dir plain",s),t.on("dir:up dir:right dir:down dir:left",s),t.on("plain:up plain:right plain:down plain:left",s)};h.prototype.bindDocument=function(){var t=this;t.binded||(t.bindEvt(document,"move").bindEvt(document,"end"),t.binded=!0)};h.prototype.unbindDocument=function(t){var e=this;(!Object.keys(e.ids).length||t===!0)&&(e.unbindEvt(document,"move").unbindEvt(document,"end"),e.binded=!1)};h.prototype.getIdentifier=function(t){var e;return t?(e=t.identifier===void 0?t.pointerId:t.identifier,e===void 0&&(e=this.latest||0)):e=this.index,this.ids[e]===void 0&&(this.ids[e]=this.index,this.index+=1),this.latest=e,this.ids[e]};h.prototype.removeIdentifier=function(t){var e={};for(var i in this.ids)if(this.ids[i]===t){e.id=i,e.identifier=this.ids[i],delete this.ids[i];break}return e};h.prototype.onmove=function(t){var e=this;return e.onAny("move",t),!1};h.prototype.onend=function(t){var e=this;return e.onAny("end",t),!1};h.prototype.oncancel=function(t){var e=this;return e.onAny("end",t),!1};h.prototype.onAny=function(t,e){var i=this,s,n="processOn"+t.charAt(0).toUpperCase()+t.slice(1);e=J(e);var r=function(o,p,l){l.ids.indexOf(p)>=0&&(l[n](o),o._found_=!0)},a=function(o){s=i.getIdentifier(o),Y(i.collections,r.bind(null,o,s)),o._found_||i.removeIdentifier(s)};return Y(e,a),!1};h.prototype.destroy=function(){var t=this;t.unbindDocument(!0),t.ids={},t.index=0,t.collections.forEach(function(e){e.destroy()}),t.off()};h.prototype.onDestroyed=function(t,e){var i=this;if(i.collections.indexOf(e)<0)return!1;i.collections.splice(i.collections.indexOf(e),1)};const F=new h,xe={create:function(t){return F.create(t)},factory:F};const _e={setup(){},data(){return{holdTime:0,interval:null,fps:10,holdTimeInterval:null,fnZoomKey:!1,lefClick:!1,oldMY:0,oldScale:0}},computed:{},async mounted(){this.oldScale=this.$parent.scale;var t=xe.create({zone:document.getElementById("panJoystick"),mode:"static",dynamicPage:!0,position:{right:"70%",bottom:"33%"},color:"#184e80"});const e=Math.floor(1e3/this.fps)+1;t.on("dir:up plain:up dir:left plain:left dir:down plain:down dir:right plain:right",(i,s)=>{clearInterval(this.interval),this.interval=null,this.holdTime=0;const n=this.$parent.scale>=1?this.$parent.scale*10:20/this.$parent.scale,r=this.$parent.scale>1?this.$parent.scale*15:20/this.$parent.scale;if(this.interval==null)switch(s.direction.angle){case"right":this.interval=setInterval(()=>{this.$parent.panX=this.$parent.panX-20-(this.holdTime*r+n),this.$parent.panInD3(this.$parent.panX,this.$parent.panY)},e);break;case"left":this.interval=setInterval(()=>{this.$parent.panX=this.$parent.panX+20+(this.holdTime*r+n),this.$parent.panInD3(this.$parent.panX,this.$parent.panY)},e);break;case"up":this.interval=setInterval(()=>{this.$parent.panY=this.$parent.panY+20+(this.holdTime*r+n),this.$parent.panInD3(this.$parent.panX,this.$parent.panY)},e);break;case"down":this.interval=setInterval(()=>{this.$parent.panY=this.$parent.panY-20-(this.holdTime*r+n),this.$parent.panInD3(this.$parent.panX,this.$parent.panY)},e);break}}).on("end",(i,s)=>{clearInterval(this.interval)}),t.on("start",(i,s)=>{this.holdTimeInterval=setInterval(()=>{this.holdTime+=1},300)}).on("end",(i,s)=>{clearInterval(this.holdTimeInterval),this.holdTime=0,this.interval=null}),this.$parent.$refs.canvas.addEventListener("keydown",i=>{if(this.interval==null){this.holdTimeInterval=setInterval(()=>{this.holdTime+=1},300);const s=this.$parent.scale>=1?this.$parent.scale/10:50/this.$parent.scale,n=this.$parent.scale>1?this.$parent.scale*15:10/this.$parent.scale;switch(i.code){case"ArrowRight":this.interval=setInterval(()=>{this.$parent.panX=this.$parent.panX-20-(this.holdTime*n+s),this.$parent.panInD3(this.$parent.panX,this.$parent.panY)},e);break;case"ArrowLeft":this.interval=setInterval(()=>{this.$parent.panX=this.$parent.panX+20+(this.holdTime*n+s),this.$parent.panInD3(this.$parent.panX,this.$parent.panY)},e);break;case"ArrowUp":this.interval=setInterval(()=>{this.$parent.panY=this.$parent.panY+20+(this.holdTime*n+s),this.$parent.panInD3(this.$parent.panX,this.$parent.panY)},e);break;case"ArrowDown":this.interval=setInterval(()=>{this.$parent.panY=this.$parent.panY-20-(this.holdTime*n+s),this.$parent.panInD3(this.$parent.panX,this.$parent.panY)},e);break;case"PageUp":this.interval=setInterval(()=>{this.$parent.scale=this.$parent.scale+.03;const r=this.oldScale/this.$parent.scale;let a=this.$parent.scale>=1?this.$parent.panX:this.$parent.panX*this.$parent.scale,o=this.$parent.scale>=1?this.$parent.panY:this.$parent.panY*this.$parent.scale;a=a*r,o=o*r,this.oldScale=this.$parent.scale,this.$parent.zoomInD3(this.$parent.scale,a,o),i.preventDefault()},50);break;case"PageDown":this.interval=setInterval(()=>{this.$parent.scale=this.$parent.scale-.03;const r=this.oldScale/this.$parent.scale;let a=this.$parent.scale>=1?this.$parent.panX:this.$parent.panX*this.$parent.scale,o=this.$parent.scale>=1?this.$parent.panY:this.$parent.panY*this.$parent.scale;a=a*r,o=o*r,this.oldScale=this.$parent.scale,this.$parent.zoomInD3(this.$parent.scale,a,o)},50);break}}(i.code.includes("Shift")||i.code.includes("Control"))&&(this.fnZoomKey=!0,i.preventDefault()),(i.code.includes("Arrow")||i.code.includes("Page"))&&i.preventDefault()},!1),this.$parent.$refs.canvas.addEventListener("keyup",i=>{clearInterval(this.interval),clearInterval(this.holdTimeInterval),this.interval=null,this.holdTime=0,(i.code.includes("Shift")||i.code.includes("Control"))&&(this.fnZoomKey=!1)},!1),this.$parent.$refs.canvas.addEventListener("mousemove",i=>{if(this.fnZoomKey)if(i.pageY<this.oldMY){this.$parent.scale+=.01;const s=this.oldScale/this.$parent.scale;let n=this.$parent.scale>=1?this.$parent.panX:this.$parent.panX*this.$parent.scale,r=this.$parent.scale>=1?this.$parent.panY:this.$parent.panY*this.$parent.scale;n=n*s,r=r*s,this.oldScale=this.$parent.scale,this.$parent.zoomInD3(this.$parent.scale,n,r)}else{this.$parent.scale-=.01;const s=this.oldScale/this.$parent.scale;let n=this.$parent.scale>=1?this.$parent.panX:this.$parent.panX*this.$parent.scale,r=this.$parent.scale>=1?this.$parent.panY:this.$parent.panY*this.$parent.scale;n=n*s,r=r*s,this.oldScale=this.$parent.scale,this.$parent.zoomInD3(this.$parent.scale,n,r)}this.oldMY=i.pageY})},watch:{},methods:{}},be=t=>(se("data-v-8d7b9986"),t=t(),re(),t),we={id:"controlsWrapper"},Ie=be(()=>S("div",{id:"panJoystick"},null,-1)),Oe=[Ie];function Te(t,e,i,s,n,r){return k(),P("div",we,Oe)}const Se=H(_e,[["render",Te],["__scopeId","data-v-8d7b9986"]]);export{Se as J,Pe as S};
