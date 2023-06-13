<template>
    <div id="seeker" class="grid h-100vh w-100vw bg-sur text-on-sur transition-colors duration-300">
        <RouterView name="common" />
        <RouterView name="head" />
        <RouterView name="side" />
        <RouterView name="content" />
    </div>
</template>

<style>
#seeker {
    grid-template:
        's h' 3.5rem
        's c' 1fr
        / 15rem 1fr;
    grid-template-rows: 3.5rem 1fr;
    grid-template-columns: 15rem 1fr;
}

@media (max-width: theme('screens.md')) {
    #seeker {
        grid-template-columns: 0 1fr;
    }
}

#seeker-header {
    grid-area: h;
}

#seeker-sidebar {
    grid-area: s;
}

#seeker-content {
    grid-area: c;
}
</style>
