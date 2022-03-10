import { createApp } from 'vue'
import ElementUI from 'element-plus';
import 'element-plus/dist/index.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router';

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    redirect: '/manual'
  },{
      path: '/preset',
      component: () => import('./Preset.vue'), // 동적 import
    },{
    path: '/manual',
    component: () => import('./ManualInput.vue')
  }]
})
app.use(ElementUI)
app.use(router)
app.mount('#app')
