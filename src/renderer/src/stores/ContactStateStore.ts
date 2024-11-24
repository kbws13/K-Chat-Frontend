import { defineStore } from "pinia";

export const useContactStateStore = defineStore("contactStateInfo", {
  state: () => {
    return {
      contactReload: "",
    }
  },
  actions: {
    setContactReload(state: string) {
      this.contactReload = state;
    },
  }
})
