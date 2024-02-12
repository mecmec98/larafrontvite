<script setup>
import { useRoute } from 'vue-router'
import { ref, onBeforeMount } from 'vue'
import getUserFiles from '/composables/getUserFiles'
import getUserDetails from '/composables/getUserDetails'
const route = useRoute()
const forrowtext = 'px-6 py-4 font-medium text-gray-700 whitespace-nowrap'
const forrow = 'bg-white border-b hover:bg-blue-100'

// loaduser()
const {userdetail, loaduser} = getUserDetails(route.params.id)
const {userfiles, loadfile} = getUserFiles(route.params.id)

loaduser()
loadfile()


const checkthis = userdetail
console.log(checkthis)

</script>

<template>

<!-- <div v-if="userdetail.length">
<h1 class ="p-4 sm:ml-64 mt-14 text-lg text-gray-400">Loading ...</h1>
</div> -->

<div class = "p-4 sm:ml-64 mt-14">

    <div class="grid grid-cols-8 mt-1 mb-4">
        <div class="pt-2 ps-1">
        <img class="w-20 h-20 mb-1 rounded-full border border-white bg-white shadow-md col-span-2 lg:col-span-1" src="" alt="user photo"/>
        </div>
        <div class="justify-self-start col-span-4 bg-white pt-2 ps-3 pe-8 rounded-md shadow-md col-start-3 lg:col-start-2">
        <p class="text-xs text-gray-400">ID: {{ route.params.id }}</p>
        <h2 class="md:text-2xl text-lg">{{ userdetail.firstname }} {{ userdetail.lastname }}</h2>
        <h2 class="text-sm text-blue-500">{{ userdetail.position }}</h2>
        </div>
        
        <div class="grid grid-rows-2 justify-self-end col-end-9">
            <router-link to="/UserList" class="pt-1 h-8 w-15 rounded-md bg-blue-500 text-white ps-6 pe-6 hover:bg-blue-600 shadow-md">Back</router-link>
            <router-link to="/UserList" class="pt-1 h-8 w-18 rounded-md bg-blue-500 text-white ps-6 pe-6 hover:bg-blue-600 mt-1 shadow-md">Edit</router-link>
        </div>
    </div>
<div class="rounded-md  bg-white shadow-md pt-1 pb-2">
    
    
     
    
    <div class ="grid gap-5 mb-6 md:grid-cols-2 mt-3 place-items-center">
        <div>
        <h1 class="flex justify-center mt-2 text-xs text-gray-400">Pay Rate</h1>
        <h2 class="flex justify-center text-xl ">{{ userdetail.pay }}/day</h2>
        </div>
        <div>
        <h1 class="flex justify-center mt-2 text-xs text-gray-400">Phone Number</h1>
        <h2 class="flex justify-center text-xl ">{{ userdetail.phone }}</h2>
        </div>
        <div>
        <h1 class="flex justify-center mt-2 text-xs text-gray-400">Gender</h1>
        <h2 class="flex justify-center text-xl ">{{ userdetail.gender }}</h2>
        </div>
        <div>
        <h1 class="flex justify-center mt-2 text-xs text-gray-400">Birthday</h1>
        <h2 class="flex justify-center text-xl ">{{ userdetail.birthday }}</h2>
        </div>
        
        
        
    </div>
    <div class="mb-6">
        <h1 class="flex justify-center mt-4 text-xs text-gray-400">Address</h1>
        <h2 class="flex justify-center text-xl ">{{ userdetail.address }}</h2>
    </div>

 
    

</div>

<div class="relative overflow-x-auto shadow-md rounded-md mt-5">
        <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-3 bg-blue-500">
        <div>
            <button id="uploadbutton" class="inline-flex items-center text-gray-700 bg-white border border-gray-600 focus:outline-none hover:bg-blue-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-sm px-3 py-1.5 mt-3 ms-3" type="button">
            Upload File
            </button>
        </div>
   
   
        <div class="relative ">
            <div class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-5 h-5 mt-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="filesearch" class="mt-4 me-3 block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for files">
        </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-blue-200 ">
            <tr>
               
                <th class="px-6 py-3">
                    ID
                </th>
                <th class="px-6 py-3">
                    Filename
                </th>
                <th class="px-6 py-3">
                    Upload Date
                </th>
                <th  class="px-6 py-3">
                    Note
                </th>
                <th class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr :class="forrow" v-for="userfile in userfiles">
               
                <th scope="row" :class="forrowtext">
                    {{userfile.id}}
                </th>
                <td class="px-6 py-4">
                    {{userfile.filename}}
                </td>
                <td class="px-6 py-4">
                    {{userfile.datecreated}}
                </td>
                <td class="px-6 py-4">
                    {{userfile.note}}
                </td>
            
                <td class="px-6 py-4">
                    Edit
                </td>
            </tr>
            
            
        </tbody>
    </table>
    </div>
</div>

</template>