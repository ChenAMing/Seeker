<script setup lang="ts">
import { useSide } from '@/stores'

const side = useSide()
</script>

<template>
    <IconButton
        :icon="
            side.show
                ? 'icon-[solar--list-cross-minimalistic-bold-duotone]'
                : 'icon-[solar--hamburger-menu-line-duotone]'
        "
        class="z-40 md:pointer-events-none md:hidden"
        @click="side.toggle" />
    <span class="pointer-events-none inline-block h-10 w-10 p-2.5 max-md:hidden">
        <span class="icon-[solar--map-arrow-right-bold-duotone] !h-5 !w-5 text-pri"></span>
    </span>
</template>
