import Vue        from 'vue'
import VueRouter  from 'vue-router'
// 自动引入模块
import { AutoImportRouters } from '@/vender/z-tools/AutoImport'
// TODO 键盘 切换 路由
// import KeyboardRouter     from '@/vender/ztools/KeyboardRouter'

// *** [Screen-cli] [2-1] 引入 有特殊需求的路由组件 开始
// ***
// *** [Screen-cli] [2-1] 引入 有特殊需求的路由组件 结束

const routers = [
  // TODO 键盘 切换 路由
  // ...new KeyboardRouter(),
  // *** [Screen-cli] [1-1] 自动引入 常规路由组件 开始
  ...new AutoImportRouters(require.context('@/views/Main', true, /\.vue$/)).getModules(),
  ...new AutoImportRouters(require.context('@/views/Main', true, /\.vue$/), { prefix: '/Demo' }).getModules(),
  // *** [Screen-cli] [1-1] 自动引入 常规路由组件 结束
]

Vue.use(VueRouter)

const routes = [
  // 自动引入模块
  ...routers

  // *** [Screen-cli] [2-2] 配置 有特殊需求的路由组件 开始
  // ***
  // *** [Screen-cli] [2-2] 配置 有特殊需求的路由组件 结束
]

const router = new VueRouter({ mode: 'history', base: process.env.BASE_URL, routes })

export default router
