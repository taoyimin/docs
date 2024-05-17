<template>
  <div v-loading="loading">
    <el-tabs v-model="activeTab" class="demo-tabs">
      <el-tab-pane label="基本信息" :name="TabNameMap.first"
        ><liv-data-descriptions :fields="descriptionsFields" :data="detailData">
          <template v-slot:imageUrl="{ data }">
            <div class="custom-img-wrap" style="margin-top: 5px">
              <div
                class="img-info"
                v-for="image in getFileUrlList(data.imageUrl)"
              >
                <img class="status-icon" :src="chuliqian" />
                <el-image
                  :key="image"
                  :preview-src-list="[image]"
                  :src="image"
                  preview-teleported
                />
              </div>
            </div>
          </template> </liv-data-descriptions
      ></el-tab-pane>
      <el-tab-pane label="事件流程" :name="TabNameMap.second">
        <el-scrollbar max-height="50vh" ref="columnScrollBar">
          <div class="widget-box" id="widget-box-2">
            <div class="widget-body">
              <div class="widget-main">
                <!-- 横向时间线 -->
                <ul class="row-timeline clearfix">
                  <li id="step1" class="step active">
                    <div class="timeline-icon">
                      <b>上报</b>
                    </div>
                  </li>
                  <li id="step2" class="step active">
                    <div class="timeline-icon">
                      <b>流转</b>
                    </div>
                  </li>
                  <li
                    id="step3"
                    class="step"
                    :class="{
                      active: detailData.status >= eventStatusMap.chuli
                    }"
                  >
                    <div class="timeline-icon">
                      <b>处理中</b>
                    </div>
                  </li>
                  <li
                    id="step4"
                    class="step"
                    :class="{
                      active: detailData.status >= eventStatusMap.pingjia
                    }"
                  >
                    <div class="timeline-icon">
                      <b>待评价</b>
                    </div>
                  </li>
                  <li
                    id="step5"
                    class="step"
                    :class="{
                      active: detailData.status >= eventStatusMap.banjie
                    }"
                  >
                    <div class="timeline-icon">
                      <b>办结</b>
                    </div>
                  </li>
                </ul>
                <!-- 纵向时间线 -->
                <ul class="column-timeline clearfix" id="eventProcess">
                  <li
                    class="step active"
                    v-for="(eventProcess, index) in eventProcessList"
                    :key="index"
                  >
                    <div class="timeline-item-content">
                      <div>
                        <span class="btn-radius">{{
                          eventProcess.dealTypeName
                        }}</span>
                      </div>
                      <!-- 上报 -->
                      <div
                        v-if="
                          eventProcess.dealType === eventProcessTypeMap.shangbao
                        "
                      >
                        <span
                          ><b>上报时间：</b>{{ eventProcess.dealTime }}</span
                        >
                        <span><b>上报人：</b>{{ eventProcess.realName }}</span>
                        <span v-if="eventProcess.pointList?.length > 0">
                          <b>积分：</b>
                          <span
                            style="padding-right: 8px"
                            v-for="(eventPoint, i) in eventProcess.pointList"
                            :key="i"
                          >
                            <template v-if="eventPoint.realName">
                              {{ eventPoint.realName }}
                              <template v-if="eventPoint.point > 0">
                                +{{ eventPoint.point }}
                              </template>
                              <template v-else>
                                {{ eventPoint.point }}
                              </template>
                            </template>
                          </span>
                        </span>
                        <div v-show="eventProcess.imageUrl">
                          <span><b class="text-green2">附件：</b></span>
                          <div class="custom-img-wrap" style="margin-top: 5px">
                            <div
                              class="img-info"
                              v-for="image in getFileUrlList(
                                eventProcess.imageUrl
                              )"
                            >
                              <img class="status-icon" :src="chuliqian" />
                              <el-image
                                :key="image"
                                :preview-src-list="[image]"
                                :src="image"
                                preview-teleported
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- 流转 -->
                      <div
                        v-if="
                          eventProcess.dealType === eventProcessTypeMap.liuzhuan
                        "
                      >
                        <span
                          ><b>流转时间：</b>{{ eventProcess.dealTime }}</span
                        >
                        <span><b>操作人：</b>{{ eventProcess.realName }}</span>
                        <span
                          ><b>流转网格：</b
                          >{{ eventProcess.roamGridName }}</span
                        >
                      </div>
                      <!-- 处理 -->
                      <template
                        v-if="
                          eventProcess.dealType === eventProcessTypeMap.chuli
                        "
                      >
                        <div>
                          <span
                            ><b>处理时间：</b>{{ eventProcess.dealTime }}</span
                          >
                          <span
                            ><b>处理人：</b>{{ eventProcess.realName }}
                            <template v-if="eventProcess.userGridName">
                              （{{ eventProcess.userGridName }}）
                            </template>
                          </span>
                          <span
                            ><b>处理类型：</b
                            >{{ eventProcess.dealResultName }}</span
                          >
                          <span
                            ><b>耗时：</b
                            >{{ getTimeParse(eventProcess.timeConsume) }}</span
                          >
                          <span v-if="eventProcess.pointList?.length > 0">
                            <b>积分：</b>
                            <span
                              style="padding-right: 8px"
                              v-for="(eventPoint, i) in eventProcess.pointList"
                              :key="i"
                            >
                              <template v-if="eventPoint.realName">
                                {{ eventPoint.realName }}
                                <template v-if="eventPoint.point > 0">
                                  +{{ eventPoint.point }}
                                </template>
                                <template v-else>
                                  {{ eventPoint.point }}
                                </template>
                              </template>
                            </span>
                          </span>
                        </div>
                        <div v-show="eventProcess.imageUrl">
                          <span><b class="text-green2">附件：</b></span>
                          <div class="custom-img-wrap" style="margin-top: 5px">
                            <div
                              class="img-info"
                              v-for="image in getFileUrlList(
                                eventProcess.imageUrl
                              )"
                            >
                              <img class="status-icon" :src="chulihou" />
                              <el-image
                                :key="image"
                                :preview-src-list="[image]"
                                :src="image"
                                preview-teleported
                              />
                            </div>
                          </div>
                        </div>
                      </template>
                      <!-- 指派 -->
                      <div
                        v-if="
                          eventProcess.dealType === eventProcessTypeMap.zhipai
                        "
                      >
                        <span
                          ><b>指派时间：</b>{{ eventProcess.dealTime }}</span
                        >
                        <span
                          ><b>管护员：</b>{{ eventProcess.appointUserName }}
                          <template v-if="eventProcess.userGridName">
                            （{{ eventProcess.userGridName }}）
                          </template>
                        </span>
                        <span v-if="eventProcess.pointList?.length > 0">
                          <b>积分：</b>
                          <span
                            style="padding-right: 8px"
                            v-for="(eventPoint, i) in eventProcess.pointList"
                            :key="i"
                          >
                            <template v-if="eventPoint.realName">
                              {{ eventPoint.realName }}
                              <template v-if="eventPoint.point > 0">
                                +{{ eventPoint.point }}
                              </template>
                              <template v-else>
                                {{ eventPoint.point }}
                              </template>
                            </template>
                          </span>
                        </span>
                      </div>
                      <!-- 督办 -->
                      <div
                        v-if="
                          eventProcess.dealType === eventProcessTypeMap.duban
                        "
                      >
                        <span
                          ><b>督办时间：</b>{{ eventProcess.dealTime }}</span
                        >
                        <span
                          ><b>督办人：</b>{{ eventProcess.realName }}
                          <template v-if="eventProcess.userGridName">
                            （{{ eventProcess.userGridName }}）
                          </template></span
                        >
                        <span v-if="eventProcess.pointList?.length > 0">
                          <b>积分：</b>
                          <span
                            style="padding-right: 8px"
                            v-for="(eventPoint, i) in eventProcess.pointList"
                            :key="i"
                          >
                            <template v-if="eventPoint.realName">
                              {{ eventPoint.realName }}
                              <template v-if="eventPoint.point > 0">
                                +{{ eventPoint.point }}
                              </template>
                              <template v-else>
                                {{ eventPoint.point }}
                              </template>
                            </template>
                          </span>
                        </span>
                      </div>
                      <!-- 提醒 -->
                      <div
                        v-if="
                          eventProcess.dealType === eventProcessTypeMap.cuiban
                        "
                      >
                        <span
                          ><b>提醒时间：</b>{{ eventProcess.dealTime }}</span
                        >
                        <span
                          ><b>提醒人：</b>{{ eventProcess.realName }}
                          <template v-if="eventProcess.userGridName">
                            （{{ eventProcess.userGridName }}）
                          </template></span
                        >
                        <span
                          ><b>提醒网格：</b
                          >{{ eventProcess.superviseRemindGridName }}</span
                        >
                      </div>
                      <!-- 评价 -->
                      <div
                        v-if="
                          eventProcess.dealType === eventProcessTypeMap.pingjia
                        "
                      >
                        <span
                          ><b>评价时间：</b>{{ eventProcess.dealTime }}</span
                        >
                        <span><b>评价人：</b>{{ eventProcess.realName }}</span>
                        <span
                          ><b>评价类型：</b
                          >{{ eventProcess.evaluateTypeName }}</span
                        >
                        <span
                          ><b>耗时：</b
                          >{{ getTimeParse(eventProcess.timeConsume) }}</span
                        >
                        <span v-if="eventProcess.pointList?.length > 0">
                          <b>积分：</b>
                          <span
                            style="padding-right: 8px"
                            v-for="(eventPoint, i) in eventProcess.pointList"
                            :key="i"
                          >
                            <template v-if="eventPoint.realName">
                              {{ eventPoint.realName }}
                              <template v-if="eventPoint.point > 0">
                                +{{ eventPoint.point }}
                              </template>
                              <template v-else>
                                {{ eventPoint.point }}
                              </template>
                            </template>
                          </span>
                        </span>
                      </div>
                      <!-- 归档 -->
                      <div
                        v-if="
                          eventProcess.dealType === eventProcessTypeMap.guidan
                        "
                      >
                        <span>
                          <b>归档时间：</b>
                          {{ eventProcess.dealTime }}
                        </span>
                        <span>
                          <b>归档人：</b>
                          {{ eventProcess.realName }}
                          <template v-if="eventProcess.userGridName">
                            ({{ eventProcess.userGridName }})
                          </template></span
                        >
                      </div>

                      <div>
                        <b
                          >详细描述：
                          <p class="bg-gray-textarea no-bg">
                            {{ eventProcess.desc }}
                          </p>
                        </b>
                      </div>
                    </div>
                  </li>
                  <li class="step active" v-if="$slots.editForm">
                    <slot name="editForm"></slot>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { ElScrollbar } from "element-plus";
