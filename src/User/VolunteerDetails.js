import React from 'react';
import { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hook/useAdmin';

const VolunteerDetails = ({volunteer,index}) => {
    const {user,logOut,dark,setRefresh,refresh} = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const {_id,photoURL,name,email,date,role} = volunteer

const deleteVolunteer=()=>{
    const sure = window.confirm(`Are you sure you want to delete ${name}`)
    if(sure){
        fetch(`http://localhost:5000/volunteerInfo/${_id}`,{
            method:'DELETE',
            headers:{
                authorization:`Bearer ${localStorage.getItem("volunteer-token")}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                toast.warning(`name volunteer is deleted`,{autoClose:1000})
                setRefresh(!refresh)
            }else{
                toast.error(data.message,{autoClose:1000})
            }
        })
        .catch(error=>console.log(error.message))
    }
}


    return (
        <tr className='font-semibold'>
        <th  className='text-[16px] pl-7'>{index+1}</th> 
        <td  className='text-[16px]'><img src={photoURL} alt="volunteerImage" className='w-[50px] h-[50px] object-cover rounded-full border' /></td>
        <td  className='text-[16px] capitalize'>{name}</td> 
        <td  className='text-[16px]'>{email}</td> 
        <td  className='text-[16px]'>{date}</td> 
        <td  className='text-[16px] text-center'>
               <button onClick={deleteVolunteer} className='text-center border rounded-lg px-3 py-2'>Delete</button>
         </td>
      </tr>
    );
};

export default VolunteerDetails;