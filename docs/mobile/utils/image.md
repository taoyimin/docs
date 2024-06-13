# 图片相关

## previewImage

预览图片，使用方法同[uni.previewImage](https://uniapp.dcloud.net.cn/api/media/image.html#unipreviewimageobject)。

```vue
<template>
  <view class="image-grid">
    <image
      class="image-item"
      v-for="(item, index) in getThumbUrlList(eventDetail.imageUrl)"
      :key="index"
      :src="item"
      mode="aspectFill"
      @click="
        previewImage({
          current: index,
          urls: getFileUrlList(eventDetail.imageUrl)
        })
      "
    ></image>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getFileUrlList, getThumbUrlList } from '@szxc/utils'
import { previewImage } from 'liv-uni'

const eventDetail = ref()
</script>

<style lang="scss">
.image-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  grid-gap: 10rpx;
  width: 100%;
  max-width: 700rpx;
  height: 100%;

  .image-item {
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: var(--uni-image-radius);
    height: auto;
  }
}
</style>
```
