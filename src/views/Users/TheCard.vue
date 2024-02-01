<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()
const forrowtext = 'px-6 py-4 font-medium text-gray-700 whitespace-nowrap'
const forrow = 'bg-white border-b hover:bg-blue-100'

function routecheck(){
    console.log(route.params.id)
}

const listoffiles = ref([
    {
        name:"File Name",
        id: "01",
        upldate:"mm/dd/yy",
        note:"For Certification"
    },
    {
        name:"File Name2",
        id: "02",
        upldate:"mm/dd/yy",
        note:"For Employment"
    },
    {
        name:"File Name3",
        id: "03",
        upldate:"mm/dd/yy",
        note:"For Certification"
    }
])


</script>

<template>
<div class = "p-4 sm:ml-64">
<div class="p-4 border-2 border-blue-500 border-double rounded-md mt-14 bg-blue-50">
    
    <div class="grid grid-row-2 place-items-center mb-3">
    <img class="w-20 h-20 mb-1 rounded-full border border-blue-500" src="" alt="user photo"/>
    <p class="text-xs text-gray-400">{{ route.params.id }}</p>
    <h2 class="text-2xl">Jon Doe</h2>
    <h2 class="text-sm text-blue-500">Position</h2>
    </div> 
    
    <hr class="text-grey-600">
    <div class ="grid gap-5 mb-6 md:grid-cols-2 mt-4 place-items-center">
        <div>
        <h1 class="flex justify-center mt-2 text-xs text-gray-400">Date of Birth</h1>
        <h2 class="flex justify-center text-xl ">mm/dd/yy</h2>
        </div>
        <div>
        <h1 class="flex justify-center mt-2 text-xs text-gray-400">Phone Number</h1>
        <h2 class="flex justify-center text-xl ">+639123456789</h2>
        </div>
        
    </div>
    <div class="">
        <h1 class="flex justify-center mt-4 text-xs text-gray-400">Address</h1>
        <h2 class="flex justify-center text-xl ">Something St., Something City, Something Region</h2>
    </div>

    <div class="flex justify-center h-15 ms-20 me-20 mt-6 border-2 border-blue-500 border-dashed rounded-md">
        <h1 class="text-2xl p-3 text-blue-500">300/day</h1>
    </div>
    


    <div class="relative overflow-x-auto shadow-sm rounded-md mt-10">
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
               
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Filename
                </th>
                <th scope="col" class="px-6 py-3">
                    Upload Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Note
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr :class="forrow" v-for="listoffile in listoffiles">
               
                <th scope="row" :class="forrowtext">
                    {{listoffile.id}}
                </th>
                <td class="px-6 py-4">
                    {{listoffile.name}}
                </td>
                <td class="px-6 py-4">
                    {{listoffile.upldate}}
                </td>
                <td class="px-6 py-4">
                    {{listoffile.note}}
                </td>
            
                <td class="px-6 py-4">
                    Edit
                </td>
            </tr>
            
            
        </tbody>
    </table>
    </div>

    <div class="flex justify-end mt-6">
        <router-link to="/UserList" class="border-2 border-blue-600 p-1 rounded-md text-blue-600 ps-5 pe-5 hover:bg-blue-600 hover:text-white hover:border-white">Back</router-link>
    </div>
</div>
</div>

</template>