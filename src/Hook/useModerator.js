import { useState } from "react"
import { useEffect } from "react"

export const useModerator=(email)=>{
    const [isModerator,setIsModerator] = useState(false)
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/user/moderator?email=${email}`)
            .then(res=>res.json())
            .then(data=>{
                setIsModerator(data.isModerator)
                console.log(data)
            })
            .catch(error=>console.log(error.message))
        }
    },[email])
    return [isModerator]
}
