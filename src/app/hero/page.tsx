import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 bg-blue-100 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded-3xl w-72 ml-32"
        alt="hero" width={300} height={400}
        src="/profile.jpg"
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      Hi, I am Mehjabin Khan
      </h1>
      <p className="mb-8 leading-relaxed text-xl">
       A passionate web developer with a keen eye for detail, 
       currently pursuing a degree in BS Public Health. I also share my 
       knowledge as a teacher, guiding the next generation of learners. I 
       specialize in creating user-friendly and efficient web applications, 
       and I believe in the power of technology to solve real-world problems. 
       Lets connect and build something amazing together !
      </p>
      </div>
  </div>
</section>

    </div>
  )
}

export default Hero
