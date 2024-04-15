// src/store/auth.js

import { defineStore } from 'pinia'
import { getUserAndDetails } from '/composables/Users'

export const useUserdetailsStore = defineStore('UserdetailStore', {
  state: () => ({
    myuserdetail: []
  }),

  actions: {
    // get the current logged in user's detail 

      async piniaMyUserDetails (id, token) {
        try {
            const token = await getUserAndDetails(id, token)

            if (token !== null) {
                // Set the token and user ID in the store also authentication bol for routes
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


