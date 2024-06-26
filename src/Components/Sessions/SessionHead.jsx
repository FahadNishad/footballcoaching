import React from "react";
import session_header from "../../assets/png/Frame 758.png";
import { Session_Data } from "../../data/Sessions";
import { Link } from "react-router-dom";

const SessionHead = () => {
  return (
    <div>
      <div className="py-10 lg:py-16">
        <img
          src={session_header}
          style={{ width: "98%", margin: "0 auto" }}
          alt="session_header"
        />
      </div>
      <div className="xl:w-[95%] mx-auto gap-2 flex flex-wrap justify-between pb-16 ">
        {Session_Data.map((data, index) => (
          <Link
          to={`/session/${index}`}
            key={index}
            className=" mx-auto w-[80%] sm:w-[60%] md:w-[40%]  lg:w-[24%] flex flex-col rounded-xl px-2 py-2 mb-6 gap-3   "
            style={{
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <img
              src={data.image}
              width='100%'
              
              height={212}
              alt="data_image"
            />
            <h1 className="text-[#666666] text-[24px] px-3 font-semibold">
              {data.heading}
            </h1>
            <p className="px-3 text-[#7D8FA9] text-[14px] ">{data.paragraph}</p>
            <button className="text-[#565656] px-3 text-[14px] text-left ">
              {data.buttonText}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SessionHead;
