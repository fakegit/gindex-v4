(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3661f152","chunk-5c5a94ee","chunk-2d0b2ee4"],{1816:function(e,t,i){},"25e0":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("table",{staticClass:"table is-hoverable"},[i("thead",[i("tr",{staticStyle:{"border-bottom":"1px solid white"}},e._l(e.columns,(function(t,n){return i("th",{key:n,class:t.class,style:t.style},[e._v(" "+e._s(t.name)+" "),e._m(0,!0)])})),0)]),i("tbody",e._l(e.data,(function(t,n){return i("tr",{key:n,staticClass:"tr-item"},[i("td",{staticClass:"td-item",attrs:{title:t.name},on:{click:function(i){return i.target!==i.currentTarget?null:e.action(t,"application/vnd.google-apps.folder"!==t.mimeType?"view":"")}}},[i("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":e.icons(t.mimeType)}})]),e._v(" "+e._s(t.name)+" "),e.isShowDesc?i("span",{staticClass:"g2-file-desc",staticStyle:{color:"#bbf1c8"},domProps:{innerHTML:e._s(t.description)}}):e._e()]),i("td",{staticClass:"td-item is-hidden-mobile is-hidden-touch"},[e._v(" "+e._s(t.modifiedTime)+" ")]),i("td",{staticClass:"td-item is-hidden-mobile is-hidden-touch"},[e._v(e._s(t.size))]),i("td",{staticClass:"is-hidden-mobile is-hidden-touch"},[i("span",{staticClass:"icon",staticStyle:{color:"#ff9595"},on:{click:function(i){return i.stopPropagation(),e.action(t,"copy")}}},[i("i",{staticClass:"fa fa-copy faa-shake animated-hover",attrs:{title:e.$t("list.opt.copy"),"aria-hidden":"true"}})]),i("span",{staticClass:"icon",staticStyle:{color:"#ff9595"},on:{click:function(i){return i.stopPropagation(),e.action(t,"_blank")}}},[i("i",{staticClass:"fa fa-external-link faa-shake animated-hover",attrs:{title:e.$t("list.opt.newTab"),"aria-hidden":"true"}})]),"application/vnd.google-apps.folder"!==t.mimeType?i("span",{staticClass:"icon",staticStyle:{color:"#ff9595"},on:{click:function(i){return i.stopPropagation(),e.action(t,"down")}}},[i("i",{staticClass:"fa fa-download faa-shake animated-hover",attrs:{"aria-hidden":"true",title:e.$t("list.opt.download")}})]):e._e()])])})),0)])},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"caret-wrapper"},[i("i",{staticClass:"sort-caret ascending"}),i("i",{staticClass:"sort-caret descending"})])}],s={props:{data:{type:Array,default:function(){return[]}},icons:{type:Function},action:{type:Function}},computed:{columns:function(){return[{name:this.$t("list.title.file"),style:"color: white;"},{name:this.$t("list.title.moditime"),style:"width:20%;color: white;",class:"is-hidden-mobile is-hidden-touch"},{name:this.$t("list.title.size"),style:"width:10.5%;color: white;",class:"is-hidden-mobile is-hidden-touch"},{name:this.$t("list.title.operation"),style:"width:13.5%;color: white;",class:"is-hidden-mobile is-hidden-touch"}]},isShowDesc:function(){return window.themeOptions.render.desc||!1}}},o=s,r=i("2877"),c=Object(r["a"])(o,n,a,!1,null,null,null);t["default"]=c.exports},"2a7a":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"g2-grid-view"},[i("div",{staticClass:"columns is-multiline"},e._l(e.folders,(function(t,n){return i("div",{key:"folder_"+n,staticClass:"column is-one-quarter",on:{click:function(i){return e.action(t)}}},[i("div",{staticClass:"card g2-grid-view-card g2-grid-view-folder"},[i("div",{staticClass:"media"},[i("div",{staticClass:"content",attrs:{title:t.name}},[i("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":e.getIcon(t.mimeType)}})]),e._v(" "+e._s(t.name)+" ")])])])])})),0),i("div",{staticClass:"columns is-multiline"},e._l(e.files,(function(t,n){return i("div",{key:"file_"+n,staticClass:"column is-one-quarter",on:{click:function(i){return e.action(t,"view")}}},[i("div",{staticClass:"card g2-grid-view-card"},[i("div",{class:"card-image"+(-1!=t.mimeType.indexOf("video")?" g2-grid-view-play":"")},[i("i"),i("figure",{staticClass:"image is-square"},[t.thumbnailLink?i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.thum(t.thumbnailLink),expression:"thum(file.thumbnailLink)"}],attrs:{alt:t.name}}):i("svg",{staticClass:"file-icon iconfont",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":e.getIcon(t.mimeType)}})])])]),i("div",{staticClass:"media g2-grid-view-file"},[i("div",{staticClass:"content",attrs:{title:t.name}},[i("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":e.getIcon(t.mimeType)}})]),e._v(" "+e._s(t.name)+" ")])])])])})),0)])},a=[],s=(i("4de4"),{name:"GridView",props:{data:{type:Array,default:function(){return[]}},getIcon:{type:Function},action:{type:Function},thum:{type:Function}},data:function(){return{}},computed:{folders:function(){return this.data.filter((function(e){return e.isFolder}))},files:function(){return this.data.filter((function(e){return!e.isFolder}))}},methods:{}}),o=s,r=(i("b0ae"),i("2877")),c=Object(r["a"])(o,n,a,!1,null,"02281adf",null);t["default"]=c.exports},"3bcf":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content mkdown-text",domProps:{innerHTML:e._s(e.content)}})},a=[],s=i("45d8"),o=i("0e54"),r=i.n(o),c={props:{option:{}},watch:{option:function(){this.render()}},mounted:function(){this.render()},data:function(){return{content:""}},computed:{defaultContent:function(){return'\n        <center>\n            <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>\n            <span class="sr-only">Loading...</span>\n        </center>\n      '}},methods:{render:function(){var e=this;this.content=this.defaultContent,Object(s["g"])(this.option,(function(t){e.content=r()(t)}))}}},l=c,d=i("2877"),u=Object(d["a"])(l,n,a,!1,null,null,null);t["default"]=u.exports},9224:function(e){e.exports=JSON.parse('{"name":"gindex-v4","version":"7.3.7","g2index":"7.3.7","scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint","analyz":"npm_config_report=true npm run build","i18n:report":"vue-cli-service i18n:report --src \'./src/**/*.?(js|vue)\' --locales \'./src/locales/**/*.json\'"},"dependencies":{"axios":"^0.19.2","bulma":"^0.9.0","bulma-divider":"^0.2.0","bulma-extensions":"^6.2.7","cool-checkboxes-for-bulma.io":"^1.1.0","core-js":"^3.6.4","crypto-js":"^4.0.0","element-ui":"^2.13.1","feb-alive":"^1.0.9","js-base64":"^2.6.1","js-cookie":"^2.2.1","lodash":"^4.17.15","lowdb":"^1.0.0","markdown-it":"^11.0.0","marked":"^1.1.0","node-sass":"^4.14.0","plyr":"^3.6.2","sass-loader":"^8.0.2","v-viewer":"^1.5.1","vue":"^2.6.11","vue-avatar":"^2.3.0","vue-axios":"^2.1.5","vue-clipboard2":"^0.3.1","vue-codemirror":"^4.0.6","vue-head":"^2.2.0","vue-i18n":"^8.18.2","vue-infinite-loading":"^2.4.5","vue-infinite-scroll":"^2.0.2","vue-lazyload":"^1.3.3","vue-loading-overlay":"^3.3.2","vue-material-checkbox":"^2.2.0","vue-moment":"^4.1.0","vue-notification":"^1.3.20","vue-plyr":"^6.0.4","vue-router":"^3.3.4","vue-toastification":"^1.7.6","vuex":"^3.4.0"},"devDependencies":{"@intlify/vue-i18n-loader":"^1.0.0","@vue/cli-plugin-babel":"~4.4.5","@vue/cli-plugin-eslint":"~4.4.5","@vue/cli-plugin-vuex":"^4.4.5","@vue/cli-service":"~4.4.5","babel-eslint":"^10.1.0","babel-plugin-component":"^1.1.1","compression-webpack-plugin":"^4.0.0","eslint":"^7.3.0","eslint-plugin-vue":"^6.2.2","fs":"0.0.1-security","vue-cli-plugin-i18n":"~1.0.1","vue-template-compiler":"^2.6.11","webpack-bundle-analyzer":"^3.7.0"},"eslintConfig":{"root":true,"env":{"node":true},"extends":["plugin:vue/essential","eslint:recommended"],"parserOptions":{"parser":"babel-eslint"},"rules":{}},"browserslist":["> 1%","last 2 versions","not dead"]}')},b0ae:function(e,t,i){"use strict";var n=i("1816"),a=i.n(n);a.a},e65d:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"golist"},[i("bread-crumb",{ref:"breadcrumb"}),"list"===e.mode?i("list-view",{attrs:{data:e.files,icons:e.getIcon,action:e.action,copy:e.copy}}):e._e(),"list"!==e.mode?i("grid-view",{staticClass:"g2-content",attrs:{data:e.files,getIcon:e.getIcon,action:e.action,thum:e.thum}}):e._e(),i("infinite-loading",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],ref:"infinite",attrs:{spinner:"bubbles"},on:{infinite:e.infiniteHandler}},[i("div",{attrs:{slot:"no-more"},slot:"no-more"}),i("div",{attrs:{slot:"no-results"},slot:"no-results"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:0===e.files.length,expression:"files.length === 0"}],staticClass:"has-text-centered no-content"})],1),i("div",{staticClass:"is-divider",attrs:{"data-content":e.$t("list.total")+" "+e.files.length+" "+e.$t("list.item")}}),e.renderHeadMD&&e.headmd.display?i("headmd",{attrs:{option:e.headmd}}):e._e(),e.renderReadMeMD&&e.readmemd.display?i("readmemd",{attrs:{option:e.readmemd}}):e._e(),e.viewer&&e.images&&e.images.length>0?i("viewer",{ref:"viewer",staticClass:"is-hidden",attrs:{images:e.images,options:{toolbar:!0,url:"data-source"}},on:{inited:e.inited}},e._l(e.images,(function(t){return i("img",{key:t.path,staticClass:"image",attrs:{src:e.thum(t.thumbnailLink),"data-source":t.path,alt:t.name}})})),0):e._e()],1)},a=[],s=(i("99af"),i("4de4"),i("c740"),i("c975"),i("d81d"),i("b0c0"),i("ac1f"),i("5319"),i("2909")),o=i("5530"),r=i("45d8"),c=i("5880"),l=i("2db9"),d=i("25e0"),u=i("2a7a"),p=i("3bcf"),m=i("e166"),f=i.n(m),h={name:"GoList",components:{BreadCrumb:l["default"],ListView:d["default"],GridView:u["default"],Headmd:p["default"],Readmemd:p["default"],InfiniteLoading:f.a},data:function(){return{infiniteId:+new Date,loading:!0,page:{page_token:null,page_index:0},files:[],viewer:!1,icon:{"application/vnd.google-apps.folder":"icon-morenwenjianjia","video/mp4":"icon-mp","audio/mpeg":"icon-mkv","audio/ogg":"icon-mkv","audio/aac":"icon-mkv","audio/vnd.wav":"icon-mkv","video/x-matroska":"icon-mkv","video/x-msvideo":"icon-avi","video/webm":"icon-webm","text/plain":"icon-txt","text/markdown":"icon-markdown","text/x-ssa":"icon-ASS","text/html":"icon-html","text/x-python-script":"icon-python","text/x-java":"icon-java1","text/x-sh":"icon-SH","application/x-subrip":"icon-srt","application/zip":"icon-zip","application/x-zip-compressed":"icon-zip","application/rar":"icon-rar","application/pdf":"icon-pdf","application/json":"icon-JSON1","application/x-yaml":"icon-YML","application/vnd.openxmlformats-officedocument.wordprocessingml.document":"icon-word","image/bmp":"icon-img","image/jpeg":"icon-img","image/png":"icon-img","image/gif":"icon-img"},headmd:{display:!1,file:{},path:""},readmemd:{display:!1,file:{},path:""}}},computed:Object(o["a"])(Object(o["a"])({},Object(c["mapState"])("acrou/view",["mode"])),{},{images:function(){return this.files.filter((function(e){return-1!=e.mimeType.indexOf("image")}))},renderHeadMD:function(){return window.themeOptions.render.head_md||!1},renderReadMeMD:function(){return window.themeOptions.render.readme_md||!1}}),created:function(){this.render()},methods:{infiniteHandler:function(e){this.page.page_token&&(this.page.page_index++,this.render(e),console.log(e))},render:function(e){var t=this;this.headmd={display:!1,file:"",path:""},this.readmemd={display:!1,file:"",path:""};var i=this.$route.path,n=localStorage.getItem("password"+i),a=this.$route.query.q,r=Object(o["a"])({q:a?decodeURIComponent(a):"",password:n||null},this.page);this.axios.post(i,r).then((function(n){var a=n.data;if(a){if(a.error&&"401"==a.error.code)return void t.checkPassword(i);var o,r=a.data;if(!r)return;if(t.page={page_token:a.nextPageToken,page_index:a.curPageIndex},e)(o=t.files).push.apply(o,Object(s["a"])(t.buildFiles(r.files)));else t.files=t.buildFiles(r.files);r.files&&t.renderMd()}a.nextPageToken?t.$refs.infinite.stateChanger.loaded():t.$refs.infinite.stateChanger.complete(),t.loading=!1})).catch((function(e){t.loading=!1,console.log(e)}))},buildFiles:function(e){var t=this.$route.path;return e?e.map((function(e){var i=t+Object(r["c"])(e.name,e),n="application/vnd.google-apps.folder"===e.mimeType,a=n?"-":Object(r["f"])(e.size);return Object(o["a"])(Object(o["a"])({path:i},e),{},{modifiedTime:Object(r["e"])(e.modifiedTime),size:a,isFolder:n})})).sort((function(e,t){return e.isFolder&&t.isFolder?0:e.isFolder?-1:1})):[]},checkPassword:function(e){var t=prompt(this.$t("list.auth"),"");localStorage.setItem("password"+e,t),null!=t&&""!=t?this.render(e):this.$router.go(-1)},copy:function(e){var t=this,i=window.location.origin;e=i+encodeURI(e),this.$copyText(e).then((function(){t.$notify({title:t.$t("notify.title"),message:t.$t("copy.success"),type:"success"})})).catch((function(){t.$notify.error({title:t.$t("notify.title"),message:t.$t("copy.error")})}))},thum:function(e){return e?"/".concat(this.$route.params.id,":view?url=").concat(e):""},inited:function(e){this.$viewer=e},action:function(e,t){var i=this;if(-1!=e.mimeType.indexOf("image"))return this.viewer=!0,void this.$nextTick((function(){var t=i.images.findIndex((function(t){return t.path===e.path}));i.$viewer.view(t)}));var n=this.$route.params.cmd;n&&"search"===n?this.goSearchResult(e,t):this.target(e,t)},target:function(e,t){var i=e.path;"_blank"!==t?"copy"!==t?"down"!==t&&(Object(r["a"])(i)||e.isFolder)?"view"!==t?"application/vnd.google-apps.folder"!==e.mimeType||this.$router.push({path:i}):this.$router.push({path:Object(r["b"])(i)}):location.href=i.replace(/^\/(\d+:)\//,"/$1down/"):this.copy(i):window.open(i)},renderMd:function(){var e=this.$route.params.cmd,t=i("9224").version;e||(window.themeOptions.render.head_md&&(this.headmd={display:!0,file:"HEAD.md",path:"https://cdn.jsdelivr.net/gh/tks18/gindex-v4@v"+t+"/vuejs/dist/HEAD.md"}),window.themeOptions.render.readme_md&&(this.readmemd={display:!0,file:"README.md",path:"https://cdn.jsdelivr.net/gh/tks18/gindex-v4@v"+t+"/vuejs/dist/README.md"}))},goSearchResult:function(e,t){var i=this;this.loading=!0;var n=this.$route.params.id;this.axios.post("/".concat(n,":id2path"),{id:e.id}).then((function(a){i.loading=!1;var s=a.data;s&&(e.path="/".concat(n,":").concat(s),i.target(e,t))})).catch((function(e){i.loading=!1,console.log(e)}))},getIcon:function(e){return"#"+(this.icon[e]?this.icon[e]:"icon-weizhi")}}},v=h,g=i("2877"),w=Object(g["a"])(v,n,a,!1,null,null,null);t["default"]=w.exports}}]);