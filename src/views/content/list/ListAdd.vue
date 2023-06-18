<script setup lang="ts">
import { useLive } from '@/stores'
import { ref } from 'vue'

const live = useLive()

const newValue = ref('')

function confirmAdd() {
    live.addItem(newValue.value)
    newValue.value = ''
}
</script>

<template>
    <TheDialog title="添加" :disabled-confirm="newValue.length === 0" @confirm="confirmAdd">
        <template #widget="{ open }">
            <FloatButton icon="icon-[ri--add-fill]" @click="open" />
        </template>

        <template #content="{ show }">
            <TextInput v-model="newValue" :auto-focus-when="show" />
        </template>
    </TheDialog>
</template>
