import type { PiniaPluginContext } from 'pinia'

function joinTitle(title: string, prepend?: string, append?: string) {
    document.title = (prepend ?? '') + title + (append ?? '')
}

/**
 * 用于同步修改 HTML title
 */
function autoSyncTitle({ options, store }: PiniaPluginContext): void {
    if (options.autoSyncTitle) {
        store.$subscribe(
            (_, state) => {
                if (options.autoSyncTitle!.hasOwnProperty('target')) {
                    joinTitle(
                        options.autoSyncTitle!.target(state) ?? '',
                        options.autoSyncTitle?.prepend ?? '',
                        options.autoSyncTitle?.append ?? ''
                    )
                }
            },
            { detached: true }
        )
    }
}

export default autoSyncTitle
