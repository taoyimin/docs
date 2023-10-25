<template>
  <div class="event-con">
    <div class="frame">
      <div class="frame-header">事件列表</div>
      <div
        class="loading-area"
        v-loading="listLoading"
        element-loading-text="数据加载中"
        element-loading-background="rgba(0, 0, 0, 0.5)"
      >
        <div class="search-area">
          <el-date-picker
            size="large"
            style="width: 100%"
            v-model="queryParams.dateRange"
            value-format="YYYY-MM-DD"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
          <div
            style="width: 100%; display: flex; justify-content: space-between; align-items: center"
          >
            <el-select
              size="large"
              style="flex: 1; margin-right: 10px"
              clearable
              v-model="queryParams.eventType"
              placeholder="事件类别"
            >
              <el-option
                v-for="item in selectOptions"
                :key="item.dicSubId"
                :label="item.dicSubName"
                :value="item.dicSubCode"
              >
              </el-option>
            </el-select>
            <el-select
              size="large"
              style="flex: 1; margin-right: 10px"
              clearable
              v-model="queryParams.eventSource"
              placeholder="事件来源"
            >
              <el-option
                v-for="item in sourceSelectOptions"
                :key="item.dicSubId"
                :label="item.dicSubName"
                :value="item.dicSubCode"
              >
              </el-option>
            </el-select>
            <el-button type="primary" :icon="SearchIcon" @click="search" size="large"
              >查询</el-button
            >
          </div>
        </div>
        <div class="tab-list">
          <div
            v-for="item in tabList"
            class="tab-item"
            :class="{ active: item.value === queryParams.status }"
            @click="tabChange(item)"
            :key="item.vlaue"
          >
            {{ item.label }}
          </div>
        </div>

        <div class="data-list">
          <el-alert
            v-show="!dataList.length"
            title="暂无数据"
            type="warning"
            :closable="false"
            center
            show-icon
          >
          </el-alert>
          <div v-for="item in dataList" :key="item.id" class="data-item" @click="showDetail(item)">
            <img
              class="data-item-image"
              :src="
                'http://106.225.129.34:8082/ruralLivingEnv/fileControll/downLoadFile?swfName=' +
                (item.imageUrl && item.imageUrl.length ? item.imageUrl.split(',')[0] : '')
              "
              onerror="this.src='/src/assets/images/manageDispatch/noPic.png'"
            />
            <div>
              <h3 class="data-item-title">{{ item.sourceStr }}</h3>
              <div class="data-item-info">
                事件编号：<span>{{ item.no }}</span>
              </div>
              <div class="data-item-info">
                事件类别：<span>{{ item.typeStr }}</span>
              </div>
              <div class="data-item-info">
                时间：<span>{{ item.addTime }}</span>
              </div>
            </div>
            <span class="data-item-status" :style="getStatusColor(item.statusStr)">{{
              item.statusStr
            }}</span>
          </div>
        </div>
        <paging
          :total="dataTotal"
          :pageSize="queryParams.pageSize"
          v-model:pageNo="queryParams.pageNo"
          class="list-paging"
          @change="pageChange"
        ></paging>
      </div>
    </div>
  </div>
</template>

<script>
import { getSubListByParent } from '@/api/manageDispatch'
import { listEventInfo } from '@/api/manageDispatch/event'
import { Search as SearchIcon } from '@element-plus/icons-vue'
import Paging from '@/components/PagingComp.vue'

