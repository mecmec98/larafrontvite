import { ref } from 'vue'

const getAllRates = (authtoken) => {
    const rateslist = ref([])
    const sendoptions = {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const loadallrates = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/rates', sendoptions)
            if (!response.ok) {
                throw Error('Cant get Rates list')
            }

            const data = await response.json()
            rateslist.value = data.data
        } catch (error) {
            console.error(error.message)
        }
    }
    return { loadallrates, rateslist }
}



const getARateDetails = (id, authtoken) => {
    const ratedetails = ref([])
    const sendoptions = {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const loadratedetails = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/rates/' + id, sendoptions)
            if (!response.ok) {
                throw Error('Cant get rate details')
            }

            const data = await response.json()
            ratedetails = data.data
        } catch (error) {
            console.error(error.message)
        }
    }
    return { loadratedetails, ratedetails }
}



const postRateDetails = (ratename, metersize, ratevalue, rateminimum, cca, ccb, ccc, ccd, authtoken) => {
    const sendoptions = {
        method: 'POST',
        body: JSON.stringify({

            ratename: ratename,
            metersize: metersize,
            ratevalue: ratevalue,
            rateminimum: rateminimum,
            cca: cca,
            ccb: ccb,
            ccc: ccc,
            ccd: ccd,
        }),
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",

        }
    }
    const registerRateDetails = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/rates', sendoptions)
            if (!response.ok) {
                throw Error('Cant register rate details')
            }
        } catch (error) {
            console.error(error.message)
        }
    }
    return (registerRateDetails)
}



const putRateDetails = (id, ratename, metersize, ratevalue, rateminimum, cca, ccb, ccc, ccd, authtoken) => {
    const updateoptions = {
        method: 'PUT',
        body: JSON.stringify({

            ratename: ratename,
            metersize: metersize,
            ratevalue: ratevalue,
            rateminimum: rateminimum,
            cca: cca,
            ccb: ccb,
            ccc: ccc,
            ccd: ccd,
        }),
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",

        }
    }
    const updateARateDetail = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/rates/' + id, updateoptions)
            if (!response.ok) {
                throw Error('Cant update rate details')
            }
        } catch (error) {
            console.error(error.message)
        }
    }
    return (updateARateDetail)
}



const deleteThisRate = (id, authtoken) => {
    const deleteoptions = {
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const deleterate = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/rates/' + id, deleteoptions)
            if (!response.ok) {
                throw Error('Unable to delete rate')
            }
            console.log('Rate Deleted')
        } catch (error) {
            console.error(error.message)
        }
    }
    return (deleterate)
}


export { getAllRates, getARateDetails, postRateDetails, putRateDetails, deleteThisRate }