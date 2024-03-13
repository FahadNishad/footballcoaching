import React from "react";
import SectionWrapper from "../Wrapper/SectionWrapper";
import bgimg from "../../assets/images/teacherimg.jpg";
import icon from "../../assets/images/ticon.png";
const Teacher = () => {
  return (
    <SectionWrapper
      justifyContent={"center"}
      alignItems={"center"}
      margin={"mt-[6rem]"}
    >
      <div
        className="w-full h-[630px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className=" w-[50%] ml-[6rem] mt-[5rem] flex flex-col gap-10">
          <div>
            <h1 className="font-semibold text-mianheading text-white">
              You too, <br /> become a super <br />
              teacher!
            </h1>
            <div className="border border-white w-[55%]"></div>
          </div>
          <div className="flex  justify-start gap-2 ml-4">
            <img src={icon} alt="" className="w-[20px] h-[20px]" />
            <p className="text-white">
              Share your knowledge, live what you are passionate <br /> about
              and become independent.
            </p>
          </div>
          <div className="mt-[7rem]">
            <p className="text-white font-semibold">Know more</p>
            <div className="border border-white w-[4%]"></div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Teacher;
