import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./assets/CSS/main.css";
import ButtonComp from "./components/UI/ButtonComp.vue";

const app = createApp(App);
app.component(ButtonComp.name, ButtonComp);
app.use(store).mount("#app");
