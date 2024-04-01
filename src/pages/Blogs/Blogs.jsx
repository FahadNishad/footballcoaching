import React from "react";
import SectionWrapper from "../../Components/Wrapper/SectionWrapper";
import sessionhead from "../../assets/png/Frame 758.png";
import BlogsCard from "../../Components/Blogs/BlogsCard";
import { blogCardData } from "../../data/belogCard";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Blogs = () => {
  return (
    <>
      <SectionWrapper
        justifyContent={"center"}
        alignItems={"center"}
        margin={"lg:mt-[4rem]"}
        direction={"col"}
        gap={"gap-3"}
      >
        {/* Header */}
        <div className="relative">
          <img src={sessionhead}  alt="headerimage" className="" />
          <p className="absolute bottom-0 left-11 text-white text-mianheading font-bold">
            Blogs
          </p>
        </div>

        {/* blog card  */}

        <div className=" w-[90%] sm:w-[70%] md:w-[100%] lg:w-[100%] flex justify-center items-center flex-wrap gap-[3rem] mt-[2.8rem]">
          {blogCardData.map((item, index) => (
            <Link to={`/blogdetail/${index}`} key={index} >
              <BlogsCard data={item} key={index} />
            </Link>
          ))}
        </div>
      </SectionWrapper>
      <div className="w-full border border-[#C7C7C7] mt-16"></div>
      {/* bottom bar  */}
      <div className="w-full  mt-[1.5rem] flex justify-center mb-5">
        <div className="md:w-[70%]  flex items-center justify-between flex-wrap p-2 w-full">
          {/* right  side  */}
          <div className="  md:w-[70%] xl:w-[35%] px-3 lg:px-0 pb-5 xl:pb-0 w-full">
            <p className="text-[20px] font-semibold text-black">
              Subscribe our Newsletter
            </p>
            <p className="text-[13px] text-[#999999] leading-1">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna
            </p>
          </div>
          {/* left side  */}
          <div className="lg:w-[80%] lg:gap-8 xl:gap-0  flex flex-col lg:flex-row  items-center w-full">
            {/* input  */}
            <div className=" w-full  xl:w-[70%] relative ">
              <input
                type="text"
                placeholder="Your email address"
                className="border w-full py-[0.6rem] px-3 rounded-3xl text-[14px] text-[#808080] focus:outline-none"
              />
              <div className="py-[0.6rem] rounded-3xl absolute bg-main-dark px-7 text-white right-0 top-0 text-[15px]">
                Subscribe
              </div>
            </div>
            {/* iocn  */}
            <div className="w-full lg:w-[30%] pt-5 lg:pt-0 flex justify-center items-center gap-4">
              <div className="text-white bg-main-dark p-2 rounded-full">
                <FaFacebookF />
              </div>
              <FaTwitter />
              <FaPinterestP />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;