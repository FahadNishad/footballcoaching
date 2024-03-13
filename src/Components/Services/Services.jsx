import React, { useState } from "react";
import SectionWrapper from "../Wrapper/SectionWrapper";
import serviceimg from "../../assets/images/aboutimg.png";
import { BiSolidDownArrow } from "react-icons/bi";
import { Fa1 } from "react-icons/fa6";
import { servicesData } from "../../data/Home";

export const Services = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [index]: !prevOpenSections[index],
    }));
  };

  return (
    <SectionWrapper
      justifyContent={"center"}
      alignItems={"center"}
      margin={"mt-[6rem]"}
    >
      <div className="w-full flex items-center justify-center gap-3 md:flex-row flex-col">
        <img src={serviceimg} alt="ourservcies" className="sm:w-[50%] h-[532px] w-full" />
        <div className="sm:w-[50%] flex flex-col gap-1 pt-1 pb-1 w-full">
          <div className="">
            <p className="text-main-dark text-[20px] uppercase ">How it Work</p>
            <h1 className="text-mianheading">Get our Coaching Service</h1>
            <p className="text-[20px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full ">

          {servicesData.map((item, index) => (
            <div className="flex justify-center items-start flex-col shadow-inner border w-full " key={index}>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center justify-between px-2 py-1">
                  <div className="flex justify-center items-center gap-3">
                    <div
                      className={`bg-[#BEFEFA] rounded-full p-2 flex justify-center items-center `}
                    >
                      <item.num className="text-[18px] text-main-dark" />
                    </div>
                    <div className={`font-semibold text-[17px] `}>
                      {item.title}
                    </div>
                  </div>
                  <div
                    className="bg-[#BEFEFA] p-2 rounded-full flex justify-center items-center"
                    onClick={() => toggleSection(index)}
                  >
                    <BiSolidDownArrow
                      className={`cursor-pointer text-main-dark text-[17px] ${
                        openSections[index] ? "rotate-180" : ""
                      } transition-transform duration-500`}
                    />
                  </div>
                </div>
              </div>
              <div
                className={`w-full bg-[#f1efef] transition-height duration-700 ease-in-out overflow-hidden ${
                  openSections[index] ? "max-h-[200px]" : "max-h-0"
                }`}
              >
                <p
                  className={`ml-6 pb-6 pt-4 w-[70%] transition duration-700 ease-in-out ${
                    openSections[index] ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.content}
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
