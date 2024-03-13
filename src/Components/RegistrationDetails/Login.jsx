import React from "react";
import cta from "../../assets/png/CTA.png";
import { HiArrowLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { IoEyeOffOutline } from "react-icons/io5";

const Login = () => {
  return (
    <div className="w-full">
      <div className="md:w-[85%] w-[90%] mx-auto">
        <div>
          <div className="flex items-center justify-between w-[5%] pt-3 ">
            <HiArrowLeft />
            <span>Login</span>
          </div>
        </div>
        <div className="flex py-[140px]">
          <div className="">
            <img src={cta} width={589} height={550} alt="cta coaching" />
          </div>
          <div className="px-20 py-24">
            <h1 className="text-center">Welcome to Lorem</h1>
            <div className="flex justify-center py-3">
              <div className="border border-[#59bec5]  rounded-3xl flex justify-between w-10/12  ">
                <Link to="/registration">
                  <button className="hover:bg-[#59bec5] hover:text-white py-3 px-12 rounded-3xl">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="hover:bg-[#59bec5] hover:text-white py-3 px-12 rounded-3xl">
                    Register
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col pb-7">
              <label htmlFor="name" className="py-1">
                User name
              </label>
              <input
                className="rounded-3xl border border-[#59bec5] px-4 py-2"
                type="text"
                placeholder="Enter your User name"
                required
              />
            </div>
            <div className="flex flex-col pb-5">
              <label htmlFor="password" className="py-1">
                Password
              </label>
              <div className="flex items-center border border-[#59bec5] rounded-3xl px-4">
                <input
                  className="rounded-3xl  py-2 w-full "
                  type="text"
                  placeholder="Enter your Password"
                  required
                />
                <IoEyeOffOutline />
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="flex gap-1  items-center">
                <input type="checkbox" />
                <label htmlFor="remember me" className="text-[12px]">
                  Remember me
                </label>
              </div>
              <div>
                <button className="text-[12px]">Forgot Password ? </button>
              </div>
            </div>
            <div className="text-center pt-10">
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

export default Login;
