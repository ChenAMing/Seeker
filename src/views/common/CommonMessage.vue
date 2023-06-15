<script lang="ts" setup>
import { useMessage } from '@/stores'

const message = useMessage()

const mapType = {
    primary: 'bg-ctr-pri text-on-ctr-pri',
    secondary: 'bg-ctr-sec text-on-ctr-sec',
    error: 'bg-err text-on-err',
}
</script>

<template>
    <Teleport to="body">
        <div class="pointer-events-none fixed inset-x-0 top-0 flex flex-col items-center">
            <div class="relative z-50 flex w-80 max-w-[90vw] flex-col gap-2 pt-4">
                <TransitionGroup
                    enter-from-class="opacity-0"
                    leave-to-class="opacity-0"
                    leave-active-class="absolute">
                    <div
                        :class="mapType[msg.type]"
                        v-for="msg in message.queue"
                        :key="msg.id"
                        class="inset-x-0 top-0 rounded-md p-4 text-sm shadow-solid transition-all duration-300">
                        {{ msg.content }}
                    </div>
                </TransitionGroup>
            </div>
        </div>
    </Teleport>
</template>
