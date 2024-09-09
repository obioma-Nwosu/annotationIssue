/*! For license information please see 5118.chunk.js.LICENSE.txt */
(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[5118],{95118:(t,e,n)=>{"use strict";n.d(e,{A:()=>h}),n(63534),n(40590),n(27727),n(64216),n(49576),n(80115),n(58476),n(15195),n(4895),n(18665),n(59581),n(10557),n(14913),n(35231),n(79389),n(98741),n(31586),n(96982),n(97755),n(15852),n(41412),n(4632),n(5086),n(69193),n(87136),n(6048),n(29979),n(58379),n(14602);var r=n(96540),o=n(18492),i=n(51388);n(75110);const a=function(t){var e,n=t.onChange,o=t.checked,a=t.index,c=t.thumbnail,u=null;return c&&(c.currentSrc?e=c.currentSrc:c.url?e=c.url:c.toDataURL&&(e=c.toDataURL()),u=r.createElement("img",{className:"thumb-card-img",alt:"img_name",src:e})),r.createElement("div",{className:"thumb-card",onClick:n},r.createElement("div",{className:"thumb-body"},r.createElement("div",{className:"thumb-image"},u),r.createElement(i.A,{id:"custom-checkbox-".concat(a),name:"thumb".concat(a),checked:o})),r.createElement("div",{className:"thumb-card-title"},a+1))};function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function u(){u=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",p=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function h(t,e,n,r){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),c=new P(r||[]);return o(a,"_invoke",{value:N(t,n,c)}),a}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var f="suspendedStart",m="suspendedYield",y="executing",w="completed",b={};function v(){}function g(){}function x(){}var E={};s(E,a,(function(){return this}));var k=Object.getPrototypeOf,L=k&&k(k(C([])));L&&L!==n&&r.call(L,a)&&(E=L);var A=x.prototype=v.prototype=Object.create(E);function S(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(o,i,a,u){var l=d(t[o],t,i);if("throw"!==l.type){var p=l.arg,s=p.value;return s&&"object"==c(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(s).then((function(t){p.value=t,a(p)}),(function(t){return n("throw",t,a,u)}))}u(l.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function N(e,n,r){var o=f;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===w){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=j(c,r);if(u){if(u===b)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===f)throw o=w,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var l=d(e,n,r);if("normal"===l.type){if(o=r.done?w:m,l.arg===b)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=w,r.method="throw",r.arg=l.arg)}}}function j(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),b;var i=d(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,b;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,b):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function C(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(c(e)+" is not iterable")}return g.prototype=x,o(A,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:g,configurable:!0}),g.displayName=s(x,p,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,p,"GeneratorFunction")),t.prototype=Object.create(A),t},e.awrap=function(t){return{__await:t}},S(_.prototype),s(_.prototype,l,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new _(h(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(A),s(A,p,"Generator"),s(A,a,(function(){return this})),s(A,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=C,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:C(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),b}},e}function l(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const h=function(t){var e=t.document,n=t.onThumbnailSelected,i=t.selectedThumbnails,c=t.onfileLoadedHandler,s=p((0,r.useState)([]),2),h=s[0],d=s[1],f=p((0,r.useState)(0),2),m=f[0],y=f[1],w=p((0,o.B)(),1)[0];if((0,r.useEffect)((function(){var t=[];function n(){var r;return r=u().mark((function n(){var r,o,i,a,l,p;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=[],o=e.getPageCount(),i=[],a=u().mark((function n(o){var a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=new Promise((function(n){var i=e.loadThumbnail(o,(function(t){var e;e=t.currentSrc?{pageNumber:o,currentSrc:t.currentSrc}:{pageNumber:o,url:t.toDataURL()},r.push(e),y(o),n()}));t.push(i)})),i.push(a);case 2:case"end":return n.stop()}}),n)})),l=1;case 5:if(!(l<=o)){n.next=10;break}return n.delegateYield(a(l),"t0",7);case 7:l++,n.next=5;break;case 10:return n.next=12,Promise.all(i);case 12:p=[].concat(r).sort((function(t,e){return t.pageNumber-e.pageNumber})),d(p),t.length=0,c(!1);case 16:case"end":return n.stop()}}),n)})),n=function(){var t=this,e=arguments;return new Promise((function(n,o){var i=r.apply(t,e);function a(t){l(i,n,o,a,c,"next",t)}function c(t){l(i,n,o,a,c,"throw",t)}a(void 0)}))},n.apply(this,arguments)}return e&&function(){n.apply(this,arguments)}(),function(){t.forEach((function(t){return e.cancelLoadThumbnail(t)}))}}),[e]),h.length>0)return h.map((function(t,e){var o=e+1;return r.createElement(a,{key:o,onChange:function(){return n(o)},checked:!!i[o],index:e,thumbnail:t})}));var b=e?e.getPageCount():0,v="".concat(m,"/").concat(b);return r.createElement("div",null,w("message.processing")," ",v)}},39319:(t,e,n)=>{(e=n(76314)(!1)).push([t.id,":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.thumb-card{box-sizing:border-box;width:133px;height:-moz-fit-content;height:fit-content;background:var(--gray-1);border-radius:6px;padding:0 24px 2px;position:relative;cursor:pointer}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .thumb-card{width:142px}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .thumb-card{width:142px}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .thumb-card{width:97px;padding:0 12px 2px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .thumb-card{width:97px;padding:0 12px 2px}}@media(max-width:430px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .thumb-card{width:97px;padding:0 12px 2px}}@container (max-width: 430px){.App.is-web-component:not(.is-in-desktop-only-mode) .thumb-card{width:97px;padding:0 12px 2px}}.thumb-card:hover{background:var(--tools-overlay-button-hover)}.thumb-body{display:flex;align-items:flex-start}.thumb-image{padding-top:12px;padding-right:5px;text-align:center}.thumb-card-img{width:83px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .thumb-card-img{width:68px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .thumb-card-img{width:68px}}@media(max-width:430px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .thumb-card-img{width:68px}}@container (max-width: 430px){.App.is-web-component:not(.is-in-desktop-only-mode) .thumb-card-img{width:68px}}.thumb-card-title{text-align:center;padding-top:8px;padding-bottom:10px}",""]),e.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"},t.exports=e},75110:(t,e,n)=>{var r=n(85072),o=n(39319);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.id,o,""]]),r(o,{insert:function(t){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(t);let e;e=document.getElementsByTagName("apryse-webviewer"),e.length||(e=function t(e,n=document){const r=[];return n.querySelectorAll(e).forEach((t=>r.push(t))),n.querySelectorAll("*").forEach((n=>{n.shadowRoot&&r.push(...t(e,n.shadowRoot))})),r}("apryse-webviewer"));const n=[];for(let r=0;r<e.length;r++){const o=e[r];if(0===r)o.shadowRoot.appendChild(t),t.onload=function(){n.length>0&&n.forEach((e=>{e.innerHTML=t.innerHTML}))};else{const e=t.cloneNode(!0);o.shadowRoot.appendChild(e),n.push(e)}}},singleton:!1}),t.exports=o.locals||{}}}]);
//# sourceMappingURL=5118.chunk.js.map