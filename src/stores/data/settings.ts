import type { Settings } from '@/models'

import { defineStore } from 'pinia'
import { ref, watchEffect } from 'vue'
import { useTheme } from '@/composables'

export const useSettings = defineStore(
    'settings',
    () => {
        const theme = ref<Settings['theme']>('auto')
        watchEffect(() => useTheme(theme.value))

        return { theme }
    },
    { autoSyncLocalStorage: {} }
)
