<script setup lang="ts">
defineProps<{ label: string; hoverText?: string }>()
</script>

<template>
    <span class="flex max-w-full" :title="hoverText">
        <span
            class="box-content h-6 whitespace-nowrap rounded-l-sm border border-transparent bg-pri px-2 leading-6 text-on-pri">
            {{ label }}
        </span>
        <span
            class="box-content h-6 truncate rounded-r-sm border-b border-r border-t border-otl px-2 leading-6">
            <slot></slot>
        </span>
    </span>
</template>
