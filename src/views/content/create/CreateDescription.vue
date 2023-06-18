<script setup lang="ts">
import { useCreate } from '@/stores'
import TemplateCreate from './TemplateCreate.vue'

const create = useCreate()
</script>

<template>
    <TemplateCreate title="说明">
        <TextInput v-model="create.description" />
    </TemplateCreate>
</template>
