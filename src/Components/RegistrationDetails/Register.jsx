import React, { useState } from "react";
import { Link } from "react-router-dom";
import cta from "../../assets/png/CTA.png";
import { HiArrowLeft } from "react-icons/hi2";
import { IoEyeOffOutline } from "react-icons/io5";
import { RiArrowDownSFill } from "react-icons/ri";

const RegistrationPage = () => {
  const [icon, setIcon] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Coach");
  const handleIconDrop = () => {
    if (icon === false) {
      setIcon(true);
    } else {
      setIcon(false);
    }
  };
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIcon(false);
  };
  return (
    <div className="w-full">
      <div className="md:w-[85%] w-[90%] mx-auto">
        <div>
          <div className="flex items-center gap-2 justify-between w-[5%] pt-3 ">
            <span>
              <HiArrowLeft />
            </span>
            <span>Register</span>
          </div>
        </div>
        <div className="flex justify-between py-[80px]">
          <div className="w-5.5/12">
            <img src={cta} width={589} height={550} alt="cta coaching" />
          </div>
          <div className="w-6/12 ">
            <h1 className="text-center pt-3 ">Registration form</h1>
            <div className="flex justify-center py-3">
              <div className="border border-[#59bec5]  rounded-3xl flex justify-between md:w-[60%] lg:[80%] xl-[70%] mx-auto  ">
                <Link to="/registration">
                  <button className="hover:bg-[#59bec5] hover:text-white py-3 sm:px-6 lg:px-8 xl:px-12 rounded-3xl">
                    Login
                  </button>
                </Link>
                <button className="hover:bg-[#59bec5] hover:text-white py-3 sm:px-6 lg:px-8 xl:px-12 rounded-3xl">
                  Register
                </button>
              </div>
            </div>
            <p className="py-2 text-center opacity-65 ">
              Provide the all required information below
            </p>
            <div className="flex flex-col w-10/12 mx-auto py-1">
              <label htmlFor="password" className="py-1">
                Register As<span style={{ color: "red" }}>*</span>
              </label>
              <div className="relative w-full">
                <h4
                  onClick={handleIconDrop}
                  className="rounded-3xl flex justify-between items-center w-full border id1 border-[#59bec5] py-[3px] px-4"
                >
                  Register as {selectedOption}
                  <span>
                    <RiArrowDownSFill fontSize="34px" color="gray" />
                  </span>
                </h4>
                {icon && (
                  <div className="absolute z-50 bg-white border gap-1 rounded-2xl px-5 mt-1 border-gray-500 w-full">
                    <h5 onClick={() => handleOptionSelect("Player")}>Player</h5>
                    <h5 onClick={() => handleOptionSelect("Coach")}>Coach</h5>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col  w-10/12 mx-auto py-[2px]">
              <label htmlFor="name" className="py-1">
                Email Address<span style={{ color: "red" }}>*</span>
              </label>
              <input
                className="rounded-3xl px-5 border border-[#59bec5]  py-2 w-full "
                type="text"
                placeholder="Enter your Email Address"
                required
              />
            </div>
            <div className="flex flex-col w-10/12 mx-auto py-[2px] ">
              <label htmlFor="name" className="py-1">
                User name<span style={{ color: "red" }}>*</span>
              </label>
              <input
                className="rounded-3xl border border-[#59bec5] px-5 py-2 w-full"
                type="text"
                placeholder="Enter your user name"
                required
              />
            </div>
            <div className="flex flex-col w-10/12 mx-auto py-[2px]">
              <label htmlFor="name" className="py-1">
                Password<span style={{ color: "red" }}>*</span>
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
            <div className="flex flex-col w-10/12 mx-auto py-[2px]">
              <label htmlFor="name" className="py-1">
                Conform Password<span style={{ color: "red" }}>*</span>
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
              <button className="border rounded-3xl py-2 w-[84%] text-white bg-[#59bec5] ">
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