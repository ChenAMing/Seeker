<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ center?: boolean }>()

const modelValue = defineModel<string>({ required: true })

const isFocus = ref<boolean>()
const onFocus = () => (isFocus.value = true)
const onBlur = () => (isFocus.value = false)
</script>

<template>
    <label class="relative block">
        <input
            type="text"
            v-model="modelValue"
            class="h-12 w-full rounded-t border-b border-otl bg-mask-less px-4 text-sm text-on-ctr-sec outline-none transition-colors duration-300 hover:bg-mask"
            :class="{ 'text-center': center }"
            @focus="onFocus"
            @blur="onBlur" />
        <div
            class="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-pri transition-transform duration-300"
            :class="{ 'scale-x-0': !isFocus }"></div>
    </label>
</template>
