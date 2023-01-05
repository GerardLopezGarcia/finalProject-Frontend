import { defineStore } from "pinia";

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [],
    user: {}
  }),
  actions: {
    async fetchAllUsers() {
        const response = await fetch('http://localhost:8080/users')
        const usersFetch = await response.json()
        this.users = usersFetch
    }
  }
})