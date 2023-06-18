import { defineStore } from 'pinia'
import { useSettings } from '..'
import { watchEffect } from 'vue'
import { useTheme } from '@/composables'

export const useWatcher = defineStore('watcher', () => {
    const settings = useSettings()
    watchEffect(() => useTheme(settings.theme))
})
