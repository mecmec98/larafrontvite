import {ref} from 'vue'

const getUserNotes = (userid) => {

    const usernotes = ref([])
    const loadnote = async () => {
        try {
            let notedata = 
            await fetch('http://localhost:3000/notes?user=' + userid)
            if(!notedata.ok){
                throw Error('No Data')
            }

            usernotes.value = await notedata.json()
           
        }
        catch(err){
            console.log(err.message)
        }
    }
        return{ usernotes, loadnote}
    
}

export default getUserNotes