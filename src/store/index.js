import { createStore } from "vuex";
import { authPlugin } from "@/store/plugins/auth.plugin";
import { auth } from "@/store/modules/auth.module";
import { loader } from "@/store/modules/loader.module";

export default createStore({
  modules: { auth, loader, theme },
  plugins: [authPlugin],
});
