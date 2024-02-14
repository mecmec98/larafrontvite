<script setup>
import { ref, onBeforeMount, onMounted } from 'vue'

   
    const fordropdown = 'block px-4 py-2 text-sm text-blue-500 hover:bg-blue-600 hover:text-white'
    const formenuhider = 'z-50 absolute top-7 right-10 sm:right-5 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow'
    const menubol = ref(false)


    const emit = defineEmits(['loginclick'],['sideclick'])
    function sideclicker(){
      emit('sideclick')
    }

    function loginclick(){
      emit('loginclick')
    }
    function menuhider(){ 
        //console.log(menubol)
        menubol.value = !menubol.value
    
    }

</script>
<template>
<nav class="fixed top-0 z-50 w-full bg-blue-600 border-1 border-b border-blue-400">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start rtl:justify-end">

          <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" 
          class="inline-flex items-center p-2 text-sm 
          text-white rounded-lg sm:hidden hover:bg-white hover:text-blue-500 focus:outline-none " @click="sideclicker">

              <span class="sr-only">Open sidebar</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                 <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
           </button>

           
          <a href="" class="flex ms-2 md:me-24">
            <img src="" class="h-8 me-3" alt="Logo" />
            <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">Admin</span>
          </a>
        </div>
        <div class="flex items-center">
            <div class="flex items-center ms-3">
              <div>
                <button type="button" class="flex text-sm bg-white rounded-full focus:ring-4 focus:ring-blue-600" aria-expanded="false" @click="menuhider">
                  <span class="sr-only">Open user menu</span>
                  <img class="w-8 h-8 rounded-full" src="" alt="user photo">
                </button>
              </div>
              <div :class="formenuhider" v-show="menubol" id="dropdown-user" @mouseleave="menuhider">
                <div class="px-4 py-3" role="none">
                  <p class="text-sm text-blue-600 font-semibold" role="none">
                    Person Personlastname
                  </p>
                  <p class="text-sm font-medium text-blue-500" role="none">
                    sample@email.com
                  </p>
                </div>
                <ul class="py-1" role="none">
                  <li>
                    <a href="#" :class="fordropdown" role="menuitem">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" :class="fordropdown" role="menuitem">Settings</a>
                  </li>
                  <li>
                    <a href="#" :class="fordropdown" role="menuitem">Earnings</a>
                  </li>
                  <li>
                    <router-link to="/Login" @click="loginclick" :class="fordropdown" role="menuitem">Sign out</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
  </nav>
</template>