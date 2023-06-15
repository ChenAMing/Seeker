import type { TransitionProps } from 'vue'

type Transitions = Record<string, TransitionProps>

export const useTransition = (() => {
    const transitions = {
        fade: {
            enterFromClass: 'opacity-0',
            leaveToClass: 'opacity-0',
            enterActiveClass: 'transition-opacity duration-300 ease-in-out',
            leaveActiveClass: 'transition-opacity duration-300 ease-in-out',
        },
        modal: {
            enterFromClass: 'opacity-0 -translate-y-3/4 scale-y-50',
            leaveToClass: 'opacity-0 -translate-y-3/4 scale-y-50',
            enterActiveClass: 'transition duration-300 ease-out',
            leaveActiveClass: 'transition duration-300 ease-in',
        },
    } satisfies Transitions

    return (name: keyof typeof transitions) => transitions[name]
})()
