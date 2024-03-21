import React from "react";
import { HiArrowLeft } from "react-icons/hi2";
import cta from "../../../assets/png/CTA.png";
import { Link } from "react-router-dom";
import { IoEyeOffOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa";


const NewPassword = () => {
  return (
    <div className="w-full">
      <div className="md:w-[85%] w-[90%] mx-auto">
        <div>
          <div className="flex items-center gap-2 w-[13%] pt-3 ">
            <span>
              <HiArrowLeft />
            </span>
            <span>Forgot Password</span>
          </div>
        </div>
        <div className="flex py-[80px]">
          <div className="">
            <img src={cta} width={589} height={550} alt="cta coaching" />
          </div>
          <div className="px-20 py-32 gap-2 flex flex-col ">
            <h1 className="text-center text-[32px] font-bold">
              Create New Password
            </h1>

            <label className="px-[10px]">Password</label>
            <div className="flex justify-between items-center border w-[100%] mx-auto rounded-3xl py-2 px-4" style={{border: "1px solid #59bec5"}} >
           <span className="flex gap-2 items-center" >
           <FaLock/>
              <input
                className=" text-black "
                placeholder="Enter new password"
                style={{ outline: "none" }}
              />
           </span>
              <IoEyeOffOutline />
            </div>
            <label className="px-[10px] pt-2">Conform Password</label>
            <div className="flex justify-between items-center border w-[100%] mx-auto rounded-3xl py-2 px-4" style={{border: "1px solid #59bec5"}} >
           <span className="flex gap-2 items-center" >
           <FaLock/>
              <input
                className=" text-black "
                placeholder="Conform new password"
                style={{ outline: "none" }}
              />
           </span>
              <IoEyeOffOutline />
            </div>
            <Link
              to="/registration"
              className="border w-full mt-8 mx-auto  rounded-3xl py-2 px-[170px] text-white bg-[#59bec5] "
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
