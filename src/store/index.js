// src/stores/counterStore.js
import { defineStore } from "pinia";
import axios from "axios";

export const useMainStore = defineStore("main", {
  state: () => ({
    users: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchUsers(page) {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get(
          `https://reqres.in/api/users?page=${page}`
        );
        this.users = response.data.data; // Assuming the users are in response.data.data
      } catch (err) {
        this.error = err;
        console.error("Error fetching users:", err);
      } finally {
        this.loading = false;
      }
    },
  },

  getters: {
    getUsers: (state) => state.users,
    isLoading: (state) => state.loading,
    getError: (state) => state.error,
  },
});
