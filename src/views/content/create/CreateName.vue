<script setup lang="ts">
import { useCreate } from '@/stores'
import TemplateCreate from './TemplateCreate.vue'

const create = useCreate()
</script>

<template>
    <TemplateCreate title="名称" required>
        <TextInput v-model="create.name" />
    </TemplateCreate>
</template>
