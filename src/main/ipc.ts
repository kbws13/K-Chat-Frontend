import { ipcMain } from "electron";

const onLoginOrRegister = (callback) => {
  ipcMain.on("loginOrRegister", (e, isLogin) => {
    callback(isLogin);
  });
};

const onLoginSuccess = (callback) => {
  ipcMain.on("openChat", (e, config) => {
    callback(config)
  })
}

export {
  onLoginOrRegister,
  onLoginSuccess
}
