<template>
    <el-form :model="form" :rules="rules" ref="ruleFormRef"
        :labelWidth="$attrs.inline === '' || $attrs.inline === true ? '' : '70px'">
        <!-- :style="{ width: $attrs.inline === '' || $attrs.inline === true ? '' : '740px' }"> -->
        <template v-for="field in fields " :key="field.prop">
            <el-form-item v-bind="field" v-if="field.fieldType">
                <el-input v-if="field.fieldType === 'input'" :placeholder="'请输入' + field.label" v-bind="field"
                    v-model="form[field.prop]" />
                <el-select v-else-if="field.fieldType === 'select'" :placeholder="'请选择' + field.label" v-bind="field"
                    v-model="form[field.prop]">
                    <el-option v-for="option in field.fieldData" :key="option.value" v-bind="option" />
                </el-select>
                <el-radio-group v-else-if="field.fieldType === 'radio'" v-model="form[field.prop]" v-bind="field">
                    <el-radio v-for="radio in field.fieldData" :key="radio.value" v-bind="radio" :label="radio.value">{{
                        radio.label
                    }}</el-radio>
                </el-radio-group>
                <el-checkbox-group v-else-if="field.fieldType === 'checkbox'" v-model="form[field.prop]" v-bind="field">
                    <el-checkbox v-for="checkbox in field.fieldData" :key="checkbox.value" v-bind="checkbox"
                        :label="checkbox.value">{{
                            checkbox.label }}</el-checkbox>
                </el-checkbox-group>
                <el-date-picker v-else-if="field.fieldType === 'date'" :placeholder="'请选择' + field.label"
                    :value-format="valueFormat[field.type]" v-bind="removeDefaultValue(field)" v-model="form[field.prop]" />
                <el-switch v-else-if="field.fieldType === 'switch'" v-bind="field" v-model="form[field.prop]" />
                <el-input-number v-else-if="field.fieldType === 'number'" v-bind="field" v-model="form[field.prop]" />
                <el-rate v-else-if="field.fieldType === 'rate'" v-bind="field" v-model="form[field.prop]" />
                <!-- TODO 图片预览待实现 -->
                <el-upload v-else-if="field.fieldType === 'image'" action="https://check.nccxgh.com/cf/FileServer/fileOper"
                    list-type="picture-card" :data="uploadData" accept="image/*" :limit="9" :on-success="uploadSuccess"
                    v-bind="field" v-model:file-list="form[field.prop]">
                    <el-icon v-if="!field.listType">
                        <Plus />
                    </el-icon>
                    <el-button v-else type="primary">选择文件</el-button>
                </el-upload>
                <dict-select v-else-if="field.fieldType === 'dict'" :placeholder="'请选择' + field.label" v-bind="field"
                    v-model="form[field.prop]" />
                <grid-cascade v-else-if="field.fieldType === 'grid'" :placeholder="'请选择' + field.label"
                    v-model="form[field.prop]" />
            </el-form-item>
        </template>
        <el-form-item>
            <el-button v-for="button in defaultButtons.concat(buttons)" :key="button.name"
                @click="button.onClick(formatForm(form), ruleFormRef)" v-bind="removeOnClick(button)">{{
                    button.name
                }}</el-button>
        </el-form-item>
    </el-form>
</template>
  
<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules, UploadFile, UploadFiles } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import { onBeforeMount, reactive, ref, watch, watchEffect } from 'vue'
import { dataFormProps } from './data-form';
import { getFileName, getFileUrl } from '@szxc/http';
import DictSelect from "../../dict-select/src/dict-select.vue";
import GridCascade from "../../grid-cascader/src/grid-cascader.vue";

defineOptions({
    name: 'LivDataForm',
})

const props = defineProps(dataFormProps)

const defaultButtons = reactive([])

onBeforeMount(() => {
    //initForm()
    initRules()
    // TODO 表单提交校验待实现
    props.onSubmit && defaultButtons.push({ name: '提交', type: 'primary', onClick: props.onSubmit });
    props.onReset && defaultButtons.push({ name: '重置', type: 'warning', onClick: props.onReset });
    props.onBack && defaultButtons.push({ name: '返回', onClick: props.onBack });
    props.onSearch && defaultButtons.push({ name: '查询', type: 'primary', onClick: props.onSearch });
    props.onAdd && defaultButtons.push({ name: '新增', type: 'success', onClick: props.onAdd });
})

/* el-button */
// 移除onClick事件，避免触发两次
const removeOnClick = (button) => {
    const { onClick, ...otherProps } = button
    return otherProps
}

