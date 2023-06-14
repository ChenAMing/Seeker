<script lang="ts" setup>
import { useMeta, useSide } from '@/stores'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const meta = useMeta()
const side = useSide()

function go(id: string) {
    router.push({ name: 'list', query: { id } })
    if (side.show) side.show = false
}
</script>

<template>
    <div class="flex flex-col gap-1 p-1">
        <div class="mb-1 px-3 text-xs">全部清单</div>
        <button
            type="button"
            v-for="item in meta.all"
            :key="item.name"
            @click="go(item.id)"
            class="flex h-8 items-center gap-6 rounded px-3 transition-colors duration-300 hover:bg-mask active:bg-mask-act"
            :class="{ 'pointer-events-none bg-sec hover:bg-sec': route.query.id === item.id }">
            <span
                class="pointer-events-none !h-4 !w-4 transition-colors duration-150"
                :class="[
                    { 'text-on-sec': route.query.id === item.id },
                    'icon-[solar--notes-minimalistic-bold-duotone]',
                ]"></span>
            <span
                class="pointer-events-none truncate transition-colors duration-150"
                :class="{ 'text-on-sec': route.query.id === item.id }">
                {{ item.name }}
            </span>
        </button>
    </div>
</template>
