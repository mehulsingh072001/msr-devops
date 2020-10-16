import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueScrollactive from 'vue-scrollactive';

createApp(App).use(router).use(store).use(VueScrollactive).mount('#app')
