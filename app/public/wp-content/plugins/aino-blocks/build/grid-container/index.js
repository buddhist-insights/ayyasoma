(()=>{var e,t={5072:(e,t,r)=>{"use strict";const n=window.wp.blocks,o=window.wp.i18n,l=window.wp.element;var a=r(4184),i=r.n(a);const c=window.wp.blockEditor,s=[{save(e){let{attributes:t}=e;const{columnGap:r}=t,n=i()("wp-block-ainoblocks-grid-container__inner",{}),o=i()(i(),r),a=c.useBlockProps.save({className:o});return(0,l.createElement)("div",a,(0,l.createElement)("div",{className:n},(0,l.createElement)(c.InnerBlocks.Content,null)))}}],{SVG:u}=wp.components,p=(0,l.createElement)(u,{className:"components-ainoblocks-svg","aria-hidden":!0,role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},(0,l.createElement)("path",{fill:"#f13b7d",d:"M4 0h-4v24h4v-24z"}),(0,l.createElement)("path",{fill:"#f13b7d",d:"M22 0h-4v24h4v-24z"}),(0,l.createElement)("path",{fill:"#f13b7d",d:"M12 0h4v24h-4v-24z"}),(0,l.createElement)("path",{fill:"#f13b7d",d:"M10 0h-4v24h4v-24z"}));var v=r(9588),f=r.n(v),b=r(8913),d=r.n(b);const g=window.wp.components,h=["ainoblocks/grid-item"],m=f()((e=>d()(e,(()=>["ainoblocks/grid-item"])))),x=JSON.parse('{"u2":"ainoblocks/grid-container"}');(0,n.registerBlockType)(x.u2,{icon:p,edit:function(e){let{attributes:t,setAttributes:r,className:n}=e;const{align:a,items:s,columnGap:u}=t,p=[{value:"col-gap-none",label:(0,o.__)("none","ainoblocks")},{value:"col-gap-s",label:(0,o.__)("S","ainoblocks")},{value:"col-gap-m",label:(0,o.__)("M","ainoblocks")},{value:"col-gap-l",label:(0,o.__)("L","ainoblocks")},{value:"col-gap-xl",label:(0,o.__)("XL","ainoblocks")}],v=i()(n,"ab-grid-block",`align${a}`,u),f=(0,c.useBlockProps)({className:v}),b=(0,c.useInnerBlocksProps)(f,{allowedBlocks:h,template:m(s),templateLock:!1,templateInsertUpdatesSelection:!0});return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(c.InspectorControls,null,(0,l.createElement)(g.PanelBody,{title:(0,o.__)("Gap","ainoblocks")},(0,l.createElement)(g.SelectControl,{label:(0,o.__)("Column Gap","ainoblocks"),value:u,options:p,onChange:e=>r({columnGap:e})}))),(0,l.createElement)("div",b))},save:function(e){let{attributes:t}=e;const{columnGap:r}=t,n=i()(i(),"ab-grid-block",r),o=c.useBlockProps.save({className:n}),a=c.useInnerBlocksProps.save(o);return(0,l.createElement)("div",a)},deprecated:s})},4184:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===l)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},2705:(e,t,r)=>{var n=r(5639).Symbol;e.exports=n},4239:(e,t,r)=>{var n=r(2705),o=r(9607),l=r(2333),a=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):l(e)}},2545:e=>{e.exports=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}},7561:(e,t,r)=>{var n=r(7990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(o,""):e}},4290:(e,t,r)=>{var n=r(6557);e.exports=function(e){return"function"==typeof e?e:n}},1957:(e,t,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},9607:(e,t,r)=>{var n=r(2705),o=Object.prototype,l=o.hasOwnProperty,a=o.toString,i=n?n.toStringTag:void 0;e.exports=function(e){var t=l.call(e,i),r=e[i];try{e[i]=void 0;var n=!0}catch(e){}var o=a.call(e);return n&&(t?e[i]=r:delete e[i]),o}},2333:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:(e,t,r)=>{var n=r(1957),o="object"==typeof self&&self&&self.Object===Object&&self,l=n||o||Function("return this")();e.exports=l},7990:e=>{var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},6557:e=>{e.exports=function(e){return e}},3218:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},3448:(e,t,r)=>{var n=r(4239),o=r(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==n(e)}},8913:(e,t,r)=>{var n=r(2545),o=r(4290),l=r(554),a=4294967295,i=Math.min;e.exports=function(e,t){if((e=l(e))<1||e>9007199254740991)return[];var r=a,c=i(e,a);t=o(t),e-=a;for(var s=n(c,t);++r<e;)t(r);return s}},8601:(e,t,r)=>{var n=r(4841);e.exports=function(e){return e?Infinity===(e=n(e))||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},554:(e,t,r)=>{var n=r(8601);e.exports=function(e){var t=n(e),r=t%1;return t==t?r?t-r:t:0}},4841:(e,t,r)=>{var n=r(7561),o=r(3218),l=r(3448),a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(l(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=i.test(e);return r||c.test(e)?s(e.slice(2),r?2:8):a.test(e)?NaN:+e}},9588:e=>{e.exports=function(e,t){var r,n,o=0;function l(){var l,a,i=r,c=arguments.length;e:for(;i;){if(i.args.length===arguments.length){for(a=0;a<c;a++)if(i.args[a]!==arguments[a]){i=i.next;continue e}return i!==r&&(i===n&&(n=i.prev),i.prev.next=i.next,i.next&&(i.next.prev=i.prev),i.next=r,i.prev=null,r.prev=i,r=i),i.val}i=i.next}for(l=new Array(c),a=0;a<c;a++)l[a]=arguments[a];return i={args:l,val:e.apply(null,l)},r?(r.prev=i,i.next=r):n=i,o===t.maxSize?(n=n.prev).next=null:o++,r=i,i.val}return t=t||{},l.clear=function(){r=null,n=null,o=0},l}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=(t,r,o,l)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){for(var[r,o,l]=e[u],i=!0,c=0;c<r.length;c++)(!1&l||a>=l)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(i=!1,l<a&&(a=l));if(i){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[r,o,l]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={173:0,986:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,l,[a,i,c]=r,s=0;if(a.some((t=>0!==e[t]))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var u=c(n)}for(t&&t(r);s<a.length;s++)l=a[s],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(u)},r=globalThis.webpackChunkainoblocks=globalThis.webpackChunkainoblocks||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[986],(()=>n(5072)));o=n.O(o)})();