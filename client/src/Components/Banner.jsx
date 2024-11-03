/* eslint-disable react/prop-types*/
import React from "react"
import {FiSearch,FiMapPin} from "react-icons/fi";
function Banner({query,handleonchangeform}) {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:mt-10 md:mt-14 md:pl-[6rem] pl-2">
       <h1 className="text-4xl ml-4">Find your <span className="text-blue">new job </span>today.</h1>
       <p className="ml-4">Thousands of people are applying for the job and you are one among them. You can able to get the job.</p>
       <form className="ml-5 mt-3">
         <div className="flex md:flex-row flex-col md:gap-4 gap-0">
            <div className="sm:rounded-sm md:rounded-md rounded shadow-sm ring-1 ring-inset focus-within:ring-inset focus-within:ring-2
             ring-gray-200 focus-within:ring-indigo-600 md:w-1/2 w-full text-justify">
                <input type="text" id="title" name="title" placeholder="What Position are you looking for ? " className="block flex-1
                 text-black bg-transparent border-1 py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 
                 sm:text-sm sm:leading-6" onChange={handleonchangeform} value={query}/>
                 <FiSearch className="absolute mt-[-1.5rem] ml-2"/>
            </div>
            <div className="sm:rounded-sm md:rounded-md rounded shadow-sm ring-1 ring-inset focus-within:ring-inset focus-within:ring-2
             ring-gray-200 focus-within:ring-indigo-600 md:w-1/3 w-full">
                <input type="text" id="text" name="text" placeholder="Location" className="block flex-1
                 text-black bg-transparent border-1 py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 
                 sm:text-sm sm:leading-6" />
                 <FiMapPin className="absolute mt-[-1.5rem] ml-2"/>
            </div>
            <button type="submit" className="bg-blue px-2 md:rounded-none w-20 h-10 justify-center rounded-sm text-white">Search</button>
         </div>
       </form>
    </div>
  )
}

export default Banner