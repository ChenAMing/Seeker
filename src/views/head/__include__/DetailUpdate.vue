<script setup lang="ts">
import { reactive } from 'vue'
import { useHead, useLive } from '@/stores'

const head = useHead()
const live = useLive()

const info = reactive<{
    name: string
    description: string
}>({
    name: '',
    description: '',
})

function getInfo() {
    info.name = live.listMeta?.name ?? ''
    info.description = live.listMeta?.description ?? ''
}

function clearInfo() {
    info.name = ''
    info.description = ''
}

function confirmEdit() {
    live.update(info.name, info.description)
    head.title = info.name
    clearInfo()
}
</script>

<template>
    <TheDialog
        title="编辑清单"
        :disabled-confirm="info.name.length === 0"
        @after-open="getInfo"
        @confirm="confirmEdit"
        @cancel="clearInfo">
        <template #widget="{ open }">
            <IconButton icon="icon-[solar--pen-2-bold-duotone]" lower @click="open" />
        </template>

        <template #content="{ show }">
            <div class="flex flex-col gap-4">
                <label class="flex flex-col">
                    <span class="mb-2 ml-2">名称</span>
                    <TextInput v-model="info.name" :auto-focus-when="show" />
                </label>

                <label class="flex flex-col">
                    <span class="mb-2 ml-2">说明</span>
                    <TextInput v-model="info.description" />
                </label>
            </div>
        </template>
    </TheDialog>
</template>
