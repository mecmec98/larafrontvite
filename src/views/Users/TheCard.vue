1
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { getUserDetails, patchUserDetails, deletethisUser } from '/composables/Users'

//cookies
import { useCookies } from "vue3-cookies"
const { cookies } = useCookies()
const thetoken = cookies.get('access_token')

import TheNotes from '/src/components/TheNotes.vue'

const route = useRoute()
const router = useRouter()
const forlabels = 'block mb-2 text-sm font-medium text-blue-600'
const forinput = 'bg-gray-50 border-2 border-blue-500 text-gray-900 text-sm rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 block w-full p-2.5 shadom-sm'

const forrowtext = 'px-6 py-4 font-medium text-gray-700 whitespace-nowrap'
const forrow = 'bg-white border-b hover:bg-blue-100'


//usercardid
//console.log(route.params.id)

//for date
const today = new Date()
const date = today.getFullYear() + '/' + today.getMonth() + '/' + today.getDate()

const modalviewer = ref(false)
function modaltoggle() {
    modalviewer.value = !modalviewer.value
}


// load user data
//user varaibles
const username = ref('')
const email = ref('')
//user profile varaiables
const { userdetail, loaduserdetail } = getUserDetails(thetoken, route.params.id);
const firstname = ref('')
const lastname = ref('')
const middlename = ref('')
const position = ref('')
const address = ref('')
const birthday = ref('')
const gender = ref('')
const pay = ref('')
const phone = ref('')


async function loadUserDetailsAsync() {
    try {
        await loaduserdetail()


        //user data
        username.value = userdetail.value.data.username
        email.value = userdetail.value.data.email
        //profile data
        firstname.value = userdetail.value.data.profile.firstname
        lastname.value = userdetail.value.data.profile.lastname
        middlename.value = userdetail.value.data.profile.middlename
        position.value = userdetail.value.data.profile.position
        address.value = userdetail.value.data.profile.address
        birthday.value = userdetail.value.data.profile.birthday
        gender.value = userdetail.value.data.profile.gender
        pay.value = userdetail.value.data.profile.pay
        phone.value = userdetail.value.data.profile.phone

    } catch (error) {
        console.error('Error loading user details:', error)
    }
}

loadUserDetailsAsync()

//const { userfiles, loadfile } = getUserFiles(theuserid.value)
//loadfile()




//userdetail update
const msgUpdated = (() => {
    swal('User Updated', {
        icon: "success",

    })

})

const uprepassword = ref()

const updatedata = (() => {
    const updatethis = patchUserDetails
        (theuserid.value, userdetail.value.firstname, userdetail.value.lastname, userdetail.value.middlename, userdetail.value.birthday, userdetail.value.gender, userdetail.value.position, userdetail.value.pay, userdetail.value.phone, userdetail.value.address, userdetail.value.username, userdetail.value.password)
    console.log("Updating Data", userdetail.value.firstname)
    updatethis()
    msgUpdated()
})

//userdelete

const deleteuser = async (userId) => {
    try {
        await deletethisUser(userId)
        return true; // Indicate successful deletion
    } catch (error) {
        throw new Error("An error occurred while deleting the User")
    }
}

const confirmDelete = async (userId) => {
    if (!router) {
        console.error("Router is not available");
        return
    }

    const willDelete = await swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this User",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })

    if (willDelete) {
        try {
            await deleteuser(userId)
            await router.push('/UserList')

            swal("Poof! The User has been deleted!", {
                icon: "success",
            })
        } catch (error) {
            swal({
                title: "Error",
                text: error.message,
                icon: "error"
            })
        }
    } else {
        swal("Your User is safe!")
    }

}

// Declare reactive data
const selectedFileName = ref();

// Handle file selection
const handleFileChange = (e) => {
    const fileInput = e.target;
    if (fileInput.files.length > 0) {
        selectedFileName.value = fileInput.files[0].name;
    } else {
        selectedFileName.value = null;
    }
};

</script>

<template>
    <!-- <div v-if="userdetail.length">
