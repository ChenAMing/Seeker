import HeadListDetail from './HeadListDetail.vue'
import HeadSidebarToggle from './HeadSidebarToggle.vue'
import HeadTitle from './HeadTitle.vue'

export default {
    render: () => (
        <header id='seeker-header' class='relative flex items-center gap-2 px-2'>
            {/* Include */}
            <HeadSidebarToggle />
            <HeadTitle />
            <HeadListDetail />
        </header>
    ),
}
