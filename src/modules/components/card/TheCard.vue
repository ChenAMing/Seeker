<script setup lang="ts">
const { type = 'secondary' } = defineProps<{
    type?: 'primary' | 'secondary' | 'outline'
    title?: string
}>()

const mapType = {
    primary: 'border-transparent bg-ctr-pri text-on-ctr-pri',
    secondary: 'border-transparent bg-ctr-sec text-on-ctr-sec',
    outline: 'border-otl bg-mask-less backdrop-blur-sm',
}

defineSlots<{ action(props: {}): any; default(props: {}): any }>()
</script>

<template>
    <div class="flex flex-col gap-4 rounded-2xl border p-6" :class="mapType[type]">
        <div class="flex">
            <span v-if="title" class="text-2xl">{{ title }}</span>
            <span v-if="$slots.action" class="flex flex-1 justify-end gap-1">
                <slot name="action"></slot>
            </span>
        </div>

        <div class="overflow-y-hidden hover:overflow-y-auto">
            <slot></slot>
        </div>
    </div>
</template>
