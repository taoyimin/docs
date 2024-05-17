<template>
  <!-- 如果没有传入prop，则设置一个默认的prop用于触发表单校验 -->
  <el-form-item
    ref="formItemRef"
    v-bind="itemProps"
    :prop="itemProps.prop ?? '__FormItemDefaultProp__'"
    :rules="formItemRules"
  >
    <!-- 如果传入了maxlength则默认开启showWordLimit属性 -->
    <el-input
      v-if="fieldType === 'input' || fieldType === 'textarea'"
      :placeholder="'请输入' + (label ?? '')"
      :showWordLimit="$attrs.maxlength ? true : false"
      :type="fieldType === 'textarea' ? 'textarea' : 'text'"
      :rows="3"
      v-bind="contentAttrs"
      v-model="model"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template>
    </el-input>
    <el-select
      v-else-if="fieldType === 'select'"
      :placeholder="'请选择' + (label ?? '')"
      clearable
      style="flex-grow: 1"
      v-bind="contentAttrs"
      v-model="model"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template>
    </el-select>
    <!-- checkStrictly默认为true，emitPath默认为false -->
    <el-cascader
      v-else-if="fieldType === 'cascader'"
      :placeholder="'请选择' + (label ?? '')"
      clearable
      style="flex-grow: 1"
      :props="cascaderProps"
      v-bind="omit(contentAttrs, ['props'])"
      v-model="model"
      @change="validateFormItem"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template>
    </el-cascader>
    <el-radio-group v-else-if="fieldType === 'radio'" v-bind="contentAttrs" v-model="model">
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template>
    </el-radio-group>
    <el-checkbox-group
      v-else-if="fieldType === 'checkbox'"
      v-bind="contentAttrs"
      v-model="model"
      @change="validateFormItem"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template>
    </el-checkbox-group>
    <el-date-picker
      v-else-if="fieldType === 'date'"
      :placeholder="'请选择' + (label ?? '')"
      :value-format="dateValueFormat[$attrs.type as keyof typeof dateValueFormat]"
      clearable
      style="flex-grow: 1"
      v-bind="contentAttrs"
      v-model="model"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template>
    </el-date-picker>
    <el-switch v-else-if="fieldType === 'switch'" v-bind="contentAttrs" v-model="model">
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template>
    </el-switch>
    <el-input-number
      v-else-if="fieldType === 'number'"
      :placeholder="'请输入' + (label ?? '')"
      style="flex-grow: 1"
      v-bind="contentAttrs"
      v-model="model"
    />
    <el-rate v-else-if="fieldType === 'rate'" v-bind="$attrs" v-model="model" />
    <el-color-picker v-else-if="fieldType === 'color'" v-bind="contentAttrs" v-model="model" />
    <el-upload
      v-else-if="
        fieldType === 'image' ||
        fieldType === 'audio' ||
        fieldType === 'video' ||
        fieldType === 'file'
      "
      :action="uploadUrl"
      :headers="uploadHeaders"
      :list-type="uploadListType[fieldType]"
      :data="uploadData"
      :accept="uploadAccpet[fieldType]"
      :limit="9"
      :on-preview="handlePictureCardPreview"
      style="flex-grow: 1"
      :class="{
        hide: fileList.length >= (($attrs.limit as number) || 9)
      }"
      v-bind="omit(contentAttrs, ['on-success', 'on-remove'])"
      :file-list="model"
      :on-success="uploadSuccess"
      :on-remove="uploadRemove"
    >
      <el-icon v-if="($attrs.listType ?? uploadListType[fieldType]) === 'picture-card'">
        <Plus />
      </el-icon>
      <el-button
        v-else
        type="primary"
        plain
        :disabled="((model as [])?.length ?? 0) >= (($attrs.limit as number) || 9)"
      >
        <el-icon style="margin-right: 4px" size="16"><FolderOpened /></el-icon>
        选择文件</el-button
      >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template>
      <template v-if="$attrs.tip" #tip>
        <div class="el-upload__tip">{{ $attrs.tip }}</div>
      </template>
    </el-upload>
    <dict-select
      v-else-if="fieldType === 'dict'"
      :placeholder="'请选择' + (label ?? '')"
      clearable
      style="flex-grow: 1"
      v-bind="contentAttrs"
      v-model="model"
    />
    <dict-select
      v-else-if="fieldType === 'dictId'"
      :placeholder="'请选择' + (label ?? '')"
      clearable
      style="flex-grow: 1"
      v-bind="contentAttrs"
      v-model:dict-id="model"
    />
    <grid-cascader
      v-else-if="fieldType === 'grid' || fieldType === 'gridCode'"
      :placeholder="'请选择' + (label ?? '')"
      clearable
      style="flex-grow: 1"
      v-bind="contentAttrs"
      v-model="model"
      @change="validateFormItem"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template>
    </grid-cascader>
    <grid-cascader
      v-else-if="fieldType === 'gridId'"
      :placeholder="'请选择' + (label ?? '')"
      clearable
      style="flex-grow: 1"
      v-bind="contentAttrs"
      v-model:grid-id="model"
      @change="validateFormItem"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template>
    </grid-cascader>
    <page-select
      v-else-if="fieldType === 'pageSelect'"
      :placeholder="'请选择' + (label ?? '')"
      clearable
      :loading="pageSelectLoading"
      :data="pageSelectRecords"
      :total="pageSelectTotal"
      :remoteMethod="buildPageSelectRemoteMethod(contentAttrs.fieldData)"
      style="flex-grow: 1"
      v-bind="contentAttrs"
      v-model="model"
    />
    <personnel-select
      v-else-if="fieldType === 'personnel'"
      :placeholder="'请选择' + (label ?? '')"
      clearable
      style="flex-grow: 1"
      v-bind="contentAttrs"
      v-model="model"
    />
    <!-- <location-picker-plus
      v-else-if="fieldType === 'location'"
      :placeholder="'请选择' + (label ?? '')"
      style="flex-grow: 1"
      v-bind="contentAttrs"
      v-model="model"
    ></location-picker-plus> -->
    <div class="location-picker-wrap" v-else-if="fieldType === 'location'">
      <el-button type="primary" plain @click="locationDialog = true">
        <liv-icon-font name="icon-weibiaoti--" size="16" />
        <span style="margin-left: 4px">选择位置</span></el-button
      >
      <div class="location-val" v-if="model?.longitude || model?.latitude">
        <span :title="model?.longitude">经度：{{ model?.longitude }}</span>
        <span :title="model?.latitude">纬度：{{ model?.latitude }}</span>
      </div>
      <el-dialog title="选取经纬度" v-model="locationDialog">
        <location-picker
          v-bind="contentAttrs"
          v-model="model"
          @change="validateFormItem"
          @closed="closeLocationDialog"
        ></location-picker>
      </el-dialog>
    </div>
    <template v-else>
      <slot></slot>
    </template>
  </el-form-item>
  <el-dialog v-model="dialogVisible">
    <img class="w-full" :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
