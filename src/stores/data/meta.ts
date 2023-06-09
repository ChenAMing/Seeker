import type { ListMeta } from '@/models'

import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { SeekerDB } from '@/utils/database'
import { useSortArray } from '@/composables'
import { useMessage } from '..'

export const useMeta = defineStore(
    'meta',
    () => {
        const message = useMessage()

        const all = ref<ListMeta[]>([])

        const allStar = computed(() => {
            const result = all.value.filter((listMeta: ListMeta) => listMeta.star)
            if (result.length !== 0) useSortArray(result, { key: 'dateCreated' })
            return result
        })

        const allNoStar = computed(() => {
            const result = all.value.filter((listMeta: ListMeta) => !listMeta.star)
            if (result.length !== 0) useSortArray(result, { key: 'dateCreated' })
            return result
        })

        async function star(listId: string) {
            const db = await SeekerDB.init()
            const star = await db.accessList(listId).star()
            const index = all.value.findIndex((lm: ListMeta) => lm.id === listId)
            if (index !== -1) all.value[index].star = star
        }

        async function remove(listId: string) {
            const db = await SeekerDB.init()
            await db.removeList(listId)
            const index = all.value.findIndex((lm: ListMeta) => lm.id === listId)
            const removedListName = all.value[index].name
            if (index !== -1) all.value.splice(index, 1)
            message.pop('error', `⚠️ ${removedListName} 清单已被删除`)
        }

        async function update(listId: string, newName: string, newDescription: string) {
            if (newName.length !== 0) {
                const db = await SeekerDB.init()
                const updatePart = { name: newName, description: newDescription }
                await db.accessMeta().update(listId, updatePart)
                const index = all.value.findIndex((listMeta: ListMeta) => listMeta.id === listId)
                if (index) all.value[index] = Object.assign(all.value[index], updatePart)
            }
        }

        return { all, allStar, allNoStar, star, remove, update }
    },
    {
        onInitialLoad: {
            callback: async store => {
                const db = await SeekerDB.init()
                const allListMeta = await db.accessMeta().getAll()
                store!.$patch(state => state.all.push(...allListMeta))
            },
        },
    }
)
