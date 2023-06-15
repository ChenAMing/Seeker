import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'

type MessageType = 'primary' | 'secondary' | 'error'

interface Message {
    id: string
    type: MessageType
    content: string
}

export const useMessage = defineStore('message', {
    state: (): {
        queue: Message[]
    } => ({
        queue: [],
    }),
    actions: {
        pop(type: MessageType, content: string): void {
            this.queue.push({ id: nanoid(), type, content })
            setTimeout(() => this.queue.shift(), 3000)
        },
    },
})
