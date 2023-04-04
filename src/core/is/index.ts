/**
 * @description 判断target类型
 * @param {any} target
 * @return {string}   'object' | 'array' | 'string' | 'number'
 * */
const is = (target: any): string => {
    return toString.call(target).split(' ')[1].slice(0, -1).toLowerCase()
}

export {
    is
}