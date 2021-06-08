import Vue        from 'vue'
import VueRouter  from 'vue-router'
// TODO 自动引入模块功能
// import AutoImport from '@/vender/z-tools/AutoImport011'

// const routeMain = new AutoImport('@/views/Main', /\.vue$/, false).vue2Router();

Vue.use(VueRouter)

const routes = [
  // ...routeMain
]

const router = new VueRouter({ mode: 'history', base: process.env.BASE_URL, routes })

export default router
