import { useSide } from '@/stores'
import { RouterView } from 'vue-router'

export default {
    setup() {
        const side = useSide()

        return () => (
            <main id='seeker-content' v-swipe={[side.open, '120', ['right']]}>
                <RouterView />
            </main>
        )
    },
}
