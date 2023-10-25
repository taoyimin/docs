<template>
  <div class="event-detail-normal">
    <div class="tab-list">
      <div
        v-for="item in tabList"
        class="tab-item"
        :class="{ sel: item.value === currTab }"
        @click="tabChange(item.value)"
        :key="item.value"
      >
        {{ item.label }}
      </div>
    </div>
    <el-descriptions
      class="desc"
      contentClassName="description-content"
      labelClassName="description-label"
      v-show="currTab === '1'"
      :column="2"
      size="medium"
      border
    >
      <el-descriptions-item label="事件编号">
        {{ eventData.no }}
      </el-descriptions-item>
      <el-descriptions-item label="事件类型">
        {{ eventData.typeStr }}
      </el-descriptions-item>
      <el-descriptions-item label="事件标题">
        {{ eventData.typeStr + '事件' }}
      </el-descriptions-item>
      <el-descriptions-item label="事件内容">
        {{ eventData.desc }}
      </el-descriptions-item>
      <el-descriptions-item label="事件来源">
        {{ eventData.sourceStr }}
      </el-descriptions-item>
      <el-descriptions-item label="提交时间">
        {{ eventData.addTime }}
      </el-descriptions-item>
      <el-descriptions-item label="上报人">
        {{ eventData.contactName }}
      </el-descriptions-item>
      <el-descriptions-item label="联系电话">
        {{ eventData.contactTelephone }}
      </el-descriptions-item>
      <el-descriptions-item label="处理网格">
        {{ eventData.dealGridName }}
      </el-descriptions-item>
      <el-descriptions-item label="详细地址">
        {{ eventData.gridName }}
      </el-descriptions-item>
      <el-descriptions-item label="上传语音" :span="2"> 无 </el-descriptions-item>
      <el-descriptions-item label="上传附件" :span="2">
        <div v-if="eventData.imageUrl && eventData.imageUrl.length">
          <el-image
            v-for="imgSrc in eventData.imageUrl.split(',')"
            class="my-img"
            ref="myImg"
            :src="
              'http://106.225.129.34:8082/ruralLivingEnv/fileControll/downLoadFile?swfName=' +
              imgSrc
            "
            :preview-src-list="[
              'http://106.225.129.34:8082/ruralLivingEnv/fileControll/downLoadFile?swfName=' +
                imgSrc
            ]"
            :key="imgSrc"
          >
          </el-image>
        </div>
      </el-descriptions-item>
    </el-descriptions>
    <div class="flow-path-list" v-show="currTab === '2'">
      <template v-for="item in processList" :key="item.dealType">
        <!-- 上报 -->
        <div v-if="item.dealType === '1'" class="flow-path-item">
          <div class="flow-path-head">
            <i class="decorate"></i>
            <div class="flow-step">{{ item.dealTypeStr }}</div>
            <div class="flow-time">{{ item.dealTime }}</div>
          </div>
          <div class="flow-path-content">
            <div class="flow-info-line"><span>上报人：</span> {{ item.realName }}</div>
            <div class="flow-info-line" v-if="item.eventPointList.length">
              <span>积分：</span>
              {{
                item.eventPointList
                  .map((item) => {
                    return (
                      item.pointUserName +
                      (parseInt(item.point) > 0 ? '+' + item.point : item.point)
                    )
                  })
                  .join(' ')
              }}
            </div>
            <div class="flow-info-line"><span>详细描述：</span> {{ item.desc }}</div>
            <div class="flow-info-line">
              <span>附件：</span>{{ item.imageUrl || item.imageUrl === '' ? '无' : '' }}
            </div>
            <div v-if="item.imageUrl && item.imageUrl !== ''" class="flow-info-line">
              <el-image
                v-for="imgSrc in item.imageUrl.split(',')"
                class="my-img"
                ref="myImg"
                :src="
                  'http://106.225.129.34:8082/ruralLivingEnv/fileControll/downLoadFile?swfName=' +
                  imgSrc
                "
                :preview-src-list="[
                  'http://106.225.129.34:8082/ruralLivingEnv/fileControll/downLoadFile?swfName=' +
                    imgSrc
                ]"
                :key="imgSrc"
              >
              </el-image>
            </div>
          </div>
        </div>
        <!-- 流转 -->
        <div v-else-if="item.dealType === '8'" class="flow-path-item">
          <div class="flow-path-head">
            <i class="decorate"></i>
            <div class="flow-step">{{ item.dealTypeStr }}</div>
            <div class="flow-time">{{ item.dealTime }}</div>
          </div>
          <div class="flow-path-content">
            <div class="flow-info-line"><span>流转人：</span> {{ item.realName }}</div>
            <div class="flow-info-line"><span>流转网格：</span> {{ item.roamGridName }}</div>
            <div class="flow-info-line"><span>详细描述：</span> {{ item.desc }}</div>
          </div>
        </div>
        <!-- 处理 -->
        <div v-else-if="item.dealType === '2'" class="flow-path-item">
          <div class="flow-path-head">
            <i class="decorate"></i>
            <div class="flow-step">{{ item.dealTypeStr }}</div>
            <div class="flow-time">{{ item.dealTime }}</div>
          </div>
          <div class="flow-path-content">
            <div class="flow-info-line"><span>处理人：</span> {{ item.realName }}</div>
            <div class="flow-info-line" v-if="item.eventPointList.length">
              <span>积分：</span>
              {{
                item.eventPointList
                  .map((item) => {
                    return (
                      item.pointUserName +
                      (parseInt(item.point) > 0 ? '+' + item.point : item.point)
                    )
                  })
                  .join(' ')
              }}
            </div>
            <div class="flow-info-line"><span>处理类型：</span> {{ item.dealResultStr }}</div>
            <div class="flow-info-line"><span>详细描述：</span> {{ item.desc }}</div>
          </div>
        </div>
        <!-- 指派 -->
        <div v-else-if="item.dealType === '3'" class="flow-path-item">
          <div class="flow-path-head">
            <i class="decorate"></i>
            <div class="flow-step">{{ item.dealTypeStr }}</div>
            <div class="flow-time">{{ item.dealTime }}</div>
          </div>
          <div class="flow-path-content">
            <div class="flow-info-line"><span>指派人：</span> {{ item.realName }}</div>
            <div class="flow-info-line"><span>管护员：</span> {{ item.appointUserName }}</div>
            <div class="flow-info-line" v-if="item.eventPointList.length">
              <span>积分：</span>
              {{
                item.eventPointList
                  .map((item) => {
                    return item.pointUserName + '+' + item.point
                  })
                  .join(' ')
              }}
            </div>
            <div class="flow-info-line"><span>详细描述：</span> {{ item.desc }}</div>
          </div>
        </div>
        <!-- 督办 -->
        <div v-else-if="item.dealType === '4'" class="flow-path-item">
          <div class="flow-path-head">
            <i class="decorate"></i>
            <div class="flow-step">{{ item.dealTypeStr }}</div>
            <div class="flow-time">{{ item.dealTime }}</div>
          </div>
          <div class="flow-path-content">
            <div class="flow-info-line"><span>督办人：</span> {{ item.realName }}</div>
            <div class="flow-info-line"><span>网格：</span> {{ item.userGridName }}</div>
            <div class="flow-info-line" v-if="item.eventPointList.length">
              <span>积分：</span>
              {{
                item.eventPointList
                  .map((item) => {
                    return (
                      item.pointUserName +
                      (parseInt(item.point) > 0 ? '+' + item.point : item.point)
                    )
                  })
                  .join(' ')
              }}
            </div>
          </div>
        </div>
        <!-- 提醒 -->
        <div v-else-if="item.dealType === '5'" class="flow-path-item">
          <div class="flow-path-head">
            <i class="decorate"></i>
            <div class="flow-step">{{ item.dealTypeStr }}</div>
            <div class="flow-time">{{ item.dealTime }}</div>
          </div>
          <div class="flow-path-content">
            <div class="flow-info-line"><span>提醒人：</span> {{ item.realName }}</div>
            <div class="flow-info-line">
              <span>提醒网格：</span> {{ item.superviseRemindGridName }}
            </div>
            <div class="flow-info-line" v-if="item.eventPointList.length">
              <span>详细描述：</span> {{ item.desc }}
            </div>
          </div>
        </div>
        <!-- 评价 -->
        <div v-else-if="item.dealType === '6'" class="flow-path-item">
          <div class="flow-path-head">
            <i class="decorate"></i>
            <div class="flow-step">{{ item.dealTypeStr }}</div>
            <div class="flow-time">{{ item.dealTime }}</div>
          </div>
          <div class="flow-path-content">
            <div class="flow-info-line"><span>评价人：</span> {{ item.realName }}</div>
            <div class="flow-info-line" v-if="item.eventPointList.length">
              <span>积分：</span>
              {{
                item.eventPointList
                  .map((item) => {
                    return (
                      item.pointUserName +
                      (parseInt(item.point) > 0 ? '+' + item.point : item.point)
                    )
                  })
                  .join(' ')
              }}
            </div>
            <div class="flow-info-line"><span>评价类型：</span> {{ item.evaluateTypeStr }}</div>
            <div class="flow-info-line"><span>详细描述：</span> {{ item.desc }}</div>
          </div>
        </div>
        <!-- 归档 -->
        <div v-else-if="item.dealType === '7'" class="flow-path-item">
          <div class="flow-path-head">
            <i class="decorate"></i>
            <div class="flow-step">{{ item.dealTypeStr }}</div>
            <div class="flow-time">{{ item.dealTime }}</div>
          </div>
          <div class="flow-path-content">
            <div class="flow-info-line"><span>归档人：</span> {{ item.realName }}</div>
            <div class="flow-info-line" v-if="item.eventPointList.length">
              <span>详细描述：</span> {{ item.desc }}
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { getEvent, getEventProcess } from '@/api/manageDispatch/event'
export default {
  props: {
    eventId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currTab: '1',
      tabList: [
        {
          label: '基本信息',
          value: '1'
        },
        {
          label: '流程信息',
          value: '2'
        }
      ],
      processList: [],
      eventData: {}
    }
  },
  methods: {
    tabChange(index) {
      this.currTab = index
    },
    queryEventProcess() {
      getEventProcess({
        eventId: this.eventId
      }).then((res) => {
        if (res.code === '0') {
          this.processList = res.data
        }
      })
    },
    queryEvent() {
      getEvent({
        eventId: this.eventId
      }).then((res) => {
        if (res.code === '0') {
          this.eventData = res.data
        }
      })
    }
  },
  created() {
    this.queryEvent()
    this.queryEventProcess()
  }
}
</script>

