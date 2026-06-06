(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:ee,getOwnPropertySymbols:te,getPrototypeOf:ne}=Object,f=globalThis,p=f.trustedTypes,re=p?p.emptyScript:``,ie=f.reactiveElementPolyfillSupport,m=(e,t)=>e,h={toAttribute(e,t){switch(t){case Boolean:e=e?re:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},g=(e,t)=>!l(e,t),_={attribute:!0,type:String,converter:h,reflect:!1,useDefault:!1,hasChanged:g};Symbol.metadata??=Symbol(`metadata`),f.litPropertyMetadata??=new WeakMap;var v=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(m(`elementProperties`)))return;let e=ne(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(m(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m(`properties`))){let e=this.properties,t=[...ee(e),...te(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?h:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?h:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??g)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};v.elementStyles=[],v.shadowRootOptions={mode:`open`},v[m(`elementProperties`)]=new Map,v[m(`finalized`)]=new Map,ie?.({ReactiveElement:v}),(f.reactiveElementVersions??=[]).push(`2.1.2`);var y=globalThis,b=e=>e,x=y.trustedTypes,S=x?x.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,C=`$lit$`,w=`lit$${Math.random().toFixed(9).slice(2)}$`,T=`?`+w,ae=`<${T}>`,E=document,D=()=>E.createComment(``),O=e=>e===null||typeof e!=`object`&&typeof e!=`function`,k=Array.isArray,oe=e=>k(e)||typeof e?.[Symbol.iterator]==`function`,A=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,se=/-->/g,M=/>/g,N=RegExp(`>|${A}(?:([^\\s"'>=/]+)(${A}*=${A}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),P=/'/g,F=/"/g,I=/^(?:script|style|textarea|title)$/i,L=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),R=Symbol.for(`lit-noChange`),z=Symbol.for(`lit-nothing`),B=new WeakMap,V=E.createTreeWalker(E,129);function H(e,t){if(!k(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return S===void 0?t:S.createHTML(t)}var ce=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=j;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===j?c[1]===`!--`?o=se:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=N):(I.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=N):o=M:o===N?c[0]===`>`?(o=i??j,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?N:c[3]===`"`?F:P):o===F||o===P?o=N:o===se||o===M?o=j:(o=N,i=void 0);let d=o===N&&e[t+1].startsWith(`/>`)?` `:``;a+=o===j?n+ae:l>=0?(r.push(s),n.slice(0,l)+C+n.slice(l)+w+d):n+w+(l===-2?t:d)}return[H(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},U=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ce(t,n);if(this.el=e.createElement(l,r),V.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=V.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(C)){let t=u[o++],n=i.getAttribute(e).split(w),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?ue:r[1]===`?`?de:r[1]===`@`?fe:K}),i.removeAttribute(e)}else e.startsWith(w)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(I.test(i.tagName)){let e=i.textContent.split(w),t=e.length-1;if(t>0){i.textContent=x?x.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],D()),V.nextNode(),c.push({type:2,index:++a});i.append(e[t],D())}}}else if(i.nodeType===8)if(i.data===T)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(w,e+1))!==-1;)c.push({type:7,index:a}),e+=w.length-1}a++}}static createElement(e,t){let n=E.createElement(`template`);return n.innerHTML=e,n}};function W(e,t,n=e,r){if(t===R)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=O(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=W(e,i._$AS(e,t.values),i,r)),t}var le=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??E).importNode(t,!0);V.currentNode=r;let i=V.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new G(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new pe(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=V.nextNode(),a++)}return V.currentNode=E,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},G=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=W(this,e,t),O(e)?e===z||e==null||e===``?(this._$AH!==z&&this._$AR(),this._$AH=z):e!==this._$AH&&e!==R&&this._(e):e._$litType$===void 0?e.nodeType===void 0?oe(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==z&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(E.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=U.createElement(H(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new le(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=B.get(e.strings);return t===void 0&&B.set(e.strings,t=new U(e)),t}k(t){k(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(D()),this.O(D()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=b(e).nextSibling;b(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},K=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=z}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=W(this,e,t,0),a=!O(e)||e!==this._$AH&&e!==R,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=W(this,r[n+o],t,o),s===R&&(s=this._$AH[o]),a||=!O(s)||s!==this._$AH[o],s===z?e=z:e!==z&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},ue=class extends K{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===z?void 0:e}},de=class extends K{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==z)}},fe=class extends K{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=W(this,e,t,0)??z)===R)return;let n=this._$AH,r=e===z&&n!==z||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==z&&(n===z||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},pe=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}},me=y.litHtmlPolyfillSupport;me?.(U,G),(y.litHtmlVersions??=[]).push(`3.3.3`);var he=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new G(t.insertBefore(D(),e),e,void 0,n??{})}return i._$AI(e),i},q=globalThis,J=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=he(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}};J._$litElement$=!0,J.finalized=!0,q.litElementHydrateSupport?.({LitElement:J});var ge=q.litElementPolyfillSupport;ge?.({LitElement:J}),(q.litElementVersions??=[]).push(`4.2.2`);var Y=new WeakMap,X=e=>{if((e=>e.pattern!==void 0)(e))return e.pattern;let t=Y.get(e);return t===void 0&&Y.set(e,t=new URLPattern({pathname:e.path})),t},_e=class{constructor(e,t,n){this.routes=[],this.o=[],this.t={},this.i=e=>{if(e.routes===this)return;let t=e.routes;this.o.push(t),t.h=this,e.stopImmediatePropagation(),e.onDisconnect=()=>{this.o?.splice(this.o.indexOf(t)>>>0,1)};let n=Z(this.t);n!==void 0&&t.goto(n)},(this.l=e).addController(this),this.routes=[...t],this.fallback=n?.fallback}link(e){if(e?.startsWith(`/`))return e;if(e?.startsWith(`.`))throw Error(`Not implemented`);return e??=this.u,(this.h?.link()??``)+e}async goto(e){let t;if(this.routes.length===0&&this.fallback===void 0)t=e,this.u=``,this.t={0:t};else{let n=this.p(e);if(n===void 0)throw Error(`No route found for `+e);let r=X(n).exec({pathname:e})?.pathname.groups??{};if(t=Z(r),typeof n.enter==`function`&&!1===await n.enter(r))return;this.v=n,this.t=r,this.u=t===void 0?e:e.substring(0,e.length-t.length)}if(t!==void 0)for(let e of this.o)e.goto(t);this.l.requestUpdate()}outlet(){return this.v?.render?.(this.t)}get params(){return this.t}p(e){let t=this.routes.find((t=>X(t).test({pathname:e})));return t||this.fallback===void 0?t:this.fallback?{...this.fallback,path:`/*`}:void 0}hostConnected(){this.l.addEventListener(Q.eventName,this.i);let e=new Q(this);this.l.dispatchEvent(e),this._=e.onDisconnect}hostDisconnected(){this._?.(),this.h=void 0}},Z=e=>{let t;for(let n of Object.keys(e))/\d+/.test(n)&&(t===void 0||n>t)&&(t=n);return t&&e[t]},Q=class e extends Event{constructor(t){super(e.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=t}};Q.eventName=`lit-routes-connected`;var ve=location.origin||location.protocol+`//`+location.host,ye=class extends _e{constructor(){super(...arguments),this.m=e=>{let t=e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey;if(e.defaultPrevented||t)return;let n=e.composedPath().find((e=>e.tagName===`A`));if(n===void 0||n.target!==``||n.hasAttribute(`download`)||n.getAttribute(`rel`)===`external`)return;let r=n.href;if(r===``||r.startsWith(`mailto:`))return;let i=window.location;n.origin===ve&&(e.preventDefault(),r!==i.href&&(window.history.pushState({},``,r),this.goto(n.pathname)))},this.R=e=>{this.goto(window.location.pathname)}}hostConnected(){super.hostConnected(),window.addEventListener(`click`,this.m),window.addEventListener(`popstate`,this.R),this.goto(window.location.pathname)}hostDisconnected(){super.hostDisconnected(),window.removeEventListener(`click`,this.m),window.removeEventListener(`popstate`,this.R)}},be=`h1{font-size:var(--header-1)}h2{font-size:var(--header-2)}h3{font-size:var(--header-3)}p,a{font-size:var(--paragraph)}nav{background-color:var(--header-color);box-sizing:border-box;z-index:4000;justify-content:space-around;align-items:center;width:100%;margin-left:auto;margin-right:auto;padding:.2rem 0;display:flex;position:fixed;bottom:0}nav a svg{width:1.7rem;fill:var(--text-color)}nav a{text-align:center;width:7rem;color:var(--text-color);border-radius:.7rem;padding:.2rem;font-weight:600;text-decoration:none;transition:background-color .2s}nav a:hover{background-color:var(--destaque-color)}nav a p{margin:0;font-size:.8rem}@media (width>=1024px){nav{background-color:var(--background-color);border-radius:100rem;width:50%;margin-bottom:.5rem;padding:.4rem}nav a p{font-size:1rem}nav a{border-radius:100rem;width:9rem;padding-bottom:.1rem}}#container-drawer-ferramentas{flex-direction:column;justify-content:space-between;row-gap:1rem;padding:2rem 0 0;display:flex}#container-drawer-ferramentas a{flex-direction:row;align-items:center;gap:1rem;width:100%;display:flex}#container-drawer-ferramentas a svg{fill:var(--destaque-color)}`,xe=`#container{box-sizing:border-box;opacity:0;visibility:hidden;z-index:9999;background-color:#0009;flex-direction:column;justify-content:center;align-items:center;width:100vw;height:100vh;padding:2rem;transition:opacity .3s,visibility .3s;display:flex;position:fixed;top:0;left:0}#container.visivel{opacity:1;visibility:visible}#modal{background-color:var(--background-color);color:var(--text-color);text-align:center;border-color:var(--btn-border-color);box-sizing:border-box;border-style:solid;border-width:2px;border-radius:2rem;flex-direction:column;justify-content:center;transition:transform .3s;display:flex;transform:scale(.9)translateY(20px);box-shadow:0 20px 50px #ffffff38}#container.visivel #modal{transform:scale(1)translateY(0)}#modal svg{fill:var(--text-color);height:5rem}input{background-color:var(--btn-background-color);width:15rem;color:var(--btn-text-background-color);border:.1rem solid;border-color:var(--btn-border-color);border-radius:100rem;margin:1rem;padding:.5rem;font-size:1rem}button{background-color:var(--btn-background-color);width:15rem;color:var(--text-color);border:none;border-radius:100rem;margin:1rem;padding:.5rem;font-size:1rem;transition:background-color .1s}button:hover{background-color:var(--destaque-color);color:var(--text-color)}#close-button{justify-content:flex-end;align-items:center;height:2rem;margin:0;padding:.9rem;display:flex}#close-button a svg{fill:#b00;transform-origin:50%;width:2.5rem;transition:transform .2s}#close-button a svg:hover{transform:scale(1.2)}@media (width>=1024px){#modal{width:50%}}`,Se=e=>{localStorage.setItem(`usuario`,e)},Ce=class extends J{static properties={aberto:{type:Boolean}};static get styles(){return o`${a(xe)}`}constructor(){super(),this.url_config=``,this.aberto=!1}Btn_Cadastro(e){let t=e.target.form,n=new FormData(t).get(`nome`);n!==``&&(Se(n),this._dispararFechar())}_dispararFechar(){this.aberto=!1,this.dispatchEvent(new CustomEvent(`ao-fechar`,{bubbles:!0,composed:!0}))}render(){return L`
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
        `}};customElements.define(`modal-cadastro-user`,Ce);var we=class extends J{static properties={aberto:{type:Boolean}};static styles=o`
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
  `;constructor(){super(),this.aberto=!1}render(){return L`
      <div 
        class="overlay ${this.aberto?`visivel`:``}" 
        @click="${this._dispararFechar}"
      ></div>

      <div class="drawer-content ${this.aberto?`visivel`:``}">
        <button class="btn-fechar" @click="${this._dispararFechar}">&times;</button>
        
        <slot></slot>
      </div>
    `}_dispararFechar(){this.aberto=!1,this.dispatchEvent(new CustomEvent(`ao-fechar`,{bubbles:!0,composed:!0}))}};customElements.define(`drawer-esquerdo-ferramentas`,we);var Te=class extends J{static properties={nome:{type:String},url_config:{type:String},exibirModal:{type:Boolean},exibirDrawerFerramentas:{type:Boolean},exibirDrawerLinks:{type:Boolean},exibirDrawerFinanceiro:{type:Boolean}};static get styles(){return o`${a(be)}`}constructor(){super(),this.url_config=``,this.exibirModal=!1,this.exibirDrawerFerramentas=!1,this.exibirDrawerLinks=!1,this.exibirDrawerFinanceiro=!1,this.Verificar_usuario()}Verificar_usuario(){localStorage.getItem(`usuario`)??(this.exibirModal=!0)}render(){return L`
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
        `}};customElements.define(`menu-inferior`,Te);var Ee=`.header-superior{background-color:var(--header-color);box-sizing:border-box;justify-content:space-between;align-items:center;height:auto;margin:0;padding:.7rem;display:flex}@media (width>=1024px){.header-superior{border-radius:100rem;margin-top:.5rem;padding:.4rem}}.logo{height:2rem}.logo-sync{height:1.5rem}.item-sync{box-sizing:border-box;border:2px solid #f7ecac;border-radius:100rem;align-items:center;height:2.5rem;padding:0 .5rem;display:flex}article{padding:1rem}#dashboard{justify-content:center;gap:.3rem;margin-top:.3rem;display:flex}#dashboard div{text-align:center;background-color:var(--cards-background);color:var(--text-color);border-radius:1rem}.coluna{flex:1}.dash-titulo{margin:1rem 0 0;font-size:1rem;font-weight:900}.dash-value{margin:0 0 .5rem;font-size:2rem}#andamento{background-color:var(--destaque-color);text-align:center;border-radius:1rem;margin-top:.5rem;padding:.1rem}#andamento a{background-color:var(--btn-background-color);border-color:var(--btn-border-color);color:var(--btn-text-background-color);border-style:solid;border-width:.1rem;border-radius:100rem;margin:.5rem;padding:.5rem;display:block}#andamento a:hover{color:var(--btn-text-background-color);background-color:var(--destaque-color)}#acoes{gap:.5rem;margin-top:.5rem;display:flex}.coluna-acoes{border-color:var(--btn-border-color);text-align:center;background-color:var(--btn-background-color);color:var(--btn-text-background-color);border-style:solid;border-width:.1rem;border-radius:1rem;flex:1;text-decoration:none;transition:background-color .1s}.coluna-acoes:hover{background-color:var(--destaque-color);color:var(--btn-text-background-color);fill:var(--btn-text-background-color)}.coluna-acoes:hover svg{fill:var(--btn-text-background-color)}.coluna-acoes svg{fill:var(--btn-text-background-color);width:3rem;padding-bottom:1rem}`,De=class extends J{static properties={isDark:{type:Boolean}};static styles=o`
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
  `;constructor(){super(),this.isDark=document.body.classList.contains(`dark-theme`)}render(){return L`
      <button @click="${this._alternarTema}">
        ${this.isDark?L`☀️ Modo Claro`:L`🌙 Modo Escuro`}
      </button>
    `}_alternarTema(){this.isDark=!this.isDark,document.body.classList.toggle(`dark-theme`,this.isDark),localStorage.setItem(`theme`,this.isDark?`dark`:`light`)}};customElements.define(`botao-tema`,De);var Oe=class extends J{static properties={nome:{type:String},url_config:{type:String}};static get styles(){return o`${a(Ee)}`}constructor(){super(),this.url_config=``}render(){return L`
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
                <div id="andamento">
                    <p>Script em Aberto!</p>
                    <a>
                        Continuar Script...
                    </a>
                    
                </div>

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
        `}};customElements.define(`home-page`,Oe);var ke=`.header-superior{background-color:var(--header-color);box-sizing:border-box;justify-content:center;align-items:center;height:auto;margin:0;padding:.7rem;display:flex}.header-superior h2{font-size:var(--header-2);color:var(--text-color);margin:0}@media (width>=1024px){.header-superior{border-radius:100rem;margin-top:.5rem;padding:.4rem}}.logo{height:2rem}.logo-sync{height:1.5rem}.item-sync{box-sizing:border-box;border:2px solid #f7ecac;border-radius:100rem;align-items:center;height:2.5rem;padding:0 .5rem;display:flex}article{padding:1rem}#dashboard{justify-content:center;gap:.3rem;margin-top:.3rem;display:flex}#dashboard div{text-align:center;background-color:var(--cards-background);color:var(--text-color);border-radius:1rem}.coluna{flex:1}.dash-titulo{margin:1rem 0 0;font-size:1rem;font-weight:900}.dash-value{margin:0 0 .5rem;font-size:2rem}#andamento{background-color:var(--destaque-color);text-align:center;border-radius:1rem;margin-top:.5rem;padding:.1rem}#andamento a{background-color:var(--btn-background-color);border-color:var(--btn-border-color);color:var(--btn-text-background-color);border-style:solid;border-width:.1rem;border-radius:100rem;margin:.5rem;padding:.5rem;display:block}#andamento a:hover{color:var(--btn-text-background-color);background-color:var(--destaque-color)}#acoes{gap:.5rem;margin-top:.5rem;display:flex}.coluna-acoes{border-color:var(--btn-border-color);text-align:center;background-color:var(--btn-background-color);color:var(--btn-text-background-color);border-style:solid;border-width:.1rem;border-radius:1rem;flex:1;text-decoration:none;transition:background-color .1s}.coluna-acoes:hover{background-color:var(--destaque-color);color:var(--btn-text-background-color);fill:var(--btn-text-background-color)}.coluna-acoes:hover svg{fill:var(--btn-text-background-color)}.coluna-acoes svg{fill:var(--btn-text-background-color);width:3rem;padding-bottom:1rem}#container-os{flex-direction:column;display:flex}`,Ae=`#container-card-os{gap:1rem;display:flex}`,je=class extends J{static properties={nome:{type:String},url_config:{type:String}};static get styles(){return o`${a(Ae)}`}constructor(){super(),this.url_config=``}render(){return L`
            <!--Retorno renderizado-->
            <a id="container-card-os" href="">
                <img style="width: 5rem;" src="https://placehold.co/150">
                <div>
                    <h3>Titulo do Card</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie et tortor eu luctus. Aenean faucibus condimentum tincidunt. Suspendisse consectetur molestie dolor. Duis tincidunt eget mauris vel mattis. Pellentesque et venenatis augue. Duis hendrerit dolor ac risus sagittis, non congue nisl ultricies. Aliquam a tempus lorem. </p>
                </div>
            </a>
            
        `}};customElements.define(`card-os`,je);var Me=class extends J{static properties={nome:{type:String},url_config:{type:String}};static get styles(){return o`${a(ke)}`}constructor(){super(),this.url_config=``}render(){return L`
            <!--Retorno renderizado-->
            <header class="header-superior">
                <h2>Selecione o Tipo de Script</h2>                
            </header>

            <div id="container-os">
                <card-os></card-os>
            </div>
            
            <!--
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="544" height="544" viewBox="0 0 143.93 143.93"><path d="M-324.05 790.77a53 53 0 0 1-3.25-.65c-2.95-.65-3.73-1.21-3.94-2.83l-.16-1.14 6-6.01 5.98-6.01v-5.29l-2.98-2.97-2.98-2.97h-5.54l-5.85 5.84c-5.41 5.4-5.93 5.85-6.79 5.85-1.82 0-2.42-.7-3.23-3.76-.67-2.5-.84-8.53-.32-11.24a26.5 26.5 0 0 1 13.92-18.62c3.83-2 6.52-2.7 11-2.87 2.85-.1 4.18-.04 5.8.3l2.12.43 9.71-9.71 9.72-9.71-16.18-16.3-16.18-16.28-3.71-.14a26 26 0 0 1-4.2-.36c-.25-.12-3.14-4.69-6.4-10.15-5.12-8.52-5.95-10.07-5.95-10.98 0-1 .18-1.24 4.03-5.15 4.07-4.12 4.96-4.84 6.07-4.84.33 0 5.12 2.7 10.63 6.01 8.65 5.18 10.09 6.14 10.4 6.87q.35.87.35 4.25v3.38l16.2 16.2 16.22 16.2 9.76-9.76 9.77-9.77-.37-1.94c-.22-1.1-.37-3.4-.36-5.38.01-2.86.13-3.87.72-6.02 1.34-4.91 3.3-8.33 6.91-12.06 6.52-6.72 15.72-9.34 25.1-7.15 2.8.65 3.6 1.24 3.8 2.78.15 1.06.1 1.15-1.97 3.44-1.17 1.29-3.8 4.01-5.85 6.05l-3.73 3.7v5.29l2.96 2.98 2.95 2.98h5.33l5.85-5.85c5.41-5.4 5.93-5.85 6.79-5.85 1.83 0 2.45.73 3.2 3.78.33 1.28.44 2.99.44 6.52 0 4.31-.07 5-.66 7.06a26.4 26.4 0 0 1-14.2 16.68 23 23 0 0 1-10.28 2.46c-2.72.1-4.08.03-5.68-.3l-2.1-.44-7.87 7.87-7.87 7.86 1.9 1.77 1.91 1.76 1.29-1.16c1.02-.92 1.48-1.15 2.25-1.15a2.58 2.58 0 0 1 2.57 3.02 4 4 0 0 1-1.08 1.74c-.51.5-.93.99-.93 1.1 0 .1 8.43 7.93 18.72 17.39 11.46 10.52 19.05 17.68 19.57 18.47.47.7 1.18 1.99 1.58 2.86.67 1.46.73 1.9.83 5.62.09 3.58.03 4.21-.47 5.74-2.7 8.1-12.04 12.65-20.16 9.83-3.8-1.32-4.15-1.66-22.62-21.73l-17.15-18.63-.93.9c-1.59 1.54-2.91 1.73-4.17.6-.73-.67-1.02-2.04-.59-2.87.18-.35.72-1.05 1.22-1.57l.9-.94-1.8-1.92-1.78-1.92-7.78 7.8-7.78 7.8.37 2.07c.2 1.14.36 3.56.35 5.38-.02 3.8-.74 7-2.34 10.46a27.8 27.8 0 0 1-14.13 13.51 28.5 28.5 0 0 1-12.88 1.79m6.76-5.5c7.9-1.4 14.46-7.45 16.7-15.41.83-2.93.83-7.8 0-10.86a9 9 0 0 1-.43-2.8c.09-.34 12.09-12.54 27.07-27.52 24.04-24.04 26.99-26.9 27.72-26.9.45 0 1.74.24 2.88.53 4.03 1.03 9.57.55 13.43-1.15a21.7 21.7 0 0 0 12.25-14.96c.2-.96.38-2.88.38-4.26v-2.5l-4.58 4.56-4.58 4.55h-4.56c-3.43 0-4.74-.1-5.27-.38-.98-.51-8.19-8.14-8.52-9-.35-.92-.35-8.1 0-9.02.15-.39 2.18-2.69 4.52-5.11l4.24-4.4-1.8-.09c-2.4-.11-5.3.37-7.92 1.32-6.1 2.2-11.25 7.85-13.1 14.38a24 24 0 0 0-.01 10.9c.32 1.2.51 2.47.43 2.8-.09.35-12.1 12.56-27.1 27.56l-26.94 26.94-1.29-.16c-.7-.1-2.05-.34-3-.56s-2.96-.4-4.5-.4q-9 0-15.34 6.78c-3.61 3.88-5.27 7.9-5.49 13.32l-.13 3.3 4.61-4.56 4.61-4.56h9.69l4.23 4.16c2.33 2.3 4.4 4.55 4.6 5.02.51 1.2.5 8.23 0 9.41-.2.47-2.23 2.7-4.5 4.95a65 65 0 0 0-4.13 4.3c0 .32 3.66.21 5.83-.17zm11.76-36.24c-.83-.83-1.06-1.83-.65-2.82a2.4 2.4 0 0 1 2.37-1.57q1.73 0 2.38 1.57a2.5 2.5 0 0 1-2.38 3.46c-.79 0-1.25-.17-1.72-.64m7.6-7.43c-.94-.78-1.2-1.83-.72-2.91.19-.44 8.01-8.45 17.38-17.8 16.3-16.25 17.08-17 18-17 1.9 0 3.2 1.88 2.46 3.58-.19.43-8 8.44-17.38 17.79-16.29 16.26-17.08 17-18 17q-.96 0-1.74-.66m40.56-40.72c-.84-.84-1.07-1.83-.66-2.82a2.4 2.4 0 0 1 2.38-1.57q1.73 0 2.37 1.57a2.5 2.5 0 0 1-2.37 3.45c-.8 0-1.26-.17-1.72-.63m32.16 84.4c3.06-.8 5.73-3.03 7.08-5.92.63-1.34.71-1.83.71-4.3s-.08-2.94-.72-4.3c-.4-.85-1.05-1.93-1.45-2.42-.88-1.04-37.08-34.28-37.34-34.28-.1 0-2.86 2.67-6.13 5.95l-5.94 5.94 1.08 1.13c.6.62 8.08 8.75 16.62 18.07 14.9 16.22 17.1 18.5 18.73 19.34 2.1 1.1 5 1.4 7.36.78m-5.3-9.71c-.37-.14-6.23-5.82-13.04-12.62-13.01-13-13.13-13.14-12.36-14.64a2.7 2.7 0 0 1 2.5-1.55c1.03 0 1.23.18 13.69 12.63 12.53 12.52 12.64 12.65 12.64 13.71 0 1.18-.63 2.09-1.76 2.51-.77.3-.82.3-1.68-.04m-36.12-39.4 5.82-5.84-1.85-1.7a22 22 0 0 0-1.99-1.7c-.07-.01-2.68 2.53-5.8 5.64l-5.65 5.67 1.7 1.85a23 23 0 0 0 1.82 1.88c.07.01 2.75-2.6 5.95-5.8m-22.5-22.49 1.85-1.85-17-17-16.99-17.01v-7.19l-7.78-4.67a212 212 0 0 0-8-4.67c-.13 0-1.19 1.03-2.37 2.3l-2.14 2.3 4.64 7.73 4.64 7.74 3.48.09c3.28.08 3.52.13 4.38.79.5.39 8.16 8.02 17.04 16.96s16.2 16.28 16.28 16.3.97-.8 1.98-1.82" style="fill:#000" transform="translate(351.83 -651.1)"/></svg>
            -->
            <menu-inferior></menu-inferior>
        `}};customElements.define(`add-os`,Me);var $=window.location.hostname.includes(`github.io`)?`/Scripts-Lideran-a-Moto`:``,Ne=class extends J{static properties={};constructor(){super(),this._router=new ye(this,[{path:`${$}/`,render:()=>L`<home-page url_config="${$}"></home-page>`},{path:`${$}/addos`,render:()=>L`<add-os></add-os>`},{path:`/perfil/:name`,render:e=>L`<h2>👤 Usuário: ${e.name}</h2>`},{path:`${$}/*`,render:()=>L`<erro-404></erro-404>`}])}static styles=[o`
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
      `];render(){return L`
      <main class="meu-container">
        ${this._router.outlet()}
      </main>
    `}};customElements.define(`main-element`,Ne);