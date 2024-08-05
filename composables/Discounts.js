import { ref } from 'vue'

const getAllDiscounts = (authtoken) => {
    const discountlist = ref([])
    const sendoptions = {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const loaddiscounts = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/discounts', sendoptions)
            if (!response.ok) {
                throw Error('Cant get Discounts')
            }

            const data = await response.json()
            discountlist.value = data.data
        } catch (error) {
            console.error(error.message)
        }
    }
    return { loaddiscounts, discountlist }
}

const getADiscount = (id, authtoken) => {
    const discountdetail = ref([])
    const sendoptions = {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const loadAdiscount = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/discounts/' + id, sendoptions)
            if (!response.ok) {
                throw Error('Cant get a Discount')
            }

            const data = await response.json()
            discountdetail.value = data.data
        } catch (error) {
            console.error(error.message)
        }
    }
    return { loadAdiscount, discountdetail }
}


const postDiscount = (discname, discvalue, discdesc, authtoken) => {
    const sendoptions = {
        method: 'POST',
        body: JSON.stringify({

            disccountname: discname,
            discountvalue: discvalue,
            discountdesc: discdesc
        }),
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",

        }
    }

    const registerDiscount = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/discounts', sendoptions)
            if (!response.ok) {
                throw Error('Cant register Discount')
            }
        } catch (error) {
            console.error(error.message)
        }
    }
    return (registerDiscount)
}


const putDiscount = (id, discname, discvalue, discdesc, authtoken) => {
    const sendoptions = {
        method: 'PUT',
        body: JSON.stringify({

            disccountname: discname,
            discountvalue: discvalue,
            discountdesc: discdesc
        }),
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",

        }
    }

    const updateDiscount = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/discounts/' + id, sendoptions)
            if (!response.ok) {
                throw Error('Cant Update Discount')
            }
        } catch (error) {
            console.error(error.message)
        }
    }
    return (updateDiscount)
}


const deleteDiscount = (id,authtoken) => {
    const deleteoptions = {
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const deletethisDiscount = async () => {
        try{
            const response = 
                await fetch('http://127.0.0.1:8000/api/discounts/' +id, deleteoptions)
            if (!response.ok) {
                throw Error('Unable to delete Discount')
            }
            console.log('Discount Deleted')
        } catch (error) {
            console.error(error.message)
        }
    }
    return (deletethisDiscount)
}




export { getAllDiscounts, getADiscount, postDiscount, putDiscount, deleteDiscount }