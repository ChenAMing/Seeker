import type { DirectiveBinding, ObjectDirective } from 'vue'

function handleClickOutside(el: HTMLElement, cb: Function) {
    return (e: MouseEvent) => (!el.contains(e.target as HTMLElement) ? cb() : undefined)
}

export const vClickOutside: ObjectDirective = (function () {
    const callbackStorage: Map<HTMLElement, Function> = new Map()

    return {
        mounted(el: HTMLElement, { value }: DirectiveBinding) {
            const cb = handleClickOutside(el, value)
            callbackStorage.set(el, cb)
            window.addEventListener('click', cb)
        },
        unmounted(el: HTMLElement) {
            const cb = callbackStorage.get(el) as Function
            window.removeEventListener('click', cb as EventListener)
            callbackStorage.delete(el)
        },
    }
})()
