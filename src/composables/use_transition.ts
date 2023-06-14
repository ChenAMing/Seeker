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
    } satisfies Transitions

    return (name: keyof typeof transitions) => transitions[name]
})()
