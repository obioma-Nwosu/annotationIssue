/*! For license information please see 4727.chunk.js.LICENSE.txt */
(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[4727],{34727:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>R}),n(63534),n(40590),n(27727),n(64216),n(36611),n(49576),n(17),n(58476),n(15195),n(4895),n(18665),n(59581),n(10557),n(14913),n(87787),n(79389),n(98741),n(31586),n(96982),n(94009),n(97755),n(15852),n(41412),n(4632),n(5086),n(90345),n(69193),n(87136),n(6048),n(29979),n(58379),n(14602);var r=n(96540),i=n(18492),o=n(61113),a=n(21012),l=n(51499),u=n(97160),s=n(81460),c=n(75914),d=n(815),p=n(90185),f=n(75710),g=n(26247),h=n(32485),m=n.n(h),y=(n(14048),n(16150)),v=(n(80115),n(63555),n(11623)),b=n(5556),w=n.n(b);function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,l=[],u=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){s=!0,i=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw i}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x=r.memo((function(e){var t=e.index,n=e.onFullSignatureSetHandler,i=e.onInitialsSetHandler,o=e.isActive,a=e.altText,l=e.fullSignature,u=e.initials,c=e.isHoveredForDeletion,d=e.signatureMode,p=function(e,n,i){return r.createElement("button",{className:m()("signature-row-content",{interactable:e,active:o&&i===d,"removal-hovered":c},"".concat(i===s.A.FULL_SIGNATURE?"full-signature":"initials")),onClick:function(){return e(t)}},r.createElement("img",{alt:a,src:n}))};return r.createElement("div",{className:"signature-row-container"},p(n,null==l?void 0:l.imgSrc,s.A.FULL_SIGNATURE),u&&p(i,u.imgSrc,s.A.INITIALS))}));x.displayName="SignatureRowContent";var L=function(e){var t,n=e.savedSignatures,o=e.onFullSignatureSetHandler,a=e.onInitialsSetHandler,l=e.deleteHandler,u=e.currentlySelectedSignature,s=e.isDeleteDisabled,p=e.signatureMode,f=e.panelSize,g=(0,i.B)().t,h=S(r.useState(null),2),m=h[0],y=h[1],b=(0,d.IS)();return n.length>0?r.createElement("div",{className:"signature-list"},(t=n.some((function(e){return e.initials})),r.createElement("div",{className:"signature-list-header"},r.createElement("div",{className:"signature-title"},g("signatureListPanel.signatureList.signature")),t&&r.createElement("div",{className:"initials-title"},g("signatureListPanel.signatureList.initials")),r.createElement("div",{className:"delete-spacer"}))),n.map((function(e,t){return[e,t]})).map((function(e){var t=S(e,2),n=t[0],i=n.fullSignature,d=n.initials,h=t[1],w=!f||f!==c.WA.SMALL_SIZE,A=b&&f===c.WA.SMALL_SIZE;return w||A&&u===h?r.createElement("div",{key:h,className:"signature-row"},r.createElement(x,{index:h,fullSignature:i,initials:d,onFullSignatureSetHandler:o,onInitialsSetHandler:a,isActive:u===h,altText:"".concat(g("option.toolsOverlay.signatureAltText")," ").concat(h+1),isHoveredForDeletion:m===h,signatureMode:p}),!s&&r.createElement("button",{className:"icon-button","data-element":"defaultSignatureDeleteButton",onMouseOver:function(){return y(h)},onMouseLeave:function(){return y(null)},onClick:function(){l(h),y(null)}},r.createElement(v.A,{glyph:"icon-delete-line"}))):null}))):null};L.displayName="SavedSignatures",L.propTypes={panelSize:w().oneOf(Object.values(c.WA))};const E=r.memo(L);var P=n(51e3);function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var I=function(e){var t,n,a=e.isDisabled,l=(0,o.wA)(),c=(t=(0,i.B)(),n=1,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,l=[],u=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){s=!0,i=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw i}}return l}}(t,n)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],d=(0,o.d4)((function(e){return f.A.getIsInitialsModeEnabled(e)}))?"signatureListPanel.newSignatureAndInitial":"signatureListPanel.newSignature";return r.createElement(P.A,{className:m()("SignatureAddButton",{disabled:a}),label:c(d),onClick:function(){a||(l(g.A.setSignatureMode(s.A.FULL_SIGNATURE)),l(g.A.openElement(u.A.SIGNATURE_MODAL)))}})};const T=r.memo(I);var j=n(28854),_=n(33647);function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function O(){O=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var o=t&&t.prototype instanceof y?t:y,a=Object.create(o.prototype),l=new j(r||[]);return i(a,"_invoke",{value:P(e,n,l)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=c;var p="suspendedStart",f="suspendedYield",g="executing",h="completed",m={};function y(){}function v(){}function b(){}var w={};s(w,a,(function(){return this}));var S=Object.getPrototypeOf,A=S&&S(S(_([])));A&&A!==n&&r.call(A,a)&&(w=A);var x=b.prototype=y.prototype=Object.create(w);function L(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(i,o,a,l){var u=d(e[i],e,o);if("throw"!==u.type){var s=u.arg,c=s.value;return c&&"object"==N(c)&&r.call(c,"__await")?t.resolve(c.__await).then((function(e){n("next",e,a,l)}),(function(e){n("throw",e,a,l)})):t.resolve(c).then((function(e){s.value=e,a(s)}),(function(e){return n("throw",e,a,l)}))}l(u.arg)}var o;i(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,i){n(e,r,t,i)}))}return o=o?o.then(i,i):i()}})}function P(t,n,r){var i=p;return function(o,a){if(i===g)throw Error("Generator is already running");if(i===h){if("throw"===o)throw a;return{value:e,done:!0}}for(r.method=o,r.arg=a;;){var l=r.delegate;if(l){var u=k(l,r);if(u){if(u===m)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===p)throw i=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=g;var s=d(t,n,r);if("normal"===s.type){if(i=r.done?h:f,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(i=h,r.method="throw",r.arg=s.arg)}}}function k(t,n){var r=n.method,i=t.iterator[r];if(i===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var o=d(i,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function _(t){if(t||""===t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}throw new TypeError(N(t)+" is not iterable")}return v.prototype=b,i(x,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:v,configurable:!0}),v.displayName=s(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,s(e,u,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},L(E.prototype),s(E.prototype,l,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new E(c(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},L(x),s(x,u,"Generator"),s(x,a,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=_,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return l.type="throw",l.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],l=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;T(n)}return i}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:_(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}function M(e,t,n,r,i,o,a){try{var l=e[o](a),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(r,i)}function D(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){M(o,r,i,a,l,"next",e)}function l(e){M(o,r,i,a,l,"throw",e)}a(void 0)}))}}function B(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=C(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw o}}}}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,l=[],u=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){s=!0,i=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw i}}return l}}(e,t)||C(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var G=function(e){var t=e.panelSize,n=H((0,i.B)(),1)[0],h=(0,d.IS)(),v=H((0,o.d4)((function(e){return[f.A.getSavedSignatures(e),f.A.getMaxSignaturesCount(e),f.A.getDisplayedSignaturesFilterFunction(e),f.A.isElementDisabled(e,"defaultSignatureDeleteButton"),f.A.getSavedInitials(e),f.A.getSelectedDisplayedSignatureIndex(e),f.A.getSignatureMode(e),f.A.getMobilePanelSize(e)]}),o.bN),8),b=v[0],w=v[1],S=v[2],A=v[3],x=v[4],L=v[5],P=v[6],k=v[7],I=(0,o.Pj)(),M="AnnotationCreateSignature",C=j.A.getToolsFromAllDocumentViewers(M);(0,r.useEffect)((function(){return function(){var e,t=B(C);try{for(t.s();!(e=t.n()).done;){var n=e.value;n.clearLocation(),n.setSignature(null),n.setInitials(null)}}catch(e){t.e(e)}finally{t.f()}}}),[]);var F=H(r.useState([]),2),G=F[0],R=F[1];(0,r.useEffect)((function(){var e=b.filter((function(e,t){return S(e,t)})).map((function(e,t){return{fullSignature:e,initials:x[t]||null}}));R(e)}),[b,x,S]),(0,r.useEffect)((function(){k!==c.WA.SMALL_SIZE&&h&&Z(g.A.setMobilePanelSize(c.WA.SMALL_SIZE))}),[L]),(0,r.useEffect)((function(){var e=function(e){var t=j.A.getToolMode(),n=null==t?void 0:t.name,r=e.detail,i=r.element,o=r.isVisible;i!==c.BB.SIGNATURE_LIST||o||n!==M&&n!==l.A||(0,p.A)(I,l.A)};return window.addEventListener(_.A.VISIBILITY_CHANGED,e),function(){window.removeEventListener(_.A.VISIBILITY_CHANGED,e)}}),[]);var U,z,W,V,Z=(0,o.wA)(),Y=(0,r.useCallback)(function(){var e=D(O().mark((function e(t){var n,r,i,o,a;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=G[t].fullSignature,r=n.annotation,Z(g.A.setSelectedDisplayedSignatureIndex(t)),j.A.setToolMode(M),i=B(C),e.prev=5,i.s();case 7:if((o=i.n()).done){e.next=21;break}return a=o.value,e.next=11,a.setSignature(r);case 11:if(!a.hasLocation()){e.next=16;break}return e.next=14,a.addSignature();case 14:e.next=19;break;case 16:return e.next=18,a.showPreview();case 18:Z(g.A.setSignatureMode(s.A.FULL_SIGNATURE));case 19:e.next=7;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(5),i.e(e.t0);case 26:return e.prev=26,i.f(),e.finish(26);case 29:case"end":return e.stop()}}),e,null,[[5,23,26,29]])})));return function(t){return e.apply(this,arguments)}}(),[G]),$=(0,r.useCallback)(function(){var e=D(O().mark((function e(t){var n,r,i,o,a;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=G[t].initials,r=n.annotation,Z(g.A.setSelectedDisplayedSignatureIndex(t)),j.A.setToolMode(M),i=B(C),e.prev=5,i.s();case 7:if((o=i.n()).done){e.next=22;break}return a=o.value,e.next=11,a.setInitials(r);case 11:if(!a.hasLocation()){e.next=17;break}return e.next=14,a.addInitials();case 14:Z(g.A.setSignatureMode(s.A.FULL_SIGNATURE)),e.next=20;break;case 17:return e.next=19,a.showInitialsPreview();case 19:Z(g.A.setSignatureMode(s.A.INITIALS));case 20:e.next=7;break;case 22:e.next=27;break;case 24:e.prev=24,e.t0=e.catch(5),i.e(e.t0);case 27:return e.prev=27,i.f(),e.finish(27);case 30:case"end":return e.stop()}}),e,null,[[5,24,27,30]])})));return function(t){return e.apply(this,arguments)}}(),[G]),q=(0,r.useCallback)(function(){var e=D(O().mark((function e(t){var n,r,i;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C[0].deleteSavedInitials(t),C[0].deleteSavedSignature(t),n=C[0].getSavedSignatures(),(r=L===t)&&(C.forEach((function(e){e.hidePreview(),e.setSignature(null),e.setInitials(null)})),j.A.setToolMode(l.A)),0===n.length?Z(g.A.setSelectedDisplayedSignatureIndex(null)):(i=L,(r||t<L)&&(i=Math.max(0,L-1)),Z(g.A.setSelectedDisplayedSignatureIndex(i)));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[L]);return r.createElement(a.A,{dataElement:u.A.SIGNATURE_LIST_PANEL,className:m()((U={Panel:!0,SignatureListPanel:!0,hideAddButton:b.length&&t===c.WA.SMALL_SIZE},z=t,W=!0,V=function(e,t){if("object"!=N(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(z),(z="symbol"==N(V)?V:V+"")in U?Object.defineProperty(U,z,{value:W,enumerable:!0,configurable:!0,writable:!0}):U[z]=W,U))},r.createElement("div",{className:"signature-list-panel-header"},n("signatureListPanel.header")),r.createElement(T,{isDisabled:G.length>=w}),r.createElement(y.A,null),r.createElement(E,{savedSignatures:G,onFullSignatureSetHandler:Y,onInitialsSetHandler:$,deleteHandler:q,currentlySelectedSignature:L,isDeleteDisabled:A,signatureMode:P,panelSize:t}))};G.propTypes={panelSize:w().oneOf(Object.values(c.WA))};const R=G},33945:(e,t,n)=>{(t=n(76314)(!1)).push([e.id,":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.SignatureAddButton{width:auto;padding:8px;color:#2b73ab;border:1px solid #2b73ab;border-radius:4px;margin:16px 0}.SignatureAddButton:not(.disabled):hover{color:var(--primary-button-hover);border-color:var(--primary-button-hover)}.SignatureAddButton.disabled{color:#2b73ab;opacity:.5;cursor:not-allowed}.SignatureAddButton.disabled span{color:#2b73ab}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureAddButton{margin:16px}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureAddButton:not(.disabled):hover{color:#2b73ab;border:1px solid #2b73ab}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureAddButton{margin:16px}.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureAddButton:not(.disabled):hover{color:#2b73ab;border:1px solid #2b73ab}}.SignatureListPanel{height:100%;display:flex;flex-direction:column}.SignatureListPanel .signature-list-panel-header{font-size:16px;font-weight:700}.SignatureListPanel .signature-header{margin:16px 0;font-size:14px;font-weight:700}.SignatureListPanel .signature-list{padding-top:16px;overflow:auto}.SignatureListPanel .signature-row{display:flex;flex-direction:row;height:48px;justify-content:space-between;align-items:center;margin-top:8px}.SignatureListPanel .signature-row .icon-button{padding:0;border:none;background-color:transparent;display:flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:4px;cursor:pointer}:host(:not([data-tabbing=true])) .SignatureListPanel .signature-row .icon-button,html:not([data-tabbing=true]) .SignatureListPanel .signature-row .icon-button{outline:none}.SignatureListPanel .signature-row .icon-button:hover{background:var(--tools-overlay-button-hover)}.SignatureListPanel .signature-list-header{display:flex;flex-direction:row;align-items:center}.SignatureListPanel .signature-list-header .signature-title{flex-grow:2;margin-right:8px;min-width:160px}.SignatureListPanel .signature-list-header .initials-title{flex-grow:1;max-width:65px}.SignatureListPanel .signature-list-header .delete-spacer{width:40px}.SignatureListPanel .signature-row-container{display:flex;flex-direction:row;align-items:center;flex-grow:1}.SignatureListPanel .signature-row-container .signature-row-content{border:none;background-color:transparent;height:40px;padding:4px 8px;border:1px solid var(--lighter-border);border-radius:4px;display:flex;align-items:center;justify-content:center;cursor:pointer;margin-right:8px;background-color:var(--gray-0);flex-grow:2}:host(:not([data-tabbing=true])) .SignatureListPanel .signature-row-container .signature-row-content,html:not([data-tabbing=true]) .SignatureListPanel .signature-row-container .signature-row-content{outline:none}.SignatureListPanel .signature-row-container .signature-row-content img{max-width:100%;max-height:100%}.SignatureListPanel .signature-row-container .signature-row-content.interactable:hover{background:var(--tools-overlay-button-hover)}.SignatureListPanel .signature-row-container .signature-row-content.interactable.active{background:var(--gray-2);border-color:var(--blue-5)}.SignatureListPanel .signature-row-container .signature-row-content.active{background:var(--tools-overlay-button-active)}.SignatureListPanel .signature-row-container .signature-row-content.removal-hovered{background:var(--popup-button-hover)!important}.SignatureListPanel .signature-row-container .signature-row-content .signature-button-icon{width:20px;height:20px;margin-top:2px}.SignatureListPanel .signature-row-container .initials{max-width:65px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureListPanel{width:100%;position:relative}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureListPanel.hideAddButton .SignatureAddButton,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureListPanel .initials-title,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureListPanel .signature-title,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureListPanel.small-size .Divider{display:none}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureListPanel .signature-list-panel-header,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureListPanel .signature-row{padding:0 16px}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureListPanel .signature-list{padding-bottom:16px;position:relative}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SignatureListPanel .signature-list .signature-row{justify-content:center;margin-top:0;margin-bottom:8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureListPanel{width:100%;position:relative}.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureListPanel.hideAddButton .SignatureAddButton,.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureListPanel .initials-title,.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureListPanel .signature-title,.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureListPanel.small-size .Divider{display:none}.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureListPanel .signature-list-panel-header,.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureListPanel .signature-row{padding:0 16px}.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureListPanel .signature-list{padding-bottom:16px;position:relative}.App.is-web-component:not(.is-in-desktop-only-mode) .SignatureListPanel .signature-list .signature-row{justify-content:center;margin-top:0;margin-bottom:8px}}",""]),t.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"},e.exports=t},14048:(e,t,n)=>{var r=n(85072),i=n(33945);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.id,i,""]]),r(i,{insert:function(e){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(e);let t;t=document.getElementsByTagName("apryse-webviewer"),t.length||(t=function e(t,n=document){const r=[];return n.querySelectorAll(t).forEach((e=>r.push(e))),n.querySelectorAll("*").forEach((n=>{n.shadowRoot&&r.push(...e(t,n.shadowRoot))})),r}("apryse-webviewer"));const n=[];for(let r=0;r<t.length;r++){const i=t[r];if(0===r)i.shadowRoot.appendChild(e),e.onload=function(){n.length>0&&n.forEach((t=>{t.innerHTML=e.innerHTML}))};else{const t=e.cloneNode(!0);i.shadowRoot.appendChild(t),n.push(t)}}},singleton:!1}),e.exports=i.locals||{}}}]);
//# sourceMappingURL=4727.chunk.js.map