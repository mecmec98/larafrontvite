<script setup>
import { ref } from 'vue'
//cookies
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();


// const tokennow = ref('')
// const tokencheck = () => {
//     tokennow.value = cookies.get('access_token')
// }


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