!function(t){function e(t){var e=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=p.p+""+t+"."+E+".hot-update.js",e.appendChild(n)}function n(t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var e=new XMLHttpRequest,n=p.p+""+E+".hot-update.json";e.open("GET",n,!0),e.timeout=1e4,e.send(null)}catch(e){return t(e)}e.onreadystatechange=function(){if(4===e.readyState)if(0===e.status)t(new Error("Manifest request to "+n+" timed out."));else if(404===e.status)t();else if(200!==e.status&&304!==e.status)t(new Error("Manifest request to "+n+" failed."));else{try{var r=JSON.parse(e.responseText)}catch(e){return void t(e)}t(null,r)}}}function r(t){function e(t,e){"ready"===S&&o("prepare"),k++,p.e(t,function(){function n(){k--,"prepare"===S&&(O[t]||c(t),0===k&&0===x&&d())}try{e.call(null,r)}finally{n()}})}var n=I[t];if(!n)return p;var r=function(e){return n.hot.active?I[e]?(I[e].parents.indexOf(t)<0&&I[e].parents.push(t),n.children.indexOf(e)<0&&n.children.push(e)):g=[t]:(console.warn("[HMR] unexpected require("+e+") from disposed module "+t),g=[]),p(e)};for(var s in p)Object.prototype.hasOwnProperty.call(p,s)&&(y?Object.defineProperty(r,s,function(t){return{configurable:!0,enumerable:!0,get:function(){return p[t]},set:function(e){p[t]=e}}}(s)):r[s]=p[s]);return y?Object.defineProperty(r,"e",{enumerable:!0,value:e}):r.e=e,r}function s(t){var e={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],active:!0,accept:function(t,n){if("undefined"==typeof t)e._selfAccepted=!0;else if("function"==typeof t)e._selfAccepted=t;else if("object"==typeof t)for(var r=0;r<t.length;r++)e._acceptedDependencies[t[r]]=n;else e._acceptedDependencies[t]=n},decline:function(t){if("undefined"==typeof t)e._selfDeclined=!0;else if("number"==typeof t)e._declinedDependencies[t]=!0;else for(var n=0;n<t.length;n++)e._declinedDependencies[t[n]]=!0},dispose:function(t){e._disposeHandlers.push(t)},addDisposeHandler:function(t){e._disposeHandlers.push(t)},removeDisposeHandler:function(t){var n=e._disposeHandlers.indexOf(t);n>=0&&e._disposeHandlers.splice(n,1)},check:l,apply:u,status:function(t){return t?void j.push(t):S},addStatusHandler:function(t){j.push(t)},removeStatusHandler:function(t){var e=j.indexOf(t);e>=0&&j.splice(e,1)},data:_[t]};return e}function o(t){S=t;for(var e=0;e<j.length;e++)j[e].call(null,t)}function i(t){var e=+t+""===t;return e?+t:t}function l(t,e){if("idle"!==S)throw new Error("check() is only allowed in idle status");"function"==typeof t?(w=!1,e=t):(w=t,e=e||function(t){if(t)throw t}),o("check"),n(function(t,n){if(t)return e(t);if(!n)return o("idle"),void e(null,null);T={},A={},O={};for(var r=0;r<n.c.length;r++)A[n.c[r]]=!0;b=n.h,o("prepare"),h=e,v={};for(var s in L)c(s);"prepare"===S&&0===k&&0===x&&d()})}function a(t,e){if(A[t]&&T[t]){T[t]=!1;for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(v[n]=e[n]);0===--x&&0===k&&d()}}function c(t){A[t]?(T[t]=!0,x++,e(t)):O[t]=!0}function d(){o("ready");var t=h;if(h=null,t)if(w)u(w,t);else{var e=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&e.push(i(n));t(null,e)}}function u(e,n){function r(t){for(var e=[t],n={},r=e.slice();r.length>0;){var o=r.pop(),t=I[o];if(t&&!t.hot._selfAccepted){if(t.hot._selfDeclined)return new Error("Aborted because of self decline: "+o);if(0===o)return;for(var i=0;i<t.parents.length;i++){var l=t.parents[i],a=I[l];if(a.hot._declinedDependencies[o])return new Error("Aborted because of declined dependency: "+o+" in "+l);e.indexOf(l)>=0||(a.hot._acceptedDependencies[o]?(n[l]||(n[l]=[]),s(n[l],[o])):(delete n[l],e.push(l),r.push(l)))}}}return[e,n]}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];t.indexOf(r)<0&&t.push(r)}}if("ready"!==S)throw new Error("apply() is only allowed in ready status");"function"==typeof e?(n=e,e={}):e&&"object"==typeof e?n=n||function(t){if(t)throw t}:(e={},n=n||function(t){if(t)throw t});var l={},a=[],c={};for(var d in v)if(Object.prototype.hasOwnProperty.call(v,d)){var u=i(d),f=r(u);if(!f){if(e.ignoreUnaccepted)continue;return o("abort"),n(new Error("Aborted because "+u+" is not accepted"))}if(f instanceof Error)return o("abort"),n(f);c[u]=v[u],s(a,f[0]);for(var u in f[1])Object.prototype.hasOwnProperty.call(f[1],u)&&(l[u]||(l[u]=[]),s(l[u],f[1][u]))}for(var m=[],y=0;y<a.length;y++){var u=a[y];I[u]&&I[u].hot._selfAccepted&&m.push({module:u,errorHandler:I[u].hot._selfAccepted})}o("dispose");for(var h=a.slice();h.length>0;){var u=h.pop(),w=I[u];if(w){for(var j={},x=w.hot._disposeHandlers,k=0;k<x.length;k++){var O=x[k];O(j)}_[u]=j,w.hot.active=!1,delete I[u];for(var k=0;k<w.children.length;k++){var T=I[w.children[k]];if(T){var A=T.parents.indexOf(u);A>=0&&T.parents.splice(A,1)}}}}for(var u in l)if(Object.prototype.hasOwnProperty.call(l,u))for(var w=I[u],L=l[u],k=0;k<L.length;k++){var R=L[k],A=w.children.indexOf(R);A>=0&&w.children.splice(A,1)}o("apply"),E=b;for(var u in c)Object.prototype.hasOwnProperty.call(c,u)&&(t[u]=c[u]);var q=null;for(var u in l)if(Object.prototype.hasOwnProperty.call(l,u)){for(var w=I[u],L=l[u],N=[],y=0;y<L.length;y++){var R=L[y],O=w.hot._acceptedDependencies[R];N.indexOf(O)>=0||N.push(O)}for(var y=0;y<N.length;y++){var O=N[y];try{O(l)}catch(t){q||(q=t)}}}for(var y=0;y<m.length;y++){var C=m[y],u=C.module;g=[u];try{p(u)}catch(t){if("function"==typeof C.errorHandler)try{C.errorHandler(t)}catch(t){q||(q=t)}else q||(q=t)}}return q?(o("fail"),n(q)):(o("idle"),void n(null,a))}function p(e){if(I[e])return I[e].exports;var n=I[e]={exports:{},id:e,loaded:!1,hot:s(e),parents:g,children:[]};return t[e].call(n.exports,n,n.exports,r(e)),n.loaded=!0,n.exports}var f=window.webpackJsonp;window.webpackJsonp=function(e,n){for(var r,s,o=0,i=[];o<e.length;o++)s=e[o],L[s]&&i.push.apply(i,L[s]),L[s]=0;for(r in n)t[r]=n[r];for(f&&f(e,n);i.length;)i.shift().call(null,p)};var m=this.webpackHotUpdate;this.webpackHotUpdate=function(t,e){a(t,e),m&&m(t,e)};var y=!1;try{Object.defineProperty({},"x",{get:function(){}}),y=!0}catch(t){}var h,v,b,w=!0,E="e41f6986b2b03c2ac0bc",_={},g=[],j=[],S="idle",x=0,k=0,O={},T={},A={},I={},L={1:0};return p.e=function(t,e){if(0===L[t])return e.call(null,p);if(void 0!==L[t])L[t].push(e);else{L[t]=[e];var n=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.async=!0,r.src=p.p+""+t+".bundle.js",n.appendChild(r)}},p.m=t,p.c=I,p.p="/dist/",p.h=function(){return E},r(0)(0)}({0:function(module,exports,__webpack_require__){eval("'use strict';\n\n__webpack_require__(311);\ndocument.querySelector('.loader-button').addEventListener('click', function (e) {\n  e.target.style.display = 'none';\n  __webpack_require__.e/* nsure */(0, function (require) {\n    __webpack_require__(307).polyfill();\n    __webpack_require__(308);\n    __webpack_require__(125);\n    __webpack_require__(310);\n\n    var _require = __webpack_require__(89),\n        NewsParser = _require.NewsParser;\n\n    var Subject = __webpack_require__(123);\n    var SubjectInstance = new Subject();\n\n    var parseNews = new NewsParser();\n    var unsubscribeBtn = document.querySelector('.unsubscribe');\n    var subscribeBtn = document.querySelector('.subscribe');\n\n    SubjectInstance.subscribe(parseNews);\n    unsubscribeBtn.style.visibility = 'visible';\n\n    unsubscribeBtn.addEventListener('click', function () {\n      SubjectInstance.unsubscribe(parseNews);\n      console.log(parseNews.source + ' successfully unsubscribed!');\n      unsubscribeBtn.style.visibility = 'hidden';\n      subscribeBtn.style.visibility = 'visible';\n    });\n\n    subscribeBtn.addEventListener('click', function () {\n      console.log(parseNews.source + ' successfully subscribed!');\n      SubjectInstance.subscribe(parseNews);\n      subscribeBtn.style.visibility = 'hidden';\n      unsubscribeBtn.style.visibility = 'visible';\n    });\n  });\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./scripts/script.js\n// module id = 0\n// module chunks = 1\n//# sourceURL=webpack:///./scripts/script.js?")},87:function(module,exports,__webpack_require__){eval('exports = module.exports = __webpack_require__(118)();\n// imports\n\n\n// module\nexports.push([module.id, ".wrapper{visibility:hidden;opacity:0;transition:visibility 0s,opacity .5s linear .2s}.loader-button{visibility:visible;margin:auto;width:100px;height:100px;display:block;position:absolute;top:0;bottom:0;left:0;right:0;border-radius:50%;background:#fff}.loader-button:focus{outline:none}", ""]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/css-loader!./styles/main.css\n// module id = 87\n// module chunks = 1\n//# sourceURL=webpack:///./styles/main.css?./~/css-loader')},118:function(module,exports){eval('/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function() {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\tvar result = [];\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar item = this[i];\n\t\t\tif(item[2]) {\n\t\t\t\tresult.push("@media " + item[2] + "{" + item[1] + "}");\n\t\t\t} else {\n\t\t\t\tresult.push(item[1]);\n\t\t\t}\n\t\t}\n\t\treturn result.join("");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === "string")\n\t\t\tmodules = [[null, modules, ""]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === "number")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = "(" + item[2] + ") and (" + mediaQuery + ")";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/css-loader/lib/css-base.js\n// module id = 118\n// module chunks = 1\n//# sourceURL=webpack:///./~/css-loader/lib/css-base.js?')},120:function(module,exports,__webpack_require__){eval('/*\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Tobias Koppers @sokra\r\n*/\r\nvar stylesInDom = {},\r\n\tmemoize = function(fn) {\r\n\t\tvar memo;\r\n\t\treturn function () {\r\n\t\t\tif (typeof memo === "undefined") memo = fn.apply(this, arguments);\r\n\t\t\treturn memo;\r\n\t\t};\r\n\t},\r\n\tisOldIE = memoize(function() {\r\n\t\treturn /msie [6-9]\\b/.test(window.navigator.userAgent.toLowerCase());\r\n\t}),\r\n\tgetHeadElement = memoize(function () {\r\n\t\treturn document.head || document.getElementsByTagName("head")[0];\r\n\t}),\r\n\tsingletonElement = null,\r\n\tsingletonCounter = 0,\r\n\tstyleElementsInsertedAtTop = [];\r\n\r\nmodule.exports = function(list, options) {\r\n\tif(false) {\r\n\t\tif(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");\r\n\t}\r\n\r\n\toptions = options || {};\r\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\r\n\t// tags it will allow on a page\r\n\tif (typeof options.singleton === "undefined") options.singleton = isOldIE();\r\n\r\n\t// By default, add <style> tags to the bottom of <head>.\r\n\tif (typeof options.insertAt === "undefined") options.insertAt = "bottom";\r\n\r\n\tvar styles = listToStyles(list);\r\n\taddStylesToDom(styles, options);\r\n\r\n\treturn function update(newList) {\r\n\t\tvar mayRemove = [];\r\n\t\tfor(var i = 0; i < styles.length; i++) {\r\n\t\t\tvar item = styles[i];\r\n\t\t\tvar domStyle = stylesInDom[item.id];\r\n\t\t\tdomStyle.refs--;\r\n\t\t\tmayRemove.push(domStyle);\r\n\t\t}\r\n\t\tif(newList) {\r\n\t\t\tvar newStyles = listToStyles(newList);\r\n\t\t\taddStylesToDom(newStyles, options);\r\n\t\t}\r\n\t\tfor(var i = 0; i < mayRemove.length; i++) {\r\n\t\t\tvar domStyle = mayRemove[i];\r\n\t\t\tif(domStyle.refs === 0) {\r\n\t\t\t\tfor(var j = 0; j < domStyle.parts.length; j++)\r\n\t\t\t\t\tdomStyle.parts[j]();\r\n\t\t\t\tdelete stylesInDom[domStyle.id];\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n}\r\n\r\nfunction addStylesToDom(styles, options) {\r\n\tfor(var i = 0; i < styles.length; i++) {\r\n\t\tvar item = styles[i];\r\n\t\tvar domStyle = stylesInDom[item.id];\r\n\t\tif(domStyle) {\r\n\t\t\tdomStyle.refs++;\r\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\r\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\r\n\t\t\t}\r\n\t\t\tfor(; j < item.parts.length; j++) {\r\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\r\n\t\t\t}\r\n\t\t} else {\r\n\t\t\tvar parts = [];\r\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\r\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\r\n\t\t\t}\r\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\r\n\t\t}\r\n\t}\r\n}\r\n\r\nfunction listToStyles(list) {\r\n\tvar styles = [];\r\n\tvar newStyles = {};\r\n\tfor(var i = 0; i < list.length; i++) {\r\n\t\tvar item = list[i];\r\n\t\tvar id = item[0];\r\n\t\tvar css = item[1];\r\n\t\tvar media = item[2];\r\n\t\tvar sourceMap = item[3];\r\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\r\n\t\tif(!newStyles[id])\r\n\t\t\tstyles.push(newStyles[id] = {id: id, parts: [part]});\r\n\t\telse\r\n\t\t\tnewStyles[id].parts.push(part);\r\n\t}\r\n\treturn styles;\r\n}\r\n\r\nfunction insertStyleElement(options, styleElement) {\r\n\tvar head = getHeadElement();\r\n\tvar lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];\r\n\tif (options.insertAt === "top") {\r\n\t\tif(!lastStyleElementInsertedAtTop) {\r\n\t\t\thead.insertBefore(styleElement, head.firstChild);\r\n\t\t} else if(lastStyleElementInsertedAtTop.nextSibling) {\r\n\t\t\thead.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);\r\n\t\t} else {\r\n\t\t\thead.appendChild(styleElement);\r\n\t\t}\r\n\t\tstyleElementsInsertedAtTop.push(styleElement);\r\n\t} else if (options.insertAt === "bottom") {\r\n\t\thead.appendChild(styleElement);\r\n\t} else {\r\n\t\tthrow new Error("Invalid value for parameter \'insertAt\'. Must be \'top\' or \'bottom\'.");\r\n\t}\r\n}\r\n\r\nfunction removeStyleElement(styleElement) {\r\n\tstyleElement.parentNode.removeChild(styleElement);\r\n\tvar idx = styleElementsInsertedAtTop.indexOf(styleElement);\r\n\tif(idx >= 0) {\r\n\t\tstyleElementsInsertedAtTop.splice(idx, 1);\r\n\t}\r\n}\r\n\r\nfunction createStyleElement(options) {\r\n\tvar styleElement = document.createElement("style");\r\n\tstyleElement.type = "text/css";\r\n\tinsertStyleElement(options, styleElement);\r\n\treturn styleElement;\r\n}\r\n\r\nfunction createLinkElement(options) {\r\n\tvar linkElement = document.createElement("link");\r\n\tlinkElement.rel = "stylesheet";\r\n\tinsertStyleElement(options, linkElement);\r\n\treturn linkElement;\r\n}\r\n\r\nfunction addStyle(obj, options) {\r\n\tvar styleElement, update, remove;\r\n\r\n\tif (options.singleton) {\r\n\t\tvar styleIndex = singletonCounter++;\r\n\t\tstyleElement = singletonElement || (singletonElement = createStyleElement(options));\r\n\t\tupdate = applyToSingletonTag.bind(null, styleElement, styleIndex, false);\r\n\t\tremove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);\r\n\t} else if(obj.sourceMap &&\r\n\t\ttypeof URL === "function" &&\r\n\t\ttypeof URL.createObjectURL === "function" &&\r\n\t\ttypeof URL.revokeObjectURL === "function" &&\r\n\t\ttypeof Blob === "function" &&\r\n\t\ttypeof btoa === "function") {\r\n\t\tstyleElement = createLinkElement(options);\r\n\t\tupdate = updateLink.bind(null, styleElement);\r\n\t\tremove = function() {\r\n\t\t\tremoveStyleElement(styleElement);\r\n\t\t\tif(styleElement.href)\r\n\t\t\t\tURL.revokeObjectURL(styleElement.href);\r\n\t\t};\r\n\t} else {\r\n\t\tstyleElement = createStyleElement(options);\r\n\t\tupdate = applyToTag.bind(null, styleElement);\r\n\t\tremove = function() {\r\n\t\t\tremoveStyleElement(styleElement);\r\n\t\t};\r\n\t}\r\n\r\n\tupdate(obj);\r\n\r\n\treturn function updateStyle(newObj) {\r\n\t\tif(newObj) {\r\n\t\t\tif(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)\r\n\t\t\t\treturn;\r\n\t\t\tupdate(obj = newObj);\r\n\t\t} else {\r\n\t\t\tremove();\r\n\t\t}\r\n\t};\r\n}\r\n\r\nvar replaceText = (function () {\r\n\tvar textStore = [];\r\n\r\n\treturn function (index, replacement) {\r\n\t\ttextStore[index] = replacement;\r\n\t\treturn textStore.filter(Boolean).join(\'\\n\');\r\n\t};\r\n})();\r\n\r\nfunction applyToSingletonTag(styleElement, index, remove, obj) {\r\n\tvar css = remove ? "" : obj.css;\r\n\r\n\tif (styleElement.styleSheet) {\r\n\t\tstyleElement.styleSheet.cssText = replaceText(index, css);\r\n\t} else {\r\n\t\tvar cssNode = document.createTextNode(css);\r\n\t\tvar childNodes = styleElement.childNodes;\r\n\t\tif (childNodes[index]) styleElement.removeChild(childNodes[index]);\r\n\t\tif (childNodes.length) {\r\n\t\t\tstyleElement.insertBefore(cssNode, childNodes[index]);\r\n\t\t} else {\r\n\t\t\tstyleElement.appendChild(cssNode);\r\n\t\t}\r\n\t}\r\n}\r\n\r\nfunction applyToTag(styleElement, obj) {\r\n\tvar css = obj.css;\r\n\tvar media = obj.media;\r\n\r\n\tif(media) {\r\n\t\tstyleElement.setAttribute("media", media)\r\n\t}\r\n\r\n\tif(styleElement.styleSheet) {\r\n\t\tstyleElement.styleSheet.cssText = css;\r\n\t} else {\r\n\t\twhile(styleElement.firstChild) {\r\n\t\t\tstyleElement.removeChild(styleElement.firstChild);\r\n\t\t}\r\n\t\tstyleElement.appendChild(document.createTextNode(css));\r\n\t}\r\n}\r\n\r\nfunction updateLink(linkElement, obj) {\r\n\tvar css = obj.css;\r\n\tvar sourceMap = obj.sourceMap;\r\n\r\n\tif(sourceMap) {\r\n\t\t// http://stackoverflow.com/a/26603875\r\n\t\tcss += "\\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";\r\n\t}\r\n\r\n\tvar blob = new Blob([css], { type: "text/css" });\r\n\r\n\tvar oldSrc = linkElement.href;\r\n\r\n\tlinkElement.href = URL.createObjectURL(blob);\r\n\r\n\tif(oldSrc)\r\n\t\tURL.revokeObjectURL(oldSrc);\r\n}\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/style-loader/addStyles.js\n// module id = 120\n// module chunks = 1\n//# sourceURL=webpack:///./~/style-loader/addStyles.js?')},311:function(module,exports,__webpack_require__){eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(87);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(120)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(true) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(87, function() {\n\t\t\tvar newContent = __webpack_require__(87);\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./styles/main.css\n// module id = 311\n// module chunks = 1\n//# sourceURL=webpack:///./styles/main.css?")}});