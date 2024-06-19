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
                await fetch('', sendoptions)
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
                await fetch('' + id, sendoptions)
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


export { getAllDiscounts, getADiscount }