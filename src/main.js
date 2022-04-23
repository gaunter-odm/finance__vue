import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import themePlugin from "@/plugins/theme";
import "./assets/styles/main.scss";

loadFonts();

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(themePlugin)
  .mount("#app");
