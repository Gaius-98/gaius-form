import{l as M,aQ as B,H as Q,aR as R,G as T,d as _,P as G,N as H,g as K,n as c,Q as L,o as i,y as p,z as o,Y as f,W as s,u as e,L as V,a3 as W,Z as X,X as h,aC as u,au as d,b as g,I as k,r as Y,V as j,K as q,f as D,a4 as U,__tla as Z}from"./index.b67996e8.js";let S,F=Promise.all([(()=>{try{return Z}catch{}})()]).then(async()=>{const b=M({title:String,confirmButtonText:String,cancelButtonText:String,confirmButtonType:{type:String,values:B,default:"primary"},cancelButtonType:{type:String,values:B,default:"text"},icon:{type:Q,default:()=>R},iconColor:{type:String,default:"#f90"},hideIcon:{type:Boolean,default:!1},hideAfter:{type:Number,default:200},teleported:T.teleported,persistent:T.persistent,width:{type:[String,Number],default:150}}),C={confirm:a=>a instanceof MouseEvent,cancel:a=>a instanceof MouseEvent},E=_({name:"ElPopconfirm"}),$=_({...E,props:b,emits:C,setup(a,{emit:y}){const l=a,{t:m}=G(),n=H("popconfirm"),v=K(),x=()=>{var t,r;(r=(t=v.value)==null?void 0:t.onClose)==null||r.call(t)},z=c(()=>({width:L(l.width)})),I=t=>{y("confirm",t),x()},N=t=>{y("cancel",t),x()},P=c(()=>l.confirmButtonText||m("el.popconfirm.confirmButtonText")),A=c(()=>l.cancelButtonText||m("el.popconfirm.cancelButtonText"));return(t,r)=>(i(),p(e(q),j({ref_key:"tooltipRef",ref:v,trigger:"click",effect:"light"},t.$attrs,{"popper-class":`${e(n).namespace.value}-popover`,"popper-style":e(z),teleported:t.teleported,"fallback-placements":["bottom","top","right","left"],"hide-after":t.hideAfter,persistent:t.persistent}),{content:o(()=>[f("div",{class:s(e(n).b())},[f("div",{class:s(e(n).e("main"))},[!t.hideIcon&&t.icon?(i(),p(e(V),{key:0,class:s(e(n).e("icon")),style:W({color:t.iconColor})},{default:o(()=>[(i(),p(X(t.icon)))]),_:1},8,["class","style"])):h("v-if",!0),u(" "+d(t.title),1)],2),f("div",{class:s(e(n).e("action"))},[g(e(k),{size:"small",type:t.cancelButtonType==="text"?"":t.cancelButtonType,text:t.cancelButtonType==="text",onClick:N},{default:o(()=>[u(d(e(A)),1)]),_:1},8,["type","text"]),g(e(k),{size:"small",type:t.confirmButtonType==="text"?"":t.confirmButtonType,text:t.confirmButtonType==="text",onClick:I},{default:o(()=>[u(d(e(P)),1)]),_:1},8,["type","text"])],2)],2)]),default:o(()=>[t.$slots.reference?Y(t.$slots,"reference",{key:0}):h("v-if",!0)]),_:3},16,["popper-class","popper-style","teleported","hide-after","persistent"]))}});var w=D($,[["__file","popconfirm.vue"]]);S=U(w)});export{S as E,F as __tla};
