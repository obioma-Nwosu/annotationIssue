(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[477],{20477:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>T}),t(63534),t(40590),t(64216),t(15195),t(47746),t(4895),t(18665),t(59581),t(14913),t(68763),t(79389),t(98741),t(5086),t(52231),t(87136),t(6048),t(43148),t(29979),t(14602);var o=t(96540),a=t(97160),i=t(61113),r=t(75710),d=t(26247),c=t(28854),l=t(95651),p=t(12147),s=t(32485),u=t.n(s),m=t(18492),g=t(51e3),f=t(70319),h=t(10188),b=t(5556),x=t.n(b),y=t(60254),w=t(51529);function v(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var o,a,i,r,d=[],c=!0,l=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(o=i.call(t)).done)&&(d.push(o.value),d.length!==n);c=!0);}catch(e){l=!0,a=e}finally{try{if(!c&&null!=t.return&&(r=t.return(),Object(r)!==r))return}finally{if(l)throw a}}return d}}(e,n)||function(e,n){if(e){if("string"==typeof e)return A(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?A(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}t(45798);var R={closeModal:x().func,currentPage:x().number,pageLabels:x().array,selectedPages:x().array,markPages:x().func,redactPages:x().func,evenDisabled:x().bool,renderCanvases:x().func,isOpen:x().bool},M="current",P="specify",k="odd",E="even",C=function(e){var n=e.closeModal,t=e.pageLabels,i=e.selectedPages,r=e.currentPage,d=e.markPages,c=e.redactPages,l=e.evenDisabled,s=e.renderCanvases,b=e.isOpen,x=(0,m.B)().t,A=v((0,o.useState)(M),2),R=A[0],C=A[1],S=v((0,o.useState)(),2),D=S[0],O=S[1];(0,o.useEffect)((function(){O(i)}),[i]);var _=function(){var e=[];if(R===M)return[r];if(R===P)return D;if(R===k)for(var n=1;t.length>=n;n+=2)e.push(n);else if(R===E)for(var o=2;t.length>=o;o+=2)e.push(o);return e},T=(0,o.useRef)();(0,o.useEffect)((function(){b&&s(T,_())}),[R,b,D,s,_]);var L=function(e){var t=e.event.target;(T.current.clientHeight<T.current.scrollHeight||T.current.clientWidth<T.current.scrollWidth)&&(t===T.current||T.current.contains(t))?e.event.stopPropagation():n()};return o.createElement(h.Hx,{onSwipedUp:L,onSwipedDown:L,preventDefaultTouchmoveEvent:!0,focus:!0},o.createElement(y.s,{locked:b},o.createElement("div",{className:u()({Modal:!0,PageRedactionModal:!0,open:b,closed:!b}),"data-element":a.A.PAGE_REDACT_MODAL},o.createElement("div",{className:"container"},o.createElement("div",{className:"swipe-indicator"}),o.createElement("div",{className:"header"},o.createElement("div",{className:"header-text"},x("option.pageRedactModal.header")),o.createElement(g.A,{onClick:n,img:"icon-close"})),o.createElement("div",{className:"body"},o.createElement("div",{className:"canvas-container",ref:T}),o.createElement("form",{className:"selection-options",onChange:function(e){e.target.classList.contains("page-number-input")||C(e.target.value)},onSubmit:function(e){return e.preventDefault()}},o.createElement("strong",null,x("option.pageRedactModal.pageSelection")),o.createElement(f.A,{checked:R===M,radio:!0,name:"page-redaction-option",label:x("option.pageRedactModal.current"),value:M}),o.createElement(f.A,{checked:R===P,radio:!0,name:"page-redaction-option",label:x("option.pageRedactModal.specify"),value:P}),"specify"===R&&o.createElement(w.A,{selectedPageNumbers:D,pageCount:t.length,onBlurHandler:function(e){return O(e)},placeHolder:p.A}),o.createElement(f.A,{checked:R===k,radio:!0,name:"page-redaction-option",label:x("option.pageRedactModal.odd"),value:k}),o.createElement(f.A,{checked:R===E,radio:!0,name:"page-redaction-option",label:x("option.pageRedactModal.even"),value:E,disabled:l}))),o.createElement("div",{className:"footer"},o.createElement(g.A,{className:"cancel modal-button",dataElement:"modalRedactButton",label:"annotation.redact",onClick:function(){return c(_())}}),o.createElement(g.A,{className:"confirm modal-button",dataElement:"modalMarkRedactButton",label:"option.pageRedactModal.addMark",onClick:function(){return d(_())}}))))))};C.propTypes=R;const S=C;function D(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var o,a,i,r,d=[],c=!0,l=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(o=i.call(t)).done)&&(d.push(o.value),d.length!==n);c=!0);}catch(e){l=!0,a=e}finally{try{if(!c&&null!=t.return&&(r=t.return(),Object(r)!==r))return}finally{if(l)throw a}}return d}}(e,n)||O(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,n){if(e){if("string"==typeof e)return _(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_(e,n):void 0}}function _(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}const T=function(){var e=(0,i.wA)(),n=D((0,i.d4)((function(e){return[r.A.isElementOpen(e,a.A.PAGE_REDACT_MODAL),r.A.getCurrentPage(e),r.A.getSelectedThumbnailPageIndexes(e),r.A.getPageLabels(e),r.A.getActiveToolName(e),r.A.getActiveToolStyles(e)]})),6),t=n[0],p=n[1],s=n[2],u=n[3],m=n[4],g=n[5],f=(0,o.useRef)(0),h=s.map((function(e){return e+1}));(0,o.useEffect)((function(){t&&e(d.A.closeElements([a.A.PRINT_MODAL,a.A.LOADING_MODAL,a.A.PROGRESS_MODAL,a.A.ERROR_MODAL]))}),[t,e]);var b=function(){return e(d.A.closeElement(a.A.PAGE_REDACT_MODAL))},x=function(){return null!=m&&m.includes("AnnotationCreateRedaction")?g:{}},y=D((0,o.useState)(!1),2),w=y[0],v=y[1];return(0,o.useEffect)((function(){var e=function(){var e=c.A.getDocument(),n=e.getDocumentCompletePromise();null==n||n.then((function(){var n=e.getPageCount();v(n<2)}))};return c.A.addEventListener("documentLoaded",e),function(){return c.A.removeEventListener("documentLoaded",e)}}),[]),o.createElement(S,{evenDisabled:w,closeModal:b,renderCanvases:function(e,n){var o,a;f.current++;for(var i=f.current,r=function(e){if(Array.isArray(e))return _(e)}(a=n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(a)||O(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),d=c.A.getDocument();e.current.firstChild;)e.current.removeChild(e.current.firstChild);if(r){(null===(o=r)||void 0===o?void 0:o.length)>10&&(r=r.splice(0,10));var l,p=function(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=O(e))){t&&(e=t);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r=!0,d=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return r=e.done,e},e:function(e){d=!0,i=e},f:function(){try{r||null==t.return||t.return()}finally{if(d)throw i}}}}(r);try{for(p.s();!(l=p.n()).done;){var s=l.value,u=null==d?void 0:d.getPageInfo(s);if(t&&d&&e.current&&u){var m,g=e.current.getBoundingClientRect(),h=parseInt(window.getComputedStyle(e.current).borderWidth)+.1;g.height-=h,g.width-=h,(m=u.width>u.height?g.width/u.width:g.height/u.height)>0&&d.loadCanvas({pageNumber:s,zoom:m,pageRotation:0,drawComplete:function(n){var t;i===f.current&&(null===(t=e.current)||void 0===t||t.appendChild(n))},allowUseOfOptimizedThumbnail:!0})}}}catch(e){p.e(e)}finally{p.f()}}},redactPages:function(e){(0,l.Mp)(e,x()),b()},markPages:function(e){(0,l.WY)(e,x()),b()},currentPage:p,selectedPages:h,pageLabels:u,isOpen:t})}},17195:(e,n,t)=>{(n=t(76314)(!1)).push([e.id,".open.PageRedactionModal{visibility:visible}.closed.PageRedactionModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.PageRedactionModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.PageRedactionModal .modal-container .wrapper .modal-content{padding:10px}.PageRedactionModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.PageRedactionModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.PageRedactionModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.PageRedactionModal .footer .modal-button.cancel{color:var(--secondary-button-text);border:1px solid var(--secondary-button-text)}.PageRedactionModal .footer .modal-button.cancel:hover{background-color:var(--document-background-color);color:var(--secondary-button-hover);border:1px solid var(--secondary-button-hover)}.PageRedactionModal .footer .modal-button.confirm{margin-left:4px;color:var(--primary-button-text);font-weight:600;background:var(--primary-button)}.PageRedactionModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover)}.PageRedactionModal .footer .modal-button.confirm.disabled{background:var(--primary-button)!important;opacity:.5}.PageRedactionModal .footer .modal-button.secondary-btn-custom{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer;background-color:#fff}.PageRedactionModal .footer .modal-button.secondary-btn-custom:hover{color:var(--secondary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .footer .modal-button{padding:23px 8px}}.PageRedactionModal .swipe-indicator{background:var(--divider);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .swipe-indicator{display:none}}.PageRedactionModal .container{border-radius:4px;overflow-y:auto;max-height:100%}@media(max-height:500px){.App:not(.is-web-component) .PageRedactionModal .container,.PageRedactionModal .App:not(.is-web-component) .container{overflow:auto;max-height:100%}}@container (max-height: 500px){.App.is-web-component .PageRedactionModal .container,.PageRedactionModal .App.is-web-component .container{overflow:auto;max-height:100%}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .container,.PageRedactionModal .App:not(.is-in-desktop-only-mode):not(.is-web-component) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .container,.PageRedactionModal .App.is-web-component:not(.is-in-desktop-only-mode) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}.PageRedactionModal .container{align-items:center;background:var(--component-background);box-shadow:0 0 3px 0 var(--document-box-shadow);width:888px}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .container{width:480px}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .container{width:480px}}.PageRedactionModal .container .header{width:100%;display:flex;align-items:center;justify-content:space-between;padding:16px;border-bottom:1px solid var(--divider)}.PageRedactionModal .container .header .header-text{font-size:var(--font-size-large);font-weight:700}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .container .header .header-text{font-size:var(--font-size-medium)}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .container .header .header-text{font-size:var(--font-size-medium)}}.PageRedactionModal .container .header .Button:hover{background-color:var(--popup-button-hover)}.PageRedactionModal .container .body{padding:16px;grid-gap:16px;gap:16px;display:flex;width:100%}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .container .body{display:flex;grid-gap:5px;gap:5px;flex-direction:column}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .container .body{display:flex;grid-gap:5px;gap:5px;flex-direction:column}}.PageRedactionModal .container .body .canvas-container{border:1px solid var(--gray-5);height:448px;width:60%;background-color:var(--divider);display:flex;align-items:center;justify-content:space-between;flex-direction:column;overflow:auto;grid-gap:5px;gap:5px}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .container .body .canvas-container{width:55%;height:300px}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .container .body .canvas-container{width:55%;height:300px}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .container .body .canvas-container{width:100%;height:250px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .container .body .canvas-container{width:100%;height:250px}}.PageRedactionModal .container .body .selection-options{width:40%;grid-gap:8px;gap:8px;display:flex;flex-direction:column}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .container .body .selection-options{width:100%}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .container .body .selection-options{width:100%}}.PageRedactionModal .container .body .selection-options .page-number-input{height:28px;width:90%;align-self:flex-end}.PageRedactionModal .container .body .selection-options .ui__choice--disabled{text-decoration:line-through}.PageRedactionModal .container .body .selection-options .ui__choice{font-size:13px}.PageRedactionModal .container .footer{margin-top:0;width:100%;display:flex;align-items:center;justify-content:flex-end;padding:16px;border-top:1px solid var(--divider)}.PageRedactionModal .container .footer .Button{margin-top:0}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .PageRedactionModal .container .footer .Button{padding:8px 16px!important}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .PageRedactionModal .container .footer .Button{padding:8px 16px!important}}",""]),n.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"},e.exports=n},45798:(e,n,t)=>{var o=t(85072),a=t(17195);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.id,a,""]]),o(a,{insert:function(e){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(e);let n;n=document.getElementsByTagName("apryse-webviewer"),n.length||(n=function e(n,t=document){const o=[];return t.querySelectorAll(n).forEach((e=>o.push(e))),t.querySelectorAll("*").forEach((t=>{t.shadowRoot&&o.push(...e(n,t.shadowRoot))})),o}("apryse-webviewer"));const t=[];for(let o=0;o<n.length;o++){const a=n[o];if(0===o)a.shadowRoot.appendChild(e),e.onload=function(){t.length>0&&t.forEach((n=>{n.innerHTML=e.innerHTML}))};else{const n=e.cloneNode(!0);a.shadowRoot.appendChild(n),t.push(n)}}},singleton:!1}),e.exports=a.locals||{}}}]);
//# sourceMappingURL=477.chunk.js.map