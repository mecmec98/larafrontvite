<script setup>
import { ref } from 'vue'


    const fornav = 'flex items-center p-2 text-white rounded-lg hover:bg-white hover:text-blue-600 group'
    const foricon = 'w-5 h-5 text-white group-hover:text-blue-600'
    
    const fordropmenu = 'flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-white hover:text-blue-600'
 
    const dropbol = ref(false)

    const emit = defineEmits(['sideclick'])
    function sideclicker(){
      emit('sideclick')
    }

    
   const props = defineProps({
      toside: Boolean
   })
    
    function drophider(){ 
        //console.log(dropbol)

        dropbol.value = !dropbol.value
        
    }

   


</script>

<template>

<aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-60 h-screen pt-20 bg-blue-600 border-r border-blue-400" :class="{'visible sm:visible':props.toside,'invisible sm:visible':!props.toside}">

     <div class="h-full px-3 pb-4 overflow-y-auto bg-gradient-to-b from-blue-600 to-cyan-500">
        <ul class="space-y-2 font-medium">
           <li>
              <router-link to="/Home" :class = "fornav" @click="sideclicker">
                 <svg :class="foricon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                 </svg>
                 <span class="ms-3">Dashboard</span>
               </router-link>
           </li>
        
           <!--

            Inbox Feature

            <li>
              <a href="#" :class="fornav">
                 <svg :class="foricon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
                 </svg>
                 <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                 <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-green-500 rounded-full">3</span>
              </a>
           </li> -->

    
         <li>
         <button type="button" class="flex items-center p-2 rounded-lg w-full" :class="{ 'rounded-lg bg-white text-blue-600 group': dropbol, 
                                        ' text-white rounded-lg hover:bg-white hover:text-blue-600 group': !dropbol }"  @click="drophider">
            
            <svg class="w-5 h-5" :class="{'group-text-blue-600': dropbol, 'text-white group-hover:text-blue-600': !dropbol}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">   
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Users</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg> 
            
            </button>
            <ul id="dropdown" class="py-2 space-y-2 px-1" v-show="dropbol">
                  <li>
                     <router-link to="/CreateUser" :class="fordropmenu" @click="sideclicker">Create</router-link>
                  </li>
                  <li>
                     <router-link to="/UserList" :class="fordropmenu" @click="sideclicker">List</router-link>
                  </li>
                  <li>
                     <router-link to="/Attendance" :class="fordropmenu">Attendance</router-link>
                  </li>
            </ul>
         </li>
         
         

        </ul>
     </div>
  
  </aside>

</template>