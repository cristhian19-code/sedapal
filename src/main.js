import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

import 'primevue/resources/themes/aura-light-blue/theme.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

import router from "./routes/index.js";

createApp(App).use(PrimeVue).use(ToastService).use(router)
    .mount('#app')