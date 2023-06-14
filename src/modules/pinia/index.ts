import { createPinia } from 'pinia'
import autoSyncLocalStorage from './plugins/auto_sync_ls'
import autoSyncTitle from './plugins/auto_sync_title'
import initialLoad from './plugins/initial_load'

const pinia = createPinia()

pinia.use(autoSyncLocalStorage)
pinia.use(autoSyncTitle)
pinia.use(initialLoad)

export default pinia
