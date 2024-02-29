import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ onModalOpen }) => {
  const [click, setClick] = useState(false);

  return (
    <>
      <header className="mt-5 bg-[#ffffff73] mx-6">
        <nav className="flexSB">

          <div className="start bg-[#1eb2a6] text-white py-8 px-20">
            <div className="button cursor-pointer" onClick={onModalOpen}>
              <Link to="/" className="font-semibold text-lg -mt-2">Easy Learn</Link>
            </div>
          </div>

          <ul className={click ? "mobile-nav" : "flexSB flex flex-row gap-3 justify-center items-center"} onClick={() => setClick(false)}>
            <li className="h-fit p-3 text-lg opacity-95 hover:opacity-100 font-semibold text-white transition-all duration-300">
              <Link to="/" className="hover:text-white sm:hover:text-[#1eb2a6]">Home</Link>
            </li>
            <li className="h-fit p-3 text-lg opacity-95 hover:opacity-100 font-semibold text-white transition-all duration-300">
              <Link to="/courses" className="hover:text-white sm:hover:text-[#1eb2a6]">All Courses</Link>
            </li>
            <li className="h-fit p-3 text-lg opacity-95 hover:opacity-100 font-semibold text-white transition-all duration-300">
              <Link to="/about" className="hover:text-white sm:hover:text-[#1eb2a6]">About</Link>
            </li>
            <li className="h-fit p-3 text-lg opacity-95 hover:opacity-100 font-semibold text-white transition-all duration-300">
              <Link to="/team" className="hover:text-white sm:hover:text-[#1eb2a6]">Team</Link>
            </li>
            <li className="h-fit p-3 text-lg opacity-95 hover:opacity-100 font-semibold text-white transition-all duration-300">
              <Link to="/pricing" className="hover:text-white sm:hover:text-[#1eb2a6]">Pricing</Link>
            </li>
            <li className="h-fit p-3 text-lg opacity-95 hover:opacity-100 font-semibold text-white transition-all duration-300 md:mr-4">
              <Link to="/contact" className="hover:text-white sm:hover:text-[#1eb2a6]">Contact</Link>
            </li>
          </ul>
          <button className="toggle block md:hidden bg-transparent text-white text-2xl absolute top-0 right-0 -mt-20" onClick={() => setClick(!click)}>
            {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
