import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vuelidate from "vuelidate";
import VueTelInput from 'vue-tel-input'

createApp(App).use(router).use(VueTelInput).use(store).use(Vuelidate).mount('#app')
