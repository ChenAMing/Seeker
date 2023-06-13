import type { App } from 'vue'

import pinia from './pinia'
import router from './router'

const modules = (app: App) => app.use(pinia).use(router)

export default modules
