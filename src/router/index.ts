import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/article",
    name: "article",
    component: () => import("@/views/Article.vue"),
  },
  {
    path: "/create-article",
    name: "create-article",
    component: () => import("@/views/CreateArticle.vue"),
  },
  {
    path: "/edit-article",
    name: "edit-article",
    component: () => import("@/views/EditArticle.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/resigter",
    name: "register",
    component: () => import("@/views/Register.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/Profile.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Register.vue"),
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("@/views/Settings.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
