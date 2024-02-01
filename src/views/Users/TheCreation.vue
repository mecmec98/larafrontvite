<script setup>
const forlabels ='block mb-2 text-sm font-medium text-blue-500'
const forinput = 'bg-blue-20 border border-blue-400 text-gray-900 text-sm rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 block w-full p-2.5 shadom-sm'

</script>
<template>
<div class = "p-4 sm:ml-64">
    <div class="p-4 border-1 border-blue-500 border-double rounded-md mt-14 bg-white shadow-lg">
  <form>
    <div class = "flex justify-center">
    <img class="w-20 h-20 mb-3 rounded-full border border-blue-500" src="./src/assets/fileupload.png" alt="Upload photo"/>
    </div>
    <div class ="grid gap-6 mb-6 md:grid-cols-3">
        <div>
            <label for="first_name" :class="forlabels">First name</label>
            <input type="text" id="first_name" :class="forinput" placeholder="Firstname" required>
        </div>
        <div>
            <label for="last_name" :class="forlabels">Last name</label>
            <input type="text" id="last_name" :class="forinput" placeholder="Lastname" required>
        </div>
        <div>
            <label for="middlename" :class="forlabels">Middle Name</label>
            <input type="text" id="middlename" :class="forinput" placeholder="Middlename" required>
        </div> 
    </div>
    
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="birthday" :class="forlabels">Birthday</label>
            <input type="text" id="birthday" :class="forinput" placeholder="Look for Datepicker" required>
        </div>
        <div>
            <label for="phonenumber" :class="forlabels">Phone Number</label>
            <input type="text" id="phonenumber" :class="forinput" placeholder="eg.+639123456789" required>
        </div>
        <div>
            <label for="position" :class="forlabels">Position</label>
            <input type="text" id="position" :class="forinput" placeholder="Position" required>
        </div>  
        <div>
            <label for="pay" :class="forlabels">Pay</label>
            <input type="text" id="pay" :class="forinput" placeholder="Pay" required>
        </div>
        
    </div>
    <div class="mb-6">
        <label for="address" :class="forlabels">Address</label>
        <input type="text" id="address" :class="forinput" placeholder="Address" required>
    </div> 

    <hr class="text-grey-600 mb-6 mt-8">


    <div class="mb-6">
        <label for="username" :class="forlabels">Username</label>
        <input type="text" id="username" :class="forinput" placeholder="eg.username" required>
    </div>

    <div class="mb-6">
        <label for="email" :class="forlabels">Email</label>
        <input type="email" id="email" :class="forinput" placeholder="example@example.com">
    </div>

    <div class="mb-6">
        <label for="password" :class="forlabels">Password</label>
        <input type="password" id="password" :class="forinput" placeholder="•••••••••" required>
    </div> 
    <div class="mb-6">
        <label for="confirm_password" :class="forlabels">Confirm password</label>
        <input type="password" id="confirm_password" :class="forinput" placeholder="•••••••••" required>
    </div> 
    <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 " required>
        </div>
        <label for="remember" class="ms-2 text-sm font-medium text-gray-700">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
</div>
</div>
</template>