/////每個頁面都會對應到一個路由組件！！
//createRouter 創建路由
//createWebHistory history模式的路由

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

//首頁 必須直接引入首頁的路由組件
import FirstSee from '../views/FirstSee.vue'

//配置路由
// path 路由的路徑 必須以/開頭
// component 對應的路由組件
// name 路由的名字
const routes: Array<RouteRecordRaw> = [
  {
    //首頁
    path: '/', // 首頁路徑只有一條斜槓/
    name: 'FirstSee',
    component: FirstSee //首頁直接填名字
  },
  {
    //分頁homeview
    path: '/MyComponent', 
    name: 'MyComponent',
    //分頁按需引入 沒有訪問就不會加載這個路由組件
    component: () => import('../views/MyComponent.vue')
  }
  
    
  
]
//創建路由對象
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
