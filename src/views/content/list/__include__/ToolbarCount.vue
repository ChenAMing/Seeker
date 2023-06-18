<script setup lang="ts">
import { useLive, useSelected } from '@/stores'

const live = useLive()
const selected = useSelected()
</script>

<template>
    <span
        class="box-content h-6 w-12 select-none rounded-full text-center font-bold leading-6 transition-colors duration-300"
        :class="selected.able ? 'bg-ctr-pri text-on-ctr-pri' : 'bg-ctr-sec text-otl'">
        {{ selected.able ? selected.set.size : live.data.length }}
    </span>
</template>
