import { defineStore } from 'pinia'

export const useHead = defineStore('head', {
    state: (): { title: [title: string] } => ({
        title: [''],
    }),
    autoSyncTitle: {
        target: state => state.title[0],
        append: ' - Seeker',
    },
})
