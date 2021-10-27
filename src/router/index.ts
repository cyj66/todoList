import { IS_END_TYPES } from "@/config";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/mobile",
  },
  {
    path: "/mobile",
    name: "Mobile",
    component: () => import("../views/Mobile/index.vue"),
  },
  {
    path: "/desktop",
    name: "Desktop",
    component: () => import("../views/Desktop/index.vue"),
  },
  {
    //vue2用*,vue3需用这个
    path: "/:pathMatch(.*)",
    name: "Error",
    component: () => import("../views/Error/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (IS_END_TYPES.IS_DESKTOP && to.name === "Mobile") {
    next({ name: "Desktop" });
  } else if (IS_END_TYPES.IS_MOBILE && to.name === "Desktop") {
    next({ name: "Mobile" });
  } else {
    next();
  }
});

export default router;
