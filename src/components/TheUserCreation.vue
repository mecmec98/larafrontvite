<script setup>
const forlabels ='block mb-2 text-sm font-medium text-blue-500'
const forinput = 'bg-blue-20 border border-blue-400 text-gray-900 text-sm rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 block w-full p-2.5 shadom-sm'

</script>
<template>
<div class = "p-4 sm:ml-64">
    <div class="p-4 border-2 border-blue-500 border-double rounded-md mt-14">
  <form>
    
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="first_name" :class="forlabels">First name</label>
            <input type="text" id="first_name" :class="forinput" placeholder="Firstname" required>
        </div>
        <div>
            <label for="last_name" :class="forlabels">Last name</label>
            <input type="text" id="last_name" :class="forinput" placeholder="Lastname" required>
        </div>
        <div>
            <label for="company" :class="forlabels">Position</label>
            <input type="text" id="company" :class="forinput" placeholder="Position" required>
        </div>  
        <div>
            <label for="phone" :class="forlabels">Phone number</label>
            <input type="tel" id="phone" :class="forinput" placeholder="eg.+639123456789" required>
        </div>
        <div>
            <label for="website" :class="forlabels">Placeholder</label>
            <input type="url" id="website" :class="forinput" placeholder="Something" required>
        </div>
        <div>
            <label for="visitors" :class="forlabels">Placeholder</label>
            <input type="number" id="visitors" :class="forinput" placeholder="" required>
        </div>
    </div>
    <div class="mb-6">
        <label for="email" :class="forlabels">Email address</label>
        <input type="email" id="email" :class="forinput" placeholder="example@example.com" required>
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