<style lang="scss" scoped>
.event-detail-normal {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 15px;
}

/* 事件详情 */
.event-detail-normal {
  :deep(.desc .el-descriptions__body) {
    background-color: transparent;
  }
  :deep(.el-descriptions__label) {
    font-family: 'Adobe Heiti Std';
    color: #4ec5b7;
    background: rgba(3, 171, 154, 0.1);
    width: 90px;
  }
  :deep(.el-descriptions__content) {
    font-family: 'Adobe Heiti Std';
    color: #d8e2ff;
    max-width: 200px;
  }
  :deep(.el-descriptions__content .my-img) {
    width: 84px;
    height: 84px;
    margin-right: 10px;
  }
  :deep(.el-descriptions__body .el-descriptions__table.is-bordered .el-descriptions__cell) {
    border: 1px solid hsla(170, 100%, 51%, 0.44);
  }
}

/* 流程列表 */
.event-detail-normal .flow-path-list {
  width: 100%;
  font-family: 'Adobe Heiti Std';
  height: 400px;
  overflow: auto;
}

.event-detail-normal .flow-path-list .flow-path-head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.event-detail-normal .flow-path-list .decorate {
  width: 22px;
  height: 22px;
  background: rgba(77, 230, 225, 0.2);
  border-radius: 50%;
  position: relative;
}

