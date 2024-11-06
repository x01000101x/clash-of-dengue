import { createApp } from "vue";
import App from "./App.vue";
import "./css/tailwind.css";
import router from "./router";
import store from "./store";
import "@fortawesome/fontawesome-free/css/all.css";
import './registerServiceWorker'

createApp(App)
    .use(store)
    .use(router) // Gunakan router
    .mount("#app");
