<script setup lang="ts">
import { Transition, TransitionGroup } from 'vue'

defineProps<{ group?: boolean }>()
</script>

<template>
    <component
        :is="group ? TransitionGroup : Transition"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
        enter-active-class="transition-opacity duration-300 ease-out"
        leave-active-class="transition-opacity duration-300 ease-in">
        <slot></slot>
    </component>
</template>
