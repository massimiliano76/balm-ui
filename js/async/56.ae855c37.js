(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"9Wzh":function(e,a,s){"use strict";s.r(a);var t=s("RKTd"),i=s.n(t),r={metaInfo:{titleTemplate:"%s - Validator"},mixins:[s("HRpM").a],validations:{mobile:{label:"Mobile",validator:"required, mobile"},password:{label:"Password",validator:"required, password, minRule, maxRule",minRule:{validate:function(e){return i()(e).call(e).length>=6},message:"%s minLength >= 6"},maxRule:{validate:function(e){return i()(e).call(e).length<=8},message:"%s maxLength <= 8"}},repassword:{label:"Repeat Password",validator:"required, password, repasswordRule",repasswordRule:{validate:function(e,a){return e===a.password},message:"repassword !== password"}}},data:function(){return{formData:{mobile:"",password:"",repassword:""},validMsg:{}}},created:function(){this.initDocs("validator",{code:1,apis:["validator"]})},methods:{submit:function(){var e=this.$validate(this.formData),a=e.valid,s=e.validMsg;this.validMsg=s,console.log(e),a&&(console.log("gg"),this.$toast("gg"))}}},o=s("KHd+"),l=Object(o.a)(r,(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{class:[e.$tt("body1"),"demo--validator"]},[s("header",{staticClass:"hero plugin"},[s("h3",{class:e.$tt("headline3")},[e._v("$validate")])]),e._v(" "),s("ui-toc-affix",{attrs:{withoutCss:""}}),e._v(" "),s("div",{class:e.$tt("body2")},[s("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-usage",expression:"'ui-usage'",arg:"id"}],class:e.$tt("headline4")},[e._v("0. Usage")]),e._v(" "),s("ui-markdown",{attrs:{text:e.code[0]}}),e._v(" "),s("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-demo",expression:"'ui-demo'",arg:"id"}],class:e.$tt("headline4")},[e._v("1. Demo")]),e._v(" "),s("fieldset",[s("legend",[e._v("Form Area")]),e._v(" "),s("ui-form-field",{staticClass:"form-item",attrs:{block:""}},[s("ui-textfield",{attrs:{id:"mobile",helperTextId:"mobile-helper-text"},model:{value:e.formData.mobile,callback:function(a){e.$set(e.formData,"mobile",a)},expression:"formData.mobile"}},[e._v("Mobile")]),e._v(" "),s("ui-textfield-helper",{attrs:{id:"mobile-helper-text",validMsg:e.validMsg.mobile}})],1),e._v(" "),s("ui-form-field",{staticClass:"form-item",attrs:{block:""}},[s("ui-textfield",{attrs:{inputType:"password",id:"password",helperTextId:"password-helper-text"},model:{value:e.formData.password,callback:function(a){e.$set(e.formData,"password",a)},expression:"formData.password"}},[e._v("Password")]),e._v(" "),s("ui-textfield-helper",{attrs:{id:"password-helper-text",validMsg:e.validMsg.password}})],1),e._v(" "),s("ui-form-field",{staticClass:"form-item",attrs:{block:""}},[s("ui-textfield",{attrs:{inputType:"password",id:"repassword",helperTextId:"repassword-helper-text"},model:{value:e.formData.repassword,callback:function(a){e.$set(e.formData,"repassword",a)},expression:"formData.repassword"}},[e._v("Repeat Password")]),e._v(" "),s("ui-textfield-helper",{attrs:{id:"repassword-helper-text",validMsg:e.validMsg.repassword}})],1),e._v(" "),s("div",{staticClass:"form-item form-actions"},[s("ui-button",{attrs:{raised:""},on:{click:e.submit}},[e._v("Submit")])],1)],1),e._v(" "),s("ui-snippet",{attrs:{code:e.code[1]}}),e._v(" "),s("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-apis",expression:"'ui-apis'",arg:"id"}],class:e.$tt("headline4")},[e._v("2. APIs")]),e._v(" "),s("ui-markdown",{attrs:{text:e.docs.validator}})],1)],1)}),[],!1,null,null,null);a.default=l.exports}}]);