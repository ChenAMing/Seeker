import type { App, Component } from 'vue'

import * as Components from './imports'

function components(app: App) {
    for (let name in Components)
        app.component(name, Components[name as keyof typeof Components] as Component)
}

export default components
