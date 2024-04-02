import { ref } from 'vue'

//add authtoken
const getUser = (authtoken) => {
    const listofusers = ref([])
    const sendoptions = {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const loaduser = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/userprofile", sendoptions)

            if (!response.ok) {
                throw new Error(`Network response was not OK: ${response.status}`)
            }
            const data = await response.json()
            listofusers.value = data
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }
    return { loaduser, listofusers }
}


const getUserDetails = (authtoken, theid) => {
    const userdetail = ref([])
    const sendoptions = {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const loaduserdetail = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/user/profile/' + theid, sendoptions)
            if (!response.ok) {
                throw Error('No Data')
            }

            userdetail.value = await response.json()

        }
        catch (err) {
            console.log(err.message)
        }
    }
    return { userdetail, loaduserdetail }

}



const postUserLogin = (username, email, password, vpassword, authtoken) => {

    const myuserid = ref()
    const sendoptions = {
        method: 'POST',
        body: JSON.stringify({

            username: username,
            email: email,
            password: password,
            v_password: vpassword
        }),
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",

        }
    }

    const registerLogin = async () => {
        try {
            const response = 
            await fetch('http://127.0.0.1:8000/api/user', sendoptions)
          
            if (!response.ok) {
                throw Error('Unable to Register User Login')
            }
            const data = await response.json()

            myuserid.value = data.data.user_id
            
            
        } catch (error) {
            console.error(error.message)
        }
    }
    return { registerLogin , myuserid }
}

const postUserDetails = (userid, firstname, lastname, middlename, birthday, gender, position, pay, phone, address, authtoken) => {

    const sendoptions = {
        method: 'POST',
        body: JSON.stringify({

            userid: userid,
            firstname: firstname,
            lastname: lastname,
            middlename: middlename,
            birthday: birthday,
            gender: gender,
            position: position,
            pay: pay,
            phone: phone,
            address: address,
            
        }),
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",

        }
    }
    const registerDetails = async () => {
        try {
            const response =
            await fetch('http://127.0.0.1:8000/api/userprofile', sendoptions)

            if (!response.ok) {
                throw Error('Unable to register User Detail')
            }
        } catch (error) {
            console.error(error.message)
        }


    }
    return (registerDetails)
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



export { getUser, getUserDetails, patchUserDetails, postUserDetails, postUserLogin, deletethisUser }