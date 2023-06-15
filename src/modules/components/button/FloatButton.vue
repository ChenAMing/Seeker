<script lang="ts" setup>
import { useClassName } from '@/composables'

defineProps<{ icon: string }>()

const { className, activate } = useClassName('scale-90', 150)

const emit = defineEmits<{ click: [] }>()

function handleClick() {
    activate()
    emit('click')
}
</script>

<template>
    <button
        type="button"
        @click="handleClick"
        class="fixed bottom-6 right-6 z-10 flex h-14 w-14 items-center justify-center rounded-lg bg-pri text-on-pri shadow-solid transition-transform duration-150 ease-out active:scale-90 active:shadow-transparent md:bottom-12 md:right-12"
        :class="className">
        <span :class="icon" class="!h-6 !w-6"></span>
    </button>
</template>
