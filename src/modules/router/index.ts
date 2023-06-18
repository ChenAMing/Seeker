import { createRouter, createWebHashHistory } from 'vue-router'
import { globalGuardEach } from './guards/global'
import common from '@/views/common'
import content from '@/views/content'
import head from '@/views/head'
import side from '@/views/side'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'app',
            components: { common, head, side, content },
            redirect: { name: 'home' },
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('@/views/content/home'),
                    meta: { title: '主页' },
                },
                {
                    path: '/create',
                    name: 'create',
                    component: () => import('@/views/content/create'),
                    meta: { title: '新建清单' },
                },
                {
                    path: '/settings',
                    name: 'settings',
                    component: () => import('@/views/content/settings'),
                    meta: { title: '设置' },
                },
                {
                    path: '/list',
                    name: 'list',
                    component: () => import('@/views/content/list'),
                },
            ],
        },
    ],
})

router.beforeEach(globalGuardEach)

export default router
