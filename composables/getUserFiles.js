import {ref} from 'vue'

const getUserFiles = (userid) => {
    const userfiles = ref([])
    const loadfile = async () => {
        try {
            let data = 
            await fetch('http://localhost:3000/files/' + userid)
            if(!data.ok){
                throw Error('No Data')
            }

            userfiles.value = await data.json()
           
        }
        catch(err){
            console.log(err.message)
        }
    }
        return{ userfiles, loadfile}
    
}

export default getUserFiles