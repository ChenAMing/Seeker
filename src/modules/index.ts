import type { App } from 'vue'

import components from './components'
import directives from './directives'
import pinia from './pinia'
import router from './router'

const modules = (app: App) => app.use(components).use(directives).use(pinia).use(router)

export default modules
