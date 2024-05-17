<template>
  <el-form
    :model="model"
    ref="ruleFormRef"
    class="vp-raw"
    :validate-on-rule-change="false"
    :labelWidth="matrixFields.length === 1 ? 'auto' : $attrs.labelWidth ?? '5.4vw'"
    :label-position="$attrs.labelPosition ?? 'right'"
    v-bind="$attrs"
    :inline="false"
    @keyup.enter="handleSubmit"
  >
    <el-config-provider :locale="zhCn">
      <div class="filter-wrap" v-if="matrixFields.length">
        <div class="left-card">
          <div
            class="wrap"
            ref="rowWrapRef"
            :style="{
              maxHeight: pxToVw(
                isCollapse ? rowItemHeight * 2 : rowItemHeight * matrixFields.length
              )
            }"
          >
            <template v-for="(row, index) in matrixFields" :key="index">
              <el-row :gutter="20">
                <template
                  v-for="field in Array.isArray(toValue(row)) ? toValue(row) : [toValue(row)]"
                  :key="field.name"
                >
                  <el-col :span="24 / column">
                    <template
                      v-if="
                        toValue(field).fieldType === 'select' ||
                        toValue(field).fieldType === 'radio' ||
                        toValue(field).fieldType === 'checkbox'
                      "
                    >
                      <form-item
                        :options="fieldDatas[toValue(field).prop]"
                        v-bind="toValue(field)"
                        v-model="model[toValue(field).prop]"
                      >
                        <template v-if="toValue(field).fieldType === 'select'">
                          <el-option
                            v-for="option in fieldDatas[toValue(field).prop]"
                            :key="option.value"
                            v-bind="option"
                          />
                        </template>
                        <template v-else-if="toValue(field).fieldType === 'radio'">
                          <el-radio
                            v-for="radio in fieldDatas[toValue(field).prop]"
                            :key="radio.value"
                            v-bind="radio"
                            :label="radio.value"
                            >{{ radio.label }}
                          </el-radio>
                        </template>
                        <template v-else-if="toValue(field).fieldType === 'checkbox'">
                          <el-checkbox
                            v-for="checkbox in fieldDatas[toValue(field).prop]"
                            :key="checkbox.value"
                            v-bind="checkbox"
                            :label="checkbox.value"
                            >{{ checkbox.label }}
                          </el-checkbox>
                        </template>
                      </form-item>
                    </template>
                    <template
                      v-else-if="
                        toValue(field).fieldType === 'location' &&
                        Array.isArray(toValue(field).prop)
                      "
                    >
                      <form-item
                        :options="fieldDatas[toValue(field).prop]"
                        v-bind="toValue(field)"
                        :prop="toValue(field).prop[0]"
                        v-model:longitude="model[toValue(field).prop[0]]"
                        v-model:latitude="model[toValue(field).prop[1]]"
                      ></form-item>
                    </template>
                    <template v-else>
                      <form-item
                        :options="fieldDatas[toValue(field).prop]"
                        v-bind="toValue(field)"
                        v-model="model[toValue(field).prop]"
                      >
                      </form-item>
                    </template>
                  </el-col>
                </template>
              </el-row>
            </template>
          </div>
          <el-button
            class="collapse-btn"
            link
            type="primary"
            v-if="matrixFields.length > 2"
            @click="isCollapse = !isCollapse"
            >{{ isCollapse ? '展开' : '收缩' }}
            <el-icon class="el-icon--right" :class="{ rotateClass: !isCollapse }">
              <ArrowDown /> </el-icon
          ></el-button>
        </div>
        <div
          class="right-card"
          :class="{ 'btn-flex-row': matrixFields.length === 1 }"
          v-if="rightBtns.length"
        >
          <el-form-item v-for="button in rightBtns" :key="button.name" label-width="0">
            <el-button
              @click="onBtnClick(button, model, ruleFormRef)"
              v-bind="omit(button, ['onClick'])"
              :plain="button.plain ?? true"
            >
              <icon-font v-if="button.svgIcon" :name="button.svgIcon" class="svg" />
              {{ button.name }}</el-button
            >
          </el-form-item>
        </div>
      </div>

      <el-row class="search-btns-wrap" v-if="operationButtons.length || bottomRigtBtns.length">
        <el-col :span="leftBtnSpan">
          <el-form-item label-width="0">
            <div class="left-btns">
              <template v-for="button in operationButtons">
                <el-button
                  v-if="isOtherBtn(button)"
                  :key="button.name"
                  @click="onBtnClick(button, model, ruleFormRef)"
                  v-bind="omit(button, ['onClick'])"
                  :plain="button.plain ?? true"
                >
                  <icon-font v-if="button.svgIcon" :name="button.svgIcon" class="svg" />
                  {{ button.name }}</el-button
                >
              </template>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="24 - leftBtnSpan">
          <el-form-item class="right-btns">
            <el-button
              v-for="button in bottomRigtBtns"
              :key="button.name"
              @click="onBtnClick(button, model, ruleFormRef)"
              v-bind="omit(button, ['onClick'])"
              :plain="button.plain ?? true"
            >
              <icon-font v-if="button.svgIcon" :name="button.svgIcon" class="svg" />
              {{ button.name }}</el-button
            >
          </el-form-item>
        </el-col>
      </el-row>
    </el-config-provider>
  </el-form>
