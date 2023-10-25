<template>
  <div class="personnel-detail">
    <div class="info-area">
      <div class="info-item">
        姓名：<span>{{ data.realName }}</span>
      </div>
      <div class="info-item">
        地址：<span>{{ data.gridName }}</span>
      </div>
      <div class="info-item">
        网格：<span>{{ data.detailGridName }}</span>
      </div>
      <div class="info-item">
        联系电话：<span>{{ data.contactPhone }}</span>
      </div>
      <div class="info-item">
        卡牌编号：<span>{{ data.deviceNo }}</span>
      </div>
      <el-button
        type="primary"
        :icon="GuideIcon"
        style="margin-top: 10px"
        @click="showTrajectory()"
      >
        轨迹查询
      </el-button>
    </div>
    <div class="table-area">
      <div class="table-title">考勤记录</div>
      <div
        style="
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        "
      >
        <div class="date-range-picker">
          <el-date-picker
            v-model="dateRange"
            :clearable="false"
            value-format="YYYY-MM-DD"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </div>
        <el-button type="primary" :icon="SearchIcon" @click="search">查询</el-button>
      </div>
      <el-table
        ref="singleTable"
        :data="tableData"
        height="245px"
        highlight-current-row
        stripe
        header-cell-class-name="table-header-cell"
      >
        <el-table-column property="update_time" label="日期" header-align="center" align="center">
        </el-table-column>
        <el-table-column property="statusStr" label="状态" header-align="center" align="center">
          <template #default="scope">
            <span>{{ scope.row.status === '1' ? '未打卡' : '已打卡' }}</span>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          header-align="center"
          align="center"
          label="操作"
          width="100"
        >
          <template #default="scope">
            <el-button @click="showTrajectory(scope.row)" type="text" size="small"
              >查看轨迹</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog
      custom-class="trajectory-dialog"
      :append-to-body="true"
      top="5vh"
      title="轨迹查询"
      v-if="trajectoryDialogVisible"
      v-model="trajectoryDialogVisible"
      :modal="false"
      width="80vw"
    >
      <!-- <trajectory :deviceId="data.deviceId" :speed="200" :trajectoryDate="trajectoryDate" markerUrl="/ruralLivingEnv/img/facilities/marker-man.png" requestUrl="/graphShow/queryStaffTrack" ></trajectory> -->
    </el-dialog>
  </div>
</template>

<script>
import moment from 'moment'
import { cardRecord } from '@/api/manageDispatch/event'
import { Search as SearchIcon, Guide as GuideIcon } from '@element-plus/icons-vue'

export default {
  components: {
    /* 'Trajectory': Trajectory */
  },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      GuideIcon,
      SearchIcon,
      trajectoryDialogVisible: false,
      dateRange: [
        moment().subtract(1, 'month').format('YYYY-MM-DD'),
        moment().format('YYYY-MM-DD')
      ],
      tableData: [],
      trajectoryDate: ''
    }
  },
  methods: {
    showTrajectory(data) {
      if (data) {
        this.trajectoryDate = data.create_time
      }
      this.trajectoryDialogVisible = true
    },

    // 打卡记录
    getClockRecords() {
      cardRecord({
        deviceId: this.data.deviceId,
        startDate: this.dateRange[0],
        endDate: this.dateRange[1]
      }).then((res) => {
        if (res.success) {
          this.tableData = res.data
        }
      })
    },
    search() {
      this.getClockRecords()
    }
  },
  created() {
    this.getClockRecords()
  }
}
</script>

<style lang="scss" scoped>
.personnel-detail .info-area {
  position: relative;
  padding-bottom: 15px;
}

.personnel-detail .info-area > .info-item {
  font-size: 14px;
  line-height: 24px;
}

.personnel-detail .info-area > .info-item > span {
  color: #a6ffeb;
}

.date-range-picker {
  width: 420px;
  :deep(.el-range-editor) {
    width: 100%;
  }
}

.personnel-detail .table-area {
  padding-top: 15px;
  border-top: 1px solid rgba(0, 232, 156, 0.3);
}

.personnel-detail .table-area .table-title {
  margin-bottom: 15px;
  border-left: 5px solid #a6ffeb;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  text-indent: 10px;
  color: #a6ffeb;
}

.personnel-detail {
  :deep(.table-header-cell .cell) {
    color: #00595c;
    font-size: 16px;
    font-weight: bold;
  }
  :deep(.el-table--striped .el-table__body tr.el-table__row--striped td) {
    background: #e8f5f4;
  }
}
</style>
