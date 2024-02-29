import React from "react";
import "./footer.css";
// import AuthModal from "../Auth/AuthModal"; // Import the AuthModal component

const Footer = ({ openTutorModal }) => {
  return (
    <>
      <section className='newletter'>
        <div className='container flex flex-col sm:flex-row items-center justify-center'>
          <div className='left'>
            <span className='text-center text-sm sm:text-3xl font-semibold'>Newsletter - Subscribe to get the latest updates</span>
          </div>
          <div className='right flex flex-row gap-2 align-middle justify-center items-center'>
            <input className='w-full p-4 flex-1' type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane bg-teal-500 text-white p-2 rounded-full'></i>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <span className="italic opacity-75 text-sm">Unlock the infinite potential of online education with  vast array of courses, resources, and opportunities for collaboration in learning.</span>

          <div className="flex items-center">
            <ul className="mt-0 flex flex-row gap-4 items-center align-middle justify-center">
              <li className="flex flex-row gap-1 items-center">
                <i className='text-teal-600 mr-2 fa fa-map'></i>
                Random ABC Lane, San Francisco, California, USA
              </li>
              <li className="flex flex-row gap-1 items-center">
                <i className='text-teal-600 mr-2 fa fa-phone-alt'></i>
                +1 (408) 312-1770
              </li>
              <li className="flex flex-row gap-1 items-center">
                <i className='text-teal-600 mr-2 fa fa-paper-plane'></i>
                jamboes2020@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </section>


      <div className='legal'>
        <span>
          Copyright ©2024 All rights reserved | Easy-Learn {" "}
        </span>
        <span className="cursor-pointer" onClick={openTutorModal}>| Tutor</span>
      </div>
    </>
  );
};

export default Footer;
