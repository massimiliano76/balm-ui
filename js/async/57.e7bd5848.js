(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{re4y:function(n,o,t){"use strict";t.r(o);var e={data:function(){return{active:!1,formData:{options:[],gender:"",answer:"",icons:[],open:"",text1:"Hello",text2:"World",text3:"Content"},show:!1,showConfirm:!1,showAlert:!1,tabActive:0,tabs:[{text:"Favorites",icon:"favorite",indicator:"crop_square"},{text:"Recents",icon:"phone",indicator:"panorama_fish_eye"},{text:"Nearby",icon:"near_me",indicator:"change_history"},{text:"Favorites",icon:"favorite",indicator:"crop_square"},{text:"Recents",icon:"phone",indicator:"panorama_fish_eye"},{text:"Nearby",icon:"near_me",indicator:"change_history"}]}},methods:{showDialog:function(n){this[n]=!0},closeDialog:function(n,o){this[n]=!1,"function"===typeof o&&o()},clickButton:function(){console.log("Hello, \u4f60\u70b9\u51fb\u4e86\u6309\u94ae\uff01")},onCancel:function(){console.log("\u4f60\u70b9\u51fb\u4e86\u53d6\u6d88\u6309\u94ae\uff01")},onConfirm:function(){console.log("\u4f60\u70b9\u51fb\u4e86\u786e\u5b9a\u6309\u94ae\uff01")},showSnackbar:function(){this.active=!0},resetSnackbar:function(){this.active=!1},onOptionsChange:function(n){this.formData.options=n},onGenderChange:function(n){this.formData.gender=n},onAnswerChange:function(n){this.formData.answer=n},onIconsChange:function(n){this.formData.icons=n},onSwitchChange:function(n){this.formData.open=n},submit:function(){console.info("submit"),console.log(this.formData)}}},a=t("KHd+"),i=Object(a.a)(e,(function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("div",{class:[n.$tt("body1"),"demo--test"]},[t("div",{staticClass:"main-content"},[t("ui-chip",[n._v("Chip")]),n._v(" "),t("hr"),n._v(" "),t("ui-button",{attrs:{primary:"",effect:"",raised:""},on:{click:function(o){return n.showDialog("show")}}},[n._v("\u6709\u8272\u906e\u7f69\u65e0\u52a8\u753b\u5bf9\u8bdd\u6846")]),n._v(" "),t("ui-button",{attrs:{primary:"",effect:"",raised:""},on:{click:function(o){return n.showDialog("showConfirm")}}},[n._v("confirm\u5bf9\u8bdd\u6846")]),n._v(" "),t("ui-button",{attrs:{primary:"",effect:"",raised:""},on:{click:function(o){return n.showDialog("showAlert")}}},[n._v("alert\u5bf9\u8bdd\u6846")]),n._v(" "),t("div",{staticClass:"dialog-group"},[t("ui-dialog",{attrs:{show:n.show},on:{"on-close":function(o){return n.closeDialog("show")}}},[t("h4",[n._v("\u6211\u662f\u6709\u8272\u906e\u7f69\u7684\u5bf9\u8bdd\u6846")]),n._v(" "),t("br"),n._v("\uff1a\u4f7f\u7528@on-close\u4e8b\u4ef6\u6765\u5173\u95ed\u5bf9\u8bdd\u6846\n      ")])],1),n._v(" "),t("hr"),n._v(" "),t("ui-button",{on:{click:n.showSnackbar}},[n._v("show snackbar")]),n._v(" "),t("ui-snackbar",{attrs:{message:"hello snackbar",active:n.active},on:{done:n.resetSnackbar}}),n._v(" "),t("hr"),n._v(" "),t("ui-checkbox",{attrs:{value:"A",model:n.formData.options},on:{change:n.onOptionsChange}},[n._v("Option A")]),n._v(" "),t("ui-checkbox",{attrs:{value:"B",model:n.formData.options},on:{change:n.onOptionsChange}},[n._v("Option B")]),n._v(" "),t("ui-checkbox",{attrs:{value:"C",model:n.formData.options},on:{change:n.onOptionsChange}},[n._v("Option C")]),n._v(" "),t("br"),n._v(" "),t("ui-radio",{attrs:{value:"F",model:n.formData.gender},on:{change:n.onGenderChange}},[n._v("Female")]),n._v(" "),t("ui-radio",{attrs:{value:"M",model:n.formData.gender},on:{change:n.onGenderChange}},[n._v("Male")]),n._v(" "),t("br"),n._v(" "),t("ui-radio",{attrs:{value:"Y",model:n.formData.answer},on:{change:n.onAnswerChange}},[n._v("Yes")]),n._v(" "),t("ui-radio",{attrs:{value:"N",model:n.formData.answer},on:{change:n.onAnswerChange}},[n._v("No")]),n._v(" "),t("br"),n._v(" "),t("ui-switch",{attrs:{model:n.formData.open},on:{change:n.onSwitchChange}},[n._v("On/Off")]),n._v(" "),t("hr"),n._v(" "),t("ui-button",{attrs:{effect:""},on:{click:n.submit}},[n._v("Submit")]),n._v(" "),n._l(100,(function(o){return t("p",{key:o},[n._v(n._s(o))])}))],2),n._v(" "),t("ui-bottom-navigation",{attrs:{stacked:"",contentSelector:".main-content"}},[t("ui-tab-bar",{scopedSlots:n._u([{key:"indicator",fn:function(){},proxy:!0}]),model:{value:n.tabActive,callback:function(o){n.tabActive=o},expression:"tabActive"}},n._l(n.tabs,(function(o,e){return t("ui-tab",{key:e,attrs:{type:2,icon:o.icon,stacked:""}},[n._v("\n        "+n._s(o.text)+"\n      ")])})),1)],1)],1)}),[],!1,null,null,null);o.default=i.exports}}]);