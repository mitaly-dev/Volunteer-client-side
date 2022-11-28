import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const RegisterForDonate = () => {
    const [categories,setCategories] = useState([])
    const [count,setCount] = useState(0)

    useEffect(()=>{
        fetch(`http://localhost:5000/category`)
        .then(res=>res.json())
        .then(data=>{
            setCategories(data.data)
            setCount(data.count)
        })
    },[])

    return (
        <div className="relative">
        <img
          src="https://i.insider.com/5bed88c748eb1236f45c4ad3?width=1000&format=jpeg&auto=webp"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col justify-between xl:flex-row gap-10 pt-16">
              <div className="w-full  xl:px-8">
                <div className="bg-white sm:w-8/12 lg:w-6/12 xl:w-6/12 m-auto rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Sign up for updates
                  </h3>
                  <form>
                    <div className='flex justify-between gap-6 mb-3'>
                        <div className="mb-1 sm:mb-2">
                        <label
                            htmlFor="firstName"
                            className="inline-block mb-1 font-medium"
                        >
                            Name
                        </label>
                        <input
                            placeholder="John"
                            required
                            type="text"
                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            id="firstName"
                            name="firstName"
                        />
                        </div>
                        <div className="mb-1 sm:mb-2">
                        <label
                            htmlFor="lastName"
                            className="inline-block mb-1 font-medium"
                        >
                            Phone
                        </label>
                        <input
                            placeholder="Doe"
                            required
                            type="text"
                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            id="lastName"
                            name="lastName"
                        />
                        </div>
                    </div>
                    <div className='flex justify-between gap-6 mb-3'>
                        <div className="mb-1 sm:mb-2">
                        <label
                            htmlFor="firstName"
                            className="inline-block mb-1 font-medium"
                        >
                            Name
                        </label>
                        <input
                            placeholder="John"
                            required
                            type="text"
                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            id="firstName"
                            name="firstName"
                        />
                        </div>
                        <div className="mb-1 sm:mb-2">
                        <label
                            htmlFor="lastName"
                            className="inline-block mb-1 font-medium"
                        >
                            Phone
                        </label>
                        <input
                            placeholder="Doe"
                            required
                            type="text"
                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            id="lastName"
                            name="lastName"
                        />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="lastName"
                            className="inline-block mb-1 font-medium"
                        >
                           Donate to
                        </label>
                        <select name="" id="" className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm outline-none ">
                            {
                                categories.map(category=>{
                                    return <option key={category._id} value={`${category.title}`} className="text-gray-400">{category.title}</option>
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="lastName"
                            className="inline-block mb-1 font-medium"
                        >
                         Massage
                        </label>
                      <textarea name="" id="" cols="30" rows="5" className="flex-grow w-full px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm outline-none"></textarea>
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center px-10 font-semibold text-lg py-4 tracking-wide transition duration-200 rounded shadow-md bg-yellow"
                      >
                        Donate Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="w-full  mb-12 xl:mb-0 xl:pr-16 xl:w-5/12">
                <span className='text-yellow pb-2 text-xl font-semibold'>HELP US</span>
                <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-white sm:text-4xl ">
                Your Donation Can <br></br> Change Someone’s Life
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                >
                  Learn more
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default RegisterForDonate;