import React from "react";
import HeroImage from "../assets/HeroImage.jpg";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const HeroSection = () => {
  return (
    <section className="h-[500px] relative mt-10">
      <img src={HeroImage} alt="" className="w-full h-full object-cover" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full lg:w-[882px] space-y-8">
        <h1 className="text-3xl lg:text-[40px] font-[900] text-center">
          We provide the best care to our furry friends!
        </h1>
        <p className="text-xl lg:text-[26px] text-center">
          Top Quality of Pet Product Store.
        </p>
      </div>
      <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center absolute top-1/2 left-4 -translate-y-1/2 bg-[#007FFF] text-white text-[12px] font-[800]">
        <AiOutlineLeft />
      </div>
      <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center absolute top-1/2 right-4 -translate-y-1/2 bg-white text-[#007FFF] text-[12px] font-[800]">
        <AiOutlineRight />
      </div>
    </section>
  );
};

export default HeroSection;
