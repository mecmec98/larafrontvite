import { ref } from 'vue'

//add authtoken

const getAUserLogin = (id, authtoken) => {
    const userlogin = ref([])
    const sendoptions = {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const loadauserlogin = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/user/' + id, sendoptions)
            if (!response.ok) {
                throw Error('Cant get User Login')
            }
            
            const data = await response.json()
            userlogin.value = data.data
        } catch (error) {
            console.error(error.message)
        }
    }
    return { loadauserlogin, userlogin }
}

const getAUserDetail = (id, authtoken) => {
    const myuserdetail = ref([])
    const sendoptions = {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const loadauserdetails = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/userprofile/' + id, sendoptions)
            if (!response.ok) {
                throw Error('Cant get User Details')
            }

            const data = await response.json()
            myuserdetail.value = data.data
        } catch (error) {
            console.error(error.message)
        }
    }
    return { loadauserdetails, myuserdetail }
}

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


const getUserAndDetails = (authtoken, theid) => {
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
    return { registerLogin, myuserid }
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

const putUserLogin = (id, username, email) => {

    const updateoptions = {
        method: 'PUT',
        body: JSON.stringify({
            username: username,
            email: email
        }),
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const updatethislogin = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/user/' + id, updateoptions)
            if (!response.ok) {
                throw Error('Unable to update User Login')
            }
        } catch (error) {
            console.error(error.message)
        }
    }
    return (updatethislogin)
}


const putUserDetails = (id, firstname, lastname, middlename, birthday, gender, position, pay, phone, address, authtoken) => {

    const updateoptions = {
        method: 'PUT',
        body: JSON.stringify({
            firstname: firstname.value,
            lastname: lastname.value,
            middlename: middlename.value,
            position: position.value,
            address: address.value,
            birthday: birthday.value,
            gender: gender.value,
            pay: pay.value,
            phone: phone.value
        }),
        headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const updatethis = async () => {
        try {
            const response =
                await fetch('http://127.0.0.1:8000/api/userprofile/' + id, updateoptions)
            if (!response.ok) {
                throw Error('Unable to update User Details')
            }
            console.log('User Details Updated')
        } catch (error) {
            console.error(error.message)
        }
    }
    return (updatethis)
}


const deletethisUser = (userid) => {
    

    //return deleteuser()
}



export { getAUserDetail, getAUserLogin, getUser, getUserAndDetails, putUserDetails, putUserLogin, postUserDetails, postUserLogin }