</template>

<script lang="ts" setup>
import { computed, nextTick, ref, useAttrs } from 'vue'
import type {
  FormItemProps,
  FormItemRule,
  UploadFile,
  UploadFiles,
  UploadProps
} from 'element-plus'
import { formItemProps as elFormItemProps } from 'element-plus'
import { FolderOpened, Plus } from '@element-plus/icons-vue'
import { omit, pick } from 'lodash-es'
import { getFileName, getFileUrl } from '@szxc/utils'
import { formItemProps } from './form-item'
import DictSelect from '../../dict-select/src/dict-select.vue'
import GridCascader from '../../grid-cascader/src/grid-cascader.vue'
import PageSelect from '../../page-select/src/page-select.vue'
import PersonnelSelect from '../../personnel-select/src/personnel-select.vue'
import LocationPicker from '../../location-picker/src/location-picker.vue'
import { useUserStore } from '@szxc/stores'

defineOptions({
  name: 'LivFormItem',
  inheritAttrs: false
})

const formItemRef = ref(null)

const userStore = useUserStore()

const uploadHeaders = ref({})

if (import.meta.env.VITE_USE_MINIO === 'true') {
  uploadHeaders.value = {
    Authorization: 'Basic c3dvcmQ6c3dvcmRfc2VjcmV0',
    'Blade-Auth': `${userStore.tokenType} ${userStore.accessToken}`
  }
}

