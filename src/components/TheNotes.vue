<script setup>

import { postUserNotes, getUserNotes, deleteUserNotes } from '/composables/Notes'
import { ref, onBeforeMount, onUnmounted, onMounted, onUpdated } from 'vue'

//define userid

const props = defineProps({
    tonote: String
})

const useridnote = ref(props.tonote)
//date
const today = new Date()
const date = today.getFullYear() + '/' + today.getMonth() + '/' + today.getDate()
const datenote = date
//note UI triggers
const notecreate = ref(false)
const notecreatetoggle = (() => {
    notecreate.value = !notecreate.value
})
const notebadge = ref(false)
const notebadgetoggle = (() => {
    notebadge.value = !notebadge.value
})
const selectedBadge = ref('Badge')
const selectBadge = (event) => {
    if (event.target.tagName === 'SPAN') {
        selectedBadge.value = event.target.innerText
        notebadge.value = false;
    }
}
//load notes
const notecounter = ref()
const { usernotes, loadnote } = getUserNotes(useridnote.value)
loadnote()
onUpdated(() => {
    loadnote()
    notecounter.value = usernotes.value.length
});

//post note
const nid = ref()
const nuser = ref(useridnote.value)

const ntitle = ref()
const nbody = ref()

const submitnote = (() => {
    const sendthisnote = postUserNotes(nid.value, nuser.value, ntitle.value, selectedBadge.value, nbody.value, date)
    sendthisnote()
    notecreate.value = false
    loadnote()
    notecounter.value = usernotes.value.length
})

//delete note

const deletenote = async (noteId) => {
  try {
    await deleteUserNotes(noteId)
  
    return true; // Indicate successful deletion
  } catch (error) {
    throw new Error("An error occurred while deleting the note")
  }
}

const confirmDelete = async (noteId) => {
  const willDelete = await swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this Note",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })

  if (willDelete) {
    try {
      await deletenote(noteId)
     
     
      swal("Poof! Your Note has been deleted!", {
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
    swal("Your Note is safe!")
  }
}

</script>

<template>
    <!-- notes on user -->

    <div class="grid grid-cols-2 mb-3 p-1 rounded-md shadow-md bg-white">
        <div>
            <text class="ms-1 text-md">Notes </text>
            <text class="text-gray-500">( {{ notecounter }} )</text>
        </div>

        <div class="justify-self-end">
            <text class="me-2 text-lg text-gray-400 cursor-pointer p-1 rounded-full hover:text-green-500      "
                @click="notecreatetoggle"> + </text>
        </div>
    </div>

    <div class="rounded-md bg-white shadow-md pt-1 pb-2 px-3 overflow-y-scroll h-52 text-sm">

        <!-- for note create -->
        <div v-if="notecreate">
            <div class=" rounded-sm p-1">
                <div class="grid grid-cols-2 ">
                    <div class="mt-1">
                        <input type="text" v-model="ntitle"
                            class="p-1 text-lg focus:outline-none active:outline-none rounded-md border"
                            placeholder="Note Title">

                        <!-- note badge -->

                        <div class="relative inline-block text-left mt-1">
                            <text class="p-1 text-gray-700">{{ selectedBadge }}</text>
                            <button type="button" @click="notebadgetoggle"
                                class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-gray-600 focus:outline-none hover:text-blue-400">
                                <!-- Heroicon name: selector -->
                                <svg class="h-3 w-3 transform rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7">
                                    </path>
                                </svg>
                            </button>

                            <!-- Dropdown menu -->
                            <div>
                                <ul v-if="notebadge" @click="selectBadge"
                                    class="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                                    role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <!-- Dropdown items -->
                                    <li><span class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            role="menuitem">Required</span></li>
                                    <li><span class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            role="menuitem">Urgent</span></li>
                                    <li><span class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            role="menuitem">Misc</span></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div class="text-end mt-1">
                        <text @click="notecreatetoggle"
                            class="text-red-500 me-1 cursor-pointer p-1 rounded-md hover:bg-red-500 hover:text-white">Cancel</text>|
                        <text @click="submitnote"
                            class="text-green-500 me-1 cursor-pointer p-1 rounded-md hover:bg-green-500 hover:text-white">Save</text>
                    </div>
                </div>

                <hr class="text-gray-400 w-16 m-1">
                <text class="text-xs text-blue-400">{{ datenote }}</text>
                <br>
                <textarea v-model="nbody" maxlength="150" rows="3"
                    class="p-1 text-justify mt-2 w-full focus:outline-none resize-none overflow-hidden rounded-md border"
                    placeholder="Note Contents"></textarea>
                <hr class="text-gray-800 m-2 shadow-sm">
            </div>
        </div>


        <!-- noteblock -->
        <div v-for="usernote in usernotes" :key = "usernote.id">
            <div class="hover:bg-blue-50 rounded-sm p-1">
                <div class="grid grid-cols-2 ">
                    <div class="mt-1">
                        <text class="text-lg font-bold pe-2">{{ usernote.title }} </text>
                        <span v-if="usernote.badge === 'Required'"
                            class="p-1 bg-green-500 text-xs rounded-md text-white">Required</span>
                        <span v-if="usernote.badge === 'Urgent'"
                            class="p-1 bg-red-500 text-xs rounded-md text-white">Urgent</span>
                        <span v-if="usernote.badge === 'Misc'"
                            class="p-1 bg-purple-500 text-xs rounded-md text-white">Misc.</span>
                    </div>

                    <div class="text-end mt-1">
                        <text
                            @click = "confirmDelete(usernote.id)"
                            class="text-red-500 me-2 cursor-pointer p-1 rounded-md hover:bg-red-500 hover:text-white">Delete</text>
                    </div>
                </div>

                <hr class="text-gray-400 w-16 m-1">
                <text class="text-xs text-blue-400">{{ usernote.date }}</text>
                <p class="text-justify mt-2">{{ usernote.body }}</p>
                <hr class="text-gray-800 m-2 shadow-sm">

            </div>
        </div>
    </div>
</template>