<h1 class ="p-4 sm:ml-64 mt-14 text-lg text-gray-400">Loading ...</h1>
</div> -->


    <div> <!-- container for body -->
        <!-- blur effect when opening edit card -->
        <div :class="{ 'blur': modalviewer, '': modalviewer }">
            <!-- first row -->
            <div class="grid lg:grid-cols-2 mt-2 mb-5 gap-4">

                <!-- first column -->
                <div>


                    <!-- Container for user details -->
                    <div class="grid grid-cols-2 bg-white pt-3 ps-3 pe-8 pb-2 w-full rounded-md shadow-sm">
                        <!-- Image -->
                        <div>
                            <img class="w-20 h-20 rounded-full border-2 border-white bg-teal-500" src=""
                                alt="user photo" />
                        </div>

                        <div class="-ms-56 ps-3">
                            <p class="text-xs text-gray-400 pb-1">ID: {{ route.params.id }}</p>
                            <h2 class="md:text-xl text-lg pb-1">
                                {{ firstname }} {{ middlename }} {{ lastname }}
                            </h2>
                            <h2 class="text-sm text-blue-500">{{ position }}</h2>
                        </div>
                    </div>
                </div>
                <!-- second column -->
                <!-- sets of buttons -->
                <div class="grid grid-rows-2 justify-self-end pt-2">
                    <router-link to="/UserList"
                        class="pt-1 h-8 w-15 rounded-md bg-blue-500 text-white ps-6 pe-6 hover:bg-blue-600 shadow-md">Back</router-link>
                    <button
                        class="pt-1 pb-1 h-8 w-18 rounded-md bg-blue-500 text-white ps-6 pe-6 hover:bg-blue-600 mt-1 shadow-md"
                        @click="modaltoggle">Edit</button>
                </div>
            </div>


            <!-- second row -->
            <div class="grid grid-cols-2 gap-4">
                <!-- first column for user details -->
                <div class="rounded-md bg-white shadow-sm pt-1 pb-2 px-5">
                    <div class="grid gap-4 md:grid-cols-2 mt-2 place-items-start">
                        <div>
                            <h1 class="flex justify-start mt-3 text-xs text-gray-400" @click="testlog">Pay Rate</h1>
                            <h2 class="text-center  text-xl ">{{ pay }}/day</h2>
                        </div>

                        <div>
                            <h1 class="flex justify-start mt-3 text-xs text-gray-400">Phone Number</h1>
                            <h2 class="text-start  text-xl ">{{ phone }}</h2>
                        </div>

                        <div>
                            <h1 class="flex justify-start mt-3 text-xs text-gray-400">Gender</h1>
                            <h2 class="text-start  text-xl ">{{ gender }}</h2>
                        </div>

                        <div>
                            <h1 class="flex justify-start mt-3 text-xs text-gray-400">Birthday</h1>
                            <h2 class="text-start  text-xl ">{{ birthday }}</h2>
                        </div>

                    </div>

                    <h1 class="flex justify-start mt-6 text-xs text-gray-400">Address</h1>
                    <h2 class="text-start text-xl ">{{ address }}</h2>

                </div>
                <!-- second column -->
                <div>
                    <TheNotes :tonote="route.params.id" />
                </div>

            </div>


            <!-- row for table -->
            <div class="relative overflow-x-auto shadow-md rounded-md mt-5">
                <div
                    class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-3 bg-blue-500">
                    <div>
                        <div class="inline-flex relative">
                            <!-- Hidden file input -->
                            <input type="file" id="fileInput"
                                class="opacity-0 absolute inset-0 w-40 h-8 overflow-x-scroll cursor-pointer"
                                @change="handleFileChange" />

                            <!-- Custom button or label -->
                            <label for="fileInput"
                                class="ms-3 bg-white text-gray-600 px-3 py-1 w-52 h-8 overflow-x-scroll rounded-md cursor-pointer ">
                                {{ selectedFileName || 'Select a file' }}
                            </label>
                        </div>


                        <button id="uploadbutton"
                            class="inline-flex items-center text-gray-700 bg-white border border-gray-600 focus:outline-none hover:bg-blue-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-sm px-3 py-1.5 mt-3 ms-2"
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
        <div v-show="modalviewer" class="absolute top-20 inset-x-0 flex justify-center pb-10 ms-56">
            <div class="bg-white shadow-md p-5 rounded-md">
                <div class="flex justify-end">
                    <button
                        class="pt-1 pb-1 h-8 w-18 me-3 rounded-md bg-blue-500 text-white ps-6 pe-6 hover:bg-blue-600 mt-1 shadow-md"
                        @click="modaltoggle">Cancel</button>
                </div>


                <div class="ps-1 text-gray-500 ms-3">
                    ID: {{ userdetail.id }}
                </div>

                <form @submit.prevent="updatedata">
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
                        <input type="password" id="repassword" :class="forinput" placeholder="•••••••••"
                            v-model="uprepassword">
                    </div>

                    <div class="grid grid-cols-2 mb-3">
                        <div class="flex justify-start">
                            <text
                                class="cursor-pointer pt-1 pb-1 h-8 w-18 ms-3 mt-1 rounded-md bg-white text-red-500 ps-6 pe-6 hover:bg-red-500 hover:text-white hover:shadow-md"
                                @click="confirmDelete(theuserid)">Delete User!</text>
                        </div>
                        <div class="flex justify-end">
                            <button type="submit"
                                class="pt-1 pb-1 h-8 w-18 me-3 rounded-md bg-blue-500 text-white ps-6 pe-6 hover:bg-blue-600 mt-1 shadow-md"
                                @click="updatedata">Save</button>
                        </div>
                    </div>



                </form>
                <!-- edit card end -->
            </div>
        </div>

    </div>
</template>