const uploadUrl =
  import.meta.env.VITE_USE_MINIO === 'true'
    ? import.meta.env.VITE_BASE_URL + '/blade-resource/oss/endpoint/putAttach'
    : import.meta.env.VITE_FILE_URL + '/cf/FileServer/fileOper'

const props = defineProps(formItemProps)

const attrs = useAttrs()

const itemProps = computed<FormItemProps>(() => {
  return pick(props, Object.keys(elFormItemProps))
})

const contentAttrs = computed(() => {
  return omit(attrs, Object.keys(elFormItemProps))
})

// 上传组件的图片预览功能
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}
// 上传文件列表
const fileList = ref<UploadFiles>([])

// 地图选点弹框
const locationDialog = ref(false)

const closeLocationDialog = () => {
  locationDialog.value = false
}

// 双向绑定model
const [model, modifiers] = defineModel({
  default: undefined,
  type: [String, Number, Boolean, Object, Array],
  set(value) {
    if (modifiers.raw) {
      return value
    } else {
      switch (props.fieldType) {
        case 'input':
        case 'textarea':
        case 'radio':
        case 'date':
        case 'number':
        case 'switch':
        case 'rate':
        case 'color':
        case 'location':
          return value
        case 'select':
        case 'dict':
        case 'dictId':
        case 'pageSelect':
        case 'personnel':
          if (attrs.multiple === '' || attrs.multiple === true) {
            return Array.isArray(value) ? value.join(',') : value
          } else {
            return value
          }
        case 'cascader':
        case 'grid':
        case 'gridCode':
        case 'gridId':
          if ((attrs.props as any)?.multiple === '' || (attrs.props as any)?.multiple === true) {
            return Array.isArray(value) ? value.join(',') : value
          } else {
            return value
          }
        case 'checkbox':
          return (value as []).join(',')
        case 'image':
        case 'audio':
        case 'video':
        case 'file':
          fileList.value = value as UploadFiles
          return uploadFiles2Urls(value as UploadFiles)
        default:
          const n: never = props.fieldType
          return value
      }
    }
  },
  get(value) {
    if (modifiers.raw) {
      return value
    } else {
      switch (props.fieldType) {
        case 'input':
        case 'textarea':
        case 'radio':
        case 'date':
        case 'number':
        case 'switch':
        case 'rate':
        case 'color':
        case 'location':
          return value
        case 'select':
        case 'dict':
        case 'dictId':
        case 'pageSelect':
          if (attrs.multiple === '' || attrs.multiple === true) {
            return value ? (Array.isArray(value) ? value : (value as string).split(',')) : []
          } else {
            return value
          }
        case 'personnel':
          if (attrs.multiple === '' || attrs.multiple === true) {
            return (value ? (Array.isArray(value) ? value : (value as string).split(',')) : []).map(
              (value) => {
                return value
              }
            )
          } else {
            return value
          }
        case 'cascader':
        case 'grid':
        case 'gridCode':
        case 'gridId':
          if ((attrs.props as any)?.multiple === '' || (attrs.props as any)?.multiple === true) {
            return value ? (Array.isArray(value) ? value : (value as string).split(',')) : []
          } else {
            return value
          }
        case 'checkbox':
          return value ? (value as string).split(',') : []
        case 'image':
        case 'audio':
        case 'video':
        case 'file':
          return urls2UploadFiles(value as string)
        default:
          const n: never = props.fieldType
          return value
      }
    }
  }
})

