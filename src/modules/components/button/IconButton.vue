<script lang="ts" setup>
defineProps<{ icon: string; error?: boolean; disabled?: boolean }>()

const emit = defineEmits<{ click: [] }>()

const handleClick = () => emit('click')
</script>

<template>
    <button
        type="button"
        @click="handleClick"
        :disabled="disabled"
        class="group h-10 w-10 rounded p-2.5 transition-colors duration-300 hover:bg-mask focus:bg-mask active:bg-mask-act"
        :class="[
            error ? 'focus:text-err' : 'focus:text-pri',
            { 'pointer-events-none text-mask-act': disabled },
        ]">
        <span
            class="group-active:text-pri' !h-5 !w-5 transition-all duration-300 group-active:scale-75 group-active:text-otl"
            :class="icon"></span>
    </button>
</template>
