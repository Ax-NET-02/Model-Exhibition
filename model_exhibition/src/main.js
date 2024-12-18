import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import Varlet from '@varlet/ui';
import '@varlet/ui/es/style';
import App from './App.vue';

// 创建应用实例
const app = createApp(App);

// 使用 Varlet 和 ElementPlus 插件
app.use(Varlet).use(ElementPlus);

// 注册 ElementPlus 图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 挂载应用
app.mount('#app');
