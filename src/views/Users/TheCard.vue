<script setup>
import { useRoute } from 'vue-router'
import { ref, onBeforeMount, onUnmounted, onMounted, onUpdated } from 'vue'
import getUserFiles from '/composables/Users/getUserFiles'
import getUserDetails from '/composables/Users/getUserDetails'
import postUserNotes from '/composables/Users/postUserNote'
import patchUserDetails from '/composables/Users/patchUserDetails'

import TheNotes from '/src/components/TheNotes.vue'

const route = useRoute()
const forlabels = 'block mb-2 text-sm font-medium text-blue-600'
const forinput = 'bg-gray-50 border-2 border-blue-500 text-gray-900 text-sm rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 block w-full p-2.5 shadom-sm'

const forrowtext = 'px-6 py-4 font-medium text-gray-700 whitespace-nowrap'
const forrow = 'bg-white border-b hover:bg-blue-100'

//usercardid
const theuserid = ref(route.params.id)

//for date
const today = new Date()
const date = today.getFullYear() + '/' + today.getMonth() + '/' + today.getDate()

const modalviewer = ref(false)
function modaltoggle() {
    modalviewer.value = !modalviewer.value
}


// load user data
const { userdetail, loaduser } = getUserDetails(theuserid.value)
const { userfiles, loadfile } = getUserFiles(theuserid.value)

loadfile()
loaduser()



onBeforeMount(() => {
});


onMounted(() => {

});


onUpdated(() => {
 
});

//userdetail update
const uprepassword = ref()

function updatedata() {
    const updatethis = patchUserDetails
        (theuserid.value, userdetail.value.firstname, userdetail.value.lastname, userdetail.value.middlename, userdetail.value.birthday, userdetail.value.gender, userdetail.value.position, userdetail.value.pay, userdetail.value.phone, userdetail.value.address, userdetail.value.username, userdetail.value.password)
    console.log("Updating Data", userdetail.value.firstname)
    updatethis()
}


</script>

<template>
    <!-- <div v-if="userdetail.length">
