<script lang="ts" setup>
import { useLive } from '@/stores'

const live = useLive()
</script>

<template>
    <FragmentBook>
        <TheFragment v-for="item in live.data" :key="item.id">{{ item.value }}</TheFragment>
    </FragmentBook>
</template>
