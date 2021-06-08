import api                      from '@/api/index';
import { AutoStoreMockService } from '@/vender/z-tools/StoreService'

// *** [Screen-cli] [1-1] 设置 模块名称 其他常量 接口列表 开始
const moduleName = 'Change';
// const url    = '/data/latestValue';
const serviceList = ['Api01']
// *** [Screen-cli] [1-1] 设置 模块名称 其他常量 接口列表 结束

const mockService = {
    ...new AutoStoreMockService(serviceList, { moduleName }).getModules(),
};

const trueService = {
    // *** [Screen-cli] [1-2] 设置 真实的接口 开始
    // getApi01: (payload) => api.post(url, payload).then(({ data }) => ({ ...data, data: JSON.parse(data.data), code: data.success ? 200 : false })),
    // *** [Screen-cli] [1-2] 设置 真实的接口 结束
};

const service = api.defaults.baseURL ? trueService : mockService

export { service, serviceList }
