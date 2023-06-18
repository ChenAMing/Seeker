import { defineStore } from 'pinia'

export const useSide = defineStore('side', {
    state: () => ({
        show: false,
    }),
    actions: {
        open() {
            this.show = true
        },
        close() {
            this.show = false
        },
        toggle() {
            this.show = !this.show
        },
    },
})
