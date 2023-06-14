import type { ListMeta } from '@/models'
import { SeekerDB } from '@/utils/database'

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMeta = defineStore(
    'meta',
    () => {
        const all = ref<ListMeta[]>([])

        return { all }
    },
    {
        initialLoad: {
            callback: async store => {
                const db = await SeekerDB.init()
                const allListMeta = await db.accessMeta().getAll()
                store!.$patch(state => state.all.push(...allListMeta))
            },
        },
    }
)
