import React from "react";
import SectionWrapper from "../Wrapper/SectionWrapper";
import aboutimg from "../../assets/images/aboutimg.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <SectionWrapper justifyContent={"center"} alignItems={"center"} margin={'lg:mt-[6rem]'} width={'85%'}>
      <div className="w-full flex flex-wrap justify-center items-center  xl:gap-16  xl:flex-row xl:flex-nowrap ">
        {/* img div  */}
        <img src={aboutimg} alt="" className="w-[100%]   xl:h-[550px] xl:w-[589px]" />

        {/* content div */}

        <div  className="flex flex-col gap-4 lg:items-start lg:px-0 xl:justify-start">
          <p className="uppercase text-main-dark text-center pt-3 xl:pt-0 text-[16px] lg:text-secondheading">about us</p>
          <h1  className=" text-[18px] md:text-[18px] lg:text-mianheading">Why Our Coaching Service Special</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
          <Link className="bg-main-dark text-center w-9/12 mx-auto lg:w-full xl:mx-0 py-3 xl:px-4 text-white ">Find More About US</Link>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
