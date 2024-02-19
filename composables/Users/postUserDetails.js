
const postUserDetails = (id,firstname,lastname,middlename,birthday,gender,position,pay,phone,address,username,password,datecreated) => {
    
    const sendoptions = {
        method: 'POST',
        body: JSON.stringify({
           
            id:id,
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
            password:password,
            datecreated:datecreated
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        }
    }
    const sendthis = async () => {
            fetch('http://localhost:3000/users/',sendoptions)
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
        return(sendthis)
}

export default postUserDetails