<script setup lang="ts">
import { useLive, useSelected } from '@/stores'

const live = useLive()
const selected = useSelected()
</script>

<template>
    <TheDialog
        title="删除"
        @confirm="live.deleteItem(selected.set)"
        @cancel="selected.able = false"
        error>
        <template #widget="{ open }">
            <TransitionFade>
                <IconButton
                    v-if="selected.able"
                    @click="open"
                    icon="icon-[solar--trash-bin-2-bold-duotone]"
                    :disabled="selected.set.size === 0"
                    error />
            </TransitionFade>
        </template>

        <template #content>
            <p>确认删除所选的 {{ selected.set.size }} 项？</p>
        </template>
    </TheDialog>

    <IconButton
        :icon="
            selected.able
                ? 'icon-[solar--close-square-bold-duotone]'
                : 'icon-[solar--check-square-line-duotone]'
        "
        @click="selected.able = !selected.able" />
</template>
