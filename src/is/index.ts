/**
 * @description 判断target类型
 * @param {any} target
 * @return {object | array | number | string} 字符串
 * */
const is = (target: any): string => {
    return toString.call(target).split(' ')[1].slice(0, -1).toLowerCase()
}

export {
    is
}