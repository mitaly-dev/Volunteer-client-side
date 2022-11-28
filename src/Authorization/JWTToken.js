export const accessToken =(email)=>{
    fetch(`http://localhost:5000/jwt`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({email:email})
    })
    .then(res=>res.json())
    .then(data=>{
        localStorage.setItem('volunteer-token',data.token)
    })
}