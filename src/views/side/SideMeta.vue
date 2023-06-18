<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useMeta, useSide } from '@/stores'

const route = useRoute()
const meta = useMeta()
const side = useSide()
</script>

<template>
    <TheCollapse
        title="清单"
        icon="icon-[solar--widget-bold-duotone]"
        :placeholder="meta.allNoStar.length === 0">
        <Navigation @after-go="side.close">
            <NavigationItem
                v-for="item in meta.allNoStar"
                :key="item.id"
                type="secondary"
                icon="icon-[solar--notes-minimalistic-bold-duotone]"
                :route-location="{ name: 'list', query: { id: item.id } }"
                :selected="route.query.id === item.id">
                {{ item.name }}
            </NavigationItem>
        </Navigation>
    </TheCollapse>
</template>
