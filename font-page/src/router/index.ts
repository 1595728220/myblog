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
        path: "/notice",
        name: "notice",
        component: () => import("@/views/notice/notice.vue")
      },
      {
        path: "/noticeDetail/:id",
        name: "noticeDetail",
        component: () => import("@/views/notice/noticeDetail.vue"),
        props: true
      },
      {
        path: "/practical",
        name: "practical",
        component: () => import("@/views/practical/practical.vue")
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
  mode: "history",
  routes
});

export default router;
