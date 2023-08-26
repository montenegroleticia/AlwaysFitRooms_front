import { createRouter, createWebHistory } from "vue-router";
import Register from "../views/Register.vue";

const routes = [
  {
    path: "/",
    name: "register",
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/reservations",
    name: "Reservations",
    component: () =>
      import(
        /* webpackChunkName: "reservations" */ "../views/Reservations.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
