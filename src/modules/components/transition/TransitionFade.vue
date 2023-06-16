<script lang="ts" setup>
import { Transition, TransitionGroup } from 'vue'

defineProps<{ group?: boolean }>()
</script>

<template>
    <component
        :is="group ? TransitionGroup : Transition"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
        enter-active-class="transition-opacity duration-300 ease-in"
        leave-active-class="transition-opacity duration-300 ease-out">
        <slot></slot>
    </component>
</template>
