import type { SeekerSettings } from '@/models'

import { defineStore } from 'pinia'

export const useSettings = defineStore('settings', {
    state: (): SeekerSettings => ({
        theme: 'auto',
    }),
    autoSyncLocalStorage: {},
})
