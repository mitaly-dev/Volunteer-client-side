import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import CategoryItem from './CategoryItem';

const Categories = () => {
    const {categories,setCategories,refresh} = useContext(AuthContext)
    const [size,setSize] = useState(8)
    const [count,setCount] = useState(0)
    const [page,setPage] = useState(0)
    const pages = Math.ceil(count/size)
    const {dark,setDark} = useContext(AuthContext)
    const [search,setSearch] = useState('')
    const searchRef = useRef()

    useEffect(()=>{
        setDark(false)
        fetch(`http://localhost:5000/category?size=${size}&page=${page}&search=${search}`)
        .then(res=>res.json())
        .then(data=>{
            setCategories(data.data)
            setCount(data.count)
        })
    },[page, setCategories, size,refresh,search])


    const handleSearch=(event)=>{
        event.preventDefault()
        setSearch(searchRef.current.value)
        console.log(searchRef.current.value)
       }
       

    return (
        <div className='py-16 px-28'>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
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
            <div className='grid grid-cols-4 gap-8 '>
                {
                categories.map(category=><CategoryItem key={category._id} category={category}></CategoryItem>) 
                }
            </div>
            <div className='text-right mt-5'>
            <Link to="/dashboard/addEvent" className='px-4 py-3 bg-yellow rounded-lg  font-semibold'> + Add Event</Link>
            </div>
            <p className='text-gray-400 text-center pt-16 pb-5'>Current page {page+1} and size {size}</p>
            <div className="flex justify-center space-x-1 ">
                {
                    [...Array(pages?pages:1).keys()].map(number=>{
                        return <button onClick={()=>setPage(number)} key={number} type="button" title="Page 1" 
                        className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md ${number===page ? "bg-yellow" : "bg-white"}`}>{number+1}</button>
                    })
                }
                <select onChange={(event)=>setSize(event.target.value)}  defaultValue={size} className="cursor-pointer outline-none border rounded shadow-md px-3">
                <option value="4">4</option>
                <option>8</option>
                <option value="12">12</option>
                <option value="16">16</option>
                <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Categories;