import React from 'react';
import { IoLogoLinkedin } from "react-icons/io5";

const Header = () => {
  return (
    <header className="text-black flex  font-medium text-xl h-12" style={{ backgroundColor: "#93c5fd" }}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href='https://www.linkedin.com/in/mehjabin-khan-8965742bb/'
          target='_blank'
        >
          <h2 className=" text-xl font-bold flex gap-3 ml-10">
            <IoLogoLinkedin size={35} color='white' /> Mehjabin Khan
          </h2>
        </a>
       
      </div>
      <nav className='flex text-center justify-between gap-1 text-xl text-black font-semibold w-full mr-10'>
          <a href="/" className="flex-grow text-center">Home</a>
          <a href="/about" className="flex-grow text-center">About</a>
          <a href="/skills" className="flex-grow text-center">Skills</a>
          <a href="/projects" className="flex-grow text-center">Projects</a>
          <a href="/contact" className="flex-grow text-center">Contact</a>
        </nav>
    </header>
  );
}

export default Header;
