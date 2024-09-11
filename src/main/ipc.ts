import { ipcMain } from "electron";
import store from "./store";

const onLoginOrRegister = (callback) => {
  ipcMain.on("loginOrRegister", (e, isLogin) => {
    callback(isLogin);
  });
};

const onLoginSuccess = (callback) => {
  ipcMain.on("openChat", (e, config) => {
    store.initUserId(config.userId);
    store.setUserData("toekn", config.token)
    // TODO 增加用户配置
    callback(config)
    // TODO 初始化 WebSocket 连接
  })
}

export {
  onLoginOrRegister,
  onLoginSuccess
}
