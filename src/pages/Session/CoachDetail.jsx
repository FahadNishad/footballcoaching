import React from "react";
import SectionWrapper from "../../Components/Wrapper/SectionWrapper";
import sessionhead from "../../assets/png/Frame 758.png";
import batch from "../../assets/images/coachdetailicons/icon (1).png";
import star from "../../assets/images/coachdetailicons/icon (2).png";
import { FaStar } from "react-icons/fa6";

const CoachDetail = () => {
  const custom_shadow =
    "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]";
  return (
    <SectionWrapper
      justifyContent={"center"}
      alignItems={"center"}
      margin={"mt-[4rem]"}
      direction={"col"}
      gap={"gap-3"}
    >
      {/* Header */}
      <div className="relative">
        <img src={sessionhead} alt="headerimage" className="" />
        <p className="absolute bottom-0 left-11 text-white text-mianheading font-bold">
          Coach details
        </p>
      </div>

      {/* coach detail section  */}

      <div className="w-full flex items-center justify-center flex-wrap mt-[3.5rem] ">
        {/* left side  */}
        <div className="flex flex-col gap-8 w-[100%] md:w-[48%]  justify-start items-start">
          <h1 className="font-semibold  text-[35px] leading-10">
            First Touch & Finishing Inside <br />
            The Box
          </h1>
          {/* video  */}
          <div className="w-[85%] border-2 border-gray-400">
            <video width="100%" height="auto" controls>
              <source
                src="https://player.vimeo.com/progressive_redirect/playback/371843199/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=2a9732f80d938deb6894bdf167f134c3f39079faa6314d4bb001b7e9a654f85e"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <p className="font-semibold">Overview:</p>
          <p className="text-[#676767] text-[13px] w-[85%]">
            Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel
            congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor
            sit amet consectetur.. Lorem ipsum dolor sit amet consectetur. Erat
            auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac
            arcu elit ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
            amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam
            cras neque mauris ac arcu elit ipsum dolor sit amet consectetur..
            Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel
            congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor
            sit amet consectetur.
          </p>
          {/* button  */}

          <div className="bg-main-dark py-3 px-8">
            <p className="text-white font-[530]">Request a demo</p>
          </div>
        </div>

        {/* right side  */}
        <div className=" w-[100%] md:w-[48%]  py-4 px-6 flex flex-col gap-6 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  mt-[2rem] md:mt-0">
          {/* card 1 */}
          <div
            className={`w-full border-1 flex flex-col gap-3 rounded px-2 py-3 ${custom_shadow}`}
          >
            <div className="">
              <p className="text-[#676767] leading-5 text-[11px]">Coach:</p>
              <p className="text-[#383737] font-semibold text-[13px]">
                Coach Name Here
              </p>
            </div>
            <div className="">
              <p className="text-[#676767] leading-5 text-[11px]">Duration:</p>
              <p className="text-[#383737] font-semibold text-[13px]">
                15 minutes
              </p>
            </div>
            <div className="">
              <p className="text-[#676767] leading-5 text-[11px]">Age Range</p>
              <p className="text-[#383737] font-semibold text-[13px]">
                U9-U12, U13-U16, U16+
              </p>
            </div>
          </div>
          {/* card 2 */}
          <div
            className={`w-full border-1 flex flex-col gap-3 rounded px-2 py-3 ${custom_shadow}`}
          >
            <div className="">
              <p className="text-[#383737] font-semibold text-[13px] mb-2">
                About Sid
              </p>
              <p className="text-[#676767] leading-4 text-[13px]">
                Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam
                vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum
                dolor sit amet consectetur.. Lorem ipsum dolor sit amet
                consectetur. Erat auctor a aliquam vel congue luctus. Leo diam
                cras neque mauris ac arcu elit ipsum dolor sit amet
                consectetur.Lorem ipsum dolor sit amet consectetur. Erat auctor
                a aliquam vel congue luctus. Leo diam cras neque mauri.
              </p>
            </div>
          </div>
          {/* card 3*/}
          <div>
            <p className="text-[10px] text-black leading-8">Total Experience</p>
            <div
              className={`w-full border-1 flex flex-col gap-3 rounded-lg  ${custom_shadow}`}
            >
              <div className="flex justify-between items-center">
                <div className="py-[0.3rem] px-[0.6rem]">
                  <p className="text-[#383737] font-semibold text-[13px]">
                    7 Years
                  </p>
                  <p className="text-[#676767] leading-2 text-[11px]">
                    of total experince
                  </p>
                </div>
                <div className="bg-[#FFA78D] p-[0.8rem] rounded-r-lg">
                  <img src={batch} alt="batch" />
                </div>
              </div>
            </div>

            <div>
              <p className="text-[10px] text-black leading-8">Ratings</p>
              <div
                className={`w-full border-1 flex flex-col gap-3 rounded-lg  ${custom_shadow}`}
              >
                <div className="flex justify-between items-center">
                  <div className="py-[0.3rem] px-[0.6rem]">
                    <p className="text-[#383737] font-semibold text-[13px]">
                      4 stars
                    </p>
                    <p className="text-[#676767] leading-2 text-[11px]">
                      from 34 customers
                    </p>
                  </div>
                  <div className="bg-[#FFCB00] p-[0.8rem] rounded-r-lg">
                    <img src={star} alt="batch" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[10px] text-black leading-8">
                Customer Reviews
              </p>
              <div
                className={`w-full border-1 flex flex-col gap-3 rounded-lg  ${custom_shadow}`}
              >
                <div className="py-2 px-3">
                  <p className="text-[#413B89] leading-2 text-[10px] font-semibold">
                    Ankit Srivastava
                  </p>
                  <div className="py-[0.2rem] flex gap-1">
                    <FaStar className="text-[#FFCB00]" />
                    <FaStar className="text-[#FFCB00]" />
                    <FaStar className="text-[#FFCB00]" />
                    <FaStar className="text-[#FFCB00]" />
                    <FaStar className="text-[#49454F]" />
                  </div>
                  <p className="text-[#676767] leading-4 text-[13px] mt-1">
                    Lorem ipsum dolor sit amet consectetur. Erat auctor a
                    aliquam vel congue luctus. Leo diam cras neque mauris ac
                    arcu elit ipsum dolor sit amet consectetur.. Lorem ipsum
                    dolor sit amet consectetur. Erat auctor a aliquam vel congue
                    luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor
                    sit amet consectetur.Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[#C10B0E] text-sm">See all reviews -</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CoachDetail;
