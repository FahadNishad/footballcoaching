import React from "react";
import { HiArrowLeft } from "react-icons/hi2";
import cta from "../../../assets/png/CTA.png";
import chat from "../../../assets/png/chat.png";
import emailpart from '../../../assets/png/arrow down.png'
import { Link } from "react-router-dom";

const Select = () => {
  return (
    <div className="w-full">
      <div className="md:w-[85%] w-[90%] mx-auto">
        <div>
          <div className="flex items-center gap-2 w-[14%] pt-3 ">
            <span>
              <HiArrowLeft />
            </span>
            <span>Fotgot Password</span>
          </div>
        </div>
        <div className="flex py-[80px]">
          <div className="">
            <img src={cta} width={589} height={550} alt="cta coaching" />
          </div>
          <div className="px-20  py-28  flex flex-col ">
            <h1 className="text-[18px] w-[78%] mx-auto ">
              Select which contact details should we use to reset your password
            </h1>
            <div className="flex shadow-custom border-2 border-transparent hover:border-[#2196F3] gap-4 px-2 py-3 rounded-2xl my-3 w-[78%] mx-auto items-center ">
              <img src={chat} alt="chat-icon" />
              <div className="flex flex-col gap-1">
                <h3 className="text-[#757575] text-[14px] font-medium">
                  via SMS
                </h3>
                <h3 className="text-[16px] font-bold">+111111111</h3>
              </div>
            </div>
            <div className="flex shadow-custom border-2 border-transparent hover:border-[#2196F3] gap-4 px-2 py-3 rounded-2xl my-3 w-[78%] mx-auto items-center ">
              <img src={emailpart} alt="chat-icon" />
              <div className="flex flex-col gap-1">
                <h3 className="text-[#757575] text-[14px] font-medium">
                  via Email
                </h3>
                <h3 className="text-[16px] font-bold">and***ley@yourdomain.com</h3>
              </div>
            </div>
            <Link to='/verify' className="border w-[78%] mx-auto rounded-3xl py-2 px-[170px] text-white bg-[#59bec5] ">
                Verify
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
