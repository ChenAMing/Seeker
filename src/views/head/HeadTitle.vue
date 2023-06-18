<script setup lang="ts">
import { useHead } from '@/stores'

const head = useHead()
</script>

<template>
    <DynamicText :text="head.title" />
</template>
