import { defineStore } from 'pinia'

export const useHead = defineStore('head', {
    state: (): { title: string } => ({
        title: '',
    }),
    autoSyncTitle: {
        target: state => state.title[0],
        append: ' - Seeker',
    },
})
