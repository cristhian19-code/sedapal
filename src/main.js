import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

// import 'primevue/resources/themes/aura-light-blue/theme.css'
// import 'primevue/resources/themes/aura-light-noir/theme.css'
import 'primevue/resources/themes/aura-dark-noir/theme.css'

import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

import router from "./routes/index.js";
import { createPinia } from 'pinia';

import Tooltip from 'primevue/tooltip';

const pinia = createPinia();

createApp(App).use(PrimeVue)
    .directive('tooltip', Tooltip)
    .use(pinia)
    .use(ToastService)
    .use(router)
    .mount('#app')