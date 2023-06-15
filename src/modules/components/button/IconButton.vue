<script lang="ts" setup>
import { useClassName } from '@/composables'

defineProps<{ icon: string; error?: boolean; disabled?: boolean; lower?: boolean }>()

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
        class="group w-10 rounded transition-colors duration-300 hover:bg-mask focus:bg-mask active:bg-mask-more"
        :class="[
            lower ? 'h-7 px-2 py-1' : 'h-10 p-2',
            error ? 'text-err focus:text-err' : 'focus:text-pri',
            { 'pointer-events-none text-mask-more': disabled },
        ]">
        <span
            class="transition-all duration-150 group-active:scale-75 group-active:text-otl"
            :class="[icon, className, lower ? '!h-5 !w-5' : '!h-6 !w-6']"></span>
    </button>
</template>
