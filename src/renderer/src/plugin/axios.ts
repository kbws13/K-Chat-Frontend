import axios from "axios";
import { OpenAPI } from "@/backend";
import { ElLoading } from "element-plus";
import message from "@/plugin/message";

// 携带凭证
OpenAPI.WITH_CREDENTIALS = true;

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://chat.kbws.xyz"
    : "http://chat.kbws.xyz";

OpenAPI.BASE = baseUrl;
console.log("当前环境：", process.env.NODE_ENV, "请求地址：", baseUrl);
let loading = null
// 携带token方式登录
axios.interceptors.request.use(
  (config) => {
    // 假设token存在localStorage中
    const token = localStorage.getItem("token");
    console.log("token: ", token);
    
    if (token) {
      config.headers.token = token;
    }
    loading = ElLoading.service({
      lock: true,
      text: '加载中...',
      background: 'rgba(0, 0, 0, 0.7)'
    });
    return config;
  },
  (error) => {
    if (loading) {
      loading.close();
    }
    message.error("请求发送失败");
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function(response) {
    if (loading) {
      loading.close();
    }
    return response;
  },
  function(error) {
    if (loading) {
      loading.close();
    }
    return Promise.reject(error);
  }
);
