import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthProvider';
import UserAction from './UserAction';
import VolunteerDetails from './VolunteerDetails';

const Users = () => {
    const [volunteers,setVolunteers] = useState([])
    const {event,setEvent,logOut,refresh,setRefresh} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(()=>{
        setEvent(false)
        fetch(`http://localhost:5000/volunteerInfo`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem("volunteer-token")}`
            }
        })
        .then(res=>{
           if(res.status===401 || res.status===403){
            logOut()
            navigate("/")
            toast.error("user not authorized",{autoClose:1000})
           }
            return res.json()
        })
        .then(data=>{
            setVolunteers(data.data)
        })
    },[event, setEvent,refresh])
    return (
        <>
            <div className="overflow-x-auto overflow-y-auto">
            <table className="table table-compact w-full">
                <thead>
                <tr >
                    <th className='py-5'></th> 
                    <th className='py-5'></th> 
                    <th className='py-5'>Name</th> 
                    <th className='py-5'>Email</th> 
                    <th className='py-5'>Registating date</th> 
                    <th className='py-5'>Action</th>
                </tr>
                </thead> 
                <tbody>
                    {
                        volunteers.map((volunteer,index)=><UserAction key={volunteer._id} index={index} volunteer={volunteer}></UserAction>)
                    }
                </tbody> 
            </table>
        </div> 
        </>
       
    );
};

export default Users;