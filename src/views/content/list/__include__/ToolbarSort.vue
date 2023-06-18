<script setup lang="ts">
import { useSortArray } from '@/composables'
import { useLive } from '@/stores'

const live = useLive()

const sortRules = [
    {
        sortArgs: { key: 'value', reverse: false },
        icon: 'icon-[solar--arrow-down-line-duotone]',
        text: '名称',
    },
    {
        sortArgs: { key: 'value', reverse: true },
        icon: 'icon-[solar--arrow-up-line-duotone]',
        text: '名称',
    },
    {
        sortArgs: { key: 'dateModified', reverse: false },
        icon: 'icon-[solar--arrow-down-line-duotone]',
        text: '日期',
    },
    {
        sortArgs: { key: 'dateModified', reverse: true },
        icon: 'icon-[solar--arrow-up-line-duotone]',
        text: '日期',
    },
]

const applySort = (current: any) => useSortArray(live.data, current.sortArgs)
</script>

<template>
    <ListState #="{ current, next }" :state="sortRules" @after-next="applySort">
        <TheButton type="text" :icon="current.icon" higher @click="next">
            <DynamicText :text="current.text" size="sm" />
        </TheButton>
    </ListState>
</template>
