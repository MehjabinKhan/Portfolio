import React from 'react';
import { FaLaptopCode } from "react-icons/fa";

const Skills = () => {
  return (
    <div className='min-h-screen bg-blue-100'>

      {/* Header Section */}
      <div className='text-center pt-12'>
        <h1 className='font-bold text-4xl md:text-5xl text-gray-800'>My Tech Expertise & Teaching Journey</h1>
        <p className='font-medium text-lg mx-8 md:mx-24 pt-9 text-gray-700'>
          As a dedicated developer, I have acquired a diverse set of technical skills
          through continuous learning and hands-on experience. I have worked on a variety
          of projects, applying my knowledge of programming languages, frameworks, and
          development tools to build functional and efficient applications. My expertise
          spans both front-end and back-end technologies, allowing me to create seamless
          and dynamic user experiences. In addition to my development work, I also teach
          students English and Science, sharing my knowledge and helping them grasp key concepts.
          My blend of technical proficiency and teaching experience enables me to effectively
          contribute to both the tech community and education.
        </p>
      </div>

      {/* Skills Sections */}
      <div className='flex justify-center gap-6 mt-14 flex-wrap'>

        {/* First Column (Languages I have Learnt) */}
        <div className='w-full md:w-1/3'>
          <h2 className='font-semibold text-2xl gap-3 flex items-center justify-start ml-8 text-gray-800'>
            Languages I have Learnt <FaLaptopCode size={30} color='blue' />
          </h2>
          <div className='grid grid-cols-2 border-4 border-gray-400 rounded-lg mt-6 mx-8 p-6 gap-x-12 shadow-lg'>
            <div>
              <p className='text-xl text-gray-700'>Typescript <br /> HTML <br /> CSS</p>
            </div>
            <div>
              <p className='text-xl text-gray-700'>Node.js <br /> Tailwind <br /> Next.js</p>
            </div>
          </div>
        </div>

        {/* Second Column (Languages) */}
        <div className='w-full md:w-1/3'>
          <h2 className='font-semibold text-2xl ml-8 mb-4 text-gray-800'>Languages</h2>
          <div className='border-4 border-gray-400 rounded-lg mt-6 text-xl mx-8 p-6 shadow-lg'>
            <p className='text-gray-700'>English (Intermediate)</p>
            <p className='text-gray-700'>Urdu (Fluent)</p>
          </div>
        </div>

        {/* Third Column (Other Skills) */}
        <div className='w-full md:w-1/3'>
          <h2 className='font-semibold text-2xl ml-8 mb-4 text-gray-800'>Other Skills</h2>
          <div className='text-xl border-4 border-gray-400 rounded-lg w-full mx-8 p-6 shadow-lg'>
            <p className='text-gray-700'>Adaptability to new technologies</p>
            <p className='text-gray-700'>Time Management</p>
            <p className='text-gray-700'>Self-motivation</p>
            <p className='text-gray-700'>Teamwork and collaboration</p>
            <p className='text-gray-700'>Problem Solving</p>
            <p className='text-gray-700 mb-3'>Effective Communication</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Skills;
