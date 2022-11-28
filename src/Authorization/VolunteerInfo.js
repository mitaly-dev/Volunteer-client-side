export const volunteerInfoPost=(volunteer)=>{
    fetch(`http://localhost:5000/volunteerInfo`,{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(volunteer)
      })
      .then((res)=>{ res.json()})
      .then(data=>{})
      .catch(error=>console.log(error.message))
}