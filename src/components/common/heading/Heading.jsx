import React from "react";

const Heading = ({ subtitle, title }) => {
  return (
    <div id="heading" className="text-center sm:text-left ">
      <h3 className="text-sm sm:text-lg sm:block">{subtitle}</h3>
      <h1 className="text-md sm:text-4xl lg:text-5xl leading-tight font-extrabold opacity-70">{title}</h1>
    </div>
  );
};

export default Heading;
