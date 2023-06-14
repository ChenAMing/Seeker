export const useTheme = (function () {
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    function applyDark(apply: boolean) {
        if (apply) document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')
    }

    return function (use: 'light' | 'auto' | 'dark') {
        switch (use) {
            case 'light':
                media.onchange = null
                applyDark(false)
                break
            case 'auto':
                applyDark(window.matchMedia('(prefers-color-scheme:dark)').matches)
                media.onchange = (e: MediaQueryListEvent) => applyDark(e.matches)
                break
            case 'dark':
                media.onchange = null
                applyDark(true)
                break
        }
    }
})()
