(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{w4FC:function(e,t,a){"use strict";t.a={data:function(){return{title:"Mail",subtitle:"ui@balmjs.com",open:!1}},methods:{openMenu:function(){this.open=!0},onOpen:function(e){console.log("open",e)},onClose:function(e){this.open=!1,console.log("close",e)}}}},"zR/0":function(e,t,a){"use strict";a.r(t);var i=a("HRpM"),o=a("w4FC"),n=[{label:"Standard",value:0},{label:"Fixed",value:1},{label:"Dense",value:2},{label:"Prominent",value:3},{label:"Prominent and Dense",value:4},{label:"Short",value:5},{label:"Short, Always Collapsed",value:6}],s={metaInfo:{titleTemplate:"%s - Top App Bar"},mixins:[i.a,o.a],data:function(){return{TypeOptions:n,typeOption:0,title:"Hello BalmUI",openDrawer:!1,showMoreActions:!1}},computed:{isShort:function(){return 5===this.typeOption||6===this.typeOption}},created:function(){this.initDocs("top-app-bar",{code:1,apis:["top-app-bar"],css:!0})}},r=a("KHd+"),l=Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"demo--top-app-bar"},[a("ui-top-app-bar",{attrs:{contentSelector:"#content-main",navId:"demo-menu",type:e.typeOption,title:e.title},scopedSlots:e._u([{key:"toolbar",fn:function(t){var i=t.itemClass;return[e.isShort?e._e():[a("ui-icon-a",{class:i,attrs:{icon:"file_download"}}),e._v(" "),a("ui-icon-a",{class:i,attrs:{icon:"print"}}),e._v(" "),a("ui-icon-a",{class:i,attrs:{icon:"bookmark"}})],e._v(" "),e.isShort?a("ui-menu-anchor",[a("ui-icon-button",{class:i,attrs:{icon:"more_vert"},on:{click:function(t){return e.$balmUI.onOpen("showMoreActions")}}}),e._v(" "),a("ui-menu",{attrs:{items:["Back","Forward","Reload","-","Settings"]},model:{value:e.showMoreActions,callback:function(t){e.showMoreActions=t},expression:"showMoreActions"}})],1):e._e()]}}])}),e._v(" "),a("ui-drawer",{attrs:{type:"modal",menuSelector:"#demo-menu"},model:{value:e.openDrawer,callback:function(t){e.openDrawer=t},expression:"openDrawer"}},[a("ui-drawer-header",{attrs:{innerClass:[e.$themeColor("on-primary"),e.$themeColor("primary-bg")]}},[a("ui-drawer-title",[e._v("Header here")])],1),e._v(" "),a("ui-drawer-content",[a("ui-list",[a("ui-item",{attrs:{activated:""},on:{click:function(t){return e.$router.back()}}},[a("ui-item-first-content",[a("ui-icon",[e._v("arrow_back")])],1),e._v(" "),a("ui-item-text-content",[e._v("Back")])],1),e._v(" "),a("ui-item-divider")],1)],1)],1),e._v(" "),a("ui-drawer-backdrop"),e._v(" "),a("main",{staticClass:"demo-main"},[a("div",{class:e.$tt("body1"),attrs:{id:"content-main"}},[a("header",{staticClass:"hero component"},[a("h3",{class:e.$tt("headline3")},[e._v("Top App Bar")])]),e._v(" "),a("ui-toc-affix"),e._v(" "),a("div",{class:e.$tt("body2")},[a("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-usage",expression:"'ui-usage'",arg:"id"}],class:e.$tt("headline4")},[e._v("0. Usage")]),e._v(" "),a("ui-markdown",{attrs:{text:e.code[0]}}),e._v(" "),a("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-demo",expression:"'ui-demo'",arg:"id"}],class:e.$tt("headline4")},[e._v("1. Demo")]),e._v(" "),a("div",{staticClass:"demo-controls"},[a("ui-select",{attrs:{options:e.TypeOptions},model:{value:e.typeOption,callback:function(t){e.typeOption=t},expression:"typeOption"}},[e._v("Type")]),e._v(" "),a("ui-textfield",{model:{value:e.title,callback:function(t){e.title=t},expression:"title"}},[e._v("Title")])],1),e._v(" "),e._l(12,(function(t){return a("p",{key:t,staticClass:"demo-paragraph"},[e._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n          aliquip ex ea commodo consequat. Duis aute irure dolor in\n          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n          culpa qui officia deserunt mollit anim id est laborum.\n        ")])})),e._v(" "),a("ui-snippet",{attrs:{code:e.code[1]}}),e._v(" "),a("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-apis",expression:"'ui-apis'",arg:"id"}],class:e.$tt("headline4")},[e._v("2. APIs")]),e._v(" "),a("ui-markdown",{attrs:{text:e.docs["top-app-bar"]}}),e._v(" "),a("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-sass",expression:"'ui-sass'",arg:"id"}],class:e.$tt("headline4")},[e._v("\n          3. Sass Variables\n        ")]),e._v(" "),a("ui-markdown",{attrs:{text:e.docs.css}})],2)],1)])],1)}),[],!1,null,null,null);t.default=l.exports}}]);