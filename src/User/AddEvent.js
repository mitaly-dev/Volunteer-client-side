import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthProvider';

const AddEvent = () => {
    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate()
    const [eventData,setEventData] = useState({
        eventDate:"",
        photoURL:"",
        eventName:"",
        description:""
    })
const {eventDate,eventName,photoURL,description} = eventData
    const handleEventData=(event)=>{
        const name=event.target.name 
        const value = event.target.value 
        setEventData({...eventData,[name]:value})
        
    }


    const addEventHandle=(event)=>{
        event.preventDefault()
        const form = event.target
        const eventDoc = {
            date:eventDate,
            title:eventName,
            picture:photoURL,
            description:description
        }
        fetch(`http://localhost:5000/category`,{
            method:'POST',
            headers:{
                "content-type":"application/json",
                authorization:`Bearer ${localStorage.getItem('volunteer-token')}`
            },
            body:JSON.stringify(eventDoc)
        })
        .then(res=>{
            if(res.status===401 || res.status===403){
                logOut()
                toast.error("unauthorized user",{autoClose:1500})
                navigate("/")
            }
           return res.json()
        })
        .then(data=>{
            if(data.acknowledged){
                toast.success("New Event Added Successfull",{autoClose:1000})
                form.reset()
            }
        })
    }
    return (
        <div>
            <form onSubmit={addEventHandle}>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="eventName" className="font-semibold">Event Name</label>
                            <input
                            onBlur={handleEventData}
                             id="eventName" name="eventName" type="text" placeholder="Event Name" className="w-full rounded-md outline-none px-4 py-3 mt-2" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="eventDate" className="font-semibold">Event Date</label>
                            <input
                             onBlur={handleEventData}
                             id="eventDate" name="eventDate" type="date" className="w-full rounded-md outline-none px-4 py-3 mt-2" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="description" className="font-semibold">Description</label>
                            <input
                             onBlur={handleEventData}
                             id="description"  name="description" type="text" placeholder="Description" className="w-full rounded-md outline-none px-4 py-3 mt-2" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="photoURL" className="font-semibold">Banner photoURL</label>
                            <input
                            onBlur={handleEventData} 
                            id="photoURL" name="photoURL" type="text" placeholder="photoURL" className="w-full rounded-md outline-none px-4 py-3 mt-2" />
                        </div>
                        <button type='submit' className='bg-blue px-10 py-3 col-span-full rounded-lg text-white text-lg font-semibold'>Create Event</button>
                    </div>
            </form>
        </div>
    );
};

export default AddEvent;