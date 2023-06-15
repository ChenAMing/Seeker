<script lang="ts" setup>
import { useLive } from '@/stores'

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
            <IconButton
                :icon="
                    live.listMeta?.star
                        ? 'icon-[solar--star-bold-duotone]'
                        : 'icon-[solar--star-broken]'
                "
                lower
                @click="live.star" />
        </template>
    </TheDrawerCard>
</template>
