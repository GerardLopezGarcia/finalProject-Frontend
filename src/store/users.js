import { defineStore } from "pinia";

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [],
    user: {}
  }),
  actions: {
    async fetchAll() {
        const response = await fetch("https://ih-countries-api.herokuapp.com/countries")
        const usersFetch = await response.json()
        this.users = usersFetch
    }
  }
})