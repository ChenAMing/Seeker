<script setup lang="ts">
import { useSettings } from '@/stores'
import TemplateSettings from './TemplateSettings.vue'

const settings = useSettings()

const options = [
    { value: 'light', text: '明亮', icon: 'icon-[solar--sun-2-bold-duotone]' },
    { value: 'auto', text: '跟随系统' },
    { value: 'dark', text: '黯淡', icon: 'icon-[solar--moon-bold-duotone]' },
]
</script>

<template>
    <TemplateSettings title="主题">
        <div>
            <SegmentedButton :options="options" v-model="settings.theme" />
        </div>
    </TemplateSettings>
</template>
