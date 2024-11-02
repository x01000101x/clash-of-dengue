import { createApp } from "vue";
import App from "./App.vue";
import "./css/tailwind.css";
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.css";

createApp(App)
    .use(router) // Gunakan router
    .mount("#app");
