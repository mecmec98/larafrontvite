<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

function routecheck(){
    console.log(route.params.id)
}

</script>

<template>
<div class = "p-4 sm:ml-64">
<div class="p-4 border-2 border-blue-500 border-double rounded-md mt-14">
    
    <div class="grid grid-row-2 place-items-center mb-3">
    <img class="w-20 h-20 mb-1 rounded-full border border-blue-500" src="" alt="user photo"/>
    <p class="text-xs text-gray-400">{{ route.params.id }}</p>
    <h2 class="text-xl">Jon Doe</h2>
    <h2 class="text-sm text-gray-600">Position</h2>
    </div> 
    
    <hr class="text-grey-600">
    <div class="mt-3">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe incidunt facilis ducimus. Minima corporis quisquam dignissimos tempore natus officiis libero quis nostrum? Nam maxime, magni ducimus voluptates ex unde quaerat.</p>
    </div>
    <div class="flex justify-end">
        <router-link to="/UserList">Back</router-link>
    </div>
</div>
</div>

</template>