</template>
<script lang="ts" setup>
import { ref, toValue, watchEffect, useAttrs, computed, onMounted, nextTick } from 'vue'
import type { FormInstance } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import type { FormItemProp, FormValidateCallback, FormValidationResult } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'
import { flattenArray, arrayToMatrix, type Arrayable } from '@szxc/utils'
import { useAuthorityStore } from '@szxc/stores'
import { searchFormProps } from './search-form'
import IconFont from '../../icon-font/src/icon-font.vue'
import FormItem from '../../form-item/src/form-item.vue'
import { omit } from 'lodash-es'

const defaultRightBtnKeys = ['onSearch', 'onReset']
const defaultBottomRigtkeys = ['onExport']

defineOptions({
  name: 'LivSearchForm'
})

// 组件属性
const props = defineProps(searchFormProps)

// 组件参数
const attrs = useAttrs()

/* el-button */
// 操作按钮
const operationButtons = ref<Array<any>>([])

const isCollapse = ref(true)

// 权限存储
const authorityStore = useAuthorityStore()

/* el-form */
// 表单实例
const ruleFormRef = ref<FormInstance>()

const resetFields = (props?: Arrayable<FormItemProp> | undefined): void => {
  ruleFormRef.value?.resetFields(props)
}

// 初始化操作按钮
watchEffect(() => {
  operationButtons.value = [
    {
      name: '提交',
      key: 'onSubmit',
      type: 'primary',
      validate: true,
      plain: false,
      authority: undefined,
      onClick: undefined
    },
    {
      name: '查询',
      key: 'onSearch',
      type: 'primary',
      validate: true,
      svgIcon: 'icon-zonghechaxun1',
      authority: undefined,
      onClick: undefined
    },
    {
      name: '重置',
      key: 'onReset',
      type: 'warning',
      svgIcon: 'icon-shuaxin1',
      authority: undefined,
      onClick: () => resetFields()
    },
    {
      name: '新增',
      key: 'onAdd',
      type: 'success',
      svgIcon: 'icon-xinjian',
      authority: undefined,
      onClick: undefined
    },
    {
      name: '批量删除',
      key: 'onBatchDelete',
      type: 'danger',
      authority: undefined,
      onClick: undefined
    },
    {
      name: '返回',
      key: 'onBack',
      authority: undefined,
      onClick: undefined
    },
    {
      name: '导出',
      key: 'onExport',
      type: 'primary',
      plain: false,
      svgIcon: 'icon-daochu1',
      validate: true,
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

const matrixFields = computed(() => arrayToMatrix(props.fields, props.column))

const rightBtnKeys = ref(defaultRightBtnKeys)
const bottomRigtkeys = ref(defaultBottomRigtkeys)
const rightBtns = computed(() =>
  operationButtons.value.filter((button) => rightBtnKeys.value.includes(button.key))
)
const bottomRigtBtns = computed(() =>
  operationButtons.value.filter((button) => bottomRigtkeys.value.includes(button.key))
)

const isOtherBtn = (button) => {
  return !rightBtnKeys.value.includes(button.key) && !bottomRigtkeys.value.includes(button.key)
}

const leftBtnSpan = computed(() =>
  Math.floor(
    (24 / (operationButtons.value.length + bottomRigtBtns.value.length)) *
      operationButtons.value.length
  )
)

const rowWrapRef = ref()
const rowItemHeight = ref(0)

// 按钮点击事件
const onBtnClick = (button: any, model: any, ruleFormRef: any) => {
  const formModel = formatForm(model)
  button.validate
    ? validateForm(formModel, ruleFormRef, button.onClick)
    : button.onClick(formModel, ruleFormRef)
}

// 回车键事件
const handleSubmit = () => {
  const searchButton = operationButtons.value.find((button) => button.key === 'onSearch')
  if (!searchButton) return
  onBtnClick(searchButton, props.model, ruleFormRef.value)
}

onMounted(() => {
  nextTick(() => {
    // 计算单个row的高度 类似rem
    rowItemHeight.value = rowWrapRef.value?.querySelector('.el-row')?.offsetHeight
    resetCardStyle()
  })
})

const pxToVw = (px) => {
  const viewportWidth = document.documentElement.clientWidth
  // 这里减去1是防止offsetHeight计算向上取整
  return (((px - 1) / viewportWidth) * 100).toFixed(2) + 'vw'
}

// 将父级card的卡片样式重置下
const resetCardStyle = () => {
  // 将card的样式重置下，padding和border
  const parentNode = ruleFormRef.value?.$el?.parentNode
  if (parentNode && parentNode.classList.contains('el-card__body')) {
    // parentNode.style.paddingTop = "0";
    if (parentNode?.previousElementSibling?.classList?.contains('el-card__header')) {
      parentNode.previousElementSibling.style.paddingBottom = '0'
      parentNode.previousElementSibling.style.borderBottom = 'none'
    }
  }
}

// 子组件数据
const fieldDatas = ref({})

// 初始化子组件的数据
const initFieldDatas = (field) => {
  if (field.fieldData) {
    const fieldDataImpl = toValue(field.fieldData)
    if (fieldDataImpl instanceof Array) {
      fieldDatas.value[field.prop] = fieldDataImpl
    } else if (fieldDataImpl instanceof Promise) {
      fieldDataImpl.then((data) => {
        fieldDatas.value[field.prop] = data
      })
    } else {
      fieldDatas.value[field.prop] = []
    }
  }
}

watchEffect(() => {
  flattenArray(props.fields).forEach((fieldRef) => {
    initFieldDatas(toValue(fieldRef))
  })
})

// 验证表单
const validateForm = async (form, formEl: FormInstance | undefined, callback: Function) => {
  if (!formEl) return
  await formEl.validate((valid, _fields) => {
    if (valid) {
      if (callback) {
        callback(form, formEl)
      }
    }
  })
}

// 过滤表单中不存在的字段
const formatForm = (model) => {
  const tempModel = {}
  flattenArray(props.fields).forEach((fieldRef) => {
    const field = toValue(fieldRef)
    if (field.prop in model) {
      tempModel[field.prop] = model[field.prop]
    }
  })
  return tempModel
}

const validate = async (callback?: FormValidateCallback): Promise<void> => {
  await ruleFormRef.value?.validate(callback)
}

const validateField = (
  props?: Arrayable<FormItemProp> | undefined,
  callback?: FormValidateCallback | undefined
): FormValidationResult => {
  return ruleFormRef.value?.validateField(props, callback)
}

const scrollToField = (prop: FormItemProp) => {
  ruleFormRef.value?.scrollToField(prop)
}

const clearValidate = (props?: Arrayable<FormItemProp> | undefined): void => {
  ruleFormRef.value?.clearValidate(props)
}

defineExpose({
  validate,
  validateField,
  resetFields,
  scrollToField,
  clearValidate
})
</script>

<style lang="scss" scoped>
.filter-wrap {
  display: flex;
  flex-direction: row;

  .left-card {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    // position: relative;
    .wrap {
      flex: 1;
      transition: all 0.5s;
      max-height: 100px;
      overflow: hidden;
    }
    .collapse-btn {
      margin-left: 30px;
      margin-top: 25px;
      line-height: 32px;
      .el-icon--right {
        transition: all 0.3s;
      }
      .rotateClass {
        transform: rotate(-180deg);
      }
    }
  }
  .right-card {
    margin-bottom: 1.25rem;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 1px solid var(--custom-border-color);
    &.btn-flex-row {
      margin-left: 24px;
      padding-left: 8px;
      flex-direction: row;
      .el-form-item {
        margin-left: 16px;
        margin-bottom: 0;
      }
    }
    .el-form-item {
      margin-left: 2rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-form-item__content {
      margin-left: 0;
    }
  }
}
.search-btns-wrap {
  border-top: 1px solid var(--custom-border-color);
  padding-top: 1.125rem;
  .right-btns {
    float: right;
  }
}

.svg {
  margin-right: 6px;
}
</style>
