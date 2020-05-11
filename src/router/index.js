import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/page1/",
    name: "Page1",
    component: () => import("@/views/Page1"),
    children: [{
        path: "pth",
        component: () => import("@/components/Page/Pth/"),
      },
      {
        path: "njh",
        component: () => import("@/components/Page/Njh/"),
      },
    ],
  },
  {
    path: "/page2/",
    name: "Page2",
    component: () => import("@/views/Page2"),
  },
  {
    path: "/page3/",
    name: "Page3",
    component: () => import("@/views/Page3"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;