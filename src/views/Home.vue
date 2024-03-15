<script setup>
import { corstest } from '/composables/Corstest'
import { ref } from 'vue'


const user = ref('')
const password = ref('')

const submitCorsRequest = async () => {
    try {
        const token = await corstest(user.value, password.value);
        if (token) {
            console.log('Token:', token);
            // Handle the token (e.g., store it in a state management system)
        } else {
            console.error('Error fetching token.');
        }
    } catch (error) {
        console.error('Error fetching token:', error);
    }
}

</script>

<template>

<div>

<div class="bg-gradient-to-b from-blue-500 to-cyan-500  p-5 shadow-md rounded-sm ">
    <div class="flex justify-center">
        <h1 class="text-4xl text-white font-bold"> Hello this are ANNOUNCEMENTS </h1>
    </div>
</div>

    <div class="grid md:grid-cols-4 gap-6 mt-7">

        <div class="col-span-3 p-3 bg-white w-full h-60 rounded-sm shadow-md">

            <div class="flex justify-center mt-10">

               User <input v-model="user" class="border" type="text">
               Password <input v-model="password" class="border" type="text">
           
               <button @click="submitCorsRequest"> send me</button>
         
            </div>

        </div>

    <div class="grid md:gird-rows-2 gap-6">
        <div class="p-3 bg-white w-full h-30 rounded-sm shadow-md">
            <div class="flex justify-center mt-10">
                Active Users
            </div>
        </div>
        <div class="p-3 bg-white w-full h-30 rounded-sm shadow-md">
            <div class="flex justify-center mt-10">
                Messages
            </div>
        </div>
    </div>

</div>

</div>
</template>