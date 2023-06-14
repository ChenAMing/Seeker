<script lang="ts" setup>
import { useSide } from '@/stores'

const side = useSide()
</script>

<template>
    <IconButton icon="icon-[ri--menu-2-fill]" @click="side.toggle" class="z-30" />
</template>
