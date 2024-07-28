import { ref } from 'vue'

const getAllAddresses = () => {
    const listofaddresses = ref([])
    const sendoptions = {
        method: 'GET',
        headers: {
            "Authorization": "Bearer {YOUR_AUTH_KEY}",
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const loadaddresses = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/dapaddress", sendoptions)

            if (!response.ok) {
                throw Error('Network response not OK')
            }
            const data = await response.json()
            listofaddresses.value = data
        } catch (error) {
            console.error(error.message)
            return false
        }
    }
    return { loadaddresses, listofaddresses }
}

export { getAllAddresses }