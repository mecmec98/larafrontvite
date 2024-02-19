<script setup>
import { ref, onUpdated, onMounted, reactive, computed } from 'vue'
import { getUser } from '../../../composables/Users'

 const forrow = 'bg-white border-b hover:bg-blue-100'
 const forrowalt = 'bg-gray-100 border-b hover:bg-blue-100'
 const forrowtext = 'px-5 py-4 font-medium text-gray-700 whitespace-nowrap'
 const forcheckbox ='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:border-blue-500 focus:border-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
 const userCounter = ref()

 //data
const {listofusers, loaduser} = getUser()
loaduser()

const forsearch = ref('')

const searchUsers = computed(() => {
  return listofusers.value.filter(item => {
    return item.firstname.toLowerCase().includes(forsearch.value.toLowerCase()) ||
            item.lastname.toLowerCase().includes(forsearch.value.toLowerCase())
  })
})
   
onMounted(() => {
})

//console.log(fordata)

 onUpdated(() => {
   userCounter.value = listofusers.value.length
})




</script>

<template>
<div class = "p-2 sm:ml-64 mt-10">

    <div class="flex justify-end mb-1 mt-2">
            <div class="grid grid-cols-3 bg-white rounded-lg m-2 mt-5 ps-3 pt-2 shadow-lg h-20  w-40">
                 <div class="text-xs mt-1 text-gray-700">Number of Users:</div>
                 <div class="col-span-2 text-4xl mt-3 justify-self-end me-4 text-blue-600">{{ userCounter }}</div>
            </div>
            <!-- <div class="bg-white  rounded-lg m-2 mt-5 p-3 shadow-lg h-20  border border-blue-500">

            </div> -->

        </div>

<div class="rounded-md bg-white shadow-lg m-2">
        
<div class="relative overflow-x-auto shadow-md rounded-lg">
    <div class="p-4 bg-blue-600">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative mt-1">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search" v-model="forsearch"
            class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:outline-none focus:border-blue-700 focus:border-3 focus:ring-3 focus:ring-blue-700"   placeholder="Search for Users">
        </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-blue-200 ">
            <tr>
               
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Position
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr :class="forrow" v-for="(listofuser) in searchUsers" :key="listofuser.id">
               
                <th scope="row" :class="forrowtext">
                    {{listofuser.firstname}} {{ listofuser.lastname }}
                </th>
                <td class="px-6 py-4">
                    {{listofuser.id}}
                </td>
                <td class="px-6 py-4">
                    {{listofuser.position}}
                </td>
                <td class="px-6 py-4">
                    <router-link :to="{ name: 'UserListCard', params:{ id: listofuser.id }}" class="text-blue-500 hover:underline">Edit </router-link>
                </td>
              
            </tr>
            
            
        </tbody>
    </table>
</div>
</div>
</div>

</template>