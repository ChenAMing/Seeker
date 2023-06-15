<script lang="ts" setup>
import { useLive } from '@/stores'
import DetailRemove from './__include__/DetailRemove.vue'
import DetailStar from './__include__/DetailStar.vue'

const live = useLive()
</script>

<template>
    <TheDrawerCard title="详细信息" :type="live.listMeta?.star ? 'primary' : 'outline'">
        <template #widget="{ show, toggle }">
            <IconButton
                @click="toggle"
                :icon="
                    show
                        ? 'icon-[solar--menu-dots-line-duotone]'
                        : 'icon-[solar--menu-dots-bold-duotone]'
                "
                class="z-30" />
        </template>

        <template #action>
            <DetailRemove />
            <DetailStar />
        </template>
    </TheDrawerCard>
</template>
