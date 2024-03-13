import React from "react";
import SectionWrapper from "../Wrapper/SectionWrapper";
import aboutimg from "../../assets/images/aboutimg.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <SectionWrapper justifyContent={"center"} alignItems={"center"} margin={'mt-[6rem]'}>
      <div className="w-full flex justify-center items-center gap-5 md:flex-row flex-col">
        {/* img div  */}
        <img src={aboutimg} alt="" className="h-[550px] w-[589px]" />

        {/* content div */}

        <div  className="flex flex-col gap-4 items-start justify-start">
          <p className="uppercase text-main-dark text-secondheading">about us</p>
          <h1  className="text-mianheading">Why Our Coaching Service Special</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
          <Link className="bg-main-dark py-3 px-4 text-white ">Find More About US</Link>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
