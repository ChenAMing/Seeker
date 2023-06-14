import type { PiniaPluginContext } from 'pinia'

function onInitialLoad({ options, store }: PiniaPluginContext): void {
    if (options.onInitialLoad && options.onInitialLoad.callback)
        options.onInitialLoad.callback(store)
}

export default onInitialLoad
