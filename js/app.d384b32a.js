(function(t){function e(e){for(var s,r,n=e[0],l=e[1],o=e[2],u=0,p=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(p.length)p.shift()();return c.push.apply(c,o||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(s=!1)}s&&(c.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},c=[];function r(t){return n.p+"js/"+({}[t]||t)+"."+{"chunk-2d0e8cc9":"365dab43"}[t]+".js"}function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=i[t]=[e,s]}));e.push(a[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.src=r(t);var o=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=i[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;o.message="Loading chunk "+t+" failed.\n("+s+": "+c+")",o.name="ChunkLoadError",o.type=s,o.request=c,a[1](o)}i[t]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=o;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("report-head",{attrs:{percent:t.percent,score:t.activeScore}}),a("card",{staticStyle:{"margin-top":"-102px"}},[a("div",{staticClass:"target-user-body"},[a("div",{staticClass:"target-user-avatar"}),a("div",{staticClass:"target-user-info"},[a("p",{staticClass:"target-user-name"},[t._v("李明")]),a("p",{staticClass:"target-user-idcard"},[t._v("身份证号：2206**********0130")]),a("div",{staticClass:"target-user-supplement",style:{color:t.activeScore.color}},[a("span",{staticClass:"supplement-item"},[t._v("黑名单指数70")]),a("span",{staticClass:"supplement-item splitline",style:{borderColor:t.activeScore.color}}),a("span",{staticClass:"supplement-item"},[t._v("欺诈等级3")])])])])]),a("card",{attrs:{title:"检测解读"}},[a("div",{staticClass:"unscramble-block"},[a("h4",{staticClass:"unscramble-title"},[t._v("● 黑名单指数")]),a("p",{staticClass:"unscramble-content"},[t._v("\n        立方黑卡是根据网络行为大数据出具的面向社会人群的综合报告，风险指数经供参考，指数越高，表明借贷信用越差，被拒的可能性越大\n      ")])]),a("div",{staticClass:"unscramble-block"},[a("h4",{staticClass:"unscramble-title"},[t._v("● 评价表")]),a("div",{staticClass:"unscramble-content unscramble-table"},[a("div",{staticClass:"unscramble-table-row"},[a("p",{staticClass:"unscramble-table-item unscramble-table-title"},[t._v("分数")]),a("p",{staticClass:"unscramble-table-item"},[t._v("0-25")]),a("p",{staticClass:"unscramble-table-item"},[t._v("26-85")]),a("p",{staticClass:"unscramble-table-item"},[t._v("86-100")])]),a("div",{staticClass:"unscramble-table-row"},[a("p",{staticClass:"unscramble-table-item unscramble-table-title"},[t._v("评价")]),a("p",{staticClass:"unscramble-table-item"},[t._v("优")]),a("p",{staticClass:"unscramble-table-item"},[t._v("良")]),a("p",{staticClass:"unscramble-table-item"},[t._v("差")])]),a("div",{staticClass:"unscramble-table-row"},[a("p",{staticClass:"unscramble-table-item unscramble-table-title"},[t._v("等级")]),a("p",{staticClass:"unscramble-table-item"},[t._v("1")]),a("p",{staticClass:"unscramble-table-item"},[t._v("2")]),a("p",{staticClass:"unscramble-table-item"},[t._v("3")])])])])]),a("card",{attrs:{title:"直接联系人"}},[a("div",{staticClass:"direct-contact"},[a("div",{staticClass:"contact-block space-between"},[a("van-circle",{attrs:{rate:t.targetRate,speed:50,color:"#6BBBF3","layer-color":"#F1F1F1"},model:{value:t.currentRate,callback:function(e){t.currentRate=e},expression:"currentRate"}},[a("div",{staticClass:"van-circle__text"},[a("p",{staticClass:"target-count"},[t._v(t._s(t.text))]),a("p",{staticClass:"target-name"},[t._v("黑名单占比")])])]),a("van-circle",{attrs:{rate:t.targetRate,speed:50,color:"#FF936A","layer-color":"#F1F1F1"},model:{value:t.currentRate,callback:function(e){t.currentRate=e},expression:"currentRate"}},[a("div",{staticClass:"van-circle__text"},[a("p",{staticClass:"target-count"},[t._v(t._s(t.text))]),a("p",{staticClass:"target-name"},[t._v("逾期占比")])])])],1),a("div",{staticClass:"contact-block space-between"},[a("div",{staticClass:"contact-target"},[a("p",{staticClass:"target-count"},[t._v("62")]),a("p",{staticClass:"target-name"},[t._v("黑名单个数")])]),a("div",{staticClass:"contact-target"},[a("p",{staticClass:"target-count"},[t._v("25")]),a("p",{staticClass:"target-name"},[t._v("逾期个数")])]),a("div",{staticClass:"contact-target"},[a("p",{staticClass:"target-count"},[t._v("11")]),a("p",{staticClass:"target-name"},[t._v("逾期M3+个数")])])])])]),a("card",{attrs:{title:"间接联系人"}},[a("div",{staticClass:"contact-block space-between"},[a("div",{staticClass:"contact-target"},[a("p",{staticClass:"target-count"},[t._v("62")]),a("p",{staticClass:"target-name"},[t._v("黑名单个数")])]),a("div",{staticClass:"contact-target"},[a("p",{staticClass:"target-count"},[t._v("25")]),a("p",{staticClass:"target-name"},[t._v("逾期个数")])]),a("div",{staticClass:"contact-target"},[a("p",{staticClass:"target-count"},[t._v("11")]),a("p",{staticClass:"target-name"},[t._v("逾期M3+个数")])])])]),a("card",{attrs:{title:"主叫联系人"}},[a("div",{staticClass:"contact-block space-between"},[a("div",{staticClass:"contact-target"},[a("p",{staticClass:"target-count"},[t._v("62")]),a("p",{staticClass:"target-name"},[t._v("联系人数")])]),a("div",{staticClass:"contact-target"},[a("p",{staticClass:"target-count"},[t._v("25")]),a("p",{staticClass:"target-name"},[t._v("联系人黑名单个数")])]),a("div",{staticClass:"contact-target"},[a("p",{staticClass:"target-count"},[t._v("11")]),a("p",{staticClass:"target-name"},[t._v("联系人逾期个数")])])])]),a("card",{attrs:{title:"与同行通话"}},[a("div",{staticClass:"contact-block space-between"},[a("div",{staticClass:"contact-target"},[a("p",{staticClass:"target-count"},[t._v("62")]),a("p",{staticClass:"target-name"},[t._v("与同行通话次数")])]),a("div",{staticClass:"contact-target"},[a("p",{staticClass:"target-count"},[t._v("25")]),a("p",{staticClass:"target-name"},[t._v("与同行通话秒数")])])])]),a("card",{attrs:{title:"与法院/律师通话"}},[a("div",{staticClass:"contact-block space-between"},[a("div",{staticClass:"contact-target"},[a("p",{staticClass:"target-count"},[t._v("62")]),a("p",{staticClass:"target-name"},[t._v("与法院通话次数")])]),a("div",{staticClass:"contact-target"},[a("p",{staticClass:"target-count"},[t._v("25")]),a("p",{staticClass:"target-name"},[t._v("与律师通话秒数")])])])]),a("card",{attrs:{title:"风险名单"}},[a("ul",{staticClass:"risk-list"},[a("li",{staticClass:"risk-list-item"},[a("p",{staticClass:"risk-origin"},[t._v("宜信")]),a("p",{staticClass:"risk-detail"},[t._v("命中手机号码138****9090")]),a("p",{staticClass:"risk-detail"},[t._v("风险原因——资料虚假")])]),a("li",{staticClass:"risk-list-item"},[a("p",{staticClass:"risk-origin"},[t._v("宜信")]),a("p",{staticClass:"risk-detail"},[t._v("命中手机号码138****9090")]),a("p",{staticClass:"risk-detail"},[t._v("风险原因——资料虚假")])]),a("li",{staticClass:"risk-list-item"},[a("p",{staticClass:"risk-origin"},[t._v("宜信")]),a("p",{staticClass:"risk-detail"},[t._v("命中手机号码138****9090")]),a("p",{staticClass:"risk-detail"},[t._v("风险原因——资料虚假")])])])])],1)},c=[],r=(a("6c7b"),a("7f7f"),a("75fc")),n=(a("c5f6"),a("fe3c")),l=a.n(n),o=(a("5cfb"),a("f5df"),a("b970"));a("157a");function u(t,e,a){var s,i,c,r,n,l=function l(){var o=+new Date-r;o<e&&o>0?s=setTimeout(l,e-o):(s=null,a||(n=t.apply(c,i),s||(c=i=null)))};return function(){for(var i=arguments.length,o=new Array(i),u=0;u<i;u++)o[u]=arguments[u];c=this,r=+new Date;var d=a&&!s;return s||(s=setTimeout(l,e)),d&&(n=t.apply(c,o),c=o=null),n}}a.e("chunk-2d0e8cc9").then(a.t.bind(null,"8b8a",7)),s["a"].use(o["a"]),l.a.attach(document.body);var d={name:"pageHead",props:{percent:{type:Number,default:0},score:{type:Object,default:function(){return{}}}},data:function(){return{scoreClass:[],dotCount:18,dotStyle:[]}},methods:{initCalcResult:function(){this.initDotPosition(),this.initDotAnime(),window.addEventListener("resize",this.initDotPosition)},initDotPosition:u((function(){var t=this,e=t.$refs.dotContainer.getBoundingClientRect().width/2;t.dotStyle=[];for(var a=0;a<t.dotCount;a++)t.dotStyle.push({transform:"translateX(".concat(-Math.sin(360/t.dotCount*Math.PI/180*a)*e+e,"px) \n              translateY(").concat(Math.cos(360/t.dotCount*Math.PI/180*a)*e+e,"px) \n              rotate(").concat(360/t.dotCount*a,"deg)")})}),300,!0),initDotAnime:function(){var t=this,e=t.score.color,a=Math.floor(t.percent/100*t.dotCount);new Promise((function(s){0===a&&s();for(var i=function(a,i){setTimeout((function(){t.$refs.dotContainer.children[a-1].style.borderColor=e,a===i&&s()}),150*a)},c=1,r=Math.min(t.dotCount,a);c<=r;c++)i(c,r)})).then((function(){setTimeout((function(){t.scoreClass=["animated","bounceIn"]}),300)}))}},mounted:function(){this.initCalcResult()},render:function(){var t=this,e=arguments[0];return e("div",{class:"report-head"},[e("div",{class:"calc__result-container"},[e("ul",{class:"calc__result-bg",ref:"dotContainer"},[new Array(this.dotCount).fill(1).map((function(t,e){return e})).map((function(a){return e("li",{key:a,class:"calc__result-dot",style:t.dotStyle[a]})}))]),e("p",{class:["calc__result-title"].concat(Object(r["a"])(this.scoreClass)),style:{color:this.score.color,visibility:this.scoreClass.length?"visible":"hidden"}},[this.score.text]),e("p",{class:"calc__result-info"},["评测结果"])]),e("p",{class:"report-date"},["报告时间2018-09-30"])])}},p={name:"card",props:{title:{type:String,default:""}},data:function(){return{}},render:function(){var t=arguments[0];return t("div",{class:"dq-card"},[this.$scopedSlots.header?this.$scopedSlots.header():this.title?t("h3",{class:"dq-card-title"},[this.title]):null,this.$slots.default])}},v=[{score:0,color:"#FF5252",text:"较差"},{score:60,color:"#52E2FF",text:"良"},{score:80,color:"#63FFA2",text:"优"}],C={name:"reportContainer",components:{ReportHead:d,Card:p},data:function(){return{percent:70,currentRate:0,targetRate:0,activeScore:v.slice(0,1)[0],cardList:[],slideList:[]}},computed:{text:function(){return this.currentRate.toFixed(0)+"%"}},watch:{slideList:{handler:function(t){t[2]&&(this.targetRate=80)}}},created:function(){console.log(JSON.parse(document.body.attributes["data-data"].value));for(var t=v.length-1;t>=0;t--)if(this.percent>=v[t].score){this.activeScore=v.slice(t,t+1)[0];break}},mounted:function(){this.cardList=this.$children.filter((function(t){return t.$options.name===p.name})),this.slideList=new Array(this.cardList.length).fill(0),this.scrollFunc(),this.$el.addEventListener("scroll",this.scrollFunc)},methods:{scrollFunc:function(){this.slideList[this.slideList.length-1]&&this.$el.removeEventListener("scroll",this.scrollFunc);for(var t=0;t<this.slideList.length;t++)this.slideList[t]||this.$el.scrollTop+document.body.clientHeight>=this.cardList[t].$el.offsetTop&&(this.slideList.splice(t,1,1),this.cardList[t].$el.className=this.cardList[t].$el.className+" animated slideInUp")}}},m=C,f=a("2877"),b=Object(f["a"])(m,i,c,!1,null,null,null),h=b.exports;a("fb98");s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(h)}}).$mount("#app")},fb98:function(t,e,a){}});
//# sourceMappingURL=app.d384b32a.js.map