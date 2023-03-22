"use strict";
(self["webpackChunk_roots_bud_sage_sage"] = self["webpackChunk_roots_bud_sage_sage"] || []).push([["app"],{

/***/ "../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/postcss-loader/dist/cjs.js??postcss!../node_modules/resolve-url-loader/index.js??resolveUrl!../node_modules/sass-loader/dist/cjs.js??sass!./styles/app.scss":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/postcss-loader/dist/cjs.js??postcss!../node_modules/resolve-url-loader/index.js??resolveUrl!../node_modules/sass-loader/dist/cjs.js??sass!./styles/app.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline;\n  text-decoration: underline;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n.static {\n  position: static;\n}\n.relative {\n  position: relative;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mx-5 {\n  margin-left: 1.25rem;\n  margin-right: 1.25rem;\n}\n.mr-3 {\n  margin-right: 0.75rem;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.contents {\n  display: contents;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.h-16 {\n  height: 4rem;\n}\n.w-1\\/2 {\n  width: 50%;\n}\n.w-full {\n  width: 100%;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.max-w-7xl {\n  max-width: 80rem;\n}\n.items-center {\n  align-items: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1rem * 0);\n  margin-right: calc(1rem * var(--tw-space-x-reverse));\n  margin-left: calc(1rem * (1 - 0));\n  margin-left: calc(1rem * (1 - var(--tw-space-x-reverse)));\n  margin-left: calc(1rem * (1 - 0));\n  margin-left: calc(1rem * calc(1 - 0));\n  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.bg-indigo-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(129, 140, 248, 1);\n  background-color: rgba(129, 140, 248, var(--tw-bg-opacity));\n}\n.bg-green-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(74, 222, 128, 1);\n  background-color: rgba(74, 222, 128, var(--tw-bg-opacity));\n}\n.bg-yellow-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(250, 204, 21, 1);\n  background-color: rgba(250, 204, 21, var(--tw-bg-opacity));\n}\n.bg-red-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(248, 113, 113, 1);\n  background-color: rgba(248, 113, 113, var(--tw-bg-opacity));\n}\n.bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(31, 41, 55, 1);\n  background-color: rgba(31, 41, 55, var(--tw-bg-opacity));\n}\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.pt-4 {\n  padding-top: 1rem;\n}\n.text-indigo-50 {\n  --tw-text-opacity: 1;\n  color: rgba(238, 242, 255, 1);\n  color: rgba(238, 242, 255, var(--tw-text-opacity));\n}\n.text-green-50 {\n  --tw-text-opacity: 1;\n  color: rgba(240, 253, 244, 1);\n  color: rgba(240, 253, 244, var(--tw-text-opacity));\n}\n.text-yellow-50 {\n  --tw-text-opacity: 1;\n  color: rgba(254, 252, 232, 1);\n  color: rgba(254, 252, 232, var(--tw-text-opacity));\n}\n.text-red-50 {\n  --tw-text-opacity: 1;\n  color: rgba(254, 242, 242, 1);\n  color: rgba(254, 242, 242, var(--tw-text-opacity));\n}\n.outline {\n  outline-style: solid;\n}\n/** Import theme styles */\n.nav a {\n  color: white;\n}\n.content-info .footer-utility {\n  border-top: 2px solid #ccc;\n}\n.content-info .social-wrap {\n  display: flex;\n  flex-grow: 1;\n  justify-content: flex-start;\n  gap: 1em;\n}\n.content-info .widget_nav_menu .menu {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  max-width: 300px;\n}\n.content-info .widget_nav_menu .menu li {\n  width: 50%;\n}\n.content-info .widget_nav_menu .menu li a {\n  display: block;\n  padding: 0.5em;\n}\n.footer-cta {\n  background: #FF4B1D;\n  color: white;\n}\n.footer-cta p {\n  font-size: 2em;\n}\n#main {\n  min-height: 80vh;\n}\n.home-section {\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n  min-height: 300px;\n}\n.home-section:nth-of-type(odd) {\n  background: red;\n}\n.home-section h2 {\n  font-size: 2em;\n}\n.home-section .fluid-container {\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.focus\\:not-sr-only:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n}\n@media (min-width: 640px) {\n\n  .sm\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n}\n@media (min-width: 1024px) {\n\n  .lg\\:mx-10 {\n    margin-left: 2.5rem;\n    margin-right: 2.5rem;\n  }\n\n  .lg\\:py-10 {\n    padding-top: 2.5rem;\n    padding-bottom: 2.5rem;\n  }\n\n  .lg\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n\n  .lg\\:pt-10 {\n    padding-top: 2.5rem;\n  }\n}", "",{"version":3,"sources":["webpack://./../node_modules/tailwindcss/base.css","webpack://./../node_modules/tailwindcss/utilities.css","webpack://./styles/app.scss","webpack://./styles/layouts/_header.scss","webpack://./styles/layouts/_footer.scss","webpack://./styles/layouts/_pages.scss","webpack://./styles/layouts/_home.scss","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n","@tailwind utilities;\n","@import 'tailwindcss/base';\n@import 'tailwindcss/components';\n@import 'tailwindcss/utilities';\n\n/** Import theme styles */\n@import \"layouts/_header\";\n@import \"layouts/_sidebar\";\n@import \"layouts/_footer\";\n@import \"layouts/_pages\";\n@import \"layouts/_posts\";\n@import \"layouts/_home\";",".nav a {\n  color: white;\n}\n",".content-info {\n  .footer-utility {\n    border-top: 2px solid #ccc;\n  }\n  \n  .social-wrap {\n    display: flex;\n    flex-grow: 1;\n    justify-content: flex-start;\n    gap: 1em;\n  }\n  \n  .widget_nav_menu .menu{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    max-width: 300px;\n    \n    li {\n      width: 50%;\n\n      \n      a {\n        display: block;\n        padding: 0.5em;        \n      }\n    }\n  }\n}\n\n.footer-cta {\n  background: #FF4B1D;\n  color: white;\n  \n  p {\n    font-size: 2em;\n  }\n}","#main {\n  min-height: 80vh;\n}",".home-section {\n  @apply py-5;\n  \n  min-height: 300px;\n  &:nth-of-type(odd) {\n   background: red; \n  }\n  \n  h2 {\n    font-size: 2em;\n  }\n  \n  .fluid-container {\n    @apply mx-auto px-4;\n  }\n}",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./styles/app.scss":
/*!*************************!*\
  !*** ./styles/app.scss ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_node_modules_resolve_url_loader_index_js_resolveUrl_node_modules_sass_loader_dist_cjs_js_sass_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../../node_modules/postcss-loader/dist/cjs.js??postcss!../../node_modules/resolve-url-loader/index.js??resolveUrl!../../node_modules/sass-loader/dist/cjs.js??sass!./app.scss */ "../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/postcss-loader/dist/cjs.js??postcss!../node_modules/resolve-url-loader/index.js??resolveUrl!../node_modules/sass-loader/dist/cjs.js??sass!./styles/app.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_node_modules_resolve_url_loader_index_js_resolveUrl_node_modules_sass_loader_dist_cjs_js_sass_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_node_modules_resolve_url_loader_index_js_resolveUrl_node_modules_sass_loader_dist_cjs_js_sass_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_node_modules_resolve_url_loader_index_js_resolveUrl_node_modules_sass_loader_dist_cjs_js_sass_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_node_modules_resolve_url_loader_index_js_resolveUrl_node_modules_sass_loader_dist_cjs_js_sass_app_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_node_modules_resolve_url_loader_index_js_resolveUrl_node_modules_sass_loader_dist_cjs_js_sass_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../../node_modules/postcss-loader/dist/cjs.js??postcss!../../node_modules/resolve-url-loader/index.js??resolveUrl!../../node_modules/sass-loader/dist/cjs.js??sass!./app.scss */ "../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/postcss-loader/dist/cjs.js??postcss!../node_modules/resolve-url-loader/index.js??resolveUrl!../node_modules/sass-loader/dist/cjs.js??sass!./styles/app.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_node_modules_resolve_url_loader_index_js_resolveUrl_node_modules_sass_loader_dist_cjs_js_sass_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../../node_modules/postcss-loader/dist/cjs.js??postcss!../../node_modules/resolve-url-loader/index.js??resolveUrl!../../node_modules/sass-loader/dist/cjs.js??sass!./app.scss */ "../node_modules/@roots/bud-support/lib/css-loader/index.cjs??css!../node_modules/postcss-loader/dist/cjs.js??postcss!../node_modules/resolve-url-loader/index.js??resolveUrl!../node_modules/sass-loader/dist/cjs.js??sass!./styles/app.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_node_modules_resolve_url_loader_index_js_resolveUrl_node_modules_sass_loader_dist_cjs_js_sass_app_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_node_modules_resolve_url_loader_index_js_resolveUrl_node_modules_sass_loader_dist_cjs_js_sass_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_node_modules_resolve_url_loader_index_js_resolveUrl_node_modules_sass_loader_dist_cjs_js_sass_app_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_node_modules_resolve_url_loader_index_js_resolveUrl_node_modules_sass_loader_dist_cjs_js_sass_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_node_modules_resolve_url_loader_index_js_resolveUrl_node_modules_sass_loader_dist_cjs_js_sass_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_node_modules_resolve_url_loader_index_js_resolveUrl_node_modules_sass_loader_dist_cjs_js_sass_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_node_modules_resolve_url_loader_index_js_resolveUrl_node_modules_sass_loader_dist_cjs_js_sass_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_roots_bud_support_lib_css_loader_index_cjs_css_node_modules_postcss_loader_dist_cjs_js_postcss_node_modules_resolve_url_loader_index_js_resolveUrl_node_modules_sass_loader_dist_cjs_js_sass_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/hot/index.mjs?name=sage&indicator=true&overlay=true&reload=true":
/*!*************************************************************************************************************!*\
  !*** ../node_modules/@roots/bud-client/lib/hot/index.mjs?name=sage&indicator=true&overlay=true&reload=true ***!
  \*************************************************************************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

var __resourceQuery = "?name=sage&indicator=true&overlay=true&reload=true";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-console */
/* global __resourceQuery */
/* global module */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
(() => __awaiter(void 0, void 0, void 0, function* () {
    return yield __webpack_require__.e(/*! import() */ "node_modules_roots_bud-client_lib_hot_client_js").then(__webpack_require__.bind(__webpack_require__, /*! ./client.js */ "../node_modules/@roots/bud-client/lib/hot/client.js")).then((module) => __awaiter(void 0, void 0, void 0, function* () { return yield module.client(__resourceQuery, __webpack_module__.hot); }));
}))();



/***/ }),

/***/ "../node_modules/@roots/sage/lib/client/dom-ready.js":
/*!***********************************************************!*\
  !*** ../node_modules/@roots/sage/lib/client/dom-ready.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const domReady = onReady => {
    window.requestAnimationFrame(async function check() {
        document.body ? await onReady() : window.requestAnimationFrame(check);
    });
};
/* harmony default export */ __webpack_exports__["default"] = (domReady);
//# sourceMappingURL=dom-ready.js.map

/***/ }),

/***/ "./scripts/app.js":
/*!************************!*\
  !*** ./scripts/app.js ***!
  \************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _roots_sage_client_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @roots/sage/client/dom-ready */ "../node_modules/@roots/sage/lib/client/dom-ready.js");
var _import$meta$webpackH;


/**
 * Application entrypoint
 */
(0,_roots_sage_client_dom_ready__WEBPACK_IMPORTED_MODULE_0__["default"])(async () => {
  // ...
});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
(_import$meta$webpackH = __webpack_module__.hot) === null || _import$meta$webpackH === void 0 ? void 0 : _import$meta$webpackH.accept(console.error);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./scripts/app.js"), __webpack_exec__("./styles/app.scss"), __webpack_exec__("../node_modules/@roots/bud-client/lib/hot/index.mjs?name=sage&indicator=true&overlay=true&reload=true"));
/******/ }
]);
//# sourceMappingURL=app.js.map