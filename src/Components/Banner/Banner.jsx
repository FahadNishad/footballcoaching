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
        <source src="https://player.vimeo.com/external/347925811.sd.mp4?s=e48915e5abacccf4471e3daf61611fd8af52ca87&profile_id=164&oauth2_token_id=57447761" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute z-10 w-full h-full bg-black opacity-50"></div>

      <div className="relative z-20 w-full h-full flex justify-center items-center">
        <div className="flex justify-center items-center flex-col gap-4 ">
          <p className="uppercase text-white">
            Life coaching for high-achievers
          </p>
          <h1 className="text-4xl font-bold text-white">One-on-one Coaching</h1>
          <p className="text-white">
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
              className="appearance-none py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-0 w-[400px]"
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
