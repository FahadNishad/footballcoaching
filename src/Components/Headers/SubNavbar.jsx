// import React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { BiSolidDownArrow } from "react-icons/bi";
import { MdMenuOpen } from "react-icons/md";
import SectionWrapper from "../Wrapper/SectionWrapper";
const SubNavbar = () => {
  const shadow = "shadow-lg";
  const border = "border border-blue-800";
  return (
    <SectionWrapper
      shadow={shadow}
      justifyContent={"between"}
      alignItems={"center"}
    >
      <div>
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>

      <div className="md:flex md:gap-10 md:items-center hidden ">
        <Link to="/session" className="text-[16px] flex gap-2 items-center">
          Sessions <BiSolidDownArrow className="text-[10px]" />{" "}
        </Link>
        <Link className="text-[16px] flex gap-2 items-center">
          Resouces <BiSolidDownArrow className="text-[10px]" />
        </Link>
        <Link to='/blogs' className="text-[16px] flex gap-2 items-center">
          Blogs 
        </Link>
        <Link to='/verification' className="text-[16px] flex gap-2 items-center">
          Events 
        </Link>
        <Link to="/registration" className="text-[16px]">
          Login{" "}
        </Link>

        <Link
          to="/register"
          className="bg-main-dark px-4 py-2
         rounded text-[16px] text-white"
        >
          Sign Up{" "}
        </Link>
      </div>

      <div className="md:hidden block">
        <MdMenuOpen className="text-[30px] " />
      </div>
    </SectionWrapper>
  );
};

export default SubNavbar;
