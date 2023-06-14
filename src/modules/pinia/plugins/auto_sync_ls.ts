import type { PiniaPluginContext } from 'pinia'

/**
 * @description
 * state 初始值作为 localStorage 初始值, 初始化后覆写 state
 */
function autoSyncLocalStorage({ options, store }: PiniaPluginContext) {
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
