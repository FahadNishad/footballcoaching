import React from "react";
import prelogo from "../../assets/png/prelogo.png";
import { Link } from "react-router-dom";
import fb from "../../assets/png/fb.png";
import instagram from "../../assets/png/instagram.png";
import x from "../../assets/png/x.png";

const useLink = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "About Us",
    link: "#",
  },
  {
    name: "Privacy Policy",
    link: "#",
  },
  {
    name: "How It Works",
    link: "#",
  },
];

const icons = [
  { image: fb, link: "#" },
  { image: instagram, link: "#" },
  { image: x, link: "#" },
];

const Footer = () => {
  return (
    <>
      <div className="bg-[#D9D9D9]">
        <div className=" flex flex-col  xl:flex-row justify-between pt-[60px] mx-auto w-[85%] ">
        <div className="xl:border-0 xl:pl-8 xl:items-start xl:text-left">
            <img src={prelogo} alt="logo" className="mx-auto xl:mx-0" />
            <p className="pt-[30px] text-center xl:text-left font-sans">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div>
            <h1 className="text-[#49BBBD] text-[25px] py-4 md:py-0 font-sans xl:w-[137px] text-center	xl:text-left md:pb-[30px] ">
              Useful Links
            </h1>
            <div className="flex flex-col font-sans text-center	 text-[18px] gap-[15px] font-regular md:items-center">
              {useLink.map((link, index) => (
                <Link key={index} to={link.link}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className=" flex flex-col gap-[11px] md:gap-[15px] font-sans	">
            <h1 className="text-[#49BBBD] text-[25px]  text-center pt-3 md:pt-0  xl:pb-[17px] ">
              Contact Us
            </h1>
            <h4 className="text-[18px] font-regular  text-center">
              info@website.com
            </h4>
            <h4 className="text-[18px] font-regular text-center">
              1-100-100-300
            </h4>
            <h4 className="text-[18px] font-regular text-center">
              3500 Root Main Rd <br /> Street Root, CA
            </h4>
            <div className="flex pt-2 md:pt-0 justify-center gap-4 xl:gap-0  xl:justify-between">
              {icons.map((icon, index) => (
                <Link key={index}>
                  <img src={icon.image} alt="icons" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#d9d9d9] pt-[30px] font-sans	pb-4">
        <div className=" text-center xl:text-left xl:w-[80%] mx-auto ">© Copyright websiteurl.com</div>
      </div>
    </>
  );
};

export default Footer;
