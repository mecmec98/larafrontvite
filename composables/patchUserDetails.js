
const patchUserDetails = (id,firstname,lastname,middlename,birthday,gender,position,pay,phone,address,username,password) => {      
    
    const updateoptions = {
        method: 'PATCH',
        body: JSON.stringify({
            firstname:firstname,
            lastname:lastname,
            middlename:middlename,
            birthday:birthday,
            gender:gender,
            position:position,
            pay:pay,
            phone:phone,
            address:address,
            username:username,
            password:password 

        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        }
    }
    const updatethis = async () => {
            fetch('http://localhost:3000/users/'+id, updateoptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                if (!response.ok){
                    
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error)
                }               
            })
            .catch(error => {
                console.error('there was an error ',error)
            });
                
        
    } 
        return(updatethis)
}

export default patchUserDetails