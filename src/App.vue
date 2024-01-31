<script setup>

import TheHeader from './components/TheHeader.vue'
import TheSidebar from './components/TheSidebar.vue'
// import TheUserCreation from './components/TheUserCreation.vue'
// import TheUserTable from './components/TheUserTable.vue'



</script>

<template>

  <TheHeader />
  <TheSidebar />
  <!-- <TheUserCreation />
  <TheUserTable />
  -->
  <router-view/>
  
</template>

