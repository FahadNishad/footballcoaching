import React, { useState, useEffect } from "react";
import { HiArrowLeft } from "react-icons/hi2";
import cta from "../../assets/png/CTA.png";
import { useRef } from "react";
import { Link } from "react-router-dom";

const VerificationScreen = () => {
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [verificationCode, setVerificationCode] = useState("");

  useEffect(() => {
    // Set focus on the first input field when the component mounts
    inputRefs[0].current.focus();
  }, []); // Empty dependency array to run only once when the component mounts

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
    if (e.key === "Backspace" && index > 0 && e.target.value === "") {
      // Move focus to the previous input if backspace is pressed on an empty input
      inputRefs[index - 1].current.focus();
    } else if (e.key === "Backspace" && index === 0 && e.target.value === "") {
      // Prevent default behavior to avoid navigation when backspace is pressed in the first input field when it's empty
      e.preventDefault();
    } else if (e.key === "Backspace" && e.target.value !== "") {
      // Clear the current input field content if backspace is pressed and it's not empty
      const newVerificationCode = [...verificationCode];
      newVerificationCode[index] = "";
      setVerificationCode(newVerificationCode.join(""));
    } 
  };
  
  

  return (
    <div className="w-full">
      <div className="xl:w-[85%] w-[100%]  xl:mx-auto">
        <div>
          <div className=" hidden xl:flex items-center gap-2 w-[5%] pt-3 ">
            <span>
              <HiArrowLeft />
            </span>
            <span>Verification</span>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row xl:py-[80px]">
          <div className="xl:w-[50%]">
            <img src={cta} width={'100%'} height={550} alt="cta coaching" />
          </div>
          <div className="md:px-20 py-10 md:py-20 xl:py-48 gap-2 flex flex-col ">
            <h1 className="text-center text-[24px] md:text-[32px] font-bold">
              Verification code
            </h1>
            <p className="flex justify-center text-center text-[#535763] text-[14px]">
              We just sent you a verification code. Check your <br /> inbox to
              get it.
            </p>
            <div className="flex  pt-3 mx-auto gap-5 md:gap-0 md:justify-between ">
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
                    caretColor: "blue",
                    outline: "none",
                  }}
                  className="bg-[#EFEFEF] rounded verification-input "
                />
              ))}
            </div>
            <p className="text-center">
              Re-send code in <span className="text-[#6759ff]">0:20</span>{" "}
            </p>
            <Link to='/newpassword' className="bg-[#efefef] hover:bg-gray-300 w-[70%] sm:w-[55%] md:w-[45%] lg:w-[35%] mx-auto text-center md:px-[105px] xl:w-full  text-[15px] font-semibold py-2 rounded-xl">
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationScreen;