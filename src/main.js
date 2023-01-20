import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./assets/CSS/main.css";

const app = createApp(App).use(store).mount("#app");
