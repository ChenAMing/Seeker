<script lang="ts" setup>
import { ref } from 'vue'

const handler = {
    beforeEnter(el: HTMLElement) {
        el.style.maxHeight = '0'
    },
    enter(el: HTMLElement) {
        el.style.maxHeight = el.scrollHeight + 'px'
    },
    afterEnter(el: HTMLElement) {
        el.style.maxHeight = ''
    },
    beforeLeave(el: HTMLElement) {
        el.style.maxHeight = el.scrollHeight + 'px'
    },
    leave(el: HTMLElement) {
        el.style.maxHeight = '0'
    },
    afterLeave(el: HTMLElement) {
        el.style.maxHeight = ''
    },
}
</script>

<template>
    <Transition @="handler">
        <slot></slot>
    </Transition>
</template>
