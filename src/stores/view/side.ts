import { defineStore } from 'pinia'

export const useSide = defineStore('side', {
    state: () => ({
        show: false,
    }),
    actions: {
        toggle() {
            this.show = !this.show
        },
    },
})
