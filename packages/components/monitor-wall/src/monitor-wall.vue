<template>
  <div class="container">
    <div class="header" v-if="controls">
      <slot v-if="$slots['header']" name="header"></slot>
      <div v-else></div>
      <div class="controls-container">
        <el-popover
          v-model:visible="popoverVisible"
          placement="left-end"
          trigger="click"
          width="auto"
          :teleported="false"
        >
          <el-radio-group v-model="radioIndex">
            <el-row>
              <el-radio v-for="(radio, index) in splitOptions" :key="index" :label="index">{{
                radio.label
              }}</el-radio>
            </el-row>
          </el-radio-group>
          <template #reference>
            <el-button class="controls-button" :icon="CaretLeft">{{
              radioIndex === -1 ? `${row * column}分屏` : splitOptions[radioIndex].label
            }}</el-button>
          </template>
        </el-popover>
        <el-button class="controls-button" @click="current = lastPage ? 1 : current + 1"
          >换一批</el-button
        >
      </div>
    </div>
    <el-row v-for="r in row" :key="'row' + r" :gutter="gap" type="flex" style="flex: 1">
      <el-col
        v-for="c in column"
        :key="'col' + c"
        :span="24 / column"
        :style="{ marginBottom: r == row ? '0px' : `${gap}px` }"
        style="position: relative"
      >
        <div class="monitor-name" v-if="(r - 1) * column + c - 1 < videoList.length">
          <span style="color: rgba(0, 0, 0, 0); text-shadow: none">
            {{ videoList[(r - 1) * column + c - 1].deviceNo }}
          </span>
          <br />
          {{ videoList[(r - 1) * column + c - 1].deviceName }}
        </div>
        <monitor-player
          v-if="(r - 1) * column + c - 1 < videoList.length"
          :id="videoList[(r - 1) * column + c - 1].id"
          :key="videoList[(r - 1) * column + c - 1].id"
        >
        </monitor-player>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, watchEffect, computed } from 'vue'
import { CaretLeft } from '@element-plus/icons-vue'
import { findIndex } from 'lodash-es'
import { type Monitor, getMonitorPage } from '@szxc/apis'
import { monitorWallProps } from './monitor-wall'
import MonitorPlayer from '../../monitor-player/src/monitor-player.vue'

defineOptions({
  name: 'LivMonitorWall'
})

const props = defineProps(monitorWallProps)

// 分屏切换弹窗是否可见
const popoverVisible = ref(false)

// 分屏选中下标
const radioIndex = computed<number>({
  get() {
    return findIndex(props.splitOptions, (option) => {
      return option.row === row.value && option.column === column.value
    })
  },
  set(value) {
    popoverVisible.value = false
    current.value = 1
    row.value = props.splitOptions[value].row
    column.value = props.splitOptions[value].column
  }
})

// 当前页
const current = ref(1)

// 行数
const row = defineModel<number>('row', {
  default: 2
})

// 列数
const column = defineModel<number>('column', {
  default: 2
})

// 是否是最后一页
const lastPage = ref(false)

// 监控列表
const videoList = ref<Monitor[]>([])

watch(
  [() => props.deviceModel, () => props.deviceType, () => props.gridCode, () => props.status],
  () => (current.value = 1)
)

watchEffect(loadVideList)

// 加载视频数据集合
function loadVideList() {
  getMonitorPage({
    current: current.value,
    size: column.value * row.value,
    deviceModel: props.deviceModel,
    deviceType: props.deviceType,
    gridCode: props.gridCode,
    status: props.status
  }).then((res) => {
    lastPage.value = res.current * res.size >= res.total
    videoList.value = res.records
  })
}

// 上一页
function previous() {
  if (current.value > 1) {
    current.value--
  }
}

// 下一页
function next() {
  if (lastPage.value) {
    current.value = 1
  } else {
    current.value++
  }
}

// 刷新当前页
function refresh() {
  loadVideList()
}

defineExpose({
  previous,
  next,
  refresh
})
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    .controls-container {
      display: flex;
      flex-direction: row;

      .controls-button {
        background-color: var(--el-color-primary);
        margin-left: 2px;
        height: height(40);
        color: white;
        border: none;
        width: 100px;
        border-radius: 12px 12px 0px 0px;
        font-family: Alibaba PuHuiTi Medium;
        font-size: height(18);
        font-weight: 500;
        text-shadow: 1px 1px 6px rgba(3, 34, 36, 0.72);
        cursor: pointer;

        &:hover {
          background-color: var(--el-color-primary-light-1);
        }
      }

      :deep(.el-button) {
        .el-icon {
          font-size: 1.4rem;
        }

        & [class*='el-icon'] + span {
          margin-left: 0;
        }
      }
    }
  }

  .monitor-name {
    position: absolute;
    bottom: 5px;
    left: 50%;
    background: rgba(0, 0, 0, 0);
    color: #eee;
    z-index: 9999;
    transform: translate(-50%);
    text-shadow: 2px 2px 2px #000;
    line-height: 12px;
    font-size: 12px;
    text-align: center;
  }
}
</style>
