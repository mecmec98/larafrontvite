<script setup>
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheSidebar from './components/TheSidebar.vue'
// import TheUserCreation from './components/TheUserCreation.vue'
// import TheUserTable from './components/TheUserTable.vue'

const sidebol = ref(false)
function sidehider(){
  sidebol.value = !sidebol.value
  console.log(sidebol)
}


</script>

<template>

  <TheHeader @sideclick="sidehider" />
  <TheSidebar @sideclick="sidehider" :toside="sidebol"/>
  <div class="bg-gradient-to-b from-blue-100 to-cyan-100">  
  <router-view/>
</div>
</template>

