import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="https://player.vimeo.com/progressive_redirect/playback/602463559/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=de18ad7214b9212007c3d5bd2ed1cf5f343154c834161d8b51131b285096fe16" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute z-10 w-full h-full bg-black opacity-50"></div>

      <div className="relative z-20 w-full h-full flex justify-center items-center">
        <div className="flex justify-center items-center flex-col gap-4 ">
          <p className="uppercase text-white text-[16px]  lg:text-[20px] ">
            Life coaching for high-achievers
          </p>
          <h1 className="text-4xl font-bold text-white text-[30px] lg:text-[60px] ">One-on-one Coaching</h1>
          <p className="text-white text-[14px] text-center lg:text-[20px] ">
            It’s time to enjoy professional success and a fulfilling personal
            life.
          </p>

          <form
            onSubmit={handleSearch}
            className="flex items-center justify-center mt-4 bg-white rounded  "
          >
            <div className="flex-shrink-0 ml-2">
              <RiSearchLine className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="appearance-none lg:py-2   lg:px-4 text-gray-700 leading-tight focus:outline-none focus:ring-0 lg:w-[400px]"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="flex-shrink-0 bg-main-dark text-white font-bold py-2 px-4 focus:outline-none focus:ring-0 rounded-r"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
