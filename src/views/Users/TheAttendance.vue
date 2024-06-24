<script setup>
const forrowtext = 'px-3 py-2 font-medium text-gray-700 whitespace-nowrap border'
</script>

<template>

<div>

    
    <div class="grid grid-cols-2 p-4 border border-black mt-5">
    <table class="shadow-lg w-full bg-white">
        <thead>
        <tr>
            <th :class="forrowtext">Name</th>
            <th :class="forrowtext">AM-IN</th>
            <th :class="forrowtext">AM-OUT</th>
            <th :class="forrowtext">PM-IN</th>
            <th :class="forrowtext">PM-OUT</th>
        </tr>
        </thead>
        <tbody>
        <tr class="border">
            <td :class="forrowtext">Name Sample</td>
            <td class = "text-center" :class="forrowtext">7:30</td>
            <td class = "text-center" :class="forrowtext">12:00</td>
            <td class = "text-center" :class="forrowtext">12:30</td>
            <td class = "text-center" :class="forrowtext">5:00</td>
        </tr>
        </tbody>
    </table>
    </div>
</div>

</template>