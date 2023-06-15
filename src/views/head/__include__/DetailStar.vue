<script lang="ts" setup>
import { useLive } from '@/stores'

const live = useLive()
</script>

<template>
    <IconButton
        @click="live.star"
        :icon="
            live.listMeta?.star ? 'icon-[solar--star-bold-duotone]' : 'icon-[solar--star-broken]'
        "
        lower />
</template>
