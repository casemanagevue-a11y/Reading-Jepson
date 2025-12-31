const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginView-BjQfjx6D.js","assets/LoginView-Bv3d6269.css","assets/SignupView-CWaff01f.js","assets/SignupView-D-SYg6CD.css","assets/RoleSelectView-n2oM71KL.js","assets/RoleSelectView-byZdO66c.css","assets/AdminDashboard-DTCQzDQo.js","assets/AdminDashboard-BwSHEYPL.css","assets/TeacherDashboard-BShShxZV.js","assets/TeacherDashboard-BhbTx_tO.css","assets/StudentManagement-Bbz2I8AT.js","assets/useFunctions-6goJ2deY.js","assets/index.esm-jzqXJ46R.js","assets/googleClassroom-CUVceC9q.js","assets/StudentManagement-CqU0zINe.css","assets/WeekManagement-CDbli3Rs.js","assets/WeekManagement-DWPoHr8A.css","assets/WeekSetup-BZqZh4Nh.js","assets/libraryServices-Csy31S6H.js","assets/WeekSetup-sFRdBLXh.css","assets/LibraryManagement-C15Wsl7H.js","assets/LibraryManagement-C6bVBGJp.css","assets/WeekTemplateList-B8YdM5f_.js","assets/WeekTemplateList-RJfnPVEA.css","assets/WeekTemplateSetup-93bgoTpC.js","assets/WeekTemplateSetup-CRJEV_vh.css","assets/WeekAssignments-1ETQUfON.js","assets/WeekAssignments-nZQaToMl.css","assets/VisualAssignmentPlanner-CBjQf5jC.js","assets/VisualAssignmentPlanner-CcMPa9rV.css","assets/AssignmentCalendar-1mM04xNU.js","assets/AssignmentCalendar-Bvb7_NVw.css","assets/PrintMaterialsNew-CF-Vgd_D.js","assets/PrintMaterialsNew-CLPLHskZ.css","assets/AssessmentEntry-CZbqkcHm.js","assets/AssessmentEntry-D_jPcfUp.css","assets/SchoolCalendar-C5t2dkGt.js","assets/SchoolCalendar-BGjezGki.css","assets/CalendarImport-CtitvWwZ.js","assets/CalendarImport-Ba13dxeN.css","assets/SimpleCalendarSetup-CW5QAnzB.js","assets/SimpleCalendarSetup-BlUng1uC.css","assets/StudentDashboard-DN2acQke.js","assets/StudentDashboard-NFgWRXv-.css","assets/QuizTaking-tIfLdfXs.js","assets/QuizTaking-JTw3jbnU.css","assets/DailyActivity-BhGLvEsm.js","assets/DailyActivity-DEknkHYH.css","assets/GoogleClassroomCallback-BHSVaT91.js","assets/GoogleClassroomCallback-DVScY6ev.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Tl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ke={},cs=[],dn=()=>{},Kd=()=>!1,da=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Il=t=>t.startsWith("onUpdate:"),vt=Object.assign,wl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Y_=Object.prototype.hasOwnProperty,Re=(t,e)=>Y_.call(t,e),se=Array.isArray,ls=t=>Ui(t)==="[object Map]",ks=t=>Ui(t)==="[object Set]",Oh=t=>Ui(t)==="[object Date]",he=t=>typeof t=="function",Ge=t=>typeof t=="string",_n=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",Gd=t=>(Oe(t)||he(t))&&he(t.then)&&he(t.catch),zd=Object.prototype.toString,Ui=t=>zd.call(t),J_=t=>Ui(t).slice(8,-1),Qd=t=>Ui(t)==="[object Object]",Al=t=>Ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,li=Tl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},X_=/-\w/g,Kt=pa(t=>t.replace(X_,e=>e.slice(1).toUpperCase())),Z_=/\B([A-Z])/g,Wr=pa(t=>t.replace(Z_,"-$1").toLowerCase()),ma=pa(t=>t.charAt(0).toUpperCase()+t.slice(1)),uc=pa(t=>t?`on${ma(t)}`:""),lr=(t,e)=>!Object.is(t,e),Po=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Yd=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ga=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Nh;const _a=()=>Nh||(Nh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rl(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ge(r)?ry(r):Rl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ge(t)||Oe(t))return t}const ey=/;(?![^(]*\))/g,ty=/:([^]+)/,ny=/\/\*[^]*?\*\//g;function ry(t){const e={};return t.replace(ny,"").split(ey).forEach(n=>{if(n){const r=n.split(ty);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function bl(t){let e="";if(Ge(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const r=bl(t[n]);r&&(e+=r+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const sy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",iy=Tl(sy);function Jd(t){return!!t||t===""}function oy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Fr(t[r],e[r]);return n}function Fr(t,e){if(t===e)return!0;let n=Oh(t),r=Oh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=_n(t),r=_n(e),n||r)return t===e;if(n=se(t),r=se(e),n||r)return n&&r?oy(t,e):!1;if(n=Oe(t),r=Oe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Fr(t[o],e[o]))return!1}}return String(t)===String(e)}function Sl(t,e){return t.findIndex(n=>Fr(n,e))}const Xd=t=>!!(t&&t.__v_isRef===!0),Co=t=>Ge(t)?t:t==null?"":se(t)||Oe(t)&&(t.toString===zd||!he(t.toString))?Xd(t)?Co(t.value):JSON.stringify(t,Zd,2):String(t),Zd=(t,e)=>Xd(e)?Zd(t,e.value):ls(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[hc(r,i)+" =>"]=s,n),{})}:ks(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>hc(n))}:_n(e)?hc(e):Oe(e)&&!se(e)&&!Qd(e)?String(e):e,hc=(t,e="")=>{var n;return _n(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ct;class ay{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}}on(){++this._on===1&&(this.prevScope=Ct,Ct=this)}off(){this._on>0&&--this._on===0&&(Ct=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function cy(){return Ct}let Ne;const fc=new WeakSet;class ep{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ct&&Ct.active&&Ct.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fc.has(this)&&(fc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||np(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Dh(this),rp(this);const e=Ne,n=Xt;Ne=this,Xt=!0;try{return this.fn()}finally{sp(this),Ne=e,Xt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)kl(e);this.deps=this.depsTail=void 0,Dh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xc(this)&&this.run()}get dirty(){return xc(this)}}let tp=0,ui,hi;function np(t,e=!1){if(t.flags|=8,e){t.next=hi,hi=t;return}t.next=ui,ui=t}function Pl(){tp++}function Cl(){if(--tp>0)return;if(hi){let e=hi;for(hi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ui;){let e=ui;for(ui=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function rp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function sp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),kl(r),ly(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function xc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ip(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ip(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ii)||(t.globalVersion=Ii,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!xc(t))))return;t.flags|=2;const e=t.dep,n=Ne,r=Xt;Ne=t,Xt=!0;try{rp(t);const s=t.fn(t._value);(e.version===0||lr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ne=n,Xt=r,sp(t),t.flags&=-3}}function kl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)kl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ly(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Xt=!0;const op=[];function xn(){op.push(Xt),Xt=!1}function Ln(){const t=op.pop();Xt=t===void 0?!0:t}function Dh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ne;Ne=void 0;try{e()}finally{Ne=n}}}let Ii=0;class uy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ol{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ne||!Xt||Ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ne)n=this.activeLink=new uy(Ne,this),Ne.deps?(n.prevDep=Ne.depsTail,Ne.depsTail.nextDep=n,Ne.depsTail=n):Ne.deps=Ne.depsTail=n,ap(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ne.depsTail,n.nextDep=void 0,Ne.depsTail.nextDep=n,Ne.depsTail=n,Ne.deps===n&&(Ne.deps=r)}return n}trigger(e){this.version++,Ii++,this.notify(e)}notify(e){Pl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Cl()}}}function ap(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ap(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Lc=new WeakMap,xr=Symbol(""),Mc=Symbol(""),wi=Symbol("");function mt(t,e,n){if(Xt&&Ne){let r=Lc.get(t);r||Lc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ol),s.map=r,s.key=n),s.track()}}function bn(t,e,n,r,s,i){const o=Lc.get(t);if(!o){Ii++;return}const c=l=>{l&&l.trigger()};if(Pl(),e==="clear")o.forEach(c);else{const l=se(t),h=l&&Al(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===wi||!_n(g)&&g>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(wi)),e){case"add":l?h&&c(o.get("length")):(c(o.get(xr)),ls(t)&&c(o.get(Mc)));break;case"delete":l||(c(o.get(xr)),ls(t)&&c(o.get(Mc)));break;case"set":ls(t)&&c(o.get(xr));break}}Cl()}function ts(t){const e=Ae(t);return e===t?e:(mt(e,"iterate",wi),$t(t)?e:e.map(tn))}function ya(t){return mt(t=Ae(t),"iterate",wi),t}function er(t,e){return Mn(t)?Lr(t)?gs(tn(e)):gs(e):tn(e)}const hy={__proto__:null,[Symbol.iterator](){return dc(this,Symbol.iterator,t=>er(this,t))},concat(...t){return ts(this).concat(...t.map(e=>se(e)?ts(e):e))},entries(){return dc(this,"entries",t=>(t[1]=er(this,t[1]),t))},every(t,e){return wn(this,"every",t,e,void 0,arguments)},filter(t,e){return wn(this,"filter",t,e,n=>n.map(r=>er(this,r)),arguments)},find(t,e){return wn(this,"find",t,e,n=>er(this,n),arguments)},findIndex(t,e){return wn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return wn(this,"findLast",t,e,n=>er(this,n),arguments)},findLastIndex(t,e){return wn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return wn(this,"forEach",t,e,void 0,arguments)},includes(...t){return pc(this,"includes",t)},indexOf(...t){return pc(this,"indexOf",t)},join(t){return ts(this).join(t)},lastIndexOf(...t){return pc(this,"lastIndexOf",t)},map(t,e){return wn(this,"map",t,e,void 0,arguments)},pop(){return Ys(this,"pop")},push(...t){return Ys(this,"push",t)},reduce(t,...e){return Vh(this,"reduce",t,e)},reduceRight(t,...e){return Vh(this,"reduceRight",t,e)},shift(){return Ys(this,"shift")},some(t,e){return wn(this,"some",t,e,void 0,arguments)},splice(...t){return Ys(this,"splice",t)},toReversed(){return ts(this).toReversed()},toSorted(t){return ts(this).toSorted(t)},toSpliced(...t){return ts(this).toSpliced(...t)},unshift(...t){return Ys(this,"unshift",t)},values(){return dc(this,"values",t=>er(this,t))}};function dc(t,e,n){const r=ya(t),s=r[e]();return r!==t&&!$t(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const fy=Array.prototype;function wn(t,e,n,r,s,i){const o=ya(t),c=o!==t&&!$t(t),l=o[e];if(l!==fy[e]){const p=l.apply(t,i);return c?tn(p):p}let h=n;o!==t&&(c?h=function(p,g){return n.call(this,er(t,p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const f=l.call(o,h,r);return c&&s?s(f):f}function Vh(t,e,n,r){const s=ya(t);let i=n;return s!==t&&($t(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,er(t,c),l,t)}),s[e](i,...r)}function pc(t,e,n){const r=Ae(t);mt(r,"iterate",wi);const s=r[e](...n);return(s===-1||s===!1)&&Vl(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function Ys(t,e,n=[]){xn(),Pl();const r=Ae(t)[e].apply(t,n);return Cl(),Ln(),r}const dy=Tl("__proto__,__v_isRef,__isVue"),cp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(_n));function py(t){_n(t)||(t=String(t));const e=Ae(this);return mt(e,"has",t),e.hasOwnProperty(t)}class lp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Ay:dp:i?fp:hp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=se(e);if(!s){let l;if(o&&(l=hy[n]))return l;if(n==="hasOwnProperty")return py}const c=Reflect.get(e,n,yt(e)?e:r);if((_n(n)?cp.has(n):dy(n))||(s||mt(e,"get",n),i))return c;if(yt(c)){const l=o&&Al(n)?c:c.value;return s&&Oe(l)?Uc(l):l}return Oe(c)?s?Uc(c):va(c):c}}class up extends lp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=se(e)&&Al(n);if(!this._isShallow){const h=Mn(i);if(!$t(r)&&!Mn(r)&&(i=Ae(i),r=Ae(r)),!o&&yt(i)&&!yt(r))return h||(i.value=r),!0}const c=o?Number(n)<e.length:Re(e,n),l=Reflect.set(e,n,r,yt(e)?e:s);return e===Ae(s)&&(c?lr(r,i)&&bn(e,"set",n,r):bn(e,"add",n,r)),l}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&bn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!_n(n)||!cp.has(n))&&mt(e,"has",n),r}ownKeys(e){return mt(e,"iterate",se(e)?"length":xr),Reflect.ownKeys(e)}}class my extends lp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const gy=new up,_y=new my,yy=new up(!0);const Fc=t=>t,vo=t=>Reflect.getPrototypeOf(t);function vy(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=ls(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),f=n?Fc:e?gs:tn;return!e&&mt(i,"iterate",l?Mc:xr),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function Eo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ey(t,e){const n={get(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);t||(lr(s,c)&&mt(o,"get",s),mt(o,"get",c));const{has:l}=vo(o),h=e?Fc:t?gs:tn;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&mt(Ae(s),"iterate",xr),s.size},has(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);return t||(lr(s,c)&&mt(o,"has",s),mt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ae(c),h=e?Fc:t?gs:tn;return!t&&mt(l,"iterate",xr),c.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return vt(n,t?{add:Eo("add"),set:Eo("set"),delete:Eo("delete"),clear:Eo("clear")}:{add(s){!e&&!$t(s)&&!Mn(s)&&(s=Ae(s));const i=Ae(this);return vo(i).has.call(i,s)||(i.add(s),bn(i,"add",s,s)),this},set(s,i){!e&&!$t(i)&&!Mn(i)&&(i=Ae(i));const o=Ae(this),{has:c,get:l}=vo(o);let h=c.call(o,s);h||(s=Ae(s),h=c.call(o,s));const f=l.call(o,s);return o.set(s,i),h?lr(i,f)&&bn(o,"set",s,i):bn(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:c}=vo(i);let l=o.call(i,s);l||(s=Ae(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&bn(i,"delete",s,void 0),h},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&bn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=vy(s,t,e)}),n}function Nl(t,e){const n=Ey(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const Ty={get:Nl(!1,!1)},Iy={get:Nl(!1,!0)},wy={get:Nl(!0,!1)};const hp=new WeakMap,fp=new WeakMap,dp=new WeakMap,Ay=new WeakMap;function Ry(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function by(t){return t.__v_skip||!Object.isExtensible(t)?0:Ry(J_(t))}function va(t){return Mn(t)?t:Dl(t,!1,gy,Ty,hp)}function pp(t){return Dl(t,!1,yy,Iy,fp)}function Uc(t){return Dl(t,!0,_y,wy,dp)}function Dl(t,e,n,r,s){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=by(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Lr(t){return Mn(t)?Lr(t.__v_raw):!!(t&&t.__v_isReactive)}function Mn(t){return!!(t&&t.__v_isReadonly)}function $t(t){return!!(t&&t.__v_isShallow)}function Vl(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function Sy(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&Yd(t,"__v_skip",!0),t}const tn=t=>Oe(t)?va(t):t,gs=t=>Oe(t)?Uc(t):t;function yt(t){return t?t.__v_isRef===!0:!1}function ei(t){return mp(t,!1)}function Py(t){return mp(t,!0)}function mp(t,e){return yt(t)?t:new Cy(t,e)}class Cy{constructor(e,n){this.dep=new Ol,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:tn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||$t(e)||Mn(e);e=r?e:Ae(e),lr(e,n)&&(this._rawValue=e,this._value=r?e:tn(e),this.dep.trigger())}}function kt(t){return yt(t)?t.value:t}const ky={get:(t,e,n)=>e==="__v_raw"?t:kt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return yt(s)&&!yt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function gp(t){return Lr(t)?t:new Proxy(t,ky)}class Oy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ol(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ii-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return np(this,!0),!0}get value(){const e=this.dep.track();return ip(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ny(t,e,n=!1){let r,s;return he(t)?r=t:(r=t.get,s=t.set),new Oy(r,s,n)}const To={},Ho=new WeakMap;let Pr;function Dy(t,e=!1,n=Pr){if(n){let r=Ho.get(n);r||Ho.set(n,r=[]),r.push(t)}}function Vy(t,e,n=ke){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=K=>s?K:$t(K)||s===!1||s===0?Sn(K,1):Sn(K);let f,p,g,y,b=!1,k=!1;if(yt(t)?(p=()=>t.value,b=$t(t)):Lr(t)?(p=()=>h(t),b=!0):se(t)?(k=!0,b=t.some(K=>Lr(K)||$t(K)),p=()=>t.map(K=>{if(yt(K))return K.value;if(Lr(K))return h(K);if(he(K))return l?l(K,2):K()})):he(t)?e?p=l?()=>l(t,2):t:p=()=>{if(g){xn();try{g()}finally{Ln()}}const K=Pr;Pr=f;try{return l?l(t,3,[y]):t(y)}finally{Pr=K}}:p=dn,e&&s){const K=p,ue=s===!0?1/0:s;p=()=>Sn(K(),ue)}const N=cy(),q=()=>{f.stop(),N&&N.active&&wl(N.effects,f)};if(i&&e){const K=e;e=(...ue)=>{K(...ue),q()}}let F=k?new Array(t.length).fill(To):To;const $=K=>{if(!(!(f.flags&1)||!f.dirty&&!K))if(e){const ue=f.run();if(s||b||(k?ue.some((de,w)=>lr(de,F[w])):lr(ue,F))){g&&g();const de=Pr;Pr=f;try{const w=[ue,F===To?void 0:k&&F[0]===To?[]:F,y];F=ue,l?l(e,3,w):e(...w)}finally{Pr=de}}}else f.run()};return c&&c($),f=new ep(p),f.scheduler=o?()=>o($,!1):$,y=K=>Dy(K,!1,f),g=f.onStop=()=>{const K=Ho.get(f);if(K){if(l)l(K,4);else for(const ue of K)ue();Ho.delete(f)}},e?r?$(!0):F=f.run():o?o($.bind(null,!0),!0):f.run(),q.pause=f.pause.bind(f),q.resume=f.resume.bind(f),q.stop=q,q}function Sn(t,e=1/0,n){if(e<=0||!Oe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,yt(t))Sn(t.value,e,n);else if(se(t))for(let r=0;r<t.length;r++)Sn(t[r],e,n);else if(ks(t)||ls(t))t.forEach(r=>{Sn(r,e,n)});else if(Qd(t)){for(const r in t)Sn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Sn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bi(t,e,n,r){try{return r?t(...r):t()}catch(s){Ea(s,e,n)}}function yn(t,e,n,r){if(he(t)){const s=Bi(t,e,n,r);return s&&Gd(s)&&s.catch(i=>{Ea(i,e,n)}),s}if(se(t)){const s=[];for(let i=0;i<t.length;i++)s.push(yn(t[i],e,n,r));return s}}function Ea(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ke;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,h)===!1)return}c=c.parent}if(i){xn(),Bi(i,null,10,[t,l,h]),Ln();return}}xy(t,n,s,r,o)}function xy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Rt=[];let un=-1;const us=[];let tr=null,ns=0;const _p=Promise.resolve();let Wo=null;function xl(t){const e=Wo||_p;return t?e.then(this?t.bind(this):t):e}function Ly(t){let e=un+1,n=Rt.length;for(;e<n;){const r=e+n>>>1,s=Rt[r],i=Ai(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Ll(t){if(!(t.flags&1)){const e=Ai(t),n=Rt[Rt.length-1];!n||!(t.flags&2)&&e>=Ai(n)?Rt.push(t):Rt.splice(Ly(e),0,t),t.flags|=1,yp()}}function yp(){Wo||(Wo=_p.then(Ep))}function My(t){se(t)?us.push(...t):tr&&t.id===-1?tr.splice(ns+1,0,t):t.flags&1||(us.push(t),t.flags|=1),yp()}function xh(t,e,n=un+1){for(;n<Rt.length;n++){const r=Rt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Rt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function vp(t){if(us.length){const e=[...new Set(us)].sort((n,r)=>Ai(n)-Ai(r));if(us.length=0,tr){tr.push(...e);return}for(tr=e,ns=0;ns<tr.length;ns++){const n=tr[ns];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}tr=null,ns=0}}const Ai=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ep(t){try{for(un=0;un<Rt.length;un++){const e=Rt[un];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Bi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;un<Rt.length;un++){const e=Rt[un];e&&(e.flags&=-2)}un=-1,Rt.length=0,vp(),Wo=null,(Rt.length||us.length)&&Ep()}}let Lt=null,Tp=null;function Ko(t){const e=Lt;return Lt=t,Tp=t&&t.type.__scopeId||null,e}function Zn(t,e=Lt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Qo(-1);const i=Ko(e);let o;try{o=t(...s)}finally{Ko(i),r._d&&Qo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function BS(t,e){if(Lt===null)return t;const n=Aa(Lt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=ke]=e[s];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&Sn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function br(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(xn(),yn(l,n,8,[t.el,c,t,e]),Ln())}}const Fy=Symbol("_vte"),Uy=t=>t.__isTeleport,By=Symbol("_leaveCb");function Ml(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ml(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Fl(t,e){return he(t)?vt({name:t.name},e,{setup:t}):t}function Ip(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Go=new WeakMap;function fi(t,e,n,r,s=!1){if(se(t)){t.forEach((b,k)=>fi(b,e&&(se(e)?e[k]:e),n,r,s));return}if(di(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&fi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Aa(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===ke?c.refs={}:c.refs,p=c.setupState,g=Ae(p),y=p===ke?Kd:b=>Re(g,b);if(h!=null&&h!==l){if(Lh(e),Ge(h))f[h]=null,y(h)&&(p[h]=null);else if(yt(h)){h.value=null;const b=e;b.k&&(f[b.k]=null)}}if(he(l))Bi(l,c,12,[o,f]);else{const b=Ge(l),k=yt(l);if(b||k){const N=()=>{if(t.f){const q=b?y(l)?p[l]:f[l]:l.value;if(s)se(q)&&wl(q,i);else if(se(q))q.includes(i)||q.push(i);else if(b)f[l]=[i],y(l)&&(p[l]=f[l]);else{const F=[i];l.value=F,t.k&&(f[t.k]=F)}}else b?(f[l]=o,y(l)&&(p[l]=o)):k&&(l.value=o,t.k&&(f[t.k]=o))};if(o){const q=()=>{N(),Go.delete(t)};q.id=-1,Go.set(t,q),xt(q,n)}else Lh(t),N()}}}function Lh(t){const e=Go.get(t);e&&(e.flags|=8,Go.delete(t))}_a().requestIdleCallback;_a().cancelIdleCallback;const di=t=>!!t.type.__asyncLoader,wp=t=>t.type.__isKeepAlive;function qy(t,e){Ap(t,"a",e)}function jy(t,e){Ap(t,"da",e)}function Ap(t,e,n=_t){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ta(e,r,n),n){let s=n.parent;for(;s&&s.parent;)wp(s.parent.vnode)&&$y(r,e,n,s),s=s.parent}}function $y(t,e,n,r){const s=Ta(e,t,r,!0);Ul(()=>{wl(r[e],s)},n)}function Ta(t,e,n=_t,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{xn();const c=qi(n),l=yn(e,n,t,o);return c(),Ln(),l});return r?s.unshift(i):s.push(i),i}}const jn=t=>(e,n=_t)=>{(!bi||t==="sp")&&Ta(t,(...r)=>e(...r),n)},Hy=jn("bm"),Rp=jn("m"),Wy=jn("bu"),Ky=jn("u"),Gy=jn("bum"),Ul=jn("um"),zy=jn("sp"),Qy=jn("rtg"),Yy=jn("rtc");function Jy(t,e=_t){Ta("ec",t,e)}const Xy="components";function Mh(t,e){return ev(Xy,t,!0,e)||t}const Zy=Symbol.for("v-ndc");function ev(t,e,n=!0,r=!1){const s=Lt||_t;if(s){const i=s.type;{const c=jv(i,!1);if(c&&(c===e||c===Kt(e)||c===ma(Kt(e))))return i}const o=Fh(s[t]||i[t],e)||Fh(s.appContext[t],e);return!o&&r?i:o}}function Fh(t,e){return t&&(t[e]||t[Kt(e)]||t[ma(Kt(e))])}function qS(t,e,n,r){let s;const i=n,o=se(t);if(o||Ge(t)){const c=o&&Lr(t);let l=!1,h=!1;c&&(l=!$t(t),h=Mn(t),t=ya(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?h?gs(tn(t[f])):tn(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Oe(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const Bc=t=>t?Kp(t)?Aa(t):Bc(t.parent):null,pi=vt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Bc(t.parent),$root:t=>Bc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Sp(t),$forceUpdate:t=>t.f||(t.f=()=>{Ll(t.update)}),$nextTick:t=>t.n||(t.n=xl.bind(t.proxy)),$watch:t=>hv.bind(t)}),mc=(t,e)=>t!==ke&&!t.__isScriptSetup&&Re(t,e),tv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(mc(r,e))return o[e]=1,r[e];if(s!==ke&&Re(s,e))return o[e]=2,s[e];if(Re(i,e))return o[e]=3,i[e];if(n!==ke&&Re(n,e))return o[e]=4,n[e];qc&&(o[e]=0)}}const h=pi[e];let f,p;if(h)return e==="$attrs"&&mt(t.attrs,"get",""),h(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(n!==ke&&Re(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Re(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return mc(s,e)?(s[e]=n,!0):r!==ke&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||t!==ke&&c[0]!=="$"&&Re(t,c)||mc(e,c)||Re(i,c)||Re(r,c)||Re(pi,c)||Re(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Uh(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let qc=!0;function nv(t){const e=Sp(t),n=t.proxy,r=t.ctx;qc=!1,e.beforeCreate&&Bh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:y,updated:b,activated:k,deactivated:N,beforeDestroy:q,beforeUnmount:F,destroyed:$,unmounted:K,render:ue,renderTracked:de,renderTriggered:w,errorCaptured:v,serverPrefetch:T,expose:A,inheritAttrs:R,components:P,directives:E,filters:Tt}=e;if(h&&rv(h,r,null),o)for(const ye in o){const me=o[ye];he(me)&&(r[ye]=me.bind(n))}if(s){const ye=s.call(n,n);Oe(ye)&&(t.data=va(ye))}if(qc=!0,i)for(const ye in i){const me=i[ye],Nt=he(me)?me.bind(n,n):he(me.get)?me.get.bind(n,n):dn,Qt=!he(me)&&he(me.set)?me.set.bind(n):dn,Bt=bt({get:Nt,set:Qt});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>Bt.value,set:Le=>Bt.value=Le})}if(c)for(const ye in c)bp(c[ye],r,n,ye);if(l){const ye=he(l)?l.call(n):l;Reflect.ownKeys(ye).forEach(me=>{ko(me,ye[me])})}f&&Bh(f,t,"c");function $e(ye,me){se(me)?me.forEach(Nt=>ye(Nt.bind(n))):me&&ye(me.bind(n))}if($e(Hy,p),$e(Rp,g),$e(Wy,y),$e(Ky,b),$e(qy,k),$e(jy,N),$e(Jy,v),$e(Yy,de),$e(Qy,w),$e(Gy,F),$e(Ul,K),$e(zy,T),se(A))if(A.length){const ye=t.exposed||(t.exposed={});A.forEach(me=>{Object.defineProperty(ye,me,{get:()=>n[me],set:Nt=>n[me]=Nt,enumerable:!0})})}else t.exposed||(t.exposed={});ue&&t.render===dn&&(t.render=ue),R!=null&&(t.inheritAttrs=R),P&&(t.components=P),E&&(t.directives=E),T&&Ip(t)}function rv(t,e,n=dn){se(t)&&(t=jc(t));for(const r in t){const s=t[r];let i;Oe(s)?"default"in s?i=Zt(s.from||r,s.default,!0):i=Zt(s.from||r):i=Zt(s),yt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Bh(t,e,n){yn(se(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function bp(t,e,n,r){let s=r.includes(".")?kp(n,r):()=>n[r];if(Ge(t)){const i=e[t];he(i)&&Oo(s,i)}else if(he(t))Oo(s,t.bind(n));else if(Oe(t))if(se(t))t.forEach(i=>bp(i,e,n,r));else{const i=he(t.handler)?t.handler.bind(n):e[t.handler];he(i)&&Oo(s,i,t)}}function Sp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>zo(l,h,o,!0)),zo(l,e,o)),Oe(e)&&i.set(e,l),l}function zo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&zo(t,i,n,!0),s&&s.forEach(o=>zo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=sv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const sv={data:qh,props:jh,emits:jh,methods:ti,computed:ti,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:ti,directives:ti,watch:ov,provide:qh,inject:iv};function qh(t,e){return e?t?function(){return vt(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function iv(t,e){return ti(jc(t),jc(e))}function jc(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function wt(t,e){return t?[...new Set([].concat(t,e))]:e}function ti(t,e){return t?vt(Object.create(null),t,e):e}function jh(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:vt(Object.create(null),Uh(t),Uh(e??{})):e}function ov(t,e){if(!t)return e;if(!e)return t;const n=vt(Object.create(null),t);for(const r in e)n[r]=wt(t[r],e[r]);return n}function Pp(){return{app:null,config:{isNativeTag:Kd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let av=0;function cv(t,e){return function(r,s=null){he(r)||(r=vt({},r)),s!=null&&!Oe(s)&&(s=null);const i=Pp(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:av++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Hv,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&he(f.install)?(o.add(f),f.install(h,...p)):he(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,g){if(!l){const y=h._ceVNode||je(r,s);return y.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(y,f,g),l=!0,h._container=f,f.__vue_app__=h,Aa(y.component)}},onUnmount(f){c.push(f)},unmount(){l&&(yn(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=hs;hs=h;try{return f()}finally{hs=p}}};return h}}let hs=null;function ko(t,e){if(_t){let n=_t.provides;const r=_t.parent&&_t.parent.provides;r===n&&(n=_t.provides=Object.create(r)),n[t]=e}}function Zt(t,e,n=!1){const r=Mv();if(r||hs){let s=hs?hs._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&he(e)?e.call(r&&r.proxy):e}}const lv=Symbol.for("v-scx"),uv=()=>Zt(lv);function Oo(t,e,n){return Cp(t,e,n)}function Cp(t,e,n=ke){const{immediate:r,deep:s,flush:i,once:o}=n,c=vt({},n),l=e&&r||!e&&i!=="post";let h;if(bi){if(i==="sync"){const y=uv();h=y.__watcherHandles||(y.__watcherHandles=[])}else if(!l){const y=()=>{};return y.stop=dn,y.resume=dn,y.pause=dn,y}}const f=_t;c.call=(y,b,k)=>yn(y,f,b,k);let p=!1;i==="post"?c.scheduler=y=>{xt(y,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(y,b)=>{b?y():Ll(y)}),c.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,f&&(y.id=f.uid,y.i=f))};const g=Vy(t,e,c);return bi&&(h?h.push(g):l&&g()),g}function hv(t,e,n){const r=this.proxy,s=Ge(t)?t.includes(".")?kp(r,t):()=>r[t]:t.bind(r,r);let i;he(e)?i=e:(i=e.handler,n=e);const o=qi(this),c=Cp(s,i.bind(r),n);return o(),c}function kp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const fv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Kt(e)}Modifiers`]||t[`${Wr(e)}Modifiers`];function dv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ke;let s=n;const i=e.startsWith("update:"),o=i&&fv(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Ge(f)?f.trim():f)),o.number&&(s=n.map(ga)));let c,l=r[c=uc(e)]||r[c=uc(Kt(e))];!l&&i&&(l=r[c=uc(Wr(e))]),l&&yn(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,yn(h,t,6,s)}}const pv=new WeakMap;function Op(t,e,n=!1){const r=n?pv:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!he(t)){const l=h=>{const f=Op(h,e,!0);f&&(c=!0,vt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Oe(t)&&r.set(t,null),null):(se(i)?i.forEach(l=>o[l]=null):vt(o,i),Oe(t)&&r.set(t,o),o)}function Ia(t,e){return!t||!da(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,Wr(e))||Re(t,e))}function $h(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:f,props:p,data:g,setupState:y,ctx:b,inheritAttrs:k}=t,N=Ko(t);let q,F;try{if(n.shapeFlag&4){const K=s||r,ue=K;q=fn(h.call(ue,K,f,p,y,g,b)),F=c}else{const K=e;q=fn(K.length>1?K(p,{attrs:c,slots:o,emit:l}):K(p,null)),F=e.props?c:mv(c)}}catch(K){mi.length=0,Ea(K,t,1),q=je(pr)}let $=q;if(F&&k!==!1){const K=Object.keys(F),{shapeFlag:ue}=$;K.length&&ue&7&&(i&&K.some(Il)&&(F=gv(F,i)),$=_s($,F,!1,!0))}return n.dirs&&($=_s($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&Ml($,n.transition),q=$,Ko(N),q}const mv=t=>{let e;for(const n in t)(n==="class"||n==="style"||da(n))&&((e||(e={}))[n]=t[n]);return e},gv=(t,e)=>{const n={};for(const r in t)(!Il(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function _v(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Hh(r,o,h):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==r[g]&&!Ia(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Hh(r,o,h):!0:!!o;return!1}function Hh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ia(n,i))return!0}return!1}function yv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Np={},Dp=()=>Object.create(Np),Vp=t=>Object.getPrototypeOf(t)===Np;function vv(t,e,n,r=!1){const s={},i=Dp();t.propsDefaults=Object.create(null),xp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:pp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ev(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ae(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(Ia(t.emitsOptions,g))continue;const y=e[g];if(l)if(Re(i,g))y!==i[g]&&(i[g]=y,h=!0);else{const b=Kt(g);s[b]=$c(l,c,b,y,t,!1)}else y!==i[g]&&(i[g]=y,h=!0)}}}else{xp(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!Re(e,p)&&((f=Wr(p))===p||!Re(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=$c(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&bn(t.attrs,"set","")}function xp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(li(l))continue;const h=e[l];let f;s&&Re(s,f=Kt(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:Ia(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Ae(n),h=c||ke;for(let f=0;f<i.length;f++){const p=i[f];n[p]=$c(s,l,p,h[p],t,!Re(h,p))}}return o}function $c(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Re(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&he(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=qi(s);r=h[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Wr(n))&&(r=!0))}return r}const Tv=new WeakMap;function Lp(t,e,n=!1){const r=n?Tv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!he(t)){const f=p=>{l=!0;const[g,y]=Lp(p,e,!0);vt(o,g),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Oe(t)&&r.set(t,cs),cs;if(se(i))for(let f=0;f<i.length;f++){const p=Kt(i[f]);Wh(p)&&(o[p]=ke)}else if(i)for(const f in i){const p=Kt(f);if(Wh(p)){const g=i[f],y=o[p]=se(g)||he(g)?{type:g}:vt({},g),b=y.type;let k=!1,N=!0;if(se(b))for(let q=0;q<b.length;++q){const F=b[q],$=he(F)&&F.name;if($==="Boolean"){k=!0;break}else $==="String"&&(N=!1)}else k=he(b)&&b.name==="Boolean";y[0]=k,y[1]=N,(k||Re(y,"default"))&&c.push(p)}}const h=[o,c];return Oe(t)&&r.set(t,h),h}function Wh(t){return t[0]!=="$"&&!li(t)}const Bl=t=>t==="_"||t==="_ctx"||t==="$stable",ql=t=>se(t)?t.map(fn):[fn(t)],Iv=(t,e,n)=>{if(e._n)return e;const r=Zn((...s)=>ql(e(...s)),n);return r._c=!1,r},Mp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Bl(s))continue;const i=t[s];if(he(i))e[s]=Iv(s,i,r);else if(i!=null){const o=ql(i);e[s]=()=>o}}},Fp=(t,e)=>{const n=ql(e);t.slots.default=()=>n},Up=(t,e,n)=>{for(const r in e)(n||!Bl(r))&&(t[r]=e[r])},wv=(t,e,n)=>{const r=t.slots=Dp();if(t.vnode.shapeFlag&32){const s=e._;s?(Up(r,e,n),n&&Yd(r,"_",s,!0)):Mp(e,r)}else e&&Fp(t,e)},Av=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ke;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Up(s,e,n):(i=!e.$stable,Mp(e,s)),o=e}else e&&(Fp(t,e),o={default:1});if(i)for(const c in s)!Bl(c)&&o[c]==null&&delete s[c]},xt=Cv;function Rv(t){return bv(t)}function bv(t,e){const n=_a();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:y=dn,insertStaticContent:b}=t,k=(_,I,S,V=null,M=null,x=null,G=void 0,H=null,j=!!I.dynamicChildren)=>{if(_===I)return;_&&!Js(_,I)&&(V=D(_),Le(_,M,x,!0),_=null),I.patchFlag===-2&&(j=!1,I.dynamicChildren=null);const{type:U,ref:ne,shapeFlag:Q}=I;switch(U){case wa:N(_,I,S,V);break;case pr:q(_,I,S,V);break;case No:_==null&&F(I,S,V,G);break;case hn:P(_,I,S,V,M,x,G,H,j);break;default:Q&1?ue(_,I,S,V,M,x,G,H,j):Q&6?E(_,I,S,V,M,x,G,H,j):(Q&64||Q&128)&&U.process(_,I,S,V,M,x,G,H,j,Z)}ne!=null&&M?fi(ne,_&&_.ref,x,I||_,!I):ne==null&&_&&_.ref!=null&&fi(_.ref,null,x,_,!0)},N=(_,I,S,V)=>{if(_==null)r(I.el=c(I.children),S,V);else{const M=I.el=_.el;I.children!==_.children&&h(M,I.children)}},q=(_,I,S,V)=>{_==null?r(I.el=l(I.children||""),S,V):I.el=_.el},F=(_,I,S,V)=>{[_.el,_.anchor]=b(_.children,I,S,V,_.el,_.anchor)},$=({el:_,anchor:I},S,V)=>{let M;for(;_&&_!==I;)M=g(_),r(_,S,V),_=M;r(I,S,V)},K=({el:_,anchor:I})=>{let S;for(;_&&_!==I;)S=g(_),s(_),_=S;s(I)},ue=(_,I,S,V,M,x,G,H,j)=>{if(I.type==="svg"?G="svg":I.type==="math"&&(G="mathml"),_==null)de(I,S,V,M,x,G,H,j);else{const U=_.el&&_.el._isVueCE?_.el:null;try{U&&U._beginPatch(),T(_,I,M,x,G,H,j)}finally{U&&U._endPatch()}}},de=(_,I,S,V,M,x,G,H)=>{let j,U;const{props:ne,shapeFlag:Q,transition:ee,dirs:ie}=_;if(j=_.el=o(_.type,x,ne&&ne.is,ne),Q&8?f(j,_.children):Q&16&&v(_.children,j,null,V,M,gc(_,x),G,H),ie&&br(_,null,V,"created"),w(j,_,_.scopeId,G,V),ne){for(const fe in ne)fe!=="value"&&!li(fe)&&i(j,fe,null,ne[fe],x,V);"value"in ne&&i(j,"value",null,ne.value,x),(U=ne.onVnodeBeforeMount)&&ln(U,V,_)}ie&&br(_,null,V,"beforeMount");const re=Sv(M,ee);re&&ee.beforeEnter(j),r(j,I,S),((U=ne&&ne.onVnodeMounted)||re||ie)&&xt(()=>{U&&ln(U,V,_),re&&ee.enter(j),ie&&br(_,null,V,"mounted")},M)},w=(_,I,S,V,M)=>{if(S&&y(_,S),V)for(let x=0;x<V.length;x++)y(_,V[x]);if(M){let x=M.subTree;if(I===x||jp(x.type)&&(x.ssContent===I||x.ssFallback===I)){const G=M.vnode;w(_,G,G.scopeId,G.slotScopeIds,M.parent)}}},v=(_,I,S,V,M,x,G,H,j=0)=>{for(let U=j;U<_.length;U++){const ne=_[U]=H?nr(_[U]):fn(_[U]);k(null,ne,I,S,V,M,x,G,H)}},T=(_,I,S,V,M,x,G)=>{const H=I.el=_.el;let{patchFlag:j,dynamicChildren:U,dirs:ne}=I;j|=_.patchFlag&16;const Q=_.props||ke,ee=I.props||ke;let ie;if(S&&Sr(S,!1),(ie=ee.onVnodeBeforeUpdate)&&ln(ie,S,I,_),ne&&br(I,_,S,"beforeUpdate"),S&&Sr(S,!0),(Q.innerHTML&&ee.innerHTML==null||Q.textContent&&ee.textContent==null)&&f(H,""),U?A(_.dynamicChildren,U,H,S,V,gc(I,M),x):G||me(_,I,H,null,S,V,gc(I,M),x,!1),j>0){if(j&16)R(H,Q,ee,S,M);else if(j&2&&Q.class!==ee.class&&i(H,"class",null,ee.class,M),j&4&&i(H,"style",Q.style,ee.style,M),j&8){const re=I.dynamicProps;for(let fe=0;fe<re.length;fe++){const ve=re[fe],nt=Q[ve],rt=ee[ve];(rt!==nt||ve==="value")&&i(H,ve,nt,rt,M,S)}}j&1&&_.children!==I.children&&f(H,I.children)}else!G&&U==null&&R(H,Q,ee,S,M);((ie=ee.onVnodeUpdated)||ne)&&xt(()=>{ie&&ln(ie,S,I,_),ne&&br(I,_,S,"updated")},V)},A=(_,I,S,V,M,x,G)=>{for(let H=0;H<I.length;H++){const j=_[H],U=I[H],ne=j.el&&(j.type===hn||!Js(j,U)||j.shapeFlag&198)?p(j.el):S;k(j,U,ne,null,V,M,x,G,!0)}},R=(_,I,S,V,M)=>{if(I!==S){if(I!==ke)for(const x in I)!li(x)&&!(x in S)&&i(_,x,I[x],null,M,V);for(const x in S){if(li(x))continue;const G=S[x],H=I[x];G!==H&&x!=="value"&&i(_,x,H,G,M,V)}"value"in S&&i(_,"value",I.value,S.value,M)}},P=(_,I,S,V,M,x,G,H,j)=>{const U=I.el=_?_.el:c(""),ne=I.anchor=_?_.anchor:c("");let{patchFlag:Q,dynamicChildren:ee,slotScopeIds:ie}=I;ie&&(H=H?H.concat(ie):ie),_==null?(r(U,S,V),r(ne,S,V),v(I.children||[],S,ne,M,x,G,H,j)):Q>0&&Q&64&&ee&&_.dynamicChildren?(A(_.dynamicChildren,ee,S,M,x,G,H),(I.key!=null||M&&I===M.subTree)&&Bp(_,I,!0)):me(_,I,S,ne,M,x,G,H,j)},E=(_,I,S,V,M,x,G,H,j)=>{I.slotScopeIds=H,_==null?I.shapeFlag&512?M.ctx.activate(I,S,V,G,j):Tt(I,S,V,M,x,G,j):Ut(_,I,j)},Tt=(_,I,S,V,M,x,G)=>{const H=_.component=Lv(_,V,M);if(wp(_)&&(H.ctx.renderer=Z),Fv(H,!1,G),H.asyncDep){if(M&&M.registerDep(H,$e,G),!_.el){const j=H.subTree=je(pr);q(null,j,I,S),_.placeholder=j.el}}else $e(H,_,I,S,M,x,G)},Ut=(_,I,S)=>{const V=I.component=_.component;if(_v(_,I,S))if(V.asyncDep&&!V.asyncResolved){ye(V,I,S);return}else V.next=I,V.update();else I.el=_.el,V.vnode=I},$e=(_,I,S,V,M,x,G)=>{const H=()=>{if(_.isMounted){let{next:Q,bu:ee,u:ie,parent:re,vnode:fe}=_;{const ut=qp(_);if(ut){Q&&(Q.el=fe.el,ye(_,Q,G)),ut.asyncDep.then(()=>{_.isUnmounted||H()});return}}let ve=Q,nt;Sr(_,!1),Q?(Q.el=fe.el,ye(_,Q,G)):Q=fe,ee&&Po(ee),(nt=Q.props&&Q.props.onVnodeBeforeUpdate)&&ln(nt,re,Q,fe),Sr(_,!0);const rt=$h(_),qt=_.subTree;_.subTree=rt,k(qt,rt,p(qt.el),D(qt),_,M,x),Q.el=rt.el,ve===null&&yv(_,rt.el),ie&&xt(ie,M),(nt=Q.props&&Q.props.onVnodeUpdated)&&xt(()=>ln(nt,re,Q,fe),M)}else{let Q;const{el:ee,props:ie}=I,{bm:re,m:fe,parent:ve,root:nt,type:rt}=_,qt=di(I);Sr(_,!1),re&&Po(re),!qt&&(Q=ie&&ie.onVnodeBeforeMount)&&ln(Q,ve,I),Sr(_,!0);{nt.ce&&nt.ce._def.shadowRoot!==!1&&nt.ce._injectChildStyle(rt);const ut=_.subTree=$h(_);k(null,ut,S,V,_,M,x),I.el=ut.el}if(fe&&xt(fe,M),!qt&&(Q=ie&&ie.onVnodeMounted)){const ut=I;xt(()=>ln(Q,ve,ut),M)}(I.shapeFlag&256||ve&&di(ve.vnode)&&ve.vnode.shapeFlag&256)&&_.a&&xt(_.a,M),_.isMounted=!0,I=S=V=null}};_.scope.on();const j=_.effect=new ep(H);_.scope.off();const U=_.update=j.run.bind(j),ne=_.job=j.runIfDirty.bind(j);ne.i=_,ne.id=_.uid,j.scheduler=()=>Ll(ne),Sr(_,!0),U()},ye=(_,I,S)=>{I.component=_;const V=_.vnode.props;_.vnode=I,_.next=null,Ev(_,I.props,V,S),Av(_,I.children,S),xn(),xh(_),Ln()},me=(_,I,S,V,M,x,G,H,j=!1)=>{const U=_&&_.children,ne=_?_.shapeFlag:0,Q=I.children,{patchFlag:ee,shapeFlag:ie}=I;if(ee>0){if(ee&128){Qt(U,Q,S,V,M,x,G,H,j);return}else if(ee&256){Nt(U,Q,S,V,M,x,G,H,j);return}}ie&8?(ne&16&&Pt(U,M,x),Q!==U&&f(S,Q)):ne&16?ie&16?Qt(U,Q,S,V,M,x,G,H,j):Pt(U,M,x,!0):(ne&8&&f(S,""),ie&16&&v(Q,S,V,M,x,G,H,j))},Nt=(_,I,S,V,M,x,G,H,j)=>{_=_||cs,I=I||cs;const U=_.length,ne=I.length,Q=Math.min(U,ne);let ee;for(ee=0;ee<Q;ee++){const ie=I[ee]=j?nr(I[ee]):fn(I[ee]);k(_[ee],ie,S,null,M,x,G,H,j)}U>ne?Pt(_,M,x,!0,!1,Q):v(I,S,V,M,x,G,H,j,Q)},Qt=(_,I,S,V,M,x,G,H,j)=>{let U=0;const ne=I.length;let Q=_.length-1,ee=ne-1;for(;U<=Q&&U<=ee;){const ie=_[U],re=I[U]=j?nr(I[U]):fn(I[U]);if(Js(ie,re))k(ie,re,S,null,M,x,G,H,j);else break;U++}for(;U<=Q&&U<=ee;){const ie=_[Q],re=I[ee]=j?nr(I[ee]):fn(I[ee]);if(Js(ie,re))k(ie,re,S,null,M,x,G,H,j);else break;Q--,ee--}if(U>Q){if(U<=ee){const ie=ee+1,re=ie<ne?I[ie].el:V;for(;U<=ee;)k(null,I[U]=j?nr(I[U]):fn(I[U]),S,re,M,x,G,H,j),U++}}else if(U>ee)for(;U<=Q;)Le(_[U],M,x,!0),U++;else{const ie=U,re=U,fe=new Map;for(U=re;U<=ee;U++){const st=I[U]=j?nr(I[U]):fn(I[U]);st.key!=null&&fe.set(st.key,U)}let ve,nt=0;const rt=ee-re+1;let qt=!1,ut=0;const Gn=new Array(rt);for(U=0;U<rt;U++)Gn[U]=0;for(U=ie;U<=Q;U++){const st=_[U];if(nt>=rt){Le(st,M,x,!0);continue}let jt;if(st.key!=null)jt=fe.get(st.key);else for(ve=re;ve<=ee;ve++)if(Gn[ve-re]===0&&Js(st,I[ve])){jt=ve;break}jt===void 0?Le(st,M,x,!0):(Gn[jt-re]=U+1,jt>=ut?ut=jt:qt=!0,k(st,I[jt],S,null,M,x,G,H,j),nt++)}const Ms=qt?Pv(Gn):cs;for(ve=Ms.length-1,U=rt-1;U>=0;U--){const st=re+U,jt=I[st],no=I[st+1],Yr=st+1<ne?no.el||no.placeholder:V;Gn[U]===0?k(null,jt,S,Yr,M,x,G,H,j):qt&&(ve<0||U!==Ms[ve]?Bt(jt,S,Yr,2):ve--)}}},Bt=(_,I,S,V,M=null)=>{const{el:x,type:G,transition:H,children:j,shapeFlag:U}=_;if(U&6){Bt(_.component.subTree,I,S,V);return}if(U&128){_.suspense.move(I,S,V);return}if(U&64){G.move(_,I,S,Z);return}if(G===hn){r(x,I,S);for(let Q=0;Q<j.length;Q++)Bt(j[Q],I,S,V);r(_.anchor,I,S);return}if(G===No){$(_,I,S);return}if(V!==2&&U&1&&H)if(V===0)H.beforeEnter(x),r(x,I,S),xt(()=>H.enter(x),M);else{const{leave:Q,delayLeave:ee,afterLeave:ie}=H,re=()=>{_.ctx.isUnmounted?s(x):r(x,I,S)},fe=()=>{x._isLeaving&&x[By](!0),Q(x,()=>{re(),ie&&ie()})};ee?ee(x,re,fe):fe()}else r(x,I,S)},Le=(_,I,S,V=!1,M=!1)=>{const{type:x,props:G,ref:H,children:j,dynamicChildren:U,shapeFlag:ne,patchFlag:Q,dirs:ee,cacheIndex:ie}=_;if(Q===-2&&(M=!1),H!=null&&(xn(),fi(H,null,S,_,!0),Ln()),ie!=null&&(I.renderCache[ie]=void 0),ne&256){I.ctx.deactivate(_);return}const re=ne&1&&ee,fe=!di(_);let ve;if(fe&&(ve=G&&G.onVnodeBeforeUnmount)&&ln(ve,I,_),ne&6)Dt(_.component,S,V);else{if(ne&128){_.suspense.unmount(S,V);return}re&&br(_,null,I,"beforeUnmount"),ne&64?_.type.remove(_,I,S,Z,V):U&&!U.hasOnce&&(x!==hn||Q>0&&Q&64)?Pt(U,I,S,!1,!0):(x===hn&&Q&384||!M&&ne&16)&&Pt(j,I,S),V&&Me(_)}(fe&&(ve=G&&G.onVnodeUnmounted)||re)&&xt(()=>{ve&&ln(ve,I,_),re&&br(_,null,I,"unmounted")},S)},Me=_=>{const{type:I,el:S,anchor:V,transition:M}=_;if(I===hn){Kn(S,V);return}if(I===No){K(_);return}const x=()=>{s(S),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(_.shapeFlag&1&&M&&!M.persisted){const{leave:G,delayLeave:H}=M,j=()=>G(S,x);H?H(_.el,x,j):j()}else x()},Kn=(_,I)=>{let S;for(;_!==I;)S=g(_),s(_),_=S;s(I)},Dt=(_,I,S)=>{const{bum:V,scope:M,job:x,subTree:G,um:H,m:j,a:U}=_;Kh(j),Kh(U),V&&Po(V),M.stop(),x&&(x.flags|=8,Le(G,_,I,S)),H&&xt(H,I),xt(()=>{_.isUnmounted=!0},I)},Pt=(_,I,S,V=!1,M=!1,x=0)=>{for(let G=x;G<_.length;G++)Le(_[G],I,S,V,M)},D=_=>{if(_.shapeFlag&6)return D(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const I=g(_.anchor||_.el),S=I&&I[Fy];return S?g(S):I};let J=!1;const z=(_,I,S)=>{_==null?I._vnode&&Le(I._vnode,null,null,!0):k(I._vnode||null,_,I,null,null,null,S),I._vnode=_,J||(J=!0,xh(),vp(),J=!1)},Z={p:k,um:Le,m:Bt,r:Me,mt:Tt,mc:v,pc:me,pbc:A,n:D,o:t};return{render:z,hydrate:void 0,createApp:cv(z)}}function gc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Sr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Sv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Bp(t,e,n=!1){const r=t.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=nr(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Bp(o,c)),c.type===wa&&c.patchFlag!==-1&&(c.el=o.el),c.type===pr&&!c.el&&(c.el=o.el)}}function Pv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function qp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:qp(e)}function Kh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const jp=t=>t.__isSuspense;function Cv(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):My(t)}const hn=Symbol.for("v-fgt"),wa=Symbol.for("v-txt"),pr=Symbol.for("v-cmt"),No=Symbol.for("v-stc"),mi=[];let Mt=null;function rs(t=!1){mi.push(Mt=t?null:[])}function kv(){mi.pop(),Mt=mi[mi.length-1]||null}let Ri=1;function Qo(t,e=!1){Ri+=t,t<0&&Mt&&e&&(Mt.hasOnce=!0)}function $p(t){return t.dynamicChildren=Ri>0?Mt||cs:null,kv(),Ri>0&&Mt&&Mt.push(t),t}function Io(t,e,n,r,s,i){return $p(He(t,e,n,r,s,i,!0))}function Hp(t,e,n,r,s){return $p(je(t,e,n,r,s,!0))}function Yo(t){return t?t.__v_isVNode===!0:!1}function Js(t,e){return t.type===e.type&&t.key===e.key}const Wp=({key:t})=>t??null,Do=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ge(t)||yt(t)||he(t)?{i:Lt,r:t,k:e,f:!!n}:t:null);function He(t,e=null,n=null,r=0,s=null,i=t===hn?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wp(e),ref:e&&Do(e),scopeId:Tp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Lt};return c?(jl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ge(n)?8:16),Ri>0&&!o&&Mt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Mt.push(l),l}const je=Ov;function Ov(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Zy)&&(t=pr),Yo(t)){const c=_s(t,e,!0);return n&&jl(c,n),Ri>0&&!i&&Mt&&(c.shapeFlag&6?Mt[Mt.indexOf(t)]=c:Mt.push(c)),c.patchFlag=-2,c}if($v(t)&&(t=t.__vccOpts),e){e=Nv(e);let{class:c,style:l}=e;c&&!Ge(c)&&(e.class=bl(c)),Oe(l)&&(Vl(l)&&!se(l)&&(l=vt({},l)),e.style=Rl(l))}const o=Ge(t)?1:jp(t)?128:Uy(t)?64:Oe(t)?4:he(t)?2:0;return He(t,e,n,r,s,o,i,!0)}function Nv(t){return t?Vl(t)||Vp(t)?vt({},t):t:null}function _s(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?Dv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Wp(h),ref:e&&e.ref?n&&i?se(i)?i.concat(Do(e)):[i,Do(e)]:Do(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==hn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&_s(t.ssContent),ssFallback:t.ssFallback&&_s(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Ml(f,l.clone(f)),f}function Cr(t=" ",e=0){return je(wa,null,t,e)}function jS(t,e){const n=je(No,null,t);return n.staticCount=e,n}function _c(t="",e=!1){return e?(rs(),Hp(pr,null,t)):je(pr,null,t)}function fn(t){return t==null||typeof t=="boolean"?je(pr):se(t)?je(hn,null,t.slice()):Yo(t)?nr(t):je(wa,null,String(t))}function nr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:_s(t)}function jl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),jl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Vp(e)?e._ctx=Lt:s===3&&Lt&&(Lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:Lt},n=32):(e=String(e),r&64?(n=16,e=[Cr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Dv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=bl([e.class,r.class]));else if(s==="style")e.style=Rl([e.style,r.style]);else if(da(s)){const i=e[s],o=r[s];o&&i!==o&&!(se(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ln(t,e,n,r=null){yn(t,e,7,[n,r])}const Vv=Pp();let xv=0;function Lv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Vv,i={uid:xv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ay(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lp(r,s),emitsOptions:Op(r,s),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=dv.bind(null,i),t.ce&&t.ce(i),i}let _t=null;const Mv=()=>_t||Lt;let Jo,Hc;{const t=_a(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Jo=e("__VUE_INSTANCE_SETTERS__",n=>_t=n),Hc=e("__VUE_SSR_SETTERS__",n=>bi=n)}const qi=t=>{const e=_t;return Jo(t),t.scope.on(),()=>{t.scope.off(),Jo(e)}},Gh=()=>{_t&&_t.scope.off(),Jo(null)};function Kp(t){return t.vnode.shapeFlag&4}let bi=!1;function Fv(t,e=!1,n=!1){e&&Hc(e);const{props:r,children:s}=t.vnode,i=Kp(t);vv(t,r,i,e),wv(t,s,n||e);const o=i?Uv(t,e):void 0;return e&&Hc(!1),o}function Uv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,tv);const{setup:r}=n;if(r){xn();const s=t.setupContext=r.length>1?qv(t):null,i=qi(t),o=Bi(r,t,0,[t.props,s]),c=Gd(o);if(Ln(),i(),(c||t.sp)&&!di(t)&&Ip(t),c){if(o.then(Gh,Gh),e)return o.then(l=>{zh(t,l)}).catch(l=>{Ea(l,t,0)});t.asyncDep=o}else zh(t,o)}else Gp(t)}function zh(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=gp(e)),Gp(t)}function Gp(t,e,n){const r=t.type;t.render||(t.render=r.render||dn);{const s=qi(t);xn();try{nv(t)}finally{Ln(),s()}}}const Bv={get(t,e){return mt(t,"get",""),t[e]}};function qv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Bv),slots:t.slots,emit:t.emit,expose:e}}function Aa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(gp(Sy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in pi)return pi[n](t)},has(e,n){return n in e||n in pi}})):t.proxy}function jv(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function $v(t){return he(t)&&"__vccOpts"in t}const bt=(t,e)=>Ny(t,e,bi);function zp(t,e,n){try{Qo(-1);const r=arguments.length;return r===2?Oe(e)&&!se(e)?Yo(e)?je(t,null,[e]):je(t,e):je(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Yo(n)&&(n=[n]),je(t,e,n))}finally{Qo(1)}}const Hv="3.5.25";/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wc;const Qh=typeof window<"u"&&window.trustedTypes;if(Qh)try{Wc=Qh.createPolicy("vue",{createHTML:t=>t})}catch{}const Qp=Wc?t=>Wc.createHTML(t):t=>t,Wv="http://www.w3.org/2000/svg",Kv="http://www.w3.org/1998/Math/MathML",Rn=typeof document<"u"?document:null,Yh=Rn&&Rn.createElement("template"),Gv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Rn.createElementNS(Wv,t):e==="mathml"?Rn.createElementNS(Kv,t):n?Rn.createElement(t,{is:n}):Rn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Rn.createTextNode(t),createComment:t=>Rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Yh.innerHTML=Qp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Yh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},zv=Symbol("_vtc");function Qv(t,e,n){const r=t[zv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Jh=Symbol("_vod"),Yv=Symbol("_vsh"),Jv=Symbol(""),Xv=/(?:^|;)\s*display\s*:/;function Zv(t,e,n){const r=t.style,s=Ge(n);let i=!1;if(n&&!s){if(e)if(Ge(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Vo(r,c,"")}else for(const o in e)n[o]==null&&Vo(r,o,"");for(const o in n)o==="display"&&(i=!0),Vo(r,o,n[o])}else if(s){if(e!==n){const o=r[Jv];o&&(n+=";"+o),r.cssText=n,i=Xv.test(n)}}else e&&t.removeAttribute("style");Jh in t&&(t[Jh]=i?r.display:"",t[Yv]&&(r.display="none"))}const Xh=/\s*!important$/;function Vo(t,e,n){if(se(n))n.forEach(r=>Vo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=eE(t,e);Xh.test(n)?t.setProperty(Wr(r),n.replace(Xh,""),"important"):t[r]=n}}const Zh=["Webkit","Moz","ms"],yc={};function eE(t,e){const n=yc[e];if(n)return n;let r=Kt(e);if(r!=="filter"&&r in t)return yc[e]=r;r=ma(r);for(let s=0;s<Zh.length;s++){const i=Zh[s]+r;if(i in t)return yc[e]=i}return e}const ef="http://www.w3.org/1999/xlink";function tf(t,e,n,r,s,i=iy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ef,e.slice(6,e.length)):t.setAttributeNS(ef,e,n):n==null||i&&!Jd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":_n(n)?String(n):n)}function nf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Qp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Jd(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Pn(t,e,n,r){t.addEventListener(e,n,r)}function tE(t,e,n,r){t.removeEventListener(e,n,r)}const rf=Symbol("_vei");function nE(t,e,n,r,s=null){const i=t[rf]||(t[rf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=rE(e);if(r){const h=i[e]=oE(r,s);Pn(t,c,h,l)}else o&&(tE(t,c,o,l),i[e]=void 0)}}const sf=/(?:Once|Passive|Capture)$/;function rE(t){let e;if(sf.test(t)){e={};let r;for(;r=t.match(sf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Wr(t.slice(2)),e]}let vc=0;const sE=Promise.resolve(),iE=()=>vc||(sE.then(()=>vc=0),vc=Date.now());function oE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;yn(aE(r,n.value),e,5,[r])};return n.value=t,n.attached=iE(),n}function aE(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const of=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,cE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Qv(t,r,o):e==="style"?Zv(t,n,r):da(e)?Il(e)||nE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lE(t,e,r,o))?(nf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&tf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ge(r))?nf(t,Kt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),tf(t,e,r,o))};function lE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&of(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return of(e)&&Ge(n)?!1:e in t}const mr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return se(e)?n=>Po(e,n):e};function uE(t){t.target.composing=!0}function af(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ht=Symbol("_assign");function cf(t,e,n){return e&&(t=t.trim()),n&&(t=ga(t)),t}const $S={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ht]=mr(s);const i=r||s.props&&s.props.type==="number";Pn(t,e?"change":"input",o=>{o.target.composing||t[Ht](cf(t.value,n,i))}),(n||i)&&Pn(t,"change",()=>{t.value=cf(t.value,n,i)}),e||(Pn(t,"compositionstart",uE),Pn(t,"compositionend",af),Pn(t,"change",af))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Ht]=mr(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?ga(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},HS={deep:!0,created(t,e,n){t[Ht]=mr(n),Pn(t,"change",()=>{const r=t._modelValue,s=ys(t),i=t.checked,o=t[Ht];if(se(r)){const c=Sl(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const h=[...r];h.splice(c,1),o(h)}}else if(ks(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(Yp(t,i))})},mounted:lf,beforeUpdate(t,e,n){t[Ht]=mr(n),lf(t,e,n)}};function lf(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(se(e))s=Sl(e,r.props.value)>-1;else if(ks(e))s=e.has(r.props.value);else{if(e===n)return;s=Fr(e,Yp(t,!0))}t.checked!==s&&(t.checked=s)}const WS={created(t,{value:e},n){t.checked=Fr(e,n.props.value),t[Ht]=mr(n),Pn(t,"change",()=>{t[Ht](ys(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Ht]=mr(r),e!==n&&(t.checked=Fr(e,r.props.value))}},KS={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=ks(e);Pn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ga(ys(o)):ys(o));t[Ht](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,xl(()=>{t._assigning=!1})}),t[Ht]=mr(r)},mounted(t,{value:e}){uf(t,e)},beforeUpdate(t,e,n){t[Ht]=mr(n)},updated(t,{value:e}){t._assigning||uf(t,e)}};function uf(t,e){const n=t.multiple,r=se(e);if(!(n&&!r&&!ks(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=ys(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(h=>String(h)===String(c)):o.selected=Sl(e,c)>-1}else o.selected=e.has(c);else if(Fr(ys(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ys(t){return"_value"in t?t._value:t.value}function Yp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const hE=["ctrl","shift","alt","meta"],fE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>hE.some(n=>t[`${n}Key`]&&!e.includes(n))},GS=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=fE[e[o]];if(c&&c(s,e))return}return t(s,...i)})},dE=vt({patchProp:cE},Gv);let hf;function pE(){return hf||(hf=Rv(dE))}const mE=(...t)=>{const e=pE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=_E(r);if(!s)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,gE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function gE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function _E(t){return Ge(t)?document.querySelector(t):t}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ss=typeof document<"u";function Jp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function yE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Jp(t.default)}const we=Object.assign;function Ec(t,e){const n={};for(const r in e){const s=e[r];n[r]=nn(s)?s.map(t):t(s)}return n}const gi=()=>{},nn=Array.isArray;function ff(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Xp=/#/g,vE=/&/g,EE=/\//g,TE=/=/g,IE=/\?/g,Zp=/\+/g,wE=/%5B/g,AE=/%5D/g,em=/%5E/g,RE=/%60/g,tm=/%7B/g,bE=/%7C/g,nm=/%7D/g,SE=/%20/g;function $l(t){return t==null?"":encodeURI(""+t).replace(bE,"|").replace(wE,"[").replace(AE,"]")}function PE(t){return $l(t).replace(tm,"{").replace(nm,"}").replace(em,"^")}function Kc(t){return $l(t).replace(Zp,"%2B").replace(SE,"+").replace(Xp,"%23").replace(vE,"%26").replace(RE,"`").replace(tm,"{").replace(nm,"}").replace(em,"^")}function CE(t){return Kc(t).replace(TE,"%3D")}function kE(t){return $l(t).replace(Xp,"%23").replace(IE,"%3F")}function OE(t){return kE(t).replace(EE,"%2F")}function Si(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const NE=/\/$/,DE=t=>t.replace(NE,"");function Tc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=ME(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Si(o)}}function VE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function df(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function xE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&vs(e.matched[r],n.matched[s])&&rm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function rm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!LE(t[n],e[n]))return!1;return!0}function LE(t,e){return nn(t)?pf(t,e):nn(e)?pf(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function pf(t,e){return nn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ME(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Gc=function(t){return t.pop="pop",t.push="push",t}({}),Ic=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function FE(t){if(!t)if(ss){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),DE(t)}const UE=/^[^#]+#/;function BE(t,e){return t.replace(UE,"#")+e}function qE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ra=()=>({left:window.scrollX,top:window.scrollY});function jE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=qE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function mf(t,e){return(history.state?history.state.position-e:-1)+t}const zc=new Map;function $E(t,e){zc.set(t,e)}function HE(t){const e=zc.get(t);return zc.delete(t),e}function WE(t){return typeof t=="string"||t&&typeof t=="object"}function sm(t){return typeof t=="string"||typeof t=="symbol"}let Be=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const im=Symbol("");Be.MATCHER_NOT_FOUND+"",Be.NAVIGATION_GUARD_REDIRECT+"",Be.NAVIGATION_ABORTED+"",Be.NAVIGATION_CANCELLED+"",Be.NAVIGATION_DUPLICATED+"";function Es(t,e){return we(new Error,{type:t,[im]:!0},e)}function An(t,e){return t instanceof Error&&im in t&&(e==null||!!(t.type&e))}const KE=["params","query","hash"];function GE(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of KE)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function zE(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Zp," "),i=s.indexOf("="),o=Si(i<0?s:s.slice(0,i)),c=i<0?null:Si(s.slice(i+1));if(o in e){let l=e[o];nn(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function gf(t){let e="";for(let n in t){const r=t[n];if(n=CE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(nn(r)?r.map(s=>s&&Kc(s)):[r&&Kc(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function QE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=nn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const YE=Symbol(""),_f=Symbol(""),ba=Symbol(""),Hl=Symbol(""),Qc=Symbol("");function Xs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function rr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=g=>{g===!1?l(Es(Be.NAVIGATION_ABORTED,{from:n,to:e})):g instanceof Error?l(g):WE(g)?l(Es(Be.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(g=>l(g))})}function wc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Jp(l)){const h=(l.__vccOpts||l)[e];h&&i.push(rr(h,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=yE(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const g=(p.__vccOpts||p)[e];return g&&rr(g,n,r,o,c,s)()}))}}return i}function JE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>vs(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>vs(h,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let XE=()=>location.protocol+"//"+location.host;function om(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),df(c,"")}return df(n,t)+r+s}function ZE(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const y=om(t,location),b=n.value,k=e.value;let N=0;if(g){if(n.value=y,e.value=g,o&&o===b){o=null;return}N=k?g.position-k.position:0}else r(y);s.forEach(q=>{q(n.value,b,{delta:N,type:Gc.pop,direction:N?N>0?Ic.forward:Ic.back:Ic.unknown})})};function l(){o=n.value}function h(g){s.push(g);const y=()=>{const b=s.indexOf(g);b>-1&&s.splice(b,1)};return i.push(y),y}function f(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(we({},g.state,{scroll:Ra()}),"")}}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:h,destroy:p}}function yf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ra():null}}function eT(t){const{history:e,location:n}=window,r={value:om(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:XE()+t+l;try{e[f?"replaceState":"pushState"](h,"",g),s.value=h}catch(y){console.error(y),n[f?"replace":"assign"](g)}}function o(l,h){i(l,we({},e.state,yf(s.value.back,l,s.value.forward,!0),h,{position:s.value.position}),!0),r.value=l}function c(l,h){const f=we({},s.value,e.state,{forward:l,scroll:Ra()});i(f.current,f,!0),i(l,we({},yf(r.value,l,null),{position:f.position+1},h),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function tT(t){t=FE(t);const e=eT(t),n=ZE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=we({location:"",base:t,go:r,createHref:BE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Nr=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var Qe=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(Qe||{});const nT={type:Nr.Static,value:""},rT=/[a-zA-Z0-9_]/;function sT(t){if(!t)return[[]];if(t==="/")return[[nT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${h}": ${y}`)}let n=Qe.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",f="";function p(){h&&(n===Qe.Static?i.push({type:Nr.Static,value:h}):n===Qe.Param||n===Qe.ParamRegExp||n===Qe.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Nr.Param,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==Qe.ParamRegExp){r=n,n=Qe.EscapeNext;continue}switch(n){case Qe.Static:l==="/"?(h&&p(),o()):l===":"?(p(),n=Qe.Param):g();break;case Qe.EscapeNext:g(),n=r;break;case Qe.Param:l==="("?n=Qe.ParamRegExp:rT.test(l)?g():(p(),n=Qe.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case Qe.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=Qe.ParamRegExpEnd:f+=l;break;case Qe.ParamRegExpEnd:p(),n=Qe.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===Qe.ParamRegExp&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}const vf="[^/]+?",iT={sensitive:!1,strict:!1,start:!0,end:!0};var At=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(At||{});const oT=/[.+*?^${}()[\]/\\]/g;function aT(t,e){const n=we({},iT,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[At.Root];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let y=At.Segment+(n.sensitive?At.BonusCaseSensitive:0);if(g.type===Nr.Static)p||(s+="/"),s+=g.value.replace(oT,"\\$&"),y+=At.Static;else if(g.type===Nr.Param){const{value:b,repeatable:k,optional:N,regexp:q}=g;i.push({name:b,repeatable:k,optional:N});const F=q||vf;if(F!==vf){y+=At.BonusCustomRegExp;try{`${F}`}catch(K){throw new Error(`Invalid custom RegExp for param "${b}" (${F}): `+K.message)}}let $=k?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;p||($=N&&h.length<2?`(?:/${$})`:"/"+$),N&&($+="?"),s+=$,y+=At.Dynamic,N&&(y+=At.BonusOptional),k&&(y+=At.BonusRepeatable),F===".*"&&(y+=At.BonusWildcard)}f.push(y)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=At.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const f=h.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const y=f[g]||"",b=i[g-1];p[b.name]=y&&b.repeatable?y.split("/"):y}return p}function l(h){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const y of g)if(y.type===Nr.Static)f+=y.value;else if(y.type===Nr.Param){const{value:b,repeatable:k,optional:N}=y,q=b in h?h[b]:"";if(nn(q)&&!k)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const F=nn(q)?q.join("/"):q;if(!F)if(N)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${b}"`);f+=F}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function cT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===At.Static+At.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===At.Static+At.Segment?1:-1:0}function am(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=cT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ef(r))return 1;if(Ef(s))return-1}return s.length-r.length}function Ef(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const lT={strict:!1,end:!0,sensitive:!1};function uT(t,e,n){const r=aT(sT(t.path),n),s=we(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function hT(t,e){const n=[],r=new Map;e=ff(lT,e);function s(p){return r.get(p)}function i(p,g,y){const b=!y,k=If(p);k.aliasOf=y&&y.record;const N=ff(e,p),q=[k];if("alias"in p){const K=typeof p.alias=="string"?[p.alias]:p.alias;for(const ue of K)q.push(If(we({},k,{components:y?y.record.components:k.components,path:ue,aliasOf:y?y.record:k})))}let F,$;for(const K of q){const{path:ue}=K;if(g&&ue[0]!=="/"){const de=g.record.path,w=de[de.length-1]==="/"?"":"/";K.path=g.record.path+(ue&&w+ue)}if(F=uT(K,g,N),y?y.alias.push(F):($=$||F,$!==F&&$.alias.push(F),b&&p.name&&!wf(F)&&o(p.name)),cm(F)&&l(F),k.children){const de=k.children;for(let w=0;w<de.length;w++)i(de[w],F,y&&y.children[w])}y=y||F}return $?()=>{o($)}:gi}function o(p){if(sm(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const g=pT(p,n);n.splice(g,0,p),p.record.name&&!wf(p)&&r.set(p.record.name,p)}function h(p,g){let y,b={},k,N;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw Es(Be.MATCHER_NOT_FOUND,{location:p});N=y.record.name,b=we(Tf(g.params,y.keys.filter($=>!$.optional).concat(y.parent?y.parent.keys.filter($=>$.optional):[]).map($=>$.name)),p.params&&Tf(p.params,y.keys.map($=>$.name))),k=y.stringify(b)}else if(p.path!=null)k=p.path,y=n.find($=>$.re.test(k)),y&&(b=y.parse(k),N=y.record.name);else{if(y=g.name?r.get(g.name):n.find($=>$.re.test(g.path)),!y)throw Es(Be.MATCHER_NOT_FOUND,{location:p,currentLocation:g});N=y.record.name,b=we({},g.params,p.params),k=y.stringify(b)}const q=[];let F=y;for(;F;)q.unshift(F.record),F=F.parent;return{name:N,path:k,params:b,matched:q,meta:dT(q)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Tf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function If(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:fT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function fT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function wf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dT(t){return t.reduce((e,n)=>we(e,n.meta),{})}function pT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;am(t,e[i])<0?r=i:n=i+1}const s=mT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function mT(t){let e=t;for(;e=e.parent;)if(cm(e)&&am(t,e)===0)return e}function cm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Af(t){const e=Zt(ba),n=Zt(Hl),r=bt(()=>{const l=kt(t.to);return e.resolve(l)}),s=bt(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(vs.bind(null,f));if(g>-1)return g;const y=Rf(l[h-2]);return h>1&&Rf(f)===y&&p[p.length-1].path!==y?p.findIndex(vs.bind(null,l[h-2])):g}),i=bt(()=>s.value>-1&&ET(n.params,r.value.params)),o=bt(()=>s.value>-1&&s.value===n.matched.length-1&&rm(n.params,r.value.params));function c(l={}){if(vT(l)){const h=e[kt(t.replace)?"replace":"push"](kt(t.to)).catch(gi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:bt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function gT(t){return t.length===1?t[0]:t}const _T=Fl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Af,setup(t,{slots:e}){const n=va(Af(t)),{options:r}=Zt(ba),s=bt(()=>({[bf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[bf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&gT(e.default(n));return t.custom?i:zp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),yT=_T;function vT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ET(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!nn(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function Rf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const bf=(t,e,n)=>t??e??n,TT=Fl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Zt(Qc),s=bt(()=>t.route||r.value),i=Zt(_f,0),o=bt(()=>{let h=kt(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),c=bt(()=>s.value.matched[o.value]);ko(_f,bt(()=>o.value+1)),ko(YE,c),ko(Qc,s);const l=ei();return Oo(()=>[l.value,c.value,t.name],([h,f,p],[g,y,b])=>{f&&(f.instances[p]=h,y&&y!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),h&&f&&(!y||!vs(f,y)||!g)&&(f.enterCallbacks[p]||[]).forEach(k=>k(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=c.value,g=p&&p.components[f];if(!g)return Sf(n.default,{Component:g,route:h});const y=p.props[f],b=y?y===!0?h.params:typeof y=="function"?y(h):y:null,N=zp(g,we({},b,e,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Sf(n.default,{Component:N,route:h})||N}}});function Sf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const IT=TT;function wT(t){const e=hT(t.routes,t),n=t.parseQuery||zE,r=t.stringifyQuery||gf,s=t.history,i=Xs(),o=Xs(),c=Xs(),l=Py(Jn);let h=Jn;ss&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ec.bind(null,D=>""+D),p=Ec.bind(null,OE),g=Ec.bind(null,Si);function y(D,J){let z,Z;return sm(D)?(z=e.getRecordMatcher(D),Z=J):Z=D,e.addRoute(Z,z)}function b(D){const J=e.getRecordMatcher(D);J&&e.removeRoute(J)}function k(){return e.getRoutes().map(D=>D.record)}function N(D){return!!e.getRecordMatcher(D)}function q(D,J){if(J=we({},J||l.value),typeof D=="string"){const S=Tc(n,D,J.path),V=e.resolve({path:S.path},J),M=s.createHref(S.fullPath);return we(S,V,{params:g(V.params),hash:Si(S.hash),redirectedFrom:void 0,href:M})}let z;if(D.path!=null)z=we({},D,{path:Tc(n,D.path,J.path).path});else{const S=we({},D.params);for(const V in S)S[V]==null&&delete S[V];z=we({},D,{params:p(S)}),J.params=p(J.params)}const Z=e.resolve(z,J),pe=D.hash||"";Z.params=f(g(Z.params));const _=VE(r,we({},D,{hash:PE(pe),path:Z.path})),I=s.createHref(_);return we({fullPath:_,hash:pe,query:r===gf?QE(D.query):D.query||{}},Z,{redirectedFrom:void 0,href:I})}function F(D){return typeof D=="string"?Tc(n,D,l.value.path):we({},D)}function $(D,J){if(h!==D)return Es(Be.NAVIGATION_CANCELLED,{from:J,to:D})}function K(D){return w(D)}function ue(D){return K(we(F(D),{replace:!0}))}function de(D,J){const z=D.matched[D.matched.length-1];if(z&&z.redirect){const{redirect:Z}=z;let pe=typeof Z=="function"?Z(D,J):Z;return typeof pe=="string"&&(pe=pe.includes("?")||pe.includes("#")?pe=F(pe):{path:pe},pe.params={}),we({query:D.query,hash:D.hash,params:pe.path!=null?{}:D.params},pe)}}function w(D,J){const z=h=q(D),Z=l.value,pe=D.state,_=D.force,I=D.replace===!0,S=de(z,Z);if(S)return w(we(F(S),{state:typeof S=="object"?we({},pe,S.state):pe,force:_,replace:I}),J||z);const V=z;V.redirectedFrom=J;let M;return!_&&xE(r,Z,z)&&(M=Es(Be.NAVIGATION_DUPLICATED,{to:V,from:Z}),Bt(Z,Z,!0,!1)),(M?Promise.resolve(M):A(V,Z)).catch(x=>An(x)?An(x,Be.NAVIGATION_GUARD_REDIRECT)?x:Qt(x):me(x,V,Z)).then(x=>{if(x){if(An(x,Be.NAVIGATION_GUARD_REDIRECT))return w(we({replace:I},F(x.to),{state:typeof x.to=="object"?we({},pe,x.to.state):pe,force:_}),J||V)}else x=P(V,Z,!0,I,pe);return R(V,Z,x),x})}function v(D,J){const z=$(D,J);return z?Promise.reject(z):Promise.resolve()}function T(D){const J=Kn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(D):D()}function A(D,J){let z;const[Z,pe,_]=JE(D,J);z=wc(Z.reverse(),"beforeRouteLeave",D,J);for(const S of Z)S.leaveGuards.forEach(V=>{z.push(rr(V,D,J))});const I=v.bind(null,D,J);return z.push(I),Pt(z).then(()=>{z=[];for(const S of i.list())z.push(rr(S,D,J));return z.push(I),Pt(z)}).then(()=>{z=wc(pe,"beforeRouteUpdate",D,J);for(const S of pe)S.updateGuards.forEach(V=>{z.push(rr(V,D,J))});return z.push(I),Pt(z)}).then(()=>{z=[];for(const S of _)if(S.beforeEnter)if(nn(S.beforeEnter))for(const V of S.beforeEnter)z.push(rr(V,D,J));else z.push(rr(S.beforeEnter,D,J));return z.push(I),Pt(z)}).then(()=>(D.matched.forEach(S=>S.enterCallbacks={}),z=wc(_,"beforeRouteEnter",D,J,T),z.push(I),Pt(z))).then(()=>{z=[];for(const S of o.list())z.push(rr(S,D,J));return z.push(I),Pt(z)}).catch(S=>An(S,Be.NAVIGATION_CANCELLED)?S:Promise.reject(S))}function R(D,J,z){c.list().forEach(Z=>T(()=>Z(D,J,z)))}function P(D,J,z,Z,pe){const _=$(D,J);if(_)return _;const I=J===Jn,S=ss?history.state:{};z&&(Z||I?s.replace(D.fullPath,we({scroll:I&&S&&S.scroll},pe)):s.push(D.fullPath,pe)),l.value=D,Bt(D,J,z,I),Qt()}let E;function Tt(){E||(E=s.listen((D,J,z)=>{if(!Dt.listening)return;const Z=q(D),pe=de(Z,Dt.currentRoute.value);if(pe){w(we(pe,{replace:!0,force:!0}),Z).catch(gi);return}h=Z;const _=l.value;ss&&$E(mf(_.fullPath,z.delta),Ra()),A(Z,_).catch(I=>An(I,Be.NAVIGATION_ABORTED|Be.NAVIGATION_CANCELLED)?I:An(I,Be.NAVIGATION_GUARD_REDIRECT)?(w(we(F(I.to),{force:!0}),Z).then(S=>{An(S,Be.NAVIGATION_ABORTED|Be.NAVIGATION_DUPLICATED)&&!z.delta&&z.type===Gc.pop&&s.go(-1,!1)}).catch(gi),Promise.reject()):(z.delta&&s.go(-z.delta,!1),me(I,Z,_))).then(I=>{I=I||P(Z,_,!1),I&&(z.delta&&!An(I,Be.NAVIGATION_CANCELLED)?s.go(-z.delta,!1):z.type===Gc.pop&&An(I,Be.NAVIGATION_ABORTED|Be.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),R(Z,_,I)}).catch(gi)}))}let Ut=Xs(),$e=Xs(),ye;function me(D,J,z){Qt(D);const Z=$e.list();return Z.length?Z.forEach(pe=>pe(D,J,z)):console.error(D),Promise.reject(D)}function Nt(){return ye&&l.value!==Jn?Promise.resolve():new Promise((D,J)=>{Ut.add([D,J])})}function Qt(D){return ye||(ye=!D,Tt(),Ut.list().forEach(([J,z])=>D?z(D):J()),Ut.reset()),D}function Bt(D,J,z,Z){const{scrollBehavior:pe}=t;if(!ss||!pe)return Promise.resolve();const _=!z&&HE(mf(D.fullPath,0))||(Z||!z)&&history.state&&history.state.scroll||null;return xl().then(()=>pe(D,J,_)).then(I=>I&&jE(I)).catch(I=>me(I,D,J))}const Le=D=>s.go(D);let Me;const Kn=new Set,Dt={currentRoute:l,listening:!0,addRoute:y,removeRoute:b,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:k,resolve:q,options:t,push:K,replace:ue,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:$e.add,isReady:Nt,install(D){D.component("RouterLink",yT),D.component("RouterView",IT),D.config.globalProperties.$router=Dt,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>kt(l)}),ss&&!Me&&l.value===Jn&&(Me=!0,K(s.location).catch(Z=>{}));const J={};for(const Z in Jn)Object.defineProperty(J,Z,{get:()=>l.value[Z],enumerable:!0});D.provide(ba,Dt),D.provide(Hl,pp(J)),D.provide(Qc,l);const z=D.unmount;Kn.add(D),D.unmount=function(){Kn.delete(D),Kn.size<1&&(h=Jn,E&&E(),E=null,l.value=Jn,Me=!1,ye=!1),z()}}};function Pt(D){return D.reduce((J,z)=>J.then(()=>T(z)),Promise.resolve())}return Dt}function AT(){return Zt(ba)}function zS(t){return Zt(Hl)}const RT="modulepreload",bT=function(t){return"/"+t},Pf={},xe=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=bT(l),l in Pf)return;Pf[l]=!0;const h=l.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":RT,h||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),h)return new Promise((g,y)=>{p.addEventListener("load",g),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};var Cf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ST=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},um={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,y=h&63;l||(y=64,o||(g=64)),r.push(n[f],n[p],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ST(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new PT;const g=i<<2|c>>4;if(r.push(g),h!==64){const y=c<<4&240|h>>2;if(r.push(y),p!==64){const b=h<<6&192|p;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class PT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const CT=function(t){const e=lm(t);return um.encodeByteArray(e,!0)},Xo=function(t){return CT(t).replace(/\./g,"")},hm=function(t){try{return um.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=()=>kT().__FIREBASE_DEFAULTS__,NT=()=>{if(typeof process>"u"||typeof Cf>"u")return;const t=Cf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},DT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hm(t[1]);return e&&JSON.parse(e)},Sa=()=>{try{return OT()||NT()||DT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fm=t=>{var e,n;return(n=(e=Sa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},VT=t=>{const e=fm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},dm=()=>{var t;return(t=Sa())===null||t===void 0?void 0:t.config},pm=t=>{var e;return(e=Sa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Xo(JSON.stringify(n)),Xo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function MT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function FT(){var t;const e=(t=Sa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function UT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function BT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jT(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $T(){return!FT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function HT(){try{return typeof indexedDB=="object"}catch{return!1}}function WT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT="FirebaseError";class $n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KT,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ji.prototype.create)}}class ji{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?GT(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new $n(s,c,r)}}function GT(t,e){return t.replace(zT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const zT=/\{\$([^}]+)}/g;function QT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(kf(i)&&kf(o)){if(!Zo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function kf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ni(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ri(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function YT(t,e){const n=new JT(t,e);return n.subscribe.bind(n)}class JT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");XT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ac),s.error===void 0&&(s.error=Ac),s.complete===void 0&&(s.complete=Ac);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ac(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t){return t&&t._delegate?t._delegate:t}class Ur{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tI(e))try{this.getOrInitializeService({instanceIdentifier:kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kr){return this.instances.has(e)}getOptions(e=kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kr){return this.component?this.component.multipleInstances?e:kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eI(t){return t===kr?void 0:t}function tI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ZT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const rI={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},sI=_e.INFO,iI={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},oI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=iI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wl{constructor(e){this.name=e,this._logLevel=sI,this._logHandler=oI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const aI=(t,e)=>e.some(n=>t instanceof n);let Of,Nf;function cI(){return Of||(Of=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lI(){return Nf||(Nf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mm=new WeakMap,Yc=new WeakMap,gm=new WeakMap,Rc=new WeakMap,Kl=new WeakMap;function uI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ur(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mm.set(n,t)}).catch(()=>{}),Kl.set(e,t),e}function hI(t){if(Yc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Yc.set(t,e)}let Jc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fI(t){Jc=t(Jc)}function dI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bc(this),e,...n);return gm.set(r,e.sort?e.sort():[e]),ur(r)}:lI().includes(t)?function(...e){return t.apply(bc(this),e),ur(mm.get(this))}:function(...e){return ur(t.apply(bc(this),e))}}function pI(t){return typeof t=="function"?dI(t):(t instanceof IDBTransaction&&hI(t),aI(t,cI())?new Proxy(t,Jc):t)}function ur(t){if(t instanceof IDBRequest)return uI(t);if(Rc.has(t))return Rc.get(t);const e=pI(t);return e!==t&&(Rc.set(t,e),Kl.set(e,t)),e}const bc=t=>Kl.get(t);function mI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=ur(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ur(o.result),l.oldVersion,l.newVersion,ur(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const gI=["get","getKey","getAll","getAllKeys","count"],_I=["put","add","delete","clear"],Sc=new Map;function Df(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sc.get(e))return Sc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=_I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||gI.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return Sc.set(e,i),i}fI(t=>({...t,get:(e,n,r)=>Df(e,n)||t.get(e,n,r),has:(e,n)=>!!Df(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xc="@firebase/app",Vf="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new Wl("@firebase/app"),EI="@firebase/app-compat",TI="@firebase/analytics-compat",II="@firebase/analytics",wI="@firebase/app-check-compat",AI="@firebase/app-check",RI="@firebase/auth",bI="@firebase/auth-compat",SI="@firebase/database",PI="@firebase/data-connect",CI="@firebase/database-compat",kI="@firebase/functions",OI="@firebase/functions-compat",NI="@firebase/installations",DI="@firebase/installations-compat",VI="@firebase/messaging",xI="@firebase/messaging-compat",LI="@firebase/performance",MI="@firebase/performance-compat",FI="@firebase/remote-config",UI="@firebase/remote-config-compat",BI="@firebase/storage",qI="@firebase/storage-compat",jI="@firebase/firestore",$I="@firebase/vertexai-preview",HI="@firebase/firestore-compat",WI="firebase",KI="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="[DEFAULT]",GI={[Xc]:"fire-core",[EI]:"fire-core-compat",[II]:"fire-analytics",[TI]:"fire-analytics-compat",[AI]:"fire-app-check",[wI]:"fire-app-check-compat",[RI]:"fire-auth",[bI]:"fire-auth-compat",[SI]:"fire-rtdb",[PI]:"fire-data-connect",[CI]:"fire-rtdb-compat",[kI]:"fire-fn",[OI]:"fire-fn-compat",[NI]:"fire-iid",[DI]:"fire-iid-compat",[VI]:"fire-fcm",[xI]:"fire-fcm-compat",[LI]:"fire-perf",[MI]:"fire-perf-compat",[FI]:"fire-rc",[UI]:"fire-rc-compat",[BI]:"fire-gcs",[qI]:"fire-gcs-compat",[jI]:"fire-fst",[HI]:"fire-fst-compat",[$I]:"fire-vertex","fire-js":"fire-js",[WI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new Map,zI=new Map,el=new Map;function xf(t,e){try{t.container.addComponent(e)}catch(n){Fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ts(t){const e=t.name;if(el.has(e))return Fn.debug(`There were multiple attempts to register component ${e}.`),!1;el.set(e,t);for(const n of Pi.values())xf(n,t);for(const n of zI.values())xf(n,t);return!0}function Gl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hr=new ji("app","Firebase",QI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=KI;function _m(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw hr.create("bad-app-name",{appName:String(s)});if(n||(n=dm()),!n)throw hr.create("no-options");const i=Pi.get(s);if(i){if(Zo(n,i.options)&&Zo(r,i.config))return i;throw hr.create("duplicate-app",{appName:s})}const o=new nI(s);for(const l of el.values())o.addComponent(l);const c=new YI(n,r,o);return Pi.set(s,c),c}function ym(t=Zc){const e=Pi.get(t);if(!e&&t===Zc&&dm())return _m();if(!e)throw hr.create("no-app",{appName:t});return e}function Lf(){return Array.from(Pi.values())}function fr(t,e,n){var r;let s=(r=GI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fn.warn(c.join(" "));return}Ts(new Ur(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="firebase-heartbeat-database",XI=1,Ci="firebase-heartbeat-store";let Pc=null;function vm(){return Pc||(Pc=mI(JI,XI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ci)}catch(n){console.warn(n)}}}}).catch(t=>{throw hr.create("idb-open",{originalErrorMessage:t.message})})),Pc}async function ZI(t){try{const n=(await vm()).transaction(Ci),r=await n.objectStore(Ci).get(Em(t));return await n.done,r}catch(e){if(e instanceof $n)Fn.warn(e.message);else{const n=hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fn.warn(n.message)}}}async function Mf(t,e){try{const r=(await vm()).transaction(Ci,"readwrite");await r.objectStore(Ci).put(e,Em(t)),await r.done}catch(n){if(n instanceof $n)Fn.warn(n.message);else{const r=hr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fn.warn(r.message)}}}function Em(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=1024,tw=30*24*60*60*1e3;class nw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ff();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=tw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Fn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ff(),{heartbeatsToSend:r,unsentEntries:s}=rw(this._heartbeatsCache.heartbeats),i=Xo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Fn.warn(n),""}}}function Ff(){return new Date().toISOString().substring(0,10)}function rw(t,e=ew){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Uf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Uf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return HT()?WT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ZI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Uf(t){return Xo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(t){Ts(new Ur("platform-logger",e=>new yI(e),"PRIVATE")),Ts(new Ur("heartbeat",e=>new nw(e),"PRIVATE")),fr(Xc,Vf,t),fr(Xc,Vf,"esm2017"),fr("fire-js","")}iw("");function zl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Tm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ow=Tm,Im=new ji("auth","Firebase",Tm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=new Wl("@firebase/auth");function aw(t,...e){ea.logLevel<=_e.WARN&&ea.warn(`Auth (${Os}): ${t}`,...e)}function xo(t,...e){ea.logLevel<=_e.ERROR&&ea.error(`Auth (${Os}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,...e){throw Yl(t,...e)}function en(t,...e){return Yl(t,...e)}function Ql(t,e,n){const r=Object.assign(Object.assign({},ow()),{[e]:n});return new ji("auth","Firebase",r).create(e,{appName:t.name})}function Dn(t){return Ql(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cw(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Gt(t,"argument-error"),Ql(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Im.create(t,...e)}function oe(t,e,...n){if(!t)throw Yl(e,...n)}function kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xo(e),new Error(e)}function Un(t,e){t||kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lw(){return Bf()==="http:"||Bf()==="https:"}function Bf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lw()||BT()||"connection"in navigator)?navigator.onLine:!0}function hw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Un(n>e,"Short delay should be less than long delay!"),this.isMobile=MT()||qT()}get(){return uw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(t,e){Un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=new Hi(3e4,6e4);function vr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hn(t,e,n,r,s={}){return Am(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=$i(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return UT()||(h.referrerPolicy="no-referrer"),wm.fetch()(Rm(t,t.config.apiHost,n,c),h)})}async function Am(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},fw),e);try{const s=new mw(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw wo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw wo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw wo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ql(t,f,h);Gt(t,f)}}catch(s){if(s instanceof $n)throw s;Gt(t,"network-request-failed",{message:String(s)})}}async function Wi(t,e,n,r,s={}){const i=await Hn(t,e,n,r,s);return"mfaPendingCredential"in i&&Gt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Rm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Jl(t.config,s):`${t.config.apiScheme}://${s}`}function pw(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),dw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=en(t,e,r);return s.customData._tokenResponse=n,s}function qf(t){return t!==void 0&&t.enterprise!==void 0}class gw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pw(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function _w(t,e){return Hn(t,"GET","/v2/recaptchaConfig",vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yw(t,e){return Hn(t,"POST","/v1/accounts:delete",e)}async function bm(t,e){return Hn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vw(t,e=!1){const n=Je(t),r=await n.getIdToken(e),s=Xl(r);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:_i(Cc(s.auth_time)),issuedAtTime:_i(Cc(s.iat)),expirationTime:_i(Cc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Cc(t){return Number(t)*1e3}function Xl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xo("JWT malformed, contained fewer than 3 sections"),null;try{const s=hm(n);return s?JSON.parse(s):(xo("Failed to decode base64 JWT payload"),null)}catch(s){return xo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function jf(t){const e=Xl(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $n&&Ew(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ew({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_i(this.lastLoginAt),this.creationTime=_i(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Is(t,bm(n,{idToken:r}));oe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Sm(i.providerUserInfo):[],c=ww(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new nl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function Iw(t){const e=Je(t);await ta(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ww(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Sm(t){return t.map(e=>{var{providerId:n}=e,r=zl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aw(t,e){const n=await Am(t,{},async()=>{const r=$i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Rm(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",wm.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Rw(t,e){return Hn(t,"POST","/v2/accounts:revokeToken",vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=jf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Aw(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new fs;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fs,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class On{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=zl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Tw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new nl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Is(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vw(this,e)}reload(){return Iw(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new On(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ta(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(Dn(this.auth));const e=await this.getIdToken();return await Is(this,yw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(c=n.tenantId)!==null&&c!==void 0?c:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,q=(h=n.createdAt)!==null&&h!==void 0?h:void 0,F=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:$,emailVerified:K,isAnonymous:ue,providerData:de,stsTokenManager:w}=n;oe($&&w,e,"internal-error");const v=fs.fromJSON(this.name,w);oe(typeof $=="string",e,"internal-error"),Xn(p,e.name),Xn(g,e.name),oe(typeof K=="boolean",e,"internal-error"),oe(typeof ue=="boolean",e,"internal-error"),Xn(y,e.name),Xn(b,e.name),Xn(k,e.name),Xn(N,e.name),Xn(q,e.name),Xn(F,e.name);const T=new On({uid:$,auth:e,email:g,emailVerified:K,displayName:p,isAnonymous:ue,photoURL:b,phoneNumber:y,tenantId:k,stsTokenManager:v,createdAt:q,lastLoginAt:F});return de&&Array.isArray(de)&&(T.providerData=de.map(A=>Object.assign({},A))),N&&(T._redirectEventId=N),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new fs;s.updateFromServerResponse(n);const i=new On({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ta(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Sm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new fs;c.updateFromIdToken(r);const l=new On({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new nl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=new Map;function Nn(t){Un(t instanceof Function,"Expected a class definition");let e=$f.get(t);return e?(Un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$f.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pm.type="NONE";const Hf=Pm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t,e,n){return`firebase:${t}:${e}:${n}`}class ds{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Lo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Lo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?On._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ds(Nn(Hf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Nn(Hf);const o=Lo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){const p=On._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ds(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ds(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vm(e))return"Blackberry";if(xm(e))return"Webos";if(km(e))return"Safari";if((e.includes("chrome/")||Om(e))&&!e.includes("edge/"))return"Chrome";if(Dm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cm(t=Et()){return/firefox\//i.test(t)}function km(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Om(t=Et()){return/crios\//i.test(t)}function Nm(t=Et()){return/iemobile/i.test(t)}function Dm(t=Et()){return/android/i.test(t)}function Vm(t=Et()){return/blackberry/i.test(t)}function xm(t=Et()){return/webos/i.test(t)}function Zl(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bw(t=Et()){var e;return Zl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Sw(){return jT()&&document.documentMode===10}function Lm(t=Et()){return Zl(t)||Dm(t)||xm(t)||Vm(t)||/windows phone/i.test(t)||Nm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(t,e=[]){let n;switch(t){case"Browser":n=Wf(Et());break;case"Worker":n=`${Wf(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Os}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cw(t,e={}){return Hn(t,"GET","/v2/passwordPolicy",vr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=6;class Ow{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:kw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kf(this),this.idTokenSubscription=new Kf(this),this.beforeStateQueue=new Pw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Im,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ds.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await bm(this,{idToken:e}),r=await On._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ta(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(Dn(this));const n=e?Je(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(Dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(Dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Cw(this),n=new Ow(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ji("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Rw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await ds.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&aw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Er(t){return Je(t)}class Kf{constructor(e){this.auth=e,this.observer=null,this.addObserver=YT(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dw(t){Pa=t}function Fm(t){return Pa.loadJS(t)}function Vw(){return Pa.recaptchaEnterpriseScript}function xw(){return Pa.gapiScript}function Lw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Mw="recaptcha-enterprise",Fw="NO_RECAPTCHA";class Uw{constructor(e){this.type=Mw,this.auth=Er(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{_w(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new gw(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;qf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Fw)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&qf(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Vw();l.length!==0&&(l+=c),Fm(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Gf(t,e,n,r=!1){const s=new Uw(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function rl(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Gf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Gf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(t,e){const n=Gl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Zo(i,e??{}))return s;Gt(s,"already-initialized")}return n.initialize({options:e})}function qw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jw(t,e,n){const r=Er(t);oe(r._canInitEmulator,r,"emulator-config-failed"),oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Um(e),{host:o,port:c}=$w(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Hw()}function Um(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $w(t){const e=Um(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:zf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:zf(o)}}}function zf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Hw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,n){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}async function Ww(t,e){return Hn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kw(t,e){return Wi(t,"POST","/v1/accounts:signInWithPassword",vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(t,e){return Wi(t,"POST","/v1/accounts:signInWithEmailLink",vr(t,e))}async function zw(t,e){return Wi(t,"POST","/v1/accounts:signInWithEmailLink",vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends eu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ki(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ki(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rl(e,n,"signInWithPassword",Kw);case"emailLink":return Gw(e,{email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rl(e,r,"signUpPassword",Ww);case"emailLink":return zw(e,{idToken:n,email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t,e){return Wi(t,"POST","/v1/accounts:signInWithIdp",vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw="http://localhost";class Br extends eu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=zl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Br(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ps(e,n)}buildRequest(){const e={requestUri:Qw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$i(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Jw(t){const e=ni(ri(t)).link,n=e?ni(ri(e)).deep_link_id:null,r=ni(ri(t)).deep_link_id;return(r?ni(ri(r)).link:null)||r||n||e||t}class tu{constructor(e){var n,r,s,i,o,c;const l=ni(ri(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=Yw((s=l.mode)!==null&&s!==void 0?s:null);oe(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=Jw(e);try{return new tu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.providerId=Ns.PROVIDER_ID}static credential(e,n){return ki._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=tu.parseLink(n);return oe(r,"argument-error"),ki._fromEmailAndCode(e,r.code,r.tenantId)}}Ns.PROVIDER_ID="password";Ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends nu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends Ki{constructor(){super("facebook.com")}static credential(e){return Br._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Ki{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Br._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Cn.credential(n,r)}catch{return null}}}Cn.GOOGLE_SIGN_IN_METHOD="google.com";Cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Ki{constructor(){super("github.com")}static credential(e){return Br._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Ki{constructor(){super("twitter.com")}static credential(e,n){return Br._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return or.credential(n,r)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xw(t,e){return Wi(t,"POST","/v1/accounts:signUp",vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await On._fromIdTokenResponse(e,r,s),o=Qf(r);return new qr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Qf(r);return new qr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Qf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends $n{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,na.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new na(e,n,r,s)}}function Bm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?na._fromErrorAndOperation(t,i,e,r):i})}async function Zw(t,e,n=!1){const r=await Is(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(t,e,n=!1){const{auth:r}=t;if(Jt(r.app))return Promise.reject(Dn(r));const s="reauthenticate";try{const i=await Is(t,Bm(r,s,e,t),n);oe(i.idToken,r,"internal-error");const o=Xl(i.idToken);oe(o,r,"internal-error");const{sub:c}=o;return oe(t.uid===c,r,"user-mismatch"),qr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Gt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qm(t,e,n=!1){if(Jt(t.app))return Promise.reject(Dn(t));const r="signIn",s=await Bm(t,r,e),i=await qr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function tA(t,e){return qm(Er(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jm(t){const e=Er(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function nA(t,e,n){if(Jt(t.app))return Promise.reject(Dn(t));const r=Er(t),o=await rl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Xw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&jm(t),l}),c=await qr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function rA(t,e,n){return Jt(t.app)?Promise.reject(Dn(t)):tA(Je(t),Ns.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jm(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sA(t,e){return Hn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iA(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Je(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Is(r,sA(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function oA(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function aA(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function $m(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function cA(t){return Je(t).signOut()}const ra="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ra,"1"),this.storage.removeItem(ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=1e3,uA=10;class Wm extends Hm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Sw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,uA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wm.type="LOCAL";const hA=Wm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km extends Hm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Km.type="SESSION";const Gm=Km;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ca(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await fA(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ca.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=ru("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return window}function pA(t){pn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function mA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _A(){return zm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm="firebaseLocalStorageDb",yA=1,sa="firebaseLocalStorage",Ym="fbase_key";class Gi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ka(t,e){return t.transaction([sa],e?"readwrite":"readonly").objectStore(sa)}function vA(){const t=indexedDB.deleteDatabase(Qm);return new Gi(t).toPromise()}function sl(){const t=indexedDB.open(Qm,yA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(sa,{keyPath:Ym})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(sa)?e(r):(r.close(),await vA(),e(await sl()))})})}async function Yf(t,e,n){const r=ka(t,!0).put({[Ym]:e,value:n});return new Gi(r).toPromise()}async function EA(t,e){const n=ka(t,!1).get(e),r=await new Gi(n).toPromise();return r===void 0?null:r.value}function Jf(t,e){const n=ka(t,!0).delete(e);return new Gi(n).toPromise()}const TA=800,IA=3;class Jm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>IA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ca._getInstance(_A()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mA(),!this.activeServiceWorker)return;this.sender=new dA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sl();return await Yf(e,ra,"1"),await Jf(e,ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>EA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ka(s,!1).getAll();return new Gi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jm.type="LOCAL";const wA=Jm;new Hi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(t,e){return e?Nn(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su extends eu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AA(t){return qm(t.auth,new su(t),t.bypassAuthState)}function RA(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),eA(n,new su(t),t.bypassAuthState)}async function bA(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),Zw(n,new su(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AA;case"linkViaPopup":case"linkViaRedirect":return bA;case"reauthViaPopup":case"reauthViaRedirect":return RA;default:Gt(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=new Hi(2e3,1e4);async function PA(t,e,n){if(Jt(t.app))return Promise.reject(en(t,"operation-not-supported-in-this-environment"));const r=Er(t);cw(t,e,nu);const s=Xm(r,n);return new Dr(r,"signInViaPopup",e,s).executeNotNull()}class Dr extends Zm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Dr.currentPopupAction&&Dr.currentPopupAction.cancel(),Dr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const e=ru();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SA.get())};e()}}Dr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="pendingRedirect",Mo=new Map;class kA extends Zm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Mo.get(this.auth._key());if(!e){try{const r=await OA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Mo.set(this.auth._key(),e)}return this.bypassAuthState||Mo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OA(t,e){const n=VA(e),r=DA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function NA(t,e){Mo.set(t._key(),e)}function DA(t){return Nn(t._redirectPersistence)}function VA(t){return Lo(CA,t.config.apiKey,t.name)}async function xA(t,e,n=!1){if(Jt(t.app))return Promise.reject(Dn(t));const r=Er(t),s=Xm(r,e),o=await new kA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA=10*60*1e3;class MA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!eg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(en(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xf(e))}saveEventToCache(e){this.cachedEventUids.add(Xf(e)),this.lastProcessedEventTime=Date.now()}}function Xf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function eg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UA(t,e={}){return Hn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qA=/^https?/;async function jA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await UA(t);for(const n of e)try{if($A(n))return}catch{}Gt(t,"unauthorized-domain")}function $A(t){const e=tl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qA.test(n))return!1;if(BA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA=new Hi(3e4,6e4);function Zf(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function WA(t){return new Promise((e,n)=>{var r,s,i;function o(){Zf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zf(),n(en(t,"network-request-failed"))},timeout:HA.get()})}if(!((s=(r=pn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=pn().gapi)===null||i===void 0)&&i.load)o();else{const c=Lw("iframefcb");return pn()[c]=()=>{gapi.load?o():n(en(t,"network-request-failed"))},Fm(`${xw()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Fo=null,e})}let Fo=null;function KA(t){return Fo=Fo||WA(t),Fo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=new Hi(5e3,15e3),zA="__/auth/iframe",QA="emulator/auth/iframe",YA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XA(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jl(e,QA):`https://${t.config.authDomain}/${zA}`,r={apiKey:e.apiKey,appName:t.name,v:Os},s=JA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${$i(r).slice(1)}`}async function ZA(t){const e=await KA(t),n=pn().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:XA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),c=pn().setTimeout(()=>{i(o)},GA.get());function l(){pn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tR=500,nR=600,rR="_blank",sR="http://localhost";class ed{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iR(t,e,n,r=tR,s=nR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},eR),{width:r.toString(),height:s.toString(),top:i,left:o}),h=Et().toLowerCase();n&&(c=Om(h)?rR:n),Cm(h)&&(e=e||sR,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[y,b])=>`${g}${y}=${b},`,"");if(bw(h)&&c!=="_self")return oR(e||"",c),new ed(null);const p=window.open(e||"",c,f);oe(p,t,"popup-blocked");try{p.focus()}catch{}return new ed(p)}function oR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR="__/auth/handler",cR="emulator/auth/handler",lR=encodeURIComponent("fac");async function td(t,e,n,r,s,i){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Os,eventId:s};if(e instanceof nu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",QT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ki){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${lR}=${encodeURIComponent(l)}`:"";return`${uR(t)}?${$i(c).slice(1)}${h}`}function uR({config:t}){return t.emulator?Jl(t,cR):`https://${t.authDomain}/${aR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc="webStorageSupport";class hR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gm,this._completeRedirectFn=xA,this._overrideRedirectResult=NA}async _openPopup(e,n,r,s){var i;Un((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await td(e,n,r,tl(),s);return iR(e,o,ru())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await td(e,n,r,tl(),s);return pA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Un(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ZA(e),r=new MA(e);return n.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kc,{type:kc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[kc];o!==void 0&&n(!!o),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lm()||km()||Zl()}}const fR=hR;var nd="@firebase/auth",rd="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mR(t){Ts(new Ur("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mm(t)},h=new Nw(r,s,i,l);return qw(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ts(new Ur("auth-internal",e=>{const n=Er(e.getProvider("auth").getImmediate());return(r=>new dR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fr(nd,rd,pR(t)),fr(nd,rd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=5*60,_R=pm("authIdTokenMaxAge")||gR;let sd=null;const yR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_R)return;const s=n==null?void 0:n.token;sd!==s&&(sd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function vR(t=ym()){const e=Gl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Bw(t,{popupRedirectResolver:fR,persistence:[wA,hA,Gm]}),r=pm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=yR(i.toString());aA(n,o,()=>o(n.currentUser)),oA(n,c=>o(c))}}const s=fm("auth");return s&&jw(n,`http://${s}`),n}function ER(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Dw({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=en("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ER().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mR("Browser");var TR="firebase",IR="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fr(TR,IR,"app");var id=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mr,tg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,v){function T(){}T.prototype=v.prototype,w.D=v.prototype,w.prototype=new T,w.prototype.constructor=w,w.C=function(A,R,P){for(var E=Array(arguments.length-2),Tt=2;Tt<arguments.length;Tt++)E[Tt-2]=arguments[Tt];return v.prototype[R].apply(A,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,v,T){T||(T=0);var A=Array(16);if(typeof v=="string")for(var R=0;16>R;++R)A[R]=v.charCodeAt(T++)|v.charCodeAt(T++)<<8|v.charCodeAt(T++)<<16|v.charCodeAt(T++)<<24;else for(R=0;16>R;++R)A[R]=v[T++]|v[T++]<<8|v[T++]<<16|v[T++]<<24;v=w.g[0],T=w.g[1],R=w.g[2];var P=w.g[3],E=v+(P^T&(R^P))+A[0]+3614090360&4294967295;v=T+(E<<7&4294967295|E>>>25),E=P+(R^v&(T^R))+A[1]+3905402710&4294967295,P=v+(E<<12&4294967295|E>>>20),E=R+(T^P&(v^T))+A[2]+606105819&4294967295,R=P+(E<<17&4294967295|E>>>15),E=T+(v^R&(P^v))+A[3]+3250441966&4294967295,T=R+(E<<22&4294967295|E>>>10),E=v+(P^T&(R^P))+A[4]+4118548399&4294967295,v=T+(E<<7&4294967295|E>>>25),E=P+(R^v&(T^R))+A[5]+1200080426&4294967295,P=v+(E<<12&4294967295|E>>>20),E=R+(T^P&(v^T))+A[6]+2821735955&4294967295,R=P+(E<<17&4294967295|E>>>15),E=T+(v^R&(P^v))+A[7]+4249261313&4294967295,T=R+(E<<22&4294967295|E>>>10),E=v+(P^T&(R^P))+A[8]+1770035416&4294967295,v=T+(E<<7&4294967295|E>>>25),E=P+(R^v&(T^R))+A[9]+2336552879&4294967295,P=v+(E<<12&4294967295|E>>>20),E=R+(T^P&(v^T))+A[10]+4294925233&4294967295,R=P+(E<<17&4294967295|E>>>15),E=T+(v^R&(P^v))+A[11]+2304563134&4294967295,T=R+(E<<22&4294967295|E>>>10),E=v+(P^T&(R^P))+A[12]+1804603682&4294967295,v=T+(E<<7&4294967295|E>>>25),E=P+(R^v&(T^R))+A[13]+4254626195&4294967295,P=v+(E<<12&4294967295|E>>>20),E=R+(T^P&(v^T))+A[14]+2792965006&4294967295,R=P+(E<<17&4294967295|E>>>15),E=T+(v^R&(P^v))+A[15]+1236535329&4294967295,T=R+(E<<22&4294967295|E>>>10),E=v+(R^P&(T^R))+A[1]+4129170786&4294967295,v=T+(E<<5&4294967295|E>>>27),E=P+(T^R&(v^T))+A[6]+3225465664&4294967295,P=v+(E<<9&4294967295|E>>>23),E=R+(v^T&(P^v))+A[11]+643717713&4294967295,R=P+(E<<14&4294967295|E>>>18),E=T+(P^v&(R^P))+A[0]+3921069994&4294967295,T=R+(E<<20&4294967295|E>>>12),E=v+(R^P&(T^R))+A[5]+3593408605&4294967295,v=T+(E<<5&4294967295|E>>>27),E=P+(T^R&(v^T))+A[10]+38016083&4294967295,P=v+(E<<9&4294967295|E>>>23),E=R+(v^T&(P^v))+A[15]+3634488961&4294967295,R=P+(E<<14&4294967295|E>>>18),E=T+(P^v&(R^P))+A[4]+3889429448&4294967295,T=R+(E<<20&4294967295|E>>>12),E=v+(R^P&(T^R))+A[9]+568446438&4294967295,v=T+(E<<5&4294967295|E>>>27),E=P+(T^R&(v^T))+A[14]+3275163606&4294967295,P=v+(E<<9&4294967295|E>>>23),E=R+(v^T&(P^v))+A[3]+4107603335&4294967295,R=P+(E<<14&4294967295|E>>>18),E=T+(P^v&(R^P))+A[8]+1163531501&4294967295,T=R+(E<<20&4294967295|E>>>12),E=v+(R^P&(T^R))+A[13]+2850285829&4294967295,v=T+(E<<5&4294967295|E>>>27),E=P+(T^R&(v^T))+A[2]+4243563512&4294967295,P=v+(E<<9&4294967295|E>>>23),E=R+(v^T&(P^v))+A[7]+1735328473&4294967295,R=P+(E<<14&4294967295|E>>>18),E=T+(P^v&(R^P))+A[12]+2368359562&4294967295,T=R+(E<<20&4294967295|E>>>12),E=v+(T^R^P)+A[5]+4294588738&4294967295,v=T+(E<<4&4294967295|E>>>28),E=P+(v^T^R)+A[8]+2272392833&4294967295,P=v+(E<<11&4294967295|E>>>21),E=R+(P^v^T)+A[11]+1839030562&4294967295,R=P+(E<<16&4294967295|E>>>16),E=T+(R^P^v)+A[14]+4259657740&4294967295,T=R+(E<<23&4294967295|E>>>9),E=v+(T^R^P)+A[1]+2763975236&4294967295,v=T+(E<<4&4294967295|E>>>28),E=P+(v^T^R)+A[4]+1272893353&4294967295,P=v+(E<<11&4294967295|E>>>21),E=R+(P^v^T)+A[7]+4139469664&4294967295,R=P+(E<<16&4294967295|E>>>16),E=T+(R^P^v)+A[10]+3200236656&4294967295,T=R+(E<<23&4294967295|E>>>9),E=v+(T^R^P)+A[13]+681279174&4294967295,v=T+(E<<4&4294967295|E>>>28),E=P+(v^T^R)+A[0]+3936430074&4294967295,P=v+(E<<11&4294967295|E>>>21),E=R+(P^v^T)+A[3]+3572445317&4294967295,R=P+(E<<16&4294967295|E>>>16),E=T+(R^P^v)+A[6]+76029189&4294967295,T=R+(E<<23&4294967295|E>>>9),E=v+(T^R^P)+A[9]+3654602809&4294967295,v=T+(E<<4&4294967295|E>>>28),E=P+(v^T^R)+A[12]+3873151461&4294967295,P=v+(E<<11&4294967295|E>>>21),E=R+(P^v^T)+A[15]+530742520&4294967295,R=P+(E<<16&4294967295|E>>>16),E=T+(R^P^v)+A[2]+3299628645&4294967295,T=R+(E<<23&4294967295|E>>>9),E=v+(R^(T|~P))+A[0]+4096336452&4294967295,v=T+(E<<6&4294967295|E>>>26),E=P+(T^(v|~R))+A[7]+1126891415&4294967295,P=v+(E<<10&4294967295|E>>>22),E=R+(v^(P|~T))+A[14]+2878612391&4294967295,R=P+(E<<15&4294967295|E>>>17),E=T+(P^(R|~v))+A[5]+4237533241&4294967295,T=R+(E<<21&4294967295|E>>>11),E=v+(R^(T|~P))+A[12]+1700485571&4294967295,v=T+(E<<6&4294967295|E>>>26),E=P+(T^(v|~R))+A[3]+2399980690&4294967295,P=v+(E<<10&4294967295|E>>>22),E=R+(v^(P|~T))+A[10]+4293915773&4294967295,R=P+(E<<15&4294967295|E>>>17),E=T+(P^(R|~v))+A[1]+2240044497&4294967295,T=R+(E<<21&4294967295|E>>>11),E=v+(R^(T|~P))+A[8]+1873313359&4294967295,v=T+(E<<6&4294967295|E>>>26),E=P+(T^(v|~R))+A[15]+4264355552&4294967295,P=v+(E<<10&4294967295|E>>>22),E=R+(v^(P|~T))+A[6]+2734768916&4294967295,R=P+(E<<15&4294967295|E>>>17),E=T+(P^(R|~v))+A[13]+1309151649&4294967295,T=R+(E<<21&4294967295|E>>>11),E=v+(R^(T|~P))+A[4]+4149444226&4294967295,v=T+(E<<6&4294967295|E>>>26),E=P+(T^(v|~R))+A[11]+3174756917&4294967295,P=v+(E<<10&4294967295|E>>>22),E=R+(v^(P|~T))+A[2]+718787259&4294967295,R=P+(E<<15&4294967295|E>>>17),E=T+(P^(R|~v))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+P&4294967295}r.prototype.u=function(w,v){v===void 0&&(v=w.length);for(var T=v-this.blockSize,A=this.B,R=this.h,P=0;P<v;){if(R==0)for(;P<=T;)s(this,w,P),P+=this.blockSize;if(typeof w=="string"){for(;P<v;)if(A[R++]=w.charCodeAt(P++),R==this.blockSize){s(this,A),R=0;break}}else for(;P<v;)if(A[R++]=w[P++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=v},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;var T=8*this.o;for(v=w.length-8;v<w.length;++v)w[v]=T&255,T/=256;for(this.u(w),w=Array(16),v=T=0;4>v;++v)for(var A=0;32>A;A+=8)w[T++]=this.g[v]>>>A&255;return w};function i(w,v){var T=c;return Object.prototype.hasOwnProperty.call(T,w)?T[w]:T[w]=v(w)}function o(w,v){this.h=v;for(var T=[],A=!0,R=w.length-1;0<=R;R--){var P=w[R]|0;A&&P==v||(T[R]=P,A=!1)}this.g=T}var c={};function l(w){return-128<=w&&128>w?i(w,function(v){return new o([v|0],0>v?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return N(h(-w));for(var v=[],T=1,A=0;w>=T;A++)v[A]=w/T|0,T*=4294967296;return new o(v,0)}function f(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return N(f(w.substring(1),v));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(v,8)),A=p,R=0;R<w.length;R+=8){var P=Math.min(8,w.length-R),E=parseInt(w.substring(R,R+P),v);8>P?(P=h(Math.pow(v,P)),A=A.j(P).add(h(E))):(A=A.j(T),A=A.add(h(E)))}return A}var p=l(0),g=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-N(this).m();for(var w=0,v=1,T=0;T<this.g.length;T++){var A=this.i(T);w+=(0<=A?A:4294967296+A)*v,v*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(b(this))return"0";if(k(this))return"-"+N(this).toString(w);for(var v=h(Math.pow(w,6)),T=this,A="";;){var R=K(T,v).g;T=q(T,R.j(v));var P=((0<T.g.length?T.g[0]:T.h)>>>0).toString(w);if(T=R,b(T))return P+A;for(;6>P.length;)P="0"+P;A=P+A}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function b(w){if(w.h!=0)return!1;for(var v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function k(w){return w.h==-1}t.l=function(w){return w=q(this,w),k(w)?-1:b(w)?0:1};function N(w){for(var v=w.g.length,T=[],A=0;A<v;A++)T[A]=~w.g[A];return new o(T,~w.h).add(g)}t.abs=function(){return k(this)?N(this):this},t.add=function(w){for(var v=Math.max(this.g.length,w.g.length),T=[],A=0,R=0;R<=v;R++){var P=A+(this.i(R)&65535)+(w.i(R)&65535),E=(P>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);A=E>>>16,P&=65535,E&=65535,T[R]=E<<16|P}return new o(T,T[T.length-1]&-2147483648?-1:0)};function q(w,v){return w.add(N(v))}t.j=function(w){if(b(this)||b(w))return p;if(k(this))return k(w)?N(this).j(N(w)):N(N(this).j(w));if(k(w))return N(this.j(N(w)));if(0>this.l(y)&&0>w.l(y))return h(this.m()*w.m());for(var v=this.g.length+w.g.length,T=[],A=0;A<2*v;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<w.g.length;R++){var P=this.i(A)>>>16,E=this.i(A)&65535,Tt=w.i(R)>>>16,Ut=w.i(R)&65535;T[2*A+2*R]+=E*Ut,F(T,2*A+2*R),T[2*A+2*R+1]+=P*Ut,F(T,2*A+2*R+1),T[2*A+2*R+1]+=E*Tt,F(T,2*A+2*R+1),T[2*A+2*R+2]+=P*Tt,F(T,2*A+2*R+2)}for(A=0;A<v;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=v;A<2*v;A++)T[A]=0;return new o(T,0)};function F(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function $(w,v){this.g=w,this.h=v}function K(w,v){if(b(v))throw Error("division by zero");if(b(w))return new $(p,p);if(k(w))return v=K(N(w),v),new $(N(v.g),N(v.h));if(k(v))return v=K(w,N(v)),new $(N(v.g),v.h);if(30<w.g.length){if(k(w)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var T=g,A=v;0>=A.l(w);)T=ue(T),A=ue(A);var R=de(T,1),P=de(A,1);for(A=de(A,2),T=de(T,2);!b(A);){var E=P.add(A);0>=E.l(w)&&(R=R.add(T),P=E),A=de(A,1),T=de(T,1)}return v=q(w,R.j(v)),new $(R,v)}for(R=p;0<=w.l(v);){for(T=Math.max(1,Math.floor(w.m()/v.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),P=h(T),E=P.j(v);k(E)||0<E.l(w);)T-=A,P=h(T),E=P.j(v);b(P)&&(P=g),R=R.add(P),w=q(w,E)}return new $(R,w)}t.A=function(w){return K(this,w).h},t.and=function(w){for(var v=Math.max(this.g.length,w.g.length),T=[],A=0;A<v;A++)T[A]=this.i(A)&w.i(A);return new o(T,this.h&w.h)},t.or=function(w){for(var v=Math.max(this.g.length,w.g.length),T=[],A=0;A<v;A++)T[A]=this.i(A)|w.i(A);return new o(T,this.h|w.h)},t.xor=function(w){for(var v=Math.max(this.g.length,w.g.length),T=[],A=0;A<v;A++)T[A]=this.i(A)^w.i(A);return new o(T,this.h^w.h)};function ue(w){for(var v=w.g.length+1,T=[],A=0;A<v;A++)T[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(T,w.h)}function de(w,v){var T=v>>5;v%=32;for(var A=w.g.length-T,R=[],P=0;P<A;P++)R[P]=0<v?w.i(P+T)>>>v|w.i(P+T+1)<<32-v:w.i(P+T);return new o(R,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,tg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Mr=o}).apply(typeof id<"u"?id:typeof self<"u"?self:typeof window<"u"?window:{});var Ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ng,si,rg,Uo,il,sg,ig,og;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ao=="object"&&Ao];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in d))break e;d=d[C]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,C={next:function(){if(!m&&d<a.length){var O=d++;return{value:u(O,a[O]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),a.apply(u,C)}}return function(){return a.apply(u,arguments)}}function g(a,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function y(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function b(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,C,O){for(var W=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)W[Ce-2]=arguments[Ce];return u.prototype[C].apply(m,W)}}function k(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function N(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const C=a.length||0,O=m.length||0;a.length=C+O;for(let W=0;W<O;W++)a[C+W]=m[W]}else a.push(m)}}class q{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(a){return/^[\s\xa0]*$/.test(a)}function $(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function K(a){return K[" "](a),a}K[" "]=function(){};var ue=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function de(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function w(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function v(a){const u={};for(const d in a)u[d]=a[d];return u}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,u){let d,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(d in m)a[d]=m[d];for(let O=0;O<T.length;O++)d=T[O],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function R(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function P(a){c.setTimeout(()=>{throw a},0)}function E(){var a=Nt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Tt{constructor(){this.h=this.g=null}add(u,d){const m=Ut.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Ut=new q(()=>new $e,a=>a.reset());class $e{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,me=!1,Nt=new Tt,Qt=()=>{const a=c.Promise.resolve(void 0);ye=()=>{a.then(Bt)}};var Bt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(d){P(d)}var u=Ut;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}me=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Me(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var Kn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function Dt(a,u){if(Me.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(ue){e:{try{K(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Pt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Dt.aa.h.call(this)}}b(Dt,Me);var Pt={2:"touch",3:"pen",4:"mouse"};Dt.prototype.h=function(){Dt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),J=0;function z(a,u,d,m,C){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=C,this.key=++J,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function pe(a){this.src=a,this.g={},this.h=0}pe.prototype.add=function(a,u,d,m,C){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var W=I(a,u,m,C);return-1<W?(u=a[W],d||(u.fa=!1)):(u=new z(u,this.src,O,!!m,C),u.fa=d,a.push(u)),u};function _(a,u){var d=u.type;if(d in a.g){var m=a.g[d],C=Array.prototype.indexOf.call(m,u,void 0),O;(O=0<=C)&&Array.prototype.splice.call(m,C,1),O&&(Z(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function I(a,u,d,m){for(var C=0;C<a.length;++C){var O=a[C];if(!O.da&&O.listener==u&&O.capture==!!d&&O.ha==m)return C}return-1}var S="closure_lm_"+(1e6*Math.random()|0),V={};function M(a,u,d,m,C){if(Array.isArray(u)){for(var O=0;O<u.length;O++)M(a,u[O],d,m,C);return null}return d=ie(d),a&&a[D]?a.K(u,d,h(m)?!!m.capture:!1,C):x(a,u,d,!1,m,C)}function x(a,u,d,m,C,O){if(!u)throw Error("Invalid event type");var W=h(C)?!!C.capture:!!C,Ce=Q(a);if(Ce||(a[S]=Ce=new pe(a)),d=Ce.add(u,d,m,W,O),d.proxy)return d;if(m=G(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)Kn||(C=W),C===void 0&&(C=!1),a.addEventListener(u.toString(),m,C);else if(a.attachEvent)a.attachEvent(U(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function a(d){return u.call(a.src,a.listener,d)}const u=ne;return a}function H(a,u,d,m,C){if(Array.isArray(u))for(var O=0;O<u.length;O++)H(a,u[O],d,m,C);else m=h(m)?!!m.capture:!!m,d=ie(d),a&&a[D]?(a=a.i,u=String(u).toString(),u in a.g&&(O=a.g[u],d=I(O,d,m,C),-1<d&&(Z(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete a.g[u],a.h--)))):a&&(a=Q(a))&&(u=a.g[u.toString()],a=-1,u&&(a=I(u,d,m,C)),(d=-1<a?u[a]:null)&&j(d))}function j(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[D])_(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(U(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=Q(u))?(_(d,a),d.h==0&&(d.src=null,u[S]=null)):Z(a)}}}function U(a){return a in V?V[a]:V[a]="on"+a}function ne(a,u){if(a.da)a=!0;else{u=new Dt(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&j(a),a=d.call(m,u)}return a}function Q(a){return a=a[S],a instanceof pe?a:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function ie(a){return typeof a=="function"?a:(a[ee]||(a[ee]=function(u){return a.handleEvent(u)}),a[ee])}function re(){Le.call(this),this.i=new pe(this),this.M=this,this.F=null}b(re,Le),re.prototype[D]=!0,re.prototype.removeEventListener=function(a,u,d,m){H(this,a,u,d,m)};function fe(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new Me(u,a);else if(u instanceof Me)u.target=u.target||a;else{var C=u;u=new Me(m,a),A(u,C)}if(C=!0,d)for(var O=d.length-1;0<=O;O--){var W=u.g=d[O];C=ve(W,m,!0,u)&&C}if(W=u.g=a,C=ve(W,m,!0,u)&&C,C=ve(W,m,!1,u)&&C,d)for(O=0;O<d.length;O++)W=u.g=d[O],C=ve(W,m,!1,u)&&C}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)Z(d[m]);delete a.g[u],a.h--}}this.F=null},re.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},re.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function ve(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,O=0;O<u.length;++O){var W=u[O];if(W&&!W.da&&W.capture==d){var Ce=W.listener,it=W.ha||W.src;W.fa&&_(a.i,W),C=Ce.call(it,m)!==!1&&C}}return C&&!m.defaultPrevented}function nt(a,u,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function rt(a){a.g=nt(()=>{a.g=null,a.i&&(a.i=!1,rt(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class qt extends Le{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:rt(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ut(a){Le.call(this),this.h=a,this.g={}}b(ut,Le);var Gn=[];function Ms(a){de(a.g,function(u,d){this.g.hasOwnProperty(d)&&j(u)},a),a.g={}}ut.prototype.N=function(){ut.aa.N.call(this),Ms(this)},ut.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var st=c.JSON.stringify,jt=c.JSON.parse,no=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Yr(){}Yr.prototype.h=null;function Bu(a){return a.h||(a.h=a.i())}function qu(){}var Fs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ya(){Me.call(this,"d")}b(Ya,Me);function Ja(){Me.call(this,"c")}b(Ja,Me);var Ir={},ju=null;function ro(){return ju=ju||new re}Ir.La="serverreachability";function $u(a){Me.call(this,Ir.La,a)}b($u,Me);function Us(a){const u=ro();fe(u,new $u(u))}Ir.STAT_EVENT="statevent";function Hu(a,u){Me.call(this,Ir.STAT_EVENT,a),this.stat=u}b(Hu,Me);function It(a){const u=ro();fe(u,new Hu(u,a))}Ir.Ma="timingevent";function Wu(a,u){Me.call(this,Ir.Ma,a),this.size=u}b(Wu,Me);function Bs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function qs(){this.g=!0}qs.prototype.xa=function(){this.g=!1};function S_(a,u,d,m,C,O){a.info(function(){if(a.g)if(O)for(var W="",Ce=O.split("&"),it=0;it<Ce.length;it++){var Te=Ce[it].split("=");if(1<Te.length){var ht=Te[0];Te=Te[1];var ft=ht.split("_");W=2<=ft.length&&ft[1]=="type"?W+(ht+"="+Te+"&"):W+(ht+"=redacted&")}}else W=null;else W=O;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+u+`
`+d+`
`+W})}function P_(a,u,d,m,C,O,W){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+u+`
`+d+`
`+O+" "+W})}function Jr(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+k_(a,d)+(m?" "+m:"")})}function C_(a,u){a.info(function(){return"TIMEOUT: "+u})}qs.prototype.info=function(){};function k_(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var O=C[0];if(O!="noop"&&O!="stop"&&O!="close")for(var W=1;W<C.length;W++)C[W]=""}}}}return st(d)}catch{return u}}var so={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ku={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xa;function io(){}b(io,Yr),io.prototype.g=function(){return new XMLHttpRequest},io.prototype.i=function(){return{}},Xa=new io;function zn(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new ut(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Gu}function Gu(){this.i=null,this.g="",this.h=!1}var zu={},Za={};function ec(a,u,d){a.L=1,a.v=lo(Tn(u)),a.m=d,a.P=!0,Qu(a,null)}function Qu(a,u){a.F=Date.now(),oo(a),a.A=Tn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),lh(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Gu,a.g=Sh(a.j,d?u:null,!a.m),0<a.O&&(a.M=new qt(g(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Gn[0]=C.toString()),C=Gn);for(var O=0;O<C.length;O++){var W=M(d,C[O],m||u.handleEvent,!1,u.h||u);if(!W)break;u.g[W.key]=W}u=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Us(),S_(a.i,a.u,a.A,a.l,a.R,a.m)}zn.prototype.ca=function(a){a=a.target;const u=this.M;u&&In(a)==3?u.j():this.Y(a)},zn.prototype.Y=function(a){try{if(a==this.g)e:{const ft=In(this.g);var u=this.g.Ba();const es=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||gh(this.g)))){this.J||ft!=4||u==7||(u==8||0>=es?Us(3):Us(2)),tc(this);var d=this.g.Z();this.X=d;t:if(Yu(this)){var m=gh(this.g);a="";var C=m.length,O=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wr(this),js(this);var W="";break t}this.h.i=new c.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(O&&u==C-1)});m.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=d==200,P_(this.i,this.u,this.A,this.l,this.R,ft,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ce,it=this.g;if((Ce=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Ce)){var Te=Ce;break t}}Te=null}if(d=Te)Jr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,nc(this,d);else{this.o=!1,this.s=3,It(12),wr(this),js(this);break e}}if(this.P){d=!0;let Yt;for(;!this.J&&this.C<W.length;)if(Yt=O_(this,W),Yt==Za){ft==4&&(this.s=4,It(14),d=!1),Jr(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==zu){this.s=4,It(15),Jr(this.i,this.l,W,"[Invalid Chunk]"),d=!1;break}else Jr(this.i,this.l,Yt,null),nc(this,Yt);if(Yu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||W.length!=0||this.h.h||(this.s=1,It(16),d=!1),this.o=this.o&&d,!d)Jr(this.i,this.l,W,"[Invalid Chunked Response]"),wr(this),js(this);else if(0<W.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),cc(ht),ht.M=!0,It(11))}}else Jr(this.i,this.l,W,null),nc(this,W);ft==4&&wr(this),this.o&&!this.J&&(ft==4?wh(this.j,this):(this.o=!1,oo(this)))}else z_(this.g),d==400&&0<W.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),wr(this),js(this)}}}catch{}finally{}};function Yu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function O_(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?Za:(d=Number(u.substring(d,m)),isNaN(d)?zu:(m+=1,m+d>u.length?Za:(u=u.slice(m,m+d),a.C=m+d,u)))}zn.prototype.cancel=function(){this.J=!0,wr(this)};function oo(a){a.S=Date.now()+a.I,Ju(a,a.I)}function Ju(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Bs(g(a.ba,a),u)}function tc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}zn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(C_(this.i,this.A),this.L!=2&&(Us(),It(17)),wr(this),this.s=2,js(this)):Ju(this,this.S-a)};function js(a){a.j.G==0||a.J||wh(a.j,a)}function wr(a){tc(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Ms(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function nc(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||rc(d.h,a))){if(!a.K&&rc(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)go(d),po(d);else break e;ac(d),It(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Bs(g(d.Za,d),6e3));if(1>=eh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Rr(d,11)}else if((a.K||d.g==a)&&go(d),!F(u))for(C=d.Da.g.parse(u),u=0;u<C.length;u++){let Te=C[u];if(d.T=Te[0],Te=Te[1],d.G==2)if(Te[0]=="c"){d.K=Te[1],d.ia=Te[2];const ht=Te[3];ht!=null&&(d.la=ht,d.j.info("VER="+d.la));const ft=Te[4];ft!=null&&(d.Aa=ft,d.j.info("SVER="+d.Aa));const es=Te[5];es!=null&&typeof es=="number"&&0<es&&(m=1.5*es,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Yt=a.g;if(Yt){const yo=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yo){var O=m.h;O.g||yo.indexOf("spdy")==-1&&yo.indexOf("quic")==-1&&yo.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(sc(O,O.h),O.h=null))}if(m.D){const lc=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;lc&&(m.ya=lc,De(m.I,m.D,lc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var W=a;if(m.qa=bh(m,m.J?m.ia:null,m.W),W.K){th(m.h,W);var Ce=W,it=m.L;it&&(Ce.I=it),Ce.B&&(tc(Ce),oo(Ce)),m.g=W}else Th(m);0<d.i.length&&mo(d)}else Te[0]!="stop"&&Te[0]!="close"||Rr(d,7);else d.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?Rr(d,7):oc(d):Te[0]!="noop"&&d.l&&d.l.ta(Te),d.v=0)}}Us(4)}catch{}}var N_=class{constructor(a,u){this.g=a,this.map=u}};function Xu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function eh(a){return a.h?1:a.g?a.g.size:0}function rc(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function sc(a,u){a.g?a.g.add(u):a.h=u}function th(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Xu.prototype.cancel=function(){if(this.i=nh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function nh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return k(a.i)}function D_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function V_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function rh(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=V_(a),m=D_(a),C=m.length,O=0;O<C;O++)u.call(void 0,m[O],d&&d[O],a)}var sh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function x_(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),C=null;if(0<=m){var O=a[d].substring(0,m);C=a[d].substring(m+1)}else O=a[d];u(O,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Ar(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ar){this.h=a.h,ao(this,a.j),this.o=a.o,this.g=a.g,co(this,a.s),this.l=a.l;var u=a.i,d=new Ws;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),ih(this,d),this.m=a.m}else a&&(u=String(a).match(sh))?(this.h=!1,ao(this,u[1]||"",!0),this.o=$s(u[2]||""),this.g=$s(u[3]||"",!0),co(this,u[4]),this.l=$s(u[5]||"",!0),ih(this,u[6]||"",!0),this.m=$s(u[7]||"")):(this.h=!1,this.i=new Ws(null,this.h))}Ar.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Hs(u,oh,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Hs(u,oh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Hs(d,d.charAt(0)=="/"?F_:M_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Hs(d,B_)),a.join("")};function Tn(a){return new Ar(a)}function ao(a,u,d){a.j=d?$s(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function co(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function ih(a,u,d){u instanceof Ws?(a.i=u,q_(a.i,a.h)):(d||(u=Hs(u,U_)),a.i=new Ws(u,a.h))}function De(a,u,d){a.i.set(u,d)}function lo(a){return De(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function $s(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Hs(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,L_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function L_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var oh=/[#\/\?@]/g,M_=/[#\?:]/g,F_=/[#\?]/g,U_=/[#\?@]/g,B_=/#/g;function Ws(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Qn(a){a.g||(a.g=new Map,a.h=0,a.i&&x_(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Ws.prototype,t.add=function(a,u){Qn(this),this.i=null,a=Xr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function ah(a,u){Qn(a),u=Xr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function ch(a,u){return Qn(a),u=Xr(a,u),a.g.has(u)}t.forEach=function(a,u){Qn(this),this.g.forEach(function(d,m){d.forEach(function(C){a.call(u,C,m,this)},this)},this)},t.na=function(){Qn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const C=a[m];for(let O=0;O<C.length;O++)d.push(u[m])}return d},t.V=function(a){Qn(this);let u=[];if(typeof a=="string")ch(this,a)&&(u=u.concat(this.g.get(Xr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},t.set=function(a,u){return Qn(this),this.i=null,a=Xr(this,a),ch(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function lh(a,u,d){ah(a,u),0<d.length&&(a.i=null,a.g.set(Xr(a,u),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const O=encodeURIComponent(String(m)),W=this.V(m);for(m=0;m<W.length;m++){var C=O;W[m]!==""&&(C+="="+encodeURIComponent(String(W[m]))),a.push(C)}}return this.i=a.join("&")};function Xr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function q_(a,u){u&&!a.j&&(Qn(a),a.i=null,a.g.forEach(function(d,m){var C=m.toLowerCase();m!=C&&(ah(this,m),lh(this,C,d))},a)),a.j=u}function j_(a,u){const d=new qs;if(c.Image){const m=new Image;m.onload=y(Yn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=y(Yn,d,"TestLoadImage: error",!1,u,m),m.onabort=y(Yn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=y(Yn,d,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function $_(a,u){const d=new qs,m=new AbortController,C=setTimeout(()=>{m.abort(),Yn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(O=>{clearTimeout(C),O.ok?Yn(d,"TestPingServer: ok",!0,u):Yn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Yn(d,"TestPingServer: error",!1,u)})}function Yn(a,u,d,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(d)}catch{}}function H_(){this.g=new no}function W_(a,u,d){const m=d||"";try{rh(a,function(C,O){let W=C;h(C)&&(W=st(C)),u.push(m+O+"="+encodeURIComponent(W))})}catch(C){throw u.push(m+"type="+encodeURIComponent("_badmap")),C}}function uo(a){this.l=a.Ub||null,this.j=a.eb||!1}b(uo,Yr),uo.prototype.g=function(){return new ho(this.l,this.j)},uo.prototype.i=function(a){return function(){return a}}({});function ho(a,u){re.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(ho,re),t=ho.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Gs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ks(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Gs(this)),this.g&&(this.readyState=3,Gs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;uh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function uh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ks(this):Gs(this),this.readyState==3&&uh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ks(this))},t.Qa=function(a){this.g&&(this.response=a,Ks(this))},t.ga=function(){this.g&&Ks(this)};function Ks(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Gs(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Gs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ho.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function hh(a){let u="";return de(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function ic(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=hh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):De(a,u,d))}function Ue(a){re.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(Ue,re);var K_=/^https?$/i,G_=["POST","PUT"];t=Ue.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xa.g(),this.v=this.o?Bu(this.o):Bu(Xa),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(O){fh(this,O);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)d.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const O of m.keys())d.set(O,m.get(O));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),C=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(G_,u,void 0))||m||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,W]of d)this.g.setRequestHeader(O,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{mh(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){fh(this,O)}};function fh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,dh(a),fo(a)}function dh(a){a.A||(a.A=!0,fe(a,"complete"),fe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,fe(this,"complete"),fe(this,"abort"),fo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fo(this,!0)),Ue.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ph(this):this.bb())},t.bb=function(){ph(this)};function ph(a){if(a.h&&typeof o<"u"&&(!a.v[1]||In(a)!=4||a.Z()!=2)){if(a.u&&In(a)==4)nt(a.Ea,0,a);else if(fe(a,"readystatechange"),In(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=W===0){var C=String(a.D).match(sh)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),m=!K_.test(C?C.toLowerCase():"")}d=m}if(d)fe(a,"complete"),fe(a,"success");else{a.m=6;try{var O=2<In(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",dh(a)}}finally{fo(a)}}}}function fo(a,u){if(a.g){mh(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||fe(a,"ready");try{d.onreadystatechange=m}catch{}}}function mh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function In(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),jt(u)}};function gh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function z_(a){const u={};a=(a.g&&2<=In(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(F(a[m]))continue;var d=R(a[m]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=u[C]||[];u[C]=O,O.push(d)}w(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zs(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function _h(a){this.Aa=0,this.i=[],this.j=new qs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zs("baseRetryDelayMs",5e3,a),this.cb=zs("retryDelaySeedMs",1e4,a),this.Wa=zs("forwardChannelMaxRetries",2,a),this.wa=zs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Xu(a&&a.concurrentRequestLimit),this.Da=new H_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=_h.prototype,t.la=8,t.G=1,t.connect=function(a,u,d,m){It(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=bh(this,null,this.W),mo(this)};function oc(a){if(yh(a),a.G==3){var u=a.U++,d=Tn(a.I);if(De(d,"SID",a.K),De(d,"RID",u),De(d,"TYPE","terminate"),Qs(a,d),u=new zn(a,a.j,u),u.L=2,u.v=lo(Tn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=Sh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),oo(u)}Rh(a)}function po(a){a.g&&(cc(a),a.g.cancel(),a.g=null)}function yh(a){po(a),a.u&&(c.clearTimeout(a.u),a.u=null),go(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function mo(a){if(!Zu(a.h)&&!a.s){a.s=!0;var u=a.Ga;ye||Qt(),me||(ye(),me=!0),Nt.add(u,a),a.B=0}}function Q_(a,u){return eh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Bs(g(a.Ga,a,u),Ah(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new zn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=v(O),A(O,this.S)):O=this.S),this.m!==null||this.O||(C.H=O,O=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Eh(this,C,u),d=Tn(this.I),De(d,"RID",a),De(d,"CVER",22),this.D&&De(d,"X-HTTP-Session-Id",this.D),Qs(this,d),O&&(this.O?u="headers="+encodeURIComponent(String(hh(O)))+"&"+u:this.m&&ic(d,this.m,O)),sc(this.h,C),this.Ua&&De(d,"TYPE","init"),this.P?(De(d,"$req",u),De(d,"SID","null"),C.T=!0,ec(C,d,null)):ec(C,d,u),this.G=2}}else this.G==3&&(a?vh(this,a):this.i.length==0||Zu(this.h)||vh(this))};function vh(a,u){var d;u?d=u.l:d=a.U++;const m=Tn(a.I);De(m,"SID",a.K),De(m,"RID",d),De(m,"AID",a.T),Qs(a,m),a.m&&a.o&&ic(m,a.m,a.o),d=new zn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Eh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),sc(a.h,d),ec(d,m,u)}function Qs(a,u){a.H&&de(a.H,function(d,m){De(u,m,d)}),a.l&&rh({},function(d,m){De(u,m,d)})}function Eh(a,u,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var C=a.i;let O=-1;for(;;){const W=["count="+d];O==-1?0<d?(O=C[0].g,W.push("ofs="+O)):O=0:W.push("ofs="+O);let Ce=!0;for(let it=0;it<d;it++){let Te=C[it].g;const ht=C[it].map;if(Te-=O,0>Te)O=Math.max(0,C[it].g-100),Ce=!1;else try{W_(ht,W,"req"+Te+"_")}catch{m&&m(ht)}}if(Ce){m=W.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function Th(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ye||Qt(),me||(ye(),me=!0),Nt.add(u,a),a.v=0}}function ac(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Bs(g(a.Fa,a),Ah(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ih(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Bs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),po(this),Ih(this))};function cc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Ih(a){a.g=new zn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=Tn(a.qa);De(u,"RID","rpc"),De(u,"SID",a.K),De(u,"AID",a.T),De(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&De(u,"TO",a.ja),De(u,"TYPE","xmlhttp"),Qs(a,u),a.m&&a.o&&ic(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=lo(Tn(u)),d.m=null,d.P=!0,Qu(d,a)}t.Za=function(){this.C!=null&&(this.C=null,po(this),ac(this),It(19))};function go(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function wh(a,u){var d=null;if(a.g==u){go(a),cc(a),a.g=null;var m=2}else if(rc(a.h,u))d=u.D,th(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var C=a.B;m=ro(),fe(m,new Wu(m,d)),mo(a)}else Th(a);else if(C=u.s,C==3||C==0&&0<u.X||!(m==1&&Q_(a,u)||m==2&&ac(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),C){case 1:Rr(a,5);break;case 4:Rr(a,10);break;case 3:Rr(a,6);break;default:Rr(a,2)}}}function Ah(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function Rr(a,u){if(a.j.info("Error code "+u),u==2){var d=g(a.fb,a),m=a.Xa;const C=!m;m=new Ar(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ao(m,"https"),lo(m),C?j_(m.toString(),d):$_(m.toString(),d)}else It(2);a.G=0,a.l&&a.l.sa(u),Rh(a),yh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Rh(a){if(a.G=0,a.ka=[],a.l){const u=nh(a.h);(u.length!=0||a.i.length!=0)&&(N(a.ka,u),N(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function bh(a,u,d){var m=d instanceof Ar?Tn(d):new Ar(d);if(m.g!="")u&&(m.g=u+"."+m.g),co(m,m.s);else{var C=c.location;m=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var O=new Ar(null);m&&ao(O,m),u&&(O.g=u),C&&co(O,C),d&&(O.l=d),m=O}return d=a.D,u=a.ya,d&&u&&De(m,d,u),De(m,"VER",a.la),Qs(a,m),m}function Sh(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Ue(new uo({eb:d})):new Ue(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ph(){}t=Ph.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function _o(){}_o.prototype.g=function(a,u){return new Vt(a,u)};function Vt(a,u){re.call(this),this.g=new _h(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!F(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!F(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Zr(this)}b(Vt,re),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){oc(this.g)},Vt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=st(a),a=d);u.i.push(new N_(u.Ya++,a)),u.G==3&&mo(u)},Vt.prototype.N=function(){this.g.l=null,delete this.j,oc(this.g),delete this.g,Vt.aa.N.call(this)};function Ch(a){Ya.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}b(Ch,Ya);function kh(){Ja.call(this),this.status=1}b(kh,Ja);function Zr(a){this.g=a}b(Zr,Ph),Zr.prototype.ua=function(){fe(this.g,"a")},Zr.prototype.ta=function(a){fe(this.g,new Ch(a))},Zr.prototype.sa=function(a){fe(this.g,new kh)},Zr.prototype.ra=function(){fe(this.g,"b")},_o.prototype.createWebChannel=_o.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,og=function(){return new _o},ig=function(){return ro()},sg=Ir,il={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},so.NO_ERROR=0,so.TIMEOUT=8,so.HTTP_ERROR=6,Uo=so,Ku.COMPLETE="complete",rg=Ku,qu.EventType=Fs,Fs.OPEN="a",Fs.CLOSE="b",Fs.ERROR="c",Fs.MESSAGE="d",re.prototype.listen=re.prototype.K,si=qu,Ue.prototype.listenOnce=Ue.prototype.L,Ue.prototype.getLastError=Ue.prototype.Ka,Ue.prototype.getLastErrorCode=Ue.prototype.Ba,Ue.prototype.getStatus=Ue.prototype.Z,Ue.prototype.getResponseJson=Ue.prototype.Oa,Ue.prototype.getResponseText=Ue.prototype.oa,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Ha,ng=Ue}).apply(typeof Ao<"u"?Ao:typeof self<"u"?self:typeof window<"u"?window:{});const od="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new Wl("@firebase/firestore");function Zs(){return jr.logLevel}function X(t,...e){if(jr.logLevel<=_e.DEBUG){const n=e.map(iu);jr.debug(`Firestore (${Ds}): ${t}`,...n)}}function Bn(t,...e){if(jr.logLevel<=_e.ERROR){const n=e.map(iu);jr.error(`Firestore (${Ds}): ${t}`,...n)}}function ws(t,...e){if(jr.logLevel<=_e.WARN){const n=e.map(iu);jr.warn(`Firestore (${Ds}): ${t}`,...n)}}function iu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${Ds}) INTERNAL ASSERTION FAILED: `+t;throw Bn(e),new Error(e)}function be(t,e){t||ae()}function le(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends $n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class AR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class RR{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){be(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Vn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new ag(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new pt(e)}}class bR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class SR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new bR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class PR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){be(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.R=n.token,new PR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=kR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function As(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new Ye(0,0))}static max(){return new ce(new Ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(),r===void 0?r=e.length-n:r>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Oi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Oi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ve extends Oi{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const OR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Oi{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return OR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Y(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Y(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new Y(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(Ve.fromString(e))}static fromName(e){return new te(Ve.fromString(e).popFirst(5))}static empty(){return new te(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new Ve(e.slice()))}}function NR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new gr(s,te.empty(),e)}function DR(t){return new gr(t.readTime,t.key,-1)}class gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gr(ce.min(),te.empty(),-1)}static max(){return new gr(ce.max(),te.empty(),-1)}}function VR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==xR)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{o[h]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function MR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Qi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ou.oe=-1;function Oa(t){return t==null}function ia(t){return t===0&&1/t==-1/0}function FR(t){return typeof t=="number"&&Number.isInteger(t)&&!ia(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Kr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ro(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ro(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ro(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ro(this.root,e,this.comparator,!0)}}class Ro{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ot.RED,this.left=s??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ot(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cd(this.data.getIterator())}getIteratorFrom(e){return new cd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class cd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new ct(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return As(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ug("Invalid base64 string: "+i):i}}(e);return new lt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const UR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _r(t){if(be(!!t),typeof t=="string"){let e=0;const n=UR.exec(t);if(be(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $r(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cu(t){const e=t.mapValue.fields.__previous_value__;return au(e)?cu(e):e}function Ni(t){const e=_r(t.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,n,r,s,i,o,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class Di{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Di("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Di&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo={mapValue:{}};function Hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?au(t)?4:jR(t)?9007199254740991:qR(t)?10:11:ae()}function vn(t,e){if(t===e)return!0;const n=Hr(t);if(n!==Hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ni(t).isEqual(Ni(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=_r(s.timestampValue),c=_r(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return $r(s.bytesValue).isEqual($r(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=qe(s.doubleValue),c=qe(i.doubleValue);return o===c?ia(o)===ia(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return As(t.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(ad(o)!==ad(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!vn(o[l],c[l])))return!1;return!0}(t,e);default:return ae()}}function Vi(t,e){return(t.values||[]).find(n=>vn(n,e))!==void 0}function Rs(t,e){if(t===e)return 0;const n=Hr(t),r=Hr(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=qe(i.integerValue||i.doubleValue),l=qe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return ld(t.timestampValue,e.timestampValue);case 4:return ld(Ni(t),Ni(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(i,o){const c=$r(i),l=$r(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=Ie(c[h],l[h]);if(f!==0)return f}return Ie(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Ie(qe(i.latitude),qe(o.latitude));return c!==0?c:Ie(qe(i.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ud(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,f;const p=i.fields||{},g=o.fields||{},y=(c=p.value)===null||c===void 0?void 0:c.arrayValue,b=(l=g.value)===null||l===void 0?void 0:l.arrayValue,k=Ie(((h=y==null?void 0:y.values)===null||h===void 0?void 0:h.length)||0,((f=b==null?void 0:b.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:ud(y,b)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===bo.mapValue&&o===bo.mapValue)return 0;if(i===bo.mapValue)return 1;if(o===bo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=Ie(l[p],f[p]);if(g!==0)return g;const y=Rs(c[l[p]],h[f[p]]);if(y!==0)return y}return Ie(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ae()}}function ld(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=_r(t),r=_r(e),s=Ie(n.seconds,r.seconds);return s!==0?s:Ie(n.nanos,r.nanos)}function ud(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Rs(n[s],r[s]);if(i)return i}return Ie(n.length,r.length)}function bs(t){return ol(t)}function ol(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=_r(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return $r(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ol(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ol(n.fields[o])}`;return s+"}"}(t.mapValue):ae()}function hd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function al(t){return!!t&&"integerValue"in t}function lu(t){return!!t&&"arrayValue"in t}function fd(t){return!!t&&"nullValue"in t}function dd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bo(t){return!!t&&"mapValue"in t}function qR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function yi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Kr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=yi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function jR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Bo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yi(n)}setAll(e){let n=at.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=yi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Bo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Bo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Kr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ot(yi(this.value))}}function hg(t){const e=[];return Kr(t.fields,(n,r)=>{const s=new at([n]);if(Bo(r)){const i=hg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ft(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new gt(e,0,ce.min(),ce.min(),ce.min(),Ot.empty(),0)}static newFoundDocument(e,n,r,s){return new gt(e,1,n,ce.min(),r,s,0)}static newNoDocument(e,n){return new gt(e,2,n,ce.min(),ce.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,ce.min(),ce.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n){this.position=e,this.inclusive=n}}function pd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=Rs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function md(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n="asc"){this.field=e,this.dir=n}}function $R(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{}class Ke extends fg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new WR(e,n,r):n==="array-contains"?new zR(e,r):n==="in"?new QR(e,r):n==="not-in"?new YR(e,r):n==="array-contains-any"?new JR(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new KR(e,r):new GR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Rs(n,this.value)):n!==null&&Hr(this.value)===Hr(n)&&this.matchesComparison(Rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rn extends fg{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new rn(e,n)}matches(e){return dg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function dg(t){return t.op==="and"}function pg(t){return HR(t)&&dg(t)}function HR(t){for(const e of t.filters)if(e instanceof rn)return!1;return!0}function cl(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+bs(t.value);if(pg(t))return t.filters.map(e=>cl(e)).join(",");{const e=t.filters.map(n=>cl(n)).join(",");return`${t.op}(${e})`}}function mg(t,e){return t instanceof Ke?function(r,s){return s instanceof Ke&&r.op===s.op&&r.field.isEqual(s.field)&&vn(r.value,s.value)}(t,e):t instanceof rn?function(r,s){return s instanceof rn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&mg(o,s.filters[c]),!0):!1}(t,e):void ae()}function gg(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${bs(n.value)}`}(t):t instanceof rn?function(n){return n.op.toString()+" {"+n.getFilters().map(gg).join(" ,")+"}"}(t):"Filter"}class WR extends Ke{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class KR extends Ke{constructor(e,n){super(e,"in",n),this.keys=_g("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class GR extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=_g("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _g(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class zR extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return lu(n)&&Vi(n.arrayValue,this.value)}}class QR extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vi(this.value.arrayValue,n)}}class YR extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vi(this.value.arrayValue,n)}}class JR extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!lu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function gd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new XR(t,e,n,r,s,i,o)}function uu(t){const e=le(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>cl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Oa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>bs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>bs(r)).join(",")),e.ue=n}return e.ue}function hu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$R(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!mg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!md(t.startAt,e.startAt)&&md(t.endAt,e.endAt)}function ll(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ZR(t,e,n,r,s,i,o,c){return new Vs(t,e,n,r,s,i,o,c)}function fu(t){return new Vs(t)}function _d(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function yg(t){return t.collectionGroup!==null}function vi(t){const e=le(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ct(at.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new xi(i,r))}),n.has(at.keyField().canonicalString())||e.ce.push(new xi(at.keyField(),r))}return e.ce}function mn(t){const e=le(t);return e.le||(e.le=e0(e,vi(t))),e.le}function e0(t,e){if(t.limitType==="F")return gd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new xi(s.field,i)});const n=t.endAt?new oa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new oa(t.startAt.position,t.startAt.inclusive):null;return gd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ul(t,e){const n=t.filters.concat([e]);return new Vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function hl(t,e,n){return new Vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Na(t,e){return hu(mn(t),mn(e))&&t.limitType===e.limitType}function vg(t){return`${uu(mn(t))}|lt:${t.limitType}`}function is(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>gg(s)).join(", ")}]`),Oa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>bs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>bs(s)).join(",")),`Target(${r})`}(mn(t))}; limitType=${t.limitType})`}function Da(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):te.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of vi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=pd(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,vi(r),s)||r.endAt&&!function(o,c,l){const h=pd(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,vi(r),s))}(t,e)}function t0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Eg(t){return(e,n)=>{let r=!1;for(const s of vi(t)){const i=n0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function n0(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Rs(l,h):ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Kr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return lg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=new Fe(te.comparator);function qn(){return r0}const Tg=new Fe(te.comparator);function ii(...t){let e=Tg;for(const n of t)e=e.insert(n.key,n);return e}function Ig(t){let e=Tg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Vr(){return Ei()}function wg(){return Ei()}function Ei(){return new xs(t=>t.toString(),(t,e)=>t.isEqual(e))}const s0=new Fe(te.comparator),i0=new ct(te.comparator);function ge(...t){let e=i0;for(const n of t)e=e.add(n);return e}const o0=new ct(Ie);function a0(){return o0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ia(e)?"-0":e}}function Ag(t){return{integerValue:""+t}}function c0(t,e){return FR(e)?Ag(e):du(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(){this._=void 0}}function l0(t,e,n){return t instanceof Li?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&au(i)&&(i=cu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Mi?bg(t,e):t instanceof Fi?Sg(t,e):function(s,i){const o=Rg(s,i),c=yd(o)+yd(s.Pe);return al(o)&&al(s.Pe)?Ag(c):du(s.serializer,c)}(t,e)}function u0(t,e,n){return t instanceof Mi?bg(t,e):t instanceof Fi?Sg(t,e):n}function Rg(t,e){return t instanceof aa?function(r){return al(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Li extends Va{}class Mi extends Va{constructor(e){super(),this.elements=e}}function bg(t,e){const n=Pg(e);for(const r of t.elements)n.some(s=>vn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Fi extends Va{constructor(e){super(),this.elements=e}}function Sg(t,e){let n=Pg(e);for(const r of t.elements)n=n.filter(s=>!vn(s,r));return{arrayValue:{values:n}}}class aa extends Va{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function yd(t){return qe(t.integerValue||t.doubleValue)}function Pg(t){return lu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,n){this.field=e,this.transform=n}}function f0(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Mi&&s instanceof Mi||r instanceof Fi&&s instanceof Fi?As(r.elements,s.elements,vn):r instanceof aa&&s instanceof aa?vn(r.Pe,s.Pe):r instanceof Li&&s instanceof Li}(t.transform,e.transform)}class d0{constructor(e,n){this.version=e,this.transformResults=n}}class Wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wt}static exists(e){return new Wt(void 0,e)}static updateTime(e){return new Wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xa{}function Cg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pu(t.key,Wt.none()):new Yi(t.key,t.data,Wt.none());{const n=t.data,r=Ot.empty();let s=new ct(at.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Tr(t.key,r,new Ft(s.toArray()),Wt.none())}}function p0(t,e,n){t instanceof Yi?function(s,i,o){const c=s.value.clone(),l=Ed(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Tr?function(s,i,o){if(!qo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Ed(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(kg(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ti(t,e,n,r){return t instanceof Yi?function(i,o,c,l){if(!qo(i.precondition,o))return c;const h=i.value.clone(),f=Td(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Tr?function(i,o,c,l){if(!qo(i.precondition,o))return c;const h=Td(i.fieldTransforms,l,o),f=o.data;return f.setAll(kg(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return qo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function m0(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Rg(r.transform,s||null);i!=null&&(n===null&&(n=Ot.empty()),n.set(r.field,i))}return n||null}function vd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&As(r,s,(i,o)=>f0(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yi extends xa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Tr extends xa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function kg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ed(t,e,n){const r=new Map;be(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,u0(o,c,n[s]))}return r}function Td(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,l0(i,o,e))}return r}class pu extends xa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class g0 extends xa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&p0(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ti(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ti(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=wg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Cg(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&As(this.mutations,e.mutations,(n,r)=>vd(n,r))&&As(this.baseMutations,e.baseMutations,(n,r)=>vd(n,r))}}class mu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length);let s=function(){return s0}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new mu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,Ee;function E0(t){switch(t){default:return ae();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function Og(t){if(t===void 0)return Bn("GRPC error has no .code"),L.UNKNOWN;switch(t){case We.OK:return L.OK;case We.CANCELLED:return L.CANCELLED;case We.UNKNOWN:return L.UNKNOWN;case We.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case We.INTERNAL:return L.INTERNAL;case We.UNAVAILABLE:return L.UNAVAILABLE;case We.UNAUTHENTICATED:return L.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case We.NOT_FOUND:return L.NOT_FOUND;case We.ALREADY_EXISTS:return L.ALREADY_EXISTS;case We.PERMISSION_DENIED:return L.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case We.ABORTED:return L.ABORTED;case We.OUT_OF_RANGE:return L.OUT_OF_RANGE;case We.UNIMPLEMENTED:return L.UNIMPLEMENTED;case We.DATA_LOSS:return L.DATA_LOSS;default:return ae()}}(Ee=We||(We={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=new Mr([4294967295,4294967295],0);function Id(t){const e=T0().encode(t),n=new tg;return n.update(e),new Uint8Array(n.digest())}function wd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Mr([n,r],0),new Mr([s,i],0)]}class gu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new oi(`Invalid padding: ${n}`);if(r<0)throw new oi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new oi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new oi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Mr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Mr.fromNumber(r)));return s.compare(I0)===1&&(s=new Mr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Id(e),[r,s]=wd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new gu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=Id(e),[r,s]=wd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class oi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ji.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new La(ce.min(),s,new Fe(Ie),qn(),ge())}}class Ji{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ji(r,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Ng{constructor(e,n){this.targetId=e,this.me=n}}class Dg{constructor(e,n,r=lt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ad{constructor(){this.fe=0,this.ge=bd(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ge(),n=ge(),r=ge();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ae()}}),new Ji(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=bd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class w0{constructor(e){this.Le=e,this.Be=new Map,this.ke=qn(),this.qe=Rd(),this.Qe=new Fe(Ie)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(ll(i))if(r===0){const o=new te(i.path);this.Ue(n,o,gt.newNoDocument(o,ce.min()))}else be(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=$r(r).toUint8Array()}catch(l){if(l instanceof ug)return ws("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new gu(o,s,i)}catch(l){return ws(l instanceof oi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&ll(c.target)){const l=new te(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,gt.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ge();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new La(e,n,this.Qe,this.ke,r);return this.ke=qn(),this.qe=Rd(),this.Qe=new Fe(Ie),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ad,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ct(Ie),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ad),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Rd(){return new Fe(te.comparator)}function bd(){return new Fe(te.comparator)}const A0={asc:"ASCENDING",desc:"DESCENDING"},R0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},b0={and:"AND",or:"OR"};class S0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function fl(t,e){return t.useProto3Json||Oa(e)?e:{value:e}}function ca(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function P0(t,e){return ca(t,e.toTimestamp())}function gn(t){return be(!!t),ce.fromTimestamp(function(n){const r=_r(n);return new Ye(r.seconds,r.nanos)}(t))}function _u(t,e){return dl(t,e).canonicalString()}function dl(t,e){const n=function(s){return new Ve(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function xg(t){const e=Ve.fromString(t);return be(Bg(e)),e}function pl(t,e){return _u(t.databaseId,e.path)}function Oc(t,e){const n=xg(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(Mg(n))}function Lg(t,e){return _u(t.databaseId,e)}function C0(t){const e=xg(t);return e.length===4?Ve.emptyPath():Mg(e)}function ml(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Mg(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sd(t,e,n){return{name:pl(t,e),fields:n.value.mapValue.fields}}function k0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(be(f===void 0||typeof f=="string"),lt.fromBase64String(f||"")):(be(f===void 0||f instanceof Buffer||f instanceof Uint8Array),lt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?L.UNKNOWN:Og(h.code);return new Y(f,h.message||"")}(o);n=new Dg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Oc(t,r.document.name),i=gn(r.document.updateTime),o=r.document.createTime?gn(r.document.createTime):ce.min(),c=new Ot({mapValue:{fields:r.document.fields}}),l=gt.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new jo(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Oc(t,r.document),i=r.readTime?gn(r.readTime):ce.min(),o=gt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new jo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Oc(t,r.document),i=r.removedTargetIds||[];n=new jo([],i,s,null)}else{if(!("filter"in e))return ae();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new v0(s,i),c=r.targetId;n=new Ng(c,o)}}return n}function O0(t,e){let n;if(e instanceof Yi)n={update:Sd(t,e.key,e.value)};else if(e instanceof pu)n={delete:pl(t,e.key)};else if(e instanceof Tr)n={update:Sd(t,e.key,e.data),updateMask:B0(e.fieldMask)};else{if(!(e instanceof g0))return ae();n={verify:pl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Li)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Mi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Fi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof aa)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw ae()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:P0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ae()}(t,e.precondition)),n}function N0(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?gn(s.updateTime):gn(i);return o.isEqual(ce.min())&&(o=gn(i)),new d0(o,s.transformResults||[])}(n,e))):[]}function D0(t,e){return{documents:[Lg(t,e.path)]}}function V0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Lg(t,s);const i=function(h){if(h.length!==0)return Ug(rn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:os(g.field),direction:M0(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=fl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function x0(t){let e=C0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=Fg(p);return g instanceof rn&&pg(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(b){return new xi(as(b.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,Oa(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,y=p.values||[];return new oa(y,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,y=p.values||[];return new oa(y,g)}(n.endAt)),ZR(e,s,o,i,c,"F",l,h)}function L0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Fg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=as(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=as(n.unaryFilter.field);return Ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=as(n.unaryFilter.field);return Ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=as(n.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(as(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rn.create(n.compositeFilter.filters.map(r=>Fg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ae()}}(n.compositeFilter.op))}(t):ae()}function M0(t){return A0[t]}function F0(t){return R0[t]}function U0(t){return b0[t]}function os(t){return{fieldPath:t.canonicalString()}}function as(t){return at.fromServerFormat(t.fieldPath)}function Ug(t){return t instanceof Ke?function(n){if(n.op==="=="){if(dd(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NAN"}};if(fd(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(dd(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NOT_NAN"}};if(fd(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:os(n.field),op:F0(n.op),value:n.value}}}(t):t instanceof rn?function(n){const r=n.getFilters().map(s=>Ug(s));return r.length===1?r[0]:{compositeFilter:{op:U0(n.op),filters:r}}}(t):ae()}function B0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Bg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n,r,s,i=ce.min(),o=ce.min(),c=lt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e){this.ct=e}}function j0(t){const e=x0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?hl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(){this.un=new H0}addToCollectionParentIndex(e,n){return this.un.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(gr.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(gr.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class H0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ct(Ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ct(Ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ss(0)}static kn(){return new Ss(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(){this.changes=new xs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ti(r.mutation,s,Ft.empty(),Ye.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const s=Vr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ii();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Vr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=qn();const o=Ei(),c=function(){return Ei()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Tr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Ti(f.mutation,h,f.mutation.getFieldMask(),Ye.now())):o.set(h.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return c.set(h,new K0(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Ei();let s=new Fe((o,c)=>o-c),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||Ft.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||ge()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=wg();f.forEach(g=>{if(!i.has(g)){const y=Cg(n.get(g),r.get(g));y!==null&&p.set(g,y),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return te.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):yg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(Vr());let c=-1,l=i;return o.next(h=>B.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?B.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,ge())).next(f=>({batchId:c,changes:Ig(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let s=ii();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ii();return this.indexManager.getCollectionParents(e,i).next(c=>B.forEach(c,l=>{const h=function(p,g){return new Vs(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,gt.newInvalidDocument(f)))});let c=ii();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&Ti(f.mutation,h,Ft.empty(),Ye.now()),Da(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return B.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:gn(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:j0(s.bundledQuery),readTime:gn(s.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(){this.overlays=new Fe(te.comparator),this.Ir=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Vr();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=Vr(),i=n.length+1,o=new te(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Fe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Vr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Vr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return B.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new y0(n,r));let i=this.Ir.get(n);i===void 0&&(i=ge(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(){this.Tr=new ct(Ze.Er),this.dr=new ct(Ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new te(new Ve([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new te(new Ve([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=ge();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return te.comparator(e.key,n.key)||Ie(e.wr,n.wr)}static Ar(e,n){return Ie(e.wr,n.wr)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ct(Ze.Er)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _0(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new Ze(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ct(Ie);return n.forEach(s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),B.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;te.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new te(i),0);let c=new ct(Ie);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},o),B.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){be(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return B.forEach(n.mutations,s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ze(n,0),s=this.br.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e){this.Mr=e,this.docs=function(){return new Fe(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=qn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():gt.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=qn();const o=n.path,c=new te(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||VR(DR(f),r)<=0||(s.has(f.key)||Da(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ae()}Or(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Z0(this)}getSize(e){return B.resolve(this.size)}}class Z0 extends W0{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.persistence=e,this.Nr=new xs(n=>uu(n),hu),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.Lr=0,this.Br=new yu,this.targetCount=0,this.kr=Ss.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),B.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ss(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Kn(n),B.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n){this.qr={},this.overlays={},this.Qr=new ou(0),this.Kr=!1,this.Kr=!0,this.$r=new Y0,this.referenceDelegate=e(this),this.Ur=new eb(this),this.indexManager=new $0,this.remoteDocumentCache=function(s){return new X0(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new q0(n),this.Gr=new z0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Q0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new J0(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new nb(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return B.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class nb extends LR{constructor(e){super(),this.currentSequenceNumber=e}}class vu{constructor(e){this.persistence=e,this.Jr=new yu,this.Yr=null}static Zr(e){return new vu(e)}get Xr(){if(this.Yr)return this.Yr;throw ae()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),B.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Xr,r=>{const s=te.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ce.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return B.or([()=>B.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ge(),s=ge();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Eu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return $T()?8:MR(Et())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new rb;return this.Xi(e,n,o).next(c=>{if(i.result=c,this.zi)return this.es(e,n,o,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Zs()<=_e.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",is(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),B.resolve()):(Zs()<=_e.DEBUG&&X("QueryEngine","Query:",is(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Zs()<=_e.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",is(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mn(n))):B.resolve())}Yi(e,n){if(_d(n))return B.resolve(null);let r=mn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=hl(n,null,"F"),r=mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ge(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(n,c);return this.ns(n,h,o,l.readTime)?this.Yi(e,hl(n,null,"F")):this.rs(e,h,n,l)}))})))}Zi(e,n,r,s){return _d(n)||s.isEqual(ce.min())?B.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?B.resolve(null):(Zs()<=_e.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),is(n)),this.rs(e,o,n,NR(s,-1)).next(c=>c))})}ts(e,n){let r=new ct(Eg(e));return n.forEach((s,i)=>{Da(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Zs()<=_e.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",is(n)),this.Ji.getDocumentsMatchingQuery(e,n,gr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Fe(Ie),this._s=new xs(i=>uu(i),hu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new G0(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function ob(t,e,n,r){return new ib(t,e,n,r)}async function qg(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=ge();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function ab(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,g=p.keys();let y=B.resolve();return g.forEach(b=>{y=y.next(()=>f.getEntry(l,b)).next(k=>{const N=h.docVersions.get(b);be(N!==null),k.version.compareTo(N)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),y.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ge();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function jg(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function cb(t,e){const n=le(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;c.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,p)));let y=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(lt.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(p,y),function(k,N,q){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(g,y,f)&&c.push(n.Ur.updateTargetData(i,y))});let l=qn(),h=ge();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(lb(i,o,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!r.isEqual(ce.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return B.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.os=s,i))}function lb(t,e,n){let r=ge(),s=ge();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=qn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ce.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function ub(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hb(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function gl(t,e,n){const r=le(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Qi(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Pd(t,e,n){const r=le(t);let s=ce.min(),i=ge();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=le(l),g=p._s.get(f);return g!==void 0?B.resolve(p.os.get(g)):p.Ur.getTargetData(h,f)}(r,o,mn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ce.min(),n?i:ge())).next(c=>(fb(r,t0(e),c),{documents:c,Ts:i})))}function fb(t,e,n){let r=t.us.get(e)||ce.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Cd{constructor(){this.activeTargetIds=a0()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class db{constructor(){this.so=new Cd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Cd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let So=null;function Nc(){return So===null?So=function(){return 268435456+Math.round(2147483648*Math.random())}():So++,"0x"+So.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="WebChannelConnection";class _b extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const c=Nc(),l=this.xo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,l,h,s).then(f=>(X("RestConnection",`Received RPC '${n}' ${c}: `,f),f),f=>{throw ws("RestConnection",`RPC '${n}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(n,r,s,i,o,c){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ds}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=mb[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Nc();return new Promise((o,c)=>{const l=new ng;l.setWithCredentials(!0),l.listenOnce(rg.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Uo.NO_ERROR:const f=l.getResponseJson();X(dt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case Uo.TIMEOUT:X(dt,`RPC '${e}' ${i} timed out`),c(new Y(L.DEADLINE_EXCEEDED,"Request time out"));break;case Uo.HTTP_ERROR:const p=l.getStatus();if(X(dt,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g==null?void 0:g.error;if(y&&y.status&&y.message){const b=function(N){const q=N.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(q)>=0?q:L.UNKNOWN}(y.status);c(new Y(b,y.message))}else c(new Y(L.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new Y(L.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{X(dt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);X(dt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=Nc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=og(),c=ig(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");X(dt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let g=!1,y=!1;const b=new gb({Io:N=>{y?X(dt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(g||(X(dt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),X(dt,`RPC '${e}' stream ${s} sending:`,N),p.send(N))},To:()=>p.close()}),k=(N,q,F)=>{N.listen(q,$=>{try{F($)}catch(K){setTimeout(()=>{throw K},0)}})};return k(p,si.EventType.OPEN,()=>{y||(X(dt,`RPC '${e}' stream ${s} transport opened.`),b.yo())}),k(p,si.EventType.CLOSE,()=>{y||(y=!0,X(dt,`RPC '${e}' stream ${s} transport closed`),b.So())}),k(p,si.EventType.ERROR,N=>{y||(y=!0,ws(dt,`RPC '${e}' stream ${s} transport errored:`,N),b.So(new Y(L.UNAVAILABLE,"The operation could not be completed")))}),k(p,si.EventType.MESSAGE,N=>{var q;if(!y){const F=N.data[0];be(!!F);const $=F,K=$.error||((q=$[0])===null||q===void 0?void 0:q.error);if(K){X(dt,`RPC '${e}' stream ${s} received error:`,K);const ue=K.status;let de=function(T){const A=We[T];if(A!==void 0)return Og(A)}(ue),w=K.message;de===void 0&&(de=L.INTERNAL,w="Unknown error status: "+ue+" with message "+K.message),y=!0,b.So(new Y(de,w)),p.close()}else X(dt,`RPC '${e}' stream ${s} received:`,F),b.bo(F)}}),k(c,sg.STAT_EVENT,N=>{N.stat===il.PROXY?X(dt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===il.NOPROXY&&X(dt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.wo()},0),b}}function Dc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(t){return new S0(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,n,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new $g(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Bn(n.toString()),Bn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new Y(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yb extends Hg{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=k0(this.serializer,e),r=function(i){if(!("targetChange"in i))return ce.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?gn(o.readTime):ce.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=ml(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=ll(l)?{documents:D0(i,l)}:{query:V0(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Vg(i,o.resumeToken);const h=fl(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(ce.min())>0){c.readTime=ca(i,o.snapshotVersion.toTimestamp());const h=fl(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=L0(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=ml(this.serializer),n.removeTarget=e,this.a_(n)}}class vb extends Hg{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return be(!!e.streamToken),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=N0(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=ml(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>O0(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new Y(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,dl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(L.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,dl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Tb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Bn(n),this.D_=!1):X("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Gr(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=le(l);h.L_.add(4),await Xi(h),h.q_.set("Unknown"),h.L_.delete(4),await Fa(h)}(this))})}),this.q_=new Tb(r,s)}}async function Fa(t){if(Gr(t))for(const e of t.B_)await e(!0)}async function Xi(t){for(const e of t.B_)await e(!1)}function Wg(t,e){const n=le(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Au(n)?wu(n):Ls(n).r_()&&Iu(n,e))}function Tu(t,e){const n=le(t),r=Ls(n);n.N_.delete(e),r.r_()&&Kg(n,e),n.N_.size===0&&(r.r_()?r.o_():Gr(n)&&n.q_.set("Unknown"))}function Iu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ls(t).A_(e)}function Kg(t,e){t.Q_.xe(e),Ls(t).R_(e)}function wu(t){t.Q_=new w0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ls(t).start(),t.q_.v_()}function Au(t){return Gr(t)&&!Ls(t).n_()&&t.N_.size>0}function Gr(t){return le(t).L_.size===0}function Gg(t){t.Q_=void 0}async function wb(t){t.q_.set("Online")}async function Ab(t){t.N_.forEach((e,n)=>{Iu(t,e)})}async function Rb(t,e){Gg(t),Au(t)?(t.q_.M_(e),wu(t)):t.q_.set("Unknown")}async function bb(t,e,n){if(t.q_.set("Online"),e instanceof Dg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await la(t,r)}else if(e instanceof jo?t.Q_.Ke(e):e instanceof Ng?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ce.min()))try{const r=await jg(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(lt.EMPTY_BYTE_STRING,f.snapshotVersion)),Kg(i,l);const p=new cr(f.target,l,h,f.sequenceNumber);Iu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await la(t,r)}}async function la(t,e,n){if(!Qi(e))throw e;t.L_.add(1),await Xi(t),t.q_.set("Offline"),n||(n=()=>jg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Fa(t)})}function zg(t,e){return e().catch(n=>la(t,n,e))}async function Ua(t){const e=le(t),n=yr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Sb(e);)try{const s=await ub(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,Pb(e,s)}catch(s){await la(e,s)}Qg(e)&&Yg(e)}function Sb(t){return Gr(t)&&t.O_.length<10}function Pb(t,e){t.O_.push(e);const n=yr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Qg(t){return Gr(t)&&!yr(t).n_()&&t.O_.length>0}function Yg(t){yr(t).start()}async function Cb(t){yr(t).p_()}async function kb(t){const e=yr(t);for(const n of t.O_)e.m_(n.mutations)}async function Ob(t,e,n){const r=t.O_.shift(),s=mu.from(r,e,n);await zg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ua(t)}async function Nb(t,e){e&&yr(t).V_&&await async function(r,s){if(function(o){return E0(o)&&o!==L.ABORTED}(s.code)){const i=r.O_.shift();yr(r).s_(),await zg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ua(r)}}(t,e),Qg(t)&&Yg(t)}async function Od(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Gr(n);n.L_.add(3),await Xi(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Fa(n)}async function Db(t,e){const n=le(t);e?(n.L_.delete(2),await Fa(n)):e||(n.L_.add(2),await Xi(n),n.q_.set("Unknown"))}function Ls(t){return t.K_||(t.K_=function(n,r,s){const i=le(n);return i.w_(),new yb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:wb.bind(null,t),Ro:Ab.bind(null,t),mo:Rb.bind(null,t),d_:bb.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Au(t)?wu(t):t.q_.set("Unknown")):(await t.K_.stop(),Gg(t))})),t.K_}function yr(t){return t.U_||(t.U_=function(n,r,s){const i=le(n);return i.w_(),new vb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Cb.bind(null,t),mo:Nb.bind(null,t),f_:kb.bind(null,t),g_:Ob.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ua(t)):(await t.U_.stop(),t.O_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Ru(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bu(t,e){if(Bn("AsyncQueue",`${e}: ${t}`),Qi(t))return new Y(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=ii(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new ms(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ms)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ms;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this.W_=new Fe(te.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ae():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ps{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Ps(e,n,ms.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Na(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class xb{constructor(){this.queries=Dd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=le(n),i=s.queries;s.queries=Dd(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new Y(L.ABORTED,"Firestore shutting down"))}}function Dd(){return new xs(t=>vg(t),Na)}async function Jg(t,e){const n=le(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Vb,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=bu(o,`Initialization of query '${is(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Su(n)}async function Xg(t,e){const n=le(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Lb(t,e){const n=le(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Su(n)}function Mb(t,e,n){const r=le(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Su(t){t.Y_.forEach(e=>{e.next()})}var _l,Vd;(Vd=_l||(_l={})).ea="default",Vd.Cache="cache";class Zg{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==_l.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.key=e}}class t_{constructor(e){this.key=e}}class Fb{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ge(),this.mutatedKeys=ge(),this.Aa=Eg(e),this.Ra=new ms(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Nd,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),y=Da(this.query,p)?p:null,b=!!g&&this.mutatedKeys.has(g.key),k=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let N=!1;g&&y?g.data.isEqual(y.data)?b!==k&&(r.track({type:3,doc:y}),N=!0):this.ga(g,y)||(r.track({type:2,doc:y}),N=!0,(l&&this.Aa(y,l)>0||h&&this.Aa(y,h)<0)&&(c=!0)):!g&&y?(r.track({type:0,doc:y}),N=!0):g&&!y&&(r.track({type:1,doc:g}),N=!0,(l||h)&&(c=!0)),N&&(y?(o=o.add(y),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(y,b){const k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return k(y)-k(b)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new Ps(this.query,e.Ra,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Nd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ge(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new t_(r))}),this.da.forEach(r=>{e.has(r)||n.push(new e_(r))}),n}ba(e){this.Ta=e.Ts,this.da=ge();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ps.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Ub{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Bb{constructor(e){this.key=e,this.va=!1}}class qb{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new xs(c=>vg(c),Na),this.Ma=new Map,this.xa=new Set,this.Oa=new Fe(te.comparator),this.Na=new Map,this.La=new yu,this.Ba={},this.ka=new Map,this.qa=Ss.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function jb(t,e,n=!0){const r=a_(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await n_(r,e,n,!0),s}async function $b(t,e){const n=a_(t);await n_(n,e,!0,!1)}async function n_(t,e,n,r){const s=await hb(t.localStore,mn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await Hb(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Wg(t.remoteStore,s),c}async function Hb(t,e,n,r,s){t.Ka=(p,g,y)=>async function(k,N,q,F){let $=N.view.ma(q);$.ns&&($=await Pd(k.localStore,N.query,!1).then(({documents:w})=>N.view.ma(w,$)));const K=F&&F.targetChanges.get(N.targetId),ue=F&&F.targetMismatches.get(N.targetId)!=null,de=N.view.applyChanges($,k.isPrimaryClient,K,ue);return Ld(k,N.targetId,de.wa),de.snapshot}(t,p,g,y);const i=await Pd(t.localStore,e,!0),o=new Fb(e,i.Ts),c=o.ma(i.documents),l=Ji.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);Ld(t,n,h.wa);const f=new Ub(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function Wb(t,e,n){const r=le(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Na(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await gl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Tu(r.remoteStore,s.targetId),yl(r,s.targetId)}).catch(zi)):(yl(r,s.targetId),await gl(r.localStore,s.targetId,!0))}async function Kb(t,e){const n=le(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Tu(n.remoteStore,r.targetId))}async function Gb(t,e,n){const r=eS(t);try{const s=await function(o,c){const l=le(o),h=Ye.now(),f=c.reduce((y,b)=>y.add(b.key),ge());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let b=qn(),k=ge();return l.cs.getEntries(y,f).next(N=>{b=N,b.forEach((q,F)=>{F.isValidDocument()||(k=k.add(q))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,b)).next(N=>{p=N;const q=[];for(const F of c){const $=m0(F,p.get(F.key).overlayedDocument);$!=null&&q.push(new Tr(F.key,$,hg($.value.mapValue),Wt.exists(!0)))}return l.mutationQueue.addMutationBatch(y,h,q,c)}).next(N=>{g=N;const q=N.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(y,N.batchId,q)})}).then(()=>({batchId:g.batchId,changes:Ig(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new Fe(Ie)),h=h.insert(c,l),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await Zi(r,s.changes),await Ua(r.remoteStore)}catch(s){const i=bu(s,"Failed to persist write");n.reject(i)}}async function r_(t,e){const n=le(t);try{const r=await cb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?be(o.va):s.removedDocuments.size>0&&(be(o.va),o.va=!1))}),await Zi(n,r,e)}catch(r){await zi(r)}}function xd(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=le(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(c)&&(h=!0)}),h&&Su(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zb(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Fe(te.comparator);o=o.insert(i,gt.newNoDocument(i,ce.min()));const c=ge().add(i),l=new La(ce.min(),new Map,new Fe(Ie),o,c);await r_(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Pu(r)}else await gl(r.localStore,e,!1).then(()=>yl(r,e,n)).catch(zi)}async function Qb(t,e){const n=le(t),r=e.batch.batchId;try{const s=await ab(n.localStore,e);i_(n,r,null),s_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zi(n,s)}catch(s){await zi(s)}}async function Yb(t,e,n){const r=le(t);try{const s=await function(o,c){const l=le(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(be(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);i_(r,e,n),s_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zi(r,s)}catch(s){await zi(s)}}function s_(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function i_(t,e,n){const r=le(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function yl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||o_(t,r)})}function o_(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Tu(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Pu(t))}function Ld(t,e,n){for(const r of n)r instanceof e_?(t.La.addReference(r.key,e),Jb(t,r)):r instanceof t_?(X("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||o_(t,r.key)):ae()}function Jb(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(X("SyncEngine","New document in limbo: "+n),t.xa.add(r),Pu(t))}function Pu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new te(Ve.fromString(e)),r=t.qa.next();t.Na.set(r,new Bb(n)),t.Oa=t.Oa.insert(n,r),Wg(t.remoteStore,new cr(mn(fu(n.path)),r,"TargetPurposeLimboResolution",ou.oe))}}async function Zi(t,e,n){const r=le(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Eu.Wi(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,h){const f=le(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>B.forEach(h,g=>B.forEach(g.$i,y=>f.persistence.referenceDelegate.addReference(p,g.targetId,y)).next(()=>B.forEach(g.Ui,y=>f.persistence.referenceDelegate.removeReference(p,g.targetId,y)))))}catch(p){if(!Qi(p))throw p;X("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const y=f.os.get(g),b=y.snapshotVersion,k=y.withLastLimboFreeSnapshotVersion(b);f.os=f.os.insert(g,k)}}}(r.localStore,i))}async function Xb(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await qg(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new Y(L.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zi(n,r.hs)}}function Zb(t,e){const n=le(t),r=n.Na.get(e);if(r&&r.va)return ge().add(r.key);{let s=ge();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const c=n.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function a_(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=r_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zb.bind(null,e),e.Ca.d_=Lb.bind(null,e.eventManager),e.Ca.$a=Mb.bind(null,e.eventManager),e}function eS(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Qb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Yb.bind(null,e),e}class ua{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ma(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return ob(this.persistence,new sb,e.initialUser,this.serializer)}Ga(e){return new tb(vu.Zr,this.serializer)}Wa(e){return new db}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ua.provider={build:()=>new ua};class vl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xb.bind(null,this.syncEngine),await Db(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new xb}()}createDatastore(e){const n=Ma(e.databaseInfo.databaseId),r=function(i){return new _b(i)}(e.databaseInfo);return function(i,o,c,l){return new Eb(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new Ib(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>xd(this.syncEngine,n,0),function(){return kd.D()?new kd:new pb}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,f){const p=new qb(s,i,o,c,l,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=le(s);X("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Xi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}vl.provider={build:()=>new vl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Bn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=pt.UNAUTHENTICATED,this.clientId=cg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=bu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vc(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await qg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Md(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nS(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Od(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Od(e.remoteStore,s)),t._onlineComponents=e}async function nS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ws("Error using user provided cache. Falling back to memory cache: "+n),await Vc(t,new ua)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await Vc(t,new ua);return t._offlineComponents}async function l_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await Md(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await Md(t,new vl))),t._onlineComponents}function rS(t){return l_(t).then(e=>e.syncEngine)}async function u_(t){const e=await l_(t),n=e.eventManager;return n.onListen=jb.bind(null,e.syncEngine),n.onUnlisten=Wb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$b.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Kb.bind(null,e.syncEngine),n}function sS(t,e,n={}){const r=new Vn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new c_({next:g=>{f.Za(),o.enqueueAndForget(()=>Xg(i,p));const y=g.docs.has(c);!y&&g.fromCache?h.reject(new Y(L.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&g.fromCache&&l&&l.source==="server"?h.reject(new Y(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Zg(fu(c.path),f,{includeMetadataChanges:!0,_a:!0});return Jg(i,p)}(await u_(t),t.asyncQueue,e,n,r)),r.promise}function iS(t,e,n={}){const r=new Vn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new c_({next:g=>{f.Za(),o.enqueueAndForget(()=>Xg(i,p)),g.fromCache&&l.source==="server"?h.reject(new Y(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Zg(c,f,{includeMetadataChanges:!0,_a:!0});return Jg(i,p)}(await u_(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(t,e,n){if(!n)throw new Y(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oS(t,e,n,r){if(e===!0&&r===!0)throw new Y(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ud(t){if(!te.isDocumentKey(t))throw new Y(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Bd(t){if(te.isDocumentKey(t))throw new Y(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ba(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function sn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ba(t);throw new Y(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=h_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wR;switch(r.type){case"firstParty":return new SR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Fd.get(n);r&&(X("ComponentProvider","Removing Datastore"),Fd.delete(n),r.terminate())}(this),Promise.resolve()}}function aS(t,e,n,r={}){var s;const i=(t=sn(t,qa))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=pt.MOCK_USER;else{c=LT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new Y(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new pt(h)}t._authCredentials=new AR(new ag(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new zr(this.firestore,e,this._query)}}class St{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class dr extends zr{constructor(e,n,r){super(e,n,fu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new te(e))}withConverter(e){return new dr(this.firestore,e,this._path)}}function ze(t,e,...n){if(t=Je(t),f_("collection","path",e),t instanceof qa){const r=Ve.fromString(e,...n);return Bd(r),new dr(t,null,r)}{if(!(t instanceof St||t instanceof dr))throw new Y(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return Bd(r),new dr(t.firestore,null,r)}}function tt(t,e,...n){if(t=Je(t),arguments.length===1&&(e=cg.newId()),f_("doc","path",e),t instanceof qa){const r=Ve.fromString(e,...n);return Ud(r),new St(t,null,new te(r))}{if(!(t instanceof St||t instanceof dr))throw new Y(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return Ud(r),new St(t.firestore,t instanceof dr?t.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new $g(this,"async_queue_retry"),this.Vu=()=>{const r=Dc();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Dc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Dc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Vn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Qi(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Bn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Ru.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ae()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Qr extends qa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new jd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new jd(e),this._firestoreClient=void 0,await e}}}function cS(t,e){const n=typeof t=="object"?t:ym(),r=typeof t=="string"?t:"(default)",s=Gl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=VT("firestore");i&&aS(s,...i)}return s}function Cu(t){if(t._terminated)throw new Y(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||lS(t),t._firestoreClient}function lS(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,f){return new BR(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,h_(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new tS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cs(lt.fromBase64String(e))}catch(n){throw new Y(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Cs(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS=/^__.*__$/;class hS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Tr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yi(e,this.data,n,this.fieldTransforms)}}class d_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Tr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function p_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class Nu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Nu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ha(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(p_(this.Cu)&&uS.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class fS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ma(e)}Qu(e,n,r,s=!1){return new Nu({Cu:e,methodName:n,qu:r,path:at.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ha(t){const e=t._freezeSettings(),n=Ma(t._databaseId);return new fS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function m_(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Vu("Data must be an object, but it was:",o,r);const c=g_(r,o);let l,h;if(i.merge)l=new Ft(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=El(e,p,n);if(!o.contains(g))throw new Y(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);y_(f,g)||f.push(g)}l=new Ft(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new hS(new Ot(c),l,h)}class Wa extends $a{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wa}}class Du extends $a{_toFieldTransform(e){return new h0(e.path,new Li)}isEqual(e){return e instanceof Du}}function dS(t,e,n,r){const s=t.Qu(1,e,n);Vu("Data must be an object, but it was:",s,r);const i=[],o=Ot.empty();Kr(r,(l,h)=>{const f=xu(e,l,n);h=Je(h);const p=s.Nu(f);if(h instanceof Wa)i.push(f);else{const g=eo(h,p);g!=null&&(i.push(f),o.set(f,g))}});const c=new Ft(i);return new d_(o,c,s.fieldTransforms)}function pS(t,e,n,r,s,i){const o=t.Qu(1,e,n),c=[El(e,r,n)],l=[s];if(i.length%2!=0)throw new Y(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(El(e,i[g])),l.push(i[g+1]);const h=[],f=Ot.empty();for(let g=c.length-1;g>=0;--g)if(!y_(h,c[g])){const y=c[g];let b=l[g];b=Je(b);const k=o.Nu(y);if(b instanceof Wa)h.push(y);else{const N=eo(b,k);N!=null&&(h.push(y),f.set(y,N))}}const p=new Ft(h);return new d_(f,p,o.fieldTransforms)}function mS(t,e,n,r=!1){return eo(n,t.Qu(r?4:3,e))}function eo(t,e){if(__(t=Je(t)))return Vu("Unsupported field value:",e,t),g_(t,e);if(t instanceof $a)return function(r,s){if(!p_(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=eo(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return c0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ye.fromDate(r);return{timestampValue:ca(s.serializer,i)}}if(r instanceof Ye){const i=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ca(s.serializer,i)}}if(r instanceof ku)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Cs)return{bytesValue:Vg(s.serializer,r._byteString)};if(r instanceof St){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_u(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ou)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return du(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Ba(r)}`)}(t,e)}function g_(t,e){const n={};return lg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Kr(t,(r,s)=>{const i=eo(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function __(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof ku||t instanceof Cs||t instanceof St||t instanceof $a||t instanceof Ou)}function Vu(t,e,n){if(!__(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ba(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function El(t,e,n){if((e=Je(e))instanceof ja)return e._internalPath;if(typeof e=="string")return xu(t,e);throw ha("Field path arguments must be of type string or ",t,!1,void 0,n)}const gS=new RegExp("[~\\*/\\[\\]]");function xu(t,e,n){if(e.search(gS)>=0)throw ha(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ja(...e.split("."))._internalPath}catch{throw ha(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ha(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Y(L.INVALID_ARGUMENT,c+t+l)}function y_(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _S(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ka("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _S extends v_{data(){return super.data()}}function Ka(t,e){return typeof e=="string"?xu(t,e):e instanceof ja?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lu{}class E_ extends Lu{}function on(t,e,...n){let r=[];e instanceof Lu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Mu).length,c=i.filter(l=>l instanceof Ga).length;if(o>1||o>0&&c>0)throw new Y(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ga extends E_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ga(e,n,r)}_apply(e){const n=this._parse(e);return T_(e._query,n),new zr(e.firestore,e.converter,ul(e._query,n))}_parse(e){const n=Ha(e.firestore);return function(i,o,c,l,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Y(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Hd(p,f);const y=[];for(const b of p)y.push($d(l,i,b));g={arrayValue:{values:y}}}else g=$d(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Hd(p,f),g=mS(c,o,p,f==="in"||f==="not-in");return Ke.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function zt(t,e,n){const r=e,s=Ka("where",t);return Ga._create(s,r,n)}class Mu extends Lu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Mu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:rn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)T_(o,l),o=ul(o,l)}(e._query,n),new zr(e.firestore,e.converter,ul(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Fu extends E_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Fu(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Y(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Y(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new xi(i,o)}(e._query,this._field,this._direction);return new zr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Vs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Wn(t,e="asc"){const n=e,r=Ka("orderBy",t);return Fu._create(r,n)}function $d(t,e,n){if(typeof(n=Je(n))=="string"){if(n==="")throw new Y(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yg(e)&&n.indexOf("/")!==-1)throw new Y(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ve.fromString(n));if(!te.isDocumentKey(r))throw new Y(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return hd(t,new te(r))}if(n instanceof St)return hd(t,n._key);throw new Y(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ba(n)}.`)}function Hd(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function T_(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class vS{convertValue(e,n="none"){switch(Hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes($r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Kr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>qe(o.doubleValue));return new Ou(i)}convertGeoPoint(e){return new ku(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ni(e));default:return null}}convertTimestamp(e){const n=_r(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);be(Bg(r));const s=new Di(r.get(1),r.get(3)),i=new te(r.popFirst(5));return s.isEqual(n)||Bn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class w_ extends v_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $o(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ka("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class $o extends w_{data(e={}){return super.data(e)}}class ES{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ai(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new $o(this._firestore,this._userDataWriter,r.key,r,new ai(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new $o(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ai(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new $o(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ai(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:TS(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function TS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t){t=sn(t,St);const e=sn(t.firestore,Qr);return sS(Cu(e),t._key).then(n=>IS(e,t,n))}class A_ extends vS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function an(t){t=sn(t,zr);const e=sn(t.firestore,Qr),n=Cu(e),r=new A_(e);return yS(t._query),iS(n,t._query).then(s=>new ES(e,r,t,s))}function En(t,e,n){t=sn(t,St);const r=sn(t.firestore,Qr),s=I_(t.converter,e);return Qa(r,[m_(Ha(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Wt.none())])}function XS(t,e,n,...r){t=sn(t,St);const s=sn(t.firestore,Qr),i=Ha(s);let o;return o=typeof(e=Je(e))=="string"||e instanceof ja?pS(i,"updateDoc",t._key,e,n,r):dS(i,"updateDoc",t._key,e),Qa(s,[o.toMutation(t._key,Wt.exists(!0))])}function Uu(t){return Qa(sn(t.firestore,Qr),[new pu(t._key,Wt.none())])}function ZS(t,e){const n=sn(t.firestore,Qr),r=tt(t),s=I_(t.converter,e);return Qa(n,[m_(Ha(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Wt.exists(!1))]).then(()=>r)}function Qa(t,e){return function(r,s){const i=new Vn;return r.asyncQueue.enqueueAndForget(async()=>Gb(await rS(r),s,i)),i.promise}(Cu(t),e)}function IS(t,e,n){const r=n.docs.get(e._key),s=new A_(t);return new w_(t,s,e._key,r,new ai(n.hasPendingWrites,n.fromCache),e.converter)}function et(){return new Du("serverTimestamp")}(function(e,n=!0){(function(s){Ds=s})(Os),Ts(new Ur("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Qr(new RR(r.getProvider("auth-internal")),new CR(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Y(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Di(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),fr(od,"4.7.3",e),fr(od,"4.7.3","esm2017")})();const wS={apiKey:"AIzaSyAZwBiqqyo6ZvVGEbXqEVnG5fyA2tt4WdY",authDomain:"reading-jepson.firebaseapp.com",projectId:"reading-jepson",storageBucket:"reading-jepson.firebasestorage.app",messagingSenderId:"1092023762764",appId:"1:1092023762764:web:df07ea182d5446675499e9"};let fa;try{Lf().length===0?fa=_m(wS):fa=Lf()[0]}catch(t){throw console.error("❌ Firebase initialization failed:",t),t}const Se=cS(fa),Or=vR(fa),Pe={users:"users",students:"students",weeks:"weeks",weekTemplates:"weekTemplates",weekAssignments:"weekAssignments",schoolCalendar:"schoolCalendar",passages:"passages",comprehensionQuestions:"comprehensionQuestions",vocab:"vocab",affixes:"affixes",wordMastery:"wordMastery",quizzesPublic:"quizzesPublic",quizzesPrivate:"quizzesPrivate",quizAttempts:"quizAttempts",fluencyAssessments:"fluencyAssessments",vocabLibrary:"vocabLibrary",affixLibrary:"affixLibrary",passageLibrary:"passageLibrary"};function to(t){return{id:t.id,...t.data()}}function cn(t){return t.docs.map(to)}async function ar(t){try{const e=tt(Se,Pe.users,t),n=await za(e);return n.exists()?to(n):null}catch(e){throw e}}async function Wd(t,e){const n=tt(Se,Pe.users,t);await En(n,{...e,createdAt:et()})}async function eP(t){const e=tt(Se,Pe.students,t),n=await za(e);return n.exists()?to(n):null}async function tP(t){console.log("[getStudentsByTeacher] Querying with teacherUid:",t);const e=on(ze(Se,Pe.students),zt("teacherUid","==",t),Wn("createdAt","desc"));try{const n=await an(e);console.log("[getStudentsByTeacher] Query returned",n.size,"documents");const r=cn(n);return console.log("[getStudentsByTeacher] Processed",r.length,"students:",r.map(s=>({id:s.id,name:s.displayName,email:s.studentEmail,teacherUid:s.teacherUid}))),r}catch(n){throw console.error("[getStudentsByTeacher] ERROR:",n.message,n.code),n}}async function nP(t){const e=tt(Se,Pe.weeks,t),n=await za(e);return n.exists()?to(n):null}async function rP(t,e){const n=on(ze(Se,Pe.weeks),zt("teacherUid","==",t),zt("studentId","==",e),Wn("weekOf","desc")),r=await an(n);return cn(r)}async function sP(t){const e=tt(ze(Se,Pe.weeks));return await En(e,{...t,createdAt:et(),updatedAt:et()}),e.id}async function iP(t){const e=tt(Se,Pe.weeks,t);await Uu(e)}async function oP(t){const e=on(ze(Se,Pe.passages),zt("weekId","==",t),Wn("type","asc")),n=await an(e);return cn(n)}async function aP(t){const e=tt(ze(Se,Pe.passages));return await En(e,{...t,createdAt:et(),updatedAt:et()}),e.id}async function cP(t){const e=on(ze(Se,Pe.comprehensionQuestions),zt("weekId","==",t),Wn("orderIndex","asc")),n=await an(e);return cn(n)}async function lP(t){const e=tt(ze(Se,Pe.comprehensionQuestions));return await En(e,{...t,createdAt:et(),updatedAt:et()}),e.id}async function uP(t){const e=on(ze(Se,Pe.vocab),zt("weekId","==",t)),n=await an(e);return cn(n)}async function hP(t){const e=tt(ze(Se,Pe.vocab));return await En(e,{...t,createdAt:et(),updatedAt:et()}),e.id}async function fP(t){const e=on(ze(Se,Pe.affixes),zt("weekId","==",t)),n=await an(e);return cn(n)}async function dP(t){const e=tt(ze(Se,Pe.affixes));return await En(e,{...t,createdAt:et(),updatedAt:et()}),e.id}async function pP(t){const e=tt(Se,Pe.quizzesPublic,t),n=await za(e);return n.exists()?to(n):null}async function mP(t){const e=on(ze(Se,Pe.quizzesPublic),zt("studentUid","==",t),Wn("assignedAt","desc")),n=await an(e);return cn(n)}async function gP(t){const e=tt(ze(Se,Pe.fluencyAssessments));return await En(e,{...t,createdAt:et()}),e.id}async function _P(t){const e=tt(ze(Se,Pe.weekTemplates));return await En(e,{...t,createdAt:et(),updatedAt:et()}),e.id}async function yP(t){const e=on(ze(Se,Pe.weekTemplates),zt("teacherUid","==",t),Wn("createdAt","desc")),n=await an(e);return cn(n)}async function vP(t){const e=tt(ze(Se,Pe.weekAssignments));return await En(e,{...t,createdAt:et(),updatedAt:et()}),e.id}async function EP(t){const e=on(ze(Se,Pe.weekAssignments),zt("studentId","==",t),Wn("startDate","asc")),n=await an(e);return cn(n)}async function TP(t,e){let n=on(ze(Se,Pe.weekAssignments),zt("teacherUid","==",t),Wn("startDate","asc"));const r=await an(n);return cn(r)}async function IP(t){const e=tt(Se,Pe.weekAssignments,t);await Uu(e)}async function wP(t){const e=tt(ze(Se,Pe.schoolCalendar));return await En(e,{...t,createdAt:et(),updatedAt:et()}),e.id}async function AP(t){const e=on(ze(Se,Pe.schoolCalendar),zt("teacherUid","==",t),Wn("date","asc")),n=await an(e);return cn(n)}async function RP(t){const e=tt(Se,Pe.schoolCalendar,t);await Uu(e)}function AS(){const t=ei(null),e=ei(null),n=ei(!0),r=ei(null),s=bt(()=>t.value!==null),i=bt(()=>{var b;return((b=e.value)==null?void 0:b.role)==="admin"}),o=bt(()=>{var b;return((b=e.value)==null?void 0:b.role)==="teacher"}),c=bt(()=>{var b;return((b=e.value)==null?void 0:b.role)==="student"});let l=null;return Rp(()=>{l=$m(Or,async b=>{if(t.value=b,n.value=!1,b)try{const k=await ar(b.uid);k?e.value=k:e.value=null}catch(k){console.error("Error loading user profile:",k),r.value="Failed to load user profile"}else e.value=null},b=>{console.error("Auth state change error:",b),r.value=b.message,n.value=!1})}),Ul(()=>{l&&l()}),{user:t,userProfile:e,isAuthenticated:s,isAdmin:i,isTeacher:o,isStudent:c,loading:n,error:r,signIn:async(b,k)=>{try{r.value=null,await rA(Or,b,k)}catch(N){throw r.value=N.message||"Failed to sign in",N}},signUp:async(b,k,N,q)=>{try{r.value=null;const F=await nA(Or,b,k);N&&F.user&&await iA(F.user,{displayName:N}),await Wd(F.user.uid,{role:q,displayName:N||b,email:F.user.email||b}),e.value=await ar(F.user.uid)}catch(F){throw r.value=F.message||"Failed to sign up",F}},signInWithGoogle:async()=>{try{r.value=null;const b=new Cn,k=await PA(Or,b),N=await ar(k.user.uid);if(N)e.value=N;else{if(k.user.email)try{const{getFunctions:q,httpsCallable:F}=await xe(async()=>{const{getFunctions:de,httpsCallable:w}=await import("./index.esm-jzqXJ46R.js");return{getFunctions:de,httpsCallable:w}},[]),$=q();await F($,"claimStudentAccount")({});const ue=await ar(k.user.uid);if(ue){e.value=ue;return}}catch{console.log("No student account to claim, user needs to set role")}e.value=null}}catch(b){throw r.value=b.message||"Failed to sign in with Google",b}},logout:async()=>{try{r.value=null,await cA(Or),e.value=null}catch(b){throw r.value=b.message||"Failed to sign out",b}},setUserRole:async(b,k)=>{if(!t.value)throw new Error("User must be authenticated");try{r.value=null,await Wd(t.value.uid,{role:b,displayName:k||t.value.displayName||t.value.email||"",email:t.value.email||""}),e.value=await ar(t.value.uid)}catch(N){throw r.value=N.message||"Failed to set user role",N}}}}const RS={id:"app"},bS={key:0,class:"navbar"},SS={class:"nav-content"},PS={class:"nav-brand"},CS={key:0,class:"nav-links"},kS={class:"nav-actions"},OS={class:"user-menu"},NS={class:"user-info"},DS={class:"user-avatar"},VS={class:"user-details"},xS={class:"user-name"},LS={class:"user-role"},MS=Fl({__name:"App",setup(t){const e=AT(),{userProfile:n,isAuthenticated:r,isTeacher:s,isStudent:i,logout:o}=AS(),c=async()=>{try{await o(),e.push("/login")}catch(l){console.error("Logout error:",l)}};return(l,h)=>{var g,y,b,k;const f=Mh("router-link"),p=Mh("router-view");return rs(),Io("div",RS,[kt(r)?(rs(),Io("nav",bS,[He("div",SS,[He("div",PS,[je(f,{to:"/",class:"brand-link"},{default:Zn(()=>[...h[0]||(h[0]=[He("svg",{class:"brand-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[He("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),He("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})],-1),He("span",{class:"brand-text"},"Reading Jepson",-1)])]),_:1})]),kt(n)?(rs(),Io("div",CS,[kt(s)?(rs(),Io(hn,{key:0},[je(f,{to:"/teacher",class:"nav-link"},{default:Zn(()=>[...h[1]||(h[1]=[Cr("Dashboard",-1)])]),_:1}),je(f,{to:"/teacher/students",class:"nav-link"},{default:Zn(()=>[...h[2]||(h[2]=[Cr("Students",-1)])]),_:1}),je(f,{to:"/teacher/week-templates",class:"nav-link"},{default:Zn(()=>[...h[3]||(h[3]=[Cr("Templates",-1)])]),_:1}),je(f,{to:"/teacher/assignments/planner",class:"nav-link"},{default:Zn(()=>[...h[4]||(h[4]=[Cr("📅 Planner",-1)])]),_:1}),je(f,{to:"/teacher/library",class:"nav-link"},{default:Zn(()=>[...h[5]||(h[5]=[Cr("Library",-1)])]),_:1})],64)):kt(i)?(rs(),Hp(f,{key:1,to:"/student",class:"nav-link"},{default:Zn(()=>[...h[6]||(h[6]=[Cr("My Quizzes",-1)])]),_:1})):_c("",!0)])):_c("",!0),He("div",kS,[He("div",OS,[He("div",NS,[He("div",DS,Co((((g=kt(n))==null?void 0:g.displayName)||((y=kt(n))==null?void 0:y.email)||"U").charAt(0).toUpperCase()),1),He("div",VS,[He("span",xS,Co(((b=kt(n))==null?void 0:b.displayName)||"User"),1),He("span",LS,Co(((k=kt(n))==null?void 0:k.role)==="teacher"?"Teacher":"Student"),1)])]),He("button",{onClick:c,class:"btn-logout",title:"Logout"},[...h[7]||(h[7]=[He("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[He("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),He("polyline",{points:"16 17 21 12 16 7"}),He("line",{x1:"21",y1:"12",x2:"9",y2:"12"})],-1)])])])])])])):_c("",!0),je(p)])}}}),FS=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},US=FS(MS,[["__scopeId","data-v-f0f39718"]]),R_=wT({history:tT(),routes:[{path:"/",name:"home",redirect:()=>"/login"},{path:"/login",name:"login",component:()=>xe(()=>import("./LoginView-BjQfjx6D.js"),__vite__mapDeps([0,1])),meta:{requiresAuth:!1}},{path:"/signup",name:"signup",component:()=>xe(()=>import("./SignupView-CWaff01f.js"),__vite__mapDeps([2,3])),meta:{requiresAuth:!1}},{path:"/role-select",name:"role-select",component:()=>xe(()=>import("./RoleSelectView-n2oM71KL.js"),__vite__mapDeps([4,5])),meta:{requiresAuth:!0,requiresRole:!1}},{path:"/admin",name:"admin",component:()=>xe(()=>import("./AdminDashboard-DTCQzDQo.js"),__vite__mapDeps([6,7])),meta:{requiresAuth:!0,requiresRole:"admin"}},{path:"/teacher",name:"teacher",component:()=>xe(()=>import("./TeacherDashboard-BShShxZV.js"),__vite__mapDeps([8,9])),meta:{requiresAuth:!0,requiresRole:"teacher"}},{path:"/teacher/students/:studentId?",name:"teacher-students",component:()=>xe(()=>import("./StudentManagement-Bbz2I8AT.js"),__vite__mapDeps([10,11,12,13,14])),meta:{requiresAuth:!0,requiresRole:"teacher"}},{path:"/teacher/weeks/:weekId?",name:"teacher-weeks",component:()=>xe(()=>import("./WeekManagement-CDbli3Rs.js"),__vite__mapDeps([15,11,12,16])),meta:{requiresAuth:!0,requiresRole:"teacher"}},{path:"/teacher/weeks/setup",name:"teacher-week-setup",component:()=>xe(()=>import("./WeekSetup-BZqZh4Nh.js"),__vite__mapDeps([17,18,19])),meta:{requiresAuth:!0,requiresRole:"teacher"}},{path:"/teacher/library",name:"teacher-library",component:()=>xe(()=>import("./LibraryManagement-C15Wsl7H.js"),__vite__mapDeps([20,18,21])),meta:{requiresAuth:!0,requiresRole:"teacher"}},{path:"/teacher/week-templates",name:"teacher-week-templates",component:()=>xe(()=>import("./WeekTemplateList-B8YdM5f_.js"),__vite__mapDeps([22,23])),meta:{requiresAuth:!0,requiresRole:"teacher"}},{path:"/teacher/week-templates/create",name:"teacher-week-template-create",component:()=>xe(()=>import("./WeekTemplateSetup-93bgoTpC.js"),__vite__mapDeps([24,18,25])),meta:{requiresAuth:!0,requiresRole:"teacher"}},{path:"/teacher/week-assignments",name:"teacher-week-assignments",component:()=>xe(()=>import("./WeekAssignments-1ETQUfON.js"),__vite__mapDeps([26,27])),meta:{requiresAuth:!0,requiresRole:"teacher"}},{path:"/teacher/assignments/planner",name:"teacher-assignment-planner",component:()=>xe(()=>import("./VisualAssignmentPlanner-CBjQf5jC.js"),__vite__mapDeps([28,29])),meta:{requiresAuth:!0,requiresRole:"teacher"}},{path:"/teacher/assignments/calendar",name:"teacher-assignment-calendar",component:()=>xe(()=>import("./AssignmentCalendar-1mM04xNU.js"),__vite__mapDeps([30,31])),meta:{requiresAuth:!0,requiresRole:"teacher"}},{path:"/teacher/assignments/print",name:"teacher-assignment-print",component:()=>xe(()=>import("./PrintMaterialsNew-CF-Vgd_D.js"),__vite__mapDeps([32,33])),meta:{requiresAuth:!0,requiresRole:"teacher"}},{path:"/teacher/assignments/assess",name:"teacher-assignment-assess",component:()=>xe(()=>import("./AssessmentEntry-CZbqkcHm.js"),__vite__mapDeps([34,35])),meta:{requiresAuth:!0,requiresRole:"teacher"}},{path:"/teacher/calendar",name:"teacher-calendar",component:()=>xe(()=>import("./SchoolCalendar-C5t2dkGt.js"),__vite__mapDeps([36,37])),meta:{requiresAuth:!0,requiresRole:"teacher"}},{path:"/teacher/calendar/import",name:"teacher-calendar-import",component:()=>xe(()=>import("./CalendarImport-CtitvWwZ.js"),__vite__mapDeps([38,39])),meta:{requiresAuth:!0,requiresRole:"teacher"}},{path:"/teacher/calendar/setup",name:"teacher-calendar-setup",component:()=>xe(()=>import("./SimpleCalendarSetup-CW5QAnzB.js"),__vite__mapDeps([40,41])),meta:{requiresAuth:!0,requiresRole:"teacher"}},{path:"/student",name:"student",component:()=>xe(()=>import("./StudentDashboard-DN2acQke.js"),__vite__mapDeps([42,43])),meta:{requiresAuth:!0,requiresRole:"student"}},{path:"/student/quiz/:quizId",name:"student-quiz",component:()=>xe(()=>import("./QuizTaking-tIfLdfXs.js"),__vite__mapDeps([44,11,12,45])),meta:{requiresAuth:!0,requiresRole:"student"}},{path:"/student/week/:weekId",name:"student-week",component:()=>xe(()=>import("./DailyActivity-BhGLvEsm.js"),__vite__mapDeps([46,47])),meta:{requiresAuth:!0,requiresRole:"student"}},{path:"/google-classroom-callback",name:"google-classroom-callback",component:()=>xe(()=>import("./GoogleClassroomCallback-BHSVaT91.js"),__vite__mapDeps([48,11,12,13,49])),meta:{requiresAuth:!0,requiresRole:"teacher"}}]});let ci=!1,Xe=null;$m(Or,async t=>{if(ci=!0,t)try{const e=await ar(t.uid);Xe=(e==null?void 0:e.role)||null}catch(e){console.error("Error getting user role:",e),Xe=null}else Xe=null});R_.beforeEach(async(t,e,n)=>{ci||await new Promise(s=>{const i=setTimeout(()=>{ci=!0,s()},1e3);if(ci){clearTimeout(i),s();return}const o=setInterval(()=>{ci&&(clearTimeout(i),clearInterval(o),s())},10)});const r=Or.currentUser;if(r&&Xe===null)try{const s=await ar(r.uid);Xe=(s==null?void 0:s.role)||null}catch{Xe=null}if(t.meta.requiresAuth){if(!r){n({name:"login"});return}if(Xe===null&&r)try{const s=await ar(r.uid);Xe=(s==null?void 0:s.role)||null}catch(s){console.error("Error getting user role:",s)}if(t.meta.requiresRole===!1){Xe?n(Xe==="admin"?"/admin":Xe==="teacher"?"/teacher":"/student"):n();return}if(t.meta.requiresRole){if(!Xe){n({name:"role-select"});return}if(Xe!==t.meta.requiresRole){n(Xe==="admin"?"/admin":Xe==="teacher"?"/teacher":"/student");return}}n()}else(t.name==="login"||t.name==="signup")&&r?n(Xe?Xe==="admin"?"/admin":Xe==="teacher"?"/teacher":"/student":{name:"role-select"}):n()});const b_=mE(US);b_.use(R_);b_.mount("#app");export{TP as $,Zn as A,Mh as B,AT as C,rs as D,KS as E,bt as F,Rp as G,hn as H,qS as I,tP as J,rP as K,Oo as L,oP as M,uP as N,fP as O,cP as P,iP as Q,WS as R,sP as S,Ye as T,aP as U,hP as V,dP as W,lP as X,_P as Y,vP as Z,FS as _,za as a,IP as a0,zS as a1,yP as a2,EP as a3,AP as a4,Hp as a5,eP as a6,gP as a7,wP as a8,RP as a9,HS as aa,mP as ab,pP as ac,nP as ad,vR as ae,ym as af,Je as ag,Gl as ah,VT as ai,$n as aj,Ts as ak,Ur as al,fr as am,tt as b,ze as c,Se as d,Uu as e,ZS as f,an as g,Fl as h,AS as i,Io as j,He as k,GS as l,_c as m,kt as n,Wn as o,Cr as p,on as q,ei as r,BS as s,Co as t,XS as u,$S as v,zt as w,bl as x,jS as y,je as z};
