<script setup>
import { ref, computed } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheSidebar from './components/TheSidebar.vue'

//stores
import { useAuthStore } from './stores/auth'
const authStore = useAuthStore()
//cookies
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

// const sidebol = ref(false)
// function sidehider() {
//   sidebol.value = !sidebol.value
//   console.log(sidebol)
// }

const loginbol = computed(() => authStore.isAuthenticated)

</script>

<template>

  <div class="flex">
    <!-- Include the header component -->
    <TheHeader v-if="loginbol" />

    <!-- Include the sidebar component -->
    <TheSidebar v-if="loginbol" />

    <!-- Main Content Area -->
    <main class="flex-1 overflow-y-auto p-4 sm:ml-60 mt-14">
      <!-- Your router view content -->
      <router-view />

    </main>

  </div>



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