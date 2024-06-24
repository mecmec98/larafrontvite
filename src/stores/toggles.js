import { defineStore } from 'pinia'

export const useToggleStore = defineStore('ToggleStore', {
    state: () => ({
        sidemenutoggle: true
    }),

    actions: {
        toggleHeader() {
            this.sidemenutoggle = !this.sidemenutoggle
        },

        toggletofalse() {
            this.sidemenutoggle = false
        },

        toggletotrue() {
            this.sidemenutoggle = true
        },
    }
})