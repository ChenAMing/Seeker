<script lang="ts" setup>
import { useSide } from '@/stores'

const side = useSide()
</script>

<template>
    <IconButton
        icon="icon-[solar--hamburger-menu-line-duotone]"
        @click="side.toggle"
        class="z-30 md:pointer-events-none md:hidden" />
    <span class="pointer-events-none inline-block h-10 w-10 p-2.5 max-md:hidden">
        <span class="icon-[solar--map-arrow-right-bold-duotone] !h-5 !w-5 text-pri"></span>
    </span>
</template>
