import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";

const Header = () => {
  return (
       <header className="text-black font-medium text-xl h-12" style={{backgroundColor:"#93c5fd "}}>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
    href='https://www.linkedin.com/in/mehjabin-khan-8965742bb/' target='_blank'
    >
      <h2 className="ml-1 text-xl font-bold flex gap-3"><IoLogoLinkedin size={35} color='white'/> Mehjabin Khan</h2>
    </a>
    <nav className="flex flex-wrap items-center justify-center gap-10 font-semibold text-xl text-black ">
      <a className="mr-5 hover:text-red-600 focus:text-red-600" href='/'>Home</a>
      <a className="mr-5 hover:text-gray-900" href='/about'>About</a>
      <a className="mr-5 hover:text-gray-900" href='/skills'>Skills</a>
      <a className="mr-5 hover:text-gray-900" href='/projects'>Projects</a>
      <a className="mr-5 hover:text-gray-900" href='/contact'>Contact</a>
    </nav>
    </div>
   </header>
  )
}


export default Header