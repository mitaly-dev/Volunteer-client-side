import { useState } from "react"
import { useEffect } from "react"

const useAdmin =(email)=>{
    const [isAdmin,setIsAdmin] = useState(false)
    const [isAdminLoading,setIsAdminLoading] = useState(true)
    useEffect(()=>{
       if(email){
        fetch(`http://localhost:5000/user/admin?email=${email}`)
        
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setIsAdmin(data.isAdmin)
            setIsAdminLoading(false)
        })
        .catch(error=>console.log(error))
       }
    },[email])
    return [isAdmin,isAdminLoading]
}
export default useAdmin