import {ref} from 'vue'

const getUserDetails = (theid) => {
    const userdetail = ref([])
    const loaduser = async () => {
        try {
            let userdata = 
            await fetch('http://localhost:3000/users/' + theid)
            if(!userdata.ok){
                throw Error('No Data')
            }

            userdetail.value = await userdata.json()
           
        }
        catch(err){
            console.log(err.message)
        }
    }
        return{ userdetail, loaduser}
    
}

export default getUserDetails