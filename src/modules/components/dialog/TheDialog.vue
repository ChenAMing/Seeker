<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ title: string; disabledConfirm?: boolean; error?: boolean }>()

const emit = defineEmits<{ afterOpen: []; confirm: []; cancel: [] }>()

const show = ref<boolean>()

const open = () => {
    show.value = true
    emit('afterOpen')
}

const close = () => (show.value = false)

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
    content(props: { show: boolean }): any
}>()
</script>

<template>
    <slot name="widget" v-bind="{ open }"></slot>

    <Teleport to="body">
        <TransitionFade>
            <div
                v-show="show"
                class="fixed inset-0 z-40 flex items-center justify-center bg-mask-more backdrop-blur-sm">
                <TransitionModal>
                    <div
                        v-if="show"
                        class="flex w-96 max-w-[90vw] flex-col gap-4 rounded-2xl p-6 max-sm:mb-32"
                        :class="error ? 'bg-err text-on-err' : 'bg-ctr-pri text-on-ctr-pri'">
                        <div class="ml-2 text-xl">
                            {{ title }}
                        </div>
                        <div class="text-sm"><slot name="content" v-bind="{ show }"></slot></div>
                        <div class="flex items-center justify-end gap-4 pt-2">
                            <TheButton type="text" @click="handleCancel"> 取消 </TheButton>
                            <TheButton
                                :type="error ? 'text' : 'primary'"
                                :disabled="disabledConfirm"
                                @click="handleConfirm">
                                确认
                            </TheButton>
                        </div>
                    </div>
                </TransitionModal>
            </div>
        </TransitionFade>
    </Teleport>
</template>
