
const postUserNotes = (id,user,title,badge,body,datecreated) => {
    
    const sendoptions = {
        method: 'POST',
        body: JSON.stringify({
           id:id,
           user:user,
           title:title,
           badge:badge,
           body:body,
           datecreated:datecreated
 
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        }
    }
    const sendthisnote = async () => {
            fetch('http://localhost:3000/notes/',sendoptions)
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
        return(sendthisnote)
}

export default postUserNotes