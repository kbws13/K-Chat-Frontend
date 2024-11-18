import { UserVO } from "@renderer/backend";
import { defineStore } from "pinia";

export const useUserInfoStore = defineStore("userInfo", {
  state: () => {
    return {
      userInfo: {} as UserVO
    }
  },
  actions: {
    setInfo(userInfo: UserVO) {
      this.userInfo = userInfo;
      localStorage.setItem("userInfo", JSON.stringify(userInfo))
    },
    getInfo() {
      return this.userInfo
    }
  }
})