// 初始化表单项默认的rules
const formItemRules = computed(() => {
  const { required, label, rules } = props
  const itemRules: FormItemRule = {
    required: required,
    message: '',
    trigger: ['blur', 'change']
  }
  switch (props.fieldType) {
    case 'input':
    case 'textarea':
    case 'number':
      itemRules.message = `请输入${label ?? ''}`
      if (required) {
        itemRules.validator = (_rule: any, _value: any, callback: any) => {
          if (model.value !== undefined && model.value !== null && model.value !== '') {
            callback()
          } else {
            callback(new Error())
          }
        }
      }
      break
    case 'select':
    case 'cascader':
    case 'radio':
    case 'switch':
    case 'date':
    case 'rate':
    case 'color':
    case 'dict':
    case 'dictId':
    case 'grid':
    case 'gridCode':
    case 'gridId':
    case 'personnel':
    case 'pageSelect':
      itemRules.message = `请选择${label ?? ''}`
      if (required) {
        itemRules.validator = (_rule: any, _value: any, callback: any) => {
          if (
            (!Array.isArray(model.value) &&
              model.value !== undefined &&
              model.value !== null &&
              model.value !== '') ||
            (Array.isArray(model.value) && model.value.length > 0)
          ) {
            callback()
          } else {
            callback(new Error())
          }
        }
      }
      break
    case 'checkbox':
      itemRules.message = `请选择${label ?? ''}`
      // 加了change页面会卡死，原因不明
      itemRules.trigger = ['blur']
      if (required) {
        itemRules.validator = (_rule: any, _value: any, callback: any) => {
          if (
            model.value !== undefined &&
            model.value !== null &&
            model.value !== '' &&
            model.value?.length > 0
          ) {
            callback()
          } else {
            callback(new Error())
          }
        }
      }
      break
    case 'image':
    case 'audio':
    case 'video':
    case 'file':
      //const { autoUpload } = attrs;
      itemRules.message = `请上传${label ?? ''}`
      if (required) {
        itemRules.validator = (_rule: any, _value: any, callback: any) => {
          if (
            (!Array.isArray(model.value) &&
              model.value !== undefined &&
              model.value !== null &&
              model.value !== '') ||
            (Array.isArray(model.value) && model.value.length > 0)
          ) {
            callback()
          } else {
            callback(new Error())
          }
        }
      }
      break
    case 'location':
      itemRules.message = `请选择${label ?? ''}`
      if (required) {
        itemRules.validator = (_rule: any, _value: any, callback: any) => {
          if (
            model.value !== undefined &&
            model.value !== null &&
            model.value !== '' &&
            Object.keys(model.value).length > 0
          ) {
            callback()
          } else {
            callback(new Error())
          }
        }
      }
      break
    default:
      const n: never = props.fieldType
      itemRules.message = `${label ?? '该项'}是必填项`
      break
  }
  // 如果传入的rules是数组，则直接使用传入的rules。如果rules传入的是不是数组，则加上组件内部默认生成的校验规则
  return rules ? (Array.isArray(rules) ? rules : [itemRules, rules]) : itemRules
})

// 解决部分组件绑定值改变后没有触发校验的问题
function validateFormItem(_value?: any) {
  nextTick(() => formItemRef.value?.validate('change'))
}

/* el-cascader */
// el-cascader默认属性
const cascaderProps = computed(() => {
  return Object.assign(
    {
      checkStrictly: true,
      emitPath: false
    },
    attrs.props
  )
})

/* el-date-picker */
// date picker组件value的格式
const dateValueFormat = {
  undefined: 'YYYY-MM-DD',
  year: 'YYYY',
  month: 'YYYY-MM',
  date: 'YYYY-MM-DD',
  datetime: 'YYYY-MM-DD HH:mm:ss',
  dateTime: 'YYYY-MM-DD HH:mm:ss'
}

/* el-upload */
// el-upload文件上传参数
const uploadData = {
  action: 'upload',
  rename: true,
  // TODO 暂时写死
  belongOrgId: 'yunyouxc',
  folder: '2023-10',
  flag: true,
  gridName: '',
  reportName: '',
  plantName: '长效管护'
}

// el-upload回显列表类型
const uploadListType = {
  image: 'picture-card',
  audio: 'text',
  video: 'text',
  file: 'text'
}

// el-upload上传文件类型
const uploadAccpet = {
  image: 'image/*',
  audio: 'audio/*',
  video: 'video/*',
  file: '*'
}

// el-upload文件上传成功回调
function uploadSuccess(response: any, uploadFile: UploadFile, uploadFiles: UploadFiles): void {
  if (
    response.success === true &&
    uploadFiles.filter((uploadFile) => uploadFile.status !== 'success').length === 0
  ) {
    // 上传成功后更新model，如果是多选文件，等所有文件都上传成功后再更新model
    model.value = uploadFiles
    // 校验表单
    validateFormItem(uploadFiles)
  }
  if (attrs['on-success']) {
    // 如果外部监听了on-success事件，则触发该事件
    ;(attrs['on-success'] as Function)(response, uploadFile, uploadFiles)
  }
}

