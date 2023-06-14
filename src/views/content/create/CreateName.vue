<script lang="ts" setup>
import TemplateCreate from './TemplateCreate.vue'
import { useCreate } from '@/stores'

const create = useCreate()
</script>

<template>
    <TemplateCreate title="名称" required>
        <TextInput v-model="create.name" />
    </TemplateCreate>
</template>
