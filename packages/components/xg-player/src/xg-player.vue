<template>
  <div :id="containerId" class="video-container"></div>
</template>
<script lang="ts" setup>
import { ref, computed, watchEffect, onMounted, onBeforeUnmount, nextTick } from 'vue'
import Player, { I18N, Events, type IPlayerOptions } from 'xgplayer'
import ScreenShot from 'xgplayer/es/plugins/screenShot'
import LivePreset from 'xgplayer/es/presets/live'
import ZH from 'xgplayer/es/lang/zh-cn'
import TitlePlugin from './plugins/titlePlugin'
import 'xgplayer/dist/index.min.css'
import { xgPlayerProps, xgPlayerEmits, type XgPlayerNetworkOptions } from './xg-player'
import { getMonitorUrl } from '@szxc/apis'

const poweredByWujie = window.__POWERED_BY_WUJIE__

defineOptions({
  name: 'LivXgPlayer'
})

const props = defineProps(xgPlayerProps)

const emit = defineEmits(xgPlayerEmits)

// 容器id
const containerId = computed(() => {
  return `xgPlayer${props.monitor?.id}`
})

// 西瓜播放器实例
const player = ref<any>(null)

// 保活计时器
const keepAliveTimer = ref(null)

// 播放网络配置
const networkOptions = computed<XgPlayerNetworkOptions>(() => {
  return Object.assign(
    {
      retryCount: 3, // 重试次数
      retryDelay: 1000, // 每次重试间隔
      loadTimeout: 15000, // 请求超时时间
      keepAliveInterval: 0 // 保活间隔时间
    },
    props.networkOptions
  )
})

onMounted(() => {
  I18N.use(ZH)
  watchEffect(() => {
    if (props.monitor && props.monitor.id && props.urls && props.urls.length > 0) {
      nextTick(initPlayer)
    }
  })
})

onBeforeUnmount(() => {
  if (keepAliveTimer.value) {
    clearInterval(keepAliveTimer.value)
    keepAliveTimer.value = null
  }
  player.value?.destroy()
  player.value = null
})

