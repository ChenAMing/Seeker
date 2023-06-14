<script lang="ts" setup>
import { useClassName } from '@/composables'

defineProps<{ icon: string; error?: boolean; disabled?: boolean }>()

const emit = defineEmits<{ click: [] }>()

const { className, activate } = useClassName('scale-75', 150)

function handleClick() {
    activate()
    emit('click')
}
</script>

<template>
    <button
        type="button"
        @click="handleClick"
        :disabled="disabled"
        class="group h-10 w-10 rounded p-2 transition-colors duration-300 hover:bg-mask focus:bg-mask active:bg-mask-more"
        :class="[
            error ? 'focus:text-err' : 'focus:text-pri',
            { 'pointer-events-none text-mask-more': disabled },
        ]">
        <span
            class="!h-6 !w-6 transition-all duration-150 group-active:scale-75 group-active:text-otl"
            :class="[icon, className]"></span>
    </button>
</template>
