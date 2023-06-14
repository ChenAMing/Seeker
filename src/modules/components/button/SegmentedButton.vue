<script lang="ts" setup>
defineProps<{ options: { value: string; text: string }[] }>()

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
            v-for="(o, index) in options"
            :key="index"
            @click="select(o.value)"
            class="rounded-sm px-6 text-sm transition-colors duration-300"
            :class="o.value === modelValue ? 'bg-pri text-on-pri' : 'bg-transparent'">
            {{ o.text }}
        </button>
    </div>
</template>
