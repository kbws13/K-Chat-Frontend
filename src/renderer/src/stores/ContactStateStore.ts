import { defineStore } from "pinia";

export const useContactStateStore = defineStore("contactStateInfo", {
  state: () => {
    return {
      contactReload: "",
      delContactId: null
    }
  },
  actions: {
    setContactReload(state: string) {
      this.contactReload = state;
    },
    delContactId(delContactId) {
      this.delContactId = delContactId;
    }
  }
})
