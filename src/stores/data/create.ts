import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { SeekerDB } from '@/utils/database'
import { useMeta } from '..'

export const useCreate = defineStore('create', () => {
    const meta = useMeta()
    const router = useRouter()

    const name = ref<string>('')
    const description = ref<string>('')

    async function reset() {
        name.value = ''
        description.value = ''
    }

    async function confirm() {
        const db = await SeekerDB.init()
        const listMeta = await db.createList(name.value, description.value, 'standard')
        meta.all.push(listMeta)
        router.push({ name: 'list', query: { id: listMeta.id } })
        reset()
    }

    return { name, description, reset, confirm }
})
