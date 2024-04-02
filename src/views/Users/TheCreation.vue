<script setup>
import { ref, computed } from 'vue'
import swal from 'sweetalert'
import { postUserDetails, postUserLogin } from '../../../composables/Users'
import datepicker from 'vue3-datepicker'

//cookies
import { useCookies } from "vue3-cookies"
const { cookies } = useCookies()
const thetoken = cookies.get('access_token')

//styles
const forlabels = 'block mb-2 text-sm font-medium text-blue-600'
const forinput = 'bg-gray-50 border-2 border-blue-500 text-gray-900 text-sm rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 block w-full p-2.5 shadom-sm'

//forpostdata
const id = ref()
const firstname = ref('')
const lastname = ref('')
const middlename = ref('')
const birthday = ref(null)
const gender = ref('')
const position = ref('')
const pay = ref('')
const phone = ref('')
const address = ref('')
const username = ref('')
const email = ref('')
const password = ref('')
const repassword = ref('')
const currentSlide = ref(1)

//for date
const today = new Date()
const date = today.getFullYear() + '/' + today.getMonth() + '/' + today.getDate()
const datecreated = date

//for slider
const titlebool = ref(true)
const titletoggle = () => {
    titlebool.value = !titlebool.value;
}

const nextSlide = () => {
    if (currentSlide.value < 2) {
        currentSlide.value++;
        titletoggle()
    }
}

const prevSlide = () => {
    if (currentSlide.value > 1) {
        currentSlide.value--;
        titletoggle()
    }
}


