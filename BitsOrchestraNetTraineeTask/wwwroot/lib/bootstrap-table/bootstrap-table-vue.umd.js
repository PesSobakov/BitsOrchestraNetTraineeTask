(function(X,oe){typeof exports=="object"&&typeof module<"u"?module.exports=oe():typeof define=="function"&&define.amd?define(oe):(X=typeof globalThis<"u"?globalThis:X||self,X.BootstrapTable=oe())})(this,function(){"use strict";var X={};/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function oe(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const I=X.NODE_ENV!=="production"?Object.freeze({}):{},fn=X.NODE_ENV!=="production"?Object.freeze([]):[],ce=()=>{},pn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),R=Object.assign,dn=Object.prototype.hasOwnProperty,w=(e,t)=>dn.call(e,t),b=Array.isArray,k=e=>ge(e)==="[object Map]",hn=e=>ge(e)==="[object Set]",S=e=>typeof e=="function",$=e=>typeof e=="string",le=e=>typeof e=="symbol",v=e=>e!==null&&typeof e=="object",gn=e=>(v(e)||S(e))&&S(e.then)&&S(e.catch),_n=Object.prototype.toString,ge=e=>_n.call(e),mt=e=>ge(e).slice(8,-1),mn=e=>ge(e)==="[object Object]",ze=e=>$(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,bn=(e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))})(e=>e.charAt(0).toUpperCase()+e.slice(1)),q=(e,t)=>!Object.is(e,t),En=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})};let bt;const Et=()=>bt||(bt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Le(e){if(b(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=$(r)?On(r):Le(r);if(s)for(const i in s)t[i]=s[i]}return t}else if($(e)||v(e))return e}const wn=/;(?![^(]*\))/g,Nn=/:([^]+)/,Sn=/\/\*[^]*?\*\//g;function On(e){const t={};return e.replace(Sn,"").split(wn).forEach(n=>{if(n){const r=n.split(Nn);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ue(e){let t="";if($(e))t=e;else if(b(e))for(let n=0;n<e.length;n++){const r=Ue(e[n]);r&&(t+=r+" ")}else if(v(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}var E={};function K(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let g;const Be=new WeakSet;class yn{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Be.has(this)&&(Be.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||xn(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yt(this),Nt(this);const t=g,n=P;g=this,P=!0;try{return this.fn()}finally{E.NODE_ENV!=="production"&&g!==this&&K("Active effect was not restored correctly - this is likely a Vue internal bug."),St(this),g=t,P=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ge(t);this.deps=this.depsTail=void 0,yt(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Be.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ye(this)&&this.run()}get dirty(){return Ye(this)}}let wt=0,ee;function xn(e){e.flags|=8,e.next=ee,ee=e}function Je(){wt++}function qe(){if(--wt>0)return;let e;for(;ee;){let t=ee,n;for(;t;)t.flags&1||(t.flags&=-9),t=t.next;for(t=ee,ee=void 0;t;){if(n=t.next,t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Nt(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function St(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ge(r),Dn(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function Ye(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(vn(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function vn(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===be))return;e.globalVersion=be;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Ye(e)){e.flags&=-3;return}const n=g,r=P;g=e,P=!0;try{Nt(e);const s=e.fn(e._value);(t.version===0||q(s,e._value))&&(e._value=s,t.version++)}catch(s){throw t.version++,s}finally{g=n,P=r,St(e),e.flags&=-3}}function Ge(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r),E.NODE_ENV!=="production"&&n.subsHead===e&&(n.subsHead=s),!n.subs&&n.computed){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ge(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Dn(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let P=!0;const Ot=[];function _e(){Ot.push(P),P=!1}function me(){const e=Ot.pop();P=e===void 0?!0:e}function yt(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=g;g=void 0;try{t()}finally{g=n}}}let be=0;class Tn{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0,E.NODE_ENV!=="production"&&(this.subsHead=void 0)}track(t){if(!g||!P||g===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==g)n=this.activeLink=new Tn(g,this),g.deps?(n.prevDep=g.depsTail,g.depsTail.nextDep=n,g.depsTail=n):g.deps=g.depsTail=n,xt(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=g.depsTail,n.nextDep=void 0,g.depsTail.nextDep=n,g.depsTail=n,g.deps===n&&(g.deps=r)}return E.NODE_ENV!=="production"&&g.onTrack&&g.onTrack(R({effect:g},t)),n}trigger(t){this.version++,be++,this.notify(t)}notify(t){Je();try{if(E.NODE_ENV!=="production")for(let n=this.subsHead;n;n=n.nextSub)n.sub.onTrigger&&!(n.sub.flags&8)&&n.sub.onTrigger(R({effect:n.sub},t));for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{qe()}}}function xt(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)xt(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),E.NODE_ENV!=="production"&&e.dep.subsHead===void 0&&(e.dep.subsHead=e),e.dep.subs=e}}const Qe=new WeakMap,Y=Symbol(E.NODE_ENV!=="production"?"Object iterate":""),Ze=Symbol(E.NODE_ENV!=="production"?"Map keys iterate":""),ae=Symbol(E.NODE_ENV!=="production"?"Array iterate":"");function y(e,t,n){if(P&&g){let r=Qe.get(e);r||Qe.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new Vn),s.target=e,s.map=r,s.key=n),E.NODE_ENV!=="production"?s.track({target:e,type:t,key:n}):s.track()}}function z(e,t,n,r,s,i){const o=Qe.get(e);if(!o){be++;return}const l=a=>{a&&(E.NODE_ENV!=="production"?a.trigger({target:e,type:t,key:n,newValue:r,oldValue:s,oldTarget:i}):a.trigger())};if(Je(),t==="clear")o.forEach(l);else{const a=b(e),f=a&&ze(n);if(a&&n==="length"){const _=Number(r);o.forEach((c,u)=>{(u==="length"||u===ae||!le(u)&&u>=_)&&l(c)})}else switch(n!==void 0&&l(o.get(n)),f&&l(o.get(ae)),t){case"add":a?f&&l(o.get("length")):(l(o.get(Y)),k(e)&&l(o.get(Ze)));break;case"delete":a||(l(o.get(Y)),k(e)&&l(o.get(Ze)));break;case"set":k(e)&&l(o.get(Y));break}}qe()}function te(e){const t=p(e);return t===e?t:(y(t,"iterate",ae),T(e)?t:t.map(V))}function Xe(e){return y(e=p(e),"iterate",ae),e}const In={__proto__:null,[Symbol.iterator](){return ke(this,Symbol.iterator,V)},concat(...e){return te(this).concat(...e.map(t=>b(t)?te(t):t))},entries(){return ke(this,"entries",e=>(e[1]=V(e[1]),e))},every(e,t){return j(this,"every",e,t,void 0,arguments)},filter(e,t){return j(this,"filter",e,t,n=>n.map(V),arguments)},find(e,t){return j(this,"find",e,t,V,arguments)},findIndex(e,t){return j(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return j(this,"findLast",e,t,V,arguments)},findLastIndex(e,t){return j(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return j(this,"forEach",e,t,void 0,arguments)},includes(...e){return et(this,"includes",e)},indexOf(...e){return et(this,"indexOf",e)},join(e){return te(this).join(e)},lastIndexOf(...e){return et(this,"lastIndexOf",e)},map(e,t){return j(this,"map",e,t,void 0,arguments)},pop(){return ue(this,"pop")},push(...e){return ue(this,"push",e)},reduce(e,...t){return vt(this,"reduce",e,t)},reduceRight(e,...t){return vt(this,"reduceRight",e,t)},shift(){return ue(this,"shift")},some(e,t){return j(this,"some",e,t,void 0,arguments)},splice(...e){return ue(this,"splice",e)},toReversed(){return te(this).toReversed()},toSorted(e){return te(this).toSorted(e)},toSpliced(...e){return te(this).toSpliced(...e)},unshift(...e){return ue(this,"unshift",e)},values(){return ke(this,"values",V)}};function ke(e,t,n){const r=Xe(e),s=r[t]();return r!==e&&!T(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Rn=Array.prototype;function j(e,t,n,r,s,i){const o=Xe(e),l=o!==e&&!T(e),a=o[t];if(a!==Rn[t]){const c=a.apply(e,i);return l?V(c):c}let f=n;o!==e&&(l?f=function(c,u){return n.call(this,V(c),u,e)}:n.length>2&&(f=function(c,u){return n.call(this,c,u,e)}));const _=a.call(o,f,r);return l&&s?s(_):_}function vt(e,t,n,r){const s=Xe(e);let i=n;return s!==e&&(T(e)?n.length>3&&(i=function(o,l,a){return n.call(this,o,l,a,e)}):i=function(o,l,a){return n.call(this,o,V(l),a,e)}),s[t](i,...r)}function et(e,t,n){const r=p(e);y(r,"iterate",ae);const s=r[t](...n);return(s===-1||s===!1)&&ve(n[0])?(n[0]=p(n[0]),r[t](...n)):s}function ue(e,t,n=[]){_e(),Je();const r=p(e)[t].apply(e,n);return qe(),me(),r}const Cn=oe("__proto__,__v_isRef,__isVue"),Dt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(le));function $n(e){le(e)||(e=String(e));const t=p(this);return y(t,"has",e),t.hasOwnProperty(e)}class Tt{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Ft:Mt:i?Jn:At).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=b(t);if(!s){let a;if(o&&(a=In[n]))return a;if(n==="hasOwnProperty")return $n}const l=Reflect.get(t,n,D(t)?t:r);return(le(n)?Dt.has(n):Cn(n))||(s||y(t,"get",n),i)?l:D(l)?o&&ze(n)?l:l.value:v(l)?s?Ht(l):jt(l):l}}class Pn extends Tt{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const a=U(i);if(!T(r)&&!U(r)&&(i=p(i),r=p(r)),!b(t)&&D(i)&&!D(r))return a?!1:(i.value=r,!0)}const o=b(t)&&ze(n)?Number(n)<t.length:w(t,n),l=Reflect.set(t,n,r,D(t)?t:s);return t===p(s)&&(o?q(r,i)&&z(t,"set",n,r,i):z(t,"add",n,r)),l}deleteProperty(t,n){const r=w(t,n),s=t[n],i=Reflect.deleteProperty(t,n);return i&&r&&z(t,"delete",n,void 0,s),i}has(t,n){const r=Reflect.has(t,n);return(!le(n)||!Dt.has(n))&&y(t,"has",n),r}ownKeys(t){return y(t,"iterate",b(t)?"length":Y),Reflect.ownKeys(t)}}class Vt extends Tt{constructor(t=!1){super(!0,t)}set(t,n){return E.NODE_ENV!=="production"&&K(`Set operation on key "${String(n)}" failed: target is readonly.`,t),!0}deleteProperty(t,n){return E.NODE_ENV!=="production"&&K(`Delete operation on key "${String(n)}" failed: target is readonly.`,t),!0}}const An=new Pn,Mn=new Vt,Fn=new Vt(!0),tt=e=>e,Ee=e=>Reflect.getPrototypeOf(e);function we(e,t,n=!1,r=!1){e=e.__v_raw;const s=p(e),i=p(t);n||(q(t,i)&&y(s,"get",t),y(s,"get",i));const{has:o}=Ee(s),l=r?tt:n?st:V;if(o.call(s,t))return l(e.get(t));if(o.call(s,i))return l(e.get(i));e!==s&&e.get(t)}function Ne(e,t=!1){const n=this.__v_raw,r=p(n),s=p(e);return t||(q(e,s)&&y(r,"has",e),y(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Se(e,t=!1){return e=e.__v_raw,!t&&y(p(e),"iterate",Y),Reflect.get(e,"size",e)}function It(e,t=!1){!t&&!T(e)&&!U(e)&&(e=p(e));const n=p(this);return Ee(n).has.call(n,e)||(n.add(e),z(n,"add",e,e)),this}function Rt(e,t,n=!1){!n&&!T(t)&&!U(t)&&(t=p(t));const r=p(this),{has:s,get:i}=Ee(r);let o=s.call(r,e);o?E.NODE_ENV!=="production"&&Pt(r,s,e):(e=p(e),o=s.call(r,e));const l=i.call(r,e);return r.set(e,t),o?q(t,l)&&z(r,"set",e,t,l):z(r,"add",e,t),this}function Ct(e){const t=p(this),{has:n,get:r}=Ee(t);let s=n.call(t,e);s?E.NODE_ENV!=="production"&&Pt(t,n,e):(e=p(e),s=n.call(t,e));const i=r?r.call(t,e):void 0,o=t.delete(e);return s&&z(t,"delete",e,void 0,i),o}function $t(){const e=p(this),t=e.size!==0,n=E.NODE_ENV!=="production"?k(e)?new Map(e):new Set(e):void 0,r=e.clear();return t&&z(e,"clear",void 0,void 0,n),r}function Oe(e,t){return function(r,s){const i=this,o=i.__v_raw,l=p(o),a=t?tt:e?st:V;return!e&&y(l,"iterate",Y),o.forEach((f,_)=>r.call(s,a(f),a(_),i))}}function ye(e,t,n){return function(...r){const s=this.__v_raw,i=p(s),o=k(i),l=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,f=s[e](...r),_=n?tt:t?st:V;return!t&&y(i,"iterate",a?Ze:Y),{next(){const{value:c,done:u}=f.next();return u?{value:c,done:u}:{value:l?[_(c[0]),_(c[1])]:_(c),done:u}},[Symbol.iterator](){return this}}}}function L(e){return function(...t){if(E.NODE_ENV!=="production"){const n=t[0]?`on key "${t[0]}" `:"";K(`${bn(e)} operation ${n}failed: target is readonly.`,p(this))}return e==="delete"?!1:e==="clear"?void 0:this}}function jn(){const e={get(i){return we(this,i)},get size(){return Se(this)},has:Ne,add:It,set:Rt,delete:Ct,clear:$t,forEach:Oe(!1,!1)},t={get(i){return we(this,i,!1,!0)},get size(){return Se(this)},has:Ne,add(i){return It.call(this,i,!0)},set(i,o){return Rt.call(this,i,o,!0)},delete:Ct,clear:$t,forEach:Oe(!1,!0)},n={get(i){return we(this,i,!0)},get size(){return Se(this,!0)},has(i){return Ne.call(this,i,!0)},add:L("add"),set:L("set"),delete:L("delete"),clear:L("clear"),forEach:Oe(!0,!1)},r={get(i){return we(this,i,!0,!0)},get size(){return Se(this,!0)},has(i){return Ne.call(this,i,!0)},add:L("add"),set:L("set"),delete:L("delete"),clear:L("clear"),forEach:Oe(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=ye(i,!1,!1),n[i]=ye(i,!0,!1),t[i]=ye(i,!1,!0),r[i]=ye(i,!0,!0)}),[e,n,t,r]}const[Hn,Wn,Kn,zn]=jn();function nt(e,t){const n=t?e?zn:Kn:e?Wn:Hn;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(w(n,s)&&s in r?n:r,s,i)}const Ln={get:nt(!1,!1)},Un={get:nt(!0,!1)},Bn={get:nt(!0,!0)};function Pt(e,t,n){const r=p(n);if(r!==n&&t.call(e,r)){const s=mt(e);K(`Reactive ${s} contains both the raw and reactive versions of the same object${s==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const At=new WeakMap,Jn=new WeakMap,Mt=new WeakMap,Ft=new WeakMap;function qn(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yn(e){return e.__v_skip||!Object.isExtensible(e)?0:qn(mt(e))}function jt(e){return U(e)?e:rt(e,!1,An,Ln,At)}function Ht(e){return rt(e,!0,Mn,Un,Mt)}function xe(e){return rt(e,!0,Fn,Bn,Ft)}function rt(e,t,n,r,s){if(!v(e))return E.NODE_ENV!=="production"&&K(`value cannot be made ${t?"readonly":"reactive"}: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Yn(e);if(o===0)return e;const l=new Proxy(e,o===2?r:n);return s.set(e,l),l}function ne(e){return U(e)?ne(e.__v_raw):!!(e&&e.__v_isReactive)}function U(e){return!!(e&&e.__v_isReadonly)}function T(e){return!!(e&&e.__v_isShallow)}function ve(e){return e?!!e.__v_raw:!1}function p(e){const t=e&&e.__v_raw;return t?p(t):e}function Gn(e){return!w(e,"__v_skip")&&Object.isExtensible(e)&&En(e,"__v_skip",!0),e}const V=e=>v(e)?jt(e):e,st=e=>v(e)?Ht(e):e;function D(e){return e?e.__v_isRef===!0:!1}function Qn(e){return D(e)?e.value:e}const Zn={get:(e,t,n)=>t==="__v_raw"?e:Qn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return D(s)&&!D(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Xn(e){return ne(e)?e:new Proxy(e,Zn)}const De={},Te=new WeakMap;let G;function kn(e,t=!1,n=G){if(n){let r=Te.get(n);r||Te.set(n,r=[]),r.push(e)}else E.NODE_ENV!=="production"&&!t&&K("onWatcherCleanup() was called when there was no active watcher to associate with.")}function er(e,t,n=I){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:a}=n,f=h=>{(n.onWarn||K)("Invalid watch source: ",h,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},_=h=>s?h:T(h)||s===!1||s===0?B(h,1):B(h);let c,u,m,O,M=!1,We=!1;if(D(e)?(u=()=>e.value,M=T(e)):ne(e)?(u=()=>_(e),M=!0):b(e)?(We=!0,M=e.some(h=>ne(h)||T(h)),u=()=>e.map(h=>{if(D(h))return h.value;if(ne(h))return _(h);if(S(h))return a?a(h,2):h();E.NODE_ENV!=="production"&&f(h)})):S(e)?t?u=a?()=>a(e,2):e:u=()=>{if(m){_e();try{m()}finally{me()}}const h=G;G=c;try{return a?a(e,3,[O]):e(O)}finally{G=h}}:(u=ce,E.NODE_ENV!=="production"&&f(e)),t&&s){const h=u,F=s===!0?1/0:s;u=()=>B(h(),F)}const ie=()=>{c.stop()};if(i&&t){const h=t;t=(...F)=>{h(...F),ie()}}let Z=We?new Array(e.length).fill(De):De;const he=h=>{if(!(!(c.flags&1)||!c.dirty&&!h))if(t){const F=c.run();if(s||M||(We?F.some((_t,Ke)=>q(_t,Z[Ke])):q(F,Z))){m&&m();const _t=G;G=c;try{const Ke=[F,Z===De?void 0:We&&Z[0]===De?[]:Z,O];a?a(t,3,Ke):t(...Ke),Z=F}finally{G=_t}}}else c.run()};return l&&l(he),c=new yn(u),c.scheduler=o?()=>o(he,!1):he,O=h=>kn(h,!1,c),m=c.onStop=()=>{const h=Te.get(c);if(h){if(a)a(h,4);else for(const F of h)F();Te.delete(c)}},E.NODE_ENV!=="production"&&(c.onTrack=n.onTrack,c.onTrigger=n.onTrigger),t?r?he(!0):Z=c.run():o?o(he.bind(null,!0),!0):c.run(),ie.pause=c.pause.bind(c),ie.resume=c.resume.bind(c),ie.stop=ie,ie}function B(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,D(e))B(e.value,t,n);else if(b(e))for(let r=0;r<e.length;r++)B(e[r],t,n);else if(hn(e)||k(e))e.forEach(r=>{B(r,t,n)});else if(mn(e)){for(const r in e)B(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&B(e[r],t,n)}return e}var d={};const Q=[];function tr(e){Q.push(e)}function nr(){Q.pop()}let it=!1;function N(e,...t){if(it)return;it=!0,_e();const n=Q.length?Q[Q.length-1].component:null,r=n&&n.appContext.config.warnHandler,s=rr();if(r)Ve(r,n,11,[e+t.map(i=>{var o,l;return(l=(o=i.toString)==null?void 0:o.call(i))!=null?l:JSON.stringify(i)}).join(""),n&&n.proxy,s.map(({vnode:i})=>`at <${an(n,i.type)}>`).join(`
`),s]);else{const i=[`[Vue warn]: ${e}`,...t];s.length&&i.push(`
`,...sr(s)),console.warn(...i)}me(),it=!1}function rr(){let e=Q[Q.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const r=e.component&&e.component.parent;e=r&&r.vnode}return t}function sr(e){const t=[];return e.forEach((n,r)=>{t.push(...r===0?[]:[`
`],...ir(n))}),t}function ir({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",r=e.component?e.component.parent==null:!1,s=` at <${an(e.component,e.type,r)}`,i=">"+n;return e.props?[s,...or(e.props),i]:[s+i]}function or(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(r=>{t.push(...Wt(r,e[r]))}),n.length>3&&t.push(" ..."),t}function Wt(e,t,n){return $(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:D(t)?(t=Wt(e,p(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):S(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=p(t),n?t:[`${e}=`,t])}const Kt={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush",15:"component update",16:"app unmount cleanup function"};function Ve(e,t,n,r){try{return r?e(...r):e()}catch(s){ot(s,t,n)}}function zt(e,t,n,r){if(S(e)){const s=Ve(e,t,n,r);return s&&gn(s)&&s.catch(i=>{ot(i,t,n)}),s}if(b(e)){const s=[];for(let i=0;i<e.length;i++)s.push(zt(e[i],t,n,r));return s}else d.NODE_ENV!=="production"&&N(`Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`)}function ot(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||I;if(t){let l=t.parent;const a=t.proxy,f=d.NODE_ENV!=="production"?Kt[n]:`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const _=l.ec;if(_){for(let c=0;c<_.length;c++)if(_[c](e,a,f)===!1)return}l=l.parent}if(i){_e(),Ve(i,null,10,[e,a,f]),me();return}}cr(e,n,s,r,o)}function cr(e,t,n,r=!0,s=!1){if(d.NODE_ENV!=="production"){const i=Kt[t];if(n&&tr(n),N(`Unhandled error${i?` during execution of ${i}`:""}`),n&&nr(),r)throw e;console.error(e)}else{if(s)throw e;console.error(e)}}let Ie=!1,ct=!1;const C=[];let H=0;const re=[];let J=null,se=0;const Lt=Promise.resolve();let lt=null;const lr=100;function ar(e){const t=lt||Lt;return e?t.then(this?e.bind(this):e):t}function ur(e){let t=Ie?H+1:0,n=C.length;for(;t<n;){const r=t+n>>>1,s=C[r],i=fe(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function at(e){if(!(e.flags&1)){const t=fe(e),n=C[C.length-1];!n||!(e.flags&2)&&t>=fe(n)?C.push(e):C.splice(ur(t),0,e),e.flags|=1,Ut()}}function Ut(){!Ie&&!ct&&(ct=!0,lt=Lt.then(Jt))}function Bt(e){b(e)?re.push(...e):J&&e.id===-1?J.splice(se+1,0,e):e.flags&1||(re.push(e),e.flags|=1),Ut()}function fr(e){if(re.length){const t=[...new Set(re)].sort((n,r)=>fe(n)-fe(r));if(re.length=0,J){J.push(...t);return}for(J=t,d.NODE_ENV!=="production"&&(e=e||new Map),se=0;se<J.length;se++){const n=J[se];d.NODE_ENV!=="production"&&qt(e,n)||(n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2)}J=null,se=0}}const fe=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Jt(e){ct=!1,Ie=!0,d.NODE_ENV!=="production"&&(e=e||new Map);const t=d.NODE_ENV!=="production"?n=>qt(e,n):ce;try{for(H=0;H<C.length;H++){const n=C[H];if(n&&!(n.flags&8)){if(d.NODE_ENV!=="production"&&t(n))continue;n.flags&4&&(n.flags&=-2),Ve(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2)}}}finally{for(;H<C.length;H++){const n=C[H];n&&(n.flags&=-2)}H=0,C.length=0,fr(e),Ie=!1,lt=null,(C.length||re.length)&&Jt(e)}}function qt(e,t){const n=e.get(t)||0;if(n>lr){const r=t.i,s=r&&ln(r.type);return ot(`Maximum recursive updates exceeded${s?` in component <${s}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,null,10),!0}return e.set(t,n+1),!1}const ut=new Map;d.NODE_ENV!=="production"&&(Et().__VUE_HMR_RUNTIME__={createRecord:ft(pr),rerender:ft(dr),reload:ft(hr)});const Re=new Map;function pr(e,t){return Re.has(e)?!1:(Re.set(e,{initialDef:Ce(t),instances:new Set}),!0)}function Ce(e){return un(e)?e.__vccOpts:e}function dr(e,t){const n=Re.get(e);n&&(n.initialDef.render=t,[...n.instances].forEach(r=>{t&&(r.render=t,Ce(r.type).render=t),r.renderCache=[],r.update()}))}function hr(e,t){const n=Re.get(e);if(!n)return;t=Ce(t),Yt(n.initialDef,t);const r=[...n.instances];for(let s=0;s<r.length;s++){const i=r[s],o=Ce(i.type);let l=ut.get(o);l||(o!==n.initialDef&&Yt(o,t),ut.set(o,l=new Set)),l.add(i),i.appContext.propsCache.delete(i.type),i.appContext.emitsCache.delete(i.type),i.appContext.optionsCache.delete(i.type),i.ceReload?(l.add(i),i.ceReload(t.styles),l.delete(i)):i.parent?at(()=>{i.parent.update(),l.delete(i)}):i.appContext.reload?i.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required."),i.root.ce&&i!==i.root&&i.root.ce._removeChildStyle(o)}Bt(()=>{ut.clear()})}function Yt(e,t){R(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function ft(e){return(t,n)=>{try{return e(t,n)}catch(r){console.error(r),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let W=null,gr=null;const _r=e=>e.__isTeleport;function Gt(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Gt(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}const mr=Symbol.for("v-ndc"),pt=e=>e?Yr(e)?Gr(e):pt(e.parent):null,pe=R(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>d.NODE_ENV!=="production"?xe(e.props):e.props,$attrs:e=>d.NODE_ENV!=="production"?xe(e.attrs):e.attrs,$slots:e=>d.NODE_ENV!=="production"?xe(e.slots):e.slots,$refs:e=>d.NODE_ENV!=="production"?xe(e.refs):e.refs,$parent:e=>pt(e.parent),$root:e=>pt(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>wr(e),$forceUpdate:e=>e.f||(e.f=()=>{at(e.update)}),$nextTick:e=>e.n||(e.n=ar.bind(e.proxy)),$watch:e=>Rr.bind(e)}),br=e=>e==="_"||e==="$",dt=(e,t)=>e!==I&&!e.__isScriptSetup&&w(e,t),Er={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:a}=e;if(d.NODE_ENV!=="production"&&t==="__isVue")return!0;let f;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(dt(r,t))return o[t]=1,r[t];if(s!==I&&w(s,t))return o[t]=2,s[t];if((f=e.propsOptions[0])&&w(f,t))return o[t]=3,i[t];if(n!==I&&w(n,t))return o[t]=4,n[t];o[t]=0}}const _=pe[t];let c,u;if(_)return t==="$attrs"?y(e.attrs,"get",""):d.NODE_ENV!=="production"&&t==="$slots"&&y(e,"get",t),_(e);if((c=l.__cssModules)&&(c=c[t]))return c;if(n!==I&&w(n,t))return o[t]=4,n[t];if(u=a.config.globalProperties,w(u,t))return u[t];d.NODE_ENV!=="production"&&W&&(!$(t)||t.indexOf("__v")!==0)&&(s!==I&&br(t[0])&&w(s,t)?N(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===W&&N(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return dt(s,t)?(s[t]=n,!0):d.NODE_ENV!=="production"&&s.__isScriptSetup&&w(s,t)?(N(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):r!==I&&w(r,t)?(r[t]=n,!0):w(e.props,t)?(d.NODE_ENV!=="production"&&N(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(d.NODE_ENV!=="production"&&N(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(d.NODE_ENV!=="production"&&t in e.appContext.config.globalProperties?Object.defineProperty(i,t,{enumerable:!0,configurable:!0,value:n}):i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||e!==I&&w(e,o)||dt(t,o)||(l=i[0])&&w(l,o)||w(r,o)||w(pe,o)||w(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:w(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};d.NODE_ENV!=="production"&&(Er.ownKeys=e=>(N("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e)));function Qt(e){return b(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function wr(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,l=i.get(t);let a;return l?a=l:!s.length&&!n&&!r?a=t:(a={},s.length&&s.forEach(f=>$e(a,f,o,!0)),$e(a,t,o)),v(t)&&i.set(t,a),a}function $e(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&$e(e,i,n,!0),s&&s.forEach(o=>$e(e,o,n,!0));for(const o in t)if(r&&o==="expose")d.NODE_ENV!=="production"&&N('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const l=Nr[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const Nr={data:Zt,props:kt,emits:kt,methods:de,computed:de,beforeCreate:x,created:x,beforeMount:x,mounted:x,beforeUpdate:x,updated:x,beforeDestroy:x,beforeUnmount:x,destroyed:x,unmounted:x,activated:x,deactivated:x,errorCaptured:x,serverPrefetch:x,components:de,directives:de,watch:Or,provide:Zt,inject:Sr};function Zt(e,t){return t?e?function(){return R(S(e)?e.call(this,this):e,S(t)?t.call(this,this):t)}:t:e}function Sr(e,t){return de(Xt(e),Xt(t))}function Xt(e){if(b(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function x(e,t){return e?[...new Set([].concat(e,t))]:t}function de(e,t){return e?R(Object.create(null),e,t):t}function kt(e,t){return e?b(e)&&b(t)?[...new Set([...e,...t])]:R(Object.create(null),Qt(e),Qt(t??{})):t}function Or(e,t){if(!e)return t;if(!t)return e;const n=R(Object.create(null),e);for(const r in t)n[r]=x(e[r],t[r]);return n}let yr=null;function xr(e,t,n=!1){const r=Fe||W;if(r||yr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&S(t)?t.call(r&&r.proxy):t;d.NODE_ENV!=="production"&&N(`injection "${String(e)}" not found.`)}else d.NODE_ENV!=="production"&&N("inject() can only be used inside setup() or functional components.")}const vr={},en=e=>Object.getPrototypeOf(e)===vr,Dr=Pr,Tr=Symbol.for("v-scx"),Vr=()=>{{const e=xr(Tr);return e||d.NODE_ENV!=="production"&&N("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function Ir(e,t,n=I){const{immediate:r,deep:s,flush:i,once:o}=n;d.NODE_ENV!=="production"&&!t&&(r!==void 0&&N('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),s!==void 0&&N('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&N('watch() "once" option is only respected when using the watch(source, callback, options?) signature.'));const l=R({},n);d.NODE_ENV!=="production"&&(l.onWarn=N);let a;if(cn)if(i==="sync"){const u=Vr();a=u.__watcherHandles||(u.__watcherHandles=[])}else if(!t||r)l.once=!0;else{const u=()=>{};return u.stop=ce,u.resume=ce,u.pause=ce,u}const f=Fe;l.call=(u,m,O)=>zt(u,f,m,O);let _=!1;i==="post"?l.scheduler=u=>{Dr(u,f&&f.suspense)}:i!=="sync"&&(_=!0,l.scheduler=(u,m)=>{m?u():at(u)}),l.augmentJob=u=>{t&&(u.flags|=4),_&&(u.flags|=2,f&&(u.id=f.uid,u.i=f))};const c=er(e,t,l);return a&&a.push(c),c}function Rr(e,t,n){const r=this.proxy,s=$(e)?e.includes(".")?Cr(r,e):()=>r[e]:e.bind(r,r);let i;S(t)?i=t:(i=t.handler,n=t);const o=qr(this),l=Ir(s,i.bind(r),n);return o(),l}function Cr(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const $r=e=>e.__isSuspense;function Pr(e,t){t&&t.pendingBranch?b(e)?t.effects.push(...e):t.effects.push(e):Bt(e)}const tn=Symbol.for("v-fgt"),Ar=Symbol.for("v-txt"),Mr=Symbol.for("v-cmt"),Pe=[];let A=null;function Fr(e=!1){Pe.push(A=e?null:[])}function jr(){Pe.pop(),A=Pe[Pe.length-1]||null}function Hr(e){return e.dynamicChildren=A||fn,jr(),A&&A.push(e),e}function Wr(e,t,n,r,s,i){return Hr(rn(e,t,n,r,s,i,!0))}function Kr(e){return e?e.__v_isVNode===!0:!1}const zr=(...e)=>sn(...e),nn=({key:e})=>e??null,Ae=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?$(e)||D(e)||S(e)?{i:W,r:e,k:t,f:!!n}:e:null);function rn(e,t=null,n=null,r=0,s=null,i=e===tn?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&nn(t),ref:t&&Ae(t),scopeId:gr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:W};return l?(ht(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=$(n)?8:16),d.NODE_ENV!=="production"&&a.key!==a.key&&N("VNode created with invalid key (NaN). VNode type:",a.type),!o&&A&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&A.push(a),a}const Lr=d.NODE_ENV!=="production"?zr:sn;function sn(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===mr)&&(d.NODE_ENV!=="production"&&!e&&N(`Invalid vnode type when creating vnode: ${e}.`),e=Mr),Kr(e)){const l=Me(e,t,!0);return n&&ht(l,n),!i&&A&&(l.shapeFlag&6?A[A.indexOf(e)]=l:A.push(l)),l.patchFlag=-2,l}if(un(e)&&(e=e.__vccOpts),t){t=Ur(t);let{class:l,style:a}=t;l&&!$(l)&&(t.class=Ue(l)),v(a)&&(ve(a)&&!b(a)&&(a=R({},a)),t.style=Le(a))}const o=$(e)?1:$r(e)?128:_r(e)?64:v(e)?4:S(e)?2:0;return d.NODE_ENV!=="production"&&o&4&&ve(e)&&(e=p(e),N("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),rn(e,t,n,r,s,o,i,!0)}function Ur(e){return e?ve(e)||en(e)?R({},e):e:null}function Me(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:a}=e,f=t?Jr(s||{},t):s,_={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&nn(f),ref:t&&t.ref?n&&i?b(i)?i.concat(Ae(t)):[i,Ae(t)]:Ae(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:d.NODE_ENV!=="production"&&o===-1&&b(l)?l.map(on):l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==tn?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Me(e.ssContent),ssFallback:e.ssFallback&&Me(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&r&&Gt(_,a.clone(_)),_}function on(e){const t=Me(e);return b(e.children)&&(t.children=e.children.map(on)),t}function Br(e=" ",t=0){return Lr(Ar,null,e,t)}function ht(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(b(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),ht(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!en(t)?t._ctx=W:s===3&&W&&(W.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else S(t)?(t={default:t,_ctx:W},n=32):(t=String(t),r&64?(n=16,t=[Br(t)]):n=8);e.children=t,e.shapeFlag|=n}function Jr(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Ue([t.class,r.class]));else if(s==="style")t.style=Le([t.style,r.style]);else if(pn(s)){const i=t[s],o=r[s];o&&i!==o&&!(b(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}let Fe=null,gt;{const e=Et(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};gt=t("__VUE_INSTANCE_SETTERS__",n=>Fe=n),t("__VUE_SSR_SETTERS__",n=>cn=n)}const qr=e=>{const t=Fe;return gt(e),e.scope.on(),()=>{e.scope.off(),gt(t)}};function Yr(e){return e.vnode.shapeFlag&4}let cn=!1;function Gr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Xn(Gn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in pe)return pe[n](e)},has(t,n){return n in t||n in pe}})):e.proxy}const Qr=/(?:^|[-_])(\w)/g,Zr=e=>e.replace(Qr,t=>t.toUpperCase()).replace(/[-_]/g,"");function ln(e,t=!0){return S(e)?e.displayName||e.name:e.name||t&&e.__name}function an(e,t,n=!1){let r=ln(t);if(!r&&t.__file){const s=t.__file.match(/([^/\\]+)\.\w+$/);s&&(r=s[1])}if(!r&&e&&e.parent){const s=i=>{for(const o in i)if(i[o]===t)return o};r=s(e.components||e.parent.type.components)||s(e.appContext.components)}return r?Zr(r):n?"App":"Anonymous"}function un(e){return S(e)&&"__vccOpts"in e}function Xr(){if(d.NODE_ENV==="production"||typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#1677ff"},n={style:"color:#f5222d"},r={style:"color:#eb2f96"},s={__vue_custom_formatter:!0,header(c){return v(c)?c.__isVue?["div",e,"VueInstance"]:D(c)?["div",{},["span",e,_(c)],"<",l("_value"in c?c._value:c),">"]:ne(c)?["div",{},["span",e,T(c)?"ShallowReactive":"Reactive"],"<",l(c),`>${U(c)?" (readonly)":""}`]:U(c)?["div",{},["span",e,T(c)?"ShallowReadonly":"Readonly"],"<",l(c),">"]:null:null},hasBody(c){return c&&c.__isVue},body(c){if(c&&c.__isVue)return["div",{},...i(c.$)]}};function i(c){const u=[];c.type.props&&c.props&&u.push(o("props",p(c.props))),c.setupState!==I&&u.push(o("setup",c.setupState)),c.data!==I&&u.push(o("data",p(c.data)));const m=a(c,"computed");m&&u.push(o("computed",m));const O=a(c,"inject");return O&&u.push(o("injected",O)),u.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:c}]]),u}function o(c,u){return u=R({},u),Object.keys(u).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},c],["div",{style:"padding-left:1.25em"},...Object.keys(u).map(m=>["div",{},["span",r,m+": "],l(u[m],!1)])]]:["span",{}]}function l(c,u=!0){return typeof c=="number"?["span",t,c]:typeof c=="string"?["span",n,JSON.stringify(c)]:typeof c=="boolean"?["span",r,c]:v(c)?["object",{object:u?p(c):c}]:["span",n,String(c)]}function a(c,u){const m=c.type;if(S(m))return;const O={};for(const M in c.ctx)f(m,M,u)&&(O[M]=c.ctx[M]);return O}function f(c,u,m){const O=c[m];if(b(O)&&O.includes(u)||v(O)&&u in O||c.extends&&f(c.extends,u,m)||c.mixins&&c.mixins.some(M=>f(M,u,m)))return!0}function _(c){return T(c)?"ShallowRef":c.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(s):window.devtoolsFormatters=[s]}var kr={};function es(){Xr()}kr.NODE_ENV!=="production"&&es();const ts=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},je=window.jQuery,He=e=>e===void 0?e:je.fn.bootstrapTable.utils.extend(!0,Array.isArray(e)?[]:{},e),ns={name:"BootstrapTable",props:{columns:{type:Array,require:!0},data:{type:[Array,Object],default(){}},options:{type:Object,default(){return{}}}},data(){return{optionsChangedIdx:0}},mounted(){this.$table=je(this.$el),this.$table.on("all.bs.table",(e,t,n)=>{let r=je.fn.bootstrapTable.events[t];r=r.replace(/([A-Z])/g,"-$1").toLowerCase(),this.$emit("on-all",...n),this.$emit(r,...n)}),this._initTable()},methods:{_initTable(){const e={...He(this.options),columns:He(this.columns),data:He(this.data)};this._hasInit?this.refreshOptions(e):(this.$table.bootstrapTable(e),this._hasInit=!0)},...(()=>{const e={};for(const t of je.fn.bootstrapTable.methods)e[t]=function(...n){return this.$table.bootstrapTable(t,...n)};return e})()},watch:{options:{handler(){this.optionsChangedIdx++},deep:!0},columns:{handler(){this.optionsChangedIdx++},deep:!0},optionsChangedIdx(){this._initTable()},data:{handler(){this.load(He(this.data))},deep:!0}}};function rs(e,t,n,r,s,i){return Fr(),Wr("table")}return ts(ns,[["render",rs]])});
