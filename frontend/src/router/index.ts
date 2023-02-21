import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { AppRoutes } from "./app-routes";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../components/pages/AppIndexPage.vue"),
  },
  {
    path: "/app",
    redirect: "/app/home",
  },
  {
    path: "/app/*",
    children: AppRoutes("/app"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