export default {
  components: { Paging },
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      SearchIcon,
      queryParams: {
        dateRange: null,
        status: '',
        eventType: '',
        eventSource: '',
        pageSize: 10,
        pageNo: 1
      },
      tabList: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '处理中',
          value: '1'
        },
        {
          label: '已办结',
          value: '3'
        },
        {
          label: '有图',
          value: '999'
        }
      ],
      selectOptions: [],
      sourceSelectOptions: [],
      dataTotal: 0,
      dataList: []
    }
  },
  methods: {
    getStatusColor(statusStr) {
      switch (statusStr) {
        case '处理中':
          return { 'background-color': '#ff6600' }
        case '待评价':
          return { 'background-color': '#00a0e9' }
        case '已办结':
          return { 'background-color': '#009944' }
        default:
          return { 'background-color': '#17caa2' }
      }
    },
    tabChange(data) {
      this.queryParams.status = data.value
      this.queryParams.pageNo = 1
      this.getListPage()
    },
    pageChange(pageNo) {
      this.queryParams.pageNo = pageNo
      this.getListPage()
    },
    getListPage() {
      this.listLoading = true
      listEventInfo({
        gridCode: this.code,
        type: this.queryParams.eventType,
        source: this.queryParams.eventSource,
        pageNum: this.queryParams.pageNo,
        pageSize: this.queryParams.pageSize,
        sTime: this.queryParams.dateRange ? this.queryParams.dateRange[0] + ' 00:00:00' : '',
        eTime: this.queryParams.dateRange ? this.queryParams.dateRange[1] + ' 23:59:59' : '',
        status: this.queryParams.status == '999' ? '' : this.queryParams.status,
        hasPic: this.queryParams.status == '999' ? '1' : ''
      })
        .then((res) => {
          this.listLoading = false
          this.dataList = res.data
          this.dataTotal = res.count
          // 地图点位定位
          this.$parent.$parent.setPointAndView(this.dataList)
        })
        .catch(() => {
          this.listLoading = false
        })
    },
    getEventType() {
      getSubListByParent({
        dicCode: 'eventType'
      }).then((res) => {
        if (res.success) {
          this.selectOptions = res.listDic
        }
      })
    },
    getEventSource() {
      getSubListByParent({
        dicCode: 'info_source'
      }).then((res) => {
        if (res.success) {
          this.sourceSelectOptions = res.listDic
        }
      })
    },
    search() {
      this.queryParams.pageNo = 1
      this.getListPage()
    },
    showDetail(data) {
      this.$parent.$parent.showEventDialog(data.id)
    }
  },
  created() {
    this.getEventType()
    this.getEventSource()
    this.getListPage()
  }
}
</script>

<style lang="scss" scoped>
/*右侧弹窗样式*/
.frame {
  width: 100%;
  height: 100%;
  background: rgba(13, 70, 61, 0.9);
}

.frame .frame-header {
  width: 100%;
  height: 40px;
  font-size: 22px;
  line-height: 40px;
  color: #d7fff5;
  background: rgba(16, 120, 93, 0.76);
  box-sizing: border-box;
  border-left: 8px solid #0ade96;
  text-indent: 10px;
}
.event-con {
  width: 380px;
  height: 100%;
  position: relative;
}

.event-con .loading-area {
  width: 100%;
  box-sizing: border-box;
  height: calc(100% - 40px);
  position: relative;
}

.event-con .search-area {
  width: 100%;
  padding: 15px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.event-con .tab-list {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  box-sizing: border-box;
  border-bottom: 1px solid #06604d;
}

.event-con .tab-list .tab-item {
  width: 80px;
  height: 30px;
  background: #042d22;
  border: 1px solid #06604d;
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  line-height: 30px;
  font-size: 16px;
  text-align: center;
  color: #85ffda;
  cursor: pointer;
}

.event-con .tab-list .tab-item.active {
  background: #06604d;
}

.event-con .data-list {
  position: absolute;
  top: 150px;
  bottom: 60px;
  left: 0;
  right: 0;
  width: 100%;
  overflow: auto;
}

.event-con .data-list .data-item {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  align-items: center;
  padding: 10px;
  overflow: auto;
  border-bottom: 1px solid rgba(44, 169, 130, 0.2);
  position: relative;
  cursor: pointer;
}

.event-con .data-list .data-item .data-item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 20px;
}

.event-con .data-list .data-item .data-item-title {
  font-size: 16px;
  color: #a6ffeb;
  line-height: 30px;
}

.event-con .data-list .data-item .data-item-info {
  font-size: 12px;
  color: #fff;
  line-height: 20px;
}

.event-con .data-list .data-item .data-item-info > span {
  font-size: 12px;
  color: #a6ffeb;
}

.event-con .data-list .data-item .data-item-status {
  display: inline-block;
  padding: 0 10px;
  line-height: 30px;
  font-size: 14px;
  border-radius: 4px;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translate(0, -50%);
  background: #17caa2;
  color: white;
}

.event-con .data-list::-webkit-scrollbar {
  width: 4px;
}
.event-con .data-list::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  opacity: 0.2;
  background: #17caa2;
}
.event-con .data-list::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: #ddd;
}

.event-con .list-paging {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

/* ElementPlus 组件样式覆盖 */
.event-con {
  :deep(.el-input__wrapper) {
    background: rgba(218, 255, 246, 0.5);
    border: none;
    color: darkslategray;
    box-shadow: 0 0 0 1px darkslategray inset;
  }
  :deep(.el-input__inner::placeholder) {
    color: darkslategray;
  }
  :deep(.el-select .el-input .el-select__caret) {
    color: darkslategray;
  }

  :deep(.el-date-editor) {
    margin-bottom: 10px;
    .el-range__icon,
    .el-range-input {
      color: darkslategray;
      &::placeholder {
        color: darkslategray;
      }
    }
  }
}
</style>
