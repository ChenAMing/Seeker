<script lang="ts" setup>
import { useCreate } from '@/stores'

const create = useCreate()
</script>

<template>
    <div class="flex justify-end gap-6 p-4">
        <TheButton type="outline" @click="create.reset" icon="icon-[solar--restart-line-duotone]">
            重置
        </TheButton>
        <TheButton
            type="primary"
            @click="create.confirm"
            icon="icon-[solar--check-read-outline]"
            :disabled="create.name.length === 0">
            创建
        </TheButton>
    </div>
</template>
