import{d as k,g as u,j as U,aA as Y,aB as G,o as x,c as P,Y as p,b as a,z as e,u as q,aC as H,aD as r,aE as T,am as W,aJ as X,aK as Z,aL as $,aM as aa,I as ea,aN as ta,aO as la,aP as oa,aQ as sa,aR as na,aS as ia,_ as ra,__tla as ca}from"./index.a71abd70.js";import{E as da,__tla as ua}from"./divider.7fc90764.js";import{a as z,__tla as pa}from"./api.fff6bcff.js";let D,_a=Promise.all([(()=>{try{return ca}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return pa}catch{}})()]).then(async()=>{const y=c=>(na("data-v-493de080"),c=c(),ia(),c),L={class:"form-list"},S={class:"filter"},V={class:"main"},j={class:"opt-container"},E=y(()=>p("i",{class:"iconfont icon-photo"},null,-1)),I=y(()=>p("i",{class:"iconfont icon-bianji"},null,-1)),N=k({name:"formList"}),O=k({...N,setup(c){const _=u(!0),v=u([]),A=u({columns:[{label:"\u5217\u8868id",prop:"id"},{label:"\u5217\u8868\u540D\u79F0",prop:"name"}],opt:{label:"\u64CD\u4F5C",width:300,fixed:"right",show:!0}}),s=u({show:!0,pageNumber:1,pageSize:10,keyword:"",total:0,pageSizes:[10,20,30]}),d=()=>{_.value=!0,z.getList(s.value).then(t=>{_.value=!1;const{code:l,data:o,msg:n}=t;l==0&&(v.value=o.rows,s.value.total=o.count)})};U(()=>{d()});const f=Y(),B=t=>{f.push({name:"tablePre",query:{id:t.row.id}})},F=()=>{f.push({name:"tableDesign",query:{type:"add"}})},J=t=>{f.push({name:"tableDesign",query:{id:t.row.id,type:"edit"}})},K=t=>{z.deleteForm({id:t.row.id}).then(l=>{const{code:o,msg:n}=l;o==0&&(X.success(n),d())})};return(t,l)=>{const o=Z,n=$,m=aa,h=ea,b=ta,g=la,w=da,M=oa,Q=sa,R=G("ev-loading");return x(),P("div",L,[p("div",S,[a(b,{gutter:20},{default:e(()=>[a(m,{span:4},{default:e(()=>[a(n,{label:"\u5217\u8868\u540D\u79F0"},{default:e(()=>[a(o,{modelValue:s.value.keyword,"onUpdate:modelValue":l[0]||(l[0]=i=>s.value.keyword=i),clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),a(m,{span:4},{default:e(()=>[a(n,null,{default:e(()=>[a(h,{icon:q(H),onClick:d},{default:e(()=>[r(" \u641C\u7D22 ")]),_:1},8,["icon"])]),_:1})]),_:1})]),_:1}),a(b,null,{default:e(()=>[a(m,{span:4,offset:20},{default:e(()=>[a(h,{icon:q(T),type:"primary",onClick:F},{default:e(()=>[r(" \u65B0\u589E ")]),_:1},8,["icon"])]),_:1})]),_:1})]),W((x(),P("div",V,[a(Q,{data:v.value,"table-config":A.value,"pag-config":s.value,height:750,onOnPageChange:d},{opt:e(i=>[p("div",j,[a(g,{type:"primary",onClick:C=>B(i)},{default:e(()=>[E,r(" \u9884\u89C8 ")]),_:2},1032,["onClick"]),a(w,{direction:"vertical"}),a(g,{type:"primary",onClick:C=>J(i)},{default:e(()=>[I,r(" \u7F16\u8F91 ")]),_:2},1032,["onClick"]),a(w,{direction:"vertical"}),a(M,{title:"\u786E\u5B9A\u8981\u5220\u9664\u5417?","confirm-button-text":"\u786E\u8BA4","cancel-button-text":"\u53D6\u6D88",onConfirm:C=>K(i)},{reference:e(()=>[a(g,{type:"danger"},{default:e(()=>[r(" \u5220\u9664 ")]),_:1})]),_:2},1032,["onConfirm"])])]),_:1},8,["data","table-config","pag-config"])])),[[R,_.value]])])}}});D=ra(O,[["__scopeId","data-v-493de080"]])});export{_a as __tla,D as default};
