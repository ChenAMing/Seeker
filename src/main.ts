import './styles/app.css'

import { createApp } from 'vue'
import App from './App.vue'
import modules from './modules'

createApp(App).use(modules).mount('#app')
