<script setup lang="ts">
import { useLive } from '@/stores'

const live = useLive()
</script>

<template>
    <IconButton
        :icon="
            live.listMeta?.star ? 'icon-[solar--star-bold-duotone]' : 'icon-[solar--star-broken]'
        "
        lower
        @click="live.star" />
</template>
