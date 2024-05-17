<template>
  <el-form
    ref="formRef"
    class="vp-raw"
    v-bind="elFormProps"
    :labelWidth="labelWidth === '' ? 'auto' : labelWidth"
    @submit.native.prevent
    @keyup.enter="handleSubmit"
  >
    <el-config-provider :locale="zhCn">
      <template v-for="row in validFields">
        <el-row v-remove="inline" :gutter="20">
          <template
            v-for="field in Array.isArray(toValue(row)) ? toValue(row) : [toValue(row)]"
            v-remove="!inline"
          >
            <el-col
              v-remove="inline"
              :span="
                toValue(field).span !== undefined
                  ? toValue(field).span
                  : 24 / (Array.isArray(toValue(row)) ? toValue(row).length : 1)
              "
            >
              <component v-if="field.__v_isVNode" :is="field"></component>
              <template v-else-if="toValue(field).fieldType">
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
                    toValue(field).fieldType === 'location' && Array.isArray(toValue(field).prop)
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
              </template>
            </el-col>
          </template>
        </el-row>
      </template>
      <el-form-item label-width="0">
        <div v-remove="inline" class="button-container">
          <el-button
            :class="operationButtons.length < 3 ? 'long-button' : ''"
            v-for="button in operationButtons"
            :key="button.name"
            @click="onBtnClick(button, model, formRef)"
            v-bind="omit(button, ['onClick'])"
            >{{ button.name }}</el-button
          >
        </div>
      </el-form-item>
    </el-config-provider>
  </el-form>
</template>
<script lang="ts" setup>
import { ref, toValue, watchEffect, useAttrs, useSlots, computed, onMounted } from 'vue'
import type { FormInstance, FormProps } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { pick, omit, flattenDeep, cloneDeep } from 'lodash-es'
import { useAuthorityStore } from '@szxc/stores'
import { dataFormProps } from './data-form'
import { formProps } from 'element-plus'
import FormItem from '../../form-item/src/form-item.vue'

defineOptions({
  name: 'LivDataForm',
  inheritAttrs: false
})

// 组件属性
const props = defineProps(dataFormProps)

// 表单实例
const formRef = ref<FormInstance | null>(null)

// DataForm需要暴露的属性及方法
const expose = { ...formRef.value }

defineExpose(expose)

onMounted(() => {
  Object.assign(expose, formRef.value)
})

// 组件参数
const attrs = useAttrs()

// 组件插槽
const slots = useSlots()

// el-form组件的属性
const elFormProps = computed<FormProps>(() => {
  return pick(props, Object.keys(formProps))
})

const vNodes = computed(() => {
  return slots['default'] ? slots['default']() : []
})

// 有效的fields
const validFields = computed(() => {
  const fields = cloneDeep(
    props.fields.filter((field) => Array.isArray(toValue(field)) || toValue(field).fieldType)
  )
  vNodes.value.forEach((vNode) => {
    const fieldIndex = vNode.props ? vNode.props['field-index'] : undefined
    if (fieldIndex !== undefined && fieldIndex < fields.length) {
      if (Array.isArray(fields[fieldIndex])) {
        fields[fieldIndex].push(vNode)
      } else {
        fields.splice(fieldIndex, 0, [vNode])
      }
    } else {
      fields.push([vNode])
    }
  })
  return fields
})

// 操作按钮
const operationButtons = ref<Array<any>>([])

// 权限存储
const authorityStore = useAuthorityStore()

// 初始化操作按钮
watchEffect(() => {
  operationButtons.value = [
    {
      name: '提交',
      key: 'onSubmit',
      type: 'primary',
      validate: true,
      authority: undefined,
      onClick: undefined
    },
    {
      name: '查询',
      key: 'onSearch',
      type: 'primary',
      validate: true,
      authority: undefined,
      onClick: undefined
    },
    {
      name: '重置',
      key: 'onReset',
      type: 'warning',
      authority: undefined,
      onClick: undefined
    },
    {
      name: '新增',
      key: 'onAdd',
      type: 'success',
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

// 按钮点击事件
const onBtnClick = (button: any, model: any, formRef: any) => {
  button.validate ? validateForm(model, formRef, button.onClick) : button.onClick(model, formRef)
}

// 回车键事件
const handleSubmit = () => {
  const searchButton = operationButtons.value.find((button) => button.key === 'onSearch')
  if (!searchButton) return
  onBtnClick(searchButton, props.model, formRef.value)
}

/* el-form */
// 子组件数据
const fieldDatas = ref({})

// 初始化子组件的数据
const initFieldDatas = (field) => {
  if (field.fieldData) {
    const fieldDataImpl = toValue(field.fieldData)
    if (Array.isArray(fieldDataImpl)) {
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
  flattenDeep(props.fields).forEach((fieldRef) => {
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
  flattenDeep(props.fields)
    .concat(vNodes.value)
    .forEach((fieldRef) => {
      const field = toValue(fieldRef)
      if (field.__v_isVNode) {
        if (Array.isArray(field.props.prop)) {
          field.props.prop.forEach((prop) => {
            if (prop in model) {
              tempModel[prop] = model[prop]
            }
          })
          return
        } else {
          if (field.props.prop in model) {
            tempModel[field.props.prop] = model[field.props.prop]
          }
        }
      } else {
        if (field.prop in model) {
          tempModel[field.prop] = model[field.prop]
        }
        if (field.propName in model) {
          tempModel[field.propName] = model[field.propName]
        }
      }
    })
  return tempModel
}

//region pageSelect
const pageSelectLoading = ref({})
const pageSelectTotal = ref({})
const pageSelectRecords = ref({})
const buildPageSelectRemoteMethod = (
  prop,
  action: (inputValue, pageNo, pageSize, resolve: (total: any, records: any) => void) => void
) => {
  const resolve = (total, record) => {
    pageSelectLoading.value[prop] = false
    pageSelectTotal.value[prop] = total
    pageSelectRecords.value[prop] = record
  }

  return (inputValue, pageNo, pageSize) => {
    pageSelectLoading.value[prop] = true
    action(inputValue, pageNo, pageSize, resolve)
  }
}
//endregion
</script>

<style scoped lang="scss">
.button-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .long-button {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}
</style>
