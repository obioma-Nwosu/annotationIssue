(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[2664],{2664:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>N}),t(63534),t(40590),t(64216),t(17),t(15195),t(47746),t(4895),t(18665),t(14913),t(63555),t(79389),t(64189),t(98741),t(69218),t(5086),t(87136),t(6048),t(29979),t(14602);var o=t(96540),i=t(32485),a=t.n(i),r=t(55794),s=t.n(r),l=t(5556),u=t.n(l),c=t(28854),p=t(17246),m=t(26247),d=t(75710),f=t(61113),h=(t(80115),t(34867),t(16943)),y=t(11623),v=t(96763);function x(e){return function(n){if("ellipse"===(0,p.c7)(e.annotation))return o.createElement(g,e);v.error("Custom overlay for annotation type: ".concat(n," not supported"))}(e.type)}function g(e){var n,t=(0,p.c7)(e.annotation),i=(0,p.ap)(t).icon,a=e.t,r=c.A.getTool("AnnotationCreateDistanceMeasurement"),s=r.defaults.Precision,l=r.defaults.Scale,u=r.Measure,m=l[1][1];return o.createElement(o.Fragment,null,o.createElement("div",{className:"measurement__title"},i&&o.createElement(y.A,{className:"measurement__icon",glyph:i}),e.title),o.createElement("div",{className:"measurement__scale"},a("option.measurementOverlay.scale"),": ","".concat(l[0][0]," ").concat(l[0][1]," = ").concat(l[1][0]," ").concat(l[1][1])),o.createElement("div",{className:"measurement__precision"},a("option.shared.precision"),": ",s),o.createElement("div",{className:"measurement__value"},e.label,": ",o.createElement("input",{className:"lineMeasurementInput",type:"number",min:"0",value:(n=u.axis[0].factor,(e.value(e.annotation).toFixed(2)*n).toFixed(2)),onChange:function(n){return e.onChange(n,e.annotation)}})," ",m))}x.propTypes={annotation:u().object.isRequired,value:u().func.isRequired,onChange:u().func.isRequired,label:u().string.isRequired,t:u().func.isRequired,title:u().string.isRequired},g.propTypes=x.propTypes;const b=(0,h.C)()(x);var w=t(18492);function A(e){var n=(0,p.c7)(e.annotation),t=(0,p.ap)(n).icon,i=(0,w.B)().t,a=c.A.getAnnotationsList().filter((function(e){return e.getCustomData("trn-is-count")})).length;return o.createElement(o.Fragment,null,o.createElement("div",{className:"measurement__title"},t&&o.createElement(y.A,{className:"measurement__icon",glyph:t}),i("option.measurementOverlay.countMeasurement")),o.createElement("div",{className:"measurement__count"},i("option.measurementOverlay.count"),": ",a))}A.propTypes={annotation:u().object.isRequired};const E=A;var _=t(97160);function M(){return M=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},M.apply(this,arguments)}function O(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var o,i,a,r,s=[],l=!0,u=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;l=!1}else for(;!(l=(o=a.call(t)).done)&&(s.push(o.value),s.length!==n);l=!0);}catch(e){u=!0,i=e}finally{try{if(!l&&null!=t.return&&(r=t.return(),Object(r)!==r))return}finally{if(u)throw i}}return s}}(e,n)||function(e,n){if(e){if("string"==typeof e)return R(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?R(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}t(97360);var T={annotation:u().object},C=function(e){var n,t=e.annotation,i=(0,f.d4)((function(e){return d.A.isElementDisabled(e,_.A.MEASUREMENT_OVERLAY)})),r=(n=O((0,o.useState)(0),2)[1],function(){return n((function(e){return e+1}))}),l=(0,f.wA)(),u=O((0,o.useState)({x:0,y:0}),2),h=u[0],y=u[1],v=O((0,o.useState)(!1),2),x=v[0],g=v[1],w=O((0,o.useState)(!1),2),A=w[0],R=w[1],T=(0,f.d4)((function(e){return d.A.isElementOpen(e,_.A.MEASUREMENT_OVERLAY)})),C=(0,f.d4)((function(e){return d.A.getActiveToolName(e)})),N=(0,f.d4)((function(e){return d.A.getCustomMeasurementOverlay(e)})),S=(0,o.useRef)(),k=(0,p.c7)(t),j=function(e){return!function(e){return["countMeasurement"].includes((0,p.c7)(e))}(e)&&N.some((function(n){return n.validate(e)}))},L=function(e){var n=c.A.getTool(C);if(t){var o,i=function(e,n){if(null===n)return!1;var t,o,i=n.getBoundingClientRect();return e.touches&&e instanceof TouchEvent?(t=e.touches[0].clientX,o=e.touches[0].clientY):(t=e.clientX,o=e.clientY),t>=i.left&&t<=i.right&&o>=i.top&&o<=i.bottom}(e,S.current);if(A){var a,s,u=null===(a=(s=c.A.getToolMode()).getDrawMode)||void 0===a?void 0:a.call(s);o=i&&"twoClicks"!==u}else{var p=c.A.getAnnotationByMouseEvent(e);o=i&&p===t}g(o),r()}else j(n.annotation)&&(l(m.A.openElement(_.A.MEASUREMENT_OVERLAY)),R(!0))},q=function(e,n){"add"===n&&1===e.length&&e[0]===t&&l(m.A.closeElement(_.A.MEASUREMENT_OVERLAY)),"modify"===n&&1===e.length&&e[0]===t&&r()};return(0,o.useEffect)((function(){return c.A.addEventListener("mouseMove",L),c.A.addEventListener("annotationChanged",q),function(){c.A.removeEventListener("mouseMove",L),c.A.removeEventListener("annotationChanged",q)}}),[]),i||!t?null:o.createElement(s(),{cancel:"input",position:h,onDrag:function(e,n){var t=n.x,o=n.y;return y({x:t,y:o})},onStop:function(e,n){var t=n.x,o=n.y;return y({x:t,y:o})}},o.createElement("div",{className:a()({Overlay:!0,MeasurementOverlay:!0,open:T,closed:!T,transparent:x}),ref:S,"data-element":_.A.MEASUREMENT_OVERLAY},function(e,n){return j(e)?o.createElement(b,M({annotation:e},N.filter((function(n){return n.validate(e)}))[0])):"countMeasurement"===n?o.createElement(E,{annotation:e}):void 0}(t,k)))};C.propTypes=T;const N=C},69441:(e,n,t)=>{(n=t(76314)(!1)).push([e.id,".open.MeasurementOverlay{visibility:visible}.closed.MeasurementOverlay{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.MeasurementOverlay{position:absolute;z-index:95;border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background);flex-direction:column;bottom:60px;right:14px;font-size:16px;min-width:215px;padding:6px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .MeasurementOverlay{bottom:8px;right:8px;padding:8px;font-size:14px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .MeasurementOverlay{bottom:8px;right:8px;padding:8px;font-size:14px}}.MeasurementOverlay>*{margin:6px}.MeasurementOverlay.transparent{opacity:.5;pointer-events:none}.measurement__value{display:flex;flex-direction:row}.measurement__value .distance-show{margin-left:3px;cursor:pointer}.measurement__title{display:flex;justify-content:center;align-items:center}.measurement__title .measurement__icon{margin-right:5px}.measurement__deltas{display:flex;justify-content:space-between}.lineMeasurementInput{width:50px;margin-left:4px}.length_input{margin-bottom:3px}.angle_input{margin-top:3px}.angle_input .lineMeasurementInput{width:65px}",""]),n.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"},e.exports=n},97360:(e,n,t)=>{var o=t(85072),i=t(69441);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.id,i,""]]),o(i,{insert:function(e){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(e);let n;n=document.getElementsByTagName("apryse-webviewer"),n.length||(n=function e(n,t=document){const o=[];return t.querySelectorAll(n).forEach((e=>o.push(e))),t.querySelectorAll("*").forEach((t=>{t.shadowRoot&&o.push(...e(n,t.shadowRoot))})),o}("apryse-webviewer"));const t=[];for(let o=0;o<n.length;o++){const i=n[o];if(0===o)i.shadowRoot.appendChild(e),e.onload=function(){t.length>0&&t.forEach((n=>{n.innerHTML=e.innerHTML}))};else{const n=e.cloneNode(!0);i.shadowRoot.appendChild(n),t.push(n)}}},singleton:!1}),e.exports=i.locals||{}}}]);
//# sourceMappingURL=2664.chunk.js.map