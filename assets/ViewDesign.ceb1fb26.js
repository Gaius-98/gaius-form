import{bE as Ve,bF as ne,cH as Ee,cI as Me,bN as se,cJ as xe,cK as Fe,cE as ke,cL as Gl,t as W,av as Ql,cM as Zl,ao as ue,Z as S,cN as Kl,x as ea,ai as la,a_ as re,cO as Ne,cA as aa,bu as ta,cP as Ie,d as X,bv as _e,r as Oe,B as pe,o as b,c as P,b as z,b3 as D,a1 as O,J as Se,u as a,G as J,cQ as ia,I as le,bL as Le,cD as $e,af as oa,bI as na,cR as sa,cS as ra,aC as ua,$ as N,a0 as j,N as R,aG as K,c2 as Ce,bW as pa,cT as da,cU as ca,bY as de,aK as ma,H as va,ae as fa,an as ga,cV as ba,_ as ce,aI as ya,a6 as me,cW as Te,ce as ha,cf as wa,bZ as Va,b_ as xa,c4 as ka,c5 as _a,b$ as Sa,cg as Ca,c6 as Ta,cX as za,c7 as Da,cY as Ba,cl as Pa,__tla as Ea}from"./index.3cc96512.js";import{u as ve,__tla as Ma}from"./viewDesign.3a38bd18.js";import{E as Fa,a as Na,__tla as Ia}from"./tab-pane.9a9c02c2.js";let Ae,Oa=Promise.all([(()=>{try{return Ea}catch{}})(),(()=>{try{return Ma}catch{}})(),(()=>{try{return Ia}catch{}})()]).then(async()=>{const ze=Symbol("sliderContextKey"),Ye=Ve({modelValue:{type:ne([Number,Array]),default:0},id:{type:String,default:void 0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},showInput:Boolean,showInputControls:{type:Boolean,default:!0},size:Ee,inputSize:Ee,showStops:Boolean,showTooltip:{type:Boolean,default:!0},formatTooltip:{type:ne(Function),default:void 0},disabled:Boolean,range:Boolean,vertical:Boolean,height:String,debounce:{type:Number,default:300},label:{type:String,default:void 0},rangeStartLabel:{type:String,default:void 0},rangeEndLabel:{type:String,default:void 0},formatValueText:{type:ne(Function),default:void 0},tooltipClass:{type:String,default:void 0},placement:{type:String,values:Me,default:"top"},marks:{type:ne(Object)},validateEvent:{type:Boolean,default:!0}}),fe=e=>ke(e)||Gl(e)&&e.every(ke),Xe={[se]:fe,[xe]:fe,[Fe]:fe},je=(e,l,d)=>{const t=W();return Ql(async()=>{e.range?(Array.isArray(e.modelValue)?(l.firstValue=Math.max(e.min,e.modelValue[0]),l.secondValue=Math.min(e.max,e.modelValue[1])):(l.firstValue=e.min,l.secondValue=e.max),l.oldValue=[l.firstValue,l.secondValue]):(typeof e.modelValue!="number"||Number.isNaN(e.modelValue)?l.firstValue=e.min:l.firstValue=Math.min(e.max,Math.max(e.min,e.modelValue)),l.oldValue=l.firstValue),Zl(window,"resize",d),await ue(),d()}),{sliderWrapper:t}},Ue=e=>S(()=>e.marks?Object.keys(e.marks).map(Number.parseFloat).sort((l,d)=>l-d).filter(l=>l<=e.max&&l>=e.min).map(l=>({point:l,position:(l-e.min)*100/(e.max-e.min),mark:e.marks[l]})):[]),We=(e,l,d)=>{const{form:t,formItem:i}=Kl(),s=ea(),n=W(),c=W(),v={firstButton:n,secondButton:c},g=S(()=>e.disabled||(t==null?void 0:t.disabled)||!1),y=S(()=>Math.min(l.firstValue,l.secondValue)),o=S(()=>Math.max(l.firstValue,l.secondValue)),u=S(()=>e.range?`${100*(o.value-y.value)/(e.max-e.min)}%`:`${100*(l.firstValue-e.min)/(e.max-e.min)}%`),p=S(()=>e.range?`${100*(y.value-e.min)/(e.max-e.min)}%`:"0%"),m=S(()=>e.vertical?{height:e.height}:{}),x=S(()=>e.vertical?{height:u.value,bottom:p.value}:{width:u.value,left:p.value}),B=()=>{s.value&&(l.sliderSize=s.value[`client${e.vertical?"Height":"Width"}`])},L=w=>{const _=e.min+w*(e.max-e.min)/100;if(!e.range)return n;let F;return Math.abs(y.value-_)<Math.abs(o.value-_)?F=l.firstValue<l.secondValue?"firstButton":"secondButton":F=l.firstValue>l.secondValue?"firstButton":"secondButton",v[F]},E=w=>{const _=L(w);return _.value.setPosition(w),_},M=w=>{l.firstValue=w,k(e.range?[y.value,o.value]:w)},I=w=>{l.secondValue=w,e.range&&k([y.value,o.value])},k=w=>{d(se,w),d(xe,w)},C=async()=>{await ue(),d(Fe,e.range?[y.value,o.value]:e.modelValue)},q=w=>{var _,F,r,V,$,ae;if(g.value||l.dragging)return;B();let H=0;if(e.vertical){const ee=(r=(F=(_=w.touches)==null?void 0:_.item(0))==null?void 0:F.clientY)!=null?r:w.clientY;H=(s.value.getBoundingClientRect().bottom-ee)/l.sliderSize*100}else{const ee=(ae=($=(V=w.touches)==null?void 0:V.item(0))==null?void 0:$.clientX)!=null?ae:w.clientX,te=s.value.getBoundingClientRect().left;H=(ee-te)/l.sliderSize*100}if(!(H<0||H>100))return E(H)};return{elFormItem:i,slider:s,firstButton:n,secondButton:c,sliderDisabled:g,minValue:y,maxValue:o,runwayStyle:m,barStyle:x,resetSize:B,setPosition:E,emitChange:C,onSliderWrapperPrevent:w=>{var _,F;(((_=v.firstButton.value)==null?void 0:_.dragging)||((F=v.secondButton.value)==null?void 0:F.dragging))&&w.preventDefault()},onSliderClick:w=>{q(w)&&C()},onSliderDown:async w=>{const _=q(w);_&&(await ue(),_.value.onButtonDown(w))},setFirstValue:M,setSecondValue:I}},{left:Je,down:He,right:Re,up:qe,home:Ge,end:Qe,pageUp:Ze,pageDown:Ke}=aa,el=(e,l,d)=>{const t=W(),i=W(!1),s=S(()=>l.value instanceof Function),n=S(()=>s.value&&l.value(e.modelValue)||e.modelValue),c=Ne(()=>{d.value&&(i.value=!0)},50),v=Ne(()=>{d.value&&(i.value=!1)},50);return{tooltip:t,tooltipVisible:i,formatValue:n,displayTooltip:c,hideTooltip:v}},ll=(e,l,d)=>{const{disabled:t,min:i,max:s,step:n,showTooltip:c,precision:v,sliderSize:g,formatTooltip:y,emitChange:o,resetSize:u,updateDragging:p}=la(ze),{tooltip:m,tooltipVisible:x,formatValue:B,displayTooltip:L,hideTooltip:E}=el(e,y,c),M=W(),I=S(()=>`${(e.modelValue-i.value)/(s.value-i.value)*100}%`),k=S(()=>e.vertical?{bottom:I.value}:{left:I.value}),C=()=>{l.hovering=!0,L()},q=()=>{l.hovering=!1,l.dragging||E()},w=f=>{t.value||(f.preventDefault(),he(f),window.addEventListener("mousemove",G),window.addEventListener("touchmove",G),window.addEventListener("mouseup",Q),window.addEventListener("touchend",Q),window.addEventListener("contextmenu",Q),M.value.focus())},_=f=>{t.value||(l.newPosition=Number.parseFloat(I.value)+f/(s.value-i.value)*100,Z(l.newPosition),o())},F=()=>{_(-n.value)},r=()=>{_(n.value)},V=()=>{_(-n.value*4)},$=()=>{_(n.value*4)},ae=()=>{t.value||(Z(0),o())},H=()=>{t.value||(Z(100),o())},ee=f=>{let T=!0;[Je,He].includes(f.key)?F():[Re,qe].includes(f.key)?r():f.key===Ge?ae():f.key===Qe?H():f.key===Ke?V():f.key===Ze?$():T=!1,T&&f.preventDefault()},te=f=>{let T,A;return f.type.startsWith("touch")?(A=f.touches[0].clientY,T=f.touches[0].clientX):(A=f.clientY,T=f.clientX),{clientX:T,clientY:A}},he=f=>{l.dragging=!0,l.isClick=!0;const{clientX:T,clientY:A}=te(f);e.vertical?l.startY=A:l.startX=T,l.startPosition=Number.parseFloat(I.value),l.newPosition=l.startPosition},G=f=>{if(l.dragging){l.isClick=!1,L(),u();let T;const{clientX:A,clientY:we}=te(f);e.vertical?(l.currentY=we,T=(l.startY-l.currentY)/g.value*100):(l.currentX=A,T=(l.currentX-l.startX)/g.value*100),l.newPosition=l.startPosition+T,Z(l.newPosition)}},Q=()=>{l.dragging&&(setTimeout(()=>{l.dragging=!1,l.hovering||E(),l.isClick||Z(l.newPosition),o()},0),window.removeEventListener("mousemove",G),window.removeEventListener("touchmove",G),window.removeEventListener("mouseup",Q),window.removeEventListener("touchend",Q),window.removeEventListener("contextmenu",Q))},Z=async f=>{if(f===null||Number.isNaN(+f))return;f<0?f=0:f>100&&(f=100);const T=100/((s.value-i.value)/n.value);let A=Math.round(f/T)*T*(s.value-i.value)*.01+i.value;A=Number.parseFloat(A.toFixed(v.value)),A!==e.modelValue&&d(se,A),!l.dragging&&e.modelValue!==l.oldValue&&(l.oldValue=e.modelValue),await ue(),l.dragging&&L(),m.value.updatePopper()};return re(()=>l.dragging,f=>{p(f)}),{disabled:t,button:M,tooltip:m,tooltipVisible:x,showTooltip:c,wrapperStyle:k,formatValue:B,handleMouseEnter:C,handleMouseLeave:q,onButtonDown:w,onKeyDown:ee,setPosition:Z}},al=(e,l,d,t)=>({stops:S(()=>{if(!e.showStops||e.min>e.max)return[];if(e.step===0)return[];const i=(e.max-e.min)/e.step,s=100*e.step/(e.max-e.min),n=Array.from({length:i-1}).map((c,v)=>(v+1)*s);return e.range?n.filter(c=>c<100*(d.value-e.min)/(e.max-e.min)||c>100*(t.value-e.min)/(e.max-e.min)):n.filter(c=>c>100*(l.firstValue-e.min)/(e.max-e.min))}),getStopStyle:i=>e.vertical?{bottom:`${i}%`}:{left:`${i}%`}}),tl=(e,l,d,t,i,s)=>{const n=g=>{i(se,g),i(xe,g)},c=()=>e.range?![d.value,t.value].every((g,y)=>g===l.oldValue[y]):e.modelValue!==l.oldValue,v=()=>{var g,y;e.min>e.max&&ta("Slider","min should not be greater than max.");const o=e.modelValue;e.range&&Array.isArray(o)?o[1]<e.min?n([e.min,e.min]):o[0]>e.max?n([e.max,e.max]):o[0]<e.min?n([e.min,o[1]]):o[1]>e.max?n([o[0],e.max]):(l.firstValue=o[0],l.secondValue=o[1],c()&&(e.validateEvent&&((g=s==null?void 0:s.validate)==null||g.call(s,"change").catch(u=>Ie())),l.oldValue=o.slice())):!e.range&&typeof o=="number"&&!Number.isNaN(o)&&(o<e.min?n(e.min):o>e.max?n(e.max):(l.firstValue=o,c()&&(e.validateEvent&&((y=s==null?void 0:s.validate)==null||y.call(s,"change").catch(u=>Ie())),l.oldValue=o)))};v(),re(()=>l.dragging,g=>{g||v()}),re(()=>e.modelValue,(g,y)=>{l.dragging||Array.isArray(g)&&Array.isArray(y)&&g.every((o,u)=>o===y[u])&&l.firstValue===g[0]&&l.secondValue===g[1]||v()},{deep:!0}),re(()=>[e.min,e.max],()=>{v()})},il=Ve({modelValue:{type:Number,default:0},vertical:Boolean,tooltipClass:String,placement:{type:String,values:Me,default:"top"}}),ol={[se]:e=>ke(e)},nl=["tabindex"],sl=X({name:"ElSliderButton"}),rl=X({...sl,props:il,emits:ol,setup(e,{expose:l,emit:d}){const t=e,i=_e("slider"),s=Oe({hovering:!1,dragging:!1,isClick:!1,startX:0,currentX:0,startY:0,currentY:0,startPosition:0,newPosition:0,oldValue:t.modelValue}),{disabled:n,button:c,tooltip:v,showTooltip:g,tooltipVisible:y,wrapperStyle:o,formatValue:u,handleMouseEnter:p,handleMouseLeave:m,onButtonDown:x,onKeyDown:B,setPosition:L}=ll(t,s,d),{hovering:E,dragging:M}=pe(s);return l({onButtonDown:x,onKeyDown:B,setPosition:L,hovering:E,dragging:M}),(I,k)=>(b(),P("div",{ref_key:"button",ref:c,class:J([a(i).e("button-wrapper"),{hover:a(E),dragging:a(M)}]),style:le(a(o)),tabindex:a(n)?-1:0,onMouseenter:k[0]||(k[0]=(...C)=>a(p)&&a(p)(...C)),onMouseleave:k[1]||(k[1]=(...C)=>a(m)&&a(m)(...C)),onMousedown:k[2]||(k[2]=(...C)=>a(x)&&a(x)(...C)),onTouchstart:k[3]||(k[3]=(...C)=>a(x)&&a(x)(...C)),onFocus:k[4]||(k[4]=(...C)=>a(p)&&a(p)(...C)),onBlur:k[5]||(k[5]=(...C)=>a(m)&&a(m)(...C)),onKeydown:k[6]||(k[6]=(...C)=>a(B)&&a(B)(...C))},[z(a(ia),{ref_key:"tooltip",ref:v,visible:a(y),placement:I.placement,"fallback-placements":["top","bottom","right","left"],"stop-popper-mouse-event":!1,"popper-class":I.tooltipClass,disabled:!a(g),persistent:""},{content:D(()=>[O("span",null,Se(a(u)),1)]),default:D(()=>[O("div",{class:J([a(i).e("button"),{hover:a(E),dragging:a(M)}])},null,2)]),_:1},8,["visible","placement","popper-class","disabled"])],46,nl))}});var De=Le(rl,[["__file","/home/runner/work/element-plus/element-plus/packages/components/slider/src/button.vue"]]);const ul=Ve({mark:{type:ne([String,Object]),default:void 0}});var pl=X({name:"ElSliderMarker",props:ul,setup(e){const l=_e("slider"),d=S(()=>$e(e.mark)?e.mark:e.mark.label),t=S(()=>$e(e.mark)?void 0:e.mark.style);return()=>oa("div",{class:l.e("marks-text"),style:t.value},d.value)}});const dl=["id","role","aria-label","aria-labelledby"],cl={key:1},ml=X({name:"ElSlider"}),vl=X({...ml,props:Ye,emits:Xe,setup(e,{expose:l,emit:d}){const t=e,i=_e("slider"),{t:s}=na(),n=Oe({firstValue:0,secondValue:0,oldValue:0,dragging:!1,sliderSize:1}),{elFormItem:c,slider:v,firstButton:g,secondButton:y,sliderDisabled:o,minValue:u,maxValue:p,runwayStyle:m,barStyle:x,resetSize:B,emitChange:L,onSliderWrapperPrevent:E,onSliderClick:M,onSliderDown:I,setFirstValue:k,setSecondValue:C}=We(t,n,d),{stops:q,getStopStyle:w}=al(t,n,u,p),{inputId:_,isLabeledByFormItem:F}=sa(t,{formItemContext:c}),r=ra(),V=S(()=>t.inputSize||r.value),$=S(()=>t.label||s("el.slider.defaultLabel",{min:t.min,max:t.max})),ae=S(()=>t.range?t.rangeStartLabel||s("el.slider.defaultRangeStartLabel"):$.value),H=S(()=>t.formatValueText?t.formatValueText(f.value):`${f.value}`),ee=S(()=>t.rangeEndLabel||s("el.slider.defaultRangeEndLabel")),te=S(()=>t.formatValueText?t.formatValueText(T.value):`${T.value}`),he=S(()=>[i.b(),i.m(r.value),i.is("vertical",t.vertical),{[i.m("with-input")]:t.showInput}]),G=Ue(t);tl(t,n,u,p,d,c);const Q=S(()=>{const h=[t.min,t.max,t.step].map(U=>{const ie=`${U}`.split(".")[1];return ie?ie.length:0});return Math.max.apply(null,h)}),{sliderWrapper:Z}=je(t,n,B),{firstValue:f,secondValue:T,sliderSize:A}=pe(n),we=h=>{n.dragging=h};return ua(ze,{...pe(t),sliderSize:A,disabled:o,precision:Q,emitChange:L,resetSize:B,updateDragging:we}),l({onSliderClick:M}),(h,U)=>{var ie,Pe;return b(),P("div",{id:h.range?a(_):void 0,ref_key:"sliderWrapper",ref:Z,class:J(a(he)),role:h.range?"group":void 0,"aria-label":h.range&&!a(F)?a($):void 0,"aria-labelledby":h.range&&a(F)?(ie=a(c))==null?void 0:ie.labelId:void 0,onTouchstart:U[2]||(U[2]=(...Y)=>a(E)&&a(E)(...Y)),onTouchmove:U[3]||(U[3]=(...Y)=>a(E)&&a(E)(...Y))},[O("div",{ref_key:"slider",ref:v,class:J([a(i).e("runway"),{"show-input":h.showInput&&!h.range},a(i).is("disabled",a(o))]),style:le(a(m)),onMousedown:U[0]||(U[0]=(...Y)=>a(I)&&a(I)(...Y)),onTouchstart:U[1]||(U[1]=(...Y)=>a(I)&&a(I)(...Y))},[O("div",{class:J(a(i).e("bar")),style:le(a(x))},null,6),z(De,{id:h.range?void 0:a(_),ref_key:"firstButton",ref:g,"model-value":a(f),vertical:h.vertical,"tooltip-class":h.tooltipClass,placement:h.placement,role:"slider","aria-label":h.range||!a(F)?a(ae):void 0,"aria-labelledby":!h.range&&a(F)?(Pe=a(c))==null?void 0:Pe.labelId:void 0,"aria-valuemin":h.min,"aria-valuemax":h.range?a(T):h.max,"aria-valuenow":a(f),"aria-valuetext":a(H),"aria-orientation":h.vertical?"vertical":"horizontal","aria-disabled":a(o),"onUpdate:modelValue":a(k)},null,8,["id","model-value","vertical","tooltip-class","placement","aria-label","aria-labelledby","aria-valuemin","aria-valuemax","aria-valuenow","aria-valuetext","aria-orientation","aria-disabled","onUpdate:modelValue"]),h.range?(b(),N(De,{key:0,ref_key:"secondButton",ref:y,"model-value":a(T),vertical:h.vertical,"tooltip-class":h.tooltipClass,placement:h.placement,role:"slider","aria-label":a(ee),"aria-valuemin":a(f),"aria-valuemax":h.max,"aria-valuenow":a(T),"aria-valuetext":a(te),"aria-orientation":h.vertical?"vertical":"horizontal","aria-disabled":a(o),"onUpdate:modelValue":a(C)},null,8,["model-value","vertical","tooltip-class","placement","aria-label","aria-valuemin","aria-valuemax","aria-valuenow","aria-valuetext","aria-orientation","aria-disabled","onUpdate:modelValue"])):j("v-if",!0),h.showStops?(b(),P("div",cl,[(b(!0),P(R,null,K(a(q),(Y,oe)=>(b(),P("div",{key:oe,class:J(a(i).e("stop")),style:le(a(w)(Y))},null,6))),128))])):j("v-if",!0),a(G).length>0?(b(),P(R,{key:2},[O("div",null,[(b(!0),P(R,null,K(a(G),(Y,oe)=>(b(),P("div",{key:oe,style:le(a(w)(Y.position)),class:J([a(i).e("stop"),a(i).e("marks-stop")])},null,6))),128))]),O("div",{class:J(a(i).e("marks"))},[(b(!0),P(R,null,K(a(G),(Y,oe)=>(b(),N(a(pl),{key:oe,mark:Y.mark,style:le(a(w)(Y.position))},null,8,["mark","style"]))),128))],2)],64)):j("v-if",!0)],38),h.showInput&&!h.range?(b(),N(a(Ce),{key:0,ref:"input","model-value":a(f),class:J(a(i).e("input")),step:h.step,disabled:a(o),controls:h.showInputControls,min:h.min,max:h.max,debounce:h.debounce,size:a(V),"onUpdate:modelValue":a(k),onChange:a(L)},null,8,["model-value","class","step","disabled","controls","min","max","debounce","size","onUpdate:modelValue","onChange"])):j("v-if",!0)],42,dl)}}});var fl=Le(vl,[["__file","/home/runner/work/element-plus/element-plus/packages/components/slider/src/slider.vue"]]);const gl=pa(fl);let Be,ge,be=0,ye=0;function bl(e,l,d){let t=l&&d||0;const i=l||new Array(16);e=e||{};let s=e.node||Be,n=e.clockseq!==void 0?e.clockseq:ge;if(s==null||n==null){const u=e.random||(e.rng||da)();s==null&&(s=Be=[u[0]|1,u[1],u[2],u[3],u[4],u[5]]),n==null&&(n=ge=(u[6]<<8|u[7])&16383)}let c=e.msecs!==void 0?e.msecs:Date.now(),v=e.nsecs!==void 0?e.nsecs:ye+1;const g=c-be+(v-ye)/1e4;if(g<0&&e.clockseq===void 0&&(n=n+1&16383),(g<0||c>be)&&e.nsecs===void 0&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");be=c,ye=v,ge=n,c+=122192928e5;const y=((c&268435455)*1e4+v)%4294967296;i[t++]=y>>>24&255,i[t++]=y>>>16&255,i[t++]=y>>>8&255,i[t++]=y&255;const o=c/4294967296*1e4&268435455;i[t++]=o>>>8&255,i[t++]=o&255,i[t++]=o>>>24&15|16,i[t++]=o>>>16&255,i[t++]=n>>>8|128,i[t++]=n&255;for(let u=0;u<6;++u)i[t+u]=s[u];return l||ca(i)}const yl=X({__name:"ViewDesignContainer",setup(e){const l=ve(),{viewData:d,curCompData:t}=de(l),{onClickComp:i,setSnapshot:s,setComp:n,addComp:c}=l,v=W(),g=()=>{const{width:p,height:m}=d.value;return v.value?(console.log(v.value.offsetWidth,v.value.offsetHeight,(v.value.offsetHeight-40)/m),{width:p+"px",height:m+"px",transform:`scale(${(v.value.offsetWidth-40)/p},${(v.value.offsetHeight-40)/m})`,"transform-origin":"0 0 "}):{width:"100%",height:"100%"}},y=p=>{const{nodeKey:m,left:x,top:B,width:L,height:E}=p;n({id:m,positionSize:{left:parseFloat(x),top:parseFloat(B),width:parseFloat(L),height:parseFloat(E)}}),s()},o=p=>{p.preventDefault()},u=p=>{p.preventDefault();let m=JSON.parse(p.dataTransfer.getData("componentData"));m.id=bl(),m.positionSize={width:100,height:100,top:p.offsetY,left:p.offsetX},c(m)};return(p,m)=>(b(),P("div",{ref_key:"container",ref:v,class:"view-design-container"},[O("div",{class:"container",style:le(g()),onDragover:o,onDrop:u},[(b(!0),P(R,null,K(a(d).componentData,x=>(b(),N(a(ba),ga({key:x.id,minh:"20",minw:"20","node-key":x.id},x.positionSize,{class:[x.id==a(t).id?"active":"","drag"],onOnDragResize:y,onClick:B=>a(i)(x)}),{default:D(()=>[(b(),N(ma(x.name),va(fa(x.props)),null,16))]),_:2},1040,["node-key","class","onClick"]))),128))],36)],512))}}),hl=ce(yl,[["__scopeId","data-v-c8f70352"]]),wl=[{name:"ev-text",id:"1",type:"text",label:"\u6587\u672C\u7EC4\u4EF6",icon:"icon-text",props:{value:"123"}},{name:"ev-img",id:"2",type:"img",label:"\u56FE\u7247\u7EC4\u4EF6",icon:"icon-tupian",props:{src:"https://img1.baidu.com/it/u=1400131798,3422378849&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1690304400&t=6836d8acb0adcf55038070c7599815d7"}},{name:"ev-chart",id:"3",type:"chartBar",label:"\u67F1\u72B6\u56FE\u7EC4\u4EF6",icon:"icon-keshihuatubiao-1",props:{option:{xAxis:{type:"category"},yAxis:{type:"value"},series:[{type:"bar"},{type:"bar"},{type:"bar"}],dataset:{source:[["product","2015","2016","2017"],["Matcha Latte",43.3,85.8,93.7],["Milk Tea",83.1,73.4,55.1],["Cheese Cocoa",86.4,65.2,82.5],["Walnut Brownie",72.4,53.9,39.1]]}}}},{name:"ev-chart",id:"3",type:"chartPie",label:"\u997C\u56FE\u7EC4\u4EF6",icon:"icon-keshihuatubiao-10",props:{option:{tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"Access From",type:"pie",radius:[0,50],data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}}}],Vl={class:"material-container"},xl=["data-component"],kl={class:"label"},_l=X({__name:"ViewMaterial",setup(e){const l=d=>{d&&d.target&&d.dataTransfer&&d.dataTransfer.setData("componentData",d.target.getAttribute("data-component"))};return(d,t)=>(b(),P("ul",Vl,[(b(!0),P(R,null,K(a(wl),i=>(b(),P("li",{key:i.id,class:"material f-ca",draggable:"true","data-component":JSON.stringify(i),onDragstart:l},[O("div",{class:J(["iconfont",i.icon])},null,2),O("div",kl,Se(i.label),1)],40,xl))),128))]))}}),Sl=ce(_l,[["__scopeId","data-v-64ffc243"]]),Cl=[{label:"echart\u914D\u7F6E",ui:{type:"collapse",field:"",props:{},children:[{label:"\u6570\u636E\u6E90",ui:{type:"code",field:"props.option.dataset.source",props:{}}},{label:"X\u8F74\u914D\u7F6E",ui:{type:"collapse",field:"",props:{},children:[{label:"X\u8F74\u7C7B\u522B",ui:{field:"props.option.xAxis.type",type:"select",props:{options:[{label:"\u7C7B\u76EE\u8F74",value:"category"},{label:"\u65F6\u95F4\u8F74",value:"time"},{label:"\u6570\u503C\u8F74",value:"value"},{label:"\u5BF9\u6570\u8F74",value:"log"}]}}}]}},{label:"Y\u8F74\u914D\u7F6E",ui:{type:"collapse",field:"",props:{},children:[{label:"Y\u8F74\u7C7B\u522B",ui:{field:"props.option.yAxis.type",type:"select",props:{options:[{label:"\u7C7B\u76EE\u8F74",value:"category"},{label:"\u65F6\u95F4\u8F74",value:"time"},{label:"\u6570\u503C\u8F74",value:"value"},{label:"\u5BF9\u6570\u8F74",value:"log"}]}}}]}},{label:"\u7CFB\u5217",ui:{type:"collapse",field:"",props:{},children:[{label:"\u7C7B\u578B",ui:{type:"select",field:"props.option.series.0.type",props:{options:[{label:"\u67F1\u72B6",value:"bar"},{label:"\u6298\u7EBF",value:"line"}]}}}]}},{label:"\u7CFB\u5217",ui:{field:"props.option.series",type:"tab",props:{tabTitle:"\u7CFB\u5217"},children:[{label:"\u7C7B\u578B",ui:{type:"select",field:"type",props:{options:[{label:"\u67F1\u72B6",value:"bar"},{label:"\u6298\u7EBF",value:"line"}]}}}]}}]}}],Tl=Object.freeze(Object.defineProperty({__proto__:null,default:Cl},Symbol.toStringTag,{value:"Module"})),zl=[{label:"echart\u914D\u7F6E",ui:{type:"collapse",field:"",props:{},children:[{label:"\u7CFB\u5217",ui:{type:"collapse",field:"",props:{},children:[{label:"\u6570\u636E\u6E90",ui:{type:"code",field:"props.option.series.0.data",props:{}}},{label:"\u7C7B\u578B",ui:{type:"select",field:"props.option.series.0.type",props:{options:[{label:"\u997C\u56FE",value:"pie"}]}}},{label:"\u534A\u5F84",ui:{type:"slider",field:"props.option.series.0.radius",props:{}}}]}}]}}],Dl=Object.freeze(Object.defineProperty({__proto__:null,default:zl},Symbol.toStringTag,{value:"Module"})),Bl=[{label:"\u4F4D\u7F6E\u53CA\u5927\u5C0F\u4FE1\u606F",ui:{type:"collapse",field:"",props:{},children:[{label:"\u8DDD\u9876\u90E8\u9AD8\u5EA6",ui:{type:"number",field:"positionSize.top",props:{}}},{label:"\u8DDD\u5DE6\u4FA7\u8DDD\u79BB",ui:{type:"number",field:"positionSize.left",props:{}}},{label:"\u5BBD\u5EA6",ui:{type:"number",field:"positionSize.width",props:{}}},{label:"\u9AD8\u5EA6",ui:{type:"number",field:"positionSize.height",props:{}}}]}}],Pl=Object.freeze(Object.defineProperty({__proto__:null,default:Bl},Symbol.toStringTag,{value:"Module"})),El=[{label:"\u7EC4\u4EF6\u5C5E\u6027",ui:{type:"collapse",field:"",props:{},children:[{label:"\u56FE\u7247\u5730\u5740",ui:{props:{},type:"input",field:"props.src"}},{label:"\u6587\u672C\u63CF\u8FF0",ui:{type:"input",props:{},field:"props.alt"}},{label:"\u9002\u914D\u65B9\u5F0F",ui:{type:"select",field:"props.fit",props:{options:[{label:"\u7B49\u6BD4\u7F29\u653E",value:"contain"},{label:"\u7B49\u6BD4\u586B\u5145",value:"cover"},{label:"\u62C9\u4F38\u586B\u5145",value:"fill"},{label:"\u5B9E\u9645\u5C3A\u5BF8",value:"none"}]}}}]}}],Ml=Object.freeze(Object.defineProperty({__proto__:null,default:El},Symbol.toStringTag,{value:"Module"})),Fl=[{label:"\u7EC4\u4EF6\u5C5E\u6027",ui:{type:"collapse",field:"",props:{},children:[{label:"\u6587\u672C\u5185\u5BB9",ui:{type:"input",props:{},field:"props.value"}},{label:"\u8D85\u94FE\u63A5",ui:{props:{},type:"collapse",field:"",children:[{label:"\u542F\u7528\u8D85\u94FE\u63A5",ui:{type:"switch",props:{},field:"props.openUrl"}},{label:"\u8D85\u94FE\u63A5\u5730\u5740",ui:{type:"input",props:{},field:"props.url"}},{label:"\u6253\u5F00\u65B9\u5F0F",ui:{type:"select",props:{options:[{label:"\u65B0\u9875\u9762",value:"_blank"},{label:"\u5F53\u524D\u9875\u9762",value:"_self"}]},field:"props.openType"}}]}}]}},{label:"\u7EC4\u4EF6\u6837\u5F0F",ui:{type:"collapse",field:"",props:{},children:[{label:"\u9ED8\u8BA4\u6837\u5F0F",ui:{type:"collapse",field:"",props:{},children:[{label:"\u5B57\u4F53\u5927\u5C0F",ui:{props:{},type:"number",field:"props.styleConfig.default.fontSize"}},{label:"\u5B57\u4F53\u989C\u8272",ui:{props:{},type:"color",field:"props.styleConfig.default.color"}},{label:"\u80CC\u666F\u989C\u8272",ui:{props:{},type:"color",field:"props.styleConfig.default.backgroundColor"}}]}},{label:"\u60AC\u6D6E\u6837\u5F0F",ui:{type:"collapse",props:{},field:"",children:[{label:"\u5B57\u4F53\u5927\u5C0F",ui:{props:{},type:"number",field:"props.styleConfig.hover.fontSize"}},{label:"\u5B57\u4F53\u989C\u8272",ui:{props:{},type:"color",field:"props.styleConfig.hover.color"}},{label:"\u80CC\u666F\u989C\u8272",ui:{props:{},type:"color",field:"props.styleConfig.hover.backgroundColor"}}]}}]}}],Nl=Object.freeze(Object.defineProperty({__proto__:null,default:Fl},Symbol.toStringTag,{value:"Module"})),Il={style:{width:"100%",height:"200px"}},Ol=X({name:"viewCfg"}),Ll=X({...Ol,props:{template:{default:()=>[]}},setup(e){const l=e,d=ve(),{curCompData:t}=de(d),{template:i}=pe(l),s=o=>o.split(".").reduce((u,p)=>typeof u[p]>"u"?"":u[p],t.value),n=(o,u)=>{u.split(".").reduce((p,m,x,B)=>x==B.length-1?(p[m]=o,p[m]):(p[m]||!p[m]&&x<B.length-1&&(p[m]={}),p[m]),t.value)},c=o=>{let u=s(o);return JSON.stringify(u,null,4)},v=(o,u)=>{let p=JSON.parse(o);n(p,u)},g=(o,u,p)=>(o&&(o=Te.exports.cloneDeep(o).map(m=>(m.ui.field=`${u}.${p}.${m.ui.field}`,m))),o),y=(o,u,p)=>{if(u=="remove"){let m=Te.exports.cloneDeep(s(p));m.splice(o.replace(/[^\d]/g,""),1),n(m,p)}else{let m=Te.exports.cloneDeep(s(p));m.push({}),n(m,p)}};return(o,u)=>{const p=ya("view-cfg",!0),m=ha,x=wa,B=Fa,L=Na,E=Va,M=xa,I=Ce,k=ka,C=_a,q=Sa,w=Ca,_=Ta,F=gl;return b(!0),P(R,null,K(a(i),r=>(b(),P("div",{key:r.label,class:"view-cfg"},[r.ui.type=="collapse"?(b(),N(x,{key:0},{default:D(()=>[z(m,{title:r.label,name:r.label,style:{"padding-left":"10px"}},{default:D(()=>[z(p,{template:r.ui.children},null,8,["template"])]),_:2},1032,["title","name"])]),_:2},1024)):j("",!0),r.ui.type=="tab"?(b(),N(L,{key:1,type:"card",editable:"",style:{"--el-tabs-header-height":"32px"},onEdit:(V,$)=>{y(V,$,r.ui.field)}},{default:D(()=>[(b(!0),P(R,null,K(s(r.ui.field),(V,$)=>(b(),N(B,{key:$,label:r.ui.props.tabTitle+($+1),name:r.ui.props.tabTitle+($+1)},{default:D(()=>[z(p,{template:g(r.ui.children,r.ui.field,$)},null,8,["template"])]),_:2},1032,["label","name"]))),128))]),_:2},1032,["onEdit"])):j("",!0),r.ui.type=="input"?(b(),N(M,{key:2,label:r.label},{default:D(()=>[z(E,{type:"textarea",autosize:"","model-value":s(r.ui.field),onInput:V=>n(V,r.ui.field)},null,8,["model-value","onInput"])]),_:2},1032,["label"])):j("",!0),r.ui.type=="number"?(b(),N(M,{key:3,label:r.label},{default:D(()=>[z(I,{"controls-position":"right","model-value":s(r.ui.field),onChange:V=>n(V,r.ui.field)},null,8,["model-value","onChange"])]),_:2},1032,["label"])):j("",!0),r.ui.type=="select"?(b(),N(M,{key:4,label:r.label},{default:D(()=>[z(C,{"model-value":s(r.ui.field),clearable:"",onChange:V=>n(V,r.ui.field)},{default:D(()=>[(b(!0),P(R,null,K(r.ui.props.options,V=>(b(),N(k,{key:V.value,label:V.label,value:V.value},{default:D(()=>[me(Se(V.label),1)]),_:2},1032,["label","value"]))),128))]),_:2},1032,["model-value","onChange"])]),_:2},1032,["label"])):j("",!0),r.ui.type=="switch"?(b(),N(M,{key:5,label:r.label},{default:D(()=>[z(q,{"model-value":s(r.ui.field),onChange:V=>n(V,r.ui.field)},null,8,["model-value","onChange"])]),_:2},1032,["label"])):j("",!0),r.ui.type=="color"?(b(),N(M,{key:6,label:r.label},{default:D(()=>[z(w,{"show-alpha":"","model-value":s(r.ui.field),onChange:V=>n(V,r.ui.field)},null,8,["model-value","onChange"])]),_:2},1032,["label"])):j("",!0),r.ui.type=="code"?(b(),N(M,{key:7,label:r.label},{default:D(()=>[O("div",Il,[z(_,{style:{width:"100%",height:"100%"},code:c(r.ui.field),onChange:V=>v(V,r.ui.field)},null,8,["code","onChange"])])]),_:2},1032,["label"])):j("",!0),r.ui.type=="slider"?(b(),N(M,{key:8,label:r.label},{default:D(()=>[z(F,{range:"","model-value":s(r.ui.field),min:0,max:200,step:10,"show-stops":"",onInput:V=>n(V,r.ui.field)},null,8,["model-value","onInput"])]),_:2},1032,["label"])):j("",!0)]))),128)}}}),$l=ce(Ll,[["__scopeId","data-v-a2e73881"]]),Al=X({name:"viewTemplate"}),Yl=X({...Al,setup(e){const l=ve(),{curCompData:d}=de(l);re(d.value,()=>{if(d.value&&d.value.type){let n;for(const c in i.value)c.includes(za(d.value.type))&&(n=i.value[c].default,t.value=[...s.value,...n])}},{deep:!0});const t=W([]),i=W(),s=W([]);return(async()=>await Object.assign({"/src/assets/view/viewCfgTemplates/cfgChartBarTemplate.ts":Tl,"/src/assets/view/viewCfgTemplates/cfgChartPieTemplate.ts":Dl,"/src/assets/view/viewCfgTemplates/cfgCommonTemplate.ts":Pl,"/src/assets/view/viewCfgTemplates/cfgImgTemplate.ts":Ml,"/src/assets/view/viewCfgTemplates/cfgTextTemplate.ts":Nl}))().then(n=>{i.value=n;for(const c in i.value)if(c.includes("Common")){const v=i.value[c];s.value=v.default}}),(n,c)=>{const v=Da;return b(),N(v,{"label-width":"80px",size:"small"},{default:D(()=>[z($l,{template:t.value},null,8,["template"])]),_:1})}}}),Xl={class:"view-design f-cs"},jl={class:"view-design-header"},Ul={class:"container f-rs"},Wl={class:"material"},Jl={class:"view-design-main"},Hl={class:"material-option"},Rl=X({name:"viewDesign"}),ql=X({...Rl,setup(e){const l=ve(),d=Ba(),{undo:t,redo:i}=l,{viewData:s,curCompData:n}=de(l),c=()=>{d.push({name:"viewPre"})};return(v,g)=>{const y=Pa,o=Ce;return b(),P("main",Xl,[O("header",jl,[z(y,{onClick:a(t)},{default:D(()=>[me(" \u64A4\u9500 ")]),_:1},8,["onClick"]),z(y,{onClick:a(i)},{default:D(()=>[me(" \u91CD\u505A ")]),_:1},8,["onClick"]),z(y,{onClick:c},{default:D(()=>[me(" \u9884\u89C8 ")]),_:1}),z(o,{modelValue:a(s).width,"onUpdate:modelValue":g[0]||(g[0]=u=>a(s).width=u)},null,8,["modelValue"]),z(o,{modelValue:a(s).height,"onUpdate:modelValue":g[1]||(g[1]=u=>a(s).height=u)},null,8,["modelValue"])]),O("div",Ul,[O("aside",Wl,[z(Sl)]),O("div",Jl,[z(hl)]),O("div",Hl,[z(Yl)])])])}}});Ae=ce(ql,[["__scopeId","data-v-08ec4cd3"]])});export{Oa as __tla,Ae as default};
