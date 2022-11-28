import React from 'react';
import { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hook/useAdmin';

const UserAction = ({volunteer,index}) => {
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
                setRefresh(!refresh)
            }else{
                toast.error(data.message,{autoClose:1000})
            }
        })
        .catch(error=>console.log(error.message))
    }
}

const adminHandle=()=>{
    fetch(`http://localhost:5000/user/admin/${_id}`,{
        method:'PUT',
        headers:{
            authorization:`Bearer ${localStorage.getItem("volunteer-token")}`
        }
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
            if(data.upsertedCount>0){
                toast.success('added a admin',{autoClose:1000})
            }
            else{
                toast.error(data.message,{autoClose:1000})
            }
        }
    )
    .catch(error=>console.log(error.message))
}

const moderatorHandle=()=>{
    fetch(`http://localhost:5000/user/moderator/${_id}`,{
        method:'PUT',
        headers:{
            authorization:`Bearer ${localStorage.getItem("volunteer-token")}`
        }
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
            if(data.upsertedCount>0 || data.modifiedCount>0){
                toast.success('added a moderator',{autoClose:1000})
            }
            else{
                toast.error(data.message,{autoClose:1000})
            }
        }
    )
    .catch(error=>console.log(error.message))
}

    return (
        <tr className='font-semibold'>
        <th  className='text-[16px] pl-7'>{index+1}</th> 
        <td  className='text-[16px]'><img src={photoURL} alt="volunteerImage" className='w-[50px] h-[50px] object-cover rounded-full border' /></td>
        <td  className='text-[16px] capitalize'>{name}</td> 
        <td  className='text-[16px]'>{email}</td> 
        <td  className='text-[16px]'>{date}</td> 
        <td  className='text-[16px] text-center'>
            {
              role==='admin' ?  
              <button className="m-1 text-green-700 font-bold cursor-pointer  border py-2 px-3 rounded-lg">Admin</button> :
             <div>
                 {
                role==='moderator' ?  

                <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="m-1 text-green-500  border py-2 px-3 rounded-lg rounded-lg cursor-pointer">Moderator</label>
                {
                    isAdmin && 
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40 z-50">
                            <li>
                                <button onClick={adminHandle} className='text-center'>Remove</button>
                            </li>
                    </ul>
                }
                </div>
               :

                <div className="dropdown dropdown-bottom dropdown-end">
                    <label tabIndex={0} className="m-1 border py-2 px-3 rounded-lg cursor-pointer">Action</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40 z-50">
                            <li>
                                <button onClick={adminHandle} className='text-center'>Admin</button>
                            </li>
                            <li>
                                <button onClick={moderatorHandle} className='text-center'>Modarator</button>
                            </li>
                            <li>
                                <button onClick={deleteVolunteer} className='text-center'>Delete</button>
                            </li>
                    </ul>
                </div>
              }
             </div>
            }
         </td>
      </tr>
    );
};

export default UserAction;