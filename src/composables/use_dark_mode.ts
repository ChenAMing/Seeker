/**
 * @param use 没有的时候设置为跟随系统
 */
export const useDarkMode = (function () {
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    function applyDark(apply: boolean) {
        if (apply) document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')
    }

    return function (use?: boolean) {
        if (use) {
            media.onchange = null
            applyDark(true)
        } else {
            if (typeof use === 'undefined') {
                applyDark(window.matchMedia('(prefers-color-scheme:dark)').matches)
                media.onchange = (e: MediaQueryListEvent) => applyDark(e.matches)
            } else {
                media.onchange = null
                applyDark(false)
            }
        }
    }
})()
