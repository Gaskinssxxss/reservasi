import { createApp } from "vue";
import App from "./App.vue";

import router from "./services/router";
import store from "./services/store";

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import './assets/tailwind.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App)
    .use(router)
    .use(VueToast)
    .use(store)
    .use(VueSweetalert2)
    .mount("#app");
