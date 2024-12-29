(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[214],{1373:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var a=r(7294);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=(...e)=>e.filter((e,t,r)=>Boolean(e)&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,a.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:n="",children:l,iconNode:c,...d},p)=>(0,a.createElement)("svg",{ref:p,...i,width:t,height:t,stroke:e,strokeWidth:o?24*Number(r)/Number(t):r,className:s("lucide",n),...d},[...c.map(([e,t])=>(0,a.createElement)(e,t)),...Array.isArray(l)?l:[l]])),l=(e,t)=>{let r=(0,a.forwardRef)(({className:r,...i},l)=>(0,a.createElement)(n,{ref:l,iconNode:t,className:s(`lucide-${o(e)}`,r),...i}));return r.displayName=`${e}`,r}},2448:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(1373);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,a.Z)("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]])},3718:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(1373);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,a.Z)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]])},8140:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/ProjectManager",function(){return r(9046)}])},9046:function(e,t,r){"use strict";r.r(t);var a=r(5893),o=r(7294),s=r(2448),i=r(3718),n=r(6501);let l=e=>{let{token:t}=e,[r,l]=(0,o.useState)([]),[c,d]=(0,o.useState)({name:"",url:"",repo:"",img:"",year:"",tags:""}),[p,u]=(0,o.useState)(!1),[m,f]=(0,o.useState)(null),[g,h]=(0,o.useState)(!1),y=async()=>{try{let e=await fetch("https://portfolio-dnjj.vercel.app/projects",{headers:{Authorization:"Bearer ".concat(t)}});if(!e.ok)throw Error("Failed to fetch projects");let r=await e.json();l(r)}catch(a){n.Am.error("Failed to fetch projects")}};(0,o.useEffect)(()=>{t&&y()},[t]);let x=e=>{let{name:t,value:r}=e.target;d(e=>({...e,[t]:r}))},b=async e=>{e.preventDefault();let r={...c,tags:"string"==typeof c.tags?c.tags.split(",").map(e=>e.trim()):c.tags};try{let a=await fetch(p?"https://portfolio-dnjj.vercel.app/projects/".concat(m):"https://portfolio-dnjj.vercel.app/projects",{method:p?"PUT":"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(r)});if(!a.ok)throw Error("Failed to save project");n.Am.success(p?"Project updated successfully":"Project created successfully"),y(),w()}catch(o){n.Am.error(o.message)}},v=async e=>{if(window.confirm("Are you sure you want to delete this project?"))try{let r=await fetch("https://portfolio-dnjj.vercel.app/projects/".concat(e),{method:"DELETE",headers:{Authorization:"Bearer ".concat(t)}});if(!r.ok)throw Error("Failed to delete project");n.Am.success("Project deleted successfully"),y()}catch(a){n.Am.error(a.message)}},j=e=>{d({name:e.name,url:e.url,repo:e.repo,img:e.img||"",year:e.year,tags:Array.isArray(e.tags)?e.tags.join(", "):""}),f(e._id||null),u(!0),h(!0)},w=()=>{d({name:"",url:"",repo:"",img:"",year:"",tags:""}),u(!1),f(null),h(!1)};return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold",children:"Project Management"}),(0,a.jsx)("button",{onClick:()=>h(!g),className:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",children:g?"Hide Form":"Add New Project"})]}),g&&(0,a.jsxs)("form",{onSubmit:b,className:"mb-8 bg-white p-6 rounded-lg shadow-md",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,a.jsx)("input",{type:"text",name:"name",value:c.name,onChange:x,placeholder:"Project Name",className:"border p-2 rounded",required:!0}),(0,a.jsx)("input",{type:"url",name:"url",value:c.url,onChange:x,placeholder:"Project Live link",className:"border p-2 rounded",required:!0}),(0,a.jsx)("input",{type:"url",name:"repo",value:c.repo,onChange:x,placeholder:"Github Repository URL",className:"border p-2 rounded",required:!0}),(0,a.jsx)("input",{type:"url",name:"img",value:c.img,onChange:x,placeholder:"Cover Image URL (use unsplash.com/s3.amazonaws.com/imgbb.com)",className:"border p-2 rounded"}),(0,a.jsx)("input",{type:"text",name:"year",value:c.year,onChange:x,placeholder:"Year",className:"border p-2 rounded",required:!0}),(0,a.jsx)("input",{type:"text",name:"tags",value:c.tags,onChange:x,placeholder:"Technology (comma-separated) eg. React, Node.js, MongoDB",className:"border p-2 rounded",required:!0})]}),(0,a.jsxs)("div",{className:"mt-4 flex gap-2",children:[(0,a.jsx)("button",{type:"submit",className:"bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600",children:p?"Update Project":"Create Project"}),(0,a.jsx)("button",{type:"button",onClick:w,className:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600",children:"Cancel"})]})]}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:r.map(e=>(0,a.jsxs)("div",{className:"bg-white p-4 rounded-lg shadow-md",children:[(0,a.jsxs)("div",{className:"flex justify-between items-start mb-2",children:[(0,a.jsx)("h3",{className:"font-bold text-lg",children:e.name}),(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)("button",{onClick:()=>j(e),className:"text-blue-500 hover:text-blue-600",children:(0,a.jsx)(s.Z,{size:20})}),(0,a.jsx)("button",{onClick:()=>v(e._id),className:"text-red-500 hover:text-red-600",children:(0,a.jsx)(i.Z,{size:20})})]})]}),e.img&&(0,a.jsx)("img",{src:e.img,alt:e.name,className:"w-full h-40 object-cover rounded mb-2"}),(0,a.jsxs)("p",{className:"text-gray-600 text-sm mb-2",children:["Year: ",e.year]}),(0,a.jsx)("div",{className:"flex flex-wrap gap-1",children:Array.isArray(e.tags)&&e.tags.map((e,t)=>(0,a.jsx)("span",{className:"bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded",children:e},t))})]},e._id))})]})};t.default=l},6501:function(e,t,r){"use strict";let a,o;r.d(t,{Am:function(){return M}});var s,i=r(7294);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,p=/\n+/g,u=(e,t)=>{let r="",a="",o="";for(let s in e){let i=e[s];"@"==s[0]?"i"==s[1]?r=s+" "+i+";":a+="f"==s[1]?u(i,s):s+"{"+u(i,"k"==s[1]?"":t)+"}":"object"==typeof i?a+=u(i,t?t.replace(/([^,])+/g,e=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=i&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=u.p?u.p(s,i):s+":"+i+";")}return r+(t&&o?t+"{"+o+"}":o)+a},m={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},g=(e,t,r,a,o)=>{var s,i;let n=f(e),l=m[n]||(m[n]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(n));if(!m[l]){let g=n!==e?e:(e=>{let t,r,a=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(r=t[3].replace(p," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(p," ").trim();return a[0]})(e);m[l]=u(o?{["@keyframes "+l]:g}:g,r?"":"."+l)}let h=r&&m.g?m.g:null;return r&&(m.g=m[l]),s=m[l],i=t,h?i.data=i.data.replace(h,s):-1===i.data.indexOf(s)&&(i.data=a?s+i.data:i.data+s),l},h=(e,t,r)=>e.reduce((e,a,o)=>{let s=t[o];if(s&&s.call){let i=s(r),n=i&&i.props&&i.props.className||/^go/.test(i)&&i;s=n?"."+n:i&&"object"==typeof i?i.props?"":u(i,""):!1===i?"":i}return e+a+(null==s?"":s)},"");function y(e){let t=this||{},r=e.call?e(t.p):e;return g(r.unshift?r.raw?h(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let x,b,v,j=y.bind({k:1});function w(e,t){let r=this||{};return function(){let a=arguments;function o(s,i){let n=Object.assign({},s),l=n.className||o.className;r.p=Object.assign({theme:b&&b()},n),r.o=/ *go\d+/.test(l),n.className=y.apply(r,a)+(l?" "+l:""),t&&(n.ref=i);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),x(c,n)}return t?t(o):o}}var N=e=>"function"==typeof e,k=(e,t)=>N(e)?e(t):e,E=(a=0,()=>(++a).toString()),A=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},C=new Map,$=e=>{if(C.has(e))return;let t=setTimeout(()=>{C.delete(e),S({type:4,toastId:e})},1e3);C.set(e,t)},_=e=>{let t=C.get(e);t&&clearTimeout(t)},P=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&_(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?P(e,{type:1,toast:r}):P(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?$(a):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},z=[],T={toasts:[],pausedAt:void 0},S=e=>{T=P(T,e),z.forEach(e=>{e(T)})},F=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||E()}),L=e=>(t,r)=>{let a=F(t,e,r);return S({type:2,toast:a}),a.id},M=(e,t)=>L("blank")(e,t);M.error=L("error"),M.success=L("success"),M.loading=L("loading"),M.custom=L("custom"),M.dismiss=e=>{S({type:3,toastId:e})},M.remove=e=>S({type:4,toastId:e}),M.promise=(e,t,r)=>{let a=M.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(M.success(k(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{M.error(k(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var O=w("div")`
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
`,Z=w("div")`
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
`,D=w("div")`
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
`,I=w("div")`
  position: absolute;
`,q=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,B=w("div")`
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
`,R=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?i.createElement(B,null,t):t:"blank"===r?null:i.createElement(q,null,i.createElement(Z,{...a}),"loading"!==r&&i.createElement(I,null,"error"===r?i.createElement(O,{...a}):i.createElement(D,{...a})))},U=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,H=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,V=w("div")`
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
`,W=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let r=e.includes("top")?1:-1,[a,o]=A()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[U(r),H(r)];return{animation:t?`${j(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};i.memo(({toast:e,position:t,style:r,children:a})=>{let o=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},s=i.createElement(R,{toast:e}),n=i.createElement(W,{...e.ariaProps},k(e.message,e));return i.createElement(V,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof a?a({icon:s,message:n}):i.createElement(i.Fragment,null,s,n))}),s=i.createElement,u.p=void 0,x=s,b=void 0,v=void 0,y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8140)}),_N_E=e.O()}]);