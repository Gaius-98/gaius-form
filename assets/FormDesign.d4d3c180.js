import{bi as hl,V as S,d as y,bj as I,o as u,c as v,u as l,h as b,w as p,b as a,G as V,Y as w,F as k,C as P,aN as x,aL as z,bk as pe,bl as te,aK as j,bm as K,x as A,y as $,z as M,q as J,t as Y,aY as re,aS as Q,aJ as X,bn as E,bo as Z,bp as kl,bq as Ul,_ as T,br as Il,aQ as wl,aR as xl,g as Fl,B as F,A as Cl,bs as B,aC as C,ab as Pl,aM as ql,bt as Al,bu as Ol,bv as Dl,bw as Sl,a6 as ue,bx as ee,by as de,bz as ne,aX as me,bA as Tl,bB as Nl,__tla as zl}from"./index.8072bbac.js";import{E as Jl,a as Yl,__tla as El}from"./tab-pane.32654a4d.js";import{d as jl,__tla as $l}from"./vuedraggable.umd.8d655f2c.js";import{E as Ml,__tla as Rl}from"./overlay.a65ff720.js";let se,Wl=Promise.all([(()=>{try{return zl}catch{}})(),(()=>{try{return El}catch{}})(),(()=>{try{return $l}catch{}})(),(()=>{try{return Rl}catch{}})()]).then(async()=>{const U=hl("formDesignStore",()=>{const f=S({}),c=S({}),e=S({list:[],formProp:{size:"default",labelPosition:"top",labelWidth:120},name:""});return{formData:f,curFormItem:c,saveForm:e,onClickFormItem:_=>{Object.assign(c,_)},init:()=>{Object.assign(e,{list:[],formProp:{size:"default",labelPosition:"top",labelWidth:120},name:""}),Object.assign(f,{}),Object.assign(c,{})},setForm:_=>{Object.assign(e,_)}}}),ce=y({__name:"CommonAttr",setup(f){const c=U(),{curFormItem:e}=I(c);return(_,o)=>{const t=P,r=x,d=z,i=pe,g=te;return u(),v(k,null,[l(e).type=="component"&&l(e).comp!="button"?(u(),b(r,{key:0,prop:"prop.field",label:"\u5B57\u6BB5\u540D"},{default:p(()=>[a(t,{modelValue:l(e).prop.field,"onUpdate:modelValue":o[0]||(o[0]=m=>l(e).prop.field=m),clearable:""},null,8,["modelValue"])]),_:1})):V("",!0),a(r,{prop:"name",label:"\u7EC4\u4EF6\u540D\u79F0"},{default:p(()=>[a(t,{modelValue:l(e).name,"onUpdate:modelValue":o[1]||(o[1]=m=>l(e).name=m),disabled:""},null,8,["modelValue"])]),_:1}),l(e).type=="component"&&l(e).comp!="button"?(u(),b(r,{key:1,prop:"form_config.label",label:"\u6807\u7B7E\u6587\u672C"},{default:p(()=>[a(t,{modelValue:l(e).form_config.label,"onUpdate:modelValue":o[2]||(o[2]=m=>l(e).form_config.label=m)},null,8,["modelValue"])]),_:1})):V("",!0),l(e).type=="component"&&l(e).comp!="button"?(u(),b(r,{key:2,prop:"prop.readonly",label:"\u53EA\u8BFB"},{default:p(()=>[a(d,{modelValue:l(e).prop.readonly,"onUpdate:modelValue":o[3]||(o[3]=m=>l(e).prop.readonly=m)},null,8,["modelValue"])]),_:1})):V("",!0),l(e).type=="component"&&l(e).comp!="button"?(u(),b(r,{key:3,prop:"prop.disabled",label:"\u7981\u7528"},{default:p(()=>[a(d,{modelValue:l(e).prop.disabled,"onUpdate:modelValue":o[4]||(o[4]=m=>l(e).prop.disabled=m)},null,8,["modelValue"])]),_:1})):V("",!0),l(e).type=="component"&&l(e).comp!="button"?(u(),b(r,{key:4,prop:"form_config.rules.required",label:"\u5FC5\u586B"},{default:p(()=>[a(d,{modelValue:l(e).form_config.rules.required,"onUpdate:modelValue":o[5]||(o[5]=m=>l(e).form_config.rules.required=m)},null,8,["modelValue"])]),_:1})):V("",!0),l(e).type=="component"&&l(e).comp!="button"?(u(),b(r,{key:5,prop:"form_config.rules.regular",label:"\u6821\u9A8C\u6B63\u5219\u8868\u8FBE\u5F0F"},{default:p(()=>[a(t,{modelValue:l(e).form_config.rules.regular,"onUpdate:modelValue":o[6]||(o[6]=m=>l(e).form_config.rules.regular=m)},null,8,["modelValue"])]),_:1})):V("",!0),l(e).type=="component"&&l(e).comp!="button"?(u(),b(r,{key:6,prop:"form_config.rules.trigger",label:"\u89E6\u53D1\u65B9\u5F0F"},{default:p(()=>[a(g,{modelValue:l(e).form_config.rules.trigger,"onUpdate:modelValue":o[7]||(o[7]=m=>l(e).form_config.rules.trigger=m)},{default:p(()=>[a(i,{label:"change"},{default:p(()=>[w("change")]),_:1}),a(i,{label:"blur"},{default:p(()=>[w("blur")]),_:1})]),_:1},8,["modelValue"])]),_:1})):V("",!0),l(e).type=="component"&&l(e).comp!="button"?(u(),b(r,{key:7,prop:"form_config.rules.message",label:"\u6821\u9A8C\u63D0\u793A\u4FE1\u606F"},{default:p(()=>[a(t,{modelValue:l(e).form_config.rules.message,"onUpdate:modelValue":o[8]||(o[8]=m=>l(e).form_config.rules.message=m)},null,8,["modelValue"])]),_:1})):V("",!0)],64)}}}),ie=y({__name:"InputAttr",setup(f){const c=U(),{curFormItem:e}=I(c);return(_,o)=>{const t=P,r=x,d=z;return u(),v(k,null,[a(r,{prop:"prop.placeholder",label:"\u5360\u4F4D\u63D0\u793A"},{default:p(()=>[a(t,{modelValue:l(e).prop.placeholder,"onUpdate:modelValue":o[0]||(o[0]=i=>l(e).prop.placeholder=i)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.clearable",label:"\u662F\u5426\u53EF\u6E05\u7A7A"},{default:p(()=>[a(d,{modelValue:l(e).prop.clearable,"onUpdate:modelValue":o[1]||(o[1]=i=>l(e).prop.clearable=i)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.showPassword",label:"\u5BC6\u7801\u6846"},{default:p(()=>[a(d,{modelValue:l(e).prop.showPassword,"onUpdate:modelValue":o[2]||(o[2]=i=>l(e).prop.showPassword=i)},null,8,["modelValue"])]),_:1})],64)}}}),fe=y({__name:"TextareaAttr",setup(f){const c=U(),{curFormItem:e}=I(c);return(_,o)=>{const t=P,r=x,d=j;return u(),v(k,null,[a(r,{prop:"prop.placeholder",label:"\u5360\u4F4D\u63D0\u793A"},{default:p(()=>[a(t,{modelValue:l(e).prop.placeholder,"onUpdate:modelValue":o[0]||(o[0]=i=>l(e).prop.placeholder=i)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.rows",label:"\u6587\u672C\u57DF\u884C\u6570"},{default:p(()=>[a(d,{modelValue:l(e).prop.rows,"onUpdate:modelValue":o[1]||(o[1]=i=>l(e).prop.rows=i)},null,8,["modelValue"])]),_:1})],64)}}}),be=y({__name:"SelectAttr",setup(f){const c=U(),{curFormItem:e}=I(c),_=S([{field:"label",label:"\u5C55\u793A\u503C"},{field:"value",label:"\u5B9E\u9645\u503C"}]);return(o,t)=>{const r=P,d=x,i=z,g=K;return u(),v(k,null,[a(d,{prop:"prop.placeholder",label:"\u5360\u4F4D\u63D0\u793A"},{default:p(()=>[a(r,{modelValue:l(e).prop.placeholder,"onUpdate:modelValue":t[0]||(t[0]=m=>l(e).prop.placeholder=m)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.clearable",label:"\u662F\u5426\u53EF\u6E05\u7A7A"},{default:p(()=>[a(i,{modelValue:l(e).prop.clearable,"onUpdate:modelValue":t[1]||(t[1]=m=>l(e).prop.clearable=m)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.filterable",label:"\u662F\u5426\u53EF\u641C\u7D22"},{default:p(()=>[a(i,{modelValue:l(e).prop.filterable,"onUpdate:modelValue":t[2]||(t[2]=m=>l(e).prop.filterable=m)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.options",label:"\u4E0B\u62C9\u6846\u6570\u636E"},{default:p(()=>[a(g,{data:l(e).prop.options,"column-config":_},null,8,["data","column-config"])]),_:1})],64)}}}),_e=y({__name:"CheckBoxAttr",setup(f){const c=U(),{curFormItem:e}=I(c),_=S([{field:"label",label:"\u5C55\u793A\u503C"},{field:"value",label:"\u5B9E\u9645\u503C"}]);return(o,t)=>{const r=z,d=x,i=K;return u(),v(k,null,[a(d,{prop:"prop.border",label:"\u662F\u5426\u663E\u793A\u8FB9\u6846"},{default:p(()=>[a(r,{modelValue:l(e).prop.border,"onUpdate:modelValue":t[0]||(t[0]=g=>l(e).prop.border=g)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.options",label:"\u591A\u9009\u6846\u6570\u636E"},{default:p(()=>[a(i,{data:l(e).prop.options,"column-config":_},null,8,["data","column-config"])]),_:1})],64)}}}),Ve=y({__name:"DateAttr",setup(f){const c=U(),{curFormItem:e}=I(c),_=S([{label:"year",value:"year"},{label:"month",value:"month"},{label:"date",value:"date"},{label:"dates",value:"dates"},{label:"datetime",value:"datetime"},{label:"week",value:"week"},{label:"datetimerange",value:"datetimerange"},{label:"daterange",value:"daterange"},{label:"monthrange",value:"monthrange"}]);return(o,t)=>{const r=P,d=x,i=$,g=M;return u(),v(k,null,[a(d,{prop:"prop.placeholder",label:"\u5360\u4F4D\u63D0\u793A"},{default:p(()=>[a(r,{modelValue:l(e).prop.placeholder,"onUpdate:modelValue":t[0]||(t[0]=m=>l(e).prop.placeholder=m)},null,8,["modelValue"])]),_:1}),l(e).type=="component"?(u(),b(d,{key:0,prop:"prop.valueFormat",label:"\u503C\u683C\u5F0F"},{default:p(()=>[a(r,{modelValue:l(e).prop.valueFormat,"onUpdate:modelValue":t[1]||(t[1]=m=>l(e).prop.valueFormat=m)},null,8,["modelValue"])]),_:1})):V("",!0),a(d,{prop:"prop.type",label:"\u65E5\u671F\u7C7B\u578B"},{default:p(()=>[a(g,{modelValue:l(e).prop.type,"onUpdate:modelValue":t[2]||(t[2]=m=>l(e).prop.type=m)},{default:p(()=>[(u(!0),v(k,null,A(_,m=>(u(),b(i,{key:m.value,value:m.value,label:m.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(d,{prop:"prop.format",label:"\u5C55\u793A\u683C\u5F0F"},{default:p(()=>[a(r,{modelValue:l(e).prop.format,"onUpdate:modelValue":t[3]||(t[3]=m=>l(e).prop.format=m)},null,8,["modelValue"])]),_:1})],64)}}}),ge=y({__name:"TimeAttr",setup(f){const c=U(),{curFormItem:e}=I(c);return(_,o)=>{const t=P,r=x,d=z;return u(),v(k,null,[a(r,{prop:"prop.placeholder",label:"\u5360\u4F4D\u63D0\u793A"},{default:p(()=>[a(t,{modelValue:l(e).prop.placeholder,"onUpdate:modelValue":o[0]||(o[0]=i=>l(e).prop.placeholder=i)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.editable",label:"\u53EF\u8F93\u5165"},{default:p(()=>[a(d,{modelValue:l(e).prop.editable,"onUpdate:modelValue":o[1]||(o[1]=i=>l(e).prop.editable=i)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.clearable",label:"\u53EF\u6E05\u7A7A"},{default:p(()=>[a(d,{modelValue:l(e).prop.clearable,"onUpdate:modelValue":o[2]||(o[2]=i=>l(e).prop.clearable=i)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.arrowControl",label:"\u662F\u5426\u4F7F\u7528\u7BAD\u5934\u8FDB\u884C\u65F6\u95F4\u9009\u62E9"},{default:p(()=>[a(d,{modelValue:l(e).prop.arrowControl,"onUpdate:modelValue":o[3]||(o[3]=i=>l(e).prop.arrowControl=i)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.isRange",label:"\u65F6\u95F4\u8303\u56F4\u9009\u62E9"},{default:p(()=>[a(d,{modelValue:l(e).prop.isRange,"onUpdate:modelValue":o[4]||(o[4]=i=>l(e).prop.isRange=i)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.format",label:"\u5C55\u793A\u683C\u5F0F"},{default:p(()=>[a(t,{modelValue:l(e).prop.format,"onUpdate:modelValue":o[5]||(o[5]=i=>l(e).prop.format=i)},null,8,["modelValue"])]),_:1})],64)}}}),ye=y({__name:"InputNumberAttr",setup(f){const c=U(),{curFormItem:e}=I(c),_=S([{value:"right",label:"right"}]);return(o,t)=>{const r=P,d=x,i=j,g=$,m=M;return u(),v(k,null,[a(d,{prop:"prop.placeholder",label:"\u5360\u4F4D\u63D0\u793A"},{default:p(()=>[a(r,{modelValue:l(e).prop.placeholder,"onUpdate:modelValue":t[0]||(t[0]=s=>l(e).prop.placeholder=s)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.step",label:"\u6B65\u957F"},{default:p(()=>[a(i,{modelValue:l(e).prop.step,"onUpdate:modelValue":t[1]||(t[1]=s=>l(e).prop.step=s)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.min",label:"\u6700\u5C0F\u503C"},{default:p(()=>[a(i,{modelValue:l(e).prop.min,"onUpdate:modelValue":t[2]||(t[2]=s=>l(e).prop.min=s)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.max",label:"\u6700\u5927\u503C"},{default:p(()=>[a(i,{modelValue:l(e).prop.max,"onUpdate:modelValue":t[3]||(t[3]=s=>l(e).prop.max=s)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.controlsPosition",label:"\u4F4D\u7F6E"},{default:p(()=>[a(m,{modelValue:l(e).prop.controlsPosition,"onUpdate:modelValue":t[4]||(t[4]=s=>l(e).prop.controlsPosition=s),clearable:""},{default:p(()=>[(u(!0),v(k,null,A(_,s=>(u(),b(g,{key:s.value,value:s.value,label:s.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})],64)}}}),ve=y({__name:"SwitchAttr",setup(f){const c=U(),{curFormItem:e}=I(c);return(_,o)=>{const t=P,r=x;return u(),v(k,null,[a(r,{prop:"prop.activeText",label:"\u6253\u5F00\u65F6\u7684\u6587\u5B57\u63CF\u8FF0"},{default:p(()=>[a(t,{modelValue:l(e).prop.activeText,"onUpdate:modelValue":o[0]||(o[0]=d=>l(e).prop.activeText=d)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.inactiveText",label:"\u5173\u95ED\u65F6\u7684\u6587\u5B57\u63CF\u8FF0"},{default:p(()=>[a(t,{modelValue:l(e).prop.inactiveText,"onUpdate:modelValue":o[1]||(o[1]=d=>l(e).prop.inactiveText=d)},null,8,["modelValue"])]),_:1})],64)}}}),he=y({__name:"GridAttr",setup(f){const c=U(),{curFormItem:e}=I(c),_=S([{field:"span",label:"\u6805\u683C\u5360\u636E\u7684\u5217\u6570"}]);return(o,t)=>{const r=K,d=x,i=j;return u(),v(k,null,[a(d,{prop:"prop.cols",label:"\u6805\u683C\u5E03\u5C40"},{default:p(()=>[a(r,{data:l(e).prop.cols,"column-config":_},null,8,["data","column-config"])]),_:1}),a(d,{prop:"prop.gutter",label:"\u6805\u683C\u95F4\u9694"},{default:p(()=>[a(i,{modelValue:l(e).prop.gutter,"onUpdate:modelValue":t[0]||(t[0]=g=>l(e).prop.gutter=g)},null,8,["modelValue"])]),_:1})],64)}}}),ke=y({__name:"CardAttr",setup(f){const c=U(),{curFormItem:e}=I(c),_=J([{label:"always",value:"always"},{label:"never",value:"never"},{label:"hover",value:"hover"}]);return(o,t)=>{const r=P,d=x,i=$,g=M;return u(),v(k,null,[a(d,{prop:"prop.header",label:"\u5361\u7247\u540D\u79F0"},{default:p(()=>[a(r,{modelValue:l(e).prop.header,"onUpdate:modelValue":t[0]||(t[0]=m=>l(e).prop.header=m)},null,8,["modelValue"])]),_:1}),a(d,{prop:"prop.shadow",label:"\u9634\u5F71\u663E\u793A\u65F6\u673A"},{default:p(()=>[a(g,{modelValue:l(e).prop.shadow,"onUpdate:modelValue":t[1]||(t[1]=m=>l(e).prop.shadow=m)},{default:p(()=>[(u(!0),v(k,null,A(_.value,m=>(u(),b(i,{key:m.value,value:m.value,label:m.label},{default:p(()=>[w(Y(m.label),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})],64)}}});var le=(f=>(f.large="large",f.default="default",f.small="small",f))(le||{}),oe=(f=>(f.primary="primary",f.success="success",f.warning="warning",f.danger="danger",f.info="info",f))(oe||{});const Ue=y({__name:"ButtonAttr",setup(f){const c=U(),{curFormItem:e}=I(c);return(_,o)=>{const t=P,r=x,d=$,i=M,g=z,m=re;return u(),v(k,null,[a(r,{prop:"prop.name",label:"\u6309\u94AE\u540D\u79F0"},{default:p(()=>[a(t,{modelValue:l(e).prop.name,"onUpdate:modelValue":o[0]||(o[0]=s=>l(e).prop.name=s)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.size",label:"\u6309\u94AE\u5C3A\u5BF8"},{default:p(()=>[a(i,{modelValue:l(e).prop.size,"onUpdate:modelValue":o[1]||(o[1]=s=>l(e).prop.size=s)},{default:p(()=>[(u(),v(k,null,A(le,s=>a(d,{key:s,value:s,label:s},{default:p(()=>[w(Y(s),1)]),_:2},1032,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1}),a(r,{prop:"prop.type",label:"\u6309\u94AE\u7C7B\u578B"},{default:p(()=>[a(i,{modelValue:l(e).prop.type,"onUpdate:modelValue":o[2]||(o[2]=s=>l(e).prop.type=s),clearable:""},{default:p(()=>[(u(),v(k,null,A(oe,s=>a(d,{key:s,value:s,label:s},{default:p(()=>[w(Y(s),1)]),_:2},1032,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1}),a(r,{prop:"prop.plain",label:"\u6734\u7D20\u6309\u94AE"},{default:p(()=>[a(g,{modelValue:l(e).prop.plain,"onUpdate:modelValue":o[3]||(o[3]=s=>l(e).prop.plain=s)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.text",label:"\u6587\u5B57\u6309\u94AE"},{default:p(()=>[a(g,{modelValue:l(e).prop.text,"onUpdate:modelValue":o[4]||(o[4]=s=>l(e).prop.text=s)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.bg",label:"\u663E\u793A\u6587\u5B57\u6309\u94AE\u80CC\u666F\u989C\u8272"},{default:p(()=>[a(g,{modelValue:l(e).prop.bg,"onUpdate:modelValue":o[5]||(o[5]=s=>l(e).prop.bg=s)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.link",label:"\u94FE\u63A5\u6309\u94AE"},{default:p(()=>[a(g,{modelValue:l(e).prop.link,"onUpdate:modelValue":o[6]||(o[6]=s=>l(e).prop.link=s)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.round",label:"\u5706\u89D2\u6309\u94AE"},{default:p(()=>[a(g,{modelValue:l(e).prop.round,"onUpdate:modelValue":o[7]||(o[7]=s=>l(e).prop.round=s)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.circle",label:"\u5706\u5F62\u6309\u94AE"},{default:p(()=>[a(g,{modelValue:l(e).prop.circle,"onUpdate:modelValue":o[8]||(o[8]=s=>l(e).prop.circle=s)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.disabled",label:"\u7981\u7528"},{default:p(()=>[a(g,{modelValue:l(e).prop.disabled,"onUpdate:modelValue":o[9]||(o[9]=s=>l(e).prop.disabled=s)},null,8,["modelValue"])]),_:1}),a(r,{prop:"prop.clickEvent",label:"\u70B9\u51FB\u4E8B\u4EF6"},{default:p(()=>[a(m,{code:l(e).prop.clickEvent,"onUpdate:code":o[10]||(o[10]=s=>l(e).prop.clickEvent=s),style:{width:"100%",height:"200px"}},null,8,["code"])]),_:1})],64)}}}),Ie=y({__name:"CollapseAttr",setup(f){const c=U(),{curFormItem:e}=I(c);return(_,o)=>{const t=P,r=x;return u(),b(r,{prop:"prop.title",label:"\u6298\u53E0\u9762\u677F\u540D\u79F0"},{default:p(()=>[a(t,{modelValue:l(e).prop.title,"onUpdate:modelValue":o[0]||(o[0]=d=>l(e).prop.title=d)},null,8,["modelValue"])]),_:1})}}}),we=y({name:"EvFormAttr"}),xe=y({...we,setup(f){const c=U(),{curFormItem:e}=I(c);return(_,o)=>{const t=Q;return u(),b(t,{model:l(e)},{default:p(()=>[a(ce),l(e).comp=="input"?(u(),b(ie,{key:0})):V("",!0),l(e).comp=="textarea"?(u(),b(fe,{key:1})):V("",!0),l(e).comp=="select"?(u(),b(be,{key:2})):V("",!0),l(e).comp=="checkbox"?(u(),b(_e,{key:3})):V("",!0),l(e).comp=="date"?(u(),b(Ve,{key:4})):V("",!0),l(e).comp=="time"?(u(),b(ge,{key:5})):V("",!0),l(e).comp=="number"?(u(),b(ye,{key:6})):V("",!0),l(e).comp=="switch"?(u(),b(ve,{key:7})):V("",!0),l(e).comp=="button"?(u(),b(Ue,{key:8})):V("",!0),l(e).comp=="grid"?(u(),b(he,{key:9})):V("",!0),l(e).comp=="card"?(u(),b(ke,{key:10})):V("",!0),l(e).comp=="collapse"?(u(),b(Ie,{key:11})):V("",!0)]),_:1},8,["model"])}}}),Fe=y({name:"dropGrid"}),Ce=y({...Fe,props:{cols:{type:Array,required:!0}},setup(f){const c=f,{cols:e}=X(c);return(_,o)=>{const t=kl,r=Ul;return u(),b(r,E(Z(_.$attrs)),{default:p(()=>[(u(!0),v(k,null,A(l(e),d=>(u(),b(t,{key:d.key,span:Number(d.span),class:"col"},{default:p(()=>[a(R,{list:d.list,"onUpdate:list":i=>d.list=i},null,8,["list","onUpdate:list"])]),_:2},1032,["span"]))),128))]),_:1},16)}}}),Pe=T(Ce,[["__scopeId","data-v-80026d22"]]),qe=y({name:"dropCard"}),Ae=y({...qe,props:{card:{type:Object,required:!0}},setup(f){const c=f,{card:e}=X(c);return(_,o)=>{const t=Il;return u(),b(t,E(Z(_.$attrs)),{default:p(()=>[a(R,{list:l(e).list,"onUpdate:list":o[0]||(o[0]=r=>l(e).list=r),style:{"min-height":"40px"}},null,8,["list"])]),_:1},16)}}}),Oe=T(Ae,[["__scopeId","data-v-7a657d78"]]),De=y({name:"dropCard"}),Se=y({...De,props:{collapse:{type:Object,required:!0},title:{type:String,required:!0,default:"\u6807\u9898"}},setup(f){const c=f,{collapse:e,title:_}=X(c);return(o,t)=>{const r=wl,d=xl;return u(),b(d,E(Z(o.$attrs)),{default:p(()=>[a(r,{title:l(_),name:l(_)},{default:p(()=>[a(R,{list:l(e).list,"onUpdate:list":t[0]||(t[0]=i=>l(e).list=i),style:{"min-height":"40px"}},null,8,["list"])]),_:1},8,["title","name"])]),_:1},16)}}}),Te=T(Se,[["__scopeId","data-v-fbcd0f50"]]),Ne=["onClick"],ze={key:1},Je=["onClick"],Ye=y({name:"dropComp"}),Ee=y({...Ye,props:{list:{type:Array,required:!0,default:()=>[]}},emits:["update:list"],setup(f,{emit:c}){const e=f,_=U(),{formData:o,curFormItem:t}=I(_),{onClickFormItem:r}=_,d=Fl({get(){return e.list},set(m){c("update:list",m)}}),i=m=>{const s=d.value.findIndex(O=>O.compId==m.compId);d.value.splice(s,1)},g=m=>{if(m&&m.dataTransfer){const s=m.dataTransfer.getData("comp");let O=JSON.parse(s);d.value.push(O)}};return(m,s)=>{const O=P,q=$,G=M,N=ql,H=Al,W=Ol,L=Dl,D=Sl,Vl=j,gl=z,yl=ue,vl=x;return u(),b(l(jl),{modelValue:l(d),"onUpdate:modelValue":s[0]||(s[0]=n=>Pl(d)?d.value=n:null),"item-key":"compId",group:"comp",class:"drop_container",onDrop:B(g,["prevent","stop"]),onDragover:s[1]||(s[1]=B(()=>{},["prevent"]))},{item:p(({element:n})=>[F("div",{class:Cl(["drop_container_item",l(t).compId==n.compId?"drop_container_item-active":""]),onClick:B(h=>l(r)(n),["stop"])},[n.type=="component"?(u(),b(vl,C({key:0,prop:n.prop.field},n.form_config),{default:p(()=>[n.comp=="input"?(u(),b(O,C({key:n.compId,modelValue:l(o)[n.prop.field],"onUpdate:modelValue":h=>l(o)[n.prop.field]=h},n.prop),null,16,["modelValue","onUpdate:modelValue"])):V("",!0),n.comp=="textarea"?(u(),b(O,C({key:n.compId,modelValue:l(o)[n.prop.field],"onUpdate:modelValue":h=>l(o)[n.prop.field]=h},n.prop),null,16,["modelValue","onUpdate:modelValue"])):V("",!0),n.comp=="select"?(u(),b(G,C({key:2},n.prop,{key:n.compId,modelValue:l(o)[n.prop.field],"onUpdate:modelValue":h=>l(o)[n.prop.field]=h}),{default:p(()=>[(u(!0),v(k,null,A(n.prop.options,h=>(u(),b(q,{key:h.value,value:h.value,label:h.label},null,8,["value","label"]))),128))]),_:2},1040,["modelValue","onUpdate:modelValue"])):V("",!0),n.comp=="color"?(u(),b(N,C({key:3},n.prop,{key:n.compId,modelValue:l(o)[n.prop.field],"onUpdate:modelValue":h=>l(o)[n.prop.field]=h}),null,16,["modelValue","onUpdate:modelValue"])):V("",!0),n.comp=="checkbox"?(u(),b(W,C({key:4},n.prop,{key:n.compId,modelValue:l(o)[n.prop.field],"onUpdate:modelValue":h=>l(o)[n.prop.field]=h}),{default:p(()=>[(u(!0),v(k,null,A(n.prop.options,h=>(u(),b(H,{key:h.value,label:h.value},{default:p(()=>[w(Y(h.label),1)]),_:2},1032,["label"]))),128))]),_:2},1040,["modelValue","onUpdate:modelValue"])):V("",!0),n.comp=="date"?(u(),b(L,C({key:5},n.prop,{key:n.compId,modelValue:l(o)[n.prop.field],"onUpdate:modelValue":h=>l(o)[n.prop.field]=h}),null,16,["modelValue","onUpdate:modelValue"])):V("",!0),n.comp=="time"?(u(),b(D,C({key:6},n.prop,{key:n.compId,modelValue:l(o)[n.prop.field],"onUpdate:modelValue":h=>l(o)[n.prop.field]=h}),null,16,["modelValue","onUpdate:modelValue"])):V("",!0),n.comp=="number"?(u(),b(Vl,C({key:7},n.prop,{key:n.compId,modelValue:l(o)[n.prop.field],"onUpdate:modelValue":h=>l(o)[n.prop.field]=h}),null,16,["modelValue","onUpdate:modelValue"])):V("",!0),n.comp=="switch"?(u(),b(gl,C({key:8},n.prop,{key:n.compId,modelValue:l(o)[n.prop.field],"onUpdate:modelValue":h=>l(o)[n.prop.field]=h}),null,16,["modelValue","onUpdate:modelValue"])):V("",!0),n.comp=="button"?(u(),b(yl,C({key:9},n.prop,{key:n.compId}),{default:p(()=>[w(Y(n.prop.name),1)]),_:2},1040)):V("",!0)]),_:2},1040,["prop"])):V("",!0),n.type=="container"?(u(),v("div",ze,[n.comp=="grid"?(u(),b(Pe,E(C({key:0},n.prop)),null,16)):V("",!0),n.comp=="card"?(u(),b(Oe,E(C({key:1},n.prop)),null,16)):V("",!0),n.comp=="collapse"?(u(),b(Te,E(C({key:2},n.prop)),null,16)):V("",!0)])):V("",!0),F("div",{class:"drop_container_item_opt iconfont icon-a-shanchulajitong",onClick:h=>i(n)},null,8,Je)],10,Ne)]),_:1},8,["modelValue","onDrop"])}}}),R=T(Ee,[["__scopeId","data-v-a2f7a2bf"]]),je={class:"container"},$e=y({__name:"dropContainer",setup(f){const c=U(),{saveForm:e}=I(c);return(_,o)=>{const t=Q;return u(),v("div",je,[a(t,C(l(e).formProp,{style:{width:"100%",height:"100%"}}),{default:p(()=>[a(R,{list:l(e).list,"onUpdate:list":o[0]||(o[0]=r=>l(e).list=r)},null,8,["list"])]),_:1},16)])}}}),Me=T($e,[["__scopeId","data-v-09f15553"]]),Re=[{comp:"input",compId:"1",name:"\u8F93\u5165\u6846",type:"component",prop:{placeholder:"\u8F93\u5165\u63D0\u793A",readonly:!1,disabled:!1,field:"1",clearable:!0,showPassword:!1},form_config:{label:"\u8F93\u5165\u6846",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"textarea",compId:"1",name:"\u6587\u672C\u57DF",type:"component",prop:{placeholder:"\u8F93\u5165\u63D0\u793A",readonly:!1,disabled:!1,field:"1",type:"textarea",rows:2},form_config:{label:"\u6587\u672C\u57DF",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"select",compId:"2",name:"\u9009\u62E9\u6846",type:"component",prop:{options:[{value:1,label:1,key:1}],placeholder:"\u8F93\u5165\u63D0\u793A",readonly:!1,disabled:!1,field:"2",clearable:!0,filterable:!0},form_config:{label:"\u9009\u62E9\u6846",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"color",compId:"3",name:"\u53D6\u8272\u5668",type:"component",prop:{readonly:!1,disabled:!1,field:"3"},form_config:{label:"\u53D6\u8272\u5668",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"checkbox",compId:"4",name:"\u591A\u9009\u6846",type:"component",prop:{options:[{value:1,label:1},{value:2,label:2}],placeholder:"\u8F93\u5165\u63D0\u793A",readonly:!1,disabled:!1,field:"4"},form_config:{label:"\u591A\u9009\u6846",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"date",compId:"5",name:"\u65E5\u671F\u9009\u62E9\u5668",type:"component",prop:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD",type:"date",placeholder:"\u8F93\u5165\u63D0\u793A",readonly:!1,disabled:!1,field:"5"},form_config:{label:"\u65E5\u671F\u9009\u62E9\u5668",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"number",compId:"6",name:"\u6570\u5B57\u8F93\u5165\u6846",type:"component",prop:{placeholder:"\u8F93\u5165\u63D0\u793A",readonly:!1,disabled:!1,field:"6",step:1,min:0,max:100,controlsPosition:"right"},form_config:{label:"\u6570\u5B57\u8F93\u5165\u6846",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"switch",compId:"7",name:"\u5F00\u5173",type:"component",prop:{placeholder:"\u8F93\u5165\u63D0\u793A",disabled:!1,field:"6",activeText:"",inactiveText:""},form_config:{label:"\u5F00\u5173",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"time",compId:"7",name:"\u65F6\u95F4\u9009\u62E9\u5668",type:"component",prop:{placeholder:"\u8F93\u5165\u63D0\u793A",format:"HH:mm:ss",isRange:!1,arrowControl:!1,clearable:!1,editable:!1,readonly:!1,disabled:!1,field:"6"},form_config:{label:"\u65F6\u95F4\u9009\u62E9\u5668",rules:{required:!1,message:"\u63D0\u793A",trigger:"blur"}}},{comp:"button",compId:"7",name:"\u6309\u94AE",type:"component",prop:{round:!1,link:!1,bg:!1,text:!1,plain:!1,disabled:!1,field:"6",name:"\u6309\u94AE",size:"default",type:"info",clickEvent:""}},{comp:"grid",compId:"",name:"\u6805\u683C",type:"container",prop:{cols:[{list:[],key:ee(),span:12},{list:[],key:ee(),span:12}],gutter:0,field:""}},{comp:"card",compId:"",name:"\u5361\u7247\u5BB9\u5668",type:"container",prop:{card:{list:[]},field:"",header:"\u5361\u7247\u5BB9\u5668\u6807\u9898",shadow:"always"}},{comp:"collapse",compId:"",name:"\u6298\u53E0\u9762\u677F",type:"container",prop:{collapse:{list:[]},field:"",title:"\u6298\u53E0\u9762\u677F\u6807\u9898"}}],We=Re,ae=f=>(de("data-v-a8dba2b8"),f=f(),ne(),f),Ge={class:"comp_container"},He=ae(()=>F("div",{class:"title"}," \u8868\u5355\u7EC4\u4EF6 ",-1)),Le={class:"com-list"},Ke={class:"container-list"},Qe={class:"comp_list_container"},Xe=["data-comp"],Ze=ae(()=>F("div",{class:"title"}," \u5BB9\u5668\u7EC4\u4EF6 ",-1)),Be={class:"container-list"},el={class:"comp_list_container"},ll=["data-comp"],ol=y({__name:"dragCompList",setup(f){const c=J([]),e=J([]);We.forEach(o=>{o.type=="component"?c.value.push(o):o.type=="container"&&e.value.push(o)});const _=o=>{if(o&&o.dataTransfer&&o.target){let t=o.target,r=JSON.parse(t.dataset.comp);r.compId=ee(),r.prop.field=`field${(Math.random()*1e4).toFixed(0)}`,o.dataTransfer.setData("comp",JSON.stringify(r))}};return(o,t)=>(u(),v("div",Ge,[He,F("div",Le,[F("div",Ke,[F("div",Qe,[(u(!0),v(k,null,A(c.value,r=>(u(),v("div",{key:r.compId,class:"comp",draggable:"true","data-comp":JSON.stringify(r),onDragstart:_},Y(r.name),41,Xe))),128))])])]),Ze,F("div",Be,[F("div",el,[(u(!0),v(k,null,A(e.value,r=>(u(),v("div",{key:r.compId,class:"comp",draggable:"true","data-comp":JSON.stringify(r),onDragstart:_},Y(r.name),41,ll))),128))])])]))}}),al=T(ol,[["__scopeId","data-v-a8dba2b8"]]),pl=y({name:"FormAttr"}),tl=y({...pl,setup(f){const c=U(),{saveForm:e}=I(c);return(_,o)=>{const t=pe,r=te,d=x,i=j,g=Q;return u(),b(g,{model:l(e).formProp},{default:p(()=>[a(d,{prop:"size",label:"\u5927\u5C0F"},{default:p(()=>[a(r,{modelValue:l(e).formProp.size,"onUpdate:modelValue":o[0]||(o[0]=m=>l(e).formProp.size=m),label:"size control"},{default:p(()=>[a(t,{label:"large"},{default:p(()=>[w("large")]),_:1}),a(t,{label:"default"},{default:p(()=>[w("default")]),_:1}),a(t,{label:"small"},{default:p(()=>[w("small")]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(d,{prop:"labelPosition",label:"\u8868\u5355\u57DF\u6807\u7B7E\u7684\u4F4D\u7F6E"},{default:p(()=>[a(r,{modelValue:l(e).formProp.labelPosition,"onUpdate:modelValue":o[1]||(o[1]=m=>l(e).formProp.labelPosition=m),label:"position control"},{default:p(()=>[a(t,{label:"left"},{default:p(()=>[w("Left")]),_:1}),a(t,{label:"right"},{default:p(()=>[w("Right")]),_:1}),a(t,{label:"top"},{default:p(()=>[w("Top")]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(d,{prop:"labelWidth",label:"\u8868\u5355\u57DF\u6807\u7B7E\u5BBD\u5EA6"},{default:p(()=>[a(i,{modelValue:l(e).formProp.labelWidth,"onUpdate:modelValue":o[2]||(o[2]=m=>l(e).formProp.labelWidth=m),step:1,min:0},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])}}}),rl=f=>(de("data-v-756a9f74"),f=f(),ne(),f),ul={class:"form_name"},dl=rl(()=>F("span",null," \u8868\u5355\u540D\u79F0 ",-1)),nl={class:"form_opt"},ml=y({__name:"formHeader",setup(f){const c=J(!1),e=()=>{c.value=!0},_=U(),{saveForm:o}=I(_),t=()=>{me(JSON.stringify(o.value,null,4),o.value.name)},r=()=>{me(Tl(o.value),o.value.name,"vue")},d=J(!1),i=()=>{d.value=!0},g=J(""),{setForm:m}=_,s=()=>{const O=JSON.parse(g.value);m(O),d.value=!1};return(O,q)=>{const G=P,N=ue,H=Nl,W=Ml,L=re;return u(),v(k,null,[F("div",ul,[dl,a(G,{modelValue:l(o).name,"onUpdate:modelValue":q[0]||(q[0]=D=>l(o).name=D)},null,8,["modelValue"])]),F("div",nl,[a(N,{onClick:i},{default:p(()=>[w(" \u5199\u5165JSON ")]),_:1}),a(N,{onClick:e},{default:p(()=>[w(" \u9884\u89C8 ")]),_:1}),a(N,{onClick:t},{default:p(()=>[w(" \u5BFC\u51FAJSON ")]),_:1}),a(N,{onClick:r},{default:p(()=>[w(" \u5BFC\u51FAVUE\u6587\u4EF6 ")]),_:1})]),a(W,{modelValue:c.value,"onUpdate:modelValue":q[1]||(q[1]=D=>c.value=D),title:"\u9884\u89C8"},{default:p(()=>[a(H,{"form-config":l(o)},null,8,["form-config"])]),_:1},8,["modelValue"]),a(W,{modelValue:d.value,"onUpdate:modelValue":q[3]||(q[3]=D=>d.value=D),title:"JSON\u914D\u7F6E"},{footer:p(()=>[a(N,{onClick:s},{default:p(()=>[w(" \u786E\u8BA4 ")]),_:1})]),default:p(()=>[a(L,{code:g.value,"onUpdate:code":q[2]||(q[2]=D=>g.value=D)},null,8,["code"])]),_:1},8,["modelValue"])],64)}}}),sl=T(ml,[["__scopeId","data-v-756a9f74"]]),cl={class:"form-design"},il={class:"form-design_header"},fl={class:"form-design_container"},bl={class:"form-design_opt"},_l=y({__name:"FormDesign",setup(f){const c=J("comp");return(e,_)=>{const o=xe,t=Jl,r=Yl;return u(),v("div",cl,[F("div",il,[a(sl)]),F("div",fl,[a(al),a(Me),F("div",bl,[a(r,{modelValue:c.value,"onUpdate:modelValue":_[0]||(_[0]=d=>c.value=d)},{default:p(()=>[a(t,{label:"\u7EC4\u4EF6\u914D\u7F6E",name:"comp"},{default:p(()=>[a(o)]),_:1}),a(t,{label:"\u8868\u5355\u914D\u7F6E",name:"form"},{default:p(()=>[a(tl)]),_:1})]),_:1},8,["modelValue"])])])])}}});se=T(_l,[["__scopeId","data-v-bfe48856"]])});export{Wl as __tla,se as default};
