<script lang="ts" setup>
import { useLive } from '@/stores'

const live = useLive()

const sortRules = [
    { icon: 'icon-[solar--arrow-down-line-duotone]', text: '名称' },
    { icon: 'icon-[solar--arrow-up-line-duotone]', text: '名称' },
    { icon: 'icon-[solar--arrow-down-line-duotone]', text: '日期' },
    { icon: 'icon-[solar--arrow-up-line-duotone]', text: '日期' },
]
</script>

<template>
    <div class="flex items-center gap-2">
        <span
            class="box-content h-6 w-12 select-none rounded-full border border-otl text-center font-bold leading-6 text-otl">
            {{ live.data.length }}
        </span>

        <div class="flex-1"></div>

        <ListState :state="sortRules" #="{ current, next }">
            <TheButton type="text" @click="next" :icon="current.icon">
                {{ current.text }}
            </TheButton>
        </ListState>
    </div>
</template>
