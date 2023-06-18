import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSelected = defineStore('selected', () => {
    const set = ref<Set<string>>(new Set())

    const able = ref<boolean>(false)

    return { set, able }
})
