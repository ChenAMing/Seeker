<script lang="ts" setup>
import { useSide } from '@/stores'

const side = useSide()
</script>

<template>
    <IconButton icon="icon-[solar--hamburger-menu-line-duotone]" @click="side.toggle" class="z-30" />
</template>
