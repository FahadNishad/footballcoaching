import React from "react";
import cta from "../../assets/png/CTA.png";
import { HiArrowLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { IoEyeOffOutline } from "react-icons/io5";
const Login = () => {
  return (
    <div className="w-full">
      <div className="xl:w-[85%] w-[100%] mx-auto">
        <div className="hidden xl:block" >
          <Link to="/">
            <div className="flex items-center gap-2 xl:w-[5%] pt-3 ">
              <HiArrowLeft />
              <span>Login</span>
            </div>
          </Link>
        </div>
        <div className="flex flex-col   xl:flex-row justify-between xl:py-[80px]">
          <div className="w-full  xl:w-6/12">
            <img
              src={cta}
              width={'100%'}
              height={550}
              alt="cta-
            coaching"
            />
          </div>
          <div className="w-full xl:w-5/12 my-auto">
            <h1 className=" pt-10 xl:pt-10 text-center">Welcome to Yugoiate</h1>
            {/* --- */}
            <div className="flex w-[45%]  mx-auto justify-center py-3">
              <div className="border border-[#59bec5]   rounded-3xl flex justify-between ">
                <Link to="/registration">
                  <button className="hover:bg-[#59bec5] hover:text-white py-3 px-6 sm:px-8 md:px-10 xl:px-10 rounded-3xl">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="hover:bg-[#59bec5] hover:text-white py-3  px-8 md:px-10 xl:px-12 rounded-3xl">
                    Register
                  </button>
                </Link>
              </div>
            
            </div>
            {/* ---- */}
            <div className="flex flex-col w-[80%] md:w-[60%] lg:w-[50%] xl:w-[90%] mx-auto pb-7">
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
            {/* ---- */}
            <div className="flex flex-col w-[80%] md:w-[60%] lg:w-[50%] xl:w-[90%] mx-auto pb-5">
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
            {/* ----- */}
            <div className="flex w-[80%] md:w-[60%] lg:w-[50%] xl:w-[90%] mx-auto justify-between ">
              <div className="flex gap-1  items-center">
                <input type="checkbox" />
                <label htmlFor="remember me" className="text-[12px]">
                  Remember me
                </label>
              </div>
              <div>
                <Link className="text-[12px]" to="/select">
                  Forgot Password ?{" "}
                </Link>
              </div>
            </div>
            <div className="text-center pt-2 pb-20 xl:pb-0 xl:pt-10">
              <button className="border rounded-3xl py-2 w-[80%] md:w-[60%] lg:w-[50%] xl:w-[90%] mx-auto text-white bg-[#59bec5] ">
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
