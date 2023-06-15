<script lang="ts" setup>
import { useMeta, useSide } from '@/stores'
import { useRoute } from 'vue-router'

const route = useRoute()
const meta = useMeta()
const side = useSide()
</script>

<template>
    <TheCollapse icon="icon-[solar--widget-bold-duotone]" title="全部清单">
        <Navigation @after-go="side.show = false">
            <NavigationItem
                type="secondary"
                icon="icon-[solar--notes-minimalistic-bold-duotone]"
                v-for="item in meta.all"
                :key="item.id"
                :selected="route.query.id === item.id"
                :route-location="{ name: 'list', query: { id: item.id } }">
                {{ item.name }}
            </NavigationItem>
        </Navigation>
    </TheCollapse>
</template>
