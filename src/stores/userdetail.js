// src/store/auth.js

import { defineStore } from 'pinia'
import { getUserDetails } from '/composables/Users'

export const useUserdetailsStore = defineStore('UserdetailStore', {
  state: () => ({
    userdetail: []
  }),

  actions: {
    // get the user detail as authenticated

      async piniaUserDetails (id, token) {
        try {
            const token = await getUserDetails(id, token)

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
    piniaClear() {
  

    },
  },
})


