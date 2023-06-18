<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useLive } from '@/stores'
import DetailInfo from './__include__/DetailInfo.vue'
import DetailRemove from './__include__/DetailRemove.vue'
import DetailStar from './__include__/DetailStar.vue'
import DetailUpdate from './__include__/DetailUpdate.vue'

const route = useRoute()
const live = useLive()
</script>

<template>
    <TheDrawerCard
        v-if="route.name === 'list'"
        title="详细信息"
        :type="live.listMeta?.star ? 'primary' : 'outline'">
        <template #widget="{ show, toggle }">
            <IconButton
                :disabled="route.name !== 'list'"
                :icon="
                    show
                        ? 'icon-[solar--menu-dots-line-duotone]'
                        : 'icon-[solar--menu-dots-bold-duotone]'
                "
                class="z-30"
                @click="toggle" />
        </template>

        <template #action>
            <DetailRemove />
            <DetailUpdate />
            <DetailStar />
        </template>

        <template #content>
            <DetailInfo />
        </template>
    </TheDrawerCard>
</template>
