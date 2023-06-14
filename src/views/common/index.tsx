import { useSettings } from '@/stores'

export default {
    mounted() {
        /*
         * 预先加载
         */
        useSettings()
    },
    render: () => (
        <>
        </>
    ),
}
