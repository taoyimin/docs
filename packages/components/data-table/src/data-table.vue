<template>
  <el-table ref="tableRef" class="vp-raw" table-layout="auto">
    <template v-for="field in validFields" :key="toValue(field).prop">
      <el-table-column
        v-if="!toValue(field).fieldType"
        :show-overflow-tooltip="{
          popperClass: 'table-tooltip'
        }"
        v-bind="toValue(field)"
      >
        <template #default="scope" v-if="toValue(field).fieldFormat">
          {{
            toValue(field).fieldFormat(scope.row[toValue(field).prop], {
              ...scope.row
            })
          }}
        </template>
      </el-table-column>
      <el-table-column v-else-if="toValue(field).fieldType === 'tag'" v-bind="toValue(field)">
        <template #default="scope">
          <el-tag
            v-bind="omit(toValue(field), ['tagType'])"
            :type="
              typeof toValue(field).tagType === 'function'
                ? toValue(field).tagType(
                    scope.row,
                    scope.column,
                    scope.row[toValue(field).prop],
                    scope.$index
                  )
                : toValue(field).tagType
            "
            >{{
              toValue(field).fieldFormat
                ? toValue(field)?.fieldFormat(scope.row[toValue(field).prop], {
                    ...scope.row
                  })
                : scope.row[toValue(field).prop]
            }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column v-else-if="toValue(field).fieldType === 'button'" v-bind="toValue(field)">
        <template #default="scope">
          <el-button
            type="primary"
            plain
            size="small"
            @click="
              isRef(toValue(field).onClick)
                ? toValue(toValue(field).onClick)(
                    scope.row,
                    scope.column,
                    scope.row[toValue(field).prop],
                    scope.$index
                  )
                : toValue(field).onClick(
                    scope.row,
                    scope.column,
                    scope.row[toValue(field).prop],
                    scope.$index
                  )
            "
            v-bind="omit(toValue(field), ['onClick'])"
            >{{ toValue(field).name }}</el-button
          >
        </template>
      </el-table-column>
      <el-table-column v-else-if="toValue(field).fieldType === 'switch'" v-bind="toValue(field)">
        <template #default="scope">
          <el-switch
            :model-value="scope.row[toValue(field).prop]"
            size="small"
            @change="
              isRef(toValue(field).onChange)
                ? toValue(toValue(field).onChange)(
                    $event,
                    scope.row,
                    scope.column,
                    scope.row[toValue(field).prop],
                    scope.$index
                  )
                : toValue(field).onChange(
                    $event,
                    scope.row,
                    scope.column,
                    scope.row[toValue(field).prop],
                    scope.$index
                  )
            "
            v-bind="omit(toValue(field), ['onChange'])"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column v-else-if="toValue(field).fieldType === 'image'" v-bind="toValue(field)">
        <template #default="scope">
          <template v-if="scope.row[toValue(field).prop]">
            <el-popover
              v-for="(image, index) in scope.row[toValue(field).prop].split(',')"
              :key="image"
              placement="top-start"
              trigger="hover"
              @before-enter="
                zipImagePopover = [zipImagePopover[2], zipImagePopover[3], scope.$index, index]
              "
            >
              <template #reference>
                <el-image
                  :preview-src-list="getFileUrlList(scope.row[toValue(field).prop])"
                  :src="getThumbUrl(image)"
                  :initial-index="index"
                  fit="cover"
                  lazy
                  preview-teleported
                  class="thumb-image"
                />
              </template>
              <el-image
                v-if="
                  (zipImagePopover[0] === scope.$index && zipImagePopover[1] === index) ||
                  (zipImagePopover[2] === scope.$index && zipImagePopover[3] === index)
                "
                :preview-src-list="getFileUrlList(scope.row[toValue(field).prop])"
                :src="getThumbUrl(image)"
                :initial-index="index"
                fit="cover"
                preview-teleported
                class="popover-image"
              />
            </el-popover>
          </template>
          <template v-else>无</template>
        </template>
      </el-table-column>
      <el-table-column v-else-if="toValue(field).fieldType === 'qrcode'" v-bind="toValue(field)">
        <template #default="scope">
          <el-popover placement="top-start" trigger="hover">
            <template #reference>
              <qr-code
                :content="scope.row[toValue(field).prop]"
                :size="30"
                v-bind="toValue(field)"
              />
            </template>
            <qr-code
              :content="scope.row[toValue(field).prop]"
              :size="125"
              v-bind="toValue(field)"
              class="popover-image"
            />
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column v-else-if="toValue(field).fieldType === 'slot'" v-bind="toValue(field)">
        <template #default="scope">
          <slot :name="toValue(field).slotName" :row="scope.row"></slot>
        </template>
      </el-table-column>
    </template>
    <el-table-column v-if="operationButtons.length > 0" fixed="right" label="操作">
      <template #default="scope">
        <div style="display: flex">
          <template
            v-for="(buttons, index) in getFilterButtons(operationButtons, scope.row)"
            :key="index"
          >
            <template v-if="buttons?.length && index === 0">
              <el-button
                v-for="button in buttons"
                :key="button.name"
                plain
                size="small"
                @click="button.onClick({ ...scope.row }, scope.$index)"
                v-bind="omit(button, ['onClick'])"
                >{{ button.name }}</el-button
              >
            </template>
            <el-popover placement="left" v-if="buttons.length && index !== 0">
              <template #reference>
                <el-icon style="vertical-align: middle; margin-left: 0.75rem"
                  ><MoreFilled
                /></el-icon>
              </template>
              <div class="more-button-container">
                <el-button
                  plain
                  v-for="button in buttons"
                  :key="button.name"
                  size="small"
                  @click="button.onClick({ ...scope.row }, scope.$index)"
                  v-bind="omit(button, ['onClick'])"
                  >{{ button.name }}</el-button
                >
              </div>
            </el-popover>
          </template>
        </div>
      </template>
    </el-table-column>
    <template #empty>
      <el-empty description="暂无数据" />
    </template>
  </el-table>
</template>

<script lang="ts" setup>
import { watchEffect, useAttrs, ref, toValue, isRef, computed } from 'vue'
import { MoreFilled } from '@element-plus/icons-vue'
import { omit } from 'lodash-es'
import { dataTableProps } from './data-table'
import QrCode from '../../qr-code/src/qr-code.vue'
import { getFileUrlList, getThumbUrl } from '@szxc/utils'
import { useAuthorityStore } from '@szxc/stores'

defineOptions({
  name: 'LivDataTable'
})

// 组件属性
const props = defineProps(dataTableProps)

// 用于实现popover内image组件的懒加载
const zipImagePopover = ref([-1, -1, -1, -1])

// 组件参数
const attrs = useAttrs()

// 权限存储
const authorityStore = useAuthorityStore()

// 有权限的fields
const validFields = computed(() => {
  return props.fields.filter((field) => authorityStore.checkAuthority(toValue(field).authority))
})

/* el-button */
// 移除onClick事件，避免触发两次
// 操作按钮
const operationButtons = ref<Array<any>>([])

// 初始化操作按钮
watchEffect(() => {
  operationButtons.value = [
    {
      name: '详情',
      key: 'onDetail',
      type: 'primary',
      authority: undefined,
      onClick: undefined
    },
    {
      name: '编辑',
      key: 'onEdit',
      type: 'warning',
      authority: undefined,
      onClick: undefined
    },
    {
      name: '删除',
      key: 'onDelete',
      type: 'danger',
      authority: undefined,
      onClick: undefined
    }
  ]
    .map((button) => {
      if (props[button.key]) {
        button.onClick = props[button.key]
      } else {
        const key = Object.keys(attrs).find((key) => key.startsWith(button.key))
        const regex = /\((.*?)\)/
        const matches = key?.match(regex)
        if (matches && matches[1]) {
          button.authority = matches[1]
          button.onClick = attrs[key]
        }
      }
      return button
    })
    .concat(props.buttons)
    .reduce((buttons, button) => {
      if (button && button.onClick) {
        if (!button.authority) {
          // 不需要校验权限
          buttons.push(button)
        } else if (authorityStore.checkAuthority(button.authority)) {
          // 权限校验通过
          buttons.push(button)
        }
      }
      return buttons
    }, [])
})

// 按钮显示逻辑,showFn 可以是函数，也可以是boolean
const showFn = (button, row) => {
  if (button.showFn && typeof button.showFn === 'function') {
    return button.showFn(row)
  }
  return button.showFn ?? true
}

const showBtnLen = 3
const getFilterButtons = (buttons: any[], row): any[] => {
  const filterButtons = buttons.filter((button) => showFn(button, row))
  return props.expandButton
    ? [filterButtons]
    : [filterButtons.slice(0, showBtnLen), filterButtons.slice(showBtnLen)]
}

const tableRef = ref()
defineExpose({ tableRef })
</script>
<style scoped>
.table-tooltip {
  max-width: 500px;
}

.thumb-image {
  width: 30px;
  height: 30px;
}

.popover-image {
  width: 100%;
  height: 100px;
}

.more-button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  .el-button + .el-button {
    margin-left: 0;
  }
}
.el-icon.el-tooltip__trigger {
  color: var(--el-color-primary);
  cursor: pointer;
  margin-top: 0.3125rem;
}
</style>
