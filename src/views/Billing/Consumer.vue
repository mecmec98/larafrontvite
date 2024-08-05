<script setup>
import { ref, computed } from 'vue'
import swal from 'sweetalert'
//cookies
import { useCookies } from "vue3-cookies"
const { cookies } = useCookies()
const thetoken = cookies.get('access_token')
//consumer api
import { getAllConsumers, getConsumer, postConsumer, putConsumer, deleteConsumer } from '/composables/Consumer'
//barangay api
import { getAllAddresses } from '/composables/Barangay'

//success modal
const clickSuccess = (() => {
    swal('Consumer Created', {
        icon: "success",

    })
})
//fail modal
const emptyFail = (() => {
    swal('Important Field/s are Empty', {
        icon: "error",

    })
})

const nothingSelected = (() => {
    swal({
        title: "No User",
        text: "Please select a user to delete first!",
        icon: "error"
    })
})

//consumer detail varaibles
const theid = ref('')
const firstname = ref('--')
const middlename = ref('')
const lastname = ref('')
const gender = ref('--')

const building = ref('--')
const street = ref('--')
const barangay = ref('--')
const city = ref('--')
const region = ref('--')
const zipcode = ref('--')

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
            theid.value = consumerdetails.value.data.id
            firstname.value = consumerdetails.value.data.firstname
            middlename.value = consumerdetails.value.data.middlename
            lastname.value = consumerdetails.value.data.lastname
            gender.value = consumerdetails.value.data.gender

            building.value = consumerdetails.value.data.building
            street.value = consumerdetails.value.data.street
            barangay.value = consumerdetails.value.data.barangay
            city.value = consumerdetails.value.data.city
            region.value = consumerdetails.value.data.region
            zipcode.value = consumerdetails.value.data.zipcode

            phonenumber.value = consumerdetails.value.data.phonenumber
            birthday.value = consumerdetails.value.data.birthday
            createbol.value = false
            displaymode()

        }
    } catch (error) {
        console.error(error.message)
    }
}
//delete specific consumer
const deletetheConsumer = async () => {
    try {
        if (!theid.value) {
            nothingSelected()
        }
        const deleteme = deleteConsumer(theid.value, thetoken)
        await deleteme()
        await consumerasync()
    } catch (error) {
        console.error(error.message)
    }
}
//delete prompt
const confirmConsumerDelete = async () => {
    if (!theid.value) {
        nothingSelected()
    } else {
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Consumer",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })

        if (willDelete) {
            try {
                await deletetheConsumer()
                theid.value = ""
                firstname.value = "--"
                middlename.value = ""
                lastname.value = ""
                gender.value = ""
                address.value = "--"
                phonenumber.value = "--"
                swal("Consumer deleted successfuly", {
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
            swal("Deletion canceled!")
        }
    }
}


//creation script
//address list
const addlist = ref('')
const fromdapitan = ref(false)
const loadAddressesAsync = async () => {
    const { loadaddresses, listofaddresses } = getAllAddresses()
    await loadaddresses()
    addlist.value = listofaddresses.value.data
    fromdapitan.value = true
}
loadAddressesAsync()


//styles
const forinput = 'bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-500 block mt-1 ps-2 py-2 shadom-sm'

//consumer creation variables
const cfirstname = ref('')
const cmiddlename = ref('')
const clastname = ref('')
const cgender = ref('')
//for address
const cstreet = ref('')
const cbuilding = ref('')

const cbarangay = ref('')
const ccity = ref('')
const cregion = ref('')
const czipcode = ref('')

const addressfill = () => {
    if (fromdapitan) {
        ccity.value = "Dapitan"
        cregion.value = "Region IX"
    }
}

const cphonenumber = ref('')
//to be added
const cbirthday = ref('')
//creation action
const registerConsumer = async () => {

    const { registerMyConsumer } = postConsumer(cfirstname.value, cmiddlename.value, clastname.value, cgender.value, cbuilding.value, cstreet.value, cbarangay.value, ccity.value, cregion.value, czipcode.value, cphonenumber.value, thetoken)
    await registerMyConsumer()
    createmode()

}

//creation filter
const registerAsync = async () => {

    if (!cfirstname.value ||
        !cmiddlename.value ||
        !clastname.value ||
        !cgender.value ||
        !cstreet.value ||
        !cbarangay.value ||
        !ccity.value ||
        !cregion.value ||
        !czipcode.value ||
        !cphonenumber.value) {
        emptyFail()

    } else {
        registerConsumer()
        clickSuccess()
        consumerasync()
    }
}

//update script
const updateConsumer = async () => {
    //check update inputs

    if (!firstname.value ||
        !middlename.value ||
        !lastname.value ||
        !gender.value ||
        !street.value ||
        !barangay.value ||
        !city.value ||
        !region.value ||
        !zipcode.value ||
        !phonenumber.value) {
        emptyFail()
    } else {
        const updatethis = putConsumer()
        await updatethis()
    }

  
}



//creation/display/update toggle
//temp dont forget to check
const createbol = ref(false)
const updatebol = ref(false)
const displaybol = ref(true)

const clearcreate = () => {
    cfirstname.value = ''
    cmiddlename.value = ''
    clastname.value = ''
    cgender.value = ''
    cstreet.value = ''
    cbarangay.value = ''
    ccity.value = ''
    cregion.value = ''
    czipcode.value = ''
    cphonenumber.value = ''

}

const cleardisplay = () => {
    theid.value = ""
    firstname.value = "--"
    middlename.value = ""
    lastname.value = ""
    gender.value = "--"

    building.value = "--"
    street.value = "--"
    barangay.value = "--"
    city.value = "--"
    region.value = "--"
    zipcode.value = '--'
    phonenumber.value = '--'
}

const createmode = () => {
    displaybol.value = false
    createbol.value = true
    updatebol.value = false
    cleardisplay()

}
const displaymode = () => {
    displaybol.value = true
    createbol.value = false
    updatebol.value = false

}

const updatemode = () => {
    if (!theid.value) {
        swal({
            title: "No User",
            text: "Please select a user to edit first!",
            icon: "error"
        })
    } else {
        displaybol.value = false
        createbol.value = false
        updatebol.value = true

    }

}

</script>
<template>
    <div class="min-h-screen bg-gray-50 p-4 rounded-md">

        <!-- top menu -->
        <!-- display mode header -->
        <div class="bg-white shadow p-3 mb-4  rounded-sm ">
            <div class="grid grid-cols-2" v-if="displaybol">
                <h1 class="text-gray-600 mt-1 text-lg">
                    ID: {{ theid }}
                </h1>
                <div class="flex items-center space-x-4 justify-self-end pe-1">
                    <div>
                        <h1 class="cursor-pointer text-blue-500" @click="updatemode">Edit</h1>
                    </div>
                    <div>
                        <h1 class="cursor-default">|</h1>
                    </div>
                    <div>
                        <h1 class="cursor-pointer text-green-500" @click="createmode">Create New</h1>
                    </div>
                    <div>
                        <h1 class="cursor-default">|</h1>
                    </div>
                    <div>
                        <h1 class="cursor-pointer text-red-500" @click="confirmConsumerDelete">Delete</h1>
                    </div>


                </div>
            </div>
            <!-- creation mode header -->
            <div class="grid grid-cols-2" v-if="createbol">
                <h1 class="text-gray-600 mt-1 text-lg">
                    New Consumer
                </h1>
                <div class="flex items-center justify-self-end space-x-4 pe-2">
                    <div>
                        <h1 class="cursor-pointer text-green-500" @click="registerAsync">Save</h1>
                    </div>
                    <div>
                        <h1 class="cursor-default">|</h1>
                    </div>
                    <div>
                        <h1 class="cursor-pointer text-red-500" @click="displaymode">Cancel</h1>
                    </div>

                </div>
            </div>
            <!-- edit mode header -->
            <div class="grid grid-cols-2" v-if="updatebol">
                <div class="flex itmes-center space-x-2">
                    <h1 class="text-blue-500 mt-1 text-lg">
                        Edit Consumer
                    </h1>
                    <h1 class="text-gray-600 mt-1 text-lg">
                        ID no. {{ theid }}
                    </h1>
                </div>

                <div class="flex items-center space-x-4 justify-self-end pe-1">
                    <div>
                        <h1 class="cursor-pointer text-blue-500" @click="updatemode"> Save Edit</h1>
                    </div>
                    <div>
                        <h1 class="cursor-default">|</h1>
                    </div>

                    <div>
                        <h1 class="cursor-pointer text-red-500" @click="displaymode">Cancel</h1>
                    </div>


                </div>
            </div>

        </div>
        <!-- top bar for details -->
        <div class="bg-white shadow p-4 mb-4  rounded-sm h-72 ">
            <!-- v if for display -->
            <div v-if="displaybol">


                <!-- Consumer Profile Card -->
                <div class="grid grid-cols-4 mt-1 ms-2 mb-8">
                    <div class="col-span-2">
                        <h1 class="text-sm text-gray-500 mb-1">Name</h1>
                        <h1 class="ps-1 text-xl"> {{ firstname }} {{ middlename }} {{ lastname }}</h1>
                    </div>
                    <div>
                        <h1 class="text-sm text-gray-500 mb-1">Gender</h1>
                        <h1 class="ps-1 text-xl">{{ gender }}</h1>
                    </div>
                    <div>
                        <h1 class="text-sm text-gray-500 mb-1">Birthday</h1>
                        <h1 class="ps-1 text-xl">{{ birthday }}</h1>
                    </div>
                </div>
                <div class="grid grid-cols-2 mt-1 ms-2 mb-7">
                    <div>
                        <h1 class="text-sm text-gray-500 mb-1">Address</h1>
                        <div>
                            <h1 class="ps-1 text-xl mt-1">{{ building }} {{ street }}</h1>
                            <h1 class="ps-1 text-xl mt-1">{{ barangay }}, {{ city }}</h1>
                            <h1 class="ps-1 text-xl mt-1">{{ region }}, {{ zipcode }}</h1>
                        </div>
                    </div>
                    <div>
                        <h1 class="text-sm text-gray-500 mb-1">Phone Number</h1>
                        <h1 class="ps-1 text-xl">{{ phonenumber }}</h1>
                    </div>
                </div>
            </div>

            <!-- v if for creation -->
            <div v-if="createbol">
                <!-- for consumer creation -->
                <div class="grid grid-cols-4 mt-1 ms-2 mb-5">
                    <div class="col-span-2">
                        <h1 class="text-sm text-gray-500">Name</h1>
                        <div class="grid grid-cols-3 pe-6 gap-4">
                            <input type="text" id="first_name" :class="forinput" placeholder="Firstname"
                                v-model="cfirstname">
                            <input type="text" id="last_name" :class="forinput" placeholder="Lastname"
                                v-model="clastname">
                            <input type="text" id="middle_name" :class="forinput" placeholder="Middlename"
                                v-model="cmiddlename">
                        </div>
                    </div>
                    <div class="w-3/4">
                        <h1 class="text-sm text-gray-500">Gender</h1>
                        <select v-model="cgender"
                            class="border rounded px-4 py-2  mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-800 bg-gray-50 border-gray-400" required>
                            <option value="" disabled selected>Select Gender *</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <h1 class="text-sm text-gray-500">Birthday</h1>
                        <h1 class="ps-1 text-xl">{{ birthday }}</h1>

                    </div>
                </div>
                <div class="grid grid-cols-2 mt-3 ms-2">
                    <div class="pe-6">
                        <h1 class="text-sm text-gray-500">Address</h1>
                        <div class="flex items-center space-x-3 mb-1">
                            <input type="text" id="address"
                                class="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-500 block p-2 mt-1 shadom-sm w-full"
                                placeholder="Building, floor, unit.. " v-model="cbuilding">
                            <input type="text" id="address"
                                class="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-500 block p-2 mt-1 shadom-sm w-full"
                                placeholder="Street *" v-model="cstreet">
                        </div>
                        <div class="flex items-center space-x-3 mt-3">
                            <select class=" bg-gray-50 border border-gray-400
                                text-gray-900 text-sm rounded-md focus:outline-none focus:border-blue-400 focus:ring-1
                                focus:ring-blue-500 block p-2 mt-1 shadom-sm w-full" v-model="cbarangay" required>
                                <option value="" disabled selected hidden>Select Barangay *</option>
                                <option v-for="(addlist) in addlist" :key="addlist.id" @click="addressfill">{{
                addlist.Barangay }} </option>

                            </select>

                            <input type="text" id="address"
                                class="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-500 block p-2 mt-1 shadom-sm w-full"
                                placeholder="City *" v-model="ccity">
                        </div>
                        <div class="flex items-center space-x-3 mt-3">
                            <input type="text" id="address"
                                class="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-500 block p-2 mt-1 shadom-sm w-full"
                                placeholder="Region *" v-model="cregion">
                            <input type="text" id="address"
                                class="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-500 block p-2 mt-1 shadom-sm w-full"
                                placeholder="Zipcode *" v-model="czipcode">
                        </div>
                    </div>
                    <div class="pe-4">
                        <h1 class="text-sm text-gray-500">Phone Number</h1>
                        <input type="text" id="phonenumber"
                            class="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-500 block p-2 mt-1 shadom-sm w-full"
                            placeholder="Phonenumber" v-model="cphonenumber">

                    </div>
                </div>
            </div>

            <!-- v if for update -->
            <div v-if="updatebol">
                <div class="grid grid-cols-4 mt-1 ms-2 mb-5">
                    <div class="col-span-2">
                        <h1 class="text-sm text-gray-500">Name</h1>
                        <div class="grid grid-cols-3 pe-6 gap-4">
                            <input type="text" id="first_name" :class="forinput" placeholder="Firstname"
                                v-model="firstname">
                            <input type="text" id="last_name" :class="forinput" placeholder="Lastname"
                                v-model="lastname">
                            <input type="text" id="middle_name" :class="forinput" placeholder="Middlename"
                                v-model="middlename">
                        </div>
                    </div>
                    <div class="w-3/4">
                        <h1 class="text-sm text-gray-500">Gender</h1>
                        <select v-model="gender"
                            class="border rounded px-4 py-2  mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-800">
                            <option class="text-gray-300" value="">-- Select Gender --</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <h1 class="text-sm text-gray-500">Birthday</h1>
                        <h1 class="ps-1 text-xl">{{ birthday }}</h1>
                    </div>
                </div>
                <div class="grid grid-cols-2 mt-3 ms-2 mb-5">
                    <div class="pe-6">
                        <h1 class="text-sm text-gray-500">Address</h1>
                        <div class="flex items-center space-x-3">
                            <input type="text" id="address"
                                class="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-500 block p-2 mt-1 shadom-sm w-full"
                                placeholder="Building, floor, unit.. " v-model="building">
                            <input type="text" id="address"
                                class="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-500 block p-2 mt-1 shadom-sm w-full"
                                placeholder="Street" v-model="street">
                        </div>
                        <div class="flex items-center space-x-3 mt-2">
                            <input type="text" id="address"
                                class="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-500 block p-2 mt-1 shadom-sm w-full"
                                placeholder="Barangay" v-model="barangay">
                            <input type="text" id="address"
                                class="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-500 block p-2 mt-1 shadom-sm w-full"
                                placeholder="City" v-model="city">
                        </div>
                        <div class="flex items-center space-x-3 mt-2">
                            <input type="text" id="address"
                                class="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-500 block p-2 mt-1 shadom-sm w-full"
                                placeholder="Region" v-model="region">
                            <input type="text" id="address"
                                class="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-500 block p-2 mt-1 shadom-sm w-full"
                                placeholder="Zipcode" v-model="zipcode">
                        </div>

                    </div>
                    <div class="pe-6">
                        <h1 class="text-sm text-gray-500">Phone Number</h1>
                        <input type="text" id="address"
                            class="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-500 block p-2 mt-1 shadom-sm w-full"
                            placeholder="Phonenumber" v-model="phonenumber">
                    </div>

                </div>
            </div>
        </div>
        <!-- Top bar for search-->
        <div class="bg-white shadow p-4 mb-4 grid grid-cols-2 items-center rounded-sm">
            <div class="flex items-center space-x-4">
                <!-- Search input -->
                <input type="text" placeholder="Search..." v-model="forconsumersearch"
                    class="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/2">
                <!-- Additional settings buttons -->

            </div>
            <div class="flex justify-end space-x-3 pr-1">

                <h1 class="text-gray-500 pt-2"> Total Number of Consumers: </h1>
                <h1 class="text-gray-800 text-xlg pt-2"> {{ consumercounter }}</h1>
            </div>

        </div>

        <!-- Table with specified column ratios -->
        <div class="overflow-x-auto">
            <table class="min-w-full bg-white rounded-sm">
                <thead class="bg-blue-200 text-gray-600">
                    <tr class="">
                        <th class="ps-4 px-6 w-4/8 text-start">Name</th>
                        <th class="py-2 px-4 w-2/8 text-start">Barangay</th>

                    </tr>
                </thead>
                <tbody class="text-gray-700">
                    <tr v-for="(listofconsumers) in searchConsumer" :key="listofconsumers.id"
                        class="hover:bg-blue-400 cursor-pointer" @click="getconsumeronclick(listofconsumers.id)">
                        <td class="border-t px-4 py-2">{{ listofconsumers.firstname }} {{ listofconsumers.lastname }}
                        </td>
                        <td class="border-t px-4 py-2">{{ listofconsumers.barangay }}</td>
                    </tr>
                    <!-- More rows as needed -->
                </tbody>
            </table>
        </div>
    </div>

</template>

<style>
select:required:invalid {
  color: #9ca3af;
}
option[value=""][disabled] {
  display: none;
}
option {
  color: #000;
}
</style>