/////每個頁面都會對應到一個路由組件！！
//createRouter 創建路由
//createWebHistory history模式的路由

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

//首頁 必須直接引入首頁的路由組件
import Start from '../views/Start.vue'

//配置路由
// path 路由的路徑 必須以/開頭
// component 對應的路由組件
// name 路由的名字
const routes: Array<RouteRecordRaw> = [
  {
    //首頁
    path: '/', // 首頁路徑只有一條斜槓/
    name: 'Start',
    component: Start //首頁直接填名字
  },
  {
    //分頁homeview
    path: '/home', 
    name: 'home',
    //分頁按需引入 沒有訪問就不會加載這個路由組件
    component: () => import('../views/HomeView.vue')
  },
  {
    //分頁aboutview
    path: '/about',
    name: 'About',
    //按需引入 可以節約性能
    //如果沒有訪問/about分頁 就不會加載這個組件 除了首頁其他分頁都能做按需引入
    component: () => import('../views/AboutView.vue')
  }
  
]
//創建路由對象
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
