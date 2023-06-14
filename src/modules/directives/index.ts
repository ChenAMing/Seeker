import type { App } from 'vue'

import * as Directives from './imports'

function convertDirectiveName(camelCaseName: string) {
    return camelCaseName
        .replace(/([A-Z])/g, '-$1')
        .toLowerCase()
        .substring(2)
}

function directives(app: App) {
    for (let name in Directives)
        app.directive(convertDirectiveName(name), Directives[name as keyof typeof Directives])
}

export default directives
