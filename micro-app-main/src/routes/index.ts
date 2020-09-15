import Home from "@/pages/home/index.vue";
import Login from "@/pages/login/index.vue";

const routes = [
  {
    /**
     * path: 路径为 / 时触发该路由规则
     * redirect: 重定向到 /home
     */
    path: "/",
    redirect: '/home',
  },
  {
    /**
     * path: 路径为 / 时触发该路由规则
     * name: 路由的 name 为 Home
     * component: 触发路由时加载 `Home` 组件
     */
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    /**
     * path: 路径为 /login 时触发该路由规则
     * name: 路由的 login 为 Login
     * component: 触发路由时加载 `Login` 组件
     */
    path: "/login",
    name: "Login",
    component: Login,
  }
];

export default routes;