<h1 class ="p-4 sm:ml-64 mt-14 text-lg text-gray-400">Loading ...</h1>
</div> -->


    <div class="p-4 sm:ml-64 mt-14 relative"> <!-- container for body -->

        <div :class="{ 'blur': modalviewer, '': modalviewer }"> <!-- blur effect when opening edit card -->
            <!-- first row -->
            <div class="grid grid-cols-8 mt-1 mb-5">

                <div class="pt-2 ps-1">
                    <img class="w-24 h-24 mb-1 rounded-full border border-white bg-white shadow-md col-span-2 lg:col-span-1"
                        src="" alt="user photo" />
                </div>

                <div
                    class="justify-self-start col-span-4 bg-white pt-3 ps-3 pe-8 pb-2 rounded-md shadow-md col-start-3 lg:col-start-2">
                    <p class="text-xs text-gray-400">ID: {{ route.params.id }}</p>
                    <h2 class="md:text-xl text-lg">{{ userdetail.firstname }} {{ userdetail.middlename }} {{
                        userdetail.lastname }}</h2>
                    <h2 class="text-sm text-blue-500">{{ userdetail.position }}</h2>
                </div>

                <div class="grid grid-rows-2 justify-self-end col-end-9">
                    <router-link to="/UserList"
                        class="pt-1 h-8 w-15 rounded-md bg-blue-500 text-white ps-6 pe-6 hover:bg-blue-600 shadow-md">Back</router-link>
                    <button
                        class="pt-1 pb-1 h-8 w-18 rounded-md bg-blue-500 text-white ps-6 pe-6 hover:bg-blue-600 mt-1 shadow-md"
                        @click="modaltoggle">Edit</button>
                </div>
            </div>

            <!-- second row -->
            <div class="grid grid-cols-2 gap-4">
                <!-- first row for user details -->
                <div class="rounded-md bg-white shadow-md pt-1 pb-2 px-2">
                    <div class="grid gap-5 mb-4 md:grid-cols-2 mt-3 place-items-center">
                        <div>
                            <h1 class="flex justify-center mt-2 text-xs text-gray-400" @click="testlog">Pay Rate</h1>
                            <h2 class="text-center  text-xl ">{{ userdetail.pay }}/day</h2>
                        </div>

                        <div>
                            <h1 class="flex justify-center mt-2 text-xs text-gray-400">Phone Number</h1>
                            <h2 class="text-center  text-xl ">{{ userdetail.phone }}</h2>
                        </div>

                        <div>
                            <h1 class="flex justify-center mt-2 text-xs text-gray-400">Gender</h1>
                            <h2 class="text-center  text-xl ">{{ userdetail.gender }}</h2>
                        </div>

                        <div>
                            <h1 class="flex justify-center mt-2 text-xs text-gray-400">Birthday</h1>
                            <h2 class="text-center  text-xl ">{{ userdetail.birthday }}</h2>
                        </div>

                    </div>

                    <div class="mb-5">
                        <h1 class="flex justify-center mt-1 text-xs text-gray-400">Address</h1>
                        <h2 class="text-center text-xl mx-2 ">{{ userdetail.address }}</h2>
                    </div>

                </div>
                <!-- notes on user -->

                <div>
                    <TheNotes />
                </div>

            </div>


            <!-- row for table -->
            <div class="relative overflow-x-auto shadow-md rounded-md mt-5">
                <div
                    class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-3 bg-blue-500">
                    <div>
                        <button id="uploadbutton"
                            class="inline-flex items-center text-gray-700 bg-white border border-gray-600 focus:outline-none hover:bg-blue-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-sm px-3 py-1.5 mt-3 ms-3"
                            type="button">
                            Upload File
                        </button>
                    </div>


                    <div class="relative">
                        <div
                            class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-5 h-5 mt-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <input type="text" id="filesearch"
                            class="mt-4 me-3 block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Search for files">
                    </div>

                </div>
                <!-- table for files -->
                <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-blue-200 ">
                        <tr>

                            <th class="px-6 py-3">
                                ID
                            </th>
                            <th class="px-6 py-3">
                                Filename
                            </th>
                            <th class="px-6 py-3">
                                Upload Date
                            </th>
                            <th class="px-6 py-3">
                                Note
                            </th>
                            <th class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :class="forrow" v-for="userfile in userfiles">

                            <th scope="row" :class="forrowtext">
                                {{ userfile.id }}
                            </th>
                            <td class="px-6 py-4">
                                {{ userfile.filename }}
                            </td>
                            <td class="px-6 py-4">
                                {{ userfile.datecreated }}
                            </td>
                            <td class="px-6 py-4">
                                {{ userfile.note }}
                            </td>

                            <td class="px-6 py-4">
                                Edit
                            </td>
                        </tr>


                    </tbody>
                </table>

            </div>
            <!-- end of table -->
        </div>

        <!-- edit modal start -->
        <div v-show="modalviewer"
            class=" bg-white absolute top-8 h-auto w-5/6 lg:ml-16 ml-6 mb-3 rounded-md shadow-md p-5 ">
            <div class="flex justify-end">
                <button
                    class="pt-1 pb-1 h-8 w-18 me-3 rounded-md bg-blue-500 text-white ps-6 pe-6 hover:bg-blue-600 mt-1 shadow-md"
                    @click="modaltoggle">Cancel</button>
            </div>

            <div class="ps-1 text-gray-500" @click="updatedata">
                ID: {{ userdetail.id }}
            </div>

            <form>
                <div class="grid lg:grid-cols-3 mt-3 mb-5 gap-6 me-3 ms-3">
                    <div>
                        <label for="first_name" :class="forlabels">First name</label>
                        <input type="text" id="first_name" :class="forinput" v-model="userdetail.firstname">
                    </div>

                    <div>
                        <label for="last_name" :class="forlabels">Last name</label>
                        <input type="text" id="last_name" :class="forinput" v-model="userdetail.lastname">
                    </div>

                    <div>
                        <label for="middlename" :class="forlabels">Middle Name</label>
                        <input type="text" id="middlename" :class="forinput" v-model="userdetail.middlename">
                    </div>

                </div>

                <div class="grid lg:grid-cols-3 gap-6 pl-3 pe-3">
                    <div class="md:col-span-2">
                        <label for="birthday" :class="forlabels">Birthday</label>
                        <input type="text" id="birthday" :class="forinput" v-model="userdetail.birthday">
                    </div>

                    <div>
                        <label for="gender" :class="forlabels">Gender</label>
                        <select id="gender" :class="forinput" class="bg-gray-50 pe-1" v-model="userdetail.gender">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                        </select>
                    </div>
                </div>

                <div class="grid gap-6 mb-5 md:grid-cols-2 pl-3 pe-3 mt-5">
                    <div>
                        <label for="position" :class="forlabels">Position</label>
                        <input type="text" id="position" :class="forinput" v-model="userdetail.position">
                    </div>
                    <div>
                        <label for="pay" :class="forlabels">Pay</label>
                        <input type="text" id="pay" :class="forinput" v-model="userdetail.pay">
                    </div>
                </div>

                <div class="mb-6 pl-3 pe-3">
                    <label for="phonenumber" :class="forlabels">Phone Number</label>
                    <input type="text" id="phonenumber" :class="forinput" v-model="userdetail.phone">
                </div>

                <div class="mb-6 pl-3 pe-3">
                    <label for="address" :class="forlabels">Address</label>
                    <input type="text" id="address" :class="forinput" v-model="userdetail.address">
                </div>

                <hr class="text-grey-600 mb-6 mt-8">


                <div class="mb-6 pl-3 pe-3">
                    <label for="username" :class="forlabels">Username</label>
                    <input type="text" id="username" :class="forinput" v-model="userdetail.username">
                </div>

                <div class="mb-6 pl-3 pe-3">
                    <label for="password" :class="forlabels">New Password</label>
                    <input type="password" id="password" :class="forinput" placeholder="•••••••••"
                        v-model="userdetail.password">
                </div>

                <div class="mb-6 pl-3 pe-3">
                    <label for="repassword" :class="forlabels">Re-Enter New Password</label>
                <input type="password" id="repassword" :class="forinput" placeholder="•••••••••" v-model="uprepassword">
            </div>

            <div class="flex justify-end">
                <button type="submit"
                    class="pt-1 pb-1 h-8 w-18 me-3 rounded-md bg-blue-500 text-white ps-6 pe-6 hover:bg-blue-600 mt-1 shadow-md"
                    @click="updatedata">Save</button>
            </div>




        </form>

        <!-- edit card end -->
    </div>

</div>
</template>