import type { RouteLocationNormalized } from 'vue-router'

import { SeekerDB } from '@/utils/database'
import { useHead } from '@/stores'

export async function globalGuardEach(to: RouteLocationNormalized) {
    const head = useHead()

    if (to.name !== 'list') {
        head.title = to.meta.title as string
    } else {
        const db = await SeekerDB.init()

        if (to.query.id) {
            const listMeta = await db.accessMeta().get(to.query.id as string)
            if (listMeta) {
                head.title = listMeta.name
            } else return { name: 'app' }
        } else return { name: 'app' }
    }
}
