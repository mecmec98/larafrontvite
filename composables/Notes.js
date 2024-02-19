
import { ref } from 'vue'

const postUserNotes = (id, user, title, badge, body, datecreated) => {

    const sendoptions = {
        method: 'POST',
        body: JSON.stringify({
            id: id,
            user: user,
            title: title,
            badge: badge,
            body: body,
            datecreated: datecreated

        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }
    const sendthisnote = async () => {
        fetch('http://localhost:3000/notes/', sendoptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                if (!response.ok) {
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error)
                }
            })
            .catch(error => {
                console.error('there was an error ', error)
            });


    }
    return (sendthisnote)
}

const getUserNotes = (userid) => {

    const usernotes = ref([])
    const loadnote = async () => {
        try {
            let notedata =
                await fetch('http://localhost:3000/notes?user=' + userid)
            if (!notedata.ok) {
                throw Error('No Data')
            }

            usernotes.value = await notedata.json()

        }
        catch (err) {
            console.log(err.message)
        }
    }
    return { usernotes, loadnote }

}

const deleteUserNotes = (noteid) => {
    const deleteoptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const deletenote = async () => {
        try {
            const response = await fetch('http://localhost:3000/notes/' + noteid, deleteoptions)
            const isJson = response.headers.get('content-type')?.includes('application/json')
            const data = isJson && await response.json()
            if (!response.ok) {
                const error = (data && data.message) || response.status;
                return Promise.reject(error)
            }
        } catch (error) {
            console.error('there was an error ', error)
            throw error
        }
    }

    return deletenote()
}




export { postUserNotes, getUserNotes, deleteUserNotes }
