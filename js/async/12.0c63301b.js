(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Xm90:function(e,t,a){"use strict";a.r(t);var n=a("w4FC"),r=a("HRpM"),i={metaInfo:{titleTemplate:"%s - Drawer"},mixins:[n.a,r.a],data:function(){return{menu:[{icon:"inbox",name:"Inbox"},{icon:"star",name:"Star"},{icon:"send",name:"Sent Mail"},{icon:"drafts",name:"Drafts"}]}},created:function(){this.initDocs("drawer",{code:4,apis:["drawer","drawer-header","drawer-content","drawer-backdrop","drawer-app-content"],css:!0})}},o=a("KHd+"),s=Object(o.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:[e.$tt("body1"),"demo--drawer"]},[a("header",{staticClass:"hero component"},[a("div",{staticClass:"hero-demo"},[a("ui-drawer",[a("ui-drawer-header",[a("ui-drawer-title",[e._v("Title")]),e._v(" "),a("ui-drawer-subtitle",[e._v("Subtitle")])],1),e._v(" "),a("ui-drawer-content",[a("ui-list",[e._l(e.menu,(function(t,n){return a("ui-item",{key:n,attrs:{activated:0===n}},[a("ui-item-first-content",[a("ui-icon",[e._v(e._s(t.icon))])],1),e._v(" "),a("ui-item-text-content",[e._v(e._s(t.name))])],1)}))],2)],1)],1)],1)]),e._v(" "),a("ui-toc-affix"),e._v(" "),a("div",{class:e.$tt("body2")},[a("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-usage",expression:"'ui-usage'",arg:"id"}],class:e.$tt("headline4")},[e._v("0. Usage")]),e._v(" "),a("ui-markdown",{attrs:{text:e.code[0]}}),e._v(" "),a("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-demo",expression:"'ui-demo'",arg:"id"}],class:e.$tt("headline4")},[e._v("1. Demo")]),e._v(" "),a("ui-list",{attrs:{nonInteractive:""}},[a("ui-item",[a("ui-item-text-content",[a("span",[e._v("1.1")]),e._v(" "),a("router-link",{attrs:{to:{name:"navigation.permanent-drawer-above-toolbar"}}},[e._v("Permanent Drawer Above Toolbar")])],1)],1),e._v(" "),a("ui-item",[a("ui-item-text-content",[a("span",[e._v("1.2")]),e._v(" "),a("router-link",{attrs:{to:{name:"navigation.permanent-drawer-below-toolbar"}}},[e._v("Permanent Drawer Below Toolbar")])],1)],1),e._v(" "),a("ui-item",[a("ui-item-text-content",[a("span",[e._v("1.3")]),e._v(" "),a("router-link",{attrs:{to:{name:"navigation.dismissible-drawer"}}},[e._v("Dismissible Drawer")])],1)],1),e._v(" "),a("ui-item",[a("ui-item-text-content",[a("span",[e._v("1.4")]),e._v(" "),a("router-link",{attrs:{to:{name:"navigation.modal-drawer"}}},[e._v("Modal Drawer")])],1)],1)],1),e._v(" "),a("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-apis",expression:"'ui-apis'",arg:"id"}],class:e.$tt("headline4")},[e._v("2. APIs")]),e._v(" "),a("ui-markdown",{attrs:{text:e.docs.drawer}}),e._v(" "),a("ui-markdown",{attrs:{text:e.docs["drawer-header"]}}),e._v(" "),a("ui-markdown",{attrs:{text:e.docs["drawer-content"]}}),e._v(" "),a("ui-markdown",{attrs:{text:e.docs["drawer-backdrop"]}}),e._v(" "),a("ui-markdown",{attrs:{text:e.docs["drawer-app-content"]}}),e._v(" "),a("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-sass",expression:"'ui-sass'",arg:"id"}],class:e.$tt("headline4")},[e._v("\n      3. Sass Variables\n    ")]),e._v(" "),a("ui-markdown",{attrs:{text:e.docs.css}})],1)],1)}),[],!1,null,null,null);t.default=s.exports},w4FC:function(e,t,a){"use strict";t.a={data:function(){return{title:"Mail",subtitle:"ui@balmjs.com",open:!1}},methods:{openMenu:function(){this.open=!0},onOpen:function(e){console.log("open",e)},onClose:function(e){this.open=!1,console.log("close",e)}}}}}]);