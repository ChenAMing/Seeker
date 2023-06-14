<script lang="ts" setup>
const { type = 'secondary', disabled } = defineProps<{
    type?: 'primary' | 'secondary' | 'outline' | 'text'
    icon?: string
    appendIcon?: string
    disabled?: boolean
}>()

const mapType = {
    primary: 'bg-pri text-on-pri border-transparent',
    secondary: 'bg-sec text-on-sec border-transparent',
    outline: 'bg-transparent text-on-sec border-otl',
    text: 'bg-transparent text-on-sec border-transparent',
}

const mapTypeDisabled = {
    primary: 'bg-mask-act text-otl border-transparent',
    secondary: 'bg-mask-act text-otl border-transparent',
    outline: 'bg-transparent text-otl border-mask-act',
    text: 'bg-transparent text-otl border-transparent',
}

const emit = defineEmits<{ click: [] }>()

const handleClick = () => (disabled ? undefined : emit('click'))
</script>

<template>
    <button
        type="button"
        @click="handleClick"
        :disabled="disabled"
        class="relative flex h-9 min-w-[2.5rem] items-center rounded border text-sm transition-colors duration-300 after:pointer-events-none after:absolute after:inset-0 after:rounded-sm after:bg-transparent after:transition-colors after:duration-300 hover:after:bg-mask focus:after:bg-mask active:after:bg-mask-act"
        :class="disabled ? [mapTypeDisabled[type], 'pointer-events-none'] : mapType[type]">
        <span v-if="icon" class="ml-4 !h-5 !w-5" :class="icon"></span>
        <span
            :class="[icon ? 'pl-2' : 'pl-6', appendIcon ? 'pr-2' : 'pr-6']"
            class="flex-grow text-center">
            <slot></slot>
        </span>
        <span v-if="appendIcon" class="mr-4 !h-5 !w-5" :class="appendIcon"></span>
    </button>
</template>
