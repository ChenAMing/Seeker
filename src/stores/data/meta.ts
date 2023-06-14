import type { ListMeta } from '@/models'

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { SeekerDB } from '@/utils/database'
import { useSortArray } from '@/composables'

export const useMeta = defineStore(
    'meta',
    () => {
        const all = ref<ListMeta[]>([])

        async function star(listId: string) {
            const db = await SeekerDB.init()
            const star = await db.accessList(listId).star()
            const index = all.value.findIndex((lm: ListMeta) => lm.id === listId)
            if (index !== -1) all.value[index].star = star
        }

        return { all, star }
    },
    {
        onInitialLoad: {
            callback: async store => {
                const db = await SeekerDB.init()
                const allListMeta = await db.accessMeta().getAll()
                useSortArray(allListMeta, { key: 'dateCreated' })
                store!.$patch(state => state.all.push(...allListMeta))
            },
        },
    }
)
