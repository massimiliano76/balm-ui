!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUI=t():e.BalmUI=t()}(window,function(){return function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}return r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="Tl1j")}({Tl1j:function(e,t,n){"use strict";n.r(t);var o=n("kUbF"),r=["primary","secondary","background","surface","on-primary","on-secondary","on-surface","primary-bg","secondary-bg"],c=["primary","secondary","hint","disabled","icon"],u=["background","light","dark"],i={THEME_STYLE:"Please choose a theme style: "+JSON.stringify(r),TEXT_STYLE:"Please choose a text style: "+JSON.stringify(c),THEME_TONE:"Please choose a theme tone: "+JSON.stringify(u)},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="";return r.includes(e)?t="mdc-theme--".concat(e):console.warn(i.THEME_STYLE),t},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"background",n="";return c.includes(e)?u.includes(t)?n="mdc-theme--text-".concat(e,"-on-").concat(t):console.warn(i.THEME_TONE):console.warn(i.TEXT_STYLE),n},s=function(e,t){r.includes(e)?document.documentElement.style.setProperty("--mdc-theme-".concat(e),t):console.warn(i.THEME_STYLE)},d=function(e,t,n){c.includes(e)?u.includes(t)?document.documentElement.style.setProperty("--mdc-theme-text-".concat(e,"-on-").concat(t),n):console.warn(i.THEME_TONE):console.warn(i.TEXT_STYLE)},f={install:function(e){e.prototype.$themeColor=a,e.prototype.$textColor=l,e.prototype.$setTheme=s,e.prototype.$setTextTheme=d}};Object(o.a)(f),t.default=f},kUbF:function(e,t,n){"use strict";(function(n){t.a=function(e){var t=null;"undefined"!==typeof window?t=window.Vue:"undefined"!==typeof n&&(t=n.Vue),t&&t.use(e)}}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"===typeof window&&(n=window)}e.exports=n}})});