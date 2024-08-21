import{r as t,c as F,j as s}from"./index-B2s52UFk.js";import{u as z,f as L,M as U,a as S,P as G,L as D,m as B,C as M,N as V,F as W}from"./HeadingRichText-9DEk_FvG.js";import{H as _}from"./Hero-DtRlC-4E.js";function I(){const n=t.useRef(!1);return z(()=>(n.current=!0,()=>{n.current=!1}),[]),n}function q(){const n=I(),[e,r]=t.useState(0),o=t.useCallback(()=>{n.current&&r(e+1)},[e]);return[t.useCallback(()=>L.postRender(o),[o]),e]}class A extends t.Component{getSnapshotBeforeUpdate(e){const r=this.props.childRef.current;if(r&&e.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=r.offsetHeight||0,o.width=r.offsetWidth||0,o.top=r.offsetTop,o.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function J({children:n,isPresent:e}){const r=t.useId(),o=t.useRef(null),u=t.useRef({width:0,height:0,top:0,left:0}),{nonce:f}=t.useContext(U);return t.useInsertionEffect(()=>{const{width:m,height:c,top:h,left:x}=u.current;if(e||!o.current||!m||!c)return;o.current.dataset.motionPopId=r;const i=document.createElement("style");return f&&(i.nonce=f),document.head.appendChild(i),i.sheet&&i.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${c}px !important;
            top: ${h}px !important;
            left: ${x}px !important;
          }
        `),()=>{document.head.removeChild(i)}},[e]),t.createElement(A,{isPresent:e,childRef:o,sizeRef:u},t.cloneElement(n,{ref:o}))}const k=({children:n,initial:e,isPresent:r,onExitComplete:o,custom:u,presenceAffectsLayout:f,mode:m})=>{const c=S(Q),h=t.useId(),x=t.useMemo(()=>({id:h,initial:e,isPresent:r,custom:u,onExitComplete:i=>{c.set(i,!0);for(const l of c.values())if(!l)return;o&&o()},register:i=>(c.set(i,!1),()=>c.delete(i))}),f?void 0:[r]);return t.useMemo(()=>{c.forEach((i,l)=>c.set(l,!1))},[r]),t.useEffect(()=>{!r&&!c.size&&o&&o()},[r]),m==="popLayout"&&(n=t.createElement(J,{isPresent:r},n)),t.createElement(G.Provider,{value:x},n)};function Q(){return new Map}function X(n){return t.useEffect(()=>()=>n(),[])}const p=n=>n.key||"";function Y(n,e){n.forEach(r=>{const o=p(r);e.set(o,r)})}function Z(n){const e=[];return t.Children.forEach(n,r=>{t.isValidElement(r)&&e.push(r)}),e}const H=({children:n,custom:e,initial:r=!0,onExitComplete:o,exitBeforeEnter:u,presenceAffectsLayout:f=!0,mode:m="sync"})=>{const c=t.useContext(D).forceRender||q()[0],h=I(),x=Z(n);let i=x;const l=t.useRef(new Map).current,w=t.useRef(i),g=t.useRef(new Map).current,C=t.useRef(!0);if(z(()=>{C.current=!1,Y(x,g),w.current=i}),X(()=>{C.current=!0,g.clear(),l.clear()}),C.current)return t.createElement(t.Fragment,null,i.map(a=>t.createElement(k,{key:p(a),isPresent:!0,initial:r?void 0:!1,presenceAffectsLayout:f,mode:m},a)));i=[...i];const E=w.current.map(p),v=x.map(p),K=E.length;for(let a=0;a<K;a++){const d=E[a];v.indexOf(d)===-1&&!l.has(d)&&l.set(d,void 0)}return m==="wait"&&l.size&&(i=[]),l.forEach((a,d)=>{if(v.indexOf(d)!==-1)return;const b=g.get(d);if(!b)return;const O=E.indexOf(d);let j=a;if(!j){const $=()=>{l.delete(d);const N=Array.from(g.keys()).filter(y=>!v.includes(y));if(N.forEach(y=>g.delete(y)),w.current=x.filter(y=>{const R=p(y);return R===d||N.includes(R)}),!l.size){if(h.current===!1)return;c(),o&&o()}};j=t.createElement(k,{key:p(b),isPresent:!1,onExitComplete:$,custom:e,presenceAffectsLayout:f,mode:m},b),l.set(d,j)}i.splice(O,0,j)}),i=i.map(a=>{const d=a.key;return l.has(d)?a:t.createElement(k,{key:p(a),isPresent:!0,presenceAffectsLayout:f,mode:m},a)}),t.createElement(t.Fragment,null,l.size?i:i.map(a=>t.cloneElement(a)))},T=()=>{const[n,e]=t.useState(F.team);return t.useEffect(()=>(e(()=>F.team),()=>{e(()=>[])}),[]),[n]},P=({image:n,alt:e,profileName:r,position:o,mission:u})=>{const f=t.useRef(null);return s.jsx(H,{children:s.jsxs(B.div,{ref:f,initial:{x:-100},animate:{x:0},exit:{x:-100},transition:{duration:.5,type:"spring",stiffness:100},whileHover:{scale:1.01},whileFocus:{scale:1.01},className:"flex flex-col p-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-5",children:[s.jsx("img",{className:"w-32 h-32 mb-3 rounded-full object-cover shadow-lg mt-3 mx-5",src:n,alt:e}),s.jsxs("div",{className:"flex flex-col justify-between p-4 leading-normal text-center",children:[s.jsx("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:r}),s.jsx("p",{className:"mb-1 font-normal text-gray-500 dark:text-gray-400",children:o}),s.jsx("p",{className:"mb-3 font-light text-gray-500 dark:text-gray-400"})]}),s.jsx("div",{className:"flex flex-col justify-between p-4 leading-normal text-left",children:s.jsx("p",{className:"mb-3 font-medium text-gray-900 dark:text-gray-400 text-sm",children:u})})]})})},ee=({image:n,alt:e,profileName:r,position:o,mission:u})=>s.jsx(H,{children:s.jsxs(B.div,{initial:{x:100},animate:{x:0},exit:{x:100},transition:{duration:.5,type:"spring",stiffness:100},whileHover:{scale:1.01},whileFocus:{scale:1.01},className:"flex flex-col p-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-5",children:[s.jsx("div",{className:"flex flex-col justify-between p-4 leading-normal text-left",children:s.jsx("p",{className:"mb-3 font-medium text-gray-900 dark:text-gray-400 text-sm",children:u})}),s.jsxs("div",{className:"flex flex-col justify-between p-4 leading-normal text-center",children:[s.jsx("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:r}),s.jsx("p",{className:"mb-1 font-normal text-gray-500 dark:text-gray-400",children:o}),s.jsx("p",{className:"mb-3 font-light text-gray-500 dark:text-gray-400"})]}),s.jsx("img",{className:"w-32 h-32 mb-3 rounded-full shadow-lg mt-3 mx-5 object-cover",src:n,alt:e})]})}),te=()=>{const[n]=T();return s.jsx(s.Fragment,{children:s.jsxs(M,{children:[s.jsx("div",{className:"hidden md:block",children:n.map((e,r)=>r&1?s.jsx(ee,{image:e.image,alt:e.name,profileName:e.name,position:e.position,mission:e.whyFirstByte},r):s.jsx(P,{image:e.image,alt:e.name,profileName:e.name,position:e.position,mission:e.whyFirstByte},r))}),s.jsx("div",{className:"md:hidden",children:n.map((e,r)=>s.jsx(P,{image:e.image,alt:e.name,profileName:e.name,position:e.position,mission:e.whyFirstByte},r))})]})})},oe=({isAnimateNavbar:n,toggleIsAnimateNavbar:e})=>(t.useEffect(()=>(document.title="FirstByte - Team",()=>{document.title="FirstByte - Northeastern's Organization"})),s.jsxs(s.Fragment,{children:[s.jsx(V,{animate:n,toggleIsAnimateNavbar:e}),s.jsx("div",{className:"pt-20",children:s.jsx(_,{headingText:"Meet",headingIlluminateText:"FirstByte",backText:"Team",children:s.jsx(te,{})})}),s.jsx(W,{})]}));export{oe as default};
