import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", component: () => import("./components/pages/AppIndexPage.vue") },
  { path: "/test", component: () => import("./components/pages/TestPage.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
