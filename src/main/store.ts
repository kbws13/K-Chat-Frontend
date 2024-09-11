const Store = require("electron-store");
const store = new Store();

let userId = null;

// 初始化用户id
const initUserId = (_userId) => {
    userId = _userId
}

// 获取用户id
const getUserId = () => {
    return userId;
}

// 设置数据
const setData = (key: string, value: any) => {
    store.set(key, value);
}

// 获取数据
const getData = (key: string) => {
    return store.get(key)
}

// 设置用户数据
const setUserData = (key: string, value: any) => {
    setData(userId + key, value);
}

// 获取用户数据
const getUserData = (key: string) => {
    getData(userId + key);
}

// 删除用户数据
const deleteUserData = (key: string) => {
    store.delete(userId + key)
}

export default {
    setData,
    getData,
    initUserId,
    getUserId,
    setUserData,
    getUserData,
    deleteUserData
}