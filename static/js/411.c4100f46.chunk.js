"use strict";(self.webpackChunkmarvel_react_app=self.webpackChunkmarvel_react_app||[]).push([[411],{6323:(e,a,s)=>{s.d(a,{A:()=>c});const t=s.p+"static/media/error-cat.62675f63ecb924cf89b2.gif";var r=s(579);const c=()=>(0,r.jsx)("img",{src:t,alt:"Error",style:{display:"block",width:"auto",height:"200px",margin:"0 auto"}})},2932:(e,a,s)=>{s.r(a),s.d(a,{default:()=>y});var t=s(5043),r=s(1591),c=s(363),n=s(5809);const i=s.p+"static/media/mjolnir.61f31e1809f12183a524.png";var l=s(579);const o=e=>{let{data:a,method:s}=e;const{id:t,name:r,description:c,thumbnail:n,homepage:i,wiki:o}=a;let d={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n&&(d={objectFit:"contain"}),(0,l.jsxs)("div",{className:"randomchar__block",children:[(0,l.jsx)("img",{src:n,alt:"Random character",className:"randomchar__img",style:d,onClick:()=>s(t)}),(0,l.jsxs)("div",{className:"randomchar__info",children:[(0,l.jsx)("p",{className:"randomchar__name",children:r}),(0,l.jsx)("p",{className:"randomchar__descr",children:c}),(0,l.jsxs)("div",{className:"randomchar__btns",children:[(0,l.jsx)("a",{href:i,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:o,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},d=e=>{let{onCharSelected:a}=e;const[s,r]=(0,t.useState)({}),{getCharacter:d,clearError:h,process:m,setProcess:u}=(0,c.A)(),_=e=>{r(e)},p=()=>{const e=Math.floor(400*Math.random()+1011e3);h(),d(e).then(_).then((()=>u("confirmed")))};return(0,t.useEffect)((()=>{p();const e=setInterval(p,6e4);return()=>{clearInterval(e)}}),[]),(0,l.jsxs)("div",{className:"randomchar",children:[(0,n.A)(m,o,s,a),(0,l.jsxs)("div",{className:"randomchar__static",children:[(0,l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,l.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,l.jsx)("button",{className:"button button__main",onClick:p,children:(0,l.jsx)("div",{className:"inner",children:"try it"})}),(0,l.jsx)("img",{src:i,alt:"mjolnir",className:"randomchar__decoration"})]})]})};var h=s(9391),m=s(3523),u=s(7761);const _=e=>{let{onCharSelected:a}=e;const[s,r]=(0,t.useState)([]),[n,i]=(0,t.useState)(!1),[o,d]=(0,t.useState)(1),[_,p]=(0,t.useState)(!1),{getAllCharacters:j,process:x,setProcess:v}=(0,c.A)(),b=e=>{let a=!1;e.length<9&&(a=!0),r((a=>[...a,...e])),i((e=>!1)),d((e=>e+9)),p((e=>a))};(0,t.useEffect)((()=>{g(o,!0)}),[]);const g=(e,a)=>{i(!a),j(e).then(b).then((()=>v("confirmed")))},N=(0,t.useRef)([]),f=e=>{N.current.forEach((e=>e.classList.remove("char__item_selected"))),N.current[e].classList.add("char__item_selected"),N.current[e].focus()};function w(e){const s=e.map(((e,s)=>{let t={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===e.thumbnail&&(t={objectFit:"unset"}),(0,l.jsx)(h.A,{timeout:500,classNames:"char__item",children:(0,l.jsxs)("li",{className:"char__item",ref:e=>N.current[s]=e,onClick:()=>{a(e.id),f(s)},tabIndex:0,onKeyDown:t=>{" "!==t.key&&"Enter"!==t.key||(t.preventDefault(),a(e.id),f(s),window.scrollTo({top:400,behavior:"smooth"}))},children:[(0,l.jsx)("img",{src:e.thumbnail,alt:e.name,style:t}),(0,l.jsx)("div",{className:"char__name",children:e.name})]})},e.id)}));return(0,l.jsx)("ul",{className:"char__grid",children:(0,l.jsx)(m.A,{component:null,children:s})})}const k=(0,t.useMemo)((()=>(0,u.A)(x,(()=>w(s)),n)),[x]);return(0,l.jsxs)("div",{className:"char__list",children:[k,(0,l.jsx)("button",{className:"button button__main button__long",style:{display:_?"none":"block"},disabled:n,onClick:()=>g(o),children:(0,l.jsx)("div",{className:"inner",children:"load more"})})]})};var p=s(5475);const j=e=>{let{data:a}=e;const{name:s,description:t,thumbnail:r,homepage:c,wiki:n,comics:i}=a;let o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(o={objectFit:"contain"}),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"char__basics",children:[(0,l.jsx)("img",{src:r,alt:s,style:o}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"char__info-name",children:s}),(0,l.jsxs)("div",{className:"char__btns",children:[(0,l.jsx)("a",{href:c,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:n,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,l.jsx)("div",{className:"char__descr",children:t}),(0,l.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.slice(0,10).map(((e,a)=>{let s=e.resourceURI.split("/").pop();return(0,l.jsx)("li",{className:"char__comics-item",children:(0,l.jsx)(p.N_,{to:"/comics/".concat(s),children:e.name})},a)}))]})]})},x=e=>{let{charId:a}=e;const[s,r]=(0,t.useState)(null);(0,t.useEffect)((()=>{u()}),[a]);const{getCharacter:i,clearError:o,process:d,setProcess:h}=(0,c.A)(),m=e=>{r(e)},u=()=>{a&&(o(),i(a).then(m).then((()=>h("confirmed"))))};return(0,l.jsx)("div",{className:"char__info",children:(0,n.A)(d,j,s)})};var v=s(6323);class b extends t.Component{constructor(){super(...arguments),this.state={error:!1}}componentDidCatch(e,a){this.setState({error:!0})}render(){return this.state.error?(0,l.jsx)(v.A,{}):this.props.children}}const g=b;var N=s(3892),f=s(899);const w=()=>{const[e,a]=(0,t.useState)(null),[s,r]=(0,t.useState)(""),{getCharacterByName:n,clearError:i,process:o,setProcess:d}=(0,c.A)(),h=e=>{a(e)},m="error"===o?(0,l.jsx)("div",{className:"char__search-critical-error",children:(0,l.jsx)(v.A,{})}):null,u=e?e.length>0?(0,l.jsxs)("div",{className:"char__search-wrapper",children:[(0,l.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",e[0].name," page?"]}),(0,l.jsx)(p.N_,{to:"/characters/".concat(e[0].id),className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"To page"})})]}):s?(0,l.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null:null;return(0,l.jsxs)("div",{className:"char__search-form",children:[(0,l.jsx)(N.l1,{initialValues:{charName:s},validationSchema:f.Ik({charName:f.Yj().required("This field is required")}),onSubmit:e=>{let{charName:a}=e;var s;s=a,i(),n(s).then(h).then((()=>d("confirmed")))},children:(0,l.jsxs)(N.lV,{onChange:e=>{let{target:a}=e;return r(a.value)},children:[(0,l.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),(0,l.jsxs)("div",{className:"char__search-wrapper",children:[(0,l.jsx)(N.D0,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),(0,l.jsx)("button",{type:"submit",className:"button button__main",disabled:"loading"===o,children:(0,l.jsx)("div",{className:"inner",children:"find"})})]}),(0,l.jsx)(N.Kw,{component:"div",className:"char__search-error",name:"charName"})]})}),u,m]})},k=s.p+"static/media/vision.067d4ae1936d64a577ce.png",y=()=>{const[e,a]=(0,t.useState)(null),s=e=>{a(e)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.m,{children:[(0,l.jsx)("meta",{name:"description",content:"Marvel information portal"}),(0,l.jsx)("title",{children:"Marvel information portal"})]}),(0,l.jsx)(g,{children:(0,l.jsx)(d,{onCharSelected:s})}),(0,l.jsxs)("div",{className:"char__content",children:[(0,l.jsx)(g,{children:(0,l.jsx)(_,{onCharSelected:s})}),(0,l.jsx)(g,{children:(0,l.jsxs)("div",{children:[(0,l.jsx)(x,{charId:e}),(0,l.jsx)(w,{})]})})]}),(0,l.jsx)("img",{className:"bg-decoration",src:k,alt:"vision"})]})}},363:(e,a,s)=>{s.d(a,{A:()=>r});var t=s(5043);const r=()=>{const{request:e,clearError:a,process:s,setProcess:r}=(()=>{const[e,a]=(0,t.useState)("waiting");return{request:(0,t.useCallback)((async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};a("loading");try{const a=await fetch(e,{method:s,body:t,headers:r});if(!a.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(a.status));return await a.json()}catch(c){throw a("error"),c}}),[]),clearError:(0,t.useCallback)((()=>{a("loading")}),[]),process:e,setProcess:a}})(),c="https://gateway.marvel.com:443/v1/public/",n="apikey=a252f868d509fb96c3697d881b86055e",i=e=>({id:e.id,name:e.name,description:e.description?e.description.length>210?e.description.slice(0,210)+"...":e.description:"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),l=e=>{var a;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," pages"):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(a=e.textObjects[0])||void 0===a?void 0:a.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{process:s,setProcess:r,getAllCharacters:async function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return(await e("".concat(c,"characters?limit=9&offset=").concat(a,"&").concat(n))).data.results.map(i)},getCharacterByName:async a=>(await e("".concat(c,"characters?name=").concat(a,"&").concat(n))).data.results.map(i),getCharacter:async a=>{const s=await e("".concat(c,"characters/").concat(a,"?").concat(n));return i(s.data.results[0])},clearError:a,getAllComics:async function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(await e("".concat(c,"comics?orderBy=issueNumber&limit=8&offset=").concat(a,"&").concat(n))).data.results.map(l)},getComic:async a=>{const s=await e("".concat(c,"comics/").concat(a,"?").concat(n));return l(s.data.results[0])}}}},5809:(e,a,s)=>{s.d(a,{A:()=>i});var t=s(579);const r=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,t.jsxs)("div",{className:"skeleton",children:[(0,t.jsxs)("div",{className:"pulse skeleton__header",children:[(0,t.jsx)("div",{className:"pulse skeleton__circle"}),(0,t.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,t.jsx)("div",{className:"pulse skeleton__block"}),(0,t.jsx)("div",{className:"pulse skeleton__block"}),(0,t.jsx)("div",{className:"pulse skeleton__block"})]})]});var c=s(7818),n=s(6323);const i=(e,a,s,i)=>{switch(e){case"waiting":return(0,t.jsx)(r,{});case"loading":return(0,t.jsx)(c.A,{});case"confirmed":return(0,t.jsx)(a,{data:s,method:i});case"error":return(0,t.jsx)(n.A,{});default:throw new Error("Unexpected process state")}}},7761:(e,a,s)=>{s.d(a,{A:()=>n});var t=s(7818),r=s(6323),c=s(579);const n=(e,a,s)=>{switch(e){case"waiting":return(0,c.jsx)(t.A,{});case"loading":return s?(0,c.jsx)(a,{}):(0,c.jsx)(t.A,{});case"confirmed":return(0,c.jsx)(a,{});case"error":return(0,c.jsx)(r.A,{});default:throw new Error("Unexpected process state")}}}}]);
//# sourceMappingURL=411.c4100f46.chunk.js.map