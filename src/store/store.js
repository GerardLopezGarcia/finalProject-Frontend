import { defineStore } from "pinia";

export const useStoreStore = defineStore('store', {
  state: () => ({
    colorMode: "dark",
    colorModeIcon: "🌚"
  }),
  actions: {
    changeColorMode() {
      this.colorMode = (this.colorMode == "dark")? "light" : "dark"
      this.colorModeIcon = (this.colorModeIcon == "🌚")? "🌝" : "🌚"
    }
  }
})