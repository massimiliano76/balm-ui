(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{fX39:function(e,t,i){"use strict";i.r(t);var n=i("Kwsy"),s=i.n(n),a={name:"svg-avatar"},o=i("KHd+"),l=Object(o.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40"}},[t("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[t("path",{attrs:{d:"M20 0C8.96 0 0 8.96 0 20s8.96 20 20 20 20-8.96 20-20S31.04 0 20 0z",fill:"#9e9e9e","fill-rule":"nonzero"}}),this._v(" "),t("path",{attrs:{d:"M20 17.727c2.767 0 5-2.233 5-5s-2.233-5-5-5-5 2.233-5 5 2.233 5 5 5zm0 2.954c-6.11 0-10.908 2.954-10.908 5.681A13.018 13.018 0 0 0 20 32.271c4.552 0 8.598-2.354 10.908-5.909 0-2.727-4.798-5.68-10.908-5.68z",fill:"#ececec","fill-rule":"nonzero"}}),this._v(" "),t("path",{attrs:{d:"M0 0h40v40H0z"}})])])}),[],!1,null,null,null).exports,c=i("HRpM"),r=[{label:"Single-line list",value:1},{label:"Two-line list",value:2}],u=[{label:"None",value:0},{label:"Icon",value:1},{label:"Avatar",value:2}],v=[{label:"None",value:0},{label:"Icon",value:1},{label:"Text",value:2}],d={metaInfo:{titleTemplate:"%s - List"},components:{SvgAvatar:l},mixins:[c.a],data:function(){return{TypeOptions:r,BeforeTextOptions:u,AfterTextOptions:v,typeOption:1,beforeText:0,afterText:0,selectedIndex:0,checkedValues:[],checkedValue:"dog",items:[],items1:[],items2:[],items3:[]}},created:function(){var e=this;this.initDocs("list",{code:8,apis:["list","list-item","list-divider","list-group"],css:!0}),s()((function(){e.selectedIndex=1,e.items=[1,2,3],e.items1=[{icon:"wifi",text:"Wi-Fi"},{icon:"bluetooth",text:"Bluetooth"},{icon:"data_usage",text:"Data Usage"}],e.items2=[{icon:"inbox",text:"Inbox"},{icon:"star",text:"Star"},{icon:"send",text:"Send"},{icon:"drafts",text:"Drafts"}],e.items3=[{icon:"folder",text:"Dog Photos",subtext:"9 Jan 2018",value:"dog"},{icon:"folder",text:"Cat Photos",subtext:"22 Dec 2017",value:"cat"},"-",{icon:"folder",text:"Potatoes",subtext:"30 Noc 2017",value:"potato"},{icon:"folder",text:"Carrots",subtext:"17 Oct 2017",value:"carrot"}]}),1e3)}},_=Object(o.a)(d,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:[e.$tt("body1"),"demo--list"]},[i("header",{staticClass:"hero component"},[i("div",{staticClass:"hero-demo"},[i("ui-list",{attrs:{type:e.typeOption,avatar:2===e.beforeText}},e._l(3,(function(t){return i("ui-item",{key:t},[e.beforeText?i("ui-item-first-content",[1===e.beforeText?i("ui-icon",[e._v("favorite")]):e._e(),e._v(" "),2===e.beforeText?i("svg-avatar"):e._e()],1):e._e(),e._v(" "),2===e.typeOption?i("ui-item-text-content",[i("ui-item-text1",[e._v("Two-line item")]),e._v(" "),i("ui-item-text2",[e._v("Secondary text")])],1):i("ui-item-text-content",[e._v("Single-line item")]),e._v(" "),e.afterText?i("ui-item-last-content",[1===e.afterText?i("ui-icon-button",{attrs:{icon:"more_vert"}}):e._e(),e._v(" "),2===e.afterText?i("span",[e._v("Meta")]):e._e()],1):e._e()],1)})),1)],1),e._v(" "),i("div",{staticClass:"hero-options"},[i("ui-select",{staticClass:"hero-option",attrs:{options:e.TypeOptions},model:{value:e.typeOption,callback:function(t){e.typeOption=t},expression:"typeOption"}},[e._v("Type")]),e._v(" "),i("div",{staticClass:"hero-option hero-options"},[i("ui-select",{attrs:{options:e.BeforeTextOptions},model:{value:e.beforeText,callback:function(t){e.beforeText=t},expression:"beforeText"}},[e._v("Before list text")]),e._v(" "),i("ui-select",{attrs:{options:e.AfterTextOptions},model:{value:e.afterText,callback:function(t){e.afterText=t},expression:"afterText"}},[e._v("After list text")])],1)],1)]),e._v(" "),i("ui-toc-affix"),e._v(" "),i("div",{class:e.$tt("body2")},[i("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-usage",expression:"'ui-usage'",arg:"id"}],class:e.$tt("headline4")},[e._v("0. Usage")]),e._v(" "),i("ui-markdown",{attrs:{text:e.code[0]}}),e._v(" "),i("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-demo",expression:"'ui-demo'",arg:"id"}],class:e.$tt("headline4")},[e._v("1. Demo")]),e._v(" "),i("div",{attrs:{id:"demo-wrapper"}},[i("h4",{class:e.$tt("headline6")},[e._v("1.1 Single-Line")]),e._v(" "),i("ui-list",e._l(e.items,(function(t){return i("ui-item",{key:t},[i("ui-item-text-content",[e._v("Line item")])],1)})),1),e._v(" "),i("ui-snippet",{attrs:{code:e.code[1]}}),e._v(" "),i("h4",{class:e.$tt("headline6")},[e._v("1.2 Two-Line")]),e._v(" "),i("ui-list",{attrs:{type:2}},e._l(e.items,(function(t){return i("ui-item",{key:t},[i("ui-item-text-content",[i("ui-item-text1",[e._v("Line item")]),e._v(" "),i("ui-item-text2",[e._v("Secondary text")])],1)],1)})),1),e._v(" "),i("ui-snippet",{attrs:{code:e.code[2]}}),e._v(" "),i("h4",{class:e.$tt("headline6")},[e._v("1.3 Leading Icon")]),e._v(" "),i("ui-list",e._l(e.items1,(function(t,n){return i("ui-item",{key:n},[i("ui-item-first-content",[i("ui-icon",[e._v(e._s(t.icon))])],1),e._v(" "),i("ui-item-text-content",[e._v(e._s(t.text))])],1)})),1),e._v(" "),i("ui-snippet",{attrs:{code:e.code[3]}}),e._v(" "),i("h4",{class:e.$tt("headline6")},[e._v("\n        1.4 List with activated item (Selected Index: "+e._s(e.selectedIndex)+")\n      ")]),e._v(" "),i("ui-list",{attrs:{singleSelection:""},model:{value:e.selectedIndex,callback:function(t){e.selectedIndex=t},expression:"selectedIndex"}},e._l(e.items2,(function(t,n){return i("ui-item",{key:n},[i("ui-item-first-content",[i("ui-icon",[e._v(e._s(t.icon))])],1),e._v(" "),i("ui-item-text-content",[e._v(e._s(t.text))])],1)})),1),e._v(" "),i("ui-snippet",{attrs:{code:e.code[4]}}),e._v(" "),i("h4",{class:e.$tt("headline6")},[e._v("1.5 Trailing Icon")]),e._v(" "),i("ui-list",e._l(e.items,(function(t){return i("ui-item",{key:t},[i("ui-item-text-content",[e._v("Line item")]),e._v(" "),i("ui-item-last-content",[i("ui-icon",[e._v("info")])],1)],1)})),1),e._v(" "),i("ui-snippet",{attrs:{code:e.code[5]}}),e._v(" "),i("h4",{class:e.$tt("headline6")},[e._v("\n        1.6 Two-Line with Leading and Trailing Icon and Divider\n      ")]),e._v(" "),i("ui-list",{attrs:{type:2,avatar:""}},[e._l(e.items3,(function(t,n){return["-"===t?i("ui-item-divider",{key:n}):i("ui-item",{key:n,scopedSlots:e._u([{key:"before",fn:function(t){var n=t.iconClass;return[i("ui-icon",{class:n},[e._v("folder")])]}}],null,!0)},[e._v(" "),i("ui-item-text-content",[i("ui-item-text1",[e._v(e._s(t.text))]),e._v(" "),i("ui-item-text2",[e._v(e._s(t.subtext))])],1),e._v(" "),i("ui-item-last-content",[i("ui-icon",[e._v("info")])],1)],1)]}))],2),e._v(" "),i("ui-snippet",{attrs:{code:e.code[6]}}),e._v(" "),i("h4",{class:e.$tt("headline6")},[e._v("\n        1.7 List with Trailing Checkbox (Checked values: "+e._s(e.checkedValues)+")\n      ")]),e._v(" "),i("ui-list",[e._l(e.items3,(function(t,n){return["-"===t?i("ui-item-divider",{key:n}):i("ui-item",{key:n},[i("ui-item-text-content",[e._v(e._s(t.text))]),e._v(" "),i("ui-item-last-content",[i("ui-checkbox",{attrs:{value:t.value},model:{value:e.checkedValues,callback:function(t){e.checkedValues=t},expression:"checkedValues"}})],1)],1)]}))],2),e._v(" "),i("ui-snippet",{attrs:{code:e.code[7]}}),e._v(" "),i("h4",{class:e.$tt("headline6")},[e._v("\n        1.8 List with Trailing Radio Buttons (Checked value:\n        "+e._s(e.checkedValue)+")\n      ")]),e._v(" "),i("ui-list",[e._l(e.items3,(function(t,n){return["-"===t?i("ui-item-divider",{key:n}):i("ui-item",{key:n},[i("ui-item-text-content",[e._v(e._s(t.text))]),e._v(" "),i("ui-item-last-content",[i("ui-radio",{attrs:{value:t.value},model:{value:e.checkedValue,callback:function(t){e.checkedValue=t},expression:"checkedValue"}})],1)],1)]}))],2),e._v(" "),i("ui-snippet",{attrs:{code:e.code[8]}})],1),e._v(" "),i("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-apis",expression:"'ui-apis'",arg:"id"}],class:e.$tt("headline4")},[e._v("2. APIs")]),e._v(" "),i("ui-markdown",{attrs:{text:e.docs.list}}),e._v(" "),i("ui-markdown",{attrs:{text:e.docs["list-item"]}}),e._v(" "),i("ui-markdown",{attrs:{text:e.docs["list-divider"]}}),e._v(" "),i("ui-markdown",{attrs:{text:e.docs["list-group"]}}),e._v(" "),i("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-sass",expression:"'ui-sass'",arg:"id"}],class:e.$tt("headline4")},[e._v("\n      3. Sass Variables\n    ")]),e._v(" "),i("ui-markdown",{attrs:{text:e.docs.css}})],1)],1)}),[],!1,null,null,null);t.default=_.exports}}]);