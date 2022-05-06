/*! For license information please see 30.f3ddda42754e45081f0c.js.LICENSE.txt */
(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[30],{1369:function(t,e,r){var n;!function(i,o){"use strict";var a="file:"===i.location.protocol,l=o.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");var s=Array.prototype.forEach||function(t,e){if(null==this||"function"!=typeof t)throw new TypeError;var r,n=this.length>>>0;for(r=0;r<n;++r)r in this&&t.call(e,this[r],r,this)},u={},c=0,f=[],p=[],d={},v=function(t){return t.cloneNode(!0)},h=function(t,e){p[t]=p[t]||[],p[t].push(e)},g=function(t,e){if(void 0!==u[t])u[t]instanceof SVGSVGElement?e(v(u[t])):h(t,e);else{if(!i.XMLHttpRequest)return e("Browser does not support XMLHttpRequest"),!1;u[t]={},h(t,e);var r=new XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState){if(404===r.status||null===r.responseXML)return e("Unable to load SVG file: "+t),a&&e("Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver."),e(),!1;if(!(200===r.status||a&&0===r.status))return e("There was a problem injecting the SVG: "+r.status+" "+r.statusText),!1;if(r.responseXML instanceof Document)u[t]=r.responseXML.documentElement;else if(DOMParser&&DOMParser instanceof Function){var n;try{n=(new DOMParser).parseFromString(r.responseText,"text/xml")}catch(t){n=void 0}if(!n||n.getElementsByTagName("parsererror").length)return e("Unable to parse SVG file: "+t),!1;u[t]=n.documentElement}!function(t){for(var e=0,r=p[t].length;e<r;e++)!function(e){setTimeout((function(){p[t][e](v(u[t]))}),0)}(e)}(t)}},r.open("GET",t),r.overrideMimeType&&r.overrideMimeType("text/xml"),r.send()}},m=function(t,e,r,n){var o=t.getAttribute("data-src")||t.getAttribute("src");if(/\.svg/i.test(o))if(l)-1===f.indexOf(t)&&(f.push(t),t.setAttribute("src",""),g(o,(function(r){if(void 0===r||"string"==typeof r)return n(r),!1;var a=t.getAttribute("id");a&&r.setAttribute("id",a);var l=t.getAttribute("title");l&&r.setAttribute("title",l);var u=[].concat(r.getAttribute("class")||[],"injected-svg",t.getAttribute("class")||[]).join(" ");r.setAttribute("class",function(t){for(var e={},r=(t=t.split(" ")).length,n=[];r--;)e.hasOwnProperty(t[r])||(e[t[r]]=1,n.unshift(t[r]));return n.join(" ")}(u));var p=t.getAttribute("style");p&&r.setAttribute("style",p);var v=[].filter.call(t.attributes,(function(t){return/^data-\w[\w\-]*$/.test(t.name)}));s.call(v,(function(t){t.name&&t.value&&r.setAttribute(t.name,t.value)}));var h,g,m,b,y,w={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],pattern:["fill","stroke"],radialGradient:["fill","stroke"]};Object.keys(w).forEach((function(t){h=t,m=w[t];for(var e=0,n=(g=r.querySelectorAll("defs "+h+"[id]")).length;e<n;e++){var i;b=g[e].id,y=b+"-"+c,s.call(m,(function(t){for(var e=0,n=(i=r.querySelectorAll("["+t+'*="'+b+'"]')).length;e<n;e++)i[e].setAttribute(t,"url(#"+y+")")})),g[e].id=y}})),r.removeAttribute("xmlns:a");for(var A,k,x=r.querySelectorAll("script"),S=[],G=0,T=x.length;G<T;G++)(k=x[G].getAttribute("type"))&&"application/ecmascript"!==k&&"application/javascript"!==k||(A=x[G].innerText||x[G].textContent,S.push(A),r.removeChild(x[G]));if(S.length>0&&("always"===e||"once"===e&&!d[o])){for(var j=0,M=S.length;j<M;j++)new Function(S[j])(i);d[o]=!0}var E=r.querySelectorAll("style");s.call(E,(function(t){t.textContent+=""})),t.parentNode.replaceChild(r,t),delete f[f.indexOf(t)],t=null,c++,n(r)})));else{var a=t.getAttribute("data-fallback")||t.getAttribute("data-png");a?(t.setAttribute("src",a),n(null)):r?(t.setAttribute("src",r+"/"+o.split("/").pop().replace(".svg",".png")),n(null)):n("This browser does not support SVG and no PNG fallback was defined.")}else n("Attempted to inject a file with a non-svg extension: "+o)},b=function(t,e,r){var n=(e=e||{}).evalScripts||"always",i=e.pngFallback||!1,o=e.each;if(void 0!==t.length){var a=0;s.call(t,(function(e){m(e,n,i,(function(e){o&&"function"==typeof o&&o(e),r&&t.length===++a&&r(a)}))}))}else t?m(t,n,i,(function(e){o&&"function"==typeof o&&o(e),r&&r(1),t=null})):r&&r(0)};"object"==typeof t.exports?t.exports=e=b:void 0===(n=function(){return b}.call(e,r,e,t))||(t.exports=n)}(window,document)}}]);