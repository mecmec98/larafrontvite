<script setup>
import {ref} from 'vue'
import swal from 'sweetalert'
import { postUserDetails } from '../../../composables/Users'



const forlabels ='block mb-2 text-sm font-medium text-blue-600'
const forinput = 'bg-gray-50 border-2 border-blue-500 text-gray-900 text-sm rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 block w-full p-2.5 shadom-sm'

//forpostdata
const id = ref()
const firstname = ref()
const lastname = ref()
const middlename = ref()
const birthday = ref()
const gender = ref()
const position = ref()
const pay = ref()
const phone = ref()
const address = ref()
const username = ref()
const email = ref()
const password = ref()
const repassword = ref()

//for date
const today = new Date()
const date = today.getFullYear()+'/'+today.getMonth()+'/'+today.getDate()
const datecreated = date


function submitdata(){
   
    const sendthis = postUserDetails
    (id.value,firstname.value,lastname.value,middlename.value,birthday.value,gender.value,position.value,pay.value,phone.value,address.value,username.value,password.value,datecreated)
       
        if (!id.value,!username.value,!password.value){
            console.log('Important Fields Empty ')
        }else{
            console.log("Sending Data ")
        sendthis()
        }
}


function check(){
    console.log(firstname,lastname,middlename,birthday,gender,position,pay,phone,address,username,email,password,repassword)
   
}

const clickSuccess = (() => {
    swal('User Created',{
        icon: "success",
      
    })

})
const submitUser = (() => {
    const sendthis = postUserDetails
    (id.value,firstname.value,lastname.value,middlename.value,birthday.value,gender.value,position.value,pay.value,phone.value,address.value,username.value,password.value,datecreated)
       
        if (!id.value,!username.value,!password.value){
            
            console.log('Important Fields Empty ')
        }else{
           
        sendthis()

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

        clickSuccess()
        }
})
</script>
<template>
<div class = "p-4 sm:ml-64">
    <div class="p-4 border-1 border-blue-500 border-double rounded-md mt-14 bg-white shadow-lg" >
  <form @submit.prevent="submitUser">
    <!-- <input type ="text" id="id" class="" placeholder="idgenerate" v-model="id"> -->

    <div class = "flex justify-center">
    <img class="w-20 h-20 mb-3 rounded-full bg-white border border-blue-500" src="./src/assets/fileupload.png" alt="Upload photo" />
        </div>
    <div class ="grid gap-6 mb-6 md:grid-cols-3">
        <div>
            <label for="first_name" :class="forlabels">First name</label>
            <input type="text" id="first_name" :class="forinput" placeholder="Firstname" v-model="firstname" required>
        </div>
        <div>
            <label for="last_name" :class="forlabels">Last name</label>
            <input type="text" id="last_name" :class="forinput" placeholder="Lastname" v-model="lastname" required>
        </div>
        <div>
            <label for="middlename" :class="forlabels">Middle Name</label>
            <input type="text" id="middlename" :class="forinput" placeholder="Middlename" v-model="middlename" required>
        </div> 
    
    </div>
    <div class="grid mb-6 md:grid-cols-3 gap-6">
        <div class="md:col-span-2">
            <label for="birthday" :class="forlabels" >Birthday</label>
            <input type="text" id="birthday" :class="forinput" placeholder="Look for Datepicker" v-model="birthday" required>
        </div>
        <div>
            <label for="gender" :class="forlabels">Gender</label>
            <select id="gender" :class="forinput" class="bg-gray-50 pe-1" v-model="gender">
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
            </select>
        </div>
        
    </div>
    
    

    <div class="grid gap-6 mb-6 md:grid-cols-2">    
        <div>
            <label for="position" :class="forlabels">Position</label>
            <input type="text" id="position" :class="forinput" placeholder="Position" v-model="position" required>
        </div>  
        <div>
            <label for="pay" :class="forlabels">Pay</label>
            <input type="text" id="pay" :class="forinput" placeholder="Pay" v-model="pay" required>
        </div>
        
    </div>
    <div class="mb-6">
            <label for="phonenumber" :class="forlabels">Phone Number</label>
            <input type="text" id="phonenumber" :class="forinput" placeholder="eg.+639123456789" v-model="phone" required>
    </div>

    <div class="mb-6">
        <label for="address" :class="forlabels">Address</label>
        <input type="text" id="address" :class="forinput" placeholder="Address" v-model="address" required>
    </div> 

    <hr class="text-grey-600 mb-6 mt-8">


    <div class="mb-6">
        <label for="username" :class="forlabels">Username</label>
        <input type="text" id="username" :class="forinput" placeholder="eg.username" v-model="username" required>
    </div>

    <div class="mb-6">
        <label for="email" :class="forlabels">Email</label>
        <input type="email" id="email" :class="forinput" placeholder="example@example.com" v-model="email">
    </div>

    <div class="mb-6">
        <label for="password" :class="forlabels">Password</label>
        <input type="password" id="password" :class="forinput" placeholder="•••••••••" v-model="password" required>
    </div> 
    <div class="mb-6">
        <label for="confirm_password" :class="forlabels">Confirm password</label>
        <input type="password" id="confirm_password" :class="forinput" placeholder="•••••••••" v-model="repassword" required>
    </div> 
    <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 " required>
        </div>
        <label for="remember" class="ms-2 text-sm font-medium text-gray-700">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>
    <button type="submit" class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
  </form>
</div>
</div>
</template>

<style>

</style>