(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:ee,getOwnPropertySymbols:te,getPrototypeOf:ne}=Object,f=globalThis,p=f.trustedTypes,re=p?p.emptyScript:``,ie=f.reactiveElementPolyfillSupport,m=(e,t)=>e,h={toAttribute(e,t){switch(t){case Boolean:e=e?re:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ae=(e,t)=>!l(e,t),oe={attribute:!0,type:String,converter:h,reflect:!1,useDefault:!1,hasChanged:ae};Symbol.metadata??=Symbol(`metadata`),f.litPropertyMetadata??=new WeakMap;var g=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=oe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??oe}static _$Ei(){if(this.hasOwnProperty(m(`elementProperties`)))return;let e=ne(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(m(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m(`properties`))){let e=this.properties,t=[...ee(e),...te(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?h:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?h:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ae)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};g.elementStyles=[],g.shadowRootOptions={mode:`open`},g[m(`elementProperties`)]=new Map,g[m(`finalized`)]=new Map,ie?.({ReactiveElement:g}),(f.reactiveElementVersions??=[]).push(`2.1.2`);var _=globalThis,se=e=>e,v=_.trustedTypes,ce=v?v.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,le=`$lit$`,y=`lit$${Math.random().toFixed(9).slice(2)}$`,ue=`?`+y,de=`<${ue}>`,b=document,x=()=>b.createComment(``),S=e=>e===null||typeof e!=`object`&&typeof e!=`function`,C=Array.isArray,fe=e=>C(e)||typeof e?.[Symbol.iterator]==`function`,w=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pe=/-->/g,me=/>/g,E=RegExp(`>|${w}(?:([^\\s"'>=/]+)(${w}*=${w}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),he=/'/g,ge=/"/g,_e=/^(?:script|style|textarea|title)$/i,D=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),O=Symbol.for(`lit-noChange`),k=Symbol.for(`lit-nothing`),ve=new WeakMap,A=b.createTreeWalker(b,129);function ye(e,t){if(!C(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ce===void 0?t:ce.createHTML(t)}var be=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=T;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===T?c[1]===`!--`?o=pe:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=E):(_e.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=E):o=me:o===E?c[0]===`>`?(o=i??T,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?E:c[3]===`"`?ge:he):o===ge||o===he?o=E:o===pe||o===me?o=T:(o=E,i=void 0);let d=o===E&&e[t+1].startsWith(`/>`)?` `:``;a+=o===T?n+de:l>=0?(r.push(s),n.slice(0,l)+le+n.slice(l)+y+d):n+y+(l===-2?t:d)}return[ye(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},j=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=be(t,n);if(this.el=e.createElement(l,r),A.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=A.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(le)){let t=u[o++],n=i.getAttribute(e).split(y),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Se:r[1]===`?`?Ce:r[1]===`@`?we:P}),i.removeAttribute(e)}else e.startsWith(y)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(_e.test(i.tagName)){let e=i.textContent.split(y),t=e.length-1;if(t>0){i.textContent=v?v.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],x()),A.nextNode(),c.push({type:2,index:++a});i.append(e[t],x())}}}else if(i.nodeType===8)if(i.data===ue)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(y,e+1))!==-1;)c.push({type:7,index:a}),e+=y.length-1}a++}}static createElement(e,t){let n=b.createElement(`template`);return n.innerHTML=e,n}};function M(e,t,n=e,r){if(t===O)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=S(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=M(e,i._$AS(e,t.values),i,r)),t}var xe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??b).importNode(t,!0);A.currentNode=r;let i=A.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new N(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Te(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=A.nextNode(),a++)}return A.currentNode=b,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},N=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=M(this,e,t),S(e)?e===k||e==null||e===``?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==O&&this._(e):e._$litType$===void 0?e.nodeType===void 0?fe(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==k&&S(this._$AH)?this._$AA.nextSibling.data=e:this.T(b.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=j.createElement(ye(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new xe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=ve.get(e.strings);return t===void 0&&ve.set(e.strings,t=new j(e)),t}k(t){C(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(x()),this.O(x()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=se(e).nextSibling;se(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},P=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=k}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=M(this,e,t,0),a=!S(e)||e!==this._$AH&&e!==O,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=M(this,r[n+o],t,o),s===O&&(s=this._$AH[o]),a||=!S(s)||s!==this._$AH[o],s===k?e=k:e!==k&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Se=class extends P{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}},Ce=class extends P{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==k)}},we=class extends P{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=M(this,e,t,0)??k)===O)return;let n=this._$AH,r=e===k&&n!==k||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==k&&(n===k||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Te=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){M(this,e)}},Ee=_.litHtmlPolyfillSupport;Ee?.(j,N),(_.litHtmlVersions??=[]).push(`3.3.3`);var De=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new N(t.insertBefore(x(),e),e,void 0,n??{})}return i._$AI(e),i},F=globalThis,I=class extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=De(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return O}};I._$litElement$=!0,I.finalized=!0,F.litElementHydrateSupport?.({LitElement:I});var Oe=F.litElementPolyfillSupport;Oe?.({LitElement:I}),(F.litElementVersions??=[]).push(`4.2.2`);var ke=new WeakMap,Ae=e=>{if((e=>e.pattern!==void 0)(e))return e.pattern;let t=ke.get(e);return t===void 0&&ke.set(e,t=new URLPattern({pathname:e.path})),t},je=class{constructor(e,t,n){this.routes=[],this.o=[],this.t={},this.i=e=>{if(e.routes===this)return;let t=e.routes;this.o.push(t),t.h=this,e.stopImmediatePropagation(),e.onDisconnect=()=>{this.o?.splice(this.o.indexOf(t)>>>0,1)};let n=Me(this.t);n!==void 0&&t.goto(n)},(this.l=e).addController(this),this.routes=[...t],this.fallback=n?.fallback}link(e){if(e?.startsWith(`/`))return e;if(e?.startsWith(`.`))throw Error(`Not implemented`);return e??=this.u,(this.h?.link()??``)+e}async goto(e){let t;if(this.routes.length===0&&this.fallback===void 0)t=e,this.u=``,this.t={0:t};else{let n=this.p(e);if(n===void 0)throw Error(`No route found for `+e);let r=Ae(n).exec({pathname:e})?.pathname.groups??{};if(t=Me(r),typeof n.enter==`function`&&!1===await n.enter(r))return;this.v=n,this.t=r,this.u=t===void 0?e:e.substring(0,e.length-t.length)}if(t!==void 0)for(let e of this.o)e.goto(t);this.l.requestUpdate()}outlet(){return this.v?.render?.(this.t)}get params(){return this.t}p(e){let t=this.routes.find((t=>Ae(t).test({pathname:e})));return t||this.fallback===void 0?t:this.fallback?{...this.fallback,path:`/*`}:void 0}hostConnected(){this.l.addEventListener(L.eventName,this.i);let e=new L(this);this.l.dispatchEvent(e),this._=e.onDisconnect}hostDisconnected(){this._?.(),this.h=void 0}},Me=e=>{let t;for(let n of Object.keys(e))/\d+/.test(n)&&(t===void 0||n>t)&&(t=n);return t&&e[t]},L=class e extends Event{constructor(t){super(e.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=t}};L.eventName=`lit-routes-connected`;var Ne=location.origin||location.protocol+`//`+location.host,Pe=class extends je{constructor(){super(...arguments),this.m=e=>{let t=e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey;if(e.defaultPrevented||t)return;let n=e.composedPath().find((e=>e.tagName===`A`));if(n===void 0||n.target!==``||n.hasAttribute(`download`)||n.getAttribute(`rel`)===`external`)return;let r=n.href;if(r===``||r.startsWith(`mailto:`))return;let i=window.location;n.origin===Ne&&(e.preventDefault(),r!==i.href&&(window.history.pushState({},``,r),this.goto(n.pathname)))},this.R=e=>{this.goto(window.location.pathname)}}hostConnected(){super.hostConnected(),window.addEventListener(`click`,this.m),window.addEventListener(`popstate`,this.R),this.goto(window.location.pathname)}hostDisconnected(){super.hostDisconnected(),window.removeEventListener(`click`,this.m),window.removeEventListener(`popstate`,this.R)}},Fe=`h1{font-size:var(--header-1)}h2{font-size:var(--header-2)}h3{font-size:var(--header-3)}p,a{font-size:var(--paragraph)}nav{background-color:var(--header-color);box-sizing:border-box;z-index:4000;justify-content:space-around;align-items:center;width:100%;margin-left:auto;margin-right:auto;padding:.2rem 0;display:flex;position:fixed;bottom:0}nav a svg{width:1.7rem;fill:var(--text-color)}nav a{text-align:center;width:7rem;color:var(--text-color);border-radius:.7rem;padding:.2rem;font-weight:600;text-decoration:none;transition:background-color .2s}nav a:hover{background-color:var(--destaque-color)}nav a p{margin:0;font-size:.8rem}@media (width>=1024px){nav{background-color:var(--background-color);border-radius:100rem;width:50%;margin-bottom:.5rem;padding:.4rem}nav a p{font-size:1rem}nav a{border-radius:100rem;width:9rem;padding-bottom:.1rem}}#container-drawer-ferramentas{flex-direction:column;justify-content:space-between;row-gap:1rem;padding:2rem 0 0;display:flex}#container-drawer-ferramentas a{flex-direction:row;align-items:center;gap:1rem;width:100%;display:flex}#container-drawer-ferramentas a svg{fill:var(--destaque-color)}`,Ie=`#container{box-sizing:border-box;opacity:0;visibility:hidden;z-index:9999;background-color:#0009;flex-direction:column;justify-content:center;align-items:center;width:100vw;height:100vh;padding:2rem;transition:opacity .3s,visibility .3s;display:flex;position:fixed;top:0;left:0}#container.visivel{opacity:1;visibility:visible}#modal{background-color:var(--background-color);color:var(--text-color);text-align:center;border-color:var(--btn-border-color);box-sizing:border-box;border-style:solid;border-width:2px;border-radius:2rem;flex-direction:column;justify-content:center;transition:transform .3s;display:flex;transform:scale(.9)translateY(20px);box-shadow:0 20px 50px #ffffff38}#container.visivel #modal{transform:scale(1)translateY(0)}#modal svg{fill:var(--text-color);height:5rem}input{background-color:var(--btn-background-color);width:15rem;color:var(--btn-text-background-color);border:.1rem solid;border-color:var(--btn-border-color);border-radius:100rem;margin:1rem;padding:.5rem;font-size:1rem}button{background-color:var(--btn-background-color);width:15rem;color:var(--text-color);border:none;border-radius:100rem;margin:1rem;padding:.5rem;font-size:1rem;transition:background-color .1s}button:hover{background-color:var(--destaque-color);color:var(--text-color)}#close-button{justify-content:flex-end;align-items:center;height:2rem;margin:0;padding:.9rem;display:flex}#close-button a svg{fill:#b00;transform-origin:50%;width:2.5rem;transition:transform .2s}#close-button a svg:hover{transform:scale(1.2)}@media (width>=1024px){#modal{width:50%}}`,Le=e=>{localStorage.setItem(`usuario`,e)},Re=class extends I{static properties={aberto:{type:Boolean}};static get styles(){return o`${a(Ie)}`}constructor(){super(),this.url_config=``,this.aberto=!1}Btn_Cadastro(e){let t=e.target.form,n=new FormData(t).get(`nome`);n!==``&&(Le(n),this._dispararFechar())}_dispararFechar(){this.aberto=!1,this.dispatchEvent(new CustomEvent(`ao-fechar`,{bubbles:!0,composed:!0}))}render(){return D`
            <div id="container" class="${this.aberto?`visivel`:``}">
                <div id="modal">
                    <div id="close-button">
                        <a @click="${this._dispararFechar}">
                            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.93 143.93"><path d="M-231.1 674.3a69 69 0 0 0-97.52 0 69 69 0 0 0 0 97.52 69 69 0 0 0 97.52 0 69 69 0 0 0 0-97.52m-4.68 4.68a62.3 62.3 0 0 1 0 88.16 62.3 62.3 0 0 1-88.16 0 62.3 62.3 0 0 1 0-88.16 62.3 62.3 0 0 1 88.16 0m-10.68 8.72a3.3 3.3 0 0 0-4.68 0l-30.47 30.47-30.47-30.47a3.3 3.3 0 0 0-4.67 0 3.3 3.3 0 0 0 0 4.68l30.46 30.46-30.46 30.47a3.3 3.3 0 0 0 0 4.68 3.3 3.3 0 0 0 4.67 0l30.47-30.47 30.47 30.47a3.3 3.3 0 0 0 4.68 0 3.3 3.3 0 0 0 0-4.68l-30.47-30.47 30.47-30.46a3.3 3.3 0 0 0 0-4.68" style="baseline-shift:baseline;display:inline;overflow:visible;opacity:1;vector-effect:none;stroke-linecap:round;stroke-miterlimit:3.9;stop-color:#000;stop-opacity:1" transform="translate(351.83 -651.1)"/></svg>
                        </a>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.93 143.93"><path d="M-304.7 670.66q-2.64.13-5.26.8a25.4 25.4 0 0 0-18.48 20.07c-.4 2.34-.4 6.53 0 8.86a25.5 25.5 0 0 0 20.3 20.46c2.22.4 6.77.4 9.03.01 5.13-.9 9.65-3.26 13.43-7.04a25 25 0 0 0 3.64-4.53l-.11-.33.76-.77.5-.95a25.4 25.4 0 0 0-2.58-26.78 32 32 0 0 0-6.25-5.75c-4.47-2.9-9.71-4.3-14.98-4.05m51.65 25.2-.5 1a88 88 0 0 0-2.81 6.71 20 20 0 0 1-1 2.37c-.1.1-1.15.56-2.34 1.05l-2.16.88-2.46-1.02c-3.53-1.46-6.96-2.74-7.62-2.84l-.56-.1-2.94 2.95-2.93 2.95.27.77c.4 1.12 1.67 4.1 2.94 6.83l1.1 2.4-.92 2.22-.94 2.23-2.62 1.06a101 101 0 0 0-7.22 3.13l-.46.28v8.32l1.13.53c1.42.66 2.72 1.18 6.33 2.53l2.85 1.06.94 2.24.94 2.23-1.38 3.25c-1.56 3.66-2.45 5.96-2.55 6.62-.06.41.15.66 2.88 3.38l2.95 2.94 1.17-.41c.65-.22 2.72-1.07 4.59-1.88s3.68-1.58 4-1.7l.61-.24 2.26.9 2.26.9.28.7c1.66 4.1 3.75 8.73 4.15 9.17.22.24.57.26 4.4.26h4.15l.5-1a88 88 0 0 0 2.8-6.7c.47-1.21.92-2.28 1.01-2.38.19-.19 4.3-1.86 4.56-1.85.09 0 1.46.55 3.06 1.2 3.98 1.65 6.83 2.68 7.24 2.63.22-.03 1.4-1.1 3.22-2.9 2.66-2.66 2.87-2.9 2.79-3.3-.1-.53-1.64-4.14-3.07-7.25l-1.11-2.4.93-2.22.93-2.22 2.48-1c3.07-1.22 6.74-2.81 7.36-3.2l.47-.28v-8.32l-1.29-.6a126 126 0 0 0-7.28-2.87l-1.74-.64-.94-2.22-.94-2.23 1.02-2.38c1.6-3.75 2.79-6.8 2.89-7.4l.09-.57-2.9-2.85c-2.45-2.43-2.94-2.86-3.3-2.84-.48.02-3.53 1.23-7.22 2.86a35 35 0 0 1-2.8 1.15c-.1 0-1.16-.4-2.37-.88l-2.2-.88-1.02-2.46c-1.32-3.18-2.95-6.76-3.3-7.22l-.26-.37-4.2-.04zm4.38 25.16c1.15 0 2.3.1 3.12.34 4.67 1.34 7.91 4.82 8.7 9.36a9 9 0 0 1 0 3.96 11.8 11.8 0 0 1-8.36 9.25c-1.7.5-4.3.62-5.87.27-4.97-1.1-8.56-4.78-9.4-9.61-1.03-5.86 2.68-11.5 8.67-13.21.83-.24 1.98-.36 3.14-.36m-78.55 2.77c-3.07.02-5.14 1.05-8.17 4.08a45.3 45.3 0 0 0-13.03 27.51c-.29 2.8-.28 10.59 0 11.96.8 3.77 3.88 6.91 7.7 7.84 1.01.24 6.87.3 37.12.3 25.49.02 36.23-.04 37-.2 3.7-.78 6.9-3.82 7.85-7.5.13-.48.22-1.52.27-2.85l-.92-2.2c-.28-1.07-1.5-1.2-2.34-1.6-3.72 1.58-7.42 3.2-11.26 4.46-1.9-1.87-3.75-3.8-5.67-5.65-1.23-1.2-2.63-2.65-2.55-4.5.62-3.13 2.08-6 3.27-8.94.6-.9-.11-1.9-.45-2.75a121 121 0 0 1-11.1-4.62v-7.9c-.02-1.31-.19-2.81.4-4.02a33 33 0 0 1-7.67 2.6c-1.88.41-2.74.47-6.77.47s-4.89-.06-6.76-.46c-4.12-.89-7.01-2.03-11.1-4.37-2.17-1.24-3.66-1.67-5.82-1.66" style="stroke-width:.999999" transform="translate(351.83 -651.1)"/></svg>
                    <p><b>Identifique-se</b></p>
                    <p>Para personalizar seus scripts, insira seu nome completo abaixo!</p>
                    <form action="#" @submit="${e=>e.preventDefault()}">
                        <input 
                            type="text"
                            placeholder="Insira seu Nome..."
                            name="nome"
                            required
                        ><br>
                        <button @click="${this.Btn_Cadastro}">Cadastrar no Sistema</button>
                    </form>
                </div>
            </div>
        `}};customElements.define(`modal-cadastro-user`,Re);var ze=class extends I{static properties={aberto:{type:Boolean}};static styles=o`
    /* Fundo escuro (Overlay) */
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 5000;
      
      /* Controla a exibição com opacidade para efeito fade-in */
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    /* O painel lateral do Drawer */
    .drawer-content {
      position: fixed;
      top: 0;
      /* Começa totalmente escondido para a esquerda fora da tela */
      right: -100%; 
      width: 400px;
      max-width: 95vw; /* Garante que não passe da tela em celulares pequenos */
      height: 100vh;
      background-color: var(--background-color);
      color: var(--text-color);
      box-shadow: 5px 0 15px rgba(0, 0, 0, 0.2);
      z-index: 5001;
      padding: 1.5rem;
      box-sizing: border-box;

      /* Transição suave do movimento de deslizar */
      transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* --- ESTADOS ATIVOS (Quando a propriedade 'aberto' for true) --- */

    .overlay.visivel {
      opacity: 1;
      visibility: visible;
    }

    .drawer-content.visivel {
      right: 0; /* Desliza para a borda esquerda da tela */
    }

    /* Botão de fechar interno básico */
    .btn-fechar {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: inherit;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  `;constructor(){super(),this.aberto=!1}render(){return D`
      <div 
        class="overlay ${this.aberto?`visivel`:``}" 
        @click="${this._dispararFechar}"
      ></div>

      <div class="drawer-content ${this.aberto?`visivel`:``}">
        <button class="btn-fechar" @click="${this._dispararFechar}">&times;</button>
        
        <slot></slot>
      </div>
    `}_dispararFechar(){this.aberto=!1,this.dispatchEvent(new CustomEvent(`ao-fechar`,{bubbles:!0,composed:!0}))}};customElements.define(`drawer-esquerdo-ferramentas`,ze);var Be=class extends I{static properties={nome:{type:String},url_config:{type:String},exibirModal:{type:Boolean},exibirDrawerFerramentas:{type:Boolean},exibirDrawerLinks:{type:Boolean},exibirDrawerFinanceiro:{type:Boolean}};static get styles(){return o`${a(Fe)}`}constructor(){super(),this.url_config=``,this.exibirModal=!1,this.exibirDrawerFerramentas=!1,this.exibirDrawerLinks=!1,this.exibirDrawerFinanceiro=!1,this.Verificar_usuario()}Verificar_usuario(){localStorage.getItem(`usuario`)??(this.exibirModal=!0)}render(){return D`
            <!--Retorno renderizado-->
            <nav>
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.93 143.93"><path d="M-324.28 776.63a6 6 0 0 1-3.72-3.56c-.2-.68-.29-7.83-.29-21.67v-20.64l24.06-19.84c13.24-10.9 24.2-19.83 24.36-19.83s11.12 8.92 24.36 19.83l24.06 19.84v20.64c0 13.84-.1 20.99-.29 21.67a5.8 5.8 0 0 1-3.92 3.58c-.92.2-6.62.3-17.37.3h-16v-32.28h-21.69v32.27l-16.2-.02c-9.42-.02-16.7-.14-17.36-.29m-16.52-44.32c-.74-.2-6.51-7.23-6.69-8.15a3 3 0 0 1 .12-1.5c.34-.9 60.85-51.38 62.8-52.4a11.2 11.2 0 0 1 9.1-.22c.6.27 5.9 4.5 11.77 9.41l10.68 8.93.07-8.65c.08-9.65.09-9.7 1.88-10.22.63-.19 3.94-.26 9.5-.2l8.52.08.73.74.73.73.08 17.72.07 17.73 9.4 7.83c5.76 4.8 9.51 8.1 9.67 8.53.5 1.3.04 2.19-3.08 5.91-2.55 3.05-3.18 3.65-3.94 3.8-.5.09-1.16.09-1.46-.01s-13.68-11.12-29.71-24.5a3516 3516 0 0 0-29.31-24.32c-.1 0-13.27 10.93-29.29 24.3a2440 2440 0 0 1-29.57 24.47 4 4 0 0 1-2.07-.01" style="fill-opacity:1" transform="translate(351.83 -651.1)"/></svg> 
                    <br>
                    <p>HOME</p>
                </a>
                <a @click="${()=>this.exibirDrawerLinks=!0}">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.93 143.93"><path d="M-310.7 790.36a43 43 0 0 1-19.43-7.93c-2.93-2.11-8.17-7.62-10.3-10.82a41.1 41.1 0 0 1-3.1-40.35c2.46-5.32 4.5-7.84 14.73-18.17 5.35-5.4 10.38-10.2 11.19-10.67a9 9 0 0 1 7.92-.36q4.93 2.26 5.33 7.5c.3 4.12.3 4.12-10.3 14.86-5.25 5.33-10.1 10.53-10.77 11.56a22.5 22.5 0 0 0-3.78 12.92c.02 3.63.73 6.5 2.53 10.2 1.16 2.38 1.97 3.45 4.67 6.14 2.7 2.7 3.77 3.51 6.16 4.67 3.9 1.9 6.28 2.47 10.36 2.47 4.1 0 6.48-.57 10.36-2.47 2.74-1.34 3.4-1.91 12.81-11.17 6.57-6.46 10.43-10 11.42-10.48 1.95-.95 5.6-.99 7.56-.08 2.99 1.39 5.26 4.86 5.27 8.05 0 3.82-.3 4.24-10.16 14.2-4.98 5.01-10.22 10.07-11.67 11.23a41 41 0 0 1-16.89 8.05c-3.38.76-10.71 1.1-13.9.65m7.76-38.02c-5.2-1.71-7.9-7.49-5.76-12.28.53-1.18 5.73-6.58 22.35-23.23 12.87-12.89 22.2-21.97 22.99-22.38a9.1 9.1 0 0 1 10.4 1.73 8.8 8.8 0 0 1 2.15 9.4c-.5 1.52-2.55 3.68-22.17 23.37-11.9 11.93-22.3 22.08-23.1 22.56-1.58.94-5.19 1.37-6.86.83m52.5-8.33a9.4 9.4 0 0 1-4.75-5.45c-.64-2.14-.63-3.04.04-5.33.51-1.73 1.13-2.43 9.8-11.19 5.08-5.14 9.71-9.96 10.28-10.7a28 28 0 0 0 4.06-8.6c.69-2.88.67-8.1-.03-10.78a33 33 0 0 0-1.93-4.93c-2.6-5.35-9.38-11.11-14.73-12.53a23.4 23.4 0 0 0-18.36 2.42c-1.83 1.07-4.66 3.65-12.24 11.12-10.77 10.64-10.65 10.55-14.65 10.54a7.9 7.9 0 0 1-5.97-2.53c-1.97-2-2.49-3.35-2.49-6.47 0-2.34.13-2.94.9-4.25 1.2-2 19.52-20.15 22.44-22.2a41.3 41.3 0 0 1 47.43-.17 54 54 0 0 1 10.23 9.96c2.44 3.23 5.64 9.8 6.69 13.77a41.3 41.3 0 0 1-6.9 35.52c-.85 1.12-5.75 6.29-10.9 11.48-10.53 10.61-11.23 11.13-14.98 11.12-1.62 0-2.7-.22-3.94-.8" style="fill-opacity:1;stroke-width:.999997" transform="translate(351.83 -651.1)"/></svg>
                    <br>
                    <p>LINKS</p>
                </a>
                <a @click="${()=>this.exibirDrawerFerramentas=!0}">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.93 143.93"><path d="M-331.52 790.42a25 25 0 0 1-6.26-2.33l-.9-.53 15.61-15.63c13.51-13.54 15.65-15.79 15.9-16.7a3.97 3.97 0 0 0-4.89-4.87c-.9.24-3.32 2.56-16.68 15.9l-15.64 15.6-.67-1.14a20.5 20.5 0 0 1-1.82-15.04c1.57-5.3 1.55-5.29 21.3-25.07l17.5-17.54 14.09 14.1 14.09 14.1-17.53 17.5c-13.46 13.43-17.98 17.77-19.45 18.72a20 20 0 0 1-14.65 2.93m87.86.1a27.4 27.4 0 0 1-23.4-22.26c-.76-3.99-.33-10.72.87-13.7.25-.62-.85-1.77-22.1-23.05l-22.38-22.4-1.03.36c-3.48 1.23-9.7 1.54-13.84.68a27.3 27.3 0 0 1-20.87-19.12 30 30 0 0 1-.53-14.3c.49-2.15 1.36-3.2 3-3.65 2.12-.57 2.55-.25 10.86 8.06l7.54 7.55h11.24v-11.24l-7.65-7.67c-8.22-8.26-8.42-8.53-7.95-10.65.28-1.23 1.67-2.57 3.08-2.97.56-.15 2.35-.42 3.99-.6a27.5 27.5 0 0 1 30 21.88c.85 4.14.55 10.36-.68 13.84l-.36 1.03 22.4 22.38c21.27 21.25 22.43 22.36 23.06 22.1 2.97-1.2 9.7-1.63 13.69-.87a27.3 27.3 0 0 1 21.5 19.92c.86 3.3 1.18 7.27.83 10.36-.57 4.97-1.23 6.28-3.47 6.89-2.12.57-2.55.25-10.86-8.07l-7.54-7.54h-11.24v11.25l7.42 7.4c4.09 4.08 7.6 7.73 7.8 8.12.22.4.39 1.33.39 2.09 0 1.23-.1 1.46-1 2.37-1.12 1.11-2.02 1.42-5.35 1.83-2.55.31-4.91.31-7.42-.01m-22.22-81.6-2.77-2.77 8.97-8.98 8.97-8.97 1.26-8.82c1.58-10.98 1.45-10.36 2.28-11.35.9-1.06 24.02-12.68 25.23-12.68 1.46 0 2.48.72 5.86 4.14 3.35 3.4 3.91 4.2 3.91 5.66 0 1.19-11.64 24.33-12.68 25.2-.99.83-.37.7-11.35 2.28l-8.82 1.26-8.9 8.9c-4.9 4.9-8.98 8.92-9.05 8.92s-1.38-1.25-2.9-2.78" style="fill-opacity:1" transform="translate(351.83 -651.1)"/></svg>
                    <br>
                    <p>FERRAMENTAS</p>
                </a>
                <a @click="${()=>this.exibirDrawerFinanceiro=!0}">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.93 143.93"><path d="M-283.08 790.53a21 21 0 0 1-9.78-4.47c-1.07-.86-7.65-7.28-14.6-14.26l-12.67-12.68 2.74-.18c4.42-.28 7.64-1.29 10.72-3.36.7-.47 6.34-5.89 12.52-12.05 6.19-6.15 11.58-11.32 11.99-11.47a4 4 0 0 1 2.91.02c.32.16 5.58 5.26 11.7 11.33 6.58 6.55 11.78 11.5 12.77 12.16 3.57 2.4 7.35 3.46 12.28 3.46h2.99l-12.44 12.47a679 679 0 0 1-14.37 14.13 22 22 0 0 1-8 4.36c-2.2.62-6.78.9-8.76.54m-51.59-45.98c-8.44-8.5-9.29-9.48-10.77-12.42-1.47-2.91-2-5.35-2-9.08s.53-6.16 2-9.07c1.48-2.95 2.33-3.92 10.77-12.43l8.35-8.4h4.96c5.64 0 6.96.2 9.75 1.52 1.89.88 2.53 1.48 13.5 12.36 6.32 6.3 11.92 11.69 12.43 11.99a10 10 0 0 0 5.77 1.3c3.4-.32 3.63-.51 16.1-12.85 6.23-6.16 11.93-11.61 12.67-12.1 2.82-1.89 3.73-2.07 11.08-2.16l6.6-.1 7.52 7.5c8.16 8.13 10.18 10.44 11.58 13.2 1.54 3.08 2.08 5.46 2.08 9.24s-.54 6.16-2.08 9.24c-1.4 2.76-3.42 5.07-11.58 13.2l-7.53 7.5-6.6-.1c-7.23-.09-8.2-.27-10.85-2-.63-.4-6.25-5.81-12.5-12-12.24-12.16-12.54-12.4-15.83-12.94a10 10 0 0 0-5.88.96c-1.25.57-3.23 2.41-12.99 12.13-10.96 10.91-11.6 11.5-13.5 12.4-2.77 1.3-4.1 1.5-9.74 1.5h-4.96zm52.3-30.52c-.3-.17-5.6-5.33-11.78-11.48s-11.82-11.56-12.52-12.03c-3.08-2.07-6.3-3.08-10.72-3.36l-2.74-.18 12.4-12.42a675 675 0 0 1 14.32-14.09 22 22 0 0 1 8.14-4.4c2.98-.85 7.83-.85 10.82 0 2.9.82 5.84 2.42 8.13 4.4 1.07.92 7.53 7.28 14.37 14.14l12.44 12.46h-3c-4.92 0-8.7 1.06-12.27 3.46-1 .67-6.2 5.64-12.97 12.37l-11.3 11.24-1.4.1a5 5 0 0 1-1.93-.2" style="fill-opacity:1" transform="translate(351.83 -651.1)"/></svg>
                    <br>
                    <p>FINANCEIRO</p>
                </a>

                <!--Drawers-->

                <drawer-esquerdo-ferramentas
                    .aberto="${this.exibirDrawerFerramentas}"
                    @ao-fechar="${()=>this.exibirDrawerFerramentas=!1}"
                    >
                    <h3>Menu de Ferramentas</h3>
                    <hr>
                    <botao-tema></botao-tema>
                    <hr>
                    <div id="container-drawer-ferramentas">
                        <a 
                            @click="${()=>this.exibirModal=!0}">
                            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="1.5rem" viewBox="0 0 143.93 143.93"><path d="M-303.5 668.92q-2.74.13-5.44.83a26.3 26.3 0 0 0-19.09 20.73 33 33 0 0 0 0 9.16 26.3 26.3 0 0 0 21.39 21.2c2.4.35 6.71.33 8.92-.05a25.5 25.5 0 0 0 13.87-7.28 26 26 0 0 0 3.77-4.67l-.12-.35.79-.8.52-.98a26.2 26.2 0 0 0-2.68-27.67 33 33 0 0 0-6.46-5.94 26 26 0 0 0-15.48-4.18m58.42 26.64c-.26-.03-6.96 1.46-14.89 3.31-15.84 3.7-15.33 3.53-15.33 4.96v.66l3.23 3.3 3.23 3.3-1.46 1.77a33.6 33.6 0 0 0-7.96 21.75 34 34 0 0 0 7.54 21.32 35 35 0 0 0 7.24 6.64c1.37.94 4.1 2.46 4.87 2.7.58.18 1.44-.12 1.78-.63.13-.19.8-2.77 1.5-5.72 1.45-6.2 1.46-6.1-.15-7.07a25 25 0 0 1-5.58-5.33 20.4 20.4 0 0 1 1.24-25.35l.52-.53 3.34 3.26 3.33 3.26.76-.04c.91-.05 1.34-.44 1.62-1.48.8-2.97 6.6-28.33 6.56-28.7-.04-.58-.78-1.32-1.39-1.38m13.45 8.23c-.6.02-.96.35-1.23.99-.44 1.08-2.54 10.52-2.44 11 .11.54.36.76 2.5 2.23a23 23 0 0 1 5.75 6.2 20.3 20.3 0 0 1 1.77 16.92 20 20 0 0 1-4.36 7.35l-.9.9-3.3-3.3-3.3-3.3h-.74c-.63 0-.8.07-1.13.51-.28.36-1.36 4.66-3.7 14.73a670 670 0 0 0-3.35 14.74c-.02.28.07.64.18.81q.43.6 1.21.77c.36.08 28.17-6.3 29.28-6.72.58-.22.94-.82.94-1.57v-.59l-3.3-3.3-3.29-3.29.66-.65c.36-.36 1.17-1.28 1.8-2.05a33.75 33.75 0 0 0-10.5-51.5c-1.15-.6-1.96-.9-2.55-.88m-95.14 20.03c-3.18.02-5.31 1.08-8.45 4.2a46.8 46.8 0 0 0-13.46 28.44c-.3 2.9-.28 10.94.01 12.36.81 3.89 4 7.14 7.95 8.1 1.05.25 7.1.3 38.35.31 26.34.01 37.44-.05 38.24-.22 1.47-.3 2.87-.96 4.09-1.87a54 54 0 0 1-16.3-11.16c-9.02-9.05-14.27-20.38-15.49-33.35l-.13-1.46q-1.58.5-3.35.87c-1.94.42-2.83.48-7 .48-4.14 0-5.04-.06-6.98-.48a36 36 0 0 1-11.47-4.51c-2.24-1.29-3.78-1.73-6-1.71" style="fill-opacity:1;stroke-width:.999999" transform="translate(351.83 -651.1)"/></svg>
                            Atualizar Usuário
                        </a>
                        <a
                            href="/gerenciar_script">
                            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="1.5rem" viewBox="0 0 143.933 143.933"><path d="M-282.01 793.558c-3.097-.611-6.212-2.863-7.78-5.624-.78-1.374-1.413-3.802-1.413-5.416v-1.258l-16.943-8.762c-15.7-8.119-16.983-8.732-17.496-8.356-.304.223-1.353.797-2.33 1.275-4.1 2.005-9.315 1.116-12.575-2.144-2.286-2.286-3.49-5.168-3.49-8.354 0-1.655.805-4.308 1.77-5.833.845-1.337 2.873-3.184 4.288-3.906l1.134-.578v-43.13l-1.134-.579c-.624-.318-1.7-1.099-2.39-1.734-6.605-6.078-3.815-16.883 4.975-19.267 2.174-.59 5.316-.266 7.422.764.977.478 2.026 1.052 2.33 1.275.513.376 1.797-.237 17.496-8.356l16.943-8.762v-1.258c0-5.45 4.063-10.11 9.675-11.098 4.362-.769 9.309 1.656 11.594 5.683.78 1.374 1.414 3.801 1.414 5.415v1.258l16.942 8.762c15.7 8.119 16.984 8.732 17.496 8.356.305-.223 1.353-.797 2.33-1.275 4.1-2.005 9.316-1.116 12.576 2.144 2.285 2.286 3.49 5.169 3.49 8.354 0 1.655-.805 4.308-1.77 5.833-.846 1.338-2.873 3.184-4.289 3.906l-1.133.579v43.13l1.133.578c.624.318 1.7 1.099 2.39 1.735 6.605 6.078 3.816 16.882-4.975 19.266-2.174.59-5.315.266-7.421-.764-.978-.478-2.026-1.052-2.33-1.275-.513-.376-1.797.237-17.497 8.356l-16.942 8.762v1.258c0 5.338-3.994 10.03-9.411 11.057-1.657.314-2.412.311-4.078-.017m-2.278-21.51c1.355-.66 1.84-.742 4.426-.742 3.035 0 4.28.374 6.777 2.033l.83.552 16.941-8.761 16.94-8.76.003-1.403c.002-1.69.65-3.994 1.563-5.553.843-1.442 2.988-3.464 4.485-4.228l1.146-.584v-43.13l-1.146-.585c-1.497-.764-3.642-2.785-4.485-4.228-.913-1.559-1.56-3.862-1.563-5.553l-.002-1.402-16.941-8.76-16.94-8.761-.83.551c-2.498 1.66-3.743 2.033-6.778 2.033s-4.28-.374-6.777-2.033l-.83-.551-16.94 8.76-16.941 8.761-.002 1.402c-.002 1.69-.651 3.994-1.563 5.553-.844 1.443-2.989 3.464-4.486 4.228l-1.145.585v43.13l1.145.584c1.497.764 3.642 2.786 4.486 4.228.912 1.56 1.56 3.863 1.563 5.553l.002 1.402 16.94 8.76 16.941 8.762.83-.552c.457-.303 1.515-.884 2.351-1.292m-17.634-16.032-17.496-9.05v-21.808c0-12.751.103-21.769.248-21.715.136.05 8.1 4.138 17.695 9.082l17.448 8.99.008 21.784c.004 11.98-.086 21.78-.2 21.776s-8.08-4.081-17.703-9.059zm26.218-12.717.008-21.784 17.447-8.99c9.596-4.944 17.559-9.031 17.695-9.082.145-.054.248 8.964.248 21.715v21.808l-17.532 9.058c-9.642 4.982-17.609 9.059-17.703 9.059s-.168-9.803-.163-21.784zm-21.516-37.904c-9.318-4.823-16.94-8.833-16.936-8.91.012-.255 33.81-17.569 34.294-17.569.485 0 34.282 17.314 34.294 17.568.01.221-33.92 17.702-34.337 17.691-.204-.005-7.996-3.956-17.315-8.78" style="stroke-width:1" transform="translate(351.828 -651.095)"/></svg>
                            Gerenciar Scripts
                        </a>
                    </div>
                    

                </drawer-esquerdo-ferramentas>

                <drawer-esquerdo-ferramentas
                    .aberto="${this.exibirDrawerLinks}"
                    @ao-fechar="${()=>this.exibirDrawerLinks=!1}"
                    >
                    <h3>Menu de Links</h3>
                    <hr>
                    
                </drawer-esquerdo-ferramentas>

                <drawer-esquerdo-ferramentas
                    .aberto="${this.exibirDrawerFinanceiro}"
                    @ao-fechar="${()=>this.exibirDrawerFinanceiro=!1}"
                    >
                    <h3>Menu Financeiro</h3>
                    <hr>
                    
                </drawer-esquerdo-ferramentas>

                <!--Modal-->

                <modal-cadastro-user
                    .aberto="${this.exibirModal}"
                    @ao-fechar="${()=>this.exibirModal=!1}"
                ></modal-cadastro-user>
            </nav>
        `}};customElements.define(`menu-inferior`,Be);var Ve=`.header-superior{background-color:var(--header-color);box-sizing:border-box;justify-content:space-between;align-items:center;height:auto;margin:0;padding:.7rem;display:flex}@media (width>=1024px){.header-superior{border-radius:100rem;margin-top:.5rem;padding:.4rem}}.logo{height:2rem}.logo-sync{height:1.5rem}.item-sync{box-sizing:border-box;border:2px solid #f7ecac;border-radius:100rem;align-items:center;height:2.5rem;padding:0 .5rem;display:flex}article{padding:1rem}#dashboard{justify-content:center;gap:.3rem;margin-top:.3rem;display:flex}#dashboard div{text-align:center;background-color:var(--cards-background);color:var(--text-color);border-radius:1rem}.coluna{flex:1}.dash-titulo{margin:1rem 0 0;font-size:1rem;font-weight:900}.dash-value{margin:0 0 .5rem;font-size:2rem}#acoes{gap:.5rem;margin-top:.5rem;display:flex}.coluna-acoes{border-color:var(--btn-border-color);text-align:center;background-color:var(--btn-background-color);color:var(--btn-text-background-color);border-style:solid;border-width:.1rem;border-radius:1rem;flex:1;text-decoration:none;transition:background-color .1s}.coluna-acoes:hover{background-color:var(--destaque-color);color:var(--btn-text-background-color);fill:var(--btn-text-background-color)}.coluna-acoes:hover svg{fill:var(--btn-text-background-color)}.coluna-acoes svg{fill:var(--btn-text-background-color);width:3rem;padding-bottom:1rem}`,He=class extends I{static properties={isDark:{type:Boolean}};static styles=o`
    button {
      padding: 0.7rem 1.2rem;
      font-size: 1rem;
      font-weight: bold;
      border: none;
      border-radius: 100rem;
      cursor: pointer;
      
      /* O botão se adapta usando as variáveis do root global! */
      background-color: var(--button-bg);
      color: var(--button-text);
      
      transition: background-color 0.3s ease, color 0.3s ease, transform 0.1s;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    button:active {
      transform: scale(0.98);
    }
  `;constructor(){super(),this.isDark=document.body.classList.contains(`dark-theme`)}render(){return D`
      <button @click="${this._alternarTema}">
        ${this.isDark?D`☀️ Modo Claro`:D`🌙 Modo Escuro`}
      </button>
    `}_alternarTema(){this.isDark=!this.isDark,document.body.classList.toggle(`dark-theme`,this.isDark),localStorage.setItem(`theme`,this.isDark?`dark`:`light`)}};customElements.define(`botao-tema`,He);var Ue=`:host{box-sizing:border-box;margin:0;padding:0;display:block}#andamento img{width:3rem;height:3rem;padding:1rem}#andamento svg{fill:#fff;width:4rem;height:4rem;padding:1rem}#andamento{opacity:1;text-align:center;color:#fff;background-image:url(/background-alert.webp);background-repeat:no-repeat;background-size:cover;border-radius:1rem;justify-content:space-between;align-items:center;margin-top:.5rem;padding:.1rem;text-decoration:none;transition:opacity .1s;display:flex}#andamento:hover{opacity:.8}`,We=class extends I{static properties={url_acesso:{type:String}};static get styles(){return o`${a(Ue)}`}constructor(){super(),this.url_acesso=``}render(){return D`
            <!--Retorno renderizado-->
            
            <a href="${this.url_acesso}" id="andamento">
                <img src="/icone-os-aberta.webp" class="flex:1"></img>
                <div class="flex:5">
                    <h3>Script em Aberto!</h3>
                    <p>Você possui um Script em aberto. Para continuá-lo, clique no card!</p>
                </div class="flex:1">
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.933 143.933"><path d="M-281.44 658.296c-3.21 0-6.42 1.23-8.88 3.69a12.53 12.53 0 0 0 0 17.759l30.759 30.759h-70.918a12.53 12.53 0 0 0-12.558 12.557 12.53 12.53 0 0 0 12.558 12.558h70.918l-30.76 30.76a12.53 12.53 0 0 0 0 17.758 12.53 12.53 0 0 0 17.76 0l51.857-51.857c.099-.091.19-.19.285-.285l.043-.043.014-.015q.4-.402.765-.838l.023-.028q.346-.418.656-.865l.06-.09q.28-.412.53-.847l.09-.166q.22-.398.41-.813c.04-.085.074-.17.11-.255.109-.253.214-.507.306-.768.042-.117.075-.236.113-.354.075-.233.15-.466.211-.704.044-.171.076-.344.113-.516l.021-.096c.013-.064.03-.128.042-.192q.03-.146.057-.292c.033-.202.051-.405.075-.607.013-.115.03-.23.04-.344.005-.06.016-.118.02-.177v-.003q.033-.456.033-.92v-.011a13 13 0 0 0-.033-.905c-.005-.062-.016-.124-.021-.186-.01-.116-.027-.23-.04-.346-.023-.2-.041-.401-.074-.6-.016-.1-.039-.198-.058-.297q-.02-.1-.043-.198l-.019-.086c-.036-.171-.068-.344-.112-.514q-.057-.218-.123-.431-.042-.14-.088-.277c-.038-.117-.072-.236-.113-.352a13 13 0 0 0-.307-.771q-.052-.127-.108-.252a13 13 0 0 0-.411-.814l-.091-.167a13 13 0 0 0-.53-.848l-.06-.09a12.5 12.5 0 0 0-1.444-1.732l-.015-.015-.042-.043c-.096-.094-.186-.193-.284-.284l-51.859-51.857a12.52 12.52 0 0 0-8.88-3.689z" style="opacity:1;fill-opacity:1;stroke:none;stroke-width:6.61454;stroke-linecap:round;stroke-miterlimit:3.9" transform="translate(351.828 -651.095)"/></svg>
            </a>
        `}};customElements.define(`card-continuar-os`,We);var R=(e,t)=>{window.dispatchEvent(new CustomEvent(`disparar-alerta`,{detail:{categoria:e,mensagem:t}}))},Ge=()=>{let e=localStorage.getItem(`usuario`);return e===null&&(e=`Técnico Não Cadastrato`),e},Ke=[{titulo:`Necessidade de Reiniciar o Roteador`,descricao:`Recomenda-se reiniciar o equipamento periodicamente (a cada 3 a 7 dias) para limpar o cache e otimizar o processamento interno. Essa ação previne travamentos e garante que o dispositivo opere com a máxima eficiência e estabilidade na rede.`},{titulo:`Diferença entre as Redes 2.4 GHz e 5 GHz do WiFi`,descricao:`A rede 2.4 GHz oferece maior alcance, enquanto a 5 GHz entrega velocidades superiores em curtas distâncias. Utilize a 5 GHz para streaming e jogos próximos ao roteador, e a 2.4 GHz para dispositivos distantes ou automação.`},{titulo:`Distribuição de Banda Larga entre os ativos`,descricao:`A velocidade contratada é compartilhada entre todos os dispositivos conectados simultaneamente à rede. O consumo elevado em um único aparelho, como downloads ou vídeos em 4K, pode reduzir o desempenho dos demais ativos conectados.`},{titulo:`Problemas com TVBox e IPTV não Homologados`,descricao:`Equipamentos não homologados pela Anatel podem apresentar instabilidade de conexão e riscos à segurança de seus dados. O uso desses dispositivos impacta o desempenho geral da rede e não possui garantia de suporte ou qualidade.`},{titulo:`Manutenção da Limpeza dos Aparelhos`,descricao:`Mantenha os aparelhos em locais ventilados e livres de poeira para evitar o superaquecimento dos componentes internos. Utilize apenas panos secos e evite produtos líquidos que possam causar danos permanentes ao hardware do roteador.`},{titulo:`Como Evitar Interferências`,descricao:`Posicione o roteador longe de micro-ondas, telefones sem fio e superfícies metálicas para reduzir a degradação do sinal Wi-Fi. Barreiras físicas como paredes de alvenaria e espelhos também bloqueiam a propagação, afetando a cobertura total.`},{titulo:`Como Realizar Testes de Velocidade`,descricao:`Para resultados precisos, realize o teste via cabo de rede em um dispositivo compatível com a velocidade contratada. Certifique-se de que nenhum outro aparelho esteja consumindo banda ou realizando atualizações durante a medição técnica.`},{titulo:`Como Realizar Testes de Lentidão`,descricao:`Identifique se a lentidão ocorre em um dispositivo específico ou em toda a rede para isolar possíveis falhas de hardware. Teste a conexão via cabo e reinicie o equipamento para verificar se a instabilidade persiste antes de acionar o suporte.`},{titulo:`Necessidade de Cabear Ativos e o Porquê`,descricao:`Conectar dispositivos fixos via cabo de rede garante estabilidade máxima e entrega integral da velocidade sem interferências externas. O cabeamento libera o espectro Wi-Fi para dispositivos móveis, melhorando a performance geral da rede.`},{titulo:`Problema no Uso de Repetidores`,descricao:`O uso de repetidores Wi-Fi convencionais pode reduzir a velocidade pela metade e aumentar a latência da conexão. Para expandir a cobertura com qualidade, recomendamos a instalação de sistemas Mesh ou pontos de acesso cabeados.`},{titulo:`WiFi sem Rede`,descricao:`A situação 'conectado, sem internet' ocorre quando há sinal entre o dispositivo e o roteador, mas a navegação falha por travamento ou instabilidade na rede. Recomendamos reiniciar o equipamento para tentar restabelecer o acesso de forma imediata e eficaz.`},{titulo:`Oscilações em Períodos Específicos`,descricao:`Instabilidades em horários determinados podem indicar interferências externas ou saturação de canais na sua região. Caso note um padrão, informe ao técnico os períodos exatos para uma análise de espectro e possível troca de canal.`},{titulo:`Quantidade de Ativos conectados ao Roteador`,descricao:`O excesso de dispositivos conectados simultaneamente sobrecarrega o processador do roteador, gerando lentidão e quedas de conexão. Avalie a capacidade do equipamento para suportar a demanda total de celulares, TVs e itens inteligentes.`},{titulo:`Segundo Ponto`,descricao:`A instalação de um segundo ponto de acesso via cabo é a solução ideal para ambientes amplos ou com muitas barreiras. Isso garante que o sinal chegue com 100% de qualidade em áreas onde o roteador principal não possui alcance.`},{titulo:`Ativos Antigos`,descricao:`Dispositivos com tecnologias de gerações anteriores podem apresentar dificuldades em processar altas velocidades ou manter a estabilidade da conexão sem fio. Essas limitações de hardware podem resultar em lentidões pontuais e quedas de sinal durante o uso diário.`},{titulo:`Manutenção de Cabos de Rede`,descricao:`Verifique periodicamente se os conectores estão firmes e se o cabo não apresenta dobras ou rompimentos visíveis. Evite passar cabos de rede junto à fiação elétrica para prevenir interferências eletromagnéticas que degradam o sinal.`},{titulo:`Problemas do Router em Área Externa`,descricao:`O roteador não deve ser instalado em locais expostos a sol, chuva ou umidade, sob risco de danos permanentes. Avarias causadas por exposição indevida ou mau uso do hardware podem acarretar custos de reposição ao cliente.`},{titulo:`Interferência da Rede 2.4 em Apartamentos`,descricao:`Em edifícios, a alta concentração de redes vizinhas na frequência 2.4 GHz causa saturação e quedas constantes. Priorize o uso da frequência 5 GHz e selecione canais menos congestionados para mitigar o problema de interferência.`},{titulo:`Treinamento Básico de Análise de Rede`,descricao:`Entender o funcionamento básico da rede ajuda na identificação rápida de problemas comuns de conectividade. Orientamos observar as luzes do equipamento e realizar testes simples antes de solicitar uma visita técnica presencial.`},{titulo:`WiFiman: Análise de Canal e Distribuição`,descricao:`O WiFiman é uma ferramenta técnica que mapeia a cobertura do sinal e identifica interferências de redes vizinhas em cada ambiente. O técnico utiliza este aplicativo para selecionar o canal de frequência mais limpo e otimizar a estabilidade do seu Wi-Fi.`},{titulo:`SpeedTest: Teste de Velocidade`,descricao:`O SpeedTest é a ferramenta padrão para validar se a entrega da banda está conforme o plano contratado. Lembre-se que testes via Wi-Fi sofrem variações naturais, sendo o teste via cabo o único método para aferição técnica oficial.`},{titulo:`Downdetector`,descricao:`O site Downdetector permite verificar em tempo real se há falhas gerais nos serviços da operadora ou em aplicativos específicos. Utilize esta consulta para distinguir se a falha é local ou um problema sistêmico externo de grande escala.`},{titulo:`Recomendação de Melhoria na Rede Interna`,descricao:`Durante o atendimento, orientamos sobre a possibilidade de melhorias na rede interna para melhor atender à demanda atual do ambiente. Essas melhorias podem incluir ajustes como reorganização de cabeamento, substituição do roteador por um modelo mais adequado ou ampliação da cobertura Wi-Fi (ex: rede mesh). A implementação pode ser realizada por conta própria ou, se preferir, com o apoio do nosso time de TI.`},{titulo:`Avaliação de TI para Estrutura Empresarial`,descricao:`Identificamos que o ambiente pode se beneficiar de uma estrutura de rede mais robusta, adequada para uso empresarial. Nesse caso, disponibilizamos uma avaliação técnica gratuita com nosso time de TI, que realizará uma análise no local e fornecerá um orçamento para uma possível reestruturação da rede. A execução das melhorias poderá ser feita conosco ou com um profissional de sua preferência.`}],qe=[{titulo:`Reparo/Substituição de Cabeamento UTP`,descricao:`Foi identificada uma ruptura/falha no cabo de rede que impedia a transmissão do sinal. Efetuamos a substituição completa do trecho danificado e realizamos testes de velocidade e estabilidade para garantir o pleno funcionamento da sua internet.`},{titulo:`Correção de Atenuação (Cabo Pressionado/Dobrado)`,descricao:`Identificamos que o cabo de fibra óptica estava sofrendo pressão física por uma tomada/móvel/posição, o que causava perda de pacotes e lentidão (atenuação de sinal). Após o reposicionamento e ajuste do cabeamento, o nível de sinal foi totalmente normalizado e os testes de navegação apresentaram 100% de performance.`},{titulo:`Substituição de Fibra Interna/Conectores`,descricao:`Para corrigir falhas intermitentes de conexão, realizamos a substituição do cabo de fibra óptica interno , e/ou limpeza/troca dos conectores ópticos. Esse procedimento eliminou as impurezas e desgastes que barravam o sinal, restabelecendo a estabilidade e a velocidade contratada. O cliente foi orientado de que novos rompimentos no cordão óptico causados por fatores de mau uso poderão gerar cobranças de material.`},{titulo:`Organização e Fixação de Cabos`,descricao:`Realizamos a organização e o correto alinhamento dos cabos conectados ao roteador e pontos adicionais. Esse ajuste previne futuros rompimentos por tração, evita desconexões acidentais e melhora a estética do ambiente técnico na residência.`},{titulo:`Diagnóstico de Instabilidade de Energia Elétrica`,descricao:`Identificamos que o modem/roteador estava apresentando desligamentos intermitentes devido a mau contato na tomada, uso de adaptadores (benjamins/tês) defeituosos ou oscilação na rede elétrica local. Efetuamos a adequação do cenário energético do equipamento e realizamos testes de estresse para garantir que a oscilação de energia não volte a derrubar a sua conexão. Ou orientado ao cliente sobre a necessidade de melhor adequação energética no local. `},{titulo:`Configuração de Equipamento `,descricao:`Efetuamos o acesso ao roteador para otimização das configurações internas da Rede, checando e configurando as pendências quando observadas. `},{titulo:`Troca de Senha`,descricao:`Realizamos a alteração das credenciais da rede Wi-Fi (nome e/ou senha) conforme a sua preferência. Finalizamos com testes de autenticação e validação de velocidade nos dispositivos conectados.`},{titulo:`Conexão de Dispositivos (Smart TV / Periféricos)`,descricao:`Auxiliamos no procedimento de configuração e conexão manual do seu dispositivo (Smart TV/Videogame/Computador) à rede Wi-Fi local. Foram feitos testes de navegação e streaming diretamente no aparelho para garantir que o dispositivo está recebendo o sinal de forma adequada.`},{titulo:`Diagnóstico Completo de Performance e Conectividade`,descricao:"Realizamos testes avançados de rota e latência (`ping` e `tracert`), validação da taxa de velocidade e uma checagem minuciosa em toda a parte física (fontes de energia, cabos UTP e fibra óptica). Através dos resultados obtidos nessas análises, garantimos que a estrutura interna está 100% íntegra e a sua conexão operando com total estabilidade."},{titulo:`Correção de Retorno de Rede (Looping)`,descricao:`Identificamos um 'retorno de rede' causado por um cabo conectado incorretamente (na porta errada) em um dos pontos, o que gerava um conflito generalizado e derrubava o sinal. Corrigimos a posição dos cabos para isolar o problema, restabelecendo o fluxo correto de dados em toda a residência.`},{titulo:`Diagnóstico de Equipamento de Terceiros / Outro Provedor`,descricao:`Identificamos que a estrutura cabeada local está conectada aos equipamentos de outra operadora, enquanto o nosso equipamento está responsável apenas pelo sinal Wi-Fi. Deixamos a nossa conexão operando perfeitamente e orientamos sobre a necessidade de contatar o suporte responsável pela rede cabeada externa para os demais aparelhos.`},{titulo:`Diagnóstico de Falha no Hardware do Cliente (Placa de Rede)`,descricao:`Após testes com nossos equipamentos de análise, constatamos que a falha de conexão via cabo/Wifi se deve a um problema físico ou de driver na placa de rede do próprio computador/dispositivo do cliente. A nossa internet foi testada e está chegando normalmente até o cabo, sendo necessária a manutenção do aparelho por um técnico de informática de sua confiança.`},{titulo:`Identificação de Gargalo de Banda por Dispositivo Local`,descricao:`Realizamos uma análise de tráfego na rede e identificamos que um ou mais dispositivos específicos da residência estavam consumindo a totalidade da banda contratada com downloads em segundo plano, atualizações automáticas ou uploads de backup em nuvem. Demonstramos o cenário ao cliente e, após isolarmos temporariamente esses aparelhos, a velocidade e a latência nos demais dispositivos voltaram ao padrão normal.`},{titulo:`Diagnóstico de Interferência no Sinal Sem Fio (Wi-Fi)`,descricao:`Após varredura de espectro no local, constatamos que o sinal Wi-Fi estava sofrendo forte atenuação devido a barreiras físicas (paredes densas, espelhos) ou interferência eletromagnética de aparelhos próximos (micro-ondas, telefones sem fio, dispositivos bluetooth). Ajustamos os canais de transmissão do roteador para a melhor frequência disponível e orientamos o cliente sobre o posicionamento ideal dos dispositivos.`},{titulo:`Diagnóstico de Limitação Tecnológica de Dispositivo (Legacy)`,descricao:`Verificamos que a velocidade contratada chega integralmente até o nosso equipamento, porém, o dispositivo testado pelo cliente possui limitações de hardware antigos (como placas Wi-Fi que operam apenas em frequências antigas ou portas de rede limitadas a 100 Mbps). Orientamos o cliente que, para usufruir do total da velocidade contratada nesse aparelho específico, será necessária a utilização de adaptadores modernos ou upgrade do hardware.`},{titulo:`Finalização de Instalação e Entrega de Sinal`,descricao:`Concluímos a instalação física e lógica do seu Ativo de internet no endereço. Foram realizados testes rigorosos de sinal óptico, velocidade de download/upload e estabilidade de navegação, confirmando que o serviço foi entregue exatamente dentro dos padrões contratados.`},{titulo:`Viabilidade de Ponto Adicional`,descricao:`Realizamos uma avaliação técnica estrutural no imóvel para analisar a cobertura do sinal Wi-Fi e constatamos a real necessidade de instalação de um ponto adicional cabeado para cobrir as áreas de sombra. `}],z=class{constructor(e={}){this.OS=e}salvar_os_localstorage(){localStorage.setItem(`OS`,JSON.stringify(this.OS))}carregar_os_localstorage(){let e=JSON.parse(localStorage.getItem(`OS`));this.OS=e}verificar_os_localstorage=()=>{let e=JSON.parse(localStorage.getItem(`OS`));if(e!==null)return e.config_OS.tipo_os};carregar_latitude_longitude(e=null){if(e===null){R(`erro`,`O Valor retornado ao método é Nulo`);return}this.OS.endereco_info_os.coordenadas.latitude=e.latitude,this.OS.endereco_info_os.coordenadas.longitude=e.longitude,this.OS.endereco_info_os.coordenadas.precisao=e.precisao,this.salvar_os_localstorage()}Export_Mensagem_Encaminhada_Cliente=()=>{let e=`Boa tarde! 😊\n\nAqui é *${Ge()}* da Etecc Telecom, fui quem realizou o seu atendimento técnico. Para deixar tudo bem organizado e registrado, vou te encaminhar um resumo com os principais pontos que conversamos.\n\nNesse descritivo também incluí algumas orientações técnicas importantes que vão te ajudar bastante no dia a dia.\n\nQualquer dúvida que surgir depois, estamos à disposição 24h pelo *(13) 3421-1999*, combinado? 👍\n\nAvalie seu atendimento em menos de 1 minuto.\n Sua opinião faz toda a diferença!\n\nhttps://forms.gle/MVCCx1YfLhKVsh9i8\n\n`,t=Object.keys(this.OS.educacao_cliente).length===0;if(!t){let t=Object.keys(this.OS.educacao_cliente);e+=`> *Orientações Técnicas:*

`,t.map(t=>{e+=`- ${Ke[t].descricao}\n\n`})}if(t=this.OS.complemento_atendimento.length===0,t||this.OS.complemento_atendimento.map(t=>{e+=`- ${t}\n\n`}),t=Object.keys(this.OS.atendimento_cliente).length===0,!t){let t=Object.keys(this.OS.atendimento_cliente);e+=`> *Atendimento ao Cliente:*

`,t.map(t=>{e+=`- ${qe[t].descricao}\n\n`})}return e};Finalizar_OS_Simplificado=()=>{let e=`==========================================================================
`;return e+=`                    ORDEM DE SERVIÇO - COMPLETA
`,e+=`==========================================================================

`,e+=this.abertura_script_simples(),e+=`
==========================================================================
`,e+=`			CONFERÊNCIA TÉCNICA
`,e+=`==========================================================================

`,e+=this.conferencia_tecnica_script_simples(),e+=this.relatorio_visita_simples(),e};abertura_script_simples=()=>{let e,t;t=this.OS.endereco_info_os.coordenadas.latitude===null?`Não foi possível capturar as Coordenadas!`:`https://www.google.com/maps?q=${this.OS.endereco_info_os.coordenadas.latitude},${this.OS.endereco_info_os.coordenadas.longitude}\nPrecisão.............: ${this.OS.endereco_info_os.coordenadas.precisao} Metros`;let n=``;n=this.OS.info_cliente.parentesco===`Outro`?this.OS.info_cliente.parentesco_info===null?`Parentesco não informado`:this.OS.info_cliente.parentesco_info:this.OS.info_cliente.parentesco;let r=this.OS.config_OS.data_criacao;e=`Criado..............: ${Temporal.ZonedDateTime.from(r).toString({timeZoneName:`never`})}\nCliente.............: ${this.OS.info_cliente.nome_cadastro===null?`Não Informado`:this.OS.info_cliente.nome_cadastro}\nTelefone............: ${this.OS.info_cliente.telefone===null?`Não Informado`:this.OS.info_cliente.telefone}\nAcompanhante........: ${this.OS.info_cliente.nome_cliente===null?`Não Informado!`:this.OS.info_cliente.nome_cliente} (${n===null?`Não Informado`:n})`;let i=``;return this.OS.endereco_info_os.info_necessaria||(i=`Operador............: ${this.OS.endereco_info_os.complemento_info_necessaria.operador===null?`Não informado`:this.OS.endereco_info_os.complemento_info_necessaria.operador}\n`,i+=`
INFORMAÇÕES OMITIDAS:
--------------------------------------------
`,i+=`${this.OS.endereco_info_os.complemento_info_necessaria.info_padrao.comodato===!0?`• Informação de Comodato;
`:``}`,i+=`${this.OS.endereco_info_os.complemento_info_necessaria.info_padrao.contratacao===!0?`• Data de Contratação;
`:``}`,i+=`${this.OS.endereco_info_os.complemento_info_necessaria.info_padrao.descricao===!0?`• Faltou um melhor detalhamento na abertura da OS;
`:``}`,i+=`${this.OS.endereco_info_os.complemento_info_necessaria.info_padrao.historico===!0?`• Faltou o Histórico de Quedas;
`:``}`,this.OS.endereco_info_os.complemento_info_necessaria.requerimentos.map(e=>{i+=`• ${e};\n`}),i+=`
`),e+=`Informações anexadas.: ${this.OS.endereco_info_os.info_necessaria===!0?`Sim`:`Não`}\n${i}`,e+=this.indicacao_Script_simples(),e+=this.ajuda_interna_Script_simples(),e+=this.encaminhar_externa_Script_simples(),e+=`
ENDEREÇO
--------------------------------------------
`,e+=`Coordenada...........: ${t}\nFoto da frente.......: ${this.OS.endereco_info_os.anexo_fachada===!0?`Sim`:`Não`}\n`,e};indicacao_Script_simples=()=>{let e=`INDICAÇÃO
--------------------------------------------
`;return e+=`Solicitada...........: ${this.OS.indicacao.solicitado===!1?`Não`:`Sim`}\n`,this.OS.indicacao.solicitado===!0&&(e+=`Cliente indicou......: ${this.OS.indicacao.indicado===!0?`Sim`:`Não`};\n`,this.OS.indicacao.indicado===!0&&(e+=`Indicação............: ${this.OS.indicacao.nome===null?`Nome não informado`:this.OS.indicacao.nome} (${this.OS.indicacao.contato===null?`Telefone Não Informado`:this.OS.indicacao.contato})\n`)),e};ajuda_interna_Script_simples=()=>{let e=`
AJUDA INTERNA
--------------------------------------------
`;return e+=`Solicitada...........: ${this.OS.ajuda_interna.verdadeiro===!0?`Sim`:`Não`}\n`,this.OS.ajuda_interna.verdadeiro===!0&&(e+=`Setor................: ${this.OS.ajuda_interna.setor};\n`,e+=`Colaborador..........: ${this.OS.ajuda_interna.nome===null?`Não Informado!`:this.OS.ajuda_interna.nome};\n`),e};encaminhar_externa_Script_simples=()=>{let e=`
EQUIPE EXTERNA
--------------------------------------------
`;return e+=`Necessária...........: ${this.OS.conferencia_tecnica.encaminhar_externa.necessidade===!0?`Sim`:`Não`}\n`,e+=`
Observação:
`,this.OS.conferencia_tecnica.encaminhar_externa.necessidade===!0&&(e+=`${this.OS.conferencia_tecnica.encaminhar_externa.observacao===null?`Técnico não informou o motivo da necessidade!`:this.OS.conferencia_tecnica.encaminhar_externa.observacao}\n`),e};conferencia_tecnica_script_simples=()=>{let e=``;return e+=this.conferencia_cabo_upt_simples(),e+=this.conferencia_fibra_simples(),e+=this.conferencia_fontes_simples(),e+=this.conferencia_ativos_simples(),e+=this.conferencia_site_survey_simples(),e+=this.conferencia_ping_simples(),e+=this.conferencia_tracert_simples(),e+=this.conferencia_velocidade_simples(),e+=this.conferencia_ativos_troca_simples(),e+=this.conferencia_ativos_local_simples(),e};conferencia_cabo_upt_simples=()=>{let e=`CABOS DE REDE
--------------------------------------------
`;return this.OS.conferencia_tecnica.cabos_utp.length===0?e+=`Técnico não realizou testes em cabos de rede no Local!
`:this.OS.conferencia_tecnica.cabos_utp.map(t=>{e+=`\n[ ${t.cabo} ]\n`,e+=`  • Cabo Giga..........: ${t.checagens[0]===!0?`Sim`:`Não`};\n`,e+=`  • Powermitter........: ${t.checagens[1]===!0?`Sim`:`Não`};\n`,e+=`  • Ping...............: ${t.checagens[2]===!0?`Sim`:`Não`};\n`,e+=`  • Defeito anexado....: ${t.anexo_cabos===!0?`Sim`:`Não`};\n`,e+=`  • Observação.........: ${t.observacao===``?`Sem observação adicional!`:t.observacao};\n`}),e};conferencia_fibra_simples=()=>{let e=`
FIBRA
--------------------------------------------

`;if(this.OS.conferencia_tecnica.fibra.sinal_pto===`LOS`)e+=`O sinal da Fibra na PTO está em LOS!
`;else{let t=`${this.OS.conferencia_tecnica.fibra.limpeza===!0?`Realizado a limpeza dos conectores`:`Não realizado a limpeza dos conectores`}`,n=`${this.OS.conferencia_tecnica.fibra.anexo_sinal===!0?`foto da medição anexada na OS.`:`foto não anexada!`}`;e+=`${t}, ${n}\n\n`,e+=`  • Sinal PTO............: ${this.OS.conferencia_tecnica.fibra.sinal_pto===null?`Não Anexado`:`-`+this.OS.conferencia_tecnica.fibra.sinal_pto+` dBm`};\n`,e+=`  • Sinal Patchcord......: ${this.OS.conferencia_tecnica.fibra.sinal_pathcord===null?`Não Anexado`:`-`+this.OS.conferencia_tecnica.fibra.sinal_pathcord+` dBm`};\n`,e+=`  • Sinal AutoISP........: ${this.OS.conferencia_tecnica.fibra.sinal_autoisp===null?`Não Anexado`:`-`+this.OS.conferencia_tecnica.fibra.sinal_autoisp+` dBm`};\n`}return e};conferencia_fontes_simples=()=>{let e=`
FONTES
--------------------------------------------
`;return e+=`  • Mau contato..........: ${this.OS.conferencia_tecnica.fontes.mau_contato===!0?`Sim`:`Não`};\n`,e+=`  • Amperagem correta....: ${this.OS.conferencia_tecnica.fontes.amperagem===!0?`Sim`:`Não`};\n`,e+=`  • Sinais de mau uso....: ${this.OS.conferencia_tecnica.fontes.uso===!0?`Sim`:`Não`};\n`,e};conferencia_ativos_simples=()=>{let e=`
DISPOSITIVOS FINAIS TESTADOS (END DEVICE)
--------------------------------------------

`,t=this.OS.conferencia_tecnica.teste_navegacao;return t.length==0?e+=`Técnico não realizou testes em nenhum ativo, tanto da empresa quanto do cliente!
`:t.map(t=>{e+=`[ ${t.ativos_cliente===!0?`Ativo do Cliente`:`Ativo da Empresa`} ]\n`,e+=`Observação.........: ${t.tipo_ativo} — ${t.observacao===null?`Não foram anexado informações adicionais!`:t.observacao};\n\n`}),e};conferencia_site_survey_simples=()=>{let e=`
SITE SURVEY
--------------------------------------------

`;return e+=`Mapa realizado.......: ${this.OS.conferencia_tecnica.mapa_calor.realizado===!0?`Sim`:`Não`};\n`,e+=`Pontos de sombra.....: ${this.OS.conferencia_tecnica.mapa_calor.pontos_sobra===!0?`Sim`:`Não`};\n`,e};conferencia_ping_simples=()=>{let e=`
PING
--------------------------------------------

`,t=this.OS.conferencia_tecnica.ping_adicional;return t.length===0?e+=`Não foram relatados informações sobre os testes de Ping. Verifique o relatório final ou .Bat
`:t.map(t=>{let n=t.destino===`outro`?t.outro:t.destino;e+=`Ping ${n} (${t.tipo}) — Ativo ${t.titulo}\n`,e+=`  Pacotes............: ${t.pacotes[0]} / ${t.pacotes[1]} / ${t.pacotes[2]}\n`,e+=`  Latência...........: Min (${t.latencia[0]}) | Méd ${t.latencia[1]} | Máx ${t.latencia[2]}\n\n`}),e};conferencia_tracert_simples=()=>{let e=`TRACERT
--------------------------------------------

`,t=this.OS.conferencia_tecnica.tracert_adicional;return t.length===0?e+=`> Não foram relatados informações sobre os testes de Tracert. Verifique o relatório final ou .Bat
`:t.map(t=>{let n=`${t.url===`outro`?t.outra_url:t.url}`;e+=`✓ Tracert ${n} (${t.protocolo}) - Ativo ${t.ativo}\n`}),e};conferencia_velocidade_simples=()=>{let e=`
VELOCIDADE
--------------------------------------------

`,t=this.OS.conferencia_tecnica.velocidade_adicional;return t.length===0?e+=`> Não foram relatados informações sobre os testes de velocidade. Verifique o relatório final ou .Bat
`:t.map(t=>{e+=`[${t.dono} - ${t.ativo}]\n`,e+=`  Provedor...........: ${t.site}\n`,e+=`  Conexão............: ${t.tipo}\n`,e+=`  Download...........: ${t.down}\n`,e+=`  Upload.............: ${t.up}\n`,e+=`  Ping...............: ${t.ping}\n`,e+=`  Jitter.............: ${t.jitter}\n`,e+=`  URL Consulta.......: ${t.jitter}\n`,t.url===null?e+=`
`:e+=`  URL Consulta.......: ${t.url};\n`}),e};conferencia_ativos_troca_simples=()=>{let e=`==========================================================================
`;e+=`		EQUIPAMENTOS
`,e+=`==========================================================================

`;let t=this.OS.conferencia_tecnica.equipamentos_local;if(e+=`Houve troca..........: ${t.troca===!0?`Sim`:`Não`}\n`,t.troca===!0){let n=t.motivo_troca;switch(n){case`solicitacao_cliente`:n=`Solicitação do Cliente`;break;case`mau_funcionamento`:n=`Mau Funcionamento`;break;case`efeito_placebo`:n=`Efeito Placebo`;break;case`necessidade_tecnica`:n=`Necessidade Técnica`;break;case`solicitacao_sup_interno`:n=`Solicitação Sup. Interno`;break;default:n=`Não Informado!`}e+=`Código Conexão.......: ${t.cod_conexao===null?`Não informado!`:t.cod_conexao};\n`,e+=`PPPoE................: ${t.pppoe===null?`Não informado!`:t.pppoe};\n`,e+=`Motivo...............: ${n};\n\n`}return e+=`Equipamentos:

`,t.ativos.length===0?e+=`> Não foram anexados ativos do local ou troca!
`:t.ativos.map(t=>{let n=t.inserido===!0?`[+] INSERIDO`:`[-] RETIRADO`;e+=`${n}\n  ${t.ativo} ( ${t.mac} );\n\n`}),e};conferencia_ativos_local_simples=()=>{let e=`==========================================================================
`;e+=`		ATIVOS NO LOCAL
`,e+=`==========================================================================

`;let t=this.OS.conferencia_tecnica.conferencia_router;return t.length===0?e+=`> O Técnico não anexou a configuração de nenhum ativo!
`:t.map(t=>{let n=t.router===!0?`Primeiro Ponto`:`Segundo Ponto`,r=t.empresa===!0?`Empresa`:`Cliente`,i;i=t.atividade.verdadeiro===!0?`Anormal ( ${t.atividade.observacao} Dias )`:`Normal`;let a;a=t.ativos_anormal.verdadeiro===!0?`Anormal ( ${t.ativos_anormal.observacao} Ativos )`:`Normal`;let o=t.dns===`Outro`?t.outro_dns:t.dns;e+=`ATIVO ${n} ( ${r} )\n`,e+=`  Local...............: ${t.local}\n`,e+=`  Tempo de atividade..: ${i}\n`,e+=`  Ativos conectados...: ${a}\n`,e+=`  Firmware............: ${t.firware_router===!0?`Atualizado`:`Desatualizado`}\n`,e+=`  IPv6 SLAAC..........: ${t.ipv6===!0?`Sim`:`Não`}\n`,e+=`  Rede 2.4 GHz........: ${t.largura_banda===!0?`Sim`:`Não`}\n`,e+=`  DNS.................: ${o}\n`,e+=`  UPnP................: ${t.upnp===!0?`Sim`:`Não`}\n`,e+=`  Local adequado......: ${t.local_equipamento.adequado===!0?`Sim`:`Não`}\n`,t.local_equipamento.adequado===!1?(e+=`  Cliente ciente......: ${t.local_equipamento.ciente===!0?`Sim`:`Não`}\n\n`,e+=`Motivo do Local Inadequado: \n${t.local_equipamento.observacao===null?`Não informado o motivo!`:t.local_equipamento.observacao}\n\n`):e+=`
`}),e};relatorio_visita_simples=()=>{let e=``;return e+=this.relatorio_educacao_cliente_simples(),e+=this.relatorio_bat_simples(),e+=`

==========================================================================
`,e+=`			RELATÓRIO DA VISITA
`,e+=`==========================================================================

`,e+=this.relato_cliente_simples(),e+=this.relatorio_complementar_simples(),e+=this.relatorio_sinal_fibra_script_simples(),e+=this.relatorio_fontes_script_simples(),e+=this.relatorio_site_Survey_script_simples(),e+=this.relatorio_ping_scriot_simples(),e+=this.relatorio_tracert_scriot_simples(),e+=this.relatorio_velocidade_scriot_simples(),e+=this.relatorio_troca_ativo_script_simples(),e};relato_cliente_simples=()=>{let e=``;return this.OS.info_cliente.relato_cliente!==null&&(e+=`RELATO DO CLIENTE:\n\n${this.OS.info_cliente.relato_cliente}\n\n`),e};relatorio_complementar_simples=()=>{let e=``;return this.OS.relato_adicional!==null&&(e+=`${this.OS.relato_adicional}\n\n`),e};relatorio_sinal_fibra_script_simples=()=>{let e=``;return this.OS.conferencia_tecnica.fibra.observacao!==null&&(e+=`RELATÓRIO DA FIBRA:\n${this.OS.conferencia_tecnica.fibra.observacao}\n`),e};relatorio_fontes_script_simples=()=>{let e=``;return this.OS.conferencia_tecnica.fontes.observacao!==null&&(e+=`\nRELATÓRIO DAS FONTES:\n${this.OS.conferencia_tecnica.fontes.observacao}\n`),e};relatorio_ping_scriot_simples=()=>{let e=``;return this.OS.conferencia_tecnica.observacao_ping!==null&&(e=`\nRELATÓRIO DO PING:\n${this.OS.conferencia_tecnica.observacao_ping}\n`),e};relatorio_tracert_scriot_simples=()=>{let e=``;return this.OS.conferencia_tecnica.observacao_tracert!==null&&(e=`\nRELATÓRIO DO TRACERT:\n${this.OS.conferencia_tecnica.observacao_tracert}\n`),e};relatorio_velocidade_scriot_simples=()=>{let e=``;return this.OS.conferencia_tecnica.observacao_velocidade!==null&&(e=`\nRELATÓRIO DA VELOCIDADE:\n${this.OS.conferencia_tecnica.observacao_velocidade}\n`),e};relatorio_troca_ativo_script_simples=()=>{let e=``;return this.OS.conferencia_tecnica.equipamentos_local.observacao!==null&&(e+=`\nRELATÓRIO  DOS ROUTERS:\n${this.OS.conferencia_tecnica.equipamentos_local.observacao}\n`),e};relatorio_educacao_cliente_simples=()=>{let e=``,t=``;if(Object.keys(this.OS.educacao_cliente).length===0&&this.OS.educacao_cliente.constructor===Object)t=`> O técnico não passou informações adicionais ao Cliente!
`;else for(let e in this.OS.educacao_cliente)t+=`    • ${this.OS.educacao_cliente[e]};\n`;return e+=`==========================================================================
`,e+=`			EDUCAÇÃO DO CLIENTE
`,e+=`==========================================================================

`,e+=`Informações passadas ao cliente:\n${t}`,t=``,this.OS.complemento_atendimento.length==0?t=``:(t+=`
Informação Complementar da Visita!
`,this.OS.complemento_atendimento.map(e=>{t+=`    • ${e};\n`})),e+=t,e};relatorio_site_Survey_script_simples=()=>{let e=`
SITE SURVEY:
`,t=this.OS.conferencia_tecnica.mapa_calor;return t.observacao===null?e+=`> O Técnico não relatou informações sobre o Mapa de Calor!
`:e+=`${t.observacao}\n\n`,t.ponto_adicional===null?e+=`> O Técnico não relatou informações sobre a necessidade de ponto adicional!
`:e+=`${t.ponto_adicional}\n`,e};relatorio_bat_simples=()=>{let e=`
==========================================================================
`;return e+=`		RELATÓRIO .BAT SIMPLIFICADO
`,e+=`==========================================================================

`,this.OS.relatorio_estabilidade!==null&&(e+=`${this.OS.relatorio_estabilidade}`),e};Finalizar_OS_Markdown=()=>{let e=``;return e=`# Ordem de Serviço - Completa
---
`,e+=this.abertura_script(),e+=`## Conferência Técnica

`,e+=this.conferencia_tecnica_script(),e+=`## Relatório da Visita

`,e+=this.relatorio_script(),this.OS.relato_adicional!==null&&(e+=`${this.OS.relato_adicional}\n`),e+=this.relatorio_sinal_fibra_script(),e+=this.relatorio_fontes_script(),e+=this.relatorio_site_Survey_script(),e+=this.relatorio_ping_scriot(),e+=this.relatorio_tracert_scriot(),e+=this.relatorio_velocidade_scriot(),e+=this.relatorio_troca_ativo_script(),e+=this.relatorio_educacao_cliente(),this.OS.relatorio_estabilidade!==null&&(e+=`## Relatório .BAT\n\n${this.OS.relatorio_estabilidade}`),e};abertura_script=()=>{let e,t;t=this.OS.endereco_info_os.coordenadas.latitude===null?`Não foi possível capturar as Coordenadas!`:`https://www.google.com/maps?q=${this.OS.endereco_info_os.coordenadas.latitude},${this.OS.endereco_info_os.coordenadas.longitude}\n**Precissão**: ${this.OS.endereco_info_os.coordenadas.precisao} Metros`;let n=``;n=this.OS.info_cliente.parentesco===`Outro`?this.OS.info_cliente.parentesco_info===null?`Parentesco não informado`:this.OS.info_cliente.parentesco_info:this.OS.info_cliente.parentesco;let r=this.OS.config_OS.data_criacao;e=`- **Criado:** ${Temporal.ZonedDateTime.from(r).toString({timeZoneName:`never`})}\n- **Cliente:** ${this.OS.info_cliente.nome_cadastro===null?`Não Informado`:this.OS.info_cliente.nome_cadastro}\n- **Telefone Atualizado**: ${this.OS.info_cliente.telefone===null?`Não Informado`:this.OS.info_cliente.telefone}\n- **Quem Acompanhou:** ${this.OS.info_cliente.nome_cliente===null?`Não Informado!`:this.OS.info_cliente.nome_cliente} (${n===null?`Não Informado`:n})`;let i=``;return this.OS.endereco_info_os.info_necessaria||(i=`**Operador**: ${this.OS.endereco_info_os.complemento_info_necessaria.operador===null?`Não informado`:this.OS.endereco_info_os.complemento_info_necessaria.operador}\n`,i+=`**Informações Omitidas**:
`,i+=`${this.OS.endereco_info_os.complemento_info_necessaria.info_padrao.comodato===!0?`- Informação de Comodato;
`:``}`,i+=`${this.OS.endereco_info_os.complemento_info_necessaria.info_padrao.contratacao===!0?`- Data de Contratação;
`:``}`,i+=`${this.OS.endereco_info_os.complemento_info_necessaria.info_padrao.descricao===!0?`- Faltou um melhor detalhamento na abertura da OS;
`:``}`,i+=`${this.OS.endereco_info_os.complemento_info_necessaria.info_padrao.historico===!0?`- Faltou o Histórico de Quedas;
`:``}`,this.OS.endereco_info_os.complemento_info_necessaria.requerimentos.map(e=>{i+=`- ${e};\n`}),i+=`
`),e+=`\n\n**Todas as informações foram anexadas na abertura da OS:** ${this.OS.endereco_info_os.info_necessaria===!0?`Sim`:`Não`}\n${i}`,e+=this.indicacao_Script(),e+=this.ajuda_interna_Script(),e+=this.encaminhar_externa_Script(),e+=`## Endereço:\n\n **Coordenada de Fechamento:** ${t}\n**Foto da Frente Anexada:** ${this.OS.endereco_info_os.anexo_fachada===!0?`Sim`:`Não`}\n`,e};indicacao_Script=()=>{let e=``;return e=`**Foi solicitado indicação**: ${this.OS.indicacao.solicitado===!1?`Não`:`Sim`}\n`,this.OS.indicacao.solicitado===!0&&(e+=`- Cliente Indicou: ${this.OS.indicacao.indicado===!0?`Sim`:`Não`};\n`,this.OS.indicacao.indicado===!0&&(e+=`- Indicação: ${this.OS.indicacao.nome===null?`Nome não informado`:this.OS.indicacao.nome} (${this.OS.indicacao.contato===null?`Telefone Não Informado`:this.OS.indicacao.contato})\n`)),e};ajuda_interna_Script=()=>{let e=`\n**Solicitado Ajuda Interna**: ${this.OS.ajuda_interna.verdadeiro===!0?`Sim`:`Não`}\n`;return this.OS.ajuda_interna.verdadeiro===!0&&(e+=`- Setor: ${this.OS.ajuda_interna.setor};\n`,e+=`- Colaborador: ${this.OS.ajuda_interna.nome===null?`Não Informado!`:this.OS.ajuda_interna.nome};\n`),e};encaminhar_externa_Script=()=>{let e=`\n**Necessário Encaminhar Equipe Externa**: ${this.OS.conferencia_tecnica.encaminhar_externa.necessidade===!0?`Sim`:`Não`}\n`;return this.OS.conferencia_tecnica.encaminhar_externa.necessidade===!0&&(e+=`> ${this.OS.conferencia_tecnica.encaminhar_externa.observacao===null?`Técnico não informou o motivo da necessidade!`:this.OS.conferencia_tecnica.encaminhar_externa.observacao}\n`),e};conferencia_tecnica_script=()=>{let e=``;return e+=this.conferencai_cabo_upt(),e+=this.conferencia_fibra(),e+=this.conferencia_fontes(),e+=this.conferencia_ativos(),e+=this.conferencia_site_survey(),e+=this.conferencia_ping(),e+=this.conferencia_tracert(),e+=this.conferencia_velocidade(),e+=this.conferencia_ativos_troca(),e+=this.conferencia_ativos_local(),e};conferencai_cabo_upt=()=>{let e=`### Cabos de Rede
`;return this.OS.conferencia_tecnica.cabos_utp.length===0?e+=`> Técnico não realizou testes em cabos de rede no Local!
`:this.OS.conferencia_tecnica.cabos_utp.map(t=>{e+=`**${t.cabo}**\n`,e+=`- Cabo Giga: ${t.checagens[0]===!0?`Sim`:`Não`};\n`,e+=`- Teste no Powermitter: ${t.checagens[1]===!0?`Sim`:`Não`};\n`,e+=`- Teste de Ping: ${t.checagens[2]===!0?`Sim`:`Não`};\n`,e+=`- Anexo do Defeito: ${t.anexo_cabos===!0?`Sim`:`Não`};\n`,e+=`- Observação: ${t.observacao===``?`Sem observação adicional!`:t.observacao};\n`}),e};conferencia_fibra=()=>{let e=`### Fibra
`;if(this.OS.conferencia_tecnica.fibra.sinal_pto===`LOS`)e+=`> O sinal da Fibra na PTO está em LOS!
`;else{let t=`${this.OS.conferencia_tecnica.fibra.limpeza===!0?`Realizado a limpeza dos conectores`:`Não realizado a limpeza dos conectores`}`,n=`${this.OS.conferencia_tecnica.fibra.anexo_sinal===!0?`foto em anexo.`:`foto não anexada!`}`;e+=`${t}, ${n}\n`,e+=`- Sinal na PTO: ${this.OS.conferencia_tecnica.fibra.sinal_pto===null?`Não Anexado`:`-`+this.OS.conferencia_tecnica.fibra.sinal_pto+` dBm`};\n`,e+=`- Sinal no Pathcord: ${this.OS.conferencia_tecnica.fibra.sinal_pathcord===null?`Não Anexado`:`-`+this.OS.conferencia_tecnica.fibra.sinal_pathcord+` dBm`};\n`,e+=`- Sinal AutoISP: ${this.OS.conferencia_tecnica.fibra.sinal_autoisp===null?`Não Anexado`:`-`+this.OS.conferencia_tecnica.fibra.sinal_autoisp+` dBm`};\n`}return e};conferencia_fontes=()=>{let e=`### Fontes
`;return e+=`Verificado mau contato na fonte: ${this.OS.conferencia_tecnica.fontes.mau_contato===!0?`Sim`:`Não`};\n`,e+=`Validado amperagens corretas das fontes: ${this.OS.conferencia_tecnica.fontes.amperagem===!0?`Sim`:`Não`};\n`,e+=`Verificado algum sinal de mau uso: ${this.OS.conferencia_tecnica.fontes.uso===!0?`Sim`:`Não`};\n`,e};conferencia_ativos=()=>{let e=`### Ativos Testados no Local
`,t=this.OS.conferencia_tecnica.teste_navegacao;return t.length==0?e+=`> Técnico não realizou testes em nenhum ativo, tanto da empresa quanto do cliente!
`:t.map(t=>{e+=`${t.ativos_cliente===!0?`Ativo do Cliente`:`Ativo da Empresa`}\n`,e+=`- ${t.tipo_ativo} — ${t.observacao===null?`Não foram anexado informações adicionais!`:t.observacao};\n\n`}),e};conferencia_site_survey=()=>{let e=`### Site Survey (Mapa de Calor)

`;return e+=`Realizado mapa de calor no Local: ${this.OS.conferencia_tecnica.mapa_calor.realizado===!0?`Sim`:`Não`};\n`,e+=`Foi identificado pontos de Sombra: ${this.OS.conferencia_tecnica.mapa_calor.pontos_sobra===!0?`Sim`:`Não`};\n`,e};conferencia_ping=()=>{let e=`### Ping

`,t=this.OS.conferencia_tecnica.ping_adicional;return t.length===0?e+=`> Não foram relatados informações sobre os testes de Ping. Verifique o relatório final ou .Bat
`:t.map(t=>{let n=t.destino===`outro`?t.outro:t.destino;e+=`Ping ${n} (${t.tipo}) — Ativo ${t.titulo}\n`,e+=`- Pacotes: Enviados (${t.pacotes[0]}) — Recebidos (${t.pacotes[1]}) — Perdidos (${t.pacotes[2]});\n`,e+=`- Latência: Mínima (${t.latencia[0]}) — Média (${t.latencia[1]}) — Máxima (${t.latencia[2]});\n\n`}),e};conferencia_tracert=()=>{let e=`### Tracert

`,t=this.OS.conferencia_tecnica.tracert_adicional;return t.length===0?e+=`> Não foram relatados informações sobre os testes de Tracert. Verifique o relatório final ou .Bat
`:t.map(t=>{let n=`${t.url===`outro`?t.outra_url:t.url}`;e+=`- Tracert ${n} (${t.protocolo}) - Ativo ${t.ativo};\n`}),e};conferencia_velocidade=()=>{let e=`### Velocidade

`,t=this.OS.conferencia_tecnica.velocidade_adicional;return t.length===0?e+=`> Não foram relatados informações sobre os testes de velocidade. Verifique o relatório final ou .Bat
`:t.map(t=>{e+=`Teste de Velocidade: Ativo ${t.dono} (${t.ativo})\n`,e+=`- Provedor: ${t.site};\n`,e+=`- Conexão: ${t.tipo};\n`,e+=`- Velocidade: UP (${t.up}) — DOWN (${t.down}) — Ping (${t.ping}) — Jitter (${t.jitter});\n`,t.url===null?e+=`
`:e+=`- URL de Consulta: ${t.url};\n`}),e};conferencia_ativos_troca=()=>{let e=`### Histórico de Equipamentos e Troca

`,t=this.OS.conferencia_tecnica.equipamentos_local;if(e+=`Houve Troca de Equipamento: ${t.troca===!0?`Sim`:`Não`}\n`,t.troca===!0){let n=t.motivo_troca;switch(n){case`solicitacao_cliente`:n=`Solicitação do Cliente`;break;case`mau_funcionamento`:n=`Mau Funcionamento`;break;case`efeito_placebo`:n=`Efeito Placebo`;break;case`necessidade_tecnica`:n=`Necessidade Técnica`;break;case`solicitacao_sup_interno`:n=`Solicitação Sup. Interno`;break;default:n=`Não Informado!`}e+=`Código de Conexão: ${t.cod_conexao===null?`Não informado!`:t.cod_conexao};\n`,e+=`PPPoE do Cliente: ${t.pppoe===null?`Não informado!`:t.pppoe};\n`,e+=`Motivo da Troca: ${n};\n\n`}return e+=`**Equipamentos:**

`,t.ativos.length===0?e+=`> Não foram anexados ativos do local ou troca!
`:t.ativos.map(t=>{let n=t.inserido===!0?`INSERIDO`:`RETIRADO`;e+=`- ${n}: ${t.ativo} ( ${t.mac} );\n`}),e};conferencia_ativos_local=()=>{let e=`### Conferência Técnica nos Ativos

`,t=this.OS.conferencia_tecnica.conferencia_router;return t.length===0?e+=`> O Técnico não anexou a configuração de nenhum ativo!
`:t.map(t=>{let n=t.router===!0?`Primeiro Ponto`:`Segundo Ponto`,r=t.empresa===!0?`Empresa`:`Cliente`,i;i=t.atividade.verdadeiro===!0?`Anormal ( ${t.atividade.observacao} Dias )`:`Normal`;let a;a=t.ativos_anormal.verdadeiro===!0?`Anormal ( ${t.ativos_anormal.observacao} Ativos )`:`Normal`;let o=t.dns===`Outro`?t.outro_dns:t.dns;e+=`#### Ativo ${n} (${r})\n`,e+=`Localização: ${t.local}\n`,e+=`Tempo Atividade: ${i}\n`,e+=`Ativos Conectados: ${a}\n`,e+=`Firmware Atualizado: ${t.firware_router===!0?`Sim`:`Não`}\n`,e+=`Protocolo IPv6 em Slaac: ${t.ipv6===!0?`Sim`:`Não`}\n`,e+=`Largura de Banda da rede 2.4: ${t.largura_banda===!0?`Sim`:`Não`}\n`,e+=`DNS configurado: ${o}\n`,e+=`UPnP Habilitado: ${t.upnp===!0?`Sim`:`Não`}\n`,e+=`Equipamento em local Adequado: ${t.local_equipamento.adequado===!0?`Sim`:`Não`}\n`,t.local_equipamento.adequado===!1&&(e+=`Cliente está ciente que ativo não está em um local adequado: ${t.local_equipamento.ciente===!0?`Sim`:`Não`}\n\n`,e+=`**Motivo do Local Inadequado**: ${t.local_equipamento.observacao===null?`Não informado o motivo!`:t.local_equipamento.observacao}\n`)}),e};relatorio_script=()=>{let e=``;return this.OS.info_cliente.relato_cliente!==null&&(e+=`### Relato do Cliente no Local:\n\n${this.OS.info_cliente.relato_cliente}\n`),e};relatorio_sinal_fibra_script=()=>{let e=``;return this.OS.conferencia_tecnica.fibra.observacao!==null&&(e+=`**Relatório da Fibra:**\n${this.OS.conferencia_tecnica.fibra.observacao}\n`),e};relatorio_fontes_script=()=>{let e=``;return this.OS.conferencia_tecnica.fontes.observacao!==null&&(e+=`\n**Relatório das Fontes:**\n${this.OS.conferencia_tecnica.fontes.observacao}\n`),e};relatorio_ping_scriot=()=>{let e=``;return this.OS.conferencia_tecnica.observacao_ping!==null&&(e=`\n**Relatório do Ping:**\n${this.OS.conferencia_tecnica.observacao_ping}\n`),e};relatorio_tracert_scriot=()=>{let e=``;return this.OS.conferencia_tecnica.observacao_tracert!==null&&(e=`\n**Relatório do Tracert:**\n${this.OS.conferencia_tecnica.observacao_tracert}\n`),e};relatorio_velocidade_scriot=()=>{let e=``;return this.OS.conferencia_tecnica.observacao_velocidade!==null&&(e=`\n**Relatório da Velocidade:**\n${this.OS.conferencia_tecnica.observacao_velocidade}\n`),e};relatorio_troca_ativo_script=()=>{let e=``;return this.OS.conferencia_tecnica.equipamentos_local.observacao!==null&&(e+=`\n**Relatório sobre os Routers no Local:**\n${this.OS.conferencia_tecnica.equipamentos_local.observacao}\n`),e};relatorio_educacao_cliente=()=>{let e=``,t=``;if(Object.keys(this.OS.educacao_cliente).length===0&&this.OS.educacao_cliente.constructor===Object)t=`> O técnico não passou informações adicionais ao Cliente!
`;else for(let e in this.OS.educacao_cliente)t+=`- ${this.OS.educacao_cliente[e]};\n`;return e+=`### Educação do Cliente:\n\n**Informações passadas ao cliente**:\n${t}`,t=``,this.OS.complemento_atendimento.length==0?t=``:(t+=`
**Informação Complementar da Visita!**
`,this.OS.complemento_atendimento.map(e=>{t+=`- ${e};\n`})),e+=t,e};relatorio_site_Survey_script=()=>{let e=`
**Relatório do Site Survey (Mapa de Calor)**:
`,t=this.OS.conferencia_tecnica.mapa_calor;return t.observacao===null?e+=`> O Técnico não relatou informações sobre o Mapa de Calor!
`:e+=`${t.observacao}\n\n`,t.ponto_adicional===null?e+=`> O Técnico não relatou informações sobre a necessidade de ponto adicional!
`:e+=`${t.ponto_adicional}\n`,e};alterar_tipo_os=e=>{if(this.OS==={}||this.OS===null){console.log(`entrei`);return}this.OS.config_OS.tipo_os=e,this.salvar_os_localstorage(),R(`sucesso`,`O tipo da OS foi definido para ${e}`)};alterar_informacoes_cliente=(e=[`tipo`,`valor`])=>{switch(e[0]){case`message`:this.OS.info_cliente.parentesco_info=e[1];break;case`parentesco`:this.OS.info_cliente.parentesco=e[1];break;default:return}this.salvar_os_localstorage()}},Je=class extends I{static properties={nome:{type:String},url_config:{type:String},os_em_aberto:{type:Boolean},url_nova_os:{type:String}};static get styles(){return o`${a(Ve)}`}constructor(){super(),this.os_em_aberto=!1,this.url_nova_os=``}connectedCallback(){super.connectedCallback(),this._checar_os_aberta()}_checar_os_aberta=()=>{let e=new z().verificar_os_localstorage();switch(e===null&&(this.os_em_aberto=!1),e){case`completa`:this.url_nova_os=`/iniciar_os_completa/continue`;break;case`retencao`:this.url_nova_os=`/iniciar_os_completa/retencao`;break;case`retirada`:this.url_nova_os=`/iniciar_os_completa/retirada`;break;case`los`:this.url_nova_os=`/iniciar_os_completa/los`;break;default:return}this.os_em_aberto=!0};render(){return D`
            <!--Retorno renderizado-->
            
            <header class="header-superior">
                <img class="logo" src="letter-logo.svg" alt="letter-logo">
                <div class="item-sync">
                    <p style="margin-right:.4rem;">Em Aberto</p>
                    <img class="logo-sync" src="sync.svg" alt="letter-logo">
                </div>
                
            </header>
            
            <article>
                <!--Dashboard Básica-->
                <div id="dashboard">
                    <div class="coluna">
                        <p class="dash-titulo">Hoje</p>
                        <p class="dash-value">0</p>
                    </div>
                    <div class="coluna">
                        <p class="dash-titulo">Semanal</p>
                        <p class="dash-value">0</p>
                    </div>
                    <div class="coluna">
                        <p class="dash-titulo">Mensal</p>
                        <p class="dash-value">0</p>
                    </div>
                </div>
                
                <!--OS em Andamento!-->
                ${this.os_em_aberto?D`
                    <card-continuar-os
                        url_acesso="${this.url_nova_os}"
                        ></card-continuar-os>
                `:``}
                <!-- Botões de Ações-->
                <div id="acoes"> 
                    <a href="/addos" class="coluna-acoes">
                        <p>adicionar OS</p>
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.93 143.93"><path d="M-279.86 654.1a69 69 0 0 0-68.95 68.96 69 69 0 0 0 68.95 68.95 69 69 0 0 0 68.95-68.95 69 69 0 0 0-68.95-68.95m0 6.62a62.3 62.3 0 0 1 62.34 62.34 62.3 62.3 0 0 1-62.34 62.34 62.3 62.3 0 0 1-62.34-62.34 62.3 62.3 0 0 1 62.34-62.34m-1.39 13.72a3.3 3.3 0 0 0-3.3 3.3v43.1h-43.1a3.3 3.3 0 0 0-3.3 3.3 3.3 3.3 0 0 0 3.3 3.31h43.1v43.09a3.3 3.3 0 0 0 3.3 3.3 3.3 3.3 0 0 0 3.3-3.3v-43.09h43.1a3.3 3.3 0 0 0 3.3-3.3 3.3 3.3 0 0 0-3.3-3.32h-43.1v-43.08a3.3 3.3 0 0 0-3.3-3.31" style="baseline-shift:baseline;display:inline;overflow:visible;opacity:1;vector-effect:none;stroke-linecap:round;stroke-miterlimit:3.9;stop-color:#000;stop-opacity:1" transform="translate(351.83 -651.1)"/></svg>
                    </a> 
                    <a class="coluna-acoes">
                        <p>Histórico Local</p>
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.93 143.93"><path d="M-292.56 792.52c-9.23-.92-19.84-2.92-25.66-4.83-7.29-2.38-14.41-6.68-17-10.25l-1.62-2.24v-51.27c0-42.08.14-51.59.77-53.08 2.74-6.46 15.22-12.64 30.82-15.3 30.42-5.16 66.14-.23 77.87 10.74 4.85 4.54 4.49-.13 4.49 57.52v51.22l-1.51 2.17c-1.94 2.8-8.8 7.3-14.44 9.48-10.16 3.91-21.36 5.63-38.49 5.87-7.13.1-13.99.1-15.23-.03m35.82-8.67c11.41-1.99 21.62-5.8 25.23-9.4 1.25-1.25 1.29-1.57 1.29-12.36 0-6.09-.2-10.97-.43-10.85-12.65 6.5-25.17 9.25-44.7 9.84-20.4.62-39.02-2.36-50.32-8.05a43 43 0 0 0-4.1-1.92c-.17 0-.3 4.66-.3 10.35 0 9.81.07 10.45 1.27 12.22 3.22 4.72 17.18 9.42 33.42 11.25 2.48.28 10.6.43 18.05.33 10.74-.15 15-.44 20.6-1.41m8.11-8.74c-3.84-1.65-4.75-5.76-1.96-8.89 1.35-1.51 2.04-1.83 4-1.83 1.97 0 2.66.32 4.01 1.83 2.19 2.44 2.22 5.13.09 7.4-1.9 2.01-3.82 2.48-6.14 1.49m-8.1-22.86c11.38-1.97 21.6-5.78 25.22-9.39 1.25-1.25 1.29-1.57 1.29-12.36 0-6.09-.2-10.97-.43-10.85-13.6 6.98-28.53 10.03-49.21 10.03-18.32 0-34.28-2.8-45-7.9l-4.65-2.2v10.9c0 12.47 0 12.45 5.03 15.2 6.08 3.3 15.9 5.94 27.7 7.45 9.12 1.17 31 .68 40.04-.88m7.39-9.26c-4.9-2.7-2.85-10.5 2.76-10.5 2.86 0 5.64 2.76 5.64 5.6a5.7 5.7 0 0 1-8.4 4.9m-7.4-22.33c8.93-1.55 18.3-4.62 22.6-7.41a67 67 0 0 0 3.46-2.32c.17-.24.76-24.7.59-24.7-.08 0-1.48.76-3.1 1.67-6.09 3.44-18.22 6.55-30.88 7.94-7.6.83-23.9.82-31.87-.02-12.27-1.29-25.07-4.65-31.05-8.15a18 18 0 0 0-2.76-1.43c-.18 0-.32 5.01-.32 11.14 0 10.02.11 11.32 1.1 12.93 2.83 4.65 17.39 9.61 33.6 11.44 2.47.28 10.6.43 18.04.33 10.76-.15 15-.44 20.6-1.42m8.07-10.45c-5-2.1-4.59-8.7.65-10.42 4.98-1.65 9.26 4.77 5.8 8.71a5.7 5.7 0 0 1-6.45 1.7m-19.19-21.43c15.27-.86 32.74-6.06 36.53-10.88 2.38-3.02.66-6.5-4.5-9.13-20.86-10.6-67.95-10.53-88.21.14-7.28 3.84-7.4 7.94-.36 12.14 3.32 1.98 13.47 5.1 20.62 6.35 6.93 1.2 21.08 2.19 27.02 1.87z" style="stroke-width:1" transform="translate(351.83 -651.1)"/></svg>
                    </a> 
                </div>
            </article>

            <menu-inferior></menu-inferior>
        `}};customElements.define(`home-page`,Je);var Ye=`.header-superior{background-color:var(--header-color);box-sizing:border-box;justify-content:center;align-items:center;height:auto;margin:0;padding:.7rem;display:flex}.header-superior h2{font-size:var(--header-2);color:var(--text-color);margin:0}@media (width>=1024px){.header-superior{border-radius:100rem;margin-top:.5rem;padding:.4rem}}.logo{height:2rem}.logo-sync{height:1.5rem}.item-sync{box-sizing:border-box;border:2px solid #f7ecac;border-radius:100rem;align-items:center;height:2.5rem;padding:0 .5rem;display:flex}article{padding:1rem}#dashboard{justify-content:center;gap:.3rem;margin-top:.3rem;display:flex}#dashboard div{text-align:center;background-color:var(--cards-background);color:var(--text-color);border-radius:1rem}.coluna{flex:1}.dash-titulo{margin:1rem 0 0;font-size:1rem;font-weight:900}.dash-value{margin:0 0 .5rem;font-size:2rem}#andamento{background-color:var(--destaque-color);text-align:center;border-radius:1rem;margin-top:.5rem;padding:.1rem}#andamento a{background-color:var(--btn-background-color);border-color:var(--btn-border-color);color:var(--btn-text-background-color);border-style:solid;border-width:.1rem;border-radius:100rem;margin:.5rem;padding:.5rem;display:block}#andamento a:hover{color:var(--btn-text-background-color);background-color:var(--destaque-color)}#acoes{gap:.5rem;margin-top:.5rem;display:flex}.coluna-acoes{border-color:var(--btn-border-color);text-align:center;background-color:var(--btn-background-color);color:var(--btn-text-background-color);border-style:solid;border-width:.1rem;border-radius:1rem;flex:1;text-decoration:none;transition:background-color .1s}.coluna-acoes:hover{background-color:var(--destaque-color);color:var(--btn-text-background-color);fill:var(--btn-text-background-color)}.coluna-acoes:hover svg{fill:var(--btn-text-background-color)}.coluna-acoes svg{fill:var(--btn-text-background-color);width:3rem;padding-bottom:1rem}#container-os{flex-direction:column;display:flex}`,Xe=`#container-card-os{color:var(--btn-text-background-color);background-color:var(--btn-background-color);border-radius:var(--border-radius);border-style:solid;border-width:0 0 0 .2rem;align-items:center;gap:1rem;margin:.5rem;padding:1rem;text-decoration:none;display:flex}#container-card-os svg{fill:var(--btn-text-background-color);width:4rem}#container-card-os:hover{background-color:var(--destaque-color)}`,Ze=class extends I{static properties={nome:{type:String},url_config:{type:String},titulo:{type:String},descricao:{type:String},icone:{type:Object},cor_borda:{type:String},link:{type:String}};static get styles(){return o`${a(Xe)}`}constructor(){super(),this.url_config=``,this.titulo=`valor padrão`,this.descricao=`valor padrão`,this.icone=`valor padrão`,this.link=`/`}render(){return D`
            <!--Retorno renderizado-->
            <a 
                id="container-card-os" 
                href="/${this.link}" 
                style="border-color: ${this.cor_borda};">
                ${this.icone}
                <div>
                    <h3>${this.titulo}</h3>
                    <p>${this.descricao}</p>
                </div>
            </a>
        `}};customElements.define(`card-os`,Ze);var Qe=D`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.93 143.93"><path d="M-324.05 790.77a53 53 0 0 1-3.25-.65c-2.95-.65-3.73-1.21-3.94-2.83l-.16-1.14 6-6.01 5.98-6.01v-5.29l-2.98-2.97-2.98-2.97h-5.54l-5.85 5.84c-5.41 5.4-5.93 5.85-6.79 5.85-1.82 0-2.42-.7-3.23-3.76-.67-2.5-.84-8.53-.32-11.24a26.5 26.5 0 0 1 13.92-18.62c3.83-2 6.52-2.7 11-2.87 2.85-.1 4.18-.04 5.8.3l2.12.43 9.71-9.71 9.72-9.71-16.18-16.3-16.18-16.28-3.71-.14a26 26 0 0 1-4.2-.36c-.25-.12-3.14-4.69-6.4-10.15-5.12-8.52-5.95-10.07-5.95-10.98 0-1 .18-1.24 4.03-5.15 4.07-4.12 4.96-4.84 6.07-4.84.33 0 5.12 2.7 10.63 6.01 8.65 5.18 10.09 6.14 10.4 6.87q.35.87.35 4.25v3.38l16.2 16.2 16.22 16.2 9.76-9.76 9.77-9.77-.37-1.94c-.22-1.1-.37-3.4-.36-5.38.01-2.86.13-3.87.72-6.02 1.34-4.91 3.3-8.33 6.91-12.06 6.52-6.72 15.72-9.34 25.1-7.15 2.8.65 3.6 1.24 3.8 2.78.15 1.06.1 1.15-1.97 3.44-1.17 1.29-3.8 4.01-5.85 6.05l-3.73 3.7v5.29l2.96 2.98 2.95 2.98h5.33l5.85-5.85c5.41-5.4 5.93-5.85 6.79-5.85 1.83 0 2.45.73 3.2 3.78.33 1.28.44 2.99.44 6.52 0 4.31-.07 5-.66 7.06a26.4 26.4 0 0 1-14.2 16.68 23 23 0 0 1-10.28 2.46c-2.72.1-4.08.03-5.68-.3l-2.1-.44-7.87 7.87-7.87 7.86 1.9 1.77 1.91 1.76 1.29-1.16c1.02-.92 1.48-1.15 2.25-1.15a2.58 2.58 0 0 1 2.57 3.02 4 4 0 0 1-1.08 1.74c-.51.5-.93.99-.93 1.1 0 .1 8.43 7.93 18.72 17.39 11.46 10.52 19.05 17.68 19.57 18.47.47.7 1.18 1.99 1.58 2.86.67 1.46.73 1.9.83 5.62.09 3.58.03 4.21-.47 5.74-2.7 8.1-12.04 12.65-20.16 9.83-3.8-1.32-4.15-1.66-22.62-21.73l-17.15-18.63-.93.9c-1.59 1.54-2.91 1.73-4.17.6-.73-.67-1.02-2.04-.59-2.87.18-.35.72-1.05 1.22-1.57l.9-.94-1.8-1.92-1.78-1.92-7.78 7.8-7.78 7.8.37 2.07c.2 1.14.36 3.56.35 5.38-.02 3.8-.74 7-2.34 10.46a27.8 27.8 0 0 1-14.13 13.51 28.5 28.5 0 0 1-12.88 1.79m6.76-5.5c7.9-1.4 14.46-7.45 16.7-15.41.83-2.93.83-7.8 0-10.86a9 9 0 0 1-.43-2.8c.09-.34 12.09-12.54 27.07-27.52 24.04-24.04 26.99-26.9 27.72-26.9.45 0 1.74.24 2.88.53 4.03 1.03 9.57.55 13.43-1.15a21.7 21.7 0 0 0 12.25-14.96c.2-.96.38-2.88.38-4.26v-2.5l-4.58 4.56-4.58 4.55h-4.56c-3.43 0-4.74-.1-5.27-.38-.98-.51-8.19-8.14-8.52-9-.35-.92-.35-8.1 0-9.02.15-.39 2.18-2.69 4.52-5.11l4.24-4.4-1.8-.09c-2.4-.11-5.3.37-7.92 1.32-6.1 2.2-11.25 7.85-13.1 14.38a24 24 0 0 0-.01 10.9c.32 1.2.51 2.47.43 2.8-.09.35-12.1 12.56-27.1 27.56l-26.94 26.94-1.29-.16c-.7-.1-2.05-.34-3-.56s-2.96-.4-4.5-.4q-9 0-15.34 6.78c-3.61 3.88-5.27 7.9-5.49 13.32l-.13 3.3 4.61-4.56 4.61-4.56h9.69l4.23 4.16c2.33 2.3 4.4 4.55 4.6 5.02.51 1.2.5 8.23 0 9.41-.2.47-2.23 2.7-4.5 4.95a65 65 0 0 0-4.13 4.3c0 .32 3.66.21 5.83-.17zm11.76-36.24c-.83-.83-1.06-1.83-.65-2.82a2.4 2.4 0 0 1 2.37-1.57q1.73 0 2.38 1.57a2.5 2.5 0 0 1-2.38 3.46c-.79 0-1.25-.17-1.72-.64m7.6-7.43c-.94-.78-1.2-1.83-.72-2.91.19-.44 8.01-8.45 17.38-17.8 16.3-16.25 17.08-17 18-17 1.9 0 3.2 1.88 2.46 3.58-.19.43-8 8.44-17.38 17.79-16.29 16.26-17.08 17-18 17q-.96 0-1.74-.66m40.56-40.72c-.84-.84-1.07-1.83-.66-2.82a2.4 2.4 0 0 1 2.38-1.57q1.73 0 2.37 1.57a2.5 2.5 0 0 1-2.37 3.45c-.8 0-1.26-.17-1.72-.63m32.16 84.4c3.06-.8 5.73-3.03 7.08-5.92.63-1.34.71-1.83.71-4.3s-.08-2.94-.72-4.3c-.4-.85-1.05-1.93-1.45-2.42-.88-1.04-37.08-34.28-37.34-34.28-.1 0-2.86 2.67-6.13 5.95l-5.94 5.94 1.08 1.13c.6.62 8.08 8.75 16.62 18.07 14.9 16.22 17.1 18.5 18.73 19.34 2.1 1.1 5 1.4 7.36.78m-5.3-9.71c-.37-.14-6.23-5.82-13.04-12.62-13.01-13-13.13-13.14-12.36-14.64a2.7 2.7 0 0 1 2.5-1.55c1.03 0 1.23.18 13.69 12.63 12.53 12.52 12.64 12.65 12.64 13.71 0 1.18-.63 2.09-1.76 2.51-.77.3-.82.3-1.68-.04m-36.12-39.4 5.82-5.84-1.85-1.7a22 22 0 0 0-1.99-1.7c-.07-.01-2.68 2.53-5.8 5.64l-5.65 5.67 1.7 1.85a23 23 0 0 0 1.82 1.88c.07.01 2.75-2.6 5.95-5.8m-22.5-22.49 1.85-1.85-17-17-16.99-17.01v-7.19l-7.78-4.67a212 212 0 0 0-8-4.67c-.13 0-1.19 1.03-2.37 2.3l-2.14 2.3 4.64 7.73 4.64 7.74 3.48.09c3.28.08 3.52.13 4.38.79.5.39 8.16 8.02 17.04 16.96s16.2 16.28 16.28 16.3.97-.8 1.98-1.82" transform="translate(351.83 -651.1)"/></svg>
        `,$e=D`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.93 143.93"><path d="M-287.68 772.27c-.7-.15-2-.76-2.68-1.28a7 7 0 0 1-1.87-2.93 5 5 0 0 1 .01-3.24l.29-.92-1.3 1.26c-3.04 2.92-6.13 3.17-9.07.72-2-1.66-2.66-3.56-2.05-5.9a11 11 0 0 1 .94-2.4c.03-.08-.13.03-.37.25a10 10 0 0 1-3.05 1.77c-.75.25-1.22.31-2.23.27a4.6 4.6 0 0 1-2.43-.62c-3.6-1.78-4.9-5.37-3.28-9.03.2-.44.35-.83.35-.87s-.29.19-.64.51c-2.14 1.97-5.09 2.53-7.48 1.4-2.87-1.33-4.1-3.17-4.1-6.11 0-2.5 0-2.49 3.14-6.78a77 77 0 0 0 2.82-3.98c0-.08-1.7-2.32-3.78-5l-3.78-4.85 1.24-2.64a19 19 0 0 1 1.37-2.63c.08 0 1.2 1.34 2.5 2.98l4.43 5.6 2.08 2.6.84-.07q3.32-.3 5.24.67c2.18 1.1 3.59 4.36 3.16 7.33l-.13.93.57.54c.32.3.57.6.57.66s.83.15 1.84.17c1.76.06 1.87.08 2.95.61a6.9 6.9 0 0 1 3.86 5.95c0 .67.03.71.67 1.1.37.2.81.57.98.8.3.4.33.41 1.15.28a7 7 0 0 1 3.4.36c1.63.6 3.5 3.1 3.76 5.03.07.5.15.93.19.96.03.03.83.63 1.78 1.32 1.2.89 1.93 1.32 2.44 1.44 1.58.4 3.06 1.52 3.29 2.5.07.33.5.72 1.77 1.64.91.66 1.92 1.29 2.23 1.39.7.23 2.42.24 3.01.01.97-.37 1.8-1.52 1.96-2.74l.09-.65-3.26-2.48c-8.03-6.1-9.18-7.02-9.31-7.36-.2-.54-.17-1.5.08-1.97.3-.57 1.17-.95 2.2-.95.95 0 .4-.34 6.86 4.21l7.94 5.6c5.35 3.78 4.92 3.53 6.29 3.54a3.84 3.84 0 0 0 3.83-3.92c0-.84-.07-1.1-.52-1.93-.47-.86-.72-1.1-2.17-2.16l-10.02-7.23c-7.98-5.76-8.37-6.07-8.53-6.63a4 4 0 0 1-.1-1.3q.18-1.73 2.25-1.8c.74-.03.83.02 2.56 1.24a4224 4224 0 0 0 15.36 10.88c5.52 3.92 6.4 4.5 6.83 4.63.9.26 2.36.16 3-.2a4.5 4.5 0 0 0 1.97-4.1c-.17-1.63-.27-1.74-5.12-5.25a3846 3846 0 0 1-17.94-13.09l-3.65-2.67-.13-.7q-.26-1.38.48-2.2c.33-.38.56-.48 1.18-.54.42-.04 1-.03 1.28.02.34.07 2.05 1.2 4.96 3.27l8.4 5.99c11.1 7.9 13.82 9.82 14.2 9.95.72.25 2.93.07 3.64-.3a5.55 5.55 0 0 0 2.59-5.61c-.27-1.32-1.01-2.23-3.73-4.6l-31.37-27.36c-2.28-2-4.33-3.7-4.54-3.78a11 11 0 0 0-5.75-.35 8.4 8.4 0 0 0-4.49 3.23 3 3 0 0 0-.73 1.72 16 16 0 0 1-1.39 4.3 14.8 14.8 0 0 1-8.9 7.65c-2.26.75-2.98.84-4.42.55-2.54-.52-4.56-1.67-5.19-2.97-.38-.8-.45-2.4-.11-3.04l.66-1.3c1.05-2.04 1.48-4.08 1.67-7.98.2-3.97 1.12-6.83 3.08-9.66.36-.51.66-.97.66-1s-3.02-.07-6.71-.07c-3.7 0-6.7-.05-6.7-.11 0-.07.65-1.44 1.45-3.07l1.45-2.95 10.15.01 10.15.01 1.92-.91c4.3-2.04 7.82-3.14 11.18-3.5 1.41-.14 6.94.37 9.68.9.57.11 1.88.48 2.9.82 5.11 1.7 11.69 2.95 14.74 2.81l1.1-.05 6.22 12.9c12.7 26.3 12.12 25.1 11.99 25.44l-1.44 3.3-1.31 2.97.68.97c1.33 1.91 2.17 4.31 2.16 6.21 0 2.43-1.14 5.19-2.82 6.88a10.3 10.3 0 0 1-6.14 2.77l-1.02.1v.98c-.01 2.56-.77 4.35-2.59 6.1-1.96 1.88-3.55 2.49-6.46 2.48l-1.67-.01-.1.76a7.8 7.8 0 0 1-2.36 4.8 8 8 0 0 1-5.9 2.5c-1.73 0-3.14-.39-5.15-1.4l-1.69-.84-.42.9a9 9 0 0 1-3.48 3.47 8.3 8.3 0 0 1-4.69.9c-1.98-.07-2.92-.34-4.04-1.15l-.62-.45-.56.84c-1.9 2.85-4.78 4.43-7.18 3.93M-338.05 725a65 65 0 0 1-4.99-2.42c-3.98-2.06-4.43-2.33-4.84-2.91-.42-.6-.45-.75-.45-1.87v-1.21l5.62-11.4c8.29-16.87 12.6-25.83 13.9-28.97.71-1.7 2.12-2.67 3.49-2.42.6.11 8.9 4.07 9.74 4.65a3.6 3.6 0 0 1 1.31 2.45c0 .97-.5 2.16-3.39 8.18-3.47 7.2-9.16 19.1-10.06 21.02-3.66 7.76-6.47 13.41-6.87 13.84a3.6 3.6 0 0 1-3.46 1.06m114.37-.2a4.6 4.6 0 0 1-1.91-1.36c-.2-.24-1.99-3.8-3.96-7.9-10.08-20.9-14.23-29.36-15.73-32.02-1.2-2.14-1.16-3.63.14-4.73.64-.54 8.72-4.5 9.74-4.77q1.53-.42 2.9.96c.67.66 1.09 1.41 3.17 5.6 1.31 2.67 4.82 9.75 7.79 15.73 10.87 21.94 10.13 20.37 10.13 21.47 0 .81-.63 2.06-1.34 2.63-.78.63-8.92 4.36-9.84 4.5-.28.05-.78 0-1.1-.12" style="stroke-width:.999999" transform="translate(351.83 -651.1)"/></svg>
`,et=D`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.93 143.93"><path d="m-282.64 789.61-31.09-15c-15.79-7.6-28.91-14.06-29.17-14.35-.43-.5-.46-2.66-.46-37.25s.03-36.75.46-37.24c.26-.3 14.34-7.23 31.29-15.42 22.58-10.9 31.07-14.88 31.75-14.89s8.92 3.86 31.75 14.88c16.95 8.19 31.03 15.13 31.29 15.42.43.5.46 2.66.46 37.25s-.03 36.75-.46 37.25c-.5.57-61.65 30.17-62.78 30.39q-.66.13-3.04-1.04m.93-37.89V718l-2.72-1.35a28 28 0 0 1-3.17-1.77c-1.07-.94-.21-3.24 1.22-3.24.34 0 1.91.61 3.5 1.36 2.64 1.25 2.94 1.33 3.72 1.05.46-.17 3.68-1.69 7.15-3.38s6.62-3.07 7.02-3.07a1.93 1.93 0 0 1 1.79 2.6c-.21.57-1.57 1.33-7.53 4.24l-7.28 3.54v33.76c0 29.3.05 33.75.38 33.68.21-.05 13.2-6.27 28.84-13.83l28.46-13.74v-33.82c0-18.6-.04-33.82-.1-33.82-.04 0-4.12 1.95-9.06 4.33l-8.96 4.33-.14 12.46c-.1 10.6-.19 12.53-.53 12.86-.62.62-15.76 7.83-16.43 7.83-.33 0-.87-.26-1.21-.58l-.61-.57v-12.23c0-9.47-.08-12.28-.33-12.47-.24-.19-50.85-24.67-58.43-28.26l-.95-.45-9.82 4.72c-5.4 2.6-9.74 4.8-9.64 4.88s9.77 4.77 21.49 10.42c11.71 5.64 21.5 10.44 21.76 10.66 1.12.99.2 3.24-1.32 3.24-.42 0-10.1-4.53-22.64-10.58a3023 3023 0 0 0-22.03-10.59c-.06 0-.11 15.22-.11 33.81v33.82l28.5 13.78c15.69 7.59 28.66 13.8 28.85 13.82.26.02.33-6.89.33-33.7m-47.36-.12c-2.7-1.31-5.1-2.64-5.36-2.95-.86-1.04-.48-2.33.84-2.88.76-.31 1.08-.2 5.64 1.97 2.65 1.27 5.1 2.56 5.42 2.86.72.66.78 1.78.14 2.53-.95 1.12-1.5 1-6.68-1.53m3.85-7.56c-4.94-2.4-9.08-4.5-9.2-4.7-.84-1.28-.16-2.9 1.28-3.05.57-.05 3.2 1.09 9.62 4.18 4.87 2.34 9.06 4.45 9.32 4.69.7.63.63 2.31-.12 2.84-.32.23-.89.4-1.25.4-.37 0-4.71-1.97-9.65-4.36m77.37-19.84 5.16-2.5.07-10.32c.04-5.68-.03-10.33-.16-10.33-.12 0-2.56 1.13-5.42 2.51l-5.2 2.51v10.32c0 5.68.09 10.32.2 10.32.1 0 2.52-1.13 5.35-2.5m-1.92-24.27c3.1-1.49 5.62-2.77 5.62-2.85 0-.19-56.35-27.34-56.71-27.32-.17 0-2.84 1.25-5.94 2.77l-5.63 2.76 28.26 13.66a2631 2631 0 0 0 28.52 13.68c.14 0 2.8-1.2 5.88-2.7m18.6-8.94c4.28-2.08 7.88-3.84 7.98-3.93s-12.6-6.34-28.23-13.89l-28.42-13.72-8.24 3.98-8.24 3.99 5.25 2.53 28.4 13.75c12.74 6.17 23.28 11.18 23.42 11.13s3.78-1.77 8.07-3.84" transform="translate(351.83 -651.1)"/></svg>
`,tt=D`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.93 143.93"><path d="M-308.36 790.42a3.4 3.4 0 0 1-1.28-1.04c-1.08-1.65-1.39-.64 10.8-35.62l11.49-32.94-.96-.79a13.3 13.3 0 0 1-5.05-10.45c0-6.08 4.23-11.54 10.18-13.13 1.7-.46 4.92-.46 6.62 0a13.75 13.75 0 0 1 10.19 13.13c0 4.08-1.76 7.7-5.06 10.45l-.96.8 11.49 32.93c12.3 35.3 11.93 34.07 10.73 35.7-.63.84-2.36 1.5-3.32 1.25-1.74-.44-2.14-1.18-4.91-9.16l-2.62-7.54h-37.7l-2.62 7.53c-1.44 4.14-2.83 7.75-3.08 8.03a3.2 3.2 0 0 1-3.94.85m44.89-23.5-2.32-6.67-2.3-6.62h-23.55l-2.3 6.62-2.32 6.68c0 .03 7.37.06 16.4.06 9.01 0 16.4-.03 16.39-.06m-7.15-20.37c-.01-.18-1.83-5.5-4.04-11.84l-4.02-11.5h-2.38l-4.02 11.5a440 440 0 0 0-4.03 11.84c-.02.26 2 .34 9.24.34s9.26-.08 9.25-.34m-6.47-30.86a8 8 0 0 0 3.45-3.59 7 7 0 0 0-2.22-7.95 6.64 6.64 0 0 0-9.98 2.4 6.5 6.5 0 0 0 1.16 7.62 6 6 0 0 0 4.81 2.01 7 7 0 0 0 2.78-.49m-32.56 38.97a54 54 0 0 1-22.61-58.8c4.26-16.72 17.1-30.93 33.47-37.03a53.6 53.6 0 0 1 57.04 12.37 53.7 53.7 0 0 1 14.93 49.1 54 54 0 0 1-16.76 29.32 67 67 0 0 1-8.28 6.22l-.97.58-1-2.98c-.54-1.64-1.03-3.13-1.1-3.3-.06-.18.54-.74 1.34-1.25 4-2.56 9.32-7.73 12.42-12.07a51 51 0 0 0 7.9-18.51c.49-2.3.59-3.71.6-8.2.03-5.82-.23-8.2-1.35-12.44a46.5 46.5 0 0 0-12.53-21.72 47.2 47.2 0 0 0-44.83-12.38c-14.97 3.68-27.46 14.9-32.93 29.6-2.1 5.67-2.8 9.87-2.76 16.94.01 4.49.12 5.9.6 8.2a52 52 0 0 0 7.9 18.52c2.38 3.37 8.23 9.19 11.4 11.34 1.36.93 2.42 1.82 2.36 1.98-.07.17-.56 1.65-1.1 3.28a47 47 0 0 1-1.05 2.98c-.03 0-1.24-.79-2.69-1.75m5.44-12.6a54 54 0 0 1-9.33-9.87 39.6 39.6 0 0 1-6.83-22.61c0-5.31.7-9.39 2.4-14 5.16-14.02 17.25-23.85 32.28-26.24 2.56-.41 9.09-.41 11.64 0 15.03 2.4 27.12 12.22 32.29 26.24 1.7 4.61 2.4 8.69 2.4 14-.01 11-3.96 20.62-11.65 28.34-3.06 3.07-6 5.46-6.31 5.14-.1-.1-.67-1.6-1.28-3.34l-1.1-3.16 1.59-1.33a33.8 33.8 0 0 0 11.76-30.3c-2.01-14.25-12.64-25.55-26.9-28.6-3.14-.68-10.1-.68-13.23 0-21.85 4.67-33.52 28.25-23.75 47.93a35 35 0 0 0 8.6 10.97l1.6 1.33-1.13 3.23c-.62 1.78-1.23 3.26-1.36 3.3-.13.03-.89-.43-1.69-1.02m4.72-14.16a27 27 0 0 1-6.6-11.84c-.55-2.07-.63-2.96-.61-6.75.02-4.66.34-6.46 1.8-10.08 1.6-3.95 5.1-8.5 8.65-11.24 9.43-7.25 23.33-7.25 32.76 0a30 30 0 0 1 8.66 11.24c1.46 3.62 1.78 5.42 1.8 10.08.01 3.8-.07 4.68-.61 6.75a27.4 27.4 0 0 1-6.86 12.12l-1.56 1.54-1.23-3.48-1.22-3.48 1.19-1.67a19.94 19.94 0 0 0-2.79-26.4c-11.93-10.99-30.98-4.47-33.77 11.56a19.6 19.6 0 0 0 3.47 14.84l1.19 1.67-1.2 3.4a80 80 0 0 1-1.28 3.45c-.04.05-.84-.73-1.79-1.7" transform="translate(351.83 -651.1)"/></svg>
`,nt=D`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.933 143.933"><path d="M-315.673 786.202c-3.581-1.239-6.118-3.5-7.721-6.884l-.946-1.997-.079-46.27-.078-46.271-3.958-.012c-2.177 0-4.526-.138-5.22-.298-3.76-.868-7.07-3.515-8.775-7.02-.97-1.993-1.02-2.25-1.023-5.396-.003-3.214.027-3.365 1.11-5.559 1.363-2.757 3.35-4.709 6.146-6.033l2.01-.952 42.549-.08c47.058-.086 44.224-.194 48.048 1.824 2.296 1.211 5.118 4.033 6.33 6.329 2.006 3.802 1.893.857 1.893 49.603v44.134h17.103l1.017 1.016 1.016 1.017v4.846c0 5.459-.356 7.4-1.894 10.314-1.21 2.295-4.033 5.117-6.328 6.328-3.796 2.003-1.068 1.895-47.585 1.884-39.167-.011-42.221-.046-43.615-.528zm7.129-6.742a6.35 6.35 0 0 0 2.21-2.222c.822-1.397.833-1.48.98-7.791l.15-6.38.976-.871.977-.872h61.593l-.079-44.327-.079-44.327-.74-1.495c-.945-1.908-2.754-3.718-4.65-4.65l-1.487-.732-35.506-.079c-19.529-.044-35.507-.015-35.507.063 0 .08.303.855.673 1.724l.673 1.581.15 53.522.149 53.52.7 1.129c.799 1.283 2.304 2.525 3.541 2.92 1.482.472 3.784.16 5.276-.713zm4.064-31.867c-1.292-1.292-1.236-3.01.143-4.388l1.017-1.017h16.848c16.16.001 16.888.025 17.803.583 1.241.757 1.738 2.366 1.158 3.753-.85 2.034.044 1.942-18.945 1.942h-17.15zm0-19.136c-1.292-1.292-1.236-3.01.143-4.388l1.017-1.017h46.764l1.016 1.017c1.38 1.379 1.435 3.096.143 4.388l-.874.874h-47.335zm0-19.136c-1.292-1.292-1.236-3.01.143-4.389l1.017-1.016h46.764l1.016 1.016c1.38 1.38 1.435 3.097.143 4.389l-.874.874h-47.335zm0-19.136c-1.292-1.292-1.236-3.01.143-4.389l1.017-1.016h46.764l1.016 1.016c1.38 1.38 1.435 3.097.143 4.389l-.874.874h-47.335zm76.419 89.386c1.92-.951 3.71-2.75 4.62-4.642.562-1.169.748-2.132.85-4.41l.13-2.916h-76.551l-.127 4.71c-.107 3.964-.23 4.959-.779 6.29-.358.87-.652 1.645-.652 1.724s15.978.107 35.507.063l35.507-.079zm-96.578-105.28c0-3.996-.015-4.085-.902-5.52-1.302-2.104-3.523-3.242-5.92-3.033-3.18.277-5.468 2.526-5.795 5.692-.146 1.415-.05 1.914.635 3.315 1.457 2.98 3.258 3.767 8.394 3.672l3.588-.066z" style="stroke-width:1" transform="translate(351.828 -651.095)"/></svg>
`,B=`#c20000`,rt=`#a6a6a6`,it=class extends I{static properties={nome:{type:String},router:{attribute:!1}};static get styles(){return o`${a(Ye)}`}constructor(){super()}render(){return D`
            <!--Retorno renderizado-->
            <header class="header-superior">
                <h2>Selecione o Tipo de Script</h2>                
            </header>

            <div id="container-os">
                <card-os
                    link="iniciar_os_completa/novo"
                    titulo="ATENDIMENTO COMPLETO"
                    descricao="Oscilação Geral, Lentidão, Instalação/Troca de Equipamentos, Avaliação de Conexão..."
                    .icone=${Qe}
                    cor_borda="${B}"
                ></card-os>

                <card-os
                    link="iniciar_os_completa/novo"
                    titulo="ENCAMINHAR EQUIPE EXTERNA (LOS)"
                    descricao="Sem Sinal, Rompimento, outros..."
                    .icone=${tt}
                    cor_borda="${B}"
                ></card-os>

                <card-os
                    link="iniciar_os_completa/novo"
                    titulo="RETENÇÃO DE CLIENTE"
                    descricao="Negociação no Local..."
                    .icone=${$e}
                    cor_borda="${B}"
                ></card-os>

                <card-os
                    link="iniciar_os_completa/novo"
                    titulo="RETIRADA DE EQUIPAMENTO"
                    descricao="Cancelamento Concluído, recolhimento dos aparelhos comodatos..."
                    .icone=${et}
                    cor_borda="${B}"
                ></card-os>

                <card-os
                    link="iniciar_os_completa/novo"
                    titulo="CI AUSÊNCIA"
                    descricao="Script para comunicado interno de ausência..."
                    .icone=${nt}
                    cor_borda="${rt}"
                ></card-os>
                
            </div>
            
            <menu-inferior></menu-inferior>
        `}};customElements.define(`add-os`,it);var at=`h1{color:var(--btn-text-background-color);text-align:center}a.ativo{background-color:var(--destaque-color)}h1{font-size:var(--header-1)}h2{font-size:var(--header-2)}h3{font-size:var(--header-3)}p,a{font-size:var(--paragraph)}nav{background-color:var(--header-color);box-sizing:border-box;z-index:4000;justify-content:space-around;align-items:center;width:100%;margin-left:auto;margin-right:auto;padding:.2rem 0;display:flex;position:fixed;bottom:0}nav a svg{width:1.7rem;fill:var(--text-color)}nav a{text-align:center;width:7rem;color:var(--text-color);border-radius:.7rem;padding:.2rem;font-weight:600;text-decoration:none;transition:background-color .2s}nav a:hover{background-color:var(--destaque-color)}nav a p{margin:0;font-size:.8rem}.container-item{padding:1rem}@media (width>=1024px){.container-item{padding:0}nav{background-color:var(--background-color);border-radius:100rem;width:50%;margin-bottom:.5rem;padding:.4rem}nav a p{font-size:1rem}nav a{border-radius:100rem;width:9rem;padding-bottom:.1rem}}#container-drawer-ferramentas{flex-direction:column;justify-content:space-between;row-gap:1rem;padding:2rem 0 0;display:flex}#container-drawer-ferramentas a{flex-direction:row;align-items:center;gap:1rem;width:100%;display:flex}#container-drawer-ferramentas a svg{fill:var(--destaque-color)}.form-container{max-width:auto;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.form-group{flex-direction:column;margin-bottom:20px;display:flex}.form-group-row{align-items:center;gap:8px;margin-bottom:15px;display:flex}.form-label{color:var(--btn-text-background-color);margin-bottom:6px;font-size:17px;font-weight:600}.form-label-inline{color:#333;cursor:pointer;font-size:14px}.form-input,.form-select,.form-textarea{appearance:none;box-sizing:border-box;color:#1a202c;background-color:#f8fafc;border:2px solid #e2e8f0;border-radius:6px;width:100%;padding:10px 12px;font-family:inherit;font-size:15px;transition:border-color .2s,background-color .2s}.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--destaque-color);background-color:#fff;outline:none}.form-select{cursor:pointer;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");background-position:right 12px center;background-repeat:no-repeat;background-size:16px;padding-right:40px}.form-textarea{resize:vertical;min-height:100px}.form-radio,.form-checkbox{appearance:none;font:inherit;color:#3182ce;cursor:pointer;background-color:#f8fafc;border:2px solid #cbd5e1;place-content:center;width:18px;height:18px;margin:0;transition:border-color .2s;display:grid}.form-radio{border-radius:50%}.form-checkbox{border-radius:4px}.form-radio:before{content:"";background-color:currentColor;border-radius:50%;width:8px;height:8px;transition:transform .12s ease-in-out;transform:scale(0)}.form-checkbox:before{content:"";clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%);background-color:currentColor;width:10px;height:10px;transition:transform .12s ease-in-out;transform:scale(0)}.form-radio:checked:before,.form-checkbox:checked:before{transform:scale(1)}.form-radio:checked,.form-checkbox:checked{border-color:#3182ce}.form-radio:focus,.form-checkbox:focus{outline:2px solid #ebf8ff}.form-button{appearance:none;color:#fff;cursor:pointer;background-color:#3182ce;border:none;border-radius:6px;width:100%;padding:12px 24px;font-family:inherit;font-size:15px;font-weight:600;transition:background-color .2s}.form-button:hover{background-color:#2b6cb0}.form-button:active{background-color:#2c5282}`,ot={config_OS:{tipo_os:null,finalizada:!1,info_encaminhadas:!1,id:null,data_criacao:null,data_alteracao:null},info_cliente:{nome_cliente:null,nome_cadastro:null,parentesco:null,parentesco_info:null,relato_cliente:null,telefone:null},endereco_info_os:{coordenadas:{latitude:null,longitude:null,precisao:0},anexo_fachada:!1,info_necessaria:!0,complemento_info_necessaria:{requerimentos:[],operador:null,info_padrao:{historico:!1,comodato:!1,descricao:!1,contratacao:!1}}},conferencia_tecnica:{cabos_utp:[],fontes:{mau_contato:!0,amperagem:!0,uso:!0,observacao:null},fibra:{sinal_pto:null,sinal_pathcord:null,sinal_autoisp:null,anexo_sinal:!0,limpeza:!0,observacao:null},conferencia_router:[],teste_navegacao:[{ativos_cliente:!1,tipo_ativo:`celular`,observacao:null},{ativos_cliente:!1,tipo_ativo:`computador`,observacao:null},{ativos_cliente:!0,tipo_ativo:`celular`,observacao:null}],mapa_calor:{realizado:!1,pontos_sobra:!1,ponto_adicional:null,observacao:null},ping_adicional:[],observacao_ping:null,tracert_adicional:[],observacao_tracert:null,velocidade_adicional:[],observacao_velocidade:null,encaminhar_externa:{necessidade:!1,observacao:null},equipamentos_local:{troca:!1,pppoe:null,cod_conexao:null,motivo_troca:`solicitacao_cliente`,observacao:null,ativos:[]}},ajuda_interna:{verdadeiro:!1,setor:`Torre`,nome:null},indicacao:{solicitado:!1,indicado:!1,nome:null,contato:null,encaminhada:!1},educacao_cliente:{},atendimento_cliente:{},complemento_atendimento:[],relato_adicional:null,relatorio_estabilidade:null},st=`:host{margin:0;padding:0;display:block}#container{background-color:var(--header-color);color:var(--text-color);box-sizing:border-box;justify-content:space-between;align-items:center;margin:0;padding:0;display:flex}#container h3{margin:0;padding:0}#container p{margin:0;padding:0;font-size:1rem;font-weight:100}#container span{font-weight:900}@media (width>=1024px){#container{border-radius:100rem;margin-top:.5rem;padding:0}#container_texto h3{font-size:1rem}#container_texto p{padding:.3rem;font-size:.8rem}.coluna{margin:0;padding:0}.btn-icone{width:1.1rem;margin:0;padding:0}svg{width:1.5rem}}#container_texto{text-align:center}.coluna{margin:.1rem;padding:.5rem}.btn-icone{background-color:var(--btn-background-color);border-radius:50%;justify-content:center;align-items:center;margin:.4rem;padding:.8rem;display:inline-flex}svg{fill:var(--text-color);width:1.5rem;padding:0}`,ct=class extends I{static properties={nome:{type:String}};static get styles(){return o`${a(st)}`}constructor(){super(),this.nome_tecnico=Ge()}render(){return D`
            <!--Retorno renderizado-->
            <div id="container">
                <div class="coluna" style="flex:1">
                    <a href="/addos" class="btn-icone">
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.933 143.933"><path d="M-217.731 788.256c-5.306-30.001-26.797-55.73-55.514-66.458-1.99-.744-3.742-1.352-3.896-1.352-.19 0-.301 4.38-.351 13.867l-.073 13.866-.81 1.016c-1.491 1.875-3.851 2.63-5.939 1.903-.86-.3-56.97-42.087-58.692-43.71-1.266-1.194-1.717-2.21-1.717-3.875 0-1.664.45-2.68 1.717-3.875 1.392-1.314 57.842-43.477 58.588-43.76 2.383-.906 5.806.628 6.704 3.004.183.486.282 4.939.283 12.832l.002 12.088 2.445.892c27.329 9.973 48.46 32.588 56.522 60.49 1.34 4.638 2.518 10.499 3.112 15.479.544 4.563.612 14.799.126 19.05-.396 3.471-1.554 10.25-1.837 10.755-.133.238-.382-.583-.67-2.212z" transform="translate(351.828 -651.095)"/></svg>
                    </a>
                </div>
                <div id="container_texto" class="coluna" style="flex:3">
                    <h3>CentralOS</h3>
                    <h3>Ordem de Serviço Completa</h3>
                    <p>Técnico: <span>${this.nome_tecnico}</span></p>
                </div>
                <div class="coluna" style="flex:1">
                    
                </div>
            </div>
        `}};customElements.define(`header-page-os`,ct);async function lt(){if(!navigator.geolocation)throw Error(`Geolocalização não é suportada pelo seu navegador.`);if(navigator.permissions&&(await navigator.permissions.query({name:`geolocation`})).state===`denied`)throw Error(`Permissão de localização negada. Altere nas configurações do navegador.`);return new Promise((e,t)=>{navigator.geolocation.getCurrentPosition(t=>{e({latitude:t.coords.latitude,longitude:t.coords.longitude,precisao:t.coords.accuracy})},e=>{switch(e.code){case e.PERMISSION_DENIED:t(Error(`Usuário negou a permissão de Geolocalização.`));break;case e.POSITION_UNAVAILABLE:t(Error(`Informações de localização indisponíveis.`));break;case e.TIMEOUT:t(Error(`Tempo limite atingido ao obter localização.`));break;default:t(Error(`Erro desconhecido ao obter localização.`))}},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})})}var ut=`.form-container{max-width:auto;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.form-group{flex-direction:column;margin-bottom:20px;display:flex}.form-group-row{align-items:center;gap:8px;margin-bottom:15px;display:flex}.form-label{color:var(--btn-text-background-color);margin-bottom:6px;font-size:17px;font-weight:600}.form-label-inline{color:#333;cursor:pointer;font-size:14px}.form-input,.form-select,.form-textarea{appearance:none;box-sizing:border-box;color:#1a202c;background-color:#f8fafc;border:2px solid #e2e8f0;border-radius:6px;width:100%;padding:10px 12px;font-family:inherit;font-size:15px;transition:border-color .2s,background-color .2s}.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--destaque-color);background-color:#fff;outline:none}.form-select{cursor:pointer;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");background-position:right 12px center;background-repeat:no-repeat;background-size:16px;padding-right:40px}.form-textarea{resize:vertical;min-height:100px}`,dt=class extends I{static properties={parentesco_just:{type:Boolean},objeto_os:{type:Object}};static get styles(){return o`${a(ut)}`}constructor(){super(),this.parentesco_just=!1,this.objeto_os={}}connectedCallback(){super.connectedCallback(),this.parentesco_just=this.objeto_os.OS.info_cliente.parentesco===`Outro`}_mudar_parentesco=e=>{e.target.value===`Outro`?this.parentesco_just=!0:this.parentesco_just=!1};_salvar_descricao_outros=e=>{let t=e.target.value,n=[e.target.id,t];this.objeto_os.alterar_informacoes_cliente(n)};render(){return D`
            <!--Retorno renderizado-->
            <div class="form-group">
                <label for="parentesco" class="form-label">Qual o Parentesco?</label>
                <select 
                    @change="${e=>{this._mudar_parentesco(e),this._salvar_descricao_outros(e)}}"
                    id="parentesco" name="parentesco" class="form-select">
                    <option ?selected="${this.objeto_os.OS.info_cliente.parentesco===`Titular`}" value="Titular">Titular</option>
                    <option ?selected="${this.objeto_os.OS.info_cliente.parentesco===`Esposa'o`}" value="Esposa'o">Esposa'o</option>
                    <option ?selected="${this.objeto_os.OS.info_cliente.parentesco===`Filho'a`}" value="Filho'a">Filho'a</option>
                    <option ?selected="${this.objeto_os.OS.info_cliente.parentesco===`Funcionário`}" value="Funcionário">Funcionário</option>
                    <option ?selected="${this.objeto_os.OS.info_cliente.parentesco===`Avó'ô`}" value="Avó'ô">Avó'ô</option>
                    <option ?selected="${this.objeto_os.OS.info_cliente.parentesco===`Tio'a`}" value="Tio'a">Tio'a</option>
                    <option ?selected="${this.objeto_os.OS.info_cliente.parentesco===`Outro`}" value="Outro">Outro</option>
                </select>

                ${this.parentesco_just?D`
                <br>
                <div class="form-group">
                    <label for="message" class="form-label">Justifique em Caso de "Outro"</label>
                    <textarea 
                        @change="${this._salvar_descricao_outros}"
                        id="message" 
                        name="message" 
                        rows="3" 
                        class="form-textarea"
                        .value="${this.objeto_os.OS.info_cliente.parentesco_info===null?``:this.objeto_os.OS.info_cliente.parentesco_info}"
                        ></textarea>
                </div>`:``}
            </div>
        `}};customElements.define(`select-parentesco`,dt);var ft=class extends I{static properties={objeto_os:{type:Object}};static get styles(){return o`
	    host: {
            
	    }
        /* Helper para organizar os blocos sem usar <br> */
        .form-group {
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
        }

        .form-group-row {
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        /* Estilização das Labels */
        .form-label {
            font-size: 17px;
            font-weight: 600;
            margin-bottom: 6px;
            color: var(--btn-text-background-color);
        }

        .form-label-inline {
            font-size: 14px;
            color: #333333;
            cursor: pointer;
        }

        /* Reset e Estilo Flat para Inputs de Texto, Select e Textarea */
        .form-input,
        .form-select,
        .form-textarea {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            /* Zera o visual padrão do navegador */

            width: 100%;
            box-sizing: border-box;
            font-family: inherit;
            font-size: 15px;
            padding: 10px 12px;

            border: 2px solid #e2e8f0;
            border-radius: 6px;
            /* Bordas levemente arredondadas */
            background-color: #f8fafc;
            color: #1a202c;
            transition: border-color 0.2s ease, background-color 0.2s ease;
        }

        /* Estados de Foco */
        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
            outline: none;
            border-color: var(--destaque-color);
            /* Azul Flat */
            background-color: #ffffff;
        }
	  `}constructor(){super(),this.objeto_os={}}connectedCallback(){super.connectedCallback()}_alterar_nome_cliente=e=>{let t=e.target.value===``?null:e.target.value;this.objeto_os.OS.info_cliente.nome_cliente=t,this.objeto_os.salvar_os_localstorage()};_alterar_nome_cadastro=e=>{let t=e.target.value===``?null:e.target.value;this.objeto_os.OS.info_cliente.nome_cadastro=t,this.objeto_os.salvar_os_localstorage()};_alterar_telefone_contato=e=>{let t=e.target.value===``?null:e.target.value;this.objeto_os.OS.info_cliente.telefone=t,this.objeto_os.salvar_os_localstorage()};render(){return D`
            <!--Retorno renderizado-->
            <div class="form-group">
                <label for="fname" class="form-label">Nome do Cliente/Acompanhante:</label>
                <input 
                    @change="${this._alterar_nome_cliente}"
                    placeholder="Nome de quem acompanhou a visita" type="text" id="fname" name="fname" value="${this.objeto_os.OS.info_cliente.nome_cliente===null?``:this.objeto_os.OS.info_cliente.nome_cliente}" class="form-input">
            </div>
            <p style="color:var(--color-text-info);">É necessário que você preencha o nome do cadastro desse cliente para as mensagens altomáticas.<p>
            <div style="display:flex; gap:1rem; align-items: flex-end;">
                <div class="form-group; flex:2">
                    <label for="fname" class="form-label">Nome do Cadastro:</label>
                    <input 
                        @change="${this._alterar_nome_cadastro}"
                        placeholder="Nome do Cliente em Cadastro" type="text" id="fname" name="fname" 
                        .value="${this.objeto_os.OS.info_cliente.nome_cadastro}" class="form-input">
                </div>
                <div class="form-group; flex:1">
                    <label for="fname" class="form-label">Telefone:</label>
                    <input 
                        @change="${this._alterar_telefone_contato}"
                        placeholder="Telefone de contato atualizado!" type="text" id="fname" name="fname" 
                        .value="${this.objeto_os.OS.info_cliente.telefone}" class="form-input">
                </div>
            </div>
            <br>
            
        `}};customElements.define(`nome-cliente`,ft);var V=(e,t)=>t.some(t=>e instanceof t),pt,mt;function ht(){return pt||=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]}function gt(){return mt||=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey]}var H=new WeakMap,U=new WeakMap,W=new WeakMap;function _t(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`success`,i),e.removeEventListener(`error`,a)},i=()=>{t(K(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener(`success`,i),e.addEventListener(`error`,a)});return W.set(t,e),t}function vt(e){if(H.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`complete`,i),e.removeEventListener(`error`,a),e.removeEventListener(`abort`,a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException(`AbortError`,`AbortError`)),r()};e.addEventListener(`complete`,i),e.addEventListener(`error`,a),e.addEventListener(`abort`,a)});H.set(e,t)}var G={get(e,t,n){if(e instanceof IDBTransaction){if(t===`done`)return H.get(e);if(t===`store`)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return K(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t===`done`||t===`store`)?!0:t in e}};function yt(e){G=e(G)}function bt(e){return gt().includes(e)?function(...t){return e.apply(q(this),t),K(this.request)}:function(...t){return K(e.apply(q(this),t))}}function xt(e){return typeof e==`function`?bt(e):(e instanceof IDBTransaction&&vt(e),V(e,ht())?new Proxy(e,G):e)}function K(e){if(e instanceof IDBRequest)return _t(e);if(U.has(e))return U.get(e);let t=xt(e);return t!==e&&(U.set(e,t),W.set(t,e)),t}var q=e=>W.get(e);function St(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,t),s=K(o);return r&&o.addEventListener(`upgradeneeded`,e=>{r(K(o.result),e.oldVersion,e.newVersion,K(o.transaction),e)}),n&&o.addEventListener(`blocked`,e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener(`close`,()=>a()),i&&e.addEventListener(`versionchange`,e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}var Ct=[`get`,`getKey`,`getAll`,`getAllKeys`,`count`],wt=[`put`,`add`,`delete`,`clear`],J=new Map;function Tt(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t==`string`))return;if(J.get(t))return J.get(t);let n=t.replace(/FromIndex$/,``),r=t!==n,i=wt.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ct.includes(n)))return;let a=async function(e,...t){let a=this.transaction(e,i?`readwrite`:`readonly`),o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return J.set(t,a),a}yt(e=>({...e,get:(t,n,r)=>Tt(t,n)||e.get(t,n,r),has:(t,n)=>!!Tt(t,n)||e.has(t,n)}));var Et=[`continue`,`continuePrimaryKey`,`advance`],Dt={},Y=new WeakMap,Ot=new WeakMap,kt={get(e,t){if(!Et.includes(t))return e[t];let n=Dt[t];return n||=Dt[t]=function(...e){Y.set(this,Ot.get(this)[t](...e))},n}};async function*At(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;let n=new Proxy(t,kt);for(Ot.set(n,t),W.set(n,q(t));t;)yield n,t=await(Y.get(n)||t.continue()),Y.delete(n)}function jt(e,t){return t===Symbol.asyncIterator&&V(e,[IDBIndex,IDBObjectStore,IDBCursor])||t===`iterate`&&V(e,[IDBIndex,IDBObjectStore])}yt(e=>({...e,get(t,n,r){return jt(t,n)?At:e.get(t,n,r)},has(t,n){return jt(t,n)||e.has(t,n)}}));var Mt=`CentralOS_DB`,Nt=1;async function X(){let e=await St(Mt,Nt,{upgrade(e,t,n,r){e.objectStoreNames.contains(`modelo_script`)||e.createObjectStore(`modelo_script`,{keyPath:`id`,autoIncrement:!0})}});return console.log(`Banco aberto:`,e.name,`v`,e.version),e}async function Pt(e){await(await X()).add(`modelo_script`,{categoria:e.categoria,titulo:e.titulo,descricao:e.descricao}),R(`sucesso`,`Novo script adicionado com sucesso!`)}async function Z(){return await(await X()).getAll(`modelo_script`)}async function Ft(e){await(await X()).delete(`modelo_script`,e)}async function It(e){await(await X()).put(`modelo_script`,e)}var Lt=class extends I{static properties={aberto:{type:Boolean},alvo:{type:Object},lista:{type:Array},categoria:{type:String},cores:{type:Object}};static styles=o`
    /* Fundo escuro (Overlay) */
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 5000;
      
      /* Controla a exibição com opacidade para efeito fade-in */
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    /* O painel lateral do Drawer */
    .drawer-content {
      position: fixed;
      top: 0;
      /* Começa totalmente escondido para a esquerda fora da tela */
      right: -100%; 
      width: 400px;
      max-width: 95vw; /* Garante que não passe da tela em celulares pequenos */
      height: 100vh;
      background-color: var(--background-color);
      color: var(--text-color);
      box-shadow: 5px 0 15px rgba(0, 0, 0, 0.2);
      z-index: 5001;
      padding: 1.5rem;
      box-sizing: border-box;

      /* Transição suave do movimento de deslizar */
      transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* --- ESTADOS ATIVOS (Quando a propriedade 'aberto' for true) --- */

    .overlay.visivel {
      opacity: 1;
      visibility: visible;
    }

    .drawer-content.visivel {
      right: 0; /* Desliza para a borda esquerda da tela */
    }

    /* Botão de fechar interno básico */
    .btn-fechar {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: inherit;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  `;constructor(){super(),this.aberto=!0,this.alvo={},this.lista=[],this.categoria=`Outro`,this.cores={Ping:`#1E3A8A`,Tracert:`#065F46`,Velocidade:`#991B1B`,Fibra:`#C2410C`,Fonte:`#6D28D9`,"Troca de Equipamento":`#BE185D`,"Site Survey":`#0F766E`,"Relato do Cliente":`#4338CA`,"Encaminhar Externa":`#374151`,Outros:`#78350F`}}_fechar=()=>{this.remove()};async connectedCallback(){super.connectedCallback(),this.lista=await Z()}_Adicionar_texto=(e,t)=>{let n=this.alvo,r=this.lista[t].descricao,i=n.selectionStart,a=n.selectionEnd,o=n.value;n.value=o.substring(0,i)+r+o.substring(a);let s=i+r.length;n.selectionStart=s,n.selectionEnd=s,n.focus(),this._fechar()};render(){return D`
      <div 
        class="overlay ${this.aberto?`visivel`:``}" 
        @click="${this._fechar}"
      ></div>

      <div class="drawer-content ${this.aberto?`visivel`:``}">
        <button class="btn-fechar" @click="${this._fechar}">&times;</button>
        
        <h2>Modelos de Scripts</h2>
        <hr>
        <div style="display:flex; flex-direction:column;">


        ${this.lista.map((e,t)=>{if(e.categoria===this.categoria)return D`
                        <div @dblclick="${e=>this._Adicionar_texto(e,t)}">
                            <h3 
                                style="user-select: none;"
                                >${e.titulo}</h3>
                            <p
                                style="user-select: none;"
                                >${e.descricao}</p>
                            <span
                                style="background-color: ${this.cores[e.categoria]}; padding: .2rem 1rem; border-radius:1rem; "
                                >${e.categoria}</span>
                        </div>
                    `})}

            
            ${this.lista.map((e,t)=>{if(e.categoria!==this.categoria)return D`
                        <div @dblclick="${e=>this._Adicionar_texto(e,t)}">
                            <h3 
                                style="user-select: none;"
                                >${e.titulo}</h3>
                            <p
                                style="user-select: none;"
                                >${e.descricao}</p>
                            <span
                                style="background-color: ${this.cores[e.categoria]}; padding: .2rem 1rem; border-radius:1rem; "
                                >${e.categoria}</span>
                        </div>
                    `})}

        </div>

      </div>
    `}};customElements.define(`drawer-scripts`,Lt);function Q(e,t){let n=document.createElement(`drawer-scripts`);n.alvo=e,n.categoria=t,document.body.appendChild(n)}var Rt=class extends I{static properties={objeto_os:{type:Object}};static get styles(){return o`
	    host: {
            
	    }
        /* Helper para organizar os blocos sem usar <br> */
        .form-group {
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
        }

        .form-group-row {
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        /* Estilização das Labels */
        .form-label {
            font-size: 17px;
            font-weight: 600;
            margin-bottom: 6px;
            color: var(--btn-text-background-color);
        }

        .form-label-inline {
            font-size: 14px;
            color: #333333;
            cursor: pointer;
        }

        /* Reset e Estilo Flat para Inputs de Texto, Select e Textarea */
        .form-input,
        .form-select,
        .form-textarea {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            /* Zera o visual padrão do navegador */

            width: 100%;
            box-sizing: border-box;
            font-family: inherit;
            font-size: 15px;
            padding: 10px 12px;

            border: 2px solid #e2e8f0;
            border-radius: 6px;
            /* Bordas levemente arredondadas */
            background-color: #f8fafc;
            color: #1a202c;
            transition: border-color 0.2s ease, background-color 0.2s ease;
        }

        /* Estados de Foco */
        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
            outline: none;
            border-color: var(--destaque-color);
            /* Azul Flat */
            background-color: #ffffff;
        }
        /* Customizações específicas do Textarea */
        .form-textarea {
            resize: vertical;
            min-height: 100px;
        }
	  `}constructor(){super(),this.objeto_os={}}connectedCallback(){super.connectedCallback()}_alterar_data_cliente=e=>{let t=e.target.value;this.objeto_os.OS.info_cliente.relato_cliente=t,this.objeto_os.salvar_os_localstorage()};render(){return D`
            <!--Retorno renderizado-->
            <div class="form-group">
                <label for="message" class="form-label">Relato do Cliente</label>
                <textarea
                    @dblclick="${e=>Q(e.target,`Relato do Cliente`)}"
                    style="border-left: 5px solid #ff0000;"
                    @change="${this._alterar_data_cliente}"
                    placeholder="Em sua Tratativa inicial, qual foi o relato do cliente?"
                    id="message" name="message" rows="10" cols="30" class="form-textarea"
                    .value="${this.objeto_os.OS.info_cliente.relato_cliente===null?``:this.objeto_os.OS.info_cliente.relato_cliente}"></textarea>
            </div>
            
        `}};customElements.define(`area-relato-cliente`,Rt);var zt=class extends I{static properties={objeto_os:{type:Object}};static get styles(){return o`
	    host: {
            
	    }
        /* Helper para organizar os blocos sem usar <br> */
        .form-group {
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
        }

        .form-group-row {
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        /* Estilização das Labels */
        .form-label {
            font-size: 17px;
            font-weight: 600;
            margin-bottom: 6px;
            color: var(--btn-text-background-color);
        }

        .form-label-inline {
            font-size: 14px;
            color: #333333;
            cursor: pointer;
        }

        /* Reset e Estilo Flat para Inputs de Texto, Select e Textarea */
        .form-input,
        .form-select,
        .form-textarea {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            /* Zera o visual padrão do navegador */

            width: 100%;
            box-sizing: border-box;
            font-family: inherit;
            font-size: 15px;
            padding: 10px 12px;

            border: 2px solid #e2e8f0;
            border-radius: 6px;
            /* Bordas levemente arredondadas */
            background-color: #f8fafc;
            color: #1a202c;
            transition: border-color 0.2s ease, background-color 0.2s ease;
        }

        /* Estados de Foco */
        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
            outline: none;
            border-color: var(--destaque-color);
            /* Azul Flat */
            background-color: #ffffff;
        }
            /* From Uiverse.io by Ghost-aft */ 
.radio-input input {
  display: none;
}

.radio-input {
  --container_width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: #fff;
  color: #000000;
  width: var(--container_width);
  overflow: hidden;
  border: 1px solid rgba(53, 52, 52, 0.226);
}

.radio-input label {
  width: 100%;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  font-weight: 600;
  letter-spacing: -1px;
  font-size: 14px;
}

.selection {
  display: none;
  position: absolute;
  height: 100%;
  width: 50%;
  z-index: 0;
  left: 0;
  top: 0;
  transition: 0.15s ease;
}

.radio-input label:has(input:checked) {
  color: #fff;
}

.radio-input label:has(input:checked) ~ .selection {
  background-color: var(--destaque-color);
  display: inline-block;
}

.radio-input label:nth-child(1):has(input:checked) ~ .selection {
  transform: translateX(calc(50% / 20%));
}

.radio-input label:nth-child(2):has(input:checked) ~ .selection {
  transform: translateX(calc(50% * 2));
}

	  `}constructor(){super(),this.objeto_os={}}connectedCallback(){super.connectedCallback()}_alterar_data_cliente=e=>{let t=e.target.value.toLowerCase()===`true`;this.objeto_os.OS.endereco_info_os.anexo_fachada=t,this.objeto_os.salvar_os_localstorage()};render(){return D`
            <!--Retorno renderizado-->
            <div class="form-group">
                <label for="fname" class="form-label">Foto da Fachada Anexado na OS?</label>
                <br>
                <div @change="${this._alterar_data_cliente}" class="radio-input">
                    <label>
                        <input ?checked="${this.objeto_os.OS.endereco_info_os.anexo_fachada===!0}" value="true" name="value-radio" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.objeto_os.OS.endereco_info_os.anexo_fachada===!1}" value="false" name="value-radio" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
            </div>
        `}};customElements.define(`faxada-anexada`,zt);var Bt=class extends I{static properties={objeto_os:{type:Object},info_anexada:{type:Boolean},informacoes_adicionais:{type:Array}};static get styles(){return o`
	    host: {
            
	    }
        /* Helper para organizar os blocos sem usar <br> */
        .form-group {
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
        }

        .form-group-row {
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        /* Estilização das Labels */
        .form-label {
            font-size: 17px;
            font-weight: 600;
            margin-bottom: 6px;
            color: var(--btn-text-background-color);
        }

        .form-label-inline {
            font-size: 14px;
            color: #333333;
            cursor: pointer;
        }

        /* Reset e Estilo Flat para Inputs de Texto, Select e Textarea */
        .form-input,
        .form-select,
        .form-textarea {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            /* Zera o visual padrão do navegador */

            width: 100%;
            box-sizing: border-box;
            font-family: inherit;
            font-size: 15px;
            padding: 10px 12px;

            border: 2px solid #e2e8f0;
            border-radius: 6px;
            /* Bordas levemente arredondadas */
            background-color: #f8fafc;
            color: #1a202c;
            transition: border-color 0.2s ease, background-color 0.2s ease;
        }

        /* Estados de Foco */
        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
            outline: none;
            border-color: var(--destaque-color);
            /* Azul Flat */
            background-color: #ffffff;
        }
        
        .texto_informativo{
            font-size: var(--paragraph-info) ;
            color:var(--color-text-info);
        }

        /* From Uiverse.io by Ghost-aft */ 
        .radio-input input {
        display: none;
        }

        .radio-input {
        --container_width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        border-radius: 10px;
        background-color: #fff;
        color: #000000;
        width: var(--container_width);
        overflow: hidden;
        border: 1px solid rgba(53, 52, 52, 0.226);
        }

        .radio-input label {
        width: 100%;
        padding: 10px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        font-weight: 600;
        letter-spacing: -1px;
        font-size: 14px;
        }

        .selection {
        display: none;
        position: absolute;
        height: 100%;
        width: 50%;
        z-index: 0;
        left: 0;
        top: 0;
        transition: 0.15s ease;
        }

        .radio-input label:has(input:checked) {
        color: #fff;
        }

        .radio-input label:has(input:checked) ~ .selection {
        background-color: var(--destaque-color);
        display: inline-block;
        }

        .radio-input label:nth-child(1):has(input:checked) ~ .selection {
        transform: translateX(calc(50% / 20%));
        }

        .radio-input label:nth-child(2):has(input:checked) ~ .selection {
        transform: translateX(calc(50% * 2));
        }

        /* Informações Não Anexadas*/
        .container_info_anexada{
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            color: var(--text-color);
            margin:.2rem 0 .2rem 0;
        }
    

        /*CheackBox*/
        /* Inputs de Seleção (Radio e Checkbox) */
        .form-checkbox {
            -webkit-appearance: none;
            appearance: none;
            background-color: #f8fafc;
            margin: 0;
            font: inherit;
            color: var(--destaque-color);
            width: 18px;
            height: 18px;
            border: 2px solid #cbd5e1;
            display: grid;
            place-content: center;
            cursor: pointer;
            transition: border-color 0.2s ease;
        }

        .form-checkbox {
            border-radius: 4px;
            /* Levemente arredondado para checkbox */
        }

        /* Indicadores internos para Checkbox e Radio ativos */
        
        .form-checkbox::before {
            content: "";
            width: 10px;
            height: 10px;
            transform: scale(0);
            transition: 120ms transform ease-in-out;
            background-color: currentcolor;
            clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
            /* Formato de "Check" */
        }
        .form-checkbox:checked::before {
            transform: scale(1);
        }

        .form-checkbox:checked {
            border-color: var(--destaque-color);
        }

        .form-checkbox:focus {
            outline: 2px solid #ebf8ff;
        }
        .form-group-row label{
            color: var(--text-color);
        }


        /* Botão Flat */
        .form-button {
            -webkit-appearance: none;
            appearance: none;
            font-family: inherit;
            font-size: 15px;
            font-weight: 600;
            background-color: var(--destaque-color);
            color: #ffffff;
            border: none;
            border-radius: 6px;
            padding: 12px 24px;
            cursor: pointer;
            transition: background-color 0.2s ease;
            width: 100%;
            margin-top: 1rem;
        }

        .form-button:hover {
            background-color: var(--destaque-color);
        }

        .form-button:active {
            background-color: var(--destaque-color);
        }

        .botao-close {
            display: inline-block;
            -webkit-appearance: none;
            appearance: none;
            border: none;
            color:white;
            border-radius: 6px;
            padding: 5px 12px;
            cursor: pointer;
            background-color: var(--destaque-color);
        }
	  `}constructor(){super(),this.objeto_os={},this.info_anexada=!0,this.informacoes_adicionais=[]}connectedCallback(){super.connectedCallback(),this.informacoes_adicionais=this.objeto_os.OS.endereco_info_os.complemento_info_necessaria.requerimentos,this.info_anexada=this.objeto_os.OS.endereco_info_os.info_necessaria}_alterar_data_cliente=e=>{let t=e.target.value.toLowerCase()===`true`;this.objeto_os.OS.endereco_info_os.info_necessaria=t,this.info_anexada=t,this.objeto_os.salvar_os_localstorage()};_alterar_info_OS(e){let t=e.target.checked;switch(e.target.value){case`historico`:this.objeto_os.OS.endereco_info_os.complemento_info_necessaria.info_padrao.historico=t;break;case`comodato`:this.objeto_os.OS.endereco_info_os.complemento_info_necessaria.info_padrao.comodato=t;break;case`descricao`:this.objeto_os.OS.endereco_info_os.complemento_info_necessaria.info_padrao.descricao=t;break;case`contratacao`:this.objeto_os.OS.endereco_info_os.complemento_info_necessaria.info_padrao.contratacao=t;break}this.objeto_os.salvar_os_localstorage()}_add_info_anexada(e){let t=this.shadowRoot.getElementById(`info_extra_titulo`);this.informacoes_adicionais.push(t.value),this.objeto_os.salvar_os_localstorage(),t.value=``,this.requestUpdate()}_remover_info_anexada(e){let t=e.target.id;this.informacoes_adicionais.splice(t,1),this.objeto_os.salvar_os_localstorage(),this.requestUpdate()}_alterar_operador(e){let t=e.target.value;this.objeto_os.OS.endereco_info_os.complemento_info_necessaria.operador=t,this.objeto_os.salvar_os_localstorage()}render(){return D`
            <!--Retorno renderizado-->
            <div class="form-group">
                <label for="fname" class="form-label">Informações Anexadas:</label>
                <p class="texto_informativo">Todas as informações necessárias para realizar a OS foram anexadas?</p>
                <br>
                <div @change="${this._alterar_data_cliente}" class="radio-input">
                    <label>
                        <input ?checked="${this.objeto_os.OS.endereco_info_os.info_necessaria===!0}" value="true" name="value-radio" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.objeto_os.OS.endereco_info_os.info_necessaria===!1}" value="false" name="value-radio" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
                <br>


                ${this.info_anexada?``:D`
                    
                    <div class="form-group">
                        <label for="operadornome" class="form-label">Nome do Operador:</label>
                        <input
                            @change="${this._alterar_operador}"
                            type="text" id="operadornome" name="operadornome" value="${this.objeto_os.OS.endereco_info_os.complemento_info_necessaria.operador===null?``:this.objeto_os.OS.endereco_info_os.complemento_info_necessaria.operador}" class="form-input">
                    </div>

                    <label for="fname" class="form-label">Informações Não Anexadas!</label>
                    <br>
                <div class="form-group-row">
            
                    <input
                        ?checked="${this.objeto_os.OS.endereco_info_os.complemento_info_necessaria.info_padrao.historico}"
                        @change="${this._alterar_info_OS}"
                        type="checkbox" id="info1" name="info" value="historico" class="form-checkbox">
                    <label for="info1" class="form-label-inline">Histórico de Quedas</label>
                </div>

                <div class="form-group-row">
                    <input
                        ?checked="${this.objeto_os.OS.endereco_info_os.complemento_info_necessaria.info_padrao.comodato}"
                        @change="${this._alterar_info_OS}"
                        type="checkbox" id="info2" name="info" value="comodato" class="form-checkbox">
                    <label for="info2" class="form-label-inline">Informação de Comodato</label>
                </div>

                <div class="form-group-row">
                    <input
                        ?checked="${this.objeto_os.OS.endereco_info_os.complemento_info_necessaria.info_padrao.descricao}"
                        @change="${this._alterar_info_OS}"
                        type="checkbox" id="info3" name="info" value="descricao" class="form-checkbox">
                    <label for="info3" class="form-label-inline">Descrição na OS</label>
                </div>

                <div class="form-group-row">
                    <input
                        ?checked="${this.objeto_os.OS.endereco_info_os.complemento_info_necessaria.info_padrao.contratacao}"
                        @change="${this._alterar_info_OS}"
                        type="checkbox" id="info4" name="info" value="contratacao" class="form-checkbox">
                    <label for="info4" class="form-label-inline">Data de Contratação</label>
                </div>

                <div class="form-group">
                    <p class="texto_informativo">Adicione Informações extras que não foram listadas nos itens acima:</p>
                    <input type="text" id="info_extra_titulo" name="" value="" class="form-input">
                    <button 
                        @click="${this._add_info_anexada}"
                        type="button" class="form-button">+</button>
                </div>
                

                ${this.informacoes_adicionais.length===0?D``:D`
                    ${this.informacoes_adicionais.map((e,t)=>D`
                        <div class="container_info_anexada">
                            <p>${e}</p> 
                            <button 
                                @click="${this._remover_info_anexada}"
                                id="${t}"
                                class="botao-close">–</button>
                        </div>
                    `)}
                    `}       
                            </div>
                `}
                
        `}};customElements.define(`informacao-na-os`,Bt);var Vt=`:host{color:var(--text-color);margin:0;padding:0}h2{background-color:var(--text-color);color:var(--background-color);text-align:center;border-radius:1rem;padding:1rem}a svg{fill:var(--text-color);background-color:var(--destaque-color);border-radius:1rem;width:1.5rem;padding:.5rem}.form-container{max-width:auto;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.form-group{flex-direction:column;margin-bottom:20px;display:flex}.form-group-row{justify-content:space-between;align-items:center;gap:8px;margin-bottom:15px;display:flex}.form-label{color:var(--btn-text-background-color);margin-bottom:6px;font-size:17px;font-weight:600}.form-label-inline{color:var(--text-color);cursor:pointer;font-size:14px}.form-input,.form-select,.form-textarea{appearance:none;box-sizing:border-box;color:#1a202c;background-color:#f8fafc;border:2px solid #e2e8f0;border-radius:6px;width:100%;padding:10px 12px;font-family:inherit;font-size:15px;transition:border-color .2s,background-color .2s}.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--destaque-color);background-color:#fff;outline:none}.form-select{cursor:pointer;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");background-position:right 12px center;background-repeat:no-repeat;background-size:16px;padding-right:40px}.form-textarea{resize:vertical;min-height:100px}.form-radio,.form-checkbox{appearance:none;font:inherit;color:var(--destaque-color);cursor:pointer;background-color:#f8fafc;border:2px solid #cbd5e1;place-content:center;width:18px;height:18px;margin:0;transition:border-color .2s;display:grid}.form-radio{border-radius:50%}.form-checkbox{border-radius:4px}.form-radio:before{content:"";background-color:currentColor;border-radius:50%;width:8px;height:8px;transition:transform .12s ease-in-out;transform:scale(0)}.form-checkbox:before{content:"";clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%);background-color:currentColor;width:10px;height:10px;transition:transform .12s ease-in-out;transform:scale(0)}.form-radio:checked:before,.form-checkbox:checked:before{transform:scale(1)}.form-radio:checked,.form-checkbox:checked{border-color:var(--destaque-color)}.form-radio:focus,.form-checkbox:focus{outline:2px solid #ebf8ff}.form-button{appearance:none;background-color:var(--destaque-color);color:#fff;cursor:pointer;border:none;border-radius:6px;width:100%;padding:12px 24px;font-family:inherit;font-size:15px;font-weight:600;transition:background-color .2s}.form-button:hover,.form-button:active{background-color:var(--destaque-color)}`,Ht=class extends I{static properties={titulo:{type:String},texto:{type:String}};static styles=o`
    :host {
      --modal-bg: #fff;
      --modal-overlay: rgba(0, 0, 0, 0.6);
    }

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: var(--modal-overlay);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }

    .modal {
      background: var(--modal-bg);
      padding: 24px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      max-width: 400px;
      width: 90%;
      text-align: center;
      animation: entra 0.3s ease-out;
    }

    h2 {
      margin-top: 0;
      color: #333;
    }

    p {
      color: #666;
      line-height: 1.5;
    }

    button {
      background: var(--destaque-color);
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: bold;
      margin-top: 15px;
    }

    button:hover {
      background: var(--header-color);
    }

    @keyframes entra {
      from { transform: scale(0.8); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
  `;fechar(){this.remove()}render(){return D`
      <div class="overlay" @click=${this.fechar}>
        <div class="modal" @click=${e=>e.stopPropagation()}>
          <h2>${this.titulo}</h2>
          <p>${this.texto}</p>
          <button @click=${this.fechar}>Fechar</button>
        </div>
      </div>
    `}};customElements.define(`modal-geral`,Ht);function Ut(e,t){let n=document.createElement(`modal-geral`);n.titulo=e,n.texto=t,document.body.appendChild(n)}var Wt=class extends I{static properties={objeto_os:{type:Object},info_passadas:{type:Object}};static get styles(){return o`${a(Vt)}`}constructor(){super(),this.objeto_os={}}firstUpdated(){}connectedCallback(){super.connectedCallback(),this.info_passadas=this.objeto_os.OS.educacao_cliente}_add_info_passada_cliente(e){let t=e.target.checked,n=e.target.value,r=e.target.id;t?(this.info_passadas[r]=n,this.objeto_os.salvar_os_localstorage()):(delete this.info_passadas[r],this.objeto_os.salvar_os_localstorage())}_verificar_existencia(e){let t=e;return this.info_passadas[t]!==void 0}render(){return D`
            <!--Retorno renderizado-->
            <h2>Informações Passadas ao Cliente</h2>
            
            <!--Container da Lista de Informações Passadas ao Cliente-->
            <div class="container_info_passadas">
                <div>

                    ${Ke.map((e,t)=>D`
                            <div class="form-group-row">
                                <input 
                                    @change="${this._add_info_passada_cliente}"
                                    ?checked="${this._verificar_existencia(t)}"
                                    type="checkbox" id="${t}" name="${t}" value="${e.titulo}" class="form-checkbox">
                                <label for="${t}" class="form-label-inline">${e.titulo}</label>
                                <a @click="${()=>{Ut(e.titulo,e.descricao)}}">
                                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.933 143.933"><path d="M-325.21 671.982c-5.768-.013-9.701.245-11.469.752l-2.69.772v77.331l10.336-.289c16.239-.454 28.654 1.764 40.503 7.238 2.653 1.226 4.884 2.23 4.957 2.23h.002l.005-.002h.002c.08-.06.293-.833.48-1.768.195-.974.354-17.422.354-36.55 0-28.852-.138-35.11-.809-36.716-.624-1.493-1.626-2.347-4.39-3.743-5.712-2.886-14.363-5.935-21.704-7.65-5.87-1.37-7.995-1.59-15.576-1.605zm90.695 0c-7.58.015-9.706.235-15.575 1.605-7.341 1.715-15.993 4.764-21.705 7.65-2.763 1.395-3.766 2.25-4.39 3.743-.67 1.605-.808 7.864-.808 36.715 0 19.129.159 35.577.354 36.55.187.936.399 1.71.48 1.768l.002.001v.001h.005c.074 0 2.304-1.003 4.957-2.229 11.85-5.474 24.265-7.693 40.503-7.238l10.337.289v-77.331l-2.69-.772c-1.768-.507-5.702-.765-11.47-.752zm-113.222 12.37c-1.506.054-2.572.739-3.265 2.078-.702 1.358-.826 7.628-.826 41.51 0 21.952.155 40.315.344 40.808.456 1.19 1.512 1.138 9.85-.488 16.472-3.211 25.793-3.627 37.381-1.665 6.307 1.068 8.153 1.682 11.894 3.96 4.24 2.582 8.18 3.775 12.497 3.562 4.317.213 8.257-.98 12.497-3.562 3.742-2.278 5.588-2.892 11.894-3.96 11.589-1.962 20.91-1.546 37.381 1.665 8.339 1.626 9.394 1.677 9.85.488.19-.493.345-18.856.345-40.807 0-33.883-.124-40.153-.826-41.51-.693-1.34-1.76-2.024-3.266-2.08a7 7 0 0 0-1.656.154c-1.352.27-1.62.612-1.65 2.093-.019.974-.006 17.381.03 36.461.034 19.08-.082 34.69-.256 34.69-.175 0-2.8-.424-5.833-.944-7.919-1.357-24.287-1.353-30.72.007-6.365 1.345-12.24 3.365-18.125 6.232-4.337 2.113-5.235 2.345-9.062 2.346l-.603-.002-.603.002c-3.827 0-4.725-.233-9.062-2.346-5.886-2.867-11.76-4.887-18.124-6.232-6.434-1.36-22.802-1.363-30.72-.007-3.034.52-5.659.945-5.834.945s-.29-15.611-.255-34.691.048-35.487.029-36.46c-.029-1.482-.298-1.823-1.65-2.094a7 7 0 0 0-1.656-.153z" style="stroke-width:1" transform="translate(351.828 -651.095)"/></svg>
                                </a>
                            </div>
                        `)}

                <div>
            </div>
        `}};customElements.define(`informacao-passada-cliente`,Wt);var Gt=`:host{color:var(--text-color);margin:0;padding:0}h2{background-color:var(--text-color);color:var(--background-color);text-align:center;border-radius:1rem;padding:1rem}a svg{fill:var(--text-color);background-color:var(--destaque-color);border-radius:1rem;width:1.5rem;padding:.5rem}.form-container{max-width:auto;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.form-group{flex-direction:column;margin-bottom:20px;display:flex}.form-group-row{justify-content:space-between;align-items:center;gap:8px;margin-bottom:15px;display:flex}.form-label{color:var(--btn-text-background-color);margin-bottom:6px;font-size:17px;font-weight:600}.form-label-inline{color:var(--text-color);cursor:pointer;font-size:14px}.form-input,.form-select,.form-textarea{appearance:none;box-sizing:border-box;color:#1a202c;background-color:#f8fafc;border:2px solid #e2e8f0;border-radius:6px;width:100%;padding:10px 12px;font-family:inherit;font-size:15px;transition:border-color .2s,background-color .2s}.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--destaque-color);background-color:#fff;outline:none}.form-select{cursor:pointer;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");background-position:right 12px center;background-repeat:no-repeat;background-size:16px;padding-right:40px}.form-textarea{resize:vertical;min-height:100px}.form-radio,.form-checkbox{appearance:none;font:inherit;color:var(--destaque-color);cursor:pointer;background-color:#f8fafc;border:2px solid #cbd5e1;place-content:center;width:18px;height:18px;margin:0;transition:border-color .2s;display:grid}.form-radio{border-radius:50%}.form-checkbox{border-radius:4px}.form-radio:before{content:"";background-color:currentColor;border-radius:50%;width:8px;height:8px;transition:transform .12s ease-in-out;transform:scale(0)}.form-checkbox:before{content:"";clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%);background-color:currentColor;width:10px;height:10px;transition:transform .12s ease-in-out;transform:scale(0)}.form-radio:checked:before,.form-checkbox:checked:before{transform:scale(1)}.form-radio:checked,.form-checkbox:checked{border-color:var(--destaque-color)}.form-radio:focus,.form-checkbox:focus{outline:2px solid #ebf8ff}.form-button{appearance:none;background-color:var(--destaque-color);color:#fff;cursor:pointer;border:none;border-radius:6px;width:100%;padding:12px 24px;font-family:inherit;font-size:15px;font-weight:600;transition:background-color .2s}.form-button:hover,.form-button:active{background-color:var(--destaque-color)}`,Kt=class extends I{static properties={objeto_os:{type:Object},info_passadas:{type:Object}};static get styles(){return o`${a(Gt)}`}constructor(){super(),this.objeto_os={}}firstUpdated(){}connectedCallback(){super.connectedCallback(),this.info_passadas=this.objeto_os.OS.atendimento_cliente}_add_info_passada_cliente(e){let t=e.target.checked,n=e.target.value,r=e.target.id;t?(this.info_passadas[r]=n,this.objeto_os.salvar_os_localstorage()):(delete this.info_passadas[r],this.objeto_os.salvar_os_localstorage())}_verificar_existencia(e){let t=e;return this.info_passadas[t]!==void 0}render(){return D`
            <!--Retorno renderizado-->

            <h2>Atendimento Realizado no Cliente</h2>
            <!--Container da Lista de Informações Passadas ao Cliente-->
            <div class="container_info_passadas">
                <div>
                    ${qe.map((e,t)=>D`
                            <div class="form-group-row">
                                <input 
                                    @change="${this._add_info_passada_cliente}"
                                    ?checked="${this._verificar_existencia(t)}"
                                    type="checkbox" id="${t}" name="${t}" value="${e.titulo}" class="form-checkbox">
                                <label for="${t}" class="form-label-inline">${e.titulo}</label>
                                <a @click="${()=>{Ut(e.titulo,e.descricao)}}">
                                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.933 143.933"><path d="M-325.21 671.982c-5.768-.013-9.701.245-11.469.752l-2.69.772v77.331l10.336-.289c16.239-.454 28.654 1.764 40.503 7.238 2.653 1.226 4.884 2.23 4.957 2.23h.002l.005-.002h.002c.08-.06.293-.833.48-1.768.195-.974.354-17.422.354-36.55 0-28.852-.138-35.11-.809-36.716-.624-1.493-1.626-2.347-4.39-3.743-5.712-2.886-14.363-5.935-21.704-7.65-5.87-1.37-7.995-1.59-15.576-1.605zm90.695 0c-7.58.015-9.706.235-15.575 1.605-7.341 1.715-15.993 4.764-21.705 7.65-2.763 1.395-3.766 2.25-4.39 3.743-.67 1.605-.808 7.864-.808 36.715 0 19.129.159 35.577.354 36.55.187.936.399 1.71.48 1.768l.002.001v.001h.005c.074 0 2.304-1.003 4.957-2.229 11.85-5.474 24.265-7.693 40.503-7.238l10.337.289v-77.331l-2.69-.772c-1.768-.507-5.702-.765-11.47-.752zm-113.222 12.37c-1.506.054-2.572.739-3.265 2.078-.702 1.358-.826 7.628-.826 41.51 0 21.952.155 40.315.344 40.808.456 1.19 1.512 1.138 9.85-.488 16.472-3.211 25.793-3.627 37.381-1.665 6.307 1.068 8.153 1.682 11.894 3.96 4.24 2.582 8.18 3.775 12.497 3.562 4.317.213 8.257-.98 12.497-3.562 3.742-2.278 5.588-2.892 11.894-3.96 11.589-1.962 20.91-1.546 37.381 1.665 8.339 1.626 9.394 1.677 9.85.488.19-.493.345-18.856.345-40.807 0-33.883-.124-40.153-.826-41.51-.693-1.34-1.76-2.024-3.266-2.08a7 7 0 0 0-1.656.154c-1.352.27-1.62.612-1.65 2.093-.019.974-.006 17.381.03 36.461.034 19.08-.082 34.69-.256 34.69-.175 0-2.8-.424-5.833-.944-7.919-1.357-24.287-1.353-30.72.007-6.365 1.345-12.24 3.365-18.125 6.232-4.337 2.113-5.235 2.345-9.062 2.346l-.603-.002-.603.002c-3.827 0-4.725-.233-9.062-2.346-5.886-2.867-11.76-4.887-18.124-6.232-6.434-1.36-22.802-1.363-30.72-.007-3.034.52-5.659.945-5.834.945s-.29-15.611-.255-34.691.048-35.487.029-36.46c-.029-1.482-.298-1.823-1.65-2.094a7 7 0 0 0-1.656-.153z" style="stroke-width:1" transform="translate(351.828 -651.095)"/></svg>
                                </a>
                            </div>
                        `)}

                <div>
            </div>
        `}};customElements.define(`atendimento-feito-cliente`,Kt);var qt=`:host{color:var(--text-color);margin:0;padding:0}h2{background-color:var(--text-color);color:var(--background-color);text-align:center;border-radius:1rem;padding:1rem}.Container_info_extra{flex-direction:column;row-gap:1rem;display:flex}.item_info_extra{flex-direction:row;align-items:center;gap:1rem;display:flex}.botao-close{appearance:none;color:#fff;cursor:pointer;background-color:var(--destaque-color);border:none;border-radius:6px;height:2rem;padding:5px 12px;display:inline-block}.texto_informativo{font-size:var(--paragraph-info);color:var(--color-text-info)}a svg{fill:var(--text-color);background-color:var(--destaque-color);border-radius:1rem;width:1.5rem;padding:.5rem}.form-container{max-width:auto;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.form-group{flex-direction:column;margin-bottom:20px;display:flex}.form-group-row{justify-content:space-between;align-items:center;gap:8px;margin-bottom:15px;display:flex}.form-label{color:var(--btn-text-background-color);margin-bottom:6px;font-size:17px;font-weight:600}.form-label-inline{color:var(--text-color);cursor:pointer;font-size:14px}.form-input,.form-select,.form-textarea{appearance:none;box-sizing:border-box;color:#1a202c;background-color:#f8fafc;border:2px solid #e2e8f0;border-radius:6px;width:100%;padding:10px 12px;font-family:inherit;font-size:15px;transition:border-color .2s,background-color .2s}.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--destaque-color);background-color:#fff;outline:none}.form-select{cursor:pointer;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");background-position:right 12px center;background-repeat:no-repeat;background-size:16px;padding-right:40px}.form-textarea{resize:vertical;min-height:100px}.form-radio,.form-checkbox{appearance:none;font:inherit;color:var(--destaque-color);cursor:pointer;background-color:#f8fafc;border:2px solid #cbd5e1;place-content:center;width:18px;height:18px;margin:0;transition:border-color .2s;display:grid}.form-radio{border-radius:50%}.form-checkbox{border-radius:4px}.form-radio:before{content:"";background-color:currentColor;border-radius:50%;width:8px;height:8px;transition:transform .12s ease-in-out;transform:scale(0)}.form-checkbox:before{content:"";clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%);background-color:currentColor;width:10px;height:10px;transition:transform .12s ease-in-out;transform:scale(0)}.form-radio:checked:before,.form-checkbox:checked:before{transform:scale(1)}.form-radio:checked,.form-checkbox:checked{border-color:var(--destaque-color)}.form-radio:focus,.form-checkbox:focus{outline:2px solid #ebf8ff}.form-button{appearance:none;background-color:var(--destaque-color);color:#fff;cursor:pointer;border:none;border-radius:6px;width:100%;padding:12px 24px;font-family:inherit;font-size:15px;font-weight:600;transition:background-color .2s}.form-button:hover,.form-button:active{background-color:var(--destaque-color)}`,Jt=class extends I{static properties={objeto_os:{type:Object},info_anexada:{type:Boolean}};static get styles(){return o`${a(qt)}`}constructor(){super(),this.objeto_os={},this.info_anexada=[]}firstUpdated(){}connectedCallback(){super.connectedCallback(),this.info_anexada=this.objeto_os.OS.complemento_atendimento}_adicionar_informacao=e=>{let t=this.shadowRoot.getElementById(`info_extra_titulo`);this.info_anexada.push(t.value),this.objeto_os.salvar_os_localstorage(),t.value=``,this.requestUpdate()};_remover_info_anexada(e){let t=e.target.id;this.info_anexada.splice(t,1),this.objeto_os.salvar_os_localstorage(),this.requestUpdate()}render(){return D`
            <!--Retorno renderizado-->
            <h2>Informações Adicionais Passadas ao Cliente</h2>
            <div class="form-group">
                    <p class="texto_informativo">Caso você tenha passado mais alguma informação ao Cliente que não esteja listada acima, pode adicioná-la manualmente para complementar sua Ordem de Serviço!</p>
                    <br>
                                       
                    <textarea id="info_extra_titulo" name="" value="" id="message" name="message" rows="5" class="form-textarea"></textarea>

                    <br>

                    <button 
                        @click="${this._adicionar_informacao}"
                        type="button" class="form-button">+</button>
                </div>

            <div class="Container_info_extra">
                ${this.info_anexada.length===0?D``:D`
                    ${this.info_anexada.map((e,t)=>D`
                        
                        <div class="item_info_extra">
                            <p class="texto_informativo" style="flex:8">
                                ${e}
                            </p>
                            <button
                                style="flex:1"
                                @click="${this._remover_info_anexada}"
                                id="${t}"
                                class="botao-close">–</button>
                        </div>

                    `)}
                    `}

                
                
            </div>
        `}};customElements.define(`informacoes-adicionais-passadas`,Jt);var Yt=`:host{box-sizing:border-box;color:var(--text-color);display:block}*,:before,:after{box-sizing:inherit;margin:0;padding:0}h2{color:var(--text-color);text-align:center}p{font-size:var(--paragraph);text-align:left;font-weight:100}.form-container{max-width:auto;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.form-group{flex-direction:column;margin-bottom:20px;display:flex}.form-group-row{align-items:center;gap:8px;margin-bottom:15px;display:flex}.form-label{color:var(--btn-text-background-color);margin-bottom:6px;font-size:17px;font-weight:600}.form-label-inline{color:#333;cursor:pointer;font-size:14px}.container-lista{flex-direction:column;gap:.5rem;display:flex}.container-item{flex-direction:row;justify-content:space-between;align-items:center;gap:.5rem;display:flex}.container-upt-item{flex-direction:row;justify-content:space-between;display:flex}.destaque{background-color:var(--destaque-color);border-radius:.5rem;padding:.2rem}.form-input,.form-select,.form-textarea{appearance:none;box-sizing:border-box;color:#1a202c;background-color:#f8fafc;border:2px solid #e2e8f0;border-radius:6px;width:100%;padding:10px 12px;font-family:inherit;font-size:15px;transition:border-color .2s,background-color .2s}.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--destaque-color);background-color:#fff;outline:none}.form-select{cursor:pointer;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");background-position:right 12px center;background-repeat:no-repeat;background-size:16px;padding-right:40px}.form-textarea{resize:vertical;min-height:100px}.form-button{appearance:none;background-color:var(--destaque-color);color:#fff;cursor:pointer;border:none;border-radius:6px;width:100%;padding:12px 24px;font-family:inherit;font-size:15px;font-weight:600;transition:background-color .2s}.form-button:hover,.form-button:active{background-color:var(--destaque-color)}.botao-close{appearance:none;color:#fff;cursor:pointer;background-color:var(--destaque-color);border:none;border-radius:6px;height:30px;padding:5px 12px;display:inline-block}.modal-backdrop{z-index:9000;background:#00000080;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:fixed;top:0;left:0}.modal-content{background:var(--cards-background);color:var(--text-color);border-radius:8px;width:95%;padding:20px}.container_scroll{box-sizing:border-box;scrollbar-width:thin;width:100%;max-height:600px;padding:16px;overflow:hidden auto}.container_scroll::-webkit-scrollbar{width:6px}.container_scroll::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.container_scroll::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:4px}.container_scroll::-webkit-scrollbar-thumb:hover{background:#94a3b8}@media (width>=1024px){.modal-content{width:500px}}.form-label-inline{color:var(--text-color)}.form-radio,.form-checkbox{appearance:none;font:inherit;color:var(--destaque-color);cursor:pointer;background-color:#f8fafc;border:2px solid #cbd5e1;place-content:center;width:18px;height:18px;margin:0;transition:border-color .2s;display:grid}.form-radio{border-radius:50%}.form-checkbox{border-radius:4px}.form-radio:before{content:"";background-color:currentColor;border-radius:50%;width:8px;height:8px;transition:transform .12s ease-in-out;transform:scale(0)}.form-checkbox:before{content:"";clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%);background-color:currentColor;width:10px;height:10px;transition:transform .12s ease-in-out;transform:scale(0)}.form-radio:checked:before,.form-checkbox:checked:before{transform:scale(1)}.form-radio:checked,.form-checkbox:checked{border-color:var(--destaque-color)}.form-radio:focus,.form-checkbox:focus{outline:2px solid #ebf8ff}.radio-input input{display:none}.radio-input{--container_width:100%;color:#000;width:var(--container_width);background-color:#fff;border:1px solid #3534343a;border-radius:10px;align-items:center;display:flex;position:relative;overflow:hidden}.radio-input label{cursor:pointer;z-index:1;letter-spacing:-1px;justify-content:center;align-items:center;width:100%;padding:10px;font-size:14px;font-weight:600;display:flex}.selection{z-index:0;width:50%;height:100%;transition:all .15s;display:none;position:absolute;top:0;left:0}.radio-input label:has(input:checked){color:#fff}.radio-input label:has(input:checked)~.selection{background-color:var(--destaque-color);display:inline-block}.radio-input label:first-child:has(input:checked)~.selection{transform:translateX(calc(50% / 20%))}.radio-input label:nth-child(2):has(input:checked)~.selection{transform:translate(100%)}.toggle-switch{cursor:pointer;width:40px;height:20px;display:inline-block;position:relative}.toggle-switch input[type=checkbox]{display:none}.toggle-switch-background{background-color:#ddd;border-radius:20px;width:100%;height:100%;transition:background-color .3s ease-in-out;position:absolute;top:0;left:0;box-shadow:inset 0 0 0 2px #ccc}.toggle-switch-handle{background-color:#fff;border-radius:50%;width:20px;height:20px;transition:transform .3s ease-in-out;position:absolute;top:0;left:0;box-shadow:0 2px 5px #0003}.toggle-switch:before{content:"";color:#aaa;text-shadow:1px 1px #fff;font-size:12px;font-weight:700;transition:color .3s ease-in-out;position:absolute;top:-25px;right:-35px}.toggle-switch input[type=checkbox]:checked+.toggle-switch-handle{box-shadow:0 2px 5px #0003, 0 0 0 3px var(--destaque-color);transform:translate(5px)}.toggle-switch input[type=checkbox]:checked+.toggle-switch-background{background-color:var(--destaque-color);box-shadow:inset 0 0 0 2px var(--destaque-color)}.toggle-switch input[type=checkbox]:checked+.toggle-switch:before{content:"On";color:var(--destaque-color);right:-5px}.toggle-switch input[type=checkbox]:checked+.toggle-switch-background .toggle-switch-handle{transform:translate(20px)}.container_item_utp{flex-direction:row;gap:1rem;display:flex}`,Xt=class extends I{static properties={objeto_os:{type:Object},modal_aberto:{type:Boolean},objeto_gateway:{type:Object},ativo:{type:Object}};static get styles(){return o`${a(Yt)}`}constructor(){super(),this.objeto_os={},this.modal_aberto=!1,this.objeto_utp=[],this.ativo={}}firstUpdated(){}connectedCallback(){super.connectedCallback(),this.objeto_utp=this.objeto_os.OS.conferencia_tecnica.cabos_utp}_Fechar_Modal=()=>{this.modal_aberto=!1};_Abrir_Modal_Novo=(e,t)=>{this.ativo={cabo:t===`WAN`?t:null,checagens:[!0,!0,!0],anexo_cabos:!1,observacao:null},this.acao=!1,this.modal_aberto=!0};_Abrir_Modal_Editar=(e,t)=>{this.ativo=this.objeto_utp[t],this.acao=!0,this.modal_aberto=!0};_Salvar_data=(e,t)=>{let n=this.renderRoot?.querySelector(`#nome-cabo`).value,r=this.renderRoot?.querySelector(`#observacao-cabo`).value,i=this.renderRoot?.querySelector(`#checagem-giga`).checked,a=this.renderRoot?.querySelector(`#checagem-powermitter`).checked,o=this.renderRoot?.querySelector(`#checagem-ping`).checked,s=this.renderRoot?.querySelector(`#anexo-cabo-utp input[name='anexo-cabo-utp']:checked`).value;this.ativo.cabo=n,this.ativo.checagens[0]=i,this.ativo.checagens[1]=a,this.ativo.checagens[2]=o,this.ativo.anexo_cabos=s===`true`,this.ativo.observacao=r,t||(this.objeto_utp.push(this.ativo),this.ativo={}),this.objeto_os.salvar_os_localstorage(),this._Fechar_Modal()};_Deletar_Item=(e,t)=>{this.objeto_utp=this.objeto_utp.filter((e,n)=>n!==t),this.objeto_os.OS.conferencia_tecnica.cabos_utp=this.objeto_utp,this.objeto_os.salvar_os_localstorage(),this.objeto_utp=this.objeto_os.OS.conferencia_tecnica.cabos_utp,this.requestUpdate()};render(){return D`
            <!--Retorno renderizado-->
            <br>
            <h2>Cabos de Rede Testados</h2>
            <div class="form-group" style="margin-top: 10px; flex-direction:row;gap:1rem;">
                <button 
                    @click="${e=>this._Abrir_Modal_Novo(e,`WAN`)}"
                    type="button" class="form-button">WAN</button>
                <button 
                    @click="${e=>this._Abrir_Modal_Novo(e,`Outro`)}"
                    type="button" class="form-button">Outro</button>
            </div>
            
            <div class="container-lista">
                ${this.objeto_utp.map((e,t)=>D`
                <div class="container-item">
                    <div 
                        @click="${e=>this._Abrir_Modal_Editar(e,t)}"
                        style="flex:1">
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.933 143.933"><path d="M-275.878 791.584c-12.669-2.656-22.526-12.758-24.568-25.177l-.222-1.353 5.948.098 5.948.098.828 2.37c2.107 6.033 7.277 10.761 13.297 12.162 2.33.542 7.095.535 9.13-.013 6.183-1.665 10.963-6.119 13.236-12.331l.931-2.546.1-47.544c.091-43.383.15-47.588.682-48.029.423-.35 1.855-.483 5.22-.483 4.464 0 4.66.031 5.334.862.686.848.697 1.717.581 48.387l-.118 47.524-.792 2.981c-2.82 10.614-10.31 18.644-20.505 21.988-3.037.996-3.947 1.129-8.423 1.228-2.76.061-5.733-.038-6.607-.222zm-33.604-30.118c-1.132-.731-2.62-3.227-2.62-4.393 0-.535.53-.604 4.647-.604 4.227 0 4.68-.063 5.018-.693.48-.897.474-.945-.193-1.611-.455-.456-1.475-.563-5.346-.563h-4.784l-.388-1.81c-.731-3.41-.987-3.208 4.068-3.208 4.176 0 4.471-.046 4.69-.734.478-1.51-.306-1.775-5.24-1.775-5.2 0-4.556.404-5.28-3.315l-.33-1.703h4.423c4.008 0 4.46-.065 4.796-.693.48-.897.474-.945-.193-1.611-.453-.453-1.456-.563-5.129-.563h-4.565l-.341-2.061-.34-2.061h43.609l-.235 1.569c-.398 2.654-.126 2.523-5.46 2.632-4.167.086-4.912.189-5.25.727-.288.457-.288.798 0 1.255.336.534 1.07.642 4.965.727l4.57.101-.249 1.659c-.526 3.51-.219 3.337-5.889 3.337-4.561 0-5.021.059-5.214.666-.116.367-.11.931.014 1.255.194.505.91.588 5.07.588h4.846l-.233 1.165c-.129.64-.331 1.77-.45 2.509l-.215 1.344h-4.767c-3.856 0-4.875.107-5.33.563-.667.666-.673.714-.193 1.61.338.632.79.694 5.025.694h4.653l-.236.986c-.357 1.489-1.038 2.68-2.101 3.674l-.959.896-13.86.09c-13.472.088-13.893.07-15.004-.649m-7.193-30.843c-1.761-.871-2.708-2.053-3.27-4.082-.266-.963-.397-7.5-.399-19.912l-.002-18.478.89-1.772c.516-1.028 1.446-2.15 2.213-2.67 1.277-.864 1.555-.9 8.06-1.007l6.736-.11.101 15.55.1 15.55.882 1.285c3.357 4.898 10.859 4.45 13.545-.809.798-1.562.807-1.73.807-16.556v-14.978l6.182.008c7.083.01 8.374.353 10.167 2.703l1.034 1.355.106 19.383c.058 10.66.009 19.91-.108 20.555-.264 1.458-2.116 3.615-3.655 4.258-.927.387-5.228.484-21.51.484-19.98 0-20.38-.015-21.88-.757zm19.375-15.596c-2.522-1.244-2.425-.464-2.539-20.484-.093-16.37-.046-18.137.51-19.307.927-1.955 2.383-2.705 4.931-2.54 1.895.121 2.237.27 3.316 1.447l1.202 1.312v18.595c0 18.314-.01 18.61-.748 19.547-1.55 1.969-4.358 2.571-6.672 1.43m-18.028-45.967v-11.155l1.29-1.427c.753-.834 1.834-1.579 2.598-1.791.792-.22 7.47-.365 16.914-.366 21.889-.002 20.192-1.235 20.342 14.767l.104 11.133-1.135-.227c-.624-.125-3.534-.227-6.466-.227h-5.332l-.008-2.06c-.009-2.584-.91-4.631-2.677-6.088-3.065-2.527-7.37-2.444-10.298.197-1.844 1.664-2.429 3.058-2.429 5.789v2.162h-5.331c-2.933 0-5.836.1-6.452.224l-1.12.224zm8.154-3.555c.628-.799.56-3.699-.11-4.655-.357-.51-.93-.796-1.592-.796-1.36 0-2.15 1.156-2.15 3.143 0 2.74 2.387 4.171 3.852 2.308zm6.462.443c.678-.476.796-.89.796-2.796 0-2.476-.369-3.098-1.838-3.098-1.52 0-2.104.854-2.104 3.072 0 1.468.176 2.122.716 2.663.863.862 1.377.896 2.43.159m7.248-.16c.54-.54.717-1.194.717-2.662 0-2.218-.585-3.072-2.105-3.072-1.47 0-1.838.622-1.838 3.098 0 1.906.118 2.32.797 2.796 1.052.737 1.566.703 2.429-.16m7.005-.162c1.76-1.76.89-5.572-1.27-5.572-1.38 0-2.151 1.161-2.151 3.237 0 1.667.46 2.618 1.434 2.966.916.327 1.081.275 1.987-.631m6.894.322c.659-.462.796-.899.796-2.533 0-2.524-.443-3.361-1.779-3.361-1.613 0-2.164.822-2.164 3.231 0 1.768.128 2.194.797 2.663.438.306.967.557 1.175.557s.736-.25 1.175-.557" style="fill:var(--text-color);stroke-width:1" transform="translate(351.828 -651.095)"/></svg>
                    </div>
                    <div style="flex:7">
                        <div class="container-upt-item">
                            <h4
                                @click="${e=>this._Abrir_Modal_Editar(e,t)}"
                                >${e.cabo}</h4>
                            <button
                                @click="${e=>this._Deletar_Item(e,t)}"
                                type="button" class="botao-close">–</button>
                        </div>
                    </div>
                </div>
                    `)}
                
                <!--Modal de Configuracao do Ping-->

            ${this.modal_aberto?D`
                <div
                    class="modal-backdrop"
                    @click=${this._Fechar_Modal}
                >
                    <div
                        class="modal-content"
                        
                        @click=${e=>e.stopPropagation()}
                    >
                        <h3>Editar Cabo de Rede</h3>
                        <br>
                        
                        <input
                            style="margin-top:.5rem; margin-bottom:.8rem;"
                            type="text" 
                            placeholder="Qual o objetivo do cabo?"
                            ?disabled="${this.ativo.cabo===`WAN`}"
                            id="nome-cabo" name="nome-cabo" .value="${this.ativo.cabo}" class="form-input">
                        
                        <textarea
                            id="observacao-cabo"
                            name="message"
                            style="margin-bottom:.8rem;"
                            style="border-left: 5px solid #ff0000;"
                            rows="5"
                            class="form-textarea"
                            .value="${this.ativo.observacao}"
                            placeholder="Adicione aqui qualquer observação relacionado ao cabo de rede testado!"></textarea>

                        <div style="margin-bottom:.8rem; display: flex; flex-direction: row; gap: 1rem; align-items: center;  justify-content: center;">
                            <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;  justify-content: flex-start;">
                                <p>Cabo 100/1000</p>
                                <label class="toggle-switch">
                                    <input @change=""
                                    id="checagem-giga" 
                                    ?checked="${this.ativo.checagens[0]}"
                                    type="checkbox">
                                    <div class="toggle-switch-background">
                                        <div class="toggle-switch-handle"></div>
                                    </div>
                                </label>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;  justify-content: flex-start;">
                                <p>Teste no Powermitter</p>
                                <label class="toggle-switch">
                                    <input @change=""
                                    id="checagem-powermitter" 
                                    ?checked="${this.ativo.checagens[1]}"
                                    type="checkbox">
                                    <div class="toggle-switch-background">
                                        <div class="toggle-switch-handle"></div>
                                    </div>
                                </label>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;  justify-content: flex-start;">
                                <p>Teste de Ping</p>
                                <label class="toggle-switch">
                                    <input @change=""
                                    id="checagem-ping" 
                                    ?checked="${this.ativo.checagens[2]}"
                                    type="checkbox">
                                    <div class="toggle-switch-background">
                                        <div class="toggle-switch-handle"></div>
                                    </div>
                                </label>
                            </div>
                        </div>
                                             

                        <div class="form-group">
                            <label for="cars" class="form-label">Foto do Cabo Anexado:</label>

                            <div id="anexo-cabo-utp" class="radio-input">
                                <label>
                                    <input ?checked="${this.ativo.anexo_cabos===!0}" value="true" name="anexo-cabo-utp" id="value-1" type="radio" />
                                    <span>S i m</span>
                                </label>
                                <label>
                                    <input ?checked="${this.ativo.anexo_cabos===!1}" value="false" name="anexo-cabo-utp" id="value-2" type="radio" />
                                    <span>N ã o</span>
                                </label>
                                <span class="selection"></span>
                            </div>
                        </div>
                        
                        <div class="form-group" style="margin-top: 10px; display: flex; flex-direction: row; gap:.5rem">
                            <button 
                                @click="${e=>this._Salvar_data(e,this.acao)}"
                                style="background-color: var(--btn-background-color); color: var(--text-color);"
                                type="button" class="form-button")">Salvar</button>
                            <button 
                                @click="${this._Fechar_Modal}"
                                type="button" class="form-button")">Fechar</button>
                        </div>

                    </div>
                </div>
            `:``}
               
            </div>
        `}};customElements.define(`verificacao-utp`,Xt);var Zt=`:host{color:var(--text-color);margin:0;padding:0}h2{color:var(--text-color);text-align:center}p{font-size:var(--paragraph);text-align:left;font-weight:100}.container_sinal_fibra{flex-direction:row;gap:1rem;display:flex}.texto_informativo{font-size:var(--paragraph-info);color:var(--color-text-info)}.form-container{max-width:auto;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.form-group{flex-direction:column;margin-bottom:20px;display:flex}.form-group-row{justify-content:space-between;align-items:center;gap:8px;margin-bottom:15px;display:flex}.form-label{color:var(--btn-text-background-color);margin-bottom:6px;font-size:17px;font-weight:600}.form-label-inline{color:var(--text-color);cursor:pointer;font-size:14px}.form-input.is-disabled{color:#999;pointer-events:none;opacity:.5;cursor:not-allowed}.form-input,.form-select,.form-textarea{appearance:none;box-sizing:border-box;color:#1a202c;background-color:#f8fafc;border:2px solid #e2e8f0;border-radius:6px;width:100%;padding:10px 12px;font-family:inherit;font-size:15px;transition:border-color .2s,background-color .2s}.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--destaque-color);background-color:#fff;outline:none}.form-select{cursor:pointer;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");background-position:right 12px center;background-repeat:no-repeat;background-size:16px;padding-right:40px}.form-textarea{resize:vertical;width:100%;min-height:100px}.form-radio,.form-checkbox{appearance:none;font:inherit;color:var(--destaque-color);cursor:pointer;background-color:#f8fafc;border:2px solid #cbd5e1;place-content:center;width:18px;height:18px;margin:0;transition:border-color .2s;display:grid}.form-radio{border-radius:50%}.form-checkbox{border-radius:4px}.form-radio:before{content:"";background-color:currentColor;border-radius:50%;width:8px;height:8px;transition:transform .12s ease-in-out;transform:scale(0)}.form-checkbox:before{content:"";clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%);background-color:currentColor;width:10px;height:10px;transition:transform .12s ease-in-out;transform:scale(0)}.form-radio:checked:before,.form-checkbox:checked:before{transform:scale(1)}.form-radio:checked,.form-checkbox:checked{border-color:var(--destaque-color)}.form-radio:focus,.form-checkbox:focus{outline:2px solid #ebf8ff}.button-sm{appearance:none;background-color:var(--destaque-color);color:#fff;cursor:pointer;border:none;border-radius:6px;width:100%;padding:.5rem .7rem;font-family:inherit;font-size:.9rem;font-weight:500;transition:background-color .2s}.form-button{appearance:none;background-color:var(--destaque-color);color:#fff;cursor:pointer;border:none;border-radius:6px;width:100%;padding:12px 24px;font-family:inherit;font-size:15px;font-weight:600;transition:background-color .2s}.botao-close{appearance:none;color:#fff;cursor:pointer;background-color:var(--destaque-color);border:none;border-radius:6px;padding:5px 12px;display:inline-block}.form-button:hover,.form-button:active{background-color:var(--destaque-color)}.form-button.habilitado{background-color:var(--background-color);color:var(--text-color)}.toggle-switch{cursor:pointer;width:40px;height:20px;display:inline-block;position:relative}.toggle-switch input[type=checkbox]{display:none}.toggle-switch-background{background-color:#ddd;border-radius:20px;width:100%;height:100%;transition:background-color .3s ease-in-out;position:absolute;top:0;left:0;box-shadow:inset 0 0 0 2px #ccc}.toggle-switch-handle{background-color:#fff;border-radius:50%;width:20px;height:20px;transition:transform .3s ease-in-out;position:absolute;top:0;left:0;box-shadow:0 2px 5px #0003}.toggle-switch:before{content:"";color:#aaa;text-shadow:1px 1px #fff;font-size:12px;font-weight:700;transition:color .3s ease-in-out;position:absolute;top:-25px;right:-35px}.toggle-switch input[type=checkbox]:checked+.toggle-switch-handle{box-shadow:0 2px 5px #0003, 0 0 0 3px var(--destaque-color);transform:translate(5px)}.toggle-switch input[type=checkbox]:checked+.toggle-switch-background{background-color:var(--destaque-color);box-shadow:inset 0 0 0 2px var(--destaque-color)}.toggle-switch input[type=checkbox]:checked+.toggle-switch:before{content:"On";color:var(--destaque-color);right:-5px}.toggle-switch input[type=checkbox]:checked+.toggle-switch-background .toggle-switch-handle{transform:translate(20px)}.radio-input input{display:none}.radio-input{--container_width:100%;color:#000;width:var(--container_width);background-color:#fff;border:1px solid #3534343a;border-radius:10px;align-items:center;display:flex;position:relative;overflow:hidden}.radio-input label{cursor:pointer;z-index:1;letter-spacing:-1px;justify-content:center;align-items:center;width:100%;padding:10px;font-size:14px;font-weight:600;display:flex}.selection{z-index:0;width:50%;height:100%;transition:all .15s;display:none;position:absolute;top:0;left:0}.radio-input label:has(input:checked){color:#fff}.radio-input label:has(input:checked)~.selection{background-color:var(--destaque-color);display:inline-block}.radio-input label:first-child:has(input:checked)~.selection{transform:translateX(calc(50% / 20%))}.radio-input label:nth-child(2):has(input:checked)~.selection{transform:translate(100%)}`,Qt=class extends I{static properties={objeto_os:{type:Object},fibra:{type:Object},container_sinais:{type:Boolean}};static get styles(){return o`${a(Zt)}`}constructor(){super(),this.objeto_os={},this.container_sinais=!0}firstUpdated(){if(this.fibra.sinal_pto===`LOS`){let e=this.shadowRoot.getElementById(`text_sinal_drop`),t=this.shadowRoot.getElementById(`btn_desabilitar`);e.disabled=!0,e.classList.add(`is-disabled`),t.classList.add(`habilitado`),e.value=0}}connectedCallback(){super.connectedCallback(),this.fibra=this.objeto_os.OS.conferencia_tecnica.fibra,console.log(this.fibra),this.container_sinais=this.fibra.sinal_pto!==`LOS`}_desabilitar_por_LOS=e=>{let t=null;t=this.shadowRoot.getElementById(`text_sinal_drop`),t.disabled?(t.disabled=!1,this.container_sinais=!0,this.fibra.sinal_pto=0,e.target.classList.remove(`habilitado`),t.classList.remove(`is-disabled`),t.value=``):(t.disabled=!0,this.container_sinais=!1,this.fibra.sinal_pto=`LOS`,t.classList.add(`is-disabled`),e.target.classList.add(`habilitado`),t.value=0),this.objeto_os.salvar_os_localstorage()};_adicionar_sinal_fibra=e=>{let t=e.target.value;switch(e.target.id){case`text_sinal_drop`:this.fibra.sinal_pto=t;break;case`text_sinal_pathcord`:this.fibra.sinal_pathcord=t;break;case`text_sinal_autoisp`:this.fibra.sinal_autoisp=t;break}this.objeto_os.salvar_os_localstorage()};_alterar_anexo_fibra=e=>{let t=e.target.value.toLowerCase()===`true`;this.objeto_os.OS.conferencia_tecnica.fibra.anexo_sinal=t,this.objeto_os.salvar_os_localstorage()};_alterar_limpeza_fibra=e=>{let t=e.target.value.toLowerCase()===`true`;this.objeto_os.OS.conferencia_tecnica.fibra.limpeza=t,this.objeto_os.salvar_os_localstorage()};_alterar_observacao_fibra=e=>{let t=e.target.value;this.objeto_os.OS.conferencia_tecnica.fibra.observacao=t,this.objeto_os.salvar_os_localstorage()};render(){return D`
            <!--Retorno renderizado-->
            <h2>Checagem da Fibra</h2>

            <label for="message" class="form-label">Sinal do DROP:</label>
            <div class="container_sinal_fibra">
                <input
                    @change="${this._adicionar_sinal_fibra}"
                    style="flex:3"
                    type="number" 
                    placeholder="0.0"
                    .value="${this.objeto_os.OS.conferencia_tecnica.fibra.sinal_pto===null?``:this.objeto_os.OS.conferencia_tecnica.fibra.sinal_pto}"
                    id="text_sinal_drop" name="fname" value="" class="form-input">
                <button
                    @click="${this._desabilitar_por_LOS}"
                    style="flex:1"
                    type="button" id="btn_desabilitar" class="form-button">LOS</button>
            </div>
            ${this.container_sinais===!0?D`
                <div
                    style="display:flex; flex-direction: row; gap:1rem;margin-top:1rem;">
                    <div>
                        <label for="message" class="form-label">Pathcord</label>

                        <input
                        @change="${this._adicionar_sinal_fibra}"
                        type="number" 
                        placeholder="0.0"
                        .value="${this.objeto_os.OS.conferencia_tecnica.fibra.sinal_pathcord===null?``:this.objeto_os.OS.conferencia_tecnica.fibra.sinal_pathcord}"
                        id="text_sinal_pathcord" name="fname" value="" class="form-input">
                    </div>
                    <div>
                        <label for="message" class="form-label">AutoISP</label>

                        <input
                        @change="${this._adicionar_sinal_fibra}"
                        type="number" 
                        placeholder="0.0"
                        .value="${this.objeto_os.OS.conferencia_tecnica.fibra.sinal_autoisp===null?``:this.objeto_os.OS.conferencia_tecnica.fibra.sinal_autoisp}"
                        id="text_sinal_autoisp" name="fname" value="" class="form-input">
                    </div>
                </div>
                <br>
                <p class="texto_informativo">
                    A foto do sinal de Fibra Foi Anexada?
                </p>
                <div @change="${this._alterar_anexo_fibra}" class="radio-input">
                    <label>
                        <input ?checked="${this.objeto_os.OS.conferencia_tecnica.fibra.anexo_sinal===!0}" name="value-radio-anexo-fibra" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.objeto_os.OS.conferencia_tecnica.fibra.anexo_sinal===!1}" name="value-radio-anexo-fibra" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>

                <p class="texto_informativo">
                    Foi realizada a Limpeza dos conectores e emeda de Fibra?
                </p>
                <div @change="${this._alterar_limpeza_fibra}" class="radio-input">
                    <label>
                        <input ?checked="${this.objeto_os.OS.conferencia_tecnica.fibra.limpeza===!0}" name="value-radio-limpeza-fibra" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.objeto_os.OS.conferencia_tecnica.fibra.limpeza===!1}" name="value-radio-limpeza-fibra" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
                <br>
                <textarea
                    @dblclick="${e=>Q(e.target,`Fibra`)}"
                    @change="${this._alterar_observacao_fibra}" 
                    id="message" 
                    name="message"
                    style="border-left: 5px solid #ff0000;"
                    rows="5" 
                    placeholder="Caso tenha alguma observação relacionado a Fibra adicione aqui para omitir no relatório final!"
                    class="form-textarea"
                    .value="${this.objeto_os.OS.conferencia_tecnica.fibra.observacao===null?``:this.objeto_os.OS.conferencia_tecnica.fibra.observacao}"></textarea>
                `:``}
        `}};customElements.define(`verificacao-fibra`,Qt);var $t=`:host{box-sizing:border-box;color:var(--text-color);display:block}*,:before,:after{box-sizing:inherit;margin:0;padding:0}h2{color:var(--text-color);text-align:center}p{font-size:var(--paragraph);text-align:left;font-weight:100}.container_checks{flex-direction:row;justify-content:space-between;display:flex}.container_item_checks{flex-direction:column;align-items:center;gap:.5rem;display:flex}.form-input,.form-select,.form-textarea{appearance:none;box-sizing:border-box;color:#1a202c;background-color:#f8fafc;border:2px solid #e2e8f0;border-radius:6px;width:100%;padding:10px 12px;font-family:inherit;font-size:15px;transition:border-color .2s,background-color .2s}.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--destaque-color);background-color:#fff;outline:none}.form-select{cursor:pointer;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");background-position:right 12px center;background-repeat:no-repeat;background-size:16px;padding-right:40px}.form-textarea{resize:vertical;width:100%;min-height:100px}.toggle-switch{cursor:pointer;width:40px;height:20px;display:inline-block;position:relative}.toggle-switch input[type=checkbox]{display:none}.toggle-switch-background{background-color:#ddd;border-radius:20px;width:100%;height:100%;transition:background-color .3s ease-in-out;position:absolute;top:0;left:0;box-shadow:inset 0 0 0 2px #ccc}.toggle-switch-handle{background-color:#fff;border-radius:50%;width:20px;height:20px;transition:transform .3s ease-in-out;position:absolute;top:0;left:0;box-shadow:0 2px 5px #0003}.toggle-switch:before{content:"";color:#aaa;text-shadow:1px 1px #fff;font-size:12px;font-weight:700;transition:color .3s ease-in-out;position:absolute;top:-25px;right:-35px}.toggle-switch input[type=checkbox]:checked+.toggle-switch-handle{box-shadow:0 2px 5px #0003, 0 0 0 3px var(--destaque-color);transform:translate(5px)}.toggle-switch input[type=checkbox]:checked+.toggle-switch-background{background-color:var(--destaque-color);box-shadow:inset 0 0 0 2px var(--destaque-color)}.toggle-switch input[type=checkbox]:checked+.toggle-switch:before{content:"On";color:var(--destaque-color);right:-5px}.toggle-switch input[type=checkbox]:checked+.toggle-switch-background .toggle-switch-handle{transform:translate(20px)}`,en=class extends I{static properties={objeto_os:{type:Object}};static get styles(){return o`${a($t)}`}constructor(){super(),this.objeto_os={}}firstUpdated(){}connectedCallback(){super.connectedCallback()}_alterar_data_fonte=(e,t)=>{let n=t,r=e.target.checked;switch(n){case`primeiro`:this.objeto_os.OS.conferencia_tecnica.fontes.mau_contato=r;break;case`segundo`:this.objeto_os.OS.conferencia_tecnica.fontes.amperagem=r;break;case`terceiro`:this.objeto_os.OS.conferencia_tecnica.fontes.uso=r;break}this.objeto_os.salvar_os_localstorage()};_alterar_relatorio_fonte=e=>{let t=e.target.value;this.objeto_os.OS.conferencia_tecnica.fontes.observacao=t,this.objeto_os.salvar_os_localstorage()};render(){return D`
            <!--Retorno renderizado-->
            <h2>Checagem das Fontes</h2>
            <br>
            <div class="container_checks">
                <div class="container_item_checks">
                    <p style="text-align: center;">Verificado mau Contato</p>
                    <label class="toggle-switch">
                        <input
                        @change="${e=>{this._alterar_data_fonte(e,`primeiro`)}}"
                        ?checked="${this.objeto_os.OS.conferencia_tecnica.fontes.mau_contato}"
                        type="checkbox">
                        <div class="toggle-switch-background">
                            <div class="toggle-switch-handle"></div>
                        </div>
                    </label>
                </div>

                <div class="container_item_checks">
                    <p style="text-align: center;">Verificado amperagem Correta</p>
                    <label class="toggle-switch">
                        <input
                        @change="${e=>{this._alterar_data_fonte(e,`segundo`)}}"
                        ?checked="${this.objeto_os.OS.conferencia_tecnica.fontes.amperagem}"
                        type="checkbox">
                        <div class="toggle-switch-background">
                            <div class="toggle-switch-handle"></div>
                        </div>
                    </label>
                </div>

                <div class="container_item_checks">
                    <p style="text-align: center;">Verificado mau Uso</p>
                    <label class="toggle-switch">
                        <input
                        @change="${e=>{this._alterar_data_fonte(e,`terceiro`)}}"
                        ?checked="${this.objeto_os.OS.conferencia_tecnica.fontes.uso}"
                        type="checkbox">
                        <div class="toggle-switch-background">
                            <div class="toggle-switch-handle"></div>
                        </div>
                    </label>
                </div>
            </div>
            <br>
            <textarea
                @dblclick="${e=>Q(e.target,`Fonte`)}"
                @change="${this._alterar_relatorio_fonte}"
                name="message" 
                style="border-left: 5px solid #ff0000;"
                rows="5"
                class="form-textarea"
                .value="${this.objeto_os.OS.conferencia_tecnica.fontes.observacao}"
                placeholder="Adicione aqui qualquer observação relacionado as Fontes checadas!"></textarea>
            
            
        `}};customElements.define(`verificar-fonte`,en);var tn=`:host{box-sizing:border-box;color:var(--text-color);display:block}*,:before,:after{box-sizing:inherit;margin:0;padding:0}h2{color:var(--text-color);text-align:center}p{font-size:var(--paragraph);text-align:left;font-weight:100}.container_modal_lista{flex-direction:column;gap:.5rem;display:flex}.container-ativos{flex-direction:column;row-gap:.5rem;display:flex}.container-ativo{flex-direction:row;justify-content:space-between;align-items:center;gap:.5rem;display:flex}.container-tipo{background-color:var(--cards-background);color:var(--text-color);border-radius:.5rem;padding:.5rem}.botao-close{appearance:none;color:#fff;cursor:pointer;background-color:var(--destaque-color);border:none;border-radius:6px;height:40px;padding:5px 12px;display:inline-block}.form-button{appearance:none;background-color:var(--destaque-color);color:#fff;cursor:pointer;border:none;border-radius:6px;width:100%;padding:12px 24px;font-family:inherit;font-size:15px;font-weight:600;transition:background-color .2s}.form-button:hover,.form-button:active{background-color:var(--destaque-color)}.form-group{flex-direction:column;margin-bottom:20px;display:flex}.form-label{color:var(--btn-text-background-color);margin-bottom:6px;font-size:17px;font-weight:600}.form-label-inline{color:var(--text-color);cursor:pointer;font-size:14px}.form-input,.form-select,.form-textarea{appearance:none;box-sizing:border-box;color:#1a202c;background-color:#f8fafc;border:2px solid #e2e8f0;border-radius:6px;width:100%;padding:10px 12px;font-family:inherit;font-size:15px;transition:border-color .2s,background-color .2s}.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--destaque-color);background-color:#fff;outline:none}.form-radio,.form-checkbox{appearance:none;font:inherit;color:var(--destaque-color);cursor:pointer;background-color:#f8fafc;border:2px solid #cbd5e1;place-content:center;width:18px;height:18px;margin:0;transition:border-color .2s;display:grid}.form-radio{border-radius:50%}.form-checkbox{border-radius:4px}.form-radio:before{content:"";background-color:currentColor;border-radius:50%;width:8px;height:8px;transition:transform .12s ease-in-out;transform:scale(0)}.form-checkbox:before{content:"";clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%);background-color:currentColor;width:10px;height:10px;transition:transform .12s ease-in-out;transform:scale(0)}.form-radio:checked:before,.form-checkbox:checked:before{transform:scale(1)}.form-radio:checked,.form-checkbox:checked{border-color:var(--destaque-color)}.form-group-row{align-items:center;gap:8px;margin-bottom:15px;display:flex}.form-radio:focus,.form-checkbox:focus{outline:2px solid #ebf8ff}.form-select{cursor:pointer;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");background-position:right 12px center;background-repeat:no-repeat;background-size:16px;padding-right:40px}.modal-backdrop{background:#00000080;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:fixed;top:0;left:0}.modal-content{background:var(--cards-background);color:var(--text-color);border-radius:8px;width:95%;padding:20px}@media (width>=1024px){.modal-content{width:500px}}.item-lista{cursor:pointer;border-bottom:1px solid #eee;padding:10px}.item-lista:hover{background:#f5f5f5}`,nn=class extends I{static properties={objeto_os:{type:Object},modal_aberto:{type:Boolean},ativo:{type:Object},lista_ativos:{type:Array}};static get styles(){return o`${a(tn)}`}constructor(){super(),this.objeto_os={},this.modal_aberto=!1,this.ativo={},this.lista_ativos=[]}firstUpdated(){}connectedCallback(){super.connectedCallback(),this.lista_ativos=this.objeto_os.OS.conferencia_tecnica.teste_navegacao}_Abrir_Modal_Edicao=e=>{this.ativo={id:e,edicao:!0,...this.lista_ativos[e]},this.modal_aberto=!0};_Abrir_Modal_Criacao=()=>{this.ativo={edicao:!1,ativos_cliente:!0,tipo_ativo:`outros`,observacao:null},this.modal_aberto=!0};_Fechar_Modal=e=>{this.modal_aberto=!1,this.ativo={}};_Salvar_Edicao_Modal(e,t){if(t){let e=this.renderRoot?.querySelector(`#cat_ativos`).value,t=this.renderRoot?.querySelector(`#valor_checks input[name="tipo"]:checked`).value,n=this.renderRoot?.querySelector(`#message`).value===``?null:this.renderRoot?.querySelector(`#message`).value,r=e===`cliente`;this.lista_ativos[this.ativo.id]={ativos_cliente:r,tipo_ativo:t,observacao:n},this.objeto_os.salvar_os_localstorage()}else{let e=this.renderRoot?.querySelector(`#cat_ativos`).value,t=this.renderRoot?.querySelector(`#valor_checks input[name="tipo"]:checked`).value,n=this.renderRoot?.querySelector(`#message`).value===``?null:this.renderRoot?.querySelector(`#message`).value,r=e===`cliente`;this.lista_ativos.push({ativos_cliente:r,tipo_ativo:t,observacao:n}),this.objeto_os.salvar_os_localstorage()}this._Fechar_Modal()}_Deletar_item_Lista=(e,t)=>{this.lista_ativos=this.lista_ativos.filter((e,n)=>n!==t),this.objeto_os.OS.conferencia_tecnica.teste_navegacao=this.lista_ativos,this.objeto_os.salvar_os_localstorage(),this.lista_ativos=this.objeto_os.OS.conferencia_tecnica.teste_navegacao};render(){return D`
            <!--Retorno renderizado-->
            <br>
            <h2>Teste de Navegação</h2>
            <div class="form-group" style="margin-top: 10px;">
                <button 
                    @click="${this._Abrir_Modal_Criacao}"
                    type="button" class="form-button">Add Ativo</button>
            </div>
            <br>
            <div class="container-ativos">

                ${this.lista_ativos.map((e,t)=>D`
                    <div class="container-ativo" style="cursor: pointer;">
                        <a
                            @click=${()=>this._Abrir_Modal_Edicao(t)}
                            ><span class="container-tipo">${e.ativos_cliente===!0?`Ativo do Cliente`:`Ativo da Empresa`}</span> - ${e.tipo_ativo}</a>
                        <button 
                            @click="${e=>{this._Deletar_item_Lista(e,t)}}"
                            type="button" class="botao-close">–</button>
                    </div>
                `)}
                
            <div>
            
            

            <!-- Modal de Edição dos itens listados-->
            ${this.modal_aberto?D`
                <div class="modal-backdrop" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 999;" @click=${this._Fechar_Modal}>
                    
                    <div class="modal-content" @click=${e=>e.stopPropagation()}>
                        <h3>Editar Ativo</h3>
                        <hr>
                        <br>
                        <div class="form-group">
                            <label for="cat_ativos" class="form-label">Selecione a Categoria:</label>
                            <select id="cat_ativos" name="cat_ativos" class="form-select">
                                <option ?selected="${this.ativo.ativos_cliente===!0}" value="cliente">Cliente</option>
                                <option ?selected="${this.ativo.ativos_cliente===!1}" value="empresa">Empresa</option>
                            </select>
                        </div>
                        
                        <div id="valor_checks" class="form-group">
                            <span class="form-label">Selecione o Tipo de Ativo:</span>
                            <div style="display:flex; justify-content: space-evenly; gap:1rem;">
                                <div class="container_modal_lista">
                                    <div class="form-group-row">
                                        <input ?checked="${this.ativo.tipo_ativo===`celular`}" type="radio" id="celular" name="tipo" value="celular" class="form-radio">
                                        <label for="celular" class="form-label-inline">Celular</label>
                                    </div>
                                    <div class="form-group-row">
                                        <input ?checked="${this.ativo.tipo_ativo===`tv`}" type="radio" id="tv" name="tipo" value="tv" class="form-radio">
                                        <label for="tv" class="form-label-inline">TV</label>
                                    </div>
                                    <div class="form-group-row">
                                        <input ?checked="${this.ativo.tipo_ativo===`tvbox`}" type="radio" id="tvbox" name="tipo" value="tvbox" class="form-radio">
                                        <label for="tvbox" class="form-label-inline">TVBox</label>
                                    </div>
                                </div>
                                <div class="container_modal_lista">
                                    <div class="form-group-row">
                                        <input ?checked="${this.ativo.tipo_ativo===`computador`}" type="radio" id="computador" name="tipo" value="computador" class="form-radio">
                                        <label for="computador" class="form-label-inline">Computador</label>
                                    </div>
                                    <div class="form-group-row">
                                        <input ?checked="${this.ativo.tipo_ativo===`videogame`}" type="radio" id="videogame" name="tipo" value="videogame" class="form-radio">
                                        <label for="videogame" class="form-label-inline">Video Game</label>
                                    </div>
                                    <div class="form-group-row">
                                        <input ?checked="${this.ativo.tipo_ativo===`outros`}" type="radio" id="outros" name="tipo" value="outros" class="form-radio">
                                        <label for="outros" class="form-label-inline">Outros</label>
                                    </div>
                                </div>
                            </div>
 
                        </div>
                        
                        <div class="form-group">
                            <label for="message" class="form-label">Observação</label>
                            <textarea
                                @dblclick="${e=>Q(e.target,`Outros`)}"
                                style="border-left: 5px solid #ff0000;" 
                                id="message" 
                                name="message" 
                                rows="5"
                                .value="${this.ativo.observacao}"
                                class="form-textarea"></textarea>
                        </div>
                        <div class="form-group" style="margin-top: 10px; display:flex; flex-direction: row; gap:.5rem">
                            <button 
                                style="background-color: var(--btn-background-color); color:var(--btn-text-background-color);"
                                type="button" class="form-button"
                                @click="${e=>{this._Salvar_Edicao_Modal(e,this.ativo.edicao)}}"
                                >Salvar</button>
                            <button type="button" class="form-button" @click=${this._Fechar_Modal}>Fechar</button>
                        </div>
                    </div>
                </div>
            `:``}

        `}};customElements.define(`navegacao-teste`,nn);var rn=`:host{box-sizing:border-box;color:var(--text-color);display:block}*,:before,:after{box-sizing:inherit;margin:0;padding:0}h2{color:var(--text-color);text-align:center}p{font-size:var(--paragraph);text-align:left;font-weight:100}.form-label{color:var(--btn-text-background-color);margin-bottom:6px;font-size:17px;font-weight:600}.form-label-inline{color:var(--text-color);cursor:pointer;font-size:14px}.form-group{flex-direction:column;margin-bottom:20px;display:flex}.form-group-row{justify-content:space-between;align-items:center;gap:8px;margin-bottom:15px;display:flex}.form-input,.form-select,.form-textarea{appearance:none;box-sizing:border-box;color:#1a202c;background-color:#f8fafc;border:2px solid #e2e8f0;border-radius:6px;width:100%;padding:10px 12px;font-family:inherit;font-size:15px;transition:border-color .2s,background-color .2s}.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--destaque-color);background-color:#fff;outline:none}.form-textarea{resize:vertical;width:100%;min-height:100px}.radio-input input{display:none}.radio-input{--container_width:100%;color:#000;width:var(--container_width);background-color:#fff;border:1px solid #3534343a;border-radius:10px;align-items:center;display:flex;position:relative;overflow:hidden}.radio-input label{cursor:pointer;z-index:1;letter-spacing:-1px;justify-content:center;align-items:center;width:100%;padding:10px;font-size:14px;font-weight:600;display:flex}.selection{z-index:0;width:50%;height:100%;transition:all .15s;display:none;position:absolute;top:0;left:0}.radio-input label:has(input:checked){color:#fff}.radio-input label:has(input:checked)~.selection{background-color:var(--destaque-color);display:inline-block}.radio-input label:first-child:has(input:checked)~.selection{transform:translateX(calc(50% / 20%))}.radio-input label:nth-child(2):has(input:checked)~.selection{transform:translate(100%)}`,an=class extends I{static properties={objeto_os:{type:Object},estado_obs_extra:{type:Boolean},data_site:{type:Object}};static get styles(){return o`${a(rn)}`}constructor(){super(),this.objeto_os={},this.data_site={},this.estado_obs_extra=!1}firstUpdated(){}connectedCallback(){super.connectedCallback(),this.data_site=this.objeto_os.OS.conferencia_tecnica.mapa_calor,this.estado_obs_extra=this.data_site.pontos_sobra}_Alterar_Ponto_Sombra=e=>{let t=e.target.value===`true`;this.estado_obs_extra=t,this.data_site.pontos_sobra=t,this.objeto_os.salvar_os_localstorage()};_Alterar_checagem_mapa=e=>{let t=e.target.value===`true`;this.data_site.realizado=t,this.objeto_os.salvar_os_localstorage()};_Alterar_descricao_sombra=e=>{let t=e.target.value===``?null:e.target.value;this.data_site.ponto_adicional=t,this.objeto_os.salvar_os_localstorage()};_Alterar_descricao_geral=e=>{let t=e.target.value===``?null:e.target.value;this.data_site.observacao=t,this.objeto_os.salvar_os_localstorage()};render(){return D`
            <!--Retorno renderizado-->
            <br>
            <h2>Site Survey</h2>
            <div style="display:flex; gap:.5rem; align-items: end;">
               <div style="flex:1;">
                    <p style="margin-top:.5rem; text-align:center;" for="fname" class="form-label">Realizado Mapa de Calor?</p>
                    <br>
                    <div @change="${this._Alterar_checagem_mapa}" class="radio-input">
                        <label>
                            <input ?checked="${this.data_site.realizado===!0}" value="true" name="wifi-survey" id="value-1" type="radio" />
                            <span>S i m</span>
                        </label>
                        <label>
                            <input ?checked="${this.data_site.realizado===!1}" value="false" name="wifi-survey" id="value-2" type="radio" />
                            <span>N ã o</span>
                        </label>
                        <span class="selection"></span>
                    </div>
                </div>

                <div style="flex:1;">
                    <p style="margin-top:.5rem; text-align:center" for="fname" class="form-label">Detectado pontos de sombra no local?</p>
                    <br>
                    <div @change="${this._Alterar_Ponto_Sombra}" class="radio-input">
                        <label>
                            <input ?checked="${this.data_site.pontos_sobra===!0}" value="true" name="wifi-survey-shadow" id="value-1" type="radio" />
                            <span>S i m</span>
                        </label>
                        <label>
                            <input ?checked="${this.data_site.pontos_sobra===!1}" value="false" name="wifi-survey-shadow" id="value-2" type="radio" />
                            <span>N ã o</span>
                        </label>
                        <span class="selection"></span>
                    </div>
                </div>
            </div>
            <br>

            ${this.estado_obs_extra?D`
            <div class="form-group">
                <label for="message" class="form-label">Em caso de Pontos de Sombra!</label>
                <textarea
                    @dblclick="${e=>Q(e.target,`Site Survey`)}"
                    @change="${this._Alterar_descricao_sombra}"
                    .value="${this.data_site.ponto_adicional}"
                    style="border-left: 5px solid #ff0000;" 
                    placeholder="Explique se é viável um segundo ponto no local!"
                    id="message" name="message" rows="2" class="form-textarea"></textarea>
            </div>
                `:``}
            
            <div class="form-group">
                <label for="message" class="form-label">Observação do Site Survey</label>
                <textarea
                    @dblclick="${e=>Q(e.target,`Site Survey`)}"
                    @change="${this._Alterar_descricao_geral}"
                    .value="${this.data_site.observacao}"
                    style="border-left: 5px solid #ff0000;" 
                    placeholder="Faça uma explicação sobre esse mapa de Calor!"
                    id="message" name="message" rows="5" class="form-textarea"></textarea>
            </div>

            
        `}};customElements.define(`site-survey`,an);var on=`:host{box-sizing:border-box;color:var(--text-color);display:block}*,:before,:after{box-sizing:inherit;margin:0;padding:0}h2{color:var(--text-color);text-align:center}p{font-size:var(--paragraph);text-align:left;font-weight:100}.form-container{max-width:auto;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.form-group{flex-direction:column;margin-bottom:20px;display:flex}.form-group-row{align-items:center;gap:8px;margin-bottom:15px;display:flex}.form-label{color:var(--btn-text-background-color);margin-bottom:6px;font-size:17px;font-weight:600}.form-label-inline{color:#333;cursor:pointer;font-size:14px}.container-pings{flex-direction:column;display:flex}.container-ping{flex-direction:column;gap:1rem;display:flex}.container-data-ping{flex-direction:row;justify-content:space-between;display:flex}.container-data-result{flex-direction:row;gap:.5rem;display:flex}.card-data-ping{background-color:var(--cards-background);color:var(--text-color);border-radius:.8rem;flex:1;padding:.5rem}.form-input,.form-select,.form-textarea{appearance:none;box-sizing:border-box;color:#1a202c;background-color:#f8fafc;border:2px solid #e2e8f0;border-radius:6px;width:100%;padding:10px 12px;font-family:inherit;font-size:15px;transition:border-color .2s,background-color .2s}.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--destaque-color);background-color:#fff;outline:none}.form-select{cursor:pointer;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");background-position:right 12px center;background-repeat:no-repeat;background-size:16px;padding-right:40px}.form-textarea{resize:vertical;min-height:100px}.form-radio,.form-checkbox{appearance:none;font:inherit;color:#3182ce;cursor:pointer;background-color:#f8fafc;border:2px solid #cbd5e1;place-content:center;width:18px;height:18px;margin:0;transition:border-color .2s;display:grid}.form-radio{border-radius:50%}.form-checkbox{border-radius:4px}.form-radio:before{content:"";background-color:currentColor;border-radius:50%;width:8px;height:8px;transition:transform .12s ease-in-out;transform:scale(0)}.form-checkbox:before{content:"";clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%);background-color:currentColor;width:10px;height:10px;transition:transform .12s ease-in-out;transform:scale(0)}.form-radio:checked:before,.form-checkbox:checked:before{transform:scale(1)}.form-radio:checked,.form-checkbox:checked{border-color:var(--destaque-color)}.form-radio:focus,.form-checkbox:focus{outline:2px solid #ebf8ff}.form-button{appearance:none;background-color:var(--destaque-color);color:#fff;cursor:pointer;border:none;border-radius:6px;width:100%;padding:12px 24px;font-family:inherit;font-size:15px;font-weight:600;transition:background-color .2s}.form-button:hover,.form-button:active{background-color:var(--destaque-color)}.botao-close{appearance:none;color:#fff;cursor:pointer;background-color:var(--destaque-color);border:none;border-radius:6px;height:30px;padding:5px 12px;display:inline-block}.modal-backdrop{z-index:9000;background:#00000080;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:fixed;top:0;left:0}.modal-content{background:var(--cards-background);color:var(--text-color);border-radius:8px;width:95%;padding:20px}@media (width>=1024px){.modal-content{width:500px}}.radio-input input{display:none}.radio-input{--container_width:100%;color:#000;width:var(--container_width);background-color:#fff;border:1px solid #3534343a;border-radius:10px;align-items:center;display:flex;position:relative;overflow:hidden}.radio-input label{cursor:pointer;z-index:1;letter-spacing:-1px;justify-content:center;align-items:center;width:100%;padding:10px;font-size:14px;font-weight:600;display:flex}.selection{z-index:0;width:50%;height:100%;transition:all .15s;display:none;position:absolute;top:0;left:0}.radio-input label:has(input:checked){color:#fff}.radio-input label:has(input:checked)~.selection{background-color:var(--destaque-color);display:inline-block}.radio-input label:first-child:has(input:checked)~.selection{transform:translateX(calc(50% / 20%))}.radio-input label:nth-child(2):has(input:checked)~.selection{transform:translate(100%)}`,sn=class extends I{static properties={objeto_os:{type:Object},modal_aberto:{type:Boolean},objeto_ping:{type:Object},ativo:{type:Object}};static get styles(){return o`${a(on)}`}constructor(){super(),this.objeto_os={},this.modal_aberto=!1,this.objeto_ping=[],this.ativo={}}firstUpdated(){}connectedCallback(){super.connectedCallback(),this.objeto_ping=this.objeto_os.OS.conferencia_tecnica.ping_adicional}_Fechar_Modal=()=>{this.modal_aberto=!1};_Alterar_Descricao_Ping=e=>{let t=e.target.value===``?null:e.target.value;this.objeto_os.OS.conferencia_tecnica.observacao_ping=t,this.objeto_os.salvar_os_localstorage()};_deletar_Item=(e,t)=>{this.objeto_ping=this.objeto_ping.filter((e,n)=>n!==t),this.objeto_os.OS.conferencia_tecnica.ping_adicional=this.objeto_ping,this.objeto_os.salvar_os_localstorage(),this.objeto_ping=this.objeto_os.OS.conferencia_tecnica.ping_adicional};_Abrir_Modal_Edicao=(e,t)=>{this.acao=!0;let n=this.objeto_ping[t];this.ativo=n,this.modal_aberto=!0};_Abrir_Modal_criacao=e=>{this.acao=!1,this.objeto_ping,this.ativo={titulo:`empresa`,tipo:`ipv4`,destino:`google`,outro:null,pacotes:[200,200,0],latencia:[null,null,null]},this.modal_aberto=!0};_Editar_Ping=(e,t)=>{let n=this.renderRoot?.querySelector(`#titulo input[name="tipo_teste_ativo"]:checked`).value,r=this.renderRoot?.querySelector(`#destino`).value,i=null;this.renderRoot?.querySelector(`#outro-destino`)&&(i=this.renderRoot?.querySelector(`#outro-destino`).value===``?null:this.renderRoot?.querySelector(`#outro-destino`).value);let a=this.renderRoot?.querySelector(`#protocolo input[name="tipo_teste_ip"]:checked`).value,o=this.renderRoot?.querySelector(`#pacotes-enviado`).value,s=this.renderRoot?.querySelector(`#pacotes-recebidos`).value,c=this.renderRoot?.querySelector(`#pacotes-perdidos`).value,l=this.renderRoot?.querySelector(`#latencia-minima`).value,u=this.renderRoot?.querySelector(`#latencia-media`).value,d=this.renderRoot?.querySelector(`#latencia-maxima`).value;t?(this.ativo.titulo=n,this.ativo.destino=r,this.ativo.outro=i,this.ativo.tipo=a,this.ativo.pacotes[0]=parseInt(o),this.ativo.pacotes[1]=parseInt(s),this.ativo.pacotes[2]=parseInt(c),this.ativo.latencia[0]=parseInt(l),this.ativo.latencia[1]=parseInt(u),this.ativo.latencia[2]=parseInt(d)):(this.ativo.titulo=n,this.ativo.destino=r,this.ativo.outro=i,this.ativo.tipo=a,this.ativo.pacotes[0]=parseInt(o),this.ativo.pacotes[1]=parseInt(s),this.ativo.pacotes[2]=parseInt(c),this.ativo.latencia[0]=parseInt(l),this.ativo.latencia[1]=parseInt(u),this.ativo.latencia[2]=parseInt(d),this.objeto_ping.push(this.ativo),this.ativo={}),this.objeto_os.salvar_os_localstorage(),this._Fechar_Modal()};_Somar_Percas=()=>{let e=parseInt(this.renderRoot?.querySelector(`#pacotes-enviado`).value)-parseInt(this.renderRoot?.querySelector(`#pacotes-recebidos`).value);this.ativo.pacotes[2]=e,this.objeto_os.salvar_os_localstorage(),this.requestUpdate()};_Alterar_Tipo_Destino=e=>{let t=e.target.value;this.ativo.destino=t,this.requestUpdate()};render(){return D`
            <!--Retorno renderizado-->
            <br>
            <h2>Relatório do Ping</h2>
            <div class="form-group">
                <label for="message" class="form-label">Relatório:</label>
                <textarea
                    @dblclick="${e=>Q(e.target,`Ping`)}"
                    @change="${this._Alterar_Descricao_Ping}"
                    .value="${this.objeto_os.OS.conferencia_tecnica.observacao_ping}"
                    style="border-left: 5px solid #ff0000;"
                    id="message" 
                    name="message" 
                    rows="5" class="form-textarea"></textarea>
            </div>
            <div class="form-group" style="margin-top: 10px;">
                <button 
                    @click="${this._Abrir_Modal_criacao}"
                    type="button" class="form-button">Add Ping Manual</button>
            </div>
            <br>
            <div class="container-pings">

                ${this.objeto_ping.map((e,t)=>D`
                    <div class="container-ping">
                        <div class="container-data-ping">
                            <div @click="${e=>this._Abrir_Modal_Edicao(e,t)}">
                                <p><b>Ping ${e.tipo}</b> - Ativo ➔ ${e.titulo} (${e.destino})</p>
                            </div>
                            <div>
                                <button 
                                    @click="${e=>this._deletar_Item(e,t)}"
                                    type="button" class="botao-close">–</button>
                            </div>
                        </div>
                        <div class="container-data-result">
                            <div class="card-data-ping">
                                <p>Enviados: <strong>${e.pacotes[0]}</strong></p>
                                <p>Recebidos: <strong>${e.pacotes[1]}</strong></p>
                                <p>Perdidos: <strong>${e.pacotes[2]}</strong></p>
                            </div>
                            <div class="card-data-ping">
                                <p>Mínimo: <strong>${e.latencia[0]}ms</strong></p>
                                <p>Média: <strong>${e.latencia[1]}ms</strong></p>
                                <p>Máxima: <strong>${e.latencia[2]}ms</strong></p>
                            </div>
                        </div>
                    </div>
                    <br>
                `)}

            </div>
            


            <!--Modal de Configuracao do Ping-->

            ${this.modal_aberto?D`
                <div
                    class="modal-backdrop"
                    @click=${this._Fechar_Modal}
                >
                    <div
                        class="modal-content"
                        
                        @click=${e=>e.stopPropagation()}
                    >
                        <h3>Editar Ping</h3>
                        <br>
                        <br>
                        <div class="form-group">
                            <label for="cars" class="form-label">Ativo Testado:</label>

                            <div id="titulo" class="radio-input">
                                <label>
                                    <input ?checked="${this.ativo.titulo===`empresa`}" value="empresa" name="tipo_teste_ativo" id="value-1" type="radio" />
                                    <span>E m p r e s a</span>
                                </label>
                                <label>
                                    <input ?checked="${this.ativo.titulo===`cliente`}" value="cliente" name="tipo_teste_ativo" id="value-2" type="radio" />
                                    <span>C l i e n t e</span>
                                </label>
                                <span class="selection"></span>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="destino" class="form-label">Selecione o destino:</label>
                            <select 
                                @change="${this._Alterar_Tipo_Destino}"
                                id="destino" name="destino" class="form-select">
                                <option ?selected="${this.ativo.destino===`google`}" value="google">Google</option>
                                <option ?selected="${this.ativo.destino===`youtube`}" value="youtube">Youtube</option>
                                <option ?selected="${this.ativo.destino===`facebook`}" value="facebook">Facebook</option>
                                <option ?selected="${this.ativo.destino===`instagram`}" value="instagram">Instagram</option>
                                <option ?selected="${this.ativo.destino===`gateway`}" value="gateway">Gateway</option>
                                <option ?selected="${this.ativo.destino===`outro`}" value="outro">Outro</option>
                            </select>
                        </div>
                        
                        ${this.ativo.destino===`outro`?D`
                        <div class="form-group">
                            <label for="outro-destino" class="form-label">Em caso de "Outro"</label>
                            <input type="text" id="outro-destino" name="outro-destino" .value="${this.ativo.outro}" class="form-input">
                        </div>
                            `:``}
                        

                        <div class="form-group">
                            <label for="fname" class="form-label">Selecione o Protocolo</label>
                            <div id="protocolo" class="radio-input">
                                <label>
                                    <input ?checked="${this.ativo.tipo===`ipv4`}" value="ipv4" name="tipo_teste_ip" id="value-1" type="radio" />
                                    <span>I P v 4</span>
                                </label>
                                <label>
                                    <input ?checked="${this.ativo.tipo===`ipv6`}" value="ipv6" name="tipo_teste_ip" id="value-2" type="radio" />
                                    <span>I P v 6</span>
                                </label>
                                <span class="selection"></span>
                            </div>
                        </div>
                        
                        <div style="display:flex; flex-direction: row; gap:.5rem;">
                            <div class="form-group">
                                <label for="pacotes-enviado" class="form-label">Enviados</label>
                                <input 
                                    @change="${this._Somar_Percas}"
                                    type="number" id="pacotes-enviado" name="pacotes-enviado" .value="${this.ativo.pacotes[0]}" class="form-input">
                            </div>
                            <div class="form-group">
                                <label for="pacotes-recebidos" class="form-label">Recebidos</label>
                                <input 
                                    @change="${this._Somar_Percas}"
                                    type="number" id="pacotes-recebidos" name="pacotes-recebidos" .value="${this.ativo.pacotes[1]}" class="form-input">
                            </div>
                            <div class="form-group">
                                <label for="pacotes-perdidos" class="form-label">Perdidos</label>
                                <input disabled type="number" id="pacotes-perdidos" name="pacotes-perdidos" .value="${this.ativo.pacotes[2]}" class="form-input">
                            </div>
                        </div>

                        <div style="display:flex; flex-direction: row; gap:.5rem;">
                            <div class="form-group">
                                <label for="latencia-minima" class="form-label">Mínima</label>
                                <input type="number" id="latencia-minima" name="latencia-minima" .value="${this.ativo.latencia[0]}" class="form-input">
                            </div>
                            <div class="form-group">
                                <label for="latencia-media" class="form-label">Média</label>
                                <input type="number" id="latencia-media" name="latencia-media" .value="${this.ativo.latencia[1]}" class="form-input">
                            </div>
                            <div class="form-group">
                                <label for="latencia-maxima" class="form-label">Máxima</label>
                                <input type="number" id="latencia-maxima" name="latencia-maxima" .value="${this.ativo.latencia[2]}" class="form-input">
                            </div>
                        </div>

                        <div class="form-group" style="margin-top: 10px; display: flex; flex-direction: row; gap:.5rem">
                            <button 
                                @click="${e=>this._Editar_Ping(e,this.acao)}"
                                style="background-color: var(--btn-background-color); color: var(--text-color);"
                                type="button" class="form-button")">Salvar</button>
                            <button 
                                @click="${this._Fechar_Modal}"
                                type="button" class="form-button")">Fechar</button>
                        </div>

                    </div>
                </div>
            `:``}

            
        `}};customElements.define(`componente-ping`,sn);var cn=`:host{box-sizing:border-box;color:var(--text-color);display:block}*,:before,:after{box-sizing:inherit;margin:0;padding:0}h2{color:var(--text-color);text-align:center}p{font-size:var(--paragraph);text-align:left;font-weight:100}.form-container{max-width:auto;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.form-group{flex-direction:column;margin-bottom:20px;display:flex}.form-group-row{align-items:center;gap:8px;margin-bottom:15px;display:flex}.form-label{color:var(--btn-text-background-color);margin-bottom:6px;font-size:17px;font-weight:600}.form-label-inline{color:#333;cursor:pointer;font-size:14px}.container-tracert{flex-direction:column;gap:.5rem;display:flex}.container-tracert-item{flex-direction:row;justify-content:space-between;display:flex}.destaque{background-color:var(--destaque-color);border-radius:.5rem;padding:.2rem}.form-input,.form-select,.form-textarea{appearance:none;box-sizing:border-box;color:#1a202c;background-color:#f8fafc;border:2px solid #e2e8f0;border-radius:6px;width:100%;padding:10px 12px;font-family:inherit;font-size:15px;transition:border-color .2s,background-color .2s}.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--destaque-color);background-color:#fff;outline:none}.form-select{cursor:pointer;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");background-position:right 12px center;background-repeat:no-repeat;background-size:16px;padding-right:40px}.form-textarea{resize:vertical;min-height:100px}.form-radio,.form-checkbox{appearance:none;font:inherit;color:#3182ce;cursor:pointer;background-color:#f8fafc;border:2px solid #cbd5e1;place-content:center;width:18px;height:18px;margin:0;transition:border-color .2s;display:grid}.form-radio{border-radius:50%}.form-checkbox{border-radius:4px}.form-radio:before{content:"";background-color:currentColor;border-radius:50%;width:8px;height:8px;transition:transform .12s ease-in-out;transform:scale(0)}.form-checkbox:before{content:"";clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%);background-color:currentColor;width:10px;height:10px;transition:transform .12s ease-in-out;transform:scale(0)}.form-radio:checked:before,.form-checkbox:checked:before{transform:scale(1)}.form-radio:checked,.form-checkbox:checked{border-color:var(--destaque-color)}.form-radio:focus,.form-checkbox:focus{outline:2px solid #ebf8ff}.form-button{appearance:none;background-color:var(--destaque-color);color:#fff;cursor:pointer;border:none;border-radius:6px;width:100%;padding:12px 24px;font-family:inherit;font-size:15px;font-weight:600;transition:background-color .2s}.form-button:hover,.form-button:active{background-color:var(--destaque-color)}.botao-close{appearance:none;color:#fff;cursor:pointer;background-color:var(--destaque-color);border:none;border-radius:6px;height:30px;padding:5px 12px;display:inline-block}.modal-backdrop{z-index:9000;background:#00000080;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:fixed;top:0;left:0}.modal-content{background:var(--cards-background);color:var(--text-color);border-radius:8px;width:95%;padding:20px}@media (width>=1024px){.modal-content{width:500px}}.radio-input input{display:none}.radio-input{--container_width:100%;color:#000;width:var(--container_width);background-color:#fff;border:1px solid #3534343a;border-radius:10px;align-items:center;display:flex;position:relative;overflow:hidden}.radio-input label{cursor:pointer;z-index:1;letter-spacing:-1px;justify-content:center;align-items:center;width:100%;padding:10px;font-size:14px;font-weight:600;display:flex}.selection{z-index:0;width:50%;height:100%;transition:all .15s;display:none;position:absolute;top:0;left:0}.radio-input label:has(input:checked){color:#fff}.radio-input label:has(input:checked)~.selection{background-color:var(--destaque-color);display:inline-block}.radio-input label:first-child:has(input:checked)~.selection{transform:translateX(calc(50% / 20%))}.radio-input label:nth-child(2):has(input:checked)~.selection{transform:translate(100%)}`,ln=class extends I{static properties={objeto_os:{type:Object},modal_aberto:{type:Boolean},objeto_tracert:{type:Object},ativo:{type:Object}};static get styles(){return o`${a(cn)}`}constructor(){super(),this.objeto_os={},this.modal_aberto=!1,this.objeto_tracert=[],this.ativo={}}firstUpdated(){}connectedCallback(){super.connectedCallback(),this.objeto_tracert=this.objeto_os.OS.conferencia_tecnica.tracert_adicional}_Alterar_Descricao_Tracert=e=>{let t=e.target.value===``?null:e.target.value;this.objeto_os.OS.conferencia_tecnica.observacao_tracert=t,this.objeto_os.salvar_os_localstorage()};_Fechar_Modal=()=>{this.modal_aberto=!1};_Deletar_Item=(e,t)=>{this.objeto_tracert=this.objeto_tracert.filter((e,n)=>n!==t),this.objeto_os.OS.conferencia_tecnica.tracert_adicional=this.objeto_tracert,this.objeto_os.salvar_os_localstorage(),this.objeto_tracert=this.objeto_os.OS.conferencia_tecnica.tracert_adicional};_Abrir_Modal_Editar=(e,t)=>{this.ativo=this.objeto_tracert[t],this.acao=!0,this.modal_aberto=!0};_Abrir_Modal_Novo=()=>{this.ativo={ativo:`empresa`,protocolo:`ipv4`,url:`google`,outra_url:null},this.acao=!1,this.modal_aberto=!0};_Alterar_visibilidade_outro=e=>{let t=e.target.value;this.ativo.url=t,this.requestUpdate()};_Salvar_data=(e,t)=>{let n=this.renderRoot?.querySelector(`#titulo input[name='tipo_teste_ativo']:checked`).value,r=this.renderRoot?.querySelector(`#destino`).value,i=this.renderRoot?.querySelector(`#outro-destino`)===null?null:this.renderRoot?.querySelector(`#outro-destino`).value,a=this.renderRoot?.querySelector(`#protocolo input[name="tipo_teste_ip"]:checked`).value;t?(this.ativo.ativo=n,this.ativo.protocolo=a,this.ativo.url=r,this.ativo.outra_url=i):(this.ativo.ativo=n,this.ativo.protocolo=a,this.ativo.url=r,this.ativo.outra_url=i,this.objeto_tracert.push(this.ativo),this.ativo={}),this.objeto_os.salvar_os_localstorage(),this._Fechar_Modal()};render(){return D`
            <!--Retorno renderizado-->
            <br>
            <h2>Relatório de Tracert</h2>
            <div class="form-group">
                <label for="message" class="form-label">Relatório:</label>
                <textarea
                    @dblclick="${e=>Q(e.target,`Tracert`)}"
                    @change="${this._Alterar_Descricao_Tracert}"
                    .value="${this.objeto_os.OS.conferencia_tecnica.observacao_tracert}"
                    style="border-left: 5px solid #ff0000;"
                    id="message" 
                    name="message" 
                    rows="5" class="form-textarea"></textarea>
            </div>
            <div class="form-group" style="margin-top: 10px;">
                <button 
                    @click="${this._Abrir_Modal_Novo}"
                    type="button" class="form-button">Add Tracert Manual</button>
            </div>
            <br>
            <div class="container-tracert">
                ${this.objeto_tracert.map((e,t)=>D`
                <div class="container-tracert-item">
                    
                    <div @click="${e=>this._Abrir_Modal_Editar(e,t)}">
                        <p>
                            <span class="destaque"> Tracert:</span> Ativo - ${e.ativo} <span class="destaque">${e.protocolo}</span>
                        </p>
                        <br>
                        <p>
                            <span class="destaque"> Destino:</span> ${e.url}
                        </p>
                    </div>
                    <button
                        @click="${e=>this._Deletar_Item(e,t)}"
                        type="button" class="botao-close">–</button>
                </div>
                <hr>
                    `)}
                

            </div>

            <!--Modal de Configuracao do Ping-->

            ${this.modal_aberto?D`
                <div
                    class="modal-backdrop"
                    @click=${this._Fechar_Modal}
                >
                    <div
                        class="modal-content"
                        
                        @click=${e=>e.stopPropagation()}
                    >
                        <h3>Editar Tracert</h3>
                        <br>
                        <br>
                        <div class="form-group">
                            <label for="cars" class="form-label">Ativo Testado:</label>

                            <div id="titulo" class="radio-input">
                                <label>
                                    <input ?checked="${this.ativo.ativo===`empresa`}" value="empresa" name="tipo_teste_ativo" id="value-1" type="radio" />
                                    <span>E m p r e s a</span>
                                </label>
                                <label>
                                    <input ?checked="${this.ativo.ativo===`cliente`}" value="cliente" name="tipo_teste_ativo" id="value-2" type="radio" />
                                    <span>C l i e n t e</span>
                                </label>
                                <span class="selection"></span>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="destino" class="form-label">Selecione o destino:</label>
                            <select 
                                @change="${this._Alterar_visibilidade_outro}"
                                id="destino" name="destino" class="form-select">
                                <option ?selected="${this.ativo.url===`google`}" value="google">Google</option>
                                <option ?selected="${this.ativo.url===`youtube`}" value="youtube">Youtube</option>
                                <option ?selected="${this.ativo.url===`facebook`}" value="facebook">Facebook</option>
                                <option ?selected="${this.ativo.url===`instagram`}" value="instagram">Instagram</option>
                                <option ?selected="${this.ativo.url===`outro`}" value="outro">Outro</option>
                            </select>
                        </div>
                        
                        ${this.ativo.url===`outro`?D`
                        <div class="form-group">
                            <label for="outro-destino" class="form-label">Em caso de "Outro"</label>
                            <input type="text" id="outro-destino" name="outro-destino" .value="${this.ativo.outra_url}" class="form-input">
                        </div>
                            `:``}
                        

                        <div class="form-group">
                            <label for="fname" class="form-label">Selecione o Protocolo</label>
                            <div id="protocolo" class="radio-input">
                                <label>
                                    <input ?checked="${this.ativo.protocolo===`ipv4`}" value="ipv4" name="tipo_teste_ip" id="value-1" type="radio" />
                                    <span>I P v 4</span>
                                </label>
                                <label>
                                    <input ?checked="${this.ativo.protocolo===`ipv6`}" value="ipv6" name="tipo_teste_ip" id="value-2" type="radio" />
                                    <span>I P v 6</span>
                                </label>
                                <span class="selection"></span>
                            </div>
                        </div>
                        
                        <div class="form-group" style="margin-top: 10px; display: flex; flex-direction: row; gap:.5rem">
                            <button 
                                @click="${e=>this._Salvar_data(e,this.acao)}"
                                style="background-color: var(--btn-background-color); color: var(--text-color);"
                                type="button" class="form-button")">Salvar</button>
                            <button 
                                @click="${this._Fechar_Modal}"
                                type="button" class="form-button")">Fechar</button>
                        </div>

                    </div>
                </div>
            `:``}
            
        `}};customElements.define(`componente-tracert`,ln);var un=`:host{box-sizing:border-box;color:var(--text-color);display:block}*,:before,:after{box-sizing:inherit;margin:0;padding:0}h2{color:var(--text-color);text-align:center}p{font-size:var(--paragraph);text-align:left;font-weight:100}.form-container{max-width:auto;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.form-group{flex-direction:column;margin-bottom:20px;display:flex}.form-group-row{align-items:center;gap:8px;margin-bottom:15px;display:flex}.form-label{color:var(--btn-text-background-color);margin-bottom:6px;font-size:17px;font-weight:600}.form-label-inline{color:#333;cursor:pointer;font-size:14px}.container-velocidade{flex-direction:column;gap:.5rem;display:flex}.container-velocidade-item{flex-direction:row;justify-content:space-between;display:flex}.destaque{background-color:var(--destaque-color);border-radius:.5rem;padding:.2rem}.form-input,.form-select,.form-textarea{appearance:none;box-sizing:border-box;color:#1a202c;background-color:#f8fafc;border:2px solid #e2e8f0;border-radius:6px;width:100%;padding:10px 12px;font-family:inherit;font-size:15px;transition:border-color .2s,background-color .2s}.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--destaque-color);background-color:#fff;outline:none}.form-select{cursor:pointer;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");background-position:right 12px center;background-repeat:no-repeat;background-size:16px;padding-right:40px}.form-textarea{resize:vertical;min-height:100px}.form-radio,.form-checkbox{appearance:none;font:inherit;color:#3182ce;cursor:pointer;background-color:#f8fafc;border:2px solid #cbd5e1;place-content:center;width:18px;height:18px;margin:0;transition:border-color .2s;display:grid}.form-radio{border-radius:50%}.form-checkbox{border-radius:4px}.form-radio:before{content:"";background-color:currentColor;border-radius:50%;width:8px;height:8px;transition:transform .12s ease-in-out;transform:scale(0)}.form-checkbox:before{content:"";clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%);background-color:currentColor;width:10px;height:10px;transition:transform .12s ease-in-out;transform:scale(0)}.form-radio:checked:before,.form-checkbox:checked:before{transform:scale(1)}.form-radio:checked,.form-checkbox:checked{border-color:var(--destaque-color)}.form-radio:focus,.form-checkbox:focus{outline:2px solid #ebf8ff}.form-button{appearance:none;background-color:var(--destaque-color);color:#fff;cursor:pointer;border:none;border-radius:6px;width:100%;padding:12px 24px;font-family:inherit;font-size:15px;font-weight:600;transition:background-color .2s}.form-button:hover,.form-button:active{background-color:var(--destaque-color)}.botao-close{appearance:none;color:#fff;cursor:pointer;background-color:var(--destaque-color);border:none;border-radius:6px;height:30px;padding:5px 12px;display:inline-block}.modal-backdrop{z-index:9000;background:#00000080;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:fixed;top:0;left:0}.modal-content{background:var(--cards-background);color:var(--text-color);border-radius:8px;width:95%;padding:20px}@media (width>=1024px){.modal-content{width:500px}}.radio-input input{display:none}.radio-input{--container_width:100%;color:#000;width:var(--container_width);background-color:#fff;border:1px solid #3534343a;border-radius:10px;align-items:center;display:flex;position:relative;overflow:hidden}.radio-input label{cursor:pointer;z-index:1;letter-spacing:-1px;justify-content:center;align-items:center;width:100%;padding:10px;font-size:14px;font-weight:600;display:flex}.selection{z-index:0;width:50%;height:100%;transition:all .15s;display:none;position:absolute;top:0;left:0}.radio-input label:has(input:checked){color:#fff}.radio-input label:has(input:checked)~.selection{background-color:var(--destaque-color);display:inline-block}.radio-input label:first-child:has(input:checked)~.selection{transform:translateX(calc(50% / 20%))}.radio-input label:nth-child(2):has(input:checked)~.selection{transform:translate(100%)}`,dn=class extends I{static properties={objeto_os:{type:Object},modal_aberto:{type:Boolean},objeto_velocidade:{type:Object},ativo:{type:Object}};static get styles(){return o`${a(un)}`}constructor(){super(),this.objeto_os={},this.modal_aberto=!1,this.objeto_velocidade=[],this.ativo={}}firstUpdated(){}connectedCallback(){super.connectedCallback(),this.objeto_velocidade=this.objeto_os.OS.conferencia_tecnica.velocidade_adicional}_Alterar_Descricao=e=>{let t=e.target.value===``?null:e.target.value;this.objeto_os.OS.conferencia_tecnica.observacao_velocidade=t,this.objeto_os.salvar_os_localstorage()};_Fechar_Modal=()=>{this.modal_aberto=!1};_Abrir_Modal_Novo=e=>{this.ativo={ativo:`notebook`,dono:`empresa`,tipo:`cabo`,site:`SpeedTest`,jitter:0,down:null,up:null,ping:null,url:null},this.acao=!1,this.modal_aberto=!0};_Abrir_Modal_Editar=(e,t)=>{this.ativo=this.objeto_velocidade[t],this.acao=!0,this.modal_aberto=!0};_Deletar_Item=(e,t)=>{this.objeto_velocidade=this.objeto_velocidade.filter((e,n)=>n!==t),this.objeto_os.OS.conferencia_tecnica.velocidade_adicional=this.objeto_velocidade,this.objeto_os.salvar_os_localstorage(),this.objeto_velocidade=this.objeto_os.OS.conferencia_tecnica.velocidade_adicional};_Salvar_data=(e,t)=>{let n=this.renderRoot?.querySelector(`#responsabilidade input[name='tipo_teste_ativo']:checked`).value,r=this.renderRoot?.querySelector(`#teste input[name='tipo_teste']:checked`).value,i=this.renderRoot?.querySelector(`#destino`).value,a=this.renderRoot?.querySelector(`#ativo`).value,o=parseInt(this.renderRoot?.querySelector(`#down`).value),s=parseInt(this.renderRoot?.querySelector(`#up`).value),c=parseInt(this.renderRoot?.querySelector(`#ping`).value),l=parseFloat(this.renderRoot?.querySelector(`#jitter`).value);this.ativo.ativo=a,this.ativo.dono=n,this.ativo.tipo=r,this.ativo.site=i,this.ativo.jitter=l,this.ativo.down=o,this.ativo.up=s,this.ativo.ping=c,this.ativo.url=null,t||(this.objeto_velocidade.push(this.ativo),this.ativo={}),this.objeto_os.salvar_os_localstorage(),this._Fechar_Modal()};render(){return D`
            <!--Retorno renderizado-->
            <br>
            <h2>Relatório de Velocidade</h2>
            <div class="form-group">
                <label for="message" class="form-label">Relatório:</label>
                <textarea
                    @dblclick="${e=>Q(e.target,`Velocidade`)}"
                    @change="${this._Alterar_Descricao}"
                    .value="${this.objeto_os.OS.conferencia_tecnica.observacao_velocidade}"
                    style="border-left: 5px solid #ff0000;"
                    id="message" 
                    name="message" 
                    rows="5" class="form-textarea"></textarea>
            </div>
            <div class="form-group" style="margin-top: 10px;">
                <button 
                    @click="${this._Abrir_Modal_Novo}"
                    type="button" class="form-button">Add Velocidade Manual</button>
            </div>
            <br>
            <div class="container-velocidade">
                ${this.objeto_velocidade.map((e,t)=>D`
                <div
                    class="container-velocidade-item">
                    <div 
                        @click="${e=>this._Abrir_Modal_Editar(e,t)}"
                        style="display:flex; gap:0.4rem; Flex-direction:column">
                        <p>Velocidade: ${e.ativo} - ${e.dono} (${e.tipo})</p>
                        <p>Down: <span class="destaque">${e.down}</span> UP: <span class="destaque">${e.up}</span> Ping: ${e.ping}</p>
                    </div>
                    <button
                        @click="${e=>{this._Deletar_Item(e,t)}}"
                        type="button" class="botao-close">–</button>
                </div>
                <hr>
                `)}
                
            </div>

            <!--Modal de Configuracao do Ping-->

            ${this.modal_aberto?D`
                <div
                    class="modal-backdrop"
                    @click=${this._Fechar_Modal}
                >
                    <div
                        class="modal-content"
                        
                        @click=${e=>e.stopPropagation()}
                    >
                        <h3>Editar Velocidade</h3>
                        <br>
                        <br>
                        <div class="form-group">
                            <label for="cars" class="form-label">Ativo Testado:</label>

                            <div style="display:flex;gap:.4rem">

                                <div id="responsabilidade" class="radio-input">
                                    <label>
                                        <input ?checked="${this.ativo.dono===`empresa`}" value="empresa" name="tipo_teste_ativo" id="value-1" type="radio" />
                                        <span>E m p r e s a</span>
                                    </label>
                                    <label>
                                        <input ?checked="${this.ativo.dono===`cliente`}" value="cliente" name="tipo_teste_ativo" id="value-2" type="radio" />
                                        <span>C l i e n t e</span>
                                    </label>
                                    <span class="selection"></span>
                                </div>

                                <div id="teste" class="radio-input">
                                    <label>
                                        <input ?checked="${this.ativo.tipo===`wifi`}" value="wifi" name="tipo_teste" id="value-1" type="radio" />
                                        <span>W i F i</span>
                                    </label>
                                    <label>
                                        <input ?checked="${this.ativo.tipo===`cabo`}" value="cabo" name="tipo_teste" id="value-2" type="radio" />
                                        <span>C a b o</span>
                                    </label>
                                    <span class="selection"></span>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="destino" class="form-label">Site do Teste</label>
                            <input type="text" id="destino" name="destino" .value="${this.ativo.site}" class="form-input">
                        </div>

                        <div class="form-group">
                            <label for="ativo" class="form-label">Selecione o Ativo Testado:</label>
                            <select 
                                @change=""
                                id="ativo" name="ativo" class="form-select">
                                <option ?selected="${this.ativo.ativo===`celular`}" value="celular">Celular</option>
                                <option ?selected="${this.ativo.ativo===`notebook`}" value="notebook">Notebook</option>
                                <option ?selected="${this.ativo.ativo===`computador`}" value="computador">Computador</option>
                                <option ?selected="${this.ativo.ativo===`tv`}" value="tv">TV</option>
                                <option ?selected="${this.ativo.ativo===`tvbox`}" value="tvbox">TVBox</option>
                                <option ?selected="${this.ativo.ativo===`video game`}" value="video game">Video Game</option>
                            </select>
                        </div>                      

                        <div style="display:flex; gap:.5rem">
                            <div class="form-group">
                                <label for="down" class="form-label">Download</label>
                                <input type="number" id="down" name="down" .value="${this.ativo.down}" class="form-input">
                            </div>
                            <div class="form-group">
                                <label for="up" class="form-label">Upload</label>
                                <input type="number" id="up" name="up" .value="${this.ativo.up}" class="form-input">
                            </div>
                            <div class="form-group">
                                <label for="ping" class="form-label">Ping</label>
                                <input type="number" id="ping" name="ping" .value="${this.ativo.ping}" class="form-input">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="jitter" class="form-label">Jitter</label>
                            <input type="number" id="jitter" name="jitter" .value="${this.ativo.jitter}" class="form-input">
                        </div>
                        
                        
                        <div class="form-group" style="margin-top: 10px; display: flex; flex-direction: row; gap:.5rem">
                            <button 
                                @click="${e=>this._Salvar_data(e,this.acao)}"
                                style="background-color: var(--btn-background-color); color: var(--text-color);"
                                type="button" class="form-button")">Salvar</button>
                            <button 
                                @click="${this._Fechar_Modal}"
                                type="button" class="form-button")">Fechar</button>
                        </div>

                    </div>
                </div>
            `:``}
        `}};customElements.define(`componente-velocidade`,dn);var fn=`:host{box-sizing:border-box;color:var(--text-color);display:block}*,:before,:after{box-sizing:inherit;margin:0;padding:0}h2{color:var(--text-color);text-align:center}p{font-size:var(--paragraph);text-align:left;font-weight:100}.container-equipamentos{flex-direction:column;gap:.5rem;display:flex}.container-equipamentos-item{flex-direction:row;justify-content:space-between;display:flex}.destaque-troca{background-color:var(--destaque-color);border-radius:.5rem;padding:.2rem}.destaque-local{background-color:#3182ce;border-radius:.5rem;padding:.2rem}.form-container{max-width:auto;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.form-group{flex-direction:column;margin-bottom:20px;display:flex}.form-group-row{align-items:center;gap:8px;margin-bottom:15px;display:flex}.form-label{color:var(--btn-text-background-color);margin-bottom:6px;font-size:17px;font-weight:600}.form-label-inline{color:#333;cursor:pointer;font-size:14px}.container-velocidade{flex-direction:column;gap:.5rem;display:flex}.container-velocidade-item{flex-direction:row;justify-content:space-between;display:flex}.destaque{background-color:var(--destaque-color);border-radius:.5rem;padding:.2rem}.form-input,.form-select,.form-textarea{appearance:none;box-sizing:border-box;color:#1a202c;background-color:#f8fafc;border:2px solid #e2e8f0;border-radius:6px;width:100%;padding:10px 12px;font-family:inherit;font-size:15px;transition:border-color .2s,background-color .2s}.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--destaque-color);background-color:#fff;outline:none}.form-select{cursor:pointer;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");background-position:right 12px center;background-repeat:no-repeat;background-size:16px;padding-right:40px}.form-textarea{resize:vertical;min-height:100px}.form-radio,.form-checkbox{appearance:none;font:inherit;color:#3182ce;cursor:pointer;background-color:#f8fafc;border:2px solid #cbd5e1;place-content:center;width:18px;height:18px;margin:0;transition:border-color .2s;display:grid}.form-radio{border-radius:50%}.form-checkbox{border-radius:4px}.form-radio:before{content:"";background-color:currentColor;border-radius:50%;width:8px;height:8px;transition:transform .12s ease-in-out;transform:scale(0)}.form-checkbox:before{content:"";clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%);background-color:currentColor;width:10px;height:10px;transition:transform .12s ease-in-out;transform:scale(0)}.form-radio:checked:before,.form-checkbox:checked:before{transform:scale(1)}.form-radio:checked,.form-checkbox:checked{border-color:var(--destaque-color)}.form-radio:focus,.form-checkbox:focus{outline:2px solid #ebf8ff}.form-button{appearance:none;background-color:var(--destaque-color);color:#fff;cursor:pointer;border:none;border-radius:6px;width:100%;padding:12px 24px;font-family:inherit;font-size:15px;font-weight:600;transition:background-color .2s}.form-button:hover,.form-button:active{background-color:var(--destaque-color)}.botao-close{appearance:none;color:#fff;cursor:pointer;background-color:var(--destaque-color);border:none;border-radius:6px;height:30px;padding:5px 12px;display:inline-block}.modal-backdrop{z-index:9000;background:#00000080;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:fixed;top:0;left:0}.modal-content{background:var(--cards-background);color:var(--text-color);border-radius:8px;width:95%;padding:20px}@media (width>=1024px){.modal-content{width:500px}}.radio-input input{display:none}.radio-input{--container_width:100%;color:#000;width:var(--container_width);background-color:#fff;border:1px solid #3534343a;border-radius:10px;align-items:center;display:flex;position:relative;overflow:hidden}.radio-input label{cursor:pointer;z-index:1;letter-spacing:-1px;justify-content:center;align-items:center;width:100%;padding:10px;font-size:14px;font-weight:600;display:flex}.selection{z-index:0;width:50%;height:100%;transition:all .15s;display:none;position:absolute;top:0;left:0}.radio-input label:has(input:checked){color:#fff}.radio-input label:has(input:checked)~.selection{background-color:var(--destaque-color);display:inline-block}.radio-input label:first-child:has(input:checked)~.selection{transform:translateX(calc(50% / 20%))}.radio-input label:nth-child(2):has(input:checked)~.selection{transform:translate(100%)}`,pn=class extends I{static properties={objeto_os:{type:Object},modal_aberto:{type:Boolean},objeto_equipamentos:{type:Object},ativo:{type:Object},troca:{type:Boolean}};static get styles(){return o`${a(fn)}`}constructor(){super(),this.objeto_os={},this.modal_aberto=!1,this.troca=!1,this.objeto_equipamentos=[],this.ativo={}}firstUpdated(){}connectedCallback(){super.connectedCallback(),this.objeto_equipamentos=this.objeto_os.OS.conferencia_tecnica.equipamentos_local.ativos,this.troca=this.objeto_os.OS.conferencia_tecnica.equipamentos_local.troca}_Check_Troca=e=>{let t=parseInt(e.target.value)===1;this.troca=t,this.objeto_os.OS.conferencia_tecnica.equipamentos_local.troca=t,this.objeto_os.salvar_os_localstorage()};_Selecao_Motivo=e=>{let t=e.target.value;this.objeto_os.OS.conferencia_tecnica.equipamentos_local.motivo_troca=t,this.objeto_os.salvar_os_localstorage()};_Alterar_Observacao=e=>{let t=e.target.value===``?null:e.target.value;this.objeto_os.OS.conferencia_tecnica.equipamentos_local.observacao=t,this.objeto_os.salvar_os_localstorage()};_Fechar_Modal=()=>{this.modal_aberto=!1};_Abrir_Modal_Novo=e=>{this.ativo={ativo:`ONT`,mac:``,inserido:!1},this.acao=!1,this.modal_aberto=!0};_Abrir_Modal_Editar=(e,t)=>{this.ativo=this.objeto_equipamentos[t],this.acao=!0,this.modal_aberto=!0};_Salvar_data=(e,t)=>{let n=this.renderRoot?.querySelector(`#troca input[name='ativo-troca']:checked`).value,r=this.renderRoot?.querySelector(`#mac_ativo`).value,i=this.renderRoot?.querySelector(`#ativo-local`).value;this.ativo.ativo=i,this.ativo.mac=r,this.ativo.inserido=n===`true`,t||(this.objeto_equipamentos.push(this.ativo),this.ativo={}),this.objeto_os.salvar_os_localstorage(),this._Fechar_Modal()};_Deletar_Item=(e,t)=>{this.objeto_equipamentos=this.objeto_equipamentos.filter((e,n)=>n!==t),this.objeto_os.OS.conferencia_tecnica.equipamentos_local.ativos=this.objeto_equipamentos,this.objeto_os.salvar_os_localstorage(),this.objeto_equipamentos=this.objeto_os.OS.conferencia_tecnica.equipamentos_local.ativos};_Alterar_Cod_Conexao=e=>{let t=e.target.value===null?null:e.target.value;this.objeto_os.OS.conferencia_tecnica.equipamentos_local.cod_conexao=t,this.objeto_os.salvar_os_localstorage()};_Alterar_pppoe=e=>{let t=e.target.value===null?null:e.target.value;this.objeto_os.OS.conferencia_tecnica.equipamentos_local.pppoe=t,this.objeto_os.salvar_os_localstorage()};render(){return D`
            <!--Retorno renderizado-->
            <br>
            <h2>Troca de Equipamento</h2>

            <p style="margin-bottom: 1rem;">Houve Troca de Equipamento?</p>
            
            <div 
                @change="${this._Check_Troca}"
                id="teste" class="radio-input">
                <label>
                    <input ?checked="${this.objeto_os.OS.conferencia_tecnica.equipamentos_local.troca===!0}" value="1" name="checagem_troca" id="value-1" type="radio" />
                    <span>S i m</span>
                </label>
                <label>
                    <input ?checked="${this.objeto_os.OS.conferencia_tecnica.equipamentos_local.troca===!1}" value="0" name="checagem_troca" id="value-2" type="radio" />
                    <span>N ã o</span>
                </label>
                <span class="selection"></span>
            </div>

            ${this.troca?D`
            <br>
            <div style="display:flex; gap:1rem;">
                <div class="form-group">
                    <label for="cod_conexao" class="form-label">Código Conexão:</label>
                    <input 
                        @change="${this._Alterar_Cod_Conexao}"
                        type="number" id="cod_conexao" name="cod_conexao" .value="${this.objeto_os.OS.conferencia_tecnica.equipamentos_local.cod_conexao}" class="form-input">
                </div>
                <div class="form-group">
                    <label for="pppoe_cliente" class="form-label">PPPoE:</label>
                    <input 
                        @change="${this._Alterar_pppoe}"
                        type="text" id="pppoe_cliente" name="pppoe_cliente" .value="${this.objeto_os.OS.conferencia_tecnica.equipamentos_local.pppoe}" class="form-input">
                </div>
            </div>
            <div class="form-group">
                <label for="ativo" class="form-label">Selecione Motivo da Troca:</label>
                <select 
                    @change="${this._Selecao_Motivo}"
                    id="ativo" name="ativo" class="form-select">
                    <option ?selected="${this.objeto_os.OS.conferencia_tecnica.equipamentos_local.motivo_troca===`solicitacao_cliente`}" value="solicitacao_cliente">Solicitação do Cliente</option>
                    <option ?selected="${this.objeto_os.OS.conferencia_tecnica.equipamentos_local.motivo_troca===`mau_funcionamento`}" value="mau_funcionamento">Mau Funcionamento</option>
                    <option ?selected="${this.objeto_os.OS.conferencia_tecnica.equipamentos_local.motivo_troca===`efeito_placebo`}" value="efeito_placebo">Efeito Placebo</option>
                    <option ?selected="${this.objeto_os.OS.conferencia_tecnica.equipamentos_local.motivo_troca===`necessidade_tecnica`}" value="necessidade_tecnica">Necessidade Técnica</option>
                    <option ?selected="${this.objeto_os.OS.conferencia_tecnica.equipamentos_local.motivo_troca===`solicitacao_sup_interno`}" value="solicitacao_sup_interno">Solicitação Sup. Interno</option>
                </select>
            </div>

            <div class="form-group">
                <label for="message" class="form-label">Relatório:</label>
                <textarea
                    @dblclick="${e=>Q(e.target,`Troca de Equipamento`)}"
                    @change="${this._Alterar_Observacao}"
                    .value="${this.objeto_os.OS.conferencia_tecnica.equipamentos_local.observacao}"
                    style="border-left: 5px solid #ff0000;"
                    id="message" 
                    name="message" 
                    rows="3" class="form-textarea"></textarea>
            </div>
            
                `:``}
            <div class="form-group" style="margin-top: 10px;">
                <button 
                    @click="${this._Abrir_Modal_Novo}"
                    type="button" class="form-button">Add Equipamentos</button>
            </div>
            <br>

            <div class="container-equipamentos">

                ${this.objeto_equipamentos.map((e,t)=>D`
                <div
                    class="container-equipamentos-item">
                    <div 
                        @click="${e=>this._Abrir_Modal_Editar(e,t)}"
                        style="display:flex; gap:0.4rem; Flex-direction:column">
                        <p><span class="${e.inserido===!0?`destaque-local`:`destaque-troca`}">${e.inserido===!0?`LOCAL`:`TROCA`}</span> ${e.ativo} - ${e.mac}</p>
                    </div>
                    <button
                        @click="${e=>this._Deletar_Item(e,t)}"
                        type="button" class="botao-close">–</button>
                </div>
                <hr>
                `)}
            </div>

            <!--Modal de Configuracao do Ping-->

            ${this.modal_aberto?D`
                <div
                    class="modal-backdrop"
                    @click=${this._Fechar_Modal}
                >
                    <div
                        class="modal-content"
                        
                        @click=${e=>e.stopPropagation()}
                    >
                        <h3>Editar Equipamento - Troca</h3>
                        <br>
                        <br>
                        <div @change="" class="radio-input" id="troca">
                            <label>
                                <input ?checked="${this.ativo.inserido===!1}" value="false" name="ativo-troca" id="value-1" type="radio" />
                                <span>R e t i r a d o</span>
                            </label>
                            <label>
                                <input ?checked="${this.ativo.inserido===!0}" value="true" name="ativo-troca" id="value-2" type="radio" />
                                <span>I n s e r i d o</span>
                            </label>
                            <span class="selection"></span>
                        </div>
                        <br>
                        <div class="form-group">
                            <label for="mac_ativo" class="form-label">MAC do Equipamento</label>
                            <input type="text" id="mac_ativo" name="mac_ativo" .value="${this.ativo.mac}" class="form-input">
                        </div>

                        <div class="form-group">
                            <label for="ativo-local" class="form-label">Selecione o Ativo Testado:</label>
                            <select 
                                @change=""
                                id="ativo-local" name="ativo-local" class="form-select">
                                <option ?selected="${this.ativo.ativo===`ONT`}" value="ONT">ONT</option>
                                <option ?selected="${this.ativo.ativo===`Router`}" value="Router">Router</option>
                                <option ?selected="${this.ativo.ativo===`ONU`}" value="ONU">ONU</option>
                                <option ?selected="${this.ativo.ativo===`Switch Giga`}" value="Switch Giga">Switch Giga</option>
                                <option ?selected="${this.ativo.ativo===`Switch Fast`}" value="Switch Fast">Switch Fast</option>
                            </select>
                        </div>                      
                       
                        
                        <div class="form-group" style="margin-top: 10px; display: flex; flex-direction: row; gap:.5rem">
                            <button 
                                @click="${e=>this._Salvar_data(e,this.acao)}"
                                style="background-color: var(--btn-background-color); color: var(--text-color);"
                                type="button" class="form-button")">Salvar</button>
                            <button 
                                @click="${this._Fechar_Modal}"
                                type="button" class="form-button")">Fechar</button>
                        </div>

                    </div>
                </div>
            `:``}
        `}};customElements.define(`componente-equipamentos-local`,pn);var mn=`:host{box-sizing:border-box;color:var(--text-color);display:block}*,:before,:after{box-sizing:inherit;margin:0;padding:0}h2{color:var(--text-color);text-align:center}p{font-size:var(--paragraph);text-align:left;font-weight:100}.form-container{max-width:auto;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.form-group{flex-direction:column;margin-bottom:20px;display:flex}.form-group-row{align-items:center;gap:8px;margin-bottom:15px;display:flex}.form-label{color:var(--btn-text-background-color);margin-bottom:6px;font-size:17px;font-weight:600}.form-label-inline{color:#333;cursor:pointer;font-size:14px}.container-gateways{flex-direction:column;gap:.5rem;display:flex}.container-item-gateway{flex-direction:row;justify-content:space-between;gap:.5rem;display:flex}.container-gateway{background-color:var(--cards-background);border-radius:.5rem;flex-direction:row;gap:.5rem;padding:.5rem;display:flex}.container-velocidade-item{flex-direction:row;justify-content:space-between;display:flex}.destaque{background-color:var(--destaque-color);border-radius:.5rem;padding:.2rem}.form-input,.form-select,.form-textarea{appearance:none;box-sizing:border-box;color:#1a202c;background-color:#f8fafc;border:2px solid #e2e8f0;border-radius:6px;width:100%;padding:10px 12px;font-family:inherit;font-size:15px;transition:border-color .2s,background-color .2s}.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--destaque-color);background-color:#fff;outline:none}.form-select{cursor:pointer;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");background-position:right 12px center;background-repeat:no-repeat;background-size:16px;padding-right:40px}.form-textarea{resize:vertical;min-height:100px}.form-button{appearance:none;background-color:var(--destaque-color);color:#fff;cursor:pointer;border:none;border-radius:6px;width:100%;padding:12px 24px;font-family:inherit;font-size:15px;font-weight:600;transition:background-color .2s}.form-button:hover,.form-button:active{background-color:var(--destaque-color)}.botao-close{appearance:none;color:#fff;cursor:pointer;background-color:var(--destaque-color);border:none;border-radius:6px;height:30px;padding:5px 12px;display:inline-block}.modal-backdrop{z-index:9000;background:#00000080;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:fixed;top:0;left:0}.modal-content{background:var(--cards-background);color:var(--text-color);border-radius:8px;width:95%;padding:20px}.container_scroll{box-sizing:border-box;scrollbar-width:thin;width:100%;max-height:600px;padding:16px;overflow:hidden auto}.container_scroll::-webkit-scrollbar{width:6px}.container_scroll::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.container_scroll::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:4px}.container_scroll::-webkit-scrollbar-thumb:hover{background:#94a3b8}@media (width>=1024px){.modal-content{width:500px}}.form-label-inline{color:var(--text-color)}.form-radio,.form-checkbox{appearance:none;font:inherit;color:var(--destaque-color);cursor:pointer;background-color:#f8fafc;border:2px solid #cbd5e1;place-content:center;width:18px;height:18px;margin:0;transition:border-color .2s;display:grid}.form-radio{border-radius:50%}.form-checkbox{border-radius:4px}.form-radio:before{content:"";background-color:currentColor;border-radius:50%;width:8px;height:8px;transition:transform .12s ease-in-out;transform:scale(0)}.form-checkbox:before{content:"";clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%);background-color:currentColor;width:10px;height:10px;transition:transform .12s ease-in-out;transform:scale(0)}.form-radio:checked:before,.form-checkbox:checked:before{transform:scale(1)}.form-radio:checked,.form-checkbox:checked{border-color:var(--destaque-color)}.form-radio:focus,.form-checkbox:focus{outline:2px solid #ebf8ff}.radio-input input{display:none}.radio-input{--container_width:100%;color:#000;width:var(--container_width);background-color:#fff;border:1px solid #3534343a;border-radius:10px;align-items:center;display:flex;position:relative;overflow:hidden}.radio-input label{cursor:pointer;z-index:1;letter-spacing:-1px;justify-content:center;align-items:center;width:100%;padding:10px;font-size:14px;font-weight:600;display:flex}.selection{z-index:0;width:50%;height:100%;transition:all .15s;display:none;position:absolute;top:0;left:0}.radio-input label:has(input:checked){color:#fff}.radio-input label:has(input:checked)~.selection{background-color:var(--destaque-color);display:inline-block}.radio-input label:first-child:has(input:checked)~.selection{transform:translateX(calc(50% / 20%))}.radio-input label:nth-child(2):has(input:checked)~.selection{transform:translate(100%)}.toggle-switch{cursor:pointer;width:40px;height:20px;display:inline-block;position:relative}.toggle-switch input[type=checkbox]{display:none}.toggle-switch-background{background-color:#ddd;border-radius:20px;width:100%;height:100%;transition:background-color .3s ease-in-out;position:absolute;top:0;left:0;box-shadow:inset 0 0 0 2px #ccc}.toggle-switch-handle{background-color:#fff;border-radius:50%;width:20px;height:20px;transition:transform .3s ease-in-out;position:absolute;top:0;left:0;box-shadow:0 2px 5px #0003}.toggle-switch:before{content:"";color:#aaa;text-shadow:1px 1px #fff;font-size:12px;font-weight:700;transition:color .3s ease-in-out;position:absolute;top:-25px;right:-35px}.toggle-switch input[type=checkbox]:checked+.toggle-switch-handle{box-shadow:0 2px 5px #0003, 0 0 0 3px var(--destaque-color);transform:translate(5px)}.toggle-switch input[type=checkbox]:checked+.toggle-switch-background{background-color:var(--destaque-color);box-shadow:inset 0 0 0 2px var(--destaque-color)}.toggle-switch input[type=checkbox]:checked+.toggle-switch:before{content:"On";color:var(--destaque-color);right:-5px}.toggle-switch input[type=checkbox]:checked+.toggle-switch-background .toggle-switch-handle{transform:translate(20px)}.container_item_utp{flex-direction:row;gap:1rem;display:flex}`,hn=class extends I{static properties={objeto_os:{type:Object},modal_aberto:{type:Boolean},objeto_gateway:{type:Object},ativo:{type:Object},adequado:{type:Boolean},outro_dns:{type:Boolean}};static get styles(){return o`${a(mn)}`}constructor(){super(),this.objeto_os={},this.modal_aberto=!1,this.adequado=!1,this.outro_dns=!1,this.objeto_gateway=[],this.ativo={}}firstUpdated(){}connectedCallback(){super.connectedCallback(),this.objeto_gateway=this.objeto_os.OS.conferencia_tecnica.conferencia_router}_Fechar_Modal=()=>{this.modal_aberto=!1};_Abrir_Modal_Novo=e=>{this.ativo={router:!0,empresa:!0,local:`Sala`,dns:`Google`,outro_dns:null,largura_banda:`20MHz`,upnp:!0,ipv6:!0,acesso_remoto:!0,ativos_anormal:{verdadeiro:!1,observacao:0},atividade:{verdadeiro:!1,observacao:0},firware_router:!0,local_equipamento:{adequado:!0,ciente:!1,observacao:null}},this.outro_dns=!1,this.adequado=!1,this.acao=!1,this.modal_aberto=!0};_Abrir_Modal_Editar=(e,t)=>{this.ativo=this.objeto_gateway[t],this.adequado=!this.ativo.local_equipamento.adequado,this.outro_dns=this.ativo.dns===`Outro`,this.acao=!0,this.modal_aberto=!0};_Alterar_Adequacao=e=>{let t=e.target.value!==`true`;this.adequado=t};_Altarar_DNS_Outros=e=>{let t=e.target.value;this.outro_dns=t===`Outro`};_Salvar_data=(e,t)=>{let n=this.renderRoot?.querySelector(`#ativo-local input[name='tipo-ativo']:checked`).value===`true`,r=this.renderRoot?.querySelector(`#ativo-empresa`).checked,i=this.renderRoot?.querySelector(`#local-do-ativo`).value,a=this.renderRoot?.querySelector(`#local-adequado input[name='adequado']:checked`).value===`true`,o=this.renderRoot?.querySelector(`#ciente input[name='ciente']:checked`)?this.renderRoot?.querySelector(`#ciente input[name='ciente']:checked`).value===`true`:!1,s=this.renderRoot?.querySelector(`#obs-local-adequado`)===null?null:this.renderRoot?.querySelector(`#obs-local-adequado`).value,c=this.renderRoot?.querySelector(`#tipo-dns`).value,l=this.renderRoot?.querySelector(`#outro-dns`)===null?null:this.renderRoot?.querySelector(`#outro-dns`).value,u=this.renderRoot?.querySelector(`#largura-banda input[name='largura-banda']:checked`).value,d=this.renderRoot?.querySelector(`#checagem-upnp`).checked,ee=this.renderRoot?.querySelector(`#checagem-ipv6`).checked,te=this.renderRoot?.querySelector(`#checagem-acesso-remoto`).checked,ne=this.renderRoot?.querySelector(`#checagem-firware`).checked,f=this.renderRoot?.querySelector(`#checagem-ativos-acima`).checked,p=this.renderRoot?.querySelector(`#checagem-atividade`).checked,re=parseInt(this.renderRoot?.querySelector(`#valor-ativos-acima`).value),ie=parseInt(this.renderRoot?.querySelector(`#valor-atividade`).value);this.ativo.router=n,this.ativo.empresa=r,this.ativo.local=i,this.ativo.dns=c,this.ativo.outro_dns=l,this.ativo.largura_banda=u,this.ativo.upnp=d,this.ativo.ipv6=ee,this.ativo.acesso_remoto=te,this.ativo.ativos_anormal.verdadeiro=f,this.ativo.ativos_anormal.observacao=re,this.ativo.atividade.verdadeiro=p,this.ativo.atividade.observacao=ie,this.ativo.firware_router=ne,this.ativo.local_equipamento.adequado=a,this.ativo.local_equipamento.ciente=o,this.ativo.local_equipamento.observacao=s,t||(this.objeto_gateway.push(this.ativo),this.ativo={}),this.objeto_os.salvar_os_localstorage(),this._Fechar_Modal()};_Deletar_Item=(e,t)=>{this.objeto_gateway=this.objeto_gateway.filter((e,n)=>n!==t),this.objeto_os.OS.conferencia_tecnica.conferencia_router=this.objeto_gateway,this.objeto_os.salvar_os_localstorage(),this.objeto_gateway=this.objeto_os.OS.conferencia_tecnica.conferencia_router};render(){return D`
            <!--Retorno renderizado-->
            <br>
            <h2>Gateways Testados</h2>
            <div class="form-group" style="margin-top: 10px;">
                <button 
                    @click="${this._Abrir_Modal_Novo}"
                    type="button" class="form-button">Add Equipamento</button>
            </div>
            <div class="container-gateways">
                ${this.objeto_gateway.map((e,t)=>D`
                <div 
                    class="container-gateway">
                    <div 
                        @click="${e=>this._Abrir_Modal_Editar(e,t)}"
                        style="flex:1">
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.933 143.933"><path d="M-336.297 790.77a6 6 0 0 1-.751-.092c-.312-.07-1.06-.697-1.272-1.067-.102-.179-.164-1.42-.206-4.158l-.06-3.903-.723-.203c-3.333-.94-6.136-3.435-7.442-6.628-.798-1.95-.75-1.095-.75-13.372v-11.143l.346-1.024c1.357-4.022 4.076-6.611 8.13-7.742.878-.245 1.225-.26 7.454-.3l6.534-.044.032-23.273.032-23.273.31-.798c.456-1.168.894-1.855 1.68-2.63 1.58-1.554 3.975-2.254 6.166-1.801 2.326.482 4.486 2.548 5.091 4.872.163.624.185 3.455.185 23.813v23.105h39.54l-.622-.693c-5.374-5.989-8.362-12.556-9.305-20.45-.122-1.016-.158-4.3-.158-14.094 0-12.72 0-12.772.251-13.252.152-.289.47-.617.796-.82.519-.322.642-.342 2.7-.449 2.664-.137 4.052-.283 6.372-.667 6.259-1.036 12.973-3.51 18.311-6.75 2.494-1.512 2.528-1.527 3.292-1.468.612.047.897.181 2.732 1.29 7.59 4.583 15.945 7.138 24.816 7.588 1.193.06 2.331.173 2.53.25.48.184.876.566 1.156 1.112.221.43.23.897.23 12.96 0 7.902-.048 12.997-.128 13.828-.756 7.794-3.904 14.926-9.101 20.621l-.907.994h3.131c3.603 0 4.563.101 6.193.654 3.852 1.306 6.74 4.683 7.43 8.689.108.62.134 3.594.103 11.498-.04 10.422-.047 10.679-.293 11.444-.626 1.95-1.432 3.382-2.623 4.662q-2.24 2.41-5.119 3.24l-.915.263-.06 3.899c-.041 2.644-.106 3.976-.201 4.14-.179.307-.746.834-1.087 1.009-.188.096-3.016.135-9.913.135-9.232 0-9.67-.01-10.097-.228-.552-.282-.806-.556-1.045-1.128-.153-.366-.185-1.078-.185-4.061v-3.618h-72.281v3.618c0 3.8-.042 4.14-.577 4.732-.584.646-.206.62-10.085.685-5.035.033-9.372.046-9.637.028zm15.841-6.702c0-1.909-.026-2.225-.19-2.288-.105-.04-3.082-.074-6.616-.074s-6.511.033-6.616.074c-.164.063-.19.38-.19 2.288v2.216h13.612zm94.809 0c0-1.909-.026-2.225-.19-2.288-.105-.04-3.082-.074-6.616-.074s-6.512.033-6.616.074c-.165.063-.19.38-.19 2.288v2.216h13.612zm4.424-7.16c2.021-.758 3.609-2.37 4.282-4.348.269-.791.269-.807.304-10.67.024-6.913-.006-10.123-.101-10.69-.212-1.269-.937-2.635-1.898-3.579-.873-.857-2.15-1.579-3.212-1.815-.391-.086-2.594-.131-6.365-.13l-5.766.006-1.575 1.167a58 58 0 0 1-12.671 7.082c-2.149.861-2.356.865-4.315.08-4.798-1.925-9.241-4.413-13.192-7.387l-1.241-.934h-35.204c-38.76 0-35.704-.062-37.31.748-1.057.533-2.236 1.717-2.807 2.818-.84 1.62-.82 1.31-.783 12.488.033 10.019.034 10.027.303 10.818.314.925 1.008 2.044 1.67 2.697.934.919 2.439 1.704 3.662 1.91.166.027 26.214.044 57.885.037l57.584-.015zm-107.763-8.938c-1.261-.33-2.005-.77-3.045-1.802-1.654-1.64-2.32-3.724-1.906-5.973.463-2.525 2.42-4.627 4.929-5.295.863-.23 2.534-.227 3.426.005 2.286.596 4.228 2.543 4.826 4.84.228.874.229 2.551.002 3.404a6.69 6.69 0 0 1-3.572 4.323c-1.61.773-3.03.925-4.66.498zm18.07 0c-.484-.127-1.162-.38-1.506-.563-.804-.428-2.341-1.965-2.768-2.768-.416-.781-.808-2.292-.808-3.108 0-3.069 2.121-5.848 5.06-6.63.864-.23 2.535-.228 3.428.004 1.106.289 2.095.876 3.03 1.8 1.368 1.353 1.975 2.817 1.973 4.757-.003 1.875-.63 3.406-1.926 4.705-1.746 1.748-4.144 2.415-6.483 1.803zm18.087.005c-.476-.125-1.045-.319-1.265-.432-4.204-2.156-5.107-7.63-1.796-10.893 1.32-1.3 2.845-1.924 4.713-1.926 1.935-.005 3.396.602 4.767 1.973s1.976 2.832 1.973 4.767c-.003 1.89-.624 3.41-1.93 4.715-1.726 1.726-4.155 2.4-6.462 1.796m18.8.01c-.745-.338-1.166-.965-1.229-1.83-.03-.412.012-.862.098-1.07.18-.433.971-1.174 1.353-1.267.15-.036 10.74-.051 23.534-.033l23.26.033.455.348c.52.397.906 1.145.906 1.76 0 .883-.712 1.873-1.549 2.153-.3.1-6.544.136-23.37.134-22.166-.005-22.98-.01-23.458-.228m-41.972-49.674c-.003-21.858-.012-22.818-.224-23.285-.774-1.705-3.139-1.79-4.018-.146l-.273.512-.031 22.86-.032 22.858h4.58zm61.976 13.526c.33-.16 3.881-3.633 10.93-10.691 9.537-9.55 10.454-10.5 10.583-10.991.404-1.532-.626-2.897-2.187-2.897-.521 0-.77.073-1.194.347-.295.19-4.704 4.527-9.8 9.637-5.094 5.11-9.295 9.291-9.334 9.291s-2.321-2.246-5.072-4.992-5.154-5.05-5.34-5.12c-.528-.198-1.426-.152-1.889.096-.63.338-1.103.993-1.174 1.627-.144 1.277-.44.913 6.091 7.469 4.034 4.05 6.141 6.08 6.466 6.231.625.293 1.308.29 1.92-.007zm-76.093-44.93c-1.208-.389-1.876-1.87-1.378-3.053.236-.562 1.774-1.968 3.163-2.893 2.058-1.37 4.105-2.225 6.605-2.758 1.625-.346 4.985-.374 6.693-.056 2.34.437 4.905 1.481 6.857 2.79 1.14.766 2.696 2.121 2.999 2.614a2.246 2.246 0 0 1-.996 3.242c-.983.447-1.724.24-2.874-.805-3.674-3.335-8.752-4.439-13.455-2.925-1.605.517-3.57 1.654-4.758 2.754-.331.307-.777.678-.99.825-.43.297-1.358.429-1.866.265m30.624-7.96c-.563-.097-.676-.17-1.705-1.1-4.288-3.875-8.896-5.988-14.431-6.617-1.796-.204-5.24-.084-6.994.244-4.825.903-9.086 3.026-12.543 6.248-1.086 1.013-1.482 1.226-2.274 1.226-1.56 0-2.553-1.322-2.117-2.821.154-.531.333-.778 1.061-1.469 4.444-4.212 9.876-6.845 16.03-7.769 2.223-.334 6.102-.361 8.095-.057 5.653.863 10.407 2.904 14.516 6.23 1.667 1.35 2.723 2.424 2.894 2.941.313.949-.077 2.114-.884 2.64-.377.246-1.157.39-1.648.305m-46.742-8.085c-.385-.153-.937-.675-1.155-1.093-.197-.376-.225-1.384-.051-1.84.163-.429 1.04-1.346 2.47-2.581 6.107-5.274 12.973-8.437 20.962-9.656 2.137-.326 7.022-.455 9.305-.245 9.264.85 17.959 4.804 24.565 11.173.78.752 1.01 1.055 1.125 1.482.398 1.477-.654 2.895-2.149 2.895-.773 0-1.173-.237-2.531-1.497-1.635-1.516-2.906-2.53-4.551-3.629-9.785-6.535-22.276-7.885-33.167-3.584-4.104 1.62-8.314 4.272-11.39 7.175-.662.626-1.378 1.227-1.59 1.336-.424.219-1.371.252-1.843.064" style="fill:var(--text-color);stroke-width:.999998" transform="translate(351.828 -651.095)"/></svg>
                    </div>
                    <div style="flex:7">
                        <div class="container-item-gateway">
                            <h4
                                @click="${e=>this._Abrir_Modal_Editar(e,t)}"
                            >Ponto ${e.router?`1`:`2`}: ${e.local} (${e.empresa?`Empresa`:`Cliente`})</h4>
                            <button
                                @click="${e=>this._Deletar_Item(e,t)}"
                                type="button" class="botao-close">–</button>
                        </div>
                        
                        <p
                            @click="${e=>this._Abrir_Modal_Editar(e,t)}"
                        >DNS: ${e.dns} | ${e.largura_banda}</p>
                    </div>
                </div>    
                `)}
            
            </div>

            <!--Modal de Configuracao do Ping-->

            ${this.modal_aberto?D`
                <div
                    class="modal-backdrop"
                    @click=${this._Fechar_Modal}
                >
                    <div
                        class="modal-content"
                        
                        @click=${e=>e.stopPropagation()}
                    >
                        <h3>Editar Gateway</h3>
                        <br>
                        
                        <div class="container_scroll">
                            <div style="display:flex;flex-direction:column; gap:.5rem">
                                <label for="ativo-local" class="form-label">Tipo de Ponto:</label>
                            
                                <div @change="" class="radio-input" id="ativo-local">
                                    <label>
                                        <input ?checked="${this.ativo.router===!0}" value="true" name="tipo-ativo" id="value-1" type="radio" />
                                        <span>P r i m e i r o</span>
                                    </label>
                                    <label>
                                        <input ?checked="${this.ativo.router===!1}" value="false" name="tipo-ativo" id="value-2" type="radio" />
                                        <span>S e g u n d o</span>
                                    </label>
                                    <span class="selection"></span>
                                </div>
                            </div>
                            <br>
                            <div class="container_item_utp">
                                <p>Propriedade da Empresa?</p>
                                <label class="toggle-switch">
                                    <input @change=""
                                    id="ativo-empresa"
                                    ?checked="${this.ativo.empresa}"
                                    type="checkbox">
                                    <div class="toggle-switch-background">
                                        <div class="toggle-switch-handle"></div>
                                    </div>
                                </label>
                            </div>

                            <div style="display:flex;flex-direction:column; gap:.5rem">
                                <label for="ativo-local" class="form-label">Local do Equipamento:</label>
                                <input 
                                    type="text" 
                                    placeholder="Qual local está esse equipamento?"
                                    id="local-do-ativo" name="local-do-ativo" .value="${this.ativo.local}" class="form-input">
                                <p>O local é adequado?</p>
                                <div @change="${this._Alterar_Adequacao}" class="radio-input" id="local-adequado">
                                    <label>
                                        <input ?checked="${this.ativo.local_equipamento.adequado===!0}" value="true" name="adequado" id="value-1" type="radio" />
                                        <span>A d e q u a d o</span>
                                    </label>
                                    <label>
                                        <input ?checked="${this.ativo.local_equipamento.adequado===!1}" value="false" name="adequado" id="value-2" type="radio" />
                                        <span>I n a d e q u a d o</span>
                                    </label>
                                    <span class="selection"></span>
                                </div>
                                ${this.adequado?D`
                                    <p>Cliente Ciente da necessidade de Remanejamento?</p>
                                    <div @change="" class="radio-input" id="ciente">
                                        <label>
                                            <input ?checked="${this.ativo.local_equipamento.ciente===!0}" value="true" name="ciente" id="value-1" type="radio" />
                                            <span>S i m</span>
                                        </label>
                                        <label>
                                            <input ?checked="${this.ativo.local_equipamento.ciente===!1}" value="false" name="ciente" id="value-2" type="radio" />
                                            <span>N ã o</span>
                                        </label>
                                        <span class="selection"></span>
                                    </div>
                                    <input 
                                        type="text" 
                                        placeholder="Porque é um local inadequado?"
                                        id="obs-local-adequado" name="obs-local-adequado" .value="${this.ativo.local_equipamento.observacao}" class="form-input">
                                    `:``}
                            </div>
                            <br>
                            <h3>Configurações de Rede</h3>
                            <br>
                            <div style="display:flex; flex-direction: column; gap:.5rem;">
                                <div style="display:flex; flex-direction: row; gap:.5rem;">
                                    <div style="flex:1">
                                        <h4>DNS:</h4>
                                    </div>
                                    <div style="flex:3">
                                        <select 
                                            @change="${this._Altarar_DNS_Outros}"
                                            id="tipo-dns" name="tipo-dns" class="form-select">
                                            <option ?selected="${this.ativo.dns===`Google`}" value="Google">Google</option>
                                            <option ?selected="${this.ativo.dns===`ETECC`}" value="ETECC">ETECC</option>
                                            <option ?selected="${this.ativo.dns===`Outro`}" value="Outro">Outro</option>
                                        </select>
                
                                        ${this.outro_dns?D`
                                        <input
                                            style="margin-top:.5rem;"
                                            type="text" 
                                            placeholder="Qual o DNS configurado?"
                                            id="outro-dns" name="outro-dns" .value="${this.ativo.outro_dns}" class="form-input">
                                            `:``}

                                    </div>
                                </div>
                                <div style="display:flex; flex-direction: row; gap:.5rem;">
                                    <div style="flex:1">
                                        <h4>Largura de Banda:</h4>
                                    </div>
                                    <div style="flex:3">
                                        <div id="largura-banda"style="display:flex; flex-direction: row; gap:.5rem;">
                                        
                                            <div class="form-group-row">
                                                <input ?checked="${this.ativo.largura_banda===`20MHz`}" type="radio" id="html" name="largura-banda" value="20MHz" class="form-radio">
                                                <label for="html" class="form-label-inline">20MHz</label>
                                            </div>
                                            
                                            <div class="form-group-row">
                                                <input ?checked="${this.ativo.largura_banda===`40MHz`}" type="radio" id="css" name="largura-banda" value="40MHz" class="form-radio">
                                                <label for="css" class="form-label-inline">40MHz</label>
                                            </div>
                                            
                                            <div class="form-group-row">
                                                <input ?checked="${this.ativo.largura_banda===`20/40MHz`}" type="radio" id="javascript" name="largura-banda" value="20/40MHz" class="form-radio">
                                                <label for="javascript" class="form-label-inline">20/40MHz</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div style="display:flex; flex-direction: row; gap:.5rem;">
                                    <div style="flex:1">
                                        <h4>Protocolos (UPNP, IPv6):</h4>
                                    </div>
                                    <div style="flex:3">
                                        <div style="display:flex; flex-direction: row; gap:.5rem;">
                                            <div style="display: flex; flex-direction: row; gap: 1rem; align-items: center;  justify-content: flex-start;">
                                                <p>UPnP Ativo</p>
                                                <label class="toggle-switch">
                                                    <input @change=""
                                                    id="checagem-upnp" 
                                                    ?checked="${this.ativo.upnp}"
                                                    type="checkbox">
                                                    <div class="toggle-switch-background">
                                                        <div class="toggle-switch-handle"></div>
                                                    </div>
                                                </label>
                                            </div>
                                            <div style="display: flex; flex-direction: row; gap: 1rem; align-items: center;  justify-content: flex-start;">
                                                <p>IPv6 SLAAC</p>
                                                <label class="toggle-switch">
                                                    <input @change=""
                                                    id="checagem-ipv6" 
                                                    ?checked="${this.ativo.ipv6}"
                                                    type="checkbox">
                                                    <div class="toggle-switch-background">
                                                        <div class="toggle-switch-handle"></div>
                                                    </div>
                                                </label>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div style="display:flex; flex-direction: row; gap:.5rem;">
                                    <div style="flex:1">
                                        <h4>Acesso Remoto:</h4>
                                    </div>
                                    <div style="flex:3">
                                        <div style="display:flex; flex-direction: row; gap:.5rem;">
                                            <div style="display: flex; flex-direction: row; gap: 1rem;">
                                                <p>Configurado</p>
                                                <label class="toggle-switch">
                                                    <input @change=""
                                                    id="checagem-acesso-remoto" 
                                                    ?checked="${this.ativo.acesso_remoto}"
                                                    type="checkbox">
                                                    <div class="toggle-switch-background">
                                                        <div class="toggle-switch-handle"></div>
                                                    </div>
                                                </label>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div style="display:flex; flex-direction: row; gap:.5rem;">
                                    <div style="flex:1">
                                        <h4>Firmware:</h4>
                                    </div>
                                    <div style="flex:3">
                                        <div style="display:flex; flex-direction: row; gap:.5rem;">
                                            <div style="display: flex; flex-direction: row; gap: 1rem;">
                                                <p>Devidamente Atualizado</p>
                                                <label class="toggle-switch">
                                                    <input @change=""
                                                    id="checagem-firware"
                                                    ?checked="${this.ativo.firware_router}"
                                                    type="checkbox">
                                                    <div class="toggle-switch-background">
                                                        <div class="toggle-switch-handle"></div>
                                                    </div>
                                                </label>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                        
                            </div>
                            <br>
                            <h3>Diagnóstico</h3>
                            <br>

                            <div style="display:flex; flex-direction: column; gap:.5rem;">
                                <div style="display:flex; flex-direction: row; gap:.5rem;">
                                    <div style="flex:1">
                                        <h4>Ativos:</h4>
                                    </div>
                                    <div style="flex:3"> 
                                        <div style="display: flex; flex-direction: row; gap: 1rem;">
                                            <div  style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                                                <p>Acima do Normal</p>
                                                <label class="toggle-switch">
                                                    <input @change=""
                                                    id="checagem-ativos-acima" 
                                                    ?checked="${this.ativo.ativos_anormal.verdadeiro}"
                                                    type="checkbox">
                                                    <div class="toggle-switch-background">
                                                        <div class="toggle-switch-handle"></div>
                                                    </div>
                                                </label>
                                            </div>
                                            <input
                                                style="margin-top:.5rem; flex:1"
                                                type="number" 
                                                placeholder="Qtd"
                                                id="valor-ativos-acima" name="valor-ativos-acima" .value="${this.ativo.ativos_anormal.observacao}" class="form-input">
                                        </div>         
                                        
                                    </div>
                                </div>

                                <div style="display:flex; flex-direction: row; gap:.5rem;">
                                    <div style="flex:1">
                                        <h4>Tempo Atividade:</h4>
                                    </div>
                                    <div style="flex:3"> 
                                        <div style="display: flex; flex-direction: row; gap: 1rem;">
                                            <div  style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
                                                <p>Acima do normal?</p>
                                                <label class="toggle-switch">
                                                    <input @change=""
                                                    id="checagem-atividade"
                                                    ?checked="${this.ativo.atividade.verdadeiro}"
                                                    type="checkbox">
                                                    <div class="toggle-switch-background">
                                                        <div class="toggle-switch-handle"></div>
                                                    </div>
                                                </label>
                                            </div>
                                            <input
                                                style="margin-top:.5rem; flex:1"
                                                type="number" 
                                                placeholder="Dias"
                                                id="valor-atividade" name="valor-atividade" .value="${this.ativo.atividade.observacao}" class="form-input">
                                        </div>         
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group" style="margin-top: 10px; display: flex; flex-direction: row; gap:.5rem">
                            <button 
                                @click="${e=>this._Salvar_data(e,this.acao)}"
                                style="background-color: var(--btn-background-color); color: var(--text-color);"
                                type="button" class="form-button")">Salvar</button>
                            <button 
                                @click="${this._Fechar_Modal}"
                                type="button" class="form-button")">Fechar</button>
                        </div>

                    </div>
                </div>
            `:``}
            

        `}};customElements.define(`gateway-test`,hn);var gn=`:host{box-sizing:border-box;color:var(--text-color);display:block}*,:before,:after{box-sizing:inherit;margin:0;padding:0}h2{color:var(--text-color);text-align:center}p{font-size:var(--paragraph);text-align:left;font-weight:100}.form-container{max-width:auto;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.form-group{flex-direction:column;margin-bottom:20px;display:flex}.form-group-row{align-items:center;gap:8px;margin-bottom:15px;display:flex}.form-label{color:var(--btn-text-background-color);margin-bottom:6px;font-size:17px;font-weight:600}.form-label-inline{color:#333;cursor:pointer;font-size:14px}.container-gateways{flex-direction:column;gap:.5rem;display:flex}.container-item-gateway{flex-direction:row;justify-content:space-between;gap:.5rem;display:flex}.container-gateway{background-color:var(--cards-background);border-radius:.5rem;flex-direction:row;gap:.5rem;padding:.5rem;display:flex}.container-velocidade-item{flex-direction:row;justify-content:space-between;display:flex}.destaque{background-color:var(--destaque-color);border-radius:.5rem;padding:.2rem}.form-input,.form-select,.form-textarea{appearance:none;box-sizing:border-box;color:#1a202c;background-color:#f8fafc;border:2px solid #e2e8f0;border-radius:6px;width:100%;padding:10px 12px;font-family:inherit;font-size:15px;transition:border-color .2s,background-color .2s}.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--destaque-color);background-color:#fff;outline:none}.form-select{cursor:pointer;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");background-position:right 12px center;background-repeat:no-repeat;background-size:16px;padding-right:40px}.form-textarea{resize:vertical;min-height:100px}.form-button{appearance:none;background-color:var(--destaque-color);color:#fff;cursor:pointer;border:none;border-radius:6px;width:100%;padding:12px 24px;font-family:inherit;font-size:15px;font-weight:600;transition:background-color .2s}.form-button:hover,.form-button:active{background-color:var(--destaque-color)}.botao-close{appearance:none;color:#fff;cursor:pointer;background-color:var(--destaque-color);border:none;border-radius:6px;height:30px;padding:5px 12px;display:inline-block}.modal-backdrop{z-index:9000;background:#00000080;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:fixed;top:0;left:0}.modal-content{background:var(--cards-background);color:var(--text-color);border-radius:8px;width:95%;padding:20px}.container_scroll{box-sizing:border-box;scrollbar-width:thin;width:100%;max-height:600px;padding:16px;overflow:hidden auto}.container_scroll::-webkit-scrollbar{width:6px}.container_scroll::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.container_scroll::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:4px}.container_scroll::-webkit-scrollbar-thumb:hover{background:#94a3b8}@media (width>=1024px){.modal-content{width:500px}}.form-label-inline{color:var(--text-color)}.form-radio,.form-checkbox{appearance:none;font:inherit;color:var(--destaque-color);cursor:pointer;background-color:#f8fafc;border:2px solid #cbd5e1;place-content:center;width:18px;height:18px;margin:0;transition:border-color .2s;display:grid}.form-radio{border-radius:50%}.form-checkbox{border-radius:4px}.form-radio:before{content:"";background-color:currentColor;border-radius:50%;width:8px;height:8px;transition:transform .12s ease-in-out;transform:scale(0)}.form-checkbox:before{content:"";clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%);background-color:currentColor;width:10px;height:10px;transition:transform .12s ease-in-out;transform:scale(0)}.form-radio:checked:before,.form-checkbox:checked:before{transform:scale(1)}.form-radio:checked,.form-checkbox:checked{border-color:var(--destaque-color)}.form-radio:focus,.form-checkbox:focus{outline:2px solid #ebf8ff}.radio-input input{display:none}.radio-input{--container_width:100%;color:#000;width:var(--container_width);background-color:#fff;border:1px solid #3534343a;border-radius:10px;align-items:center;display:flex;position:relative;overflow:hidden}.radio-input label{cursor:pointer;z-index:1;letter-spacing:-1px;justify-content:center;align-items:center;width:100%;padding:10px;font-size:14px;font-weight:600;display:flex}.selection{z-index:0;width:50%;height:100%;transition:all .15s;display:none;position:absolute;top:0;left:0}.radio-input label:has(input:checked){color:#fff}.radio-input label:has(input:checked)~.selection{background-color:var(--destaque-color);display:inline-block}.radio-input label:first-child:has(input:checked)~.selection{transform:translateX(calc(50% / 20%))}.radio-input label:nth-child(2):has(input:checked)~.selection{transform:translate(100%)}.toggle-switch{cursor:pointer;width:40px;height:20px;display:inline-block;position:relative}.toggle-switch input[type=checkbox]{display:none}.toggle-switch-background{background-color:#ddd;border-radius:20px;width:100%;height:100%;transition:background-color .3s ease-in-out;position:absolute;top:0;left:0;box-shadow:inset 0 0 0 2px #ccc}.toggle-switch-handle{background-color:#fff;border-radius:50%;width:20px;height:20px;transition:transform .3s ease-in-out;position:absolute;top:0;left:0;box-shadow:0 2px 5px #0003}.toggle-switch:before{content:"";color:#aaa;text-shadow:1px 1px #fff;font-size:12px;font-weight:700;transition:color .3s ease-in-out;position:absolute;top:-25px;right:-35px}.toggle-switch input[type=checkbox]:checked+.toggle-switch-handle{box-shadow:0 2px 5px #0003, 0 0 0 3px var(--destaque-color);transform:translate(5px)}.toggle-switch input[type=checkbox]:checked+.toggle-switch-background{background-color:var(--destaque-color);box-shadow:inset 0 0 0 2px var(--destaque-color)}.toggle-switch input[type=checkbox]:checked+.toggle-switch:before{content:"On";color:var(--destaque-color);right:-5px}.toggle-switch input[type=checkbox]:checked+.toggle-switch-background .toggle-switch-handle{transform:translate(20px)}.container_item_utp{flex-direction:row;gap:1rem;display:flex}`,_n=class extends I{static properties={objeto_os:{type:Object},necessario:{type:Boolean},objeto_encaminhado:{type:Object}};static get styles(){return o`${a(gn)}`}constructor(){super(),this.objeto_os={},this.objeto_encaminhado={},this.necessario=!1}firstUpdated(){}connectedCallback(){super.connectedCallback(),this.objeto_encaminhado=this.objeto_os.OS.conferencia_tecnica.encaminhar_externa,this.necessario=this.objeto_encaminhado.necessidade}_Alterar_Necessidade=e=>{let t=e.target.value===`true`;this.necessario=t,this.objeto_encaminhado.necessidade=t,this.objeto_os.salvar_os_localstorage()};_Alterar_descricao=e=>{let t=e.target.value===null?null:e.target.value;this.objeto_encaminhado.observacao=t,this.objeto_os.salvar_os_localstorage()};render(){return D`
            <!--Retorno renderizado-->
            <br>
            <h2>Necessário Encaminhar Equipe Externa?</h2>
            <br>
            <div style="display:flex;flex-direction:column; gap:.5rem">
                <div @change="${this._Alterar_Necessidade}" class="radio-input" id="ativo-local">
                    <label>
                        <input ?checked="${this.objeto_encaminhado.necessidade===!0}" value="true" name="tipo-ativo" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.objeto_encaminhado.necessidade===!1}" value="false" name="tipo-ativo" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
            </div>
            <br>
            ${this.necessario?D`
            <div class="form-group">
                <label for="message" class="form-label">Relatório:</label>
                <textarea
                    @dblclick="${e=>Q(e.target,`Encaminhar Externa`)}"
                    @change="${this._Alterar_descricao}"
                    .value="${this.objeto_encaminhado.observacao}"
                    placeholder="Informe o Mótivo do porque é necessário encaminhar para a equipe externa!"
                    style="border-left: 5px solid #ff0000;"
                    id="message" 
                    name="message" 
                    rows="5" class="form-textarea"></textarea>
            </div>
                `:``}
            
        `}};customElements.define(`encaminhar-externa`,_n);var vn=`:host{box-sizing:border-box;color:var(--text-color);display:block}*,:before,:after{box-sizing:inherit;margin:0;padding:0}h2{color:var(--text-color);text-align:center}p{font-size:var(--paragraph);text-align:left;font-weight:100}.form-container{max-width:auto;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.form-group{flex-direction:column;margin-bottom:20px;display:flex}.form-group-row{align-items:center;gap:8px;margin-bottom:15px;display:flex}.form-label{color:var(--btn-text-background-color);margin-bottom:6px;font-size:17px;font-weight:600}.form-label-inline{color:#333;cursor:pointer;font-size:14px}.container-gateways{flex-direction:column;gap:.5rem;display:flex}.container-item-gateway{flex-direction:row;justify-content:space-between;gap:.5rem;display:flex}.container-gateway{background-color:var(--cards-background);border-radius:.5rem;flex-direction:row;gap:.5rem;padding:.5rem;display:flex}.container-velocidade-item{flex-direction:row;justify-content:space-between;display:flex}.destaque{background-color:var(--destaque-color);border-radius:.5rem;padding:.2rem}.form-input,.form-select,.form-textarea{appearance:none;box-sizing:border-box;color:#1a202c;background-color:#f8fafc;border:2px solid #e2e8f0;border-radius:6px;width:100%;padding:10px 12px;font-family:inherit;font-size:15px;transition:border-color .2s,background-color .2s}.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--destaque-color);background-color:#fff;outline:none}.form-select{cursor:pointer;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");background-position:right 12px center;background-repeat:no-repeat;background-size:16px;padding-right:40px}.form-textarea{resize:vertical;min-height:100px}.form-button{appearance:none;background-color:var(--destaque-color);color:#fff;cursor:pointer;border:none;border-radius:6px;width:100%;padding:12px 24px;font-family:inherit;font-size:15px;font-weight:600;transition:background-color .2s}.form-button:hover,.form-button:active{background-color:var(--destaque-color)}.botao-close{appearance:none;color:#fff;cursor:pointer;background-color:var(--destaque-color);border:none;border-radius:6px;height:30px;padding:5px 12px;display:inline-block}.modal-backdrop{z-index:9000;background:#00000080;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:fixed;top:0;left:0}.modal-content{background:var(--cards-background);color:var(--text-color);border-radius:8px;width:95%;padding:20px}.container_scroll{box-sizing:border-box;scrollbar-width:thin;width:100%;max-height:600px;padding:16px;overflow:hidden auto}.container_scroll::-webkit-scrollbar{width:6px}.container_scroll::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.container_scroll::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:4px}.container_scroll::-webkit-scrollbar-thumb:hover{background:#94a3b8}@media (width>=1024px){.modal-content{width:500px}}.form-label-inline{color:var(--text-color)}.form-radio,.form-checkbox{appearance:none;font:inherit;color:var(--destaque-color);cursor:pointer;background-color:#f8fafc;border:2px solid #cbd5e1;place-content:center;width:18px;height:18px;margin:0;transition:border-color .2s;display:grid}.form-radio{border-radius:50%}.form-checkbox{border-radius:4px}.form-radio:before{content:"";background-color:currentColor;border-radius:50%;width:8px;height:8px;transition:transform .12s ease-in-out;transform:scale(0)}.form-checkbox:before{content:"";clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%);background-color:currentColor;width:10px;height:10px;transition:transform .12s ease-in-out;transform:scale(0)}.form-radio:checked:before,.form-checkbox:checked:before{transform:scale(1)}.form-radio:checked,.form-checkbox:checked{border-color:var(--destaque-color)}.form-radio:focus,.form-checkbox:focus{outline:2px solid #ebf8ff}.radio-input input{display:none}.radio-input{--container_width:100%;color:#000;width:var(--container_width);background-color:#fff;border:1px solid #3534343a;border-radius:10px;align-items:center;display:flex;position:relative;overflow:hidden}.radio-input label{cursor:pointer;z-index:1;letter-spacing:-1px;justify-content:center;align-items:center;width:100%;padding:10px;font-size:14px;font-weight:600;display:flex}.selection{z-index:0;width:50%;height:100%;transition:all .15s;display:none;position:absolute;top:0;left:0}.radio-input label:has(input:checked){color:#fff}.radio-input label:has(input:checked)~.selection{background-color:var(--destaque-color);display:inline-block}.radio-input label:first-child:has(input:checked)~.selection{transform:translateX(calc(50% / 20%))}.radio-input label:nth-child(2):has(input:checked)~.selection{transform:translate(100%)}.toggle-switch{cursor:pointer;width:40px;height:20px;display:inline-block;position:relative}.toggle-switch input[type=checkbox]{display:none}.toggle-switch-background{background-color:#ddd;border-radius:20px;width:100%;height:100%;transition:background-color .3s ease-in-out;position:absolute;top:0;left:0;box-shadow:inset 0 0 0 2px #ccc}.toggle-switch-handle{background-color:#fff;border-radius:50%;width:20px;height:20px;transition:transform .3s ease-in-out;position:absolute;top:0;left:0;box-shadow:0 2px 5px #0003}.toggle-switch:before{content:"";color:#aaa;text-shadow:1px 1px #fff;font-size:12px;font-weight:700;transition:color .3s ease-in-out;position:absolute;top:-25px;right:-35px}.toggle-switch input[type=checkbox]:checked+.toggle-switch-handle{box-shadow:0 2px 5px #0003, 0 0 0 3px var(--destaque-color);transform:translate(5px)}.toggle-switch input[type=checkbox]:checked+.toggle-switch-background{background-color:var(--destaque-color);box-shadow:inset 0 0 0 2px var(--destaque-color)}.toggle-switch input[type=checkbox]:checked+.toggle-switch:before{content:"On";color:var(--destaque-color);right:-5px}.toggle-switch input[type=checkbox]:checked+.toggle-switch-background .toggle-switch-handle{transform:translate(20px)}.container_item_utp{flex-direction:row;gap:1rem;display:flex}`,yn=class extends I{static properties={objeto_os:{type:Object},necessario:{type:Boolean},ajuda_interna:{type:Object}};static get styles(){return o`${a(vn)}`}constructor(){super(),this.objeto_os={},this.ajuda_interna={},this.necessario=!1}firstUpdated(){}connectedCallback(){super.connectedCallback(),this.ajuda_interna=this.objeto_os.OS.ajuda_interna,this.necessario=this.ajuda_interna.verdadeiro}_Alterar_Necessidade=e=>{let t=e.target.value===`true`;this.necessario=t,this.ajuda_interna.verdadeiro=t,this.objeto_os.salvar_os_localstorage()};_Alterar_Setor=e=>{let t=e.target.value;this.ajuda_interna.setor=t,this.objeto_os.salvar_os_localstorage()};_Alterar_Colaborador=e=>{let t=e.target.value===``?null:e.target.value;this.ajuda_interna.nome=t,this.objeto_os.salvar_os_localstorage()};render(){return D`
            <!--Retorno renderizado-->
            <br>
            <h2>Ajuda Interna</h2>
            <br>
            <div style="display:flex;flex-direction:column; gap:.5rem">
                <div @change="${this._Alterar_Necessidade}" class="radio-input" id="ativo-local">
                    <label>
                        <input ?checked="${this.ajuda_interna.verdadeiro===!0}" value="true" name="tipo-ativo" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.ajuda_interna.verdadeiro===!1}" value="false" name="tipo-ativo" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
            </div>
            <br>
            ${this.necessario?D`
            <div class="form-group">
                <label for="ativo" class="form-label">Selecione o Setor:</label>
                <select 
                    @change="${this._Alterar_Setor}"
                    id="ativo" name="ativo" class="form-select">
                    <option ?selected="${this.ajuda_interna.setor===`Torre`}" value="Torre">Torre</option>
                    <option ?selected="${this.ajuda_interna.setor===`TI`}" value="TI">TI</option>
                    <option ?selected="${this.ajuda_interna.setor===`Supervisão`}" value="Supervisão">Supervisão</option>
                </select>
            </div>

            <div class="form-group">
                <label for="fname" class="form-label">Nome do Colaborador:</label>
                <input 
                    placeholder="Nome de quem auxiliou!"
                    type="text" 
                    @change="${this._Alterar_Colaborador}"
                    id="fname" name="fname" .value="${this.ajuda_interna.nome}" class="form-input">
            </div>
                `:``}
        `}};customElements.define(`componente-ajuda-interna`,yn);var bn=`:host{box-sizing:border-box;color:var(--text-color);display:block}*,:before,:after{box-sizing:inherit;margin:0;padding:0}h2{color:var(--text-color);text-align:center}p{font-size:var(--paragraph);text-align:left;font-weight:100}.form-container{max-width:auto;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.form-group{flex-direction:column;margin-bottom:20px;display:flex}.form-group-row{align-items:center;gap:8px;margin-bottom:15px;display:flex}.form-label{color:var(--btn-text-background-color);margin-bottom:6px;font-size:17px;font-weight:600}.form-label-inline{color:#333;cursor:pointer;font-size:14px}.container-gateways{flex-direction:column;gap:.5rem;display:flex}.container-item-gateway{flex-direction:row;justify-content:space-between;gap:.5rem;display:flex}.container-gateway{background-color:var(--cards-background);border-radius:.5rem;flex-direction:row;gap:.5rem;padding:.5rem;display:flex}.container-velocidade-item{flex-direction:row;justify-content:space-between;display:flex}.destaque{background-color:var(--destaque-color);border-radius:.5rem;padding:.2rem}.form-input,.form-select,.form-textarea{appearance:none;box-sizing:border-box;color:#1a202c;background-color:#f8fafc;border:2px solid #e2e8f0;border-radius:6px;width:100%;padding:10px 12px;font-family:inherit;font-size:15px;transition:border-color .2s,background-color .2s}.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--destaque-color);background-color:#fff;outline:none}.form-select{cursor:pointer;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");background-position:right 12px center;background-repeat:no-repeat;background-size:16px;padding-right:40px}.form-textarea{resize:vertical;min-height:100px}.form-button{appearance:none;background-color:var(--destaque-color);color:#fff;cursor:pointer;border:none;border-radius:6px;width:100%;padding:12px 24px;font-family:inherit;font-size:15px;font-weight:600;transition:background-color .2s}.form-button:hover,.form-button:active{background-color:var(--destaque-color)}.botao-close{appearance:none;color:#fff;cursor:pointer;background-color:var(--destaque-color);border:none;border-radius:6px;height:30px;padding:5px 12px;display:inline-block}.modal-backdrop{z-index:9000;background:#00000080;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:fixed;top:0;left:0}.modal-content{background:var(--cards-background);color:var(--text-color);border-radius:8px;width:95%;padding:20px}.container_scroll{box-sizing:border-box;scrollbar-width:thin;width:100%;max-height:600px;padding:16px;overflow:hidden auto}.container_scroll::-webkit-scrollbar{width:6px}.container_scroll::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.container_scroll::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:4px}.container_scroll::-webkit-scrollbar-thumb:hover{background:#94a3b8}@media (width>=1024px){.modal-content{width:500px}}.form-label-inline{color:var(--text-color)}.form-radio,.form-checkbox{appearance:none;font:inherit;color:var(--destaque-color);cursor:pointer;background-color:#f8fafc;border:2px solid #cbd5e1;place-content:center;width:18px;height:18px;margin:0;transition:border-color .2s;display:grid}.form-radio{border-radius:50%}.form-checkbox{border-radius:4px}.form-radio:before{content:"";background-color:currentColor;border-radius:50%;width:8px;height:8px;transition:transform .12s ease-in-out;transform:scale(0)}.form-checkbox:before{content:"";clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%);background-color:currentColor;width:10px;height:10px;transition:transform .12s ease-in-out;transform:scale(0)}.form-radio:checked:before,.form-checkbox:checked:before{transform:scale(1)}.form-radio:checked,.form-checkbox:checked{border-color:var(--destaque-color)}.form-radio:focus,.form-checkbox:focus{outline:2px solid #ebf8ff}.radio-input input{display:none}.radio-input{--container_width:100%;color:#000;width:var(--container_width);background-color:#fff;border:1px solid #3534343a;border-radius:10px;align-items:center;display:flex;position:relative;overflow:hidden}.radio-input label{cursor:pointer;z-index:1;letter-spacing:-1px;justify-content:center;align-items:center;width:100%;padding:10px;font-size:14px;font-weight:600;display:flex}.selection{z-index:0;width:50%;height:100%;transition:all .15s;display:none;position:absolute;top:0;left:0}.radio-input label:has(input:checked){color:#fff}.radio-input label:has(input:checked)~.selection{background-color:var(--destaque-color);display:inline-block}.radio-input label:first-child:has(input:checked)~.selection{transform:translateX(calc(50% / 20%))}.radio-input label:nth-child(2):has(input:checked)~.selection{transform:translate(100%)}.toggle-switch{cursor:pointer;width:40px;height:20px;display:inline-block;position:relative}.toggle-switch input[type=checkbox]{display:none}.toggle-switch-background{background-color:#ddd;border-radius:20px;width:100%;height:100%;transition:background-color .3s ease-in-out;position:absolute;top:0;left:0;box-shadow:inset 0 0 0 2px #ccc}.toggle-switch-handle{background-color:#fff;border-radius:50%;width:20px;height:20px;transition:transform .3s ease-in-out;position:absolute;top:0;left:0;box-shadow:0 2px 5px #0003}.toggle-switch:before{content:"";color:#aaa;text-shadow:1px 1px #fff;font-size:12px;font-weight:700;transition:color .3s ease-in-out;position:absolute;top:-25px;right:-35px}.toggle-switch input[type=checkbox]:checked+.toggle-switch-handle{box-shadow:0 2px 5px #0003, 0 0 0 3px var(--destaque-color);transform:translate(5px)}.toggle-switch input[type=checkbox]:checked+.toggle-switch-background{background-color:var(--destaque-color);box-shadow:inset 0 0 0 2px var(--destaque-color)}.toggle-switch input[type=checkbox]:checked+.toggle-switch:before{content:"On";color:var(--destaque-color);right:-5px}.toggle-switch input[type=checkbox]:checked+.toggle-switch-background .toggle-switch-handle{transform:translate(20px)}.container_item_utp{flex-direction:row;gap:1rem;display:flex}`,xn=class extends I{static properties={objeto_os:{type:Object},necessario:{type:Boolean},indicacao:{type:Object}};static get styles(){return o`${a(bn)}`}constructor(){super(),this.objeto_os={},this.indicacao={},this.necessario=!1}firstUpdated(){}connectedCallback(){super.connectedCallback(),this.indicacao=this.objeto_os.OS.indicacao,this.necessario=this.indicacao.solicitado}_Alterar_Necessidade=e=>{let t=e.target.value===`true`;this.necessario=t,this.indicacao.solicitado=t,this.objeto_os.salvar_os_localstorage()};_Alterar_Indicacao_Passada=e=>{let t=e.target.value===`true`;this.indicacao.indicado=t,this.objeto_os.salvar_os_localstorage()};_Alterar_indicado=e=>{let t=e.target.value===``?null:e.target.value;this.indicacao.nome=t,this.objeto_os.salvar_os_localstorage()};_Alterar_Contato=e=>{let t=e.target.value===``?null:e.target.value;this.indicacao.contato=t,this.objeto_os.salvar_os_localstorage()};_Encaminhar_indicacao=e=>{let t=this.objeto_os.OS.info_cliente;if(t.nome_cadastro===null||t.telefone===null){R(`erro`,`O Nome de Cadastro ou Telefone devem estar preenchidos!`);return}if(this.indicacao.contato===null||this.indicacao.nome===null){R(`erro`,`Preencha os dados de indicação!`);return}let n=`Olá!\n\nCliente ${t.nome_cadastro} me indicou ${this.indicacao.nome}.\n\n*Contato:* ${this.indicacao.contato}`,r=`https://wa.me/?text=${encodeURIComponent(n)}`;window.open(r,`_blank`),this.indicacao.encaminhada=!0,this.objeto_os.salvar_os_localstorage()};render(){return D`
            <!--Retorno renderizado-->
            <h2>Indicação</h2>
            <br>
            <div class="form-group">
                <span class="form-label">Foi solicitado alguma indicação?</span>
            </div>
            <div style="display:flex;flex-direction:column; gap:.5rem">
                <div @change="${this._Alterar_Necessidade}" class="radio-input" id="ativo-local">
                    <label>
                        <input ?checked="${this.indicacao.solicitado===!0}" value="true" name="tipo-ativo" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.indicacao.solicitado===!1}" value="false" name="tipo-ativo" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
            </div>
            <br>
            ${this.necessario?D`
            <div class="form-group">
                <span class="form-label">O cliente passou alguma indicação?</span>
            </div>
            <div style="display:flex;flex-direction:column; gap:.5rem">
                <div @change="${this._Alterar_Indicacao_Passada}" class="radio-input" id="ativo-local">
                    <label>
                        <input ?checked="${this.indicacao.indicado===!0}" value="true" name="indicacao-passada" id="value-1" type="radio" />
                        <span>S i m</span>
                    </label>
                    <label>
                        <input ?checked="${this.indicacao.indicado===!1}" value="false" name="indicacao-passada" id="value-2" type="radio" />
                        <span>N ã o</span>
                    </label>
                    <span class="selection"></span>
                </div>
            </div>
            <br>
            <div style="display:flex;gap:1rem;">
                <div class="form-group">
                    <label for="lname" class="form-label">Nome Indicação:</label>
                    <input 
                        @change=${this._Alterar_indicado}
                        type="text" id="lname" name="lname" .value="${this.indicacao.nome}" class="form-input">
                </div>
                <div class="form-group">
                    <label for="lname" class="form-label">Número para Contato:</label>
                    <input 
                        @change=${this._Alterar_Contato}
                        type="text" id="lname" name="lname" .value="${this.indicacao.contato}" class="form-input">
                </div>
            
            </div>

            <div class="form-group" style="margin-top: 10px;">
                <button 
                    @click="${this._Encaminhar_indicacao}"
                    type="button" class="form-button">Encaminhar Indicação</button>
            </div>
            
            `:``}
        `}};customElements.define(`componente-indicacao`,xn);var Sn=`:host{box-sizing:border-box;color:var(--text-color);display:block}*,:before,:after{box-sizing:inherit;margin:0;padding:0}h2{color:var(--text-color);text-align:center}p{font-size:var(--paragraph);text-align:left;font-weight:100}.form-container{max-width:auto;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.form-group{flex-direction:column;margin-bottom:20px;display:flex}.form-group-row{align-items:center;gap:8px;margin-bottom:15px;display:flex}.form-label{color:var(--btn-text-background-color);margin-bottom:6px;font-size:17px;font-weight:600}.form-label-inline{color:#333;cursor:pointer;font-size:14px}.container-gateways{flex-direction:column;gap:.5rem;display:flex}.container-item-gateway{flex-direction:row;justify-content:space-between;gap:.5rem;display:flex}.container-gateway{background-color:var(--cards-background);border-radius:.5rem;flex-direction:row;gap:.5rem;padding:.5rem;display:flex}.container-velocidade-item{flex-direction:row;justify-content:space-between;display:flex}.destaque{background-color:var(--destaque-color);border-radius:.5rem;padding:.2rem}.form-input,.form-select,.form-textarea{appearance:none;box-sizing:border-box;color:#1a202c;background-color:#f8fafc;border:2px solid #e2e8f0;border-radius:6px;width:100%;padding:10px 12px;font-family:inherit;font-size:15px;transition:border-color .2s,background-color .2s}.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--destaque-color);background-color:#fff;outline:none}.form-select{cursor:pointer;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");background-position:right 12px center;background-repeat:no-repeat;background-size:16px;padding-right:40px}.form-textarea{resize:vertical;min-height:100px}.form-button{appearance:none;background-color:var(--destaque-color);color:#fff;cursor:pointer;border:none;border-radius:6px;width:100%;padding:12px 24px;font-family:inherit;font-size:15px;font-weight:600;transition:background-color .2s}.form-button:hover,.form-button:active{background-color:var(--destaque-color)}.botao-close{appearance:none;color:#fff;cursor:pointer;background-color:var(--destaque-color);border:none;border-radius:6px;height:30px;padding:5px 12px;display:inline-block}.modal-backdrop{z-index:9000;background:#00000080;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:fixed;top:0;left:0}.modal-content{background:var(--cards-background);color:var(--text-color);border-radius:8px;width:95%;padding:20px}.container_scroll{box-sizing:border-box;scrollbar-width:thin;width:100%;max-height:600px;padding:16px;overflow:hidden auto}.container_scroll::-webkit-scrollbar{width:6px}.container_scroll::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.container_scroll::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:4px}.container_scroll::-webkit-scrollbar-thumb:hover{background:#94a3b8}@media (width>=1024px){.modal-content{width:500px}}.form-label-inline{color:var(--text-color)}.form-radio,.form-checkbox{appearance:none;font:inherit;color:var(--destaque-color);cursor:pointer;background-color:#f8fafc;border:2px solid #cbd5e1;place-content:center;width:18px;height:18px;margin:0;transition:border-color .2s;display:grid}.form-radio{border-radius:50%}.form-checkbox{border-radius:4px}.form-radio:before{content:"";background-color:currentColor;border-radius:50%;width:8px;height:8px;transition:transform .12s ease-in-out;transform:scale(0)}.form-checkbox:before{content:"";clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%);background-color:currentColor;width:10px;height:10px;transition:transform .12s ease-in-out;transform:scale(0)}.form-radio:checked:before,.form-checkbox:checked:before{transform:scale(1)}.form-radio:checked,.form-checkbox:checked{border-color:var(--destaque-color)}.form-radio:focus,.form-checkbox:focus{outline:2px solid #ebf8ff}.radio-input input{display:none}.radio-input{--container_width:100%;color:#000;width:var(--container_width);background-color:#fff;border:1px solid #3534343a;border-radius:10px;align-items:center;display:flex;position:relative;overflow:hidden}.radio-input label{cursor:pointer;z-index:1;letter-spacing:-1px;justify-content:center;align-items:center;width:100%;padding:10px;font-size:14px;font-weight:600;display:flex}.selection{z-index:0;width:50%;height:100%;transition:all .15s;display:none;position:absolute;top:0;left:0}.radio-input label:has(input:checked){color:#fff}.radio-input label:has(input:checked)~.selection{background-color:var(--destaque-color);display:inline-block}.radio-input label:first-child:has(input:checked)~.selection{transform:translateX(calc(50% / 20%))}.radio-input label:nth-child(2):has(input:checked)~.selection{transform:translate(100%)}.toggle-switch{cursor:pointer;width:40px;height:20px;display:inline-block;position:relative}.toggle-switch input[type=checkbox]{display:none}.toggle-switch-background{background-color:#ddd;border-radius:20px;width:100%;height:100%;transition:background-color .3s ease-in-out;position:absolute;top:0;left:0;box-shadow:inset 0 0 0 2px #ccc}.toggle-switch-handle{background-color:#fff;border-radius:50%;width:20px;height:20px;transition:transform .3s ease-in-out;position:absolute;top:0;left:0;box-shadow:0 2px 5px #0003}.toggle-switch:before{content:"";color:#aaa;text-shadow:1px 1px #fff;font-size:12px;font-weight:700;transition:color .3s ease-in-out;position:absolute;top:-25px;right:-35px}.toggle-switch input[type=checkbox]:checked+.toggle-switch-handle{box-shadow:0 2px 5px #0003, 0 0 0 3px var(--destaque-color);transform:translate(5px)}.toggle-switch input[type=checkbox]:checked+.toggle-switch-background{background-color:var(--destaque-color);box-shadow:inset 0 0 0 2px var(--destaque-color)}.toggle-switch input[type=checkbox]:checked+.toggle-switch:before{content:"On";color:var(--destaque-color);right:-5px}.toggle-switch input[type=checkbox]:checked+.toggle-switch-background .toggle-switch-handle{transform:translate(20px)}.container_item_utp{flex-direction:row;gap:1rem;display:flex}`,Cn=class extends I{static properties={objeto_os:{type:Object},relatorio_ext:{type:String},relatorio_bat:{type:String}};static get styles(){return o`${a(Sn)}`}constructor(){super(),this.objeto_os={},this.relatorio_ext=null,this.relatorio_bat=null}firstUpdated(){}connectedCallback(){super.connectedCallback()}_Alterar_Relatorio_Extra=e=>{let t=e.target.value===``?null:e.target.value;this.objeto_os.OS.relato_adicional=t,this.objeto_os.salvar_os_localstorage()};_Alterar_Relatorio_Bat=e=>{let t=e.target.value===``?null:e.target.value;this.objeto_os.OS.relatorio_estabilidade=t,this.objeto_os.salvar_os_localstorage()};render(){return D`
            <!--Retorno renderizado-->
            <br>
            <h2>Informações Adicionais da Visita</h2>
            <br>
            <div class="form-group">
                <label for="message" class="form-label">Relato Adicional:</label>
                <textarea
                    @dblclick="${e=>Q(e.target,`Outros`)}"
                    style="border-left: 5px solid #ff0000;"
                    @change="${this._Alterar_Relatorio_Extra}"
                    .value="${this.objeto_os.OS.relato_adicional}"
                    name="message" rows="25" class="form-textarea"></textarea>
            </div>
            <br>
            <div class="form-group">
                <label for="message" class="form-label">Relatório .BAT</label>
                <textarea
                    style="border-left: 5px solid #ff0000;"
                    @change="${this._Alterar_Relatorio_Bat}"
                    .value="${this.objeto_os.OS.relatorio_estabilidade}"
                    name="message" rows="10" class="form-textarea"></textarea>
            </div>
        `}};customElements.define(`componente-info-extra`,Cn);var wn=`:host{box-sizing:border-box;color:var(--text-color);display:block}*,:before,:after{box-sizing:inherit;margin:0;padding:0}h2{color:var(--text-color);text-align:center}p{font-size:var(--paragraph);text-align:left;font-weight:100}.container-equipamentos{flex-direction:column;gap:.5rem;display:flex}.container-equipamentos-item{flex-direction:row;justify-content:space-between;display:flex}.destaque-troca{background-color:var(--destaque-color);border-radius:.5rem;padding:.2rem}.destaque-local{background-color:#3182ce;border-radius:.5rem;padding:.2rem}.form-container{max-width:auto;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.form-group{flex-direction:column;margin-bottom:20px;display:flex}.form-group-row{align-items:center;gap:8px;margin-bottom:15px;display:flex}.form-label{color:var(--btn-text-background-color);margin-bottom:6px;font-size:17px;font-weight:600}.form-label-inline{color:#333;cursor:pointer;font-size:14px}.container-velocidade{flex-direction:column;gap:.5rem;display:flex}.container-velocidade-item{flex-direction:row;justify-content:space-between;display:flex}.destaque{background-color:var(--destaque-color);border-radius:.5rem;padding:.2rem}.form-input,.form-select,.form-textarea{appearance:none;box-sizing:border-box;color:#1a202c;background-color:#f8fafc;border:2px solid #e2e8f0;border-radius:6px;width:100%;padding:10px 12px;font-family:inherit;font-size:15px;transition:border-color .2s,background-color .2s}.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--destaque-color);background-color:#fff;outline:none}.form-select{cursor:pointer;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");background-position:right 12px center;background-repeat:no-repeat;background-size:16px;padding-right:40px}.form-textarea{resize:vertical;min-height:100px}.form-radio,.form-checkbox{appearance:none;font:inherit;color:#3182ce;cursor:pointer;background-color:#f8fafc;border:2px solid #cbd5e1;place-content:center;width:18px;height:18px;margin:0;transition:border-color .2s;display:grid}.form-radio{border-radius:50%}.form-checkbox{border-radius:4px}.form-radio:before{content:"";background-color:currentColor;border-radius:50%;width:8px;height:8px;transition:transform .12s ease-in-out;transform:scale(0)}.form-checkbox:before{content:"";clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%);background-color:currentColor;width:10px;height:10px;transition:transform .12s ease-in-out;transform:scale(0)}.form-radio:checked:before,.form-checkbox:checked:before{transform:scale(1)}.form-radio:checked,.form-checkbox:checked{border-color:var(--destaque-color)}.form-radio:focus,.form-checkbox:focus{outline:2px solid #ebf8ff}.form-button{appearance:none;background-color:var(--destaque-color);color:#fff;cursor:pointer;border:none;border-radius:6px;width:100%;padding:12px 24px;font-family:inherit;font-size:15px;font-weight:600;transition:background-color .2s}.form-button:hover,.form-button:active{background-color:var(--destaque-color)}.botao-close{appearance:none;color:#fff;cursor:pointer;background-color:var(--destaque-color);border:none;border-radius:6px;height:30px;padding:5px 12px;display:inline-block}.modal-backdrop{z-index:9000;background:#00000080;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:fixed;top:0;left:0}.modal-content{background:var(--cards-background);color:var(--text-color);border-radius:8px;width:95%;padding:20px}@media (width>=1024px){.modal-content{width:500px}}.radio-input input{display:none}.radio-input{--container_width:100%;color:#000;width:var(--container_width);background-color:#fff;border:1px solid #3534343a;border-radius:10px;align-items:center;display:flex;position:relative;overflow:hidden}.radio-input label{cursor:pointer;z-index:1;letter-spacing:-1px;justify-content:center;align-items:center;width:100%;padding:10px;font-size:14px;font-weight:600;display:flex}.selection{z-index:0;width:50%;height:100%;transition:all .15s;display:none;position:absolute;top:0;left:0}.radio-input label:has(input:checked){color:#fff}.radio-input label:has(input:checked)~.selection{background-color:var(--destaque-color);display:inline-block}.radio-input label:first-child:has(input:checked)~.selection{transform:translateX(calc(50% / 20%))}.radio-input label:nth-child(2):has(input:checked)~.selection{transform:translate(100%)}`,Tn=class extends I{static properties={objeto_os:{type:Object}};static get styles(){return o`${a(wn)}`}constructor(){super(),this.objeto_os={}}firstUpdated(){}connectedCallback(){super.connectedCallback()}_Gerar_Relatorio=e=>{try{let e=this.objeto_os.Finalizar_OS_Simplificado();navigator.clipboard.writeText(e).then(()=>{R(`sucesso`,`Texto copiado com sucesso`)}).catch(e=>{R(`erro`,`Erro ao copiar o texto:`,e)})}catch(e){R(`erro`,e)}};_Gerar_Script_info_Cliente=e=>{try{let e=this.objeto_os.Export_Mensagem_Encaminhada_Cliente();navigator.clipboard.writeText(e).then(()=>{R(`sucesso`,`Texto copiado com sucesso`)}).catch(e=>{R(`erro`,`Erro ao copiar o texto:`,e)})}catch(e){R(`erro`,e)}};_Gerar_Relatorio_MD=e=>{try{let e=this.objeto_os.Finalizar_OS_Markdown();navigator.clipboard.writeText(e).then(()=>{R(`sucesso`,`Texto copiado com sucesso`)}).catch(e=>{R(`erro`,`Erro ao copiar o texto:`,e)})}catch(e){R(`erro`,e)}};render(){return D`
            <!--Retorno renderizado-->
            <div class="form-group" style="margin-top: 10px; display: flex; flex-direction: column; gap:.5rem">
                
                <button 
                    @click="${this._Gerar_Relatorio}"
                    style="display:flex; align-items: center; justify-content: center; gap:1rem"
                    type="button" class="form-button">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="2rem" height="2rem" viewBox="0 0 143.933 143.933"><path d="M-315.673 786.202c-3.581-1.239-6.118-3.5-7.721-6.884l-.946-1.997-.079-46.27-.078-46.271-3.958-.012c-2.177 0-4.526-.138-5.22-.298-3.76-.868-7.07-3.515-8.775-7.02-.97-1.993-1.02-2.25-1.023-5.396-.003-3.214.027-3.365 1.11-5.559 1.363-2.757 3.35-4.709 6.146-6.033l2.01-.952 42.549-.08c47.058-.086 44.224-.194 48.048 1.824 2.296 1.211 5.118 4.033 6.33 6.329 2.006 3.802 1.893.857 1.893 49.603v44.134h17.103l1.017 1.016 1.016 1.017v4.846c0 5.459-.356 7.4-1.894 10.314-1.21 2.295-4.033 5.117-6.328 6.328-3.796 2.003-1.068 1.895-47.585 1.884-39.167-.011-42.221-.046-43.615-.528zm7.129-6.742a6.35 6.35 0 0 0 2.21-2.222c.822-1.397.833-1.48.98-7.791l.15-6.38.976-.871.977-.872h61.593l-.079-44.327-.079-44.327-.74-1.495c-.945-1.908-2.754-3.718-4.65-4.65l-1.487-.732-35.506-.079c-19.529-.044-35.507-.015-35.507.063 0 .08.303.855.673 1.724l.673 1.581.15 53.522.149 53.52.7 1.129c.799 1.283 2.304 2.525 3.541 2.92 1.482.472 3.784.16 5.276-.713zm4.064-31.867c-1.292-1.292-1.236-3.01.143-4.388l1.017-1.017h16.848c16.16.001 16.888.025 17.803.583 1.241.757 1.738 2.366 1.158 3.753-.85 2.034.044 1.942-18.945 1.942h-17.15zm0-19.136c-1.292-1.292-1.236-3.01.143-4.388l1.017-1.017h46.764l1.016 1.017c1.38 1.379 1.435 3.096.143 4.388l-.874.874h-47.335zm0-19.136c-1.292-1.292-1.236-3.01.143-4.389l1.017-1.016h46.764l1.016 1.016c1.38 1.38 1.435 3.097.143 4.389l-.874.874h-47.335zm0-19.136c-1.292-1.292-1.236-3.01.143-4.389l1.017-1.016h46.764l1.016 1.016c1.38 1.38 1.435 3.097.143 4.389l-.874.874h-47.335zm76.419 89.386c1.92-.951 3.71-2.75 4.62-4.642.562-1.169.748-2.132.85-4.41l.13-2.916h-76.551l-.127 4.71c-.107 3.964-.23 4.959-.779 6.29-.358.87-.652 1.645-.652 1.724s15.978.107 35.507.063l35.507-.079zm-96.578-105.28c0-3.996-.015-4.085-.902-5.52-1.302-2.104-3.523-3.242-5.92-3.033-3.18.277-5.468 2.526-5.795 5.692-.146 1.415-.05 1.914.635 3.315 1.457 2.98 3.258 3.767 8.394 3.672l3.588-.066z" style="fill:white;stroke-width:1" transform="translate(351.828 -651.095)"/></svg>
                    <span>Gerar Relatório</span></button>

                <button 
                    @click="${this._Gerar_Relatorio_MD}"
                    style="display:flex; align-items: center; justify-content: center; gap:1rem"
                    type="button" class="form-button">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="2rem" height="2rem" viewBox="0 0 143.933 143.933"><path d="M-315.673 786.202c-3.581-1.239-6.118-3.5-7.721-6.884l-.946-1.997-.079-46.27-.078-46.271-3.958-.012c-2.177 0-4.526-.138-5.22-.298-3.76-.868-7.07-3.515-8.775-7.02-.97-1.993-1.02-2.25-1.023-5.396-.003-3.214.027-3.365 1.11-5.559 1.363-2.757 3.35-4.709 6.146-6.033l2.01-.952 42.549-.08c47.058-.086 44.224-.194 48.048 1.824 2.296 1.211 5.118 4.033 6.33 6.329 2.006 3.802 1.893.857 1.893 49.603v44.134h17.103l1.017 1.016 1.016 1.017v4.846c0 5.459-.356 7.4-1.894 10.314-1.21 2.295-4.033 5.117-6.328 6.328-3.796 2.003-1.068 1.895-47.585 1.884-39.167-.011-42.221-.046-43.615-.528zm7.129-6.742a6.35 6.35 0 0 0 2.21-2.222c.822-1.397.833-1.48.98-7.791l.15-6.38.976-.871.977-.872h61.593l-.079-44.327-.079-44.327-.74-1.495c-.945-1.908-2.754-3.718-4.65-4.65l-1.487-.732-35.506-.079c-19.529-.044-35.507-.015-35.507.063 0 .08.303.855.673 1.724l.673 1.581.15 53.522.149 53.52.7 1.129c.799 1.283 2.304 2.525 3.541 2.92 1.482.472 3.784.16 5.276-.713zm4.064-31.867c-1.292-1.292-1.236-3.01.143-4.388l1.017-1.017h16.848c16.16.001 16.888.025 17.803.583 1.241.757 1.738 2.366 1.158 3.753-.85 2.034.044 1.942-18.945 1.942h-17.15zm0-19.136c-1.292-1.292-1.236-3.01.143-4.388l1.017-1.017h46.764l1.016 1.017c1.38 1.379 1.435 3.096.143 4.388l-.874.874h-47.335zm0-19.136c-1.292-1.292-1.236-3.01.143-4.389l1.017-1.016h46.764l1.016 1.016c1.38 1.38 1.435 3.097.143 4.389l-.874.874h-47.335zm0-19.136c-1.292-1.292-1.236-3.01.143-4.389l1.017-1.016h46.764l1.016 1.016c1.38 1.38 1.435 3.097.143 4.389l-.874.874h-47.335zm76.419 89.386c1.92-.951 3.71-2.75 4.62-4.642.562-1.169.748-2.132.85-4.41l.13-2.916h-76.551l-.127 4.71c-.107 3.964-.23 4.959-.779 6.29-.358.87-.652 1.645-.652 1.724s15.978.107 35.507.063l35.507-.079zm-96.578-105.28c0-3.996-.015-4.085-.902-5.52-1.302-2.104-3.523-3.242-5.92-3.033-3.18.277-5.468 2.526-5.795 5.692-.146 1.415-.05 1.914.635 3.315 1.457 2.98 3.258 3.767 8.394 3.672l3.588-.066z" style="fill:white;stroke-width:1" transform="translate(351.828 -651.095)"/></svg>
                    <span>Gerar Relatório Markdown</span></button>

                <button 
                    @click="${this._Gerar_Script_info_Cliente}"
                    style="display:flex; align-items: center; justify-content: center; gap:1rem"
                    type="button" class="form-button">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="2rem" height="2rem" viewBox="0 0 143.933 143.933"><path d="M-335.896 790.566c-.845-.375-1.575-1.038-1.965-1.786-.358-.687-.404-5.881-.406-45.304l-.002-44.528.65-.65c.357-.356.828-.649 1.046-.649.743 0 1.685.587 1.98 1.233.21.464.293 12.866.293 44.288v43.644h91.017v-19.447c0-19.094.01-19.456.529-19.976.79-.79 2.204-.706 2.896.174.552.701.553.76.482 20.75-.07 19.804-.077 20.057-.619 20.795-.301.41-.956.955-1.455 1.21-.854.435-3.642.46-47.474.444-25.612-.01-46.75-.1-46.972-.198zm63.972-9.33c-1.093-.636-1.478-2.912-1.553-9.173l-.03-2.449 19.767-40.15c10.871-22.082 20.046-40.52 20.388-40.972.89-1.176 2.355-1.824 4.092-1.809 1.21.01 1.87.228 3.924 1.294 3.171 1.646 3.881 2.589 3.881 5.155v1.74l-12.508 25.4c-6.88 13.97-12.757 25.608-13.06 25.862-.304.255-.842.463-1.196.463-.821 0-1.948-1.115-1.926-1.906.009-.334 3.863-8.406 8.564-17.938l8.548-17.33-2.513-1.276c-1.382-.702-2.603-1.178-2.713-1.058-.246.266-26.72 54.072-26.72 54.305 0 .09 1.137.73 2.526 1.42l2.527 1.255 3.155-6.42c1.735-3.532 3.41-6.63 3.72-6.885.312-.254.856-.463 1.21-.463.758 0 1.943 1.09 1.943 1.785 0 .576-10.968 23-11.592 23.7-.408.458-2.22 1.77-6.217 4.504-1.86 1.271-3.159 1.563-4.217.946m4.755-6.103 2.019-1.363-1.965-1.005c-1.08-.554-2.054-1.012-2.163-1.02-.11-.006-.199 1.06-.199 2.369s.065 2.381.145 2.381 1.052-.613 2.163-1.362m4.7-6.037c.366-.723.665-1.377.665-1.453 0-.162-4.655-2.528-4.955-2.519-.198.006-1.468 2.664-1.33 2.783.076.068 4.796 2.468 4.892 2.49.034.006.361-.579.727-1.301m30.209-67.266c-1.333-.684-2.511-1.25-2.618-1.257-.224-.015-1.612 2.634-1.46 2.786.055.056 1.224.628 2.597 1.272l2.497 1.171.704-1.364.704-1.365zm5.627-5.466c1.781-3.61 1.747-3.845-.724-5.04-2.555-1.236-2.705-1.152-4.475 2.53-.802 1.666-1.414 3.053-1.36 3.083.964.535 4.666 2.273 4.868 2.284.15.01.912-1.277 1.691-2.857m-99.988 68.555c-.507-.254-1.197-.875-1.534-1.38-.606-.907-.612-.99-.535-7.586l.079-6.668.661-.708c1.31-1.4 1.603-1.45 8.415-1.45 6.134 0 6.35.017 7.223.6 1.698 1.134 1.824 1.72 1.824 8.472 0 5.521-.044 6.118-.532 7.074a3.65 3.65 0 0 1-1.577 1.577c-.956.488-1.552.533-7.074.532-5.212 0-6.154-.063-6.95-.463m12.165-8.664v-5.16h-10.319v10.319h10.32zm8.226 6.193c-1.374-.55-1.714-1.819-.798-2.983l.548-.697h29.027l.549.697c.301.384.548.854.548 1.046 0 .783-.65 1.687-1.399 1.948-1.035.36-27.57.35-28.475-.01m-.697-9.356c-.357-.358-.65-.958-.65-1.335s.293-.978.65-1.335l.65-.65h34.708l.65.65c.827.827.827 1.842 0 2.67l-.65.649h-34.709zm-19.628-12.041c-2.085-.947-2.186-1.342-2.187-8.569-.001-7.05.119-7.65 1.732-8.648.842-.52 1.202-.542 7.624-.467l6.74.08.717.66c1.328 1.227 1.442 1.878 1.442 8.243 0 5.394-.045 5.97-.545 7.004-.396.818-.854 1.275-1.671 1.671-1.034.5-1.604.545-6.93.54-5.15-.006-5.929-.064-6.922-.514m12.1-8.741v-5.292h-10.32v10.583h10.32zm7.427 5.653c-.302-.384-.549-.957-.549-1.273 0-.807.899-1.681 1.918-1.866.473-.086 10.01-.121 21.19-.079l20.33.078.507.625c.655.81.645 2.014-.024 2.683-.52.52-.882.529-21.676.529h-21.148zm.593-8.298c-1.241-.506-1.491-2.057-.492-3.056l.65-.65h39.206l.65.65c.778.78.83 1.713.143 2.563l-.506.624-19.536.052c-10.945.03-19.791-.051-20.115-.183m-20.589-12.69c-1.617-1.08-1.72-1.587-1.72-8.553 0-6.959.07-7.309 1.65-8.437.848-.605.983-.616 7.347-.616 7.38 0 7.75.09 8.736 2.128.474.979.524 1.644.524 6.96 0 6.365-.114 7.016-1.442 8.242l-.716.662-6.793.071c-6.418.068-6.835.043-7.586-.458m12.568-8.478v-5.291h-10.319v10.583h10.32zm7.529 5.7c-.78-.778-.832-1.712-.144-2.562l.506-.624 21.942-.07c21.908-.071 21.944-.07 22.646.481.917.722.958 2.034.09 2.85l-.612.575h-43.779zm.697-8.366c-1.375-.557-1.714-1.823-.798-2.987l.548-.697h22.074c21.72 0 22.082.008 22.602.53.669.668.68 1.872.024 2.682l-.506.625-21.653.052c-13.584.033-21.89-.043-22.29-.205m-20.529-12.643c-1.887-1.166-1.844-.978-1.93-8.34-.078-6.59-.072-6.673.534-7.58 1.18-1.766 1.672-1.866 8.804-1.784 9.108.104 8.864-.147 8.864 9.108 0 6.77-.126 7.353-1.825 8.488-.873.583-1.086.6-7.276.6-5.746-.001-6.456-.05-7.17-.492m12.303-8.636v-5.159h-10.319v10.319h10.32zm-23.237 7.987-.575-.612V675.05c0-18.435-.042-17.916 1.53-19.073.71-.522 1.196-.53 36.834-.605 19.864-.041 36.533-.003 37.042.087.784.138 2.579 1.811 11.716 10.924 7.042 7.024 10.97 11.135 11.31 11.837.471.97.522 1.646.522 6.933 0 3.79-.106 6.088-.3 6.513-.61 1.342-2.71 1.462-3.388.193-.17-.319-.28-2.556-.28-5.692v-5.168l-9.592-.075c-13.297-.105-12.203.989-12.316-12.313l-.079-9.326h-69.019l-.072 16.427-.072 16.428-.625.506c-.845.684-1.934.64-2.636-.107m84.224-22.936c-4.073-4.074-7.495-7.408-7.605-7.408s-.2 3.334-.2 7.408v7.409h15.209zm-53.458 20.782c-.357-.357-.65-.958-.65-1.335s.293-.977.65-1.335l.65-.649h16.433c11.077 0 16.604.091 16.958.28 1.269.68 1.15 2.778-.193 3.39-.465.212-5.398.299-16.927.299h-16.272zm-.101-9.043c-1.056-1.342-.42-2.815 1.355-3.136.48-.088 7.999-.124 16.706-.081l15.832.077.658.765c.717.834.68 1.738-.104 2.609-.389.432-1.55.463-17.158.463h-16.74z" style="fill:white;" transform="translate(351.828 -651.095)"/></svg>
                    <span>Gerar Script Cliente</span></button>

                <button 
                    @click=""
                    type="button" class="form-button"
                    style="display:flex; align-items: center; justify-content: center; gap:1rem">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="2rem" height="2rem" viewBox="0 0 143.933 143.933"><path d="M-290.815 788.01c-31.79-5.595-54.766-32.829-54.766-64.91 0-44.892 43.867-76.477 86.586-62.345 10.251 3.39 19.282 9.174 26.908 17.23 11.686 12.345 17.945 28.08 17.945 45.114 0 18.107-7.166 34.914-20.2 47.373-12.751 12.191-28.421 18.427-45.992 18.301-3.523-.025-8.24-.368-10.481-.763m20.466-4.538c5.63-.913 11.889-2.83 16.742-5.127 4.5-2.129 11.378-6.59 11.782-7.642.468-1.22-1.178-7.207-3.074-11.178-5.55-11.63-17.203-20.004-29.824-21.432l-3.1-.351v-9.07l1.766-1.551c2.29-2.011 2.828-4.506 1.503-6.968-1.919-3.562-6.299-4.083-9.167-1.09-1.197 1.25-1.49 2.008-1.49 3.854 0 2.005.244 2.522 1.91 4.05l1.91 1.75v9.025l-3.183.356c-15.048 1.68-28.731 13.825-32.292 28.661-1.024 4.27-1.007 4.307 3.36 7.27 7.462 5.063 17.056 8.595 26.767 9.854 3.78.49 12.123.28 16.39-.411m-25.584-16.791c-2.086-2.086-1.649-5.386.887-6.697 3.09-1.599 6.014.32 6.014 3.948 0 3.587-4.336 5.314-6.9 2.749m27.001 0c-2.636-2.636-.815-7.41 2.825-7.41 3.805 0 5.61 4.938 2.746 7.514-1.698 1.528-3.982 1.485-5.57-.104m-53.31-3.459c.093-.488-.867-2.207-2.134-3.82-3.587-4.569-7.205-10.93-8.931-15.7-.867-2.394-1.576-4.525-1.576-4.734 0-.21 1.319.902 2.93 2.469 4.823 4.69 12.36 9.389 14.558 9.076.67-.096 1.168-.58 1.26-1.228.125-.873-.674-1.53-4.33-3.566-8.36-4.654-15.244-12.702-16.25-18.997l-.339-2.115 11.147.138 11.148.137.119 2.293c.24 4.606 1.278 13.505 1.707 14.633.504 1.326 2.231 1.557 2.886.387.247-.442.163-2.62-.195-5.077-.346-2.367-.681-6.088-.745-8.27l-.117-3.966 8.361-.254 8.362-.255v-2.547l-8.374-.255-8.373-.255.112-3.311c.151-4.46.962-10.545 2.105-15.793 1.56-7.166 1.33-6.88 6.474-8.082 5.057-1.182 15.354-2.617 18.78-2.617h2.267v8.814c0 9.06.203 10.036 2.085 10.036.474 0 1.002-.363 1.172-.806s.309-4.684.309-9.425v-8.619l2.165.003c5.213.01 16.25 1.712 21.811 3.364 2.347.697 2.48.838 3.205 3.392 1.802 6.352 3.862 21.606 3.088 22.86-.15.24-4.016.438-8.593.438-6.927 0-8.37.128-8.614.764-.162.42-.162 1.108 0 1.528.244.663 1.687.765 8.614.765 4.89 0 8.449.206 8.63.5.17.274.023 3.426-.326 7.004-.945 9.673-.91 10.55.425 10.74.672.095 1.307-.207 1.604-.765.57-1.068 1.58-9.086 1.752-13.913l.118-3.312 10.894-.137 10.894-.138-.284 2.122c-.901 6.717-9.09 15.7-18.329 20.106-1.021.487-1.974 1.192-2.118 1.566-.419 1.091.244 2.209 1.31 2.209 2.345 0 9.804-4.789 14.6-9.372l3.212-3.07-1.358 3.8c-1.994 5.586-5.132 11.39-8.774 16.227-3.325 4.418-3.725 5.798-1.76 6.078 1.264.18 2.482-1.05 6.148-6.22 10.754-15.158 13.73-35.961 7.716-53.915-6.104-18.218-20.416-32.506-38.695-38.63-13.621-4.563-29.337-3.905-42.852 1.794-25.78 10.872-40.858 38.23-36.36 65.972 1.7 10.475 7.02 22.118 13.266 29.033 2 2.212 3.868 2.62 4.193.915zm-14.436-43.551c1.04-5.547 6.172-11.995 13.343-16.766 3.877-2.58 11.194-6.141 11.66-5.675.104.104-.253 2.354-.795 5-.95 4.635-1.902 12.021-2.163 16.794l-.126 2.292-11.14.138-11.139.137zm92.773.754c-.129-.63-.37-3.454-.536-6.274s-.845-7.749-1.509-10.953-1.136-5.9-1.05-5.99c.314-.33 8.738 3.945 11.784 5.979 6.293 4.203 11.787 11.33 12.698 16.474l.338 1.91h-10.746c-10.734 0-10.745-.001-10.979-1.146m-90.978-12.632c0-.18.43-1.574.954-3.099 5.789-16.825 19.11-29.958 36.417-35.901l3.492-1.2-3.517 3.703c-4.147 4.366-7.63 9.764-10.119 15.687-.988 2.351-1.96 4.57-2.157 4.93-.199.359-2.892 1.742-5.985 3.072-6.57 2.828-12.051 6.32-16.155 10.297-1.612 1.561-2.93 2.691-2.93 2.511m107.355-2.817c-4.992-4.655-10.797-8.182-18.008-10.94-2.97-1.137-3.163-1.316-4.027-3.769-2.403-6.82-7.237-14.78-11.774-19.391-3.196-3.247-3.14-3.256 3.712-.548 11.806 4.665 23.018 14.906 29.052 26.534 1.944 3.747 4.501 10.362 4.14 10.71-.084.081-1.477-1.087-3.095-2.596m-77.806-14.352c0-1.445 4.721-10.12 7.487-13.757 4.29-5.64 9.721-9.518 14.801-10.566l1.656-.341v21.867l-4.458.347c-5.731.447-13.402 1.579-16.812 2.482-2.324.615-2.674.61-2.674-.032zm49.162.09c-3.16-.877-11.286-2.078-17.194-2.54l-4.458-.347v-21.9l1.91.343c5.683 1.017 11.778 5.571 16.392 12.245 2.24 3.24 6.661 11.664 6.661 12.691 0 .396-.254.358-3.311-.491" style="fill:white;stroke-width:1" transform="translate(351.828 -651.095)"/></svg>
                    <span>Gerar Resumo IA</span></button>
                <button 
                    @click=""
                    type="button" class="form-button"
                    style="display:flex; align-items: center; justify-content: center; gap:1rem">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="2rem" height="2rem" viewBox="0 0 143.933 143.933"><path d="M-313.173 785.763c-1.115-.323-3.112-2.13-3.682-3.332-.42-.883-6.28-31.837-6.071-32.061.07-.075 30.222 21.426 32.004 22.822.524.411.523.42-.132.96-1.294 1.068-16.256 10.917-17.313 11.397-1.152.523-3.397.623-4.806.214m49.106-5.103c-.655-.19-1.629-.574-2.164-.852-1.19-.618-38.843-27.967-38.768-28.159.03-.075 16.663-16.492 36.963-36.482s39.648-39.08 42.995-42.422l6.086-6.076-15.478 12.16c-8.513 6.687-30.464 23.949-48.78 38.36l-33.3 26.2-13.663-9.923c-7.514-5.457-14.222-10.463-14.905-11.123-1.79-1.73-2.456-3.378-2.433-6.012.028-3.219 1.36-5.651 3.91-7.136 1.955-1.14 127.454-49.088 128.48-49.088.52 0 1.211.186 1.535.413.696.487 1.38 1.72 1.38 2.484 0 .68-40.304 111.063-41.2 112.835-.941 1.864-2.877 3.644-4.737 4.356-1.919.734-4.345.925-5.92.465" style="fill:white"; transform="translate(351.828 -651.095)"></svg>
                    <span>Encaminhar Whatsapp</span></button>
            </div>
            
        `}};customElements.define(`componente-acoes`,Tn);var En=class extends I{static properties={nome:{type:String},tipo:{type:String},objeto_os:{type:Object},abaAtiva:{type:String}};static get styles(){return o`${a(at)}`}constructor(){super(),this.tipo=`continue`,this.abaAtiva=`aba1`,console.log(`Iniciando o Construtor`)}async connectedCallback(){if(super.connectedCallback(),this.tipo==`novo`){this.objeto_os=new z(ot),this.objeto_os.alterar_tipo_os(`completa`);try{let e=await lt(),t=Temporal.Now.zonedDateTimeISO();this.objeto_os.carregar_latitude_longitude(e),this.objeto_os.OS.config_OS.data_criacao=t.toString(),this.objeto_os.salvar_os_localstorage(),R(`sucesso`,`OS atualizada com GPS`)}catch(e){R(`erro`,`Falha ao carregar coordenadas:\n${e}`),this.objeto_os.carregar_latitude_longitude(null)}}else this.objeto_os=new z,this.objeto_os.carregar_os_localstorage();this.abaAtiva=localStorage.getItem(`aba`)}firstUpdated(){this.atualizarUrlParaContinue()}atualizarUrlParaContinue(){if(window.location.pathname.endsWith(`/novo`)){let e=window.location.pathname.replace(`/novo`,`/continue`);window.history.replaceState(null,``,e)}}_alterarAba(e,t){e.preventDefault(),this.abaAtiva=t,localStorage.setItem(`aba`,t)}render(){return D`
            <!--Retorno renderizado-->
            <header-page-os></header-page-os>
           
            <!-- Campo que irá conter os fomulários -->
            <main id="container-form">
                
                ${this.abaAtiva===`aba1`?D`
                    <div class="container-item">
                        <h1>Tratativa Inicial com Cliente</h1>
                        <hr><br>
                        
                        <nome-cliente
                            .objeto_os = "${this.objeto_os}"
                        ></nome-cliente>

                        <select-parentesco
                            .objeto_os = "${this.objeto_os}"
                            ></select-parentesco  >
                        
                        <area-relato-cliente
                            .objeto_os = "${this.objeto_os}"
                        ></area-relato-cliente>
                        <hr>
                        <faxada-anexada
                            .objeto_os = "${this.objeto_os}"
                        ></faxada-anexada>

                        <informacao-na-os
                            .objeto_os = "${this.objeto_os}"
                        ></informacao-na-os>

                        
                        <br><br><br>
                       
                    </div>
                `:``}
 

                ${this.abaAtiva===`aba2`?D`
                    <div class="container-item">
                        <h1>Conferência Técnica Completa</h1>
                        <hr>
                        <verificacao-utp
                            .objeto_os = "${this.objeto_os}"
                        ></verificacao-utp>

                        <verificacao-fibra
                            .objeto_os = "${this.objeto_os}"
                        ></verificacao-fibra>
                        <br><br>
                        <verificar-fonte
                            .objeto_os = "${this.objeto_os}"
                        ></verificar-fonte>

                        <navegacao-teste
                            .objeto_os = "${this.objeto_os}"
                        ></navegacao-teste>

                        <site-survey
                            .objeto_os = "${this.objeto_os}"
                        ></site-survey>

                        <componente-ping
                            .objeto_os = "${this.objeto_os}"
                        ></componente-ping>

                        <componente-tracert
                            .objeto_os = "${this.objeto_os}"
                        ></componente-tracert>
                        
                        <componente-velocidade
                            .objeto_os = "${this.objeto_os}"
                        ></componente-velocidade>
                        
                        <componente-equipamentos-local
                            .objeto_os = "${this.objeto_os}"
                        ></componente-equipamentos-local>

                        <gateway-test
                            .objeto_os = "${this.objeto_os}"
                        ></gateway-test>
                        <br><br><br><br>

                    </div>
                `:``}

                ${this.abaAtiva===`aba3`?D`
                    <div class="container-item">
                        <h1>Educação do Cliente</h1>
                        <hr>
                        <informacao-passada-cliente
                            .objeto_os = "${this.objeto_os}"
                        ></informacao-passada-cliente>
                        
                        <atendimento-feito-cliente
                            .objeto_os = "${this.objeto_os}"
                        ></atendimento-feito-cliente>

                        <informacoes-adicionais-passadas
                            .objeto_os = "${this.objeto_os}"
                        ></informacoes-adicionais-passadas>
                        
                        
                        <br><br><br><br><br>
                    </div>
                `:``}

                ${this.abaAtiva===`aba4`?D`
                    <div class="container-item">
                        <h1>Finalização do Script</h1>

                        <encaminhar-externa
                            .objeto_os = "${this.objeto_os}"
                        ></encaminhar-externa>

                        <componente-ajuda-interna
                            .objeto_os = "${this.objeto_os}"
                        ></componente-ajuda-interna>

                        <componente-indicacao
                            .objeto_os = "${this.objeto_os}"
                        ></componente-indicacao>

                        <componente-info-extra
                            .objeto_os = "${this.objeto_os}"
                        ></componente-info-extra>

                        <componente-acoes
                            .objeto_os = "${this.objeto_os}"
                        ></componente-acoes>

                    </div>
                `:``}
                    <br><br><br>
            </main>
            <nav>
                <a 
                    class="${this.abaAtiva===`aba1`?`ativo`:``}"
                    @click="${e=>this._alterarAba(e,`aba1`)}">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.933 143.933"><path d="M-282.063 788.956c-2.903-.096-7.521-.595-10.011-1.083-6.433-1.258-11.386-2.914-17.034-5.696-7.363-3.625-13.341-8.07-19.087-14.19-8.292-8.833-13.999-19.997-16.385-32.057-.953-4.812-1.127-6.776-1.132-12.77-.005-5.572.09-6.954.756-10.982 1.29-7.811 4.043-15.431 8.098-22.413 5.038-8.675 12.41-16.442 20.802-21.915 9.131-5.956 19.135-9.457 30.068-10.522 2.886-.28 8.743-.315 11.545-.067 6.723.595 13.655 2.287 19.708 4.809 3.543 1.476 8.855 4.29 9.67 5.122 1.04 1.062.656 3.098-.707 3.745-.887.42-1.737.25-3.283-.657-6.786-3.985-14.348-6.652-22.06-7.779-5.817-.85-12.712-.82-18.321.082-10.478 1.683-20.349 6.05-28.563 12.637-2.273 1.823-2.672 2.186-5.313 4.825-8.735 8.732-14.37 19.483-16.743 31.951-1.09 5.727-1.26 13.513-.425 19.458 1.354 9.634 4.992 18.944 10.357 26.5.546.769 1.093 1.545 1.216 1.724 1.1 1.602 5.461 6.529 6.811 7.694.322.278.889.782 1.259 1.12 2.611 2.387 5.987 4.903 9.189 6.85 8.03 4.88 17.215 7.844 26.789 8.644 3.085.258 9.904.1 12.807-.298 11.285-1.547 21.626-5.927 30.183-12.785 11.32-9.074 18.985-21.538 21.87-35.564.798-3.881 1.077-6.478 1.17-10.922.087-4.078-.02-6.212-.489-9.699-.98-7.303-3.596-15.079-7.234-21.505-.577-1.018-1.09-2.057-1.14-2.308-.428-2.136 2.097-3.682 3.78-2.315.76.617 2.957 4.635 4.526 8.278 2.939 6.823 4.574 13.382 5.246 21.042.265 3.021.1 10.383-.3 13.32-1.425 10.496-4.838 19.656-10.549 28.315-6.6 10.008-16.38 18.41-27.115 23.298-2.393 1.09-2.389 1.088-3.611 1.567-5.288 2.072-11.253 3.542-17.01 4.192-1.511.17-6.945.468-7.694.421a85 85 0 0 0-1.644-.067m-.971-8.875c-26.1-1.371-47.991-20.43-52.956-46.103-1.557-8.052-1.35-16.687.588-24.552a57 57 0 0 1 8.522-18.914 69 69 0 0 1 1.213-1.718c.099-.123.617-.77 1.15-1.439 2.763-3.453 6.875-7.441 10.254-9.942 6.307-4.667 13.19-7.923 20.632-9.758 7.666-1.89 16.345-2.155 24.045-.735 8.421 1.554 16.789 5.136 23.28 9.968 1.695 1.26 1.892 1.537 1.892 2.646 0 .702-.073.943-.428 1.409-.935 1.226-2.281 1.289-3.825.178-2.874-2.069-5.108-3.448-7.696-4.753-5.118-2.58-10.541-4.257-16.66-5.148-2.18-.318-8.997-.444-11.537-.214-6.93.629-13.59 2.594-19.829 5.85-1.102.576-2.38 1.288-2.839 1.583s-1.204.772-1.656 1.06c-4.16 2.648-9.514 7.694-12.796 12.06-3.825 5.087-6.587 10.543-8.414 16.614-.66 2.198-1.375 5.543-1.731 8.114-.327 2.358-.457 8.68-.23 11.223.92 10.357 4.611 19.669 11.095 27.996 1.791 2.3 5.97 6.505 8.266 8.32 8.254 6.52 17.13 10.175 27.344 11.258 2.694.285 8.197.288 10.833.006 8.899-.956 17.053-3.972 24.355-9.01 3.588-2.474 7.08-5.648 10.001-9.089 1.844-2.173 1.745-2.044 3.27-4.244 4.864-7.017 7.84-14.978 8.938-23.907.34-2.757.34-8.73 0-11.58-.808-6.81-2.618-12.663-5.797-18.753-.892-1.707-2.62-4.42-4.72-7.41-.395-.564-.485-.835-.484-1.46 0-1.432.915-2.335 2.367-2.336 1.018 0 1.402.268 2.56 1.788 4.792 6.296 8.505 14.676 10.087 22.765 3.61 18.472-1.935 37.43-14.865 50.816-2.479 2.566-5.832 5.462-8.218 7.097-4.183 2.866-7.842 4.847-11.805 6.392-4.537 1.769-8.428 2.785-13.3 3.474-1.941.274-7.139.64-8.291.584zm.888-18.084c-13.721-.688-26.242-8.85-32.524-21.204-2.039-4.01-3.117-7.452-3.957-12.627-.307-1.892-.255-8.696.083-10.758 1.728-10.568 6.93-19.335 15.128-25.497 10.622-7.984 24.792-10.012 37.288-5.338 3.43 1.282 7.613 3.592 8.186 4.52.676 1.094.16 2.94-.953 3.41-.968.409-1.688.26-3.242-.667-4.217-2.519-9.191-4.223-13.872-4.754-1.94-.22-7.635-.09-9.341.214-7.589 1.35-14.03 4.71-19.14 9.98-5.388 5.559-8.687 12.697-9.483 20.52-.219 2.151-.11 6.225.223 8.37 1.51 9.71 6.884 18.075 15.148 23.577 2.967 1.975 7.667 3.948 11.24 4.718 6.544 1.41 13.516.905 19.625-1.421 6.502-2.476 12.36-7.165 16.307-13.053 5.021-7.492 6.848-16.743 5.068-25.667-.694-3.475-2.208-7.43-4.02-10.492-.642-1.086-.75-1.38-.743-2.026.013-1.385.939-2.332 2.299-2.353 1.44-.022 1.985.594 3.879 4.39 1.36 2.726 2.177 4.945 2.919 7.923.756 3.037.99 4.844 1.083 8.353.089 3.317-.11 5.769-.708 8.697-1.914 9.382-7.182 17.662-14.983 23.551-5.925 4.473-13.681 7.302-20.795 7.587-.986.04-1.995.09-2.241.11-.247.021-1.36-.008-2.474-.063m-.51-17.407c-9.542-1.483-16.757-8.358-18.643-17.765-.436-2.174-.466-6.183-.061-8.222 1.547-7.794 6.755-14.043 13.97-16.76 1.381-.52 2.533-.25 3.13.731.882 1.453.365 2.969-1.24 3.636a38 38 0 0 0-1.758.826c-4.865 2.421-8.413 7.166-9.391 12.561-.25 1.38-.251 4.844-.001 6.03.479 2.27 1.341 4.58 2.218 5.94 2.835 4.399 6.639 7.073 11.547 8.118 1.705.364 4.96.367 6.78.008 2.24-.442 4.591-1.438 6.546-2.774.812-.555 2.591-2.139 3.285-2.925 1.063-1.203 2.337-3.321 3.065-5.097.455-1.11 1.186-1.626 2.304-1.626.92 0 1.411.249 1.972 1 .375.503.498 1.621.245 2.247-2.327 5.777-6.477 10.113-11.944 12.477-3.636 1.572-8.24 2.183-12.025 1.595zm-5.307-12.591c-.702-.377-1.067-.91-1.154-1.686-.051-.453.413-3.249 1.516-9.138.875-4.667 1.647-8.634 1.717-8.816.355-.923 1.574-1.584 2.574-1.395.901.17 1.425.624 2.099 1.815.353.626.71 1.252.792 1.39.082.139.58 1.01 1.105 1.937s1 1.712 1.053 1.746c.172.105 37.513-37.342 37.513-37.62 0-.145-.403-1.873-.897-3.84-.493-1.967-.896-3.801-.896-4.075 0-.296.175-.768.431-1.163.59-.91 11.046-11.292 11.57-11.489.596-.223 1.538-.195 2.034.061.662.342 1.053.918 2.173 3.194l1.042 2.117 1.125-1.104c1.319-1.296 1.558-1.437 2.437-1.437 1.187 0 2.348 1.121 2.348 2.268 0 .884-.315 1.45-1.396 2.513-.544.534-.99 1.022-.992 1.083s.99.609 2.201 1.218c2.45 1.23 3.01 1.695 3.131 2.604.196 1.462.35 1.265-5.75 7.382-3.092 3.101-5.837 5.74-6.1 5.865s-.67.228-.903.229c-.235 0-2.156-.416-4.271-.926l-3.846-.927-18.535 18.52c-10.195 10.186-18.61 18.651-18.702 18.812-.129.226-.119.32.042.417.115.07 1.251.722 2.525 1.45 3.646 2.086 3.57 2.033 3.888 2.733.16.35.29.858.292 1.128.005.688-.495 1.59-1.075 1.941-.348.211-2.942.756-8.963 1.883-4.66.873-8.729 1.587-9.042 1.587s-.802-.125-1.086-.277m7.602-5.716c1.776-.338 3.241-.625 3.257-.638.015-.014-.676-.424-1.535-.912-.86-.488-1.687-1.024-1.84-1.192-.152-.168-.676-.992-1.163-1.831l-.887-1.526-.566 3.02c-.311 1.66-.6 3.171-.642 3.356s-.026.336.036.336c.061 0 1.565-.276 3.34-.613m53.925-49.335 3.626-3.629-1.331-.652-1.33-.652-.728.698c-.4.385-.973.773-1.273.864-1.65.496-3.303-.944-3.046-2.653.075-.505.272-.844.863-1.49l.765-.838-.662-1.333-.662-1.333-3.64 3.642-3.64 3.642.73 2.964.73 2.963 2.76.703c1.52.387 2.863.71 2.987.718.123.008 1.857-1.619 3.85-3.614" style="stroke-width:1" transform="translate(351.828 -651.095)"/></svg>
                    <br>
                    <p>TRATATIVA</p>
                </a>
                <a 
                    class="${this.abaAtiva===`aba2`?`ativo`:``}"
                    @click="${e=>this._alterarAba(e,`aba2`)}">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.933 143.933"><path d="M-325.262 790.455c-2.594-.826-5.168-2.89-6.265-5.023-1.335-2.596-1.27.328-1.27-57.05 0-58.225-.088-54.687 1.425-57.26.811-1.38 2.37-2.939 3.751-3.75 2.29-1.347 2.994-1.425 12.979-1.428l9.297-.003.172-.918c.095-.505.48-1.283.855-1.73 1.276-1.516 1.629-1.585 8.015-1.585 5.467 0 5.834-.03 5.834-.482 0-1.047.876-2.962 1.781-3.894 1.773-1.825 2.389-1.963 8.802-1.963s7.029.138 8.802 1.963c.905.932 1.781 2.847 1.781 3.894 0 .451.367.482 5.834.482 6.387 0 6.74.07 8.015 1.585.375.447.76 1.225.855 1.73l.172.918 9.297.003c7.476.002 9.552.08 10.598.397a10.72 10.72 0 0 1 7.162 7.163c.577 1.9.6 107.783.024 109.679-.915 3.014-2.896 5.334-5.709 6.684l-1.72.825-44.714.05c-35.606.04-44.93-.019-45.773-.287m90.355-4.284c1.44-.669 2.98-2.315 3.474-3.712.54-1.532.54-106.62 0-108.152-.493-1.397-2.034-3.043-3.474-3.712-1.123-.521-1.713-.558-10.385-.637l-9.194-.085-.004 1.672c-.002.92-.075 1.94-.163 2.268l-.16.595h8.131c7.791 0 8.172.023 9.128.56.548.308 1.25 1.01 1.557 1.558l.56.997v101.72l-.56.997c-.308.548-1.009 1.25-1.557 1.557l-.997.56h-82.671l-.997-.56c-.548-.308-1.249-1.009-1.557-1.557l-.56-.997v-101.72l.56-.997c.308-.549 1.009-1.25 1.557-1.558.956-.537 1.337-.56 9.128-.56h8.13l-.159-.595c-.087-.328-.16-1.348-.163-2.268l-.004-1.672-9.194.085c-10.408.095-10.625.134-12.536 2.256-1.813 2.013-1.685-2.231-1.685 56.169 0 58.34-.124 54.162 1.665 56.143 1.089 1.205 2.031 1.746 3.58 2.056.608.121 20.512.203 44.232.18l43.127-.039zm-4.762-57.656v-49.874h-16.933l-1.117 1.084c-1.51 1.466-3.785 2.566-5.954 2.88-2.343.339-30.083.339-32.426 0-2.17-.314-4.443-1.414-5.954-2.88l-1.117-1.084h-16.933v99.748h80.434zm-70.812 38.717c-.311-.15-.698-.565-.86-.92-.402-.883-.41-17.905-.01-18.654.625-1.166 1.565-1.284 10.298-1.284 9.427 0 9.82.068 10.318 1.766.202.685.271 3.777.216 9.569l-.083 8.556-.742.638-.742.638-8.915-.018c-5.562-.01-9.128-.12-9.48-.291m15.778-10.274v-6.35h-12.7v12.7h12.7zm9.267 5.827c-1.254-1.254-.741-3.055 1-3.506.459-.12 8.05-.184 16.87-.144l16.036.072.639.742c.815.948.811 1.887-.011 2.71l-.65.649h-16.68c-16.257 0-16.694-.013-17.204-.523m0-8.466c-1.157-1.158-.814-2.888.686-3.458.366-.14 2.555-.253 4.864-.253 2.31 0 4.498.114 4.864.253 1.5.57 1.843 2.3.686 3.458-.484.483-.897.522-5.55.522s-5.066-.039-5.55-.522m-23.686-14.668c-.974-.432-1.856-1.364-2.232-2.356-.174-.46-.282-3.468-.282-7.88 0-7.995.071-8.391 1.737-9.662l.999-.763 7.165-.083c7.658-.09 8.574.018 9.792 1.148l.724.67.887-.778c1.143-1.003 1.84-1.211 2.77-.826a2.007 2.007 0 0 1 1.08 2.603c-.447 1.078-11.103 11.608-11.962 11.82-1.05.26-1.963-.346-4.53-3.01-1.796-1.862-2.31-2.562-2.304-3.134.01-.844.401-1.442 1.231-1.884 1-.533 1.411-.354 3.232 1.404l1.773 1.712 2.17-2.18c1.415-1.423 2.17-2.386 2.17-2.771v-.59h-12.7v12.7h12.7v-1.178c0-1.535.421-2.417 1.337-2.797.578-.24.9-.229 1.48.049.997.478 1.407 1.39 1.412 3.143.005 1.975-.834 3.627-2.245 4.416-1.025.573-1.287.592-8.335.586-5.479-.005-7.472-.093-8.07-.359m24.03-4.174c-.318-.154-.72-.622-.893-1.04-.405-.978.038-2.156.97-2.58.945-.43 32.714-.422 33.523.009 1.614.86 1.7 2.743.162 3.538-.634.328-3.225.385-16.967.37-10.783-.013-16.412-.112-16.796-.297zm0-8.467c-.318-.153-.72-.622-.893-1.04-.405-.978.038-2.155.97-2.58.91-.414 22.039-.419 22.947-.005.668.305 1.238 1.252 1.224 2.034-.011.576-.496 1.206-1.231 1.598-.769.409-22.17.403-23.018-.007zm-25.127-14.765c-1.392-.561-1.417-.746-1.417-10.4v-8.957l.773-.773.774-.774h18.003l.742.638.742.639.083 8.556c.055 5.791-.014 8.883-.216 9.568-.5 1.707-.87 1.768-10.508 1.75-4.625-.01-8.664-.12-8.976-.247m15.516-10.32v-6.35h-12.7v12.7h12.7zm9.871 3.966c-1.45-.584-1.734-2.334-.557-3.43.566-.527.866-.537 17.207-.537h16.63l.65.65c1.12 1.12.741 2.731-.779 3.309-.9.342-32.302.35-33.15.008zm0-8.467c-1.45-.584-1.734-2.333-.557-3.43.524-.488.924-.536 4.445-.536 3.52 0 3.92.048 4.444.536 1.209 1.126.886 2.865-.639 3.444-.827.315-6.904.304-7.693-.014m22.54-19.487c.583-.315 1.44-.97 1.906-1.455 1.45-1.514 1.667-2.398 1.667-6.828v-3.977h-42.334v3.977c0 4.43.216 5.314 1.667 6.827.933.972 2.014 1.615 3.228 1.918.437.109 7.997.178 16.801.154 15.864-.044 16.017-.05 17.066-.616m-11.244-16.712c0-.266-.307-.772-.683-1.125-.673-.632-.756-.641-5.667-.641s-4.994.009-5.667.641c-.376.353-.683.86-.683 1.125 0 .454.378.483 6.35.483s6.35-.029 6.35-.483" transform="translate(351.828 -651.095)"/></svg>
                    <br>
                    <p>TESTES</p>
                </a>
                <a 
                    class="${this.abaAtiva===`aba3`?`ativo`:``}"
                    @click="${e=>this._alterarAba(e,`aba3`)}">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.933 143.933"><path d="M-319.693 776.282c-2.287-.832-3.61-1.504-4.418-2.244-.615-.561-.631-.725-.63-6.208.002-5.678.364-9.322 1.275-12.838.444-1.715.443-1.726-.287-3.068-.403-.74-.808-1.982-.9-2.759l-.168-1.413h-4.41v-14.095l-.001-14.096-9.687-5.156c-5.328-2.836-9.871-5.42-10.097-5.743-.553-.79-.519-1.95.08-2.683.71-.87 68.17-36.77 69.095-36.77.938 0 68.017 35.677 68.915 36.654.728.79.816 1.95.213 2.81-.23.327-4.772 2.912-10.094 5.742l-9.676 5.146-.004 14.628-.004 14.627-.967.85c-1.7 1.491-8.043 5.565-11.376 7.305-5.718 2.985-11.628 5.173-18.233 6.751-6.048 1.445-8.805 1.754-16.97 1.904-8.108.149-12.323-.16-18.173-1.328-2.257-.452-8.775-2.152-9.104-2.376-.038-.025.261-1.025.664-2.223.656-1.951.794-2.159 1.33-2.005 11.702 3.363 22.467 4.25 33.838 2.79 11.206-1.44 21.633-5.316 30.926-11.498l3.576-2.38v-24.65l-1.753.955c-15.452 8.419-42.514 22.597-43.129 22.597-.482 0-6.963-3.3-17.074-8.695-8.963-4.783-16.362-8.696-16.441-8.696s-.145 2.444-.145 5.432v5.431l1.239.474c1.682.642 3.517 2.319 4.52 4.131.76 1.37.833 1.738.833 4.167 0 2.4-.08 2.808-.791 4.092l-.791 1.427.446 1.721c.912 3.52 1.273 7.16 1.275 12.862l.002 5.655-.823.692c-.452.381-1.81 1.109-3.016 1.618-3.018 1.274-6.368 1.445-9.065.463zm7.124-4.769 1.375-.583-.184-4.646c-.158-4.025-.786-9.227-1.192-9.884-.072-.116-.45-.09-.84.059-.39.148-1.45.27-2.356.27s-1.966-.122-2.356-.27-.769-.175-.84-.059c-.406.657-1.034 5.857-1.192 9.875l-.183 4.637 1.134.512c2.488 1.122 4.15 1.144 6.634.09m-2.017-19.565c3.16-.877 4.211-4.932 1.884-7.26-3.105-3.105-8.415-.06-7.276 4.172.357 1.327 1.668 2.716 2.898 3.071 1.204.349 1.299.35 2.494.018m-8.78-9.063c.848-1.37 2.654-2.873 4.136-3.439l1.22-.466v-13.36l-1.894-1.034c-1.041-.569-2.556-1.396-3.366-1.84l-1.472-.805.012 11.994c.01 10.154.068 11.838.375 10.98.2-.559.644-1.472.99-2.03m74.642-18.882c16.97-9.05 30.855-16.54 30.855-16.644 0-.23-61.539-33.1-61.97-33.1s-62.015 32.871-62.015 33.102c0 .202 24.745 13.463 25.123 13.463.124 0 6.578-3.377 14.343-7.504 12.496-6.642 14.098-7.568 13.948-8.065-.092-.308-.233-1.265-.313-2.126-.174-1.884.45-3.331 2.044-4.73 1.945-1.708 3.237-2.105 6.848-2.105 2.697 0 3.437.098 4.517.596 2.835 1.309 4.46 3.487 4.46 5.98 0 2.503-1.652 4.71-4.46 5.961-1.658.739-5.789.972-7.593.429l-1.252-.377-13.685 7.298c-7.526 4.014-13.68 7.363-13.674 7.443.014.21 31.2 16.8 31.618 16.819.193.008 14.236-7.39 31.206-16.44m-28.016-19.754c1.76-.887 1.71-1.89-.14-2.834-2.84-1.449-8.049-.1-7.286 1.887.206.538 1.608 1.288 2.902 1.553 1.338.274 3.297.012 4.524-.606" style="stroke-width:1" transform="translate(351.828 -651.095)"/></svg>
                    <br>
                    <p>EDUCAÇÃO</p>
                </a>
                <a 
                    class="${this.abaAtiva===`aba4`?`ativo`:``}"
                    @click="${e=>this._alterarAba(e,`aba4`)}">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.933 143.933"><path d="M-305.913 778.189c-14.698-5.763-25.756-10.254-26.335-10.695-.548-.418-1.332-1.433-1.741-2.254l-.744-1.493v-25.804l-4.072-1.546c-3.5-1.328-4.26-1.732-5.413-2.872-.996-.986-1.46-1.738-1.805-2.923-.832-2.861-.697-3.187 5.905-14.205 3.286-5.484 6.195-10.088 6.465-10.231s6.215-1.504 13.21-3.023c6.994-1.519 12.932-2.824 13.196-2.9.433-.126.416-.28-.179-1.627-.361-.819-.963-2.646-1.336-4.06-.585-2.218-.676-3.203-.659-7.145.017-3.97.117-4.931.752-7.291 1.912-7.097 6.303-13.256 12.294-17.242 3.04-2.022 5.494-3.142 9.032-4.122 2.463-.682 3.266-.766 7.338-.77 3.801-.005 4.998.103 7.09.633 7.33 1.86 13.645 6.284 17.729 12.422 2.034 3.056 3.199 5.616 4.131 9.079.636 2.36.735 3.321.752 7.29.018 3.943-.073 4.928-.658 7.146-.374 1.414-.975 3.241-1.337 4.06-.595 1.347-.612 1.5-.178 1.626.263.076 6.2 1.38 13.192 2.896s12.936 2.877 13.209 3.023 3.184 4.752 6.47 10.236c6.601 11.018 6.737 11.344 5.905 14.205-.345 1.186-.809 1.937-1.807 2.923-1.148 1.135-1.929 1.551-5.402 2.88l-4.06 1.554-.082 13.164-.082 13.165-.802 1.364c-.44.75-1.282 1.682-1.869 2.07-1.346.891-51.243 20.434-52.123 20.415-.357-.01-12.05-4.484-25.986-9.948m23.697-29.621-.075-11.29-3.934 6.557c-4.085 6.81-5.021 7.946-7.047 8.552-2.582.774-2.84.696-20.217-6.104-9.039-3.536-16.487-6.43-16.553-6.43-.065 0-.119 5.074-.119 11.275 0 11.771.058 12.373 1.247 12.982.336.173 10.964 4.358 23.617 9.3l23.006 8.987.075-11.27c.04-6.198.04-16.35 0-22.56m28.075 24.748c12.496-4.89 22.996-9.032 23.332-9.205 1.189-.611 1.246-1.21 1.246-13.013 0-10.649-.029-11.295-.5-11.117-.275.103-7.725 3.01-16.555 6.46-17.285 6.754-17.718 6.88-20.171 5.855-1.87-.782-2.775-1.909-6.401-7.965-1.993-3.327-3.794-6.303-4.004-6.613-.32-.473-.381 3.111-.381 22.107 0 18.025.073 22.642.357 22.526.196-.08 10.581-4.146 23.077-9.035m-40.072-25.825c.202-.161 2.684-4.152 5.516-8.87 3.494-5.818 5.042-8.642 4.814-8.783-.641-.396-47.445-18.635-47.547-18.528-.596.622-10.162 17.002-10.162 17.4 0 1.412.86 1.802 23.577 10.687 14.339 5.609 22.496 8.66 22.864 8.554.314-.091.736-.298.938-.46m52.455-8.077c22.805-8.908 23.627-9.28 23.627-10.703 0-.398-9.564-16.777-10.16-17.398-.097-.102-46.952 18.156-47.57 18.537-.202.125 1.5 3.231 4.714 8.6 4.651 7.772 5.99 9.691 6.756 9.691.16 0 10.346-3.927 22.633-8.727m-15.89-21.904c12.138-4.747 22.026-8.675 21.973-8.728-.054-.054-4.506-1.06-9.895-2.236-9.536-2.082-9.807-2.124-10.183-1.588-3.815 5.446-10.297 9.801-17.148 11.52-3.584.9-10.296.911-13.82.024-6.919-1.743-13.44-6.106-17.245-11.537-.37-.53-.682-.48-10.18 1.583-5.388 1.171-9.842 2.174-9.897 2.229-.105.104 43.544 17.286 44.038 17.335.158.015 10.218-3.856 22.357-8.602m-16.541-5.703c3.33-.732 7.457-2.75 10.114-4.948 9.065-7.5 11.73-20.312 6.38-30.67-4.307-8.34-12.735-13.516-22.024-13.525-4.669-.004-7.69.732-11.825 2.883-4.571 2.379-8.257 6.195-10.628 11.004-1.884 3.822-2.31 5.558-2.479 10.082-.12 3.237-.048 4.197.491 6.53 2.709 11.723 13.718 19.99 25.727 19.318.865-.048 2.774-.352 4.244-.674m-11.462-9.8c-.59-.211-1.812-1.008-2.715-1.77-4.88-4.124-9.13-7.81-9.561-8.296-.857-.964-1.368-2.602-1.368-4.387 0-4.082 2.733-6.839 6.796-6.853 2.406-.009 3.417.47 6.425 3.043l2.55 2.18 6.046-6.016c3.326-3.309 6.497-6.251 7.047-6.538 1.487-.777 4.906-.723 6.466.103 2.347 1.242 3.537 3.313 3.537 6.156 0 3.096-.43 3.664-9.925 13.125-6.191 6.169-8.866 8.644-9.798 9.067-1.494.677-3.894.759-5.5.186m11.983-12.793c5.982-5.97 8.412-8.58 8.544-9.18.272-1.237-.623-2.314-2.021-2.431-1.073-.09-1.181.002-8.13 6.93-6.228 6.21-7.147 7.022-7.947 7.022-.929 0-1.804-.617-6.118-4.315-1.048-.898-2.183-1.721-2.522-1.829-1.62-.514-3.272 1.354-2.59 2.929.188.432 2.589 2.683 5.336 5.001 4.448 3.753 5.11 4.215 6.042 4.215.99 0 1.498-.45 9.406-8.342" style="stroke-width:1" transform="translate(351.828 -651.095)"/></svg>
                    <br>
                    <p>ENCERRAR</p>
                </a>

                
            </nav>
        `}};customElements.define(`page-os-completa`,En);var Dn=`:host{box-sizing:border-box;color:var(--text-color);display:block}*,:before,:after{box-sizing:inherit;margin:0;padding:0}.button-add{background-color:var(--destaque-color);appearance:none;color:#fff;cursor:pointer;border:none;border-radius:6px;justify-content:center;align-items:center;width:2rem;height:2rem;margin-right:1rem;padding:5px 12px;font-size:1.5rem;display:flex}.button-edit{appearance:none;cursor:pointer;background-color:#3182ce;border:none;border-radius:6px;justify-content:center;align-items:center;width:2.5rem;height:2.5rem;padding:.1rem;font-size:1.5rem;display:flex}.button-delete{appearance:none;cursor:pointer;background-color:#c62828;border:none;border-radius:6px;justify-content:center;align-items:center;width:2.5rem;height:2.5rem;padding:.4rem;font-size:1.5rem;display:flex}.container-scripts{flex-direction:column;gap:.5rem;display:flex}.container-buttons{gap:.5rem;display:flex}.container-titulo{justify-content:space-between;align-items:center;gap:.5rem;display:flex}.container-script{background-color:var(--cards-background);border:3px solid var(--btn-border-color);border-radius:1rem;flex-direction:column;gap:.5rem;margin:.5rem;padding:1rem;display:flex}h2{color:var(--text-color);text-align:center}h3{color:var(--text-color);text-align:center;margin:1rem}p{font-size:var(--paragraph);text-align:left;font-weight:100}.header-superior{background-color:var(--header-color);box-sizing:border-box;justify-content:space-between;align-items:center;height:auto;margin:0;padding:.7rem;display:flex}@media (width>=1024px){.header-superior{border-radius:100rem;margin-top:.5rem;padding:.4rem}}.logo{height:2rem}.container-equipamentos{flex-direction:column;gap:.5rem;display:flex}.container-equipamentos-item{flex-direction:row;justify-content:space-between;display:flex}.destaque-troca{background-color:var(--destaque-color);border-radius:.5rem;padding:.2rem}.destaque-local{background-color:#3182ce;border-radius:.5rem;padding:.2rem}.form-container{max-width:auto;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.form-group{flex-direction:column;margin-bottom:20px;display:flex}.form-group-row{align-items:center;gap:8px;margin-bottom:15px;display:flex}.form-label{color:var(--btn-text-background-color);margin-bottom:6px;font-size:17px;font-weight:600}.form-label-inline{color:#333;cursor:pointer;font-size:14px}.container-velocidade{flex-direction:column;gap:.5rem;display:flex}.container-velocidade-item{flex-direction:row;justify-content:space-between;display:flex}.destaque{background-color:var(--destaque-color);border-radius:.5rem;padding:.2rem}.form-input,.form-select,.form-textarea{appearance:none;box-sizing:border-box;color:#1a202c;background-color:#f8fafc;border:2px solid #e2e8f0;border-radius:6px;width:100%;padding:10px 12px;font-family:inherit;font-size:15px;transition:border-color .2s,background-color .2s}.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--destaque-color);background-color:#fff;outline:none}.form-select{cursor:pointer;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");background-position:right 12px center;background-repeat:no-repeat;background-size:16px;padding-right:40px}.form-textarea{resize:vertical;min-height:100px}.form-radio,.form-checkbox{appearance:none;font:inherit;color:#3182ce;cursor:pointer;background-color:#f8fafc;border:2px solid #cbd5e1;place-content:center;width:18px;height:18px;margin:0;transition:border-color .2s;display:grid}.form-radio{border-radius:50%}.form-checkbox{border-radius:4px}.form-radio:before{content:"";background-color:currentColor;border-radius:50%;width:8px;height:8px;transition:transform .12s ease-in-out;transform:scale(0)}.form-checkbox:before{content:"";clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%);background-color:currentColor;width:10px;height:10px;transition:transform .12s ease-in-out;transform:scale(0)}.form-radio:checked:before,.form-checkbox:checked:before{transform:scale(1)}.form-radio:checked,.form-checkbox:checked{border-color:var(--destaque-color)}.form-radio:focus,.form-checkbox:focus{outline:2px solid #ebf8ff}.form-button{appearance:none;background-color:var(--destaque-color);color:#fff;cursor:pointer;border:none;border-radius:6px;width:100%;padding:12px 24px;font-family:inherit;font-size:15px;font-weight:600;transition:background-color .2s}.form-button:hover,.form-button:active{background-color:var(--destaque-color)}.botao-close{appearance:none;color:#fff;cursor:pointer;background-color:var(--destaque-color);border:none;border-radius:6px;height:30px;padding:5px 12px;display:inline-block}.modal-backdrop{z-index:9000;background:#00000080;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:fixed;top:0;left:0}.modal-content{background:var(--cards-background);color:var(--text-color);border-radius:8px;width:95%;padding:20px}@media (width>=1024px){.modal-content{width:500px}}.radio-input input{display:none}.radio-input{--container_width:100%;color:#000;width:var(--container_width);background-color:#fff;border:1px solid #3534343a;border-radius:10px;align-items:center;display:flex;position:relative;overflow:hidden}.radio-input label{cursor:pointer;z-index:1;letter-spacing:-1px;justify-content:center;align-items:center;width:100%;padding:10px;font-size:14px;font-weight:600;display:flex}.selection{z-index:0;width:50%;height:100%;transition:all .15s;display:none;position:absolute;top:0;left:0}.radio-input label:has(input:checked){color:#fff}.radio-input label:has(input:checked)~.selection{background-color:var(--destaque-color);display:inline-block}.radio-input label:first-child:has(input:checked)~.selection{transform:translateX(calc(50% / 20%))}.radio-input label:nth-child(2):has(input:checked)~.selection{transform:translate(100%)}`,On=`:host{box-sizing:border-box;color:var(--text-color);display:block}*,:before,:after{box-sizing:inherit;margin:0;padding:0}.button-add{background-color:var(--destaque-color);appearance:none;color:#fff;cursor:pointer;border:none;border-radius:6px;justify-content:center;align-items:center;width:2rem;height:2rem;margin-right:1rem;padding:5px 12px;font-size:1.5rem;display:flex}.button-edit{appearance:none;cursor:pointer;background-color:#3182ce;border:none;border-radius:6px;justify-content:center;align-items:center;width:2.5rem;height:2.5rem;padding:.1rem;font-size:1.5rem;display:flex}.button-delete{appearance:none;cursor:pointer;background-color:#c62828;border:none;border-radius:6px;justify-content:center;align-items:center;width:2.5rem;height:2.5rem;padding:.4rem;font-size:1.5rem;display:flex}.container-scripts{flex-direction:column;gap:.5rem;display:flex}.container-buttons{gap:.5rem;display:flex}.container-titulo{justify-content:space-between;align-items:center;gap:.5rem;display:flex}.container-script{background-color:var(--cards-background);border:3px solid var(--btn-border-color);border-radius:1rem;flex-direction:column;gap:.5rem;margin:.5rem;padding:1rem;display:flex}h2{color:var(--text-color);text-align:center}h3{color:var(--text-color);text-align:center;margin:1rem}p{font-size:var(--paragraph);text-align:left;font-weight:100}.header-superior{background-color:var(--header-color);box-sizing:border-box;justify-content:space-between;align-items:center;height:auto;margin:0;padding:.7rem;display:flex}@media (width>=1024px){.header-superior{border-radius:100rem;margin-top:.5rem;padding:.4rem}}.logo{height:2rem}.container-equipamentos{flex-direction:column;gap:.5rem;display:flex}.container-equipamentos-item{flex-direction:row;justify-content:space-between;display:flex}.destaque-troca{background-color:var(--destaque-color);border-radius:.5rem;padding:.2rem}.destaque-local{background-color:#3182ce;border-radius:.5rem;padding:.2rem}.form-container{max-width:auto;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.form-group{flex-direction:column;margin-bottom:20px;display:flex}.form-group-row{align-items:center;gap:8px;margin-bottom:15px;display:flex}.form-label{color:var(--btn-text-background-color);margin-bottom:6px;font-size:17px;font-weight:600}.form-label-inline{color:#333;cursor:pointer;font-size:14px}.container-velocidade{flex-direction:column;gap:.5rem;display:flex}.container-velocidade-item{flex-direction:row;justify-content:space-between;display:flex}.destaque{background-color:var(--destaque-color);border-radius:.5rem;padding:.2rem}.form-input,.form-select,.form-textarea{appearance:none;box-sizing:border-box;color:#1a202c;background-color:#f8fafc;border:2px solid #e2e8f0;border-radius:6px;width:100%;padding:10px 12px;font-family:inherit;font-size:15px;transition:border-color .2s,background-color .2s}.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--destaque-color);background-color:#fff;outline:none}.form-select{cursor:pointer;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");background-position:right 12px center;background-repeat:no-repeat;background-size:16px;padding-right:40px}.form-textarea{resize:vertical;min-height:100px}.form-radio,.form-checkbox{appearance:none;font:inherit;color:#3182ce;cursor:pointer;background-color:#f8fafc;border:2px solid #cbd5e1;place-content:center;width:18px;height:18px;margin:0;transition:border-color .2s;display:grid}.form-radio{border-radius:50%}.form-checkbox{border-radius:4px}.form-radio:before{content:"";background-color:currentColor;border-radius:50%;width:8px;height:8px;transition:transform .12s ease-in-out;transform:scale(0)}.form-checkbox:before{content:"";clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%);background-color:currentColor;width:10px;height:10px;transition:transform .12s ease-in-out;transform:scale(0)}.form-radio:checked:before,.form-checkbox:checked:before{transform:scale(1)}.form-radio:checked,.form-checkbox:checked{border-color:var(--destaque-color)}.form-radio:focus,.form-checkbox:focus{outline:2px solid #ebf8ff}.form-button{appearance:none;background-color:var(--destaque-color);color:#fff;cursor:pointer;border:none;border-radius:6px;width:100%;padding:12px 24px;font-family:inherit;font-size:15px;font-weight:600;transition:background-color .2s}.form-button:hover,.form-button:active{background-color:var(--destaque-color)}.botao-close{appearance:none;color:#fff;cursor:pointer;background-color:var(--destaque-color);border:none;border-radius:6px;height:30px;padding:5px 12px;display:inline-block}.modal-backdrop{z-index:9000;background:#00000080;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:fixed;top:0;left:0}.modal-content{background:var(--cards-background);color:var(--text-color);border-radius:8px;width:95%;padding:20px}@media (width>=1024px){.modal-content{width:500px}}.radio-input input{display:none}.radio-input{--container_width:100%;color:#000;width:var(--container_width);background-color:#fff;border:1px solid #3534343a;border-radius:10px;align-items:center;display:flex;position:relative;overflow:hidden}.radio-input label{cursor:pointer;z-index:1;letter-spacing:-1px;justify-content:center;align-items:center;width:100%;padding:10px;font-size:14px;font-weight:600;display:flex}.selection{z-index:0;width:50%;height:100%;transition:all .15s;display:none;position:absolute;top:0;left:0}.radio-input label:has(input:checked){color:#fff}.radio-input label:has(input:checked)~.selection{background-color:var(--destaque-color);display:inline-block}.radio-input label:first-child:has(input:checked)~.selection{transform:translateX(calc(50% / 20%))}.radio-input label:nth-child(2):has(input:checked)~.selection{transform:translate(100%)}`,kn=class extends I{static properties={objeto:{type:Object}};static get styles(){return o`${a(On)}`}constructor(){super(),this.objeto={}}firstUpdated(){}connectedCallback(){super.connectedCallback()}_notificar_exclusao(){let e=new CustomEvent(`delete_item`,{detail:{id:this.objeto.id},bubbles:!0,composed:!0});this.dispatchEvent(e)}_notificar_edicao(){let e=new CustomEvent(`editar_item`,{detail:{id:this.objeto.id,categoria:this.objeto.categoria,titulo:this.objeto.titulo,descricao:this.objeto.descricao},bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){return D`
            <!--Retorno renderizado-->
            <div class="container-script">
                <div class="container-titulo">
                    <div><h4>${this.objeto.titulo}</h4></div>
                    <div class="container-buttons">
                        <button 
                            @click="${this._notificar_edicao}"
                            class="button-edit"
                            type="button" class="form-button">
                                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="1.5rem" viewBox="0 0 143.933 143.933"><path d="M-331.048 790.665c-3.652-.793-6.719-2.535-9.636-5.473-2.991-3.013-4.424-5.455-5.37-9.152-.621-2.43-.64-3.737-.64-43.268 0-44.675-.1-42.27 1.93-46.635 1.23-2.64 3.162-5.161 5.276-6.88 2.068-1.683 6.271-3.742 8.627-4.226 1.094-.226 7.108-.354 16.547-.353 14.135.001 14.877.03 15.867.635 2.784 1.697 2.644 5.981-.248 7.532-1.022.548-2.17.592-15.246.592-11.96 0-14.409.08-15.873.514-3.292.978-5.568 2.989-7.114 6.285l-.844 1.8-.086 40.214c-.095 44.275-.196 41.898 1.913 45.081 1.352 2.041 3.504 3.606 6.075 4.417 2.016.636 2.934.65 41.22.65 43.46 0 41.427.098 44.71-2.147 1.915-1.308 3.068-2.693 4.095-4.915.688-1.491.714-1.973.871-16.461.18-16.605.106-16.07 2.42-17.169 2.172-1.03 4.654-.262 5.748 1.777.549 1.023.593 2.175.588 15.549-.005 16.09-.07 16.726-2.163 21.077-1.609 3.345-5.448 7.182-8.864 8.858-4.66 2.286-2.647 2.195-47.474 2.166-32.726-.02-40.675-.11-42.329-.468m15.969-25.443c-2.9-.694-5.85-3.054-7.25-5.8-1.353-2.651-1.386-3.593-.521-14.745 1.06-13.682 1.313-15.502 2.507-18.086.91-1.971 3.164-4.299 34.44-35.571 30.84-30.838 33.63-33.543 35.588-34.486 2.938-1.417 5.857-1.864 8.768-1.343 4.557.814 5.307 1.384 16.219 12.313 8.175 8.19 10.067 10.254 10.786 11.773 1.948 4.11 2.019 8.623.198 12.664-1.046 2.322-1.661 2.964-33.532 34.929-17.856 17.91-33.31 33.195-34.34 33.967-3.343 2.505-4.2 2.69-17.27 3.738-12.118.97-13.927 1.046-15.593.647m14.299-9.39c8.315-.67 11.62-1.054 12.33-1.43.533-.283 6.07-5.625 12.305-11.873s11.491-11.27 11.681-11.163c.19.108.23.069.089-.086-.141-.154 5.553-6.091 12.653-13.193l12.909-12.912-12.167-12.163-12.166-12.164-24.497 24.477c-14.314 14.302-24.669 24.895-24.91 25.484-.5 1.22-2.238 23.17-1.928 24.362.198.762 1.189 1.53 2.017 1.563.178.013 5.436-.399 11.684-.902zm73.235-61.93c5.901-5.922 6.57-7.259 5.147-10.302-.393-.842-3.786-4.456-9.645-10.275-7.802-7.748-9.228-9.027-10.419-9.34-2.7-.713-3.547-.215-9.253 5.442l-5.116 5.073 12.09 12.093c6.65 6.652 12.167 12.094 12.26 12.094.091 0 2.313-2.154 4.936-4.786" style="fill:#fefcf4;stroke-width:1" transform="translate(351.828 -651.095)"/></svg>
                            </button>
                        <button 
                            @click="${this._notificar_exclusao}"
                            class="button-delete"
                            type="button" class="form-button">
                                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 143.933 143.933"><path d="M-279.861 657.469c-9.029 0-14.21.03-17.196.158-2.984.129-3.508.387-3.564.426-.782.548-1.172 1.047-1.545 2.457s-.566 3.685-.566 7.094v8.361H-330.6l-1.459 1.459c-.882.882-1.168 1.3-1.212 1.412s-.081.32.05 1.3c.247 1.837 1.14 2.993 2.274 3.519.176.01.393.022.707.035.736.028 1.813.056 3.178.081 2.728.051 6.614.094 11.363.127 9.496.067 22.444.094 36.543.063l50.468-.113.922-.922c.549-.549 1.113-1.682 1.256-2.746.136-1.011.1-1.238.059-1.346s-.324-.521-1.213-1.41l-1.46-1.459h-27.866v-8.362c0-3.408-.194-5.683-.567-7.093s-.763-1.91-1.545-2.457c-.056-.04-.581-.297-3.566-.426-2.985-.128-8.165-.159-17.193-.159m-14.123 8.17h28.246v10.326h-28.246V665.64m-29.207 28.713c-.897-.027-1.788.295-2.731 1.238l-1.123 1.125.16 37.781c.082 19.294.126 28.961.305 34.064.09 2.552.218 3.954.37 4.77.15.816.278 1.057.6 1.756 2.837 6.147 7.688 10.647 13.579 12.701 1.27.444 2.19.651 6.633.774 4.442.122 12.162.108 26.408.045l30.19-.133 3.497-1.72c4.581-2.257 8.362-6.044 10.592-10.604l1.711-3.498.162-38.155.16-37.781-1.125-1.125c-.942-.943-1.832-1.265-2.728-1.238s-1.91.439-2.967 1.496l-1.385 1.382v72.483l-1.836 3.512c-1.385 2.651-2.878 4.145-5.53 5.53l-3.513 1.835h-56.2l-3.513-1.834c-2.651-1.386-4.146-2.88-5.53-5.531l-1.835-3.512V697.23l-1.385-1.382c-1.056-1.057-2.07-1.47-2.966-1.496m31.785 12.309a9 9 0 0 0-1.012.095c-1.064.143-2.197.709-2.746 1.258l-.922.92v23.38c0 11.694.013 17.775.158 20.962.072 1.593.192 2.458.283 2.812.092.354 0 .158.207.388.409.454 1.555 1.235 1.588 1.248.983.403 1.624.454 2.205.325.582-.129 1.229-.48 2.057-1.309l1.383-1.384v-45.987l-1.457-1.457c-.889-.889-1.303-1.171-1.41-1.213-.054-.02-.138-.04-.334-.038m23.09 0c-.197-.003-.28.017-.335.038-.108.042-.52.324-1.41 1.213l-1.459 1.457v45.987l1.46 1.458c.889.89 1.302 1.171 1.41 1.213s.334.077 1.346-.058c1.063-.143 2.197-.707 2.746-1.256l.92-.922v-46.858l-.92-.92c-.55-.548-1.682-1.115-2.745-1.257h-.002a9 9 0 0 0-1.011-.095" style="fill:#fefcf4; baseline-shift:baseline;display:inline;overflow:visible;vector-effect:none;" transform="translate(351.828 -651.095)"/></svg>
                            </button>
                    </div>
                </div>
                <div>
                    <p>${this.objeto.descricao}</p>
                </div>
            </div>
        `}};customElements.define(`card-script`,kn);var An=class extends I{static properties={itens:{type:Object},modal:{type:Boolean},script_edicao:{type:Object},modal_exclusao:{type:Boolean},tipo_mudanca:{type:Boolean},item_edicao:{type:Boolean}};static get styles(){return o`${a(Dn)}`}constructor(){super(),this.itens=[],this.modal=!1,this.script_edicao={},this.tipo_mudanca=!0,this.item_edicao={categoria:null,titulo:null,descricao:null},this.modal_exclusao=!1}firstUpdated(){}async connectedCallback(){super.connectedCallback();let e=await Z();this.itens=e}_Fechar_Modal=()=>{this.modal=!1};_Abrir_Modal=()=>{this.tipo_mudanca=!0,this.modal=!0};_Abrir_Modal_Edicao=e=>{this.tipo_mudanca=!1,this.id_item=e.detail.id;let t=e.detail.categoria,n=e.detail.titulo,r=e.detail.descricao;this.item_edicao={categoria:t,titulo:n,descricao:r},this.modal=!0};async _Salvar_Novo_Script_Banco(e){let t=this.renderRoot?.querySelector(`#tipo-categoria`).value,n=this.renderRoot?.querySelector(`#titulo-novo`).value,r=this.renderRoot?.querySelector(`#message`).value;if(n===``||r===``){R(`erro`,`Você precisa preencher os campos de Titulo e Script!`);return}Pt({categoria:t,titulo:n,descricao:r}),this.itens=await Z(),this.modal=!1}async _Salvar_Edicao_Script_Banco(e){let t=this.renderRoot?.querySelector(`#tipo-categoria`).value,n=this.renderRoot?.querySelector(`#titulo-novo`).value,r=this.renderRoot?.querySelector(`#message`).value;if(n===``||r===``){R(`erro`,`Você precisa preencher os campos de Titulo e Script!`);return}It({id:this.id_item,categoria:t,titulo:n,descricao:r}),this.item_edicao={categoria:null,titulo:null,descricao:null},this.itens=await Z(),this.modal=!1}_Confirmar_Exclusao_Banco=e=>{this.id_item=e.detail.id,this.modal_exclusao=!0};_Fechar_Modal_Exclusao=()=>{this.modal_exclusao=!1};async _Deletar_Script_Banco(e,t){Ft(t),R(`sucesso`,`O Script foi removido da Lista`),this.itens=await Z(),this._Fechar_Modal_Exclusao()}render(){return D`
            <!--Retorno renderizado-->
            <header class="header-superior">
                <img class="logo" src="letter-logo.svg" alt="letter-logo">         
            </header>
            <br>
            <h2>Scripts Modelos</h2>
            
            <div class="form-group" style="margin-top: 10px; align-items: end;">
                <button 
                    @click="${this._Abrir_Modal}"
                    class="button-add"
                    type="button" class="form-button">+</button>
            </div>


            <h3>Ping</h3>
            <hr>

            <div class="container-scripts">
                ${this.itens.map((e,t)=>{if(e.categoria===`Ping`)return D`
                    <card-script
                        .objeto="${e}"
                        @delete_item="${this._Confirmar_Exclusao_Banco}"
                        @editar_item="${this._Abrir_Modal_Edicao}"
                    ></card-script>
                    `})}
            </div>

            <h3>Tracert</h3>
            <hr>

            <div class="container-scripts">
                ${this.itens.map((e,t)=>{if(e.categoria===`Tracert`)return D`
                    <card-script
                        .objeto="${e}"
                        @delete_item="${this._Confirmar_Exclusao_Banco}"
                        @editar_item="${this._Abrir_Modal_Edicao}"
                    ></card-script>
                    `})}
            </div>

            <h3>Velocidade</h3>
            <hr>
            
            <div class="container-scripts">
                ${this.itens.map((e,t)=>{if(e.categoria===`Velocidade`)return D`
                    <card-script
                        .objeto="${e}"
                        @delete_item="${this._Confirmar_Exclusao_Banco}"
                        @editar_item="${this._Abrir_Modal_Edicao}"
                    ></card-script>
                    `})}
            </div>


            <h3>Fibra</h3>
            <hr>
            
            <div class="container-scripts">
                ${this.itens.map((e,t)=>{if(e.categoria===`Fibra`)return D`
                    <card-script
                        .objeto="${e}"
                        @delete_item="${this._Confirmar_Exclusao_Banco}"
                        @editar_item="${this._Abrir_Modal_Edicao}"
                    ></card-script>
                    `})}
            </div>


            <h3>Fonte</h3>
            <hr>
            
            <div class="container-scripts">
                ${this.itens.map((e,t)=>{if(e.categoria===`Fonte`)return D`
                    <card-script
                        .objeto="${e}"
                        @delete_item="${this._Confirmar_Exclusao_Banco}"
                        @editar_item="${this._Abrir_Modal_Edicao}"
                    ></card-script>
                    `})}
            </div>


            <h3>Troca de Equipamento</h3>
            <hr>
            
            <div class="container-scripts">
                ${this.itens.map((e,t)=>{if(e.categoria===`Troca de Equipamento`)return D`
                    <card-script
                        .objeto="${e}"
                        @delete_item="${this._Confirmar_Exclusao_Banco}"
                        @editar_item="${this._Abrir_Modal_Edicao}"
                    ></card-script>
                    `})}
            </div>


            <h3>Site Survey</h3>
            <hr>
            
            <div class="container-scripts">
                ${this.itens.map((e,t)=>{if(e.categoria===`Site Survey`)return D`
                    <card-script
                        .objeto="${e}"
                        @delete_item="${this._Confirmar_Exclusao_Banco}"
                        @editar_item="${this._Abrir_Modal_Edicao}"
                    ></card-script>
                    `})}
            </div>


            <h3>Relato do Cliente</h3>
            <hr>
            
            <div class="container-scripts">
                ${this.itens.map((e,t)=>{if(e.categoria===`Relato do Cliente`)return D`
                    <card-script
                        .objeto="${e}"
                        @delete_item="${this._Confirmar_Exclusao_Banco}"
                        @editar_item="${this._Abrir_Modal_Edicao}"
                    ></card-script>
                    `})}
            </div>


            <h3>Encaminhar Externa</h3>
            <hr>
            
            <div class="container-scripts">
                ${this.itens.map((e,t)=>{if(e.categoria===`Encaminhar Externa`)return D`
                    <card-script
                        .objeto="${e}"
                        @delete_item="${this._Confirmar_Exclusao_Banco}"
                        @editar_item="${this._Abrir_Modal_Edicao}"
                    ></card-script>
                    `})}
            </div>


            <h3>Outros</h3>
            <hr>
            
            <div class="container-scripts">
                ${this.itens.map((e,t)=>{if(e.categoria===`Outros`)return D`
                    <card-script
                        .objeto="${e}"
                        @delete_item="${this._Confirmar_Exclusao_Banco}"
                        @editar_item="${this._Abrir_Modal_Edicao}"
                    ></card-script>
                    `})}
            </div>

            ${this.modal?D`
                <div
                    class="modal-backdrop"
                    @click=${this._Fechar_Modal}
                >
                    <div
                        class="modal-content"
                        
                        @click=${e=>e.stopPropagation()}
                    >
                        <h3>Adicionar Novo Script</h3>
                        <br>
                        
                        <div class="container_scroll">

                            <div class="form-group">
                                <label for="tipo-categoria" class="form-label">Categoria do Script</label>
                                <select 
                                    @change=""
                                    id="tipo-categoria" name="tipo-categoria" class="form-select">
                                    <option ?selected="${this.item_edicao.categoria===`Ping`}" value="Ping">Ping</option>
                                    <option ?selected="${this.item_edicao.categoria===`Tracert`}" value="Tracert">Tracert</option>
                                    <option ?selected="${this.item_edicao.categoria===`Velocidade`}" value="Velocidade">Velocidade</option>
                                    <option ?selected="${this.item_edicao.categoria===`Fibra`}" value="Fibra">Fibra</option>
                                    <option ?selected="${this.item_edicao.categoria===`Fonte`}" value="Fonte">Fonte</option>
                                    <option ?selected="${this.item_edicao.categoria===`Troca de Equipamento`}" value="Troca de Equipamento">Troca de Equipamento</option>
                                    <option ?selected="${this.item_edicao.categoria===`Site Survey`}" value="Site Survey">Site Survey</option>
                                    <option ?selected="${this.item_edicao.categoria===`Relato do Cliente`}" value="Relato do Cliente">Relato do Cliente</option>
                                    <option ?selected="${this.item_edicao.categoria===`Encaminhar Externa`}" value="Encaminhar Externa">Encaminhar Externa</option>
                                    <option ?selected="${this.item_edicao.categoria===`Outros`}" value="Outros">Outros</option>
                                    
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="titulo-novo" class="form-label">Título</label>
                                <input 
                                    placeholder="Forneça um titulo para seu Script"
                                    type="text" 
                                    @change=""
                                    id="titulo-novo" name="titulo-novo" 
                                    .value="${this.item_edicao.titulo}" class="form-input">
                            </div>

                            <div class="form-group">
                                <label for="message" class="form-label">Script</label>
                                <textarea
                                    @change=""
                                    placeholder="Elabore a estrutura de seu script padrão!"
                                    id="message" name="message" rows="10" cols="30" class="form-textarea"
                                    .value="${this.item_edicao.descricao}"></textarea>
                            </div>

                        </div>
                        
                        <div class="form-group" style="margin-top: 10px; display: flex; flex-direction: row; gap:.5rem">
                            ${this.tipo_mudanca?D`
                                <button 
                                    @click="${this._Salvar_Novo_Script_Banco}"
                                    style="background-color: var(--btn-background-color); color: var(--text-color);"
                                    type="button" class="form-button")">Salvar</button>
                            `:D`
                                <button 
                                    @click="${e=>this._Salvar_Edicao_Script_Banco(e,this.id_item)}"
                                    style="background-color: var(--btn-background-color); color: var(--text-color);"
                                    type="button" class="form-button")">Editar</button>
                            `}
                            
                            <button 
                                @click="${this._Fechar_Modal}"
                                type="button" class="form-button")">Fechar</button>
                        </div>

                    </div>
                </div>    
            `:``}

            <!-- Modal Exclusão -->

            ${this.modal_exclusao?D`
                <div
                    class="modal-backdrop"
                    @click=${this._Fechar_Modal_Exclusao}
                >
                    <div
                        class="modal-content"
                        
                        @click=${e=>e.stopPropagation()}
                    >
                        <h3>Excluir Script!</h3>
                        <br>
                        
                        <div class="container_scroll">

                            <div class="form-group">
                                <label for="tipo-categoria" class="form-label">Tem certeza que deseja excluir o script?</label>
                            </div>

                        </div>
                        
                        <div class="form-group" style="margin-top: 10px; display: flex; flex-direction: row; gap:.5rem">
                            <button 
                                @click="${e=>this._Deletar_Script_Banco(e,this.id_item)}"
                                style="background-color: var(--btn-background-color); color: var(--text-color);"
                                type="button" class="form-button")">Sim</button>
                            <button 
                                @click="${this._Fechar_Modal_Exclusao}"
                                type="button" class="form-button")">Não</button>
                        </div>

                    </div>
                </div>    
            `:``}


            <menu-inferior></menu-inferior>
        `}};customElements.define(`gerenciar-script`,An);var jn=class extends I{static properties={notificacoes:{type:Array}};static get styles(){return o`
            /* Container fixo no canto superior direito */
            .toast-container {
                position: fixed;
                top: 20px;
                right: 0px;
                z-index: 9999;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            /* Estilo base do balão de mensagem */
            .toast {
                padding: 15px 20px;
                border-radius: 4px;
                
                font-family: sans-serif;
                
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                min-width: 250px;
                animation: deslizar 0.3s ease-out;
            }

            /* Cores por Categoria */
            .toast.sucesso {
                color: #122c00;
                background: rgba(0, 255, 145, 0.44);
                backdrop-filter: blur(4px) saturate(176%);
                -webkit-backdrop-filter: blur(4px) saturate(176%);
                border: 1px solid rgba(255, 255, 255, 0.37);
                border-radius: 19px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
                }
            .toast.erro { 
                color: #4e0008;
                background: rgba(255, 133, 133, 0.5);
                backdrop-filter: blur(4px) saturate(176%);
                -webkit-backdrop-filter: blur(4px) saturate(176%);
                border: 1px solid rgba(255, 255, 255, 0.37);
                border-radius: 19px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);    
            }
            .toast.aviso { 
                color: #302400;
                background: rgba(251, 255, 0, 0.44);
                backdrop-filter: blur(4px) saturate(176%);
                -webkit-backdrop-filter: blur(4px) saturate(176%);
                border: 1px solid rgba(255, 255, 255, 0.37);
                border-radius: 19px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);    
            }
            .toast.info { 
                color: #001417;
                background: rgba(0, 247, 255, 0.44);
                backdrop-filter: blur(4px) saturate(176%);
                -webkit-backdrop-filter: blur(4px) saturate(176%);
                border: 1px solid rgba(255, 255, 255, 0.37);
                border-radius: 19px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);    
            }

            /* Animação para surgir da direita */
            @keyframes deslizar {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `}constructor(){super(),this.notificacoes=[]}mostrarNotificacao(e,t){let n=Date.now(),r={id:n,categoria:e,mensagem:t};this.notificacoes=[...this.notificacoes,r],setTimeout(()=>{this.notificacoes=this.notificacoes.filter(e=>e.id!==n)},4e3)}connectedCallback(){super.connectedCallback(),window.addEventListener(`disparar-alerta`,e=>{let{categoria:t,mensagem:n}=e.detail;this.mostrarNotificacao(t,n)})}render(){return D`
            <div class="toast-container">
                ${this.notificacoes.map(e=>D`
                    <div class="toast ${e.categoria}">
                        ${e.mensagem}
                    </div>
                `)}
            </div>

        `}};customElements.define(`componente-notificacao`,jn);var $=window.location.hostname.includes(`github.io`)?`/Scripts-Lideran-a-Moto`:``,Mn=class extends I{static properties={};constructor(){super(),this._router=new Pe(this,[{path:`${$}/`,render:()=>D`<home-page url_config="${$}"></home-page>`},{path:`${$}/addos`,render:()=>D`<add-os></add-os>`},{path:`${$}/gerenciar_script`,render:()=>D`<gerenciar-script></gerenciar-script>`},{path:`${$}/iniciar_os_completa`,render:()=>D`<page-os-completa></page-os-completa>`},{path:`${$}/iniciar_os_completa/:tipo`,render:e=>D`<page-os-completa .tipo="${e.tipo}"></page-os-completa>`},{path:`/perfil/:name`,render:e=>D`<h2>👤 Usuário: ${e.name}</h2>`},{path:`${$}/*`,render:()=>D`<erro-404></erro-404>`}])}static styles=[o`
        /* Estilo padrão: Celulares e telas pequenas */
        .meu-container {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          box-sizing: border-box; /* Garante que o padding não quebre o tamanho de 100% */
        }

        /* Telas grandes: Desktops (a partir de 1024px de largura) */
        @media (min-width: 1024px) {
          .meu-container {
            max-width: 50%;
            padding-left: 0;  /* Opcional: remove o espaçamento extra no desktop */
            padding-right: 0;
          }
        }
      `];render(){return D`
        <componente-notificacao></componente-notificacao>
        <main class="meu-container">
            ${this._router.outlet()}
        </main>
    `}};customElements.define(`main-element`,Mn);