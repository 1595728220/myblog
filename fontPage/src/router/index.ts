import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/home.vue")
      },
      {
        path: "/project",
        name: "project",
        component: () => import("@/views/project/project.vue")
      },
      {
        path: "/blog",
        name: "blog",
        component: () => import("@/views/blog/blog.vue")
      },
      {
        path: "/notice",
        name: "notice",
        component: () => import("@/views/notice/notice.vue")
      },
      {
        path: "/essay",
        name: "essay",
        component: () => import("@/views/essay/essay.vue")
      },
      {
        path: "/about",
        name: "about",
        component: () => import("@/views/about/about.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
