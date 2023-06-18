<script setup lang="ts">
import { useCreate } from '@/stores'

const create = useCreate()
</script>

<template>
    <div class="flex justify-end gap-6 p-4">
        <TheButton type="outline" icon="icon-[solar--restart-line-duotone]" @click="create.reset">
            重置
        </TheButton>
        <TheButton
            type="primary"
            :disabled="create.name.length === 0"
            icon="icon-[solar--check-read-outline]"
            @click="create.confirm">
            创建
        </TheButton>
    </div>
</template>
