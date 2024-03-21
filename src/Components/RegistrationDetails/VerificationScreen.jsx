import React, { useState } from "react";
import { HiArrowLeft } from "react-icons/hi2";
import cta from "../../assets/png/CTA.png";
import { useRef } from "react";

const VerificationScreen = () => {
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [verificationCode, setVerificationCode] = useState("");

  const handleInputChange = (index, value) => {
    if (value === "") return; // Don't update state if input is empty

    // Update the verification code state
    const newVerificationCode = [...verificationCode];
    newVerificationCode[index] = value;
    setVerificationCode(newVerificationCode.join(""));

    if (index < inputRefs.length - 1) {
      // Move focus to the next input
      inputRefs[index + 1].current.focus();
    }
  };

  const handleBackspace = (index, e) => {
    if (
      e.key === "Backspace" &&
      index > 0 &&
      inputRefs[index].current.value === ""
    ) {
      // Move focus to the previous input if backspace is pressed on an empty input
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <div className="w-full">
      <div className="md:w-[85%] w-[90%] mx-auto">
        <div>
          <div className="flex items-center gap-2 w-[5%] pt-3 ">
            <span>
              <HiArrowLeft />
            </span>
            <span>Verification</span>
          </div>
        </div>
        <div className="flex py-[80px]">
          <div className="">
            <img src={cta} width={589} height={550} alt="cta coaching" />
          </div>
          <div className="px-20 py-48 gap-3 flex flex-col ">
            <h1 className="text-center text-[32px]">Verification code</h1>
            <p className="flex justify-center text-center text-[#535763] text-[14px]">
              We just sent you a verification code. Check your <br /> inbox to
              get it.
            </p>
            <div className="flex w-full justify-between ">
              {[0, 1, 2, 3].map((index) => (
                <input
                  type="text"
                  key={index}
                  ref={inputRefs[index]}
                  name={`digit-${index + 1}`}
                  value={verificationCode[index] || ""}
                  maxLength={1}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleBackspace(index, e)}
                  style={{
                    width: "40px",
                    height: "45px",
                    marginRight: "10px",
                    textAlign: "center",
                  }}
                  className="bg-[#EFEFEF] rounded "
                />
              ))}
            </div>
            <button className="bg-[#efefef] px-[105px] font-semibold py-2 rounded-xl">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationScreen;