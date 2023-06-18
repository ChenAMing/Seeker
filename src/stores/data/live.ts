import type { ListItem, ListMeta } from '@/models'

import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { computed, ref, watchEffect } from 'vue'
import { SeekerDB } from '@/utils/database'
import { useHead, useMeta } from '..'

export const useLive = defineStore('live', () => {
    const route = useRoute()
    const router = useRouter()
    const meta = useMeta()
    const head = useHead()

    const listMeta = computed<ListMeta | undefined>(() => {
        return meta.all.find((lm: ListMeta) => lm.id === route.query.id)
    })

    const data = ref<ListItem[]>([])
    watchEffect(async () => {
        if (listMeta.value) {
            const db = await SeekerDB.init()
            data.value = await db.accessList(listMeta.value.id).getAll()
        } else data.value = []
    })

    /*
     * List
     */
    async function star() {
        if (listMeta.value && listMeta.value.id) await meta.star(listMeta.value.id)
    }

    async function remove() {
        if (listMeta.value && listMeta.value.id) await meta.remove(listMeta.value.id)
        router.push({ name: 'app' })
    }

    async function update(name: string, description: string) {
        if (listMeta.value && listMeta.value.id) {
            await meta.update(listMeta.value.id, name, description)
            listMeta.value.name = name
            listMeta.value.description = description
            head.title = name
        }
    }

    /*
     * Item
     */
    async function addItem(value: string) {
        if (listMeta.value && listMeta.value.id && route.name === 'list' && value.length !== 0) {
            const db = await SeekerDB.init()
            const listItem: ListItem = await db.accessList(listMeta.value.id).insert(value)
            data.value.push(listItem)
        }
    }

    async function deleteItem(itemId: Set<[id: string][0]> | [id: string][0]) {
        if (listMeta.value && listMeta.value.id && route.name === 'list') {
            const db = await SeekerDB.init()

            if (typeof itemId === 'string') {
                await db.accessList(listMeta.value.id).delete(itemId)
                const i = data.value.findIndex(el => el.id === itemId)
                data.value.splice(i, 1)
            } else {
                for (let id of itemId) {
                    await db.accessList(listMeta.value.id).delete(id)
                    const i = data.value.findIndex(el => el.id === id)
                    data.value.splice(i, 1)
                }
            }
        }
    }

    return { listMeta, data, star, remove, update, addItem, deleteItem }
})
