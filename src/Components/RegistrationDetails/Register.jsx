import React from "react";
import { Link } from "react-router-dom";
import cta from "../../assets/png/CTA.png";
import { HiArrowLeft } from "react-icons/hi2";
import { IoEyeOffOutline } from "react-icons/io5";

const RegistrationPage = () => {
  return (
    <div className="w-full">
      <div className="md:w-[85%] w-[90%] mx-auto">
        <div>
          <div className="flex items-center justify-between w-[5%] pt-3 ">
            <HiArrowLeft />
            <span>Register</span>
          </div>
        </div>
        <div className="flex py-[140px]">
          <div className="w-5.5/12">
            <img src={cta} width={589} height={550} alt="cta coaching" />
          </div>
          <div className="px-20  w-6/12 ">
            <h1 className="text-center pt-3 ">Registration form</h1>
            <div className="flex justify-center py-3">
              <div className="border border-[#59bec5]  rounded-3xl flex justify-between w-9/12  ">
                <Link to="/registration">
                  <button className="hover:bg-[#59bec5] hover:text-white py-3 px-12 rounded-3xl">
                    Login
                  </button>
                </Link>
                <button className="hover:bg-[#59bec5] hover:text-white py-3 px-12 rounded-3xl">
                  Register
                </button>
              </div>
            </div>
            <p className="py-2 text-center opacity-65 ">
              Provide the all required information below
            </p>
            <div className="flex flex-col py-1">
              <label htmlFor="password" className="py-1">
                Register As
              </label>
              <select className="rounded-3xl border border-[#59bec5] py-2 px-4">
                <option value="Coach">Coach</option>
                <option value="Player">Player</option>
              </select>
            </div>
            <div className="flex flex-col  w-12/12 py-[2px]">
              <label htmlFor="name" className="py-1">
                Email Address
              </label>
              <input
                className="rounded-3xl px-5 border border-[#59bec5]  py-2 w-full "
                type="text"
                placeholder="Enter your Email Address"
                required
              />
            </div>
            <div className="flex flex-col py-[2px] ">
              <label htmlFor="name" className="py-1">
                User name
              </label>
              <input
                className="rounded-3xl border border-[#59bec5] px-5 py-2 w-full"
                type="text"
                placeholder="Enter your user name"
                required
              />
            </div>
            <div className="flex flex-col py-[2px]">
              <label htmlFor="name" className="py-1">
                Password
              </label>
              <div className="flex items-center border border-[#59bec5] rounded-3xl px-2">
                <input
                  className="rounded-3xl px-4 py-2 w-full "
                  type="text"
                  placeholder="Enter your Password"
                  required
                />
                <IoEyeOffOutline />
              </div>
            </div>
            <div className="flex flex-col py-[2px]">
              <label htmlFor="name" className="py-1">
                Conform Password
              </label>
              <div className="flex items-center border border-[#59bec5] rounded-3xl px-2">
                <input
                  className="rounded-3xl px-4 py-2 w-full "
                  type="text"
                  placeholder="Enter your Password"
                  required
                />
                <IoEyeOffOutline />
              </div>
            </div>
            <div className="text-center pt-2">
              <button className="border rounded-3xl py-2 px-[170px] text-white bg-[#59bec5] ">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
