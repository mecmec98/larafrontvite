//import { ref } from 'vue'

const login = async (username, password) => {
    const sendoptions = {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        }
    };

    try {
        const response = await fetch('http://127.0.0.1:8000/api/auth/login/', sendoptions);
        const data = await response.json()

        if (!data.error && data.data.token) {
            // Access the token here
            const token = data.data.token
            const userid = data.data.userid
            console.log("Login Sucessful")
            return {token , userid}
        } else {
            console.error('Error fetching token:', data.error)
            return false
        }
    } catch (error) {
        console.error('Error fetching token:', error)
        return false
    }
};

export { login }