import { eventDetailProps, descriptionsFields } from "./event-detail";
import LivDataDescriptions from "../../data-descriptions/src/data-descriptions.vue";
import {
  getEventDetail,
  getEventProcess,
  type Event,
  type EventProgress
} from "@szxc/apis";
import { getTimeParse, getFileUrlList } from "@szxc/utils";
import { eventStatusMap, eventProcessTypeMap } from "@szxc/utils";
import chuliqian from "../../assets/chuliqian.png";
import chulizhong from "../../assets/chulizhong.png";
import chulihou from "../../assets/chulihou.png";

defineOptions({
  name: "LivEventDetail"
});
const props = defineProps(eventDetailProps);

enum TabNameMap {
  first,
  second
}

// 当前选中的tab
const activeTab = ref(TabNameMap.first);
// 事件详情数据
const detailData = ref<Partial<Event>>({});
// 事件流程数据
const eventProcessList = ref<EventProgress[]>([]);

// 纵向滚动条
const columnScrollBar = ref<InstanceType<typeof ElScrollbar>>();

// 详情加载提示
const loading = ref(false);

watch(
  () => props.eventId,
  async (newId, oldId) => {
    if (newId && newId !== oldId) {
      try {
        loading.value = true;
        activeTab.value = TabNameMap.first;
        columnScrollBar.value?.setScrollTop(0);
        detailData.value = newId ? await getEventDetail({ id: newId }) : {};
        eventProcessList.value = newId
          ? await getEventProcess({ eventId: newId })
          : [];
        loading.value = false;
      } catch (err) {
        detailData.value = {};
        eventProcessList.value = [];
        loading.value = false;
        console.log("event detail", err);
      }
    }
  },
  {
    immediate: true
  }
);
</script>

