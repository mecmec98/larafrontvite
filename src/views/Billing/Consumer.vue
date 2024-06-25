<script setup>
import { ref, computed } from 'vue'

//cookies
import { useCookies } from "vue3-cookies"
const { cookies } = useCookies()
const thetoken = cookies.get('access_token')
//consumer api
import { getAllConsumers, getConsumer, postConsumer, putConsumer, deleteConsumer } from '/composables/Consumer'

//consumer detail varaibles
const firstname = ref('--')
const middlename = ref('')
const lastname = ref('')
const gender = ref('--')
const address = ref('--')
const phonenumber = ref('--')
//to be added
const birthday = ref('--')

//load all consumers
const consumerlist = ref()
const consumercounter = ref()
const { loadconsumers, listofconsumers } = getAllConsumers(thetoken)
const consumerasync = async () => {
    try {
        await loadconsumers()
        if (!loadconsumers) {
            throw Error('Cant load consumer list')
        } else {
            consumerlist.value = listofconsumers.value.data || []
            consumercounter.value = listofconsumers.value.data.length
        }

    } catch (error) {
        console.error(error.message)
    }
}
//intiate consumer list
consumerasync()

//search function
const forconsumersearch = ref('')

const searchConsumer = computed(() => {
    const consumers = consumerlist.value || []
    return consumers.filter(item => {
        return item.firstname.toLowerCase().includes(forconsumersearch.value.toLowerCase()) ||
            item.lastname.toLowerCase().includes(forconsumersearch.value.toLowerCase())
    })
})

//load specific consumers
const getconsumeronclick = async (id) => {
    try {
        const { loadconsumer, consumerdetails } = getConsumer(id, thetoken)
        await loadconsumer()
        if (!loadconsumer) {
            throw Error('Cant load consumer detail')
        } else {
            firstname.value = consumerdetails.value.data.firstname
            middlename.value = consumerdetails.value.data.middlename
            lastname.value = consumerdetails.value.data.lastname
            gender.value = consumerdetails.value.data.gender
            address.value = consumerdetails.value.data.address
            phonenumber.value = consumerdetails.value.data.phonenumber
            birthday.value = consumerdetails.value.data.birthday

        }
    } catch (error) {
        console.error(error.message)
    }
}



//console tester
const testme = (id) => {
    console.log("Hi I work" + id)
}

</script>
<template>
    <div class="min-h-screen bg-gray-50 p-4">
        <!-- top bar for details -->
        <div class="bg-white shadow p-4 mb-4  rounded-sm">
            <div class="grid grid-cols-2">
                <h1 class="text-gray-600">
                    ID number
                </h1>
                <button class = "text-white bg-red-400 hover:text-red-400 hover:bg-white border border-red-400 hover:border-red-400 px-4 py-1 rounded justify-self-end cursor-pointer"> Delete </button>
            </div>

            <!-- Consumer Profile Card -->
            <div class="grid grid-cols-4 mt-1 ms-2 mb-4">
                <div class="col-span-2">
                    <h1 class="text-sm text-gray-500">Name</h1>
                    <h1 class="ps-1 text-xl"> {{ firstname }} {{ middlename }} {{ lastname }}</h1>
                </div>
                <div>
                    <h1 class="text-sm text-gray-500">Gender</h1>
                    <h1 class="ps-1 text-xl">{{ gender }}</h1>
                </div>
                <div>
                    <h1 class="text-sm text-gray-500">Birthday</h1>
                    <h1 class="ps-1 text-xl">{{ birthday }}</h1>
                </div>
            </div>
            <div class="grid grid-cols-2 mt-1 ms-2 mb-4">
                <div>
                    <h1 class="text-sm text-gray-500">Address</h1>
                    <h1 class="ps-1 text-xl">{{ address }}</h1>
                </div>
                <div>
                    <h1 class="text-sm text-gray-500">Phone Number</h1>
                    <h1 class="ps-1 text-xl">{{ phonenumber }}</h1>
                </div>
            </div>

        </div>
        <!-- Top bar for search-->
        <div class="bg-white shadow p-4 mb-4 grid grid-cols-2 items-center rounded-sm">
            <div class="flex items-center space-x-4">
                <!-- Search input -->
                <input type="text" placeholder="Search..." v-model="forconsumersearch"
                    class="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <!-- Additional settings buttons -->

            </div>
            <div class="flex justify-end space-x-3 pr-1">
                <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Create New</button>
                <h1 class="text-gray-500 pt-2"> Total Number of Consumers: </h1>
                <h1 class="text-gray-800 text-xlg pt-2"> {{ consumercounter }}</h1>
            </div>

        </div>

        <!-- Table with specified column ratios -->
        <div class="overflow-x-auto">
            <table class="min-w-full bg-white rounded-sm">
                <thead class="bg-blue-200 text-gray-600">
                    <tr>
                        <th class="py-2 px-4 w-4/8">Name</th>
                        <th class="py-2 px-4 w-2/8">Column 2</th>
                        <th class="py-2 px-4 w-1/8">Column 3</th>
                        <th class="py-2 px-4 w-1/8">Column 4</th>
                    </tr>
                </thead>
                <tbody class="text-gray-700">
                    <tr v-for="(listofconsumers) in searchConsumer" :key="listofconsumers.id"
                        class="hover:bg-blue-400 cursor-pointer" @click="getconsumeronclick(listofconsumers.id)">
                        <td class="border-t px-4 py-2">{{ listofconsumers.firstname }} {{ listofconsumers.lastname }}
                        </td>
                        <td class="border-t px-4 py-2">Data 2</td>
                        <td class="border-t px-4 py-2">Data 3</td>
                        <td class="border-t px-4 py-2">Data 4</td>
                    </tr>
                    <!-- More rows as needed -->
                </tbody>
            </table>
        </div>
    </div>

</template>