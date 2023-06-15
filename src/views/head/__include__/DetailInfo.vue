<script lang="ts" setup>
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
        <LabelChip label="创建日期" v-if="live.listMeta?.dateCreated">
            {{ live.listMeta?.dateCreated ? useDateFormat(live.listMeta.dateCreated) : undefined }}
        </LabelChip>
    </ChipBook>
</template>
