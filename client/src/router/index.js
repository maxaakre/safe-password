import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/password/:id",
  //   name: "password",
  //   props: true,
  //   component: () => import("@/views/Password.vue"),
  // },
  {
    path: "/createdpasswords",
    name: "createdpasswords",
    props: true,
    component: () => import("@/views/CreatedPasswords.vue"),
  },
  {
    path: "/newpassword",
    name: "newpassword",
    props: true,
    component: () => import("@/views/NewPassword.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Signup.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
