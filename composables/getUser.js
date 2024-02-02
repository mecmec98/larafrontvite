import {ref} from 'vue'

const getUser = () => {
    const listofusers = ref([])
    const counter = ref(null)
    const loaduser = async () => {
        try {
            let userdata = await fetch('http://localhost:3000/users')
            if(!userdata.ok){
                throw Error('No Data')
            }

            listofusers.value = await userdata.json()
            listofusers.length = counter.value
        }
        catch(err){
            console.log(err.message)
        }
    }
        return{ listofusers, loaduser, counter }
    
}

export default getUser