<script setup lang="ts">
import { useClassName } from '@/composables'

defineProps<{ icon: string; error?: boolean; disabled?: boolean; lower?: boolean }>()

const { className, activate } = useClassName('scale-75', 150)

const emit = defineEmits<{ click: [] }>()

function handleClick() {
    activate()
    emit('click')
}
</script>

<template>
    <button
        type="button"
        :disabled="disabled"
        class="group w-10 rounded transition-colors duration-300 hover:bg-mask focus:bg-mask active:bg-mask-more"
        :class="[
            lower ? 'h-8 px-2 py-1.5' : 'h-10 p-2',
            error ? 'text-err focus:text-err' : 'focus:text-pri',
            'disabled:pointer-events-none disabled:text-mask-more',
        ]"
        @click="handleClick">
        <span
            class="transition-all group-active:scale-75 group-active:text-otl"
            :class="[icon, className, lower ? '!h-5 !w-5' : '!h-6 !w-6']"></span>
    </button>
</template>
