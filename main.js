(()=>{"use strict";var n={722:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),a=t.n(r),o=t(314),i=t.n(o)()(a());i.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type="button"],\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type="checkbox"],\n  [type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }',""]);const s=i},365:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),a=t.n(r),o=t(314),i=t.n(o)()(a());i.push([n.id,'html {\n    box-sizing: border-box;\n}\n*, *::before, *::after {\n    box-sizing: inherit;\n}\nbody {\n    font-size: 62.5%;\n    font-family: "Roboto", sans-serif;\n}\n/* Main */\n#content {\n    padding: 1rem;\n}\n#site-container{\n    display: flex;\n    align-items: flex-start;\n    gap: 2rem;\n}\n#side-bar {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n#task-form {\n    border: 1px solid #7c3aed;\n    padding: 1rem;\n    border-radius: 1rem;\n    font-weight: bold;\n    width: 12rem;\n    max-width: 12rem;\n}\n#task-form input[type="submit"] {\n    background-color: #7c3aed;\n    border: none;\n    margin-top: 0.5rem;\n    padding: 0.4rem 0;\n    color: #fff;\n    border-radius: 1rem;\n    cursor: pointer;\n}   \n#task-form input[type="submit"]:hover {\n    transition: all .3s ease;\n    background-color: #2e1065;;\n}\n.form-label {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n}\n.form-label input, .form-label label {\n    flex: 1;\n    margin-bottom: 0.5rem;\n}\n.task-container {\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 80rem;\n    gap: 1rem;\n}\n.task-container div {\n    padding: 1rem;\n    margin-top: 1rem;\n    border: 1px solid #7c3aed;\n    border-radius: 1rem;\n}\n.task-container div button {\n    background-color: #7c3aed;\n    border: none;\n    margin-top: 0.5rem;\n    padding: 0.4rem 1rem;\n    color: #fff;\n    border-radius: 1rem;\n    cursor: pointer;\n}   \n.task-container div button:hover {\n    transition: all .3s ease;\n    background-color: #2e1065;;\n}',""]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],u=r.base?c[0]+r.base:c[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var m=t(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(h);else{var f=a(h,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var c=r(n,a),u=0;u<o.length;u++){var d=t(o[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),a=t.n(r),o=t(825),i=t.n(o),s=t(659),c=t.n(s),u=t(56),d=t.n(u),l=t(540),m=t.n(l),h=t(113),f=t.n(h),p=t(722),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=m(),a()(p.A,g),p.A&&p.A.locals&&p.A.locals;var b=t(365),w={};w.styleTagTransform=f(),w.setAttributes=d(),w.insert=c().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=m(),a()(b.A,w),b.A&&b.A.locals&&b.A.locals;class y{constructor(n,e,t,r){this._title=n,this._description=e,this._dueDate=t,this._priority=r}get title(){return this._title}get description(){return this._description}get dueDate(){return this._dueDate}get priority(){return this._priority}}const v={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function x(n){return(e={})=>{const t=e.width?String(e.width):n.defaultWidth;return n.formats[t]||n.formats[n.defaultWidth]}}const k={date:x({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:x({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:x({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},M={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function S(n){return(e,t)=>{let r;if("formatting"===(t?.context?String(t.context):"standalone")&&n.formattingValues){const e=n.defaultFormattingWidth||n.defaultWidth,a=t?.width?String(t.width):e;r=n.formattingValues[a]||n.formattingValues[e]}else{const e=n.defaultWidth,a=t?.width?String(t.width):n.defaultWidth;r=n.values[a]||n.values[e]}return r[n.argumentCallback?n.argumentCallback(e):e]}}const C={ordinalNumber:(n,e)=>{const t=Number(n),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},era:S({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:S({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:n=>n-1}),month:S({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:S({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:S({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function E(n){return(e,t={})=>{const r=t.width,a=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],s=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],c=Array.isArray(s)?function(n){for(let e=0;e<n.length;e++)if(n[e].test(i))return e}(s):function(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&n[e].test(i))return e}(s);let u;return u=n.valueCallback?n.valueCallback(c):c,u=t.valueCallback?t.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}const P={ordinalNumber:(T={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:n=>parseInt(n,10)},(n,e={})=>{const t=n.match(T.matchPattern);if(!t)return null;const r=t[0],a=n.match(T.parsePattern);if(!a)return null;let o=T.valueCallback?T.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:n.slice(r.length)}}),era:E({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:E({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:n=>n+1}),month:E({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:E({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:E({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var T;const D={code:"en-US",formatDistance:(n,e,t)=>{let r;const a=v[n];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),t?.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r},formatLong:k,formatRelative:(n,e,t,r)=>M[n],localize:C,match:P,options:{weekStartsOn:0,firstWeekContainsDate:1}};let z={};function W(){return z}Math.pow(10,8);const O=6048e5,A=Symbol.for("constructDateFrom");function F(n,e){return"function"==typeof n?n(e):n&&"object"==typeof n&&A in n?n[A](e):n instanceof Date?new n.constructor(e):new Date(e)}function q(n,e){return F(e||n,n)}function N(n){const e=q(n),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+n-+t}function Y(n,e){const t=q(n,e?.in);return t.setHours(0,0,0,0),t}function I(n,e){const t=q(n,e?.in);return function(n,e,t){const[r,a]=function(n,...e){const t=F.bind(null,n||e.find((n=>"object"==typeof n)));return e.map(t)}(t?.in,n,e),o=Y(r),i=Y(a),s=+o-N(o),c=+i-N(i);return Math.round((s-c)/864e5)}(t,function(n,e){const t=q(n,e?.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}(t))+1}function H(n,e){const t=W(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,a=q(n,e?.in),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function j(n,e){return H(n,{...e,weekStartsOn:1})}function L(n,e){const t=q(n,e?.in),r=t.getFullYear(),a=F(t,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const o=j(a),i=F(t,0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);const s=j(i);return t.getTime()>=o.getTime()?r+1:t.getTime()>=s.getTime()?r:r-1}function R(n,e){const t=q(n,e?.in),r=+j(t)-+function(n,e){const t=L(n,e),r=F(e?.in||n,0);return r.setFullYear(t,0,4),r.setHours(0,0,0,0),j(r)}(t);return Math.round(r/O)+1}function Q(n,e){const t=q(n,e?.in),r=t.getFullYear(),a=W(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=F(e?.in||n,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=H(i,e),c=F(e?.in||n,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const u=H(c,e);return+t>=+s?r+1:+t>=+u?r:r-1}function G(n,e){const t=q(n,e?.in),r=+H(t,e)-+function(n,e){const t=W(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??t.firstWeekContainsDate??t.locale?.options?.firstWeekContainsDate??1,a=Q(n,e),o=F(e?.in||n,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),H(o,e)}(t,e);return Math.round(r/O)+1}function B(n,e){return(n<0?"-":"")+Math.abs(n).toString().padStart(e,"0")}const X={y(n,e){const t=n.getFullYear(),r=t>0?t:1-t;return B("yy"===e?r%100:r,e.length)},M(n,e){const t=n.getMonth();return"M"===e?String(t+1):B(t+1,2)},d:(n,e)=>B(n.getDate(),e.length),a(n,e){const t=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];default:return"am"===t?"a.m.":"p.m."}},h:(n,e)=>B(n.getHours()%12||12,e.length),H:(n,e)=>B(n.getHours(),e.length),m:(n,e)=>B(n.getMinutes(),e.length),s:(n,e)=>B(n.getSeconds(),e.length),S(n,e){const t=e.length,r=n.getMilliseconds();return B(Math.trunc(r*Math.pow(10,t-3)),e.length)}},_={G:function(n,e,t){const r=n.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});default:return t.era(r,{width:"wide"})}},y:function(n,e,t){if("yo"===e){const e=n.getFullYear(),r=e>0?e:1-e;return t.ordinalNumber(r,{unit:"year"})}return X.y(n,e)},Y:function(n,e,t,r){const a=Q(n,r),o=a>0?a:1-a;return"YY"===e?B(o%100,2):"Yo"===e?t.ordinalNumber(o,{unit:"year"}):B(o,e.length)},R:function(n,e){return B(L(n),e.length)},u:function(n,e){return B(n.getFullYear(),e.length)},Q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return B(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return B(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(n,e,t){const r=n.getMonth();switch(e){case"M":case"MM":return X.M(n,e);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(n,e,t){const r=n.getMonth();switch(e){case"L":return String(r+1);case"LL":return B(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(n,e,t,r){const a=G(n,r);return"wo"===e?t.ordinalNumber(a,{unit:"week"}):B(a,e.length)},I:function(n,e,t){const r=R(n);return"Io"===e?t.ordinalNumber(r,{unit:"week"}):B(r,e.length)},d:function(n,e,t){return"do"===e?t.ordinalNumber(n.getDate(),{unit:"date"}):X.d(n,e)},D:function(n,e,t){const r=I(n);return"Do"===e?t.ordinalNumber(r,{unit:"dayOfYear"}):B(r,e.length)},E:function(n,e,t){const r=n.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(n,e,t,r){const a=n.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return B(o,2);case"eo":return t.ordinalNumber(o,{unit:"day"});case"eee":return t.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(a,{width:"short",context:"formatting"});default:return t.day(a,{width:"wide",context:"formatting"})}},c:function(n,e,t,r){const a=n.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return B(o,e.length);case"co":return t.ordinalNumber(o,{unit:"day"});case"ccc":return t.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(a,{width:"narrow",context:"standalone"});case"cccccc":return t.day(a,{width:"short",context:"standalone"});default:return t.day(a,{width:"wide",context:"standalone"})}},i:function(n,e,t){const r=n.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return B(a,e.length);case"io":return t.ordinalNumber(a,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(n,e,t){const r=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(r,{width:"narrow",context:"formatting"});default:return t.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(n,e,t){const r=n.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(a,{width:"narrow",context:"formatting"});default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(n,e,t){const r=n.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(a,{width:"narrow",context:"formatting"});default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(n,e,t){if("ho"===e){let e=n.getHours()%12;return 0===e&&(e=12),t.ordinalNumber(e,{unit:"hour"})}return X.h(n,e)},H:function(n,e,t){return"Ho"===e?t.ordinalNumber(n.getHours(),{unit:"hour"}):X.H(n,e)},K:function(n,e,t){const r=n.getHours()%12;return"Ko"===e?t.ordinalNumber(r,{unit:"hour"}):B(r,e.length)},k:function(n,e,t){let r=n.getHours();return 0===r&&(r=24),"ko"===e?t.ordinalNumber(r,{unit:"hour"}):B(r,e.length)},m:function(n,e,t){return"mo"===e?t.ordinalNumber(n.getMinutes(),{unit:"minute"}):X.m(n,e)},s:function(n,e,t){return"so"===e?t.ordinalNumber(n.getSeconds(),{unit:"second"}):X.s(n,e)},S:function(n,e){return X.S(n,e)},X:function(n,e,t){const r=n.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return $(r);case"XXXX":case"XX":return U(r);default:return U(r,":")}},x:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"x":return $(r);case"xxxx":case"xx":return U(r);default:return U(r,":")}},O:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+J(r,":");default:return"GMT"+U(r,":")}},z:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+J(r,":");default:return"GMT"+U(r,":")}},t:function(n,e,t){return B(Math.trunc(+n/1e3),e.length)},T:function(n,e,t){return B(+n,e.length)}};function J(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),a=Math.trunc(r/60),o=r%60;return 0===o?t+String(a):t+String(a)+e+B(o,2)}function $(n,e){return n%60==0?(n>0?"-":"+")+B(Math.abs(n)/60,2):U(n,e)}function U(n,e=""){const t=n>0?"-":"+",r=Math.abs(n);return t+B(Math.trunc(r/60),2)+e+B(r%60,2)}const V=(n,e)=>{switch(n){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},K=(n,e)=>{switch(n){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},Z={p:K,P:(n,e)=>{const t=n.match(/(P+)(p+)?/)||[],r=t[1],a=t[2];if(!a)return V(n,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",V(r,e)).replace("{{time}}",K(a,e))}},nn=/^D+$/,en=/^Y+$/,tn=["D","DD","YY","YYYY"];function rn(n){return!(!((e=n)instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e))&&"number"!=typeof n||isNaN(+q(n)));var e}const an=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,on=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,sn=/^'([^]*?)'?$/,cn=/''/g,un=/[a-zA-Z]/;function dn(n){const e=n.match(sn);return e?e[1].replace(cn,"'"):n}let ln=JSON.parse(localStorage.getItem("task"))||[];function mn(n){const e=document.createElement("div");return e.classList.add("task-container"),n.forEach(((t,r)=>{const a=document.createElement("div"),o=document.createElement("p");o.textContent=t._title,a.appendChild(o);const i=document.createElement("p");i.textContent=t._description,a.appendChild(i);const s=document.createElement("p");let c=new Date(t._dueDate);c=function(n,e,t){const r=W(),a=t?.locale??r.locale??D,o=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=q(n,t?.in);if(!rn(s))throw new RangeError("Invalid time value");let c=e.match(on).map((n=>{const e=n[0];return"p"===e||"P"===e?(0,Z[e])(n,a.formatLong):n})).join("").match(an).map((n=>{if("''"===n)return{isToken:!1,value:"'"};const e=n[0];if("'"===e)return{isToken:!1,value:dn(n)};if(_[e])return{isToken:!0,value:n};if(e.match(un))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:n}}));a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const u={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return c.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!t?.useAdditionalWeekYearTokens&&function(n){return en.test(n)}(o)||!t?.useAdditionalDayOfYearTokens&&function(n){return nn.test(n)}(o))&&function(n,e,t){const r=function(n,e,t){const r="Y"===n[0]?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${e}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(n,e,t);if(console.warn(r),tn.includes(n))throw new RangeError(r)}(o,e,String(n)),(0,_[o[0]])(s,o,a.localize,u)})).join("")}(function(n,e,t){const r=q(n,t?.in);return isNaN(e)?F(t?.in||n,NaN):e?(r.setDate(r.getDate()+e),r):r}(c,1),"MMM d"),s.textContent=c,a.appendChild(s);const u=document.createElement("p");u.textContent=t._priority,"very-important"==t._priority&&(u.textContent="Very important"),a.appendChild(u);const d=document.createElement("button");d.textContent="Task Completed",a.appendChild(d),d.addEventListener("click",(()=>{n.splice(r,1),localStorage.setItem("task",JSON.stringify(n)),a.remove()})),e.appendChild(a)})),e}const hn=document.querySelector("#content");(()=>{hn.appendChild((()=>{const n=document.createElement("div"),e=document.createElement("h1");e.textContent="Today Tasks",n.appendChild(e);const t=document.createElement("div");t.id="site-container",n.appendChild(t);const r=document.createElement("div");return r.id="task-section",t.appendChild(function(){const n=document.createElement("div");return n.innerHTML='\n    <form id="task-form">\n        <div class="form-label">\n            <input type="text" name="title-task" placeholder="Title" id="title-task required">\n        </div>\n\n        <div class="form-label">\n            <input type="text" name="description-task" placeholder="Description" id="description-task required">\n        </div>\n\n        <div class="form-label">\n            <input type="date" name="duedate-task" id="duedate-task" required>\n        </div>\n\n        <div class="form-label">\n            <select name="priority-task" id="priority-task" required>\n                <option value="" selected disabled>Select Priority...</option>\n                <option value="normal">Normal</option>\n                <option value="important">Important</option>\n                <option value="very-important">Very important</option>\n            </select>\n        </div>\n\n        <div class="form-label">\n            <input type="submit" value="Add Task" id="add-task">\n        </div>\n    </form>\n    ',n}()).appendChild(r),n})());const n=document.querySelector("#task-section");n&&n.appendChild(mn(ln));const e=document.querySelector("#task-form");e.addEventListener("submit",(n=>{n.preventDefault(),(n=>{if(n){let e;e=new FormData(n),e=Object.fromEntries(e);const t=document.querySelector("#task-section");t&&t.appendChild(function(n){const e=document.querySelector("#task-section");e&&(e.innerHTML="");let t=new y(n["title-task"],n["description-task"],n["duedate-task"],n["priority-task"]);return ln.push(t),localStorage.setItem("task",JSON.stringify(ln)),mn(ln)}(e))}})(e)}))})()})();