import '@vue/runtime-core'

import * as Components from './imports'

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        IconButton: typeof Components.IconButton
        TheButton: typeof Components.TheButton
        TextInput: typeof Components.TextInput
    }
}

export {}
