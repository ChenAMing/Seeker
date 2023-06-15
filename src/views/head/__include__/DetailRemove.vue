<script lang="ts" setup>
import { useLive } from '@/stores'

const live = useLive()
</script>

<template>
    <TheDialog title="删除清单" @confirm="live.remove" error>
        <template #widget="{ open }">
            <IconButton
                @click="open"
                icon="icon-[solar--trash-bin-trash-bold-duotone]"
                lower
                error />
        </template>

        <div class="align-middle leading-8">
            *{{ live.listMeta?.name }}* 清单的所有项目都会被删除。确认删除？
        </div>
    </TheDialog>
</template>
