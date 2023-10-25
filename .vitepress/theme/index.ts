import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import LivUI from '@szxc/components'
import LivDictSelect from '../../Liv-UI/components/demo-dict-select.vue'
import "./styles/vars.css";

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx)
        ctx.app.component('Demo', Demo)
        ctx.app.component('DemoBlock', DemoBlock)
        ctx.app.use(ElementPlus, { locale: zhCn })
        ctx.app.use(LivUI)
        ctx.app.component('LivDictSelect', LivDictSelect)
    }
}