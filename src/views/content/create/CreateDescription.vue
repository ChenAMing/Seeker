<script lang="ts" setup>
import TemplateCreate from './TemplateCreate.vue'
import { useCreate } from '@/stores'

const create = useCreate()
</script>

<template>
    <TemplateCreate title="说明">
        <TextInput v-model="create.description" />
    </TemplateCreate>
</template>
