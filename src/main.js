import { createApp } from "vue";
import App from "./App.vue";
import TestUI from "test-ui";
import Aura from '@primevue/themes/aura';

createApp(App)
  .use(TestUI, {
    theme: {
        preset: Aura
    },
  })
  .mount("#app");
