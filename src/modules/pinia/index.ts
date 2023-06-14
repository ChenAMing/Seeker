import { createPinia } from 'pinia'
import autoSyncLocalStorage from './plugins/auto_sync_ls'
import autoSyncTitle from './plugins/auto_sync_title'

const pinia = createPinia()

pinia.use(autoSyncLocalStorage)
pinia.use(autoSyncTitle)

export default pinia
