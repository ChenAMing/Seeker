<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const { type = 'secondary' } = defineProps<{
    icon?: string
    type?: 'primary' | 'secondary'
    selected?: boolean
    routeLocation: RouteLocationRaw
}>()

const mapTypeSelected = {
    primary: 'bg-pri hover:bg-pri text-on-pri',
    secondary: 'bg-sec hover:bg-sec text-on-sec',
}
</script>

<template>
    <a
        :data-route-location="JSON.stringify(routeLocation)"
        class="flex h-10 cursor-pointer items-center gap-5 rounded px-4 transition-colors duration-300 hover:bg-mask active:bg-mask-more"
        :class="{ 'pointer-events-none': selected, [mapTypeSelected[type]]: selected }">
        <span class="pointer-events-none !h-4 min-w-[1rem]" :class="icon"></span>
        <span class="pointer-events-none truncate"> <slot></slot></span>
    </a>
</template>
