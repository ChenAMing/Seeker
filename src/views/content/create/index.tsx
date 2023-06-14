import CreateActions from './CreateActions.vue'
import CreateDescription from './CreateDescription.vue'
import CreateName from './CreateName.vue'

export default {
    render: () => (
        <div class='mx-auto flex max-w-[40rem] flex-col'>
            <CreateName />
            <CreateDescription />
            <CreateActions />
        </div>
    ),
}
