<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { useSide } from '@/stores'

const route = useRoute()
const router = useRouter()
const side = useSide()

const sideLinks = [
    { name: 'create', text: '新建', icon: 'icon-[solar--add-circle-broken]' },
    { name: 'settings', text: '设置', icon: 'icon-[solar--settings-broken]' },
] as const

function go(name: 'create' | 'settings') {
    router.push({ name })
    if (side.show) side.show = false
}
</script>

<template>
    <div class="flex flex-col gap-1 p-1">
        <button
            type="button"
            v-for="link in sideLinks"
            :key="link.name"
            @click="go(link.name)"
            class="flex h-8 items-center gap-6 rounded px-3 transition-colors duration-300 hover:bg-mask active:bg-mask-act"
            :class="{ 'pointer-events-none bg-pri': route.name === link.name }">
            <span
                class="!h-4 !w-4 transition-colors duration-150"
                :class="[{ 'text-on-pri': route.name === link.name }, link.icon]"></span>
            <span
                class="transition-colors duration-150"
                :class="{ 'text-on-pri': route.name === link.name }">
                {{ link.text }}
            </span>
        </button>
    </div>
</template>
