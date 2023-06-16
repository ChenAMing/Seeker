<script lang="ts" setup>
import { useHead } from '@/stores'

const head = useHead()
</script>

<template>
    <div class="relative flex-1">
        <TransitionGroup
            enter-from-class="opacity-0"
            leave-to-class="opacity-0"
            leave-active-class="absolute">
            <div
                class="truncate text-lg transition-all duration-300"
                v-for="title in head.title"
                :key="title">
                {{ title }}
            </div>
        </TransitionGroup>
    </div>
</template>
