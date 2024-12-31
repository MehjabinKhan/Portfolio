import React from 'react'
import { MdMarkEmailRead } from "react-icons/md";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100 px-4 md:px-16 py-10">

      <div className="flex flex-col md:flex-row justify-between w-full md:w-3/4 gap-8">

        {/* Left Side */}
        <div className="flex flex-col w-full md:w-1/2 px-4 py-6 bg-white rounded-lg shadow-md">
          <h1 className="font-bold text-3xl text-center text-gray-800 mb-6">
            Your Connection Starts Here
          </h1>
          <p className="font-medium text-xl text-gray-700 mb-6">
            If you would like to get in touch with me regarding my resume or any opportunities, 
            feel free to reach out via the following methods:
          </p>
        
          {/* Contact Links */}
          <div className="space-y-5">
            <p className="font-medium text-xl"> 
              <a href="tel:+92 (325) 3365836" className="text-blue-600 flex gap-3 items-center hover:text-blue-800">
                <BsFillTelephoneOutboundFill size={25} color="black" /> +92 (325) 3365836
              </a>
            </p>

            <p className="font-medium text-xl">
              <a href="mailto:mehjabinkhan2004@gmail.com" className="text-blue-600 flex gap-3 items-center hover:text-blue-800">
                <MdMarkEmailRead size={30} color="black" /> mehjabinkhan2004@gmail.com
              </a>
            </p>

            <p className="font-medium text-xl">
              <a 
                href="https://www.linkedin.com/in/mehjabin-khan-8965742bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target='_blank' 
                rel="noopener noreferrer"
                className="text-blue-600 flex gap-3 items-center hover:text-blue-800"
              >
                <GrLinkedin size={25} color="black" /> Mehjabin Khan
              </a>
            </p>
          </div>
        </div>

        {/* Right Side (Map) */}
        <div className="w-full md:w-1/2 mb-14 md:mb-0">
          <iframe
            width="100%"
            height="450"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57877.53415810293!2d66.99462054863281!3d24.954344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb34195f9bde5c3%3A0x18c6693c7437c568!2sKBR%20Society!5e0!3m2!1sen!2s!4v1735593207494!5m2!1sen!2s"
            style={{ filter: "grayscale(0) contrast(1) opacity(1)", border: 0 }}
          />
        </div>

      </div>
    </div>
  );
};

export default Contact;
