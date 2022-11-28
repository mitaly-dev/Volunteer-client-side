import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const Searchbar = () => {
  const {categories,setCategories} = useContext(AuthContext)
  const [search,setSearch] = useState()
  const searchRef = useRef()

  useEffect(()=>{
      fetch(`http://localhost:5000/searchEventCategory?search=${search}`)
      .then(res=>res.json())
      .then(data=>{
        setCategories(data.data)
      })
      .catch(error=>console.log(error.message))
  },[search])


  const handleSearch=(event)=>{
   setSearch(searchRef.current.value)
  }

    return (
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
      <div className="max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl">
        <div className="text-center">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            
            <h2 className=" mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            I grow by helping people in need.
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
          <div className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
            <input
              ref={searchRef}
              placeholder="Email"
              required=""
              type="text"
              className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            />
            <button
            onClick={handleSearch}
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-blue text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Searchbar;