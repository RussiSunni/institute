import{S as w,r as P,c as R}from"./transform-9f729428.js";function z(n){return typeof n=="string"?new w([[document.querySelector(n)]],[document.documentElement]):new w([[n]],P)}function J(n){return z(R(n).call(document.documentElement))}const g=Math.PI,m=2*g,p=1e-6,A=m-p;function k(n){this._+=n[0];for(let t=1,i=n.length;t<i;++t)this._+=arguments[t]+n[t]}function q(n){let t=Math.floor(n);if(!(t>=0))throw new Error(`invalid digits: ${n}`);if(t>15)return k;const i=10**t;return function(e){this._+=e[0];for(let h=1,o=e.length;h<o;++h)this._+=Math.round(arguments[h]*i)/i+e[h]}}class L{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?k:q(t)}moveTo(t,i){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+i}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,i){this._append`L${this._x1=+t},${this._y1=+i}`}quadraticCurveTo(t,i,e,h){this._append`Q${+t},${+i},${this._x1=+e},${this._y1=+h}`}bezierCurveTo(t,i,e,h,o,a){this._append`C${+t},${+i},${+e},${+h},${this._x1=+o},${this._y1=+a}`}arcTo(t,i,e,h,o){if(t=+t,i=+i,e=+e,h=+h,o=+o,o<0)throw new Error(`negative radius: ${o}`);let a=this._x1,c=this._y1,l=e-t,s=h-i,r=a-t,_=c-i,u=r*r+_*_;if(this._x1===null)this._append`M${this._x1=t},${this._y1=i}`;else if(u>p)if(!(Math.abs(_*l-s*r)>p)||!o)this._append`L${this._x1=t},${this._y1=i}`;else{let $=e-a,d=h-c,y=l*l+s*s,C=$*$+d*d,M=Math.sqrt(y),v=Math.sqrt(u),b=o*Math.tan((g-Math.acos((y+u-C)/(2*M*v)))/2),x=b/v,T=b/M;Math.abs(x-1)>p&&this._append`L${t+x*r},${i+x*_}`,this._append`A${o},${o},0,0,${+(_*$>r*d)},${this._x1=t+T*l},${this._y1=i+T*s}`}}arc(t,i,e,h,o,a){if(t=+t,i=+i,e=+e,a=!!a,e<0)throw new Error(`negative radius: ${e}`);let c=e*Math.cos(h),l=e*Math.sin(h),s=t+c,r=i+l,_=1^a,u=a?h-o:o-h;this._x1===null?this._append`M${s},${r}`:(Math.abs(this._x1-s)>p||Math.abs(this._y1-r)>p)&&this._append`L${s},${r}`,e&&(u<0&&(u=u%m+m),u>A?this._append`A${e},${e},0,1,${_},${t-c},${i-l}A${e},${e},0,1,${_},${this._x1=s},${this._y1=r}`:u>p&&this._append`A${e},${e},0,${+(u>=g)},${_},${this._x1=t+e*Math.cos(o)},${this._y1=i+e*Math.sin(o)}`)}rect(t,i,e,h){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+i}h${e=+e}v${+h}h${-e}Z`}toString(){return this._}}function E(n){return function(){return n}}function B(n){let t=3;return n.digits=function(i){if(!arguments.length)return t;if(i==null)t=null;else{const e=Math.floor(i);if(!(e>=0))throw new RangeError(`invalid digits: ${i}`);t=e}return n},()=>new L(t)}var I=Array.prototype.slice;function N(n){return n[0]}function Z(n){return n[1]}function f(n,t){return[(t=+t)*Math.cos(n-=Math.PI/2),t*Math.sin(n)]}class H{constructor(t,i){this._context=t,this._x=i}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,i){switch(t=+t,i=+i,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,i,t,i):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+i)/2,t,this._y0,t,i);break}}this._x0=t,this._y0=i}}class Q{constructor(t){this._context=t}lineStart(){this._point=0}lineEnd(){}point(t,i){if(t=+t,i=+i,this._point===0)this._point=1;else{const e=f(this._x0,this._y0),h=f(this._x0,this._y0=(this._y0+i)/2),o=f(t,this._y0),a=f(t,i);this._context.moveTo(...e),this._context.bezierCurveTo(...h,...o,...a)}this._x0=t,this._y0=i}}function X(n){return new H(n,!0)}function j(n){return new Q(n)}function D(n){return n.source}function F(n){return n.target}function S(n){let t=D,i=F,e=N,h=Z,o=null,a=null,c=B(l);function l(){let s;const r=I.call(arguments),_=t.apply(this,r),u=i.apply(this,r);if(o==null&&(a=n(s=c())),a.lineStart(),r[0]=_,a.point(+e.apply(this,r),+h.apply(this,r)),r[0]=u,a.point(+e.apply(this,r),+h.apply(this,r)),a.lineEnd(),s)return a=null,s+""||null}return l.source=function(s){return arguments.length?(t=s,l):t},l.target=function(s){return arguments.length?(i=s,l):i},l.x=function(s){return arguments.length?(e=typeof s=="function"?s:E(+s),l):e},l.y=function(s){return arguments.length?(h=typeof s=="function"?s:E(+s),l):h},l.context=function(s){return arguments.length?(s==null?o=a=null:a=n(o=s),l):o},l}function K(){return S(X)}function O(){const n=S(j);return n.angle=n.x,delete n.x,n.radius=n.y,delete n.y,n}export{K as a,J as c,O as l,z as s};
