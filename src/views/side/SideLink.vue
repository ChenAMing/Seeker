<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useSide } from '@/stores'

const route = useRoute()
const side = useSide()

const sideLinks = [
    { name: 'home', text: '主页', icon: 'icon-[solar--home-bold-duotone]' },
    { name: 'create', text: '新建', icon: 'icon-[solar--widget-add-bold-duotone]' },
    { name: 'settings', text: '设置', icon: 'icon-[solar--settings-bold-duotone]' },
] as const
</script>

<template>
    <Navigation @after-go="side.close">
        <NavigationItem
            type="primary"
            v-for="(link, index) in sideLinks"
            :key="index"
            :route-location="{ name: link.name }"
            :selected="link.name === route.name"
            :icon="link.icon">
            {{ link.text }}
        </NavigationItem>
    </Navigation>
</template>
