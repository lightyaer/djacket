import { createRouter, createWebHashHistory } from "vue-router";
import Showcase from "../views/Showcase/Showcase";

const routes = [
  {
    path: "/",
    name: "Showcase",
    component: Showcase,
  },
  // {
  //   path: "/about",
  //   name: "About",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
