import React from "react";
import { HiArrowLeft } from "react-icons/hi2";
import cta from "../../../assets/png/CTA.png";
import chat from "../../../assets/png/chat.png";
import emailpart from '../../../assets/png/arrow down.png';
import { Link } from "react-router-dom";
import { Grid } from '@mui/material';

const Select = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item md={10} sm={12} xs={12}>
        <div>
          <div className="flex items-center gap-2 w-[14%] pt-3 ">
            <span>
              <HiArrowLeft />
            </span>
            <span>Forgot Password</span>
          </div>
        </div>
        <Grid container spacing={6} className="py-[80px]" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Grid item md={6} sm={12} xs={12} xl={5} >
            <img src={cta} width="100%" alt="cta coaching" />
          </Grid>
          <Grid item md={6} sm={12} xs={12} xl={5} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '50px' }}>
            <div className="px-4 py-4">
              <h1 className="text-[18px]">
                Select which contact details should we use to reset your password
              </h1>
              <div className="flex shadow-custom border-2 border-transparent hover:border-[#2196F3] gap-4 px-2 py-3 rounded-2xl my-3 items-center ">
                <img src={chat} alt="chat-icon" />
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#757575] text-[14px] font-medium">
                    via SMS
                  </h3>
                  <h3 className="text-[16px] font-bold">+111111111</h3>
                </div>
              </div>
              <div className="flex shadow-custom border-2 border-transparent hover:border-[#2196F3] gap-4 px-2 py-3 rounded-2xl my-3 items-center ">
                <img src={emailpart} alt="chat-icon" />
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#757575] text-[14px] font-medium">
                    via Email
                  </h3>
                  <h3 className="text-[16px] font-bold">and***ley@yourdomain.com</h3>
                </div>
              </div>
              <div className="flex justify-center">
                <Link to='/verify' className="border rounded-3xl py-2 px-[85px] text-white bg-[#59bec5] text-center">
                  Verify
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Select;
