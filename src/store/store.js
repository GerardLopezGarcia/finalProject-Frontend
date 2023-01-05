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

      if(this.colorMode == "dark"){
        document.querySelector("html").style.background = "#1e1e38"
      }else{
        document.querySelector("html").style.background = "#fafafc"
      }
    }
  }
})