//datepicker
// Define the desired date format
const formattedDate = computed(() => {
    if (birthday.value) {
        // Parse the string date to a Date object
        const dateObj = new Date(birthday.value);

        // Check if the parsed date is valid
        if (!isNaN(dateObj.getTime())) {
            // Format the date using the desired format
            const year = dateObj.getFullYear();
            const month = String(dateObj.getMonth() + 1).padStart(2, '0');
            const day = String(dateObj.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        } else {
            // Handle invalid date format
            console.error('Invalid date format');
            return ''; // Return an empty string or handle the error accordingly
        }
    } else {
        return ''; // Return empty string if birthday.value is empty
    }
})


//success modal
const clickSuccess = (() => {
    swal('User Created', {
        icon: "success",

    })

})
//fail modal
const clickFail = (() => {
    swal('Important Field/s Empty', {
        icon: "error",

    })

})

//for user registration
const submitUser = async () => {
    if (
        !firstname.value ||
        !lastname.value ||
        !middlename.value ||
        !birthday.value ||
        !gender.value ||
        !position.value ||
        !pay.value ||
        !phone.value ||
        !address.value ||
        !username.value ||
        !email.value ||
        !password.value ||
        !repassword.value

    ) {


        clickFail()
        console.log('Important Fields Empty')

    } else {
        const registerme = async () => {
            //register user login creditials first and retrieve its id
            const { registerLogin, myuserid } = postUserLogin
                (username.value, email.value, password.value, repassword.value, thetoken)
            await registerLogin()

            //the register user details with user id from user id credentials

            const formattedValue = formattedDate.value
            id.value = myuserid.value

            const registerDetails = postUserDetails
                (id.value, firstname.value, lastname.value, middlename.value, formattedValue, gender.value, position.value, pay.value, phone.value, address.value, thetoken)
            await registerDetails()

            id.value = ''
            firstname.value = ''
            lastname.value = ''
            middlename.value = ''
            birthday.value = ''
            gender.value = ''
            position.value = ''
            pay.value = ''
            phone.value = ''
            address.value = ''
            username.value = ''
            email.value = ''
            password.value = ''
            repassword.value = ''
        }

       await registerme()

        clickSuccess()
    }



}

</script>
<template>
    <div class="grid grid-cols-5">
        <div class="-me-20 pe-24 bg-gradient-to-b from-blue-600 to-cyan-500 mt-1 p-5 rounded-md h-128">
            <div v-if="titlebool">
                <h2 class="text-white font-bold text-3xl">Employee</h2>
                <h2 class="mt-1 me-1 flex justify-center text-white font-bold text-2xl">Profile</h2>
            </div>
            <div v-else>
                <h2 class="text-white font-bold text-3xl">Employee</h2>
                <h2 class="mt-1 me-5 flex justify-center text-white font-bold text-2xl">Account</h2>
            </div>


        </div>
        <div class="-ms-20 mt-1 p-5 rounded-r-md bg-white shadow-sm h-128 col-span-4">

            <div :key="currentSlide" class="slides">
                <div v-if="currentSlide === 1" class="slide">
                    <!-- Slide 1 content -->
                    <div class="">
                        <div class="flex justify-center">
                            <img class="w-20 h-20 mb-2 rounded-full bg-white border border-blue-500" src=""
                                alt="Upload photo" />
                        </div>
                        <div class="grid mb-6 gap-6 md:grid-cols-3">
                            <div>
                                <label for="first_name" :class="forlabels">First name</label>
                                <input type="text" id="first_name" :class="forinput" placeholder="Firstname"
                                    v-model="firstname" required>
                            </div>
                            <div>
                                <label for="last_name" :class="forlabels">Last name</label>
                                <input type="text" id="last_name" :class="forinput" placeholder="Lastname"
                                    v-model="lastname" required>
                            </div>
                            <div>
                                <label for="middlename" :class="forlabels">Middle Name</label>
                                <input type="text" id="middlename" :class="forinput" placeholder="Middlename"
                                    v-model="middlename" required>
                            </div>


                        </div>
                        <div class="grid mb-6 md:grid-cols-3 gap-6">
                            <div>
                                <label for="birthday" :class="forlabels">Birthday</label>
                                <datepicker v-model="birthday" :typeable="false" :class="forinput" />

                            </div>
                            <div>
                                <label for="gender" :class="forlabels">Gender</label>
                                <select id="gender" :class="forinput" class="bg-gray-50 pe-1" v-model="gender">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div>
                                <label for="phonenumber" :class="forlabels">Phone Number</label>
                                <input type="text" id="phonenumber" :class="forinput" placeholder="eg.+639123456789"
                                    v-model="phone" required>
                            </div>
                        </div>

                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label for="position" :class="forlabels">Position</label>
                                <input type="text" id="position" :class="forinput" placeholder="Position"
                                    v-model="position" required>
                            </div>
                            <div>
                                <label for="pay" :class="forlabels">Pay</label>
                                <input type="text" id="pay" :class="forinput" placeholder="Pay" v-model="pay" required>
                            </div>

                        </div>


                        <div>
                            <label for="address" :class="forlabels">Address</label>
                            <input type="text" id="address" :class="forinput" placeholder="Address" v-model="address"
                                required>
                        </div>

                        <div class="flex justify-end mt-20">
                            <button @click="nextSlide"
                                class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto sm:w-24 px-3 py-2.5 text-center">
                                Next
                            </button>
                        </div>
                        <!-- Other input fields and form elements for slide 1 -->
                    </div>
                </div>
                <div v-if="currentSlide === 2" class="slide">
                    <!-- Slide 2 content -->
                    <div class="grid gap-6">
                        <div>
                            <label for="username" :class="forlabels">Username</label>
                            <input type="text" id="username" :class="forinput" placeholder="eg.username"
                                v-model="username" required>
                        </div>
                        <div>
                            <label for="email" :class="forlabels">Email</label>
                            <input type="email" id="email" :class="forinput" placeholder="example@example.com"
                                v-model="email">
                        </div>
                        <div>
                            <label for="password" :class="forlabels">Password</label>
                            <input type="password" id="password" :class="forinput" placeholder="•••••••••"
                                v-model="password" required>
                        </div>
                        <div>
                            <label for="confirm_password" :class="forlabels">Confirm password</label>
                            <input type="password" id="confirm_password" :class="forinput" placeholder="•••••••••"
                                v-model="repassword" required>
                        </div>


                        <div class="grid grid-cols-2 mt-36">
                            <button @click="prevSlide"
                                class="justify-self-start text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto sm:w-24 px-3 py-2.5 text-center">
                                Previous
                            </button>
                            <button @click="submitUser"
                                class="justify-self-end text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto sm:w-24 px-5 py-2.5 text-center">Submit</button>

                        </div>

                        <!-- Other input fields and form elements for slide 2 -->
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>



<style></style>