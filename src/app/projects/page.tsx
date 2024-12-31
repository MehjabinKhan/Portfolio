import React from 'react';
import Image from 'next/image';
const Projects = () => {
  return (
    <div className='min-h-screen bg-blue-100'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl title-font mb-2 text-gray-900 font-bold text-3xl">
              Innovative Projects I have Crafted
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 ">
            <div className="xl:w-1/3 md:w-1/2 p-4 container ">
              <div className="border-sky-500 border-solid p-6 rounded-lg">
              <a href="https://www.npmjs.com/package/m12k08_simple-calculator" target="_blank" rel="noopener noreferrer">
                <div className="w-full h-40 inline-flex items-center justify-center rounded-lg mb-4">
                  <Image src="/Project-01.jpg" alt="Image Not Found" width={300} height={400} className="w-56 h-36 object-contain rounded-lg"/>
                </div>
              </a>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Simple Calculator
                </h2>
                <p className="leading-relaxed text-base">
                  A simple calculator used to perform basic arithmetic calculations.
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4 ">
              <div className="border-solid p-6 rounded-lg">
              <a href="https://www.npmjs.com/package/m12k08_number-guessing-game" target="_blank" rel="noopener noreferrer">
                <div className="w-full h-40 inline-flex items-center justify-center rounded-lg mb-4">
                  <Image src="/Project-02.jpeg" alt="Image Not Found" width={300} height={400} className="w-56 h-36 object-contain rounded-lg"/>
                </div>
              </a>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Number Guessing Game
                </h2>
                <p className="leading-relaxed text-base">
                  A number guessing game where the computer randomly generates a number, and the user has to guess it.
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border-solid p-6 rounded-lg">
              <a href="https://www.npmjs.com/package/mehj12-atm-program" target="_blank" rel="noopener noreferrer">
                <div className="w-full h-40 inline-flex items-center justify-center rounded-lg mb-4">
                  <Image src="/Project-03.jpeg" alt="Image Not Found" width={300} height={400} className="w-56 h-36 object-contain rounded-lg"/>
                </div> 
              </a>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  ATM Machine
                </h2>
                <p className="leading-relaxed text-base">
                  An ATM is an electronic banking device that allows customers to perform financial transactions such as cash withdrawals.
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border-solid p-6 rounded-lg">
              <a href="https://www.npmjs.com/package/mk012_to-do-list" target="_blank" rel="noopener noreferrer">
                <div className="w-full h-40 inline-flex items-center justify-center rounded-lg  mb-4">
                  <Image src="/Project-04.png" alt="Image Not Found" width={300} height={400} className="w-56 h-36 object-contain rounded-lg"/>
                </div>
              </a>  
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  To-Do List
                </h2>
                <p className="leading-relaxed text-base">
                  A to-do list is just a list of things you have to do.
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border-solid p-6 rounded-lg">
              <a href="https://static-interactive-resume-theta.vercel.app/" target="_blank" rel="noopener noreferrer">
                <div className="w-full h-40 inline-flex items-center justify-center rounded-lg  mb-4">
                  <Image src="/Project-05.jpg" alt="Image Not Found" width={300} height={400} className="w-64 h-36 object-contain rounded-lg"/>
                </div>
              </a>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Static Resume Builder
                </h2>
                <p className="leading-relaxed text-base">
                  A resume tells the employer about your experiences, skills, and work history.
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border-solid p-6 rounded-lg">
              <a href="https://www.npmjs.com/package/mk012_currency-converter" target="_blank" rel="noopener noreferrer">
                <div className="w-full h-40 inline-flex items-center justify-center rounded-lg  mb-4">
                  <Image src="/Project-06.png" alt="Image Not Found" width={300} height={400} className="w-56 h-36 object-contain rounded-lg"/>
                </div>
              </a>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Currency Converter
                </h2>
                <p className="leading-relaxed text-base">
                  For converting one currency to another using the exchange rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
