import React, { useEffect, useState } from "react";
import { HiArrowLeft } from "react-icons/hi2";
import cta from "../../../assets/png/CTA.png";
import chat from "../../../assets/png/chat.png";
import emailpart from "../../../assets/png/arrow down.png";
import { Link } from "react-router-dom";

const Select = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  
  useEffect(() => {
    const handleReset = () => {
      setIsSmall(window.innerWidth < 400);
    };
    window.addEventListener("resize", handleReset);
    return () => {
      window.removeEventListener("resize", handleReset);
    };
  }, []);
  
  useEffect(() => {
    const handleResize = () => {
      setIsSelected(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log("test", isSelected);
  
  return (
    <div className=" lg:w-[85%] mx-auto">
      <div className="mx-1 lg:mx-0 flex items-center gap-2 xl:w-[14%] pb-3 lg:pb-0 pt-3">
        <Link to="/registration" className="flex items-center gap-2">
          <HiArrowLeft />
          <span>Forgot Password</span>
        </Link>
      </div>
      <div className=" grid grid-cols-1 pb-8 lg:pb-0 lg:grid-cols-2 gap-6">
        <div className="lg:py-[80px]">
          <img src={cta} width='100%' className="w-full" alt="cta coaching" />
        </div>
        <div className="flex flex-col justify-center items-center pt-10 lg:pt-0">
          <div className="px-4 py-4">
            <h1 className="text-18px">Select which contact details should we use to reset your password</h1>
            <div className="flex shadow-custom border-2 border-transparent hover:border-[#2196F3] gap-4 px-2 py-3 rounded-2xl my-3 items-center">
              <img src={chat} alt="chat-icon" />
              <div className="flex flex-col gap-1">
                <h3 className="text-[#757575] text-14px font-medium">via SMS</h3>
                <h3 className={`${isSmall ? "text-10px" : "text-16px"} font-bold`}>+111111111</h3>
              </div>
            </div>
            <div className="flex shadow-custom border-2 border-transparent hover:border-[#2196F3] gap-4 px-2 py-3 rounded-2xl my-3 items-center">
              <img src={emailpart} alt="chat-icon" />
              <div className="flex flex-col gap-1">
                <h3 className="text-[#757575] text-14px font-medium">via Email</h3>
                <h3 className={`${isSmall ? "text-10px" : "text-16px"} font-bold`}>and***ley@yourdomain.com</h3>
              </div>
            </div>
            <div className="flex justify-center">
              <Link to="/verify" className="border rounded-3xl py-2 px-[85px] text-white bg-[#59bec5] text-center">Verify</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
