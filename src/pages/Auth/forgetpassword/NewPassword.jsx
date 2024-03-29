import React from "react";
import { HiArrowLeft } from "react-icons/hi2";
import cta from "../../../assets/png/CTA.png";
import { Link } from "react-router-dom";
import { IoEyeOffOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { Grid } from "@mui/material";

const NewPassword = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item md={12} sm={12} xs={12}>
        <div className="w-full">
          <div className="md:w-[85%] w-[90%] mx-auto">
            <div>
              <div className=" flex items-center gap-2 xl:w-[40%] pb-3 xl:pb-3 pt-3 ">
                <span>
                  <HiArrowLeft />
                </span>
                <span>Forgot Password</span>
              </div>
            </div>
            <Grid container spacing={6} className=" pb-30 xl:py-[80px]" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Grid item md={6} sm={12} xs={12} xl={5} >
            <img src={cta} width="100%" alt="cta coaching" />
          </Grid>
              <Grid item md={6} sm={12} xs={12} xl={5} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '50px' }}>
                <h1 className="text-center text-[32px] font-bold">
                  Create New Password
                </h1>

                <label className="px-[10px] w-[73%] ">Password</label>
                <div className="flex justify-between items-center border w-[70%] mx-auto rounded-3xl py-2 px-4" style={{border: "1px solid #59bec5"}} >
                  <span className="flex gap-2 items-center" >
                    <FaLock/>
                    <input
                      className=" text-black "
                      placeholder="Enter new password"
                      style={{ outline: "none" }}
                    />
                  </span>
                  <IoEyeOffOutline />
                </div>
                <label className="px-[10px] pt-2 w-[73%] ">Conform Password</label>
                <div className="flex justify-between items-center border w-[70%] mx-auto rounded-3xl py-2 px-4" style={{border: "1px solid #59bec5"}} >
                  <span className="flex gap-2 items-center" >
                    <FaLock/>
                    <input
                      className=" text-black "
                      placeholder="Conform new password"
                      style={{ outline: "none" }}
                    />
                  </span>
                  <IoEyeOffOutline />
                </div>
                <Link
                  to="/registration"
                  className="border w-[70%] mt-8 mx-auto  rounded-3xl py-2 px-[170px] text-white bg-[#59bec5] "
                >
                  Login
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default NewPassword;
