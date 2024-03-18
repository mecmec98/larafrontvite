import { ref } from 'vue'

//add authtoken
const getUser = (authtoken) => {
    const listofusers = ref([])

    const headers = {
        "Authorization": `Bearer ${authtoken}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

    const loaduser = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/userprofile", {
                method: "GET",
                headers,
            });

            if (response.ok) {
                const data = await response.json();
                listofusers.value = data;
            } else {
                console.error("Error fetching user profile:", response.statusText);
            }
        } catch (error) {
            console.error("Unexpected error:", error);
        }
    };

    return { listofusers, loaduser };
}



const getUserDetails = (theid) => {
    const userdetail = ref([])
    const loaduser = async () => {
        try {
            let userdata =
                await fetch('http://localhost:3000/users/' + theid)
            if (!userdata.ok) {
                throw Error('No Data')
            }

            userdetail.value = await userdata.json()

        }
        catch (err) {
            console.log(err.message)
        }
    }
    return { userdetail, loaduser }

}


const getUserFiles = (userid) => {

    const userfiles = ref([])
    const loadfile = async () => {
        try {
            let filedata =
                await fetch('http://localhost:3000/files?user=' + userid)
            if (!filedata.ok) {
                throw Error('No Data')
            }

            userfiles.value = await filedata.json()

        }
        catch (err) {
            console.log(err.message)
        }
    }
    return { userfiles, loadfile }

}

const postUserDetails = (id, firstname, lastname, middlename, birthday, gender, position, pay, phone, address, username, password, datecreated) => {

    const sendoptions = {
        method: 'POST',
        body: JSON.stringify({

            id: id,
            firstname: firstname,
            lastname: lastname,
            middlename: middlename,
            birthday: birthday,
            gender: gender,
            position: position,
            pay: pay,
            phone: phone,
            address: address,
            username: username,
            password: password,
            datecreated: datecreated
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }
    const sendthis = async () => {
        fetch('http://localhost:3000/users/', sendoptions)
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
    return (sendthis)
}

const patchUserDetails = (id, firstname, lastname, middlename, birthday, gender, position, pay, phone, address, username, password) => {

    const updateoptions = {
        method: 'PATCH',
        body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            middlename: middlename,
            birthday: birthday,
            gender: gender,
            position: position,
            pay: pay,
            phone: phone,
            address: address,
            username: username,
            password: password

        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }
    const updatethis = async () => {
        fetch('http://localhost:3000/users/' + id, updateoptions)
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
    return (updatethis)
}

const deletethisUser = (userid) => {
    const deleteoptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const deleteuser = async () => {
        try {
            const response = await fetch('http://localhost:3000/users/' + userid, deleteoptions)
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

    return deleteuser()
}



export { getUser, getUserDetails, getUserFiles, patchUserDetails, postUserDetails, deletethisUser }