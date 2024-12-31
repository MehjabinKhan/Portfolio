import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-blue-100'>
         
    <div className="flex items-center justify-center w-full text-center">
   <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-2 text-black-900" > About MySelf ! </h1>
    </div>  
      <div className="bg-white p-12 rounded-3xl shadow-lg max-w-3xl mx-auto mt-6 mb-16 text-center">
      <p className='font-medium text-xl text-black-700'>
      My name is Mehjabin Khan. I began my schooling at Metropolitan Academy in 2008 and 
      completed my matriculation in 2021 with an 80% score in the Science group. 
      Afterward, I enrolled in a government degree college for my intermediate studies, 
      specializing in pre-medical. In 2024, I took admission in Karachi University to 
      pursue a Bachelor of Science (BS) in Public Health. <br/>
      In parallel with my academic journey, I enrolled in the Governors Artificial Intelligence 
      course, where I gained knowledge in various programming languages such as HTML, CSS, 
      TypeScript, and more. While my primary focus has been in the medical field, 
      I have thoroughly enjoyed exploring new areas of learning, especially in programming, 
      which has provided me with valuable skills and a unique perspective. 
     </p>
     </div>
    </div>
  )
}
export default About
