import Vue        from 'vue'
import VueRouter  from 'vue-router'
// TODO 自动引入模块功能
import { AutoImportRouters } from '@/vender/z-tools/AutoImport'
// TODO 键盘 切换 路由
// import KeyboardRouter     from '@/vender/ztools/KeyboardRouter'

const routers = [
  ...new AutoImportRouters(require.context('@/views/Main', true, /\.vue$/)).getModules(),
];

Vue.use(VueRouter)

const routes = [
  ...routers
]

const router = new VueRouter({ mode: 'history', base: process.env.BASE_URL, routes })

export default router
