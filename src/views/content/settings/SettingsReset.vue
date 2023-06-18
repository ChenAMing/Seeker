<script setup lang="ts">
import { useSettings } from '@/stores'
import TemplateSettings from './TemplateSettings.vue'
import { useMessage } from '@/stores'

const settings = useSettings()
const message = useMessage()

function reset() {
    settings.$reset()
    message.pop('primary', '⚠️ 设置已重置')
}
</script>

<template>
    <TemplateSettings title="重置">
        <div>
            <TheButton type="primary" icon="icon-[solar--restart-line-duotone]" @click="reset">
                重置设置到默认值
            </TheButton>
        </div>
    </TemplateSettings>
</template>
