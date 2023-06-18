<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useMeta, useSide } from '@/stores'

const route = useRoute()
const meta = useMeta()
const side = useSide()
</script>

<template>
    <TheCollapse
        title="收藏"
        icon="icon-[solar--star-bold-duotone]"
        :placeholder="meta.allStar.length === 0">
        <Navigation @after-go="side.close">
            <NavigationItem
                v-for="star in meta.allStar"
                :key="star.id"
                type="secondary"
                icon="icon-[solar--stars-bold-duotone]"
                :route-location="{ name: 'list', query: { id: star.id } }"
                :selected="route.query.id === star.id">
                {{ star.name }}
            </NavigationItem>
        </Navigation>
    </TheCollapse>
</template>
