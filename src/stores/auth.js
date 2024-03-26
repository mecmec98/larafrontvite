// src/store/auth.js

import { defineStore } from 'pinia'

export const useAuthStore = defineStore('AuthStore', {
  state: () => ({
    isAuthenticated: false, // Initial state: user is not authenticated
  }),

  actions: {
    // Set the user as authenticated
    login() {
      this.isAuthenticated = true
    },

    // Set the user as not authenticated
    logout() {
      this.isAuthenticated = false
    },
  },
})
