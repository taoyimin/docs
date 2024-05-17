<template>
  <div
    class="monitor-player-container"
    v-loading="loading"
    element-loading-background="transparent"
  >
    <template v-if="monitor">
      <!-- metaPlayer播放器 -->
      <meta-player
        v-if="protocol === 'tyyyhls' || protocol === 'tyyyrtsp'"
        ref="playerRef"
        :monitor="monitor"
        :urls="urls"
      />
      <!-- xgPlayer -->
      <xg-player
        v-else-if="
          protocol === 'hls' || protocol === 'hlss' || protocol === 'hlsjs' || protocol === 'flv'
        "
        ref="playerRef"
        :monitor="monitor"
        :urls="urls"
        @error="errorMessage = $event"
      />
    </template>
    <div v-if="errorMessage" class="fail-message-container">
      <div v-if="errorMessage != ''" class="error-message">
        {{ errorMessage }}
      </div>
      <el-button type="primary" @click="refreshClick">重新加载</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue'
import { monitorPlayerProps, type MonitorProtocol } from './monitor-player'
import { getMonitorUrl, type Monitor, type MonitorUrl } from '@szxc/apis'
import { matchIncludeZh } from '@szxc/utils'
import XgPlayer from '../../xg-player/src/xg-player.vue'
import MetaPlayer from '../../meta-player/src/meta-player.vue'

defineOptions({
  name: 'LivMonitorPlayer'
})

const props = defineProps(monitorPlayerProps)

const playerRef = ref<any>(null)

// 错误信息
const errorMessage = ref<string>('')
// 加载提示
const loading = ref<boolean>(false)
// 视频详情
const monitor = ref<Monitor | null>(null)
// 播放地址列表
const urls = ref<MonitorUrl[]>([])

// 视频流协议
const protocol = computed<MonitorProtocol | null>(() => {
  if (urls.value && urls.value.length !== 0) {
    return urls.value[0].protocol
  } else {
    return null
  }
})

watchEffect(loadMonitorInfo)

function loadMonitorInfo() {
  if (!props.id) {
    monitor.value = null
    return
  }
  errorMessage.value = ''
  loading.value = true
  getMonitorUrl({
    id: props.id
  })
    .then((res) => {
      if (res.success) {
        monitor.value = res.info
        urls.value = res.urls
      } else {
        errorMessage.value = res.errorMessage
      }
    })
    .catch((error) => {
      if (error && error.msg && matchIncludeZh(error.msg)) {
        errorMessage.value = error.msg
      } else if (error?.message?.includes('timeout')) {
        errorMessage.value = '获取播放地址超时'
      } else {
        errorMessage.value = '获取播放地址失败'
      }
    })
    .finally(() => {
      loading.value = false
    })
}

function refreshClick() {
  // if (this.$listeners.refresh) {
  //   //如果外部监听了refresh事件,则触发
  //   this.$emit("refresh", this.id);
  // } else {
  //   //如果外部没监听，则重新加载当前视频
  //   this.releaseResource();
  //   this.errorMessage = "";
  //   this.initPlayer();
  // }
  errorMessage.value = ''
  loadMonitorInfo()
}

function screenShot() {
  return playerRef.value?.screenShot()
}

defineExpose({
  screenShot
})
</script>
<style lang="scss" scoped>
.monitor-player-container {
  width: 100%;
  height: 100%;
  background-color: black;
  overflow: hidden;
  position: relative;

  .fail-message-container {
    width: 100% !important;
    height: 100% !important;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .error-message {
      color: white;
      font-size: 17px;
      font-weight: bold;
      padding: 15px 30px;
      text-align: center;
    }
  }

  .jsmpeg-canvas {
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  .jsmpeg-contorl {
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 99;
    bottom: 0px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    bottom: -10%;
    transition: bottom 0.2s ease-in-out;
    justify-content: space-between;

    .fullscreen-button {
      padding: 6px 16px;
      color: white;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
      justify-self: flex-end;
    }

    .definition-button-container {
      display: flex;
      flex-direction: row;
      justify-self: flex-start;
    }

    .definition-button {
      padding: 6px 16px;
      color: white;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
    }
  }

  &:hover .jsmpeg-contorl {
    bottom: 0;
  }

  //老天翼云眼加载信息居中
  :deep(.npplayer-loading-info) {
    left: 0;
    right: 0;
  }

  // 强制视频铺满屏幕
  :deep(video) {
    object-fit: fill !important;
  }

  // 老天翼云眼全屏
  :deep(canvas) {
    object-fit: fill !important;
    width: 100% !important;
    height: 100% !important;
    left: 0px !important;
    top: 0px !important;
  }
}
</style>
