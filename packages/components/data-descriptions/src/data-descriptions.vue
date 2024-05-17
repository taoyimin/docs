<template>
  <el-descriptions class="vp-raw" :column="2" border>
    <template v-for="field in fields" :key="field.prop">
      <el-descriptions-item
        v-if="!field.fieldType"
        label-align="center"
        min-width="7vw"
        v-bind="field"
        >{{ field.fieldFormat ? field.fieldFormat(data?.[field.prop], data) : data?.[field.prop] }}
      </el-descriptions-item>
      <el-descriptions-item
        label-align="center"
        v-else-if="field.fieldType === 'image'"
        v-bind="field"
      >
        <el-image
          v-for="(image, index) in getFileUrlList(data?.[field.prop], field.isJoin, field.isSplit)"
          :key="image"
          :preview-src-list="getFileUrlList(data?.[field.prop], field.isJoin, field.isSplit)"
          :src="image"
          :initial-index="index"
          fit="cover"
          preview-teleported
        />
      </el-descriptions-item>
      <el-descriptions-item
        label-align="center"
        v-else-if="field.fieldType === 'link'"
        v-bind="field"
      >
        <el-tooltip :content="data?.[field.prop]">
          <el-link type="primary" :href="data?.[field.prop]" target="_blank">
            {{
              field.fieldFormat ? field.fieldFormat(data?.[field.prop], data) : data?.[field.prop]
            }}
          </el-link>
        </el-tooltip>
      </el-descriptions-item>
      <el-descriptions-item
        label-align="center"
        v-else-if="field.fieldType === 'audio'"
        v-bind="field"
      >
        <audio
          v-for="audio in getFileUrlList(data?.[field.prop], field.isJoin, field.isSplit)"
          :key="audio"
          controls
          :src="audio"
        >
          您的浏览器不支持 audio 播放器。
        </audio>
      </el-descriptions-item>
      <el-descriptions-item
        label-align="center"
        v-else-if="field.fieldType === 'video'"
        v-bind="field"
      >
        <video
          v-for="video in getFileUrlList(data?.[field.prop], field.isJoin, field.isSplit)"
          :key="video"
          controls
          :src="video"
        >
          您的浏览器不支持 video 播放器。
        </video>
      </el-descriptions-item>
      <el-descriptions-item
        label-align="center"
        v-else-if="field.fieldType === 'qrcode'"
        v-bind="field"
      >
        <qr-code :content="data?.[field.prop]" v-bind="field" />
      </el-descriptions-item>
      <!-- 插槽项，自定义传入内容(使用fieldFormat属性代替 https://k8s.nccxgh.com:9096/docs/Liv-UI/data-descriptions.html#格式化内容) -->
      <el-descriptions-item
        label-align="center"
        v-else-if="field.fieldType === 'slot'"
        v-bind="field"
      >
        <slot :name="field.prop" :data="data"></slot>
      </el-descriptions-item>
    </template>
  </el-descriptions>
</template>

<script lang="ts" setup>
import QrCode from '../../qr-code/src/qr-code.vue'
import { dataDescriptionsProps } from './data-descriptions'
import { getFileUrlList } from '@szxc/utils'

defineOptions({
  name: 'LivDataDescriptions'
})

defineProps(dataDescriptionsProps)
</script>

<style lang="scss" scoped>
.el-image {
  width: 100px;
  height: 100px;
}

:deep(.el-image) {
  img {
    object-fit: cover;
  }
}

video {
  width: 90%;
  max-height: 150px;
}

:deep(.el-descriptions__content) {
  overflow-wrap: anywhere;
}
</style>
