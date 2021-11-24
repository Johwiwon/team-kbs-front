import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import about from "@/views/About.vue";
import showVideo from "@/views/showVideo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/example",
    name: "Example",
    component: () =>
      import(/* webpackChunkName: "exmaple" */ "../views/Example.vue"),
  },
  {
    path: "/ab",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: about,
  },
  {
    path: "/showVideo",
    name: "showVideo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: showVideo,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
