import './assets/main.css'
import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

const app = createApp(App)

const pinia = createPinia()

app.use(pinia);

app.mount('#app');
