<script lang="ts" setup>
import { useHead, useLive } from '@/stores'
import { reactive } from 'vue'

const live = useLive()
const head = useHead()

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
    head.modifyTitle(info.name)
    clearInfo()
}
</script>

<template>
    <TheDialog
        title="编辑清单"
        @after-open="getInfo"
        @confirm="confirmEdit"
        @cancel="clearInfo"
        :disabled-confirm="info.name.length === 0">
        <template #widget="{ open }">
            <IconButton icon="icon-[solar--pen-2-bold-duotone]" lower @click="open" />
        </template>

        <div class="flex flex-col gap-4">
            <label class="flex flex-col">
                <span class="mb-2 ml-2">名称</span>
                <TextInput v-model="info.name" />
            </label>

            <label class="flex flex-col">
                <span class="mb-2 ml-2">说明</span>
                <TextInput v-model="info.description" />
            </label>
        </div>
    </TheDialog>
</template>
