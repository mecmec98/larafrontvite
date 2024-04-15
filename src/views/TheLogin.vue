<script setup>
import { ref } from 'vue'
import router from '../routes'
//import logo
import logopng from '/src/assets/logo.png'
//stores
import { useAuthStore } from '../stores/auth'
const authStore = useAuthStore()
//cookies
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

const user = ref('')
const password = ref('')

//login script
const thislogin = async () => {
    try {
        await authStore.pinialogin(user.value, password.value)

        //store token and id in cookies
        cookies.set('access_token', authStore.accessToken)
        cookies.set('user_log', authStore.userID)

        // redirect to dashboard after
        router.push('./Home')
    }catch{
        console.error('pinia error')
    }
}


</script>

<template>
    <div class="flex justify-center mt-20 sm:-ml-60">
        <div class="bg-gradient-to-b from-blue-600 to-cyan-500 p-7 w-96 h-96 rounded-md shadow-lg ">
            <div class="flex justify-center">
                <img class="w-20 h-20 mb-5 rounded-full border border-white bg-white shadow-md" :src="logopng"
                    alt="company logo" />
            </div>
            <h2 class="text-md text-white mb-2 mt-2">Username</h2>
            <input type="text" v-model="user"
                class="border shadow-sm border-blue-500 rounded-md w-full ps-1 focus:ring-1 focus:outline-none focus:ring-white">
            <h2 class="text-md text-white mb-2 mt-3">Password</h2>
            <input type="text" v-model="password"
                class="border shadow-sm border-blue-500 rounded-md w-full ps-1 focus:ring-1 focus:outline-none focus:ring-white">

            <div class="flex justify-end">
                <!-- <button @click="thislogin" 
                class="mt-5 w-20 ps-5 p-1 border border-white text-blue-500 bg-white rounded-md shadow-md hover:border-2 hover:border-blue-500 hover:bg-blue-500 hover:text-white focus:ring-1 focus:outline-none focus:ring-white">
                test button </button> -->
                <router-link to="/" @click="thislogin"
                    class="mt-5 w-20 ps-5 p-1 border border-white text-blue-500 bg-white rounded-md shadow-md hover:border-2 hover:border-blue-500 hover:bg-blue-500 hover:text-white focus:ring-1 focus:outline-none focus:ring-white">Login</router-link>
            </div>


        </div>
    </div>
</template>