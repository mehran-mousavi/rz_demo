"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[855],{9525:function(e,t,n){n.d(t,{NI:function(){return S},Rz:function(){return F},YF:function(){return k},aN:function(){return w}});var r,l=n(3794),u=n(9967),o=n(6674),c=n(2515),i=n(9778),f=n(6895),s=n(7073);let a={...r||(r=n.t(l,2))},m=a.useInsertionEffect||(e=>e());function g(e){let t=l.useRef(()=>{});return m(()=>{t.current=e}),l.useCallback(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)},[])}var d="undefined"!=typeof document?l.useLayoutEffect:l.useEffect;let p=!1,h=0,v=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+h++,C=a.useId||function(){let[e,t]=l.useState(()=>p?v():void 0);return d(()=>{null==e&&t(v())},[]),l.useEffect(()=>{p=!0},[]),e},y=l.createContext(null),M=l.createContext(null),R=()=>{var e;return(null==(e=l.useContext(y))?void 0:e.id)||null},b=()=>l.useContext(M);function k(e){void 0===e&&(e={});let{nodeId:t}=e,n=function(e){let{open:t=!1,onOpenChange:n,elements:r}=e,u=C(),o=l.useRef({}),[c]=l.useState(()=>(function(){let e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach(e=>e(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter(e=>e!==n))||[])}}})()),i=null!=R(),[f,s]=l.useState(r.reference),a=g((e,t,r)=>{o.current.openEvent=e?t:void 0,c.emit("openchange",{open:e,event:t,reason:r,nested:i}),null==n||n(e,t,r)}),m=l.useMemo(()=>({setPositionReference:s}),[]),d=l.useMemo(()=>({reference:f||r.reference||null,floating:r.floating||null,domReference:r.reference}),[f,r.reference,r.floating]);return l.useMemo(()=>({dataRef:o,open:t,onOpenChange:a,elements:d,events:c,floatingId:u,refs:m}),[t,a,d,c,u,m])}({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||n,u=r.elements,[o,i]=l.useState(null),[s,a]=l.useState(null),m=(null==u?void 0:u.reference)||o,p=l.useRef(null),h=b();d(()=>{m&&(p.current=m)},[m]);let v=(0,f.YF)({...e,elements:{...u,...s&&{reference:s}}}),y=l.useCallback(e=>{let t=(0,c.kK)(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;a(t),v.refs.setReference(t)},[v.refs]),M=l.useCallback(e=>{((0,c.kK)(e)||null===e)&&(p.current=e,i(e)),((0,c.kK)(v.refs.reference.current)||null===v.refs.reference.current||null!==e&&!(0,c.kK)(e))&&v.refs.setReference(e)},[v.refs]),k=l.useMemo(()=>({...v.refs,setReference:M,setPositionReference:y,domReference:p}),[v.refs,M,y]),x=l.useMemo(()=>({...v.elements,domReference:m}),[v.elements,m]),E=l.useMemo(()=>({...v,...r,refs:k,elements:x,nodeId:t}),[v,k,x,t,r]);return d(()=>{r.dataRef.current.floatingContext=E;let e=null==h?void 0:h.nodesRef.current.find(e=>e.id===t);e&&(e.context=E)}),l.useMemo(()=>({...v,context:E,refs:k,elements:x}),[v,k,x,E])}let x="active",E="selected";function H(e,t,n){let r=new Map,l="item"===n,u=e;if(l&&e){let{[x]:t,[E]:n,...r}=e;u=r}return{..."floating"===n&&{tabIndex:-1,"data-floating-ui-focusable":""},...u,...t.map(t=>{let r=t?t[n]:null;return"function"==typeof r?e?r(e):null:r}).concat(e).reduce((e,t)=>(t&&Object.entries(t).forEach(t=>{let[n,u]=t;if(!(l&&[x,E].includes(n))){if(0===n.indexOf("on")){if(r.has(n)||r.set(n,[]),"function"==typeof u){var o;null==(o=r.get(n))||o.push(u),e[n]=function(){for(var e,t=arguments.length,l=Array(t),u=0;u<t;u++)l[u]=arguments[u];return null==(e=r.get(n))?void 0:e.map(e=>e(...l)).find(e=>void 0!==e)}}}else e[n]=u}}),e),{})}}function S(e){void 0===e&&(e=[]);let t=e.map(e=>null==e?void 0:e.reference),n=e.map(e=>null==e?void 0:e.floating),r=e.map(e=>null==e?void 0:e.item),u=l.useCallback(t=>H(t,e,"reference"),t),o=l.useCallback(t=>H(t,e,"floating"),n),c=l.useCallback(t=>H(t,e,"item"),r);return l.useMemo(()=>({getReferenceProps:u,getFloatingProps:o,getItemProps:c}),[u,o,c])}function T(e,t){return{...e,rects:{...e.rects,floating:{...e.rects.floating,height:t}}}}let w=e=>({name:"inner",options:e,async fn(t){let{listRef:n,overflowRef:r,onFallbackChange:l,offset:u=0,index:c=0,minItemsVisible:a=4,referenceOverflowThreshold:m=0,scrollRef:g,...d}=(0,o.ku)(e,t),{rects:p,elements:{floating:h}}=t,v=n.current[c],C=(null==g?void 0:g.current)||h,y=h.clientTop||C.clientTop,M=0!==h.clientTop,R=0!==C.clientTop,b=h===C;if(!v)return{};let k={...t,...await (0,f.cv)(-v.offsetTop-h.clientTop-p.reference.height/2-v.offsetHeight/2-u).fn(t)},x=await (0,s.US)(T(k,C.scrollHeight+y+h.clientTop),d),E=await (0,s.US)(k,{...d,elementContext:"reference"}),H=(0,o.Fp)(0,x.top),S=k.y+H,w=C.scrollHeight>C.clientHeight,F=(w?e=>e:o.NM)((0,o.Fp)(0,C.scrollHeight+(M&&b||R?2*y:0)-H-(0,o.Fp)(0,x.bottom)));if(C.style.maxHeight=F+"px",C.scrollTop=H,l){let e=w&&C.offsetHeight<v.offsetHeight*a-1||E.top>=-m||E.bottom>=-m;i.flushSync(()=>l(e))}return r&&(r.current=await (0,s.US)(T({...k,y:S},C.offsetHeight+y+h.clientTop),d)),{y:S}}});function F(e,t){let{open:n,elements:r}=e,{enabled:o=!0,overflowRef:c,scrollRef:f,onChange:s}=t,a=g(s),m=l.useRef(!1),d=l.useRef(null),p=l.useRef(null);l.useEffect(()=>{if(!o)return;function e(e){if(e.ctrlKey||!t||null==c.current)return;let n=e.deltaY,r=c.current.top>=-.5,l=c.current.bottom>=-.5,o=t.scrollHeight-t.clientHeight,f=n<0?-1:1,s=n<0?"max":"min";!(t.scrollHeight<=t.clientHeight)&&(!r&&n>0||!l&&n<0?(e.preventDefault(),i.flushSync(()=>{a(e=>e+Math[s](n,o*f))})):/firefox/i.test((0,u.ij)())&&(t.scrollTop+=n))}let t=(null==f?void 0:f.current)||r.floating;if(n&&t)return t.addEventListener("wheel",e),requestAnimationFrame(()=>{d.current=t.scrollTop,null!=c.current&&(p.current={...c.current})}),()=>{d.current=null,p.current=null,t.removeEventListener("wheel",e)}},[o,n,r.floating,c,f,a]);let h=l.useMemo(()=>({onKeyDown(){m.current=!0},onWheel(){m.current=!1},onPointerMove(){m.current=!1},onScroll(){let e=(null==f?void 0:f.current)||r.floating;if(c.current&&e&&m.current){if(null!==d.current){let t=e.scrollTop-d.current;(c.current.bottom<-.5&&t<-1||c.current.top<-.5&&t>1)&&i.flushSync(()=>a(e=>e+t))}requestAnimationFrame(()=>{d.current=e.scrollTop})}}}),[r.floating,a,c,f]);return l.useMemo(()=>o?{floating:h}:{},[o,h])}}}]);