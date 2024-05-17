<template>
  <iframe
    ref="fastWasmPlayer"
    frameborder="0"
    class="video-container"
    :src="videoUrl"
    allowfullscreen
    marginwidth="0"
    marginheight="0"
    scrolling="no"
  ></iframe>
</template>
<script lang="ts" setup>
import { ref, watchEffect, onMounted, onBeforeUnmount } from 'vue'
import { metaPlayerProps, metaPlayerEmits } from './meta-player'

defineOptions({
  name: 'LivMetaPlayer'
})

const props = defineProps(metaPlayerProps)

const emit = defineEmits(metaPlayerEmits)

// 播放器DOM
const fastWasmPlayer = ref(null)
// 播放器实例
const iframePlayer = ref(null)

const metaPlayerUrl =
  'https://vcp.21cn.com/metaplayer/static/template/2.0.0/player.html?appId=3891e8&streamSrc='

// 视频播放地址
const videoUrl = ref('')

onMounted(() => {
  watchEffect(initPlayer)
})

onBeforeUnmount(() => {
  videoUrl.value = ''
})

// 初始化metaPlayer播放器
function initPlayer() {
  if (window.frameElement && window.frameElement.tagName === 'IFRAME') {
    // 组件嵌套在iframe中
    emit('error', 'metaPlayer播放器不支持嵌套在iframe中')
  } else {
    const { url, protocol } = props.urls[0]
    switch (protocol) {
      case 'tyyyhls':
        videoUrl.value = metaPlayerUrl + encodeURIComponent(url)
        break
      case 'tyyyrtsp':
        videoUrl.value = metaPlayerUrl + encodeURIComponent(url) + '&playerType=1'
        break
      default:
        const n: never = protocol
        throw new Error(`MetaPlayer: Unsupported protocol ${protocol}`)
    }
  }
}

/**
 * 截图方法
 */
function screenShot() {
  return new Promise((resolve, reject) => {
    const { protocol } = props.urls[0]
    switch (protocol) {
      case 'tyyyhls':
        // metaPlayer工具文件服务端地址 "https://vcp.21cn.com/metaplayer/static/template/2.0.0/lib/mpIframe-min.js"
        iframePlayer.value = new MpIframe(fastWasmPlayer.value)
        iframePlayer.value.getScreenshot(1, (data) => {
          resolve(data.path)
        })
        break
      case 'tyyyrtsp':
        reject({ msg: '插件模式不支持截图' })
        break
      default:
        const n: never = protocol
        reject({ msg: `MetaPlayer: Unsupported protocol ${n}` })
    }
  })
}

defineExpose({
  screenShot
})
</script>
<style lang="scss" scoped>
.video-container {
  width: 100% !important;
  height: 100% !important;
  background-color: black;
}
</style>
