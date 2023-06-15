<script lang="ts" setup>
import { ref } from 'vue'

defineProps<{ icon: string; title: string }>()

const collapse = ref<boolean>(true)

const toggle = () => (collapse.value = !collapse.value)
</script>

<template>
    <div class="flex flex-col">
        <button
            type="button"
            @click="toggle"
            class="mx-1 mb-1 flex h-8 items-center rounded px-3 transition-colors duration-300 hover:bg-mask active:bg-mask-more">
            <span
                class="!h-4 transition-all duration-300"
                :class="[icon, collapse ? 'mr-6 !w-4' : 'mr-0 !w-0']"></span>
            <span>{{ title }}</span>
        </button>

        <TransitionCollapse>
            <div class="relative overflow-hidden transition-all duration-300" v-show="!collapse">
                <slot></slot>
            </div>
        </TransitionCollapse>
    </div>
</template>
