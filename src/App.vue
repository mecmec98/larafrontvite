<script setup>
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheSidebar from './components/TheSidebar.vue'
import TheLogin from './components/TheLogin.vue'

const sidebol = ref(false)
function sidehider() {
  sidebol.value = !sidebol.value
  //console.log(sidebol)
}

const loginbol = ref(true)

function loginact() {
  loginbol.value = !loginbol.value
  //console.log(loginbol.value)
}

</script>

<template>

  <div v-if="loginbol" class="flex">
    <!-- Include the header component -->
    <TheHeader @sideclick="sidehider" @loginclick="loginact" />

    <!-- Include the sidebar component -->
    <TheSidebar @sideclick="sidehider" :toside="sidebol" />

    <!-- Main Content Area -->
    <main class="flex-1 overflow-y-auto p-4 sm:ml-60 mt-14">
      <!-- Your router view content -->
      <router-view  />
    </main>

  </div>
  <TheLogin v-else @loginclick="loginact"/>

</template>

<style>
.swal-button {
  padding: 7px 19px;
  border: none;
  background-color: #2563eb;
  font-size: 14px;
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.3);
}
</style>