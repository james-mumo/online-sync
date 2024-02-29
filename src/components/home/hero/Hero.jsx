import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading subtitle="WELCOME TO Easy-Learn" title="Best Online Education Expertise" />
            <p className="hidden sm:block">Discover the unparalleled ease of learning on our platform, where simplicity meets excellence. Join us and experience why we're the premier choice for mastering new skills effortlessly.</p>
            <div className="button flex flex-col sm:flex-row mt-4">
              <button className="primary-btn mb-2 sm:mr-2 sm:mb-0">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button className="hidden sm:inline-block mb-2 sm:mb-0"> {/* Hidden on small screens */}
                VIEW COURSES <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
