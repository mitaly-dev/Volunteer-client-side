import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import SingleEvent from './SingleEvent';
const AddedEvent = () => {
    const {dark,setDark} = useContext(AuthContext)
    setDark(true)

    const events =  useLoaderData()
    console.log(events)

    return (
        <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="m-auto  px-28 py-16">
                <div className='grid grid-cols-2 gap-10'>
                    {
                    events.map(event=><SingleEvent event={event} key={event._id}></SingleEvent>)
                    }
                </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddedEvent;