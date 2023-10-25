<template>
  <div class="paging">
    <span class="paging-count">共{{ numberFormat }}条</span>
    <i class="paging-btn" :class="pageNo === 1 ? 'disabled' : ''" @click="prePage">◁</i>
    <i class="paging-btn" :class="pageNo === totalPage ? 'disabled' : ''" @click="nextPage">▷</i>

    <span>到第</span>
    <el-input-number
      type="number"
      :min="1"
      :max="totalPage"
      :controls="false"
      class="paging-number"
      v-model="page"
    ></el-input-number>
    <span>页</span>
    <span class="paging-sure" @click="jumpPage">确定</span>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 200
    },
    pageNo: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      page: 1
    }
  },
  watch: {
    pageNo(newVal, oldVal) {
      this.page = newVal
    }
  },
  computed: {
    totalPage() {
      var page = Math.floor(this.total / this.pageSize) + (this.total % this.pageSize ? 1 : 0)
      page === 0 && (page = 1)

      return page
    },
    numberFormat() {
      var numFormat
      if (this.total < 10000) {
        numFormat = this.total
      } else {
        numFormat = (this.total / 10000).toFixed(1) + '万'
      }

      return numFormat
    }
  },
  methods: {
    prePage() {
      if (this.pageNo > 1) {
        this.$emit('update:pageNo', this.pageNo - 1)
        this.$emit('change', this.pageNo - 1)
      }
    },
    nextPage() {
      if (this.pageNo < this.totalPage) {
        this.$emit('update:pageNo', this.pageNo + 1)
        this.$emit('change', this.pageNo + 1)
      }
    },
    jumpPage() {
      this.$emit('update:pageNo', this.page)
      this.$emit('change', this.page)
    }
  },
  created() {}
}
</script>

<style lang="scss" scoped>
.paging {
  width: 100%;
  height: 60px;
  background: rgba(12, 161, 123, 0.42);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #a6ffeb;
  box-sizing: border-box;
  padding: 0 10px;
  font-size: 16px;
}

.paging > span {
  font-size: 16px;
}

.paging .paging-count {
  margin: 0 5px;
}

.paging .paging-number {
  width: 50px;
  text-align: center;
  margin: 0 5px;
}

.paging .paging-number .el-input__inner {
  height: 36px;
  line-height: 36px;
}

.paging .paging-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  line-height: 36px;
  background: #1aaa89;
  color: #fff;
  text-align: center;
  margin: 0 5px;
  cursor: pointer;
  font-weight: bold;
}

.paging .paging-btn.disabled {
  cursor: no-drop;
  color: #ddd;
}

.paging .paging-sure {
  width: 60px;
  margin-left: 10px;
  cursor: pointer;
  text-align: center;
}
</style>
