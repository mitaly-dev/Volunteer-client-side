import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/images/logos/Group 1329.png'
import { useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { FaUserFriends } from 'react-icons/fa';
import useAdmin from '../Hook/useAdmin';
import { useContext } from 'react';
import { useModerator } from '../Hook/useModerator';

const Dashboard = () => {
    const {event,user} = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isModerator] = useModerator(user?.email)
  
    return (
            <div>
            <div className='grid grid-cols-12'>
            <div className='col-span-3 bg-gray-800 '>
                   <Link to="/">
                        <img src={logo} alt="" className='w-[150px] m-auto py-5' />
                   </Link>
                    <div className='pl-8 text-blue font-semibold text-lg mt-4'>
                        {
                            isAdmin || isModerator ?
                            <Link to="/dashboard/volunteerList" className='flex items-center  mb-3'>
                                <FaUserFriends className='mr-2'></FaUserFriends> Volunteer list
                            </Link>  : undefined
                        }
                        <Link to="/dashboard/addEvent" className="flex items-center mb-3"> + Add Event</Link>
                        {
                            isAdmin &&
                            <Link to="/dashboard/users" className='flex items-center  mb-3'>
                            <FaUserFriends className='mr-2'></FaUserFriends>Users
                            </Link> 
                        }
                    </div>

            </div>
            <div className='col-span-9 bg-fuchsia-600'>
            <div className="relative">
                    <img
                    src="https://i.insider.com/5bed88c748eb1236f45c4ad3?width=1000&format=jpeg&auto=webp"
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                    />
          
                <div className="relative bg-gray-900 bg-opacity-75 min-h-screen">
                <div className='py-5 bg-gray-800 text-white'>
                <h3 className='text-lg font-semibold ml-20'>
                    { 
                    event?  "Add Event":"Volunteer register list"
                    }
                </h3>
                </div>
                    <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                        <div className="flex flex-col justify-between xl:flex-row gap-10">
                            <div className="w-full xl:px-8 m-auto">
                                <div className="bg-yellow rounded shadow-2xl p-7 sm:p-10">
                                    <Outlet></Outlet>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;