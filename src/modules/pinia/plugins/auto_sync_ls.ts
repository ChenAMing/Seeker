import type { PiniaPluginContext } from 'pinia'

/**
 * 若 localStorage 没有对应的现有, 则 state 初始值作为 localStorage 初始值
 * 若 localStorage 已有初始值, 则用此值覆写 state
 */
function autoSyncLocalStorage({ options, store }: PiniaPluginContext): void {
    if (options.autoSyncLocalStorage) {
        const key = options.autoSyncLocalStorage.key ?? store.$id

        try {
            store.$state = JSON.parse(localStorage.getItem(key) as string)
        } catch {
            localStorage.setItem(key, JSON.stringify(store.$state))
        }

        store.$subscribe(
            (_, state) => {
                localStorage.setItem(key, JSON.stringify(state))
            },
            { detached: true }
        )
    }
}

export default autoSyncLocalStorage
