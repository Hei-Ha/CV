"use strict";(self.webpackChunkcv=self.webpackChunkcv||[]).push([[179],{660:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(81),r=t.n(a),l=t(645),s=t.n(l)()(r());s.push([e.id,'/*\n! tailwindcss v3.2.1 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.my-12 {\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n}\n.mx-7 {\n  margin-left: 1.75rem;\n  margin-right: 1.75rem;\n}\n.my-3 {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.my-1 {\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n.my-8 {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.mr-3 {\n  margin-right: 0.75rem;\n}\n.mt-7 {\n  margin-top: 1.75rem;\n}\n.mb-8 {\n  margin-bottom: 2rem;\n}\n.mr-5 {\n  margin-right: 1.25rem;\n}\n.mr-2 {\n  margin-right: 0.5rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.ml-4 {\n  margin-left: 1rem;\n}\n.box-border {\n  box-sizing: border-box;\n}\n.inline-block {\n  display: inline-block;\n}\n.flex {\n  display: flex;\n}\n.h-full {\n  height: 100%;\n}\n.h-px {\n  height: 1px;\n}\n.h-7 {\n  height: 1.75rem;\n}\n.w-full {\n  width: 100%;\n}\n.w-36\\% {\n  width: 36%;\n}\n.w-36 {\n  width: 9rem;\n}\n.w-3\\/12 {\n  width: 25%;\n}\n.w-20 {\n  width: 5rem;\n}\n.shrink-0 {\n  flex-shrink: 0;\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.break-words {\n  overflow-wrap: break-word;\n}\n.rounded-2xl {\n  border-radius: 1rem;\n}\n.rounded-sm {\n  border-radius: 0.125rem;\n}\n.bg-\\#EDEDED {\n  --tw-bg-opacity: 1;\n  background-color: rgb(237 237 237 / var(--tw-bg-opacity));\n}\n.bg-\\#EEEEEE {\n  --tw-bg-opacity: 1;\n  background-color: rgb(238 238 238 / var(--tw-bg-opacity));\n}\n.bg-\\#FFFFFF {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-\\#F0E9D2 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(240 233 210 / var(--tw-bg-opacity));\n}\n.bg-\\#CCCCCC {\n  --tw-bg-opacity: 1;\n  background-color: rgb(204 204 204 / var(--tw-bg-opacity));\n}\n.py-5 {\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n}\n.px-9 {\n  padding-left: 2.25rem;\n  padding-right: 2.25rem;\n}\n.pt-11 {\n  padding-top: 2.75rem;\n}\n.pb-5 {\n  padding-bottom: 1.25rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-extrabold {\n  font-weight: 800;\n}\n.font-normal {\n  font-weight: 400;\n}\n.leading-7 {\n  line-height: 1.75rem;\n}\n.text-\\#551A8B {\n  --tw-text-opacity: 1;\n  color: rgb(85 26 139 / var(--tw-text-opacity));\n}\n* {\n  margin: 0;\n  padding: 0;\n}\nhtml,\nbody {\n  background: #EEEEEE;\n  font-size: 16px;\n}\n@media (min-width: 768px) {\n\n  .min-md\\:w-\\[calc\\(100vw-20px\\)\\] {\n    width: calc(100vw - 20px);\n  }\n}\n@media (max-width: 768px) {\n\n  .max-md\\:mx-4 {\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n\n  .max-md\\:w-full {\n    width: 100%;\n  }\n}\n@media (min-width: 1024px) {\n\n  .min-lg\\:w-1000px {\n    width: 1000px;\n  }\n}\n',""]);const i=s},993:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(81),r=t.n(a),l=t(645),s=t.n(l)()(r());s.push([e.id,".round {\n  display: inline-block;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: #000000;\n}\ncode {\n  background: #EEEEEE;\n  padding: 0 5px;\n  border-radius: 2px;\n}\n",""]);const i=s},386:(e,n,t)=>{var a=t(745),r=t(379),l=t.n(r),s=t(795),i=t.n(s),c=t(569),m=t.n(c),o=t(565),d=t.n(o),u=t(216),p=t.n(u),b=t(589),h=t.n(b),g=t(660),f={};f.styleTagTransform=h(),f.setAttributes=d(),f.insert=m().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=p(),l()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals;var w=t(993),E={};E.styleTagTransform=h(),E.setAttributes=d(),E.insert=m().bind(null,"head"),E.domAPI=i(),E.insertStyleElement=p(),l()(w.Z,E),w.Z&&w.Z.locals&&w.Z.locals;var x=t(294),y=function(){return x.createElement("div",{className:"pt-11 px-9 bg-#F0E9D2 overflow-hidden"},x.createElement("header",{className:"mb-8"},x.createElement("h3",{className:"inline-block mr-5 text-5xl font-extrabold"},"王闯"),x.createElement("span",{className:"inline-block text-xl mr-2"},x.createElement("span",{className:"text-sm"},"目标职位："),"Web 前端工程师"),x.createElement("span",{className:"inline-block text-base"})),x.createElement("div",{className:"h-px bg-#CCCCCC"}),x.createElement("div",{className:"my-8 text-sm"},x.createElement("span",null,"176-3823-1093 ｜ 男 ｜ 26岁 ｜ wang_chuang_@aliyun.com")))},v=function(e){return x.createElement("div",{className:"flex justify-between items-center"},x.createElement("span",{className:"w-36% h-px bg-#EDEDED"}),x.createElement("div",{className:"bg-#EEEEEE rounded-2xl w-3/12 h-7 text-center leading-7 text-sm"},e.title),x.createElement("span",{className:"w-36% h-px bg-#EDEDED"}))},N=function(){return x.createElement("div",{className:"py-5"},x.createElement(v,{title:"教育背景"}),x.createElement("div",{className:"flex justify-between mt-3"},x.createElement("span",null,"南阳理工学院 ———— 软件学院"),x.createElement("span",{className:"text-sm"},"2016-9 ———— 2020.6")),x.createElement("div",{className:"mt-2 text-sm flex justify-between"},x.createElement("span",null,"软件工程"),x.createElement("span",null,"统招本科")))},k=function(){return x.createElement("div",{className:"pb-5"},x.createElement(v,{title:"专业能力"}),x.createElement("div",{className:"text-sm"},x.createElement("div",{className:"flex items-center my-2"},x.createElement("span",{className:"round mr-3"}),"掌握：",x.createElement("code",null,"HTML"),"、",x.createElement("code",null,"CSS"),"、",x.createElement("code",null,"JavaScript"),"、",x.createElement("code",null,"ES6"),"语法。"),x.createElement("div",{className:"flex items-center my-2"},x.createElement("span",{className:"round mr-3"}),"熟悉：",x.createElement("code",null,"Vue"),"、",x.createElement("code",null,"React"),"、",x.createElement("code",null,"Webpack")," 等前端技术。"),x.createElement("div",{className:"flex items-center my-2 break-words"},x.createElement("span",{className:"round mr-3"}),"熟练使用：",x.createElement("code",null,"Element-UI"),"、",x.createElement("code",null,"Ant Design"),"、",x.createElement("code",null,"Echarts")," 等组件库。"),x.createElement("div",{className:"flex items-center my-2 break-words"},x.createElement("span",{className:"round mr-3"}),"了解  ",x.createElement("code",null,"Node.js"),"、",x.createElement("code",null,"Vue3"),"、",x.createElement("code",null,"Vite"),"、",x.createElement("code",null,"TypeScript"),"、",x.createElement("code",null,"Tailwindcss"),"、微信小程序，并做过练习项目。")))},z=function(){return x.createElement("div",{className:"py-5"},x.createElement(v,{title:"工作经历"}),x.createElement("div",{className:"text-sm"},x.createElement("section",null,x.createElement("div",{className:"my-3 flex justify-between"},x.createElement("header",{className:"font-medium"},"北京轻舟智航科技有限公司"),x.createElement("span",null,"2022.3 —— 2023.5")),x.createElement("div",{className:"my-2"},x.createElement("strong",null,"前端开发工程师")),x.createElement("div",null,x.createElement("span",null,"工作内容："),x.createElement("div",{className:"flex flex-col my-1"},x.createElement("div",{className:"my-1"},x.createElement("span",{className:"round mr-3"}),"负责公司内部测试运营平台的功能开发。"),x.createElement("div",{className:"my-1"},x.createElement("span",{className:"round mr-3"}),"负责公司内部数据平台、机器学习平台、标注平台的搭建和功能开发。"),x.createElement("div",{className:"my-1"},x.createElement("span",{className:"round mr-3"}),"以 Echarts 为基础，搭建公司内部使用的图表库。")))),x.createElement("section",{className:"mt-7"},x.createElement("div",{className:"my-3 flex justify-between"},x.createElement("header",{className:"font-medium"},"北京五八信息技术有限公司 —— 北京总部"),x.createElement("span",null,"2020.5 —— 2021.12")),x.createElement("div",{className:"my-2"},x.createElement("strong",null,"前端开发工程师")),x.createElement("div",null,x.createElement("span",null,"工作内容："),x.createElement("div",{className:"flex flex-col my-1"},x.createElement("div",{className:"my-1"},x.createElement("span",{className:"round mr-3"}),"维护 4 个公司内部系统的正常运行，解决 bug。"),x.createElement("div",{className:"my-1"},x.createElement("span",{className:"round mr-3"}),"根据产品需求，完成相关系统的前端代码开发工作，并与后端同学联调，最终将需求上线，并确保新老功能正常运行。"),x.createElement("div",{className:"my-1"},x.createElement("span",{className:"round mr-3"}),"负责将小组内的项目接入公司内部性能监控平台 —— 北斗系统。"),x.createElement("div",{className:"my-1"},x.createElement("span",{className:"round mr-3"}),"协助组内其他同学对负责的项目向 微前端 的架构方向进行技术改造、升级。"))))))},C=function(){return x.createElement("div",{className:"py-5"},x.createElement(v,{title:"项目经历"}),x.createElement("div",{className:"text-sm"},x.createElement("section",null,x.createElement("header",{className:"my-2 text-base"},x.createElement("strong",null,"QLabel：")),x.createElement("p",{className:"mb-2 flex"},x.createElement("div",{className:"w-20 shrink-0"},"项目描述："),x.createElement("span",null,"此项目是为了给公司供应商提供一个在线标注平台，供其对公司点云图片及其他数据进行在线标注，包含账号权限控制，数据分配，结果验收等模块。")),x.createElement("p",{className:"mb-2 flex"},x.createElement("div",{className:"w-20 shrink-0"},"技       术："),x.createElement("span",null,x.createElement("code",null,"React")," + ",x.createElement("code",null,"Webpack")," + ",x.createElement("code",null,"TypeScript")," + ",x.createElement("code",null,"Arco-Design")," + ",x.createElement("code",null,"Tailwindcss"))),x.createElement("p",{className:"mb-2 flex"},x.createElement("div",{className:"w-20 shrink-0"},"工作内容："),x.createElement("div",{className:"flex flex-col"},x.createElement("div",{className:"flex items-center"},"主要负责设计和开发权限模块。 除此之外项目初期，负责梳理整体需求， 从 0 - 1 快速搭建项目整体框架；")))),x.createElement("section",{className:"mt-7"},x.createElement("header",{className:"my-2 text-base"},x.createElement("strong",null,"QData：")),x.createElement("p",{className:"mb-2 flex"},x.createElement("div",{className:"w-20 shrink-0"},"项目描述："),x.createElement("span",null,"此项目主要是展示数据采集回传的 Run 数据，经过分片之后，以图片的形式供审核人员快速确定某批数据是否可以送标；同时提供数据统计模块，按筛选条件展示回传数据的标签统计情况。")),x.createElement("p",{className:"mb-2 flex"},x.createElement("div",{className:"w-20 shrink-0"},"技       术："),x.createElement("span",null,x.createElement("code",null,"React")," + ",x.createElement("code",null,"Webpack")," + ",x.createElement("code",null,"TypeScript")," + ",x.createElement("code",null,"Arco-Design")," + ",x.createElement("code",null,"Tailwindcss"))),x.createElement("p",{className:"mb-2 flex"},x.createElement("div",{className:"w-20 shrink-0"},"工作内容："),x.createElement("div",{className:"flex flex-col"},x.createElement("div",{className:"flex items-center"},"负责审核模块、数据统计模块的开发和整个系统后续的功能迭代。"))),x.createElement("p",{className:"mb-2 flex"},x.createElement("div",{className:"w-20 shrink-0"},"成       果："),x.createElement("div",{className:"flex flex-col"},x.createElement("div",{className:"flex items-center"},"项目初期中途接手，开发周期较紧张。在有限时间内梳理并整理需求，确定优先级，合理安排开发时间，在规定时间内上线第一版供用户使用。 提升了标注同事对采集数据的处理效率，提高送标数据的有效性，节约公司成本。")))),x.createElement("section",{className:"mt-7"},x.createElement("header",{className:"my-2 text-base"},x.createElement("strong",null,"招商后台管理系统：")),x.createElement("p",{className:"mb-2 flex"},x.createElement("div",{className:"w-20 shrink-0"},"项目描述："),x.createElement("span",null,"此系统主要为公司内部运营人员服务，运营人员利用此系统每天抢占公海资源库的商机信息，并负责外呼跟进自己的商机信息，与潜在客户取得联系，促使其签订意向单，进一步转化为与公司签订合同。")),x.createElement("p",{className:"mb-2 flex"},x.createElement("div",{className:"w-20 shrink-0"},"技       术："),x.createElement("span",null,x.createElement("code",null,"Vue2")," + ",x.createElement("code",null,"Vue-router")," + ",x.createElement("code",null,"Element-ui")," + ",x.createElement("code",null,"webpack"))),x.createElement("p",{className:"mb-2 flex"},x.createElement("div",{className:"w-20 shrink-0"},"工作内容："),x.createElement("div",{className:"flex flex-col"},x.createElement("div",{className:"flex items-center"},x.createElement("span",{className:"round mr-3"}),"维护此项目正常运行，功能迭代(在职期间完成至少 86 个大大小小需求)。"),x.createElement("div",{className:"flex items-center"},x.createElement("span",{className:"round mr-3"}),"封装了 Form 和 Table 公共组件。"),x.createElement("div",{className:"flex items-center"},x.createElement("span",{className:"round mr-3"}),"接入公司内部性能监控平台（北斗性能监控平台）。"))),x.createElement("p",{className:"mb-2 flex"},x.createElement("div",{className:"w-20 shrink-0"},"成       果："),x.createElement("div",{className:"flex flex-col"},x.createElement("div",{className:"flex items-center"},x.createElement("span",{className:"round mr-3"}),"在 Element-ui 组件的基础上，封装适合公司系统风格 RcForm 和 RcTable 组件，提升开发效率 60% 以上，同时降低新同学上手项目难"),x.createElement("div",{className:"ml-4"},"度，提升业务产出速度。"),x.createElement("div",{className:"flex items-center"},x.createElement("span",{className:"round mr-3"}),"开发 webpack 插件，以配置的形式传入必要数据，极大的简化了项目接入性能监控平台的步骤。")))),x.createElement("section",{className:"mt-7"},x.createElement("header",{className:"my-2 text-base"},x.createElement("span",{className:"mr-3"},x.createElement("strong",null,"ECharts 常用组件库：")),x.createElement("span",{className:"font-normal text-#551A8B"},x.createElement("a",{href:"https://hei-ha.github.io/QCharts/",target:"_blank"},"在线链接"))),x.createElement("p",{className:"mb-2 flex"},x.createElement("div",{className:"w-20 shrink-0"},"项目描述："),x.createElement("span",null,"此项目将公司内部常用的图表展示形式，以公司 UI 风格封装，方便后续开发直接使用，提高效率。")),x.createElement("p",{className:"mb-2 flex"},x.createElement("div",{className:"w-20 shrink-0"},"技       术："),x.createElement("span",null,x.createElement("code",null,"Echarts")," + ",x.createElement("code",null,"React")," + ",x.createElement("code",null,"Webpack")," + ",x.createElement("code",null,"Arco-Design"))))))};a.createRoot(document.getElementById("root")).render(x.createElement("div",{className:"w-full h-full my-12 flex justify-center"},x.createElement((function(){return x.createElement("div",{className:"rounded-sm overflow-hidden box-border bg-#FFFFFF flex flex-col justify-center\n        min-lg:w-1000px\n        min-md:w-[calc(100vw-20px)]\n        max-md:mx-4 max-md:w-full"},x.createElement(y,null),x.createElement("div",{className:"mx-7"},x.createElement(N,null),x.createElement(k,null),x.createElement(z,null),x.createElement(C,null)))}),null)))}},e=>{e.O(0,[216],(()=>(386,e(e.s=386)))),e.O()}]);