/* el-date-picker */
// date picker组件value的格式
const valueFormat = {
    undefined: 'YYYY-MM-DD',
    year: 'YYYY',
    month: 'YYYY-MM',
    date: 'YYYY-MM-DD',
    datetime: 'YYYY-MM-DD HH:mm:ss'
}

// 移除defaultValue属性，避免触发类型警告
const removeDefaultValue = (porps) => {
    const { defaultValue, ...otherProps } = porps
    return otherProps
}

/* el-upload */
// 文件上传参数
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

// 文件上传成功回调
const uploadSuccess = (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles): void => {
    if (!response.success) {
        uploadFiles.pop()
        ElMessage({
            message: response.message ?? '图片上传失败',
            type: 'error'
        })
    }
}

/* el-form */
// 表单实例
const ruleFormRef = ref<FormInstance>()
// 表单对象
const form = reactive({})
// 表单验证规则
const rules = reactive<FormRules>({})

// 初始化表单默认值
const initForm = () => {
    props.fields.forEach(field => {
        const defaultValue = field.defaultValue ?? props.defaultValue[field.prop]
        const { prop, fieldType } = field
        switch (fieldType) {
            case 'checkbox':
                form[prop] = defaultValue?.split(',') ?? []
                break;
            case 'switch':
                form[prop] = defaultValue ?? false
                break;
            case 'number':
                form[prop] = defaultValue ?? 1
                break;
            case 'rate':
                form[prop] = defaultValue ?? 0
                break;
            case 'image':
                form[prop] = (defaultValue?.split(',') ?? []).map(relativeUrl => {
                    let file: UploadFile = {
                        name: getFileName(relativeUrl),
                        response: {
                            success: true,
                            message: [relativeUrl]
                        },
                        url: getFileUrl(relativeUrl),
                        status: 'success',
                        uid: Math.random() * 1000000
                    }
                    return file
                })
                break;
            default:
                form[prop] = defaultValue ?? ""
                break;
        }

    })
}

// 初始化表单验证规则
const initRules = () => {
    props.fields.forEach(field => {
        const { required, prop, label, fieldType } = field;
        let message: string
        switch (fieldType) {
            case 'input':
                message = `请输入${label}`
                break;
            case 'select':
            case 'radio':
            case 'switch':
            case 'checkbox':
            case 'date':
            case 'number':
            case 'rate':
                message = `请选择${label}`
                break;
            default:
                message = `${label}是必填项`
                break;
        }
        rules[prop] = { required, message, trigger: ['blur', 'change'] }
    })
}

// 初始化form的默认值
watch(() => props.defaultValue, (newValue, oldValue) => {
    props.fields.forEach(field => {
        const { prop, fieldType } = field
        const defaultValue = field.defaultValue ?? props.defaultValue[prop]
        switch (fieldType) {
            case 'checkbox':
                form[prop] = defaultValue?.split(',') ?? []
                break;
            case 'switch':
                form[prop] = defaultValue ?? false
                break;
            case 'number':
                form[prop] = defaultValue ?? 1
                break;
            case 'rate':
                form[prop] = defaultValue ?? 0
                break;
            case 'image':
                form[prop] = (defaultValue?.split(',') ?? []).map(relativeUrl => {
                    let file: UploadFile = {
                        name: getFileName(relativeUrl),
                        response: {
                            success: true,
                            message: [relativeUrl]
                        },
                        url: getFileUrl(relativeUrl),
                        status: 'success',
                        uid: Math.random() * 1000000
                    }
                    return file
                })
                break;
            default:
                form[prop] = defaultValue ?? ""
                break;
        }

    })
}, { immediate: true })

// 提交表单
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            ElMessage({
                message: '提交的表单内容：' + JSON.stringify(form),
                type: 'success',
                duration: 5000
            })
            console.log('submit!', form)
        }
    })
}

// 重置表单
const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

// 格式化表单
const formatForm = (form) => {
    const formObj = {}
    props.fields.forEach(field => {
        const { prop, fieldType } = field
        if (fieldType == 'checkbox') {
            formObj[prop] = form[prop].join(',')
        } else if (fieldType == 'image') {
            formObj[prop] = form[prop].map(item => item.response.message[0]).join(',')
        } else {
            formObj[prop] = form[prop]
        }
    })
    return formObj
}
</script>

<style lang="scss" scoped>
:deep(.el-upload-list--picture-card) {
    .el-upload-list__item-thumbnail {
        object-fit: cover;
    }
}
</style>