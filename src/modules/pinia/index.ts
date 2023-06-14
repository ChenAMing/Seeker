import { createPinia } from 'pinia'
import autoSyncLocalStorage from './plugins/auto_sync_ls'
import autoSyncTitle from './plugins/auto_sync_title'
import onInitialLoad from './plugins/on_initial_load'

const pinia = createPinia()

pinia.use(autoSyncLocalStorage)
pinia.use(autoSyncTitle)
pinia.use(onInitialLoad)

export default pinia
