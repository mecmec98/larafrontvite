import {ref} from 'vue'

const getUserFiles = () => {

    const userfiles = ref([])
    const loadfile = async () => {
        try {
            let filedata = 
            await fetch('http://localhost:3000/files/')
            if(!filedata.ok){
                throw Error('No Data')
            }

            userfiles.value = await filedata.json()
           
        }
        catch(err){
            console.log(err.message)
        }
    }
        return{ userfiles, loadfile}
    
}

export default getUserFiles