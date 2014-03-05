/**
 * @license
 * Lo-Dash 2.4.1 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./dist/lodash.js`
 */
;(function(){function n(n,t,e){e=(e||0)-1;for(var r=n?n.length:0;++e<r;)if(n[e]===t)return e;return-1}function t(t,e){var r=typeof e;if(t=t.l,"boolean"==r||null==e)return t[e]?0:-1;"number"!=r&&"string"!=r&&(r="object");var u="number"==r?e:m+e;return t=(t=t[r])&&t[u],"object"==r?t&&-1<n(t,e)?0:-1:t?0:-1}function e(n){var t=this.l,e=typeof n;if("boolean"==e||null==n)t[n]=true;else{"number"!=e&&"string"!=e&&(e="object");var r="number"==e?n:m+n,t=t[e]||(t[e]={});"object"==e?(t[r]||(t[r]=[])).push(n):t[r]=true
}}function r(n){return n.charCodeAt(0)}function u(n,t){for(var e=n.m,r=t.m,u=-1,o=e.length;++u<o;){var i=e[u],a=r[u];if(i!==a){if(i>a||typeof i=="undefined")return 1;if(i<a||typeof a=="undefined")return-1}}return n.n-t.n}function o(n){var t=-1,r=n.length,u=n[0],o=n[r/2|0],i=n[r-1];if(u&&typeof u=="object"&&o&&typeof o=="object"&&i&&typeof i=="object")return false;for(u=f(),u["false"]=u["null"]=u["true"]=u.undefined=false,o=f(),o.k=n,o.l=u,o.push=e;++t<r;)o.push(n[t]);return o}function i(n){return"\\"+U[n]
}function a(){return h.pop()||[]}function f(){return g.pop()||{k:null,l:null,m:null,"false":false,n:0,"null":false,number:null,object:null,push:null,string:null,"true":false,undefined:false,o:null}}function l(n){n.length=0,h.length<_&&h.push(n)}function c(n){var t=n.l;t&&c(t),n.k=n.l=n.m=n.object=n.number=n.string=n.o=null,g.length<_&&g.push(n)}function p(n,t,e){t||(t=0),typeof e=="undefined"&&(e=n?n.length:0);var r=-1;e=e-t||0;for(var u=Array(0>e?0:e);++r<e;)u[r]=n[t+r];return u}function s(e){function h(n,t,e){if(!n||!V[typeof n])return n;
t=t&&typeof e=="undefined"?t:tt(t,e,3);for(var r=-1,u=V[typeof n]&&Fe(n),o=u?u.length:0;++r<o&&(e=u[r],false!==t(n[e],e,n)););return n}function g(n,t,e){var r;if(!n||!V[typeof n])return n;t=t&&typeof e=="undefined"?t:tt(t,e,3);for(r in n)if(false===t(n[r],r,n))break;return n}function _(n,t,e){var r,u=n,o=u;if(!u)return o;for(var i=arguments,a=0,f=typeof e=="number"?2:i.length;++a<f;)if((u=i[a])&&V[typeof u])for(var l=-1,c=V[typeof u]&&Fe(u),p=c?c.length:0;++l<p;)r=c[l],"undefined"==typeof o[r]&&(o[r]=u[r]);
return o}function U(n,t,e){var r,u=n,o=u;if(!u)return o;var i=arguments,a=0,f=typeof e=="number"?2:i.length;if(3<f&&"function"==typeof i[f-2])var l=tt(i[--f-1],i[f--],2);else 2<f&&"function"==typeof i[f-1]&&(l=i[--f]);for(;++a<f;)if((u=i[a])&&V[typeof u])for(var c=-1,p=V[typeof u]&&Fe(u),s=p?p.length:0;++c<s;)r=p[c],o[r]=l?l(o[r],u[r]):u[r];return o}function H(n){var t,e=[];if(!n||!V[typeof n])return e;for(t in n)me.call(n,t)&&e.push(t);return e}function J(n){return n&&typeof n=="object"&&!Te(n)&&me.call(n,"__wrapped__")?n:new Q(n)
}function Q(n,t){this.__chain__=!!t,this.__wrapped__=n}function X(n){function t(){if(r){var n=p(r);be.apply(n,arguments)}if(this instanceof t){var o=nt(e.prototype),n=e.apply(o,n||arguments);return wt(n)?n:o}return e.apply(u,n||arguments)}var e=n[0],r=n[2],u=n[4];return $e(t,n),t}function Z(n,t,e,r,u){if(e){var o=e(n);if(typeof o!="undefined")return o}if(!wt(n))return n;var i=ce.call(n);if(!K[i])return n;var f=Ae[i];switch(i){case T:case F:return new f(+n);case W:case P:return new f(n);case z:return o=f(n.source,C.exec(n)),o.lastIndex=n.lastIndex,o
}if(i=Te(n),t){var c=!r;r||(r=a()),u||(u=a());for(var s=r.length;s--;)if(r[s]==n)return u[s];o=i?f(n.length):{}}else o=i?p(n):U({},n);return i&&(me.call(n,"index")&&(o.index=n.index),me.call(n,"input")&&(o.input=n.input)),t?(r.push(n),u.push(o),(i?St:h)(n,function(n,i){o[i]=Z(n,t,e,r,u)}),c&&(l(r),l(u)),o):o}function nt(n){return wt(n)?ke(n):{}}function tt(n,t,e){if(typeof n!="function")return Ut;if(typeof t=="undefined"||!("prototype"in n))return n;var r=n.__bindData__;if(typeof r=="undefined"&&(De.funcNames&&(r=!n.name),r=r||!De.funcDecomp,!r)){var u=ge.call(n);
De.funcNames||(r=!O.test(u)),r||(r=E.test(u),$e(n,r))}if(false===r||true!==r&&1&r[1])return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,u){return n.call(t,e,r,u)};case 4:return function(e,r,u,o){return n.call(t,e,r,u,o)}}return Mt(n,t)}function et(n){function t(){var n=f?i:this;if(u){var h=p(u);be.apply(h,arguments)}return(o||c)&&(h||(h=p(arguments)),o&&be.apply(h,o),c&&h.length<a)?(r|=16,et([e,s?r:-4&r,h,null,i,a])):(h||(h=arguments),l&&(e=n[v]),this instanceof t?(n=nt(e.prototype),h=e.apply(n,h),wt(h)?h:n):e.apply(n,h))
}var e=n[0],r=n[1],u=n[2],o=n[3],i=n[4],a=n[5],f=1&r,l=2&r,c=4&r,s=8&r,v=e;return $e(t,n),t}function rt(e,r){var u=-1,i=st(),a=e?e.length:0,f=a>=b&&i===n,l=[];if(f){var p=o(r);p?(i=t,r=p):f=false}for(;++u<a;)p=e[u],0>i(r,p)&&l.push(p);return f&&c(r),l}function ut(n,t,e,r){r=(r||0)-1;for(var u=n?n.length:0,o=[];++r<u;){var i=n[r];if(i&&typeof i=="object"&&typeof i.length=="number"&&(Te(i)||yt(i))){t||(i=ut(i,t,e));var a=-1,f=i.length,l=o.length;for(o.length+=f;++a<f;)o[l++]=i[a]}else e||o.push(i)}return o
}function ot(n,t,e,r,u,o){if(e){var i=e(n,t);if(typeof i!="undefined")return!!i}if(n===t)return 0!==n||1/n==1/t;if(n===n&&!(n&&V[typeof n]||t&&V[typeof t]))return false;if(null==n||null==t)return n===t;var f=ce.call(n),c=ce.call(t);if(f==D&&(f=q),c==D&&(c=q),f!=c)return false;switch(f){case T:case F:return+n==+t;case W:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case z:case P:return n==oe(t)}if(c=f==$,!c){var p=me.call(n,"__wrapped__"),s=me.call(t,"__wrapped__");if(p||s)return ot(p?n.__wrapped__:n,s?t.__wrapped__:t,e,r,u,o);
if(f!=q)return false;if(f=n.constructor,p=t.constructor,f!=p&&!(dt(f)&&f instanceof f&&dt(p)&&p instanceof p)&&"constructor"in n&&"constructor"in t)return false}for(f=!u,u||(u=a()),o||(o=a()),p=u.length;p--;)if(u[p]==n)return o[p]==t;var v=0,i=true;if(u.push(n),o.push(t),c){if(p=n.length,v=t.length,(i=v==p)||r)for(;v--;)if(c=p,s=t[v],r)for(;c--&&!(i=ot(n[c],s,e,r,u,o)););else if(!(i=ot(n[v],s,e,r,u,o)))break}else g(t,function(t,a,f){return me.call(f,a)?(v++,i=me.call(n,a)&&ot(n[a],t,e,r,u,o)):void 0}),i&&!r&&g(n,function(n,t,e){return me.call(e,t)?i=-1<--v:void 0
});return u.pop(),o.pop(),f&&(l(u),l(o)),i}function it(n,t,e,r,u){(Te(t)?St:h)(t,function(t,o){var i,a,f=t,l=n[o];if(t&&((a=Te(t))||Pe(t))){for(f=r.length;f--;)if(i=r[f]==t){l=u[f];break}if(!i){var c;e&&(f=e(l,t),c=typeof f!="undefined")&&(l=f),c||(l=a?Te(l)?l:[]:Pe(l)?l:{}),r.push(t),u.push(l),c||it(l,t,e,r,u)}}else e&&(f=e(l,t),typeof f=="undefined"&&(f=t)),typeof f!="undefined"&&(l=f);n[o]=l})}function at(n,t){return n+he(Re()*(t-n+1))}function ft(e,r,u){var i=-1,f=st(),p=e?e.length:0,s=[],v=!r&&p>=b&&f===n,h=u||v?a():s;
for(v&&(h=o(h),f=t);++i<p;){var g=e[i],y=u?u(g,i,e):g;(r?!i||h[h.length-1]!==y:0>f(h,y))&&((u||v)&&h.push(y),s.push(g))}return v?(l(h.k),c(h)):u&&l(h),s}function lt(n){return function(t,e,r){var u={};e=J.createCallback(e,r,3),r=-1;var o=t?t.length:0;if(typeof o=="number")for(;++r<o;){var i=t[r];n(u,i,e(i,r,t),t)}else h(t,function(t,r,o){n(u,t,e(t,r,o),o)});return u}}function ct(n,t,e,r,u,o){var i=1&t,a=4&t,f=16&t,l=32&t;if(!(2&t||dt(n)))throw new ie;f&&!e.length&&(t&=-17,f=e=false),l&&!r.length&&(t&=-33,l=r=false);
var c=n&&n.__bindData__;return c&&true!==c?(c=p(c),c[2]&&(c[2]=p(c[2])),c[3]&&(c[3]=p(c[3])),!i||1&c[1]||(c[4]=u),!i&&1&c[1]&&(t|=8),!a||4&c[1]||(c[5]=o),f&&be.apply(c[2]||(c[2]=[]),e),l&&we.apply(c[3]||(c[3]=[]),r),c[1]|=t,ct.apply(null,c)):(1==t||17===t?X:et)([n,t,e,r,u,o])}function pt(n){return Be[n]}function st(){var t=(t=J.indexOf)===Wt?n:t;return t}function vt(n){return typeof n=="function"&&pe.test(n)}function ht(n){var t,e;return n&&ce.call(n)==q&&(t=n.constructor,!dt(t)||t instanceof t)?(g(n,function(n,t){e=t
}),typeof e=="undefined"||me.call(n,e)):false}function gt(n){return We[n]}function yt(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==D||false}function mt(n,t,e){var r=Fe(n),u=r.length;for(t=tt(t,e,3);u--&&(e=r[u],false!==t(n[e],e,n)););return n}function bt(n){var t=[];return g(n,function(n,e){dt(n)&&t.push(e)}),t.sort()}function _t(n){for(var t=-1,e=Fe(n),r=e.length,u={};++t<r;){var o=e[t];u[n[o]]=o}return u}function dt(n){return typeof n=="function"}function wt(n){return!(!n||!V[typeof n])
}function jt(n){return typeof n=="number"||n&&typeof n=="object"&&ce.call(n)==W||false}function kt(n){return typeof n=="string"||n&&typeof n=="object"&&ce.call(n)==P||false}function xt(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;)u[t]=n[e[t]];return u}function Ct(n,t,e){var r=-1,u=st(),o=n?n.length:0,i=false;return e=(0>e?Ie(0,o+e):e)||0,Te(n)?i=-1<u(n,t,e):typeof o=="number"?i=-1<(kt(n)?n.indexOf(t,e):u(n,t,e)):h(n,function(n){return++r<e?void 0:!(i=n===t)}),i}function Ot(n,t,e){var r=true;t=J.createCallback(t,e,3),e=-1;
var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&(r=!!t(n[e],e,n)););else h(n,function(n,e,u){return r=!!t(n,e,u)});return r}function Nt(n,t,e){var r=[];t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u;){var o=n[e];t(o,e,n)&&r.push(o)}else h(n,function(n,e,u){t(n,e,u)&&r.push(n)});return r}function It(n,t,e){t=J.createCallback(t,e,3),e=-1;var r=n?n.length:0;if(typeof r!="number"){var u;return h(n,function(n,e,r){return t(n,e,r)?(u=n,false):void 0}),u}for(;++e<r;){var o=n[e];
if(t(o,e,n))return o}}function St(n,t,e){var r=-1,u=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof u=="number")for(;++r<u&&false!==t(n[r],r,n););else h(n,t);return n}function Et(n,t,e){var r=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof r=="number")for(;r--&&false!==t(n[r],r,n););else{var u=Fe(n),r=u.length;h(n,function(n,e,o){return e=u?u[--r]:--r,t(o[e],e,o)})}return n}function Rt(n,t,e){var r=-1,u=n?n.length:0;if(t=J.createCallback(t,e,3),typeof u=="number")for(var o=Xt(u);++r<u;)o[r]=t(n[r],r,n);
else o=[],h(n,function(n,e,u){o[++r]=t(n,e,u)});return o}function At(n,t,e){var u=-1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a>o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e>u&&(u=e,o=n)});return o}function Dt(n,t,e,r){if(!n)return e;var u=3>arguments.length;t=J.createCallback(t,r,4);var o=-1,i=n.length;if(typeof i=="number")for(u&&(e=n[++o]);++o<i;)e=t(e,n[o],o,n);else h(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)
});return e}function $t(n,t,e,r){var u=3>arguments.length;return t=J.createCallback(t,r,4),Et(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)}),e}function Tt(n){var t=-1,e=n?n.length:0,r=Xt(typeof e=="number"?e:0);return St(n,function(n){var e=at(0,++t);r[t]=r[e],r[e]=n}),r}function Ft(n,t,e){var r;t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&!(r=t(n[e],e,n)););else h(n,function(n,e,u){return!(r=t(n,e,u))});return!!r}function Bt(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=-1;
for(t=J.createCallback(t,e,3);++o<u&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[0]:v;return p(n,0,Se(Ie(0,r),u))}function Wt(t,e,r){if(typeof r=="number"){var u=t?t.length:0;r=0>r?Ie(0,u+r):r||0}else if(r)return r=zt(t,e),t[r]===e?r:-1;return n(t,e,r)}function qt(n,t,e){if(typeof t!="number"&&null!=t){var r=0,u=-1,o=n?n.length:0;for(t=J.createCallback(t,e,3);++u<o&&t(n[u],u,n);)r++}else r=null==t||e?1:Ie(0,t);return p(n,r)}function zt(n,t,e,r){var u=0,o=n?n.length:u;for(e=e?J.createCallback(e,r,1):Ut,t=e(t);u<o;)r=u+o>>>1,e(n[r])<t?u=r+1:o=r;
return u}function Pt(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(e=J.createCallback(e,r,3)),ft(n,t,e)}function Kt(){for(var n=1<arguments.length?arguments:arguments[0],t=-1,e=n?At(Ve(n,"length")):0,r=Xt(0>e?0:e);++t<e;)r[t]=Ve(n,t);return r}function Lt(n,t){var e=-1,r=n?n.length:0,u={};for(t||!r||Te(n[0])||(t=[]);++e<r;){var o=n[e];t?u[o]=t[e]:o&&(u[o[0]]=o[1])}return u}function Mt(n,t){return 2<arguments.length?ct(n,17,p(arguments,2),null,t):ct(n,1,null,null,t)
}function Vt(n,t,e){function r(){c&&ve(c),i=c=p=v,(g||h!==t)&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null))}function u(){var e=t-(Ue()-f);0<e?c=_e(u,e):(i&&ve(i),e=p,i=c=p=v,e&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null)))}var o,i,a,f,l,c,p,s=0,h=false,g=true;if(!dt(n))throw new ie;if(t=Ie(0,t)||0,true===e)var y=true,g=false;else wt(e)&&(y=e.leading,h="maxWait"in e&&(Ie(t,e.maxWait)||0),g="trailing"in e?e.trailing:g);return function(){if(o=arguments,f=Ue(),l=this,p=g&&(c||!y),false===h)var e=y&&!c;else{i||y||(s=f);var v=h-(f-s),m=0>=v;
m?(i&&(i=ve(i)),s=f,a=n.apply(l,o)):i||(i=_e(r,v))}return m&&c?c=ve(c):c||t===h||(c=_e(u,t)),e&&(m=true,a=n.apply(l,o)),!m||c||i||(o=l=null),a}}function Ut(n){return n}function Gt(n,t,e){var r=true,u=t&&bt(t);t&&(e||u.length)||(null==e&&(e=t),o=Q,t=n,n=J,u=bt(t)),false===e?r=false:wt(e)&&"chain"in e&&(r=e.chain);var o=n,i=dt(o);St(u,function(e){var u=n[e]=t[e];i&&(o.prototype[e]=function(){var t=this.__chain__,e=this.__wrapped__,i=[e];if(be.apply(i,arguments),i=u.apply(n,i),r||t){if(e===i&&wt(i))return this;
i=new o(i),i.__chain__=t}return i})})}function Ht(){}function Jt(n){return function(t){return t[n]}}function Qt(){return this.__wrapped__}e=e?Y.defaults(G.Object(),e,Y.pick(G,A)):G;var Xt=e.Array,Yt=e.Boolean,Zt=e.Date,ne=e.Function,te=e.Math,ee=e.Number,re=e.Object,ue=e.RegExp,oe=e.String,ie=e.TypeError,ae=[],fe=re.prototype,le=e._,ce=fe.toString,pe=ue("^"+oe(ce).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),se=te.ceil,ve=e.clearTimeout,he=te.floor,ge=ne.prototype.toString,ye=vt(ye=re.getPrototypeOf)&&ye,me=fe.hasOwnProperty,be=ae.push,_e=e.setTimeout,de=ae.splice,we=ae.unshift,je=function(){try{var n={},t=vt(t=re.defineProperty)&&t,e=t(n,n,n)&&t
}catch(r){}return e}(),ke=vt(ke=re.create)&&ke,xe=vt(xe=Xt.isArray)&&xe,Ce=e.isFinite,Oe=e.isNaN,Ne=vt(Ne=re.keys)&&Ne,Ie=te.max,Se=te.min,Ee=e.parseInt,Re=te.random,Ae={};Ae[$]=Xt,Ae[T]=Yt,Ae[F]=Zt,Ae[B]=ne,Ae[q]=re,Ae[W]=ee,Ae[z]=ue,Ae[P]=oe,Q.prototype=J.prototype;var De=J.support={};De.funcDecomp=!vt(e.a)&&E.test(s),De.funcNames=typeof ne.name=="string",J.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:N,variable:"",imports:{_:J}},ke||(nt=function(){function n(){}return function(t){if(wt(t)){n.prototype=t;
var r=new n;n.prototype=null}return r||e.Object()}}());var $e=je?function(n,t){M.value=t,je(n,"__bindData__",M)}:Ht,Te=xe||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==$||false},Fe=Ne?function(n){return wt(n)?Ne(n):[]}:H,Be={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},We=_t(Be),qe=ue("("+Fe(We).join("|")+")","g"),ze=ue("["+Fe(Be).join("")+"]","g"),Pe=ye?function(n){if(!n||ce.call(n)!=q)return false;var t=n.valueOf,e=vt(t)&&(e=ye(t))&&ye(e);return e?n==e||ye(n)==e:ht(n)
}:ht,Ke=lt(function(n,t,e){me.call(n,e)?n[e]++:n[e]=1}),Le=lt(function(n,t,e){(me.call(n,e)?n[e]:n[e]=[]).push(t)}),Me=lt(function(n,t,e){n[e]=t}),Ve=Rt,Ue=vt(Ue=Zt.now)&&Ue||function(){return(new Zt).getTime()},Ge=8==Ee(d+"08")?Ee:function(n,t){return Ee(kt(n)?n.replace(I,""):n,t||0)};return J.after=function(n,t){if(!dt(t))throw new ie;return function(){return 1>--n?t.apply(this,arguments):void 0}},J.assign=U,J.at=function(n){for(var t=arguments,e=-1,r=ut(t,true,false,1),t=t[2]&&t[2][t[1]]===n?1:r.length,u=Xt(t);++e<t;)u[e]=n[r[e]];
return u},J.bind=Mt,J.bindAll=function(n){for(var t=1<arguments.length?ut(arguments,true,false,1):bt(n),e=-1,r=t.length;++e<r;){var u=t[e];n[u]=ct(n[u],1,null,null,n)}return n},J.bindKey=function(n,t){return 2<arguments.length?ct(t,19,p(arguments,2),null,n):ct(t,3,null,null,n)},J.chain=function(n){return n=new Q(n),n.__chain__=true,n},J.compact=function(n){for(var t=-1,e=n?n.length:0,r=[];++t<e;){var u=n[t];u&&r.push(u)}return r},J.compose=function(){for(var n=arguments,t=n.length;t--;)if(!dt(n[t]))throw new ie;
return function(){for(var t=arguments,e=n.length;e--;)t=[n[e].apply(this,t)];return t[0]}},J.constant=function(n){return function(){return n}},J.countBy=Ke,J.create=function(n,t){var e=nt(n);return t?U(e,t):e},J.createCallback=function(n,t,e){var r=typeof n;if(null==n||"function"==r)return tt(n,t,e);if("object"!=r)return Jt(n);var u=Fe(n),o=u[0],i=n[o];return 1!=u.length||i!==i||wt(i)?function(t){for(var e=u.length,r=false;e--&&(r=ot(t[u[e]],n[u[e]],null,true)););return r}:function(n){return n=n[o],i===n&&(0!==i||1/i==1/n)
}},J.curry=function(n,t){return t=typeof t=="number"?t:+t||n.length,ct(n,4,null,null,null,t)},J.debounce=Vt,J.defaults=_,J.defer=function(n){if(!dt(n))throw new ie;var t=p(arguments,1);return _e(function(){n.apply(v,t)},1)},J.delay=function(n,t){if(!dt(n))throw new ie;var e=p(arguments,2);return _e(function(){n.apply(v,e)},t)},J.difference=function(n){return rt(n,ut(arguments,true,true,1))},J.filter=Nt,J.flatten=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(n=Rt(n,e,r)),ut(n,t)
},J.forEach=St,J.forEachRight=Et,J.forIn=g,J.forInRight=function(n,t,e){var r=[];g(n,function(n,t){r.push(t,n)});var u=r.length;for(t=tt(t,e,3);u--&&false!==t(r[u--],r[u],n););return n},J.forOwn=h,J.forOwnRight=mt,J.functions=bt,J.groupBy=Le,J.indexBy=Me,J.initial=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else r=null==t||e?1:t||r;return p(n,0,Se(Ie(0,u-r),u))},J.intersection=function(){for(var e=[],r=-1,u=arguments.length,i=a(),f=st(),p=f===n,s=a();++r<u;){var v=arguments[r];
(Te(v)||yt(v))&&(e.push(v),i.push(p&&v.length>=b&&o(r?e[r]:s)))}var p=e[0],h=-1,g=p?p.length:0,y=[];n:for(;++h<g;){var m=i[0],v=p[h];if(0>(m?t(m,v):f(s,v))){for(r=u,(m||s).push(v);--r;)if(m=i[r],0>(m?t(m,v):f(e[r],v)))continue n;y.push(v)}}for(;u--;)(m=i[u])&&c(m);return l(i),l(s),y},J.invert=_t,J.invoke=function(n,t){var e=p(arguments,2),r=-1,u=typeof t=="function",o=n?n.length:0,i=Xt(typeof o=="number"?o:0);return St(n,function(n){i[++r]=(u?t:n[t]).apply(n,e)}),i},J.keys=Fe,J.map=Rt,J.mapValues=function(n,t,e){var r={};
return t=J.createCallback(t,e,3),h(n,function(n,e,u){r[e]=t(n,e,u)}),r},J.max=At,J.memoize=function(n,t){function e(){var r=e.cache,u=t?t.apply(this,arguments):m+arguments[0];return me.call(r,u)?r[u]:r[u]=n.apply(this,arguments)}if(!dt(n))throw new ie;return e.cache={},e},J.merge=function(n){var t=arguments,e=2;if(!wt(n))return n;if("number"!=typeof t[2]&&(e=t.length),3<e&&"function"==typeof t[e-2])var r=tt(t[--e-1],t[e--],2);else 2<e&&"function"==typeof t[e-1]&&(r=t[--e]);for(var t=p(arguments,1,e),u=-1,o=a(),i=a();++u<e;)it(n,t[u],r,o,i);
return l(o),l(i),n},J.min=function(n,t,e){var u=1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a<o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e<u&&(u=e,o=n)});return o},J.omit=function(n,t,e){var r={};if(typeof t!="function"){var u=[];g(n,function(n,t){u.push(t)});for(var u=rt(u,ut(arguments,true,false,1)),o=-1,i=u.length;++o<i;){var a=u[o];r[a]=n[a]}}else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)||(r[e]=n)
});return r},J.once=function(n){var t,e;if(!dt(n))throw new ie;return function(){return t?e:(t=true,e=n.apply(this,arguments),n=null,e)}},J.pairs=function(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;){var o=e[t];u[t]=[o,n[o]]}return u},J.partial=function(n){return ct(n,16,p(arguments,1))},J.partialRight=function(n){return ct(n,32,null,p(arguments,1))},J.pick=function(n,t,e){var r={};if(typeof t!="function")for(var u=-1,o=ut(arguments,true,false,1),i=wt(n)?o.length:0;++u<i;){var a=o[u];a in n&&(r[a]=n[a])
}else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)&&(r[e]=n)});return r},J.pluck=Ve,J.property=Jt,J.pull=function(n){for(var t=arguments,e=0,r=t.length,u=n?n.length:0;++e<r;)for(var o=-1,i=t[e];++o<u;)n[o]===i&&(de.call(n,o--,1),u--);return n},J.range=function(n,t,e){n=+n||0,e=typeof e=="number"?e:+e||1,null==t&&(t=n,n=0);var r=-1;t=Ie(0,se((t-n)/(e||1)));for(var u=Xt(t);++r<t;)u[r]=n,n+=e;return u},J.reject=function(n,t,e){return t=J.createCallback(t,e,3),Nt(n,function(n,e,r){return!t(n,e,r)
})},J.remove=function(n,t,e){var r=-1,u=n?n.length:0,o=[];for(t=J.createCallback(t,e,3);++r<u;)e=n[r],t(e,r,n)&&(o.push(e),de.call(n,r--,1),u--);return o},J.rest=qt,J.shuffle=Tt,J.sortBy=function(n,t,e){var r=-1,o=Te(t),i=n?n.length:0,p=Xt(typeof i=="number"?i:0);for(o||(t=J.createCallback(t,e,3)),St(n,function(n,e,u){var i=p[++r]=f();o?i.m=Rt(t,function(t){return n[t]}):(i.m=a())[0]=t(n,e,u),i.n=r,i.o=n}),i=p.length,p.sort(u);i--;)n=p[i],p[i]=n.o,o||l(n.m),c(n);return p},J.tap=function(n,t){return t(n),n
},J.throttle=function(n,t,e){var r=true,u=true;if(!dt(n))throw new ie;return false===e?r=false:wt(e)&&(r="leading"in e?e.leading:r,u="trailing"in e?e.trailing:u),L.leading=r,L.maxWait=t,L.trailing=u,Vt(n,t,L)},J.times=function(n,t,e){n=-1<(n=+n)?n:0;var r=-1,u=Xt(n);for(t=tt(t,e,1);++r<n;)u[r]=t(r);return u},J.toArray=function(n){return n&&typeof n.length=="number"?p(n):xt(n)},J.transform=function(n,t,e,r){var u=Te(n);if(null==e)if(u)e=[];else{var o=n&&n.constructor;e=nt(o&&o.prototype)}return t&&(t=J.createCallback(t,r,4),(u?St:h)(n,function(n,r,u){return t(e,n,r,u)
})),e},J.union=function(){return ft(ut(arguments,true,true))},J.uniq=Pt,J.values=xt,J.where=Nt,J.without=function(n){return rt(n,p(arguments,1))},J.wrap=function(n,t){return ct(t,16,[n])},J.xor=function(){for(var n=-1,t=arguments.length;++n<t;){var e=arguments[n];if(Te(e)||yt(e))var r=r?ft(rt(r,e).concat(rt(e,r))):e}return r||[]},J.zip=Kt,J.zipObject=Lt,J.collect=Rt,J.drop=qt,J.each=St,J.eachRight=Et,J.extend=U,J.methods=bt,J.object=Lt,J.select=Nt,J.tail=qt,J.unique=Pt,J.unzip=Kt,Gt(J),J.clone=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=t,t=false),Z(n,t,typeof e=="function"&&tt(e,r,1))
},J.cloneDeep=function(n,t,e){return Z(n,true,typeof t=="function"&&tt(t,e,1))},J.contains=Ct,J.escape=function(n){return null==n?"":oe(n).replace(ze,pt)},J.every=Ot,J.find=It,J.findIndex=function(n,t,e){var r=-1,u=n?n.length:0;for(t=J.createCallback(t,e,3);++r<u;)if(t(n[r],r,n))return r;return-1},J.findKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),h(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.findLast=function(n,t,e){var r;return t=J.createCallback(t,e,3),Et(n,function(n,e,u){return t(n,e,u)?(r=n,false):void 0
}),r},J.findLastIndex=function(n,t,e){var r=n?n.length:0;for(t=J.createCallback(t,e,3);r--;)if(t(n[r],r,n))return r;return-1},J.findLastKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),mt(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.has=function(n,t){return n?me.call(n,t):false},J.identity=Ut,J.indexOf=Wt,J.isArguments=yt,J.isArray=Te,J.isBoolean=function(n){return true===n||false===n||n&&typeof n=="object"&&ce.call(n)==T||false},J.isDate=function(n){return n&&typeof n=="object"&&ce.call(n)==F||false
},J.isElement=function(n){return n&&1===n.nodeType||false},J.isEmpty=function(n){var t=true;if(!n)return t;var e=ce.call(n),r=n.length;return e==$||e==P||e==D||e==q&&typeof r=="number"&&dt(n.splice)?!r:(h(n,function(){return t=false}),t)},J.isEqual=function(n,t,e,r){return ot(n,t,typeof e=="function"&&tt(e,r,2))},J.isFinite=function(n){return Ce(n)&&!Oe(parseFloat(n))},J.isFunction=dt,J.isNaN=function(n){return jt(n)&&n!=+n},J.isNull=function(n){return null===n},J.isNumber=jt,J.isObject=wt,J.isPlainObject=Pe,J.isRegExp=function(n){return n&&typeof n=="object"&&ce.call(n)==z||false
},J.isString=kt,J.isUndefined=function(n){return typeof n=="undefined"},J.lastIndexOf=function(n,t,e){var r=n?n.length:0;for(typeof e=="number"&&(r=(0>e?Ie(0,r+e):Se(e,r-1))+1);r--;)if(n[r]===t)return r;return-1},J.mixin=Gt,J.noConflict=function(){return e._=le,this},J.noop=Ht,J.now=Ue,J.parseInt=Ge,J.random=function(n,t,e){var r=null==n,u=null==t;return null==e&&(typeof n=="boolean"&&u?(e=n,n=1):u||typeof t!="boolean"||(e=t,u=true)),r&&u&&(t=1),n=+n||0,u?(t=n,n=0):t=+t||0,e||n%1||t%1?(e=Re(),Se(n+e*(t-n+parseFloat("1e-"+((e+"").length-1))),t)):at(n,t)
},J.reduce=Dt,J.reduceRight=$t,J.result=function(n,t){if(n){var e=n[t];return dt(e)?n[t]():e}},J.runInContext=s,J.size=function(n){var t=n?n.length:0;return typeof t=="number"?t:Fe(n).length},J.some=Ft,J.sortedIndex=zt,J.template=function(n,t,e){var r=J.templateSettings;n=oe(n||""),e=_({},e,r);var u,o=_({},e.imports,r.imports),r=Fe(o),o=xt(o),a=0,f=e.interpolate||S,l="__p+='",f=ue((e.escape||S).source+"|"+f.source+"|"+(f===N?x:S).source+"|"+(e.evaluate||S).source+"|$","g");n.replace(f,function(t,e,r,o,f,c){return r||(r=o),l+=n.slice(a,c).replace(R,i),e&&(l+="'+__e("+e+")+'"),f&&(u=true,l+="';"+f+";\n__p+='"),r&&(l+="'+((__t=("+r+"))==null?'':__t)+'"),a=c+t.length,t
}),l+="';",f=e=e.variable,f||(e="obj",l="with("+e+"){"+l+"}"),l=(u?l.replace(w,""):l).replace(j,"$1").replace(k,"$1;"),l="function("+e+"){"+(f?"":e+"||("+e+"={});")+"var __t,__p='',__e=_.escape"+(u?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}";try{var c=ne(r,"return "+l).apply(v,o)}catch(p){throw p.source=l,p}return t?c(t):(c.source=l,c)},J.unescape=function(n){return null==n?"":oe(n).replace(qe,gt)},J.uniqueId=function(n){var t=++y;return oe(null==n?"":n)+t
},J.all=Ot,J.any=Ft,J.detect=It,J.findWhere=It,J.foldl=Dt,J.foldr=$t,J.include=Ct,J.inject=Dt,Gt(function(){var n={};return h(J,function(t,e){J.prototype[e]||(n[e]=t)}),n}(),false),J.first=Bt,J.last=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[u-1]:v;return p(n,Ie(0,u-r))},J.sample=function(n,t,e){return n&&typeof n.length!="number"&&(n=xt(n)),null==t||e?n?n[at(0,n.length-1)]:v:(n=Tt(n),n.length=Se(Ie(0,t),n.length),n)
},J.take=Bt,J.head=Bt,h(J,function(n,t){var e="sample"!==t;J.prototype[t]||(J.prototype[t]=function(t,r){var u=this.__chain__,o=n(this.__wrapped__,t,r);return u||null!=t&&(!r||e&&typeof t=="function")?new Q(o,u):o})}),J.VERSION="2.4.1",J.prototype.chain=function(){return this.__chain__=true,this},J.prototype.toString=function(){return oe(this.__wrapped__)},J.prototype.value=Qt,J.prototype.valueOf=Qt,St(["join","pop","shift"],function(n){var t=ae[n];J.prototype[n]=function(){var n=this.__chain__,e=t.apply(this.__wrapped__,arguments);
return n?new Q(e,n):e}}),St(["push","reverse","sort","unshift"],function(n){var t=ae[n];J.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),St(["concat","slice","splice"],function(n){var t=ae[n];J.prototype[n]=function(){return new Q(t.apply(this.__wrapped__,arguments),this.__chain__)}}),J}var v,h=[],g=[],y=0,m=+new Date+"",b=75,_=40,d=" \t\x0B\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",w=/\b__p\+='';/g,j=/\b(__p\+=)''\+/g,k=/(__e\(.*?\)|\b__t\))\+'';/g,x=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,C=/\w*$/,O=/^\s*function[ \n\r\t]+\w/,N=/<%=([\s\S]+?)%>/g,I=RegExp("^["+d+"]*0+(?=.$)"),S=/($^)/,E=/\bthis\b/,R=/['\n\r\t\u2028\u2029\\]/g,A="Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "),D="[object Arguments]",$="[object Array]",T="[object Boolean]",F="[object Date]",B="[object Function]",W="[object Number]",q="[object Object]",z="[object RegExp]",P="[object String]",K={};
K[B]=false,K[D]=K[$]=K[T]=K[F]=K[W]=K[q]=K[z]=K[P]=true;var L={leading:false,maxWait:0,trailing:false},M={configurable:false,enumerable:false,value:null,writable:false},V={"boolean":false,"function":true,object:true,number:false,string:false,undefined:false},U={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"},G=V[typeof window]&&window||this,H=V[typeof exports]&&exports&&!exports.nodeType&&exports,J=V[typeof module]&&module&&!module.nodeType&&module,Q=J&&J.exports===H&&H,X=V[typeof global]&&global;!X||X.global!==X&&X.window!==X||(G=X);
var Y=s();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(G._=Y, define(function(){return Y})):H&&J?Q?(J.exports=Y)._=Y:H._=Y:G._=Y}).call(this);
/*
 AngularJS v1.2.14-build.2317+sha.348a771
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(D,T,s){'use strict';function F(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.14-build.2317+sha.348a771/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function ub(b){if(null==
b||ya(b))return!1;var a=b.length;return 1===b.nodeType&&a?!0:C(b)||I(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d;if(b)if(N(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(b.forEach&&b.forEach!==r)b.forEach(a,c);else if(ub(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Pb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}
function Qc(b,a,c){for(var d=Pb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Qb(b){return function(a,c){b(c,a)}}function Za(){for(var b=ia.length,a;b;){b--;a=ia[b].charCodeAt(0);if(57==a)return ia[b]="A",ia.join("");if(90==a)ia[b]="0";else return ia[b]=String.fromCharCode(a+1),ia.join("")}ia.unshift("0");return ia.join("")}function Rb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function t(b){var a=b.$$hashKey;r(arguments,function(a){a!==b&&r(a,function(a,c){b[c]=a})});Rb(b,a);return b}
function Q(b){return parseInt(b,10)}function Sb(b,a){return t(new (t(function(){},{prototype:b})),a)}function w(){}function za(b){return b}function $(b){return function(){return b}}function A(b){return"undefined"===typeof b}function v(b){return"undefined"!==typeof b}function X(b){return null!=b&&"object"===typeof b}function C(b){return"string"===typeof b}function vb(b){return"number"===typeof b}function La(b){return"[object Date]"===Aa.call(b)}function I(b){return"[object Array]"===Aa.call(b)}function N(b){return"function"===
typeof b}function $a(b){return"[object RegExp]"===Aa.call(b)}function ya(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Rc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Sc(b,a,c){var d=[];r(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function ab(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Ma(b,a){var c=ab(b,a);0<=c&&b.splice(c,1);return a}function ba(b,a){if(ya(b)||b&&b.$evalAsync&&b.$watch)throw Na("cpws");
if(a){if(b===a)throw Na("cpi");if(I(b))for(var c=a.length=0;c<b.length;c++)a.push(ba(b[c]));else{c=a.$$hashKey;r(a,function(b,c){delete a[c]});for(var d in b)a[d]=ba(b[d]);Rb(a,c)}}else(a=b)&&(I(b)?a=ba(b,[]):La(b)?a=new Date(b.getTime()):$a(b)?a=RegExp(b.source):X(b)&&(a=ba(b,{})));return a}function Tb(b,a){a=a||{};for(var c in b)!b.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a}function sa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;
var c=typeof b,d;if(c==typeof a&&"object"==c)if(I(b)){if(!I(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!sa(b[d],a[d]))return!1;return!0}}else{if(La(b))return La(a)&&b.getTime()==a.getTime();if($a(b)&&$a(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||ya(b)||ya(a)||I(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!N(b[d])){if(!sa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!N(a[d]))return!1;
return!0}return!1}function Ub(){return T.securityPolicy&&T.securityPolicy.isActive||T.querySelector&&!(!T.querySelector("[ng-csp]")&&!T.querySelector("[data-ng-csp]"))}function bb(b,a){var c=2<arguments.length?ta.call(arguments,2):[];return!N(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(ta.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Tc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=
s:ya(a)?c="$WINDOW":a&&T===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function na(b,a){return"undefined"===typeof b?s:JSON.stringify(b,Tc,a?"  ":null)}function Vb(b){return C(b)?JSON.parse(b):b}function Oa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=O(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function fa(b){b=z(b).clone();try{b.empty()}catch(a){}var c=z("<div>").append(b).html();try{return 3===b[0].nodeType?O(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
function(a,b){return"<"+O(b)})}catch(d){return O(c)}}function Wb(b){try{return decodeURIComponent(b)}catch(a){}}function Xb(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.split("="),d=Wb(c[0]),v(d)&&(b=v(c[1])?Wb(c[1]):!0,a[d]?I(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Yb(b){var a=[];r(b,function(b,d){I(b)?r(b,function(b){a.push(ua(d,!0)+(!0===b?"":"="+ua(b,!0)))}):a.push(ua(d,!0)+(!0===b?"":"="+ua(b,!0)))});return a.length?a.join("&"):""}function wb(b){return ua(b,
!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ua(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Uc(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,g=["ng:app","ng-app","x-ng-app","data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;r(g,function(a){g[a]=!0;c(T.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(r(b.querySelectorAll("."+a),c),r(b.querySelectorAll("."+
a+"\\:"),c),r(b.querySelectorAll("["+a+"]"),c))});r(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):r(a.attributes,function(b){!e&&g[b.name]&&(e=a,f=b.value)})}});e&&a(e,f?[f]:[])}function Zb(b,a){var c=function(){b=z(b);if(b.injector()){var c=b[0]===T?"document":fa(b);throw Na("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=$b(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",
function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(D&&!d.test(D.name))return c();D.name=D.name.replace(d,"");Ba.resumeBootstrap=function(b){r(b,function(b){a.push(b)});c()}}function cb(b,a){a=a||"_";return b.replace(Vc,function(b,d){return(d?a:"")+b.toLowerCase()})}function xb(b,a,c){if(!b)throw Na("areq",a||"?",c||"required");return b}function Pa(b,a,c){c&&I(b)&&(b=b[b.length-1]);xb(N(b),a,"not a function, got "+(b&&"object"==typeof b?
b.constructor.name||"Object":typeof b));return b}function va(b,a){if("hasOwnProperty"===b)throw Na("badname",a);}function ac(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&N(b)?bb(e,b):b}function yb(b){var a=b[0];b=b[b.length-1];if(a===b)return z(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return z(c)}function Wc(b){var a=F("$injector"),c=F("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||F;return b.module||
(b.module=function(){var b={};return function(e,f,g){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return m}}if(!f)throw a("nomod",e);var c=[],d=[],l=b("$injector","invoke"),m={_invokeQueue:c,_runBlocks:d,requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide",
"constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};g&&l(g);return m}())}}())}function Qa(b){return b.replace(Xc,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Yc,"Moz$1")}function zb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],n=a,k,l,m,p,q,y;if(!d||null!=b)for(;e.length;)for(k=e.shift(),
l=0,m=k.length;l<m;l++)for(p=z(k[l]),n?p.triggerHandler("$destroy"):n=!n,q=0,p=(y=p.children()).length;q<p;q++)e.push(Ca(y[q]));return f.apply(this,arguments)}var f=Ca.fn[b],f=f.$original||f;e.$original=f;Ca.fn[b]=e}function R(b){if(b instanceof R)return b;C(b)&&(b=ca(b));if(!(this instanceof R)){if(C(b)&&"<"!=b.charAt(0))throw Ab("nosel");return new R(b)}if(C(b)){var a=T.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);Bb(this,a.childNodes);z(T.createDocumentFragment()).append(this)}else Bb(this,
b)}function Cb(b){return b.cloneNode(!0)}function Da(b){bc(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Da(b[a])}function cc(b,a,c,d){if(v(d))throw Ab("offargs");var e=ja(b,"events");ja(b,"handle")&&(A(a)?r(e,function(a,c){Db(b,c,a);delete e[c]}):r(a.split(" "),function(a){A(c)?(Db(b,a,e[a]),delete e[a]):Ma(e[a]||[],c)}))}function bc(b,a){var c=b[db],d=Ra[c];d&&(a?delete Ra[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),cc(b)),delete Ra[c],b[db]=s))}function ja(b,a,c){var d=
b[db],d=Ra[d||-1];if(v(c))d||(b[db]=d=++Zc,d=Ra[d]={}),d[a]=c;else return d&&d[a]}function dc(b,a,c){var d=ja(b,"data"),e=v(c),f=!e&&v(a),g=f&&!X(a);d||g||ja(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&d[a];t(d,a)}else return d}function Eb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function eb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",ca((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+ca(a)+" "," ")))})}function fb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=ca(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",ca(c))}}function Bb(b,a){if(a){a=a.nodeName||!v(a.length)||ya(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function ec(b,a){return gb(b,"$"+(a||"ngController")+"Controller")}function gb(b,a,c){b=z(b);9==b[0].nodeType&&(b=b.find("html"));for(a=I(a)?a:[a];b.length;){for(var d=
0,e=a.length;d<e;d++)if((c=b.data(a[d]))!==s)return c;b=b.parent()}}function fc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Da(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function gc(b,a){var c=hb[a.toLowerCase()];return c&&hc[b.nodeName]&&c}function $c(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||T);if(A(c.defaultPrevented)){var f=c.preventDefault;
c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var g=Tb(a[e||c.type]||[]);r(g,function(a){a.call(b,c)});8>=P?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ea(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===
s&&(c=b.$$hashKey=Za()):c=b;return a+":"+c}function Sa(b){r(b,this.put,this)}function ic(b){var a,c;"function"==typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(ad,""),c=c.match(bd),r(c[1].split(cd),function(b){b.replace(dd,function(b,c,d){a.push(d)})})),b.$inject=a):I(b)?(c=b.length-1,Pa(b[c],"fn"),a=b.slice(0,c)):Pa(b,"fn",!0);return a}function $b(b){function a(a){return function(b,c){if(X(b))r(b,Qb(a));else return a(b,c)}}function c(a,b){va(a,"service");if(N(b)||I(b))b=m.instantiate(b);
if(!b.$get)throw Ta("pget",a);return l[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,f,h;r(a,function(a){if(!k.get(a)){k.put(a,!0);try{if(C(a))for(c=Ua(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,f=0,h=d.length;f<h;f++){var g=d[f],n=m.get(g[0]);n[g[1]].apply(n,g[2])}else N(a)?b.push(m.invoke(a)):I(a)?b.push(m.invoke(a)):Pa(a,"module")}catch(q){throw I(a)&&(a=a[a.length-1]),q.message&&(q.stack&&-1==q.stack.indexOf(q.message))&&(q=q.message+"\n"+q.stack),
Ta("modulerr",a,q.stack||q.message||q);}}});return b}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===g)throw Ta("cdep",n.join(" <- "));return a[d]}try{return n.unshift(d),a[d]=g,a[d]=b(d)}catch(e){throw a[d]===g&&delete a[d],e;}finally{n.shift()}}function d(a,b,e){var f=[],h=ic(a),g,n,k;n=0;for(g=h.length;n<g;n++){k=h[n];if("string"!==typeof k)throw Ta("itkn",k);f.push(e&&e.hasOwnProperty(k)?e[k]:c(k))}a.$inject||(a=a[g]);return a.apply(b,f)}return{invoke:d,instantiate:function(a,
b){var c=function(){},e;c.prototype=(I(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return X(e)||N(e)?e:c},get:c,annotate:ic,has:function(b){return l.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}var g={},h="Provider",n=[],k=new Sa,l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,$(b))}),constant:a(function(a,b){va(a,"constant");l[a]=b;p[a]=b}),decorator:function(a,b){var c=m.get(a+h),
d=c.$get;c.$get=function(){var a=q.invoke(d,c);return q.invoke(b,null,{$delegate:a})}}}},m=l.$injector=f(l,function(){throw Ta("unpr",n.join(" <- "));}),p={},q=p.$injector=f(p,function(a){a=m.get(a+h);return q.invoke(a.$get,a)});r(e(b),function(a){q.invoke(a||w)});return q}function ed(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;r(a,function(a){b||"a"!==O(a.nodeName)||(b=a)});return b}function f(){var b=
c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function fd(b,a,c,d){function e(a){try{a.apply(null,ta.call(arguments,1))}finally{if(y--,0===y)for(;B.length;)try{B.pop()()}catch(b){c.error(b)}}}function f(a,b){(function jb(){r(x,function(a){a()});u=b(jb,a)})()}function g(){E=null;H!=h.url()&&(H=h.url(),
r(Y,function(a){a(h.url())}))}var h=this,n=a[0],k=b.location,l=b.history,m=b.setTimeout,p=b.clearTimeout,q={};h.isMock=!1;var y=0,B=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){y++};h.notifyWhenNoOutstandingRequests=function(a){r(x,function(a){a()});0===y?a():B.push(a)};var x=[],u;h.addPollFn=function(a){A(u)&&f(100,m);x.push(a);return a};var H=k.href,W=a.find("base"),E=null;h.url=function(a,c){k!==b.location&&(k=b.location);l!==b.history&&(l=b.history);if(a){if(H!=
a)return H=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),W.attr("href",W.attr("href"))):(E=a,c?k.replace(a):k.href=a),h}else return E||k.href.replace(/%27/g,"'")};var Y=[],S=!1;h.onUrlChange=function(a){if(!S){if(d.history)z(b).on("popstate",g);if(d.hashchange)z(b).on("hashchange",g);else h.addPollFn(g);S=!0}Y.push(a);return a};h.baseHref=function(){var a=W.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var M={},aa="",U=h.baseHref();h.cookies=function(a,b){var d,
e,f,h;if(a)b===s?n.cookie=escape(a)+"=;path="+U+";expires=Thu, 01 Jan 1970 00:00:00 GMT":C(b)&&(d=(n.cookie=escape(a)+"="+escape(b)+";path="+U).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(n.cookie!==aa)for(aa=n.cookie,d=aa.split("; "),M={},f=0;f<d.length;f++)e=d[f],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),M[a]===s&&(M[a]=unescape(e.substring(h+1))));return M}};h.defer=function(a,b){var c;y++;c=m(function(){delete q[c];
e(a)},b||0);q[c]=!0;return c};h.defer.cancel=function(a){return q[a]?(delete q[a],p(a),e(w),!0):!1}}function gd(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new fd(b,d,a,c)}]}function hd(){this.$get=function(){function b(b,d){function e(a){a!=m&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,m),m=a,m.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw F("$cacheFactory")("iid",b);var g=0,h=t({},d,{id:b}),n={},k=d&&d.capacity||Number.MAX_VALUE,l={},m=null,p=null;
return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!A(b))return a in n||g++,n[a]=b,g>k&&this.remove(p.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return n[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=l[a];if(!b)return;b==m&&(m=b.p);b==p&&(p=b.n);f(b.n,b.p);delete l[a]}delete n[a];g--},removeAll:function(){n={};g=0;l={};m=p=null},destroy:function(){l=h=n=null;delete a[b]},info:function(){return t({},h,{size:g})}}}var a={};
b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function id(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function jc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,f=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,g=/^<\s*(tr|th|td|tbody)(\s+[^>]*)?>/i,h=/^(on[a-z]+|formaction)$/;this.directive=function k(a,e){va(a,"directive");C(a)?(xb(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector",
"$exceptionHandler",function(b,d){var e=[];r(c[a],function(c,f){try{var h=b.invoke(c);N(h)?h={compile:$(h)}:!h.compile&&h.link&&(h.compile=$(h.link));h.priority=h.priority||0;h.index=f;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"A";e.push(h)}catch(g){d(g)}});return e}])),c[a].push(e)):r(a,Qb(k));return this};this.aHrefSanitizationWhitelist=function(b){return v(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(b){return v(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,m,p,q,y,B,x,u,H,W,E){function Y(a,b,c,d,e){a instanceof z||(a=z(a));r(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=z(b).wrap("<span></span>").parent()[0])});var f=M(a,b,a,c,d,e);S(a,"ng-scope");return function(b,
c,d){xb(b,"scope");var e=c?Fa.clone.call(a):a;r(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var h=e.length;d<h;d++){var g=e[d].nodeType;1!==g&&9!==g||e.eq(d).data("$scope",b)}c&&c(e,b);f&&f(b,e,e);return e}}function S(a,b){try{a.addClass(b)}catch(c){}}function M(a,b,c,d,e,f){function h(a,c,d,e){var f,k,q,l,m,p,y;f=c.length;var L=Array(f);for(m=0;m<f;m++)L[m]=c[m];y=m=0;for(p=g.length;m<p;y++)k=L[y],c=g[m++],f=g[m++],q=z(k),c?(c.scope?(l=a.$new(),q.data("$scope",l)):l=a,(q=c.transclude)||
!e&&b?c(f,l,k,d,aa(a,q||b)):c(f,l,k,d,e)):f&&f(a,k.childNodes,s,e)}for(var g=[],k,q,l,m,p=0;p<a.length;p++)k=new Fb,q=U(a[p],[],k,0===p?d:s,e),(f=q.length?Va(q,a[p],k,b,c,null,[],[],f):null)&&f.scope&&S(z(a[p]),"ng-scope"),k=f&&f.terminal||!(l=a[p].childNodes)||!l.length?null:M(l,f?f.transclude:b),g.push(f,k),m=m||f||k,f=null;return m?h:null}function aa(a,b){return function(c,d,e){var f=!1;c||(c=a.$new(),f=c.$$transcluded=!0);d=b(c,d,e);if(f)d.on("$destroy",bb(c,c.$destroy));return d}}function U(a,
b,c,d,h){var g=c.$attr,k;switch(a.nodeType){case 1:v(b,ka(Ga(a).toLowerCase()),"E",d,h);var q,l,m;k=a.attributes;for(var p=0,y=k&&k.length;p<y;p++){var B=!1,H=!1;q=k[p];if(!P||8<=P||q.specified){l=q.name;m=ka(l);oa.test(m)&&(l=cb(m.substr(6),"-"));var E=m.replace(/(Start|End)$/,"");m===E+"Start"&&(B=l,H=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));m=ka(l.toLowerCase());g[m]=l;c[m]=q=ca(q.value);gc(a,m)&&(c[m]=!0);ga(a,b,q,m);v(b,m,"A",d,h,B,H)}}a=a.className;if(C(a)&&""!==a)for(;k=f.exec(a);)m=
ka(k[2]),v(b,m,"C",d,h)&&(c[m]=ca(k[3])),a=a.substr(k.index+k[0].length);break;case 3:D(b,a.nodeValue);break;case 8:try{if(k=e.exec(a.nodeValue))m=ka(k[1]),v(b,m,"M",d,h)&&(c[m]=ca(k[2]))}catch(x){}}b.sort(F);return b}function J(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ha("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return z(d)}function ib(a,b,c){return function(d,e,f,h,g){e=J(e[0],
b,c);return a(d,e,f,h,g)}}function Va(a,c,d,e,f,h,g,k,q){function p(a,b,c,d){if(a){c&&(a=ib(a,c,d));a.require=G.require;if(M===G||G.$$isolateScope)a=kc(a,{isolateScope:!0});g.push(a)}if(b){c&&(b=ib(b,c,d));b.require=G.require;if(M===G||G.$$isolateScope)b=kc(b,{isolateScope:!0});k.push(b)}}function H(a,b,c){var d,e="data",f=!1;if(C(a)){for(;"^"==(d=a.charAt(0))||"?"==d;)a=a.substr(1),"^"==d&&(e="inheritedData"),f=f||"?"==d;d=null;c&&"data"===e&&(d=c[a]);d=d||b[e]("$"+a+"Controller");if(!d&&!f)throw ha("ctreq",
a,ga);}else I(a)&&(d=[],r(a,function(a){d.push(H(a,b,c))}));return d}function E(a,e,f,h,q){function p(a,b){var c;2>arguments.length&&(b=a,a=s);Ha&&(c=kb);return q(a,b,c)}var L,x,u,Y,J,U,kb={},v;L=c===f?d:Tb(d,new Fb(z(f),d.$attr));x=L.$$element;if(M){var t=/^\s*([@=&])(\??)\s*(\w*)\s*$/;h=z(f);U=e.$new(!0);aa&&aa===M.$$originalDirective?h.data("$isolateScope",U):h.data("$isolateScopeNoTemplate",U);S(h,"ng-isolate-scope");r(M.scope,function(a,c){var d=a.match(t)||[],f=d[3]||c,h="?"==d[2],d=d[1],g,
k,q,m;U.$$isolateBindings[c]=d+f;switch(d){case "@":L.$observe(f,function(a){U[c]=a});L.$$observers[f].$$scope=e;L[f]&&(U[c]=b(L[f])(e));break;case "=":if(h&&!L[f])break;k=y(L[f]);m=k.literal?sa:function(a,b){return a===b};q=k.assign||function(){g=U[c]=k(e);throw ha("nonassign",L[f],M.name);};g=U[c]=k(e);U.$watch(function(){var a=k(e);m(a,U[c])||(m(a,g)?q(e,a=U[c]):U[c]=a);return g=a},null,k.literal);break;case "&":k=y(L[f]);U[c]=function(a){return k(e,a)};break;default:throw ha("iscp",M.name,c,a);
}})}v=q&&p;W&&r(W,function(a){var b={$scope:a===M||a.$$isolateScope?U:e,$element:x,$attrs:L,$transclude:v},c;J=a.controller;"@"==J&&(J=L[a.name]);c=B(J,b);kb[a.name]=c;Ha||x.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});h=0;for(u=g.length;h<u;h++)try{Y=g[h],Y(Y.isolateScope?U:e,x,L,Y.require&&H(Y.require,x,kb),v)}catch(K){m(K,fa(x))}h=e;M&&(M.template||null===M.templateUrl)&&(h=U);a&&a(h,f.childNodes,s,q);for(h=k.length-1;0<=h;h--)try{Y=k[h],Y(Y.isolateScope?U:e,x,
L,Y.require&&H(Y.require,x,kb),v)}catch(ib){m(ib,fa(x))}}q=q||{};for(var x=-Number.MAX_VALUE,u,W=q.controllerDirectives,M=q.newIsolateScopeDirective,aa=q.templateDirective,v=q.nonTlbTranscludeDirective,Va=!1,Ha=q.hasElementTranscludeDirective,K=d.$$element=z(c),G,ga,t,F=e,oa,D=0,P=a.length;D<P;D++){G=a[D];var Q=G.$$start,V=G.$$end;Q&&(K=J(c,Q,V));t=s;if(x>G.priority)break;if(t=G.scope)u=u||G,G.templateUrl||(R("new/isolated scope",M,G,K),X(t)&&(M=G));ga=G.name;!G.templateUrl&&G.controller&&(t=G.controller,
W=W||{},R("'"+ga+"' controller",W[ga],G,K),W[ga]=G);if(t=G.transclude)Va=!0,G.$$tlb||(R("transclusion",v,G,K),v=G),"element"==t?(Ha=!0,x=G.priority,t=J(c,Q,V),K=d.$$element=z(T.createComment(" "+ga+": "+d[ga]+" ")),c=K[0],lb(f,z(ta.call(t,0)),c),F=Y(t,e,x,h&&h.name,{nonTlbTranscludeDirective:v})):(t=z(Cb(c)).contents(),K.empty(),F=Y(t,e));if(G.template)if(R("template",aa,G,K),aa=G,t=N(G.template)?G.template(K,d):G.template,t=lc(t),G.replace){h=G;t=A(t);c=t[0];if(1!=t.length||1!==c.nodeType)throw ha("tplrt",
ga,"");lb(f,K,c);P={$attr:{}};t=U(c,[],P);var Z=a.splice(D+1,a.length-(D+1));M&&jb(t);a=a.concat(t).concat(Z);w(d,P);P=a.length}else K.html(t);if(G.templateUrl)R("template",aa,G,K),aa=G,G.replace&&(h=G),E=O(a.splice(D,a.length-D),K,d,f,F,g,k,{controllerDirectives:W,newIsolateScopeDirective:M,templateDirective:aa,nonTlbTranscludeDirective:v}),P=a.length;else if(G.compile)try{oa=G.compile(K,d,F),N(oa)?p(null,oa,Q,V):oa&&p(oa.pre,oa.post,Q,V)}catch($){m($,fa(K))}G.terminal&&(E.terminal=!0,x=Math.max(x,
G.priority))}E.scope=u&&!0===u.scope;E.transclude=Va&&F;q.hasElementTranscludeDirective=Ha;return E}function jb(a){for(var b=0,c=a.length;b<c;b++)a[b]=Sb(a[b],{$$isolateScope:!0})}function v(b,e,f,h,g,q,l){if(e===g)return null;g=null;if(c.hasOwnProperty(e)){var p;e=a.get(e+d);for(var y=0,B=e.length;y<B;y++)try{p=e[y],(h===s||h>p.priority)&&-1!=p.restrict.indexOf(f)&&(q&&(p=Sb(p,{$$start:q,$$end:l})),b.push(p),g=p)}catch(H){m(H)}}return g}function w(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,
e){"$"!=e.charAt(0)&&(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(S(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function A(a){var b;a=ca(a);if(b=g.exec(a)){b=b[1].toLowerCase();a=z("<table>"+a+"</table>");var c=a.children("tbody"),d=/(td|th)/.test(b)&&a.find("tr");c.length&&"tbody"!==b&&(a=c);d&&d.length&&
(a=d);return a.contents()}return z("<div>"+a+"</div>").contents()}function O(a,b,c,d,e,f,h,g){var k=[],l,m,y=b[0],B=a.shift(),x=t({},B,{templateUrl:null,transclude:null,replace:null,$$originalDirective:B}),E=N(B.templateUrl)?B.templateUrl(b,c):B.templateUrl;b.empty();p.get(H.getTrustedResourceUrl(E),{cache:q}).success(function(q){var p,H;q=lc(q);if(B.replace){q=A(q);p=q[0];if(1!=q.length||1!==p.nodeType)throw ha("tplrt",B.name,E);q={$attr:{}};lb(d,b,p);var u=U(p,[],q);X(B.scope)&&jb(u);a=u.concat(a);
w(c,q)}else p=y,b.html(q);a.unshift(x);l=Va(a,p,c,e,b,B,f,h,g);r(d,function(a,c){a==p&&(d[c]=b[0])});for(m=M(b[0].childNodes,e);k.length;){q=k.shift();H=k.shift();var W=k.shift(),Y=k.shift(),u=b[0];if(H!==y){var J=H.className;g.hasElementTranscludeDirective&&B.replace||(u=Cb(p));lb(W,z(H),u);S(z(u),J)}H=l.transclude?aa(q,l.transclude):Y;l(m,q,u,d,H)}k=null}).error(function(a,b,c,d){throw ha("tpload",d.url);});return function(a,b,c,d,e){k?(k.push(b),k.push(c),k.push(d),k.push(e)):l(m,b,c,d,e)}}function F(a,
b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function R(a,b,c,d){if(b)throw ha("multidir",b.name,c.name,a,fa(d));}function D(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:$(function(a,b){var c=b.parent(),e=c.data("$binding")||[];e.push(d);S(c.data("$binding",e),"ng-binding");a.$watch(d,function(a){b[0].nodeValue=a})})})}function Ha(a,b){if("srcdoc"==b)return H.HTML;var c=Ga(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==
b))return H.RESOURCE_URL}function ga(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"SELECT"===Ga(a))throw ha("selmulti",fa(a));c.push({priority:100,compile:function(){return{pre:function(c,d,g){d=g.$$observers||(g.$$observers={});if(h.test(e))throw ha("nodomevents");if(f=b(g[e],!0,Ha(a,e)))g[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,a)})}}}})}}function lb(a,b,c){var d=b[0],e=b.length,f=
d.parentNode,h,g;if(a)for(h=0,g=a.length;h<g;h++)if(a[h]==d){a[h++]=c;g=h+e-1;for(var k=a.length;h<k;h++,g++)g<k?a[h]=a[g]:delete a[h];a.length-=e-1;break}f&&f.replaceChild(c,d);a=T.createDocumentFragment();a.appendChild(d);c[z.expando]=d[z.expando];d=1;for(e=b.length;d<e;d++)f=b[d],z(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function kc(a,b){return t(function(){return a.apply(null,arguments)},a,b)}var Fb=function(a,b){this.$$element=a;this.$attr=b||{}};Fb.prototype={$normalize:ka,
$addClass:function(a){a&&0<a.length&&W.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&W.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=mc(a,b),d=mc(b,a);0===c.length?W.removeClass(this.$$element,d):0===d.length?W.addClass(this.$$element,c):W.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=gc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=cb(a,"-"));e=Ga(this.$$element);if("A"===
e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=E(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&r(c[a],function(a){try{a(b)}catch(c){m(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);x.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var Q=b.startSymbol(),V=b.endSymbol(),lc="{{"==Q||"}}"==V?za:function(a){return a.replace(/\{\{/g,Q).replace(/}}/g,V)},oa=/^ngAttr[A-Z]/;return Y}]}
function ka(b){return Qa(b.replace(jd,""))}function mc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function kd(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){va(a,"controller");X(a)?t(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,h,n;C(e)&&(g=e.match(a),h=g[1],n=g[3],e=b.hasOwnProperty(h)?b[h]:ac(f.$scope,h,!0)||ac(d,
h,!0),Pa(e,h,!0));g=c.instantiate(e,f);if(n){if(!f||"object"!=typeof f.$scope)throw F("$controller")("noscp",h||e.name,n);f.$scope[n]=g}return g}}]}function ld(){this.$get=["$window",function(b){return z(b.document)}]}function md(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function nc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=O(ca(b.substr(0,e)));d=ca(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function oc(b){var a=
X(b)?b:s;return function(c){a||(a=nc(b));return c?a[O(c)]||null:a}}function pc(b,a,c){if(N(c))return c(b,a);r(c,function(c){b=c(b,a)});return b}function nd(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){C(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=Vb(d)));return d}],transformRequest:[function(a){return X(a)&&"[object File]"!==Aa.call(a)?na(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:ba(d),put:ba(d),patch:ba(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,m,p){function q(a){function c(a){var b=t({},a,{data:pc(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?b:m.reject(b)}var d={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},f=function(a){function b(a){var c;
r(a,function(b,d){N(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=t({},a.headers),f,h,c=t({},c.common,c[O(a.method)]);b(c);b(d);a:for(f in c){a=O(f);for(h in d)if(O(h)===a)continue a;d[f]=c[f]}return d}(a);t(d,a);d.headers=f;d.method=Ia(d.method);(a=Gb(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:s)&&(f[d.xsrfHeaderName||e.xsrfHeaderName]=a);var h=[function(a){f=a.headers;var b=pc(a.data,oc(f),a.transformRequest);A(a.data)&&r(f,function(a,b){"content-type"===O(b)&&delete f[b]});
A(a.withCredentials)&&!A(e.withCredentials)&&(a.withCredentials=e.withCredentials);return y(a,b,f).then(c,c)},s],g=m.when(d);for(r(u,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&h.push(a.response,a.responseError)});h.length;){a=h.shift();var k=h.shift(),g=g.then(a,k)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,d)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,d)});return g};
return g}function y(b,c,f){function g(a,b,c){u&&(200<=a&&300>a?u.put(s,[a,b,nc(c)]):u.remove(s));k(b,a,c);d.$$phase||d.$apply()}function k(a,c,d){c=Math.max(c,0);(200<=c&&300>c?p.resolve:p.reject)({data:a,status:c,headers:oc(d),config:b})}function n(){var a=ab(q.pendingRequests,b);-1!==a&&q.pendingRequests.splice(a,1)}var p=m.defer(),y=p.promise,u,r,s=B(b.url,b.params);q.pendingRequests.push(b);y.then(n,n);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(u=X(b.cache)?b.cache:X(e.cache)?e.cache:
x);if(u)if(r=u.get(s),v(r)){if(r.then)return r.then(n,n),r;I(r)?k(r[1],r[0],ba(r[2])):k(r,200,{})}else u.put(s,y);A(r)&&a(b.method,s,c,g,f,b.timeout,b.withCredentials,b.responseType);return y}function B(a,b){if(!b)return a;var c=[];Qc(b,function(a,b){null===a||A(a)||(I(a)||(a=[a]),r(a,function(a){X(a)&&(a=na(a));c.push(ua(b)+"="+ua(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var x=c("$http"),u=[];r(f,function(a){u.unshift(C(a)?p.get(a):p.invoke(a))});r(g,function(a,
b){var c=C(a)?p.get(a):p.invoke(a);u.splice(b,0,{response:function(a){return c(m.when(a))},responseError:function(a){return c(m.reject(a))}})});q.pendingRequests=[];(function(a){r(arguments,function(a){q[a]=function(b,c){return q(t(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){q[a]=function(b,c,d){return q(t(d||{},{method:a,url:b,data:c}))}})})("post","put");q.defaults=e;return q}]}function od(b){if(8>=P&&(!b.match(/^(get|post|head|put|delete|options)$/i)||
!D.XMLHttpRequest))return new D.ActiveXObject("Microsoft.XMLHTTP");if(D.XMLHttpRequest)return new D.XMLHttpRequest;throw F("$httpBackend")("noxhr");}function pd(){this.$get=["$browser","$window","$document",function(b,a,c){return qd(b,od,b.defer,a.angular.callbacks,c[0])}]}function qd(b,a,c,d,e){function f(a,b){var c=e.createElement("script"),d=function(){c.onreadystatechange=c.onload=c.onerror=null;e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;P&&8>=P?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&
d()}:c.onload=c.onerror=function(){d()};e.body.appendChild(c);return d}var g=-1;return function(e,n,k,l,m,p,q,y){function B(){u=g;W&&W();E&&E.abort()}function x(a,d,e,f){S&&c.cancel(S);W=E=null;d=0===d?e?200:404:d;a(1223==d?204:d,e,f);b.$$completeOutstandingRequest(w)}var u;b.$$incOutstandingRequestCount();n=n||b.url();if("jsonp"==O(e)){var H="_"+(d.counter++).toString(36);d[H]=function(a){d[H].data=a};var W=f(n.replace("JSON_CALLBACK","angular.callbacks."+H),function(){d[H].data?x(l,200,d[H].data):
x(l,u||-2);d[H]=Ba.noop})}else{var E=a(e);E.open(e,n,!0);r(m,function(a,b){v(a)&&E.setRequestHeader(b,a)});E.onreadystatechange=function(){if(E&&4==E.readyState){var a=null,b=null;u!==g&&(a=E.getAllResponseHeaders(),b="response"in E?E.response:E.responseText);x(l,u||E.status,b,a)}};q&&(E.withCredentials=!0);if(y)try{E.responseType=y}catch(Y){if("json"!==y)throw Y;}E.send(k||null)}if(0<p)var S=c(B,p);else p&&p.then&&p.then(B)}}function rd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=
a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,k,l){for(var m,p,q=0,y=[],B=f.length,x=!1,u=[];q<B;)-1!=(m=f.indexOf(b,q))&&-1!=(p=f.indexOf(a,m+g))?(q!=m&&y.push(f.substring(q,m)),y.push(q=c(x=f.substring(m+g,p))),q.exp=x,q=p+h,x=!0):(q!=B&&y.push(f.substring(q)),q=B);(B=y.length)||(y.push(""),B=1);if(l&&1<y.length)throw qc("noconcat",f);if(!k||x)return u.length=B,q=function(a){try{for(var b=0,c=B,h;b<c;b++)"function"==
typeof(h=y[b])&&(h=h(a),h=l?e.getTrusted(l,h):e.valueOf(h),null===h||A(h)?h="":"string"!=typeof h&&(h=na(h))),u[b]=h;return u.join("")}catch(g){a=qc("interr",f,g.toString()),d(a)}},q.exp=f,q.parts=y,q}var g=b.length,h=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function sd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,g,h,n){var k=a.setInterval,l=a.clearInterval,m=c.defer(),p=m.promise,q=0,y=v(n)&&!n;h=v(h)?h:0;p.then(null,null,d);
p.$$intervalId=k(function(){m.notify(q++);0<h&&q>=h&&(m.resolve(q),l(p.$$intervalId),delete e[p.$$intervalId]);y||b.$apply()},g);e[p.$$intervalId]=m;return p}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1};return d}]}function td(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",
gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a",
"short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function rc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=wb(b[a]);return b.join("/")}function sc(b,a,c){b=wa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=Q(b.port)||ud[b.protocol]||null}function tc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=wa(b,c);a.$$path=decodeURIComponent(d&&
"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=Xb(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function la(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Wa(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Hb(b){return b.substr(0,Wa(b).lastIndexOf("/")+1)}function uc(b,a){this.$$html5=!0;a=a||"";var c=Hb(b);sc(b,this,b);this.$$parse=function(a){var e=la(c,a);if(!C(e))throw Ib("ipthprfx",
a,c);tc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Yb(this.$$search),b=this.$$hash?"#"+wb(this.$$hash):"";this.$$url=rc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=la(b,d))!==s)return d=e,(e=la(a,e))!==s?c+(la("/",e)||e):b+d;if((e=la(c,d))!==s)return c+e;if(c==d+"/")return c}}function Jb(b,a){var c=Hb(b);sc(b,this,b);this.$$parse=function(d){var e=la(b,d)||la(c,d),f="#"==e.charAt(0)?la(a,e):
this.$$html5?e:"";if(!C(f))throw Ib("ihshprfx",d,a);""===f&&"?"===e.charAt(0)&&(f=e);tc(f,this,b);d=this.$$path;e=/^\/?.*?:(\/.*)/;0===f.indexOf(b)&&(f=f.replace(b,""));e.exec(f)||(d=(f=e.exec(d))?f[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Yb(this.$$search),e=this.$$hash?"#"+wb(this.$$hash):"",f="";(this.$$url=rc(this.$$path)+(c?"?"+c:"")+e)&&(f=this.$$path?a+this.$$url:this.$$url);this.$$absUrl=b+f};this.$$rewrite=function(a){if(Wa(b)==Wa(a))return a}}function vc(b,a){this.$$html5=
!0;Jb.apply(this,arguments);var c=Hb(b);this.$$rewrite=function(d){var e;if(b==Wa(d))return d;if(e=la(c,d))return b+a+e;if(c===d+"/")return c}}function mb(b){return function(){return this[b]}}function wc(b,a){return function(c){if(A(c))return this[b];this[b]=a(c);this.$$compose();return this}}function vd(){var b="",a=!1;this.hashPrefix=function(a){return v(a)?(b=a,this):b};this.html5Mode=function(b){return v(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,
d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,n=d.baseHref(),k=d.url();a?(n=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(n||"/"),e=e.history?uc:vc):(n=Wa(k),e=Jb);h=new e(n,"#"+b);h.$$parse(h.$$rewrite(k));f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=z(a.target);"a"!==O(b[0].nodeName);)if(b[0]===f[0]||!(b=b.parent())[0])return;var e=b.prop("href");X(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=wa(e.animVal).href);var g=h.$$rewrite(e);
e&&(!b.attr("target")&&g&&!a.isDefaultPrevented())&&(a.preventDefault(),g!=d.url()&&(h.$$parse(g),c.$apply(),D.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=k&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var l=0;c.$watch(function(){var a=d.url(),b=h.$$replace;l&&a==h.absUrl()||(l++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",
h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),g(a))}));h.$$replace=!1;return l});return h}]}function wd(){var b=!0,a=this;this.debugEnabled=function(a){return v(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||w;a=!1;try{a=!!e.apply}catch(n){}return a?
function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function da(b,a){if("constructor"===b)throw xa("isecfld",a);return b}function Xa(b,a){if(b){if(b.constructor===b)throw xa("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw xa("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&
b.attr&&b.find))throw xa("isecdom",a);}return b}function nb(b,a,c,d,e){e=e||{};a=a.split(".");for(var f,g=0;1<a.length;g++){f=da(a.shift(),d);var h=b[f];h||(h={},b[f]=h);b=h;b.then&&e.unwrapPromises&&(pa(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===s&&(b.$$v={}),b=b.$$v)}f=da(a.shift(),d);return b[f]=c}function xc(b,a,c,d,e,f,g){da(b,f);da(a,f);da(c,f);da(d,f);da(e,f);return g.unwrapPromises?function(h,g){var k=g&&g.hasOwnProperty(b)?g:h,l;if(null==k)return k;(k=k[b])&&k.then&&
(pa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!a)return k;if(null==k)return s;(k=k[a])&&k.then&&(pa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!c)return k;if(null==k)return s;(k=k[c])&&k.then&&(pa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!d)return k;if(null==k)return s;(k=k[d])&&k.then&&(pa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!e)return k;if(null==k)return s;(k=k[e])&&k.then&&(pa(f),"$$v"in
k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);return k}:function(f,g){var k=g&&g.hasOwnProperty(b)?g:f;if(null==k)return k;k=k[b];if(!a)return k;if(null==k)return s;k=k[a];if(!c)return k;if(null==k)return s;k=k[c];if(!d)return k;if(null==k)return s;k=k[d];return e?null==k?s:k=k[e]:k}}function xd(b,a){da(b,a);return function(a,d){return null==a?s:(d&&d.hasOwnProperty(b)?d:a)[b]}}function yd(b,a,c){da(b,c);da(a,c);return function(c,e){if(null==c)return s;c=(e&&e.hasOwnProperty(b)?e:c)[b];return null==
c?s:c[a]}}function yc(b,a,c){if(Kb.hasOwnProperty(b))return Kb[b];var d=b.split("."),e=d.length,f;if(a.unwrapPromises||1!==e)if(a.unwrapPromises||2!==e)if(a.csp)f=6>e?xc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,f){var h=0,g;do g=xc(d[h++],d[h++],d[h++],d[h++],d[h++],c,a)(b,f),f=s,b=g;while(h<e);return g};else{var g="var p;\n";r(d,function(b,d){da(b,c);g+="if(s == null) return undefined;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+
c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var g=g+"return s;",h=new Function("s","k","pw",g);h.toString=$(g);f=a.unwrapPromises?function(a,b){return h(a,b,pa)}:h}else f=yd(d[0],d[1],c);else f=xd(d[0],c);"hasOwnProperty"!==b&&(Kb[b]=f);return f}function zd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return v(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};
this.logPromiseWarnings=function(b){return v(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;pa=function(b){a.logPromiseWarnings&&!zc.hasOwnProperty(b)&&(zc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Lb(a);e=(new Ya(e,c,a)).parse(d,!1);
"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return w}}}]}function Ad(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Bd(function(a){b.$evalAsync(a)},a)}]}function Bd(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var g=[],k,l;return l={resolve:function(a){if(g){var c=g;g=s;k=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],k.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(h(a))},notify:function(a){if(g){var c=
g;g.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,f,h){var l=e(),B=function(d){try{l.resolve((N(b)?b:c)(d))}catch(e){l.reject(e),a(e)}},x=function(b){try{l.resolve((N(f)?f:d)(b))}catch(c){l.reject(c),a(c)}},u=function(b){try{l.notify((N(h)?h:c)(b))}catch(d){a(d)}};g?g.push([B,x,u]):k.then(B,x,u);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}
function d(e,f){var h=null;try{h=(a||c)()}catch(g){return b(g,!1)}return h&&N(h.then)?h.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&N(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(a){var b=e();b.reject(a);return b.promise},h=function(c){return{then:function(f,h){var g=e();b(function(){try{g.resolve((N(h)?h:d)(c))}catch(b){g.reject(b),
a(b)}});return g.promise}}};return{defer:e,reject:g,when:function(h,k,l,m){var p=e(),q,y=function(b){try{return(N(k)?k:c)(b)}catch(d){return a(d),g(d)}},B=function(b){try{return(N(l)?l:d)(b)}catch(c){return a(c),g(c)}},x=function(b){try{return(N(m)?m:c)(b)}catch(d){a(d)}};b(function(){f(h).then(function(a){q||(q=!0,p.resolve(f(a).then(y,B,x)))},function(a){q||(q=!0,p.resolve(B(a)))},function(a){q||p.notify(x(a))})});return p.promise},all:function(a){var b=e(),c=0,d=I(a)?[]:{};r(a,function(a,e){c++;
f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function Cd(){var b=10,a=F("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,g){function h(){this.$id=Za();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=
this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function n(b){if(p.$$phase)throw a("inprog",p.$$phase);p.$$phase=b}function k(a,b){var c=f(a);Pa(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function m(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,
a.$$postDigestQueue=this.$$postDigestQueue):(a=function(){},a.prototype=this,a=new a,a.$id=Za());a["this"]=a;a.$$listeners={};a.$$listenerCount={};a.$parent=this;a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=k(a,"watch"),f=this.$$watchers,h={fn:b,last:m,get:e,exp:a,eq:!!d};c=null;if(!N(b)){var g=k(b||w,"listener");
h.fn=function(a,b,c){g(c)}}if("string"==typeof a&&e.constant){var n=h.fn;h.fn=function(a,b,c){n.call(this,a,b,c);Ma(f,h)}}f||(f=this.$$watchers=[]);f.unshift(h);return function(){Ma(f,h);c=null}},$watchCollection:function(a,b){var c=this,d,e,h=0,g=f(a),k=[],n={},l=0;return this.$watch(function(){e=g(c);var a,b;if(X(e))if(ub(e))for(d!==k&&(d=k,l=d.length=0,h++),a=e.length,l!==a&&(h++,d.length=l=a),b=0;b<a;b++)d[b]!==e[b]&&(h++,d[b]=e[b]);else{d!==n&&(d=n={},l=0,h++);a=0;for(b in e)e.hasOwnProperty(b)&&
(a++,d.hasOwnProperty(b)?d[b]!==e[b]&&(h++,d[b]=e[b]):(l++,d[b]=e[b],h++));if(l>a)for(b in h++,d)d.hasOwnProperty(b)&&!e.hasOwnProperty(b)&&(l--,delete d[b])}else d!==e&&(d=e,h++);return h},function(){b(e,d,c)})},$digest:function(){var d,f,h,g,k=this.$$asyncQueue,l=this.$$postDigestQueue,r,E,s=b,S,M=[],v,t,J;n("$digest");c=null;do{E=!1;for(S=this;k.length;){try{J=k.shift(),J.scope.$eval(J.expression)}catch(z){p.$$phase=null,e(z)}c=null}a:do{if(g=S.$$watchers)for(r=g.length;r--;)try{if(d=g[r])if((f=
d.get(S))!==(h=d.last)&&!(d.eq?sa(f,h):"number"==typeof f&&"number"==typeof h&&isNaN(f)&&isNaN(h)))E=!0,c=d,d.last=d.eq?ba(f):f,d.fn(f,h===m?f:h,S),5>s&&(v=4-s,M[v]||(M[v]=[]),t=N(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,t+="; newVal: "+na(f)+"; oldVal: "+na(h),M[v].push(t));else if(d===c){E=!1;break a}}catch(C){p.$$phase=null,e(C)}if(!(g=S.$$childHead||S!==this&&S.$$nextSibling))for(;S!==this&&!(g=S.$$nextSibling);)S=S.$parent}while(S=g);if((E||k.length)&&!s--)throw p.$$phase=null,a("infdig",
b,na(M));}while(E||k.length);for(p.$$phase=null;l.length;)try{l.shift()()}catch(w){e(w)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==p&&(r(this.$$listenerCount,bb(null,l,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),
this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null)}},$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){p.$$phase||p.$$asyncQueue.length||g.defer(function(){p.$$asyncQueue.length&&p.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return n("$apply"),this.$eval(a)}catch(b){e(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw e(c),c;}}},$on:function(a,
b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[ab(c,b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,h=!1,g={name:a,targetScope:f,stopPropagation:function(){h=!0},preventDefault:function(){g.defaultPrevented=!0},defaultPrevented:!1},k=[g].concat(ta.call(arguments,1)),n,l;do{d=f.$$listeners[a]||c;g.currentScope=f;n=0;for(l=d.length;n<l;n++)if(d[n])try{d[n].apply(null,
k)}catch(p){e(p)}else d.splice(n,1),n--,l--;if(h)break;f=f.$parent}while(f);return g},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},h=[f].concat(ta.call(arguments,1)),g,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];g=0;for(k=d.length;g<k;g++)if(d[g])try{d[g].apply(null,h)}catch(n){e(n)}else d.splice(g,1),g--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=
c.$$nextSibling);)c=c.$parent}return f}};var p=new h;return p}]}function Dd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return v(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return v(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!P||8<=P)if(f=wa(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function Ed(b){if("self"===b)return b;if(C(b)){if(-1<b.indexOf("***"))throw qa("iwcard",
b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if($a(b))return RegExp("^"+b.source+"$");throw qa("imatcher");}function Ac(b){var a=[];v(b)&&r(b,function(b){a.push(Ed(b))});return a}function Fd(){this.SCE_CONTEXTS=ea;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Ac(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Ac(b));return a};this.$get=
["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw qa("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),g={};g[ea.HTML]=d(f);g[ea.CSS]=d(f);g[ea.URL]=d(f);g[ea.JS]=d(f);g[ea.RESOURCE_URL]=d(g[ea.URL]);return{trustAs:function(a,b){var c=
g.hasOwnProperty(a)?g[a]:null;if(!c)throw qa("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw qa("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===s||""===d)return d;var f=g.hasOwnProperty(c)?g[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===ea.RESOURCE_URL){var f=wa(d.toString()),l,m,p=!1;l=0;for(m=b.length;l<m;l++)if("self"===b[l]?Gb(f):b[l].exec(f.href)){p=!0;break}if(p)for(l=0,m=a.length;l<m;l++)if("self"===a[l]?Gb(f):a[l].exec(f.href)){p=
!1;break}if(p)return d;throw qa("insecurl",d.toString());}if(c===ea.HTML)return e(d);throw qa("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function Gd(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw qa("iequirks");var e=ba(ea);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=
e.getTrusted=function(a,b){return b},e.valueOf=za);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;r(ea,function(a,b){var c=O(b);e[Qa("parse_as_"+c)]=function(b){return f(a,b)};e[Qa("get_trusted_"+c)]=function(b){return g(a,b)};e[Qa("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function Hd(){this.$get=["$window","$document",function(b,a){var c={},d=Q((/android (\d+)/.exec(O((b.navigator||
{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g=f.documentMode,h,n=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=f.body&&f.body.style,l=!1,m=!1;if(k){for(var p in k)if(l=n.exec(p)){h=l[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||h+"Transition"in k);m=!!("animation"in k||h+"Animation"in k);!d||l&&m||(l=C(f.body.style.webkitTransition),m=C(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||
4>d||e),hashchange:"onhashchange"in b&&(!g||7<g),hasEvent:function(a){if("input"==a&&9==P)return!1;if(A(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Ub(),vendorPrefix:h,transitions:l,animations:m,android:d,msie:P,msieDocumentMode:g}}]}function Id(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,n){var k=c.defer(),l=k.promise,m=v(n)&&!n;h=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),d(a)}finally{delete f[l.$$timeoutId]}m||
b.$apply()},h);l.$$timeoutId=h;f[h]=k;return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function wa(b,a){var c=b;P&&(V.setAttribute("href",c),c=V.href);V.setAttribute("href",c);return{href:V.href,protocol:V.protocol?V.protocol.replace(/:$/,""):"",host:V.host,search:V.search?V.search.replace(/^\?/,""):"",hash:V.hash?V.hash.replace(/^#/,""):"",hostname:V.hostname,port:V.port,
pathname:"/"===V.pathname.charAt(0)?V.pathname:"/"+V.pathname}}function Gb(b){b=C(b)?wa(b):b;return b.protocol===Bc.protocol&&b.host===Bc.host}function Jd(){this.$get=$(D)}function Cc(b){function a(d,e){if(X(d)){var f={};r(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Dc);a("date",Ec);a("filter",Kd);a("json",Ld);a("limitTo",Md);a("lowercase",Nd);a("number",Fc);a("orderBy",
Gc);a("uppercase",Od)}function Kd(){return function(b,a,c){if(!I(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Ba.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Pd.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&
"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!=typeof a[b]&&e.push(function(c){return f("$"==
b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=b[g];e.check(h)&&d.push(h)}return d}}function Dc(b){var a=b.NUMBER_FORMATS;return function(b,d){A(d)&&(d=a.CURRENCY_SYM);return Hc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Fc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Hc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Hc(b,a,c,d,e){if(null==b||!isFinite(b)||X(b))return"";var f=0>b;
b=Math.abs(b);var g=b+"",h="",n=[],k=!1;if(-1!==g.indexOf("e")){var l=g.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&l[3]>e+1?g="0":(h=g,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{g=(g.split(Ic)[1]||"").length;A(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));g=Math.pow(10,e);b=Math.round(b*g)/g;b=(""+b).split(Ic);g=b[0];b=b[1]||"";var l=0,m=a.lgSize,p=a.gSize;if(g.length>=m+p)for(l=g.length-m,k=0;k<l;k++)0===(l-k)%p&&0!==k&&(h+=c),h+=g.charAt(k);for(k=l;k<g.length;k++)0===(g.length-k)%m&&
0!==k&&(h+=c),h+=g.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}n.push(f?a.negPre:a.posPre);n.push(h);n.push(f?a.negSuf:a.posSuf);return n.join("")}function Mb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function Z(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Mb(e,a,d)}}function ob(b,a){return function(c,d){var e=c["get"+b](),f=Ia(a?"SHORT"+b:b);return d[f][e]}}function Ec(b){function a(a){var b;
if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,n=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Q(b[9]+b[10]),g=Q(b[9]+b[11]));h.call(a,Q(b[1]),Q(b[2])-1,Q(b[3]));f=Q(b[4]||0)-f;g=Q(b[5]||0)-g;h=Q(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));n.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",g=[],h,n;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;C(c)&&
(c=Qd.test(c)?Q(c):a(c));vb(c)&&(c=new Date(c));if(!La(c))return c;for(;e;)(n=Rd.exec(e))?(g=g.concat(ta.call(n,1)),e=g.pop()):(g.push(e),e=null);r(g,function(a){h=Sd[a];f+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}function Ld(){return function(b){return na(b,!0)}}function Md(){return function(b,a){if(!I(b)&&!C(b))return b;a=Q(a);if(C(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,
e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Gc(b){return function(a,c,d){function e(a,b){return Oa(b)?function(b,c){return a(c,b)}:a}if(!I(a)||!c)return a;c=I(c)?c:[c];c=Sc(c,function(a){var c=!1,d=a||za;if(C(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a)}return e(function(a,b){var c;c=d(a);var e=d(b),f=typeof c,h=typeof e;f==h?("string"==f&&(c=c.toLowerCase(),e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<h?-1:1;return c},c)});for(var f=
[],g=0;g<a.length;g++)f.push(a[g]);return f.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function ra(b){N(b)&&(b={link:b});b.restrict=b.restrict||"AC";return $(b)}function Jc(b,a){function c(a,c){c=c?"-"+cb(c,"-"):"";b.removeClass((a?pb:qb)+c).addClass((a?qb:pb)+c)}var d=this,e=b.parent().controller("form")||rb,f=0,g=d.$error={},h=[];d.$name=a.name||a.ngForm;d.$dirty=!1;d.$pristine=!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(Ja);c(!0);
d.$addControl=function(a){va(a.$name,"input");h.push(a);a.$name&&(d[a.$name]=a)};d.$removeControl=function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];r(g,function(b,c){d.$setValidity(c,!0,a)});Ma(h,a)};d.$setValidity=function(a,b,h){var m=g[a];if(b)m&&(Ma(m,h),m.length||(f--,f||(c(b),d.$valid=!0,d.$invalid=!1),g[a]=!1,c(!0,a),e.$setValidity(a,!0,d)));else{f||c(b);if(m){if(-1!=ab(m,h))return}else g[a]=m=[],f++,c(!1,a),e.$setValidity(a,!1,d);m.push(h);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(Ja).addClass(sb);
d.$dirty=!0;d.$pristine=!1;e.$setDirty()};d.$setPristine=function(){b.removeClass(sb).addClass(Ja);d.$dirty=!1;d.$pristine=!0;r(h,function(a){a.$setPristine()})}}function ma(b,a,c,d){b.$setValidity(a,c);return c?d:s}function Td(b,a,c){var d=c.prop("validity");X(d)&&(c=function(c){if(b.$error[a]||!(d.badInput||d.customError||d.typeMismatch)||d.valueMissing)return c;b.$setValidity(a,!1)},b.$parsers.push(c),b.$formatters.push(c))}function tb(b,a,c,d,e,f){var g=a.prop("validity");if(!e.android){var h=
!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;n()})}var n=function(){if(!h){var e=a.val();Oa(c.ngTrim||"T")&&(e=ca(e));if(d.$viewValue!==e||g&&""===e&&!g.valueMissing)b.$$phase?d.$setViewValue(e):b.$apply(function(){d.$setViewValue(e)})}};if(e.hasEvent("input"))a.on("input",n);else{var k,l=function(){k||(k=f.defer(function(){n();k=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||l()});if(e.hasEvent("paste"))a.on("paste cut",
l)}a.on("change",n);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var m=c.ngPattern;m&&((e=m.match(/^\/(.*)\/([gim]*)$/))?(m=RegExp(e[1],e[2]),e=function(a){return ma(d,"pattern",d.$isEmpty(a)||m.test(a),a)}):e=function(c){var e=b.$eval(m);if(!e||!e.test)throw F("ngPattern")("noregexp",m,e,fa(a));return ma(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var p=Q(c.ngMinlength);e=function(a){return ma(d,"minlength",d.$isEmpty(a)||
a.length>=p,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var q=Q(c.ngMaxlength);e=function(a){return ma(d,"maxlength",d.$isEmpty(a)||a.length<=q,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Nb(b,a){b="ngClass"+b;return function(){return{restrict:"AC",link:function(c,d,e){function f(b){if(!0===a||c.$index%2===a){var d=g(b||"");h?sa(b,h)||e.$updateClass(d,g(h)):e.$addClass(d)}h=ba(b)}function g(a){if(I(a))return a.join(" ");if(X(a)){var b=[];r(a,function(a,c){a&&b.push(c)});
return b.join(" ")}return a}var h;c.$watch(e[b],f,!0);e.$observe("class",function(a){f(c.$eval(e[b]))});"ngClass"!==b&&c.$watch("$index",function(d,f){var h=d&1;if(h!==f&1){var m=g(c.$eval(e[b]));h===a?e.$addClass(m):e.$removeClass(m)}})}}}}var O=function(b){return C(b)?b.toLowerCase():b},Pd=Object.prototype.hasOwnProperty,Ia=function(b){return C(b)?b.toUpperCase():b},P,z,Ca,ta=[].slice,Ud=[].push,Aa=Object.prototype.toString,Na=F("ng"),Ba=D.angular||(D.angular={}),Ua,Ga,ia=["0","0","0"];P=Q((/msie (\d+)/.exec(O(navigator.userAgent))||
[])[1]);isNaN(P)&&(P=Q((/trident\/.*; rv:(\d+)/.exec(O(navigator.userAgent))||[])[1]));w.$inject=[];za.$inject=[];var ca=function(){return String.prototype.trim?function(b){return C(b)?b.trim():b}:function(b){return C(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ga=9>P?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Ia(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Vc=/[A-Z]/g,Vd={full:"1.2.14-build.2317+sha.348a771",
major:1,minor:2,dot:14,codeName:"snapshot"},Ra=R.cache={},db=R.expando="ng-"+(new Date).getTime(),Zc=1,Kc=D.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Db=D.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};R._data=function(b){return this.cache[b[this.expando]]||{}};var Xc=/([\:\-\_]+(.))/g,Yc=/^moz([A-Z])/,Ab=F("jqLite"),Fa=R.prototype={ready:function(b){function a(){c||
(c=!0,b())}var c=!1;"complete"===T.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(D).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?z(this[b]):z(this[this.length+b])},length:0,push:Ud,sort:[].sort,splice:[].splice},hb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){hb[O(b)]=b});var hc={};r("input select option textarea button form details".split(" "),function(b){hc[Ia(b)]=
!0});r({data:dc,inheritedData:gb,scope:function(b){return z(b).data("$scope")||gb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return z(b).data("$isolateScope")||z(b).data("$isolateScopeNoTemplate")},controller:ec,injector:function(b){return gb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Eb,css:function(b,a,c){a=Qa(a);if(v(c))b.style[a]=c;else{var d;8>=P&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=P&&(d=""===d?s:
d);return d}},attr:function(b,a,c){var d=O(a);if(hb[d])if(v(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||w).specified?d:s;else if(v(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(v(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(A(d))return e?b[e]:"";b[e]=d}var a=[];9>P?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";
b.$dv="";return b}(),val:function(b,a){if(A(a)){if("SELECT"===Ga(b)&&b.multiple){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(A(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Da(d[c]);b.innerHTML=a},empty:fc},function(b,a){R.prototype[a]=function(a,d){var e,f;if(b!==fc&&(2==b.length&&b!==Eb&&b!==ec?a:d)===s){if(X(a)){for(e=0;e<this.length;e++)if(b===dc)b(this[e],a);else for(f in a)b(this[e],
f,a[f]);return this}e=b.$dv;f=e===s?Math.min(this.length,1):this.length;for(var g=0;g<f;g++){var h=b(this[g],a,d);e=e?e+h:h}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});r({removeData:bc,dealoc:Da,on:function a(c,d,e,f){if(v(f))throw Ab("onargs");var g=ja(c,"events"),h=ja(c,"handle");g||ja(c,"events",g={});h||ja(c,"handle",h=$c(c,g));r(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==d||"mouseleave"==d){var l=T.body.contains||T.body.compareDocumentPosition?function(a,
c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||h(a,d)})}else Kc(c,d,h),g[d]=[];f=g[d]}f.push(e)})},off:cc,one:function(a,c,d){a=z(a);a.on(c,function f(){a.off(c,d);a.off(c,
f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Da(a);r(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){r(new R(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;r(new R(c),function(c){a.insertBefore(c,
d)})}},wrap:function(a,c){c=z(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Da(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;r(new R(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:fb,removeClass:eb,toggleClass:function(a,c,d){A(d)&&(d=!Eb(a,c));(d?fb:eb)(a,c)},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=
a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Cb,triggerHandler:function(a,c,d){c=(ja(a,"events")||{})[c];d=d||[];var e=[{preventDefault:w,stopPropagation:w}];r(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,h=0;h<this.length;h++)A(g)?(g=a(this[h],c,e,f),v(g)&&(g=z(g))):Bb(g,a(this[h],c,e,f));return v(g)?g:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});
Sa.prototype={put:function(a,c){this[Ea(a)]=c},get:function(a){return this[Ea(a)]},remove:function(a){var c=this[a=Ea(a)];delete this[a];return c}};var bd=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,cd=/,/,dd=/^\s*(_?)(\S+?)\1\s*$/,ad=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ta=F("$injector"),Wd=F("$animate"),Xd=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Wd("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=
function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout",function(a){return{enter:function(d,e,f,g){f?f.after(d):(e&&e[0]||(e=f.parent()),e.append(d));g&&a(g,0,!1)},leave:function(d,e){d.remove();e&&a(e,0,!1)},move:function(a,c,f,g){this.enter(a,c,f,g)},addClass:function(d,e,f){e=C(e)?e:I(e)?e.join(" "):"";r(d,function(a){fb(a,e)});f&&a(f,0,!1)},removeClass:function(d,e,f){e=C(e)?e:I(e)?e.join(" "):"";r(d,function(a){eb(a,
e)});f&&a(f,0,!1)},setClass:function(d,e,f,g){r(d,function(a){fb(a,e);eb(a,f)});g&&a(g,0,!1)},enabled:w}}]}],ha=F("$compile");jc.$inject=["$provide","$$sanitizeUriProvider"];var jd=/^(x[\:\-_]|data[\:\-_])/i,qc=F("$interpolate"),Yd=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,ud={http:80,https:443,ftp:21},Ib=F("$location");vc.prototype=Jb.prototype=uc.prototype={$$html5:!1,$$replace:!1,absUrl:mb("$$absUrl"),url:function(a,c){if(A(a))return this.$$url;var d=Yd.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));
(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:mb("$$protocol"),host:mb("$$host"),port:mb("$$port"),path:wc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(C(a))this.$$search=Xb(a);else if(X(a))this.$$search=a;else throw Ib("isrcharg");break;default:A(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:wc("$$hash",za),replace:function(){this.$$replace=
!0;return this}};var xa=F("$parse"),zc={},pa,Ka={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:w,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return v(d)?v(e)?d+e:d:v(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(v(d)?d:0)-(v(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":w,"===":function(a,c,d,e){return d(a,
c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,
c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Zd={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Lb=function(a){this.options=a};Lb.prototype={constructor:Lb,lex:function(a){this.text=a;this.index=0;this.ch=s;this.lastCh=":";this.tokens=[];var c;for(a=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent(),
this.was("{,")&&("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&this.is("{[")||this.is("}]:,")}),this.is("{[")&&a.unshift(this.ch),this.is("}]")&&a.shift(),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{var d=this.ch+this.peek(),e=d+this.peek(2),f=Ka[this.ch],g=Ka[d],h=Ka[e];h?(this.tokens.push({index:this.index,text:e,fn:h}),this.index+=
3):g?(this.tokens.push({index:this.index,text:d,fn:g}),this.index+=2):f?(this.tokens.push({index:this.index,text:this.ch,fn:f,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=
a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=v(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw xa("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=O(this.text.charAt(this.index));
if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,h;this.index<this.text.length;){h=this.text.charAt(this.index);
if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;else break}d={index:d,text:c};if(Ka.hasOwnProperty(c))d.fn=Ka[c],d.json=Ka[c];else{var n=yc(c,this.options,this.text);d.fn=t(function(a,c){return n(a,c)},{assign:function(d,e){return nb(d,c,e,a.text,a.options)}})}this.tokens.push(d);g&&(this.tokens.push({index:e,
text:".",json:!1}),this.tokens.push({index:e+1,text:g,json:!1}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(g=this.text.substring(this.index+1,this.index+5),g.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+g+"]"),this.index+=4,d+=String.fromCharCode(parseInt(g,16))):d=(f=Zd[g])?d+f:d+g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,
text:e,string:d,json:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var Ya=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};Ya.ZERO=function(){return 0};Ya.prototype={constructor:Ya,parse:function(a,c){this.text=a;this.json=c;this.tokens=this.lexer.lex(a);c&&(this.assignment=this.logicalOR,this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,index:0})});var d=c?this.primary():
this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=
this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw xa("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw xa("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,
c,d,e){return(a=this.peek(a,c,d,e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return t(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return t(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return t(function(e,f){return c(e,f,a,d)},
{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());
else{var e=function(a,e,h){h=[h];for(var n=0;n<d.length;n++)h.push(d[n](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();
if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},
relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(Ya.ZERO,a.fn,
this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=yc(d,this.options,this.text);return t(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){return nb(a(e,h),d,g,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return t(function(e,f){var g=a(e,f),h=d(e,f),n;if(!g)return s;(g=Xa(g[h],c.text))&&(g.then&&c.options.unwrapPromises)&&(n=g,"$$v"in g||(n.$$v=s,n.then(function(a){n.$$v=
a})),g=g.$$v);return g},{assign:function(e,f,g){var h=d(e,g);return Xa(a(e,g),c.text)[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var h=[],n=c?c(f,g):f,k=0;k<d.length;k++)h.push(d[k](f,g));k=a(f,g,n)||w;Xa(n,e.text);Xa(k,e.text);h=k.apply?k.apply(n,h):k(h[0],h[1],h[2],h[3],h[4]);return Xa(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{var d=
this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return t(function(c,d){for(var g=[],h=0;h<a.length;h++)g.push(a[h](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return t(function(c,d){for(var e={},n=0;n<a.length;n++){var k=a[n];e[k.key]=
k.value(c,d)}return e},{literal:!0,constant:c})}};var Kb={},qa=F("$sce"),ea={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},V=T.createElement("a"),Bc=wa(D.location.href,!0);Cc.$inject=["$provide"];Dc.$inject=["$locale"];Fc.$inject=["$locale"];var Ic=".",Sd={yyyy:Z("FullYear",4),yy:Z("FullYear",2,0,!0),y:Z("FullYear",1),MMMM:ob("Month"),MMM:ob("Month",!0),MM:Z("Month",2,1),M:Z("Month",1,1),dd:Z("Date",2),d:Z("Date",1),HH:Z("Hours",2),H:Z("Hours",1),hh:Z("Hours",2,-12),h:Z("Hours",
1,-12),mm:Z("Minutes",2),m:Z("Minutes",1),ss:Z("Seconds",2),s:Z("Seconds",1),sss:Z("Milliseconds",3),EEEE:ob("Day"),EEE:ob("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Mb(Math[0<a?"floor":"ceil"](a/60),2)+Mb(Math.abs(a%60),2))}},Rd=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Qd=/^\-?\d+$/;Ec.$inject=["$locale"];var Nd=$(O),Od=$(Ia);Gc.$inject=["$parse"];var $d=$({restrict:"E",
compile:function(a,c){8>=P&&(c.href||c.name||c.$set("href",""),a.append(T.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Aa.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),Ob={};r(hb,function(a,c){if("multiple"!=a){var d=ka("ng-"+c);Ob[d]=function(){return{priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(["src","srcset","href"],function(a){var c=
ka("ng-"+a);Ob[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Aa.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(a){a&&(f.$set(h,a),P&&g&&e.prop(g,f[h]))})}}}});var rb={$addControl:w,$removeControl:w,$setValidity:w,$setDirty:w,$setPristine:w};Jc.$inject=["$element","$attrs","$scope"];var Lc=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Jc,compile:function(){return{pre:function(a,
e,f,g){if(!f.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};Kc(e[0],"submit",h);e.on("$destroy",function(){c(function(){Db(e[0],"submit",h)},0,!1)})}var n=e.parent().controller("form"),k=f.name||f.ngForm;k&&nb(a,k,g,k);if(n)e.on("$destroy",function(){n.$removeControl(g);k&&nb(a,k,s,k);t(g,rb)})}}}}}]},ae=Lc(),be=Lc(!0),ce=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,de=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,
ee=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Mc={text:tb,number:function(a,c,d,e,f,g){tb(a,c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||ee.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});Td(e,"number",c);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return ma(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=
parseFloat(d.max);return ma(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return ma(e,"number",e.$isEmpty(a)||vb(a),a)})},url:function(a,c,d,e,f,g){tb(a,c,d,e,f,g);a=function(a){return ma(e,"url",e.$isEmpty(a)||ce.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,g){tb(a,c,d,e,f,g);a=function(a){return ma(e,"email",e.$isEmpty(a)||de.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){A(d.name)&&
c.attr("name",Za());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,g=d.ngFalseValue;C(f)||(f=!0);C(g)||(g=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?
f:g})},hidden:w,button:w,submit:w,reset:w,file:w},Nc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,f,g){g&&(Mc[O(f.type)]||Mc.text)(d,e,f,g,c,a)}}}],qb="ng-valid",pb="ng-invalid",Ja="ng-pristine",sb="ng-dirty",fe=["$scope","$exceptionHandler","$attrs","$element","$parse",function(a,c,d,e,f){function g(a,c){c=c?"-"+cb(c,"-"):"";e.removeClass((a?pb:qb)+c).addClass((a?qb:pb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=
[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var h=f(d.ngModel),n=h.assign;if(!n)throw F("ngModel")("nonassign",d.ngModel,fa(e));this.$render=w;this.$isEmpty=function(a){return A(a)||""===a||null===a||a!==a};var k=e.inheritedData("$formController")||rb,l=0,m=this.$error={};e.addClass(Ja);g(!0);this.$setValidity=function(a,c){m[a]!==!c&&(c?(m[a]&&l--,l||(g(!0),this.$valid=!0,this.$invalid=!1)):(g(!1),this.$invalid=!0,this.$valid=
!1,l++),m[a]=!c,g(c,a),k.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;e.removeClass(sb).addClass(Ja)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,e.removeClass(Ja).addClass(sb),k.$setDirty());r(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,n(a,d),r(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var p=this;a.$watch(function(){var c=h(a);if(p.$modelValue!==
c){var d=p.$formatters,e=d.length;for(p.$modelValue=c;e--;)c=d[e](c);p.$viewValue!==c&&(p.$viewValue=c,p.$render())}return c})}],ge=function(){return{require:["ngModel","^?form"],controller:fe,link:function(a,c,d,e){var f=e[0],g=e[1]||rb;g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})}}},he=$({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Oc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;
var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},ie=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!A(a)){var c=[];a&&r(a.split(f),function(a){a&&c.push(ca(a))});return c}});e.$formatters.push(function(a){return I(a)?a.join(", "):
s});e.$isEmpty=function(a){return!a||!a.length}}}},je=/^(true|false|\d+)$/,ke=function(){return{priority:100,compile:function(a,c){return je.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},le=ra(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==s?"":a)})}),me=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",
c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],ne=["$sce","$parse",function(a,c){return function(d,e,f){e.addClass("ng-binding").data("$binding",f.ngBindHtml);var g=c(f.ngBindHtml);d.$watch(function(){return(g(d)||"").toString()},function(c){e.html(a.getTrustedHtml(g(d))||"")})}}],oe=Nb("",!0),pe=Nb("Odd",0),qe=Nb("Even",1),re=ra({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),se=[function(){return{scope:!0,controller:"@",priority:500}}],Pc={};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=ka("ng-"+a);Pc[c]=["$parse",function(d){return{compile:function(e,f){var g=d(f[c]);return function(c,d,e){d.on(O(a),function(a){c.$apply(function(){g(c,{$event:a})})})}}}}]});var te=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,n;c.$watch(e.ngIf,function(f){Oa(f)?n||(n=c.$new(),g(n,function(c){c[c.length++]=T.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)})):(n&&(n.$destroy(),
n=null),h&&(a.leave(yb(h.clone)),h=null))})}}}],ue=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Ba.noop,compile:function(g,h){var n=h.ngInclude||h.src,k=h.onload||"",l=h.autoscroll;return function(g,h,q,r,B){var s=0,u,t,z=function(){u&&(u.$destroy(),u=null);t&&(e.leave(t),t=null)};g.$watch(f.parseAsResourceUrl(n),function(f){var n=function(){!v(l)||l&&!g.$eval(l)||d()},q=++s;f?(a.get(f,
{cache:c}).success(function(a){if(q===s){var c=g.$new();r.template=a;a=B(c,function(a){z();e.enter(a,null,h,n)});u=c;t=a;u.$emit("$includeContentLoaded");g.$eval(k)}}).error(function(){q===s&&z()}),g.$emit("$includeContentRequested")):(z(),r.template=null)})}}}}],ve=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],we=ra({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),
xe=ra({terminal:!0,priority:1E3}),ye=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,n=g.$attr.when&&f.attr(g.$attr.when),k=g.offset||0,l=e.$eval(n)||{},m={},p=c.startSymbol(),q=c.endSymbol(),s=/^when(Minus)?(.+)$/;r(g,function(a,c){s.test(c)&&(l[O(c.replace("when","").replace("Minus","-"))]=f.attr(g.$attr[c]))});r(l,function(a,e){m[e]=c(a.replace(d,p+h+"-"+k+q))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in
l||(c=a.pluralCat(c-k));return m[c](e,f,!0)},function(a){f.text(a)})}}}],ze=["$parse","$animate",function(a,c){var d=F("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,g,h,n){var k=g.ngRepeat,l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),m,p,q,s,t,v,u={$id:Ea};if(!l)throw d("iexp",k);g=l[1];h=l[2];(l=l[3])?(m=a(l),p=function(a,c,d){v&&(u[v]=a);u[t]=c;u.$index=d;return m(e,u)}):(q=function(a,c){return Ea(c)},s=function(a){return a});
l=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",g);t=l[3]||l[1];v=l[2];var H={};e.$watchCollection(h,function(a){var g,h,l=f[0],m,u={},C,J,w,A,F,K,I=[];if(ub(a))F=a,m=p||q;else{m=p||s;F=[];for(w in a)a.hasOwnProperty(w)&&"$"!=w.charAt(0)&&F.push(w);F.sort()}C=F.length;h=I.length=F.length;for(g=0;g<h;g++)if(w=a===F?g:F[g],A=a[w],A=m(w,A,g),va(A,"`track by` id"),H.hasOwnProperty(A))K=H[A],delete H[A],u[A]=K,I[g]=K;else{if(u.hasOwnProperty(A))throw r(I,function(a){a&&
a.scope&&(H[a.id]=a)}),d("dupes",k,A);I[g]={id:A};u[A]=!1}for(w in H)H.hasOwnProperty(w)&&(K=H[w],g=yb(K.clone),c.leave(g),r(g,function(a){a.$$NG_REMOVED=!0}),K.scope.$destroy());g=0;for(h=F.length;g<h;g++){w=a===F?g:F[g];A=a[w];K=I[g];I[g-1]&&(l=I[g-1].clone[I[g-1].clone.length-1]);if(K.scope){J=K.scope;m=l;do m=m.nextSibling;while(m&&m.$$NG_REMOVED);K.clone[0]!=m&&c.move(yb(K.clone),null,z(l));l=K.clone[K.clone.length-1]}else J=e.$new();J[t]=A;v&&(J[v]=w);J.$index=g;J.$first=0===g;J.$last=g===C-
1;J.$middle=!(J.$first||J.$last);J.$odd=!(J.$even=0===(g&1));K.scope||n(J,function(a){a[a.length++]=T.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,z(l));l=a;K.scope=J;K.clone=a;u[K.id]=K})}H=u})}}}],Ae=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Oa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],Be=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Oa(c)?"addClass":"removeClass"](d,"ng-hide")})}}],Ce=ra(function(a,c,d){a.$watch(d.ngStyle,
function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),De=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g,h,n=[];c.$watch(e.ngSwitch||e.on,function(d){for(var l=0,m=n.length;l<m;l++)n[l].$destroy(),a.leave(h[l]);h=[];n=[];if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),r(g,function(d){var e=c.$new();n.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),
e)})})})}}}],Ee=ra({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Fe=ra({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Ge=ra({link:function(a,c,d,e,f){if(!f)throw F("ngTransclude")("orphan",fa(c));f(function(a){c.empty();c.append(a)})}}),
He=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Ie=F("ngOptions"),Je=$({terminal:!0}),Ke=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:w};return{restrict:"E",require:["select","?ngModel"],controller:["$element",
"$scope","$attrs",function(a,c,d){var n=this,k={},l=e,m;n.databound=d.ngModel;n.init=function(a,c,d){l=a;m=d};n.addOption=function(c){va(c,'"option value"');k[c]=!0;l.$viewValue==c&&(a.val(c),m.parent()&&m.remove())};n.removeOption=function(a){this.hasOption(a)&&(delete k[a],l.$viewValue==a&&this.renderUnknownOption(a))};n.renderUnknownOption=function(c){c="? "+Ea(c)+" ?";m.val(c);a.prepend(m);a.val(c);m.prop("selected",!0)};n.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){n.renderUnknownOption=
w})}],link:function(e,g,h,n){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(C.parent()&&C.remove(),c.val(a),""===a&&w.prop("selected",!0)):A(a)&&w?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){C.parent()&&C.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new Sa(d.$viewValue);r(c.find("option"),function(c){c.selected=v(a.get(c.value))})};a.$watch(function(){sa(e,d.$viewValue)||(e=ba(d.$viewValue),
d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function m(e,f,g){function h(){var a={"":[]},c=[""],d,k,s,t,y;t=g.$modelValue;y=z(e)||[];var C=n?Pb(y):y,E,x,D;x={};s=!1;var L,J;if(q)if(w&&I(t))for(s=new Sa([]),D=0;D<t.length;D++)x[m]=t[D],s.put(w(e,x),t[D]);else s=new Sa(t);for(D=0;E=C.length,D<E;D++){k=D;if(n){k=C[D];if("$"===k.charAt(0))continue;x[n]=k}x[m]=y[k];d=p(e,x)||"";(k=a[d])||(k=a[d]=
[],c.push(d));q?d=v(s.remove(w?w(e,x):r(e,x))):(w?(d={},d[m]=t,d=w(e,d)===w(e,x)):d=t===r(e,x),s=s||d);L=l(e,x);L=v(L)?L:"";k.push({id:w?w(e,x):n?C[D]:D,label:L,selected:d})}q||(B||null===t?a[""].unshift({id:"",label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));x=0;for(C=c.length;x<C;x++){d=c[x];k=a[d];A.length<=x?(t={element:F.clone().attr("label",d),label:k.label},y=[t],A.push(y),f.append(t.element)):(y=A[x],t=y[0],t.label!=d&&t.element.attr("label",t.label=d));L=null;D=0;for(E=
k.length;D<E;D++)s=k[D],(d=y[D+1])?(L=d.element,d.label!==s.label&&L.text(d.label=s.label),d.id!==s.id&&L.val(d.id=s.id),L[0].selected!==s.selected&&L.prop("selected",d.selected=s.selected)):(""===s.id&&B?J=B:(J=u.clone()).val(s.id).attr("selected",s.selected).text(s.label),y.push({element:J,label:s.label,id:s.id,selected:s.selected}),L?L.after(J):t.element.append(J),L=J);for(D++;y.length>D;)y.pop().element.remove()}for(;A.length>x;)A.pop()[0].element.remove()}var k;if(!(k=t.match(d)))throw Ie("iexp",
t,fa(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),r=c(k[2]?k[1]:m),z=c(k[7]),w=k[8]?c(k[8]):null,A=[[{element:f,label:""}]];B&&(a(B)(e),B.removeClass("ng-scope"),B.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=z(e)||[],d={},h,k,l,p,t,v,u;if(q)for(k=[],p=0,v=A.length;p<v;p++)for(a=A[p],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(w)for(u=0;u<c.length&&(d[m]=c[u],w(e,d)!=h);u++);else d[m]=c[h];k.push(r(e,d))}}else if(h=f.val(),
"?"==h)k=s;else if(""===h)k=null;else if(w)for(u=0;u<c.length;u++){if(d[m]=c[u],w(e,d)==h){k=r(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=r(e,d);g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(n[1]){var p=n[0];n=n[1];var q=h.multiple,t=h.ngOptions,B=!1,w,u=z(T.createElement("option")),F=z(T.createElement("optgroup")),C=u.clone();h=0;for(var E=g.children(),D=E.length;h<D;h++)if(""===E[h].value){w=B=E.eq(h);break}p.init(n,B,C);q&&(n.$isEmpty=function(a){return!a||0===a.length});t?m(e,g,n):q?l(e,g,n):
k(e,g,n,p)}}}}],Le=["$interpolate",function(a){var c={addOption:w,removeOption:w};return{restrict:"E",priority:100,compile:function(d,e){if(A(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),l=k.data("$selectController")||k.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;f?a.$watch(f,function(a,c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],
Me=$({restrict:"E",terminal:!0});(Ca=D.jQuery)?(z=Ca,t(Ca.fn,{scope:Fa.scope,isolateScope:Fa.isolateScope,controller:Fa.controller,injector:Fa.injector,inheritedData:Fa.inheritedData}),zb("remove",!0,!0,!1),zb("empty",!1,!1,!1),zb("html",!1,!1,!0)):z=R;Ba.element=z;(function(a){t(a,{bootstrap:Zb,copy:ba,extend:t,equals:sa,element:z,forEach:r,injector:$b,noop:w,bind:bb,toJson:na,fromJson:Vb,identity:za,isUndefined:A,isDefined:v,isString:C,isFunction:N,isObject:X,isNumber:vb,isElement:Rc,isArray:I,
version:Vd,isDate:La,lowercase:O,uppercase:Ia,callbacks:{counter:0},$$minErr:F,$$csp:Ub});Ua=Wc(D);try{Ua("ngLocale")}catch(c){Ua("ngLocale",[]).provider("$locale",td)}Ua("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Dd});a.provider("$compile",jc).directive({a:$d,input:Nc,textarea:Nc,form:ae,script:He,select:Ke,style:Me,option:Le,ngBind:le,ngBindHtml:ne,ngBindTemplate:me,ngClass:oe,ngClassEven:qe,ngClassOdd:pe,ngCloak:re,ngController:se,ngForm:be,ngHide:Be,ngIf:te,ngInclude:ue,
ngInit:we,ngNonBindable:xe,ngPluralize:ye,ngRepeat:ze,ngShow:Ae,ngStyle:Ce,ngSwitch:De,ngSwitchWhen:Ee,ngSwitchDefault:Fe,ngOptions:Je,ngTransclude:Ge,ngModel:ge,ngList:ie,ngChange:he,required:Oc,ngRequired:Oc,ngValue:ke}).directive({ngInclude:ve}).directive(Ob).directive(Pc);a.provider({$anchorScroll:ed,$animate:Xd,$browser:gd,$cacheFactory:hd,$controller:kd,$document:ld,$exceptionHandler:md,$filter:Cc,$interpolate:rd,$interval:sd,$http:nd,$httpBackend:pd,$location:vd,$log:wd,$parse:zd,$rootScope:Cd,
$q:Ad,$sce:Gd,$sceDelegate:Fd,$sniffer:Hd,$templateCache:id,$timeout:Id,$window:Jd})}])})(Ba);z(T).ready(function(){Uc(T,Zb)})})(window,document);!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}</style>');
//# sourceMappingURL=angular.min.js.map

/**
 * State-based routing for AngularJS
 * @version v0.2.8
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

/* commonjs package manager support (eg componentjs) */
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
  module.exports = 'ui.router';
}

(function (window, angular, undefined) {
/*jshint globalstrict:true*/
/*global angular:false*/
'use strict';

var isDefined = angular.isDefined,
    isFunction = angular.isFunction,
    isString = angular.isString,
    isObject = angular.isObject,
    isArray = angular.isArray,
    forEach = angular.forEach,
    extend = angular.extend,
    copy = angular.copy;

function inherit(parent, extra) {
  return extend(new (extend(function() {}, { prototype: parent }))(), extra);
}

function merge(dst) {
  forEach(arguments, function(obj) {
    if (obj !== dst) {
      forEach(obj, function(value, key) {
        if (!dst.hasOwnProperty(key)) dst[key] = value;
      });
    }
  });
  return dst;
}

/**
 * Finds the common ancestor path between two states.
 *
 * @param {Object} first The first state.
 * @param {Object} second The second state.
 * @return {Array} Returns an array of state names in descending order, not including the root.
 */
function ancestors(first, second) {
  var path = [];

  for (var n in first.path) {
    if (first.path[n] !== second.path[n]) break;
    path.push(first.path[n]);
  }
  return path;
}

/**
 * IE8-safe wrapper for `Object.keys()`.
 *
 * @param {Object} object A JavaScript object.
 * @return {Array} Returns the keys of the object as an array.
 */
function keys(object) {
  if (Object.keys) {
    return Object.keys(object);
  }
  var result = [];

  angular.forEach(object, function(val, key) {
    result.push(key);
  });
  return result;
}

/**
 * IE8-safe wrapper for `Array.prototype.indexOf()`.
 *
 * @param {Array} array A JavaScript array.
 * @param {*} value A value to search the array for.
 * @return {Number} Returns the array index value of `value`, or `-1` if not present.
 */
function arraySearch(array, value) {
  if (Array.prototype.indexOf) {
    return array.indexOf(value, Number(arguments[2]) || 0);
  }
  var len = array.length >>> 0, from = Number(arguments[2]) || 0;
  from = (from < 0) ? Math.ceil(from) : Math.floor(from);

  if (from < 0) from += len;

  for (; from < len; from++) {
    if (from in array && array[from] === value) return from;
  }
  return -1;
}

/**
 * Merges a set of parameters with all parameters inherited between the common parents of the
 * current state and a given destination state.
 *
 * @param {Object} currentParams The value of the current state parameters ($stateParams).
 * @param {Object} newParams The set of parameters which will be composited with inherited params.
 * @param {Object} $current Internal definition of object representing the current state.
 * @param {Object} $to Internal definition of object representing state to transition to.
 */
function inheritParams(currentParams, newParams, $current, $to) {
  var parents = ancestors($current, $to), parentParams, inherited = {}, inheritList = [];

  for (var i in parents) {
    if (!parents[i].params || !parents[i].params.length) continue;
    parentParams = parents[i].params;

    for (var j in parentParams) {
      if (arraySearch(inheritList, parentParams[j]) >= 0) continue;
      inheritList.push(parentParams[j]);
      inherited[parentParams[j]] = currentParams[parentParams[j]];
    }
  }
  return extend({}, inherited, newParams);
}

/**
 * Normalizes a set of values to string or `null`, filtering them by a list of keys.
 *
 * @param {Array} keys The list of keys to normalize/return.
 * @param {Object} values An object hash of values to normalize.
 * @return {Object} Returns an object hash of normalized string values.
 */
function normalize(keys, values) {
  var normalized = {};

  forEach(keys, function (name) {
    var value = values[name];
    normalized[name] = (value != null) ? String(value) : null;
  });
  return normalized;
}

/**
 * Performs a non-strict comparison of the subset of two objects, defined by a list of keys.
 *
 * @param {Object} a The first object.
 * @param {Object} b The second object.
 * @param {Array} keys The list of keys within each object to compare. If the list is empty or not specified,
 *                     it defaults to the list of keys in `a`.
 * @return {Boolean} Returns `true` if the keys match, otherwise `false`.
 */
function equalForKeys(a, b, keys) {
  if (!keys) {
    keys = [];
    for (var n in a) keys.push(n); // Used instead of Object.keys() for IE8 compatibility
  }

  for (var i=0; i<keys.length; i++) {
    var k = keys[i];
    if (a[k] != b[k]) return false; // Not '===', values aren't necessarily normalized
  }
  return true;
}

/**
 * Returns the subset of an object, based on a list of keys.
 *
 * @param {Array} keys
 * @param {Object} values
 * @return {Boolean} Returns a subset of `values`.
 */
function filterByKeys(keys, values) {
  var filtered = {};

  forEach(keys, function (name) {
    filtered[name] = values[name];
  });
  return filtered;
}

/**
 * @ngdoc overview
 * @name ui.router.util
 *
 * @description
 *
 */
angular.module('ui.router.util', ['ng']);

/**
 * @ngdoc overview
 * @name ui.router.router
 *
 * @requires ui.router.util
 *
 * @description
 *
 */
angular.module('ui.router.router', ['ui.router.util']);

/**
 * @ngdoc overview
 * @name ui.router.router
 *
 * @requires ui.router.router
 * @requires ui.router.util
 *
 * @description
 *
 */
angular.module('ui.router.state', ['ui.router.router', 'ui.router.util']);

/**
 * @ngdoc overview
 * @name ui.router
 *
 * @requires ui.router.state
 *
 * @description
 *
 */
angular.module('ui.router', ['ui.router.state']);
/**
 * @ngdoc overview
 * @name ui.router.compat
 *
 * @requires ui.router
 *
 * @description
 *
 */
angular.module('ui.router.compat', ['ui.router']);

/**
 * @ngdoc object
 * @name ui.router.util.$resolve
 *
 * @requires $q
 * @requires $injector
 *
 * @description
 * Manages resolution of (acyclic) graphs of promises.
 */
$Resolve.$inject = ['$q', '$injector'];
function $Resolve(  $q,    $injector) {

  var VISIT_IN_PROGRESS = 1,
      VISIT_DONE = 2,
      NOTHING = {},
      NO_DEPENDENCIES = [],
      NO_LOCALS = NOTHING,
      NO_PARENT = extend($q.when(NOTHING), { $$promises: NOTHING, $$values: NOTHING });


  /**
   * @ngdoc function
   * @name ui.router.util.$resolve#study
   * @methodOf ui.router.util.$resolve
   *
   * @description
   * Studies a set of invocables that are likely to be used multiple times.
   * <pre>
   * $resolve.study(invocables)(locals, parent, self)
   * </pre>
   * is equivalent to
   * <pre>
   * $resolve.resolve(invocables, locals, parent, self)
   * </pre>
   * but the former is more efficient (in fact `resolve` just calls `study`
   * internally).
   *
   * @param {object} invocables Invocable objects
   * @return {function} a function to pass in locals, parent and self
   */
  this.study = function (invocables) {
    if (!isObject(invocables)) throw new Error("'invocables' must be an object");

    // Perform a topological sort of invocables to build an ordered plan
    var plan = [], cycle = [], visited = {};
    function visit(value, key) {
      if (visited[key] === VISIT_DONE) return;

      cycle.push(key);
      if (visited[key] === VISIT_IN_PROGRESS) {
        cycle.splice(0, cycle.indexOf(key));
        throw new Error("Cyclic dependency: " + cycle.join(" -> "));
      }
      visited[key] = VISIT_IN_PROGRESS;

      if (isString(value)) {
        plan.push(key, [ function() { return $injector.get(value); }], NO_DEPENDENCIES);
      } else {
        var params = $injector.annotate(value);
        forEach(params, function (param) {
          if (param !== key && invocables.hasOwnProperty(param)) visit(invocables[param], param);
        });
        plan.push(key, value, params);
      }

      cycle.pop();
      visited[key] = VISIT_DONE;
    }
    forEach(invocables, visit);
    invocables = cycle = visited = null; // plan is all that's required

    function isResolve(value) {
      return isObject(value) && value.then && value.$$promises;
    }

    return function (locals, parent, self) {
      if (isResolve(locals) && self === undefined) {
        self = parent; parent = locals; locals = null;
      }
      if (!locals) locals = NO_LOCALS;
      else if (!isObject(locals)) {
        throw new Error("'locals' must be an object");
      }
      if (!parent) parent = NO_PARENT;
      else if (!isResolve(parent)) {
        throw new Error("'parent' must be a promise returned by $resolve.resolve()");
      }

      // To complete the overall resolution, we have to wait for the parent
      // promise and for the promise for each invokable in our plan.
      var resolution = $q.defer(),
          result = resolution.promise,
          promises = result.$$promises = {},
          values = extend({}, locals),
          wait = 1 + plan.length/3,
          merged = false;

      function done() {
        // Merge parent values we haven't got yet and publish our own $$values
        if (!--wait) {
          if (!merged) merge(values, parent.$$values);
          result.$$values = values;
          result.$$promises = true; // keep for isResolve()
          resolution.resolve(values);
        }
      }

      function fail(reason) {
        result.$$failure = reason;
        resolution.reject(reason);
      }

      // Short-circuit if parent has already failed
      if (isDefined(parent.$$failure)) {
        fail(parent.$$failure);
        return result;
      }

      // Merge parent values if the parent has already resolved, or merge
      // parent promises and wait if the parent resolve is still in progress.
      if (parent.$$values) {
        merged = merge(values, parent.$$values);
        done();
      } else {
        extend(promises, parent.$$promises);
        parent.then(done, fail);
      }

      // Process each invocable in the plan, but ignore any where a local of the same name exists.
      for (var i=0, ii=plan.length; i<ii; i+=3) {
        if (locals.hasOwnProperty(plan[i])) done();
        else invoke(plan[i], plan[i+1], plan[i+2]);
      }

      function invoke(key, invocable, params) {
        // Create a deferred for this invocation. Failures will propagate to the resolution as well.
        var invocation = $q.defer(), waitParams = 0;
        function onfailure(reason) {
          invocation.reject(reason);
          fail(reason);
        }
        // Wait for any parameter that we have a promise for (either from parent or from this
        // resolve; in that case study() will have made sure it's ordered before us in the plan).
        forEach(params, function (dep) {
          if (promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep)) {
            waitParams++;
            promises[dep].then(function (result) {
              values[dep] = result;
              if (!(--waitParams)) proceed();
            }, onfailure);
          }
        });
        if (!waitParams) proceed();
        function proceed() {
          if (isDefined(result.$$failure)) return;
          try {
            invocation.resolve($injector.invoke(invocable, self, values));
            invocation.promise.then(function (result) {
              values[key] = result;
              done();
            }, onfailure);
          } catch (e) {
            onfailure(e);
          }
        }
        // Publish promise synchronously; invocations further down in the plan may depend on it.
        promises[key] = invocation.promise;
      }

      return result;
    };
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$resolve#resolve
   * @methodOf ui.router.util.$resolve
   *
   * @description
   * Resolves a set of invocables. An invocable is a function to be invoked via
   * `$injector.invoke()`, and can have an arbitrary number of dependencies.
   * An invocable can either return a value directly,
   * or a `$q` promise. If a promise is returned it will be resolved and the
   * resulting value will be used instead. Dependencies of invocables are resolved
   * (in this order of precedence)
   *
   * - from the specified `locals`
   * - from another invocable that is part of this `$resolve` call
   * - from an invocable that is inherited from a `parent` call to `$resolve`
   *   (or recursively
   * - from any ancestor `$resolve` of that parent).
   *
   * The return value of `$resolve` is a promise for an object that contains
   * (in this order of precedence)
   *
   * - any `locals` (if specified)
   * - the resolved return values of all injectables
   * - any values inherited from a `parent` call to `$resolve` (if specified)
   *
   * The promise will resolve after the `parent` promise (if any) and all promises
   * returned by injectables have been resolved. If any invocable
   * (or `$injector.invoke`) throws an exception, or if a promise returned by an
   * invocable is rejected, the `$resolve` promise is immediately rejected with the
   * same error. A rejection of a `parent` promise (if specified) will likewise be
   * propagated immediately. Once the `$resolve` promise has been rejected, no
   * further invocables will be called.
   *
   * Cyclic dependencies between invocables are not permitted and will caues `$resolve`
   * to throw an error. As a special case, an injectable can depend on a parameter
   * with the same name as the injectable, which will be fulfilled from the `parent`
   * injectable of the same name. This allows inherited values to be decorated.
   * Note that in this case any other injectable in the same `$resolve` with the same
   * dependency would see the decorated value, not the inherited value.
   *
   * Note that missing dependencies -- unlike cyclic dependencies -- will cause an
   * (asynchronous) rejection of the `$resolve` promise rather than a (synchronous)
   * exception.
   *
   * Invocables are invoked eagerly as soon as all dependencies are available.
   * This is true even for dependencies inherited from a `parent` call to `$resolve`.
   *
   * As a special case, an invocable can be a string, in which case it is taken to
   * be a service name to be passed to `$injector.get()`. This is supported primarily
   * for backwards-compatibility with the `resolve` property of `$routeProvider`
   * routes.
   *
   * @param {object} invocables functions to invoke or
   * `$injector` services to fetch.
   * @param {object} locals  values to make available to the injectables
   * @param {object} parent  a promise returned by another call to `$resolve`.
   * @param {object} self  the `this` for the invoked methods
   * @return {object} Promise for an object that contains the resolved return value
   * of all invocables, as well as any inherited and local values.
   */
  this.resolve = function (invocables, locals, parent, self) {
    return this.study(invocables)(locals, parent, self);
  };
}

angular.module('ui.router.util').service('$resolve', $Resolve);


/**
 * @ngdoc object
 * @name ui.router.util.$templateFactory
 *
 * @requires $http
 * @requires $templateCache
 * @requires $injector
 *
 * @description
 * Service. Manages loading of templates.
 */
$TemplateFactory.$inject = ['$http', '$templateCache', '$injector'];
function $TemplateFactory(  $http,   $templateCache,   $injector) {

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromConfig
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template from a configuration object.
   *
   * @param {object} config Configuration object for which to load a template.
   * The following properties are search in the specified order, and the first one
   * that is defined is used to create the template:
   *
   * @param {string|object} config.template html string template or function to
   * load via {@link ui.router.util.$templateFactory#fromString fromString}.
   * @param {string|object} config.templateUrl url to load or a function returning
   * the url to load via {@link ui.router.util.$templateFactory#fromUrl fromUrl}.
   * @param {Function} config.templateProvider function to invoke via
   * {@link ui.router.util.$templateFactory#fromProvider fromProvider}.
   * @param {object} params  Parameters to pass to the template function.
   * @param {object} locals Locals to pass to `invoke` if the template is loaded
   * via a `templateProvider`. Defaults to `{ params: params }`.
   *
   * @return {string|object}  The template html as a string, or a promise for
   * that string,or `null` if no template is configured.
   */
  this.fromConfig = function (config, params, locals) {
    return (
      isDefined(config.template) ? this.fromString(config.template, params) :
      isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) :
      isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) :
      null
    );
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromString
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template from a string or a function returning a string.
   *
   * @param {string|object} template html template as a string or function that
   * returns an html template as a string.
   * @param {object} params Parameters to pass to the template function.
   *
   * @return {string|object} The template html as a string, or a promise for that
   * string.
   */
  this.fromString = function (template, params) {
    return isFunction(template) ? template(params) : template;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromUrl
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Loads a template from the a URL via `$http` and `$templateCache`.
   *
   * @param {string|Function} url url of the template to load, or a function
   * that returns a url.
   * @param {Object} params Parameters to pass to the url function.
   * @return {string|Promise.<string>} The template html as a string, or a promise
   * for that string.
   */
  this.fromUrl = function (url, params) {
    if (isFunction(url)) url = url(params);
    if (url == null) return null;
    else return $http
        .get(url, { cache: $templateCache })
        .then(function(response) { return response.data; });
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromUrl
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template by invoking an injectable provider function.
   *
   * @param {Function} provider Function to invoke via `$injector.invoke`
   * @param {Object} params Parameters for the template.
   * @param {Object} locals Locals to pass to `invoke`. Defaults to
   * `{ params: params }`.
   * @return {string|Promise.<string>} The template html as a string, or a promise
   * for that string.
   */
  this.fromProvider = function (provider, params, locals) {
    return $injector.invoke(provider, null, locals || { params: params });
  };
}

angular.module('ui.router.util').service('$templateFactory', $TemplateFactory);

/**
 * Matches URLs against patterns and extracts named parameters from the path or the search
 * part of the URL. A URL pattern consists of a path pattern, optionally followed by '?' and a list
 * of search parameters. Multiple search parameter names are separated by '&'. Search parameters
 * do not influence whether or not a URL is matched, but their values are passed through into
 * the matched parameters returned by {@link UrlMatcher#exec exec}.
 *
 * Path parameter placeholders can be specified using simple colon/catch-all syntax or curly brace
 * syntax, which optionally allows a regular expression for the parameter to be specified:
 *
 * * ':' name - colon placeholder
 * * '*' name - catch-all placeholder
 * * '{' name '}' - curly placeholder
 * * '{' name ':' regexp '}' - curly placeholder with regexp. Should the regexp itself contain
 *   curly braces, they must be in matched pairs or escaped with a backslash.
 *
 * Parameter names may contain only word characters (latin letters, digits, and underscore) and
 * must be unique within the pattern (across both path and search parameters). For colon
 * placeholders or curly placeholders without an explicit regexp, a path parameter matches any
 * number of characters other than '/'. For catch-all placeholders the path parameter matches
 * any number of characters.
 *
 * ### Examples
 *
 * * '/hello/' - Matches only if the path is exactly '/hello/'. There is no special treatment for
 *   trailing slashes, and patterns have to match the entire path, not just a prefix.
 * * '/user/:id' - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
 *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
 * * '/user/{id}' - Same as the previous example, but using curly brace syntax.
 * * '/user/{id:[^/]*}' - Same as the previous example.
 * * '/user/{id:[0-9a-fA-F]{1,8}}' - Similar to the previous example, but only matches if the id
 *   parameter consists of 1 to 8 hex digits.
 * * '/files/{path:.*}' - Matches any URL starting with '/files/' and captures the rest of the
 *   path into the parameter 'path'.
 * * '/files/*path' - ditto.
 *
 * @constructor
 * @param {string} pattern  the pattern to compile into a matcher.
 *
 * @property {string} prefix  A static prefix of this pattern. The matcher guarantees that any
 *   URL matching this matcher (i.e. any string for which {@link UrlMatcher#exec exec()} returns
 *   non-null) will start with this prefix.
 */
function UrlMatcher(pattern) {

  // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
  //   '*' name
  //   ':' name
  //   '{' name '}'
  //   '{' name ':' regexp '}'
  // The regular expression is somewhat complicated due to the need to allow curly braces
  // inside the regular expression. The placeholder regexp breaks down as follows:
  //    ([:*])(\w+)               classic placeholder ($1 / $2)
  //    \{(\w+)(?:\:( ... ))?\}   curly brace placeholder ($3) with optional regexp ... ($4)
  //    (?: ... | ... | ... )+    the regexp consists of any number of atoms, an atom being either
  //    [^{}\\]+                  - anything other than curly braces or backslash
  //    \\.                       - a backslash escape
  //    \{(?:[^{}\\]+|\\.)*\}     - a matched set of curly braces containing other atoms
  var placeholder = /([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
      names = {}, compiled = '^', last = 0, m,
      segments = this.segments = [],
      params = this.params = [];

  function addParameter(id) {
    if (!/^\w+(-+\w+)*$/.test(id)) throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
    if (names[id]) throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
    names[id] = true;
    params.push(id);
  }

  function quoteRegExp(string) {
    return string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
  }

  this.source = pattern;

  // Split into static segments separated by path parameter placeholders.
  // The number of segments is always 1 more than the number of parameters.
  var id, regexp, segment;
  while ((m = placeholder.exec(pattern))) {
    id = m[2] || m[3]; // IE[78] returns '' for unmatched groups instead of null
    regexp = m[4] || (m[1] == '*' ? '.*' : '[^/]*');
    segment = pattern.substring(last, m.index);
    if (segment.indexOf('?') >= 0) break; // we're into the search part
    compiled += quoteRegExp(segment) + '(' + regexp + ')';
    addParameter(id);
    segments.push(segment);
    last = placeholder.lastIndex;
  }
  segment = pattern.substring(last);

  // Find any search parameter names and remove them from the last segment
  var i = segment.indexOf('?');
  if (i >= 0) {
    var search = this.sourceSearch = segment.substring(i);
    segment = segment.substring(0, i);
    this.sourcePath = pattern.substring(0, last+i);

    // Allow parameters to be separated by '?' as well as '&' to make concat() easier
    forEach(search.substring(1).split(/[&?]/), addParameter);
  } else {
    this.sourcePath = pattern;
    this.sourceSearch = '';
  }

  compiled += quoteRegExp(segment) + '$';
  segments.push(segment);
  this.regexp = new RegExp(compiled);
  this.prefix = segments[0];
}

/**
 * Returns a new matcher for a pattern constructed by appending the path part and adding the
 * search parameters of the specified pattern to this pattern. The current pattern is not
 * modified. This can be understood as creating a pattern for URLs that are relative to (or
 * suffixes of) the current pattern.
 *
 * ### Example
 * The following two matchers are equivalent:
 * ```
 * new UrlMatcher('/user/{id}?q').concat('/details?date');
 * new UrlMatcher('/user/{id}/details?q&date');
 * ```
 *
 * @param {string} pattern  The pattern to append.
 * @return {UrlMatcher}  A matcher for the concatenated pattern.
 */
UrlMatcher.prototype.concat = function (pattern) {
  // Because order of search parameters is irrelevant, we can add our own search
  // parameters to the end of the new pattern. Parse the new pattern by itself
  // and then join the bits together, but it's much easier to do this on a string level.
  return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch);
};

UrlMatcher.prototype.toString = function () {
  return this.source;
};

/**
 * Tests the specified path against this matcher, and returns an object containing the captured
 * parameter values, or null if the path does not match. The returned object contains the values
 * of any search parameters that are mentioned in the pattern, but their value may be null if
 * they are not present in `searchParams`. This means that search parameters are always treated
 * as optional.
 *
 * ### Example
 * ```
 * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', { x:'1', q:'hello' });
 * // returns { id:'bob', q:'hello', r:null }
 * ```
 *
 * @param {string} path  The URL path to match, e.g. `$location.path()`.
 * @param {Object} searchParams  URL search parameters, e.g. `$location.search()`.
 * @return {Object}  The captured parameter values.
 */
UrlMatcher.prototype.exec = function (path, searchParams) {
  var m = this.regexp.exec(path);
  if (!m) return null;

  var params = this.params, nTotal = params.length,
    nPath = this.segments.length-1,
    values = {}, i;

  if (nPath !== m.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");

  for (i=0; i<nPath; i++) values[params[i]] = m[i+1];
  for (/**/; i<nTotal; i++) values[params[i]] = searchParams[params[i]];

  return values;
};

/**
 * Returns the names of all path and search parameters of this pattern in an unspecified order.
 * @return {Array.<string>}  An array of parameter names. Must be treated as read-only. If the
 *    pattern has no parameters, an empty array is returned.
 */
UrlMatcher.prototype.parameters = function () {
  return this.params;
};

/**
 * Creates a URL that matches this pattern by substituting the specified values
 * for the path and search parameters. Null values for path parameters are
 * treated as empty strings.
 *
 * ### Example
 * ```
 * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
 * // returns '/user/bob?q=yes'
 * ```
 *
 * @param {Object} values  the values to substitute for the parameters in this pattern.
 * @return {string}  the formatted URL (path and optionally search part).
 */
UrlMatcher.prototype.format = function (values) {
  var segments = this.segments, params = this.params;
  if (!values) return segments.join('');

  var nPath = segments.length-1, nTotal = params.length,
    result = segments[0], i, search, value;

  for (i=0; i<nPath; i++) {
    value = values[params[i]];
    // TODO: Maybe we should throw on null here? It's not really good style to use '' and null interchangeabley
    if (value != null) result += encodeURIComponent(value);
    result += segments[i+1];
  }
  for (/**/; i<nTotal; i++) {
    value = values[params[i]];
    if (value != null) {
      result += (search ? '&' : '?') + params[i] + '=' + encodeURIComponent(value);
      search = true;
    }
  }

  return result;
};

/**
 * Service. Factory for {@link UrlMatcher} instances. The factory is also available to providers
 * under the name `$urlMatcherFactoryProvider`.
 * @constructor
 * @name $urlMatcherFactory
 */
function $UrlMatcherFactory() {
  /**
   * Creates a {@link UrlMatcher} for the specified pattern.
   * @function
   * @name $urlMatcherFactory#compile
   * @methodOf $urlMatcherFactory
   * @param {string} pattern  The URL pattern.
   * @return {UrlMatcher}  The UrlMatcher.
   */
  this.compile = function (pattern) {
    return new UrlMatcher(pattern);
  };

  /**
   * Returns true if the specified object is a UrlMatcher, or false otherwise.
   * @function
   * @name $urlMatcherFactory#isMatcher
   * @methodOf $urlMatcherFactory
   * @param {Object} o
   * @return {boolean}
   */
  this.isMatcher = function (o) {
    return isObject(o) && isFunction(o.exec) && isFunction(o.format) && isFunction(o.concat);
  };

  this.$get = function () {
    return this;
  };
}

// Register as a provider so it's available to other providers
angular.module('ui.router.util').provider('$urlMatcherFactory', $UrlMatcherFactory);

/**
 * @ngdoc object
 * @name ui.router.router.$urlRouterProvider
 *
 * @requires ui.router.util.$urlMatcherFactoryProvider
 *
 * @description
 * `$urlRouterProvider` has the responsibility of watching `$location`.
 * When `$location` changes it runs through a list of rules one by one until a
 * match is found. `$urlRouterProvider` is used behind the scenes anytime you specify
 * a url in a state configuration. All urls are compiled into a UrlMatcher object.
 *
 * There are several methods on `$urlRouterProvider` that make it useful to use directly
 * in your module config.
 */
$UrlRouterProvider.$inject = ['$urlMatcherFactoryProvider'];
function $UrlRouterProvider(  $urlMatcherFactory) {
  var rules = [],
      otherwise = null;

  // Returns a string that is a prefix of all strings matching the RegExp
  function regExpPrefix(re) {
    var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
    return (prefix != null) ? prefix[1].replace(/\\(.)/g, "$1") : '';
  }

  // Interpolates matched values into a String.replace()-style pattern
  function interpolate(pattern, match) {
    return pattern.replace(/\$(\$|\d{1,2})/, function (m, what) {
      return match[what === '$' ? 0 : Number(what)];
    });
  }

  /**
   * @ngdoc function
   * @name ui.router.router.$urlRouterProvider#rule
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Defines rules that are used by `$urlRouterProvider to find matches for
   * specific URLs.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *   // Here's an example of how you might allow case insensitive urls
   *   $urlRouterProvider.rule(function ($injector, $location) {
   *     var path = $location.path(),
   *         normalized = path.toLowerCase();
   *
   *     if (path !== normalized) {
   *       return normalized;
   *     }
   *   });
   * });
   * </pre>
   *
   * @param {object} rule Handler function that takes `$injector` and `$location`
   * services as arguments. You can use them to return a valid path as a string.
   *
   * @return {object} $urlRouterProvider - $urlRouterProvider instance
   */
  this.rule =
    function (rule) {
      if (!isFunction(rule)) throw new Error("'rule' must be a function");
      rules.push(rule);
      return this;
    };

  /**
   * @ngdoc object
   * @name ui.router.router.$urlRouterProvider#otherwise
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Defines a path that is used when an invalied route is requested.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *   // if the path doesn't match any of the urls you configured
   *   // otherwise will take care of routing the user to the
   *   // specified url
   *   $urlRouterProvider.otherwise('/index');
   *
   *   // Example of using function rule as param
   *   $urlRouterProvider.otherwise(function ($injector, $location) {
   *     ...
   *   });
   * });
   * </pre>
   *
   * @param {string|object} rule The url path you want to redirect to or a function
   * rule that returns the url path. The function version is passed two params:
   * `$injector` and `$location` services.
   *
   * @return {object} $urlRouterProvider - $urlRouterProvider instance
   */
  this.otherwise =
    function (rule) {
      if (isString(rule)) {
        var redirect = rule;
        rule = function () { return redirect; };
      }
      else if (!isFunction(rule)) throw new Error("'rule' must be a function");
      otherwise = rule;
      return this;
    };


  function handleIfMatch($injector, handler, match) {
    if (!match) return false;
    var result = $injector.invoke(handler, handler, { $match: match });
    return isDefined(result) ? result : true;
  }

  /**
   * @ngdoc function
   * @name ui.router.router.$urlRouterProvider#when
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Registers a handler for a given url matching. if handle is a string, it is
   * treated as a redirect, and is interpolated according to the syyntax of match
   * (i.e. like String.replace() for RegExp, or like a UrlMatcher pattern otherwise).
   *
   * If the handler is a function, it is injectable. It gets invoked if `$location`
   * matches. You have the option of inject the match object as `$match`.
   *
   * The handler can return
   *
   * - **falsy** to indicate that the rule didn't match after all, then `$urlRouter`
   *   will continue trying to find another one that matches.
   * - **string** which is treated as a redirect and passed to `$location.url()`
   * - **void** or any **truthy** value tells `$urlRouter` that the url was handled.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *   $urlRouterProvider.when($state.url, function ($match, $stateParams) {
   *     if ($state.$current.navigable !== state ||
   *         !equalForKeys($match, $stateParams) {
   *      $state.transitionTo(state, $match, false);
   *     }
   *   });
   * });
   * </pre>
   *
   * @param {string|object} what The incoming path that you want to redirect.
   * @param {string|object} handler The path you want to redirect your user to.
   */
  this.when =
    function (what, handler) {
      var redirect, handlerIsString = isString(handler);
      if (isString(what)) what = $urlMatcherFactory.compile(what);

      if (!handlerIsString && !isFunction(handler) && !isArray(handler))
        throw new Error("invalid 'handler' in when()");

      var strategies = {
        matcher: function (what, handler) {
          if (handlerIsString) {
            redirect = $urlMatcherFactory.compile(handler);
            handler = ['$match', function ($match) { return redirect.format($match); }];
          }
          return extend(function ($injector, $location) {
            return handleIfMatch($injector, handler, what.exec($location.path(), $location.search()));
          }, {
            prefix: isString(what.prefix) ? what.prefix : ''
          });
        },
        regex: function (what, handler) {
          if (what.global || what.sticky) throw new Error("when() RegExp must not be global or sticky");

          if (handlerIsString) {
            redirect = handler;
            handler = ['$match', function ($match) { return interpolate(redirect, $match); }];
          }
          return extend(function ($injector, $location) {
            return handleIfMatch($injector, handler, what.exec($location.path()));
          }, {
            prefix: regExpPrefix(what)
          });
        }
      };

      var check = { matcher: $urlMatcherFactory.isMatcher(what), regex: what instanceof RegExp };

      for (var n in check) {
        if (check[n]) {
          return this.rule(strategies[n](what, handler));
        }
      }

      throw new Error("invalid 'what' in when()");
    };

  /**
   * @ngdoc object
   * @name ui.router.router.$urlRouter
   *
   * @requires $location
   * @requires $rootScope
   * @requires $injector
   *
   * @description
   *
   */
  this.$get =
    [        '$location', '$rootScope', '$injector',
    function ($location,   $rootScope,   $injector) {
      // TODO: Optimize groups of rules with non-empty prefix into some sort of decision tree
      function update(evt) {
        if (evt && evt.defaultPrevented) return;
        function check(rule) {
          var handled = rule($injector, $location);
          if (handled) {
            if (isString(handled)) $location.replace().url(handled);
            return true;
          }
          return false;
        }
        var n=rules.length, i;
        for (i=0; i<n; i++) {
          if (check(rules[i])) return;
        }
        // always check otherwise last to allow dynamic updates to the set of rules
        if (otherwise) check(otherwise);
      }

      $rootScope.$on('$locationChangeSuccess', update);

      return {
        /**
         * @ngdoc function
         * @name ui.router.router.$urlRouter#sync
         * @methodOf ui.router.router.$urlRouter
         *
         * @description
         * Triggers an update; the same update that happens when the address bar url changes, aka `$locationChangeSuccess`.
         * This method is useful when you need to use `preventDefault()` on the `$locationChangeSuccess` event,
         * perform some custom logic (route protection, auth, config, redirection, etc) and then finally proceed
         * with the transition by calling `$urlRouter.sync()`.
         *
         * @example
         * <pre>
         * angular.module('app', ['ui.router']);
         *   .run(function($rootScope, $urlRouter) {
         *     $rootScope.$on('$locationChangeSuccess', function(evt) {
         *       // Halt state change from even starting
         *       evt.preventDefault();
         *       // Perform custom logic
         *       var meetsRequirement = ...
         *       // Continue with the update and state transition if logic allows
         *       if (meetsRequirement) $urlRouter.sync();
         *     });
         * });
         * </pre>
         */
        sync: function () {
          update();
        }
      };
    }];
}

angular.module('ui.router.router').provider('$urlRouter', $UrlRouterProvider);

/**
 * @ngdoc object
 * @name ui.router.state.$stateProvider
 *
 * @requires ui.router.router.$urlRouterProvider
 * @requires ui.router.util.$urlMatcherFactoryProvider
 * @requires $locationProvider
 *
 * @description
 * The new `$stateProvider` works similar to Angular's v1 router, but it focuses purely
 * on state.
 *
 * A state corresponds to a "place" in the application in terms of the overall UI and
 * navigation. A state describes (via the controller / template / view properties) what
 * the UI looks like and does at that place.
 *
 * States often have things in common, and the primary way of factoring out these
 * commonalities in this model is via the state hierarchy, i.e. parent/child states aka
 * nested states.
 *
 * The `$stateProvider` provides interfaces to declare these states for your app.
 */
$StateProvider.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider', '$locationProvider'];
function $StateProvider(   $urlRouterProvider,   $urlMatcherFactory,           $locationProvider) {

  var root, states = {}, $state, queue = {}, abstractKey = 'abstract';

  // Builds state properties from definition passed to registerState()
  var stateBuilder = {

    // Derive parent state from a hierarchical name only if 'parent' is not explicitly defined.
    // state.children = [];
    // if (parent) parent.children.push(state);
    parent: function(state) {
      if (isDefined(state.parent) && state.parent) return findState(state.parent);
      // regex matches any valid composite state name
      // would match "contact.list" but not "contacts"
      var compositeName = /^(.+)\.[^.]+$/.exec(state.name);
      return compositeName ? findState(compositeName[1]) : root;
    },

    // inherit 'data' from parent and override by own values (if any)
    data: function(state) {
      if (state.parent && state.parent.data) {
        state.data = state.self.data = extend({}, state.parent.data, state.data);
      }
      return state.data;
    },

    // Build a URLMatcher if necessary, either via a relative or absolute URL
    url: function(state) {
      var url = state.url;

      if (isString(url)) {
        if (url.charAt(0) == '^') {
          return $urlMatcherFactory.compile(url.substring(1));
        }
        return (state.parent.navigable || root).url.concat(url);
      }

      if ($urlMatcherFactory.isMatcher(url) || url == null) {
        return url;
      }
      throw new Error("Invalid url '" + url + "' in state '" + state + "'");
    },

    // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
    navigable: function(state) {
      return state.url ? state : (state.parent ? state.parent.navigable : null);
    },

    // Derive parameters for this state and ensure they're a super-set of parent's parameters
    params: function(state) {
      if (!state.params) {
        return state.url ? state.url.parameters() : state.parent.params;
      }
      if (!isArray(state.params)) throw new Error("Invalid params in state '" + state + "'");
      if (state.url) throw new Error("Both params and url specicified in state '" + state + "'");
      return state.params;
    },

    // If there is no explicit multi-view configuration, make one up so we don't have
    // to handle both cases in the view directive later. Note that having an explicit
    // 'views' property will mean the default unnamed view properties are ignored. This
    // is also a good time to resolve view names to absolute names, so everything is a
    // straight lookup at link time.
    views: function(state) {
      var views = {};

      forEach(isDefined(state.views) ? state.views : { '': state }, function (view, name) {
        if (name.indexOf('@') < 0) name += '@' + state.parent.name;
        views[name] = view;
      });
      return views;
    },

    ownParams: function(state) {
      if (!state.parent) {
        return state.params;
      }
      var paramNames = {}; forEach(state.params, function (p) { paramNames[p] = true; });

      forEach(state.parent.params, function (p) {
        if (!paramNames[p]) {
          throw new Error("Missing required parameter '" + p + "' in state '" + state.name + "'");
        }
        paramNames[p] = false;
      });
      var ownParams = [];

      forEach(paramNames, function (own, p) {
        if (own) ownParams.push(p);
      });
      return ownParams;
    },

    // Keep a full path from the root down to this state as this is needed for state activation.
    path: function(state) {
      return state.parent ? state.parent.path.concat(state) : []; // exclude root from path
    },

    // Speed up $state.contains() as it's used a lot
    includes: function(state) {
      var includes = state.parent ? extend({}, state.parent.includes) : {};
      includes[state.name] = true;
      return includes;
    },

    $delegates: {}
  };

  function isRelative(stateName) {
    return stateName.indexOf(".") === 0 || stateName.indexOf("^") === 0;
  }

  function findState(stateOrName, base) {
    var isStr = isString(stateOrName),
        name  = isStr ? stateOrName : stateOrName.name,
        path  = isRelative(name);

    if (path) {
      if (!base) throw new Error("No reference point given for path '"  + name + "'");
      var rel = name.split("."), i = 0, pathLength = rel.length, current = base;

      for (; i < pathLength; i++) {
        if (rel[i] === "" && i === 0) {
          current = base;
          continue;
        }
        if (rel[i] === "^") {
          if (!current.parent) throw new Error("Path '" + name + "' not valid for state '" + base.name + "'");
          current = current.parent;
          continue;
        }
        break;
      }
      rel = rel.slice(i).join(".");
      name = current.name + (current.name && rel ? "." : "") + rel;
    }
    var state = states[name];

    if (state && (isStr || (!isStr && (state === stateOrName || state.self === stateOrName)))) {
      return state;
    }
    return undefined;
  }

  function queueState(parentName, state) {
    if (!queue[parentName]) {
      queue[parentName] = [];
    }
    queue[parentName].push(state);
  }

  function registerState(state) {
    // Wrap a new object around the state so we can store our private details easily.
    state = inherit(state, {
      self: state,
      resolve: state.resolve || {},
      toString: function() { return this.name; }
    });

    var name = state.name;
    if (!isString(name) || name.indexOf('@') >= 0) throw new Error("State must have a valid name");
    if (states.hasOwnProperty(name)) throw new Error("State '" + name + "'' is already defined");

    // Get parent name
    var parentName = (name.indexOf('.') !== -1) ? name.substring(0, name.lastIndexOf('.'))
        : (isString(state.parent)) ? state.parent
        : '';

    // If parent is not registered yet, add state to queue and register later
    if (parentName && !states[parentName]) {
      return queueState(parentName, state.self);
    }

    for (var key in stateBuilder) {
      if (isFunction(stateBuilder[key])) state[key] = stateBuilder[key](state, stateBuilder.$delegates[key]);
    }
    states[name] = state;

    // Register the state in the global state list and with $urlRouter if necessary.
    if (!state[abstractKey] && state.url) {
      $urlRouterProvider.when(state.url, ['$match', '$stateParams', function ($match, $stateParams) {
        if ($state.$current.navigable != state || !equalForKeys($match, $stateParams)) {
          $state.transitionTo(state, $match, { location: false });
        }
      }]);
    }

    // Register any queued children
    if (queue[name]) {
      for (var i = 0; i < queue[name].length; i++) {
        registerState(queue[name][i]);
      }
    }

    return state;
  }


  // Implicit root state that is always active
  root = registerState({
    name: '',
    url: '^',
    views: null,
    'abstract': true
  });
  root.navigable = null;


  /**
   * @ngdoc function
   * @name ui.router.state.$stateProvider#decorator
   * @methodOf ui.router.state.$stateProvider
   *
   * @description
   * Allows you to extend (carefully) or override (at your own peril) the
   * `stateBuilder` object used internally by `$stateProvider`. This can be used
   * to add custom functionality to ui-router, for example inferring templateUrl
   * based on the state name.
   *
   * When passing only a name, it returns the current (original or decorated) builder
   * function that matches `name`.
   *
   * The builder functions that can be decorated are listed below. Though not all
   * necessarily have a good use case for decoration, that is up to you to decide.
   *
   * In addition, users can attach custom decorators, which will generate new
   * properties within the state's internal definition. There is currently no clear
   * use-case for this beyond accessing internal states (i.e. $state.$current),
   * however, expect this to become increasingly relevant as we introduce additional
   * meta-programming features.
   *
   * **Warning**: Decorators should not be interdependent because the order of
   * execution of the builder functions in nondeterministic. Builder functions
   * should only be dependent on the state definition object and super function.
   *
   *
   * Existing builder functions and current return values:
   *
   * - parent - `{object}` - returns the parent state object.
   * - data - `{object}` - returns state data, including any inherited data that is not
   *   overridden by own values (if any).
   * - url - `{object}` - returns a UrlMatcher or null.
   * - navigable - returns closest ancestor state that has a URL (aka is
   *   navigable).
   * - params - `{object}` - returns an array of state params that are ensured to
   *   be a super-set of parent's params.
   * - views - `{object}` - returns a views object where each key is an absolute view
   *   name (i.e. "viewName@stateName") and each value is the config object
   *   (template, controller) for the view. Even when you don't use the views object
   *   explicitly on a state config, one is still created for you internally.
   *   So by decorating this builder function you have access to decorating template
   *   and controller properties.
   * - ownParams - `{object}` - returns an array of params that belong to the state,
   *   not including any params defined by ancestor states.
   * - path - `{string}` - returns the full path from the root down to this state.
   *   Needed for state activation.
   * - includes - `{object}` - returns an object that includes every state that
   *   would pass a '$state.includes()' test.
   *
   * @example
   * <pre>
   * // Override the internal 'views' builder with a function that takes the state
   * // definition, and a reference to the internal function being overridden:
   * $stateProvider.decorator('views', function ($state, parent) {
   *   var result = {},
   *       views = parent(state);
   *
   *   angular.forEach(view, function (config, name) {
   *     var autoName = (state.name + '.' + name).replace('.', '/');
   *     config.templateUrl = config.templateUrl || '/partials/' + autoName + '.html';
   *     result[name] = config;
   *   });
   *   return result;
   * });
   *
   * $stateProvider.state('home', {
   *   views: {
   *     'contact.list': { controller: 'ListController' },
   *     'contact.item': { controller: 'ItemController' }
   *   }
   * });
   *
   * // ...
   *
   * $state.go('home');
   * // Auto-populates list and item views with /partials/home/contact/list.html,
   * // and /partials/home/contact/item.html, respectively.
   * </pre>
   *
   * @param {string} name The name of the builder function to decorate.
   * @param {object} func A function that is responsible for decorating the original
   * builder function. The function receives two parameters:
   *
   *   - `{object}` - state - The state config object.
   *   - `{object}` - super - The original builder function.
   *
   * @return {object} $stateProvider - $stateProvider instance
   */
  this.decorator = decorator;
  function decorator(name, func) {
    /*jshint validthis: true */
    if (isString(name) && !isDefined(func)) {
      return stateBuilder[name];
    }
    if (!isFunction(func) || !isString(name)) {
      return this;
    }
    if (stateBuilder[name] && !stateBuilder.$delegates[name]) {
      stateBuilder.$delegates[name] = stateBuilder[name];
    }
    stateBuilder[name] = func;
    return this;
  }

  /**
   * @ngdoc function
   * @name ui.router.state.$stateProvider#state
   * @methodOf ui.router.state.$stateProvider
   *
   * @description
   * Registers a state configuration under a given state name. The stateConfig object
   * has the following acceptable properties.
   *
   * - [`template`, `templateUrl`, `templateProvider`] - There are three ways to setup
   *   your templates.
   *
   *   - `{string|object}` - template - String HTML content, or function that returns an HTML
   *   string.
   *   - `{string}` - templateUrl - String URL path to template file OR function,
   *   that returns URL path string.
   *   - `{object}` - templateProvider - Provider function that returns HTML content
   *   string.
   *
   * - [`controller`, `controllerProvider`] - A controller paired to the state. You can
   *   either use a controller, or a controller provider.
   *
   *   - `{string|object}` - controller - Controller function or controller name.
   *   - `{object}` - controllerProvider - Injectable provider function that returns
   *   the actual controller or string.
   *
   * - `{object}` - resolve - A map of dependencies which should be injected into the
   *   controller.
   *
   * - `{string}` - url - A url with optional parameters. When a state is navigated or
   *   transitioned to, the `$stateParams` service will be populated with any
   *   parameters that were passed.
   *
   * - `{object}` - params - An array of parameter names or regular expressions. Only
   *   use this within a state if you are not using url. Otherwise you can specify your
   *   parameters within the url. When a state is navigated or transitioned to, the
   *   $stateParams service will be populated with any parameters that were passed.
   *
   * - `{object}` - views - Use the views property to set up multiple views.
   *   If you don't need multiple views within a single state this property is not
   *   needed. Tip: remember that often nested views are more useful and powerful
   *   than multiple sibling views.
   *
   * - `{boolean}` - abstract - An abstract state will never be directly activated,
   *   but can provide inherited properties to its common children states.
   *
   * - `{object}` - onEnter - Callback function for when a state is entered. Good way
   *   to trigger an action or dispatch an event, such as opening a dialog.
   *
   * - `{object}` - onExit - Callback function for when a state is exited. Good way to
   *   trigger an action or dispatch an event, such as opening a dialog.
   *
   * - `{object}` - data - Arbitrary data object, useful for custom configuration.
   *
   * @example
   * <pre>
   * // The state() method takes a unique stateName (String) and a stateConfig (Object)
   * $stateProvider.state(stateName, stateConfig);
   *
   * // stateName can be a single top-level name (must be unique).
   * $stateProvider.state("home", {});
   *
   * // Or it can be a nested state name. This state is a child of the above "home" state.
   * $stateProvider.state("home.newest", {});
   *
   * // Nest states as deeply as needed.
   * $stateProvider.state("home.newest.abc.xyz.inception", {});
   *
   * // state() returns $stateProvider, so you can chain state declarations.
   * $stateProvider
   *   .state("home", {})
   *   .state("about", {})
   *   .state("contacts", {});
   * </pre>
   *
   * @param {string} name A unique state name, e.g. "home", "about", "contacts".
   * To create a parent/child state use a dot, e.g. "about.sales", "home.newest".
   * @param {object} definition State configuratino object.
   */
  this.state = state;
  function state(name, definition) {
    /*jshint validthis: true */
    if (isObject(name)) definition = name;
    else definition.name = name;
    registerState(definition);
    return this;
  }

  /**
   * @ngdoc object
   * @name ui.router.state.$state
   *
   * @requires $rootScope
   * @requires $q
   * @requires ui.router.state.$view
   * @requires $injector
   * @requires ui.router.util.$resolve
   * @requires ui.router.state.$stateParams
   *
   * @property {object} params A param object, e.g. {sectionId: section.id)}, that
   * you'd like to test against the current active state.
   * @property {object} current A reference to the state's config object. However
   * you passed it in. Useful for accessing custom data.
   * @property {object} transition Currently pending transition. A promise that'll
   * resolve or reject.
   *
   * @description
   * `$state` service is responsible for representing states as well as transitioning
   * between them. It also provides interfaces to ask for current state or even states
   * you're coming from.
   */
  // $urlRouter is injected just to ensure it gets instantiated
  this.$get = $get;
  $get.$inject = ['$rootScope', '$q', '$view', '$injector', '$resolve', '$stateParams', '$location', '$urlRouter'];
  function $get(   $rootScope,   $q,   $view,   $injector,   $resolve,   $stateParams,   $location,   $urlRouter) {

    var TransitionSuperseded = $q.reject(new Error('transition superseded'));
    var TransitionPrevented = $q.reject(new Error('transition prevented'));
    var TransitionAborted = $q.reject(new Error('transition aborted'));
    var TransitionFailed = $q.reject(new Error('transition failed'));
    var currentLocation = $location.url();

    function syncUrl() {
      if ($location.url() !== currentLocation) {
        $location.url(currentLocation);
        $location.replace();
      }
    }

    root.locals = { resolve: null, globals: { $stateParams: {} } };
    $state = {
      params: {},
      current: root.self,
      $current: root,
      transition: null
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#reload
     * @methodOf ui.router.state.$state
     *
     * @description
     * Reloads the current state by re-transitioning to it.
     *
     * @example
     * <pre>
     * var app angular.module('app', ['ui.router.state']);
     *
     * app.controller('ctrl', function ($state) {
     *   $state.reload();
     * });
     * </pre>
     */
    $state.reload = function reload() {
      $state.transitionTo($state.current, $stateParams, { reload: true, inherit: false, notify: false });
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#go
     * @methodOf ui.router.state.$state
     *
     * @description
     * Convenience method for transitioning to a new state. `$state.go` calls
     * `$state.transitionTo` internally but automatically sets options to
     * `{ location: true, inherit: true, relative: $state.$current, notify: true }`.
     * This allows you to easily use an absolute or relative to path and specify
     * only the parameters you'd like to update (while letting unspecified parameters
     * inherit from the current state.
     *
     * Some examples:
     *
     * - `$state.go('contact.detail')` - will go to the `contact.detail` state
     * - `$state.go('^')` - will go to a parent state
     * - `$state.go('^.sibling')` - will go to a sibling state
     * - `$state.go('.child.grandchild')` - will go to grandchild state
     *
     * @example
     * <pre>
     * var app = angular.module('app', ['ui.router.state']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.changeState = function () {
     *     $state.go('contact.detail');
     *   };
     * });
     * </pre>
     *
     * @param {string} to Absolute State Name or Relative State Path.
     * @param {object} params A map of the parameters that will be sent to the state,
     * will populate $stateParams.
     * @param {object} options If Object is passed, object is an options hash.
     */
    $state.go = function go(to, params, options) {
      return this.transitionTo(to, params, extend({ inherit: true, relative: $state.$current }, options));
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#transitionTo
     * @methodOf ui.router.state.$state
     *
     * @description
     * Low-level method for transitioning to a new state. {@link ui.router.state.$state#methods_go $state.go}
     * uses `transitionTo` internally. `$state.go` is recommended in most situations.
     *
     * @example
     * <pre>
     * var app = angular.module('app', ['ui.router.state']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.changeState = function () {
     *     $state.transitionTo('contact.detail');
     *   };
     * });
     * </pre>
     *
     * @param {string} to Absolute State Name or Relative State Path.
     * @param {object} params A map of the parameters that will be sent to the state,
     * will populate $stateParams.
     * @param {object} options If Object is passed, object is an options hash.
     */
    $state.transitionTo = function transitionTo(to, toParams, options) {
      toParams = toParams || {};
      options = extend({
        location: true, inherit: false, relative: null, notify: true, reload: false, $retry: false
      }, options || {});

      var from = $state.$current, fromParams = $state.params, fromPath = from.path;
      var evt, toState = findState(to, options.relative);

      if (!isDefined(toState)) {
        // Broadcast not found event and abort the transition if prevented
        var redirect = { to: to, toParams: toParams, options: options };
        evt = $rootScope.$broadcast('$stateNotFound', redirect, from.self, fromParams);
        if (evt.defaultPrevented) {
          syncUrl();
          return TransitionAborted;
        }

        // Allow the handler to return a promise to defer state lookup retry
        if (evt.retry) {
          if (options.$retry) {
            syncUrl();
            return TransitionFailed;
          }
          var retryTransition = $state.transition = $q.when(evt.retry);
          retryTransition.then(function() {
            if (retryTransition !== $state.transition) return TransitionSuperseded;
            redirect.options.$retry = true;
            return $state.transitionTo(redirect.to, redirect.toParams, redirect.options);
          }, function() {
            return TransitionAborted;
          });
          syncUrl();
          return retryTransition;
        }

        // Always retry once if the $stateNotFound was not prevented
        // (handles either redirect changed or state lazy-definition)
        to = redirect.to;
        toParams = redirect.toParams;
        options = redirect.options;
        toState = findState(to, options.relative);
        if (!isDefined(toState)) {
          if (options.relative) throw new Error("Could not resolve '" + to + "' from state '" + options.relative + "'");
          throw new Error("No such state '" + to + "'");
        }
      }
      if (toState[abstractKey]) throw new Error("Cannot transition to abstract state '" + to + "'");
      if (options.inherit) toParams = inheritParams($stateParams, toParams || {}, $state.$current, toState);
      to = toState;

      var toPath = to.path;

      // Starting from the root of the path, keep all levels that haven't changed
      var keep, state, locals = root.locals, toLocals = [];
      for (keep = 0, state = toPath[keep];
           state && state === fromPath[keep] && equalForKeys(toParams, fromParams, state.ownParams) && !options.reload;
           keep++, state = toPath[keep]) {
        locals = toLocals[keep] = state.locals;
      }

      // If we're going to the same state and all locals are kept, we've got nothing to do.
      // But clear 'transition', as we still want to cancel any other pending transitions.
      // TODO: We may not want to bump 'transition' if we're called from a location change that we've initiated ourselves,
      // because we might accidentally abort a legitimate transition initiated from code?
      if (shouldTriggerReload(to, from, locals, options) ) {
        if ( to.self.reloadOnSearch !== false )
          syncUrl();
        $state.transition = null;
        return $q.when($state.current);
      }

      // Normalize/filter parameters before we pass them to event handlers etc.
      toParams = normalize(to.params, toParams || {});

      // Broadcast start event and cancel the transition if requested
      if (options.notify) {
        evt = $rootScope.$broadcast('$stateChangeStart', to.self, toParams, from.self, fromParams);
        if (evt.defaultPrevented) {
          syncUrl();
          return TransitionPrevented;
        }
      }

      // Resolve locals for the remaining states, but don't update any global state just
      // yet -- if anything fails to resolve the current state needs to remain untouched.
      // We also set up an inheritance chain for the locals here. This allows the view directive
      // to quickly look up the correct definition for each view in the current state. Even
      // though we create the locals object itself outside resolveState(), it is initially
      // empty and gets filled asynchronously. We need to keep track of the promise for the
      // (fully resolved) current locals, and pass this down the chain.
      var resolved = $q.when(locals);
      for (var l=keep; l<toPath.length; l++, state=toPath[l]) {
        locals = toLocals[l] = inherit(locals);
        resolved = resolveState(state, toParams, state===to, resolved, locals);
      }

      // Once everything is resolved, we are ready to perform the actual transition
      // and return a promise for the new state. We also keep track of what the
      // current promise is, so that we can detect overlapping transitions and
      // keep only the outcome of the last transition.
      var transition = $state.transition = resolved.then(function () {
        var l, entering, exiting;

        if ($state.transition !== transition) return TransitionSuperseded;

        // Exit 'from' states not kept
        for (l=fromPath.length-1; l>=keep; l--) {
          exiting = fromPath[l];
          if (exiting.self.onExit) {
            $injector.invoke(exiting.self.onExit, exiting.self, exiting.locals.globals);
          }
          exiting.locals = null;
        }

        // Enter 'to' states not kept
        for (l=keep; l<toPath.length; l++) {
          entering = toPath[l];
          entering.locals = toLocals[l];
          if (entering.self.onEnter) {
            $injector.invoke(entering.self.onEnter, entering.self, entering.locals.globals);
          }
        }

        // Run it again, to catch any transitions in callbacks
        if ($state.transition !== transition) return TransitionSuperseded;

        // Update globals in $state
        $state.$current = to;
        $state.current = to.self;
        $state.params = toParams;
        copy($state.params, $stateParams);
        $state.transition = null;

        // Update $location
        var toNav = to.navigable;
        if (options.location && toNav) {
          $location.url(toNav.url.format(toNav.locals.globals.$stateParams));

          if (options.location === 'replace') {
            $location.replace();
          }
        }

        if (options.notify) {
          $rootScope.$broadcast('$stateChangeSuccess', to.self, toParams, from.self, fromParams);
        }
        currentLocation = $location.url();

        return $state.current;
      }, function (error) {
        if ($state.transition !== transition) return TransitionSuperseded;

        $state.transition = null;
        $rootScope.$broadcast('$stateChangeError', to.self, toParams, from.self, fromParams, error);
        syncUrl();

        return $q.reject(error);
      });

      return transition;
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#is
     * @methodOf ui.router.state.$state
     *
     * @description
     * Similar to {@link ui.router.state.$state#methods_includes $state.includes},
     * but only checks for the full state name. If params is supplied then it will be
     * tested for strict equality against the current active params object, so all params
     * must match with none missing and no extras.
     *
     * @example
     * <pre>
     * $state.is('contact.details.item'); // returns true
     * $state.is(contactDetailItemStateObject); // returns true
     *
     * // everything else would return false
     * </pre>
     *
     * @param {string|object} stateName The state name or state object you'd like to check.
     * @param {object} params A param object, e.g. `{sectionId: section.id}`, that you'd like
     * to test against the current active state.
     * @returns {boolean} Returns true or false whether its the state or not.
     */
    $state.is = function is(stateOrName, params) {
      var state = findState(stateOrName);

      if (!isDefined(state)) {
        return undefined;
      }

      if ($state.$current !== state) {
        return false;
      }

      return isDefined(params) && params !== null ? angular.equals($stateParams, params) : true;
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#includes
     * @methodOf ui.router.state.$state
     *
     * @description
     * A method to determine if the current active state is equal to or is the child of the
     * state stateName. If any params are passed then they will be tested for a match as well.
     * Not all the parameters need to be passed, just the ones you'd like to test for equality.
     *
     * @example
     * <pre>
     * $state.includes("contacts"); // returns true
     * $state.includes("contacts.details"); // returns true
     * $state.includes("contacts.details.item"); // returns true
     * $state.includes("contacts.list"); // returns false
     * $state.includes("about"); // returns false
     * </pre>
     *
     * @param {string} stateOrName A partial name to be searched for within the current state name.
     * @param {object} params A param object, e.g. `{sectionId: section.id}`,
     * that you'd like to test against the current active state.
     * @returns {boolean} True or false
     */
    $state.includes = function includes(stateOrName, params) {
      var state = findState(stateOrName);
      if (!isDefined(state)) {
        return undefined;
      }

      if (!isDefined($state.$current.includes[state.name])) {
        return false;
      }

      var validParams = true;
      angular.forEach(params, function(value, key) {
        if (!isDefined($stateParams[key]) || $stateParams[key] !== value) {
          validParams = false;
        }
      });
      return validParams;
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#href
     * @methodOf ui.router.state.$state
     *
     * @description
     * A url generation method that returns the compiled url for the given state populated with the given params.
     *
     * @example
     * <pre>
     * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
     * </pre>
     *
     * @param {string|object} stateOrName The state name or state object you'd like to generate a url from.
     * @param {object} params An object of parameter values to fill the state's required parameters.
     * @returns {string} url
     */
    $state.href = function href(stateOrName, params, options) {
      options = extend({ lossy: true, inherit: false, absolute: false, relative: $state.$current }, options || {});
      var state = findState(stateOrName, options.relative);
      if (!isDefined(state)) return null;

      params = inheritParams($stateParams, params || {}, $state.$current, state);
      var nav = (state && options.lossy) ? state.navigable : state;
      var url = (nav && nav.url) ? nav.url.format(normalize(state.params, params || {})) : null;
      if (!$locationProvider.html5Mode() && url) {
        url = "#" + $locationProvider.hashPrefix() + url;
      }
      if (options.absolute && url) {
        url = $location.protocol() + '://' +
              $location.host() +
              ($location.port() == 80 || $location.port() == 443 ? '' : ':' + $location.port()) +
              (!$locationProvider.html5Mode() && url ? '/' : '') +
              url;
      }
      return url;
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#get
     * @methodOf ui.router.state.$state
     *
     * @description
     * Returns the state configuration object for any state by passing the name
     * as a string. Without any arguments it'll return a array of all configured
     * state objects.
     *
     * @param {string|object} stateOrName The name of the state for which you'd like
     * to get the original state configuration object for.
     * @returns {object} State configuration object or array of all objects.
     */
    $state.get = function (stateOrName, context) {
      if (!isDefined(stateOrName)) {
        var list = [];
        forEach(states, function(state) { list.push(state.self); });
        return list;
      }
      var state = findState(stateOrName, context);
      return (state && state.self) ? state.self : null;
    };

    function resolveState(state, params, paramsAreFiltered, inherited, dst) {
      // Make a restricted $stateParams with only the parameters that apply to this state if
      // necessary. In addition to being available to the controller and onEnter/onExit callbacks,
      // we also need $stateParams to be available for any $injector calls we make during the
      // dependency resolution process.
      var $stateParams = (paramsAreFiltered) ? params : filterByKeys(state.params, params);
      var locals = { $stateParams: $stateParams };

      // Resolve 'global' dependencies for the state, i.e. those not specific to a view.
      // We're also including $stateParams in this; that way the parameters are restricted
      // to the set that should be visible to the state, and are independent of when we update
      // the global $state and $stateParams values.
      dst.resolve = $resolve.resolve(state.resolve, locals, dst.resolve, state);
      var promises = [ dst.resolve.then(function (globals) {
        dst.globals = globals;
      }) ];
      if (inherited) promises.push(inherited);

      // Resolve template and dependencies for all views.
      forEach(state.views, function (view, name) {
        var injectables = (view.resolve && view.resolve !== state.resolve ? view.resolve : {});
        injectables.$template = [ function () {
          return $view.load(name, { view: view, locals: locals, params: $stateParams, notify: false }) || '';
        }];

        promises.push($resolve.resolve(injectables, locals, dst.resolve, state).then(function (result) {
          // References to the controller (only instantiated at link time)
          if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
            var injectLocals = angular.extend({}, injectables, locals);
            result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
          } else {
            result.$$controller = view.controller;
          }
          // Provide access to the state itself for internal use
          result.$$state = state;
          dst[name] = result;
        }));
      });

      // Wait for all the promises and then return the activation object
      return $q.all(promises).then(function (values) {
        return dst;
      });
    }

    return $state;
  }

  function shouldTriggerReload(to, from, locals, options) {
    if ( to === from && ((locals === from.locals && !options.reload) || (to.self.reloadOnSearch === false)) ) {
      return true;
    }
  }
}

angular.module('ui.router.state')
  .value('$stateParams', {})
  .provider('$state', $StateProvider);


$ViewProvider.$inject = [];
function $ViewProvider() {

  this.$get = $get;
  /**
   * @ngdoc object
   * @name ui.router.state.$view
   *
   * @requires ui.router.util.$templateFactory
   * @requires $rootScope
   *
   * @description
   *
   */
  $get.$inject = ['$rootScope', '$templateFactory'];
  function $get(   $rootScope,   $templateFactory) {
    return {
      // $view.load('full.viewName', { template: ..., controller: ..., resolve: ..., async: false, params: ... })
      /**
       * @ngdoc function
       * @name ui.router.state.$view#load
       * @methodOf ui.router.state.$view
       *
       * @description
       *
       * @param {string} name name
       * @param {object} options option object.
       */
      load: function load(name, options) {
        var result, defaults = {
          template: null, controller: null, view: null, locals: null, notify: true, async: true, params: {}
        };
        options = extend(defaults, options);

        if (options.view) {
          result = $templateFactory.fromConfig(options.view, options.params, options.locals);
        }
        if (result && options.notify) {
          $rootScope.$broadcast('$viewContentLoading', options);
        }
        return result;
      }
    };
  }
}

angular.module('ui.router.state').provider('$view', $ViewProvider);

/**
 * @ngdoc object
 * @name ui.router.state.$uiViewScroll
 *
 * @requires $anchorScroll
 * @requires $timeout
 *
 * @description
 * When called with a jqLite element, it scrolls the element into view (after a
 * `$timeout` so the DOM has time to refresh).
 *
 * If you prefer to rely on `$anchorScroll` to scroll the view to the anchor,
 * this can be enabled by calling `$uiViewScrollProvider.useAnchorScroll()`.
 */
function $ViewScrollProvider() {

  var useAnchorScroll = false;

  this.useAnchorScroll = function () {
    useAnchorScroll = true;
  };

  this.$get = ['$anchorScroll', '$timeout', function ($anchorScroll, $timeout) {
    if (useAnchorScroll) {
      return $anchorScroll;
    }

    return function ($element) {
      $timeout(function () {
        $element[0].scrollIntoView();
      }, 0, false);
    };
  }];
}

angular.module('ui.router.state').provider('$uiViewScroll', $ViewScrollProvider);

/**
 * @ngdoc directive
 * @name ui.router.state.diretive.ui-view
 *
 * @requires ui.router.state.$state
 * @requires $compile
 * @requires $controller
 * @requires $injector
 *
 * @restrict ECA
 *
 * @description
 * The ui-view directive tells $state where to place your templates.
 * A view can be unnamed or named.
 *
 * @param {string} ui-view A view name.
 */
$ViewDirective.$inject = ['$state', '$compile', '$controller', '$injector', '$uiViewScroll', '$document'];
function $ViewDirective(   $state,   $compile,   $controller,   $injector,   $uiViewScroll,   $document) {

  function getService() {
    return ($injector.has) ? function(service) {
      return $injector.has(service) ? $injector.get(service) : null;
    } : function(service) {
      try {
        return $injector.get(service);
      } catch (e) {
        return null;
      }
    };
  }

  var viewIsUpdating = false,
      service = getService(),
      $animator = service('$animator'),
      $animate = service('$animate');

  // Returns a set of DOM manipulation functions based on whether animation
  // should be performed
  function getRenderer(element, attrs, scope) {
    var statics = function() {
      return {
        leave: function (element) { element.remove(); },
        enter: function (element, parent, anchor) { anchor.after(element); }
      };
    };

    if ($animate) {
      return function(shouldAnimate) {
        return !shouldAnimate ? statics() : {
          enter: function(element, parent, anchor) { $animate.enter(element, null, anchor); },
          leave: function(element) { $animate.leave(element, function() { element.remove(); }); }
        };
      };
    }

    if ($animator) {
      var animate = $animator && $animator(scope, attrs);

      return function(shouldAnimate) {
        return !shouldAnimate ? statics() : {
          enter: function(element, parent, anchor) { animate.enter(element, parent); },
          leave: function(element) { animate.leave(element.contents(), element); }
        };
      };
    }

    return statics;
  }

  var directive = {
    restrict: 'ECA',
    compile: function (element, attrs) {
      var initial   = element.html(),
          isDefault = true,
          anchor    = angular.element($document[0].createComment(' ui-view-anchor ')),
          parentEl  = element.parent();

      element.prepend(anchor);

      return function ($scope) {
        var inherited = parentEl.inheritedData('$uiView');

        var currentScope, currentEl, viewLocals,
            name      = attrs[directive.name] || attrs.name || '',
            onloadExp = attrs.onload || '',
            autoscrollExp = attrs.autoscroll,
            renderer  = getRenderer(element, attrs, $scope);

        if (name.indexOf('@') < 0) name = name + '@' + (inherited ? inherited.state.name : '');
        var view = { name: name, state: null };

        var eventHook = function () {
          if (viewIsUpdating) return;
          viewIsUpdating = true;

          try { updateView(true); } catch (e) {
            viewIsUpdating = false;
            throw e;
          }
          viewIsUpdating = false;
        };

        $scope.$on('$stateChangeSuccess', eventHook);
        $scope.$on('$viewContentLoading', eventHook);

        updateView(false);

        function cleanupLastView() {
          if (currentEl) {
            renderer(true).leave(currentEl);
            currentEl = null;
          }

          if (currentScope) {
            currentScope.$destroy();
            currentScope = null;
          }
        }

        function updateView(shouldAnimate) {
          var locals = $state.$current && $state.$current.locals[name];

          if (isDefault) {
            isDefault = false;
            element.replaceWith(anchor);
          }

          if (!locals) {
            cleanupLastView();
            currentEl = element.clone();
            currentEl.html(initial);
            renderer(shouldAnimate).enter(currentEl, parentEl, anchor);

            currentScope = $scope.$new();
            $compile(currentEl.contents())(currentScope);
            return;
          }

          if (locals === viewLocals) return; // nothing to do

          cleanupLastView();

          currentEl = element.clone();
          currentEl.html(locals.$template ? locals.$template : initial);
          renderer(true).enter(currentEl, parentEl, anchor);

          currentEl.data('$uiView', view);

          viewLocals = locals;
          view.state = locals.$$state;

          var link = $compile(currentEl.contents());

          currentScope = $scope.$new();

          if (locals.$$controller) {
            locals.$scope = currentScope;
            var controller = $controller(locals.$$controller, locals);
            currentEl.children().data('$ngControllerController', controller);
          }

          link(currentScope);

          currentScope.$emit('$viewContentLoaded');
          if (onloadExp) currentScope.$eval(onloadExp);

          if (!angular.isDefined(autoscrollExp) || !autoscrollExp || $scope.$eval(autoscrollExp)) {
            $uiViewScroll(currentEl);
          }
        }
      };
    }
  };

  return directive;
}

angular.module('ui.router.state').directive('uiView', $ViewDirective);

function parseStateRef(ref) {
  var parsed = ref.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
  if (!parsed || parsed.length !== 4) throw new Error("Invalid state ref '" + ref + "'");
  return { state: parsed[1], paramExpr: parsed[3] || null };
}

function stateContext(el) {
  var stateData = el.parent().inheritedData('$uiView');

  if (stateData && stateData.state && stateData.state.name) {
    return stateData.state;
  }
}

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-sref
 *
 * @requires ui.router.state.$state
 * @requires $timeout
 *
 * @restrict A
 *
 * @description
 * A directive that binds a link (`<a>` tag) to a state. If the state has an associated
 * URL, the directive will automatically generate & update the `href` attribute via
 * the {@link ui.router.state.$state#methods_href $state.href()} method. Clicking
 * the link will trigger a state transition with optional parameters.
 *
 * Also middle-clicking, right-clicking, and ctrl-clicking on the link will be
 * handled natively by the browser.
 *
 * You can also use relative state paths within ui-sref, just like the relative
 * paths passed to `$state.go()`. You just need to be aware that the path is relative
 * to the state that the link lives in, in other words the state that loaded the
 * template containing the link.
 *
 * @example
 * <pre>
 * <a ui-sref="home">Home</a> | <a ui-sref="about">About</a>
 *
 * <ul>
 *   <li ng-repeat="contact in contacts">
 *     <a ui-sref="contacts.detail({ id: contact.id })">{{ contact.name }}</a>
 *   </li>
 * </ul>
 * </pre>
 *
 * @param {string} ui-sref 'stateName' can be any valid absolute or relative state
 */
$StateRefDirective.$inject = ['$state', '$timeout'];
function $StateRefDirective($state, $timeout) {
  return {
    restrict: 'A',
    require: '?^uiSrefActive',
    link: function(scope, element, attrs, uiSrefActive) {
      var ref = parseStateRef(attrs.uiSref);
      var params = null, url = null, base = stateContext(element) || $state.$current;
      var isForm = element[0].nodeName === "FORM";
      var attr = isForm ? "action" : "href", nav = true;

      var update = function(newVal) {
        if (newVal) params = newVal;
        if (!nav) return;

        var newHref = $state.href(ref.state, params, { relative: base });

        if (uiSrefActive) {
          uiSrefActive.$$setStateInfo(ref.state, params);
        }
        if (!newHref) {
          nav = false;
          return false;
        }
        element[0][attr] = newHref;
      };

      if (ref.paramExpr) {
        scope.$watch(ref.paramExpr, function(newVal, oldVal) {
          if (newVal !== params) update(newVal);
        }, true);
        params = scope.$eval(ref.paramExpr);
      }
      update();

      if (isForm) return;

      element.bind("click", function(e) {
        var button = e.which || e.button;
        if ((button === 0 || button == 1) && !e.ctrlKey && !e.metaKey && !e.shiftKey && !element.attr('target')) {
          // HACK: This is to allow ng-clicks to be processed before the transition is initiated:
          $timeout(function() {
            $state.go(ref.state, params, { relative: base });
          });
          e.preventDefault();
        }
      });
    }
  };
}

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-sref-active
 *
 * @requires ui.router.state.$state
 * @requires ui.router.state.$stateParams
 * @requires $interpolate
 *
 * @restrict A
 *
 * @description
 * A directive working alongside ui-sref to add classes to an element when the
 * related ui-sref directive's state is active, and removing them when it is inactive.
 * The primary use-case is to simplify the special appearance of navigation menus
 * relying on `ui-sref`, by having the "active" state's menu button appear different,
 * distinguishing it from the inactive menu items.
 *
 * @example
 * <pre>
 * <ul>
 *   <li ui-sref-active="active" class="item active">
 *     <a ui-sref="app.user({user: 'bilbobaggins'})" href="/users/bilbobaggins">@bilbobaggins</a>
 *   </li>
 *   <!-- ... -->
 * </ul>
 * </pre>
 */
$StateActiveDirective.$inject = ['$state', '$stateParams', '$interpolate'];
function $StateActiveDirective($state, $stateParams, $interpolate) {
  return {
    restrict: "A",
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
      var state, params, activeClass;

      // There probably isn't much point in $observing this
      activeClass = $interpolate($attrs.uiSrefActive || '', false)($scope);

      // Allow uiSref to communicate with uiSrefActive
      this.$$setStateInfo = function(newState, newParams) {
        state = $state.get(newState, stateContext($element));
        params = newParams;
        update();
      };

      $scope.$on('$stateChangeSuccess', update);

      // Update route state
      function update() {
        if ($state.$current.self === state && matchesParams()) {
          $element.addClass(activeClass);
        } else {
          $element.removeClass(activeClass);
        }
      }

      function matchesParams() {
        return !params || equalForKeys(params, $stateParams);
      }
    }]
  };
}

angular.module('ui.router.state')
  .directive('uiSref', $StateRefDirective)
  .directive('uiSrefActive', $StateActiveDirective);

/**
 * @ngdoc filter
 * @name ui.router.state.filter:isState
 *
 * @requires ui.router.state.$state
 *
 * @description
 * Translates to {@link ui.router.state.$state#is $state.is("stateName")}.
 */
$IsStateFilter.$inject = ['$state'];
function $IsStateFilter($state) {
  return function(state) {
    return $state.is(state);
  };
}

/**
 * @ngdoc filter
 * @name ui.router.state.filter:includeByState
 *
 * @requires ui.router.state.$state
 *
 * @description
 * Translates to {@link ui.router.state.$state#includes $state.includes()}.
 */
$IncludedByStateFilter.$inject = ['$state'];
function $IncludedByStateFilter($state) {
  return function(state) {
    return $state.includes(state);
  };
}

angular.module('ui.router.state')
  .filter('isState', $IsStateFilter)
  .filter('includedByState', $IncludedByStateFilter);

/**
 * @ngdoc object
 * @name ui.router.compat.$routeProvider
 *
 * @requires ui.router.state.$stateProvider
 * @requires ui.router.router.$urlRouterProvider
 *
 * @description
 * `$routeProvider` of the `ui.router.compat` module overwrites the existing
 * `routeProvider` from the core. This is done to provide compatibility between
 * the UI Router and the core router.
 *
 * It also provides a `when()` method to register routes that map to certain urls.
 * Behind the scenes it actually delegates either to
 * {@link ui.router.router.$urlRouterProvider $urlRouterProvider} or to the
 * {@link ui.router.state.$stateProvider $stateProvider} to postprocess the given
 * router definition object.
 */
$RouteProvider.$inject = ['$stateProvider', '$urlRouterProvider'];
function $RouteProvider(  $stateProvider,    $urlRouterProvider) {

  var routes = [];

  onEnterRoute.$inject = ['$$state'];
  function onEnterRoute(   $$state) {
    /*jshint validthis: true */
    this.locals = $$state.locals.globals;
    this.params = this.locals.$stateParams;
  }

  function onExitRoute() {
    /*jshint validthis: true */
    this.locals = null;
    this.params = null;
  }

  this.when = when;
  /**
   * @ngdoc function
   * @name ui.router.compat.$routeProvider#when
   * @methodOf ui.router.compat.$routeProvider
   *
   * @description
   * Registers a route with a given route definition object. The route definition
   * object has the same interface the angular core route definition object has.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.compat']);
   *
   * app.config(function ($routeProvider) {
   *   $routeProvider.when('home', {
   *     controller: function () { ... },
   *     templateUrl: 'path/to/template'
   *   });
   * });
   * </pre>
   *
   * @param {string} url URL as string
   * @param {object} route Route definition object
   *
   * @return {object} $routeProvider - $routeProvider instance
   */
  function when(url, route) {
    /*jshint validthis: true */
    if (route.redirectTo != null) {
      // Redirect, configure directly on $urlRouterProvider
      var redirect = route.redirectTo, handler;
      if (isString(redirect)) {
        handler = redirect; // leave $urlRouterProvider to handle
      } else if (isFunction(redirect)) {
        // Adapt to $urlRouterProvider API
        handler = function (params, $location) {
          return redirect(params, $location.path(), $location.search());
        };
      } else {
        throw new Error("Invalid 'redirectTo' in when()");
      }
      $urlRouterProvider.when(url, handler);
    } else {
      // Regular route, configure as state
      $stateProvider.state(inherit(route, {
        parent: null,
        name: 'route:' + encodeURIComponent(url),
        url: url,
        onEnter: onEnterRoute,
        onExit: onExitRoute
      }));
    }
    routes.push(route);
    return this;
  }

  /**
   * @ngdoc object
   * @name ui.router.compat.$route
   *
   * @requires ui.router.state.$state
   * @requires $rootScope
   * @requires $routeParams
   *
   * @property {object} routes - Array of registered routes.
   * @property {object} params - Current route params as object.
   * @property {string} current - Name of the current route.
   *
   * @description
   * The `$route` service provides interfaces to access defined routes. It also let's
   * you access route params through `$routeParams` service, so you have fully
   * control over all the stuff you would actually get from angular's core `$route`
   * service.
   */
  this.$get = $get;
  $get.$inject = ['$state', '$rootScope', '$routeParams'];
  function $get(   $state,   $rootScope,   $routeParams) {

    var $route = {
      routes: routes,
      params: $routeParams,
      current: undefined
    };

    function stateAsRoute(state) {
      return (state.name !== '') ? state : undefined;
    }

    $rootScope.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) {
      $rootScope.$broadcast('$routeChangeStart', stateAsRoute(to), stateAsRoute(from));
    });

    $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
      $route.current = stateAsRoute(to);
      $rootScope.$broadcast('$routeChangeSuccess', stateAsRoute(to), stateAsRoute(from));
      copy(toParams, $route.params);
    });

    $rootScope.$on('$stateChangeError', function (ev, to, toParams, from, fromParams, error) {
      $rootScope.$broadcast('$routeChangeError', stateAsRoute(to), stateAsRoute(from), error);
    });

    return $route;
  }
}

angular.module('ui.router.compat')
  .provider('$route', $RouteProvider)
  .directive('ngView', $ViewDirective);
})(window, window.angular);

!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):"undefined"!=typeof window?window.PouchDB=e():"undefined"!=typeof global?global.PouchDB=e():"undefined"!=typeof self&&(self.PouchDB=e())}(function(){var define,module,exports;return function e(t,n,r){function o(i,s){if(!n[i]){if(!t[i]){var u="function"==typeof require&&require;if(!s&&u)return u(i,!0);if(a)return a(i,!0);throw new Error("Cannot find module '"+i+"'")}var c=n[i]={exports:{}};t[i][0].call(c.exports,function(e){var n=t[i][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(require,module,exports){"use strict";function arrayFirst(e,t){for(var n=0;n<e.length;n++)if(t(e[n],n)===!0)return e[n];return!1}function yankError(e){return function(t,n){t||n[0].error?call(e,t||n[0]):call(e,null,n[0])}}function computeHeight(e){var t={},n=[];return merge.traverseRevTree(e,function(e,r,o,a){var i=r+"-"+o;return e&&(t[i]=0),void 0!==a&&n.push({from:a,to:i}),i}),n.reverse(),n.forEach(function(e){t[e.from]=void 0===t[e.from]?1+t[e.to]:Math.min(t[e.from],1+t[e.to])}),t}var utils=require("./utils"),merge=require("./merge"),errors=require("./deps/errors"),call=utils.call;module.exports=function(Pouch){return function(opts,callback){function autoCompact(e){return auto_compaction?function(t,n){if(t)call(e,t);else{var r=n.length,o=function(){r--,r||call(e,null,n)};n.forEach(function(e){e.ok?compactDocument(e.id,1,o):o()})}}:e}function compactDocument(e,t,n){customApi._getRevisionTree(e,function(r,o){if(r)return call(n);var a=computeHeight(o),i=[],s=[];Object.keys(a).forEach(function(e){a[e]>t&&i.push(e)}),merge.traverseRevTree(o,function(e,t,n,r,o){var a=t+"-"+n;"available"===o.status&&-1!==i.indexOf(a)&&(o.status="missing",s.push(a))}),customApi._doCompaction(e,o,s,n)})}function processChange(e,t,n){var r=[{rev:e._rev}];"all_docs"===n.style&&(r=merge.collectLeaves(t.rev_tree).map(function(e){return{rev:e.rev}}));var o={id:t.id,changes:r,doc:e};return utils.isDeleted(t,e._rev)&&(o.deleted=!0),n.conflicts&&(o.doc._conflicts=merge.collectConflicts(t),o.doc._conflicts.length||delete o.doc._conflicts),o}var api={},customApi=Pouch.adapters[opts.adapter](opts,function(e,t){if(e)return callback&&callback(e),void 0;for(var n in api)t.hasOwnProperty(n)||(t[n]=api[n]);opts.name===Pouch.prefix+Pouch.ALL_DBS?callback(e,t):Pouch.open(opts,function(e){callback(e,t)})}),auto_compaction=opts.auto_compaction===!0;api.post=function(e,t,n){return"function"==typeof t&&(n=t,t={}),"object"!=typeof e||Array.isArray(e)?call(n,errors.NOT_AN_OBJECT):customApi.bulkDocs({docs:[e]},t,autoCompact(yankError(n)))},api.put=function(e,t,n){return"function"==typeof t&&(n=t,t={}),"object"!=typeof e?call(n,errors.NOT_AN_OBJECT):utils.isValidId(e._id)?customApi.bulkDocs({docs:[e]},t,autoCompact(yankError(n))):call(n,errors.MISSING_ID)},api.putAttachment=function(e,t,n,r,o,a){function i(e){e._attachments=e._attachments||{},e._attachments[t]={content_type:o,data:r},api.put(e,a)}return api.taskqueue.ready()?("function"==typeof o&&(a=o,o=r,r=n,n=null),"undefined"==typeof o&&(o=r,r=n,n=null),api.get(e,function(t,r){return t&&t.error===errors.MISSING_DOC.error?(i({_id:e}),void 0):t?(call(a,t),void 0):r._rev!==n?(call(a,errors.REV_CONFLICT),void 0):(i(r),void 0)}),void 0):(api.taskqueue.addTask("putAttachment",arguments),void 0)},api.removeAttachment=function(e,t,n,r){api.get(e,function(e,o){return e?(call(r,e),void 0):o._rev!==n?(call(r,errors.REV_CONFLICT),void 0):o._attachments?(delete o._attachments[t],0===Object.keys(o._attachments).length&&delete o._attachments,api.put(o,r),void 0):call(r,null)})},api.remove=function(e,t,n){"function"==typeof t&&(n=t,t={}),void 0===t&&(t={}),t.was_delete=!0;var r={_id:e._id,_rev:e._rev};return r._deleted=!0,customApi.bulkDocs({docs:[r]},t,yankError(n))},api.revsDiff=function(e,t,n){function r(e,t){s[e]||(s[e]={missing:[]}),s[e].missing.push(t)}function o(t,n){var o=e[t].slice(0);merge.traverseRevTree(n,function(e,n,a,i,s){var u=n+"-"+a,c=o.indexOf(u);-1!==c&&(o.splice(c,1),"available"!==s.status&&r(t,u))}),o.forEach(function(e){r(t,e)})}"function"==typeof t&&(n=t,t={});var a=Object.keys(e),i=0,s={};a.map(function(t){customApi._getRevisionTree(t,function(r,u){if(r&&"not_found"===r.name&&"missing"===r.message)s[t]={missing:e[t]};else{if(r)return call(n,r);o(t,u)}return++i===a.length?call(n,null,s):void 0})})},api.compact=function(e,t){"function"==typeof e&&(t=e,e={}),api.changes({complete:function(e,n){if(e)return call(t),void 0;var r=n.results.length;return r?(n.results.forEach(function(e){compactDocument(e.id,0,function(){r--,r||call(t)})}),void 0):(call(t),void 0)}})},api.get=function(e,t,n){function r(){var r=[],a=o.length;return a?(o.forEach(function(o){api.get(e,{rev:o,revs:t.revs},function(e,t){e?r.push({missing:o}):r.push({ok:t}),a--,a||call(n,null,r)})}),void 0):call(n,null,r)}if(!api.taskqueue.ready())return api.taskqueue.addTask("get",arguments),void 0;"function"==typeof t&&(n=t,t={});var o=[];{if(!t.open_revs)return customApi._get(e,t,function(e,r){if(e)return call(n,e);var o=r.doc,a=r.metadata,i=r.ctx;if(t.conflicts){var s=merge.collectConflicts(a);s.length&&(o._conflicts=s)}if(t.revs||t.revs_info){var u=merge.rootToLeaf(a.rev_tree),c=arrayFirst(u,function(e){return-1!==e.ids.map(function(e){return e.id}).indexOf(o._rev.split("-")[1])});if(c.ids.splice(c.ids.map(function(e){return e.id}).indexOf(o._rev.split("-")[1])+1),c.ids.reverse(),t.revs&&(o._revisions={start:c.pos+c.ids.length-1,ids:c.ids.map(function(e){return e.id})}),t.revs_info){var d=c.pos+c.ids.length;o._revs_info=c.ids.map(function(e){return d--,{rev:d+"-"+e.id,status:e.opts.status}})}}if(t.local_seq&&(o._local_seq=r.metadata.seq),t.attachments&&o._attachments){var l=o._attachments,f=Object.keys(l).length;if(0===f)return call(n,null,o);Object.keys(l).forEach(function(e){customApi._getAttachment(l[e],{encode:!0,ctx:i},function(t,r){o._attachments[e].data=r,--f||call(n,null,o)})})}else{if(o._attachments)for(var p in o._attachments)o._attachments[p].stub=!0;call(n,null,o)}});if("all"===t.open_revs)customApi._getRevisionTree(e,function(e,t){e&&(t=[]),o=merge.collectLeaves(t).map(function(e){return e.rev}),r()});else{if(!Array.isArray(t.open_revs))return call(n,errors.error(errors.UNKNOWN_ERROR,"function_clause"));o=t.open_revs;for(var a=0;a<o.length;a++){var i=o[a];if("string"!=typeof i||!/^\d+-/.test(i))return call(n,errors.error(errors.BAD_REQUEST,"Invalid rev format"))}r()}}},api.getAttachment=function(e,t,n,r){return api.taskqueue.ready()?(n instanceof Function&&(r=n,n={}),customApi._get(e,n,function(e,o){return e?call(r,e):o.doc._attachments&&o.doc._attachments[t]?(n.ctx=o.ctx,customApi._getAttachment(o.doc._attachments[t],n,r),void 0):call(r,errors.MISSING_DOC)}),void 0):(api.taskqueue.addTask("getAttachment",arguments),void 0)},api.allDocs=function(e,t){if(!api.taskqueue.ready())return api.taskqueue.addTask("allDocs",arguments),void 0;if("function"==typeof e&&(t=e,e={}),"keys"in e){if("startkey"in e)return call(t,errors.error(errors.QUERY_PARSE_ERROR,"Query parameter `start_key` is not compatible with multi-get")),void 0;if("endkey"in e)return call(t,errors.error(errors.QUERY_PARSE_ERROR,"Query parameter `end_key` is not compatible with multi-get")),void 0}return"undefined"==typeof e.skip&&(e.skip=0),customApi._allDocs(e,t)},api.changes=function(opts){if(!api.taskqueue.ready()){var task=api.taskqueue.addTask("changes",arguments);return{cancel:function(){return task.task?task.task.cancel():(Pouch.DEBUG,task.parameters[0].aborted=!0,void 0)}}}if(opts=utils.extend(!0,{},opts),opts.processChange=processChange,opts.since||(opts.since=0),"latest"===opts.since){var changes;return api.info(function(e,t){opts.aborted||(opts.since=t.update_seq-1,api.changes(opts))}),{cancel:function(){return changes?changes.cancel():(Pouch.DEBUG,opts.aborted=!0,void 0)}}}if(opts.filter&&"string"==typeof opts.filter){if("_view"===opts.filter)if(opts.view&&"string"==typeof opts.view){var viewName=opts.view.split("/");api.get("_design/"+viewName[0],function(err,ddoc){if(ddoc&&ddoc.views&&ddoc.views[viewName[1]]){var filter=eval("(function () {  return function (doc) {    var emitted = false;    var emit = function (a, b) {      emitted = true;    };    var view = "+ddoc.views[viewName[1]].map+";    view(doc);    if (emitted) {      return true;    }  }})()");opts.aborted||(opts.filter=filter,api.changes(opts))}else{var msg=ddoc.views?"missing json key: "+viewName[1]:"missing json key: views";err=err||errors.error(errors.MISSING_DOC,msg),utils.call(opts.complete,err)}})}else{var err=errors.error(errors.BAD_REQUEST,"`view` filter parameter is not provided.");utils.call(opts.complete,err)}else{var filterName=opts.filter.split("/");api.get("_design/"+filterName[0],function(err,ddoc){if(ddoc&&ddoc.filters&&ddoc.filters[filterName[1]]){var filter=eval("(function () { return "+ddoc.filters[filterName[1]]+" })()");opts.aborted||(opts.filter=filter,api.changes(opts))}else{var msg=ddoc&&ddoc.filters?"missing json key: "+filterName[1]:"missing json key: filters";err=err||errors.error(errors.MISSING_DOC,msg),utils.call(opts.complete,err)}})}return{cancel:function(){Pouch.DEBUG&&console.log("Cancel Changes Feed"),opts.aborted=!0}}}return"descending"in opts||(opts.descending=!1),opts.limit=0===opts.limit?1:opts.limit,customApi._changes(opts)},api.close=function(e){return api.taskqueue.ready()?customApi._close(e):(api.taskqueue.addTask("close",arguments),void 0)},api.info=function(e){return api.taskqueue.ready()?customApi._info(e):(api.taskqueue.addTask("info",arguments),void 0)},api.id=function(){return customApi._id()},api.type=function(){return"function"==typeof customApi._type?customApi._type():opts.adapter},api.bulkDocs=function(e,t,n){if(!api.taskqueue.ready())return api.taskqueue.addTask("bulkDocs",arguments),void 0;if("function"==typeof t&&(n=t,t={}),t=t?utils.extend(!0,{},t):{},!e||!e.docs||e.docs.length<1)return call(n,errors.MISSING_BULK_DOCS);if(!Array.isArray(e.docs))return call(n,errors.QUERY_PARSE_ERROR);for(var r=0;r<e.docs.length;++r)if("object"!=typeof e.docs[r]||Array.isArray(e.docs[r]))return call(n,errors.NOT_AN_OBJECT);return e=utils.extend(!0,{},e),"new_edits"in t||(t.new_edits=!0),customApi._bulkDocs(e,t,autoCompact(n))};var taskqueue={};taskqueue.ready=!1,taskqueue.queue=[],api.taskqueue={},api.taskqueue.execute=function(e){taskqueue.ready&&taskqueue.queue.forEach(function(t){t.task=e[t.name].apply(null,t.parameters)})},api.taskqueue.ready=function(){return 0===arguments.length?taskqueue.ready:(taskqueue.ready=arguments[0],void 0)},api.taskqueue.addTask=function(e,t){var n={name:e,parameters:t};return taskqueue.queue.push(n),n},api.replicate={},api.replicate.from=function(e,t,n){return"function"==typeof t&&(n=t,t={}),Pouch.replicate(e,customApi,t,n)},api.replicate.to=function(e,t,n){return"function"==typeof t&&(n=t,t={}),Pouch.replicate(customApi,e,t,n)};for(var j in api)customApi.hasOwnProperty(j)||(customApi[j]=api[j]);return opts.skipSetup&&(api.taskqueue.ready(!0),api.taskqueue.execute(api)),utils.isCordova()&&cordova.fireWindowEvent(opts.name+"_pouch",{}),customApi}}},{"./deps/errors":8,"./merge":13,"./utils":16}],2:[function(e,t){"use strict";function n(e){for(var t=n.options,r=t.parser[t.strictMode?"strict":"loose"].exec(e),o={},a=14;a--;)o[t.key[a]]=r[a]||"";return o[t.q.name]={},o[t.key[12]].replace(t.q.parser,function(e,n,r){n&&(o[t.q.name][n]=r)}),o}function r(e){return/^_(design|local)/.test(e)?e:encodeURIComponent(e)}function o(e,t){if(/http(s?):/.test(e)){var r=n(e);r.remote=!0,(r.user||r.password)&&(r.auth={username:r.user,password:r.password});var o=r.path.replace(/(^\/|\/$)/g,"").split("/");if(r.db=o.pop(),r.path=o.join("/"),t=t||{},r.headers=t.headers||{},t.auth||r.auth){var a=t.auth||r.auth,i=u.btoa(a.username+":"+a.password);r.headers.Authorization="Basic "+i}return t.headers&&(r.headers=t.headers),r}return{host:"",path:"/",db:e,auth:!1}}function a(e,t){if(e.remote){var n=e.path?"/":"";return e.protocol+"://"+e.host+":"+e.port+"/"+e.path+n+e.db+"/"+t}return"/"+e.db+"/"+t}function i(e,t){if(e.remote){var n=e.path?"/":"";return e.protocol+"://"+e.host+":"+e.port+"/"+e.path+n+t}return"/"+t}function s(e,t){function n(e,t){return u.ajax(u.extend({},f,e),t)}var s=o(e.name,e),d=a(s,""),l={},f=e.ajax||{},p={list:[],get:function(e,t){"function"==typeof e&&(t=e,e={count:10});var r=function(e,n){!e&&"uuids"in n?(p.list=p.list.concat(n.uuids),u.call(t,null,"OK")):u.call(t,e||c.UNKNOWN_ERROR)},o="?count="+e.count;n({headers:s.headers,method:"GET",url:i(s,"_uuids")+o},r)}},v=function(){n({headers:s.headers,method:"PUT",url:d},function(e){e&&401===e.status?n({headers:s.headers,method:"HEAD",url:d},function(e){e?u.call(t,e):u.call(t,null,l)}):e&&412!==e.status?u.call(t,c.UNKNOWN_ERROR):u.call(t,null,l)})};return e.skipSetup||n({headers:s.headers,method:"GET",url:d},function(e){e?404===e.status?v():u.call(t,e):u.call(t,null,l)}),l.type=function(){return"http"},l.id=function(){return a(s,"")},l.request=function(e,t){return l.taskqueue.ready()?(e.headers=s.headers,e.url=a(s,e.url),n(e,t),void 0):(l.taskqueue.addTask("request",arguments),void 0)},l.compact=function(e,t){return l.taskqueue.ready()?("function"==typeof e&&(t=e,e={}),n({headers:s.headers,url:a(s,"_compact"),method:"POST"},function(){function n(){l.info(function(r,o){o.compact_running?setTimeout(n,e.interval||200):u.call(t,null)})}"function"==typeof t&&n()}),void 0):(l.taskqueue.addTask("compact",arguments),void 0)},l.info=function(e){return l.taskqueue.ready()?(n({headers:s.headers,method:"GET",url:a(s,"")},e),void 0):(l.taskqueue.addTask("info",arguments),void 0)},l.get=function(e,t,o){if(!l.taskqueue.ready())return l.taskqueue.addTask("get",arguments),void 0;"function"==typeof t&&(o=t,t={}),void 0===t.auto_encode&&(t.auto_encode=!0);var i=[];t.revs&&i.push("revs=true"),t.revs_info&&i.push("revs_info=true"),t.local_seq&&i.push("local_seq=true"),t.open_revs&&("all"!==t.open_revs&&(t.open_revs=JSON.stringify(t.open_revs)),i.push("open_revs="+t.open_revs)),t.attachments&&i.push("attachments=true"),t.rev&&i.push("rev="+t.rev),t.conflicts&&i.push("conflicts="+t.conflicts),i=i.join("&"),i=""===i?"":"?"+i,t.auto_encode&&(e=r(e));var c={headers:s.headers,method:"GET",url:a(s,e+i)},d=e.split("/");(d.length>1&&"_design"!==d[0]&&"_local"!==d[0]||d.length>2&&"_design"===d[0]&&"_local"!==d[0])&&(c.binary=!0),n(c,function(e,t,n){return e?u.call(o,e):(u.call(o,null,t,n),void 0)})},l.remove=function(e,t,o){return l.taskqueue.ready()?("function"==typeof t&&(o=t,t={}),n({headers:s.headers,method:"DELETE",url:a(s,r(e._id))+"?rev="+e._rev},o),void 0):(l.taskqueue.addTask("remove",arguments),void 0)},l.getAttachment=function(e,t,n,o){"function"==typeof n&&(o=n,n={}),void 0===n.auto_encode&&(n.auto_encode=!0),n.auto_encode&&(e=r(e)),n.auto_encode=!1,l.get(e+"/"+t,n,o)},l.removeAttachment=function(e,t,o,i){return l.taskqueue.ready()?(n({headers:s.headers,method:"DELETE",url:a(s,r(e)+"/"+t)+"?rev="+o},i),void 0):(l.taskqueue.addTask("removeAttachment",arguments),void 0)},l.putAttachment=function(e,t,o,i,u,c){if(!l.taskqueue.ready())return l.taskqueue.addTask("putAttachment",arguments),void 0;"function"==typeof u&&(c=u,u=i,i=o,o=null),"undefined"==typeof u&&(u=i,i=o,o=null);var d=r(e)+"/"+t,f=a(s,d);o&&(f+="?rev="+o);var p={headers:s.headers,method:"PUT",url:f,processData:!1,body:i,timeout:6e4};p.headers["Content-Type"]=u,n(p,c)},l.put=function(e,t,o){if(!l.taskqueue.ready())return l.taskqueue.addTask("put",arguments),void 0;if("function"==typeof t&&(o=t,t={}),"object"!=typeof e)return u.call(o,c.NOT_AN_OBJECT);if(!u.isValidId(e._id))return u.call(o,c.MISSING_ID);var i=[];t&&"undefined"!=typeof t.new_edits&&i.push("new_edits="+t.new_edits),i=i.join("&"),""!==i&&(i="?"+i),n({headers:s.headers,method:"PUT",url:a(s,r(e._id))+i,body:e},o)},l.post=function(e,t,n){return l.taskqueue.ready()?("function"==typeof t&&(n=t,t={}),"object"!=typeof e?u.call(n,c.NOT_AN_OBJECT):("_id"in e?l.put(e,t,n):p.list.length>0?(e._id=p.list.pop(),l.put(e,t,n)):p.get(function(r){return r?u.call(n,c.UNKNOWN_ERROR):(e._id=p.list.pop(),l.put(e,t,n),void 0)}),void 0)):(l.taskqueue.addTask("post",arguments),void 0)},l.bulkDocs=function(e,t,r){return l.taskqueue.ready()?("function"==typeof t&&(r=t,t={}),t||(t={}),"undefined"!=typeof t.new_edits&&(e.new_edits=t.new_edits),n({headers:s.headers,method:"POST",url:a(s,"_bulk_docs"),body:e},r),void 0):(l.taskqueue.addTask("bulkDocs",arguments),void 0)},l.allDocs=function(e,t){if(!l.taskqueue.ready())return l.taskqueue.addTask("allDocs",arguments),void 0;"function"==typeof e&&(t=e,e={});var r,o=[],i="GET";e.conflicts&&o.push("conflicts=true"),e.descending&&o.push("descending=true"),e.include_docs&&o.push("include_docs=true"),e.startkey&&o.push("startkey="+encodeURIComponent(JSON.stringify(e.startkey))),e.endkey&&o.push("endkey="+encodeURIComponent(JSON.stringify(e.endkey))),e.limit&&o.push("limit="+e.limit),"undefined"!=typeof e.skip&&o.push("skip="+e.skip),o=o.join("&"),""!==o&&(o="?"+o),"undefined"!=typeof e.keys&&(i="POST",r=JSON.stringify({keys:e.keys})),n({headers:s.headers,method:i,url:a(s,"_all_docs"+o),body:r},t)},l.changes=function(e){var t=25;if(!l.taskqueue.ready()){var r=l.taskqueue.addTask("changes",arguments);return{cancel:function(){return r.task?r.task.cancel():(r.parameters[0].aborted=!0,void 0)}}}if("latest"===e.since){var o;return l.info(function(t,n){e.aborted||(e.since=n.update_seq,o=l.changes(e))}),{cancel:function(){return o?o.cancel():(e.aborted=!0,void 0)}}}var i={},d="undefined"!=typeof e.limit?e.limit:!1;0===d&&(d=1);var f=d;if(e.style&&(i.style=e.style),(e.include_docs||e.filter&&"function"==typeof e.filter)&&(i.include_docs=!0),e.continuous&&(i.feed="longpoll"),e.conflicts&&(i.conflicts=!0),e.descending&&(i.descending=!0),e.filter&&"string"==typeof e.filter&&(i.filter=e.filter,"_view"===e.filter&&e.view&&"string"==typeof e.view&&(i.view=e.view)),e.query_params&&"object"==typeof e.query_params)for(var p in e.query_params)e.query_params.hasOwnProperty(p)&&(i[p]=e.query_params[p]);var v,_,m,h,g=function(r,o){i.since=r,e.continuous||h||(h=m),i.limit=!d||f>t?t:f;var u="?"+Object.keys(i).map(function(e){return e+"="+i[e]}).join("&"),c={headers:s.headers,method:"GET",url:a(s,"_changes"+u),timeout:null};_=r,e.aborted||(v=n(c,o))},y=10,b=0,k={results:[]},w=function(n,r){if(r&&r.results){k.last_seq=r.last_seq;var o={};o.query=e.query_params,r.results=r.results.filter(function(t){f--;var n=u.filterChange(e)(t);return n&&(k.results.push(t),u.call(e.onChange,t)),n})}else n&&(e.aborted=!0,u.call(e.complete,n,null));r&&r.last_seq&&(_=r.last_seq);var a=r&&r.results.length||0;h-=t;var i=d&&0>=f||r&&!a&&0>=h||a&&r.last_seq===m||e.descending&&0!==_;if(e.continuous||!i){n?b+=1:b=0;var s=1<<b,l=y*s,p=e.maximumWait||3e4;l>p&&u.call(e.complete,n||c.UNKNOWN_ERROR,null),setTimeout(function(){g(_,w)},l)}else u.call(e.complete,null,k)};return e.continuous?g(e.since||0,w):l.info(function(t,n){return t?u.call(e.complete,t):(m=n.update_seq,g(e.since||0,w),void 0)}),{cancel:function(){e.aborted=!0,v.abort()}}},l.revsDiff=function(e,t,r){return l.taskqueue.ready()?("function"==typeof t&&(r=t,t={}),n({headers:s.headers,method:"POST",url:a(s,"_revs_diff"),body:e},function(e,t){u.call(r,e,t)}),void 0):(l.taskqueue.addTask("revsDiff",arguments),void 0)},l.close=function(e){return l.taskqueue.ready()?(u.call(e,null),void 0):(l.taskqueue.addTask("close",arguments),void 0)},l.replicateOnServer=function(e,r,a){if(!l.taskqueue.ready())return l.taskqueue.addTask("replicateOnServer",arguments),a;var i=o(e.id()),c={source:s.db,target:i.protocol===s.protocol&&i.authority===s.authority?i.db:i.source};r.continuous&&(c.continuous=!0),r.create_target&&(c.create_target=!0),r.doc_ids&&(c.doc_ids=r.doc_ids),r.filter&&"string"==typeof r.filter&&(c.filter=r.filter),r.query_params&&(c.query_params=r.query_params);var d,f={},p={headers:s.headers,method:"POST",url:s.protocol+"://"+s.host+(80===s.port?"":":"+s.port)+"/_replicate",body:c};a.cancel=function(){this.cancelled=!0,d&&!f.ok&&d.abort(),f._local_id&&(p.body={replication_id:f._local_id}),p.body.cancel=!0,n(p,function(e,n,o){return e?u.call(t,e):(u.call(r.complete,null,f,o),void 0)})},a.cancelled||(d=n(p,function(e,n,o){return e?u.call(t,e):(f.ok=!0,n._local_id&&(f._local_id=n._local_id),u.call(r.complete,null,n,o),void 0)}))},l}var u=e("../utils"),c=e("../deps/errors");n.options={strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},s.destroy=function(e,t,n){var r=o(e,t);t=t||{},"function"==typeof t&&(n=t,t={}),t.headers=r.headers,t.method="DELETE",t.url=a(r,""),u.ajax(t,n)},s.valid=function(){return!0},t.exports=s},{"../deps/errors":8,"../utils":16}],3:[function(e,t){function n(e){return function(t){a.call(e,s.error(s.IDB_ERROR,t.target,t.type))}}function r(e,t){function u(e){e.createObjectStore(f,{keyPath:"id"}).createIndex("seq","seq",{unique:!0}),e.createObjectStore(p,{autoIncrement:!0}).createIndex("_doc_id_rev","_doc_id_rev",{unique:!0}),e.createObjectStore(v,{keyPath:"digest"}),e.createObjectStore(_,{keyPath:"id",autoIncrement:!1}),e.createObjectStore(m)}function c(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),o=0;t>o;o++)r[o]=e.charCodeAt(o);return n}function d(e,t){return e._bulk_seq-t._bulk_seq}var l=1,f="document-store",p="by-sequence",v="attach-store",_="meta-store",m="detect-blob-support",h=e.name,g=o.indexedDB.open(h,l);"openReqList"in r||(r.openReqList={}),r.openReqList[h]=g;var y=null,b=null,k={},w=null;return g.onupgradeneeded=function(e){for(var t=e.target.result,n=e.oldVersion;n!==e.newVersion;)0===n&&u(t),n++},g.onsuccess=function(e){w=e.target.result,w.onversionchange=function(){w.close()};var n=w.transaction([_,m],"readwrite"),r=n.objectStore(_).get(_);r.onsuccess=function(e){var r=e.target.result||{id:_};h+"_id"in r?b=r[h+"_id"]:(b=a.uuid(),r[h+"_id"]=b,n.objectStore(_).put(r));try{n.objectStore(m).put(a.createBlob(),"key"),y=!0}catch(o){y=!1}finally{a.call(t,null,k)}}},g.onerror=n(t),k.type=function(){return"idb"},k.id=function(){return b},k._bulkDocs=function(e,t,o){function u(e){var t=e.target.result;t.updateSeq=(t.updateSeq||0)+I,N.objectStore(_).put(t)}function l(){if(!C.length)return N.objectStore(_).get(_).onsuccess=u,void 0;var e=C.shift(),t=N.objectStore(f).get(e.metadata.id);t.onsuccess=function(t){var n=t.target.result;n?q(n,e):S(e)}}function m(){var e=[];A.sort(d),A.forEach(function(t){if(delete t._bulk_seq,t.error)return e.push(t),void 0;var n=t.metadata,o=i.winningRev(n);e.push({ok:!0,id:n.id,rev:o}),a.isLocalId(n.id)||(r.Changes.notify(h),r.Changes.notifyLocalWindows(h))}),a.call(o,null,e)}function g(e,t){if(e.stub)return t();if("string"==typeof e.data){var n;try{n=atob(e.data)}catch(r){var i=s.error(s.BAD_ARG,"Attachments need to be base64 encoded");return a.call(o,i)}if(e.digest="md5-"+a.Crypto.MD5(n),y){var u=e.content_type;n=c(n),e.data=a.createBlob([n],{type:u})}return t()}var d=new FileReader;d.onloadend=function(){e.digest="md5-"+a.Crypto.MD5(this.result),y||(e.data=btoa(this.result)),t()},d.readAsBinaryString(e.data)}function b(e){function t(){n++,C.length===n&&e()}if(!C.length)return e();var n=0;C.forEach(function(e){function n(){o++,o===r.length&&t()}var r=e.data&&e.data._attachments?Object.keys(e.data._attachments):[];if(!r.length)return t();var o=0;for(var a in e.data._attachments)g(e.data._attachments[a],n)})}function k(e,t){function n(e){i||(e?(i=e,a.call(t,i)):s===u.length&&o())}function r(e){s++,n(e)}function o(){e.data._doc_id_rev=e.data._id+"::"+e.data._rev;var n=N.objectStore(p).put(e.data);n.onsuccess=function(n){e.metadata.seq=n.target.result,delete e.metadata.rev;var r=N.objectStore(f).put(e.metadata);r.onsuccess=function(){A.push(e),a.call(t)}}}var i=null,s=0;e.data._id=e.metadata.id,e.data._rev=e.metadata.rev,I++,a.isDeleted(e.metadata,e.metadata.rev)&&(e.data._deleted=!0);var u=e.data._attachments?Object.keys(e.data._attachments):[];for(var c in e.data._attachments)if(e.data._attachments[c].stub)s++,n();else{var d=e.data._attachments[c].data;delete e.data._attachments[c].data;var l=e.data._attachments[c].digest;R(e,l,d,r)}u.length||o()}function q(e,t){var n=i.merge(e.rev_tree,t.metadata.rev_tree[0],1e3),r=a.isDeleted(e),o=r&&a.isDeleted(t.metadata)||!r&&O&&"new_leaf"!==n.conflicts;return o?(A.push(E(s.REV_CONFLICT,t._bulk_seq)),l()):(t.metadata.rev_tree=n.tree,k(t,l),void 0)}function S(e){return"was_delete"in t&&a.isDeleted(e.metadata)?(A.push(s.MISSING_DOC),l()):(k(e,l),void 0)}function E(e,t){return e._bulk_seq=t,e}function R(e,t,n,r){{var o=N.objectStore(v);o.get(t).onsuccess=function(i){var s=i.target.result&&i.target.result.refs||{},u=[e.metadata.id,e.metadata.rev].join("@"),c={digest:t,body:n,refs:s};c.refs[u]=!0;o.put(c).onsuccess=function(){a.call(r)}}}}var O=t.new_edits,T=e.docs,C=T.map(function(e,t){var n=a.parseDoc(e,O);return n._bulk_seq=t,n}),D=C.filter(function(e){return e.error});if(D.length)return a.call(o,D[0]);var N,A=[],I=0;b(function(){N=w.transaction([f,p,v,_],"readwrite"),N.onerror=n(o),N.ontimeout=n(o),N.oncomplete=m,l()})},k._get=function(e,t,n){function r(){a.call(n,c,{doc:o,metadata:u,ctx:d})}var o,u,c,d;d=t.ctx?t.ctx:w.transaction([f,p,v],"readonly"),d.objectStore(f).get(e).onsuccess=function(e){if(u=e.target.result,!u)return c=s.MISSING_DOC,r();if(a.isDeleted(u)&&!t.rev)return c=s.error(s.MISSING_DOC,"deleted"),r();var n=i.winningRev(u),l=u.id+"::"+(t.rev?t.rev:n),f=d.objectStore(p).index("_doc_id_rev");f.get(l).onsuccess=function(e){return o=e.target.result,o&&o._doc_id_rev&&delete o._doc_id_rev,o?(r(),void 0):(c=s.MISSING_DOC,r())}}},k._getAttachment=function(e,t,n){var r,o;o=t.ctx?t.ctx:w.transaction([f,p,v],"readonly");var i=e.digest,s=e.content_type;o.objectStore(v).get(i).onsuccess=function(e){var o=e.target.result.body;if(t.encode)if(y){var i=new FileReader;i.onloadend=function(){r=btoa(this.result),a.call(n,null,r)},i.readAsBinaryString(o)}else r=o,a.call(n,null,r);else y?r=o:(o=c(atob(o)),r=a.createBlob([o],{type:s})),a.call(n,null,r)}},k._allDocs=function(e,t){var n="startkey"in e?e.startkey:!1,r="endkey"in e?e.endkey:!1,s="descending"in e?e.descending:!1;s=s?"prev":null;var u=n&&r?o.IDBKeyRange.bound(n,r):n?o.IDBKeyRange.lowerBound(n):r?o.IDBKeyRange.upperBound(r):null,c=w.transaction([f,p],"readonly");c.oncomplete=function(){"keys"in e&&(e.keys.forEach(function(e){e in _?v.push(_[e]):v.push({key:e,error:"not_found"})}),e.descending&&v.reverse()),a.call(t,null,{total_rows:v.length,offset:e.skip,rows:"limit"in e?v.slice(e.skip,e.limit+e.skip):e.skip>0?v.slice(e.skip):v})};var d=c.objectStore(f),l=s?d.openCursor(u,s):d.openCursor(u),v=[],_={};l.onsuccess=function(t){function n(t,n){if(a.isLocalId(t.id))return r["continue"]();var o={id:t.id,key:t.id,value:{rev:i.winningRev(t)}};if(e.include_docs){o.doc=n,o.doc._rev=i.winningRev(t),o.doc._doc_id_rev&&delete o.doc._doc_id_rev,e.conflicts&&(o.doc._conflicts=i.collectConflicts(t));for(var s in o.doc._attachments)o.doc._attachments[s].stub=!0}"keys"in e?e.keys.indexOf(t.id)>-1&&(a.isDeleted(t)&&(o.value.deleted=!0,o.doc=null),_[o.id]=o):a.isDeleted(t)||v.push(o),r["continue"]()}if(t.target.result){var r=t.target.result,o=r.value;if(e.include_docs){var s=c.objectStore(p).index("_doc_id_rev"),u=i.winningRev(o),d=o.id+"::"+u;s.get(d).onsuccess=function(e){n(r.value,e.target.result)}}else n(o)}}},k._info=function(e){function t(e){o=e.target.result&&e.target.result.updateSeq||0}function n(e){var n=e.target.result;return n?(n.value.deleted!==!0&&r++,n["continue"](),void 0):(a.objectStore(_).get(_).onsuccess=t,void 0)}var r=0,o=0,a=w.transaction([f,_],"readonly");a.oncomplete=function(){e(null,{db_name:h,doc_count:r,update_seq:o})},a.objectStore(f).openCursor().onsuccess=n},k._changes=function(e){function t(){v=w.transaction([f,p]),v.oncomplete=s;var t;t=d?v.objectStore(p).openCursor(o.IDBKeyRange.lowerBound(e.since,!0),d):v.objectStore(p).openCursor(o.IDBKeyRange.lowerBound(e.since,!0)),t.onsuccess=n,t.onerror=u}function n(t){if(!t.target.result){for(var n=0,r=_.length;r>n;n++){var o=_[n];o&&g.push(o)}return!1}var s=t.target.result,u=s.value._id,c=m[u];if(void 0!==c)return _[c].seq=s.key,_.push(_[c]),_[c]=null,m[u]=_.length-1,s["continue"]();var d=v.objectStore(f);d.get(s.value._id).onsuccess=function(t){var n=t.target.result;if(a.isLocalId(n.id))return s["continue"]();l<n.seq&&(l=n.seq);var r=i.winningRev(n),o=n.id+"::"+r,u=v.objectStore(p).index("_doc_id_rev");u.get(o).onsuccess=function(t){var o=t.target.result;delete o._doc_id_rev,o._rev=r;var a=e.processChange(o,n,e);a.seq=s.key;var i=a.id,u=m[i];void 0!==u&&(_[u]=null),_.push(a),m[i]=_.length-1,s["continue"]()}}}function s(){a.processChanges(e,g,l)}function u(){a.call(e.complete)}if(e.continuous){var c=h+":"+a.uuid();return e.cancelled=!1,r.Changes.addListener(h,c,k,e),r.Changes.notify(h),{cancel:function(){e.cancelled=!0,r.Changes.removeListener(h,c)}}}var d=e.descending?"prev":null,l=0;e.since=e.since&&!d?e.since:0;var v,_=[],m={},g=[];t()},k._close=function(e){return null===w?a.call(e,s.NOT_OPEN):(w.close(),a.call(e,null),void 0)},k._getRevisionTree=function(e,t){var n=w.transaction([f],"readonly"),r=n.objectStore(f).get(e);r.onsuccess=function(e){var n=e.target.result;n?a.call(t,null,n.rev_tree):a.call(t,s.MISSING_DOC)}},k._doCompaction=function(e,t,n,r){var o=w.transaction([f,p],"readwrite"),i=o.objectStore(f);i.get(e).onsuccess=function(r){var a=r.target.result;a.rev_tree=t;var i=n.length;n.forEach(function(t){var n=o.objectStore(p).index("_doc_id_rev"),r=e+"::"+t;n.getKey(r).onsuccess=function(e){var t=e.target.result;if(t){{o.objectStore(p)["delete"](t)}i--,i||o.objectStore(f).put(a)}}})},o.oncomplete=function(){a.call(r)}},k}var o="undefined"!=typeof self?self:"undefined"!=typeof window?window:{},a=e("../utils"),i=e("../merge"),s=e("../deps/errors");r.valid=function(){return"undefined"!=typeof o&&!!o.indexedDB},r.destroy=function(e,t,i){"openReqList"in r||(r.openReqList={}),r.Changes.clearListeners(e),r.openReqList[e]&&r.openReqList[e].result&&r.openReqList[e].result.close();var s=o.indexedDB.deleteDatabase(e);s.onsuccess=function(){r.openReqList[e]&&(r.openReqList[e]=null),a.call(i,null)},s.onerror=n(i)},r.Changes=new a.Changes,t.exports=r},{"../deps/errors":8,"../merge":13,"../utils":16}],4:[function(e,t){function n(e){return"'"+e+"'"}function r(){return"undefined"!=typeof i?i.navigator&&i.navigator.sqlitePlugin&&i.navigator.sqlitePlugin.openDatabase?navigator.sqlitePlugin.openDatabase.apply(navigator.sqlitePlugin,arguments):i.sqlitePlugin&&i.sqlitePlugin.openDatabase?i.sqlitePlugin.openDatabase.apply(i.sqlitePlugin,arguments):i.openDatabase.apply(i,arguments):void 0}function o(e){return function(t){s.call(e,{status:500,error:t.type,reason:t.target})}}function a(e,t){function m(){t(null,g)}function h(){k.transaction(function(e){var t="CREATE TABLE IF NOT EXISTS "+_+" (update_seq, dbid)",n="CREATE TABLE IF NOT EXISTS "+v+" (digest, json, body BLOB)",r="CREATE TABLE IF NOT EXISTS "+f+" (id unique, seq, json, winningseq)",o="CREATE TABLE IF NOT EXISTS "+p+" (seq INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, doc_id_rev UNIQUE, json)";e.executeSql(n),e.executeSql(r),e.executeSql(o),e.executeSql(t);var a="SELECT update_seq FROM "+_;e.executeSql(a,[],function(e,t){if(!t.rows.length){var n="INSERT INTO "+_+" (update_seq) VALUES (?)";return e.executeSql(n,[0]),void 0}});var i="SELECT dbid FROM "+_+" WHERE dbid IS NOT NULL";e.executeSql(i,[],function(e,t){if(!t.rows.length){var n="UPDATE "+_+" SET dbid=?";
return y=s.uuid(),e.executeSql(n,[y]),void 0}y=t.rows.item(0).dbid})},o(t),m)}var g={},y=null,b=e.name,k=r(b,d,b,l);return k?(s.isCordova()&&"undefined"!=typeof i?i.addEventListener(b+"_pouch",function w(){i.removeEventListener(b+"_pouch",w,!1),h()},!1):h(),g.type=function(){return"websql"},g.id=function(){return y},g._info=function(e){k.transaction(function(t){var n="SELECT COUNT(id) AS count FROM "+f;t.executeSql(n,[],function(t,n){var r=n.rows.item(0).count,o="SELECT update_seq FROM "+_;t.executeSql(o,[],function(t,n){var o=n.rows.item(0).update_seq;e(null,{db_name:b,doc_count:r,update_seq:o})})})})},g._bulkDocs=function(e,t,r){function i(e,t){return e._bulk_seq-t._bulk_seq}function d(){var e=[];A.sort(i),A.forEach(function(t){if(delete t._bulk_seq,t.error)return e.push(t),void 0;var n=t.metadata,r=u.winningRev(n);e.push({ok:!0,id:n.id,rev:r}),s.isLocalId(n.id)||(T++,a.Changes.notify(b),a.Changes.notifyLocalWindows(b))});var t="SELECT update_seq FROM "+_;N.executeSql(t,[],function(t,n){var o=n.rows.item(0).update_seq+T,a="UPDATE "+_+" SET update_seq=?";t.executeSql(a,[o],function(){s.call(r,null,e)})})}function l(e,t){if(e.stub)return t();if("string"==typeof e.data){try{e.data=atob(e.data)}catch(n){var o=c.error(c.BAD_ARG,"Attachments need to be base64 encoded");return s.call(r,o)}return e.digest="md5-"+s.Crypto.MD5(e.data),t()}var a=new FileReader;a.onloadend=function(){e.data=this.result,e.digest="md5-"+s.Crypto.MD5(this.result),t()},a.readAsBinaryString(e.data)}function m(e){function t(){n++,C.length===n&&e()}if(!C.length)return e();var n=0,r=0;C.forEach(function(e){function n(){r++,r===o.length&&t()}var o=e.data&&e.data._attachments?Object.keys(e.data._attachments):[];if(!o.length)return t();for(var a in e.data._attachments)l(e.data._attachments[a],n)})}function h(e,t,n){function r(){var t=e.data,n="INSERT INTO "+p+" (doc_id_rev, json) VALUES (?, ?);";N.executeSql(n,[t._id+"::"+t._rev,JSON.stringify(t)],i)}function o(e){c||(e?(c=e,s.call(t,c)):d===l.length&&r())}function a(e){d++,o(e)}function i(r,o){var a=e.metadata.seq=o.insertId;delete e.metadata.rev;var i=u.winningRev(e.metadata),c=n?"UPDATE "+f+" SET seq=?, json=?, winningseq=(SELECT seq FROM "+p+" WHERE doc_id_rev=?) WHERE id=?":"INSERT INTO "+f+" (id, seq, winningseq, json) VALUES (?, ?, ?, ?);",d=JSON.stringify(e.metadata),l=e.metadata.id+"::"+i,v=n?[a,d,l,e.metadata.id]:[e.metadata.id,a,a,d];r.executeSql(c,v,function(){A.push(e),s.call(t,null)})}var c=null,d=0;e.data._id=e.metadata.id,e.data._rev=e.metadata.rev,s.isDeleted(e.metadata,e.metadata.rev)&&(e.data._deleted=!0);var l=e.data._attachments?Object.keys(e.data._attachments):[];for(var v in e.data._attachments)if(e.data._attachments[v].stub)d++,o();else{var _=e.data._attachments[v].data;delete e.data._attachments[v].data;var m=e.data._attachments[v].digest;S(e,m,_,a)}l.length||r()}function g(e,t){var n=u.merge(e.rev_tree,t.metadata.rev_tree[0],1e3),r=s.isDeleted(e)&&s.isDeleted(t.metadata)||!s.isDeleted(e)&&R&&"new_leaf"!==n.conflicts;return r?(A.push(q(c.REV_CONFLICT,t._bulk_seq)),w()):(t.metadata.rev_tree=n.tree,h(t,w,!0),void 0)}function y(e){return"was_delete"in t&&s.isDeleted(e.metadata)?(A.push(c.MISSING_DOC),w()):(h(e,w,!1),void 0)}function w(){if(!C.length)return d();var e=C.shift(),t=e.metadata.id;t in I?g(I[t],e):(I[t]=e.metadata,y(e))}function q(e,t){return e._bulk_seq=t,e}function S(e,t,n,r){var o=[e.metadata.id,e.metadata.rev].join("@"),a={digest:t},i="SELECT digest, json FROM "+v+" WHERE digest=?";N.executeSql(i,[t],function(e,u){u.rows.length?(a.refs=JSON.parse(u.rows.item(0).json).refs,i="UPDATE "+v+" SET json=?, body=? WHERE digest=?",e.executeSql(i,[JSON.stringify(a),n,t],function(){s.call(r,null)})):(a.refs={},a.refs[o]=!0,i="INSERT INTO "+v+"(digest, json, body) VALUES (?, ?, ?)",e.executeSql(i,[t,JSON.stringify(a),n],function(){s.call(r,null)}))})}function E(e,t){for(var n=0;n<t.rows.length;n++){var r=t.rows.item(n);I[r.id]=JSON.parse(r.json)}w()}var R=t.new_edits,O=e.docs,T=0,C=O.map(function(e,t){var n=s.parseDoc(e,R);return n._bulk_seq=t,n}),D=C.filter(function(e){return e.error});if(D.length)return s.call(r,D[0]);var N,A=[],I={};m(function(){k.transaction(function(e){N=e;var t="("+C.map(function(e){return n(e.metadata.id)}).join(",")+")",r="SELECT * FROM "+f+" WHERE id IN "+t;N.executeSql(r,[],E)},o(r))})},g._get=function(e,t,n){function r(){s.call(n,i,{doc:o,metadata:a,ctx:d})}var o,a,i;if(!t.ctx)return k.transaction(function(r){t.ctx=r,g._get(e,t,n)}),void 0;var d=t.ctx,l="SELECT * FROM "+f+" WHERE id=?";d.executeSql(l,[e],function(e,n){if(!n.rows.length)return i=c.MISSING_DOC,r();if(a=JSON.parse(n.rows.item(0).json),s.isDeleted(a)&&!t.rev)return i=c.error(c.MISSING_DOC,"deleted"),r();var l=u.winningRev(a),f=t.rev?t.rev:l;f=a.id+"::"+f;var v="SELECT * FROM "+p+" WHERE doc_id_rev=?";d.executeSql(v,[f],function(e,t){return t.rows.length?(o=JSON.parse(t.rows.item(0).json),r(),void 0):(i=c.MISSING_DOC,r())})})},g._allDocs=function(e,t){var n=[],r={},a="startkey"in e?e.startkey:!1,i="endkey"in e?e.endkey:!1,c="descending"in e?e.descending:!1,d="SELECT "+f+".id, "+p+".seq, "+p+".json AS data, "+f+".json AS metadata FROM "+p+" JOIN "+f+" ON "+p+".seq = "+f+".winningseq",l=[];"keys"in e?(d+=" WHERE "+f+".id IN ("+e.keys.map(function(){return"?"}).join(",")+")",l=l.concat(e.keys)):(a&&(d+=" WHERE "+f+".id >= ?",l.push(a)),i&&(d+=(a?" AND ":" WHERE ")+f+".id <= ?",l.push(i)),d+=" ORDER BY "+f+".id "+(c?"DESC":"ASC")),k.transaction(function(t){t.executeSql(d,l,function(t,o){for(var a=0,i=o.rows.length;i>a;a++){var c=o.rows.item(a),d=JSON.parse(c.metadata),l=JSON.parse(c.data);if(!s.isLocalId(d.id)){if(c={id:d.id,key:d.id,value:{rev:u.winningRev(d)}},e.include_docs){c.doc=l,c.doc._rev=u.winningRev(d),e.conflicts&&(c.doc._conflicts=u.collectConflicts(d));for(var f in c.doc._attachments)c.doc._attachments[f].stub=!0}"keys"in e?e.keys.indexOf(d.id)>-1&&(s.isDeleted(d)&&(c.value.deleted=!0,c.doc=null),r[c.id]=c):s.isDeleted(d)||n.push(c)}}})},o(t),function(){"keys"in e&&(e.keys.forEach(function(e){e in r?n.push(r[e]):n.push({key:e,error:"not_found"})}),e.descending&&n.reverse()),s.call(t,null,{total_rows:n.length,offset:e.skip,rows:"limit"in e?n.slice(e.skip,e.limit+e.skip):e.skip>0?n.slice(e.skip):n})})},g._changes=function(e){function t(){var t="SELECT "+f+".id, "+p+".seq, "+p+".json AS data, "+f+".json AS metadata FROM "+p+" JOIN "+f+" ON "+p+".seq = "+f+".winningseq WHERE "+f+".seq > "+e.since+" ORDER BY "+f+".seq "+(r?"DESC":"ASC");k.transaction(function(n){n.executeSql(t,[],function(t,n){for(var r=0,a=0,i=n.rows.length;i>a;a++){var u=n.rows.item(a),c=JSON.parse(u.metadata);if(!s.isLocalId(c.id)){r<u.seq&&(r=u.seq);var d=JSON.parse(u.data),l=e.processChange(d,c,e);l.seq=u.seq,o.push(l)}}s.processChanges(e,o,r)})})}if(e.continuous){var n=b+":"+s.uuid();return e.cancelled=!1,a.Changes.addListener(b,n,g,e),a.Changes.notify(b),{cancel:function(){e.cancelled=!0,a.Changes.removeListener(b,n)}}}var r=e.descending;e.since=e.since&&!r?e.since:0;var o=[];t()},g._close=function(e){s.call(e,null)},g._getAttachment=function(e,t,n){var r,o=t.ctx,a=e.digest,i=e.content_type,u="SELECT body FROM "+v+" WHERE digest=?";o.executeSql(u,[a],function(e,o){var a=o.rows.item(0).body;r=t.encode?btoa(a):s.createBlob([a],{type:i}),s.call(n,null,r)})},g._getRevisionTree=function(e,t){k.transaction(function(n){var r="SELECT json AS metadata FROM "+f+" WHERE id = ?";n.executeSql(r,[e],function(e,n){if(n.rows.length){var r=JSON.parse(n.rows.item(0).metadata);s.call(t,null,r.rev_tree)}else s.call(t,c.MISSING_DOC)})})},g._doCompaction=function(e,t,r,o){k.transaction(function(a){var i="SELECT json AS metadata FROM "+f+" WHERE id = ?";a.executeSql(i,[e],function(a,i){if(!i.rows.length)return s.call(o);var u=JSON.parse(i.rows.item(0).metadata);u.rev_tree=t;var c="DELETE FROM "+p+" WHERE doc_id_rev IN ("+r.map(function(t){return n(e+"::"+t)}).join(",")+")";a.executeSql(c,[],function(t){var n="UPDATE "+f+" SET json = ? WHERE id = ?";t.executeSql(n,[JSON.stringify(u),e],function(){o()})})})})},g):s.call(t,c.UNKNOWN_ERROR)}var i="undefined"!=typeof self?self:"undefined"!=typeof window?window:{},s=e("../utils"),u=e("../merge"),c=e("../deps/errors"),d=1,l=5242880,f=n("document-store"),p=n("by-sequence"),v=n("attach-store"),_=n("metadata-store");a.valid=function(){if("undefined"!=typeof i){if(i.navigator&&i.navigator.sqlitePlugin&&i.navigator.sqlitePlugin.openDatabase)return!0;if(i.sqlitePlugin&&i.sqlitePlugin.openDatabase)return!0;if(i.openDatabase)return!0}return!1},a.destroy=function(e,t,n){var a=r(e,d,e,l);a.transaction(function(e){e.executeSql("DROP TABLE IF EXISTS "+f,[]),e.executeSql("DROP TABLE IF EXISTS "+p,[]),e.executeSql("DROP TABLE IF EXISTS "+v,[]),e.executeSql("DROP TABLE IF EXISTS "+_,[])},o(n),function(){s.call(n,null)})},a.Changes=new s.Changes,t.exports=a},{"../deps/errors":8,"../merge":13,"../utils":16}],5:[function(e,t){"use strict";function n(e,t,o){if(!(this instanceof n))return new n(e,t,o);("function"==typeof t||"undefined"==typeof t)&&(o=t,t={}),"object"==typeof e&&(t=e,e=void 0),"undefined"==typeof o&&(o=function(){});var a=t.name||e,i=n.parseAdapter(a);if(t.originalName=a,t.name=i.name,t.adapter=t.adapter||i.adapter,!n.adapters[t.adapter])throw"Adapter is missing";if(!n.adapters[t.adapter].valid())throw"Invalid Adapter";var s=new r(t,function(e,t){if(e)return o&&o(e),void 0;for(var r in n.plugins){var a=n.plugins[r](t);for(var i in a)i in t||(t[i]=a[i])}t.taskqueue.ready(!0),t.taskqueue.execute(t),o(null,t)});for(var u in s)this[u]=s[u];for(var c in n.plugins){var d=n.plugins[c](this);for(var l in d)l in this||(this[l]=d[l])}}var r=e("./adapter")(n);t.exports=n},{"./adapter":1}],6:[function(e,t){function n(e,t){function n(e){var t=Array.prototype.slice.call(arguments,1);typeof e==typeof Function&&e.apply(this,t)}function u(t,r,o){if(e.binary||e.json||!e.processData||"string"==typeof t){if(!e.binary&&e.json&&"string"==typeof t)try{t=JSON.parse(t)}catch(a){return n(o,a),void 0}}else t=JSON.stringify(t);Array.isArray(t)&&(t=t.map(function(e){var t;return e.ok?e:e.error&&"conflict"===e.error?(t=s.REV_CONFLICT,t.id=e.id,t):e.missing?(t=s.MISSING_DOC,t.missing=e.missing,t):void 0})),n(o,null,t,r)}function c(e,t){var r,o,a,i;try{r=JSON.parse(e.responseText);for(i in s)if(s[i].name===r.error){a=s[i];break}a=a||s.UNKNOWN_ERROR,o=s.error(a,r.reason)}catch(u){o=s.error(s.UNKNOWN_ERROR)}n(t,o)}"function"==typeof e&&(t=e,e={});var d={method:"GET",headers:{},json:!0,processData:!0,timeout:1e4};if(e=a(!0,d,e),r.browser&&"undefined"!=typeof XMLHttpRequest){var l,f=!1,p=new XMLHttpRequest;p.open(e.method,e.url),p.withCredentials=!0,e.json&&(e.headers.Accept="application/json",e.headers["Content-Type"]=e.headers["Content-Type"]||"application/json",e.body&&e.processData&&"string"!=typeof e.body&&(e.body=JSON.stringify(e.body))),e.binary&&(p.responseType="arraybuffer");var v=function(e,t,n){var r="";if(n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3),r="; expires="+o.toGMTString()}document.cookie=e+"="+t+r+"; path=/"};for(var _ in e.headers)if("Cookie"===_){var m=e.headers[_].split("=");v(m[0],m[1],10)}else p.setRequestHeader(_,e.headers[_]);"body"in e||(e.body=null);var h=function(){f=!0,p.abort(),n(c,p,t)};return p.onreadystatechange=function(){if(4===p.readyState&&!f)if(clearTimeout(l),p.status>=200&&p.status<300){var r;r=e.binary?i([p.response||""],{type:p.getResponseHeader("Content-Type")}):p.responseText,n(u,r,p,t)}else n(c,p,t)},e.timeout>0&&(l=setTimeout(h,e.timeout),p.upload.onprogress=p.onprogress=function(){clearTimeout(l),l=setTimeout(h,e.timeout)}),p.send(e.body),{abort:h}}return e.json&&(e.binary||(e.headers.Accept="application/json"),e.headers["Content-Type"]=e.headers["Content-Type"]||"application/json"),e.binary&&(e.encoding=null,e.json=!1),e.processData||(e.json=!1),o(e,function(r,o,a){if(r)return r.status=o?o.statusCode:400,n(c,r,t);var i,d=o.headers["content-type"],l=a||"";e.binary||!e.json&&e.processData||"object"==typeof l||!(/json/.test(d)||/^[\s]*\{/.test(l)&&/\}[\s]*$/.test(l))||(l=JSON.parse(l)),o.statusCode>=200&&o.statusCode<300?n(u,l,o,t):(e.binary&&(l=JSON.parse(l.toString())),i="missing"===l.reason?s.MISSING_DOC:"no_db_file"===l.reason?s.error(s.DB_MISSING,l.reason):"conflict"===l.error?s.REV_CONFLICT:s.error(s.UNKNOWN_ERROR,l.reason,l.error),i.status=o.statusCode,n(t,i))})}var r=e("__browserify_process"),o=e("request"),a=e("./extend.js"),i=e("./blob.js"),s=e("./errors");t.exports=n},{"./blob.js":7,"./errors":8,"./extend.js":9,__browserify_process:19,request:18}],7:[function(e,t){function n(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(n){if("TypeError"!==n.name)throw n;for(var o=r.BlobBuilder||r.MSBlobBuilder||r.MozBlobBuilder||r.WebKitBlobBuilder,a=new o,i=0;i<e.length;i+=1)a.append(e[i]);return a.getBlob(t.type)}}var r="undefined"!=typeof self?self:"undefined"!=typeof window?window:{};t.exports=n},{}],8:[function(e,t,n){"use strict";function r(e){this.status=e.status,this.name=e.error,this.message=e.reason,this.error=!0}r.prototype=new Error,n.MISSING_BULK_DOCS=new r({status:400,error:"bad_request",reason:"Missing JSON list of 'docs'"}),n.MISSING_DOC=new r({status:404,error:"not_found",reason:"missing"}),n.REV_CONFLICT=new r({status:409,error:"conflict",reason:"Document update conflict"}),n.INVALID_ID=new r({status:400,error:"invalid_id",reason:"_id field must contain a string"}),n.MISSING_ID=new r({status:412,error:"missing_id",reason:"_id is required for puts"}),n.RESERVED_ID=new r({status:400,error:"bad_request",reason:"Only reserved document ids may start with underscore."}),n.NOT_OPEN=new r({status:412,error:"precondition_failed",reason:"Database not open so cannot close"}),n.UNKNOWN_ERROR=new r({status:500,error:"unknown_error",reason:"Database encountered an unknown error"}),n.BAD_ARG=new r({status:500,error:"badarg",reason:"Some query argument is invalid"}),n.INVALID_REQUEST=new r({status:400,error:"invalid_request",reason:"Request was invalid"}),n.QUERY_PARSE_ERROR=new r({status:400,error:"query_parse_error",reason:"Some query parameter is invalid"}),n.DOC_VALIDATION=new r({status:500,error:"doc_validation",reason:"Bad special document member"}),n.BAD_REQUEST=new r({status:400,error:"bad_request",reason:"Something wrong with the request"}),n.NOT_AN_OBJECT=new r({status:400,error:"bad_request",reason:"Document must be a JSON object"}),n.DB_MISSING=new r({status:404,error:"not_found",reason:"Database not found"}),n.IDB_ERROR=new r({status:500,error:"indexed_db_went_bad",reason:"unknown"}),n.WSQ_ERROR=new r({status:500,error:"web_sql_went_bad",reason:"unknown"}),n.LDB_ERROR=new r({status:500,error:"levelDB_went_went_bad",reason:"unknown"}),n.error=function(e,t,n){function r(){this.message=t,n&&(this.name=n)}return r.prototype=e,new r(t)}},{}],9:[function(e,t){"use strict";function n(e){return null===e?String(e):"object"==typeof e||"function"==typeof e?s[l.call(e)]||"object":typeof e}function r(e){return null!==e&&e===e.window}function o(e){if(!e||"object"!==n(e)||e.nodeType||r(e))return!1;try{if(e.constructor&&!f.call(e,"constructor")&&!f.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}var o;for(o in e);return void 0===o||f.call(e,o)}function a(e){return"function"===n(e)}function i(){var e,t,n,r,s,u,c=arguments[0]||{},d=1,l=arguments.length,f=!1;for("boolean"==typeof c&&(f=c,c=arguments[1]||{},d=2),"object"==typeof c||a(c)||(c={}),l===d&&(c=this,--d);l>d;d++)if(null!=(e=arguments[d]))for(t in e)n=c[t],r=e[t],c!==r&&(f&&r&&(o(r)||(s=p(r)))?(s?(s=!1,u=n&&p(n)?n:[]):u=n&&o(n)?n:{},c[t]=i(f,u,r)):void 0!==r&&(p(e)&&a(r)||(c[t]=r)));return c}for(var s={},u=["Boolean","Number","String","Function","Array","Date","RegExp","Object","Error"],c=0;c<u.length;c++){var d=u[c];s["[object "+d+"]"]=d.toLowerCase()}var l=s.toString,f=s.hasOwnProperty,p=Array.isArray||function(e){return"array"===n(e)};t.exports=i},{}],10:[function(e,t,n){var r=e("__browserify_process"),o=e("crypto");n.MD5=function(e){function t(e,t){return e<<t|e>>>32-t}function n(e,t){var n,r,o,a,i;return o=2147483648&e,a=2147483648&t,n=1073741824&e,r=1073741824&t,i=(1073741823&e)+(1073741823&t),n&r?2147483648^i^o^a:n|r?1073741824&i?3221225472^i^o^a:1073741824^i^o^a:i^o^a}function a(e,t,n){return e&t|~e&n}function i(e,t,n){return e&n|t&~n}function s(e,t,n){return e^t^n}function u(e,t,n){return t^(e|~n)}function c(e,r,o,i,s,u,c){return e=n(e,n(n(a(r,o,i),s),c)),n(t(e,u),r)}function d(e,r,o,a,s,u,c){return e=n(e,n(n(i(r,o,a),s),c)),n(t(e,u),r)}function l(e,r,o,a,i,u,c){return e=n(e,n(n(s(r,o,a),i),c)),n(t(e,u),r)}function f(e,r,o,a,i,s,c){return e=n(e,n(n(u(r,o,a),i),c)),n(t(e,s),r)}function p(e){for(var t,n=e.length,r=n+8,o=(r-r%64)/64,a=16*(o+1),i=new Array(a-1),s=0,u=0;n>u;)t=(u-u%4)/4,s=u%4*8,i[t]=i[t]|e.charCodeAt(u)<<s,u++;return t=(u-u%4)/4,s=u%4*8,i[t]=i[t]|128<<s,i[a-2]=n<<3,i[a-1]=n>>>29,i}function v(e){var t,n,r="",o="";for(n=0;3>=n;n++)t=e>>>8*n&255,o="0"+t.toString(16),r+=o.substr(o.length-2,2);return r}if(!r.browser)return o.createHash("md5").update(e).digest("hex");var _,m,h,g,y,b,k,w,q,S=[],E=7,R=12,O=17,T=22,C=5,D=9,N=14,A=20,I=4,x=11,j=16,L=23,B=6,P=10,M=15,U=21;for(S=p(e),b=1732584193,k=4023233417,w=2562383102,q=271733878,_=0;_<S.length;_+=16)m=b,h=k,g=w,y=q,b=c(b,k,w,q,S[_+0],E,3614090360),q=c(q,b,k,w,S[_+1],R,3905402710),w=c(w,q,b,k,S[_+2],O,606105819),k=c(k,w,q,b,S[_+3],T,3250441966),b=c(b,k,w,q,S[_+4],E,4118548399),q=c(q,b,k,w,S[_+5],R,1200080426),w=c(w,q,b,k,S[_+6],O,2821735955),k=c(k,w,q,b,S[_+7],T,4249261313),b=c(b,k,w,q,S[_+8],E,1770035416),q=c(q,b,k,w,S[_+9],R,2336552879),w=c(w,q,b,k,S[_+10],O,4294925233),k=c(k,w,q,b,S[_+11],T,2304563134),b=c(b,k,w,q,S[_+12],E,1804603682),q=c(q,b,k,w,S[_+13],R,4254626195),w=c(w,q,b,k,S[_+14],O,2792965006),k=c(k,w,q,b,S[_+15],T,1236535329),b=d(b,k,w,q,S[_+1],C,4129170786),q=d(q,b,k,w,S[_+6],D,3225465664),w=d(w,q,b,k,S[_+11],N,643717713),k=d(k,w,q,b,S[_+0],A,3921069994),b=d(b,k,w,q,S[_+5],C,3593408605),q=d(q,b,k,w,S[_+10],D,38016083),w=d(w,q,b,k,S[_+15],N,3634488961),k=d(k,w,q,b,S[_+4],A,3889429448),b=d(b,k,w,q,S[_+9],C,568446438),q=d(q,b,k,w,S[_+14],D,3275163606),w=d(w,q,b,k,S[_+3],N,4107603335),k=d(k,w,q,b,S[_+8],A,1163531501),b=d(b,k,w,q,S[_+13],C,2850285829),q=d(q,b,k,w,S[_+2],D,4243563512),w=d(w,q,b,k,S[_+7],N,1735328473),k=d(k,w,q,b,S[_+12],A,2368359562),b=l(b,k,w,q,S[_+5],I,4294588738),q=l(q,b,k,w,S[_+8],x,2272392833),w=l(w,q,b,k,S[_+11],j,1839030562),k=l(k,w,q,b,S[_+14],L,4259657740),b=l(b,k,w,q,S[_+1],I,2763975236),q=l(q,b,k,w,S[_+4],x,1272893353),w=l(w,q,b,k,S[_+7],j,4139469664),k=l(k,w,q,b,S[_+10],L,3200236656),b=l(b,k,w,q,S[_+13],I,681279174),q=l(q,b,k,w,S[_+0],x,3936430074),w=l(w,q,b,k,S[_+3],j,3572445317),k=l(k,w,q,b,S[_+6],L,76029189),b=l(b,k,w,q,S[_+9],I,3654602809),q=l(q,b,k,w,S[_+12],x,3873151461),w=l(w,q,b,k,S[_+15],j,530742520),k=l(k,w,q,b,S[_+2],L,3299628645),b=f(b,k,w,q,S[_+0],B,4096336452),q=f(q,b,k,w,S[_+7],P,1126891415),w=f(w,q,b,k,S[_+14],M,2878612391),k=f(k,w,q,b,S[_+5],U,4237533241),b=f(b,k,w,q,S[_+12],B,1700485571),q=f(q,b,k,w,S[_+3],P,2399980690),w=f(w,q,b,k,S[_+10],M,4293915773),k=f(k,w,q,b,S[_+1],U,2240044497),b=f(b,k,w,q,S[_+8],B,1873313359),q=f(q,b,k,w,S[_+15],P,4264355552),w=f(w,q,b,k,S[_+6],M,2734768916),k=f(k,w,q,b,S[_+13],U,1309151649),b=f(b,k,w,q,S[_+4],B,4149444226),q=f(q,b,k,w,S[_+11],P,3174756917),w=f(w,q,b,k,S[_+2],M,718787259),k=f(k,w,q,b,S[_+9],U,3951481745),b=n(b,m),k=n(k,h),w=n(w,g),q=n(q,y);var F=v(b)+v(k)+v(w)+v(q);return F.toLowerCase()}},{__browserify_process:19,crypto:18}],11:[function(e,t){"use strict";function n(e,t){var r,o=n.CHARS,a=[];if(t=t||o.length,e)for(r=0;e>r;r++)a[r]=o[0|Math.random()*t];else{var i;for(a[8]=a[13]=a[18]=a[23]="-",a[14]="4",r=0;36>r;r++)a[r]||(i=0|16*Math.random(),a[r]=o[19===r?3&i|8:i])}return a.join("")}n.CHARS="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),t.exports=n},{}],12:[function(e,t){var n=e("__browserify_process"),r=e("./setup");t.exports=r,r.ajax=e("./deps/ajax"),r.extend=e("./deps/extend"),r.utils=e("./utils"),r.Errors=e("./deps/errors"),r.replicate=e("./replicate").replicate,r.version=e("./version");var o=e("./adapters/http");if(r.adapter("http",o),r.adapter("https",o),r.adapter("idb",e("./adapters/idb")),r.adapter("websql",e("./adapters/websql")),r.plugin("mapreduce",e("pouchdb-mapreduce")),!n.browser){var a=e("./adapters/leveldb");r.adapter("ldb",a),r.adapter("leveldb",a)}},{"./adapters/http":2,"./adapters/idb":3,"./adapters/leveldb":18,"./adapters/websql":4,"./deps/ajax":6,"./deps/errors":8,"./deps/extend":9,"./replicate":14,"./setup":15,"./utils":16,"./version":17,__browserify_process:19,"pouchdb-mapreduce":20}],13:[function(e,t){"use strict";function n(e){for(var t,n=e.shift(),r=[n.id,n.opts,[]],o=r;e.length;)n=e.shift(),t=[n.id,n.opts,[]],o[2].push(t),o=t;return r}function r(e,t){for(var n=[{tree1:e,tree2:t}],r=!1;n.length>0;){var o=n.pop(),a=o.tree1,i=o.tree2;(a[1].status||i[1].status)&&(a[1].status="available"===a[1].status||"available"===i[1].status?"available":"missing");for(var s=0;s<i[2].length;s++)if(a[2][0]){for(var u=!1,c=0;c<a[2].length;c++)a[2][c][0]===i[2][s][0]&&(n.push({tree1:a[2][c],tree2:i[2][s]}),u=!0);u||(r="new_branch",a[2].push(i[2][s]),a[2].sort())}else r="new_leaf",a[2][0]=i[2][s]}return{conflicts:r,tree:e}}function o(e,t,n){var o,a=[],i=!1,s=!1;return e.length?(e.forEach(function(e){if(e.pos===t.pos&&e.ids[0]===t.ids[0])o=r(e.ids,t.ids),a.push({pos:e.pos,ids:o.tree}),i=i||o.conflicts,s=!0;else if(n!==!0){var u=e.pos<t.pos?e:t,c=e.pos<t.pos?t:e,d=c.pos-u.pos,l=[],f=[];for(f.push({ids:u.ids,diff:d,parent:null,parentIdx:null});f.length>0;){var p=f.pop();0!==p.diff?p.ids&&p.ids[2].forEach(function(e,t){f.push({ids:e,diff:p.diff-1,parent:p.ids,parentIdx:t})}):p.ids[0]===c.ids[0]&&l.push(p)}var v=l[0];v?(o=r(v.ids,c.ids),v.parent[2][v.parentIdx]=o.tree,a.push({pos:u.pos,ids:u.ids}),i=i||o.conflicts,s=!0):a.push(e)}else a.push(e)}),s||a.push(t),a.sort(function(e,t){return e.pos-t.pos}),{tree:a,conflicts:i||"internal_node"}):{tree:[t],conflicts:"new_leaf"}}function a(e,t){var r=s.rootToLeaf(e).map(function(e){var r=e.ids.slice(-t);return{pos:e.pos+(e.ids.length-r.length),ids:n(r)}});return r.reduce(function(e,t){return o(e,t,!0).tree},[r.shift()])}var i=e("./deps/extend"),s={};s.merge=function(e,t,n){e=i(!0,[],e),t=i(!0,{},t);var r=o(e,t);return{tree:a(r.tree,n),conflicts:r.conflicts}},s.winningRev=function(e){var t=[];return s.traverseRevTree(e.rev_tree,function(e,n,r,o,a){e&&t.push({pos:n,id:r,deleted:!!a.deleted})}),t.sort(function(e,t){return e.deleted!==t.deleted?e.deleted>t.deleted?1:-1:e.pos!==t.pos?t.pos-e.pos:e.id<t.id?1:-1}),t[0].pos+"-"+t[0].id},s.traverseRevTree=function(e,t){var n=[];for(e.forEach(function(e){n.push({pos:e.pos,ids:e.ids})});n.length>0;){var r=n.pop(),o=r.pos,a=r.ids,i=t(0===a[2].length,o,a[0],r.ctx,a[1]);a[2].forEach(function(e){n.push({pos:o+1,ids:e,ctx:i})})}},s.collectLeaves=function(e){var t=[];return s.traverseRevTree(e,function(e,n,r,o,a){e&&t.unshift({rev:n+"-"+r,pos:n,opts:a})}),t.sort(function(e,t){return t.pos-e.pos}),t.map(function(e){delete e.pos}),t},s.collectConflicts=function(e){var t=s.winningRev(e),n=s.collectLeaves(e.rev_tree),r=[];return n.forEach(function(e){e.rev===t||e.opts.deleted||r.push(e.rev)}),r},s.rootToLeaf=function(e){var t=[];return s.traverseRevTree(e,function(e,n,r,o,a){if(o=o?o.slice(0):[],o.push({id:r,opts:a}),e){var i=n+1-o.length;t.unshift({pos:i,ids:o})}return o}),t},t.exports=s},{"./deps/extend":9}],14:[function(e,t,n){function r(){var e=this;this.cancelled=!1,this.cancel=function(){e.cancelled=!0}}function o(e){var t=[],n={},r=!1;return n.enqueue=function(e,o){t.push({fun:e,args:o}),r||n.process()},n.process=function(){if(!r&&t.length&&!e.cancelled){r=!0;var n=t.shift();d.nextTick(function(){n.fun.apply(null,n.args)})}},n.notifyRequestComplete=function(){r=!1,n.process()},n}function a(e,t,n){var r=n.filter?n.filter.toString():"";return"_local/"+l.Crypto.MD5(e.id()+t.id()+r)}function i(e,t,n,r){t.get(n,function(t,o){t&&404===t.status?r(null,0):t?r(t):e.get(n,function(e,t){e&&404===e.status||!e&&o.last_seq!==t.last_seq?r(null,0):e?r(e):r(null,t.last_seq)})})}function s(e,t,n,r,o){function a(e,t){e.get(n,function(o,a){o&&404===o.status&&(a={_id:n}),a.last_seq=r,e.put(a,t)})}a(t,function(){a(e,function(){o()})})}function u(e,t,n,r){function u(r,o,a){if(n.onChange)for(var i=0;a>i;i++)n.onChange.apply(this,[R]);w-=a,R.docs_written+=a,s(e,t,y,q,function(){h.notifyRequestComplete(),m()})}function c(){if(!g.length)return h.notifyRequestComplete();var e=g.length;t.bulkDocs({docs:g},{new_edits:!1},function(t,n){u(t,n,e)}),g=[]}function d(t,n){e.get(t,{revs:!0,rev:n,attachments:!0},function(e,t){R.docs_read++,h.notifyRequestComplete(),g.push(t),h.enqueue(c)})}function f(e){return function(t,o){if(h.notifyRequestComplete(),t)return S&&r.cancel(),l.call(n.complete,t,null),void 0;if(0===Object.keys(o).length){for(var a in e)w-=e[a];return m(),void 0}var i=function(e){h.enqueue(d,[s,e])};for(var s in o){var u=e[s]-o[s].missing.length;w-=u,o[s].missing.forEach(i)}}}function p(e,n){t.revsDiff(e,f(n))}function v(e){q=e.seq,b.push(e);var t={};t[e.id]=e.changes.map(function(e){return e.rev});var n={};n[e.id]=e.changes.length,w+=e.changes.length,h.enqueue(p,[t,n])}function _(){k=!0,m()}function m(){k&&0===w&&(R.end_time=new Date,l.call(n.complete,null,R))}var h=new o(r),g=[],y=a(e,t,n),b=[],k=!1,w=0,q=0,S=n.continuous||!1,E=n.doc_ids,R={ok:!0,start_time:new Date,docs_read:0,docs_written:0};i(e,t,y,function(t,o){if(t)return l.call(n.complete,t);if(q=o,!r.cancelled){var a={continuous:S,since:q,style:"all_docs",onChange:v,complete:_,doc_ids:E};n.filter&&(a.filter=n.filter),n.query_params&&(a.query_params=n.query_params);var i=e.changes(a);if(n.continuous){var s=r.cancel;r.cancel=function(){s(),i.cancel()}}}})}function c(e,t){return"string"==typeof e?new f(e,t):(t(null,e),void 0)}var d=e("__browserify_process"),l=e("./utils"),f=e("./index");n.replicate=function(e,t,n,o){n instanceof Function&&(o=n,n={}),void 0===n&&(n={}),n.complete||(n.complete=o);var a=new r;return c(e,function(e,r){return e?l.call(o,e):(c(t,function(e,t){if(e)return l.call(o,e);if(n.server){if("function"!=typeof r.replicateOnServer)return l.call(o,{error:"Server replication not supported for "+r.type()+" adapter"});if(r.type()!==t.type())return l.call(o,{error:"Server replication for different adapter types ("+r.type()+" and "+t.type()+") is not supported"});r.replicateOnServer(t,n,a)}else u(r,t,n,a)}),void 0)}),a}},{"./index":12,"./utils":16,__browserify_process:19}],15:[function(e,t){"use strict";var n=e("./constructor");n.adapters={},n.plugins={},n.prefix="_pouch_",n.parseAdapter=function(e){var t,r=e.match(/([a-z\-]*):\/\/(.*)/);if(r){if(e=/http(s?)/.test(r[1])?r[1]+"://"+r[2]:r[2],t=r[1],!n.adapters[t].valid())throw"Invalid adapter";return{name:e,adapter:r[1]}}for(var o=["idb","leveldb","websql"],a=0;a<o.length;++a)if(o[a]in n.adapters){t=n.adapters[o[a]];var i="use_prefix"in t?t.use_prefix:!0;return{name:i?n.prefix+e:e,adapter:o[a]}}throw"No valid adapter found"},n.destroy=function(e,t,r){("function"==typeof t||"undefined"==typeof t)&&(r=t,t={}),"object"==typeof e&&(t=e,e=void 0),"undefined"==typeof r&&(r=function(){});var o=n.parseAdapter(t.name||e),a=o.name,i=function(e){if(e)return r(e),void 0;for(var i in n.plugins)n.plugins[i]._delete(a);n.adapters[o.adapter].destroy(a,t,r)};n.removeFromAllDbs(o,i)},n.removeFromAllDbs=function(e,t){if(!n.enableAllDbs)return t(),void 0;var r=e.adapter;return"http"===r||"https"===r?(t(),void 0):(new n(n.allDBName(e.adapter),function(r,o){if(r)return t(),void 0;var a=n.dbName(e.adapter,e.name);o.get(a,function(e,n){e?t():o.remove(n,function(e){t()})})}),void 0)},n.adapter=function(e,t){t.valid()&&(n.adapters[e]=t)},n.plugin=function(e,t){n.plugins[e]=t},n.enableAllDbs=!1,n.ALL_DBS="_allDbs",n.dbName=function(e,t){return[e,"-",t].join("")},n.realDBName=function(e,t){return[e,"://",t].join("")},n.allDBName=function(e){return[e,"://",n.prefix+n.ALL_DBS].join("")},n.open=function(e,t){if(!n.enableAllDbs)return t(),void 0;var r=e.adapter;return"http"===r||"https"===r?(t(),void 0):(new n(n.allDBName(r),function(o,a){if(o)return t(),void 0;var i=n.dbName(r,e.name);a.get(i,function(n){n&&404===n.status?a.put({_id:i,dbname:e.originalName},function(e){t()}):t()})}),void 0)},n.allDbs=function(e){var t=function(r,o){if(0===r.length){var a=[];return o.forEach(function(e){var t=a.some(function(t){return t.id===e.id});t||a.push(e)}),e(null,a.map(function(e){return e.doc.dbname})),void 0}var i=r.shift();return"http"===i||"https"===i?(t(r,o),void 0):(new n(n.allDBName(i),function(n,a){return n?(e(n),void 0):(a.allDocs({include_docs:!0},function(n,a){return n?(e(n),void 0):(o.unshift.apply(o,a.rows),t(r,o),void 0)}),void 0)}),void 0)},r=Object.keys(n.adapters);t(r,[])},t.exports=n},{"./constructor":5}],16:[function(e,t,n){function r(){return"undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage&&"undefined"!=typeof chrome.storage.local}var o=e("__browserify_process"),a="undefined"!=typeof self?self:"undefined"!=typeof window?window:{},i=e("./merge");n.extend=e("./deps/extend"),n.ajax=e("./deps/ajax"),n.createBlob=e("./deps/blob");var s=e("./deps/uuid");n.Crypto=e("./deps/md5.js");var u=e("./deps/buffer"),c=e("./deps/errors"),d=["_id","_rev","_attachments","_deleted","_revisions","_revs_info","_conflicts","_deleted_conflicts","_local_seq","_rev_tree"];n.uuids=function(e,t){"object"!=typeof t&&(t={});for(var n=t.length,r=t.radix,o=[];o.push(s(n,r))<e;);return o},n.uuid=function(e){return n.uuids(1,e)[0]},n.isValidId=function(e){return e&&"string"==typeof e?/^_/.test(e)?/^_(design|local)/.test(e):!0:!1},n.call=function(e){if(typeof e==typeof Function){var t=Array.prototype.slice.call(arguments,1);e.apply(this,t)}},n.isLocalId=function(e){return/^_local/.test(e)},n.isDeleted=function(e,t){t||(t=i.winningRev(e)),t.indexOf("-")>=0&&(t=t.split("-")[1]);var n=!1;return i.traverseRevTree(e.rev_tree,function(e,r,o,a,i){o===t&&(n=!!i.deleted)}),n},n.filterChange=function(e){return function(t){var n={},r=e.filter&&"function"==typeof e.filter;if(n.query=e.query_params,e.filter&&r&&!e.filter.call(this,t.doc,n))return!1;if(e.doc_ids&&-1===e.doc_ids.indexOf(t.id))return!1;if(e.include_docs)for(var o in t.doc._attachments)t.doc._attachments[o].stub=!0;else delete t.doc;return!0}},n.processChanges=function(e,t,r){t=t.filter(n.filterChange(e)),e.limit&&e.limit<t.length&&(t.length=e.limit),t.forEach(function(t){n.call(e.onChange,t)}),n.call(e.complete,null,{results:t,last_seq:r})},n.parseDoc=function(e,t){var r,o,a,i=null,s={status:"available"};if(e._deleted&&(s.deleted=!0),t)if(e._id||(e._id=n.uuid()),o=n.uuid({length:32,radix:16}).toLowerCase(),e._rev){if(a=/^(\d+)-(.+)$/.exec(e._rev),!a)throw"invalid value for property '_rev'";e._rev_tree=[{pos:parseInt(a[1],10),ids:[a[2],{status:"missing"},[[o,s,[]]]]}],r=parseInt(a[1],10)+1}else e._rev_tree=[{pos:1,ids:[o,s,[]]}],r=1;else if(e._revisions&&(e._rev_tree=[{pos:e._revisions.start-e._revisions.ids.length+1,ids:e._revisions.ids.reduce(function(e,t){return null===e?[t,s,[]]:[t,{status:"missing"},[e]]},null)}],r=e._revisions.start,o=e._revisions.ids[0]),!e._rev_tree){if(a=/^(\d+)-(.+)$/.exec(e._rev),!a)return c.BAD_ARG;r=parseInt(a[1],10),o=a[2],e._rev_tree=[{pos:parseInt(a[1],10),ids:[a[2],s,[]]}]}"string"!=typeof e._id?i=c.INVALID_ID:n.isValidId(e._id)||(i=c.RESERVED_ID);for(var u in e)e.hasOwnProperty(u)&&"_"===u[0]&&-1===d.indexOf(u)&&(i=n.extend({},c.DOC_VALIDATION),i.reason+=": "+u);return e._id=decodeURIComponent(e._id),e._rev=[r,o].join("-"),i?i:Object.keys(e).reduce(function(t,n){return/^_/.test(n)&&"_attachments"!==n?t.metadata[n.slice(1)]=e[n]:t.data[n]=e[n],t},{metadata:{},data:{}})},n.isCordova=function(){return"undefined"!=typeof cordova||"undefined"!=typeof PhoneGap||"undefined"!=typeof phonegap},n.Changes=function(){var e={},t={};return r()?chrome.storage.onChanged.addListener(function(t){null!=t.db_name&&e.notify(t.db_name.newValue)}):"undefined"!=typeof window&&a.addEventListener("storage",function(t){e.notify(t.key)
}),e.addListener=function(e,n,r,o){t[e]||(t[e]={}),t[e][n]={db:r,opts:o}},e.removeListener=function(e,n){t[e]&&delete t[e][n]},e.clearListeners=function(e){delete t[e]},e.notifyLocalWindows=function(e){r()?chrome.storage.local.set({db_name:e}):a.localStorage&&(localStorage[e]="a"===localStorage[e]?"b":"a")},e.notify=function(e){t[e]&&Object.keys(t[e]).forEach(function(r){var o=t[e][r].opts;t[e][r].db.changes({include_docs:o.include_docs,conflicts:o.conflicts,continuous:!1,descending:!1,filter:o.filter,view:o.view,since:o.since,query_params:o.query_params,onChange:function(e){e.seq>o.since&&!o.cancelled&&(o.since=e.seq,n.call(o.onChange,e))}})})},e},n.atob=o.browser&&"atob"in a?function(e){return atob(e)}:function(e){var t=new u(e,"base64");if(t.toString("base64")!==e)throw"Cannot base64 encode full string";return t.toString("binary")},n.btoa=o.browser&&"btoa"in a?function(e){return btoa(e)}:function(e){return new u(e,"binary").toString("base64")},t.exports=n},{"./deps/ajax":6,"./deps/blob":7,"./deps/buffer":18,"./deps/errors":8,"./deps/extend":9,"./deps/md5.js":10,"./deps/uuid":11,"./merge":13,__browserify_process:19}],17:[function(e,t){t.exports="1.1.0"},{}],18:[function(){},{}],19:[function(e,t){var n=t.exports={};n.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var n=[];return window.addEventListener("message",function(e){var t=e.source;if((t===window||null===t)&&"process-tick"===e.data&&(e.stopPropagation(),n.length>0)){var r=n.shift();r()}},!0),function(e){n.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),n.title="browser",n.browser=!0,n.env={},n.argv=[],n.binding=function(){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(){throw new Error("process.chdir is not supported")}},{}],20:[function(require,module,exports){"use strict";function MapReduce(db){function normalize(e){return"undefined"==typeof e?null:e}function createKeysLookup(e){for(var t={},n=0,r=e.length;r>n;n++){var o=normalize(e[n]),a=t[o];"undefined"==typeof a?t[o]=n:"number"==typeof a?t[o]=[a,n]:a.push(n)}return t}function mapUsingKeys(e,t,n){function r(e,t){var n=a[e];"undefined"==typeof n?a[e]=t:Array.isArray(n)?n.push(t):a[e]=[n,t]}function o(e,t){return pouchCollate(e.id,t.id)}var a=new Array(t.length);e.forEach(function(e){var t=n[normalize(e.key)];"number"==typeof t?r(t,e):t.forEach(function(t){r(t,e)})});var i=[];return a.forEach(function(e){"undefined"!=typeof e&&(Array.isArray(e)?i=i.concat(e.sort(o)):i.push(e))}),i}function sum(e){return e.reduce(function(e,t){return e+t},0)}function viewQuery(fun,options){function emit(e,t){var n={id:current.doc._id,key:e,value:t};if(!("undefined"!=typeof options.startkey&&pouchCollate(e,options.startkey)<0||"undefined"!=typeof options.endkey&&pouchCollate(e,options.endkey)>0||"undefined"!=typeof options.key&&0!==pouchCollate(e,options.key)||"undefined"!=typeof options.keys&&(keysLookup=keysLookup||createKeysLookup(options.keys),"undefined"==typeof keysLookup[normalize(e)]))){if(num_started++,options.include_docs){if(t&&"object"==typeof t&&t._id)return db.get(t._id,function(e,t){t&&(n.doc=t),results.push(n),checkComplete()}),void 0;n.doc=current.doc}results.push(n)}}function checkComplete(){if(completed&&results.length==num_started){if("undefined"!=typeof options.keys&&results.length?(keysLookup=keysLookup||createKeysLookup(options.keys),results=mapUsingKeys(results,options.keys,keysLookup)):results.sort(function(e,t){var n=pouchCollate(e.key,t.key);return 0!==n?n:pouchCollate(e.id,t.id)}),options.descending&&results.reverse(),options.reduce===!1)return options.complete(null,{total_rows:results.length,offset:options.skip,rows:"limit"in options?results.slice(options.skip,options.limit+options.skip):options.skip>0?results.slice(options.skip):results});var e=[];results.forEach(function(t){var n=e[e.length-1]||null;return n&&0===pouchCollate(n.key[0][0],t.key)?(n.key.push([t.key,t.id]),n.value.push(t.value),void 0):(e.push({key:[[t.key,t.id]],value:[t.value]}),void 0)}),e.forEach(function(e){e.value=fun.reduce(e.key,e.value),e.value="undefined"==typeof e.value?null:e.value,e.key=e.key[0][0]}),options.complete(null,{total_rows:e.length,offset:options.skip,rows:"limit"in options?e.slice(options.skip,options.limit+options.skip):options.skip>0?e.slice(options.skip):e})}}if(options.complete){options.skip||(options.skip=0),fun.reduce||(options.reduce=!1);var results=[],current,num_started=0,completed=!1,keysLookup;eval("fun.map = "+fun.map.toString()+";"),fun.reduce&&(builtInReduce[fun.reduce]&&(fun.reduce=builtInReduce[fun.reduce]),eval("fun.reduce = "+fun.reduce.toString()+";")),db.changes({conflicts:!0,include_docs:!0,onChange:function(e){"deleted"in e||(current={doc:e.doc},fun.map.call(this,e.doc))},complete:function(){completed=!0,checkComplete()}})}}function addHttpParam(e,t,n,r){var o=t[e];"undefined"!=typeof o&&(r&&(o=encodeURIComponent(JSON.stringify(o))),n.push(e+"="+o))}function httpQuery(e,t,n){var r=[],o=void 0,a="GET";if(addHttpParam("reduce",t,r),addHttpParam("include_docs",t,r),addHttpParam("limit",t,r),addHttpParam("descending",t,r),addHttpParam("group",t,r),addHttpParam("group_level",t,r),addHttpParam("skip",t,r),addHttpParam("startkey",t,r,!0),addHttpParam("endkey",t,r,!0),addHttpParam("key",t,r,!0),"undefined"!=typeof t.keys&&(a="POST","string"==typeof e?o=JSON.stringify({keys:t.keys}):e.keys=t.keys),r=r.join("&"),r=""===r?"":"?"+r,"string"==typeof e){var i=e.split("/");return db.request({method:a,url:"_design/"+i[0]+"/_view/"+i[1]+r,body:o},n),void 0}var s=JSON.parse(JSON.stringify(e,function(e,t){return"function"==typeof t?t+"":t}));db.request({method:"POST",url:"_temp_view"+r,body:s},n)}if(!(this instanceof MapReduce))return new MapReduce(db);var builtInReduce={_sum:function(e,t){return sum(t)},_count:function(e,t,n){return n?sum(t):t.length},_stats:function(e,t){return{sum:sum(t),min:Math.min.apply(null,t),max:Math.max.apply(null,t),count:t.length,sumsqr:function(){var e=0;for(var n in t)"number"==typeof t[n]&&(e+=t[n]*t[n]);return e}()}}};this.query=function(e,t,n){if("function"==typeof t&&(n=t,t={}),n&&(t.complete=n),"http"===db.type())return"function"==typeof e?httpQuery({map:e},t,n):httpQuery(e,t,n);if("object"==typeof e)return viewQuery(e,t);if("function"==typeof e)return viewQuery({map:e},t);var r=e.split("/");db.get("_design/"+r[0],function(e,o){return e?(n&&n(e),void 0):o.views[r[1]]?(viewQuery({map:o.views[r[1]].map,reduce:o.views[r[1]].reduce},t),void 0):(n&&n({name:"not_found",message:"missing_named_view"}),void 0)})}}var pouchCollate=require("pouchdb-collate");MapReduce._delete=function(){},module.exports=MapReduce},{"pouchdb-collate":21}],21:[function(e,t){"use strict";function n(e,t){for(var n=Math.min(e.length,t.length),r=0;n>r;r++){var o=i(e[r],t[r]);if(0!==o)return o}return e.length===t.length?0:e.length>t.length?1:-1}function r(e,t){return e===t?0:e>t?1:-1}function o(e,t){for(var n=Object.keys(e),r=Object.keys(t),o=Math.min(n.length,r.length),a=0;o>a;a++){var s=i(n[a],r[a]);if(0!==s)return s;if(s=i(e[n[a]],t[r[a]]),0!==s)return s}return n.length===r.length?0:n.length>r.length?1:-1}function a(e){var t=["boolean","number","string","object"];return-1!==t.indexOf(typeof e)?null===e?1:t.indexOf(typeof e)+2:Array.isArray(e)?4.5:"undefined"==typeof e?1:void 0}function i(e,t){var i=a(e),s=a(t);return i-s!==0?i-s:null===e||"undefined"==typeof e?0:"number"==typeof e?e-t:"boolean"==typeof e?e===t?0:t>e?-1:1:"string"==typeof e?r(e,t):Array.isArray(e)?n(e,t):"object"==typeof e?o(e,t):void 0}t.exports=i},{}]},{},[12])(12)});
// Generated by CoffeeScript 1.4.0
(function() {
  var pouchdb, slice;

  pouchdb = angular.module('pouchdb', ['ng']);

  slice = Array.prototype.slice;

  pouchdb.provider('pouchdb', function() {
    return {
      withAllDbsEnabled: function() {
        return PouchDB.enableAllDbs = true;
      },
      $get: function($q, $rootScope, $timeout) {
        var qify;
        qify = function(fn) {
          return function() {
            var args, callback, deferred;
            deferred = $q.defer();
            callback = function(err, res) {
              return $timeout(function() {
                return $rootScope.$apply(function() {
                  if (err) {
                    return deferred.reject(err);
                  } else {
                    return deferred.resolve(res);
                  }
                });
              });
            };
            args = arguments != null ? slice.call(arguments) : [];
            args.push(callback);
            fn.apply(this, args);
            return deferred.promise;
          };
        };
        return {
          create: function(name, options) {
            var db;
            db = new PouchDB(name, options);
            return {
              put: qify(db.put),
              post: qify(db.post),
              get: qify(db.get),
              remove: qify(db.remove),
              bulkDocs: qify(db.bulkDocs),
              allDocs: qify(db.allDocs),
              changes: function(options) {
                var clone;
                clone = angular.copy(options);
                clone.onChange = function(change) {
                  return $rootScope.$apply(function() {
                    return options.onChange(change);
                  });
                };
                return db.changes(clone);
              },
              putAttachment: qify(db.putAttachment),
              getAttachment: qify(db.getAttachment),
              removeAttachment: qify(db.removeAttachment),
              query: qify(db.query),
              info: qify(db.info),
              compact: qify(db.compact),
              revsDiff: qify(db.revsDiff)
            };
          },
          allDbs: qify(PouchDB.allDbs),
          destroy: qify(PouchDB.destroy),
          replicate: PouchDB.replicate
        };
      }
    };
  });

  pouchdb.directive('pouchRepeat', function($parse) {
    return {
      transclude: 'element',
      compile: function(elem, attrs, transclude) {
        return function($scope, $element, $attr) {
          var blocks, collection, cursor, parent, sort, _ref;
          parent = $element.parent();
          _ref = /^\s*([a-zA-Z0-9]+)\s*in\s*([a-zA-Z0-9]+)\s*(?:order by\s*([a-zA-Z0-9\.,]+))?$/.exec($attr.pouchRepeat).splice(1), cursor = _ref[0], collection = _ref[1], sort = _ref[2];
          blocks = {};
          return $scope.$watch(collection, function() {
            var calculate, displayAll, displayDoc, extractDocs, fld, getters, process, sortorder;
            displayDoc = function(doc) {
              var childScope;
              childScope = $scope.$new();
              childScope[cursor] = doc;
              return transclude(childScope, function(clone) {
                blocks[doc._id] = {
                  clone: clone,
                  scope: childScope
                };
                return parent.append(clone);
              });
            };
            displayAll = function(docs) {
              var doc, _i, _len, _results;
              _results = [];
              for (_i = 0, _len = docs.length; _i < _len; _i++) {
                doc = docs[_i];
                _results.push(displayDoc(doc));
              }
              return _results;
            };
            extractDocs = function(result) {
              var row, _i, _len, _ref1, _results;
              _ref1 = result.rows;
              _results = [];
              for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                row = _ref1[_i];
                _results.push(row.doc);
              }
              return _results;
            };
            process = sort != null ? (getters = (function() {
              var _i, _len, _ref1, _results;
              _ref1 = sort.split(',');
              _results = [];
              for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                fld = _ref1[_i];
                _results.push($parse(fld));
              }
              return _results;
            })(), calculate = function(first, second, getters, idx) {
              var getter, x, y;
              if (idx >= getters.length) {
                return 0;
              } else {
                getter = getters[idx];
                x = getter(first);
                y = getter(second);
                if (x < y) {
                  return -1;
                } else if (x > y) {
                  return 1;
                } else {
                  return calculate(first, second, getters, idx + 1);
                }
              }
            }, sortorder = function(first, second) {
              return calculate(first, second, getters, 0);
            }, function(result) {
              return displayAll(extractDocs(result).sort(sortorder));
            }) : function(result) {
              return displayAll(extractDocs(result));
            };
            $scope[collection].allDocs({
              include_docs: true
            }).then(process);
            $scope[collection].info().then(function(info) {
              return $scope[collection].changes({
                include_docs: true,
                continuous: true,
                since: info.update_seq,
                onChange: function(update) {
                  var block;
                  block = blocks[update.id];
                  if (update.deleted) {
                    block.clone.remove();
                    return block.scope.$destroy();
                  } else {
                    if (block != null) {
                      return block.scope[cursor] = update.doc;
                    } else {
                      return displayDoc(update.doc);
                    }
                  }
                }
              });
            });
          });
        };
      }
    };
  });

}).call(this);

(function(){function o(e){var i=function(e,t){return r("",e,t)},s=t;e&&(t[e]||(t[e]={}),s=t[e]);if(!s.define||!s.define.packaged)n.original=s.define,s.define=n,s.define.packaged=!0;if(!s.require||!s.require.packaged)r.original=s.require,s.require=i,s.require.packaged=!0}var e="ace",t=function(){return this}();if(!e&&typeof requirejs!="undefined")return;var n=function(e,t,r){if(typeof e!="string"){n.original?n.original.apply(window,arguments):(console.error("dropping module because define wasn't a string."),console.trace());return}arguments.length==2&&(r=t),n.modules||(n.modules={},n.payloads={}),n.payloads[e]=r,n.modules[e]=null},r=function(e,t,n){if(Object.prototype.toString.call(t)==="[object Array]"){var i=[];for(var o=0,u=t.length;o<u;++o){var a=s(e,t[o]);if(!a&&r.original)return r.original.apply(window,arguments);i.push(a)}n&&n.apply(null,i)}else{if(typeof t=="string"){var f=s(e,t);return!f&&r.original?r.original.apply(window,arguments):(n&&n(),f)}if(r.original)return r.original.apply(window,arguments)}},i=function(e,t){if(t.indexOf("!")!==-1){var n=t.split("!");return i(e,n[0])+"!"+i(e,n[1])}if(t.charAt(0)=="."){var r=e.split("/").slice(0,-1).join("/");t=r+"/"+t;while(t.indexOf(".")!==-1&&s!=t){var s=t;t=t.replace(/\/\.\//,"/").replace(/[^\/]+\/\.\.\//,"")}}return t},s=function(e,t){t=i(e,t);var s=n.modules[t];if(!s){s=n.payloads[t];if(typeof s=="function"){var o={},u={id:t,uri:"",exports:o,packaged:!0},a=function(e,n){return r(t,e,n)},f=s(a,o,u);o=f||u.exports,n.modules[t]=o,delete n.payloads[t]}s=n.modules[t]=o||s}return s};o(e)})(),ace.define("ace/ace",["require","exports","module","ace/lib/fixoldbrowsers","ace/lib/dom","ace/lib/event","ace/editor","ace/edit_session","ace/undomanager","ace/virtual_renderer","ace/multi_select","ace/worker/worker_client","ace/keyboard/hash_handler","ace/placeholder","ace/mode/folding/fold_mode","ace/theme/textmate","ace/config"],function(e,t,n){e("./lib/fixoldbrowsers");var r=e("./lib/dom"),i=e("./lib/event"),s=e("./editor").Editor,o=e("./edit_session").EditSession,u=e("./undomanager").UndoManager,a=e("./virtual_renderer").VirtualRenderer,f=e("./multi_select").MultiSelect;e("./worker/worker_client"),e("./keyboard/hash_handler"),e("./placeholder"),e("./mode/folding/fold_mode"),e("./theme/textmate"),t.config=e("./config"),t.require=e,t.edit=function(e){if(typeof e=="string"){var n=e,e=document.getElementById(n);if(!e)throw"ace.edit can't find div #"+n}if(e.env&&e.env.editor instanceof s)return e.env.editor;var o=t.createEditSession(r.getInnerText(e));e.innerHTML="";var u=new s(new a(e));new f(u),u.setSession(o);var l={document:o,editor:u,onResize:u.resize.bind(u,null)};return i.addListener(window,"resize",l.onResize),u.on("destroy",function(){i.removeListener(window,"resize",l.onResize)}),e.env=u.env=l,u},t.createEditSession=function(e,t){var n=new o(e,t);return n.setUndoManager(new u),n},t.EditSession=o,t.UndoManager=u}),ace.define("ace/lib/fixoldbrowsers",["require","exports","module","ace/lib/regexp","ace/lib/es5-shim"],function(e,t,n){e("./regexp"),e("./es5-shim")}),ace.define("ace/lib/regexp",["require","exports","module"],function(e,t,n){function o(e){return(e.global?"g":"")+(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.extended?"x":"")+(e.sticky?"y":"")}function u(e,t,n){if(Array.prototype.indexOf)return e.indexOf(t,n);for(var r=n||0;r<e.length;r++)if(e[r]===t)return r;return-1}var r={exec:RegExp.prototype.exec,test:RegExp.prototype.test,match:String.prototype.match,replace:String.prototype.replace,split:String.prototype.split},i=r.exec.call(/()??/,"")[1]===undefined,s=function(){var e=/^/g;return r.test.call(e,""),!e.lastIndex}();if(s&&i)return;RegExp.prototype.exec=function(e){var t=r.exec.apply(this,arguments),n,a;if(typeof e=="string"&&t){!i&&t.length>1&&u(t,"")>-1&&(a=RegExp(this.source,r.replace.call(o(this),"g","")),r.replace.call(e.slice(t.index),a,function(){for(var e=1;e<arguments.length-2;e++)arguments[e]===undefined&&(t[e]=undefined)}));if(this._xregexp&&this._xregexp.captureNames)for(var f=1;f<t.length;f++)n=this._xregexp.captureNames[f-1],n&&(t[n]=t[f]);!s&&this.global&&!t[0].length&&this.lastIndex>t.index&&this.lastIndex--}return t},s||(RegExp.prototype.test=function(e){var t=r.exec.call(this,e);return t&&this.global&&!t[0].length&&this.lastIndex>t.index&&this.lastIndex--,!!t})}),ace.define("ace/lib/es5-shim",["require","exports","module"],function(e,t,n){function r(){}function w(e){try{return Object.defineProperty(e,"sentinel",{}),"sentinel"in e}catch(t){}}function H(e){return e=+e,e!==e?e=0:e!==0&&e!==1/0&&e!==-1/0&&(e=(e>0||-1)*Math.floor(Math.abs(e))),e}function B(e){var t=typeof e;return e===null||t==="undefined"||t==="boolean"||t==="number"||t==="string"}function j(e){var t,n,r;if(B(e))return e;n=e.valueOf;if(typeof n=="function"){t=n.call(e);if(B(t))return t}r=e.toString;if(typeof r=="function"){t=r.call(e);if(B(t))return t}throw new TypeError}Function.prototype.bind||(Function.prototype.bind=function(t){var n=this;if(typeof n!="function")throw new TypeError("Function.prototype.bind called on incompatible "+n);var i=u.call(arguments,1),s=function(){if(this instanceof s){var e=n.apply(this,i.concat(u.call(arguments)));return Object(e)===e?e:this}return n.apply(t,i.concat(u.call(arguments)))};return n.prototype&&(r.prototype=n.prototype,s.prototype=new r,r.prototype=null),s});var i=Function.prototype.call,s=Array.prototype,o=Object.prototype,u=s.slice,a=i.bind(o.toString),f=i.bind(o.hasOwnProperty),l,c,h,p,d;if(d=f(o,"__defineGetter__"))l=i.bind(o.__defineGetter__),c=i.bind(o.__defineSetter__),h=i.bind(o.__lookupGetter__),p=i.bind(o.__lookupSetter__);if([1,2].splice(0).length!=2)if(!function(){function e(e){var t=new Array(e+2);return t[0]=t[1]=0,t}var t=[],n;t.splice.apply(t,e(20)),t.splice.apply(t,e(26)),n=t.length,t.splice(5,0,"XXX"),n+1==t.length;if(n+1==t.length)return!0}())Array.prototype.splice=function(e,t){var n=this.length;e>0?e>n&&(e=n):e==void 0?e=0:e<0&&(e=Math.max(n+e,0)),e+t<n||(t=n-e);var r=this.slice(e,e+t),i=u.call(arguments,2),s=i.length;if(e===n)s&&this.push.apply(this,i);else{var o=Math.min(t,n-e),a=e+o,f=a+s-o,l=n-a,c=n-o;if(f<a)for(var h=0;h<l;++h)this[f+h]=this[a+h];else if(f>a)for(h=l;h--;)this[f+h]=this[a+h];if(s&&e===c)this.length=c,this.push.apply(this,i);else{this.length=c+s;for(h=0;h<s;++h)this[e+h]=i[h]}}return r};else{var v=Array.prototype.splice;Array.prototype.splice=function(e,t){return arguments.length?v.apply(this,[e===void 0?0:e,t===void 0?this.length-e:t].concat(u.call(arguments,2))):[]}}Array.isArray||(Array.isArray=function(t){return a(t)=="[object Array]"});var m=Object("a"),g=m[0]!="a"||!(0 in m);Array.prototype.forEach||(Array.prototype.forEach=function(t){var n=F(this),r=g&&a(this)=="[object String]"?this.split(""):n,i=arguments[1],s=-1,o=r.length>>>0;if(a(t)!="[object Function]")throw new TypeError;while(++s<o)s in r&&t.call(i,r[s],s,n)}),Array.prototype.map||(Array.prototype.map=function(t){var n=F(this),r=g&&a(this)=="[object String]"?this.split(""):n,i=r.length>>>0,s=Array(i),o=arguments[1];if(a(t)!="[object Function]")throw new TypeError(t+" is not a function");for(var u=0;u<i;u++)u in r&&(s[u]=t.call(o,r[u],u,n));return s}),Array.prototype.filter||(Array.prototype.filter=function(t){var n=F(this),r=g&&a(this)=="[object String]"?this.split(""):n,i=r.length>>>0,s=[],o,u=arguments[1];if(a(t)!="[object Function]")throw new TypeError(t+" is not a function");for(var f=0;f<i;f++)f in r&&(o=r[f],t.call(u,o,f,n)&&s.push(o));return s}),Array.prototype.every||(Array.prototype.every=function(t){var n=F(this),r=g&&a(this)=="[object String]"?this.split(""):n,i=r.length>>>0,s=arguments[1];if(a(t)!="[object Function]")throw new TypeError(t+" is not a function");for(var o=0;o<i;o++)if(o in r&&!t.call(s,r[o],o,n))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(t){var n=F(this),r=g&&a(this)=="[object String]"?this.split(""):n,i=r.length>>>0,s=arguments[1];if(a(t)!="[object Function]")throw new TypeError(t+" is not a function");for(var o=0;o<i;o++)if(o in r&&t.call(s,r[o],o,n))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(t){var n=F(this),r=g&&a(this)=="[object String]"?this.split(""):n,i=r.length>>>0;if(a(t)!="[object Function]")throw new TypeError(t+" is not a function");if(!i&&arguments.length==1)throw new TypeError("reduce of empty array with no initial value");var s=0,o;if(arguments.length>=2)o=arguments[1];else do{if(s in r){o=r[s++];break}if(++s>=i)throw new TypeError("reduce of empty array with no initial value")}while(!0);for(;s<i;s++)s in r&&(o=t.call(void 0,o,r[s],s,n));return o}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(t){var n=F(this),r=g&&a(this)=="[object String]"?this.split(""):n,i=r.length>>>0;if(a(t)!="[object Function]")throw new TypeError(t+" is not a function");if(!i&&arguments.length==1)throw new TypeError("reduceRight of empty array with no initial value");var s,o=i-1;if(arguments.length>=2)s=arguments[1];else do{if(o in r){s=r[o--];break}if(--o<0)throw new TypeError("reduceRight of empty array with no initial value")}while(!0);do o in this&&(s=t.call(void 0,s,r[o],o,n));while(o--);return s});if(!Array.prototype.indexOf||[0,1].indexOf(1,2)!=-1)Array.prototype.indexOf=function(t){var n=g&&a(this)=="[object String]"?this.split(""):F(this),r=n.length>>>0;if(!r)return-1;var i=0;arguments.length>1&&(i=H(arguments[1])),i=i>=0?i:Math.max(0,r+i);for(;i<r;i++)if(i in n&&n[i]===t)return i;return-1};if(!Array.prototype.lastIndexOf||[0,1].lastIndexOf(0,-3)!=-1)Array.prototype.lastIndexOf=function(t){var n=g&&a(this)=="[object String]"?this.split(""):F(this),r=n.length>>>0;if(!r)return-1;var i=r-1;arguments.length>1&&(i=Math.min(i,H(arguments[1]))),i=i>=0?i:r-Math.abs(i);for(;i>=0;i--)if(i in n&&t===n[i])return i;return-1};Object.getPrototypeOf||(Object.getPrototypeOf=function(t){return t.__proto__||(t.constructor?t.constructor.prototype:o)});if(!Object.getOwnPropertyDescriptor){var y="Object.getOwnPropertyDescriptor called on a non-object: ";Object.getOwnPropertyDescriptor=function(t,n){if(typeof t!="object"&&typeof t!="function"||t===null)throw new TypeError(y+t);if(!f(t,n))return;var r,i,s;r={enumerable:!0,configurable:!0};if(d){var u=t.__proto__;t.__proto__=o;var i=h(t,n),s=p(t,n);t.__proto__=u;if(i||s)return i&&(r.get=i),s&&(r.set=s),r}return r.value=t[n],r}}Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(t){return Object.keys(t)});if(!Object.create){var b;Object.prototype.__proto__===null?b=function(){return{__proto__:null}}:b=function(){var e={};for(var t in e)e[t]=null;return e.constructor=e.hasOwnProperty=e.propertyIsEnumerable=e.isPrototypeOf=e.toLocaleString=e.toString=e.valueOf=e.__proto__=null,e},Object.create=function(t,n){var r;if(t===null)r=b();else{if(typeof t!="object")throw new TypeError("typeof prototype["+typeof t+"] != 'object'");var i=function(){};i.prototype=t,r=new i,r.__proto__=t}return n!==void 0&&Object.defineProperties(r,n),r}}if(Object.defineProperty){var E=w({}),S=typeof document=="undefined"||w(document.createElement("div"));if(!E||!S)var x=Object.defineProperty}if(!Object.defineProperty||x){var T="Property description must be an object: ",N="Object.defineProperty called on non-object: ",C="getters & setters can not be defined on this javascript engine";Object.defineProperty=function(t,n,r){if(typeof t!="object"&&typeof t!="function"||t===null)throw new TypeError(N+t);if(typeof r!="object"&&typeof r!="function"||r===null)throw new TypeError(T+r);if(x)try{return x.call(Object,t,n,r)}catch(i){}if(f(r,"value"))if(d&&(h(t,n)||p(t,n))){var s=t.__proto__;t.__proto__=o,delete t[n],t[n]=r.value,t.__proto__=s}else t[n]=r.value;else{if(!d)throw new TypeError(C);f(r,"get")&&l(t,n,r.get),f(r,"set")&&c(t,n,r.set)}return t}}Object.defineProperties||(Object.defineProperties=function(t,n){for(var r in n)f(n,r)&&Object.defineProperty(t,r,n[r]);return t}),Object.seal||(Object.seal=function(t){return t}),Object.freeze||(Object.freeze=function(t){return t});try{Object.freeze(function(){})}catch(k){Object.freeze=function(t){return function(n){return typeof n=="function"?n:t(n)}}(Object.freeze)}Object.preventExtensions||(Object.preventExtensions=function(t){return t}),Object.isSealed||(Object.isSealed=function(t){return!1}),Object.isFrozen||(Object.isFrozen=function(t){return!1}),Object.isExtensible||(Object.isExtensible=function(t){if(Object(t)===t)throw new TypeError;var n="";while(f(t,n))n+="?";t[n]=!0;var r=f(t,n);return delete t[n],r});if(!Object.keys){var L=!0,A=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],O=A.length;for(var M in{toString:null})L=!1;Object.keys=function I(e){if(typeof e!="object"&&typeof e!="function"||e===null)throw new TypeError("Object.keys called on a non-object");var I=[];for(var t in e)f(e,t)&&I.push(t);if(L)for(var n=0,r=O;n<r;n++){var i=A[n];f(e,i)&&I.push(i)}return I}}Date.now||(Date.now=function(){return(new Date).getTime()});var _="	\n\f\r   ᠎             　\u2028\u2029﻿";if(!String.prototype.trim||_.trim()){_="["+_+"]";var D=new RegExp("^"+_+_+"*"),P=new RegExp(_+_+"*$");String.prototype.trim=function(){return String(this).replace(D,"").replace(P,"")}}var F=function(e){if(e==null)throw new TypeError("can't convert "+e+" to object");return Object(e)}}),ace.define("ace/lib/dom",["require","exports","module"],function(e,t,n){if(typeof document=="undefined")return;var r="http://www.w3.org/1999/xhtml";t.getDocumentHead=function(e){return e||(e=document),e.head||e.getElementsByTagName("head")[0]||e.documentElement},t.createElement=function(e,t){return document.createElementNS?document.createElementNS(t||r,e):document.createElement(e)},t.hasCssClass=function(e,t){var n=e.className.split(/\s+/g);return n.indexOf(t)!==-1},t.addCssClass=function(e,n){t.hasCssClass(e,n)||(e.className+=" "+n)},t.removeCssClass=function(e,t){var n=e.className.split(/\s+/g);for(;;){var r=n.indexOf(t);if(r==-1)break;n.splice(r,1)}e.className=n.join(" ")},t.toggleCssClass=function(e,t){var n=e.className.split(/\s+/g),r=!0;for(;;){var i=n.indexOf(t);if(i==-1)break;r=!1,n.splice(i,1)}return r&&n.push(t),e.className=n.join(" "),r},t.setCssClass=function(e,n,r){r?t.addCssClass(e,n):t.removeCssClass(e,n)},t.hasCssString=function(e,t){var n=0,r;t=t||document;if(t.createStyleSheet&&(r=t.styleSheets)){while(n<r.length)if(r[n++].owningElement.id===e)return!0}else if(r=t.getElementsByTagName("style"))while(n<r.length)if(r[n++].id===e)return!0;return!1},t.importCssString=function(n,i,s){s=s||document;if(i&&t.hasCssString(i,s))return null;var o;s.createStyleSheet?(o=s.createStyleSheet(),o.cssText=n,i&&(o.owningElement.id=i)):(o=s.createElementNS?s.createElementNS(r,"style"):s.createElement("style"),o.appendChild(s.createTextNode(n)),i&&(o.id=i),t.getDocumentHead(s).appendChild(o))},t.importCssStylsheet=function(e,n){if(n.createStyleSheet)n.createStyleSheet(e);else{var r=t.createElement("link");r.rel="stylesheet",r.href=e,t.getDocumentHead(n).appendChild(r)}},t.getInnerWidth=function(e){return parseInt(t.computedStyle(e,"paddingLeft"),10)+parseInt(t.computedStyle(e,"paddingRight"),10)+e.clientWidth},t.getInnerHeight=function(e){return parseInt(t.computedStyle(e,"paddingTop"),10)+parseInt(t.computedStyle(e,"paddingBottom"),10)+e.clientHeight},window.pageYOffset!==undefined?(t.getPageScrollTop=function(){return window.pageYOffset},t.getPageScrollLeft=function(){return window.pageXOffset}):(t.getPageScrollTop=function(){return document.body.scrollTop},t.getPageScrollLeft=function(){return document.body.scrollLeft}),window.getComputedStyle?t.computedStyle=function(e,t){return t?(window.getComputedStyle(e,"")||{})[t]||"":window.getComputedStyle(e,"")||{}}:t.computedStyle=function(e,t){return t?e.currentStyle[t]:e.currentStyle},t.scrollbarWidth=function(e){var n=t.createElement("ace_inner");n.style.width="100%",n.style.minWidth="0px",n.style.height="200px",n.style.display="block";var r=t.createElement("ace_outer"),i=r.style;i.position="absolute",i.left="-10000px",i.overflow="hidden",i.width="200px",i.minWidth="0px",i.height="150px",i.display="block",r.appendChild(n);var s=e.documentElement;s.appendChild(r);var o=n.offsetWidth;i.overflow="scroll";var u=n.offsetWidth;return o==u&&(u=r.clientWidth),s.removeChild(r),o-u},t.setInnerHtml=function(e,t){var n=e.cloneNode(!1);return n.innerHTML=t,e.parentNode.replaceChild(n,e),n},"textContent"in document.documentElement?(t.setInnerText=function(e,t){e.textContent=t},t.getInnerText=function(e){return e.textContent}):(t.setInnerText=function(e,t){e.innerText=t},t.getInnerText=function(e){return e.innerText}),t.getParentWindow=function(e){return e.defaultView||e.parentWindow}}),ace.define("ace/lib/event",["require","exports","module","ace/lib/keys","ace/lib/useragent","ace/lib/dom"],function(e,t,n){function o(e,t,n){var s=0;!i.isOpera||"KeyboardEvent"in window||!i.isMac?s=0|(t.ctrlKey?1:0)|(t.altKey?2:0)|(t.shiftKey?4:0)|(t.metaKey?8:0):s=0|(t.metaKey?1:0)|(t.altKey?2:0)|(t.shiftKey?4:0)|(t.ctrlKey?8:0);if(n in r.MODIFIER_KEYS){switch(r.MODIFIER_KEYS[n]){case"Alt":s=2;break;case"Shift":s=4;break;case"Ctrl":s=1;break;default:s=8}n=0}if(!i.isMac&&u[91]||u[92])s|=8;return s&8&&(n==91||n==93)&&(n=0),!!s||n in r.FUNCTION_KEYS||n in r.PRINTABLE_KEYS?e(t,s,n):!1}var r=e("./keys"),i=e("./useragent"),s=e("./dom");t.addListener=function(e,t,n){if(e.addEventListener)return e.addEventListener(t,n,!1);if(e.attachEvent){var r=function(){n(window.event)};n._wrapper=r,e.attachEvent("on"+t,r)}},t.removeListener=function(e,t,n){if(e.removeEventListener)return e.removeEventListener(t,n,!1);e.detachEvent&&e.detachEvent("on"+t,n._wrapper||n)},t.stopEvent=function(e){return t.stopPropagation(e),t.preventDefault(e),!1},t.stopPropagation=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},t.preventDefault=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1},t.getButton=function(e){return e.type=="dblclick"?0:e.type=="contextmenu"||e.ctrlKey&&i.isMac?2:e.preventDefault?e.button:{1:0,2:2,4:1}[e.button]},document.documentElement.setCapture?t.capture=function(e,n,r){function s(o){n(o),i||(i=!0,r(o)),t.removeListener(e,"mousemove",n),t.removeListener(e,"mouseup",s),t.removeListener(e,"losecapture",s),e.releaseCapture()}var i=!1;t.addListener(e,"mousemove",n),t.addListener(e,"mouseup",s),t.addListener(e,"losecapture",s),e.setCapture()}:t.capture=function(e,t,n){function r(e){t&&t(e),n&&n(e),document.removeEventListener("mousemove",t,!0),document.removeEventListener("mouseup",r,!0),e.stopPropagation()}document.addEventListener("mousemove",t,!0),document.addEventListener("mouseup",r,!0)},t.addMouseWheelListener=function(e,n){var r=8,i=function(e){e.wheelDelta!==undefined?e.wheelDeltaX!==undefined?(e.wheelX=-e.wheelDeltaX/r,e.wheelY=-e.wheelDeltaY/r):(e.wheelX=0,e.wheelY=-e.wheelDelta/r):e.axis&&e.axis==e.HORIZONTAL_AXIS?(e.wheelX=(e.detail||0)*5,e.wheelY=0):(e.wheelX=0,e.wheelY=(e.detail||0)*5),n(e)};t.addListener(e,"DOMMouseScroll",i),t.addListener(e,"mousewheel",i)},t.addMultiMouseDownListener=function(e,n,r,s){var o=0,u,a,f,l={2:"dblclick",3:"tripleclick",4:"quadclick"};t.addListener(e,"mousedown",function(e){if(t.getButton(e)!=0)o=0;else{var i=Math.abs(e.clientX-u)>5||Math.abs(e.clientY-a)>5;if(!f||i)o=0;o+=1,f&&clearTimeout(f),f=setTimeout(function(){f=null},n[o-1]||600)}o==1&&(u=e.clientX,a=e.clientY),r[s]("mousedown",e);if(o>4)o=0;else if(o>1)return r[s](l[o],e)}),i.isOldIE&&t.addListener(e,"dblclick",function(e){o=2,f&&clearTimeout(f),f=setTimeout(function(){f=null},n[o-1]||600),r[s]("mousedown",e),r[s](l[o],e)})};var u=Object.create(null);t.addCommandKeyListener=function(e,n){var r=t.addListener;if(i.isOldGecko||i.isOpera&&!("KeyboardEvent"in window)){var s=null;r(e,"keydown",function(e){s=e.keyCode}),r(e,"keypress",function(e){return o(n,e,s)})}else{var a=null;r(e,"keydown",function(e){u[e.keyCode]=!0;var t=o(n,e,e.keyCode);return a=e.defaultPrevented,t}),r(e,"keypress",function(e){a&&(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey)&&(t.stopEvent(e),a=null)}),r(e,"keyup",function(e){u[e.keyCode]=null}),r(e,"focus",function(e){u=Object.create(null)})}};if(window.postMessage&&!i.isOldIE){var a=1;t.nextTick=function(e,n){n=n||window;var r="zero-timeout-message-"+a;t.addListener(n,"message",function i(s){s.data==r&&(t.stopPropagation(s),t.removeListener(n,"message",i),e())}),n.postMessage(r,"*")}}t.nextFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame,t.nextFrame?t.nextFrame=t.nextFrame.bind(window):t.nextFrame=function(e){setTimeout(e,17)}}),ace.define("ace/lib/keys",["require","exports","module","ace/lib/oop"],function(e,t,n){var r=e("./oop"),i=function(){var e={MODIFIER_KEYS:{16:"Shift",17:"Ctrl",18:"Alt",224:"Meta"},KEY_MODS:{ctrl:1,alt:2,option:2,shift:4,meta:8,command:8,cmd:8},FUNCTION_KEYS:{8:"Backspace",9:"Tab",13:"Return",19:"Pause",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"Print",45:"Insert",46:"Delete",96:"Numpad0",97:"Numpad1",98:"Numpad2",99:"Numpad3",100:"Numpad4",101:"Numpad5",102:"Numpad6",103:"Numpad7",104:"Numpad8",105:"Numpad9",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"Numlock",145:"Scrolllock"},PRINTABLE_KEYS:{32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",61:"=",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",107:"+",109:"-",110:".",188:",",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"}};for(var t in e.FUNCTION_KEYS){var n=e.FUNCTION_KEYS[t].toLowerCase();e[n]=parseInt(t,10)}return r.mixin(e,e.MODIFIER_KEYS),r.mixin(e,e.PRINTABLE_KEYS),r.mixin(e,e.FUNCTION_KEYS),e.enter=e["return"],e.escape=e.esc,e.del=e["delete"],e[173]="-",e}();r.mixin(t,i),t.keyCodeToString=function(e){return(i[e]||String.fromCharCode(e)).toLowerCase()}}),ace.define("ace/lib/oop",["require","exports","module"],function(e,t,n){t.inherits=function(){var e=function(){};return function(t,n){e.prototype=n.prototype,t.super_=n.prototype,t.prototype=new e,t.prototype.constructor=t}}(),t.mixin=function(e,t){for(var n in t)e[n]=t[n];return e},t.implement=function(e,n){t.mixin(e,n)}}),ace.define("ace/lib/useragent",["require","exports","module"],function(e,t,n){t.OS={LINUX:"LINUX",MAC:"MAC",WINDOWS:"WINDOWS"},t.getOS=function(){return t.isMac?t.OS.MAC:t.isLinux?t.OS.LINUX:t.OS.WINDOWS};if(typeof navigator!="object")return;var r=(navigator.platform.match(/mac|win|linux/i)||["other"])[0].toLowerCase(),i=navigator.userAgent;t.isWin=r=="win",t.isMac=r=="mac",t.isLinux=r=="linux",t.isIE=(navigator.appName=="Microsoft Internet Explorer"||navigator.appName.indexOf("MSAppHost")>=0)&&parseFloat(navigator.userAgent.match(/MSIE ([0-9]+[\.0-9]+)/)[1]),t.isOldIE=t.isIE&&t.isIE<9,t.isGecko=t.isMozilla=window.controllers&&window.navigator.product==="Gecko",t.isOldGecko=t.isGecko&&parseInt((navigator.userAgent.match(/rv\:(\d+)/)||[])[1],10)<4,t.isOpera=window.opera&&Object.prototype.toString.call(window.opera)=="[object Opera]",t.isWebKit=parseFloat(i.split("WebKit/")[1])||undefined,t.isChrome=parseFloat(i.split(" Chrome/")[1])||undefined,t.isAIR=i.indexOf("AdobeAIR")>=0,t.isIPad=i.indexOf("iPad")>=0,t.isTouchPad=i.indexOf("TouchPad")>=0}),ace.define("ace/editor",["require","exports","module","ace/lib/fixoldbrowsers","ace/lib/oop","ace/lib/dom","ace/lib/lang","ace/lib/useragent","ace/keyboard/textinput","ace/mouse/mouse_handler","ace/mouse/fold_handler","ace/keyboard/keybinding","ace/edit_session","ace/search","ace/range","ace/lib/event_emitter","ace/commands/command_manager","ace/commands/default_commands","ace/config"],function(e,t,n){e("./lib/fixoldbrowsers");var r=e("./lib/oop"),i=e("./lib/dom"),s=e("./lib/lang"),o=e("./lib/useragent"),u=e("./keyboard/textinput").TextInput,a=e("./mouse/mouse_handler").MouseHandler,f=e("./mouse/fold_handler").FoldHandler,l=e("./keyboard/keybinding").KeyBinding,c=e("./edit_session").EditSession,h=e("./search").Search,p=e("./range").Range,d=e("./lib/event_emitter").EventEmitter,v=e("./commands/command_manager").CommandManager,m=e("./commands/default_commands").commands,g=e("./config"),y=function(e,t){var n=e.getContainerElement();this.container=n,this.renderer=e,this.commands=new v(o.isMac?"mac":"win",m),this.textInput=new u(e.getTextAreaContainer(),this),this.renderer.textarea=this.textInput.getElement(),this.keyBinding=new l(this),this.$mouseHandler=new a(this),new f(this),this.$blockScrolling=0,this.$search=(new h).set({wrap:!0}),this.setSession(t||new c("")),g.resetOptions(this),g._emit("editor",this)};(function(){r.implement(this,d),this.setKeyboardHandler=function(e){if(!e)this.keyBinding.setKeyboardHandler(null);else if(typeof e=="string"){this.$keybindingId=e;var t=this;g.loadModule(["keybinding",e],function(n){t.$keybindingId==e&&t.keyBinding.setKeyboardHandler(n&&n.handler)})}else delete this.$keybindingId,this.keyBinding.setKeyboardHandler(e)},this.getKeyboardHandler=function(){return this.keyBinding.getKeyboardHandler()},this.setSession=function(e){if(this.session==e)return;if(this.session){var t=this.session;this.session.removeEventListener("change",this.$onDocumentChange),this.session.removeEventListener("changeMode",this.$onChangeMode),this.session.removeEventListener("tokenizerUpdate",this.$onTokenizerUpdate),this.session.removeEventListener("changeTabSize",this.$onChangeTabSize),this.session.removeEventListener("changeWrapLimit",this.$onChangeWrapLimit),this.session.removeEventListener("changeWrapMode",this.$onChangeWrapMode),this.session.removeEventListener("onChangeFold",this.$onChangeFold),this.session.removeEventListener("changeFrontMarker",this.$onChangeFrontMarker),this.session.removeEventListener("changeBackMarker",this.$onChangeBackMarker),this.session.removeEventListener("changeBreakpoint",this.$onChangeBreakpoint),this.session.removeEventListener("changeAnnotation",this.$onChangeAnnotation),this.session.removeEventListener("changeOverwrite",this.$onCursorChange),this.session.removeEventListener("changeScrollTop",this.$onScrollTopChange),this.session.removeEventListener("changeScrollLeft",this.$onScrollLeftChange);var n=this.session.getSelection();n.removeEventListener("changeCursor",this.$onCursorChange),n.removeEventListener("changeSelection",this.$onSelectionChange)}this.session=e,this.$onDocumentChange=this.onDocumentChange.bind(this),e.addEventListener("change",this.$onDocumentChange),this.renderer.setSession(e),this.$onChangeMode=this.onChangeMode.bind(this),e.addEventListener("changeMode",this.$onChangeMode),this.$onTokenizerUpdate=this.onTokenizerUpdate.bind(this),e.addEventListener("tokenizerUpdate",this.$onTokenizerUpdate),this.$onChangeTabSize=this.renderer.onChangeTabSize.bind(this.renderer),e.addEventListener("changeTabSize",this.$onChangeTabSize),this.$onChangeWrapLimit=this.onChangeWrapLimit.bind(this),e.addEventListener("changeWrapLimit",this.$onChangeWrapLimit),this.$onChangeWrapMode=this.onChangeWrapMode.bind(this),e.addEventListener("changeWrapMode",this.$onChangeWrapMode),this.$onChangeFold=this.onChangeFold.bind(this),e.addEventListener("changeFold",this.$onChangeFold),this.$onChangeFrontMarker=this.onChangeFrontMarker.bind(this),this.session.addEventListener("changeFrontMarker",this.$onChangeFrontMarker),this.$onChangeBackMarker=this.onChangeBackMarker.bind(this),this.session.addEventListener("changeBackMarker",this.$onChangeBackMarker),this.$onChangeBreakpoint=this.onChangeBreakpoint.bind(this),this.session.addEventListener("changeBreakpoint",this.$onChangeBreakpoint),this.$onChangeAnnotation=this.onChangeAnnotation.bind(this),this.session.addEventListener("changeAnnotation",this.$onChangeAnnotation),this.$onCursorChange=this.onCursorChange.bind(this),this.session.addEventListener("changeOverwrite",this.$onCursorChange),this.$onScrollTopChange=this.onScrollTopChange.bind(this),this.session.addEventListener("changeScrollTop",this.$onScrollTopChange),this.$onScrollLeftChange=this.onScrollLeftChange.bind(this),this.session.addEventListener("changeScrollLeft",this.$onScrollLeftChange),this.selection=e.getSelection(),this.selection.addEventListener("changeCursor",this.$onCursorChange),this.$onSelectionChange=this.onSelectionChange.bind(this),this.selection.addEventListener("changeSelection",this.$onSelectionChange),this.onChangeMode(),this.$blockScrolling+=1,this.onCursorChange(),this.$blockScrolling-=1,this.onScrollTopChange(),this.onScrollLeftChange(),this.onSelectionChange(),this.onChangeFrontMarker(),this.onChangeBackMarker(),this.onChangeBreakpoint(),this.onChangeAnnotation(),this.session.getUseWrapMode()&&this.renderer.adjustWrapLimit(),this.renderer.updateFull(),this._emit("changeSession",{session:e,oldSession:t})},this.getSession=function(){return this.session},this.setValue=function(e,t){return this.session.doc.setValue(e),t?t==1?this.navigateFileEnd():t==-1&&this.navigateFileStart():this.selectAll(),e},this.getValue=function(){return this.session.getValue()},this.getSelection=function(){return this.selection},this.resize=function(e){this.renderer.onResize(e)},this.setTheme=function(e){this.renderer.setTheme(e)},this.getTheme=function(){return this.renderer.getTheme()},this.setStyle=function(e){this.renderer.setStyle(e)},this.unsetStyle=function(e){this.renderer.unsetStyle(e)},this.getFontSize=function(){return this.getOption("fontSize")||i.computedStyle(this.container,"fontSize")},this.setFontSize=function(e){this.setOption("fontSize",e)},this.$highlightBrackets=function(){this.session.$bracketHighlight&&(this.session.removeMarker(this.session.$bracketHighlight),this.session.$bracketHighlight=null);if(this.$highlightPending)return;var e=this;this.$highlightPending=!0,setTimeout(function(){e.$highlightPending=!1;var t=e.session.findMatchingBracket(e.getCursorPosition());if(t)var n=new p(t.row,t.column,t.row,t.column+1);else if(e.session.$mode.getMatching)var n=e.session.$mode.getMatching(e.session);n&&(e.session.$bracketHighlight=e.session.addMarker(n,"ace_bracket","text"))},50)},this.focus=function(){var e=this;setTimeout(function(){e.textInput.focus()}),this.textInput.focus()},this.isFocused=function(){return this.textInput.isFocused()},this.blur=function(){this.textInput.blur()},this.onFocus=function(){if(this.$isFocused)return;this.$isFocused=!0,this.renderer.showCursor(),this.renderer.visualizeFocus(),this._emit("focus")},this.onBlur=function(){if(!this.$isFocused)return;this.$isFocused=!1,this.renderer.hideCursor(),this.renderer.visualizeBlur(),this._emit("blur")},this.$cursorChange=function(){this.renderer.updateCursor()},this.onDocumentChange=function(e){var t=e.data,n=t.range,r;n.start.row==n.end.row&&t.action!="insertLines"&&t.action!="removeLines"?r=n.end.row:r=Infinity,this.renderer.updateLines(n.start.row,r),this._emit("change",e),this.$cursorChange()},this.onTokenizerUpdate=function(e){var t=e.data;this.renderer.updateLines(t.first,t.last)},this.onScrollTopChange=function(){this.renderer.scrollToY(this.session.getScrollTop())},this.onScrollLeftChange=function(){this.renderer.scrollToX(this.session.getScrollLeft())},this.onCursorChange=function(){this.$cursorChange(),this.$blockScrolling||this.renderer.scrollCursorIntoView(),this.$highlightBrackets(),this.$updateHighlightActiveLine(),this._emit("changeSelection")},this.$updateHighlightActiveLine=function(){var e=this.getSession(),t;this.$highlightActiveLine&&(this.$selectionStyle!="line"||!this.selection.isMultiLine())&&(t=this.getCursorPosition());if(e.$highlightLineMarker&&!t)e.removeMarker(e.$highlightLineMarker.id),e.$highlightLineMarker=null;else if(!e.$highlightLineMarker&&t){var n=new p(t.row,t.column,t.row,Infinity);n.id=e.addMarker(n,"ace_active-line","screenLine"),e.$highlightLineMarker=n}else t&&(e.$highlightLineMarker.start.row=t.row,e.$highlightLineMarker.end.row=t.row,e.$highlightLineMarker.start.column=t.column,e._emit("changeBackMarker"))},this.onSelectionChange=function(e){var t=this.session;t.$selectionMarker&&t.removeMarker(t.$selectionMarker),t.$selectionMarker=null;if(!this.selection.isEmpty()){var n=this.selection.getRange(),r=this.getSelectionStyle();t.$selectionMarker=t.addMarker(n,"ace_selection",r)}else this.$updateHighlightActiveLine();var i=this.$highlightSelectedWord&&this.$getSelectionHighLightRegexp();this.session.highlight(i),this._emit("changeSelection")},this.$getSelectionHighLightRegexp=function(){var e=this.session,t=this.getSelectionRange();if(t.isEmpty()||t.isMultiLine())return;var n=t.start.column-1,r=t.end.column+1,i=e.getLine(t.start.row),s=i.length,o=i.substring(Math.max(n,0),Math.min(r,s));if(n>=0&&/^[\w\d]/.test(o)||r<=s&&/[\w\d]$/.test(o))return;o=i.substring(t.start.column,t.end.column);if(!/^[\w\d]+$/.test(o))return;var u=this.$search.$assembleRegExp({wholeWord:!0,caseSensitive:!0,needle:o});return u},this.onChangeFrontMarker=function(){this.renderer.updateFrontMarkers()},this.onChangeBackMarker=function(){this.renderer.updateBackMarkers()},this.onChangeBreakpoint=function(){this.renderer.updateBreakpoints()},this.onChangeAnnotation=function(){this.renderer.setAnnotations(this.session.getAnnotations())},this.onChangeMode=function(e){this.renderer.updateText(),this._emit("changeMode",e)},this.onChangeWrapLimit=function(){this.renderer.updateFull()},this.onChangeWrapMode=function(){this.renderer.onResize(!0)},this.onChangeFold=function(){this.$updateHighlightActiveLine(),this.renderer.updateFull()},this.getCopyText=function(){var e="";return this.selection.isEmpty()||(e=this.session.getTextRange(this.getSelectionRange())),this._emit("copy",e),e},this.onCopy=function(){this.commands.exec("copy",this)},this.onCut=function(){this.commands.exec("cut",this)},this.onPaste=function(e){if(this.$readOnly)return;this._emit("paste",e),this.insert(e)},this.execCommand=function(e,t){this.commands.exec(e,this,t)},this.insert=function(e){var t=this.session,n=t.getMode(),r=this.getCursorPosition();if(this.getBehavioursEnabled()){var i=n.transformAction(t.getState(r.row),"insertion",this,t,e);i&&(e=i.text)}e=e.replace("	",this.session.getTabString());if(!this.selection.isEmpty())r=this.session.remove(this.getSelectionRange()),this.clearSelection();else if(this.session.getOverwrite()){var s=new p.fromPoints(r,r);s.end.column+=e.length,this.session.remove(s)}this.clearSelection();var o=r.column,u=t.getState(r.row),a=t.getLine(r.row),f=n.checkOutdent(u,a,e),l=t.insert(r,e);i&&i.selection&&(i.selection.length==2?this.selection.setSelectionRange(new p(r.row,o+i.selection[0],r.row,o+i.selection[1])):this.selection.setSelectionRange(new p(r.row+i.selection[0],i.selection[1],r.row+i.selection[2],i.selection[3])));if(t.getDocument().isNewLine(e)){var c=n.getNextLineIndent(u,a.slice(0,r.column),t.getTabString());this.moveCursorTo(r.row+1,0);var h=t.getTabSize(),d=Number.MAX_VALUE;for(var v=r.row+1;v<=l.row;++v){var m=0;a=t.getLine(v);for(var g=0;g<a.length;++g)if(a.charAt(g)=="	")m+=h;else{if(a.charAt(g)!=" ")break;m+=1}/[^\s]/.test(a)&&(d=Math.min(m,d))}for(var v=r.row+1;v<=l.row;++v){var y=d;a=t.getLine(v);for(var g=0;g<a.length&&y>0;++g)a.charAt(g)=="	"?y-=h:a.charAt(g)==" "&&(y-=1);t.remove(new p(v,0,v,g))}t.indentRows(r.row+1,l.row,c)}f&&n.autoOutdent(u,t,r.row)},this.onTextInput=function(e){this.keyBinding.onTextInput(e)},this.onCommandKey=function(e,t,n){this.keyBinding.onCommandKey(e,t,n)},this.setOverwrite=function(e){this.session.setOverwrite(e)},this.getOverwrite=function(){return this.session.getOverwrite()},this.toggleOverwrite=function(){this.session.toggleOverwrite()},this.setScrollSpeed=function(e){this.setOption("scrollSpeed",e)},this.getScrollSpeed=function(){return this.getOption("scrollSpeed")},this.setDragDelay=function(e){this.setOption("dragDelay",e)},this.getDragDelay=function(){return this.getOption("dragDelay")},this.setSelectionStyle=function(e){this.setOption("selectionStyle",e)},this.getSelectionStyle=function(){return this.getOption("selectionStyle")},this.setHighlightActiveLine=function(e){this.setOption("highlightActiveLine",e)},this.getHighlightActiveLine=function(){return this.getOption("highlightActiveLine")},this.setHighlightGutterLine=function(e){this.setOption("highlightGutterLine",e)},this.getHighlightGutterLine=function(){return this.getOption("highlightGutterLine")},this.setHighlightSelectedWord=function(e){this.setOption("highlightSelectedWord",e)},this.getHighlightSelectedWord=function(){return this.$highlightSelectedWord},this.setAnimatedScroll=function(e){this.renderer.setAnimatedScroll(e)},this.getAnimatedScroll=function(){return this.renderer.getAnimatedScroll()},this.setShowInvisibles=function(e){this.renderer.setShowInvisibles(e)},this.getShowInvisibles=function(){return this.renderer.getShowInvisibles()},this.setDisplayIndentGuides=function(e){this.renderer.setDisplayIndentGuides(e)},this.getDisplayIndentGuides=function(){return this.renderer.getDisplayIndentGuides()},this.setShowPrintMargin=function(e){this.renderer.setShowPrintMargin(e)},this.getShowPrintMargin=function(){return this.renderer.getShowPrintMargin()},this.setPrintMarginColumn=function(e){this.renderer.setPrintMarginColumn(e)},this.getPrintMarginColumn=function(){return this.renderer.getPrintMarginColumn()},this.setReadOnly=function(e){this.setOption("readOnly",e)},this.getReadOnly=function(){return this.getOption("readOnly")},this.setBehavioursEnabled=function(e){this.setOption("behavioursEnabled",e)},this.getBehavioursEnabled=function(){return this.getOption("behavioursEnabled")},this.setWrapBehavioursEnabled=function(e){this.setOption("wrapBehavioursEnabled",e)},this.getWrapBehavioursEnabled=function(){return this.getOption("wrapBehavioursEnabled")},this.setShowFoldWidgets=function(e){this.setOption("showFoldWidgets",e)},this.getShowFoldWidgets=function(){return this.getOption("showFoldWidgets")},this.setFadeFoldWidgets=function(e){this.setOption("fadeFoldWidgets",e)},this.getFadeFoldWidgets=function(){return this.getOption("fadeFoldWidgets")},this.remove=function(e){this.selection.isEmpty()&&(e=="left"?this.selection.selectLeft():this.selection.selectRight());var t=this.getSelectionRange();if(this.getBehavioursEnabled()){var n=this.session,r=n.getState(t.start.row),i=n.getMode().transformAction(r,"deletion",this,n,t);i&&(t=i)}this.session.remove(t),this.clearSelection()},this.removeWordRight=function(){this.selection.isEmpty()&&this.selection.selectWordRight(),this.session.remove(this.getSelectionRange()),this.clearSelection()},this.removeWordLeft=function(){this.selection.isEmpty()&&this.selection.selectWordLeft(),this.session.remove(this.getSelectionRange()),this.clearSelection()},this.removeToLineStart=function(){this.selection.isEmpty()&&this.selection.selectLineStart(),this.session.remove(this.getSelectionRange()),this.clearSelection()},this.removeToLineEnd=function(){this.selection.isEmpty()&&this.selection.selectLineEnd();var e=this.getSelectionRange();e.start.column==e.end.column&&e.start.row==e.end.row&&(e.end.column=0,e.end.row++),this.session.remove(e),this.clearSelection()},this.splitLine=function(){this.selection.isEmpty()||(this.session.remove(this.getSelectionRange()),this.clearSelection());var e=this.getCursorPosition();this.insert("\n"),this.moveCursorToPosition(e)},this.transposeLetters=function(){if(!this.selection.isEmpty())return;var e=this.getCursorPosition(),t=e.column;if(t===0)return;var n=this.session.getLine(e.row),r,i;t<n.length?(r=n.charAt(t)+n.charAt(t-1),i=new p(e.row,t-1,e.row,t+1)):(r=n.charAt(t-1)+n.charAt(t-2),i=new p(e.row,t-2,e.row,t)),this.session.replace(i,r)},this.toLowerCase=function(){var e=this.getSelectionRange();this.selection.isEmpty()&&this.selection.selectWord();var t=this.getSelectionRange(),n=this.session.getTextRange(t);this.session.replace(t,n.toLowerCase()),this.selection.setSelectionRange(e)},this.toUpperCase=function(){var e=this.getSelectionRange();this.selection.isEmpty()&&this.selection.selectWord();var t=this.getSelectionRange(),n=this.session.getTextRange(t);this.session.replace(t,n.toUpperCase()),this.selection.setSelectionRange(e)},this.indent=function(){var e=this.session,t=this.getSelectionRange();if(!(t.start.row<t.end.row||t.start.column<t.end.column)){var r;if(this.session.getUseSoftTabs()){var i=e.getTabSize(),o=this.getCursorPosition(),u=e.documentToScreenColumn(o.row,o.column),a=i-u%i;r=s.stringRepeat(" ",a)}else r="	";return this.insert(r)}var n=this.$getSelectedRows();e.indentRows(n.first,n.last,"	")},this.blockIndent=function(){var e=this.$getSelectedRows();this.session.indentRows(e.first,e.last,"	")},this.blockOutdent=function(){var e=this.session.getSelection();this.session.outdentRows(e.getRange())},this.sortLines=function(){var e=this.$getSelectedRows(),t=this.session,n=[];for(i=e.first;i<=e.last;i++)n.push(t.getLine(i));n.sort(function(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0});var r=new p(0,0,0,0);for(var i=e.first;i<=e.last;i++){var s=t.getLine(i);r.start.row=i,r.end.row=i,r.end.column=s.length,t.replace(r,n[i-e.first])}},this.toggleCommentLines=function(){var e=this.session.getState(this.getCursorPosition().row),t=this.$getSelectedRows();this.session.getMode().toggleCommentLines(e,this.session,t.first,t.last)},this.toggleBlockComment=function(){var e=this.getCursorPosition(),t=this.session.getState(e.row),n=this.getSelectionRange();this.session.getMode().toggleBlockComment(t,this.session,n,e)},this.getNumberAt=function(e,t){var n=/[\-]?[0-9]+(?:\.[0-9]+)?/g;n.lastIndex=0;var r=this.session.getLine(e);while(n.lastIndex<t){var i=n.exec(r);if(i.index<=t&&i.index+i[0].length>=t){var s={value:i[0],start:i.index,end:i.index+i[0].length};return s}}return null},this.modifyNumber=function(e){var t=this.selection.getCursor().row,n=this.selection.getCursor().column,r=new p(t,n-1,t,n),i=this.session.getTextRange(r);if(!isNaN(parseFloat(i))&&isFinite(i)){var s=this.getNumberAt(t,n);if(s){var o=s.value.indexOf(".")>=0?s.start+s.value.indexOf(".")+1:s.end,u=s.start+s.value.length-o,a=parseFloat(s.value);a*=Math.pow(10,u),o!==s.end&&n<o?e*=Math.pow(10,s.end-n-1):e*=Math.pow(10,s.end-n),a+=e,a/=Math.pow(10,u);var f=a.toFixed(u),l=new p(t,s.start,t,s.end);this.session.replace(l,f),this.moveCursorTo(t,Math.max(s.start+1,n+f.length-s.value.length))}}},this.removeLines=function(){var e=this.$getSelectedRows(),t;e.first===0||e.last+1<this.session.getLength()?t=new p(e.first,0,e.last+1,0):t=new p(e.first-1,this.session.getLine(e.first-1).length,e.last,this.session.getLine(e.last).length),this.session.remove(t),this.clearSelection()},this.duplicateSelection=function(){var e=this.selection,t=this.session,n=e.getRange(),r=e.isBackwards();if(n.isEmpty()){var i=n.start.row;t.duplicateLines(i,i)}else{var s=r?n.start:n.end,o=t.insert(s,t.getTextRange(n),!1);n.start=s,n.end=o,e.setSelectionRange(n,r)}},this.moveLinesDown=function(){this.$moveLines(function(e,t){return this.session.moveLinesDown(e,t)})},this.moveLinesUp=function(){this.$moveLines(function(e,t){return this.session.moveLinesUp(e,t)})},this.moveText=function(e,t){return this.session.moveText(e,t)},this.copyLinesUp=function(){this.$moveLines(function(e,t){return this.session.duplicateLines(e,t),0})},this.copyLinesDown=function(){this.$moveLines(function(e,t){return this.session.duplicateLines(e,t)})},this.$moveLines=function(e){var t=this.selection;if(!t.inMultiSelectMode||this.inVirtualSelectionMode){var n=t.toOrientedRange(),r=this.$getSelectedRows(n),i=e.call(this,r.first,r.last);n.moveBy(i,0),t.fromOrientedRange(n)}else{var s=t.rangeList.ranges;t.rangeList.detach(this.session);for(var o=s.length;o--;){var u=o,r=s[o].collapseRows(),a=r.end.row,f=r.start.row;while(o--){var r=s[o].collapseRows();if(!(f-r.end.row<=1))break;f=r.end.row}o++;var i=e.call(this,f,a);while(u>=o)s[u].moveBy(i,0),u--}t.fromOrientedRange(t.ranges[0]),t.rangeList.attach(this.session)}},this.$getSelectedRows=function(){var e=this.getSelectionRange().collapseRows();return{first:e.start.row,last:e.end.row}},this.onCompositionStart=function(e){this.renderer.showComposition(this.getCursorPosition())},this.onCompositionUpdate=function(e){this.renderer.setCompositionText(e)},this.onCompositionEnd=function(){this.renderer.hideComposition()},this.getFirstVisibleRow=function(){return this.renderer.getFirstVisibleRow()},this.getLastVisibleRow=function(){return this.renderer.getLastVisibleRow()},this.isRowVisible=function(e){return e>=this.getFirstVisibleRow()&&e<=this.getLastVisibleRow()},this.isRowFullyVisible=function(e){return e>=this.renderer.getFirstFullyVisibleRow()&&e<=this.renderer.getLastFullyVisibleRow()},this.$getVisibleRowCount=function(){return this.renderer.getScrollBottomRow()-this.renderer.getScrollTopRow()+1},this.$moveByPage=function(e,t){var n=this.renderer,r=this.renderer.layerConfig,i=e*Math.floor(r.height/r.lineHeight);this.$blockScrolling++,t==1?this.selection.$moveSelection(function(){this.moveCursorBy(i,0)}):t==0&&(this.selection.moveCursorBy(i,0),this.selection.clearSelection()),this.$blockScrolling--;var s=n.scrollTop;n.scrollBy(0,i*r.lineHeight),t!=null&&n.scrollCursorIntoView(null,.5),n.animateScrolling(s)},this.selectPageDown=function(){this.$moveByPage(1,!0)},this.selectPageUp=function(){this.$moveByPage(-1,!0)},this.gotoPageDown=function(){this.$moveByPage(1,!1)},this.gotoPageUp=function(){this.$moveByPage(-1,!1)},this.scrollPageDown=function(){this.$moveByPage(1)},this.scrollPageUp=function(){this.$moveByPage(-1)},this.scrollToRow=function(e){this.renderer.scrollToRow(e)},this.scrollToLine=function(e,t,n,r){this.renderer.scrollToLine(e,t,n,r)},this.centerSelection=function(){var e=this.getSelectionRange(),t={row:Math.floor(e.start.row+(e.end.row-e.start.row)/2),column:Math.floor(e.start.column+(e.end.column-e.start.column)/2)};this.renderer.alignCursor(t,.5)},this.getCursorPosition=function(){return this.selection.getCursor()},this.getCursorPositionScreen=function(){return this.session.documentToScreenPosition(this.getCursorPosition())},this.getSelectionRange=function(){return this.selection.getRange()},this.selectAll=function(){this.$blockScrolling+=1,this.selection.selectAll(),this.$blockScrolling-=1},this.clearSelection=function(){this.selection.clearSelection()},this.moveCursorTo=function(e,t){this.selection.moveCursorTo(e,t)},this.moveCursorToPosition=function(e){this.selection.moveCursorToPosition(e)},this.jumpToMatching=function(e){var t=this.getCursorPosition(),n=this.session.getBracketRange(t);if(!n){n=this.find({needle:/[{}()\[\]]/g,preventScroll:!0,start:{row:t.row,column:t.column-1}});if(!n)return;var r=n.start;r.row==t.row&&Math.abs(r.column-t.column)<2&&(n=this.session.getBracketRange(r))}r=n&&n.cursor||r,r&&(e?n&&n.isEqual(this.getSelectionRange())?this.clearSelection():this.selection.selectTo(r.row,r.column):(this.clearSelection(),this.moveCursorTo(r.row,r.column)))},this.gotoLine=function(e,t,n){this.selection.clearSelection(),this.session.unfold({row:e-1,column:t||0}),this.$blockScrolling+=1,this.exitMultiSelectMode&&this.exitMultiSelectMode(),this.moveCursorTo(e-1,t||0),this.$blockScrolling-=1,this.isRowFullyVisible(e-1)||this.scrollToLine(e-1,!0,n)},this.navigateTo=function(e,t){this.clearSelection(),this.moveCursorTo(e,t)},this.navigateUp=function(e){if(this.selection.isMultiLine()&&!this.selection.isBackwards()){var t=this.selection.anchor.getPosition();return this.moveCursorToPosition(t)}this.selection.clearSelection(),e=e||1,this.selection.moveCursorBy(-e,0)},this.navigateDown=function(e){if(this.selection.isMultiLine()&&this.selection.isBackwards()){var t=this.selection.anchor.getPosition();return this.moveCursorToPosition(t)}this.selection.clearSelection(),e=e||1,this.selection.moveCursorBy(e,0)},this.navigateLeft=function(e){if(!this.selection.isEmpty()){var t=this.getSelectionRange().start;this.moveCursorToPosition(t)}else{e=e||1;while(e--)this.selection.moveCursorLeft()}this.clearSelection()},this.navigateRight=function(e){if(!this.selection.isEmpty()){var t=this.getSelectionRange().end;this.moveCursorToPosition(t)}else{e=e||1;while(e--)this.selection.moveCursorRight()}this.clearSelection()},this.navigateLineStart=function(){this.selection.moveCursorLineStart(),this.clearSelection()},this.navigateLineEnd=function(){this.selection.moveCursorLineEnd(),this.clearSelection()},this.navigateFileEnd=function(){var e=this.renderer.scrollTop;this.selection.moveCursorFileEnd(),this.clearSelection(),this.renderer.animateScrolling(e)},this.navigateFileStart=function(){var e=this.renderer.scrollTop;this.selection.moveCursorFileStart(),this.clearSelection(),this.renderer.animateScrolling(e)},this.navigateWordRight=function(){this.selection.moveCursorWordRight(),this.clearSelection()},this.navigateWordLeft=function(){this.selection.moveCursorWordLeft(),this.clearSelection()},this.replace=function(e,t){t&&this.$search.set(t);var n=this.$search.find(this.session),r=0;return n?(this.$tryReplace(n,e)&&(r=1),n!==null&&(this.selection.setSelectionRange(n),this.renderer.scrollSelectionIntoView(n.start,n.end)),r):r},this.replaceAll=function(e,t){t&&this.$search.set(t);var n=this.$search.findAll(this.session),r=0;if(!n.length)return r;this.$blockScrolling+=1;var i=this.getSelectionRange();this.clearSelection(),this.selection.moveCursorTo(0,0);for(var s=n.length-1;s>=0;--s)this.$tryReplace(n[s],e)&&r++;return this.selection.setSelectionRange(i),this.$blockScrolling-=1,r},this.$tryReplace=function(e,t){var n=this.session.getTextRange(e);return t=this.$search.replace(n,t),t!==null?(e.end=this.session.replace(e,t),e):null},this.getLastSearchOptions=function(){return this.$search.getOptions()},this.find=function(e,t,n){t||(t={}),typeof e=="string"||e instanceof RegExp?t.needle=e:typeof e=="object"&&r.mixin(t,e);var i=this.selection.getRange();t.needle==null&&(e=this.session.getTextRange(i)||this.$search.$options.needle,e||(i=this.session.getWordRange(i.start.row,i.start.column),e=this.session.getTextRange(i)),this.$search.set({needle:e})),this.$search.set(t),t.start||this.$search.set({start:i});var s=this.$search.find(this.session);if(t.preventScroll)return s;if(s)return this.revealRange(s,n),s;t.backwards?i.start=i.end:i.end=i.start,this.selection.setRange(i)},this.findNext=function(e,t){this.find({skipCurrent:!0,backwards:!1},e,t)},this.findPrevious=function(e,t){this.find(e,{skipCurrent:!0,backwards:!0},t)},this.revealRange=function(e,t){this.$blockScrolling+=1,this.session.unfold(e),this.selection.setSelectionRange(e),this.$blockScrolling-=1;var n=this.renderer.scrollTop;this.renderer.scrollSelectionIntoView(e.start,e.end,.5),t!=0&&this.renderer.animateScrolling(n)},this.undo=function(){this.$blockScrolling++,this.session.getUndoManager().undo(),this.$blockScrolling--,this.renderer.scrollCursorIntoView(null,.5)},this.redo=function(){this.$blockScrolling++,this.session.getUndoManager().redo(),this.$blockScrolling--,this.renderer.scrollCursorIntoView(null,.5)},this.destroy=function(){this.renderer.destroy(),this._emit("destroy",this)},this.setAutoScrollEditorIntoView=function(e){if(e===!1)return;var t,n=this,r=!1;this.$scrollAnchor||(this.$scrollAnchor=document.createElement("div"));var i=this.$scrollAnchor;i.style.cssText="position:absolute",this.container.insertBefore(i,this.container.firstChild);var s=this.on("changeSelection",function(){r=!0}),o=this.renderer.on("beforeRender",function(){r&&(t=n.renderer.container.getBoundingClientRect())}),u=this.renderer.on("afterRender",function(){if(r&&t&&n.isFocused()){var e=n.renderer,s=e.$cursorLayer.$pixelPos,o=e.layerConfig,u=s.top-o.offset;s.top>=0&&u+t.top<0?r=!0:s.top<o.height&&s.top+t.top+o.lineHeight>window.innerHeight?r=!1:r=null,r!=null&&(i.style.top=u+"px",i.style.left=s.left+"px",i.style.height=o.lineHeight+"px",i.scrollIntoView(r)),r=t=null}});this.setAutoScrollEditorIntoView=function(e){if(e===!0)return;delete this.setAutoScrollEditorIntoView,this.removeEventListener("changeSelection",s),this.renderer.removeEventListener("afterRender",u),this.renderer.removeEventListener("beforeRender",o)}},this.$resetCursorStyle=function(){var e=this.$cursorStyle||"ace",t=this.renderer.$cursorLayer;if(!t)return;t.setSmoothBlinking(e=="smooth"),t.isBlinking=!this.$readOnly&&e!="wide"}}).call(y.prototype),g.defineOptions(y.prototype,"editor",{selectionStyle:{set:function(e){this.onSelectionChange(),this._emit("changeSelectionStyle",{data:e})},initialValue:"line"},highlightActiveLine:{set:function(){this.$updateHighlightActiveLine()},initialValue:!0},highlightSelectedWord:{set:function(e){this.$onSelectionChange()},initialValue:!0},readOnly:{set:function(e){this.$resetCursorStyle()},initialValue:!1},cursorStyle:{set:function(e){this.$resetCursorStyle()},values:["ace","slim","smooth","wide"],initialValue:"ace"},behavioursEnabled:{initialValue:!0},wrapBehavioursEnabled:{initialValue:!0},hScrollBarAlwaysVisible:"renderer",highlightGutterLine:"renderer",animatedScroll:"renderer",showInvisibles:"renderer",showPrintMargin:"renderer",printMarginColumn:"renderer",printMargin:"renderer",fadeFoldWidgets:"renderer",showFoldWidgets:"renderer",showGutter:"renderer",displayIndentGuides:"renderer",fontSize:"renderer",fontFamily:"renderer",scrollSpeed:"$mouseHandler",dragDelay:"$mouseHandler",focusTimout:"$mouseHandler",firstLineNumber:"session",overwrite:"session",newLineMode:"session",useWorker:"session",useSoftTabs:"session",tabSize:"session",wrap:"session",foldStyle:"session"}),t.Editor=y}),ace.define("ace/lib/lang",["require","exports","module"],function(e,t,n){t.stringReverse=function(e){return e.split("").reverse().join("")},t.stringRepeat=function(e,t){var n="";while(t>0){t&1&&(n+=e);if(t>>=1)e+=e}return n};var r=/^\s\s*/,i=/\s\s*$/;t.stringTrimLeft=function(e){return e.replace(r,"")},t.stringTrimRight=function(e){return e.replace(i,"")},t.copyObject=function(e){var t={};for(var n in e)t[n]=e[n];return t},t.copyArray=function(e){var t=[];for(var n=0,r=e.length;n<r;n++)e[n]&&typeof e[n]=="object"?t[n]=this.copyObject(e[n]):t[n]=e[n];return t},t.deepCopy=function(e){if(typeof e!="object")return e;var t=e.constructor();for(var n in e)typeof e[n]=="object"?t[n]=this.deepCopy(e[n]):t[n]=e[n];return t},t.arrayToMap=function(e){var t={};for(var n=0;n<e.length;n++)t[e[n]]=1;return t},t.createMap=function(e){var t=Object.create(null);for(var n in e)t[n]=e[n];return t},t.arrayRemove=function(e,t){for(var n=0;n<=e.length;n++)t===e[n]&&e.splice(n,1)},t.escapeRegExp=function(e){return e.replace(/([.*+?^${}()|[\]\/\\])/g,"\\$1")},t.escapeHTML=function(e){return e.replace(/&/g,"&#38;").replace(/"/g,"&#34;").replace(/'/g,"&#39;").replace(/</g,"&#60;")},t.getMatchOffsets=function(e,t){var n=[];return e.replace(t,function(e){n.push({offset:arguments[arguments.length-2],length:e.length})}),n},t.deferredCall=function(e){var t=null,n=function(){t=null,e()},r=function(e){return r.cancel(),t=setTimeout(n,e||0),r};return r.schedule=r,r.call=function(){return this.cancel(),e(),r},r.cancel=function(){return clearTimeout(t),t=null,r},r},t.delayedCall=function(e,t){var n=null,r=function(){n=null,e()},i=function(e){n&&clearTimeout(n),n=setTimeout(r,e||t)};return i.delay=i,i.schedule=function(e){n==null&&(n=setTimeout(r,e||0))},i.call=function(){this.cancel(),e()},i.cancel=function(){n&&clearTimeout(n),n=null},i.isPending=function(){return n},i}}),ace.define("ace/keyboard/textinput",["require","exports","module","ace/lib/event","ace/lib/useragent","ace/lib/dom","ace/lib/lang"],function(e,t,n){var r=e("../lib/event"),i=e("../lib/useragent"),s=e("../lib/dom"),o=e("../lib/lang"),u=i.isChrome<18,a=function(e,t){function b(e){if(h)return;if(k)t=0,r=e?0:n.value.length-1;else var t=e?2:1,r=2;try{n.setSelectionRange(t,r)}catch(i){}}function w(){if(h)return;n.value=a,i.isWebKit&&y.schedule()}function F(){setTimeout(function(){p&&(n.style.cssText=p,p=""),t.renderer.$keepTextAreaAtCursor==null&&(t.renderer.$keepTextAreaAtCursor=!0,t.renderer.$moveTextAreaToCursor())},0)}var n=s.createElement("textarea");n.className="ace_text-input",i.isTouchPad&&n.setAttribute("x-palm-disable-auto-cap",!0),n.wrap="off",n.autocorrect="off",n.autocapitalize="off",n.spellcheck=!1,n.style.bottom="2000em",e.insertBefore(n,e.firstChild);var a="",f=!1,l=!1,c=!1,h=!1,p="",d=!0;try{var v=document.activeElement===n}catch(m){}r.addListener(n,"blur",function(){t.onBlur(),v=!1}),r.addListener(n,"focus",function(){v=!0,t.onFocus(),b()}),this.focus=function(){n.focus()},this.blur=function(){n.blur()},this.isFocused=function(){return v};var g=o.delayedCall(function(){v&&b(d)}),y=o.delayedCall(function(){h||(n.value=a,v&&b())});i.isWebKit||t.addEventListener("changeSelection",function(){t.selection.isEmpty()!=d&&(d=!d,g.schedule())}),w(),v&&t.onFocus();var E=function(e){return e.selectionStart===0&&e.selectionEnd===e.value.length};!n.setSelectionRange&&n.createTextRange&&(n.setSelectionRange=function(e,t){var n=this.createTextRange();n.collapse(!0),n.moveStart("character",e),n.moveEnd("character",t),n.select()},E=function(e){try{var t=e.ownerDocument.selection.createRange()}catch(n){}return!t||t.parentElement()!=e?!1:t.text==e.value});if(i.isOldIE){var S=!1,x=function(e){if(S)return;var t=n.value;if(h||!t||t==a)return;if(e&&t==a[0])return T.schedule();A(t),S=!0,w(),S=!1},T=o.delayedCall(x);r.addListener(n,"propertychange",x);var N={13:1,27:1};r.addListener(n,"keyup",function(e){h&&(!n.value||N[e.keyCode])&&setTimeout(B,0);if((n.value.charCodeAt(0)||0)<129)return;h?H():P()})}var C=function(e){f?f=!1:l?l=!1:E(n)?(t.selectAll(),b()):k&&b(t.selection.isEmpty())},k=null;this.setInputHandler=function(e){k=e},this.getInputHandler=function(){return k};var L=!1,A=function(e){k&&(e=k(e),k=null),c?(b(),e&&t.onPaste(e),c=!1):e==a[0]?L&&t.execCommand("del",{source:"ace"}):(e.substring(0,2)==a?e=e.substr(2):e[0]==a[0]?e=e.substr(1):e[e.length-1]==a[0]&&(e=e.slice(0,-1)),e[e.length-1]==a[0]&&(e=e.slice(0,-1)),e&&t.onTextInput(e)),L&&(L=!1)},O=function(e){if(h)return;var t=n.value;A(t),w()},M=function(e){var i=t.getCopyText();if(!i){r.preventDefault(e);return}var s=e.clipboardData||window.clipboardData;if(s&&!u){var o=s.setData("Text",i);o&&(t.onCut(),r.preventDefault(e))}o||(f=!0,n.value=i,n.select(),setTimeout(function(){f=!1,w(),b(),t.onCut()}))},_=function(e){var i=t.getCopyText();if(!i){r.preventDefault(e);return}var s=e.clipboardData||window.clipboardData;if(s&&!u){var o=s.setData("Text",i);o&&(t.onCopy(),r.preventDefault(e))}o||(l=!0,n.value=i,n.select(),setTimeout(function(){l=!1,w(),b(),t.onCopy()}))},D=function(e){var s=e.clipboardData||window.clipboardData;if(s){var o=s.getData("Text");o&&t.onPaste(o),i.isIE&&setTimeout(b),r.preventDefault(e)}else n.value="",c=!0};r.addCommandKeyListener(n,t.onCommandKey.bind(t)),r.addListener(n,"select",C),r.addListener(n,"input",O),r.addListener(n,"cut",M),r.addListener(n,"copy",_),r.addListener(n,"paste",D),(!("oncut"in n)||!("oncopy"in n)||!("onpaste"in n))&&r.addListener(e,"keydown",function(e){if(i.isMac&&!e.metaKey||!e.ctrlKey)return;switch(e.keyCode){case 67:_(e);break;case 86:D(e);break;case 88:M(e)}});var P=function(e){if(h)return;h={},t.onCompositionStart(),setTimeout(H,0),t.on("mousedown",B),t.selection.isEmpty()||(t.insert(""),t.session.markUndoGroup(),t.selection.clearSelection()),t.session.markUndoGroup()},H=function(){if(!h)return;t.onCompositionUpdate(n.value),h.lastValue&&t.undo(),h.lastValue=n.value.replace(/\x01/g,"");if(h.lastValue){var e=t.selection.getRange();t.insert(h.lastValue),t.session.markUndoGroup(),h.range=t.selection.getRange(),t.selection.setRange(e),t.selection.clearSelection()}},B=function(e){var r=h;h=!1;var i=setTimeout(function(){var e=n.value.replace(/\x01/g,"");if(h)return;e==r.lastValue?w():!r.lastValue&&e&&(w(),A(e))});k=function(n){return clearTimeout(i),n=n.replace(/\x01/g,""),n==r.lastValue?"":(r.lastValue&&t.undo(),n)},t.onCompositionEnd(),t.removeListener("mousedown",B),e.type=="compositionend"&&r.range&&t.selection.setRange(r.range)},j=o.delayedCall(H,50);r.addListener(n,"compositionstart",P),r.addListener(n,i.isGecko?"text":"keyup",function(){j.schedule()}),r.addListener(n,"compositionend",B),this.getElement=function(){return n},this.setReadOnly=function(e){n.readOnly=e},this.onContextMenu=function(e){L=!0,p||(p=n.style.cssText),n.style.cssText="z-index:100000;"+(i.isIE?"opacity:0.1;":""),b(t.selection.isEmpty()),t._emit("nativecontextmenu",{target:t});var o=t.container.getBoundingClientRect(),u=s.computedStyle(t.container),a=o.top+(parseInt(u.borderTopWidth)||0),f=o.left+(parseInt(o.borderLeftWidth)||0),l=o.bottom-a-n.clientHeight,c=function(e){n.style.left=e.clientX-f-2+"px",n.style.top=Math.min(e.clientY-a-2,l)+"px"};c(e);if(e.type!="mousedown")return;t.renderer.$keepTextAreaAtCursor&&(t.renderer.$keepTextAreaAtCursor=null),i.isWin&&r.capture(t.container,c,F)},this.onContextMenuClose=F,i.isGecko||r.addListener(n,"contextmenu",function(e){t.textInput.onContextMenu(e),F()})};t.TextInput=a}),ace.define("ace/mouse/mouse_handler",["require","exports","module","ace/lib/event","ace/lib/useragent","ace/mouse/default_handlers","ace/mouse/default_gutter_handler","ace/mouse/mouse_event","ace/mouse/dragdrop","ace/config"],function(e,t,n){var r=e("../lib/event"),i=e("../lib/useragent"),s=e("./default_handlers").DefaultHandlers,o=e("./default_gutter_handler").GutterHandler,u=e("./mouse_event").MouseEvent,a=e("./dragdrop").DragdropHandler,f=e("../config"),l=function(e){this.editor=e,new s(this),new o(this),new a(this),r.addListener(e.container,"mousedown",function(t){return e.focus(),r.preventDefault(t)});var t=e.renderer.getMouseEventTarget();r.addListener(t,"click",this.onMouseEvent.bind(this,"click")),r.addListener(t,"mousemove",this.onMouseMove.bind(this,"mousemove")),r.addMultiMouseDownListener(t,[300,300,250],this,"onMouseEvent"),r.addMouseWheelListener(e.container,this.onMouseWheel.bind(this,"mousewheel"));var n=e.renderer.$gutter;r.addListener(n,"mousedown",this.onMouseEvent.bind(this,"guttermousedown")),r.addListener(n,"click",this.onMouseEvent.bind(this,"gutterclick")),r.addListener(n,"dblclick",this.onMouseEvent.bind(this,"gutterdblclick")),r.addListener(n,"mousemove",this.onMouseEvent.bind(this,"guttermousemove"))};(function(){this.onMouseEvent=function(e,t){this.editor._emit(e,new u(t,this.editor))},this.onMouseMove=function(e,t){var n=this.editor._eventRegistry&&this.editor._eventRegistry.mousemove;if(!n||!n.length)return;this.editor._emit(e,new u(t,this.editor))},this.onMouseWheel=function(e,t){var n=new u(t,this.editor);n.speed=this.$scrollSpeed*2,n.wheelX=t.wheelX,n.wheelY=t.wheelY,this.editor._emit(e,n)},this.setState=function(e){this.state=e},this.captureMouse=function(e,t){t&&this.setState(t),this.x=e.x,this.y=e.y,this.isMousePressed=!0;var n=this.editor.renderer;n.$keepTextAreaAtCursor&&(n.$keepTextAreaAtCursor=null);var s=this,o=function(e){s.x=e.clientX,s.y=e.clientY},u=function(e){clearInterval(f),a(),s[s.state+"End"]&&s[s.state+"End"](e),s.$clickSelection=null,n.$keepTextAreaAtCursor==null&&(n.$keepTextAreaAtCursor=!0,n.$moveTextAreaToCursor()),s.isMousePressed=!1,s.onMouseEvent("mouseup",e)},a=function(){s[s.state]&&s[s.state]()};if(i.isOldIE&&e.domEvent.type=="dblclick")return setTimeout(function(){u(e.domEvent)});r.capture(this.editor.container,o,u);var f=setInterval(a,20)}}).call(l.prototype),f.defineOptions(l.prototype,"mouseHandler",{scrollSpeed:{initialValue:2},dragDelay:{initialValue:150},focusTimout:{initialValue:0}}),t.MouseHandler=l}),ace.define("ace/mouse/default_handlers",["require","exports","module","ace/lib/dom","ace/lib/useragent"],function(e,t,n){function o(e){e.$clickSelection=null;var t=e.editor;t.setDefaultHandler("mousedown",this.onMouseDown.bind(e)),t.setDefaultHandler("dblclick",this.onDoubleClick.bind(e)),t.setDefaultHandler("tripleclick",this.onTripleClick.bind(e)),t.setDefaultHandler("quadclick",this.onQuadClick.bind(e)),t.setDefaultHandler("mousewheel",this.onMouseWheel.bind(e));var n=["select","startSelect","drag","dragEnd","dragWait","dragWaitEnd","startDrag","focusWait"];n.forEach(function(t){e[t]=this[t]},this),e.selectByLines=this.extendSelectionBy.bind(e,"getLineRange"),e.selectByWords=this.extendSelectionBy.bind(e,"getWordRange")}function u(e,t,n,r){return Math.sqrt(Math.pow(n-e,2)+Math.pow(r-t,2))}function a(e,t){if(e.start.row==e.end.row)var n=2*t.column-e.start.column-e.end.column;else if(e.start.row==e.end.row-1&&!e.start.column&&!e.end.column)var n=t.column-4;else var n=2*t.row-e.start.row-e.end.row;return n<0?{cursor:e.start,anchor:e.end}:{cursor:e.end,anchor:e.start}}var r=e("../lib/dom"),i=e("../lib/useragent"),s=0;(function(){this.onMouseDown=function(e){var t=e.inSelection(),n=e.getDocumentPosition();this.mousedownEvent=e;var r=this.editor,i=e.getButton();if(i!==0){var s=r.getSelectionRange(),o=s.isEmpty();o&&(r.moveCursorToPosition(n),r.selection.clearSelection()),r.textInput.onContextMenu(e.domEvent);return}if(t&&!r.isFocused()){r.focus();if(this.$focusTimout&&!this.$clickSelection&&!r.inMultiSelectMode)return this.setState("focusWait"),this.captureMouse(e),e.preventDefault()}return!t||this.$clickSelection||e.getShiftKey()||r.inMultiSelectMode?this.startSelect(n):t&&(this.mousedownEvent.time=(new Date).getTime(),this.setState("dragWait")),this.captureMouse(e),e.preventDefault()},this.startSelect=function(e){e=e||this.editor.renderer.screenToTextCoordinates(this.x,this.y),this.mousedownEvent.getShiftKey()?this.editor.selection.selectToPosition(e):this.$clickSelection||(this.editor.moveCursorToPosition(e),this.editor.selection.clearSelection()),this.setState("select")},this.select=function(){var e,t=this.editor,n=t.renderer.screenToTextCoordinates(this.x,this.y);if(this.$clickSelection){var r=this.$clickSelection.comparePoint(n);if(r==-1)e=this.$clickSelection.end;else if(r==1)e=this.$clickSelection.start;else{var i=a(this.$clickSelection,n);n=i.cursor,e=i.anchor}t.selection.setSelectionAnchor(e.row,e.column)}t.selection.selectToPosition(n),t.renderer.scrollCursorIntoView()},this.extendSelectionBy=function(e){var t,n=this.editor,r=n.renderer.screenToTextCoordinates(this.x,this.y),i=n.selection[e](r.row,r.column);if(this.$clickSelection){var s=this.$clickSelection.comparePoint(i.start),o=this.$clickSelection.comparePoint(i.end);if(s==-1&&o<=0){t=this.$clickSelection.end;if(i.end.row!=r.row||i.end.column!=r.column)r=i.start}else if(o==1&&s>=0){t=this.$clickSelection.start;if(i.start.row!=r.row||i.start.column!=r.column)r=i.end}else if(s==-1&&o==1)r=i.end,t=i.start;else{var u=a(this.$clickSelection,r);r=u.cursor,t=u.anchor}n.selection.setSelectionAnchor(t.row,t.column)}n.selection.selectToPosition(r),n.renderer.scrollCursorIntoView()},this.startDrag=function(){var e=this.editor;this.setState("drag"),this.dragRange=e.getSelectionRange();var t=e.getSelectionStyle();this.dragSelectionMarker=e.session.addMarker(this.dragRange,"ace_selection",t),e.clearSelection(),r.addCssClass(e.container,"ace_dragging"),this.$dragKeybinding||(this.$dragKeybinding={handleKeyboard:function(e,t,n,r){if(n=="esc")return{command:this.command}},command:{exec:function(e){var t=e.$mouseHandler;t.dragCursor=null,t.dragEnd(),t.startSelect()}}}),e.keyBinding.addKeyboardHandler(this.$dragKeybinding)},this.focusWait=function(){var e=u(this.mousedownEvent.x,this.mousedownEvent.y,this.x,this.y),t=(new Date).getTime();(e>s||t-this.mousedownEvent.time>this.$focusTimout)&&this.startSelect(this.mousedownEvent.getDocumentPosition())},this.dragWait=function(e){var t=u(this.mousedownEvent.x,this.mousedownEvent.y,this.x,this.y),n=(new Date).getTime(),r=this.editor;t>s?this.startSelect(this.mousedownEvent.getDocumentPosition()):n-this.mousedownEvent.time>r.$mouseHandler.$dragDelay&&this.startDrag()},this.dragWaitEnd=function(e){this.mousedownEvent.domEvent=e,this.startSelect()},this.drag=function(){var e=this.editor;this.dragCursor=e.renderer.screenToTextCoordinates(this.x,this.y),e.moveCursorToPosition(this.dragCursor),e.renderer.scrollCursorIntoView()},this.dragEnd=function(e){var t=this.editor,n=this.dragCursor,i=this.dragRange;r.removeCssClass(t.container,"ace_dragging"),t.session.removeMarker(this.dragSelectionMarker),t.keyBinding.removeKeyboardHandler(this.$dragKeybinding);if(!n)return;t.clearSelection();if(e&&(e.ctrlKey||e.altKey)){var s=t.session,o=i;o.end=s.insert(n,s.getTextRange(i)),o.start=n}else{if(i.contains(n.row,n.column))return;var o=t.moveText(i,n)}if(!o)return;t.selection.setSelectionRange(o)},this.onDoubleClick=function(e){var t=e.getDocumentPosition(),n=this.editor,r=n.session,i=r.getBracketRange(t);if(i){i.isEmpty()&&(i.start.column--,i.end.column++),this.$clickSelection=i,this.setState("select");return}this.$clickSelection=n.selection.getWordRange(t.row,t.column),this.setState("selectByWords")},this.onTripleClick=function(e){var t=e.getDocumentPosition(),n=this.editor;this.setState("selectByLines"),this.$clickSelection=n.selection.getLineRange(t.row)},this.onQuadClick=function(e){var t=this.editor;t.selectAll(),this.$clickSelection=t.getSelectionRange(),this.setState("null")},this.onMouseWheel=function(e){if(e.getShiftKey()||e.getAccelKey())return;var t=e.domEvent.timeStamp,n=t-(this.$lastScrollTime||0),r=this.editor,i=r.renderer.isScrollableBy(e.wheelX*e.speed,e.wheelY*e.speed);if(i||n<200)return this.$lastScrollTime=t,r.renderer.scrollBy(e.wheelX*e.speed,e.wheelY*e.speed),e.stop()}}).call(o.prototype),t.DefaultHandlers=o}),ace.define("ace/mouse/default_gutter_handler",["require","exports","module","ace/lib/dom","ace/lib/event"],function(e,t,n){function s(e){function f(){u=r.createElement("div"),u.className="ace_gutter-tooltip",u.style.display="none",t.container.appendChild(u)}function l(){u||f();var e=o.getDocumentPosition().row,r=n.$annotations[e];if(!r)return c();var i=t.session.getLength();if(e==i){var s=t.renderer.pixelToScreenCoordinates(0,o.y).row,l=o.$pos;if(s>t.session.documentToScreenRow(l.row,l.column))return c()}if(a==r)return;a=r.text.join("<br/>"),u.style.display="block",u.innerHTML=a,t.on("mousewheel",c),h(o)}function c(){s&&(s=clearTimeout(s)),a&&(u.style.display="none",a=null,t.removeEventListener("mousewheel",c))}function h(e){var n=t.renderer.$gutter.getBoundingClientRect();u.style.left=e.x+15+"px",e.y+3*t.renderer.lineHeight+15<n.bottom?(u.style.bottom="",u.style.top=e.y+15+"px"):(u.style.top="",u.style.bottom=n.bottom-e.y+5+"px")}var t=e.editor,n=t.renderer.$gutterLayer;e.editor.setDefaultHandler("guttermousedown",function(r){if(!t.isFocused())return;var i=n.getRegion(r);if(i=="foldWidgets")return;var s=r.getDocumentPosition().row,o=t.session.selection;if(r.getShiftKey())o.selectTo(s,0);else{if(r.domEvent.detail==2)return t.selectAll(),r.preventDefault();e.$clickSelection=t.selection.getLineRange(s)}return e.captureMouse(r,"selectByLines"),r.preventDefault()});var s,o,u,a;e.editor.setDefaultHandler("guttermousemove",function(t){var n=t.domEvent.target||t.domEvent.srcElement;if(r.hasCssClass(n,"ace_fold-widget"))return c();a&&h(t),o=t;if(s)return;s=setTimeout(function(){s=null,o&&!e.isMousePressed?l():c()},50)}),i.addListener(t.renderer.$gutter,"mouseout",function(e){o=null;if(!a||s)return;s=setTimeout(function(){s=null,c()},50)})}var r=e("../lib/dom"),i=e("../lib/event");t.GutterHandler=s}),ace.define("ace/mouse/mouse_event",["require","exports","module","ace/lib/event","ace/lib/useragent"],function(e,t,n){var r=e("../lib/event"),i=e("../lib/useragent"),s=t.MouseEvent=function(e,t){this.domEvent=e,this.editor=t,this.x=this.clientX=e.clientX,this.y=this.clientY=e.clientY,this.$pos=null,this.$inSelection=null,this.propagationStopped=!1,this.defaultPrevented=!1};(function(){this.stopPropagation=function(){r.stopPropagation(this.domEvent),this.propagationStopped=!0},this.preventDefault=function(){r.preventDefault(this.domEvent),this.defaultPrevented=!0},this.stop=function(){this.stopPropagation(),this.preventDefault()},this.getDocumentPosition=function(){return this.$pos?this.$pos:(this.$pos=this.editor.renderer.screenToTextCoordinates(this.clientX,this.clientY),this.$pos)},this.inSelection=function(){if(this.$inSelection!==null)return this.$inSelection;var e=this.editor;if(e.getReadOnly())this.$inSelection=!1;else{var t=e.getSelectionRange();if(t.isEmpty())this.$inSelection=!1;else{var n=this.getDocumentPosition();this.$inSelection=t.contains(n.row,n.column)}}return this.$inSelection},this.getButton=function(){return r.getButton(this.domEvent)},this.getShiftKey=function(){return this.domEvent.shiftKey},this.getAccelKey=i.isMac?function(){return this.domEvent.metaKey}:function(){return this.domEvent.ctrlKey}}).call(s.prototype)}),ace.define("ace/mouse/dragdrop",["require","exports","module","ace/lib/event"],function(e,t,n){var r=e("../lib/event"),i=function(e){function h(){u=t.selection.toOrientedRange(),n=t.session.addMarker(u,"ace_selection",t.getSelectionStyle()),t.clearSelection(),clearInterval(o),o=setInterval(c,20),f=0,r.addListener(document,"mousemove",v)}function p(){clearInterval(o),t.session.removeMarker(n),n=null,t.selection.fromOrientedRange(u),f=0,r.removeListener(document,"mousemove",v)}function v(){d==null&&(d=setTimeout(function(){d!=null&&n&&p()},20))}var t=e.editor,n,i,s,o,u,a,f=0,l=t.container;r.addListener(l,"dragenter",function(e){if(t.getReadOnly())return;var i=e.dataTransfer.types;if(i&&Array.prototype.indexOf.call(i,"text/plain")===-1)return;return n||h(),f++,r.preventDefault(e)}),r.addListener(l,"dragover",function(e){if(t.getReadOnly())return;var n=e.dataTransfer.types;if(n&&Array.prototype.indexOf.call(n,"text/plain")===-1)return;return d!==null&&(d=null),i=e.clientX,s=e.clientY,r.preventDefault(e)});var c=function(){a=t.renderer.screenToTextCoordinates(i,s),t.moveCursorToPosition(a),t.renderer.scrollCursorIntoView()};r.addListener(l,"dragleave",function(e){f--;if(f<=0&&n)return p(),r.preventDefault(e)}),r.addListener(l,"drop",function(e){if(!n)return;return u.end=t.session.insert(a,e.dataTransfer.getData("Text")),u.start=a,p(),t.focus(),r.preventDefault(e)});var d=null};t.DragdropHandler=i}),ace.define("ace/config",["require","exports","module","ace/lib/lang","ace/lib/oop","ace/lib/net","ace/lib/event_emitter"],function(e,t,n){"no use strict";function f(e){return e.replace(/-(.)/g,function(e,t){return t.toUpperCase()})}var r=e("./lib/lang"),i=e("./lib/oop"),s=e("./lib/net"),o=e("./lib/event_emitter").EventEmitter,u=function(){return this}(),a={packaged:!1,workerPath:null,modePath:null,themePath:null,basePath:"",suffix:".js",$moduleUrls:{}};t.get=function(e){if(!a.hasOwnProperty(e))throw new Error("Unknown config key: "+e);return a[e]},t.set=function(e,t){if(!a.hasOwnProperty(e))throw new Error("Unknown config key: "+e);a[e]=t},t.all=function(){return r.copyObject(a)},i.implement(t,o),t.moduleUrl=function(e,t){if(a.$moduleUrls[e])return a.$moduleUrls[e];var n=e.split("/");t=t||n[n.length-2]||"";var r=n[n.length-1].replace(t,"").replace(/(^[\-_])|([\-_]$)/,"");!r&&n.length>1&&(r=n[n.length-2]);var i=a[t+"Path"];return i==null&&(i=a.basePath),i&&i.slice(-1)!="/"&&(i+="/"),i+t+"-"+r+this.get("suffix")},t.setModuleUrl=function(e,t){return a.$moduleUrls[e]=t},t.$loading={},t.loadModule=function(n,r){var i,o;Array.isArray(n)&&(o=n[0],n=n[1]);try{i=e(n)}catch(u){}if(i&&!t.$loading[n])return r&&r(i);t.$loading[n]||(t.$loading[n]=[]),t.$loading[n].push(r);if(t.$loading[n].length>1)return;var a=function(){e([n],function(e){t._emit("load.module",{name:n,module:e});var r=t.$loading[n];t.$loading[n]=null,r.forEach(function(t){t&&t(e)})})};if(!t.get("packaged"))return a();s.loadScript(t.moduleUrl(n,o),a)},t.init=function(){a.packaged=e.packaged||n.packaged||u.define&&define.packaged;if(!u.document)return"";var r={},i="",s=document.getElementsByTagName("script");for(var o=0;o<s.length;o++){var l=s[o],c=l.src||l.getAttribute("src");if(!c)continue;var h=l.attributes;for(var p=0,d=h.length;p<d;p++){var v=h[p];v.name.indexOf("data-ace-")===0&&(r[f(v.name.replace(/^data-ace-/,""))]=v.value)}var m=c.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/);m&&(i=m[1])}i&&(r.base=r.base||i,r.packaged=!0),r.basePath=r.base,r.workerPath=r.workerPath||r.base,r.modePath=r.modePath||r.base,r.themePath=r.themePath||r.base,delete r.base;for(var g in r)typeof r[g]!="undefined"&&t.set(g,r[g])};var l={setOptions:function(e){Object.keys(e).forEach(function(t){this.setOption(t,e[t])},this)},getOptions:function(e){var t={};return e?Array.isArray(e)||(t=e,e=Object.keys(t)):e=Object.keys(this.$options),e.forEach(function(e){t[e]=this.getOption(e)},this),t},setOption:function(e,t){if(this["$"+e]===t)return;var n=this.$options[e];if(!n)return undefined;if(n.forwardTo)return this[n.forwardTo]&&this[n.forwardTo].setOption(e,t);n.handlesSet||(this["$"+e]=t),n&&n.set&&n.set.call(this,t)},getOption:function(e){var t=this.$options[e];return t?t.forwardTo?this[t.forwardTo]&&this[t.forwardTo].getOption(e):t&&t.get?t.get.call(this):this["$"+e]:undefined}},c={};t.defineOptions=function(e,t,n){return e.$options||(c[t]=e.$options={}),Object.keys(n).forEach(function(t){var r=n[t];typeof r=="string"&&(r={forwardTo:r}),r.name||(r.name=t),e.$options[r.name]=r,"initialValue"in r&&(e["$"+r.name]=r.initialValue)}),i.implement(e,l),this},t.resetOptions=function(e){Object.keys(e.$options).forEach(function(t){var n=e.$options[t];"value"in n&&e.setOption(t,n.value)})},t.setDefaultValue=function(e,n,r){var i=c[e]||(c[e]={});i[n]&&(i.forwardTo?t.setDefaultValue(i.forwardTo,n,r):i[n].value=r)},t.setDefaultValues=function(e,n){Object.keys(n).forEach(function(r){t.setDefaultValue(e,r,n[r])})}}),ace.define("ace/lib/net",["require","exports","module","ace/lib/dom"],function(e,t,n){var r=e("./dom");t.get=function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.onreadystatechange=function(){n.readyState===4&&t(n.responseText)},n.send(null)},t.loadScript=function(e,t){var n=r.getDocumentHead(),i=document.createElement("script");i.src=e,n.appendChild(i),i.onload=i.onreadystatechange=function(e,n){if(n||!i.readyState||i.readyState=="loaded"||i.readyState=="complete")i=i.onload=i.onreadystatechange=null,n||t()}}}),ace.define("ace/lib/event_emitter",["require","exports","module"],function(e,t,n){var r={},i=function(){this.propagationStopped=!0},s=function(){this.defaultPrevented=!0};r._emit=r._dispatchEvent=function(e,t){this._eventRegistry||(this._eventRegistry={}),this._defaultHandlers||(this._defaultHandlers={});var n=this._eventRegistry[e]||[],r=this._defaultHandlers[e];if(!n.length&&!r)return;if(typeof t!="object"||!t)t={};t.type||(t.type=e),t.stopPropagation||(t.stopPropagation=i),t.preventDefault||(t.preventDefault=s);for(var o=0;o<n.length;o++){n[o](t,this);if(t.propagationStopped)break}if(r&&!t.defaultPrevented)return r(t,this)},r._signal=function(e,t){var n=(this._eventRegistry||{})[e];if(!n)return;for(var r=0;r<n.length;r++)n[r](t,this)},r.once=function(e,t){var n=this;t&&this.addEventListener(e,function r(){n.removeEventListener(e,r),t.apply(null,arguments)})},r.setDefaultHandler=function(e,t){var n=this._defaultHandlers;n||(n=this._defaultHandlers={_disabled_:{}});if(n[e]){var r=n[e],i=n._disabled_[e];i||(n._disabled_[e]=i=[]),i.push(r);var s=i.indexOf(t);s!=-1&&i.splice(s,1)}n[e]=t},r.removeDefaultHandler=function(e,t){var n=this._defaultHandlers;if(!n)return;var r=n._disabled_[e];if(n[e]==t){var i=n[e];r&&this.setDefaultHandler(e,r.pop())}else if(r){var s=r.indexOf(t);s!=-1&&r.splice(s,1)}},r.on=r.addEventListener=function(e,t,n){this._eventRegistry=this._eventRegistry||{};var r=this._eventRegistry[e];return r||(r=this._eventRegistry[e]=[]),r.indexOf(t)==-1&&r[n?"unshift":"push"](t),t},r.off=r.removeListener=r.removeEventListener=function(e,t){this._eventRegistry=this._eventRegistry||{};var n=this._eventRegistry[e];if(!n)return;var r=n.indexOf(t);r!==-1&&n.splice(r,1)},r.removeAllListeners=function(e){this._eventRegistry&&(this._eventRegistry[e]=[])},t.EventEmitter=r}),ace.define("ace/mouse/fold_handler",["require","exports","module"],function(e,t,n){function r(e){e.on("click",function(t){var n=t.getDocumentPosition(),r=e.session,i=r.getFoldAt(n.row,n.column,1);i&&(t.getAccelKey()?r.removeFold(i):r.expandFold(i),t.stop())}),e.on("gutterclick",function(t){var n=e.renderer.$gutterLayer.getRegion(t);if(n=="foldWidgets"){var r=t.getDocumentPosition().row,i=e.session;i.foldWidgets&&i.foldWidgets[r]&&e.session.onFoldWidgetClick(r,t),e.isFocused()||e.focus(),t.stop()}}),e.on("gutterdblclick",function(t){var n=e.renderer.$gutterLayer.getRegion(t);if(n=="foldWidgets"){var r=t.getDocumentPosition().row,i=e.session,s=i.getParentFoldRangeData(r,!0),o=s.range||s.firstRange;if(o){var r=o.start.row,u=i.getFoldAt(r,i.getLine(r).length,1);u?i.removeFold(u):(i.addFold("...",o),e.renderer.scrollCursorIntoView({row:o.start.row,column:0}))}t.stop()}})}t.FoldHandler=r}),ace.define("ace/keyboard/keybinding",["require","exports","module","ace/lib/keys","ace/lib/event"],function(e,t,n){var r=e("../lib/keys"),i=e("../lib/event"),s=function(e){this.$editor=e,this.$data={},this.$handlers=[],this.setDefaultHandler(e.commands)};(function(){this.setDefaultHandler=function(e){this.removeKeyboardHandler(this.$defaultHandler),this.$defaultHandler=e,this.addKeyboardHandler(e,0),this.$data={editor:this.$editor}},this.setKeyboardHandler=function(e){var t=this.$handlers;if(t[t.length-1]==e)return;while(t[t.length-1]&&t[t.length-1]!=this.$defaultHandler)this.removeKeyboardHandler(t[t.length-1]);this.addKeyboardHandler(e,1)},this.addKeyboardHandler=function(e,t){if(!e)return;var n=this.$handlers.indexOf(e);n!=-1&&this.$handlers.splice(n,1),t==undefined?this.$handlers.push(e):this.$handlers.splice(t,0,e),n==-1&&e.attach&&e.attach(this.$editor)},this.removeKeyboardHandler=function(e){var t=this.$handlers.indexOf(e);return t==-1?!1:(this.$handlers.splice(t,1),e.detach&&e.detach(this.$editor),!0)},this.getKeyboardHandler=function(){return this.$handlers[this.$handlers.length-1]},this.$callKeyboardHandlers=function(e,t,n,r){var s,o=!1,u=this.$editor.commands;for(var a=this.$handlers.length;a--;){s=this.$handlers[a].handleKeyboard(this.$data,e,t,n,r);if(!s||!s.command)continue;s.command=="null"?o=!0:o=u.exec(s.command,this.$editor,s.args,r),o&&r&&e!=-1&&s.passEvent!=1&&i.stopEvent(r);if(o)break}return o},this.onCommandKey=function(e,t,n){var i=r.keyCodeToString(n);this.$callKeyboardHandlers(t,i,n,e)},this.onTextInput=function(e){var t=this.$callKeyboardHandlers(-1,e);t||this.$editor.commands.exec("insertstring",this.$editor,e)}}).call(s.prototype),t.KeyBinding=s}),ace.define("ace/edit_session",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/config","ace/lib/event_emitter","ace/selection","ace/mode/text","ace/range","ace/document","ace/background_tokenizer","ace/search_highlight","ace/edit_session/folding","ace/edit_session/bracket_match"],function(e,t,n){var r=e("./lib/oop"),i=e("./lib/lang"),s=e("./config"),o=e("./lib/event_emitter").EventEmitter,u=e("./selection").Selection,a=e("./mode/text").Mode,f=e("./range").Range,l=e("./document").Document,c=e("./background_tokenizer").BackgroundTokenizer,h=e("./search_highlight").SearchHighlight,p=function(e,t){this.$breakpoints=[],this.$decorations=[],this.$frontMarkers={},this.$backMarkers={},this.$markerId=1,this.$undoSelect=!0,this.$foldData=[],this.$foldData.toString=function(){return this.join("\n")},this.on("changeFold",this.onChangeFold.bind(this)),this.$onChange=this.onChange.bind(this);if(typeof e!="object"||!e.getLine)e=new l(e);this.setDocument(e),this.selection=new u(this),s.resetOptions(this),this.setMode(t),s._emit("session",this)};(function(){function g(e){return e<4352?!1:e>=4352&&e<=4447||e>=4515&&e<=4519||e>=4602&&e<=4607||e>=9001&&e<=9002||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12283||e>=12288&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12589||e>=12593&&e<=12686||e>=12688&&e<=12730||e>=12736&&e<=12771||e>=12784&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=13054||e>=13056&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=55216&&e<=55238||e>=55243&&e<=55291||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=65281&&e<=65376||e>=65504&&e<=65510}r.implement(this,o),this.setDocument=function(e){this.doc&&this.doc.removeListener("change",this.$onChange),this.doc=e,e.on("change",this.$onChange),this.bgTokenizer&&this.bgTokenizer.setDocument(this.getDocument()),this.resetCaches()},this.getDocument=function(){return this.doc},this.$resetRowCache=function(e){if(!e){this.$docRowCache=[],this.$screenRowCache=[];return}var t=this.$docRowCache.length,n=this.$getRowCacheIndex(this.$docRowCache,e)+1;t>n&&(this.$docRowCache.splice(n,t),this.$screenRowCache.splice(n,t))},this.$getRowCacheIndex=function(e,t){var n=0,r=e.length-1;while(n<=r){var i=n+r>>1,s=e[i];if(t>s)n=i+1;else{if(!(t<s))return i;r=i-1}}return n-1},this.resetCaches=function(){this.$modified=!0,this.$wrapData=[],this.$rowLengthCache=[],this.$resetRowCache(0),this.bgTokenizer&&this.bgTokenizer.start(0)},this.onChangeFold=function(e){var t=e.data;this.$resetRowCache(t.start.row)},this.onChange=function(e){var t=e.data;this.$modified=!0,this.$resetRowCache(t.range.start.row);var n=this.$updateInternalDataOnChange(e);!this.$fromUndo&&this.$undoManager&&!t.ignore&&(this.$deltasDoc.push(t),n&&n.length!=0&&this.$deltasFold.push({action:"removeFolds",folds:n}),this.$informUndoManager.schedule()),this.bgTokenizer.$updateOnChange(t),this._emit("change",e)},this.setValue=function(e){this.doc.setValue(e),this.selection.moveCursorTo(0,0),this.selection.clearSelection(),this.$resetRowCache(0),this.$deltas=[],this.$deltasDoc=[],this.$deltasFold=[],this.getUndoManager().reset()},this.getValue=this.toString=function(){return this.doc.getValue()},this.getSelection=function(){return this.selection},this.getState=function(e){return this.bgTokenizer.getState(e)},this.getTokens=function(e){return this.bgTokenizer.getTokens(e)},this.getTokenAt=function(e,t){var n=this.bgTokenizer.getTokens(e),r,i=0;if(t==null)s=n.length-1,i=this.getLine(e).length;else for(var s=0;s<n.length;s++){i+=n[s].value.length;if(i>=t)break}return r=n[s],r?(r.index=s,r.start=i-r.value.length,r):null},this.setUndoManager=function(e){this.$undoManager=e,this.$deltas=[],this.$deltasDoc=[],this.$deltasFold=[],this.$informUndoManager&&this.$informUndoManager.cancel();if(e){var t=this;this.$syncInformUndoManager=function(){t.$informUndoManager.cancel(),t.$deltasFold.length&&(t.$deltas.push({group:"fold",deltas:t.$deltasFold}),t.$deltasFold=[]),t.$deltasDoc.length&&(t.$deltas.push({group:"doc",deltas:t.$deltasDoc}),t.$deltasDoc=[]),t.$deltas.length>0&&e.execute({action:"aceupdate",args:[t.$deltas,t]}),t.$deltas=[]},this.$informUndoManager=i.delayedCall(this.$syncInformUndoManager)}},this.markUndoGroup=function(){this.$syncInformUndoManager&&this.$syncInformUndoManager()},this.$defaultUndoManager={undo:function(){},redo:function(){},reset:function(){}},this.getUndoManager=function(){return this.$undoManager||this.$defaultUndoManager},this.getTabString=function(){return this.getUseSoftTabs()?i.stringRepeat(" ",this.getTabSize()):"	"},this.setUseSoftTabs=function(e){this.setOption("useSoftTabs",e)},this.getUseSoftTabs=function(){return this.$useSoftTabs},this.setTabSize=function(e){this.setOption("tabSize",e)},this.getTabSize=function(){return this.$tabSize},this.isTabStop=function(e){return this.$useSoftTabs&&e.column%this.$tabSize==0},this.$overwrite=!1,this.setOverwrite=function(e){this.setOption("overwrite",e)},this.getOverwrite=function(){return this.$overwrite},this.toggleOverwrite=function(){this.setOverwrite(!this.$overwrite)},this.addGutterDecoration=function(e,t){this.$decorations[e]||(this.$decorations[e]=""),this.$decorations[e]+=" "+t,this._emit("changeBreakpoint",{})},this.removeGutterDecoration=function(e,t){this.$decorations[e]=(this.$decorations[e]||"").replace(" "+t,""),this._emit("changeBreakpoint",{})},this.getBreakpoints=function(){return this.$breakpoints},this.setBreakpoints=function(e){this.$breakpoints=[];for(var t=0;t<e.length;t++)this.$breakpoints[e[t]]="ace_breakpoint";this._emit("changeBreakpoint",{})},this.clearBreakpoints=function(){this.$breakpoints=[],this._emit("changeBreakpoint",{})},this.setBreakpoint=function(e,t){t===undefined&&(t="ace_breakpoint"),t?this.$breakpoints[e]=t:delete this.$breakpoints[e],this._emit("changeBreakpoint",{})},this.clearBreakpoint=function(e){delete this.$breakpoints[e],this._emit("changeBreakpoint",{})},this.addMarker=function(e,t,n,r){var i=this.$markerId++,s={range:e,type:n||"line",renderer:typeof n=="function"?n:null,clazz:t,inFront:!!r,id:i};return r?(this.$frontMarkers[i]=s,this._emit("changeFrontMarker")):(this.$backMarkers[i]=s,this._emit("changeBackMarker")),i},this.addDynamicMarker=function(e,t){if(!e.update)return;var n=this.$markerId++;return e.id=n,e.inFront=!!t,t?(this.$frontMarkers[n]=e,this._emit("changeFrontMarker")):(this.$backMarkers[n]=e,this._emit("changeBackMarker")),e},this.removeMarker=function(e){var t=this.$frontMarkers[e]||this.$backMarkers[e];if(!t)return;var n=t.inFront?this.$frontMarkers:this.$backMarkers;t&&(delete n[e],this._emit(t.inFront?"changeFrontMarker":"changeBackMarker"))},this.getMarkers=function(e){return e?this.$frontMarkers:this.$backMarkers},this.highlight=function(e){if(!this.$searchHighlight){var t=new h(null,"ace_selected-word","text");this.$searchHighlight=this.addDynamicMarker(t)}this.$searchHighlight.setRegexp(e)},this.highlightLines=function(e,t,n,r){typeof t!="number"&&(n=t,t=e),n||(n="ace_step");var i=new f(e,0,t,Infinity);return i.id=this.addMarker(i,n,"fullLine",r),i},this.setAnnotations=function(e){this.$annotations=e,this._emit("changeAnnotation",{})},this.getAnnotations=function(){return this.$annotations||[]},this.clearAnnotations=function(){this.setAnnotations([])},this.$detectNewLine=function(e){var t=e.match(/^.*?(\r?\n)/m);t?this.$autoNewLine=t[1]:this.$autoNewLine="\n"},this.getWordRange=function(e,t){var n=this.getLine(e),r=!1;t>0&&(r=!!n.charAt(t-1).match(this.tokenRe)),r||(r=!!n.charAt(t).match(this.tokenRe));if(r)var i=this.tokenRe;else if(/^\s+$/.test(n.slice(t-1,t+1)))var i=/\s/;else var i=this.nonTokenRe;var s=t;if(s>0){do s--;while(s>=0&&n.charAt(s).match(i));s++}var o=t;while(o<n.length&&n.charAt(o).match(i))o++;return new f(e,s,e,o)},this.getAWordRange=function(e,t){var n=this.getWordRange(e,t),r=this.getLine(n.end.row);while(r.charAt(n.end.column).match(/[ \t]/))n.end.column+=1;return n},this.setNewLineMode=function(e){this.doc.setNewLineMode(e)},this.getNewLineMode=function(){return this.doc.getNewLineMode()},this.setUseWorker=function(e){this.setOption("useWorker",e)},this.getUseWorker=function(){return this.$useWorker},this.onReloadTokenizer=function(e){var t=e.data;this.bgTokenizer.start(t.first),this._emit("tokenizerUpdate",e)},this.$modes={},this.$mode=null,this.$modeId=null,this.setMode=function(e){if(e&&typeof e=="object"){if(e.getTokenizer)return this.$onChangeMode(e);var t=e,n=t.path}else n=e||"ace/mode/text";this.$modes["ace/mode/text"]||(this.$modes["ace/mode/text"]=new a);if(this.$modes[n]&&!t)return this.$onChangeMode(this.$modes[n]);this.$modeId=n,s.loadModule(["mode",n],function(e){if(this.$modeId!==n)return;if(this.$modes[n]&&!t)return this.$onChangeMode(this.$modes[n]);e&&e.Mode&&(e=new e.Mode(t),t||(this.$modes[n]=e,e.$id=n),this.$onChangeMode(e))}.bind(this)),this.$mode||this.$onChangeMode(this.$modes["ace/mode/text"],!0)},this.$onChangeMode=function(e,t){if(this.$mode===e)return;this.$mode=e,this.$stopWorker(),this.$useWorker&&this.$startWorker();var n=e.getTokenizer();if(n.addEventListener!==undefined){var r=this.onReloadTokenizer.bind(this);n.addEventListener("update",r)}if(!this.bgTokenizer){this.bgTokenizer=new c(n);var i=this;this.bgTokenizer.addEventListener("update",function(e){i._emit("tokenizerUpdate",e)})}else this.bgTokenizer.setTokenizer(n);this.bgTokenizer.setDocument(this.getDocument()),this.tokenRe=e.tokenRe,this.nonTokenRe=e.nonTokenRe,t||(this.$modeId=e.$id,this.$setFolding(e.foldingRules),this._emit("changeMode"),this.bgTokenizer.start(0))},this.$stopWorker=function(){this.$worker&&this.$worker.terminate(),this.$worker=null},this.$startWorker=function(){if(typeof Worker!="undefined"&&!e.noWorker)try{this.$worker=this.$mode.createWorker(this)}catch(t){console.log("Could not load worker"),console.log(t),this.$worker=null}else this.$worker=null},this.getMode=function(){return this.$mode},this.$scrollTop=0,this.setScrollTop=function(e){e=Math.round(Math.max(0,e));if(this.$scrollTop===e||isNaN(e))return;this.$scrollTop=e,this._signal("changeScrollTop",e)},this.getScrollTop=function(){return this.$scrollTop},this.$scrollLeft=0,this.setScrollLeft=function(e){e=Math.round(Math.max(0,e));if(this.$scrollLeft===e||isNaN(e))return;this.$scrollLeft=e,this._signal("changeScrollLeft",e)},this.getScrollLeft=function(){return this.$scrollLeft},this.getScreenWidth=function(){return this.$computeWidth(),this.screenWidth},this.$computeWidth=function(e){if(this.$modified||e){this.$modified=!1;if(this.$useWrapMode)return this.screenWidth=this.$wrapLimit;var t=this.doc.getAllLines(),n=this.$rowLengthCache,r=0,i=0,s=this.$foldData[i],o=s?s.start.row:Infinity,u=t.length;for(var a=0;a<u;a++){if(a>o){a=s.end.row+1;if(a>=u)break;s=this.$foldData[i++],o=s?s.start.row:Infinity}n[a]==null&&(n[a]=this.$getStringScreenWidth(t[a])[0]),n[a]>r&&(r=n[a])}this.screenWidth=r}},this.getLine=function(e){return this.doc.getLine(e)},this.getLines=function(e,t){return this.doc.getLines(e,t)},this.getLength=function(){return this.doc.getLength()},this.getTextRange=function(e){return this.doc.getTextRange(e||this.selection.getRange())},this.insert=function(e,t){return this.doc.insert(e,t)},this.remove=function(e){return this.doc.remove(e)},this.undoChanges=function(e,t){if(!e.length)return;this.$fromUndo=!0;var n=null;for(var r=e.length-1;r!=-1;r--){var i=e[r];i.group=="doc"?(this.doc.revertDeltas(i.deltas),n=this.$getUndoSelection(i.deltas,!0,n)):i.deltas.forEach(function(e){this.addFolds(e.folds)},this)}return this.$fromUndo=!1,n&&this.$undoSelect&&!t&&this.selection.setSelectionRange(n),n},this.redoChanges=function(e,t){if(!e.length)return;this.$fromUndo=!0;var n=null;for(var r=0;r<e.length;r++){var i=e[r];i.group=="doc"&&(this.doc.applyDeltas(i.deltas),n=this.$getUndoSelection(i.deltas,!1,n))}return this.$fromUndo=!1,n&&this.$undoSelect&&!t&&this.selection.setSelectionRange(n),n},this.setUndoSelect=function(e){this.$undoSelect=e},this.$getUndoSelection=function(e,t,n){function r(e){var n=e.action==="insertText"||e.action==="insertLines";return t?!n:n}var i=e[0],s,o,u=!1;r(i)?(s=i.range.clone(),u=!0):(s=f.fromPoints(i.range.start,i.range.start),u=!1);for(var a=1;a<e.length;a++)i=e[a],r(i)?(o=i.range.start,s.compare(o.row,o.column)==-1&&s.setStart(i.range.start),o=i.range.end,s.compare(o.row,o.column)==1&&s.setEnd(i.range.end),u=!0):(o=i.range.start,s.compare(o.row,o.column)==-1&&(s=f.fromPoints(i.range.start,i.range.start)),u=!1);if(n!=null){var l=n.compareRange(s);l==1?s.setStart(n.start):l==-1&&s.setEnd(n.end)}return s},this.replace=function(e,t){return this.doc.replace(e,t)},this.moveText=function(e,t,n){var r=this.getTextRange(e),i=this.getFoldsInRange(e),s=f.fromPoints(t,t);if(!n){this.remove(e);var o=e.start.row-e.end.row,u=o?-e.end.column:e.start.column-e.end.column;u&&(s.start.row==e.end.row&&s.start.column>e.end.column&&(s.start.column+=u),s.end.row==e.end.row&&s.end.column>e.end.column&&(s.end.column+=u)),o&&s.start.row>=e.end.row&&(s.start.row+=o,s.end.row+=o)}this.insert(s.start,r);if(i.length){var a=e.start,l=s.start,o=l.row-a.row,u=l.column-a.column;this.addFolds(i.map(function(e){return e=e.clone(),e.start.row==a.row&&(e.start.column+=u),e.end.row==a.row&&(e.end.column+=u),e.start.row+=o,e.end.row+=o,e}))}return s},this.indentRows=function(e,t,n){n=n.replace(/\t/g,this.getTabString());for(var r=e;r<=t;r++)this.insert({row:r,column:0},n)},this.outdentRows=function(e){var t=e.collapseRows(),n=new f(0,0,0,0),r=this.getTabSize();for(var i=t.start.row;i<=t.end.row;++i){var s=this.getLine(i);n.start.row=i,n.end.row=i;for(var o=0;o<r;++o)if(s.charAt(o)!=" ")break;o<r&&s.charAt(o)=="	"?(n.start.column=o,n.end.column=o+1):(n.start.column=0,n.end.column=o),this.remove(n)}},this.$moveLines=function(e,t,n){e=this.getRowFoldStart(e),t=this.getRowFoldEnd(t);if(n<0){var r=this.getRowFoldStart(e+n);if(r<0)return 0;var i=r-e}else if(n>0){var r=this.getRowFoldEnd(t+n);if(r>this.doc.getLength()-1)return 0;var i=r-t}else{e=this.$clipRowToDocument(e),t=this.$clipRowToDocument(t);var i=t-e+1}var s=new f(e,0,t,Number.MAX_VALUE),o=this.getFoldsInRange(s).map(function(e){return e=e.clone(),e.start.row+=i,e.end.row+=i,e}),u=n==0?this.doc.getLines(e,t):this.doc.removeLines(e,t);return this.doc.insertLines(e+i,u),o.length&&this.addFolds(o),i},this.moveLinesUp=function(e,t){return this.$moveLines(e,t,-1)},this.moveLinesDown=function(e,t){return this.$moveLines(e,t,1)},this.duplicateLines=function(e,t){return this.$moveLines(e,t,0)},this.$clipRowToDocument=function(e){return Math.max(0,Math.min(e,this.doc.getLength()-1))},this.$clipColumnToRow=function(e,t){return t<0?0:Math.min(this.doc.getLine(e).length,t)},this.$clipPositionToDocument=function(e,t){t=Math.max(0,t);if(e<0)e=0,t=0;else{var n=this.doc.getLength();e>=n?(e=n-1,t=this.doc.getLine(n-1).length):t=Math.min(this.doc.getLine(e).length,t)}return{row:e,column:t}},this.$clipRangeToDocument=function(e){e.start.row<0?(e.start.row=0,e.start.column=0):e.start.column=this.$clipColumnToRow(e.start.row,e.start.column);var t=this.doc.getLength()-1;return e.end.row>t?(e.end.row=t,e.end.column=this.doc.getLine(t).length):e.end.column=this.$clipColumnToRow(e.end.row,e.end.column),e},this.$wrapLimit=80,this.$useWrapMode=!1,this.$wrapLimitRange={min:null,max:null},this.setUseWrapMode=function(e){if(e!=this.$useWrapMode){this.$useWrapMode=e,this.$modified=!0,this.$resetRowCache(0);if(e){var t=this.getLength();this.$wrapData=[];for(var n=0;n<t;n++)this.$wrapData.push([]);this.$updateWrapData(0,t-1)}this._emit("changeWrapMode")}},this.getUseWrapMode=function(){return this.$useWrapMode},this.setWrapLimitRange=function(e,t){if(this.$wrapLimitRange.min!==e||this.$wrapLimitRange.max!==t)this.$wrapLimitRange.min=e,this.$wrapLimitRange.max=t,this.$modified=!0,this._emit("changeWrapMode")},this.adjustWrapLimit=function(e,t){var n=this.$wrapLimitRange;n.max<0&&(n={min:t,max:t});var r=this.$constrainWrapLimit(e,n.min,n.max);return r!=this.$wrapLimit&&r>1?(this.$wrapLimit=r,this.$modified=!0,this.$useWrapMode&&(this.$updateWrapData(0,this.getLength()-1),this.$resetRowCache(0),this._emit("changeWrapLimit")),!0):!1},this.$constrainWrapLimit=function(e,t,n){return t&&(e=Math.max(t,e)),n&&(e=Math.min(n,e)),e},this.getWrapLimit=function(){return this.$wrapLimit},this.setWrapLimit=function(e){this.setWrapLimitRange(e,e)},this.getWrapLimitRange=function(){return{min:this.$wrapLimitRange.min,max:this.$wrapLimitRange.max}},this.$updateInternalDataOnChange=function(e){var t=this.$useWrapMode,n,r=e.data.action,i=e.data.range.start.row,s=e.data.range.end.row,o=e.data.range.start,u=e.data.range.end,a=null;r.indexOf("Lines")!=-1?(r=="insertLines"?s=i+e.data.lines.length:s=i,n=e.data.lines?e.data.lines.length:s-i):n=s-i,this.$updating=!0;if(n!=0)if(r.indexOf("remove")!=-1){this[t?"$wrapData":"$rowLengthCache"].splice(i,n);var f=this.$foldData;a=this.getFoldsInRange(e.data.range),this.removeFolds(a);var l=this.getFoldLine(u.row),c=0;if(l){l.addRemoveChars(u.row,u.column,o.column-u.column),l.shiftRow(-n);var h=this.getFoldLine(i);h&&h!==l&&(h.merge(l),l=h),c=f.indexOf(l)+1}for(c;c<f.length;c++){var l=f[c];l.start.row>=u.row&&l.shiftRow(-n)}s=i}else{var p;if(t){p=[i,0];for(var d=0;d<n;d++)p.push([]);this.$wrapData.splice.apply(this.$wrapData,p)}else p=Array(n),p.unshift(i,0),this.$rowLengthCache.splice.apply(this.$rowLengthCache,p);var f=this.$foldData,l=this.getFoldLine(i),c=0;if(l){var v=l.range.compareInside(o.row,o.column);v==0?(l=l.split(o.row,o.column),l.shiftRow(n),l.addRemoveChars(s,0,u.column-o.column)):v==-1&&(l.addRemoveChars(i,0,u.column-o.column),l.shiftRow(n)),c=f.indexOf(l)+1}for(c;c<f.length;c++){var l=f[c];l.start.row>=i&&l.shiftRow(n)}}else{n=Math.abs(e.data.range.start.column-e.data.range.end.column),r.indexOf("remove")!=-1&&(a=this.getFoldsInRange(e.data.range),this.removeFolds(a),n=-n);var l=this.getFoldLine(i);l&&l.addRemoveChars(i,o.column,n)}return t&&this.$wrapData.length!=this.doc.getLength()&&console.error("doc.getLength() and $wrapData.length have to be the same!"),this.$updating=!1,t?this.$updateWrapData(i,s):this.$updateRowLengthCache(i,s),a},this.$updateRowLengthCache=function(e,t,n){this.$rowLengthCache[e]=null,this.$rowLengthCache[t]=null},this.$updateWrapData=function(e,t){var n=this.doc.getAllLines(),r=this.getTabSize(),s=this.$wrapData,o=this.$wrapLimit,a,f,c=e;t=Math.min(t,n.length-1);while(c<=t){f=this.getFoldLine(c,f);if(!f)a=this.$getDisplayTokens(i.stringTrimRight(n[c])),s[c]=this.$computeWrapSplits(a,o,r),c++;else{a=[],f.walk(function(e,t,r,i){var s;if(e!=null){s=this.$getDisplayTokens(e,a.length),s[0]=u;for(var o=1;o<s.length;o++)s[o]=l}else s=this.$getDisplayTokens(n[t].substring(i,r),a.length);a=a.concat(s)}.bind(this),f.end.row,n[f.end.row].length+1);while(a.length!=0&&a[a.length-1]>=d)a.pop();s[f.start.row]=this.$computeWrapSplits(a,o,r),c=f.end.row+1}}};var t=1,n=2,u=3,l=4,p=9,d=10,v=11,m=12;this.$computeWrapSplits=function(e,t){function o(t){var r=e.slice(i,t),o=r.length;r.join("").replace(/12/g,function(){o-=1}).replace(/2/g,function(){o-=1}),s+=o,n.push(s),i=t}if(e.length==0)return[];var n=[],r=e.length,i=0,s=0;while(r-i>t){var a=i+t;if(e[a]>=d){while(e[a]>=d)a++;o(a);continue}if(e[a]==u||e[a]==l){for(a;a!=i-1;a--)if(e[a]==u)break;if(a>i){o(a);continue}a=i+t;for(a;a<e.length;a++)if(e[a]!=l)break;if(a==e.length)break;o(a);continue}var f=Math.max(a-10,i-1);while(a>f&&e[a]<u)a--;while(a>f&&e[a]==p)a--;if(a>f){o(++a);continue}a=i+t,o(a)}return n},this.$getDisplayTokens=function(e,r){var i=[],s;r=r||0;for(var o=0;o<e.length;o++){var u=e.charCodeAt(o);if(u==9){s=this.getScreenTabSize(i.length+r),i.push(v);for(var a=1;a<s;a++)i.push(m)}else u==32?i.push(d):u>39&&u<48||u>57&&u<64?i.push(p):u>=4352&&g(u)?i.push(t,n):i.push(t)}return i},this.$getStringScreenWidth=function(e,t,n){if(t==0)return[0,0];t==null&&(t=Infinity),n=n||0;var r,i;for(i=0;i<e.length;i++){r=e.charCodeAt(i),r==9?n+=this.getScreenTabSize(n):r>=4352&&g(r)?n+=2:n+=1;if(n>t)break}return[n,i]},this.getRowLength=function(e){return!this.$useWrapMode||!this.$wrapData[e]?1:this.$wrapData[e].length+1},this.getScreenLastRowColumn=function(e){var t=this.screenToDocumentPosition(e,Number.MAX_VALUE);return this.documentToScreenColumn(t.row,t.column)},this.getDocumentLastRowColumn=function(e,t){var n=this.documentToScreenRow(e,t);return this.getScreenLastRowColumn(n)},this.getDocumentLastRowColumnPosition=function(e,t){var n=this.documentToScreenRow(e,t);return this.screenToDocumentPosition(n,Number.MAX_VALUE/10)},this.getRowSplitData=function(e){return this.$useWrapMode?this.$wrapData[e]:undefined},this.getScreenTabSize=function(e){return this.$tabSize-e%this.$tabSize},this.screenToDocumentRow=function(e,t){return this.screenToDocumentPosition(e,t).row},this.screenToDocumentColumn=function(e,t){return this.screenToDocumentPosition(e,t).column},this.screenToDocumentPosition=function(e,t){if(e<0)return{row:0,column:0};var n,r=0,i=0,s,o=0,u=0,a=this.$screenRowCache,f=this.$getRowCacheIndex(a,e),l=a.length;if(l&&f>=0)var o=a[f],r=this.$docRowCache[f],c=e>a[l-1];else var c=!l;var h=this.getLength()-1,p=this.getNextFoldLine(r),d=p?p.start.row:Infinity;while(o<=e){u=this.getRowLength(r);if(o+u-1>=e||r>=h)break;o+=u,r++,r>d&&(r=p.end.row+1,p=this.getNextFoldLine(r,p),d=p?p.start.row:Infinity),c&&(this.$docRowCache.push(r),this.$screenRowCache.push(o))}if(p&&p.start.row<=r)n=this.getFoldDisplayLine(p),r=p.start.row;else{if(o+u<=e||r>h)return{row:h,column:this.getLine(h).length};n=this.getLine(r),p=null}if(this.$useWrapMode){var v=this.$wrapData[r];v&&(s=v[e-o],e>o&&v.length&&(i=v[e-o-1]||v[v.length-1],n=n.substring(i)))}return i+=this.$getStringScreenWidth(n,t)[1],this.$useWrapMode&&i>=s&&(i=s-1),p?p.idxToPosition(i):{row:r,column:i}},this.documentToScreenPosition=function(e,t){if(typeof t=="undefined")var n=this.$clipPositionToDocument(e.row,e.column);else n=this.$clipPositionToDocument(e,t);e=n.row,t=n.column;var r=0,i=null,s=null;s=this.getFoldAt(e,t,1),s&&(e=s.start.row,t=s.start.column);var o,u=0,a=this.$docRowCache,f=this.$getRowCacheIndex(a,e),l=a.length;if(l&&f>=0)var u=a[f],r=this.$screenRowCache[f],c=e>a[l-1];else var c=!l;var h=this.getNextFoldLine(u),p=h?h.start.row:Infinity;while(u<e){if(u>=p){o=h.end.row+1;if(o>e)break;h=this.getNextFoldLine(o,h),p=h?h.start.row:Infinity}else o=u+1;r+=this.getRowLength(u),u=o,c&&(this.$docRowCache.push(u),this.$screenRowCache.push(r))}var d="";h&&u>=p?(d=this.getFoldDisplayLine(h,e,t),i=h.start.row):(d=this.getLine(e).substring(0,t),i=e);if(this.$useWrapMode){var v=this.$wrapData[i],m=0;while(d.length>=v[m])r++,m++;d=d.substring(v[m-1]||0,d.length)}return{row:r,column:this.$getStringScreenWidth(d)[0]}},this.documentToScreenColumn=function(e,t){return this.documentToScreenPosition(e,t).column},this.documentToScreenRow=function(e,t){return this.documentToScreenPosition(e,t).row},this.getScreenLength=function(){var e=0,t=null;if(!this.$useWrapMode){e=this.getLength();var n=this.$foldData;for(var r=0;r<n.length;r++)t=n[r],e-=t.end.row-t.start.row}else{var i=this.$wrapData.length,s=0,r=0,t=this.$foldData[r++],o=t?t.start.row:Infinity;while(s<i)e+=this.$wrapData[s].length+1,s++,s>o&&(s=t.end.row+1,t=this.$foldData[r++],o=t?t.start.row:Infinity)}return e}}).call(p.prototype),e("./edit_session/folding").Folding.call(p.prototype),e("./edit_session/bracket_match").BracketMatch.call(p.prototype),s.defineOptions(p.prototype,"session",{wrap:{set:function(e){!e||e=="off"?e=!1:e=="free"?e=!0:e=="printMargin"?e=-1:typeof e=="string"&&(e=parseInt(e,10)||!1);if(this.$wrap==e)return;if(!e)this.setUseWrapMode(!1);else{var t=typeof e=="number"?e:null;this.setWrapLimitRange(t,t),this.setUseWrapMode(!0)}this.$wrap=e},get:function(){return this.getUseWrapMode()?this.getWrapLimitRange().min||"free":"off"},handlesSet:!0},firstLineNumber:{set:function(){this._emit("changeBreakpoint")},initialValue:1},useWorker:{set:function(e){this.$useWorker=e,this.$stopWorker(),e&&this.$startWorker()},initialValue:!0},useSoftTabs:{initialValue:!0},tabSize:{set:function(e){if(isNaN(e)||this.$tabSize===e)return;this.$modified=!0,this.$rowLengthCache=[],this.$tabSize=e,this._emit("changeTabSize")},initialValue:4,handlesSet:!0},overwrite:{set:function(e){this._emit("changeOverwrite")},initialValue:!1},newLineMode:{set:function(e){this.doc.setNewLineMode(e)},get:function(){return this.doc.getNewLineMode()},handlesSet:!0}}),t.EditSession=p}),ace.define("ace/selection",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/lib/event_emitter","ace/range"],function(e,t,n){var r=e("./lib/oop"),i=e("./lib/lang"),s=e("./lib/event_emitter").EventEmitter,o=e("./range").Range,u=function(e){this.session=e,this.doc=e.getDocument(),this.clearSelection(),this.lead=this.selectionLead=this.doc.createAnchor(0,0),this.anchor=this.selectionAnchor=this.doc.createAnchor(0,0);var t=this;this.lead.on("change",function(e){t._emit("changeCursor"),t.$isEmpty||t._emit("changeSelection"),!t.$keepDesiredColumnOnChange&&e.old.column!=e.value.column&&(t.$desiredColumn=null)}),this.selectionAnchor.on("change",function(){t.$isEmpty||t._emit("changeSelection")})};(function(){r.implement(this,s),this.isEmpty=function(){return this.$isEmpty||this.anchor.row==this.lead.row&&this.anchor.column==this.lead.column},this.isMultiLine=function(){return this.isEmpty()?!1:this.getRange().isMultiLine()},this.getCursor=function(){return this.lead.getPosition()},this.setSelectionAnchor=function(e,t){this.anchor.setPosition(e,t),this.$isEmpty&&(this.$isEmpty=!1,this._emit("changeSelection"))},this.getSelectionAnchor=function(){return this.$isEmpty?this.getSelectionLead():this.anchor.getPosition()},this.getSelectionLead=function(){return this.lead.getPosition()},this.shiftSelection=function(e){if(this.$isEmpty){this.moveCursorTo(this.lead.row,this.lead.column+e);return}var t=this.getSelectionAnchor(),n=this.getSelectionLead(),r=this.isBackwards();(!r||t.column!==0)&&this.setSelectionAnchor(t.row,t.column+e),(r||n.column!==0)&&this.$moveSelection(function(){this.moveCursorTo(n.row,n.column+e)})},this.isBackwards=function(){var e=this.anchor,t=this.lead;return e.row>t.row||e.row==t.row&&e.column>t.column},this.getRange=function(){var e=this.anchor,t=this.lead;return this.isEmpty()?o.fromPoints(t,t):this.isBackwards()?o.fromPoints(t,e):o.fromPoints(e,t)},this.clearSelection=function(){this.$isEmpty||(this.$isEmpty=!0,this._emit("changeSelection"))},this.selectAll=function(){var e=this.doc.getLength()-1;this.setSelectionAnchor(0,0),this.moveCursorTo(e,this.doc.getLine(e).length)},this.setRange=this.setSelectionRange=function(e,t){t?(this.setSelectionAnchor(e.end.row,e.end.column),this.selectTo(e.start.row,e.start.column)):(this.setSelectionAnchor(e.start.row,e.start.column),this.selectTo(e.end.row,e.end.column)),this.$desiredColumn=null},this.$moveSelection=function(e){var t=this.lead;this.$isEmpty&&this.setSelectionAnchor(t.row,t.column),e.call(this)},this.selectTo=function(e,t){this.$moveSelection(function(){this.moveCursorTo(e,t)})},this.selectToPosition=function(e){this.$moveSelection(function(){this.moveCursorToPosition(e)})},this.selectUp=function(){this.$moveSelection(this.moveCursorUp)},this.selectDown=function(){this.$moveSelection(this.moveCursorDown)},this.selectRight=function(){this.$moveSelection(this.moveCursorRight)},this.selectLeft=function(){this.$moveSelection(this.moveCursorLeft)},this.selectLineStart=function(){this.$moveSelection(this.moveCursorLineStart)},this.selectLineEnd=function(){this.$moveSelection(this.moveCursorLineEnd)},this.selectFileEnd=function(){this.$moveSelection(this.moveCursorFileEnd)},this.selectFileStart=function(){this.$moveSelection(this.moveCursorFileStart)},this.selectWordRight=function(){this.$moveSelection(this.moveCursorWordRight)},this.selectWordLeft=function(){this.$moveSelection(this.moveCursorWordLeft)},this.getWordRange=function(e,t){if(typeof t=="undefined"){var n=e||this.lead;e=n.row,t=n.column}return this.session.getWordRange(e,t)},this.selectWord=function(){this.setSelectionRange(this.getWordRange())},this.selectAWord=function(){var e=this.getCursor(),t=this.session.getAWordRange(e.row,e.column);this.setSelectionRange(t)},this.getLineRange=function(e,t){var n=typeof e=="number"?e:this.lead.row,r,i=this.session.getFoldLine(n);return i?(n=i.start.row,r=i.end.row):r=n,t?new o(n,0,r,this.session.getLine(r).length):new o(n,0,r+1,0)},this.selectLine=function(){this.setSelectionRange(this.getLineRange())},this.moveCursorUp=function(){this.moveCursorBy(-1,0)},this.moveCursorDown=function(){this.moveCursorBy(1,0)},this.moveCursorLeft=function(){var e=this.lead.getPosition(),t;if(t=this.session.getFoldAt(e.row,e.column,-1))this.moveCursorTo(t.start.row,t.start.column);else if(e.column==0)e.row>0&&this.moveCursorTo(e.row-1,this.doc.getLine(e.row-1).length);else{var n=this.session.getTabSize();this.session.isTabStop(e)&&this.doc.getLine(e.row).slice(e.column-n,e.column).split(" ").length-1==n?this.moveCursorBy(0,-n):this.moveCursorBy(0,-1)}},this.moveCursorRight=function(){var e=this.lead.getPosition(),t;if(t=this.session.getFoldAt(e.row,e.column,1))this.moveCursorTo(t.end.row,t.end.column);else if(this.lead.column==this.doc.getLine(this.lead.row).length)this.lead.row<this.doc.getLength()-1&&this.moveCursorTo(this.lead.row+1,0);else{var n=this.session.getTabSize(),e=this.lead;this.session.isTabStop(e)&&this.doc.getLine(e.row).slice(e.column,e.column+n).split(" ").length-1==n?this.moveCursorBy(0,n):this.moveCursorBy(0,1)}},this.moveCursorLineStart=function(){var e=this.lead.row,t=this.lead.column,n=this.session.documentToScreenRow(e,t),r=this.session.screenToDocumentPosition(n,0),i=this.session.getDisplayLine(e,null,r.row,r.column),s=i.match(/^\s*/);s[0].length!=t&&!this.session.$useEmacsStyleLineStart&&(r.column+=s[0].length),this.moveCursorToPosition(r)},this.moveCursorLineEnd=function(){var e=this.lead,t=this.session.getDocumentLastRowColumnPosition(e.row,e.column);if(this.lead.column==t.column){var n=this.session.getLine(t.row);if(t.column==n.length){var r=n.search(/\s+$/);r>0&&(t.column=r)}}this.moveCursorTo(t.row,t.column)},this.moveCursorFileEnd=function(){var e=this.doc.getLength()-1,t=this.doc.getLine(e).length;this.moveCursorTo(e,t)},this.moveCursorFileStart=function(){this.moveCursorTo(0,0)},this.moveCursorLongWordRight=function(){var e=this.lead.row,t=this.lead.column,n=this.doc.getLine(e),r=n.substring(t),i;this.session.nonTokenRe.lastIndex=0,this.session.tokenRe.lastIndex=0;var s=this.session.getFoldAt(e,t,1);if(s){this.moveCursorTo(s.end.row,s.end.column);return}if(i=this.session.nonTokenRe.exec(r))t+=this.session.nonTokenRe.lastIndex,this.session.nonTokenRe.lastIndex=0,r=n.substring(t);if(t>=n.length){this.moveCursorTo(e,n.length),this.moveCursorRight(),e<this.doc.getLength()-1&&this.moveCursorWordRight();return}if(i=this.session.tokenRe.exec(r))t+=this.session.tokenRe.lastIndex,this.session.tokenRe.lastIndex=0;this.moveCursorTo(e,t)},this.moveCursorLongWordLeft=function(){var e=this.lead.row,t=this.lead.column,n;if(n=this.session.getFoldAt(e,t,-1)){this.moveCursorTo(n.start.row,n.start.column);return}var r=this.session.getFoldStringAt(e,t,-1);r==null&&(r=this.doc.getLine(e).substring(0,t));var s=i.stringReverse(r),o;this.session.nonTokenRe.lastIndex=0,this.session.tokenRe.lastIndex=0;if(o=this.session.nonTokenRe.exec(s))t-=this.session.nonTokenRe.lastIndex,s=s.slice(this.session.nonTokenRe.lastIndex),this.session.nonTokenRe.lastIndex=0;if(t<=0){this.moveCursorTo(e,0),this.moveCursorLeft(),e>0&&this.moveCursorWordLeft();return}if(o=this.session.tokenRe.exec(s))t-=this.session.tokenRe.lastIndex,this.session.tokenRe.lastIndex=0;this.moveCursorTo(e,t)},this.$shortWordEndIndex=function(e){var t,n=0,r,i=/\s/,s=this.session.tokenRe;s.lastIndex=0;if(t=this.session.tokenRe.exec(e))n=this.session.tokenRe.lastIndex;else{while((r=e[n])&&i.test(r))n++;if(n<=1){s.lastIndex=0;while((r=e[n])&&!s.test(r)){s.lastIndex=0,n++;if(i.test(r)){if(n>2){n--;break}while((r=e[n])&&i.test(r))n++;if(n>2)break}}}}return s.lastIndex=0,n},this.moveCursorShortWordRight=function(){var e=this.lead.row,t=this.lead.column,n=this.doc.getLine(e),r=n.substring(t),i=this.session.getFoldAt(e,t,1);if(i)return this.moveCursorTo(i.end.row,i.end.column);if(t==n.length){var s=this.doc.getLength();do e++,r=this.doc.getLine(e);while(e<s&&/^\s*$/.test(r));/^\s+/.test(r)||(r=""),t=0}var o=this.$shortWordEndIndex(r);this.moveCursorTo(e,t+o)},this.moveCursorShortWordLeft=function(){var e=this.lead.row,t=this.lead.column,n;if(n=this.session.getFoldAt(e,t,-1))return this.moveCursorTo(n.start.row,n.start.column);var r=this.session.getLine(e).substring(0,t);if(t==0){do e--,r=this.doc.getLine(e);while(e>0&&/^\s*$/.test(r));t=r.length,/\s+$/.test(r)||(r="")}var s=i.stringReverse(r),o=this.$shortWordEndIndex(s);return this.moveCursorTo(e,t-o)},this.moveCursorWordRight=function(){this.session.$selectLongWords?this.moveCursorLongWordRight():this.moveCursorShortWordRight()},this.moveCursorWordLeft=function(){this.session.$selectLongWords?this.moveCursorLongWordLeft():this.moveCursorShortWordLeft()},this.moveCursorBy=function(e,t){var n=this.session.documentToScreenPosition(this.lead.row,this.lead.column);t===0&&(this.$desiredColumn?n.column=this.$desiredColumn:this.$desiredColumn=n.column);var r=this.session.screenToDocumentPosition(n.row+e,n.column);this.moveCursorTo(r.row,r.column+t,t===0)},this.moveCursorToPosition=function(e){this.moveCursorTo(e.row,e.column)},this.moveCursorTo=function(e,t,n){var r=this.session.getFoldAt(e,t,1);r&&(e=r.start.row,t=r.start.column),this.$keepDesiredColumnOnChange=!0,this.lead.setPosition(e,t),this.$keepDesiredColumnOnChange=!1,n||(this.$desiredColumn=null)},this.moveCursorToScreen=function(e,t,n){var r=this.session.screenToDocumentPosition(e,t);this.moveCursorTo(r.row,r.column,n)},this.detach=function(){this.lead.detach(),this.anchor.detach(),this.session=this.doc=null},this.fromOrientedRange=function(e){this.setSelectionRange(e,e.cursor==e.start),this.$desiredColumn=e.desiredColumn||this.$desiredColumn},this.toOrientedRange=function(e){var t=this.getRange();return e?(e.start.column=t.start.column,e.start.row=t.start.row,e.end.column=t.end.column,e.end.row=t.end.row):e=t,e.cursor=this.isBackwards()?e.start:e.end,e.desiredColumn=this.$desiredColumn,e}}).call(u.prototype),t.Selection=u}),ace.define("ace/range",["require","exports","module"],function(e,t,n){var r=function(e,t){return e.row-t.row||e.column-t.column},i=function(e,t,n,r){this.start={row:e,column:t},this.end={row:n,column:r}};(function(){this.isEqual=function(e){return this.start.row===e.start.row&&this.end.row===e.end.row&&this.start.column===e.start.column&&this.end.column===e.end.column},this.toString=function(){return"Range: ["+this.start.row+"/"+this.start.column+"] -> ["+this.end.row+"/"+this.end.column+"]"},this.contains=function(e,t){return this.compare(e,t)==0},this.compareRange=function(e){var t,n=e.end,r=e.start;return t=this.compare(n.row,n.column),t==1?(t=this.compare(r.row,r.column),t==1?2:t==0?1:0):t==-1?-2:(t=this.compare(r.row,r.column),t==-1?-1:t==1?42:0)},this.comparePoint=function(e){return this.compare(e.row,e.column)},this.containsRange=function(e){return this.comparePoint(e.start)==0&&this.comparePoint(e.end)==0},this.intersects=function(e){var t=this.compareRange(e);return t==-1||t==0||t==1},this.isEnd=function(e,t){return this.end.row==e&&this.end.column==t},this.isStart=function(e,t){return this.start.row==e&&this.start.column==t},this.setStart=function(e,t){typeof e=="object"?(this.start.column=e.column,this.start.row=e.row):(this.start.row=e,this.start.column=t)},this.setEnd=function(e,t){typeof e=="object"?(this.end.column=e.column,this.end.row=e.row):(this.end.row=e,this.end.column=t)},this.inside=function(e,t){return this.compare(e,t)==0?this.isEnd(e,t)||this.isStart(e,t)?!1:!0:!1},this.insideStart=function(e,t){return this.compare(e,t)==0?this.isEnd(e,t)?!1:!0:!1},this.insideEnd=function(e,t){return this.compare(e,t)==0?this.isStart(e,t)?!1:!0:!1},this.compare=function(e,t){return!this.isMultiLine()&&e===this.start.row?t<this.start.column?-1:t>this.end.column?1:0:e<this.start.row?-1:e>this.end.row?1:this.start.row===e?t>=this.start.column?0:-1:this.end.row===e?t<=this.end.column?0:1:0},this.compareStart=function(e,t){return this.start.row==e&&this.start.column==t?-1:this.compare(e,t)},this.compareEnd=function(e,t){return this.end.row==e&&this.end.column==t?1:this.compare(e,t)},this.compareInside=function(e,t){return this.end.row==e&&this.end.column==t?1:this.start.row==e&&this.start.column==t?-1:this.compare(e,t)},this.clipRows=function(e,t){if(this.end.row>t)var n={row:t+1,column:0};else if(this.end.row<e)var n={row:e,column:0};if(this.start.row>t)var r={row:t+1,column:0};else if(this.start.row<e)var r={row:e,column:0};return i.fromPoints(r||this.start,n||this.end)},this.extend=function(e,t){var n=this.compare(e,t);if(n==0)return this;if(n==-1)var r={row:e,column:t};else var s={row:e,column:t};return i.fromPoints(r||this.start,s||this.end)},this.isEmpty=function(){return this.start.row===this.end.row&&this.start.column===this.end.column},this.isMultiLine=function(){return this.start.row!==this.end.row},this.clone=function(){return i.fromPoints(this.start,this.end)},this.collapseRows=function(){return this.end.column==0?new i(this.start.row,0,Math.max(this.start.row,this.end.row-1),0):new i(this.start.row,0,this.end.row,0)},this.toScreenRange=function(e){var t=e.documentToScreenPosition(this.start),n=e.documentToScreenPosition(this.end);return new i(t.row,t.column,n.row,n.column)},this.moveBy=function(e,t){this.start.row+=e,this.start.column+=t,this.end.row+=e,this.end.column+=t}}).call(i.prototype),i.fromPoints=function(e,t){return new i(e.row,e.column,t.row,t.column)},i.comparePoints=r,i.comparePoints=function(e,t){return e.row-t.row||e.column-t.column},t.Range=i}),ace.define("ace/mode/text",["require","exports","module","ace/tokenizer","ace/mode/text_highlight_rules","ace/mode/behaviour","ace/unicode","ace/lib/lang","ace/token_iterator","ace/range"],function(e,t,n){var r=e("../tokenizer").Tokenizer,i=e("./text_highlight_rules").TextHighlightRules,s=e("./behaviour").Behaviour,o=e("../unicode"),u=e("../lib/lang"),a=e("../token_iterator").TokenIterator,f=e("../range").Range,l=function(){this.$tokenizer=new r((new i).getRules()),this.$behaviour=new s};(function(){this.tokenRe=new RegExp("^["+o.packages.L+o.packages.Mn+o.packages.Mc+o.packages.Nd+o.packages.Pc+"\\$_]+","g"),this.nonTokenRe=new RegExp("^(?:[^"+o.packages.L+o.packages.Mn+o.packages.Mc+o.packages.Nd+o.packages.Pc+"\\$_]|s])+","g"),this.getTokenizer=function(){return this.$tokenizer},this.lineCommentStart="",this.blockComment="",this.toggleCommentLines=function(e,t,n,r){function w(e){for(var t=n;t<=r;t++)e(i.getLine(t),t)}var i=t.doc,s=!0,o=!0,a=Infinity,f=t.getTabSize(),l=!1;if(!this.lineCommentStart){if(!this.blockComment)return!1;var c=this.blockComment.start,h=this.blockComment.end,p=new RegExp("^(\\s*)(?:"+u.escapeRegExp(c)+")"),d=new RegExp("(?:"+u.escapeRegExp(h)+")\\s*$"),v=function(e,t){if(g(e,t))return;if(!s||/\S/.test(e))i.insertInLine({row:t,column:e.length},h),i.insertInLine({row:t,column:a},c)},m=function(e,t){var n;(n=e.match(d))&&i.removeInLine(t,e.length-n[0].length,e.length),(n=e.match(p))&&i.removeInLine(t,n[1].length,n[0].length)},g=function(e,n){if(p.test(e))return!0;var r=t.getTokens(n);for(var i=0;i<r.length;i++)if(r[i].type==="comment")return!0}}else{if(Array.isArray(this.lineCommentStart))var p=this.lineCommentStart.map(u.escapeRegExp).join("|"),c=this.lineCommentStart[0];else var p=u.escapeRegExp(this.lineCommentStart),c=this.lineCommentStart;p=new RegExp("^(\\s*)(?:"+p+") ?"),l=t.getUseSoftTabs();var m=function(e,t){var n=e.match(p);if(!n)return;var r=n[1].length,s=n[0].length;!b(e,r,s)&&n[0][s-1]==" "&&s--,i.removeInLine(t,r,s)},y=c+" ",v=function(e,t){if(!s||/\S/.test(e))b(e,a,a)?i.insertInLine({row:t,column:a},y):i.insertInLine({row:t,column:a},c)},g=function(e,t){return p.test(e)},b=function(e,t,n){var r=0;while(t--&&e.charAt(t)==" ")r++;if(r%f!=0)return!1;var r=0;while(e.charAt(n++)==" ")r++;return f>2?r%f!=f-1:r%f==0}}var E=Infinity;w(function(e,t){var n=e.search(/\S/);n!==-1?(n<a&&(a=n),o&&!g(e,t)&&(o=!1)):E>e.length&&(E=e.length)}),a==Infinity&&(a=E,s=!1,o=!1),l&&a%f!=0&&(a=Math.floor(a/f)*f),w(o?m:v)},this.toggleBlockComment=function(e,t,n,r){var i=this.blockComment;if(!i)return;!i.start&&i[0]&&(i=i[0]);var s=new a(t,r.row,r.column),o=s.getCurrentToken(),u=t.selection,l=t.selection.toOrientedRange(),c,h;if(o&&/comment/.test(o.type)){var p,d;while(o&&/comment/.test(o.type)){var v=o.value.indexOf(i.start);if(v!=-1){var m=s.getCurrentTokenRow(),g=s.getCurrentTokenColumn()+v;p=new f(m,g,m,g+i.start.length);break}o=s.stepBackward()}var s=new a(t,r.row,r.column),o=s.getCurrentToken();while(o&&/comment/.test(o.type)){var v=o.value.indexOf(i.end);if(v!=-1){var m=s.getCurrentTokenRow(),g=s.getCurrentTokenColumn()+v;d=new f(m,g,m,g+i.end.length);break}o=s.stepForward()}d&&t.remove(d),p&&(t.remove(p),c=p.start.row,h=-i.start.length)}else h=i.start.length,c=n.start.row,t.insert(n.end,i.end),t.insert(n.start,i.start);l.start.row==c&&(l.start.column+=h),l.end.row==c&&(l.end.column+=h),t.selection.fromOrientedRange(l)},this.getNextLineIndent=function(e,t,n){return this.$getIndent(t)},this.checkOutdent=function(e,t,n){return!1},this.autoOutdent=function(e,t,n){},this.$getIndent=function(e){return e.match(/^\s*/)[0]},this.createWorker=function(e){return null},this.createModeDelegates=function(e){if(!this.$embeds)return;this.$modes={};for(var t=0;t<this.$embeds.length;t++)e[this.$embeds[t]]&&(this.$modes[this.$embeds[t]]=new e[this.$embeds[t]]);var n=["toggleCommentLines","getNextLineIndent","checkOutdent","autoOutdent","transformAction"];for(var t=0;t<n.length;t++)(function(e){var r=n[t],i=e[r];e[n[t]]=function(){return this.$delegator(r,arguments,i)}})(this)},this.$delegator=function(e,t,n){var r=t[0];typeof r!="string"&&(r=r[0]);for(var i=0;i<this.$embeds.length;i++){if(!this.$modes[this.$embeds[i]])continue;var s=r.split(this.$embeds[i]);if(!s[0]&&s[1]){t[0]=s[1];var o=this.$modes[this.$embeds[i]];return o[e].apply(o,t)}}var u=n.apply(this,t);return n?u:undefined},this.transformAction=function(e,t,n,r,i){if(this.$behaviour){var s=this.$behaviour.getBehaviours();for(var o in s)if(s[o][t]){var u=s[o][t].apply(this,arguments);if(u)return u}}}}).call(l.prototype),t.Mode=l}),ace.define("ace/tokenizer",["require","exports","module"],function(e,t,n){var r=1e3,i=function(e){this.states=e,this.regExps={},this.matchMappings={};for(var t in this.states){var n=this.states[t],r=[],i=0,s=this.matchMappings[t]={defaultToken:"text"},o="g",u=[];for(var a=0;a<n.length;a++){var f=n[a];f.defaultToken&&(s.defaultToken=f.defaultToken),f.caseInsensitive&&(o="gi");if(f.regex==null)continue;f.regex instanceof RegExp&&(f.regex=f.regex.toString().slice(1,-1));var l=f.regex,c=(new RegExp("(?:("+l+")|(.))")).exec("a").length-2;if(Array.isArray(f.token))if(f.token.length==1||c==1)f.token=f.token[0];else{if(c-1!=f.token.length)throw new Error("number of classes and regexp groups in '"+f.token+"'\n'"+f.regex+"' doesn't match\n"+(c-1)+"!="+f.token.length);f.tokenArray=f.token,f.token=null,f.onMatch=this.$arrayTokens}else typeof f.token=="function"&&!f.onMatch&&(c>1?f.onMatch=this.$applyToken:f.onMatch=f.token);c>1&&(/\\\d/.test(f.regex)?l=f.regex.replace(/\\([0-9]+)/g,function(e,t){return"\\"+(parseInt(t,10)+i+1)}):(c=1,l=this.removeCapturingGroups(f.regex)),!f.splitRegex&&typeof f.token!="string"&&u.push(f)),s[i]=a,i+=c,r.push(l),f.onMatch||(f.onMatch=null),f.__proto__=null}u.forEach(function(e){e.splitRegex=this.createSplitterRegexp(e.regex,o)},this),this.regExps[t]=new RegExp("("+r.join(")|(")+")|($)",o)}};(function(){this.$applyToken=function(e){var t=this.splitRegex.exec(e).slice(1),n=this.token.apply(this,t);if(typeof n=="string")return[{type:n,value:e}];var r=[];for(var i=0,s=n.length;i<s;i++)t[i]&&(r[r.length]={type:n[i],value:t[i]});return r},this.$arrayTokens=function(e){if(!e)return[];var t=this.splitRegex.exec(e);if(!t)return"text";var n=[],r=this.tokenArray;for(var i=0,s=r.length;i<s;i++)t[i+1]&&(n[n.length]={type:r[i],value:t[i+1]});return n},this.removeCapturingGroups=function(e){var t=e.replace(/\[(?:\\.|[^\]])*?\]|\\.|\(\?[:=!]|(\()/g,function(e,t){return t?"(?:":e});return t},this.createSplitterRegexp=function(e,t){if(e.indexOf("(?=")!=-1){var n=0,r=!1,i={};e.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g,function(e,t,s,o,u,a){return r?r=u!="]":u?r=!0:o?(n==i.stack&&(i.end=a+1,i.stack=-1),n--):s&&(n++,s.length!=1&&(i.stack=n,i.start=a)),e}),i.end!=null&&/^\)*$/.test(e.substr(i.end))&&(e=e.substring(0,i.start)+e.substr(i.end))}return new RegExp(e,(t||"").replace("g",""))},this.getLineTokens=function(e,t){if(t&&typeof t!="string"){var n=t.slice(0);t=n[0]}else var n=[];var i=t||"start",s=this.states[i],o=this.matchMappings[i],u=this.regExps[i];u.lastIndex=0;var a,f=[],l=0,c={type:null,value:""};while(a=u.exec(e)){var h=o.defaultToken,p=null,d=a[0],v=u.lastIndex;if(v-d.length>l){var m=e.substring(l,v-d.length);c.type==h?c.value+=m:(c.type&&f.push(c),c={type:h,value:m})}for(var g=0;g<a.length-2;g++){if(a[g+1]===undefined)continue;p=s[o[g]],p.onMatch?h=p.onMatch(d,i,n):h=p.token,p.next&&(typeof p.next=="string"?i=p.next:i=p.next(i,n),s=this.states[i],s||(window.console&&console.error&&console.error(i,"doesn't exist"),i="start",s=this.states[i]),o=this.matchMappings[i],l=v,u=this.regExps[i],u.lastIndex=v);break}if(d)if(typeof h=="string")!!p&&p.merge===!1||c.type!==h?(c.type&&f.push(c),c={type:h,value:d}):c.value+=d;else if(h){c.type&&f.push(c),c={type:null,value:""};for(var g=0;g<h.length;g++)f.push(h[g])}if(l==e.length)break;l=v;if(f.length>r){while(l<e.length)c.type&&f.push(c),c={value:e.substring(l,l+=2e3),type:"overflow"};i="start",n=[];break}}return c.type&&f.push(c),{tokens:f,state:n.length?n:i}}}).call(i.prototype),t.Tokenizer=i}),ace.define("ace/mode/text_highlight_rules",["require","exports","module","ace/lib/lang"],function(e,t,n){var r=e("../lib/lang"),i=function(){this.$rules={start:[{token:"empty_line",regex:"^$"},{defaultToken:"text"}]}};(function(){this.addRules=function(e,t){for(var n in e){var r=e[n];for(var i=0;i<r.length;i++){var s=r[i];s.next&&(typeof s.next!="string"?s.nextState=t+s.nextState:s.next=t+s.next)}this.$rules[t+n]=r}},this.getRules=function(){return this.$rules},this.embedRules=function(e,t,n,i,s){var o=(new e).getRules();if(i)for(var u=0;u<i.length;u++)i[u]=t+i[u];else{i=[];for(var a in o)i.push(t+a)}this.addRules(o,t);if(n){var f=Array.prototype[s?"push":"unshift"];for(var u=0;u<i.length;u++)f.apply(this.$rules[i[u]],r.deepCopy(n))}this.$embeds||(this.$embeds=[]),this.$embeds.push(t)},this.getEmbeds=function(){return this.$embeds};var e=function(e,t){return e!="start"&&t.unshift(this.nextState,e),this.nextState},t=function(e,t){return t[0]!==e?"start":(t.shift(),t.shift())};this.normalizeRules=function(){function i(s){var o=r[s];o.processed=!0;for(var u=0;u<o.length;u++){var a=o[u];!a.regex&&a.start&&(a.regex=a.start,a.next||(a.next=[]),a.next.push({defaultToken:a.token},{token:a.token+".end",regex:a.end||a.start,next:"pop"}),a.token=a.token+".start",a.push=!0);var f=a.next||a.push;if(f&&Array.isArray(f)){var l=a.stateName;l||(l=a.token,typeof l!="string"&&(l=l[0]||""),r[l]&&(l+=n++)),r[l]=f,a.next=l,i(l)}else f=="pop"&&(a.next=t);a.push&&(a.nextState=a.next||a.push,a.next=e,delete a.push);if(a.rules)for(var c in a.rules)r[c]?r[c].push&&r[c].push.apply(r[c],a.rules[c]):r[c]=a.rules[c];if(a.include||typeof a=="string")var h=a.include||a,p=r[h];else Array.isArray(a)&&(p=a);if(p){var d=[u,1].concat(p);a.noEscape&&(d=d.filter(function(e){return!e.next})),o.splice.apply(o,d),u--,p=null}a.keywordMap&&(a.token=this.createKeywordMapper(a.keywordMap,a.defaultToken||"text",a.caseInsensitive),delete a.defaultToken)}}var n=0,r=this.$rules;Object.keys(r).forEach(i,this)},this.createKeywordMapper=function(e,t,n,r){var i=Object.create(null);return Object.keys(e).forEach(function(t){var s=e[t];n&&(s=s.toLowerCase());var o=s.split(r||"|");for(var u=o.length;u--;)i[o[u]]=t}),e=null,n?function(e){return i[e.toLowerCase()]||t}:function(e){return i[e]||t}},this.getKeywords=function(){return this.$keywords}}).call(i.prototype),t.TextHighlightRules=i}),ace.define("ace/mode/behaviour",["require","exports","module"],function(e,t,n){var r=function(){this.$behaviours={}};(function(){this.add=function(e,t,n){switch(undefined){case this.$behaviours:this.$behaviours={};case this.$behaviours[e]:this.$behaviours[e]={}}this.$behaviours[e][t]=n},this.addBehaviours=function(e){for(var t in e)for(var n in e[t])this.add(t,n,e[t][n])},this.remove=function(e){this.$behaviours&&this.$behaviours[e]&&delete this.$behaviours[e]},this.inherit=function(e,t){if(typeof e=="function")var n=(new e).getBehaviours(t);else var n=e.getBehaviours(t);this.addBehaviours(n)},this.getBehaviours=function(e){if(!e)return this.$behaviours;var t={};for(var n=0;n<e.length;n++)this.$behaviours[e[n]]&&(t[e[n]]=this.$behaviours[e[n]]);return t}}).call(r.prototype),t.Behaviour=r}),ace.define("ace/unicode",["require","exports","module"],function(e,t,n){function r(e){var n=/\w{4}/g;for(var r in e)t.packages[r]=e[r].replace(n,"\\u$&")}t.packages={},r({L:"0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",Ll:"0061-007A00AA00B500BA00DF-00F600F8-00FF01010103010501070109010B010D010F01110113011501170119011B011D011F01210123012501270129012B012D012F01310133013501370138013A013C013E014001420144014601480149014B014D014F01510153015501570159015B015D015F01610163016501670169016B016D016F0171017301750177017A017C017E-0180018301850188018C018D019201950199-019B019E01A101A301A501A801AA01AB01AD01B001B401B601B901BA01BD-01BF01C601C901CC01CE01D001D201D401D601D801DA01DC01DD01DF01E101E301E501E701E901EB01ED01EF01F001F301F501F901FB01FD01FF02010203020502070209020B020D020F02110213021502170219021B021D021F02210223022502270229022B022D022F02310233-0239023C023F0240024202470249024B024D024F-02930295-02AF037103730377037B-037D039003AC-03CE03D003D103D5-03D703D903DB03DD03DF03E103E303E503E703E903EB03ED03EF-03F303F503F803FB03FC0430-045F04610463046504670469046B046D046F04710473047504770479047B047D047F0481048B048D048F04910493049504970499049B049D049F04A104A304A504A704A904AB04AD04AF04B104B304B504B704B904BB04BD04BF04C204C404C604C804CA04CC04CE04CF04D104D304D504D704D904DB04DD04DF04E104E304E504E704E904EB04ED04EF04F104F304F504F704F904FB04FD04FF05010503050505070509050B050D050F05110513051505170519051B051D051F0521052305250561-05871D00-1D2B1D62-1D771D79-1D9A1E011E031E051E071E091E0B1E0D1E0F1E111E131E151E171E191E1B1E1D1E1F1E211E231E251E271E291E2B1E2D1E2F1E311E331E351E371E391E3B1E3D1E3F1E411E431E451E471E491E4B1E4D1E4F1E511E531E551E571E591E5B1E5D1E5F1E611E631E651E671E691E6B1E6D1E6F1E711E731E751E771E791E7B1E7D1E7F1E811E831E851E871E891E8B1E8D1E8F1E911E931E95-1E9D1E9F1EA11EA31EA51EA71EA91EAB1EAD1EAF1EB11EB31EB51EB71EB91EBB1EBD1EBF1EC11EC31EC51EC71EC91ECB1ECD1ECF1ED11ED31ED51ED71ED91EDB1EDD1EDF1EE11EE31EE51EE71EE91EEB1EED1EEF1EF11EF31EF51EF71EF91EFB1EFD1EFF-1F071F10-1F151F20-1F271F30-1F371F40-1F451F50-1F571F60-1F671F70-1F7D1F80-1F871F90-1F971FA0-1FA71FB0-1FB41FB61FB71FBE1FC2-1FC41FC61FC71FD0-1FD31FD61FD71FE0-1FE71FF2-1FF41FF61FF7210A210E210F2113212F21342139213C213D2146-2149214E21842C30-2C5E2C612C652C662C682C6A2C6C2C712C732C742C76-2C7C2C812C832C852C872C892C8B2C8D2C8F2C912C932C952C972C992C9B2C9D2C9F2CA12CA32CA52CA72CA92CAB2CAD2CAF2CB12CB32CB52CB72CB92CBB2CBD2CBF2CC12CC32CC52CC72CC92CCB2CCD2CCF2CD12CD32CD52CD72CD92CDB2CDD2CDF2CE12CE32CE42CEC2CEE2D00-2D25A641A643A645A647A649A64BA64DA64FA651A653A655A657A659A65BA65DA65FA663A665A667A669A66BA66DA681A683A685A687A689A68BA68DA68FA691A693A695A697A723A725A727A729A72BA72DA72F-A731A733A735A737A739A73BA73DA73FA741A743A745A747A749A74BA74DA74FA751A753A755A757A759A75BA75DA75FA761A763A765A767A769A76BA76DA76FA771-A778A77AA77CA77FA781A783A785A787A78CFB00-FB06FB13-FB17FF41-FF5A",Lu:"0041-005A00C0-00D600D8-00DE01000102010401060108010A010C010E01100112011401160118011A011C011E01200122012401260128012A012C012E01300132013401360139013B013D013F0141014301450147014A014C014E01500152015401560158015A015C015E01600162016401660168016A016C016E017001720174017601780179017B017D018101820184018601870189-018B018E-0191019301940196-0198019C019D019F01A001A201A401A601A701A901AC01AE01AF01B1-01B301B501B701B801BC01C401C701CA01CD01CF01D101D301D501D701D901DB01DE01E001E201E401E601E801EA01EC01EE01F101F401F6-01F801FA01FC01FE02000202020402060208020A020C020E02100212021402160218021A021C021E02200222022402260228022A022C022E02300232023A023B023D023E02410243-02460248024A024C024E03700372037603860388-038A038C038E038F0391-03A103A3-03AB03CF03D2-03D403D803DA03DC03DE03E003E203E403E603E803EA03EC03EE03F403F703F903FA03FD-042F04600462046404660468046A046C046E04700472047404760478047A047C047E0480048A048C048E04900492049404960498049A049C049E04A004A204A404A604A804AA04AC04AE04B004B204B404B604B804BA04BC04BE04C004C104C304C504C704C904CB04CD04D004D204D404D604D804DA04DC04DE04E004E204E404E604E804EA04EC04EE04F004F204F404F604F804FA04FC04FE05000502050405060508050A050C050E05100512051405160518051A051C051E0520052205240531-055610A0-10C51E001E021E041E061E081E0A1E0C1E0E1E101E121E141E161E181E1A1E1C1E1E1E201E221E241E261E281E2A1E2C1E2E1E301E321E341E361E381E3A1E3C1E3E1E401E421E441E461E481E4A1E4C1E4E1E501E521E541E561E581E5A1E5C1E5E1E601E621E641E661E681E6A1E6C1E6E1E701E721E741E761E781E7A1E7C1E7E1E801E821E841E861E881E8A1E8C1E8E1E901E921E941E9E1EA01EA21EA41EA61EA81EAA1EAC1EAE1EB01EB21EB41EB61EB81EBA1EBC1EBE1EC01EC21EC41EC61EC81ECA1ECC1ECE1ED01ED21ED41ED61ED81EDA1EDC1EDE1EE01EE21EE41EE61EE81EEA1EEC1EEE1EF01EF21EF41EF61EF81EFA1EFC1EFE1F08-1F0F1F18-1F1D1F28-1F2F1F38-1F3F1F48-1F4D1F591F5B1F5D1F5F1F68-1F6F1FB8-1FBB1FC8-1FCB1FD8-1FDB1FE8-1FEC1FF8-1FFB21022107210B-210D2110-211221152119-211D212421262128212A-212D2130-2133213E213F214521832C00-2C2E2C602C62-2C642C672C692C6B2C6D-2C702C722C752C7E-2C802C822C842C862C882C8A2C8C2C8E2C902C922C942C962C982C9A2C9C2C9E2CA02CA22CA42CA62CA82CAA2CAC2CAE2CB02CB22CB42CB62CB82CBA2CBC2CBE2CC02CC22CC42CC62CC82CCA2CCC2CCE2CD02CD22CD42CD62CD82CDA2CDC2CDE2CE02CE22CEB2CEDA640A642A644A646A648A64AA64CA64EA650A652A654A656A658A65AA65CA65EA662A664A666A668A66AA66CA680A682A684A686A688A68AA68CA68EA690A692A694A696A722A724A726A728A72AA72CA72EA732A734A736A738A73AA73CA73EA740A742A744A746A748A74AA74CA74EA750A752A754A756A758A75AA75CA75EA760A762A764A766A768A76AA76CA76EA779A77BA77DA77EA780A782A784A786A78BFF21-FF3A",Lt:"01C501C801CB01F21F88-1F8F1F98-1F9F1FA8-1FAF1FBC1FCC1FFC",Lm:"02B0-02C102C6-02D102E0-02E402EC02EE0374037A0559064006E506E607F407F507FA081A0824082809710E460EC610FC17D718431AA71C78-1C7D1D2C-1D611D781D9B-1DBF2071207F2090-20942C7D2D6F2E2F30053031-3035303B309D309E30FC-30FEA015A4F8-A4FDA60CA67FA717-A71FA770A788A9CFAA70AADDFF70FF9EFF9F",Lo:"01BB01C0-01C3029405D0-05EA05F0-05F20621-063F0641-064A066E066F0671-06D306D506EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA0800-08150904-0939093D09500958-096109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E450E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10D0-10FA1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317DC1820-18421844-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C771CE9-1CEC1CEE-1CF12135-21382D30-2D652D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE3006303C3041-3096309F30A1-30FA30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A014A016-A48CA4D0-A4F7A500-A60BA610-A61FA62AA62BA66EA6A0-A6E5A7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2AA00-AA28AA40-AA42AA44-AA4BAA60-AA6FAA71-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADBAADCABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF66-FF6FFF71-FF9DFFA0-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",M:"0300-036F0483-04890591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DE-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0903093C093E-094E0951-0955096209630981-098309BC09BE-09C409C709C809CB-09CD09D709E209E30A01-0A030A3C0A3E-0A420A470A480A4B-0A4D0A510A700A710A750A81-0A830ABC0ABE-0AC50AC7-0AC90ACB-0ACD0AE20AE30B01-0B030B3C0B3E-0B440B470B480B4B-0B4D0B560B570B620B630B820BBE-0BC20BC6-0BC80BCA-0BCD0BD70C01-0C030C3E-0C440C46-0C480C4A-0C4D0C550C560C620C630C820C830CBC0CBE-0CC40CC6-0CC80CCA-0CCD0CD50CD60CE20CE30D020D030D3E-0D440D46-0D480D4A-0D4D0D570D620D630D820D830DCA0DCF-0DD40DD60DD8-0DDF0DF20DF30E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F3E0F3F0F71-0F840F860F870F90-0F970F99-0FBC0FC6102B-103E1056-1059105E-10601062-10641067-106D1071-10741082-108D108F109A-109D135F1712-17141732-1734175217531772177317B6-17D317DD180B-180D18A91920-192B1930-193B19B0-19C019C819C91A17-1A1B1A55-1A5E1A60-1A7C1A7F1B00-1B041B34-1B441B6B-1B731B80-1B821BA1-1BAA1C24-1C371CD0-1CD21CD4-1CE81CED1CF21DC0-1DE61DFD-1DFF20D0-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66F-A672A67CA67DA6F0A6F1A802A806A80BA823-A827A880A881A8B4-A8C4A8E0-A8F1A926-A92DA947-A953A980-A983A9B3-A9C0AA29-AA36AA43AA4CAA4DAA7BAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE3-ABEAABECABEDFB1EFE00-FE0FFE20-FE26",Mn:"0300-036F0483-04870591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DF-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0902093C0941-0948094D0951-095509620963098109BC09C1-09C409CD09E209E30A010A020A3C0A410A420A470A480A4B-0A4D0A510A700A710A750A810A820ABC0AC1-0AC50AC70AC80ACD0AE20AE30B010B3C0B3F0B41-0B440B4D0B560B620B630B820BC00BCD0C3E-0C400C46-0C480C4A-0C4D0C550C560C620C630CBC0CBF0CC60CCC0CCD0CE20CE30D41-0D440D4D0D620D630DCA0DD2-0DD40DD60E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F71-0F7E0F80-0F840F860F870F90-0F970F99-0FBC0FC6102D-10301032-10371039103A103D103E10581059105E-10601071-1074108210851086108D109D135F1712-17141732-1734175217531772177317B7-17BD17C617C9-17D317DD180B-180D18A91920-19221927192819321939-193B1A171A181A561A58-1A5E1A601A621A65-1A6C1A73-1A7C1A7F1B00-1B031B341B36-1B3A1B3C1B421B6B-1B731B801B811BA2-1BA51BA81BA91C2C-1C331C361C371CD0-1CD21CD4-1CE01CE2-1CE81CED1DC0-1DE61DFD-1DFF20D0-20DC20E120E5-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66FA67CA67DA6F0A6F1A802A806A80BA825A826A8C4A8E0-A8F1A926-A92DA947-A951A980-A982A9B3A9B6-A9B9A9BCAA29-AA2EAA31AA32AA35AA36AA43AA4CAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE5ABE8ABEDFB1EFE00-FE0FFE20-FE26",Mc:"0903093E-09400949-094C094E0982098309BE-09C009C709C809CB09CC09D70A030A3E-0A400A830ABE-0AC00AC90ACB0ACC0B020B030B3E0B400B470B480B4B0B4C0B570BBE0BBF0BC10BC20BC6-0BC80BCA-0BCC0BD70C01-0C030C41-0C440C820C830CBE0CC0-0CC40CC70CC80CCA0CCB0CD50CD60D020D030D3E-0D400D46-0D480D4A-0D4C0D570D820D830DCF-0DD10DD8-0DDF0DF20DF30F3E0F3F0F7F102B102C10311038103B103C105610571062-10641067-106D108310841087-108C108F109A-109C17B617BE-17C517C717C81923-19261929-192B193019311933-193819B0-19C019C819C91A19-1A1B1A551A571A611A631A641A6D-1A721B041B351B3B1B3D-1B411B431B441B821BA11BA61BA71BAA1C24-1C2B1C341C351CE11CF2A823A824A827A880A881A8B4-A8C3A952A953A983A9B4A9B5A9BAA9BBA9BD-A9C0AA2FAA30AA33AA34AA4DAA7BABE3ABE4ABE6ABE7ABE9ABEAABEC",Me:"0488048906DE20DD-20E020E2-20E4A670-A672",N:"0030-003900B200B300B900BC-00BE0660-066906F0-06F907C0-07C90966-096F09E6-09EF09F4-09F90A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BF20C66-0C6F0C78-0C7E0CE6-0CEF0D66-0D750E50-0E590ED0-0ED90F20-0F331040-10491090-10991369-137C16EE-16F017E0-17E917F0-17F91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C5920702074-20792080-20892150-21822185-21892460-249B24EA-24FF2776-27932CFD30073021-30293038-303A3192-31953220-32293251-325F3280-328932B1-32BFA620-A629A6E6-A6EFA830-A835A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",Nd:"0030-00390660-066906F0-06F907C0-07C90966-096F09E6-09EF0A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BEF0C66-0C6F0CE6-0CEF0D66-0D6F0E50-0E590ED0-0ED90F20-0F291040-10491090-109917E0-17E91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C59A620-A629A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",Nl:"16EE-16F02160-21822185-218830073021-30293038-303AA6E6-A6EF",No:"00B200B300B900BC-00BE09F4-09F90BF0-0BF20C78-0C7E0D70-0D750F2A-0F331369-137C17F0-17F920702074-20792080-20892150-215F21892460-249B24EA-24FF2776-27932CFD3192-31953220-32293251-325F3280-328932B1-32BFA830-A835",P:"0021-00230025-002A002C-002F003A003B003F0040005B-005D005F007B007D00A100AB00B700BB00BF037E0387055A-055F0589058A05BE05C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F3A-0F3D0F850FD0-0FD4104A-104F10FB1361-13681400166D166E169B169C16EB-16ED1735173617D4-17D617D8-17DA1800-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD32010-20272030-20432045-20512053-205E207D207E208D208E2329232A2768-277527C527C627E6-27EF2983-299829D8-29DB29FC29FD2CF9-2CFC2CFE2CFF2E00-2E2E2E302E313001-30033008-30113014-301F3030303D30A030FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFD3EFD3FFE10-FE19FE30-FE52FE54-FE61FE63FE68FE6AFE6BFF01-FF03FF05-FF0AFF0C-FF0FFF1AFF1BFF1FFF20FF3B-FF3DFF3FFF5BFF5DFF5F-FF65",Pd:"002D058A05BE140018062010-20152E172E1A301C303030A0FE31FE32FE58FE63FF0D",Ps:"0028005B007B0F3A0F3C169B201A201E2045207D208D23292768276A276C276E27702772277427C527E627E827EA27EC27EE2983298529872989298B298D298F299129932995299729D829DA29FC2E222E242E262E283008300A300C300E3010301430163018301A301DFD3EFE17FE35FE37FE39FE3BFE3DFE3FFE41FE43FE47FE59FE5BFE5DFF08FF3BFF5BFF5FFF62",Pe:"0029005D007D0F3B0F3D169C2046207E208E232A2769276B276D276F27712773277527C627E727E927EB27ED27EF298429862988298A298C298E2990299229942996299829D929DB29FD2E232E252E272E293009300B300D300F3011301530173019301B301E301FFD3FFE18FE36FE38FE3AFE3CFE3EFE40FE42FE44FE48FE5AFE5CFE5EFF09FF3DFF5DFF60FF63",Pi:"00AB2018201B201C201F20392E022E042E092E0C2E1C2E20",Pf:"00BB2019201D203A2E032E052E0A2E0D2E1D2E21",Pc:"005F203F20402054FE33FE34FE4D-FE4FFF3F",Po:"0021-00230025-0027002A002C002E002F003A003B003F0040005C00A100B700BF037E0387055A-055F058905C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F850FD0-0FD4104A-104F10FB1361-1368166D166E16EB-16ED1735173617D4-17D617D8-17DA1800-18051807-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD3201620172020-20272030-2038203B-203E2041-20432047-205120532055-205E2CF9-2CFC2CFE2CFF2E002E012E06-2E082E0B2E0E-2E162E182E192E1B2E1E2E1F2E2A-2E2E2E302E313001-3003303D30FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFE10-FE16FE19FE30FE45FE46FE49-FE4CFE50-FE52FE54-FE57FE5F-FE61FE68FE6AFE6BFF01-FF03FF05-FF07FF0AFF0CFF0EFF0FFF1AFF1BFF1FFF20FF3CFF61FF64FF65",S:"0024002B003C-003E005E0060007C007E00A2-00A900AC00AE-00B100B400B600B800D700F702C2-02C502D2-02DF02E5-02EB02ED02EF-02FF03750384038503F604820606-0608060B060E060F06E906FD06FE07F609F209F309FA09FB0AF10B700BF3-0BFA0C7F0CF10CF20D790E3F0F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-139917DB194019E0-19FF1B61-1B6A1B74-1B7C1FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE20442052207A-207C208A-208C20A0-20B8210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B2140-2144214A-214D214F2190-2328232B-23E82400-24262440-244A249C-24E92500-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE27C0-27C427C7-27CA27CC27D0-27E527F0-29822999-29D729DC-29FB29FE-2B4C2B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F309B309C319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A700-A716A720A721A789A78AA828-A82BA836-A839AA77-AA79FB29FDFCFDFDFE62FE64-FE66FE69FF04FF0BFF1C-FF1EFF3EFF40FF5CFF5EFFE0-FFE6FFE8-FFEEFFFCFFFD",Sm:"002B003C-003E007C007E00AC00B100D700F703F60606-060820442052207A-207C208A-208C2140-2144214B2190-2194219A219B21A021A321A621AE21CE21CF21D221D421F4-22FF2308-230B23202321237C239B-23B323DC-23E125B725C125F8-25FF266F27C0-27C427C7-27CA27CC27D0-27E527F0-27FF2900-29822999-29D729DC-29FB29FE-2AFF2B30-2B442B47-2B4CFB29FE62FE64-FE66FF0BFF1C-FF1EFF5CFF5EFFE2FFE9-FFEC",Sc:"002400A2-00A5060B09F209F309FB0AF10BF90E3F17DB20A0-20B8A838FDFCFE69FF04FFE0FFE1FFE5FFE6",Sk:"005E006000A800AF00B400B802C2-02C502D2-02DF02E5-02EB02ED02EF-02FF0375038403851FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE309B309CA700-A716A720A721A789A78AFF3EFF40FFE3",So:"00A600A700A900AE00B000B60482060E060F06E906FD06FE07F609FA0B700BF3-0BF80BFA0C7F0CF10CF20D790F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-1399194019E0-19FF1B61-1B6A1B74-1B7C210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B214A214C214D214F2195-2199219C-219F21A121A221A421A521A7-21AD21AF-21CD21D021D121D321D5-21F32300-2307230C-231F2322-2328232B-237B237D-239A23B4-23DB23E2-23E82400-24262440-244A249C-24E92500-25B625B8-25C025C2-25F72600-266E2670-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE2800-28FF2B00-2B2F2B452B462B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A828-A82BA836A837A839AA77-AA79FDFDFFE4FFE8FFEDFFEEFFFCFFFD",Z:"002000A01680180E2000-200A20282029202F205F3000",Zs:"002000A01680180E2000-200A202F205F3000",Zl:"2028",Zp:"2029",C:"0000-001F007F-009F00AD03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-0605061C061D0620065F06DD070E070F074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17B417B517DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF200B-200F202A-202E2060-206F20722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-F8FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFD-FF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFFBFFFEFFFF",Cc:"0000-001F007F-009F",Cf:"00AD0600-060306DD070F17B417B5200B-200F202A-202E2060-2064206A-206FFEFFFFF9-FFFB",Co:"E000-F8FF",Cs:"D800-DFFF",Cn:"03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-05FF06040605061C061D0620065F070E074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF2065-206920722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-D7FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFDFEFEFF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFF8FFFEFFFF"})}),ace.define("ace/token_iterator",["require","exports","module"],function(e,t,n){var r=function(e,t,n){this.$session=e,this.$row=t,this.$rowTokens=e.getTokens(t);var r=e.getTokenAt(t,n);this.$tokenIndex=r?r.index:-1};(function(){this.stepBackward=function(){this.$tokenIndex-=1;while(this.$tokenIndex<0){this.$row-=1;if(this.$row<0)return this.$row=0,null;this.$rowTokens=this.$session.getTokens(this.$row),this.$tokenIndex=this.$rowTokens.length-1}return this.$rowTokens[this.$tokenIndex]},this.stepForward=function(){this.$tokenIndex+=1;var e;while(this.$tokenIndex>=this.$rowTokens.length){this.$row+=1,e||(e=this.$session.getLength());if(this.$row>=e)return this.$row=e-1,null;this.$rowTokens=this.$session.getTokens(this.$row),this.$tokenIndex=0}return this.$rowTokens[this.$tokenIndex]},this.getCurrentToken=function(){return this.$rowTokens[this.$tokenIndex]},this.getCurrentTokenRow=function(){return this.$row},this.getCurrentTokenColumn=function(){var e=this.$rowTokens,t=this.$tokenIndex,n=e[t].start;if(n!==undefined)return n;n=0;while(t>0)t-=1,n+=e[t].value.length;return n}}).call(r.prototype),t.TokenIterator=r}),ace.define("ace/document",["require","exports","module","ace/lib/oop","ace/lib/event_emitter","ace/range","ace/anchor"],function(e,t,n){var r=e("./lib/oop"),i=e("./lib/event_emitter").EventEmitter,s=e("./range").Range,o=e("./anchor").Anchor,u=function(e){this.$lines=[],e.length==0?this.$lines=[""]:Array.isArray(e)?this._insertLines(0,e):this.insert({row:0,column:0},e)};(function(){r.implement(this,i),this.setValue=function(e){var t=this.getLength();this.remove(new s(0,0,t,this.getLine(t-1).length)),this.insert({row:0,column:0},e)},this.getValue=function(){return this.getAllLines().join(this.getNewLineCharacter())},this.createAnchor=function(e,t){return new o(this,e,t)},"aaa".split(/a/).length==0?this.$split=function(e){return e.replace(/\r\n|\r/g,"\n").split("\n")}:this.$split=function(e){return e.split(/\r\n|\r|\n/)},this.$detectNewLine=function(e){var t=e.match(/^.*?(\r\n|\r|\n)/m);this.$autoNewLine=t?t[1]:"\n"},this.getNewLineCharacter=function(){switch(this.$newLineMode){case"windows":return"\r\n";case"unix":return"\n";default:return this.$autoNewLine}},this.$autoNewLine="\n",this.$newLineMode="auto",this.setNewLineMode=function(e){if(this.$newLineMode===e)return;this.$newLineMode=e},this.getNewLineMode=function(){return this.$newLineMode},this.isNewLine=function(e){return e=="\r\n"||e=="\r"||e=="\n"},this.getLine=function(e){return this.$lines[e]||""},this.getLines=function(e,t){return this.$lines.slice(e,t+1)},this.getAllLines=function(){return this.getLines(0,this.getLength())},this.getLength=function(){return this.$lines.length},this.getTextRange=function(e){if(e.start.row==e.end.row)return this.$lines[e.start.row].substring(e.start.column,e.end.column);var t=this.getLines(e.start.row,e.end.row);t[0]=(t[0]||"").substring(e.start.column);var n=t.length-1;return e.end.row-e.start.row==n&&(t[n]=t[n].substring(0,e.end.column)),t.join(this.getNewLineCharacter())},this.$clipPosition=function(e){var t=this.getLength();return e.row>=t?(e.row=Math.max(0,t-1),e.column=this.getLine(t-1).length):e.row<0&&(e.row=0),e},this.insert=function(e,t){if(!t||t.length===0)return e;e=this.$clipPosition(e),this.getLength()<=1&&this.$detectNewLine(t);var n=this.$split(t),r=n.splice(0,1)[0],i=n.length==0?null:n.splice(n.length-1,1)[0];return e=this.insertInLine(e,r),i!==null&&(e=this.insertNewLine(e),e=this._insertLines(e.row,n),e=this.insertInLine(e,i||"")),e},this.insertLines=function(e,t){return e>=this.getLength()?this.insert({row:e,column:0},"\n"+t.join("\n")):this._insertLines(Math.max(e,0),t)},this._insertLines=function(e,t){if(t.length==0)return{row:e,column:0};if(t.length>65535){var n=this._insertLines(e,t.slice(65535));t=t.slice(0,65535)}var r=[e,0];r.push.apply(r,t),this.$lines.splice.apply(this.$lines,r);var i=new s(e,0,e+t.length,0),o={action:"insertLines",range:i,lines:t};return this._emit("change",{data:o}),n||i.end},this.insertNewLine=function(e){e=this.$clipPosition(e);var t=this.$lines[e.row]||"";this.$lines[e.row]=t.substring(0,e.column),this.$lines.splice(e.row+1,0,t.substring(e.column,t.length));var n={row:e.row+1,column:0},r={action:"insertText",range:s.fromPoints(e,n),text:this.getNewLineCharacter()};return this._emit("change",{data:r}),n},this.insertInLine=function(e,t){if(t.length==0)return e;var n=this.$lines[e.row]||"";this.$lines[e.row]=n.substring(0,e.column)+t+n.substring(e.column);var r={row:e.row,column:e.column+t.length},i={action:"insertText",range:s.fromPoints(e,r),text:t};return this._emit("change",{data:i}),r},this.remove=function(e){e.start=this.$clipPosition(e.start),e.end=this.$clipPosition(e.end);if(e.isEmpty())return e.start;var t=e.start.row,n=e.end.row;if(e.isMultiLine()){var r=e.start.column==0?t:t+1,i=n-1;e.end.column>0&&this.removeInLine(n,0,e.end.column),i>=r&&this._removeLines(r,i),r!=t&&(this.removeInLine(t,e.start.column,this.getLine(t).length),this.removeNewLine(e.start.row))}else this.removeInLine(t,e.start.column,e.end.column);return e.start},this.removeInLine=function(e,t,n){if(t==n)return;var r=new s(e,t,e,n),i=this.getLine(e),o=i.substring(t,n),u=i.substring(0,t)+i.substring(n,i.length);this.$lines.splice(e,1,u);var a={action:"removeText",range:r,text:o};return this._emit("change",{data:a}),r.start},this.removeLines=function(e,t){return e<0||t>=this.getLength()?this.remove(new s(e,0,t+1,0)):this._removeLines(e,t)},this._removeLines=function(e,t){var n=new s(e,0,t+1,0),r=this.$lines.splice(e,t-e+1),i={action:"removeLines",range:n,nl:this.getNewLineCharacter(),lines:r};return this._emit("change",{data:i}),r},this.removeNewLine=function(e){var t=this.getLine(e),n=this.getLine(e+1),r=new s(e,t.length,e+1,0),i=t+n;this.$lines.splice(e,2,i);var o={action:"removeText",range:r,text:this.getNewLineCharacter()};this._emit("change",{data:o})},this.replace=function(e,t){if(t.length==0&&e.isEmpty())return e.start;if(t==this.getTextRange(e))return e.end;this.remove(e);if(t)var n=this.insert(e.start,t);else n=e.start;return n},this.applyDeltas=function(e){for(var t=0;t<e.length;t++){var n=e[t],r=s.fromPoints(n.range.start,n.range.end);n.action=="insertLines"?this.insertLines(r.start.row,n.lines):n.action=="insertText"?this.insert(r.start,n.text):n.action=="removeLines"?this._removeLines(r.start.row,r.end.row-1):n.action=="removeText"&&this.remove(r)}},this.revertDeltas=function(e){for(var t=e.length-1;t>=0;t--){var n=e[t],r=s.fromPoints(n.range.start,n.range.end);n.action=="insertLines"?this._removeLines(r.start.row,r.end.row-1):n.action=="insertText"?this.remove(r):n.action=="removeLines"?this._insertLines(r.start.row,n.lines):n.action=="removeText"&&this.insert(r.start,n.text)}},this.indexToPosition=function(e,t){var n=this.$lines||this.getAllLines(),r=this.getNewLineCharacter().length;for(var i=t||0,s=n.length;i<s;i++){e-=n[i].length+r;if(e<0)return{row:i,column:e+n[i].length+r}}return{row:s-1,column:n[s-1].length}},this.positionToIndex=function(e,t){var n=this.$lines||this.getAllLines(),r=this.getNewLineCharacter().length,i=0,s=Math.min(e.row,n.length);for(var o=t||0;o<s;++o)i+=n[o].length+r;return i+e.column}}).call(u.prototype),t.Document=u}),ace.define("ace/anchor",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],function(e,t,n){var r=e("./lib/oop"),i=e("./lib/event_emitter").EventEmitter,s=t.Anchor=function(e,t,n){this.document=e,typeof n=="undefined"?this.setPosition(t.row,t.column):this.setPosition(t,n),this.$onChange=this.onChange.bind(this),e.on("change",this.$onChange)};(function(){r.implement(this,i),this.getPosition=function(){return this.$clipPositionToDocument(this.row,this.column)},this.getDocument=function(){return this.document},this.onChange=function(e){var t=e.data,n=t.range;if(n.start.row==n.end.row&&n.start.row!=this.row)return;if(n.start.row>this.row)return;if(n.start.row==this.row&&n.start.column>this.column)return;var r=this.row,i=this.column,s=n.start,o=n.end;t.action==="insertText"?s.row===r&&s.column<=i?s.row===o.row?i+=o.column-s.column:(i-=s.column,r+=o.row-s.row):s.row!==o.row&&s.row<r&&(r+=o.row-s.row):t.action==="insertLines"?s.row<=r&&(r+=o.row-s.row):t.action==="removeText"?s.row===r&&s.column<i?o.column>=i?i=s.column:i=Math.max(0,i-(o.column-s.column)):s.row!==o.row&&s.row<r?(o.row===r&&(i=Math.max(0,i-o.column)+s.column),r-=o.row-s.row):o.row===r&&(r-=o.row-s.row,i=Math.max(0,i-o.column)+s.column):t.action=="removeLines"&&s.row<=r&&(o.row<=r?r-=o.row-s.row:(r=s.row,i=0)),this.setPosition(r,i,!0)},this.setPosition=function(e,t,n){var r;n?r={row:e,column:t}:r=this.$clipPositionToDocument(e,t);if(this.row==r.row&&this.column==r.column)return;var i={row:this.row,column:this.column};this.row=r.row,this.column=r.column,this._emit("change",{old:i,value:r})},this.detach=function(){this.document.removeEventListener("change",this.$onChange)},this.$clipPositionToDocument=function(e,t){var n={};return e>=this.document.getLength()?(n.row=Math.max(0,this.document.getLength()-1),n.column=this.document.getLine(n.row).length):e<0?(n.row=0,n.column=0):(n.row=e,n.column=Math.min(this.document.getLine(n.row).length,Math.max(0,t))),t<0&&(n.column=0),n}}).call(s.prototype)}),ace.define("ace/background_tokenizer",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],function(e,t,n){var r=e("./lib/oop"),i=e("./lib/event_emitter").EventEmitter,s=function(e,t){this.running=!1,this.lines=[],this.states=[],this.currentLine=0,this.tokenizer=e;var n=this;this.$worker=function(){if(!n.running)return;var e=new Date,t=n.currentLine,r=n.doc,i=0,s=r.getLength();while(n.currentLine<s){n.$tokenizeRow(n.currentLine);while(n.lines[n.currentLine])n.currentLine++;i++;if(i%5==0&&new Date-e>20){n.fireUpdateEvent(t,n.currentLine-1),n.running=setTimeout(n.$worker,20);return}}n.running=!1,n.fireUpdateEvent(t,s-1)}};(function(){r.implement(this,i),this.setTokenizer=function(e){this.tokenizer=e,this.lines=[],this.states=[],this.start(0)},this.setDocument=function(e){this.doc=e,this.lines=[],this.states=[],this.stop()},this.fireUpdateEvent=function(e,t){var n={first:e,last:t};this._emit("update",{data:n})},this.start=function(e){this.currentLine=Math.min(e||0,this.currentLine,this.doc.getLength()),this.lines.splice(this.currentLine,this.lines.length),this.states.splice(this.currentLine,this.states.length),this.stop(),this.running=setTimeout(this.$worker,700)},this.$updateOnChange=function(e){var t=e.range,n=t.start.row,r=t.end.row-n;if(r===0)this.lines[n]=null;else if(e.action=="removeText"||e.action=="removeLines")this.lines.splice(n,r+1,null),this.states.splice(n,r+1,null);else{var i=Array(r+1);i.unshift(n,1),this.lines.splice.apply(this.lines,i),this.states.splice.apply(this.states,i)}this.currentLine=Math.min(n,this.currentLine,this.doc.getLength()),this.stop(),this.running=setTimeout(this.$worker,700)},this.stop=function(){this.running&&clearTimeout(this.running),this.running=!1},this.getTokens=function(e){return this.lines[e]||this.$tokenizeRow(e)},this.getState=function(e){return this.currentLine==e&&this.$tokenizeRow(e),this.states[e]||"start"},this.$tokenizeRow=function(e){var t=this.doc.getLine(e),n=this.states[e-1],r=this.tokenizer.getLineTokens(t,n,e);return this.states[e]+""!=r.state+""?(this.states[e]=r.state,this.lines[e+1]=null,this.currentLine>e+1&&(this.currentLine=e+1)):this.currentLine==e&&(this.currentLine=e+1),this.lines[e]=r.tokens}}).call(s.prototype),t.BackgroundTokenizer=s}),ace.define("ace/search_highlight",["require","exports","module","ace/lib/lang","ace/lib/oop","ace/range"],function(e,t,n){var r=e("./lib/lang"),i=e("./lib/oop"),s=e("./range").Range,o=function(e,t,n){this.setRegexp(e),this.clazz=t,this.type=n||"text"};(function(){this.MAX_RANGES=500,this.setRegexp=function(e){if(this.regExp+""==e+"")return;this.regExp=e,this.cache=[]},this.update=function(e,t,n,i){if(!this.regExp)return;var o=i.firstRow,u=i.lastRow;for(var a=o;a<=u;a++){var f=this.cache[a];f==null&&(f=r.getMatchOffsets(n.getLine(a),this.regExp),f.length>this.MAX_RANGES&&(f=f.slice(0,this.MAX_RANGES)),f=f.map(function(e){return new s(a,e.offset,a,e.offset+e.length)}),this.cache[a]=f.length?f:"");for(var l=f.length;l--;)t.drawSingleLineMarker(e,f[l].toScreenRange(n),this.clazz,i)}}}).call(o.prototype),t.SearchHighlight=o}),ace.define("ace/edit_session/folding",["require","exports","module","ace/range","ace/edit_session/fold_line","ace/edit_session/fold","ace/token_iterator"],function(e,t,n){function u(){this.getFoldAt=function(e,t,n){var r=this.getFoldLine(e);if(!r)return null;var i=r.folds;for(var s=0;s<i.length;s++){var o=i[s];if(o.range.contains(e,t)){if(n==1&&o.range.isEnd(e,t))continue;if(n==-1&&o.range.isStart(e,t))continue;return o}}},this.getFoldsInRange=function(e){var t=e.start,n=e.end,r=this.$foldData,i=[];t.column+=1,n.column-=1;for(var s=0;s<r.length;s++){var o=r[s].range.compareRange(e);if(o==2)continue;if(o==-2)break;var u=r[s].folds;for(var a=0;a<u.length;a++){var f=u[a];o=f.range.compareRange(e);if(o==-2)break;if(o==2)continue;if(o==42)break;i.push(f)}}return t.column-=1,n.column+=1,i},this.getAllFolds=function(){function n(t){e.push(t)}var e=[],t=this.$foldData;for(var r=0;r<t.length;r++)for(var i=0;i<t[r].folds.length;i++)n(t[r].folds[i]);return e},this.getFoldStringAt=function(e,t,n,r){r=r||this.getFoldLine(e);if(!r)return null;var i={end:{column:0}},s,o;for(var u=0;u<r.folds.length;u++){o=r.folds[u];var a=o.range.compareEnd(e,t);if(a==-1){s=this.getLine(o.start.row).substring(i.end.column,o.start.column);break}if(a===0)return null;i=o}return s||(s=this.getLine(o.start.row).substring(i.end.column)),n==-1?s.substring(0,t-i.end.column):n==1?s.substring(t-i.end.column):s},this.getFoldLine=function(e,t){var n=this.$foldData,r=0;t&&(r=n.indexOf(t)),r==-1&&(r=0);for(r;r<n.length;r++){var i=n[r];if(i.start.row<=e&&i.end.row>=e)return i;if(i.end.row>e)return null}return null},this.getNextFoldLine=function(e,t){var n=this.$foldData,r=0;t&&(r=n.indexOf(t)),r==-1&&(r=0);for(r;r<n.length;r++){var i=n[r];if(i.end.row>=e)return i}return null},this.getFoldedRowCount=function(e,t){var n=this.$foldData,r=t-e+1;for(var i=0;i<n.length;i++){var s=n[i],o=s.end.row,u=s.start.row;if(o>=t){u<t&&(u>=e?r-=t-u:r=0);break}o>=e&&(u>=e?r-=o-u:r-=o-e+1)}return r},this.$addFoldLine=function(e){return this.$foldData.push(e),this.$foldData.sort(function(e,t){return e.start.row-t.start.row}),e},this.addFold=function(e,t){var n=this.$foldData,r=!1,o;e instanceof s?o=e:(o=new s(t,e),o.collapseChildren=t.collapseChildren),this.$clipRangeToDocument(o.range);var u=o.start.row,a=o.start.column,f=o.end.row,l=o.end.column;if(u==f&&l-a<2)throw"The range has to be at least 2 characters width";var c=this.getFoldAt(u,a,1),h=this.getFoldAt(f,l,-1);if(c&&h==c)return c.addSubFold(o);if(c&&!c.range.isStart(u,a)||h&&!h.range.isEnd(f,l))throw"A fold can't intersect already existing fold"+o.range+c.range;var p=this.getFoldsInRange(o.range);p.length>0&&(this.removeFolds(p),p.forEach(function(e){o.addSubFold(e)}));for(var d=0;d<n.length;d++){var v=n[d];if(f==v.start.row){v.addFold(o),r=!0;break}if(u==v.end.row){v.addFold(o),r=!0;if(!o.sameRow){var m=n[d+1];if(m&&m.start.row==f){v.merge(m);break}}break}if(f<=v.start.row)break}return r||(v=this.$addFoldLine(new i(this.$foldData,o))),this.$useWrapMode?this.$updateWrapData(v.start.row,v.start.row):this.$updateRowLengthCache(v.start.row,v.start.row),this.$modified=!0,this._emit("changeFold",{data:o,action:"add"}),o},this.addFolds=function(e){e.forEach(function(e){this.addFold(e)},this)},this.removeFold=function(e){var t=e.foldLine,n=t.start.row,r=t.end.row,i=this.$foldData,s=t.folds;if(s.length==1)i.splice(i.indexOf(t),1);else if(t.range.isEnd(e.end.row,e.end.column))s.pop(),t.end.row=s[s.length-1].end.row,t.end.column=s[s.length-1].end.column;else if(t.range.isStart(e.start.row,e.start.column))s.shift(),t.start.row=s[0].start.row,t.start.column=s[0].start.column;else if(e.sameRow)s.splice(s.indexOf(e),1);else{var o=t.split(e.start.row,e.start.column);s=o.folds,s.shift(),o.start.row=s[0].start.row,o.start.column=s[0].start.column}this.$updating||(this.$useWrapMode?this.$updateWrapData(n,r):this.$updateRowLengthCache(n,r)),this.$modified=!0,this._emit("changeFold",{data:e,action:"remove"})},this.removeFolds=function(e){var t=[];for(var n=0;n<e.length;n++)t.push(e[n]);t.forEach(function(e){this.removeFold(e)},this),this.$modified=!0},this.expandFold=function(e){this.removeFold(e),e.subFolds.forEach(function(t){e.restoreRange(t),this.addFold(t)},this),e.collapseChildren>0&&this.foldAll(e.start.row+1,e.end.row,e.collapseChildren-1),e.subFolds=[]},this.expandFolds=function(e){e.forEach(function(e){this.expandFold(e)},this)},this.unfold=function(e,t){var n,i;e==null?(n=new r(0,0,this.getLength(),0),t=!0):typeof e=="number"?n=new r(e,0,e,this.getLine(e).length):"row"in e?n=r.fromPoints(e,e):n=e,i=this.getFoldsInRange(n);if(t)this.removeFolds(i);else while(i.length)this.expandFolds(i),i=this.getFoldsInRange(n)},this.isRowFolded=function(e,t){return!!this.getFoldLine(e,t)},this.getRowFoldEnd=function(e,t){var n=this.getFoldLine(e,t);return n?n.end.row:e},this.getRowFoldStart=function(e,t){var n=this.getFoldLine(e,t);return n?n.start.row:e},this.getFoldDisplayLine=function(e,t,n,r,i){r==null&&(r=e.start.row,i=0),t==null&&(t=e.end.row,n=this.getLine(t).length);var s=this.doc,o="";return e.walk(function(e,t,n,u){if(t<r)return;if(t==r){if(n<i)return;u=Math.max(i,u)}e!=null?o+=e:o+=s.getLine(t).substring(u,n)},t,n),o},this.getDisplayLine=function(e,t,n,r){var i=this.getFoldLine(e);if(!i){var s;return s=this.doc.getLine(e),s.substring(r||0,t||s.length)}return this.getFoldDisplayLine(i,e,t,n,r)},this.$cloneFoldData=function(){var e=[];return e=this.$foldData.map(function(t){var n=t.folds.map(function(e){return e.clone()});return new i(e,n)}),e},this.toggleFold=function(e){var t=this.selection,n=t.getRange(),r,i;if(n.isEmpty()){var s=n.start;r=this.getFoldAt(s.row,s.column);if(r){this.expandFold(r);return}(i=this.findMatchingBracket(s))?n.comparePoint(i)==1?n.end=i:(n.start=i,n.start.column++,n.end.column--):(i=this.findMatchingBracket({row:s.row,column:s.column+1}))?(n.comparePoint(i)==1?n.end=i:n.start=i,n.start.column++):n=this.getCommentFoldRange(s.row,s.column)||n}else{var o=this.getFoldsInRange(n);if(e&&o.length){this.expandFolds(o);return}o.length==1&&(r=o[0])}r||(r=this.getFoldAt(n.start.row,n.start.column));if(r&&r.range.toString()==n.toString()){this.expandFold(r);return}var u="...";if(!n.isMultiLine()){u=this.getTextRange(n);if(u.length<4)return;u=u.trim().substring(0,2)+".."}this.addFold(u,n)},this.getCommentFoldRange=function(e,t,n){var i=new o(this,e,t),s=i.getCurrentToken();if(s&&/^comment|string/.test(s.type)){var u=new r,a=new RegExp(s.type.replace(/\..*/,"\\."));if(n!=1){do s=i.stepBackward();while(s&&a.test(s.type));i.stepForward()}u.start.row=i.getCurrentTokenRow(),u.start.column=i.getCurrentTokenColumn()+2,i=new o(this,e,t);if(n!=-1){do s=i.stepForward();while(s&&a.test(s.type));s=i.stepBackward()}else s=i.getCurrentToken();return u.end.row=i.getCurrentTokenRow(),u.end.column=i.getCurrentTokenColumn()+s.value.length-2,u}},this.foldAll=function(e,t,n){n==undefined&&(n=1e5);var r=this.foldWidgets;t=t||this.getLength();for(var i=e||0;i<t;i++){r[i]==null&&(r[i]=this.getFoldWidget(i));if(r[i]!="start")continue;var s=this.getFoldWidgetRange(i);if(s&&s.end.row<=t)try{var o=this.addFold("...",s);o.collapseChildren=n}catch(u){}i=s.end.row}},this.$foldStyles={manual:1,markbegin:1,markbeginend:1},this.$foldStyle="markbegin",this.setFoldStyle=function(e){if(!this.$foldStyles[e])throw new Error("invalid fold style: "+e+"["+Object.keys(this.$foldStyles).join(", ")+"]");if(this.$foldStyle==e)return;this.$foldStyle=e,e=="manual"&&this.unfold();var t=this.$foldMode;this.$setFolding(null),this.$setFolding(t)},this.$setFolding=function(e){if(this.$foldMode==e)return;this.$foldMode=e,this.removeListener("change",this.$updateFoldWidgets),this._emit("changeAnnotation");if(!e||this.$foldStyle=="manual"){this.foldWidgets=null;return}this.foldWidgets=[],this.getFoldWidget=e.getFoldWidget.bind(e,this,this.$foldStyle),this.getFoldWidgetRange=e.getFoldWidgetRange.bind(e,this,this.$foldStyle),this.$updateFoldWidgets=this.updateFoldWidgets.bind(this),this.on("change",this.$updateFoldWidgets)},this.getParentFoldRangeData=function(e,t){var n=this.foldWidgets;if(!n||t&&n[e])return{};var r=e-1,i;while(r>=0){var s=n[r];s==null&&(s=n[r]=this.getFoldWidget(r));if(s=="start"){var o=this.getFoldWidgetRange(r);i||(i=o);if(o&&o.end.row>=e)break}r--}return{range:r!==-1&&o,firstRange:i}},this.onFoldWidgetClick=function(e,t){var n=this.getFoldWidget(e),r=this.getLine(e);t=t.domEvent;var i=t.shiftKey,s=t.ctrlKey||t.metaKey,o=t.altKey,u=n==="end"?-1:1,a=this.getFoldAt(e,u===-1?0:r.length,u);if(a){i||s?this.removeFold(a):this.expandFold(a);return}var f=this.getFoldWidgetRange(e);if(f&&!f.isMultiLine()){a=this.getFoldAt(f.start.row,f.start.column,1);if(a&&f.isEqual(a.range)){this.removeFold(a);return}}if(o){var l=this.getParentFoldRangeData(e);if(l.range)var c=l.range.start.row+1,h=l.range.end.row;this.foldAll(c,h,s?1e4:0)}else if(i){var h=f?f.end.row:this.getLength();this.foldAll(e+1,f.end.row,s?1e4:0)}else f&&(s&&(f.collapseChildren=1e4),this.addFold("...",f));f||((t.target||t.srcElement).className+=" ace_invalid")},this.updateFoldWidgets=function(e){var t=e.data,n=t.range,r=n.start.row,i=n.end.row-r;if(i===0)this.foldWidgets[r]=null;else if(t.action=="removeText"||t.action=="removeLines")this.foldWidgets.splice(r,i+1,null);else{var s=Array(i+1);s.unshift(r,1),this.foldWidgets.splice.apply(this.foldWidgets,s)}}}var r=e("../range").Range,i=e("./fold_line").FoldLine,s=e("./fold").Fold,o=e("../token_iterator").TokenIterator;t.Folding=u}),ace.define("ace/edit_session/fold_line",["require","exports","module","ace/range"],function(e,t,n){function i(e,t){this.foldData=e,Array.isArray(t)?this.folds=t:t=this.folds=[t];var n=t[t.length-1];this.range=new r(t[0].start.row,t[0].start.column,n.end.row,n.end.column),this.start=this.range.start,this.end=this.range.end,this.folds.forEach(function(e){e.setFoldLine(this)},this)}var r=e("../range").Range;(function(){this.shiftRow=function(e){this.start.row+=e,this.end.row+=e,this.folds.forEach(function(t){t.start.row+=e,t.end.row+=e})},this.addFold=function(e){if(e.sameRow){if(e.start.row<this.startRow||e.endRow>this.endRow)throw"Can't add a fold to this FoldLine as it has no connection";this.folds.push(e),this.folds.sort(function(e,t){return-e.range.compareEnd(t.start.row,t.start.column)}),this.range.compareEnd(e.start.row,e.start.column)>0?(this.end.row=e.end.row,this.end.column=e.end.column):this.range.compareStart(e.end.row,e.end.column)<0&&(this.start.row=e.start.row,this.start.column=e.start.column)}else if(e.start.row==this.end.row)this.folds.push(e),this.end.row=e.end.row,this.end.column=e.end.column;else{if(e.end.row!=this.start.row)throw"Trying to add fold to FoldRow that doesn't have a matching row";this.folds.unshift(e),this.start.row=e.start.row,this.start.column=e.start.column}e.foldLine=this},this.containsRow=function(e){return e>=this.start.row&&e<=this.end.row},this.walk=function(e,t,n){var r=0,i=this.folds,s,o,u,a=!0;t==null&&(t=this.end.row,n=this.end.column);for(var f=0;f<i.length;f++){s=i[f],o=s.range.compareStart(t,n);if(o==-1){e(null,t,n,r,a);return}u=e(null,s.start.row,s.start.column,r,a),u=!u&&e(s.placeholder,s.start.row,s.start.column,r);if(u||o==0)return;a=!s.sameRow,r=s.end.column}e(null,t,n,r,a)},this.getNextFoldTo=function(e,t){var n,r;for(var i=0;i<this.folds.length;i++){n=this.folds[i],r=n.range.compareEnd(e,t);if(r==-1)return{fold:n,kind:"after"};if(r==0)return{fold:n,kind:"inside"}}return null},this.addRemoveChars=function(e,t,n){var r=this.getNextFoldTo(e,t),i,s;if(r){i=r.fold;if(r.kind=="inside"&&i.start.column!=t&&i.start.row!=e)window.console&&window.console.log(e,t,i);else if(i.start.row==e){s=this.folds;var o=s.indexOf(i);o==0&&(this.start.column+=n);for(o;o<s.length;o++){i=s[o],i.start.column+=n;if(!i.sameRow)return;i.end.column+=n}this.end.column+=n}}},this.split=function(e,t){var n=this.getNextFoldTo(e,t).fold,r=this.folds,s=this.foldData;if(!n)return null;var o=r.indexOf(n),u=r[o-1];this.end.row=u.end.row,this.end.column=u.end.column,r=r.splice(o,r.length-o);var a=new i(s,r);return s.splice(s.indexOf(this)+1,0,a),a},this.merge=function(e){var t=e.folds;for(var n=0;n<t.length;n++)this.addFold(t[n]);var r=this.foldData;r.splice(r.indexOf(e),1)},this.toString=function(){var e=[this.range.toString()+": ["];return this.folds.forEach(function(t){e.push("  "+t.toString())}),e.push("]"),e.join("\n")},this.idxToPosition=function(e){var t=0,n;for(var r=0;r<this.folds.length;r++){var n=this.folds[r];e-=n.start.column-t;if(e<0)return{row:n.start.row,column:n.start.column+e};e-=n.placeholder.length;if(e<0)return n.start;t=n.end.column}return{row:this.end.row,column:this.end.column+e}}}).call(i.prototype),t.FoldLine=i}),ace.define("ace/edit_session/fold",["require","exports","module","ace/range","ace/range_list","ace/lib/oop"],function(e,t,n){function u(e,t){e.row-=t.row,e.row==0&&(e.column-=t.column)}function a(e,t){u(e.start,t),u(e.end,t)}function f(e,t){e.row==0&&(e.column+=t.column),e.row+=t.row}function l(e,t){f(e.start,t),f(e.end,t)}var r=e("../range").Range,i=e("../range_list").RangeList,s=e("../lib/oop"),o=t.Fold=function(e,t){this.foldLine=null,this.placeholder=t,this.range=e,this.start=e.start,this.end=e.end,this.sameRow=e.start.row==e.end.row,this.subFolds=this.ranges=[]};s.inherits(o,i),function(){this.toString=function(){return'"'+this.placeholder+'" '+this.range.toString()},this.setFoldLine=function(e){this.foldLine=e,this.subFolds.forEach(function(t){t.setFoldLine(e)})},this.clone=function(){var e=this.range.clone(),t=new o(e,this.placeholder);return this.subFolds.forEach(function(e){t.subFolds.push(e.clone())}),t.collapseChildren=this.collapseChildren,t},this.addSubFold=function(e){if(this.range.isEqual(e))return;if(!this.range.containsRange(e))throw"A fold can't intersect already existing fold"+e.range+this.range;a(e,this.start);var t=e.start.row,n=e.start.column;for(var r=0,i=-1;r<this.subFolds.length;r++){i=this.subFolds[r].range.compare(t,n);if(i!=1)break}var s=this.subFolds[r];if(i==0)return s.addSubFold(e);var t=e.range.end.row,n=e.range.end.column;for(var o=r,i=-1;o<this.subFolds.length;o++){i=this.subFolds[o].range.compare(t,n);if(i!=1)break}var u=this.subFolds[o];if(i==0)throw"A fold can't intersect already existing fold"+e.range+this.range;var f=this.subFolds.splice(r,o-r,e);return e.setFoldLine(this.foldLine),e},this.restoreRange=function(e){return l(e,this.start)}}.call(o.prototype)}),ace.define("ace/range_list",["require","exports","module","ace/range"],function(e,t,n){var r=e("./range").Range,i=r.comparePoints,s=function(){this.ranges=[]};(function(){this.comparePoints=i,this.pointIndex=function(e,t,n){var r=this.ranges;for(var s=n||0;s<r.length;s++){var o=r[s],u=i(e,o.end);if(u>0)continue;var a=i(e,o.start);return u===0?t&&a!==0?-s-2:s:a>0||a===0&&!t?s:-s-1}return-s-1},this.add=function(e){var t=!e.isEmpty(),n=this.pointIndex(e.start,t);n<0&&(n=-n-1);var r=this.pointIndex(e.end,t,n);return r<0?r=-r-1:r++,this.ranges.splice(n,r-n,e)},this.addList=function(e){var t=[];for(var n=e.length;n--;)t.push.call(t,this.add(e[n]));return t},this.substractPoint=function(e){var t=this.pointIndex(e);if(t>=0)return this.ranges.splice(t,1)},this.merge=function(){var e=[],t=this.ranges;t=t.sort(function(e,t){return i(e.start,t.start)});var n=t[0],r;for(var s=1;s<t.length;s++){r=n,n=t[s];var o=i(r.end,n.start);if(o<0)continue;if(o==0&&!r.isEmpty()&&!n.isEmpty())continue;i(r.end,n.end)<0&&(r.end.row=n.end.row,r.end.column=n.end.column),t.splice(s,1),e.push(n),n=r,s--}return this.ranges=t,e},this.contains=function(e,t){return this.pointIndex({row:e,column:t})>=0},this.containsPoint=function(e){return this.pointIndex(e)>=0},this.rangeAtPoint=function(e){var t=this.pointIndex(e);if(t>=0)return this.ranges[t]},this.clipRows=function(e,t){var n=this.ranges;if(n[0].start.row>t||n[n.length-1].start.row<e)return[];var r=this.pointIndex({row:e,column:0});r<0&&(r=-r-1);var i=this.pointIndex({row:t,column:0},r);i<0&&(i=-i-1);var s=[];for(var o=r;o<i;o++)s.push(n[o]);return s},this.removeAll=function(){return this.ranges.splice(0,this.ranges.length)},this.attach=function(e){this.session&&this.detach(),this.session=e,this.onChange=this.$onChange.bind(this),this.session.on("change",this.onChange)},this.detach=function(){if(!this.session)return;this.session.removeListener("change",this.onChange),this.session=null},this.$onChange=function(e){var t=e.data.range;if(e.data.action[0]=="i")var n=t.start,r=t.end;else var r=t.start,n=t.end;var i=n.row,s=r.row,o=s-i,u=-n.column+r.column,a=this.ranges;for(var f=0,l=a.length;f<l;f++){var c=a[f];if(c.end.row<i)continue;if(c.start.row>i)break;c.start.row==i&&c.start.column>=n.column&&(c.start.column+=u,c.start.row+=o),c.end.row==i&&c.end.column>=n.column&&(c.end.column==n.column&&u>0&&f<l-1&&c.end.column>c.start.column&&c.end.column==a[f+1].start.column&&(c.end.column-=u),c.end.column+=u,c.end.row+=o)}if(o!=0&&f<l)for(;f<l;f++){var c=a[f];c.start.row+=o,c.end.row+=o}}}).call(s.prototype),t.RangeList=s}),ace.define("ace/edit_session/bracket_match",["require","exports","module","ace/token_iterator","ace/range"],function(e,t,n){function s(){this.findMatchingBracket=function(e,t){if(e.column==0)return null;var n=t||this.getLine(e.row).charAt(e.column-1);if(n=="")return null;var r=n.match(/([\(\[\{])|([\)\]\}])/);return r?r[1]?this.$findClosingBracket(r[1],e):this.$findOpeningBracket(r[2],e):null},this.getBracketRange=function(e){var t=this.getLine(e.row),n=!0,r,s=t.charAt(e.column-1),o=s&&s.match(/([\(\[\{])|([\)\]\}])/);o||(s=t.charAt(e.column),e={row:e.row,column:e.column+1},o=s&&s.match(/([\(\[\{])|([\)\]\}])/),n=!1);if(!o)return null;if(o[1]){var u=this.$findClosingBracket(o[1],e);if(!u)return null;r=i.fromPoints(e,u),n||(r.end.column++,r.start.column--),r.cursor=r.end}else{var u=this.$findOpeningBracket(o[2],e);if(!u)return null;r=i.fromPoints(u,e),n||(r.start.column++,r.end.column--),r.cursor=r.start}return r},this.$brackets={")":"(","(":")","]":"[","[":"]","{":"}","}":"{"},this.$findOpeningBracket=function(e,t,n){var i=this.$brackets[e],s=1,o=new r(this,t.row,t.column),u=o.getCurrentToken();u||(u=o.stepForward());if(!u)return;n||(n=new RegExp("(\\.?"+u.type.replace(".","\\.").replace("rparen",".paren")+")+"));var a=t.column-o.getCurrentTokenColumn()-2,f=u.value;for(;;){while(a>=0){var l=f.charAt(a);if(l==i){s-=1;if(s==0)return{row:o.getCurrentTokenRow(),column:a+o.getCurrentTokenColumn()}}else l==e&&(s+=1);a-=1}do u=o.stepBackward();while(u&&!n.test(u.type));if(u==null)break;f=u.value,a=f.length-1}return null},this.$findClosingBracket=function(e,t,n){var i=this.$brackets[e],s=1,o=new r(this,t.row,t.column),u=o.getCurrentToken();u||(u=o.stepForward());if(!u)return;n||(n=new RegExp("(\\.?"+u.type.replace(".","\\.").replace("lparen",".paren")+")+"));var a=t.column-o.getCurrentTokenColumn();for(;;){var f=u.value,l=f.length;while(a<l){var c=f.charAt(a);if(c==i){s-=1;if(s==0)return{row:o.getCurrentTokenRow(),column:a+o.getCurrentTokenColumn()}}else c==e&&(s+=1);a+=1}do u=o.stepForward();while(u&&!n.test(u.type));if(u==null)break;a=0}return null}}var r=e("../token_iterator").TokenIterator,i=e("../range").Range;t.BracketMatch=s}),ace.define("ace/search",["require","exports","module","ace/lib/lang","ace/lib/oop","ace/range"],function(e,t,n){var r=e("./lib/lang"),i=e("./lib/oop"),s=e("./range").Range,o=function(){this.$options={}};(function(){this.set=function(e){return i.mixin(this.$options,e),this},this.getOptions=function(){return r.copyObject(this.$options)},this.setOptions=function(e){this.$options=e},this.find=function(e){var t=this.$matchIterator(e,this.$options);if(!t)return!1;var n=null;return t.forEach(function(e,t,r){if(!e.start){var i=e.offset+(r||0);n=new s(t,i,t,i+e.length)}else n=e;return!0}),n},this.findAll=function(e){var t=this.$options;if(!t.needle)return[];this.$assembleRegExp(t);var n=t.range,i=n?e.getLines(n.start.row,n.end.row):e.doc.getAllLines(),o=[],u=t.re;if(t.$isMultiLine){var a=u.length,f=i.length-a;for(var l=u.offset||0;l<=f;l++){for(var c=0;c<a;c++)if(i[l+c].search(u[c])==-1)break;var h=i[l],p=i[l+a-1],d=h.match(u[0])[0].length,v=p.match(u[a-1])[0].length;o.push(new s(l,h.length-d,l+a-1,v))}}else for(var m=0;m<i.length;m++){var g=r.getMatchOffsets(i[m],u);for(var c=0;c<g.length;c++){var y=g[c];o.push(new s(m,y.offset,m,y.offset+y.length))}}if(n){var b=n.start.column,w=n.start.column,m=0,c=o.length-1;while(m<c&&o[m].start.column<b&&o[m].start.row==n.start.row)m++;while(m<c&&o[c].end.column>w&&o[c].end.row==n.end.row)c--;o=o.slice(m,c+1);for(m=0,c=o.length;m<c;m++)o[m].start.row+=n.start.row,o[m].end.row+=n.start.row}return o},this.replace=function(e,t){var n=this.$options,r=this.$assembleRegExp(n);if(n.$isMultiLine)return t;if(!r)return;var i=r.exec(e);if(!i||i[0].length!=e.length)return null;t=e.replace(r,t);if(n.preserveCase){t=t.split("");for(var s=Math.min(e.length,e.length);s--;){var o=e[s];o&&o.toLowerCase()!=o?t[s]=t[s].toUpperCase():t[s]=t[s].toLowerCase()}t=t.join("")}return t},this.$matchIterator=function(e,t){var n=this.$assembleRegExp(t);if(!n)return!1;var i=this,o,u=t.backwards;if(t.$isMultiLine)var a=n.length,f=function(t,r,i){var u=t.search(n[0]);if(u==-1)return;for(var f=1;f<a;f++){t=e.getLine(r+f);if(t.search(n[f])==-1)return}var l=t.match(n[a-1])[0].length,c=new s(r,u,r+a-1,l);n.offset==1?(c.start.row--,c.start.column=Number.MAX_VALUE):i&&(c.start.column+=i);if(o(c))return!0};else if(u)var f=function(e,t,i){var s=r.getMatchOffsets(e,n);for(var u=s.length-1;u>=0;u--)if(o(s[u],t,i))return!0};else var f=function(e,t,i){var s=r.getMatchOffsets(e,n);for(var u=0;u<s.length;u++)if(o(s[u],t,i))return!0};return{forEach:function(n){o=n,i.$lineIterator(e,t).forEach(f)}}},this.$assembleRegExp=function(e,t){if(e.needle instanceof RegExp)return e.re=e.needle;var n=e.needle;if(!e.needle)return e.re=!1;e.regExp||(n=r.escapeRegExp(n)),e.wholeWord&&(n="\\b"+n+"\\b");var i=e.caseSensitive?"g":"gi";e.$isMultiLine=!t&&/[\n\r]/.test(n);if(e.$isMultiLine)return e.re=this.$assembleMultilineRegExp(n,i);try{var s=new RegExp(n,i)}catch(o){s=!1}return e.re=s},this.$assembleMultilineRegExp=function(e,t){var n=e.replace(/\r\n|\r|\n/g,"$\n^").split("\n"),r=[];for(var i=0;i<n.length;i++)try{r.push(new RegExp(n[i],t))}catch(s){return!1}return n[0]==""?(r.shift(),r.offset=1):r.offset=0,r},this.$lineIterator=function(e,t){var n=t.backwards==1,r=t.skipCurrent!=0,i=t.range,s=t.start;s||(s=i?i[n?"end":"start"]:e.selection.getRange()),s.start&&(s=s[r!=n?"end":"start"]);var o=i?i.start.row:0,u=i?i.end.row:e.getLength()-1,a=n?function(n){var r=s.row,i=e.getLine(r).substring(0,s.column);if(n(i,r))return;for(r--;r>=o;r--)if(n(e.getLine(r),r))return;if(t.wrap==0)return;for(r=u,o=s.row;r>=o;r--)if(n(e.getLine(r),r))return}:function(n){var r=s.row,i=e.getLine(r).substr(s.column);if(n(i,r,s.column))return;for(r+=1;r<=u;r++)if(n(e.getLine(r),r))return;if(t.wrap==0)return;for(r=o,u=s.row;r<=u;r++)if(n(e.getLine(r),r))return};return{forEach:a}}}).call(o.prototype),t.Search=o}),ace.define("ace/commands/command_manager",["require","exports","module","ace/lib/oop","ace/keyboard/hash_handler","ace/lib/event_emitter"],function(e,t,n){var r=e("../lib/oop"),i=e("../keyboard/hash_handler").HashHandler,s=e("../lib/event_emitter").EventEmitter,o=function(e,t){this.platform=e,this.commands=this.byName={},this.commmandKeyBinding={},this.addCommands(t),this.setDefaultHandler("exec",function(e){return e.command.exec(e.editor,e.args||{})})};r.inherits(o,i),function(){r.implement(this,s),this.exec=function(e,t,n){typeof e=="string"&&(e=this.commands[e]);if(!e)return!1;if(t&&t.$readOnly&&!e.readOnly)return!1;var r={editor:t,command:e,args:n},i=this._emit("exec",r);return this._signal("afterExec",r),i===!1?!1:!0},this.toggleRecording=function(e){if(this.$inReplay)return;return e&&e._emit("changeStatus"),this.recording?(this.macro.pop(),this.removeEventListener("exec",this.$addCommandToMacro),this.macro.length||(this.macro=this.oldMacro),this.recording=!1):(this.$addCommandToMacro||(this.$addCommandToMacro=function(e){this.macro.push([e.command,e.args])}.bind(this)),this.oldMacro=this.macro,this.macro=[],this.on("exec",this.$addCommandToMacro),this.recording=!0)},this.replay=function(e){if(this.$inReplay||!this.macro)return;if(this.recording)return this.toggleRecording(e);try{this.$inReplay=!0,this.macro.forEach(function(t){typeof t=="string"?this.exec(t,e):this.exec(t[0],e,t[1])},this)}finally{this.$inReplay=!1}},this.trimMacro=function(e){return e.map(function(e){return typeof e[0]!="string"&&(e[0]=e[0].name),e[1]||(e=e[0]),e})}}.call(o.prototype),t.CommandManager=o}),ace.define("ace/keyboard/hash_handler",["require","exports","module","ace/lib/keys","ace/lib/useragent"],function(e,t,n){function s(e,t){this.platform=t||(i.isMac?"mac":"win"),this.commands={},this.commmandKeyBinding={},this.addCommands(e)}var r=e("../lib/keys"),i=e("../lib/useragent");(function(){this.addCommand=function(e){this.commands[e.name]&&this.removeCommand(e),this.commands[e.name]=e,e.bindKey&&this._buildKeyHash(e)},this.removeCommand=function(e){var t=typeof e=="string"?e:e.name;e=this.commands[t],delete this.commands[t];var n=this.commmandKeyBinding;for(var r in n)for(var i in n[r])n[r][i]==e&&delete n[r][i]},this.bindKey=function(e,t){if(!e)return;if(typeof t=="function"){this.addCommand({exec:t,bindKey:e,name:t.name||e});return}var n=this.commmandKeyBinding;e.split("|").forEach(function(e){var r=this.parseKeys(e,t),i=r.hashId;(n[i]||(n[i]={}))[r.key]=t},this)},this.addCommands=function(e){e&&Object.keys(e).forEach(function(t){var n=e[t];if(typeof n=="string")return this.bindKey(n,t);typeof n=="function"&&(n={exec:n}),n.name||(n.name=t),this.addCommand(n)},this)},this.removeCommands=function(e){Object.keys(e).forEach(function(t){this.removeCommand(e[t])},this)},this.bindKeys=function(e){Object.keys(e).forEach(function(t){this.bindKey(t,e[t])},this)},this._buildKeyHash=function(e){var t=e.bindKey;if(!t)return;var n=typeof t=="string"?t:t[this.platform];this.bindKey(n,e)},this.parseKeys=function(e){e.indexOf(" ")!=-1&&(e=e.split(/\s+/).pop());var t=e.toLowerCase().split(/[\-\+]([\-\+])?/).filter(function(e){return e}),n=t.pop(),i=r[n];if(r.FUNCTION_KEYS[i])n=r.FUNCTION_KEYS[i].toLowerCase();else{if(!t.length)return{key:n,hashId:-1};if(t.length==1&&t[0]=="shift")return{key:n.toUpperCase(),hashId:-1}}var s=0;for(var o=t.length;o--;){var u=r.KEY_MODS[t[o]];if(u==null)return typeof console!="undefined"&&console.error("invalid modifier "+t[o]+" in "+e),!1;s|=u}return{key:n,hashId:s}},this.findKeyCommand=function(t,n){var r=this.commmandKeyBinding;return r[t]&&r[t][n]},this.handleKeyboard=function(e,t,n,r){return{command:this.findKeyCommand(t,n)}}}).call(s.prototype),t.HashHandler=s}),ace.define("ace/commands/default_commands",["require","exports","module","ace/lib/lang","ace/config"],function(e,t,n){function s(e,t){return{win:e,mac:t}}var r=e("../lib/lang"),i=e("../config");t.commands=[{name:"showSettingsMenu",bindKey:s("Ctrl-,","Command-,"),exec:function(e){i.loadModule("ace/ext/settings_menu",function(t){t.init(e),e.showSettingsMenu()})},readOnly:!0},{name:"selectall",bindKey:s("Ctrl-A","Command-A"),exec:function(e){e.selectAll()},readOnly:!0},{name:"centerselection",bindKey:s(null,"Ctrl-L"),exec:function(e){e.centerSelection()},readOnly:!0},{name:"gotoline",bindKey:s("Ctrl-L","Command-L"),exec:function(e){var t=parseInt(prompt("Enter line number:"),10);isNaN(t)||e.gotoLine(t)},readOnly:!0},{name:"fold",bindKey:s("Alt-L|Ctrl-F1","Command-Alt-L|Command-F1"),exec:function(e){e.session.toggleFold(!1)},readOnly:!0},{name:"unfold",bindKey:s("Alt-Shift-L|Ctrl-Shift-F1","Command-Alt-Shift-L|Command-Shift-F1"),exec:function(e){e.session.toggleFold(!0)},readOnly:!0},{name:"foldall",bindKey:s("Alt-0","Command-Option-0"),exec:function(e){e.session.foldAll()},readOnly:!0},{name:"unfoldall",bindKey:s("Alt-Shift-0","Command-Option-Shift-0"),exec:function(e){e.session.unfold()},readOnly:!0},{name:"findnext",bindKey:s("Ctrl-K","Command-G"),exec:function(e){e.findNext()},readOnly:!0},{name:"findprevious",bindKey:s("Ctrl-Shift-K","Command-Shift-G"),exec:function(e){e.findPrevious()},readOnly:!0},{name:"find",bindKey:s("Ctrl-F","Command-F"),exec:function(e){i.loadModule("ace/ext/searchbox",function(t){t.Search(e)})},readOnly:!0},{name:"overwrite",bindKey:"Insert",exec:function(e){e.toggleOverwrite()},readOnly:!0},{name:"selecttostart",bindKey:s("Ctrl-Shift-Home","Command-Shift-Up"),exec:function(e){e.getSelection().selectFileStart()},multiSelectAction:"forEach",readOnly:!0},{name:"gotostart",bindKey:s("Ctrl-Home","Command-Home|Command-Up"),exec:function(e){e.navigateFileStart()},multiSelectAction:"forEach",readOnly:!0},{name:"selectup",bindKey:s("Shift-Up","Shift-Up"),exec:function(e){e.getSelection().selectUp()},multiSelectAction:"forEach",readOnly:!0},{name:"golineup",bindKey:s("Up","Up|Ctrl-P"),exec:function(e,t){e.navigateUp(t.times)},multiSelectAction:"forEach",readOnly:!0},{name:"selecttoend",bindKey:s("Ctrl-Shift-End","Command-Shift-Down"),exec:function(e){e.getSelection().selectFileEnd()},multiSelectAction:"forEach",readOnly:!0},{name:"gotoend",bindKey:s("Ctrl-End","Command-End|Command-Down"),exec:function(e){e.navigateFileEnd()},multiSelectAction:"forEach",readOnly:!0},{name:"selectdown",bindKey:s("Shift-Down","Shift-Down"),exec:function(e){e.getSelection().selectDown()},multiSelectAction:"forEach",readOnly:!0},{name:"golinedown",bindKey:s("Down","Down|Ctrl-N"),exec:function(e,t){e.navigateDown(t.times)},multiSelectAction:"forEach",readOnly:!0},{name:"selectwordleft",bindKey:s("Ctrl-Shift-Left","Option-Shift-Left"),exec:function(e){e.getSelection().selectWordLeft()},multiSelectAction:"forEach",readOnly:!0},{name:"gotowordleft",bindKey:s("Ctrl-Left","Option-Left"),exec:function(e){e.navigateWordLeft()},multiSelectAction:"forEach",readOnly:!0},{name:"selecttolinestart",bindKey:s("Alt-Shift-Left","Command-Shift-Left"),exec:function(e){e.getSelection().selectLineStart()},multiSelectAction:"forEach",readOnly:!0},{name:"gotolinestart",bindKey:s("Alt-Left|Home","Command-Left|Home|Ctrl-A"),exec:function(e){e.navigateLineStart()},multiSelectAction:"forEach",readOnly:!0},{name:"selectleft",bindKey:s("Shift-Left","Shift-Left"),exec:function(e){e.getSelection().selectLeft()},multiSelectAction:"forEach",readOnly:!0},{name:"gotoleft",bindKey:s("Left","Left|Ctrl-B"),exec:function(e,t){e.navigateLeft(t.times)},multiSelectAction:"forEach",readOnly:!0},{name:"selectwordright",bindKey:s("Ctrl-Shift-Right","Option-Shift-Right"),exec:function(e){e.getSelection().selectWordRight()},multiSelectAction:"forEach",readOnly:!0},{name:"gotowordright",bindKey:s("Ctrl-Right","Option-Right"),exec:function(e){e.navigateWordRight()},multiSelectAction:"forEach",readOnly:!0},{name:"selecttolineend",bindKey:s("Alt-Shift-Right","Command-Shift-Right"),exec:function(e){e.getSelection().selectLineEnd()},multiSelectAction:"forEach",readOnly:!0},{name:"gotolineend",bindKey:s("Alt-Right|End","Command-Right|End|Ctrl-E"),exec:function(e){e.navigateLineEnd()},multiSelectAction:"forEach",readOnly:!0},{name:"selectright",bindKey:s("Shift-Right","Shift-Right"),exec:function(e){e.getSelection().selectRight()},multiSelectAction:"forEach",readOnly:!0},{name:"gotoright",bindKey:s("Right","Right|Ctrl-F"),exec:function(e,t){e.navigateRight(t.times)},multiSelectAction:"forEach",readOnly:!0},{name:"selectpagedown",bindKey:"Shift-PageDown",exec:function(e){e.selectPageDown()},readOnly:!0},{name:"pagedown",bindKey:s(null,"Option-PageDown"),exec:function(e){e.scrollPageDown()},readOnly:!0},{name:"gotopagedown",bindKey:s("PageDown","PageDown|Ctrl-V"),exec:function(e){e.gotoPageDown()},readOnly:!0},{name:"selectpageup",bindKey:"Shift-PageUp",exec:function(e){e.selectPageUp()},readOnly:!0},{name:"pageup",bindKey:s(null,"Option-PageUp"),exec:function(e){e.scrollPageUp()},readOnly:!0},{name:"gotopageup",bindKey:"PageUp",exec:function(e){e.gotoPageUp()},readOnly:!0},{name:"scrollup",bindKey:s("Ctrl-Up",null),exec:function(e){e.renderer.scrollBy(0,-2*e.renderer.layerConfig.lineHeight)},readOnly:!0},{name:"scrolldown",bindKey:s("Ctrl-Down",null),exec:function(e){e.renderer.scrollBy(0,2*e.renderer.layerConfig.lineHeight)},readOnly:!0},{name:"selectlinestart",bindKey:"Shift-Home",exec:function(e){e.getSelection().selectLineStart()},multiSelectAction:"forEach",readOnly:!0},{name:"selectlineend",bindKey:"Shift-End",exec:function(e){e.getSelection().selectLineEnd()},multiSelectAction:"forEach",readOnly:!0},{name:"togglerecording",bindKey:s("Ctrl-Alt-E","Command-Option-E"),exec:function(e){e.commands.toggleRecording(e)},readOnly:!0},{name:"replaymacro",bindKey:s("Ctrl-Shift-E","Command-Shift-E"),exec:function(e){e.commands.replay(e)},readOnly:!0},{name:"jumptomatching",bindKey:s("Ctrl-P","Ctrl-Shift-P"),exec:function(e){e.jumpToMatching()},multiSelectAction:"forEach",readOnly:!0},{name:"selecttomatching",bindKey:s("Ctrl-Shift-P",null),exec:function(e){e.jumpToMatching(!0)},multiSelectAction:"forEach",readOnly:!0},{name:"cut",exec:function(e){var t=e.getSelectionRange();e._emit("cut",t),e.selection.isEmpty()||(e.session.remove(t),e.clearSelection())},multiSelectAction:"forEach"},{name:"removeline",bindKey:s("Ctrl-D","Command-D"),exec:function(e){e.removeLines()},multiSelectAction:"forEachLine"},{name:"duplicateSelection",bindKey:s("Ctrl-Shift-D","Command-Shift-D"),exec:function(e){e.duplicateSelection()},multiSelectAction:"forEach"},{name:"sortlines",bindKey:s("Ctrl-Alt-S","Command-Alt-S"),exec:function(e){e.sortLines()},multiSelectAction:"forEachLine"},{name:"togglecomment",bindKey:s("Ctrl-/","Command-/"),exec:function(e){e.toggleCommentLines()},multiSelectAction:"forEachLine"},{name:"toggleBlockComment",bindKey:s("Ctrl-Shift-/","Command-Shift-/"),exec:function(e){e.toggleBlockComment()},multiSelectAction:"forEach"},{name:"modifyNumberUp",bindKey:s("Ctrl-Shift-Up","Alt-Shift-Up"),exec:function(e){e.modifyNumber(1)},multiSelectAction:"forEach"},{name:"modifyNumberDown",bindKey:s("Ctrl-Shift-Down","Alt-Shift-Down"),exec:function(e){e.modifyNumber(-1)},multiSelectAction:"forEach"},{name:"replace",bindKey:s("Ctrl-H","Command-Option-F"),exec:function(e){i.loadModule("ace/ext/searchbox",function(t){t.Search(e,!0)})}},{name:"undo",bindKey:s("Ctrl-Z","Command-Z"),exec:function(e){e.undo()}},{name:"redo",bindKey:s("Ctrl-Shift-Z|Ctrl-Y","Command-Shift-Z|Command-Y"),exec:function(e){e.redo()}},{name:"copylinesup",bindKey:s("Alt-Shift-Up","Command-Option-Up"),exec:function(e){e.copyLinesUp()}},{name:"movelinesup",bindKey:s("Alt-Up","Option-Up"),exec:function(e){e.moveLinesUp()}},{name:"copylinesdown",bindKey:s("Alt-Shift-Down","Command-Option-Down"),exec:function(e){e.copyLinesDown()}},{name:"movelinesdown",bindKey:s("Alt-Down","Option-Down"),exec:function(e){e.moveLinesDown()}},{name:"del",bindKey:s("Delete","Delete|Ctrl-D"),exec:function(e){e.remove("right")},multiSelectAction:"forEach"},{name:"backspace",bindKey:s("Command-Backspace|Option-Backspace|Shift-Backspace|Backspace","Ctrl-Backspace|Command-Backspace|Shift-Backspace|Backspace|Ctrl-H"),exec:function(e){e.remove("left")},multiSelectAction:"forEach"},{name:"removetolinestart",bindKey:s("Alt-Backspace","Command-Backspace"),exec:function(e){e.removeToLineStart()},multiSelectAction:"forEach"},{name:"removetolineend",bindKey:s("Alt-Delete","Ctrl-K"),exec:function(e){e.removeToLineEnd()},multiSelectAction:"forEach"},{name:"removewordleft",bindKey:s("Ctrl-Backspace","Alt-Backspace|Ctrl-Alt-Backspace"),exec:function(e){e.removeWordLeft()},multiSelectAction:"forEach"},{name:"removewordright",bindKey:s("Ctrl-Delete","Alt-Delete"),exec:function(e){e.removeWordRight()},multiSelectAction:"forEach"},{name:"outdent",bindKey:s("Shift-Tab","Shift-Tab"),exec:function(e){e.blockOutdent()},multiSelectAction:"forEach"},{name:"indent",bindKey:s("Tab","Tab"),exec:function(e){e.indent()},multiSelectAction:"forEach"},{name:"blockoutdent",bindKey:s("Ctrl-[","Ctrl-["),exec:function(e){e.blockOutdent()},multiSelectAction:"forEachLine"},{name:"blockindent",bindKey:s("Ctrl-]","Ctrl-]"),exec:function(e){e.blockIndent()},multiSelectAction:"forEachLine"},{name:"insertstring",exec:function(e,t){e.insert(t)},multiSelectAction:"forEach"},{name:"inserttext",exec:function(e,t){e.insert(r.stringRepeat(t.text||"",t.times||1))},multiSelectAction:"forEach"},{name:"splitline",bindKey:s(null,"Ctrl-O"),exec:function(e){e.splitLine()},multiSelectAction:"forEach"},{name:"transposeletters",bindKey:s("Ctrl-T","Ctrl-T"),exec:function(e){e.transposeLetters()},multiSelectAction:function(e){e.transposeSelections(1)}},{name:"touppercase",bindKey:s("Ctrl-U","Ctrl-U"),exec:function(e){e.toUpperCase()},multiSelectAction:"forEach"},{name:"tolowercase",bindKey:s("Ctrl-Shift-U","Ctrl-Shift-U"),exec:function(e){e.toLowerCase()},multiSelectAction:"forEach"}]}),ace.define("ace/undomanager",["require","exports","module"],function(e,t,n){var r=function(){this.reset()};(function(){this.execute=function(e){var t=e.args[0];this.$doc=e.args[1],this.$undoStack.push(t),this.$redoStack=[],this.dirtyCounter<0&&(this.dirtyCounter=NaN),this.dirtyCounter++},this.undo=function(e){var t=this.$undoStack.pop(),n=null;return t&&(n=this.$doc.undoChanges(t,e),this.$redoStack.push(t),this.dirtyCounter--),n},this.redo=function(e){var t=this.$redoStack.pop(),n=null;return t&&(n=this.$doc.redoChanges(t,e),this.$undoStack.push(t),this.dirtyCounter++),n},this.reset=function(){this.$undoStack=[],this.$redoStack=[],this.dirtyCounter=0},this.hasUndo=function(){return this.$undoStack.length>0},this.hasRedo=function(){return this.$redoStack.length>0},this.markClean=function(){this.dirtyCounter=0},this.isClean=function(){return this.dirtyCounter===0}}).call(r.prototype),t.UndoManager=r}),ace.define("ace/virtual_renderer",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/event","ace/lib/useragent","ace/config","ace/layer/gutter","ace/layer/marker","ace/layer/text","ace/layer/cursor","ace/scrollbar","ace/renderloop","ace/lib/event_emitter"],function(e,t,n){var r=e("./lib/oop"),i=e("./lib/dom"),s=e("./lib/event"),o=e("./lib/useragent"),u=e("./config"),a=e("./layer/gutter").Gutter,f=e("./layer/marker").Marker,l=e("./layer/text").Text,c=e("./layer/cursor").Cursor,h=e("./scrollbar").ScrollBar,p=e("./renderloop").RenderLoop,d=e("./lib/event_emitter").EventEmitter,v=".ace_editor {position: relative;overflow: hidden;font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;font-size: 12px;line-height: normal;color: black;}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;}.ace_content {position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;cursor: text;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUM2OEZDQTQ4RTU0MTFFMUEzM0VFRTM2RUY1M0RBMjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUM2OEZDQTU4RTU0MTFFMUEzM0VFRTM2RUY1M0RBMjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQzY4RkNBMjhFNTQxMUUxQTMzRUVFMzZFRjUzREEyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQzY4RkNBMzhFNTQxMUUxQTMzRUVFMzZFRjUzREEyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkgXxbAAAAJbSURBVHjapFNNaBNBFH4zs5vdZLP5sQmNpT82QY209heh1ioWisaDRcSKF0WKJ0GQnrzrxasHsR6EnlrwD0TagxJabaVEpFYxLWlLSS822tr87m66ccfd2GKyVhA6MMybgfe97/vmPUQphd0sZjto9XIn9OOsvlu2nkqRzVU+6vvlzPf8W6bk8dxQ0NPbxAALgCgg2JkaQuhzQau/El0zbmUA7U0Es8v2CiYmKQJHGO1QICCLoqilMhkmurDAyapKgqItezi/USRdJqEYY4D5jCy03ht2yMkkvL91jTTX10qzyyu2hruPRN7jgbH+EOsXcMLgYiThEgAMhABW85oqy1DXdRIdvP1AHJ2acQXvDIrVHcdQNrEKNYSVMSZGMjEzIIAwDXIo+6G/FxcGnzkC3T2oMhLjre49sBB+RRcHLqdafK6sYdE/GGBwU1VpFNj0aN8pJbe+BkZyevUrvLl6Xmm0W9IuTc0DxrDNAJd5oEvI/KRsNC3bQyNjPO9yQ1YHcfj2QvfQc/5TUhJTBc2iM0U7AWDQtc1nJHvD/cfO2s7jaGkiTEfa/Ep8coLu7zmNmh8+dc5lZDuUeFAGUNA/OY6JVaypQ0vjr7XYjUvJM37vt+j1vuTK5DgVfVUoTjVe+y3/LxMxY2GgU+CSLy4cpfsYorRXuXIOi0Vt40h67uZFTdIo6nLaZcwUJWAzwNS0tBnqqKzQDnjdG/iPyZxo46HaKUpbvYkj8qYRTZsBhge+JHhZyh0x9b95JqjVJkT084kZIPwu/mPWqPgfQ5jXh2+92Ay7HedfAgwA6KDWafb4w3cAAAAASUVORK5CYII=\");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUM2OEZDQTg4RTU0MTFFMUEzM0VFRTM2RUY1M0RBMjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUM2OEZDQTk4RTU0MTFFMUEzM0VFRTM2RUY1M0RBMjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQzY4RkNBNjhFNTQxMUUxQTMzRUVFMzZFRjUzREEyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQzY4RkNBNzhFNTQxMUUxQTMzRUVFMzZFRjUzREEyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pgd7PfIAAAGmSURBVHjaYvr//z8DJZiJgUIANoCRkREb9gLiSVAaQx4OQM7AAkwd7XU2/v++/rOttdYGEB9dASEvOMydGKfH8Gv/p4XTkvRBfLxeQAP+1cUhXopyvzhP7P/IoSj7g7Mw09cNKO6J1QQ0L4gICPIv/veg/8W+JdFvQNLHVsW9/nmn9zk7B+cCkDwhL7gt6knSZnx9/LuCEOcvkIAMP+cvto9nfqyZmmUAksfnBUtbM60gX/3/kgyv3/xSFOL5DZT+L8vP+Yfh5cvfPvp/xUHyQHXGyAYwgpwBjZYFT3Y1OEl/OfCH4ffv3wzc4iwMvNIsDJ+f/mH4+vIPAxsb631WW0Yln6ZpQLXdMK/DXGDflh+sIv37EivD5x//Gb7+YWT4y86sl7BCCkSD+Z++/1dkvsFRl+HnD1Rvje4F8whjMXmGj58YGf5zsDMwcnAwfPvKcml62DsQDeaDxN+/Y0qwlpEHqrdB94IRNIDUgfgfKJChGK4OikEW3gTiXUB950ASLFAF54AC94A0G9QAfOnmF9DCDzABFqS08IHYDIScdijOjQABBgC+/9awBH96jwAAAABJRU5ErkJggg==\");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url(\"data:image/gif;base64,R0lGODlhEAAQAMQAAAAAAEFBQVJSUl5eXmRkZGtra39/f4WFhYmJiZGRkaampry8vMPDw8zMzNXV1dzc3OTk5Orq6vDw8P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABQALAAAAAAQABAAAAUuICWOZGmeaBml5XGwFCQSBGyXRSAwtqQIiRuiwIM5BoYVbEFIyGCQoeJGrVptIQA7\");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRTk5MTVGREIxNDkxMUUxOTc5Q0FFREQyMTNGMjBFQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRTk5MTVGRUIxNDkxMUUxOTc5Q0FFREQyMTNGMjBFQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZFOTkxNUZCQjE0OTExRTE5NzlDQUVERDIxM0YyMEVDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZFOTkxNUZDQjE0OTExRTE5NzlDQUVERDIxM0YyMEVDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+SIDkjAAAAJ1JREFUeNpi/P//PwMlgImBQkB7A6qrq/+DMC55FkIGKCoq4pVnpFkgTp069f/+/fv/r1u37r+tre1/kg0A+ptn9uzZYLaRkRHpLvjw4cNXWVlZhufPnzOcO3eOdAO0tbVPAjHDmzdvGA4fPsxIsgGSkpJmv379Ynj37h2DjIyMCMkG3LhxQ/T27dsMampqDHZ2dq/pH41DxwCAAAMAFdc68dUsFZgAAAAASUVORK5CYII=\");}.ace_scrollbar {position: absolute;overflow-x: hidden;overflow-y: scroll;right: 0;top: 0;bottom: 0;}.ace_scrollbar-inner {position: absolute;width: 1px;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;}.ace_text-input.ace_composition {background: #f8f8f8;color: #111;z-index: 1000;opacity: 1;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;white-space: nowrap;height: 100%;width: 100%;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;/* setting pointer-events: auto; on node under the mouse, which changesduring scroll, will break mouse wheel scrolling in Safari */pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;}.ace_text-layer {font: inherit !important;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_smooth-blinking .ace_cursor {-moz-transition: opacity 0.18s;-webkit-transition: opacity 0.18s;-o-transition: opacity 0.18s;-ms-transition: opacity 0.18s;transition: opacity 0.18s;}.ace_cursor[style*=\"opacity: 0\"]{-ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";}.ace_editor.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_line {white-space: nowrap;}.ace_marker-layer .ace_step {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}.ace_line .ace_fold {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%11%00%00%00%09%08%06%00%00%00%D4%E8%C7%0C%00%00%03%1EiCCPICC%20Profile%00%00x%01%85T%DFk%D3P%14%FE%DAe%9D%B0%E1%8B%3Ag%11%09%3Eh%91ndStC%9C%B6kW%BA%CDZ%EA6%B7!H%9B%A6m%5C%9A%C6%24%ED~%B0%07%D9%8Bo%3A%C5w%F1%07%3E%F9%07%0C%D9%83o%7B%92%0D%C6%14a%F8%AC%88%22L%F6%22%B3%9E%9B4M'S%03%B9%F7%BB%DF%F9%EE9'%E7%E4%5E%A0%F9qZ%D3%14%2F%0F%14USO%C5%C2%FC%C4%E4%14%DF%F2%01%5E%1CC%2B%FChM%8B%86%16J%26G%40%0F%D3%B2y%EF%B3%F3%0E%1E%C6lt%EEo%DF%AB%FEc%D5%9A%95%0C%11%F0%1C%20%BE%945%C4%22%E1Y%A0i%5C%D4t%13%E0%D6%89%EF%9D15%C2%CDLsX%A7%04%09%1Fg8oc%81%E1%8C%8D%23%96f45%40%9A%09%C2%07%C5B%3AK%B8%408%98i%E0%F3%0D%D8%CE%81%14%E4'%26%A9%92.%8B%3C%ABER%2F%E5dE%B2%0C%F6%F0%1Fs%83%F2_%B0%A8%94%E9%9B%AD%E7%10%8Dm%9A%19N%D1%7C%8A%DE%1F9%7Dp%8C%E6%00%D5%C1%3F_%18%BDA%B8%9DpX6%E3%A35~B%CD%24%AE%11%26%BD%E7%EEti%98%EDe%9A%97Y)%12%25%1C%24%BCbT%AE3li%E6%0B%03%89%9A%E6%D3%ED%F4P%92%B0%9F4%BF43Y%F3%E3%EDP%95%04%EB1%C5%F5%F6KF%F4%BA%BD%D7%DB%91%93%07%E35%3E%A7)%D6%7F%40%FE%BD%F7%F5r%8A%E5y%92%F0%EB%B4%1E%8D%D5%F4%5B%92%3AV%DB%DB%E4%CD%A6%23%C3%C4wQ%3F%03HB%82%8E%1Cd(%E0%91B%0Ca%9Ac%C4%AA%F8L%16%19%22J%A4%D2itTy%B28%D6%3B(%93%96%ED%1CGx%C9_%0E%B8%5E%16%F5%5B%B2%B8%F6%E0%FB%9E%DD%25%D7%8E%BC%15%85%C5%B7%A3%D8Q%ED%B5%81%E9%BA%B2%13%9A%1B%7Fua%A5%A3n%E17%B9%E5%9B%1Bm%AB%0B%08Q%FE%8A%E5%B1H%5Ee%CAO%82Q%D7u6%E6%90S%97%FCu%0B%CF2%94%EE%25v%12X%0C%BA%AC%F0%5E%F8*l%0AO%85%17%C2%97%BF%D4%C8%CE%DE%AD%11%CB%80q%2C%3E%AB%9ES%CD%C6%EC%25%D2L%D2%EBd%B8%BF%8A%F5B%C6%18%F9%901CZ%9D%BE%24M%9C%8A9%F2%DAP%0B'%06w%82%EB%E6%E2%5C%2F%D7%07%9E%BB%CC%5D%E1%FA%B9%08%AD.r%23%8E%C2%17%F5E%7C!%F0%BE3%BE%3E_%B7o%88a%A7%DB%BE%D3d%EB%A31Z%EB%BB%D3%91%BA%A2%B1z%94%8F%DB'%F6%3D%8E%AA%13%19%B2%B1%BE%B1~V%08%2B%B4%A2cjJ%B3tO%00%03%25mN%97%F3%05%93%EF%11%84%0B%7C%88%AE-%89%8F%ABbW%90O%2B%0Ao%99%0C%5E%97%0CI%AFH%D9.%B0%3B%8F%ED%03%B6S%D6%5D%E6i_s9%F3*p%E9%1B%FD%C3%EB.7U%06%5E%19%C0%D1s.%17%A03u%E4%09%B0%7C%5E%2C%EB%15%DB%1F%3C%9E%B7%80%91%3B%DBc%AD%3Dma%BA%8B%3EV%AB%DBt.%5B%1E%01%BB%0F%AB%D5%9F%CF%AA%D5%DD%E7%E4%7F%0Bx%A3%FC%06%A9%23%0A%D6%C2%A1_2%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%00%B5IDAT(%15%A5%91%3D%0E%02!%10%85ac%E1%05%D6%CE%D6%C6%CE%D2%E8%ED%CD%DE%C0%C6%D6N.%E0V%F8%3D%9Ca%891XH%C2%BE%D9y%3F%90!%E6%9C%C3%BFk%E5%011%C6-%F5%C8N%04%DF%BD%FF%89%DFt%83DN%60%3E%F3%AB%A0%DE%1A%5Dg%BE%10Q%97%1B%40%9C%A8o%10%8F%5E%828%B4%1B%60%87%F6%02%26%85%1Ch%1E%C1%2B%5Bk%FF%86%EE%B7j%09%9A%DA%9B%ACe%A3%F9%EC%DA!9%B4%D5%A6%81%86%86%98%CC%3C%5B%40%FA%81%B3%E9%CB%23%94%C16Azo%05%D4%E1%C1%95a%3B%8A'%A0%E8%CC%17%22%85%1D%BA%00%A2%FA%DC%0A%94%D1%D1%8D%8B%3A%84%17B%C7%60%1A%25Z%FC%8D%00%00%00%00IEND%AEB%60%82\"),url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%007%08%06%00%00%00%C4%DD%80C%00%00%03%1EiCCPICC%20Profile%00%00x%01%85T%DFk%D3P%14%FE%DAe%9D%B0%E1%8B%3Ag%11%09%3Eh%91ndStC%9C%B6kW%BA%CDZ%EA6%B7!H%9B%A6m%5C%9A%C6%24%ED~%B0%07%D9%8Bo%3A%C5w%F1%07%3E%F9%07%0C%D9%83o%7B%92%0D%C6%14a%F8%AC%88%22L%F6%22%B3%9E%9B4M'S%03%B9%F7%BB%DF%F9%EE9'%E7%E4%5E%A0%F9qZ%D3%14%2F%0F%14USO%C5%C2%FC%C4%E4%14%DF%F2%01%5E%1CC%2B%FChM%8B%86%16J%26G%40%0F%D3%B2y%EF%B3%F3%0E%1E%C6lt%EEo%DF%AB%FEc%D5%9A%95%0C%11%F0%1C%20%BE%945%C4%22%E1Y%A0i%5C%D4t%13%E0%D6%89%EF%9D15%C2%CDLsX%A7%04%09%1Fg8oc%81%E1%8C%8D%23%96f45%40%9A%09%C2%07%C5B%3AK%B8%408%98i%E0%F3%0D%D8%CE%81%14%E4'%26%A9%92.%8B%3C%ABER%2F%E5dE%B2%0C%F6%F0%1Fs%83%F2_%B0%A8%94%E9%9B%AD%E7%10%8Dm%9A%19N%D1%7C%8A%DE%1F9%7Dp%8C%E6%00%D5%C1%3F_%18%BDA%B8%9DpX6%E3%A35~B%CD%24%AE%11%26%BD%E7%EEti%98%EDe%9A%97Y)%12%25%1C%24%BCbT%AE3li%E6%0B%03%89%9A%E6%D3%ED%F4P%92%B0%9F4%BF43Y%F3%E3%EDP%95%04%EB1%C5%F5%F6KF%F4%BA%BD%D7%DB%91%93%07%E35%3E%A7)%D6%7F%40%FE%BD%F7%F5r%8A%E5y%92%F0%EB%B4%1E%8D%D5%F4%5B%92%3AV%DB%DB%E4%CD%A6%23%C3%C4wQ%3F%03HB%82%8E%1Cd(%E0%91B%0Ca%9Ac%C4%AA%F8L%16%19%22J%A4%D2itTy%B28%D6%3B(%93%96%ED%1CGx%C9_%0E%B8%5E%16%F5%5B%B2%B8%F6%E0%FB%9E%DD%25%D7%8E%BC%15%85%C5%B7%A3%D8Q%ED%B5%81%E9%BA%B2%13%9A%1B%7Fua%A5%A3n%E17%B9%E5%9B%1Bm%AB%0B%08Q%FE%8A%E5%B1H%5Ee%CAO%82Q%D7u6%E6%90S%97%FCu%0B%CF2%94%EE%25v%12X%0C%BA%AC%F0%5E%F8*l%0AO%85%17%C2%97%BF%D4%C8%CE%DE%AD%11%CB%80q%2C%3E%AB%9ES%CD%C6%EC%25%D2L%D2%EBd%B8%BF%8A%F5B%C6%18%F9%901CZ%9D%BE%24M%9C%8A9%F2%DAP%0B'%06w%82%EB%E6%E2%5C%2F%D7%07%9E%BB%CC%5D%E1%FA%B9%08%AD.r%23%8E%C2%17%F5E%7C!%F0%BE3%BE%3E_%B7o%88a%A7%DB%BE%D3d%EB%A31Z%EB%BB%D3%91%BA%A2%B1z%94%8F%DB'%F6%3D%8E%AA%13%19%B2%B1%BE%B1~V%08%2B%B4%A2cjJ%B3tO%00%03%25mN%97%F3%05%93%EF%11%84%0B%7C%88%AE-%89%8F%ABbW%90O%2B%0Ao%99%0C%5E%97%0CI%AFH%D9.%B0%3B%8F%ED%03%B6S%D6%5D%E6i_s9%F3*p%E9%1B%FD%C3%EB.7U%06%5E%19%C0%D1s.%17%A03u%E4%09%B0%7C%5E%2C%EB%15%DB%1F%3C%9E%B7%80%91%3B%DBc%AD%3Dma%BA%8B%3EV%AB%DBt.%5B%1E%01%BB%0F%AB%D5%9F%CF%AA%D5%DD%E7%E4%7F%0Bx%A3%FC%06%A9%23%0A%D6%C2%A1_2%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%00%3AIDAT8%11c%FC%FF%FF%7F%18%03%1A%60%01%F2%3F%A0%891%80%04%FF%11-%F8%17%9BJ%E2%05%B1ZD%81v%26t%E7%80%F8%A3%82h%A12%1A%20%A3%01%02%0F%01%BA%25%06%00%19%C0%0D%AEF%D5%3ES%00%00%00%00IEND%AEB%60%82\");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;-moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%11%00%00%00%09%08%06%00%00%00%D4%E8%C7%0C%00%00%03%1EiCCPICC%20Profile%00%00x%01%85T%DFk%D3P%14%FE%DAe%9D%B0%E1%8B%3Ag%11%09%3Eh%91ndStC%9C%B6kW%BA%CDZ%EA6%B7!H%9B%A6m%5C%9A%C6%24%ED~%B0%07%D9%8Bo%3A%C5w%F1%07%3E%F9%07%0C%D9%83o%7B%92%0D%C6%14a%F8%AC%88%22L%F6%22%B3%9E%9B4M'S%03%B9%F7%BB%DF%F9%EE9'%E7%E4%5E%A0%F9qZ%D3%14%2F%0F%14USO%C5%C2%FC%C4%E4%14%DF%F2%01%5E%1CC%2B%FChM%8B%86%16J%26G%40%0F%D3%B2y%EF%B3%F3%0E%1E%C6lt%EEo%DF%AB%FEc%D5%9A%95%0C%11%F0%1C%20%BE%945%C4%22%E1Y%A0i%5C%D4t%13%E0%D6%89%EF%9D15%C2%CDLsX%A7%04%09%1Fg8oc%81%E1%8C%8D%23%96f45%40%9A%09%C2%07%C5B%3AK%B8%408%98i%E0%F3%0D%D8%CE%81%14%E4'%26%A9%92.%8B%3C%ABER%2F%E5dE%B2%0C%F6%F0%1Fs%83%F2_%B0%A8%94%E9%9B%AD%E7%10%8Dm%9A%19N%D1%7C%8A%DE%1F9%7Dp%8C%E6%00%D5%C1%3F_%18%BDA%B8%9DpX6%E3%A35~B%CD%24%AE%11%26%BD%E7%EEti%98%EDe%9A%97Y)%12%25%1C%24%BCbT%AE3li%E6%0B%03%89%9A%E6%D3%ED%F4P%92%B0%9F4%BF43Y%F3%E3%EDP%95%04%EB1%C5%F5%F6KF%F4%BA%BD%D7%DB%91%93%07%E35%3E%A7)%D6%7F%40%FE%BD%F7%F5r%8A%E5y%92%F0%EB%B4%1E%8D%D5%F4%5B%92%3AV%DB%DB%E4%CD%A6%23%C3%C4wQ%3F%03HB%82%8E%1Cd(%E0%91B%0Ca%9Ac%C4%AA%F8L%16%19%22J%A4%D2itTy%B28%D6%3B(%93%96%ED%1CGx%C9_%0E%B8%5E%16%F5%5B%B2%B8%F6%E0%FB%9E%DD%25%D7%8E%BC%15%85%C5%B7%A3%D8Q%ED%B5%81%E9%BA%B2%13%9A%1B%7Fua%A5%A3n%E17%B9%E5%9B%1Bm%AB%0B%08Q%FE%8A%E5%B1H%5Ee%CAO%82Q%D7u6%E6%90S%97%FCu%0B%CF2%94%EE%25v%12X%0C%BA%AC%F0%5E%F8*l%0AO%85%17%C2%97%BF%D4%C8%CE%DE%AD%11%CB%80q%2C%3E%AB%9ES%CD%C6%EC%25%D2L%D2%EBd%B8%BF%8A%F5B%C6%18%F9%901CZ%9D%BE%24M%9C%8A9%F2%DAP%0B'%06w%82%EB%E6%E2%5C%2F%D7%07%9E%BB%CC%5D%E1%FA%B9%08%AD.r%23%8E%C2%17%F5E%7C!%F0%BE3%BE%3E_%B7o%88a%A7%DB%BE%D3d%EB%A31Z%EB%BB%D3%91%BA%A2%B1z%94%8F%DB'%F6%3D%8E%AA%13%19%B2%B1%BE%B1~V%08%2B%B4%A2cjJ%B3tO%00%03%25mN%97%F3%05%93%EF%11%84%0B%7C%88%AE-%89%8F%ABbW%90O%2B%0Ao%99%0C%5E%97%0CI%AFH%D9.%B0%3B%8F%ED%03%B6S%D6%5D%E6i_s9%F3*p%E9%1B%FD%C3%EB.7U%06%5E%19%C0%D1s.%17%A03u%E4%09%B0%7C%5E%2C%EB%15%DB%1F%3C%9E%B7%80%91%3B%DBc%AD%3Dma%BA%8B%3EV%AB%DBt.%5B%1E%01%BB%0F%AB%D5%9F%CF%AA%D5%DD%E7%E4%7F%0Bx%A3%FC%06%A9%23%0A%D6%C2%A1_2%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%00%B5IDAT(%15%A5%91%3D%0E%02!%10%85ac%E1%05%D6%CE%D6%C6%CE%D2%E8%ED%CD%DE%C0%C6%D6N.%E0V%F8%3D%9Ca%891XH%C2%BE%D9y%3F%90!%E6%9C%C3%BFk%E5%011%C6-%F5%C8N%04%DF%BD%FF%89%DFt%83DN%60%3E%F3%AB%A0%DE%1A%5Dg%BE%10Q%97%1B%40%9C%A8o%10%8F%5E%828%B4%1B%60%87%F6%02%26%85%1Ch%1E%C1%2B%5Bk%FF%86%EE%B7j%09%9A%DA%9B%ACe%A3%F9%EC%DA!9%B4%D5%A6%81%86%86%98%CC%3C%5B%40%FA%81%B3%E9%CB%23%94%C16Azo%05%D4%E1%C1%95a%3B%8A'%A0%E8%CC%17%22%85%1D%BA%00%A2%FA%DC%0A%94%D1%D1%8D%8B%3A%84%17B%C7%60%1A%25Z%FC%8D%00%00%00%00IEND%AEB%60%82\"),url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%007%08%06%00%00%00%C4%DD%80C%00%00%03%1EiCCPICC%20Profile%00%00x%01%85T%DFk%D3P%14%FE%DAe%9D%B0%E1%8B%3Ag%11%09%3Eh%91ndStC%9C%B6kW%BA%CDZ%EA6%B7!H%9B%A6m%5C%9A%C6%24%ED~%B0%07%D9%8Bo%3A%C5w%F1%07%3E%F9%07%0C%D9%83o%7B%92%0D%C6%14a%F8%AC%88%22L%F6%22%B3%9E%9B4M'S%03%B9%F7%BB%DF%F9%EE9'%E7%E4%5E%A0%F9qZ%D3%14%2F%0F%14USO%C5%C2%FC%C4%E4%14%DF%F2%01%5E%1CC%2B%FChM%8B%86%16J%26G%40%0F%D3%B2y%EF%B3%F3%0E%1E%C6lt%EEo%DF%AB%FEc%D5%9A%95%0C%11%F0%1C%20%BE%945%C4%22%E1Y%A0i%5C%D4t%13%E0%D6%89%EF%9D15%C2%CDLsX%A7%04%09%1Fg8oc%81%E1%8C%8D%23%96f45%40%9A%09%C2%07%C5B%3AK%B8%408%98i%E0%F3%0D%D8%CE%81%14%E4'%26%A9%92.%8B%3C%ABER%2F%E5dE%B2%0C%F6%F0%1Fs%83%F2_%B0%A8%94%E9%9B%AD%E7%10%8Dm%9A%19N%D1%7C%8A%DE%1F9%7Dp%8C%E6%00%D5%C1%3F_%18%BDA%B8%9DpX6%E3%A35~B%CD%24%AE%11%26%BD%E7%EEti%98%EDe%9A%97Y)%12%25%1C%24%BCbT%AE3li%E6%0B%03%89%9A%E6%D3%ED%F4P%92%B0%9F4%BF43Y%F3%E3%EDP%95%04%EB1%C5%F5%F6KF%F4%BA%BD%D7%DB%91%93%07%E35%3E%A7)%D6%7F%40%FE%BD%F7%F5r%8A%E5y%92%F0%EB%B4%1E%8D%D5%F4%5B%92%3AV%DB%DB%E4%CD%A6%23%C3%C4wQ%3F%03HB%82%8E%1Cd(%E0%91B%0Ca%9Ac%C4%AA%F8L%16%19%22J%A4%D2itTy%B28%D6%3B(%93%96%ED%1CGx%C9_%0E%B8%5E%16%F5%5B%B2%B8%F6%E0%FB%9E%DD%25%D7%8E%BC%15%85%C5%B7%A3%D8Q%ED%B5%81%E9%BA%B2%13%9A%1B%7Fua%A5%A3n%E17%B9%E5%9B%1Bm%AB%0B%08Q%FE%8A%E5%B1H%5Ee%CAO%82Q%D7u6%E6%90S%97%FCu%0B%CF2%94%EE%25v%12X%0C%BA%AC%F0%5E%F8*l%0AO%85%17%C2%97%BF%D4%C8%CE%DE%AD%11%CB%80q%2C%3E%AB%9ES%CD%C6%EC%25%D2L%D2%EBd%B8%BF%8A%F5B%C6%18%F9%901CZ%9D%BE%24M%9C%8A9%F2%DAP%0B'%06w%82%EB%E6%E2%5C%2F%D7%07%9E%BB%CC%5D%E1%FA%B9%08%AD.r%23%8E%C2%17%F5E%7C!%F0%BE3%BE%3E_%B7o%88a%A7%DB%BE%D3d%EB%A31Z%EB%BB%D3%91%BA%A2%B1z%94%8F%DB'%F6%3D%8E%AA%13%19%B2%B1%BE%B1~V%08%2B%B4%A2cjJ%B3tO%00%03%25mN%97%F3%05%93%EF%11%84%0B%7C%88%AE-%89%8F%ABbW%90O%2B%0Ao%99%0C%5E%97%0CI%AFH%D9.%B0%3B%8F%ED%03%B6S%D6%5D%E6i_s9%F3*p%E9%1B%FD%C3%EB.7U%06%5E%19%C0%D1s.%17%A03u%E4%09%B0%7C%5E%2C%EB%15%DB%1F%3C%9E%B7%80%91%3B%DBc%AD%3Dma%BA%8B%3EV%AB%DBt.%5B%1E%01%BB%0F%AB%D5%9F%CF%AA%D5%DD%E7%E4%7F%0Bx%A3%FC%06%A9%23%0A%D6%C2%A1_2%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%003IDAT8%11c%FC%FF%FF%7F%3E%03%1A%60%01%F2%3F%A3%891%80%04%FFQ%26%F8w%C0%B43%A1%DB%0C%E2%8F%0A%A2%85%CAh%80%8C%06%08%3C%04%E8%96%18%00%A3S%0D%CD%CF%D8%C1%9D%00%00%00%00IEND%AEB%60%82\");background-repeat: no-repeat, repeat-x;background-position: center center, top left;}.ace_editor.ace_dragging .ace_content {cursor: move;}.ace_gutter-tooltip {background-color: #FFF;background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.1));background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;display: inline-block;max-width: 500px;padding: 4px;position: fixed;z-index: 300;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;cursor: default;white-space: pre-line;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%00%05%08%06%00%00%00%8Do%26%E5%00%00%004IDATx%DAe%8A%B1%0D%000%0C%C2%F2%2CK%96%BC%D0%8F9%81%88H%E9%D0%0E%96%C0%10%92%3E%02%80%5E%82%E4%A9*-%EEsw%C8%CC%11%EE%96w%D8%DC%E9*Eh%0C%151(%00%00%00%00IEND%AEB%60%82\");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%00%05%08%06%00%00%00%8Do%26%E5%00%00%004IDATx%DAm%C7%C1%09%000%08C%D1%8C%ECE%C8E(%8E%EC%02)%1EZJ%F1%C1'%04%07I%E1%E5%EE%CAL%F5%A2%99%99%22%E2%D6%1FU%B5%FE0%D9x%A7%26Wz5%0E%D5%00%00%00%00IEND%AEB%60%82\");}.ace_fold-widget.ace_closed {background-image: url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%03%00%00%00%06%08%06%00%00%00%06%E5%24%0C%00%00%009IDATx%DA5%CA%C1%09%000%08%03%C0%AC*(%3E%04%C1%0D%BA%B1%23%A4Uh%E0%20%81%C0%CC%F8%82%81%AA%A2%AArGfr%88%08%11%11%1C%DD%7D%E0%EE%5B%F6%F6%CB%B8%05Q%2F%E9tai%D9%00%00%00%00IEND%AEB%60%82\");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);-moz-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);-webkit-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);-moz-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);-webkit-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}/*** Dark version for fold widgets*/.ace_dark .ace_fold-widget {background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC\");}.ace_dark .ace_fold-widget.ace_end {background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==\");}.ace_dark .ace_fold-widget.ace_closed {background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==\");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {-moz-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);-webkit-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {-moz-transition: opacity 0.4s ease 0.05s;-webkit-transition: opacity 0.4s ease 0.05s;-o-transition: opacity 0.4s ease 0.05s;-ms-transition: opacity 0.4s ease 0.05s;transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {-moz-transition: opacity 0.05s ease 0.05s;-webkit-transition: opacity 0.05s ease 0.05s;-o-transition: opacity 0.05s ease 0.05s;-ms-transition: opacity 0.05s ease 0.05s;transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}";i.importCssString(v,"ace_editor");var m=function(e,t){var n=this;this.container=e||i.createElement("div"),this.$keepTextAreaAtCursor=!o.isIE,i.addCssClass(this.container,"ace_editor"),this.setTheme(t),this.$gutter=i.createElement("div"),this.$gutter.className="ace_gutter",this.container.appendChild(this.$gutter),this.scroller=i.createElement("div"),this.scroller.className="ace_scroller",this.container.appendChild(this.scroller),this.content=i.createElement("div"),this.content.className="ace_content",this.scroller.appendChild(this.content),this.$gutterLayer=new a(this.$gutter),this.$gutterLayer.on("changeGutterWidth",this.onGutterResize.bind(this)),this.$markerBack=new f(this.content);var r=this.$textLayer=new l(this.content);this.canvas=r.element,this.$markerFront=new f(this.content),this.$cursorLayer=new c(this.content),this.$horizScroll=!1,this.scrollBar=new h(this.container),this.scrollBar.addEventListener("scroll",function(e){n.$scrollAnimation||n.session.setScrollTop(e.data)}),this.scrollTop=0,this.scrollLeft=0,s.addListener(this.scroller,"scroll",function(){var e=n.scroller.scrollLeft;n.scrollLeft=e,n.session.setScrollLeft(e)}),this.cursorPos={row:0,column:0},this.$textLayer.addEventListener("changeCharacterSize",function(){n.updateCharacterSize(),n.onResize(!0)}),this.$size={width:0,height:0,scrollerHeight:0,scrollerWidth:0},this.layerConfig={width:1,padding:0,firstRow:0,firstRowScreen:0,lastRow:0,lineHeight:1,characterWidth:1,minHeight:1,maxHeight:1,offset:0,height:1},this.$loop=new p(this.$renderChanges.bind(this),this.container.ownerDocument.defaultView),this.$loop.schedule(this.CHANGE_FULL),this.updateCharacterSize(),this.setPadding(4),u.resetOptions(this),u._emit("renderer",this)};(function(){this.CHANGE_CURSOR=1,this.CHANGE_MARKER=2,this.CHANGE_GUTTER=4,this.CHANGE_SCROLL=8,this.CHANGE_LINES=16,this.CHANGE_TEXT=32,this.CHANGE_SIZE=64,this.CHANGE_MARKER_BACK=128,this.CHANGE_MARKER_FRONT=256,this.CHANGE_FULL=512,this.CHANGE_H_SCROLL=1024,r.implement(this,d),this.updateCharacterSize=function(){this.$textLayer.allowBoldFonts!=this.$allowBoldFonts&&(this.$allowBoldFonts=this.$textLayer.allowBoldFonts,this.setStyle("ace_nobold",!this.$allowBoldFonts)),this.characterWidth=this.$textLayer.getCharacterWidth(),this.lineHeight=this.$textLayer.getLineHeight(),this.$updatePrintMargin()},this.setSession=function(e){this.session=e,this.scroller.className="ace_scroller",this.$cursorLayer.setSession(e),this.$markerBack.setSession(e),this.$markerFront.setSession(e),this.$gutterLayer.setSession(e),this.$textLayer.setSession(e),this.$loop.schedule(this.CHANGE_FULL)},this.updateLines=function(e,t){t===undefined&&(t=Infinity),this.$changedLines?(this.$changedLines.firstRow>e&&(this.$changedLines.firstRow=e),this.$changedLines.lastRow<t&&(this.$changedLines.lastRow=t)):this.$changedLines={firstRow:e,lastRow:t};if(this.$changedLines.firstRow>this.layerConfig.lastRow||this.$changedLines.lastRow<this.layerConfig.firstRow)return;this.$loop.schedule(this.CHANGE_LINES)},this.onChangeTabSize=function(){this.$loop.schedule(this.CHANGE_TEXT|this.CHANGE_MARKER),this.$textLayer.onChangeTabSize()},this.updateText=function(){this.$loop.schedule(this.CHANGE_TEXT)},this.updateFull=function(e){e?this.$renderChanges(this.CHANGE_FULL,!0):this.$loop.schedule(this.CHANGE_FULL)},this.updateFontSize=function(){this.$textLayer.checkForSizeChanges()},this.onResize=function(e,t,n,r){var s=0,o=this.$size;if(this.resizing>2)return;this.resizing>1?this.resizing++:this.resizing=e?1:0,r||(r=i.getInnerHeight(this.container));if(r&&(e||o.height!=r)){o.height=r,s=this.CHANGE_SIZE,o.scrollerHeight=this.scroller.clientHeight;if(e||!o.scrollerHeight)o.scrollerHeight=o.height,this.$horizScroll&&(o.scrollerHeight-=this.scrollBar.getWidth());this.scrollBar.setHeight(o.scrollerHeight),this.session&&(this.session.setScrollTop(this.getScrollTop()),s|=this.CHANGE_FULL)}n||(n=i.getInnerWidth(this.container));if(n&&(e||this.resizing>1||o.width!=n)){s=this.CHANGE_SIZE,o.width=n;var t=this.$showGutter?this.$gutter.offsetWidth:0;this.scroller.style.left=t+"px",o.scrollerWidth=Math.max(0,n-t-this.scrollBar.getWidth()),this.scroller.style.right=this.scrollBar.getWidth()+"px";if(this.session&&this.session.getUseWrapMode()&&this.adjustWrapLimit()||e)s|=this.CHANGE_FULL}if(!this.$size.scrollerHeight)return;e?this.$renderChanges(s,!0):this.$loop.schedule(s),e&&(this.$gutterLayer.$padding=null),e&&delete this.resizing},this.onGutterResize=function(){var e=this.$size.width,t=this.$showGutter?this.$gutter.offsetWidth:0;this.scroller.style.left=t+"px",this.$size.scrollerWidth=Math.max(0,e-t-this.scrollBar.getWidth()),this.session.getUseWrapMode()&&this.adjustWrapLimit()?this.$loop.schedule(this.CHANGE_FULL):this.$loop.schedule(this.CHANGE_MARKER)},this.adjustWrapLimit=function(){var e=this.$size.scrollerWidth-this.$padding*2,t=Math.floor(e/this.characterWidth);return this.session.adjustWrapLimit(t,this.$showPrintMargin&&this.$printMarginColumn)},this.setAnimatedScroll=function(e){this.setOption("animatedScroll",e)},this.getAnimatedScroll=function(){return this.$animatedScroll},this.setShowInvisibles=function(e){this.setOption("showInvisibles",e)},this.getShowInvisibles=function(){return this.getOption("showInvisibles")},this.getDisplayIndentGuides=function(){return this.getOption("displayIndentGuides")},this.setDisplayIndentGuides=function(e){this.setOption("displayIndentGuides",e)},this.setShowPrintMargin=function(e){this.setOption("showPrintMargin",e)},this.getShowPrintMargin=function(){return this.getOption("showPrintMargin")},this.setPrintMarginColumn=function(e){this.setOption("printMarginColumn",e)},this.getPrintMarginColumn=function(){return this.getOption("printMarginColumn")},this.getShowGutter=function(){return this.getOption("showGutter")},this.setShowGutter=function(e){return this.setOption("showGutter",e)},this.getFadeFoldWidgets=function(){return this.getOption("fadeFoldWidgets")},this.setFadeFoldWidgets=function(e){this.setOption("fadeFoldWidgets",e)},this.setHighlightGutterLine=function(e){this.setOption("highlightGutterLine",e)},this.getHighlightGutterLine=function(){return this.getOption("highlightGutterLine")},this.$updateGutterLineHighlight=function(){var e=this.$cursorLayer.$pixelPos,t=this.layerConfig.lineHeight;if(this.session.getUseWrapMode()){var n=this.session.selection.getCursor();n.column=0,e=this.$cursorLayer.getPixelPosition(n,!0),t*=this.session.getRowLength(n.row)}this.$gutterLineHighlight.style.top=e.top-this.layerConfig.offset+"px",this.$gutterLineHighlight.style.height=t+"px"},this.$updatePrintMargin=function(){if(!this.$showPrintMargin&&!this.$printMarginEl)return;if(!this.$printMarginEl){var e=i.createElement("div");e.className="ace_layer ace_print-margin-layer",this.$printMarginEl=i.createElement("div"),this.$printMarginEl.className="ace_print-margin",e.appendChild(this.$printMarginEl),this.content.insertBefore(e,this.content.firstChild)}var t=this.$printMarginEl.style;t.left=this.characterWidth*this.$printMarginColumn+this.$padding+"px",t.visibility=this.$showPrintMargin?"visible":"hidden",this.session&&this.session.$wrap==-1&&this.adjustWrapLimit()},this.getContainerElement=function(){return this.container},this.getMouseEventTarget=function(){return this.content},this.getTextAreaContainer=function(){return this.container},this.$moveTextAreaToCursor=function(){if(!this.$keepTextAreaAtCursor)return;var e=this.layerConfig,t=this.$cursorLayer.$pixelPos.top,n=this.$cursorLayer.$pixelPos.left;t-=e.offset;var r=this.lineHeight;if(t<0||t>e.height-r)return;var i=this.characterWidth;if(this.$composition){var s=this.textarea.value.replace(/^\x01+/,"");i*=this.session.$getStringScreenWidth(s)[0]+2,r+=2,t-=1}n-=this.scrollLeft,n>this.$size.scrollerWidth-i&&(n=this.$size.scrollerWidth-i),n-=this.scrollBar.width,this.textarea.style.height=r+"px",this.textarea.style.width=i+"px",this.textarea.style.right=Math.max(0,this.$size.scrollerWidth-n-i)+"px",this.textarea.style.bottom=Math.max(0,this.$size.height-t-r)+"px"},this.getFirstVisibleRow=function(){return this.layerConfig.firstRow},this.getFirstFullyVisibleRow=function(){return this.layerConfig.firstRow+(this.layerConfig.offset===0?0:1)},this.getLastFullyVisibleRow=function(){var e=Math.floor((this.layerConfig.height+this.layerConfig.offset)/this.layerConfig.lineHeight);return this.layerConfig.firstRow-1+e},this.getLastVisibleRow=function(){return this.layerConfig.lastRow},this.$padding=null,this.setPadding=function(e){this.$padding=e,this.$textLayer.setPadding(e),this.$cursorLayer.setPadding(e),this.$markerFront.setPadding(e),this.$markerBack.setPadding(e),this.$loop.schedule(this.CHANGE_FULL),this.$updatePrintMargin()},this.getHScrollBarAlwaysVisible=function(){return this.$hScrollBarAlwaysVisible},this.setHScrollBarAlwaysVisible=function(e){this.setOption("hScrollBarAlwaysVisible",e)},this.$updateScrollBar=function(){this.scrollBar.setInnerHeight(this.layerConfig.maxHeight),this.scrollBar.setScrollTop(this.scrollTop)},this.$renderChanges=function(e,t){if(!t&&(!e||!this.session||!this.container.offsetWidth))return;this._signal("beforeRender"),(e&this.CHANGE_FULL||e&this.CHANGE_SIZE||e&this.CHANGE_TEXT||e&this.CHANGE_LINES||e&this.CHANGE_SCROLL)&&this.$computeLayerConfig();if(e&this.CHANGE_H_SCROLL){this.scroller.scrollLeft=this.scrollLeft;var n=this.scroller.scrollLeft;this.scrollLeft=n,this.session.setScrollLeft(n),this.scroller.className=this.scrollLeft==0?"ace_scroller":"ace_scroller ace_scroll-left"}if(e&this.CHANGE_FULL){this.$textLayer.checkForSizeChanges(),this.$updateScrollBar(),this.$textLayer.update(this.layerConfig),this.$showGutter&&this.$gutterLayer.update(this.layerConfig),this.$markerBack.update(this.layerConfig),this.$markerFront.update(this.layerConfig),this.$cursorLayer.update(this.layerConfig),this.$moveTextAreaToCursor(),this.$highlightGutterLine&&this.$updateGutterLineHighlight(),this._signal("afterRender");return}if(e&this.CHANGE_SCROLL){e&this.CHANGE_TEXT||e&this.CHANGE_LINES?this.$textLayer.update(this.layerConfig):this.$textLayer.scrollLines(this.layerConfig),this.$showGutter&&this.$gutterLayer.update(this.layerConfig),this.$markerBack.update(this.layerConfig),this.$markerFront.update(this.layerConfig),this.$cursorLayer.update(this.layerConfig),this.$highlightGutterLine&&this.$updateGutterLineHighlight(),this.$moveTextAreaToCursor(),this.$updateScrollBar(),this._signal("afterRender");return}e&this.CHANGE_TEXT?(this.$textLayer.update(this.layerConfig),this.$showGutter&&this.$gutterLayer.update(this.layerConfig)):e&this.CHANGE_LINES?(this.$updateLines()||e&this.CHANGE_GUTTER&&this.$showGutter)&&this.$gutterLayer.update(this.layerConfig):(e&this.CHANGE_TEXT||e&this.CHANGE_GUTTER)&&this.$showGutter&&this.$gutterLayer.update(this.layerConfig),e&this.CHANGE_CURSOR&&(this.$cursorLayer.update(this.layerConfig),this.$moveTextAreaToCursor(),this.$highlightGutterLine&&this.$updateGutterLineHighlight()),e&(this.CHANGE_MARKER|this.CHANGE_MARKER_FRONT)&&this.$markerFront.update(this.layerConfig),e&(this.CHANGE_MARKER|this.CHANGE_MARKER_BACK)&&this.$markerBack.update(this.layerConfig),e&this.CHANGE_SIZE&&this.$updateScrollBar(),this._signal("afterRender")},this.$computeLayerConfig=function(){if(!this.$size.scrollerHeight)return this.onResize(!0);var e=this.session,t=this.scrollTop%this.lineHeight,n=this.$size.scrollerHeight+this.lineHeight,r=this.$getLongestLine(),i=this.$hScrollBarAlwaysVisible||this.$size.scrollerWidth-r<0,s=this.$horizScroll!==i;this.$horizScroll=i,s&&(this.scroller.style.overflowX=i?"scroll":"hidden",i||this.session.setScrollLeft(0));var o=this.session.getScreenLength()*this.lineHeight;this.session.setScrollTop(Math.max(0,Math.min(this.scrollTop,o-this.$size.scrollerHeight)));var u=Math.ceil(n/this.lineHeight)-1,a=Math.max(0,Math.round((this.scrollTop-t)/this.lineHeight)),f=a+u,l,c,h=this.lineHeight;a=e.screenToDocumentRow(a,0);var p=e.getFoldLine(a);p&&(a=p.start.row),l=e.documentToScreenRow(a,0),c=e.getRowLength(a)*h,f=Math.min(e.screenToDocumentRow(f,0),e.getLength()-1),n=this.$size.scrollerHeight+e.getRowLength(f)*h+c,t=this.scrollTop-l*h,this.layerConfig={width:r,padding:this.$padding,firstRow:a,firstRowScreen:l,lastRow:f,lineHeight:h,characterWidth:this.characterWidth,minHeight:n,maxHeight:o,offset:t,height:this.$size.scrollerHeight},this.$gutterLayer.element.style.marginTop=-t+"px",this.content.style.marginTop=-t+"px",this.content.style.width=r+2*this.$padding+"px",this.content.style.height=n+"px",s&&this.onResize(!0)},this.$updateLines=function(){var e=this.$changedLines.firstRow,t=this.$changedLines.lastRow;this.$changedLines=null;var n=this.layerConfig;if(e>n.lastRow+1)return;if(t<n.firstRow)return;if(t===Infinity){this.$showGutter&&this.$gutterLayer.update(n),this.$textLayer.update(n);return}return this.$textLayer.updateLines(n,e,t),!0},this.$getLongestLine=function(){var e=this.session.getScreenWidth();return this.$textLayer.showInvisibles&&(e+=1),Math.max(this.$size.scrollerWidth-2*this.$padding,Math.round(e*this.characterWidth))},this.updateFrontMarkers=function(){this.$markerFront.setMarkers(this.session.getMarkers(!0)),this.$loop.schedule(this.CHANGE_MARKER_FRONT)},this.updateBackMarkers=function(){this.$markerBack.setMarkers(this.session.getMarkers()),this.$loop.schedule(this.CHANGE_MARKER_BACK)},this.addGutterDecoration=function(e,t){this.$gutterLayer.addGutterDecoration(e,t)},this.removeGutterDecoration=function(e,t){this.$gutterLayer.removeGutterDecoration(e,t)},this.updateBreakpoints=function(e){this.$loop.schedule(this.CHANGE_GUTTER)},this.setAnnotations=function(e){this.$gutterLayer.setAnnotations(e),this.$loop.schedule(this.CHANGE_GUTTER)},this.updateCursor=function(){this.$loop.schedule(this.CHANGE_CURSOR)},this.hideCursor=function(){this.$cursorLayer.hideCursor()},this.showCursor=function(){this.$cursorLayer.showCursor()},this.scrollSelectionIntoView=function(e,t,n){this.scrollCursorIntoView(e,n),this.scrollCursorIntoView(t,n)},this.scrollCursorIntoView=function(e,t){if(this.$size.scrollerHeight===0)return;var n=this.$cursorLayer.getPixelPosition(e),r=n.left,i=n.top;this.scrollTop>i?(t&&(i-=t*this.$size.scrollerHeight),this.session.setScrollTop(i)):this.scrollTop+this.$size.scrollerHeight<i+this.lineHeight&&(t&&(i+=t*this.$size.scrollerHeight),this.session.setScrollTop(i+this.lineHeight-this.$size.scrollerHeight));var s=this.scrollLeft;s>r?(r<this.$padding+2*this.layerConfig.characterWidth&&(r=0),this.session.setScrollLeft(r)):s+this.$size.scrollerWidth<r+this.characterWidth&&this.session.setScrollLeft(Math.round(r+this.characterWidth-this.$size.scrollerWidth))},this.getScrollTop=function(){return this.session.getScrollTop()},this.getScrollLeft=function(){return this.session.getScrollLeft()},this.getScrollTopRow=function(){return this.scrollTop/this.lineHeight},this.getScrollBottomRow=function(){return Math.max(0,Math.floor((this.scrollTop+this.$size.scrollerHeight)/this.lineHeight)-1)},this.scrollToRow=function(e){this.session.setScrollTop(e*this.lineHeight)},this.alignCursor=function(e,t){typeof e=="number"&&(e={row:e,column:0});var n=this.$cursorLayer.getPixelPosition(e),r=this.$size.scrollerHeight-this.lineHeight,i=n.top-r*(t||0);return this.session.setScrollTop(i),i},this.STEPS=8,this.$calcSteps=function(e,t){var n=0,r=this.STEPS,i=[],s=function(e,t,n){return n*(Math.pow(e-1,3)+1)+t};for(n=0;n<r;++n)i.push(s(n/this.STEPS,e,t-e));return i},this.scrollToLine=function(e,t,n,r){var i=this.$cursorLayer.getPixelPosition({row:e,column:0}),s=i.top;t&&(s-=this.$size.scrollerHeight/2);var o=this.scrollTop;this.session.setScrollTop(s),n!==!1&&this.animateScrolling(o,r)},this.animateScrolling=function(e,t){var n=this.scrollTop;if(this.$animatedScroll){var r=this,i=r.$calcSteps(e,n);this.$scrollAnimation={from:e,to:n},clearInterval(this.$timer),r.session.setScrollTop(i.shift()),this.$timer=setInterval(function(){i.length?(r.session.setScrollTop(i.shift()),r.session.$scrollTop=n):n!=null?(r.session.$scrollTop=-1,r.session.setScrollTop(n),n=null):(r.$timer=clearInterval(r.$timer),r.$scrollAnimation=null,t&&t())},10)}},this.scrollToY=function(e){this.scrollTop!==e&&(this.$loop.schedule(this.CHANGE_SCROLL),this.scrollTop=e)},this.scrollToX=function(e){e<0&&(e=0),this.scrollLeft!==e&&(this.scrollLeft=e),this.$loop.schedule(this.CHANGE_H_SCROLL)},this.scrollBy=function(e,t){t&&this.session.setScrollTop(this.session.getScrollTop()+t),e&&this.session.setScrollLeft(this.session.getScrollLeft()+e)},this.isScrollableBy=function(e,t){if(t<0&&this.session.getScrollTop()>=1)return!0;if(t>0&&this.session.getScrollTop()+this.$size.scrollerHeight-this.layerConfig.maxHeight<-1)return!0},this.pixelToScreenCoordinates=function(e,t){var n=this.scroller.getBoundingClientRect(),r=(e+this.scrollLeft-n.left-this.$padding)/this.characterWidth,i=Math.floor((t+this.scrollTop-n.top)/this.lineHeight),s=Math.round(r);return{row:i,column:s,side:r-s>0?1:-1}},this.screenToTextCoordinates=function(e,t){var n=this.scroller.getBoundingClientRect(),r=Math.round((e+this.scrollLeft-n.left-this.$padding)/this.characterWidth),i=Math.floor((t+this.scrollTop-n.top)/this.lineHeight);return this.session.screenToDocumentPosition(i,Math.max(r,0))},this.textToScreenCoordinates=function(e,t){var n=this.scroller.getBoundingClientRect(),r=this.session.documentToScreenPosition(e,t),i=this.$padding+Math.round(r.column*this.characterWidth),s=r.row*this.lineHeight;return{pageX:n.left+i-this.scrollLeft,pageY:n.top+s-this.scrollTop}},this.visualizeFocus=function(){i.addCssClass(this.container,"ace_focus")},this.visualizeBlur=function(){i.removeCssClass(this.container,"ace_focus")},this.showComposition=function(e){this.$composition||(this.$composition={keepTextAreaAtCursor:this.$keepTextAreaAtCursor,cssText:this.textarea.style.cssText}),this.$keepTextAreaAtCursor=!0,i.addCssClass(this.textarea,"ace_composition"),this.textarea.style.cssText="",this.$moveTextAreaToCursor()},this.setCompositionText=function(e){this.$moveTextAreaToCursor()},this.hideComposition=function(){if(!this.$composition)return;i.removeCssClass(this.textarea,"ace_composition"),this.$keepTextAreaAtCursor=this.$composition.keepTextAreaAtCursor,this.textarea.style.cssText=this.$composition.cssText,this.$composition=null},this.setTheme=function(e){function r(n){if(t.$themeValue!=e)return;if(!n.cssClass)return;i.importCssString(n.cssText,n.cssClass,t.container.ownerDocument),t.theme&&i.removeCssClass(t.container,t.theme.cssClass),t.$theme=n.cssClass,t.theme=n,i.addCssClass(t.container,n.cssClass),i.setCssClass(t.container,"ace_dark",n.isDark);var r=n.padding||4;t.$padding&&r!=t.$padding&&t.setPadding(r),t.$size&&(t.$size.width=0,t.onResize()),t._dispatchEvent("themeLoaded",{theme:n})}var t=this;this.$themeValue=e,t._dispatchEvent("themeChange",{theme:e});if(!e||typeof e=="string"){var n=e||"ace/theme/textmate";u.loadModule(["theme",n],r)}else r(e)},this.getTheme=function(){return this.$themeValue},this.setStyle=function(t,n){i.setCssClass(this.container,t,n!=0)},this.unsetStyle=function(t){i.removeCssClass(this.container,t)},this.destroy=function(){this.$textLayer.destroy(),this.$cursorLayer.destroy()}}).call(m.prototype),u.defineOptions(m.prototype,"renderer",{animatedScroll:{initialValue:!1},showInvisibles:{set:function(e){this.$textLayer.setShowInvisibles(e)&&this.$loop.schedule(this.CHANGE_TEXT)},initialValue:!1},showPrintMargin:{set:function(){this.$updatePrintMargin()},initialValue:!0},printMarginColumn:{set:function(){this.$updatePrintMargin()},initialValue:80},printMargin:{set:function(e){typeof e=="number"&&(this.$printMarginColumn=e),this.$showPrintMargin=!!e,this.$updatePrintMargin()},get:function(){return this.$showPrintMargin&&this.$printMarginColumn}},showGutter:{set:function(e){this.$gutter.style.display=e?"block":"none",this.onGutterResize()},initialValue:!0},fadeFoldWidgets:{set:function(e){i.setCssClass(this.$gutter,"ace_fade-fold-widgets",e)},initialValue:!1},showFoldWidgets:{set:function(e){this.$gutterLayer.setShowFoldWidgets(e)},initialValue:!0},displayIndentGuides:{set:function(e){this.$textLayer.setDisplayIndentGuides(e)&&this.$loop.schedule(this.CHANGE_TEXT)},initialValue:!0},highlightGutterLine:{set:function(e){if(!this.$gutterLineHighlight){this.$gutterLineHighlight=i.createElement("div"),this.$gutterLineHighlight.className="ace_gutter-active-line",this.$gutter.appendChild(this.$gutterLineHighlight);return}this.$gutterLineHighlight.style.display=e?"":"none",this.$cursorLayer.$pixelPos&&this.$updateGutterLineHighlight()},initialValue:!1,value:!0},hScrollBarAlwaysVisible:{set:function(e){this.$hScrollBarAlwaysVisible=e,(!this.$hScrollBarAlwaysVisible||!this.$horizScroll)&&this.$loop.schedule(this.CHANGE_SCROLL)},initialValue:!1},fontSize:{set:function(e){typeof e=="number"&&(e+="px"),this.container.style.fontSize=e,this.updateFontSize()},initialValue:12},fontFamily:{set:function(e){this.container.style.fontFamily=e,this.updateFontSize()}}}),t.VirtualRenderer=m}),ace.define("ace/layer/gutter",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/lang","ace/lib/event_emitter"],function(e,t,n){var r=e("../lib/dom"),i=e("../lib/oop"),s=e("../lib/lang"),o=e("../lib/event_emitter").EventEmitter,u=function(e){this.element=r.createElement("div"),this.element.className="ace_layer ace_gutter-layer",e.appendChild(this.element),this.setShowFoldWidgets(this.$showFoldWidgets),this.gutterWidth=0,this.$annotations=[],this.$updateAnnotations=this.$updateAnnotations.bind(this)};(function(){i.implement(this,o),this.setSession=function(e){this.session&&this.session.removeEventListener("change",this.$updateAnnotations),this.session=e,e.on("change",this.$updateAnnotations)},this.addGutterDecoration=function(e,t){window.console&&console.warn&&console.warn("deprecated use session.addGutterDecoration"),this.session.addGutterDecoration(e,t)},this.removeGutterDecoration=function(e,t){window.console&&console.warn&&console.warn("deprecated use session.removeGutterDecoration"),this.session.removeGutterDecoration(e,t)},this.setAnnotations=function(e){this.$annotations=[];var t,n;for(var r=0;r<e.length;r++){var i=e[r],n=i.row,t=this.$annotations[n];t||(t=this.$annotations[n]={text:[]});var o=i.text;o=o?s.escapeHTML(o):i.html||"",t.text.indexOf(o)===-1&&t.text.push(o);var u=i.type;u=="error"?t.className=" ace_error":u=="warning"&&t.className!=" ace_error"?t.className=" ace_warning":u=="info"&&!t.className&&(t.className=" ace_info")}},this.$updateAnnotations=function(e){if(!this.$annotations.length)return;var t=e.data,n=t.range,r=n.start.row,i=n.end.row-r;if(i!==0)if(t.action=="removeText"||t.action=="removeLines")this.$annotations.splice(r,i+1,null);else{var s=Array(i+1);s.unshift(r,1),this.$annotations.splice.apply(this.$annotations,s)}},this.update=function(e){var t={className:""},n=[],i=e.firstRow,s=e.lastRow,o=this.session.getNextFoldLine(i),u=o?o.start.row:Infinity,a=this.$showFoldWidgets&&this.session.foldWidgets,f=this.session.$breakpoints,l=this.session.$decorations,c=this.session.$firstLineNumber,h=0;for(;;){i>u&&(i=o.end.row+1,o=this.session.getNextFoldLine(i,o),u=o?o.start.row:Infinity);if(i>s)break;var p=this.$annotations[i]||t;n.push("<div class='ace_gutter-cell ",f[i]||"",l[i]||"",p.className,"' style='height:",this.session.getRowLength(i)*e.lineHeight,"px;'>",h=i+c);if(a){var d=a[i];d==null&&(d=a[i]=this.session.getFoldWidget(i)),d&&n.push("<span class='ace_fold-widget ace_",d,d=="start"&&i==u&&i<o.end.row?" ace_closed":" ace_open","' style='height:",e.lineHeight,"px","'></span>")}n.push("</div>"),i++}this.element=r.setInnerHtml(this.element,n.join("")),this.element.style.height=e.minHeight+"px",this.session.$useWrapMode&&(h=this.session.getLength());var v=(""+h).length*e.characterWidth,m=this.$padding||this.$computePadding();v+=m.left+m.right,v!==this.gutterWidth&&(this.gutterWidth=v,this.element.style.width=Math.ceil(this.gutterWidth)+"px",this._emit("changeGutterWidth",v))},this.$showFoldWidgets=!0,this.setShowFoldWidgets=function(e){e?r.addCssClass(this.element,"ace_folding-enabled"):r.removeCssClass(this.element,"ace_folding-enabled"),this.$showFoldWidgets=e,this.$padding=null},this.getShowFoldWidgets=function(){return this.$showFoldWidgets},this.$computePadding=function(){if(!this.element.firstChild)return{left:0,right:0};var e=r.computedStyle(this.element.firstChild);return this.$padding={},this.$padding.left=parseInt(e.paddingLeft)+1,this.$padding.right=parseInt(e.paddingRight),this.$padding},this.getRegion=function(e){var t=this.$padding||this.$computePadding(),n=this.element.getBoundingClientRect();if(e.x<t.left+n.left)return"markers";if(this.$showFoldWidgets&&e.x>n.right-t.right)return"foldWidgets"}}).call(u.prototype),t.Gutter=u}),ace.define("ace/layer/marker",["require","exports","module","ace/range","ace/lib/dom"],function(e,t,n){var r=e("../range").Range,i=e("../lib/dom"),s=function(e){this.element=i.createElement("div"),this.element.className="ace_layer ace_marker-layer",e.appendChild(this.element)};(function(){this.$padding=0,this.setPadding=function(e){this.$padding=e},this.setSession=function(e){this.session=e},this.setMarkers=function(e){this.markers=e},this.update=function(e){var e=e||this.config;if(!e)return;this.config=e;var t=[];for(var n in this.markers){var r=this.markers[n];if(!r.range){r.update(t,this,this.session,e);continue}var s=r.range.clipRows(e.firstRow,e.lastRow);if(s.isEmpty())continue;s=s.toScreenRange(this.session);if(r.renderer){var o=this.$getTop(s.start.row,e),u=this.$padding+s.start.column*e.characterWidth;r.renderer(t,s,u,o,e)}else r.type=="fullLine"?this.drawFullLineMarker(t,s,r.clazz,e):r.type=="screenLine"?this.drawScreenLineMarker(t,s,r.clazz,e):s.isMultiLine()?r.type=="text"?this.drawTextMarker(t,s,r.clazz,e):this.drawMultiLineMarker(t,s,r.clazz,e):this.drawSingleLineMarker(t,s,r.clazz+" ace_start",e)}this.element=i.setInnerHtml(this.element,t.join(""))},this.$getTop=function(e,t){return(e-t.firstRowScreen)*t.lineHeight},this.drawTextMarker=function(e,t,n,i,s){var o=t.start.row,u=new r(o,t.start.column,o,this.session.getScreenLastRowColumn(o));this.drawSingleLineMarker(e,u,n+" ace_start",i,1,s),o=t.end.row,u=new r(o,0,o,t.end.column),this.drawSingleLineMarker(e,u,n,i,0,s);for(o=t.start.row+1;o<t.end.row;o++)u.start.row=o,u.end.row=o,u.end.column=this.session.getScreenLastRowColumn(o),this.drawSingleLineMarker(e,u,n,i,1,s)},this.drawMultiLineMarker=function(e,t,n,r,i){var s=this.$padding,o=r.lineHeight,u=this.$getTop(t.start.row,r),a=s+t.start.column*r.characterWidth;i=i||"",e.push("<div class='",n," ace_start' style='","height:",o,"px;","right:0;","top:",u,"px;","left:",a,"px;",i,"'></div>"),u=this.$getTop(t.end.row,r);var f=t.end.column*r.characterWidth;e.push("<div class='",n,"' style='","height:",o,"px;","width:",f,"px;","top:",u,"px;","left:",s,"px;",i,"'></div>"),o=(t.end.row-t.start.row-1)*r.lineHeight;if(o<0)return;u=this.$getTop(t.start.row+1,r),e.push("<div class='",n,"' style='","height:",o,"px;","right:0;","top:",u,"px;","left:",s,"px;",i,"'></div>")},this.drawSingleLineMarker=function(e,t,n,r,i,s){var o=r.lineHeight,u=(t.end.column+(i||0)-t.start.column)*r.characterWidth,a=this.$getTop(t.start.row,r),f=this.$padding+t.start.column*r.characterWidth;e.push("<div class='",n,"' style='","height:",o,"px;","width:",u,"px;","top:",a,"px;","left:",f,"px;",s||"","'></div>")},this.drawFullLineMarker=function(e,t,n,r,i){var s=this.$getTop(t.start.row,r),o=r.lineHeight;t.start.row!=t.end.row&&(o+=this.$getTop(t.end.row,r)-s),e.push("<div class='",n,"' style='","height:",o,"px;","top:",s,"px;","left:0;right:0;",i||"","'></div>")},this.drawScreenLineMarker=function(e,t,n,r,i){var s=this.$getTop(t.start.row,r),o=r.lineHeight;e.push("<div class='",n,"' style='","height:",o,"px;","top:",s,"px;","left:0;right:0;",i||"","'></div>")}}).call(s.prototype),t.Marker=s}),ace.define("ace/layer/text",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/lang","ace/lib/useragent","ace/lib/event_emitter"],function(e,t,n){var r=e("../lib/oop"),i=e("../lib/dom"),s=e("../lib/lang"),o=e("../lib/useragent"),u=e("../lib/event_emitter").EventEmitter,a=function(e){this.element=i.createElement("div"),this.element.className="ace_layer ace_text-layer",e.appendChild(this.element),this.$characterSize={width:0,height:0},this.checkForSizeChanges(),this.$pollSizeChanges()};(function(){r.implement(this,u),this.EOF_CHAR="¶",this.EOL_CHAR="¬",this.TAB_CHAR="→",this.SPACE_CHAR="·",this.$padding=0,this.setPadding=function(e){this.$padding=e,this.element.style.padding="0 "+e+"px"},this.getLineHeight=function(){return this.$characterSize.height||1},this.getCharacterWidth=function(){return this.$characterSize.width||1},this.checkForSizeChanges=function(){var e=this.$measureSizes();if(e&&(this.$characterSize.width!==e.width||this.$characterSize.height!==e.height)){this.$measureNode.style.fontWeight="bold";var t=this.$measureSizes();this.$measureNode.style.fontWeight="",this.$characterSize=e,this.allowBoldFonts=t&&t.width===e.width&&t.height===e.height,this._emit("changeCharacterSize",{data:e})}},this.$pollSizeChanges=function(){var e=this;this.$pollSizeChangesTimer=setInterval(function(){e.checkForSizeChanges()},500)},this.$fontStyles={fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},this.$measureSizes=o.isIE||o.isOldGecko?function(){var e=1e3;if(!this.$measureNode){var t=this.$measureNode=i.createElement("div"),n=t.style;n.width=n.height="auto",n.left=n.top=-e*40+"px",n.visibility="hidden",n.position="fixed",n.overflow="visible",n.whiteSpace="nowrap",t.innerHTML=s.stringRepeat("Xy",e);if(this.element.ownerDocument.body)this.element.ownerDocument.body.appendChild(t);else{var r=this.element.parentNode;while(!i.hasCssClass(r,"ace_editor"))r=r.parentNode;r.appendChild(t)}}if(!this.element.offsetWidth)return null;var n=this.$measureNode.style,o=i.computedStyle(this.element);for(var u in this.$fontStyles)n[u]=o[u];var a={height:this.$measureNode.offsetHeight,width:this.$measureNode.offsetWidth/(e*2)};return a.width==0||a.height==0?null:a}:function(){if(!this.$measureNode){var e=this.$measureNode=i.createElement("div"),t=e.style;t.width=t.height="auto",t.left=t.top="-100px",t.visibility="hidden",t.position="fixed",t.overflow="visible",t.whiteSpace="nowrap",e.innerHTML="X";var n=this.element.parentNode;while(n&&!i.hasCssClass(n,"ace_editor"))n=n.parentNode;if(!n)return this.$measureNode=null;n.appendChild(e)}var r=this.$measureNode.getBoundingClientRect(),s={height:r.height,width:r.width};return s.width==0||s.height==0?null:s},this.setSession=function(e){this.session=e,this.$computeTabString()},this.showInvisibles=!1,this.setShowInvisibles=function(e){return this.showInvisibles==e?!1:(this.showInvisibles=e,this.$computeTabString(),!0)},this.displayIndentGuides=!0,this.setDisplayIndentGuides=function(e){return this.displayIndentGuides==e?!1:(this.displayIndentGuides=e,this.$computeTabString(),!0)},this.$tabStrings=[],this.onChangeTabSize=this.$computeTabString=function(){var e=this.session.getTabSize();this.tabSize=e;var t=this.$tabStrings=[0];for(var n=1;n<e+1;n++)this.showInvisibles?t.push("<span class='ace_invisible'>"+this.TAB_CHAR+s.stringRepeat(" ",n-1)+"</span>"):t.push(s.stringRepeat(" ",n));if(this.displayIndentGuides){this.$indentGuideRe=/\s\S| \t|\t |\s$/;var r="ace_indent-guide";if(this.showInvisibles){r+=" ace_invisible";var i=s.stringRepeat(this.SPACE_CHAR,this.tabSize),o=this.TAB_CHAR+s.stringRepeat(" ",this.tabSize-1)}else var i=s.stringRepeat(" ",this.tabSize),o=i;this.$tabStrings[" "]="<span class='"+r+"'>"+i+"</span>",this.$tabStrings["	"]="<span class='"+r+"'>"+o+"</span>"}},this.updateLines=function(e,t,n){(this.config.lastRow!=e.lastRow||this.config.firstRow!=e.firstRow)&&this.scrollLines(e),this.config=e;var r=Math.max(t,e.firstRow),s=Math.min(n,e.lastRow),o=this.element.childNodes,u=0;for(var a=e.firstRow;a<r;a++){var f=this.session.getFoldLine(a);if(f){if(f.containsRow(r)){r=f.start.row;break}a=f.end.row}u++}var a=r,f=this.session.getNextFoldLine(a),l=f?f.start.row:Infinity;for(;;){a>l&&(a=f.end.row+1,f=this.session.getNextFoldLine(a,f),l=f?f.start.row:Infinity);if(a>s)break;var c=o[u++];if(c){var h=[];this.$renderLine(h,a,!this.$useLineGroups(),a==l?f:!1),i.setInnerHtml(c,h.join(""))}a++}},this.scrollLines=function(e){var t=this.config;this.config=e;if(!t||t.lastRow<e.firstRow)return this.update(e);if(e.lastRow<t.firstRow)return this.update(e);var n=this.element;if(t.firstRow<e.firstRow)for(var r=this.session.getFoldedRowCount(t.firstRow,e.firstRow-1);r>0;r--)n.removeChild(n.firstChild);if(t.lastRow>e.lastRow)for(var r=this.session.getFoldedRowCount(e.lastRow+1,t.lastRow);r>0;r--)n.removeChild(n.lastChild);if(e.firstRow<t.firstRow){var i=this.$renderLinesFragment(e,e.firstRow,t.firstRow-1);n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i)}if(e.lastRow>t.lastRow){var i=this.$renderLinesFragment(e,t.lastRow+1,e.lastRow);n.appendChild(i)}},this.$renderLinesFragment=function(e,t,n){var r=this.element.ownerDocument.createDocumentFragment(),s=t,o=this.session.getNextFoldLine(s),u=o?o.start.row:Infinity;for(;;){s>u&&(s=o.end.row+1,o=this.session.getNextFoldLine(s,o),u=o?o.start.row:Infinity);if(s>n)break;var a=i.createElement("div"),f=[];this.$renderLine(f,s,!1,s==u?o:!1),a.innerHTML=f.join("");if(this.$useLineGroups())a.className="ace_line_group",r.appendChild(a);else{var l=a.childNodes;while(l.length)r.appendChild(l[0])}s++}return r},this.update=function(e){this.config=e;var t=[],n=e.firstRow,r=e.lastRow,s=n,o=this.session.getNextFoldLine(s),u=o?o.start.row:Infinity;for(;;){s>u&&(s=o.end.row+1,o=this.session.getNextFoldLine(s,o),u=o?o.start.row:Infinity);if(s>r)break;this.$useLineGroups()&&t.push("<div class='ace_line_group'>"),this.$renderLine(t,s,!1,s==u?o:!1),this.$useLineGroups()&&t.push("</div>"),s++}this.element=i.setInnerHtml(this.element,t.join(""))},this.$textToken={text:!0,rparen:!0,lparen:!0},this.$renderToken=function(e,t,n,r){var i=this,o=/\t|&|<|( +)|([\x00-\x1f\x80-\xa0\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\u3000\uFEFF])|[\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3000-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]/g,u=function(e,n,r,o,u){if(n)return i.showInvisibles?"<span class='ace_invisible'>"+s.stringRepeat(i.SPACE_CHAR,e.length)+"</span>":s.stringRepeat(" ",e.length);if(e=="&")return"&#38;";if(e=="<")return"&#60;";if(e=="	"){var a=i.session.getScreenTabSize(t+o);return t+=a-1,i.$tabStrings[a]}if(e=="　"){var f=i.showInvisibles?"ace_cjk ace_invisible":"ace_cjk",l=i.showInvisibles?i.SPACE_CHAR:"";return t+=1,"<span class='"+f+"' style='width:"+i.config.characterWidth*2+"px'>"+l+"</span>"}return r?"<span class='ace_invisible ace_invalid'>"+i.SPACE_CHAR+"</span>":(t+=1,"<span class='ace_cjk' style='width:"+i.config.characterWidth*2+"px'>"+e+"</span>")},a=r.replace(o,u);if(!this.$textToken[n.type]){var f="ace_"+n.type.replace(/\./g," ace_"),l="";n.type=="fold"&&(l=" style='width:"+n.value.length*this.config.characterWidth+"px;' "),e.push("<span class='",f,"'",l,">",a,"</span>")}else e.push(a);return t+r.length},this.renderIndentGuide=function(e,t){var n=t.search(this.$indentGuideRe);return n<=0?t:t[0]==" "?(n-=n%this.tabSize,e.push(s.stringRepeat(this.$tabStrings[" "],n/this.tabSize)),t.substr(n)):t[0]=="	"?(e.push(s.stringRepeat(this.$tabStrings["	"],n)),t.substr(n)):t},this.$renderWrappedLine=function(e,t,n,r){var i=0,s=0,o=n[0],u=0;for(var a=0;a<t.length;a++){var f=t[a],l=f.value;if(a==0&&this.displayIndentGuides){i=l.length,l=this.renderIndentGuide(e,l);if(!l)continue;i-=l.length}if(i+l.length<o)u=this.$renderToken(e,u,f,l),i+=l.length;else{while(i+l.length>=o)u=this.$renderToken(e,u,f,l.substring(0,o-i)),l=l.substring(o-i),i=o,r||e.push("</div>","<div class='ace_line' style='height:",this.config.lineHeight,"px'>"),s++,u=0,o=n[s]||Number.MAX_VALUE;l.length!=0&&(i+=l.length,u=this.$renderToken(e,u,f,l))}}},this.$renderSimpleLine=function(e,t){var n=0,r=t[0],i=r.value;this.displayIndentGuides&&(i=this.renderIndentGuide(e,i)),i&&(n=this.$renderToken(e,n,r,i));for(var s=1;s<t.length;s++)r=t[s],i=r.value,n=this.$renderToken(e,n,r,i)},this.$renderLine=function(e,t,n,r){!r&&r!=0&&(r=this.session.getFoldLine(t));if(r)var i=this.$getFoldLineTokens(t,r);else var i=this.session.getTokens(t);n||e.push("<div class='ace_line' style='height:",this.config.lineHeight,"px'>");if(i.length){var s=this.session.getRowSplitData(t);s&&s.length?this.$renderWrappedLine(e,i,s,n):this.$renderSimpleLine(e,i)}this.showInvisibles&&(r&&(t=r.end.row),e.push("<span class='ace_invisible'>",t==this.session.getLength()-1?this.EOF_CHAR:this.EOL_CHAR,"</span>")),n||e.push("</div>")},this.$getFoldLineTokens=function(e,t){function i(e,t,n){var i=0,s=0;while(s+e[i].value.length<t){s+=e[i].value.length,i++;if(i==e.length)return}if(s!=t){var o=e[i].value.substring(t-s);o.length>n-t&&(o=o.substring(0,n-t)),r.push({type:e[i].type,value:o}),s=t+o.length,i+=1}while(s<n&&i<e.length){var o=e[i].value;o.length+s>n?r.push({type:e[i].type,value:o.substring(0,n-s)}):r.push(e[i]),s+=o.length,i+=1}}var n=this.session,r=[],s=n.getTokens(e);return t.walk(function(e,t,o,u,a){e!=null?r.push({type:"fold",value:e}):(a&&(s=n.getTokens(t)),s.length&&i(s,u,o))},t.end.row,this.session.getLine(t.end.row).length),r},this.$useLineGroups=function(){return this.session.getUseWrapMode()},this.destroy=function(){clearInterval(this.$pollSizeChangesTimer),this.$measureNode&&this.$measureNode.parentNode.removeChild(this.$measureNode),delete this.$measureNode}}).call(a.prototype),t.Text=a}),ace.define("ace/layer/cursor",["require","exports","module","ace/lib/dom"],function(e,t,n){var r=e("../lib/dom"),i=function(e){this.element=r.createElement("div"),this.element.className="ace_layer ace_cursor-layer",e.appendChild(this.element),this.isVisible=!1,this.isBlinking=!0,this.blinkInterval=1e3,this.smoothBlinking=!1,this.cursors=[],this.cursor=this.addCursor(),r.addCssClass(this.element,"ace_hidden-cursors")};(function(){this.$padding=0,this.setPadding=function(e){this.$padding=e},this.setSession=function(e){this.session=e},this.setBlinking=function(e){e!=this.isBlinking&&(this.isBlinking=e,this.restartTimer())},this.setBlinkInterval=function(e){e!=this.blinkInterval&&(this.blinkInterval=e,this.restartTimer())},this.setSmoothBlinking=function(e){e!=this.smoothBlinking&&(this.smoothBlinking=e,e?r.addCssClass(this.element,"ace_smooth-blinking"):r.removeCssClass(this.element,"ace_smooth-blinking"),this.restartTimer())},this.addCursor=function(){var e=r.createElement("div");return e.className="ace_cursor",this.element.appendChild(e),this.cursors.push(e),e},this.removeCursor=function(){if(this.cursors.length>1){var e=this.cursors.pop();return e.parentNode.removeChild(e),e}},this.hideCursor=function(){this.isVisible=!1,r.addCssClass(this.element,"ace_hidden-cursors"),this.restartTimer()},this.showCursor=function(){this.isVisible=!0,r.removeCssClass(this.element,"ace_hidden-cursors"),this.restartTimer()},this.restartTimer=function(){clearInterval(this.intervalId),clearTimeout(this.timeoutId),this.smoothBlinking&&r.removeCssClass(this.element,"ace_smooth-blinking");for(var e=this.cursors.length;e--;)this.cursors[e].style.opacity="";if(!this.isBlinking||!this.blinkInterval||!this.isVisible)return;this.smoothBlinking&&setTimeout(function(){r.addCssClass(this.element,"ace_smooth-blinking")}.bind(this));var t=function(){this.timeoutId=setTimeout(function(){for(var e=this.cursors.length;e--;)this.cursors[e].style.opacity=0}.bind(this),.6*this.blinkInterval)}.bind(this);this.intervalId=setInterval(function(){for(var e=this.cursors.length;e--;)this.cursors[e].style.opacity="";t()}.bind(this),this.blinkInterval),t()},this.getPixelPosition=function(e,t){if(!this.config||!this.session)return{left:0,top:0};e||(e=this.session.selection.getCursor());var n=this.session.documentToScreenPosition(e),r=this.$padding+n.column*this.config.characterWidth,i=(n.row-(t?this.config.firstRowScreen:0))*this.config.lineHeight;return{left:r,top:i}},this.update=function(e){this.config=e;var t=this.session.$selectionMarkers,n=0,r=0;if(t===undefined||t.length===0)t=[{cursor:null}];for(var n=0,i=t.length;n<i;n++){var s=this.getPixelPosition(t[n].cursor,!0);if((s.top>e.height+e.offset||s.top<-e.offset)&&n>1)continue;var o=(this.cursors[r++]||this.addCursor()).style;o.left=s.left+"px",o.top=s.top+"px",o.width=e.characterWidth+"px",o.height=e.lineHeight+"px"}while(this.cursors.length>r)this.removeCursor();var u=this.session.getOverwrite();this.$setOverwrite(u),this.$pixelPos=s,this.restartTimer()},this.$setOverwrite=function(e){e!=this.overwrite&&(this.overwrite=e,e?r.addCssClass(this.element,"ace_overwrite-cursors"):r.removeCssClass(this.element,"ace_overwrite-cursors"))},this.destroy=function(){clearInterval(this.intervalId),clearTimeout(this.timeoutId)}}).call(i.prototype),t.Cursor=i}),ace.define("ace/scrollbar",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/event","ace/lib/event_emitter"],function(e,t,n){var r=e("./lib/oop"),i=e("./lib/dom"),s=e("./lib/event"),o=e("./lib/event_emitter").EventEmitter,u=function(e){this.element=i.createElement("div"),this.element.className="ace_scrollbar",this.inner=i.createElement("div"),this.inner.className="ace_scrollbar-inner",this.element.appendChild(this.inner),e.appendChild(this.element),this.width=i.scrollbarWidth(e.ownerDocument),this.element.style.width=(this.width||15)+5+"px",s.addListener(this.element,"scroll",this.onScroll.bind(this))};(function(){r.implement(this,o),this.onScroll=function(){this.skipEvent||(this.scrollTop=this.element.scrollTop,this._emit("scroll",{data:this.scrollTop})),this.skipEvent=!1},this.getWidth=function(){return this.width},this.setHeight=function(e){this.element.style.height=e+"px"},this.setInnerHeight=function(e){this.inner.style.height=e+"px"},this.setScrollTop=function(e){this.scrollTop!=e&&(this.skipEvent=!0,this.scrollTop=this.element.scrollTop=e)}}).call(u.prototype),t.ScrollBar=u}),ace.define("ace/renderloop",["require","exports","module","ace/lib/event"],function(e,t,n){var r=e("./lib/event"),i=function(e,t){this.onRender=e,this.pending=!1,this.changes=0,this.window=t||window};(function(){this.schedule=function(e){this.changes=this.changes|e;if(!this.pending){this.pending=!0;var t=this;r.nextFrame(function(){t.pending=!1;var e;while(e=t.changes)t.changes=0,t.onRender(e)},this.window)}}}).call(i.prototype),t.RenderLoop=i}),ace.define("ace/multi_select",["require","exports","module","ace/range_list","ace/range","ace/selection","ace/mouse/multi_select_handler","ace/lib/event","ace/lib/lang","ace/commands/multi_select_commands","ace/search","ace/edit_session","ace/editor"],function(e,t,n){function h(e,t,n){return c.$options.wrap=!0,c.$options.needle=t,c.$options.backwards=n==-1,c.find(e)}function v(e,t){return e.row==t.row&&e.column==t.column}function m(e){e.$onAddRange=e.$onAddRange.bind(e),e.$onRemoveRange=e.$onRemoveRange.bind(e),e.$onMultiSelect=e.$onMultiSelect.bind(e),e.$onSingleSelect=e.$onSingleSelect.bind(e),t.onSessionChange.call(e,e),e.on("changeSession",t.onSessionChange.bind(e)),e.on("mousedown",o),e.commands.addCommands(f.defaultCommands),g(e)}function g(e){function i(){n&&(r.style.cursor="",n=!1)}var t=e.textInput.getElement(),n=!1,r=e.renderer.content;u.addListener(t,"keydown",function(e){e.keyCode==18&&!(e.ctrlKey||e.shiftKey||e.metaKey)?n||(r.style.cursor="crosshair",n=!0):n&&(r.style.cursor="")}),u.addListener(t,"keyup",i),u.addListener(t,"blur",i)}var r=e("./range_list").RangeList,i=e("./range").Range,s=e("./selection").Selection,o=e("./mouse/multi_select_handler").onMouseDown,u=e("./lib/event"),a=e("./lib/lang"),f=e("./commands/multi_select_commands");t.commands=f.defaultCommands.concat(f.multiSelectCommands);var l=e("./search").Search,c=new l,p=e("./edit_session").EditSession;(function(){this.getSelectionMarkers=function(){return this.$selectionMarkers}}).call(p.prototype),function(){this.ranges=null,this.rangeList=null,this.addRange=function(e,t){if(!e)return;if(!this.inMultiSelectMode&&this.rangeCount==0){var n=this.toOrientedRange();this.rangeList.add(n),this.rangeList.add(e);if(this.rangeList.ranges.length!=2)return this.rangeList.removeAll(),t||this.fromOrientedRange(e);this.rangeList.removeAll(),this.rangeList.add(n),this.$onAddRange(n)}e.cursor||(e.cursor=e.end);var r=this.rangeList.add(e);return this.$onAddRange(e),r.length&&this.$onRemoveRange(r),this.rangeCount>1&&!this.inMultiSelectMode&&(this._emit("multiSelect"),this.inMultiSelectMode=!0,this.session.$undoSelect=!1,this.rangeList.attach(this.session)),t||this.fromOrientedRange(e)},this.toSingleRange=function(e){e=e||this.ranges[0];var t=this.rangeList.removeAll();t.length&&this.$onRemoveRange(t),e&&this.fromOrientedRange(e)},this.substractPoint=function(e){var t=this.rangeList.substractPoint(e);if(t)return this.$onRemoveRange(t),t[0]},this.mergeOverlappingRanges=function(){var e=this.rangeList.merge();e.length?this.$onRemoveRange(e):this.ranges[0]&&this.fromOrientedRange(this.ranges[0])},this.$onAddRange=function(e){this.rangeCount=this.rangeList.ranges.length,this.ranges.unshift(e),this._emit("addRange",{range:e})},this.$onRemoveRange=function(e){this.rangeCount=this.rangeList.ranges.length;if(this.rangeCount==1&&this.inMultiSelectMode){var t=this.rangeList.ranges.pop();e.push(t),this.rangeCount=0}for(var n=e.length;n--;){var r=this.ranges.indexOf(e[n]);this.ranges.splice(r,1)}this._emit("removeRange",{ranges:e}),this.rangeCount==0&&this.inMultiSelectMode&&(this.inMultiSelectMode=!1,this._emit("singleSelect"),this.session.$undoSelect=!0,this.rangeList.detach(this.session)),t=t||this.ranges[0],t&&!t.isEqual(this.getRange())&&this.fromOrientedRange(t)},this.$initRangeList=function(){if(this.rangeList)return;this.rangeList=new r,this.ranges=[],this.rangeCount=0},this.getAllRanges=function(){return this.rangeList.ranges.concat()},this.splitIntoLines=function(){if(this.rangeCount>1){var e=this.rangeList.ranges,t=e[e.length-1],n=i.fromPoints(e[0].start,t.end);this.toSingleRange(),this.setSelectionRange(n,t.cursor==t.start)}else{var n=this.getRange(),r=this.isBackwards(),s=n.start.row,o=n.end.row;if(s==o){if(r)var u=n.end,a=n.start;else var u=n.start,a=n.end;this.addRange(i.fromPoints(a,a)),this.addRange(i.fromPoints(u,u));return}var f=[],l=this.getLineRange(s,!0);l.start.column=n.start.column,f.push(l);for(var c=s+1;c<o;c++)f.push(this.getLineRange(c,!0));l=this.getLineRange(o,!0),l.end.column=n.end.column,f.push(l),f.forEach(this.addRange,this)}},this.toggleBlockSelection=function(){if(this.rangeCount>1){var e=this.rangeList.ranges,t=e[e.length-1],n=i.fromPoints(e[0].start,t.end);this.toSingleRange(),this.setSelectionRange(n,t.cursor==t.start)}else{var r=this.session.documentToScreenPosition(this.selectionLead),s=this.session.documentToScreenPosition(this.selectionAnchor),o=this.rectangularRangeBlock(r,s);o.forEach(this.addRange,this)}},this.rectangularRangeBlock=function(e,t,n){var r=[],s=e.column<t.column;if(s)var o=e.column,u=t.column;else var o=t.column,u=e.column;var a=e.row<t.row;if(a)var f=e.row,l=t.row;else var f=t.row,l=e.row;o<0&&(o=0),f<0&&(f=0),f==l&&(n=!0);for(var c=f;c<=l;c++){var h=i.fromPoints(this.session.screenToDocumentPosition(c,o),this.session.screenToDocumentPosition(c,u));if(h.isEmpty()){if(p&&v(h.end,p))break;var p=h.end}h.cursor=s?h.start:h.end,r.push(h)}a&&r.reverse();if(!n){var d=r.length-1;while(r[d].isEmpty()&&d>0)d--;if(d>0){var m=0;while(r[m].isEmpty())m++}for(var g=d;g>=m;g--)r[g].isEmpty()&&r.splice(g,1)}return r}}.call(s.prototype);var d=e("./editor").Editor;(function(){this.updateSelectionMarkers=function(){this.renderer.updateCursor(),this.renderer.updateBackMarkers()},this.addSelectionMarker=function(e){e.cursor||(e.cursor=e.end);var t=this.getSelectionStyle();return e.marker=this.session.addMarker(e,"ace_selection",t),this.session.$selectionMarkers.push(e),this.session.selectionMarkerCount=this.session.$selectionMarkers.length,e},this.removeSelectionMarker=function(e){if(!e.marker)return;this.session.removeMarker(e.marker);var t=this.session.$selectionMarkers.indexOf(e);t!=-1&&this.session.$selectionMarkers.splice(t,1),this.session.selectionMarkerCount=this.session.$selectionMarkers.length},this.removeSelectionMarkers=function(e){var t=this.session.$selectionMarkers;for(var n=e.length;n--;){var r=e[n];if(!r.marker)continue;this.session.removeMarker(r.marker);var i=t.indexOf(r);i!=-1&&t.splice(i,1)}this.session.selectionMarkerCount=t.length},this.$onAddRange=function(e){this.addSelectionMarker(e.range),this.renderer.updateCursor(),this.renderer.updateBackMarkers()},this.$onRemoveRange=function(e){this.removeSelectionMarkers(e.ranges),this.renderer.updateCursor(),this.renderer.updateBackMarkers()},this.$onMultiSelect=function(e){if(this.inMultiSelectMode)return;this.inMultiSelectMode=!0,this.setStyle("ace_multiselect"),this.keyBinding.addKeyboardHandler(f.keyboardHandler),this.commands.setDefaultHandler("exec",this.$onMultiSelectExec),this.renderer.updateCursor(),this.renderer.updateBackMarkers()},this.$onSingleSelect=function(e){if(this.session.multiSelect.inVirtualMode)return;this.inMultiSelectMode=!1,this.unsetStyle("ace_multiselect"),this.keyBinding.removeKeyboardHandler(f.keyboardHandler),this.commands.removeDefaultHandler("exec",this.$onMultiSelectExec),this.renderer.updateCursor(),this.renderer.updateBackMarkers()},this.$onMultiSelectExec=function(e){var t=e.command,n=e.editor;if(!n.multiSelect)return;if(!t.multiSelectAction){var r=t.exec(n,e.args||{});n.multiSelect.addRange(n.multiSelect.toOrientedRange()),n.multiSelect.mergeOverlappingRanges()}else t.multiSelectAction=="forEach"?r=n.forEachSelection(t,e.args):t.multiSelectAction=="forEachLine"?r=n.forEachSelection(t,e.args,!0):t.multiSelectAction=="single"?(n.exitMultiSelectMode(),r=t.exec(n,e.args||{})):r=t.multiSelectAction(n,e.args||{});return r},this.forEachSelection=function(e,t,n){if(this.inVirtualSelectionMode)return;var r=this.session,i=this.selection,o=i.rangeList,u,a=i._eventRegistry;i._eventRegistry={};var f=new s(r);this.inVirtualSelectionMode=!0;for(var l=o.ranges.length;l--;){if(n)while(l>0&&o.ranges[l].start.row==o.ranges[l-1].end.row)l--;f.fromOrientedRange(o.ranges[l]),this.selection=r.selection=f;var c=e.exec(this,t||{});!u==undefined&&(u=c),f.toOrientedRange(o.ranges[l])}f.detach(),this.selection=r.selection=i,this.inVirtualSelectionMode=!1,i._eventRegistry=a,i.mergeOverlappingRanges();var h=this.renderer.$scrollAnimation;return this.onCursorChange(),this.onSelectionChange(),h&&h.from==h.to&&this.renderer.animateScrolling(h.from),u},this.exitMultiSelectMode=function(){if(!this.inMultiSelectMode||this.inVirtualSelectionMode)return;this.multiSelect.toSingleRange()},this.getCopyText=function(){var e="";if(this.inMultiSelectMode&&!this.inVirtualSelectionMode){var t=this.multiSelect.rangeList.ranges,n=[];for(var r=0;r<t.length;r++)n.push(this.session.getTextRange(t[r]));var i=this.session.getDocument().getNewLineCharacter();e=n.join(i),e.length==(n.length-1)*i.length&&(e="")}else this.selection.isEmpty()||(e=this.session.getTextRange(this.getSelectionRange()));return this._signal("copy",e),e},this.onPaste=function(e){if(this.$readOnly)return;this._signal("paste",e);if(!this.inMultiSelectMode||this.inVirtualSelectionMode)return this.insert(e);var t=e.split(/\r\n|\r|\n/),n=this.selection.rangeList.ranges;if(t.length>n.length||t.length<2||!t[1])return this.commands.exec("insertstring",this,e);for(var r=n.length;r--;){var i=n[r];i.isEmpty()||this.session.remove(i),this.session.insert(i.start,t[r])}},this.findAll=function(e,t,n){t=t||{},t.needle=e||t.needle,this.$search.set(t);var r=this.$search.findAll(this.session);if(!r.length)return 0;this.$blockScrolling+=1;var i=this.multiSelect;n||i.toSingleRange(r[0]);for(var s=r.length;s--;)i.addRange(r[s],!0);return this.$blockScrolling-=1,r.length},this.selectMoreLines=function(e,t){var n=this.selection.toOrientedRange(),r=n.cursor==n.end,s=this.session.documentToScreenPosition(n.cursor);this.selection.$desiredColumn&&(s.column=this.selection.$desiredColumn);var o=this.session.screenToDocumentPosition(s.row+e,s.column);if(!n.isEmpty())var u=this.session.documentToScreenPosition(r?n.end:n.start),a=this.session.screenToDocumentPosition(u.row+e,u.column);else var a=o;if(r){var f=i.fromPoints(o,a);f.cursor=f.start}else{var f=i.fromPoints(a,o);f.cursor=f.end}f.desiredColumn=s.column;if(!this.selection.inMultiSelectMode)this.selection.addRange(n);else if(t)var l=n.cursor;this.selection.addRange(f),l&&this.selection.substractPoint(l)},this.transposeSelections=function(e){var t=this.session,n=t.multiSelect,r=n.ranges;for(var i=r.length;i--;){var s=r[i];if(s.isEmpty()){var o=t.getWordRange(s.start.row,s.start.column);s.start.row=o.start.row,s.start.column=o.start.column,s.end.row=o.end.row,s.end.column=o.end.column}}n.mergeOverlappingRanges();var u=[];for(var i=r.length;i--;){var s=r[i];u.unshift(t.getTextRange(s))}e<0?u.unshift(u.pop()):u.push(u.shift());for(var i=r.length;i--;){var s=r[i],o=s.clone();t.replace(s,u[i]),s.start.row=o.start.row,s.start.column=o.start.column}},this.selectMore=function(e,t){var n=this.session,r=n.multiSelect,i=r.toOrientedRange();if(i.isEmpty()){var i=n.getWordRange(i.start.row,i.start.column);i.cursor=i.end,this.multiSelect.addRange(i)}var s=n.getTextRange(i),o=h(n,s,e);o&&(o.cursor=e==-1?o.start:o.end,this.multiSelect.addRange(o)),t&&this.multiSelect.substractPoint(i.cursor)},this.alignCursors=function(){var e=this.session,t=e.multiSelect,n=t.ranges;if(!n.length){var r=this.selection.getRange(),s=r.start.row,o=r.end.row,u=this.session.doc.removeLines(s,o);u=this.$reAlignText(u),this.session.doc.insertLines(s,u),r.start.column=0,r.end.column=u[u.length-1].length,this.selection.setRange(r)}else{var f=-1,l=n.filter(function(e){if(e.cursor.row==f)return!0;f=e.cursor.row});t.$onRemoveRange(l);var c=0,h=Infinity,p=n.map(function(t){var n=t.cursor,r=e.getLine(n.row),i=r.substr(n.column).search(/\S/g);return i==-1&&(i=0),n.column>c&&(c=n.column),i<h&&(h=i),i});n.forEach(function(t,n){var r=t.cursor,s=c-r.column,o=p[n]-h;s>o?e.insert(r,a.stringRepeat(" ",s-o)):e.remove(new i(r.row,r.column,r.row,r.column-s+o)),t.start.column=t.end.column=c,t.start.row=t.end.row=r.row,t.cursor=t.end}),t.fromOrientedRange(n[0]),this.renderer.updateCursor(),this.renderer.updateBackMarkers()}},this.$reAlignText=function(e){function o(e){return a.stringRepeat(" ",e)}function u(e){return e[2]?o(r)+e[2]+o(i-e[2].length+s)+e[4].replace(/^([=:])\s+/,"$1 "):e[0]}function f(e){return e[2]?o(r+i-e[2].length)+e[2]+o(s," ")+e[4].replace(/^([=:])\s+/,"$1 "):e[0]}function l(e){return e[2]?o(r)+e[2]+o(s)+e[4].replace(/^([=:])\s+/,"$1 "):e[0]}var t=!0,n=!0,r,i,s;return e.map(function(e){var o=e.match(/(\s*)(.*?)(\s*)([=:].*)/);return o?r==null?(r=o[1].length,i=o[2].length,s=o[3].length,o):(r+i+s!=o[1].length+o[2].length+o[3].length&&(n=!1),r!=o[1].length&&(t=!1),r>o[1].length&&(r=o[1].length),i<o[2].length&&(i=o[2].length),s>o[3].length&&(s=o[3].length),o):[e]}).map(t?n?f:u:l)}}).call(d.prototype),t.onSessionChange=function(e){var t=e.session;t.multiSelect||(t.$selectionMarkers=[],t.selection.$initRangeList(),t.multiSelect=t.selection),this.multiSelect=t.multiSelect;var n=e.oldSession;n&&(n.multiSelect.removeEventListener("addRange",this.$onAddRange),n.multiSelect.removeEventListener("removeRange",this.$onRemoveRange),n.multiSelect.removeEventListener("multiSelect",this.$onMultiSelect),n.multiSelect.removeEventListener("singleSelect",this.$onSingleSelect)),t.multiSelect.on("addRange",this.$onAddRange),t.multiSelect.on("removeRange",this.$onRemoveRange),t.multiSelect.on("multiSelect",this.$onMultiSelect),t.multiSelect.on("singleSelect",this.$onSingleSelect),this.inMultiSelectMode!=t.selection.inMultiSelectMode&&(t.selection.inMultiSelectMode?this.$onMultiSelect():this.$onSingleSelect())},t.MultiSelect=m}),ace.define("ace/mouse/multi_select_handler",["require","exports","module","ace/lib/event"],function(e,t,n){function i(e,t){return e.row==t.row&&e.column==t.column}function s(e){var t=e.domEvent,n=t.altKey,s=t.shiftKey,o=e.getAccelKey(),u=e.getButton();if(e.editor.inMultiSelectMode&&u==2){e.editor.textInput.onContextMenu(e.domEvent);return}if(!o&&!n){u==0&&e.editor.inMultiSelectMode&&e.editor.exitMultiSelectMode();return}var a=e.editor,f=a.selection,l=a.inMultiSelectMode,c=e.getDocumentPosition(),h=f.getCursor(),p=e.inSelection()||f.isEmpty()&&i(c,h),d=e.x,v=e.y,m=function(e){d=e.clientX,v=e.clientY},g=function(){var e=a.renderer.pixelToScreenCoordinates(d,v),t=y.screenToDocumentPosition(e.row,e.column);if(i(w,e)&&i(t,f.selectionLead))return;w=e,a.selection.moveCursorToPosition(t),a.selection.clearSelection(),a.renderer.scrollCursorIntoView(),a.removeSelectionMarkers(x),x=f.rectangularRangeBlock(w,b),x.forEach(a.addSelectionMarker,a),a.updateSelectionMarkers()},y=a.session,b=a.renderer.pixelToScreenCoordinates(d,v),w=b;if(o&&!s&&!n&&u==0){if(!l&&p)return;if(!l){var E=f.toOrientedRange();a.addSelectionMarker(E)}var S=f.rangeList.rangeAtPoint(c);a.once("mouseup",function(){var e=f.toOrientedRange();S&&e.isEmpty()&&i(S.cursor,e.cursor)?f.substractPoint(e.cursor):(E&&(a.removeSelectionMarker(E),f.addRange(E)),f.addRange(e))})}else if(n&&u==0){e.stop(),l&&!o?f.toSingleRange():!l&&o&&f.addRange();var x=[];s?(b=y.documentToScreenPosition(f.lead),g()):(f.moveCursorToPosition(c),f.clearSelection());var T=function(e){clearInterval(C),a.removeSelectionMarkers(x);for(var t=0;t<x.length;t++)f.addRange(x[t])},N=g;r.capture(a.container,m,T);var C=setInterval(function(){N()},20);return e.preventDefault()}}var r=e("../lib/event");t.onMouseDown=s}),ace.define("ace/commands/multi_select_commands",["require","exports","module","ace/keyboard/hash_handler"],function(e,t,n){t.defaultCommands=[{name:"addCursorAbove",exec:function(e){e.selectMoreLines(-1)},bindKey:{win:"Ctrl-Alt-Up",mac:"Ctrl-Alt-Up"},readonly:!0},{name:"addCursorBelow",exec:function(e){e.selectMoreLines(1)},bindKey:{win:"Ctrl-Alt-Down",mac:"Ctrl-Alt-Down"},readonly:!0},{name:"addCursorAboveSkipCurrent",exec:function(e){e.selectMoreLines(-1,!0)},bindKey:{win:"Ctrl-Alt-Shift-Up",mac:"Ctrl-Alt-Shift-Up"},readonly:!0},{name:"addCursorBelowSkipCurrent",exec:function(e){e.selectMoreLines(1,!0)},bindKey:{win:"Ctrl-Alt-Shift-Down",mac:"Ctrl-Alt-Shift-Down"},readonly:!0},{name:"selectMoreBefore",exec:function(e){e.selectMore(-1)},bindKey:{win:"Ctrl-Alt-Left",mac:"Ctrl-Alt-Left"},readonly:!0},{name:"selectMoreAfter",exec:function(e){e.selectMore(1)},bindKey:{win:"Ctrl-Alt-Right",mac:"Ctrl-Alt-Right"},readonly:!0},{name:"selectNextBefore",exec:function(e){e.selectMore(-1,!0)},bindKey:{win:"Ctrl-Alt-Shift-Left",mac:"Ctrl-Alt-Shift-Left"},readonly:!0},{name:"selectNextAfter",exec:function(e){e.selectMore(1,!0)},bindKey:{win:"Ctrl-Alt-Shift-Right",mac:"Ctrl-Alt-Shift-Right"},readonly:!0},{name:"splitIntoLines",exec:function(e){e.multiSelect.splitIntoLines()},bindKey:{win:"Ctrl-Alt-L",mac:"Ctrl-Alt-L"},readonly:!0},{name:"alignCursors",exec:function(e){e.alignCursors()},bindKey:{win:"Ctrl-Alt-A",mac:"Ctrl-Alt-A"}}],t.multiSelectCommands=[{name:"singleSelection",bindKey:"esc",exec:function(e){e.exitMultiSelectMode()},readonly:!0,isAvailable:function(e){return e&&e.inMultiSelectMode}}];var r=e("../keyboard/hash_handler").HashHandler;t.keyboardHandler=new r(t.multiSelectCommands)}),ace.define("ace/worker/worker_client",["require","exports","module","ace/lib/oop","ace/lib/event_emitter","ace/config"],function(e,t,n){var r=e("../lib/oop"),i=e("../lib/event_emitter").EventEmitter,s=e("../config"),o=function(t,n,r){this.$sendDeltaQueue=this.$sendDeltaQueue.bind(this),this.changeListener=this.changeListener.bind(this),this.onMessage=this.onMessage.bind(this),this.onError=this.onError.bind(this),e.nameToUrl&&!e.toUrl&&(e.toUrl=e.nameToUrl);var i;if(s.get("packaged")||!e.toUrl)i=s.moduleUrl(n,"worker");else{var o=this.$normalizePath;i=o(e.toUrl("ace/worker/worker.js",null,"_"));var u={};t.forEach(function(t){u[t]=o(e.toUrl(t,null,"_").replace(/(\.js)?(\?.*)?$/,""))})}this.$worker=new Worker(i),this.$worker.postMessage({init:!0,tlns:u,module:n,classname:r}),this.callbackId=1,this.callbacks={},this.$worker.onerror=this.onError,this.$worker.onmessage=this.onMessage};(function(){r.implement(this,i),this.onError=function(e){throw window.console&&console.log&&console.log(e),e},this.onMessage=function(e){var t=e.data;switch(t.type){case"log":window.console&&console.log&&console.log.apply(console,t.data);break;case"event":this._emit(t.name,{data:t.data});break;case"call":var n=this.callbacks[t.id];n&&(n(t.data),delete this.callbacks[t.id])}},this.$normalizePath=function(e){return location.host?(e=e.replace(/^[a-z]+:\/\/[^\/]+/,""),e=location.protocol+"//"+location.host+(e.charAt(0)=="/"?"":location.pathname.replace(/\/[^\/]*$/,""))+"/"+e.replace(/^[\/]+/,""),e):e},this.terminate=function(){this._emit("terminate",{}),this.$worker.terminate(),this.$worker=null,this.$doc.removeEventListener("change",this.changeListener),this.$doc=null},this.send=function(e,t){this.$worker.postMessage({command:e,args:t})},this.call=function(e,t,n){if(n){var r=this.callbackId++;this.callbacks[r]=n,t.push(r)}this.send(e,t)},this.emit=function(e,t){try{this.$worker.postMessage({event:e,data:{data:t.data}})}catch(n){}},this.attachToDocument=function(e){this.$doc&&this.terminate(),this.$doc=e,this.call("setValue",[e.getValue()]),e.on("change",this.changeListener)},this.changeListener=function(e){this.deltaQueue?this.deltaQueue.push(e.data):(this.deltaQueue=[e.data],setTimeout(this.$sendDeltaQueue,1))},this.$sendDeltaQueue=function(){var e=this.deltaQueue;if(!e)return;this.deltaQueue=null,e.length>20&&e.length>this.$doc.getLength()>>1?this.call("setValue",[this.$doc.getValue()]):this.emit("change",{data:e})}}).call(o.prototype);var u=function(e,t,n){this.$sendDeltaQueue=this.$sendDeltaQueue.bind(this),this.changeListener=this.changeListener.bind(this),this.callbackId=1,this.callbacks={},this.messageBuffer=[];var r=null,o=Object.create(i),u=this;this.$worker={},this.$worker.terminate=function(){},this.$worker.postMessage=function(e){u.messageBuffer.push(e),r&&setTimeout(a)};var a=function(){var e=u.messageBuffer.shift();e.command?r[e.command].apply(r,e.args):e.event&&o._emit(e.event,e.data)};o.postMessage=function(e){u.onMessage({data:e})},o.callback=function(e,t){this.postMessage({type:"call",id:t,data:e})},o.emit=function(e,t){this.postMessage({type:"event",name:e,data:t})},s.loadModule(["worker",t],function(e){r=new e[n](o);while(u.messageBuffer.length)a()})};u.prototype=o.prototype,t.UIWorkerClient=u,t.WorkerClient=o}),ace.define("ace/placeholder",["require","exports","module","ace/range","ace/lib/event_emitter","ace/lib/oop"],function(e,t,n){var r=e("./range").Range,i=e("./lib/event_emitter").EventEmitter,s=e("./lib/oop"),o=function(e,t,n,r,i,s){var o=this;this.length=t,this.session=e,this.doc=e.getDocument(),this.mainClass=i,this.othersClass=s,this.$onUpdate=this.onUpdate.bind(this),this.doc.on("change",this.$onUpdate),this.$others=r,this.$onCursorChange=function(){setTimeout(function(){o.onCursorChange()})},this.$pos=n;var u=e.getUndoManager().$undoStack||e.getUndoManager().$undostack||{length:-1};this.$undoStackDepth=u.length,this.setup(),e.selection.on("changeCursor",this.$onCursorChange)};(function(){s.implement(this,i),this.setup=function(){var e=this,t=this.doc,n=this.session,i=this.$pos;this.pos=t.createAnchor(i.row,i.column),this.markerId=n.addMarker(new r(i.row,i.column,i.row,i.column+this.length),this.mainClass,null,!1),this.pos.on("change",function(t){n.removeMarker(e.markerId),e.markerId=n.addMarker(new r(t.value.row,t.value.column,t.value.row,t.value.column+e.length),e.mainClass,null,!1)}),this.others=[],this.$others.forEach(function(n){var r=t.createAnchor(n.row,n.column);e.others.push(r)}),n.setUndoSelect(!1)},this.showOtherMarkers=function(){if(this.othersActive)return;var e=this.session,t=this;this.othersActive=!0,this.others.forEach(function(n){n.markerId=e.addMarker(new r(n.row,n.column,n.row,n.column+t.length),t.othersClass,null,!1),n.on("change",function(i){e.removeMarker(n.markerId),n.markerId=e.addMarker(new r(i.value.row,i.value.column,i.value.row,i.value.column+t.length),t.othersClass,null,!1)})})},this.hideOtherMarkers=function(){if(!this.othersActive)return;this.othersActive=!1;for(var e=0;e<this.others.length;e++)this.session.removeMarker(this.others[e].markerId)},this.onUpdate=function(e){var t=e.data,n=t.range;if(n.start.row!==n.end.row)return;if(n.start.row!==this.pos.row)return;if(this.$updating)return;this.$updating=!0;var i=t.action==="insertText"?n.end.column-n.start.column:n.start.column-n.end.column;if(n.start.column>=this.pos.column&&n.start.column<=this.pos.column+this.length+1){var s=n.start.column-this.pos.column;this.length+=i;if(!this.session.$fromUndo){if(t.action==="insertText")for(var o=this.others.length-1;o>=0;o--){var u=this.others[o],a={row:u.row,column:u.column+s};u.row===n.start.row&&n.start.column<u.column&&(a.column+=i),this.doc.insert(a,t.text)}else if(t.action==="removeText")for(var o=this.others.length-1;o>=0;o--){var u=this.others[o],a={row:u.row,column:u.column+s};u.row===n.start.row&&n.start.column<u.column&&(a.column+=i),this.doc.remove(new r(a.row,a.column,a.row,a.column-i))}n.start.column===this.pos.column&&t.action==="insertText"?setTimeout(function(){this.pos.setPosition(this.pos.row,this.pos.column-i);for(var e=0;e<this.others.length;e++){var t=this.others[e],r={row:t.row,column:t.column-i};t.row===n.start.row&&n.start.column<t.column&&(r.column+=i),t.setPosition(r.row,r.column)}}.bind(this),0):n.start.column===this.pos.column&&t.action==="removeText"&&setTimeout(function(){for(var e=0;e<this.others.length;e++){var t=this.others[e];t.row===n.start.row&&n.start.column<t.column&&t.setPosition(t.row,t.column-i)}}.bind(this),0)}this.pos._emit("change",{value:this.pos});for(var o=0;o<this.others.length;o++)this.others[o]._emit("change",{value:this.others[o]})}this.$updating=!1},this.onCursorChange=function(e){if(this.$updating)return;var t=this.session.selection.getCursor();t.row===this.pos.row&&t.column>=this.pos.column&&t.column<=this.pos.column+this.length?(this.showOtherMarkers(),this._emit("cursorEnter",e)):(this.hideOtherMarkers(),this._emit("cursorLeave",e))},this.detach=function(){this.session.removeMarker(this.markerId),this.hideOtherMarkers(),this.doc.removeEventListener("change",this.$onUpdate),this.session.selection.removeEventListener("changeCursor",this.$onCursorChange),this.pos.detach();for(var e=0;e<this.others.length;e++)this.others[e].detach();this.session.setUndoSelect(!0)},this.cancel=function(){if(this.$undoStackDepth===-1)throw Error("Canceling placeholders only supported with undo manager attached to session.");var e=this.session.getUndoManager(),t=(e.$undoStack||e.$undostack).length-this.$undoStackDepth;for(var n=0;n<t;n++)e.undo(!0)}}).call(o.prototype),t.PlaceHolder=o}),ace.define("ace/mode/folding/fold_mode",["require","exports","module","ace/range"],function(e,t,n){var r=e("../../range").Range,i=t.FoldMode=function(){};(function(){this.foldingStartMarker=null,this.foldingStopMarker=null,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);return this.foldingStartMarker.test(r)?"start":t=="markbeginend"&&this.foldingStopMarker&&this.foldingStopMarker.test(r)?"end":""},this.getFoldWidgetRange=function(e,t,n){return null},this.indentationBlock=function(e,t,n){var i=/\S/,s=e.getLine(t),o=s.search(i);if(o==-1)return;var u=n||s.length,a=e.getLength(),f=t,l=t;while(++t<a){var c=e.getLine(t).search(i);if(c==-1)continue;if(c<=o)break;l=t}if(l>f){var h=e.getLine(l).length;return new r(f,u,l,h)}},this.openingBracketBlock=function(e,t,n,i,s){var o={row:n,column:i+1},u=e.$findClosingBracket(t,o,s);if(!u)return;var a=e.foldWidgets[u.row];return a==null&&(a=this.getFoldWidget(e,u.row)),a=="start"&&u.row>o.row&&(u.row--,u.column=e.getLine(u.row).length),r.fromPoints(o,u)},this.closingBracketBlock=function(e,t,n,i,s){var o={row:n,column:i},u=e.$findOpeningBracket(t,o);if(!u)return;return u.column++,o.column--,r.fromPoints(u,o)}}).call(i.prototype)}),ace.define("ace/theme/textmate",["require","exports","module","ace/lib/dom"],function(e,t,n){t.isDark=!1,t.cssClass="ace-tm",t.cssText='.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;}.ace-tm .ace_cursor {border-left: 2px solid black;}.ace-tm .ace_overwrite-cursors .ace_cursor {border-left: 0px;border-bottom: 1px solid black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_markup.ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_markup.ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;border-radius: 2px;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}';var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass)});
            (function() {
                ace.require(["ace/ace"], function(a) {
                    a && a.config.init();
                    if (!window.ace)
                        window.ace = {};
                    for (var key in a) if (a.hasOwnProperty(key))
                        ace[key] = a[key];
                });
            })();
        
/**
 * angular-ui-ace - This directive allows you to add ACE editor elements.
 * @version v0.1.0 - 2013-12-28
 * @link http://angular-ui.github.com
 * @license MIT
 */
"use strict";angular.module("ui.ace",[]).constant("uiAceConfig",{}).directive("uiAce",["uiAceConfig",function(a){if(angular.isUndefined(window.ace))throw new Error("ui-ace need ace to work... (o rly?)");return{restrict:"EA",require:"?ngModel",link:function(b,c,d,e){var f,g,h,i,j;f=a.ace||{},g=angular.extend({},f,b.$eval(d.uiAce)),h=window.ace.edit(c[0]),i=h.getSession(),j=function(a){return function(c){var f=i.getValue();f===b.$eval(d.value)||b.$$phase||b.$root.$$phase||(angular.isDefined(e)&&b.$apply(function(){e.$setViewValue(f)}),angular.isDefined(a)&&b.$apply(function(){if(!angular.isFunction(a))throw new Error("ui-ace use a function as callback.");a(c,h)}))}},angular.isDefined(g.showGutter)&&h.renderer.setShowGutter(g.showGutter),angular.isDefined(g.useWrapMode)&&i.setUseWrapMode(g.useWrapMode),angular.isFunction(g.onLoad)&&g.onLoad(h),angular.isString(g.theme)&&h.setTheme("ace/theme/"+g.theme),angular.isString(g.mode)&&i.setMode("ace/mode/"+g.mode),d.$observe("readonly",function(a){h.setReadOnly("true"===a)}),angular.isDefined(e)&&(e.$formatters.push(function(a){if(angular.isUndefined(a)||null===a)return"";if(angular.isObject(a)||angular.isArray(a))throw new Error("ui-ace cannot use an object or an array as a model");return a}),e.$render=function(){i.setValue(e.$viewValue)}),i.on("change",j(g.onChange)),c.on("$destroy",function(){h.session.$stopWorker(),h.destroy()})}}}]);
//! moment.js
//! version : 2.5.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function c(a,b){return function(c){return k(a.call(this,c),b)}}function d(a,b){return function(c){return this.lang().ordinal(a.call(this,c),b)}}function e(){}function f(a){w(a),h(this,a)}function g(a){var b=q(a),c=b.year||0,d=b.month||0,e=b.week||0,f=b.day||0,g=b.hour||0,h=b.minute||0,i=b.second||0,j=b.millisecond||0;this._milliseconds=+j+1e3*i+6e4*h+36e5*g,this._days=+f+7*e,this._months=+d+12*c,this._data={},this._bubble()}function h(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return b.hasOwnProperty("toString")&&(a.toString=b.toString),b.hasOwnProperty("valueOf")&&(a.valueOf=b.valueOf),a}function i(a){var b,c={};for(b in a)a.hasOwnProperty(b)&&qb.hasOwnProperty(b)&&(c[b]=a[b]);return c}function j(a){return 0>a?Math.ceil(a):Math.floor(a)}function k(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function l(a,b,c,d){var e,f,g=b._milliseconds,h=b._days,i=b._months;g&&a._d.setTime(+a._d+g*c),(h||i)&&(e=a.minute(),f=a.hour()),h&&a.date(a.date()+h*c),i&&a.month(a.month()+i*c),g&&!d&&db.updateOffset(a),(h||i)&&(a.minute(e),a.hour(f))}function m(a){return"[object Array]"===Object.prototype.toString.call(a)}function n(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function o(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&s(a[d])!==s(b[d]))&&g++;return g+f}function p(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=Tb[a]||Ub[b]||b}return a}function q(a){var b,c,d={};for(c in a)a.hasOwnProperty(c)&&(b=p(c),b&&(d[b]=a[c]));return d}function r(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}db[b]=function(e,f){var g,h,i=db.fn._lang[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=db().utc().set(d,a);return i.call(db.fn._lang,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function s(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function t(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function u(a){return v(a)?366:365}function v(a){return a%4===0&&a%100!==0||a%400===0}function w(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[jb]<0||a._a[jb]>11?jb:a._a[kb]<1||a._a[kb]>t(a._a[ib],a._a[jb])?kb:a._a[lb]<0||a._a[lb]>23?lb:a._a[mb]<0||a._a[mb]>59?mb:a._a[nb]<0||a._a[nb]>59?nb:a._a[ob]<0||a._a[ob]>999?ob:-1,a._pf._overflowDayOfYear&&(ib>b||b>kb)&&(b=kb),a._pf.overflow=b)}function x(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function y(a){return a?a.toLowerCase().replace("_","-"):a}function z(a,b){return b._isUTC?db(a).zone(b._offset||0):db(a).local()}function A(a,b){return b.abbr=a,pb[a]||(pb[a]=new e),pb[a].set(b),pb[a]}function B(a){delete pb[a]}function C(a){var b,c,d,e,f=0,g=function(a){if(!pb[a]&&rb)try{require("./lang/"+a)}catch(b){}return pb[a]};if(!a)return db.fn._lang;if(!m(a)){if(c=g(a))return c;a=[a]}for(;f<a.length;){for(e=y(a[f]).split("-"),b=e.length,d=y(a[f+1]),d=d?d.split("-"):null;b>0;){if(c=g(e.slice(0,b).join("-")))return c;if(d&&d.length>=b&&o(e,d,!0)>=b-1)break;b--}f++}return db.fn._lang}function D(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function E(a){var b,c,d=a.match(vb);for(b=0,c=d.length;c>b;b++)d[b]=Yb[d[b]]?Yb[d[b]]:D(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function F(a,b){return a.isValid()?(b=G(b,a.lang()),Vb[b]||(Vb[b]=E(b)),Vb[b](a)):a.lang().invalidDate()}function G(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(wb.lastIndex=0;d>=0&&wb.test(a);)a=a.replace(wb,c),wb.lastIndex=0,d-=1;return a}function H(a,b){var c,d=b._strict;switch(a){case"DDDD":return Ib;case"YYYY":case"GGGG":case"gggg":return d?Jb:zb;case"Y":case"G":case"g":return Lb;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?Kb:Ab;case"S":if(d)return Gb;case"SS":if(d)return Hb;case"SSS":if(d)return Ib;case"DDD":return yb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Cb;case"a":case"A":return C(b._l)._meridiemParse;case"X":return Fb;case"Z":case"ZZ":return Db;case"T":return Eb;case"SSSS":return Bb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?Hb:xb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return xb;default:return c=new RegExp(P(O(a.replace("\\","")),"i"))}}function I(a){a=a||"";var b=a.match(Db)||[],c=b[b.length-1]||[],d=(c+"").match(Qb)||["-",0,0],e=+(60*d[1])+s(d[2]);return"+"===d[0]?-e:e}function J(a,b,c){var d,e=c._a;switch(a){case"M":case"MM":null!=b&&(e[jb]=s(b)-1);break;case"MMM":case"MMMM":d=C(c._l).monthsParse(b),null!=d?e[jb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[kb]=s(b));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=s(b));break;case"YY":e[ib]=s(b)+(s(b)>68?1900:2e3);break;case"YYYY":case"YYYYY":case"YYYYYY":e[ib]=s(b);break;case"a":case"A":c._isPm=C(c._l).isPM(b);break;case"H":case"HH":case"h":case"hh":e[lb]=s(b);break;case"m":case"mm":e[mb]=s(b);break;case"s":case"ss":e[nb]=s(b);break;case"S":case"SS":case"SSS":case"SSSS":e[ob]=s(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=I(b);break;case"w":case"ww":case"W":case"WW":case"d":case"dd":case"ddd":case"dddd":case"e":case"E":a=a.substr(0,1);case"gg":case"gggg":case"GG":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=b)}}function K(a){var b,c,d,e,f,g,h,i,j,k,l=[];if(!a._d){for(d=M(a),a._w&&null==a._a[kb]&&null==a._a[jb]&&(f=function(b){var c=parseInt(b,10);return b?b.length<3?c>68?1900+c:2e3+c:c:null==a._a[ib]?db().weekYear():a._a[ib]},g=a._w,null!=g.GG||null!=g.W||null!=g.E?h=Z(f(g.GG),g.W||1,g.E,4,1):(i=C(a._l),j=null!=g.d?V(g.d,i):null!=g.e?parseInt(g.e,10)+i._week.dow:0,k=parseInt(g.w,10)||1,null!=g.d&&j<i._week.dow&&k++,h=Z(f(g.gg),k,j,i._week.doy,i._week.dow)),a._a[ib]=h.year,a._dayOfYear=h.dayOfYear),a._dayOfYear&&(e=null==a._a[ib]?d[ib]:a._a[ib],a._dayOfYear>u(e)&&(a._pf._overflowDayOfYear=!0),c=U(e,0,a._dayOfYear),a._a[jb]=c.getUTCMonth(),a._a[kb]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=l[b]=d[b];for(;7>b;b++)a._a[b]=l[b]=null==a._a[b]?2===b?1:0:a._a[b];l[lb]+=s((a._tzm||0)/60),l[mb]+=s((a._tzm||0)%60),a._d=(a._useUTC?U:T).apply(null,l)}}function L(a){var b;a._d||(b=q(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],K(a))}function M(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function N(a){a._a=[],a._pf.empty=!0;var b,c,d,e,f,g=C(a._l),h=""+a._i,i=h.length,j=0;for(d=G(a._f,g).match(vb)||[],b=0;b<d.length;b++)e=d[b],c=(h.match(H(e,a))||[])[0],c&&(f=h.substr(0,h.indexOf(c)),f.length>0&&a._pf.unusedInput.push(f),h=h.slice(h.indexOf(c)+c.length),j+=c.length),Yb[e]?(c?a._pf.empty=!1:a._pf.unusedTokens.push(e),J(e,c,a)):a._strict&&!c&&a._pf.unusedTokens.push(e);a._pf.charsLeftOver=i-j,h.length>0&&a._pf.unusedInput.push(h),a._isPm&&a._a[lb]<12&&(a._a[lb]+=12),a._isPm===!1&&12===a._a[lb]&&(a._a[lb]=0),K(a),w(a)}function O(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function P(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Q(a){var c,d,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,a._d=new Date(0/0),void 0;for(f=0;f<a._f.length;f++)g=0,c=h({},a),c._pf=b(),c._f=a._f[f],N(c),x(c)&&(g+=c._pf.charsLeftOver,g+=10*c._pf.unusedTokens.length,c._pf.score=g,(null==e||e>g)&&(e=g,d=c));h(a,d||c)}function R(a){var b,c,d=a._i,e=Mb.exec(d);if(e){for(a._pf.iso=!0,b=0,c=Ob.length;c>b;b++)if(Ob[b][1].exec(d)){a._f=Ob[b][0]+(e[6]||" ");break}for(b=0,c=Pb.length;c>b;b++)if(Pb[b][1].exec(d)){a._f+=Pb[b][0];break}d.match(Db)&&(a._f+="Z"),N(a)}else a._d=new Date(d)}function S(b){var c=b._i,d=sb.exec(c);c===a?b._d=new Date:d?b._d=new Date(+d[1]):"string"==typeof c?R(b):m(c)?(b._a=c.slice(0),K(b)):n(c)?b._d=new Date(+c):"object"==typeof c?L(b):b._d=new Date(c)}function T(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function U(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function V(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function W(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function X(a,b,c){var d=hb(Math.abs(a)/1e3),e=hb(d/60),f=hb(e/60),g=hb(f/24),h=hb(g/365),i=45>d&&["s",d]||1===e&&["m"]||45>e&&["mm",e]||1===f&&["h"]||22>f&&["hh",f]||1===g&&["d"]||25>=g&&["dd",g]||45>=g&&["M"]||345>g&&["MM",hb(g/30)]||1===h&&["y"]||["yy",h];return i[2]=b,i[3]=a>0,i[4]=c,W.apply({},i)}function Y(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=db(a).add("d",f),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function Z(a,b,c,d,e){var f,g,h=U(a,0,1).getUTCDay();return c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:u(a-1)+g}}function $(a){var b=a._i,c=a._f;return null===b?db.invalid({nullInput:!0}):("string"==typeof b&&(a._i=b=C().preparse(b)),db.isMoment(b)?(a=i(b),a._d=new Date(+b._d)):c?m(c)?Q(a):N(a):S(a),new f(a))}function _(a,b){db.fn[a]=db.fn[a+"s"]=function(a){var c=this._isUTC?"UTC":"";return null!=a?(this._d["set"+c+b](a),db.updateOffset(this),this):this._d["get"+c+b]()}}function ab(a){db.duration.fn[a]=function(){return this._data[a]}}function bb(a,b){db.duration.fn["as"+a]=function(){return+this/b}}function cb(a){var b=!1,c=db;"undefined"==typeof ender&&(a?(gb.moment=function(){return!b&&console&&console.warn&&(b=!0,console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")),c.apply(null,arguments)},h(gb.moment,c)):gb.moment=db)}for(var db,eb,fb="2.5.1",gb=this,hb=Math.round,ib=0,jb=1,kb=2,lb=3,mb=4,nb=5,ob=6,pb={},qb={_isAMomentObject:null,_i:null,_f:null,_l:null,_strict:null,_isUTC:null,_offset:null,_pf:null,_lang:null},rb="undefined"!=typeof module&&module.exports&&"undefined"!=typeof require,sb=/^\/?Date\((\-?\d+)/i,tb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,ub=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,vb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,wb=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,xb=/\d\d?/,yb=/\d{1,3}/,zb=/\d{1,4}/,Ab=/[+\-]?\d{1,6}/,Bb=/\d+/,Cb=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Db=/Z|[\+\-]\d\d:?\d\d/gi,Eb=/T/i,Fb=/[\+\-]?\d+(\.\d{1,3})?/,Gb=/\d/,Hb=/\d\d/,Ib=/\d{3}/,Jb=/\d{4}/,Kb=/[+-]?\d{6}/,Lb=/[+-]?\d+/,Mb=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Nb="YYYY-MM-DDTHH:mm:ssZ",Ob=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],Pb=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],Qb=/([\+\-]|\d\d)/gi,Rb="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),Sb={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},Tb={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},Ub={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},Vb={},Wb="DDD w W M D d".split(" "),Xb="M D H h m s w W".split(" "),Yb={M:function(){return this.month()+1},MMM:function(a){return this.lang().monthsShort(this,a)},MMMM:function(a){return this.lang().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.lang().weekdaysMin(this,a)},ddd:function(a){return this.lang().weekdaysShort(this,a)},dddd:function(a){return this.lang().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return k(this.year()%100,2)},YYYY:function(){return k(this.year(),4)},YYYYY:function(){return k(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+k(Math.abs(a),6)},gg:function(){return k(this.weekYear()%100,2)},gggg:function(){return k(this.weekYear(),4)},ggggg:function(){return k(this.weekYear(),5)},GG:function(){return k(this.isoWeekYear()%100,2)},GGGG:function(){return k(this.isoWeekYear(),4)},GGGGG:function(){return k(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return s(this.milliseconds()/100)},SS:function(){return k(s(this.milliseconds()/10),2)},SSS:function(){return k(this.milliseconds(),3)},SSSS:function(){return k(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+k(s(a/60),2)+":"+k(s(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+k(s(a/60),2)+k(s(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},Zb=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];Wb.length;)eb=Wb.pop(),Yb[eb+"o"]=d(Yb[eb],eb);for(;Xb.length;)eb=Xb.pop(),Yb[eb+eb]=c(Yb[eb],2);for(Yb.DDDD=c(Yb.DDD,3),h(e.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=db.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=db([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return Y(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),db=function(c,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=c,g._f=d,g._l=e,g._strict=f,g._isUTC=!1,g._pf=b(),$(g)},db.utc=function(c,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=c,g._f=d,g._strict=f,g._pf=b(),$(g).utc()},db.unix=function(a){return db(1e3*a)},db.duration=function(a,b){var c,d,e,f=a,h=null;return db.isDuration(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(f={},b?f[b]=a:f.milliseconds=a):(h=tb.exec(a))?(c="-"===h[1]?-1:1,f={y:0,d:s(h[kb])*c,h:s(h[lb])*c,m:s(h[mb])*c,s:s(h[nb])*c,ms:s(h[ob])*c}):(h=ub.exec(a))&&(c="-"===h[1]?-1:1,e=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*c},f={y:e(h[2]),M:e(h[3]),d:e(h[4]),h:e(h[5]),m:e(h[6]),s:e(h[7]),w:e(h[8])}),d=new g(f),db.isDuration(a)&&a.hasOwnProperty("_lang")&&(d._lang=a._lang),d},db.version=fb,db.defaultFormat=Nb,db.updateOffset=function(){},db.lang=function(a,b){var c;return a?(b?A(y(a),b):null===b?(B(a),a="en"):pb[a]||C(a),c=db.duration.fn._lang=db.fn._lang=C(a),c._abbr):db.fn._lang._abbr},db.langData=function(a){return a&&a._lang&&a._lang._abbr&&(a=a._lang._abbr),C(a)},db.isMoment=function(a){return a instanceof f||null!=a&&a.hasOwnProperty("_isAMomentObject")},db.isDuration=function(a){return a instanceof g},eb=Zb.length-1;eb>=0;--eb)r(Zb[eb]);for(db.normalizeUnits=function(a){return p(a)},db.invalid=function(a){var b=db.utc(0/0);return null!=a?h(b._pf,a):b._pf.userInvalidated=!0,b},db.parseZone=function(a){return db(a).parseZone()},h(db.fn=f.prototype,{clone:function(){return db(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=db(this).utc();return 0<a.year()&&a.year()<=9999?F(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):F(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return x(this)},isDSTShifted:function(){return this._a?this.isValid()&&o(this._a,(this._isUTC?db.utc(this._a):db(this._a)).toArray())>0:!1},parsingFlags:function(){return h({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(a){var b=F(this,a||db.defaultFormat);return this.lang().postformat(b)},add:function(a,b){var c;return c="string"==typeof a?db.duration(+b,a):db.duration(a,b),l(this,c,1),this},subtract:function(a,b){var c;return c="string"==typeof a?db.duration(+b,a):db.duration(a,b),l(this,c,-1),this},diff:function(a,b,c){var d,e,f=z(a,this),g=6e4*(this.zone()-f.zone());return b=p(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+f.daysInMonth()),e=12*(this.year()-f.year())+(this.month()-f.month()),e+=(this-db(this).startOf("month")-(f-db(f).startOf("month")))/d,e-=6e4*(this.zone()-db(this).startOf("month").zone()-(f.zone()-db(f).startOf("month").zone()))/d,"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:j(e)},from:function(a,b){return db.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)},fromNow:function(a){return this.from(db(),a)},calendar:function(){var a=z(db(),this).startOf("day"),b=this.diff(a,"days",!0),c=-6>b?"sameElse":-1>b?"lastWeek":0>b?"lastDay":1>b?"sameDay":2>b?"nextDay":7>b?"nextWeek":"sameElse";return this.format(this.lang().calendar(c,this))},isLeapYear:function(){return v(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=V(a,this.lang()),this.add({d:a-b})):b},month:function(a){var b,c=this._isUTC?"UTC":"";return null!=a?"string"==typeof a&&(a=this.lang().monthsParse(a),"number"!=typeof a)?this:(b=this.date(),this.date(1),this._d["set"+c+"Month"](a),this.date(Math.min(b,this.daysInMonth())),db.updateOffset(this),this):this._d["get"+c+"Month"]()},startOf:function(a){switch(a=p(a)){case"year":this.month(0);case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),this},endOf:function(a){return a=p(a),this.startOf(a).add("isoWeek"===a?"week":a,1).subtract("ms",1)},isAfter:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)>+db(a).startOf(b)},isBefore:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)<+db(a).startOf(b)},isSame:function(a,b){return b=b||"ms",+this.clone().startOf(b)===+z(a,this).startOf(b)},min:function(a){return a=db.apply(null,arguments),this>a?this:a},max:function(a){return a=db.apply(null,arguments),a>this?this:a},zone:function(a){var b=this._offset||0;return null==a?this._isUTC?b:this._d.getTimezoneOffset():("string"==typeof a&&(a=I(a)),Math.abs(a)<16&&(a=60*a),this._offset=a,this._isUTC=!0,b!==a&&l(this,db.duration(b-a,"m"),1,!0),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?db(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return t(this.year(),this.month())},dayOfYear:function(a){var b=hb((db(this).startOf("day")-db(this).startOf("year"))/864e5)+1;return null==a?b:this.add("d",a-b)},quarter:function(){return Math.ceil((this.month()+1)/3)},weekYear:function(a){var b=Y(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==a?b:this.add("y",a-b)},isoWeekYear:function(a){var b=Y(this,1,4).year;return null==a?b:this.add("y",a-b)},week:function(a){var b=this.lang().week(this);return null==a?b:this.add("d",7*(a-b))},isoWeek:function(a){var b=Y(this,1,4).week;return null==a?b:this.add("d",7*(a-b))},weekday:function(a){var b=(this.day()+7-this.lang()._week.dow)%7;return null==a?b:this.add("d",a-b)},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},get:function(a){return a=p(a),this[a]()},set:function(a,b){return a=p(a),"function"==typeof this[a]&&this[a](b),this},lang:function(b){return b===a?this._lang:(this._lang=C(b),this)}}),eb=0;eb<Rb.length;eb++)_(Rb[eb].toLowerCase().replace(/s$/,""),Rb[eb]);_("year","FullYear"),db.fn.days=db.fn.day,db.fn.months=db.fn.month,db.fn.weeks=db.fn.week,db.fn.isoWeeks=db.fn.isoWeek,db.fn.toJSON=db.fn.toISOString,h(db.duration.fn=g.prototype,{_bubble:function(){var a,b,c,d,e=this._milliseconds,f=this._days,g=this._months,h=this._data;h.milliseconds=e%1e3,a=j(e/1e3),h.seconds=a%60,b=j(a/60),h.minutes=b%60,c=j(b/60),h.hours=c%24,f+=j(c/24),h.days=f%30,g+=j(f/30),h.months=g%12,d=j(g/12),h.years=d},weeks:function(){return j(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*s(this._months/12)},humanize:function(a){var b=+this,c=X(b,!a,this.lang());return a&&(c=this.lang().pastFuture(b,c)),this.lang().postformat(c)},add:function(a,b){var c=db.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=db.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=p(a),this[a.toLowerCase()+"s"]()},as:function(a){return a=p(a),this["as"+a.charAt(0).toUpperCase()+a.slice(1)+"s"]()},lang:db.fn.lang,toIsoString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"}});for(eb in Sb)Sb.hasOwnProperty(eb)&&(bb(eb,Sb[eb]),ab(eb.toLowerCase()));bb("Weeks",6048e5),db.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},db.lang("en",{ordinal:function(a){var b=a%10,c=1===s(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),rb?(module.exports=db,cb(!0)):"function"==typeof define&&define.amd?define("moment",function(b,c,d){return d.config&&d.config()&&d.config().noGlobal!==!0&&cb(d.config().noGlobal===a),db}):cb()}).call(this);
!function(){"use strict";function a(a,b,c){return a&&b&&(a.tz?a=a.tz(b):c.warn("angular-moment: timezone specified but moment.tz() is undefined. Did you forget to include moment-timezone.js?")),a}angular.module("angularMoment",[]).constant("angularMomentConfig",{timezone:""}).constant("amTimeAgoConfig",{withoutSuffix:!1}).directive("amTimeAgo",["$window","amTimeAgoConfig",function(a,b){return function(c,d,e){function f(){k&&(a.clearTimeout(k),k=null)}function g(b){d.text(b.fromNow(l));var c=a.moment().diff(b,"minute"),e=3600;1>c?e=1:60>c?e=30:180>c&&(e=300),k=a.setTimeout(function(){g(b)},1e3*e)}function h(){f(),g(a.moment(i,j))}var i,j,k=null,l=b.withoutSuffix;c.$watch(e.amTimeAgo,function(a){return"undefined"==typeof a||null===a||""===a?(f(),void(i&&(d.text(""),i=null))):(angular.isNumber(a)&&(a=new Date(a)),i=a,void h())}),angular.isDefined(e.amWithoutSuffix)&&c.$watch(e.amWithoutSuffix,function(a){"boolean"==typeof a?(l=a,h()):l=b.withoutSuffix}),e.$observe("amFormat",function(a){j=a,i&&h()}),c.$on("$destroy",function(){f()}),c.$on("amMoment:languageChange",function(){h()})}}]).factory("amMoment",["$window","$rootScope",function(a,b){return{changeLanguage:function(c){var d=a.moment.lang(c);return angular.isDefined(c)&&b.$broadcast("amMoment:languageChange"),d}}}]).filter("amCalendar",["$window","$log","angularMomentConfig",function(b,c,d){return function(e){return"undefined"==typeof e||null===e?"":(!isNaN(parseFloat(e))&&isFinite(e)&&(e=new Date(parseInt(e,10))),a(b.moment(e),d.timezone,c).calendar())}}]).filter("amDateFormat",["$window","$log","angularMomentConfig",function(b,c,d){return function(e,f){return"undefined"==typeof e||null===e?"":(!isNaN(parseFloat(e))&&isFinite(e)&&(e=new Date(parseInt(e,10))),a(b.moment(e),d.timezone,c).format(f))}}]).filter("amDurationFormat",["$window",function(a){return function(b,c,d){return"undefined"==typeof b||null===b?"":a.moment.duration(b,c).humanize(d)}}])}();
'use strict';

angular.module('templates', []);

angular.module('notesy', [
  'templates',
  'notes',
  'users',
  'sessions',

  'auth.interceptor',

  'toggle'
]).config([
  '$locationProvider',
  function($locationProvider) {
    $locationProvider.html5Mode(true);
  }
]);

angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("/javascripts/pages/notes/index/template.html","<section class=\"sidebar\">\n  <header class=\"sidebar__header\">\n    <button class=\"action u-c-light-grey\" ng-click=\"addNote()\">\n      <i class=\"fa fa-plus\"></i>\n    </button>\n  </header>\n\n  <div class=\"sidebar__body\">\n    <ul ng-show=\"notes.length\" class=\"sidebar__body__list\">\n      <li ng-repeat=\"note in notes | orderBy:\'updatedAt\':true track by note._id\"\n          class=\"sidebar__body__list__item\"\n          ng-class=\"{ \'is-active\': isState(note._id) }\">\n        <a ui-sref=\"auth.notes.show({id: note._id})\"\n           class=\"sidebar__body__list__item__link\">\n          <span class=\"u-text-truncate u-inline-block\">\n            {{ (note.text | line:1) || \"untitled\" }}\n          </span>\n          <span class=\"sidebar__body__list__item__link__meta\"\n                am-time-ago=\"note.updatedAt\"></span>\n          <span class=\"sidebar__body__list__item__link__body u-text-truncate u-inline-block\">\n            {{ note.text | line:2 }}\n          </span>\n        </a>\n      </li>\n    </ul>\n\n    <div ng-hide=\"notes.length\" class=\"sidebar__body__empty\">\n      <p class=\"u-text-center\">\n        Welcome to Notesy<br />\n        Add your first note here!\n      </p>\n    </div>\n  </div>\n</section>\n\n<header class=\"app-header u-text-right\">\n  <span class=\"u-text-s u-margin-Rm\">{{user.name}}</span>\n  <button class=\"btn btn--light btn--small btn--hollow\" ng-click=\"logout()\">\n    Log out\n  </button>\n</header>\n\n<ui-view autoscroll=\"false\"></ui-view>\n");
$templateCache.put("/javascripts/pages/notes/show/template.html","<main class=\"main\">\n  <header class=\"note-actions main__header\">\n    <button class=\"action u-c-light-grey\" ng-click=\"deleteNote(note._id)\">\n      <i class=\"fa fa-trash-o\"></i>\n    </button>\n  </header>\n\n  <div class=\"ace-wrapper\">\n    <div ui-ace=\"{\n      useWrapMode : true,\n      showGutter: false,\n      theme: \'tomorrow\',\n      mode: \'markdown\',\n      onLoad: onEditorLoaded\n    }\" ng-model=\"note.text\"></div>\n  </div>\n</main>\n");
$templateCache.put("/javascripts/pages/sessions/new/template.html","<main class=\"user-form\">\n  <div class=\"form-errors\" ng-show=\"error\">{{error}}</div>\n\n  <form novalidate class=\"user-form__body\" ng-submit=\"login()\">\n\n    <label class=\"label\" for=\"email\">Email address</label>\n    <input class=\"input\" type=\"email\" ng-model=\"form.name\" />\n\n    <label class=\"label\" for=\"email\">Password</label>\n    <input class=\"input\" type=\"password\" ng-model=\"form.password\" />\n\n    <button class=\"user-form__body__btn btn btn--green btn--large\">\n      Log in\n    </button>\n\n    <div class=\"u-text-s u-text-center\">\n      Don\'t have an account? <a ui-sref=\"users()\">Sign up here</a>\n    </div>\n  </form>\n</main>\n");
$templateCache.put("/javascripts/pages/users/new/template.html","<main class=\"user-form\">\n  <h1 class=\"user-form__heading\">Create an account</h1>\n\n  <div class=\"form-errors\" ng-show=\"errors.length\">\n    {{errors | printErrors}}\n  </div>\n\n  <form class=\"user-form__body\" ng-submit=\"createUser()\">\n\n    <label class=\"label\" for=\"email\">Email address</label>\n    <input class=\"input\" type=\"email\" ng-model=\"form.email\" />\n\n    <label class=\"label\" for=\"email\">Password</label>\n    <input class=\"input\" type=\"password\" ng-model=\"form.password\" />\n\n    <button class=\"user-form__body__btn btn btn--green btn--large\">\n      Sign up\n    </button>\n\n    <div class=\"u-text-s u-text-center\">\n      Already have an account? <a ui-sref=\"sessions()\">Log in here</a>\n    </div>\n  </form>\n</main>\n");}]);
'use strict';

angular.module('toggle', [
]).directive('toggle', [
  '$timeout', '$parse',
  function toggleDirective($timeout, $parse) {

    return function link(scope, element, attrs) {
      var hasDigested = true;
      scope.$watch(attrs.toggle, function() {
        hasDigested = false;
        $timeout(function() {
          hasDigested = true;
        });
      });

      element.bind('click', function() {
        // If the toggle has been changed by a different
        // directive, don't do anything on click.
        if (hasDigested) {
          var expr = $parse(attrs.toggle);
          scope.$apply(function() {
            expr.assign(scope, !expr(scope));
          });
        }
      });
    };

  }
]);

'use strict';

angular.module('constants', [])
.constant('COUCH_URL', 'http://localhost:5984');

'use strict';

angular.module('line.filter', [
]).filter('line', [
  function() {
    // Return the nth non blank line
    return function(text, line) {
      line = (line || 1) - 1;
      return _.isString(text) ? _.filter(text.split('\n'), function(line) {
        return line && line !== '';
      })[line] : '';
    };
  }
]);

'use strict';

angular.module('printErrors.filter', [
]).filter('printErrors', [
  function() {
    return function(errors) {
      var str = _.map(errors, function(err){
        return [err.param, err. msg].join(' ');
      }).join(', ');

      return str.charAt(0).toUpperCase() + str.slice(1);
    };
  }
]);

'use strict';

angular.module('auth.interceptor', [
  'ui.router'
]).factory('AuthInterceptor', [
  '$injector',
  function($injector) {

    function isAuthResponse(response) {
      var url = (response && response.config && response.config.url) || '';
      return _.contains(url, '/_session');
    }

    return function(promise) {
      return promise.catch(function(response) {
        if (response.status === 401 && !isAuthResponse(response)) {
          $injector.get('$state').go('sessions');
        }
        return promise;
      });
    };

  }
])

// We have to add the interceptor to the queue as a
// string because the interceptor depends upon service
// instances that are not available in the config block.
.config([
  '$httpProvider',
  function($httpProvider) {
    $httpProvider.responseInterceptors.push('AuthInterceptor');
  }
]);

'use strict';

angular.module('notes.resource', [
  'pouchdb',
  'constants',
  'ui.router',
]).factory('NotesResource', [
  'pouchdb',
  'COUCH_URL',
  '$state',
  function(pouchdb, COUCH_URL, $state){

    function init(dbName) {
      var notes = pouchdb.create(dbName);
      var remote = COUCH_URL + '/' + dbName;

      pouchdb.replicate(dbName, remote, {
        continuous: true,
        create_target: true,
        complete: function(resp) {
          // TODO: submit a pull to pouchdb to pass the actual error code
          //       through this is always a 500 right now which is no good for
          //       checking auth errors, hence the res.message comparison.
          if (resp.error &&
              resp.message === 'You are not authorized to access this db.') {
            $state.go('sessions');
          }
        }
      });

      pouchdb.replicate(remote, dbName, {
        continuous: true,
        create_target: true
      });

      return notes;
    }

    return {
      init: init
    };

  }
]);

'use strict';

angular.module('notes.service', [
  'notes.resource'
]).factory('NotesService', [
  'NotesResource',
  function(NotesResource){
    var notes;

    // Private functions
    function findInCache(id) {
      return _.find(notes, { _id: id });
    }

    function addToCache(id) {
      NotesResource.get(id).then(function(newNote) {
        notes.push(newNote);
      });
    }

    function removeFromCache(id) {
      return _.remove(notes, { _id: id });
    }

    function isTextUnchanged(id) {
      id = (id || '');
      return NotesResource.get(id).then(function(note) {
        return findInCache(id).text === note.text;
      });
    }

    function assignIfChanged(dest, src) {
      if (dest._rev === src._rev) return;
      isTextUnchanged(dest._id).then(function(isUnchanged) {
        if (isUnchanged) delete src.text;
        return _.assign(dest, src);
      });
    }

    function onChange(revision) {
      var noteId = revision.id;
      var existing = findInCache(noteId);
      var existingRev = existing && existing._rev;
      var newRev = _.last(revision.changes).rev;

      // No need to update if we already have the same revision in memory
      if (existingRev === newRev) return;

      // Handle deletion
      if (existing && revision.deleted) return removeFromCache(noteId);

      // Handle addition
      if (!existing) return addToCache(noteId);

      // Not unchanged, deleted or new so it must be an update
      NotesResource.get(noteId).then(function(newNote) {
        assignIfChanged(existing, newNote);
      });
    }

    // Public functions
    function init(dbName) {
      // Only init once
      if (notes) return;
      NotesResource = NotesResource.init(dbName);
      notes = [];
      NotesResource.changes({ continuous: true, onChange: onChange });
    }

    function allDocs() {
      return NotesResource.allDocs({ include_docs: true }).then(function(resp) {
        _.each(_.pluck(resp.rows, 'doc'), function(newNote) {
          var existing = findInCache(newNote._id);

          if (existing) {
            assignIfChanged(existing, newNote);
          } else {
            notes.push(newNote);
          }
        });
        return notes;
      });
    }

    // TODO: reconsider full query and merge on every get?
    function get(id) {
      return allDocs().then(function() {
        return findInCache(id);
      });
    }

    function put(note) {
      // Only trigger a put if the text of the note is different to the text
      // in the database. This prevents a remote update from triggering an
      // immediate put with the same data.
      return isTextUnchanged(note._id).then(function(isUnchanged) {
        if (isUnchanged) return findInCache(note._id);

        note.updatedAt = (new Date()).valueOf();
        return NotesResource.put(note).then(function(resp) {
          note._rev = resp.rev;
          return note;
        });
      });
    }

    function post(note) {
      note.createdAt = note.updatedAt = (new Date()).valueOf();
      return NotesResource.post(note).then(function(resp) {
        note._id = resp.id;
        note._rev = resp.rev;
        notes.push(note);
        return note;
      });
    }

    function remove(note) {
      return NotesResource.remove(note);
    }

    return {
      init: init,
      allDocs: allDocs,
      get: get,
      put: put,
      post: post,
      remove: remove
    };
  }
]);

'use strict';

angular.module('param.service', [])
.factory('param', [
  function() {

    function isArray(value) {
      return Array.isArray(value);
    }

    function isObject(value) {
      return !!(value && typeof value === 'object');
    }

    function encode(uri) {
      return encodeURIComponent(uri);
    }

    function defValue(value) {
      if (value == null) { value = ''; }
      return value;
    }

    function param(source, prefix) {
      if (!isObject(source)) {
        throw new Error('\'source\' must be an object');
      }
      return Object.keys(source).map(function(key, index) {
        var value = source[key];
        var hasIndex = isArray(source) && isObject(value);
        var name = hasIndex ? index : isArray(source) ? defValue() : key;

        if (prefix) key = prefix + '[' + name + ']';
        if (isObject(value)) return param(value, key);

        return encode(key) + '=' + encode(defValue(value));
      }).join('&').replace(/%20/g, '+');
    }

    return param;
  }
]);

'use strict';

angular.module('sessions.service', [
  'constants',
  'param.service'
]).factory('SessionsService', [
  '$http',
  'param',
  'COUCH_URL',
  function($http, param, COUCH_URL){

    function get() {
      return $http.get(COUCH_URL + '/_session', { withCredentials: true });
    }

    function create(login) {
      return $http.post(COUCH_URL + '/_session', param(login), {
        withCredentials: true,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
    }

    function destroy() {
      return $http.delete(COUCH_URL + '/_session', { withCredentials: true });
    }

    return {
      get: get,
      create: create,
      destroy: destroy
    };
  }
]);

'use strict';

angular.module('users.service', [
  'sessions.service',
  'constants'
]).factory('UsersService', [
  '$q',
  '$http',
  '$window',
  'COUCH_URL',
  'SessionsService',
  function($q, $http, $window, COUCH_URL, SessionsService){

    function get() {
      return SessionsService.get().then(function(session) {
        if (session.data.userCtx.name == null) {
          var deferred = $q.defer();
          deferred.reject({
            data: { error: 'unauthorized', reason: 'Not signed in' },
            status: 401
          });
          return deferred.promise;
        }

        var slug = 'org.couchdb.user:' + session.data.userCtx.name;
        var url = COUCH_URL + '/_users/' + $window.encodeURIComponent(slug);

        return $http.get(url, { withCredentials: true }).then(function(user) {
          return user.data;
        });
      });
    }

    function create(user) {
      return $http.post('/users', user);
    }

    return {
      create: create,
      get: get
    };
  }
]);

'use strict';

angular.module('notes', [
  'ui.router',
  'ui.ace',
  'angularMoment',
  'line.filter',
  'printErrors.filter',
  'users.service',
  'notes.service',
  'notes.index',
  'notes.show'
]).config(['$stateProvider', function($stateProvider) {

  $stateProvider.state('auth', {
    abstract: true,
    template: '<ui-view />',
    resolve: {
      user: [
        'UsersService',
        '$state',
        function(UsersService, $state) {
          return UsersService.get().catch(function(err) {
            if (err.status === 401) $state.go('sessions');
          });
        }
      ]
    }
  });

  $stateProvider.state('auth.notes', {
    url: '/',
    templateUrl: '/javascripts/pages/notes/index/template.html',
    controller: 'NotesIndexController',
    resolve: {
      notes: [
        'NotesService',
        'user',
        function(NotesService, user) {
          NotesService.init(user.notes_db);
          return NotesService.allDocs();
        }
      ]
    }
  });

  $stateProvider.state('auth.notes.show', {
    url: ':id',
    templateUrl: '/javascripts/pages/notes/show/template.html',
    controller: 'NotesShowController',
    resolve: {
      note: [
        'NotesService',
        '$stateParams',
        'user',
        function(NotesService, $stateParams, user) {
          NotesService.init(user.notes_db);
          return NotesService.get($stateParams.id);
        }
      ]
    }
  });

}]);

'use strict';

angular.module('sessions', [
  'ui.router',
  'sessions.new'
]).config(['$stateProvider', function($stateProvider) {

  $stateProvider.state('sessions', {
    url: '/users/login',
    templateUrl: '/javascripts/pages/sessions/new/template.html',
    controller: 'SessionsNewController'
  });

}]);

'use strict';

angular.module('users', [
  'ui.router',
  'users.new'
]).config(['$stateProvider', function($stateProvider) {

  $stateProvider.state('users', {
    url: '/users/new',
    templateUrl: '/javascripts/pages/users/new/template.html',
    controller: 'UsersNewController'
  });

}]);

'use strict';

angular.module('notes.index', [
  'ui.router',
  'notes.service',
  'sessions.service'
]).controller('NotesIndexController', [
  '$scope',
  '$state',
  'notes',
  'user',
  'NotesService',
  'SessionsService',
  function($scope, $state, notes, user, NotesService, SessionsService) {
    $scope.notes = notes;
    $scope.user = user;

    $scope.isState = function(id) {
      return $state.is('auth.notes.show', { id: id });
    };

    $scope.addNote = function() {
      NotesService.post({ text: '' }).then(function(resp) {
        $state.go('auth.notes.show', { id: resp._id });
      });
    };

    $scope.logout = function() {
      SessionsService.destroy().then(function() {
        $state.go('sessions');
      });
    };
  }
]);

'use strict';

angular.module('notes.show', [
  'notes.service'
]).controller('NotesShowController', [
  '$scope',
  '$state',
  'note',
  'NotesService',
  function($scope, $state, note, NotesService) {
    $scope.note = note;

    // Add a shortcut to turn it off in the ace instance
    var DISABLE_SHORTCUTS = [
      { win: 'Ctrl-F', mac: 'Command-F' },
      { win: 'Ctrl-L', mac: 'Command-L' }
    ];

    $scope.onEditorLoaded = function(editor) {
      editor.setFontSize(20);
      editor.setShowPrintMargin(false);
      editor.setHighlightActiveLine(false);

      editor.commands.addCommands(DISABLE_SHORTCUTS.map(function(keys) {
        return {
          name: 'disable' + keys.mac,
          bindKey: keys,
          exec: function disabled() { return false; },
          readOnly: true
        };
      }));

      editor.focus();
    };

    $scope.deleteNote = function() {
      NotesService.remove($scope.note).then(function() {
        $state.go('auth.notes');
      });
    };

    $scope.$watchCollection('note.text', function() {
      NotesService.put($scope.note);
    });

  }
]);

'use strict';

angular.module('sessions.new', [
  'sessions.service'
]).controller('SessionsNewController', [
  '$scope',
  '$state',
  'SessionsService',
  function($scope, $state, SessionsService) {

    $scope.form = {};

    $scope.login = function() {
      delete $scope.error;

      SessionsService.create($scope.form).then(function() {
        $state.go('auth.notes');
      }).catch(function(err) {
        $scope.error = err.data.reason;
      });
    };

  }
]);

'use strict';

angular.module('users.new', [
  'users.service',
  'sessions.service'
]).controller('UsersNewController', [
  '$scope',
  '$state',
  'UsersService',
  'SessionsService',
  function($scope, $state, UsersService, SessionsService) {

    $scope.form = {};

    $scope.createUser = function() {
      UsersService.create($scope.form).then(function() {
        return SessionsService.create($scope.form).then(function() {
          $state.go('auth.notes');
        });
      }).catch(function(err) {
        if (err.data && err.data.errors) $scope.errors = err.data.errors;
      });
    };

  }
]);
