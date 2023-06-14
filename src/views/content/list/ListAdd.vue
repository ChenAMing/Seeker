<script lang="ts" setup>
import { useLive } from '@/stores'
import { ref } from 'vue'

const live = useLive()

const newValue = ref('')

function confirmAdd() {
    live.add(newValue.value)
    newValue.value = ''
}
</script>

<template>
    <TheDialog title="添加" :disabled-confirm="newValue.length === 0" @confirm="confirmAdd">
        <template #widget="{ open }">
            <FloatButton icon="icon-[ri--add-fill]" @click="open" />
        </template>

        <TextInput v-model="newValue" />
    </TheDialog>
</template>
