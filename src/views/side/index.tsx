import { withModifiers } from 'vue'
import { TransitionFade } from '@/modules/components/imports'
import { useSide } from '@/stores'
import SideLink from './SideLink.vue'
import SideLogo from './SideLogo.vue'
import SideStar from './SideStar.vue'
import SideMeta from './SideMeta.vue'

export default {
    setup() {
        const side = useSide()

        return () => (
            <aside id='seeker-sidebar' class='relative'>
                <TransitionFade>
                    <div
                        onClick={withModifiers(side.toggle, ['self'])}
                        v-show={side.show}
                        class='fixed inset-0 z-20 bg-mask-more backdrop-blur-sm md:hidden'></div>
                </TransitionFade>

                <div
                    class={[
                        'fixed inset-y-0 left-0 flex h-100vh w-60 flex-col overflow-y-hidden bg-sur transition duration-300 hover:overflow-y-auto max-md:z-20',
                        side.show ? 'max-md:translate-x-0' : 'max-md:-translate-x-full',
                    ]}>
                    {/* Include */}
                    <SideLogo />
                    <SideLink />
                    <SideStar />
                    <SideMeta />
                </div>
            </aside>
        )
    },
}
