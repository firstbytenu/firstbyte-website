import{r as m,j as s,c as x}from"./index-D5X_FyS-.js";import{C as w,m as d,H as C,N as I,F}from"./HeadingRichText-BZP5c2xA.js";const H=({defaultText:e,texts:t,typingSpeed:i=150,deletingSpeed:n=50})=>{const[c,o]=m.useState(e),[l,r]=m.useState(!1),[a,f]=m.useState(0),[h,b]=m.useState(e.length);return m.useEffect(()=>{let g;return l?h>e.length?g=setTimeout(()=>{o(u=>u.slice(0,-1)),b(u=>u-1)},n):(r(!1),f(u=>(u+1)%t.length)):h<e.length+t[a].length?g=setTimeout(()=>{o(e+t[a].slice(0,h-e.length+1)),b(u=>u+1)},i):g=setTimeout(()=>{r(!0)},2e3),()=>clearTimeout(g)},[c,l,a,h,e,t,i,n]),s.jsx("span",{children:c})},V=()=>s.jsx(s.Fragment,{children:s.jsx(w,{children:s.jsx(d.div,{initial:{y:100},animate:{y:0},transition:{duration:.2,delay:0,type:"spring",stiffness:100},children:s.jsxs("div",{className:"grid grid-rows-2 md:grid-cols-2 md:h-screen",children:[s.jsx("div",{className:"text-[#546c54] text-center flex items-center justify-center",children:s.jsxs("div",{className:"grid grid-rows-4 md:grid-rows-3 mt-64",children:[s.jsxs(d.div,{whileHover:{scale:1.05},whileFocus:{scale:1.05},className:"text-3xl font-bold text-gray-400 hover:text-gray-300 md:text-3xl lg:text-6xl",children:["Welcome to ",s.jsx("span",{className:"text-[#546c54]",children:x.organization})]}),s.jsx("div",{className:"text-2xl font-bold my-4 text-gray-600 md:text-2xl lg:text-3xl transition-all duration-200 ease-in-out",children:s.jsx(d.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},children:s.jsx("div",{className:"lg:flex lg:items-center justify-center",children:s.jsx(H,{defaultText:x.tagConstant,texts:x.tag})})})}),s.jsx(d.div,{whileHover:{scale:1.02},whileFocus:{scale:1.02},className:"font-light text-md text-center items-center justify-center lg:my-5",children:x.heroText})]})}),s.jsx(d.div,{initial:{x:100},animate:{x:0},transition:{duration:.2,delay:0,type:"spring",stiffness:100},className:"flex items-center justify-center text-center md:h-screen",children:s.jsxs("div",{className:"grid grid-rows-2",children:[s.jsx(d.img,{whileHover:{scale:1.05},whileFocus:{scale:1.05},className:"w-64 h-64 rounded-full shadow-lg mt-3 mx-5 shadow-2xl",src:x.homeImage,alt:"FirstByte Home Image"}),s.jsxs(d.div,{whileHover:{scale:1.02},whileFocus:{scale:1.02},className:"font-md text-md text-center items-center justify-center my-5",children:["This is how fun to be in ",s.jsx("div",{className:"font-bold text-[#546c54]",children:x.organization})]})]})})]})})})}),_=({image:e,text:t})=>s.jsx(s.Fragment,{children:s.jsx(d.div,{whileHover:{scale:1.03},whileFocus:{scale:1.03},className:"mx-5 w-11/12 h-96 bg-white hover:bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center",children:s.jsxs("div",{className:"flex flex-col items-center justify-center w-full",children:[s.jsx("img",{className:"rounded-t-lg object-contain h-64 w-full py-5",src:e,alt:e}),s.jsx("div",{className:"p-5 w-full",children:s.jsx("p",{className:"mb-3 font-normal text-gray-700 dark:text-gray-400 text-center",children:t})})]})})});var O=Object.defineProperty,k=(e,t,i)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,p=(e,t,i)=>(k(e,typeof t!="symbol"?t+"":t,i),i),j=new Map,v=new WeakMap,y=0,M=void 0;function R(e){return e?(v.has(e)||(y+=1,v.set(e,y.toString())),v.get(e)):"0"}function T(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?R(e.root):e[t]}`).toString()}function E(e){const t=T(e);let i=j.get(t);if(!i){const n=new Map;let c;const o=new IntersectionObserver(l=>{l.forEach(r=>{var a;const f=r.isIntersecting&&c.some(h=>r.intersectionRatio>=h);e.trackVisibility&&typeof r.isVisible>"u"&&(r.isVisible=f),(a=n.get(r.target))==null||a.forEach(h=>{h(f,r)})})},e);c=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:o,elements:n},j.set(t,i)}return i}function S(e,t,i={},n=M){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const a=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:c,observer:o,elements:l}=E(i),r=l.get(e)||[];return l.has(e)||l.set(e,r),r.push(t),o.observe(e),function(){r.splice(r.indexOf(t),1),r.length===0&&(l.delete(e),o.unobserve(e)),l.size===0&&(o.disconnect(),j.delete(c))}}function z(e){return typeof e.children!="function"}var B=class extends m.Component{constructor(e){super(e),p(this,"node",null),p(this,"_unobserveCb",null),p(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),p(this,"handleChange",(t,i)=>{t&&this.props.triggerOnce&&this.unobserve(),z(this.props)||this.setState({inView:t,entry:i}),this.props.onChange&&this.props.onChange(t,i)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:i,trackVisibility:n,delay:c,fallbackInView:o}=this.props;this._unobserveCb=S(this.node,this.handleChange,{threshold:e,root:t,rootMargin:i,trackVisibility:n,delay:c},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:u,entry:N}=this.state;return e({inView:u,entry:N,ref:this.handleNode})}const{as:t,triggerOnce:i,threshold:n,root:c,rootMargin:o,onChange:l,skip:r,trackVisibility:a,delay:f,initialInView:h,fallbackInView:b,...g}=this.props;return m.createElement(t||"div",{ref:this.handleNode,...g},e)}};const D=()=>s.jsx(s.Fragment,{children:s.jsxs(w,{children:[s.jsx(d.div,{initial:{x:100},animate:{x:0},transition:{duration:.1,delay:.1,type:"spring",stiffness:200},className:"mb-3",children:s.jsx(C,{text:"",illuminateText:"Here are some Fun Facts",backText:"",subHeading:!0})}),s.jsx("div",{className:"flex flex-wrap justify-center items-center",children:x.facts.map((e,t)=>s.jsx(B,{as:"div",triggerOnce:!1,onChange:()=>{},children:({ref:i,inView:n})=>s.jsx(d.div,{ref:i,initial:{y:100},animate:{y:n?0:100},transition:{duration:.1,delay:.1*t,type:"spring",stiffness:200},className:"w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4",children:s.jsx(_,{image:e.image,text:e.fact})})},e.image))})]})}),U=({isAnimateNavbar:e,toggleIsAnimateNavbar:t})=>(m.useEffect(()=>(document.title="FirstByte - Home",()=>{document.title="FirstByte - Northeastern's Organization"})),s.jsxs(s.Fragment,{children:[s.jsx(I,{animate:e,toggleIsAnimateNavbar:t}),s.jsx(V,{}),s.jsx(D,{}),s.jsx(F,{})]}));export{U as default};
