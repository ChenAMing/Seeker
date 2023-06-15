import type { ListItem, ListMeta } from '@/models'

import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { computed, ref, watchEffect } from 'vue'
import { SeekerDB } from '@/utils/database'
import { useMeta } from '..'

export const useLive = defineStore('live', () => {
    const route = useRoute()
    const router = useRouter()
    const meta = useMeta()

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

    return { listMeta, data, star, remove, addItem }
})
