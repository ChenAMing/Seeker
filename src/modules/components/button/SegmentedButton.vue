<script lang="ts" setup>
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
            @click="select(option.value)"
            class="flex items-center rounded px-4 text-sm transition-colors duration-300"
            :class="option.value === modelValue ? 'bg-pri text-on-pri' : 'bg-transparent'">
            <span class="!h-4 !w-4" :class="option.icon" v-if="option.icon"></span>
            <span class="pointer-events-none mx-2 transition-colors duration-150">
                {{ option.text }}
            </span>
        </button>
    </div>
</template>
