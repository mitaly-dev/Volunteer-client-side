import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const EventDetails = () => {
    const {dark,setDark,setRefresh,refresh} = useContext(AuthContext)
    setDark(true)
    const event = useLoaderData()
   const {title,picture,date,description,_id} = event
   const data = {title,picture,date,description}

   const addEventHandle=()=>{
    fetch(`http://localhost:5000/addEvent`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.acknowledged){
            toast.success(`${title} Event added`,{autoClose:1000})
        }
        else{
            toast.error('Event not added',{autoClose:1000})
        }
    })
   }

   const deleteEvent=(id)=>{
    console.log(id)
        fetch(`http://localhost:5000/category/${id}`,{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            setRefresh(!refresh)
            console.log(data)
        })
   }

    return (
    <div className="relative">
    <img
      src="https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
      className="absolute inset-0 object-cover w-full h-full"
      alt=""
    />
    <div className="relative bg-gray-900 bg-opacity-75">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="m-auto">
                <div className="mx-auto flex flex-col items-center px-4 text-center md:py-32 md:px-10 lg:px-20 text-white">
                    <div className="container max-w-6xl p-6 space-y-6 sm:space-y-12">
                        <div className="block max-w-sm gap-3 mx-auto sm:max-w-full focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900 text-left">
                            <img src={picture} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
                            <div className="p-6 space-y-2 lg:col-span-5">
                                <h3 className="text-2xl font-semibold sm:text-4xl capitalize">{title}</h3>
                                <p className="py-2 text-gray-400">Event Date : {date}</p>
                                <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button onClick={()=>deleteEvent(_id)} type="button" className="px-10 font-semibold py-3 rounded-md hover:bg-cyan-400 text-white bg-blue mr-3">Delete Event</button>
                            <button onClick={addEventHandle} type="button" className="px-10 font-semibold py-3 rounded-md hover:bg-cyan-400 text-white bg-yellow">Add Event</button>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  </div>
    );
};

export default EventDetails;