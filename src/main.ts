import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/style/normalize.css";
import { IS_END_TYPES } from "./config";
import { setRem } from "./libs/setRem";
import { mixin } from "./mixins/mixin";
import layout from "./layout";
import "./mock";

if (IS_END_TYPES.IS_MOBILE) {
  setRem(document, window);
}
createApp(App).use(store).use(router).use(layout).mixin(mixin).mount("#app");
