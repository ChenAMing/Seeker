<script lang="ts" setup>
defineProps<{ title: string; required?: boolean }>()
</script>

<template>
    <div class="flex flex-col gap-4 p-4">
        <div
            class="px-1"
            :class="{ [`after:ml-1 after:text-red-500 after:content-['*']`]: required }">
            {{ title }}
        </div>
        <slot></slot>
    </div>
</template>
