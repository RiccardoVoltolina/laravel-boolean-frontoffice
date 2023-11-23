import { createApp } from 'vue'
import './assets/style/style.scss'
import {router} from './router.js'
import App from './App.vue'

createApp(App).use(router).mount('#app')
