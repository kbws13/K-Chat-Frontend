import {RouteRecordRaw} from "vue-router";

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
        component: import("@/views/UserLoginView.vue"),
      },
    ]
  },
  {
    path: "/main",
    name: "聊天主窗口",
    redirect: "/chat",
    component: () => import("@/views/MainView.vue"),
    children: [
      {
        path: "/chat",
        name: "聊天",
        component: () => import("@/views/chat/ChatView.vue")
      },
      {
        path: "/contact",
        name: "联系人",
        component: () => import("@/views/contact/ContactView.vue")
      },
      {
        path: "/setting",
        name: "设置",
        component: () => import("@/views/setting/SettingView.vue")
      },
    ]
  }
]
