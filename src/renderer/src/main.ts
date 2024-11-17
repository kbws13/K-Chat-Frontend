import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from '@/router';
import Dialog from './componments/Dialog.vue';
import BaseLayout from '@/layout/BaseLayout.vue';
import WinOption from './componments/WinOption.vue';
import ContentPanel from './componments/ContentPanel.vue';
import ShowLocalImage from './componments/ShowLocalImage.vue';
import UserBaseInfo from './componments/UserBaseInfo.vue';
import * as Pinia from 'pinia'
import "@/plugin/axios";
import '@/assets/cust-elementplus.scss'
import '@/assets/icon/iconfont.css'
import '@/assets/base.scss'

createApp(App)
  .use(ElementPlus)
  .use(router)
  .use(Pinia.createPinia())
  .component("BaseLayout", BaseLayout)
  .component("WinOption", WinOption)
  .component("ContentPanel", ContentPanel)
  .component("ShowLocalImage", ShowLocalImage)
  .component("UserBaseInfo", UserBaseInfo)
  .component("Dialog", Dialog)
  .mount('#app')
