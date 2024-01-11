import{d as P,r as _,bp as x,o as g,z as U,A as a,b as e,aj as q,br as B,bA as E,bB as X,u as s,c as T,I,Q as z,bx as Y,by as Z,bs as $,ag as A,B as C,ad as F,ae as ee,C as le,D as ae,a4 as te,dQ as oe,ak as de,bL as re,am as se,an as ue,ao as ne,dU as pe,_ as ce,__tla as ie}from"./index.64d56b1e.js";import{E as be,a as me,b as fe,__tla as _e}from"./dropdown-item.2371744a.js";import{d as ve,__tla as he}from"./vuedraggable.umd.7d00f4ef.js";import{__tla as ge}from"./refs.050d22da.js";let Q,ye=Promise.all([(()=>{try{return ie}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return he}catch{}})(),(()=>{try{return ge}catch{}})()]).then(async()=>{const R=P({__name:"TableField",setup(v,{expose:y}){const c=_(),o=x({}),t=x({prop:[{required:!0,trigger:"blur",message:"\u5B57\u6BB5\u540D\u4E0D\u80FD\u4E3A\u7A7A"}],label:[{required:!0,trigger:"blur",message:"\u5217\u540D\u4E0D\u80FD\u4E3A\u7A7A"}]});return y({getFormData:()=>o,resetForm:()=>{!c.value||c.value.resetFields()},getFormValidate:()=>new Promise((V,p)=>{var i;(i=c.value)==null||i.validate((b,w)=>{V({valid:b,fields:w})})})}),(V,p)=>{const i=q,b=B,w=E;return g(),U(w,{ref_key:"formRef",ref:c,"label-position":"left","label-width":"80",model:o,rules:t},{default:a(()=>[e(b,{prop:"prop",label:"\u5B57\u6BB5\u540D"},{default:a(()=>[e(i,{modelValue:o.prop,"onUpdate:modelValue":p[0]||(p[0]=d=>o.prop=d),placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D",readonly:!1,disabled:!1,clearable:!0,"show-password":!1},null,8,["modelValue"])]),_:1}),e(b,{prop:"label",label:"\u5217\u540D"},{default:a(()=>[e(i,{modelValue:o.label,"onUpdate:modelValue":p[1]||(p[1]=d=>o.label=d),placeholder:"\u8BF7\u8F93\u5165\u5217\u540D",readonly:!1,disabled:!1,clearable:!0,"show-password":!1},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])}}}),j=P({__name:"TableCfg",props:{cfg:{default:()=>({label:"",prop:""})}},setup(v,{expose:y}){const c=v,o=_(),{cfg:t}=X(c),V=x({}),p=()=>t,i=x([{label:"\u5DE6",value:"left"},{label:"\u53F3",value:"right"}]),b=x([{label:"\u5DE6\u5BF9\u9F50",value:"left"},{label:"\u53F3\u5BF9\u9F50",value:"right"},{label:"\u5C45\u4E2D",value:"center"}]);return y({getFormData:p,resetForm:()=>{!o.value||o.value.resetFields()}}),(w,d)=>{const h=q,m=B,k=Y,r=Z,u=$,n=E;return g(),U(n,{ref_key:"formRef",ref:o,size:"default","label-position":"left","label-width":"120",model:s(t),rules:V},{default:a(()=>[e(m,{prop:"prop",label:"\u5B57\u6BB5\u540D"},{default:a(()=>[e(h,{modelValue:s(t).prop,"onUpdate:modelValue":d[0]||(d[0]=l=>s(t).prop=l),placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D",readonly:!1,disabled:!1,clearable:!0,"show-password":!1},null,8,["modelValue"])]),_:1}),e(m,{prop:"label",label:"\u5217\u540D"},{default:a(()=>[e(h,{modelValue:s(t).label,"onUpdate:modelValue":d[1]||(d[1]=l=>s(t).label=l),placeholder:"\u8BF7\u8F93\u5165\u5217\u540D",readonly:!1,disabled:!1,clearable:!0,"show-password":!1},null,8,["modelValue"])]),_:1}),e(m,{prop:"width",label:"\u5BBD\u5EA6"},{default:a(()=>[e(h,{modelValue:s(t).width,"onUpdate:modelValue":d[2]||(d[2]=l=>s(t).width=l),placeholder:"\u8BF7\u8F93\u5165\u5BBD\u5EA6",readonly:!1,disabled:!1,clearable:!0,"show-password":!1},null,8,["modelValue"])]),_:1}),e(m,{prop:"fixed",label:"\u56FA\u5B9A\u5217"},{default:a(()=>[e(r,{modelValue:s(t).fixed,"onUpdate:modelValue":d[3]||(d[3]=l=>s(t).fixed=l),placeholder:"",readonly:!1,disabled:!1,filterable:!1,clearable:!0},{default:a(()=>[(g(!0),T(I,null,z(i,l=>(g(),U(k,{key:l.value,value:l.value,label:l.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(m,{prop:"sortable",label:"\u662F\u5426\u53EF\u6392\u5E8F"},{default:a(()=>[e(u,{modelValue:s(t).sortable,"onUpdate:modelValue":d[4]||(d[4]=l=>s(t).sortable=l),disabled:!1,"active-text":"\u53EF\u6392\u5E8F","inactive-text":"\u4E0D\u53EF\u6392\u5E8F"},null,8,["modelValue"])]),_:1}),e(m,{prop:"align",label:"\u6587\u5B57\u5BF9\u9F50\u65B9\u5F0F"},{default:a(()=>[e(r,{modelValue:s(t).align,"onUpdate:modelValue":d[5]||(d[5]=l=>s(t).align=l),placeholder:"",readonly:!1,disabled:!1,filterable:!1,clearable:!1},{default:a(()=>[(g(!0),T(I,null,z(b,l=>(g(),U(k,{key:l.value,value:l.value,label:l.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])}}}),L=v=>(ue("data-v-ecf2cc08"),v=v(),ne(),v),G={class:"table-design"},H={class:"table-container"},J=["onClick"],K=L(()=>C("span",null,"\u6CE8\uFF1A\u53EA\u5C55\u793A\u524D10\u6761\u6570\u636E",-1)),M={class:"table-cfg"},N=P({__name:"TableDesign",setup(v){const y=_({label:"",prop:""}),c=_(""),o=x({columns:[{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u5730\u5740",prop:"address"}]}),t=_({type:"static",data:[{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}],reqType:"get",params:{},handleFunc:"return resData",interfaceUrl:"http://xxxx"}),V=_(),p=_([]),i=r=>{c.value=r,y.value=o.columns.find(u=>u.prop==r)},b=A({title:"\u65B0\u589E\u5217\u8868\u5B57\u6BB5",content:R,componentProps:{},width:400,height:200}),w=()=>{b.open(async r=>{const{valid:u}=await r.data.getFormValidate(),n=r.data.getFormData();u&&(o.columns.push({label:n.label,prop:n.prop}),b.destroyed())})},d=(r,u)=>{const n=u.attrs.field,l=o.columns.findIndex(D=>D.prop==n);l!=-1&&o.columns.splice(l,1)},h=_(!1),m=async()=>{h.value=!0;const r=await pe(t.value);p.value=r.slice(0,9),h.value=!1},k=()=>{const r=A({title:"\u6570\u636E\u6E90\u914D\u7F6E",content:oe,height:820,componentProps:{data:t.value}});r.open(({type:u,data:n})=>{console.log(u,n,n.data),u=="ok"&&(t.value=n.data),m(),r.destroyed()})};return(r,u)=>{const n=de,l=re,D=be,O=me,S=fe,W=se;return g(),T("div",G,[C("div",H,[e(n,{type:"primary",onClick:k},{default:a(()=>[F(" \u6570\u636E\u6E90\u914D\u7F6E ")]),_:1}),e(n,{type:"primary",icon:s(ee),onClick:w},{default:a(()=>[F(" \u65B0\u589E\u5B57\u6BB5 ")]),_:1},8,["icon"]),e(l,null,{default:a(()=>[F(" \u914D\u7F6E\u5217 ")]),_:1}),e(s(ve),{modelValue:o.columns,"onUpdate:modelValue":u[0]||(u[0]=f=>o.columns=f),"item-key":"prop",class:"table-header"},{item:a(({element:f})=>[e(S,{trigger:"contextmenu",onCommand:d},{dropdown:a(()=>[e(O,null,{default:a(()=>[e(D,{command:"delete",field:f.prop},{default:a(()=>[F(" \u5220\u9664 ")]),_:2},1032,["field"])]),_:2},1024)]),default:a(()=>[C("div",{class:le(["header-cell",c.value==f.prop?"cur-column":""]),style:ae({width:f.width?f.width+"px":"auto"}),onClick:Ve=>i(f.prop)},te(f.label),15,J)]),_:2},1024)]),_:1},8,["modelValue"]),e(l,null,{default:a(()=>[F(" \u9884\u89C8\u533A\u57DF "),K]),_:1}),e(W,{ref_key:"table",ref:V,data:p.value,"table-config":o,border:"",height:"750",loading:h.value},null,8,["data","table-config","loading"])]),C("div",M,[e(j,{cfg:y.value},null,8,["cfg"])])])}}});Q=ce(N,[["__scopeId","data-v-ecf2cc08"]])});export{ye as __tla,Q as default};
