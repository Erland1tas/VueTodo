import { createApp } from 'vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
import App from './App.vue'

import './assets/main.scss'

createApp(App).use(pinia)
createApp(App).mount('#app')
