import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RecordsView from "@/views/RecordsView";
import ProfileView from "@/views/ProfileView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/records",
    name: "records",
    component: RecordsView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/:pathMatch(.*)",
    name: "404",
    component: import("@/views/PageNotFound"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
