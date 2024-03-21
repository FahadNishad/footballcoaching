import React from "react";
import { AiOutlineSearch } from "react-icons/ai"; 
import sessionhead from "../../assets/png/Frame 758.png"; 
import SectionWrapper from "../../Components/Wrapper/SectionWrapper";
import SessionCard from "../../Components/Sessions/Cards/sessionCard";
import { sessionCardData } from "../../data/sessionCard";
const SessionPage = () => {
  const filterOptions = {
    category: ["Category 1", "Category 2", "Category 3"],
    location: ["Location 1", "Location 2", "Location 3"],
    ageGroup: ["Age Group 1", "Age Group 2", "Age Group 3"],
    sessionType: ["Session Type 1", "Session Type 2", "Session Type 3"],
    players: ["Player 1", "Player 2", "Player 3"],
  };
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
          Sessions / Goal Keeper
        </p>
      </div>

      {/* Filters bar*/}
      <div className="flex justify-center items-center w-[100%] gap-2 md:flex-row flex-col flex-wrap">
        {/* search input form  */}
        <div className="flex items-center md:basis-3/12 relative w-full">
          <AiOutlineSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:bg-[#E6E6E6]"
          />
        </div>

        {/* filter  */}
        <div className="md:basis-6/12 w-[100%] flex justify-center items-center gap-3 flex-wrap flex-col md:flex-row ">
          {Object.keys(filterOptions).map((key, index) => (
            <select
              key={index}
              className="border border-gray-300 shadow-sm rounded-lg py-[9px] px-3 text-sm w-full md:w-[16%]"
            >
              <option>{`${key}`}</option>
              {filterOptions[key].map((option, optionIndex) => (
                <option key={optionIndex}>{option}</option>
              ))}
            </select>
          ))}
        </div>

        {/* reset button  */}
        <div className=" text-center py-1 w-full md:w-[20%]">
          <button className="reset-btn border border-gray-300 px-10 rounded-lg 
          shadow-sm py-2 text-sm hover:bg-main-dark duration-200 ease-in-out w-full md:w-[60%]">
            Reset
          </button>
        </div>
      </div>

      {/* coaches cards  */}

      <div className="w-full flex justify-center items-center flex-wrap gap-4 mt-[4rem] ">
        {
          sessionCardData.map((item , index )=>(

            <SessionCard data={item} key={index}/>
          ))
        }
      </div>
    </SectionWrapper>
  );
};

export default SessionPage;
