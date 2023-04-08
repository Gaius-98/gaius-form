import{b5 as Me,b6 as Ve,b7 as qe,e as V,l as Z,m as oe,d as z,k as D,ac as I,p as q,q as N,s as R,ax as J,b8 as ne,o as re,c as ie,A as ue,u as B,ap as je,j as ce,b9 as A,O as j,ba as Oe,bb as Ge,g as K,a8 as de,bc as He,b,E as O,M as Ue,N as We,bd as Xe,be as G,aA as Ye,P as Ze,bf as De,an as be,ar as ve,bg as pe,bh as Ie,L as Je,az as Qe,bi as me,V as ea,bj as aa,Z as ta,aE as la,G as sa,S as oa,aM as na,__tla as ra}from"./index.782c59f9.js";let fe,he,ia=Promise.all([(()=>{try{return ra}catch{}})()]).then(async()=>{const ye=(e,s,v)=>Ve(e.subTree).filter(i=>{var l;return qe(i)&&((l=i.type)==null?void 0:l.name)===s&&!!i.component}).map(i=>i.component.uid).map(i=>v[i]).filter(i=>!!i),ge=(e,s)=>{const v={},i=Me([]);return{children:i,addChild:l=>{v[l.uid]=l,i.value=ye(e,s,v)},removeChild:l=>{delete v[l],i.value=i.value.filter(o=>o.uid!==l)}}},M=Symbol("tabsRootContextKey"),Pe=V({tabs:{type:Z(Array),default:()=>oe([])}}),Q="ElTabBar",Ce=z({name:Q}),xe=z({...Ce,props:Pe,setup(e,{expose:s}){const v=e,i=j(),l=D(M);l||I(Q,"<el-tabs><el-tab-bar /></el-tabs>");const o=q("tabs"),p=N(),_=N(),c=()=>{let m=0,f=0;const d=["top","bottom"].includes(l.props.tabPosition)?"width":"height",n=d==="width"?"x":"y",E=n==="x"?"left":"top";return v.tabs.every(S=>{var k,a;const y=(a=(k=i.parent)==null?void 0:k.refs)==null?void 0:a[`tab-${S.uid}`];if(!y)return!1;if(!S.active)return!0;m=y[`offset${A(E)}`],f=y[`client${A(d)}`];const C=window.getComputedStyle(y);return d==="width"&&(v.tabs.length>1&&(f-=Number.parseFloat(C.paddingLeft)+Number.parseFloat(C.paddingRight)),m+=Number.parseFloat(C.paddingLeft)),!1}),{[d]:`${f}px`,transform:`translate${A(n)}(${m}px)`}},g=()=>_.value=c();return R(()=>v.tabs,async()=>{await J(),g()},{immediate:!0}),ne(p,()=>g()),s({ref:p,update:g}),(m,f)=>(re(),ie("div",{ref_key:"barRef",ref:p,class:ue([B(o).e("active-bar"),B(o).is(B(l).props.tabPosition)]),style:je(_.value)},null,6))}});var we=ce(xe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const Ne=V({panes:{type:Z(Array),default:()=>oe([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),$e={tabClick:(e,s,v)=>v instanceof Event,tabRemove:(e,s)=>s instanceof Event},ee="ElTabNav",ke=z({name:ee,props:Ne,emits:$e,setup(e,{expose:s,emit:v}){const i=j(),l=D(M);l||I(ee,"<el-tabs><tab-nav /></el-tabs>");const o=q("tabs"),p=Oe(),_=Ge(),c=N(),g=N(),m=N(),f=N(),d=N(!1),n=N(0),E=N(!1),S=N(!0),k=K(()=>["top","bottom"].includes(l.props.tabPosition)?"width":"height"),a=K(()=>({transform:`translate${k.value==="width"?"X":"Y"}(-${n.value}px)`})),y=()=>{if(!c.value)return;const r=c.value[`offset${A(k.value)}`],u=n.value;if(!u)return;const t=u>r?u-r:0;n.value=t},C=()=>{if(!c.value||!g.value)return;const r=g.value[`offset${A(k.value)}`],u=c.value[`offset${A(k.value)}`],t=n.value;if(r-t<=u)return;const x=r-t>u*2?t+u:r-u;n.value=x},F=async()=>{const r=g.value;if(!d.value||!m.value||!c.value||!r)return;await J();const u=m.value.querySelector(".is-active");if(!u)return;const t=c.value,x=["top","bottom"].includes(l.props.tabPosition),w=u.getBoundingClientRect(),P=t.getBoundingClientRect(),T=x?r.offsetWidth-P.width:r.offsetHeight-P.height,$=n.value;let h=$;x?(w.left<P.left&&(h=$-(P.left-w.left)),w.right>P.right&&(h=$+w.right-P.right)):(w.top<P.top&&(h=$-(P.top-w.top)),w.bottom>P.bottom&&(h=$+(w.bottom-P.bottom))),h=Math.max(h,0),n.value=Math.min(h,T)},le=()=>{var r;if(!g.value||!c.value)return;e.stretch&&((r=f.value)==null||r.update());const u=g.value[`offset${A(k.value)}`],t=c.value[`offset${A(k.value)}`],x=n.value;t<u?(d.value=d.value||{},d.value.prev=x,d.value.next=x+t<u,u-x<t&&(n.value=u-t)):(d.value=!1,x>0&&(n.value=0))},Fe=r=>{const u=r.code,{up:t,down:x,left:w,right:P}=G;if(![t,x,w,P].includes(u))return;const T=Array.from(r.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),$=T.indexOf(r.target);let h;u===w||u===t?$===0?h=T.length-1:h=$-1:$<T.length-1?h=$+1:h=0,T[h].focus({preventScroll:!0}),T[h].click(),se()},se=()=>{S.value&&(E.value=!0)},U=()=>E.value=!1;return R(p,r=>{r==="hidden"?S.value=!1:r==="visible"&&setTimeout(()=>S.value=!0,50)}),R(_,r=>{r?setTimeout(()=>S.value=!0,50):S.value=!1}),ne(m,le),de(()=>setTimeout(()=>F(),0)),He(()=>le()),s({scrollToActiveTab:F,removeFocus:U}),R(()=>e.panes,()=>i.update(),{flush:"post",deep:!0}),()=>{const r=d.value?[b("span",{class:[o.e("nav-prev"),o.is("disabled",!d.value.prev)],onClick:y},[b(O,null,{default:()=>[b(Ue,null,null)]})]),b("span",{class:[o.e("nav-next"),o.is("disabled",!d.value.next)],onClick:C},[b(O,null,{default:()=>[b(We,null,null)]})])]:null,u=e.panes.map((t,x)=>{var w,P,T,$;const h=t.uid,W=t.props.disabled,X=(P=(w=t.props.name)!=null?w:t.index)!=null?P:`${x}`,Y=!W&&(t.isClosable||e.editable);t.index=`${x}`;const Le=Y?b(O,{class:"is-icon-close",onClick:L=>v("tabRemove",t,L)},{default:()=>[b(Xe,null,null)]}):null,ze=(($=(T=t.slots).label)==null?void 0:$.call(T))||t.props.label,Ke=!W&&t.active?0:-1;return b("div",{ref:`tab-${h}`,class:[o.e("item"),o.is(l.props.tabPosition),o.is("active",t.active),o.is("disabled",W),o.is("closable",Y),o.is("focus",E.value)],id:`tab-${X}`,key:`tab-${h}`,"aria-controls":`pane-${X}`,role:"tab","aria-selected":t.active,tabindex:Ke,onFocus:()=>se(),onBlur:()=>U(),onClick:L=>{U(),v("tabClick",t,X,L)},onKeydown:L=>{Y&&(L.code===G.delete||L.code===G.backspace)&&v("tabRemove",t,L)}},[ze,Le])});return b("div",{ref:m,class:[o.e("nav-wrap"),o.is("scrollable",!!d.value),o.is(l.props.tabPosition)]},[r,b("div",{class:o.e("nav-scroll"),ref:c},[b("div",{class:[o.e("nav"),o.is(l.props.tabPosition),o.is("stretch",e.stretch&&["top","bottom"].includes(l.props.tabPosition))],ref:g,style:a.value,role:"tablist",onKeydown:Fe},[e.type?null:b(we,{ref:f,tabs:[...e.panes]},null),u])])])}}}),Se=V({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:Z(Function),default:()=>!0},stretch:Boolean}),H=e=>Ie(e)||Je(e),Te={[ve]:e=>H(e),tabClick:(e,s)=>s instanceof Event,tabChange:e=>H(e),edit:(e,s)=>["remove","add"].includes(s),tabRemove:e=>H(e),tabAdd:()=>!0};var Be=z({name:"ElTabs",props:Se,emits:Te,setup(e,{emit:s,slots:v,expose:i}){var l,o;const p=q("tabs"),{children:_,addChild:c,removeChild:g}=ge(j(),"ElTabPane"),m=N(),f=N((o=(l=e.modelValue)!=null?l:e.activeName)!=null?o:"0"),d=a=>{f.value=a,s(ve,a),s("tabChange",a)},n=async a=>{var y,C,F;if(!(f.value===a||pe(a)))try{await((y=e.beforeLeave)==null?void 0:y.call(e,a,f.value))!==!1&&(d(a),(F=(C=m.value)==null?void 0:C.removeFocus)==null||F.call(C))}catch{}},E=(a,y,C)=>{a.props.disabled||(n(y),s("tabClick",a,C))},S=(a,y)=>{a.props.disabled||pe(a.props.name)||(y.stopPropagation(),s("edit",a.props.name,"remove"),s("tabRemove",a.props.name))},k=()=>{s("edit",void 0,"add"),s("tabAdd")};return Ye({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},K(()=>!!e.activeName)),R(()=>e.activeName,a=>n(a)),R(()=>e.modelValue,a=>n(a)),R(f,async()=>{var a;await J(),(a=m.value)==null||a.scrollToActiveTab()}),Ze(M,{props:e,currentName:f,registerPane:c,unregisterPane:g}),i({currentName:f}),()=>{const a=e.editable||e.addable?b("span",{class:p.e("new-tab"),tabindex:"0",onClick:k,onKeydown:F=>{F.code===G.enter&&k()}},[b(O,{class:p.is("icon-plus")},{default:()=>[b(De,null,null)]})]):null,y=b("div",{class:[p.e("header"),p.is(e.tabPosition)]},[a,b(ke,{ref:m,currentName:f.value,editable:e.editable,type:e.type,panes:_.value,stretch:e.stretch,onTabClick:E,onTabRemove:S},null)]),C=b("div",{class:p.e("content")},[be(v,"default")]);return b("div",{class:[p.b(),p.m(e.tabPosition),{[p.m("card")]:e.type==="card",[p.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[y,C]:[C,y]])}}});const _e=V({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),Ee=["id","aria-hidden","aria-labelledby"],ae="ElTabPane",Re=z({name:ae}),Ae=z({...Re,props:_e,setup(e){const s=e,v=j(),i=Qe(),l=D(M);l||I(ae,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const o=q("tab-pane"),p=N(),_=K(()=>s.closable||l.props.closable),c=me(()=>{var n;return l.currentName.value===((n=s.name)!=null?n:p.value)}),g=N(c.value),m=K(()=>{var n;return(n=s.name)!=null?n:p.value}),f=me(()=>!s.lazy||g.value||c.value);R(c,n=>{n&&(g.value=!0)});const d=ea({uid:v.uid,slots:i,props:s,paneName:m,active:c,index:p,isClosable:_});return de(()=>{l.registerPane(d)}),aa(()=>{l.unregisterPane(d.uid)}),(n,E)=>B(f)?ta((re(),ie("div",{key:0,id:`pane-${B(m)}`,class:ue(B(o).b()),role:"tabpanel","aria-hidden":!B(c),"aria-labelledby":`tab-${B(m)}`},[be(n.$slots,"default")],10,Ee)),[[la,B(c)]]):sa("v-if",!0)}});var te=ce(Ae,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);he=oa(Be,{TabPane:te}),fe=na(te)});export{fe as E,ia as __tla,he as a};