// el-upload文件移除成功回调
function uploadRemove(uploadFile: UploadFile, uploadFiles: UploadFiles): void {
  // 移除文件后更新model
  model.value = uploadFiles
  // 校验表单
  validateFormItem(uploadFiles)
  if (attrs['on-remove']) {
    // 如果外部监听了on-remove事件，则触发该事件
    ;(attrs['on-remove'] as Function)(uploadFile, uploadFiles)
  }
}

// 将el-upload选取的文件数组转换成后端需要的格式
function uploadFiles2Urls(uploadFiles: UploadFiles): string {
  return uploadFiles
    .reduce((urls, file) => {
      if (import.meta.env.VITE_USE_MINIO === 'true') {
        if (file.status === 'success' && file.response && (file.response as any).success) {
          urls.push((file.response as any).data.name)
        }
      } else {
        if (file.status === 'success' && file.response && (file.response as any).success) {
          urls.push((file.response as any).message[0])
        }
      }
      return urls
    }, [])
    .join(',')
}

// 将后端返回的格式转换成el-upload需要的文件数组
function urls2UploadFiles(urls: string): UploadFiles {
  const relativeUrls = urls ? urls.split(',') : []
  const files = []
  relativeUrls.map((relativeUrl) => {
    // 优先获取之前选择过的file对象
    if (import.meta.env.VITE_USE_MINIO === 'true') {
      const file: UploadFile = fileList.value?.find(
        (item) => (item.response as any)?.data.name === relativeUrl
      )
      if (!file) {
        // 之前没有选取过，手动创建一个file对象
        files.push({
          name: getFileName(relativeUrl),
          response: {
            success: true,
            data: {
              name: relativeUrl
            }
          },
          url: getFileUrl(relativeUrl),
          status: 'success',
          uid: new Date().getTime()
        })
      } else {
        files.push(file)
      }
    } else {
      const file: UploadFile = fileList.value?.find(
        (item) => (item.response as any)?.message[0] === relativeUrl
      )
      if (!file) {
        // 之前没有选取过，手动创建一个file对象
        files.push({
          name: getFileName(relativeUrl),
          response: {
            success: true,
            message: [relativeUrl]
          },
          url: getFileUrl(relativeUrl),
          status: 'success',
          uid: new Date().getTime()
        })
      } else {
        files.push(file)
      }
    }
  })
  return files
}

//region pageSelect
const pageSelectLoading = ref(false)
const pageSelectTotal = ref(0)
const pageSelectRecords = ref([])
const buildPageSelectRemoteMethod = (
  action: (
    inputValue: string,
    pageNo: number,
    pageSize: number,
    resolve: (total: number, records: []) => void
  ) => void
) => {
  const resolve = (total: number, record: []) => {
    pageSelectLoading.value = false
    pageSelectTotal.value = total
    pageSelectRecords.value = record
  }

  return (inputValue: string, pageNo: number, pageSize: number) => {
    pageSelectLoading.value = true
    action(inputValue, pageNo, pageSize, resolve)
  }
}
//endregion
</script>

<style lang="scss" scoped>
:deep(.hide .el-upload--picture-card) {
  display: none;
}

:deep(.el-upload-list--picture-card) {
  .el-upload-list__item-thumbnail {
    object-fit: cover;
  }
}

:deep(.el-upload--picture-card) {
  --el-upload-picture-card-size: 100px;
}

:deep(.el-upload-list--picture-card) {
  --el-upload-list-picture-card-size: 100px;
}

:deep(.el-select) {
  min-width: 200px;
}

:deep(.el-select__wrapper) {
  width: 100%;
}

.location-picker-wrap {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  .location-val {
    flex: 1;
    margin-left: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    white-space: nowrap;
    span {
      max-width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.w-full {
  width: 100%;
  height: 100%;
}

.el-upload__tip {
  font-size: 12px;
  color: var(--el-text-color-placeholder);
}
</style>
