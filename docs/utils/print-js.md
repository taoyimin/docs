# 打印方法


printJS 是一个打印方法，可以打印 pdf、html、image、json 格式的数据。
printJs基于[print-js](https://printjs.crabbly.com)封装，所以你可以传入print-js支持的所有参数

### 打印图片
:::demo
```vue
<template>
<div>
  <el-image  style="width: 200px; height: 200px" :src="img"></el-image>
</div>
<el-button type="primary" @click="printQrCode">打印图片</el-button>
</template>
<script lang="ts" setup>
import { printJS } from '@szxc/utils'

const img = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';

const printQrCode = () => {
  printJS({
    printable: img,
    type: 'image'
  });
}
</script>
```
:::

### 打印二维码
:::demo
```vue
<template>
<div>
  <liv-qr-code :content="content" :size="200" />
</div>
<el-button type="primary" @click="printQrCode">打印二维码</el-button>
</template>
<script lang="ts" setup>
import { printJS, qrCode } from '@szxc/utils'

// 二维码内容
const content = 'ssdgjl;;sdj;sddff';

const printQrCode = async () => {
  const img = await qrCode.toDataURL(content, {width: 600});
  printJS({
    printable: img,
    type: 'image'
  });
}
</script>
```
:::

### 打印html
:::demo
```vue
<template>
<div class="wrap" ref="printRef">
  <el-image style="width: 200px; height: 200px" :src="codeInfo.url"></el-image>
   <div class="card-number">
      商品名称：<b>{{ codeInfo.pname }}</b>
    </div>
    <div>
      兑换所需积分：<b>{{ codeInfo.integral }}</b>
    </div>

</div>
<el-button type="primary" @click="printQrCode">打印dom</el-button>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { printJS } from '@szxc/utils'

const printRef = ref();

const codeInfo = ref({
  url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  pname: '测试商品',
  integral: '100'
})

const printQrCode = () => {
  printJS({
    printable: printRef.value,
    type: 'html',
    header: '长效管护平台',
    style: `
    @media print { 
      @page { margin: 0; }
      .wrap { // 可自定义一些样式
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }`,
    targetStyle: ['text-align'],
  })
}

</script>
```
:::


|参数|说明|类型|
| ----|---- |---- |
|printable|数据来源：支持pdf、img hmtl的id或json数据|string|
|type|打印类型|pdf、html、image、json|
|header|用于打印的头部信息|支持string或html|
|css|打印所需要的css链接|string|
|style|自定义打印样式|string|
|targetStyle|需要处理的某些样式|例如['padding-top', 'border-bottom']|
|targetStyles|需要处理的某些样式|例如['border', 'padding']|

更多参数请参考[print-js](https://printjs.crabbly.com)