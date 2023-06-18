<script setup lang="ts">
defineProps<{ title: string; required?: boolean }>()
</script>

<template>
    <div class="flex flex-col gap-4 p-4">
        <div
            class="px-1 text-base"
            :class="{ [`after:ml-1 after:text-err after:content-['*']`]: required }">
            {{ title }}
        </div>
        <slot></slot>
    </div>
</template>
