<script setup>
import { ref } from 'vue'
import router from '../routes'
//import logo
import logopng from '/src/assets/logo.png'
//stores
import { useAuthStore } from '../stores/auth'
const authStore = useAuthStore()
import { useToggleStore } from '../stores/toggles';
const toggleStore = useToggleStore()
//cookies
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
//for login
import { login } from '/composables/Login'


const user = ref('')
const password = ref('')
const isLoggingin = ref(false)
const iserror = ref(false)
const animationkey = ref(0)


//login script
const thislogin = async () => {
    try {
        const mylogin = await login(user.value, password.value)

        if (!mylogin) {
            //for animation
            animationkey.value++
            iserror.value = true

            throw Error('Cant Log in')
        } else {

            isLoggingin.value = true
            iserror.value = true
            
            //store token and id in cookies
            cookies.set('access_token', mylogin.token)
            cookies.set('user_log', mylogin.userid)
            toggleStore.toggletofalse()
            //store pinia isAuhenticated for routes
            authStore.pinialogin()
            // redirect to dashboard after
            router.push('./Home')
        }



    } catch (error) {
        console.error(error.message)
    }
}



</script>

<template>
    <div class="flex justify-center mt-20">
        <div class="bg-gradient-to-b from-blue-600 to-cyan-500 p-8 w-80 h-100 rounded-md shadow-lg ">
            <div class="flex justify-center">
                <img class="w-20 h-20 rounded-full border border-white bg-white shadow-md" :src="logopng"
                    alt="company logo" />
            </div>
            <div class="flex justify-center mt-4">
                <h1 class="text-xl text-white">LOGIN</h1>
            </div>
            <div class="relative mt-6">
                <input type="text" v-model="user"
                    class="border-white border-b w-full p-1 ps-6 text-white bg-transparent focus:outline-none placeholder-white"
                    placeholder="Username">
                <div class="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="white" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>

                </div>
            </div>
            <div class="relative mt-6">
                <input type="password" v-model="password"
                    class="border-white border-b w-full p-1 ps-6 text-white bg-transparent focus:outline-none placeholder-white"
                    placeholder="Password">
                <div class="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="white" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>

                </div>
            </div>
            <div class="relative flex justify-center mt-10">
                <router-link :key="animationkey" to="/" @click="thislogin"
                    class="w-20 ps-5 p-1 border-2  bg-transparent rounded-full shadow-sm hover:border-2  focus:ring-1 focus:outline-none "
                    :class="{
                    'border-red-400 text-red-400 hover:border-red-400 hover:bg-red-400 hover:text-white animate-shake ': iserror,
                    'boorder-white text-white hover:border-white hover:bg-white hover:text-blue-600': !iserror
                }">
                    <h1 v-if="!isLoggingin">Login</h1>
                    <h1 class="text-transparent" v-else>Loading</h1>
                </router-link>

                <div v-if="isLoggingin" class="absolute left-26 top-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"
                        style="shape-rendering: auto; display: block; background: transparent;" width="30" height="30"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g>
                            <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10" r="35"
                                stroke-dasharray="164.93361431346415 56.97787143782138">
                                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite"
                                    dur="1.282051282051282s" values="0 50 50;360 50 50" keyTimes="0;1">
                                </animateTransform>
                            </circle>
                            <g></g>
                        </g><!-- [ldio] generated by https://loading.io -->
                    </svg>

                </div>
            </div>


        </div>
    </div>
</template>