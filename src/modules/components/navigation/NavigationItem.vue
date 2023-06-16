<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

const { type = 'secondary' } = defineProps<{
    icon?: string
    type?: 'primary' | 'secondary'
    selected?: boolean
    routeLocation: RouteLocationRaw
}>()

const mapTypeSelected = {
    primary: 'bg-pri hover:bg-pri',
    secondary: 'bg-sec hover:bg-sec',
}

const mapTypeSelectedText = {
    primary: 'text-on-pri',
    secondary: 'text-on-sec',
}
</script>

<template>
    <a
        :data-route-location="JSON.stringify(routeLocation)"
        class="flex h-10 cursor-pointer items-center gap-5 rounded px-4 transition-colors duration-300 hover:bg-mask active:bg-mask-more"
        :class="{ ['pointer-events-none ' + mapTypeSelected[type]]: selected }">
        <span
            class="pointer-events-none !h-4 min-w-[1rem] transition-colors"
            :class="[icon, { [mapTypeSelectedText[type]]: selected }]"></span>
        <span
            class="pointer-events-none truncate transition-colors"
            :class="{ [mapTypeSelectedText[type]]: selected }"
            ><slot></slot
        ></span>
    </a>
</template>
