<script lang="ts" setup>
import { useLive } from '@/stores'
import { useSelected } from '@/stores/data/selected'

const live = useLive()
const selected = useSelected()
</script>

<template>
    <FragmentBook :selectable="selected.able" v-model="selected.set" #="{ selected }">
        <TheFragment :value="item.id" v-for="item in live.data" :key="item.id" :="{ selected }">
            {{ item.value }}
        </TheFragment>
    </FragmentBook>
</template>
