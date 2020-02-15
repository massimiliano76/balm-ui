(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{KYaq:function(e,i,t){"use strict";t.r(i);var s=t("M5Mt"),a=t.n(s),n=t("TEMH"),c=t.n(n),o=t("RKTd"),l=t.n(o),d=t("Kwsy"),r=t.n(d),u={metaInfo:{titleTemplate:"%s - Chips"},mixins:[t("HRpM").a],data:function(){return{lastId:2,name:"",list:[],selectedIndex:2,selectedValue:[1,2],selectedValue2:[0],choiceList:[],filterList:[],filterList2:[],actionList:[{icon:"wb_sunny",name:"Turn on lights"},{icon:"bookmark",name:"Bookmark"},{icon:"alarm",name:"Set alarm"},{icon:"directions",name:"Get directions"}]}},created:function(){this.initDocs("chips",{code:4,apis:["chips","chip"],css:!0})},mounted:function(){var e=this;r()((function(){e.list=[{id:1,name:"Jane Smith"},{id:2,name:"John Doe"}],e.choiceList=["Extra Small","Small","Medium","Large","Extra Large"],e.filterList=["Tops","Bottoms","Shoes","Accessories"],e.filterList2=["Alice","Bob","Charlie","David"]}),1e3)},methods:{addOne:function(){var e;l()(e=this.name).call(e).length&&(this.lastId++,this.list.push({id:this.lastId,name:this.name}),this.name="")},removeLastOne:function(){this.list.pop()},removeOneById:function(e){var i,t,s=c()(i=this.list).call(i,(function(i){return i.id===e}));a()(t=this.list).call(t,s,1)},onChoice:function(e){console.log(e)}}},h=t("KHd+"),p=Object(h.a)(u,(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{class:[e.$tt("body1"),"demo--chips"]},[t("header",{staticClass:"hero component"},[t("ui-chips",[t("ui-chip",{directives:[{name:"a11y",rawName:"v-a11y"}]},[e._v("Chip One")]),e._v(" "),t("ui-chip",{directives:[{name:"a11y",rawName:"v-a11y"}]},[e._v("Chip Two")]),e._v(" "),t("ui-chip",{directives:[{name:"a11y",rawName:"v-a11y"}]},[e._v("Chip Three")])],1)],1),e._v(" "),t("ui-toc-affix"),e._v(" "),t("div",{class:e.$tt("body2")},[t("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-usage",expression:"'ui-usage'",arg:"id"}],class:e.$tt("headline4")},[e._v("0. Usage")]),e._v(" "),t("ui-markdown",{attrs:{text:e.code[0]}}),e._v(" "),t("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-demo",expression:"'ui-demo'",arg:"id"}],class:e.$tt("headline4")},[e._v("1. Demo")]),e._v(" "),t("section",{staticClass:"example"},[t("h2",[e._v("1.1 Input Chips")]),e._v(" "),t("ui-textfield",{staticClass:"demo-tf-add-space",attrs:{outlined:"",id:"input-chip-set-input",placeholder:"Chip text"},model:{value:e.name,callback:function(i){e.name=i},expression:"name"}}),e._v(" "),t("br"),e._v(" "),t("ui-button",{attrs:{raised:"",dense:"",id:"input-chip-set-button"},on:{click:e.addOne}},[e._v("Add Input Chip")]),e._v(" "),t("ui-button",{attrs:{outlined:"",dense:"",id:"input-chip-set-delete-button"},on:{click:e.removeLastOne}},[e._v("Delete Last Chip")]),e._v(" "),t("ui-chips",{attrs:{type:"input",id:"input-chip-set",options:e.list}},e._l(e.list,(function(i){return t("ui-chip",{key:i.id,attrs:{icon:"face"},on:{remove:function(t){return e.removeOneById(i.id)}}},[e._v(e._s(i.name))])})),1),e._v(" "),t("ui-snippet",{attrs:{code:e.code[1]}})],1),e._v(" "),t("section",{staticClass:"example"},[t("h2",[e._v("1.2 Choice Chips (selectedIndex: "+e._s(e.selectedIndex)+")")]),e._v(" "),t("ui-chips",{attrs:{type:"choice"},model:{value:e.selectedIndex,callback:function(i){e.selectedIndex=i},expression:"selectedIndex"}},e._l(e.choiceList,(function(i,s){return e.choiceList.length?t("ui-chip",{key:s},[e._v(e._s(i))]):e._e()})),1),e._v(" "),t("ui-snippet",{attrs:{code:e.code[2]}})],1),e._v(" "),t("section",{staticClass:"example"},[t("h2",[e._v("1.3 Filter Chips")]),e._v(" "),t("h4",[e._v("No leading icon (selectedIndexes: "+e._s(e.selectedValue)+")")]),e._v(" "),t("ui-chips",{attrs:{type:"filter"},model:{value:e.selectedValue,callback:function(i){e.selectedValue=i},expression:"selectedValue"}},e._l(e.filterList,(function(i,s){return t("ui-chip",{key:s},[e._v(e._s(i))])})),1),e._v(" "),t("h4",[e._v("With leading icon (selectedIndexes: "+e._s(e.selectedValue2)+")")]),e._v(" "),t("ui-chips",{attrs:{type:"filter"},model:{value:e.selectedValue2,callback:function(i){e.selectedValue2=i},expression:"selectedValue2"}},e._l(e.filterList2,(function(i,s){return t("ui-chip",{key:s,attrs:{icon:"face",hidden:e.selectedValue2.includes(s)}},[e._v(e._s(i))])})),1),e._v(" "),t("ui-snippet",{attrs:{code:e.code[3]}})],1),e._v(" "),t("section",{staticClass:"example"},[t("h2",[e._v("1.4 Action Chips")]),e._v(" "),t("ui-chips",e._l(e.actionList,(function(i,s){return t("ui-chip",{key:s,attrs:{icon:i.icon}},[e._v(e._s(i.name))])})),1),e._v(" "),t("ui-snippet",{attrs:{code:e.code[4]}})],1),e._v(" "),t("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-apis",expression:"'ui-apis'",arg:"id"}],class:e.$tt("headline4")},[e._v("2. APIs")]),e._v(" "),t("ui-markdown",{attrs:{text:e.docs.chips}}),e._v(" "),t("ui-markdown",{attrs:{text:e.docs.chip}}),e._v(" "),t("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-sass",expression:"'ui-sass'",arg:"id"}],class:e.$tt("headline4")},[e._v("\n      3. Sass Variables\n    ")]),e._v(" "),t("ui-markdown",{attrs:{text:e.docs.css}})],1)],1)}),[],!1,null,null,null);i.default=p.exports}}]);