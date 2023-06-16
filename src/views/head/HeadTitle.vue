<script lang="ts" setup>
import { useHead } from '@/stores'

const head = useHead()
</script>

<template>
    <div class="relative flex-1">
        <TransitionGroup
            enter-from-class="opacity-0"
            leave-to-class="opacity-0"
            leave-active-class="absolute transition-all duration-300"
            enter-active-class="transition-all duration-300">
            <div class="truncate text-lg" v-for="title in head.title" :key="title">
                {{ title }}
            </div>
        </TransitionGroup>
    </div>
</template>
