!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequireaea4;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequireaea4=o),o.register("h87Cd",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}}));var i=o("h87Cd");
/*! modernizr 3.11.2 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csscolumns-customelements-flexbox-history-picture-pointerevents-postmessage-sizes-srcset-webgl-websockets-webworkers-addtest-domprefixes-hasevent-mq-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles !*/!function(t,n,r,o){function s(t,n){return(void 0===t?"undefined":e(i)(t))===n}function a(e){var t=x.className,n=b._config.classPrefix||"";if(_&&(t=t.baseVal),b._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}b._config.enableClasses&&(e.length>0&&(t+=" "+n+e.join(" "+n)),_?x.className.baseVal=t:x.className=t)}function l(e,t){if("object"==typeof e)for(var n in e)P(e,n)&&l(n,e[n]);else{var r=(e=e.toLowerCase()).split("."),o=b[r[0]];if(2===r.length&&(o=o[r[1]]),void 0!==o)return b;t="function"==typeof t?t():t,1===r.length?b[r[0]]=t:(!b[r[0]]||b[r[0]]instanceof Boolean||(b[r[0]]=new Boolean(b[r[0]])),b[r[0]][r[1]]=t),a([(t&&!1!==t?"":"no-")+r.join("-")]),b._trigger(e,t)}return b}function u(){return"function"!=typeof r.createElement?r.createElement(arguments[0]):_?r.createElementNS.call(r,"http://www.w3.org/2000/svg",arguments[0]):r.createElement.apply(r,arguments)}function f(e,t,n,o){var i,s,a,l,f,d="modernizr",c=u("div"),p=((f=r.body)||((f=u(_?"svg":"body")).fake=!0),f);if(parseInt(n,10))for(;n--;)(a=u("div")).id=o?o[n]:d+(n+1),c.appendChild(a);return(i=u("style")).type="text/css",i.id="s"+d,(p.fake?p:c).appendChild(i),p.appendChild(c),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(r.createTextNode(e)),c.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",l=x.style.overflow,x.style.overflow="hidden",x.appendChild(p)),s=t(c,e),p.fake?(p.parentNode.removeChild(p),x.style.overflow=l,x.offsetHeight):c.parentNode.removeChild(c),!!s}function d(e,t,r){var o;if("getComputedStyle"in n){o=getComputedStyle.call(n,e,t);var i=n.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){i[i.error?"error":"log"].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&e.currentStyle&&e.currentStyle[r];return o}function c(e,t){return!!~(""+e).indexOf(t)}function p(e){return e.replace(/([A-Z])/g,(function(e,t){return"-"+t.toLowerCase()})).replace(/^ms-/,"-ms-")}function A(e){return e.replace(/([a-z])-([a-z])/g,(function(e,t,n){return t+n.toUpperCase()})).replace(/^-/,"")}function m(e,t,r,i){function a(){m&&(delete N.style,delete N.modElem)}if(i=!s(i,"undefined")&&i,!s(r,"undefined")){var l=function(e,t){var r=e.length;if("CSS"in n&&"supports"in n.CSS){for(;r--;)if(n.CSS.supports(p(e[r]),t))return!0;return!1}if("CSSSupportsRule"in n){for(var i=[];r--;)i.push("("+p(e[r])+":"+t+")");return f("@supports ("+(i=i.join(" or "))+") { #modernizr { position: absolute; } }",(function(e){return"absolute"===d(e,null,"position")}))}return o}(e,r);if(!s(l,"undefined"))return l}for(var m,h,g,v,y,w=["modernizr","tspan","samp"];!N.style&&w.length;)m=!0,N.modElem=u(w.shift()),N.style=N.modElem.style;for(g=e.length,h=0;h<g;h++)if(v=e[h],y=N.style[v],c(v,"-")&&(v=A(v)),N.style[v]!==o){if(i||s(r,"undefined"))return a(),"pfx"!==t||v;try{N.style[v]=r}catch(e){}if(N.style[v]!==y)return a(),"pfx"!==t||v}return a(),!1}function h(e,t){return function(){return e.apply(t,arguments)}}function g(e,t,n,r,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+L.join(i+" ")+i).split(" ");return s(t,"string")||s(t,"undefined")?m(a,t,r,o):function(e,t,n){var r;for(var o in e)if(e[o]in t)return!1===n?e[o]:s(r=t[e[o]],"function")?h(r,n||t):r;return!1}(a=(e+" "+T.join(i+" ")+i).split(" "),t,n)}function v(e,t,n){return g(e,o,o,t,n)}var y=[],w={_version:"3.11.2",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout((function(){t(n[e])}),0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},b=function(){};b.prototype=w,b=new b;var C=[],x=r.documentElement,_="svg"===x.nodeName.toLowerCase(),S="Moz O ms Webkit",T=w._config.usePrefixes?S.toLowerCase().split(" "):[];w._domPrefixes=T;var P,O,B=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=B,P=s(O={}.hasOwnProperty,"undefined")||s(O.call,"undefined")?function(e,t){return t in e&&s(e.constructor.prototype[t],"undefined")}:function(e,t){return O.call(e,t)},w._l={},w.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),b.hasOwnProperty(e)&&setTimeout((function(){b._trigger(e,b[e])}),0)},w._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout((function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)}),0),delete this._l[e]}},b._q.push((function(){w.addTest=l}));var E,k=(E=!("onblur"in x),function(e,t){var n;return!!e&&(t&&"string"!=typeof t||(t=u(t||"div")),!(n=(e="on"+e)in t)&&E&&(t.setAttribute||(t=u("div")),t.setAttribute(e,""),n="function"==typeof t[e],t[e]!==o&&(t[e]=o),t.removeAttribute(e)),n)});w.hasEvent=k;var z=function(){var e=n.matchMedia||n.msMatchMedia;return e?function(t){var n=e(t);return n&&n.matches||!1}:function(e){var t=!1;return f("@media "+e+" { #modernizr { position: absolute; } }",(function(e){t="absolute"===d(e,null,"position")})),t}}();w.mq=z;w.prefixedCSSValue=function(e,t){var n=!1,r=u("div").style;if(e in r){var o=T.length;for(r[e]=t,n=r[e];o--&&!n;)r[e]="-"+T[o]+"-"+t,n=r[e]}return""===n&&(n=!1),n};var L=w._config.usePrefixes?S.split(" "):[];w._cssomPrefixes=L;var M={elem:u("modernizr")};b._q.push((function(){delete M.elem}));var N={style:M.elem.style};b._q.unshift((function(){delete N.style})),w.testAllProps=g,w.testAllProps=v,w.testProp=function(e,t,n){return m([e],o,t,n)},w.testStyles=f,b.addTest("customelements","customElements"in n),b.addTest("history",(function(){var e=navigator.userAgent;return!!e&&(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone")||"file:"===location.protocol)&&n.history&&"pushState"in n.history}));var R=[""].concat(T);w._domPrefixesAll=R,b.addTest("pointerevents",(function(){for(var e=0,t=R.length;e<t;e++)if(k(R[e]+"pointerdown"))return!0;return!1}));var j=!0;try{n.postMessage({toString:function(){j=!1}},"*")}catch(e){}b.addTest("postmessage",new Boolean("postMessage"in n)),b.addTest("postmessage.structuredclones",j),b.addTest("webgl",(function(){return"WebGLRenderingContext"in n}));var q=!1;try{q="WebSocket"in n&&2===n.WebSocket.CLOSING}catch(e){}b.addTest("websockets",q),b.addTest("cssanimations",v("animationName","a",!0)),function(){b.addTest("csscolumns",(function(){var e=!1,t=v("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(e){}return e}));for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=v("column"+n[r]),"breakbefore"!==e&&"breakafter"!==e&&"breakinside"!==e||(t=t||v(n[r])),b.addTest("csscolumns."+e,t)}(),b.addTest("flexbox",v("flexBasis","1px",!0)),b.addTest("picture","HTMLPictureElement"in n),b.addAsyncTest((function(){var e,t,n=u("img"),r="sizes"in n;!r&&"srcset"in n?("data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=function(){l("sizes",2===n.width)},n.onload=t,n.onerror=t,n.setAttribute("sizes","9px"),n.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 8w",n.src=e):l("sizes",r)})),b.addTest("srcset","srcset"in u("img")),b.addTest("webworkers","Worker"in n),function(){var e,t,n,r,o,i;for(var a in y)if(y.hasOwnProperty(a)){if(e=[],(t=y[a]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=s(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)1===(i=e[o].split(".")).length?b[i[0]]=r:(b[i[0]]&&(!b[i[0]]||b[i[0]]instanceof Boolean)||(b[i[0]]=new Boolean(b[i[0]])),b[i[0]][i[1]]=r),C.push((r?"":"no-")+i.join("-"))}}(),a(C),delete w.addTest,delete w.addAsyncTest;for(var W=0;W<b._q.length;W++)b._q[W]();t.Modernizr=b}(window,window,document)}();
//# sourceMappingURL=about.3dfcccf9.js.map
