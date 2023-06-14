import { readonly, ref } from 'vue'

/**
 * 添加一个类名, 于 delay 毫秒后删除
 */
export function useClassName(className: string, delay: number) {
    const _className = ref<string>()

    return {
        className: readonly(_className),
        activate() {
            _className.value = className
            setTimeout(() => (_className.value = undefined), delay)
        },
    }
}
