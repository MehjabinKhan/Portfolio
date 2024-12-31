import React from 'react'
import { GrInstagram } from "react-icons/gr";
import { TfiLinkedin } from "react-icons/tfi";
import { FaNpm } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-black font-medium text-xl h-12" style={{backgroundColor:"#93c5fd"}}>
     
    <div className='flex flex-col items-center'>
      <p className='font-medium text-gray-900 ml-2 '> © 2024 Mehjabin_Khan </p>
      <p className='flex gap-3 justify-center mt-2'>
        <GrInstagram size={25} color='red'/> 
        <TfiLinkedin size={25} color='black'/> 
        <FaNpm size={35} color='red'/></p>
    </div>
 
</footer>

  );
}

export default Footer
