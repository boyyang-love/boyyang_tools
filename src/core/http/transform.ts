import qs from 'qs'
import {AxiosResponse} from 'axios'
import {Result, TransForm} from './types'
const transForm: TransForm = {
    beforeRequestHook(config, opt) {
        const {serializeParams, joinTime} = opt
        if (serializeParams) {
            // 序列化参数
            if (config.method?.toUpperCase() === 'GET') {
                if (joinTime) {
                    // 是否拼接时间戳
                    config.params = {
                        ...config.params,
                        _t: Date.now(),
                    }
                }
            } else {
                config.data = qs.stringify(config.data)
            }
        }

        return config
    },

    transformRequestData(res: AxiosResponse<Result>, opt) {
        const {isShowMessage, isShowSuccessMessage, isShowErrorMessage} = opt
        const {code, msg, data} = res.data

        return res.data
    },
}

export {
    transForm,
}