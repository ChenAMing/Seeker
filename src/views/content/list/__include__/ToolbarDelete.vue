<script setup lang="ts">
import { useLive, useSelected } from '@/stores'

const live = useLive()
const selected = useSelected()
</script>

<template>
    <TheDialog
        title="删除"
        v-if="selected.set.size !== 0"
        @confirm="live.deleteItem(selected.set)"
        @cancel="selected.able = false"
        error>
        <template #widget="{ open }">
            <TransitionFade>
                <IconButton
                    v-if="selected.able && selected.set.size"
                    @click="open"
                    icon="icon-[solar--trash-bin-2-bold-duotone]"
                    error />
            </TransitionFade>
        </template>

        <p>确认删除所选的 {{ selected.set.size }} 项？</p>
    </TheDialog>

    <IconButton
        :icon="
            selected.able
                ? 'icon-[solar--close-square-line-duotone]'
                : 'icon-[solar--check-square-line-duotone]'
        "
        @click="selected.able = !selected.able" />
</template>
