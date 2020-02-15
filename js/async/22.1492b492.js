(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"j++W":function(e,a,t){"use strict";t.r(a);var s=t("a0dU"),o=t.n(s),l=t("SPx3"),r=t.n(l),c=t("HRpM"),i=[{label:"BalmJS",value:1,url:"https://balmjs.com/"},{label:"BalmCLI",value:0,url:"https://github.com/balmjs/balm-cli"},{label:"BalmUI Lite",value:2,url:"https://mdl.balmjs.com/"},{label:"BalmUI",value:3,url:"https://material.balmjs.com/"},{label:"BalmScroll",value:4,url:"https://iscroll.balmjs.com/"}],n=["ActionScript","AppleScript","Asp","BASIC","C","C++","Clojure","COBOL","ColdFusion","Erlang","Fortran","Groovy","Haskell","Java","JavaScript","Lisp","Perl","PHP","Python","Ruby","Scala","Scheme"],u={metaInfo:{titleTemplate:"%s - Autocomplete"},mixins:[c.a],data:function(){return{keywords:"",website:"",source:i,keywords1:"",source1:n,url:"".concat(this.$domain,"/data/autocomplete.json"),keywords2:"",source2:[]}},created:function(){this.initDocs("autocomplete",{code:2,apis:["autocomplete"],css:!0})},methods:{onSearch:function(e){var a=this;return r()(o.a.mark((function t(){var s,l;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.$http.get(a.url,{params:{text:e}});case 2:s=t.sent,l=s.data,a.source2=l[e]?l[e]:[];case 5:case"end":return t.stop()}}),t)})))()},onSelected:function(e){console.log(e),this.website=e.url||""}}},d=t("KHd+"),m=Object(d.a)(u,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{class:[e.$tt("body1"),"demo--autocomplete"]},[t("section",{staticClass:"hero component"},[t("ui-autocomplete",{attrs:{noLabel:"",placeholder:"Input 'balm'",source:e.source},on:{selected:e.onSelected},model:{value:e.keywords,callback:function(a){e.keywords=a},expression:"keywords"}}),e._v(" "),e.website?t("p",[t("a",{attrs:{href:e.website}},[e._v(e._s(e.website))])]):e._e()],1),e._v(" "),t("ui-toc-affix"),e._v(" "),t("div",{class:e.$tt("body2")},[t("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-usage",expression:"'ui-usage'",arg:"id"}],class:e.$tt("headline4")},[e._v("0. Usage")]),e._v(" "),t("ui-markdown",{attrs:{text:e.code[0]}}),e._v(" "),t("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-demo",expression:"'ui-demo'",arg:"id"}],class:e.$tt("headline4")},[e._v("1. Demo")]),e._v(" "),t("div",{staticClass:"example"},[t("h6",{class:e.$tt("headline6")},[e._v("1.1 Static data")]),e._v(" "),t("ui-autocomplete",{attrs:{noLabel:"",source:e.source1,placeholder:"Try to type"},model:{value:e.keywords1,callback:function(a){e.keywords1=a},expression:"keywords1"}})],1),e._v(" "),t("ui-snippet",{attrs:{code:e.code[1]}}),e._v(" "),t("div",{staticClass:"example"},[t("h6",{class:e.$tt("headline6")},[e._v("1.2 Dynamic data")]),e._v(" "),t("ui-autocomplete",{attrs:{noLabel:"",source:e.source2,placeholder:"Type 'a', then 'b'",delay:"500",remote:"",autofocus:""},on:{search:e.onSearch},model:{value:e.keywords2,callback:function(a){e.keywords2=a},expression:"keywords2"}})],1),e._v(" "),t("ui-snippet",{attrs:{code:e.code[2]}}),e._v(" "),t("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-apis",expression:"'ui-apis'",arg:"id"}],class:e.$tt("headline4")},[e._v("2. APIs")]),e._v(" "),t("ui-markdown",{attrs:{text:e.docs.autocomplete}}),e._v(" "),t("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-sass",expression:"'ui-sass'",arg:"id"}],class:e.$tt("headline4")},[e._v("\n      3. Sass Variables\n    ")]),e._v(" "),t("ui-markdown",{attrs:{text:e.docs.css}})],1)],1)}),[],!1,null,null,null);a.default=m.exports}}]);