import { createApp } from "vue";
import "./main.css";
import router from "./routes/router.js";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
