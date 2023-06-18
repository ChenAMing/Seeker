import SettingsReset from './SettingsReset.vue'
import SettingsTheme from './SettingsTheme.vue'

export default {
    render: () => (
        <div class='mx-auto flex max-w-[40rem] flex-col'>
            <SettingsTheme />
            <SettingsReset />
        </div>
    ),
}
