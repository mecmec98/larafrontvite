import { ref } from 'vue'

const getAllMiscfees = (authtoken) => {
    const misclist = ref([])
    const sendoptions = {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const loadAllMiscFees = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/miscfees', sendoptions)
            if (!response.ok) {
                throw Error('Cant get Misc Fees')
            }

            const data = await response.json()
            misclist.value = data.data
        } catch (error) {
            console.error(error.message)
        }
    }
    return { loadAllMiscFees, misclist }
}


const getAMiscfees = (id, authtoken) => {
    const miscdetails = ref([])
    const sendoptions = {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const loadMiscFee = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/miscfees/' + id, sendoptions)
            if (!response.ok) {
                throw Error('Cant get Misc Fees Detail')
            }

            const data = await response.json()
            miscdetails.value = data.data
        } catch (error) {
            console.error(error.message)
        }
    }
    return { loadMiscFee, miscdetails }
}


const postMiscfee = (miscname, miscvalue, description, activate, authtoken) => {
    const sendoptions = {
        method: 'POST',
        body: JSON.stringify({

            miscname: miscname,
            miscvalue: miscvalue,
            description: description,
            activate: activate
        }),
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const registerMiscfee = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/miscfees', sendoptions)
            if (!response.ok) {
                throw Error('Cant Register Misc Fee')
            }
        } catch (error) {
            console.error(error.message)
        }
    }
    return (registerMiscfee)
}


const getAllActivatedMiscFees = (authtoken) => {
    const sendoptions = {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const loadActivatedMiscFees = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/miscfees/activate', sendoptions)
            if (!response.ok) {
                throw Error('Connection Error')
            }
        } catch (error) {
            console.error(error.message)
        }
    }
    return (loadActivatedMiscFees)
}

const putMiscFee = (id, miscname, miscvalue, description, authtoken) => {
    const sendoptions = {
        method: 'PUT',
        body: JSON.stringify({

            miscname: miscname,
            miscvalue: miscvalue,
            description: description,
        }),
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const updateMiscFees = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/miscfees/' + id, sendoptions)
            if (!response.ok) {
                throw Error('Connection Error')
            }
        } catch (error) {
            console.error(error.message)
        }
    }
    return (updateMiscFees)
}


const toggleMiscfee = (id, authtoken) => {
    const sendoptions = {
        method: 'PATCH',
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const toggleActivate = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/miscfees/' + id, sendoptions)
            if (!response.ok) {
                throw Error('Connection Error')
            }
        } catch (error) {
            console.error(error.message)
        }
    }
    return (toggleActivate)
}


const deleteMiscfee = (id, authtoken) => {
    const deleteoptions = {
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const deletethisMiscfee = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/miscfees/' + id, deleteoptions)
            if (!response.ok) {
                throw Error('Connection Error')
            }
        } catch (error) {
            console.error(error.message)
        }
    }
    return (deletethisMiscfee)
}

export { getAllMiscfees, getAMiscfees, postMiscfee, getAllActivatedMiscFees, putMiscFee, toggleMiscfee, deleteMiscfee }