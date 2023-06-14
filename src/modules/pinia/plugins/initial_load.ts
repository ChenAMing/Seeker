import type { PiniaPluginContext } from 'pinia'

function initialLoad({ options, store }: PiniaPluginContext): void {
    if (options.initialLoad && options.initialLoad.callback) options.initialLoad.callback(store)
}

export default initialLoad
