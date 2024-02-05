import {ref} from 'vue'

const getUser = () => {
    const listofusers = ref([])
  
    const loaduser = async () => {
        try {
            let userdata = await fetch('http://localhost:3000/users')
            if(!userdata.ok){
                throw Error('No Data')
            }

            listofusers.value = await userdata.json()
           
        }
        catch(err){
            console.log(err.message)
        }
    }
        return{ listofusers, loaduser}
    
}

export default getUser