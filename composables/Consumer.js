import { ref } from 'vue'

const getAllConsumers = (authtoken) => {
    const listofconsumers = ref([])
    const sendoptions = {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const loadconsumers = async () => {
        try{
            const response = await fetch("http://127.0.0.1:8000/api/consumers", sendoptions)

            if (!response.ok) {
                throw new Error(`Network response was not OK: ${response.status}`)
            }
            const data = await response.json()
            listofconsumers.value = data
        } catch (error) {
            console.error("An error occured:", error);
        }
    }
    return { loadconsumers, listofconsumers }
}

export { getAllConsumers }