<script lang="ts" setup>
import ToolbarCount from './__include__/ToolbarCount.vue'
import ToolbarDelete from './__include__/ToolbarDelete.vue'
import ToolbarSort from './__include__/ToolbarSort.vue'
</script>

<template>
    <div class="flex items-center gap-2">
        <ToolbarCount />
        <div class="flex-1"></div>
        <ToolbarDelete />
        <ToolbarSort />
    </div>
</template>
