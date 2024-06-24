<script setup>
import { ref } from 'vue'
import { getAllAccounts } from '../../../composables/Accounts'

//cookies
import { useCookies } from "vue3-cookies"
const { cookies } = useCookies()
const thetoken = cookies.get('access_token')

const theconsumerid = ref()
const themeterid = ref()

const { loadaccounts, listofaccounts } = getAllAccounts(thetoken)

async function loadAccountsAsync() {
    await loadaccounts()
    console.log(listofaccounts)

}



</script>


<template>

<div>
    <h1 @click="loadAccountsAsync">test me</h1>
</div>

</template>
