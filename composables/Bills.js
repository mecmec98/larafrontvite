import { ref } from 'vue'

const getAllBills = (authtoken) => {
    const billslist = ref([])
    const sendoptions = {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const loadallbills = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/bills', sendoptions)
            if (!response.ok) {
                throw Error('Cant get list of bills')
            }
            const data = await response.json()
            billslist.value = data.data
        } catch (error) {
            console.error(error.message)
        }
    }
    return { loadallbills, billslist }
}


const getABill = (id, authtoken) => {
    const billdetails = ref([])
    const sendoptions = {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const loadabill = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/bills/' + id, sendoptions)
            if (!response.ok) {
                throw Error('Cant get bill details')
            }
            const data = await response.json()
            billdetails.value = data.data
        } catch (error) {
            console.error(error.message)
        }
    }
    return { billdetails, loadabill }
}


const getBillsbyAcc = (accid, authtoken) => {
    const billaccdetails = ref([])
    const sendoptions = {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const loadabillbyAcc = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/bills/accounts/' + accid, sendoptions)
            if (!response.ok) {
                throw Error('Cant get bill details')
            }
            const data = await response.json()
            billaccdetails.value = data.data
        } catch (error) {
            console.error(error.message)
        }
    }
    return { loadabillbyAcc, billaccdetails }

}



const postBill = (accid, currentreading, pastreading, authtoken) => {
    const sendoptions = {
        method: 'POST',
        body: JSON.stringify({

            accountid: accid,
            currentreading: currentreading,
            pastreading: pastreading
        }),
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",

        }
    }
    const registerBill = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/bills', sendoptions)
            if (!response.ok) {
                throw Error('Cant register bill')
            }
        } catch (error) {
            console.error(error.message)
        }
    }
    return (registerBill)
}


const putBill = (id, authtoken) => {
    const updateoptions = {
        method: 'PUT',
        body: JSON.stringify({
            accountid: accid,
            currentreading: currentreading,
            pastreading: pastreading
        }),
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const updateBill = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/bills/' + id, updateoptions)
            if (!response.ok) {
                throw Error('Unable to update bill')
            }
        } catch (error) {
            console.error(error.message)
        }
    }
    return (updateBill)
}


const deleteThisBill = (id, authtoken) => {
    const deleteoptions = {
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const deletebill = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/bills/' + id, deleteoptions)
            if (!response.ok) {
                throw Error('Unable to delete Bill')
            }
        } catch (error) {
            console.error(error.message)
        }
    }
    return (deletebill)
}


export { getAllBills, getABill, getBillsbyAcc, postBill, putBill, deleteThisBill }
