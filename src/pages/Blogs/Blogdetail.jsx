import React from "react";
import SectionWrapper from "../../Components/Wrapper/SectionWrapper";
import headerimg from "../../assets/images/blogdetail.png";
import banner from "../../assets/images/blog_banner.png";
import commentimg from "../../assets/images/comment_img.png";
import { commentsData } from "../../data/comments";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
const Blogdetail = () => {
  return (
    <>
      <SectionWrapper
        alignItems={"center"}
        justifyContent={"center"}
        margin={"mt-[2rem]"}
      >
        {/* mian wrapper  */}
        <div className="w-[73%]">
          {/* header section  */}
          <div className="relative">
            {/* img  */}
            <img src={headerimg} alt="" />

            {/* card  */}
            <div className="flex flex-col gap-6 absolute bottom-[-45px] bg-white w-[470px] p-6 rounded-lg left-14 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <div className="bg-[#3C9FA0] px-1 py-[2px] w-[20%] rounded flex justify-center items-center">
                <p className="text-[12px] text-white">Technology</p>
              </div>
              <p className="text-black text-[26px] font-bold leading-8">
                The Impact of Technology on the Football Game will bring some
                change.
              </p>
              <p className="text-[12px] text-[#97989F]">August 20, 2022</p>
            </div>
          </div>
          {/* banner section  */}
          <div className=" w-[100%] mt-28  flex justify-center items-center">
            <img src={banner} alt="banner not available" className="w-[70%]" />
          </div>
          {/* paragrapghs section  */}
          <div className="flex justify-center items-center w-full flex-col gap-5 mt-16">
            <div>
              <p>
                Traveling is an enriching experience that opens up new horizons,
                exposes us to different cultures, and creates memories that last
                a lifetime. However, traveling can also be stressful and
                overwhelming, especially if you don't plan and prepare
                adequately. In this blog article, we'll explore tips and tricks
                for a memorable journey and how to make the most of your
                travels.
              </p>
              <p className="mt-8">
                One of the most rewarding aspects of traveling is immersing
                yourself in the local culture and customs. This includes trying
                local cuisine, attending cultural events and festivals, and
                interacting with locals. Learning a few phrases in the local
                language can also go a long way in making connections and
                showing respect.
              </p>
            </div>
            <div className="mt-12">
              <h1 className="text-[20px] text-black font-semibold">
                Research Your Destination
              </h1>
              <p className="mt-4">
                Before embarking on your journey, take the time to research your
                destination. This includes understanding the local culture,
                customs, and laws, as well as identifying top attractions,
                restaurants, and accommodations. Doing so will help you navigate
                your destination with confidence and avoid any cultural faux
                pas.
              </p>
              <p className="mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
                ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
                euismod elementum nisi quis eleifend quam adipiscing vitae.
                Viverra adipiscing at in tellus.
              </p>
            </div>
            <div className="mt-12">
              <h1 className="text-[20px] text-black font-semibold">
                Research Your Destination
              </h1>
              <p className="mt-4">
                Before embarking on your journey, take the time to research your
                destination. This includes understanding the local culture,
                customs, and laws, as well as identifying top attractions,
                restaurants, and accommodations. Doing so will help you navigate
                your destination with confidence and avoid any cultural faux
                pas.
              </p>
              <p className="mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
                ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
                euismod elementum nisi quis eleifend quam adipiscing vitae.
                Viverra adipiscing at in tellus.
              </p>
            </div>
          </div>
          <div className="w-full border mt-6"></div>

          {/* comments section  */}

          <div className="w-full  mt-20">
            <div className="w-[60%]">
              <p className="font-semibold text-[#676D73] mb-3">Comments</p>
              {/* comments  */}
              {commentsData.map((item, index) => (
                <div className="w-full mt-6" key={index}>
                  <div className="flex justify-between w-full items-center">
                    <div className="flex items-center gap-3">
                      <img src={item.img} alt="img" />
                      <p className="font-semibold">{item.usename}</p>
                    </div>
                    <div>
                      <p className="text-[12px] text-[#676D73]">{item.date}</p>
                    </div>
                  </div>
                  <div className="w-[80%] mt-2 mb-3">
                    <p className="text-[13px]">{item.disc}</p>
                  </div>
                  <div className="w-full border border-[#cececf]"></div>
                </div>
              ))}

              <div className="mt-4 text-[13px] text-[#009FD9]">
                <p>Show all comments</p>
              </div>
            </div>
          </div>

          {/* post comment section  */}
          <div className="w-full mt-8 ">
            <h1 className="text-black font-semibold">Post Your Comments</h1>
            <form action="">
              {/* input section  */}
              <div className="w-full flex flex-col md:flex-row mt-8 gap-2">
                {/* input group  */}
                <div className="w-[33%]">
                  <p className="text-[14px] uppercase font-thin text-[#535151]">
                    Name*
                  </p>
                  <input
                    type="text"
                    placeholder="First & Last Name"
                    className="border border-[#BBBBBB] text-[14px] w-full py-[6px] px-3 rounded"
                  />
                </div>
                <div className="w-[33%]">
                  <p className="text-[14px] uppercase font-thin text-[#535151]">
                    Email*
                  </p>
                  <input
                    type="text"
                    placeholder="Enter email"
                    className="border border-[#BBBBBB] text-[14px] w-full py-[6px] px-3 rounded"
                  />
                </div>
                <div className="w-[33%]">
                  <p className="text-[14px] uppercase font-thin text-[#535151]">
                    Phone*
                  </p>
                  <input
                    type="text"
                    placeholder="enter phone"
                    className="border border-[#BBBBBB] text-[14px] w-full py-[6px] px-3 rounded"
                  />
                </div>
              </div>
              {/* check box   */}
              <div className="w-full flex gap-2  justify-start items-center mt-4">
                <input type="checkbox" />
                <p className="text-[13px] font-semibold">
                  Save my name,email,and website in this browser for the next
                  time I comment
                </p>
              </div>
              {/* text area  */}
              <div className="mt-4 w-full">
                <textarea
                  class="resize border rounded-md p-2 w-full h-24 focus:outline-none "
                  placeholder="write your comment here"
                ></textarea>
                <div>
                  <p className="bg-main-dark w-[13%] flex justify-center items-center rounded text-white font-bol mt-4 mb-3 py-2 cursor-pointer">
                    Post Comment
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </SectionWrapper>

      {/* bottom bar  */}
        <div className="w-full border mt-3"></div>
      <div className="w-full  mt-[1.5rem] flex justify-center mb-5">
        <div className="md:w-[70%]  flex items-center justify-between flex-wrap p-2 w-full">
          {/* right  side  */}
          <div className="lg:w-[35%] w-full">
            <p className="text-[20px] font-semibold text-black">
              Subscribe our Newsletter
            </p>
            <p className="text-[13px] text-[#999999] leading-1">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna
            </p>
          </div>
          {/* left side  */}
          <div className="lg:w-[60%] flex  items-center w-full">
            {/* input  */}
            <div className="w-[70%] relative ">
              <input
                type="text"
                placeholder="Your email address"
                className="border w-full py-[0.6rem] px-3 rounded-3xl text-[14px] text-[#808080] focus:outline-none"
              />
              <div className="py-[0.6rem] rounded-3xl absolute bg-main-dark px-7 text-white right-0 top-0 text-[15px]">
                Subscribe
              </div>
            </div>
            {/* iocn  */}
            <div className="w-[30%] flex justify-center items-center gap-4">
              <div className="text-white bg-main-dark p-2 rounded-full">
                <FaFacebookF />
              </div>
              <FaTwitter />
              <FaPinterestP />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogdetail;