import { createRouter, createWebHistory } from "vue-router";
import type { App } from "vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/home/index.vue")
    },
    {
      path: "/editor",
      name: "editor",
      component: () => import("@/views/editor/index.vue")
    }
  ],
  scrollBehavior: () => ({ left: 0, top: 0 })
});

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
