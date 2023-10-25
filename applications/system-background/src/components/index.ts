import type { Component } from 'vue' //import type 是用来协助进行类型检查和声明的，在运行时是完全不存在的。

/* import LivEnvCascader from './LivEnvCascader/index.vue'
import DicSelect from './DicSelect/index.vue' */
import LivPointPicker from './LivPointPicker/index.vue'

// ✨如果使用的是 JS 可以删除类型校验

const components: {
  [propName: string]: Component //字面量类型，每个属性值类型为组件的类型
} = {
  /* LivEnvCascader,
  DicSelect, */
  LivPointPicker
}

export default components
