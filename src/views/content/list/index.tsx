import { useLive } from '@/stores'
import ListAdd from './ListAdd.vue'
import ListFragments from './ListFragments.vue'
import ListPlaceholder from './ListPlaceholder.vue'
import ListToolbar from './ListToolbar.vue'

export default {
    setup() {
        const live = useLive()

        return () => (
            <>
                <ListAdd />
                {live.data.length !== 0 ? (
                    <div class='flex flex-col gap-2 px-4 pt-1'>
                        <ListToolbar />
                        <ListFragments />
                    </div>
                ) : (
                    <ListPlaceholder />
                )}
            </>
        )
    },
}
