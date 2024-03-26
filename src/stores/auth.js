// src/store/auth.js

import { defineStore } from 'pinia'
import { login } from '/composables/Login'

export const useAuthStore = defineStore('AuthStore', {
  state: () => ({
    isAuthenticated: false, // Initial state: user is not authenticated
    accessToken: '', //Login Token for API access
    userID: '' //User ID for User Profile on Nav Bar
  }),

  actions: {
    // Set the user as authenticated

      async pinialogin(user, password) {
        try {
            const token = await login(user, password)

            if (token !== null) {
                // Set the token and user ID in the store also authentication bol for routes
                this.accessToken = token.token
                this.userId = token.userid
                this.isAuthenticated = true
            }
        } catch (error) {
            console.error('Error during login:', error)
            // Handle the error (e.g., show an error message)
        }

      
    },

    // Set the user as not authenticated
    pinialogout() {
      this.accessToken = ''
      this.userID = ''
      this.isAuthenticated = false

    },
  },
})


