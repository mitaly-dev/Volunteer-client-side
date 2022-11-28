import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logos/Group 1329.png'
import { AuthContext } from '../Context/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { useEffect } from 'react';
import { useModerator } from '../Hook/useModerator';
import useAdmin from '../Hook/useAdmin';

const Header = () => {
  const {user,logOut,dark} = useContext(AuthContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isAdmin] = useAdmin(user?.email)
    const [isModerator] = useModerator(user?.email)
 
    const menu = 
    <>
        <li>
        <NavLink
          to="/home"
          className={({isActive})=>isActive?`font-medium tracking-wide text-yellow transition-colors duration-200 hover:text-deep-purple-accent-400`:
        `font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 ${dark? "text-white":"text-gray-800"}`
        }
        >
          Home
        </NavLink>
      </li>
        <li>
        <NavLink
          to="/donateNow"
          className={({isActive})=>isActive?`font-medium tracking-wide text-yellow transition-colors duration-200 hover:text-deep-purple-accent-400`:
        `font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 ${dark? "text-white":"text-gray-800"}`
        }
        >
          Donation
        </NavLink>
      </li>
        <li>
        <NavLink
          to="/events"
          className={({isActive})=>isActive?`font-medium tracking-wide text-yellow transition-colors duration-200 hover:text-deep-purple-accent-400`:
        `font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400 ${dark? "text-white":"text-gray-800"}`
        }
        >
          Events
        </NavLink>
      </li>
     </>
    
    return (
        <div className={`px-4 py-5 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-28 z-50 bg-transparent ${dark?"absolute top-0 left-0 w-full" : "static"}`}>
      <div className="relative flex items-center justify-between z-50">
      <img src={logo} alt="" className='w-[150px]' />
        <ul className="flex items-center hidden space-x-8 lg:flex">
            {menu}
          <li className='space-x-2 flex'>
                <Link 
                  to="/user/register"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white bg-[#3F90FC] transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Register
                </Link>
            
               {
                user?
                     <div className="dropdown dropdown-end text-center">
                            <label tabIndex={0} className="btn btn-ghost avatar btn-circle">
                              <div className="w-10 rounded-full border">
                                {
                                  user?.photoURL ? <img src={user?.photoURL} alt="userImg" /> :
                                  <FaUser className='text-yellow text-lg text-center m-auto mt-2'></FaUser>
                                }
                              </div>
                            </label> 
                    <ul tabIndex={0} className="font-semibold menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                      <li className='font-semibold py-3'> Admin</li>
                      <li>
                        <Link to="/" className="justify-between">
                          Profile
                          <span className="badge">New</span>
                        </Link>
                      </li>
                      <li><Link to="/addedEvent">Your Event</Link></li>
                      {
                        isAdmin || isModerator?
                        <li><Link to="/dashboard">Dashboard</Link></li> : 
                        <li><Link to="/user/requestToAdmin">Request</Link></li>
                      }
                      <li><button onClick={logOut}>Logout</button></li>
                    </ul>
                  </div>
                 :
                 <Link 
                 to="/user/login"
                 className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white bg-yellow transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                 aria-label="Sign up"
                 title="Sign up"
               >
                 Login
               </Link>
               }
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm z-40">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <svg
                        className="w-8 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                      >
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                      </svg>
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Company
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                   {menu}
                    <li>
                      <Link
                        to="/register"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                      >
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/"
                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white bg-[#3F90FC] transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                      >
                        Admin
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    );
};

export default Header;