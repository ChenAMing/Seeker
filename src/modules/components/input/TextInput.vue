<script setup lang="ts">
import type { WatchStopHandle } from 'vue'
import { onUnmounted } from 'vue'
import { onMounted } from 'vue'
import { ref, watchEffect } from 'vue'

const { autoFocusWhen } = defineProps<{ center?: boolean; autoFocusWhen?: boolean }>()

const modelValue = defineModel<string>({ required: true })

const isFocus = ref<boolean>()
const onFocus = () => (isFocus.value = true)
const onBlur = () => (isFocus.value = false)

const input = ref<HTMLElement>()

let unwatch: WatchStopHandle
onMounted(() => {
    unwatch = watchEffect(() =>
        setTimeout(() => (input.value && autoFocusWhen ? input.value.focus() : undefined), 300)
    )
})
onUnmounted(() => unwatch())
</script>

<template>
    <label class="relative block">
        <input
            type="text"
            ref="input"
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
