(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1946:function(e,t,r){Promise.resolve().then(r.t.bind(r,6476,23)),Promise.resolve().then(r.t.bind(r,4026,23)),Promise.resolve().then(r.bind(r,3981)),Promise.resolve().then(r.bind(r,4876)),Promise.resolve().then(r.bind(r,4329)),Promise.resolve().then(r.bind(r,8065))},4876:function(e,t,r){"use strict";r.r(t);var a=r(9268);let o=e=>{let{children:t}=e;return(0,a.jsx)("div",{className:"max-w-screen-lg mx-auto xl:px-20 md:px-10 sm:px-2 px-4",children:t})};t.default=o},8065:function(e,t,r){"use strict";r.r(t);var a=r(9268),o=r(9),i=r(3380),s=r(296),n=r(6006),l=r(6008);let c=()=>{let e=(0,l.usePathname)();console.log(e);let[t,r]=(0,n.useState)(!1),c=[{id:1,route:"home"},{id:2,route:"about"},{id:3,route:"projects"}];return(0,a.jsxs)("div",{children:["/gallery.html"==e?(0,a.jsx)("ul",{className:"hidden md:flex",children:(0,a.jsx)("li",{className:"px-4 z-10 capitalize font-medium text-gray-500 hover:scale-105 duration-200 cursor-pointer",children:(0,a.jsx)("a",{href:"/",children:"Back"})})}):(0,a.jsxs)("ul",{className:"hidden md:flex",children:[c.map(e=>{let{id:t,route:r}=e;return(0,a.jsx)("li",{className:"px-4 z-10 capitalize font-medium text-gray-500 hover:scale-105 duration-200 cursor-pointer",children:(0,a.jsx)(s.rU,{to:r,smooth:"easeInOutCubic",duration:500,children:r})},t)}),(0,a.jsx)("li",{className:"px-4 z-10 capitalize font-medium text-gray-500 hover:scale-105 duration-200 cursor-pointer",children:(0,a.jsx)("a",{href:"/gallery.html",children:"Gallery"})})]}),(0,a.jsx)("div",{onClick:()=>r(!t),className:"pr-4 cursor-pointer text-gray-800 hover:scale-105 duration-200 md:hidden",children:t?(0,a.jsx)(i.G,{icon:o.WA2}):(0,a.jsx)(i.G,{icon:o.xiG})}),t&&(0,a.jsxs)("ul",{className:"flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-slate-100 text-gray-500 duration-200",children:[c.map(e=>{let{id:o,route:i}=e;return(0,a.jsx)("li",{className:"px-4 cursor-pointer capitalize py-6 text-xl hover:scale-105 duration-200",children:(0,a.jsx)(s.rU,{onClick:()=>r(!t),to:i,smooth:"easeInOutCubic",offset:-50,duration:500,children:i})},o)}),(0,a.jsx)("li",{onClick:()=>r(!t),className:"cursor-pointer hover:scale-105 duration-200",children:(0,a.jsx)(i.G,{icon:o.WA2})})]})]})};t.default=c},4329:function(e,t,r){"use strict";r.r(t);var a=r(9268),o=r(6008);let i=()=>((0,o.useRouter)(),(0,a.jsxs)("div",{className:"text text-lg font-bold cursor-default",children:["thinesjs ",String.fromCodePoint(Number("0x1F3C2"))]}));t.default=i},3981:function(e,t,r){"use strict";let a,o;r.r(t),r.d(t,{default:function(){return en}});var i,s=r(9268),n=r(6006);let l={data:""},c=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||l,d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,u=/\/\*[^]*?\*\/|  +/g,p=/\n+/g,f=(e,t)=>{let r="",a="",o="";for(let i in e){let s=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+s+";":a+="f"==i[1]?f(s,i):i+"{"+f(s,"k"==i[1]?"":t)+"}":"object"==typeof s?a+=f(s,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=s&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=f.p?f.p(i,s):i+":"+s+";")}return r+(t&&o?t+"{"+o+"}":o)+a},m={},h=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+h(e[r]);return t}return e},y=(e,t,r,a,o)=>{var i,s;let n=h(e),l=m[n]||(m[n]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(n));if(!m[l]){let t=n!==e?e:(e=>{let t,r,a=[{}];for(;t=d.exec(e.replace(u,""));)t[4]?a.shift():t[3]?(r=t[3].replace(p," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(p," ").trim();return a[0]})(e);m[l]=f(o?{["@keyframes "+l]:t}:t,r?"":"."+l)}let c=r&&m.g?m.g:null;return r&&(m.g=m[l]),i=m[l],s=t,c?s.data=s.data.replace(c,i):-1===s.data.indexOf(i)&&(s.data=a?i+s.data:s.data+i),l},x=(e,t,r)=>e.reduce((e,a,o)=>{let i=t[o];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":f(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"");function g(e){let t=this||{},r=e.call?e(t.p):e;return y(r.unshift?r.raw?x(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,c(t.target),t.g,t.o,t.k)}g.bind({g:1});let b,v,w,j=g.bind({k:1});function _(e,t){let r=this||{};return function(){let a=arguments;function o(i,s){let n=Object.assign({},i),l=n.className||o.className;r.p=Object.assign({theme:v&&v()},n),r.o=/ *go\d+/.test(l),n.className=g.apply(r,a)+(l?" "+l:""),t&&(n.ref=s);let c=e;return e[0]&&(c=n.as||e,delete n.as),w&&c[0]&&w(n),b(c,n)}return t?t(o):o}}var E=e=>"function"==typeof e,N=(e,t)=>E(e)?e(t):e,k=(a=0,()=>(++a).toString()),O=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},C=new Map,$=e=>{if(C.has(e))return;let t=setTimeout(()=>{C.delete(e),S({type:4,toastId:e})},1e3);C.set(e,t)},P=e=>{let t=C.get(e);t&&clearTimeout(t)},z=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&P(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?z(e,{type:1,toast:r}):z(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?$(a):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},I=[],A={toasts:[],pausedAt:void 0},S=e=>{A=z(A,e),I.forEach(e=>{e(A)})},D={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},F=(e={})=>{let[t,r]=(0,n.useState)(A);(0,n.useEffect)(()=>(I.push(r),()=>{let e=I.indexOf(r);e>-1&&I.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||D[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},T=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||k()}),L=e=>(t,r)=>{let a=T(t,e,r);return S({type:2,toast:a}),a.id},R=(e,t)=>L("blank")(e,t);R.error=L("error"),R.success=L("success"),R.loading=L("loading"),R.custom=L("custom"),R.dismiss=e=>{S({type:3,toastId:e})},R.remove=e=>S({type:4,toastId:e}),R.promise=(e,t,r)=>{let a=R.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(R.success(N(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{R.error(N(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var M=(e,t)=>{S({type:1,toast:{id:e,height:t}})},U=()=>{S({type:5,time:Date.now()})},G=e=>{let{toasts:t,pausedAt:r}=F(e);(0,n.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&R.dismiss(t.id);return}return setTimeout(()=>R.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,n.useCallback)(()=>{r&&S({type:6,time:Date.now()})},[r]),o=(0,n.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:o=8,defaultPosition:i}=r||{},s=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=s.findIndex(t=>t.id===e.id),l=s.filter((e,t)=>t<n&&e.visible).length;return s.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return{toasts:t,handlers:{updateHeight:M,startPause:U,endPause:a,calculateOffset:o}}},H=_("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${j`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${j`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,B=_("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${j`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,W=_("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${j`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Y=_("div")`
  position: absolute;
`,q=_("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Z=_("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${j`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,J=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?n.createElement(Z,null,t):t:"blank"===r?null:n.createElement(q,null,n.createElement(B,{...a}),"loading"!==r&&n.createElement(Y,null,"error"===r?n.createElement(H,{...a}):n.createElement(W,{...a})))},K=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Q=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,V=_("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,X=_("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ee=(e,t)=>{let r=e.includes("top")?1:-1,[a,o]=O()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[K(r),Q(r)];return{animation:t?`${j(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},et=n.memo(({toast:e,position:t,style:r,children:a})=>{let o=e.height?ee(e.position||t||"top-center",e.visible):{opacity:0},i=n.createElement(J,{toast:e}),s=n.createElement(X,{...e.ariaProps},N(e.message,e));return n.createElement(V,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof a?a({icon:i,message:s}):n.createElement(n.Fragment,null,i,s))});i=n.createElement,f.p=void 0,b=i,v=void 0,w=void 0;var er=({id:e,className:t,style:r,onHeightUpdate:a,children:o})=>{let i=n.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return n.createElement("div",{ref:i,className:t,style:r},o)},ea=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:O()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},eo=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ei=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:o,containerStyle:i,containerClassName:s})=>{let{toasts:l,handlers:c}=G(r);return n.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(r=>{let i=r.position||t,s=ea(i,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return n.createElement(er,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?eo:"",style:s},"custom"===r.type?N(r.message,r):o?o(r):n.createElement(et,{toast:r,position:i}))}))};let es=()=>(0,s.jsx)(ei,{});var en=es},4026:function(){},6476:function(e){e.exports={style:{fontFamily:"'__Inter_0ec1f4', '__Inter_Fallback_0ec1f4'",fontStyle:"normal"},className:"__className_0ec1f4"}},3177:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=r(6006),o=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var a,l={},c=null,d=null;for(a in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,a)&&!n.hasOwnProperty(a)&&(l[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===l[a]&&(l[a]=t[a]);return{$$typeof:o,type:e,key:c,ref:d,props:l,_owner:s.current}}t.jsx=l,t.jsxs=l},9268:function(e,t,r){"use strict";e.exports=r(3177)},6008:function(e,t,r){e.exports=r(167)}},function(e){e.O(0,[626,628,667,139,744],function(){return e(e.s=1946)}),_N_E=e.O()}]);