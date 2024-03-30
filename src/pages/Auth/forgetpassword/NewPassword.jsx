import React from "react";
import { HiArrowLeft } from "react-icons/hi2";
import cta from "../../../assets/png/CTA.png";
import { Link } from "react-router-dom";
import { IoEyeOffOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa";

const NewPassword = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full">
        <div className="lg:w-[85%] w-full mx-auto">
          <div className="hidden lg:flex items-center gap-2 lg:w-[40%] pb-3 lg:pb-3 pt-3">
            <HiArrowLeft />
            <span>Forgot Password</span>
          </div>
          <div className="flex flex-col pb-30 lg:py-[80px] lg:flex-row lg:justify-between">
            <div className="lg:w-[50%] ">
              <img src={cta} width="100%" alt="cta coaching" />
            </div>
            <div className="  xs:w-full mx-auto lg:w-[45%] flex flex-col justify-center items-center py-10 lg:pt-0">
              <h1 className="text-center text-[24px] lg:text-[28px] xl:text-[32px] font-bold">
                Create New Password
              </h1>
              <label className="lg:px-[10px] w-full lg:w-[73%]">Password</label>
              <div className="flex justify-between items-center border lg:w-[70%] mx-auto rounded-3xl py-2 px-4" style={{ border: "1px solid #59bec5" }}>
                <span className="flex gap-2 items-center">
                  <FaLock />
                  <input className="text-black" placeholder="Enter new password" style={{ outline: "none" }} />
                </span>
                <IoEyeOffOutline />
              </div>
              <label className="lg:px-[10px] pt-2 w-full lg:w-[73%]">Confirm Password</label>
              <div className="flex justify-between items-center border lg:w-[70%] mx-auto rounded-3xl py-2 px-4" style={{ border: "1px solid #59bec5" }}>
                <span className="flex gap-2 items-center">
                  <FaLock />
                  <input className="text-black" placeholder="Confirm new password" style={{ outline: "none" }} />
                </span>
                <IoEyeOffOutline />
              </div>
              <Link to="/registration" className="border lg:w-[70%] mt-8 mx-auto rounded-3xl py-2 px-[120px] lg:px-[130px] xl:px-[170px]  text-white bg-[#59bec5]">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
