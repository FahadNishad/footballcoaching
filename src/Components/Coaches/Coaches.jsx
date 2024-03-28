import React from "react";
import SectionWrapper from "../Wrapper/SectionWrapper";
import Card from "./Card";
import { coachesCardData } from "../../data/data";
const Coaches = () => {
  return (
    <SectionWrapper
      justifyContent={"center"}
      alignItems={"center"}
      direction={"col"}
      gap={"3rem"}
      margin={" mt-[2rem] lg:mt-[6rem]"}
      
      width={'85%'}
    >
      <p className="text-main-dark pb-4 lg:pb-0 text-secondheading uppercase">Best Choice</p>
      <h1 className=" text-[22px] pb-10 lg:pb-0 lg:text-mianheading">Our Best Football Coaches </h1>

      <div className="flex justify-center items-center flex-wrap gap-4">
        {coachesCardData.map((cardData, index) => (
          <Card key={index}  cardData={cardData} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Coaches;
