export class AutoImport {
    constructor (webpackContext, option) {
        // ? 关于 Critical dependency 寻求解决方法
        // Webpack require.context
        this._webpackContext  = webpackContext;        
        // 模块 相应的路径
        this._filePath        = webpackContext.keys();  
        // 模块 相应的格式
        this._modules         = {};                    
        
        // 相应的配置
        this._option          = option;      
    }

    getModules () { throw new Error('[z-tools] 不能直接使用') }
    getOption  () { throw new Error('[z-tools] 不能直接使用') }
}

export class AutoImportRouters extends AutoImport {
    constructor (webpackContext, option = {}) {
        super(webpackContext, option)

        this._prefix = option.prefix || '/'
    }

    getModules (ext = /\.vue$/) {
        let modules = []
        modules = this._filePath.map(item => ({
            path     : `/${this._prefix.replace(/^\/|\/$/, '')}/${item.replace(ext, '').slice(2)}`.replace(/\/\//, '/'),
            name     : `/${this._prefix.replace(/^\/|\/$/, '')}/${item.replace(ext, '').slice(2)}`.replace(/\/\//, '/'),
            component: this._webpackContext(item).default,
        }));
        
        this._modules = modules;
        return this._modules;
    }
}

export class AutoImportStore extends AutoImport {
    constructor (webpackContext, option = {}) {
        super(webpackContext, option)
    }

    getModules (ext = /\.js$/) {
        const modules = {};
        this._filePath.forEach(item => modules[item.replace(ext, '').slice(2)] = this._webpackContext(item).default);
        this._modules = modules;
        return this._modules;
    }
}
