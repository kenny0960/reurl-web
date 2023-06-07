import axios from "axios";
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

axios.defaults.baseURL = process.env.VUE_APP_REURL_HOST_URI;

createApp(App).use(store).use(router).mount("#app");
