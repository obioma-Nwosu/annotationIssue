(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[8820],{8820:(o,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>L}),n(63534),n(40590),n(64216),n(36611),n(18665),n(87787),n(64189),n(94009),n(97755),n(15852),n(41412),n(4632),n(5086),n(34606),n(29979),n(14602);var t=n(96540),i=n(5556),r=n.n(i),a=n(61113),d=n(20473),p=n(26247),l=n(75710),s=n(97160);function c(o){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},c(o)}function u(o,e){for(var n=0;n<e.length;n++){var t=e[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,h(t.key),t)}}function m(o,e,n){return e=f(e),function(o,e){if(e&&("object"===c(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(o){if(void 0===o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}(o)}(o,b()?Reflect.construct(e,n||[],f(o).constructor):e.apply(o,n))}function b(){try{var o=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(o){}return(b=function(){return!!o})()}function f(o){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},f(o)}function y(o,e){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,e){return o.__proto__=e,o},y(o,e)}function h(o){var e=function(o,e){if("object"!=c(o)||!o)return o;var n=o[Symbol.toPrimitive];if(void 0!==n){var t=n.call(o,"string");if("object"!=c(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(o);return"symbol"==c(e)?e:e+""}n(23910);var w,g,x,v=function(o){function e(){return function(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),m(this,e,arguments)}return function(o,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),Object.defineProperty(o,"prototype",{writable:!1}),e&&y(o,e)}(e,o),n=e,(i=[{key:"componentDidUpdate",value:function(o){!o.isOpen&&this.props.isOpen&&this.props.closeElements([s.A.SIGNATURE_MODAL,s.A.PRINT_MODAL,s.A.ERROR_MODAL])}},{key:"render",value:function(){if(this.props.isDisabled)return null;var o=(0,d.A)("Modal LoadingModal",this.props);return t.createElement("div",{className:o,"data-element":s.A.LOADING_MODAL},t.createElement("div",{className:"container"},t.createElement("div",{className:"inner-wrapper"})))}}])&&u(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,i}(t.PureComponent);w=v,g="propTypes",x={isDisabled:r().bool,isOpen:r().bool,closeElements:r().func.isRequired},(g=h(g))in w?Object.defineProperty(w,g,{value:x,enumerable:!0,configurable:!0,writable:!0}):w[g]=x;var A={closeElements:p.A.closeElements};const L=(0,a.Ng)((function(o){return{isDisabled:l.A.isElementDisabled(o,s.A.LOADING_MODAL),isOpen:l.A.isElementOpen(o,s.A.LOADING_MODAL)}}),A)(v)},60507:(o,e,n)=>{(e=n(76314)(!1)).push([o.id,".open.LoadingModal{visibility:visible}.closed.LoadingModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.LoadingModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.LoadingModal .modal-container .wrapper .modal-content{padding:10px}.LoadingModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.LoadingModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.LoadingModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.LoadingModal .footer .modal-button.cancel{color:var(--secondary-button-text);border:1px solid var(--secondary-button-text)}.LoadingModal .footer .modal-button.cancel:hover{background-color:var(--document-background-color);color:var(--secondary-button-hover);border:1px solid var(--secondary-button-hover)}.LoadingModal .footer .modal-button.confirm{margin-left:4px;color:var(--primary-button-text);font-weight:600;background:var(--primary-button)}.LoadingModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover)}.LoadingModal .footer .modal-button.confirm.disabled{background:var(--primary-button)!important;opacity:.5}.LoadingModal .footer .modal-button.secondary-btn-custom{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer;background-color:#fff}.LoadingModal .footer .modal-button.secondary-btn-custom:hover{color:var(--secondary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .LoadingModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .LoadingModal .footer .modal-button{padding:23px 8px}}.LoadingModal .swipe-indicator{background:var(--divider);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .LoadingModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .LoadingModal .swipe-indicator{display:none}}.LoadingModal .container{display:flex;flex-direction:column;align-items:center;padding:10px}.LoadingModal .inner-wrapper{margin:10px;border-top:5px solid var(--border);border:5px solid var(--border);border-top-color:var(--focus-border);border-radius:50%;width:54px;height:54px;animation:spin 1.2s ease infinite}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),e.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"},o.exports=e},23910:(o,e,n)=>{var t=n(85072),i=n(60507);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[o.id,i,""]]),t(i,{insert:function(o){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(o);let e;e=document.getElementsByTagName("apryse-webviewer"),e.length||(e=function o(e,n=document){const t=[];return n.querySelectorAll(e).forEach((o=>t.push(o))),n.querySelectorAll("*").forEach((n=>{n.shadowRoot&&t.push(...o(e,n.shadowRoot))})),t}("apryse-webviewer"));const n=[];for(let t=0;t<e.length;t++){const i=e[t];if(0===t)i.shadowRoot.appendChild(o),o.onload=function(){n.length>0&&n.forEach((e=>{e.innerHTML=o.innerHTML}))};else{const e=o.cloneNode(!0);i.shadowRoot.appendChild(e),n.push(e)}}},singleton:!1}),o.exports=i.locals||{}}}]);
//# sourceMappingURL=8820.chunk.js.map