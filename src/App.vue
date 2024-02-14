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
  console.log(loginbol.value)
}

</script>

<template>



  
<div v-if="loginbol">
<TheHeader @sideclick="sidehider" @loginclick="loginact" />
<TheSidebar @sideclick="sidehider" :toside="sidebol"/>
</div>
  
<router-view @loginclick="loginact" />

</template>