<style lang="scss" scoped>
.el-image {
  margin-right: 10px;
  width: 100px;
  height: 100px;
}

:deep(.el-image) {
  img {
    object-fit: cover;
  }
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.clearfix {
  zoom: 1;
  &::after {
    content: ".";
    display: block;
    clear: both;
    font-size: 0;
    overflow: hidden;
    height: 0;
  }
}
.widget-header {
  color: #333;
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
  margin: 20px 0;
}

.widget-box {
  overflow: hidden;
}

.widget-body {
  padding: 0 20px;
}

/* 横向时间线 */
.row-timeline {
  margin: 0;
  padding: 0;
  .step {
    height: 50px;
    float: left;
    &:first-child {
      width: 15px;
      & > label {
        left: 50%;
        transform: translateX(-50%);
        min-width: 60px;
      }
    }
    & + .step {
      width: calc((100% - 15px) / 4);
      text-align: right;
      display: flex;
      justify-content: flex-end;
      position: relative;
    }
    & + .step::before {
      position: absolute;
      content: "";
      width: calc(100% - 15px);
      height: 3px;
      background-color: #ddd;
      top: 6px;
      left: 0;
      z-index: 1;
    }
    &.active {
      &::before {
        background-color: var(--el-color-primary);
      }
      & > b {
        color: var(--el-color-primary);
      }
      .timeline-icon {
        border-color: var(--el-color-primary);

        b {
          color: var(--el-color-primary);
        }
      }
    }
    .timeline-icon {
      width: 15px;
      height: 15px;
      border-radius: 100%;
      background-color: #fff;
      border: 5px solid #ddd;
      position: relative;
      b {
        position: absolute;
        width: 100px;
        text-align: center;
        display: block;
        left: 50%;
        transform: translateX(-50%);
        top: 15px;
      }
    }
  }
}

/* 纵向时间线 */
.column-timeline {
  margin: 10px 0 0 10px;
  padding: 0;
  .step {
    position: relative;
    padding-left: 20px;
    padding-bottom: 20px;
  }
}

.column-timeline .timeline-item-content > div + div {
  margin-top: 10px;
}

.column-timeline li:before {
  position: absolute;
  content: "";
  width: 5px;
  height: 5px;
  box-sizing: content-box;
  border-radius: 100%;
  background-color: #fff;
  border: 5px solid #ddd;
  top: 7px;
  left: -7px;
  z-index: 2;
}

.column-timeline li:not(:last-child):after {
  position: absolute;
  content: "";
  width: 1px;
  height: 100%;
  background-color: #ddd;
  top: 7px;
  left: 0;
  z-index: 1;
}

.column-timeline li.active:before {
  border-color: var(--el-color-primary);
}

.timeline-item-content > div > span {
  margin-right: 15px;
}
.timeline-item-content > div > span b {
  margin-right: 5px;
}
.timeline-item-content .btn-radius {
  border-radius: 20px;
  padding: 5px 25px;
  border: none;
  font-size: 12px;
  background-color: var(--el-color-primary);
  color: white;
}
.bg-gray-textarea {
  width: 100%;
  margin-top: 5px;
  background-color: #eee;
  border: none;
  color: #333;
  padding: 5px !important;
}
.bg-gray-textarea:focus {
  width: 100%;
  margin-top: 5px;
  background-color: #eee;
  border: none;
  color: #333;
}
.timeline-item-content textarea.no-bg {
  color: var(--el-color-primary);
  font-weight: bold;
  padding: 0;
  text-indent: 0.8cm;
}

.step {
  :deep() {
    .el-row {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
  }
}

.timeline-item-content {
}

.custom-img-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .img-info {
    position: relative;
  }
  .status-icon {
    position: absolute;
    top: 0;
    right: 4px;
    z-index: 2;
    width: 46px;
    height: 41px;
  }
}
</style>
