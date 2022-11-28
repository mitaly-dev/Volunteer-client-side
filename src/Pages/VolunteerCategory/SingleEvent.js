import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const SingleEvent = ({event}) => {
    const {dark,setDark} = useContext(AuthContext)
  
    const {title,picture,date,description} = event
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure className='p-3'><img src={picture} alt="eventmage" className='w-[150px] h-[150px] rounded-xl'/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description?description:undefined}</p>
                <p>Date : {date}</p>
                <div className="card-actions justify-end">
                <button className="py-2 px-5 rounded-lg bg-yellow">Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default SingleEvent;