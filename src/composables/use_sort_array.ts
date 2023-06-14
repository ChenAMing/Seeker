/**
 * 按数组成员对象的指定属性值进行排序
 */
export function useSortArray<T>(
    target: Array<T>,
    options: {
        key: keyof T
        reverse?: boolean
    }
) {
    if (options.key) {
        if (target[0][options.key] instanceof Date)
            /*
             * 按 Date 排序
             */
            return target.sort((a, b) => {
                return options.reverse
                    ? +b[options.key] - +a[options.key]
                    : +a[options.key] - +b[options.key]
            })
        else if (typeof target[0][options.key] === 'string')
            /*
             * 按 string 排序
             */
            return target.sort((a, b) => {
                return options.reverse
                    ? (b[options.key] as string).localeCompare(a[options.key] as string)
                    : (a[options.key] as string).localeCompare(b[options.key] as string)
            })
    }
}
