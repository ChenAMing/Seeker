<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ title: string; icon: string; placeholder?: boolean }>()

const collapse = ref<boolean>(true)

const toggle = () => (collapse.value = !collapse.value)
</script>

<template>
    <div class="flex flex-col">
        <button
            type="button"
            @click="toggle"
            class="mx-1 flex h-10 items-center rounded px-4 transition-colors duration-300 hover:bg-mask active:bg-mask-more">
            <span
                class="!h-4 transition-all duration-300"
                :class="[icon, collapse ? 'mr-5 !w-4' : 'mr-1 !w-0']"></span>
            <span>{{ title }}</span>
        </button>

        <TransitionCollapse>
            <div class="relative overflow-hidden transition-all duration-300" v-show="!collapse">
                <!-- Placeholder -->
                <div
                    v-if="placeholder"
                    class="pointer-events-none mx-1 flex h-10 items-center gap-5 px-4 text-on-sur-var">
                    <span
                        class="transition-color icon-[solar--close-square-bold-duotone] !h-4 !min-w-[1rem]"></span>
                    <span class="transition-color"> 空空如也 </span>
                </div>
                <!-- Slot -->
                <slot></slot>
            </div>
        </TransitionCollapse>
    </div>
</template>
