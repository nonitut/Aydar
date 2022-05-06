(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[24],{1065:function(e,t,n){"use strict";var r=n(664);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u=r(n(957)),i=n(661),c=n(955),a=(0,i.styled)(c.Box)(o||(o=(0,u.default)(["\n  width: 1px;\n  height: 1px;\n  border: 0;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  clip: rect(0 0 0 0);\n  opacity: 0;\n  overflow: hidden;\n"])));t.default=a},1064:function(e,t,n){"use strict";var r=n(664);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=r(n(1065))},1074:function(e,t,n){"use strict";var r=n(664),o=n(985);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,i=r(n(957)),c=r(n(961)),a=(o(n(353)),n(661)),s=n(651),l=a.BaseBox.withComponent((0,a.styled)((function(e){return(0,s.jsx)("svg",(0,c.default)({width:12,height:12,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",role:"img"},e),(0,s.jsx)("path",{d:"M5.95 4.536L9.778.707a1 1 0 011.414 1.414L7.364 5.95l3.828 3.828a1 1 0 01-1.414 1.414L5.95 7.364l-3.83 3.828A1 1 0 01.707 9.778L4.536 5.95.707 2.12A1 1 0 112.121.707L5.95 4.536z",fill:"currentColor",fillRule:"evenodd"}))}))(u||(u=(0,i.default)(["\n  display: block;\n"]))),{target:"e1k7tco60"});t.default=l},1052:function(e,t,n){"use strict";var r=n(664),o=n(985);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,i=r(n(957)),c=r(n(961)),a=(o(n(353)),n(661)),s=n(651),l=a.BaseBox.withComponent((0,a.styled)((function(e){return(0,s.jsx)("svg",(0,c.default)({xmlns:"http://www.w3.org/2000/svg",width:16,height:4,viewBox:"0 0 16 4",role:"img"},e),(0,s.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M2 4a2 2 0 110-4 2 2 0 010 4zm6 0a2 2 0 110-4 2 2 0 010 4zm6 0a2 2 0 110-4 2 2 0 010 4z"}))}))(u||(u=(0,i.default)(["\n  display: block;\n"]))),{target:"e1c07le30"});t.default=l},1420:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(353),c=n(601),a=u(n(1421));t.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).",t.default=function(e){void 0===e&&(e={});var n=e.closeOnOutsideClick,u=void 0===n||n,s=e.closeOnEsc,l=void 0===s||s,f=e.bindTo,d=e.isOpen,v=void 0!==d&&d,p=e.onOpen,h=e.onClose,w=e.onPortalClick,m=o(e,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),b=a.default(),g=b.isServer,O=b.isBrowser,y=i.useState(v),k=y[0],E=y[1],j=i.useRef(k),_=i.useCallback((function(e){j.current=e,E(e)}),[]),C=i.useRef(),P=i.useRef(O?document.createElement("div"):null);i.useEffect((function(){O&&!P.current&&(P.current=document.createElement("div"))}),[O,P]);var L=i.useMemo((function(){if(!g)return f&&c.findDOMNode(f)||document.body}),[g,f]),M=function(e){if(!e)return{portal:P,targetEl:C,event:e};var t=e||{};t.persist&&t.persist(),t.portal=P,t.targetEl=C,t.event=e;var n=e.currentTarget;return!C.current&&n&&n!==document&&(C.current=t.currentTarget),t},x=Object.entries(m).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=function(e){g||r(M(e))},e}),{}),S=i.useCallback((function(e){if(!g){var n=M(e);if(null==C.current)throw setTimeout((function(){return _(!0)}),0),Error(t.errorMessage1);p&&p(n),_(!0)}}),[g,P,_,C,p]),B=i.useCallback((function(e){if(!g){var t=M(e);h&&j.current&&h(t),j.current&&_(!1)}}),[g,h,_]),R=i.useCallback((function(e){return j.current?B(e):S(e)}),[B,S]),T=i.useCallback((function(e){return"Escape"===e.key&&l?B(e):void 0}),[l,B]),N=i.useCallback((function(e){var t=function(t){return t.current.contains(e.target)};t(P)||0!==e.button||!j.current||t(C)||u&&B(e)}),[g,B,u,P]),z=i.useCallback((function(e){if(!g&&P.current instanceof HTMLElement){var t=M(e);P.current.contains(t.target)&&w&&w(t),N(e)}}),[N]),D=i.useRef({});i.useEffect((function(){if(!g&&L instanceof HTMLElement&&P.current instanceof HTMLElement){var e={onScroll:"scroll",onWheel:"wheel"},t=P.current;return L.appendChild(P.current),Object.entries(e).forEach((function(e){var t=e[0],n=e[1];m[t]&&(D.current[t]=function(e){return m[t](M(e))},document.addEventListener(n,D.current[t]))})),document.addEventListener("keydown",T),document.addEventListener("mousedown",z),function(){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];m[t]&&(document.removeEventListener(n,D.current[t]),delete D.current[t])})),document.removeEventListener("keydown",T),document.removeEventListener("mousedown",z),L.removeChild(t)}}}),[g,N,T,L,P]);var A=i.useCallback((function(e){var t=e.children;return null!=P.current?c.createPortal(t,P.current):null}),[P]);return Object.assign([S,B,j.current,A,R,C,P],r(r({isOpen:j.current,openPortal:S,ref:C,closePortal:B,togglePortal:R,Portal:A,portalRef:P},x),{bind:r({ref:C},x)}))}},1421:function(e,t){"use strict";var n,r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Browser="browser",e.Server="server",e.Native="native"}(n=t.Device||(t.Device={}));var o=n.Browser,u=n.Server,i=n.Native,c=!("undefined"==typeof window||!window.document||!window.document.createElement),a="undefined"!=typeof navigator&&"ReactNative"==navigator.product?i:c?o:u,s={isBrowser:a===o,isServer:a===u,isNative:a===i,device:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a===o&&!!window.addEventListener,canUseViewport:a===o&&!!window.screen},l=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){return r(r({},e),t)}),{})}((e=s,Object.keys(e).map((function(t){return e[t]})),s));var e},f=l();t.weAreServer=function(){s.isServer=!0,f=l()},t.useSSR=function(){return f},t.default=t.useSSR}}]);