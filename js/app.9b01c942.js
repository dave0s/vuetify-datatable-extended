(function(e){function t(t){for(var a,i,s=t[0],o=t[1],c=t[2],f=0,d=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(d.length)d.shift()();return l.push.apply(l,c||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],a=!0,s=1;s<r.length;s++){var o=r[s];0!==n[o]&&(a=!1)}a&&(l.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},l=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=o;l.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("1887"),r("d015"),r("19d6"),r("6284");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("v-app",[r("v-card",{staticClass:"pa-5"},[r("v-data-table-extended",{staticClass:"elevation-10",attrs:{headers:e.headers,items:e.desserts,"sort-by":["calories","fat"],"sort-desc":[!1,!0],"multi-sort":""}})],1)],1)],1)},l=[],i={data:function(){return{headers:[{text:"Dessert (100g serving)",align:"start",sortable:!1,select_filter:!0,value:"name"},{text:"Calories",value:"calories",select_filter:!0},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Iron (%)",value:"iron",select_filter:!0}],desserts:[{name:"Frozen Yogurt",calories:200,fat:6,carbs:24,protein:4,iron:"1%"},{name:"Ice cream sandwich",calories:200,fat:9,carbs:37,protein:4.3,iron:"1%"},{name:"Eclair",calories:300,fat:16,carbs:23,protein:6,iron:"7%"},{name:"Cupcake",calories:300,fat:3.7,carbs:67,protein:4.3,iron:"8%"},{name:"Gingerbread",calories:400,fat:16,carbs:49,protein:3.9,iron:"16%"},{name:"Jelly bean",calories:400,fat:0,carbs:94,protein:0,iron:"0%"},{name:"Lollipop",calories:400,fat:.2,carbs:98,protein:0,iron:"2%"},{name:"Honeycomb",calories:400,fat:3.2,carbs:87,protein:6.5,iron:"45%"},{name:"Donut",calories:500,fat:25,carbs:51,protein:4.9,iron:"22%"},{name:"KitKat",calories:500,fat:26,carbs:65,protein:7,iron:"6%"}]}}},s=i,o=r("6c95"),c=Object(o["a"])(s,n,l,!1,null,null,null),u=c.exports,f=(r("bf40"),r("ce5b")),d=r.n(f),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{dense:""}},[r("v-col",{staticClass:"mb-n5"},[r("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search",debounce:"","single-line":"","hide-details":""},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}})],1),e._l(e.selectFilters,(function(t){return r("v-col",{key:t.name,staticClass:"mb-n5"},[r("v-select",{attrs:{label:t.label,multiple:"",chips:"",items:t.items},model:{value:t.model,callback:function(r){e.$set(t,"model",r)},expression:"f.model"}})],1)}))],2)],1),r("v-data-table",e._b({attrs:{items:e.items,headers:e.headers,search:e.searchValueJsonDebounced,customFilter:e.customFilter}},"v-data-table",e.$attrs,!1),[e._t("default")],2)],1)},b=[],m=(r("18d5"),r("0238"),r("fda9"),r("3973"),r("c172"),r("2b09"),r("9d3a"),r("0a93"),r("6180"),r("3218")),h=r("b2c2"),v=r("9ec5"),y=function(){function e(){Object(h["a"])(this,e),this.filterCallbacks={},this.filterValues={}}return Object(v["a"])(e,[{key:"updateFilterValues",value:function(e){console.log("updated filter: ",{filterValues:e}),this.filterValues=e}},{key:"registerFilter",value:function(e,t){this.filterCallbacks[e]=t}},{key:"runFilters",value:function(e,t,r){for(var a=this,n=0,l=Object.entries(this.filterCallbacks);n<l.length;n++){var i=Object(m["a"])(l[n],2),s=i[0],o=i[1],c=a.filterValues[s],u=o(e,c,r);if(!u)return!1}return!0}}]),e}(),g=y;r("a9c3");function x(e,t){var r=null;return function(){clearTimeout(r);var a=arguments,n=this;r=setTimeout((function(){e.apply(n,a)}),t)}}var w={props:["items","headers"],data:function(){return{searchValue:"",searchValueJsonDebounced:"",selectFilters:[],filterHandler:new g}},computed:{searchValueJson:function(){var e=this.selectFilters.reduce((function(e,t){return e[t.name]=t.model,e}),{});return this.filterHandler.updateFilterValues(e),JSON.stringify(e)}},watch:{searchValueJson:x((function(e){this.searchValueJsonDebounced=e,console.log("debouncing")}),100),headers:{immediate:!0,handler:function(e){var t=this;e.filter((function(e){return e.select_filter})).map((function(e){var r=e.value;t.selectFilters.push({name:r,model:[],label:"Select "+e.text,items:[]}),t.filterHandler.registerFilter(r,(function(e,t){if(!Array.isArray(t)||!t.length)return!0;var r=(e+"").toLowerCase(),a=t.some((function(e){return r.includes((e+"").toLowerCase())}));return a}))}))}},items:{immediate:!0,handler:function(e){if(Array.isArray(e)){var t=this.selectFilters;e.map((function(e){t.map((function(t){t.items.push(e[t.name])}))}))}}}},methods:{customFilter:function(e,t,r){return this.filterHandler.runFilters(e,t,r)}}},O=w,_=Object(o["a"])(O,p,b,!1,null,null,null),F=_.exports,j={install:function(e){e.component("v-data-table-extended",F)}};a["default"].use(d.a),a["default"].use(j),new a["default"]({el:"#app",vuetify:new d.a,render:function(e){return e(u)}})}});
//# sourceMappingURL=app.9b01c942.js.map