import{i as Vo,e as we,w as go,f as ho,g as ne,h as Fe,t as ko,j as de,k as Uo,l as Ae,m as Oe,n as ue,p as Io,q as Co,r as xo,s as wo,v as Fo,N as se,x as me,y as ce,d as h,b as a,P as ie,z as J,A as Ao,B as Oo,C as Po,D as Pe,F as So,E as ee,o as u,c as k,G as x,H,u as e,I as W,J as t,K as v,L as Do,M as Mo,O as V,Q as Se,R as De,S as zo,U as Me,T as qo,V as To,W as ze,X as M,Y as Lo,Z as Ro,$ as Bo,a0 as $o,a1 as qe,a2 as No,a3 as Te,a4 as Eo,a5 as Yo,a6 as jo,a7 as P,a8 as Jo,a9 as Ho,aa as Wo,ab as Xo,ac as Go,ad as Ko,ae as X,af as O,ag as w,ah as C,ai as z,aj as S,ak as le,al as Le,am as Re,an as ae,ao as fe,ap as $,aq as te,ar as re,as as Be,at as be,au as ve,av as oe,aw as ye,ax as Qo,ay as Zo,_ as G,az as ea,aA as la,aB as oa,aC as _e,aD as aa,aE as ta,aF as ra,aG as pa,aH as na,aI as $e,aJ as Ve,aK as Ne,aL as Ee,aM as ge,aN as da,aO as ua,aP as sa,__tla as ma}from"./index.ad548a9d.js";import{d as ca,E as ia,a as fa,__tla as ba}from"./vuedraggable.umd.549c1590.js";let Ye,va=Promise.all([(()=>{try{return ma}catch{}})(),(()=>{try{return ba}catch{}})()]).then(async()=>{const je=(...n)=>s=>{n.forEach(l=>{Vo(l)?l(s):l.value=s})},Je=(n,s,l)=>{let f={offsetX:0,offsetY:0};const o=r=>{const b=r.clientX,y=r.clientY,{offsetX:m,offsetY:i}=f,_=n.value.getBoundingClientRect(),U=_.left,T=_.top,D=_.width,N=_.height,R=document.documentElement.clientWidth,B=document.documentElement.clientHeight,A=-U+m,E=-T+i,Y=R-U-D+m,K=B-T-N+i,j=g=>{const I=Math.min(Math.max(m+g.clientX-b,A),Y),L=Math.min(Math.max(i+g.clientY-y,E),K);f={offsetX:I,offsetY:L},n.value.style.transform=`translate(${ne(I)}, ${ne(L)})`},c=()=>{document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",c)};document.addEventListener("mousemove",j),document.addEventListener("mouseup",c)},p=()=>{s.value&&n.value&&s.value.addEventListener("mousedown",o)},d=()=>{s.value&&n.value&&s.value.removeEventListener("mousedown",o)};we(()=>{go(()=>{l.value?p():d()})}),ho(()=>{d()})},He=(n,s={})=>{Fe(n)||ko("[useLockscreen]","You need to pass a ref param to this function");const l=s.ns||de("popup"),f=Uo(()=>l.bm("parent","hidden"));if(!Ae||Oe(document.body,f.value))return;let o=0,p=!1,d="0";const r=()=>{setTimeout(()=>{Fo(document==null?void 0:document.body,f.value),p&&document&&(document.body.style.width=d)},200)};ue(n,b=>{if(!b){r();return}p=!Oe(document.body,f.value),p&&(d=document.body.style.width),o=Io(l.namespace.value);const y=document.documentElement.clientHeight<document.body.scrollHeight,m=Co(document.body,"overflowY");o>0&&(y||m==="scroll")&&p&&(document.body.style.width=`calc(100% - ${o}px)`),xo(document.body,f.value)}),wo(()=>r())},he=n=>{if(!n)return{onClick:se,onMousedown:se,onMouseup:se};let s=!1,l=!1;return{onClick:f=>{s&&l&&n(f),s=l=!1},onMousedown:f=>{s=f.target===f.currentTarget},onMouseup:f=>{l=f.target===f.currentTarget}}},We=me({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:ce([String,Array,Object])},zIndex:{type:ce([String,Number])}}),Xe={click:n=>n instanceof MouseEvent},Ge="overlay";var Ke=h({name:"ElOverlay",props:We,emits:Xe,setup(n,{slots:s,emit:l}){const f=de(Ge),o=b=>{l("click",b)},{onClick:p,onMousedown:d,onMouseup:r}=he(n.customMaskEvent?void 0:o);return()=>n.mask?a("div",{class:[f.b(),n.overlayClass],style:{zIndex:n.zIndex},onClick:p,onMousedown:d,onMouseup:r},[J(s,"default")],ie.STYLE|ie.CLASS|ie.PROPS,["onClick","onMouseup","onMousedown"]):Ao("div",{class:n.overlayClass,style:{zIndex:n.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[J(s,"default")])}});const Qe=Ke,ke=Symbol("dialogInjectionKey"),Ue=me({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:Oo},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),Ze={close:()=>!0},el=["aria-label"],ll=["id"],ol=h({name:"ElDialogContent"}),al=h({...ol,props:Ue,emits:Ze,setup(n){const s=n,{t:l}=Po(),{Close:f}=zo,{dialogRef:o,headerRef:p,bodyId:d,ns:r,style:b}=Pe(ke),{focusTrapRef:y}=Pe(So),m=je(y,o),i=ee(()=>s.draggable);return Je(o,p,i),(_,U)=>(u(),k("div",{ref:e(m),class:H([e(r).b(),e(r).is("fullscreen",_.fullscreen),e(r).is("draggable",e(i)),e(r).is("align-center",_.alignCenter),{[e(r).m("center")]:_.center},_.customClass]),style:Se(e(b)),tabindex:"-1"},[x("header",{ref_key:"headerRef",ref:p,class:H(e(r).e("header"))},[J(_.$slots,"header",{},()=>[x("span",{role:"heading",class:H(e(r).e("title"))},W(_.title),3)]),_.showClose?(u(),k("button",{key:0,"aria-label":e(l)("el.dialog.close"),class:H(e(r).e("headerbtn")),type:"button",onClick:U[0]||(U[0]=T=>_.$emit("close"))},[a(e(Mo),{class:H(e(r).e("close"))},{default:t(()=>[(u(),v(Do(_.closeIcon||e(f))))]),_:1},8,["class"])],10,el)):V("v-if",!0)],2),x("div",{id:e(d),class:H(e(r).e("body"))},[J(_.$slots,"default")],10,ll),_.$slots.footer?(u(),k("footer",{key:0,class:H(e(r).e("footer"))},[J(_.$slots,"footer")],2)):V("v-if",!0)],6))}});var tl=De(al,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const rl=me({...Ue,appendToBody:{type:Boolean,default:!1},beforeClose:{type:ce(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),pl={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[Me]:n=>qo(n),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},nl=(n,s)=>{const l=$o().emit,{nextZIndex:f}=To();let o="";const p=ze(),d=ze(),r=M(!1),b=M(!1),y=M(!1),m=M(n.zIndex||f());let i,_;const U=Lo("namespace",Ro),T=ee(()=>{const q={},Z=`--${U.value}-dialog`;return n.fullscreen||(n.top&&(q[`${Z}-margin-top`]=n.top),n.width&&(q[`${Z}-width`]=ne(n.width))),q}),D=ee(()=>n.alignCenter?{display:"flex"}:{});function N(){l("opened")}function R(){l("closed"),l(Me,!1),n.destroyOnClose&&(y.value=!1)}function B(){l("close")}function A(){_==null||_(),i==null||i(),n.openDelay&&n.openDelay>0?{stop:i}=qe(()=>j(),n.openDelay):j()}function E(){i==null||i(),_==null||_(),n.closeDelay&&n.closeDelay>0?{stop:_}=qe(()=>c(),n.closeDelay):c()}function Y(){function q(Z){Z||(b.value=!0,r.value=!1)}n.beforeClose?n.beforeClose(q):E()}function K(){n.closeOnClickModal&&Y()}function j(){!Ae||(r.value=!0)}function c(){r.value=!1}function g(){l("openAutoFocus")}function I(){l("closeAutoFocus")}function L(q){var Z;((Z=q.detail)==null?void 0:Z.focusReason)==="pointer"&&q.preventDefault()}n.lockScroll&&He(r);function Q(){n.closeOnPressEscape&&Y()}return ue(()=>n.modelValue,q=>{q?(b.value=!1,A(),y.value=!0,m.value=n.zIndex?m.value++:f(),Bo(()=>{l("open"),s.value&&(s.value.scrollTop=0)})):r.value&&E()}),ue(()=>n.fullscreen,q=>{!s.value||(q?(o=s.value.style.transform,s.value.style.transform=""):s.value.style.transform=o)}),we(()=>{n.modelValue&&(r.value=!0,y.value=!0,A())}),{afterEnter:N,afterLeave:R,beforeLeave:B,handleClose:Y,onModalClick:K,close:E,doClose:c,onOpenAutoFocus:g,onCloseAutoFocus:I,onCloseRequested:Q,onFocusoutPrevented:L,titleId:p,bodyId:d,closed:b,style:T,overlayDialogStyle:D,rendered:y,visible:r,zIndex:m}},dl=["aria-label","aria-labelledby","aria-describedby"],ul=h({name:"ElDialog",inheritAttrs:!1}),sl=h({...ul,props:rl,emits:pl,setup(n,{expose:s}){const l=n,f=No();Te({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},ee(()=>!!f.title)),Te({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},ee(()=>!!l.customClass));const o=de("dialog"),p=M(),d=M(),r=M(),{visible:b,titleId:y,bodyId:m,style:i,overlayDialogStyle:_,rendered:U,zIndex:T,afterEnter:D,afterLeave:N,beforeLeave:R,handleClose:B,onModalClick:A,onOpenAutoFocus:E,onCloseAutoFocus:Y,onCloseRequested:K,onFocusoutPrevented:j}=nl(l,p);Eo(ke,{dialogRef:p,headerRef:d,bodyId:m,ns:o,rendered:U,style:i});const c=he(A),g=ee(()=>l.draggable&&!l.fullscreen);return s({visible:b,dialogContentRef:r}),(I,L)=>(u(),v(Xo,{to:"body",disabled:!I.appendToBody},[a(Wo,{name:"dialog-fade",onAfterEnter:e(D),onAfterLeave:e(N),onBeforeLeave:e(R),persisted:""},{default:t(()=>[Yo(a(e(Qe),{"custom-mask-event":"",mask:I.modal,"overlay-class":I.modalClass,"z-index":e(T)},{default:t(()=>[x("div",{role:"dialog","aria-modal":"true","aria-label":I.title||void 0,"aria-labelledby":I.title?void 0:e(y),"aria-describedby":e(m),class:H(`${e(o).namespace.value}-overlay-dialog`),style:Se(e(_)),onClick:L[0]||(L[0]=(...Q)=>e(c).onClick&&e(c).onClick(...Q)),onMousedown:L[1]||(L[1]=(...Q)=>e(c).onMousedown&&e(c).onMousedown(...Q)),onMouseup:L[2]||(L[2]=(...Q)=>e(c).onMouseup&&e(c).onMouseup(...Q))},[a(e(jo),{loop:"",trapped:e(b),"focus-start-el":"container",onFocusAfterTrapped:e(E),onFocusAfterReleased:e(Y),onFocusoutPrevented:e(j),onReleaseRequested:e(K)},{default:t(()=>[e(U)?(u(),v(tl,P({key:0,ref_key:"dialogContentRef",ref:r},I.$attrs,{"custom-class":I.customClass,center:I.center,"align-center":I.alignCenter,"close-icon":I.closeIcon,draggable:e(g),fullscreen:I.fullscreen,"show-close":I.showClose,title:I.title,onClose:e(B)}),Jo({header:t(()=>[I.$slots.title?J(I.$slots,"title",{key:1}):J(I.$slots,"header",{key:0,close:e(B),titleId:e(y),titleClass:e(o).e("title")})]),default:t(()=>[J(I.$slots,"default")]),_:2},[I.$slots.footer?{name:"footer",fn:t(()=>[J(I.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):V("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,dl)]),_:3},8,["mask","overlay-class","z-index"]),[[Ho,e(b)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var ml=De(sl,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const cl=Go(ml),F=Ko("formDesignStore",()=>{const n=X({}),s=X({}),l=X({list:[],formProp:{size:"default",labelPosition:"top",labelWidth:120},name:""});return{formData:n,curFormItem:s,saveForm:l,onClickFormItem:f=>{Object.assign(s,f)},init:()=>{Object.assign(l,{list:[],formProp:{size:"default",labelPosition:"top",labelWidth:120},name:""}),Object.assign(n,{}),Object.assign(s,{})},setForm:f=>{Object.assign(l,f)}}}),il=h({__name:"CommonAttr",setup(n){const s=F(),{curFormItem:l}=O(s);return(f,o)=>{const p=z,d=S,r=le,b=Le,y=Re;return u(),k(C,null,[e(l).type=="component"&&e(l).comp!="button"?(u(),v(d,{key:0,prop:"prop.field",label:"\u5B57\u6BB5\u540D"},{default:t(()=>[a(p,{modelValue:e(l).prop.field,"onUpdate:modelValue":o[0]||(o[0]=m=>e(l).prop.field=m),clearable:""},null,8,["modelValue"])]),_:1})):V("",!0),a(d,{prop:"name",label:"\u7EC4\u4EF6\u540D\u79F0"},{default:t(()=>[a(p,{modelValue:e(l).name,"onUpdate:modelValue":o[1]||(o[1]=m=>e(l).name=m),disabled:""},null,8,["modelValue"])]),_:1}),e(l).type=="component"&&e(l).comp!="button"?(u(),v(d,{key:1,prop:"form_config.label",label:"\u6807\u7B7E\u6587\u672C"},{default:t(()=>[a(p,{modelValue:e(l).form_config.label,"onUpdate:modelValue":o[2]||(o[2]=m=>e(l).form_config.label=m)},null,8,["modelValue"])]),_:1})):V("",!0),e(l).type=="component"&&e(l).comp!="button"?(u(),v(d,{key:2,prop:"prop.readonly",label:"\u53EA\u8BFB"},{default:t(()=>[a(r,{modelValue:e(l).prop.readonly,"onUpdate:modelValue":o[3]||(o[3]=m=>e(l).prop.readonly=m)},null,8,["modelValue"])]),_:1})):V("",!0),e(l).type=="component"&&e(l).comp!="button"?(u(),v(d,{key:3,prop:"prop.disabled",label:"\u7981\u7528"},{default:t(()=>[a(r,{modelValue:e(l).prop.disabled,"onUpdate:modelValue":o[4]||(o[4]=m=>e(l).prop.disabled=m)},null,8,["modelValue"])]),_:1})):V("",!0),e(l).type=="component"&&e(l).comp!="button"?(u(),v(d,{key:4,prop:"form_config.rules.required",label:"\u5FC5\u586B"},{default:t(()=>[a(r,{modelValue:e(l).form_config.rules.required,"onUpdate:modelValue":o[5]||(o[5]=m=>e(l).form_config.rules.required=m)},null,8,["modelValue"])]),_:1})):V("",!0),e(l).type=="component"&&e(l).comp!="button"?(u(),v(d,{key:5,prop:"form_config.rules.regular",label:"\u6821\u9A8C\u6B63\u5219\u8868\u8FBE\u5F0F"},{default:t(()=>[a(p,{modelValue:e(l).form_config.rules.regular,"onUpdate:modelValue":o[6]||(o[6]=m=>e(l).form_config.rules.regular=m)},null,8,["modelValue"])]),_:1})):V("",!0),e(l).type=="component"&&e(l).comp!="button"?(u(),v(d,{key:6,prop:"form_config.rules.trigger",label:"\u89E6\u53D1\u65B9\u5F0F"},{default:t(()=>[a(y,{modelValue:e(l).form_config.rules.trigger,"onUpdate:modelValue":o[7]||(o[7]=m=>e(l).form_config.rules.trigger=m)},{default:t(()=>[a(b,{label:"change"},{default:t(()=>[w("change")]),_:1}),a(b,{label:"blur"},{default:t(()=>[w("blur")]),_:1})]),_:1},8,["modelValue"])]),_:1})):V("",!0),e(l).type=="component"&&e(l).comp!="button"?(u(),v(d,{key:7,prop:"form_config.rules.message",label:"\u6821\u9A8C\u63D0\u793A\u4FE1\u606F"},{default:t(()=>[a(p,{modelValue:e(l).form_config.rules.message,"onUpdate:modelValue":o[8]||(o[8]=m=>e(l).form_config.rules.message=m)},null,8,["modelValue"])]),_:1})):V("",!0)],64)}}}),fl=h({__name:"InputAttr",setup(n){const s=F(),{curFormItem:l}=O(s);return(f,o)=>{const p=z,d=S,r=le;return u(),k(C,null,[a(d,{prop:"prop.placeholder",label:"\u5360\u4F4D\u63D0\u793A"},{default:t(()=>[a(p,{modelValue:e(l).prop.placeholder,"onUpdate:modelValue":o[0]||(o[0]=b=>e(l).prop.placeholder=b)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.clearable",label:"\u662F\u5426\u53EF\u6E05\u7A7A"},{default:t(()=>[a(r,{modelValue:e(l).prop.clearable,"onUpdate:modelValue":o[1]||(o[1]=b=>e(l).prop.clearable=b)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.showPassword",label:"\u5BC6\u7801\u6846"},{default:t(()=>[a(r,{modelValue:e(l).prop.showPassword,"onUpdate:modelValue":o[2]||(o[2]=b=>e(l).prop.showPassword=b)},null,8,["modelValue"])]),_:1})],64)}}}),bl=h({__name:"TextareaAttr",setup(n){const s=F(),{curFormItem:l}=O(s);return(f,o)=>{const p=z,d=S,r=ae;return u(),k(C,null,[a(d,{prop:"prop.placeholder",label:"\u5360\u4F4D\u63D0\u793A"},{default:t(()=>[a(p,{modelValue:e(l).prop.placeholder,"onUpdate:modelValue":o[0]||(o[0]=b=>e(l).prop.placeholder=b)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.rows",label:"\u6587\u672C\u57DF\u884C\u6570"},{default:t(()=>[a(r,{modelValue:e(l).prop.rows,"onUpdate:modelValue":o[1]||(o[1]=b=>e(l).prop.rows=b)},null,8,["modelValue"])]),_:1})],64)}}}),vl=h({__name:"SelectAttr",setup(n){const s=F(),{curFormItem:l}=O(s),f=X([{field:"label",label:"\u5C55\u793A\u503C"},{field:"value",label:"\u5B9E\u9645\u503C"}]);return(o,p)=>{const d=z,r=S,b=le,y=fe;return u(),k(C,null,[a(r,{prop:"prop.placeholder",label:"\u5360\u4F4D\u63D0\u793A"},{default:t(()=>[a(d,{modelValue:e(l).prop.placeholder,"onUpdate:modelValue":p[0]||(p[0]=m=>e(l).prop.placeholder=m)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.clearable",label:"\u662F\u5426\u53EF\u6E05\u7A7A"},{default:t(()=>[a(b,{modelValue:e(l).prop.clearable,"onUpdate:modelValue":p[1]||(p[1]=m=>e(l).prop.clearable=m)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.filterable",label:"\u662F\u5426\u53EF\u641C\u7D22"},{default:t(()=>[a(b,{modelValue:e(l).prop.filterable,"onUpdate:modelValue":p[2]||(p[2]=m=>e(l).prop.filterable=m)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.options",label:"\u4E0B\u62C9\u6846\u6570\u636E"},{default:t(()=>[a(y,{data:e(l).prop.options,"column-config":f},null,8,["data","column-config"])]),_:1})],64)}}}),yl=h({__name:"CheckBoxAttr",setup(n){const s=F(),{curFormItem:l}=O(s),f=X([{field:"label",label:"\u5C55\u793A\u503C"},{field:"value",label:"\u5B9E\u9645\u503C"}]);return(o,p)=>{const d=le,r=S,b=fe;return u(),k(C,null,[a(r,{prop:"prop.border",label:"\u662F\u5426\u663E\u793A\u8FB9\u6846"},{default:t(()=>[a(d,{modelValue:e(l).prop.border,"onUpdate:modelValue":p[0]||(p[0]=y=>e(l).prop.border=y)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.options",label:"\u591A\u9009\u6846\u6570\u636E"},{default:t(()=>[a(b,{data:e(l).prop.options,"column-config":f},null,8,["data","column-config"])]),_:1})],64)}}}),_l=h({__name:"DateAttr",setup(n){const s=F(),{curFormItem:l}=O(s),f=X([{label:"year",value:"year"},{label:"month",value:"month"},{label:"date",value:"date"},{label:"dates",value:"dates"},{label:"datetime",value:"datetime"},{label:"week",value:"week"},{label:"datetimerange",value:"datetimerange"},{label:"daterange",value:"daterange"},{label:"monthrange",value:"monthrange"}]);return(o,p)=>{const d=z,r=S,b=te,y=re;return u(),k(C,null,[a(r,{prop:"prop.placeholder",label:"\u5360\u4F4D\u63D0\u793A"},{default:t(()=>[a(d,{modelValue:e(l).prop.placeholder,"onUpdate:modelValue":p[0]||(p[0]=m=>e(l).prop.placeholder=m)},null,8,["modelValue"])]),_:1}),e(l).type=="component"?(u(),v(r,{key:0,prop:"prop.valueFormat",label:"\u503C\u683C\u5F0F"},{default:t(()=>[a(d,{modelValue:e(l).prop.valueFormat,"onUpdate:modelValue":p[1]||(p[1]=m=>e(l).prop.valueFormat=m)},null,8,["modelValue"])]),_:1})):V("",!0),a(r,{prop:"prop.type",label:"\u65E5\u671F\u7C7B\u578B"},{default:t(()=>[a(y,{modelValue:e(l).prop.type,"onUpdate:modelValue":p[2]||(p[2]=m=>e(l).prop.type=m)},{default:t(()=>[(u(!0),k(C,null,$(f,m=>(u(),v(b,{key:m.value,value:m.value,label:m.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(r,{prop:"prop.format",label:"\u5C55\u793A\u683C\u5F0F"},{default:t(()=>[a(d,{modelValue:e(l).prop.format,"onUpdate:modelValue":p[3]||(p[3]=m=>e(l).prop.format=m)},null,8,["modelValue"])]),_:1})],64)}}}),Vl=h({__name:"TimeAttr",setup(n){const s=F(),{curFormItem:l}=O(s);return(f,o)=>{const p=z,d=S,r=le;return u(),k(C,null,[a(d,{prop:"prop.placeholder",label:"\u5360\u4F4D\u63D0\u793A"},{default:t(()=>[a(p,{modelValue:e(l).prop.placeholder,"onUpdate:modelValue":o[0]||(o[0]=b=>e(l).prop.placeholder=b)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.editable",label:"\u53EF\u8F93\u5165"},{default:t(()=>[a(r,{modelValue:e(l).prop.editable,"onUpdate:modelValue":o[1]||(o[1]=b=>e(l).prop.editable=b)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.clearable",label:"\u53EF\u6E05\u7A7A"},{default:t(()=>[a(r,{modelValue:e(l).prop.clearable,"onUpdate:modelValue":o[2]||(o[2]=b=>e(l).prop.clearable=b)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.arrowControl",label:"\u662F\u5426\u4F7F\u7528\u7BAD\u5934\u8FDB\u884C\u65F6\u95F4\u9009\u62E9"},{default:t(()=>[a(r,{modelValue:e(l).prop.arrowControl,"onUpdate:modelValue":o[3]||(o[3]=b=>e(l).prop.arrowControl=b)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.isRange",label:"\u65F6\u95F4\u8303\u56F4\u9009\u62E9"},{default:t(()=>[a(r,{modelValue:e(l).prop.isRange,"onUpdate:modelValue":o[4]||(o[4]=b=>e(l).prop.isRange=b)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.format",label:"\u5C55\u793A\u683C\u5F0F"},{default:t(()=>[a(p,{modelValue:e(l).prop.format,"onUpdate:modelValue":o[5]||(o[5]=b=>e(l).prop.format=b)},null,8,["modelValue"])]),_:1})],64)}}}),gl=h({__name:"InputNumberAttr",setup(n){const s=F(),{curFormItem:l}=O(s),f=X([{value:"right",label:"right"}]);return(o,p)=>{const d=z,r=S,b=ae,y=te,m=re;return u(),k(C,null,[a(r,{prop:"prop.placeholder",label:"\u5360\u4F4D\u63D0\u793A"},{default:t(()=>[a(d,{modelValue:e(l).prop.placeholder,"onUpdate:modelValue":p[0]||(p[0]=i=>e(l).prop.placeholder=i)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.step",label:"\u6B65\u957F"},{default:t(()=>[a(b,{modelValue:e(l).prop.step,"onUpdate:modelValue":p[1]||(p[1]=i=>e(l).prop.step=i)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.min",label:"\u6700\u5C0F\u503C"},{default:t(()=>[a(b,{modelValue:e(l).prop.min,"onUpdate:modelValue":p[2]||(p[2]=i=>e(l).prop.min=i)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.max",label:"\u6700\u5927\u503C"},{default:t(()=>[a(b,{modelValue:e(l).prop.max,"onUpdate:modelValue":p[3]||(p[3]=i=>e(l).prop.max=i)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.controlsPosition",label:"\u4F4D\u7F6E"},{default:t(()=>[a(m,{modelValue:e(l).prop.controlsPosition,"onUpdate:modelValue":p[4]||(p[4]=i=>e(l).prop.controlsPosition=i),clearable:""},{default:t(()=>[(u(!0),k(C,null,$(f,i=>(u(),v(y,{key:i.value,value:i.value,label:i.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})],64)}}}),hl=h({__name:"SwitchAttr",setup(n){const s=F(),{curFormItem:l}=O(s);return(f,o)=>{const p=z,d=S;return u(),k(C,null,[a(d,{prop:"prop.activeText",label:"\u6253\u5F00\u65F6\u7684\u6587\u5B57\u63CF\u8FF0"},{default:t(()=>[a(p,{modelValue:e(l).prop.activeText,"onUpdate:modelValue":o[0]||(o[0]=r=>e(l).prop.activeText=r)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.inactiveText",label:"\u5173\u95ED\u65F6\u7684\u6587\u5B57\u63CF\u8FF0"},{default:t(()=>[a(p,{modelValue:e(l).prop.inactiveText,"onUpdate:modelValue":o[1]||(o[1]=r=>e(l).prop.inactiveText=r)},null,8,["modelValue"])]),_:1})],64)}}}),kl=h({__name:"GridAttr",setup(n){const s=F(),{curFormItem:l}=O(s),f=X([{field:"span",label:"\u6805\u683C\u5360\u636E\u7684\u5217\u6570"}]);return(o,p)=>{const d=fe,r=S,b=ae;return u(),k(C,null,[a(r,{prop:"prop.cols",label:"\u6805\u683C\u5E03\u5C40"},{default:t(()=>[a(d,{data:e(l).prop.cols,"column-config":f},null,8,["data","column-config"])]),_:1}),a(r,{prop:"prop.gutter",label:"\u6805\u683C\u95F4\u9694"},{default:t(()=>[a(b,{modelValue:e(l).prop.gutter,"onUpdate:modelValue":p[0]||(p[0]=y=>e(l).prop.gutter=y)},null,8,["modelValue"])]),_:1})],64)}}}),Ul=h({__name:"CardAttr",setup(n){const s=F(),{curFormItem:l}=O(s),f=M([{label:"always",value:"always"},{label:"never",value:"never"},{label:"hover",value:"hover"}]);return(o,p)=>{const d=z,r=S,b=te,y=re;return u(),k(C,null,[a(r,{prop:"prop.header",label:"\u5361\u7247\u540D\u79F0"},{default:t(()=>[a(d,{modelValue:e(l).prop.header,"onUpdate:modelValue":p[0]||(p[0]=m=>e(l).prop.header=m)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.shadow",label:"\u9634\u5F71\u663E\u793A\u65F6\u673A"},{default:t(()=>[a(y,{modelValue:e(l).prop.shadow,"onUpdate:modelValue":p[1]||(p[1]=m=>e(l).prop.shadow=m)},{default:t(()=>[(u(!0),k(C,null,$(f.value,m=>(u(),v(b,{key:m.value,value:m.value,label:m.label},{default:t(()=>[w(W(m.label),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})],64)}}});var Ie=(n=>(n.large="large",n.default="default",n.small="small",n))(Ie||{}),Ce=(n=>(n.primary="primary",n.success="success",n.warning="warning",n.danger="danger",n.info="info",n))(Ce||{});const Il=h({__name:"ButtonAttr",setup(n){const s=F(),{curFormItem:l}=O(s);return(f,o)=>{const p=z,d=S,r=te,b=re,y=le,m=Be;return u(),k(C,null,[a(d,{prop:"prop.name",label:"\u6309\u94AE\u540D\u79F0"},{default:t(()=>[a(p,{modelValue:e(l).prop.name,"onUpdate:modelValue":o[0]||(o[0]=i=>e(l).prop.name=i)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.size",label:"\u6309\u94AE\u5C3A\u5BF8"},{default:t(()=>[a(b,{modelValue:e(l).prop.size,"onUpdate:modelValue":o[1]||(o[1]=i=>e(l).prop.size=i)},{default:t(()=>[(u(),k(C,null,$(Ie,i=>a(r,{key:i,value:i,label:i},{default:t(()=>[w(W(i),1)]),_:2},1032,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1}),a(d,{prop:"prop.type",label:"\u6309\u94AE\u7C7B\u578B"},{default:t(()=>[a(b,{modelValue:e(l).prop.type,"onUpdate:modelValue":o[2]||(o[2]=i=>e(l).prop.type=i),clearable:""},{default:t(()=>[(u(),k(C,null,$(Ce,i=>a(r,{key:i,value:i,label:i},{default:t(()=>[w(W(i),1)]),_:2},1032,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1}),a(d,{prop:"prop.plain",label:"\u6734\u7D20\u6309\u94AE"},{default:t(()=>[a(y,{modelValue:e(l).prop.plain,"onUpdate:modelValue":o[3]||(o[3]=i=>e(l).prop.plain=i)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.text",label:"\u6587\u5B57\u6309\u94AE"},{default:t(()=>[a(y,{modelValue:e(l).prop.text,"onUpdate:modelValue":o[4]||(o[4]=i=>e(l).prop.text=i)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.bg",label:"\u663E\u793A\u6587\u5B57\u6309\u94AE\u80CC\u666F\u989C\u8272"},{default:t(()=>[a(y,{modelValue:e(l).prop.bg,"onUpdate:modelValue":o[5]||(o[5]=i=>e(l).prop.bg=i)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.link",label:"\u94FE\u63A5\u6309\u94AE"},{default:t(()=>[a(y,{modelValue:e(l).prop.link,"onUpdate:modelValue":o[6]||(o[6]=i=>e(l).prop.link=i)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.round",label:"\u5706\u89D2\u6309\u94AE"},{default:t(()=>[a(y,{modelValue:e(l).prop.round,"onUpdate:modelValue":o[7]||(o[7]=i=>e(l).prop.round=i)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.circle",label:"\u5706\u5F62\u6309\u94AE"},{default:t(()=>[a(y,{modelValue:e(l).prop.circle,"onUpdate:modelValue":o[8]||(o[8]=i=>e(l).prop.circle=i)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.disabled",label:"\u7981\u7528"},{default:t(()=>[a(y,{modelValue:e(l).prop.disabled,"onUpdate:modelValue":o[9]||(o[9]=i=>e(l).prop.disabled=i)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.clickEvent",label:"\u70B9\u51FB\u4E8B\u4EF6"},{default:t(()=>[a(m,{code:e(l).prop.clickEvent,"onUpdate:code":o[10]||(o[10]=i=>e(l).prop.clickEvent=i),style:{width:"100%",height:"200px"}},null,8,["code"])]),_:1})],64)}}}),Cl=h({__name:"CollapseAttr",setup(n){const s=F(),{curFormItem:l}=O(s);return(f,o)=>{const p=z,d=S;return u(),v(d,{prop:"prop.title",label:"\u6298\u53E0\u9762\u677F\u540D\u79F0"},{default:t(()=>[a(p,{modelValue:e(l).prop.title,"onUpdate:modelValue":o[0]||(o[0]=r=>e(l).prop.title=r)},null,8,["modelValue"])]),_:1})}}}),xl=h({name:"EvFormAttr"}),wl=h({...xl,setup(n){const s=F(),{curFormItem:l}=O(s);return(f,o)=>{const p=be;return u(),v(p,{model:e(l)},{default:t(()=>[a(il),e(l).comp=="input"?(u(),v(fl,{key:0})):V("",!0),e(l).comp=="textarea"?(u(),v(bl,{key:1})):V("",!0),e(l).comp=="select"?(u(),v(vl,{key:2})):V("",!0),e(l).comp=="checkbox"?(u(),v(yl,{key:3})):V("",!0),e(l).comp=="date"?(u(),v(_l,{key:4})):V("",!0),e(l).comp=="time"?(u(),v(Vl,{key:5})):V("",!0),e(l).comp=="number"?(u(),v(gl,{key:6})):V("",!0),e(l).comp=="switch"?(u(),v(hl,{key:7})):V("",!0),e(l).comp=="button"?(u(),v(Il,{key:8})):V("",!0),e(l).comp=="grid"?(u(),v(kl,{key:9})):V("",!0),e(l).comp=="card"?(u(),v(Ul,{key:10})):V("",!0),e(l).comp=="collapse"?(u(),v(Cl,{key:11})):V("",!0)]),_:1},8,["model"])}}}),Fl=h({name:"dropGrid"}),Al=h({...Fl,props:{cols:{type:Array,required:!0}},setup(n){const s=n,{cols:l}=ve(s);return(f,o)=>{const p=Qo,d=Zo;return u(),v(d,oe(ye(f.$attrs)),{default:t(()=>[(u(!0),k(C,null,$(e(l),r=>(u(),v(p,{key:r.key,span:Number(r.span),class:"col"},{default:t(()=>[a(pe,{list:r.list,"onUpdate:list":b=>r.list=b},null,8,["list","onUpdate:list"])]),_:2},1032,["span"]))),128))]),_:1},16)}}}),Ol=G(Al,[["__scopeId","data-v-80026d22"]]),Pl=h({name:"dropCard"}),Sl=h({...Pl,props:{card:{type:Object,required:!0}},setup(n){const s=n,{card:l}=ve(s);return(f,o)=>{const p=ea;return u(),v(p,oe(ye(f.$attrs)),{default:t(()=>[a(pe,{list:e(l).list,"onUpdate:list":o[0]||(o[0]=d=>e(l).list=d),style:{"min-height":"40px"}},null,8,["list"])]),_:1},16)}}}),Dl=G(Sl,[["__scopeId","data-v-7a657d78"]]),Ml=h({name:"dropCard"}),zl=h({...Ml,props:{collapse:{type:Object,required:!0},title:{type:String,required:!0,default:"\u6807\u9898"}},setup(n){const s=n,{collapse:l,title:f}=ve(s);return(o,p)=>{const d=la,r=oa;return u(),v(r,oe(ye(o.$attrs)),{default:t(()=>[a(d,{title:e(f),name:e(f)},{default:t(()=>[a(pe,{list:e(l).list,"onUpdate:list":p[0]||(p[0]=b=>e(l).list=b),style:{"min-height":"40px"}},null,8,["list"])]),_:1},8,["title","name"])]),_:1},16)}}}),ql=G(zl,[["__scopeId","data-v-fbcd0f50"]]),Tl=["onClick"],Ll={key:1},Rl=["onClick"],Bl=h({name:"dropComp"}),$l=h({...Bl,props:{list:{type:Array,required:!0,default:()=>[]}},emits:["update:list"],setup(n,{emit:s}){const l=n,f=F(),{formData:o,curFormItem:p}=O(f),{onClickFormItem:d}=f,r=ee({get(){return l.list},set(m){s("update:list",m)}}),b=m=>{const i=r.value.findIndex(_=>_.compId==m.compId);r.value.splice(i,1)},y=m=>{if(m&&m.dataTransfer){const i=m.dataTransfer.getData("comp");let _=JSON.parse(i);r.value.push(_)}};return(m,i)=>{const _=z,U=te,T=re,D=aa,N=ta,R=ra,B=pa,A=na,E=ae,Y=le,K=$e,j=S;return u(),v(e(ca),{modelValue:e(r),"onUpdate:modelValue":i[0]||(i[0]=c=>Fe(r)?r.value=c:null),"item-key":"compId",group:"comp",class:"drop_container",onDrop:_e(y,["prevent","stop"]),onDragover:i[1]||(i[1]=_e(()=>{},["prevent"]))},{item:t(({element:c})=>[x("div",{class:H(["drop_container_item",e(p).compId==c.compId?"drop_container_item-active":""]),onClick:_e(g=>e(d)(c),["stop"])},[c.type=="component"?(u(),v(j,P({key:0,prop:c.prop.field},c.form_config),{default:t(()=>[c.comp=="input"?(u(),v(_,P({key:c.compId,modelValue:e(o)[c.prop.field],"onUpdate:modelValue":g=>e(o)[c.prop.field]=g},c.prop),null,16,["modelValue","onUpdate:modelValue"])):V("",!0),c.comp=="textarea"?(u(),v(_,P({key:c.compId,modelValue:e(o)[c.prop.field],"onUpdate:modelValue":g=>e(o)[c.prop.field]=g},c.prop),null,16,["modelValue","onUpdate:modelValue"])):V("",!0),c.comp=="select"?(u(),v(T,P({key:2},c.prop,{key:c.compId,modelValue:e(o)[c.prop.field],"onUpdate:modelValue":g=>e(o)[c.prop.field]=g}),{default:t(()=>[(u(!0),k(C,null,$(c.prop.options,g=>(u(),v(U,{key:g.value,value:g.value,label:g.label},null,8,["value","label"]))),128))]),_:2},1040,["modelValue","onUpdate:modelValue"])):V("",!0),c.comp=="color"?(u(),v(D,P({key:3},c.prop,{key:c.compId,modelValue:e(o)[c.prop.field],"onUpdate:modelValue":g=>e(o)[c.prop.field]=g}),null,16,["modelValue","onUpdate:modelValue"])):V("",!0),c.comp=="checkbox"?(u(),v(R,P({key:4},c.prop,{key:c.compId,modelValue:e(o)[c.prop.field],"onUpdate:modelValue":g=>e(o)[c.prop.field]=g}),{default:t(()=>[(u(!0),k(C,null,$(c.prop.options,g=>(u(),v(N,{key:g.value,label:g.value},{default:t(()=>[w(W(g.label),1)]),_:2},1032,["label"]))),128))]),_:2},1040,["modelValue","onUpdate:modelValue"])):V("",!0),c.comp=="date"?(u(),v(B,P({key:5},c.prop,{key:c.compId,modelValue:e(o)[c.prop.field],"onUpdate:modelValue":g=>e(o)[c.prop.field]=g}),null,16,["modelValue","onUpdate:modelValue"])):V("",!0),c.comp=="time"?(u(),v(A,P({key:6},c.prop,{key:c.compId,modelValue:e(o)[c.prop.field],"onUpdate:modelValue":g=>e(o)[c.prop.field]=g}),null,16,["modelValue","onUpdate:modelValue"])):V("",!0),c.comp=="number"?(u(),v(E,P({key:7},c.prop,{key:c.compId,modelValue:e(o)[c.prop.field],"onUpdate:modelValue":g=>e(o)[c.prop.field]=g}),null,16,["modelValue","onUpdate:modelValue"])):V("",!0),c.comp=="switch"?(u(),v(Y,P({key:8},c.prop,{key:c.compId,modelValue:e(o)[c.prop.field],"onUpdate:modelValue":g=>e(o)[c.prop.field]=g}),null,16,["modelValue","onUpdate:modelValue"])):V("",!0),c.comp=="button"?(u(),v(K,P({key:9},c.prop,{key:c.compId}),{default:t(()=>[w(W(c.prop.name),1)]),_:2},1040)):V("",!0)]),_:2},1040,["prop"])):V("",!0),c.type=="container"?(u(),k("div",Ll,[c.comp=="grid"?(u(),v(Ol,oe(P({key:0},c.prop)),null,16)):V("",!0),c.comp=="card"?(u(),v(Dl,oe(P({key:1},c.prop)),null,16)):V("",!0),c.comp=="collapse"?(u(),v(ql,oe(P({key:2},c.prop)),null,16)):V("",!0)])):V("",!0),x("div",{class:"drop_container_item_opt iconfont icon-a-shanchulajitong",onClick:g=>b(c)},null,8,Rl)],10,Tl)]),_:1},8,["modelValue","onDrop"])}}}),pe=G($l,[["__scopeId","data-v-a2f7a2bf"]]),Nl={class:"container"},El=h({__name:"dropContainer",setup(n){const s=F(),{saveForm:l}=O(s);return(f,o)=>{const p=be;return u(),k("div",Nl,[a(p,P(e(l).formProp,{style:{width:"100%",height:"100%"}}),{default:t(()=>[a(pe,{list:e(l).list,"onUpdate:list":o[0]||(o[0]=d=>e(l).list=d)},null,8,["list"])]),_:1},16)])}}}),Yl=G(El,[["__scopeId","data-v-09f15553"]]),jl=[{comp:"input",compId:"1",name:"\u8F93\u5165\u6846",type:"component",prop:{placeholder:"\u8F93\u5165\u63D0\u793A",readonly:!1,disabled:!1,field:"1",clearable:!0,showPassword:!1},form_config:{label:"\u8F93\u5165\u6846",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"textarea",compId:"1",name:"\u6587\u672C\u57DF",type:"component",prop:{placeholder:"\u8F93\u5165\u63D0\u793A",readonly:!1,disabled:!1,field:"1",type:"textarea",rows:2},form_config:{label:"\u6587\u672C\u57DF",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"select",compId:"2",name:"\u9009\u62E9\u6846",type:"component",prop:{options:[{value:1,label:1,key:1}],placeholder:"\u8F93\u5165\u63D0\u793A",readonly:!1,disabled:!1,field:"2",clearable:!0,filterable:!0},form_config:{label:"\u9009\u62E9\u6846",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"color",compId:"3",name:"\u53D6\u8272\u5668",type:"component",prop:{readonly:!1,disabled:!1,field:"3"},form_config:{label:"\u53D6\u8272\u5668",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"checkbox",compId:"4",name:"\u591A\u9009\u6846",type:"component",prop:{options:[{value:1,label:1},{value:2,label:2}],placeholder:"\u8F93\u5165\u63D0\u793A",readonly:!1,disabled:!1,field:"4"},form_config:{label:"\u591A\u9009\u6846",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"date",compId:"5",name:"\u65E5\u671F\u9009\u62E9\u5668",type:"component",prop:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD",type:"date",placeholder:"\u8F93\u5165\u63D0\u793A",readonly:!1,disabled:!1,field:"5"},form_config:{label:"\u65E5\u671F\u9009\u62E9\u5668",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"number",compId:"6",name:"\u6570\u5B57\u8F93\u5165\u6846",type:"component",prop:{placeholder:"\u8F93\u5165\u63D0\u793A",readonly:!1,disabled:!1,field:"6",step:1,min:0,max:100,controlsPosition:"right"},form_config:{label:"\u6570\u5B57\u8F93\u5165\u6846",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"switch",compId:"7",name:"\u5F00\u5173",type:"component",prop:{placeholder:"\u8F93\u5165\u63D0\u793A",disabled:!1,field:"6",activeText:"",inactiveText:""},form_config:{label:"\u5F00\u5173",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"time",compId:"7",name:"\u65F6\u95F4\u9009\u62E9\u5668",type:"component",prop:{placeholder:"\u8F93\u5165\u63D0\u793A",format:"HH:mm:ss",isRange:!1,arrowControl:!1,clearable:!1,editable:!1,readonly:!1,disabled:!1,field:"6"},form_config:{label:"\u65F6\u95F4\u9009\u62E9\u5668",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"button",compId:"7",name:"\u6309\u94AE",type:"component",prop:{round:!1,link:!1,bg:!1,text:!1,plain:!1,disabled:!1,field:"6",name:"\u6309\u94AE",size:"default",type:"info",clickEvent:""}},{comp:"grid",compId:"",name:"\u6805\u683C",type:"container",prop:{cols:[{list:[],key:Ve(),span:12},{list:[],key:Ve(),span:12}],gutter:0,field:""}},{comp:"card",compId:"",name:"\u5361\u7247\u5BB9\u5668",type:"container",prop:{card:{list:[]},field:"",header:"\u5361\u7247\u5BB9\u5668\u6807\u9898",shadow:"always"}},{comp:"collapse",compId:"",name:"\u6298\u53E0\u9762\u677F",type:"container",prop:{collapse:{list:[]},field:"",title:"\u6298\u53E0\u9762\u677F\u6807\u9898"}}],Jl=jl,xe=n=>(Ne("data-v-a8dba2b8"),n=n(),Ee(),n),Hl={class:"comp_container"},Wl=xe(()=>x("div",{class:"title"}," \u8868\u5355\u7EC4\u4EF6 ",-1)),Xl={class:"com-list"},Gl={class:"container-list"},Kl={class:"comp_list_container"},Ql=["data-comp"],Zl=xe(()=>x("div",{class:"title"}," \u5BB9\u5668\u7EC4\u4EF6 ",-1)),eo={class:"container-list"},lo={class:"comp_list_container"},oo=["data-comp"],ao=h({__name:"dragCompList",setup(n){const s=M([]),l=M([]);Jl.forEach(o=>{o.type=="component"?s.value.push(o):o.type=="container"&&l.value.push(o)});const f=o=>{if(o&&o.dataTransfer&&o.target){let p=o.target,d=JSON.parse(p.dataset.comp);d.compId=Ve(),d.prop.field=`field${(Math.random()*1e4).toFixed(0)}`,o.dataTransfer.setData("comp",JSON.stringify(d))}};return(o,p)=>(u(),k("div",Hl,[Wl,x("div",Xl,[x("div",Gl,[x("div",Kl,[(u(!0),k(C,null,$(s.value,d=>(u(),k("div",{key:d.compId,class:"comp",draggable:"true","data-comp":JSON.stringify(d),onDragstart:f},W(d.name),41,Ql))),128))])])]),Zl,x("div",eo,[x("div",lo,[(u(!0),k(C,null,$(l.value,d=>(u(),k("div",{key:d.compId,class:"comp",draggable:"true","data-comp":JSON.stringify(d),onDragstart:f},W(d.name),41,oo))),128))])])]))}}),to=G(ao,[["__scopeId","data-v-a8dba2b8"]]),ro=h({name:"FormAttr"}),po=h({...ro,setup(n){const s=F(),{saveForm:l}=O(s);return(f,o)=>{const p=Le,d=Re,r=S,b=ae,y=be;return u(),v(y,{model:e(l).formProp},{default:t(()=>[a(r,{prop:"size",label:"\u5927\u5C0F"},{default:t(()=>[a(d,{modelValue:e(l).formProp.size,"onUpdate:modelValue":o[0]||(o[0]=m=>e(l).formProp.size=m),label:"size control"},{default:t(()=>[a(p,{label:"large"},{default:t(()=>[w("large")]),_:1}),a(p,{label:"default"},{default:t(()=>[w("default")]),_:1}),a(p,{label:"small"},{default:t(()=>[w("small")]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(r,{prop:"labelPosition",label:"\u8868\u5355\u57DF\u6807\u7B7E\u7684\u4F4D\u7F6E"},{default:t(()=>[a(d,{modelValue:e(l).formProp.labelPosition,"onUpdate:modelValue":o[1]||(o[1]=m=>e(l).formProp.labelPosition=m),label:"position control"},{default:t(()=>[a(p,{label:"left"},{default:t(()=>[w("Left")]),_:1}),a(p,{label:"right"},{default:t(()=>[w("Right")]),_:1}),a(p,{label:"top"},{default:t(()=>[w("Top")]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(r,{prop:"labelWidth",label:"\u8868\u5355\u57DF\u6807\u7B7E\u5BBD\u5EA6"},{default:t(()=>[a(b,{modelValue:e(l).formProp.labelWidth,"onUpdate:modelValue":o[2]||(o[2]=m=>e(l).formProp.labelWidth=m),step:1,min:0},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])}}}),no=n=>(Ne("data-v-d1866eac"),n=n(),Ee(),n),uo={class:"form_name"},so=no(()=>x("span",null," \u8868\u5355\u540D\u79F0 ",-1)),mo={class:"form_opt"},co=h({__name:"formHeader",setup(n){const s=M(!1),l=()=>{s.value=!0},f=F(),{saveForm:o}=O(f),p=()=>{ge(JSON.stringify(o.value,null,4),o.value.name)},d=_=>{_==2?ge(da(o.value),o.value.name,"vue"):ge(ua(o.value),o.value.name,"vue")},r=M(!1),b=()=>{r.value=!0},y=M(""),{setForm:m}=f,i=()=>{const _=JSON.parse(y.value);m(_),r.value=!1};return(_,U)=>{const T=z,D=$e,N=sa,R=cl,B=Be;return u(),k(C,null,[x("div",uo,[so,a(T,{modelValue:e(o).name,"onUpdate:modelValue":U[0]||(U[0]=A=>e(o).name=A)},null,8,["modelValue"])]),x("div",mo,[a(D,{onClick:b},{default:t(()=>[w(" \u5199\u5165JSON ")]),_:1}),a(D,{onClick:l},{default:t(()=>[w(" \u9884\u89C8 ")]),_:1}),a(D,{onClick:p},{default:t(()=>[w(" \u5BFC\u51FAJSON ")]),_:1}),a(D,{onClick:U[1]||(U[1]=A=>d(3))},{default:t(()=>[w(" \u5BFC\u51FAVUE\u6587\u4EF6(vue3) ")]),_:1}),a(D,{onClick:U[2]||(U[2]=A=>d(2))},{default:t(()=>[w(" \u5BFC\u51FAVUE\u6587\u4EF6(vue2) ")]),_:1})]),a(R,{modelValue:s.value,"onUpdate:modelValue":U[3]||(U[3]=A=>s.value=A),title:"\u9884\u89C8"},{default:t(()=>[a(N,{"form-config":e(o)},null,8,["form-config"])]),_:1},8,["modelValue"]),a(R,{modelValue:r.value,"onUpdate:modelValue":U[5]||(U[5]=A=>r.value=A),title:"JSON\u914D\u7F6E"},{footer:t(()=>[a(D,{onClick:i},{default:t(()=>[w(" \u786E\u8BA4 ")]),_:1})]),default:t(()=>[a(B,{code:y.value,"onUpdate:code":U[4]||(U[4]=A=>y.value=A)},null,8,["code"])]),_:1},8,["modelValue"])],64)}}}),io=G(co,[["__scopeId","data-v-d1866eac"]]),fo={class:"form-design"},bo={class:"form-design_header"},vo={class:"form-design_container"},yo={class:"form-design_opt"},_o=h({__name:"FormDesign",setup(n){const s=M("comp");return(l,f)=>{const o=wl,p=ia,d=fa;return u(),k("div",fo,[x("div",bo,[a(io)]),x("div",vo,[a(to),a(Yl),x("div",yo,[a(d,{modelValue:s.value,"onUpdate:modelValue":f[0]||(f[0]=r=>s.value=r)},{default:t(()=>[a(p,{label:"\u7EC4\u4EF6\u914D\u7F6E",name:"comp"},{default:t(()=>[a(o)]),_:1}),a(p,{label:"\u8868\u5355\u914D\u7F6E",name:"form"},{default:t(()=>[a(po)]),_:1})]),_:1},8,["modelValue"])])])])}}});Ye=G(_o,[["__scopeId","data-v-bfe48856"]])});export{va as __tla,Ye as default};
