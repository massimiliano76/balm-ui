(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2lg6":function(e,t,n){"use strict";var i=n("Kwsy"),a=n.n(i),o={data:function(){return{menu:[]}},created:function(){var e=this;a()((function(){e.menu=[{items:[{icon:"inbox",name:"Inbox"},{icon:"star",name:"Star"},{icon:"send",name:"Sent Mail"},{icon:"drafts",name:"Drafts"}]},"-",{subheader:"Labels",items:[{icon:"email",name:"All Mail"},{icon:"delete",name:"Trash"},{icon:"report",name:"Spam"}]},"-",{items:[{icon:"settings",name:"Settings"},{icon:"announcement",name:"Help & feedback"}]}]}),100)}},s=n("KHd+"),r=Object(s.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ui-drawer-content",[n("ui-list",[e._t("default"),e._v(" "),e._l(e.menu,(function(t,i){return["-"===t?n("ui-list-divider",{key:"divider-"+i}):[t.subheader?n("ui-list-group-subheader",{key:"subheader-"+i},[e._v("\n          "+e._s(t.subheader)+"\n        ")]):e._e(),e._v(" "),e._l(t.items,(function(t,a){return n("ui-item",{key:"item-"+i+"-"+a},[n("ui-item-first-content",[n("ui-icon",[e._v(e._s(t.icon))])],1),e._v(" "),n("ui-item-text-content",[e._v(e._s(t.name))])],1)}))]]}))],2)],1)}),[],!1,null,null,null);t.a=r.exports},Jf2G:function(e,t,n){"use strict";n.r(t);var i=n("2lg6"),a=n("w4FC"),o=n("HRpM"),s={metaInfo:{titleTemplate:"%s - Dismissible Drawer"},components:{UiDrawerCommonContent:i.a},mixins:[a.a,o.a],created:function(){this.showCode("drawer",4)}},r=n("KHd+"),c=Object(r.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo--drawer demo--dismissible-drawer"},[n("ui-drawer",{attrs:{type:"dismissible",menuSelector:"#demo-menu"}},[n("ui-drawer-header",[n("ui-drawer-title",[e._v(e._s(e.title))]),e._v(" "),n("ui-drawer-subtitle",[e._v(e._s(e.subtitle))])],1),e._v(" "),n("ui-drawer-common-content",[n("ui-item",{attrs:{activated:""},on:{click:function(t){return e.$router.back()}}},[n("ui-item-first-content",[n("ui-icon",[e._v("arrow_back")])],1),e._v(" "),n("ui-item-text-content",[e._v("Back")])],1),e._v(" "),n("ui-list-divider")],1)],1),e._v(" "),n("ui-drawer-app-content",{staticClass:"demo-main"},[n("ui-top-app-bar",{directives:[{name:"shadow",rawName:"v-shadow",value:4,expression:"4"}],staticClass:"demo-top-app-bar",attrs:{contentSelector:".demo-content",navId:"demo-menu"}},[e._v("Dismissible Drawer")]),e._v(" "),n("div",{class:[e.$tt("body1"),"demo-content"]},[n("div",{class:e.$tt("body2")},[n("h1",{class:e.$tt("headline4")},[e._v("Dismissible Drawer")]),e._v(" "),n("p",[e._v("Click the menu icon above to open and close the drawer.")]),e._v(" "),n("ui-snippet",{attrs:{code:e.code[3]}})],1)])],1)],1)}),[],!1,null,null,null);t.default=c.exports},w4FC:function(e,t,n){"use strict";t.a={data:function(){return{title:"Mail",subtitle:"ui@balmjs.com",open:!1}},methods:{openMenu:function(){this.open=!0},onOpen:function(e){console.log("open",e)},onClose:function(e){this.open=!1,console.log("close",e)}}}}}]);