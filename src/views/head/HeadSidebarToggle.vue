<script lang="ts" setup>
import { useSide } from '@/stores'

const side = useSide()
</script>

<template>
    <IconButton
        @click="side.toggle"
        :icon="
            side.show
                ? 'icon-[solar--list-cross-minimalistic-bold-duotone]'
                : 'icon-[solar--hamburger-menu-line-duotone]'
        "
        class="z-30 md:pointer-events-none md:hidden" />
    <span class="pointer-events-none inline-block h-10 w-10 p-2.5 max-md:hidden">
        <span class="icon-[solar--map-arrow-right-bold-duotone] !h-5 !w-5 text-pri"></span>
    </span>
</template>
