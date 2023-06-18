<script lang="ts" setup>
import { watchEffect } from 'vue'

const { selectable } = defineProps<{ selectable?: boolean }>()

const selected = defineModel<Set<[id: string][0]>>({ local: true, default: new Set() })

function select(e: MouseEvent) {
    if (selectable) {
        const t = e.target as HTMLElement
        const v = t.dataset.fragmentValue
        if (v) selected.value.has(v) ? selected.value.delete(v) : selected.value.add(v)
    }
}

watchEffect(() => {
    if (!selectable) selected.value.clear()
})

defineSlots<{ default(props: { selected: Set<string> }): any }>()
</script>

<template>
    <div class="flex flex-wrap gap-2" @click="select">
        <TransitionFade group>
            <slot :="{ selected }"></slot>
        </TransitionFade>
    </div>
</template>
