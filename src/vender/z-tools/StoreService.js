export class AutoStore {
    constructor(list, option = {}) {
        this._list    = list
        this._modules = {}                 
        
        this.option   = option
    }

    getModules () { throw new Error('[z-tools] 不能直接使用') }
    getOption  () { throw new Error('[z-tools] 不能直接使用') }
}

export class AutoStoreState extends AutoStore {
    constructor (list, option = {}) {
        super(list, option)
    }

    getModules () {
        let modules = {}
        this._list.forEach(item => modules[item] = {})
        this._modules = modules
        return this._modules
    }
}
export class AutoStoreGetters extends AutoStore {
    constructor (list, option = {}) {
        super(list, option)
    }

    getModules () {
        let modules = {}
        this._list.forEach(item => modules[item] = (state) => state[item])
        this._modules = modules
        return this._modules
    }
}
export class AutoStoreActions extends AutoStore {
    constructor (list, option = {}) {
        super(list, option)

        this._service = option.service || {}
    }

    _actionFun (item) {
        const service = this._service
        return ({ commit }) => {
            new Promise((resolve, reject) => {
                (service[`get${item}`])().then((res) => { 
                    if (res.code !== 200) {
                        reject(res)
                        return 
                    } 
                    resolve(res) 
                    commit(`set${item}`, res) 
                })
            })
        }
    }

    getModules () {
        let modules = {}
        this._list.forEach(item => modules[`get${item}`] = this._actionFun(item) )
        this._modules = modules
        return this._modules
    }
}
export class AutoStoreMutations extends AutoStore {
    constructor (list, option = {}) {
        super(list, option)
    }

    _actionFun (item) {
        return (state, payload) => { 
            state[item] = payload 
        }
    }

    getModules () {
        let modules = {}
        this._list.forEach(item => modules[`set${item}`] = this._actionFun(item))
        this._modules = modules
        return this._modules
    }
}

export class AutoStoreMockService extends AutoStore {
    constructor (list, option = {}) {
        super(list, option)

        this._moduleName = option.moduleName || 'noName'
        this._api        = option.api
    }

    _actionFun (item) {
        const api = this.api
        return (payload) => api.post(`/api/${this.moduleName}/get${item}`, payload).then(({ data }) => data)
    }

    getModules () {
        let modules = {}
        this._list.forEach(item => modules[`get${item}`] = this._actionFun(item))
        this._modules = modules
        return this._modules
    }
}

