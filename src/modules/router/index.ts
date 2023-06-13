import { createRouter, createWebHistory } from 'vue-router'
import common from '@/views/common'
import head from '@/views/head'
import side from '@/views/side'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'app',
            components: { common, head, side, content: () => import('@/views/content') },
        },
    ],
})

export default router
