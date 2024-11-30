import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa6";
function NewsLetter() {
  return (
    <div>
      <div className="mt-4">
        <h3 className="font-bold flex items-center mb-2 text-lg gap-2"><FaEnvelopeOpenText/>Email Me for Jobs</h3>
        <p className="text-primary/50 text-base ml-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas enim cum eveniet et, quos consectetur assumenda odit tenetur voluptatibus vitae.</p>
        <div className="w-full space-y-5">
          <input type="email" name="email" id="email" required placeholder="your@gmail.com" className="w-full block border pl-4 mt-5 focus:outline-none" />
          <input type="submit" name="Subscribe" value={"Subscribe"} className="w-full border pl-4 focus:outline-none bg-blue text-white cursor-pointer mt-3 rounded-sm"/>
        </div>
      </div>
      <div className="mt-16">
        <h3 className="font-bold flex items-center mb-2 text-lg gap-2"><FaEnvelopeOpenText/>Get Noticed Faster</h3>
        <p className="text-primary/50 text-base ml-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas enim cum eveniet et, quos consectetur assumenda odit tenetur voluptatibus vitae.</p>
        <div className="w-full space-y-5">
          <input type="submit" name="Subscribe" value={"Upload Your Resume"} className="w-full border  focus:outline-none bg-blue text-white cursor-pointer mt-3 rounded-sm"/>
        </div>
      </div>
   </div> 
 )
}

export default NewsLetter