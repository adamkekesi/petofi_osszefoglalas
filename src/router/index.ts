import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import "@/assets/style.css";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "",
    },
  },
  {
    path: "/biography",
    name: "Biography",
    component: () => import("../views/Biography"),
    meta: {
      title: "- Életrajz",
    },
  },
  {
    path: "/arspoetica",
    name: "ArsPoetica",
    component: () => import("../views/ArsPoetica.vue"),
    meta: {
      title: "- Ars Poetica",
    },
  },
  {
    path: "/landscape",
    name: "LandscapePoetry",
    component: () => import("../views/LandscapePoetry.vue"),
    meta: {
      title: "- Tájköltészet",
    },
  },
  {
    path: "/map",
    name: "Map",
    component: () => import("../views/Map.vue"),
    meta: {
      title: "- Térkép",
    },
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: () => import("../views/Timeline.vue"),
    meta: {
      title: "- Időszalag",
    },
  },
  {
    path: "/love-poetry",
    name: "LovePoetry",
    component: () => import("../views/LovePoetry.vue"),
    meta: {
      title: "- Szerelmi költészet",
    },
  },
  {
    path: "/revolutionary-poetry",
    name: "RevolutionaryPoetry",
    component: () => import("../views/RevolutionaryPoetry.vue"),
    meta: {
      title: "- Forradalmi költészet",
    },
  },
  {
    path: "/situational-poems",
    name: "SituationalPoems",
    component: () => import("../views/SituationalPoems.vue"),
    meta: {
      title: "- Helyzetdalok",
    },
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
    meta: {
      title: "- 404",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = "Petőfi Sándor " + to.meta.title;
  });
});

export default router;
