(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[189],{3761:function(e,s,t){"use strict";t.d(s,{Z:function(){return l}});var a=t(1373);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,a.Z)("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]])},6330:function(e,s,t){"use strict";t.d(s,{Z:function(){return l}});var a=t(1373);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,a.Z)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]])},2599:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/dashboard",function(){return t(389)}])},1570:function(e,s,t){"use strict";t.r(s);var a=t(5893),l=t(7294);t(91);var r=t(6501),c=t(2448),o=t(3718),d=t(5152),i=t.n(d);let n=i()(()=>Promise.all([t.e(199),t.e(764),t.e(167)]).then(t.t.bind(t,1167,23)),{loadableGenerated:{webpack:()=>[1167]},ssr:!1}),m=e=>{let{token:s}=e,[t,d]=(0,l.useState)([]),[i,m]=(0,l.useState)({title:"",description:"",topic:"",img:"",readTime:""}),[h,u]=(0,l.useState)(!1),[x,p]=(0,l.useState)(null),[g,j]=(0,l.useState)(!1),b=async()=>{try{let e=await fetch("https://portfolio-dnjj.vercel.app/blogs",{headers:{Authorization:"Bearer ".concat(s)}});if(!e.ok)throw Error("Failed to fetch blogs");let t=await e.json();d(t)}catch(a){r.Am.error(a.message)}};(0,l.useEffect)(()=>{s&&b()},[s]);let f=e=>{let{name:s,value:t}=e.target;m(e=>({...e,[s]:t}))},y=e=>{m(s=>({...s,description:e}))},N=async e=>{e.preventDefault();try{let t=await fetch(h?"https://portfolio-dnjj.vercel.app/blogs/".concat(x):"https://portfolio-dnjj.vercel.app/blogs",{method:h?"PUT":"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s)},body:JSON.stringify(i)});if(!t.ok)throw Error("Failed to save blog");r.Am.success(h?"Blog updated successfully":"Blog created successfully"),m({title:"",description:"",topic:"",img:"",readTime:""}),p(null),u(!1),j(!1),b()}catch(a){r.Am.error(a.message)}},v=e=>{m(e),p(e._id||null),u(!0),j(!0)},w=async e=>{if(window.confirm("Are you sure you want to delete this blog?"))try{let t=await fetch("https://portfolio-dnjj.vercel.app/blogs/".concat(e),{method:"DELETE",headers:{Authorization:"Bearer ".concat(s)}});if(!t.ok)throw Error("Failed to delete blog");r.Am.success("Blog deleted successfully"),b()}catch(a){r.Am.error(a.message)}};return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold",children:"Blog Management"}),(0,a.jsx)("button",{onClick:()=>j(!g),className:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",children:g?"Hide Form":"Add New Blog"})]}),g&&(0,a.jsxs)("form",{onSubmit:N,className:"mb-8 bg-white p-6 rounded-lg shadow-md",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,a.jsx)("input",{type:"text",name:"title",value:i.title,onChange:f,placeholder:"Blog Title",className:"border p-2 rounded",required:!0}),(0,a.jsx)("input",{type:"text",name:"topic",value:i.topic,onChange:f,placeholder:"Topic eg. Web Development/technology/Self-improvement",className:"border p-2 rounded",required:!0}),(0,a.jsx)("input",{type:"url",name:"img",value:i.img,onChange:f,placeholder:"Image URL => use unsplash.com/s3.amazonaws.com/imgbb.com ",className:"border p-2 rounded",required:!0}),(0,a.jsx)("input",{type:"text",name:"readTime",value:i.readTime,onChange:f,placeholder:"Read Time eg. 5 mins",className:"border p-2 rounded",required:!0})]}),(0,a.jsx)(n,{value:i.description,onChange:y,className:"mt-4",placeholder:"Blog Description",modules:{toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{list:"ordered"},{list:"bullet"}],[{align:[]}],["bold","italic","underline","strike"],[{color:[]},{background:[]}],["link"],["blockquote","code-block"],["image"]]}}),(0,a.jsxs)("div",{className:"mt-4 flex gap-2",children:[(0,a.jsx)("button",{type:"submit",className:"bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600",children:h?"Update Blog":"Create Blog"}),(0,a.jsx)("button",{type:"button",onClick:()=>j(!1),className:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600",children:"Cancel"})]})]}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:t.map(e=>(0,a.jsxs)("div",{className:"bg-white p-4 rounded-lg shadow-md",children:[(0,a.jsxs)("div",{className:"flex justify-between items-start mb-2",children:[(0,a.jsx)("h3",{className:"font-bold text-lg",children:e.title}),(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)("button",{onClick:()=>v(e),className:"text-blue-500 hover:text-blue-600",children:(0,a.jsx)(c.Z,{size:20})}),(0,a.jsx)("button",{onClick:()=>w(e._id),className:"text-red-500 hover:text-red-600",children:(0,a.jsx)(o.Z,{size:20})})]})]}),(0,a.jsx)("img",{src:e.img,alt:e.title,className:"w-full h-40 object-cover rounded mb-2"}),(0,a.jsx)("p",{className:"text-gray-600 text-sm mb-2",children:e.topic}),(0,a.jsxs)("p",{className:"text-gray-600 text-sm mb-2",children:["Read Time: ",e.readTime]})]},e._id))})]})};s.default=m},9046:function(e,s,t){"use strict";t.r(s);var a=t(5893),l=t(7294),r=t(2448),c=t(3718),o=t(6501);let d=e=>{let{token:s}=e,[t,d]=(0,l.useState)([]),[i,n]=(0,l.useState)({name:"",url:"",repo:"",img:"",year:"",tags:""}),[m,h]=(0,l.useState)(!1),[u,x]=(0,l.useState)(null),[p,g]=(0,l.useState)(!1),j=async()=>{try{let e=await fetch("https://portfolio-dnjj.vercel.app/projects",{headers:{Authorization:"Bearer ".concat(s)}});if(!e.ok)throw Error("Failed to fetch projects");let t=await e.json();d(t)}catch(a){o.Am.error("Failed to fetch projects")}};(0,l.useEffect)(()=>{s&&j()},[s]);let b=e=>{let{name:s,value:t}=e.target;n(e=>({...e,[s]:t}))},f=async e=>{e.preventDefault();let t={...i,tags:"string"==typeof i.tags?i.tags.split(",").map(e=>e.trim()):i.tags};try{let a=await fetch(m?"https://portfolio-dnjj.vercel.app/projects/".concat(u):"https://portfolio-dnjj.vercel.app/projects",{method:m?"PUT":"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s)},body:JSON.stringify(t)});if(!a.ok)throw Error("Failed to save project");o.Am.success(m?"Project updated successfully":"Project created successfully"),j(),v()}catch(l){o.Am.error(l.message)}},y=async e=>{if(window.confirm("Are you sure you want to delete this project?"))try{let t=await fetch("https://portfolio-dnjj.vercel.app/projects/".concat(e),{method:"DELETE",headers:{Authorization:"Bearer ".concat(s)}});if(!t.ok)throw Error("Failed to delete project");o.Am.success("Project deleted successfully"),j()}catch(a){o.Am.error(a.message)}},N=e=>{n({name:e.name,url:e.url,repo:e.repo,img:e.img||"",year:e.year,tags:Array.isArray(e.tags)?e.tags.join(", "):""}),x(e._id||null),h(!0),g(!0)},v=()=>{n({name:"",url:"",repo:"",img:"",year:"",tags:""}),h(!1),x(null),g(!1)};return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold",children:"Project Management"}),(0,a.jsx)("button",{onClick:()=>g(!p),className:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",children:p?"Hide Form":"Add New Project"})]}),p&&(0,a.jsxs)("form",{onSubmit:f,className:"mb-8 bg-white p-6 rounded-lg shadow-md",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,a.jsx)("input",{type:"text",name:"name",value:i.name,onChange:b,placeholder:"Project Name",className:"border p-2 rounded",required:!0}),(0,a.jsx)("input",{type:"url",name:"url",value:i.url,onChange:b,placeholder:"Project Live link",className:"border p-2 rounded",required:!0}),(0,a.jsx)("input",{type:"url",name:"repo",value:i.repo,onChange:b,placeholder:"Github Repository URL",className:"border p-2 rounded",required:!0}),(0,a.jsx)("input",{type:"url",name:"img",value:i.img,onChange:b,placeholder:"Cover Image URL (use unsplash.com/s3.amazonaws.com/imgbb.com)",className:"border p-2 rounded"}),(0,a.jsx)("input",{type:"text",name:"year",value:i.year,onChange:b,placeholder:"Year",className:"border p-2 rounded",required:!0}),(0,a.jsx)("input",{type:"text",name:"tags",value:i.tags,onChange:b,placeholder:"Technology (comma-separated) eg. React, Node.js, MongoDB",className:"border p-2 rounded",required:!0})]}),(0,a.jsxs)("div",{className:"mt-4 flex gap-2",children:[(0,a.jsx)("button",{type:"submit",className:"bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600",children:m?"Update Project":"Create Project"}),(0,a.jsx)("button",{type:"button",onClick:v,className:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600",children:"Cancel"})]})]}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:t.map(e=>(0,a.jsxs)("div",{className:"bg-white p-4 rounded-lg shadow-md",children:[(0,a.jsxs)("div",{className:"flex justify-between items-start mb-2",children:[(0,a.jsx)("h3",{className:"font-bold text-lg",children:e.name}),(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)("button",{onClick:()=>N(e),className:"text-blue-500 hover:text-blue-600",children:(0,a.jsx)(r.Z,{size:20})}),(0,a.jsx)("button",{onClick:()=>y(e._id),className:"text-red-500 hover:text-red-600",children:(0,a.jsx)(c.Z,{size:20})})]})]}),e.img&&(0,a.jsx)("img",{src:e.img,alt:e.name,className:"w-full h-40 object-cover rounded mb-2"}),(0,a.jsxs)("p",{className:"text-gray-600 text-sm mb-2",children:["Year: ",e.year]}),(0,a.jsx)("div",{className:"flex flex-wrap gap-1",children:Array.isArray(e.tags)&&e.tags.map((e,s)=>(0,a.jsx)("span",{className:"bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded",children:e},s))})]},e._id))})]})};s.default=d},389:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return g}});var a=t(5893),l=t(7294),r=t(1373);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,r.Z)("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);var o=t(3761);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let d=(0,r.Z)("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]),i=(0,r.Z)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);var n=t(6330);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let m=(0,r.Z)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);t(91);var h=t(6501),u=t(1570),x=t(9046);let p=()=>{let[e,s]=(0,l.useState)(""),[t,r]=(0,l.useState)(!0),[p,g]=(0,l.useState)("dashboard"),[j,b]=(0,l.useState)([]),[f,y]=(0,l.useState)([]);(0,l.useEffect)(()=>{let e=localStorage.getItem("token");e&&s(e)},[]);let N=async()=>{try{let[s,t]=await Promise.all([fetch("https://portfolio-dnjj.vercel.app/blogs",{headers:{Authorization:"Bearer ".concat(e)}}),fetch("https://portfolio-dnjj.vercel.app/projects",{headers:{Authorization:"Bearer ".concat(e)}})]),a=await s.json(),l=await t.json();b(a),y(l)}catch(r){h.Am.error("Failed to fetch dashboard data")}};(0,l.useEffect)(()=>{e&&N()},[e]);let v=()=>{localStorage.removeItem("token"),s("")};return e?(0,a.jsxs)("div",{className:"flex h-screen bg-gray-50",children:[(0,a.jsxs)("div",{className:"fixed left-0 top-0 h-full bg-white transition-all duration-300 ".concat(t?"w-64":"w-20"," border-r shadow-sm"),children:[(0,a.jsxs)("div",{className:"flex h-16 items-center justify-between px-4",children:[(0,a.jsx)("h1",{className:"font-bold ".concat(t?"block":"hidden"),children:"Admin Panel"}),(0,a.jsx)("button",{className:"rounded-lg p-2 hover:bg-gray-100",onClick:()=>r(!t),children:(0,a.jsx)(i,{className:"h-6 w-6"})})]}),(0,a.jsxs)("nav",{className:"mt-8 px-4",children:[[{id:"dashboard",icon:n.Z,label:"Dashboard"},{id:"projects",icon:c,label:"Projects"},{id:"blogs",icon:o.Z,label:"Blogs"}].map(e=>(0,a.jsxs)("button",{className:"mb-2 flex w-full items-center rounded-lg px-4 py-2 transition-colors ".concat(p===e.id?"bg-blue-50 text-blue-600":"text-gray-600 hover:bg-gray-50"," ").concat(!t&&"justify-center px-0"),onClick:()=>g(e.id),children:[(0,a.jsx)(e.icon,{className:"h-5 w-5"}),t&&(0,a.jsx)("span",{className:"ml-2",children:e.label})]},e.id)),(0,a.jsxs)("button",{className:"mt-8 flex w-full items-center rounded-lg px-4 py-2 text-gray-600 transition-colors hover:bg-gray-50 ".concat(!t&&"justify-center px-0"),onClick:v,children:[(0,a.jsx)(m,{className:"h-5 w-5"}),t&&(0,a.jsx)("span",{className:"ml-2",children:"Logout"})]})]})]}),(0,a.jsxs)("div",{className:"flex-1 transition-all duration-300 ".concat(t?"ml-64":"ml-20"),children:[(0,a.jsx)("header",{className:"border-b bg-white px-8 py-4",children:(0,a.jsx)("h1",{className:"text-2xl font-bold",children:p.charAt(0).toUpperCase()+p.slice(1)})}),(0,a.jsx)("main",{className:"p-8",children:(()=>{switch(p){case"dashboard":return(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsxs)("div",{className:"grid gap-6 md:grid-cols-3",children:[(0,a.jsxs)("div",{className:"rounded-lg bg-white p-6 shadow-md",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-sm font-medium text-gray-500",children:"Total Projects"}),(0,a.jsx)("h3",{className:"text-2xl font-bold",children:f.length})]}),(0,a.jsx)("div",{className:"rounded-full bg-blue-100 p-3",children:(0,a.jsx)(c,{className:"h-6 w-6 text-blue-600"})})]}),(0,a.jsx)("div",{className:"mt-4",children:(0,a.jsx)("div",{className:"h-2 w-full rounded-full bg-blue-100",children:(0,a.jsx)("div",{className:"h-2 w-2/3 rounded-full bg-blue-500"})})})]}),(0,a.jsxs)("div",{className:"rounded-lg bg-white p-6 shadow-md",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-sm font-medium text-gray-500",children:"Total Blogs"}),(0,a.jsx)("h3",{className:"text-2xl font-bold",children:j.length})]}),(0,a.jsx)("div",{className:"rounded-full bg-green-100 p-3",children:(0,a.jsx)(o.Z,{className:"h-6 w-6 text-green-600"})})]}),(0,a.jsx)("div",{className:"mt-4",children:(0,a.jsx)("div",{className:"h-2 w-full rounded-full bg-green-100",children:(0,a.jsx)("div",{className:"h-2 w-3/4 rounded-full bg-green-500"})})})]}),(0,a.jsxs)("div",{className:"rounded-lg bg-white p-6 shadow-md",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-sm font-medium text-gray-500",children:"Activity Status"}),(0,a.jsx)("h3",{className:"text-2xl font-bold",children:"Active"})]}),(0,a.jsx)("div",{className:"rounded-full bg-purple-100 p-3",children:(0,a.jsx)(d,{className:"h-6 w-6 text-purple-600"})})]}),(0,a.jsx)("div",{className:"mt-4",children:(0,a.jsx)("div",{className:"h-2 w-full rounded-full bg-purple-100",children:(0,a.jsx)("div",{className:"h-2 w-5/6 rounded-full bg-purple-500"})})})]})]}),(0,a.jsxs)("div",{className:"grid gap-6 md:grid-cols-2",children:[(0,a.jsxs)("div",{className:"rounded-lg bg-white p-6 shadow-md",children:[(0,a.jsx)("h3",{className:"mb-4 text-lg font-semibold",children:"Recent Projects"}),(0,a.jsx)("div",{className:"space-y-4",children:f.slice(0,3).map(e=>(0,a.jsxs)("div",{className:"flex items-center gap-4 border-b pb-4",children:[(0,a.jsx)("img",{src:e.img||"/api/placeholder/100/100",alt:e.name,className:"h-12 w-12 rounded-lg object-cover"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:"font-medium",children:e.name}),(0,a.jsxs)("p",{className:"text-sm text-gray-500",children:["Year: ",e.year]})]})]},e._id))})]}),(0,a.jsxs)("div",{className:"rounded-lg bg-white p-6 shadow-md",children:[(0,a.jsx)("h3",{className:"mb-4 text-lg font-semibold",children:"Recent Blogs"}),(0,a.jsx)("div",{className:"space-y-4",children:j.slice(0,3).map(e=>(0,a.jsxs)("div",{className:"flex items-center gap-4 border-b pb-4",children:[(0,a.jsx)("img",{src:e.img||"/api/placeholder/100/100",alt:e.title,className:"h-12 w-12 rounded-lg object-cover"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:"font-medium",children:e.title}),(0,a.jsx)("p",{className:"text-sm text-gray-500",children:e.topic})]})]},e._id))})]})]})]});case"projects":return(0,a.jsx)(x.default,{token:e});case"blogs":return(0,a.jsx)(u.default,{token:e});default:return null}})()})]})]}):(0,a.jsx)("div",{className:"flex h-screen items-center justify-center bg-gray-50",children:(0,a.jsxs)("div",{className:"w-96 rounded-lg bg-white p-8 shadow-lg",children:[(0,a.jsxs)("div",{className:"mb-6 text-center",children:[(0,a.jsx)("h2",{className:"mb-2 text-2xl font-bold text-gray-900",children:"Welcome Back"}),(0,a.jsx)("p",{className:"text-gray-600",children:"Please log in to access the dashboard"})]}),(0,a.jsx)("button",{className:"w-full rounded-lg bg-blue-600 px-4 py-3 text-white transition-colors hover:bg-blue-700",children:(0,a.jsx)("a",{href:"/admin/login",children:"Login to Dashboard"})})]})})};var g=p}},function(e){e.O(0,[288,774,888,179],function(){return e(e.s=2599)}),_N_E=e.O()}]);