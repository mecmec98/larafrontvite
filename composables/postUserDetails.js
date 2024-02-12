
const postUserDetails = (id,firstname,lastname,middlename,birthday,gender,position,pay,phone,address,username,password,datecreated) => {
 
    const sendthis = async () => {
        try{ 
            fetch('http://localhost:3000/users/',{
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
            }).then((response) => response.json()).then((json) => console.log(json));
        }catch(err){
            console.log(err.message)
        }
    } 
        return(sendthis)
}

export default postUserDetails