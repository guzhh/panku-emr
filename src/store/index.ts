import type { App } from "vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { useThemeStore } from "@/store/modules/theme.ts";

export function setupStore(app: App) {
  const pinia = createPinia();
  pinia.use(piniaPluginPersistedstate);
  app.use(pinia);
  useThemeStore();
}
