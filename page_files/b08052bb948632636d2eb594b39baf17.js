(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n=this||self;function p(a,b){return a.g?a.j.slice(0,a.g.index)+b+a.j.slice(a.g.index):a.j+b}function r(a,b){return a.i&&a.h||a.l?1==b?a.i?a.h:p(a,"&dct=1"):2==b?p(a,"&ri=2"):p(a,"&ri=16"):a.j}var aa=class{constructor({url:a}){this.j=a;const b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){let c;try{c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}};function t(a){var b;a:{if(b=n.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};var u=class{constructor(a,b){this.g=b===ba?a:""}};u.prototype.i=!0;u.prototype.h=function(){return this.g.toString()};u.prototype.toString=function(){return this.g.toString()};function ca(a){return a instanceof u&&a.constructor===u?a.g:"type_error:SafeUrl"}var da=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,ba={};function ea(a,b){a:{const c=a.length,d="string"===typeof a?a.split(""):a;for(let e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};function fa(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};function v(a,b){b instanceof u||b instanceof u||(b="object"==typeof b&&b.i?b.h():String(b),da.test(b)||(b="about:invalid#zClosurez"),b=new u(b,ba));a.href=ca(b)};function ha(){return t("iPhone")&&!t("iPod")&&!t("iPad")};function ia(a){ia[" "](a);return a}ia[" "]=function(){};var ka=ha(),la=t("iPad");var ma=ha()||t("iPod"),na=t("iPad");var oa={},w=null;
function pa(a,b){void 0===b&&(b=0);if(!w){w={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));oa[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===w[h]&&(w[h]=g)}}}b=oa[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var l=a[f],k=a[f+1];h=a[f+2];g=b[l>>2];l=b[(l&3)<<4|k>>4];k=b[(k&15)<<2|h>>6];h=b[h&63];c[e++]=g+l+k+h}g=0;h=d;switch(a.length-f){case 2:g=
a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")};var qa="function"===typeof Uint8Array;const y=Symbol(void 0);function z(a){Object.isFrozen(a)||(y?a[y]|=1:void 0!==a.g?a.g|=1:Object.defineProperties(a,{g:{value:1,configurable:!0,writable:!0,enumerable:!1}}));return a};function sa(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}let ta;function B(a){a=a.g;const b=[];for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}function D(a,b){let c=b[1];a.j&&(Array.isArray(c)||null==c)&&(a=new a.j(c),c=b[1]=a);return c}function ua(a,b){const c=B(a);c.sort();for(let d=0;d<c.length;d++){const e=a.g[c[d]];b.call(void 0,D(a,e),e[0],a)}}
var E=class{constructor(a,b){this.h=a;this.j=b;this.g={};this.i=!1;this.size=0;for(a=0;a<this.h.length;a++){b=this.h[a];const c=b[0].toString(),d=this.g[c];this.g[c]=b;void 0===d&&this.size++}}entries(){const a=[],b=B(this);b.sort();for(let c=0;c<b.length;c++){const d=this.g[b[c]];a.push([d[0],D(this,d)])}return new va(a)}keys(){const a=[],b=B(this);b.sort();for(let c=0;c<b.length;c++)a.push(this.g[b[c]][0]);return new va(a)}values(){const a=[],b=B(this);b.sort();for(let c=0;c<b.length;c++)a.push(D(this,
this.g[b[c]]));return new va(a)}set(a,b){const c=a.toString(),d=this.g[c];d?d[1]=b:(a=[a,b],this.g[c]=a,this.h.push(a),this.i=!1,this.size++);return this}get(a){if(a=this.g[a.toString()])return D(this,a)}has(a){return a.toString()in this.g}[Symbol.iterator](){return this.entries()}};class va{constructor(a){this.h=0;this.g=a}next(){return this.h<this.g.length?{done:!1,value:this.g[this.h++]}:{done:!0,value:void 0}}[Symbol.iterator](){return this}};function wa(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(qa&&null!=a&&a instanceof Uint8Array)return pa(a);if(a instanceof E){if(!a.i){const b=B(a);b.sort();for(let c=0;c<b.length;c++)a.h[c]=a.g[b[c]];b.length<a.h.length&&(a.h.length=b.length);a.i=!0;a.size=a.h.length}return a.h}}}return a};function xa(a,b){if(null!=a)return Array.isArray(a)||sa(a)?ya(a,b):b(a)}function ya(a,b){if(Array.isArray(a)){var c=Array(a.length);for(let e=0;e<a.length;e++)c[e]=xa(a[e],b);if(b=Array.isArray(a)){var d;y?d=a[y]:d=a.g;b=(null==d?0:d)&1}b&&z(c);return c}d={};for(c in a)d[c]=xa(a[c],b);return d}function za(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=wa(a);return Array.isArray(a)?ya(a,za):a}
function Aa(a){if(qa&&null!=a&&a instanceof Uint8Array)a=new Uint8Array(a);else if(a instanceof E){const b=a.j,c=new E(z([]),b);for(let d in a.g){const e=a.g[d];b?c.set(e[0],Ba(D(a,e))):c.set(e[0],xa(e[1],Aa))}a=c}return a};let Ca;function G(a,b,c){var d=Ca;Ca=null;a||(a=d);d=this.constructor.P;a||(a=d?[d]:[]);this.j=(d?0:-1)-(this.constructor.O||0);this.i=void 0;this.g=a;a:{d=this.g.length;a=d-1;if(d&&(d=this.g[a],sa(d))){this.l=a-this.j;this.h=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.h=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.j,(d=this.g[a])?Array.isArray(d)&&z(d):this.g[a]=Da;else{d=this.h||(this.h=this.g[this.l+this.j]={});let e=d[a];e?Array.isArray(e)&&
z(e):d[a]=Da}}const Da=Object.freeze(z([]));function H(a,b,c=!1){return-1===b?null:b>=a.l?a.h?a.h[b]:void 0:c&&a.h&&(c=a.h[b],null!=c)?c:a.g[b+a.j]}function Ea(a,b,c=!1){let d=H(a,b,c);null==d&&(d=Da);d===Da&&(d=z(d.slice()),I(a,b,d,c));return d}function K(a,b,c){a=H(a,b);return null==a?c:a}function L(a,b){a=H(a,b);a=null==a?a:!!a;return null==a?!1:a}function M(a,b,c){var d=H(a,b);null==d&&(d=z([]));d.constructor===E?a=d:(c=new E(d,c),I(a,b,c,!1),a=c);return a}
function I(a,b,c,d=!1){d||b>=a.l?(a.h||(a.h=a.g[a.l+a.j]={}))[b]=c:a.g[b+a.j]=c;return a}function N(a,b,c,d,e=!1){if(-1===c)return null;a.i||(a.i={});const f=a.i[c];if(f)return f;e=H(a,c,e);if(null==e&&!d)return f;b=new b(e);return a.i[c]=b}function Fa(a,b,c,d=!1){a.i||(a.i={});let e=a.i[c];if(!e){d=Ea(a,c,d);e=[];for(let f=0;f<d.length;f++)e[f]=new b(d[f]);a.i[c]=e}return e}G.prototype.toJSON=function(){const a=this.g;return ta?a:ya(a,za)};function Ga(a,b){return wa(b)}
function Ha(a){ta=!0;try{return JSON.stringify(a.toJSON(),Ga)}finally{ta=!1}}G.prototype.toString=function(){return this.g.toString()};function Ba(a){var b=a.constructor,c=ya(a.g,Aa);Ca=c;b=new b(c);Ca=null;Ia(b,a);return b}
function Ia(a,b){b.m&&(a.m=b.m.slice());const c=b.i;if(c){b=b.h;for(let f in c){const g=c[f];if(g){var d=!(!b||!b[f]),e=+f;if(Array.isArray(g)){if(g.length)for(d=Fa(a,g[0].constructor,e,d),e=0;e<Math.min(d.length,g.length);e++)Ia(d[e],g[e])}else(d=N(a,g.constructor,e,void 0,d))&&Ia(d,g)}}}}function O(a,b){return K(a,b,"")};var Ka=class extends G{constructor(a){super(a,-1,Ja)}},Ja=[6];var La=class extends G{constructor(a){super(a)}},Pa=class extends G{constructor(a){super(a)}};var Ra=class extends G{constructor(a){super(a,-1,Qa)}},Sa=class extends G{constructor(a){super(a)}o(){return O(this,3)}H(a){I(this,5,a)}},Ta=class extends G{constructor(a){super(a)}o(){return O(this,1)}H(a){I(this,2,a)}},Ua=class extends G{constructor(a){super(a)}},Qa=[6,7];var Wa=class extends G{constructor(a){super(a,-1,Va)}},Va=[17];var Xa=class extends G{constructor(a){super(a)}};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Ya=class{};class Za extends Ya{constructor(a){super();this.g=a}toString(){return this.g}}var $a=new Za("about:invalid#zTSz");function ab(a){if(a instanceof Ya)if(a instanceof Za)a=a.g;else throw Error("");else a=ca(a);return a};var bb={capture:!0},cb={passive:!0},db=fa(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});n.addEventListener("test",null,b)}catch(b){}return a});function eb(a){return a?a.passive&&db()?a:a.capture||!1:!1}function P(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,eb(d))}function fb(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,eb(void 0))};function gb(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)};var ib=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jb(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]}function kb(a,b){return b?a?a+"&"+b:b:a}function lb(a,b){if(!b)return a;a=jb(a);a[1]=kb(a[1],b);return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function nb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)nb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}function ob(a){var b=[],c;for(c in a)nb(c,a[c],b);return b.join("&")}function pb(){var a=gb();a=null!=a?"="+encodeURIComponent(String(a)):"";return lb("https://pagead2.googlesyndication.com/pagead/gen_204","zx"+a)}
function qb(a,b){a=jb(a);var c=a[1],d=[];c&&c.split("&").forEach(function(e){var f=e.indexOf("=");b.hasOwnProperty(0<=f?e.substr(0,f):e)||d.push(e)});a[1]=kb(d.join("&"),ob(b));return a[0]+(a[1]?"?"+a[1]:"")+a[2]};function rb(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{ia(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function sb(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}let tb=[];const ub=()=>{const a=tb;tb=[];for(const b of a)try{b()}catch(c){}};
var vb=a=>{tb.push(a);1==tb.length&&(window.Promise?Promise.resolve().then(ub):window.setImmediate?setImmediate(ub):setTimeout(ub,0))},wb=a=>{var b=Q;"complete"===b.readyState||"interactive"===b.readyState?vb(a):b.addEventListener("DOMContentLoaded",a)},xb=a=>{var b=window;"complete"===b.document.readyState?vb(a):b.addEventListener("load",a)};function yb(a){a=void 0===a?document:a;return a.createElement("img")};function R(a,b,c=null){zb(a,b,c)}function zb(a,b,c){a.google_image_requests||(a.google_image_requests=[]);const d=yb(a.document);if(c){const e=f=>{c&&c(f);fb(d,"load",e);fb(d,"error",e)};P(d,"load",e);P(d,"error",e)}d.src=b;a.google_image_requests.push(d)}
var Ab=(a,b)=>{var c;if(c=a.navigator)c=a.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&a.navigator.sendBeacon?a.navigator.sendBeacon(b):R(a,b)},Cb=()=>{let a="https://pagead2.googlesyndication.com/pagead/gen_204?id=badpubwin";sb({stack:Error().stack,aswift:window.google_async_iframe_id},(b,c)=>{b&&(a+=`&${c}=${encodeURIComponent(b)}`)});Bb(a)},Bb=a=>{var b=window;b.fetch?b.fetch(a,{keepalive:!0,credentials:"include",redirect:"follow",method:"get",mode:"no-cors"}):R(b,a)};let Db=0;function Eb(a){return(a=Fb(a,document.currentScript))&&a.getAttribute("data-jc-version")||"unknown"}function Fb(a,b=null){return b&&b.getAttribute("data-jc")===String(a)?b:document.querySelector(`[${"data-jc"}="${a}"]`)}function Gb(a){.01<Math.random()||(a=`https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${Eb(a)}&sample=${.01}`,Ab(window,a))};var Q=document,S=window;class Hb{constructor(a){this.N=a}}function T(a){return new Hb(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const Ib=new Hb(a=>/^[^:]*([/?#]|$)/.test(a));var Jb=T("http"),Kb=T("https"),Lb=T("ftp"),Mb=T("mailto");const Nb=[T("data"),Jb,Kb,Mb,Lb,Ib];function Ob(a,b=Nb){for(let c=0;c<b.length;++c){const d=b[c];if(d instanceof Hb&&d.N(a))return new Za(a)}}function Tb(a,b=Nb){return Ob(a,b)||$a};const Ub=[Jb,Kb,Mb,Lb,Ib,T("market"),T("itms"),T("intent"),T("itms-appss")];function Vb(a,b){if(a instanceof u)return a;const c=Tb(a,Ub);c===$a&&b(a);return new u(ab(c),ba)}var Xb=a=>{var b=`${Wb()?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return c=>{c=ob({id:"unsafeurl",ctx:a,url:c});c=lb(b,c);navigator.sendBeacon&&navigator.sendBeacon(c,"")}};var Wb=()=>{var a=void 0===a?S:a;return"http:"===a.location.protocol},Yb=!!window.google_async_iframe_id;let U=Yb&&window.parent||window;var Zb=a=>{var b=Q;try{return b.querySelectorAll("*["+a+"]")}catch(c){return[]}};class $b{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};const ac=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");var bc=class{constructor(a,b){this.g=a;this.h=b}},cc=class{constructor(a,b){this.url=a;this.G=!!b;this.depth=null}};function dc(a,b){const c={};c[a]=b;return[c]}function ec(a,b,c,d,e){const f=[];sb(a,function(g,h){(g=fc(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)}
function fc(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let g=0;g<a.length;g++)f.push(fc(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(ec(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function gc(a){let b=1;for(const c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1}
function hc(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;let d=gc(a)-c.length;if(0>d)return"";a.g.sort(function(f,g){return f-g});c=null;let e="";for(let f=0;f<a.g.length;f++){const g=a.g[f],h=a.h[g];for(let l=0;l<h.length;l++){if(!d){c=null==c?g:c;break}let k=ec(h[l],a.i,",$");if(k){k=e+k;if(d>=k.length){d-=k.length;b+=k;e=a.i;break}c=null==c?g:c}}}a="";null!=c&&(a=e+"trn="+c);return b+a}class ic{constructor(){this.i="&";this.h={};this.j=0;this.g=[]}};function jc(){var a=kc,b=W.google_srt;0<=b&&1>=b&&(a.g=b)}function lc(a,b,c,d,e,f){if((d?a.g:Math.random())<(e||.01))try{let g;c instanceof ic?g=c:(g=new ic,sb(c,(l,k)=>{var m=g,q=m.j++;l=dc(k,l);m.g.push(q);m.h[q]=l}));const h=hc(g,a.h,"/pagead/gen_204?id="+b+"&");h&&("undefined"!==typeof f?R(n,h,f):R(n,h))}catch(g){}}class mc{constructor(){this.h=Wb()?"http:":"https:";this.g=Math.random()}};let nc=null;var oc=()=>{var a=void 0===a?n:a;return(a=a.performance)&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()},pc=()=>{var a=void 0===a?n:a;return(a=a.performance)&&a.now?a.now():null};class qc{constructor(a,b){var c=pc()||oc();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0}};const X=n.performance,rc=!!(X&&X.mark&&X.measure&&X.clearMarks),Y=fa(()=>{var a;if(a=rc){var b;if(null===nc){nc="";try{a="";try{a=n.top.location.hash}catch(c){a=n.location.hash}a&&(nc=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=nc;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function sc(a){a&&X&&Y()&&(X.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),X.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))}
class tc{constructor(){var a=W;this.h=[];this.i=a||n;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=Y()||(null!=b?b:1>Math.random())}start(a,b){if(!this.g)return null;a=new qc(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;X&&Y()&&X.mark(b);return a}end(a){if(this.g&&"number"===typeof a.value){a.duration=(pc()||oc())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;X&&Y()&&X.mark(b);!this.g||2048<this.h.length||
this.h.push(a)}}};function uc(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);let c;for(;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(c){}}return b}
function vc(a,b,c){let d,e;try{a.g&&a.g.g?(e=a.g.start(b.toString(),3),d=c(),a.g.end(e)):d=c()}catch(f){c=!0;try{sc(e),c=a.m(b,new $b(f,{message:uc(f)}),void 0,void 0)}catch(g){a.l(217,g)}if(c){let g,h;null==(g=window.console)||null==(h=g.error)||h.call(g,f)}else throw f;}return d}function wc(a,b){var c=xc;return(...d)=>vc(c,a,()=>b.apply(void 0,d))}
class yc{constructor(){var a=zc;this.i=kc;this.h=null;this.m=this.l;this.g=void 0===a?null:a;this.j=!1}pinger(){return this.i}l(a,b,c,d,e){e=e||"jserror";let f;try{const F=new ic;var g=F;g.g.push(1);g.h[1]=dc("context",a);b.error&&b.meta&&b.id||(b=new $b(b,{message:uc(b)}));if(b.msg){g=F;var h=b.msg.substring(0,512);g.g.push(2);g.h[2]=dc("msg",h)}var l=b.meta||{};b=l;if(this.h)try{this.h(b)}catch(J){}if(d)try{d(b)}catch(J){}d=F;l=[l];d.g.push(3);d.h[3]=l;d=n;l=[];b=null;do{var k=d;if(rb(k)){var m=
k.location.href;b=k.document&&k.document.referrer||null}else m=b,b=null;l.push(new cc(m||""));try{d=k.parent}catch(J){d=null}}while(d&&k!=d);for(let J=0,Pb=l.length-1;J<=Pb;++J)l[J].depth=Pb-J;k=n;if(k.location&&k.location.ancestorOrigins&&k.location.ancestorOrigins.length==l.length-1)for(m=1;m<l.length;++m){var q=l[m];q.url||(q.url=k.location.ancestorOrigins[m-1]||"",q.G=!0)}var x=l;let ra=new cc(n.location.href,!1);k=null;const Ma=x.length-1;for(q=Ma;0<=q;--q){var C=x[q];!k&&ac.test(C.url)&&(k=
C);if(C.url&&!C.G){ra=C;break}}C=null;const Qc=x.length&&x[Ma].url;0!=ra.depth&&Qc&&(C=x[Ma]);f=new bc(ra,C);if(f.h){x=F;var A=f.h.url||"";x.g.push(4);x.h[4]=dc("top",A)}var Na={url:f.g.url||""};if(f.g.url){var Oa=f.g.url.match(ib),V=Oa[1],Qb=Oa[3],Rb=Oa[4];A="";V&&(A+=V+":");Qb&&(A+="//",A+=Qb,Rb&&(A+=":"+Rb));var Sb=A}else Sb="";V=F;Na=[Na,{url:Sb}];V.g.push(5);V.h[5]=Na;lc(this.i,e,F,this.j,c)}catch(F){try{lc(this.i,e,{context:"ecmserr",rctx:a,msg:uc(F),url:f&&f.g.url},this.j,c)}catch(ra){}}return!0}}
;class Ac{};let kc,xc;if(Yb&&!rb(U)){let a="."+Q.domain;try{for(;2<a.split(".").length&&!rb(U);)Q.domain=a=a.substr(a.indexOf(".")+1),U=window.parent}catch(b){}rb(U)||(U=window)}U!==window&&.01>Math.random()&&Cb();const W=U,zc=new tc;var Bc=()=>{if(!W.google_measure_js_timing){var a=zc;a.g=!1;a.h!=a.i.google_js_reporting_queue&&(Y()&&Array.prototype.forEach.call(a.h,sc,void 0),a.h.length=0)}};
(a=>{kc=null!=a?a:new mc;"number"!==typeof W.google_srt&&(W.google_srt=Math.random());jc();xc=new yc;xc.h=b=>{const c=Db;0!==c&&(b.jc=String(c),b.shv=Eb(c))};xc.j=!0;"complete"==W.document.readyState?Bc():zc.g&&P(W,"load",()=>{Bc()})})();var Cc=(a,b)=>wc(a,b),Dc=a=>{var b=Ac,c="F";b.F&&b.hasOwnProperty(c)||(c=new b,b.F=c);b=[];!a.eid&&b.length&&(a.eid=b.toString());lc(kc,"gdn-asoch",a,!0,void 0,void 0)};var Ec=(a,b)=>{b=O(a,2)||b;if(!b)return"";if(L(a,13))return b;const c=/[?&]adurl=([^&]+)/.exec(b);if(!c)return b;const d=[b.slice(0,c.index+1)];ua(M(a,4),(e,f)=>{d.push(encodeURIComponent(f)+"="+encodeURIComponent(e)+"&")});d.push(b.slice(c.index+1));return d.join("")},Fc=(a,b)=>{b=void 0===b?[]:b;b=0<b.length?b:Zb("data-asoch-targets");a=M(a,1,Ra);const c=[];for(let h=0;h<b.length;++h){var d=b[h].getAttribute("data-asoch-targets"),e=d.split(","),f=!0;for(let l of e)if(!a.has(l)){f=!1;break}if(f){f=
a.get(e[0]);for(d=1;d<e.length;++d){var g=a.get(e[d]);f=Ba(f).toJSON();g=g.toJSON();const l=Math.max(f.length,g.length);for(let k=0;k<l;++k)null==f[k]&&(f[k]=g[k]);f=new Ra(f)}e=M(f,4);null!=H(f,5)&&e.set("nb",K(f,5,0).toString());c.push({element:b[h],data:f})}else Dc({type:1,data:d})}return c},Hc=(a,b,c,d)=>{c=Ec(b,c);if(0<c.length){if(null!=H(b,18)){var e=609===d;let f;f=e?1:void 0!==Q.featurePolicy&&Q.featurePolicy.allowsFeature("attribution-reporting")?3:2;c=Gc(c,"nis",f.toString());if(e||!a.hasAttribute("attributionsourceeventid"))e=
N(b,Ka,18),a.setAttribute("attributiondestination",O(e,2)),a.setAttribute("attributionsourceeventid",O(e,1)),a.setAttribute("attributionreportto",O(e,3)),a.setAttribute("attributionexpiry",O(e,4))}v(a,Vb(c,Xb(d)));a.target||(a.target=null!=H(b,11)?O(b,11):"_top")}},Ic=a=>{var b=void 0===b?"":b;for(const d of a){a=d.data;var c=0===b.length?!1:d.element.matches(b);"A"!=d.element.tagName||L(a,1)||c||(c=d.element,Hc(c,a,c.href,609))}},Jc=a=>{const b=n.oneAfmaInstance;if(b)for(const c of a)if((a=c.data)&&
null!=H(a,8)){const d=O(N(a,Ua,8),4);if(d){b.fetchAppStoreOverlay(d,void 0,O(N(a,Ua,8),6));break}}},Kc=(a,b)=>{b=void 0===b?500:b;const c=[],d=[];for(var e of a)(a=e.data)&&null!=H(a,12)&&(d.push(N(a,Ta,12)),c.push(N(a,Ta,12).o()));e=(f,g)=>{if(g)for(const h of d)g[h.o()]&&h.H(!0)};a=n.oneAfmaInstance;for(const f of c){let g;null==(g=a)||g.canOpenAndroidApp(f,e,()=>{},b)}},Mc=(a,b,c,d,e)=>{if(a||!b||null==H(b,12))return!1;const f=N(b,Ta,12).o();a="";if(0<Fa(b,Sa,7).length)for(const g of Fa(b,Sa,7))a+=
O(g,2)+" "+g.o()+" ";if(L(N(b,Ta,12),2))return Lc({id:"gmob-apps",event:"och-open-android-app-before-click",deepLinks:a,appId:f,isDeepLinkPath:!1,exptIds:e}),d.click(c),d.openAndroidApp(f),setTimeout(()=>{var g={id:"gmob-apps",event:"och-open-android-app",appId:f,isDeepLinkPath:!1,exptIds:e};Z(qb(pb(),g))},1E3),!0;Lc({id:"gmob-apps",event:"och-open-android-app-validated-false",deepLinks:a,appId:f,isDeepLinkPath:!1,exptIds:e});return!1},Oc=(a,b,c,d,e,f,g,h)=>{if(!c||null==H(c,8))return!1;const l=N(c,
Ua,8);let k=O(l,2);ua(M(c,10),(m,q)=>{var x=k;q=encodeURIComponent(q);const C=encodeURIComponent(m);m=new RegExp("[?&]"+q+"=([^&]+)");const A=m.exec(x);console.log(A);q=q+"="+C;k=A?x.replace(m,A[0].charAt(0)+q):x.replace("?","?"+q+"&")});Lc({id:"gmob-apps",event:"och-try-u2-redirect",appId:O(l,4)||"",isIos:a,isDeepLinkPath:!1,exptIds:f});g&&Nc(c)&&L(c,15)&&!/[?&]label=/.test(d)&&(d=Gc(d,"label","deep_link_fallback"));a=m=>e.openStoreOverlay(m,void 0,O(l,6));c=m=>Ab(S,m);return e.redirectForStoreU2({clickUrl:d,
trackingUrl:O(l,3),finalUrl:k,pingFunc:h?c:e.click,openFunc:(null==b?0:L(b,1))?a:e.openIntentOrNativeApp})},Pc=(a,b)=>{b=void 0===b?null:b;if(null!==b){const c=new aa({url:a});if(c.i&&c.h||c.l)return b(p(c,"&act=1&ri=1")),r(c,1)}else return b=new aa({url:a}),b.i&&b.h||b.l?navigator.sendBeacon?navigator.sendBeacon(p(b,"&act=1&ri=1"),"")?r(b,1):r(b,2):r(b,0):a;return a},Lc=a=>{Z(qb(pb(),a))},Z=(a,b)=>{(void 0===b||b)&&S.fetch?S.fetch(a,{method:"GET",keepalive:!0,mode:"no-cors"}).then(c=>{c.ok||R(S,
a)}):R(S,a)},Gc=(a,b,c)=>{b=encodeURIComponent(String(b));c=encodeURIComponent(String(c));return a.replace("?","?"+b+"="+c+"&")},Nc=a=>{for(const b of Fa(a,Sa,7))if(3===K(b,1,0)&&O(b,2))return!0;return!1};var Sc=class extends G{constructor(){super(void 0,-1,Rc)}},Rc=[6];const Tc="platform platformVersion architecture model uaFullVersion bitness".split(" ");
function Uc(){var a=window,b,c;return"function"!==typeof(null===(c=null===(b=null===a||void 0===a?void 0:a.navigator)||void 0===b?void 0:b.userAgentData)||void 0===c?void 0:c.getHighEntropyValues)?null:a.navigator.userAgentData.getHighEntropyValues(Tc).then(d=>{var e=new Sc;e=I(e,1,d.platform);e=I(e,2,d.platformVersion);e=I(e,3,d.architecture);e=I(e,4,d.model);e=I(e,5,d.uaFullVersion);return I(e,9,d.bitness)})};function Vc(a){for(const b of a)if("A"==b.element.tagName){a=b.element;const c=b.data;null!=H(c,2)||I(c,2,a.href)}}function Wc(a,b){return ea(a,c=>c.element===b)}function Xc(a){wb(Cc(556,()=>{new Yc(a||{})}))}
function Zc(a,b,c,d){if(!L(d,13)){var e=c.href;var f=/[?&]adurl=([^&]+)/.exec(e);e=f?[e.slice(0,f.index),e.slice(f.index)]:[e,""];for(v(c,Vb(e[0],Xb(557)));!c.id;)if(f="asoch-id-"+gb(),!Q.getElementById(f)){c.id=f;break}f=c.id;"function"===typeof window.xy&&window.xy(b,c,Q.body);"function"===typeof window.mb&&window.mb(c);"function"===typeof window.bgz&&window.bgz(f);"function"===typeof window.ja&&window.ja(f,d?K(d,5,0):0);a.i&&"function"===typeof window.ss&&(a.D?window.ss(f,1,a.i):window.ss(a.i,
1));0<e.length&&(a=0<a.v.length?c.href+"&uach="+encodeURIComponent(a.v)+e[1]:c.href+e[1],v(c,Vb(a,Xb(557))))}}async function $c(a,b,c,d){let e="";var f=n.oneAfmaInstance;if(f&&(e=await f.appendClickSignalsAsync(c.href)||"",a.A&&(f=await f.getNativeClickMeta()))){if(f.customClickGestureEligible)return;e=Gc(e,"nas",f.encodedNas)}ad(a,b,c,d,e)}
function ad(a,b,c,d,e){const f=L(a.h,2),g=f&&300<Date.now()-a.C,h=n.oneAfmaInstance;if(h){if(b.preventDefault?b.preventDefault():b.returnValue=!1,e=h.logScionEventAndAddParam(e),!Mc(a.l,d,e,h,a.m)&&!Oc(a.l,a.j,d,e,h,a.m,a.J,a.K)){c=a.L;b=a.l;var l=a.m;const k=L(d,15),m=!/[?&]dsh=1(&|$)/.test(e)&&/[?&]ae=1(&|$)/.test(e);!f||!g||k&&m||(e=Pc(e,h.click));e&&e.startsWith("intent:")?(h.openIntentOrNativeApp(e),d={id:"gmob-apps",event:"och-open-intent-or-native-app",appId:null!=H(d,8)&&O(N(d,Ua,8),4)||"",
isIos:b,isDeepLinkPath:!1,exptIds:l},Z(qb(pb(),d))):c?b?h.openBrowser(e):h.openChromeCustomTab(e):h.openSystemBrowser(e,{useFirstPackage:!0,useRunningProcess:!0})}}else d=window,d.pawsig&&"function"===typeof d.pawsig.clk?d.pawsig.clk(c):g&&(d=Pc(c.href),d!==c.href&&v(c,Vb(d,Xb(599))));g&&(a.C=Date.now());Gb(a.B)}
var Yc=class{constructor(a){this.l=ma||ka||na||la;var b=Zb("data-asoch-meta");if(1!==b.length)Dc({type:2,data:b.length});else{this.B=70;this.h=new Wa(JSON.parse(b[0].getAttribute("data-asoch-meta"))||[]);this.I=a["extra-meta"]?new Wa(JSON.parse(a["extra-meta"])):null;this.A="true"===a["is-fsn"];this.j=a["ios-store-overlay-config"]?new Xa(JSON.parse(a["ios-store-overlay-config"])):null;this.L="true"===a["use-cct-over-browser"];this.m=a["expt-ids"]||"";this.J="true"===a.avoid_ace_double_billing;this.K=
"true"===a["send-ac-click-ping-by-js"];this.v="";b=Uc();null!=b&&b.then(d=>{d=Ha(d);for(var e=[],f=0,g=0;g<d.length;g++){var h=d.charCodeAt(g);255<h&&(e[f++]=h&255,h>>=8);e[f++]=h}this.v=pa(e,3)});this.g=Fc(this.h);this.M=Number(a["deeplink-and-android-app-validation-timeout"])||500;this.C=-Infinity;this.i=O(this.h,5)||"";this.D=L(this.h,11);this.I&&(this.D=L(this.I,11));this.u=this.s=null;L(this.h,3)||(Ic(this.g),I(this.h,3,!0));Vc(this.g);a=n.oneAfmaInstance;!this.l&&a&&Kc(this.g,this.M);var c;
if(a&&(null==(c=this.j)?0:L(c,2)))switch(c=()=>{const d=K(this.j,4,0);0<d?n.setTimeout(()=>{Jc(this.g)},d):Jc(this.g)},K(this.j,3,0)){case 1:a.runOnOnShowEvent(c);break;case 2:xb(c);break;default:Jc(this.g)}P(Q,"click",Cc(557,d=>{a:if(!d.defaultPrevented||this.s===d){for(var e,f,g=d.target;(!e||!f)&&g;){f||"A"!=g.tagName||(f=g);var h=g.hasAttribute("data-asoch-targets");const q=g.hasAttribute("data-asoch-fixed-value");if(!e)if(q)e=new Ra(JSON.parse(g.getAttribute("data-asoch-fixed-value"))||[]);else if("A"==
g.tagName||h)if(h=h&&"true"===g.getAttribute("data-asoch-is-dynamic")?Fc(this.h,[g]):this.g,h=Wc(h,g))e=h.data;g=g.parentElement}if(g=e&&!L(e,1)){if(d.defaultPrevented){var l=f,k=e;if(this.s===d&&this.u){e=new La(this.u);f=O(k,9);g="";switch(K(e,4,1)){case 2:if(K(e,2,0))g="blocked_fast_click";else if(O(e,1)||O(e,7))g="blocked_border_click";break;case 3:var m=void 0===m?Q:m;m=m.getElementById?m.getElementById("common_15click_anchor"):null;"function"===typeof window.copfcChm&&m&&(k=Ba(k),I(k,5,12),
M(k,4).set("nb",(12).toString()),(g=Wc(this.g,m))?g.data=k:this.g.push({element:m,data:k}),l&&(Zc(this,d,l,k),I(k,2,l.href)),window.copfcChm(d,Ec(k,m.href),null,null!=H(e,10)?Ha(N(e,Pa,10)):null));g="onepointfiveclick_first_click"}f&&g&&Z(f+"&label="+g,!1);Gb(this.B)}break a}m=e;for(k of Ea(m,6))Z(k)}if(f&&g){m=f;e=g?e:null;(f=Wc(this.g,m))?f=f.data:(f=new Ra,I(f,2,m.href),I(f,11,m.target||"_top"),this.g.push({element:m,data:f}));Hc(m,e||f,O(f,2),557);Zc(this,d,m,e);for(l of Ea(this.h,17))f=l,k=Q.body,
g={},"function"===typeof window.CustomEvent?h=new CustomEvent(f,g):(h=document.createEvent("CustomEvent"),h.initCustomEvent(f,!!g.bubbles,!!g.cancelable,g.detail)),k.dispatchEvent(h);L(this.h,16)||this.A?$c(this,d,m,e):(l="",(f=n.oneAfmaInstance)&&(l=f.appendClickSignals(m.href)),ad(this,d,m,e,l))}}}),bb);this.i&&"function"===typeof window.ss&&P(Q.body,"mouseover",Cc(626,()=>{window.ss(this.i,0)}),cb);c=window;c.googqscp&&"function"===typeof c.googqscp.registerCallback&&c.googqscp.registerCallback((d,
e)=>{this.s=d;this.u=e})}}};var bd=Cc(555,a=>Xc(a));Db=70;const cd=Fb(70,document.currentScript);if(null==cd)throw Error("JSC not found 70");const dd={},ed=cd.attributes;for(let a=ed.length-1;0<=a;a--){const b=ed[a].name;0===b.indexOf("data-jcp-")&&(dd[b.substring(9)]=ed[a].value)}bd(dd);}).call(this);