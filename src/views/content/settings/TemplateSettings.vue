<script lang="ts" setup>
const { title } = defineProps<{ title: string }>()
</script>

<template>
    <div class="flex flex-col gap-4 p-4">
        <div class="px-1 transition-colors duration-300">{{ title }}</div>
        <slot></slot>
    </div>
</template>
