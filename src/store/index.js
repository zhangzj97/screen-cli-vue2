import Vue  from 'vue'
import Vuex from 'vuex'
// 自动引入模块
import { AutoImportStore } from '@/vender/z-tools/AutoImport'

Vue.use(Vuex)

const modules = new AutoImportStore(require.context('@/store/modules/', true, /\.js$/)).getModules()

const store = new Vuex.Store({ state: {}, mutations: {}, actions: {}, modules })

export default store;
