<script lang="ts" setup>
defineProps<{ value: string; selected?: Set<[id: string][0]> }>()
</script>

<template>
    <span
        :data-fragment-value="value"
        class="inline-block h-8 cursor-pointer rounded-sm px-3 leading-8 transition-colors duration-300"
        :class="selected?.has(value) ? 'bg-ctr-pri text-on-ctr-pri' : 'bg-ctr-sec text-on-ctr-sec'">
        <slot></slot>
    </span>
</template>
