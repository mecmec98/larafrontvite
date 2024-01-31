<script setup>
 const forrow = 'bg-white border-b hover:bg-blue-100'
 const forrowalt = 'bg-gray-100 border-b hover:bg-blue-100'
 const forrowtext = 'px-6 py-4 font-medium text-gray-700 whitespace-nowrap'
 const forcheckbox ='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:border-blue-500 focus:border-3 focus:outline-none focus:ring-2 focus:ring-blue-500'

</script>

<template>
<div class = "p-4 sm:ml-64 mt-14 shadow-lg">



<div class="relative overflow-x-auto shadow-md sm:rounded-md">
    <div class="p-4 bg-blue-500">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative mt-1">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search" 
            class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:outline-none focus:border-blue-700 focus:border-3 focus:ring-3 focus:ring-blue-700"   placeholder="Search for Users">
        </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-blue-200 ">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" :class="forcheckbox">
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Position
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr :class="forrow">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" :class="forcheckbox">
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" :class="forrowtext">
                    Sample Sample
                </th>
                <td class="px-6 py-4">
                    2023-00-01
                </td>
                <td class="px-6 py-4">
                    Admin
                </td>
                <td class="px-6 py-4">
                    Active
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr :class="forrowalt">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" :class="forcheckbox">
                        <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" :class="forrowtext">
                    Sample2 Sample2
                </th>
                <td class="px-6 py-4">
                    2023-00-02
                </td>
                <td class="px-6 py-4">
                    HR
                </td>
                <td class="px-6 py-4">
                    Active
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr :class="forrow">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" :class="forcheckbox">
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" :class="forrowtext">
                    Sample3 Sample3
                </th>
                <td class="px-6 py-4">
                   2023-00-03
                </td>
                <td class="px-6 py-4">
                    Technician
                </td>
                <td class="px-6 py-4">
                    In-Active
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

</div>

</template>