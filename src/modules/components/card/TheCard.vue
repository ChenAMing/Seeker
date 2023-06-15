<script lang="ts" setup>
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
            <span class="flex-1 text-xl">{{ title }}</span>
            <span><slot name="action"></slot></span>
        </div>

        <div>
            <slot></slot>
        </div>
    </div>
</template>
