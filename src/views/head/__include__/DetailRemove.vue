<script setup lang="ts">
import { useLive } from '@/stores'

const live = useLive()
</script>

<template>
    <TheDialog title="删除清单" error @confirm="live.remove">
        <template #widget="{ open }">
            <IconButton
                icon="icon-[solar--trash-bin-trash-bold-duotone]"
                error
                lower
                @click="open" />
        </template>

        <template #content>
            <div>
                <p class="align-middle leading-8">
                    {{ live.listMeta?.name }} 清单的所有项目都会被删除。
                </p>
                <p>确认删除？</p>
            </div>
        </template>
    </TheDialog>
</template>
