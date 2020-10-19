(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12d03530"],{2017:function(t,e,n){"use strict";var o=n("cafe"),s=n.n(o);s.a},"2dbb":function(t,e,n){},"88ad":function(t,e,n){"use strict";var o=n("2dbb"),s=n.n(o);s.a},"9ed6":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticClass:"login-container"},[n("el-main",[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,autocomplete:"on","label-position":"left"}},[n("div",{staticClass:"login-main"},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[t._v("云帆培训考试系统 "),n("span",{staticStyle:{"font-size":"6px","vertical-align":"top"}},[t._v("开源版")])])]),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),n("el-input",{ref:"username",attrs:{placeholder:"用户名",name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),n("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:t.capsTooltip,callback:function(e){t.capsTooltip=e},expression:"capsTooltip"}},[n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),n("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,placeholder:"密码",name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(e){t.capsTooltip=!1}},nativeOn:{keyup:[function(e){return t.checkCapslock(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}]},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}}),n("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"===t.passwordType?"eye":"eye-open"}})],1)],1)],1),n("div",{staticStyle:{position:"relative"}},[n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:12}},[n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("登录")])],1),n("el-col",{attrs:{span:12}},[n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{type:"warning"},nativeOn:{click:function(e){return e.preventDefault(),t.studentRegister(e)}}},[t._v("学员注册")])],1)],1)],1),n("div",{staticStyle:{position:"relative"}},[n("el-row",{staticStyle:{"padding-top":"5px"},attrs:{gutter:10}},[n("div",{staticStyle:{"border-bottom":"#ccc 1px solid"}}),n("el-col",{attrs:{span:24}},[n("p",{staticStyle:{color:"#001528","font-size":"12px","line-height":"30px"}},[t._v("演示账号，点击以下按钮直接登录系统")])]),n("el-col",{attrs:{span:12,xs:24}},[n("el-button",{staticStyle:{width:"100%","margin-bottom":"10px"},attrs:{size:"mini",icon:"el-icon-s-promotion"},nativeOn:{click:function(e){return e.preventDefault(),t.studentLogin(e)}}},[t._v("学员登录")])],1),n("el-col",{attrs:{span:12,xs:24}},[n("el-button",{staticStyle:{width:"100%","margin-bottom":"10px"},attrs:{icon:"el-icon-s-tools",size:"mini"},nativeOn:{click:function(e){return e.preventDefault(),t.adminLogin(e)}}},[t._v("超管登录")])],1)],1)],1)],1)])],1),n("el-footer",{staticStyle:{background:"#ffffff","text-align":"center","line-height":"50px","font-size":"14px"},attrs:{height:"50px"}},[t._v(" ©云帆互联 "),n("a",{staticStyle:{"margin-left":"10px"},attrs:{href:"https://lp.yfhl.net",target:"_blank"}},[t._v("企业官网")]),t._v(" / "),n("a",{attrs:{href:"https://cdn.yfhl.net/docs/exam-guide.pdf",target:"_blank"}},[t._v("产品文档")]),t._v(" / "),n("a",{attrs:{target:"_blank",href:"https://qm.qq.com/cgi-bin/qm/qr?k=dfXIc5z0O7DMxdrF-N8DV9HbUKnKJFW0&jump_from=webapi"}},[t._v("Q群:865330294")])])],1)},s=[],i=(n("ac6a"),n("456d"),n("61f7")),r=(n("e05f"),{name:"Login",data:function(){var t=function(t,e,n){Object(i["d"])(e)?n():n(new Error("请输入正确的用户名！"))},e=function(t,e,n){e.length<5?n(new Error("密码不能小于5个字符")):n()};return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:t}],password:[{required:!0,trigger:"blur",validator:e}]},passwordType:"password",capsTooltip:!1,loading:!1,redirect:void 0,otherQuery:{}}},watch:{$route:{handler:function(t){var e=t.query;e&&(this.redirect=e.redirect,this.otherQuery=this.getOtherQuery(e))},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:{studentRegister:function(){this.$router.push({name:"Register"})},studentLogin:function(){this.loginForm.username="person",this.loginForm.password="person",this.handleLogin()},adminLogin:function(){this.loginForm.username="admin",this.loginForm.password="admin",this.handleLogin()},checkCapslock:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.shiftKey,n=t.key;n&&1===n.length&&(this.capsTooltip=!!(e&&n>="a"&&n<="z"||!e&&n>="A"&&n<="Z")),"CapsLock"===n&&!0===this.capsTooltip&&(this.capsTooltip=!1)},showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this;this.$refs.loginForm.validate((function(e){if(!e)return console.log("提交错误！"),!1;t.loading=!0,t.$store.dispatch("user/login",t.loginForm).then((function(){t.$router.push({path:t.redirect||"/",query:t.otherQuery}),t.loading=!1})).catch((function(){t.loading=!1}))}))},getOtherQuery:function(t){return Object.keys(t).reduce((function(e,n){return"redirect"!==n&&(e[n]=t[n]),e}),{})}}}),a=r,l=(n("2017"),n("88ad"),n("2877")),c=Object(l["a"])(a,o,s,!1,null,"94e1bbe4",null);e["default"]=c.exports},cafe:function(t,e,n){}}]);