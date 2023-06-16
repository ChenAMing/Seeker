<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const emit = defineEmits<{ afterGo: [] }>()

function go(e: MouseEvent) {
    const t = e.target as HTMLElement
    if (t.dataset.routeLocation) {
        const rl = JSON.parse(t.dataset.routeLocation)
        router.push(rl)
        emit('afterGo')
    }
}
</script>

<template>
    <nav @click="go" class="flex flex-col gap-1 m-1">
        <slot></slot>
    </nav>
</template>
