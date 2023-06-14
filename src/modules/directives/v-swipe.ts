import type { DirectiveBinding, ObjectDirective } from 'vue'

function initEvent(bind: DirectiveBinding, direction: string) {
    let start: { x?: number; y?: number } = {}

    function handleTouchStart(e: TouchEvent) {
        if (e.touches.length === 1) {
            const t = e.target as HTMLElement
            start.x = e.touches.item(0)!.clientX
            start.y = e.touches.item(0)!.clientY
            t.addEventListener('touchmove', handleTouchMove)
        }
    }

    function handleTouchMove(e: TouchEvent) {
        const instance = parseInt(bind.arg as string)
        if (e.touches.length === 1) {
            const t = e.target as HTMLElement
            const end = { x: e.touches.item(0)!.clientX, y: e.touches.item(0)!.clientY }

            const condition = (function () {
                if (start.y && start.x)
                    switch (direction) {
                        case 'up':
                            return end.y - start.y < -instance && Math.abs(end.x - start.x) < 50
                        case 'down':
                            return end.y - start.y > instance && Math.abs(end.x - start.x) < 50
                        case 'left':
                            return end.x - start.x < -instance && Math.abs(end.y - start.y) < 50
                        case 'right':
                            return end.x - start.x > instance && Math.abs(end.y - start.y) < 50
                    }
            })()

            if (condition) {
                bind.value()
                t.removeEventListener('touchmove', handleTouchMove)
            }
        }
    }

    function handleTouchEnd(e: TouchEvent) {
        const t = e.target as HTMLElement
        t.removeEventListener('touchmove', handleTouchMove)
    }

    return { handleTouchStart, handleTouchEnd }
}

/**
 * @example
 * v-swipe:[distance].[direction]='method'
 */
export const vSwipe: ObjectDirective = {
    mounted(el: HTMLElement, bind: DirectiveBinding) {
        let direction = Object.keys(bind.modifiers)[0] ?? undefined

        if (new Set(['up', 'down', 'left', 'right']).has(direction)) {
            const { handleTouchStart, handleTouchEnd } = initEvent(bind, direction)
            el.addEventListener('touchstart', handleTouchStart)
            el.addEventListener('touchcancel', handleTouchEnd)
            el.addEventListener('touchend', handleTouchEnd)
        } else console.warn('v-swipe 未设置手势划动方向。')
    },
}
