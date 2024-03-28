// import React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { BiSolidDownArrow } from "react-icons/bi";
import { MdMenuOpen } from "react-icons/md";
import SectionWrapper from "../Wrapper/SectionWrapper";
import React, { useState } from "react";

import { Drawer, IconButton } from "@material-tailwind/react";

const SubNavbar = () => {
  const [open, setOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handleLinkClick = () => {
    setIsDrawerOpen(false); // Close the drawer when a link is clicked
  };
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const shadow = "shadow-lg";
  const border = "border border-blue-800";
  return (
    <SectionWrapper
      shadow={shadow}
      justifyContent={"between"}
      alignItems={"center"}
    >
      <div>
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>

      <div className="lg:flex lg:gap-10 lg:items-center hidden ">
        <Link to="/session" className="text-[16px] flex gap-2 items-center">
          Sessions <BiSolidDownArrow className="text-[10px]" />{" "}
        </Link>
        <Link className="text-[16px] flex gap-2 items-center">
          Resouces <BiSolidDownArrow className="text-[10px]" />
        </Link>
        <Link to="/blogs" className="text-[16px] flex gap-2 items-center">
          Blogs
        </Link>
        <Link className="text-[16px] flex gap-2 items-center">Events</Link>
        <Link to="/registration" className="text-[16px]">
          Login{" "}
        </Link>

        <Link
          to="/register"
          className="bg-main-dark px-4 py-2
         rounded text-[16px] text-white"
        >
          Sign Up{" "}
        </Link>
      </div>

      <div className="lg:hidden block">
        <span onClick={openDrawer}>
          <MdMenuOpen className="text-[30px] cursor-pointer" />
        </span>
        <React.Fragment>
          <Drawer
            open={open}
            onClose={closeDrawer}
            className="p-6 bg-black text-white "
          >
            <div className="mb-10  flex items-center justify-between">
              <Link to={"/"}>
                <Logo />
              </Link>
              <IconButton
                variant="text"
                color="blue-gray"
                onClick={closeDrawer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>
            <div className="flex flex-col gap-6">
              <Link
                to="/session"
                className="text-[16px] flex gap-2 items-center"
                onClick={closeDrawer}
              >
                Sessions
              </Link>
              <Link
                onClick={closeDrawer}
                className="text-[16px] flex gap-2 items-center"
              >
                Resouces
              </Link>
              <Link
                onClick={closeDrawer}
                to="/blogs"
                className="text-[16px] flex gap-2 items-center"
              >
                Blogs
              </Link>
              <Link
                onClick={closeDrawer}
                className="text-[16px] flex gap-2 items-center"
              >
                Events
              </Link>
              <Link to="/registration" className="text-[16px]">
                Login{" "}
              </Link>

              <Link
                onClick={closeDrawer}
                to="/register"
                className="bg-main-dark px-4 py-2
         rounded text-[16px] text-white"
              >
                Sign Up{" "}
              </Link>
            </div>
          </Drawer>
        </React.Fragment>
      </div>
    </SectionWrapper>
  );
};

export default SubNavbar;
