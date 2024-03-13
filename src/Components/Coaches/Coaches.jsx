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
      margin={"mt-[6rem]"}
    >
      <p className="text-main-dark text-secondheading uppercase">Best Choice</p>
      <h1 className="text-mianheading">Our Best Football Coaches </h1>

      <div className="flex justify-center items-center flex-wrap gap-4">
        {coachesCardData.map((cardData, index) => (
          <Card key={index}  cardData={cardData} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Coaches;
