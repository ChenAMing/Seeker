<script setup lang="ts">
const { type = 'secondary', disabled } = defineProps<{
    type?: 'primary' | 'secondary' | 'outline' | 'text'
    disabled?: boolean
    icon?: string
    appendIcon?: string
    higher?: boolean
}>()

const mapType = {
    primary: 'bg-pri text-on-pri border-transparent disabled:bg-mask-more disabled:text-otl',
    secondary: 'bg-sec text-on-sec border-transparent disabled:bg-mask-more disabled:text-otl',
    outline: 'bg-transparent border-otl disabled:text-otl disabled:border-mask-more',
    text: 'bg-transparent border-transparent disabled:text-otl',
}

const emit = defineEmits<{ click: [] }>()

const handleClick = () => (disabled ? undefined : emit('click'))

defineSlots<{ default(props: {}): string }>()
</script>

<template>
    <button
        type="button"
        :disabled="disabled"
        class="relative flex min-w-[2.5rem] items-center rounded border text-sm transition-colors duration-300 after:pointer-events-none after:absolute after:inset-0 after:rounded-sm after:bg-transparent after:transition-colors after:duration-300 hover:after:bg-mask focus:after:bg-mask active:after:bg-mask-more disabled:pointer-events-none"
        :class="[mapType[type], higher ? 'h-10' : 'h-9']"
        @click="handleClick">
        <span v-if="icon" class="ml-4 !h-5 !w-5" :class="icon"></span>
        <span
            class="flex-grow text-center"
            :class="[icon ? 'pl-2' : 'pl-6', appendIcon ? 'pr-2' : 'pr-6']">
            <slot></slot>
        </span>
        <span v-if="appendIcon" class="mr-4 !h-5 !w-5" :class="appendIcon"></span>
    </button>
</template>
