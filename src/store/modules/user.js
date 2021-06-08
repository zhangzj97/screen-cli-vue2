import { service, serviceList } from '@/store/services/user'
import { AutoStoreState, AutoStoreActions, AutoStoreGetters, AutoStoreMutations } from '@/vender/z-tools/StoreService'

// *** [Screen-cli] [1-1] 设置 需要管理的状态列表 开始
const stateList = ['card01']
// *** [Screen-cli] [1-1] 设置 需要管理的状态列表 结束

const state = {
    ...new AutoStoreState(stateList).getModules(),
    ...new AutoStoreState(serviceList).getModules()
}
const getters = {
    ...new AutoStoreGetters(stateList).getModules(),
    ...new AutoStoreGetters(serviceList).getModules()
}
const actions = {
    ...new AutoStoreActions(serviceList, { service }).getModules()
}
const mutations = {
    ...new AutoStoreMutations(stateList).getModules(),
    ...new AutoStoreMutations(serviceList).getModules()
}

const store = { namespaced: true, state, getters, actions, mutations }

export default store
