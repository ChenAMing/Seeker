<script setup lang="ts">
import { useLive } from '@/stores'
import { useSelected } from '@/stores/data/selected'

const live = useLive()
const selected = useSelected()
</script>

<template>
    <FragmentBook :selectable="selected.able" v-model="selected.set" #="{ selected }">
        <TheFragment v-for="item in live.data" v-bind="{ selected, value: item.id, key: item.id }">
            {{ item.value }}
        </TheFragment>
    </FragmentBook>
</template>
