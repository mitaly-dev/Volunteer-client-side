import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../assets/images/logos/Group 1329.png'
import { accessToken } from '../Authorization/JWTToken';
import { volunteerInfoPost } from '../Authorization/VolunteerInfo';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {
    const {
      user,
      signInVolunteer
    } = useContext(AuthContext)
    const [formData,setFormData] = useState({
          email:'',
          password:''
      })
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const {email,password}=formData

    const handleInputData=(event)=>{
        const name = event.target.name 
        const value = event.target.value 
        setFormData({...formData,[name]:value})
    }

    const signInHandler=(event)=>{
        event.preventDefault()
       if(email && password){
            signInVolunteer(email,password)
            .then(result=>{
                accessToken(email)
                toast.success("user log in successfull",{autoClose:1000})
                navigate(from,{replace:true})
            })
            .catch(error=>toast.error(error.message,{autoClose:1500}))
       }
    }

 
    return (
        <div className="relative">
        <img
          src="https://i.insider.com/5bed88c748eb1236f45c4ad3?width=1000&format=jpeg&auto=webp"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75 min-h-screen">
          <div className="px-4 py-16 mx-auto w-full md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col justify-between xl:flex-row gap-10">
              <div className="w-full xl:px-8 m-auto">
                <div className="bg-white sm:w-8/12 lg:w-6/12 xl:w-6/12 m-auto rounded shadow-2xl p-7 sm:p-10">
                <img src={logo} alt="" className='w-[140px] m-auto' />
                  <h3 className="my-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                 Login
                  </h3>
                  <form onSubmit={signInHandler}>
                    <div className="mb-1 sm:mb-2">
                        <input
                            onBlur={handleInputData}
                            placeholder="email"
                            required
                            type="email"
                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border-b border-gray-300 rounded shadow-sm outline-none placeholder:text-gray-700 font-semibold"
                            id="email"
                            name="email"
                        />
                    </div>
                      <div className="mb-1 sm:mb-2">
                            <input
                                onBlur={handleInputData}
                                placeholder="password"
                                required
                                type="password"
                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border-b border-gray-300 rounded shadow-sm outline-none placeholder:text-gray-700 font-semibold"
                                id="password"
                                name="password"
                            />
                      </div>
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center px-10 w-full font-semibold text-lg py-4 tracking-wide transition duration-200 rounded shadow-md bg-blue mt-4 mb-2 sm:mb-4"
                      >
                       Log in
                      </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;