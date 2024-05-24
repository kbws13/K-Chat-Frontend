import {RouteRecordRaw} from "vue-router";
import UserLoginView from "@/views/UserLoginView.vue";


export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/user/login"
  },
  {
    path: "/user",
    name: "用户",
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: UserLoginView,
      },
    ]
  },
]
