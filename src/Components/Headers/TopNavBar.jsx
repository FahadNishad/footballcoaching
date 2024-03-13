import React from "react";
import SectionWrapper from "../Wrapper/SectionWrapper";

const TopNavBar = () => {
  const height = "36px";
  const color = "bg-black";
  return (
    <SectionWrapper height={height} color={color} >
      <div className="w-full h-15  relative">
        <div className="flex justify-end items-center h-full  gap-4">
          <p className="text-white">Contact Us</p>

          <p className="text-white">Download App</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TopNavBar;
