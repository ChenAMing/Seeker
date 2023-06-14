import { defineStore } from 'pinia'

export const useCreate = defineStore('create', {
    state: () => ({
        name: '',
        description: '',
    }),
})
