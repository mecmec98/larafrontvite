<script setup>
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheSidebar from './components/TheSidebar.vue'

const sidebol = ref(false)
function sidehider(){
  sidebol.value = !sidebol.value
  //console.log(sidebol)
}

const loginbol = ref(true)

function loginact(){
  loginbol.value = !loginbol.value
  //console.log(loginbol.value)
}

</script>

<template>



  
<div v-if="loginbol">
<TheHeader @sideclick="sidehider" @loginclick="loginact" />
<TheSidebar @sideclick="sidehider" :toside="sidebol"/>
</div>
  
<router-view @loginclick="loginact" />

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