<template>
  <div class="car-con">
    <div class="frame">
      <div class="frame-header">车辆列表</div>
      <div
        class="loading-area"
        v-loading="listLoading"
        element-loading-text="数据加载中"
        element-loading-background="rgba(0, 0, 0, 0.5)"
      >
        <div class="search-area">
          <div style="display: flex; justify-content: space-between; align-items: center">
            <el-input
              style="width: calc(100% - 90px)"
              v-model="queryParams.license"
              placeholder="请输入车牌"
            ></el-input>
            <el-button type="primary" :icon="SearchIcon" @click="search">查询</el-button>
          </div>
        </div>
        <div class="tab-list">
          <div
            v-for="item in tabList"
            class="tab-item"
            :class="{ active: item.value === queryParams.status }"
            @click="tabChange(item)"
            :key="item.value"
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
          ></el-alert>
          <div class="data-item" v-for="item in dataList" @click="showDetail(item)" :key="item.id">
            <img
              class="data-item-image"
              src=""
              onerror="this.src='http://106.225.129.34:8082/ruralLivingEnv/img/car.jpg'"
            />
            <div>
              <h3 class="data-item-title">{{ item.license }}</h3>
              <div class="data-item-info">
                地址：<span>{{ item.detailGridName }}</span>
              </div>
              <div class="data-item-info">
                设备编号：<span>{{ item.deviceNo }}</span>
              </div>
            </div>
            <span class="data-item-status" :class="item.status === '0' ? 'offline' : 'online'">{{
              item.status === '0' ? '离线' : '在线'
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
import Paging from '@/components/PagingComp.vue'
import { listCarInfo } from '@/api/manageDispatch/event'
import { Search as SearchIcon } from '@element-plus/icons-vue'
export default {
  components: {
    Paging: Paging
  },
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
        license: '',
        status: '',
        pageSize: 10,
        pageNo: 1
      },
      listLoading: false,
      dataTotal: 0,
      tabList: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '在线',
          value: '1'
        },
        {
          label: '离线',
          value: '0'
        }
      ],
      dataList: []
    }
  },
  methods: {
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
      listCarInfo({
        gridCode: this.code,
        license: this.queryParams.license,
        pageNum: this.queryParams.pageNo,
        pageSize: this.queryParams.pageSize,
        onlineStatus: this.queryParams.status
      })
        .then((res) => {
          this.listLoading = false
          this.dataList = res.data ? res.data : []
          this.dataTotal = res.count
          // 地图点位定位
          this.$parent.$parent.setPointAndView(this.dataList)
        })
        .catch(() => {
          this.listLoading = false
        })
    },
    search() {
      this.queryParams.pageNo = 1
      this.getListPage()
    },
    showDetail(data) {
      this.$parent.$parent.showCarDialog(data)
    }
  },
  created() {
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
.car-con {
  width: 380px;
  height: 100%;
  position: relative;
}

.car-con .loading-area {
  width: 100%;
  box-sizing: border-box;
  height: calc(100% - 40px);
  position: relative;
}

.car-con .search-area {
  width: 100%;
  padding: 15px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.car-con .tab-list {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  box-sizing: border-box;
  border-bottom: 1px solid #06604d;
}

.car-con .tab-list .tab-item {
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

.car-con .tab-list .tab-item.active {
  background: #06604d;
}

.car-con .data-list {
  position: absolute;
  top: calc(70px + 30px);
  bottom: 60px;
  left: 0;
  right: 0;
  width: 100%;
  overflow: auto;
}

.car-con .data-list .data-item {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  align-items: center;
  padding: 5px 10px;
  overflow: auto;
  border-bottom: 1px solid rgba(44, 169, 130, 0.2);
  position: relative;
  cursor: pointer;
}

.car-con .data-list .data-item .data-item-image {
  width: 80px;
  height: 100px;
  object-fit: contain;
  margin-right: 20px;
}

.car-con .data-list .data-item .data-item-title {
  font-size: 16px;
  color: #a6ffeb;
  line-height: 30px;
}

.car-con .data-list .data-item .data-item-info {
  font-size: 12px;
  color: #fff;
  line-height: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

.car-con .data-list .data-item .data-item-info > span {
  font-size: 12px;
  color: #a6ffeb;
  width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.car-con .data-list .data-item .data-item-status {
  display: inline-block;
  padding: 0 10px;
  line-height: 24px;
  font-size: 14px;
  border-radius: 4px;
  position: absolute;
  right: 15px;
  top: 15px;
}

.car-con .data-list .data-item .data-item-status.online {
  background: #17caa2;
  color: #053e2d;
}

.car-con .data-list .data-item .data-item-status.offline {
  background: #909090;
  color: #fff;
}

.car-con .data-list::-webkit-scrollbar {
  width: 4px;
}
.car-con .data-list::-webkit-scrollbar-thumb {
  border-radius: 0, 2px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  opacity: 0.2;
  background: #17caa2;
}
.car-con .data-list::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: #ddd;
}

.car-con .list-paging {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

/* element输入框样式 */
.car-con {
  :deep(.el-input__wrapper) {
    background: rgba(218, 255, 246, 0.5);
    border: none;
    box-shadow: 0 0 0 1px darkslategray inset;

    .el-input__inner {
      color: #333;
    }
  }
  :deep(.el-input__inner::placeholder) {
    color: darkslategray;
  }
  :deep(.el-select .el-input .el-select__caret) {
    color: darkslategray;
  }
}
</style>
