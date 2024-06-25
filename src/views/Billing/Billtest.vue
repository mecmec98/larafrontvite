<script setup>
import { ref } from 'vue'
import { getAllAccounts } from '../../../composables/Accounts'

//cookies
import { useCookies } from "vue3-cookies"
const { cookies } = useCookies()
const thetoken = cookies.get('access_token')

const theconsumerid = ref()
const themeterid = ref()

const { loadaccounts, listofaccounts } = getAllAccounts(thetoken)

async function loadAccountsAsync() {
    await loadaccounts()
    console.log(listofaccounts)

}



</script>


<template>
    <!-- div for body -->
    <div>

        <div class="min-h-screen bg-gray-100 p-4">
            <!-- top bar for details -->
            <div class="bg-white shadow p-4 mb-4 flex justify-between items-center rounded-sm">
                <h1 class = "text-gray-600">
                    ID number
                </h1>
                
            </div>
            <!-- Top bar for search-->  
            <div class="bg-white shadow p-4 mb-4 flex justify-between items-center rounded-sm">
                <div class="flex items-center space-x-4">
                    <!-- Search input -->
                    <input type="text" placeholder="Search..."
                        class="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <!-- Additional settings buttons -->
        
                    <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Search</button>
                </div>
            </div>

            <!-- Table with specified column ratios -->
            <div class="overflow-x-auto">
                <table class="min-w-full bg-white rounded-sm">
                    <thead class="bg-gray-200 text-gray-600">
                        <tr>
                            <th class="py-2 px-4 w-4/8">Column 1</th>
                            <th class="py-2 px-4 w-2/8">Column 2</th>
                            <th class="py-2 px-4 w-1/8">Column 3</th>
                            <th class="py-2 px-4 w-1/8">Column 4</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-700">
                        <tr>
                            <td class="border-t px-4 py-2">Data 1</td>
                            <td class="border-t px-4 py-2">Data 2</td>
                            <td class="border-t px-4 py-2">Data 3</td>
                            <td class="border-t px-4 py-2">Data 4</td>
                        </tr>
                        <!-- More rows as needed -->
                    </tbody>
                </table>
            </div>
        </div>


    </div>

</template>
