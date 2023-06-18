import { useSettings, useWatcher } from '@/stores'
import CommonMessage from './CommonMessage.vue'

export default {
    mounted() {
        /*
         * 预先加载
         */
        useSettings()
        useWatcher()
    },
    render: () => (
        <>
            <CommonMessage />
        </>
    ),
}
