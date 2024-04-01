
import { ref } from 'vue'

const postUserNotes = (user, title, badge, body, datecreated, authtoken) => {

    const sendoptions = {
        method: 'POST',
        body: JSON.stringify({
            userid: user,
            title: title,
            badge: badge,
            body: body,
            date: datecreated,

        }),
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const sendthisnote = async () => {
        fetch('http://127.0.0.1:8000/api/note/', sendoptions)
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

const getUserNotes = (userid,authtoken) => {

    const usernotes = ref([])
    const sendoptions = {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const loadnote = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/note/' + userid, sendoptions)

            if (!response.ok) {
                throw Error('No Data')
            }
            const data = await response.json()
            usernotes.value = data

        }
        catch (error) {
            console.error("API error",error)
        }
    }
    return { usernotes, loadnote }

}

const deleteUserNotes = (noteid, authtoken) => {
    const deleteoptions = {
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }

    const deletenote = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/note/' + noteid, deleteoptions)
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
