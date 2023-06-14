<script lang="ts" setup>
import { ref } from 'vue'
import { useTransition } from '@/composables'

defineProps<{ title: string; disabledConfirm?: boolean }>()

const show = ref<boolean>()

const open = () => (show.value = true)

const close = () => (show.value = false)

const emit = defineEmits<{ confirm: []; cancel: [] }>()

function handleConfirm() {
    emit('confirm')
    close()
}

function handleCancel() {
    emit('cancel')
    close()
}

defineSlots<{
    widget(props: { open: () => any }): any
    default(props: {}): any
}>()
</script>

<template>
    <slot name="widget" v-bind="{ open }"></slot>

    <Teleport to="body">
        <Transition v-bind="useTransition('fade')">
            <div
                v-show="show"
                class="fixed inset-0 z-30 flex items-center justify-center bg-mask-more backdrop-blur-sm">
                <Transition v-bind="useTransition('modal')">
                    <div
                        v-if="show"
                        class="flex w-96 max-w-[90vw] flex-col gap-4 rounded-xl bg-ctr-pri p-6">
                        <div class="ml-2 text-xl text-on-ctr-pri">{{ title }}</div>
                        <div><slot></slot></div>
                        <div class="flex items-center justify-end gap-4 pt-2">
                            <TheButton type="text" @click="handleCancel"> 取消 </TheButton>
                            <TheButton
                                type="primary"
                                @click="handleConfirm"
                                :disabled="disabledConfirm">
                                确认
                            </TheButton>
                        </div>
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>
