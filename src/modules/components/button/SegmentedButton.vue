<script setup lang="ts">
defineProps<{ options: { value: string; text: string; icon?: string }[] }>()

const modelValue = defineModel<string>({ required: true })

const emit = defineEmits<{ select: [value: string] }>()

function select(value: string) {
    modelValue.value = value
    emit('select', modelValue.value)
}
</script>

<template>
    <div class="relative inline-flex h-10 select-none rounded border-4 border-transparent bg-mask">
        <button
            type="button"
            v-for="(option, index) in options"
            :key="index"
            :class="option.value === modelValue ? 'bg-pri text-on-pri' : 'bg-transparent'"
            class="flex items-center rounded px-4 text-sm transition-colors duration-300"
            @click="select(option.value)">
            <span v-if="option.icon" class="!h-4 !w-4" :class="option.icon"></span>
            <span class="pointer-events-none mx-2">
                {{ option.text }}
            </span>
        </button>
    </div>
</template>
