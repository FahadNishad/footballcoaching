import React, { useEffect, useState } from "react";
import SectionWrapper from "../Wrapper/SectionWrapper";
import bgimg from "../../assets/images/teacherimg.jpg";
import icon from "../../assets/images/ticon.png";
import iphone from "../../assets/png/iPhone SE - 1.png";
import { input } from "@material-tailwind/react";

const Teacher = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SectionWrapper
      justifyContent={"center"}
      alignItems={"center"}
      margin={"lg:mt-[6rem]"}
      width={"85%"}
    >
      {windowWidth < 979 ? (
        <img src={iphone} width="100%" alt="small-screen-image" />
      ) : (
        <div
          className="w-full  lg:h-[630px] bg-cover bg-center"
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
      )}
    </SectionWrapper>
  );
};

export default Teacher;
