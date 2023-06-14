import { createRouter, createWebHistory } from 'vue-router'
import common from '@/views/common'
import content from '@/views/content'
import head from '@/views/head'
import side from '@/views/side'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'app',
            components: { common, head, side, content },
            children: [
                {
                    path: '/create',
                    name: 'create',
                    component: () => import('@/views/content/create'),
                    meta: { title: '新建清单' },
                },
                {
                    path: '/list',
                    name: 'list',
                    component: () => import('@/views/content/list'),
                },
                {
                    path: '/settings',
                    name: 'settings',
                    component: () => import('@/views/content/settings'),
                    meta: { title: '设置' },
                },
            ],
        },
    ],
})

export default router
