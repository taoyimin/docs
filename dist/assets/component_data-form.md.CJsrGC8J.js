import{b as B,d as p,q as F,r as x,v as T,s as w,t as I,u as _,f as S,h as P,w as R}from"./chunks/theme.C9jPID2_.js";import"./chunks/base.DP2rzg_V.js";/* empty css                               *//* empty css                      *//* empty css                         *//* empty css                     *//* empty css                              *//* empty css                      *//* empty css                   *//* empty css                        *//* empty css                     *//* empty css                         *//* empty css                      *//* empty css                            *//* empty css                            *//* empty css                      */import"./chunks/select.DP2rzg_V.js";/* empty css                     *//* empty css                        *//* empty css                           */import"./chunks/grid-cascader.l0sNRNKZ.js";/* empty css                         *//* empty css                       *//* empty css                     *//* empty css                      *//* empty css                         *//* empty css                    *//* empty css                     *//* empty css                       */import{d as o,p as d,o as g,b as c,c as b,G as k,_ as v,v as M,w as l,j as i,a as s,B as f,b2 as D}from"./chunks/framework.Cv9N_OZb.js";/* empty css                      *//* empty css                     *//* empty css                         *//* empty css                         */const N=o({__name:"data-form.md.demo.9c3bede2",setup(y){const E=d({input:"",textarea:"",phone:"",idcard:"",ciphertext:"张*",cipherPhone:"173****8888",cipherIdcard:"4209**********6415",select:"",cascader:"",radio:"",checkbox:"",date:"",startDate:"",endDate:"",time:"",startTime:"",endTime:"",datetime:"",startDatetime:"",endDatetime:"",switch:!0,number:0,min:0,max:0,rate:0,color:"",image:"",audio:"",video:"",file:"",dict:"",grid:"",longitude:null,latitude:null,address:"",verify:"",richText:""}),a=[{prop:"input",label:"输入框",fieldType:"input",prefix:"头部",suffix:"尾部",prepend:"前置",append:"后置"},{prop:"textarea",label:"文本域",fieldType:"textarea"},{prop:"phone",label:"手机号",fieldType:"phone"},{prop:"idcard",label:"身份证",fieldType:"idcard"},{prop:"ciphertext",label:"加密文本",fieldType:"ciphertext",decrypt:(n,h)=>B.post("/api/decrypt/name",{...n,...h}).then(t=>t.data)},{prop:"cipherPhone",label:"加密手机号",fieldType:"cipherPhone",decrypt:(n,h)=>B.post("/api/decrypt/phone",{...n,...h}).then(t=>t.data)},{prop:"cipherIdcard",label:"加密身份证",fieldType:"cipherIdcard",decrypt:(n,h)=>B.post("/api/decrypt/idcard",{...n,...h}).then(t=>t.data)},{prop:"select",label:"选择器",fieldType:"select",data:[{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"}]},{prop:"cascader",label:"级联选择器",fieldType:"cascader",data:[{label:"选项1",value:"1",children:[{label:"子选项1-1",value:"1-1"},{label:"子选项1-2",value:"1-2"}]},{label:"选项2",value:"2",children:[{label:"子选项2-1",value:"2-1"},{label:"子选项2-2",value:"2-2"},{label:"子选项2-3",value:"2-3"}]},{label:"选项3",value:"3",children:[{label:"子选项3-1",value:"3-1"},{label:"子选项3-2",value:"3-2"}]}]},{prop:"radio",label:"单选框",fieldType:"radio",data:[{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"}]},{prop:"checkbox",label:"多选框",fieldType:"checkbox",data:[{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"}]},{prop:"date",label:"日期选择器",fieldType:"date"},{prop:["startDate","endDate"],label:"日期范围选择器",fieldType:"dateRange",valueFormat:"YYYY-MM-DD HH:mm:ss"},{prop:"time",label:"时间选择器",fieldType:"time"},{prop:["startTime","endTime"],label:"时间范围选择器",fieldType:"timeRange"},{prop:"datetime",label:"日期时间选择器",fieldType:"datetime"},{prop:["startDatetime","endDatetime"],label:"日期时间范围选择器",fieldType:"datetimeRange"},{prop:"switch",label:"开关",fieldType:"switch"},{prop:"number",label:"数字输入框",fieldType:"number"},{prop:["min","max"],label:"数字范围",fieldType:"numberRange"},{prop:"rate",label:"评分",fieldType:"rate"},{prop:"color",label:"颜色",fieldType:"color"},{prop:"image",label:"图片上传",fieldType:"image",limit:1,maxSize:1024*2,extensions:["jpg","png"]},{prop:"audio",label:"音频上传",fieldType:"audio"},{prop:"video",label:"视频上传",fieldType:"video"},{prop:"file",label:"文件上传",fieldType:"file"},{prop:"dict",label:"字典选择器",fieldType:"dict",dictType:"status"},{prop:"grid",label:"网格选择器",fieldType:"grid"},{prop:["longitude","latitude","address"],label:"地图选点",fieldType:"location"},{prop:"verify",label:"验证码",fieldType:"verify"},{prop:"richText",label:"富文本",fieldType:"richText"}];function e(n){p.success(`提交的表单内容：${JSON.stringify(n)}`)}return(n,h)=>{const t=F;return g(),c(t,{model:E.value,fields:a,onSubmit:e},null,8,["model"])}}}),V=o({__name:"data-form.md.demo.9c3bede0",setup(y){const E=d({no:"",status:""}),a=[{prop:"no",label:"事件编号",fieldType:"input"},{prop:"status",label:"事件状态",fieldType:"select",data:[{label:"待处理",value:"0"},{label:"待评价",value:"1"},{label:"已办结",value:"2"}]}];function e(m){return new Promise((u,A)=>{setTimeout(()=>{u("提交成功")},2e3)})}function n(m){p.success("点击了查询按钮")}function h(m,u){p.success("点击了重置按钮"),u==null||u.resetFields()}function t(m){p.success("点击了新增按钮")}function r(m){p.success("点击了批量删除按钮")}function C(m){p.success("点击了返回按钮")}return(m,u)=>{const A=F;return g(),b("div",null,[k(A,{model:E.value,fields:a,onSubmit:e,onSearch:n,onReset:h,onBack:C,onAdd:t,onBatchDelete:r},null,8,["model"])])}}}),$=v(V,[["__scopeId","data-v-a24f94d9"]]),U=o({__name:"data-form.md.demo.9c3bedde",setup(y){const E=d({no:"",status:""}),a=[{prop:"no",label:"事件编号",fieldType:"input"},{prop:"status",label:"事件状态",fieldType:"select",data:[{label:"待处理",value:"0"},{label:"待评价",value:"1"},{label:"已办结",value:"2"}]}],e=[{name:"暂存",type:"warning",onClick:h=>new Promise((t,r)=>{setTimeout(()=>{t("暂存成功")},2e3)})},{name:"清空",type:"danger",onClick:h=>{p.error("点击了清空按钮")}}];function n(h){p.success("点击了提交按钮")}return(h,t)=>{const r=F;return g(),c(r,{model:E.value,fields:a,buttons:e,onSubmit:n},null,8,["model"])}}}),q=o({__name:"data-form.md.demo.9c3beddc",setup(y){const E=d({no:"",status:""}),a=[{prop:"no",label:"事件编号",fieldType:"input",authority:"superAdmin"},{prop:"status",label:"事件状态",fieldType:"select",authority:["superAdmin","docAdmin"],data:[{label:"待处理",value:"0"},{label:"待评价",value:"1"},{label:"已办结",value:"2"}]}],e=[{name:"暂存",type:"warning",authority:"superAdmin",onClick:t=>{p.warning("点击了带superAdmin权限的暂存按钮")}},{name:"清空",type:"danger",authority:["superAdmin","docAdmin"],onClick:t=>{p.error("点击了带superAdmin或docAdmin权限的清空按钮")}}];function n(t){p.success("点击了带superAdmin权限的提交按钮")}function h(t){p.success("点击了带superAdmin或docAdmin权限的返回按钮")}return(t,r)=>{const C=F;return g(),c(C,{model:E.value,fields:a,buttons:e,"onSubmit(superAdmin)":n,"onBack(superAdmin|docAdmin)":h},null,8,["model"])}}}),O=o({__name:"data-form.md.demo.9c3bedda",setup(y){const E=d({id:"123",name:"张*",phone:"173****8888"}),a=[{prop:"id"},{prop:"name",label:"姓名",fieldType:"ciphertext",type:"blockPuzzle",decrypt:(h,t)=>B.post("/api/decrypt/name",{id:t.id,...h}).then(r=>r.data)},{prop:"phone",label:"手机号",fieldType:"ciphertext",type:"clickWord",decrypt:(h,t)=>B.post("/api/decrypt/phone",{id:t.id,...h}).then(r=>r.data)}];function e(h){p.success(`提交的表单内容：${JSON.stringify(h)}`)}function n(h,t){p.success("点击了重置按钮"),t==null||t.resetFields()}return(h,t)=>{const r=F;return g(),c(r,{model:E.value,fields:a,onSubmit:e,onReset:n},null,8,["model"])}}}),L=o({__name:"data-form.md.demo.9c3bedd8",setup(y){const E=d({no:""}),a=[{prop:"no",label:"事件编号",fieldType:"input"}];function e(t){p.success(`搜索的表单内容：${JSON.stringify(t)}`)}function n(t){p.success("点击了新增按钮")}function h(t){p.success("点击了批量删除按钮")}return(t,r)=>{const C=F;return g(),c(C,{model:E.value,fields:a,inline:"",onSearch:e,onAdd:n,onBatchDelete:h},null,8,["model"])}}}),z=o({__name:"data-form.md.demo.9c3bedd6",setup(y){const E=d({name:"",age:"",gender:"",address:"",phone:"",remark:""}),a=[[{prop:"name",label:"姓名",fieldType:"input"},{prop:"age",label:"年龄",fieldType:"input"},{prop:"gender",label:"性别",fieldType:"input"}],[{prop:"address",label:"家庭地址",fieldType:"input",span:16},{prop:"phone",label:"电话",fieldType:"input",span:8}],{prop:"remark",label:"详细描述",fieldType:"textarea"}];return(e,n)=>{const h=F;return g(),c(h,{model:E.value,fields:a},null,8,["model"])}}}),J=o({__name:"data-form.md.demo.9c3bedd4",setup(y){const E=d({id:"",no:"",status:"",addTime:"",imageUrl:""}),a=[{prop:"id",label:"事件ID"},{prop:"no",label:"事件编号",fieldType:"input"},{prop:"status",label:"事件状态",fieldType:"select",data:[{label:"待处理",value:"0"},{label:"待评价",value:"1"},{label:"已办结",value:"2"}]},{prop:"addTime",label:"上报时间",fieldType:"date"},{prop:"imageUrl",label:"事件图片",fieldType:"image"}];M(()=>{B.get("/api/event/detail?id=257eec9e-b752-4960-a019-945d6897d905").then(n=>{E.value=x(n.data,Object.keys(E.value))})});function e(n){p.success(`提交的表单内容：${JSON.stringify(n)}`)}return(n,h)=>{const t=F;return g(),c(t,{model:E.value,fields:a,onSubmit:e},null,8,["model"])}}}),Y=o({__name:"data-form.md.demo.9c3bedd2",setup(y){const E=d({no:"",formType:"status",status:"",type:""}),a=d([{prop:"no",label:"编号",fieldType:"input",placeholder:"试试输入disabled"},{prop:"formType",label:"表单类型",fieldType:"radio",data:[{label:"事件状态",value:"status"},{label:"事件类型",value:"type"}],watchEffect(h){this.disabled=h.no==="disabled"}},{prop:"status",label:"事件状态",fieldType:"radio",labelKey:"dictName",valueKey:"dictCode",data:B.get("/api/dict/list?dictType=status").then(h=>h.data),watchEffect(h){this.show=h.formType==="status",this.disabled=h.no==="disabled"}},{prop:"type",label:"事件类型",fieldType:"checkbox",labelKey:"dictName",valueKey:"dictCode",data:B.get("/api/dict/list?dictType=type").then(h=>h.data),watchEffect(h){this.show=h.formType==="type",this.disabled=h.no==="disabled"}}]),e=d([{name:"重置",type:"warning",onClick:h=>{p.success("点击了重置按钮")},watchEffect(h){this.show=h.formType==="type",this.disabled=h.no==="disabled"}},{name:"返回",onClick:h=>{p.success("点击了返回按钮")},watchEffect(h){this.show=h.formType==="status",this.disabled=h.no==="disabled"}}]);function n(h){p.success(`提交的表单内容：${JSON.stringify(h)}`)}return(h,t)=>{const r=F;return g(),c(r,{model:E.value,fields:a.value,buttons:e.value,onSubmit:n},null,8,["model","fields","buttons"])}}}),K=o({__name:"data-form.md.demo.eb41cdfe",setup(y){const E=d({no:"",status:"",time:""}),a=[{prop:"no",label:"事件编号",required:!0,fieldType:"input"},{prop:"status",label:"事件状态",required:!0,fieldType:"select",data:[{label:"待处理",value:"0"},{label:"待评价",value:"1"},{label:"已办结",value:"2"}]},{prop:"time",label:"上报时间",required:!0,fieldType:"date"}],e=[{name:"自定义校验按钮",type:"success",validate:!0,onClick:h=>{p.success("校验通过！")}},{name:"只校验事件状态",type:"success",onClick:(h,t)=>{t==null||t.validateField("status",r=>{r&&p.success("校验通过！")})}},{name:"清空校验结果",type:"warning",onClick:(h,t)=>{t==null||t.clearValidate()}}];function n(h){p.success("校验通过！")}return(h,t)=>{const r=F;return g(),b("div",null,[k(r,{model:E.value,fields:a,buttons:e,onSubmit:n},null,8,["model"])])}}}),j=v(K,[["__scopeId","data-v-afc6f909"]]),H=o({__name:"data-form.md.demo.eb41cdfc",setup(y){const E=d({name:"",age:"",phone:"",idcard:""}),a=[{prop:"name",label:"姓名",required:!0,fieldType:"input",rules:{validator:(n,h,t)=>{h?h.length<2?t(new Error("姓名必须大于等于2个字符")):h.length>4?t(new Error("姓名必须小于等于4个字符")):t():t(new Error("请输入姓名"))},trigger:["blur","change"]}},{prop:"age",label:"年龄",required:!0,fieldType:"input",rules:{validator:T,trigger:"blur"}},{prop:"idcard",label:"身份证",fieldType:"input",rules:{validator:w,trigger:"blur"}},{prop:"phone",label:"手机号",fieldType:"input",required:!0,rules:[{validator:T,trigger:"change"},{validator:I,trigger:"blur"}]}];function e(n){p.success("校验通过！")}return(n,h)=>{const t=F;return g(),c(t,{model:E.value,fields:a,onSubmit:e},null,8,["model"])}}}),W={class:"mention-container"},G=o({__name:"data-form.md.demo.eb41cdfa",setup(y){const E=d({no:"",status:"",person:"@"}),a=[{prop:"no",label:"事件编号",fieldType:"input"},{prop:"status",label:"事件状态",fieldType:"dict",dictType:"status"},{prop:"person",label:"处理人",fieldType:"slot"}],e=d([{label:"张三",value:"张三"},{label:"李四",value:"李四"},{label:"王五",value:"王五"},{label:"赵六",value:"赵六"}]);function n(t){p.success(`提交的表单内容：${JSON.stringify(t)}`)}function h(t){p.success("点击了指派按钮")}return(t,r)=>{const C=_,m=S,u=F;return g(),c(u,{model:E.value,fields:a,onSubmit:n},{person:l(()=>[i("div",W,[k(C,{modelValue:E.value.person,"onUpdate:modelValue":r[0]||(r[0]=A=>E.value.person=A),options:e.value,style:{width:"320px"},placeholder:"请输入"},null,8,["modelValue","options"]),k(m,{type:"success",onClick:h},{default:l(()=>r[1]||(r[1]=[s("指派")])),_:1})])]),_:1},8,["model"])}}}),Z=v(G,[["__scopeId","data-v-5785b740"]]),Q=o({__name:"data-form.md.demo.eb41cdf8",setup(y){const E=d({no:"",status:[],min:10,max:30,location:"",imageUrl:"",article:"",input:""}),a=[{prop:"no",label:"事件编号",fieldType:"input",placeholder:"自定义提示",maxlength:5},{prop:"status",label:"事件状态",fieldType:"select",multiple:!0,data:[{label:"待处理",value:"0"},{label:"待评价",value:"1",disabled:!0},{label:"已办结",value:"2"}]},{prop:["min","max"],label:"数字范围",fieldType:"numberRange",min:10,max:30},{prop:"location",label:"开启定位",fieldType:"switch",inlinePrompt:!0,activeText:"完整展示多个内容",inactiveText:"多个内容"},{prop:"imageUrl",label:"事件图片",fieldType:"image",listType:"picture",limit:1,tip:"最多上传一张图片"},{prop:"article",label:"文章内容",fieldType:"richText",editor:{defaultConfig:{placeholder:"自定义提示语",MENU_CONF:{uploadImage:{maxFileSize:1*1024*1024,onError(n,h,t){p.error(`${n.name} 上传出错：${h.message}`)}}}}}}];function e(n){p.success(`提交的表单内容：${JSON.stringify(n)}`)}return(n,h)=>{const t=P,r=R,C=F;return g(),c(C,{model:E.value,fields:a,onSubmit:e},{default:l(()=>[k(r,{prop:"input",label:"插槽输入框"},{default:l(()=>[k(t,{modelValue:E.value.input,"onUpdate:modelValue":h[0]||(h[0]=m=>E.value.input=m),placeholder:"请输入"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])}}}),X={tabindex:"0"},ii={tabindex:"0"},si={tabindex:"0"},ai={tabindex:"0"},$i=JSON.parse('{"title":"Data Form 数据表单","description":"","frontmatter":{},"headers":[],"relativePath":"component/data-form.md","filePath":"component/data-form.md","lastUpdated":1751010229000}'),li={name:"component/data-form.md"},Ui=Object.assign(li,{setup(y){return(E,a)=>{const e=f("demo"),n=f("el-button"),h=f("el-popover");return g(),b("div",null,[a[135]||(a[135]=D(`<h1 id="Data Form 数据表单" tabindex="-1">Data Form 数据表单 <a class="header-anchor" href="#Data Form 数据表单" aria-label="Permalink to &quot;Data Form 数据表单&quot;">​</a></h1><p>该组件用于快速生成数据表单，内部封装了表单渲染、表单验证、文件处理等逻辑，只需传入<a href="#属性">fields</a>和<a href="#属性">model</a>属性即可。</p><h2 id="全局配置" tabindex="-1">全局配置 <a class="header-anchor" href="#全局配置" aria-label="Permalink to &quot;全局配置&quot;">​</a></h2><p>在全局配置组件属性。</p><details class="details custom-block"><summary>DataForm组件属性配置</summary><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">provide</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DATA_FORM_KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  labelWidth: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;auto&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  labelPosition: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;right&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // others props...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div></details><h2 id="业务注入" tabindex="-1">业务注入 <a class="header-anchor" href="#业务注入" aria-label="Permalink to &quot;业务注入&quot;">​</a></h2><p>在全局注入权限校验和处理文件相关业务。</p><details class="details custom-block"><summary>注入权限校验业务</summary><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 假设当前登录用户拥有以下权限标识</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> authoritys</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;docAdmin&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">provide</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CHECK_AUTHORITY_KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">authority</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> authoritys.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(authority));</span></span></code></pre></div></details><details class="details custom-block"><summary>注入文件上传地址</summary><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">provide</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FILE_UPLOAD_URL_KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/api/file/upload&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div></details><details class="details custom-block"><summary>注入文件上传header</summary><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">provide</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FILE_UPLOAD_HEADER_KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Authorization: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VITE_AUTHORIZATION</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;Blade-Auth&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VITE_BLADE_AUTH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div></details><details class="details custom-block"><summary>注入文件上传data</summary><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">provide</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FILE_UPLOAD_DATA_KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  action: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;upload&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  rename: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  belongOrgId: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ruralLivingEnv&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  folder: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\${</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getFullYear</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">()</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}-\${</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getMonth</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  flag: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div></details><details class="details custom-block"><summary>注入处理文件上传response业务</summary><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">provide</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HANDLE_FILE_RESPONSE_KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.data.fileUrl;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div></details><details class="details custom-block"><summary>注入处理文件地址业务</summary><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">provide</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HANDLE_FILE_URLS_KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">urls</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    urls</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ?.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">split</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;,&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ?.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">        url</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          \`\${</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">meta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">env</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VITE_FILE_URL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/ruralLivingEnv/fileControll/downLoadFile?swfName=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">??</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div></details><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2>`,14)),k(e,{customClass:"",sourceCode:`<template>
  <liv-data-form :model="form" :fields="fields" @submit="handleSubmit" />
</template>

<script lang="ts" setup>
import axios from 'axios';
import { ref } from 'vue';
import type { DataFormFields } from 'liv-web';

interface FormData {
  input: string;
  textarea: string;
  phone: string;
  idcard: string;
  ciphertext: string;
  cipherPhone: string;
  cipherIdcard: string;
  select: string;
  cascader: string;
  radio: string;
  checkbox: string;
  date: string;
  startDate: string;
  endDate: string;
  time: string;
  startTime: string;
  endTime: string;
  datetime: string;
  startDatetime: string;
  endDatetime: string;
  switch: boolean;
  number: number;
  min: number;
  max: number;
  rate: number;
  color: string;
  image: string;
  audio: string;
  video: string;
  file: string;
  dict: string;
  grid: string;
  longitude: number | null;
  latitude: number | null;
  address: string;
  verify: string;
  richText: string;
}

const form = ref<FormData>({
  input: '',
  textarea: '',
  phone: '',
  idcard: '',
  ciphertext: '张*',
  cipherPhone: '173****8888',
  cipherIdcard: '4209**********6415',
  select: '',
  cascader: '',
  radio: '',
  checkbox: '',
  date: '',
  startDate: '',
  endDate: '',
  time: '',
  startTime: '',
  endTime: '',
  datetime: '',
  startDatetime: '',
  endDatetime: '',
  switch: true,
  number: 0,
  min: 0,
  max: 0,
  rate: 0,
  color: '',
  image: '',
  audio: '',
  video: '',
  file: '',
  dict: '',
  grid: '',
  longitude: null,
  latitude: null,
  address: '',
  verify: '',
  richText: '',
});

const fields: DataFormFields<FormData> = [
  {
    prop: 'input',
    label: '输入框',
    fieldType: 'input',
    prefix: '头部',
    suffix: '尾部',
    prepend: '前置',
    append: '后置',
  },
  {
    prop: 'textarea',
    label: '文本域',
    fieldType: 'textarea',
  },
  {
    prop: 'phone',
    label: '手机号',
    fieldType: 'phone',
  },
  {
    prop: 'idcard',
    label: '身份证',
    fieldType: 'idcard',
  },
  {
    prop: 'ciphertext',
    label: '加密文本',
    fieldType: 'ciphertext',
    decrypt: (params, form) =>
      axios.post('/api/decrypt/name', { ...params, ...form }).then(res => res.data),
  },
  {
    prop: 'cipherPhone',
    label: '加密手机号',
    fieldType: 'cipherPhone',
    decrypt: (params, form) =>
      axios.post('/api/decrypt/phone', { ...params, ...form }).then(res => res.data),
  },
  {
    prop: 'cipherIdcard',
    label: '加密身份证',
    fieldType: 'cipherIdcard',
    decrypt: (params, form) =>
      axios.post('/api/decrypt/idcard', { ...params, ...form }).then(res => res.data),
  },
  {
    prop: 'select',
    label: '选择器',
    fieldType: 'select',
    data: [
      {
        label: '选项1',
        value: '1',
      },
      {
        label: '选项2',
        value: '2',
      },
      {
        label: '选项3',
        value: '3',
      },
    ],
  },
  {
    prop: 'cascader',
    label: '级联选择器',
    fieldType: 'cascader',
    data: [
      {
        label: '选项1',
        value: '1',
        children: [
          {
            label: '子选项1-1',
            value: '1-1',
          },
          {
            label: '子选项1-2',
            value: '1-2',
          },
        ],
      },
      {
        label: '选项2',
        value: '2',
        children: [
          {
            label: '子选项2-1',
            value: '2-1',
          },
          {
            label: '子选项2-2',
            value: '2-2',
          },
          {
            label: '子选项2-3',
            value: '2-3',
          },
        ],
      },
      {
        label: '选项3',
        value: '3',
        children: [
          {
            label: '子选项3-1',
            value: '3-1',
          },
          {
            label: '子选项3-2',
            value: '3-2',
          },
        ],
      },
    ],
  },
  {
    prop: 'radio',
    label: '单选框',
    fieldType: 'radio',
    data: [
      {
        label: '选项1',
        value: '1',
      },
      {
        label: '选项2',
        value: '2',
      },
      {
        label: '选项3',
        value: '3',
      },
    ],
  },
  {
    prop: 'checkbox',
    label: '多选框',
    fieldType: 'checkbox',
    data: [
      {
        label: '选项1',
        value: '1',
      },
      {
        label: '选项2',
        value: '2',
      },
      {
        label: '选项3',
        value: '3',
      },
    ],
  },
  {
    prop: 'date',
    label: '日期选择器',
    fieldType: 'date',
  },
  {
    prop: ['startDate', 'endDate'],
    label: '日期范围选择器',
    fieldType: 'dateRange',
    // 如果需要时分秒，可以传入valueFormat属性，开始时间默认00:00:00，结束时间默认23:59:59
    valueFormat: 'YYYY-MM-DD HH:mm:ss',
  },
  {
    prop: 'time',
    label: '时间选择器',
    fieldType: 'time',
  },
  {
    prop: ['startTime', 'endTime'],
    label: '时间范围选择器',
    fieldType: 'timeRange',
  },
  {
    prop: 'datetime',
    label: '日期时间选择器',
    fieldType: 'datetime',
  },
  {
    prop: ['startDatetime', 'endDatetime'],
    label: '日期时间范围选择器',
    fieldType: 'datetimeRange',
  },
  {
    prop: 'switch',
    label: '开关',
    fieldType: 'switch',
  },
  {
    prop: 'number',
    label: '数字输入框',
    fieldType: 'number',
  },
  {
    prop: ['min', 'max'],
    label: '数字范围',
    fieldType: 'numberRange',
  },
  {
    prop: 'rate',
    label: '评分',
    fieldType: 'rate',
  },
  {
    prop: 'color',
    label: '颜色',
    fieldType: 'color',
  },
  {
    prop: 'image',
    label: '图片上传',
    fieldType: 'image',
    limit: 1,
    maxSize: 1024 * 2,
    extensions: ['jpg', 'png'],
  },
  {
    prop: 'audio',
    label: '音频上传',
    fieldType: 'audio',
  },
  {
    prop: 'video',
    label: '视频上传',
    fieldType: 'video',
  },
  {
    prop: 'file',
    label: '文件上传',
    fieldType: 'file',
  },
  {
    prop: 'dict',
    label: '字典选择器',
    fieldType: 'dict',
    dictType: 'status',
  },
  {
    prop: 'grid',
    label: '网格选择器',
    fieldType: 'grid',
  },
  {
    prop: ['longitude', 'latitude', 'address'],
    label: '地图选点',
    fieldType: 'location',
  },
  {
    prop: 'verify',
    label: '验证码',
    fieldType: 'verify',
  },
  {
    prop: 'richText',
    label: '富文本',
    fieldType: 'richText',
  },
];

function handleSubmit(form: FormData) {
  ElMessage.success(\`提交的表单内容：\${JSON.stringify(form)}\`);
}
<\/script>
`,options:"{}"},{highlight:l(()=>a[0]||(a[0]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"liv-data-form"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"model"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"fields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"fields"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"submit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"handleSubmit"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ts"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," axios "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'axios'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ref } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," type"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { DataFormFields } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'liv-web'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"interface"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  input"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  textarea"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  phone"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  idcard"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  ciphertext"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  cipherPhone"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  cipherIdcard"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  select"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  cascader"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  radio"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  checkbox"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  date"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  startDate"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  endDate"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  time"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  startTime"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  endTime"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  datetime"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  startDatetime"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  endDatetime"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  switch"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," boolean"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  number"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," number"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  min"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," number"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  max"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," number"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  rate"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," number"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  color"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  image"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  audio"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  video"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  file"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  dict"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  grid"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  longitude"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," number"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," |"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," null"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  latitude"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," number"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," |"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," null"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  address"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  verify"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  richText"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  input: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  textarea: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  phone: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  idcard: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ciphertext: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'张*'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  cipherPhone: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'173****8888'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  cipherIdcard: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'4209**********6415'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  select: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  cascader: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  radio: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  checkbox: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  date: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  startDate: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  endDate: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  time: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  startTime: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  endTime: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  datetime: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  startDatetime: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  endDatetime: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  switch: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  number: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  min: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  max: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  rate: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  color: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  image: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  audio: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  video: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  file: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  dict: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  grid: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  longitude: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"null"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  latitude: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"null"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  address: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  verify: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  richText: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"});")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," fields"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," DataFormFields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'input'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'输入框'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'input'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prefix: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'头部'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    suffix: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'尾部'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prepend: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'前置'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    append: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'后置'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'textarea'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'文本域'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'textarea'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'phone'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'手机号'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'phone'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'idcard'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'身份证'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'idcard'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'ciphertext'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'加密文本'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'ciphertext'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    decrypt"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"params"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"form"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      axios."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"post"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/api/decrypt/name'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", { "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"..."),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"params, "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"..."),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form })."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"then"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"res"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," res.data),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'cipherPhone'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'加密手机号'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'cipherPhone'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    decrypt"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"params"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"form"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      axios."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"post"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/api/decrypt/phone'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", { "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"..."),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"params, "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"..."),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form })."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"then"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"res"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," res.data),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'cipherIdcard'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'加密身份证'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'cipherIdcard'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    decrypt"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"params"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"form"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      axios."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"post"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/api/decrypt/idcard'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", { "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"..."),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"params, "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"..."),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form })."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"then"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"res"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," res.data),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'select'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'选择器'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'select'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    data: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'选项1'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'1'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'选项2'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'2'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'选项3'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'3'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'cascader'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'级联选择器'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'cascader'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    data: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'选项1'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'1'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        children: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'子选项1-1'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'1-1'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'子选项1-2'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'1-2'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        ],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'选项2'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'2'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        children: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'子选项2-1'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'2-1'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'子选项2-2'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'2-2'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'子选项2-3'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'2-3'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        ],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'选项3'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'3'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        children: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'子选项3-1'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'3-1'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'子选项3-2'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'3-2'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        ],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'radio'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'单选框'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'radio'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    data: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'选项1'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'1'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'选项2'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'2'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'选项3'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'3'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'checkbox'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'多选框'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'checkbox'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    data: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'选项1'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'1'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'选项2'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'2'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'选项3'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'3'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'date'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'日期选择器'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'date'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: ["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'startDate'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'endDate'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'日期范围选择器'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'dateRange'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    // 如果需要时分秒，可以传入valueFormat属性，开始时间默认00:00:00，结束时间默认23:59:59")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    valueFormat: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'YYYY-MM-DD HH:mm:ss'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'time'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'时间选择器'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'time'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: ["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'startTime'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'endTime'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'时间范围选择器'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'timeRange'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'datetime'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'日期时间选择器'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'datetime'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: ["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'startDatetime'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'endDatetime'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'日期时间范围选择器'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'datetimeRange'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'switch'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'开关'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'switch'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'number'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'数字输入框'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'number'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: ["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'min'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'max'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'数字范围'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'numberRange'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'rate'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'评分'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'rate'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'color'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'颜色'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'color'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'image'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'图片上传'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'image'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    limit: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    maxSize: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1024"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," *"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 2"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    extensions: ["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'jpg'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'png'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'audio'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'音频上传'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'audio'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'video'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'视频上传'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'video'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'file'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'文件上传'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'file'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'dict'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'字典选择器'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'dict'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    dictType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'status'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'grid'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'网格选择器'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'grid'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: ["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'longitude'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'latitude'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'address'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'地图选点'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'location'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'verify'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'验证码'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'verify'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'richText'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'富文本'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'richText'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"];")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleSubmit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"success"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`提交的表单内容：${"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"JSON"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"stringify"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"("),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),default:l(()=>[k(N)]),_:1}),a[136]||(a[136]=i("div",{class:"warning custom-block"},[i("p",{class:"custom-block-title"},"注意"),i("p",null,[s("如果表单组件中使用了富文本编辑器，在不使用的时候需要及时销毁表单组件，例如在ElDialog组件中使用，推荐设置"),i("code",null,"destroy-on-close"),s("属性为"),i("code",null,"true"),s("。")])],-1)),a[137]||(a[137]=i("h2",{id:"操作按钮",tabindex:"-1"},[s("操作按钮 "),i("a",{class:"header-anchor",href:"#操作按钮","aria-label":'Permalink to "操作按钮"'},"​")],-1)),a[138]||(a[138]=i("p",null,"表单内部封装了提交、重置、返回、查询、新增、批量删除六个常用按钮，监听相应事件后自动渲染。",-1)),k(e,{customClass:"",sourceCode:`<template>
  <div>
    <liv-data-form
      :model="form"
      :fields="fields"
      @submit="handleSubmit"
      @search="handleSearch"
      @reset="handleReset"
      @back="handleBack"
      @add="handleAdd"
      @batchDelete="handleBatchDelete" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { FormInstance } from 'element-plus';
import type { DataFormFields } from 'liv-web';

interface FormData {
  no: string;
  status: string;
}

const form = ref<FormData>({
  no: '',
  status: '',
});

const fields: DataFormFields<FormData> = [
  {
    prop: 'no',
    label: '事件编号',
    fieldType: 'input',
  },
  {
    prop: 'status',
    label: '事件状态',
    fieldType: 'select',
    data: [
      {
        label: '待处理',
        value: '0',
      },
      {
        label: '待评价',
        value: '1',
      },
      {
        label: '已办结',
        value: '2',
      },
    ],
  },
];

function handleSubmit(_form: FormData) {
  // 如果返回的是Promise，则会自动给按钮加上Loading状态
  return new Promise((resolve, _reject) => {
    // 模拟耗时操作
    setTimeout(() => {
      // 如果Promise的结果是string，则会自动弹出提示信息
      resolve('提交成功');
    }, 2000);
  });
}

function handleSearch(_form: FormData) {
  ElMessage.success(\`点击了查询按钮\`);
}

function handleReset(_form: FormData, formRef: FormInstance | null) {
  ElMessage.success(\`点击了重置按钮\`);
  formRef?.resetFields();
}

function handleAdd(_form: FormData) {
  ElMessage.success(\`点击了新增按钮\`);
}

function handleBatchDelete(_form: FormData) {
  ElMessage.success(\`点击了批量删除按钮\`);
}

function handleBack(_form: FormData) {
  ElMessage.success(\`点击了返回按钮\`);
}
<\/script>

<style scoped lang="scss">
:deep(.liv-data-form__button .el-button) {
  padding: 0 16px;
}
</style>
`,options:"{}"},{highlight:l(()=>a[1]||(a[1]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"liv-data-form")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"model"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"fields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"fields"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"submit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"handleSubmit"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"search"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"handleSearch"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"reset"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"handleReset"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"back"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"handleBack"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"add"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"handleAdd"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"batchDelete"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"handleBatchDelete"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ts"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ref } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," type"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { FormInstance } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," type"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { DataFormFields } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'liv-web'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"interface"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  no"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  status"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  no: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  status: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"});")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," fields"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," DataFormFields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'no'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'事件编号'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'input'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'status'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'事件状态'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'select'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    data: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'待处理'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'0'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'待评价'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'1'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'已办结'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'2'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"];")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleSubmit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // 如果返回的是Promise，则会自动给按钮加上Loading状态")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  return"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," Promise"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"resolve"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_reject"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    // 模拟耗时操作")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    setTimeout"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(() "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      // 如果Promise的结果是string，则会自动弹出提示信息")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"      resolve"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'提交成功'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }, "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"2000"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleSearch"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"success"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`点击了查询按钮`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleReset"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"formRef"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormInstance"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," |"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," null"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"success"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`点击了重置按钮`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  formRef?."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"resetFields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleAdd"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"success"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`点击了新增按钮`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleBatchDelete"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"success"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`点击了批量删除按钮`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleBack"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"success"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`点击了返回按钮`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"style"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," scoped"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"scss"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":deep(.liv-data-form__button .el-button) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  padding: 0 16px;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"style"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),default:l(()=>[k($)]),_:1}),a[139]||(a[139]=i("h2",{id:"自定义按钮",tabindex:"-1"},[s("自定义按钮 "),i("a",{class:"header-anchor",href:"#自定义按钮","aria-label":'Permalink to "自定义按钮"'},"​")],-1)),a[140]||(a[140]=i("p",null,[s("除了使用组件内部封装好的按钮，你还可以通过"),i("code",null,"buttons"),s("属性传入自定义按钮，更多按钮属性请查看"),i("a",{href:"#dataformbutton"},"DataFormButton"),s("。")],-1)),k(e,{customClass:"",sourceCode:`<template>
  <liv-data-form :model="form" :fields="fields" :buttons="buttons" @submit="handleSubmit" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { DataFormFields, DataFormButtons } from 'liv-web';

interface FormData {
  no: string;
  status: string;
}

const form = ref<FormData>({
  no: '',
  status: '',
});

const fields: DataFormFields<FormData> = [
  {
    prop: 'no',
    label: '事件编号',
    fieldType: 'input',
  },
  {
    prop: 'status',
    label: '事件状态',
    fieldType: 'select',
    data: [
      {
        label: '待处理',
        value: '0',
      },
      {
        label: '待评价',
        value: '1',
      },
      {
        label: '已办结',
        value: '2',
      },
    ],
  },
];

const buttons: DataFormButtons<FormData> = [
  {
    name: '暂存',
    type: 'warning',
    onClick: (_form: FormData) => {
      // 如果返回的是Promise，则会自动给按钮加上Loading状态
      return new Promise((resolve, _reject) => {
        // 模拟耗时操作
        setTimeout(() => {
          // 如果Promise的结果是string，则会自动弹出提示信息
          resolve('暂存成功');
        }, 2000);
      });
    },
  },
  {
    name: '清空',
    type: 'danger',
    onClick: (_form: FormData) => {
      ElMessage.error('点击了清空按钮');
    },
  },
];

function handleSubmit(_form: FormData) {
  ElMessage.success(\`点击了提交按钮\`);
}
<\/script>
`,options:"{}"},{highlight:l(()=>a[2]||(a[2]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"liv-data-form"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"model"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"fields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"fields"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"buttons"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"buttons"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"submit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"handleSubmit"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ts"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ref } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," type"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { DataFormFields, DataFormButtons } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'liv-web'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"interface"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  no"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  status"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  no: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  status: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"});")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," fields"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," DataFormFields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'no'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'事件编号'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'input'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'status'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'事件状态'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'select'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    data: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'待处理'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'0'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'待评价'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'1'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'已办结'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'2'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"];")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," buttons"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," DataFormButtons"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    name: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'暂存'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    type: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'warning'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    onClick"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      // 如果返回的是Promise，则会自动给按钮加上Loading状态")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"      return"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," Promise"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"resolve"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_reject"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"        // 模拟耗时操作")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"        setTimeout"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(() "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"          // 如果Promise的结果是string，则会自动弹出提示信息")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"          resolve"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'暂存成功'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }, "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"2000"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    name: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'清空'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    type: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'danger'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    onClick"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"error"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'点击了清空按钮'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"];")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleSubmit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"success"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`点击了提交按钮`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),default:l(()=>[k(U)]),_:1}),a[141]||(a[141]=i("h2",{id:"权限校验",tabindex:"-1"},[s("权限校验 "),i("a",{class:"header-anchor",href:"#权限校验","aria-label":'Permalink to "权限校验"'},"​")],-1)),a[142]||(a[142]=i("p",null,[s("表单内部封装了权限校验逻辑，使用前需要在全局注入权限校验相关方法。内置按钮可以通过"),i("code",null,"()"),s("设置权限标识，多个权限标识用"),i("code",null,"|"),s("分隔。字段配置项和自定义按钮可以通过"),i("code",null,"authority"),s("属性设置权限标识。如果权限标识校验没有通过，则对应的内容不会被渲染。")],-1)),k(e,{customClass:"",sourceCode:`<template>
  <liv-data-form
    :model="form"
    :fields="fields"
    :buttons="buttons"
    @submit(superAdmin)="handleSubmit"
    @back(superAdmin|docAdmin)="handleBack" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { DataFormFields, DataFormButtons } from 'liv-web';

interface FormData {
  no: string;
  status: string;
}

const form = ref<FormData>({
  no: '',
  status: '',
});

const fields: DataFormFields<FormData> = [
  {
    prop: 'no',
    label: '事件编号',
    fieldType: 'input',
    // 没有权限的字段配置项不会渲染
    authority: 'superAdmin',
  },
  {
    prop: 'status',
    label: '事件状态',
    fieldType: 'select',
    // 多个权限只需拥有其一即可正常渲染
    authority: ['superAdmin', 'docAdmin'],
    data: [
      {
        label: '待处理',
        value: '0',
      },
      {
        label: '待评价',
        value: '1',
      },
      {
        label: '已办结',
        value: '2',
      },
    ],
  },
];

const buttons: DataFormButtons<FormData> = [
  {
    name: '暂存',
    type: 'warning',
    // 没有权限的自定义按钮不会渲染
    authority: 'superAdmin',
    onClick: (_form: FormData) => {
      ElMessage.warning('点击了带superAdmin权限的暂存按钮');
    },
  },
  {
    name: '清空',
    type: 'danger',
    // 多个权限只需拥有其一即可正常渲染
    authority: ['superAdmin', 'docAdmin'],
    onClick: (_form: FormData) => {
      ElMessage.error('点击了带superAdmin或docAdmin权限的清空按钮');
    },
  },
];

function handleSubmit(_form: FormData) {
  ElMessage.success(\`点击了带superAdmin权限的提交按钮\`);
}

function handleBack(_form: FormData) {
  ElMessage.success(\`点击了带superAdmin或docAdmin权限的返回按钮\`);
}
<\/script>
`,options:"{}"},{highlight:l(()=>a[3]||(a[3]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"liv-data-form")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"model"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"fields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"fields"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"buttons"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"buttons"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"submit(superAdmin)"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"handleSubmit"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"back(superAdmin|docAdmin)"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"handleBack"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ts"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ref } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," type"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { DataFormFields, DataFormButtons } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'liv-web'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"interface"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  no"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  status"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  no: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  status: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"});")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," fields"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," DataFormFields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'no'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'事件编号'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'input'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    // 没有权限的字段配置项不会渲染")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    authority: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'superAdmin'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'status'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'事件状态'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'select'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    // 多个权限只需拥有其一即可正常渲染")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    authority: ["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'superAdmin'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'docAdmin'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    data: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'待处理'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'0'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'待评价'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'1'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'已办结'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'2'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"];")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," buttons"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," DataFormButtons"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    name: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'暂存'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    type: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'warning'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    // 没有权限的自定义按钮不会渲染")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    authority: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'superAdmin'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    onClick"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"warning"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'点击了带superAdmin权限的暂存按钮'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    name: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'清空'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    type: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'danger'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    // 多个权限只需拥有其一即可正常渲染")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    authority: ["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'superAdmin'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'docAdmin'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    onClick"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"error"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'点击了带superAdmin或docAdmin权限的清空按钮'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"];")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleSubmit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"success"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`点击了带superAdmin权限的提交按钮`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleBack"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"success"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`点击了带superAdmin或docAdmin权限的返回按钮`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),default:l(()=>[k(q)]),_:1}),a[143]||(a[143]=i("h2",{id:"加密表单项",tabindex:"-1"},[s("加密表单项"),i("span",{class:"version-tag"},"2.1.0"),s(),i("a",{class:"header-anchor",href:"#加密表单项","aria-label":'Permalink to "加密表单项(v2.1.0)"'},"​")],-1)),a[144]||(a[144]=i("p",null,"组件提供了加密表单项对数据进行加密展示，加密表单项无法编辑，通过传入解密逻辑可以实现表单项解密后可编辑功能。",-1)),k(e,{customClass:"",sourceCode:`<template>
  <liv-data-form :model="form" :fields="fields" @submit="handleSubmit" @reset="handleReset" />
</template>

<script lang="ts" setup>
import axios from 'axios';
import { ref } from 'vue';
import type { FormInstance } from 'element-plus';
import type { DataFormFields } from 'liv-web';

interface FormData {
  id: string;
  name: string;
  phone: string;
}

const form = ref<FormData>({
  id: '123',
  name: '张*',
  phone: '173****8888',
});

const fields: DataFormFields<FormData> = [
  {
    prop: 'id',
  },
  {
    prop: 'name',
    label: '姓名',
    fieldType: 'ciphertext',
    // 滑块拼图
    type: 'blockPuzzle',
    decrypt: (params, form) =>
      axios.post('/api/decrypt/name', { id: form.id, ...params }).then(res => res.data),
  },
  {
    prop: 'phone',
    label: '手机号',
    fieldType: 'ciphertext',
    // 点击文字
    type: 'clickWord',
    decrypt: (params, form) =>
      axios.post('/api/decrypt/phone', { id: form.id, ...params }).then(res => res.data),
  },
];

function handleSubmit(form: FormData) {
  // 回调函数中的form表单数据会自动过滤掉未解密的字段
  ElMessage.success(\`提交的表单内容：\${JSON.stringify(form)}\`);
}

function handleReset(_form: FormData, formRef: FormInstance | null) {
  ElMessage.success(\`点击了重置按钮\`);
  formRef?.resetFields();
}
<\/script>
`,options:"{}"},{highlight:l(()=>a[4]||(a[4]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"liv-data-form"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"model"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"fields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"fields"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"submit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"handleSubmit"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"reset"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"handleReset"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ts"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," axios "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'axios'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ref } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," type"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { FormInstance } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," type"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { DataFormFields } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'liv-web'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"interface"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  id"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  name"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  phone"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  id: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'123'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  name: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'张*'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  phone: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'173****8888'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"});")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," fields"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," DataFormFields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'id'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'name'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'姓名'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'ciphertext'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    // 滑块拼图")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    type: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'blockPuzzle'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    decrypt"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"params"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"form"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      axios."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"post"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/api/decrypt/name'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", { id: form.id, "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"..."),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"params })."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"then"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"res"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," res.data),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'phone'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'手机号'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'ciphertext'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    // 点击文字")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    type: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'clickWord'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    decrypt"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"params"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"form"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      axios."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"post"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/api/decrypt/phone'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", { id: form.id, "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"..."),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"params })."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"then"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"res"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," res.data),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"];")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleSubmit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // 回调函数中的form表单数据会自动过滤掉未解密的字段")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"success"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`提交的表单内容：${"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"JSON"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"stringify"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"("),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleReset"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"formRef"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormInstance"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," |"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," null"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"success"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`点击了重置按钮`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  formRef?."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"resetFields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),default:l(()=>[k(O)]),_:1}),a[145]||(a[145]=D('<div class="tip custom-block"><p class="custom-block-title">提示</p><p>加密表单项功能内部基于<a href="./verify.html">Verify</a>组件实现，使用前需要在<a href="./verify.html#全局配置">全局配置</a>好验证码组件的相关属性。</p></div><h2 id="行内表单" tabindex="-1">行内表单 <a class="header-anchor" href="#行内表单" aria-label="Permalink to &quot;行内表单&quot;">​</a></h2><p>通过<code>inline</code>属性，你可以用该组件来生成搜索栏，因为搜索栏本质上也是一个表单。</p>',3)),k(e,{customClass:"",sourceCode:`<template>
  <liv-data-form
    :model="form"
    :fields="fields"
    inline
    @search="handleSearch"
    @add="handleAdd"
    @batchDelete="handleBatchDelete" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { DataFormFields } from 'liv-web';

interface FormData {
  no: string;
}

const form = ref<FormData>({
  no: '',
});

const fields: DataFormFields<FormData> = [
  {
    prop: 'no',
    label: '事件编号',
    fieldType: 'input',
  },
];

function handleSearch(form: FormData) {
  ElMessage.success(\`搜索的表单内容：\${JSON.stringify(form)}\`);
}

function handleAdd(_form: FormData) {
  ElMessage.success('点击了新增按钮');
}

function handleBatchDelete(_form: FormData) {
  ElMessage.success('点击了批量删除按钮');
}
<\/script>
`,options:"{}"},{highlight:l(()=>a[5]||(a[5]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"liv-data-form")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"model"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"fields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"fields"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    inline")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"search"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"handleSearch"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"add"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"handleAdd"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"batchDelete"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"handleBatchDelete"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ts"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ref } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," type"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { DataFormFields } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'liv-web'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"interface"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  no"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  no: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"});")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," fields"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," DataFormFields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'no'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'事件编号'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'input'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"];")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleSearch"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"success"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`搜索的表单内容：${"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"JSON"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"stringify"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"("),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleAdd"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"success"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'点击了新增按钮'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleBatchDelete"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"success"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'点击了批量删除按钮'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),default:l(()=>[k(L)]),_:1}),a[146]||(a[146]=i("h2",{id:"网格布局",tabindex:"-1"},[s("网格布局 "),i("a",{class:"header-anchor",href:"#网格布局","aria-label":'Permalink to "网格布局"'},"​")],-1)),a[147]||(a[147]=i("p",null,[s("传入二维数组形式的"),i("code",null,"fields"),s("可以生成网格布局的表单，默认平分宽度，可以通过"),i("code",null,"span"),s("属性控制每个表单项的宽度，"),i("code",null,"span"),s("为24表示占满整行。")],-1)),k(e,{customClass:"",sourceCode:`<template>
  <liv-data-form :model="form" :fields="fields" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { DataFormFields } from 'liv-web';

interface FormData {
  name: string;
  age: string;
  gender: string;
  address: string;
  phone: string;
  remark: string;
}

const form = ref<FormData>({
  name: '',
  age: '',
  gender: '',
  address: '',
  phone: '',
  remark: '',
});

const fields: DataFormFields<FormData> = [
  // 表单第一行，默认平分
  [
    {
      prop: 'name',
      label: '姓名',
      fieldType: 'input',
    },
    {
      prop: 'age',
      label: '年龄',
      fieldType: 'input',
    },
    {
      prop: 'gender',
      label: '性别',
      fieldType: 'input',
    },
  ],
  // 表单第二行，手动分配宽度
  [
    {
      prop: 'address',
      label: '家庭地址',
      fieldType: 'input',
      span: 16,
    },
    {
      prop: 'phone',
      label: '电话',
      fieldType: 'input',
      span: 8,
    },
  ],
  // 表单第三行，默认整行
  {
    prop: 'remark',
    label: '详细描述',
    fieldType: 'textarea',
  },
];
<\/script>
`,options:"{}"},{highlight:l(()=>a[6]||(a[6]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"liv-data-form"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"model"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"fields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"fields"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ts"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ref } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," type"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { DataFormFields } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'liv-web'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"interface"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  name"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  age"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  gender"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  address"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  phone"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  remark"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  name: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  age: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  gender: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  address: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  phone: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  remark: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"});")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," fields"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," DataFormFields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // 表单第一行，默认平分")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'name'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'姓名'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'input'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'age'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'年龄'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'input'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'gender'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'性别'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'input'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // 表单第二行，手动分配宽度")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'address'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'家庭地址'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'input'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      span: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"16"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'phone'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'电话'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'input'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      span: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"8"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // 表单第三行，默认整行")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'remark'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'详细描述'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'textarea'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"];")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),default:l(()=>[k(z)]),_:1}),a[148]||(a[148]=D('<div class="warning custom-block"><p class="custom-block-title">注意</p><p>如果是<a href="#行内表单">行内表单</a>，则网格布局不会生效。</p></div><h2 id="设置默认值" tabindex="-1">设置默认值 <a class="header-anchor" href="#设置默认值" aria-label="Permalink to &quot;设置默认值&quot;">​</a></h2><p>在某些业务场景，例如修改详情功能，表单可能需要设置默认值，并且某些字段仅作为修改接口的参数，并不需要渲染在页面上。你可以通过<code>model</code>属性来实现表单数据的双向绑定，并且不设置<code>fieldType</code>字段实现把相关字段放在表单数据中，但是不进行渲染。</p>',3)),k(e,{customClass:"",sourceCode:`<template>
  <liv-data-form :model="form" :fields="fields" @submit="handleSubmit" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import type { DataFormFields } from 'liv-web';
import { pick } from 'lodash-es';
import axios from 'axios';

interface FormData {
  id: string;
  no: string;
  status: string;
  addTime: string;
  imageUrl: string;
}

const form = ref<FormData>({
  id: '',
  no: '',
  status: '',
  addTime: '',
  imageUrl: '',
});

const fields: DataFormFields<FormData> = [
  {
    // 随表单一起提交，页面无需渲染
    prop: 'id',
    label: '事件ID',
  },
  {
    prop: 'no',
    label: '事件编号',
    fieldType: 'input',
  },
  {
    prop: 'status',
    label: '事件状态',
    fieldType: 'select',
    data: [
      {
        label: '待处理',
        value: '0',
      },
      {
        label: '待评价',
        value: '1',
      },
      {
        label: '已办结',
        value: '2',
      },
    ],
  },
  {
    prop: 'addTime',
    label: '上报时间',
    fieldType: 'date',
  },
  {
    prop: 'imageUrl',
    label: '事件图片',
    fieldType: 'image',
  },
];

onMounted(() => {
  axios.get('/api/event/detail?id=257eec9e-b752-4960-a019-945d6897d905').then(res => {
    form.value = pick(res.data, Object.keys(form.value)) as FormData;
  });
});

function handleSubmit(form: FormData) {
  ElMessage.success(\`提交的表单内容：\${JSON.stringify(form)}\`);
}
<\/script>
`,options:"{}"},{highlight:l(()=>a[7]||(a[7]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"liv-data-form"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"model"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"fields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"fields"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"submit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"handleSubmit"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ts"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ref, onMounted } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," type"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { DataFormFields } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'liv-web'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { pick } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'lodash-es'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," axios "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'axios'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"interface"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  id"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  no"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  status"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  addTime"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  imageUrl"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  id: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  no: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  status: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  addTime: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  imageUrl: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"});")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," fields"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," DataFormFields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    // 随表单一起提交，页面无需渲染")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'id'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'事件ID'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'no'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'事件编号'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'input'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'status'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'事件状态'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'select'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    data: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'待处理'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'0'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'待评价'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'1'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'已办结'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'2'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'addTime'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'上报时间'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'date'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'imageUrl'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'事件图片'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'image'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"];")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"onMounted"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(() "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  axios."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"get"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/api/event/detail?id=257eec9e-b752-4960-a019-945d6897d905'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"then"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"res"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    form.value "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," pick"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(res.data, Object."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"keys"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(form.value)) "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"as"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"});")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleSubmit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"success"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`提交的表单内容：${"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"JSON"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"stringify"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"("),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),default:l(()=>[k(J)]),_:1}),a[149]||(a[149]=i("h2",{id:"动态表单",tabindex:"-1"},[s("动态表单 "),i("a",{class:"header-anchor",href:"#动态表单","aria-label":'Permalink to "动态表单"'},"​")],-1)),a[150]||(a[150]=i("p",null,[s("可以通过字段配置项或自定义按钮的"),i("code",null,"watchEffect"),s("实现表单内容的动态切换，注意需要动态切换的"),i("code",null,"fields"),s("或"),i("code",null,"buttons"),s("必须是响应式数据。")],-1)),k(e,{customClass:"",sourceCode:`<template>
  <liv-data-form :model="form" :fields="fields" :buttons="buttons" @submit="handleSubmit" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { DataFormButtons, DataFormFields } from 'liv-web';
import axios from 'axios';

interface FormData {
  no: string;
  formType: 'status' | 'type';
  status: string;
  type: string;
}

const form = ref<FormData>({
  no: '',
  formType: 'status',
  status: '',
  type: '',
});

// 必须是响应式数据
const fields = ref<DataFormFields<FormData>>([
  {
    prop: 'no',
    label: '编号',
    fieldType: 'input',
    placeholder: '试试输入disabled',
  },
  {
    prop: 'formType',
    label: '表单类型',
    fieldType: 'radio',
    data: [
      {
        label: '事件状态',
        value: 'status',
      },
      {
        label: '事件类型',
        value: 'type',
      },
    ],
    // 不能用箭头函数，否则this指向不对
    watchEffect(form) {
      this.disabled = form.no === 'disabled';
    },
  },
  {
    prop: 'status',
    label: '事件状态',
    fieldType: 'radio',
    labelKey: 'dictName',
    valueKey: 'dictCode',
    data: axios.get('/api/dict/list?dictType=status').then(res => res.data),
    // 不能用箭头函数，否则this指向不对
    watchEffect(form) {
      this.show = form.formType === 'status';
      this.disabled = form.no === 'disabled';
    },
  },
  {
    prop: 'type',
    label: '事件类型',
    fieldType: 'checkbox',
    labelKey: 'dictName',
    valueKey: 'dictCode',
    data: axios.get('/api/dict/list?dictType=type').then(res => res.data),
    // 不能用箭头函数，否则this指向不对
    watchEffect(form) {
      this.show = form.formType === 'type';
      this.disabled = form.no === 'disabled';
    },
  },
]);

// 必须是响应式数据
const buttons = ref<DataFormButtons<FormData>>([
  {
    name: '重置',
    type: 'warning',
    onClick: (_form: FormData) => {
      ElMessage.success('点击了重置按钮');
    },
    // 不能用箭头函数，否则this指向不对
    watchEffect(form) {
      this.show = form.formType === 'type';
      this.disabled = form.no === 'disabled';
    },
  },
  {
    name: '返回',
    onClick: (_form: FormData) => {
      ElMessage.success('点击了返回按钮');
    },
    // 不能用箭头函数，否则this指向不对
    watchEffect(form) {
      this.show = form.formType === 'status';
      this.disabled = form.no === 'disabled';
    },
  },
]);

function handleSubmit(form: FormData) {
  ElMessage.success(\`提交的表单内容：\${JSON.stringify(form)}\`);
}
<\/script>
`,options:"{}"},{highlight:l(()=>a[8]||(a[8]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"liv-data-form"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"model"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"fields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"fields"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"buttons"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"buttons"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"submit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"handleSubmit"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ts"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ref } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," type"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { DataFormButtons, DataFormFields } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'liv-web'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," axios "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'axios'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"interface"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  no"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  formType"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'status'"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," |"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'type'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  status"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  type"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  no: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  formType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'status'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  status: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  type: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"});")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 必须是响应式数据")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," fields"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"DataFormFields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">>([")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'no'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'编号'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'input'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    placeholder: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'试试输入disabled'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'formType'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'表单类型'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'radio'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    data: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'事件状态'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'status'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'事件类型'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'type'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    // 不能用箭头函数，否则this指向不对")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    watchEffect"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"form"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"      this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".disabled "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," form.no "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"==="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'disabled'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'status'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'事件状态'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'radio'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    labelKey: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'dictName'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    valueKey: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'dictCode'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    data: axios."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"get"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/api/dict/list?dictType=status'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"then"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"res"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," res.data),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    // 不能用箭头函数，否则this指向不对")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    watchEffect"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"form"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"      this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".show "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," form.formType "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"==="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'status'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"      this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".disabled "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," form.no "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"==="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'disabled'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'type'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'事件类型'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'checkbox'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    labelKey: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'dictName'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    valueKey: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'dictCode'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    data: axios."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"get"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'/api/dict/list?dictType=type'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"then"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"res"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," res.data),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    // 不能用箭头函数，否则this指向不对")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    watchEffect"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"form"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"      this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".show "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," form.formType "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"==="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'type'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"      this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".disabled "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," form.no "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"==="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'disabled'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]);")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 必须是响应式数据")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," buttons"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"DataFormButtons"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">>([")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    name: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'重置'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    type: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'warning'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    onClick"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"success"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'点击了重置按钮'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    // 不能用箭头函数，否则this指向不对")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    watchEffect"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"form"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"      this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".show "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," form.formType "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"==="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'type'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"      this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".disabled "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," form.no "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"==="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'disabled'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    name: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'返回'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    onClick"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"success"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'点击了返回按钮'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    // 不能用箭头函数，否则this指向不对")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    watchEffect"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"form"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"      this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".show "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," form.formType "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"==="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'status'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"      this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".disabled "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," form.no "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"==="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'disabled'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]);")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleSubmit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"success"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`提交的表单内容：${"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"JSON"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"stringify"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"("),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),default:l(()=>[k(Y)]),_:1}),a[151]||(a[151]=D('<h2 id="表单校验" tabindex="-1">表单校验 <a class="header-anchor" href="#表单校验" aria-label="Permalink to &quot;表单校验&quot;">​</a></h2><p>表单内部封装了校验逻辑，只有<code>required</code>属性为<code>true</code>的表单项才会自动生成校验规则。你可以通过给<code>buttons</code>属性中的按钮设置<code>validate</code>属性来开启表单校验，表单内置的提交和查询按钮<code>validate</code>属性默认为true。</p>',2)),k(e,{customClass:"",sourceCode:`<template>
  <div>
    <liv-data-form :model="form" :fields="fields" :buttons="buttons" @submit="handleSubmit" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { DataFormFields, DataFormButtons } from 'liv-web';
import { FormInstance } from 'element-plus';

interface FormData {
  no: string;
  status: string;
  time: string;
}

const form = ref<FormData>({
  no: '',
  status: '',
  time: '',
});

const fields: DataFormFields<FormData> = [
  {
    prop: 'no',
    label: '事件编号',
    required: true,
    fieldType: 'input',
  },
  {
    prop: 'status',
    label: '事件状态',
    required: true,
    fieldType: 'select',
    data: [
      {
        label: '待处理',
        value: '0',
      },
      {
        label: '待评价',
        value: '1',
      },
      {
        label: '已办结',
        value: '2',
      },
    ],
  },
  {
    prop: 'time',
    label: '上报时间',
    required: true,
    fieldType: 'date',
  },
];

const buttons: DataFormButtons<FormData> = [
  {
    name: '自定义校验按钮',
    type: 'success',
    // 开启自动校验
    validate: true,
    onClick: (_form: FormData) => {
      ElMessage.success('校验通过！');
    },
  },
  {
    name: '只校验事件状态',
    type: 'success',
    onClick: (_form: FormData, formEl: FormInstance | null) => {
      // 手动实现校验逻辑
      formEl?.validateField('status', isValid => {
        if (isValid) {
          ElMessage.success('校验通过！');
        }
      });
    },
  },
  {
    name: '清空校验结果',
    type: 'warning',
    onClick: (_form: FormData, formEl: FormInstance | null) => {
      formEl?.clearValidate();
    },
  },
];

function handleSubmit(_form: FormData) {
  // 内置的提交按钮默认自动校验
  ElMessage.success('校验通过！');
}
<\/script>

<style scoped lang="scss">
:deep(.liv-data-form__button .el-button) {
  padding: 0 16px;
}
</style>
`,options:"{}"},{highlight:l(()=>a[9]||(a[9]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"liv-data-form"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"model"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"fields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"fields"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"buttons"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"buttons"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"submit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"handleSubmit"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ts"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ref } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," type"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { DataFormFields, DataFormButtons } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'liv-web'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { FormInstance } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"interface"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  no"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  status"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  time"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  no: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  status: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  time: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"});")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," fields"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," DataFormFields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'no'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'事件编号'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    required: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'input'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'status'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'事件状态'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    required: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'select'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    data: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'待处理'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'0'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'待评价'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'1'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'已办结'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'2'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'time'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'上报时间'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    required: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'date'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"];")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," buttons"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," DataFormButtons"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    name: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'自定义校验按钮'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    type: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'success'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    // 开启自动校验")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    validate: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    onClick"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"success"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'校验通过！'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    name: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'只校验事件状态'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    type: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'success'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    onClick"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"formEl"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormInstance"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," |"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," null"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      // 手动实现校验逻辑")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      formEl?."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"validateField"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'status'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"isValid"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," =>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (isValid) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"success"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'校验通过！'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      });")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    name: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'清空校验结果'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    type: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'warning'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    onClick"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"formEl"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormInstance"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," |"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," null"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      formEl?."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"clearValidate"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"];")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleSubmit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // 内置的提交按钮默认自动校验")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"success"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'校验通过！'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"style"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," scoped"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"scss"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":deep(.liv-data-form__button .el-button) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  padding: 0 16px;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"style"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),default:l(()=>[k(j)]),_:1}),a[152]||(a[152]=i("h2",{id:"自定义校验规则",tabindex:"-1"},[s("自定义校验规则 "),i("a",{class:"header-anchor",href:"#自定义校验规则","aria-label":'Permalink to "自定义校验规则"'},"​")],-1)),a[153]||(a[153]=i("p",null,[s("你可以通过"),i("code",null,"rules"),s("属性给每个表单项传入自定义校验规则，"),i("code",null,"rules"),s("支持传入数组，并按顺序同时校验多个自定义规则。框架提供了一些常用"),i("a",{href:"/doc/guide/basic/validate-rule.html"},"校验规则"),s("可以直接使用。")],-1)),k(e,{customClass:"",sourceCode:`<template>
  <liv-data-form :model="form" :fields="fields" @submit="handleSubmit" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { validateNumber, validatePhone, validateIdCard, type DataFormFields } from 'liv-web';

interface FormData {
  name: string;
  age: string;
  phone: string;
  idcard: string;
}

const form = ref<FormData>({
  name: '',
  age: '',
  phone: '',
  idcard: '',
});

const fields: DataFormFields<FormData> = [
  // 自定义校验逻辑
  {
    prop: 'name',
    label: '姓名',
    required: true,
    fieldType: 'input',
    rules: {
      validator: (_rule: any, value: any, callback: any) => {
        if (!value) {
          callback(new Error('请输入姓名'));
        } else if (value.length < 2) {
          callback(new Error('姓名必须大于等于2个字符'));
        } else if (value.length > 4) {
          callback(new Error('姓名必须小于等于4个字符'));
        } else {
          callback();
        }
      },
      trigger: ['blur', 'change'],
    },
  },
  // 必填，并且需要校验正确性
  {
    prop: 'age',
    label: '年龄',
    required: true,
    fieldType: 'input',
    rules: {
      validator: validateNumber,
      trigger: 'blur',
    },
  },
  // 非必填，但是需要校验正确性
  {
    prop: 'idcard',
    label: '身份证',
    fieldType: 'input',
    rules: {
      validator: validateIdCard,
      trigger: 'blur',
    },
  },
  // 传入多个校验规则
  {
    prop: 'phone',
    label: '手机号',
    fieldType: 'input',
    required: true,
    rules: [
      {
        validator: validateNumber,
        trigger: 'change',
      },
      {
        validator: validatePhone,
        trigger: 'blur',
      },
    ],
  },
];

function handleSubmit(_form: FormData) {
  ElMessage.success('校验通过！');
}
<\/script>
`,options:"{}"},{highlight:l(()=>a[10]||(a[10]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"liv-data-form"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"model"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"fields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"fields"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"submit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"handleSubmit"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ts"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ref } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { validateNumber, validatePhone, validateIdCard, "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"type"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," DataFormFields } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'liv-web'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"interface"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  name"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  age"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  phone"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  idcard"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  name: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  age: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  phone: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  idcard: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"});")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," fields"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," DataFormFields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // 自定义校验逻辑")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'name'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'姓名'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    required: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'input'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    rules: {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"      validator"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_rule"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," any"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"value"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," any"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"callback"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," any"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"!"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"value) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"          callback"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Error"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'请输入姓名'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"));")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"else"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (value."),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"length"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," <"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 2"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"          callback"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Error"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'姓名必须大于等于2个字符'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"));")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"else"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (value."),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"length"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," >"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 4"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"          callback"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," Error"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'姓名必须小于等于4个字符'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"));")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"else"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"          callback"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      trigger: ["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'blur'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'change'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // 必填，并且需要校验正确性")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'age'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'年龄'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    required: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'input'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    rules: {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      validator: validateNumber,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      trigger: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'blur'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // 非必填，但是需要校验正确性")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'idcard'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'身份证'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'input'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    rules: {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      validator: validateIdCard,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      trigger: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'blur'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // 传入多个校验规则")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'phone'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'手机号'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'input'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    required: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    rules: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        validator: validateNumber,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        trigger: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'change'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        validator: validatePhone,")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        trigger: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'blur'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"];")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleSubmit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"success"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'校验通过！'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),default:l(()=>[k(H)]),_:1}),a[154]||(a[154]=i("h2",{id:"自定义表单项",tabindex:"-1"},[s("自定义表单项 "),i("a",{class:"header-anchor",href:"#自定义表单项","aria-label":'Permalink to "自定义表单项"'},"​")],-1)),a[155]||(a[155]=i("p",null,[s("通过设置"),i("code",null,"fieldType"),s("为"),i("code",null,"slot"),s("，你可以自定义表单项的内容。")],-1)),k(e,{customClass:"",sourceCode:`<template>
  <liv-data-form :model="form" :fields="fields" @submit="handleSubmit">
    <template #person>
      <div class="mention-container">
        <el-mention
          v-model="form.person"
          :options="options"
          style="width: 320px"
          placeholder="请输入" />
        <el-button type="success" @click="handleAssign">指派</el-button>
      </div>
    </template>
  </liv-data-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { DataFormFields } from 'liv-web';

interface FormData {
  no: string;
  status: string;
  person: string;
}

const form = ref<FormData>({
  no: '',
  status: '',
  person: '@',
});

const fields: DataFormFields<FormData> = [
  {
    prop: 'no',
    label: '事件编号',
    fieldType: 'input',
  },
  {
    prop: 'status',
    label: '事件状态',
    fieldType: 'dict',
    dictType: 'status',
  },
  {
    prop: 'person',
    label: '处理人',
    fieldType: 'slot',
  },
];

const options = ref([
  {
    label: '张三',
    value: '张三',
  },
  {
    label: '李四',
    value: '李四',
  },
  {
    label: '王五',
    value: '王五',
  },
  {
    label: '赵六',
    value: '赵六',
  },
]);

function handleSubmit(form: FormData) {
  ElMessage.success(\`提交的表单内容：\${JSON.stringify(form)}\`);
}

function handleAssign(_form: FormData) {
  ElMessage.success('点击了指派按钮');
}
<\/script>

<style lang="scss" scoped>
.mention-container {
  display: flex;
  flex-direction: row;
  gap: 16px;
}
</style>
`,options:"{}"},{highlight:l(()=>a[11]||(a[11]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"liv-data-form"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"model"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"fields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"fields"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"submit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"handleSubmit"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," #"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"person"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"mention-container"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-mention")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"          v-model"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form.person"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"options"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"options"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"          style"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"width"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"320"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"px"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"          placeholder"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"请输入"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," type"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"success"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"click"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"handleAssign"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">指派</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"liv-data-form"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ts"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ref } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," type"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { DataFormFields } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'liv-web'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"interface"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  no"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  status"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  person"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  no: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  status: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  person: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'@'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"});")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," fields"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," DataFormFields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'no'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'事件编号'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'input'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'status'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'事件状态'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'dict'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    dictType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'status'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'person'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'处理人'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'slot'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"];")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," options"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"([")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'张三'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'张三'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'李四'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'李四'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'王五'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'王五'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'赵六'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'赵六'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]);")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleSubmit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"success"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`提交的表单内容：${"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"JSON"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"stringify"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"("),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleAssign"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"_form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"success"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'点击了指派按钮'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"style"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"scss"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," scoped"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".mention-container {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  display: flex;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  flex-direction: row;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  gap: 16px;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"style"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),default:l(()=>[k(Z)]),_:1}),a[156]||(a[156]=D('<h2 id="属性&amp;事件&amp;插槽透传" tabindex="-1">属性&amp;事件&amp;插槽透传 <a class="header-anchor" href="#属性&amp;事件&amp;插槽透传" aria-label="Permalink to &quot;属性&amp;事件&amp;插槽透传&quot;">​</a></h2><p>Data Form基于<a href="https://element-plus.org/zh-CN/component/form.html#form-attributes" target="_blank" rel="noreferrer">ElForm</a>封装，所以你可以传入<a href="https://element-plus.org/zh-CN/component/form.html#form-attributes" target="_blank" rel="noreferrer">ElForm</a>的所有属性和事件，并且在字段配置属性<code>fields</code>中，根据<code>fieldType</code>的不同，你可以透传属性和事件给对应的渲染组件，具体<code>fieldType</code>对应的渲染组件请查看<a href="#fieldtype可选值">fieldType可选值</a>。</p>',2)),k(e,{customClass:"",sourceCode:`<template>
  <liv-data-form :model="form" :fields="fields" @submit="handleSubmit">
    <el-form-item prop="input" label="插槽输入框">
      <el-input v-model="form.input" placeholder="请输入"></el-input>
    </el-form-item>
  </liv-data-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { DataFormFields } from 'liv-web';

interface FormData {
  no: string;
  status: string[];
  min: number;
  max: number;
  location: string;
  imageUrl: string;
  article: string;
  input: string;
}

const form = ref<FormData>({
  no: '',
  status: [],
  min: 10,
  max: 30,
  location: '',
  imageUrl: '',
  article: '',
  input: '',
});

const fields: DataFormFields<FormData> = [
  {
    prop: 'no',
    label: '事件编号',
    fieldType: 'input',
    placeholder: '自定义提示',
    maxlength: 5,
  },
  {
    prop: 'status',
    label: '事件状态',
    fieldType: 'select',
    multiple: true,
    data: [
      {
        label: '待处理',
        value: '0',
      },
      {
        label: '待评价',
        value: '1',
        disabled: true,
      },
      {
        label: '已办结',
        value: '2',
      },
    ],
  },
  {
    prop: ['min', 'max'],
    label: '数字范围',
    fieldType: 'numberRange',
    min: 10,
    max: 30,
  },
  {
    prop: 'location',
    label: '开启定位',
    fieldType: 'switch',
    inlinePrompt: true,
    activeText: '完整展示多个内容',
    inactiveText: '多个内容',
  },
  {
    prop: 'imageUrl',
    label: '事件图片',
    fieldType: 'image',
    listType: 'picture',
    limit: 1,
    tip: '最多上传一张图片',
  },
  {
    prop: 'article',
    label: '文章内容',
    fieldType: 'richText',
    editor: {
      defaultConfig: {
        placeholder: '自定义提示语',
        MENU_CONF: {
          uploadImage: {
            // 只允许上传1M以内的文件
            maxFileSize: 1 * 1024 * 1024,
            onError(file: File, err: any, res: any) {
              ElMessage.error(\`\${file.name} 上传出错：\${err.message}\`);
            },
          },
        },
      },
    },
  },
];

function handleSubmit(form: FormData) {
  ElMessage.success(\`提交的表单内容：\${JSON.stringify(form)}\`);
}
<\/script>
`,options:"{}"},{highlight:l(()=>a[12]||(a[12]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"liv-data-form"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"model"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"fields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"fields"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," @"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"submit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"handleSubmit"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-form-item"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," prop"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"input"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," label"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"插槽输入框"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-input"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," v-model"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form.input"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," placeholder"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"请输入"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"></"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-input"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-form-item"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  </"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"liv-data-form"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ts"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ref } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," type"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { DataFormFields } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'liv-web'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"interface"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  no"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  status"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[];")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  min"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," number"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  max"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," number"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  location"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  imageUrl"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  article"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  input"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  no: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  status: [],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  min: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"10"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  max: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"30"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  location: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  imageUrl: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  article: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  input: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"});")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," fields"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," DataFormFields"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'no'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'事件编号'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'input'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    placeholder: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'自定义提示'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    maxlength: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"5"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'status'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'事件状态'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'select'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    multiple: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    data: [")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'待处理'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'0'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'待评价'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'1'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        disabled: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'已办结'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        value: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'2'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: ["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'min'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'max'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'数字范围'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'numberRange'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    min: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"10"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    max: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"30"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'location'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'开启定位'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'switch'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    inlinePrompt: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    activeText: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'完整展示多个内容'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    inactiveText: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'多个内容'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'imageUrl'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'事件图片'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'image'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    listType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'picture'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    limit: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    tip: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'最多上传一张图片'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    prop: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'article'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    label: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'文章内容'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    fieldType: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'richText'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    editor: {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      defaultConfig: {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        placeholder: "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'自定义提示语'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        MENU_CONF: {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          uploadImage: {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"            // 只允许上传1M以内的文件")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            maxFileSize: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," *"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 1024"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," *"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 1024"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"            onError"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"file"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," File"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"err"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," any"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"res"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," any"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"              ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"error"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`${"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"file"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"."),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"name"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"} 上传出错：${"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"err"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"."),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"message"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"];")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," handleSubmit"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"form"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ElMessage."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"success"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`提交的表单内容：${"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"JSON"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"stringify"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"("),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},")"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),default:l(()=>[k(Q)]),_:1}),a[157]||(a[157]=i("h2",{id:"属性",tabindex:"-1"},[s("属性 "),i("a",{class:"header-anchor",href:"#属性","aria-label":'Permalink to "属性"'},"​")],-1)),i("table",X,[a[28]||(a[28]=i("thead",null,[i("tr",null,[i("th",null,"属性名"),i("th",null,"说明"),i("th",null,"类型"),i("th",null,"默认值")])],-1)),i("tbody",null,[a[25]||(a[25]=i("tr",null,[i("td",null,"model"),i("td",null,"表单数据"),i("td",null,[i("code",null,"T")]),i("td",null,"—")],-1)),i("tr",null,[a[16]||(a[16]=i("td",null,"fields",-1)),a[17]||(a[17]=i("td",null,"字段配置信息",-1)),i("td",null,[a[15]||(a[15]=i("code",null,"DataFormFields<T>",-1)),k(h,{placement:"bottom",width:"fit-content",trigger:"click",teleported:!1,"popper-style":"max-width: 600px;white-space: wrap;"},{reference:l(()=>[k(n,{plain:"",text:"",type:"info",style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>a[13]||(a[13]=[i("i",{class:"el-icon"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[i("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"})])],-1)])),_:1})]),default:l(()=>[a[14]||(a[14]=i("code",null,"TwoDimensionArrayable<MaybeRef<DataFormField<T>>> ",-1))]),_:1})]),a[18]||(a[18]=i("td",null,"[]",-1))]),a[26]||(a[26]=i("tr",null,[i("td",null,"inline"),i("td",null,"行内表单模式"),i("td",null,[i("code",null,"boolean")]),i("td",null,"false")],-1)),i("tr",null,[a[22]||(a[22]=i("td",null,"buttons",-1)),a[23]||(a[23]=i("td",null,"表单操作按钮",-1)),i("td",null,[a[21]||(a[21]=i("code",null,"DataFormButtons<T>",-1)),k(h,{placement:"bottom",width:"fit-content",trigger:"click",teleported:!1,"popper-style":"max-width: 600px;white-space: wrap;"},{reference:l(()=>[k(n,{plain:"",text:"",type:"info",style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>a[19]||(a[19]=[i("i",{class:"el-icon"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[i("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"})])],-1)])),_:1})]),default:l(()=>[a[20]||(a[20]=i("code",null,"DataFormButton<T>[] ",-1))]),_:1})]),a[24]||(a[24]=i("td",null,"[]",-1))]),a[27]||(a[27]=i("tr",null,[i("td",null,"show-reset"),i("td",null,"是否显示重置按钮"),i("td",null,[i("code",null,"boolean")]),i("td",null,"false")],-1))])]),a[158]||(a[158]=i("h3",{id:"DataFormField",tabindex:"-1"},[s("DataFormField "),i("a",{class:"header-anchor",href:"#DataFormField","aria-label":'Permalink to "DataFormField"'},"​")],-1)),i("table",ii,[a[69]||(a[69]=i("thead",null,[i("tr",null,[i("th",null,"属性名"),i("th",null,"说明"),i("th",null,[i("div",{style:{width:"160px"}},"类型")]),i("th",null,"默认值")])],-1)),i("tbody",null,[i("tr",null,[a[32]||(a[32]=i("td",null,"prop",-1)),i("td",null,[a[31]||(a[31]=s("字段名称 ")),k(h,{placement:"bottom",width:"fit-content",trigger:"click",teleported:!1,"popper-style":"max-width: 600px;white-space: wrap;"},{reference:l(()=>[k(n,{plain:"",text:"",type:"info",style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>a[29]||(a[29]=[i("i",{class:"el-icon"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[i("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"})])],-1)])),_:1})]),default:l(()=>[a[30]||(a[30]=i("code",null,"对应表单项的字段名，即ElFormItem组件的prop属性。 ",-1))]),_:1})]),a[33]||(a[33]=i("td",null,[i("code",null,"string")],-1)),a[34]||(a[34]=i("td",null,"—",-1))]),i("tr",null,[a[38]||(a[38]=i("td",null,"fieldType",-1)),a[39]||(a[39]=i("td",null,"表单项字段类型",-1)),i("td",null,[a[37]||(a[37]=i("code",null,"FormItemFieldType",-1)),k(h,{placement:"bottom",width:"fit-content",trigger:"click",teleported:!1,"popper-style":"max-width: 600px;white-space: wrap;"},{reference:l(()=>[k(n,{plain:"",text:"",type:"info",style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>a[35]||(a[35]=[i("i",{class:"el-icon"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[i("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"})])],-1)])),_:1})]),default:l(()=>[a[36]||(a[36]=i("code",null,"'input' | 'textarea' | 'phone' | 'idcard' | 'ciphertext' | 'cipherPhone' | 'cipherIdcard' | 'select' | 'cascader' | 'radio' | 'checkbox' | 'date' | 'dateRange' | 'time' | 'timeRange' | 'datetime' | 'datetimeRange' | 'switch' | 'number' | 'numberRange' | 'rate' | 'color' | 'image' | 'audio' | 'video' | 'file' | 'dict' | 'dictId' | 'grid' | 'gridCode' | 'gridId' | 'location' | 'verify' | 'richText' | 'slot' ",-1))]),_:1})]),a[40]||(a[40]=i("td",null,"—",-1))]),a[65]||(a[65]=i("tr",null,[i("td",null,"fieldIndex"),i("td",null,"表单项展示位置"),i("td",null,[i("code",null,"number")]),i("td",null,"—")],-1)),i("tr",null,[a[44]||(a[44]=i("td",null,"span",-1)),i("td",null,[a[43]||(a[43]=s("表单项占据的列数 ")),k(h,{placement:"bottom",width:"fit-content",trigger:"click",teleported:!1,"popper-style":"max-width: 600px;white-space: wrap;"},{reference:l(()=>[k(n,{plain:"",text:"",type:"info",style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>a[41]||(a[41]=[i("i",{class:"el-icon"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[i("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"})])],-1)])),_:1})]),default:l(()=>[a[42]||(a[42]=i("code",null,"默认平分，24表示占满整行。 ",-1))]),_:1})]),a[45]||(a[45]=i("td",null,[i("code",null,"number")],-1)),a[46]||(a[46]=i("td",null,"24 / 行内表单项数",-1))]),a[66]||(a[66]=i("tr",null,[i("td",null,"authority"),i("td",null,"权限标识"),i("td",null,[i("code",null,"string"),s(" / "),i("code",null,"string[]")]),i("td",null,"—")],-1)),a[67]||(a[67]=i("tr",null,[i("td",null,"show"),i("td",null,"是否展示"),i("td",null,[i("code",null,"boolean")]),i("td",null,"true")],-1)),i("tr",null,[a[50]||(a[50]=i("td",null,"style",-1)),i("td",null,[a[49]||(a[49]=s("表单项样式 ")),k(h,{placement:"bottom",width:"fit-content",trigger:"click",teleported:!1,"popper-style":"max-width: 600px;white-space: wrap;"},{reference:l(()=>[k(n,{plain:"",text:"",type:"info",style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>a[47]||(a[47]=[i("i",{class:"el-icon"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[i("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"})])],-1)])),_:1})]),default:l(()=>[a[48]||(a[48]=i("code",null,"该样式将绑定在表单项具体的实现组件上。 ",-1))]),_:1})]),a[51]||(a[51]=i("td",null,[i("code",null,"string"),s(" / "),i("code",null,"CSSProperties")],-1)),a[52]||(a[52]=i("td",null,"—",-1))]),i("tr",null,[a[56]||(a[56]=i("td",null,"watchEffect",-1)),a[57]||(a[57]=i("td",null,[s("表单项副作用，通常用于实现"),i("a",{href:"#动态表单"},"动态表单"),s("功能")],-1)),i("td",null,[a[55]||(a[55]=i("code",null,"Function",-1)),k(h,{placement:"bottom",width:"fit-content",trigger:"click",teleported:!1,"popper-style":"max-width: 600px;white-space: wrap;"},{reference:l(()=>[k(n,{plain:"",text:"",type:"info",style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>a[53]||(a[53]=[i("i",{class:"el-icon"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[i("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"})])],-1)])),_:1})]),default:l(()=>[a[54]||(a[54]=i("code",null,"(form: T, formRef: ElFormInstance | null) => void ",-1))]),_:1})]),a[58]||(a[58]=i("td",null,"—",-1))]),a[68]||(a[68]=i("tr",null,[i("td",null,[s("tooltip"),i("span",{class:"version-tag"},"2.1.0")]),i("td",null,"表单项提示信息"),i("td",null,[i("code",null,"string")]),i("td",null,"—")],-1)),i("tr",null,[a[62]||(a[62]=i("td",null,[s("placement"),i("span",{class:"version-tag"},"2.1.0")],-1)),a[63]||(a[63]=i("td",null,"表单项提示信息出现的位置",-1)),i("td",null,[a[61]||(a[61]=i("code",null,"FormItemPlacement",-1)),k(h,{placement:"bottom",width:"fit-content",trigger:"click",teleported:!1,"popper-style":"max-width: 600px;white-space: wrap;"},{reference:l(()=>[k(n,{plain:"",text:"",type:"info",style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>a[59]||(a[59]=[i("i",{class:"el-icon"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[i("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"})])],-1)])),_:1})]),default:l(()=>[a[60]||(a[60]=i("code",null,"'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end' | 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' ",-1))]),_:1})]),a[64]||(a[64]=i("td",null,"top",-1))])])]),a[159]||(a[159]=D('<p>除了上述属性，你还可以透传对应渲染组件的所有属性和事件。</p><h4 id="fieldType值对应渲染组件" tabindex="-1">fieldType值对应渲染组件 <a class="header-anchor" href="#fieldType值对应渲染组件" aria-label="Permalink to &quot;fieldType值对应渲染组件&quot;">​</a></h4><table tabindex="0"><thead><tr><th>字段类型</th><th>说明</th><th>对应的渲染组件</th></tr></thead><tbody><tr><td><code>input</code></td><td>输入框</td><td><a href="https://element-plus.org/zh-CN/component/input.html#attributes" target="_blank" rel="noreferrer">ElInput</a></td></tr><tr><td><code>textarea</code></td><td>文本域</td><td><a href="https://element-plus.org/zh-CN/component/input.html#attributes" target="_blank" rel="noreferrer">ElInput</a></td></tr><tr><td><code>phone</code><span class="version-tag">2.1.2</span></td><td>输入框(带手机号校验)</td><td><a href="https://element-plus.org/zh-CN/component/input.html#attributes" target="_blank" rel="noreferrer">ElInput</a></td></tr><tr><td><code>idcard</code><span class="version-tag">2.1.2</span></td><td>输入框(带身份证校验)</td><td><a href="https://element-plus.org/zh-CN/component/input.html#attributes" target="_blank" rel="noreferrer">ElInput</a></td></tr><tr><td><code>ciphertext</code><span class="version-tag">2.1.0</span></td><td>加密输入框</td><td><a href="https://element-plus.org/zh-CN/component/input.html#attributes" target="_blank" rel="noreferrer">ElInput</a>、<a href="./verify.html">LivVerify</a></td></tr><tr><td><code>cipherPhone</code><span class="version-tag">2.1.2</span></td><td>加密输入框(带手机号校验)</td><td><a href="https://element-plus.org/zh-CN/component/input.html#attributes" target="_blank" rel="noreferrer">ElInput</a>、<a href="./verify.html">LivVerify</a></td></tr><tr><td><code>cipherIdcard</code><span class="version-tag">2.1.2</span></td><td>加密输入框(带身份证校验)</td><td><a href="https://element-plus.org/zh-CN/component/input.html#attributes" target="_blank" rel="noreferrer">ElInput</a>、<a href="./verify.html">LivVerify</a></td></tr><tr><td><code>select</code></td><td>选择器</td><td><a href="/doc/component/select.html">LivSelect</a></td></tr><tr><td><code>date</code></td><td>日期选择器</td><td><a href="https://element-plus.org/zh-CN/component/date-picker.html#attributes" target="_blank" rel="noreferrer">ElDatePicker</a></td></tr><tr><td><code>dateRange</code><span class="version-tag">2.2.0</span></td><td>日期范围选择器</td><td><a href="https://element-plus.org/zh-CN/component/date-picker.html#attributes" target="_blank" rel="noreferrer">ElDatePicker</a></td></tr><tr><td><code>time</code></td><td>时间选择器</td><td><a href="https://element-plus.org/zh-CN/component/time-picker.html#attributes" target="_blank" rel="noreferrer">ElTimePicker</a></td></tr><tr><td><code>timeRange</code><span class="version-tag">2.2.0</span></td><td>时间范围选择器</td><td><a href="https://element-plus.org/zh-CN/component/time-picker.html#attributes" target="_blank" rel="noreferrer">ElTimePicker</a></td></tr><tr><td><code>datetime</code><span class="version-tag">2.2.0</span></td><td>日期时间选择器</td><td><a href="https://element-plus.org/zh-CN/component/date-picker.html#attributes" target="_blank" rel="noreferrer">ElDatePicker</a></td></tr><tr><td><code>datetimeRange</code><span class="version-tag">2.2.0</span></td><td>日期时间范围选择器</td><td><a href="https://element-plus.org/zh-CN/component/date-picker.html#attributes" target="_blank" rel="noreferrer">ElDatePicker</a></td></tr><tr><td><code>radio</code></td><td>单选框</td><td><a href="/doc/component/radio.html">LivRadio</a></td></tr><tr><td><code>checkbox</code></td><td>多选框</td><td><a href="/doc/component/checkbox.html">LivCheckbox</a></td></tr><tr><td><code>number</code></td><td>数字输入框</td><td><a href="https://element-plus.org/zh-CN/component/input-number.html#attributes" target="_blank" rel="noreferrer">ElInputNumber</a></td></tr><tr><td><code>numberRange</code></td><td>数组范围</td><td><a href="/doc/component/number-range.html">LivNumberRange</a></td></tr><tr><td><code>rate</code></td><td>评分</td><td><a href="https://element-plus.org/zh-CN/component/rate.html#attributes" target="_blank" rel="noreferrer">ElRate</a></td></tr><tr><td><code>switch</code></td><td>开关</td><td><a href="https://element-plus.org/zh-CN/component/switch.html#attributes" target="_blank" rel="noreferrer">ElSwitch</a></td></tr><tr><td><code>clolor</code></td><td>拾色器</td><td><a href="https://element-plus.org/zh-CN/component/color-picker.html#attributes" target="_blank" rel="noreferrer">ElColorPicker</a></td></tr><tr><td><code>image</code> <code>audio</code> <code>video</code> <code>file</code></td><td>图片/音频/视频/文件上传</td><td><a href="https://element-plus.org/zh-CN/component/upload.html#%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer">ElUpload</a></td></tr><tr><td><code>dict</code> <code>dictId</code></td><td>字典选择器</td><td><a href="/doc/component/dict-select.html">DictSelect</a></td></tr><tr><td><code>grid</code> <code>gridId</code> <code>gridCode</code></td><td>网格选择器</td><td><a href="/doc/component/grid-cascader.html">LivGridCascader</a></td></tr><tr><td><code>location</code><span class="version-tag">2.1.0</span></td><td>地图选点</td><td><a href="/doc/component/location-picker.html">LivLocationPicker</a></td></tr><tr><td><code>verify</code><span class="version-tag">2.1.2</span></td><td>验证码</td><td><a href="/doc/component/verify.html">LivVerify</a></td></tr><tr><td><code>richText</code></td><td>富文本编辑器</td><td><a href="/doc/component/rich-text.html">LivRichText</a></td></tr><tr><td><code>slot</code></td><td>插槽</td><td>—</td></tr></tbody></table><h3 id="DataFormButton" tabindex="-1">DataFormButton <a class="header-anchor" href="#DataFormButton" aria-label="Permalink to &quot;DataFormButton&quot;">​</a></h3>',4)),i("table",si,[a[99]||(a[99]=i("thead",null,[i("tr",null,[i("th",null,"属性名"),i("th",null,"说明"),i("th",null,"类型"),i("th",null,[i("div",{style:{"min-width":"50px"}},"默认值")])])],-1)),i("tbody",null,[a[96]||(a[96]=i("tr",null,[i("td",null,"name"),i("td",null,"按钮名称"),i("td",null,[i("code",null,"string")]),i("td",null,"—")],-1)),a[97]||(a[97]=i("tr",null,[i("td",null,"authority"),i("td",null,"按钮权限"),i("td",null,[i("code",null,"string"),s(" / "),i("code",null,"string[]")]),i("td",null,"—")],-1)),i("tr",null,[a[73]||(a[73]=i("td",null,"order",-1)),i("td",null,[a[72]||(a[72]=s("按钮顺序 ")),k(h,{placement:"bottom",width:"fit-content",trigger:"click",teleported:!1,"popper-style":"max-width: 600px;white-space: wrap;"},{reference:l(()=>[k(n,{plain:"",text:"",type:"info",style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>a[70]||(a[70]=[i("i",{class:"el-icon"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[i("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"})])],-1)])),_:1})]),default:l(()=>[a[71]||(a[71]=i("code",null,"组件内置的提交、搜索、重置、新增、批量删除、返回按钮order分别为10、20、30、40、50、60，如果想要让自定义按钮显示在提交和重置按钮之间，order可以设置为10~30之间，如果不设置order则默认展示在内置按钮后面。 ",-1))]),_:1})]),a[74]||(a[74]=i("td",null,[i("code",null,"number")],-1)),a[75]||(a[75]=i("td",null,"—",-1))]),a[98]||(a[98]=i("tr",null,[i("td",null,"show"),i("td",null,"是否显示按钮"),i("td",null,[i("code",null,"boolean")]),i("td",null,"true")],-1)),i("tr",null,[a[79]||(a[79]=i("td",null,"validate",-1)),i("td",null,[a[78]||(a[78]=s("是否需要校验表单 ")),k(h,{placement:"bottom",width:"fit-content",trigger:"click",teleported:!1,"popper-style":"max-width: 600px;white-space: wrap;"},{reference:l(()=>[k(n,{plain:"",text:"",type:"info",style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>a[76]||(a[76]=[i("i",{class:"el-icon"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[i("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"})])],-1)])),_:1})]),default:l(()=>[a[77]||(a[77]=i("code",null,"如果为true，点击按钮会自动触发表单校验，并且校验通过后才会执行onClick事件。 ",-1))]),_:1})]),a[80]||(a[80]=i("td",null,[i("code",null,"boolean")],-1)),a[81]||(a[81]=i("td",null,"false",-1))]),i("tr",null,[a[85]||(a[85]=i("td",null,"onClick",-1)),a[86]||(a[86]=i("td",null,"按钮点击事件",-1)),i("td",null,[a[84]||(a[84]=i("code",null,"Function",-1)),k(h,{placement:"bottom",width:"fit-content",trigger:"click",teleported:!1,"popper-style":"max-width: 600px;white-space: wrap;"},{reference:l(()=>[k(n,{plain:"",text:"",type:"info",style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>a[82]||(a[82]=[i("i",{class:"el-icon"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[i("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"})])],-1)])),_:1})]),default:l(()=>[a[83]||(a[83]=i("code",null,"(form: T, formRef: ElFormInstance | null) => void | Promise<any> ",-1))]),_:1})]),a[87]||(a[87]=i("td",null,"—",-1))]),i("tr",null,[a[94]||(a[94]=i("td",null,"watchEffect",-1)),i("td",null,[a[90]||(a[90]=s("按钮副作用 ")),k(h,{placement:"bottom",width:"fit-content",trigger:"click",teleported:!1,"popper-style":"max-width: 600px;white-space: wrap;"},{reference:l(()=>[k(n,{plain:"",text:"",type:"info",style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>a[88]||(a[88]=[i("i",{class:"el-icon"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[i("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"})])],-1)])),_:1})]),default:l(()=>[a[89]||(a[89]=i("code",null,"可以在回调函数中拿到表单数据及实例，并动态修改按钮配置。 ",-1))]),_:1})]),i("td",null,[a[93]||(a[93]=i("code",null,"Function",-1)),k(h,{placement:"bottom",width:"fit-content",trigger:"click",teleported:!1,"popper-style":"max-width: 600px;white-space: wrap;"},{reference:l(()=>[k(n,{plain:"",text:"",type:"info",style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>a[91]||(a[91]=[i("i",{class:"el-icon"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[i("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"})])],-1)])),_:1})]),default:l(()=>[a[92]||(a[92]=i("code",null,"(form: T, formRef: ElFormInstance | null) => void ",-1))]),_:1})]),a[95]||(a[95]=i("td",null,"—",-1))])])]),a[160]||(a[160]=i("p",null,[s("除了上述属性，你还可以透传"),i("a",{href:"https://element-plus.org/zh-CN/component/button.html#button-%E5%B1%9E%E6%80%A7",target:"_blank",rel:"noreferrer"},"ElButton"),s("的所有属性和事件。")],-1)),a[161]||(a[161]=i("h2",{id:"事件",tabindex:"-1"},[s("事件 "),i("a",{class:"header-anchor",href:"#事件","aria-label":'Permalink to "事件"'},"​")],-1)),i("table",ai,[a[134]||(a[134]=i("thead",null,[i("tr",null,[i("th",null,"事件名"),i("th",null,"说明"),i("th",null,"类型")])],-1)),i("tbody",null,[i("tr",null,[a[106]||(a[106]=i("td",null,"submit",-1)),i("td",null,[a[102]||(a[102]=s("点击提交按钮时触发 ")),k(h,{placement:"bottom",width:"fit-content",trigger:"click",teleported:!1,"popper-style":"max-width: 600px;white-space: wrap;"},{reference:l(()=>[k(n,{plain:"",text:"",type:"info",style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>a[100]||(a[100]=[i("i",{class:"el-icon"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[i("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"})])],-1)])),_:1})]),default:l(()=>[a[101]||(a[101]=i("code",null,"内部会对表单进行校验，校验通过后才会触发。 ",-1))]),_:1})]),i("td",null,[a[105]||(a[105]=i("code",null,"Function",-1)),k(h,{placement:"bottom",width:"fit-content",trigger:"click",teleported:!1,"popper-style":"max-width: 600px;white-space: wrap;"},{reference:l(()=>[k(n,{plain:"",text:"",type:"info",style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>a[103]||(a[103]=[i("i",{class:"el-icon"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[i("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"})])],-1)])),_:1})]),default:l(()=>[a[104]||(a[104]=i("code",null,"(form: T, formRef: ElFormInstance | null) => void | Promise<any> ",-1))]),_:1})])]),i("tr",null,[a[110]||(a[110]=i("td",null,"rest",-1)),a[111]||(a[111]=i("td",null,"点击重置按钮时触发",-1)),i("td",null,[a[109]||(a[109]=i("code",null,"Function",-1)),k(h,{placement:"bottom",width:"fit-content",trigger:"click",teleported:!1,"popper-style":"max-width: 600px;white-space: wrap;"},{reference:l(()=>[k(n,{plain:"",text:"",type:"info",style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>a[107]||(a[107]=[i("i",{class:"el-icon"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[i("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"})])],-1)])),_:1})]),default:l(()=>[a[108]||(a[108]=i("code",null,"(form: T, formRef: ElFormInstance | null) => void | Promise<any> ",-1))]),_:1})])]),i("tr",null,[a[115]||(a[115]=i("td",null,"back",-1)),a[116]||(a[116]=i("td",null,"点击返回按钮时触发",-1)),i("td",null,[a[114]||(a[114]=i("code",null,"Function",-1)),k(h,{placement:"bottom",width:"fit-content",trigger:"click",teleported:!1,"popper-style":"max-width: 600px;white-space: wrap;"},{reference:l(()=>[k(n,{plain:"",text:"",type:"info",style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>a[112]||(a[112]=[i("i",{class:"el-icon"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[i("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"})])],-1)])),_:1})]),default:l(()=>[a[113]||(a[113]=i("code",null,"(form: T, formRef: ElFormInstance | null) => void | Promise<any> ",-1))]),_:1})])]),i("tr",null,[a[123]||(a[123]=i("td",null,"search",-1)),i("td",null,[a[119]||(a[119]=s("点击查询按钮时触发 ")),k(h,{placement:"bottom",width:"fit-content",trigger:"click",teleported:!1,"popper-style":"max-width: 600px;white-space: wrap;"},{reference:l(()=>[k(n,{plain:"",text:"",type:"info",style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>a[117]||(a[117]=[i("i",{class:"el-icon"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[i("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"})])],-1)])),_:1})]),default:l(()=>[a[118]||(a[118]=i("code",null,"内部会对表单进行校验，校验通过后才会触发。 ",-1))]),_:1})]),i("td",null,[a[122]||(a[122]=i("code",null,"Function",-1)),k(h,{placement:"bottom",width:"fit-content",trigger:"click",teleported:!1,"popper-style":"max-width: 600px;white-space: wrap;"},{reference:l(()=>[k(n,{plain:"",text:"",type:"info",style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>a[120]||(a[120]=[i("i",{class:"el-icon"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[i("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"})])],-1)])),_:1})]),default:l(()=>[a[121]||(a[121]=i("code",null,"(form: T, formRef: ElFormInstance | null) => void | Promise<any> ",-1))]),_:1})])]),i("tr",null,[a[127]||(a[127]=i("td",null,"add",-1)),a[128]||(a[128]=i("td",null,"点击新增按钮时触发",-1)),i("td",null,[a[126]||(a[126]=i("code",null,"Function",-1)),k(h,{placement:"bottom",width:"fit-content",trigger:"click",teleported:!1,"popper-style":"max-width: 600px;white-space: wrap;"},{reference:l(()=>[k(n,{plain:"",text:"",type:"info",style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>a[124]||(a[124]=[i("i",{class:"el-icon"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[i("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"})])],-1)])),_:1})]),default:l(()=>[a[125]||(a[125]=i("code",null,"(form: T, formRef: ElFormInstance | null) => void | Promise<any> ",-1))]),_:1})])]),i("tr",null,[a[132]||(a[132]=i("td",null,"batchDelete",-1)),a[133]||(a[133]=i("td",null,"点击批量删除按钮时触发",-1)),i("td",null,[a[131]||(a[131]=i("code",null,"Function",-1)),k(h,{placement:"bottom",width:"fit-content",trigger:"click",teleported:!1,"popper-style":"max-width: 600px;white-space: wrap;"},{reference:l(()=>[k(n,{plain:"",text:"",type:"info",style:{"padding-left":"10px","padding-right":"10px"}},{default:l(()=>a[129]||(a[129]=[i("i",{class:"el-icon"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[i("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"})])],-1)])),_:1})]),default:l(()=>[a[130]||(a[130]=i("code",null,"(form: T, formRef: ElFormInstance | null) => void | Promise<any> ",-1))]),_:1})])])])]),a[162]||(a[162]=D(`<details class="details custom-block"><summary>类型声明</summary><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { MaybeRef } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ComponentExposed } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue-component-type-helpers&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ButtonProps </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ElButtonProps,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FormInstance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ElFormInstance,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  FormProps </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ElFormProps,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;element-plus&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Writable } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;element-plus/es/utils&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CascaderFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CheckboxFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  CiphertextFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ColorFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  DateFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  DateRangeFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  DatetimeFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  DatetimeRangeFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  DictFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  GridFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  InputFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  LocationFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  NumberFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  NumberRangeFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  RadioFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  RateFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  RenderlessFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  RichTextFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SelectFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SlotFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  SwitchFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  TextareaFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  TimeFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  TimeRangeFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  UploadFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  VerifyFormItemField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;../../form-item&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { TwoDimensionArrayable } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@liv-web/utils&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataForm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./data-form.vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 表单组件属性</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> T</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单的数据类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DataFormProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">U</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DataFormFields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt; {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 表单数据</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> T</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单的数据类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**-</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 表单字段配置项</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> U</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单配置项类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  fields</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> U</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 行内表单模式</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@defaultValue</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  inline</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 表单操作按钮</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@remarks</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 如果表单inline属性为true，则按钮展示在最后一个表单项右侧。如果inline属性为false，则按钮居中展示在最后一个表单项底部</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> T</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单的数据类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@defaultValue</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> []</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  buttons</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DataFormButtons</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 是否显示重置按钮</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@remarks</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 组件内置的重置按钮已经实现了重置表单逻辑，设置\`showReset\`属性为\`true\`即可，也可以手动传入组件的</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@reset方法以覆盖表单的重置逻辑</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@defaultValue</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  showReset</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 表单提交按钮点击事件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@remarks</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 传入该属性后会自动渲染提交按钮，并且会自动触发表单校验，校验通过后才会触发</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> onSubmit</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">属性传入的回调方法</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> T</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单的数据类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> form</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单数据</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> formRef</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单实例</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onSubmit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">form</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">formRef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ElFormInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 表单查询按钮点击事件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@remarks</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 传入该属性后会自动渲染搜索按钮</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> T</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单的数据类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> form</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单数据</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> formRef</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单实例</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onSearch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">form</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">formRef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ElFormInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 表单重置按钮点击事件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@remarks</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 传入该属性后会自动渲染重置按钮</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> T</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单的数据类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> form</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单数据</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> formRef</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单实例</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onReset</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">form</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">formRef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ElFormInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 表单新增按钮点击事件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@remarks</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 传入该属性后会自动渲染新增按钮</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> T</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单的数据类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> form</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单数据</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> formRef</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单实例</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onAdd</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">form</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">formRef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ElFormInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 表单批量删除按钮点击事件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@remarks</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 传入该属性后会自动渲染批量删除按钮</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> T</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单的数据类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> form</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单数据</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> formRef</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单实例</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onBatchDelete</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">form</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">formRef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ElFormInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 表单返回按钮点击事件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@remarks</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 传入该属性后会自动渲染返回按钮</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> T</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单的数据类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> form</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单数据</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> formRef</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单实例</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onBack</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">form</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">formRef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ElFormInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 数据表单组件实例</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> T</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单的数据类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> U</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单配置项类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DataFormInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  U</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DataFormFields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DataFormFields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ComponentExposed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DataForm&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">U</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 表单字段配置项</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> T</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单的数据类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DataFormField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RenderlessFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> InputFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TextareaFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CiphertextFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SelectFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CascaderFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RadioFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CheckboxFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DateFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DateRangeFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TimeFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TimeRangeFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DatetimeFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DatetimeRangeFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SwitchFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NumberFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NumberRangeFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RateFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ColorFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UploadFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DictFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GridFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LocationFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RichTextFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VerifyFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SlotFormItemField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 表单组件字段配置项集合</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> T</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单的数据类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DataFormFields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TwoDimensionArrayable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  MaybeRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DataFormField</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 表单操作按钮</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> T</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单的数据类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DataFormButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Partial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Writable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ElButtonProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt; {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 按钮名称</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 按钮权限</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  authority</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 展示顺序</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@remarks</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 组件内置的提交、搜索、重置、新增、批量删除、返回按钮order分别为10、20、30、40、50、60，如果想要让自定义按钮显示在提交和重置按钮之间，order可以设置为10~30之间，如果不设置order则默认展示在内置按钮后面</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  order</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 是否显示按钮</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@defaultValue</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  show</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 是否需要校验表单</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@remarks</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 如果为true，点击按钮会自动触发表单校验，并且校验通过后才会执行</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> onClick</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">事件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@defaultValue</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  validate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 唯一标识</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@remark</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 主要用于组件内部区分不同按钮</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 按钮点击事件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> T</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表格的数据类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> form</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单数据</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> formRef</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单实例</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onClick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">form</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">formRef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ElFormInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 按钮副作用</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@remarks</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 可以在回调函数中拿到表单数据及实例，并动态修改按钮配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> T</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单的数据类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  watchEffect</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">form</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">formRef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ElFormInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 表单操作按钮集合</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> T</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单的数据类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DataFormButtons</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DataFormButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;[];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 数据表单组件包含透传属性在内的全部属性</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> T</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 表单的数据类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DataFormFullProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Partial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ElFormProps</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DataFormProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;;</span></span></code></pre></div></details>`,1))])}}});export{$i as __pageData,Ui as default};
