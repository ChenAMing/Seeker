<script setup lang="ts">
const { title } = defineProps<{ title: string }>()
</script>

<template>
    <div class="flex flex-col gap-4 p-4">
        <div class="px-1 text-base">{{ title }}</div>
        <slot></slot>
    </div>
</template>
