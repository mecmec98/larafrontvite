import { ref } from 'vue'

const getAllAccounts = (authtoken) => {
    const listofaccounts = ref([])
    const sendoptions = {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const loadaccounts = async () => {
        try{
            const response = await fetch("http://127.0.0.1:8000/api/accounts", sendoptions)

            if (!response.ok) {
                throw new Error(`Network response was not OK: ${response.status}`)
            }
            const data = await response.json()
            listofaccounts.value = data
        } catch (error) {
            console.error("An error occured:", error);
        }
    }
    return { loadaccounts, listofaccounts }
}

export { getAllAccounts }