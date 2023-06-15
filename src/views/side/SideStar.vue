<script lang="ts" setup>
import { useMeta, useSide } from '@/stores'
import { useRoute } from 'vue-router'

const route = useRoute()
const meta = useMeta()
const side = useSide()
</script>

<template>
    <TheCollapse
        title="收藏"
        icon="icon-[solar--star-bold-duotone]"
        :placeholder="meta.allStar.length === 0">
        <Navigation @after-go="side.show = false">
            <NavigationItem
                type="secondary"
                icon="icon-[solar--stars-bold-duotone]"
                v-for="star in meta.allStar"
                :key="star.id"
                :selected="route.query.id === star.id"
                :route-location="{ name: 'list', query: { id: star.id } }">
                {{ star.name }}
            </NavigationItem>
        </Navigation>
    </TheCollapse>
</template>
