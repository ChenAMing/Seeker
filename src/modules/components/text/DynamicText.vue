<script setup lang="ts">
import { computed } from 'vue'

const { text, size = 'base' } = defineProps<{ text: string; size?: 'sm' | 'base' | 'lg' }>()

const renderText = computed<[text: string]>(() => [text])

const mapSize = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
}
</script>

<template>
    <div class="relative flex-1">
        <TransitionGroup
            enter-from-class="opacity-0"
            leave-to-class="opacity-0"
            leave-active-class="absolute">
            <div
                v-for="t in renderText"
                :key="t"
                class="transition-all duration-300"
                :class="mapSize[size]">
                {{ t }}
            </div>
        </TransitionGroup>
    </div>
</template>
