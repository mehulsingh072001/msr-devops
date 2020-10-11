import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueScrollTo from 'vue-scrollto'

createApp(App).use(router, VueScrollTo).use(store).mount('#app')
