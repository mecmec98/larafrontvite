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
        try {
            const response = await fetch("http://127.0.0.1:8000/api/consumers", sendoptions)

            if (!response.ok) {
                throw new Error(`Network response was not OK: ${response.status}`)
            }
            const data = await response.json()
            listofconsumers.value = data
        } catch (error) {
            console.error("An error occured:", error)
        }
    }
    return { loadconsumers, listofconsumers }
}


const getConsumer = (consumerid, authtoken) => {
    const consumerdetails = ref([])
    const sendoptions = {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const loadconsumer = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/consumers/' + consumerid, sendoptions)

            if (!response.ok) {
                throw new Error(`Network response was not OK: ${response.status}`)
            }
            const data = await response.json()
            consumerdetails.value = data
        } catch (error) {
            console.error("An error occured:", error)
        }
    }
    return { loadconsumer, consumerdetails }

}


const postConsumer = (firstname, middlename, lastname, address, phonenumber, authtoken) => {
    const sendoptions = {
        method: 'POST',
        body: JSON.stringify({
            firstname: firstname,
            middlename: middlename,
            lastname: lastname,
            address: address,
            phonenumber: phonenumber,
        }),
        header: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const registerConsumer = async () => {
        try {
            const response =
                await fetch("http://127.0.0.1:8000/api/consumers", sendoptions)

            if (!response.ok) {
                throw new Error(`Network response was not Ok: ${response.status}`)
            }
        } catch (error) {
            console.error("An error occured:", error)
        }
    }
    return (registerConsumer)
}


const putConsumer = (id, firstname, middlename, lastname, address, phonenumber, authtoken) => {
    const sendoptions = {
        method: 'PUT',
        body: JSON.stringify({
            firstname: firstname,
            middlename: middlename,
            lastname: lastname,
            address: address,
            phonenumber: phonenumber,
        }),
        header: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const updatethis = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/consumers/' + id, sendoptions)
            if (!response.ok) {
                throw Error('Unable to update Consumer Details')
            }
            console.log('User Details Updated')
        } catch (error) {
            console.error(error.message)
        }
    }
    return (updatethis)
}


const deleteConsumer = (consumerid, authtoken) => {
    const deleteoptions = {
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const deleteme = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/consumers/' + consumerid, deleteoptions)
            if (!response.ok) {
                throw Error('Unable to delete Consumer')
            }
            console.log('Consumer Deleted')
        } catch (error) {
            console.error(error.message)
        }
    }
    return (deleteme)
}

export { getAllConsumers, getConsumer, postConsumer, putConsumer, deleteConsumer }