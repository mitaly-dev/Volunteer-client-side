import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../assets/images/logos/Group 1329.png'
import { volunteerInfoPost } from '../Authorization/VolunteerInfo';
import { AuthContext } from '../Context/AuthProvider';


const Register = () => {
    const {
      user,
      createVolunteer,
      emailVerification,
      updateVolunteerProfile,
      logOut
    } = useContext(AuthContext)
    const [formData,setFormData] = useState({
          name:'',
          email:'',
          photoURL:'', 
          description:'',
          date:'',
          password:''
      })
      const navigate = useNavigate()

    const {name,email,photoURL,description,date,password}=formData

    const handleInputData=(event)=>{
        const name = event.target.name 
        const value = event.target.value 
        setFormData({...formData,[name]:value})
    }

    const createVolunteerHandle=(event)=>{
        event.preventDefault()
        const volunteer = {
          name,
          email,
          photoURL,
          description,
          date}
       if(name && email && photoURL && description && date && password){
          createVolunteer(email,password)
          .then(result=>{
            emailVerification()
            updateVolunteerProfileHandle()
            volunteerInfoPost(volunteer)
            logOut()
            navigate("/user/login")
          })
          .catch(error=>toast.error(error.message,{autoClose:1500})
          )
       }
    }

    const updateVolunteerProfileHandle=()=>{
      const profile={
        displayName:name,
        photoURL:photoURL
      }
      updateVolunteerProfile(profile)
      .then(result=>{})
      .catch(error=>console.log(error.message))
    }

    

 
    return (
        <div className="relative">
        <img
          src="https://i.insider.com/5bed88c748eb1236f45c4ad3?width=1000&format=jpeg&auto=webp"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col justify-between xl:flex-row gap-10">
              <div className="w-full m-auto">
                <div className="bg-white sm:w-8/12 lg:w-6/12 xl:w-6/12 m-auto rounded shadow-2xl p-7 sm:p-10">
                <img src={logo} alt="" className='w-[140px] m-auto' />
                  <h3 className="my-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Register as a Volunteer
                  </h3>
                  <form onSubmit={createVolunteerHandle}>
                        <div className="mb-1 sm:mb-2">
                            <input
                                onBlur={handleInputData}
                                placeholder="Full Name"
                                required
                                type="text"
                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border-b border-gray-300 rounded shadow-sm outline-none placeholder:text-gray-700 font-semibold"
                                id="name"
                                name="name"
                            />
                        </div>
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
                                placeholder="PhotoURL"
                                required
                                type="text"
                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border-b border-gray-300 rounded shadow-sm outline-none placeholder:text-gray-700 font-semibold"
                                id="photoURL"
                                name="photoURL"
                            />
                        </div>
                        <div className="mb-1 sm:mb-2">
                            <input
                                onBlur={handleInputData}
                                placeholder="Date"
                                required
                                type="date"
                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border-b border-gray-300 rounded appearance-none shadow-sm outline-none placeholder:text-gray-700 font-semibold"
                                id="date"
                                name="date"
                            />
                        </div>
                      <div className="md:mt-5 sm:mt-2">
                        <textarea
                          onBlur={handleInputData} name="description" id="" cols="30" rows="5" placeholder='Description' className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border-b border-gray-300 rounded appearance-none shadow-sm outline-none placeholder:text-gray-700 font-semibold"></textarea>
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
                       Registration
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

export default Register;