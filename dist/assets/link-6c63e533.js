import{S as w,r as P}from"./transform-9f729428.js";function F(n){return typeof n=="string"?new w([[document.querySelector(n)]],[document.documentElement]):new w([[n]],P)}const g=Math.PI,y=2*g,c=1e-6,R=y-c;function k(n){this._+=n[0];for(let t=1,i=n.length;t<i;++t)this._+=arguments[t]+n[t]}function z(n){let t=Math.floor(n);if(!(t>=0))throw new Error(`invalid digits: ${n}`);if(t>15)return k;const i=10**t;return function(e){this._+=e[0];for(let h=1,o=e.length;h<o;++h)this._+=Math.round(arguments[h]*i)/i+e[h]}}class A{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?k:z(t)}moveTo(t,i){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+i}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,i){this._append`L${this._x1=+t},${this._y1=+i}`}quadraticCurveTo(t,i,e,h){this._append`Q${+t},${+i},${this._x1=+e},${this._y1=+h}`}bezierCurveTo(t,i,e,h,o,l){this._append`C${+t},${+i},${+e},${+h},${this._x1=+o},${this._y1=+l}`}arcTo(t,i,e,h,o){if(t=+t,i=+i,e=+e,h=+h,o=+o,o<0)throw new Error(`negative radius: ${o}`);let l=this._x1,p=this._y1,a=e-t,s=h-i,r=l-t,_=p-i,u=r*r+_*_;if(this._x1===null)this._append`M${this._x1=t},${this._y1=i}`;else if(u>c)if(!(Math.abs(_*a-s*r)>c)||!o)this._append`L${this._x1=t},${this._y1=i}`;else{let $=e-l,d=h-p,M=a*a+s*s,C=$*$+d*d,m=Math.sqrt(M),v=Math.sqrt(u),b=o*Math.tan((g-Math.acos((M+u-C)/(2*m*v)))/2),x=b/v,T=b/m;Math.abs(x-1)>c&&this._append`L${t+x*r},${i+x*_}`,this._append`A${o},${o},0,0,${+(_*$>r*d)},${this._x1=t+T*a},${this._y1=i+T*s}`}}arc(t,i,e,h,o,l){if(t=+t,i=+i,e=+e,l=!!l,e<0)throw new Error(`negative radius: ${e}`);let p=e*Math.cos(h),a=e*Math.sin(h),s=t+p,r=i+a,_=1^l,u=l?h-o:o-h;this._x1===null?this._append`M${s},${r}`:(Math.abs(this._x1-s)>c||Math.abs(this._y1-r)>c)&&this._append`L${s},${r}`,e&&(u<0&&(u=u%y+y),u>R?this._append`A${e},${e},0,1,${_},${t-p},${i-a}A${e},${e},0,1,${_},${this._x1=s},${this._y1=r}`:u>c&&this._append`A${e},${e},0,${+(u>=g)},${_},${this._x1=t+e*Math.cos(o)},${this._y1=i+e*Math.sin(o)}`)}rect(t,i,e,h){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+i}h${e=+e}v${+h}h${-e}Z`}toString(){return this._}}function E(n){return function(){return n}}function q(n){let t=3;return n.digits=function(i){if(!arguments.length)return t;if(i==null)t=null;else{const e=Math.floor(i);if(!(e>=0))throw new RangeError(`invalid digits: ${i}`);t=e}return n},()=>new A(t)}var L=Array.prototype.slice;function B(n){return n[0]}function I(n){return n[1]}function f(n,t){return[(t=+t)*Math.cos(n-=Math.PI/2),t*Math.sin(n)]}class N{constructor(t,i){this._context=t,this._x=i}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,i){switch(t=+t,i=+i,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,i):this._context.moveTo(t,i);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,i,t,i):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+i)/2,t,this._y0,t,i);break}}this._x0=t,this._y0=i}}class Z{constructor(t){this._context=t}lineStart(){this._point=0}lineEnd(){}point(t,i){if(t=+t,i=+i,this._point===0)this._point=1;else{const e=f(this._x0,this._y0),h=f(this._x0,this._y0=(this._y0+i)/2),o=f(t,this._y0),l=f(t,i);this._context.moveTo(...e),this._context.bezierCurveTo(...h,...o,...l)}this._x0=t,this._y0=i}}function H(n){return new N(n,!0)}function Q(n){return new Z(n)}function X(n){return n.source}function j(n){return n.target}function S(n){let t=X,i=j,e=B,h=I,o=null,l=null,p=q(a);function a(){let s;const r=L.call(arguments),_=t.apply(this,r),u=i.apply(this,r);if(o==null&&(l=n(s=p())),l.lineStart(),r[0]=_,l.point(+e.apply(this,r),+h.apply(this,r)),r[0]=u,l.point(+e.apply(this,r),+h.apply(this,r)),l.lineEnd(),s)return l=null,s+""||null}return a.source=function(s){return arguments.length?(t=s,a):t},a.target=function(s){return arguments.length?(i=s,a):i},a.x=function(s){return arguments.length?(e=typeof s=="function"?s:E(+s),a):e},a.y=function(s){return arguments.length?(h=typeof s=="function"?s:E(+s),a):h},a.context=function(s){return arguments.length?(s==null?o=l=null:l=n(o=s),a):o},a}function G(){return S(H)}function J(){const n=S(Q);return n.angle=n.x,delete n.x,n.radius=n.y,delete n.y,n}export{G as a,J as l,F as s};
