<script lang="ts" setup>
import { ref } from 'vue'
import TheCard from '../card/TheCard.vue'

const { type = 'secondary' } = defineProps<{
    type?: 'primary' | 'secondary' | 'outline'
    title: string
}>()

const show = ref<boolean>()

const toggle = () => (show.value = !show.value)

const close = () => (show.value ? (show.value = false) : undefined)

defineSlots<{
    widget(props: { show: boolean; toggle: () => any }): any
    action(props: {}): any
    default(props: {}): any
}>()
</script>

<template>
    <div v-click-outside="close" class="z-30">
        <slot name="widget" v-bind="{ show, toggle }"></slot>

        <Transition enter-from-class="translate-x-[150%]" leave-to-class="translate-x-[150%]">
            <TheCard
                class="fixed right-4 top-14 z-20 max-h-[calc(100vh_-_4.5rem)] w-96 max-w-[90vw] transition duration-300"
                v-show="show"
                :type="type"
                :title="title">
                <template #action>
                    <slot name="action"></slot>
                </template>
                <slot></slot>
            </TheCard>
        </Transition>
    </div>
</template>
