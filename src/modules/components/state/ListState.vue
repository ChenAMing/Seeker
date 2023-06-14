<script lang="ts" setup generic="T">
import { computed, ref } from 'vue'

const { state, initialIndex = 0 } = defineProps<{ state: T[]; initialIndex?: number }>()

const stateLength = computed<number>(() => state.length)

const currentIndex = ref<number>(
    initialIndex < stateLength.value && initialIndex >= 0 ? initialIndex : 0
)

const current = computed<T>(() => state[currentIndex.value])

const next = () => (currentIndex.value = (currentIndex.value + 1) % stateLength.value)

defineSlots<{ default(props: { current: T; next: () => any }): any }>()
</script>

<template>
    <slot v-bind="{ current, next }"></slot>
</template>
