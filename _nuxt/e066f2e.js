(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(t,e,r){"use strict";r(1);var n=r(8),o={year:"numeric",month:"long",day:"numeric"};n.default.filter("formatDate",(function(t){return Intl.DateTimeFormat("us-EN",o).format(new Date(t))}))},144:function(t,e,r){"use strict";var n=r(0),o=r(21),c=r(27),l=(r(19),r(3),r(60),r(4),r(1),r(5),r(2),r(6),r(142)),f=r.n(l);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d=new(function(){function t(){Object(o.a)(this,t),this.apiBase="https://madfedeas-802c1e.ingress-daribow.easywp.com/wp-json"}return Object(c.a)(t,[{key:"siteData",value:function(){return f.a.get(this.apiBase).then((function(t){var e=t.data;return{site_data:{name:e.name,description:e.description,url:e.url,home:e.home,gmt_offset:e.gmt_offset,timezone_string:e.timezone_string}}})).catch((function(t){return{error:t}}))}},{key:"posts",value:function(t){var e=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({page:1,per_page:10},t);return f.a.get("".concat(this.apiBase,"/wp/v2/posts"),{params:e}).then((function(t){return{posts:t.data}})).catch((function(t){return{error:t}}))}}]),t}())("madfedeas.me");e.a=d},186:function(t,e,r){var content=r(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("56b15182",content,!0,{sourceMap:!1})},187:function(t,e,r){var content=r(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("2ca7e510",content,!0,{sourceMap:!1})},188:function(t,e,r){var content=r(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("a46cba98",content,!0,{sourceMap:!1})},202:function(t,e,r){"use strict";r.r(e);r(251);var n=r(45),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("b-jumbotron",{attrs:{align:"center","bg-variant":"dark","text-variant":"light",header:"Madison Federin-Easley",lead:"Front-End Web Developer"}}),t._v(" "),r("div",{staticClass:"container"},[r("b-navbar",{staticClass:"nav-border",attrs:{toggleable:"md",type:"dark",variant:"dark"}},[r("b-navbar-brand",[t._v("Menu")]),t._v(" "),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",[r("NuxtLink",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),r("b-nav-item",[r("NuxtLink",{staticClass:"nav-link",attrs:{to:"/additional-projects"}},[t._v("Projects and Updates")])],1),t._v(" "),r("b-nav-item",[r("NuxtLink",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About Me")])],1),t._v(" "),r("b-nav-item",[r("NuxtLink",{staticClass:"nav-link",attrs:{to:"/contact"}},[t._v("Contact Me")])],1),t._v(" "),r("b-nav-item")],1)],1)],1)],1)],1)}),[],!1,null,"44526910",null);e.default=component.exports;installComponents(component,{Header:r(202).default})},203:function(t,e,r){"use strict";r.r(e);r(253);var n=r(45),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{attrs:{align:"center"}},[r("p",[t._v("Copyright © 2021 | Madison Federin-Easley | NuxtJS / BoostrapVue")])])}],!1,null,"ec1e34b2",null);e.default=component.exports;installComponents(component,{Footer:r(203).default})},211:function(t,e,r){"use strict";r(249);var n=r(45),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-dark text-light"},[r("Header"),t._v(" "),r("Nuxt"),t._v(" "),r("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:r(202).default,Footer:r(203).default})},212:function(t,e,r){"use strict";r.r(e),r.d(e,"types",(function(){return d})),r.d(e,"state",(function(){return m})),r.d(e,"mutations",(function(){return _})),r.d(e,"actions",(function(){return O}));r(4),r(3),r(1),r(5),r(2),r(6);var n,o=r(22),c=r(0),l=(r(20),r(43),r(51),r(144));function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={SITE_DATA_UPDATE:"SITE_DATA_UPDATE",POST_LIST_UPDATE:"POST_LIST_UPDATE",CURRENT_POST_UPDATE:"CURRENT_POST_UPDATE"},m=function(){return{site_data:{},post_list:[],current_post:{}}},_=(n={},Object(c.a)(n,d.SITE_DATA_UPDATE,(function(t,e){t.site_data=v({},e)})),Object(c.a)(n,d.POST_LIST_UPDATE,(function(t,e){t.post_list=Object(o.a)(e)})),Object(c.a)(n,d.CURRENT_POST_UPDATE,(function(t,e){t.current_post=v({},e)})),n),O={nuxtServerInit:function(t){var e=t.commit,r=l.a.siteData().then((function(t){e(d.SITE_DATA_UPDATE,t.site_data)}));return Promise.all([r])}}},213:function(t,e,r){r(214),t.exports=r(215)},249:function(t,e,r){"use strict";r(186)},250:function(t,e,r){var n=r(54)(!1);n.push([t.i,'*{background-color:var(--dark);font-family:"Trebuchet MS","Lucida Sans Unicode","Lucida Grande","Lucida Sans",Arial,sans-serif}a,a:visited{color:var(--cyan)}a:hover{color:var(--purple)}',""]),t.exports=n},251:function(t,e,r){"use strict";r(187)},252:function(t,e,r){var n=r(54)(!1);n.push([t.i,'.jumbotron[data-v-44526910]{margin-bottom:0}.jumbotron h1[data-v-44526910]{font-family:Cambria,Cochin,Georgia,Times,"Times New Roman",serif}.nav-border[data-v-44526910]{border:3px solid var(--pink);border-radius:10px}.nav-link[data-v-44526910]{padding:.5rem 0}.nav-link[data-v-44526910],.nav-link[data-v-44526910]:visited{color:var(--cyan)!important}.nav-link[data-v-44526910]:hover{color:var(--purple)!important}header[data-v-44526910]{margin-bottom:2em}a[data-v-44526910]{font-size:1.2rem}',""]),t.exports=n},253:function(t,e,r){"use strict";r(188)},254:function(t,e,r){var n=r(54)(!1);n.push([t.i,"footer[data-v-ec1e34b2]{padding:2em 0}",""]),t.exports=n}},[[213,11,1,12]]]);