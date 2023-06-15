<script lang="ts" setup>
import { useTransition } from '@/composables'
</script>

<template>
    <div class="flex flex-wrap gap-2">
        <TransitionGroup v-bind="useTransition('fade')">
            <slot></slot>
        </TransitionGroup>
    </div>
</template>
