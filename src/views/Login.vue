<script setup>

const emit = defineEmits(['loginclick'])
    function loginclick(){
      emit('loginclick')
    }

</script>

<template>
    <div class = "flex justify-center mt-40 ">
        <div class = "bg-gradient-to-b from-blue-600 to-cyan-500 p-7 w-96 h-96 rounded-md shadow-lg ">
            <div class="flex justify-center">
            <img class="w-20 h-20 mb-5 rounded-full border border-white bg-white shadow-md" src="" alt="company logo"/>
            </div>
            <h2 class ="text-md text-white mb-2 mt-2">Username</h2>
            <input type="text" class="border shadow-sm border-blue-500 rounded-sm w-full ps-1 focus:ring-1 focus:outline-none focus:ring-white">
            <h2 class ="text-md text-white mb-2 mt-3">Password</h2>
            <input type="text" class="border shadow-sm border-blue-500 rounded-sm w-full ps-1 focus:ring-1 focus:outline-none focus:ring-white">

            <div class="flex justify-end">
                <router-link to="/" @click="loginclick" class="mt-5 w-20 ps-5 p-1 border border-white text-blue-500 bg-white rounded-md shadow-md hover:border-2 hover:border-blue-500 hover:bg-blue-500 hover:text-white focus:ring-1 focus:outline-none focus:ring-white">Login</router-link>
            </div>


        </div>
    </div>
</template>