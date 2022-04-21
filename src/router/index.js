import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RecordsView from "@/views/RecordsView";
import ProfileView from "@/views/ProfileView";
import LoginView from "@/views/LoginView";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: {
      roles: ["admin", "user"],
    },
    beforeEnter: authGuard,
  },
  {
    path: "/records",
    name: "Records",
    component: RecordsView,
    meta: {
      roles: ["admin", "user"],
    },
    beforeEnter: authGuard,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileView,
    meta: {
      roles: ["admin", "user"],
    },
    beforeEnter: authGuard,
  },
  {
    path: "/auth/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/:pathMatch(.*)",
    name: "404",
    component: () => import("@/views/PageNotFound"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