// 初始化西瓜播放器
async function initPlayer() {
  const params: IPlayerOptions = {
    id: containerId.value,
    url: props.urls[0].url,
    width: '100%',
    height: '100%',
    videoFillMode: 'fill',
    isLive: true,
    autoplayMuted: true,
    autoplay: true,
    presets: [LivePreset],
    videoAttributes: {
      crossOrigin: 'anonymous'
    },
    definition: {
      list: props.urls.map((item) => {
        return {
          definition: item.resolution,
          url: item.url,
          text: item.resolution
        }
      })
    },
    lang: 'zh-cn',
    videoTitle: props.monitor.deviceName,
    // 禁用样式全屏、倍速播放
    ignores: ['cssfullscreen', 'playbackrate'],
    // 如果集成在微前端框架中，则手动传入图标，解决图标丢失的问题
    icons: poweredByWujie
      ? {
          play: `<svg xmlns="http://www.w3.org/2000/svg" class="play xg-icon-play" width="28" height="40" viewBox="3 -4 28 40">
              <path fill="#fff" transform="scale(0.0320625 0.0320625)" d="M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z"></path>
             </svg>`,
          pause: `<svg xmlns="http://www.w3.org/2000/svg" class="pause xg-icon-pause" width="28" height="40" viewBox="3 -4 28 40">
                <path fill="#fff" transform="scale(0.0320625 0.0320625)" d="M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"></path>
              </svg>`,
          volumeMuted: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 -10 28 40" class="xg-volume-mute">
                      <path fill="#fff" transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>
                      <path fill="#fff" transform="scale(0.0220625 0.0220625)" d="M920.4 439.808l-108.544-109.056-72.704 72.704 109.568 108.544-109.056 108.544 72.704 72.704 108.032-109.568 108.544 109.056 72.704-72.704-109.568-108.032 109.056-108.544-72.704-72.704-108.032 109.568z"></path>
                    </svg>`,
          fullscreen: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="2 -4 28 40" class="xg-get-fullscreen">
                    <path fill="#fff" transform="scale(0.0320625 0.0320625)" d="M598 214h212v212h-84v-128h-128v-84zM726 726v-128h84v212h-212v-84h128zM214 426v-212h212v84h-128v128h-84zM298 598v128h128v84h-212v-212h84z"></path>
                   </svg>`,
          volumeSmall: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 -10 28 40" class="xg-volume-small">
                      <path fill="#fff" transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>
                      <path fill="#fff" transform="scale(0.0220625 0.0220625)" d="M795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z"></path>
                    </svg>`,
          exitFullscreen: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="2 -4 28 40" class="xg-exit-fullscreen">
                        <path fill="#fff" transform="scale(0.0320625 0.0320625)" d="M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z"></path>
                       </svg>`,
          volumeLarge: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 -10 28 40" class="xg-volume">
                      <path fill="#fff" transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>
                      <path fill="#fff" transform="scale(0.0220625 0.0220625)" d="M940.632 837.632l-72.192-72.192c65.114-64.745 105.412-154.386 105.412-253.44s-40.299-188.695-105.396-253.424l-0.016-0.016 72.192-72.192c83.639 83.197 135.401 198.37 135.401 325.632s-51.762 242.434-135.381 325.612l-0.020 0.020zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z"></path>
                    </svg>`,
          startPlay: `<svg xmlns="http://www.w3.org/2000/svg" class="play xg-icon-play" width="28" height="40" viewBox="3 -4 28 40">
                    <path fill="#fff" transform="scale(0.0320625 0.0320625)" d="M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z"></path>
                  </svg>`,
          startPause: `<svg xmlns="http://www.w3.org/2000/svg" class="pause xg-icon-pause" width="28" height="40" viewBox="3 -4 28 40">
                    <path fill="#fff" transform="scale(0.0320625 0.0320625)" d="M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"></path>
                   </svg>`,
          replay: `<svg xmlns="http://www.w3.org/2000/svg" class="xgplayer-replay-svg" viewBox="0 0 78 78" width="78" height="78">
                <path fill="#fff" transform="matrix(1, 0, 0, 1, 20, 20)" d="M8.22708362,13.8757234 L11.2677371,12.6472196 C11.7798067,12.4403301 12.3626381,12.6877273 12.5695276,13.1997969 L12.9441342,14.1269807 C13.1510237,14.6390502 12.9036264,15.2218816 12.3915569,15.4287712 L6.8284538,17.6764107 L5.90126995,18.0510173 C5.38920044,18.2579068 4.80636901,18.0105096 4.5994795,17.49844 L1.97723335,11.0081531 C1.77034384,10.4960836 2.0177411,9.91325213 2.52981061,9.70636262 L3.45699446,9.33175602 C3.96906396,9.12486652 4.5518954,9.37226378 4.75878491,9.88433329 L5.67885163,12.1615783 C7.99551726,6.6766934 13.3983951,3 19.5,3 C27.7842712,3 34.5,9.71572875 34.5,18 C34.5,26.2842712 27.7842712,33 19.5,33 C15.4573596,33 11.6658607,31.3912946 8.87004692,28.5831991 C8.28554571,27.9961303 8.28762719,27.0463851 8.87469603,26.4618839 C9.46176488,25.8773827 10.4115101,25.8794641 10.9960113,26.466533 C13.2344327,28.7147875 16.263503,30 19.5,30 C26.127417,30 31.5,24.627417 31.5,18 C31.5,11.372583 26.127417,6 19.5,6 C14.4183772,6 9.94214483,9.18783811 8.22708362,13.8757234 Z"></path>
               </svg>`,
          loadingIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-5 -5 110 110">
                      <path d="M100,50A50,50,0,1,1,50,0" stroke-width="5" stroke="#ddd" stroke-dasharray="236" fill="none"></path>
                    </svg>`
        }
      : {}
  }
  const netOptions: XgPlayerNetworkOptions = Object.assign(
    networkOptions.value,
    networkOptions.value[props.monitor.deviceModel]
  )
  if (netOptions.keepAliveInterval !== 0) {
    keepAliveTimer.value = setInterval(() => {
      // 保活
      getMonitorUrl({ id: props.monitor.id })
    }, netOptions.keepAliveInterval)
  }
  const nativeHlsSupported =
    document.createElement('video').canPlayType('application/vnd.apple.mpegurl') !== ''
  const { protocol } = props.urls[0]
  switch (protocol) {
    case 'hls':
    case 'hlss':
      if (nativeHlsSupported) {
        // 原生支持hls播放
        params.plugins = [TitlePlugin, ScreenShot]
      } else {
        const { default: HlsPlugin } = await import('xgplayer-hls')
        if (HlsPlugin.isSupported()) {
          // 使用hls插件播放
          params.plugins = [TitlePlugin, ScreenShot, HlsPlugin]
          params.hls = netOptions
        } else {
          emit('error', '当前环境不支持播放Hls视频流')
        }
      }
      break
    case 'hlsjs':
      if (nativeHlsSupported) {
        // 原生支持hls播放
        params.plugins = [TitlePlugin, ScreenShot]
      } else {
        const { default: HlsJsPlugin } = await import('xgplayer-hls.js')
        if (HlsJsPlugin.isSupported()) {
          // 使用hls.js插件播放
          params.plugins = [TitlePlugin, ScreenShot, HlsJsPlugin]
          params.hlsJsPlugin = netOptions
        } else {
          emit('error', '当前环境不支持播放Hls视频流')
        }
      }
      break
    case 'flv':
      // eslint-disable-next-line no-case-declarations
      const { default: FlvPlugin } = await import('xgplayer-flv')
      if (FlvPlugin.isSupported()) {
        params.plugins = [TitlePlugin, ScreenShot, FlvPlugin]
        params.flv = netOptions
      } else {
        emit('error', '当前环境不支持播放Flv视频流')
      }
      break
    default:
      const n: never = protocol
      throw new Error(`XgPlayer: Unsupported protocol ${n}`)
  }
  player.value = new Player(params)
  player.value.on(Events.ERROR, (error) => {
    console.debug('xgplayer error:', error)
    emit('error', '播放失败')
  })
  player.value.usePluginHooks('titlePlugin', 'titleDoubleClick', (_plugin, ..._args) => {
    alertInfo()
    // 阻止插件默认逻辑
    return false
  })
}

