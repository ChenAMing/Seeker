import 'pinia'

declare module 'pinia' {
    export interface DefineStoreOptionsBase<S, Store> {
        autoSyncLocalStorage?: { key?: string }

        autoSyncTitle?: {
            target: (state: S) => string
            prepend?: string
            append?: string
        }

        onInitialLoad?: {
            callback: (store?: Store) => void
        }
    }
}
