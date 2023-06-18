<script setup lang="ts">
import { useDateFormat } from '@/composables'
import { useLive } from '@/stores'

const live = useLive()
</script>

<template>
    <ChipBook>
        <LabelChip label="名称">{{ live.listMeta?.name }}</LabelChip>
        <LabelChip
            v-if="live.listMeta?.description"
            label="说明"
            :hover-text="live.listMeta.description">
            {{ live.listMeta?.description }}
        </LabelChip>
        <LabelChip v-if="live.listMeta?.dateCreated" label="创建日期">
            {{ live.listMeta?.dateCreated ? useDateFormat(live.listMeta.dateCreated) : undefined }}
        </LabelChip>
    </ChipBook>
</template>
