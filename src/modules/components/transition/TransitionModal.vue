<template>
    <Transition
        enter-from-class="opacity-0 -translate-y-3/4 scale-y-50"
        leave-to-class="opacity-0 -translate-y-3/4 scale-y-50"
        enter-active-class="transition duration-300 ease-out"
        leave-active-class="transition duration-300 ease-in">
        <slot></slot>
    </Transition>
</template>
