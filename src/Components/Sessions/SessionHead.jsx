import React from "react";
import session_header from "../../assets/png/Frame 758.png";
import { Session_Data } from "../../data/Sessions";
import { Link } from "react-router-dom";



const SessionHead = () => {
  return (
    <div>
      <div className="py-16">
        <img
          src={session_header}
          style={{ width: "98%", margin: "0 auto" }}
          alt="session_header"
        />
      </div>
      <div className="w-[95%] mx-auto gap-4 flex flex-wrap justify-between pb-16 ">
        {Session_Data.map((data, index) => (
          <Link
          to={`/session/${index}`}
            key={index}
            className="w-[24%] flex flex-col px-6 py-6 gap-4  rounded-2xl "
            style={{
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <img
              src={data.image}
              width={361}
              style={{ paddingTop: "10px" }}
              height={212}
              alt="data_image"
            />
            <h1 className="text-[#666666] text-[24px] px-3 font-semibold">
              {data.heading}
            </h1>
            <p className="px-3 text-[#7D8FA9] text-[14px] ">{data.paragraph}</p>
            <button className="text-[#565656] px-3 pt-5 text-left ">
              {data.buttonText}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SessionHead;