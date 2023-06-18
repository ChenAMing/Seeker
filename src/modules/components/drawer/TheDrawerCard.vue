<script setup lang="ts">
import { ref } from 'vue'
import TheCard from '../card/TheCard.vue'

const { type = 'secondary' } = defineProps<{
    type?: 'primary' | 'secondary' | 'outline'
    title: string
}>()

const show = ref<boolean>(false)

const toggle = () => (show.value = !show.value)

const close = () => (show.value ? (show.value = false) : undefined)

defineSlots<{
    widget(props: { show: boolean; toggle: () => any }): any
    action(props: {}): any
    content(props: {}): any
}>()
</script>

<template>
    <div v-click-outside="close" class="z-30">
        <slot name="widget" v-bind="{ show, toggle }"></slot>

        <Transition enter-from-class="translate-x-[150%]" leave-to-class="translate-x-[150%]">
            <TheCard
                class="fixed right-4 top-16 z-20 max-h-[calc(100vh_-_5rem)] w-[32rem] max-w-[calc(100vw_-_2rem)] shadow-light transition duration-300"
                v-show="show"
                :type="type"
                :title="title">
                <template #action>
                    <slot name="action"></slot>
                </template>

                <slot name="content"></slot>
            </TheCard>
        </Transition>
    </div>
</template>
