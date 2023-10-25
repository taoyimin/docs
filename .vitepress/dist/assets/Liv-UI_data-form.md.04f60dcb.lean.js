import{d as B,B as F,o as y,y as E,b as m,l as u,c as f,D as a,z as t,x as s,a as l,M as d}from"./chunks/framework.71afdf21.js";import{E as r}from"./chunks/index.6397a2af.js";const h=B({__name:"data-form.md.demo.609af0f3",setup(i){const e=[{prop:"no",label:"事件编号",fieldType:"input"},{prop:"status",label:"事件状态",fieldType:"select",fieldData:[{label:"待处理",value:"0"},{label:"待评价",value:"1"},{label:"已办结",value:"2"}]},{prop:"location",label:"开启定位",fieldType:"switch"},{prop:"imageUrl",label:"事件图片",fieldType:"image"}];return(p,o)=>{const n=F("liv-data-form");return y(),E(n,{fields:e})}}}),C=B({__name:"data-form.md.demo.609af0f4",setup(i){const e=[{prop:"no",label:"事件编号",fieldType:"input"},{prop:"status",label:"事件状态",fieldType:"select",fieldData:[{label:"待处理",value:"0"},{label:"待评价",value:"1"},{label:"已办结",value:"2"}]},{prop:"location",label:"开启定位",fieldType:"switch"},{prop:"imageUrl",label:"事件图片",fieldType:"image"}],p=(n,c)=>{r({message:"提交的表单内容："+JSON.stringify(n),type:"success",duration:3500})},o=()=>{r({message:"点击了返回按钮",type:"success"})};return(n,c)=>{const D=F("liv-data-form");return y(),E(D,{fields:e,onSubmit:p,onReset:c[0]||(c[0]=(H,A)=>A.resetFields()),onBack:o})}}}),b=B({__name:"data-form.md.demo.609af0f5",setup(i){const e=[{prop:"no",label:"事件编号",fieldType:"input"},{prop:"status",label:"事件状态",fieldType:"select",fieldData:[{label:"待处理",value:"0"},{label:"待评价",value:"1"},{label:"已办结",value:"2"}]},{prop:"location",label:"开启定位",fieldType:"switch"},{prop:"imageUrl",label:"事件图片",fieldType:"image"}],p=[{name:"暂存",type:"warning",onClick:()=>{r({message:"点击了暂存按钮",type:"warning"})}},{name:"清空",type:"danger",onClick:()=>{r({message:"点击了清空按钮",type:"error"})}}],o=(n,c)=>{r({message:"提交的表单内容："+JSON.stringify(n),type:"success",duration:3500})};return(n,c)=>{const D=F("liv-data-form");return y(),E(D,{fields:e,onSubmit:o,buttons:p})}}}),g=B({__name:"data-form.md.demo.609af0f6",setup(i){const e=[{prop:"no",label:"事件编号",fieldType:"input"}],p=(n,c)=>{r({message:"搜索的表单内容："+JSON.stringify(n),type:"success",duration:3500})},o=()=>{r({message:"点击了新增按钮",type:"success"})};return(n,c)=>{const D=F("liv-data-form");return y(),E(D,{inline:"",fields:e,onSearch:p,onAdd:o})}}}),_=B({__name:"data-form.md.demo.609af0f7",setup(i){const e=m({}),p=[{prop:"id",label:"事件ID"},{prop:"no",label:"事件编号",fieldType:"input"},{prop:"status",label:"事件状态",fieldType:"select",fieldData:[{label:"待处理",value:"0"},{label:"待评价",value:"1"},{label:"已办结",value:"2"}]},{prop:"location",label:"开启定位",fieldType:"switch"},{prop:"imageUrl",label:"事件图片",fieldType:"image"}];u(async()=>{setTimeout(()=>{e.value={id:"111",no:"123456789",status:"1",location:!0,imageUrl:"/ruralLivingEn/202310/d5ca2af7-dad1-4bb4-919a-6767da06eb0e.jpg,/ruralLivingEn/202310/62516435-5d3d-4bba-9310-1f3e9bde357c.jpg"}},1e3)});const o=(n,c)=>{r({message:"提交的表单内容："+JSON.stringify(n),type:"success",duration:3500})};return(n,c)=>{const D=F("liv-data-form");return y(),E(D,{fields:p,"default-value":e.value,onSubmit:o},null,8,["default-value"])}}}),v=B({__name:"data-form.md.demo.609af0f8",setup(i){const e=[{prop:"no",label:"事件编号",fieldType:"input",placeholder:"自定义提示",maxlength:5},{prop:"status",label:"事件状态",fieldType:"select",fieldData:[{label:"待处理",value:"0"},{label:"待评价",value:"1",disabled:!0},{label:"已办结",value:"2"}]},{prop:"location",label:"开启定位",fieldType:"switch",inlinePrompt:!0,activeText:"完整展示多个内容",inactiveText:"多个内容"},{prop:"imageUrl",label:"事件图片",fieldType:"image",listType:"picture",limit:1}],p=(o,n)=>{r({message:"提交的表单内容："+JSON.stringify(o),type:"success",duration:3500})};return(o,n)=>{const c=F("liv-data-form");return y(),E(c,{fields:e,onSubmit:p})}}}),T=s("h1",{id:"data-form-数据表单",tabindex:"-1"},[l("Data Form 数据表单 "),s("a",{class:"header-anchor",href:"#data-form-数据表单","aria-label":'Permalink to "Data Form 数据表单"'},"​")],-1),k=s("p",null,"该组件用于快速生成数据表单，内部封装了表单渲染、表单验证、文件处理等逻辑，只需传入字段配置信息即可。",-1),S=s("h2",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),x=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"liv-data-form"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":fields"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"fields"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," fields "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," ["),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"prop"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"no"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"事件编号"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldType"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"input"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"prop"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"status"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"事件状态"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldType"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"select"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldData"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," ["),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"待处理"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"value"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"0"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"待评价"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"value"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"1"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"已办结"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"value"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"2"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"prop"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"location"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"开启定位"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldType"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"switch"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"prop"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"imageUrl"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"事件图片"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldType"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"image"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1),N=s("h2",{id:"操作按钮",tabindex:"-1"},[l("操作按钮 "),s("a",{class:"header-anchor",href:"#操作按钮","aria-label":'Permalink to "操作按钮"'},"​")],-1),M=s("p",null,"表单内部封装了提交、重置、返回、查询、新增五个常用按钮，监听相应事件后自动渲染，默认不渲染。",-1),w=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"liv-data-form"),s("span",{style:{color:"#89DDFF"}}," ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},":fields"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"fields"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},"@submit"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"handleSubmit"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},"@reset"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"(form, formEl) => formEl.resetFields()"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},"@back"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"handleBack"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"ElMessage"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"element-plus"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," fields "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," ["),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"prop"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"no"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"事件编号"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldType"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"input"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"prop"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"status"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"事件状态"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldType"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"select"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldData"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," ["),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"待处理"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"value"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"0"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"待评价"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"value"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"1"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"已办结"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"value"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"2"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"prop"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"location"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"开启定位"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldType"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"switch"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"prop"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"imageUrl"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"事件图片"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldType"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"image"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," handleSubmit "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#BABED8","font-style":"italic"}},"form"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#BABED8","font-style":"italic"}},"formEl"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#82AAFF"}},"ElMessage"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        message"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"提交的表单内容："),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"+"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"JSON"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"stringify"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#BABED8"}},"form"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        type"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"success"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        duration"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"3500")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," handleBack "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#82AAFF"}},"ElMessage"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        message"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"点击了返回按钮"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        type"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"success"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1),U=s("h2",{id:"自定义按钮",tabindex:"-1"},[l("自定义按钮 "),s("a",{class:"header-anchor",href:"#自定义按钮","aria-label":'Permalink to "自定义按钮"'},"​")],-1),P=s("p",null,[l("除了使用组件内部封装好的按钮，你还可以使用"),s("code",null,"buttons"),l("属性根据业务需要传入自定义按钮。")],-1),O=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"liv-data-form"),s("span",{style:{color:"#89DDFF"}}," ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},":fields"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"fields"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},"@submit"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"handleSubmit"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},":buttons"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"buttons"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"ElMessage"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"element-plus"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," fields "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," ["),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"prop"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"no"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"事件编号"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldType"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"input"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"prop"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"status"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"事件状态"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldType"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"select"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldData"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," ["),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"待处理"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"value"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"0"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"待评价"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"value"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"1"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"已办结"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"value"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"2"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"prop"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"location"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"开启定位"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldType"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"switch"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"prop"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"imageUrl"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"事件图片"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldType"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"image"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," buttons "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," ["),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"name"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"暂存"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"type"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"warning"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#82AAFF"}},"onClick"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#82AAFF"}},"ElMessage"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        message"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"点击了暂存按钮"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        type"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"warning"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"name"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"清空"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"type"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"danger"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#82AAFF"}},"onClick"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#82AAFF"}},"ElMessage"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        message"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"点击了清空按钮"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        type"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"error"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," handleSubmit "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#BABED8","font-style":"italic"}},"form"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#BABED8","font-style":"italic"}},"formEl"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#82AAFF"}},"ElMessage"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        message"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"提交的表单内容："),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"+"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"JSON"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"stringify"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#BABED8"}},"form"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        type"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"success"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        duration"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"3500")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1),z=s("h2",{id:"行内表单",tabindex:"-1"},[l("行内表单 "),s("a",{class:"header-anchor",href:"#行内表单","aria-label":'Permalink to "行内表单"'},"​")],-1),J=s("p",null,[l("通过"),s("code",null,"inline"),l("属性，你可以用该组件来生成搜索栏，因为搜索栏本质上也是一个表单。")],-1),V=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"liv-data-form")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},"inline")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},":fields"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"fields"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},"@search"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"handleSubmit"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},"@add"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"handleAdd"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"ElMessage"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"element-plus"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," fields "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," ["),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"prop"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"no"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"事件编号"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldType"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"input"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," handleSubmit "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#BABED8","font-style":"italic"}},"form"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#BABED8","font-style":"italic"}},"formEl"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#82AAFF"}},"ElMessage"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        message"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"搜索的表单内容："),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"+"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"JSON"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"stringify"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#BABED8"}},"form"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        type"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"success"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        duration"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"3500")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," handleAdd "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#82AAFF"}},"ElMessage"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        message"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"点击了新增按钮"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        type"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"success"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1),q=s("h2",{id:"设置默认值",tabindex:"-1"},[l("设置默认值 "),s("a",{class:"header-anchor",href:"#设置默认值","aria-label":'Permalink to "设置默认值"'},"​")],-1),I=s("p",null,[l("在某些业务场景，例如修改详情功能，表单可能需要设置默认值，并且某些字段仅作为修改接口的参数，并不需要渲染在页面上。你可以通过"),s("code",null,"defaultValue"),l("属性来设置表单的默认值，并且不设置"),s("code",null,"fieldType"),l("字段实现把相关字段放在表单数据中，但是不进行渲染。")],-1),L=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"liv-data-form"),s("span",{style:{color:"#89DDFF"}}," ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},":fields"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"fields"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},":default-value"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"defaultValue"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},"@submit"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"handleSubmit"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"ref"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"onMounted"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"ElMessage"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"element-plus"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," defaultValue "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#BABED8"}},"("),s("span",{style:{color:"#89DDFF"}},"{}"),s("span",{style:{color:"#BABED8"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," fields "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," ["),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"prop"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"id"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"事件ID"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"prop"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"no"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"事件编号"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldType"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"input"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"prop"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"status"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"事件状态"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldType"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"select"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldData"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," ["),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"待处理"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"value"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"0"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"待评价"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"value"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"1"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"已办结"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"value"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"2"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"prop"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"location"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"开启定位"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldType"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"switch"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"prop"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"imageUrl"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"事件图片"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldType"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"image"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"onMounted"),s("span",{style:{color:"#BABED8"}},"("),s("span",{style:{color:"#C792EA"}},"async"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#676E95","font-style":"italic"}},"// 模拟加载详情数据")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#82AAFF"}},"setTimeout"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#BABED8"}},"defaultValue"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#BABED8"}},"value"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"            id"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"111"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"            no"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"123456789"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"            status"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"1"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"            location"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#FF9CAC"}},"true"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"            imageUrl"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"/ruralLivingEn/202310/d5ca2af7-dad1-4bb4-919a-6767da06eb0e.jpg,/ruralLivingEn/202310/62516435-5d3d-4bba-9310-1f3e9bde357c.jpg"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"},"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"1000"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," handleSubmit "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#BABED8","font-style":"italic"}},"form"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#BABED8","font-style":"italic"}},"formEl"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#82AAFF"}},"ElMessage"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        message"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"提交的表单内容："),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"+"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"JSON"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"stringify"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#BABED8"}},"form"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        type"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"success"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        duration"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"3500")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1),j=d("",2),R=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"liv-data-form"),s("span",{style:{color:"#89DDFF"}}," ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},":fields"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"fields"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    "),s("span",{style:{color:"#C792EA"}},"@submit"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"handleSubmit"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"ref"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"onMounted"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"ElMessage"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"element-plus"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," fields "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," ["),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"prop"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"no"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"事件编号"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldType"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"input"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"placeholder"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"自定义提示"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"maxlength"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#F78C6C"}},"5")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"prop"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"status"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"事件状态"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldType"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"select"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldData"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," ["),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"待处理"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"value"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"0"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"待评价"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"value"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"1"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"disabled"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#FF9CAC"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"已办结"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#F07178"}},"value"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"2"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"prop"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"location"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"开启定位"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldType"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"switch"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"inlinePrompt"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#FF9CAC"}},"true"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"activeText"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"完整展示多个内容"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"inactiveText"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"多个内容"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"},{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"prop"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"imageUrl"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"label"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"事件图片"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"fieldType"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"image"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"listType"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"picture"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#F07178"}},"limit"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#F78C6C"}},"1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}},"]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," handleSubmit "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#BABED8","font-style":"italic"}},"form"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#BABED8","font-style":"italic"}},"formEl"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#82AAFF"}},"ElMessage"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        message"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"提交的表单内容："),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"+"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"JSON"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"stringify"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#BABED8"}},"form"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        type"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"success"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        duration"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"3500")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1),$=d("",8),W=JSON.parse('{"title":"Data Form 数据表单","description":"","frontmatter":{},"headers":[],"relativePath":"Liv-UI/data-form.md","filePath":"Liv-UI/data-form.md","lastUpdated":1698204538000}'),G={name:"Liv-UI/data-form.md"},X=Object.assign(G,{setup(i){return(e,p)=>{const o=F("demo");return y(),f("div",null,[T,k,S,a(o,{customClass:"",sourceCode:`<template>
  <liv-data-form :fields="fields"/>
</template>

<script lang="ts" setup>
const fields = [{
  prop: 'no',
  label: '事件编号',
  fieldType: 'input'
},{
  prop: 'status',
  label: '事件状态',
  fieldType: 'select',
  fieldData: [{
    label: '待处理',
    value: '0'
  },{
    label: '待评价',
    value: '1'
  },{
    label: '已办结',
    value: '2'
  }]
},{
  prop: 'location',
  label: '开启定位',
  fieldType: 'switch'
},{
  prop: 'imageUrl',
  label: '事件图片',
  fieldType: 'image'
}]
<\/script>
`},{highlight:t(()=>[x]),default:t(()=>[a(h)]),_:1}),N,M,a(o,{customClass:"",sourceCode:`<template>
  <liv-data-form 
    :fields="fields" 
    @submit="handleSubmit" 
    @reset="(form, formEl) => formEl.resetFields()"
    @back="handleBack"/>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus';

const fields = [{
  prop: 'no',
  label: '事件编号',
  fieldType: 'input'
},{
  prop: 'status',
  label: '事件状态',
  fieldType: 'select',
  fieldData: [{
    label: '待处理',
    value: '0'
  },{
    label: '待评价',
    value: '1'
  },{
    label: '已办结',
    value: '2'
  }]
},{
  prop: 'location',
  label: '开启定位',
  fieldType: 'switch'
},{
  prop: 'imageUrl',
  label: '事件图片',
  fieldType: 'image'
}]

const handleSubmit = (form, formEl) => {
    ElMessage({
        message: '提交的表单内容：' + JSON.stringify(form),
        type: 'success',
        duration: 3500
    })
}

const handleBack = () => {
    ElMessage({
        message: '点击了返回按钮',
        type: 'success'
    })
}
<\/script>
`},{highlight:t(()=>[w]),default:t(()=>[a(C)]),_:1}),U,P,a(o,{customClass:"",sourceCode:`<template>
  <liv-data-form 
    :fields="fields" 
    @submit="handleSubmit"
    :buttons="buttons"/>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus';

const fields = [{
  prop: 'no',
  label: '事件编号',
  fieldType: 'input'
},{
  prop: 'status',
  label: '事件状态',
  fieldType: 'select',
  fieldData: [{
    label: '待处理',
    value: '0'
  },{
    label: '待评价',
    value: '1'
  },{
    label: '已办结',
    value: '2'
  }]
},{
  prop: 'location',
  label: '开启定位',
  fieldType: 'switch'
},{
  prop: 'imageUrl',
  label: '事件图片',
  fieldType: 'image'
}]

const buttons = [{
    name: '暂存',
    type: 'warning',
    onClick: () => {
      ElMessage({
        message: '点击了暂存按钮',
        type: 'warning'
      })
    }
},{
    name: '清空',
    type: 'danger',
    onClick: () => {
      ElMessage({
        message: '点击了清空按钮',
        type: 'error'
      })
    }
}]

const handleSubmit = (form, formEl) => {
    ElMessage({
        message: '提交的表单内容：' + JSON.stringify(form),
        type: 'success',
        duration: 3500
    })
}
<\/script>
`},{highlight:t(()=>[O]),default:t(()=>[a(b)]),_:1}),z,J,a(o,{customClass:"",sourceCode:`<template>
  <liv-data-form
    inline
    :fields="fields" 
    @search="handleSubmit"
    @add="handleAdd"/>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus';

const fields = [{
  prop: 'no',
  label: '事件编号',
  fieldType: 'input'
}]

const handleSubmit = (form, formEl) => {
    ElMessage({
        message: '搜索的表单内容：' + JSON.stringify(form),
        type: 'success',
        duration: 3500
    })
}

const handleAdd = () => {
      ElMessage({
        message: '点击了新增按钮',
        type: 'success'
      })
}
<\/script>
`},{highlight:t(()=>[V]),default:t(()=>[a(g)]),_:1}),q,I,a(o,{customClass:"",sourceCode:`<template>
  <liv-data-form 
    :fields="fields"
    :default-value="defaultValue"
    @submit="handleSubmit"/>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus';

const defaultValue = ref({})

const fields = [{
  prop: 'id',
  label: '事件ID',
},{
  prop: 'no',
  label: '事件编号',
  fieldType: 'input'
},{
  prop: 'status',
  label: '事件状态',
  fieldType: 'select',
  fieldData: [{
    label: '待处理',
    value: '0'
  },{
    label: '待评价',
    value: '1'
  },{
    label: '已办结',
    value: '2'
  }]
},{
  prop: 'location',
  label: '开启定位',
  fieldType: 'switch'
},{
  prop: 'imageUrl',
  label: '事件图片',
  fieldType: 'image'
}]

onMounted(async () => {
    // 模拟加载详情数据
    setTimeout(() => {
        defaultValue.value = {
            id: '111',
            no: '123456789',
            status: '1',
            location: true,
            imageUrl: '/ruralLivingEn/202310/d5ca2af7-dad1-4bb4-919a-6767da06eb0e.jpg,/ruralLivingEn/202310/62516435-5d3d-4bba-9310-1f3e9bde357c.jpg'
        }
    }, 1000)
})

const handleSubmit = (form, formEl) => {
    ElMessage({
        message: '提交的表单内容：' + JSON.stringify(form),
        type: 'success',
        duration: 3500
    })
}
<\/script>
`},{highlight:t(()=>[L]),default:t(()=>[a(_)]),_:1}),j,a(o,{customClass:"",sourceCode:`<template>
  <liv-data-form 
    :fields="fields"
    @submit="handleSubmit"/>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus';

const fields = [{
  prop: 'no',
  label: '事件编号',
  fieldType: 'input',
  placeholder: '自定义提示',
  maxlength: 5
},{
  prop: 'status',
  label: '事件状态',
  fieldType: 'select',
  fieldData: [{
    label: '待处理',
    value: '0'
  },{
    label: '待评价',
    value: '1',
    disabled: true
  },{
    label: '已办结',
    value: '2'
  }]
},{
  prop: 'location',
  label: '开启定位',
  fieldType: 'switch',
  inlinePrompt: true,
  activeText: "完整展示多个内容",
  inactiveText: "多个内容"
},{
  prop: 'imageUrl',
  label: '事件图片',
  fieldType: 'image',
  listType: 'picture',
  limit: 1
}]

const handleSubmit = (form, formEl) => {
    ElMessage({
        message: '提交的表单内容：' + JSON.stringify(form),
        type: 'success',
        duration: 3500
    })
}
<\/script>
`},{highlight:t(()=>[R]),default:t(()=>[a(v)]),_:1}),$])}}});export{W as __pageData,X as default};
