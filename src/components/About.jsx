import React from "react";

import { BsCheck2Circle } from "react-icons/bs";

import AboutImage from "../assets/About.png";

import Button from "./Button";

const About = () => {
  return (
    <section className="my-64 lg:my-36 max-w-screen-lg h-[606px] mx-auto flex flex-col gap-10 lg:gap-32 lg:flex-row items-center justify-center px-12 lg:px-0">
      <div className="basis-1/2 shrink-0">
        <img src={AboutImage} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="space-y-8 px-6 lg:px-0">
        <h1 className="text-center lg:text-start text-3xl lg:text-[45px] font-[900] text-[#17224D]">
          About
        </h1>
        <p className="text-start text-xl lg:text-[22px] font-[500] text-[#515151] w-full xl:w-[510px]">
          Pet House & Animal clinic was established with moto to provide
          qualitative and affordable animal healthcare service to your doorstep.
        </p>
        <ul className="list-none space-y-5 md:space-y-2">
          <li className="flex items-center gap-4 h-[32px]">
            <span className="text-[15px] text-[#007FFF]">
              <BsCheck2Circle />
            </span>
            <p className="text-[18px] font-[600] text-[#515151]">
              Comprehensive
            </p>
          </li>
          <li className="flex items-center gap-4 h-[32px]">
            <span className="text-[15px] text-[#007FFF]">
              <BsCheck2Circle />
            </span>
            <p className="text-[18px] font-[600] text-[#515151]">
              Professional
            </p>
          </li>
          <li className="flex items-center gap-4 h-[32px]">
            <span className="text-[15px] text-[#007FFF]">
              <BsCheck2Circle />
            </span>
            <p className="text-[18px] font-[600] text-[#515151]">
              Compassionate veterinary service.
            </p>
          </li>
        </ul>
        <div className="flex justify-center lg:justify-start">
          <Button buttonText={"Contact"} />
        </div>
      </div>
    </section>
  );
};

export default About;
