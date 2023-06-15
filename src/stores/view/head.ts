import { defineStore } from 'pinia'

export const useHead = defineStore('head', {
    state: (): { title: [title: string] } => ({
        title: [''],
    }),
    actions: {
        modifyTitle(newTitle: string) {
            this.title.shift()
            this.title.push(newTitle)
        },
    },
    autoSyncTitle: {
        target: state => state.title[0],
        append: ' - Seeker',
    },
})
