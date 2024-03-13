import React from "react";
import Banner from "../../Components/Banner/Banner";
import About from "../../Components/About/About";
import Coaches from "../../Components/Coaches/Coaches";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import { Services } from "../../Components/Services/Services";
import Teacher from "../../Components/Teacher/Teacher";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Coaches />
      <HomeSlider />
      <Teacher />
      <Services />
    </div>
  );
};

export default Home;
