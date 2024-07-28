<script setup>
import { ref } from 'vue'
//cokiies
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
const thetoken = cookies.get('access_token')
//discount api
import { getAllDiscounts, getADiscount, postDiscount, putDiscount, deleteDiscount } from '/composables/Discounts'

</script>

<template>
    <!-- main container -->
    <div class = "grid grid-cols-2 gap-5">
        <div class="bg-white p-2 w-full rounded-sm ps-4">
            <h1 class=""> Discounts </h1>
        
            <h1> Discount Name </h1>
            <h1> Discount Value </h1>
        </div>


        <div class="bg-white p-1 w-full">

        </div>
    </div>
</template>