async function alertInfo() {
  const { default: HlsPlugin } = await import('xgplayer-hls')
  const { default: HlsJsPlugin } = await import('xgplayer-hls.js')
  const { default: FlvPlugin } = await import('xgplayer-flv')
  const nativeHlsSupported =
    document.createElement('video').canPlayType('application/vnd.apple.mpegurl') !== ''
  if (window.isSecureContext && navigator.clipboard) {
    navigator.clipboard.writeText(props.urls[0].url)
  }
  const info = []
  info.push(`浏览器信息: ${navigator.userAgent}`)
  info.push(`H265解码支持: ${Player.isHevcSupported()}`)
  info.push(`FLV插件支持: ${FlvPlugin.isSupported()}`)
  info.push(`HLSJS插件支持: ${HlsJsPlugin.isSupported()}`)
  info.push(`HLS插件支持: ${HlsPlugin.isSupported()}`)
  info.push(`HLS原生支持: ${nativeHlsSupported}`)
  info.push(`播放地址: ${props.urls[0].url}`)
  info.push(`监控信息: ${JSON.stringify(props.monitor)}`)
  alert(info.join('\n'))
}

function screenShot() {
  return player.value.getPlugin('screenshot').shot()
}

defineExpose({
  screenShot
})
</script>
<style lang="scss" scoped>
.video-container {
  width: 100%;
  height: 100%;
  background-color: black;
}
</style>
