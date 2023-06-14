<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { useSide } from '@/stores'

const route = useRoute()
const router = useRouter()
const side = useSide()

function go(name: 'create' | 'settings') {
    router.push({ name })
    side.show = false
}
</script>

<template>
    <div class="flex flex-col gap-1 p-1">
        <button
            type="button"
            @click="go('create')"
            class="flex h-8 items-center gap-6 rounded px-3 transition-colors duration-300 hover:bg-mask active:bg-mask-act"
            :class="{ 'pointer-events-none bg-sec text-on-sec': route.name === 'create' }">
            <span class="icon-[solar--add-circle-broken] !h-4 !w-4"></span>
            <span> 新建 </span>
        </button>

        <button
            type="button"
            @click="go('settings')"
            class="flex h-8 items-center gap-6 rounded px-3 transition-colors duration-300 hover:bg-mask active:bg-mask-act"
            :class="{ 'pointer-events-none bg-sec': route.name === 'settings' }">
            <span class="icon-[solar--settings-broken] !h-4 !w-4"></span>
            <span> 设置 </span>
        </button>
    </div>
</template>
