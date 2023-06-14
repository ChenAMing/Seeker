import 'pinia'

declare module 'pinia' {
    export interface DefineStoreOptionsBase<S, Store> {
        autoSyncLocalStorage?: { key?: string }
    }
}