.event-detail-normal .flow-path-list .decorate:before {
  content: '';
  width: 10px;
  height: 10px;
  background: #55fff9;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.event-detail-normal .flow-path-list .flow-step {
  width: 75px;
  height: 28px;
  background: url(@/assets/images/manageDispatch/flow-step-bg.png) no-repeat center center / 100%
    100%;
  font-size: 16px;
  line-height: 28px;
  text-indent: 5px;
  text-align: center;
  margin-left: 5px;
  color: #4adfdb;
}
.event-detail-normal .flow-path-list .flow-time {
  margin-left: 20px;
  font-size: 16px;
  color: #4adfdb;
}

.event-detail-normal .flow-path-list .flow-path-content {
  margin-left: 11px;
  border-left: 1px dashed #55fff9;
  padding: 10px 25px;
  box-sizing: border-box;
}

.event-detail-normal .flow-path-content .flow-info-line {
  font-size: 16px;
  padding: 2px 0;
  color: rgb(194, 220, 255);
}

.event-detail-normal .flow-path-content .flow-info-line > span {
  color: #d8e2ff;
  font-size: 16px;
}

.event-detail-normal .flow-path-content .flow-info-line .my-img {
  width: 86px;
  height: 86px;
  box-sizing: border-box;
  border: 2px solid #1a655f;
  border-radius: 12px;
  margin-right: 2px;
}

/* tab页 */
.event-detail-normal .tab-list {
  width: 100%;
  height: 35px;
  border-bottom: 1px solid #06604d;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 10px;
}

.event-detail-normal .tab-list .tab-item {
  width: 100px;
  height: 100%;
  border-radius: 6px 6px 0 0;
  background-color: #042d22;
  font-size: 18px;
  line-height: 34px;
  color: #85ffda;
  text-align: center;
  cursor: pointer;
}

.event-detail-normal .tab-list .tab-item.sel {
  background-color: #06604d;

  color: #fff;
  cursor: default;
}

/* 滚动条样式 */
.event-detail-normal ::-webkit-scrollbar {
  width: 2px;
}
.event-detail-normal ::-webkit-scrollbar-track {
  background-color: #125e56;
}
.event-detail-normal ::-webkit-scrollbar-thumb {
  background-image: linear-gradient(to bottom, #2cffe3, #00ae8b);
}
</style>
