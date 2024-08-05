<script setup>
import { ref } from 'vue'
//cokiies
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
const thetoken = cookies.get('access_token')
//discount api
import { getAllDiscounts, getADiscount, postDiscount, putDiscount, deleteDiscount } from '/composables/Discounts'

const forinput = "bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-500 block  ps-1 py-1 shadom-sm"
//view modes
const displaybol = ref(true)
const createbol = ref(false)
const updatebol = ref(false)

const displaymode = () => {
    displaybol.value = true
    createbol.value = false
    updatebol.value = false
}

const createmode = () => {
    displaybol.value = false
    createbol.value = true
    updatebol.value = false
}

const updatemode = () => {
    displaybol.value = false
    createbol.value = false
    updatebol.value = true
}

//discount variables
const discname = ref()
const discvalue = ref()
const discdesc = ref()

//load all discounts
const listofdiscounts = ref()
const { loaddiscounts, discountlist } = getAllDiscounts(thetoken)


</script>

<template>
    <!-- main container -->
    <div class="grid grid-cols-2 gap-5">
        <div>
            <div class="bg-white p-2 mb-2 rounded-sm grid grid-cols-2 shadow-sm">
                <h1 class="text-2xl text-blue-600 ms-2"> Discounts </h1>

                <!-- display menu -->
                <div class="flex items-center space-x-4 justify-self-end pe-5" v-if="displaybol">
                    <h1 class="cursor-pointer text-green-500" @click="createmode">New</h1>
                    <h1 class="text-gray-400">|</h1>
                    <h1 class="cursor-pointer text-blue-500" @click="updatemode">Edit</h1>
                    <h1 class="text-gray-400">|</h1>
                    <h1 class="cursor-pointer text-red-500">Delete</h1>
                </div>
                <!-- create menu -->
                <div class="flex items-center space-x-4 justify-self-end pe-5" v-if="createbol">
                    <h1 class="cursor-pointer text-green-500" @click="createmode">Save</h1>
                    <h1 class="text-gray-400">|</h1>
                    <h1 class="cursor-pointer text-red-500" @click="displaymode">Cancel</h1>
                </div>
                <!-- update menu -->
                <div class="flex items-center space-x-4 justify-self-end pe-5" v-if="updatebol">
                    <h1 class="cursor-pointer text-blue-500" @click="createmode">Update</h1>
                    <h1 class="text-gray-400">|</h1>
                    <h1 class="cursor-pointer text-red-500" @click="displaymode">Cancel</h1>
                </div>

            </div>

            <!-- discount display card -->
            <div class="bg-white p-4 w-full h-100 rounded-sm shadow-sm">
                <div class="ps-1" v-if="displaybol">
                    <h1 class="mb-1 text-blue-600"> Discount Name </h1>
                    <h1 class="mb-3 pt-1 text-gray-800"> Senior </h1>
                    <h1 class="mb-1 text-blue-600"> Discount Value </h1>
                    <h1 class="mb-3 pt-1 text-gray-800"> 15.0% </h1>
                    <h1 class="mb-1 text-blue-600"> Discount Description </h1>
                    <h1 class="mb-3 pt-1 text-gray-800"> Discount for seniors </h1>
                </div>
                <div class="pe-3 ps-1" v-if="createbol">
                    <h1 class="mb-1">Discount Name</h1>
                    <input type="text" :class="forinput" class="w-full mb-3" placeholder="">
                    <h1 class="mb-1">Discount Value</h1>
                    <input type="text" :class="forinput" class="w-full mb-3">
                    <h1 class="mb-1">Discount Description</h1>
                    <input type="field" :class="forinput" class="w-full mb-3">
                </div>


                <div class="overflow-x-auto mt-6 rounded-sm">
                    <table class="min-w-full bg-gray-50 rounded-sm">
                        <thead class="bg-blue-300 text-gray-600">
                            <tr>
                                <th class="py-2 px-4 w-2/8 text-sm text-start">Name</th>
                                <th class="py-2 px-4 w-6/8 text-sm text-start">Value</th>

                            </tr>
                        </thead>
                        <tbody class="text-gray-800">
                            <tr class="hover:bg-blue-100">
                                <td class="border-t px-3 py-2">Senior</td>
                                <td class="border-t px-3 py-2">15.0</td>

                            </tr>
                            <!-- More rows as needed -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="bg-white p-1 w-full">

        </div>
    </div>
</template>