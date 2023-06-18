<script setup lang="ts" generic="T">
import { computed, ref } from 'vue'

const { state, initialIndex = 0 } = defineProps<{ state: T[]; initialIndex?: number }>()

const currentIndex = ref<number>(
    initialIndex < state.length && initialIndex >= 0 ? initialIndex : 0
)

const current = computed<T>(() => state[currentIndex.value])

const emit = defineEmits<{ afterNext: [current: T] }>()

function next(): void {
    currentIndex.value = (currentIndex.value + 1) % state.length
    emit('afterNext', current.value)
}

defineSlots<{ default(props: { current: T; next: () => void }): any }>()
</script>

<template>
    <slot v-bind="{ current, next }"></slot>
</template>
