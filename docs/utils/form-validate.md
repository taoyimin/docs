# 表单校验

用于传入表单的校验规则。

## validateNonEmpty

校验是否为空。

:::demo
```vue
<template>
  <liv-data-form :model="form" :fields="fields" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { validateNonEmpty } from '@szxc/utils';

const form = ref({
  username: ''
})

const fields = [{
  prop: 'username',
  label: '账号',
  required: true,
  fieldType: 'input',
  rules: {
    validator: validateNonEmpty,
    message: '账号不能为空',
    trigger: ['blur', 'change']
  }
}]
</script>
```
:::

## validatePassword

校验是否是密码。（至少8位,至多20位,至少包含1个大写字母、1个小写字母、1个数字和1个特殊字符）

:::demo
```vue
<template>
  <liv-data-form :model="form" :fields="fields" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { validatePassword } from '@szxc/utils';

const form = ref({
  password: ''
})

const fields = [{
  prop: 'password',
  label: '密码',
  required: true,
  fieldType: 'input',
  rules: {
    validator: validatePassword,
    trigger: ['blur', 'change']
  }
}]
</script>
```
:::

## validateNumber

校验是否是纯数字。

:::demo
```vue
<template>
  <liv-data-form :model="form" :fields="fields" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { validateNumber } from '@szxc/utils';

const form = ref({
  age: ''
})

const fields = [{
  prop: 'age',
  label: '年龄',
  required: true,
  fieldType: 'input',
  rules: {
    validator: validateNumber, 
    trigger: ['blur', 'change']
  }
}]
</script>
```
:::

## validatePhone

校验是否是手机号。

:::demo
```vue
<template>
  <liv-data-form :model="form" :fields="fields" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { validatePhone } from '@szxc/utils';

const form = ref({
  phone: ''
})

const fields = [{
  prop: 'phone',
  label: '手机号',
  required: true,
  fieldType: 'input',
  rules: {
    validator: validatePhone, 
    trigger: ['blur', 'change']
  }
}]
</script>
```
:::

## validateIdCard

校验是否是身份证。

:::demo
```vue
<template>
  <liv-data-form :model="form" :fields="fields" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { validateIdCard } from '@szxc/utils';

const form = ref({
  idcard: ''
})

const fields = [{
  prop: 'idcard',
  label: '身份证',
  required: true,
  fieldType: 'input',
  rules: {
    validator: validateIdCard, 
    trigger: ['blur', 'change']
  }
}]
</script>
```
:::

## validateLongitude

校验是否是经度。

:::demo
```vue
<template>
  <liv-data-form :model="form" :fields="fields" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { validateLongitude } from '@szxc/utils';

const form = ref({
  longitude: ''
})

const fields = [{
  prop: 'longitude',
  label: '经度',
  required: true,
  fieldType: 'input',
  rules: {
    validator: validateLongitude, 
    trigger: ['blur', 'change']
  }
}]
</script>
```
:::

## validateLatitude

校验是否是纬度。

:::demo
```vue
<template>
  <liv-data-form :model="form" :fields="fields" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { validateLatitude } from '@szxc/utils';

const form = ref({
  latitude: ''
})

const fields = [{
  prop: 'latitude',
  label: '纬度',
  required: true,
  fieldType: 'input',
  rules: {
    validator: validateLatitude, 
    trigger: ['blur', 'change']
  }
}]
</script>
```
:::

## validateEmail

校验是否是邮箱。

:::demo
```vue
<template>
  <liv-data-form :model="form" :fields="fields" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { validateEmail } from '@szxc/utils';

const form = ref({
  latitude: ''
})

const fields = [{
  prop: 'email',
  label: '邮箱',
  required: true,
  fieldType: 'input',
  rules: {
    validator: validateEmail, 
    trigger: ['blur', 'change']
  }
}]
</script>
```
:::

## validateDecimal

校验小数位数。

:::demo
```vue
<template>
  <liv-data-form :model="form" :fields="fields" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { 
  validateDecimal1, 
  validateDecimal2, 
  validateDecimal3, 
  validateDecimal4 
} from '@szxc/utils'

const form = ref({
  decimal: ''
})

const fields = [
  {
    prop: 'decimal1',
    label: '一位以内小数',
    required: true,
    fieldType: 'input',
    rules: {
      validator: validateDecimal1,
      trigger: ['blur', 'change']
    }
  },
  {
    prop: 'decimal2',
    label: '二位以内小数',
    required: true,
    fieldType: 'input',
    rules: {
      validator: validateDecimal2,
      trigger: ['blur', 'change']
    }
  },
  {
    prop: 'decimal3',
    label: '三位以内小数',
    required: true,
    fieldType: 'input',
    rules: {
      validator: validateDecimal3,
      trigger: ['blur', 'change']
    }
  },
  {
    prop: 'decimal',
    label: '四位以内小数',
    required: true,
    fieldType: 'input',
    rules: {
      validator: validateDecimal4,
      trigger: ['blur', 'change']
    }
  }
]
</script>
```
:::