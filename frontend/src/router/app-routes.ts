export function AppRoutes(basePath: string) {
  return [
    {
      path: basePath + "/home",
      component: () => import("../components/pages/AppIndexPage.vue"),
    },
    {
      path: basePath + "/about",
      component: () => import("../components/pages/TestPage.vue"),
    },
  ];
}
