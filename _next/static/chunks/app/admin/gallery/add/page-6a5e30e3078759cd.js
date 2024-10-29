(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22],{5238:function(e,t,s){Promise.resolve().then(s.bind(s,4170))},6431:function(e,t,s){"use strict";var a=s(6078);s.o(a,"usePathname")&&s.d(t,{usePathname:function(){return a.usePathname}}),s.o(a,"useRouter")&&s.d(t,{useRouter:function(){return a.useRouter}}),s.o(a,"useSearchParams")&&s.d(t,{useSearchParams:function(){return a.useSearchParams}})},4170:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return g}});var a=s(9073),i=s(3794),l=s(9487),r=s(9509),n=s(4512),c=s(7065),o=s(9619),d=s(6431);let m=(0,c.eI)(o.NF,o.QK);function g(){let e=(0,d.useRouter)(),[t,s]=(0,i.useState)(!1),[c,o]=(0,i.useState)(null),[g,u]=(0,i.useState)(null),[x,h]=(0,i.useState)([]),[p,f]=(0,i.useState)({name:"",code:"",category:"کابینت آشپزخانه"});(0,i.useEffect)(()=>()=>{c&&URL.revokeObjectURL(c)},[c]),(0,i.useEffect)(()=>()=>{x.forEach(e=>{e.preview&&URL.revokeObjectURL(e.preview)})},[x]);let v=e=>{let{name:t,value:s}=e.target;f(e=>({...e,[t]:s}))},y=e=>{h(t=>t.filter((t,s)=>s!==e))},b=async t=>{t.preventDefault(),s(!0);try{let t="";if(g){let e=g.name.split(".").pop(),s="".concat(Math.random(),".").concat(e),a="gallery/".concat(s),{error:i}=await m.storage.from("images").upload(a,g);if(i)throw i;let{data:{publicUrl:l}}=m.storage.from("images").getPublicUrl(a);t=l}let{data:s,error:a}=await m.from("gallery_items").insert({name:p.name,code:p.code,category:p.category,main_image:t}).select().single();if(a)throw a;if(s){let e=x.map(async e=>{let{file:t}=e,a=t.name.split(".").pop(),i="".concat(Math.random(),".").concat(a),l="gallery/".concat(i),{error:r}=await m.storage.from("images").upload(l,t);if(r)throw r;let{data:{publicUrl:n}}=m.storage.from("images").getPublicUrl(l);return m.from("gallery_images").insert({gallery_item_id:s.id,src:n})});await Promise.all(e)}e.push("/admin/gallery")}catch(e){console.error("Error:",e),alert("خطا در ذخیره سازی نمونه کار")}finally{s(!1)}};return(0,a.jsxs)("div",{className:"py-10",children:[(0,a.jsx)("header",{children:(0,a.jsx)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:(0,a.jsx)("h1",{className:"text-3xl font-bold leading-tight tracking-tight text-gray-900",children:"افزودن نمونه کار جدید"})})}),(0,a.jsx)("main",{children:(0,a.jsx)("div",{className:"mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8",children:(0,a.jsxs)("form",{onSubmit:b,className:"space-y-12 sm:space-y-16",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"اطلاعات نمونه کار"}),(0,a.jsxs)("div",{className:"mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0",children:[(0,a.jsxs)("div",{className:"sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6",children:[(0,a.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5",children:"نام نمونه کار"}),(0,a.jsx)("div",{className:"mt-2 sm:col-span-2 sm:mt-0",children:(0,a.jsx)("input",{type:"text",name:"name",id:"name",value:p.name,onChange:v,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"})})]}),(0,a.jsxs)("div",{className:"sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6",children:[(0,a.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5",children:"کد نمونه کار"}),(0,a.jsx)("div",{className:"mt-2 sm:col-span-2 sm:mt-0",children:(0,a.jsx)("input",{type:"text",name:"code",id:"code",value:p.code,onChange:v,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"})})]}),(0,a.jsxs)("div",{className:"sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6",children:[(0,a.jsx)("label",{htmlFor:"category",className:"block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5",children:"نوع پروژه"}),(0,a.jsx)("div",{className:"mt-2 sm:col-span-2 sm:mt-0",children:(0,a.jsx)("select",{id:"category",name:"category",value:p.category,onChange:v,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6",children:["کابینت آشپزخانه","کمد دیواری","میز تلویزیون","سرویس خواب","دکوراسیون داخلی","کتابخانه","میز تحریر","میز اداری"].map(e=>(0,a.jsx)("option",{value:e,children:e},e))})})]}),(0,a.jsxs)("div",{className:"sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6",children:[(0,a.jsx)("label",{htmlFor:"main-image",className:"block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5",children:"تصویر اصلی"}),(0,a.jsx)("div",{className:"mt-2 sm:col-span-2 sm:mt-0",children:(0,a.jsx)("div",{className:"flex max-w-2xl justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10",children:(0,a.jsxs)("div",{className:"text-center",children:[c?(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("img",{src:c,alt:"Preview",className:"mx-auto h-48 w-48 object-cover rounded-lg"}),(0,a.jsx)("button",{type:"button",onClick:()=>{u(null),o(null)},className:"absolute -top-2 -right-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}):(0,a.jsx)(l.Z,{className:"mx-auto h-12 w-12 text-gray-300","aria-hidden":"true"}),(0,a.jsx)("div",{className:"mt-4 flex justify-center text-sm leading-6 text-gray-600",children:(0,a.jsxs)("label",{htmlFor:"main-image-upload",className:"relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500",children:[(0,a.jsx)("span",{children:"آپلود تصویر اصلی"}),(0,a.jsx)("input",{id:"main-image-upload",name:"main-image-upload",type:"file",className:"sr-only",accept:"image/*",onChange:e=>{if(e.target.files&&e.target.files[0]){let t=e.target.files[0];u(t),o(URL.createObjectURL(t))}}})]})}),(0,a.jsx)("p",{className:"text-xs leading-5 text-gray-600",children:"PNG, JPG, GIF up to 10MB"})]})})})]}),(0,a.jsxs)("div",{className:"sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6",children:[(0,a.jsx)("label",{htmlFor:"additional-images",className:"block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5",children:"تصاویر بیشتر"}),(0,a.jsx)("div",{className:"mt-2 sm:col-span-2 sm:mt-0",children:(0,a.jsxs)("div",{className:"flex flex-col space-y-4",children:[x.length>0&&(0,a.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:x.map((e,t)=>(0,a.jsxs)("div",{className:"relative group",children:[(0,a.jsx)("img",{src:e.preview,alt:"Preview ".concat(t+1),className:"h-24 w-full object-cover rounded-lg"}),(0,a.jsx)("button",{type:"button",onClick:()=>y(t),className:"absolute -top-2 -right-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]},t))}),(0,a.jsx)("div",{className:"flex max-w-2xl justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10",children:(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)(l.Z,{className:"mx-auto h-12 w-12 text-gray-300","aria-hidden":"true"}),(0,a.jsx)("div",{className:"mt-4 flex justify-center text-sm leading-6 text-gray-600",children:(0,a.jsxs)("label",{htmlFor:"additional-images-upload",className:"relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500",children:[(0,a.jsx)("span",{children:"انتخاب تصاویر بیشتر"}),(0,a.jsx)("input",{id:"additional-images-upload",name:"additional-images-upload",type:"file",className:"sr-only",accept:"image/*",multiple:!0,onChange:e=>{if(e.target.files){let t=Array.from(e.target.files).map(e=>({file:e,preview:URL.createObjectURL(e)}));h(e=>[...e,...t])}}})]})}),(0,a.jsx)("p",{className:"mt-2 text-xs leading-5 text-gray-600",children:"می‌توانید چندین تصویر را همزمان انتخاب کنید"})]})})]})})]})]})]}),(0,a.jsxs)("div",{className:"mt-6 flex items-center justify-end gap-x-6",children:[(0,a.jsx)("button",{type:"button",onClick:()=>e.back(),className:"text-sm font-semibold leading-6 text-gray-900",children:"انصراف"}),(0,a.jsxs)("button",{type:"submit",disabled:t,className:"inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50",children:[t?"در حال ذخیره":"ایجاد نمونه کار",t?(0,a.jsx)(r.Z,{className:"h-5 w-5 animate-spin text-white mr-2"}):(0,a.jsx)(n.Z,{className:"h-5 w-5 text-white mr-2"})]})]})]})})})]})}},9619:function(e,t,s){"use strict";s.d(t,{NF:function(){return a},QK:function(){return i}}),s(677).env.NEXT_PUBLIC_SHOW_LOGGER;let a="https://aqcfdwrgshzjnadidamy.supabase.co",i="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxY2Zkd3Jnc2h6am5hZGlkYW15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAwNDI2MTgsImV4cCI6MjA0NTYxODYxOH0.mZHOBtLvEFGRU25Cx_wR3dkv0OH2SrV6CfqkCe9G5UU"},9509:function(e,t,s){"use strict";var a=s(3794);let i=a.forwardRef(function(e,t){let{title:s,titleId:i,...l}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},l),s?a.createElement("title",{id:i},s):null,a.createElement("path",{fillRule:"evenodd",d:"M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z",clipRule:"evenodd"}))});t.Z=i},4512:function(e,t,s){"use strict";var a=s(3794);let i=a.forwardRef(function(e,t){let{title:s,titleId:i,...l}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},l),s?a.createElement("title",{id:i},s):null,a.createElement("path",{d:"M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z"}),a.createElement("path",{d:"M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z"}),a.createElement("path",{d:"M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z"}),a.createElement("path",{d:"M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z"}))});t.Z=i},9487:function(e,t,s){"use strict";var a=s(3794);let i=a.forwardRef(function(e,t){let{title:s,titleId:i,...l}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},l),s?a.createElement("title",{id:i},s):null,a.createElement("path",{fillRule:"evenodd",d:"M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z",clipRule:"evenodd"}))});t.Z=i}},function(e){e.O(0,[547,355,102,744],function(){return e(e.s=5238)}),_N_E=e.O()}]);